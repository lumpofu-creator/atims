import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentService } from './incident.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-log',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <h1>Log an Incident</h1>
      
      <form [formGroup]="incidentForm" (ngSubmit)="onSubmit()">
        <!-- Asset Selection -->
        <div class="mb-3">
          <label for="assetId" class="form-label">Asset</label>
          <input 
            type="text" 
            class="form-control" 
            id="assetId"
            formControlName="assetId"
            placeholder="Enter the asset state ID (e.g. FLEET-000123)"
            [readonly]="scanning"
          />
          <button 
            type="button" 
            class="btn btn-outline-primary mt-2" 
            (click)="startQrScan()"
            [disabled]="scanning"
          >
            {{ scanning ? 'Scanning...' : 'Scan QR Code' }}
          </button>
        </div>
        
        <!-- Condition Status -->
        <div class="mb-3">
          <label for="conditionStatus" class="form-label">Status</label>
          <select 
            class="form-select" 
            id="conditionStatus"
            formControlName="conditionStatus"
          >
            <option value="">Select...</option>
            <option value="Fonctionnel">Functional</option>
            <option value="En Panne">Out of Service</option>
            <option value="Déclassé">Decommissioned</option>
            <option value="Inconnu">Unknown</option>
          </select>
        </div>
        
        <!-- Field Notes -->
        <div class="mb-3">
          <label for="fieldNotes" class="form-label">Field Notes</label>
          <textarea 
            class="form-control" 
            id="fieldNotes"
            formControlName="fieldNotes"
            rows="3"
          ></textarea>
        </div>
        
        <!-- Defect Image Upload -->
        <div class="mb-3">
          <label for="defectImage" class="form-label">Defect Image</label>
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
          <label class="form-label">GPS Accuracy</label>
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
            GPS accuracy must be 15 m or better to submit the inspection.
          </small>
        </div>
        
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="btn btn-primary" 
          [disabled]="incidentForm.invalid || !canSubmit"
        >
          Submit Incident
        </button>
      </form>
    </div>
  `
})
export class IncidentLogComponent implements OnInit {
  readonly Math = Math;
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
        alert('The image is too large. The maximum size is 800 KB.');
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
          alert('Incident submitted successfully.');
          this.incidentForm.reset();
        },
        error: (error) => {
          console.error('Error logging incident:', error);
          alert('Unable to submit the incident.');
        }
      });
    }
  }
}
