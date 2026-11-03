import {
  Ae,
  M,
  P,
  PrimeNG,
  Ripple,
  RippleModule,
  SelectButton,
  SelectButtonModule,
  U,
  Ve,
  k2 as k,
  p2 as p,
  providePrimeNG,
  w2 as w
} from "./chunk-7VSYBYAC.js";
import {
  FormsModule,
  NavigationEnd,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling
} from "./chunk-WEE2LGWY.js";
import {
  CommonModule,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgZone,
  PLATFORM_ID,
  Renderer2,
  Subject,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  effect,
  filter,
  inject,
  input,
  isPlatformBrowser,
  provideHttpClient,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  takeUntil,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UCY5OEF2.js";

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c = { root: o, panel: r, header: t, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c2 = { borderRadius: "{border.radius.sm}" };
var f = { padding: "{list.option.padding}" };
var s = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l, dropdown: i, chip: c2, emptyMessage: f, colorScheme: s };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t2 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i2 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t2, xl: i2 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c3 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a2 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d2 = { root: r4, dot: o4, sm: e4, lg: c3, xl: a2, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i3 = { color: "{navigation.item.icon.color}" };
var t3 = { root: o7, item: r7, separator: i3 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t4 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a3 = { color: "{text.muted.color}" };
var d3 = { root: o9, body: r9, caption: t4, title: e7, subtitle: a3 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a4 = { padding: "1rem", gap: "0.5rem" };
var i4 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c4 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t5 = { root: r10, content: o10, indicatorList: a4, indicator: i4, colorScheme: c4 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l2 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i5 = { color: "{form.field.icon.color}" };
var f2 = { root: o11, dropdown: r11, overlay: d4, list: l2, option: e8, clearIcon: i5 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c5 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i6 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s2 = { root: o13, image: r13, icon: e10, removeIcon: c5, colorScheme: i6 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a5 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s3 = { root: r14, preview: o14, panel: e11, colorScheme: a5 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p2 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a6 = { root: o16, content: r16, icon: e13, footer: p2 };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i7 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a7 = { mobileIndent: "1rem" };
var t6 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c6 = { root: o17, list: i7, item: n3, submenu: a7, submenuIcon: t6, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/css/index.mjs
var t7 = "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n";

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d5 = { fontWeight: "600" };
var t8 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l3 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c7 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a8 = { fontWeight: "600" };
var n4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i8 = { color: "{primary.color}" };
var s4 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b = { size: "2rem" };
var p3 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var k2 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t8, bodyCell: l3, footerCell: c7, columnFooter: a8, footer: n4, dropPoint: i8, columnResizer: s4, resizeIndicator: g, sortIcon: u, loadingIcon: b, rowToggleButton: p3, filter: m, paginatorTop: h, paginatorBottom: k2, colorScheme: f3, css };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d6 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t9 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c8 = { root: o19, header: r19, content: d6, footer: e15, paginatorTop: t9, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c9 = { gap: "0.5rem", fontWeight: "500" };
var d7 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t10 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i9 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l4 = { margin: "0.5rem 0 0 0" };
var u2 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s5 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h2 = { margin: "0.5rem 0 0 0" };
var b2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p4 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v2 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k3 = { root: o20, panel: r20, header: e16, title: c9, dropdown: d7, inputIcon: n6, selectMonth: t10, selectYear: a9, group: i9, dayView: l4, weekDay: u2, date: s5, monthView: g2, month: f4, yearView: h2, year: b2, buttonbar: m2, timePicker: p4, colorScheme: v2 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a10 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d8 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l5 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a10, title: d8, content: r21, footer: l5 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t11 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a11 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a11, title: d10, content: r24, footer: l6 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t12 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l7 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t12, content: d11 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t13 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t13, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t14 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a12 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d12 = { gap: "0.5rem" };
var i10 = { root: r27, header: o27, content: e22, file: t14, fileList: a12, progressbar: n9, basic: d12 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i11 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a13 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d13 = { root: o28, over: i11, in: r28, on: a13 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t15 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c10 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a14 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s6 = { gap: "0.5rem", padding: "1rem" };
var u3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i12 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h3 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l8 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t15, thumbnailNavButton: c10, thumbnailNavButtonIcon: n10, caption: a14, indicatorList: s6, indicatorButton: u3, insetIndicatorList: i12, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h3 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l9 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i13 = { root: o31, input: l9 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a15 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i14 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a15, action: i14 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a16 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d15 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f6 = { root: o36, chip: r35, colorScheme: d15 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a17 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t16 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t16 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d16 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t17 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c11 = { root: o40, value: r39, range: t17, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d17 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t18 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l10 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d17, optionGroup: i15, checkmark: t18, emptyMessage: e28, colorScheme: l10 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i16 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a18 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t19 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c12 = { borderColor: "{content.border.color}" };
var d18 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g4 = { root: o42, baseItem: n15, item: i16, overlay: a18, submenu: r41, submenuLabel: t19, submenuIcon: e29, separator: c12, mobileButton: d18 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a19 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i17 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t20 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a19, submenuLabel: i17, separator: t20 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i18 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a20 = { borderColor: "{content.border.color}" };
var t21 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i18, item: n17, submenu: r43, separator: a20, mobileButton: t21 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l11 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s7 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c13 = { root: { borderWidth: "1px" } };
var a21 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u4 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l11, closeIcon: s7, outlined: c13, simple: a21, colorScheme: d19 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a22 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l12 = { size: "1rem" };
var t22 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b3 = { root: e32, meters: r45, label: a22, labelMarker: o46, labelIcon: l12, labelList: t22 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d20 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l13 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i19 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var a23 = { borderRadius: "{border.radius.sm}" };
var c14 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d20, overlay: r46, list: l13, option: i19, optionGroup: e33, chip: a23, clearIcon: f7, emptyMessage: c14 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a24 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a24 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t23 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t23 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t24 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t25 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t25, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d21 = { fontWeight: "600" };
var t26 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a25 = { root: r50, header: o52, toggleableHeader: e36, title: d21, content: t26, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i20 = { indent: "1rem" };
var t27 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a26 = { root: o53, panel: r51, item: n23, submenu: i20, submenuIcon: t27 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a27 = { gap: "0.5rem" };
var d22 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a27, colorScheme: d22 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a28 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a28 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t28 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i21 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s8 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a29 = { root: r60, bar: o62, colorScheme: s8 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l14 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i22 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var c15 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a30 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d23, list: l14, option: i22, optionGroup: e41, clearIcon: f8, checkmark: c15, emptyMessage: a30 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d24 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a31 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a31 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t29 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a32 = { root: o66, track: r64, range: n26, handle: t29, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t30 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a33 = { root: t30 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d25 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t31 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t32 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a34 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c16 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d26 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i23 = { root: o68, separator: r67, step: e43, stepHeader: t32, stepTitle: n28, stepNumber: a34, steppanels: c16, steppanel: d26 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t33 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c17 = { root: o69, separator: r68, itemLink: t33, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t34 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c18 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t34, itemIcon: e45, activeBar: c18 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c19 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a35 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i24 = { root: o71, tablist: r70, tab: t35, tabpanel: n31, navButton: c19, activeBar: e46, colorScheme: a35 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t36 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a36 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c20 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t36, tabPanel: n32, navButton: a36, colorScheme: c20 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a37 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a37 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d27 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d27 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d28 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a38 = { mobileIndent: "1rem" };
var t37 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c21 = { root: o76, list: i25, item: n34, submenu: a38, submenuIcon: t37, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t38 = { color: "{content.border.color}", size: "2px" };
var d29 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t38 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a39 = { fontWeight: "500", fontSize: "1rem" };
var s9 = { fontWeight: "500", fontSize: "0.875rem" };
var c22 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l15 = { size: "1rem" };
var t39 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u5 = { root: o78, icon: r76, content: e50, text: n36, summary: a39, detail: s9, closeButton: c22, closeIcon: l15, colorScheme: t39 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d30 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c23 = { root: r77, icon: o79, content: e51, colorScheme: d30 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c24 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t40 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n37 = { size: "2rem" };
var c25 = { margin: "0 0 0.5rem 0" };
var css2 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var d31 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t40, loadingIcon: n37, filter: c25, css: css2 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d32 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l16 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i26 = { borderRadius: "{border.radius.sm}" };
var f9 = { color: "{form.field.icon.color}" };
var a40 = { root: o84, dropdown: r82, overlay: d32, tree: l16, emptyMessage: e55, chip: i26, clearIcon: f9 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t41 = { fontWeight: "600" };
var c26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var l17 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var d33 = { fontWeight: "600" };
var a41 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i27 = { width: "0.5rem" };
var g5 = { width: "1px", color: "{primary.color}" };
var s10 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u6 = { size: "2rem" };
var b4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m3 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css3 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k4 = { root: o85, header: r83, headerCell: e56, columnTitle: t41, row: c26, bodyCell: n38, footerCell: l17, columnFooter: d33, footer: a41, columnResizer: i27, resizeIndicator: g5, sortIcon: s10, loadingIcon: u6, nodeToggleButton: b4, paginatorTop: h4, paginatorBottom: m3, colorScheme: f10, css: css3 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m4 = Object.getOwnPropertyDescriptors;
var i28 = Object.getOwnPropertySymbols;
var t42 = Object.prototype.hasOwnProperty;
var a42 = Object.prototype.propertyIsEnumerable;
var o87 = (e173, m14, i90) => m14 in e173 ? r84(e173, m14, { enumerable: true, configurable: true, writable: true, value: i90 }) : e173[m14] = i90;
var Nr;
var Qr = (Nr = ((r253, e173) => {
  for (var m14 in e173 || (e173 = {})) t42.call(e173, m14) && o87(r253, m14, e173[m14]);
  if (i28) for (var m14 of i28(e173)) a42.call(e173, m14) && o87(r253, m14, e173[m14]);
  return r253;
})({}, e5), e58(Nr, m4({ components: { accordion: c, autocomplete: a, avatar: n, badge: d2, blockui: o6, breadcrumb: t3, button: e6, card: d3, carousel: t5, cascadeselect: f2, checkbox: e9, chip: s2, colorpicker: s3, confirmdialog: r15, confirmpopup: a6, contextmenu: c6, datatable: v, dataview: c8, datepicker: k3, dialog: e17, divider: t11, dock: d9, drawer: e19, editor: l7, fieldset: e21, fileupload: i10, floatlabel: d13, galleria: l8, iconfield: r30, iftalabel: i13, image: e24, imagecompare: r32, inlinemessage: a16, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a17, inputotp: e27, inputtext: d16, knob: c11, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u4, metergroup: b3, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t24, paginator: n21, panel: a25, panelmenu: a26, password: n24, picklist: o55, popover: e38, progressbar: t28, progressspinner: r56, radiobutton: e40, rating: i21, ripple: o61, scrollpanel: a29, select: n25, selectbutton: d24, skeleton: o65, slider: a32, speeddial: a33, splitbutton: d25, splitter: t31, stepper: i23, steps: c17, tabmenu: n30, tabs: i24, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c21, timeline: d29, toast: u5, togglebutton: c23, toggleswitch: c24, toolbar: r79, tooltip: e53, tree: d31, treeselect: a40, treetable: k4, virtualscroller: e57 }, css: t7 })));

// node_modules/primeng/fesm2022/primeng-styleclass.mjs
var StyleClass = class _StyleClass {
  el;
  renderer;
  zone;
  constructor(el, renderer, zone) {
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
  }
  /**
   * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
   * @group Props
   */
  selector;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterFromClass;
  /**
   * Style class to add during enter animation.
   * @group Props
   */
  enterActiveClass;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterToClass;
  /**
   * Style class to add when item begins to get hidden.
   * @group Props
   */
  leaveFromClass;
  /**
   * Style class to add during leave animation.
   * @group Props
   */
  leaveActiveClass;
  /**
   * Style class to add when leave animation is completed.
   * @group Props
   */
  leaveToClass;
  /**
   * Whether to trigger leave animation when outside of the element is clicked.
   * @group Props
   */
  hideOnOutsideClick;
  /**
   * Adds or removes a class when no enter-leave animation is required.
   * @group Props
   */
  toggleClass;
  /**
   * Whether to trigger leave animation when escape key pressed.
   * @group Props
   */
  hideOnEscape;
  /**
   * Whether to trigger leave animation when the target element resized.
   * @group Props
   */
  hideOnResize;
  /**
   * Target element to listen resize. Valid values are "window", "document" or target element selector.
   * @group Props
   */
  resizeSelector;
  eventListener;
  documentClickListener;
  documentKeydownListener;
  windowResizeListener;
  resizeObserver;
  target;
  enterListener;
  leaveListener;
  animating;
  _enterClass;
  _leaveClass;
  _resizeTarget;
  clickListener() {
    this.target ||= U(this.selector, this.el.nativeElement);
    if (this.toggleClass) {
      this.toggle();
    } else {
      if (this.target?.offsetParent === null) this.enter();
      else this.leave();
    }
  }
  toggle() {
    if (k(this.target, this.toggleClass)) M(this.target, this.toggleClass);
    else P(this.target, this.toggleClass);
  }
  enter() {
    if (this.enterActiveClass) {
      if (!this.animating) {
        this.animating = true;
        if (this.enterActiveClass.includes("slidedown")) {
          this.target.style.height = "0px";
          M(this.target, this.enterFromClass || "hidden");
          this.target.style.maxHeight = this.target.scrollHeight + "px";
          P(this.target, this.enterFromClass || "hidden");
          this.target.style.height = "";
        }
        P(this.target, this.enterActiveClass);
        if (this.enterFromClass) {
          M(this.target, this.enterFromClass);
        }
        this.enterListener = this.renderer.listen(this.target, "animationend", () => {
          M(this.target, this.enterActiveClass);
          if (this.enterToClass) {
            P(this.target, this.enterToClass);
          }
          this.enterListener && this.enterListener();
          if (this.enterActiveClass?.includes("slidedown")) {
            this.target.style.maxHeight = "";
          }
          this.animating = false;
        });
      }
    } else {
      if (this.enterFromClass) {
        M(this.target, this.enterFromClass);
      }
      if (this.enterToClass) {
        P(this.target, this.enterToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.bindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.bindDocumentKeydownListener();
    }
    if (this.hideOnResize) {
      this.bindResizeListener();
    }
  }
  leave() {
    if (this.leaveActiveClass) {
      if (!this.animating) {
        this.animating = true;
        P(this.target, this.leaveActiveClass);
        if (this.leaveFromClass) {
          M(this.target, this.leaveFromClass);
        }
        this.leaveListener = this.renderer.listen(this.target, "animationend", () => {
          M(this.target, this.leaveActiveClass);
          if (this.leaveToClass) {
            P(this.target, this.leaveToClass);
          }
          this.leaveListener && this.leaveListener();
          this.animating = false;
        });
      }
    } else {
      if (this.leaveFromClass) {
        M(this.target, this.leaveFromClass);
      }
      if (this.leaveToClass) {
        P(this.target, this.leaveToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.unbindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.unbindDocumentKeydownListener();
    }
    if (this.hideOnResize) {
      this.unbindResizeListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "click", (event) => {
        if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentClickListener();
        else if (this.isOutsideClick(event)) this.leave();
      });
    }
  }
  bindDocumentKeydownListener() {
    if (!this.documentKeydownListener) {
      this.zone.runOutsideAngular(() => {
        this.documentKeydownListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "keydown", (event) => {
          const {
            key,
            keyCode,
            which,
            type
          } = event;
          if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentKeydownListener();
          if (this.isVisible() && key === "Escape" && keyCode === 27 && which === 27) this.leave();
        });
      });
    }
  }
  isVisible() {
    return this.target.offsetParent !== null;
  }
  isOutsideClick(event) {
    return !this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target);
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  unbindDocumentKeydownListener() {
    if (this.documentKeydownListener) {
      this.documentKeydownListener();
      this.documentKeydownListener = null;
    }
  }
  bindResizeListener() {
    this._resizeTarget = U(this.resizeSelector);
    if (p(this._resizeTarget)) {
      this.bindElementResizeListener();
    } else {
      this.bindWindowResizeListener();
    }
  }
  unbindResizeListener() {
    this.unbindWindowResizeListener();
    this.unbindElementResizeListener();
  }
  bindWindowResizeListener() {
    if (!this.windowResizeListener) {
      this.zone.runOutsideAngular(() => {
        this.windowResizeListener = this.renderer.listen(window, "resize", () => {
          if (!this.isVisible()) {
            this.unbindWindowResizeListener();
          } else {
            this.leave();
          }
        });
      });
    }
  }
  unbindWindowResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  bindElementResizeListener() {
    if (!this.resizeObserver && this._resizeTarget) {
      let isFirstResize = true;
      this.resizeObserver = new ResizeObserver(() => {
        if (isFirstResize) {
          isFirstResize = false;
          return;
        }
        if (this.isVisible()) {
          this.leave();
        }
      });
      this.resizeObserver.observe(this._resizeTarget);
    }
  }
  unbindElementResizeListener() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = void 0;
    }
  }
  ngOnDestroy() {
    this.target = null;
    this._resizeTarget = null;
    if (this.eventListener) {
      this.eventListener();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentKeydownListener();
    this.unbindResizeListener();
  }
  static \u0275fac = function StyleClass_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClass)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _StyleClass,
    selectors: [["", "pStyleClass", ""]],
    hostBindings: function StyleClass_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function StyleClass_click_HostBindingHandler() {
          return ctx.clickListener();
        });
      }
    },
    inputs: {
      selector: [0, "pStyleClass", "selector"],
      enterFromClass: "enterFromClass",
      enterActiveClass: "enterActiveClass",
      enterToClass: "enterToClass",
      leaveFromClass: "leaveFromClass",
      leaveActiveClass: "leaveActiveClass",
      leaveToClass: "leaveToClass",
      hideOnOutsideClick: [2, "hideOnOutsideClick", "hideOnOutsideClick", booleanAttribute],
      toggleClass: "toggleClass",
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      hideOnResize: [2, "hideOnResize", "hideOnResize", booleanAttribute],
      resizeSelector: "resizeSelector"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClass, [{
    type: Directive,
    args: [{
      selector: "[pStyleClass]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    selector: [{
      type: Input,
      args: ["pStyleClass"]
    }],
    enterFromClass: [{
      type: Input
    }],
    enterActiveClass: [{
      type: Input
    }],
    enterToClass: [{
      type: Input
    }],
    leaveFromClass: [{
      type: Input
    }],
    leaveActiveClass: [{
      type: Input
    }],
    leaveToClass: [{
      type: Input
    }],
    hideOnOutsideClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggleClass: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizeSelector: [{
      type: Input
    }],
    clickListener: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var StyleClassModule = class _StyleClassModule {
  static \u0275fac = function StyleClassModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClassModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StyleClassModule,
    imports: [StyleClass],
    exports: [StyleClass]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClassModule, [{
    type: NgModule,
    args: [{
      imports: [StyleClass],
      exports: [StyleClass]
    }]
  }], null, null);
})();

// node_modules/@primeuix/themes/dist/index.mjs
var a43 = (...t122) => Ve(...t122);
var s11 = (t122) => Ae(t122);

// node_modules/@primeuix/themes/dist/lara/accordion/index.mjs
var o88 = { transitionDuration: "{transition.duration}" };
var r85 = { borderWidth: "0", borderColor: "{content.border.color}" };
var e59 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var t43 = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" };
var c27 = { light: { header: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.50}", activeHoverBackground: "{surface.100}" } }, dark: { header: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.800}", activeHoverBackground: "{surface.700}" } } };
var d34 = { root: o88, panel: r85, header: e59, content: t43, colorScheme: c27 };

// node_modules/@primeuix/themes/dist/lara/autocomplete/index.mjs
var o89 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r86 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d35 = { padding: "{list.padding}", gap: "{list.gap}" };
var e60 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l18 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i29 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var c28 = { borderRadius: "{border.radius.sm}" };
var f11 = { padding: "{list.option.padding}" };
var s12 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a44 = { root: o89, overlay: r86, list: d35, option: e60, optionGroup: l18, dropdown: i29, chip: c28, emptyMessage: f11, colorScheme: s12 };

// node_modules/@primeuix/themes/dist/lara/avatar/index.mjs
var e61 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r87 = { size: "1rem" };
var o90 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t44 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i30 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n39 = { root: e61, icon: r87, group: o90, lg: t44, xl: i30 };

// node_modules/@primeuix/themes/dist/lara/badge/index.mjs
var r88 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o91 = { size: "0.5rem" };
var e62 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c29 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a45 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n40 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d36 = { root: r88, dot: o91, sm: e62, lg: c29, xl: a45, colorScheme: n40 };

// node_modules/@primeuix/themes/dist/lara/base/index.mjs
var o92 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var r89 = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "transparent", offset: "0" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.625rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.5rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 1rem 0 1rem" }, option: { padding: "0.625rem 1rem", borderRadius: "0" }, optionGroup: { padding: "0.625rem 1rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 1rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.625rem 1rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "1rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.5rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }, navigation: { shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, focusRing: { shadow: "0 0 0 0.2rem {primary.200}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.0}", borderColor: "{surface.300}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.500}", shadow: "none" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, focusRing: { shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.950}", borderColor: "{surface.600}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e63 = { primitive: o92, semantic: r89 };

// node_modules/@primeuix/themes/dist/lara/blockui/index.mjs
var r90 = { borderRadius: "{content.border.radius}" };
var o93 = { root: r90 };

// node_modules/@primeuix/themes/dist/lara/breadcrumb/index.mjs
var o94 = { padding: "1.25rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r91 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i31 = { color: "{navigation.item.icon.color}" };
var t45 = { root: o94, item: r91, separator: i31 };

// node_modules/@primeuix/themes/dist/lara/button/index.mjs
var r92 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.75rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.25rem" }, label: { fontWeight: "600" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", offset: "{form.field.focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o95 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {primary.200}" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.200}" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {sky.200}" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {green.200}" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {orange.200}" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {purple.200}" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {red.200}" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.400}" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e64 = { root: r92, colorScheme: o95 };

// node_modules/@primeuix/themes/dist/lara/card/index.mjs
var o96 = { background: "{content.background}", borderRadius: "{border.radius.lg}", color: "{content.color}", shadow: "0 .125rem .25rem rgba(0,0,0,.075)" };
var r93 = { padding: "1.5rem", gap: "0.75rem" };
var e65 = { gap: "0.5rem" };
var t46 = { fontSize: "1.25rem", fontWeight: "700" };
var a46 = { color: "{text.muted.color}" };
var d37 = { root: o96, body: r93, caption: e65, title: t46, subtitle: a46 };

// node_modules/@primeuix/themes/dist/lara/carousel/index.mjs
var r94 = { transitionDuration: "{transition.duration}" };
var o97 = { gap: "0.25rem" };
var a47 = { padding: "1rem", gap: "0.5rem" };
var i32 = { width: "1rem", height: "1rem", borderRadius: "50", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c30 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t47 = { root: r94, content: o97, indicatorList: a47, indicator: i32, colorScheme: c30 };

// node_modules/@primeuix/themes/dist/lara/cascadeselect/index.mjs
var o98 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r95 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d38 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l19 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1.25rem" };
var e66 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i33 = { color: "{form.field.icon.color}" };
var f12 = { root: o98, dropdown: r95, overlay: d38, list: l19, option: e66, clearIcon: i33 };

// node_modules/@primeuix/themes/dist/lara/checkbox/index.mjs
var o99 = { borderRadius: "{border.radius.sm}", width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } };
var r96 = { size: "1rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } };
var e67 = { root: o99, icon: r96 };

// node_modules/@primeuix/themes/dist/lara/chip/index.mjs
var o100 = { borderRadius: "16px", paddingX: "0.875rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r97 = { width: "2rem", height: "2rem" };
var e68 = { size: "1rem" };
var c31 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i34 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s13 = { root: o100, image: r97, icon: e68, removeIcon: c31, colorScheme: i34 };

// node_modules/@primeuix/themes/dist/lara/colorpicker/index.mjs
var r98 = { transitionDuration: "{transition.duration}" };
var o101 = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var e69 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a48 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var d39 = { root: r98, preview: o101, panel: e69, colorScheme: a48 };

// node_modules/@primeuix/themes/dist/lara/confirmdialog/index.mjs
var o102 = { size: "2rem", color: "{overlay.modal.color}" };
var e70 = { gap: "1rem" };
var r99 = { icon: o102, content: e70 };

// node_modules/@primeuix/themes/dist/lara/confirmpopup/index.mjs
var o103 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r100 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e71 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p5 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a49 = { root: o103, content: r100, icon: e71, footer: p5 };

// node_modules/@primeuix/themes/dist/lara/contextmenu/index.mjs
var o104 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i35 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n41 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a50 = { mobileIndent: "1.25rem" };
var t48 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r101 = { borderColor: "{content.border.color}" };
var c32 = { root: o104, list: i35, item: n41, submenu: a50, submenuIcon: t48, separator: r101 };

// node_modules/@primeuix/themes/dist/lara/datatable/index.mjs
var o105 = { transitionDuration: "{transition.duration}" };
var r102 = { borderColor: "{datatable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e72 = { selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d40 = { fontWeight: "700" };
var l20 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c33 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var t49 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a51 = { fontWeight: "700" };
var n42 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var s14 = { color: "{primary.color}" };
var i36 = { width: "0.5rem" };
var g6 = { width: "1px", color: "{primary.color}" };
var u7 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b5 = { size: "2rem" };
var p6 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f13 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h5 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var m5 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v3 = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k5 = { root: o105, header: r102, headerCell: e72, columnTitle: d40, row: l20, bodyCell: c33, footerCell: t49, columnFooter: a51, footer: n42, dropPoint: s14, columnResizer: i36, resizeIndicator: g6, sortIcon: u7, loadingIcon: b5, rowToggleButton: p6, filter: f13, paginatorTop: h5, paginatorBottom: m5, colorScheme: v3 };

// node_modules/@primeuix/themes/dist/lara/dataview/index.mjs
var o106 = { borderColor: "{content.border.color}", borderWidth: "1px", borderRadius: "4px", padding: "0" };
var r103 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.875rem 1.125rem", borderRadius: "5px 5px 0 0" };
var e73 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "5px" };
var d41 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.875rem 1.125rem", borderRadius: "0 0 5px 5px" };
var t50 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n43 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c34 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } };
var a52 = { root: o106, header: r103, content: e73, footer: d41, paginatorTop: t50, paginatorBottom: n43, colorScheme: c34 };

// node_modules/@primeuix/themes/dist/lara/datepicker/index.mjs
var o107 = { transitionDuration: "{transition.duration}" };
var r104 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e74 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.75rem 0" };
var d42 = { gap: "0.5rem", fontWeight: "700" };
var c35 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var n44 = { color: "{form.field.icon.color}" };
var t51 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" };
var a53 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" };
var i37 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l21 = { margin: "0.75rem 0 0 0" };
var f14 = { padding: "0.375rem", fontWeight: "700", color: "{content.color}" };
var u8 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.375rem", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var s15 = { margin: "0.75rem 0 0 0" };
var g7 = { padding: "0.5rem", borderRadius: "{content.border.radius}" };
var h6 = { margin: "0.75rem 0 0 0" };
var m6 = { padding: "0.5rem", borderRadius: "{content.border.radius}" };
var b6 = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}" };
var p7 = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v4 = { light: { dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k6 = { root: o107, panel: r104, header: e74, title: d42, dropdown: c35, inputIcon: n44, selectMonth: t51, selectYear: a53, group: i37, dayView: l21, weekDay: f14, date: u8, monthView: s15, month: g7, yearView: h6, year: m6, buttonbar: b6, timePicker: p7, colorScheme: v4 };

// node_modules/@primeuix/themes/dist/lara/dialog/index.mjs
var o108 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a54 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d43 = { fontSize: "1.25rem", fontWeight: "600" };
var r105 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l22 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e75 = { root: o108, header: a54, title: d43, content: r105, footer: l22 };

// node_modules/@primeuix/themes/dist/lara/divider/index.mjs
var r106 = { borderColor: "{content.border.color}" };
var o109 = { background: "{content.background}", color: "{text.color}" };
var n45 = { margin: "1.125rem 0", padding: "0 1.125rem", content: { padding: "0 0.625rem" } };
var e76 = { margin: "0 1.125rem", padding: "1.125rem 0", content: { padding: "0.625rem 0" } };
var t52 = { root: r106, content: o109, horizontal: n45, vertical: e76 };

// node_modules/@primeuix/themes/dist/lara/dock/index.mjs
var r107 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.lg}" };
var o110 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d44 = { root: r107, item: o110 };

// node_modules/@primeuix/themes/dist/lara/drawer/index.mjs
var o111 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a55 = { padding: "{overlay.modal.padding}" };
var d45 = { fontSize: "1.5rem", fontWeight: "600" };
var r108 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l23 = { padding: "{overlay.modal.padding}" };
var e77 = { root: o111, header: a55, title: d45, content: r108, footer: l23 };

// node_modules/@primeuix/themes/dist/lara/editor/index.mjs
var o112 = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r109 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e78 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var l24 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var t53 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var c36 = { light: { toolbar: { background: "{surface.50}" } }, dark: { toolbar: { background: "{surface.800}" } } };
var d46 = { toolbar: o112, toolbarItem: r109, overlay: e78, overlayOption: l24, content: t53, colorScheme: c36 };

// node_modules/@primeuix/themes/dist/lara/fieldset/index.mjs
var o113 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r110 = { borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e79 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var t54 = { padding: "0" };
var c37 = { light: { legend: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}", hoverColor: "{text.hover.color}" } }, dark: { legend: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" } } };
var n46 = { root: o113, legend: r110, toggleIcon: e79, content: t54, colorScheme: c37 };

// node_modules/@primeuix/themes/dist/lara/fileupload/index.mjs
var r111 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o114 = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0", gap: "0.5rem" };
var e80 = { highlightBorderColor: "{primary.color}", padding: "1.125rem", gap: "1rem" };
var a56 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var t55 = { gap: "0.5rem" };
var d47 = { height: "0.25rem" };
var n47 = { gap: "0.5rem" };
var c38 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } };
var i38 = { root: r111, header: o114, content: e80, file: a56, fileList: t55, progressbar: d47, basic: n47, colorScheme: c38 };

// node_modules/@primeuix/themes/dist/lara/floatlabel/index.mjs
var o115 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i39 = { active: { top: "-1.375rem" } };
var r112 = { input: { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a57 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d48 = { root: o115, over: i39, in: r112, on: a57 };

// node_modules/@primeuix/themes/dist/lara/galleria/index.mjs
var o116 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r113 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0", prev: { borderRadius: "0 12px 12px 0" }, next: { borderRadius: "12px 0 0 12px" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e81 = { size: "1.5rem" };
var t56 = { padding: "1rem 0.25rem" };
var n48 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var a58 = { size: "1rem" };
var c39 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s16 = { gap: "0.5rem", padding: "1rem" };
var u9 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i40 = { background: "rgba(0, 0, 0, 0.5)" };
var d49 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g8 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f15 = { size: "1.5rem" };
var h7 = { light: { thumbnailsContent: { background: "{surface.50}" }, thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailsContent: { background: "{surface.800}" }, thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l25 = { root: o116, navButton: r113, navIcon: e81, thumbnailsContent: t56, thumbnailNavButton: n48, thumbnailNavButtonIcon: a58, caption: c39, indicatorList: s16, indicatorButton: u9, insetIndicatorList: i40, insetIndicatorButton: d49, closeButton: g8, closeButtonIcon: f15, colorScheme: h7 };

// node_modules/@primeuix/themes/dist/lara/iconfield/index.mjs
var o117 = { color: "{form.field.icon.color}" };
var r114 = { icon: o117 };

// node_modules/@primeuix/themes/dist/lara/iftalabel/index.mjs
var o118 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l26 = { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" };
var i41 = { root: o118, input: l26 };

// node_modules/@primeuix/themes/dist/lara/image/index.mjs
var o119 = { transitionDuration: "{transition.duration}" };
var r115 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a59 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" };
var e82 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i42 = { root: o119, preview: r115, toolbar: a59, action: e82 };

// node_modules/@primeuix/themes/dist/lara/imagecompare/index.mjs
var r116 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o120 = { handle: r116 };

// node_modules/@primeuix/themes/dist/lara/inlinemessage/index.mjs
var r117 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o121 = { fontWeight: "500" };
var n49 = { size: "1.125rem" };
var e83 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)", color: "{blue.600}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "color-mix(in srgb, {green.50}, transparent 5%)", color: "{green.600}", shadow: "none" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)", color: "{yellow.600}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "color-mix(in srgb, {red.50}, transparent 5%)", color: "{red.600}", shadow: "none" }, secondary: { background: "{surface.100}", borderColor: "{surface.100}", color: "{surface.600}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "none" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)", color: "{blue.500}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.500}", shadow: "none" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)", color: "{yellow.500}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.500}", shadow: "none" }, secondary: { background: "{surface.800}", borderColor: "{surface.800}", color: "{surface.300}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } };
var a60 = { root: r117, text: o121, icon: n49, colorScheme: e83 };

// node_modules/@primeuix/themes/dist/lara/inplace/index.mjs
var o122 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r118 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n50 = { root: o122, display: r118 };

// node_modules/@primeuix/themes/dist/lara/inputchips/index.mjs
var o123 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r119 = { borderRadius: "{border.radius.sm}" };
var d50 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f16 = { root: o123, chip: r119, colorScheme: d50 };

// node_modules/@primeuix/themes/dist/lara/inputgroup/index.mjs
var r120 = { borderRadius: "{form.field.border.radius}", padding: "0.625rem 0.5rem", minWidth: "2.75rem" };
var o124 = { light: { addon: { background: "{surface.50}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } }, dark: { addon: { background: "{surface.800}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } } };
var d51 = { addon: r120, colorScheme: o124 };

// node_modules/@primeuix/themes/dist/lara/inputnumber/index.mjs
var r121 = { transitionDuration: "{transition.duration}" };
var o125 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e84 = { light: { button: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { button: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.500}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var d52 = { root: r121, button: o125, colorScheme: e84 };

// node_modules/@primeuix/themes/dist/lara/inputotp/index.mjs
var r122 = { gap: "0.5rem" };
var t57 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e85 = { root: r122, input: t57 };

// node_modules/@primeuix/themes/dist/lara/inputtext/index.mjs
var o126 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d53 = { root: o126 };

// node_modules/@primeuix/themes/dist/lara/knob/index.mjs
var o127 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r123 = { background: "{primary.color}" };
var t58 = { background: "{content.border.color}" };
var n51 = { color: "{text.muted.color}" };
var c40 = { root: o127, value: r123, range: t58, text: n51 };

// node_modules/@primeuix/themes/dist/lara/listbox/index.mjs
var o128 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r124 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d54 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i43 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t59 = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" };
var e86 = { padding: "{list.option.padding}" };
var l27 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n52 = { root: o128, list: r124, option: d54, optionGroup: i43, checkmark: t59, emptyMessage: e86, colorScheme: l27 };

// node_modules/@primeuix/themes/dist/lara/megamenu/index.mjs
var o129 = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.75rem 1rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n53 = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" };
var a61 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var i44 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r125 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t60 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e87 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c41 = { borderColor: "{content.border.color}" };
var d55 = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g9 = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } };
var u10 = { root: o129, baseItem: n53, item: a61, overlay: i44, submenu: r125, submenuLabel: t60, submenuIcon: e87, separator: c41, mobileButton: d55, colorScheme: g9 };

// node_modules/@primeuix/themes/dist/lara/menu/index.mjs
var o130 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n54 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a62 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i45 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t61 = { borderColor: "{content.border.color}" };
var r126 = { root: o130, list: n54, item: a62, submenuLabel: i45, separator: t61 };

// node_modules/@primeuix/themes/dist/lara/menubar/index.mjs
var o131 = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem 1rem", transitionDuration: "{transition.duration}" };
var r127 = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" };
var i46 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var n55 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1.25rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a63 = { borderColor: "{content.border.color}" };
var t62 = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e88 = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } };
var c42 = { root: o131, baseItem: r127, item: i46, submenu: n55, separator: a63, mobileButton: t62, colorScheme: e88 };

// node_modules/@primeuix/themes/dist/lara/message/index.mjs
var o132 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r128 = { padding: "0.75rem 1rem", gap: "0.5rem", sm: { padding: "0.5rem 0.625rem" }, lg: { padding: "0.75rem 0.875rem" } };
var e89 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n56 = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } };
var l28 = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var c43 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var s17 = { root: { borderWidth: "1px" } };
var a64 = { content: { padding: "0" } };
var t63 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "transparent", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "transparent", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "transparent", color: "{yellow.600}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "transparent", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "transparent", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "transparent", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "transparent", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "transparent", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "transparent", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "transparent", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "transparent", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "transparent", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u11 = { root: o132, content: r128, text: e89, icon: n56, closeButton: l28, closeIcon: c43, outlined: s17, simple: a64, colorScheme: t63 };

// node_modules/@primeuix/themes/dist/lara/metergroup/index.mjs
var e90 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r129 = { background: "{content.border.color}", size: "0.625rem" };
var a65 = { gap: "0.5rem" };
var o133 = { size: "0.5rem" };
var l29 = { size: "1rem" };
var t64 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b7 = { root: e90, meters: r129, label: a65, labelMarker: o133, labelIcon: l29, labelList: t64 };

// node_modules/@primeuix/themes/dist/lara/multiselect/index.mjs
var o134 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d56 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r130 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l30 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i47 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e91 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f17 = { color: "{form.field.icon.color}" };
var a66 = { borderRadius: "{border.radius.sm}" };
var c44 = { padding: "{list.option.padding}" };
var n57 = { root: o134, dropdown: d56, overlay: r130, list: l30, option: i47, optionGroup: e91, chip: a66, clearIcon: f17, emptyMessage: c44 };

// node_modules/@primeuix/themes/dist/lara/orderlist/index.mjs
var r131 = { gap: "1.125rem" };
var a67 = { gap: "0.5rem" };
var o135 = { root: r131, controls: a67 };

// node_modules/@primeuix/themes/dist/lara/organizationchart/index.mjs
var o136 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r132 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" };
var e92 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t65 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n58 = { root: o136, node: r132, nodeToggleButton: e92, connector: t65 };

// node_modules/@primeuix/themes/dist/lara/overlaybadge/index.mjs
var o137 = { outline: { width: "2px", color: "{content.background}" } };
var t66 = { root: o137 };

// node_modules/@primeuix/themes/dist/lara/paginator/index.mjs
var o138 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r133 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t67 = { color: "{text.muted.color}" };
var e93 = { maxWidth: "2.5rem" };
var n59 = { root: o138, navButton: r133, currentPageReport: t67, jumpToPageInput: e93 };

// node_modules/@primeuix/themes/dist/lara/panel/index.mjs
var r134 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}" };
var o139 = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0" };
var e94 = { padding: "0.25rem 1.125rem" };
var d57 = { fontWeight: "700" };
var t68 = { padding: "1.125rem" };
var a68 = { padding: "1.125rem" };
var c45 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } };
var n60 = { root: r134, header: o139, toggleableHeader: e94, title: d57, content: t68, footer: a68, colorScheme: c45 };

// node_modules/@primeuix/themes/dist/lara/panelmenu/index.mjs
var o140 = { gap: "0", transitionDuration: "{transition.duration}" };
var r135 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } };
var n61 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i48 = { indent: "1rem" };
var t69 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a69 = { root: o140, panel: r135, item: n61, submenu: i48, submenuIcon: t69 };

// node_modules/@primeuix/themes/dist/lara/password/index.mjs
var r136 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o141 = { color: "{form.field.icon.color}" };
var e95 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a70 = { gap: "0.75rem" };
var d58 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n62 = { meter: r136, icon: o141, overlay: e95, content: a70, colorScheme: d58 };

// node_modules/@primeuix/themes/dist/lara/picklist/index.mjs
var r137 = { gap: "1.125rem" };
var a71 = { gap: "0.5rem" };
var o142 = { root: r137, controls: a71 };

// node_modules/@primeuix/themes/dist/lara/popover/index.mjs
var o143 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r138 = { padding: "{overlay.popover.padding}" };
var e96 = { root: o143, content: r138 };

// node_modules/@primeuix/themes/dist/lara/progressbar/index.mjs
var r139 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.5rem" };
var o144 = { background: "{primary.color}" };
var e97 = { color: "{primary.contrast.color}", fontSize: "0.875rem", fontWeight: "600" };
var t70 = { root: r139, value: o144, label: e97 };

// node_modules/@primeuix/themes/dist/lara/progressspinner/index.mjs
var o145 = { light: { root: { colorOne: "{pink.500}", colorTwo: "{sky.500}", colorThree: "{emerald.500}", colorFour: "{amber.500}" } }, dark: { root: { colorOne: "{pink.400}", colorTwo: "{sky.400}", colorThree: "{emerald.400}", colorFour: "{amber.400}" } } };
var r140 = { colorScheme: o145 };

// node_modules/@primeuix/themes/dist/lara/radiobutton/index.mjs
var o146 = { width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } };
var r141 = { size: "1rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } };
var e98 = { root: o146, icon: r141 };

// node_modules/@primeuix/themes/dist/lara/rating/index.mjs
var o147 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r142 = { size: "1.25rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i49 = { root: o147, icon: r142 };

// node_modules/@primeuix/themes/dist/lara/ripple/index.mjs
var r143 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o148 = { colorScheme: r143 };

// node_modules/@primeuix/themes/dist/lara/scrollpanel/index.mjs
var r144 = { transitionDuration: "{transition.duration}" };
var o149 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s18 = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } };
var a72 = { root: r144, bar: o149, colorScheme: s18 };

// node_modules/@primeuix/themes/dist/lara/select/index.mjs
var o150 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r145 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d59 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l31 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i50 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e99 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f18 = { color: "{form.field.icon.color}" };
var c46 = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" };
var a73 = { padding: "{list.option.padding}" };
var n63 = { root: o150, dropdown: r145, overlay: d59, list: l31, option: i50, optionGroup: e99, clearIcon: f18, checkmark: c46, emptyMessage: a73 };

// node_modules/@primeuix/themes/dist/lara/selectbutton/index.mjs
var r146 = { borderRadius: "{form.field.border.radius}" };
var o151 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d60 = { root: r146, colorScheme: o151 };

// node_modules/@primeuix/themes/dist/lara/skeleton/index.mjs
var r147 = { borderRadius: "{content.border.radius}" };
var a74 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o152 = { root: r147, colorScheme: a74 };

// node_modules/@primeuix/themes/dist/lara/slider/index.mjs
var o153 = { transitionDuration: "{transition.duration}" };
var r148 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var e100 = { background: "{primary.color}" };
var n64 = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var d61 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a75 = { root: o153, track: r148, range: e100, handle: n64, colorScheme: d61 };

// node_modules/@primeuix/themes/dist/lara/speeddial/index.mjs
var t71 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a76 = { root: t71 };

// node_modules/@primeuix/themes/dist/lara/splitbutton/index.mjs
var r149 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d62 = { root: r149 };

// node_modules/@primeuix/themes/dist/lara/splitter/index.mjs
var o154 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r150 = { background: "{content.border.color}" };
var n65 = { size: "24px", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t72 = { light: { handle: { background: "{surface.400}" } }, dark: { handle: { background: "{surface.600}" } } };
var c47 = { root: o154, gutter: r150, handle: n65, colorScheme: t72 };

// node_modules/@primeuix/themes/dist/lara/stepper/index.mjs
var o155 = { transitionDuration: "{transition.duration}" };
var r151 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e101 = { padding: "0.5rem", gap: "1rem" };
var t73 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n66 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a77 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c48 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var i51 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var d63 = { root: o155, separator: r151, step: e101, stepHeader: t73, stepTitle: n66, stepNumber: a77, steppanels: c48, steppanel: i51 };

// node_modules/@primeuix/themes/dist/lara/steps/index.mjs
var o156 = { transitionDuration: "{transition.duration}" };
var r152 = { background: "{content.border.color}" };
var t74 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e102 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var i52 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c49 = { root: o156, separator: r152, itemLink: t74, itemLabel: e102, itemNumber: i52 };

// node_modules/@primeuix/themes/dist/lara/tabmenu/index.mjs
var o157 = { transitionDuration: "{transition.duration}" };
var r153 = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" };
var t75 = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e103 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var a78 = { height: "0", bottom: "0", background: "transparent" };
var c50 = { light: { item: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { item: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } };
var i53 = { root: o157, tablist: r153, item: t75, itemIcon: e103, activeBar: a78, colorScheme: c50 };

// node_modules/@primeuix/themes/dist/lara/tabs/index.mjs
var o158 = { transitionDuration: "{transition.duration}" };
var r154 = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" };
var t76 = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var n67 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c51 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var e104 = { height: "0", bottom: "0", background: "transparent" };
var a79 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" }, tab: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" }, tab: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } };
var s19 = { root: o158, tablist: r154, tab: t76, tabpanel: n67, navButton: c51, activeBar: e104, colorScheme: a79 };

// node_modules/@primeuix/themes/dist/lara/tabview/index.mjs
var o159 = { transitionDuration: "{transition.duration}" };
var r155 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t77 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n68 = { background: "{content.background}", color: "{content.color}" };
var a80 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c52 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e105 = { root: o159, tabList: r155, tab: t77, tabPanel: n68, navButton: a80, colorScheme: c52 };

// node_modules/@primeuix/themes/dist/lara/tag/index.mjs
var r156 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o160 = { size: "0.75rem" };
var c53 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var a81 = { root: r156, icon: o160, colorScheme: c53 };

// node_modules/@primeuix/themes/dist/lara/terminal/index.mjs
var r157 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o161 = { gap: "0.25rem" };
var d64 = { margin: "2px 0" };
var e106 = { root: r157, prompt: o161, commandResponse: d64 };

// node_modules/@primeuix/themes/dist/lara/textarea/index.mjs
var o162 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d65 = { root: o162 };

// node_modules/@primeuix/themes/dist/lara/tieredmenu/index.mjs
var o163 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i54 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n69 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a82 = { mobileIndent: "1.25rem" };
var t78 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r158 = { borderColor: "{content.border.color}" };
var c54 = { root: o163, list: i54, item: n69, submenu: a82, submenuIcon: t78, separator: r158 };

// node_modules/@primeuix/themes/dist/lara/timeline/index.mjs
var e107 = { minHeight: "5rem" };
var r159 = { eventContent: { padding: "1rem 0" } };
var n70 = { eventContent: { padding: "0 1rem" } };
var o164 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } };
var t79 = { color: "{content.border.color}", size: "2px" };
var a83 = { event: e107, horizontal: r159, vertical: n70, eventMarker: o164, eventConnector: t79 };

// node_modules/@primeuix/themes/dist/lara/toast/index.mjs
var o165 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}" };
var r160 = { size: "1.25rem" };
var e108 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a84 = { gap: "0.5rem" };
var s20 = { fontWeight: "500", fontSize: "1rem" };
var c55 = { fontWeight: "500", fontSize: "0.875rem" };
var n71 = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l32 = { size: "1rem" };
var u12 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.500}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.500}", color: "{green.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.500}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.500}", color: "{red.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.500}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } } }, contrast: { background: "{surface.900}", borderColor: "{primary.color}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } } } } };
var d66 = { root: o165, icon: r160, content: e108, text: a84, summary: s20, detail: c55, closeButton: n71, closeIcon: l32, colorScheme: u12 };

// node_modules/@primeuix/themes/dist/lara/togglebutton/index.mjs
var o166 = { padding: "0.625rem 1rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.25rem" } };
var r161 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" };
var d67 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } };
var e109 = { light: { root: { hoverBackground: "{surface.100}" } }, dark: { root: { hoverBackground: "{surface.800}" } } };
var i55 = { root: o166, icon: r161, content: d67, colorScheme: e109 };

