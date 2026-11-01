import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from './report.service';

@Component({
  selector: 'app-reports',
  template: `
    <div class="container">
      <h1>Générateur de Rapports</h1>
      
      <div class="card">
        <div class="card-body">
          <form [formGroup]="reportForm" (ngSubmit)="generateReport()">
            <!-- Report Type -->
            <div class="mb-3">
              <label for="reportType" class="form-label">Type de rapport</label>
              <select class="form-select" id="reportType" formControlName="reportType">
                <option value="asset-inventory">Inventaire des Actifs</option>
                <option value="incident-summary">Résumé des Incidents</option>
                <option value="inspection-history">Historique des Inspections</option>
                <option value="asset-status">Statut des Actifs</option>
              </select>
            </div>
            
            <!-- Department Filter -->
            <div class="mb-3">
              <label for="department" class="form-label">Département/Ministère</label>
              <select class="form-select" id="department" formControlName="department">
                <option value="">Tous les départements</option>
                <option value="transport">Transports</option>
                <option value="energy">Énergie</option>
                <option value="water">Eau</option>
                <option value="infrastructure">Infrastructures</option>
              </select>
            </div>
            
            <!-- Status Filter -->
            <div class="mb-3">
              <label for="status" class="form-label">Statut de l'actif</label>
              <select class="form-select" id="status" formControlName="status">
                <option value="">Tous les statuts</option>
                <option value="Fonctionnel">Fonctionnel</option>
                <option value="En Panne">En Panne</option>
                <option value="Déclassé">Déclassé</option>
                <option value="Inconnu">Inconnu</option>
              </select>
            </div>
            
            <!-- Date Range -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="startDate" class="form-label">Date de début</label>
                <input type="date" class="form-control" id="startDate" formControlName="startDate" />
              </div>
              <div class="col-md-6">
                <label for="endDate" class="form-label">Date de fin</label>
                <input type="date" class="form-control" id="endDate" formControlName="endDate" />
              </div>
            </div>
            
            <!-- Output Format -->
            <div class="mb-3">
              <label for="outputFormat" class="form-label">Format de sortie</label>
              <select class="form-select" id="outputFormat" formControlName="outputFormat">
                <option value="pdf">PDF (Formulaire)</option>
                <option value="excel">Excel (.xlsx)</option>
                <option value="csv">CSV (Données brutes)</option>
              </select>
            </div>
            
            <!-- Generate Button -->
            <button type="submit" class="btn btn-primary">Générer le rapport</button>
          </form>
        </div>
      </div>
      
      <!-- Generated Reports -->
      <div class="card mt-4">
        <div class="card-header">
          <h5>Rapports Générés</h5>
        </div>
        <div class="card-body">
          <div *ngIf="generatedReports?.length; else noReports">
            <div class="list-group" *ngFor="let report of generatedReports">
              <a href="{{ report.url }}" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ report.name }}</h5>
                  <small>{{ report.created_at | date:'short' }}</small>
                </div>
                <p class="mb-1">{{ report.description }}</p>
                <small class="text-muted">Format: {{ report.format }}</small>
              </a>
            </div>
          </div>
          <ng-template #noReports>
            <p>Aucun rapport généré.</p>
          </ng-template>
        </div>
      </div>
    </div>
  `
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
        alert('Rapport généré avec succès');
        this.loadGeneratedReports();
      },
      error: (error) => {
        console.error('Error generating report:', error);
        alert('Erreur lors de la génération du rapport');
      }
    });
  }
  
  loadGeneratedReports(): void {
    this.reportService.getReports().subscribe(reports => {
      this.generatedReports = reports;
    });
  }
}