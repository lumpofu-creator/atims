import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { IncidentLogComponent } from './incident-log.component';
import { FieldAgent, IncidentRecord, IncidentService, IncidentStatus } from './incident.service';
import { SelectModule } from 'primeng/select';

interface IncidentPageEvent {
  first?: number | null;
  rows?: number | null;
}

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    ButtonModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TableModule,
    TagModule,
    TextareaModule,
    ToastModule,
    ToggleButtonModule,
    IncidentLogComponent
  ],
  providers: [ConfirmationService, MessageService],
  template: `
    <p-toast />

    <section class="incidents-page">
      <header class="page-heading">
        <div>
          <h1>Incidents</h1>
          <p>Review open incidents and verify completed repairs.</p>
        </div>
        <span class="incident-count">{{ totalRecords }} {{ includeHistory ? 'incidents' : 'open incidents' }}</span>
      </header>

      <div class="card incidents-table-card">
        <p-table
          #incidentTable
          [value]="incidents"
          dataKey="id"
          [(selection)]="selectedIncidents"
          [selectionPageOnly]="true"
          [lazy]="true"
          [paginator]="true"
          [rows]="rows"
          [first]="first"
          [totalRecords]="totalRecords"
          [rowsPerPageOptions]="[10, 20, 50]"
          [loading]="loading"
          [rowHover]="true"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} incidents"
          [tableStyle]="{ 'min-width': '73rem' }"
          styleClass="incidents-table"
          (onLazyLoad)="loadIncidents($event)"
        >
          <ng-template #caption>
            <div class="incidents-toolbar">
              <div class="toolbar-filters">
                <p-iconfield iconPosition="left" class="search-field">
                  <p-inputicon><i class="pi pi-search"></i></p-inputicon>
                  <input pInputText type="text" [value]="searchTerm" (input)="onSearch(incidentTable, $event)" placeholder="Search asset, State ID or notes" aria-label="Search incidents" />
                </p-iconfield>
                <p-togglebutton
                  [(ngModel)]="includeHistory"
                  onLabel="Open Incidents"
                  offLabel="Incident History"
                  onIcon="pi pi-inbox"
                  offIcon="pi pi-history"
                  ariaLabel="Include incident history"
                  (onChange)="onHistoryToggle(incidentTable)"
                />
              </div>
              <div class="toolbar-actions">
                <p-button label="Assign to agent" icon="pi pi-user-plus" [outlined]="true" [disabled]="!selectedIncidents.length" (onClick)="openAssignDialog()" />
                <p-button label="Log Incident" icon="pi pi-plus" [outlined]="true" (onClick)="logDialogVisible = true" />
              </div>
            </div>
          </ng-template>

          <ng-template #header>
            <tr>
              <th class="selection-column"><p-tableHeaderCheckbox /></th>
              <th class="state-column">State ID</th>
              <th class="asset-column">Asset</th>
              <th class="notes-column">Incident notes</th>
              <th class="status-column">Status</th>
              <th class="agent-column">Assigned to</th>
              <th class="date-column">Reported</th>
              <th class="date-column">Resolved</th>
              <th class="actions-column">Actions</th>
            </tr>
          </ng-template>

          <ng-template #body let-incident>
            <tr>
              <td class="selection-cell"><p-tableCheckbox [value]="incident" [disabled]="incident.status === 'resolved'" /></td>
              <td><span class="state-id">{{ incident.stateId }}</span></td>
              <td><span class="asset-name">{{ incident.assetName }}</span></td>
              <td><span class="notes-cell">{{ incident.fieldNotes }}</span></td>
              <td><p-tag [value]="statusLabel(incident.status)" [severity]="statusSeverity(incident.status)" /></td>
              <td>{{ incident.assignedUserName || 'Unassigned' }}</td>
              <td>{{ incident.reportedAt | date: 'medium' }}</td>
              <td>{{ incident.resolvedAt ? (incident.resolvedAt | date: 'medium') : '—' }}</td>
              <td class="actions-cell">
                <p-button
                  *ngIf="incident.status !== 'resolved'"
                  [label]="incident.status === 'pending_forensic_clearance' ? 'Review repair' : 'Verify repair'"
                  icon="pi pi-check-circle"
                  severity="success"
                  [outlined]="true"
                  (onClick)="openVerifyDialog(incident)"
                />
                <span *ngIf="incident.status === 'resolved'" class="muted">—</span>
              </td>
            </tr>
          </ng-template>

          <ng-template #emptymessage>
            <tr><td colspan="9" class="empty-cell">{{ searchTerm ? 'No incidents match your search.' : includeHistory ? 'No incident history found.' : 'There are no open incidents.' }}</td></tr>
          </ng-template>
        </p-table>
      </div>
    </section>

    <p-dialog [(visible)]="logDialogVisible" header="Log Incident" [modal]="true" [draggable]="false" [style]="{ width: 'min(72rem, calc(100vw - 2rem))' }" [contentStyle]="{ 'max-height': '80vh', 'overflow-y': 'auto' }">
      <app-incident-log (logged)="onIncidentLogged($event)" />
    </p-dialog>

    <p-dialog [(visible)]="assignDialogVisible" header="Assign incidents to a Field Agent" [modal]="true" [draggable]="false" [closable]="!assigning" [style]="{ width: 'min(42rem, calc(100vw - 2rem))' }" [contentStyle]="{ 'padding-bottom': '0.5rem' }">
      <div class="assign-form">
        <p class="assign-summary">Assign {{ selectedIncidents.length }} selected incident{{ selectedIncidents.length === 1 ? '' : 's' }} and their linked tasks to one Field Agent.</p>
        <div class="form-field">
          <label for="incident-agent">Field Agent <span class="required-mark">*</span></label>
          <p-select inputId="incident-agent" [(ngModel)]="selectedAgentId" [options]="fieldAgents" optionLabel="name" optionValue="id" placeholder="Select a Field Agent" [loading]="loadingAgents" [disabled]="loadingAgents || assigning" [showClear]="true" appendTo="body" scrollHeight="18rem" fluid>
            <ng-template #item let-agent>
              <div class="agent-option"><span>{{ agent.name }}</span><small>{{ agent.email }}</small></div>
            </ng-template>
          </p-select>
          <small *ngIf="!loadingAgents && !fieldAgents.length" class="field-error">No Field Agents are configured. Set a user's role to “Field Agent” and retry.</small>
        </div>
      </div>
      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [text]="true" [disabled]="assigning" (onClick)="assignDialogVisible = false" />
        <p-button label="Assign incidents" icon="pi pi-user-plus" [loading]="assigning" [disabled]="!selectedAgentId || loadingAgents || assigning" (onClick)="assignSelectedIncidents()" />
      </ng-template>
    </p-dialog>

    <p-dialog [(visible)]="verifyDialogVisible" header="Verify repair" [modal]="true" [draggable]="false" [closable]="!verifying" [style]="{ width: 'min(38rem, calc(100vw - 2rem))' }">
      <form [formGroup]="verifyForm" class="verify-form" (ngSubmit)="verifyRepair()">
        <div *ngIf="verifyIncident as incident" class="verify-asset-summary">
          <span class="state-id">{{ incident.stateId }}</span>
          <strong>{{ incident.assetName }}</strong>
        </div>

        <div class="form-field">
          <label for="resolution-notes">Repair notes <span class="required-mark">*</span></label>
          <textarea pTextarea id="resolution-notes" formControlName="fieldNotes" rows="4" maxlength="1000" placeholder="Describe the repair and work completed."></textarea>
          <small class="field-error" *ngIf="verifyForm.controls.fieldNotes.touched && verifyForm.controls.fieldNotes.invalid">Repair notes are required.</small>
        </div>

        <div class="verify-location" [class.verify-location--ready]="verifyCoordinates !== null">
          <div>
            <strong>Repair location</strong>
            <span *ngIf="verifyCoordinates as coordinates">{{ coordinates.latitude | number: '1.5-5' }}, {{ coordinates.longitude | number: '1.5-5' }} (±{{ coordinates.accuracy | number: '1.0-0' }} m)</span>
            <span *ngIf="!verifyCoordinates">GPS is required to validate the repair location.</span>
            <small *ngIf="verifyLocationError" class="field-error">{{ verifyLocationError }}</small>
          </div>
          <p-button type="button" [label]="locating ? 'Locating…' : verifyCoordinates ? 'Refresh GPS' : 'Enable GPS'" icon="pi pi-map-marker" severity="secondary" [outlined]="true" [loading]="locating" [disabled]="locating" (onClick)="requestVerifyLocation()" />
        </div>
      </form>
      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [text]="true" [disabled]="verifying" (onClick)="verifyDialogVisible = false" />
        <p-button label="Verify repair" icon="pi pi-check" severity="success" [loading]="verifying" [disabled]="verifyForm.invalid || !verifyCoordinates || verifying" (onClick)="verifyRepair()" />
      </ng-template>
    </p-dialog>
  `,
  styles: [`
    .incidents-page { display: flex; flex-direction: column; gap: 1rem; }
    .page-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .page-heading h1 { margin: 0; font-size: 1.5rem; line-height: 1.3; font-weight: 600; }
    .page-heading p { margin: 0.35rem 0 0; color: var(--text-color-secondary); }
    .incident-count { color: var(--text-color-secondary); white-space: nowrap; }
    .incidents-table-card { padding: 0; overflow: hidden; }
    .incidents-toolbar, .toolbar-filters, .toolbar-actions { display: flex; align-items: center; gap: 0.75rem; }
    .incidents-toolbar { justify-content: space-between; flex-wrap: wrap; }
    .search-field { width: min(32rem, 55vw); }
    .search-field input { width: 100%; }
    .state-column { min-width: 10rem; }
    .asset-column { min-width: 13rem; }
    .notes-column { min-width: 20rem; }
    .status-column { min-width: 11rem; }
    .date-column { min-width: 12rem; white-space: nowrap; }
    .selection-column, .selection-cell { width: 3rem; min-width: 3rem; text-align: center; }
    .agent-column { min-width: 12rem; }
    .actions-column { min-width: 10rem; }
    .actions-cell { white-space: nowrap; }
    .state-id { font-family: var(--font-family); font-size: 0.875rem; }
    .asset-name { font-weight: 600; }
    .notes-cell { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-height: 1.45; }
    .muted { color: var(--text-color-secondary); }
    .empty-cell { padding: 2rem !important; text-align: center; color: var(--text-color-secondary); }
    .verify-form { display: flex; flex-direction: column; gap: 1.25rem; }
    .assign-form { display: flex; flex-direction: column; gap: 1rem; }
    .assign-summary { margin: 0; color: var(--text-color-secondary); line-height: 1.5; }
    .agent-option { display: flex; flex-direction: column; gap: 0.15rem; }
    .agent-option small { color: var(--text-color-secondary); }
    .verify-asset-summary { display: flex; flex-direction: column; gap: 0.25rem; padding: 0.9rem 1rem; border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .verify-asset-summary strong { font-size: 1rem; }
    .form-field { display: flex; flex-direction: column; gap: 0.5rem; }
    .form-field label { font-weight: 600; }
    .required-mark, .field-error { color: var(--red-500, #ef4444); }
    .verify-location { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem; border: 1px solid var(--surface-border); border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .verify-location > div { display: flex; flex-direction: column; gap: 0.25rem; }
    .verify-location span { color: var(--text-color-secondary); }
    .verify-location--ready { border-color: color-mix(in srgb, var(--green-500, #22c55e) 45%, var(--surface-border)); }
    @media (max-width: 640px) { .page-heading { align-items: flex-start; flex-direction: column; } .incidents-toolbar, .toolbar-filters, .toolbar-actions { align-items: stretch; flex-direction: column; } .search-field { width: 100%; } .verify-location { align-items: stretch; flex-direction: column; } }
  `]
})
export class IncidentListComponent implements OnInit {
  incidents: IncidentRecord[] = [];
  selectedIncidents: IncidentRecord[] = [];
  fieldAgents: FieldAgent[] = [];
  searchTerm = '';
  includeHistory = false;
  logDialogVisible = false;
  assignDialogVisible = false;
  loadingAgents = false;
  assigning = false;
  selectedAgentId: number | null = null;
  verifyDialogVisible = false;
  loading = true;
  verifying = false;
  locating = false;
  first = 0;
  rows = 10;
  totalRecords = 0;
  verifyIncident: IncidentRecord | null = null;
  verifyCoordinates: { latitude: number; longitude: number; accuracy: number } | null = null;
  verifyLocationError = '';
  readonly verifyForm;
  private requestId = 0;

