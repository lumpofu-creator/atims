import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Observable, firstValueFrom } from 'rxjs';
import { Asset, AssetDetails, AssetService } from './asset.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { IncidentLogComponent } from '../incidents/incident-log.component';
import { AppPreferencesService } from '../../core/preferences/app-preferences.service';
import { TranslatePipe } from '../../core/preferences/translate.pipe';

interface AssetPageEvent {
  first?: number | null;
  rows?: number | null;
}

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    TextareaModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule,
    TagModule,
    IncidentLogComponent,
    TranslatePipe
  ],
  template: `
    <p-toast />
    <p-confirmdialog [style]="{ width: '28rem', maxWidth: 'calc(100vw - 2rem)' }" />

    <section class="assets-page">
      <header class="page-heading">
        <div>
          <h1>Assets</h1>
          <div class="heading-subrow">
            <p>Browse and search the asset register.</p>
            <span *ngIf="selectedAssets.length" class="selected-count">{{ selectedAssets.length }} selected</span>
          </div>
        </div>
        <span class="asset-total">{{ totalRecords }} assets</span>
      </header>

      <div class="card table-card">
        <p-table
          #assetTable
          [value]="assets"
          dataKey="id"
          [paginator]="true"
          [rows]="rows"
          [first]="first"
          [totalRecords]="totalRecords"
          [(selection)]="selectedAssets"
          [rowsPerPageOptions]="[10, 20, 50]"
          [loading]="loading"
          [rowHover]="true"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
          [scrollable]="true"
          [tableStyle]="{ 'min-width': '80rem' }"
          styleClass="assets-table"
          responsiveLayout="scroll"
          (onPage)="onPage($event)"
        >
          <ng-template #caption>
            <div class="table-toolbar">
              <div class="filter-controls">
              <button
                pButton
                type="button"
                label="Clear"
                icon="pi pi-filter-slash"
                class="p-button-outlined"
                (click)="clearSearch(assetTable)"
              ></button>
              <p-iconfield iconPosition="left" class="search-field">
                <p-inputicon><i class="pi pi-search"></i></p-inputicon>
                <input
                  pInputText
                  type="text"
                  [value]="searchTerm"
                  (input)="onSearch(assetTable, $event)"
                  placeholder="Search state ID or asset name"
                  aria-label="Search assets"
                />
              </p-iconfield>
              </div>
              <div class="toolbar-actions">
                <p-button label="Add" icon="pi pi-plus" [outlined]="true" (onClick)="addAsset()" />
                <p-button label="Delete" icon="pi pi-trash" severity="danger" [outlined]="true" [disabled]="!selectedAssets.length || bulkDeleting" [loading]="bulkDeleting" (onClick)="confirmDeleteSelected()" />
                <p-button label="Refresh" icon="pi pi-refresh" severity="secondary" [outlined]="true" [loading]="loading" (onClick)="refreshAssets()" />
                <p-button label="Log Incident" icon="pi pi-exclamation-triangle" severity="warn" [outlined]="true" (onClick)="logIncident()" />
                <p-button label="Export" icon="pi pi-download" severity="secondary" [outlined]="true" [loading]="exporting" (onClick)="exportCsv(assetTable)" />
                <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" [loading]="printing" (onClick)="printResults(assetTable)" />
              </div>
            </div>
          </ng-template>

          <ng-template #header>
            <tr>
              <th pFrozenColumn [frozen]="true" alignFrozen="left" class="selection-column"><p-tableHeaderCheckbox /></th>
              <th pFrozenColumn [frozen]="true" alignFrozen="left" class="state-column" pSortableColumn="stateId">
                State ID <p-sortIcon field="stateId" /><p-columnFilter type="text" field="stateId" display="menu" />
              </th>
              <th class="asset-column" pSortableColumn="name">
                Asset <p-sortIcon field="name" /><p-columnFilter type="text" field="name" display="menu" />
              </th>
              <th class="category-column" pSortableColumn="category">
                Category <p-sortIcon field="category" /><p-columnFilter type="text" field="category" display="menu" />
              </th>
              <th class="status-column" pSortableColumn="currentStatus">
                Status <p-sortIcon field="currentStatus" />
                <p-columnFilter field="currentStatus" matchMode="equals" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                  <ng-template #filter let-value let-filter="filterCallback">
                    <p-select [ngModel]="value" [options]="statusOptions" optionLabel="label" optionValue="value" placeholder="Any status" [showClear]="true" (ngModelChange)="filter($event)" fluid />
                  </ng-template>
                </p-columnFilter>
              </th>
              <th class="location-column" pSortableColumn="latitude">
                Location <p-sortIcon field="latitude" /><p-columnFilter type="text" field="locationText" display="menu" />
              </th>
              <th pSortableColumn="currentValue" class="value-column">
                Current value <p-sortIcon field="currentValue" /><p-columnFilter type="numeric" field="currentValue" display="menu" currency="EUR" />
              </th>
              <th class="actions-column">Actions</th>
            </tr>
          </ng-template>

          <ng-template #body let-asset>
            <tr>
              <td pFrozenColumn [frozen]="true" alignFrozen="left" class="selection-column"><p-tableCheckbox [value]="asset" /></td>
              <td pFrozenColumn [frozen]="true" alignFrozen="left"><span class="state-id">{{ asset.stateId || '—' }}</span></td>
              <td>
                <div class="asset-name">{{ asset.name }}</div>
                <div class="asset-description">{{ asset.description || 'No description' }}</div>
              </td>
              <td>{{ asset.category || 'Uncategorised' }}</td>
              <td>
                <p-tag [value]="getStatusLabel(asset.currentStatus)" [severity]="getStatusSeverity(asset.currentStatus)" />
              </td>
              <td>
                <span *ngIf="hasCoordinates(asset); else noCoordinates">
                  {{ asset.latitude | number: '1.4-4' }}, {{ asset.longitude | number: '1.4-4' }}
                </span>
                <ng-template #noCoordinates><span class="muted">No coordinates</span></ng-template>
              </td>
              <td class="value-cell">{{ asset.currentValue | currency: 'EUR' : 'symbol' : '1.0-0' }}</td>
              <td class="actions-cell">
                <p-button
                  icon="pi pi-pencil"
                  severity="secondary"
                  [text]="true"
                  [rounded]="true"
                  ariaLabel="Edit asset"
                  (onClick)="editAsset(asset)"
                />
                <p-button
                  icon="pi pi-trash"
                  severity="danger"
                  [text]="true"
                  [rounded]="true"
                  ariaLabel="Delete asset"
                  (onClick)="confirmDelete(asset)"
                />
              </td>
            </tr>
          </ng-template>

          <ng-template #emptymessage>
            <tr>
              <td colspan="8" class="empty-cell">
                {{ loadError || (searchTerm ? 'No assets match your search.' : 'No assets found.') }}
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>

    <p-dialog
      [(visible)]="editDialogVisible"
      [modal]="true"
      [draggable]="false"
      [closable]="!saving"
      [style]="{ width: 'min(44rem, calc(100vw - 2rem))' }"
      [header]="isAdding ? 'Add Asset' : 'Edit Asset'"
      (onHide)="closeEditDialog()"
    >
      <ng-container *ngIf="editLoading; else assetEditForm">
        <div class="dialog-loading"><i class="pi pi-spin pi-spinner"></i> Loading asset details…</div>
      </ng-container>

      <ng-template #assetEditForm>
        <form *ngIf="editDraft as draft" class="asset-edit-form" (ngSubmit)="saveAsset()">
          <div class="form-field">
            <label for="asset-state-id">State ID</label>
            <input pInputText id="asset-state-id" name="assetStateId" [(ngModel)]="draft.stateId" [readonly]="!isAdding" [placeholder]="isAdding ? 'Leave blank to generate automatically' : ''" />
          </div>

          <div class="form-field">
            <label for="asset-name">Name <span class="required-mark">*</span></label>
            <input pInputText id="asset-name" name="assetName" [(ngModel)]="draft.name" required />
          </div>

          <div class="form-field form-field--wide">
            <label for="asset-description">Description</label>
            <textarea pTextarea id="asset-description" name="assetDescription" [(ngModel)]="draft.description" rows="3" fluid></textarea>
          </div>

          <div class="form-field">
            <label for="asset-category-id">Category ID</label>
            <p-inputnumber inputId="asset-category-id" name="assetCategoryId" [(ngModel)]="draft.categoryId" [min]="1" [useGrouping]="false" fluid />
            <small class="field-hint">Category ID {{ draft.categoryId }}: {{ draft.category || 'Unknown category' }}</small>
          </div>

          <div class="form-field">
            <label for="asset-status">Status</label>
            <p-select inputId="asset-status" name="assetStatus" [(ngModel)]="draft.currentStatus" [options]="statusOptions" optionLabel="label" optionValue="value" fluid />
          </div>

          <div class="form-field form-field--wide">
            <label for="asset-registered-location">Registered location</label>
            <input pInputText id="asset-registered-location" name="registeredLocation" [(ngModel)]="draft.registeredLocation" />
          </div>

          <div class="form-field">
            <label for="asset-latitude">Latitude</label>
            <p-inputnumber inputId="asset-latitude" name="assetLatitude" [(ngModel)]="draft.latitude" [min]="-90" [max]="90" [minFractionDigits]="0" [maxFractionDigits]="8" fluid />
          </div>

          <div class="form-field">
            <label for="asset-longitude">Longitude</label>
            <p-inputnumber inputId="asset-longitude" name="assetLongitude" [(ngModel)]="draft.longitude" [min]="-180" [max]="180" [minFractionDigits]="0" [maxFractionDigits]="8" fluid />
          </div>

          <div class="form-field">
            <label for="asset-acquisition-date">Acquisition date</label>
            <input pInputText id="asset-acquisition-date" name="acquisitionDate" type="date" [(ngModel)]="draft.acquisitionDate" />
          </div>

          <div class="form-field">
            <label for="asset-current-value">Current value</label>
            <p-inputnumber inputId="asset-current-value" name="currentValue" [(ngModel)]="draft.currentValue" mode="currency" currency="EUR" locale="en-IE" [min]="0" fluid />
          </div>
        </form>
      </ng-template>

      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [text]="true" [disabled]="saving" (onClick)="closeEditDialog()" />
        <p-button [label]="isAdding ? 'Create asset' : 'Save changes'" icon="pi pi-check" [loading]="saving" [disabled]="editLoading || !editDraft" (onClick)="saveAsset()" />
      </ng-template>
    </p-dialog>

    <p-dialog
      [(visible)]="incidentLogDialogVisible"
      header="Log Incident"
      [modal]="true"
      [draggable]="false"
      [style]="{ width: 'min(72rem, calc(100vw - 2rem))' }"
      [contentStyle]="{ 'max-height': '80vh', 'overflow-y': 'auto' }"
      (onHide)="incidentLogDialogVisible = false"
    >
      <app-incident-log
        *ngIf="incidentLogDialogVisible"
        [initialAssetStateId]="incidentAssetStateId"
        (logged)="onIncidentLogged($event)"
      />
    </p-dialog>
  `,
  styles: [`
    .assets-page { display: flex; flex-direction: column; gap: 1rem; }
    .page-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .page-heading h1 { margin: 0; font-size: 1.5rem; line-height: 1.3; font-weight: 600; }
    .page-heading p { margin: 0.35rem 0 0; color: var(--text-color-secondary); }
    .heading-subrow { display: flex; align-items: baseline; gap: 0.75rem; flex-wrap: wrap; }
    .heading-subrow p { margin: 0; }
    .selected-count { color: var(--primary-color); font-size: 0.875rem; font-weight: 600; line-height: 1.5; white-space: nowrap; }
    .asset-total { color: var(--text-color-secondary); font-size: 0.9rem; white-space: nowrap; }
    .table-card { padding: 0; overflow: hidden; }
    .table-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: nowrap; overflow-x: auto; }
    .filter-controls, .toolbar-actions { display: flex; align-items: center; gap: 0.65rem; flex: 0 0 auto; }
    .toolbar-actions { flex-wrap: nowrap; }
    .search-field { width: min(100%, 22rem); }
    .search-field input { width: 100%; }
    .state-column { width: 9rem; min-width: 9rem; }
    .asset-column { width: 14rem; min-width: 14rem; }
    .category-column { width: 11rem; min-width: 11rem; }
    .status-column { width: 12rem; min-width: 12rem; }
    .location-column { width: 12rem; min-width: 12rem; }
    .selection-column { width: 3rem; min-width: 3rem; text-align: center; }
    .actions-column { min-width: 7rem; text-align: center; }
    .actions-cell { white-space: nowrap; text-align: center; }
    .value-column { width: 11rem; min-width: 11rem; text-align: right; }
    :host ::ng-deep .assets-table .p-datatable-thead > tr > th { white-space: nowrap; }
    :host ::ng-deep .assets-table .p-column-filter { display: inline-flex; vertical-align: middle; margin-left: 0.25rem; }
    .state-id { font-family: var(--font-family); font-size: 0.875rem; }
    .asset-name { font-weight: 600; }
    .asset-description, .muted { color: var(--text-color-secondary); font-size: 0.8125rem; }
    .value-cell { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
    .empty-cell { padding: 2rem !important; text-align: center; color: var(--text-color-secondary); }
    .asset-edit-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
    .form-field { display: flex; min-width: 0; flex-direction: column; gap: 0.45rem; }
    .form-field--wide { grid-column: 1 / -1; }
    .form-field label { font-weight: 600; }
    .field-hint { color: var(--text-color-secondary); }
    .required-mark { color: var(--red-500, #ef4444); }
    .dialog-loading { display: flex; align-items: center; justify-content: center; gap: 0.75rem; min-height: 10rem; color: var(--text-color-secondary); }
    @media (max-width: 640px) {
      .page-heading { align-items: flex-start; }
      .page-heading h1 { font-size: 1.25rem; }
      .table-toolbar, .filter-controls, .toolbar-actions { align-items: stretch; flex-direction: column; }
      .toolbar-actions p-button { width: 100%; }
      .search-field { width: 100%; }
      .asset-edit-form { grid-template-columns: minmax(0, 1fr); }
      .form-field--wide { grid-column: auto; }
    }
  `],
  providers: [ConfirmationService, MessageService]
})
export class AssetsComponent implements OnInit {
  assets: Asset[] = [];
  selectedAssets: Asset[] = [];
  searchTerm = '';
  loadError = '';
  loading = true;
  first = 0;
  rows = 10;
  totalRecords = 0;
  editDialogVisible = false;
  isAdding = false;
  editLoading = false;
  saving = false;
  bulkDeleting = false;
  exporting = false;
  printing = false;
  incidentLogDialogVisible = false;
  incidentAssetStateId: string | null = null;
  editDraft: AssetDetails | null = null;
  readonly statusOptions = [
    { label: 'Functional', value: 'Fonctionnel' },
    { label: 'Out of Service', value: 'En Panne' },
    { label: 'Decommissioned', value: 'Déclassé' },
    { label: 'Unknown', value: 'Inconnu' }
  ];