// node_modules/@primeuix/themes/dist/lara/toggleswitch/index.mjs
var r162 = { width: "3rem", height: "1.75rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o167 = { borderRadius: "50%", size: "1.25rem" };
var e110 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c56 = { root: r162, handle: o167, colorScheme: e110 };

// node_modules/@primeuix/themes/dist/lara/toolbar/index.mjs
var o168 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r163 = { light: { root: { background: "{surface.50}", color: "{content.color}" } }, dark: { root: { background: "{surface.800}", color: "{content.color}" } } };
var c57 = { root: o168, colorScheme: r163 };

// node_modules/@primeuix/themes/dist/lara/tooltip/index.mjs
var r164 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.625rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o169 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e111 = { root: r164, colorScheme: o169 };

// node_modules/@primeuix/themes/dist/lara/tree/index.mjs
var o170 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r165 = { padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, gap: "0.25rem" };
var e112 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t80 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c58 = { size: "2rem" };
var n72 = { margin: "0 0 0.5rem 0" };
var d68 = { root: o170, node: r165, nodeIcon: e112, nodeToggleButton: t80, loadingIcon: c58, filter: n72 };

// node_modules/@primeuix/themes/dist/lara/treeselect/index.mjs
var o171 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r166 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d69 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l33 = { padding: "{list.padding}" };
var e113 = { padding: "{list.option.padding}" };
var i56 = { borderRadius: "{border.radius.sm}" };
var f19 = { color: "{form.field.icon.color}" };
var a85 = { root: o171, dropdown: r166, overlay: d69, tree: l33, emptyMessage: e113, chip: i56, clearIcon: f19 };

// node_modules/@primeuix/themes/dist/lara/treetable/index.mjs
var o172 = { transitionDuration: "{transition.duration}" };
var r167 = { borderColor: "{treetable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" };
var e114 = { selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var t81 = { fontWeight: "700" };
var c59 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{sr.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var l34 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var d70 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem" };
var n73 = { fontWeight: "700" };
var a86 = { borderColor: "{treetable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i57 = { width: "0.5rem" };
var s21 = { width: "1px", color: "{primary.color}" };
var g10 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u13 = { size: "2rem" };
var h8 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f20 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var b8 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m7 = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var C = { root: o172, header: r167, headerCell: e114, columnTitle: t81, row: c59, bodyCell: l34, footerCell: d70, columnFooter: n73, footer: a86, columnResizer: i57, resizeIndicator: s21, sortIcon: g10, loadingIcon: u13, nodeToggleButton: h8, paginatorTop: f20, paginatorBottom: b8, colorScheme: m7 };

// node_modules/@primeuix/themes/dist/lara/virtualscroller/index.mjs
var o173 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e115 = { loader: o173 };

// node_modules/@primeuix/themes/dist/lara/index.mjs
var r168 = Object.defineProperty;
var e116 = Object.defineProperties;
var m8 = Object.getOwnPropertyDescriptors;
var i58 = Object.getOwnPropertySymbols;
var t82 = Object.prototype.hasOwnProperty;
var a87 = Object.prototype.propertyIsEnumerable;
var o174 = (e173, m14, i90) => m14 in e173 ? r168(e173, m14, { enumerable: true, configurable: true, writable: true, value: i90 }) : e173[m14] = i90;
var Nr2;
var Qr2 = (Nr2 = ((r253, e173) => {
  for (var m14 in e173 || (e173 = {})) t82.call(e173, m14) && o174(r253, m14, e173[m14]);
  if (i58) for (var m14 of i58(e173)) a87.call(e173, m14) && o174(r253, m14, e173[m14]);
  return r253;
})({}, e63), e116(Nr2, m8({ components: { accordion: d34, autocomplete: a44, avatar: n39, badge: d36, blockui: o93, breadcrumb: t45, button: e64, datepicker: k6, card: d37, carousel: t47, cascadeselect: f12, checkbox: e67, chip: s13, colorpicker: d39, confirmdialog: r99, confirmpopup: a49, contextmenu: c32, dataview: a52, datatable: k5, dialog: e75, divider: t52, dock: d44, drawer: e77, editor: d46, fieldset: n46, fileupload: i38, iftalabel: i41, floatlabel: d48, galleria: l25, iconfield: r114, image: i42, imagecompare: o120, inlinemessage: a60, inplace: n50, inputchips: f16, inputgroup: d51, inputnumber: d52, inputotp: e85, inputtext: d53, knob: c40, listbox: n52, megamenu: u10, menu: r126, menubar: c42, message: u11, metergroup: b7, multiselect: n57, orderlist: o135, organizationchart: n58, overlaybadge: t66, popover: e96, paginator: n59, password: n62, panel: n60, panelmenu: a69, picklist: o142, progressbar: t70, progressspinner: r140, radiobutton: e98, rating: i49, ripple: o148, scrollpanel: a72, select: n63, selectbutton: d60, skeleton: o152, slider: a75, speeddial: a76, splitter: c47, splitbutton: d62, stepper: d63, steps: c49, tabmenu: i53, tabs: s19, tabview: e105, textarea: d65, tieredmenu: c54, tag: a81, terminal: e106, timeline: a83, togglebutton: i55, toggleswitch: c56, tree: d68, treeselect: a85, treetable: C, toast: d66, toolbar: c57, tooltip: e111, virtualscroller: e115 } })));

// node_modules/@primeuix/themes/dist/nora/accordion/index.mjs
var o175 = { transitionDuration: "{transition.duration}" };
var r169 = { borderWidth: "0", borderColor: "{content.border.color}" };
var t83 = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e117 = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" };
var c60 = { root: o175, panel: r169, header: t83, content: e117 };

// node_modules/@primeuix/themes/dist/nora/autocomplete/index.mjs
var o176 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r170 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d71 = { padding: "{list.padding}", gap: "{list.gap}" };
var e118 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l35 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i59 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, background: "{form.field.background}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c61 = { borderRadius: "{border.radius.xs}" };
var f21 = { padding: "{list.option.padding}" };
var s22 = { light: { chip: { focusBackground: "{surface.300}", focusColor: "{surface.900}" }, dropdown: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" } }, dark: { chip: { focusBackground: "{surface.600}", focusColor: "{surface.0}" }, dropdown: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" } } };
var a88 = { root: o176, overlay: r170, list: d71, option: e118, optionGroup: l35, dropdown: i59, chip: c61, emptyMessage: f21, colorScheme: s22 };

// node_modules/@primeuix/themes/dist/nora/avatar/index.mjs
var e119 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.hover.background}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r171 = { size: "1rem" };
var o177 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t84 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i60 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n74 = { root: e119, icon: r171, group: o177, lg: t84, xl: i60 };

// node_modules/@primeuix/themes/dist/nora/badge/index.mjs
var r172 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o178 = { size: "0.5rem" };
var e120 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c62 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a89 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n75 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.200}", color: "{surface.700}" }, success: { background: "{green.600}", color: "{surface.0}" }, info: { background: "{sky.600}", color: "{surface.0}" }, warn: { background: "{orange.600}", color: "{surface.0}" }, danger: { background: "{red.600}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.700}", color: "{surface.200}" }, success: { background: "{green.500}", color: "{green.950}" }, info: { background: "{sky.500}", color: "{sky.950}" }, warn: { background: "{orange.500}", color: "{orange.950}" }, danger: { background: "{red.500}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d72 = { root: r172, dot: o178, sm: e120, lg: c62, xl: a89, colorScheme: n75 };