  constructor(
    private incidentService: IncidentService,
    private messageService: MessageService,
    private changeDetector: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.verifyForm = this.fb.group({ fieldNotes: ['', [Validators.required, Validators.maxLength(1000)]] });
  }

  ngOnInit(): void {
    this.loadIncidents({ first: 0, rows: this.rows });
  }

  loadIncidents(event: IncidentPageEvent = {}): void {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    const requestId = ++this.requestId;
    this.loading = true;
    this.incidentService.getIncidents(Math.floor(this.first / this.rows) + 1, this.rows, this.searchTerm, this.includeHistory).subscribe({
      next: page => setTimeout(() => {
        if (requestId !== this.requestId) return;
        this.incidents = page.items;
        this.totalRecords = page.total;
        this.loading = false;
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        if (requestId !== this.requestId) return;
        this.incidents = [];
        this.totalRecords = 0;
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Could not load incidents', detail: 'Please refresh the list and try again.' });
        this.changeDetector.markForCheck();
      })
    });
  }

  onSearch(table: { first: number | null | undefined }, event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value.trim();
    this.selectedIncidents = [];
    this.first = 0;
    table.first = 0;
    this.loadIncidents({ first: 0, rows: this.rows });
  }

  onHistoryToggle(table: { first: number | null | undefined }): void {
    this.selectedIncidents = [];
    this.first = 0;
    table.first = 0;
    this.loadIncidents({ first: 0, rows: this.rows });
  }

