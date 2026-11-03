import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  RouterModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-6GZMF7H4.js";
import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UCY5OEF2.js";

// src/app/features/reports/report.service.ts
var ReportService = class _ReportService {
  http;
  apiUrl = `${environment.apiBase}/reports`;
  constructor(http) {
    this.http = http;
  }
  generateReport(data) {
    return this.http.post(`${this.apiUrl}/generate`, data);
  }
  getReports() {
    return this.http.get(`${this.apiUrl}`);
  }
  downloadReport(id, format) {
    const params = new HttpParams().set("format", format);
    return this.http.get(`${this.apiUrl}/${id}`, {
      params,
      responseType: "blob"
    });
  }
  static \u0275fac = function ReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/reports/reports.component.ts
function ReportsComponent_Conditional_72_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 39)(2, "div", 40)(3, "h5", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275interpolate(report_r1.url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(report_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, report_r1.created_at, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(report_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Format: ", report_r1.format);
  }
}
function ReportsComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, ReportsComponent_Conditional_72_For_2_Template, 12, 9, "div", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.generatedReports);
  }
}
function ReportsComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No reports have been generated.");
    \u0275\u0275elementEnd();
  }
}
var ReportsComponent = class _ReportsComponent {
  fb;
  reportService;
  reportForm;
  generatedReports = [];
  constructor(fb, reportService) {
    this.fb = fb;
    this.reportService = reportService;
  }
  ngOnInit() {
    this.reportForm = this.fb.group({
      reportType: ["asset-inventory"],
      department: [""],
      status: [""],
      startDate: [""],
      endDate: [""],
      outputFormat: ["pdf"]
    });
    this.loadGeneratedReports();
  }
  generateReport() {
    if (this.reportForm.invalid) {
      return;
    }
    const formData = this.reportForm.value;
    this.reportService.generateReport(formData).subscribe({
      next: (response) => {
        alert("Report generated successfully.");
        this.loadGeneratedReports();
      },
      error: (error) => {
        console.error("Error generating report:", error);
        alert("Unable to generate the report.");
      }
    });
  }
  loadGeneratedReports() {
    this.reportService.getReports().subscribe((reports) => {
      this.generatedReports = reports;
    });
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ReportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: false, decls: 74, vars: 2, consts: [[1, "container"], [1, "card"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "reportType", 1, "form-label"], ["id", "reportType", "formControlName", "reportType", 1, "form-select"], ["value", "asset-inventory"], ["value", "incident-summary"], ["value", "inspection-history"], ["value", "asset-status"], ["for", "department", 1, "form-label"], ["id", "department", "formControlName", "department", 1, "form-select"], ["value", ""], ["value", "transport"], ["value", "energy"], ["value", "water"], ["value", "infrastructure"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-select"], ["value", "Fonctionnel"], ["value", "En Panne"], ["value", "D\xE9class\xE9"], ["value", "Inconnu"], [1, "row", "mb-3"], [1, "col-md-6"], ["for", "startDate", 1, "form-label"], ["type", "date", "id", "startDate", "formControlName", "startDate", 1, "form-control"], ["for", "endDate", 1, "form-label"], ["type", "date", "id", "endDate", "formControlName", "endDate", 1, "form-control"], ["for", "outputFormat", 1, "form-label"], ["id", "outputFormat", "formControlName", "outputFormat", 1, "form-select"], ["value", "pdf"], ["value", "excel"], ["value", "csv"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card", "mt-4"], [1, "card-header"], [1, "list-group"], [1, "list-group-item", "list-group-item-action", 3, "href"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "text-muted"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Report Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "form", 3);
      \u0275\u0275listener("ngSubmit", function ReportsComponent_Template_form_ngSubmit_5_listener() {
        return ctx.generateReport();
      });
      \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
      \u0275\u0275text(8, "Report Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "select", 6)(10, "option", 7);
      \u0275\u0275text(11, "Asset Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 8);
      \u0275\u0275text(13, "Incident Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "Inspection History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Asset Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 4)(19, "label", 11);
      \u0275\u0275text(20, "Department / Ministry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 12)(22, "option", 13);
      \u0275\u0275text(23, "All Departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "Transport");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 15);
      \u0275\u0275text(27, "Energy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 16);
      \u0275\u0275text(29, "Water");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 17);
      \u0275\u0275text(31, "Infrastructure");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 4)(33, "label", 18);
      \u0275\u0275text(34, "Asset Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 19)(36, "option", 13);
      \u0275\u0275text(37, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 20);
      \u0275\u0275text(39, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 21);
      \u0275\u0275text(41, "Out of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 22);
      \u0275\u0275text(43, "Decommissioned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 23);
      \u0275\u0275text(45, "Unknown");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 24)(47, "div", 25)(48, "label", 26);
      \u0275\u0275text(49, "Start Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 25)(52, "label", 28);
      \u0275\u0275text(53, "End Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "input", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 4)(56, "label", 30);
      \u0275\u0275text(57, "Output Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "select", 31)(59, "option", 32);
      \u0275\u0275text(60, "PDF (Form)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 33);
      \u0275\u0275text(62, "Excel (.xlsx)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "option", 34);
      \u0275\u0275text(64, "CSV (Raw Data)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "button", 35);
      \u0275\u0275text(66, "Generate Report");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 36)(68, "div", 37)(69, "h5");
      \u0275\u0275text(70, "Generated Reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 2);
      \u0275\u0275conditionalCreate(72, ReportsComponent_Conditional_72_Template, 3, 0, "div")(73, ReportsComponent_Conditional_73_Template, 2, 0, "p");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.reportForm);
      \u0275\u0275advance(67);
      \u0275\u0275conditional(ctx.generatedReports.length ? 72 : 73);
    }
  }, dependencies: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{
      selector: "app-reports",
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
                <option value="D\xE9class\xE9">Decommissioned</option>
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
    }]
  }], () => [{ type: FormBuilder }, { type: ReportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/features/reports/reports.component.ts", lineNumber: 108 });
})();

// src/app/features/reports/reports-routing.module.ts
var routes = [
  {
    path: "",
    component: ReportsComponent,
    data: { title: "Reports" }
  }
];
var ReportsRoutingModule = class _ReportsRoutingModule {
  static \u0275fac = function ReportsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/reports/reports.module.ts
var ReportsModule = class _ReportsModule {
  static \u0275fac = function ReportsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ReportService], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsModule, [{
    type: NgModule,
    args: [{
      declarations: [ReportsComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReportsRoutingModule
      ],
      providers: [ReportService]
    }]
  }], null, null);
})();
export {
  ReportsModule
};
//# sourceMappingURL=chunk-6MPAEWYL.js.map
