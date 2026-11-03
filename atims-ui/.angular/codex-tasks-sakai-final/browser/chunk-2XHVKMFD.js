import {
  Button,
  ButtonModule,
  Table,
  TableModule,
  Tag,
  TagModule
} from "./chunk-46A7EVRP.js";
import "./chunk-ZBRJC7FJ.js";
import {
  FormsModule,
  RouterModule
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
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UCY5OEF2.js";

// src/app/features/tasks/task.service.ts
var TaskService = class _TaskService {
  http;
  apiUrl = `${environment.apiBase}/tasks`;
  constructor(http) {
    this.http = http;
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
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
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
var _c0 = () => [10, 20, 50];
var _c1 = () => ({ "min-width": "48rem" });
var _c2 = () => ({ "min-width": "42rem" });
function TasksComponent_Conditional_27_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 18);
    \u0275\u0275text(10, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function TasksComponent_Conditional_27_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 22)(13, "p-button", 23);
    \u0275\u0275listener("onClick", function TasksComponent_Conditional_27_ng_template_12_Template_p_button_onClick_13_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewTask(task_r2.id));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", task_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r2.asset_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", task_r2.status)("severity", ctx_r2.getTaskStatusSeverity(task_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.due_date ? \u0275\u0275pipeBind2(11, 6, task_r2.due_date, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("outlined", true);
  }
}
function TasksComponent_Conditional_27_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "No tasks assigned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Tasks assigned to you will appear here.");
    \u0275\u0275elementEnd()()();
  }
}
function TasksComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 15)(2, "div")(3, "h2");
    \u0275\u0275text(4, "My Assigned Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Work assigned to your account.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-table", 17);
    \u0275\u0275template(10, TasksComponent_Conditional_27_ng_template_10_Template, 11, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, TasksComponent_Conditional_27_ng_template_12_Template, 14, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, TasksComponent_Conditional_27_ng_template_14_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.assignedTasks.length, " tasks");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.assignedTasks)("paginator", ctx_r2.assignedTasks.length > 10)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(8, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(9, _c1));
  }
}
function TasksComponent_Conditional_28_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 18);
    \u0275\u0275text(8, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function TasksComponent_Conditional_28_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 22)(11, "p-button", 26);
    \u0275\u0275listener("onClick", function TasksComponent_Conditional_28_ng_template_12_Template_p_button_onClick_11_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.assignTask(task_r5.id));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", task_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r5.asset_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.created_at ? \u0275\u0275pipeBind2(9, 4, task_r5.created_at, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("outlined", true);
  }
}
function TasksComponent_Conditional_28_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "The queue is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Unassigned tasks will appear here.");
    \u0275\u0275elementEnd()()();
  }
}
function TasksComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 15)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Global Queue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Unassigned tasks available to pick up.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-table", 17);
    \u0275\u0275template(10, TasksComponent_Conditional_28_ng_template_10_Template, 9, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, TasksComponent_Conditional_28_ng_template_12_Template, 12, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, TasksComponent_Conditional_28_ng_template_14_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.globalQueue.length, " tasks");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.globalQueue)("paginator", ctx_r2.globalQueue.length > 10)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(8, _c0))("rowHover", true)("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(9, _c2));
  }
}
var TasksComponent = class _TasksComponent {
  taskService;
  activeTab = "assigned";
  assignedTasks = [];
  globalQueue = [];
  constructor(taskService) {
    this.taskService = taskService;
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
  getTaskStatusSeverity(status) {
    const severities = {
      Pending: "warn",
      Assigned: "info",
      "In Progress": "info",
      Completed: "success",
      Cancelled: "secondary"
    };
    return severities[status] ?? "secondary";
  }
  viewTask(id) {
    console.log("View task:", id);
  }
  assignTask(id) {
    console.log("Assign task:", id);
  }
  static \u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksComponent)(\u0275\u0275directiveInject(TaskService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], standalone: false, decls: 29, vars: 6, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "tasks-page"], [1, "page-heading"], [1, "task-summary-grid"], [1, "card", "summary-card"], [1, "summary-icon", "summary-icon--blue"], [1, "pi", "pi-list-check"], [1, "summary-icon", "summary-icon--green"], [1, "pi", "pi-inbox"], ["aria-label", "Task views", 1, "task-tabs"], ["label", "My Tasks", "icon", "pi pi-list-check", 3, "onClick", "outlined"], ["label", "Global Queue", "icon", "pi pi-inbox", "severity", "secondary", 3, "onClick", "outlined"], [1, "card", "task-table-card"], [1, "table-heading"], [1, "table-count"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} tasks", "styleClass", "tasks-table", 3, "value", "paginator", "rows", "rowsPerPageOptions", "rowHover", "showCurrentPageReport", "tableStyle"], [1, "actions-column"], [1, "task-id"], [1, "asset-name"], [3, "value", "severity"], [1, "actions-cell"], ["label", "View", "icon", "pi pi-eye", "severity", "secondary", "size", "small", 3, "onClick", "outlined"], ["colspan", "5", 1, "empty-cell"], [1, "pi", "pi-check-circle"], ["label", "Assign to me", "icon", "pi pi-user-plus", "severity", "success", "size", "small", 3, "onClick", "outlined"], ["colspan", "4", 1, "empty-cell"]], template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 3)(1, "header", 4)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Task Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Review assigned work and pick up tasks from the global queue.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div")(12, "span");
      \u0275\u0275text(13, "My Tasks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "strong");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 6)(17, "div", 9);
      \u0275\u0275element(18, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div")(20, "span");
      \u0275\u0275text(21, "Global Queue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "strong");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "nav", 11)(25, "p-button", 12);
      \u0275\u0275listener("onClick", function TasksComponent_Template_p_button_onClick_25_listener() {
        return ctx.activeTab = "assigned";
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-button", 13);
      \u0275\u0275listener("onClick", function TasksComponent_Template_p_button_onClick_26_listener() {
        return ctx.activeTab = "global";
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(27, TasksComponent_Conditional_27_Template, 16, 10, "section", 14);
      \u0275\u0275conditionalCreate(28, TasksComponent_Conditional_28_Template, 16, 10, "section", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.assignedTasks.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.globalQueue.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", ctx.activeTab !== "assigned");
      \u0275\u0275advance();
      \u0275\u0275property("outlined", ctx.activeTab !== "global");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "assigned" ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "global" ? 28 : -1);
    }
  }, dependencies: [Button, Table, Tag, DatePipe], styles: ["\n.tasks-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.task-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.1rem 1.25rem;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  place-items: center;\n  flex: 0 0 auto;\n  border-radius: 0.75rem;\n  font-size: 1.15rem;\n}\n.summary-icon--blue[_ngcontent-%COMP%] {\n  color: var(--blue-600, #2563eb);\n  background: color-mix(in srgb, var(--blue-500, #3b82f6) 13%, transparent);\n}\n.summary-icon--green[_ngcontent-%COMP%] {\n  color: var(--green-600, #16a34a);\n  background: color-mix(in srgb, var(--green-500, #22c55e) 13%, transparent);\n}\n.summary-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.table-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.task-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.task-table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.table-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem 0.85rem;\n}\n.table-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  line-height: 1.4;\n  font-weight: 600;\n}\n.table-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n}\n.table-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.task-id[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.asset-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.actions-column[_ngcontent-%COMP%], \n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  padding: 2.5rem 1rem !important;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.empty-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.empty-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.empty-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 0.65rem;\n  color: var(--primary-color);\n  font-size: 1.5rem;\n}\n.empty-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .tasks-table .p-datatable-thead > tr > th {\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .task-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .task-tabs[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .table-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=tasks.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", template: `
    <section class="tasks-page">
      <header class="page-heading">
        <div>
          <h1>Task Management</h1>
          <p>Review assigned work and pick up tasks from the global queue.</p>
        </div>
      </header>

      <div class="task-summary-grid">
        <div class="card summary-card">
          <div class="summary-icon summary-icon--blue"><i class="pi pi-list-check"></i></div>
          <div><span>My Tasks</span><strong>{{ assignedTasks.length }}</strong></div>
        </div>
        <div class="card summary-card">
          <div class="summary-icon summary-icon--green"><i class="pi pi-inbox"></i></div>
          <div><span>Global Queue</span><strong>{{ globalQueue.length }}</strong></div>
        </div>
      </div>

      <nav class="task-tabs" aria-label="Task views">
        <p-button label="My Tasks" icon="pi pi-list-check" [outlined]="activeTab !== 'assigned'" (onClick)="activeTab = 'assigned'" />
        <p-button label="Global Queue" icon="pi pi-inbox" [outlined]="activeTab !== 'global'" severity="secondary" (onClick)="activeTab = 'global'" />
      </nav>

      @if (activeTab === 'assigned') {
        <section class="card task-table-card">
          <div class="table-heading">
            <div>
              <h2>My Assigned Tasks</h2>
              <p>Work assigned to your account.</p>
            </div>
            <span class="table-count">{{ assignedTasks.length }} tasks</span>
          </div>
          <p-table
            [value]="assignedTasks"
            dataKey="id"
            [paginator]="assignedTasks.length > 10"
            [rows]="10"
            [rowsPerPageOptions]="[10, 20, 50]"
            [rowHover]="true"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tasks"
            [tableStyle]="{ 'min-width': '48rem' }"
            styleClass="tasks-table"
          >
            <ng-template #header>
              <tr><th>Task</th><th>Asset</th><th>Status</th><th>Due date</th><th class="actions-column">Actions</th></tr>
            </ng-template>
            <ng-template #body let-task>
              <tr>
                <td><span class="task-id">#{{ task.id }}</span></td>
                <td><span class="asset-name">{{ task.asset_name || '\u2014' }}</span></td>
                <td><p-tag [value]="task.status" [severity]="getTaskStatusSeverity(task.status)" /></td>
                <td>{{ task.due_date ? (task.due_date | date: 'mediumDate') : '\u2014' }}</td>
                <td class="actions-cell"><p-button label="View" icon="pi pi-eye" severity="secondary" [outlined]="true" size="small" (onClick)="viewTask(task.id)" /></td>
              </tr>
            </ng-template>
            <ng-template #emptymessage>
              <tr><td colspan="5" class="empty-cell"><i class="pi pi-check-circle"></i><strong>No tasks assigned</strong><span>Tasks assigned to you will appear here.</span></td></tr>
            </ng-template>
          </p-table>
        </section>
      }

      @if (activeTab === 'global') {
        <section class="card task-table-card">
          <div class="table-heading">
            <div>
              <h2>Global Queue</h2>
              <p>Unassigned tasks available to pick up.</p>
            </div>
            <span class="table-count">{{ globalQueue.length }} tasks</span>
          </div>
          <p-table
            [value]="globalQueue"
            dataKey="id"
            [paginator]="globalQueue.length > 10"
            [rows]="10"
            [rowsPerPageOptions]="[10, 20, 50]"
            [rowHover]="true"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tasks"
            [tableStyle]="{ 'min-width': '42rem' }"
            styleClass="tasks-table"
          >
            <ng-template #header>
              <tr><th>Task</th><th>Asset</th><th>Created</th><th class="actions-column">Actions</th></tr>
            </ng-template>
            <ng-template #body let-task>
              <tr>
                <td><span class="task-id">#{{ task.id }}</span></td>
                <td><span class="asset-name">{{ task.asset_name || '\u2014' }}</span></td>
                <td>{{ task.created_at ? (task.created_at | date: 'medium') : '\u2014' }}</td>
                <td class="actions-cell"><p-button label="Assign to me" icon="pi pi-user-plus" severity="success" [outlined]="true" size="small" (onClick)="assignTask(task.id)" /></td>
              </tr>
            </ng-template>
            <ng-template #emptymessage>
              <tr><td colspan="4" class="empty-cell"><i class="pi pi-inbox"></i><strong>The queue is empty</strong><span>Unassigned tasks will appear here.</span></td></tr>
            </ng-template>
          </p-table>
        </section>
      }
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, styles: ["/* angular:styles/component:scss;3937c616136177c745f7b3807d216d914526697e93abe5d049be2ee745beb947;C:/xampp/htdocs/atims/atims-ui/src/app/features/tasks/tasks.component.ts */\n.tasks-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading p {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.task-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.summary-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.1rem 1.25rem;\n}\n.summary-icon {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  place-items: center;\n  flex: 0 0 auto;\n  border-radius: 0.75rem;\n  font-size: 1.15rem;\n}\n.summary-icon--blue {\n  color: var(--blue-600, #2563eb);\n  background: color-mix(in srgb, var(--blue-500, #3b82f6) 13%, transparent);\n}\n.summary-icon--green {\n  color: var(--green-600, #16a34a);\n  background: color-mix(in srgb, var(--green-500, #22c55e) 13%, transparent);\n}\n.summary-card > div:last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.summary-card span,\n.table-heading p {\n  color: var(--text-color-secondary);\n}\n.summary-card strong {\n  font-size: 1.35rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.task-tabs {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.task-table-card {\n  padding: 0;\n  overflow: hidden;\n}\n.table-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem 0.85rem;\n}\n.table-heading h2 {\n  margin: 0;\n  font-size: 1.15rem;\n  line-height: 1.4;\n  font-weight: 600;\n}\n.table-heading p {\n  margin: 0.25rem 0 0;\n}\n.table-count {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.task-id {\n  color: var(--text-color-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.asset-name {\n  font-weight: 600;\n}\n.actions-column,\n.actions-cell {\n  text-align: right;\n  white-space: nowrap;\n}\n.empty-cell {\n  padding: 2.5rem 1rem !important;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.empty-cell i,\n.empty-cell strong,\n.empty-cell span {\n  display: block;\n}\n.empty-cell i {\n  margin-bottom: 0.65rem;\n  color: var(--primary-color);\n  font-size: 1.5rem;\n}\n.empty-cell strong {\n  margin-bottom: 0.25rem;\n  color: var(--text-color);\n}\n:host ::ng-deep .tasks-table .p-datatable-thead > tr > th {\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .task-summary-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .task-tabs {\n    align-items: stretch;\n  }\n  .table-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=tasks.component.css.map */\n"] }]
  }], () => [{ type: TaskService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/features/tasks/tasks.component.ts", lineNumber: 148 });
})();

// src/app/features/tasks/tasks-routing.module.ts
var routes = [
  {
    path: "",
    component: TasksComponent,
    data: { title: "Task Management" }
  }
];
var TasksRoutingModule = class _TasksRoutingModule {
  static \u0275fac = function TasksRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
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
  static \u0275fac = function TasksModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [TaskService], imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    ButtonModule,
    TableModule,
    TagModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksModule, [{
    type: NgModule,
    args: [{
      declarations: [TasksComponent],
      imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule,
        ButtonModule,
        TableModule,
        TagModule
      ],
      providers: [TaskService]
    }]
  }], null, null);
})();
export {
  TasksModule
};
//# sourceMappingURL=chunk-2XHVKMFD.js.map