  onIncidentLogged(uploadFailed: boolean): void {
    this.logDialogVisible = false;
    this.includeHistory = false;
    this.selectedIncidents = [];
    this.first = 0;
    this.messageService.add(uploadFailed
      ? { severity: 'warn', summary: 'Incident logged; image upload failed', detail: 'The incident was recorded, but the image could not be attached.' }
      : { severity: 'success', summary: 'Incident logged', detail: 'The asset has been marked out of service.' });
    this.loadIncidents({ first: 0, rows: this.rows });
  }

  openAssignDialog(): void {
    const assignable = this.selectedIncidents.filter(incident => incident.status !== 'resolved');
    if (!assignable.length) return;
    this.selectedAgentId = null;
    this.fieldAgents = [];
    this.assignDialogVisible = true;
    this.loadingAgents = true;
    this.incidentService.getFieldAgents().subscribe({
      next: agents => {
        this.fieldAgents = agents;
        this.loadingAgents = false;
        this.changeDetector.markForCheck();
      },
      error: () => {
        this.loadingAgents = false;
        this.messageService.add({ severity: 'error', summary: 'Could not load Field Agents', detail: 'Please close the dialog and try again.' });
        this.changeDetector.markForCheck();
      }
    });
  }

  assignSelectedIncidents(): void {
    const incidentIds = this.selectedIncidents
      .filter(incident => incident.status !== 'resolved')
      .map(incident => incident.id);
    if (!incidentIds.length || !this.selectedAgentId || this.assigning) return;

    this.assigning = true;
    this.incidentService.assignIncidents(incidentIds, this.selectedAgentId).subscribe({
      next: () => {
        const agentName = this.fieldAgents.find(agent => agent.id === this.selectedAgentId)?.name ?? 'the selected Field Agent';
        this.assigning = false;
        this.assignDialogVisible = false;
        this.selectedIncidents = [];
        this.messageService.add({ severity: 'success', summary: 'Incidents assigned', detail: `${incidentIds.length} incident${incidentIds.length === 1 ? '' : 's'} and linked task${incidentIds.length === 1 ? '' : 's'} assigned to ${agentName}.` });
        this.loadIncidents({ first: this.first, rows: this.rows });
        this.changeDetector.markForCheck();
      },
      error: error => {
        this.assigning = false;
        this.messageService.add({ severity: 'error', summary: 'Assignment failed', detail: error?.error?.message ?? 'The incidents could not be assigned. Please try again.' });
        this.changeDetector.markForCheck();
      }
    });
  }

