import {
  RouterModule
} from "./chunk-74YMUZCQ.js";
import {
  FormsModule
} from "./chunk-2VERUPVP.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  NgModule,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ALNKFEZR.js";

// src/app/features/tasks/task.service.ts
var TaskService = class _TaskService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiBase}/tasks`;
  }
  getTasks() {
    return this.http.get(this.apiUrl);
  }
  getGlobalQueue() {
    return this.http.get(`${this.apiUrl}/global-queue`);
  }
  assignTask(assetId, assignedUserId) {
    return this.http.post(`${this.apiUrl}/assign`, {
      asset_id: assetId,
      assigned_user_id: assignedUserId
    });
  }
  updateTaskStatus(id, status) {
    return this.http.put(`${this.apiUrl}/${id}`, { status });
  }
  cancelTask(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function TaskService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaskService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/tasks/tasks.component.ts
function TasksComponent_Conditional_8_Conditional_4_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 8);
    \u0275\u0275listener("click", function TasksComponent_Conditional_8_Conditional_4_For_15_Template_button_click_12_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewTask(task_r2.id));
    });
    \u0275\u0275text(13, " Voir ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.asset_name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bg-" + ctx_r2.getTaskStatusColor(task_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, task_r2.due_date, "shortDate"));
  }
}
function TasksComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 6)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date d'\xE9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, TasksComponent_Conditional_8_Conditional_4_For_15_Template, 14, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.assignedTasks);
  }
}
function TasksComponent_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune t\xE2che assign\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3");
    \u0275\u0275text(3, "Mes T\xE2ches Assign\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TasksComponent_Conditional_8_Conditional_4_Template, 16, 0, "table", 6)(5, TasksComponent_Conditional_8_Conditional_5_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.assignedTasks?.length ? 4 : 5);
  }
}
function TasksComponent_Conditional_9_Conditional_6_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "button", 10);
    \u0275\u0275listener("click", function TasksComponent_Conditional_9_Conditional_6_For_13_Template_button_click_9_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.assignTask(task_r5.id));
    });
    \u0275\u0275text(10, " Assigner ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.asset_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, task_r5.created_at, "short"));
  }
}
function TasksComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 6)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, TasksComponent_Conditional_9_Conditional_6_For_13_Template, 11, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.globalQueue);
  }
}
function TasksComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune t\xE2che dans la file d'attente.");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3");
    \u0275\u0275text(3, "File d'Attente Globale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, "T\xE2ches non assign\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TasksComponent_Conditional_9_Conditional_6_Template, 14, 0, "table", 6)(7, TasksComponent_Conditional_9_Conditional_7_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.globalQueue?.length ? 6 : 7);
  }
}
var TasksComponent = class _TasksComponent {
  constructor(taskService) {
    this.taskService = taskService;
    this.activeTab = "assigned";
    this.assignedTasks = [];
    this.globalQueue = [];
  }
  ngOnInit() {
    this.loadAssignedTasks();
    this.loadGlobalQueue();
  }
  loadAssignedTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.assignedTasks = tasks;
    });
  }
  loadGlobalQueue() {
    this.taskService.getGlobalQueue().subscribe((tasks) => {
      this.globalQueue = tasks;
    });
  }
  getTaskStatusColor(status) {
    const colors = {
      "Pending": "warning",
      "Assigned": "primary",
      "In Progress": "info",
      "Completed": "success",
      "Cancelled": "secondary"
    };
    return colors[status] || "secondary";
  }
  viewTask(id) {
    console.log("View task:", id);
  }
  assignTask(id) {
    console.log("Assign task:", id);
  }
  static {
    this.\u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksComponent)(\u0275\u0275directiveInject(TaskService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], standalone: false, decls: 10, vars: 2, consts: [[1, "container"], [1, "tabs", "mb-3"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "card"], [1, "card-body"], [1, "table"], [1, "badge"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "text-muted"], [1, "btn", "btn-sm", "btn-success", 3, "click"]], template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Gestion des T\xE2ches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
        \u0275\u0275listener("click", function TasksComponent_Template_button_click_4_listener() {
          return ctx.activeTab = "assigned";
        });
        \u0275\u0275text(5, "Mes T\xE2ches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function TasksComponent_Template_button_click_6_listener() {
          return ctx.activeTab = "global";
        });
        \u0275\u0275text(7, "File d'Attente Globale");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, TasksComponent_Conditional_8_Template, 6, 1, "div", 4);
        \u0275\u0275conditionalCreate(9, TasksComponent_Conditional_9_Template, 8, 1, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.activeTab === "assigned" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "global" ? 9 : -1);
      }
    }, dependencies: [DatePipe], encapsulation: 2, changeDetection: 1 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{
      selector: "app-tasks",
      template: `
    <div class="container">
      <h1>Gestion des T\xE2ches</h1>
    
      <!-- Tabs -->
      <div class="tabs mb-3">
        <button class="btn btn-primary" (click)="activeTab = 'assigned'">Mes T\xE2ches</button>
        <button class="btn btn-outline-primary" (click)="activeTab = 'global'">File d'Attente Globale</button>
      </div>
    
      <!-- Assigned Tasks -->
      @if (activeTab === 'assigned') {
        <div class="card">
          <div class="card-body">
            <h3>Mes T\xE2ches Assign\xE9es</h3>
            @if (assignedTasks?.length) {
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Actif</th>
                    <th>Statut</th>
                    <th>Date d'\xE9ch\xE9ance</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (task of assignedTasks; track task) {
                    <tr>
                      <td>{{ task.id }}</td>
                      <td>{{ task.asset_name }}</td>
                      <td>
                        <span class="badge" [class]="'bg-' + getTaskStatusColor(task.status)">{{ task.status }}</span>
                      </td>
                      <td>{{ task.due_date | date:'shortDate' }}</td>
                      <td>
                        <button class="btn btn-sm btn-primary" (click)="viewTask(task.id)">
                          Voir
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            } @else {
              <p>Aucune t\xE2che assign\xE9e.</p>
            }
          </div>
        </div>
      }
    
      <!-- Global Queue -->
      @if (activeTab === 'global') {
        <div class="card">
          <div class="card-body">
            <h3>File d'Attente Globale</h3>
            <p class="text-muted">T\xE2ches non assign\xE9es</p>
            @if (globalQueue?.length) {
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Actif</th>
                    <th>Cr\xE9\xE9 le</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (task of globalQueue; track task) {
                    <tr>
                      <td>{{ task.id }}</td>
                      <td>{{ task.asset_name }}</td>
                      <td>{{ task.created_at | date:'short' }}</td>
                      <td>
                        <button class="btn btn-sm btn-success" (click)="assignTask(task.id)">
                          Assigner
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            } @else {
              <p>Aucune t\xE2che dans la file d'attente.</p>
            }
          </div>
        </div>
      }
    </div>
    `,
      changeDetection: ChangeDetectionStrategy.Eager,
      standalone: false
    }]
  }], () => [{ type: TaskService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/features/tasks/tasks.component.ts", lineNumber: 99 });
})();

// src/app/features/tasks/tasks-routing.module.ts
var routes = [
  {
    path: "",
    component: TasksComponent,
    data: { title: "Gestion des T\xE2ches" }
  }
];
var TasksRoutingModule = class _TasksRoutingModule {
  static {
    this.\u0275fac = function TasksRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/tasks/tasks.module.ts
var TasksModule = class _TasksModule {
  static {
    this.\u0275fac = function TasksModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [TaskService], imports: [
      CommonModule,
      FormsModule,
      TasksRoutingModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksModule, [{
    type: NgModule,
    args: [{
      declarations: [TasksComponent],
      imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule
      ],
      providers: [TaskService]
    }]
  }], null, null);
})();
export {
  TasksModule
};
//# debugId=70006ae2-b76b-5ca0-ba27-10653d9bcf72
//# sourceMappingURL=chunk-5ILE5CL6.js.map