  private requestId = 0;

  constructor(
    private assetService: AssetService,
    private changeDetector: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadAssets({ first: 0, rows: this.rows });
  }

  loadAssets(event: AssetPageEvent = {}): void {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    const requestId = ++this.requestId;
    this.loading = true;
    this.loadError = '';
    this.fetchSearchResults().then(results => {
        setTimeout(() => {
          if (requestId !== this.requestId) return;
          this.assets = results;
          this.totalRecords = results.length;
          this.loading = false;
          this.changeDetector.markForCheck();
        });
      }).catch(() => {
        setTimeout(() => {
          if (requestId !== this.requestId) return;
          this.assets = [];
          this.totalRecords = 0;
          this.loadError = 'Unable to load assets. Please try again.';
          this.loading = false;
          this.changeDetector.markForCheck();
        });
      });
  }

  onPage(event: AssetPageEvent): void {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
  }

  onSearch(table: Table, event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value.trim();
    this.selectedAssets = [];
    this.first = 0;
    table.first = 0;
    this.loadAssets({ first: 0, rows: this.rows });
  }

  clearSearch(table: Table): void {
    this.searchTerm = '';
    this.selectedAssets = [];
    table.clear();
    this.first = 0;
    table.first = 0;
    this.loadAssets({ first: 0, rows: this.rows });
  }