  statusLabel(status: IncidentStatus): string {
    const labels: Record<IncidentStatus, string> = {
      open: 'Open',
      resolved: 'Resolved',
      pending_forensic_clearance: 'Pending review'
    };
    return labels[status] ?? status;
  }

  statusSeverity(status: IncidentStatus): 'danger' | 'success' | 'warn' | 'secondary' {
    const severities: Record<IncidentStatus, 'danger' | 'success' | 'warn' | 'secondary'> = {
      open: 'danger',
      resolved: 'success',
      pending_forensic_clearance: 'warn'
    };
    return severities[status] ?? 'secondary';
  }

  openVerifyDialog(incident: IncidentRecord): void {
    this.verifyIncident = incident;
    this.verifyCoordinates = null;
    this.verifyLocationError = '';
    this.verifyForm.reset({ fieldNotes: '' });
    this.verifyDialogVisible = true;
  }

  requestVerifyLocation(): void {
    if (!navigator.geolocation) {
      this.verifyLocationError = 'Location is not available in this browser.';
      return;
    }
    this.locating = true;
    this.verifyLocationError = '';
    navigator.geolocation.getCurrentPosition(
      position => {
        this.verifyCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
        this.locating = false;
        this.changeDetector.markForCheck();
      },
      error => {
        this.locating = false;
        this.verifyLocationError = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied. Allow it in the browser site settings and retry.'
          : 'No location reading arrived. Check device location services and retry.';
        this.changeDetector.markForCheck();
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 15000 }
    );
  }

