import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentService } from './incident.service';

@Component({
  selector: 'app-incident-log',
  template: `
    <div class="container">
      <h1>Journaliser un Incident</h1>
      
      <form [formGroup]="incidentForm" (ngSubmit)="onSubmit()">
        <!-- Asset Selection -->
        <div class="mb-3">
          <label for="assetId" class="form-label">Actif</label>
          <input 
            type="text" 
            class="form-control" 
            id="assetId"
            formControlName="assetId"
            placeholder="Entrez l'ID d'état de l'actif (ex: FLEET-000123)"
            [readonly]="scanning"
          />
          <button 
            type="button" 
            class="btn btn-outline-primary mt-2" 
            (click)="startQrScan()"
            [disabled]="scanning"
          >
            {{ scanning ? 'Scan en cours...' : 'Scanner le QR Code' }}
          </button>
        </div>
        
        <!-- Condition Status -->
        <div class="mb-3">
          <label for="conditionStatus" class="form-label">Statut</label>
          <select 
            class="form-select" 
            id="conditionStatus"
            formControlName="conditionStatus"
          >
            <option value="">Sélectionner...</option>
            <option value="Fonctionnel">Fonctionnel</option>
            <option value="En Panne">En Panne</option>
            <option value="Déclassé">Déclassé</option>
            <option value="Inconnu">Inconnu</option>
          </select>
        </div>
        
        <!-- Field Notes -->
        <div class="mb-3">
          <label for="fieldNotes" class="form-label">Notes de terrain</label>
          <textarea 
            class="form-control" 
            id="fieldNotes"
            formControlName="fieldNotes"
            rows="3"
          ></textarea>
        </div>
        
        <!-- Defect Image Upload -->
        <div class="mb-3">
          <label for="defectImage" class="form-label">Image du défaut</label>
          <input 
            type="file" 
            class="form-control" 
            id="defectImage"
            accept="image/jpeg,image/png,image/gif"
            (change)="onFileChange($event)"
          />
          <div *ngIf="selectedFile" class="mt-2">
            <small class="text-muted">
              {{ selectedFile.name }} ({{ (selectedFile.size / 1024).toFixed(1) }} KB)
            </small>
          </div>
        </div>
        
        <!-- GPS Accuracy Indicator -->
        <div class="mb-3">
          <label class="form-label">Précision GPS</label>
          <div class="d-flex align-items-center">
            <div class="progress flex-grow-1 me-2" style="height: 20px;">
              <div 
                class="progress-bar" 
                [class.progress-bar-success]="gpsAccuracy <= 5"
                [class.progress-bar-warning]="gpsAccuracy > 5 && gpsAccuracy <= 10"
                [class.progress-bar-danger]="gpsAccuracy > 10"
                role="progressbar"
                [style.width]="(Math.max(0, 15 - gpsAccuracy) / 15 * 100) + '%'"
              >
                {{ gpsAccuracy | number:'1.1-1' }} m
              </div>
            </div>
            <span class="text-muted">Max: 15m</span>
          </div>
          <small class="form-text text-muted">
            La précision GPS doit être inférieure à 15m pour soumettre l'inspection
          </small>
        </div>
        
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="btn btn-primary" 
          [disabled]="incidentForm.invalid || !canSubmit"
        >
          Soumettre l'incident
        </button>
      </form>
    </div>
  `
})
export class IncidentLogComponent implements OnInit {
  incidentForm!: FormGroup;
  scanning = false;
  selectedFile: File | null = null;
  gpsAccuracy = 10;
  canSubmit = false;
  
  constructor(
    private fb: FormBuilder,
    private incidentService: IncidentService
  ) {}
  
  ngOnInit(): void {
    this.incidentForm = this.fb.group({
      assetId: ['', Validators.required],
      conditionStatus: ['', Validators.required],
      fieldNotes: [''],
      defectImage: ['']
    });
    
    // Listen for GPS changes
    this.watchGps();
  }
  
  startQrScan(): void {
    this.scanning = true;
    // In production, use html5-qrcode here
    setTimeout(() => {
      this.scanning = false;
      this.incidentForm.patchValue({ assetId: 'FLEET-000001' });
    }, 2000);
  }
  
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      
      // Validate file size (800KB limit for mobile)
      if (this.selectedFile.size > 800 * 1024) {
        alert('L\'image est trop volumineuse. La taille maximale est de 800 KB.');
        this.selectedFile = null;
        return;
      }
    }
  }
  
  watchGps(): void {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          this.gpsAccuracy = position.coords.accuracy;
          this.canSubmit = this.gpsAccuracy <= 15;
          
          // Update form with GPS data if needed
          this.incidentForm.patchValue({
            deviceLatitude: position.coords.latitude,
            deviceLongitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('GPS error:', error);
          this.gpsAccuracy = 999; // Set to invalid value
          this.canSubmit = false;
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000
        }
      );
    }
  }
  
  onSubmit(): void {
    if (this.incidentForm.valid) {
      const formData = {
        ...this.incidentForm.value,
        deviceLatitude: (navigator.geolocation as any).lastPosition?.coords.latitude,
        deviceLongitude: (navigator.geolocation as any).lastPosition?.coords.longitude,
        deviceTimestamp: new Date().toISOString()
      };
      
      this.incidentService.logIncident(formData).subscribe({
        next: (response) => {
          alert('Incident enregistré avec succès!');
          this.incidentForm.reset();
        },
        error: (error) => {
          console.error('Error logging incident:', error);
          alert('Erreur lors de l\'enregistrement de l\'incident');
        }
      });
    }
  }
}
