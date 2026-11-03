import {
  Dialog,
  DialogModule,
  IncidentLogComponent,
  Textarea,
  TextareaModule,
  Toast,
  ToastModule
} from "./chunk-RDDWE6MO.js";
import {
  AssetService
} from "./chunk-3HOLFFTT.js";
import {
  Button,
  ButtonDirective,
  ButtonModule,
  ColumnFilter,
  FrozenColumn,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputNumber,
  InputNumberModule,
  InputText,
  InputTextModule,
  Select,
  SelectModule,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule,
  Tag,
  TagModule
} from "./chunk-46A7EVRP.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  ConfirmEventType,
  ConfirmationService,
  Footer,
  MessageService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  Z,
  s2 as s,
  te
} from "./chunk-ZBRJC7FJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-6GZMF7H4.js";
import "./chunk-3TD3PA7B.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DecimalPipe,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Output,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  firstValueFrom,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UCY5OEF2.js";

// node_modules/@primeuix/styles/dist/confirmdialog/index.mjs
var style = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c0 = ["header"];
var _c1 = ["footer"];
var _c2 = ["rejecticon"];
var _c3 = ["accepticon"];
var _c4 = ["message"];
var _c5 = ["icon"];
var _c6 = ["headless"];
var _c7 = [[["p-footer"]]];
var _c8 = ["p-footer"];
var _c9 = (a0, a1, a2) => ({
  $implicit: a0,
  onAccept: a1,
  onReject: a2
});
var _c10 = (a0) => ({
  $implicit: a0
});
function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate || ctx_r0._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c9, ctx_r0.confirmation, ctx_r0.onAccept.bind(ctx_r0), ctx_r0.onReject.bind(ctx_r0)));
  }
}
function ConfirmDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.option("icon"));
    \u0275\u0275property("ngClass", ctx_r0.cx("icon"))("pBind", ctx_r0.ptm("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template, 1, 4, "i", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.option("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.messageTemplate || ctx_r0._messageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c10, ctx_r0.confirmation));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("message"));
    \u0275\u0275property("pBind", ctx_r0.ptm("message"))("innerHTML", ctx_r0.option("message"), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1)(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1, "i", 9);
    \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 4)(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 4, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.iconTemplate || ctx_r0._iconTemplate ? 0 : !ctx_r0.iconTemplate && !ctx_r0._iconTemplate && !ctx_r0._messageTemplate && !ctx_r0.messageTemplate ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.messageTemplate || ctx_r0._messageTemplate ? 2 : 3);
  }
}
function ConfirmDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 0);
    \u0275\u0275template(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.headerTemplate || ctx_r0._headerTemplate ? 0 : -1);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r0.option("rejectIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("pcRejectButton")["icon"]);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template, 1, 3, "i", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r0.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.rejectIcon && !ctx_r0.rejectIconTemplate && !ctx_r0._rejectIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.rejectIconTemplate || ctx_r0._rejectIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onReject());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r0.ptm("pcRejectButton"))("label", ctx_r0.rejectButtonLabel)("styleClass", ctx_r0.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r0.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r0.getRejectButtonProps())("unstyled", ctx_r0.unstyled());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r0.option("acceptIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("pcAcceptButton")["icon"]);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template, 1, 3, "i", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r0.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.acceptIcon && !ctx_r0._acceptIconTemplate && !ctx_r0.acceptIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.acceptIconTemplate || ctx_r0._acceptIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onAccept());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r0.ptm("pcAcceptButton"))("label", ctx_r0.acceptButtonLabel)("styleClass", ctx_r0.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r0.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r0.getAcceptButtonProps())("unstyled", ctx_r0.unstyled());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 6, "p-button", 14)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 6, "p-button", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.option("rejectVisible"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.option("acceptVisible"));
  }
}
function ConfirmDialog_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1);
    \u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.footerTemplate || ctx_r0._footerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.footerTemplate && !ctx_r0._footerTemplate ? 1 : -1);
  }
}
var classes = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
  name = "confirmdialog";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmDialogStyle)))(__ngFactoryType__ || _ConfirmDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmDialogStyle,
    factory: _ConfirmDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var CONFIRMDIALOG_INSTANCE = new InjectionToken("CONFIRMDIALOG_INSTANCE");
var ConfirmDialog = class _ConfirmDialog extends BaseComponent {
  confirmationService;
  zone;
  componentName = "ConfirmDialog";
  $pcConfirmDialog = inject(CONFIRMDIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'body'
   * @group Props
   */
  appendTo = input("body", ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = true;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  position = "center";
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  _componentStyle = inject(ConfirmDialogStyle);
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom reject icon template.
   * @group Templates
   */
  rejectIconTemplate;
  /**
   * Custom accept icon template.
   * @group Templates
   */
  acceptIconTemplate;
  /**
   * Custom message template.
   * @group Templates
   */
  messageTemplate;
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  templates;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _headerTemplate;
  _footerTemplate;
  _rejectIconTemplate;
  _acceptIconTemplate;
  _messageTemplate;
  _iconTemplate;
  _headlessTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  styleElement;
  id = s("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  constructor(confirmationService, zone) {
    super();
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  onInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "message":
          this._messageTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? s("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      const value = k ? source[k] : source[name];
      return typeof value === "function" ? value() : value;
    }
    return void 0;
  }
  getButtonStyleClass(cx, opt) {
    const cxClass = this.cx(cx);
    const optionClass = this.option(opt);
    return [cxClass, optionClass].filter(Boolean).join(" ");
  }
  getElementToFocus() {
    if (!this.dialog?.el?.nativeElement) return;
    switch (this.option("defaultFocus")) {
      case "accept":
        return Z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
      case "reject":
        return Z(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
      case "close":
        return Z(this.dialog.el.nativeElement, ".p-dialog-header-close");
      case "none":
        return null;
      //backward compatibility
      default:
        return Z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      te(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
      te(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.unsubscribeConfirmationEvents();
  }
  onDialogHide() {
    this.confirmation = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    this.subscription.unsubscribe();
    this.unsubscribeConfirmationEvents();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  onVisibleChange(value) {
    if (!value) {
      this.close();
    } else {
      this.visible = value;
    }
  }
  onAccept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  unsubscribeConfirmationEvents() {
    if (this.confirmation) {
      this.confirmation.acceptEvent?.unsubscribe();
      this.confirmation.rejectEvent?.unsubscribe();
    }
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.getAcceptButtonProps()?.label || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.getRejectButtonProps()?.label || this.config.getTranslation(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)(\u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"], ["p-confirmdialog"], ["p-confirm-dialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5)(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, _c3, 4)(dirIndex, _c4, 4)(dirIndex, _c5, 4)(dirIndex, _c6, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: [2, "acceptVisible", "acceptVisible", booleanAttribute],
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: [2, "rejectVisible", "rejectVisible", booleanAttribute],
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      appendTo: [1, "appendTo"],
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      transitionOptions: "transitionOptions",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      modal: [2, "modal", "modal", booleanAttribute],
      visible: "visible",
      position: "position",
      draggable: [2, "draggable", "draggable", booleanAttribute]
    },
    outputs: {
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmDialogStyle, {
      provide: CONFIRMDIALOG_INSTANCE,
      useExisting: _ConfirmDialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ConfirmDialog
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c8,
    decls: 6,
    vars: 19,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["icon", ""], ["role", "alertdialog", 3, "visibleChange", "onHide", "pt", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable", "baseZIndex", "autoZIndex", "maskStyleClass", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", "pBind"], [3, "class", "pBind", "innerHTML"], [3, "ngClass", "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [3, "pBind", "innerHTML"], [3, "pt", "label", "styleClass", "ariaLabel", "buttonProps", "unstyled", "onClick", 4, "ngIf"], [3, "onClick", "pt", "label", "styleClass", "ariaLabel", "buttonProps", "unstyled"], [3, "class", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275elementStart(0, "p-dialog", 6, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          return ctx.onVisibleChange($event);
        })("onHide", function ConfirmDialog_Template_p_dialog_onHide_0_listener() {
          return ctx.onDialogHide();
        });
        \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1);
        \u0275\u0275template(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("pt", ctx.pt)("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.cn(ctx.cx("root"), ctx.styleClass))("modal", ctx.option("modal"))("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.$appendTo())("position", ctx.position)("dismissableMask", ctx.dismissableMask)("draggable", ctx.draggable)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("maskStyleClass", ctx.cn(ctx.cx("mask"), ctx.maskStyleClass))("unstyled", ctx.unstyled());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [CommonModule, Button, Dialog, SharedModule, Bind],
      template: `
        <p-dialog
            [pt]="pt"
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass)"
            [modal]="option('modal')"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="$appendTo()"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass)"
            [unstyled]="unstyled()"
            (onHide)="onDialogHide()"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" [pBind]="ptm('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [class]="cx('message')" [pBind]="ptm('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        [pt]="ptm('pcRejectButton')"
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                        [unstyled]="unstyled()"
                    >
                        <ng-template #icon>
                            @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                                <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')" [pBind]="ptm('pcRejectButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        [pt]="ptm('pcAcceptButton')"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                        [unstyled]="unstyled()"
                    >
                        <ng-template #icon>
                            @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                                <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')" [pBind]="ptm('pcAcceptButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmDialogStyle, {
        provide: CONFIRMDIALOG_INSTANCE,
        useExisting: ConfirmDialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ConfirmDialog
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ConfirmationService
  }, {
    type: NgZone
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmDialogModule,
    imports: [ConfirmDialog, SharedModule],
    exports: [ConfirmDialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/assets/assets.component.ts
var _c02 = () => ({ width: "28rem", maxWidth: "calc(100vw - 2rem)" });
var _c12 = () => [10, 20, 50];
var _c22 = () => ({ "min-width": "80rem" });
var _c32 = () => ({ width: "min(44rem, calc(100vw - 2rem))" });
var _c42 = () => ({ width: "min(72rem, calc(100vw - 2rem))" });
var _c52 = () => ({ "max-height": "80vh", "overflow-y": "auto" });
function AssetsComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.selectedAssets.length, " selected");
  }
}
function AssetsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "button", 23);
    \u0275\u0275listener("click", function AssetsComponent_ng_template_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      const assetTable_r4 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(ctx_r1.clearSearch(assetTable_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield", 24)(4, "p-inputicon");
    \u0275\u0275element(5, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 26);
    \u0275\u0275listener("input", function AssetsComponent_ng_template_16_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      const assetTable_r4 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(ctx_r1.onSearch(assetTable_r4, $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 27)(8, "p-button", 28);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_16_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAsset());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 29);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_16_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSelected());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 30);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_16_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshAssets());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 31);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_16_Template_p_button_onClick_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logIncident());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-button", 32);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_16_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      const assetTable_r4 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(ctx_r1.exportCsv(assetTable_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 33);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_16_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      const assetTable_r4 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(ctx_r1.printResults(assetTable_r4));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", !ctx_r1.selectedAssets.length || ctx_r1.bulkDeleting)("loading", ctx_r1.bulkDeleting);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("loading", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("loading", ctx_r1.exporting);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("loading", ctx_r1.printing);
  }
}
function AssetsComponent_ng_template_18_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 54);
    \u0275\u0275listener("ngModelChange", function AssetsComponent_ng_template_18_ng_template_19_Template_p_select_ngModelChange_0_listener($event) {
      const filter_r6 = \u0275\u0275restoreView(_r5).filterCallback;
      return \u0275\u0275resetView(filter_r6($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", value_r7)("options", ctx_r1.statusOptions)("showClear", true);
  }
}
function AssetsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 34);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 35);
    \u0275\u0275text(4, " State ID ");
    \u0275\u0275element(5, "p-sortIcon", 36)(6, "p-columnFilter", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 38);
    \u0275\u0275text(8, " Asset ");
    \u0275\u0275element(9, "p-sortIcon", 39)(10, "p-columnFilter", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 41);
    \u0275\u0275text(12, " Category ");
    \u0275\u0275element(13, "p-sortIcon", 42)(14, "p-columnFilter", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 44);
    \u0275\u0275text(16, " Status ");
    \u0275\u0275element(17, "p-sortIcon", 45);
    \u0275\u0275elementStart(18, "p-columnFilter", 46);
    \u0275\u0275template(19, AssetsComponent_ng_template_18_ng_template_19_Template, 1, 3, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 47);
    \u0275\u0275text(22, " Location ");
    \u0275\u0275element(23, "p-sortIcon", 48)(24, "p-columnFilter", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 50);
    \u0275\u0275text(26, " Current value ");
    \u0275\u0275element(27, "p-sortIcon", 51)(28, "p-columnFilter", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 53);
    \u0275\u0275text(30, "Actions");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("frozen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("frozen", true);
    \u0275\u0275advance(15);
    \u0275\u0275property("showMatchModes", false)("showOperator", false)("showAddButton", false);
  }
}
function AssetsComponent_ng_template_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, asset_r9.latitude, "1.4-4"), ", ", \u0275\u0275pipeBind2(3, 5, asset_r9.longitude, "1.4-4"), " ");
  }
}
function AssetsComponent_ng_template_20_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "No coordinates");
    \u0275\u0275elementEnd();
  }
}
function AssetsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275element(2, "p-tableCheckbox", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 56)(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275element(14, "p-tag", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, AssetsComponent_ng_template_20_span_16_Template, 4, 8, "span", 17)(17, AssetsComponent_ng_template_20_ng_template_17_Template, 2, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 61);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 62)(23, "p-button", 63);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_20_Template_p_button_onClick_23_listener() {
      const asset_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAsset(asset_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p-button", 64);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_20_Template_p_button_onClick_24_listener() {
      const asset_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(asset_r9));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r9 = ctx.$implicit;
    const noCoordinates_r10 = \u0275\u0275reference(18);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("frozen", true);
    \u0275\u0275advance();
    \u0275\u0275property("value", asset_r9);
    \u0275\u0275advance();
    \u0275\u0275property("frozen", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r9.stateId || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r9.description || "No description");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r9.category || "Uncategorised");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getStatusLabel(asset_r9.currentStatus))("severity", ctx_r1.getStatusSeverity(asset_r9.currentStatus));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasCoordinates(asset_r9))("ngIfElse", noCoordinates_r10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 16, asset_r9.currentValue, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function AssetsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadError || (ctx_r1.searchTerm ? "No assets match your search." : "No assets found."), " ");
  }
}
function AssetsComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275text(3, " Loading asset details\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AssetsComponent_ng_template_26_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 70);
    \u0275\u0275listener("ngSubmit", function AssetsComponent_ng_template_26_form_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveAsset());
    });
    \u0275\u0275elementStart(1, "div", 71)(2, "label", 72);
    \u0275\u0275text(3, "State ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_input_ngModelChange_4_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.stateId, $event) || (draft_r12.stateId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71)(6, "label", 74);
    \u0275\u0275text(7, "Name ");
    \u0275\u0275elementStart(8, "span", 75);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_input_ngModelChange_10_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.name, $event) || (draft_r12.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 77)(12, "label", 78);
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_textarea_ngModelChange_14_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.description, $event) || (draft_r12.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 71)(16, "label", 80);
    \u0275\u0275text(17, "Category ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-inputnumber", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_p_inputnumber_ngModelChange_18_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.categoryId, $event) || (draft_r12.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 82);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 71)(22, "label", 83);
    \u0275\u0275text(23, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p-select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_p_select_ngModelChange_24_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.currentStatus, $event) || (draft_r12.currentStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 77)(26, "label", 85);
    \u0275\u0275text(27, "Registered location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_input_ngModelChange_28_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.registeredLocation, $event) || (draft_r12.registeredLocation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 71)(30, "label", 87);
    \u0275\u0275text(31, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p-inputnumber", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_p_inputnumber_ngModelChange_32_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.latitude, $event) || (draft_r12.latitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 71)(34, "label", 89);
    \u0275\u0275text(35, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-inputnumber", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_p_inputnumber_ngModelChange_36_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.longitude, $event) || (draft_r12.longitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 71)(38, "label", 91);
    \u0275\u0275text(39, "Acquisition date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_input_ngModelChange_40_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.acquisitionDate, $event) || (draft_r12.acquisitionDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 71)(42, "label", 93);
    \u0275\u0275text(43, "Current value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p-inputnumber", 94);
    \u0275\u0275twoWayListener("ngModelChange", function AssetsComponent_ng_template_26_form_0_Template_p_inputnumber_ngModelChange_44_listener($event) {
      const draft_r12 = \u0275\u0275restoreView(_r11).ngIf;
      \u0275\u0275twoWayBindingSet(draft_r12.currentValue, $event) || (draft_r12.currentValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const draft_r12 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.stateId);
    \u0275\u0275property("readonly", !ctx_r1.isAdding)("placeholder", ctx_r1.isAdding ? "Leave blank to generate automatically" : "");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.categoryId);
    \u0275\u0275property("min", 1)("useGrouping", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Category ID ", draft_r12.categoryId, ": ", draft_r12.category || "Unknown category");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.currentStatus);
    \u0275\u0275property("options", ctx_r1.statusOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.registeredLocation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.latitude);
    \u0275\u0275property("min", -90)("max", 90)("minFractionDigits", 0)("maxFractionDigits", 8);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.longitude);
    \u0275\u0275property("min", -180)("max", 180)("minFractionDigits", 0)("maxFractionDigits", 8);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.acquisitionDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", draft_r12.currentValue);
    \u0275\u0275property("min", 0);
  }
}
function AssetsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AssetsComponent_ng_template_26_form_0_Template, 45, 26, "form", 69);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.editDraft);
  }
}
function AssetsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 95);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_28_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 96);
    \u0275\u0275listener("onClick", function AssetsComponent_ng_template_28_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAsset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true)("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.isAdding ? "Create asset" : "Save changes")("loading", ctx_r1.saving)("disabled", ctx_r1.editLoading || !ctx_r1.editDraft);
  }
}
function AssetsComponent_app_incident_log_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-incident-log", 97);
    \u0275\u0275listener("logged", function AssetsComponent_app_incident_log_31_Template_app_incident_log_logged_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIncidentLogged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("initialAssetStateId", ctx_r1.incidentAssetStateId);
  }
}
var AssetsComponent = class _AssetsComponent {
  assetService;
  changeDetector;
  confirmationService;
  messageService;
  assets = [];
  selectedAssets = [];
  searchTerm = "";
  loadError = "";
  loading = true;
  first = 0;
  rows = 10;
  totalRecords = 0;
  editDialogVisible = false;
  isAdding = false;
  editLoading = false;
  saving = false;
  bulkDeleting = false;
  exporting = false;
  printing = false;
  incidentLogDialogVisible = false;
  incidentAssetStateId = null;
  editDraft = null;
  statusOptions = [
    { label: "Functional", value: "Fonctionnel" },
    { label: "Out of Service", value: "En Panne" },
    { label: "Decommissioned", value: "D\xE9class\xE9" },
    { label: "Unknown", value: "Inconnu" }
  ];
  requestId = 0;
  constructor(assetService, changeDetector, confirmationService, messageService) {
    this.assetService = assetService;
    this.changeDetector = changeDetector;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadAssets({ first: 0, rows: this.rows });
  }
  loadAssets(event = {}) {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    const requestId = ++this.requestId;
    this.loading = true;
    this.loadError = "";
    this.fetchSearchResults().then((results) => {
      setTimeout(() => {
        if (requestId !== this.requestId)
          return;
        this.assets = results;
        this.totalRecords = results.length;
        this.loading = false;
        this.changeDetector.markForCheck();
      });
    }).catch(() => {
      setTimeout(() => {
        if (requestId !== this.requestId)
          return;
        this.assets = [];
        this.totalRecords = 0;
        this.loadError = "Unable to load assets. Please try again.";
        this.loading = false;
        this.changeDetector.markForCheck();
      });
    });
  }
  onPage(event) {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
  }
  onSearch(table, event) {
    this.searchTerm = event.target.value.trim();
    this.selectedAssets = [];
    this.first = 0;
    table.first = 0;
    this.loadAssets({ first: 0, rows: this.rows });
  }
  clearSearch(table) {
    this.searchTerm = "";
    this.selectedAssets = [];
    table.clear();
    this.first = 0;
    table.first = 0;
    this.loadAssets({ first: 0, rows: this.rows });
  }
  refreshAssets() {
    this.loadAssets({ first: this.first, rows: this.rows });
  }
  addAsset() {
    this.isAdding = true;
    this.editDraft = {
      id: 0,
      stateId: "",
      name: "",
      description: "",
      category: null,
      categoryId: 0,
      registeredLocation: "",
      latitude: null,
      longitude: null,
      currentStatus: "Inconnu",
      purchaseValue: null,
      currentValue: 0,
      acquisitionDate: null,
      parentAssetId: null
    };
    this.editLoading = false;
    this.editDialogVisible = true;
  }
  editAsset(asset) {
    this.isAdding = false;
    this.editDraft = null;
    this.editDialogVisible = true;
    this.editLoading = true;
    this.assetService.getById(asset.id).subscribe({
      next: (details) => setTimeout(() => {
        this.editDraft = details;
        this.editLoading = false;
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        this.editLoading = false;
        this.editDialogVisible = false;
        this.messageService.add({ severity: "error", summary: "Could not load asset", detail: "Please try again." });
        this.changeDetector.markForCheck();
      })
    });
  }
  closeEditDialog() {
    if (this.saving)
      return;
    this.editDialogVisible = false;
    this.editDraft = null;
    this.isAdding = false;
  }
  saveAsset() {
    const draft = this.editDraft;
    if (!draft || this.saving || !draft.name.trim())
      return;
    if (this.isAdding && (!draft.categoryId || draft.latitude === null || draft.longitude === null)) {
      this.messageService.add({ severity: "warn", summary: "Required details missing", detail: "Enter a category ID, latitude and longitude to create an asset." });
      return;
    }
    this.saving = true;
    const update = {
      name: draft.name.trim(),
      description: draft.description,
      categoryId: draft.categoryId,
      currentStatus: draft.currentStatus,
      currentValue: draft.currentValue,
      registeredLocation: draft.registeredLocation,
      acquisitionDate: draft.acquisitionDate,
      latitude: draft.latitude,
      longitude: draft.longitude,
      parentAssetId: draft.parentAssetId
    };
    const wasAdding = this.isAdding;
    const request = wasAdding ? this.assetService.create(__spreadProps(__spreadValues({
      stateId: draft.stateId.trim() || void 0
    }, update), {
      categoryId: draft.categoryId,
      currentStatus: draft.currentStatus,
      currentValue: draft.currentValue,
      purchaseValue: draft.purchaseValue,
      latitude: draft.latitude,
      longitude: draft.longitude
    })) : this.assetService.update(draft.id, update);
    request.subscribe({
      next: () => setTimeout(() => {
        this.saving = false;
        this.editDialogVisible = false;
        this.editDraft = null;
        this.isAdding = false;
        this.messageService.add({ severity: "success", summary: wasAdding ? "Asset created" : "Asset updated", detail: wasAdding ? "The asset has been added." : "Your changes have been saved." });
        this.loadAssets({ first: wasAdding ? 0 : this.first, rows: this.rows });
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        this.saving = false;
        this.messageService.add({ severity: "error", summary: "Update failed", detail: "The asset could not be updated." });
        this.changeDetector.markForCheck();
      })
    });
  }
  confirmDelete(asset) {
    this.confirmationService.confirm({
      header: "Delete asset",
      message: `Delete \u201C${asset.name}\u201D from the active asset list?`,
      icon: "pi pi-exclamation-triangle",
      acceptButtonProps: { label: "Delete", severity: "danger" },
      rejectButtonProps: { label: "Cancel", severity: "secondary", outlined: true },
      accept: () => this.deleteAsset(asset)
    });
  }
  confirmDeleteSelected() {
    const selected = [...this.selectedAssets];
    if (!selected.length || this.bulkDeleting)
      return;
    this.confirmationService.confirm({
      header: "Delete selected assets",
      message: `Delete ${selected.length} selected asset${selected.length === 1 ? "" : "s"}?`,
      icon: "pi pi-exclamation-triangle",
      acceptButtonProps: { label: "Delete", severity: "danger" },
      rejectButtonProps: { label: "Cancel", severity: "secondary", outlined: true },
      accept: () => this.deleteSelectedAssets(selected)
    });
  }
  async deleteSelectedAssets(selected) {
    this.bulkDeleting = true;
    const results = await Promise.allSettled(selected.map((asset) => firstValueFrom(this.assetService.delete(asset.id))));
    const deletedIds = new Set(selected.filter((_, index) => results[index].status === "fulfilled").map((asset) => asset.id));
    this.selectedAssets = this.selectedAssets.filter((asset) => !deletedIds.has(asset.id));
    this.bulkDeleting = false;
    if (deletedIds.size) {
      this.messageService.add({ severity: "success", summary: "Assets deleted", detail: `${deletedIds.size} asset${deletedIds.size === 1 ? "" : "s"} deleted.` });
    }
    const failures = selected.length - deletedIds.size;
    if (failures)
      this.messageService.add({ severity: "error", summary: "Some assets were not deleted", detail: `${failures} deletion${failures === 1 ? "" : "s"} failed.` });
    this.refreshAssets();
    this.changeDetector.markForCheck();
  }
  logIncident() {
    const selected = this.selectedAssets.length === 1 ? this.selectedAssets[0] : null;
    this.incidentAssetStateId = selected?.stateId ?? null;
    this.incidentLogDialogVisible = true;
  }
  onIncidentLogged(uploadFailed) {
    this.incidentLogDialogVisible = false;
    this.messageService.add(uploadFailed ? { severity: "warn", summary: "Incident logged; image upload failed", detail: "The incident was recorded, but the image could not be attached." } : { severity: "success", summary: "Incident logged", detail: "The asset has been marked out of service." });
    this.refreshAssets();
  }
  async exportCsv(table) {
    this.exporting = true;
    try {
      const results = table.filteredValue ?? this.assets;
      const columns = [
        ["State ID", (asset) => asset.stateId],
        ["Name", (asset) => asset.name],
        ["Description", (asset) => asset.description],
        ["Category", (asset) => asset.category],
        ["Status", (asset) => this.getStatusLabel(asset.currentStatus)],
        ["Latitude", (asset) => asset.latitude],
        ["Longitude", (asset) => asset.longitude],
        ["Current value", (asset) => asset.currentValue]
      ];
      const csv = [columns.map(([label]) => this.csvCell(label)).join(","), ...results.map((asset) => columns.map(([, value]) => this.csvCell(value(asset))).join(","))].join("\r\n");
      const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "assets.csv";
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      this.messageService.add({ severity: "error", summary: "Export failed", detail: "Could not load the filtered asset results." });
    } finally {
      this.exporting = false;
      this.changeDetector.markForCheck();
    }
  }
  async printResults(table) {
    const popup = window.open("", "_blank", "width=1000,height=750");
    if (!popup) {
      this.messageService.add({ severity: "warn", summary: "Print window blocked", detail: "Allow pop-ups to print the asset results." });
      return;
    }
    this.printing = true;
    try {
      const results = table.filteredValue ?? this.assets;
      const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
      const rows = results.map((asset) => `<tr><td>${escape(asset.stateId)}</td><td>${escape(asset.name)}</td><td>${escape(asset.category)}</td><td>${escape(this.getStatusLabel(asset.currentStatus))}</td><td>${escape(asset.latitude)}, ${escape(asset.longitude)}</td><td>${escape(asset.currentValue)}</td></tr>`).join("");
      const searchDescription = this.searchTerm ? ` for \u201C${escape(this.searchTerm)}\u201D` : "";
      popup.document.write(`<!doctype html><html><head><title>Assets</title><style>body{font:14px Arial,sans-serif;color:#24344d;padding:24px}h1{font-size:22px}p{color:#64748b}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{text-align:left;border-bottom:1px solid #dbe3ee;padding:9px}th{background:#f1f5f9}@media print{body{padding:0}}</style></head><body><h1>Assets</h1><p>${results.length} result${results.length === 1 ? "" : "s"}${searchDescription}</p><table><thead><tr><th>State ID</th><th>Name</th><th>Category</th><th>Status</th><th>Coordinates</th><th>Current value</th></tr></thead><tbody>${rows}</tbody></table><script>window.onload=()=>window.print()<\/script></body></html>`);
      popup.document.close();
    } catch {
      popup.close();
      this.messageService.add({ severity: "error", summary: "Print failed", detail: "Could not load the filtered asset results." });
    } finally {
      this.printing = false;
      this.changeDetector.markForCheck();
    }
  }
  async fetchSearchResults() {
    const search = this.searchTerm;
    const pageSize = 100;
    const firstPage = await firstValueFrom(this.assetService.getAll(1, pageSize, search));
    const pageCount = Math.ceil(firstPage.total / pageSize);
    if (pageCount <= 1)
      return firstPage.items;
    const remainingPages = await Promise.all(Array.from({ length: pageCount - 1 }, (_, index) => firstValueFrom(this.assetService.getAll(index + 2, pageSize, search))));
    return [firstPage.items, ...remainingPages.map((page) => page.items)].flat();
  }
  csvCell(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
  }
  deleteAsset(asset) {
    this.assetService.delete(asset.id).subscribe({
      next: () => setTimeout(() => {
        this.selectedAssets = this.selectedAssets.filter((selected) => selected.id !== asset.id);
        this.totalRecords = Math.max(0, this.totalRecords - 1);
        if (this.assets.length === 1 && this.first > 0)
          this.first = Math.max(0, this.first - this.rows);
        this.messageService.add({ severity: "success", summary: "Asset deleted", detail: "The asset was removed from the active list." });
        this.loadAssets({ first: this.first, rows: this.rows });
        this.changeDetector.markForCheck();
      }),
      error: () => setTimeout(() => {
        this.messageService.add({ severity: "error", summary: "Delete failed", detail: "The asset could not be deleted." });
        this.changeDetector.markForCheck();
      })
    });
  }
  getStatusLabel(status) {
    const labels = {
      "Fonctionnel": "Functional",
      "En Panne": "Out of Service",
      "D\xE9class\xE9": "Decommissioned",
      "Inconnu": "Unknown"
    };
    return labels[status] ?? status;
  }
  getStatusSeverity(status) {
    const severities = {
      "Fonctionnel": "success",
      "En Panne": "danger",
      "D\xE9class\xE9": "warn",
      "Inconnu": "secondary"
    };
    return severities[status] ?? "secondary";
  }
  hasCoordinates(asset) {
    return Number.isFinite(asset.latitude) && Number.isFinite(asset.longitude);
  }
  static \u0275fac = function AssetsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetsComponent)(\u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetsComponent, selectors: [["app-assets"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 32, vars: 38, consts: [["assetTable", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["assetEditForm", ""], ["footer", ""], ["filter", ""], ["noCoordinates", ""], [1, "assets-page"], [1, "page-heading"], [1, "heading-subrow"], ["class", "selected-count", 4, "ngIf"], [1, "asset-total"], [1, "card", "table-card"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} assets", "styleClass", "assets-table", "responsiveLayout", "scroll", 3, "selectionChange", "onPage", "value", "paginator", "rows", "first", "totalRecords", "selection", "rowsPerPageOptions", "loading", "rowHover", "showCurrentPageReport", "scrollable", "tableStyle"], [3, "visibleChange", "onHide", "visible", "modal", "draggable", "closable", "header"], [4, "ngIf", "ngIfElse"], ["header", "Log Incident", 3, "visibleChange", "onHide", "visible", "modal", "draggable", "contentStyle"], [3, "initialAssetStateId", "logged", 4, "ngIf"], [1, "selected-count"], [1, "table-toolbar"], [1, "filter-controls"], ["pButton", "", "type", "button", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", 3, "click"], ["iconPosition", "left", 1, "search-field"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search state ID or asset name", "aria-label", "Search assets", 3, "input", "value"], [1, "toolbar-actions"], ["label", "Add", "icon", "pi pi-plus", 3, "onClick", "outlined"], ["label", "Delete", "icon", "pi pi-trash", "severity", "danger", 3, "onClick", "outlined", "disabled", "loading"], ["label", "Refresh", "icon", "pi pi-refresh", "severity", "secondary", 3, "onClick", "outlined", "loading"], ["label", "Log Incident", "icon", "pi pi-exclamation-triangle", "severity", "warn", 3, "onClick", "outlined"], ["label", "Export", "icon", "pi pi-download", "severity", "secondary", 3, "onClick", "outlined", "loading"], ["label", "Print", "icon", "pi pi-print", "severity", "secondary", 3, "onClick", "outlined", "loading"], ["pFrozenColumn", "", "alignFrozen", "left", 1, "selection-column", 3, "frozen"], ["pFrozenColumn", "", "alignFrozen", "left", "pSortableColumn", "stateId", 1, "state-column", 3, "frozen"], ["field", "stateId"], ["type", "text", "field", "stateId", "display", "menu"], ["pSortableColumn", "name", 1, "asset-column"], ["field", "name"], ["type", "text", "field", "name", "display", "menu"], ["pSortableColumn", "category", 1, "category-column"], ["field", "category"], ["type", "text", "field", "category", "display", "menu"], ["pSortableColumn", "currentStatus", 1, "status-column"], ["field", "currentStatus"], ["field", "currentStatus", "matchMode", "equals", "display", "menu", 3, "showMatchModes", "showOperator", "showAddButton"], ["pSortableColumn", "latitude", 1, "location-column"], ["field", "latitude"], ["type", "text", "field", "locationText", "display", "menu"], ["pSortableColumn", "currentValue", 1, "value-column"], ["field", "currentValue"], ["type", "numeric", "field", "currentValue", "display", "menu", "currency", "EUR"], [1, "actions-column"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Any status", "fluid", "", 3, "ngModelChange", "ngModel", "options", "showClear"], [3, "value"], ["pFrozenColumn", "", "alignFrozen", "left", 3, "frozen"], [1, "state-id"], [1, "asset-name"], [1, "asset-description"], [3, "value", "severity"], [1, "value-cell"], [1, "actions-cell"], ["icon", "pi pi-pencil", "severity", "secondary", "ariaLabel", "Edit asset", 3, "onClick", "text", "rounded"], ["icon", "pi pi-trash", "severity", "danger", "ariaLabel", "Delete asset", 3, "onClick", "text", "rounded"], [1, "muted"], ["colspan", "8", 1, "empty-cell"], [1, "dialog-loading"], [1, "pi", "pi-spin", "pi-spinner"], ["class", "asset-edit-form", 3, "ngSubmit", 4, "ngIf"], [1, "asset-edit-form", 3, "ngSubmit"], [1, "form-field"], ["for", "asset-state-id"], ["pInputText", "", "id", "asset-state-id", "name", "assetStateId", 3, "ngModelChange", "ngModel", "readonly", "placeholder"], ["for", "asset-name"], [1, "required-mark"], ["pInputText", "", "id", "asset-name", "name", "assetName", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-field", "form-field--wide"], ["for", "asset-description"], ["pTextarea", "", "id", "asset-description", "name", "assetDescription", "rows", "3", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "asset-category-id"], ["inputId", "asset-category-id", "name", "assetCategoryId", "fluid", "", 3, "ngModelChange", "ngModel", "min", "useGrouping"], [1, "field-hint"], ["for", "asset-status"], ["inputId", "asset-status", "name", "assetStatus", "optionLabel", "label", "optionValue", "value", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["for", "asset-registered-location"], ["pInputText", "", "id", "asset-registered-location", "name", "registeredLocation", 3, "ngModelChange", "ngModel"], ["for", "asset-latitude"], ["inputId", "asset-latitude", "name", "assetLatitude", "fluid", "", 3, "ngModelChange", "ngModel", "min", "max", "minFractionDigits", "maxFractionDigits"], ["for", "asset-longitude"], ["inputId", "asset-longitude", "name", "assetLongitude", "fluid", "", 3, "ngModelChange", "ngModel", "min", "max", "minFractionDigits", "maxFractionDigits"], ["for", "asset-acquisition-date"], ["pInputText", "", "id", "asset-acquisition-date", "name", "acquisitionDate", "type", "date", 3, "ngModelChange", "ngModel"], ["for", "asset-current-value"], ["inputId", "asset-current-value", "name", "currentValue", "mode", "currency", "currency", "EUR", "locale", "en-IE", "fluid", "", 3, "ngModelChange", "ngModel", "min"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text", "disabled"], ["icon", "pi pi-check", 3, "onClick", "label", "loading", "disabled"], [3, "logged", "initialAssetStateId"]], template: function AssetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "section", 9)(3, "header", 10)(4, "div")(5, "h1");
      \u0275\u0275text(6, "Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 11)(8, "p");
      \u0275\u0275text(9, "Browse and search the asset register.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, AssetsComponent_span_10_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 13);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 14)(14, "p-table", 15, 0);
      \u0275\u0275twoWayListener("selectionChange", function AssetsComponent_Template_p_table_selectionChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedAssets, $event) || (ctx.selectedAssets = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onPage", function AssetsComponent_Template_p_table_onPage_14_listener($event) {
        return ctx.onPage($event);
      });
      \u0275\u0275template(16, AssetsComponent_ng_template_16_Template, 14, 12, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, AssetsComponent_ng_template_18_Template, 31, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, AssetsComponent_ng_template_20_Template, 25, 21, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, AssetsComponent_ng_template_22_Template, 3, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "p-dialog", 16);
      \u0275\u0275twoWayListener("visibleChange", function AssetsComponent_Template_p_dialog_visibleChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editDialogVisible, $event) || (ctx.editDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function AssetsComponent_Template_p_dialog_onHide_24_listener() {
        return ctx.closeEditDialog();
      });
      \u0275\u0275template(25, AssetsComponent_ng_container_25_Template, 4, 0, "ng-container", 17)(26, AssetsComponent_ng_template_26_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(28, AssetsComponent_ng_template_28_Template, 2, 5, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p-dialog", 18);
      \u0275\u0275twoWayListener("visibleChange", function AssetsComponent_Template_p_dialog_visibleChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.incidentLogDialogVisible, $event) || (ctx.incidentLogDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function AssetsComponent_Template_p_dialog_onHide_30_listener() {
        return ctx.incidentLogDialogVisible = false;
      });
      \u0275\u0275template(31, AssetsComponent_app_incident_log_31_Template, 1, 1, "app-incident-log", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const assetEditForm_r15 = \u0275\u0275reference(27);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c02));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.selectedAssets.length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.totalRecords, " assets");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.assets)("paginator", true)("rows", ctx.rows)("first", ctx.first)("totalRecords", ctx.totalRecords);
      \u0275\u0275twoWayProperty("selection", ctx.selectedAssets);
      \u0275\u0275property("rowsPerPageOptions", \u0275\u0275pureFunction0(33, _c12))("loading", ctx.loading)("rowHover", true)("showCurrentPageReport", true)("scrollable", true)("tableStyle", \u0275\u0275pureFunction0(34, _c22));
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c32));
      \u0275\u0275twoWayProperty("visible", ctx.editDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("closable", !ctx.saving)("header", ctx.isAdding ? "Add Asset" : "Edit Asset");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editLoading)("ngIfElse", assetEditForm_r15);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c42));
      \u0275\u0275twoWayProperty("visible", ctx.incidentLogDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("contentStyle", \u0275\u0275pureFunction0(37, _c52));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidentLogDialogVisible);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, ButtonModule, ButtonDirective, Button, IconFieldModule, IconField, InputIconModule, InputIcon, InputTextModule, InputText, InputNumberModule, InputNumber, SelectModule, Select, TextareaModule, Textarea, DialogModule, Dialog, ConfirmDialogModule, ConfirmDialog, ToastModule, Toast, TableModule, Table, SortableColumn, FrozenColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, ColumnFilter, TagModule, Tag, IncidentLogComponent, DecimalPipe, CurrencyPipe], styles: ["\n.assets-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.heading-subrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.heading-subrow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.selected-count[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.asset-total[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n.filter-controls[_ngcontent-%COMP%], \n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex: 0 0 auto;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: min(100%, 22rem);\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.state-column[_ngcontent-%COMP%] {\n  width: 9rem;\n  min-width: 9rem;\n}\n.asset-column[_ngcontent-%COMP%] {\n  width: 14rem;\n  min-width: 14rem;\n}\n.category-column[_ngcontent-%COMP%] {\n  width: 11rem;\n  min-width: 11rem;\n}\n.status-column[_ngcontent-%COMP%] {\n  width: 12rem;\n  min-width: 12rem;\n}\n.location-column[_ngcontent-%COMP%] {\n  width: 12rem;\n  min-width: 12rem;\n}\n.selection-column[_ngcontent-%COMP%] {\n  width: 3rem;\n  min-width: 3rem;\n  text-align: center;\n}\n.actions-column[_ngcontent-%COMP%] {\n  min-width: 7rem;\n  text-align: center;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n}\n.value-column[_ngcontent-%COMP%] {\n  width: 11rem;\n  min-width: 11rem;\n  text-align: right;\n}\n[_nghost-%COMP%]     .assets-table .p-datatable-thead > tr > th {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .assets-table .p-column-filter {\n  display: inline-flex;\n  vertical-align: middle;\n  margin-left: 0.25rem;\n}\n.state-id[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: 0.875rem;\n}\n.asset-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.asset-description[_ngcontent-%COMP%], \n.muted[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8125rem;\n}\n.value-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  padding: 2rem !important;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.asset-edit-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.form-field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.field-hint[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.required-mark[_ngcontent-%COMP%] {\n  color: var(--red-500, #ef4444);\n}\n.dialog-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  min-height: 10rem;\n  color: var(--text-color-secondary);\n}\n@media (max-width: 640px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .table-toolbar[_ngcontent-%COMP%], \n   .filter-controls[_ngcontent-%COMP%], \n   .toolbar-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .toolbar-actions[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .asset-edit-form[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .form-field--wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=assets.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsComponent, [{
    type: Component,
    args: [{ selector: "app-assets", standalone: true, imports: [
      CommonModule,
      CurrencyPipe,
      FormsModule,
      ButtonModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule,
      InputNumberModule,
      SelectModule,
      TextareaModule,
      DialogModule,
      ConfirmDialogModule,
      ToastModule,
      TableModule,
      TagModule,
      IncidentLogComponent
    ], template: `
    <p-toast />
    <p-confirmdialog [style]="{ width: '28rem', maxWidth: 'calc(100vw - 2rem)' }" />

    <section class="assets-page">
      <header class="page-heading">
        <div>
          <h1>Assets</h1>
          <div class="heading-subrow">
            <p>Browse and search the asset register.</p>
            <span *ngIf="selectedAssets.length" class="selected-count">{{ selectedAssets.length }} selected</span>
          </div>
        </div>
        <span class="asset-total">{{ totalRecords }} assets</span>
      </header>

      <div class="card table-card">
        <p-table
          #assetTable
          [value]="assets"
          dataKey="id"
          [paginator]="true"
          [rows]="rows"
          [first]="first"
          [totalRecords]="totalRecords"
          [(selection)]="selectedAssets"
          [rowsPerPageOptions]="[10, 20, 50]"
          [loading]="loading"
          [rowHover]="true"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
          [scrollable]="true"
          [tableStyle]="{ 'min-width': '80rem' }"
          styleClass="assets-table"
          responsiveLayout="scroll"
          (onPage)="onPage($event)"
        >
          <ng-template #caption>
            <div class="table-toolbar">
              <div class="filter-controls">
              <button
                pButton
                type="button"
                label="Clear"
                icon="pi pi-filter-slash"
                class="p-button-outlined"
                (click)="clearSearch(assetTable)"
              ></button>
              <p-iconfield iconPosition="left" class="search-field">
                <p-inputicon><i class="pi pi-search"></i></p-inputicon>
                <input
                  pInputText
                  type="text"
                  [value]="searchTerm"
                  (input)="onSearch(assetTable, $event)"
                  placeholder="Search state ID or asset name"
                  aria-label="Search assets"
                />
              </p-iconfield>
              </div>
              <div class="toolbar-actions">
                <p-button label="Add" icon="pi pi-plus" [outlined]="true" (onClick)="addAsset()" />
                <p-button label="Delete" icon="pi pi-trash" severity="danger" [outlined]="true" [disabled]="!selectedAssets.length || bulkDeleting" [loading]="bulkDeleting" (onClick)="confirmDeleteSelected()" />
                <p-button label="Refresh" icon="pi pi-refresh" severity="secondary" [outlined]="true" [loading]="loading" (onClick)="refreshAssets()" />
                <p-button label="Log Incident" icon="pi pi-exclamation-triangle" severity="warn" [outlined]="true" (onClick)="logIncident()" />
                <p-button label="Export" icon="pi pi-download" severity="secondary" [outlined]="true" [loading]="exporting" (onClick)="exportCsv(assetTable)" />
                <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" [loading]="printing" (onClick)="printResults(assetTable)" />
              </div>
            </div>
          </ng-template>

          <ng-template #header>
            <tr>
              <th pFrozenColumn [frozen]="true" alignFrozen="left" class="selection-column"><p-tableHeaderCheckbox /></th>
              <th pFrozenColumn [frozen]="true" alignFrozen="left" class="state-column" pSortableColumn="stateId">
                State ID <p-sortIcon field="stateId" /><p-columnFilter type="text" field="stateId" display="menu" />
              </th>
              <th class="asset-column" pSortableColumn="name">
                Asset <p-sortIcon field="name" /><p-columnFilter type="text" field="name" display="menu" />
              </th>
              <th class="category-column" pSortableColumn="category">
                Category <p-sortIcon field="category" /><p-columnFilter type="text" field="category" display="menu" />
              </th>
              <th class="status-column" pSortableColumn="currentStatus">
                Status <p-sortIcon field="currentStatus" />
                <p-columnFilter field="currentStatus" matchMode="equals" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                  <ng-template #filter let-value let-filter="filterCallback">
                    <p-select [ngModel]="value" [options]="statusOptions" optionLabel="label" optionValue="value" placeholder="Any status" [showClear]="true" (ngModelChange)="filter($event)" fluid />
                  </ng-template>
                </p-columnFilter>
              </th>
              <th class="location-column" pSortableColumn="latitude">
                Location <p-sortIcon field="latitude" /><p-columnFilter type="text" field="locationText" display="menu" />
              </th>
              <th pSortableColumn="currentValue" class="value-column">
                Current value <p-sortIcon field="currentValue" /><p-columnFilter type="numeric" field="currentValue" display="menu" currency="EUR" />
              </th>
              <th class="actions-column">Actions</th>
            </tr>
          </ng-template>

          <ng-template #body let-asset>
            <tr>
              <td pFrozenColumn [frozen]="true" alignFrozen="left" class="selection-column"><p-tableCheckbox [value]="asset" /></td>
              <td pFrozenColumn [frozen]="true" alignFrozen="left"><span class="state-id">{{ asset.stateId || '\u2014' }}</span></td>
              <td>
                <div class="asset-name">{{ asset.name }}</div>
                <div class="asset-description">{{ asset.description || 'No description' }}</div>
              </td>
              <td>{{ asset.category || 'Uncategorised' }}</td>
              <td>
                <p-tag [value]="getStatusLabel(asset.currentStatus)" [severity]="getStatusSeverity(asset.currentStatus)" />
              </td>
              <td>
                <span *ngIf="hasCoordinates(asset); else noCoordinates">
                  {{ asset.latitude | number: '1.4-4' }}, {{ asset.longitude | number: '1.4-4' }}
                </span>
                <ng-template #noCoordinates><span class="muted">No coordinates</span></ng-template>
              </td>
              <td class="value-cell">{{ asset.currentValue | currency: 'EUR' : 'symbol' : '1.0-0' }}</td>
              <td class="actions-cell">
                <p-button
                  icon="pi pi-pencil"
                  severity="secondary"
                  [text]="true"
                  [rounded]="true"
                  ariaLabel="Edit asset"
                  (onClick)="editAsset(asset)"
                />
                <p-button
                  icon="pi pi-trash"
                  severity="danger"
                  [text]="true"
                  [rounded]="true"
                  ariaLabel="Delete asset"
                  (onClick)="confirmDelete(asset)"
                />
              </td>
            </tr>
          </ng-template>

          <ng-template #emptymessage>
            <tr>
              <td colspan="8" class="empty-cell">
                {{ loadError || (searchTerm ? 'No assets match your search.' : 'No assets found.') }}
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>

    <p-dialog
      [(visible)]="editDialogVisible"
      [modal]="true"
      [draggable]="false"
      [closable]="!saving"
      [style]="{ width: 'min(44rem, calc(100vw - 2rem))' }"
      [header]="isAdding ? 'Add Asset' : 'Edit Asset'"
      (onHide)="closeEditDialog()"
    >
      <ng-container *ngIf="editLoading; else assetEditForm">
        <div class="dialog-loading"><i class="pi pi-spin pi-spinner"></i> Loading asset details\u2026</div>
      </ng-container>

      <ng-template #assetEditForm>
        <form *ngIf="editDraft as draft" class="asset-edit-form" (ngSubmit)="saveAsset()">
          <div class="form-field">
            <label for="asset-state-id">State ID</label>
            <input pInputText id="asset-state-id" name="assetStateId" [(ngModel)]="draft.stateId" [readonly]="!isAdding" [placeholder]="isAdding ? 'Leave blank to generate automatically' : ''" />
          </div>

          <div class="form-field">
            <label for="asset-name">Name <span class="required-mark">*</span></label>
            <input pInputText id="asset-name" name="assetName" [(ngModel)]="draft.name" required />
          </div>

          <div class="form-field form-field--wide">
            <label for="asset-description">Description</label>
            <textarea pTextarea id="asset-description" name="assetDescription" [(ngModel)]="draft.description" rows="3" fluid></textarea>
          </div>

          <div class="form-field">
            <label for="asset-category-id">Category ID</label>
            <p-inputnumber inputId="asset-category-id" name="assetCategoryId" [(ngModel)]="draft.categoryId" [min]="1" [useGrouping]="false" fluid />
            <small class="field-hint">Category ID {{ draft.categoryId }}: {{ draft.category || 'Unknown category' }}</small>
          </div>

          <div class="form-field">
            <label for="asset-status">Status</label>
            <p-select inputId="asset-status" name="assetStatus" [(ngModel)]="draft.currentStatus" [options]="statusOptions" optionLabel="label" optionValue="value" fluid />
          </div>

          <div class="form-field form-field--wide">
            <label for="asset-registered-location">Registered location</label>
            <input pInputText id="asset-registered-location" name="registeredLocation" [(ngModel)]="draft.registeredLocation" />
          </div>

          <div class="form-field">
            <label for="asset-latitude">Latitude</label>
            <p-inputnumber inputId="asset-latitude" name="assetLatitude" [(ngModel)]="draft.latitude" [min]="-90" [max]="90" [minFractionDigits]="0" [maxFractionDigits]="8" fluid />
          </div>

          <div class="form-field">
            <label for="asset-longitude">Longitude</label>
            <p-inputnumber inputId="asset-longitude" name="assetLongitude" [(ngModel)]="draft.longitude" [min]="-180" [max]="180" [minFractionDigits]="0" [maxFractionDigits]="8" fluid />
          </div>

          <div class="form-field">
            <label for="asset-acquisition-date">Acquisition date</label>
            <input pInputText id="asset-acquisition-date" name="acquisitionDate" type="date" [(ngModel)]="draft.acquisitionDate" />
          </div>

          <div class="form-field">
            <label for="asset-current-value">Current value</label>
            <p-inputnumber inputId="asset-current-value" name="currentValue" [(ngModel)]="draft.currentValue" mode="currency" currency="EUR" locale="en-IE" [min]="0" fluid />
          </div>
        </form>
      </ng-template>

      <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" severity="secondary" [text]="true" [disabled]="saving" (onClick)="closeEditDialog()" />
        <p-button [label]="isAdding ? 'Create asset' : 'Save changes'" icon="pi pi-check" [loading]="saving" [disabled]="editLoading || !editDraft" (onClick)="saveAsset()" />
      </ng-template>
    </p-dialog>

    <p-dialog
      [(visible)]="incidentLogDialogVisible"
      header="Log Incident"
      [modal]="true"
      [draggable]="false"
      [style]="{ width: 'min(72rem, calc(100vw - 2rem))' }"
      [contentStyle]="{ 'max-height': '80vh', 'overflow-y': 'auto' }"
      (onHide)="incidentLogDialogVisible = false"
    >
      <app-incident-log
        *ngIf="incidentLogDialogVisible"
        [initialAssetStateId]="incidentAssetStateId"
        (logged)="onIncidentLogged($event)"
      />
    </p-dialog>
  `, providers: [ConfirmationService, MessageService], styles: ["/* angular:styles/component:scss;fe3170037562fa3bca8bfc012c2fc4b5e1bff871c3de846052a7973d9d413a9c;C:/xampp/htdocs/atims/atims-ui/src/app/features/assets/assets.component.ts */\n.assets-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.page-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.page-heading h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.page-heading p {\n  margin: 0.35rem 0 0;\n  color: var(--text-color-secondary);\n}\n.heading-subrow {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.heading-subrow p {\n  margin: 0;\n}\n.selected-count {\n  color: var(--primary-color);\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.asset-total {\n  color: var(--text-color-secondary);\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n.filter-controls,\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex: 0 0 auto;\n}\n.toolbar-actions {\n  flex-wrap: nowrap;\n}\n.search-field {\n  width: min(100%, 22rem);\n}\n.search-field input {\n  width: 100%;\n}\n.state-column {\n  width: 9rem;\n  min-width: 9rem;\n}\n.asset-column {\n  width: 14rem;\n  min-width: 14rem;\n}\n.category-column {\n  width: 11rem;\n  min-width: 11rem;\n}\n.status-column {\n  width: 12rem;\n  min-width: 12rem;\n}\n.location-column {\n  width: 12rem;\n  min-width: 12rem;\n}\n.selection-column {\n  width: 3rem;\n  min-width: 3rem;\n  text-align: center;\n}\n.actions-column {\n  min-width: 7rem;\n  text-align: center;\n}\n.actions-cell {\n  white-space: nowrap;\n  text-align: center;\n}\n.value-column {\n  width: 11rem;\n  min-width: 11rem;\n  text-align: right;\n}\n:host ::ng-deep .assets-table .p-datatable-thead > tr > th {\n  white-space: nowrap;\n}\n:host ::ng-deep .assets-table .p-column-filter {\n  display: inline-flex;\n  vertical-align: middle;\n  margin-left: 0.25rem;\n}\n.state-id {\n  font-family: var(--font-family);\n  font-size: 0.875rem;\n}\n.asset-name {\n  font-weight: 600;\n}\n.asset-description,\n.muted {\n  color: var(--text-color-secondary);\n  font-size: 0.8125rem;\n}\n.value-cell {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.empty-cell {\n  padding: 2rem !important;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.asset-edit-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.form-field {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.form-field--wide {\n  grid-column: 1/-1;\n}\n.form-field label {\n  font-weight: 600;\n}\n.field-hint {\n  color: var(--text-color-secondary);\n}\n.required-mark {\n  color: var(--red-500, #ef4444);\n}\n.dialog-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  min-height: 10rem;\n  color: var(--text-color-secondary);\n}\n@media (max-width: 640px) {\n  .page-heading {\n    align-items: flex-start;\n  }\n  .page-heading h1 {\n    font-size: 1.25rem;\n  }\n  .table-toolbar,\n  .filter-controls,\n  .toolbar-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .toolbar-actions p-button {\n    width: 100%;\n  }\n  .search-field {\n    width: 100%;\n  }\n  .asset-edit-form {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .form-field--wide {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=assets.component.css.map */\n"] }]
  }], () => [{ type: AssetService }, { type: ChangeDetectorRef }, { type: ConfirmationService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetsComponent, { className: "AssetsComponent", filePath: "src/app/features/assets/assets.component.ts", lineNumber: 339 });
})();
export {
  AssetsComponent
};
//# sourceMappingURL=chunk-4ET2DAUE.js.map
