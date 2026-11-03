import {
  Button,
  ButtonModule,
  InputText,
  InputTextModule,
  Tag,
  TagModule,
  Textarea,
  TextareaModule,
  Toast,
  ToastModule
} from "./chunk-AECKOZHM.js";
import {
  MessageService
} from "./chunk-KXAAQBCP.js";
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
} from "./chunk-RTB46CEW.js";
import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Y6V57HJQ.js";

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
      field_notes: incident.fieldNotes
    });
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
function IncidentLogComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "Asset State ID is required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "Incident notes are required.");
    \u0275\u0275elementEnd();
  }
}
function IncidentLogComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "Notes must be 1000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
var IncidentLogComponent = class _IncidentLogComponent {
  fb;
  incidentService;
  route;
  messageService;
  incidentForm;
  submitting = false;
  constructor(fb, incidentService, route, messageService) {
    this.fb = fb;
    this.incidentService = incidentService;
    this.route = route;
    this.messageService = messageService;
    this.incidentForm = this.fb.group({
      qrCodeData: ["", [Validators.required, Validators.maxLength(255)]],
      fieldNotes: ["", [Validators.required, Validators.maxLength(1e3)]]
    });
  }
  ngOnInit() {
    const selectedAsset = this.route.snapshot.queryParamMap.get("asset");
    if (selectedAsset)
      this.incidentForm.patchValue({ qrCodeData: selectedAsset });
  }
  onSubmit() {
    this.incidentForm.markAllAsTouched();
    if (this.incidentForm.invalid || this.submitting)
      return;
    const { qrCodeData, fieldNotes } = this.incidentForm.getRawValue();
    this.submitting = true;
    this.incidentService.logIncident({ qrCodeData: qrCodeData.trim(), fieldNotes: fieldNotes.trim() }).subscribe({
      next: () => {
        this.submitting = false;
        this.incidentForm.controls.fieldNotes.reset("");
        this.messageService.add({ severity: "success", summary: "Incident logged", detail: "The asset has been marked out of service." });
      },
      error: (error) => {
        this.submitting = false;
        const detail = error?.status === 404 ? "No asset was found with that State ID." : "The incident could not be submitted. Please try again.";
        this.messageService.add({ severity: "error", summary: "Incident not logged", detail });
      }
    });
  }
  static \u0275fac = function IncidentLogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidentLogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IncidentService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentLogComponent, selectors: [["app-incident-log"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 68, vars: 9, consts: [[1, "incident-page"], [1, "page-heading"], ["value", "Asset will be marked out of service", "severity", "warn", "icon", "pi pi-exclamation-triangle"], [1, "incident-layout"], [1, "card", "incident-form-card"], [1, "section-heading"], [1, "section-icon"], [1, "pi", "pi-file-edit"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "assetStateId"], [1, "required-mark"], ["pInputText", "", "id", "assetStateId", "formControlName", "qrCodeData", "placeholder", "e.g. FLEET-000123", "autocomplete", "off", "fluid", "", 3, "invalid"], [1, "field-help"], ["class", "field-error", 4, "ngIf"], [1, "label-row"], ["for", "fieldNotes"], [1, "character-count"], ["pTextarea", "", "id", "fieldNotes", "formControlName", "fieldNotes", "rows", "6", "maxlength", "1000", "placeholder", "Describe the issue, when it was noticed, and any relevant details.", "fluid", "", 3, "invalid"], [1, "form-actions"], ["type", "submit", "label", "Submit Incident", "icon", "pi pi-send", 3, "loading", "disabled"], [1, "card", "incident-info-card"], [1, "next-steps"], [1, "step-icon"], [1, "pi", "pi-search"], [1, "pi", "pi-book"], [1, "step-icon", "step-icon--warning"], [1, "pi", "pi-exclamation-triangle"], [1, "info-note"], [1, "pi", "pi-info-circle"], [1, "field-error"]], template: function IncidentLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "section", 0)(2, "header", 1)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Log Incident");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Record an issue affecting an asset.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "p-tag", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "span", 6);
      \u0275\u0275element(13, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "h2");
      \u0275\u0275text(16, "Incident details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Identify the asset and describe the issue.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "form", 8);
      \u0275\u0275listener("ngSubmit", function IncidentLogComponent_Template_form_ngSubmit_19_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 10);
      \u0275\u0275text(22, "Asset State ID ");
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "input", 12);
      \u0275\u0275elementStart(26, "small", 13);
      \u0275\u0275text(27, "Enter the State ID printed on the asset label.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, IncidentLogComponent_small_28_Template, 2, 0, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9)(30, "div", 15)(31, "label", 16);
      \u0275\u0275text(32, "Incident notes ");
      \u0275\u0275elementStart(33, "span", 11);
      \u0275\u0275text(34, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "textarea", 18);
      \u0275\u0275template(38, IncidentLogComponent_small_38_Template, 2, 0, "small", 14)(39, IncidentLogComponent_small_39_Template, 2, 0, "small", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 19);
      \u0275\u0275element(41, "p-button", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "aside", 21)(43, "h2");
      \u0275\u0275text(44, "What happens next?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "ul", 22)(46, "li")(47, "span", 23);
      \u0275\u0275element(48, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "The asset is matched by its State ID.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "span", 23);
      \u0275\u0275element(53, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "Your incident notes are recorded.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "span", 26);
      \u0275\u0275element(58, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "The asset is marked ");
      \u0275\u0275elementStart(61, "strong");
      \u0275\u0275text(62, "Out of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " for follow-up.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 28);
      \u0275\u0275element(65, "i", 29);
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "Check the State ID before submitting. The incident endpoint updates the asset status when the incident is accepted.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("formGroup", ctx.incidentForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("invalid", ctx.incidentForm.controls.qrCodeData.touched && ctx.incidentForm.controls.qrCodeData.invalid);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.incidentForm.controls.qrCodeData.touched && ctx.incidentForm.controls.qrCodeData.hasError("required"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", (ctx.incidentForm.controls.fieldNotes.value ?? "").length, "/1000");
      \u0275\u0275advance();
      \u0275\u0275property("invalid", ctx.incidentForm.controls.fieldNotes.touched && ctx.incidentForm.controls.fieldNotes.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidentForm.controls.fieldNotes.touched && ctx.incidentForm.controls.fieldNotes.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidentForm.controls.fieldNotes.hasError("maxlength"));
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", ctx.submitting)("disabled", ctx.submitting);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, ButtonModule, Button, InputTextModule, InputText, TextareaModule, Textarea, TagModule, Tag, ToastModule, Toast], styles: ["\n.incident-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr);\n  align-items: start;\n  gap: 1.25rem;\n}\n.incident-form-card[_ngcontent-%COMP%], \n.incident-info-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.incident-info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.section-icon[_ngcontent-%COMP%], \n.step-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.required-mark[_ngcontent-%COMP%], \n.field-error[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.field-help[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.character-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.25rem;\n}\n.incident-info-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.next-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.next-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n}\n.step-icon--warning[_ngcontent-%COMP%] {\n  color: var(--orange-500, #f59e0b);\n  background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent);\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.5rem;\n  padding: 0.9rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.info-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .incident-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incident-form-card[_ngcontent-%COMP%], \n   .incident-info-card[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n  }\n}\n/*# sourceMappingURL=incident-log.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentLogComponent, [{
    type: Component,
    args: [{ selector: "app-incident-log", standalone: true, imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, TextareaModule, TagModule, ToastModule], providers: [MessageService], template: `
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
              <input
                pInputText
                id="assetStateId"
                formControlName="qrCodeData"
                placeholder="e.g. FLEET-000123"
                autocomplete="off"
                fluid
                [invalid]="incidentForm.controls.qrCodeData.touched && incidentForm.controls.qrCodeData.invalid"
              />
              <small class="field-help">Enter the State ID printed on the asset label.</small>
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

            <div class="form-actions">
              <p-button type="submit" label="Submit Incident" icon="pi pi-send" [loading]="submitting" [disabled]="submitting" />
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
  `, styles: ["/* angular:styles/component:scss;fd92374d268d62d29ab2cbcd1db33df9091660943b2a2794adf0c4d8317d6a9d;C:/xampp/htdocs/atims/atims-ui/src/app/features/incidents/incident-log.component.ts */\n.incident-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading p {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.incident-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.7fr) minmax(17rem, 1fr);\n  align-items: start;\n  gap: 1.25rem;\n}\n.incident-form-card,\n.incident-info-card {\n  padding: 1.5rem;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.section-heading h2,\n.incident-info-card h2 {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.section-heading p {\n  margin: 0.3rem 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n}\n.section-icon,\n.step-icon {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1.35rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field label {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.required-mark,\n.field-error {\n  color: var(--red-500, #ef4444);\n}\n.field-help {\n  color: var(--text-color-secondary);\n}\n.label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.character-count {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.25rem;\n}\n.incident-info-card h2 {\n  margin-bottom: 1.25rem;\n}\n.next-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.next-steps li {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n}\n.step-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n}\n.step-icon--warning {\n  color: var(--orange-500, #f59e0b);\n  background: color-mix(in srgb, var(--orange-500, #f59e0b) 12%, transparent);\n}\n.info-note {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 1.5rem;\n  padding: 0.9rem;\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.info-note i {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .incident-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .incident-form-card,\n  .incident-info-card {\n    padding: 1.1rem;\n  }\n}\n/*# sourceMappingURL=incident-log.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: IncidentService }, { type: ActivatedRoute }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentLogComponent, { className: "IncidentLogComponent", filePath: "src/app/features/incidents/incident-log.component.ts", lineNumber: 123 });
})();
export {
  IncidentLogComponent
};
//# sourceMappingURL=chunk-D3FQN7KC.js.map