// node_modules/@primeuix/themes/dist/nora/base/index.mjs
var o179 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var r173 = { transitionDuration: "0s", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "0", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.xs}", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "-1px", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.125rem 0", gap: "0", header: { padding: "0.5rem 0.75rem 0.375rem 0.75rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "0" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "700" } }, content: { borderRadius: "{border.radius.xs}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.125rem 0", gap: "0" }, item: { padding: "0.5rem 0.75rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "700" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.xs}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.xs}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xs}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.600}", contrastColor: "#ffffff", hoverColor: "{primary.700}", activeColor: "{primary.800}" }, highlight: { background: "{primary.600}", focusBackground: "{primary.700}", color: "#ffffff", focusColor: "#ffffff" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.300}", filledBackground: "{surface.100}", filledHoverBackground: "{surface.100}", filledFocusBackground: "{surface.100}", borderColor: "{surface.500}", hoverBorderColor: "{surface.500}", focusBorderColor: "{surface.500}", invalidBorderColor: "{red.500}", color: "{surface.900}", disabledColor: "{surface.600}", placeholderColor: "{surface.600}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.600}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.600}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.900}", shadow: "none" }, text: { color: "{surface.900}", hoverColor: "{surface.950}", mutedColor: "{surface.600}", hoverMutedColor: "{surface.700}" }, content: { background: "{surface.0}", hoverBackground: "{surface.200}", borderColor: "{surface.400}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.200}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{text.muted.color}", focusColor: "{text.hover.muted.color}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{primary.color}", activeBackground: "{surface.200}", color: "{text.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.color}", icon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.500}", contrastColor: "{surface.950}", hoverColor: "{primary.400}", activeColor: "{primary.300}" }, highlight: { background: "{primary.500}", focusBackground: "{primary.400}", color: "{surface.950}", focusColor: "{surface.950}" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.500}", hoverBorderColor: "{surface.500}", focusBorderColor: "{surface.500}", invalidBorderColor: "{red.400}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.0}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.700}", borderColor: "{surface.500}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.700}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{text.muted.color}", focusColor: "{text.hover.muted.color}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{primary.color}", activeBackground: "{surface.700}", color: "{text.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.color}", icon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } } } } };
var e121 = { primitive: o179, semantic: r173 };

