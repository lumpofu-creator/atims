import { CommonModule } from '@angular/common';
import { Component, DestroyRef, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { IncidentLog, IncidentService } from './incident.service';
import { Asset, AssetService } from '../assets/asset.service';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';

interface QrCodeDetectorLike {
  detect(source: CanvasImageSource): Promise<Array<{ rawValue: string }>>;
}

type QrCodeDetectorConstructor = new (options?: { formats: string[] }) => QrCodeDetectorLike;

@Component({
  selector: 'app-incident-log',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DialogModule, InputTextModule, TextareaModule, TagModule, ToastModule],
  providers: [MessageService],
  template: `
    <p-toast />

    <section class="incident-page">
      <header class="page-heading">
        <div>
          <h1>Log Incident</h1>
          <p>Record an issue affecting an asset.</p>
        </div>
        <p-tag value="Asset will be marked out of service" severity="warn" icon="pi pi-exclamation-triangle" />
      </header>

      <div class="incident-layout">
        <div class="card incident-form-card">
          <div class="section-heading">
            <span class="section-icon"><i class="pi pi-file-edit"></i></span>
            <div>
              <h2>Incident details</h2>
              <p>Identify the asset and describe the issue.</p>
            </div>
          </div>

          <form [formGroup]="incidentForm" (ngSubmit)="onSubmit()" novalidate>
            <div class="form-field">
              <label for="assetStateId">Asset State ID <span class="required-mark">*</span></label>
              <div class="asset-input-row">
                <input
                  pInputText
                  id="assetStateId"
                  formControlName="qrCodeData"
                  placeholder="e.g. FLEET-000123"
                  autocomplete="off"
                  fluid
                  [invalid]="incidentForm.controls.qrCodeData.touched && incidentForm.controls.qrCodeData.invalid"
                />
                <p-button type="button" label="Scan QR Code" icon="pi pi-qrcode" severity="secondary" [outlined]="true" [loading]="scanning" [disabled]="scanning" (onClick)="startQrScan()" />
              </div>
              <small class="field-help">Enter the State ID printed on the asset label.</small>
              <div *ngIf="assetLookupState !== 'idle'" class="asset-lookup" [ngClass]="'asset-lookup--' + assetLookupState" aria-live="polite">
                <i class="pi" [ngClass]="assetLookupState === 'searching' ? 'pi-spin pi-spinner' : assetLookupState === 'found' ? 'pi-check-circle' : 'pi-info-circle'"></i>
                <ng-container [ngSwitch]="assetLookupState">
                  <span *ngSwitchCase="'searching'">Searching assets…</span>
                  <span *ngSwitchCase="'found'">{{ matchedAsset?.name }}<small *ngIf="matchedAsset?.category"> · {{ matchedAsset?.category }}</small></span>
                  <span *ngSwitchCase="'notFound'">No asset found for this State ID.</span>
                  <span *ngSwitchCase="'error'">Could not search assets. Check the connection and try again.</span>
                </ng-container>
              </div>
              <small class="field-error" *ngIf="incidentForm.controls.qrCodeData.touched && incidentForm.controls.qrCodeData.hasError('required')">Asset State ID is required.</small>
            </div>

            <div class="form-field">
              <div class="label-row">
                <label for="fieldNotes">Incident notes <span class="required-mark">*</span></label>
                <span class="character-count">{{ (incidentForm.controls.fieldNotes.value ?? '').length }}/1000</span>
              </div>
              <textarea
                pTextarea
                id="fieldNotes"
                formControlName="fieldNotes"
                rows="6"
                maxlength="1000"
                placeholder="Describe the issue, when it was noticed, and any relevant details."
                fluid
                [invalid]="incidentForm.controls.fieldNotes.touched && incidentForm.controls.fieldNotes.invalid"
              ></textarea>
              <small class="field-error" *ngIf="incidentForm.controls.fieldNotes.touched && incidentForm.controls.fieldNotes.hasError('required')">Incident notes are required.</small>
              <small class="field-error" *ngIf="incidentForm.controls.fieldNotes.hasError('maxlength')">Notes must be 1000 characters or fewer.</small>
            </div>

            <div class="form-field">
              <label for="defectImageInput">Defect image <span class="optional-label">Optional</span></label>
              <div class="upload-row">
                <input #defectImageInput id="defectImageInput" class="visually-hidden" type="file" accept="image/jpeg,image/png,image/gif,image/webp" (change)="onFileChange($event)" />
                <p-button type="button" label="Choose image" icon="pi pi-image" severity="secondary" [outlined]="true" (onClick)="defectImageInput.click()" />
                <span *ngIf="selectedFile" class="file-name"><i class="pi pi-paperclip"></i> {{ selectedFile.name }} <span class="muted">({{ (selectedFile.size / 1024).toFixed(1) }} KB)</span></span>
                <p-button *ngIf="selectedFile" type="button" icon="pi pi-times" severity="danger" [text]="true" [rounded]="true" ariaLabel="Remove image" (onClick)="clearFile(defectImageInput)" />
                <span *ngIf="!selectedFile" class="field-help">JPG, PNG, GIF or WebP · max 800 KB</span>
              </div>
            </div>

            <div class="gps-status" [class.gps-status--ready]="canSubmit" [class.gps-status--error]="gpsError">
              <div class="gps-status-heading">
                <div class="gps-icon"><i class="pi" [ngClass]="canSubmit ? 'pi-map-marker' : 'pi-map-marker'" ></i></div>
                <div class="gps-status-copy">
                  <strong>Device GPS</strong>
                  <span *ngIf="gpsLatitude !== null && gpsLongitude !== null">{{ gpsLatitude | number: '1.5-5' }}, {{ gpsLongitude | number: '1.5-5' }}</span>
                  <span *ngIf="gpsError">{{ gpsError }}</span>
                  <span *ngIf="gpsRequesting">Requesting browser location and waiting for a GPS reading…</span>
                  <span *ngIf="!gpsRequested && gpsLatitude === null">Enable location to get a GPS reading.</span>
                  <span *ngIf="gpsRequested && !gpsRequesting && !gpsError && gpsLatitude === null">Waiting for a GPS reading…</span>
                </div>
                <p-tag [value]="canSubmit ? 'Precise' : gpsRequesting ? 'Locating' : gpsLatitude !== null ? 'Available' : gpsError ? 'Unavailable' : 'Optional'" [severity]="canSubmit ? 'success' : gpsRequesting ? 'info' : 'secondary'" />
              </div>
              <div class="gps-actions">
                <p-button type="button" [label]="!gpsRequested ? 'Enable location' : canSubmit ? 'Refresh location' : gpsRequesting ? 'Requesting location…' : 'Retry location'" icon="pi pi-map-marker" severity="secondary" [outlined]="true" [loading]="gpsRequesting" [disabled]="gpsRequesting" (onClick)="enableLocation()" />
                <div *ngIf="gpsError.toLowerCase().includes('permission')" class="gps-permission-help">
                  <strong>Allow location in Chrome</strong>
                  <ol>
                    <li>Click the site information icon just left of the address bar.</li>
                    <li>Choose <strong>Site settings</strong>, then set <strong>Location</strong> to <strong>Allow</strong>.</li>
                    <li>Return to this page and select <strong>Retry location</strong>.</li>
                  </ol>
                </div>
                <div *ngIf="gpsError.toLowerCase().includes('no gps reading') || gpsError.toLowerCase().includes('accuracy')" class="gps-permission-help">
                  <strong>Check device location</strong>
                  <ol>
                    <li>On Windows, open <strong>Start → Settings → Privacy &amp; security → Location</strong> and turn on <strong>Location services</strong>.</li>
                    <li>If you are indoors, move near a window or outdoors, then select <strong>Retry location</strong>.</li>
                  </ol>
                  <small>Location is optional. You can still submit the incident without a GPS reading.</small>
                </div>
              </div>
              <div class="gps-meter" role="progressbar" aria-label="GPS accuracy" [attr.aria-valuenow]="gpsProgress" aria-valuemin="0" aria-valuemax="100">
                <span [style.width.%]="gpsProgress"></span>
              </div>
              <small>Optional device location. GPS accuracy: {{ gpsAccuracy === null ? '—' : (gpsAccuracy | number: '1.1-1') + ' m' }}. You can submit without it.</small>
            </div>

            <div class="form-actions">
              <p-button type="submit" label="Submit Incident" icon="pi pi-send" [loading]="submitting" [disabled]="submitting || incidentForm.invalid || !matchedAsset" />
            </div>
          </form>
        </div>

        <aside class="card incident-info-card">
          <h2>What happens next?</h2>
          <ul class="next-steps">
            <li><span class="step-icon"><i class="pi pi-search"></i></span><span>The asset is matched by its State ID.</span></li>
            <li><span class="step-icon"><i class="pi pi-book"></i></span><span>Your incident notes are recorded.</span></li>
            <li><span class="step-icon step-icon--warning"><i class="pi pi-exclamation-triangle"></i></span><span>The asset is marked <strong>Out of Service</strong> for follow-up.</span></li>
          </ul>
          <div class="info-note"><i class="pi pi-info-circle"></i><span>Check the State ID before submitting. The incident endpoint updates the asset status when the incident is accepted.</span></div>
        </aside>
      </div>
    </section>

    <p-dialog [(visible)]="scannerVisible" header="Scan asset QR code" [modal]="true" [draggable]="false" [style]="{ width: 'min(34rem, calc(100vw - 2rem))' }" (onShow)="startCameraScan()" (onHide)="stopQrScan()">
      <div class="scanner-body">
        <video #scannerVideo autoplay playsinline muted></video>
        <div class="scanner-help"><i class="pi pi-info-circle"></i> Point the camera at the asset’s QR code.</div>
      </div>
      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [outlined]="true" (onClick)="scannerVisible = false" />
      </ng-template>
    </p-dialog>
  `,
  styles: [`
    .incident-page { display: flex; flex-direction: column; gap: 1.25rem; }
    .page-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .page-heading h1 { margin: 0; font-size: 1.5rem; line-height: 1.3; font-weight: 600; }
    .page-heading p { margin: 0.35rem 0 0; color: var(--text-color-secondary); }
    .incident-layout { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr); align-items: start; gap: 1.25rem; }
    .incident-form-card, .incident-info-card { padding: 1.5rem; }
    .section-heading { display: flex; align-items: center; gap: 0.9rem; margin-bottom: 1.5rem; }
    .section-heading h2, .incident-info-card h2 { margin: 0; color: var(--text-color); font-size: 1.1rem; font-weight: 600; }
    .section-heading p { margin: 0.3rem 0 0; color: var(--text-color-secondary); font-size: 0.9rem; }
    .section-icon, .step-icon { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 0.75rem; background: color-mix(in srgb, var(--primary-color) 12%, transparent); color: var(--primary-color); }
    form { display: flex; flex-direction: column; gap: 1.35rem; }
    .form-field { display: flex; flex-direction: column; gap: 0.5rem; }
    .form-field label { color: var(--text-color); font-weight: 600; }
    .asset-input-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 0.65rem; }
    .required-mark, .field-error { color: var(--red-500, #ef4444); }
    .field-help { color: var(--text-color-secondary); }
    .asset-lookup { display: flex; align-items: center; gap: 0.5rem; min-height: 1.4rem; font-size: 0.9rem; }
    .asset-lookup small { color: var(--text-color-secondary); }
    .asset-lookup--found { color: var(--green-600, #16a34a); }
    .asset-lookup--notFound, .asset-lookup--error { color: var(--red-500, #ef4444); }
    .asset-lookup--searching { color: var(--text-color-secondary); }
    .label-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
    .character-count { color: var(--text-color-secondary); font-size: 0.8rem; }
    .optional-label { color: var(--text-color-secondary); font-size: 0.8rem; font-weight: 400; }
    .upload-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0.65rem; min-height: 2.75rem; }
    .file-name { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--text-color); overflow-wrap: anywhere; }
    .muted { color: var(--text-color-secondary); }
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    .gps-status { padding: 1rem; border: 1px solid var(--surface-border); border-radius: var(--content-border-radius); background: var(--surface-ground); }
    .gps-status--ready { border-color: color-mix(in srgb, var(--green-500, #22c55e) 40%, var(--surface-border)); }
    .gps-status--error { border-color: color-mix(in srgb, var(--red-500, #ef4444) 40%, var(--surface-border)); }
    .gps-status-heading { display: flex; align-items: center; gap: 0.75rem; }
    .gps-icon { display: grid; place-items: center; width: 2.4rem; height: 2.4rem; flex: 0 0 auto; border-radius: 50%; background: var(--surface-card); color: var(--primary-color); }
    .gps-status-copy { display: flex; flex: 1; min-width: 0; flex-direction: column; gap: 0.15rem; }
    .gps-status-copy span, .gps-status small { color: var(--text-color-secondary); }
    .gps-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.85rem; }
    .gps-actions small { color: var(--text-color-secondary); }
    .gps-permission-help { flex-basis: 100%; padding: 0.8rem 1rem; border-radius: var(--content-border-radius); background: var(--surface-card); color: var(--text-color-secondary); font-size: 0.875rem; line-height: 1.5; }
    .gps-permission-help strong { color: var(--text-color); }
    .gps-permission-help ol { display: flex; flex-direction: column; gap: 0.25rem; margin: 0.45rem 0 0; padding-left: 1.25rem; }
    .gps-meter { height: 0.4rem; margin: 0.85rem 0 0.55rem; overflow: hidden; border-radius: 999px; background: var(--surface-border); }
    .gps-meter span { display: block; height: 100%; border-radius: inherit; background: var(--primary-color); transition: width 0.25s ease; }
    .gps-status--ready .gps-meter span { background: var(--green-500, #22c55e); }
    .scanner-body { display: flex; flex-direction: column; gap: 0.75rem; }
    .scanner-body video { width: 100%; max-height: 55vh; border-radius: var(--content-border-radius); background: #111827; object-fit: cover; }
    .scanner-help { display: flex; align-items: center; gap: 0.5rem; color: var(--text-color-secondary); }
    .form-actions { display: flex; justify-content: flex-end; padding-top: 0.25rem; }
    .incident-info-card h2 { margin-bottom: 1.25rem; }
    .next-steps { display: flex; flex-direction: column; gap: 1rem; margin: 0; padding: 0; list-style: none; }
    .next-steps li { display: flex; align-items: center; gap: 0.75rem; color: var(--text-color-secondary); line-height: 1.5; }
    .step-icon { width: 2.25rem; height: 2.25rem; border-radius: 50%; background: var(--surface-ground); color: var(--text-color-secondary); }
    .step-icon--warning { color: var(--orange-500, #f59e0b); background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent); }
    .info-note { display: flex; gap: 0.65rem; margin-top: 1.5rem; padding: 0.9rem; border-radius: var(--content-border-radius); background: var(--surface-ground); color: var(--text-color-secondary); font-size: 0.85rem; line-height: 1.5; }
    .info-note i { margin-top: 0.15rem; color: var(--primary-color); }
    @media (max-width: 900px) { .incident-layout { grid-template-columns: minmax(0, 1fr); } }
    @media (max-width: 640px) { .page-heading { align-items: flex-start; flex-direction: column; } .incident-form-card, .incident-info-card { padding: 1.1rem; } .asset-input-row { grid-template-columns: minmax(0, 1fr); } }
  `]
})
export class IncidentLogComponent implements OnInit, OnDestroy {
  @Input() initialAssetStateId: string | null = null;
  @Output() logged = new EventEmitter<boolean>();
  readonly incidentForm;
  submitting = false;
  scanning = false;
  scannerVisible = false;
  selectedFile: File | null = null;
  matchedAsset: Asset | null = null;
  assetLookupState: 'idle' | 'searching' | 'found' | 'notFound' | 'error' = 'idle';
  gpsAccuracy: number | null = null;
  gpsLatitude: number | null = null;
  gpsLongitude: number | null = null;
  canSubmit = false;
  gpsError = '';
  gpsRequested = false;
  gpsRequesting = false;

