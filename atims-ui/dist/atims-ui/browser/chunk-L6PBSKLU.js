import {
  RouterModule
} from "./chunk-74YMUZCQ.js";
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
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2VERUPVP.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
} from "./chunk-ALNKFEZR.js";

// src/app/features/settings/user.service.ts
var UserService = class _UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiBase}/auth`;
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
  static {
    this.\u0275fac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
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
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableMFA());
    });
    \u0275\u0275text(1, " Activer MFA ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disableMFA());
    });
    \u0275\u0275text(1, " D\xE9sactiver MFA ");
    \u0275\u0275elementEnd();
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
    this.mfaEnabled = false;
    this.emailNotifications = true;
    this.pushNotifications = false;
    this.smsNotifications = false;
    this.language = "fr";
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
        next: () => alert("Profil mis \xE0 jour"),
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
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: false, decls: 69, vars: 11, consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "btn", "btn-primary"], [1, "btn", "btn-danger"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "emailNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "emailNotifications", 1, "form-check-label"], ["type", "checkbox", "id", "pushNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "pushNotifications", 1, "form-check-label"], [1, "form-check"], ["type", "checkbox", "id", "smsNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "smsNotifications", 1, "form-check-label"], ["for", "language", 1, "form-label"], ["id", "language", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "fr"], ["value", "en"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Param\xE8tres");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5");
        \u0275\u0275text(8, "Profil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "form", 6);
        \u0275\u0275listener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_10_listener() {
          return ctx.updateProfile();
        });
        \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13, "Nom d'utilisateur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 10);
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 12);
        \u0275\u0275text(21, "T\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275text(24, "Sauvegarder");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "div", 3)(26, "div", 15)(27, "h5");
        \u0275\u0275text(28, "Authentification \xE0 2 facteurs (MFA)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 5)(32, "p", 16);
        \u0275\u0275text(33, " Ajoutez une couche de s\xE9curit\xE9 suppl\xE9mentaire \xE0 votre compte. ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, SettingsComponent_Conditional_34_Template, 2, 0, "button", 17);
        \u0275\u0275conditionalCreate(35, SettingsComponent_Conditional_35_Template, 2, 0, "button", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 2)(37, "div", 3)(38, "div", 4)(39, "h5");
        \u0275\u0275text(40, "Notifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 5)(42, "div", 19)(43, "input", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.emailNotifications, $event) || (ctx.emailNotifications = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "label", 21);
        \u0275\u0275text(45, " Notifications par email ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 19)(47, "input", 22);
        \u0275\u0275controlCreate();
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pushNotifications, $event) || (ctx.pushNotifications = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "label", 23);
        \u0275\u0275text(49, " Notifications push ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 24)(51, "input", 25);
        \u0275\u0275controlCreate();
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.smsNotifications, $event) || (ctx.smsNotifications = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "label", 26);
        \u0275\u0275text(53, " Notifications SMS ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 3)(55, "div", 4)(56, "h5");
        \u0275\u0275text(57, "Pr\xE9f\xE9rences");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 5)(59, "div", 7)(60, "label", 27);
        \u0275\u0275text(61, "Langue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "select", 28);
        \u0275\u0275controlCreate();
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.language, $event) || (ctx.language = $event);
          return $event;
        });
        \u0275\u0275elementStart(63, "option", 29);
        \u0275\u0275text(64, "Fran\xE7ais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "option", 30);
        \u0275\u0275text(66, "English");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "button", 31);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_67_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(68, " D\xE9connexion ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.profileForm);
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275classMap(\u0275\u0275interpolate1("badge bg-", ctx.mfaEnabled ? "success" : "secondary"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.mfaEnabled ? "Activ\xE9" : "D\xE9sactiv\xE9", " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.mfaEnabled ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mfaEnabled ? 35 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.emailNotifications);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.pushNotifications);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.smsNotifications);
        \u0275\u0275control();
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.language);
        \u0275\u0275control();
      }
    }, dependencies: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 1 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{
      selector: "app-settings",
      template: `
    <div class="container">
      <h1>Param\xE8tres</h1>
    
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
                  <label for="username" class="form-label">Nom d'utilisateur</label>
                  <input type="text" class="form-control" id="username" formControlName="username" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" formControlName="email" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">T\xE9l\xE9phone</label>
                  <input type="tel" class="form-control" id="phone" formControlName="phone" />
                </div>
                <button type="submit" class="btn btn-primary">Sauvegarder</button>
              </form>
            </div>
          </div>
    
          <!-- MFA Settings -->
          <div class="card mb-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5>Authentification \xE0 2 facteurs (MFA)</h5>
              <span class="badge bg-{{ mfaEnabled ? 'success' : 'secondary' }}">
                {{ mfaEnabled ? 'Activ\xE9' : 'D\xE9sactiv\xE9' }}
              </span>
            </div>
            <div class="card-body">
              <p class="text-muted">
                Ajoutez une couche de s\xE9curit\xE9 suppl\xE9mentaire \xE0 votre compte.
              </p>
              @if (!mfaEnabled) {
                <button class="btn btn-primary" (click)="enableMFA()">
                  Activer MFA
                </button>
              }
              @if (mfaEnabled) {
                <button class="btn btn-danger" (click)="disableMFA()">
                  D\xE9sactiver MFA
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
                  Notifications par email
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="pushNotifications" [(ngModel)]="pushNotifications" />
                <label class="form-check-label" for="pushNotifications">
                  Notifications push
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="smsNotifications" [(ngModel)]="smsNotifications" />
                <label class="form-check-label" for="smsNotifications">
                  Notifications SMS
                </label>
              </div>
            </div>
          </div>
    
          <!-- Preferences -->
          <div class="card mb-3">
            <div class="card-header">
              <h5>Pr\xE9f\xE9rences</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="language" class="form-label">Langue</label>
                <select class="form-select" id="language" [(ngModel)]="language">
                  <option value="fr">Fran\xE7ais</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
    
          <button class="btn btn-outline-danger" (click)="logout()">
            D\xE9connexion
          </button>
        </div>
      </div>
    </div>
    `,
      changeDetection: ChangeDetectionStrategy.Eager,
      standalone: false
    }]
  }], () => [{ type: FormBuilder }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 117 });
})();

// src/app/features/settings/settings-routing.module.ts
var routes = [
  {
    path: "",
    component: SettingsComponent,
    data: { title: "Param\xE8tres" }
  }
];
var SettingsRoutingModule = class _SettingsRoutingModule {
  static {
    this.\u0275fac = function SettingsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
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
  static {
    this.\u0275fac = function SettingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [UserService], imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      SettingsRoutingModule
    ] });
  }
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
//# debugId=8a975403-a7cf-538d-94c4-d57b9c99ae23
//# sourceMappingURL=chunk-L6PBSKLU.js.map