// node_modules/@primeuix/themes/dist/nora/blockui/index.mjs
var r174 = { borderRadius: "{content.border.radius}" };
var o180 = { root: r174 };

// node_modules/@primeuix/themes/dist/nora/breadcrumb/index.mjs
var o181 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r175 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{text.muted.color}", hoverColor: "{text.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t85 = { color: "{navigation.item.icon.color}" };
var i61 = { root: o181, item: r175, separator: t85 };

// node_modules/@primeuix/themes/dist/nora/button/index.mjs
var r176 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "700" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o182 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{surface.400}", borderColor: "{surface.200}", hoverBorderColor: "{surface.300}", activeBorderColor: "{surface.400}", color: "{surface.700}", hoverColor: "{surface.800}", activeColor: "{surface.900}", focusRing: { color: "{surface.700}", shadow: "none" } }, info: { background: "{sky.600}", hoverBackground: "{sky.700}", activeBackground: "{sky.800}", borderColor: "{sky.600}", hoverBorderColor: "{sky.700}", activeBorderColor: "{sky.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.600}", shadow: "none" } }, success: { background: "{green.600}", hoverBackground: "{green.700}", activeBackground: "{green.800}", borderColor: "{green.600}", hoverBorderColor: "{green.700}", activeBorderColor: "{green.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.600}", shadow: "none" } }, warn: { background: "{orange.600}", hoverBackground: "{orange.700}", activeBackground: "{orange.800}", borderColor: "{orange.600}", hoverBorderColor: "{orange.700}", activeBorderColor: "{orange.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.600}", shadow: "none" } }, help: { background: "{purple.600}", hoverBackground: "{purple.700}", activeBackground: "{purple.800}", borderColor: "{purple.600}", hoverBorderColor: "{purple.700}", activeBorderColor: "{purple.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.600}", shadow: "none" } }, danger: { background: "{red.600}", hoverBackground: "{red.700}", activeBackground: "{red.800}", borderColor: "{red.600}", hoverBorderColor: "{red.700}", activeBorderColor: "{red.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.600}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.600}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.600}", color: "{green.600}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.600}", color: "{sky.600}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.600}", color: "{orange.600}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.600}", color: "{purple.600}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.600}", color: "{red.600}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.950}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.900}", color: "{surface.900}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.600}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.600}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.600}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.600}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.600}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.900}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{surface.500}", borderColor: "{surface.700}", hoverBorderColor: "{surface.600}", activeBorderColor: "{surface.500}", color: "{surface.200}", hoverColor: "{surface.100}", activeColor: "{surface.0}", focusRing: { color: "{surface.200}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.400}", activeBackground: "{sky.300}", borderColor: "{sky.500}", hoverBorderColor: "{sky.400}", activeBorderColor: "{sky.300}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.400}", activeBackground: "{green.300}", borderColor: "{green.500}", hoverBorderColor: "{green.400}", activeBorderColor: "{green.300}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.400}", activeBackground: "{orange.300}", borderColor: "{orange.500}", hoverBorderColor: "{orange.400}", activeBorderColor: "{orange.300}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.400}", activeBackground: "{purple.300}", borderColor: "{purple.500}", hoverBorderColor: "{purple.400}", activeBorderColor: "{purple.300}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.400}", activeBackground: "{red.300}", borderColor: "{red.500}", hoverBorderColor: "{red.400}", activeBorderColor: "{red.300}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.400}", color: "{surface.400}" }, success: { hoverBackground: "{green.950}", activeBackground: "{green.900}", borderColor: "{green.500}", color: "{green.500}" }, info: { hoverBackground: "{sky.950}", activeBackground: "{sky.900}", borderColor: "{sky.500}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.950}", activeBackground: "{orange.900}", borderColor: "{orange.500}", color: "{orange.500}" }, help: { hoverBackground: "{purple.950}", activeBackground: "{purple.900}", borderColor: "{purple.500}", color: "{purple.500}" }, danger: { hoverBackground: "{red.950}", activeBackground: "{red.900}", borderColor: "{red.500}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.0}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.0}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.500}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.500}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.500}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.500}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.500}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e122 = { root: r176, colorScheme: o182 };

// node_modules/@primeuix/themes/dist/nora/card/index.mjs
var o183 = { background: "{content.background}", borderRadius: "{border.radius.sm}", color: "{content.color}", shadow: "0 1px 4px 0 rgba(0, 0, 0, 0.1)" };
var r177 = { padding: "1.25rem", gap: "0.5rem" };
var t86 = { gap: "0.5rem" };
var e123 = { fontSize: "1.25rem", fontWeight: "500" };
var a90 = { color: "{text.muted.color}" };
var d73 = { root: o183, body: r177, caption: t86, title: e123, subtitle: a90 };

// node_modules/@primeuix/themes/dist/nora/carousel/index.mjs
var r178 = { transitionDuration: "{transition.duration}" };
var o184 = { gap: "0.25rem" };
var a91 = { padding: "1rem", gap: "0.5rem" };
var i62 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c63 = { light: { indicator: { background: "{surface.300}", hoverBackground: "{surface.400}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.600}", hoverBackground: "{surface.500}", activeBackground: "{primary.color}" } } };
var t87 = { root: r178, content: o184, indicatorList: a91, indicator: i62, colorScheme: c63 };

// node_modules/@primeuix/themes/dist/nora/cascadeselect/index.mjs
var o185 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r179 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d74 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l36 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e124 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i63 = { color: "{form.field.icon.color}" };
var f22 = { root: o185, dropdown: r179, overlay: d74, list: l36, option: e124, clearIcon: i63 };