  @ViewChild('scannerVideo') private scannerVideo?: ElementRef<HTMLVideoElement>;
  private gpsWatchId: number | null = null;
  private gpsRequestTimeout: number | null = null;
  private scannerStream: MediaStream | null = null;
  private scanFrame = 0;
  private detector: QrCodeDetectorLike | null = null;

  constructor(
    private fb: FormBuilder,
    private incidentService: IncidentService,
    private assetService: AssetService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private destroyRef: DestroyRef
  ) {
    this.incidentForm = this.fb.group({
      qrCodeData: ['', [Validators.required, Validators.maxLength(255)]],
      fieldNotes: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  ngOnInit(): void {
    this.incidentForm.controls.qrCodeData.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        const stateId = (value ?? '').trim();
        if (!stateId) {
          this.assetLookupState = 'idle';
          this.matchedAsset = null;
          return of(null);
        }
        this.assetLookupState = 'searching';
        return this.assetService.getAll(1, 100, stateId).pipe(
          map(page => page.items.find(asset => asset.stateId.toLocaleLowerCase() === stateId.toLocaleLowerCase()) ?? null),
          catchError(() => {
            this.assetLookupState = 'error';
            return of(null);
          })
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(asset => {
      this.matchedAsset = asset;
      if (asset) this.assetLookupState = 'found';
      else if (this.assetLookupState !== 'error' && this.incidentForm.controls.qrCodeData.value?.trim()) this.assetLookupState = 'notFound';
    });
    const selectedAsset = this.initialAssetStateId ?? this.route.snapshot.queryParamMap.get('asset');
    if (selectedAsset) this.incidentForm.patchValue({ qrCodeData: selectedAsset });
  }

  get gpsProgress(): number {
    return this.gpsAccuracy === null ? 0 : Math.max(0, Math.min(100, (1 - this.gpsAccuracy / 15) * 100));
  }

  private clearGpsRequestTimeout(): void {
    if (this.gpsRequestTimeout !== null) {
      window.clearTimeout(this.gpsRequestTimeout);
      this.gpsRequestTimeout = null;
    }
  }

  enableLocation(): void {
    this.gpsRequested = true;
    this.gpsRequesting = true;
    this.gpsError = '';
    this.clearGpsRequestTimeout();
    if (this.gpsWatchId !== null) navigator.geolocation?.clearWatch(this.gpsWatchId);

    this.gpsRequestTimeout = window.setTimeout(() => {
      if (!this.gpsRequesting || this.canSubmit) return;
      this.gpsRequesting = false;
      this.gpsError = this.gpsAccuracy === null
        ? 'No GPS reading arrived. Check device location services and retry.'
        : `GPS accuracy is ${this.gpsAccuracy.toFixed(1)} m; this form requires 15 m or better.`;
    }, 15000);

    if (!navigator.geolocation) {
      this.clearGpsRequestTimeout();
      this.gpsRequesting = false;
      this.gpsError = 'Location is not available in this browser.';
      return;
    }

    this.gpsWatchId = navigator.geolocation.watchPosition(
      position => {
        this.gpsLatitude = position.coords.latitude;
        this.gpsLongitude = position.coords.longitude;
        this.gpsAccuracy = position.coords.accuracy;
        this.canSubmit = this.gpsAccuracy <= 15;
        this.gpsRequesting = false;
        this.gpsError = this.canSubmit ? '' : 'Location accuracy is too low.';
        this.clearGpsRequestTimeout();
      },
      error => {
        this.canSubmit = false;
        this.gpsRequesting = false;
        this.clearGpsRequestTimeout();
        this.gpsError = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied.'
          : 'No GPS reading arrived. Check device location services and retry.';
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
    );
  }

  startQrScan(): void {
    this.scannerVisible = true;
  }

  async startCameraScan(): Promise<void> {
    const Detector = (window as Window & { BarcodeDetector?: QrCodeDetectorConstructor }).BarcodeDetector;
    if (!Detector || !navigator.mediaDevices?.getUserMedia) {
      this.scannerVisible = false;
      this.messageService.add({ severity: 'warn', summary: 'QR scanning unavailable', detail: 'Use a supported browser or enter the asset State ID manually.' });
      return;
    }

    try {
      this.detector = new Detector({ formats: ['qr_code'] });
      this.scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
      const video = this.scannerVideo?.nativeElement;
      if (!video) throw new Error('Camera preview is unavailable.');
      video.srcObject = this.scannerStream;
      await video.play();
      this.scanning = true;
      void this.detectQrFrame();
    } catch {
      this.stopQrScan();
      this.scannerVisible = false;
      this.messageService.add({ severity: 'error', summary: 'Could not open camera', detail: 'Allow camera access to scan a QR code, or enter the State ID manually.' });
    }
  }

  private async detectQrFrame(): Promise<void> {
    const video = this.scannerVideo?.nativeElement;
    if (!this.scanning || !video || !this.detector) return;
    try {
      const codes = await this.detector.detect(video);
      const value = codes.find(code => code.rawValue.trim())?.rawValue.trim();
      if (value) {
        this.incidentForm.controls.qrCodeData.setValue(value);
        this.scannerVisible = false;
        this.messageService.add({ severity: 'success', summary: 'QR code scanned', detail: 'Asset State ID added to the incident form.' });
        return;
      }
    } catch {
      this.stopQrScan();
      this.scannerVisible = false;
      this.messageService.add({ severity: 'error', summary: 'QR scan failed', detail: 'Enter the asset State ID manually.' });
      return;
    }
    this.scanFrame = requestAnimationFrame(() => void this.detectQrFrame());
  }

  stopQrScan(): void {
    this.scanning = false;
    cancelAnimationFrame(this.scanFrame);
    this.scannerStream?.getTracks().forEach(track => track.stop());
    this.scannerStream = null;
    if (this.scannerVideo?.nativeElement) this.scannerVideo.nativeElement.srcObject = null;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      this.messageService.add({ severity: 'error', summary: 'Unsupported image', detail: 'Choose a JPG, PNG, GIF or WebP image.' });
      input.value = '';
      return;
    }
    if (file.size > 800 * 1024) {
      this.messageService.add({ severity: 'error', summary: 'Image is too large', detail: 'The maximum image size is 800 KB.' });
      input.value = '';
      return;
    }
    this.selectedFile = file;
  }

  clearFile(input: HTMLInputElement): void {
    this.selectedFile = null;
    input.value = '';
  }

  onSubmit(): void {
    this.incidentForm.markAllAsTouched();
    if (this.incidentForm.invalid || this.submitting || !this.matchedAsset) return;

    const { qrCodeData, fieldNotes } = this.incidentForm.getRawValue();
    const image = this.selectedFile;
    this.submitting = true;
    const incident: IncidentLog = {
      qrCodeData: qrCodeData!.trim(),
      fieldNotes: fieldNotes!.trim()
    };
    if (this.gpsLatitude !== null && this.gpsLongitude !== null) {
      incident.deviceLatitude = this.gpsLatitude;
      incident.deviceLongitude = this.gpsLongitude;
      incident.deviceTimestamp = new Date().toISOString();
    }
    this.incidentService.logIncident(incident).subscribe({
      next: response => {
        const finish = (uploadFailed = false) => {
          this.submitting = false;
          this.incidentForm.controls.fieldNotes.reset('');
          this.selectedFile = null;
          this.logged.emit(uploadFailed);
          this.messageService.add(uploadFailed
            ? { severity: 'warn', summary: 'Incident logged; image upload failed', detail: 'The incident was recorded, but the image could not be attached.' }
            : { severity: 'success', summary: 'Incident logged', detail: image ? 'The incident was logged and the image was attached.' : 'The asset has been marked out of service.' });
        };
        if (image) {
          this.incidentService.uploadDefectImage(response.asset_id, image, response.incident_id).subscribe({ next: () => finish(), error: () => finish(true) });
        } else {
          finish();
        }
      },
      error: error => {
        this.submitting = false;
        const detail = error?.status === 404
          ? 'No asset was found with that State ID.'
          : 'The incident could not be submitted. Please try again.';
        this.messageService.add({ severity: 'error', summary: 'Incident not logged', detail });
      }
    });
  }

  ngOnDestroy(): void {
    this.clearGpsRequestTimeout();
    if (this.gpsWatchId !== null) navigator.geolocation?.clearWatch(this.gpsWatchId);
    this.stopQrScan();
  }
}