  refreshAssets(): void {
    this.loadAssets({ first: this.first, rows: this.rows });
  }

  addAsset(): void {
    this.isAdding = true;
    this.editDraft = {
      id: 0, stateId: '', name: '', description: '', category: null, categoryId: 0,
      registeredLocation: '', latitude: null, longitude: null, currentStatus: 'Inconnu',
      purchaseValue: null, currentValue: 0, acquisitionDate: null, parentAssetId: null
    };
    this.editLoading = false;
    this.editDialogVisible = true;
  }

  editAsset(asset: Asset): void {
    this.isAdding = false;
    this.editDraft = null;
    this.editDialogVisible = true;
    this.editLoading = true;
    this.assetService.getById(asset.id).subscribe({
      next: details => setTimeout(() => {
        this.editDraft = details;
        this.editLoading = false;
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        this.editLoading = false;
        this.editDialogVisible = false;
        this.messageService.add({ severity: 'error', summary: 'Could not load asset', detail: 'Please try again.' });
        this.changeDetector.markForCheck();
      })
    });
  }

  closeEditDialog(): void {
    if (this.saving) return;
    this.editDialogVisible = false;
    this.editDraft = null;
    this.isAdding = false;
  }

  saveAsset(): void {
    const draft = this.editDraft;
    if (!draft || this.saving || !draft.name.trim()) return;
    if (this.isAdding && (!draft.categoryId || draft.latitude === null || draft.longitude === null)) {
      this.messageService.add({ severity: 'warn', summary: 'Required details missing', detail: 'Enter a category ID, latitude and longitude to create an asset.' });
      return;
    }

    this.saving = true;
    const update = {
      name: draft.name.trim(),
      description: draft.description,
      categoryId: draft.categoryId,
      currentStatus: draft.currentStatus,
      currentValue: draft.currentValue,
      registeredLocation: draft.registeredLocation,
      acquisitionDate: draft.acquisitionDate,
      latitude: draft.latitude,
      longitude: draft.longitude,
      parentAssetId: draft.parentAssetId
    };
    const wasAdding = this.isAdding;
    const request: Observable<unknown> = wasAdding
      ? this.assetService.create({
          stateId: draft.stateId.trim() || undefined,
          ...update,
          categoryId: draft.categoryId,
          currentStatus: draft.currentStatus,
          currentValue: draft.currentValue,
          purchaseValue: draft.purchaseValue,
          latitude: draft.latitude!,
          longitude: draft.longitude!
        })
      : this.assetService.update(draft.id, update);
    request.subscribe({
      next: () => setTimeout(() => {
        this.saving = false;
        this.editDialogVisible = false;
        this.editDraft = null;
        this.isAdding = false;
        this.messageService.add({ severity: 'success', summary: wasAdding ? 'Asset created' : 'Asset updated', detail: wasAdding ? 'The asset has been added.' : 'Your changes have been saved.' });
        this.loadAssets({ first: wasAdding ? 0 : this.first, rows: this.rows });
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        this.saving = false;
        this.messageService.add({ severity: 'error', summary: 'Update failed', detail: 'The asset could not be updated.' });
        this.changeDetector.markForCheck();
      })
    });
  }