// node_modules/@primeuix/themes/dist/nora/checkbox/index.mjs
var r180 = { borderRadius: "{border.radius.xs}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o186 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e125 = { root: r180, icon: o186 };

// node_modules/@primeuix/themes/dist/nora/chip/index.mjs
var o187 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r181 = { width: "2rem", height: "2rem" };
var e126 = { size: "1rem" };
var c64 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i64 = { light: { root: { background: "{surface.200}", color: "{surface.900}" }, icon: { color: "{surface.900}" }, removeIcon: { color: "{surface.900}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s23 = { root: o187, image: r181, icon: e126, removeIcon: c64, colorScheme: i64 };

// node_modules/@primeuix/themes/dist/nora/colorpicker/index.mjs
var r182 = { transitionDuration: "{transition.duration}" };
var o188 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e127 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a92 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s24 = { root: r182, preview: o188, panel: e127, colorScheme: a92 };

// node_modules/@primeuix/themes/dist/nora/confirmdialog/index.mjs
var o189 = { size: "2rem", color: "{overlay.modal.color}" };
var e128 = { gap: "1rem" };
var r183 = { icon: o189, content: e128 };

// node_modules/@primeuix/themes/dist/nora/confirmpopup/index.mjs
var o190 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r184 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e129 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p8 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a93 = { root: o190, content: r184, icon: e129, footer: p8 };

// node_modules/@primeuix/themes/dist/nora/contextmenu/index.mjs
var o191 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i65 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n76 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a94 = { mobileIndent: "1rem" };
var t88 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r185 = { borderColor: "{content.border.color}" };
var c65 = { root: o191, list: i65, item: n76, submenu: a94, submenuIcon: t88, separator: r185 };

// node_modules/@primeuix/themes/dist/nora/datatable/index.mjs
var o192 = { transitionDuration: "{transition.duration}" };
var r186 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e130 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d75 = { fontWeight: "700" };
var t89 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l37 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c66 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var n77 = { fontWeight: "700" };
var a95 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i66 = { color: "{primary.color}" };
var s25 = { width: "0.5rem" };
var g11 = { width: "1px", color: "{primary.color}" };
var u14 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var p9 = { size: "2rem" };
var b9 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m9 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h9 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f23 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v5 = { light: { root: { borderColor: "{surface.300}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.600}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k7 = { root: o192, header: r186, headerCell: e130, columnTitle: d75, row: t89, bodyCell: l37, footerCell: c66, columnFooter: n77, footer: a95, dropPoint: i66, columnResizer: s25, resizeIndicator: g11, sortIcon: u14, loadingIcon: p9, rowToggleButton: b9, filter: m9, paginatorTop: h9, paginatorBottom: f23, colorScheme: v5 };

// node_modules/@primeuix/themes/dist/nora/dataview/index.mjs
var o193 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r187 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d76 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e131 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t90 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n78 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c67 = { root: o193, header: r187, content: d76, footer: e131, paginatorTop: t90, paginatorBottom: n78 };

// node_modules/@primeuix/themes/dist/nora/datepicker/index.mjs
var o194 = { transitionDuration: "{transition.duration}" };
var r188 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e132 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var d77 = { gap: "0.5rem", fontWeight: "500" };
var c68 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, background: "{form.field.background}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n79 = { color: "{form.field.icon.color}" };
var t91 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a96 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i67 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l38 = { margin: "0.5rem 0 0 0" };
var g12 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var u15 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s26 = { margin: "0.5rem 0 0 0" };
var f24 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h10 = { margin: "0.5rem 0 0 0" };
var b10 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m10 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p10 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v6 = { light: { dropdown: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k8 = { root: o194, panel: r188, header: e132, title: d77, dropdown: c68, inputIcon: n79, selectMonth: t91, selectYear: a96, group: i67, dayView: l38, weekDay: g12, date: u15, monthView: s26, month: f24, yearView: h10, year: b10, buttonbar: m10, timePicker: p10, colorScheme: v6 };

// node_modules/@primeuix/themes/dist/nora/dialog/index.mjs
var o195 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a97 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d78 = { fontSize: "1.25rem", fontWeight: "700" };
var r189 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l39 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e133 = { root: o195, header: a97, title: d78, content: r189, footer: l39 };

// node_modules/@primeuix/themes/dist/nora/divider/index.mjs
var r190 = { borderColor: "{content.border.color}" };
var o196 = { background: "{content.background}", color: "{text.color}" };
var n80 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e134 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t92 = { root: r190, content: o196, horizontal: n80, vertical: e134 };

// node_modules/@primeuix/themes/dist/nora/dock/index.mjs
var r191 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o197 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d79 = { root: r191, item: o197 };

// node_modules/@primeuix/themes/dist/nora/drawer/index.mjs
var o198 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a98 = { padding: "{overlay.modal.padding}" };
var d80 = { fontSize: "1.5rem", fontWeight: "700" };
var r192 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l40 = { padding: "{overlay.modal.padding}" };
var e135 = { root: o198, header: a98, title: d80, content: r192, footer: l40 };

// node_modules/@primeuix/themes/dist/nora/editor/index.mjs
var o199 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r193 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e136 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t93 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d81 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l41 = { toolbar: o199, toolbarItem: r193, overlay: e136, overlayOption: t93, content: d81 };

// node_modules/@primeuix/themes/dist/nora/fieldset/index.mjs
var o200 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r194 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e137 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var t94 = { padding: "0" };
var n81 = { root: o200, legend: r194, toggleIcon: e137, content: t94 };

// node_modules/@primeuix/themes/dist/nora/fileupload/index.mjs
var r195 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o201 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e138 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t95 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a99 = { gap: "0.5rem" };
var n82 = { height: "0.25rem" };
var d82 = { gap: "0.5rem" };
var i68 = { root: r195, header: o201, content: e138, file: t95, fileList: a99, progressbar: n82, basic: d82 };

// node_modules/@primeuix/themes/dist/nora/floatlabel/index.mjs
var o202 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i69 = { active: { top: "-1.25rem" } };
var r196 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a100 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d83 = { root: o202, over: i69, in: r196, on: a100 };

// node_modules/@primeuix/themes/dist/nora/galleria/index.mjs
var o203 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r197 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t96 = { size: "1.5rem" };
var e139 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c69 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n83 = { size: "1rem" };
var a101 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s27 = { gap: "0.5rem", padding: "1rem" };
var u16 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i70 = { background: "rgba(0, 0, 0, 0.5)" };
var d84 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g13 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f25 = { size: "1.5rem" };
var l42 = { light: { thumbnailNavButton: { hoverBackground: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, indicatorButton: { background: "{surface.300}", hoverBackground: "{surface.400}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.0}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.600}", hoverBackground: "{surface.500}" } } };
var h11 = { root: o203, navButton: r197, navIcon: t96, thumbnailsContent: e139, thumbnailNavButton: c69, thumbnailNavButtonIcon: n83, caption: a101, indicatorList: s27, indicatorButton: u16, insetIndicatorList: i70, insetIndicatorButton: d84, closeButton: g13, closeButtonIcon: f25, colorScheme: l42 };

// node_modules/@primeuix/themes/dist/nora/iconfield/index.mjs
var o204 = { color: "{form.field.icon.color}" };
var r198 = { icon: o204 };

// node_modules/@primeuix/themes/dist/nora/iftalabel/index.mjs
var o205 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l43 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i71 = { root: o205, input: l43 };

// node_modules/@primeuix/themes/dist/nora/image/index.mjs
var o206 = { transitionDuration: "{transition.duration}" };
var r199 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a102 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" };
var e140 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i72 = { root: o206, preview: r199, toolbar: a102, action: e140 };

// node_modules/@primeuix/themes/dist/nora/imagecompare/index.mjs
var r200 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "{content.border.radius}", transitionDuration: "0.2s", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o207 = { handle: r200 };

// node_modules/@primeuix/themes/dist/nora/inlinemessage/index.mjs
var o208 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var r201 = { fontWeight: "700" };
var e141 = { size: "1rem" };
var d85 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", shadow: "none" }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", shadow: "none" }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", shadow: "none" }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", shadow: "none" }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", shadow: "none" }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", shadow: "none" }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", shadow: "none" }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", shadow: "none" }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } };
var n84 = { root: o208, text: r201, icon: e141, colorScheme: d85 };

// node_modules/@primeuix/themes/dist/nora/inplace/index.mjs
var o209 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r202 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n85 = { root: o209, display: r202 };

// node_modules/@primeuix/themes/dist/nora/inputchips/index.mjs
var o210 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r203 = { borderRadius: "{border.radius.xs}" };
var d86 = { light: { chip: { focusBackground: "{surface.300}", color: "{surface.900}" } }, dark: { chip: { focusBackground: "{surface.600}", color: "{surface.0}" } } };
var f26 = { root: o210, chip: r203, colorScheme: d86 };

// node_modules/@primeuix/themes/dist/nora/inputgroup/index.mjs
var r204 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o211 = { addon: r204 };

// node_modules/@primeuix/themes/dist/nora/inputnumber/index.mjs
var o212 = { transitionDuration: "{transition.duration}" };
var r205 = { background: "transparent", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e142 = { light: { button: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" } }, dark: { button: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" } } };
var d87 = { root: o212, button: r205, colorScheme: e142 };

// node_modules/@primeuix/themes/dist/nora/inputotp/index.mjs
var r206 = { gap: "0.5rem" };
var t97 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e143 = { root: r206, input: t97 };

// node_modules/@primeuix/themes/dist/nora/inputtext/index.mjs
var o213 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d88 = { root: o213 };

// node_modules/@primeuix/themes/dist/nora/knob/index.mjs
var o214 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r207 = { background: "{primary.color}" };
var t98 = { color: "{text.muted.color}" };
var a103 = { light: { range: { background: "{surface.300}" } }, dark: { range: { background: "{surface.600}" } } };
var c70 = { root: o214, value: r207, text: t98, colorScheme: a103 };

// node_modules/@primeuix/themes/dist/nora/listbox/index.mjs
var o215 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r208 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d89 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i73 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t99 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e144 = { padding: "{list.option.padding}" };
var l44 = { light: { option: { stripedBackground: "{surface.100}" } }, dark: { option: { stripedBackground: "{surface.800}" } } };
var n86 = { root: o215, list: r208, option: d89, optionGroup: i73, checkmark: t99, emptyMessage: e144, colorScheme: l44 };

// node_modules/@primeuix/themes/dist/nora/megamenu/index.mjs
var o216 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n87 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i74 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a104 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r209 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t100 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e145 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c71 = { borderColor: "{content.border.color}" };
var d90 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g14 = { root: o216, baseItem: n87, item: i74, overlay: a104, submenu: r209, submenuLabel: t100, submenuIcon: e145, separator: c71, mobileButton: d90 };

// node_modules/@primeuix/themes/dist/nora/menu/index.mjs
var o217 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n88 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a105 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i75 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t101 = { borderColor: "{content.border.color}" };
var r210 = { root: o217, list: n88, item: a105, submenuLabel: i75, separator: t101 };

// node_modules/@primeuix/themes/dist/nora/menubar/index.mjs
var o218 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i76 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n89 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r211 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a106 = { borderColor: "{content.border.color}" };
var t102 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e146 = { root: o218, baseItem: i76, item: n89, submenu: r211, separator: a106, mobileButton: t102 };

// node_modules/@primeuix/themes/dist/nora/message/index.mjs
var o219 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r212 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e147 = { fontSize: "1rem", fontWeight: "700", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var l45 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var n90 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var c72 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var s28 = { root: { borderWidth: "1px" } };
var d91 = { content: { padding: "0" } };
var u17 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", shadow: "none", closeButton: { hoverBackground: "{blue.600}", focusRing: { color: "{blue.50}", shadow: "none" } }, outlined: { color: "{blue.800}", borderColor: "{blue.800}" }, simple: { color: "{blue.800}" } }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", shadow: "none", closeButton: { hoverBackground: "{green.600}", focusRing: { color: "{green.50}", shadow: "none" } }, outlined: { color: "{green.800}", borderColor: "{green.800}" }, simple: { color: "{green.800}" } }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", shadow: "none", closeButton: { hoverBackground: "{yellow.400}", focusRing: { color: "{yellow.50}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", shadow: "none", closeButton: { hoverBackground: "{red.600}", focusRing: { color: "{red.50}", shadow: "none" } }, outlined: { color: "{red.800}", borderColor: "{red.800}" }, simple: { color: "{red.800}" } }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", shadow: "none", closeButton: { hoverBackground: "{surface.50}", focusRing: { color: "{surface.700}", shadow: "none" } }, outlined: { color: "{surface.600}", borderColor: "{surface.600}" }, simple: { color: "{surface.600}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", shadow: "none", closeButton: { hoverBackground: "{blue.50}", focusRing: { color: "{blue.950}", shadow: "none" } }, outlined: { color: "{blue.200}", borderColor: "{blue.200}" }, simple: { color: "{blue.200}" } }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", shadow: "none", closeButton: { hoverBackground: "{green.50}", focusRing: { color: "{green.950}", shadow: "none" } }, outlined: { color: "{green.200}", borderColor: "{green.200}" }, simple: { color: "{green.200}" } }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", shadow: "none", closeButton: { hoverBackground: "{yellow.50}", focusRing: { color: "{yellow.950}", shadow: "none" } }, outlined: { color: "{yellow.200}", borderColor: "{yellow.200}" }, simple: { color: "{yellow.200}" } }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", shadow: "none", closeButton: { hoverBackground: "{red.50}", focusRing: { color: "{red.950}", shadow: "none" } }, outlined: { color: "{red.200}", borderColor: "{red.200}" }, simple: { color: "{red.200}" } }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", shadow: "none", closeButton: { hoverBackground: "{surface.500}", focusRing: { color: "{surface.200}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var a107 = { root: o219, content: r212, text: e147, icon: l45, closeButton: n90, closeIcon: c72, outlined: s28, simple: d91, colorScheme: u17 };

// node_modules/@primeuix/themes/dist/nora/metergroup/index.mjs
var e148 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r213 = { size: "0.5rem" };
var a108 = { gap: "0.5rem" };
var l46 = { size: "0.5rem" };
var o220 = { size: "1rem" };
var s29 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var t103 = { light: { meters: { background: "{surface.300}" } }, dark: { meters: { background: "{surface.600}" } } };
var m11 = { root: e148, meters: r213, label: a108, labelMarker: l46, labelIcon: o220, labelList: s29, colorScheme: t103 };

// node_modules/@primeuix/themes/dist/nora/multiselect/index.mjs
var o221 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d92 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r214 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l47 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i77 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e149 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f27 = { color: "{form.field.icon.color}" };
var a109 = { borderRadius: "{border.radius.xs}" };
var c73 = { padding: "{list.option.padding}" };
var n91 = { root: o221, dropdown: d92, overlay: r214, list: l47, option: i77, optionGroup: e149, chip: a109, clearIcon: f27, emptyMessage: c73 };

// node_modules/@primeuix/themes/dist/nora/orderlist/index.mjs
var r215 = { gap: "1.125rem" };
var a110 = { gap: "0.5rem" };
var o222 = { root: r215, controls: a110 };

// node_modules/@primeuix/themes/dist/nora/organizationchart/index.mjs
var o223 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r216 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e150 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t104 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n92 = { root: o223, node: r216, nodeToggleButton: e150, connector: t104 };

// node_modules/@primeuix/themes/dist/nora/overlaybadge/index.mjs
var o224 = { outline: { width: "2px", color: "{content.background}" } };
var t105 = { root: o224 };

// node_modules/@primeuix/themes/dist/nora/paginator/index.mjs
var o225 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r217 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t106 = { color: "{text.muted.color}" };
var e151 = { maxWidth: "2.5rem" };
var n93 = { root: o225, navButton: r217, currentPageReport: t106, jumpToPageInput: e151 };

// node_modules/@primeuix/themes/dist/nora/panel/index.mjs
var r218 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o226 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", borderRadius: "0" };
var e152 = { padding: "0.375rem 1.125rem" };
var d93 = { fontWeight: "700" };
var t107 = { padding: "1.125rem" };
var n94 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a111 = { root: r218, header: o226, toggleableHeader: e152, title: d93, content: t107, footer: n94 };

// node_modules/@primeuix/themes/dist/nora/panelmenu/index.mjs
var o227 = { gap: "0", transitionDuration: "{transition.duration}" };
var r219 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } };
var n95 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i78 = { indent: "1rem" };
var t108 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a112 = { root: o227, panel: r219, item: n95, submenu: i78, submenuIcon: t108 };

// node_modules/@primeuix/themes/dist/nora/password/index.mjs
var r220 = { borderRadius: "{content.border.radius}", height: ".75rem" };
var o228 = { color: "{form.field.icon.color}" };
var e153 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a113 = { gap: "0.5rem" };
var d94 = { light: { meter: { background: "{surface.300}" }, strength: { weakBackground: "{red.600}", mediumBackground: "{yellow.600}", strongBackground: "{green.600}" } }, dark: { meter: { background: "{surface.600}" }, strength: { weakBackground: "{red.500}", mediumBackground: "{yellow.500}", strongBackground: "{green.500}" } } };
var n96 = { meter: r220, icon: o228, overlay: e153, content: a113, colorScheme: d94 };

// node_modules/@primeuix/themes/dist/nora/picklist/index.mjs
var r221 = { gap: "1.125rem" };
var a114 = { gap: "0.5rem" };
var o229 = { root: r221, controls: a114 };

// node_modules/@primeuix/themes/dist/nora/popover/index.mjs
var o230 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r222 = { padding: "{overlay.popover.padding}" };
var e154 = { root: o230, content: r222 };

// node_modules/@primeuix/themes/dist/nora/progressbar/index.mjs
var r223 = { borderRadius: "{content.border.radius}", height: "1.25rem" };
var o231 = { background: "{primary.color}" };
var a115 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "700" };
var e155 = { light: { root: { background: "{surface.300}" } }, dark: { root: { background: "{surface.600}" } } };
var t109 = { root: r223, value: o231, label: a115, colorScheme: e155 };

// node_modules/@primeuix/themes/dist/nora/progressspinner/index.mjs
var o232 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r224 = { colorScheme: o232 };

// node_modules/@primeuix/themes/dist/nora/radiobutton/index.mjs
var o233 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{form.field.background}", checkedHoverBackground: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{form.field.border.color}", checkedHoverBorderColor: "{form.field.hover.border.color}", checkedFocusBorderColor: "{form.field.focus.border.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r225 = { size: "0.75rem", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e156 = { root: o233, icon: r225 };

// node_modules/@primeuix/themes/dist/nora/rating/index.mjs
var o234 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r226 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i79 = { root: o234, icon: r226 };

// node_modules/@primeuix/themes/dist/nora/ripple/index.mjs
var r227 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.4)" } } };
var o235 = { colorScheme: r227 };

// node_modules/@primeuix/themes/dist/nora/scrollpanel/index.mjs
var r228 = { transitionDuration: "{transition.duration}" };
var o236 = { size: "9px", borderRadius: "{border.radius.xs}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s30 = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } };
var a116 = { root: r228, bar: o236, colorScheme: s30 };

// node_modules/@primeuix/themes/dist/nora/select/index.mjs
var o237 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r229 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d95 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l48 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i80 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e157 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f28 = { color: "{form.field.icon.color}" };
var c74 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a117 = { padding: "{list.option.padding}" };
var n97 = { root: o237, dropdown: r229, overlay: d95, list: l48, option: i80, optionGroup: e157, clearIcon: f28, checkmark: c74, emptyMessage: a117 };

// node_modules/@primeuix/themes/dist/nora/selectbutton/index.mjs
var r230 = { borderRadius: "{form.field.border.radius}" };
var o238 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d96 = { root: r230, colorScheme: o238 };

// node_modules/@primeuix/themes/dist/nora/skeleton/index.mjs
var r231 = { borderRadius: "{content.border.radius}" };
var a118 = { light: { root: { background: "{surface.300}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.1)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o239 = { root: r231, colorScheme: a118 };

// node_modules/@primeuix/themes/dist/nora/slider/index.mjs
var r232 = { transitionDuration: "{transition.duration}" };
var o240 = { borderRadius: "{content.border.radius}", size: "3px" };
var a119 = { background: "{primary.color}" };
var c75 = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i81 = { light: { track: { background: "{surface.300}" } }, dark: { track: { background: "{surface.600}" } } };
var n98 = { root: r232, track: o240, range: a119, handle: c75, colorScheme: i81 };

// node_modules/@primeuix/themes/dist/nora/speeddial/index.mjs
var t110 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a120 = { root: t110 };

// node_modules/@primeuix/themes/dist/nora/splitbutton/index.mjs
var r233 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d97 = { root: r233 };

// node_modules/@primeuix/themes/dist/nora/splitter/index.mjs
var o241 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r234 = { background: "{content.border.color}" };
var n99 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t111 = { root: o241, gutter: r234, handle: n99 };

// node_modules/@primeuix/themes/dist/nora/stepper/index.mjs
var o242 = { transitionDuration: "{transition.duration}" };
var r235 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e158 = { padding: "0.5rem", gap: "1rem" };
var t112 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n100 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "700" };
var a121 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c76 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var i82 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var d98 = { root: o242, separator: r235, step: e158, stepHeader: t112, stepTitle: n100, stepNumber: a121, steppanels: c76, steppanel: i82 };

// node_modules/@primeuix/themes/dist/nora/steps/index.mjs
var o243 = { transitionDuration: "{transition.duration}" };
var r236 = { background: "{content.border.color}" };
var t113 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e159 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "700" };
var i83 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c77 = { root: o243, separator: r236, itemLink: t113, itemLabel: e159, itemNumber: i83 };

// node_modules/@primeuix/themes/dist/nora/tabmenu/index.mjs
var o244 = { transitionDuration: "{transition.duration}" };
var r237 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t114 = { background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{primary.color}", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e160 = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}" };
var n101 = { height: "0", bottom: "0", background: "transparent" };
var a122 = { root: o244, tablist: r237, item: t114, itemIcon: e160, activeBar: n101 };

// node_modules/@primeuix/themes/dist/nora/tabs/index.mjs
var o245 = { transitionDuration: "{transition.duration}" };
var r238 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t115 = { background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{primary.color}", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" } };
var n102 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c78 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var e161 = { height: "0", bottom: "0", background: "transparent" };
var a123 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i84 = { root: o245, tablist: r238, tab: t115, tabpanel: n102, navButton: c78, activeBar: e161, colorScheme: a123 };

// node_modules/@primeuix/themes/dist/nora/tabview/index.mjs
var o246 = { transitionDuration: "{transition.duration}" };
var r239 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t116 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n103 = { background: "{content.background}", color: "{content.color}" };
var a124 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c79 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e162 = { root: o246, tabList: r239, tab: t116, tabPanel: n103, navButton: a124, colorScheme: c79 };

// node_modules/@primeuix/themes/dist/nora/tag/index.mjs
var r240 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o247 = { size: "0.75rem" };
var c80 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.200}", color: "{surface.700}" }, success: { background: "{green.600}", color: "{surface.0}" }, info: { background: "{sky.600}", color: "{surface.0}" }, warn: { background: "{orange.600}", color: "{surface.0}" }, danger: { background: "{red.600}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.700}", color: "{surface.200}" }, success: { background: "{green.500}", color: "{green.950}" }, info: { background: "{sky.500}", color: "{sky.950}" }, warn: { background: "{orange.500}", color: "{orange.950}" }, danger: { background: "{red.500}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var a125 = { root: r240, icon: o247, colorScheme: c80 };

