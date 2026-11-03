import {
  AssetService
} from "./chunk-3HOLFFTT.js";
import {
  BaseIcon,
  Button,
  ButtonModule,
  CheckIcon,
  DomHandler,
  Fluid,
  InputText,
  InputTextModule,
  MotionDirective,
  MotionModule,
  Tag,
  TagModule,
  TimesIcon,
  blockBodyScroll,
  unblockBodyScroll,
  zindexutils
} from "./chunk-46A7EVRP.js";
import {
  BaseComponent,
  BaseModelHolder,
  BaseStyle,
  Bind,
  C,
  L,
  Lt,
  M,
  MessageService,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  T,
  TranslationKeys,
  bt,
  k2 as k,
  l,
  q2 as q,
  s2 as s,
  te,
  ut,
  vt,
  y2 as y
} from "./chunk-ZBRJC7FJ.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-6GZMF7H4.js";
import {
  environment
} from "./chunk-3TD3PA7B.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DecimalPipe,
  DestroyRef,
  Directive,
  EventEmitter,
  HostListener,
  HttpClient,
  HttpParams,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  booleanAttribute,
  catchError,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  inject,
  input,
  isPlatformBrowser,
  map,
  numberAttribute,
  of,
  output,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-UCY5OEF2.js";

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var _c0 = ["data-p-icon", "exclamation-triangle"];
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["", "data-p-icon", "exclamation-triangle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 7,
    vars: 2,
    consts: [["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1)(3, "path", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "defs")(5, "clipPath", 3);
        \u0275\u0275domElement(6, "rect", 4);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var _c02 = ["data-p-icon", "info-circle"];
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["", "data-p-icon", "info-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="info-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var _c03 = ["data-p-icon", "times-circle"];
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["", "data-p-icon", "times-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs
var _c04 = ["data-p-icon", "window-maximize"];
var WindowMaximizeIcon = class _WindowMaximizeIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMaximizeIcon_BaseFactory;
    return function WindowMaximizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMaximizeIcon_BaseFactory || (\u0275WindowMaximizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMaximizeIcon)))(__ngFactoryType__ || _WindowMaximizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMaximizeIcon,
    selectors: [["", "data-p-icon", "window-maximize"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMaximizeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="window-maximize"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs
var _c05 = ["data-p-icon", "window-minimize"];
var WindowMinimizeIcon = class _WindowMinimizeIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMinimizeIcon_BaseFactory;
    return function WindowMinimizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMinimizeIcon_BaseFactory || (\u0275WindowMinimizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMinimizeIcon)))(__ngFactoryType__ || _WindowMinimizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMinimizeIcon,
    selectors: [["", "data-p-icon", "window-minimize"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMinimizeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="window-minimize"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap extends BaseComponent {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  onInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  onChanges(changes) {
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return q("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? vt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    bt(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Lt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    bt(focusableElement);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FocusTrap_BaseFactory;
    return function FocusTrap_Factory(__ngFactoryType__) {
      return (\u0275FocusTrap_BaseFactory || (\u0275FocusTrap_BaseFactory = \u0275\u0275getInheritedFactory(_FocusTrap)))(__ngFactoryType__ || _FocusTrap);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FocusTrapModule,
    imports: [FocusTrap],
    exports: [FocusTrap]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/dialog/index.mjs
var style = "\n    .p-dialog {\n        max-height: 90%;\n        transform: scale(1);\n        border-radius: dt('dialog.border.radius');\n        box-shadow: dt('dialog.shadow');\n        background: dt('dialog.background');\n        border: 1px solid dt('dialog.border.color');\n        color: dt('dialog.color');\n        will-change: transform;\n    }\n\n    .p-dialog-content {\n        overflow-y: auto;\n        padding: dt('dialog.content.padding');\n        flex-grow: 1;\n    }\n\n    .p-dialog-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        padding: dt('dialog.header.padding');\n    }\n\n    .p-dialog-title {\n        font-weight: dt('dialog.title.font.weight');\n        font-size: dt('dialog.title.font.size');\n    }\n\n    .p-dialog-footer {\n        flex-shrink: 0;\n        padding: dt('dialog.footer.padding');\n        display: flex;\n        justify-content: flex-end;\n        gap: dt('dialog.footer.gap');\n    }\n\n    .p-dialog-header-actions {\n        display: flex;\n        align-items: center;\n        gap: dt('dialog.header.gap');\n    }\n\n    .p-dialog-top .p-dialog,\n    .p-dialog-bottom .p-dialog,\n    .p-dialog-left .p-dialog,\n    .p-dialog-right .p-dialog,\n    .p-dialog-topleft .p-dialog,\n    .p-dialog-topright .p-dialog,\n    .p-dialog-bottomleft .p-dialog,\n    .p-dialog-bottomright .p-dialog {\n        margin: 1rem;\n    }\n\n    .p-dialog-maximized {\n        width: 100vw !important;\n        height: 100vh !important;\n        top: 0px !important;\n        left: 0px !important;\n        max-height: 100%;\n        height: 100%;\n        border-radius: 0;\n    }\n\n    .p-dialog .p-resizable-handle {\n        position: absolute;\n        font-size: 0.1px;\n        display: block;\n        cursor: se-resize;\n        width: 12px;\n        height: 12px;\n        right: 1px;\n        bottom: 1px;\n    }\n\n    .p-dialog-enter-active {\n        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-dialog-leave-active {\n        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-dialog-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-dialog-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var _c06 = ["header"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["closeicon"];
var _c4 = ["maximizeicon"];
var _c5 = ["minimizeicon"];
var _c6 = ["headless"];
var _c7 = ["titlebar"];
var _c8 = ["*", [["p-footer"]]];
var _c9 = ["*", "p-footer"];
var _c10 = (a0) => ({
  ariaLabelledBy: a0
});
function Dialog_Conditional_0_Conditional_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("mousedown", function Dialog_Conditional_0_Conditional_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initResize($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("resizeHandle"));
    \u0275\u0275styleProp("z-index", 90);
    \u0275\u0275property("pBind", ctx_r1.ptm("resizeHandle"));
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("id", ctx_r1.ariaLabelledBy)("pBind", ctx_r1.ptm("title"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 29);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_1_Template, 1, 0, "svg", 26)(2, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_2_Template, 1, 0, "svg", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized && !ctx_r1._maximizeiconTemplate && !ctx_r1.maximizeIconTemplate && !ctx_r1.maximizeIconT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized && !ctx_r1._minimizeiconTemplate && !ctx_r1.minimizeIconTemplate && !ctx_r1.minimizeIconT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._maximizeiconTemplate || ctx_r1.maximizeIconTemplate || ctx_r1.maximizeIconT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._minimizeiconTemplate || ctx_r1.minimizeIconTemplate || ctx_r1.minimizeIconT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_span_0_Template, 1, 1, "span", 23)(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1_Template, 3, 2, "ng-container", 24)(2, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_Template, 2, 1, "ng-container", 24)(3, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", ctx_r1.maximizeIcon && !ctx_r1._maximizeiconTemplate && !ctx_r1._minimizeiconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximizeIcon && !(ctx_r1.maximizeButtonProps == null ? null : ctx_r1.maximizeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("onClick", function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_Template_p_button_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.maximize());
    });
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_ng_template_1_Template, 4, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pt", ctx_r1.ptm("pcMaximizeButton"))("styleClass", ctx_r1.cx("pcMaximizeButton"))("ariaLabel", ctx_r1.maximized ? ctx_r1.minimizeLabel : ctx_r1.maximizeLabel)("tabindex", ctx_r1.maximizable ? "0" : "-1")("buttonProps", ctx_r1.maximizeButtonProps)("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("data-pc-group-section", "headericon");
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275classMap(ctx_r1.closeIcon);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 32);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_span_1_Template, 1, 2, "span", 30)(2, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 24)(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_Template, 2, 1, "span", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", !ctx_r1._closeiconTemplate && !ctx_r1.closeIconTemplate && !ctx_r1.closeIconT && !(ctx_r1.closeButtonProps == null ? null : ctx_r1.closeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("onClick", function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_Template_p_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_ng_template_1_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pt", ctx_r1.ptm("pcCloseButton"))("styleClass", ctx_r1.cx("pcCloseButton"))("ariaLabel", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex)("buttonProps", ctx_r1.closeButtonProps)("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("data-pc-group-section", "headericon");
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16, 3);
    \u0275\u0275listener("mousedown", function Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initDrag($event));
    });
    \u0275\u0275template(2, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_span_2_Template, 2, 5, "span", 17)(3, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_ng_container_3_Template, 1, 0, "ng-container", 18);
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275template(5, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_5_Template, 3, 7, "p-button", 20)(6, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_p_button_6_Template, 3, 7, "p-button", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1._headerTemplate && !ctx_r1.headerTemplate && !ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headerTemplate || ctx_r1.headerTemplate || ctx_r1.headerT)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c10, ctx_r1.ariaLabelledBy));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("headerActions"));
    \u0275\u0275property("pBind", ctx_r1.ptm("headerActions"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closable);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19, 5);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Dialog_Conditional_0_Conditional_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("footer"));
    \u0275\u0275property("pBind", ctx_r1.ptm("footer"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_Conditional_0_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_Conditional_0_Conditional_1_ng_template_3_div_0_Template, 1, 5, "div", 12)(1, Dialog_Conditional_0_Conditional_1_ng_template_3_div_1_Template, 7, 13, "div", 13);
    \u0275\u0275elementStart(2, "div", 14, 2);
    \u0275\u0275projection(4);
    \u0275\u0275template(5, Dialog_Conditional_0_Conditional_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Dialog_Conditional_0_Conditional_1_ng_template_3_div_6_Template, 4, 4, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.resizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("content"), ctx_r1.contentStyleClass));
    \u0275\u0275property("ngStyle", ctx_r1.contentStyle)("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._contentTemplate || ctx_r1.contentTemplate || ctx_r1.contentT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9, 0);
    \u0275\u0275listener("pMotionOnBeforeEnter", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnAfterEnter", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnAfterEnter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAfterEnter($event));
    })("pMotionOnBeforeLeave", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnBeforeLeave_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBeforeLeave($event));
    })("pMotionOnAfterLeave", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnAfterLeave_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAfterLeave($event));
    });
    \u0275\u0275template(2, Dialog_Conditional_0_Conditional_1_ng_container_2_Template, 2, 1, "ng-container", 10)(3, Dialog_Conditional_0_Conditional_1_ng_template_3_Template, 7, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r8 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("pBind", ctx_r1.ptm("root"))("pFocusTrapDisabled", ctx_r1.focusTrap === false)("pMotion", ctx_r1.visible)("pMotionAppear", true)("pMotionName", "p-dialog")("pMotionOptions", ctx_r1.computedMotionOptions());
    \u0275\u0275attribute("role", ctx_r1.role)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true)("data-p", ctx_r1.dataP);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT)("ngIfElse", notHeadless_r8);
  }
}
function Dialog_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("pMotionOnAfterLeave", function Dialog_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMaskAfterLeave());
    });
    \u0275\u0275conditionalCreate(1, Dialog_Conditional_0_Conditional_1_Template, 5, 17, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("mask"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("mask"), ctx_r1.maskStyleClass));
    \u0275\u0275property("ngStyle", ctx_r1.maskStyle)("pBind", ctx_r1.ptm("mask"))("pMotion", ctx_r1.maskVisible)("pMotionAppear", true)("pMotionEnterActiveClass", ctx_r1.modal ? "p-overlay-mask-enter-active" : "")("pMotionLeaveActiveClass", ctx_r1.modal ? "p-overlay-mask-leave-active" : "")("pMotionOptions", ctx_r1.computedMaskMotionOptions());
    \u0275\u0275attribute("data-p-scrollblocker-active", ctx_r1.modal || ctx_r1.blockScroll)("data-p", ctx_r1.dataP);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.renderDialog() ? 1 : -1);
  }
}
var inlineStyles = {
  mask: ({
    instance
  }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: instance.position === "left" || instance.position === "topleft" || instance.position === "bottomleft" ? "flex-start" : instance.position === "right" || instance.position === "topright" || instance.position === "bottomright" ? "flex-end" : "center",
    alignItems: instance.position === "top" || instance.position === "topleft" || instance.position === "topright" ? "flex-start" : instance.position === "bottom" || instance.position === "bottomleft" || instance.position === "bottomright" ? "flex-end" : "center",
    pointerEvents: instance.modal ? "auto" : "none"
  }),
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
};
var classes = {
  mask: ({
    instance
  }) => {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === instance.position);
    return ["p-dialog-mask", {
      "p-overlay-mask": instance.modal
    }, pos ? `p-dialog-${pos}` : ""];
  },
  root: ({
    instance
  }) => ["p-dialog p-component", {
    "p-dialog-maximized": instance.maximizable && instance.maximized
  }],
  header: "p-dialog-header",
  title: "p-dialog-title",
  resizeHandle: "p-resizable-handle",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: () => ["p-dialog-content"],
  footer: "p-dialog-footer"
};
var DialogStyle = class _DialogStyle extends BaseStyle {
  name = "dialog";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DialogStyle_BaseFactory;
    return function DialogStyle_Factory(__ngFactoryType__) {
      return (\u0275DialogStyle_BaseFactory || (\u0275DialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DialogStyle)))(__ngFactoryType__ || _DialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DialogStyle,
    factory: _DialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogStyle, [{
    type: Injectable
  }], null, null);
})();
var DialogClasses;
(function(DialogClasses2) {
  DialogClasses2["mask"] = "p-dialog-mask";
  DialogClasses2["root"] = "p-dialog";
  DialogClasses2["header"] = "p-dialog-header";
  DialogClasses2["title"] = "p-dialog-title";
  DialogClasses2["headerActions"] = "p-dialog-header-actions";
  DialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
  DialogClasses2["pcCloseButton"] = "p-dialog-close-button";
  DialogClasses2["content"] = "p-dialog-content";
  DialogClasses2["footer"] = "p-dialog-footer";
})(DialogClasses || (DialogClasses = {}));
var DIALOG_INSTANCE = new InjectionToken("DIALOG_INSTANCE");
var Dialog = class _Dialog extends BaseComponent {
  componentName = "Dialog";
  hostName = "";
  $pcDialog = inject(DIALOG_INSTANCE, {
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
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = true;
  /**
   * Style of the content section.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = false;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = false;
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
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = true;
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @group Props
   */
  blockScroll = false;
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
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX = 0;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY = 0;
  /**
   * When enabled, first focusable element receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = false;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the animation.
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * The motion options for the mask.
   * @group Props
   */
  maskMotionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "maskMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMaskMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("maskMotion")), this.maskMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMaskMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Name of the close icon.
   * @group Props
   */
  closeIcon;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Index of the close button in tabbing order.
   * @group Props
   */
  closeTabindex = "0";
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  closeButtonProps = {
    severity: "secondary",
    variant: "text",
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  maximizeButtonProps = {
    severity: "secondary",
    variant: "text",
    rounded: true
  };
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
      this.renderMask.set(true);
      this.renderDialog.set(true);
    }
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  /**
   * Position of the dialog.
   * @group Props
   */
  position;
  /**
   * Role attribute of html element.
   * @group Emits
   */
  role = "dialog";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {boolean} value - New value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeInit = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog maximized or unmaximized.
   * @group Emits
   */
  onMaximize = new EventEmitter();
  headerViewChild;
  contentViewChild;
  footerViewChild;
  /**
   * Header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Content template.
   * @group Templates
   */
  contentTemplate;
  /**
   * Footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Close icon template.
   * @group Templates
   */
  closeIconTemplate;
  /**
   * Maximize icon template.
   * @group Templates
   */
  maximizeIconTemplate;
  /**
   * Minimize icon template.
   * @group Templates
   */
  minimizeIconTemplate;
  /**
   * Headless template.
   * @group Templates
   */
  headlessTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  _headerTemplate;
  /**
   * Custom content template.
   * @group Templates
   */
  _contentTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  _footerTemplate;
  /**
   * Custom close icon template.
   * @group Templates
   */
  _closeiconTemplate;
  /**
   * Custom maximize icon template.
   * @group Templates
   */
  _maximizeiconTemplate;
  /**
   * Custom minimize icon template.
   * @group Templates
   */
  _minimizeiconTemplate;
  /**
   * Custom headless template.
   * @group Templates
   */
  _headlessTemplate;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  renderMask = signal(false, ...ngDevMode ? [{
    debugName: "renderMask"
  }] : (
    /* istanbul ignore next */
    []
  ));
  renderDialog = signal(false, ...ngDevMode ? [{
    debugName: "renderDialog"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _visible = false;
  maskVisible;
  container = signal(null, ...ngDevMode ? [{
    debugName: "container"
  }] : (
    /* istanbul ignore next */
    []
  ));
  wrapper;
  dragging;
  ariaLabelledBy = this.getAriaLabelledBy();
  documentDragListener;
  documentDragEndListener;
  resizing;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  maskClickListener;
  lastPageX;
  lastPageY;
  preventVisibleChangePropagation;
  maximized;
  preMaximizeContentHeight;
  preMaximizeContainerWidth;
  preMaximizeContainerHeight;
  preMaximizePageX;
  preMaximizePageY;
  id = s("pn_id_");
  _style = {};
  originalStyle;
  transformOptions = "scale(0.7)";
  styleElement;
  window;
  _componentStyle = inject(DialogStyle);
  headerT;
  contentT;
  footerT;
  closeIconT;
  maximizeIconT;
  minimizeIconT;
  headlessT;
  zIndexForLayering;
  get maximizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
  }
  get minimizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["minimizeLabel"];
  }
  zone = inject(NgZone);
  overlayService = inject(OverlayService);
  get maskClass() {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === this.position);
    return {
      "p-dialog-mask": true,
      "p-overlay-mask": this.modal || this.dismissableMask,
      [`p-dialog-${pos}`]: pos
    };
  }
  onInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerT = item.template;
          break;
        case "content":
          this.contentT = item.template;
          break;
        case "footer":
          this.footerT = item.template;
          break;
        case "closeicon":
          this.closeIconT = item.template;
          break;
        case "maximizeicon":
          this.maximizeIconT = item.template;
          break;
        case "minimizeicon":
          this.minimizeIconT = item.template;
          break;
        case "headless":
          this.headlessT = item.template;
          break;
        default:
          this.contentT = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? s("pn_id_") + "_header" : null;
  }
  parseDurationToMilliseconds(durationString) {
    const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
    let totalMilliseconds = 0;
    let match;
    while ((match = transitionTimeRegex.exec(durationString)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      if (unit === "ms") {
        totalMilliseconds += value;
      } else if (unit === "s") {
        totalMilliseconds += value * 1e3;
      }
    }
    if (totalMilliseconds === 0) {
      return void 0;
    }
    return totalMilliseconds;
  }
  _focus(focusParentElement) {
    if (focusParentElement) {
      const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
      let _focusableElements = DomHandler.getFocusableElements(focusParentElement);
      if (_focusableElements && _focusableElements.length > 0) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => _focusableElements[0].focus(), timeoutDuration || 5);
        });
        return true;
      }
    }
    return false;
  }
  focus(focusParentElement = this.contentViewChild?.nativeElement) {
    let focused = this._focus(focusParentElement);
    if (!focused) {
      focused = this._focus(this.footerViewChild?.nativeElement);
      if (!focused) {
        focused = this._focus(this.headerViewChild?.nativeElement);
        if (!focused) {
          this._focus(this.contentViewChild?.nativeElement);
        }
      }
    }
  }
  close(event) {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    event.preventDefault();
  }
  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
    if (this.modal) {
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      const scrollBlockers = document.querySelectorAll('[data-p-scrollblocker-active="true"]');
      if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
        unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (!this.modal && !this.blockScroll) {
      if (this.maximized) {
        blockBodyScroll();
      } else {
        unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container(), this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container().style.zIndex, 10) - 1);
    } else {
      this.zIndexForLayering = zindexutils.generateZIndex("modal", (this.baseZIndex ?? 0) + this.config.zIndex.modal);
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement && !this.$unstyled()) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        te(this.styleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
        te(this.styleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  initDrag(event) {
    const target = event.target;
    const closestDiv = target.closest("div");
    if (closestDiv?.getAttribute("data-pc-section") === "headeractions") {
      return;
    }
    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container().style.margin = "0";
      this.document.body.setAttribute("data-p-unselectable-text", "true");
      !this.$unstyled() && T(this.document.body, {
        "user-select": "none"
      });
    }
  }
  onDrag(event) {
    if (this.dragging && this.container()) {
      const containerWidth = C(this.container());
      const containerHeight = L(this.container());
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container().getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container());
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = y();
      this.container().style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = `${leftPos}px`;
          this.lastPageX = event.pageX;
          this.container().style.left = `${leftPos}px`;
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = `${topPos}px`;
          this.lastPageY = event.pageY;
          this.container().style.top = `${topPos}px`;
        }
      } else {
        this.lastPageX = event.pageX;
        this.container().style.left = `${leftPos}px`;
        this.lastPageY = event.pageY;
        this.container().style.top = `${topPos}px`;
      }
      this.overlayService.emitParentDrag(this.container());
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      this.document.body.removeAttribute("data-p-unselectable-text");
      !this.$unstyled() && (this.document.body.style["user-select"] = "");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container().style.position = "";
    this.container().style.left = "";
    this.container().style.top = "";
    this.container().style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.document.body.setAttribute("data-p-unselectable-text", "true");
      !this.$unstyled() && T(this.document.body, {
        "user-select": "none"
      });
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = C(this.container());
      let containerHeight = L(this.container());
      let contentHeight = L(this.contentViewChild?.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container().style.minWidth;
      let minHeight = this.container().style.minHeight;
      let offset = this.container().getBoundingClientRect();
      let viewport = y();
      let hasBeenDragged = !parseInt(this.container().style.top) || !parseInt(this.container().style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container().style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container().style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      this.document.body.removeAttribute("data-p-unselectable-text");
      !this.$unstyled() && (this.document.body.style["user-select"] = "");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        const container = this.container();
        if (!container) {
          return;
        }
        const currentZIndex = zindexutils.getCurrent();
        if (parseInt(container.style.zIndex) == currentZIndex || this.zIndexForLayering == currentZIndex) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.$appendTo() !== "self") {
      ut(this.document.body, this.wrapper);
    }
  }
  restoreAppend() {
    if (this.container() && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onBeforeEnter(event) {
    this.container.set(event.element);
    this.wrapper = this.container()?.parentElement;
    this.$attrSelector && this.container()?.setAttribute(this.$attrSelector, "");
    this.appendContainer();
    this.moveOnTop();
    this.bindGlobalListeners();
    this.container()?.setAttribute(this.id, "");
    if (this.modal) {
      this.enableModality();
    }
  }
  onAfterEnter() {
    if (this.focusOnShow) {
      this.focus();
    }
    this.onShow.emit({});
  }
  onBeforeLeave() {
    if (this.modal) {
      this.maskVisible = false;
    }
  }
  onAfterLeave() {
    this.onContainerDestroy();
    this.renderDialog.set(false);
    if (this.modal) {
      this.renderMask.set(false);
    } else {
      this.maskVisible = false;
    }
    this.onHide.emit({});
    this.cd.markForCheck();
  }
  onMaskAfterLeave() {
    if (!this.renderDialog()) {
      this.renderMask.set(false);
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    if (this.maximized) {
      M(this.document.body, "p-overflow-hidden");
      this.document.body.style.removeProperty("--scrollbar-width");
      this.maximized = false;
    }
    if (this.modal) {
      this.disableModality();
    }
    if (k(this.document.body, "p-overflow-hidden")) {
      M(this.document.body, "p-overflow-hidden");
    }
    if (this.container() && this.autoZIndex) {
      zindexutils.clear(this.container());
    }
    if (this.zIndexForLayering) {
      zindexutils.revertZIndex(this.zIndexForLayering);
    }
    this.container.set(null);
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.container()) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
  }
  get dataP() {
    return this.cn({
      maximized: this.maximized,
      modal: this.modal
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Dialog_BaseFactory;
    return function Dialog_Factory(__ngFactoryType__) {
      return (\u0275Dialog_BaseFactory || (\u0275Dialog_BaseFactory = \u0275\u0275getInheritedFactory(_Dialog)))(__ngFactoryType__ || _Dialog);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dialog,
    selectors: [["p-dialog"]],
    contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, _c3, 4)(dirIndex, _c4, 4)(dirIndex, _c5, 4)(dirIndex, _c6, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._closeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._maximizeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._minimizeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dialog_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5)(_c1, 5)(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerViewChild = _t.first);
      }
    },
    inputs: {
      hostName: "hostName",
      header: "header",
      draggable: [2, "draggable", "draggable", booleanAttribute],
      resizable: [2, "resizable", "resizable", booleanAttribute],
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      modal: [2, "modal", "modal", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      breakpoints: "breakpoints",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      maskStyle: "maskStyle",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      minX: [2, "minX", "minX", numberAttribute],
      minY: [2, "minY", "minY", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      maximizable: [2, "maximizable", "maximizable", booleanAttribute],
      keepInViewport: [2, "keepInViewport", "keepInViewport", booleanAttribute],
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      transitionOptions: "transitionOptions",
      maskMotionOptions: [1, "maskMotionOptions"],
      motionOptions: [1, "motionOptions"],
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel",
      closeTabindex: "closeTabindex",
      minimizeIcon: "minimizeIcon",
      maximizeIcon: "maximizeIcon",
      closeButtonProps: "closeButtonProps",
      maximizeButtonProps: "maximizeButtonProps",
      visible: "visible",
      style: "style",
      position: "position",
      role: "role",
      appendTo: [1, "appendTo"],
      headerTemplate: [0, "content", "headerTemplate"],
      contentTemplate: "contentTemplate",
      footerTemplate: "footerTemplate",
      closeIconTemplate: "closeIconTemplate",
      maximizeIconTemplate: "maximizeIconTemplate",
      minimizeIconTemplate: "minimizeIconTemplate",
      headlessTemplate: "headlessTemplate"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange",
      onResizeInit: "onResizeInit",
      onResizeEnd: "onResizeEnd",
      onDragEnd: "onDragEnd",
      onMaximize: "onMaximize"
    },
    features: [\u0275\u0275ProvidersFeature([DialogStyle, {
      provide: DIALOG_INSTANCE,
      useExisting: _Dialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Dialog
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c9,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["icon", ""], ["footer", ""], [3, "class", "style", "ngStyle", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], [3, "pMotionOnAfterLeave", "ngStyle", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], ["pFocusTrap", "", 3, "class", "style", "ngStyle", "pBind", "pFocusTrapDisabled", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], ["pFocusTrap", "", 3, "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnBeforeLeave", "pMotionOnAfterLeave", "ngStyle", "pBind", "pFocusTrapDisabled", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [3, "class", "pBind", "z-index", "mousedown", 4, "ngIf"], [3, "class", "pBind", "mousedown", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "mousedown", "pBind"], [3, "id", "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [3, "pt", "styleClass", "ariaLabel", "tabindex", "buttonProps", "unstyled", "onClick", "keydown.enter", 4, "ngIf"], [3, "id", "pBind"], [3, "onClick", "keydown.enter", "pt", "styleClass", "ariaLabel", "tabindex", "buttonProps", "unstyled"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], ["data-p-icon", "window-maximize", 4, "ngIf"], ["data-p-icon", "window-minimize", 4, "ngIf"], ["data-p-icon", "window-maximize"], ["data-p-icon", "window-minimize"], [3, "class", 4, "ngIf"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"]],
    template: function Dialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c8);
        \u0275\u0275conditionalCreate(0, Dialog_Conditional_0_Template, 2, 14, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.renderMask() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      standalone: true,
      imports: [CommonModule, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule, Bind, MotionModule],
      template: `
        @if (renderMask()) {
            <div
                [class]="cn(cx('mask'), maskStyleClass)"
                [style]="sx('mask')"
                [ngStyle]="maskStyle"
                [pBind]="ptm('mask')"
                [pMotion]="maskVisible"
                [pMotionAppear]="true"
                [pMotionEnterActiveClass]="modal ? 'p-overlay-mask-enter-active' : ''"
                [pMotionLeaveActiveClass]="modal ? 'p-overlay-mask-leave-active' : ''"
                [pMotionOptions]="computedMaskMotionOptions()"
                (pMotionOnAfterLeave)="onMaskAfterLeave()"
                [attr.data-p-scrollblocker-active]="modal || blockScroll"
                [attr.data-p]="dataP"
            >
                @if (renderDialog()) {
                    <div
                        #container
                        [class]="cn(cx('root'), styleClass)"
                        [style]="sx('root')"
                        [ngStyle]="style"
                        [pBind]="ptm('root')"
                        pFocusTrap
                        [pFocusTrapDisabled]="focusTrap === false"
                        [pMotion]="visible"
                        [pMotionAppear]="true"
                        [pMotionName]="'p-dialog'"
                        [pMotionOptions]="computedMotionOptions()"
                        (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                        (pMotionOnAfterEnter)="onAfterEnter($event)"
                        (pMotionOnBeforeLeave)="onBeforeLeave($event)"
                        (pMotionOnAfterLeave)="onAfterLeave($event)"
                        [attr.role]="role"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [attr.aria-modal]="true"
                        [attr.data-p]="dataP"
                    >
                        <ng-container *ngIf="_headlessTemplate || headlessTemplate || headlessT; else notHeadless">
                            <ng-container *ngTemplateOutlet="_headlessTemplate || headlessTemplate || headlessT"></ng-container>
                        </ng-container>

                        <ng-template #notHeadless>
                            <div *ngIf="resizable" [class]="cx('resizeHandle')" [pBind]="ptm('resizeHandle')" [style.z-index]="90" (mousedown)="initResize($event)"></div>
                            <div #titlebar [class]="cx('header')" [pBind]="ptm('header')" (mousedown)="initDrag($event)" *ngIf="showHeader">
                                <span [id]="ariaLabelledBy" [class]="cx('title')" [pBind]="ptm('title')" *ngIf="!_headerTemplate && !headerTemplate && !headerT">{{ header }}</span>
                                <ng-container *ngTemplateOutlet="_headerTemplate || headerTemplate || headerT; context: { ariaLabelledBy: ariaLabelledBy }"></ng-container>
                                <div [class]="cx('headerActions')" [pBind]="ptm('headerActions')">
                                    <p-button
                                        [pt]="ptm('pcMaximizeButton')"
                                        *ngIf="maximizable"
                                        [styleClass]="cx('pcMaximizeButton')"
                                        [ariaLabel]="maximized ? minimizeLabel : maximizeLabel"
                                        (onClick)="maximize()"
                                        (keydown.enter)="maximize()"
                                        [tabindex]="maximizable ? '0' : '-1'"
                                        [buttonProps]="maximizeButtonProps"
                                        [unstyled]="unstyled()"
                                        [attr.data-pc-group-section]="'headericon'"
                                    >
                                        <ng-template #icon>
                                            <span *ngIf="maximizeIcon && !_maximizeiconTemplate && !_minimizeiconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                            <ng-container *ngIf="!maximizeIcon && !maximizeButtonProps?.icon">
                                                <svg data-p-icon="window-maximize" *ngIf="!maximized && !_maximizeiconTemplate && !maximizeIconTemplate && !maximizeIconT" />
                                                <svg data-p-icon="window-minimize" *ngIf="maximized && !_minimizeiconTemplate && !minimizeIconTemplate && !minimizeIconT" />
                                            </ng-container>
                                            <ng-container *ngIf="!maximized">
                                                <ng-template *ngTemplateOutlet="_maximizeiconTemplate || maximizeIconTemplate || maximizeIconT"></ng-template>
                                            </ng-container>
                                            <ng-container *ngIf="maximized">
                                                <ng-template *ngTemplateOutlet="_minimizeiconTemplate || minimizeIconTemplate || minimizeIconT"></ng-template>
                                            </ng-container>
                                        </ng-template>
                                    </p-button>
                                    <p-button
                                        [pt]="ptm('pcCloseButton')"
                                        *ngIf="closable"
                                        [styleClass]="cx('pcCloseButton')"
                                        [ariaLabel]="closeAriaLabel"
                                        (onClick)="close($event)"
                                        (keydown.enter)="close($event)"
                                        [tabindex]="closeTabindex"
                                        [buttonProps]="closeButtonProps"
                                        [unstyled]="unstyled()"
                                        [attr.data-pc-group-section]="'headericon'"
                                    >
                                        <ng-template #icon>
                                            <ng-container *ngIf="!_closeiconTemplate && !closeIconTemplate && !closeIconT && !closeButtonProps?.icon">
                                                <span *ngIf="closeIcon" [class]="closeIcon"></span>
                                                <svg data-p-icon="times" *ngIf="!closeIcon" />
                                            </ng-container>
                                            <span *ngIf="_closeiconTemplate || closeIconTemplate || closeIconT">
                                                <ng-template *ngTemplateOutlet="_closeiconTemplate || closeIconTemplate || closeIconT"></ng-template>
                                            </span>
                                        </ng-template>
                                    </p-button>
                                </div>
                            </div>
                            <div #content [class]="cn(cx('content'), contentStyleClass)" [ngStyle]="contentStyle" [pBind]="ptm('content')">
                                <ng-content></ng-content>
                                <ng-container *ngTemplateOutlet="_contentTemplate || contentTemplate || contentT"></ng-container>
                            </div>
                            <div #footer [class]="cx('footer')" [pBind]="ptm('footer')" *ngIf="_footerTemplate || footerTemplate || footerT">
                                <ng-content select="p-footer"></ng-content>
                                <ng-container *ngTemplateOutlet="_footerTemplate || footerTemplate || footerT"></ng-container>
                            </div>
                        </ng-template>
                    </div>
                }
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DialogStyle, {
        provide: DIALOG_INSTANCE,
        useExisting: Dialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Dialog
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    breakpoints: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    showHeader: [{
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
    minX: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    maskMotionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maskMotionOptions",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    closeTabindex: [{
      type: Input
    }],
    minimizeIcon: [{
      type: Input
    }],
    maximizeIcon: [{
      type: Input
    }],
    closeButtonProps: [{
      type: Input
    }],
    maximizeButtonProps: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onResizeInit: [{
      type: Output
    }],
    onResizeEnd: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onMaximize: [{
      type: Output
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }],
    headerTemplate: [{
      type: Input,
      args: ["content"]
    }],
    contentTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    closeIconTemplate: [{
      type: Input
    }],
    maximizeIconTemplate: [{
      type: Input
    }],
    minimizeIconTemplate: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _closeiconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    _maximizeiconTemplate: [{
      type: ContentChild,
      args: ["maximizeicon", {
        descendants: false
      }]
    }],
    _minimizeiconTemplate: [{
      type: ContentChild,
      args: ["minimizeicon", {
        descendants: false
      }]
    }],
    _headlessTemplate: [{
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
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule,
    imports: [Dialog, SharedModule],
    exports: [Dialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Dialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [Dialog, SharedModule],
      exports: [Dialog, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/textarea/index.mjs
var style2 = "\n    .p-textarea {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('textarea.color');\n        background: dt('textarea.background');\n        padding-block: dt('textarea.padding.y');\n        padding-inline: dt('textarea.padding.x');\n        border: 1px solid dt('textarea.border.color');\n        transition:\n            background dt('textarea.transition.duration'),\n            color dt('textarea.transition.duration'),\n            border-color dt('textarea.transition.duration'),\n            outline-color dt('textarea.transition.duration'),\n            box-shadow dt('textarea.transition.duration');\n        appearance: none;\n        border-radius: dt('textarea.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('textarea.shadow');\n    }\n\n    .p-textarea:enabled:hover {\n        border-color: dt('textarea.hover.border.color');\n    }\n\n    .p-textarea:enabled:focus {\n        border-color: dt('textarea.focus.border.color');\n        box-shadow: dt('textarea.focus.ring.shadow');\n        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');\n        outline-offset: dt('textarea.focus.ring.offset');\n    }\n\n    .p-textarea.p-invalid {\n        border-color: dt('textarea.invalid.border.color');\n    }\n\n    .p-textarea.p-variant-filled {\n        background: dt('textarea.filled.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:hover {\n        background: dt('textarea.filled.hover.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:focus {\n        background: dt('textarea.filled.focus.background');\n    }\n\n    .p-textarea:disabled {\n        opacity: 1;\n        background: dt('textarea.disabled.background');\n        color: dt('textarea.disabled.color');\n    }\n\n    .p-textarea::placeholder {\n        color: dt('textarea.placeholder.color');\n    }\n\n    .p-textarea.p-invalid::placeholder {\n        color: dt('textarea.invalid.placeholder.color');\n    }\n\n    .p-textarea-fluid {\n        width: 100%;\n    }\n\n    .p-textarea-resizable {\n        overflow: hidden;\n        resize: none;\n    }\n\n    .p-textarea-sm {\n        font-size: dt('textarea.sm.font.size');\n        padding-block: dt('textarea.sm.padding.y');\n        padding-inline: dt('textarea.sm.padding.x');\n    }\n\n    .p-textarea-lg {\n        font-size: dt('textarea.lg.font.size');\n        padding-block: dt('textarea.lg.padding.y');\n        padding-inline: dt('textarea.lg.padding.x');\n    }\n";

// node_modules/primeng/fesm2022/primeng-textarea.mjs
var style3 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-textarea p-component", {
    "p-filled": instance.$filled(),
    "p-textarea-resizable ": instance.autoResize,
    "p-variant-filled": instance.$variant() === "filled",
    "p-textarea-fluid": instance.hasFluid,
    "p-inputfield-sm p-textarea-sm": instance.pSize === "small",
    "p-textarea-lg p-inputfield-lg": instance.pSize === "large",
    "p-invalid": instance.invalid()
  }]
};
var TextareaStyle = class _TextareaStyle extends BaseStyle {
  name = "textarea";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaStyle_BaseFactory;
    return function TextareaStyle_Factory(__ngFactoryType__) {
      return (\u0275TextareaStyle_BaseFactory || (\u0275TextareaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaStyle)))(__ngFactoryType__ || _TextareaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TextareaStyle,
    factory: _TextareaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaStyle, [{
    type: Injectable
  }], null, null);
})();
var TextareaClasses;
(function(TextareaClasses2) {
  TextareaClasses2["root"] = "p-textarea";
})(TextareaClasses || (TextareaClasses = {}));
var TEXTAREA_INSTANCE = new InjectionToken("TEXTAREA_INSTANCE");
var Textarea = class _Textarea extends BaseModelHolder {
  componentName = "Textarea";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTextarea = inject(TEXTAREA_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * Used to pass attributes to DOM elements inside the Textarea component.
   * @defaultValue undefined
   * @group Props
   */
  pTextareaPT = input(...ngDevMode ? [void 0, {
    debugName: "pTextareaPT"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pTextareaUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pTextareaUnstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "invalid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  ngControlSubscription;
  _componentStyle = inject(TextareaStyle);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  constructor() {
    super();
    effect(() => {
      const pt = this.pTextareaPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pTextareaUnstyled() && this.directiveUnstyled.set(this.pTextareaUnstyled());
    });
  }
  onInit() {
    if (this.ngControl) {
      this.ngControlSubscription = this.ngControl.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  onAfterViewInit() {
    if (this.autoResize) this.resize();
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.autoResize) {
      this.resize();
    }
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput(e) {
    this.writeModelValue(e.target?.value);
    this.updateState();
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    if (this.autoResize) {
      this.resize();
    }
  }
  onDestroy() {
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
  static \u0275fac = function Textarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Textarea)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Textarea,
    selectors: [["", "pTextarea", ""], ["", "pInputTextarea", ""]],
    hostVars: 2,
    hostBindings: function Textarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function Textarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      pTextareaPT: [1, "pTextareaPT"],
      pTextareaUnstyled: [1, "pTextareaUnstyled"],
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275ProvidersFeature([TextareaStyle, {
      provide: TEXTAREA_INSTANCE,
      useExisting: _Textarea
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Textarea
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Textarea, [{
    type: Directive,
    args: [{
      selector: "[pTextarea], [pInputTextarea]",
      standalone: true,
      host: {
        "[class]": "cx('root')"
      },
      providers: [TextareaStyle, {
        provide: TEXTAREA_INSTANCE,
        useExisting: Textarea
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Textarea
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    pTextareaPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pTextareaPT",
        required: false
      }]
    }],
    pTextareaUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pTextareaUnstyled",
        required: false
      }]
    }],
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var TextareaModule = class _TextareaModule {
  static \u0275fac = function TextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextareaModule,
    imports: [Textarea],
    exports: [Textarea]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaModule, [{
    type: NgModule,
    args: [{
      imports: [Textarea],
      exports: [Textarea]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style4 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n        min-height: 0;\n        overflow: hidden;\n        transition: padding 250ms ease-in;\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n    \n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-active {\n        animation: p-animate-toast-enter 300ms ease-out;\n    }\n\n    .p-toast-message-leave-active {\n        animation: p-animate-toast-leave 250ms ease-in;\n    }\n\n    .p-toast-message-leave-to .p-toast-message-content {\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n\n    @keyframes p-animate-toast-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.6);\n        }\n        to {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n    }\n\n     @keyframes p-animate-toast-leave {\n        from {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n            margin-bottom: 0;\n            grid-template-rows: 0fr;\n            transform: translateY(-100%) scale(0.6);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c07 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c12 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c07, ctx_r0.message, ctx_r0.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageIcon"), ctx_r0.message == null ? null : ctx_r0.message.icon));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template, 1, 4, ":svg:svg", 7)(1, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template, 1, 4, ":svg:svg", 8)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template, 1, 4, ":svg:svg", 9)(3, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template, 1, 4, ":svg:svg", 10)(4, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template, 1, 4, ":svg:svg", 8);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.message.severity) === "success" ? 0 : tmp_4_0 === "info" ? 1 : tmp_4_0 === "error" ? 2 : tmp_4_0 === "warn" ? 3 : 4);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_ng_container_1_Conditional_1_Template, 1, 3, "span", 2)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Template, 5, 1);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message.icon ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("messageText"))("ngClass", ctx_r0.cx("messageText"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("summary"))("ngClass", ctx_r0.cx("summary"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("detail"))("ngClass", ctx_r0.cx("detail"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.message == null ? null : ctx_r0.message.closeIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 3, "span", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 15);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
    });
    \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
    \u0275\u0275attribute("class", ctx_r0.cx("closeButton"))("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 12, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 5, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageContent"), ctx_r0.message == null ? null : ctx_r0.message.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c12, ctx_r0.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.message == null ? null : ctx_r0.message.closable) !== false ? 3 : -1);
  }
}
var _c22 = ["message"];
var _c32 = ["headless"];
function Toast_p_toastItem_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 1);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_0_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("onAnimationEnd", function Toast_p_toastItem_0_Template_p_toastItem_onAnimationEnd_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd());
    })("onAnimationStart", function Toast_p_toastItem_0_Template_p_toastItem_onAnimationStart_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("clearAll", ctx_r1.clearAllTrigger())("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("pt", ctx_r1.pt)("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions());
  }
}
var inlineStyles2 = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes3 = {
  root: ({
    instance
  }) => ["p-toast p-component", `p-toast-${instance._position}`],
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  style = style4;
  classes = classes3;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var TOAST_INSTANCE = new InjectionToken("TOAST_INSTANCE");
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  motionOptions = input(...ngDevMode ? [void 0, {
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  clearAll = input(null, ...ngDevMode ? [{
    debugName: "clearAll"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onAnimationStart = output();
  onAnimationEnd = output();
  onBeforeEnter(event) {
    this.onAnimationStart.emit(event.element);
  }
  onAfterLeave(event) {
    if (!this.visible() && !this.isDestroyed) {
      this.onClose.emit({
        index: this.index,
        message: this.message
      });
      if (!this.isDestroyed) {
        this.onAnimationEnd.emit(event.element);
      }
    }
  }
  onClose = new EventEmitter();
  _componentStyle = inject(ToastStyle);
  timeout;
  visible = signal(void 0, ...ngDevMode ? [{
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isDestroyed = false;
  isClosing = false;
  constructor(zone) {
    super();
    this.zone = zone;
    effect(() => {
      if (this.clearAll()) {
        this.visible.set(false);
      }
    });
  }
  onAfterViewInit() {
    this.message?.sticky && this.visible.set(true);
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.clearTimeout();
      this.zone.runOutsideAngular(() => {
        this.visible.set(true);
        this.timeout = setTimeout(() => {
          this.visible.set(false);
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    if (!this.isClosing) {
      this.initTimeout();
    }
  }
  onCloseIconClick = (event) => {
    this.isClosing = true;
    this.clearTimeout();
    this.visible.set(false);
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onDestroy() {
    this.isDestroyed = true;
    this.clearTimeout();
    this.visible.set(false);
  }
  get dataP() {
    return this.cn({
      [this.message?.severity]: this.message?.severity
    });
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      clearAll: [1, "clearAll"]
    },
    outputs: {
      onAnimationStart: "onAnimationStart",
      onAnimationEnd: "onAnimationEnd",
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 10,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "mouseenter", "mouseleave", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], [3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("pMotionOnBeforeEnter", function ToastItem_Template_div_pMotionOnBeforeEnter_0_listener($event) {
          return ctx.onBeforeEnter($event);
        })("pMotionOnAfterLeave", function ToastItem_Template_div_pMotionOnAfterLeave_0_listener($event) {
          return ctx.onAfterLeave($event);
        })("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          return ctx.onMouseEnter();
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          return ctx.onMouseLeave();
        });
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 9, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("message"), ctx.message == null ? null : ctx.message.styleClass));
        \u0275\u0275property("pMotion", ctx.visible())("pMotionAppear", true)("pMotionName", "p-toast-message")("pMotionOptions", ctx.motionOptions())("pBind", ctx.ptm("message"));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-p", ctx.dataP);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind, MotionModule],
      template: `
        <div
            #container
            [pMotion]="visible()"
            [pMotionAppear]="true"
            [pMotionName]="'p-toast-message'"
            [pMotionOptions]="motionOptions()"
            (pMotionOnBeforeEnter)="onBeforeEnter($event)"
            (pMotionOnAfterLeave)="onAfterLeave($event)"
            [attr.id]="message?.id"
            [pBind]="ptm('message')"
            [class]="cn(cx('message'), message?.styleClass)"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-p]="dataP"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [pBind]="ptm('messageContent')" [class]="cn(cx('messageContent'), message?.contentStyleClass)">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [pBind]="ptm('messageIcon')" [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('info') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('error') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('warn') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @default {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                            }
                        }
                        <div [pBind]="ptm('messageText')" [ngClass]="cx('messageText')" [attr.data-p]="dataP">
                            <div [pBind]="ptm('summary')" [ngClass]="cx('summary')" [attr.data-p]="dataP">
                                {{ message.summary }}
                            </div>
                            <div [pBind]="ptm('detail')" [ngClass]="cx('detail')" [attr.data-p]="dataP">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button
                                [pBind]="ptm('closeButton')"
                                type="button"
                                [attr.class]="cx('closeButton')"
                                (click)="onCloseIconClick($event)"
                                (keydown.enter)="onCloseIconClick($event)"
                                [attr.aria-label]="closeAriaLabel"
                                autofocus
                                [attr.data-p]="dataP"
                            >
                                @if (message.closeIcon) {
                                    <span [pBind]="ptm('closeIcon')" *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    clearAll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "clearAll",
        required: false
      }]
    }],
    onAnimationStart: [{
      type: Output,
      args: ["onAnimationStart"]
    }],
    onAnimationEnd: [{
      type: Output,
      args: ["onAnimationEnd"]
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  componentName = "Toast";
  $pcToast = inject(TOAST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Key of the message in case message is targeted to a specific toast component.
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
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom message template.
   * @param {ToastMessageTemplateContext} context - message context.
   * @see {@link ToastMessageTemplateContext}
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @param {ToastHeadlessTemplateContext} context - headless context.
   * @see {@link ToastHeadlessTemplateContext}
   * @group Templates
   */
  headlessTemplate;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = s("pn_id_");
  templates;
  clearAllTrigger = signal(null, ...ngDevMode ? [{
    debugName: "clearAllTrigger"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
  }
  onInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.clearAll();
        }
      } else {
        this.clearAll();
      }
      this.cd.markForCheck();
    });
  }
  clearAll() {
    this.clearAllTrigger.set({});
  }
  _template;
  _headlessTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  onAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.onAnimationEnd();
    this.cd.detectChanges();
  }
  onAnimationStart() {
    this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
    if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
      zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  onAnimationEnd() {
    if (this.autoZIndex && l(this.messages)) {
      zindexutils.clear(this.el?.nativeElement);
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      te(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      te(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.el && this.autoZIndex) {
      zindexutils.clear(this.el.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  get dataP() {
    return this.cn({
      [this.position]: this.position
    });
  }
  static \u0275fac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c22, 5)(dirIndex, _c32, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 5,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle, {
      provide: TOAST_INSTANCE,
      useExisting: _Toast
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Toast
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "onClose", "onAnimationEnd", "onAnimationStart", 4, "ngFor", "ngForOf"], [3, "onClose", "onAnimationEnd", "onAnimationStart", "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Toast_p_toastItem_0_Template, 1, 9, "p-toastItem", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgForOf, ToastItem, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            [clearAll]="clearAllTrigger()"
            (onClose)="onMessageClose($event)"
            (onAnimationEnd)="onAnimationEnd()"
            (onAnimationStart)="onAnimationStart()"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            [pt]="pt"
            [unstyled]="unstyled()"
            [motionOptions]="computedMotionOptions()"
        ></p-toastItem>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle, {
        provide: TOAST_INSTANCE,
        useExisting: Toast
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Toast
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
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
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/incidents/incident.service.ts
var IncidentService = class _IncidentService {
  http;
  apiUrl = `${environment.apiBase}/incidents`;
  constructor(http) {
    this.http = http;
  }
  getIncidents(page = 1, limit = 10, search = "", includeHistory = false) {
    let params = new HttpParams().set("page", page).set("limit", limit).set("include_history", includeHistory ? "1" : "0");
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

// src/app/features/incidents/incident-log.component.ts
var _c08 = ["scannerVideo"];
var _c13 = () => ({ width: "min(34rem, calc(100vw - 2rem))" });
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
  initialAssetStateId = null;
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
    const selectedAsset = this.initialAssetStateId ?? this.route.snapshot.queryParamMap.get("asset");
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
    const input2 = event.target;
    const file = input2.files?.[0];
    if (!file)
      return;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      this.messageService.add({ severity: "error", summary: "Unsupported image", detail: "Choose a JPG, PNG, GIF or WebP image." });
      input2.value = "";
      return;
    }
    if (file.size > 800 * 1024) {
      this.messageService.add({ severity: "error", summary: "Image is too large", detail: "The maximum image size is 800 KB." });
      input2.value = "";
      return;
    }
    this.selectedFile = file;
  }
  clearFile(input2) {
    this.selectedFile = null;
    input2.value = "";
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
          this.logged.emit(uploadFailed);
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
      \u0275\u0275viewQuery(_c08, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scannerVideo = _t.first);
    }
  }, inputs: { initialAssetStateId: "initialAssetStateId" }, outputs: { logged: "logged" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 114, vars: 48, consts: [["defectImageInput", ""], ["scannerVideo", ""], ["footer", ""], [1, "incident-page"], [1, "page-heading"], ["value", "Asset will be marked out of service", "severity", "warn", "icon", "pi pi-exclamation-triangle"], [1, "incident-layout"], [1, "card", "incident-form-card"], [1, "section-heading"], [1, "section-icon"], [1, "pi", "pi-file-edit"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "assetStateId"], [1, "required-mark"], [1, "asset-input-row"], ["pInputText", "", "id", "assetStateId", "formControlName", "qrCodeData", "placeholder", "e.g. FLEET-000123", "autocomplete", "off", "fluid", "", 3, "invalid"], ["type", "button", "label", "Scan QR Code", "icon", "pi pi-qrcode", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], [1, "field-help"], ["class", "asset-lookup", "aria-live", "polite", 3, "ngClass", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], [1, "label-row"], ["for", "fieldNotes"], [1, "character-count"], ["pTextarea", "", "id", "fieldNotes", "formControlName", "fieldNotes", "rows", "6", "maxlength", "1000", "placeholder", "Describe the issue, when it was noticed, and any relevant details.", "fluid", "", 3, "invalid"], ["for", "defectImageInput"], [1, "optional-label"], [1, "upload-row"], ["id", "defectImageInput", "type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "visually-hidden", 3, "change"], ["type", "button", "label", "Choose image", "icon", "pi pi-image", "severity", "secondary", 3, "onClick", "outlined"], ["class", "file-name", 4, "ngIf"], ["type", "button", "icon", "pi pi-times", "severity", "danger", "ariaLabel", "Remove image", 3, "text", "rounded", "onClick", 4, "ngIf"], ["class", "field-help", 4, "ngIf"], [1, "gps-status"], [1, "gps-status-heading"], [1, "gps-icon"], [1, "pi", 3, "ngClass"], [1, "gps-status-copy"], [4, "ngIf"], [3, "value", "severity"], [1, "gps-actions"], ["type", "button", "icon", "pi pi-map-marker", "severity", "secondary", 3, "onClick", "label", "outlined", "loading", "disabled"], ["class", "gps-permission-help", 4, "ngIf"], ["role", "progressbar", "aria-label", "GPS accuracy", "aria-valuemin", "0", "aria-valuemax", "100", 1, "gps-meter"], [1, "form-actions"], ["type", "submit", "label", "Submit Incident", "icon", "pi pi-send", 3, "loading", "disabled"], [1, "card", "incident-info-card"], [1, "next-steps"], [1, "step-icon"], [1, "pi", "pi-search"], [1, "pi", "pi-book"], [1, "step-icon", "step-icon--warning"], [1, "pi", "pi-exclamation-triangle"], [1, "info-note"], [1, "pi", "pi-info-circle"], ["header", "Scan asset QR code", 3, "visibleChange", "onShow", "onHide", "visible", "modal", "draggable"], [1, "scanner-body"], ["autoplay", "", "playsinline", "", "muted", ""], [1, "scanner-help"], ["aria-live", "polite", 1, "asset-lookup", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "field-error"], [1, "file-name"], [1, "pi", "pi-paperclip"], [1, "muted"], ["type", "button", "icon", "pi pi-times", "severity", "danger", "ariaLabel", "Remove image", 3, "onClick", "text", "rounded"], [1, "gps-permission-help"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"]], template: function IncidentLogComponent_Template(rf, ctx) {
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
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c13));
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
  }], () => [{ type: FormBuilder }, { type: IncidentService }, { type: AssetService }, { type: ActivatedRoute }, { type: MessageService }, { type: DestroyRef }], { initialAssetStateId: [{
    type: Input
  }], logged: [{
    type: Output
  }], scannerVideo: [{
    type: ViewChild,
    args: ["scannerVideo"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentLogComponent, { className: "IncidentLogComponent", filePath: "src/app/features/incidents/incident-log.component.ts", lineNumber: 233 });
})();

export {
  Dialog,
  DialogModule,
  Textarea,
  TextareaModule,
  Toast,
  ToastModule,
  IncidentService,
  IncidentLogComponent
};
//# sourceMappingURL=chunk-RDDWE6MO.js.map
