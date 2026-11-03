import {
  Button,
  ButtonModule,
  Dialog,
  DialogModule,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  InputTextModule,
  Table,
  TableModule,
  Tag,
  TagModule,
  Textarea,
  TextareaModule,
  Toast,
  ToastModule
} from "./chunk-NUAGCM7M.js";
import {
  ConfirmationService,
  MessageService,
  ToggleButton,
  ToggleButtonModule
} from "./chunk-7VSYBYAC.js";
import {
  AssetService
} from "./chunk-3HOLFFTT.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WEE2LGWY.js";
import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  HttpClient,
  HttpParams,
  Injectable,
  NgClass,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Observable,
  Output,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-UCY5OEF2.js";

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
  getIncidents(page = 1, limit = 10, search = "", includeHistory = false) {
    let params = new HttpParams().set("page", page).set("limit", limit).set("include_history", includeHistory);
    if (search.trim())
      params = params.set("search", search.trim());
    return this.http.get(this.apiUrl, { params }).pipe(map((response) => ({
      items: Array.isArray(response?.data?.items) ? response.data.items.map((incident) => ({
        id: incident.id,
        assetId: incident.asset_id,
        stateId: incident.state_id,
        assetName: incident.asset_name,
        fieldNotes: incident.field_notes,
        status: incident.status,
        reportedAt: incident.reported_at,
        resolvedAt: incident.resolved_at,
        resolutionNotes: incident.resolution_notes
      })) : [],
      total: Number(response?.data?.pagination?.total ?? 0)
    })));
  }
  logIncident(incident) {
    const payload = {
      qr_code_data: incident.qrCodeData,
      field_notes: incident.fieldNotes
    };
    if (incident.deviceLatitude !== void 0 && incident.deviceLongitude !== void 0) {
      payload["device_latitude"] = incident.deviceLatitude;
      payload["device_longitude"] = incident.deviceLongitude;
      if (incident.deviceTimestamp)
        payload["device_timestamp"] = incident.deviceTimestamp;
    }
    return this.http.post(`${this.apiUrl}/log`, payload);
  }
  uploadDefectImage(assetId, file, incidentId) {
    const data = new FormData();
    data.append("asset_id", String(assetId));
    if (incidentId !== void 0)
      data.append("incident_id", String(incidentId));
    data.append("file", file, file.name);
    return this.http.post(`${environment.apiBase}/attachments`, data);
  }
  verifyRepair(verification) {
    return this.http.post(`${this.apiUrl}/verify`, {
      incident_id: verification.incidentId,
      qr_code_data: verification.qrCodeData,
      field_notes: verification.fieldNotes,
      device_latitude: verification.deviceLatitude,
      device_longitude: verification.deviceLongitude,
      device_timestamp: verification.deviceTimestamp
    });
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
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementContainerStart(2, 60);
    \u0275\u0275template(3, IncidentLogComponent_div_30_span_3_Template, 2, 0, "span", 61)(4, IncidentLogComponent_div_30_span_4_Template, 3, 2, "span", 61)(5, IncidentLogComponent_div_30_span_5_Template, 2, 0, "span", 61)(6, IncidentLogComponent_div_30_span_6_Template, 2, 0, "span", 61);
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
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Asset State ID is required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Incident notes are required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Notes must be 1000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 65);
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
    \u0275\u0275elementStart(0, "p-button", 66);
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
function IncidentLogComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "strong");
    \u0275\u0275text(2, "Allow location in Chrome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol")(4, "li");
    \u0275\u0275text(5, "Click the site information icon just left of the address bar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "Choose ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Site settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ", then set ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " to ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "Allow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Return to this page and select ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "Retry location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, ".");
    \u0275\u0275elementEnd()()();
  }
}
function IncidentLogComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "strong");
    \u0275\u0275text(2, "Check device location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol")(4, "li");
    \u0275\u0275text(5, "On Windows, open ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Start \u2192 Settings \u2192 Privacy & security \u2192 Location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " and turn on ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Location services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "If you are indoors, move near a window or outdoors, then select ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "Retry location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "small");
    \u0275\u0275text(18, "Location is optional. You can still submit the incident without a GPS reading.");
    \u0275\u0275elementEnd()();
  }
}
function IncidentLogComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 68);
    \u0275\u0275listener("onClick", function IncidentLogComponent_ng_template_112_Template_p_button_onClick_0_listener() {
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
  logged = new EventEmitter();
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
  gpsRequestTimeout = null;
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
  clearGpsRequestTimeout() {
    if (this.gpsRequestTimeout !== null) {
      window.clearTimeout(this.gpsRequestTimeout);
      this.gpsRequestTimeout = null;
    }
  }
  enableLocation() {
    this.gpsRequested = true;
    this.gpsRequesting = true;
    this.gpsError = "";
    this.clearGpsRequestTimeout();
    if (this.gpsWatchId !== null)
      navigator.geolocation?.clearWatch(this.gpsWatchId);
    this.gpsRequestTimeout = window.setTimeout(() => {
      if (!this.gpsRequesting || this.canSubmit)
        return;
      this.gpsRequesting = false;
      this.gpsError = this.gpsAccuracy === null ? "No GPS reading arrived. Check device location services and retry." : `GPS accuracy is ${this.gpsAccuracy.toFixed(1)} m; this form requires 15 m or better.`;
    }, 15e3);
    if (!navigator.geolocation) {
      this.clearGpsRequestTimeout();
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
      this.clearGpsRequestTimeout();
    }, (error) => {
      this.canSubmit = false;
      this.gpsRequesting = false;
      this.clearGpsRequestTimeout();
      this.gpsError = error.code === error.PERMISSION_DENIED ? "Location permission was denied." : "No GPS reading arrived. Check device location services and retry.";
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
    if (this.incidentForm.invalid || this.submitting || !this.matchedAsset)
      return;
    const { qrCodeData, fieldNotes } = this.incidentForm.getRawValue();
    const image = this.selectedFile;
    this.submitting = true;
    const incident = {
      qrCodeData: qrCodeData.trim(),
      fieldNotes: fieldNotes.trim()
    };
    if (this.gpsLatitude !== null && this.gpsLongitude !== null) {
      incident.deviceLatitude = this.gpsLatitude;
      incident.deviceLongitude = this.gpsLongitude;
      incident.deviceTimestamp = (/* @__PURE__ */ new Date()).toISOString();
    }
    this.incidentService.logIncident(incident).subscribe({
      next: (response) => {
        const finish = (uploadFailed = false) => {
          this.submitting = false;
          this.incidentForm.controls.fieldNotes.reset("");
          this.selectedFile = null;
          this.logged.emit();
          this.messageService.add(uploadFailed ? { severity: "warn", summary: "Incident logged; image upload failed", detail: "The incident was recorded, but the image could not be attached." } : { severity: "success", summary: "Incident logged", detail: image ? "The incident was logged and the image was attached." : "The asset has been marked out of service." });
        };
        if (image) {
          this.incidentService.uploadDefectImage(response.asset_id, image, response.incident_id).subscribe({ next: () => finish(), error: () => finish(true) });
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
    this.clearGpsRequestTimeout();
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
  }, outputs: { logged: "logged" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 114, vars: 48, consts: [["defectImageInput", ""], ["scannerVideo", ""], ["footer", ""], [1, "incident-page"], [1, "page-heading"], ["value", "Asset will be marked out of service", "severity", "warn", "icon", "pi pi-exclamation-triangle"], [1, "incident-layout"], [1, "card", "incident-form-card"], [1, "section-heading"], [1, "section-icon"], [1, "pi", "pi-file-edit"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "assetStateId"], [1, "required-mark"], [1, "asset-input-row"], ["pInputText", "", "id", "assetStateId", "formControlName", "qrCodeData", "placeholder", "e.g. FLEET-000123", "autocomplete", "off", "fluid", "", 3, "invalid"], ["type", "button", "label", "Scan QR Code", "icon", "pi pi-qrcode", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], [1, "field-help"], ["class", "asset-lookup", "aria-live", "polite", 3, "ngClass", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], [1, "label-row"], ["for", "fieldNotes"], [1, "character-count"], ["pTextarea", "", "id", "fieldNotes", "formControlName", "fieldNotes", "rows", "6", "maxlength", "1000", "placeholder", "Describe the issue, when it was noticed, and any relevant details.", "fluid", "", 3, "invalid"], ["for", "defectImageInput"], [1, "optional-label"], [1, "upload-row"], ["id", "defectImageInput", "type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "visually-hidden", 3, "change"], ["type", "button", "label", "Choose image", "icon", "pi pi-image", "severity", "secondary", 3, "onClick", "outlined"], ["class", "file-name", 4, "ngIf"], ["type", "button", "icon", "pi pi-times", "severity", "danger", "ariaLabel", "Remove image", 3, "text", "rounded", "onClick", 4, "ngIf"], ["class", "field-help", 4, "ngIf"], [1, "gps-status"], [1, "gps-status-heading"], [1, "gps-icon"], [1, "pi", 3, "ngClass"], [1, "gps-status-copy"], [4, "ngIf"], [3, "value", "severity"], [1, "gps-actions"], ["type", "button", "icon", "pi pi-map-marker", "severity", "secondary", 3, "onClick", "label", "outlined", "loading", "disabled"], ["class", "gps-permission-help", 4, "ngIf"], ["role", "progressbar", "aria-label", "GPS accuracy", "aria-valuemin", "0", "aria-valuemax", "100", 1, "gps-meter"], [1, "form-actions"], ["type", "submit", "label", "Submit Incident", "icon", "pi pi-send", 3, "loading", "disabled"], [1, "card", "incident-info-card"], [1, "next-steps"], [1, "step-icon"], [1, "pi", "pi-search"], [1, "pi", "pi-book"], [1, "step-icon", "step-icon--warning"], [1, "pi", "pi-exclamation-triangle"], [1, "info-note"], [1, "pi", "pi-info-circle"], ["header", "Scan asset QR code", 3, "visibleChange", "onShow", "onHide", "visible", "modal", "draggable"], [1, "scanner-body"], ["autoplay", "", "playsinline", "", "muted", ""], [1, "scanner-help"], ["aria-live", "polite", 1, "asset-lookup", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "field-error"], [1, "file-name"], [1, "pi", "pi-paperclip"], [1, "muted"], ["type", "button", "icon", "pi pi-times", "severity", "danger", "ariaLabel", "Remove image", 3, "onClick", "text", "rounded"], [1, "gps-permission-help"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"]], template: function IncidentLogComponent_Template(rf, ctx) {
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
      \u0275\u0275template(70, IncidentLogComponent_div_70_Template, 22, 0, "div", 42)(71, IncidentLogComponent_div_71_Template, 19, 0, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 43);
      \u0275\u0275element(73, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "small");
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 44);
      \u0275\u0275element(78, "p-button", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "aside", 46)(80, "h2");
      \u0275\u0275text(81, "What happens next?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul", 47)(83, "li")(84, "span", 48);
      \u0275\u0275element(85, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "The asset is matched by its State ID.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "li")(89, "span", 48);
      \u0275\u0275element(90, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "Your incident notes are recorded.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "span", 51);
      \u0275\u0275element(95, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "The asset is marked ");
      \u0275\u0275elementStart(98, "strong");
      \u0275\u0275text(99, "Out of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, " for follow-up.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 53);
      \u0275\u0275element(102, "i", 54);
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "Check the State ID before submitting. The incident endpoint updates the asset status when the incident is accepted.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "p-dialog", 55);
      \u0275\u0275twoWayListener("visibleChange", function IncidentLogComponent_Template_p_dialog_visibleChange_105_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.scannerVisible, $event) || (ctx.scannerVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onShow", function IncidentLogComponent_Template_p_dialog_onShow_105_listener() {
        return ctx.startCameraScan();
      })("onHide", function IncidentLogComponent_Template_p_dialog_onHide_105_listener() {
        return ctx.stopQrScan();
      });
      \u0275\u0275elementStart(106, "div", 56);
      \u0275\u0275element(107, "video", 57, 1);
      \u0275\u0275elementStart(109, "div", 58);
      \u0275\u0275element(110, "i", 54);
      \u0275\u0275text(111, " Point the camera at the asset\u2019s QR code.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(112, IncidentLogComponent_ng_template_112_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
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
      \u0275\u0275property("value", ctx.canSubmit ? "Precise" : ctx.gpsRequesting ? "Locating" : ctx.gpsLatitude !== null ? "Available" : ctx.gpsError ? "Unavailable" : "Optional")("severity", ctx.canSubmit ? "success" : ctx.gpsRequesting ? "info" : "secondary");
      \u0275\u0275advance(2);
      \u0275\u0275property("label", !ctx.gpsRequested ? "Enable location" : ctx.canSubmit ? "Refresh location" : ctx.gpsRequesting ? "Requesting location\u2026" : "Retry location")("outlined", true)("loading", ctx.gpsRequesting)("disabled", ctx.gpsRequesting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.gpsError.toLowerCase().includes("permission"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.gpsError.toLowerCase().includes("no gps reading") || ctx.gpsError.toLowerCase().includes("accuracy"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-valuenow", ctx.gpsProgress);
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.gpsProgress, "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Optional device location. GPS accuracy: ", ctx.gpsAccuracy === null ? "\u2014" : \u0275\u0275pipeBind2(76, 44, ctx.gpsAccuracy, "1.1-1") + " m", ". You can submit without it.");
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.submitting)("disabled", ctx.submitting || ctx.incidentForm.invalid || !ctx.matchedAsset);
      \u0275\u0275advance(27);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.scannerVisible);
      \u0275\u0275property("modal", true)("draggable", false);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, NgSwitch, NgSwitchCase, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, ButtonModule, Button, DialogModule, Dialog, InputTextModule, InputText, TextareaModule, Textarea, TagModule, Tag, ToastModule, Toast, DecimalPipe], styles: ["\n.incident-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr);\n  align-items: start;\n  gap: 1.25rem;\n}\n.incident-form-card[_ngcontent-%COMP%], \n.incident-info-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.incident-info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.section-icon[_ngcontent-%COMP%], \n.step-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.asset-input-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.65rem;\n}\n.required-mark[_ngcontent-%COMP%], \n.field-error[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.field-help[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.asset-lookup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 1.4rem;\n  font-size: 0.9rem;\n}\n.asset-lookup[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.asset-lookup--found[_ngcontent-%COMP%] {\n  color: var(--green-600, #16a34a);\n}\n.asset-lookup--notFound[_ngcontent-%COMP%], \n.asset-lookup--error[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.asset-lookup--searching[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.character-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.optional-label[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.upload-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  min-height: 2.75rem;\n}\n.file-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-color);\n  overflow-wrap: anywhere;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.gps-status[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.gps-status--ready[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--green-500, #22c55e) 40%, var(--surface-border));\n}\n.gps-status--error[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--red-500, #ef4444) 40%, var(--surface-border));\n}\n.gps-status-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.gps-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  background: var(--surface-card);\n  color: var(--primary-color);\n}\n.gps-status-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.gps-status-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.gps-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.gps-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.85rem;\n}\n.gps-actions[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.gps-permission-help[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  padding: 0.8rem 1rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-card);\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.gps-permission-help[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.gps-permission-help[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin: 0.45rem 0 0;\n  padding-left: 1.25rem;\n}\n.gps-meter[_ngcontent-%COMP%] {\n  height: 0.4rem;\n  margin: 0.85rem 0 0.55rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--surface-border);\n}\n.gps-meter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--primary-color);\n  transition: width 0.25s ease;\n}\n.gps-status--ready[_ngcontent-%COMP%]   .gps-meter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--green-500, #22c55e);\n}\n.scanner-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.scanner-body[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 55vh;\n  border-radius: var(--content-border-radius);\n  background: #111827;\n  object-fit: cover;\n}\n.scanner-help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-color-secondary);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.25rem;\n}\n.incident-info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.next-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.next-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n}\n.step-icon--warning[_ngcontent-%COMP%] {\n  color: var(--orange-500, #f59e0b);\n  background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent);\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.5rem;\n  padding: 0.9rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.info-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .incident-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incident-form-card[_ngcontent-%COMP%], \n   .incident-info-card[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n  }\n  .asset-input-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=incident-log.component.css.map */"] });
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
                <p-tag [value]="canSubmit ? 'Precise' : gpsRequesting ? 'Locating' : gpsLatitude !== null ? 'Available' : gpsError ? 'Unavailable' : 'Optional'" [severity]="canSubmit ? 'success' : gpsRequesting ? 'info' : 'secondary'" />
              </div>
              <div class="gps-actions">
                <p-button type="button" [label]="!gpsRequested ? 'Enable location' : canSubmit ? 'Refresh location' : gpsRequesting ? 'Requesting location\u2026' : 'Retry location'" icon="pi pi-map-marker" severity="secondary" [outlined]="true" [loading]="gpsRequesting" [disabled]="gpsRequesting" (onClick)="enableLocation()" />
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
                    <li>On Windows, open <strong>Start \u2192 Settings \u2192 Privacy &amp; security \u2192 Location</strong> and turn on <strong>Location services</strong>.</li>
                    <li>If you are indoors, move near a window or outdoors, then select <strong>Retry location</strong>.</li>
                  </ol>
                  <small>Location is optional. You can still submit the incident without a GPS reading.</small>
                </div>
              </div>
              <div class="gps-meter" role="progressbar" aria-label="GPS accuracy" [attr.aria-valuenow]="gpsProgress" aria-valuemin="0" aria-valuemax="100">
                <span [style.width.%]="gpsProgress"></span>
              </div>
              <small>Optional device location. GPS accuracy: {{ gpsAccuracy === null ? '\u2014' : (gpsAccuracy | number: '1.1-1') + ' m' }}. You can submit without it.</small>
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
        <div class="scanner-help"><i class="pi pi-info-circle"></i> Point the camera at the asset\u2019s QR code.</div>
      </div>
      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [outlined]="true" (onClick)="scannerVisible = false" />
      </ng-template>
    </p-dialog>
  `, styles: ["/* angular:styles/component:scss;f9d4df60d1d370bddd1314c36d6acac1e973a7c5aa760e5434028f836bd63551;C:/xampp/htdocs/atims/atims-ui/src/app/features/incidents/incident-log.component.ts */\n.incident-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading p {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr);\n  align-items: start;\n  gap: 1.25rem;\n}\n.incident-form-card,\n.incident-info-card {\n  padding: 1.5rem;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.section-heading h2,\n.incident-info-card h2 {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.section-heading p {\n  margin: 0.3rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.section-icon,\n.step-icon {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field label {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.asset-input-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.65rem;\n}\n.required-mark,\n.field-error {\n  color: var(--red-500, #ef4444);\n}\n.field-help {\n  color: var(--text-color-secondary);\n}\n.asset-lookup {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 1.4rem;\n  font-size: 0.9rem;\n}\n.asset-lookup small {\n  color: var(--text-color-secondary);\n}\n.asset-lookup--found {\n  color: var(--green-600, #16a34a);\n}\n.asset-lookup--notFound,\n.asset-lookup--error {\n  color: var(--red-500, #ef4444);\n}\n.asset-lookup--searching {\n  color: var(--text-color-secondary);\n}\n.label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.character-count {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.optional-label {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.upload-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  min-height: 2.75rem;\n}\n.file-name {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-color);\n  overflow-wrap: anywhere;\n}\n.muted {\n  color: var(--text-color-secondary);\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.gps-status {\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.gps-status--ready {\n  border-color: color-mix(in srgb, var(--green-500, #22c55e) 40%, var(--surface-border));\n}\n.gps-status--error {\n  border-color: color-mix(in srgb, var(--red-500, #ef4444) 40%, var(--surface-border));\n}\n.gps-status-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.gps-icon {\n  display: grid;\n  place-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  background: var(--surface-card);\n  color: var(--primary-color);\n}\n.gps-status-copy {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.gps-status-copy span,\n.gps-status small {\n  color: var(--text-color-secondary);\n}\n.gps-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.85rem;\n}\n.gps-actions small {\n  color: var(--text-color-secondary);\n}\n.gps-permission-help {\n  flex-basis: 100%;\n  padding: 0.8rem 1rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-card);\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.gps-permission-help strong {\n  color: var(--text-color);\n}\n.gps-permission-help ol {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin: 0.45rem 0 0;\n  padding-left: 1.25rem;\n}\n.gps-meter {\n  height: 0.4rem;\n  margin: 0.85rem 0 0.55rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--surface-border);\n}\n.gps-meter span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--primary-color);\n  transition: width 0.25s ease;\n}\n.gps-status--ready .gps-meter span {\n  background: var(--green-500, #22c55e);\n}\n.scanner-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.scanner-body video {\n  width: 100%;\n  max-height: 55vh;\n  border-radius: var(--content-border-radius);\n  background: #111827;\n  object-fit: cover;\n}\n.scanner-help {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-color-secondary);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.25rem;\n}\n.incident-info-card h2 {\n  margin-bottom: 1.25rem;\n}\n.next-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.next-steps li {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n}\n.step-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n}\n.step-icon--warning {\n  color: var(--orange-500, #f59e0b);\n  background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent);\n}\n.info-note {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.5rem;\n  padding: 0.9rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.info-note i {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .incident-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incident-form-card,\n  .incident-info-card {\n    padding: 1.1rem;\n  }\n  .asset-input-row {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=incident-log.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: IncidentService }, { type: AssetService }, { type: ActivatedRoute }, { type: MessageService }, { type: DestroyRef }], { logged: [{
    type: Output
  }], scannerVideo: [{
    type: ViewChild,
    args: ["scannerVideo"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentLogComponent, { className: "IncidentLogComponent", filePath: "src/app/features/incidents/incident-log.component.ts", lineNumber: 233 });
})();

// src/app/features/incidents/incident-list.component.ts
var _c02 = () => [10, 20, 50];
var _c12 = () => ({ "min-width": "68rem" });
var _c2 = () => ({ width: "min(72rem, calc(100vw - 2rem))" });
var _c3 = () => ({ "max-height": "80vh", "overflow-y": "auto" });
var _c4 = () => ({ width: "min(38rem, calc(100vw - 2rem))" });
function IncidentListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "p-iconfield", 26)(3, "p-inputicon");
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 28);
    \u0275\u0275listener("input", function IncidentListComponent_ng_template_13_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const incidentTable_r4 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(ctx_r2.onSearch(incidentTable_r4, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-togglebutton", 29);
    \u0275\u0275twoWayListener("ngModelChange", function IncidentListComponent_ng_template_13_Template_p_togglebutton_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.includeHistory, $event) || (ctx_r2.includeHistory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function IncidentListComponent_ng_template_13_Template_p_togglebutton_onChange_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const incidentTable_r4 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(ctx_r2.onHistoryToggle(incidentTable_r4));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-button", 30);
    \u0275\u0275listener("onClick", function IncidentListComponent_ng_template_13_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logDialogVisible = true);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.includeHistory);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
  }
}
function IncidentListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 31);
    \u0275\u0275text(2, "State ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 32);
    \u0275\u0275text(4, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 33);
    \u0275\u0275text(6, "Incident notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 34);
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 35);
    \u0275\u0275text(10, "Reported");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 35);
    \u0275\u0275text(12, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 36);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function IncidentListComponent_ng_template_17_p_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 44);
    \u0275\u0275listener("onClick", function IncidentListComponent_ng_template_17_p_button_19_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const incident_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openVerifyDialog(incident_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const incident_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("label", incident_r6.status === "pending_forensic_clearance" ? "Review repair" : "Verify repair")("outlined", true);
  }
}
function IncidentListComponent_ng_template_17_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function IncidentListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 41);
    \u0275\u0275template(19, IncidentListComponent_ng_template_17_p_button_19_Template, 1, 2, "p-button", 42)(20, IncidentListComponent_ng_template_17_span_20_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const incident_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(incident_r6.stateId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(incident_r6.assetName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(incident_r6.fieldNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.statusLabel(incident_r6.status))("severity", ctx_r2.statusSeverity(incident_r6.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, incident_r6.reportedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(incident_r6.resolvedAt ? \u0275\u0275pipeBind2(17, 12, incident_r6.resolvedAt, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", incident_r6.status !== "resolved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", incident_r6.status !== "open");
  }
}
function IncidentListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.searchTerm ? "No incidents match your search." : ctx_r2.includeHistory ? "No incident history found." : "There are no open incidents.");
  }
}
function IncidentListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const incident_r7 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(incident_r7.stateId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(incident_r7.assetName);
  }
}
function IncidentListComponent_small_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1, "Repair notes are required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentListComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coordinates_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind2(2, 3, coordinates_r8.latitude, "1.5-5"), ", ", \u0275\u0275pipeBind2(3, 6, coordinates_r8.longitude, "1.5-5"), " (\xB1", \u0275\u0275pipeBind2(4, 9, coordinates_r8.accuracy, "1.0-0"), " m)");
  }
}
function IncidentListComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "GPS is required to validate the repair location.");
    \u0275\u0275elementEnd();
  }
}
function IncidentListComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.verifyLocationError);
  }
}
function IncidentListComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 49);
    \u0275\u0275listener("onClick", function IncidentListComponent_ng_template_41_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verifyDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 50);
    \u0275\u0275listener("onClick", function IncidentListComponent_ng_template_41_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verifyRepair());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true)("disabled", ctx_r2.verifying);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.verifying)("disabled", ctx_r2.verifyForm.invalid || !ctx_r2.verifyCoordinates || ctx_r2.verifying);
  }
}
var IncidentListComponent = class _IncidentListComponent {
  incidentService;
  messageService;
  changeDetector;
  fb;
  incidents = [];
  searchTerm = "";
  includeHistory = false;
  logDialogVisible = false;
  verifyDialogVisible = false;
  loading = true;
  verifying = false;
  locating = false;
  first = 0;
  rows = 10;
  totalRecords = 0;
  verifyIncident = null;
  verifyCoordinates = null;
  verifyLocationError = "";
  verifyForm;
  requestId = 0;
  constructor(incidentService, messageService, changeDetector, fb) {
    this.incidentService = incidentService;
    this.messageService = messageService;
    this.changeDetector = changeDetector;
    this.fb = fb;
    this.verifyForm = this.fb.group({ fieldNotes: ["", [Validators.required, Validators.maxLength(1e3)]] });
  }
  ngOnInit() {
    this.loadIncidents({ first: 0, rows: this.rows });
  }
  loadIncidents(event = {}) {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    const requestId = ++this.requestId;
    this.loading = true;
    this.incidentService.getIncidents(Math.floor(this.first / this.rows) + 1, this.rows, this.searchTerm, this.includeHistory).subscribe({
      next: (page) => setTimeout(() => {
        if (requestId !== this.requestId)
          return;
        this.incidents = page.items;
        this.totalRecords = page.total;
        this.loading = false;
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        if (requestId !== this.requestId)
          return;
        this.incidents = [];
        this.totalRecords = 0;
        this.loading = false;
        this.messageService.add({ severity: "error", summary: "Could not load incidents", detail: "Please refresh the list and try again." });
        this.changeDetector.markForCheck();
      })
    });
  }
  onSearch(table, event) {
    this.searchTerm = event.target.value.trim();
    this.first = 0;
    table.first = 0;
    this.loadIncidents({ first: 0, rows: this.rows });
  }
  onHistoryToggle(table) {
    this.first = 0;
    table.first = 0;
    this.loadIncidents({ first: 0, rows: this.rows });
  }
  onIncidentLogged() {
    this.logDialogVisible = false;
    this.includeHistory = false;
    this.first = 0;
    this.loadIncidents({ first: 0, rows: this.rows });
  }
  statusLabel(status) {
    const labels = {
      open: "Open",
      resolved: "Resolved",
      pending_forensic_clearance: "Pending review"
    };
    return labels[status] ?? status;
  }
  statusSeverity(status) {
    const severities = {
      open: "danger",
      resolved: "success",
      pending_forensic_clearance: "warn"
    };
    return severities[status] ?? "secondary";
  }
  openVerifyDialog(incident) {
    this.verifyIncident = incident;
    this.verifyCoordinates = null;
    this.verifyLocationError = "";
    this.verifyForm.reset({ fieldNotes: "" });
    this.verifyDialogVisible = true;
  }
  requestVerifyLocation() {
    if (!navigator.geolocation) {
      this.verifyLocationError = "Location is not available in this browser.";
      return;
    }
    this.locating = true;
    this.verifyLocationError = "";
    navigator.geolocation.getCurrentPosition((position) => {
      this.verifyCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
      };
      this.locating = false;
      this.changeDetector.markForCheck();
    }, (error) => {
      this.locating = false;
      this.verifyLocationError = error.code === error.PERMISSION_DENIED ? "Location permission was denied. Allow it in the browser site settings and retry." : "No location reading arrived. Check device location services and retry.";
      this.changeDetector.markForCheck();
    }, { enableHighAccuracy: true, maximumAge: 0, timeout: 15e3 });
  }
  verifyRepair() {
    this.verifyForm.markAllAsTouched();
    const incident = this.verifyIncident;
    const coordinates = this.verifyCoordinates;
    const fieldNotes = this.verifyForm.controls.fieldNotes.value?.trim();
    if (!incident || !coordinates || !fieldNotes || this.verifying || this.verifyForm.invalid)
      return;
    this.verifying = true;
    this.incidentService.verifyRepair({
      incidentId: incident.id,
      qrCodeData: incident.stateId,
      fieldNotes,
      deviceLatitude: coordinates.latitude,
      deviceLongitude: coordinates.longitude,
      deviceTimestamp: (/* @__PURE__ */ new Date()).toISOString()
    }).subscribe({
      next: () => {
        this.verifying = false;
        this.verifyDialogVisible = false;
        this.messageService.add({ severity: "success", summary: "Repair verified", detail: `${incident.stateId} has been marked resolved.` });
        this.loadIncidents({ first: this.first, rows: this.rows });
      },
      error: (error) => {
        this.verifying = false;
        this.messageService.add({
          severity: error?.status === 403 ? "warn" : "error",
          summary: error?.status === 403 ? "Location review required" : "Could not verify repair",
          detail: error?.error?.details?.message ?? "Check the repair notes and location, then try again."
        });
        this.loadIncidents({ first: this.first, rows: this.rows });
      }
    });
  }
  static \u0275fac = function IncidentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidentListComponent)(\u0275\u0275directiveInject(IncidentService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentListComponent, selectors: [["app-incident-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 43, vars: 42, consts: [["incidentTable", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], [1, "incidents-page"], [1, "page-heading"], [1, "incident-count"], [1, "card", "incidents-table-card"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} incidents", "styleClass", "incidents-table", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "first", "totalRecords", "rowsPerPageOptions", "loading", "rowHover", "showCurrentPageReport", "tableStyle"], ["header", "Log Incident", 3, "visibleChange", "visible", "modal", "draggable", "contentStyle"], [3, "logged"], ["header", "Verify repair", 3, "visibleChange", "visible", "modal", "draggable", "closable"], [1, "verify-form", 3, "ngSubmit", "formGroup"], ["class", "verify-asset-summary", 4, "ngIf"], [1, "form-field"], ["for", "resolution-notes"], [1, "required-mark"], ["pTextarea", "", "id", "resolution-notes", "formControlName", "fieldNotes", "rows", "4", "maxlength", "1000", "placeholder", "Describe the repair and work completed."], ["class", "field-error", 4, "ngIf"], [1, "verify-location"], [4, "ngIf"], ["type", "button", "icon", "pi pi-map-marker", "severity", "secondary", 3, "onClick", "label", "outlined", "loading", "disabled"], [1, "incidents-toolbar"], [1, "toolbar-filters"], ["iconPosition", "left", 1, "search-field"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search asset, State ID or notes", "aria-label", "Search incidents", 3, "input", "value"], ["onLabel", "Include History", "offLabel", "Open Incidents", "onIcon", "pi pi-history", "offIcon", "pi pi-inbox", "ariaLabel", "Include incident history", 3, "ngModelChange", "onChange", "ngModel"], ["label", "Log Incident", "icon", "pi pi-plus", 3, "onClick", "outlined"], [1, "state-column"], [1, "asset-column"], [1, "notes-column"], [1, "status-column"], [1, "date-column"], [1, "actions-column"], [1, "state-id"], [1, "asset-name"], [1, "notes-cell"], [3, "value", "severity"], [1, "actions-cell"], ["icon", "pi pi-check-circle", "severity", "success", 3, "label", "outlined", "onClick", 4, "ngIf"], ["class", "muted", 4, "ngIf"], ["icon", "pi pi-check-circle", "severity", "success", 3, "onClick", "label", "outlined"], [1, "muted"], ["colspan", "7", 1, "empty-cell"], [1, "verify-asset-summary"], [1, "field-error"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text", "disabled"], ["label", "Verify repair", "icon", "pi pi-check", "severity", "success", 3, "onClick", "loading", "disabled"]], template: function IncidentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "section", 6)(2, "header", 7)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Incidents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Review open incidents and verify completed repairs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "p-table", 10, 0);
      \u0275\u0275listener("onLazyLoad", function IncidentListComponent_Template_p_table_onLazyLoad_11_listener($event) {
        return ctx.loadIncidents($event);
      });
      \u0275\u0275template(13, IncidentListComponent_ng_template_13_Template, 8, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, IncidentListComponent_ng_template_15_Template, 15, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, IncidentListComponent_ng_template_17_Template, 21, 15, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, IncidentListComponent_ng_template_19_Template, 3, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function IncidentListComponent_Template_p_dialog_visibleChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.logDialogVisible, $event) || (ctx.logDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(22, "app-incident-log", 12);
      \u0275\u0275listener("logged", function IncidentListComponent_Template_app_incident_log_logged_22_listener() {
        return ctx.onIncidentLogged();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-dialog", 13);
      \u0275\u0275twoWayListener("visibleChange", function IncidentListComponent_Template_p_dialog_visibleChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.verifyDialogVisible, $event) || (ctx.verifyDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(24, "form", 14);
      \u0275\u0275listener("ngSubmit", function IncidentListComponent_Template_form_ngSubmit_24_listener() {
        return ctx.verifyRepair();
      });
      \u0275\u0275template(25, IncidentListComponent_div_25_Template, 5, 2, "div", 15);
      \u0275\u0275elementStart(26, "div", 16)(27, "label", 17);
      \u0275\u0275text(28, "Repair notes ");
      \u0275\u0275elementStart(29, "span", 18);
      \u0275\u0275text(30, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "textarea", 19);
      \u0275\u0275template(32, IncidentListComponent_small_32_Template, 2, 0, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21)(34, "div")(35, "strong");
      \u0275\u0275text(36, "Repair location");
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, IncidentListComponent_span_37_Template, 5, 12, "span", 22)(38, IncidentListComponent_span_38_Template, 2, 0, "span", 22)(39, IncidentListComponent_small_39_Template, 2, 1, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p-button", 23);
      \u0275\u0275listener("onClick", function IncidentListComponent_Template_p_button_onClick_40_listener() {
        return ctx.requestVerifyLocation();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(41, IncidentListComponent_ng_template_41_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.totalRecords, " ", ctx.includeHistory ? "incidents" : "open incidents");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.incidents)("lazy", true)("paginator", true)("rows", ctx.rows)("first", ctx.first)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", \u0275\u0275pureFunction0(37, _c02))("loading", ctx.loading)("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(38, _c12));
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.logDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("contentStyle", \u0275\u0275pureFunction0(40, _c3));
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.verifyDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("closable", !ctx.verifying);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.verifyForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.verifyIncident);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.verifyForm.controls.fieldNotes.touched && ctx.verifyForm.controls.fieldNotes.invalid);
      \u0275\u0275advance();
      \u0275\u0275classProp("verify-location--ready", ctx.verifyCoordinates !== null);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.verifyCoordinates);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.verifyCoordinates);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.verifyLocationError);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.locating ? "Locating\u2026" : ctx.verifyCoordinates ? "Refresh GPS" : "Enable GPS")("outlined", true)("loading", ctx.locating)("disabled", ctx.locating);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, ButtonModule, Button, DialogModule, Dialog, IconFieldModule, IconField, InputIconModule, InputIcon, InputTextModule, InputText, TableModule, Table, TagModule, Tag, TextareaModule, Textarea, ToastModule, Toast, ToggleButtonModule, ToggleButton, IncidentLogComponent, DecimalPipe, DatePipe], styles: ["\n.incidents-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  white-space: nowrap;\n}\n.incidents-table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.incidents-toolbar[_ngcontent-%COMP%], \n.toolbar-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.incidents-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: min(32rem, 55vw);\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.state-column[_ngcontent-%COMP%] {\n  min-width: 10rem;\n}\n.asset-column[_ngcontent-%COMP%] {\n  min-width: 13rem;\n}\n.notes-column[_ngcontent-%COMP%] {\n  min-width: 20rem;\n}\n.status-column[_ngcontent-%COMP%] {\n  min-width: 11rem;\n}\n.date-column[_ngcontent-%COMP%] {\n  min-width: 12rem;\n  white-space: nowrap;\n}\n.actions-column[_ngcontent-%COMP%] {\n  min-width: 10rem;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.state-id[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: 0.875rem;\n}\n.asset-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.notes-cell[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  line-height: 1.45;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.empty-cell[_ngcontent-%COMP%] {\n  padding: 2rem !important;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.verify-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.verify-asset-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.9rem 1rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.verify-asset-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.required-mark[_ngcontent-%COMP%], \n.field-error[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.verify-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.verify-location[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.verify-location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.verify-location--ready[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--green-500, #22c55e) 45%, var(--surface-border));\n}\n@media (max-width: 640px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incidents-toolbar[_ngcontent-%COMP%], \n   .toolbar-filters[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .verify-location[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=incident-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentListComponent, [{
    type: Component,
    args: [{ selector: "app-incident-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
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
    ], providers: [ConfirmationService, MessageService], template: `
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
          [tableStyle]="{ 'min-width': '68rem' }"
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
                  onLabel="Include History"
                  offLabel="Open Incidents"
                  onIcon="pi pi-history"
                  offIcon="pi pi-inbox"
                  ariaLabel="Include incident history"
                  (onChange)="onHistoryToggle(incidentTable)"
                />
              </div>
              <p-button label="Log Incident" icon="pi pi-plus" [outlined]="true" (onClick)="logDialogVisible = true" />
            </div>
          </ng-template>

          <ng-template #header>
            <tr>
              <th class="state-column">State ID</th>
              <th class="asset-column">Asset</th>
              <th class="notes-column">Incident notes</th>
              <th class="status-column">Status</th>
              <th class="date-column">Reported</th>
              <th class="date-column">Resolved</th>
              <th class="actions-column">Actions</th>
            </tr>
          </ng-template>

          <ng-template #body let-incident>
            <tr>
              <td><span class="state-id">{{ incident.stateId }}</span></td>
              <td><span class="asset-name">{{ incident.assetName }}</span></td>
              <td><span class="notes-cell">{{ incident.fieldNotes }}</span></td>
              <td><p-tag [value]="statusLabel(incident.status)" [severity]="statusSeverity(incident.status)" /></td>
              <td>{{ incident.reportedAt | date: 'medium' }}</td>
              <td>{{ incident.resolvedAt ? (incident.resolvedAt | date: 'medium') : '\u2014' }}</td>
              <td class="actions-cell">
                <p-button
                  *ngIf="incident.status !== 'resolved'"
                  [label]="incident.status === 'pending_forensic_clearance' ? 'Review repair' : 'Verify repair'"
                  icon="pi pi-check-circle"
                  severity="success"
                  [outlined]="true"
                  (onClick)="openVerifyDialog(incident)"
                />
                <span *ngIf="incident.status !== 'open'" class="muted">\u2014</span>
              </td>
            </tr>
          </ng-template>

          <ng-template #emptymessage>
            <tr><td colspan="7" class="empty-cell">{{ searchTerm ? 'No incidents match your search.' : includeHistory ? 'No incident history found.' : 'There are no open incidents.' }}</td></tr>
          </ng-template>
        </p-table>
      </div>
    </section>

    <p-dialog [(visible)]="logDialogVisible" header="Log Incident" [modal]="true" [draggable]="false" [style]="{ width: 'min(72rem, calc(100vw - 2rem))' }" [contentStyle]="{ 'max-height': '80vh', 'overflow-y': 'auto' }">
      <app-incident-log (logged)="onIncidentLogged()" />
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
            <span *ngIf="verifyCoordinates as coordinates">{{ coordinates.latitude | number: '1.5-5' }}, {{ coordinates.longitude | number: '1.5-5' }} (\xB1{{ coordinates.accuracy | number: '1.0-0' }} m)</span>
            <span *ngIf="!verifyCoordinates">GPS is required to validate the repair location.</span>
            <small *ngIf="verifyLocationError" class="field-error">{{ verifyLocationError }}</small>
          </div>
          <p-button type="button" [label]="locating ? 'Locating\u2026' : verifyCoordinates ? 'Refresh GPS' : 'Enable GPS'" icon="pi pi-map-marker" severity="secondary" [outlined]="true" [loading]="locating" [disabled]="locating" (onClick)="requestVerifyLocation()" />
        </div>
      </form>
      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [text]="true" [disabled]="verifying" (onClick)="verifyDialogVisible = false" />
        <p-button label="Verify repair" icon="pi pi-check" severity="success" [loading]="verifying" [disabled]="verifyForm.invalid || !verifyCoordinates || verifying" (onClick)="verifyRepair()" />
      </ng-template>
    </p-dialog>
  `, styles: ["/* angular:styles/component:scss;07e3379360a1edb86712314686a7eb7eb79b46ebc3ff483d0aea7b4ca2148a1b;C:/xampp/htdocs/atims/atims-ui/src/app/features/incidents/incident-list.component.ts */\n.incidents-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.page-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading p {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-count {\n  color: var(--text-color-secondary);\n  white-space: nowrap;\n}\n.incidents-table-card {\n  padding: 0;\n  overflow: hidden;\n}\n.incidents-toolbar,\n.toolbar-filters {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.incidents-toolbar {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.search-field {\n  width: min(32rem, 55vw);\n}\n.search-field input {\n  width: 100%;\n}\n.state-column {\n  min-width: 10rem;\n}\n.asset-column {\n  min-width: 13rem;\n}\n.notes-column {\n  min-width: 20rem;\n}\n.status-column {\n  min-width: 11rem;\n}\n.date-column {\n  min-width: 12rem;\n  white-space: nowrap;\n}\n.actions-column {\n  min-width: 10rem;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.state-id {\n  font-family: var(--font-family);\n  font-size: 0.875rem;\n}\n.asset-name {\n  font-weight: 600;\n}\n.notes-cell {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  line-height: 1.45;\n}\n.muted {\n  color: var(--text-color-secondary);\n}\n.empty-cell {\n  padding: 2rem !important;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.verify-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.verify-asset-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.9rem 1rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.verify-asset-summary strong {\n  font-size: 1rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field label {\n  font-weight: 600;\n}\n.required-mark,\n.field-error {\n  color: var(--red-500, #ef4444);\n}\n.verify-location {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.verify-location > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.verify-location span {\n  color: var(--text-color-secondary);\n}\n.verify-location--ready {\n  border-color: color-mix(in srgb, var(--green-500, #22c55e) 45%, var(--surface-border));\n}\n@media (max-width: 640px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incidents-toolbar,\n  .toolbar-filters {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .verify-location {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=incident-list.component.css.map */\n"] }]
  }], () => [{ type: IncidentService }, { type: MessageService }, { type: ChangeDetectorRef }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentListComponent, { className: "IncidentListComponent", filePath: "src/app/features/incidents/incident-list.component.ts", lineNumber: 206 });
})();
export {
  IncidentListComponent
};
//# sourceMappingURL=chunk-32WDXFBY.js.map