// node_modules/@primeuix/themes/dist/nora/terminal/index.mjs
var r241 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o248 = { gap: "0.25rem" };
var d99 = { margin: "2px 0" };
var e163 = { root: r241, prompt: o248, commandResponse: d99 };

// node_modules/@primeuix/themes/dist/nora/textarea/index.mjs
var o249 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d100 = { root: o249 };

// node_modules/@primeuix/themes/dist/nora/tieredmenu/index.mjs
var o250 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i85 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n104 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a126 = { mobileIndent: "1rem" };
var t117 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r242 = { borderColor: "{content.border.color}" };
var c81 = { root: o250, list: i85, item: n104, submenu: a126, submenuIcon: t117, separator: r242 };

// node_modules/@primeuix/themes/dist/nora/timeline/index.mjs
var e164 = { minHeight: "5rem" };
var r243 = { eventContent: { padding: "1rem 0" } };
var o251 = { eventContent: { padding: "0 1rem" } };
var n105 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{primary.color}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } };
var t118 = { color: "{content.border.color}", size: "2px" };
var a127 = { event: e164, horizontal: r243, vertical: o251, eventMarker: n105, eventConnector: t118 };

// node_modules/@primeuix/themes/dist/nora/toast/index.mjs
var o252 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}", blur: "0" };
var r244 = { size: "1.125rem" };
var e165 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a128 = { gap: "0.5rem" };
var l49 = { fontWeight: "700", fontSize: "1rem" };
var c82 = { fontWeight: "500", fontSize: "0.875rem" };
var n106 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var d101 = { size: "1rem" };
var s31 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", detailColor: "{blue.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.600}", focusRing: { color: "{blue.50}", shadow: "none" } } }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", detailColor: "{green.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.600}", focusRing: { color: "{green.50}", shadow: "none" } } }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", detailColor: "{yellow.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.400}", focusRing: { color: "{yellow.50}", shadow: "none" } } }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", detailColor: "{red.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.600}", focusRing: { color: "{red.50}", shadow: "none" } } }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.50}", focusRing: { color: "{surface.700}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", detailColor: "{blue.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.50}", focusRing: { color: "{blue.950}", shadow: "none" } } }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", detailColor: "{green.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.50}", focusRing: { color: "{green.950}", shadow: "none" } } }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", detailColor: "{yellow.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.50}", focusRing: { color: "{yellow.950}", shadow: "none" } } }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", detailColor: "{red.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.50}", focusRing: { color: "{red.950}", shadow: "none" } } }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", detailColor: "{surface.200}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.500}", focusRing: { color: "{surface.200}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u18 = { root: o252, icon: r244, content: e165, text: a128, summary: l49, detail: c82, closeButton: n106, closeIcon: d101, colorScheme: s31 };

// node_modules/@primeuix/themes/dist/nora/togglebutton/index.mjs
var o253 = { padding: "0.5rem 0.75rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.375rem 0.625rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.625rem 0.875rem" } };
var r245 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" };
var d102 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } };
var e166 = { light: { root: { hoverBackground: "{surface.200}" } }, dark: { root: { hoverBackground: "{surface.700}" } } };
var i86 = { root: o253, icon: r245, content: d102, colorScheme: e166 };

// node_modules/@primeuix/themes/dist/nora/toggleswitch/index.mjs
var r246 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", invalidBorderColor: "{form.field.invalid.border.color}", background: "{form.field.background}", hoverBackground: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.1s", disabledBackground: "{form.field.disabled.background}" };
var o254 = { borderRadius: "50%", size: "1rem", background: "{form.field.border.color}", hoverBackground: "{form.field.border.color}", checkedBackground: "{primary.contrast.color}", checkedHoverBackground: "{primary.contrast.color}", disabledBackground: "{form.field.disabled.color}", color: "{surface.0}", hoverColor: "{surface.0}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}" };
var d103 = { root: r246, handle: o254 };

// node_modules/@primeuix/themes/dist/nora/toolbar/index.mjs
var o255 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r247 = { root: o255 };

// node_modules/@primeuix/themes/dist/nora/tooltip/index.mjs
var r248 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o256 = { light: { root: { background: "{surface.900}", color: "{surface.0}" } }, dark: { root: { background: "{surface.0}", color: "{surface.900}" } } };
var e167 = { root: r248, colorScheme: o256 };

// node_modules/@primeuix/themes/dist/nora/tree/index.mjs
var o257 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r249 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e168 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t119 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c83 = { size: "2rem" };
var n107 = { margin: "0 0 0.5rem 0" };
var d104 = { root: o257, node: r249, nodeIcon: e168, nodeToggleButton: t119, loadingIcon: c83, filter: n107 };

// node_modules/@primeuix/themes/dist/nora/treeselect/index.mjs
var o258 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r250 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d105 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l50 = { padding: "{list.padding}" };
var e169 = { padding: "{list.option.padding}" };
var i87 = { borderRadius: "{border.radius.sm}" };
var f29 = { color: "{form.field.icon.color}" };
var a129 = { root: o258, dropdown: r250, overlay: d105, tree: l50, emptyMessage: e169, chip: i87, clearIcon: f29 };

