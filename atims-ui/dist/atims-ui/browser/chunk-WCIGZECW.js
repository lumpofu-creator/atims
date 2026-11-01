import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2VERUPVP.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  Injectable,
  NgIf,
  __spreadProps,
  __spreadValues,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ALNKFEZR.js";

// src/app/features/incidents/incident.service.ts
var IncidentService = class _IncidentService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiBase}/incidents`;
  }
  logIncident(incident) {
    return this.http.post(`${this.apiUrl}/log`, incident);
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
  static {
    this.\u0275fac = function IncidentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncidentService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IncidentService, factory: _IncidentService.\u0275fac, providedIn: "root" });
  }
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
function IncidentLogComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "small", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedFile.name, " (", (ctx_r0.selectedFile.size / 1024).toFixed(1), " KB) ");
  }
}
var IncidentLogComponent = class _IncidentLogComponent {
  constructor(fb, incidentService) {
    this.fb = fb;
    this.incidentService = incidentService;
    this.Math = Math;
    this.scanning = false;
    this.selectedFile = null;
    this.gpsAccuracy = 10;
    this.canSubmit = false;
  }
  ngOnInit() {
    this.incidentForm = this.fb.group({
      assetId: ["", Validators.required],
      conditionStatus: ["", Validators.required],
      fieldNotes: [""],
      defectImage: [""]
    });
    this.watchGps();
  }
  startQrScan() {
    this.scanning = true;
    setTimeout(() => {
      this.scanning = false;
      this.incidentForm.patchValue({ assetId: "FLEET-000001" });
    }, 2e3);
  }
  onFileChange(event) {
    const input = event.target;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      if (this.selectedFile.size > 800 * 1024) {
        alert("L'image est trop volumineuse. La taille maximale est de 800 KB.");
        this.selectedFile = null;
        return;
      }
    }
  }
  watchGps() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.gpsAccuracy = position.coords.accuracy;
        this.canSubmit = this.gpsAccuracy <= 15;
        this.incidentForm.patchValue({
          deviceLatitude: position.coords.latitude,
          deviceLongitude: position.coords.longitude
        });
      }, (error) => {
        console.error("GPS error:", error);
        this.gpsAccuracy = 999;
        this.canSubmit = false;
      }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5e3
      });
    }
  }
  onSubmit() {
    if (this.incidentForm.valid) {
      const formData = __spreadProps(__spreadValues({}, this.incidentForm.value), {
        deviceLatitude: navigator.geolocation.lastPosition?.coords.latitude,
        deviceLongitude: navigator.geolocation.lastPosition?.coords.longitude,
        deviceTimestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      this.incidentService.logIncident(formData).subscribe({
        next: (response) => {
          alert("Incident enregistr\xE9 avec succ\xE8s!");
          this.incidentForm.reset();
        },
        error: (error) => {
          console.error("Error logging incident:", error);
          alert("Erreur lors de l'enregistrement de l'incident");
        }
      });
    }
  }
  static {
    this.\u0275fac = function IncidentLogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncidentLogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IncidentService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentLogComponent, selectors: [["app-incident-log"]], decls: 47, vars: 18, consts: [[1, "container"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "assetId", 1, "form-label"], ["type", "text", "id", "assetId", "formControlName", "assetId", "placeholder", "Entrez l'ID d'\xE9tat de l'actif (ex: FLEET-000123)", 1, "form-control", 3, "readonly"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-2", 3, "click", "disabled"], ["for", "conditionStatus", 1, "form-label"], ["id", "conditionStatus", "formControlName", "conditionStatus", 1, "form-select"], ["value", ""], ["value", "Fonctionnel"], ["value", "En Panne"], ["value", "D\xE9class\xE9"], ["value", "Inconnu"], ["for", "fieldNotes", 1, "form-label"], ["id", "fieldNotes", "formControlName", "fieldNotes", "rows", "3", 1, "form-control"], ["for", "defectImage", 1, "form-label"], ["type", "file", "id", "defectImage", "accept", "image/jpeg,image/png,image/gif", 1, "form-control", 3, "change"], ["class", "mt-2", 4, "ngIf"], [1, "form-label"], [1, "d-flex", "align-items-center"], [1, "progress", "flex-grow-1", "me-2", 2, "height", "20px"], ["role", "progressbar", 1, "progress-bar"], [1, "text-muted"], [1, "form-text", "text-muted"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "mt-2"]], template: function IncidentLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Journaliser un Incident");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 1);
        \u0275\u0275listener("ngSubmit", function IncidentLogComponent_Template_form_ngSubmit_3_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6, "Actif");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function IncidentLogComponent_Template_button_click_8_listener() {
          return ctx.startQrScan();
        });
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 2)(11, "label", 6);
        \u0275\u0275text(12, "Statut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 7);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(14, "option", 8);
        \u0275\u0275text(15, "S\xE9lectionner...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Fonctionnel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "En Panne");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "D\xE9class\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 12);
        \u0275\u0275text(23, "Inconnu");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "label", 13);
        \u0275\u0275text(26, "Notes de terrain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 2)(29, "label", 15);
        \u0275\u0275text(30, "Image du d\xE9faut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 16);
        \u0275\u0275listener("change", function IncidentLogComponent_Template_input_change_31_listener($event) {
          return ctx.onFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, IncidentLogComponent_div_32_Template, 3, 2, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 2)(34, "label", 18);
        \u0275\u0275text(35, "Pr\xE9cision GPS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 19)(37, "div", 20)(38, "div", 21);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "span", 22);
        \u0275\u0275text(42, "Max: 15m");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "small", 23);
        \u0275\u0275text(44, " La pr\xE9cision GPS doit \xEAtre inf\xE9rieure \xE0 15m pour soumettre l'inspection ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "button", 24);
        \u0275\u0275text(46, " Soumettre l'incident ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.incidentForm);
        \u0275\u0275advance(4);
        \u0275\u0275property("readonly", ctx.scanning);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.scanning);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.scanning ? "Scan en cours..." : "Scanner le QR Code", " ");
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(14);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.selectedFile);
        \u0275\u0275advance(6);
        \u0275\u0275styleProp("width", ctx.Math.max(0, 15 - ctx.gpsAccuracy) / 15 * 100 + "%");
        \u0275\u0275classProp("progress-bar-success", ctx.gpsAccuracy <= 5)("progress-bar-warning", ctx.gpsAccuracy > 5 && ctx.gpsAccuracy <= 10)("progress-bar-danger", ctx.gpsAccuracy > 10);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 15, ctx.gpsAccuracy, "1.1-1"), " m ");
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.incidentForm.invalid || !ctx.canSubmit);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DecimalPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentLogComponent, [{
    type: Component,
    args: [{
      selector: "app-incident-log",
      imports: [CommonModule, ReactiveFormsModule],
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
            placeholder="Entrez l'ID d'\xE9tat de l'actif (ex: FLEET-000123)"
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
            <option value="">S\xE9lectionner...</option>
            <option value="Fonctionnel">Fonctionnel</option>
            <option value="En Panne">En Panne</option>
            <option value="D\xE9class\xE9">D\xE9class\xE9</option>
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
          <label for="defectImage" class="form-label">Image du d\xE9faut</label>
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
          <label class="form-label">Pr\xE9cision GPS</label>
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
            La pr\xE9cision GPS doit \xEAtre inf\xE9rieure \xE0 15m pour soumettre l'inspection
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
    }]
  }], () => [{ type: FormBuilder }, { type: IncidentService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentLogComponent, { className: "IncidentLogComponent", filePath: "src/app/features/incidents/incident-log.component.ts", lineNumber: 115 });
})();
export {
  IncidentLogComponent
};
//# debugId=d761b28e-fa06-5e12-b949-03baed29915d
//# sourceMappingURL=chunk-WCIGZECW.js.map
