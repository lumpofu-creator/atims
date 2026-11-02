import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from './report.service';

@Component({
    selector: 'app-reports',
    template: `
    <div class="container">
      <h1>Report Generator</h1>
    
      <div class="card">
        <div class="card-body">
          <form [formGroup]="reportForm" (ngSubmit)="generateReport()">
            <!-- Report Type -->
            <div class="mb-3">
              <label for="reportType" class="form-label">Report Type</label>
              <select class="form-select" id="reportType" formControlName="reportType">
                <option value="asset-inventory">Asset Inventory</option>
                <option value="incident-summary">Incident Summary</option>
                <option value="inspection-history">Inspection History</option>
                <option value="asset-status">Asset Status</option>
              </select>
            </div>
    
            <!-- Department Filter -->
            <div class="mb-3">
              <label for="department" class="form-label">Department / Ministry</label>
              <select class="form-select" id="department" formControlName="department">
                <option value="">All Departments</option>
                <option value="transport">Transport</option>
                <option value="energy">Energy</option>
                <option value="water">Water</option>
                <option value="infrastructure">Infrastructure</option>
              </select>
            </div>
    
            <!-- Status Filter -->
            <div class="mb-3">
              <label for="status" class="form-label">Asset Status</label>
              <select class="form-select" id="status" formControlName="status">
                <option value="">All Statuses</option>
                <option value="Fonctionnel">Functional</option>
                <option value="En Panne">Out of Service</option>
                <option value="Déclassé">Decommissioned</option>
                <option value="Inconnu">Unknown</option>
              </select>
            </div>
    
            <!-- Date Range -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="startDate" class="form-label">Start Date</label>
                <input type="date" class="form-control" id="startDate" formControlName="startDate" />
              </div>
              <div class="col-md-6">
                <label for="endDate" class="form-label">End Date</label>
                <input type="date" class="form-control" id="endDate" formControlName="endDate" />
              </div>
            </div>
    
            <!-- Output Format -->
            <div class="mb-3">
              <label for="outputFormat" class="form-label">Output Format</label>
              <select class="form-select" id="outputFormat" formControlName="outputFormat">
                <option value="pdf">PDF (Form)</option>
                <option value="excel">Excel (.xlsx)</option>
                <option value="csv">CSV (Raw Data)</option>
              </select>
            </div>
    
            <!-- Generate Button -->
            <button type="submit" class="btn btn-primary">Generate Report</button>
          </form>
        </div>
      </div>
    
      <!-- Generated Reports -->
      <div class="card mt-4">
        <div class="card-header">
          <h5>Generated Reports</h5>
        </div>
        <div class="card-body">
          @if (generatedReports.length) {
            <div>
              @for (report of generatedReports; track report) {
                <div class="list-group">
                  <a href="{{ report.url }}" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{ report.name }}</h5>
                      <small>{{ report.created_at | date:'short' }}</small>
                    </div>
                    <p class="mb-1">{{ report.description }}</p>
                    <small class="text-muted">Format: {{ report.format }}</small>
                  </a>
                </div>
              }
            </div>
          } @else {
            <p>No reports have been generated.</p>
          }
        </div>
      </div>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ReportsComponent implements OnInit {
  reportForm!: FormGroup;
  generatedReports: any[] = [];
  
  constructor(private fb: FormBuilder, private reportService: ReportService) {}
  
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
    if (this.reportForm.invalid) {
      return;
    }
    
    const formData = this.reportForm.value;
    this.reportService.generateReport(formData).subscribe({
      next: (response) => {
        alert('Report generated successfully.');
        this.loadGeneratedReports();
      },
      error: (error) => {
        console.error('Error generating report:', error);
        alert('Unable to generate the report.');
      }
    });
  }
  
  loadGeneratedReports(): void {
    this.reportService.getReports().subscribe(reports => {
      this.generatedReports = reports;
    });
  }
}