// node_modules/@primeuix/themes/dist/nora/treetable/index.mjs
var o259 = { transitionDuration: "{transition.duration}" };
var r251 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" };
var e170 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t120 = { fontWeight: "700" };
var c84 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n108 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var d106 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var l51 = { fontWeight: "700" };
var i88 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var a130 = { width: "0.5rem" };
var g15 = { width: "1px", color: "{primary.color}" };
var s32 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u19 = { size: "2rem" };
var h12 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b11 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f30 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m12 = { light: { root: { borderColor: "{surface.300}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.600}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k9 = { root: o259, header: r251, headerCell: e170, columnTitle: t120, row: c84, bodyCell: n108, footerCell: d106, columnFooter: l51, footer: i88, columnResizer: a130, resizeIndicator: g15, sortIcon: s32, loadingIcon: u19, nodeToggleButton: h12, paginatorTop: b11, paginatorBottom: f30, colorScheme: m12 };

// node_modules/@primeuix/themes/dist/nora/virtualscroller/index.mjs
var o260 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e171 = { loader: o260 };

// node_modules/@primeuix/themes/dist/nora/index.mjs
var r252 = Object.defineProperty;
var e172 = Object.defineProperties;
var m13 = Object.getOwnPropertyDescriptors;
var o261 = Object.getOwnPropertySymbols;
var i89 = Object.prototype.hasOwnProperty;
var t121 = Object.prototype.propertyIsEnumerable;
var p11 = (e173, m14, o262) => m14 in e173 ? r252(e173, m14, { enumerable: true, configurable: true, writable: true, value: o262 }) : e173[m14] = o262;
var Nr3;
var Qr3 = (Nr3 = ((r253, e173) => {
  for (var m14 in e173 || (e173 = {})) i89.call(e173, m14) && p11(r253, m14, e173[m14]);
  if (o261) for (var m14 of o261(e173)) t121.call(e173, m14) && p11(r253, m14, e173[m14]);
  return r253;
})({}, e121), e172(Nr3, m13({ components: { accordion: c60, autocomplete: a88, avatar: n74, badge: d72, blockui: o180, breadcrumb: i61, button: e122, datepicker: k8, card: d73, carousel: t87, cascadeselect: f22, checkbox: e125, chip: s23, colorpicker: s24, confirmdialog: r183, confirmpopup: a93, contextmenu: c65, dataview: c67, datatable: k7, dialog: e133, divider: t92, dock: d79, drawer: e135, editor: l41, fieldset: n81, fileupload: i68, iftalabel: i71, floatlabel: d83, galleria: h11, iconfield: r198, image: i72, imagecompare: o207, inlinemessage: n84, inplace: n85, inputchips: f26, inputgroup: o211, inputnumber: d87, inputotp: e143, inputtext: d88, knob: c70, listbox: n86, megamenu: g14, menu: r210, menubar: e146, message: a107, metergroup: m11, multiselect: n91, orderlist: o222, organizationchart: n92, overlaybadge: t105, popover: e154, paginator: n93, password: n96, panel: a111, panelmenu: a112, picklist: o229, progressbar: t109, progressspinner: r224, radiobutton: e156, rating: i79, ripple: o235, scrollpanel: a116, select: n97, selectbutton: d96, skeleton: o239, slider: n98, speeddial: a120, splitter: t111, splitbutton: d97, stepper: d98, steps: c77, tabmenu: a122, tabs: i84, tabview: e162, textarea: d100, tieredmenu: c81, tag: a125, terminal: e163, timeline: a127, togglebutton: i86, toggleswitch: d103, tree: d104, treeselect: a129, treetable: k9, toast: u18, toolbar: r247, tooltip: e167, virtualscroller: e171 } })));

// src/app/layout/service/layout.service.ts
var LayoutService = class _LayoutService {
  layoutConfig = signal({
    preset: "Aura",
    primary: "emerald",
    surface: null,
    darkTheme: false,
    menuMode: "static"
  }, ...ngDevMode ? [{ debugName: "layoutConfig" }] : (
    /* istanbul ignore next */
    []
  ));
  layoutState = signal({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    configSidebarVisible: false,
    mobileMenuActive: false,
    menuHoverActive: false,
    activePath: null
  }, ...ngDevMode ? [{ debugName: "layoutState" }] : (
    /* istanbul ignore next */
    []
  ));
  theme = computed(() => this.layoutConfig().darkTheme ? "light" : "dark", ...ngDevMode ? [{ debugName: "theme" }] : (
    /* istanbul ignore next */
    []
  ));
  isSidebarActive = computed(() => this.layoutState().overlayMenuActive || this.layoutState().mobileMenuActive, ...ngDevMode ? [{ debugName: "isSidebarActive" }] : (
    /* istanbul ignore next */
    []
  ));
  isDarkTheme = computed(() => this.layoutConfig().darkTheme, ...ngDevMode ? [{ debugName: "isDarkTheme" }] : (
    /* istanbul ignore next */
    []
  ));
  getPrimary = computed(() => this.layoutConfig().primary, ...ngDevMode ? [{ debugName: "getPrimary" }] : (
    /* istanbul ignore next */
    []
  ));
  getSurface = computed(() => this.layoutConfig().surface, ...ngDevMode ? [{ debugName: "getSurface" }] : (
    /* istanbul ignore next */
    []
  ));
  isOverlay = computed(() => this.layoutConfig().menuMode === "overlay", ...ngDevMode ? [{ debugName: "isOverlay" }] : (
    /* istanbul ignore next */
    []
  ));
  transitionComplete = signal(false, ...ngDevMode ? [{ debugName: "transitionComplete" }] : (
    /* istanbul ignore next */
    []
  ));
  initialized = false;
  constructor() {
    effect(() => {
      const config = this.layoutConfig();
      if (!this.initialized || !config) {
        this.initialized = true;
        return;
      }
      this.handleDarkModeTransition(config);
    });
  }
  handleDarkModeTransition(config) {
    const supportsViewTransition = "startViewTransition" in document;
    if (supportsViewTransition) {
      this.startViewTransition(config);
    } else {
      this.toggleDarkMode(config);
    }
  }
  startViewTransition(config) {
    document.startViewTransition(() => {
      this.toggleDarkMode(config);
    });
  }
  toggleDarkMode(config) {
    const _config = config || this.layoutConfig();
    if (_config.darkTheme) {
      document.documentElement.classList.add("app-dark");
    } else {
      document.documentElement.classList.remove("app-dark");
    }
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: !this.layoutState().overlayMenuActive }));
    }
    if (this.isDesktop()) {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
    } else {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { mobileMenuActive: !this.layoutState().mobileMenuActive }));
    }
  }
  showConfigSidebar() {
    this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { configSidebarVisible: true }));
  }
  hideConfigSidebar() {
    this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { configSidebarVisible: false }));
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/layout/component/app.configurator.ts
var _c0 = (a0) => ({ "background-color": a0 });
var _c1 = (a0) => ({ "outline outline-primary": a0 });
var _forTrack0 = ($index, $item) => $item.name;
function AppConfigurator_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function AppConfigurator_For_6_Template_button_click_0_listener($event) {
      const primaryColor_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateColors($event, "primary", primaryColor_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const primaryColor_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(4, _c0, (primaryColor_r2 == null ? null : primaryColor_r2.name) === "noir" ? "var(--text-color)" : primaryColor_r2 == null ? null : primaryColor_r2.palette == null ? null : primaryColor_r2.palette["500"]));
    \u0275\u0275property("title", primaryColor_r2.name)("ngClass", \u0275\u0275pureFunction1(6, _c1, primaryColor_r2.name === ctx_r2.selectedPrimaryColor()));
  }
}
function AppConfigurator_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AppConfigurator_For_12_Template_button_click_0_listener($event) {
      const surface_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateColors($event, "surface", surface_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const surface_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(4, _c0, surface_r5 == null ? null : surface_r5.palette == null ? null : surface_r5.palette["500"]));
    \u0275\u0275property("title", surface_r5.name)("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx_r2.selectedSurfaceColor() ? ctx_r2.selectedSurfaceColor() === surface_r5.name : ctx_r2.layoutService.layoutConfig().darkTheme ? surface_r5.name === "zinc" : surface_r5.name === "slate"));
  }
}
function AppConfigurator_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 1);
    \u0275\u0275text(2, "Menu Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-selectbutton", 10);
    \u0275\u0275listener("ngModelChange", function AppConfigurator_div_17_Template_p_selectbutton_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMenuModeChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.menuMode())("options", ctx_r2.menuModeOptions)("allowEmpty", false);
  }
}
var presets = {
  Aura: Qr,
  Lara: Qr2,
  Nora: Qr3
};
var AppConfigurator = class _AppConfigurator {
  router = inject(Router);
  config = inject(PrimeNG);
  layoutService = inject(LayoutService);
  platformId = inject(PLATFORM_ID);
  primeng = inject(PrimeNG);
  presets = Object.keys(presets);
  showMenuModeButton = signal(!this.router.url.includes("auth"), ...ngDevMode ? [{ debugName: "showMenuModeButton" }] : (
    /* istanbul ignore next */
    []
  ));
  menuModeOptions = [
    { label: "Static", value: "static" },
    { label: "Overlay", value: "overlay" }
  ];
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onPresetChange(this.layoutService.layoutConfig().preset);
    }
  }
  surfaces = [
    {
      name: "slate",
      palette: {
        0: "#ffffff",
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617"
      }
    },
    {
      name: "gray",
      palette: {
        0: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
      }
    },
    {
      name: "zinc",
      palette: {
        0: "#ffffff",
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b"
      }
    },
    {
      name: "neutral",
      palette: {
        0: "#ffffff",
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a"
      }
    },
    {
      name: "stone",
      palette: {
        0: "#ffffff",
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09"
      }
    },
    {
      name: "soho",
      palette: {
        0: "#ffffff",
        50: "#ececec",
        100: "#dedfdf",
        200: "#c4c4c6",
        300: "#adaeb0",
        400: "#97979b",
        500: "#7f8084",
        600: "#6a6b70",
        700: "#55565b",
        800: "#3f4046",
        900: "#2c2c34",
        950: "#16161d"
      }
    },
    {
      name: "viva",
      palette: {
        0: "#ffffff",
        50: "#f3f3f3",
        100: "#e7e7e8",
        200: "#cfd0d0",
        300: "#b7b8b9",
        400: "#9fa1a1",
        500: "#87898a",
        600: "#6e7173",
        700: "#565a5b",
        800: "#3e4244",
        900: "#262b2c",
        950: "#0e1315"
      }
    },
    {
      name: "ocean",
      palette: {
        0: "#ffffff",
        50: "#fbfcfc",
        100: "#F7F9F8",
        200: "#EFF3F2",
        300: "#DADEDD",
        400: "#B1B7B6",
        500: "#828787",
        600: "#5F7274",
        700: "#415B61",
        800: "#29444E",
        900: "#183240",
        950: "#0c1920"
      }
    }
  ];
  selectedPrimaryColor = computed(() => {
    return this.layoutService.layoutConfig().primary;
  }, ...ngDevMode ? [{ debugName: "selectedPrimaryColor" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSurfaceColor = computed(() => this.layoutService.layoutConfig().surface, ...ngDevMode ? [{ debugName: "selectedSurfaceColor" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPreset = computed(() => this.layoutService.layoutConfig().preset, ...ngDevMode ? [{ debugName: "selectedPreset" }] : (
    /* istanbul ignore next */
    []
  ));
  menuMode = computed(() => this.layoutService.layoutConfig().menuMode, ...ngDevMode ? [{ debugName: "menuMode" }] : (
    /* istanbul ignore next */
    []
  ));
  primaryColors = computed(() => {
    const presetPalette = presets[this.layoutService.layoutConfig().preset].primitive;
    const colors = ["emerald", "green", "lime", "orange", "amber", "yellow", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
    const palettes = [{ name: "noir", palette: {} }];
    colors.forEach((color) => {
      palettes.push({
        name: color,
        palette: presetPalette?.[color]
      });
    });
    return palettes;
  }, ...ngDevMode ? [{ debugName: "primaryColors" }] : (
    /* istanbul ignore next */
    []
  ));
  getPresetExt() {
    const color = this.primaryColors().find((c85) => c85.name === this.selectedPrimaryColor()) || {};
    const preset = this.layoutService.layoutConfig().preset;
    if (color.name === "noir") {
      return {
        semantic: {
          primary: {
            50: "{surface.50}",
            100: "{surface.100}",
            200: "{surface.200}",
            300: "{surface.300}",
            400: "{surface.400}",
            500: "{surface.500}",
            600: "{surface.600}",
            700: "{surface.700}",
            800: "{surface.800}",
            900: "{surface.900}",
            950: "{surface.950}"
          },
          colorScheme: {
            light: {
              primary: {
                color: "{primary.950}",
                contrastColor: "#ffffff",
                hoverColor: "{primary.800}",
                activeColor: "{primary.700}"
              },
              highlight: {
                background: "{primary.950}",
                focusBackground: "{primary.700}",
                color: "#ffffff",
                focusColor: "#ffffff"
              }
            },
            dark: {
              primary: {
                color: "{primary.50}",
                contrastColor: "{primary.950}",
                hoverColor: "{primary.200}",
                activeColor: "{primary.300}"
              },
              highlight: {
                background: "{primary.50}",
                focusBackground: "{primary.300}",
                color: "{primary.950}",
                focusColor: "{primary.950}"
              }
            }
          }
        }
      };
    } else {
      if (preset === "Nora") {
        return {
          semantic: {
            primary: color.palette,
            colorScheme: {
              light: {
                primary: {
                  color: "{primary.600}",
                  contrastColor: "#ffffff",
                  hoverColor: "{primary.700}",
                  activeColor: "{primary.800}"
                },
                highlight: {
                  background: "{primary.600}",
                  focusBackground: "{primary.700}",
                  color: "#ffffff",
                  focusColor: "#ffffff"
                }
              },
              dark: {
                primary: {
                  color: "{primary.500}",
                  contrastColor: "{surface.900}",
                  hoverColor: "{primary.400}",
                  activeColor: "{primary.300}"
                },
                highlight: {
                  background: "{primary.500}",
                  focusBackground: "{primary.400}",
                  color: "{surface.900}",
                  focusColor: "{surface.900}"
                }
              }
            }
          }
        };
      } else {
        return {
          semantic: {
            primary: color.palette,
            colorScheme: {
              light: {
                primary: {
                  color: "{primary.500}",
                  contrastColor: "#ffffff",
                  hoverColor: "{primary.600}",
                  activeColor: "{primary.700}"
                },
                highlight: {
                  background: "{primary.50}",
                  focusBackground: "{primary.100}",
                  color: "{primary.700}",
                  focusColor: "{primary.800}"
                }
              },
              dark: {
                primary: {
                  color: "{primary.400}",
                  contrastColor: "{surface.900}",
                  hoverColor: "{primary.300}",
                  activeColor: "{primary.200}"
                },
                highlight: {
                  background: "color-mix(in srgb, {primary.400}, transparent 84%)",
                  focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
                  color: "rgba(255,255,255,.87)",
                  focusColor: "rgba(255,255,255,.87)"
                }
              }
            }
          }
        };
      }
    }
  }
  updateColors(event, type, color) {
    if (type === "primary") {
      this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), { primary: color.name }));
    } else if (type === "surface") {
      this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), { surface: color.name }));
    }
    this.applyTheme(type, color);
    event.stopPropagation();
  }
  applyTheme(type, color) {
    if (type === "primary") {
      a43(this.getPresetExt());
    } else if (type === "surface") {
      s11(color.palette);
    }
  }
  onPresetChange(event) {
    this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), { preset: event }));
    const preset = presets[event];
    const surfacePalette = this.surfaces.find((s33) => s33.name === this.selectedSurfaceColor())?.palette;
    w().preset(preset).preset(this.getPresetExt()).surfacePalette(surfacePalette).use({ useDefaultOptions: true });
  }
  onMenuModeChange(event) {
    this.layoutService.layoutConfig.update((prev) => __spreadProps(__spreadValues({}, prev), { menuMode: event }));
  }
  static \u0275fac = function AppConfigurator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppConfigurator)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppConfigurator, selectors: [["app-configurator"]], hostAttrs: [1, "hidden", "absolute", "top-13", "right-0", "w-72", "p-4", "bg-surface-0", "dark:bg-surface-900", "border", "border-surface", "rounded-border", "origin-top", "shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"], decls: 18, vars: 4, consts: [[1, "flex", "flex-col", "gap-4"], [1, "text-sm", "text-muted-color", "font-semibold"], [1, "pt-2", "flex", "gap-2", "flex-wrap", "justify-start"], ["type", "button", 1, "cursor-pointer", "w-5", "h-5", "rounded-full", "flex", "shrink-0", "items-center", "justify-center", "outline-offset-1", "shadow", 3, "title", "ngClass", "style"], ["type", "button", 1, "cursor-pointer", "w-5", "h-5", "rounded-full", "flex", "shrink-0", "items-center", "justify-center", "p-0", "outline-offset-1", 3, "title", "ngClass", "style"], [1, "flex", "flex-col", "gap-2"], ["size", "small", 3, "ngModelChange", "options", "ngModel", "allowEmpty"], ["class", "flex flex-col gap-2", 4, "ngIf"], ["type", "button", 1, "cursor-pointer", "w-5", "h-5", "rounded-full", "flex", "shrink-0", "items-center", "justify-center", "outline-offset-1", "shadow", 3, "click", "title", "ngClass"], ["type", "button", 1, "cursor-pointer", "w-5", "h-5", "rounded-full", "flex", "shrink-0", "items-center", "justify-center", "p-0", "outline-offset-1", 3, "click", "title", "ngClass"], ["size", "small", 3, "ngModelChange", "ngModel", "options", "allowEmpty"]], template: function AppConfigurator_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275repeaterCreate(5, AppConfigurator_For_6_Template, 1, 8, "button", 3, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div")(8, "span", 1);
      \u0275\u0275text(9, "Surface");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 2);
      \u0275\u0275repeaterCreate(11, AppConfigurator_For_12_Template, 1, 8, "button", 4, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "span", 1);
      \u0275\u0275text(15, "Presets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-selectbutton", 6);
      \u0275\u0275listener("ngModelChange", function AppConfigurator_Template_p_selectbutton_ngModelChange_16_listener($event) {
        return ctx.onPresetChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, AppConfigurator_div_17_Template, 4, 3, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.primaryColors());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.surfaces);
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.presets)("ngModel", ctx.selectedPreset())("allowEmpty", false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMenuModeButton());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, NgControlStatus, NgModel, SelectButtonModule, SelectButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppConfigurator, [{
    type: Component,
    args: [{
      selector: "app-configurator",
      standalone: true,
      imports: [CommonModule, FormsModule, SelectButtonModule],
      template: `
        <div class="flex flex-col gap-4">
            <div>
                <span class="text-sm text-muted-color font-semibold">Primary</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-start">
                    @for (primaryColor of primaryColors(); track primaryColor.name) {
                        <button
                            type="button"
                            [title]="primaryColor.name"
                            (click)="updateColors($event, 'primary', primaryColor)"
                            [ngClass]="{
                                    'outline outline-primary': primaryColor.name === selectedPrimaryColor()
                                }"
                            class="cursor-pointer w-5 h-5 rounded-full flex shrink-0 items-center justify-center outline-offset-1 shadow"
                            [style]="{
                                    'background-color': primaryColor?.name === 'noir' ? 'var(--text-color)' : primaryColor?.palette?.['500']
                                }"
                        >
                        </button>
                    }
                </div>
            </div>
            <div>
                <span class="text-sm text-muted-color font-semibold">Surface</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-start">
                    @for (surface of surfaces; track surface.name) {
                        <button
                            type="button"
                            [title]="surface.name"
                            (click)="updateColors($event, 'surface', surface)"
                            class="cursor-pointer w-5 h-5 rounded-full flex shrink-0 items-center justify-center p-0 outline-offset-1"
                            [ngClass]="{
                                    'outline outline-primary': selectedSurfaceColor() ? selectedSurfaceColor() === surface.name : layoutService.layoutConfig().darkTheme ? surface.name === 'zinc' : surface.name === 'slate'
                                }"
                            [style]="{
                                    'background-color': surface?.palette?.['500']
                                }"
                        ></button>
                    }
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-sm text-muted-color font-semibold">Presets</span>
                <p-selectbutton [options]="presets" [ngModel]="selectedPreset()" (ngModelChange)="onPresetChange($event)" [allowEmpty]="false" size="small" />
            </div>
            <div *ngIf="showMenuModeButton()" class="flex flex-col gap-2">
                <span class="text-sm text-muted-color font-semibold">Menu Mode</span>
                <p-selectbutton [ngModel]="menuMode()" (ngModelChange)="onMenuModeChange($event)" [options]="menuModeOptions" [allowEmpty]="false" size="small" />
            </div>
        </div>
    `,
      host: {
        class: "hidden absolute top-13 right-0 w-72 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppConfigurator, { className: "AppConfigurator", filePath: "src/app/layout/component/app.configurator.ts", lineNumber: 98 });
})();

// src/app/layout/component/app.topbar.ts
var _c02 = (a0, a1) => ({ "pi ": true, "pi-moon": a0, "pi-sun": a1 });
var AppTopbar = class _AppTopbar {
  items;
  layoutService = inject(LayoutService);
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), {
      darkTheme: !state.darkTheme
    }));
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], decls: 33, vars: 6, consts: [[1, "layout-topbar"], [1, "layout-topbar-logo-container"], [1, "layout-menu-button", "layout-topbar-action", 3, "click"], [1, "pi", "pi-bars"], ["routerLink", "/", 1, "layout-topbar-logo"], ["aria-hidden", "true", 1, "layout-topbar-logo-mark", "sakai-caret-mark", "sakai-caret-mark--header"], [1, "whitespace-nowrap"], [1, "layout-topbar-actions"], [1, "layout-config-menu"], ["type", "button", 1, "layout-topbar-action", 3, "click"], [3, "ngClass"], [1, "relative"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-action", "layout-topbar-action-highlight", 3, "hideOnOutsideClick"], [1, "pi", "pi-palette"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-menu-button", "layout-topbar-action", 3, "hideOnOutsideClick"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", "hidden", "lg:block"], [1, "layout-topbar-menu-content"], ["type", "button", 1, "layout-topbar-action"], [1, "pi", "pi-calendar"], [1, "pi", "pi-inbox"], [1, "pi", "pi-user"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        return ctx.layoutService.onMenuToggle();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 4)(5, "span", 5);
      \u0275\u0275text(6, "^");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Asset Tracking and Infrastructure Management System");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_11_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "app-configurator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "div", 17)(21, "button", 18);
      \u0275\u0275element(22, "i", 19);
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Calendar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 18);
      \u0275\u0275element(26, "i", 20);
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 18);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Profile");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c02, ctx.layoutService.isDarkTheme(), !ctx.layoutService.isDarkTheme()));
      \u0275\u0275advance(2);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("hideOnOutsideClick", true);
    }
  }, dependencies: [RouterModule, RouterLink, CommonModule, NgClass, StyleClassModule, StyleClass, AppConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{
      selector: "app-topbar",
      standalone: true,
      imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
      template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <span aria-hidden="true" class="layout-topbar-logo-mark sakai-caret-mark sakai-caret-mark--header">^</span>
                <span class="whitespace-nowrap">Asset Tracking and Infrastructure Management System</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/component/app.topbar.ts", lineNumber: 68 });
})();

