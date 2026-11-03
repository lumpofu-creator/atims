import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from './report.service';

@Component({
  selector: 'app-reports',
  template: `
    <section class="reports-page">
      <header class="page-heading">
        <div>
          <span class="eyebrow"><i class="pi pi-chart-bar"></i> Reporting</span>
          <h1>Reports</h1>
          <p>Generate and review reports across your assets and operations.</p>
        </div>
      </header>

      <section class="card report-builder">
        <div class="section-heading">
          <div class="section-icon"><i class="pi pi-sliders-h"></i></div>
          <div><h2>Build a report</h2><p>Choose the information and format you need.</p></div>
        </div>

        <form [formGroup]="reportForm" (ngSubmit)="generateReport()">
          <div class="report-form-grid">
            <div class="field">
              <label for="reportType">Report type</label>
              <p-select inputId="reportType" formControlName="reportType" [options]="reportTypes" optionLabel="label" optionValue="value" placeholder="Choose a report" />
            </div>
            <div class="field">
              <label for="department">Department / Ministry</label>
              <p-select inputId="department" formControlName="department" [options]="departments" optionLabel="label" optionValue="value" placeholder="All departments" />
            </div>
            <div class="field">
              <label for="status">Asset status</label>
              <p-select inputId="status" formControlName="status" [options]="assetStatuses" optionLabel="label" optionValue="value" placeholder="All statuses" />
            </div>
            <div class="field">
              <label for="outputFormat">Output format</label>
              <p-select inputId="outputFormat" formControlName="outputFormat" [options]="outputFormats" optionLabel="label" optionValue="value" />
            </div>
            <div class="field">
              <label for="startDate">Start date</label>
              <input id="startDate" type="date" pInputText formControlName="startDate" />
            </div>
            <div class="field">
              <label for="endDate">End date</label>
              <input id="endDate" type="date" pInputText formControlName="endDate" />
            </div>
          </div>
          <div class="form-footer">
            <div class="form-feedback" aria-live="polite">
              <span *ngIf="reportError" class="feedback-error"><i class="pi pi-exclamation-circle"></i>{{ reportError }}</span>
              <span *ngIf="reportSuccess" class="feedback-success"><i class="pi pi-check-circle"></i>{{ reportSuccess }}</span>
            </div>
            <p-button type="submit" label="Generate report" icon="pi pi-file-export" [loading]="generating" [disabled]="generating" />
          </div>
        </form>
      </section>

      <section class="card report-history">
        <div class="section-heading history-heading">
          <div class="section-icon section-icon--green"><i class="pi pi-folder-open"></i></div>
          <div><h2>Generated reports</h2><p>Your previously generated files.</p></div>
          <span class="report-count">{{ generatedReports.length }} {{ generatedReports.length === 1 ? 'report' : 'reports' }}</span>
        </div>
        <div *ngIf="reportsLoading" class="history-message"><i class="pi pi-spin pi-spinner"></i> Loading reports…</div>
        <div *ngIf="reportsError" class="history-message feedback-error"><i class="pi pi-exclamation-circle"></i>{{ reportsError }}</div>
        <div *ngIf="!reportsLoading && !reportsError && !generatedReports.length" class="empty-reports">
          <span class="empty-icon"><i class="pi pi-file"></i></span>
          <strong>No reports yet</strong>
          <p>Generated reports will appear here.</p>
        </div>
        <div class="report-list" *ngIf="!reportsLoading && generatedReports.length">
          <article class="report-row" *ngFor="let report of generatedReports">
            <span class="report-file-icon"><i [class]="reportIcon(report.format)"></i></span>
            <div class="report-info">
              <strong>{{ report.name || 'Report' }}</strong>
              <span>{{ report.description || 'Generated report' }}</span>
            </div>
            <span class="format-tag">{{ (report.format || 'file').toUpperCase() }}</span>
            <time *ngIf="report.created_at">{{ report.created_at | date:'medium' }}</time>
            <a *ngIf="report.url" class="report-download" [href]="report.url" target="_blank" rel="noopener" [attr.aria-label]="'Download ' + (report.name || 'report')"><i class="pi pi-download"></i></a>
          </article>
        </div>
      </section>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .reports-page { display: flex; flex-direction: column; gap: 1.25rem; max-width: 80rem; margin: 0 auto; }
    .page-heading { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.15rem; }
    .eyebrow { display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.3rem; color: var(--primary-color); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
    .page-heading h1 { margin: 0; font-size: 1.65rem; line-height: 1.3; font-weight: 600; }
    .page-heading p, .section-heading p { margin: 0.3rem 0 0; color: var(--text-color-secondary); }
    .report-builder, .report-history { padding: 1.5rem; }
    .section-heading { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.5rem; }
    .section-icon { display: grid; width: 2.7rem; height: 2.7rem; flex: 0 0 auto; place-items: center; border-radius: 0.75rem; background: color-mix(in srgb, var(--primary-color) 12%, var(--surface-card)); color: var(--primary-color); font-size: 1.15rem; }
    .section-icon--green { background: color-mix(in srgb, var(--green-500, #22c55e) 12%, var(--surface-card)); color: var(--green-600, #16a34a); }
    .section-heading h2 { margin: 0; font-size: 1.15rem; line-height: 1.35; font-weight: 600; }
    .section-heading p { font-size: 0.9rem; }
    .report-form-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem 1rem; }
    .field { display: flex; min-width: 0; flex-direction: column; gap: 0.5rem; }
    .field label { font-size: 0.9rem; font-weight: 500; }
    .field p-select, .field input { width: 100%; }
    .form-footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.5rem; padding-top: 1.15rem; border-top: 1px solid var(--surface-border); }
    .form-feedback { color: var(--text-color-secondary); font-size: 0.875rem; }
    .feedback-error, .feedback-success { display: inline-flex; align-items: center; gap: 0.45rem; }
    .feedback-error { color: var(--red-500, #ef4444); }
    .feedback-success { color: var(--green-600, #16a34a); }
    .history-heading { margin-bottom: 0.5rem; }
    .report-count { margin-left: auto; padding: 0.3rem 0.65rem; border-radius: 1rem; background: var(--surface-ground); color: var(--text-color-secondary); font-size: 0.8rem; white-space: nowrap; }
    .history-message { padding: 1.5rem 0; color: var(--text-color-secondary); }
    .empty-reports { display: flex; min-height: 12rem; flex-direction: column; align-items: center; justify-content: center; color: var(--text-color-secondary); text-align: center; }
    .empty-icon { display: grid; width: 3rem; height: 3rem; place-items: center; margin-bottom: 0.75rem; border-radius: 50%; background: var(--surface-ground); color: var(--primary-color); font-size: 1.25rem; }
    .empty-reports strong { color: var(--text-color); font-weight: 600; }
    .empty-reports p { margin: 0.25rem 0 0; font-size: 0.9rem; }
    .report-list { display: flex; flex-direction: column; }
    .report-row { display: flex; min-width: 0; align-items: center; gap: 0.9rem; padding: 1rem 0; border-top: 1px solid var(--surface-border); }
    .report-file-icon { display: grid; width: 2.5rem; height: 2.5rem; flex: 0 0 auto; place-items: center; border-radius: 0.65rem; background: var(--surface-ground); color: var(--primary-color); font-size: 1.05rem; }
    .report-info { display: flex; min-width: 0; flex: 1; flex-direction: column; gap: 0.2rem; }
    .report-info strong { overflow: hidden; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
    .report-info span, .report-row time { color: var(--text-color-secondary); font-size: 0.85rem; }
    .format-tag { padding: 0.25rem 0.5rem; border-radius: 0.35rem; background: var(--surface-ground); color: var(--text-color-secondary); font-size: 0.72rem; font-weight: 600; }
    .report-download { display: grid; width: 2.25rem; height: 2.25rem; flex: 0 0 auto; place-items: center; border-radius: 50%; color: var(--primary-color); text-decoration: none; }
    .report-download:hover { background: var(--surface-ground); }
    .report-download:focus-visible { outline: 2px solid var(--primary-color); }
    @media (max-width: 900px) { .report-form-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 640px) {
      .page-heading h1 { font-size: 1.4rem; }
      .report-builder, .report-history { padding: 1rem; }
      .report-form-grid { grid-template-columns: minmax(0, 1fr); }
      .form-footer { align-items: stretch; flex-direction: column; }
      .form-footer p-button { align-self: flex-start; }
      .report-row { flex-wrap: wrap; gap: 0.65rem; }
      .report-info { flex-basis: calc(100% - 3.5rem); }
      .report-row time { margin-left: 3.15rem; }
      .report-count { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ReportsComponent implements OnInit {
  reportForm!: FormGroup;
  generatedReports: any[] = [];
  generating = false;
  reportsLoading = false;
  reportError = '';
  reportsError = '';
  reportSuccess = '';

  readonly reportTypes = [
    { label: 'Asset Inventory', value: 'asset-inventory' },
    { label: 'Incident Summary', value: 'incident-summary' },
    { label: 'Inspection History', value: 'inspection-history' },
    { label: 'Asset Status', value: 'asset-status' }
  ];
  readonly departments = [
    { label: 'All Departments', value: '' },
    { label: 'Transport', value: 'transport' },
    { label: 'Energy', value: 'energy' },
    { label: 'Water', value: 'water' },
    { label: 'Infrastructure', value: 'infrastructure' }
  ];
  readonly assetStatuses = [
    { label: 'All Statuses', value: '' },
    { label: 'Functional', value: 'Fonctionnel' },
    { label: 'Out of Service', value: 'En Panne' },
    { label: 'Decommissioned', value: 'Déclassé' },
    { label: 'Unknown', value: 'Inconnu' }
  ];
  readonly outputFormats = [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel (.xlsx)', value: 'excel' },
    { label: 'CSV', value: 'csv' }
  ];

  constructor(private fb: FormBuilder, private reportService: ReportService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      reportType: ['asset-inventory'],
      department: [''],
      status: [''],
      startDate: [''],
      endDate: [''],
      outputFormat: ['pdf']
    });
    this.loadGeneratedReports();
  }

  generateReport(): void {
    if (this.reportForm.invalid || this.generating) return;
    this.generating = true;
    this.reportError = '';
    this.reportSuccess = '';
    this.reportService.generateReport(this.reportForm.value).subscribe({
      next: () => {
        this.generating = false;
        this.reportSuccess = 'Report generated successfully.';
        this.loadGeneratedReports();
        this.changeDetector.markForCheck();
      },
      error: (error) => {
        this.generating = false;
        this.reportError = error?.error?.message ?? 'Unable to generate the report. Please try again.';
        this.changeDetector.markForCheck();
      }
    });
  }

  loadGeneratedReports(): void {
    this.reportsLoading = true;
    this.reportsError = '';
    this.reportService.getReports().subscribe({
      next: reports => {
        this.generatedReports = reports;
        this.reportsLoading = false;
        this.changeDetector.markForCheck();
      },
      error: error => {
        this.reportsError = error?.error?.message ?? 'Could not load generated reports.';
        this.reportsLoading = false;
        this.changeDetector.markForCheck();
      }
    });
  }

  reportIcon(format: string): string {
    return format?.toLowerCase() === 'pdf' ? 'pi pi-file-pdf' : format?.toLowerCase() === 'excel' ? 'pi pi-file-excel' : 'pi pi-file';
  }
}
