import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-6GZMF7H4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  ViewEncapsulation,
  __objRest,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  isPlatformServer,
  makeEnvironmentProviders,
  numberAttribute,
  provideAppInitializer,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UCY5OEF2.js";

// node_modules/primeng/node_modules/@primeuix/utils/dist/classnames/index.mjs
function f(...e) {
  if (e) {
    let t2 = [];
    for (let i4 = 0; i4 < e.length; i4++) {
      let n = e[i4];
      if (!n) continue;
      let s5 = typeof n;
      if (s5 === "string" || s5 === "number") t2.push(n);
      else if (s5 === "object") {
        let c4 = Array.isArray(n) ? [f(...n)] : Object.entries(n).map(([r, o]) => o ? r : void 0);
        t2 = c4.length ? t2.concat(c4.filter((r) => !!r)) : t2;
      }
    }
    return t2.join(" ").trim();
  }
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/object/index.mjs
function l(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function b(e, t2, n = /* @__PURE__ */ new WeakSet()) {
  if (e === t2) return true;
  if (!e || !t2 || typeof e != "object" || typeof t2 != "object" || n.has(e) || n.has(t2)) return false;
  n.add(e).add(t2);
  let o = Array.isArray(e), r = Array.isArray(t2), u2, f2, T2;
  if (o && r) {
    if (f2 = e.length, f2 != t2.length) return false;
    for (u2 = f2; u2-- !== 0; ) if (!b(e[u2], t2[u2], n)) return false;
    return true;
  }
  if (o != r) return false;
  let S3 = e instanceof Date, A = t2 instanceof Date;
  if (S3 != A) return false;
  if (S3 && A) return e.getTime() == t2.getTime();
  let I2 = e instanceof RegExp, L2 = t2 instanceof RegExp;
  if (I2 != L2) return false;
  if (I2 && L2) return e.toString() == t2.toString();
  let F4 = Object.keys(e);
  if (f2 = F4.length, f2 !== Object.keys(t2).length) return false;
  for (u2 = f2; u2-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t2, F4[u2])) return false;
  for (u2 = f2; u2-- !== 0; ) if (T2 = F4[u2], !b(e[T2], t2[T2], n)) return false;
  return true;
}
function y(e, t2) {
  return b(e, t2);
}
function c(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function s(e) {
  return !l(e);
}
function p(e, t2) {
  if (!e || !t2) return null;
  try {
    let n = e[t2];
    if (s(n)) return n;
  } catch (n) {
  }
  if (Object.keys(e).length) {
    if (c(t2)) return t2(e);
    if (t2.indexOf(".") === -1) return e[t2];
    {
      let n = t2.split("."), o = e;
      for (let r = 0, u2 = n.length; r < u2; ++r) {
        if (o == null) return null;
        o = o[n[r]];
      }
      return o;
    }
  }
  return null;
}
function k(e, t2, n) {
  return n ? p(e, n) === p(t2, n) : y(e, t2);
}
function q(e, t2) {
  if (e != null && t2 && t2.length) {
    for (let n of t2) if (k(e, n)) return true;
  }
  return false;
}
function i(e, t2 = true) {
  return e instanceof Object && e.constructor === Object && (t2 || Object.keys(e).length !== 0);
}
function V(e, t2) {
  let n = -1;
  if (s(e)) try {
    n = e.findLastIndex(t2);
  } catch (o) {
    n = e.lastIndexOf([...e].reverse().find(t2));
  }
  return n;
}
function m(e, ...t2) {
  return c(e) ? e(...t2) : e;
}
function a(e, t2 = true) {
  return typeof e == "string" && (t2 || e !== "");
}
function g(e) {
  return a(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function R(e, t2 = "", n = {}) {
  let o = g(t2).split("."), r = o.shift();
  if (r) {
    if (i(e)) {
      let u2 = Object.keys(e).find((f2) => g(f2) === r) || "";
      return R(m(e[u2], n), o.join("."), n);
    }
    return;
  }
  return m(e, n);
}
function h(e, t2 = true) {
  return Array.isArray(e) && (t2 || e.length !== 0);
}
function E(e) {
  return e instanceof Date;
}
function J(e = "") {
  return s(e) && e.length === 1 && !!e.match(/\S| /);
}
function Y(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function X(e) {
  if (e && /[\xC0-\xFF\u0100-\u017E]/.test(e)) {
    let n = { A: /[\xC0-\xC5\u0100\u0102\u0104]/g, AE: /[\xC6]/g, C: /[\xC7\u0106\u0108\u010A\u010C]/g, D: /[\xD0\u010E\u0110]/g, E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g, G: /[\u011C\u011E\u0120\u0122]/g, H: /[\u0124\u0126]/g, I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g, IJ: /[\u0132]/g, J: /[\u0134]/g, K: /[\u0136]/g, L: /[\u0139\u013B\u013D\u013F\u0141]/g, N: /[\xD1\u0143\u0145\u0147\u014A]/g, O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g, OE: /[\u0152]/g, R: /[\u0154\u0156\u0158]/g, S: /[\u015A\u015C\u015E\u0160]/g, T: /[\u0162\u0164\u0166]/g, U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g, W: /[\u0174]/g, Y: /[\xDD\u0176\u0178]/g, Z: /[\u0179\u017B\u017D]/g, a: /[\xE0-\xE5\u0101\u0103\u0105]/g, ae: /[\xE6]/g, c: /[\xE7\u0107\u0109\u010B\u010D]/g, d: /[\u010F\u0111]/g, e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g, g: /[\u011D\u011F\u0121\u0123]/g, i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g, ij: /[\u0133]/g, j: /[\u0135]/g, k: /[\u0137,\u0138]/g, l: /[\u013A\u013C\u013E\u0140\u0142]/g, n: /[\xF1\u0144\u0146\u0148\u014B]/g, p: /[\xFE]/g, o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g, oe: /[\u0153]/g, r: /[\u0155\u0157\u0159]/g, s: /[\u015B\u015D\u015F\u0161]/g, t: /[\u0163\u0165\u0167]/g, u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g, w: /[\u0175]/g, y: /[\xFD\xFF\u0177]/g, z: /[\u017A\u017C\u017E]/g };
    for (let o in n) e = e.replace(n[o], o);
  }
  return e;
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/dom/index.mjs
function k2(t2, e) {
  return t2 ? t2.classList ? t2.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t2.className) : false;
}
function P(t2, e) {
  if (t2 && e) {
    let o = (n) => {
      k2(t2, n) || (t2.classList ? t2.classList.add(n) : t2.className += " " + n);
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function F() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function lt(t2) {
  typeof t2 == "string" ? P(document.body, t2 || "p-overflow-hidden") : (t2 != null && t2.variableName && document.body.style.setProperty(t2.variableName, F() + "px"), P(document.body, (t2 == null ? void 0 : t2.className) || "p-overflow-hidden"));
}
function M(t2, e) {
  if (t2 && e) {
    let o = (n) => {
      t2.classList ? t2.classList.remove(n) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function dt(t2) {
  typeof t2 == "string" ? M(document.body, t2 || "p-overflow-hidden") : (t2 != null && t2.variableName && document.body.style.removeProperty(t2.variableName), M(document.body, (t2 == null ? void 0 : t2.className) || "p-overflow-hidden"));
}
function E2(t2) {
  for (let e of document == null ? void 0 : document.styleSheets) try {
    for (let o of e == null ? void 0 : e.cssRules) for (let n of o == null ? void 0 : o.style) if (t2.test(n)) return { name: n, value: o.style.getPropertyValue(n).trim() };
  } catch (o) {
  }
  return null;
}
function v(t2) {
  let e = { width: 0, height: 0 };
  if (t2) {
    let [o, n] = [t2.style.visibility, t2.style.display], r = t2.getBoundingClientRect();
    t2.style.visibility = "hidden", t2.style.display = "block", e.width = r.width || t2.offsetWidth, e.height = r.height || t2.offsetHeight, t2.style.display = n, t2.style.visibility = o;
  }
  return e;
}
function y2() {
  let t2 = window, e = document, o = e.documentElement, n = e.getElementsByTagName("body")[0], r = t2.innerWidth || o.clientWidth || n.clientWidth, i4 = t2.innerHeight || o.clientHeight || n.clientHeight;
  return { width: r, height: i4 };
}
function S(t2) {
  return t2 ? Math.abs(t2.scrollLeft) : 0;
}
function $() {
  let t2 = document.documentElement;
  return (window.pageXOffset || S(t2)) - (t2.clientLeft || 0);
}
function D() {
  let t2 = document.documentElement;
  return (window.pageYOffset || t2.scrollTop) - (t2.clientTop || 0);
}
function I(t2) {
  return t2 ? getComputedStyle(t2).direction === "rtl" : false;
}
function V2(t2, e, o = true) {
  var n, r, i4, s5;
  if (t2) {
    let a3 = t2.offsetParent ? { width: t2.offsetWidth, height: t2.offsetHeight } : v(t2), l4 = a3.height, d3 = a3.width, f2 = e.offsetHeight, c4 = e.offsetWidth, u2 = e.getBoundingClientRect(), g2 = D(), w5 = $(), st2 = y2(), W2, N3, nt2 = "top";
    u2.top + f2 + l4 > st2.height ? (W2 = u2.top + g2 - l4, nt2 = "bottom", W2 < 0 && (W2 = g2)) : W2 = f2 + u2.top + g2, u2.left + d3 > st2.width ? N3 = Math.max(0, u2.left + w5 + c4 - d3) : N3 = u2.left + w5, I(t2) ? t2.style.insetInlineEnd = N3 + "px" : t2.style.insetInlineStart = N3 + "px", t2.style.top = W2 + "px", t2.style.transformOrigin = nt2, o && (t2.style.marginTop = nt2 === "bottom" ? `calc(${(r = (n = E2(/-anchor-gutter$/)) == null ? void 0 : n.value) != null ? r : "2px"} * -1)` : (s5 = (i4 = E2(/-anchor-gutter$/)) == null ? void 0 : i4.value) != null ? s5 : "");
  }
}
function T(t2, e) {
  t2 && (typeof e == "string" ? t2.style.cssText = e : Object.entries(e || {}).forEach(([o, n]) => t2.style[o] = n));
}
function C(t2, e) {
  if (t2 instanceof HTMLElement) {
    let o = t2.offsetWidth;
    if (e) {
      let n = getComputedStyle(t2);
      o += parseFloat(n.marginLeft) + parseFloat(n.marginRight);
    }
    return o;
  }
  return 0;
}
function j(t2, e, o = true, n = void 0) {
  var r;
  if (t2) {
    let i4 = t2.offsetParent ? { width: t2.offsetWidth, height: t2.offsetHeight } : v(t2), s5 = e.offsetHeight, a3 = e.getBoundingClientRect(), l4 = y2(), d3, f2, c4 = n != null ? n : "top";
    if (!n && a3.top + s5 + i4.height > l4.height ? (d3 = -1 * i4.height, c4 = "bottom", a3.top + d3 < 0 && (d3 = -1 * a3.top)) : d3 = s5, i4.width > l4.width ? f2 = a3.left * -1 : a3.left + i4.width > l4.width ? f2 = (a3.left + i4.width - l4.width) * -1 : f2 = 0, t2.style.top = d3 + "px", t2.style.insetInlineStart = f2 + "px", t2.style.transformOrigin = c4, o) {
      let u2 = (r = E2(/-anchor-gutter$/)) == null ? void 0 : r.value;
      t2.style.marginTop = c4 === "bottom" ? `calc(${u2 != null ? u2 : "2px"} * -1)` : u2 != null ? u2 : "";
    }
  }
}
function h2(t2) {
  if (t2) {
    let e = t2.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function H(t2) {
  return !!(t2 !== null && typeof t2 != "undefined" && t2.nodeName && h2(t2));
}
function p2(t2) {
  return typeof Element != "undefined" ? t2 instanceof Element : t2 !== null && typeof t2 == "object" && t2.nodeType === 1 && typeof t2.nodeName == "string";
}
function b2(t2) {
  var o;
  if (p2(t2)) return t2;
  if (!t2 || typeof t2 != "object") return;
  let e = t2;
  if ("current" in t2) e = t2.current, e = (o = b2(e == null ? void 0 : e.elementRef)) != null ? o : e;
  else if ("value" in t2) e = t2.value;
  else if ("nativeElement" in t2) e = t2.nativeElement;
  else if ("el" in t2) {
    let n = t2.el;
    n && typeof n == "object" && "nativeElement" in n ? e = n.nativeElement : e = n;
  } else if ("elementRef" in t2) return b2(t2.elementRef);
  return e = m(e), p2(e) ? e : void 0;
}
function U(t2, e) {
  var o, n, r;
  if (t2) switch (t2) {
    case "document":
      return document;
    case "window":
      return window;
    case "body":
      return document.body;
    case "@next":
      return e == null ? void 0 : e.nextElementSibling;
    case "@prev":
      return e == null ? void 0 : e.previousElementSibling;
    case "@first":
      return e == null ? void 0 : e.firstElementChild;
    case "@last":
      return e == null ? void 0 : e.lastElementChild;
    case "@child":
      return (o = e == null ? void 0 : e.children) == null ? void 0 : o[0];
    case "@parent":
      return e == null ? void 0 : e.parentElement;
    case "@grandparent":
      return (n = e == null ? void 0 : e.parentElement) == null ? void 0 : n.parentElement;
    default: {
      if (typeof t2 == "string") {
        let l4 = t2.match(/^@child\[(\d+)]/);
        return l4 ? ((r = e == null ? void 0 : e.children) == null ? void 0 : r[parseInt(l4[1], 10)]) || null : document.querySelector(t2) || null;
      }
      let s5 = ((l4) => typeof l4 == "function" && "call" in l4 && "apply" in l4)(t2) ? t2() : t2, a3 = b2(s5);
      return H(a3) ? a3 : (s5 == null ? void 0 : s5.nodeType) === 9 ? s5 : void 0;
    }
  }
}
function ut(t2, e) {
  let o = U(t2, e);
  if (o) o.appendChild(e);
  else throw new Error("Cannot append " + e + " to " + t2);
}
function O(t2, e = {}) {
  if (p2(t2)) {
    let o = (r, i4) => {
      var a3, l4;
      let s5 = (a3 = t2 == null ? void 0 : t2.$attrs) != null && a3[r] ? [(l4 = t2 == null ? void 0 : t2.$attrs) == null ? void 0 : l4[r]] : [];
      return [i4].flat().reduce((d3, f2) => {
        if (f2 != null) {
          let c4 = typeof f2;
          if (c4 === "string" || c4 === "number") d3.push(f2);
          else if (c4 === "object") {
            let u2 = Array.isArray(f2) ? o(r, f2) : Object.entries(f2).map(([g2, w5]) => r === "style" && (w5 || w5 === 0) ? `${g2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${w5}` : w5 ? g2 : void 0);
            d3 = u2.length ? d3.concat(u2.filter((g2) => !!g2)) : d3;
          }
        }
        return d3;
      }, s5);
    }, n = (r) => {
      o("style", r).forEach((s5) => {
        let a3 = s5.indexOf(":");
        if (a3 < 0) return;
        let l4 = s5.slice(0, a3).trim(), d3 = s5.slice(a3 + 1).trim();
        l4 && t2.style.setProperty(l4, d3);
      });
    };
    Object.entries(e).forEach(([r, i4]) => {
      if (i4 != null) {
        let s5 = r.match(/^on(.+)/);
        s5 ? t2.addEventListener(s5[1].toLowerCase(), i4) : r === "p-bind" || r === "pBind" ? O(t2, i4) : r === "style" ? (n(i4), (t2.$attrs = t2.$attrs || {}) && (t2.$attrs[r] = t2.style.cssText)) : (i4 = r === "class" ? [...new Set(o("class", i4))].join(" ").trim() : i4, (t2.$attrs = t2.$attrs || {}) && (t2.$attrs[r] = i4), t2.setAttribute(r, i4));
      }
    });
  }
}
function q2(t2, e = {}, ...o) {
  if (t2) {
    let n = document.createElement(t2);
    return O(n, e), n.append(...o), n;
  }
}
function yt(t2, e) {
  if (t2) {
    t2.style.opacity = "0";
    let o = +/* @__PURE__ */ new Date(), n = "0", r = function() {
      n = `${+t2.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - o) / e}`, t2.style.opacity = n, o = +/* @__PURE__ */ new Date(), +n < 1 && ("requestAnimationFrame" in window ? requestAnimationFrame(r) : setTimeout(r, 16));
    };
    r();
  }
}
function Y2(t2, e) {
  return p2(t2) ? Array.from(t2.querySelectorAll(e)) : [];
}
function Z(t2, e) {
  return p2(t2) ? t2.matches(e) ? t2 : t2.querySelector(e) : null;
}
function bt(t2, e) {
  t2 && document.activeElement !== t2 && t2.focus(e);
}
function Q(t2, e) {
  if (p2(t2)) {
    let o = t2.getAttribute(e);
    return isNaN(o) ? o === "true" || o === "false" ? o === "true" : o : +o;
  }
}
function x(t2, e = "") {
  let o = Y2(t2, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`), n = [];
  for (let r of o) getComputedStyle(r).display != "none" && getComputedStyle(r).visibility != "hidden" && n.push(r);
  return n;
}
function vt(t2, e) {
  let o = x(t2, e);
  return o.length > 0 ? o[0] : null;
}
function Tt(t2) {
  if (t2) {
    let e = t2.offsetHeight, o = getComputedStyle(t2);
    return e -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), e;
  }
  return 0;
}
function Ct(t2) {
  var e;
  if (t2) {
    let o = (e = h2(t2)) == null ? void 0 : e.childNodes, n = 0;
    if (o) for (let r = 0; r < o.length; r++) {
      if (o[r] === t2) return n;
      o[r].nodeType === 1 && n++;
    }
  }
  return -1;
}
function Lt(t2, e) {
  let o = x(t2, e);
  return o.length > 0 ? o[o.length - 1] : null;
}
function _(t2) {
  if (t2) {
    let e = t2.getBoundingClientRect();
    return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e.left + (window.pageXOffset || S(document.documentElement) || S(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function L(t2, e) {
  if (t2) {
    let o = t2.offsetHeight;
    if (e) {
      let n = getComputedStyle(t2);
      o += parseFloat(n.marginTop) + parseFloat(n.marginBottom);
    }
    return o;
  }
  return 0;
}
function Ot() {
  if (window.getSelection) return window.getSelection().toString();
  if (document.getSelection) return document.getSelection().toString();
}
function Nt(t2) {
  if (t2) {
    let e = t2.offsetWidth, o = getComputedStyle(t2);
    return e -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), e;
  }
  return 0;
}
function It(t2) {
  if (t2) {
    let e = t2.nodeName, o = t2.parentElement && t2.parentElement.nodeName;
    return e === "INPUT" || e === "TEXTAREA" || e === "BUTTON" || e === "A" || o === "INPUT" || o === "TEXTAREA" || o === "BUTTON" || o === "A" || !!t2.closest(".p-button, .p-checkbox, .p-radiobutton");
  }
  return false;
}
function ot(t2) {
  return !!(t2 && t2.offsetParent != null);
}
function Yt() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Qt() {
  return new Promise((t2) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(t2);
    });
  });
}
function Gt(t2) {
  var e;
  t2 && ("remove" in Element.prototype ? t2.remove() : (e = t2.parentNode) == null || e.removeChild(t2));
}
function Jt(t2, e) {
  let o = b2(t2);
  if (o) o.removeChild(e);
  else throw new Error("Cannot remove " + e + " from " + t2);
}
function _t(t2, e) {
  let o = getComputedStyle(t2).getPropertyValue("borderTopWidth"), n = o ? parseFloat(o) : 0, r = getComputedStyle(t2).getPropertyValue("paddingTop"), i4 = r ? parseFloat(r) : 0, s5 = t2.getBoundingClientRect(), l4 = e.getBoundingClientRect().top + document.body.scrollTop - (s5.top + document.body.scrollTop) - n - i4, d3 = t2.scrollTop, f2 = t2.clientHeight, c4 = L(e);
  l4 < 0 ? t2.scrollTop = d3 + l4 : l4 + c4 > f2 && (t2.scrollTop = d3 + l4 - f2 + c4);
}
function te(t2, e = "", o) {
  if (p2(t2) && o !== null && o !== void 0) {
    if (e === "style") {
      typeof o == "string" ? t2.style.cssText = o : typeof o == "object" && Object.entries(o).forEach(([n, r]) => {
        if (r == null) return;
        let i4 = n.startsWith("--") ? n : n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        t2.style.setProperty(i4, String(r));
      });
      return;
    }
    t2.setAttribute(e, o);
  }
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var x2 = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var y3 = Object.prototype.propertyIsEnumerable;
var m2 = (t2, r, e) => r in t2 ? x2(t2, r, { enumerable: true, configurable: true, writable: true, value: e }) : t2[r] = e;
var u = (t2, r) => {
  for (var e in r || (r = {})) c2.call(r, e) && m2(t2, e, r[e]);
  if (d) for (var e of d(r)) y3.call(r, e) && m2(t2, e, r[e]);
  return t2;
};
function i2(...t2) {
  if (t2) {
    let r = [];
    for (let e = 0; e < t2.length; e++) {
      let a3 = t2[e];
      if (!a3) continue;
      let o = typeof a3;
      if (o === "string" || o === "number") r.push(a3);
      else if (o === "object") {
        let f2 = Array.isArray(a3) ? [i2(...a3)] : Object.entries(a3).map(([s5, n]) => n ? s5 : void 0);
        r = f2.length ? r.concat(f2.filter((s5) => !!s5)) : r;
      }
    }
    return r.join(" ").trim();
  }
}
function l2(t2) {
  return typeof t2 == "function" && "call" in t2 && "apply" in t2;
}
function p3({ skipUndefined: t2 = false }, ...r) {
  return r == null ? void 0 : r.reduce((e, a3 = {}) => {
    for (let o in a3) {
      let f2 = a3[o];
      if (!(t2 && f2 === void 0)) if (o === "style") e.style = u(u({}, e.style), a3.style);
      else if (o === "class" || o === "className") e[o] = i2(e[o], a3[o]);
      else if (l2(f2)) {
        let s5 = e[o];
        e[o] = s5 ? (...n) => {
          s5(...n), f2(...n);
        } : f2;
      } else e[o] = f2;
    }
    return e;
  }, {});
}
function w(...t2) {
  return p3({ skipUndefined: false }, ...t2);
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s2(n = "pui_id_") {
  return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static \u0275fac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterOperator = class {
  static AND = "and";
  static OR = "or";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = p(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) == X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) != X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i4 = 0; i4 < filter.length; i4++) {
        if (k(value, filter[i4])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static \u0275fac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FilterService,
    factory: _FilterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageService,
    factory: _MessageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  parentDragSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  parentDragObservable = this.parentDragSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  emitParentDrag(container) {
    this.parentDragSource.next(container);
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayService,
    factory: _OverlayService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static \u0275fac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer],
    imports: [CommonModule, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var TranslationKeys = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static NO_FILTER = "noFilter";
  static LT = "lt";
  static LTE = "lte";
  static GT = "gt";
  static GTE = "gte";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static CLEAR = "clear";
  static APPLY = "apply";
  static MATCH_ALL = "matchAll";
  static MATCH_ANY = "matchAny";
  static ADD_RULE = "addRule";
  static REMOVE_RULE = "removeRule";
  static ACCEPT = "accept";
  static REJECT = "reject";
  static CHOOSE = "choose";
  static UPLOAD = "upload";
  static CANCEL = "cancel";
  static PENDING = "pending";
  static FILE_SIZE_TYPES = "fileSizeTypes";
  static DAY_NAMES = "dayNames";
  static DAY_NAMES_SHORT = "dayNamesShort";
  static DAY_NAMES_MIN = "dayNamesMin";
  static MONTH_NAMES = "monthNames";
  static MONTH_NAMES_SHORT = "monthNamesShort";
  static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
  static TODAY = "today";
  static WEEK_HEADER = "weekHeader";
  static WEAK = "weak";
  static MEDIUM = "medium";
  static STRONG = "strong";
  static PASSWORD_PROMPT = "passwordPrompt";
  static EMPTY_MESSAGE = "emptyMessage";
  static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
  static SHOW_FILTER_MENU = "showFilterMenu";
  static HIDE_FILTER_MENU = "hideFilterMenu";
  static SELECTION_MESSAGE = "selectionMessage";
  static ARIA = "aria";
  static SELECT_COLOR = "selectColor";
  static BROWSE_FILES = "browseFiles";
};
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static \u0275fac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/togglebutton/index.mjs
var style = "\n    .p-togglebutton {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        color: dt('togglebutton.color');\n        background: dt('togglebutton.background');\n        border: 1px solid dt('togglebutton.border.color');\n        padding: dt('togglebutton.padding');\n        font-size: 1rem;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n        border-radius: dt('togglebutton.border.radius');\n        outline-color: transparent;\n        font-weight: dt('togglebutton.font.weight');\n    }\n\n    .p-togglebutton-content {\n        display: inline-flex;\n        flex: 1 1 auto;\n        align-items: center;\n        justify-content: center;\n        gap: dt('togglebutton.gap');\n        padding: dt('togglebutton.content.padding');\n        background: transparent;\n        border-radius: dt('togglebutton.content.border.radius');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n        background: dt('togglebutton.hover.background');\n        color: dt('togglebutton.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked {\n        background: dt('togglebutton.checked.background');\n        border-color: dt('togglebutton.checked.border.color');\n        color: dt('togglebutton.checked.color');\n    }\n\n    .p-togglebutton-checked .p-togglebutton-content {\n        background: dt('togglebutton.content.checked.background');\n        box-shadow: dt('togglebutton.content.checked.shadow');\n    }\n\n    .p-togglebutton:focus-visible {\n        box-shadow: dt('togglebutton.focus.ring.shadow');\n        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');\n        outline-offset: dt('togglebutton.focus.ring.offset');\n    }\n\n    .p-togglebutton.p-invalid {\n        border-color: dt('togglebutton.invalid.border.color');\n    }\n\n    .p-togglebutton:disabled {\n        opacity: 1;\n        cursor: default;\n        background: dt('togglebutton.disabled.background');\n        border-color: dt('togglebutton.disabled.border.color');\n        color: dt('togglebutton.disabled.color');\n    }\n\n    .p-togglebutton-label,\n    .p-togglebutton-icon {\n        position: relative;\n        transition: none;\n    }\n\n    .p-togglebutton-icon {\n        color: dt('togglebutton.icon.color');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n        color: dt('togglebutton.icon.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n        color: dt('togglebutton.icon.checked.color');\n    }\n\n    .p-togglebutton:disabled .p-togglebutton-icon {\n        color: dt('togglebutton.icon.disabled.color');\n    }\n\n    .p-togglebutton-sm {\n        padding: dt('togglebutton.sm.padding');\n        font-size: dt('togglebutton.sm.font.size');\n    }\n\n    .p-togglebutton-sm .p-togglebutton-content {\n        padding: dt('togglebutton.content.sm.padding');\n    }\n\n    .p-togglebutton-lg {\n        padding: dt('togglebutton.lg.padding');\n        font-size: dt('togglebutton.lg.font.size');\n    }\n\n    .p-togglebutton-lg .p-togglebutton-content {\n        padding: dt('togglebutton.content.lg.padding');\n    }\n\n    .p-togglebutton-fluid {\n        width: 100%;\n    }\n";

// node_modules/@primeuix/utils/dist/object/index.mjs
var ie = Object.defineProperty;
var K = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty;
var ae = Object.prototype.propertyIsEnumerable;
var N = (e, t2, n) => t2 in e ? ie(e, t2, { enumerable: true, configurable: true, writable: true, value: n }) : e[t2] = n;
var d2 = (e, t2) => {
  for (var n in t2 || (t2 = {})) se.call(t2, n) && N(e, n, t2[n]);
  if (K) for (var n of K(t2)) ae.call(t2, n) && N(e, n, t2[n]);
  return e;
};
function l3(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function c3(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function s3(e) {
  return !l3(e);
}
function i3(e, t2 = true) {
  return e instanceof Object && e.constructor === Object && (t2 || Object.keys(e).length !== 0);
}
function $2(e = {}, t2 = {}) {
  let n = d2({}, e);
  return Object.keys(t2).forEach((o) => {
    let r = o;
    i3(t2[r]) && r in e && i3(e[r]) ? n[r] = $2(e[r], t2[r]) : n[r] = t2[r];
  }), n;
}
function w2(...e) {
  return e.reduce((t2, n, o) => o === 0 ? n : $2(t2, n), {});
}
function m3(e, ...t2) {
  return c3(e) ? e(...t2) : e;
}
function a2(e, t2 = true) {
  return typeof e == "string" && (t2 || e !== "");
}
function z(e) {
  return s3(e) && !isNaN(e);
}
function G(e, t2) {
  if (t2) {
    let n = t2.test(e);
    return t2.lastIndex = 0, n;
  }
  return false;
}
function H2(...e) {
  return w2(...e);
}
function Y3(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function re(e) {
  return a2(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function oe(e) {
  return e === "auto" ? 0 : typeof e == "number" ? e : Number(e.replace(/[^\d.]/g, "").replace(",", ".")) * 1e3;
}

// node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s4() {
  let r = /* @__PURE__ */ new Map();
  return { on(e, t2) {
    let n = r.get(e);
    return n ? n.push(t2) : n = [t2], r.set(e, n), this;
  }, off(e, t2) {
    let n = r.get(e);
    return n && n.splice(n.indexOf(t2) >>> 0, 1), this;
  }, emit(e, t2) {
    let n = r.get(e);
    n && n.forEach((i4) => {
      i4(t2);
    });
  }, clear() {
    r.clear();
  } };
}

// node_modules/@primeuix/utils/dist/dom/index.mjs
function R2(t2, e) {
  return t2 ? t2.classList ? t2.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t2.className) : false;
}
function W(t2, e) {
  if (t2 && e) {
    let o = (n) => {
      R2(t2, n) || (t2.classList ? t2.classList.add(n) : t2.className += " " + n);
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function P2(t2, e) {
  if (t2 && e) {
    let o = (n) => {
      t2.classList ? t2.classList.remove(n) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function w3(t2) {
  let e = { width: 0, height: 0 };
  if (t2) {
    let [o, n] = [t2.style.visibility, t2.style.display], r = t2.getBoundingClientRect();
    t2.style.visibility = "hidden", t2.style.display = "block", e.width = r.width || t2.offsetWidth, e.height = r.height || t2.offsetHeight, t2.style.display = n, t2.style.visibility = o;
  }
  return e;
}
function qt() {
  return typeof window == "undefined" || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function te2(t2, e, o = null, n) {
  var r;
  e && ((r = t2 == null ? void 0 : t2.style) == null || r.setProperty(e, o, n));
}

// node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F3 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e, t2, r) => t2 in e ? rt(e, t2, { enumerable: true, configurable: true, writable: true, value: r }) : e[t2] = r;
var h3 = (e, t2) => {
  for (var r in t2 || (t2 = {})) xe.call(t2, r) && _e(e, r, t2[r]);
  if (F3) for (var r of F3(t2)) be.call(t2, r) && _e(e, r, t2[r]);
  return e;
};
var $3 = (e, t2) => st(e, nt(t2));
var v2 = (e, t2) => {
  var r = {};
  for (var s5 in e) xe.call(e, s5) && t2.indexOf(s5) < 0 && (r[s5] = e[s5]);
  if (e != null && F3) for (var s5 of F3(e)) t2.indexOf(s5) < 0 && be.call(e, s5) && (r[s5] = e[s5]);
  return r;
};
var at = s4();
var N2 = at;
var k3 = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie2 = /var\([^)]+\)/g;
function oe2(e) {
  return a2(e) ? e.replace(/[A-Z]/g, (t2, r) => r === 0 ? t2 : "." + t2.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
  return i3(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function dt2(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q2(e = "", t2 = "") {
  return dt2(`${a2(e, false) && a2(t2, false) ? `${e}-` : e}${t2}`);
}
function ae2(e = "", t2 = "") {
  return `--${Q2(e, t2)}`;
}
function ht(e = "") {
  let t2 = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (t2 + r) % 2 !== 0;
}
function Y4(e, t2 = "", r = "", s5 = [], i4) {
  if (a2(e)) {
    let a3 = e.trim();
    if (ht(a3)) return;
    if (G(a3, k3)) {
      let n = a3.replaceAll(k3, (l4) => {
        let c4 = l4.replace(/{|}/g, "").split(".").filter((m4) => !s5.some((d3) => G(m4, d3)));
        return `var(${ae2(r, re(c4.join("-")))}${s3(i4) ? `, ${i4}` : ""})`;
      });
      return G(n.replace(ie2, "0"), ne) ? `calc(${n})` : n;
    }
    return a3;
  } else if (z(e)) return e;
}
function Re(e, t2, r) {
  a2(t2, false) && e.push(`${t2}:${r};`);
}
function C3(e, t2) {
  return e ? `${e}{${t2}}` : "";
}
function le(e, t2) {
  if (e.indexOf("dt(") === -1) return e;
  function r(n, l4) {
    let o = [], c4 = 0, m4 = "", d3 = null, u2 = 0;
    for (; c4 <= n.length; ) {
      let g2 = n[c4];
      if ((g2 === '"' || g2 === "'" || g2 === "`") && n[c4 - 1] !== "\\" && (d3 = d3 === g2 ? null : g2), !d3 && (g2 === "(" && u2++, g2 === ")" && u2--, (g2 === "," || c4 === n.length) && u2 === 0)) {
        let f2 = m4.trim();
        f2.startsWith("dt(") ? o.push(le(f2, l4)) : o.push(s5(f2)), m4 = "", c4++;
        continue;
      }
      g2 !== void 0 && (m4 += g2), c4++;
    }
    return o;
  }
  function s5(n) {
    let l4 = n[0];
    if ((l4 === '"' || l4 === "'" || l4 === "`") && n[n.length - 1] === l4) return n.slice(1, -1);
    let o = Number(n);
    return isNaN(o) ? n : o;
  }
  let i4 = [], a3 = [];
  for (let n = 0; n < e.length; n++) if (e[n] === "d" && e.slice(n, n + 3) === "dt(") a3.push(n), n += 2;
  else if (e[n] === ")" && a3.length > 0) {
    let l4 = a3.pop();
    a3.length === 0 && i4.push([l4, n]);
  }
  if (!i4.length) return e;
  for (let n = i4.length - 1; n >= 0; n--) {
    let [l4, o] = i4[n], c4 = e.slice(l4 + 3, o), m4 = r(c4, t2), d3 = t2(...m4);
    e = e.slice(0, l4) + d3 + e.slice(o + 1);
  }
  return e;
}
var rr = (e) => {
  var a3;
  let t2 = S2.getTheme(), r = ue(t2, e, void 0, "variable"), s5 = (a3 = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : a3[0], i4 = ue(t2, e, void 0, "value");
  return { name: s5, variable: r, value: i4 };
};
var E3 = (...e) => ue(S2.getTheme(), ...e);
var ue = (e = {}, t2, r, s5) => {
  if (t2) {
    let { variable: i4, options: a3 } = S2.defaults || {}, { prefix: n, transform: l4 } = (e == null ? void 0 : e.options) || a3 || {}, o = G(t2, k3) ? t2 : `{${t2}}`;
    return s5 === "value" || l3(s5) && l4 === "strict" ? S2.getTokenValue(t2) : Y4(o, void 0, n, [i4.excludedKeyRegex], r);
  }
  return "";
};
function ar(e, ...t2) {
  if (e instanceof Array) {
    let r = e.reduce((s5, i4, a3) => {
      var n;
      return s5 + i4 + ((n = m3(t2[a3], { dt: E3 })) != null ? n : "");
    }, "");
    return le(r, E3);
  }
  return m3(e, { dt: E3 });
}
var w4 = (e = {}) => {
  let { preset: t2, options: r } = e;
  return { preset(s5) {
    return t2 = t2 ? H2(t2, s5) : s5, this;
  }, options(s5) {
    return r = r ? h3(h3({}, r), s5) : s5, this;
  }, primaryPalette(s5) {
    let { semantic: i4 } = t2 || {};
    return t2 = $3(h3({}, t2), { semantic: $3(h3({}, i4), { primary: s5 }) }), this;
  }, surfacePalette(s5) {
    var o, c4;
    let { semantic: i4 } = t2 || {}, a3 = s5 && Object.hasOwn(s5, "light") ? s5.light : s5, n = s5 && Object.hasOwn(s5, "dark") ? s5.dark : s5, l4 = { colorScheme: { light: h3(h3({}, (o = i4 == null ? void 0 : i4.colorScheme) == null ? void 0 : o.light), !!a3 && { surface: a3 }), dark: h3(h3({}, (c4 = i4 == null ? void 0 : i4.colorScheme) == null ? void 0 : c4.dark), !!n && { surface: n }) } };
    return t2 = $3(h3({}, t2), { semantic: h3(h3({}, i4), l4) }), this;
  }, define({ useDefaultPreset: s5 = false, useDefaultOptions: i4 = false } = {}) {
    return { preset: s5 ? S2.getPreset() : t2, options: i4 ? S2.getOptions() : r };
  }, update({ mergePresets: s5 = true, mergeOptions: i4 = true } = {}) {
    let a3 = { preset: s5 ? H2(S2.getPreset(), t2) : t2, options: i4 ? h3(h3({}, S2.getOptions()), r) : r };
    return S2.setTheme(a3), a3;
  }, use(s5) {
    let i4 = this.define(s5);
    return S2.setTheme(i4), i4;
  } };
};
function de(e, t2 = {}) {
  let r = S2.defaults.variable, { prefix: s5 = r.prefix, selector: i4 = r.selector, excludedKeyRegex: a3 = r.excludedKeyRegex } = t2, n = [], l4 = [], o = [{ node: e, path: s5 }];
  for (; o.length; ) {
    let { node: m4, path: d3 } = o.pop();
    for (let u2 in m4) {
      let g2 = m4[u2], f2 = ve(g2), p4 = G(u2, a3) ? Q2(d3) : Q2(d3, re(u2));
      if (i3(f2)) o.push({ node: f2, path: p4 });
      else {
        let y4 = ae2(p4), R3 = Y4(f2, p4, s5, [a3]);
        Re(l4, y4, R3);
        let T2 = p4;
        s5 && T2.startsWith(s5 + "-") && (T2 = T2.slice(s5.length + 1)), n.push(T2.replace(/-/g, "."));
      }
    }
  }
  let c4 = l4.join("");
  return { value: l4, tokens: n, declarations: c4, css: C3(i4, c4) };
}
var b3 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: true };
} } }, resolve(e) {
  let t2 = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [e].flat().map((r) => {
    var s5;
    return (s5 = t2.map((i4) => i4.resolve(r)).find((i4) => i4.matched)) != null ? s5 : this.rules.custom.resolve(r);
  });
} }, _toVariables(e, t2) {
  return de(e, { prefix: t2 == null ? void 0 : t2.prefix });
}, getCommon({ name: e = "", theme: t2 = {}, params: r, set: s5, defaults: i4 }) {
  var R3, T2, j2, O2, M2, z2, V3;
  let { preset: a3, options: n } = t2, l4, o, c4, m4, d3, u2, g2;
  if (s3(a3) && n.transform !== "strict") {
    let { primitive: L2, semantic: te3, extend: re2 } = a3, f2 = te3 || {}, { colorScheme: K2 } = f2, A = v2(f2, ["colorScheme"]), x3 = re2 || {}, { colorScheme: X2 } = x3, G2 = v2(x3, ["colorScheme"]), p4 = K2 || {}, { dark: U2 } = p4, B = v2(p4, ["dark"]), y4 = X2 || {}, { dark: I2 } = y4, H3 = v2(y4, ["dark"]), W2 = s3(L2) ? this._toVariables({ primitive: L2 }, n) : {}, q3 = s3(A) ? this._toVariables({ semantic: A }, n) : {}, Z2 = s3(B) ? this._toVariables({ light: B }, n) : {}, pe = s3(U2) ? this._toVariables({ dark: U2 }, n) : {}, fe = s3(G2) ? this._toVariables({ semantic: G2 }, n) : {}, ye = s3(H3) ? this._toVariables({ light: H3 }, n) : {}, Se = s3(I2) ? this._toVariables({ dark: I2 }, n) : {}, [Me, ze] = [(R3 = W2.declarations) != null ? R3 : "", W2.tokens], [Ke, Xe] = [(T2 = q3.declarations) != null ? T2 : "", q3.tokens || []], [Ge, Ue] = [(j2 = Z2.declarations) != null ? j2 : "", Z2.tokens || []], [Be, Ie] = [(O2 = pe.declarations) != null ? O2 : "", pe.tokens || []], [He, We] = [(M2 = fe.declarations) != null ? M2 : "", fe.tokens || []], [qe, Ze] = [(z2 = ye.declarations) != null ? z2 : "", ye.tokens || []], [Fe, Je] = [(V3 = Se.declarations) != null ? V3 : "", Se.tokens || []];
    l4 = this.transformCSS(e, Me, "light", "variable", n, s5, i4), o = ze;
    let Qe = this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n, s5, i4), Ye = this.transformCSS(e, `${Be}`, "dark", "variable", n, s5, i4);
    c4 = `${Qe}${Ye}`, m4 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n, s5, i4), tt = this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n, s5, i4);
    d3 = `${et}${tt}`, u2 = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], g2 = m3(a3.css, { dt: E3 });
  }
  return { primitive: { css: l4, tokens: o }, semantic: { css: c4, tokens: m4 }, global: { css: d3, tokens: u2 }, style: g2 };
}, getPreset({ name: e = "", preset: t2 = {}, options: r, params: s5, set: i4, defaults: a3, selector: n }) {
  var f2, x3, p4;
  let l4, o, c4;
  if (s3(t2) && r.transform !== "strict") {
    let y4 = e.replace("-directive", ""), m4 = t2, { colorScheme: R3, extend: T2, css: j2 } = m4, O2 = v2(m4, ["colorScheme", "extend", "css"]), d3 = T2 || {}, { colorScheme: M2 } = d3, z2 = v2(d3, ["colorScheme"]), u2 = R3 || {}, { dark: V3 } = u2, L2 = v2(u2, ["dark"]), g2 = M2 || {}, { dark: te3 } = g2, re2 = v2(g2, ["dark"]), K2 = s3(O2) ? this._toVariables({ [y4]: h3(h3({}, O2), z2) }, r) : {}, A = s3(L2) ? this._toVariables({ [y4]: h3(h3({}, L2), re2) }, r) : {}, X2 = s3(V3) ? this._toVariables({ [y4]: h3(h3({}, V3), te3) }, r) : {}, [G2, U2] = [(f2 = K2.declarations) != null ? f2 : "", K2.tokens || []], [B, I2] = [(x3 = A.declarations) != null ? x3 : "", A.tokens || []], [H3, W2] = [(p4 = X2.declarations) != null ? p4 : "", X2.tokens || []], q3 = this.transformCSS(y4, `${G2}${B}`, "light", "variable", r, i4, a3, n), Z2 = this.transformCSS(y4, H3, "dark", "variable", r, i4, a3, n);
    l4 = `${q3}${Z2}`, o = [.../* @__PURE__ */ new Set([...U2, ...I2, ...W2])], c4 = m3(j2, { dt: E3 });
  }
  return { css: l4, tokens: o, style: c4 };
}, getPresetC({ name: e = "", theme: t2 = {}, params: r, set: s5, defaults: i4 }) {
  var o;
  let { preset: a3, options: n } = t2, l4 = (o = a3 == null ? void 0 : a3.components) == null ? void 0 : o[e];
  return this.getPreset({ name: e, preset: l4, options: n, params: r, set: s5, defaults: i4 });
}, getPresetD({ name: e = "", theme: t2 = {}, params: r, set: s5, defaults: i4 }) {
  var c4, m4;
  let a3 = e.replace("-directive", ""), { preset: n, options: l4 } = t2, o = ((c4 = n == null ? void 0 : n.components) == null ? void 0 : c4[a3]) || ((m4 = n == null ? void 0 : n.directives) == null ? void 0 : m4[a3]);
  return this.getPreset({ name: a3, preset: o, options: l4, params: r, set: s5, defaults: i4 });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === false);
}, getColorSchemeOption(e, t2) {
  var r;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === true ? t2.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t2.options.darkModeSelector) : [];
}, getLayerOrder(e, t2 = {}, r, s5) {
  let { cssLayer: i4 } = t2;
  return i4 ? `@layer ${m3(i4.order || i4.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t2 = {}, params: r, props: s5 = {}, set: i4, defaults: a3 }) {
  let n = this.getCommon({ name: e, theme: t2, params: r, set: i4, defaults: a3 }), l4 = Object.entries(s5).reduce((o, [c4, m4]) => o.push(`${c4}="${m4}"`) && o, []).join(" ");
  return Object.entries(n || {}).reduce((o, [c4, m4]) => {
    if (i3(m4) && Object.hasOwn(m4, "css")) {
      let d3 = Y3(m4.css), u2 = `${c4}-variables`;
      o.push(`<style type="text/css" data-primevue-style-id="${u2}" ${l4}>${d3}</style>`);
    }
    return o;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t2 = {}, params: r, props: s5 = {}, set: i4, defaults: a3 }) {
  var c4;
  let n = { name: e, theme: t2, params: r, set: i4, defaults: a3 }, l4 = (c4 = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : c4.css, o = Object.entries(s5).reduce((m4, [d3, u2]) => m4.push(`${d3}="${u2}"`) && m4, []).join(" ");
  return l4 ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${Y3(l4)}</style>` : "";
}, createTokens(e = {}, t2, r = "", s5 = "", i4 = {}) {
  let a3 = function(l4, o = {}, c4 = []) {
    if (c4.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l4, path: this.path, paths: o, value: void 0 };
    c4.push(this.path), o.name = this.path, o.binding || (o.binding = {});
    let m4 = this.value;
    if (typeof this.value == "string" && k3.test(this.value)) {
      let u2 = this.value.trim().replace(k3, (g2) => {
        var y4;
        let f2 = g2.slice(1, -1), x3 = this.tokens[f2];
        if (!x3) return console.warn(`Token not found for path: ${f2}`), "__UNRESOLVED__";
        let p4 = x3.computed(l4, o, c4);
        return Array.isArray(p4) && p4.length === 2 ? `light-dark(${p4[0].value},${p4[1].value})` : (y4 = p4 == null ? void 0 : p4.value) != null ? y4 : "__UNRESOLVED__";
      });
      m4 = ne.test(u2.replace(ie2, "0")) ? `calc(${u2})` : u2;
    }
    return l3(o.binding) && delete o.binding, c4.pop(), { colorScheme: l4, path: this.path, paths: o, value: m4.includes("__UNRESOLVED__") ? void 0 : m4 };
  }, n = (l4, o, c4) => {
    Object.entries(l4).forEach(([m4, d3]) => {
      let u2 = G(m4, t2.variable.excludedKeyRegex) ? o : o ? `${o}.${oe2(m4)}` : oe2(m4), g2 = c4 ? `${c4}.${m4}` : m4;
      i3(d3) ? n(d3, u2, g2) : (i4[u2] || (i4[u2] = { paths: [], computed: (f2, x3 = {}, p4 = []) => {
        if (i4[u2].paths.length === 1) return i4[u2].paths[0].computed(i4[u2].paths[0].scheme, x3.binding, p4);
        if (f2 && f2 !== "none") for (let y4 = 0; y4 < i4[u2].paths.length; y4++) {
          let R3 = i4[u2].paths[y4];
          if (R3.scheme === f2) return R3.computed(f2, x3.binding, p4);
        }
        return i4[u2].paths.map((y4) => y4.computed(y4.scheme, x3[y4.scheme], p4));
      } }), i4[u2].paths.push({ path: g2, value: d3, scheme: g2.includes("colorScheme.light") ? "light" : g2.includes("colorScheme.dark") ? "dark" : "none", computed: a3, tokens: i4 }));
    });
  };
  return n(e, r, s5), i4;
}, getTokenValue(e, t2, r) {
  var l4;
  let i4 = ((o) => o.split(".").filter((m4) => !G(m4.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t2), a3 = t2.includes("colorScheme.light") ? "light" : t2.includes("colorScheme.dark") ? "dark" : void 0, n = [(l4 = e[i4]) == null ? void 0 : l4.computed(a3)].flat().filter((o) => o);
  return n.length === 1 ? n[0].value : n.reduce((o = {}, c4) => {
    let u2 = c4, { colorScheme: m4 } = u2, d3 = v2(u2, ["colorScheme"]);
    return o[m4] = d3, o;
  }, void 0);
}, getSelectorRule(e, t2, r, s5) {
  return r === "class" || r === "attr" ? C3(s3(t2) ? `${e}${t2},${e} ${t2}` : e, s5) : C3(e, C3(t2 != null ? t2 : ":root,:host", s5));
}, transformCSS(e, t2, r, s5, i4 = {}, a3, n, l4) {
  if (s3(t2)) {
    let { cssLayer: o } = i4;
    if (s5 !== "style") {
      let c4 = this.getColorSchemeOption(i4, n);
      t2 = r === "dark" ? c4.reduce((m4, { type: d3, selector: u2 }) => (s3(u2) && (m4 += u2.includes("[CSS]") ? u2.replace("[CSS]", t2) : this.getSelectorRule(u2, l4, d3, t2)), m4), "") : C3(l4 != null ? l4 : ":root,:host", t2);
    }
    if (o) {
      let c4 = { name: "primeui", order: "primeui" };
      i3(o) && (c4.name = m3(o.name, { name: e, type: s5 })), s3(c4.name) && (t2 = C3(`@layer ${c4.name}`, t2), a3 == null || a3.layerNames(c4.name));
    }
    return t2;
  }
  return "";
} };
var S2 = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t2 } = e;
  t2 && (this._theme = $3(h3({}, t2), { options: h3(h3({}, this.defaults.options), t2.options) }), this._tokens = b3.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), N2.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = $3(h3({}, this.theme), { preset: e }), this._tokens = b3.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N2.emit("preset:change", e), N2.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = $3(h3({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N2.emit("options:change", e), N2.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return b3.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t2) {
  return b3.getCommon({ name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t2) {
  let r = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b3.getPresetC(r);
}, getDirective(e = "", t2) {
  let r = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b3.getPresetD(r);
}, getCustomPreset(e = "", t2, r, s5) {
  let i4 = { name: e, preset: t2, options: this.options, selector: r, params: s5, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b3.getPreset(i4);
}, getLayerOrderCSS(e = "") {
  return b3.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t2, r = "style", s5) {
  return b3.transformCSS(e, t2, s5, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t2, r = {}) {
  return b3.getCommonStyleSheet({ name: e, theme: this.theme, params: t2, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t2, r = {}) {
  return b3.getStyleSheet({ name: e, theme: this.theme, params: t2, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t2 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t2), N2.emit(`theme:${t2}:load`, e), !this._loadingStyles.size && N2.emit("theme:load"));
} };
function Ve(...e) {
  let t2 = w2(S2.getPreset(), ...e);
  return S2.setPreset(t2), t2;
}
function Ae(e) {
  return w4().surfacePalette(e).update().preset;
}

// node_modules/@primeuix/styles/dist/base/index.mjs
var style2 = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css2, options = {}) {
    let isLoaded = false;
    let cssRef = css2;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css2;
        const HEAD = this.document.head;
        te(styleRef, "nonce", nonce);
        first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
        O(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) {
        styleRef.textContent = cssRef;
      }
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style8, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(ar`${m(style8, {
      dt: E3
    })}`);
    return computedStyle ? this.useStyle.use(Y(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadStyle = (options = {}, style8 = "") => {
    return this.load(this.style, options, (computedStyle = "") => S2.transformCSS(options.name || this.name, `${computedStyle}${ar`${style8}`}`));
  };
  loadBaseCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadBaseStyle = (options = {}, style$1 = "") => {
    return this.load(style2, options, (computedStyle = "") => S2.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S2.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S2.getComponent(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S2.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S2.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = m(this.css, {
        dt: E3
      });
      const _style = Y(ar`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k4, v3]) => acc.push(`${k4}="${v3}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S2.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css2 = [S2.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = ar`${m(this.style, {
        dt: E3
      })}`;
      const _style = Y(S2.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k4, v3]) => acc.push(`${k4}="${v3}"`) && acc, []).join(" ");
      css2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css2.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0, ...ngDevMode ? [{
    debugName: "theme"
  }] : (
    /* istanbul ignore next */
    []
  ));
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      N2.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S2.clearLoadedStyleNames();
    N2.clear();
  }
  onThemeChange(value) {
    S2.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S2.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style8
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style8);
      S2.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{
    debugName: "ripple"
  }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  /**
   * @deprecated Since v20. Use `inputVariant` instead.
   */
  inputStyle = signal(null, ...ngDevMode ? [{
    debugName: "inputStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  inputVariant = signal(null, ...ngDevMode ? [{
    debugName: "inputVariant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayAppendTo = signal("self", ...ngDevMode ? [{
    debugName: "overlayAppendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  pt = signal(void 0, ...ngDevMode ? [{
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = signal(void 0, ...ngDevMode ? [{
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo,
      zIndex,
      ptOptions,
      pt,
      unstyled
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    return;
  });
  return makeEnvironmentProviders([...providers, initializer]);
}

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseComponentStyle)))(__ngFactoryType__ || _BaseComponentStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseComponentStyle,
    factory: _BaseComponentStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class _BaseComponent {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  $parentInstance = inject(PARENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  scopedStyleEl;
  parent = this.$params.parent;
  cn = f;
  _themeScopedListener;
  themeChangeListenerMap = /* @__PURE__ */ new Map();
  /******************** Inputs ********************/
  /**
   * Defines scoped design tokens of the component.
   * @defaultValue undefined
   * @group Props
   */
  dt = input(...ngDevMode ? [void 0, {
    debugName: "dt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  unstyled = input(...ngDevMode ? [void 0, {
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Used to pass attributes to DOM elements inside the component.
   * @defaultValue undefined
   * @group Props
   */
  pt = input(...ngDevMode ? [void 0, {
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Used to configure passthrough(pt) options of the component.
   * @group Props
   * @defaultValue undefined
   */
  ptOptions = input(...ngDevMode ? [void 0, {
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /******************** Computed ********************/
  $attrSelector = s2("pc");
  get $name() {
    return this["componentName"] || "UnknownComponent";
  }
  get $hostName() {
    return this["hostName"];
  }
  get $el() {
    return this.el?.nativeElement;
  }
  directivePT = signal(void 0, ...ngDevMode ? [{
    debugName: "directivePT"
  }] : (
    /* istanbul ignore next */
    []
  ));
  directiveUnstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "directiveUnstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $unstyled = computed(() => {
    return this.unstyled() ?? this.directiveUnstyled() ?? this.config?.unstyled() ?? false;
  }, ...ngDevMode ? [{
    debugName: "$unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $pt = computed(() => {
    return m(this.pt() || this.directivePT(), this.$params);
  }, ...ngDevMode ? [{
    debugName: "$pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get $globalPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => m(value, this.$params));
  }
  get $defaultPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || m(value, this.$params));
  }
  get $style() {
    return __spreadValues(__spreadValues({
      theme: void 0,
      css: void 0,
      classes: void 0,
      inlineStyles: void 0
    }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
  }
  get $styleOptions() {
    return {
      nonce: this.config?.csp().nonce
    };
  }
  get $params() {
    const parentInstance = this._getHostInstance(this) || this.$parentInstance;
    return {
      instance: this,
      parent: {
        instance: parentInstance
      }
    };
  }
  /******************** Lifecycle Hooks ********************/
  onInit() {
  }
  onChanges(changes) {
  }
  onDoCheck() {
  }
  onAfterContentInit() {
  }
  onAfterContentChecked() {
  }
  onAfterViewInit() {
  }
  onAfterViewChecked() {
  }
  onDestroy() {
  }
  /******************** Angular Lifecycle Hooks ********************/
  constructor() {
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (this.dt()) {
          this._loadScopedThemeStyles(this.dt());
          this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
          this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
        } else {
          this._unloadScopedThemeStyles();
        }
      }
      onCleanup(() => {
        this._offThemeChangeListener("_themeScopedListener");
      });
    });
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (!this.$unstyled()) {
          this._loadCoreStyles();
          this._themeChangeListener("_loadCoreStyles", this._loadCoreStyles);
        }
      }
      onCleanup(() => {
        this._offThemeChangeListener("_loadCoreStyles");
      });
    });
    this._hook("onBeforeInit");
  }
  /**
   * ⚠ Do not override ngOnInit!
   *
   * Use 'onInit()' in subclasses instead.
   */
  ngOnInit() {
    this._loadCoreStyles();
    this._loadStyles();
    this.onInit();
    this._hook("onInit");
  }
  /**
   * ⚠ Do not override ngOnChanges!
   *
   * Use 'onChanges(changes: SimpleChanges)' in subclasses instead.
   */
  ngOnChanges(changes) {
    this.onChanges(changes);
    this._hook("onChanges", changes);
  }
  /**
   * ⚠ Do not override ngDoCheck!
   *
   * Use 'onDoCheck()' in subclasses instead.
   */
  ngDoCheck() {
    this.onDoCheck();
    this._hook("onDoCheck");
  }
  /**
   * ⚠ Do not override ngAfterContentInit!
   *
   * Use 'onAfterContentInit()' in subclasses instead.
   */
  ngAfterContentInit() {
    this.onAfterContentInit();
    this._hook("onAfterContentInit");
  }
  /**
   * ⚠ Do not override ngAfterContentChecked!
   *
   * Use 'onAfterContentChecked()' in subclasses instead.
   */
  ngAfterContentChecked() {
    this.onAfterContentChecked();
    this._hook("onAfterContentChecked");
  }
  /**
   * ⚠ Do not override ngAfterViewInit!
   *
   * Use 'onAfterViewInit()' in subclasses instead.
   */
  ngAfterViewInit() {
    this.$el?.setAttribute(this.$attrSelector, "");
    this.onAfterViewInit();
    this._hook("onAfterViewInit");
  }
  /**
   * ⚠ Do not override ngAfterViewChecked!
   *
   * Use 'onAfterViewChecked()' in subclasses instead.
   */
  ngAfterViewChecked() {
    this.onAfterViewChecked();
    this._hook("onAfterViewChecked");
  }
  /**
   * ⚠ Do not override ngOnDestroy!
   *
   * Use 'onDestroy()' in subclasses instead.
   */
  ngOnDestroy() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this.onDestroy();
    this._hook("onDestroy");
  }
  /******************** Methods ********************/
  _mergeProps(fn, ...args) {
    return c(fn) ? fn(...args) : w(...args);
  }
  _getHostInstance(instance) {
    return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
  }
  _getPropValue(name) {
    return this[name] || this._getHostInstance(this)?.[name];
  }
  _getOptionValue(options, key = "", params = {}) {
    return R(options, key, params);
  }
  _hook(hookName, ...args) {
    if (!this.$hostName) {
      const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
      const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
      selfHook?.(...args);
      defaultHook?.(...args);
    }
  }
  /********** Load Styles **********/
  _load() {
    if (!base.isStyleNameLoaded("base")) {
      this.baseStyle.loadBaseCSS(this.$styleOptions);
      this._loadGlobalStyles();
      base.setLoadedStyleName("base");
    }
    this._loadThemeStyles();
  }
  _loadStyles() {
    this._load();
    this._themeChangeListener("_load", () => this._load());
  }
  _loadGlobalStyles() {
    const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
    s(globalCSS) && this.baseStyle.load(globalCSS, __spreadValues({
      name: "global"
    }, this.$styleOptions));
  }
  _loadCoreStyles() {
    if (!base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      this.baseComponentStyle.loadCSS(this.$styleOptions);
      this.$style.loadCSS(this.$styleOptions);
      base.setLoadedStyleName(this.$style.name);
    }
  }
  _loadThemeStyles() {
    if (this.$unstyled() || this.config?.theme() === "none") return;
    if (!S2.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style8
      } = this.$style?.getCommonTheme?.() || {};
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, this.$styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, this.$styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, this.$styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, this.$styleOptions), style8);
      S2.setLoadedStyleName("common");
    }
    if (!S2.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      const {
        css: css2,
        style: style8
      } = this.$style?.getComponentTheme?.() || {};
      this.$style?.load(css2, __spreadValues({
        name: `${this.$style?.name}-variables`
      }, this.$styleOptions));
      this.$style?.loadStyle(__spreadValues({
        name: `${this.$style?.name}-style`
      }, this.$styleOptions), style8);
      S2.setLoadedStyleName(this.$style?.name);
    }
    if (!S2.isStyleNameLoaded("layer-order")) {
      const layerOrder = this.$style?.getLayerOrderThemeCSS?.();
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.$styleOptions));
      S2.setLoadedStyleName("layer-order");
    }
  }
  _loadScopedThemeStyles(preset) {
    const {
      css: css2
    } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
    const scopedStyle = this.$style?.load(css2, __spreadValues({
      name: `${this.$attrSelector}-${this.$style?.name}`
    }, this.$styleOptions));
    this.scopedStyleEl = scopedStyle?.el;
  }
  _unloadScopedThemeStyles() {
    this.scopedStyleEl?.remove();
  }
  _themeChangeListener(id, callback = () => {
  }) {
    this._offThemeChangeListener(id);
    base.clearLoadedStyleNames();
    const hold = callback.bind(this);
    this.themeChangeListenerMap.set(id, hold);
    N2.on("theme:change", hold);
  }
  _removeThemeListeners() {
    this._offThemeChangeListener("_themeScopedListener");
    this._offThemeChangeListener("_loadCoreStyles");
    this._offThemeChangeListener("_load");
  }
  _offThemeChangeListener(id) {
    if (this.themeChangeListenerMap.has(id)) {
      N2.off("theme:change", this.themeChangeListenerMap.get(id));
      this.themeChangeListenerMap.delete(id);
    }
  }
  /********** Passthrough **********/
  _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
    const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
    const {
      mergeSections = true,
      mergeProps: useMergeProps = false
    } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
    const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
    const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, __spreadProps(__spreadValues({}, params), {
      global: global || {}
    }));
    const datasets = this._getPTDatasets(key);
    return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : __spreadValues(__spreadValues(__spreadValues({}, global), self), datasets) : __spreadValues(__spreadValues({}, self), datasets);
  }
  _getPTDatasets(key = "") {
    const datasetPrefix = "data-pc-";
    const isExtended = key === "root" && s(this.$pt()?.["data-pc-section"]);
    return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
      [`${datasetPrefix}name`]: g(isExtended ? this.$pt()?.["data-pc-section"] : this.$name)
    }, isExtended && {
      [`${datasetPrefix}extend`]: g(this.$name)
    }), {
      [`${this.$attrSelector}`]: ""
      // @todo - use `data-pc-id: this.$attrSelector` instead.
    })), {
      [`${datasetPrefix}section`]: g(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
    });
  }
  _getPTClassValue(options, key, params) {
    const value = this._getOptionValue(options, key, params);
    return a(value) || h(value) ? {
      class: value
    } : value;
  }
  _getPT(pt, key = "", callback) {
    const getValue = (value, checkSameKey = false) => {
      const computedValue = callback ? callback(value) : value;
      const _key = g(key);
      const _cKey = g(this.$hostName || this.$name);
      return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
    };
    return pt?.hasOwnProperty("_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt, true);
  }
  _usePT(pt, callback, key, params) {
    const fn = (value) => callback?.call(this, value, key, params);
    if (pt?.hasOwnProperty("_usept")) {
      const {
        mergeSections = true,
        mergeProps: useMergeProps = false
      } = pt["_usept"] || this.config?.["ptOptions"]() || {};
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (a(value)) return value;
      else if (a(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : __spreadValues(__spreadValues({}, originalValue), value) : value;
    }
    return fn(pt);
  }
  _useGlobalPT(callback, key, params) {
    return this._usePT(this.$globalPT, callback, key, params);
  }
  _useDefaultPT(callback, key, params) {
    return this._usePT(this.$defaultPT, callback, key, params);
  }
  /******************** Exposed API ********************/
  ptm(key = "", params = {}) {
    return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
  }
  ptms(keys, params = {}) {
    return keys.reduce((acc, arg) => {
      acc = w(acc, this.ptm(arg, params)) || {};
      return acc;
    }, {});
  }
  ptmo(obj = {}, key = "", params = {}) {
    return this._getPTValue(obj, key, __spreadValues({
      instance: this
    }, params), false);
  }
  cx(key, params = {}) {
    return !this.$unstyled() ? f(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
  }
  sx(key = "", when = true, params = {}) {
    if (when) {
      const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      const base2 = this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      return __spreadValues(__spreadValues({}, base2), self);
    }
    return void 0;
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseComponent,
    inputs: {
      dt: [1, "dt"],
      unstyled: [1, "unstyled"],
      pt: [1, "pt"],
      ptOptions: [1, "ptOptions"]
    },
    features: [\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], () => [], {
    dt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dt",
        required: false
      }]
    }],
    unstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unstyled",
        required: false
      }]
    }],
    pt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pt",
        required: false
      }]
    }],
    ptOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptOptions",
        required: false
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseModelHolder,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "required"
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
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    required: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "required",
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
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-bind.mjs
var Bind = class _Bind {
  el;
  renderer;
  /**
   * Dynamic attributes, properties, and event listeners to be applied to the host element.
   * @group Props
   */
  pBind = input(void 0, ...ngDevMode ? [{
    debugName: "pBind"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _attrs = signal(void 0, ...ngDevMode ? [{
    debugName: "_attrs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{
    debugName: "attrs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{
    debugName: "styles"
  }] : (
    /* istanbul ignore next */
    []
  ));
  classes = computed(() => f(this.attrs()?.class), ...ngDevMode ? [{
    debugName: "classes"
  }] : (
    /* istanbul ignore next */
    []
  ));
  listeners = [];
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    effect(() => {
      const _a = this.attrs() || {}, {
        style: style8,
        class: className
      } = _a, rest = __objRest(_a, [
        "style",
        "class"
      ]);
      for (const [key, value] of Object.entries(rest)) {
        if (key.startsWith("on") && typeof value === "function") {
          const eventName = key.slice(2).toLowerCase();
          if (!this.listeners.some((l4) => l4.eventName === eventName)) {
            const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
            this.listeners.push({
              eventName,
              unlisten
            });
          }
        } else if (value === null || value === void 0) {
          this.renderer.removeAttribute(this.el.nativeElement, key);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
          if (key in this.el.nativeElement) {
            this.el.nativeElement[key] = value;
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.clearListeners();
  }
  setAttrs(attrs) {
    if (!k(this._attrs(), attrs)) {
      this._attrs.set(attrs);
    }
  }
  clearListeners() {
    this.listeners.forEach(({
      unlisten
    }) => unlisten());
    this.listeners = [];
  }
  static \u0275fac = function Bind_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Bind)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Bind,
    selectors: [["", "pBind", ""]],
    hostVars: 4,
    hostBindings: function Bind_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.styles());
        \u0275\u0275classMap(ctx.classes());
      }
    },
    inputs: {
      pBind: [1, "pBind"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bind, [{
    type: Directive,
    args: [{
      selector: "[pBind]",
      standalone: true,
      host: {
        "[style]": "styles()",
        "[class]": "classes()"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    pBind: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBind",
        required: false
      }]
    }]
  });
})();
var BindModule = class _BindModule {
  static \u0275fac = function BindModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BindModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BindModule,
    imports: [Bind],
    exports: [Bind]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindModule, [{
    type: NgModule,
    args: [{
      imports: [Bind],
      exports: [Bind]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style3 = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var style4 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`
);
var classes = {
  root: "p-ink"
};
var RippleStyle = class _RippleStyle extends BaseStyle {
  name = "ripple";
  style = style4;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RippleStyle_BaseFactory;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (\u0275RippleStyle_BaseFactory || (\u0275RippleStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RippleStyle)))(__ngFactoryType__ || _RippleStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RippleStyle,
    factory: _RippleStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{
    type: Injectable
  }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class _Ripple extends BaseComponent {
  componentName = "Ripple";
  zone = inject(NgZone);
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.zone.runOutsideAngular(() => {
            this.create();
            this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
          });
        } else {
          this.remove();
        }
      }
    });
  }
  onAfterViewInit() {
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    !this.$unstyled() && M(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "false");
    if (!Tt(ink) && !Nt(ink)) {
      let d3 = Math.max(C(this.el.nativeElement), L(this.el.nativeElement));
      ink.style.height = d3 + "px";
      ink.style.width = d3 + "px";
    }
    let offset = _(this.el.nativeElement);
    let x3 = event.pageX - offset.left + this.document.body.scrollTop - Nt(ink) / 2;
    let y4 = event.pageY - offset.top + this.document.body.scrollLeft - Tt(ink) / 2;
    this.renderer.setStyle(ink, "top", y4 + "px");
    this.renderer.setStyle(ink, "left", x3 + "px");
    !this.$unstyled() && P(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "true");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        !this.$unstyled() && M(ink2, "p-ink-active");
        ink2.setAttribute("data-p-ink-active", "false");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i4 = 0; i4 < children.length; i4++) {
      if (typeof children[i4].className === "string" && children[i4].className.indexOf("p-ink") !== -1) {
        return children[i4];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      !this.$unstyled() && M(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    !this.$unstyled() && M(event.currentTarget, "p-ink-active");
    event.currentTarget.setAttribute("data-p-ink-active", "false");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "data-p-ink", "true");
    this.renderer.setAttribute(ink, "data-p-ink-active", "false");
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      Gt(ink);
    }
  }
  onDestroy() {
    if (this.config && this.config.ripple()) {
      this.remove();
    }
  }
  static \u0275fac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ripple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [\u0275\u0275ProvidersFeature([RippleStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple"
      },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class _RippleModule {
  static \u0275fac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RippleModule,
    imports: [Ripple],
    exports: [Ripple]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c02 = ["icon"];
var _c1 = ["content"];
var _c2 = (a0) => ({
  $implicit: a0
});
function ToggleButton_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon, ctx_r0.iconPos === "left" ? ctx_r0.cx("iconLeft") : ctx_r0.cx("iconRight")));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
  }
}
function ToggleButton_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template, 1, 3, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_2_Conditional_1_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(2, "span", 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.iconTemplate ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "\xA0" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "\xA0");
  }
}
var style5 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-togglebutton p-component", {
    "p-togglebutton-checked": instance.checked,
    "p-invalid": instance.invalid(),
    "p-disabled": instance.$disabled(),
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large",
    "p-togglebutton-fluid": instance.fluid()
  }],
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  iconLeft: "p-togglebutton-icon-left",
  iconRight: "p-togglebutton-icon-right",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  style = style5;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleButtonStyle_BaseFactory || (\u0275ToggleButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["iconLeft"] = "p-togglebutton-icon-left";
  ToggleButtonClasses2["iconRight"] = "p-togglebutton-icon-right";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var TOGGLEBUTTON_INSTANCE = new InjectionToken("TOGGLEBUTTON_INSTANCE");
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseEditableHolder {
  componentName = "ToggleButton";
  $pcToggleButton = inject(TOGGLEBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  toggle(event) {
    if (!this.$disabled() && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.writeModelValue(this.checked);
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
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
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @param {ToggleButtonIconTemplateContext} context - icon context.
   * @see {@link ToggleButtonIconTemplateContext}
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @param {ToggleButtonContentTemplateContext} context - content context.
   * @see {@link ToggleButtonContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onInit() {
    if (this.checked === null || this.checked === void 0) {
      this.checked = false;
    }
  }
  _componentStyle = inject(ToggleButtonStyle);
  onBlur() {
    this.onModelTouched();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.offLabel && this.offLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      checked: this.active,
      invalid: this.invalid(),
      [this.size]: this.size
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (\u0275ToggleButton_BaseFactory || (\u0275ToggleButton_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, _c1, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 11,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ToggleButton_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("click", function ToggleButton_click_HostBindingHandler($event) {
          return ctx.toggle($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-pressed", ctx.checked ? "true" : "false")("role", "button")("tabindex", ctx.tabindex !== void 0 ? ctx.tabindex : !ctx.$disabled() ? 0 : -1)("data-pc-name", "togglebutton")("data-p-checked", ctx.active)("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: "size",
      allowEmpty: "allowEmpty",
      fluid: [1, "fluid"]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
      provide: TOGGLEBUTTON_INSTANCE,
      useExisting: _ToggleButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleButton
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 9,
    consts: [[3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, ToggleButton_ng_container_1_Template, 1, 0, "ng-container", 1);
        \u0275\u0275conditionalCreate(2, ToggleButton_Conditional_2_Template, 4, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c2, ctx.checked));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      hostDirectives: [{
        directive: Ripple
      }, Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-pressed]": 'checked ? "true" : "false"',
        "[attr.role]": '"button"',
        "[attr.tabindex]": "tabindex !== undefined ? tabindex : (!$disabled() ? 0 : -1)",
        "[attr.data-pc-name]": "'togglebutton'",
        "[attr.data-p-checked]": "active",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      template: `<span [class]="cx('content')" [pBind]="ptm('content')" [attr.data-p]="dataP">
        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
        @if (!contentTemplate) {
            @if (!iconTemplate) {
                @if (onIcon || offIcon) {
                    <span [class]="cn(cx('icon'), checked ? this.onIcon : this.offIcon, iconPos === 'left' ? cx('iconLeft') : cx('iconRight'))" [pBind]="ptm('icon')"></span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span [class]="cx('label')" [pBind]="ptm('label')">{{ checked ? (hasOnLabel ? onLabel : '\xA0') : hasOffLabel ? offLabel : '\xA0' }}</span>
        }
    </span>`,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
        provide: TOGGLEBUTTON_INSTANCE,
        useExisting: ToggleButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    toggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    allowEmpty: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule,
    imports: [ToggleButton, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/selectbutton/index.mjs
var style6 = "\n    .p-selectbutton {\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        outline-color: transparent;\n        border-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton {\n        border-radius: 0;\n        border-width: 1px 1px 1px 0;\n    }\n\n    .p-selectbutton .p-togglebutton:focus-visible {\n        position: relative;\n        z-index: 1;\n    }\n\n    .p-selectbutton .p-togglebutton:first-child {\n        border-inline-start-width: 1px;\n        border-start-start-radius: dt('selectbutton.border.radius');\n        border-end-start-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton:last-child {\n        border-start-end-radius: dt('selectbutton.border.radius');\n        border-end-end-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton.p-invalid {\n        outline: 1px solid dt('selectbutton.invalid.border.color');\n        outline-offset: 0;\n    }\n\n    .p-selectbutton-fluid {\n        width: 100%;\n    }\n    \n    .p-selectbutton-fluid .p-togglebutton {\n        flex: 1 1 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var _c03 = ["item"];
var _c12 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function _forTrack0($index, $item) {
  return this.getOptionLabel($item);
}
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const \u0275$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c12, option_r3, \u0275$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-togglebutton", 2);
    \u0275\u0275listener("onChange", function SelectButton_For_1_Template_p_togglebutton_onChange_0_listener($event) {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const \u0275$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onOptionSelect($event, option_r3, \u0275$index_1_r4));
    });
    \u0275\u0275conditionalCreate(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.$disabled() || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.getAllowEmpty())("size", ctx_r4.size())("fluid", ctx_r4.fluid())("pt", ctx_r4.ptm("pcToggleButton"))("unstyled", ctx_r4.unstyled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var style7 = (
  /*css*/
  `
    ${style6}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`
);
var classes3 = {
  root: ({
    instance
  }) => ["p-selectbutton p-component", {
    "p-invalid": instance.invalid(),
    "p-selectbutton-fluid": instance.fluid()
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  style = style7;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275SelectButtonStyle_BaseFactory || (\u0275SelectButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var SELECTBUTTON_INSTANCE = new InjectionToken("SELECTBUTTON_INSTANCE");
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseEditableHolder {
  componentName = "SelectButton";
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Whether selection can be cleared.
   * @group Props
   */
  get unselectable() {
    return this._unselectable;
  }
  _unselectable = false;
  set unselectable(value) {
    this._unselectable = value;
    this.allowEmpty = !value;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
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
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom item template.
   * @param {SelectButtonItemTemplateContext} context - item context.
   * @see {@link SelectButtonItemTemplateContext}
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  $pcSelectButton = inject(SELECTBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getAllowEmpty() {
    if (this.multiple) {
      return this.allowEmpty || this.value?.length !== 1;
    }
    return this.allowEmpty;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? p(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  onOptionSelect(event, option, index) {
    if (this.$disabled() || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !k(val, optionValue, this.equalityKey || void 0));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  changeTabIndexes(event, direction) {
    let firstTabableChild, index;
    for (let i4 = 0; i4 <= this.el.nativeElement.children.length - 1; i4++) {
      if (this.el.nativeElement.children[i4].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i4],
        index: i4
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !k(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (k(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = k(this.getOptionValue(option), this.value, this.equalityKey || void 0);
    }
    return selected;
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (\u0275SelectButton_BaseFactory || (\u0275SelectButton_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 5,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "group")("aria-labelledby", ctx.ariaLabelledBy)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: [1, "size"],
      fluid: [1, "fluid"]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
      provide: SELECTBUTTON_INSTANCE,
      useExisting: _SelectButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _SelectButton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt", "unstyled"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SelectButton_For_1_Template, 2, 12, "p-togglebutton", 1, _forTrack0, true);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule, BindModule],
      template: `
        @for (option of options; track getOptionLabel(option); let i = $index) {
            <p-togglebutton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="$disabled() || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="getAllowEmpty()"
                [size]="size()"
                [fluid]="fluid()"
                [pt]="ptm('pcToggleButton')"
                [unstyled]="unstyled()"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-togglebutton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
        provide: SELECTBUTTON_INSTANCE,
        useExisting: SelectButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: SelectButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.role]": '"group"',
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    unselectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
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
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static \u0275fac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SelectButtonModule,
    imports: [SelectButton, SharedModule],
    exports: [SelectButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

export {
  f,
  l,
  y,
  s,
  p,
  k,
  q,
  V,
  E,
  J,
  k2,
  P,
  lt,
  M,
  dt,
  E2,
  y2,
  $,
  D,
  V2,
  T,
  C,
  j,
  p2,
  U,
  ut,
  q2,
  yt,
  Y2 as Y,
  Z,
  bt,
  Q,
  x,
  vt,
  Tt,
  Ct,
  Lt,
  L,
  Ot,
  Nt,
  It,
  ot,
  Yt,
  Qt,
  Jt,
  _t,
  te,
  s2,
  ConfirmEventType,
  ConfirmationService,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  MessageService,
  OverlayService,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  oe,
  W,
  P2,
  w3 as w,
  qt,
  te2,
  rr,
  w4 as w2,
  Ve,
  Ae,
  BaseStyle,
  PrimeNG,
  providePrimeNG,
  PARENT_INSTANCE,
  BaseComponent,
  BaseModelHolder,
  BaseEditableHolder,
  Bind,
  BindModule,
  Ripple,
  RippleModule,
  ToggleButton,
  ToggleButtonModule,
  SelectButton,
  SelectButtonModule
};
//# sourceMappingURL=chunk-ZBRJC7FJ.js.map