  verifyRepair(): void {
    this.verifyForm.markAllAsTouched();
    const incident = this.verifyIncident;
    const coordinates = this.verifyCoordinates;
    const fieldNotes = this.verifyForm.controls.fieldNotes.value?.trim();
    if (!incident || !coordinates || !fieldNotes || this.verifying || this.verifyForm.invalid) return;

    this.verifying = true;
    this.incidentService.verifyRepair({
      incidentId: incident.id,
      qrCodeData: incident.stateId,
      fieldNotes,
      deviceLatitude: coordinates.latitude,
      deviceLongitude: coordinates.longitude,
      deviceTimestamp: new Date().toISOString()
    }).subscribe({
      next: () => {
        this.verifying = false;
        this.verifyDialogVisible = false;
        this.messageService.add({ severity: 'success', summary: 'Repair verified', detail: `${incident.stateId} has been marked resolved.` });
        this.loadIncidents({ first: this.first, rows: this.rows });
      },
      error: error => {
        this.verifying = false;
        this.messageService.add({
          severity: error?.status === 403 ? 'warn' : 'error',
          summary: error?.status === 403 ? 'Location review required' : 'Could not verify repair',
          detail: error?.error?.details?.message ?? 'Check the repair notes and location, then try again.'
        });
        this.loadIncidents({ first: this.first, rows: this.rows });
      }
    });
  }
}
