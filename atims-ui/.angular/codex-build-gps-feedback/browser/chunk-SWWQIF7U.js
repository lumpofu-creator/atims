import {
  Button,
  ButtonModule,
  Dialog,
  DialogModule,
  InputText,
  InputTextModule,
  Tag,
  TagModule,
  Textarea,
  TextareaModule,
  Toast,
  ToastModule
} from "./chunk-7HRV3LJA.js";
import {
  MessageService
} from "./chunk-2YE2G4IP.js";
import {
  AssetService
} from "./chunk-GCS3E7BL.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-URL2GAKC.js";
import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  DestroyRef,
  HttpClient,
  Injectable,
  NgClass,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Observable,
  ViewChild,
  assertInInjectionContext,
  catchError,
  debounceTime,
  distinctUntilChanged,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-E6HDRDLF.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v21.2.25
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/features/incidents/incident.service.ts
var IncidentService = class _IncidentService {
  http;
  apiUrl = `${environment.apiBase}/incidents`;
  constructor(http) {
    this.http = http;
  }
  logIncident(incident) {
    return this.http.post(`${this.apiUrl}/log`, {
      qr_code_data: incident.qrCodeData,
      field_notes: incident.fieldNotes,
      device_latitude: incident.deviceLatitude,
      device_longitude: incident.deviceLongitude,
      device_timestamp: incident.deviceTimestamp
    });
  }
  uploadDefectImage(assetId, file) {
    const data = new FormData();
    data.append("asset_id", String(assetId));
    data.append("file", file, file.name);
    return this.http.post(`${environment.apiBase}/attachments`, data);
  }
  verifyRepair(verification) {
    return this.http.post(`${this.apiUrl}/verify`, verification);
  }
  getUnresolved() {
    return this.http.get(`${this.apiUrl}/unresolved`);
  }
  getHistory(assetId) {
    return this.http.get(`${this.apiUrl}/history/${assetId}`);
  }
  static \u0275fac = function IncidentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IncidentService, factory: _IncidentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/incidents/incident-log.component.ts
var _c0 = ["scannerVideo"];
var _c1 = () => ({ width: "min(34rem, calc(100vw - 2rem))" });
function IncidentLogComponent_div_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Searching assets\u2026");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_div_30_span_4_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.matchedAsset == null ? null : ctx_r1.matchedAsset.category);
  }
}
function IncidentLogComponent_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, IncidentLogComponent_div_30_span_4_small_2_Template, 2, 1, "small", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.matchedAsset == null ? null : ctx_r1.matchedAsset.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.matchedAsset == null ? null : ctx_r1.matchedAsset.category);
  }
}
function IncidentLogComponent_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No asset found for this State ID.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_div_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Could not search assets. Check the connection and try again.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementContainerStart(2, 59);
    \u0275\u0275template(3, IncidentLogComponent_div_30_span_3_Template, 2, 0, "span", 60)(4, IncidentLogComponent_div_30_span_4_Template, 3, 2, "span", 60)(5, IncidentLogComponent_div_30_span_5_Template, 2, 0, "span", 60)(6, IncidentLogComponent_div_30_span_6_Template, 2, 0, "span", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "asset-lookup--" + ctx_r1.assetLookupState);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.assetLookupState === "searching" ? "pi-spin pi-spinner" : ctx_r1.assetLookupState === "found" ? "pi-check-circle" : "pi-info-circle");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.assetLookupState);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "searching");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "found");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "notFound");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "error");
  }
}
function IncidentLogComponent_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Asset State ID is required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Incident notes are required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Notes must be 1000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (ctx_r1.selectedFile.size / 1024).toFixed(1), " KB)");
  }
}
function IncidentLogComponent_p_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 65);
    \u0275\u0275listener("onClick", function IncidentLogComponent_p_button_53_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      const defectImageInput_r3 = \u0275\u0275reference(50);
      return \u0275\u0275resetView(ctx_r1.clearFile(defectImageInput_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function IncidentLogComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "JPG, PNG, GIF or WebP \xB7 max 800 KB");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, ctx_r1.gpsLatitude, "1.5-5"), ", ", \u0275\u0275pipeBind2(3, 5, ctx_r1.gpsLongitude, "1.5-5"));
  }
}
function IncidentLogComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.gpsError);
  }
}
function IncidentLogComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Requesting browser location and waiting for a GPS reading\u2026");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enable location to get a GPS reading.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Waiting for a GPS reading\u2026");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "If access was blocked, allow Location in your browser\u2019s site settings, then retry.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 66);
    \u0275\u0275listener("onClick", function IncidentLogComponent_ng_template_111_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scannerVisible = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
var IncidentLogComponent = class _IncidentLogComponent {
  fb;
  incidentService;
  assetService;
  route;
  messageService;
  destroyRef;
  incidentForm;
  submitting = false;
  scanning = false;
  scannerVisible = false;
  selectedFile = null;
  matchedAsset = null;
  assetLookupState = "idle";
  gpsAccuracy = null;
  gpsLatitude = null;
  gpsLongitude = null;
  canSubmit = false;
  gpsError = "";
  gpsRequested = false;
  gpsRequesting = false;
  scannerVideo;
  gpsWatchId = null;
  scannerStream = null;
  scanFrame = 0;
  detector = null;
  constructor(fb, incidentService, assetService, route, messageService, destroyRef) {
    this.fb = fb;
    this.incidentService = incidentService;
    this.assetService = assetService;
    this.route = route;
    this.messageService = messageService;
    this.destroyRef = destroyRef;
    this.incidentForm = this.fb.group({
      qrCodeData: ["", [Validators.required, Validators.maxLength(255)]],
      fieldNotes: ["", [Validators.required, Validators.maxLength(1e3)]]
    });
  }
  ngOnInit() {
    this.incidentForm.controls.qrCodeData.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), switchMap((value) => {
      const stateId = (value ?? "").trim();
      if (!stateId) {
        this.assetLookupState = "idle";
        this.matchedAsset = null;
        return of(null);
      }
      this.assetLookupState = "searching";
      return this.assetService.getAll(1, 100, stateId).pipe(map((page) => page.items.find((asset) => asset.stateId.toLocaleLowerCase() === stateId.toLocaleLowerCase()) ?? null), catchError(() => {
        this.assetLookupState = "error";
        return of(null);
      }));
    }), takeUntilDestroyed(this.destroyRef)).subscribe((asset) => {
      this.matchedAsset = asset;
      if (asset)
        this.assetLookupState = "found";
      else if (this.assetLookupState !== "error" && this.incidentForm.controls.qrCodeData.value?.trim())
        this.assetLookupState = "notFound";
    });
    const selectedAsset = this.route.snapshot.queryParamMap.get("asset");
    if (selectedAsset)
      this.incidentForm.patchValue({ qrCodeData: selectedAsset });
  }
  get gpsProgress() {
    return this.gpsAccuracy === null ? 0 : Math.max(0, Math.min(100, (1 - this.gpsAccuracy / 15) * 100));
  }
  enableLocation() {
    this.gpsRequested = true;
    this.gpsRequesting = true;
    this.gpsError = "";
    if (this.gpsWatchId !== null)
      navigator.geolocation?.clearWatch(this.gpsWatchId);
    if (!navigator.geolocation) {
      this.gpsRequesting = false;
      this.gpsError = "Location is not available in this browser.";
      return;
    }
    this.gpsWatchId = navigator.geolocation.watchPosition((position) => {
      this.gpsLatitude = position.coords.latitude;
      this.gpsLongitude = position.coords.longitude;
      this.gpsAccuracy = position.coords.accuracy;
      this.canSubmit = this.gpsAccuracy <= 15;
      this.gpsRequesting = false;
      this.gpsError = this.canSubmit ? "" : "Location accuracy is too low.";
    }, (error) => {
      this.canSubmit = false;
      this.gpsRequesting = false;
      this.gpsError = error.code === error.PERMISSION_DENIED ? "Location permission was denied." : "Unable to get a GPS reading. Retrying\u2026";
    }, { enableHighAccuracy: true, maximumAge: 0, timeout: 1e4 });
  }
  startQrScan() {
    this.scannerVisible = true;
  }
  async startCameraScan() {
    const Detector = window.BarcodeDetector;
    if (!Detector || !navigator.mediaDevices?.getUserMedia) {
      this.scannerVisible = false;
      this.messageService.add({ severity: "warn", summary: "QR scanning unavailable", detail: "Use a supported browser or enter the asset State ID manually." });
      return;
    }
    try {
      this.detector = new Detector({ formats: ["qr_code"] });
      this.scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      const video = this.scannerVideo?.nativeElement;
      if (!video)
        throw new Error("Camera preview is unavailable.");
      video.srcObject = this.scannerStream;
      await video.play();
      this.scanning = true;
      void this.detectQrFrame();
    } catch {
      this.stopQrScan();
      this.scannerVisible = false;
      this.messageService.add({ severity: "error", summary: "Could not open camera", detail: "Allow camera access to scan a QR code, or enter the State ID manually." });
    }
  }
  async detectQrFrame() {
    const video = this.scannerVideo?.nativeElement;
    if (!this.scanning || !video || !this.detector)
      return;
    try {
      const codes = await this.detector.detect(video);
      const value = codes.find((code) => code.rawValue.trim())?.rawValue.trim();
      if (value) {
        this.incidentForm.controls.qrCodeData.setValue(value);
        this.scannerVisible = false;
        this.messageService.add({ severity: "success", summary: "QR code scanned", detail: "Asset State ID added to the incident form." });
        return;
      }
    } catch {
      this.stopQrScan();
      this.scannerVisible = false;
      this.messageService.add({ severity: "error", summary: "QR scan failed", detail: "Enter the asset State ID manually." });
      return;
    }
    this.scanFrame = requestAnimationFrame(() => void this.detectQrFrame());
  }
  stopQrScan() {
    this.scanning = false;
    cancelAnimationFrame(this.scanFrame);
    this.scannerStream?.getTracks().forEach((track) => track.stop());
    this.scannerStream = null;
    if (this.scannerVideo?.nativeElement)
      this.scannerVideo.nativeElement.srcObject = null;
  }
  onFileChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      this.messageService.add({ severity: "error", summary: "Unsupported image", detail: "Choose a JPG, PNG, GIF or WebP image." });
      input.value = "";
      return;
    }
    if (file.size > 800 * 1024) {
      this.messageService.add({ severity: "error", summary: "Image is too large", detail: "The maximum image size is 800 KB." });
      input.value = "";
      return;
    }
    this.selectedFile = file;
  }
  clearFile(input) {
    this.selectedFile = null;
    input.value = "";
  }
  onSubmit() {
    this.incidentForm.markAllAsTouched();
    if (this.incidentForm.invalid || this.submitting || !this.matchedAsset || !this.canSubmit || this.gpsLatitude === null || this.gpsLongitude === null)
      return;
    const { qrCodeData, fieldNotes } = this.incidentForm.getRawValue();
    const image = this.selectedFile;
    this.submitting = true;
    this.incidentService.logIncident({
      qrCodeData: qrCodeData.trim(),
      fieldNotes: fieldNotes.trim(),
      deviceLatitude: this.gpsLatitude,
      deviceLongitude: this.gpsLongitude,
      deviceTimestamp: (/* @__PURE__ */ new Date()).toISOString()
    }).subscribe({
      next: (response) => {
        const finish = (uploadFailed = false) => {
          this.submitting = false;
          this.incidentForm.controls.fieldNotes.reset("");
          this.selectedFile = null;
          this.messageService.add(uploadFailed ? { severity: "warn", summary: "Incident logged; image upload failed", detail: "The incident was recorded, but the image could not be attached." } : { severity: "success", summary: "Incident logged", detail: image ? "The incident was logged and the image was attached." : "The asset has been marked out of service." });
        };
        if (image) {
          this.incidentService.uploadDefectImage(response.asset_id, image).subscribe({ next: () => finish(), error: () => finish(true) });
        } else {
          finish();
        }
      },
      error: (error) => {
        this.submitting = false;
        const detail = error?.status === 404 ? "No asset was found with that State ID." : "The incident could not be submitted. Please try again.";
        this.messageService.add({ severity: "error", summary: "Incident not logged", detail });
      }
    });
  }
  ngOnDestroy() {
    if (this.gpsWatchId !== null)
      navigator.geolocation?.clearWatch(this.gpsWatchId);
    this.stopQrScan();
  }
  static \u0275fac = function IncidentLogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidentLogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IncidentService), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(DestroyRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentLogComponent, selectors: [["app-incident-log"]], viewQuery: function IncidentLogComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scannerVideo = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 113, vars: 47, consts: [["defectImageInput", ""], ["scannerVideo", ""], ["footer", ""], [1, "incident-page"], [1, "page-heading"], ["value", "Asset will be marked out of service", "severity", "warn", "icon", "pi pi-exclamation-triangle"], [1, "incident-layout"], [1, "card", "incident-form-card"], [1, "section-heading"], [1, "section-icon"], [1, "pi", "pi-file-edit"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "assetStateId"], [1, "required-mark"], [1, "asset-input-row"], ["pInputText", "", "id", "assetStateId", "formControlName", "qrCodeData", "placeholder", "e.g. FLEET-000123", "autocomplete", "off", "fluid", "", 3, "invalid"], ["type", "button", "label", "Scan QR Code", "icon", "pi pi-qrcode", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], [1, "field-help"], ["class", "asset-lookup", "aria-live", "polite", 3, "ngClass", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], [1, "label-row"], ["for", "fieldNotes"], [1, "character-count"], ["pTextarea", "", "id", "fieldNotes", "formControlName", "fieldNotes", "rows", "6", "maxlength", "1000", "placeholder", "Describe the issue, when it was noticed, and any relevant details.", "fluid", "", 3, "invalid"], ["for", "defectImageInput"], [1, "optional-label"], [1, "upload-row"], ["id", "defectImageInput", "type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "visually-hidden", 3, "change"], ["type", "button", "label", "Choose image", "icon", "pi pi-image", "severity", "secondary", 3, "onClick", "outlined"], ["class", "file-name", 4, "ngIf"], ["type", "button", "icon", "pi pi-times", "severity", "danger", "ariaLabel", "Remove image", 3, "text", "rounded", "onClick", 4, "ngIf"], ["class", "field-help", 4, "ngIf"], [1, "gps-status"], [1, "gps-status-heading"], [1, "gps-icon"], [1, "pi", 3, "ngClass"], [1, "gps-status-copy"], [4, "ngIf"], [3, "value", "severity"], [1, "gps-actions"], ["type", "button", "icon", "pi pi-map-marker", "severity", "secondary", 3, "onClick", "label", "outlined", "loading", "disabled"], ["role", "progressbar", "aria-label", "GPS accuracy", "aria-valuemin", "0", "aria-valuemax", "100", 1, "gps-meter"], [1, "form-actions"], ["type", "submit", "label", "Submit Incident", "icon", "pi pi-send", 3, "loading", "disabled"], [1, "card", "incident-info-card"], [1, "next-steps"], [1, "step-icon"], [1, "pi", "pi-search"], [1, "pi", "pi-book"], [1, "step-icon", "step-icon--warning"], [1, "pi", "pi-exclamation-triangle"], [1, "info-note"], [1, "pi", "pi-info-circle"], ["header", "Scan asset QR code", 3, "visibleChange", "onShow", "onHide", "visible", "modal", "draggable"], [1, "scanner-body"], ["autoplay", "", "playsinline", "", "muted", ""], [1, "scanner-help"], ["aria-live", "polite", 1, "asset-lookup", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "field-error"], [1, "file-name"], [1, "pi", "pi-paperclip"], [1, "muted"], ["type", "button", "icon", "pi pi-times", "severity", "danger", "ariaLabel", "Remove image", 3, "onClick", "text", "rounded"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"]], template: function IncidentLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "section", 3)(2, "header", 4)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Log Incident");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Record an issue affecting an asset.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "p-tag", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "h2");
      \u0275\u0275text(16, "Incident details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Identify the asset and describe the issue.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "form", 11);
      \u0275\u0275listener("ngSubmit", function IncidentLogComponent_Template_form_ngSubmit_19_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
      \u0275\u0275text(22, "Asset State ID ");
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275element(26, "input", 16);
      \u0275\u0275elementStart(27, "p-button", 17);
      \u0275\u0275listener("onClick", function IncidentLogComponent_Template_p_button_onClick_27_listener() {
        return ctx.startQrScan();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "small", 18);
      \u0275\u0275text(29, "Enter the State ID printed on the asset label.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, IncidentLogComponent_div_30_Template, 7, 7, "div", 19)(31, IncidentLogComponent_small_31_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 12)(33, "div", 21)(34, "label", 22);
      \u0275\u0275text(35, "Incident notes ");
      \u0275\u0275elementStart(36, "span", 14);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "span", 23);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "textarea", 24);
      \u0275\u0275template(41, IncidentLogComponent_small_41_Template, 2, 0, "small", 20)(42, IncidentLogComponent_small_42_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 12)(44, "label", 25);
      \u0275\u0275text(45, "Defect image ");
      \u0275\u0275elementStart(46, "span", 26);
      \u0275\u0275text(47, "Optional");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 27)(49, "input", 28, 0);
      \u0275\u0275listener("change", function IncidentLogComponent_Template_input_change_49_listener($event) {
        return ctx.onFileChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p-button", 29);
      \u0275\u0275listener("onClick", function IncidentLogComponent_Template_p_button_onClick_51_listener() {
        \u0275\u0275restoreView(_r1);
        const defectImageInput_r3 = \u0275\u0275reference(50);
        return \u0275\u0275resetView(defectImageInput_r3.click());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, IncidentLogComponent_span_52_Template, 5, 2, "span", 30)(53, IncidentLogComponent_p_button_53_Template, 1, 2, "p-button", 31)(54, IncidentLogComponent_span_54_Template, 2, 0, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 33)(56, "div", 34)(57, "div", 35);
      \u0275\u0275element(58, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 37)(60, "strong");
      \u0275\u0275text(61, "Device GPS");
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, IncidentLogComponent_span_62_Template, 4, 8, "span", 38)(63, IncidentLogComponent_span_63_Template, 2, 1, "span", 38)(64, IncidentLogComponent_span_64_Template, 2, 0, "span", 38)(65, IncidentLogComponent_span_65_Template, 2, 0, "span", 38)(66, IncidentLogComponent_span_66_Template, 2, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "p-tag", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 40)(69, "p-button", 41);
      \u0275\u0275listener("onClick", function IncidentLogComponent_Template_p_button_onClick_69_listener() {
        return ctx.enableLocation();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, IncidentLogComponent_small_70_Template, 2, 0, "small", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 42);
      \u0275\u0275element(72, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "small");
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 43);
      \u0275\u0275element(77, "p-button", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "aside", 45)(79, "h2");
      \u0275\u0275text(80, "What happens next?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "ul", 46)(82, "li")(83, "span", 47);
      \u0275\u0275element(84, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "The asset is matched by its State ID.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "span", 47);
      \u0275\u0275element(89, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "Your incident notes are recorded.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "span", 50);
      \u0275\u0275element(94, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span");
      \u0275\u0275text(96, "The asset is marked ");
      \u0275\u0275elementStart(97, "strong");
      \u0275\u0275text(98, "Out of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " for follow-up.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 52);
      \u0275\u0275element(101, "i", 53);
      \u0275\u0275elementStart(102, "span");
      \u0275\u0275text(103, "Check the State ID before submitting. The incident endpoint updates the asset status when the incident is accepted.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "p-dialog", 54);
      \u0275\u0275twoWayListener("visibleChange", function IncidentLogComponent_Template_p_dialog_visibleChange_104_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.scannerVisible, $event) || (ctx.scannerVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onShow", function IncidentLogComponent_Template_p_dialog_onShow_104_listener() {
        return ctx.startCameraScan();
      })("onHide", function IncidentLogComponent_Template_p_dialog_onHide_104_listener() {
        return ctx.stopQrScan();
      });
      \u0275\u0275elementStart(105, "div", 55);
      \u0275\u0275element(106, "video", 56, 1);
      \u0275\u0275elementStart(108, "div", 57);
      \u0275\u0275element(109, "i", 53);
      \u0275\u0275text(110, " Point the camera at the asset\u2019s QR code.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(111, IncidentLogComponent_ng_template_111_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("formGroup", ctx.incidentForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("invalid", ctx.incidentForm.controls.qrCodeData.touched && ctx.incidentForm.controls.qrCodeData.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true)("loading", ctx.scanning)("disabled", ctx.scanning);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.assetLookupState !== "idle");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidentForm.controls.qrCodeData.touched && ctx.incidentForm.controls.qrCodeData.hasError("required"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", (ctx.incidentForm.controls.fieldNotes.value ?? "").length, "/1000");
      \u0275\u0275advance();
      \u0275\u0275property("invalid", ctx.incidentForm.controls.fieldNotes.touched && ctx.incidentForm.controls.fieldNotes.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidentForm.controls.fieldNotes.touched && ctx.incidentForm.controls.fieldNotes.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidentForm.controls.fieldNotes.hasError("maxlength"));
      \u0275\u0275advance(9);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275classProp("gps-status--ready", ctx.canSubmit)("gps-status--error", ctx.gpsError);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.canSubmit ? "pi-map-marker" : "pi-map-marker");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.gpsLatitude !== null && ctx.gpsLongitude !== null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.gpsError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.gpsRequesting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.gpsRequested && ctx.gpsLatitude === null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.gpsRequested && !ctx.gpsRequesting && !ctx.gpsError && ctx.gpsLatitude === null);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.canSubmit ? "Accurate" : ctx.gpsRequesting ? "Requesting" : ctx.gpsError ? "Check location" : "Waiting")("severity", ctx.canSubmit ? "success" : ctx.gpsRequesting ? "info" : ctx.gpsError ? "danger" : "warn");
      \u0275\u0275advance(2);
      \u0275\u0275property("label", !ctx.gpsRequested ? "Enable location" : ctx.canSubmit ? "Refresh location" : ctx.gpsRequesting ? "Requesting location\u2026" : "Retry location")("outlined", true)("loading", ctx.gpsRequesting)("disabled", ctx.gpsRequesting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.gpsError.toLowerCase().includes("permission"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-valuenow", ctx.gpsProgress);
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.gpsProgress, "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("GPS accuracy: ", ctx.gpsAccuracy === null ? "\u2014" : \u0275\u0275pipeBind2(75, 43, ctx.gpsAccuracy, "1.1-1") + " m", ". Accuracy must be 15 m or better to submit.");
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.submitting)("disabled", ctx.submitting || !ctx.canSubmit);
      \u0275\u0275advance(27);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.scannerVisible);
      \u0275\u0275property("modal", true)("draggable", false);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, NgSwitch, NgSwitchCase, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, ButtonModule, Button, DialogModule, Dialog, InputTextModule, InputText, TextareaModule, Textarea, TagModule, Tag, ToastModule, Toast, DecimalPipe], styles: ["\n.incident-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr);\n  align-items: start;\n  gap: 1.25rem;\n}\n.incident-form-card[_ngcontent-%COMP%], \n.incident-info-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.incident-info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.section-icon[_ngcontent-%COMP%], \n.step-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.asset-input-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.65rem;\n}\n.required-mark[_ngcontent-%COMP%], \n.field-error[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.field-help[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.asset-lookup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 1.4rem;\n  font-size: 0.9rem;\n}\n.asset-lookup[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.asset-lookup--found[_ngcontent-%COMP%] {\n  color: var(--green-600, #16a34a);\n}\n.asset-lookup--notFound[_ngcontent-%COMP%], \n.asset-lookup--error[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.asset-lookup--searching[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.character-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.optional-label[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.upload-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  min-height: 2.75rem;\n}\n.file-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-color);\n  overflow-wrap: anywhere;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.gps-status[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.gps-status--ready[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--green-500, #22c55e) 40%, var(--surface-border));\n}\n.gps-status--error[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--red-500, #ef4444) 40%, var(--surface-border));\n}\n.gps-status-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.gps-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  background: var(--surface-card);\n  color: var(--primary-color);\n}\n.gps-status-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.gps-status-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.gps-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.gps-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.85rem;\n}\n.gps-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.gps-meter[_ngcontent-%COMP%] {\n  height: 0.4rem;\n  margin: 0.85rem 0 0.55rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--surface-border);\n}\n.gps-meter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--primary-color);\n  transition: width 0.25s ease;\n}\n.gps-status--ready[_ngcontent-%COMP%]   .gps-meter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--green-500, #22c55e);\n}\n.scanner-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.scanner-body[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 55vh;\n  border-radius: var(--content-border-radius);\n  background: #111827;\n  object-fit: cover;\n}\n.scanner-help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-color-secondary);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.25rem;\n}\n.incident-info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.next-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.next-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n}\n.step-icon--warning[_ngcontent-%COMP%] {\n  color: var(--orange-500, #f59e0b);\n  background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent);\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.5rem;\n  padding: 0.9rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.info-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .incident-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incident-form-card[_ngcontent-%COMP%], \n   .incident-info-card[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n  }\n  .asset-input-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=incident-log.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentLogComponent, [{
    type: Component,
    args: [{ selector: "app-incident-log", standalone: true, imports: [CommonModule, ReactiveFormsModule, ButtonModule, DialogModule, InputTextModule, TextareaModule, TagModule, ToastModule], providers: [MessageService], template: `
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
                  <span *ngSwitchCase="'searching'">Searching assets\u2026</span>
                  <span *ngSwitchCase="'found'">{{ matchedAsset?.name }}<small *ngIf="matchedAsset?.category"> \xB7 {{ matchedAsset?.category }}</small></span>
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
                <span *ngIf="!selectedFile" class="field-help">JPG, PNG, GIF or WebP \xB7 max 800 KB</span>
              </div>
            </div>

            <div class="gps-status" [class.gps-status--ready]="canSubmit" [class.gps-status--error]="gpsError">
              <div class="gps-status-heading">
                <div class="gps-icon"><i class="pi" [ngClass]="canSubmit ? 'pi-map-marker' : 'pi-map-marker'" ></i></div>
                <div class="gps-status-copy">
                  <strong>Device GPS</strong>
                  <span *ngIf="gpsLatitude !== null && gpsLongitude !== null">{{ gpsLatitude | number: '1.5-5' }}, {{ gpsLongitude | number: '1.5-5' }}</span>
                  <span *ngIf="gpsError">{{ gpsError }}</span>
                  <span *ngIf="gpsRequesting">Requesting browser location and waiting for a GPS reading\u2026</span>
                  <span *ngIf="!gpsRequested && gpsLatitude === null">Enable location to get a GPS reading.</span>
                  <span *ngIf="gpsRequested && !gpsRequesting && !gpsError && gpsLatitude === null">Waiting for a GPS reading\u2026</span>
                </div>
                <p-tag [value]="canSubmit ? 'Accurate' : gpsRequesting ? 'Requesting' : gpsError ? 'Check location' : 'Waiting'" [severity]="canSubmit ? 'success' : gpsRequesting ? 'info' : gpsError ? 'danger' : 'warn'" />
              </div>
              <div class="gps-actions">
                <p-button type="button" [label]="!gpsRequested ? 'Enable location' : canSubmit ? 'Refresh location' : gpsRequesting ? 'Requesting location\u2026' : 'Retry location'" icon="pi pi-map-marker" severity="secondary" [outlined]="true" [loading]="gpsRequesting" [disabled]="gpsRequesting" (onClick)="enableLocation()" />
                <small *ngIf="gpsError.toLowerCase().includes('permission')">If access was blocked, allow Location in your browser\u2019s site settings, then retry.</small>
              </div>
              <div class="gps-meter" role="progressbar" aria-label="GPS accuracy" [attr.aria-valuenow]="gpsProgress" aria-valuemin="0" aria-valuemax="100">
                <span [style.width.%]="gpsProgress"></span>
              </div>
              <small>GPS accuracy: {{ gpsAccuracy === null ? '\u2014' : (gpsAccuracy | number: '1.1-1') + ' m' }}. Accuracy must be 15 m or better to submit.</small>
            </div>

            <div class="form-actions">
              <p-button type="submit" label="Submit Incident" icon="pi pi-send" [loading]="submitting" [disabled]="submitting || !canSubmit" />
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
        <div class="scanner-help"><i class="pi pi-info-circle"></i> Point the camera at the asset\u2019s QR code.</div>
      </div>
      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [outlined]="true" (onClick)="scannerVisible = false" />
      </ng-template>
    </p-dialog>
  `, styles: ["/* angular:styles/component:scss;1a41cc933b3aed55c101b5a9b8f8eeda7d048773c481ce52a5d83e707da728d0;C:/xampp/htdocs/atims/atims-ui/src/app/features/incidents/incident-log.component.ts */\n.incident-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading p {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr);\n  align-items: start;\n  gap: 1.25rem;\n}\n.incident-form-card,\n.incident-info-card {\n  padding: 1.5rem;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.section-heading h2,\n.incident-info-card h2 {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.section-heading p {\n  margin: 0.3rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.section-icon,\n.step-icon {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field label {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.asset-input-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.65rem;\n}\n.required-mark,\n.field-error {\n  color: var(--red-500, #ef4444);\n}\n.field-help {\n  color: var(--text-color-secondary);\n}\n.asset-lookup {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 1.4rem;\n  font-size: 0.9rem;\n}\n.asset-lookup small {\n  color: var(--text-color-secondary);\n}\n.asset-lookup--found {\n  color: var(--green-600, #16a34a);\n}\n.asset-lookup--notFound,\n.asset-lookup--error {\n  color: var(--red-500, #ef4444);\n}\n.asset-lookup--searching {\n  color: var(--text-color-secondary);\n}\n.label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.character-count {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.optional-label {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.upload-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  min-height: 2.75rem;\n}\n.file-name {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-color);\n  overflow-wrap: anywhere;\n}\n.muted {\n  color: var(--text-color-secondary);\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.gps-status {\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.gps-status--ready {\n  border-color: color-mix(in srgb, var(--green-500, #22c55e) 40%, var(--surface-border));\n}\n.gps-status--error {\n  border-color: color-mix(in srgb, var(--red-500, #ef4444) 40%, var(--surface-border));\n}\n.gps-status-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.gps-icon {\n  display: grid;\n  place-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  background: var(--surface-card);\n  color: var(--primary-color);\n}\n.gps-status-copy {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.gps-status-copy span,\n.gps-status small {\n  color: var(--text-color-secondary);\n}\n.gps-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.85rem;\n}\n.gps-actions small {\n  color: var(--text-color-secondary);\n}\n.gps-meter {\n  height: 0.4rem;\n  margin: 0.85rem 0 0.55rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--surface-border);\n}\n.gps-meter span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--primary-color);\n  transition: width 0.25s ease;\n}\n.gps-status--ready .gps-meter span {\n  background: var(--green-500, #22c55e);\n}\n.scanner-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.scanner-body video {\n  width: 100%;\n  max-height: 55vh;\n  border-radius: var(--content-border-radius);\n  background: #111827;\n  object-fit: cover;\n}\n.scanner-help {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-color-secondary);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.25rem;\n}\n.incident-info-card h2 {\n  margin-bottom: 1.25rem;\n}\n.next-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.next-steps li {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n}\n.step-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n}\n.step-icon--warning {\n  color: var(--orange-500, #f59e0b);\n  background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent);\n}\n.info-note {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.5rem;\n  padding: 0.9rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.info-note i {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .incident-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incident-form-card,\n  .incident-info-card {\n    padding: 1.1rem;\n  }\n  .asset-input-row {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=incident-log.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: IncidentService }, { type: AssetService }, { type: ActivatedRoute }, { type: MessageService }, { type: DestroyRef }], { scannerVideo: [{
    type: ViewChild,
    args: ["scannerVideo"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentLogComponent, { className: "IncidentLogComponent", filePath: "src/app/features/incidents/incident-log.component.ts", lineNumber: 215 });
})();
export {
  IncidentLogComponent
};
//# sourceMappingURL=chunk-SWWQIF7U.js.map
