import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RouterModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-URL2GAKC.js";
import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgModule,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-E6HDRDLF.js";

// src/app/features/settings/user.service.ts
var UserService = class _UserService {
  http;
  apiUrl = `${environment.apiBase}/auth`;
  constructor(http) {
    this.http = http;
  }
  getCurrentUser() {
    return this.http.get(`${this.apiUrl}/me`);
  }
  updateProfile(data) {
    return this.http.put(`${this.apiUrl}/me`, data);
  }
  logout() {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => {
        localStorage.removeItem("token");
        location.href = "/login";
      },
      error: () => {
        localStorage.removeItem("token");
        location.href = "/login";
      }
    });
  }
  updateMFA(mfa_enabled) {
    return this.http.patch(`${this.apiUrl}/me/mfa`, { mfa_enabled });
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/settings/settings.component.ts
function SettingsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableMFA());
    });
    \u0275\u0275text(1, " Enable MFA ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disableMFA());
    });
    \u0275\u0275text(1, " Disable MFA ");
    \u0275\u0275elementEnd();
  }
}
var SettingsComponent = class _SettingsComponent {
  fb;
  userService;
  profileForm;
  mfaEnabled = false;
  emailNotifications = true;
  pushNotifications = false;
  smsNotifications = false;
  language = "en";
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      username: [""],
      email: [""],
      phone: [""]
    });
    this.loadSettings();
  }
  loadSettings() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.profileForm.patchValue({
        username: user.username,
        email: user.email,
        phone: user.phone || ""
      });
      this.mfaEnabled = user.mfa_enabled || false;
    });
  }
  updateProfile() {
    if (this.profileForm.valid) {
      this.userService.updateProfile(this.profileForm.value).subscribe({
        next: () => alert("Profile updated."),
        error: (error) => console.error("Error updating profile:", error)
      });
    }
  }
  enableMFA() {
    console.log("Enable MFA");
  }
  disableMFA() {
    console.log("Disable MFA");
  }
  logout() {
    this.userService.logout();
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: false, decls: 67, vars: 11, consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "btn", "btn-primary"], [1, "btn", "btn-danger"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "emailNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "emailNotifications", 1, "form-check-label"], ["type", "checkbox", "id", "pushNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "pushNotifications", 1, "form-check-label"], [1, "form-check"], ["type", "checkbox", "id", "smsNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "smsNotifications", 1, "form-check-label"], ["for", "language", 1, "form-label"], ["id", "language", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "en"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5");
      \u0275\u0275text(8, "Profil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "form", 6);
      \u0275\u0275listener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_10_listener() {
        return ctx.updateProfile();
      });
      \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
      \u0275\u0275text(13, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 10);
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "label", 12);
      \u0275\u0275text(21, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275text(24, "Save");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 3)(26, "div", 15)(27, "h5");
      \u0275\u0275text(28, "Two-Factor Authentication (MFA)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 5)(32, "p", 16);
      \u0275\u0275text(33, " Add an extra layer of security to your account. ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, SettingsComponent_Conditional_34_Template, 2, 0, "button", 17);
      \u0275\u0275conditionalCreate(35, SettingsComponent_Conditional_35_Template, 2, 0, "button", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 2)(37, "div", 3)(38, "div", 4)(39, "h5");
      \u0275\u0275text(40, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 5)(42, "div", 19)(43, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.emailNotifications, $event) || (ctx.emailNotifications = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "label", 21);
      \u0275\u0275text(45, " Email Notifications ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 19)(47, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pushNotifications, $event) || (ctx.pushNotifications = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "label", 23);
      \u0275\u0275text(49, " Push Notifications ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 24)(51, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.smsNotifications, $event) || (ctx.smsNotifications = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "label", 26);
      \u0275\u0275text(53, " SMS Notifications ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 3)(55, "div", 4)(56, "h5");
      \u0275\u0275text(57, "Preferences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 5)(59, "div", 7)(60, "label", 27);
      \u0275\u0275text(61, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "select", 28);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_62_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.language, $event) || (ctx.language = $event);
        return $event;
      });
      \u0275\u0275elementStart(63, "option", 29);
      \u0275\u0275text(64, "English");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "button", 30);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_65_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(66, " Log Out ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(19);
      \u0275\u0275classMap(\u0275\u0275interpolate1("badge bg-", ctx.mfaEnabled ? "success" : "secondary"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.mfaEnabled ? "Enabled" : "Disabled", " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.mfaEnabled ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mfaEnabled ? 35 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.emailNotifications);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pushNotifications);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.smsNotifications);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.language);
    }
  }, dependencies: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{
      selector: "app-settings",
      template: `
    <div class="container">
      <h1>Settings</h1>
    
      <div class="row">
        <div class="col-md-6">
          <!-- Profile Settings -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Profil</h5>
            </div>
            <div class="card-body">
              <form [formGroup]="profileForm" (ngSubmit)="updateProfile()">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" formControlName="username" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" formControlName="email" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="tel" class="form-control" id="phone" formControlName="phone" />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
    
          <!-- MFA Settings -->
          <div class="card mb-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5>Two-Factor Authentication (MFA)</h5>
              <span class="badge bg-{{ mfaEnabled ? 'success' : 'secondary' }}">
                {{ mfaEnabled ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Add an extra layer of security to your account.
              </p>
              @if (!mfaEnabled) {
                <button class="btn btn-primary" (click)="enableMFA()">
                  Enable MFA
                </button>
              }
              @if (mfaEnabled) {
                <button class="btn btn-danger" (click)="disableMFA()">
                  Disable MFA
                </button>
              }
            </div>
          </div>
        </div>
    
        <div class="col-md-6">
          <!-- Notification Settings -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Notifications</h5>
            </div>
            <div class="card-body">
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="emailNotifications" [(ngModel)]="emailNotifications" />
                <label class="form-check-label" for="emailNotifications">
                  Email Notifications
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="pushNotifications" [(ngModel)]="pushNotifications" />
                <label class="form-check-label" for="pushNotifications">
                  Push Notifications
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="smsNotifications" [(ngModel)]="smsNotifications" />
                <label class="form-check-label" for="smsNotifications">
                  SMS Notifications
                </label>
              </div>
            </div>
          </div>
    
          <!-- Preferences -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Preferences</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="language" class="form-label">Language</label>
                <select class="form-select" id="language" [(ngModel)]="language">
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
    
          <button class="btn btn-outline-danger" (click)="logout()">
            Log Out
          </button>
        </div>
      </div>
    </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false
    }]
  }], () => [{ type: FormBuilder }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 116 });
})();

// src/app/features/settings/settings-routing.module.ts
var routes = [
  {
    path: "",
    component: SettingsComponent,
    data: { title: "Settings" }
  }
];
var SettingsRoutingModule = class _SettingsRoutingModule {
  static \u0275fac = function SettingsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/settings/settings.module.ts
var SettingsModule = class _SettingsModule {
  static \u0275fac = function SettingsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [UserService], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsModule, [{
    type: NgModule,
    args: [{
      declarations: [SettingsComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SettingsRoutingModule
      ],
      providers: [UserService]
    }]
  }], null, null);
})();
export {
  SettingsModule
};
//# sourceMappingURL=chunk-4IPLAPPQ.js.map