  confirmDelete(asset: Asset): void {
    this.confirmationService.confirm({
      header: 'Delete asset',
      message: `Delete “${asset.name}” from the active asset list?`,
      icon: 'pi pi-exclamation-triangle',
      acceptButtonProps: { label: 'Delete', severity: 'danger' },
      rejectButtonProps: { label: 'Cancel', severity: 'secondary', outlined: true },
      accept: () => this.deleteAsset(asset)
    });
  }

  confirmDeleteSelected(): void {
    const selected = [...this.selectedAssets];
    if (!selected.length || this.bulkDeleting) return;
    this.confirmationService.confirm({
      header: 'Delete selected assets',
      message: `Delete ${selected.length} selected asset${selected.length === 1 ? '' : 's'}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptButtonProps: { label: 'Delete', severity: 'danger' },
      rejectButtonProps: { label: 'Cancel', severity: 'secondary', outlined: true },
      accept: () => this.deleteSelectedAssets(selected)
    });
  }

  private async deleteSelectedAssets(selected: Asset[]): Promise<void> {
    this.bulkDeleting = true;
    const results = await Promise.allSettled(selected.map(asset => firstValueFrom(this.assetService.delete(asset.id))));
    const deletedIds = new Set(selected.filter((_, index) => results[index].status === 'fulfilled').map(asset => asset.id));
    this.selectedAssets = this.selectedAssets.filter(asset => !deletedIds.has(asset.id));
    this.bulkDeleting = false;
    if (deletedIds.size) {
      this.messageService.add({ severity: 'success', summary: 'Assets deleted', detail: `${deletedIds.size} asset${deletedIds.size === 1 ? '' : 's'} deleted.` });
    }
    const failures = selected.length - deletedIds.size;
    if (failures) this.messageService.add({ severity: 'error', summary: 'Some assets were not deleted', detail: `${failures} deletion${failures === 1 ? '' : 's'} failed.` });
    this.refreshAssets();
    this.changeDetector.markForCheck();
  }

  logIncident(): void {
    const selected = this.selectedAssets.length === 1 ? this.selectedAssets[0] : null;
    this.incidentAssetStateId = selected?.stateId ?? null;
    this.incidentLogDialogVisible = true;
  }

  onIncidentLogged(uploadFailed: boolean): void {
    this.incidentLogDialogVisible = false;
    this.messageService.add(uploadFailed
      ? { severity: 'warn', summary: 'Incident logged; image upload failed', detail: 'The incident was recorded, but the image could not be attached.' }
      : { severity: 'success', summary: 'Incident logged', detail: 'The asset has been marked out of service.' });
    this.refreshAssets();
  }

  async exportCsv(table: Table): Promise<void> {
    this.exporting = true;
    try {
      const results = (table.filteredValue as Asset[] | null) ?? this.assets;
      const columns: Array<[string, (asset: Asset) => unknown]> = [
        ['State ID', asset => asset.stateId], ['Name', asset => asset.name], ['Description', asset => asset.description],
        ['Category', asset => asset.category], ['Status', asset => this.getStatusLabel(asset.currentStatus)],
        ['Latitude', asset => asset.latitude], ['Longitude', asset => asset.longitude], ['Current value', asset => asset.currentValue]
      ];
      const csv = [columns.map(([label]) => this.csvCell(label)).join(','), ...results.map(asset => columns.map(([, value]) => this.csvCell(value(asset))).join(','))].join('\r\n');
      const blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'assets.csv';
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      this.messageService.add({ severity: 'error', summary: 'Export failed', detail: 'Could not load the filtered asset results.' });
    } finally {
      this.exporting = false;
      this.changeDetector.markForCheck();
    }
  }

  async printResults(table: Table): Promise<void> {
    const popup = window.open('', '_blank', 'width=1000,height=750');
    if (!popup) {
      this.messageService.add({ severity: 'warn', summary: 'Print window blocked', detail: 'Allow pop-ups to print the asset results.' });
      return;
    }
    this.printing = true;
    try {
      const results = (table.filteredValue as Asset[] | null) ?? this.assets;
      const escape = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));
      const rows = results.map(asset => `<tr><td>${escape(asset.stateId)}</td><td>${escape(asset.name)}</td><td>${escape(asset.category)}</td><td>${escape(this.getStatusLabel(asset.currentStatus))}</td><td>${escape(asset.latitude)}, ${escape(asset.longitude)}</td><td>${escape(asset.currentValue)}</td></tr>`).join('');
      const searchDescription = this.searchTerm ? ` for “${escape(this.searchTerm)}”` : '';
      popup.document.write(`<!doctype html><html><head><title>Assets</title><style>body{font:14px Arial,sans-serif;color:#24344d;padding:24px}h1{font-size:22px}p{color:#64748b}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{text-align:left;border-bottom:1px solid #dbe3ee;padding:9px}th{background:#f1f5f9}@media print{body{padding:0}}</style></head><body><h1>Assets</h1><p>${results.length} result${results.length === 1 ? '' : 's'}${searchDescription}</p><table><thead><tr><th>State ID</th><th>Name</th><th>Category</th><th>Status</th><th>Coordinates</th><th>Current value</th></tr></thead><tbody>${rows}</tbody></table><script>window.onload=()=>window.print()</script></body></html>`);
      popup.document.close();
    } catch {
      popup.close();
      this.messageService.add({ severity: 'error', summary: 'Print failed', detail: 'Could not load the filtered asset results.' });
    } finally {
      this.printing = false;
      this.changeDetector.markForCheck();
    }
  }

  private async fetchSearchResults(): Promise<Asset[]> {
    const search = this.searchTerm;
    const pageSize = 100;
    const firstPage = await firstValueFrom(this.assetService.getAll(1, pageSize, search));
    const pageCount = Math.ceil(firstPage.total / pageSize);
    if (pageCount <= 1) return firstPage.items;
    const remainingPages = await Promise.all(Array.from({ length: pageCount - 1 }, (_, index) =>
      firstValueFrom(this.assetService.getAll(index + 2, pageSize, search))
    ));
    return [firstPage.items, ...remainingPages.map(page => page.items)].flat();
  }

  private csvCell(value: unknown): string {
    return `"${String(value ?? '').replace(/"/g, '""')}"`;
  }

  private deleteAsset(asset: Asset): void {
    this.assetService.delete(asset.id).subscribe({
      next: () => setTimeout(() => {
        this.selectedAssets = this.selectedAssets.filter(selected => selected.id !== asset.id);
        this.totalRecords = Math.max(0, this.totalRecords - 1);
        if (this.assets.length === 1 && this.first > 0) this.first = Math.max(0, this.first - this.rows);
        this.messageService.add({ severity: 'success', summary: 'Asset deleted', detail: 'The asset was removed from the active list.' });
        this.loadAssets({ first: this.first, rows: this.rows });
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        this.messageService.add({ severity: 'error', summary: 'Delete failed', detail: 'The asset could not be deleted.' });
        this.changeDetector.markForCheck();
      })
    });
  }

  getStatusLabel(status: Asset['currentStatus']): string {
    const labels: Record<Asset['currentStatus'], string> = {
      'Fonctionnel': 'Functional',
      'En Panne': 'Out of Service',
      'Déclassé': 'Decommissioned',
      'Inconnu': 'Unknown'
    };
    return labels[status] ?? status;
  }

  getStatusSeverity(status: Asset['currentStatus']): 'success' | 'danger' | 'warn' | 'secondary' {
    const severities: Record<Asset['currentStatus'], 'success' | 'danger' | 'warn' | 'secondary'> = {
      'Fonctionnel': 'success',
      'En Panne': 'danger',
      'Déclassé': 'warn',
      'Inconnu': 'secondary'
    };
    return severities[status] ?? 'secondary';
  }

  hasCoordinates(asset: Asset): boolean {
    return Number.isFinite(asset.latitude) && Number.isFinite(asset.longitude);
  }

}