// src/app/layout/component/app.menuitem.ts
var _c03 = ["app-menuitem", ""];
var _c12 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
var _forTrack02 = ($index, $item) => $item == null ? null : $item.label;
function AppMenuitem_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item().label);
  }
}
function AppMenuitem_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AppMenuitem_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function AppMenuitem_Conditional_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppMenuitem_Conditional_1_Conditional_4_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item().class);
    \u0275\u0275attribute("href", ctx_r0.item().url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item().target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChildren() ? 4 : -1);
  }
}
function AppMenuitem_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AppMenuitem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function AppMenuitem_Conditional_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppMenuitem_Conditional_2_Conditional_4_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item().class)("routerLink", ctx_r0.item().routerLink)("routerLinkActiveOptions", ctx_r0.item().routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c12))("fragment", ctx_r0.item().fragment)("queryParamsHandling", ctx_r0.item().queryParamsHandling)("preserveFragment", ctx_r0.item().preserveFragment)("skipLocationChange", ctx_r0.item().skipLocationChange)("replaceUrl", ctx_r0.item().replaceUrl)("state", ctx_r0.item().state)("queryParams", ctx_r0.item().queryParams);
    \u0275\u0275attribute("target", ctx_r0.item().target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChildren() ? 4 : -1);
  }
}
function AppMenuitem_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 10);
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r5["badgeClass"]);
    \u0275\u0275property("item", child_r5)("parentPath", ctx_r0.fullPath())("root", false);
  }
}
function AppMenuitem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275animateLeave(function AppMenuitem_Conditional_3_Template_animateleave_cb() {
      return "p-submenu-leave";
    });
    \u0275\u0275animateEnter(function AppMenuitem_Conditional_3_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.initialized() ? "p-submenu-enter" : null);
    });
    \u0275\u0275repeaterCreate(1, AppMenuitem_Conditional_3_For_2_Template, 1, 5, "li", 9, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("layout-root-submenulist", ctx_r0.root());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item().items);
  }
}
var AppMenuitem = class _AppMenuitem {
  layoutService = inject(LayoutService);
  router = inject(Router);
  item = input(null, ...ngDevMode ? [{ debugName: "item" }] : (
    /* istanbul ignore next */
    []
  ));
  root = input(false, ...ngDevMode ? [{ debugName: "root" }] : (
    /* istanbul ignore next */
    []
  ));
  parentPath = input(null, ...ngDevMode ? [{ debugName: "parentPath" }] : (
    /* istanbul ignore next */
    []
  ));
  isVisible = computed(() => this.item()?.visible !== false, ...ngDevMode ? [{ debugName: "isVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  hasChildren = computed(() => this.item()?.items && this.item()?.items.length > 0, ...ngDevMode ? [{ debugName: "hasChildren" }] : (
    /* istanbul ignore next */
    []
  ));
  hasRouterLink = computed(() => !!this.item()?.routerLink, ...ngDevMode ? [{ debugName: "hasRouterLink" }] : (
    /* istanbul ignore next */
    []
  ));
  fullPath = computed(() => {
    const itemPath = this.item()?.path;
    if (!itemPath)
      return this.parentPath();
    const parent = this.parentPath();
    if (parent && !itemPath.startsWith(parent)) {
      return parent + itemPath;
    }
    return itemPath;
  }, ...ngDevMode ? [{ debugName: "fullPath" }] : (
    /* istanbul ignore next */
    []
  ));
  isActive = computed(() => {
    const activePath = this.layoutService.layoutState().activePath;
    if (this.item()?.path) {
      return activePath?.startsWith(this.fullPath() ?? "") ?? false;
    }
    return false;
  }, ...ngDevMode ? [{ debugName: "isActive" }] : (
    /* istanbul ignore next */
    []
  ));
  initialized = signal(false, ...ngDevMode ? [{ debugName: "initialized" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.item()?.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    if (this.item()?.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized.set(true);
    });
  }
  updateActiveStateFromRoute() {
    const item = this.item();
    if (!item?.routerLink)
      return;
    const isRouteActive = this.router.isActive(item.routerLink[0], {
      paths: "exact",
      queryParams: "ignored",
      matrixParams: "ignored",
      fragment: "ignored"
    });
    if (isRouteActive) {
      const parentPath = this.parentPath();
      if (parentPath) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: parentPath
        }));
      }
    }
  }
  itemClick(event) {
    const item = this.item();
    if (item?.disabled) {
      event.preventDefault();
      return;
    }
    if (item?.command) {
      item.command({ originalEvent: event, item });
    }
    if (this.hasChildren()) {
      if (this.isActive()) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: this.parentPath()
        }));
      } else {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: this.fullPath(),
          menuHoverActive: true
        }));
      }
    } else {
      this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
        overlayMenuActive: false,
        staticMenuMobileActive: false,
        mobileMenuActive: false,
        menuHoverActive: false
      }));
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("active-menuitem", ctx.isActive())("layout-root-menuitem", ctx.root());
    }
  }, inputs: { item: [1, "item"], root: [1, "root"], parentPath: [1, "parentPath"] }, attrs: _c03, decls: 4, vars: 4, consts: [[1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], [3, "layout-root-submenulist"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["app-menuitem", "", 3, "item", "parentPath", "root", "class"], ["app-menuitem", "", 3, "item", "parentPath", "root"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppMenuitem_Conditional_0_Template, 2, 1, "div", 0);
      \u0275\u0275conditionalCreate(1, AppMenuitem_Conditional_1_Template, 5, 6, "a", 1);
      \u0275\u0275conditionalCreate(2, AppMenuitem_Conditional_2_Template, 5, 15, "a", 2);
      \u0275\u0275conditionalCreate(3, AppMenuitem_Conditional_3_Template, 3, 2, "ul", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.root() && ctx.isVisible() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((!ctx.hasRouterLink() || ctx.hasChildren()) && ctx.isVisible() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasRouterLink() && !ctx.hasChildren() && ctx.isVisible() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasChildren() && ctx.isVisible() && (ctx.root() || ctx.isActive()) ? 3 : -1);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple], styles: ["\n.p-submenu-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_p-animate-submenu-expand 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n.p-submenu-leave[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_p-animate-submenu-collapse 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_p-animate-submenu-expand {\n  from {\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    max-height: 1000px;\n    overflow: visible;\n  }\n}\n@keyframes _ngcontent-%COMP%_p-animate-submenu-collapse {\n  from {\n    max-height: 1000px;\n    overflow: hidden;\n  }\n  to {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=app.menuitem.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{ selector: "[app-menuitem]", imports: [CommonModule, RouterModule, RippleModule], template: `
        @if (root() && isVisible()) {
            <div class="layout-menuitem-root-text">{{ item().label }}</div>
        }
        @if ((!hasRouterLink() || hasChildren()) && isVisible()) {
            <a [attr.href]="item().url" (click)="itemClick($event)" [ngClass]="item().class" [attr.target]="item().target" tabindex="0" pRipple>
                <i [ngClass]="item().icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item().label }}</span>
                @if (hasChildren()) {
                    <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                }
            </a>
        }
        @if (hasRouterLink() && !hasChildren() && isVisible()) {
            <a
                (click)="itemClick($event)"
                [ngClass]="item().class"
                [routerLink]="item().routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item().routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item().fragment"
                [queryParamsHandling]="item().queryParamsHandling"
                [preserveFragment]="item().preserveFragment"
                [skipLocationChange]="item().skipLocationChange"
                [replaceUrl]="item().replaceUrl"
                [state]="item().state"
                [queryParams]="item().queryParams"
                [attr.target]="item().target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item().icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item().label }}</span>
                @if (hasChildren()) {
                    <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                }
            </a>
        }
        @if (hasChildren() && isVisible() && (root() || isActive())) {
            <ul [animate.enter]="initialized() ? 'p-submenu-enter' : null" [animate.leave]="'p-submenu-leave'" [class.layout-root-submenulist]="root()">
                @for (child of item().items; track child?.label) {
                    <li app-menuitem [item]="child" [parentPath]="fullPath()" [root]="false" [class]="child['badgeClass']"></li>
                }
            </ul>
        }
    `, host: {
      "[class.active-menuitem]": "isActive()",
      "[class.layout-root-menuitem]": "root()"
    }, styles: ["/* angular:styles/component:scss;81b3f56aa5c0a1e79fa32137518cb4a874606c9757504cd30f0dc0ac0cf23067;C:/xampp/htdocs/atims/atims-ui/src/app/layout/component/app.menuitem.ts */\n.p-submenu-enter {\n  animation: p-animate-submenu-expand 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n.p-submenu-leave {\n  animation: p-animate-submenu-collapse 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n@keyframes p-animate-submenu-expand {\n  from {\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    max-height: 1000px;\n    overflow: visible;\n  }\n}\n@keyframes p-animate-submenu-collapse {\n  from {\n    max-height: 1000px;\n    overflow: hidden;\n  }\n  to {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=app.menuitem.css.map */\n"] }]
  }], () => [], { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], root: [{ type: Input, args: [{ isSignal: true, alias: "root", required: false }] }], parentPath: [{ type: Input, args: [{ isSignal: true, alias: "parentPath", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/component/app.menuitem.ts", lineNumber: 95 });
})();

// src/app/layout/component/app.menu.ts
var _forTrack03 = ($index, $item) => $item.label;
function AppMenu_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 1);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("item", item_r1)("root", true);
  }
}
function AppMenu_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 2);
  }
}
function AppMenu_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppMenu_For_2_Conditional_0_Template, 1, 2, "li", 1)(1, AppMenu_For_2_Conditional_1_Template, 1, 0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(!item_r1.separator ? 0 : 1);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  ngOnInit() {
    this.model = [
      {
        label: "Home",
        items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/dashboard"] }]
      },
      {
        label: "Asset Management",
        items: [
          { label: "Assets", icon: "pi pi-fw pi-box", routerLink: ["/assets"] },
          { label: "Incidents", icon: "pi pi-fw pi-exclamation-triangle", routerLink: ["/incidents"] }
        ]
      },
      {
        label: "Operations",
        items: [
          { label: "Tasks", icon: "pi pi-fw pi-list", routerLink: ["/tasks"] },
          { label: "Reports", icon: "pi pi-fw pi-chart-bar", routerLink: ["/reports"] }
        ]
      },
      {
        label: "System",
        items: [{ label: "Settings", icon: "pi pi-fw pi-cog", routerLink: ["/settings"] }]
      }
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 3, vars: 0, consts: [[1, "layout-menu"], ["app-menuitem", "", 3, "item", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275repeaterCreate(1, AppMenu_For_2_Template, 2, 1, null, null, _forTrack03);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.model);
    }
  }, dependencies: [CommonModule, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, AppMenuitem, RouterModule],
      template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/component/app.menu.ts", lineNumber: 21 });
})();

// src/app/layout/component/app.sidebar.ts
var AppSidebar = class _AppSidebar {
  layoutService = inject(LayoutService);
  router = inject(Router);
  el = inject(ElementRef);
  outsideClickListener = null;
  destroy$ = new Subject();
  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (this.layoutService.isDesktop()) {
        if (state.overlayMenuActive) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      } else {
        if (state.mobileMenuActive) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      }
    });
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((event) => {
      const navEvent = event;
      this.onRouteChange(navEvent.urlAfterRedirects);
    });
    this.onRouteChange(this.router.url);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.unbindOutsideClickListener();
  }
  onRouteChange(path) {
    this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
      activePath: path,
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      mobileMenuActive: false,
      menuHoverActive: false
    }));
  }
  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event) => {
        if (this.isOutsideClicked(event)) {
          this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            mobileMenuActive: false,
            menuHoverActive: false
          }));
        }
      };
      document.addEventListener("click", this.outsideClickListener);
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  isOutsideClicked(event) {
    const topbarButtonEl = document.querySelector(".topbar-start > button");
    const sidebarEl = this.el.nativeElement;
    return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarButtonEl?.isSameNode(event.target) || topbarButtonEl?.contains(event.target));
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 2, vars: 0, consts: [[1, "layout-sidebar"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-menu");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [AppMenu, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{
      selector: "app-sidebar",
      standalone: true,
      imports: [AppMenu, RouterModule],
      template: `
        <div class="layout-sidebar">
            <app-menu></app-menu>
        </div>
    `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/component/app.sidebar.ts", lineNumber: 17 });
})();

// src/app/layout/component/app.footer.ts
var AppFooter = class _AppFooter {
  static \u0275fac = function AppFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "layout-footer"], ["href", "http://www.perigee.co.za", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "font-bold", "hover:underline"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, " ATIMS by ");
      \u0275\u0275domElementStart(2, "a", 1);
      \u0275\u0275text(3, " Perigee Digital");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFooter, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-footer",
      template: `<div class="layout-footer">
        ATIMS by
        <a href="http://www.perigee.co.za" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">
        Perigee Digital</a>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "src/app/layout/component/app.footer.ts", lineNumber: 12 });
})();

// src/app/layout/component/app.layout.ts
var AppLayout = class _AppLayout {
  layoutService = inject(LayoutService);
  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (state.mobileMenuActive) {
        document.body.classList.add("blocked-scroll");
      } else {
        document.body.classList.remove("blocked-scroll");
      }
    });
  }
  containerClass = computed(() => {
    const config = this.layoutService.layoutConfig();
    const state = this.layoutService.layoutState();
    return {
      "layout-overlay": config.menuMode === "overlay",
      "layout-static": config.menuMode === "static",
      "layout-static-inactive": state.staticMenuDesktopInactive && config.menuMode === "static",
      "layout-overlay-active": state.overlayMenuActive,
      "layout-mobile-active": state.mobileMenuActive
    };
  }, ...ngDevMode ? [{ debugName: "containerClass" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass());
    }
  }, dependencies: [CommonModule, NgClass, AppTopbar, AppSidebar, RouterModule, RouterOutlet, AppFooter], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter],
      template: `<div class="layout-wrapper" [ngClass]="containerClass()">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask"></div>
    </div> `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/component/app.layout.ts", lineNumber: 25 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AppLayout,
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-CMRZZTUF.js").then((m14) => m14.DashboardComponent)
      },
      {
        path: "assets",
        loadComponent: () => import("./chunk-7CDJBLXR.js").then((m14) => m14.AssetsComponent)
      },
      {
        path: "incidents",
        loadComponent: () => import("./chunk-R6MILWDH.js").then((m14) => m14.IncidentListComponent)
      },
      {
        path: "tasks",
        loadChildren: () => import("./chunk-J7KWK45D.js").then((m14) => m14.TasksModule)
      },
      {
        path: "reports",
        loadChildren: () => import("./chunk-JZNVETXX.js").then((m14) => m14.ReportsModule)
      },
      {
        path: "settings",
        loadChildren: () => import("./chunk-E4UC2ULZ.js").then((m14) => m14.SettingsModule)
      }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }), withEnabledBlockingInitialNavigation()),
    provideHttpClient(withFetch()),
    provideZonelessChangeDetection(),
    providePrimeNG({ theme: { preset: Qr, options: { darkModeSelector: ".app-dark" } } })
  ]
};

// src/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
