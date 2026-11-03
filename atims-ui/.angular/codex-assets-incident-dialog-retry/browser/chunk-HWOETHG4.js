import {
  Button,
  ButtonModule,
  Dialog,
  DialogModule,
  IconField,
  IconFieldModule,
  IncidentLogComponent,
  IncidentService,
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
} from "./chunk-4F5VSP5K.js";
import {
  ConfirmationService,
  MessageService,
  ToggleButton,
  ToggleButtonModule
} from "./chunk-ZBRJC7FJ.js";
import "./chunk-3HOLFFTT.js";
import {
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
} from "./chunk-6GZMF7H4.js";
import "./chunk-3TD3PA7B.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UCY5OEF2.js";

// src/app/features/incidents/incident-list.component.ts
var _c0 = () => [10, 20, 50];
var _c1 = () => ({ "min-width": "68rem" });
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
  onIncidentLogged(uploadFailed) {
    this.logDialogVisible = false;
    this.includeHistory = false;
    this.first = 0;
    this.messageService.add(uploadFailed ? { severity: "warn", summary: "Incident logged; image upload failed", detail: "The incident was recorded, but the image could not be attached." } : { severity: "success", summary: "Incident logged", detail: "The asset has been marked out of service." });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentListComponent, selectors: [["app-incident-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 43, vars: 42, consts: [["incidentTable", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], [1, "incidents-page"], [1, "page-heading"], [1, "incident-count"], [1, "card", "incidents-table-card"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} incidents", "styleClass", "incidents-table", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "first", "totalRecords", "rowsPerPageOptions", "loading", "rowHover", "showCurrentPageReport", "tableStyle"], ["header", "Log Incident", 3, "visibleChange", "visible", "modal", "draggable", "contentStyle"], [3, "logged"], ["header", "Verify repair", 3, "visibleChange", "visible", "modal", "draggable", "closable"], [1, "verify-form", 3, "ngSubmit", "formGroup"], ["class", "verify-asset-summary", 4, "ngIf"], [1, "form-field"], ["for", "resolution-notes"], [1, "required-mark"], ["pTextarea", "", "id", "resolution-notes", "formControlName", "fieldNotes", "rows", "4", "maxlength", "1000", "placeholder", "Describe the repair and work completed."], ["class", "field-error", 4, "ngIf"], [1, "verify-location"], [4, "ngIf"], ["type", "button", "icon", "pi pi-map-marker", "severity", "secondary", 3, "onClick", "label", "outlined", "loading", "disabled"], [1, "incidents-toolbar"], [1, "toolbar-filters"], ["iconPosition", "left", 1, "search-field"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search asset, State ID or notes", "aria-label", "Search incidents", 3, "input", "value"], ["onLabel", "Open Incidents", "offLabel", "Incident History", "onIcon", "pi pi-inbox", "offIcon", "pi pi-history", "ariaLabel", "Include incident history", 3, "ngModelChange", "onChange", "ngModel"], ["label", "Log Incident", "icon", "pi pi-plus", 3, "onClick", "outlined"], [1, "state-column"], [1, "asset-column"], [1, "notes-column"], [1, "status-column"], [1, "date-column"], [1, "actions-column"], [1, "state-id"], [1, "asset-name"], [1, "notes-cell"], [3, "value", "severity"], [1, "actions-cell"], ["icon", "pi pi-check-circle", "severity", "success", 3, "label", "outlined", "onClick", 4, "ngIf"], ["class", "muted", 4, "ngIf"], ["icon", "pi pi-check-circle", "severity", "success", 3, "onClick", "label", "outlined"], [1, "muted"], ["colspan", "7", 1, "empty-cell"], [1, "verify-asset-summary"], [1, "field-error"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text", "disabled"], ["label", "Verify repair", "icon", "pi pi-check", "severity", "success", 3, "onClick", "loading", "disabled"]], template: function IncidentListComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("logged", function IncidentListComponent_Template_app_incident_log_logged_22_listener($event) {
        return ctx.onIncidentLogged($event);
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
      \u0275\u0275property("value", ctx.incidents)("lazy", true)("paginator", true)("rows", ctx.rows)("first", ctx.first)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", \u0275\u0275pureFunction0(37, _c0))("loading", ctx.loading)("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(38, _c1));
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
                  onLabel="Open Incidents"
                  offLabel="Incident History"
                  onIcon="pi pi-inbox"
                  offIcon="pi pi-history"
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
      <app-incident-log (logged)="onIncidentLogged($event)" />
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
//# sourceMappingURL=chunk-HWOETHG4.js.map
