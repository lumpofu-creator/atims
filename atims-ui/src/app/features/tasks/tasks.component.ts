import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IncidentActivity, TaskService } from './task.service';
import { IncidentService } from '../incidents/incident.service';

@Component({
  selector: 'app-tasks',
  template: `
    <section class="tasks-page">
      <header class="page-heading">
        <div>
          <h1>Task Management</h1>
          <p>Review assigned work and pick up tasks from the global queue.</p>
        </div>
      </header>

      <div class="task-summary-grid">
        <div class="card summary-card">
          <div class="summary-icon summary-icon--blue"><i class="pi pi-list-check"></i></div>
          <div><span>My Tasks</span><strong>{{ assignedTasks.length }}</strong></div>
        </div>
        <div class="card summary-card">
          <div class="summary-icon summary-icon--green"><i class="pi pi-inbox"></i></div>
          <div><span>Global Queue</span><strong>{{ globalQueue.length }}</strong></div>
        </div>
      </div>

      <nav class="task-tabs" aria-label="Task views">
        <p-button label="My Tasks" icon="pi pi-list-check" [outlined]="activeTab !== 'assigned'" (onClick)="activeTab = 'assigned'" />
        <p-button label="Global Queue" icon="pi pi-inbox" [outlined]="activeTab !== 'global'" severity="secondary" (onClick)="activeTab = 'global'" />
      </nav>

      @if (activeTab === 'assigned') {
        <section class="card task-table-card">
          <div class="table-heading">
            <div>
              <h2>My Assigned Tasks</h2>
              <p>Work assigned to your account.</p>
            </div>
            <span class="table-count">{{ assignedTasks.length }} tasks</span>
          </div>
          <p-table
            [value]="assignedTasks"
            dataKey="id"
            [paginator]="assignedTasks.length > 10"
            [rows]="10"
            [rowsPerPageOptions]="[10, 20, 50]"
            [rowHover]="true"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tasks"
            [tableStyle]="{ 'min-width': '48rem' }"
            styleClass="tasks-table"
          >
            <ng-template #header>
              <tr><th>Task</th><th>Asset</th><th>Status</th><th>Due date</th><th class="actions-column">Actions</th></tr>
            </ng-template>
            <ng-template #body let-task>
              <tr>
                <td><button type="button" class="task-link task-id" (click)="viewTask(task)">#{{ task.id }}</button></td>
                <td><button type="button" class="task-link asset-name" (click)="viewTask(task)">{{ task.asset_name || '—' }}</button><small *ngIf="task.incident_notes" class="task-notes">{{ task.incident_notes }}</small></td>
                <td><p-tag [value]="task.status" [severity]="getTaskStatusSeverity(task.status)" /></td>
                <td>{{ task.due_date ? (task.due_date | date: 'mediumDate') : '—' }}</td>
                <td class="actions-cell"><p-button label="View" icon="pi pi-eye" severity="secondary" [outlined]="true" size="small" (onClick)="viewTask(task)" /></td>
              </tr>
            </ng-template>
            <ng-template #emptymessage>
              <tr><td colspan="5" class="empty-cell"><i class="pi pi-check-circle"></i><strong>No tasks assigned</strong><span>Tasks assigned to you will appear here.</span></td></tr>
            </ng-template>
          </p-table>
        </section>
      }

      @if (activeTab === 'global') {
        <section class="card task-table-card">
          <div class="table-heading">
            <div>
              <h2>Global Queue</h2>
              <p>Unassigned tasks available to pick up.</p>
            </div>
            <span class="table-count">{{ globalQueue.length }} tasks</span>
          </div>
          <p-table
            [value]="globalQueue"
            dataKey="id"
            [paginator]="globalQueue.length > 10"
            [rows]="10"
            [rowsPerPageOptions]="[10, 20, 50]"
            [rowHover]="true"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tasks"
            [tableStyle]="{ 'min-width': '42rem' }"
            styleClass="tasks-table"
          >
            <ng-template #header>
              <tr><th>Task</th><th>Asset</th><th>Created</th><th class="actions-column">Actions</th></tr>
            </ng-template>
            <ng-template #body let-task>
              <tr>
                <td><button type="button" class="task-link task-id" (click)="viewTask(task)">#{{ task.id }}</button></td>
                <td><button type="button" class="task-link asset-name" (click)="viewTask(task)">{{ task.asset_name || '—' }}</button><small *ngIf="task.incident_notes" class="task-notes">{{ task.incident_notes }}</small></td>
                <td>{{ task.created_at ? (task.created_at | date: 'medium') : '—' }}</td>
                <td class="actions-cell"><p-button label="Assign to me" icon="pi pi-user-plus" severity="success" [outlined]="true" size="small" (onClick)="assignTask(task.id)" /></td>
              </tr>
            </ng-template>
            <ng-template #emptymessage>
              <tr><td colspan="4" class="empty-cell"><i class="pi pi-inbox"></i><strong>The queue is empty</strong><span>Unassigned tasks will appear here.</span></td></tr>
            </ng-template>
          </p-table>
        </section>
      }
    </section>

    <p-dialog [(visible)]="taskDialogVisible" header="Task and incident details" [modal]="true" [draggable]="false" [style]="{ width: 'min(46rem, calc(100vw - 2rem))' }">
      <ng-container *ngIf="selectedTask as task">
        <section class="task-status-timeline" aria-label="Task status timeline">
          <div class="status-track">
            <ng-container *ngFor="let step of taskStatusTimeline; let last = last">
              <button type="button" class="status-step" [ngClass]="['status-step--' + statusClass(step.value), statusStepState(task.status, step.value)]" [attr.aria-current]="task.status === step.value ? 'step' : null" [attr.aria-pressed]="pendingTaskStatus === step.value" [disabled]="updatingTaskStatus || verifyingRepair" (click)="selectTaskStatus(step.value)">
                <span class="status-step-marker"><i [class]="step.icon"></i></span>
                <span class="status-step-label">{{ step.label }}</span>
              </button>
              <span *ngIf="!last" class="status-step-connector" [class.status-step-connector--done]="statusStepComplete(task.status, step.value)"></span>
            </ng-container>
            <span class="status-track-divider" aria-hidden="true"></span>
            <button type="button" class="status-step status-step--cancelled" [ngClass]="statusStepState(task.status, 'Cancelled')" [attr.aria-current]="task.status === 'Cancelled' ? 'step' : null" [attr.aria-pressed]="pendingTaskStatus === 'Cancelled'" [disabled]="updatingTaskStatus || verifyingRepair" (click)="selectTaskStatus('Cancelled')">
              <span class="status-step-marker"><i class="pi pi-times"></i></span>
              <span class="status-step-label">Cancelled</span>
            </button>
          </div>
          <div class="status-timeline-caption"><span>Current status</span><strong [ngClass]="'status-text--' + statusClass(task.status)">{{ task.status }}</strong><span class="status-timeline-hint">Select a milestone, then choose Update status.</span></div>
        </section>
        <div class="task-status-controls">
          <div><strong>Task status</strong><small>Completing an incident task requires repair verification.</small><small *ngIf="pendingTaskStatus === 'Assigned' && !task.assigned_user_id">Assign this incident to a Field Agent from the Incidents route first.</small></div>
          <div class="task-status-actions">
            <p-select [(ngModel)]="pendingTaskStatus" [options]="taskStatusOptions" optionLabel="label" optionValue="value" ariaLabel="Task status" [disabled]="updatingTaskStatus || verifyingRepair" />
            <p-button [label]="pendingTaskStatus === 'Completed' && task.incident_id && task.incident?.status !== 'resolved' ? 'Verify repair & complete' : 'Update status'" [icon]="pendingTaskStatus === 'Completed' && task.incident_id && task.incident?.status !== 'resolved' ? 'pi pi-check-circle' : 'pi pi-save'" [loading]="updatingTaskStatus" [disabled]="updatingTaskStatus || verifyingRepair || (pendingTaskStatus === 'Assigned' && !task.assigned_user_id)" (onClick)="applyTaskStatus()" />
          </div>
        </div>
        <div class="task-status-notice" *ngIf="taskStatusNotice">{{ taskStatusNotice }}</div>
        <div class="detail-heading">
          <div><span class="detail-label">Task</span><strong>#{{ task.id }}</strong></div>
          <p-tag [value]="task.status" [severity]="getTaskStatusSeverity(task.status)" />
        </div>
        <div class="detail-grid">
          <div class="detail-item"><span>Asset</span><strong>{{ task.asset_name || '—' }}</strong></div>
          <div class="detail-item"><span>Incident status</span><p-tag *ngIf="task.incident?.status; else noIncident" [value]="incidentStatusLabel(task.incident.status)" [severity]="incidentStatusSeverity(task.incident.status)" /><ng-template #noIncident><strong>Incident details unavailable</strong></ng-template></div>
          <div class="detail-item"><span>Reported</span><strong>{{ task.incident?.reported_at ? (task.incident.reported_at | date: 'medium') : (task.created_at | date: 'medium') }}</strong></div>
          <div class="detail-item"><span>Reported by</span><strong>{{ task.incident?.reporter_name || '—' }}</strong></div>
          <div class="detail-item"><span>Assigned to</span><strong>{{ task.assigned_user_name || task.incident?.assigned_user_name || 'Unassigned' }}</strong></div>
          <div class="detail-item" *ngIf="task.incident?.device_latitude && task.incident?.device_longitude"><span>Reported location</span><strong>{{ task.incident.device_latitude }}, {{ task.incident.device_longitude }}</strong></div>
        </div>
        <section class="detail-notes">
          <h3>What needs attention</h3>
          <p>{{ task.incident?.field_notes || task.incident_notes || 'No incident notes were recorded.' }}</p>
        </section>
        <section class="detail-notes" *ngIf="task.incident?.resolution_notes">
          <h3>Resolution notes</h3>
          <p>{{ task.incident.resolution_notes }}</p>
        </section>
        <section class="activity-stream" *ngIf="task.incident_id">
          <div class="activity-heading">
            <div><h3>Activity</h3><p>Notes and updates for this incident.</p></div>
            <span>{{ taskActivities.length }} entries</span>
          </div>
          <div *ngIf="activityLoading" class="activity-message"><i class="pi pi-spin pi-spinner"></i> Loading activity…</div>
          <div *ngIf="activityError" class="activity-error">{{ activityError }}</div>
          <div *ngIf="!activityLoading && !activityError && !taskActivities.length" class="activity-message">No activity has been recorded yet.</div>
          <div class="activity-timeline" *ngIf="taskActivities.length">
            <article class="activity-entry" *ngFor="let entry of taskActivities">
              <span class="activity-marker" [class.activity-marker--system]="entry.type !== 'note'"><i [class]="activityIcon(entry.type)"></i></span>
              <div class="activity-entry-content">
                <div class="activity-entry-heading"><strong>{{ activityLabel(entry.type) }}</strong><span>{{ entry.created_at | date: 'medium' }}</span></div>
                <small>{{ entry.author_name }}</small>
                <p>{{ entry.body }}</p>
              </div>
            </article>
          </div>
          <form class="activity-composer" (ngSubmit)="addActivityNote()">
            <label for="task-activity-note">Add a note</label>
            <textarea pTextarea id="task-activity-note" name="activityNote" [(ngModel)]="newActivityNote" rows="3" maxlength="5000" placeholder="Add an update about the work or next steps…" [disabled]="postingNote || activityLoading"></textarea>
            <div class="activity-composer-footer"><small>{{ newActivityNote.length }}/5000</small><p-button type="submit" label="Add note" icon="pi pi-send" [loading]="postingNote" [disabled]="!newActivityNote.trim() || postingNote" /></div>
          </form>
        </section>
        <div class="activity-unavailable" *ngIf="!task.incident_id">This task has no linked incident activity.</div>
      </ng-container>
    </p-dialog>

    <p-dialog [(visible)]="repairVerifyDialogVisible" header="Verify repair to complete task" [modal]="true" [draggable]="false" [closable]="!verifyingRepair" [style]="{ width: 'min(40rem, calc(100vw - 2rem))' }">
      <div class="repair-verify-form">
        <div class="repair-task-summary"><span>Task #{{ selectedTask?.id }}</span><strong>{{ selectedTask?.asset_name }}</strong><small>Asset {{ selectedTask?.state_id || 'State ID unavailable' }}</small></div>
        <div class="repair-form-field">
          <label for="task-repair-notes">Repair notes <span>*</span></label>
          <textarea pTextarea id="task-repair-notes" [(ngModel)]="repairNotes" rows="4" maxlength="1000" placeholder="Describe the repair and work completed." [disabled]="verifyingRepair"></textarea>
        </div>
        <div class="repair-gps" [class.repair-gps--ready]="repairCoordinates !== null">
          <div><strong>Repair location</strong><span *ngIf="repairCoordinates as gps">{{ gps.latitude | number: '1.5-5' }}, {{ gps.longitude | number: '1.5-5' }} (±{{ gps.accuracy | number: '1.0-0' }} m)</span><span *ngIf="!repairCoordinates">GPS is required to verify the repair.</span><small *ngIf="repairLocationError" class="repair-error">{{ repairLocationError }}</small></div>
          <p-button type="button" [label]="repairLocating ? 'Locating…' : repairCoordinates ? 'Refresh GPS' : 'Enable GPS'" icon="pi pi-map-marker" severity="secondary" [outlined]="true" [loading]="repairLocating" [disabled]="repairLocating || verifyingRepair" (onClick)="requestRepairLocation()" />
        </div>
      </div>
      <ng-template #footer>
        <p-button label="Cancel" severity="secondary" [text]="true" [disabled]="verifyingRepair" (onClick)="repairVerifyDialogVisible = false" />
        <p-button label="Verify repair & complete" icon="pi pi-check" [loading]="verifyingRepair" [disabled]="!repairNotes.trim() || !repairCoordinates || verifyingRepair" (onClick)="verifyRepairAndCompleteTask()" />
      </ng-template>
    </p-dialog>
  `,
  styles: [`
    .tasks-page { display: flex; flex-direction: column; gap: 1.25rem; }
    .page-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .page-heading h1 { margin: 0; font-size: 1.5rem; line-height: 1.3; font-weight: 600; }
    .page-heading p { margin: 0.35rem 0 0; color: var(--text-color-secondary); }
    .task-summary-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: stretch; gap: 1rem; }
    .summary-card { display: flex; min-height: 6.25rem; height: 100%; box-sizing: border-box; align-items: center; gap: 1rem; padding: 1.1rem 1.25rem; }
    .summary-icon { display: grid; width: 2.75rem; height: 2.75rem; place-items: center; flex: 0 0 auto; border-radius: 0.75rem; font-size: 1.15rem; }
    .summary-icon--blue { color: var(--blue-600, #2563eb); background: color-mix(in srgb, var(--blue-500, #3b82f6) 13%, transparent); }
    .summary-icon--green { color: var(--green-600, #16a34a); background: color-mix(in srgb, var(--green-500, #22c55e) 13%, transparent); }
    .summary-card > div:last-child { display: flex; flex-direction: column; gap: 0.25rem; }
    .summary-card span, .table-heading p { color: var(--text-color-secondary); }
    .summary-card strong { font-size: 1.35rem; font-weight: 600; font-variant-numeric: tabular-nums; }
    .task-tabs { display: flex; align-items: center; gap: 0.65rem; }
    .task-table-card { padding: 0; overflow: hidden; }
    .table-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.25rem 1.5rem 0.85rem; }
    .table-heading h2 { margin: 0; font-size: 1.15rem; line-height: 1.4; font-weight: 600; }
    .table-heading p { margin: 0.25rem 0 0; }
    .table-count { color: var(--text-color-secondary); font-size: 0.875rem; white-space: nowrap; }
    .task-id { color: var(--text-color-secondary); font-variant-numeric: tabular-nums; }
    .asset-name { font-weight: 600; }
    .task-link { padding: 0; border: 0; background: transparent; color: var(--primary-color); cursor: pointer; font: inherit; text-align: left; }
    .task-link:hover { text-decoration: underline; }
    .task-link:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; border-radius: 2px; }
    .task-notes { display: block; max-width: 28rem; margin-top: 0.2rem; overflow: hidden; color: var(--text-color-secondary); text-overflow: ellipsis; white-space: nowrap; }
    .actions-column, .actions-cell { text-align: right; white-space: nowrap; }
    .empty-cell { padding: 2.5rem 1rem !important; text-align: center; color: var(--text-color-secondary); }
    .empty-cell i, .empty-cell strong, .empty-cell span { display: block; }
    .empty-cell i { margin-bottom: 0.65rem; color: var(--primary-color); font-size: 1.5rem; }
    .empty-cell strong { margin-bottom: 0.25rem; color: var(--text-color); }
    .detail-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem; border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .task-status-controls { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
    .task-status-controls > div:first-child { display: flex; flex-direction: column; gap: 0.2rem; }
    .task-status-controls small { color: var(--text-color-secondary); }
    .task-status-actions { display: flex; align-items: center; gap: 0.65rem; }
    .task-status-timeline { margin: 0 0 1.25rem; padding: 1rem 1rem 0.85rem; border: 1px solid var(--surface-border); border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .status-track { display: flex; align-items: flex-start; width: 100%; }
    .status-step { display: flex; min-width: 4.2rem; flex: 0 0 auto; flex-direction: column; align-items: center; gap: 0.45rem; padding: 0; border: 0; background: transparent; color: var(--text-color-secondary); cursor: pointer; font: inherit; }
    .status-step:disabled { cursor: default; }
    .status-step-marker { display: grid; width: 2.15rem; height: 2.15rem; place-items: center; border: 2px solid currentColor; border-radius: 50%; background: var(--surface-card); color: inherit; transition: box-shadow 150ms ease, transform 150ms ease; }
    .status-step-label { font-size: 0.78rem; line-height: 1.2; white-space: nowrap; }
    .status-step:not(:disabled):hover .status-step-marker { transform: translateY(-1px); }
    .status-step:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 3px; border-radius: 4px; }
    .status-step--pending { color: var(--orange-500, #f97316); }
    .status-step--assigned { color: var(--blue-500, #3b82f6); }
    .status-step--in-progress { color: var(--purple-500, #a855f7); }
    .status-step--completed { color: var(--green-500, #22c55e); }
    .status-step--cancelled { color: var(--red-500, #ef4444); }
    .status-step--current .status-step-marker { background: currentColor; color: var(--surface-card); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 16%, transparent); }
    .status-step--current .status-step-label { color: var(--text-color); font-weight: 700; }
    .status-step--past .status-step-marker { background: color-mix(in srgb, currentColor 13%, var(--surface-card)); }
    .status-step--selected .status-step-marker { outline: 2px solid currentColor; outline-offset: 3px; }
    .status-step-connector { height: 2px; flex: 1 1 1rem; margin: 1.05rem 0.35rem 0; background: var(--surface-border); }
    .status-step-connector--done { background: var(--green-400, #4ade80); }
    .status-track-divider { width: 1px; height: 2.6rem; flex: 0 0 1px; margin: 0 0.8rem; background: var(--surface-border); }
    .status-timeline-caption { display: flex; align-items: baseline; gap: 0.45rem; margin-top: 0.8rem; padding-top: 0.65rem; border-top: 1px solid var(--surface-border); font-size: 0.82rem; }
    .status-timeline-caption > span:first-child, .status-timeline-hint { color: var(--text-color-secondary); }
    .status-timeline-hint { margin-left: auto; font-size: 0.75rem; }
    .status-text--pending { color: var(--orange-500, #f97316); }
    .status-text--assigned { color: var(--blue-500, #3b82f6); }
    .status-text--in-progress { color: var(--purple-500, #a855f7); }
    .status-text--completed { color: var(--green-500, #22c55e); }
    .status-text--cancelled { color: var(--red-500, #ef4444); }
    .task-status-notice { margin: -0.5rem 0 1rem; color: var(--primary-color); font-size: 0.875rem; }
    .detail-heading > div, .detail-item { display: flex; flex-direction: column; gap: 0.3rem; }
    .detail-heading strong { font-size: 1.2rem; }
    .detail-label, .detail-item > span { color: var(--text-color-secondary); font-size: 0.85rem; }
    .detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1.25rem 0; }
    .detail-item strong { font-weight: 500; overflow-wrap: anywhere; }
    .detail-notes { margin-top: 1rem; padding: 1rem; border: 1px solid var(--surface-border); border-radius: var(--content-border-radius); }
    .detail-notes h3 { margin: 0 0 0.5rem; font-size: 1rem; }
    .detail-notes p { margin: 0; line-height: 1.55; white-space: pre-wrap; }
    .activity-stream { margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--surface-border); }
    .activity-heading, .activity-entry-heading, .activity-composer-footer { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
    .activity-heading h3 { margin: 0; font-size: 1.05rem; }
    .activity-heading p { margin: 0.2rem 0 0; color: var(--text-color-secondary); font-size: 0.875rem; }
    .activity-heading > span, .activity-entry-heading > span, .activity-entry-content small, .activity-composer-footer small { color: var(--text-color-secondary); font-size: 0.8rem; }
    .activity-message { padding: 1.25rem 0; color: var(--text-color-secondary); }
    .activity-error { margin: 0.85rem 0; color: var(--red-500, #ef4444); }
    .activity-timeline { display: flex; flex-direction: column; margin: 1rem 0 1.25rem; }
    .activity-entry { position: relative; display: grid; grid-template-columns: 2rem minmax(0, 1fr); gap: 0.75rem; padding-bottom: 1.15rem; }
    .activity-entry:not(:last-child)::before { position: absolute; top: 2rem; bottom: 0; left: 0.95rem; width: 1px; background: var(--surface-border); content: ''; }
    .activity-marker { z-index: 1; display: grid; width: 2rem; height: 2rem; place-items: center; border: 1px solid var(--surface-border); border-radius: 50%; background: var(--surface-card); color: var(--primary-color); }
    .activity-marker--system { color: var(--text-color-secondary); }
    .activity-entry-content { min-width: 0; padding: 0.1rem 0 0; }
    .activity-entry-heading strong { font-size: 0.9rem; }
    .activity-entry-content small { display: block; margin-top: 0.15rem; }
    .activity-entry-content p { margin: 0.4rem 0 0; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
    .activity-composer { display: flex; flex-direction: column; gap: 0.6rem; padding: 1rem; border: 1px solid var(--surface-border); border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .activity-composer label { font-weight: 600; }
    .activity-unavailable { margin-top: 1rem; color: var(--text-color-secondary); font-size: 0.875rem; }
    .repair-verify-form { display: flex; flex-direction: column; gap: 1.1rem; }
    .repair-task-summary, .repair-gps { display: flex; flex-direction: column; gap: 0.35rem; padding: 1rem; border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .repair-task-summary span, .repair-task-summary small, .repair-gps span { color: var(--text-color-secondary); }
    .repair-form-field { display: flex; flex-direction: column; gap: 0.5rem; }
    .repair-form-field label { font-weight: 600; }
    .repair-form-field label span, .repair-error { color: var(--red-500, #ef4444); }
    .repair-gps { flex-direction: row; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--surface-border); }
    .repair-gps > div { display: flex; flex-direction: column; gap: 0.25rem; }
    .repair-gps--ready { border-color: color-mix(in srgb, var(--green-500, #22c55e) 45%, var(--surface-border)); }
    :host ::ng-deep .tasks-table .p-datatable-thead > tr > th { white-space: nowrap; }
    @media (max-width: 640px) {
      .page-heading { align-items: flex-start; flex-direction: column; }
      .task-summary-grid { grid-template-columns: minmax(0, 1fr); }
      .task-tabs { align-items: stretch; }
      .table-heading { align-items: flex-start; flex-direction: column; }
      .detail-grid { grid-template-columns: minmax(0, 1fr); }
      .task-status-controls, .task-status-actions, .repair-gps { align-items: stretch; flex-direction: column; }
      .task-status-timeline { overflow-x: auto; }
      .status-track { min-width: 35rem; }
      .status-timeline-caption { flex-wrap: wrap; }
      .status-timeline-hint { width: 100%; margin-left: 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TasksComponent implements OnInit {
  activeTab: 'assigned' | 'global' = 'assigned';
  assignedTasks: any[] = [];
  globalQueue: any[] = [];
  selectedTask: any | null = null;
  taskDialogVisible = false;
  taskActivities: IncidentActivity[] = [];
  newActivityNote = '';
  activityLoading = false;
  activityError = '';
  postingNote = false;
  private activityRequestId = 0;
  readonly taskStatusOptions = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Assigned', value: 'Assigned' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' }
  ];
  readonly taskStatusTimeline = [
    { label: 'Pending', value: 'Pending', icon: 'pi pi-clock' },
    { label: 'Assigned', value: 'Assigned', icon: 'pi pi-user' },
    { label: 'In Progress', value: 'In Progress', icon: 'pi pi-spin pi-cog' },
    { label: 'Completed', value: 'Completed', icon: 'pi pi-check' }
  ];
  pendingTaskStatus = 'Pending';
  updatingTaskStatus = false;
  taskStatusNotice = '';
  repairVerifyDialogVisible = false;
  repairNotes = '';
  repairCoordinates: { latitude: number; longitude: number; accuracy: number } | null = null;
  repairLocating = false;
  repairLocationError = '';
  verifyingRepair = false;

  constructor(
    private taskService: TaskService,
    private incidentService: IncidentService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAssignedTasks();
    this.loadGlobalQueue();
  }

  loadAssignedTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.assignedTasks = tasks;
    });
  }

  loadGlobalQueue(): void {
    this.taskService.getGlobalQueue().subscribe(tasks => {
      this.globalQueue = tasks;
    });
  }

  getTaskStatusSeverity(status: string): 'warn' | 'info' | 'success' | 'secondary' {
    const severities: Record<string, 'warn' | 'info' | 'success' | 'secondary'> = {
      Pending: 'warn',
      Assigned: 'info',
      'In Progress': 'info',
      Completed: 'success',
      Cancelled: 'secondary'
    };
    return severities[status] ?? 'secondary';
  }

  statusClass(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }

  statusStepState(currentStatus: string, stepStatus: string): string {
    const sequence = this.taskStatusTimeline.map(step => step.value);
    if (currentStatus === 'Cancelled') return stepStatus === 'Cancelled' ? 'status-step--current' : '';
    const currentIndex = sequence.indexOf(currentStatus);
    const stepIndex = sequence.indexOf(stepStatus);
    const classes: string[] = [];
    if (currentStatus === stepStatus) classes.push('status-step--current');
    else if (stepIndex >= 0 && currentIndex >= 0 && stepIndex < currentIndex) classes.push('status-step--past');
    if (this.pendingTaskStatus === stepStatus && this.pendingTaskStatus !== currentStatus) classes.push('status-step--selected');
    return classes.join(' ');
  }

  statusStepComplete(currentStatus: string, fromStatus: string): boolean {
    const sequence = this.taskStatusTimeline.map(step => step.value);
    return currentStatus !== 'Cancelled' && sequence.indexOf(currentStatus) > sequence.indexOf(fromStatus);
  }

  selectTaskStatus(status: string): void {
    this.pendingTaskStatus = status;
  }

  viewTask(task: any): void {
    this.selectedTask = task;
    this.pendingTaskStatus = task.status;
    this.taskStatusNotice = '';
    this.taskActivities = [];
    this.newActivityNote = '';
    this.activityError = '';
    this.taskDialogVisible = true;
    if (task.incident_id) this.loadTaskActivities(task.incident_id);
  }

  private loadTaskActivities(incidentId: number): void {
    const requestId = ++this.activityRequestId;
    this.activityLoading = true;
    this.activityError = '';
    this.taskService.getIncidentActivities(incidentId).subscribe({
      next: items => {
        if (requestId !== this.activityRequestId) return;
        this.taskActivities = items;
        this.activityLoading = false;
        this.changeDetector.markForCheck();
      },
      error: () => {
        if (requestId !== this.activityRequestId) return;
        this.activityLoading = false;
        this.activityError = 'Could not load activity. Close this dialog and try again.';
        this.changeDetector.markForCheck();
      }
    });
  }

  addActivityNote(): void {
    const incidentId = this.selectedTask?.incident_id;
    const body = this.newActivityNote.trim();
    if (!incidentId || !body || this.postingNote) return;
    this.postingNote = true;
    this.taskService.addIncidentNote(incidentId, body).subscribe({
      next: () => {
        this.postingNote = false;
        this.newActivityNote = '';
        this.loadTaskActivities(incidentId);
        this.changeDetector.markForCheck();
      },
      error: () => {
        this.postingNote = false;
        this.activityError = 'Could not save this note. Please try again.';
        this.changeDetector.markForCheck();
      }
    });
  }

  applyTaskStatus(): void {
    const task = this.selectedTask;
    const status = this.pendingTaskStatus;
    if (!task || !status || this.updatingTaskStatus || status === task.status) return;
    if (status === 'Assigned' && !task.assigned_user_id) {
      this.taskStatusNotice = 'Assign this incident to a Field Agent before setting its task to Assigned.';
      return;
    }
    if (status === 'Completed' && task.incident_id && task.incident?.status !== 'resolved') {
      if (!task.state_id) {
        this.taskStatusNotice = 'This task is missing the asset State ID required for repair verification.';
        return;
      }
      this.repairNotes = '';
      this.repairCoordinates = null;
      this.repairLocationError = '';
      this.repairVerifyDialogVisible = true;
      return;
    }

    this.updatingTaskStatus = true;
    this.taskStatusNotice = '';
    this.taskService.updateTaskStatus(task.id, status).subscribe({
      next: () => {
        task.status = status;
        this.syncTaskStatus(task.id, status);
        this.updatingTaskStatus = false;
        this.taskStatusNotice = `Task status updated to ${status}.`;
        this.loadGlobalQueue();
        this.loadAssignedTasks();
        this.changeDetector.markForCheck();
      },
      error: error => {
        this.updatingTaskStatus = false;
        this.taskStatusNotice = error?.error?.message ?? 'Could not update the task status.';
        this.changeDetector.markForCheck();
      }
    });
  }

  private syncTaskStatus(taskId: number, status: string): void {
    this.assignedTasks = this.assignedTasks.map(task => task.id === taskId ? { ...task, status } : task);
    this.globalQueue = this.globalQueue.map(task => task.id === taskId ? { ...task, status } : task);
  }

  requestRepairLocation(): void {
    if (!navigator.geolocation) {
      this.repairLocationError = 'Location is not available in this browser.';
      return;
    }
    this.repairLocating = true;
    this.repairLocationError = '';
    navigator.geolocation.getCurrentPosition(
      position => {
        this.repairCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
        this.repairLocating = false;
        this.changeDetector.markForCheck();
      },
      error => {
        this.repairLocating = false;
        this.repairLocationError = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied. Allow it in the browser site settings and retry.'
          : 'No GPS reading arrived. Check device location services and retry.';
        this.changeDetector.markForCheck();
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 15000 }
    );
  }

  verifyRepairAndCompleteTask(): void {
    const task = this.selectedTask;
    const coordinates = this.repairCoordinates;
    const notes = this.repairNotes.trim();
    if (!task?.incident_id || !task.state_id || !coordinates || !notes || this.verifyingRepair) return;

    this.verifyingRepair = true;
    this.repairLocationError = '';
    this.incidentService.verifyRepair({
      incidentId: task.incident_id,
      qrCodeData: task.state_id,
      fieldNotes: notes,
      deviceLatitude: coordinates.latitude,
      deviceLongitude: coordinates.longitude,
      deviceTimestamp: new Date().toISOString()
    }).subscribe({
      next: () => {
        task.status = 'Completed';
        if (task.incident) {
          task.incident.status = 'resolved';
          task.incident.resolution_notes = notes;
        }
        this.pendingTaskStatus = 'Completed';
        this.syncTaskStatus(task.id, 'Completed');
        this.verifyingRepair = false;
        this.repairVerifyDialogVisible = false;
        this.taskStatusNotice = 'Repair verified and task completed.';
        this.loadTaskActivities(task.incident_id);
        this.loadGlobalQueue();
        this.loadAssignedTasks();
        this.changeDetector.markForCheck();
      },
      error: error => {
        this.verifyingRepair = false;
        this.repairLocationError = error?.error?.details?.message ?? 'Could not verify the repair. Check the notes and location, then retry.';
        if (error?.status === 403 && task.incident) task.incident.status = 'pending_forensic_clearance';
        if (task.incident_id) this.loadTaskActivities(task.incident_id);
        this.changeDetector.markForCheck();
      }
    });
  }

  activityLabel(type: string): string {
    const labels: Record<string, string> = {
      reported: 'Incident reported', note: 'Note', assignment: 'Assignment', status: 'Status update', resolution: 'Resolution'
    };
    return labels[type] ?? 'Activity';
  }

  activityIcon(type: string): string {
    const icons: Record<string, string> = {
      reported: 'pi pi-exclamation-circle', note: 'pi pi-comment', assignment: 'pi pi-user-plus', status: 'pi pi-sync', resolution: 'pi pi-check-circle'
    };
    return icons[type] ?? 'pi pi-circle';
  }

  incidentStatusLabel(status: string): string {
    return status === 'open' ? 'Open' : status === 'pending_forensic_clearance' ? 'Pending review' : status === 'resolved' ? 'Resolved' : status;
  }

  incidentStatusSeverity(status: string): 'danger' | 'warn' | 'success' | 'secondary' {
    return status === 'open' ? 'danger' : status === 'pending_forensic_clearance' ? 'warn' : status === 'resolved' ? 'success' : 'secondary';
  }

  assignTask(id: number): void {
    console.log('Assign task:', id);
  }
}
