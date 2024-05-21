import * as he from "react";
import U, { useState as Je, useRef as Te, useSyncExternalStore as um, useLayoutEffect as Wa, useEffect as He, isValidElement as Mn, cloneElement as no, useCallback as Tt, createContext as xt, useContext as ft, useMemo as Ke, forwardRef as Yc, Fragment as Cr, createElement as H0, useReducer as lm, createRef as pd, useId as io } from "react";
import * as Y0 from "react-dom";
import { flushSync as ao, createPortal as Q0 } from "react-dom";
function Z0(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(t, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function md(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? md(Object(r), !0).forEach(function(n) {
      yt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : md(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function so(t) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, so(t);
}
function G0(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function J0(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function K0(t, e, r) {
  return e && J0(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function yt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Qc(t, e) {
  return eb(t) || rb(t, e) || cm(t, e) || ib();
}
function qa(t) {
  return X0(t) || tb(t) || cm(t) || nb();
}
function X0(t) {
  if (Array.isArray(t))
    return Dl(t);
}
function eb(t) {
  if (Array.isArray(t))
    return t;
}
function tb(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function rb(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, a = !1, s, o;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      a = !0, o = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (a)
          throw o;
      }
    }
    return n;
  }
}
function cm(t, e) {
  if (t) {
    if (typeof t == "string")
      return Dl(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Dl(t, e);
  }
}
function Dl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function nb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ib() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vd = function() {
}, Zc = {}, fm = {}, dm = null, hm = {
  mark: vd,
  measure: vd
};
try {
  typeof window < "u" && (Zc = window), typeof document < "u" && (fm = document), typeof MutationObserver < "u" && (dm = MutationObserver), typeof performance < "u" && (hm = performance);
} catch {
}
var ab = Zc.navigator || {}, yd = ab.userAgent, gd = yd === void 0 ? "" : yd, on = Zc, Ge = fm, bd = dm, hs = hm;
on.document;
var jr = !!Ge.documentElement && !!Ge.head && typeof Ge.addEventListener == "function" && typeof Ge.createElement == "function", pm = ~gd.indexOf("MSIE") || ~gd.indexOf("Trident/"), ps, ms, vs, ys, gs, Nr = "___FONT_AWESOME___", Rl = 16, mm = "fa", vm = "svg-inline--fa", jn = "data-fa-i2svg", Pl = "data-fa-pseudo-element", sb = "data-fa-pseudo-element-pending", Gc = "data-prefix", Jc = "data-icon", wd = "fontawesome-i2svg", ob = "async", ub = ["HTML", "HEAD", "STYLE", "SCRIPT"], ym = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), Ze = "classic", tt = "sharp", Kc = [Ze, tt];
function Ua(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[Ze];
    }
  });
}
var wa = Ua((ps = {}, yt(ps, Ze, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), yt(ps, tt, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), ps)), Ea = Ua((ms = {}, yt(ms, Ze, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), yt(ms, tt, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), ms)), xa = Ua((vs = {}, yt(vs, Ze, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), yt(vs, tt, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), vs)), lb = Ua((ys = {}, yt(ys, Ze, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), yt(ys, tt, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), ys)), cb = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, gm = "fa-layers-text", fb = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, db = Ua((gs = {}, yt(gs, Ze, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), yt(gs, tt, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), gs)), bm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], hb = bm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), pb = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], On = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ka = /* @__PURE__ */ new Set();
Object.keys(Ea[Ze]).map(ka.add.bind(ka));
Object.keys(Ea[tt]).map(ka.add.bind(ka));
var mb = [].concat(Kc, qa(ka), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", On.GROUP, On.SWAP_OPACITY, On.PRIMARY, On.SECONDARY]).concat(bm.map(function(t) {
  return "".concat(t, "x");
})).concat(hb.map(function(t) {
  return "w-".concat(t);
})), ua = on.FontAwesomeConfig || {};
function vb(t) {
  var e = Ge.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function yb(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (Ge && typeof Ge.querySelector == "function") {
  var gb = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  gb.forEach(function(t) {
    var e = Qc(t, 2), r = e[0], n = e[1], i = yb(vb(r));
    i != null && (ua[n] = i);
  });
}
var wm = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: mm,
  replacementClass: vm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ua.familyPrefix && (ua.cssPrefix = ua.familyPrefix);
var xi = ie(ie({}, wm), ua);
xi.autoReplaceSvg || (xi.observeMutations = !1);
var ce = {};
Object.keys(wm).forEach(function(t) {
  Object.defineProperty(ce, t, {
    enumerable: !0,
    set: function(r) {
      xi[t] = r, la.forEach(function(n) {
        return n(ce);
      });
    },
    get: function() {
      return xi[t];
    }
  });
});
Object.defineProperty(ce, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    xi.cssPrefix = e, la.forEach(function(r) {
      return r(ce);
    });
  },
  get: function() {
    return xi.cssPrefix;
  }
});
on.FontAwesomeConfig = ce;
var la = [];
function bb(t) {
  return la.push(t), function() {
    la.splice(la.indexOf(t), 1);
  };
}
var qr = Rl, hr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function wb(t) {
  if (!(!t || !jr)) {
    var e = Ge.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = Ge.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], s = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = a);
    }
    return Ge.head.insertBefore(e, n), t;
  }
}
var Eb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ta() {
  for (var t = 12, e = ""; t-- > 0; )
    e += Eb[Math.random() * 62 | 0];
  return e;
}
function Fi(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function Xc(t) {
  return t.classList ? Fi(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function Em(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function xb(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(Em(t[r]), '" ');
  }, "").trim();
}
function Ho(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function ef(t) {
  return t.size !== hr.size || t.x !== hr.x || t.y !== hr.y || t.rotate !== hr.rotate || t.flipX || t.flipY;
}
function kb(t) {
  var e = t.transform, r = t.containerWidth, n = t.iconWidth, i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), s = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), o = "rotate(".concat(e.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(s, " ").concat(o)
  }, l = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: l
  };
}
function Tb(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? Rl : r, i = t.height, a = i === void 0 ? Rl : i, s = t.startCentered, o = s === void 0 ? !1 : s, u = "";
  return o && pm ? u += "translate(".concat(e.x / qr - n / 2, "em, ").concat(e.y / qr - a / 2, "em) ") : o ? u += "translate(calc(-50% + ".concat(e.x / qr, "em), calc(-50% + ").concat(e.y / qr, "em)) ") : u += "translate(".concat(e.x / qr, "em, ").concat(e.y / qr, "em) "), u += "scale(".concat(e.size / qr * (e.flipX ? -1 : 1), ", ").concat(e.size / qr * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var _b = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function xm() {
  var t = mm, e = vm, r = ce.cssPrefix, n = ce.replacementClass, i = _b;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), s = new RegExp("\\--".concat(t, "\\-"), "g"), o = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(o, ".".concat(n));
  }
  return i;
}
var Ed = !1;
function Pu() {
  ce.autoAddCss && !Ed && (wb(xm()), Ed = !0);
}
var Sb = {
  mixout: function() {
    return {
      dom: {
        css: xm,
        insertCss: Pu
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Pu();
      },
      beforeI2svg: function() {
        Pu();
      }
    };
  }
}, Dr = on || {};
Dr[Nr] || (Dr[Nr] = {});
Dr[Nr].styles || (Dr[Nr].styles = {});
Dr[Nr].hooks || (Dr[Nr].hooks = {});
Dr[Nr].shims || (Dr[Nr].shims = []);
var ir = Dr[Nr], km = [], Ob = function t() {
  Ge.removeEventListener("DOMContentLoaded", t), oo = 1, km.map(function(e) {
    return e();
  });
}, oo = !1;
jr && (oo = (Ge.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ge.readyState), oo || Ge.addEventListener("DOMContentLoaded", Ob));
function Cb(t) {
  jr && (oo ? setTimeout(t, 0) : km.push(t));
}
function Ba(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? Em(t) : "<".concat(e, " ").concat(xb(n), ">").concat(a.map(Ba).join(""), "</").concat(e, ">");
}
function xd(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var Mu = function(e, r, n, i) {
  var a = Object.keys(e), s = a.length, o = r, u, l, c;
  for (n === void 0 ? (u = 1, c = e[a[0]]) : (u = 0, c = n); u < s; u++)
    l = a[u], c = o(c, e[l], l, e);
  return c;
};
function Ib(t) {
  for (var e = [], r = 0, n = t.length; r < n; ) {
    var i = t.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      var a = t.charCodeAt(r++);
      (a & 64512) == 56320 ? e.push(((i & 1023) << 10) + (a & 1023) + 65536) : (e.push(i), r--);
    } else
      e.push(i);
  }
  return e;
}
function Ml(t) {
  var e = Ib(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Ab(t, e) {
  var r = t.length, n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function kd(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], i = !!n.icon;
    return i ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function Fl(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, i = n === void 0 ? !1 : n, a = kd(e);
  typeof ir.hooks.addPack == "function" && !i ? ir.hooks.addPack(t, kd(e)) : ir.styles[t] = ie(ie({}, ir.styles[t] || {}), a), t === "fas" && Fl("fa", e);
}
var bs, ws, Es, ai = ir.styles, Nb = ir.shims, Db = (bs = {}, yt(bs, Ze, Object.values(xa[Ze])), yt(bs, tt, Object.values(xa[tt])), bs), tf = null, Tm = {}, _m = {}, Sm = {}, Om = {}, Cm = {}, Rb = (ws = {}, yt(ws, Ze, Object.keys(wa[Ze])), yt(ws, tt, Object.keys(wa[tt])), ws);
function Pb(t) {
  return ~mb.indexOf(t);
}
function Mb(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !Pb(i) ? i : null;
}
var Im = function() {
  var e = function(a) {
    return Mu(ai, function(s, o, u) {
      return s[u] = Mu(o, a, {}), s;
    }, {});
  };
  Tm = e(function(i, a, s) {
    if (a[3] && (i[a[3]] = s), a[2]) {
      var o = a[2].filter(function(u) {
        return typeof u == "number";
      });
      o.forEach(function(u) {
        i[u.toString(16)] = s;
      });
    }
    return i;
  }), _m = e(function(i, a, s) {
    if (i[s] = s, a[2]) {
      var o = a[2].filter(function(u) {
        return typeof u == "string";
      });
      o.forEach(function(u) {
        i[u] = s;
      });
    }
    return i;
  }), Cm = e(function(i, a, s) {
    var o = a[2];
    return i[s] = s, o.forEach(function(u) {
      i[u] = s;
    }), i;
  });
  var r = "far" in ai || ce.autoFetchSvg, n = Mu(Nb, function(i, a) {
    var s = a[0], o = a[1], u = a[2];
    return o === "far" && !r && (o = "fas"), typeof s == "string" && (i.names[s] = {
      prefix: o,
      iconName: u
    }), typeof s == "number" && (i.unicodes[s.toString(16)] = {
      prefix: o,
      iconName: u
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  Sm = n.names, Om = n.unicodes, tf = Yo(ce.styleDefault, {
    family: ce.familyDefault
  });
};
bb(function(t) {
  tf = Yo(t.styleDefault, {
    family: ce.familyDefault
  });
});
Im();
function rf(t, e) {
  return (Tm[t] || {})[e];
}
function Fb(t, e) {
  return (_m[t] || {})[e];
}
function Cn(t, e) {
  return (Cm[t] || {})[e];
}
function Am(t) {
  return Sm[t] || {
    prefix: null,
    iconName: null
  };
}
function Lb(t) {
  var e = Om[t], r = rf("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function un() {
  return tf;
}
var nf = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Yo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? Ze : r, i = wa[n][t], a = Ea[n][t] || Ea[n][i], s = t in ir.styles ? t : null;
  return a || s || null;
}
var Td = (Es = {}, yt(Es, Ze, Object.keys(xa[Ze])), yt(Es, tt, Object.keys(xa[tt])), Es);
function Qo(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, yt(e, Ze, "".concat(ce.cssPrefix, "-").concat(Ze)), yt(e, tt, "".concat(ce.cssPrefix, "-").concat(tt)), e), s = null, o = Ze;
  (t.includes(a[Ze]) || t.some(function(l) {
    return Td[Ze].includes(l);
  })) && (o = Ze), (t.includes(a[tt]) || t.some(function(l) {
    return Td[tt].includes(l);
  })) && (o = tt);
  var u = t.reduce(function(l, c) {
    var f = Mb(ce.cssPrefix, c);
    if (ai[c] ? (c = Db[o].includes(c) ? lb[o][c] : c, s = c, l.prefix = c) : Rb[o].indexOf(c) > -1 ? (s = c, l.prefix = Yo(c, {
      family: o
    })) : f ? l.iconName = f : c !== ce.replacementClass && c !== a[Ze] && c !== a[tt] && l.rest.push(c), !i && l.prefix && l.iconName) {
      var h = s === "fa" ? Am(l.iconName) : {}, d = Cn(l.prefix, l.iconName);
      h.prefix && (s = null), l.iconName = h.iconName || d || l.iconName, l.prefix = h.prefix || l.prefix, l.prefix === "far" && !ai.far && ai.fas && !ce.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, nf());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && o === tt && (ai.fass || ce.autoFetchSvg) && (u.prefix = "fass", u.iconName = Cn(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || s === "fa") && (u.prefix = un() || "fas"), u;
}
var $b = /* @__PURE__ */ function() {
  function t() {
    G0(this, t), this.definitions = {};
  }
  return K0(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var s = i.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(o) {
        r.definitions[o] = ie(ie({}, r.definitions[o] || {}), s[o]), Fl(o, s[o]);
        var u = xa[Ze][o];
        u && Fl(u, s[o]), Im();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, n) {
      var i = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(i).map(function(a) {
        var s = i[a], o = s.prefix, u = s.iconName, l = s.icon, c = l[2];
        r[o] || (r[o] = {}), c.length > 0 && c.forEach(function(f) {
          typeof f == "string" && (r[o][f] = l);
        }), r[o][u] = l;
      }), r;
    }
  }]), t;
}(), _d = [], si = {}, pi = {}, jb = Object.keys(pi);
function Vb(t, e) {
  var r = e.mixoutsTo;
  return _d = t, si = {}, Object.keys(pi).forEach(function(n) {
    jb.indexOf(n) === -1 && delete pi[n];
  }), _d.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(s) {
      typeof i[s] == "function" && (r[s] = i[s]), so(i[s]) === "object" && Object.keys(i[s]).forEach(function(o) {
        r[s] || (r[s] = {}), r[s][o] = i[s][o];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(s) {
        si[s] || (si[s] = []), si[s].push(a[s]);
      });
    }
    n.provides && n.provides(pi);
  }), r;
}
function Ll(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = si[t] || [];
  return a.forEach(function(s) {
    e = s.apply(null, [e].concat(n));
  }), e;
}
function Vn(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = si[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function Rr() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return pi[t] ? pi[t].apply(null, e) : void 0;
}
function $l(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || un();
  if (e)
    return e = Cn(r, e) || e, xd(Nm.definitions, r, e) || xd(ir.styles, r, e);
}
var Nm = new $b(), zb = function() {
  ce.autoReplaceSvg = !1, ce.observeMutations = !1, Vn("noAuto");
}, Wb = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jr ? (Vn("beforeI2svg", e), Rr("pseudoElements2svg", e), Rr("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    ce.autoReplaceSvg === !1 && (ce.autoReplaceSvg = !0), ce.observeMutations = !0, Cb(function() {
      Ub({
        autoReplaceSvgRoot: r
      }), Vn("watch", e);
    });
  }
}, qb = {
  icon: function(e) {
    if (e === null)
      return null;
    if (so(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Cn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Yo(e[0]);
      return {
        prefix: n,
        iconName: Cn(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ce.cssPrefix, "-")) > -1 || e.match(cb))) {
      var i = Qo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || un(),
        iconName: Cn(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = un();
      return {
        prefix: a,
        iconName: Cn(a, e) || e
      };
    }
  }
}, Wt = {
  noAuto: zb,
  config: ce,
  dom: Wb,
  parse: qb,
  library: Nm,
  findIconDefinition: $l,
  toHtml: Ba
}, Ub = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? Ge : r;
  (Object.keys(ir.styles).length > 0 || ce.autoFetchSvg) && jr && ce.autoReplaceSvg && Wt.dom.i2svg({
    node: n
  });
};
function Zo(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return Ba(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (jr) {
        var n = Ge.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Bb(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, s = t.transform;
  if (ef(s) && r.found && !n.found) {
    var o = r.width, u = r.height, l = {
      x: o / u / 2,
      y: 0.5
    };
    i.style = Ho(ie(ie({}, a), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function Hb(t) {
  var e = t.prefix, r = t.iconName, n = t.children, i = t.attributes, a = t.symbol, s = a === !0 ? "".concat(e, "-").concat(ce.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: ie(ie({}, i), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function af(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, s = t.transform, o = t.symbol, u = t.title, l = t.maskId, c = t.titleId, f = t.extra, h = t.watchable, d = h === void 0 ? !1 : h, p = n.found ? n : r, m = p.width, y = p.height, v = i === "fak", b = [ce.replacementClass, a ? "".concat(ce.cssPrefix, "-").concat(a) : ""].filter(function(N) {
    return f.classes.indexOf(N) === -1;
  }).filter(function(N) {
    return N !== "" || !!N;
  }).concat(f.classes).join(" "), g = {
    children: [],
    attributes: ie(ie({}, f.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: b,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(m, " ").concat(y)
    })
  }, x = v && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(m / y * 16 * 0.0625, "em")
  } : {};
  d && (g.attributes[jn] = ""), u && (g.children.push({
    tag: "title",
    attributes: {
      id: g.attributes["aria-labelledby"] || "title-".concat(c || Ta())
    },
    children: [u]
  }), delete g.attributes.title);
  var w = ie(ie({}, g), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: l,
    transform: s,
    symbol: o,
    styles: ie(ie({}, x), f.styles)
  }), S = n.found && r.found ? Rr("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Rr("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  }, A = S.children, O = S.attributes;
  return w.children = A, w.attributes = O, o ? Hb(w) : Bb(w);
}
function Sd(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, s = t.extra, o = t.watchable, u = o === void 0 ? !1 : o, l = ie(ie(ie({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  u && (l[jn] = "");
  var c = ie({}, s.styles);
  ef(i) && (c.transform = Tb({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  var f = Ho(c);
  f.length > 0 && (l.style = f);
  var h = [];
  return h.push({
    tag: "span",
    attributes: l,
    children: [e]
  }), a && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), h;
}
function Yb(t) {
  var e = t.content, r = t.title, n = t.extra, i = ie(ie(ie({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Ho(n.styles);
  a.length > 0 && (i.style = a);
  var s = [];
  return s.push({
    tag: "span",
    attributes: i,
    children: [e]
  }), r && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), s;
}
var Fu = ir.styles;
function jl(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = Qc(n, 1), a = i[0], s = null;
  return Array.isArray(a) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(ce.cssPrefix, "-").concat(On.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ce.cssPrefix, "-").concat(On.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ce.cssPrefix, "-").concat(On.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: e,
    height: r,
    icon: s
  };
}
var Qb = {
  found: !1,
  width: 512,
  height: 512
};
function Zb(t, e) {
  !ym && !ce.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Vl(t, e) {
  var r = e;
  return e === "fa" && ce.styleDefault !== null && (e = un()), new Promise(function(n, i) {
    if (Rr("missingIconAbstract"), r === "fa") {
      var a = Am(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Fu[e] && Fu[e][t]) {
      var s = Fu[e][t];
      return n(jl(s));
    }
    Zb(t, e), n(ie(ie({}, Qb), {}, {
      icon: ce.showMissingIcons && t ? Rr("missingIconAbstract") || {} : {}
    }));
  });
}
var Od = function() {
}, zl = ce.measurePerformance && hs && hs.mark && hs.measure ? hs : {
  mark: Od,
  measure: Od
}, ra = 'FA "6.5.2"', Gb = function(e) {
  return zl.mark("".concat(ra, " ").concat(e, " begins")), function() {
    return Dm(e);
  };
}, Dm = function(e) {
  zl.mark("".concat(ra, " ").concat(e, " ends")), zl.measure("".concat(ra, " ").concat(e), "".concat(ra, " ").concat(e, " begins"), "".concat(ra, " ").concat(e, " ends"));
}, sf = {
  begin: Gb,
  end: Dm
}, Ws = function() {
};
function Cd(t) {
  var e = t.getAttribute ? t.getAttribute(jn) : null;
  return typeof e == "string";
}
function Jb(t) {
  var e = t.getAttribute ? t.getAttribute(Gc) : null, r = t.getAttribute ? t.getAttribute(Jc) : null;
  return e && r;
}
function Kb(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(ce.replacementClass);
}
function Xb() {
  if (ce.autoReplaceSvg === !0)
    return qs.replace;
  var t = qs[ce.autoReplaceSvg];
  return t || qs.replace;
}
function e1(t) {
  return Ge.createElementNS("http://www.w3.org/2000/svg", t);
}
function t1(t) {
  return Ge.createElement(t);
}
function Rm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? e1 : t1 : r;
  if (typeof t == "string")
    return Ge.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(s) {
    i.setAttribute(s, t.attributes[s]);
  });
  var a = t.children || [];
  return a.forEach(function(s) {
    i.appendChild(Rm(s, {
      ceFn: n
    }));
  }), i;
}
function r1(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var qs = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Rm(i), r);
      }), r.getAttribute(jn) === null && ce.keepOriginalSource) {
        var n = Ge.createComment(r1(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~Xc(r).indexOf(ce.replacementClass))
      return qs.replace(e);
    var i = new RegExp("".concat(ce.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var a = n[0].attributes.class.split(" ").reduce(function(o, u) {
        return u === ce.replacementClass || u.match(i) ? o.toSvg.push(u) : o.toNode.push(u), o;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", a.toNode.join(" "));
    }
    var s = n.map(function(o) {
      return Ba(o);
    }).join(`
`);
    r.setAttribute(jn, ""), r.innerHTML = s;
  }
};
function Id(t) {
  t();
}
function Pm(t, e) {
  var r = typeof e == "function" ? e : Ws;
  if (t.length === 0)
    r();
  else {
    var n = Id;
    ce.mutateApproach === ob && (n = on.requestAnimationFrame || Id), n(function() {
      var i = Xb(), a = sf.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var of = !1;
function Mm() {
  of = !0;
}
function Wl() {
  of = !1;
}
var uo = null;
function Ad(t) {
  if (bd && ce.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? Ws : e, n = t.nodeCallback, i = n === void 0 ? Ws : n, a = t.pseudoElementsCallback, s = a === void 0 ? Ws : a, o = t.observeMutationsRoot, u = o === void 0 ? Ge : o;
    uo = new bd(function(l) {
      if (!of) {
        var c = un();
        Fi(l).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !Cd(f.addedNodes[0]) && (ce.searchPseudoElements && s(f.target), r(f.target)), f.type === "attributes" && f.target.parentNode && ce.searchPseudoElements && s(f.target.parentNode), f.type === "attributes" && Cd(f.target) && ~pb.indexOf(f.attributeName))
            if (f.attributeName === "class" && Jb(f.target)) {
              var h = Qo(Xc(f.target)), d = h.prefix, p = h.iconName;
              f.target.setAttribute(Gc, d || c), p && f.target.setAttribute(Jc, p);
            } else
              Kb(f.target) && i(f.target);
        });
      }
    }), jr && uo.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function n1() {
  uo && uo.disconnect();
}
function i1(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), s = a[0], o = a.slice(1);
    return s && o.length > 0 && (n[s] = o.join(":").trim()), n;
  }, {})), r;
}
function a1(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = Qo(Xc(t));
  return i.prefix || (i.prefix = un()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Fb(i.prefix, t.innerText) || rf(i.prefix, Ml(t.innerText))), !i.iconName && ce.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function s1(t) {
  var e = Fi(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return ce.autoA11y && (r ? e["aria-labelledby"] = "".concat(ce.replacementClass, "-title-").concat(n || Ta()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function o1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: hr,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Nd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = a1(t), n = r.iconName, i = r.prefix, a = r.rest, s = s1(t), o = Ll("parseNodeAttributes", {}, t), u = e.styleParser ? i1(t) : [];
  return ie({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: hr,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: u,
      attributes: s
    }
  }, o);
}
var u1 = ir.styles;
function Fm(t) {
  var e = ce.autoReplaceSvg === "nest" ? Nd(t, {
    styleParser: !1
  }) : Nd(t);
  return ~e.extra.classes.indexOf(gm) ? Rr("generateLayersText", t, e) : Rr("generateSvgReplacementMutation", t, e);
}
var ln = /* @__PURE__ */ new Set();
Kc.map(function(t) {
  ln.add("fa-".concat(t));
});
Object.keys(wa[Ze]).map(ln.add.bind(ln));
Object.keys(wa[tt]).map(ln.add.bind(ln));
ln = qa(ln);
function Dd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jr)
    return Promise.resolve();
  var r = Ge.documentElement.classList, n = function(f) {
    return r.add("".concat(wd, "-").concat(f));
  }, i = function(f) {
    return r.remove("".concat(wd, "-").concat(f));
  }, a = ce.autoFetchSvg ? ln : Kc.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(u1));
  a.includes("fa") || a.push("fa");
  var s = [".".concat(gm, ":not([").concat(jn, "])")].concat(a.map(function(c) {
    return ".".concat(c, ":not([").concat(jn, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var o = [];
  try {
    o = Fi(t.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var u = sf.begin("onTree"), l = o.reduce(function(c, f) {
    try {
      var h = Fm(f);
      h && c.push(h);
    } catch (d) {
      ym || d.name === "MissingIcon" && console.error(d);
    }
    return c;
  }, []);
  return new Promise(function(c, f) {
    Promise.all(l).then(function(h) {
      Pm(h, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), c();
      });
    }).catch(function(h) {
      u(), f(h);
    });
  });
}
function l1(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Fm(t).then(function(r) {
    r && Pm([r], e);
  });
}
function c1(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : $l(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : $l(i || {})), t(n, ie(ie({}, r), {}, {
      mask: i
    }));
  };
}
var f1 = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? hr : n, a = r.symbol, s = a === void 0 ? !1 : a, o = r.mask, u = o === void 0 ? null : o, l = r.maskId, c = l === void 0 ? null : l, f = r.title, h = f === void 0 ? null : f, d = r.titleId, p = d === void 0 ? null : d, m = r.classes, y = m === void 0 ? [] : m, v = r.attributes, b = v === void 0 ? {} : v, g = r.styles, x = g === void 0 ? {} : g;
  if (e) {
    var w = e.prefix, S = e.iconName, A = e.icon;
    return Zo(ie({
      type: "icon"
    }, e), function() {
      return Vn("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), ce.autoA11y && (h ? b["aria-labelledby"] = "".concat(ce.replacementClass, "-title-").concat(p || Ta()) : (b["aria-hidden"] = "true", b.focusable = "false")), af({
        icons: {
          main: jl(A),
          mask: u ? jl(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: w,
        iconName: S,
        transform: ie(ie({}, hr), i),
        symbol: s,
        title: h,
        maskId: c,
        titleId: p,
        extra: {
          attributes: b,
          styles: x,
          classes: y
        }
      });
    });
  }
}, d1 = {
  mixout: function() {
    return {
      icon: c1(f1)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Dd, r.nodeCallback = l1, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? Ge : n, a = r.callback, s = a === void 0 ? function() {
      } : a;
      return Dd(i, s);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, s = n.titleId, o = n.prefix, u = n.transform, l = n.symbol, c = n.mask, f = n.maskId, h = n.extra;
      return new Promise(function(d, p) {
        Promise.all([Vl(i, o), c.iconName ? Vl(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(m) {
          var y = Qc(m, 2), v = y[0], b = y[1];
          d([r, af({
            icons: {
              main: v,
              mask: b
            },
            prefix: o,
            iconName: i,
            transform: u,
            symbol: l,
            maskId: f,
            title: a,
            titleId: s,
            extra: h,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(r) {
      var n = r.children, i = r.attributes, a = r.main, s = r.transform, o = r.styles, u = Ho(o);
      u.length > 0 && (i.style = u);
      var l;
      return ef(s) && (l = Rr("generateAbstractTransformGrouping", {
        main: a,
        transform: s,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(l || a.icon), {
        children: n,
        attributes: i
      };
    };
  }
}, h1 = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return Zo({
          type: "layer"
        }, function() {
          Vn("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var s = [];
          return r(function(o) {
            Array.isArray(o) ? o.map(function(u) {
              s = s.concat(u.abstract);
            }) : s = s.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(ce.cssPrefix, "-layers")].concat(qa(a)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, p1 = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, s = n.classes, o = s === void 0 ? [] : s, u = n.attributes, l = u === void 0 ? {} : u, c = n.styles, f = c === void 0 ? {} : c;
        return Zo({
          type: "counter",
          content: r
        }, function() {
          return Vn("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Yb({
            content: r.toString(),
            title: a,
            extra: {
              attributes: l,
              styles: f,
              classes: ["".concat(ce.cssPrefix, "-layers-counter")].concat(qa(o))
            }
          });
        });
      }
    };
  }
}, m1 = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? hr : i, s = n.title, o = s === void 0 ? null : s, u = n.classes, l = u === void 0 ? [] : u, c = n.attributes, f = c === void 0 ? {} : c, h = n.styles, d = h === void 0 ? {} : h;
        return Zo({
          type: "text",
          content: r
        }, function() {
          return Vn("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Sd({
            content: r,
            transform: ie(ie({}, hr), a),
            title: o,
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(ce.cssPrefix, "-layers-text")].concat(qa(l))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, s = n.extra, o = null, u = null;
      if (pm) {
        var l = parseInt(getComputedStyle(r).fontSize, 10), c = r.getBoundingClientRect();
        o = c.width / l, u = c.height / l;
      }
      return ce.autoA11y && !i && (s.attributes["aria-hidden"] = "true"), Promise.resolve([r, Sd({
        content: r.innerHTML,
        width: o,
        height: u,
        transform: a,
        title: i,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, v1 = new RegExp('"', "ug"), Rd = [1105920, 1112319];
function y1(t) {
  var e = t.replace(v1, ""), r = Ab(e, 0), n = r >= Rd[0] && r <= Rd[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Ml(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Pd(t, e) {
  var r = "".concat(sb).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Fi(t.children), s = a.filter(function(A) {
      return A.getAttribute(Pl) === e;
    })[0], o = on.getComputedStyle(t, e), u = o.getPropertyValue("font-family").match(fb), l = o.getPropertyValue("font-weight"), c = o.getPropertyValue("content");
    if (s && !u)
      return t.removeChild(s), n();
    if (u && c !== "none" && c !== "") {
      var f = o.getPropertyValue("content"), h = ~["Sharp"].indexOf(u[2]) ? tt : Ze, d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? Ea[h][u[2].toLowerCase()] : db[h][l], p = y1(f), m = p.value, y = p.isSecondary, v = u[0].startsWith("FontAwesome"), b = rf(d, m), g = b;
      if (v) {
        var x = Lb(m);
        x.iconName && x.prefix && (b = x.iconName, d = x.prefix);
      }
      if (b && !y && (!s || s.getAttribute(Gc) !== d || s.getAttribute(Jc) !== g)) {
        t.setAttribute(r, g), s && t.removeChild(s);
        var w = o1(), S = w.extra;
        S.attributes[Pl] = e, Vl(b, d).then(function(A) {
          var O = af(ie(ie({}, w), {}, {
            icons: {
              main: A,
              mask: nf()
            },
            prefix: d,
            iconName: g,
            extra: S,
            watchable: !0
          })), N = Ge.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(N, t.firstChild) : t.appendChild(N), N.outerHTML = O.map(function(F) {
            return Ba(F);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function g1(t) {
  return Promise.all([Pd(t, "::before"), Pd(t, "::after")]);
}
function b1(t) {
  return t.parentNode !== document.head && !~ub.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(Pl) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Md(t) {
  if (jr)
    return new Promise(function(e, r) {
      var n = Fi(t.querySelectorAll("*")).filter(b1).map(g1), i = sf.begin("searchPseudoElements");
      Mm(), Promise.all(n).then(function() {
        i(), Wl(), e();
      }).catch(function() {
        i(), Wl(), r();
      });
    });
}
var w1 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Md, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? Ge : n;
      ce.searchPseudoElements && Md(i);
    };
  }
}, Fd = !1, E1 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Mm(), Fd = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Ad(Ll("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        n1();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        Fd ? Wl() : Ad(Ll("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Ld = function(e) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(n, i) {
    var a = i.toLowerCase().split("-"), s = a[0], o = a.slice(1).join("-");
    if (s && o === "h")
      return n.flipX = !0, n;
    if (s && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, r);
}, x1 = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Ld(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = Ld(i)), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(r) {
      var n = r.main, i = r.transform, a = r.containerWidth, s = r.iconWidth, o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, u = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), l = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), c = "rotate(".concat(i.rotate, " 0 0)"), f = {
        transform: "".concat(u, " ").concat(l, " ").concat(c)
      }, h = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: f,
        path: h
      };
      return {
        tag: "g",
        attributes: ie({}, d.outer),
        children: [{
          tag: "g",
          attributes: ie({}, d.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: ie(ie({}, n.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
}, Lu = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function $d(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function k1(t) {
  return t.tag === "g" ? t.children : [t];
}
var T1 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? Qo(i.split(" ").map(function(s) {
          return s.trim();
        })) : nf();
        return a.prefix || (a.prefix = un()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, s = r.mask, o = r.maskId, u = r.transform, l = a.width, c = a.icon, f = s.width, h = s.icon, d = kb({
        transform: u,
        containerWidth: f,
        iconWidth: l
      }), p = {
        tag: "rect",
        attributes: ie(ie({}, Lu), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map($d)
      } : {}, y = {
        tag: "g",
        attributes: ie({}, d.inner),
        children: [$d(ie({
          tag: c.tag,
          attributes: ie(ie({}, c.attributes), d.path)
        }, m))]
      }, v = {
        tag: "g",
        attributes: ie({}, d.outer),
        children: [y]
      }, b = "mask-".concat(o || Ta()), g = "clip-".concat(o || Ta()), x = {
        tag: "mask",
        attributes: ie(ie({}, Lu), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, v]
      }, w = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: g
          },
          children: k1(h)
        }, x]
      };
      return n.push(w, {
        tag: "rect",
        attributes: ie({
          fill: "currentColor",
          "clip-path": "url(#".concat(g, ")"),
          mask: "url(#".concat(b, ")")
        }, Lu)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, _1 = {
  provides: function(e) {
    var r = !1;
    on.matchMedia && (r = on.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: ie(ie({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = ie(ie({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: ie(ie({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || o.children.push({
        tag: "animate",
        attributes: ie(ie({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: ie(ie({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: ie(ie({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: ie(ie({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: ie(ie({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: ie(ie({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, S1 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, O1 = [Sb, d1, h1, p1, m1, w1, E1, x1, T1, _1, S1];
Vb(O1, {
  mixoutsTo: Wt
});
Wt.noAuto;
Wt.config;
var C1 = Wt.library;
Wt.dom;
var ql = Wt.parse;
Wt.findIconDefinition;
Wt.toHtml;
var I1 = Wt.icon;
Wt.layer;
Wt.text;
Wt.counter;
var A1 = {
  prefix: "fas",
  iconName: "file-lines",
  icon: [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
}, N1 = {
  prefix: "fas",
  iconName: "circle-minus",
  icon: [512, 512, ["minus-circle"], "f056", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, D1 = {
  prefix: "fas",
  iconName: "face-smile-beam",
  icon: [512, 512, [128522, "smile-beam"], "f5b8", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]
}, R1 = {
  prefix: "fas",
  iconName: "reply",
  icon: [512, 512, [61714, "mail-reply"], "f3e5", "M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]
}, P1 = {
  prefix: "fas",
  iconName: "feather",
  icon: [512, 512, [129718], "f52d", "M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]
}, M1 = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]
}, F1 = {
  prefix: "fas",
  iconName: "wand-magic-sparkles",
  icon: [576, 512, ["magic-wand-sparkles"], "e2ca", "M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]
}, L1 = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
}, $1 = {
  prefix: "fas",
  iconName: "spell-check",
  icon: [576, 512, [], "f891", "M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"]
}, j1 = {
  prefix: "fas",
  iconName: "user-tie",
  icon: [448, 512, [], "f508", "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"]
}, V1 = {
  prefix: "fas",
  iconName: "language",
  icon: [640, 512, [], "f1ab", "M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"]
}, z1 = {
  prefix: "fas",
  iconName: "ellipsis",
  icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
}, W1 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, q1 = {
  prefix: "fas",
  iconName: "rotate",
  icon: [512, 512, [128260, "sync-alt"], "f2f1", "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"]
}, U1 = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, B1 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
};
C1.add(
  // Solid
  W1,
  N1,
  B1,
  z1,
  D1,
  P1,
  A1,
  V1,
  M1,
  R1,
  q1,
  $1,
  U1,
  L1,
  j1,
  F1
);
function Lm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ul = { exports: {} }, Hi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function H1() {
  if (jd)
    return Hi;
  jd = 1;
  var t = U, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, l) {
    var c, f = {}, h = null, d = null;
    l !== void 0 && (h = "" + l), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (d = u.ref);
    for (c in u)
      n.call(u, c) && !a.hasOwnProperty(c) && (f[c] = u[c]);
    if (o && o.defaultProps)
      for (c in u = o.defaultProps, u)
        f[c] === void 0 && (f[c] = u[c]);
    return { $$typeof: e, type: o, key: h, ref: d, props: f, _owner: i.current };
  }
  return Hi.Fragment = r, Hi.jsx = s, Hi.jsxs = s, Hi;
}
var Yi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function Y1() {
  return Vd || (Vd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = U, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = Symbol.iterator, m = "@@iterator";
    function y(E) {
      if (E === null || typeof E != "object")
        return null;
      var L = p && E[p] || E[m];
      return typeof L == "function" ? L : null;
    }
    var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(E) {
      {
        for (var L = arguments.length, J = new Array(L > 1 ? L - 1 : 0), be = 1; be < L; be++)
          J[be - 1] = arguments[be];
        g("error", E, J);
      }
    }
    function g(E, L, J) {
      {
        var be = v.ReactDebugCurrentFrame, Le = be.getStackAddendum();
        Le !== "" && (L += "%s", J = J.concat([Le]));
        var Ue = J.map(function(Ne) {
          return String(Ne);
        });
        Ue.unshift("Warning: " + L), Function.prototype.apply.call(console[E], console, Ue);
      }
    }
    var x = !1, w = !1, S = !1, A = !1, O = !1, N;
    N = Symbol.for("react.module.reference");
    function F(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === n || E === a || O || E === i || E === l || E === c || A || E === d || x || w || S || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === f || E.$$typeof === s || E.$$typeof === o || E.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === N || E.getModuleId !== void 0));
    }
    function Q(E, L, J) {
      var be = E.displayName;
      if (be)
        return be;
      var Le = L.displayName || L.name || "";
      return Le !== "" ? J + "(" + Le + ")" : J;
    }
    function M(E) {
      return E.displayName || "Context";
    }
    function P(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case o:
            var L = E;
            return M(L) + ".Consumer";
          case s:
            var J = E;
            return M(J._context) + ".Provider";
          case u:
            return Q(E, E.render, "ForwardRef");
          case f:
            var be = E.displayName || null;
            return be !== null ? be : P(E.type) || "Memo";
          case h: {
            var Le = E, Ue = Le._payload, Ne = Le._init;
            try {
              return P(Ne(Ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, q = 0, z, $, ve, j, C, R, H;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function X() {
      {
        if (q === 0) {
          z = console.log, $ = console.info, ve = console.warn, j = console.error, C = console.group, R = console.groupCollapsed, H = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        q++;
      }
    }
    function ye() {
      {
        if (q--, q === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, E, {
              value: z
            }),
            info: B({}, E, {
              value: $
            }),
            warn: B({}, E, {
              value: ve
            }),
            error: B({}, E, {
              value: j
            }),
            group: B({}, E, {
              value: C
            }),
            groupCollapsed: B({}, E, {
              value: R
            }),
            groupEnd: B({}, E, {
              value: H
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = v.ReactCurrentDispatcher, le;
    function pe(E, L, J) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (Le) {
            var be = Le.stack.trim().match(/\n( *(at )?)/);
            le = be && be[1] || "";
          }
        return `
` + le + E;
      }
    }
    var Ce = !1, _e;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new dt();
    }
    function G(E, L) {
      if (!E || Ce)
        return "";
      {
        var J = _e.get(E);
        if (J !== void 0)
          return J;
      }
      var be;
      Ce = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ue;
      Ue = ue.current, ue.current = null, X();
      try {
        if (L) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (Pt) {
              be = Pt;
            }
            Reflect.construct(E, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (Pt) {
              be = Pt;
            }
            E.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            be = Pt;
          }
          E();
        }
      } catch (Pt) {
        if (Pt && be && typeof Pt.stack == "string") {
          for (var Ie = Pt.stack.split(`
`), St = be.stack.split(`
`), at = Ie.length - 1, ut = St.length - 1; at >= 1 && ut >= 0 && Ie[at] !== St[ut]; )
            ut--;
          for (; at >= 1 && ut >= 0; at--, ut--)
            if (Ie[at] !== St[ut]) {
              if (at !== 1 || ut !== 1)
                do
                  if (at--, ut--, ut < 0 || Ie[at] !== St[ut]) {
                    var qt = `
` + Ie[at].replace(" at new ", " at ");
                    return E.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", E.displayName)), typeof E == "function" && _e.set(E, qt), qt;
                  }
                while (at >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, ue.current = Ue, ye(), Error.prepareStackTrace = Le;
      }
      var Jn = E ? E.displayName || E.name : "", wn = Jn ? pe(Jn) : "";
      return typeof E == "function" && _e.set(E, wn), wn;
    }
    function _t(E, L, J) {
      return G(E, !1);
    }
    function Er(E) {
      var L = E.prototype;
      return !!(L && L.isReactComponent);
    }
    function zr(E, L, J) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return G(E, Er(E));
      if (typeof E == "string")
        return pe(E);
      switch (E) {
        case l:
          return pe("Suspense");
        case c:
          return pe("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case u:
            return _t(E.render);
          case f:
            return zr(E.type, L, J);
          case h: {
            var be = E, Le = be._payload, Ue = be._init;
            try {
              return zr(Ue(Le), L, J);
            } catch {
            }
          }
        }
      return "";
    }
    var Qn = Object.prototype.hasOwnProperty, Ou = {}, k = v.ReactDebugCurrentFrame;
    function _(E) {
      if (E) {
        var L = E._owner, J = zr(E.type, E._source, L ? L.type : null);
        k.setExtraStackFrame(J);
      } else
        k.setExtraStackFrame(null);
    }
    function I(E, L, J, be, Le) {
      {
        var Ue = Function.call.bind(Qn);
        for (var Ne in E)
          if (Ue(E, Ne)) {
            var Ie = void 0;
            try {
              if (typeof E[Ne] != "function") {
                var St = Error((be || "React class") + ": " + J + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              Ie = E[Ne](L, Ne, be, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              Ie = at;
            }
            Ie && !(Ie instanceof Error) && (_(Le), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", J, Ne, typeof Ie), _(null)), Ie instanceof Error && !(Ie.message in Ou) && (Ou[Ie.message] = !0, _(Le), b("Failed %s type: %s", J, Ie.message), _(null));
          }
      }
    }
    var ee = Array.isArray;
    function Y(E) {
      return ee(E);
    }
    function W(E) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, J = L && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return J;
      }
    }
    function de(E) {
      try {
        return Me(E), !1;
      } catch {
        return !0;
      }
    }
    function Me(E) {
      return "" + E;
    }
    function it(E) {
      if (de(E))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", W(E)), Me(E);
    }
    var ht = v.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cs, Zn, bn;
    bn = {};
    function Cu(E) {
      if (Qn.call(E, "ref")) {
        var L = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function fs(E) {
      if (Qn.call(E, "key")) {
        var L = Object.getOwnPropertyDescriptor(E, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Iu(E, L) {
      if (typeof E.ref == "string" && ht.current && L && ht.current.stateNode !== L) {
        var J = P(ht.current.type);
        bn[J] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(ht.current.type), E.ref), bn[J] = !0);
      }
    }
    function ds(E, L) {
      {
        var J = function() {
          cs || (cs = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        J.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function R0(E, L) {
      {
        var J = function() {
          Zn || (Zn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        J.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var P0 = function(E, L, J, be, Le, Ue, Ne) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: E,
        key: L,
        ref: J,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: Ue
      };
      return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function M0(E, L, J, be, Le) {
      {
        var Ue, Ne = {}, Ie = null, St = null;
        J !== void 0 && (it(J), Ie = "" + J), fs(L) && (it(L.key), Ie = "" + L.key), Cu(L) && (St = L.ref, Iu(L, Le));
        for (Ue in L)
          Qn.call(L, Ue) && !Wr.hasOwnProperty(Ue) && (Ne[Ue] = L[Ue]);
        if (E && E.defaultProps) {
          var at = E.defaultProps;
          for (Ue in at)
            Ne[Ue] === void 0 && (Ne[Ue] = at[Ue]);
        }
        if (Ie || St) {
          var ut = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ie && ds(Ne, ut), St && R0(Ne, ut);
        }
        return P0(E, Ie, St, Le, be, ht.current, Ne);
      }
    }
    var Au = v.ReactCurrentOwner, od = v.ReactDebugCurrentFrame;
    function Gn(E) {
      if (E) {
        var L = E._owner, J = zr(E.type, E._source, L ? L.type : null);
        od.setExtraStackFrame(J);
      } else
        od.setExtraStackFrame(null);
    }
    var Nu;
    Nu = !1;
    function Du(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function ud() {
      {
        if (Au.current) {
          var E = P(Au.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function F0(E) {
      return "";
    }
    var ld = {};
    function L0(E) {
      {
        var L = ud();
        if (!L) {
          var J = typeof E == "string" ? E : E.displayName || E.name;
          J && (L = `

Check the top-level render call using <` + J + ">.");
        }
        return L;
      }
    }
    function cd(E, L) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var J = L0(L);
        if (ld[J])
          return;
        ld[J] = !0;
        var be = "";
        E && E._owner && E._owner !== Au.current && (be = " It was passed a child from " + P(E._owner.type) + "."), Gn(E), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, be), Gn(null);
      }
    }
    function fd(E, L) {
      {
        if (typeof E != "object")
          return;
        if (Y(E))
          for (var J = 0; J < E.length; J++) {
            var be = E[J];
            Du(be) && cd(be, L);
          }
        else if (Du(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Le = y(E);
          if (typeof Le == "function" && Le !== E.entries)
            for (var Ue = Le.call(E), Ne; !(Ne = Ue.next()).done; )
              Du(Ne.value) && cd(Ne.value, L);
        }
      }
    }
    function $0(E) {
      {
        var L = E.type;
        if (L == null || typeof L == "string")
          return;
        var J;
        if (typeof L == "function")
          J = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === f))
          J = L.propTypes;
        else
          return;
        if (J) {
          var be = P(L);
          I(J, E.props, "prop", be, E);
        } else if (L.PropTypes !== void 0 && !Nu) {
          Nu = !0;
          var Le = P(L);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function j0(E) {
      {
        for (var L = Object.keys(E.props), J = 0; J < L.length; J++) {
          var be = L[J];
          if (be !== "children" && be !== "key") {
            Gn(E), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), Gn(null);
            break;
          }
        }
        E.ref !== null && (Gn(E), b("Invalid attribute `ref` supplied to `React.Fragment`."), Gn(null));
      }
    }
    var dd = {};
    function hd(E, L, J, be, Le, Ue) {
      {
        var Ne = F(E);
        if (!Ne) {
          var Ie = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = F0();
          St ? Ie += St : Ie += ud();
          var at;
          E === null ? at = "null" : Y(E) ? at = "array" : E !== void 0 && E.$$typeof === e ? (at = "<" + (P(E.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : at = typeof E, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, Ie);
        }
        var ut = M0(E, L, J, Le, Ue);
        if (ut == null)
          return ut;
        if (Ne) {
          var qt = L.children;
          if (qt !== void 0)
            if (be)
              if (Y(qt)) {
                for (var Jn = 0; Jn < qt.length; Jn++)
                  fd(qt[Jn], E);
                Object.freeze && Object.freeze(qt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fd(qt, E);
        }
        if (Qn.call(L, "key")) {
          var wn = P(E), Pt = Object.keys(L).filter(function(B0) {
            return B0 !== "key";
          }), Ru = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dd[wn + Ru]) {
            var U0 = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ru, wn, U0, wn), dd[wn + Ru] = !0;
          }
        }
        return E === n ? j0(ut) : $0(ut), ut;
      }
    }
    function V0(E, L, J) {
      return hd(E, L, J, !0);
    }
    function z0(E, L, J) {
      return hd(E, L, J, !1);
    }
    var W0 = z0, q0 = V0;
    Yi.Fragment = n, Yi.jsx = W0, Yi.jsxs = q0;
  }()), Yi;
}
process.env.NODE_ENV === "production" ? Ul.exports = H1() : Ul.exports = Y1();
var te = Ul.exports;
function $m(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var i = t.length;
      for (e = 0; e < i; e++)
        t[e] && (r = $m(t[e])) && (n && (n += " "), n += r);
    } else
      for (r in t)
        t[r] && (n && (n += " "), n += r);
  return n;
}
function en() {
  for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
    (t = arguments[r]) && (e = $m(t)) && (n && (n += " "), n += e);
  return n;
}
const _a = (t) => typeof t == "number" && !isNaN(t), Fn = (t) => typeof t == "string", jt = (t) => typeof t == "function", Us = (t) => Fn(t) || jt(t) ? t : null, Bl = (t) => Mn(t) || Fn(t) || jt(t) || _a(t);
function Q1(t, e, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: i } = t;
  requestAnimationFrame(() => {
    i.minHeight = "initial", i.height = n + "px", i.transition = `all ${r}ms`, requestAnimationFrame(() => {
      i.height = "0", i.padding = "0", i.margin = "0", setTimeout(e, r);
    });
  });
}
function Go(t) {
  let { enter: e, exit: r, appendPosition: n = !1, collapse: i = !0, collapseDuration: a = 300 } = t;
  return function(s) {
    let { children: o, position: u, preventExitTransition: l, done: c, nodeRef: f, isIn: h, playToast: d } = s;
    const p = n ? `${e}--${u}` : e, m = n ? `${r}--${u}` : r, y = Te(0);
    return Wa(() => {
      const v = f.current, b = p.split(" "), g = (x) => {
        x.target === f.current && (d(), v.removeEventListener("animationend", g), v.removeEventListener("animationcancel", g), y.current === 0 && x.type !== "animationcancel" && v.classList.remove(...b));
      };
      v.classList.add(...b), v.addEventListener("animationend", g), v.addEventListener("animationcancel", g);
    }, []), He(() => {
      const v = f.current, b = () => {
        v.removeEventListener("animationend", b), i ? Q1(v, c, a) : c();
      };
      h || (l ? b() : (y.current = 1, v.className += ` ${m}`, v.addEventListener("animationend", b)));
    }, [h]), U.createElement(U.Fragment, null, o);
  };
}
function zd(t, e) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: e } : {};
}
const It = /* @__PURE__ */ new Map();
let Sa = [];
const Hl = /* @__PURE__ */ new Set(), Z1 = (t) => Hl.forEach((e) => e(t)), jm = () => It.size > 0;
function Vm(t, e) {
  var r;
  if (e)
    return !((r = It.get(e)) == null || !r.isToastActive(t));
  let n = !1;
  return It.forEach((i) => {
    i.isToastActive(t) && (n = !0);
  }), n;
}
function zm(t, e) {
  Bl(t) && (jm() || Sa.push({ content: t, options: e }), It.forEach((r) => {
    r.buildToast(t, e);
  }));
}
function Wd(t, e) {
  It.forEach((r) => {
    e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === r.id && r.toggle(t, e == null ? void 0 : e.id) : r.toggle(t, e == null ? void 0 : e.id);
  });
}
function G1(t) {
  const { subscribe: e, getSnapshot: r, setProps: n } = Te(function(a) {
    const s = a.containerId || 1;
    return { subscribe(o) {
      const u = /* @__PURE__ */ function(c, f, h) {
        let d = 1, p = 0, m = [], y = [], v = [], b = f;
        const g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set(), w = () => {
          v = Array.from(g.values()), x.forEach((O) => O());
        }, S = (O) => {
          y = O == null ? [] : y.filter((N) => N !== O), w();
        }, A = (O) => {
          const { toastId: N, onOpen: F, updateId: Q, children: M } = O.props, P = Q == null;
          O.staleId && g.delete(O.staleId), g.set(N, O), y = [...y, O.props.toastId].filter((B) => B !== O.staleId), w(), h(zd(O, P ? "added" : "updated")), P && jt(F) && F(Mn(M) && M.props);
        };
        return { id: c, props: b, observe: (O) => (x.add(O), () => x.delete(O)), toggle: (O, N) => {
          g.forEach((F) => {
            N != null && N !== F.props.toastId || jt(F.toggle) && F.toggle(O);
          });
        }, removeToast: S, toasts: g, clearQueue: () => {
          p -= m.length, m = [];
        }, buildToast: (O, N) => {
          if (((H) => {
            let { containerId: re, toastId: X, updateId: ye } = H;
            const ue = re ? re !== c : c !== 1, le = g.has(X) && ye == null;
            return ue || le;
          })(N))
            return;
          const { toastId: F, updateId: Q, data: M, staleId: P, delay: B } = N, q = () => {
            S(F);
          }, z = Q == null;
          z && p++;
          const $ = { ...b, style: b.toastStyle, key: d++, ...Object.fromEntries(Object.entries(N).filter((H) => {
            let [re, X] = H;
            return X != null;
          })), toastId: F, updateId: Q, data: M, closeToast: q, isIn: !1, className: Us(N.className || b.toastClassName), bodyClassName: Us(N.bodyClassName || b.bodyClassName), progressClassName: Us(N.progressClassName || b.progressClassName), autoClose: !N.isLoading && (ve = N.autoClose, j = b.autoClose, ve === !1 || _a(ve) && ve > 0 ? ve : j), deleteToast() {
            const H = g.get(F), { onClose: re, children: X } = H.props;
            jt(re) && re(Mn(X) && X.props), h(zd(H, "removed")), g.delete(F), p--, p < 0 && (p = 0), m.length > 0 ? A(m.shift()) : w();
          } };
          var ve, j;
          $.closeButton = b.closeButton, N.closeButton === !1 || Bl(N.closeButton) ? $.closeButton = N.closeButton : N.closeButton === !0 && ($.closeButton = !Bl(b.closeButton) || b.closeButton);
          let C = O;
          Mn(O) && !Fn(O.type) ? C = no(O, { closeToast: q, toastProps: $, data: M }) : jt(O) && (C = O({ closeToast: q, toastProps: $, data: M }));
          const R = { content: C, props: $, staleId: P };
          b.limit && b.limit > 0 && p > b.limit && z ? m.push(R) : _a(B) ? setTimeout(() => {
            A(R);
          }, B) : A(R);
        }, setProps(O) {
          b = O;
        }, setToggle: (O, N) => {
          g.get(O).toggle = N;
        }, isToastActive: (O) => y.some((N) => N === O), getSnapshot: () => b.newestOnTop ? v.reverse() : v };
      }(s, a, Z1);
      It.set(s, u);
      const l = u.observe(o);
      return Sa.forEach((c) => zm(c.content, c.options)), Sa = [], () => {
        l(), It.delete(s);
      };
    }, setProps(o) {
      var u;
      (u = It.get(s)) == null || u.setProps(o);
    }, getSnapshot() {
      var o;
      return (o = It.get(s)) == null ? void 0 : o.getSnapshot();
    } };
  }(t)).current;
  n(t);
  const i = um(e, r, r);
  return { getToastToRender: function(a) {
    if (!i)
      return [];
    const s = /* @__PURE__ */ new Map();
    return i.forEach((o) => {
      const { position: u } = o.props;
      s.has(u) || s.set(u, []), s.get(u).push(o);
    }), Array.from(s, (o) => a(o[0], o[1]));
  }, isToastActive: Vm, count: i == null ? void 0 : i.length };
}
function J1(t) {
  const [e, r] = Je(!1), [n, i] = Je(!1), a = Te(null), s = Te({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: o, pauseOnHover: u, closeToast: l, onClick: c, closeOnClick: f } = t;
  var h, d;
  function p() {
    r(!0);
  }
  function m() {
    r(!1);
  }
  function y(g) {
    const x = a.current;
    s.canDrag && x && (s.didMove = !0, e && m(), s.delta = t.draggableDirection === "x" ? g.clientX - s.start : g.clientY - s.start, s.start !== g.clientX && (s.canCloseOnClick = !1), x.style.transform = `translate3d(${t.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`},0)`, x.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)));
  }
  function v() {
    document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", v);
    const g = a.current;
    if (s.canDrag && s.didMove && g) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance)
        return i(!0), t.closeToast(), void t.collapseAll();
      g.style.transition = "transform 0.2s, opacity 0.2s", g.style.removeProperty("transform"), g.style.removeProperty("opacity");
    }
  }
  (d = It.get((h = { id: t.toastId, containerId: t.containerId, fn: r }).containerId || 1)) == null || d.setToggle(h.id, h.fn), He(() => {
    if (t.pauseOnFocusLoss)
      return document.hasFocus() || m(), window.addEventListener("focus", p), window.addEventListener("blur", m), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", m);
      };
  }, [t.pauseOnFocusLoss]);
  const b = { onPointerDown: function(g) {
    if (t.draggable === !0 || t.draggable === g.pointerType) {
      s.didMove = !1, document.addEventListener("pointermove", y), document.addEventListener("pointerup", v);
      const x = a.current;
      s.canCloseOnClick = !0, s.canDrag = !0, x.style.transition = "none", t.draggableDirection === "x" ? (s.start = g.clientX, s.removalDistance = x.offsetWidth * (t.draggablePercent / 100)) : (s.start = g.clientY, s.removalDistance = x.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent) / 100);
    }
  }, onPointerUp: function(g) {
    const { top: x, bottom: w, left: S, right: A } = a.current.getBoundingClientRect();
    g.nativeEvent.type !== "touchend" && t.pauseOnHover && g.clientX >= S && g.clientX <= A && g.clientY >= x && g.clientY <= w ? m() : p();
  } };
  return o && u && (b.onMouseEnter = m, t.stacked || (b.onMouseLeave = p)), f && (b.onClick = (g) => {
    c && c(g), s.canCloseOnClick && l();
  }), { playToast: p, pauseToast: m, isRunning: e, preventExitTransition: n, toastRef: a, eventHandlers: b };
}
function K1(t) {
  let { delay: e, isRunning: r, closeToast: n, type: i = "default", hide: a, className: s, style: o, controlledProgress: u, progress: l, rtl: c, isIn: f, theme: h } = t;
  const d = a || u && l === 0, p = { ...o, animationDuration: `${e}ms`, animationPlayState: r ? "running" : "paused" };
  u && (p.transform = `scaleX(${l})`);
  const m = en("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${h}`, `Toastify__progress-bar--${i}`, { "Toastify__progress-bar--rtl": c }), y = jt(s) ? s({ rtl: c, type: i, defaultClassName: m }) : en(m, s), v = { [u && l >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && l < 1 ? null : () => {
    f && n();
  } };
  return U.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": d }, U.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${i}` }), U.createElement("div", { role: "progressbar", "aria-hidden": d ? "true" : "false", "aria-label": "notification timer", className: y, style: p, ...v }));
}
let X1 = 1;
const Wm = () => "" + X1++;
function ew(t) {
  return t && (Fn(t.toastId) || _a(t.toastId)) ? t.toastId : Wm();
}
function ca(t, e) {
  return zm(t, e), e.toastId;
}
function lo(t, e) {
  return { ...e, type: e && e.type || t, toastId: ew(e) };
}
function xs(t) {
  return (e, r) => ca(e, lo(t, r));
}
function Ye(t, e) {
  return ca(t, lo("default", e));
}
Ye.loading = (t, e) => ca(t, lo("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), Ye.promise = function(t, e, r) {
  let n, { pending: i, error: a, success: s } = e;
  i && (n = Fn(i) ? Ye.loading(i, r) : Ye.loading(i.render, { ...r, ...i }));
  const o = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, u = (c, f, h) => {
    if (f == null)
      return void Ye.dismiss(n);
    const d = { type: c, ...o, ...r, data: h }, p = Fn(f) ? { render: f } : f;
    return n ? Ye.update(n, { ...d, ...p }) : Ye(p.render, { ...d, ...p }), h;
  }, l = jt(t) ? t() : t;
  return l.then((c) => u("success", s, c)).catch((c) => u("error", a, c)), l;
}, Ye.success = xs("success"), Ye.info = xs("info"), Ye.error = xs("error"), Ye.warning = xs("warning"), Ye.warn = Ye.warning, Ye.dark = (t, e) => ca(t, lo("default", { theme: "dark", ...e })), Ye.dismiss = function(t) {
  (function(e) {
    var r;
    if (jm()) {
      if (e == null || Fn(r = e) || _a(r))
        It.forEach((n) => {
          n.removeToast(e);
        });
      else if (e && ("containerId" in e || "id" in e)) {
        const n = It.get(e.containerId);
        n ? n.removeToast(e.id) : It.forEach((i) => {
          i.removeToast(e.id);
        });
      }
    } else
      Sa = Sa.filter((n) => e != null && n.options.toastId !== e);
  })(t);
}, Ye.clearWaitingQueue = function(t) {
  t === void 0 && (t = {}), It.forEach((e) => {
    !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue();
  });
}, Ye.isActive = Vm, Ye.update = function(t, e) {
  e === void 0 && (e = {});
  const r = ((n, i) => {
    var a;
    let { containerId: s } = i;
    return (a = It.get(s || 1)) == null ? void 0 : a.toasts.get(n);
  })(t, e);
  if (r) {
    const { props: n, content: i } = r, a = { delay: 100, ...n, ...e, toastId: e.toastId || t, updateId: Wm() };
    a.toastId !== t && (a.staleId = t);
    const s = a.render || i;
    delete a.render, ca(s, a);
  }
}, Ye.done = (t) => {
  Ye.update(t, { progress: 1 });
}, Ye.onChange = function(t) {
  return Hl.add(t), () => {
    Hl.delete(t);
  };
}, Ye.play = (t) => Wd(!0, t), Ye.pause = (t) => Wd(!1, t);
const tw = typeof window < "u" ? Wa : He, ks = (t) => {
  let { theme: e, type: r, isLoading: n, ...i } = t;
  return U.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...i });
}, $u = { info: function(t) {
  return U.createElement(ks, { ...t }, U.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return U.createElement(ks, { ...t }, U.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return U.createElement(ks, { ...t }, U.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return U.createElement(ks, { ...t }, U.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return U.createElement("div", { className: "Toastify__spinner" });
} }, rw = (t) => {
  const { isRunning: e, preventExitTransition: r, toastRef: n, eventHandlers: i, playToast: a } = J1(t), { closeButton: s, children: o, autoClose: u, onClick: l, type: c, hideProgressBar: f, closeToast: h, transition: d, position: p, className: m, style: y, bodyClassName: v, bodyStyle: b, progressClassName: g, progressStyle: x, updateId: w, role: S, progress: A, rtl: O, toastId: N, deleteToast: F, isIn: Q, isLoading: M, closeOnClick: P, theme: B } = t, q = en("Toastify__toast", `Toastify__toast-theme--${B}`, `Toastify__toast--${c}`, { "Toastify__toast--rtl": O }, { "Toastify__toast--close-on-click": P }), z = jt(m) ? m({ rtl: O, position: p, type: c, defaultClassName: q }) : en(q, m), $ = function(R) {
    let { theme: H, type: re, isLoading: X, icon: ye } = R, ue = null;
    const le = { theme: H, type: re };
    return ye === !1 || (jt(ye) ? ue = ye({ ...le, isLoading: X }) : Mn(ye) ? ue = no(ye, le) : X ? ue = $u.spinner() : ((pe) => pe in $u)(re) && (ue = $u[re](le))), ue;
  }(t), ve = !!A || !u, j = { closeToast: h, type: c, theme: B };
  let C = null;
  return s === !1 || (C = jt(s) ? s(j) : Mn(s) ? no(s, j) : function(R) {
    let { closeToast: H, theme: re, ariaLabel: X = "close" } = R;
    return U.createElement("button", { className: `Toastify__close-button Toastify__close-button--${re}`, type: "button", onClick: (ye) => {
      ye.stopPropagation(), H(ye);
    }, "aria-label": X }, U.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, U.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }(j)), U.createElement(d, { isIn: Q, done: F, position: p, preventExitTransition: r, nodeRef: n, playToast: a }, U.createElement("div", { id: N, onClick: l, "data-in": Q, className: z, ...i, style: y, ref: n }, U.createElement("div", { ...Q && { role: S }, className: jt(v) ? v({ type: c }) : en("Toastify__toast-body", v), style: b }, $ != null && U.createElement("div", { className: en("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !M }) }, $), U.createElement("div", null, o)), C, U.createElement(K1, { ...w && !ve ? { key: `pb-${w}` } : {}, rtl: O, theme: B, delay: u, isRunning: e, isIn: Q, closeToast: h, hide: f, type: c, style: x, className: g, controlledProgress: ve, progress: A || 0 })));
}, Jo = function(t, e) {
  return e === void 0 && (e = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e };
}, nw = Go(Jo("bounce", !0));
Go(Jo("slide", !0));
Go(Jo("zoom"));
Go(Jo("flip"));
const iw = { position: "top-right", transition: nw, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function aw(t) {
  let e = { ...iw, ...t };
  const r = t.stacked, [n, i] = Je(!0), a = Te(null), { getToastToRender: s, isToastActive: o, count: u } = G1(e), { className: l, style: c, rtl: f, containerId: h } = e;
  function d(m) {
    const y = en("Toastify__toast-container", `Toastify__toast-container--${m}`, { "Toastify__toast-container--rtl": f });
    return jt(l) ? l({ position: m, rtl: f, defaultClassName: y }) : en(y, Us(l));
  }
  function p() {
    r && (i(!0), Ye.play());
  }
  return tw(() => {
    if (r) {
      var m;
      const y = a.current.querySelectorAll('[data-in="true"]'), v = 12, b = (m = e.position) == null ? void 0 : m.includes("top");
      let g = 0, x = 0;
      Array.from(y).reverse().forEach((w, S) => {
        const A = w;
        A.classList.add("Toastify__toast--stacked"), S > 0 && (A.dataset.collapsed = `${n}`), A.dataset.pos || (A.dataset.pos = b ? "top" : "bot");
        const O = g * (n ? 0.2 : 1) + (n ? 0 : v * S);
        A.style.setProperty("--y", `${b ? O : -1 * O}px`), A.style.setProperty("--g", `${v}`), A.style.setProperty("--s", "" + (1 - (n ? x : 0))), g += A.offsetHeight, x += 0.025;
      });
    }
  }, [n, u, r]), U.createElement("div", { ref: a, className: "Toastify", id: h, onMouseEnter: () => {
    r && (i(!1), Ye.pause());
  }, onMouseLeave: p }, s((m, y) => {
    const v = y.length ? { ...c } : { ...c, pointerEvents: "none" };
    return U.createElement("div", { className: d(m), style: v, key: `container-${m}` }, y.map((b) => {
      let { content: g, props: x } = b;
      return U.createElement(rw, { ...x, stacked: r, collapseAll: p, isIn: o(x.toastId, x.containerId), style: x.style, key: `toast-${x.key}` }, g);
    }));
  }));
}
class Hn extends Error {
}
class sw extends Hn {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class ow extends Hn {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class uw extends Hn {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class oi extends Hn {
}
class qm extends Hn {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class Mt extends Hn {
}
class Ur extends Hn {
  constructor() {
    super("Zone is an abstract class");
  }
}
const Z = "numeric", or = "short", Vt = "long", co = {
  year: Z,
  month: Z,
  day: Z
}, Um = {
  year: Z,
  month: or,
  day: Z
}, lw = {
  year: Z,
  month: or,
  day: Z,
  weekday: or
}, Bm = {
  year: Z,
  month: Vt,
  day: Z
}, Hm = {
  year: Z,
  month: Vt,
  day: Z,
  weekday: Vt
}, Ym = {
  hour: Z,
  minute: Z
}, Qm = {
  hour: Z,
  minute: Z,
  second: Z
}, Zm = {
  hour: Z,
  minute: Z,
  second: Z,
  timeZoneName: or
}, Gm = {
  hour: Z,
  minute: Z,
  second: Z,
  timeZoneName: Vt
}, Jm = {
  hour: Z,
  minute: Z,
  hourCycle: "h23"
}, Km = {
  hour: Z,
  minute: Z,
  second: Z,
  hourCycle: "h23"
}, Xm = {
  hour: Z,
  minute: Z,
  second: Z,
  hourCycle: "h23",
  timeZoneName: or
}, ev = {
  hour: Z,
  minute: Z,
  second: Z,
  hourCycle: "h23",
  timeZoneName: Vt
}, tv = {
  year: Z,
  month: Z,
  day: Z,
  hour: Z,
  minute: Z
}, rv = {
  year: Z,
  month: Z,
  day: Z,
  hour: Z,
  minute: Z,
  second: Z
}, nv = {
  year: Z,
  month: or,
  day: Z,
  hour: Z,
  minute: Z
}, iv = {
  year: Z,
  month: or,
  day: Z,
  hour: Z,
  minute: Z,
  second: Z
}, cw = {
  year: Z,
  month: or,
  day: Z,
  weekday: or,
  hour: Z,
  minute: Z
}, av = {
  year: Z,
  month: Vt,
  day: Z,
  hour: Z,
  minute: Z,
  timeZoneName: or
}, sv = {
  year: Z,
  month: Vt,
  day: Z,
  hour: Z,
  minute: Z,
  second: Z,
  timeZoneName: or
}, ov = {
  year: Z,
  month: Vt,
  day: Z,
  weekday: Vt,
  hour: Z,
  minute: Z,
  timeZoneName: Vt
}, uv = {
  year: Z,
  month: Vt,
  day: Z,
  weekday: Vt,
  hour: Z,
  minute: Z,
  second: Z,
  timeZoneName: Vt
};
class Ha {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Ur();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Ur();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new Ur();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, r) {
    throw new Ur();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, r) {
    throw new Ur();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new Ur();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new Ur();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Ur();
  }
}
let ju = null;
class Ko extends Ha {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return ju === null && (ju = new Ko()), ju;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: r, locale: n }) {
    return yv(e, r, n);
  }
  /** @override **/
  formatOffset(e, r) {
    return fa(this.offset(e), r);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Bs = {};
function fw(t) {
  return Bs[t] || (Bs[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Bs[t];
}
const dw = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hw(t, e) {
  const r = t.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, i, a, s, o, u, l, c] = n;
  return [s, i, a, o, u, l, c];
}
function pw(t, e) {
  const r = t.formatToParts(e), n = [];
  for (let i = 0; i < r.length; i++) {
    const { type: a, value: s } = r[i], o = dw[a];
    a === "era" ? n[o] = s : Ee(o) || (n[o] = parseInt(s, 10));
  }
  return n;
}
let Ts = {};
class Pr extends Ha {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Ts[e] || (Ts[e] = new Pr(e)), Ts[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Ts = {}, Bs = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = Pr.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: r, locale: n }) {
    return yv(e, r, n, this.name);
  }
  /** @override **/
  formatOffset(e, r) {
    return fa(this.offset(e), r);
  }
  /** @override **/
  offset(e) {
    const r = new Date(e);
    if (isNaN(r))
      return NaN;
    const n = fw(this.name);
    let [i, a, s, o, u, l, c] = n.formatToParts ? pw(n, r) : hw(n, r);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = eu({
      year: i,
      month: a,
      day: s,
      hour: u === 24 ? 0 : u,
      minute: l,
      second: c,
      millisecond: 0
    });
    let d = +r;
    const p = d % 1e3;
    return d -= p >= 0 ? p : 1e3 + p, (h - d) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let qd = {};
function mw(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = qd[r];
  return n || (n = new Intl.ListFormat(t, e), qd[r] = n), n;
}
let Yl = {};
function Ql(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Yl[r];
  return n || (n = new Intl.DateTimeFormat(t, e), Yl[r] = n), n;
}
let Zl = {};
function vw(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Zl[r];
  return n || (n = new Intl.NumberFormat(t, e), Zl[r] = n), n;
}
let Gl = {};
function yw(t, e = {}) {
  const { base: r, ...n } = e, i = JSON.stringify([t, n]);
  let a = Gl[i];
  return a || (a = new Intl.RelativeTimeFormat(t, e), Gl[i] = a), a;
}
let na = null;
function gw() {
  return na || (na = new Intl.DateTimeFormat().resolvedOptions().locale, na);
}
let Ud = {};
function bw(t) {
  let e = Ud[t];
  if (!e) {
    const r = new Intl.Locale(t);
    e = "getWeekInfo" in r ? r.getWeekInfo() : r.weekInfo, Ud[t] = e;
  }
  return e;
}
function ww(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const r = t.indexOf("-u-");
  if (r === -1)
    return [t];
  {
    let n, i;
    try {
      n = Ql(t).resolvedOptions(), i = t;
    } catch {
      const u = t.substring(0, r);
      n = Ql(u).resolvedOptions(), i = u;
    }
    const { numberingSystem: a, calendar: s } = n;
    return [i, a, s];
  }
}
function Ew(t, e, r) {
  return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t;
}
function xw(t) {
  const e = [];
  for (let r = 1; r <= 12; r++) {
    const n = xe.utc(2009, r, 1);
    e.push(t(n));
  }
  return e;
}
function kw(t) {
  const e = [];
  for (let r = 1; r <= 7; r++) {
    const n = xe.utc(2016, 11, 13 + r);
    e.push(t(n));
  }
  return e;
}
function _s(t, e, r, n) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? r(e) : n(e);
}
function Tw(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class _w {
  constructor(e, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const { padTo: i, floor: a, ...s } = n;
    if (!r || Object.keys(s).length > 0) {
      const o = { useGrouping: !1, ...n };
      n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = vw(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const r = this.floor ? Math.floor(e) : e;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(e) : ff(e, 3);
      return ct(r, this.padTo);
    }
  }
}
class Sw {
  constructor(e, r, n) {
    this.opts = n, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const s = -1 * (e.offset / 60), o = s >= 0 ? `Etc/GMT+${s}` : `Etc/GMT${s}`;
      e.offset !== 0 && Pr.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const a = { ...this.opts };
    a.timeZone = a.timeZone || i, this.dtf = Ql(r, a);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((r) => {
      if (r.type === "timeZoneName") {
        const n = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...r,
          value: n
        };
      } else
        return r;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Ow {
  constructor(e, r, n) {
    this.opts = { style: "long", ...n }, !r && mv() && (this.rtf = yw(e, n));
  }
  format(e, r) {
    return this.rtf ? this.rtf.format(e, r) : Yw(r, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, r) {
    return this.rtf ? this.rtf.formatToParts(e, r) : [];
  }
}
const Cw = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class qe {
  static fromOpts(e) {
    return qe.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, r, n, i, a = !1) {
    const s = e || st.defaultLocale, o = s || (a ? "en-US" : gw()), u = r || st.defaultNumberingSystem, l = n || st.defaultOutputCalendar, c = Jl(i) || st.defaultWeekSettings;
    return new qe(o, u, l, c, s);
  }
  static resetCache() {
    na = null, Yl = {}, Zl = {}, Gl = {};
  }
  static fromObject({ locale: e, numberingSystem: r, outputCalendar: n, weekSettings: i } = {}) {
    return qe.create(e, r, n, i);
  }
  constructor(e, r, n, i, a) {
    const [s, o, u] = ww(e);
    this.locale = s, this.numberingSystem = r || o || null, this.outputCalendar = n || u || null, this.weekSettings = i, this.intl = Ew(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = a, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Tw(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && r ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : qe.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Jl(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, r = !1) {
    return _s(this, e, wv, () => {
      const n = r ? { month: e, day: "numeric" } : { month: e }, i = r ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = xw((a) => this.extract(a, n, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, r = !1) {
    return _s(this, e, kv, () => {
      const n = r ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = r ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = kw(
        (a) => this.extract(a, n, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return _s(
      this,
      void 0,
      () => Tv,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [xe.utc(2016, 11, 13, 9), xe.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return _s(this, e, _v, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [xe.utc(-40, 1, 1), xe.utc(2017, 1, 1)].map(
        (n) => this.extract(n, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, r, n) {
    const i = this.dtFormatter(e, r), a = i.formatToParts(), s = a.find((o) => o.type.toLowerCase() === n);
    return s ? s.value : null;
  }
  numberFormatter(e = {}) {
    return new _w(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, r = {}) {
    return new Sw(e, this.intl, r);
  }
  relFormatter(e = {}) {
    return new Ow(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return mw(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : vv() ? bw(this.locale) : Cw;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let Vu = null;
class At extends Ha {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Vu === null && (Vu = new At(0)), Vu;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? At.utcInstance : new At(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const r = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r)
        return new At(tu(r[1], r[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${fa(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${fa(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, r) {
    return fa(this.fixed, r);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class Iw extends Ha {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function Xr(t, e) {
  if (Ee(t) || t === null)
    return e;
  if (t instanceof Ha)
    return t;
  if (Dw(t)) {
    const r = t.toLowerCase();
    return r === "default" ? e : r === "local" || r === "system" ? Ko.instance : r === "utc" || r === "gmt" ? At.utcInstance : At.parseSpecifier(r) || Pr.create(t);
  } else
    return Ln(t) ? At.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Iw(t);
}
let Bd = () => Date.now(), Hd = "system", Yd = null, Qd = null, Zd = null, Gd = 60, Jd, Kd = null;
class st {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Bd;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Bd = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Hd = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Xr(Hd, Ko.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Yd;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Yd = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Qd;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Qd = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Zd;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Zd = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return Kd;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Kd = Jl(e);
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Gd;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    Gd = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Jd;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Jd = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    qe.resetCache(), Pr.resetCache();
  }
}
class ar {
  constructor(e, r) {
    this.reason = e, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const lv = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], cv = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Yt(t, e) {
  return new ar(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function uf(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && t >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const i = n.getUTCDay();
  return i === 0 ? 7 : i;
}
function fv(t, e, r) {
  return r + (Ya(t) ? cv : lv)[e - 1];
}
function dv(t, e) {
  const r = Ya(t) ? cv : lv, n = r.findIndex((a) => a < e), i = e - r[n];
  return { month: n + 1, day: i };
}
function lf(t, e) {
  return (t - e + 7) % 7 + 1;
}
function fo(t, e = 4, r = 1) {
  const { year: n, month: i, day: a } = t, s = fv(n, i, a), o = lf(uf(n, i, a), r);
  let u = Math.floor((s - o + 14 - e) / 7), l;
  return u < 1 ? (l = n - 1, u = Oa(l, e, r)) : u > Oa(n, e, r) ? (l = n + 1, u = 1) : l = n, { weekYear: l, weekNumber: u, weekday: o, ...ru(t) };
}
function Xd(t, e = 4, r = 1) {
  const { weekYear: n, weekNumber: i, weekday: a } = t, s = lf(uf(n, 1, e), r), o = mi(n);
  let u = i * 7 + a - s - 7 + e, l;
  u < 1 ? (l = n - 1, u += mi(l)) : u > o ? (l = n + 1, u -= mi(n)) : l = n;
  const { month: c, day: f } = dv(l, u);
  return { year: l, month: c, day: f, ...ru(t) };
}
function zu(t) {
  const { year: e, month: r, day: n } = t, i = fv(e, r, n);
  return { year: e, ordinal: i, ...ru(t) };
}
function eh(t) {
  const { year: e, ordinal: r } = t, { month: n, day: i } = dv(e, r);
  return { year: e, month: n, day: i, ...ru(t) };
}
function th(t, e) {
  if (!Ee(t.localWeekday) || !Ee(t.localWeekNumber) || !Ee(t.localWeekYear)) {
    if (!Ee(t.weekday) || !Ee(t.weekNumber) || !Ee(t.weekYear))
      throw new oi(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return Ee(t.localWeekday) || (t.weekday = t.localWeekday), Ee(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), Ee(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Aw(t, e = 4, r = 1) {
  const n = Xo(t.weekYear), i = Qt(
    t.weekNumber,
    1,
    Oa(t.weekYear, e, r)
  ), a = Qt(t.weekday, 1, 7);
  return n ? i ? a ? !1 : Yt("weekday", t.weekday) : Yt("week", t.weekNumber) : Yt("weekYear", t.weekYear);
}
function Nw(t) {
  const e = Xo(t.year), r = Qt(t.ordinal, 1, mi(t.year));
  return e ? r ? !1 : Yt("ordinal", t.ordinal) : Yt("year", t.year);
}
function hv(t) {
  const e = Xo(t.year), r = Qt(t.month, 1, 12), n = Qt(t.day, 1, ho(t.year, t.month));
  return e ? r ? n ? !1 : Yt("day", t.day) : Yt("month", t.month) : Yt("year", t.year);
}
function pv(t) {
  const { hour: e, minute: r, second: n, millisecond: i } = t, a = Qt(e, 0, 23) || e === 24 && r === 0 && n === 0 && i === 0, s = Qt(r, 0, 59), o = Qt(n, 0, 59), u = Qt(i, 0, 999);
  return a ? s ? o ? u ? !1 : Yt("millisecond", i) : Yt("second", n) : Yt("minute", r) : Yt("hour", e);
}
function Ee(t) {
  return typeof t > "u";
}
function Ln(t) {
  return typeof t == "number";
}
function Xo(t) {
  return typeof t == "number" && t % 1 === 0;
}
function Dw(t) {
  return typeof t == "string";
}
function Rw(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function mv() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function vv() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function Pw(t) {
  return Array.isArray(t) ? t : [t];
}
function rh(t, e, r) {
  if (t.length !== 0)
    return t.reduce((n, i) => {
      const a = [e(i), i];
      return n && r(n[0], a[0]) === n[0] ? n : a;
    }, null)[1];
}
function Mw(t, e) {
  return e.reduce((r, n) => (r[n] = t[n], r), {});
}
function ki(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Jl(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new Mt("Week settings must be an object");
  if (!Qt(t.firstDay, 1, 7) || !Qt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Qt(e, 1, 7)))
    throw new Mt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Qt(t, e, r) {
  return Xo(t) && t >= e && t <= r;
}
function Fw(t, e) {
  return t - e * Math.floor(t / e);
}
function ct(t, e = 2) {
  const r = t < 0;
  let n;
  return r ? n = "-" + ("" + -t).padStart(e, "0") : n = ("" + t).padStart(e, "0"), n;
}
function Qr(t) {
  if (!(Ee(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function En(t) {
  if (!(Ee(t) || t === null || t === ""))
    return parseFloat(t);
}
function cf(t) {
  if (!(Ee(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function ff(t, e, r = !1) {
  const n = 10 ** e;
  return (r ? Math.trunc : Math.round)(t * n) / n;
}
function Ya(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function mi(t) {
  return Ya(t) ? 366 : 365;
}
function ho(t, e) {
  const r = Fw(e - 1, 12) + 1, n = t + (e - r) / 12;
  return r === 2 ? Ya(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function eu(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function nh(t, e, r) {
  return -lf(uf(t, 1, e), r) + e - 1;
}
function Oa(t, e = 4, r = 1) {
  const n = nh(t, e, r), i = nh(t + 1, e, r);
  return (mi(t) - n + i) / 7;
}
function Kl(t) {
  return t > 99 ? t : t > st.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function yv(t, e, r, n = null) {
  const i = new Date(t), a = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (a.timeZone = n);
  const s = { timeZoneName: e, ...a }, o = new Intl.DateTimeFormat(r, s).formatToParts(i).find((u) => u.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function tu(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(e, 10) || 0, i = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + i;
}
function gv(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new Mt(`Invalid unit value ${t}`);
  return e;
}
function po(t, e) {
  const r = {};
  for (const n in t)
    if (ki(t, n)) {
      const i = t[n];
      if (i == null)
        continue;
      r[e(n)] = gv(i);
    }
  return r;
}
function fa(t, e) {
  const r = Math.trunc(Math.abs(t / 60)), n = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${ct(r, 2)}:${ct(n, 2)}`;
    case "narrow":
      return `${i}${r}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${i}${ct(r, 2)}${ct(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function ru(t) {
  return Mw(t, ["hour", "minute", "second", "millisecond"]);
}
const Lw = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], bv = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], $w = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function wv(t) {
  switch (t) {
    case "narrow":
      return [...$w];
    case "short":
      return [...bv];
    case "long":
      return [...Lw];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Ev = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], xv = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], jw = ["M", "T", "W", "T", "F", "S", "S"];
function kv(t) {
  switch (t) {
    case "narrow":
      return [...jw];
    case "short":
      return [...xv];
    case "long":
      return [...Ev];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Tv = ["AM", "PM"], Vw = ["Before Christ", "Anno Domini"], zw = ["BC", "AD"], Ww = ["B", "A"];
function _v(t) {
  switch (t) {
    case "narrow":
      return [...Ww];
    case "short":
      return [...zw];
    case "long":
      return [...Vw];
    default:
      return null;
  }
}
function qw(t) {
  return Tv[t.hour < 12 ? 0 : 1];
}
function Uw(t, e) {
  return kv(e)[t.weekday - 1];
}
function Bw(t, e) {
  return wv(e)[t.month - 1];
}
function Hw(t, e) {
  return _v(e)[t.year < 0 ? 0 : 1];
}
function Yw(t, e, r = "always", n = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, a = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (r === "auto" && a) {
    const f = t === "days";
    switch (e) {
      case 1:
        return f ? "tomorrow" : `next ${i[t][0]}`;
      case -1:
        return f ? "yesterday" : `last ${i[t][0]}`;
      case 0:
        return f ? "today" : `this ${i[t][0]}`;
    }
  }
  const s = Object.is(e, -0) || e < 0, o = Math.abs(e), u = o === 1, l = i[t], c = n ? u ? l[1] : l[2] || l[1] : u ? i[t][0] : t;
  return s ? `${o} ${c} ago` : `in ${o} ${c}`;
}
function ih(t, e) {
  let r = "";
  for (const n of t)
    n.literal ? r += n.val : r += e(n.val);
  return r;
}
const Qw = {
  D: co,
  DD: Um,
  DDD: Bm,
  DDDD: Hm,
  t: Ym,
  tt: Qm,
  ttt: Zm,
  tttt: Gm,
  T: Jm,
  TT: Km,
  TTT: Xm,
  TTTT: ev,
  f: tv,
  ff: nv,
  fff: av,
  ffff: ov,
  F: rv,
  FF: iv,
  FFF: sv,
  FFFF: uv
};
class kt {
  static create(e, r = {}) {
    return new kt(e, r);
  }
  static parseFormat(e) {
    let r = null, n = "", i = !1;
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e.charAt(s);
      o === "'" ? (n.length > 0 && a.push({ literal: i || /^\s+$/.test(n), val: n }), r = null, n = "", i = !i) : i || o === r ? n += o : (n.length > 0 && a.push({ literal: /^\s+$/.test(n), val: n }), n = o, r = o);
    }
    return n.length > 0 && a.push({ literal: i || /^\s+$/.test(n), val: n }), a;
  }
  static macroTokenToFormatOpts(e) {
    return Qw[e];
  }
  constructor(e, r) {
    this.opts = r, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, r) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...r }).format();
  }
  dtFormatter(e, r = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...r });
  }
  formatDateTime(e, r) {
    return this.dtFormatter(e, r).format();
  }
  formatDateTimeParts(e, r) {
    return this.dtFormatter(e, r).formatToParts();
  }
  formatInterval(e, r) {
    return this.dtFormatter(e.start, r).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, r) {
    return this.dtFormatter(e, r).resolvedOptions();
  }
  num(e, r = 0) {
    if (this.opts.forceSimple)
      return ct(e, r);
    const n = { ...this.opts };
    return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(e);
  }
  formatDateTimeFromString(e, r) {
    const n = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", a = (d, p) => this.loc.extract(e, d, p), s = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => n ? qw(e) : a({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (d, p) => n ? Bw(e, d) : a(p ? { month: d } : { month: d, day: "numeric" }, "month"), l = (d, p) => n ? Uw(e, d) : a(
      p ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), c = (d) => {
      const p = kt.macroTokenToFormatOpts(d);
      return p ? this.formatWithSystemDefault(e, p) : d;
    }, f = (d) => n ? Hw(e, d) : a({ era: d }, "era"), h = (d) => {
      switch (d) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return s({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return s({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return s({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return o();
        case "d":
          return i ? a({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return i ? a({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return l("short", !0);
        case "cccc":
          return l("long", !0);
        case "ccccc":
          return l("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return l("short", !1);
        case "EEEE":
          return l("long", !1);
        case "EEEEE":
          return l("narrow", !1);
        case "L":
          return i ? a({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return i ? a({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return u("short", !0);
        case "LLLL":
          return u("long", !0);
        case "LLLLL":
          return u("narrow", !0);
        case "M":
          return i ? a({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? a({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return u("short", !1);
        case "MMMM":
          return u("long", !1);
        case "MMMMM":
          return u("narrow", !1);
        case "y":
          return i ? a({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return i ? a({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? a({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return i ? a({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return f("short");
        case "GG":
          return f("long");
        case "GGGGG":
          return f("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return c(d);
      }
    };
    return ih(kt.parseFormat(r), h);
  }
  formatDurationFromString(e, r) {
    const n = (u) => {
      switch (u[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (u) => (l) => {
      const c = n(l);
      return c ? this.num(u.get(c), l.length) : l;
    }, a = kt.parseFormat(r), s = a.reduce(
      (u, { literal: l, val: c }) => l ? u : u.concat(c),
      []
    ), o = e.shiftTo(...s.map(n).filter((u) => u));
    return ih(a, i(o));
  }
}
const Sv = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Li(...t) {
  const e = t.reduce((r, n) => r + n.source, "");
  return RegExp(`^${e}$`);
}
function $i(...t) {
  return (e) => t.reduce(
    ([r, n, i], a) => {
      const [s, o, u] = a(e, i);
      return [{ ...r, ...s }, o || n, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ji(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [r, n] of e) {
    const i = r.exec(t);
    if (i)
      return n(i);
  }
  return [null, null];
}
function Ov(...t) {
  return (e, r) => {
    const n = {};
    let i;
    for (i = 0; i < t.length; i++)
      n[t[i]] = Qr(e[r + i]);
    return [n, null, r + i];
  };
}
const Cv = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Zw = `(?:${Cv.source}?(?:\\[(${Sv.source})\\])?)?`, df = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Iv = RegExp(`${df.source}${Zw}`), hf = RegExp(`(?:T${Iv.source})?`), Gw = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Jw = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Kw = /(\d{4})-?(\d{3})/, Xw = Ov("weekYear", "weekNumber", "weekDay"), eE = Ov("year", "ordinal"), tE = /(\d{4})-(\d\d)-(\d\d)/, Av = RegExp(
  `${df.source} ?(?:${Cv.source}|(${Sv.source}))?`
), rE = RegExp(`(?: ${Av.source})?`);
function vi(t, e, r) {
  const n = t[e];
  return Ee(n) ? r : Qr(n);
}
function nE(t, e) {
  return [{
    year: vi(t, e),
    month: vi(t, e + 1, 1),
    day: vi(t, e + 2, 1)
  }, null, e + 3];
}
function Vi(t, e) {
  return [{
    hours: vi(t, e, 0),
    minutes: vi(t, e + 1, 0),
    seconds: vi(t, e + 2, 0),
    milliseconds: cf(t[e + 3])
  }, null, e + 4];
}
function Qa(t, e) {
  const r = !t[e] && !t[e + 1], n = tu(t[e + 1], t[e + 2]), i = r ? null : At.instance(n);
  return [{}, i, e + 3];
}
function Za(t, e) {
  const r = t[e] ? Pr.create(t[e]) : null;
  return [{}, r, e + 1];
}
const iE = RegExp(`^T?${df.source}$`), aE = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function sE(t) {
  const [e, r, n, i, a, s, o, u, l] = t, c = e[0] === "-", f = u && u[0] === "-", h = (d, p = !1) => d !== void 0 && (p || d && c) ? -d : d;
  return [
    {
      years: h(En(r)),
      months: h(En(n)),
      weeks: h(En(i)),
      days: h(En(a)),
      hours: h(En(s)),
      minutes: h(En(o)),
      seconds: h(En(u), u === "-0"),
      milliseconds: h(cf(l), f)
    }
  ];
}
const oE = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function pf(t, e, r, n, i, a, s) {
  const o = {
    year: e.length === 2 ? Kl(Qr(e)) : Qr(e),
    month: bv.indexOf(r) + 1,
    day: Qr(n),
    hour: Qr(i),
    minute: Qr(a)
  };
  return s && (o.second = Qr(s)), t && (o.weekday = t.length > 3 ? Ev.indexOf(t) + 1 : xv.indexOf(t) + 1), o;
}
const uE = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function lE(t) {
  const [
    ,
    e,
    r,
    n,
    i,
    a,
    s,
    o,
    u,
    l,
    c,
    f
  ] = t, h = pf(e, i, n, r, a, s, o);
  let d;
  return u ? d = oE[u] : l ? d = 0 : d = tu(c, f), [h, new At(d)];
}
function cE(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const fE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, dE = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, hE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function ah(t) {
  const [, e, r, n, i, a, s, o] = t;
  return [pf(e, i, n, r, a, s, o), At.utcInstance];
}
function pE(t) {
  const [, e, r, n, i, a, s, o] = t;
  return [pf(e, o, r, n, i, a, s), At.utcInstance];
}
const mE = Li(Gw, hf), vE = Li(Jw, hf), yE = Li(Kw, hf), gE = Li(Iv), Nv = $i(
  nE,
  Vi,
  Qa,
  Za
), bE = $i(
  Xw,
  Vi,
  Qa,
  Za
), wE = $i(
  eE,
  Vi,
  Qa,
  Za
), EE = $i(
  Vi,
  Qa,
  Za
);
function xE(t) {
  return ji(
    t,
    [mE, Nv],
    [vE, bE],
    [yE, wE],
    [gE, EE]
  );
}
function kE(t) {
  return ji(cE(t), [uE, lE]);
}
function TE(t) {
  return ji(
    t,
    [fE, ah],
    [dE, ah],
    [hE, pE]
  );
}
function _E(t) {
  return ji(t, [aE, sE]);
}
const SE = $i(Vi);
function OE(t) {
  return ji(t, [iE, SE]);
}
const CE = Li(tE, rE), IE = Li(Av), AE = $i(
  Vi,
  Qa,
  Za
);
function NE(t) {
  return ji(
    t,
    [CE, Nv],
    [IE, AE]
  );
}
const sh = "Invalid Duration", Dv = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, DE = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Dv
}, Ut = 146097 / 400, Kn = 146097 / 4800, RE = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Ut / 7,
    days: Ut,
    hours: Ut * 24,
    minutes: Ut * 24 * 60,
    seconds: Ut * 24 * 60 * 60,
    milliseconds: Ut * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Ut / 28,
    days: Ut / 4,
    hours: Ut * 24 / 4,
    minutes: Ut * 24 * 60 / 4,
    seconds: Ut * 24 * 60 * 60 / 4,
    milliseconds: Ut * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Kn / 7,
    days: Kn,
    hours: Kn * 24,
    minutes: Kn * 24 * 60,
    seconds: Kn * 24 * 60 * 60,
    milliseconds: Kn * 24 * 60 * 60 * 1e3
  },
  ...Dv
}, In = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], PE = In.slice(0).reverse();
function Br(t, e, r = !1) {
  const n = {
    values: r ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new De(n);
}
function Rv(t, e) {
  let r = e.milliseconds ?? 0;
  for (const n of PE.slice(1))
    e[n] && (r += e[n] * t[n].milliseconds);
  return r;
}
function oh(t, e) {
  const r = Rv(t, e) < 0 ? -1 : 1;
  In.reduceRight((n, i) => {
    if (Ee(e[i]))
      return n;
    if (n) {
      const a = e[n] * r, s = t[i][n], o = Math.floor(a / s);
      e[i] += o * r, e[n] -= o * s * r;
    }
    return i;
  }, null), In.reduce((n, i) => {
    if (Ee(e[i]))
      return n;
    if (n) {
      const a = e[n] % 1;
      e[n] -= a, e[i] += a * t[n][i];
    }
    return i;
  }, null);
}
function ME(t) {
  const e = {};
  for (const [r, n] of Object.entries(t))
    n !== 0 && (e[r] = n);
  return e;
}
class De {
  /**
   * @private
   */
  constructor(e) {
    const r = e.conversionAccuracy === "longterm" || !1;
    let n = r ? RE : DE;
    e.matrix && (n = e.matrix), this.values = e.values, this.loc = e.loc || qe.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, r) {
    return De.fromObject({ milliseconds: e }, r);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, r = {}) {
    if (e == null || typeof e != "object")
      throw new Mt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new De({
      values: po(e, De.normalizeUnit),
      loc: qe.fromObject(r),
      conversionAccuracy: r.conversionAccuracy,
      matrix: r.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (Ln(e))
      return De.fromMillis(e);
    if (De.isDuration(e))
      return e;
    if (typeof e == "object")
      return De.fromObject(e);
    throw new Mt(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, r) {
    const [n] = _E(e);
    return n ? De.fromObject(n, r) : De.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, r) {
    const [n] = OE(e);
    return n ? De.fromObject(n, r) : De.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new Mt("need to specify a reason the Duration is invalid");
    const n = e instanceof ar ? e : new ar(e, r);
    if (st.throwOnInvalid)
      throw new uw(n);
    return new De({ invalid: n });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const r = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!r)
      throw new qm(e);
    return r;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, r = {}) {
    const n = {
      ...r,
      floor: r.round !== !1 && r.floor !== !1
    };
    return this.isValid ? kt.create(this.loc, n).formatDurationFromString(this, e) : sh;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid)
      return sh;
    const r = In.map((n) => {
      const i = this.values[n];
      return Ee(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: n.slice(0, -1) }).format(i);
    }).filter((n) => n);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(r);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += ff(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const r = this.toMillis();
    return r < 0 || r >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, xe.fromMillis(r, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? Rv(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const r = De.fromDurationLike(e), n = {};
    for (const i of In)
      (ki(r.values, i) || ki(this.values, i)) && (n[i] = r.get(i) + this.get(i));
    return Br(this, { values: n }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const r = De.fromDurationLike(e);
    return this.plus(r.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const r = {};
    for (const n of Object.keys(this.values))
      r[n] = gv(e(this.values[n], n));
    return Br(this, { values: r }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[De.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const r = { ...this.values, ...po(e, De.normalizeUnit) };
    return Br(this, { values: r });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: r, conversionAccuracy: n, matrix: i } = {}) {
    const s = { loc: this.loc.clone({ locale: e, numberingSystem: r }), matrix: i, conversionAccuracy: n };
    return Br(this, s);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return oh(this.matrix, e), Br(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = ME(this.normalize().shiftToAll().toObject());
    return Br(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((s) => De.normalizeUnit(s));
    const r = {}, n = {}, i = this.toObject();
    let a;
    for (const s of In)
      if (e.indexOf(s) >= 0) {
        a = s;
        let o = 0;
        for (const l in n)
          o += this.matrix[l][s] * n[l], n[l] = 0;
        Ln(i[s]) && (o += i[s]);
        const u = Math.trunc(o);
        r[s] = u, n[s] = (o * 1e3 - u * 1e3) / 1e3;
      } else
        Ln(i[s]) && (n[s] = i[s]);
    for (const s in n)
      n[s] !== 0 && (r[a] += s === a ? n[s] : n[s] / this.matrix[a][s]);
    return oh(this.matrix, r), Br(this, { values: r }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const r of Object.keys(this.values))
      e[r] = this.values[r] === 0 ? 0 : -this.values[r];
    return Br(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function r(n, i) {
      return n === void 0 || n === 0 ? i === void 0 || i === 0 : n === i;
    }
    for (const n of In)
      if (!r(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const Xn = "Invalid Interval";
function FE(t, e) {
  return !t || !t.isValid ? Xe.invalid("missing or invalid start") : !e || !e.isValid ? Xe.invalid("missing or invalid end") : e < t ? Xe.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Xe {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new Mt("need to specify a reason the Interval is invalid");
    const n = e instanceof ar ? e : new ar(e, r);
    if (st.throwOnInvalid)
      throw new ow(n);
    return new Xe({ invalid: n });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, r) {
    const n = Zi(e), i = Zi(r), a = FE(n, i);
    return a ?? new Xe({
      start: n,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, r) {
    const n = De.fromDurationLike(r), i = Zi(e);
    return Xe.fromDateTimes(i, i.plus(n));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, r) {
    const n = De.fromDurationLike(r), i = Zi(e);
    return Xe.fromDateTimes(i.minus(n), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, r) {
    const [n, i] = (e || "").split("/", 2);
    if (n && i) {
      let a, s;
      try {
        a = xe.fromISO(n, r), s = a.isValid;
      } catch {
        s = !1;
      }
      let o, u;
      try {
        o = xe.fromISO(i, r), u = o.isValid;
      } catch {
        u = !1;
      }
      if (s && u)
        return Xe.fromDateTimes(a, o);
      if (s) {
        const l = De.fromISO(i, r);
        if (l.isValid)
          return Xe.after(a, l);
      } else if (u) {
        const l = De.fromISO(n, r);
        if (l.isValid)
          return Xe.before(o, l);
      }
    }
    return Xe.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", r) {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(e, r);
    let i;
    return r != null && r.useLocaleWeeks ? i = this.end.reconfigure({ locale: n.locale }) : i = this.end, i = i.startOf(e, r), Math.floor(i.diff(n, e).get(e)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: r } = {}) {
    return this.isValid ? Xe.fromDateTimes(e || this.s, r || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const r = e.map(Zi).filter((s) => this.contains(s)).sort((s, o) => s.toMillis() - o.toMillis()), n = [];
    let { s: i } = this, a = 0;
    for (; i < this.e; ) {
      const s = r[a] || this.e, o = +s > +this.e ? this.e : s;
      n.push(Xe.fromDateTimes(i, o)), i = o, a += 1;
    }
    return n;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const r = De.fromDurationLike(e);
    if (!this.isValid || !r.isValid || r.as("milliseconds") === 0)
      return [];
    let { s: n } = this, i = 1, a;
    const s = [];
    for (; n < this.e; ) {
      const o = this.start.plus(r.mapUnits((u) => u * i));
      a = +o > +this.e ? this.e : o, s.push(Xe.fromDateTimes(n, a)), n = a, i += 1;
    }
    return s;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const r = this.s > e.s ? this.s : e.s, n = this.e < e.e ? this.e : e.e;
    return r >= n ? null : Xe.fromDateTimes(r, n);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const r = this.s < e.s ? this.s : e.s, n = this.e > e.e ? this.e : e.e;
    return Xe.fromDateTimes(r, n);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [r, n] = e.sort((i, a) => i.s - a.s).reduce(
      ([i, a], s) => a ? a.overlaps(s) || a.abutsStart(s) ? [i, a.union(s)] : [i.concat([a]), s] : [i, s],
      [[], null]
    );
    return n && r.push(n), r;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let r = null, n = 0;
    const i = [], a = e.map((u) => [
      { time: u.s, type: "s" },
      { time: u.e, type: "e" }
    ]), s = Array.prototype.concat(...a), o = s.sort((u, l) => u.time - l.time);
    for (const u of o)
      n += u.type === "s" ? 1 : -1, n === 1 ? r = u.time : (r && +r != +u.time && i.push(Xe.fromDateTimes(r, u.time)), r = null);
    return Xe.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Xe.xor([this].concat(e)).map((r) => this.intersection(r)).filter((r) => r && !r.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Xn;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = co, r = {}) {
    return this.isValid ? kt.create(this.s.loc.clone(r), e).formatInterval(this) : Xn;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Xn;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Xn;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Xn;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: r = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : Xn;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, r) {
    return this.isValid ? this.e.diff(this.s, e, r) : De.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return Xe.fromDateTimes(e(this.s), e(this.e));
  }
}
class Ss {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = st.defaultZone) {
    const r = xe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && r.offset !== r.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return Pr.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return Xr(e, st.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: r = null } = {}) {
    return (r || qe.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: r = null } = {}) {
    return (r || qe.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: r = null } = {}) {
    return (r || qe.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null, outputCalendar: a = "gregory" } = {}) {
    return (i || qe.create(r, n, a)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null, outputCalendar: a = "gregory" } = {}) {
    return (i || qe.create(r, n, a)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null } = {}) {
    return (i || qe.create(r, n, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null } = {}) {
    return (i || qe.create(r, n, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return qe.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: r = null } = {}) {
    return qe.create(r, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: mv(), localeWeek: vv() };
  }
}
function uh(t, e) {
  const r = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), n = r(e) - r(t);
  return Math.floor(De.fromMillis(n).as("days"));
}
function LE(t, e, r) {
  const n = [
    ["years", (u, l) => l.year - u.year],
    ["quarters", (u, l) => l.quarter - u.quarter + (l.year - u.year) * 4],
    ["months", (u, l) => l.month - u.month + (l.year - u.year) * 12],
    [
      "weeks",
      (u, l) => {
        const c = uh(u, l);
        return (c - c % 7) / 7;
      }
    ],
    ["days", uh]
  ], i = {}, a = t;
  let s, o;
  for (const [u, l] of n)
    r.indexOf(u) >= 0 && (s = u, i[u] = l(t, e), o = a.plus(i), o > e ? (i[u]--, t = a.plus(i), t > e && (o = t, i[u]--, t = a.plus(i))) : t = o);
  return [t, i, o, s];
}
function $E(t, e, r, n) {
  let [i, a, s, o] = LE(t, e, r);
  const u = e - i, l = r.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  l.length === 0 && (s < e && (s = i.plus({ [o]: 1 })), s !== i && (a[o] = (a[o] || 0) + u / (s - i)));
  const c = De.fromObject(a, n);
  return l.length > 0 ? De.fromMillis(u, n).shiftTo(...l).plus(c) : c;
}
const mf = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, lh = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, jE = mf.hanidec.replace(/[\[|\]]/g, "").split("");
function VE(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let r = 0; r < t.length; r++) {
      const n = t.charCodeAt(r);
      if (t[r].search(mf.hanidec) !== -1)
        e += jE.indexOf(t[r]);
      else
        for (const i in lh) {
          const [a, s] = lh[i];
          n >= a && n <= s && (e += n - a);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Kt({ numberingSystem: t }, e = "") {
  return new RegExp(`${mf[t || "latn"]}${e}`);
}
const zE = "missing Intl.DateTimeFormat.formatToParts support";
function Fe(t, e = (r) => r) {
  return { regex: t, deser: ([r]) => e(VE(r)) };
}
const WE = " ", Pv = `[ ${WE}]`, Mv = new RegExp(Pv, "g");
function qE(t) {
  return t.replace(/\./g, "\\.?").replace(Mv, Pv);
}
function ch(t) {
  return t.replace(/\./g, "").replace(Mv, " ").toLowerCase();
}
function Xt(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(qE).join("|")),
    deser: ([r]) => t.findIndex((n) => ch(r) === ch(n)) + e
  };
}
function fh(t, e) {
  return { regex: t, deser: ([, r, n]) => tu(r, n), groups: e };
}
function Os(t) {
  return { regex: t, deser: ([e]) => e };
}
function UE(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function BE(t, e) {
  const r = Kt(e), n = Kt(e, "{2}"), i = Kt(e, "{3}"), a = Kt(e, "{4}"), s = Kt(e, "{6}"), o = Kt(e, "{1,2}"), u = Kt(e, "{1,3}"), l = Kt(e, "{1,6}"), c = Kt(e, "{1,9}"), f = Kt(e, "{2,4}"), h = Kt(e, "{4,6}"), d = (y) => ({ regex: RegExp(UE(y.val)), deser: ([v]) => v, literal: !0 }), m = ((y) => {
    if (t.literal)
      return d(y);
    switch (y.val) {
      case "G":
        return Xt(e.eras("short"), 0);
      case "GG":
        return Xt(e.eras("long"), 0);
      case "y":
        return Fe(l);
      case "yy":
        return Fe(f, Kl);
      case "yyyy":
        return Fe(a);
      case "yyyyy":
        return Fe(h);
      case "yyyyyy":
        return Fe(s);
      case "M":
        return Fe(o);
      case "MM":
        return Fe(n);
      case "MMM":
        return Xt(e.months("short", !0), 1);
      case "MMMM":
        return Xt(e.months("long", !0), 1);
      case "L":
        return Fe(o);
      case "LL":
        return Fe(n);
      case "LLL":
        return Xt(e.months("short", !1), 1);
      case "LLLL":
        return Xt(e.months("long", !1), 1);
      case "d":
        return Fe(o);
      case "dd":
        return Fe(n);
      case "o":
        return Fe(u);
      case "ooo":
        return Fe(i);
      case "HH":
        return Fe(n);
      case "H":
        return Fe(o);
      case "hh":
        return Fe(n);
      case "h":
        return Fe(o);
      case "mm":
        return Fe(n);
      case "m":
        return Fe(o);
      case "q":
        return Fe(o);
      case "qq":
        return Fe(n);
      case "s":
        return Fe(o);
      case "ss":
        return Fe(n);
      case "S":
        return Fe(u);
      case "SSS":
        return Fe(i);
      case "u":
        return Os(c);
      case "uu":
        return Os(o);
      case "uuu":
        return Fe(r);
      case "a":
        return Xt(e.meridiems(), 0);
      case "kkkk":
        return Fe(a);
      case "kk":
        return Fe(f, Kl);
      case "W":
        return Fe(o);
      case "WW":
        return Fe(n);
      case "E":
      case "c":
        return Fe(r);
      case "EEE":
        return Xt(e.weekdays("short", !1), 1);
      case "EEEE":
        return Xt(e.weekdays("long", !1), 1);
      case "ccc":
        return Xt(e.weekdays("short", !0), 1);
      case "cccc":
        return Xt(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return fh(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return fh(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return Os(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Os(/[^\S\n\r]/);
      default:
        return d(y);
    }
  })(t) || {
    invalidReason: zE
  };
  return m.token = t, m;
}
const HE = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function YE(t, e, r) {
  const { type: n, value: i } = t;
  if (n === "literal") {
    const u = /^\s+$/.test(i);
    return {
      literal: !u,
      val: u ? " " : i
    };
  }
  const a = e[n];
  let s = n;
  n === "hour" && (e.hour12 != null ? s = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? s = "hour12" : s = "hour24" : s = r.hour12 ? "hour12" : "hour24");
  let o = HE[s];
  if (typeof o == "object" && (o = o[a]), o)
    return {
      literal: !1,
      val: o
    };
}
function QE(t) {
  return [`^${t.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, t];
}
function ZE(t, e, r) {
  const n = t.match(e);
  if (n) {
    const i = {};
    let a = 1;
    for (const s in r)
      if (ki(r, s)) {
        const o = r[s], u = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(n.slice(a, a + u))), a += u;
      }
    return [n, i];
  } else
    return [n, {}];
}
function GE(t) {
  const e = (a) => {
    switch (a) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let r = null, n;
  return Ee(t.z) || (r = Pr.create(t.z)), Ee(t.Z) || (r || (r = new At(t.Z)), n = t.Z), Ee(t.q) || (t.M = (t.q - 1) * 3 + 1), Ee(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), Ee(t.u) || (t.S = cf(t.u)), [Object.keys(t).reduce((a, s) => {
    const o = e(s);
    return o && (a[o] = t[s]), a;
  }, {}), r, n];
}
let Wu = null;
function JE() {
  return Wu || (Wu = xe.fromMillis(1555555555555)), Wu;
}
function KE(t, e) {
  if (t.literal)
    return t;
  const r = kt.macroTokenToFormatOpts(t.val), n = $v(r, e);
  return n == null || n.includes(void 0) ? t : n;
}
function Fv(t, e) {
  return Array.prototype.concat(...t.map((r) => KE(r, e)));
}
function Lv(t, e, r) {
  const n = Fv(kt.parseFormat(r), t), i = n.map((s) => BE(s, t)), a = i.find((s) => s.invalidReason);
  if (a)
    return { input: e, tokens: n, invalidReason: a.invalidReason };
  {
    const [s, o] = QE(i), u = RegExp(s, "i"), [l, c] = ZE(e, u, o), [f, h, d] = c ? GE(c) : [null, null, void 0];
    if (ki(c, "a") && ki(c, "H"))
      throw new oi(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: n, regex: u, rawMatches: l, matches: c, result: f, zone: h, specificOffset: d };
  }
}
function XE(t, e, r) {
  const { result: n, zone: i, specificOffset: a, invalidReason: s } = Lv(t, e, r);
  return [n, i, a, s];
}
function $v(t, e) {
  if (!t)
    return null;
  const n = kt.create(e, t).dtFormatter(JE()), i = n.formatToParts(), a = n.resolvedOptions();
  return i.map((s) => YE(s, t, a));
}
const qu = "Invalid DateTime", dh = 864e13;
function Cs(t) {
  return new ar("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Uu(t) {
  return t.weekData === null && (t.weekData = fo(t.c)), t.weekData;
}
function Bu(t) {
  return t.localWeekData === null && (t.localWeekData = fo(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function xn(t, e) {
  const r = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new xe({ ...r, ...e, old: r });
}
function jv(t, e, r) {
  let n = t - e * 60 * 1e3;
  const i = r.offset(n);
  if (e === i)
    return [n, e];
  n -= (i - e) * 60 * 1e3;
  const a = r.offset(n);
  return i === a ? [n, i] : [t - Math.min(i, a) * 60 * 1e3, Math.max(i, a)];
}
function Is(t, e) {
  t += e * 60 * 1e3;
  const r = new Date(t);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds()
  };
}
function Hs(t, e, r) {
  return jv(eu(t), e, r);
}
function hh(t, e) {
  const r = t.o, n = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, a = {
    ...t.c,
    year: n,
    month: i,
    day: Math.min(t.c.day, ho(n, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, s = De.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = eu(a);
  let [u, l] = jv(o, r, t.zone);
  return s !== 0 && (u += s, l = t.zone.offset(u)), { ts: u, o: l };
}
function Qi(t, e, r, n, i, a) {
  const { setZone: s, zone: o } = r;
  if (t && Object.keys(t).length !== 0 || e) {
    const u = e || o, l = xe.fromObject(t, {
      ...r,
      zone: u,
      specificOffset: a
    });
    return s ? l : l.setZone(o);
  } else
    return xe.invalid(
      new ar("unparsable", `the input "${i}" can't be parsed as ${n}`)
    );
}
function As(t, e, r = !0) {
  return t.isValid ? kt.create(qe.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Hu(t, e) {
  const r = t.c.year > 9999 || t.c.year < 0;
  let n = "";
  return r && t.c.year >= 0 && (n += "+"), n += ct(t.c.year, r ? 6 : 4), e ? (n += "-", n += ct(t.c.month), n += "-", n += ct(t.c.day)) : (n += ct(t.c.month), n += ct(t.c.day)), n;
}
function ph(t, e, r, n, i, a) {
  let s = ct(t.c.hour);
  return e ? (s += ":", s += ct(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (s += ":")) : s += ct(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (s += ct(t.c.second), (t.c.millisecond !== 0 || !n) && (s += ".", s += ct(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !a ? s += "Z" : t.o < 0 ? (s += "-", s += ct(Math.trunc(-t.o / 60)), s += ":", s += ct(Math.trunc(-t.o % 60))) : (s += "+", s += ct(Math.trunc(t.o / 60)), s += ":", s += ct(Math.trunc(t.o % 60)))), a && (s += "[" + t.zone.ianaName + "]"), s;
}
const Vv = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ex = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, tx = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, zv = ["year", "month", "day", "hour", "minute", "second", "millisecond"], rx = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], nx = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function ix(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new qm(t);
  return e;
}
function mh(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return ix(t);
  }
}
function vh(t, e) {
  const r = Xr(e.zone, st.defaultZone), n = qe.fromObject(e), i = st.now();
  let a, s;
  if (Ee(t.year))
    a = i;
  else {
    for (const l of zv)
      Ee(t[l]) && (t[l] = Vv[l]);
    const o = hv(t) || pv(t);
    if (o)
      return xe.invalid(o);
    const u = r.offset(i);
    [a, s] = Hs(t, u, r);
  }
  return new xe({ ts: a, zone: r, loc: n, o: s });
}
function yh(t, e, r) {
  const n = Ee(r.round) ? !0 : r.round, i = (s, o) => (s = ff(s, n || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(s, o)), a = (s) => r.calendary ? e.hasSame(t, s) ? 0 : e.startOf(s).diff(t.startOf(s), s).get(s) : e.diff(t, s).get(s);
  if (r.unit)
    return i(a(r.unit), r.unit);
  for (const s of r.units) {
    const o = a(s);
    if (Math.abs(o) >= 1)
      return i(o, s);
  }
  return i(t > e ? -0 : 0, r.units[r.units.length - 1]);
}
function gh(t) {
  let e = {}, r;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], r = Array.from(t).slice(0, t.length - 1)) : r = Array.from(t), [e, r];
}
class xe {
  /**
   * @access private
   */
  constructor(e) {
    const r = e.zone || st.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new ar("invalid input") : null) || (r.isValid ? null : Cs(r));
    this.ts = Ee(e.ts) ? st.now() : e.ts;
    let i = null, a = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(r))
        [i, a] = [e.old.c, e.old.o];
      else {
        const o = r.offset(this.ts);
        i = Is(this.ts, o), n = Number.isNaN(i.year) ? new ar("invalid input") : null, i = n ? null : i, a = n ? null : o;
      }
    this._zone = r, this.loc = e.loc || qe.create(), this.invalid = n, this.weekData = null, this.localWeekData = null, this.c = i, this.o = a, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new xe({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, r] = gh(arguments), [n, i, a, s, o, u, l] = r;
    return vh({ year: n, month: i, day: a, hour: s, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, r] = gh(arguments), [n, i, a, s, o, u, l] = r;
    return e.zone = At.utcInstance, vh({ year: n, month: i, day: a, hour: s, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, r = {}) {
    const n = Rw(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return xe.invalid("invalid input");
    const i = Xr(r.zone, st.defaultZone);
    return i.isValid ? new xe({
      ts: n,
      zone: i,
      loc: qe.fromObject(r)
    }) : xe.invalid(Cs(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, r = {}) {
    if (Ln(e))
      return e < -dh || e > dh ? xe.invalid("Timestamp out of range") : new xe({
        ts: e,
        zone: Xr(r.zone, st.defaultZone),
        loc: qe.fromObject(r)
      });
    throw new Mt(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, r = {}) {
    if (Ln(e))
      return new xe({
        ts: e * 1e3,
        zone: Xr(r.zone, st.defaultZone),
        loc: qe.fromObject(r)
      });
    throw new Mt("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, r = {}) {
    e = e || {};
    const n = Xr(r.zone, st.defaultZone);
    if (!n.isValid)
      return xe.invalid(Cs(n));
    const i = qe.fromObject(r), a = po(e, mh), { minDaysInFirstWeek: s, startOfWeek: o } = th(a, i), u = st.now(), l = Ee(r.specificOffset) ? n.offset(u) : r.specificOffset, c = !Ee(a.ordinal), f = !Ee(a.year), h = !Ee(a.month) || !Ee(a.day), d = f || h, p = a.weekYear || a.weekNumber;
    if ((d || c) && p)
      throw new oi(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && c)
      throw new oi("Can't mix ordinal dates with month/day");
    const m = p || a.weekday && !d;
    let y, v, b = Is(u, l);
    m ? (y = rx, v = ex, b = fo(b, s, o)) : c ? (y = nx, v = tx, b = zu(b)) : (y = zv, v = Vv);
    let g = !1;
    for (const F of y) {
      const Q = a[F];
      Ee(Q) ? g ? a[F] = v[F] : a[F] = b[F] : g = !0;
    }
    const x = m ? Aw(a, s, o) : c ? Nw(a) : hv(a), w = x || pv(a);
    if (w)
      return xe.invalid(w);
    const S = m ? Xd(a, s, o) : c ? eh(a) : a, [A, O] = Hs(S, l, n), N = new xe({
      ts: A,
      zone: n,
      o: O,
      loc: i
    });
    return a.weekday && d && e.weekday !== N.weekday ? xe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${N.toISO()}`
    ) : N;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, r = {}) {
    const [n, i] = xE(e);
    return Qi(n, i, r, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, r = {}) {
    const [n, i] = kE(e);
    return Qi(n, i, r, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, r = {}) {
    const [n, i] = TE(e);
    return Qi(n, i, r, "HTTP", r);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, r, n = {}) {
    if (Ee(e) || Ee(r))
      throw new Mt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: a = null } = n, s = qe.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    }), [o, u, l, c] = XE(s, e, r);
    return c ? xe.invalid(c) : Qi(o, u, n, `format ${r}`, e, l);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, r, n = {}) {
    return xe.fromFormat(e, r, n);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, r = {}) {
    const [n, i] = NE(e);
    return Qi(n, i, r, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new Mt("need to specify a reason the DateTime is invalid");
    const n = e instanceof ar ? e : new ar(e, r);
    if (st.throwOnInvalid)
      throw new sw(n);
    return new xe({ invalid: n });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, r = {}) {
    const n = $v(e, qe.fromObject(r));
    return n ? n.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, r = {}) {
    return Fv(kt.parseFormat(e), qe.fromObject(r)).map((i) => i.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Uu(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Uu(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Uu(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? Bu(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Bu(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Bu(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? zu(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Ss.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Ss.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Ss.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Ss.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, r = 6e4, n = eu(this.c), i = this.zone.offset(n - e), a = this.zone.offset(n + e), s = this.zone.offset(n - i * r), o = this.zone.offset(n - a * r);
    if (s === o)
      return [this];
    const u = n - s * r, l = n - o * r, c = Is(u, s), f = Is(l, o);
    return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [xn(this, { ts: u }), xn(this, { ts: l })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return Ya(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return ho(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? mi(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Oa(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Oa(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: r, numberingSystem: n, calendar: i } = kt.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: r, numberingSystem: n, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, r = {}) {
    return this.setZone(At.instance(e), r);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(st.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if (e = Xr(e, st.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (r || n) {
        const a = e.offset(this.ts), s = this.toObject();
        [i] = Hs(s, a, e);
      }
      return xn(this, { ts: i, zone: e });
    } else
      return xe.invalid(Cs(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: r, outputCalendar: n } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: r, outputCalendar: n });
    return xn(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const r = po(e, mh), { minDaysInFirstWeek: n, startOfWeek: i } = th(r, this.loc), a = !Ee(r.weekYear) || !Ee(r.weekNumber) || !Ee(r.weekday), s = !Ee(r.ordinal), o = !Ee(r.year), u = !Ee(r.month) || !Ee(r.day), l = o || u, c = r.weekYear || r.weekNumber;
    if ((l || s) && c)
      throw new oi(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && s)
      throw new oi("Can't mix ordinal dates with month/day");
    let f;
    a ? f = Xd(
      { ...fo(this.c, n, i), ...r },
      n,
      i
    ) : Ee(r.ordinal) ? (f = { ...this.toObject(), ...r }, Ee(r.day) && (f.day = Math.min(ho(f.year, f.month), f.day))) : f = eh({ ...zu(this.c), ...r });
    const [h, d] = Hs(f, this.o, this.zone);
    return xn(this, { ts: h, o: d });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const r = De.fromDurationLike(e);
    return xn(this, hh(this, r));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const r = De.fromDurationLike(e).negate();
    return xn(this, hh(this, r));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: r = !1 } = {}) {
    if (!this.isValid)
      return this;
    const n = {}, i = De.normalizeUnit(e);
    switch (i) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (r) {
        const a = this.loc.getStartOfWeek(), { weekday: s } = this;
        s < a && (n.weekNumber = this.weekNumber - 1), n.weekday = a;
      } else
        n.weekday = 1;
    if (i === "quarters") {
      const a = Math.ceil(this.month / 3);
      n.month = (a - 1) * 3 + 1;
    }
    return this.set(n);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, r) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, r).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, r = {}) {
    return this.isValid ? kt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : qu;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = co, r = {}) {
    return this.isValid ? kt.create(this.loc.clone(r), e).formatDateTime(this) : qu;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? kt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: r = !1,
    suppressMilliseconds: n = !1,
    includeOffset: i = !0,
    extendedZone: a = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const s = e === "extended";
    let o = Hu(this, s);
    return o += "T", o += ph(this, s, r, n, i, a), o;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Hu(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return As(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: r = !1,
    includeOffset: n = !0,
    includePrefix: i = !1,
    extendedZone: a = !1,
    format: s = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + ph(
      this,
      s === "extended",
      r,
      e,
      n,
      a
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return As(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return As(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Hu(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: r = !1, includeOffsetSpace: n = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (r || e) && (n && (i += " "), r ? i += "z" : e && (i += "ZZ")), As(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : qu;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const r = { ...this.c };
    return e.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, r = "milliseconds", n = {}) {
    if (!this.isValid || !e.isValid)
      return De.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n }, a = Pw(r).map(De.normalizeUnit), s = e.valueOf() > this.valueOf(), o = s ? this : e, u = s ? e : this, l = $E(o, u, a, i);
    return s ? l.negate() : l;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", r = {}) {
    return this.diff(xe.now(), e, r);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? Xe.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, r, n) {
    if (!this.isValid)
      return !1;
    const i = e.valueOf(), a = this.setZone(e.zone, { keepLocalTime: !0 });
    return a.startOf(r, n) <= i && i <= a.endOf(r, n);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const r = e.base || xe.fromObject({}, { zone: this.zone }), n = e.padding ? this < r ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], a = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, a = void 0), yh(r, this.plus(n), {
      ...e,
      numeric: "always",
      units: i,
      unit: a
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? yh(e.base || xe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(xe.isDateTime))
      throw new Mt("min requires all arguments be DateTimes");
    return rh(e, (r) => r.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(xe.isDateTime))
      throw new Mt("max requires all arguments be DateTimes");
    return rh(e, (r) => r.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, r, n = {}) {
    const { locale: i = null, numberingSystem: a = null } = n, s = qe.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    });
    return Lv(s, e, r);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, r, n = {}) {
    return xe.fromFormatExplain(e, r, n);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return co;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Um;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return lw;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Bm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Hm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Ym;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Qm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Zm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Gm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Jm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Km;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Xm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return ev;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return tv;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return rv;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return nv;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return iv;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return cw;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return av;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return sv;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return ov;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return uv;
  }
}
function Zi(t) {
  if (xe.isDateTime(t))
    return t;
  if (t && t.valueOf && Ln(t.valueOf()))
    return xe.fromJSDate(t);
  if (t && typeof t == "object")
    return xe.fromObject(t);
  throw new Mt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const mo = {
  isProd: !0,
  isDev: !1,
  ssoUrl: "https://media-library-api.spillover.com/sso",
  ssoDevUrl: "http://localhost:3030/sso",
  engageGraphqlEndpoint: "https://rails-admin.spillover.com/graphql",
  engageGraphqlDevEndpoint: "http://localhost:8080/graphql"
};
var Yu = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}, ax = function() {
  function t(e) {
    var r = e.debug, n = r === void 0 ? !1 : r;
    this.debug = n, this.lines = [];
  }
  return t.prototype.emit = function(e, r) {
    if (e in console) {
      var n = t.prefix;
      console[e].apply(console, Yu([n], r, !1));
    }
  }, t.prototype.tailLogs = function() {
    var e = this;
    this.lines.forEach(function(r) {
      var n = r[0], i = r[1];
      return e.emit(n, i);
    });
  }, t.prototype.getLogs = function() {
    return this.lines;
  }, t.prototype.write = function(e, r) {
    var n = t.buffer;
    this.lines = Yu(Yu([], this.lines.slice(1 - n), !0), [[e, r]], !1), (this.debug || e !== "log") && this.emit(e, r);
  }, t.prototype.info = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    this.write("log", e);
  }, t.prototype.warn = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    this.write("warn", e);
  }, t.prototype.error = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    this.write("error", e);
  }, t.buffer = 30, t.prefix = "[apollo-cache-persist]", t;
}(), sx = function() {
  function t(e) {
    var r = e.cache, n = e.serialize, i = n === void 0 ? !0 : n;
    this.cache = r, this.serialize = i;
  }
  return t.prototype.extract = function() {
    var e = this.cache.extract();
    return this.serialize && (e = JSON.stringify(e)), e;
  }, t.prototype.restore = function(e) {
    this.serialize && typeof e == "string" && (e = JSON.parse(e)), e != null && this.cache.restore(e);
  }, t;
}(), Ns = function(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(c) {
      try {
        l(n.next(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      c.done ? a(c.value) : i(c.value).then(o, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}, Ds = function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)
          return a;
        switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = l;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(l);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        n = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Wv = function() {
  function t(e) {
    var r = e.storage, n = e.key, i = n === void 0 ? "apollo-cache-persist" : n;
    this.storage = r, this.key = i;
  }
  return t.prototype.read = function() {
    return Ns(this, void 0, void 0, function() {
      return Ds(this, function(e) {
        return [2, this.storage.getItem(this.key)];
      });
    });
  }, t.prototype.write = function(e) {
    return Ns(this, void 0, void 0, function() {
      return Ds(this, function(r) {
        switch (r.label) {
          case 0:
            return [4, this.storage.setItem(this.key, e)];
          case 1:
            return r.sent(), [2];
        }
      });
    });
  }, t.prototype.purge = function() {
    return Ns(this, void 0, void 0, function() {
      return Ds(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.storage.removeItem(this.key)];
          case 1:
            return e.sent(), [2];
        }
      });
    });
  }, t.prototype.getSize = function() {
    return Ns(this, void 0, void 0, function() {
      var e;
      return Ds(this, function(r) {
        switch (r.label) {
          case 0:
            return [4, this.storage.getItem(this.key)];
          case 1:
            return e = r.sent(), e == null ? [2, 0] : [2, typeof e == "string" ? e.length : null];
        }
      });
    });
  }, t;
}(), Qu = function(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(c) {
      try {
        l(n.next(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      c.done ? a(c.value) : i(c.value).then(o, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}, Zu = function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)
          return a;
        switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = l;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(l);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        n = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, qv = function() {
  function t(e, r) {
    var n = e.log, i = e.cache, a = e.storage, s = r.maxSize, o = s === void 0 ? 1024 * 1024 : s, u = r.persistenceMapper;
    this.log = n, this.cache = i, this.storage = a, this.paused = !1, u && (this.persistenceMapper = u), o && (this.maxSize = o);
  }
  return t.prototype.persist = function() {
    return Qu(this, void 0, void 0, function() {
      var e, r;
      return Zu(this, function(n) {
        switch (n.label) {
          case 0:
            return n.trys.push([0, 6, , 7]), e = this.cache.extract(), !this.paused && this.persistenceMapper ? [4, this.persistenceMapper(e)] : [3, 2];
          case 1:
            e = n.sent(), n.label = 2;
          case 2:
            return this.maxSize != null && typeof e == "string" && e.length > this.maxSize && !this.paused ? [4, this.purge()] : [3, 4];
          case 3:
            return n.sent(), this.paused = !0, [2];
          case 4:
            return this.paused ? [2] : [4, this.storage.write(e)];
          case 5:
            return n.sent(), this.log.info(typeof e == "string" ? "Persisted cache of size ".concat(e.length, " characters") : "Persisted cache"), [3, 7];
          case 6:
            throw r = n.sent(), this.log.error("Error persisting cache", r), r;
          case 7:
            return [2];
        }
      });
    });
  }, t.prototype.restore = function() {
    return Qu(this, void 0, void 0, function() {
      var e, r;
      return Zu(this, function(n) {
        switch (n.label) {
          case 0:
            return n.trys.push([0, 5, , 6]), [4, this.storage.read()];
          case 1:
            return e = n.sent(), e == null ? [3, 3] : [4, this.cache.restore(e)];
          case 2:
            return n.sent(), this.log.info(typeof e == "string" ? "Restored cache of size ".concat(e.length, " characters") : "Restored cache"), [3, 4];
          case 3:
            this.log.info("No stored cache to restore"), n.label = 4;
          case 4:
            return [3, 6];
          case 5:
            throw r = n.sent(), this.log.error("Error restoring cache", r), r;
          case 6:
            return [2];
        }
      });
    });
  }, t.prototype.purge = function() {
    return Qu(this, void 0, void 0, function() {
      var e;
      return Zu(this, function(r) {
        switch (r.label) {
          case 0:
            return r.trys.push([0, 2, , 3]), [4, this.storage.purge()];
          case 1:
            return r.sent(), this.log.info("Purged cache storage"), [3, 3];
          case 2:
            throw e = r.sent(), this.log.error("Error purging cache storage", e), e;
          case 3:
            return [2];
        }
      });
    });
  }, t;
}();
const Uv = function(t) {
  var e = t.cache;
  return function(r) {
    var n = e.write, i = e.evict, a = e.modify, s = e.gc;
    return e.write = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var l = n.apply(e, o);
      return r(), l;
    }, e.evict = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var l = i.apply(e, o);
      return r(), l;
    }, e.modify = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var l = a.apply(e, o);
      return r(), l;
    }, e.gc = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var l = s.apply(e, o);
      return r(), l;
    }, function() {
      e.write = n, e.evict = i, e.modify = a, e.gc = s;
    };
  };
}, ox = function(t) {
  var e = t.log, r = t.cache;
  return function(n) {
    return e.warn("Trigger option `background` not available on web; using `write` trigger"), Uv({ cache: r })(n);
  };
};
var ux = function() {
  function t(e, r) {
    var n = e.log, i = e.persistor, a = this;
    this.fire = function() {
      if (!a.debounce) {
        a.persist();
        return;
      }
      a.timeout != null && clearTimeout(a.timeout), a.timeout = setTimeout(a.persist, a.debounce);
    }, this.persist = function() {
      a.paused || a.persistor.persist();
    };
    var s = t.defaultDebounce, o = r.cache, u = r.debounce, l = r.trigger, c = l === void 0 ? "write" : l;
    if (c)
      switch (this.debounce = u ?? s, this.persistor = i, this.paused = !1, c) {
        case "write":
          this.uninstall = Uv({ cache: o })(this.fire);
          break;
        case "background":
          u && n.warn("Debounce is not recommended with `background` trigger"), this.debounce = u, this.uninstall = ox({ cache: o, log: n })(this.fire);
          break;
        default:
          if (typeof c == "function")
            this.uninstall = c(this.fire);
          else
            throw Error("Unrecognized trigger option: ".concat(c));
      }
  }
  return t.prototype.pause = function() {
    this.paused = !0;
  }, t.prototype.resume = function() {
    this.paused = !1;
  }, t.prototype.remove = function() {
    this.uninstall && (this.uninstall(), this.uninstall = null, this.paused = !0);
  }, t.defaultDebounce = 1e3, t;
}(), lx = function() {
  function t(e) {
    if (!e.cache)
      throw new Error("In order to persist your Apollo Cache, you need to pass in a cache. Please see https://www.apollographql.com/docs/react/basics/caching.html for our default InMemoryCache.");
    if (!e.storage)
      throw new Error("In order to persist your Apollo Cache, you need to pass in an underlying storage provider. Please see https://github.com/apollographql/apollo-cache-persist#storage-providers");
    var r = new ax(e), n = new sx(e), i = new Wv(e), a = new qv({ log: r, cache: n, storage: i }, e), s = new ux({ log: r, persistor: a }, e);
    this.log = r, this.cache = n, this.storage = i, this.persistor = a, this.trigger = s;
  }
  return t.prototype.persist = function() {
    return this.persistor.persist();
  }, t.prototype.restore = function() {
    return this.persistor.restore();
  }, t.prototype.purge = function() {
    return this.persistor.purge();
  }, t.prototype.pause = function() {
    this.trigger.pause();
  }, t.prototype.resume = function() {
    this.trigger.resume();
  }, t.prototype.remove = function() {
    this.trigger.remove();
  }, t.prototype.getLogs = function(e) {
    if (e === void 0 && (e = !1), e)
      this.log.tailLogs();
    else
      return this.log.getLogs();
  }, t.prototype.getSize = function() {
    return this.storage.getSize();
  }, t;
}(), vf = /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
(function(t) {
  vf(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.storage = new fx(r), n.persistor = new cx({ log: n.log, cache: n.cache, storage: n.storage }, r), n;
  }
  return e.prototype.restoreSync = function() {
    this.persistor.restoreSync();
  }, e;
})(lx);
var cx = function(t) {
  vf(e, t);
  function e(r, n) {
    var i = r.log, a = r.cache, s = r.storage;
    return t.call(this, { log: i, cache: a, storage: s }, n) || this;
  }
  return e.prototype.restoreSync = function() {
    this.cache.restore(this.storage.readSync());
  }, e;
}(qv), fx = function(t) {
  vf(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.readSync = function() {
    return this.storage.getItem(this.key);
  }, e;
}(Wv), dx = function() {
  function t(e) {
    this.storage = e;
  }
  return t.prototype.getItem = function(e) {
    return this.storage.getItem(e);
  }, t.prototype.removeItem = function(e) {
    return this.storage.removeItem(e);
  }, t.prototype.setItem = function(e, r) {
    return r !== null ? this.storage.setItem(e, r) : this.removeItem(e);
  }, t;
}();
function Bv(t, e, r = window) {
  const n = Te();
  He(() => {
    n.current = e;
  }, [e]), He(
    () => {
      if (!(r && r.addEventListener))
        return;
      const a = (s) => n.current(s);
      return r.addEventListener(t, a), () => {
        r.removeEventListener(t, a);
      };
    },
    [t, r]
    // Re-run if eventName or element changes.
  );
}
const bh = new dx(window.localStorage);
function hx(t, e, r = { sync: !1 }) {
  const [n, i] = Je(() => {
    try {
      const o = bh.getItem(t);
      return o ? JSON.parse(o) : e;
    } catch (o) {
      return console.error(o), e;
    }
  }), a = Tt(
    (o) => {
      !o.isTrusted || !r.sync || o.key === t && i(JSON.parse(o.newValue));
    },
    [t, i]
  );
  return Bv("storage", a), [n, (o) => {
    try {
      const u = o instanceof Function ? o(n) : o;
      i(u), bh.setItem(
        t,
        u !== null ? JSON.stringify(u) : null
      );
    } catch (u) {
      console.error(u);
    }
  }];
}
class Ca {
  constructor(e) {
    this.accessToken = e.accessToken, this.expiresAt = e.expiresAt, this.ownerId = e.ownerId;
  }
  static fromOAuthResponse(e, r) {
    return new Ca({
      accessToken: e.access_token,
      expiresAt: xe.now().plus({ seconds: e.expires_in }),
      ownerId: r
    });
  }
  static fromStored(e) {
    return new Ca({
      ...e,
      expiresAt: xe.fromISO(e.expiresAt)
    });
  }
  get dataForStorage() {
    return {
      accessToken: this.accessToken,
      expiresAt: this.expiresAt.toISO(),
      ownerId: this.ownerId
    };
  }
  get expiresIn() {
    return this.expiresAt.diffNow();
  }
  get isExpired() {
    return this.expiresIn.as("milliseconds") <= 0;
  }
  get isValid() {
    return !this.isExpired;
  }
}
function px({ mode: t, onComplete: e }) {
  const r = Te(), n = Tt((i) => {
    var o;
    if (((o = r.current) == null ? void 0 : o.contentWindow) !== i.source)
      return;
    const { data: { type: a, payload: s } } = i;
    e && a === "SSO_CALLBACK" && e(s);
  }, [r, e]);
  return Bv("message", n), /* @__PURE__ */ te.jsx(
    "iframe",
    {
      ref: r,
      src: t === "development" ? mo.ssoDevUrl : mo.ssoUrl,
      className: "sfs-w-full sfs-h-full sfs-border-0"
    }
  );
}
const Hv = xt({
  isAuthenticated: !1,
  tokenData: null,
  reauth: () => {
  },
  handleSSOComplete: () => {
  }
});
function mx({ children: t, mode: e, ownerId: r }) {
  const n = gx({ ownerId: r });
  return n.isAuthenticated ? /* @__PURE__ */ te.jsx(Hv.Provider, { value: n, children: t }) : /* @__PURE__ */ te.jsx(px, { mode: e, onComplete: n.handleSSOComplete });
}
function vx() {
  return ft(Hv);
}
const yx = "sfsTokenData";
function gx({ ownerId: t }) {
  let e;
  const [r, n] = hx(yx), i = (o) => {
    if (o.error) {
      console.error("SSO callback error", o.error);
      return;
    }
    const u = Ca.fromOAuthResponse(o, t);
    n(u.dataForStorage);
  }, a = () => {
    n(null);
  };
  r && (t !== r.ownerId ? a() : e = Ca.fromStored(r));
  const s = !!(e != null && e.accessToken);
  return {
    accessToken: e == null ? void 0 : e.accessToken,
    isAuthenticated: s,
    reauth: a,
    handleSSOComplete: i
  };
}
var Xl = function(t, e) {
  return Xl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Xl(t, e);
};
function cr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Xl(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var T = function() {
  return T = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, T.apply(this, arguments);
};
function Mr(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Zr(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(c) {
      try {
        l(n.next(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      c.done ? a(c.value) : i(c.value).then(o, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function Gr(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)
          return a;
        switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = l;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(l);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        n = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function sr(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
var Gu = "Invariant Violation", wh = Object.setPrototypeOf, bx = wh === void 0 ? function(t, e) {
  return t.__proto__ = e, t;
} : wh, Yv = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      r === void 0 && (r = Gu);
      var n = t.call(this, typeof r == "number" ? Gu + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Gu, bx(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function _n(t, e) {
  if (!t)
    throw new Yv(e);
}
var Qv = ["debug", "log", "warn", "error", "silent"], wx = Qv.indexOf("log");
function Rs(t) {
  return function() {
    if (Qv.indexOf(t) >= wx) {
      var e = console[t] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(t) {
  t.debug = Rs("debug"), t.log = Rs("log"), t.warn = Rs("warn"), t.error = Rs("error");
})(_n || (_n = {}));
var yf = "3.10.4";
function tr(t) {
  try {
    return t();
  } catch {
  }
}
const ec = tr(function() {
  return globalThis;
}) || tr(function() {
  return window;
}) || tr(function() {
  return self;
}) || tr(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
tr(function() {
  return tr.constructor("return this")();
});
var Eh = /* @__PURE__ */ new Map();
function tc(t) {
  var e = Eh.get(t) || 1;
  return Eh.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function Zv(t, e) {
  e === void 0 && (e = 0);
  var r = tc("stringifyForDisplay");
  return JSON.stringify(t, function(n, i) {
    return i === void 0 ? r : i;
  }, e).split(JSON.stringify(r)).join("<undefined>");
}
function Ps(t) {
  return function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (typeof e == "number") {
      var i = e;
      e = gf(i), e || (e = bf(i, r), r = []);
    }
    t.apply(void 0, [e].concat(r));
  };
}
var me = Object.assign(function(e, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  e || _n(e, gf(r, n) || bf(r, n));
}, {
  debug: Ps(_n.debug),
  log: Ps(_n.log),
  warn: Ps(_n.warn),
  error: Ps(_n.error)
});
function Dt(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return new Yv(gf(t, e) || bf(t, e));
}
var xh = Symbol.for("ApolloErrorMessageHandler_" + yf);
function Gv(t) {
  return typeof t == "string" ? t : Zv(t, 2).slice(0, 1e3);
}
function gf(t, e) {
  if (e === void 0 && (e = []), !!t)
    return ec[xh] && ec[xh](t, e.map(Gv));
}
function bf(t, e) {
  if (e === void 0 && (e = []), !!t)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: yf,
      message: t,
      args: e.map(Gv)
    })));
}
function Ys(t, e) {
  if (!!!t)
    throw new Error(e);
}
function Ex(t) {
  return typeof t == "object" && t !== null;
}
function xx(t, e) {
  if (!!!t)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const kx = /\r\n|[\n\r]/g;
function rc(t, e) {
  let r = 0, n = 1;
  for (const i of t.body.matchAll(kx)) {
    if (typeof i.index == "number" || xx(!1), i.index >= e)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: e + 1 - r
  };
}
function Tx(t) {
  return Jv(
    t.source,
    rc(t.source, t.start)
  );
}
function Jv(t, e) {
  const r = t.locationOffset.column - 1, n = "".padStart(r) + t.body, i = e.line - 1, a = t.locationOffset.line - 1, s = e.line + a, o = e.line === 1 ? r : 0, u = e.column + o, l = `${t.name}:${s}:${u}
`, c = n.split(/\r\n|[\n\r]/g), f = c[i];
  if (f.length > 120) {
    const h = Math.floor(u / 80), d = u % 80, p = [];
    for (let m = 0; m < f.length; m += 80)
      p.push(f.slice(m, m + 80));
    return l + kh([
      [`${s} |`, p[0]],
      ...p.slice(1, h + 1).map((m) => ["|", m]),
      ["|", "^".padStart(d)],
      ["|", p[h + 1]]
    ]);
  }
  return l + kh([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[i - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, c[i + 1]]
  ]);
}
function kh(t) {
  const e = t.filter(([n, i]) => i !== void 0), r = Math.max(...e.map(([n]) => n.length));
  return e.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function _x(t) {
  const e = t[0];
  return e == null || "kind" in e || "length" in e ? {
    nodes: e,
    source: t[1],
    positions: t[2],
    path: t[3],
    originalError: t[4],
    extensions: t[5]
  } : e;
}
class wf extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(e, ...r) {
    var n, i, a;
    const { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: f } = _x(r);
    super(e), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Th(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const h = Th(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = o ?? (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (h == null ? void 0 : h.map((p) => p.start)), this.locations = u && o ? u.map((p) => rc(o, p)) : h == null ? void 0 : h.map((p) => rc(p.source, p.start));
    const d = Ex(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = f ?? d) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), c != null && c.stack ? Object.defineProperty(this, "stack", {
      value: c.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, wf) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let e = this.message;
    if (this.nodes)
      for (const r of this.nodes)
        r.loc && (e += `

` + Tx(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        e += `

` + Jv(this.source, r);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function Th(t) {
  return t === void 0 || t.length === 0 ? void 0 : t;
}
function wt(t, e, r) {
  return new wf(`Syntax Error: ${r}`, {
    source: t,
    positions: [e]
  });
}
class Sx {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(e, r, n) {
    this.start = e.start, this.end = r.end, this.startToken = e, this.endToken = r, this.source = n;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Kv {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(e, r, n, i, a, s) {
    this.kind = e, this.start = r, this.end = n, this.line = i, this.column = a, this.value = s, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const Xv = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Ox = new Set(Object.keys(Xv));
function _h(t) {
  const e = t == null ? void 0 : t.kind;
  return typeof e == "string" && Ox.has(e);
}
var ui;
(function(t) {
  t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
})(ui || (ui = {}));
var nc;
(function(t) {
  t.QUERY = "QUERY", t.MUTATION = "MUTATION", t.SUBSCRIPTION = "SUBSCRIPTION", t.FIELD = "FIELD", t.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", t.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", t.INLINE_FRAGMENT = "INLINE_FRAGMENT", t.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", t.SCHEMA = "SCHEMA", t.SCALAR = "SCALAR", t.OBJECT = "OBJECT", t.FIELD_DEFINITION = "FIELD_DEFINITION", t.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", t.INTERFACE = "INTERFACE", t.UNION = "UNION", t.ENUM = "ENUM", t.ENUM_VALUE = "ENUM_VALUE", t.INPUT_OBJECT = "INPUT_OBJECT", t.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(nc || (nc = {}));
var se;
(function(t) {
  t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(se || (se = {}));
function ic(t) {
  return t === 9 || t === 32;
}
function Ia(t) {
  return t >= 48 && t <= 57;
}
function ey(t) {
  return t >= 97 && t <= 122 || // A-Z
  t >= 65 && t <= 90;
}
function ty(t) {
  return ey(t) || t === 95;
}
function Cx(t) {
  return ey(t) || Ia(t) || t === 95;
}
function Ix(t) {
  var e;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let s = 0; s < t.length; ++s) {
    var a;
    const o = t[s], u = Ax(o);
    u !== o.length && (n = (a = n) !== null && a !== void 0 ? a : s, i = s, s !== 0 && u < r && (r = u));
  }
  return t.map((s, o) => o === 0 ? s : s.slice(r)).slice(
    (e = n) !== null && e !== void 0 ? e : 0,
    i + 1
  );
}
function Ax(t) {
  let e = 0;
  for (; e < t.length && ic(t.charCodeAt(e)); )
    ++e;
  return e;
}
function Nx(t, e) {
  const r = t.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((d) => d.length === 0 || ic(d.charCodeAt(0))), s = r.endsWith('\\"""'), o = t.endsWith('"') && !s, u = t.endsWith("\\"), l = o || u, c = (
    // add leading and trailing new lines only if it improves readability
    !i || t.length > 70 || l || a || s
  );
  let f = "";
  const h = i && ic(t.charCodeAt(0));
  return (c && !h || a) && (f += `
`), f += r, (c || l) && (f += `
`), '"""' + f + '"""';
}
var D;
(function(t) {
  t.SOF = "<SOF>", t.EOF = "<EOF>", t.BANG = "!", t.DOLLAR = "$", t.AMP = "&", t.PAREN_L = "(", t.PAREN_R = ")", t.SPREAD = "...", t.COLON = ":", t.EQUALS = "=", t.AT = "@", t.BRACKET_L = "[", t.BRACKET_R = "]", t.BRACE_L = "{", t.PIPE = "|", t.BRACE_R = "}", t.NAME = "Name", t.INT = "Int", t.FLOAT = "Float", t.STRING = "String", t.BLOCK_STRING = "BlockString", t.COMMENT = "Comment";
})(D || (D = {}));
class Dx {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(e) {
    const r = new Kv(D.SOF, 0, 0, 0, 0);
    this.source = e, this.lastToken = r, this.token = r, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let e = this.token;
    if (e.kind !== D.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const r = Px(this, e.end);
          e.next = r, r.prev = e, e = r;
        }
      while (e.kind === D.COMMENT);
    return e;
  }
}
function Rx(t) {
  return t === D.BANG || t === D.DOLLAR || t === D.AMP || t === D.PAREN_L || t === D.PAREN_R || t === D.SPREAD || t === D.COLON || t === D.EQUALS || t === D.AT || t === D.BRACKET_L || t === D.BRACKET_R || t === D.BRACE_L || t === D.PIPE || t === D.BRACE_R;
}
function zi(t) {
  return t >= 0 && t <= 55295 || t >= 57344 && t <= 1114111;
}
function nu(t, e) {
  return ry(t.charCodeAt(e)) && ny(t.charCodeAt(e + 1));
}
function ry(t) {
  return t >= 55296 && t <= 56319;
}
function ny(t) {
  return t >= 56320 && t <= 57343;
}
function zn(t, e) {
  const r = t.source.body.codePointAt(e);
  if (r === void 0)
    return D.EOF;
  if (r >= 32 && r <= 126) {
    const n = String.fromCodePoint(r);
    return n === '"' ? `'"'` : `"${n}"`;
  }
  return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
}
function lt(t, e, r, n, i) {
  const a = t.line, s = 1 + r - t.lineStart;
  return new Kv(e, r, n, a, s, i);
}
function Px(t, e) {
  const r = t.source.body, n = r.length;
  let i = e;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    switch (a) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++t.line, t.lineStart = i;
        continue;
      case 13:
        r.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++t.line, t.lineStart = i;
        continue;
      case 35:
        return Mx(t, i);
      case 33:
        return lt(t, D.BANG, i, i + 1);
      case 36:
        return lt(t, D.DOLLAR, i, i + 1);
      case 38:
        return lt(t, D.AMP, i, i + 1);
      case 40:
        return lt(t, D.PAREN_L, i, i + 1);
      case 41:
        return lt(t, D.PAREN_R, i, i + 1);
      case 46:
        if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
          return lt(t, D.SPREAD, i, i + 3);
        break;
      case 58:
        return lt(t, D.COLON, i, i + 1);
      case 61:
        return lt(t, D.EQUALS, i, i + 1);
      case 64:
        return lt(t, D.AT, i, i + 1);
      case 91:
        return lt(t, D.BRACKET_L, i, i + 1);
      case 93:
        return lt(t, D.BRACKET_R, i, i + 1);
      case 123:
        return lt(t, D.BRACE_L, i, i + 1);
      case 124:
        return lt(t, D.PIPE, i, i + 1);
      case 125:
        return lt(t, D.BRACE_R, i, i + 1);
      case 34:
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? zx(t, i) : Lx(t, i);
    }
    if (Ia(a) || a === 45)
      return Fx(t, i, a);
    if (ty(a))
      return Wx(t, i);
    throw wt(
      t.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : zi(a) || nu(r, i) ? `Unexpected character: ${zn(t, i)}.` : `Invalid character: ${zn(t, i)}.`
    );
  }
  return lt(t, D.EOF, n, n);
}
function Mx(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (zi(a))
      ++i;
    else if (nu(r, i))
      i += 2;
    else
      break;
  }
  return lt(
    t,
    D.COMMENT,
    e,
    i,
    r.slice(e + 1, i)
  );
}
function Fx(t, e, r) {
  const n = t.source.body;
  let i = e, a = r, s = !1;
  if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
    if (a = n.charCodeAt(++i), Ia(a))
      throw wt(
        t.source,
        i,
        `Invalid number, unexpected digit after 0: ${zn(
          t,
          i
        )}.`
      );
  } else
    i = Ju(t, i, a), a = n.charCodeAt(i);
  if (a === 46 && (s = !0, a = n.charCodeAt(++i), i = Ju(t, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = Ju(t, i, a), a = n.charCodeAt(i)), a === 46 || ty(a))
    throw wt(
      t.source,
      i,
      `Invalid number, expected digit but got: ${zn(
        t,
        i
      )}.`
    );
  return lt(
    t,
    s ? D.FLOAT : D.INT,
    e,
    i,
    n.slice(e, i)
  );
}
function Ju(t, e, r) {
  if (!Ia(r))
    throw wt(
      t.source,
      e,
      `Invalid number, expected digit but got: ${zn(
        t,
        e
      )}.`
    );
  const n = t.source.body;
  let i = e + 1;
  for (; Ia(n.charCodeAt(i)); )
    ++i;
  return i;
}
function Lx(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1, a = i, s = "";
  for (; i < n; ) {
    const o = r.charCodeAt(i);
    if (o === 34)
      return s += r.slice(a, i), lt(t, D.STRING, e, i + 1, s);
    if (o === 92) {
      s += r.slice(a, i);
      const u = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? $x(t, i) : jx(t, i) : Vx(t, i);
      s += u.value, i += u.size, a = i;
      continue;
    }
    if (o === 10 || o === 13)
      break;
    if (zi(o))
      ++i;
    else if (nu(r, i))
      i += 2;
    else
      throw wt(
        t.source,
        i,
        `Invalid character within String: ${zn(
          t,
          i
        )}.`
      );
  }
  throw wt(t.source, i, "Unterminated string.");
}
function $x(t, e) {
  const r = t.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const a = r.charCodeAt(e + i++);
    if (a === 125) {
      if (i < 5 || !zi(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | ia(a), n < 0)
      break;
  }
  throw wt(
    t.source,
    e,
    `Invalid Unicode escape sequence: "${r.slice(
      e,
      e + i
    )}".`
  );
}
function jx(t, e) {
  const r = t.source.body, n = Sh(r, e + 2);
  if (zi(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (ry(n) && r.charCodeAt(e + 6) === 92 && r.charCodeAt(e + 7) === 117) {
    const i = Sh(r, e + 8);
    if (ny(i))
      return {
        value: String.fromCodePoint(n, i),
        size: 12
      };
  }
  throw wt(
    t.source,
    e,
    `Invalid Unicode escape sequence: "${r.slice(e, e + 6)}".`
  );
}
function Sh(t, e) {
  return ia(t.charCodeAt(e)) << 12 | ia(t.charCodeAt(e + 1)) << 8 | ia(t.charCodeAt(e + 2)) << 4 | ia(t.charCodeAt(e + 3));
}
function ia(t) {
  return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 70 ? t - 55 : t >= 97 && t <= 102 ? t - 87 : -1;
}
function Vx(t, e) {
  const r = t.source.body;
  switch (r.charCodeAt(e + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw wt(
    t.source,
    e,
    `Invalid character escape sequence: "${r.slice(
      e,
      e + 2
    )}".`
  );
}
function zx(t, e) {
  const r = t.source.body, n = r.length;
  let i = t.lineStart, a = e + 3, s = a, o = "";
  const u = [];
  for (; a < n; ) {
    const l = r.charCodeAt(a);
    if (l === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
      o += r.slice(s, a), u.push(o);
      const c = lt(
        t,
        D.BLOCK_STRING,
        e,
        a + 3,
        // Return a string of the lines joined with U+000A.
        Ix(u).join(`
`)
      );
      return t.line += u.length - 1, t.lineStart = i, c;
    }
    if (l === 92 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34 && r.charCodeAt(a + 3) === 34) {
      o += r.slice(s, a), s = a + 1, a += 4;
      continue;
    }
    if (l === 10 || l === 13) {
      o += r.slice(s, a), u.push(o), l === 13 && r.charCodeAt(a + 1) === 10 ? a += 2 : ++a, o = "", s = a, i = a;
      continue;
    }
    if (zi(l))
      ++a;
    else if (nu(r, a))
      a += 2;
    else
      throw wt(
        t.source,
        a,
        `Invalid character within String: ${zn(
          t,
          a
        )}.`
      );
  }
  throw wt(t.source, a, "Unterminated string.");
}
function Wx(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (Cx(a))
      ++i;
    else
      break;
  }
  return lt(
    t,
    D.NAME,
    e,
    i,
    r.slice(e, i)
  );
}
const qx = 10, iy = 2;
function Ef(t) {
  return iu(t, []);
}
function iu(t, e) {
  switch (typeof t) {
    case "string":
      return JSON.stringify(t);
    case "function":
      return t.name ? `[function ${t.name}]` : "[function]";
    case "object":
      return Ux(t, e);
    default:
      return String(t);
  }
}
function Ux(t, e) {
  if (t === null)
    return "null";
  if (e.includes(t))
    return "[Circular]";
  const r = [...e, t];
  if (Bx(t)) {
    const n = t.toJSON();
    if (n !== t)
      return typeof n == "string" ? n : iu(n, r);
  } else if (Array.isArray(t))
    return Yx(t, r);
  return Hx(t, r);
}
function Bx(t) {
  return typeof t.toJSON == "function";
}
function Hx(t, e) {
  const r = Object.entries(t);
  return r.length === 0 ? "{}" : e.length > iy ? "[" + Qx(t) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + iu(a, e)
  ).join(", ") + " }";
}
function Yx(t, e) {
  if (t.length === 0)
    return "[]";
  if (e.length > iy)
    return "[Array]";
  const r = Math.min(qx, t.length), n = t.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(iu(t[a], e));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Qx(t) {
  const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof t.constructor == "function") {
    const r = t.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return e;
}
const Zx = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(e, r) {
    return e instanceof r;
  } : function(e, r) {
    if (e instanceof r)
      return !0;
    if (typeof e == "object" && e !== null) {
      var n;
      const i = r.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name
      );
      if (i === a) {
        const s = Ef(e);
        throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class ay {
  constructor(e, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || Ys(!1, `Body must be a string. Received: ${Ef(e)}.`), this.body = e, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Ys(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Ys(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Gx(t) {
  return Zx(t, ay);
}
function Jx(t, e) {
  return new Kx(t, e).parseDocument();
}
class Kx {
  constructor(e, r = {}) {
    const n = Gx(e) ? e : new ay(e);
    this._lexer = new Dx(n), this._options = r, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(D.NAME);
    return this.node(e, {
      kind: se.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: se.DOCUMENT,
      definitions: this.many(
        D.SOF,
        this.parseDefinition,
        D.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(D.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), r = e ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === D.NAME) {
      switch (r.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (e)
        throw wt(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (r.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(r);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const e = this._lexer.token;
    if (this.peek(D.BRACE_L))
      return this.node(e, {
        kind: se.OPERATION_DEFINITION,
        operation: ui.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let n;
    return this.peek(D.NAME) && (n = this.parseName()), this.node(e, {
      kind: se.OPERATION_DEFINITION,
      operation: r,
      name: n,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const e = this.expectToken(D.NAME);
    switch (e.value) {
      case "query":
        return ui.QUERY;
      case "mutation":
        return ui.MUTATION;
      case "subscription":
        return ui.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      D.PAREN_L,
      this.parseVariableDefinition,
      D.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: se.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(D.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(D.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(D.DOLLAR), this.node(e, {
      kind: se.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: se.SELECTION_SET,
      selections: this.many(
        D.BRACE_L,
        this.parseSelection,
        D.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(D.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, r = this.parseName();
    let n, i;
    return this.expectOptionalToken(D.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(e, {
      kind: se.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(D.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const r = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(D.PAREN_L, r, D.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(D.COLON), this.node(r, {
      kind: se.ARGUMENT,
      name: n,
      value: this.parseValueLiteral(e)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const e = this._lexer.token;
    this.expectToken(D.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(D.NAME) ? this.node(e, {
      kind: se.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: se.INLINE_FRAGMENT,
      typeCondition: r ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const e = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
      kind: se.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: se.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(e) {
    const r = this._lexer.token;
    switch (r.kind) {
      case D.BRACKET_L:
        return this.parseList(e);
      case D.BRACE_L:
        return this.parseObject(e);
      case D.INT:
        return this.advanceLexer(), this.node(r, {
          kind: se.INT,
          value: r.value
        });
      case D.FLOAT:
        return this.advanceLexer(), this.node(r, {
          kind: se.FLOAT,
          value: r.value
        });
      case D.STRING:
      case D.BLOCK_STRING:
        return this.parseStringLiteral();
      case D.NAME:
        switch (this.advanceLexer(), r.value) {
          case "true":
            return this.node(r, {
              kind: se.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: se.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: se.NULL
            });
          default:
            return this.node(r, {
              kind: se.ENUM,
              value: r.value
            });
        }
      case D.DOLLAR:
        if (e)
          if (this.expectToken(D.DOLLAR), this._lexer.token.kind === D.NAME) {
            const n = this._lexer.token.value;
            throw wt(
              this._lexer.source,
              r.start,
              `Unexpected variable "$${n}" in constant value.`
            );
          } else
            throw this.unexpected(r);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const e = this._lexer.token;
    return this.advanceLexer(), this.node(e, {
      kind: se.STRING,
      value: e.value,
      block: e.kind === D.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(e) {
    const r = () => this.parseValueLiteral(e);
    return this.node(this._lexer.token, {
      kind: se.LIST,
      values: this.any(D.BRACKET_L, r, D.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(e) {
    const r = () => this.parseObjectField(e);
    return this.node(this._lexer.token, {
      kind: se.OBJECT,
      fields: this.any(D.BRACE_L, r, D.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(D.COLON), this.node(r, {
      kind: se.OBJECT_FIELD,
      name: n,
      value: this.parseValueLiteral(e)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(e) {
    const r = [];
    for (; this.peek(D.AT); )
      r.push(this.parseDirective(e));
    return r;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(e) {
    const r = this._lexer.token;
    return this.expectToken(D.AT), this.node(r, {
      kind: se.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(e)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const e = this._lexer.token;
    let r;
    if (this.expectOptionalToken(D.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(D.BRACKET_R), r = this.node(e, {
        kind: se.LIST_TYPE,
        type: n
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(D.BANG) ? this.node(e, {
      kind: se.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: se.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(D.STRING) || this.peek(D.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("schema");
    const n = this.parseConstDirectives(), i = this.many(
      D.BRACE_L,
      this.parseOperationTypeDefinition,
      D.BRACE_R
    );
    return this.node(e, {
      kind: se.SCHEMA_DEFINITION,
      description: r,
      directives: n,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const e = this._lexer.token, r = this.parseOperationType();
    this.expectToken(D.COLON);
    const n = this.parseNamedType();
    return this.node(e, {
      kind: se.OPERATION_TYPE_DEFINITION,
      operation: r,
      type: n
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("scalar");
    const n = this.parseName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: se.SCALAR_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("type");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    return this.node(e, {
      kind: se.OBJECT_TYPE_DEFINITION,
      description: r,
      name: n,
      interfaces: i,
      directives: a,
      fields: s
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(D.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      D.BRACE_L,
      this.parseFieldDefinition,
      D.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(D.COLON);
    const a = this.parseTypeReference(), s = this.parseConstDirectives();
    return this.node(e, {
      kind: se.FIELD_DEFINITION,
      description: r,
      name: n,
      arguments: i,
      type: a,
      directives: s
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      D.PAREN_L,
      this.parseInputValueDef,
      D.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseName();
    this.expectToken(D.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(D.EQUALS) && (a = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(e, {
      kind: se.INPUT_VALUE_DEFINITION,
      description: r,
      name: n,
      type: i,
      defaultValue: a,
      directives: s
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("interface");
    const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    return this.node(e, {
      kind: se.INTERFACE_TYPE_DEFINITION,
      description: r,
      name: n,
      interfaces: i,
      directives: a,
      fields: s
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("union");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseUnionMemberTypes();
    return this.node(e, {
      kind: se.UNION_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      types: a
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(D.EQUALS) ? this.delimitedMany(D.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("enum");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseEnumValuesDefinition();
    return this.node(e, {
      kind: se.ENUM_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      values: a
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      D.BRACE_L,
      this.parseEnumValueDefinition,
      D.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: se.ENUM_VALUE_DEFINITION,
      description: r,
      name: n,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw wt(
        this._lexer.source,
        this._lexer.token.start,
        `${Ms(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("input");
    const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseInputFieldsDefinition();
    return this.node(e, {
      kind: se.INPUT_OBJECT_TYPE_DEFINITION,
      description: r,
      name: n,
      directives: i,
      fields: a
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      D.BRACE_L,
      this.parseInputValueDef,
      D.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const e = this._lexer.lookahead();
    if (e.kind === D.NAME)
      switch (e.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(e);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const r = this.parseConstDirectives(), n = this.optionalMany(
      D.BRACE_L,
      this.parseOperationTypeDefinition,
      D.BRACE_R
    );
    if (r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.SCHEMA_EXTENSION,
      directives: r,
      operationTypes: n
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const r = this.parseName(), n = this.parseConstDirectives();
    if (n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.SCALAR_TYPE_EXTENSION,
      name: r,
      directives: n
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.OBJECT_TYPE_EXTENSION,
      name: r,
      interfaces: n,
      directives: i,
      fields: a
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    if (n.length === 0 && i.length === 0 && a.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.INTERFACE_TYPE_EXTENSION,
      name: r,
      interfaces: n,
      directives: i,
      fields: a
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.UNION_TYPE_EXTENSION,
      name: r,
      directives: n,
      types: i
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.ENUM_TYPE_EXTENSION,
      name: r,
      directives: n,
      values: i
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (n.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: se.INPUT_OBJECT_TYPE_EXTENSION,
      name: r,
      directives: n,
      fields: i
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const e = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(D.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(e, {
      kind: se.DIRECTIVE_DEFINITION,
      description: r,
      name: n,
      arguments: i,
      repeatable: a,
      locations: s
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(D.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const e = this._lexer.token, r = this.parseName();
    if (Object.prototype.hasOwnProperty.call(nc, r.value))
      return r;
    throw this.unexpected(e);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(e, r) {
    return this._options.noLocation !== !0 && (r.loc = new Sx(
      e,
      this._lexer.lastToken,
      this._lexer.source
    )), r;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(e) {
    return this._lexer.token.kind === e;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(e) {
    const r = this._lexer.token;
    if (r.kind === e)
      return this.advanceLexer(), r;
    throw wt(
      this._lexer.source,
      r.start,
      `Expected ${sy(e)}, found ${Ms(r)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(e) {
    return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(e) {
    const r = this._lexer.token;
    if (r.kind === D.NAME && r.value === e)
      this.advanceLexer();
    else
      throw wt(
        this._lexer.source,
        r.start,
        `Expected "${e}", found ${Ms(r)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const r = this._lexer.token;
    return r.kind === D.NAME && r.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const r = e ?? this._lexer.token;
    return wt(
      this._lexer.source,
      r.start,
      `Unexpected ${Ms(r)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(e, r, n) {
    this.expectToken(e);
    const i = [];
    for (; !this.expectOptionalToken(n); )
      i.push(r.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(e, r, n) {
    if (this.expectOptionalToken(e)) {
      const i = [];
      do
        i.push(r.call(this));
      while (!this.expectOptionalToken(n));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(e, r, n) {
    this.expectToken(e);
    const i = [];
    do
      i.push(r.call(this));
    while (!this.expectOptionalToken(n));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(e, r) {
    this.expectOptionalToken(e);
    const n = [];
    do
      n.push(r.call(this));
    while (this.expectOptionalToken(e));
    return n;
  }
  advanceLexer() {
    const { maxTokens: e } = this._options, r = this._lexer.advance();
    if (e !== void 0 && r.kind !== D.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw wt(
        this._lexer.source,
        r.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function Ms(t) {
  const e = t.value;
  return sy(t.kind) + (e != null ? ` "${e}"` : "");
}
function sy(t) {
  return Rx(t) ? `"${t}"` : t;
}
function Xx(t) {
  return `"${t.replace(ek, tk)}"`;
}
const ek = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function tk(t) {
  return rk[t.charCodeAt(0)];
}
const rk = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], xf = Object.freeze({});
function Fr(t, e, r = Xv) {
  const n = /* @__PURE__ */ new Map();
  for (const v of Object.values(se))
    n.set(v, nk(e, v));
  let i, a = Array.isArray(t), s = [t], o = -1, u = [], l = t, c, f;
  const h = [], d = [];
  do {
    o++;
    const v = o === s.length, b = v && u.length !== 0;
    if (v) {
      if (c = d.length === 0 ? void 0 : h[h.length - 1], l = f, f = d.pop(), b)
        if (a) {
          l = l.slice();
          let x = 0;
          for (const [w, S] of u) {
            const A = w - x;
            S === null ? (l.splice(A, 1), x++) : l[A] = S;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [x, w] of u)
            l[x] = w;
        }
      o = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (f) {
      if (c = a ? o : s[o], l = f[c], l == null)
        continue;
      h.push(c);
    }
    let g;
    if (!Array.isArray(l)) {
      var p, m;
      _h(l) || Ys(!1, `Invalid AST Node: ${Ef(l)}.`);
      const x = v ? (p = n.get(l.kind)) === null || p === void 0 ? void 0 : p.leave : (m = n.get(l.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (g = x == null ? void 0 : x.call(e, l, c, f, h, d), g === xf)
        break;
      if (g === !1) {
        if (!v) {
          h.pop();
          continue;
        }
      } else if (g !== void 0 && (u.push([c, g]), !v))
        if (_h(g))
          l = g;
        else {
          h.pop();
          continue;
        }
    }
    if (g === void 0 && b && u.push([c, l]), v)
      h.pop();
    else {
      var y;
      i = {
        inArray: a,
        index: o,
        keys: s,
        edits: u,
        prev: i
      }, a = Array.isArray(l), s = a ? l : (y = r[l.kind]) !== null && y !== void 0 ? y : [], o = -1, u = [], f && d.push(f), f = l;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : t;
}
function nk(t, e) {
  const r = t[e];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: t.enter,
    leave: t.leave
  };
}
function ik(t) {
  return Fr(t, sk);
}
const ak = 80, sk = {
  Name: {
    leave: (t) => t.value
  },
  Variable: {
    leave: (t) => "$" + t.name
  },
  // Document
  Document: {
    leave: (t) => oe(t.definitions, `

`)
  },
  OperationDefinition: {
    leave(t) {
      const e = Ae("(", oe(t.variableDefinitions, ", "), ")"), r = oe(
        [
          t.operation,
          oe([t.name, e]),
          oe(t.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + t.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: t, type: e, defaultValue: r, directives: n }) => t + ": " + e + Ae(" = ", r) + Ae(" ", oe(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: t }) => er(t)
  },
  Field: {
    leave({ alias: t, name: e, arguments: r, directives: n, selectionSet: i }) {
      const a = Ae("", t, ": ") + e;
      let s = a + Ae("(", oe(r, ", "), ")");
      return s.length > ak && (s = a + Ae(`(
`, Qs(oe(r, `
`)), `
)`)), oe([s, oe(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: t, directives: e }) => "..." + t + Ae(" ", oe(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: t, directives: e, selectionSet: r }) => oe(
      [
        "...",
        Ae("on ", t),
        oe(e, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: t, typeCondition: e, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${t}${Ae("(", oe(r, ", "), ")")} on ${e} ${Ae("", oe(n, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: t }) => t
  },
  FloatValue: {
    leave: ({ value: t }) => t
  },
  StringValue: {
    leave: ({ value: t, block: e }) => e ? Nx(t) : Xx(t)
  },
  BooleanValue: {
    leave: ({ value: t }) => t ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: t }) => t
  },
  ListValue: {
    leave: ({ values: t }) => "[" + oe(t, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: t }) => "{" + oe(t, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: t, arguments: e }) => "@" + t + Ae("(", oe(e, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: t }) => t
  },
  ListType: {
    leave: ({ type: t }) => "[" + t + "]"
  },
  NonNullType: {
    leave: ({ type: t }) => t + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: t, directives: e, operationTypes: r }) => Ae("", t, `
`) + oe(["schema", oe(e, " "), er(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: t, type: e }) => t + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: t, name: e, directives: r }) => Ae("", t, `
`) + oe(["scalar", e, oe(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => Ae("", t, `
`) + oe(
      [
        "type",
        e,
        Ae("implements ", oe(r, " & ")),
        oe(n, " "),
        er(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: t, name: e, arguments: r, type: n, directives: i }) => Ae("", t, `
`) + e + (Oh(r) ? Ae(`(
`, Qs(oe(r, `
`)), `
)`) : Ae("(", oe(r, ", "), ")")) + ": " + n + Ae(" ", oe(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: t, name: e, type: r, defaultValue: n, directives: i }) => Ae("", t, `
`) + oe(
      [e + ": " + r, Ae("= ", n), oe(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => Ae("", t, `
`) + oe(
      [
        "interface",
        e,
        Ae("implements ", oe(r, " & ")),
        oe(n, " "),
        er(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, types: n }) => Ae("", t, `
`) + oe(
      ["union", e, oe(r, " "), Ae("= ", oe(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, values: n }) => Ae("", t, `
`) + oe(["enum", e, oe(r, " "), er(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: t, name: e, directives: r }) => Ae("", t, `
`) + oe([e, oe(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, fields: n }) => Ae("", t, `
`) + oe(["input", e, oe(r, " "), er(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: t, name: e, arguments: r, repeatable: n, locations: i }) => Ae("", t, `
`) + "directive @" + e + (Oh(r) ? Ae(`(
`, Qs(oe(r, `
`)), `
)`) : Ae("(", oe(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + oe(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: t, operationTypes: e }) => oe(
      ["extend schema", oe(t, " "), er(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: t, directives: e }) => oe(["extend scalar", t, oe(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => oe(
      [
        "extend type",
        t,
        Ae("implements ", oe(e, " & ")),
        oe(r, " "),
        er(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => oe(
      [
        "extend interface",
        t,
        Ae("implements ", oe(e, " & ")),
        oe(r, " "),
        er(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: t, directives: e, types: r }) => oe(
      [
        "extend union",
        t,
        oe(e, " "),
        Ae("= ", oe(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: t, directives: e, values: r }) => oe(["extend enum", t, oe(e, " "), er(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: t, directives: e, fields: r }) => oe(["extend input", t, oe(e, " "), er(r)], " ")
  }
};
function oe(t, e = "") {
  var r;
  return (r = t == null ? void 0 : t.filter((n) => n).join(e)) !== null && r !== void 0 ? r : "";
}
function er(t) {
  return Ae(`{
`, Qs(oe(t, `
`)), `
}`);
}
function Ae(t, e, r = "") {
  return e != null && e !== "" ? t + e + r : "";
}
function Qs(t) {
  return Ae("  ", t.replace(/\n/g, `
  `));
}
function Oh(t) {
  var e;
  return (e = t == null ? void 0 : t.some((r) => r.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function Ch(t) {
  return t.kind === se.FIELD || t.kind === se.FRAGMENT_SPREAD || t.kind === se.INLINE_FRAGMENT;
}
function Ga(t, e) {
  var r = t.directives;
  return !r || !r.length ? !0 : lk(r).every(function(n) {
    var i = n.directive, a = n.ifArgument, s = !1;
    return a.value.kind === "Variable" ? (s = e && e[a.value.name.value], me(s !== void 0, 68, i.name.value)) : s = a.value.value, i.name.value === "skip" ? !s : s;
  });
}
function Aa(t, e, r) {
  var n = new Set(t), i = n.size;
  return Fr(e, {
    Directive: function(a) {
      if (n.delete(a.name.value) && (!r || !n.size))
        return xf;
    }
  }), r ? !n.size : n.size < i;
}
function ok(t) {
  return t && Aa(["client", "export"], t, !0);
}
function uk(t) {
  var e = t.name.value;
  return e === "skip" || e === "include";
}
function lk(t) {
  var e = [];
  return t && t.length && t.forEach(function(r) {
    if (uk(r)) {
      var n = r.arguments, i = r.name.value;
      me(n && n.length === 1, 69, i);
      var a = n[0];
      me(a.name && a.name.value === "if", 70, i);
      var s = a.value;
      me(s && (s.kind === "Variable" || s.kind === "BooleanValue"), 71, i), e.push({ directive: r, ifArgument: a });
    }
  }), e;
}
const ck = () => /* @__PURE__ */ Object.create(null), { forEach: fk, slice: Ih } = Array.prototype, { hasOwnProperty: dk } = Object.prototype;
let Wi = class oy {
  constructor(e = !0, r = ck) {
    this.weakness = e, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let r = this;
    return fk.call(e, (n) => r = r.getChildTrie(n)), dk.call(r, "data") ? r.data : r.data = this.makeData(Ih.call(e));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(e) {
    let r = this;
    for (let n = 0, i = e.length; r && n < i; ++n) {
      const a = r.mapFor(e[n], !1);
      r = a && a.get(e[n]);
    }
    return r && r.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(e) {
    let r;
    if (e.length) {
      const n = e[0], i = this.mapFor(n, !1), a = i && i.get(n);
      a && (r = a.removeArray(Ih.call(e, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
    } else
      r = this.data, delete this.data;
    return r;
  }
  getChildTrie(e) {
    const r = this.mapFor(e, !0);
    let n = r.get(e);
    return n || r.set(e, n = new oy(this.weakness, this.makeData)), n;
  }
  mapFor(e, r) {
    return this.weakness && hk(e) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function hk(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var qi = typeof WeakMap == "function" && !tr(function() {
  return navigator.product == "ReactNative" && !global.HermesInternal;
}), uy = typeof WeakSet == "function", kf = typeof Symbol == "function" && typeof Symbol.for == "function", au = kf && Symbol.asyncIterator;
tr(function() {
  return window.document.createElement;
});
tr(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function rt(t) {
  return t !== null && typeof t == "object";
}
function pk(t, e) {
  var r = e, n = [];
  t.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw Dt(
        72,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof r > "u" && (me(n.length === 1, 73, n.length), r = n[0].name.value);
  var i = T(T({}, t), { definitions: sr([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: r
            }
          }
        ]
      }
    }
  ], t.definitions, !0) });
  return i;
}
function su(t) {
  t === void 0 && (t = []);
  var e = {};
  return t.forEach(function(r) {
    e[r.name.value] = r;
  }), e;
}
function ou(t, e) {
  switch (t.kind) {
    case "InlineFragment":
      return t;
    case "FragmentSpread": {
      var r = t.name.value;
      if (typeof e == "function")
        return e(r);
      var n = e && e[r];
      return me(n, 74, r), n || null;
    }
    default:
      return null;
  }
}
function mk() {
}
class ac {
  constructor(e = 1 / 0, r = mk) {
    this.max = e, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const r = this.getNode(e);
    return r && r.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(e) {
    const r = this.map.get(e);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(e, r) {
    let n = this.getNode(e);
    return n ? n.value = r : (n = {
      key: e,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(e) {
    const r = this.map.get(e);
    return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(e), this.dispose(r.value, e), !0) : !1;
  }
}
function sc() {
}
const vk = sc, yk = typeof WeakRef < "u" ? WeakRef : function(t) {
  return { deref: () => t };
}, gk = typeof WeakMap < "u" ? WeakMap : Map, bk = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: sc,
    unregister: sc
  };
}, wk = 10024;
class vo {
  constructor(e = 1 / 0, r = vk) {
    this.max = e, this.dispose = r, this.map = new gk(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < wk; i++) {
        const a = n.next().value;
        if (!a)
          break;
        this.unfinalizedNodes.delete(a);
        const s = a.key;
        delete a.key, a.keyRef = new yk(s), this.registry.register(s, a, a);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new bk(this.deleteNode.bind(this));
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const r = this.getNode(e);
    return r && r.value;
  }
  getNode(e) {
    const r = this.map.get(e);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(e, r) {
    let n = this.getNode(e);
    return n ? n.value = r : (n = {
      key: e,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(e, n), this.size++, n.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(e) {
    e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
    const r = e.key || e.keyRef && e.keyRef.deref();
    this.dispose(e.value, r), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), r && this.map.delete(r);
  }
  delete(e) {
    const r = this.map.get(e);
    return r ? (this.deleteNode(r), !0) : !1;
  }
  scheduleFinalization(e) {
    this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
var Ku = /* @__PURE__ */ new WeakSet();
function ly(t) {
  t.size <= (t.max || -1) || Ku.has(t) || (Ku.add(t), setTimeout(function() {
    t.clean(), Ku.delete(t);
  }, 100));
}
var Tf = function(t, e) {
  var r = new vo(t, e);
  return r.set = function(n, i) {
    var a = vo.prototype.set.call(this, n, i);
    return ly(this), a;
  }, r;
}, Ek = function(t, e) {
  var r = new ac(t, e);
  return r.set = function(n, i) {
    var a = ac.prototype.set.call(this, n, i);
    return ly(this), a;
  }, r;
}, xk = Symbol.for("apollo.cacheSize"), vr = T({}, ec[xk]), kn = {};
function _f(t, e) {
  kn[t] = e;
}
var kk = globalThis.__DEV__ !== !1 ? Ok : void 0, Tk = globalThis.__DEV__ !== !1 ? Ck : void 0, _k = globalThis.__DEV__ !== !1 ? cy : void 0;
function Sk() {
  var t = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(t).map(function(e) {
    var r = e[0], n = e[1];
    return [
      r,
      vr[r] || n
    ];
  }));
}
function Ok() {
  var t, e, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: Sk(),
    sizes: T({ print: (t = kn.print) === null || t === void 0 ? void 0 : t.call(kn), parser: (e = kn.parser) === null || e === void 0 ? void 0 : e.call(kn), canonicalStringify: (r = kn.canonicalStringify) === null || r === void 0 ? void 0 : r.call(kn), links: uc(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: dy(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function cy() {
  return {
    cache: {
      fragmentQueryDocuments: Jr(this.getFragmentDoc)
    }
  };
}
function Ck() {
  var t = this.config.fragments;
  return T(T({}, cy.apply(this)), { addTypenameDocumentTransform: dy(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: Jr(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: Jr(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: Jr(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: Jr(t == null ? void 0 : t.findFragmentSpreads),
    lookup: Jr(t == null ? void 0 : t.lookup),
    transform: Jr(t == null ? void 0 : t.transform)
  } });
}
function Ik(t) {
  return !!t && "dirtyKey" in t;
}
function Jr(t) {
  return Ik(t) ? t.size : void 0;
}
function fy(t) {
  return t != null;
}
function dy(t) {
  return oc(t).map(function(e) {
    return { cache: e };
  });
}
function oc(t) {
  return t ? sr(sr([
    Jr(t == null ? void 0 : t.performWork)
  ], oc(t == null ? void 0 : t.left), !0), oc(t == null ? void 0 : t.right), !0).filter(fy) : [];
}
function uc(t) {
  var e;
  return t ? sr(sr([
    (e = t == null ? void 0 : t.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)
  ], uc(t == null ? void 0 : t.left), !0), uc(t == null ? void 0 : t.right), !0).filter(fy) : [];
}
var sn = Object.assign(function(e) {
  return JSON.stringify(e, Ak);
}, {
  reset: function() {
    li = new Ek(
      vr.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && _f("canonicalStringify", function() {
  return li.size;
});
var li;
sn.reset();
function Ak(t, e) {
  if (e && typeof e == "object") {
    var r = Object.getPrototypeOf(e);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(e);
      if (n.every(Nk))
        return e;
      var i = JSON.stringify(n), a = li.get(i);
      if (!a) {
        n.sort();
        var s = JSON.stringify(n);
        a = li.get(s) || n, li.set(i, a), li.set(s, a);
      }
      var o = Object.create(r);
      return a.forEach(function(u) {
        o[u] = e[u];
      }), o;
    }
  }
  return e;
}
function Nk(t, e, r) {
  return e === 0 || r[e - 1] <= t;
}
function yi(t) {
  return { __ref: String(t) };
}
function ze(t) {
  return !!(t && typeof t == "object" && typeof t.__ref == "string");
}
function Dk(t) {
  return rt(t) && t.kind === "Document" && Array.isArray(t.definitions);
}
function Rk(t) {
  return t.kind === "StringValue";
}
function Pk(t) {
  return t.kind === "BooleanValue";
}
function Mk(t) {
  return t.kind === "IntValue";
}
function Fk(t) {
  return t.kind === "FloatValue";
}
function Lk(t) {
  return t.kind === "Variable";
}
function $k(t) {
  return t.kind === "ObjectValue";
}
function jk(t) {
  return t.kind === "ListValue";
}
function Vk(t) {
  return t.kind === "EnumValue";
}
function zk(t) {
  return t.kind === "NullValue";
}
function Ti(t, e, r, n) {
  if (Mk(r) || Fk(r))
    t[e.value] = Number(r.value);
  else if (Pk(r) || Rk(r))
    t[e.value] = r.value;
  else if ($k(r)) {
    var i = {};
    r.fields.map(function(s) {
      return Ti(i, s.name, s.value, n);
    }), t[e.value] = i;
  } else if (Lk(r)) {
    var a = (n || {})[r.name.value];
    t[e.value] = a;
  } else if (jk(r))
    t[e.value] = r.values.map(function(s) {
      var o = {};
      return Ti(o, e, s, n), o[e.value];
    });
  else if (Vk(r))
    t[e.value] = r.value;
  else if (zk(r))
    t[e.value] = null;
  else
    throw Dt(83, e.value, r.kind);
}
function Wk(t, e) {
  var r = null;
  t.directives && (r = {}, t.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var s = a.name, o = a.value;
      return Ti(r[i.name.value], s, o, e);
    });
  }));
  var n = null;
  return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
    var a = i.name, s = i.value;
    return Ti(n, a, s, e);
  })), hy(t.name.value, n, r);
}
var qk = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Gi = sn, hy = Object.assign(function(t, e, r) {
  if (e && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(o) {
        i[o] = e[o];
      }), "".concat(r.connection.key, "(").concat(Gi(i), ")");
    } else
      return r.connection.key;
  var a = t;
  if (e) {
    var s = Gi(e);
    a += "(".concat(s, ")");
  }
  return r && Object.keys(r).forEach(function(o) {
    qk.indexOf(o) === -1 && (r[o] && Object.keys(r[o]).length ? a += "@".concat(o, "(").concat(Gi(r[o]), ")") : a += "@".concat(o));
  }), a;
}, {
  setStringify: function(t) {
    var e = Gi;
    return Gi = t, e;
  }
});
function uu(t, e) {
  if (t.arguments && t.arguments.length) {
    var r = {};
    return t.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return Ti(r, i, a, e);
    }), r;
  }
  return null;
}
function cn(t) {
  return t.alias ? t.alias.value : t.name.value;
}
function lc(t, e, r) {
  for (var n, i = 0, a = e.selections; i < a.length; i++) {
    var s = a[i];
    if (fn(s)) {
      if (s.name.value === "__typename")
        return t[cn(s)];
    } else
      n ? n.push(s) : n = [s];
  }
  if (typeof t.__typename == "string")
    return t.__typename;
  if (n)
    for (var o = 0, u = n; o < u.length; o++) {
      var s = u[o], l = lc(t, ou(s, r).selectionSet, r);
      if (typeof l == "string")
        return l;
    }
}
function fn(t) {
  return t.kind === "Field";
}
function Uk(t) {
  return t.kind === "InlineFragment";
}
function Ja(t) {
  me(t && t.kind === "Document", 75);
  var e = t.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw Dt(76, r.kind);
    return r;
  });
  return me(e.length <= 1, 77, e.length), t;
}
function Ka(t) {
  return Ja(t), t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function cc(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function lu(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function py(t) {
  var e = Ka(t);
  return me(e && e.operation === "query", 78), e;
}
function Bk(t) {
  me(t.kind === "Document", 79), me(t.definitions.length <= 1, 80);
  var e = t.definitions[0];
  return me(e.kind === "FragmentDefinition", 81), e;
}
function Xa(t) {
  Ja(t);
  for (var e, r = 0, n = t.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var a = i.operation;
      if (a === "query" || a === "mutation" || a === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !e && (e = i);
  }
  if (e)
    return e;
  throw Dt(82);
}
function Sf(t) {
  var e = /* @__PURE__ */ Object.create(null), r = t && t.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && Ti(e, n.variable.name, n.defaultValue);
  }), e;
}
const Hk = () => /* @__PURE__ */ Object.create(null), { forEach: Yk, slice: Qk } = Array.prototype, { hasOwnProperty: Zk } = Object.prototype;
class Of {
  constructor(e = !0, r = Hk) {
    this.weakness = e, this.makeData = r;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let r = this;
    return Yk.call(e, (n) => r = r.getChildTrie(n)), Zk.call(r, "data") ? r.data : r.data = this.makeData(Qk.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let r = this;
    for (let n = 0, i = e.length; r && n < i; ++n) {
      const a = this.weakness && Ah(e[n]) ? r.weak : r.strong;
      r = a && a.get(e[n]);
    }
    return r && r.data;
  }
  getChildTrie(e) {
    const r = this.weakness && Ah(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(e);
    return n || r.set(e, n = new Of(this.weakness, this.makeData)), n;
  }
}
function Ah(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let Et = null;
const Nh = {};
let Gk = 1;
const Jk = () => class {
  constructor() {
    this.id = [
      "slot",
      Gk++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = Et; e; e = e.parent)
      if (this.id in e.slots) {
        const r = e.slots[this.id];
        if (r === Nh)
          break;
        return e !== Et && (Et.slots[this.id] = r), !0;
      }
    return Et && (Et.slots[this.id] = Nh), !1;
  }
  getValue() {
    if (this.hasValue())
      return Et.slots[this.id];
  }
  withValue(e, r, n, i) {
    const a = {
      __proto__: null,
      [this.id]: e
    }, s = Et;
    Et = { parent: s, slots: a };
    try {
      return r.apply(i, n);
    } finally {
      Et = s;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(e) {
    const r = Et;
    return function() {
      const n = Et;
      try {
        return Et = r, e.apply(this, arguments);
      } finally {
        Et = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(e, r, n) {
    if (Et) {
      const i = Et;
      try {
        return Et = null, e.apply(n, r);
      } finally {
        Et = i;
      }
    } else
      return e.apply(n, r);
  }
};
function Dh(t) {
  try {
    return t();
  } catch {
  }
}
const Xu = "@wry/context:Slot", Kk = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Dh(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Dh(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Rh = Kk, my = Rh[Xu] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Xu] || function(t) {
  try {
    Object.defineProperty(Rh, Xu, {
      value: t,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return t;
  }
}(Jk()), cu = new my(), { hasOwnProperty: Xk } = Object.prototype, Cf = Array.from || function(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
};
function If(t) {
  const { unsubscribe: e } = t;
  typeof e == "function" && (t.unsubscribe = void 0, e());
}
const Na = [], eT = 100;
function _i(t, e) {
  if (!t)
    throw new Error(e || "assertion failure");
}
function vy(t, e) {
  const r = t.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === e.length && // The underlying value or exception must be the same.
    t[r - 1] === e[r - 1]
  );
}
function yy(t) {
  switch (t.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return t[0];
    case 2:
      throw t[1];
  }
}
function gy(t) {
  return t.slice(0);
}
class fu {
  constructor(e) {
    this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++fu.count;
  }
  peek() {
    if (this.value.length === 1 && !dn(this))
      return Ph(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(e) {
    return _i(!this.recomputing, "already recomputing"), Ph(this), dn(this) ? tT(this, e) : yy(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, by(this), If(this));
  }
  dispose() {
    this.setDirty(), Ty(this), Af(this, (e, r) => {
      e.setDirty(), _y(e, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(e) {
    e.add(this), this.deps || (this.deps = Na.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
  }
  forgetDeps() {
    this.deps && (Cf(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), Na.push(this.deps), this.deps = null);
  }
}
fu.count = 0;
function Ph(t) {
  const e = cu.getValue();
  if (e)
    return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), dn(t) ? Ey(e, t) : xy(e, t), e;
}
function tT(t, e) {
  return Ty(t), cu.withValue(t, rT, [t, e]), iT(t, e) && nT(t), yy(t.value);
}
function rT(t, e) {
  t.recomputing = !0;
  const { normalizeResult: r } = t;
  let n;
  r && t.value.length === 1 && (n = gy(t.value)), t.value.length = 0;
  try {
    if (t.value[0] = t.fn.apply(null, e), r && n && !vy(n, t.value))
      try {
        t.value[0] = r(t.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    t.value[1] = i;
  }
  t.recomputing = !1;
}
function dn(t) {
  return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
}
function nT(t) {
  t.dirty = !1, !dn(t) && wy(t);
}
function by(t) {
  Af(t, Ey);
}
function wy(t) {
  Af(t, xy);
}
function Af(t, e) {
  const r = t.parents.size;
  if (r) {
    const n = Cf(t.parents);
    for (let i = 0; i < r; ++i)
      e(n[i], t);
  }
}
function Ey(t, e) {
  _i(t.childValues.has(e)), _i(dn(e));
  const r = !dn(t);
  if (!t.dirtyChildren)
    t.dirtyChildren = Na.pop() || /* @__PURE__ */ new Set();
  else if (t.dirtyChildren.has(e))
    return;
  t.dirtyChildren.add(e), r && by(t);
}
function xy(t, e) {
  _i(t.childValues.has(e)), _i(!dn(e));
  const r = t.childValues.get(e);
  r.length === 0 ? t.childValues.set(e, gy(e.value)) : vy(r, e.value) || t.setDirty(), ky(t, e), !dn(t) && wy(t);
}
function ky(t, e) {
  const r = t.dirtyChildren;
  r && (r.delete(e), r.size === 0 && (Na.length < eT && Na.push(r), t.dirtyChildren = null));
}
function Ty(t) {
  t.childValues.size > 0 && t.childValues.forEach((e, r) => {
    _y(t, r);
  }), t.forgetDeps(), _i(t.dirtyChildren === null);
}
function _y(t, e) {
  e.parents.delete(t), t.childValues.delete(e), ky(t, e);
}
function iT(t, e) {
  if (typeof t.subscribe == "function")
    try {
      If(t), t.unsubscribe = t.subscribe.apply(null, e);
    } catch {
      return t.setDirty(), !1;
    }
  return !0;
}
const aT = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Sy(t) {
  const e = /* @__PURE__ */ new Map();
  function r(n) {
    const i = cu.getValue();
    if (i) {
      let a = e.get(n);
      a || e.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return r.dirty = function(i, a) {
    const s = e.get(i);
    if (s) {
      const o = a && Xk.call(aT, a) ? a : "setDirty";
      Cf(s).forEach((u) => u[o]()), e.delete(i), If(s);
    }
  }, r;
}
let Mh;
function sT(...t) {
  return (Mh || (Mh = new Of(typeof WeakMap == "function"))).lookupArray(t);
}
const el = /* @__PURE__ */ new Set();
function Da(t, { max: e = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = sT, normalizeResult: i, subscribe: a, cache: s = ac } = /* @__PURE__ */ Object.create(null)) {
  const o = typeof s == "function" ? new s(e, (h) => h.dispose()) : s, u = function() {
    const h = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (h === void 0)
      return t.apply(null, arguments);
    let d = o.get(h);
    d || (o.set(h, d = new fu(t)), d.normalizeResult = i, d.subscribe = a, d.forget = () => o.delete(h));
    const p = d.recompute(Array.prototype.slice.call(arguments));
    return o.set(h, d), el.add(o), cu.hasValue() || (el.forEach((m) => m.clean()), el.clear()), p;
  };
  Object.defineProperty(u, "size", {
    get: () => o.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(u.options = {
    max: e,
    keyArgs: r,
    makeCacheKey: n,
    normalizeResult: i,
    subscribe: a,
    cache: o
  });
  function l(h) {
    const d = h && o.get(h);
    d && d.setDirty();
  }
  u.dirtyKey = l, u.dirty = function() {
    l(n.apply(null, arguments));
  };
  function c(h) {
    const d = h && o.get(h);
    if (d)
      return d.peek();
  }
  u.peekKey = c, u.peek = function() {
    return c(n.apply(null, arguments));
  };
  function f(h) {
    return h ? o.delete(h) : !1;
  }
  return u.forgetKey = f, u.forget = function() {
    return f(n.apply(null, arguments));
  }, u.makeCacheKey = n, u.getKey = r ? function() {
    return n.apply(null, r.apply(null, arguments));
  } : n, Object.freeze(u);
}
function oT(t) {
  return t;
}
var Oy = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = uy ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
    }
    return t.prototype.getCacheKey = function(e) {
      return [e];
    }, t.identity = function() {
      return new t(oT, { cache: !1 });
    }, t.split = function(e, r, n) {
      return n === void 0 && (n = t.identity()), Object.assign(new t(
        function(i) {
          var a = e(i) ? r : n;
          return a.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: r, right: n });
    }, t.prototype.resetCache = function() {
      var e = this;
      if (this.cached) {
        var r = new Wi(qi);
        this.performWork = Da(t.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = e.getCacheKey(n);
            if (i)
              return me(Array.isArray(i), 67), r.lookupArray(i);
          },
          max: vr["documentTransform.cache"],
          cache: vo
        });
      }
    }, t.prototype.performWork = function(e) {
      return Ja(e), this.transform(e);
    }, t.prototype.transformDocument = function(e) {
      if (this.resultCache.has(e))
        return e;
      var r = this.performWork(e);
      return this.resultCache.add(r), r;
    }, t.prototype.concat = function(e) {
      var r = this;
      return Object.assign(new t(
        function(n) {
          return e.transformDocument(r.transformDocument(n));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: e
      });
    }, t;
  }()
), da, du = Object.assign(function(t) {
  var e = da.get(t);
  return e || (e = ik(t), da.set(t, e)), e;
}, {
  reset: function() {
    da = new Tf(
      vr.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
du.reset();
globalThis.__DEV__ !== !1 && _f("print", function() {
  return da ? da.size : 0;
});
var nt = Array.isArray;
function yr(t) {
  return Array.isArray(t) && t.length > 0;
}
var Fh = {
  kind: se.FIELD,
  name: {
    kind: se.NAME,
    value: "__typename"
  }
};
function Cy(t, e) {
  return !t || t.selectionSet.selections.every(function(r) {
    return r.kind === se.FRAGMENT_SPREAD && Cy(e[r.name.value], e);
  });
}
function uT(t) {
  return Cy(Ka(t) || Bk(t), su(lu(t))) ? null : t;
}
function lT(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    n && (n.name ? e.set(n.name, n) : n.test && r.set(n.test, n));
  }), function(n) {
    var i = e.get(n.name.value);
    return !i && r.size && r.forEach(function(a, s) {
      s(n) && (i = a);
    }), i;
  };
}
function Lh(t) {
  var e = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = t);
    var i = e.get(n);
    return i || e.set(n, i = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function Iy(t, e) {
  Ja(e);
  for (var r = Lh(""), n = Lh(""), i = function(v) {
    for (var b = 0, g = void 0; b < v.length && (g = v[b]); ++b)
      if (!nt(g)) {
        if (g.kind === se.OPERATION_DEFINITION)
          return r(g.name && g.name.value);
        if (g.kind === se.FRAGMENT_DEFINITION)
          return n(g.name.value);
      }
    return globalThis.__DEV__ !== !1 && me.error(84), null;
  }, a = 0, s = e.definitions.length - 1; s >= 0; --s)
    e.definitions[s].kind === se.OPERATION_DEFINITION && ++a;
  var o = lT(t), u = function(v) {
    return yr(v) && v.map(o).some(function(b) {
      return b && b.remove;
    });
  }, l = /* @__PURE__ */ new Map(), c = !1, f = {
    enter: function(v) {
      if (u(v.directives))
        return c = !0, null;
    }
  }, h = Fr(e, {
    // These two AST node types share the same implementation, defined above.
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(v, b, g, x, w) {
        var S = i(w);
        S && S.variables.add(v.name.value);
      }
    },
    FragmentSpread: {
      enter: function(v, b, g, x, w) {
        if (u(v.directives))
          return c = !0, null;
        var S = i(w);
        S && S.fragmentSpreads.add(v.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(v, b, g, x) {
        l.set(JSON.stringify(x), v);
      },
      leave: function(v, b, g, x) {
        var w = l.get(JSON.stringify(x));
        if (v === w)
          return v;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          a > 0 && v.selectionSet.selections.every(function(S) {
            return S.kind === se.FIELD && S.name.value === "__typename";
          })
        )
          return n(v.name.value).removed = !0, c = !0, null;
      }
    },
    Directive: {
      leave: function(v) {
        if (o(v))
          return c = !0, null;
      }
    }
  });
  if (!c)
    return e;
  var d = function(v) {
    return v.transitiveVars || (v.transitiveVars = new Set(v.variables), v.removed || v.fragmentSpreads.forEach(function(b) {
      d(n(b)).transitiveVars.forEach(function(g) {
        v.transitiveVars.add(g);
      });
    })), v;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(v) {
    v.kind === se.OPERATION_DEFINITION ? d(r(v.name && v.name.value)).fragmentSpreads.forEach(function(b) {
      p.add(b);
    }) : v.kind === se.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !n(v.name.value).removed && p.add(v.name.value);
  }), p.forEach(function(v) {
    d(n(v)).fragmentSpreads.forEach(function(b) {
      p.add(b);
    });
  });
  var m = function(v) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!p.has(v) || n(v).removed);
  }, y = {
    enter: function(v) {
      if (m(v.name.value))
        return null;
    }
  };
  return uT(Fr(h, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: y,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: y,
    OperationDefinition: {
      leave: function(v) {
        if (v.variableDefinitions) {
          var b = d(
            // If an operation is anonymous, we use the empty string as its key.
            r(v.name && v.name.value)
          ).transitiveVars;
          if (b.size < v.variableDefinitions.length)
            return T(T({}, v), { variableDefinitions: v.variableDefinitions.filter(function(g) {
              return b.has(g.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Nf = Object.assign(function(t) {
  return Fr(t, {
    SelectionSet: {
      enter: function(e, r, n) {
        if (!(n && n.kind === se.OPERATION_DEFINITION)) {
          var i = e.selections;
          if (i) {
            var a = i.some(function(o) {
              return fn(o) && (o.name.value === "__typename" || o.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var s = n;
              if (!(fn(s) && s.directives && s.directives.some(function(o) {
                return o.name.value === "export";
              })))
                return T(T({}, e), { selections: sr(sr([], i, !0), [Fh], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(t) {
    return t === Fh;
  }
});
function cT(t) {
  var e = Xa(t), r = e.operation;
  if (r === "query")
    return t;
  var n = Fr(t, {
    OperationDefinition: {
      enter: function(i) {
        return T(T({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Ay(t) {
  Ja(t);
  var e = Iy([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], t);
  return e;
}
var fT = Object.prototype.hasOwnProperty;
function $h() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return hu(t);
}
function hu(t) {
  var e = t[0] || {}, r = t.length;
  if (r > 1)
    for (var n = new hn(), i = 1; i < r; ++i)
      e = n.merge(e, t[i]);
  return e;
}
var dT = function(t, e, r) {
  return this.merge(t[r], e[r]);
}, hn = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = dT), this.reconciler = e, this.isObject = rt, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return t.prototype.merge = function(e, r) {
      for (var n = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return rt(r) && rt(e) ? (Object.keys(r).forEach(function(s) {
        if (fT.call(e, s)) {
          var o = e[s];
          if (r[s] !== o) {
            var u = n.reconciler.apply(n, sr([
              e,
              r,
              s
            ], i, !1));
            u !== o && (e = n.shallowCopyForMerge(e), e[s] = u);
          }
        } else
          e = n.shallowCopyForMerge(e), e[s] = r[s];
      }), e) : r;
    }, t.prototype.shallowCopyForMerge = function(e) {
      return rt(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = T({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
    }, t;
  }()
);
function hT(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r)
    return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = pT(t)) || e) {
    r && (t = r);
    var n = 0;
    return function() {
      return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pT(t, e) {
  if (t) {
    if (typeof t == "string")
      return jh(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return jh(t, e);
  }
}
function jh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Vh(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Df(t, e, r) {
  return e && Vh(t.prototype, e), r && Vh(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var Rf = function() {
  return typeof Symbol == "function";
}, Pf = function(t) {
  return Rf() && !!Symbol[t];
}, Mf = function(t) {
  return Pf(t) ? Symbol[t] : "@@" + t;
};
Rf() && !Pf("observable") && (Symbol.observable = Symbol("observable"));
var mT = Mf("iterator"), fc = Mf("observable"), Ny = Mf("species");
function yo(t, e) {
  var r = t[e];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function Ji(t) {
  var e = t.constructor;
  return e !== void 0 && (e = e[Ny], e === null && (e = void 0)), e !== void 0 ? e : Ve;
}
function vT(t) {
  return t instanceof Ve;
}
function Si(t) {
  Si.log ? Si.log(t) : setTimeout(function() {
    throw t;
  });
}
function Zs(t) {
  Promise.resolve().then(function() {
    try {
      t();
    } catch (e) {
      Si(e);
    }
  });
}
function Dy(t) {
  var e = t._cleanup;
  if (e !== void 0 && (t._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var r = yo(e, "unsubscribe");
        r && r.call(e);
      }
    } catch (n) {
      Si(n);
    }
}
function dc(t) {
  t._observer = void 0, t._queue = void 0, t._state = "closed";
}
function yT(t) {
  var e = t._queue;
  if (e) {
    t._queue = void 0, t._state = "ready";
    for (var r = 0; r < e.length && (Ry(t, e[r].type, e[r].value), t._state !== "closed"); ++r)
      ;
  }
}
function Ry(t, e, r) {
  t._state = "running";
  var n = t._observer;
  try {
    var i = yo(n, e);
    switch (e) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (dc(t), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        dc(t), i && i.call(n);
        break;
    }
  } catch (a) {
    Si(a);
  }
  t._state === "closed" ? Dy(t) : t._state === "running" && (t._state = "ready");
}
function tl(t, e, r) {
  if (t._state !== "closed") {
    if (t._state === "buffering") {
      t._queue.push({
        type: e,
        value: r
      });
      return;
    }
    if (t._state !== "ready") {
      t._state = "buffering", t._queue = [{
        type: e,
        value: r
      }], Zs(function() {
        return yT(t);
      });
      return;
    }
    Ry(t, e, r);
  }
}
var gT = /* @__PURE__ */ function() {
  function t(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new bT(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (a) {
      i.error(a);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = t.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (dc(this), Dy(this));
  }, Df(t, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), t;
}(), bT = /* @__PURE__ */ function() {
  function t(r) {
    this._subscription = r;
  }
  var e = t.prototype;
  return e.next = function(n) {
    tl(this._subscription, "next", n);
  }, e.error = function(n) {
    tl(this._subscription, "error", n);
  }, e.complete = function() {
    tl(this._subscription, "complete");
  }, Df(t, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), t;
}(), Ve = /* @__PURE__ */ function() {
  function t(r) {
    if (!(this instanceof t))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var e = t.prototype;
  return e.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new gT(n, this._subscriber);
  }, e.forEach = function(n) {
    var i = this;
    return new Promise(function(a, s) {
      if (typeof n != "function") {
        s(new TypeError(n + " is not a function"));
        return;
      }
      function o() {
        u.unsubscribe(), a();
      }
      var u = i.subscribe({
        next: function(l) {
          try {
            n(l, o);
          } catch (c) {
            s(c), u.unsubscribe();
          }
        },
        error: s,
        complete: a
      });
    });
  }, e.map = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var a = Ji(this);
    return new a(function(s) {
      return i.subscribe({
        next: function(o) {
          try {
            o = n(o);
          } catch (u) {
            return s.error(u);
          }
          s.next(o);
        },
        error: function(o) {
          s.error(o);
        },
        complete: function() {
          s.complete();
        }
      });
    });
  }, e.filter = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var a = Ji(this);
    return new a(function(s) {
      return i.subscribe({
        next: function(o) {
          try {
            if (!n(o))
              return;
          } catch (u) {
            return s.error(u);
          }
          s.next(o);
        },
        error: function(o) {
          s.error(o);
        },
        complete: function() {
          s.complete();
        }
      });
    });
  }, e.reduce = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var a = Ji(this), s = arguments.length > 1, o = !1, u = arguments[1], l = u;
    return new a(function(c) {
      return i.subscribe({
        next: function(f) {
          var h = !o;
          if (o = !0, !h || s)
            try {
              l = n(l, f);
            } catch (d) {
              return c.error(d);
            }
          else
            l = f;
        },
        error: function(f) {
          c.error(f);
        },
        complete: function() {
          if (!o && !s)
            return c.error(new TypeError("Cannot reduce an empty sequence"));
          c.next(l), c.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var n = this, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    var o = Ji(this);
    return new o(function(u) {
      var l, c = 0;
      function f(h) {
        l = h.subscribe({
          next: function(d) {
            u.next(d);
          },
          error: function(d) {
            u.error(d);
          },
          complete: function() {
            c === a.length ? (l = void 0, u.complete()) : f(o.from(a[c++]));
          }
        });
      }
      return f(n), function() {
        l && (l.unsubscribe(), l = void 0);
      };
    });
  }, e.flatMap = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var a = Ji(this);
    return new a(function(s) {
      var o = [], u = i.subscribe({
        next: function(c) {
          if (n)
            try {
              c = n(c);
            } catch (h) {
              return s.error(h);
            }
          var f = a.from(c).subscribe({
            next: function(h) {
              s.next(h);
            },
            error: function(h) {
              s.error(h);
            },
            complete: function() {
              var h = o.indexOf(f);
              h >= 0 && o.splice(h, 1), l();
            }
          });
          o.push(f);
        },
        error: function(c) {
          s.error(c);
        },
        complete: function() {
          l();
        }
      });
      function l() {
        u.closed && o.length === 0 && s.complete();
      }
      return function() {
        o.forEach(function(c) {
          return c.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, e[fc] = function() {
    return this;
  }, t.from = function(n) {
    var i = typeof this == "function" ? this : t;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var a = yo(n, fc);
    if (a) {
      var s = a.call(n);
      if (Object(s) !== s)
        throw new TypeError(s + " is not an object");
      return vT(s) && s.constructor === i ? s : new i(function(o) {
        return s.subscribe(o);
      });
    }
    if (Pf("iterator") && (a = yo(n, mT), a))
      return new i(function(o) {
        Zs(function() {
          if (!o.closed) {
            for (var u = hT(a.call(n)), l; !(l = u()).done; ) {
              var c = l.value;
              if (o.next(c), o.closed)
                return;
            }
            o.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(o) {
        Zs(function() {
          if (!o.closed) {
            for (var u = 0; u < n.length; ++u)
              if (o.next(n[u]), o.closed)
                return;
            o.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, t.of = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var s = typeof this == "function" ? this : t;
    return new s(function(o) {
      Zs(function() {
        if (!o.closed) {
          for (var u = 0; u < i.length; ++u)
            if (o.next(i[u]), o.closed)
              return;
          o.complete();
        }
      });
    });
  }, Df(t, null, [{
    key: Ny,
    get: function() {
      return this;
    }
  }]), t;
}();
Rf() && Object.defineProperty(Ve, Symbol("extensions"), {
  value: {
    symbol: fc,
    hostReportError: Si
  },
  configurable: !0
});
function wT(t) {
  var e, r = t.Symbol;
  if (typeof r == "function")
    if (r.observable)
      e = r.observable;
    else {
      typeof r.for == "function" ? e = r.for("https://github.com/benlesh/symbol-observable") : e = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = e;
      } catch {
      }
    }
  else
    e = "@@observable";
  return e;
}
var ri;
typeof self < "u" ? ri = self : typeof window < "u" ? ri = window : typeof global < "u" ? ri = global : typeof module < "u" ? ri = module : ri = Function("return this")();
wT(ri);
var zh = Ve.prototype, Wh = "@@observable";
zh[Wh] || (zh[Wh] = function() {
  return this;
});
var ET = Object.prototype.toString;
function Py(t) {
  return hc(t);
}
function hc(t, e) {
  switch (ET.call(t)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var r = t.slice(0);
      return e.set(t, r), r.forEach(function(i, a) {
        r[a] = hc(i, e);
      }), r;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var n = Object.create(Object.getPrototypeOf(t));
      return e.set(t, n), Object.keys(t).forEach(function(i) {
        n[i] = hc(t[i], e);
      }), n;
    }
    default:
      return t;
  }
}
function xT(t) {
  var e = /* @__PURE__ */ new Set([t]);
  return e.forEach(function(r) {
    rt(r) && kT(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      rt(r[n]) && e.add(r[n]);
    });
  }), t;
}
function kT(t) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(t))
    try {
      Object.freeze(t);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  return t;
}
function pc(t) {
  return globalThis.__DEV__ !== !1 && xT(t), t;
}
function ha(t, e, r) {
  var n = [];
  t.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](r);
  });
}
function rl(t, e, r) {
  return new Ve(function(n) {
    var i = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(u) {
        return new Promise(function(l) {
          return l(u());
        });
      }
    };
    function a(u, l) {
      return function(c) {
        if (u) {
          var f = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : u(c);
          };
          i = i.then(f, f).then(function(h) {
            return n.next(h);
          }, function(h) {
            return n.error(h);
          });
        } else
          n[l](c);
      };
    }
    var s = {
      next: a(e, "next"),
      error: a(r, "error"),
      complete: function() {
        i.then(function() {
          return n.complete();
        });
      }
    }, o = t.subscribe(s);
    return function() {
      return o.unsubscribe();
    };
  });
}
function My(t) {
  function e(r) {
    Object.defineProperty(t, r, { value: Ve });
  }
  return kf && Symbol.species && e(Symbol.species), e("@@species"), t;
}
function qh(t) {
  return t && typeof t.then == "function";
}
var ni = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      var n = t.call(this, function(i) {
        return n.addObserver(i), function() {
          return n.removeObserver(i);
        };
      }) || this;
      return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, a) {
        n.resolve = i, n.reject = a;
      }), n.handlers = {
        next: function(i) {
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), ha(n.observers, "next", i));
        },
        error: function(i) {
          var a = n.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), ha(n.observers, "error", i));
        },
        complete: function() {
          var i = n, a = i.sub, s = i.sources, o = s === void 0 ? [] : s;
          if (a !== null) {
            var u = o.shift();
            u ? qh(u) ? u.then(function(l) {
              return n.sub = l.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), ha(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.complete();
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new Ve(r)]), qh(r) ? r.then(function(i) {
        return n.start(i);
      }, n.handlers.error) : n.start(r), n;
    }
    return e.prototype.start = function(r) {
      this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
    }, e.prototype.deliverLastMessage = function(r) {
      if (this.latest) {
        var n = this.latest[0], i = r[n];
        i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
      }
    }, e.prototype.addObserver = function(r) {
      this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
    }, e.prototype.removeObserver = function(r) {
      this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
    }, e.prototype.notify = function(r, n) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(a) {
        return a(r, n);
      }));
    }, e.prototype.beforeNext = function(r) {
      var n = !1;
      this.nextResultListeners.add(function(i, a) {
        n || (n = !0, r(i, a));
      });
    }, e;
  }(Ve)
);
My(ni);
function gi(t) {
  return "incremental" in t;
}
function TT(t) {
  return "hasNext" in t && "data" in t;
}
function _T(t) {
  return gi(t) || TT(t);
}
function ST(t) {
  return rt(t) && "payload" in t;
}
function Fy(t, e) {
  var r = t, n = new hn();
  return gi(e) && yr(e.incremental) && e.incremental.forEach(function(i) {
    for (var a = i.data, s = i.path, o = s.length - 1; o >= 0; --o) {
      var u = s[o], l = !isNaN(+u), c = l ? [] : {};
      c[u] = a, a = c;
    }
    r = n.merge(r, a);
  }), r;
}
function Gs(t) {
  var e = mc(t);
  return yr(e);
}
function mc(t) {
  var e = yr(t.errors) ? t.errors.slice(0) : [];
  return gi(t) && yr(t.incremental) && t.incremental.forEach(function(r) {
    r.errors && e.push.apply(e, r.errors);
  }), e;
}
function Oi() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = /* @__PURE__ */ Object.create(null);
  return t.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var a = n[i];
      a !== void 0 && (r[i] = a);
    });
  }), r;
}
function Js(t, e) {
  return Oi(t, e, e.variables && {
    variables: Oi(T(T({}, t && t.variables), e.variables))
  });
}
function nl(t) {
  return new Ve(function(e) {
    e.error(t);
  });
}
var Ly = function(t, e, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n;
};
function OT(t) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    if (e.indexOf(i) < 0)
      throw Dt(43, i);
  }
  return t;
}
function CT(t, e) {
  var r = T({}, t), n = function(a) {
    typeof a == "function" ? r = T(T({}, r), a(r)) : r = T(T({}, r), a);
  }, i = function() {
    return T({}, r);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function IT(t) {
  var e = {
    variables: t.variables || {},
    extensions: t.extensions || {},
    operationName: t.operationName,
    query: t.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? cc(e.query) || void 0 : ""), e;
}
function AT(t, e) {
  var r = T({}, t), n = new Set(Object.keys(t));
  return Fr(e, {
    Variable: function(i, a, s) {
      s && s.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function Uh(t, e) {
  return e ? e(t) : Ve.of();
}
function Ki(t) {
  return typeof t == "function" ? new wr(t) : t;
}
function Fs(t) {
  return t.request.length <= 1;
}
var wr = (
  /** @class */
  function() {
    function t(e) {
      e && (this.request = e);
    }
    return t.empty = function() {
      return new t(function() {
        return Ve.of();
      });
    }, t.from = function(e) {
      return e.length === 0 ? t.empty() : e.map(Ki).reduce(function(r, n) {
        return r.concat(n);
      });
    }, t.split = function(e, r, n) {
      var i = Ki(r), a = Ki(n || new t(Uh)), s;
      return Fs(i) && Fs(a) ? s = new t(function(o) {
        return e(o) ? i.request(o) || Ve.of() : a.request(o) || Ve.of();
      }) : s = new t(function(o, u) {
        return e(o) ? i.request(o, u) || Ve.of() : a.request(o, u) || Ve.of();
      }), Object.assign(s, { left: i, right: a });
    }, t.execute = function(e, r) {
      return e.request(CT(r.context, IT(OT(r)))) || Ve.of();
    }, t.concat = function(e, r) {
      var n = Ki(e);
      if (Fs(n))
        return globalThis.__DEV__ !== !1 && me.warn(35, n), n;
      var i = Ki(r), a;
      return Fs(i) ? a = new t(function(s) {
        return n.request(s, function(o) {
          return i.request(o) || Ve.of();
        }) || Ve.of();
      }) : a = new t(function(s, o) {
        return n.request(s, function(u) {
          return i.request(u, o) || Ve.of();
        }) || Ve.of();
      }), Object.assign(a, { left: n, right: i });
    }, t.prototype.split = function(e, r, n) {
      return this.concat(t.split(e, r, n || new t(Uh)));
    }, t.prototype.concat = function(e) {
      return t.concat(this, e);
    }, t.prototype.request = function(e, r) {
      throw Dt(36);
    }, t.prototype.onError = function(e, r) {
      if (r && r.error)
        return r.error(e), !1;
      throw e;
    }, t.prototype.setOnError = function(e) {
      return this.onError = e, this;
    }, t;
  }()
), NT = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var t = new AbortController(), e = t.signal;
  return { controller: t, signal: e };
};
function DT(t) {
  var e, r = t[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return r.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function RT(t) {
  var e = null, r = null, n = !1, i = [], a = [];
  function s(f) {
    if (!r) {
      if (a.length) {
        var h = a.shift();
        if (Array.isArray(h) && h[0])
          return h[0]({ value: f, done: !1 });
      }
      i.push(f);
    }
  }
  function o(f) {
    r = f;
    var h = a.slice();
    h.forEach(function(d) {
      d[1](f);
    }), !e || e();
  }
  function u() {
    n = !0;
    var f = a.slice();
    f.forEach(function(h) {
      h[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, t.removeListener("data", s), t.removeListener("error", o), t.removeListener("end", u), t.removeListener("finish", u), t.removeListener("close", u);
  }, t.on("data", s), t.on("error", o), t.on("end", u), t.on("finish", u), t.on("close", u);
  function l() {
    return new Promise(function(f, h) {
      if (r)
        return h(r);
      if (i.length)
        return f({ value: i.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      a.push([f, h]);
    });
  }
  var c = {
    next: function() {
      return l();
    }
  };
  return au && (c[Symbol.asyncIterator] = function() {
    return this;
  }), c;
}
function PT(t) {
  var e = !1, r = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(n, i) {
        t.then(function(a) {
          n({ value: a, done: !1 });
        }).catch(i);
      }));
    }
  };
  return au && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Bh(t) {
  var e = {
    next: function() {
      return t.read();
    }
  };
  return au && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function MT(t) {
  return !!t.body;
}
function FT(t) {
  return !!t.getReader;
}
function LT(t) {
  return !!(au && t[Symbol.asyncIterator]);
}
function $T(t) {
  return !!t.stream;
}
function jT(t) {
  return !!t.arrayBuffer;
}
function VT(t) {
  return !!t.pipe;
}
function zT(t) {
  var e = t;
  if (MT(t) && (e = t.body), LT(e))
    return DT(e);
  if (FT(e))
    return Bh(e.getReader());
  if ($T(e))
    return Bh(e.stream().getReader());
  if (jT(e))
    return PT(e.arrayBuffer());
  if (VT(e))
    return RT(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Ff = Symbol();
function WT(t) {
  return t.extensions ? Array.isArray(t.extensions[Ff]) : !1;
}
function qT(t) {
  return t.hasOwnProperty("graphQLErrors");
}
var UT = function(t) {
  var e = sr(sr(sr([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
  return t.networkError && e.push(t.networkError), e.map(function(r) {
    return rt(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Tn = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, s = r.networkError, o = r.errorMessage, u = r.extraInfo, l = t.call(this, o) || this;
      return l.name = "ApolloError", l.graphQLErrors = n || [], l.protocolErrors = i || [], l.clientErrors = a || [], l.networkError = s || null, l.message = o || UT(l), l.extraInfo = u, l.__proto__ = e.prototype, l;
    }
    return e;
  }(Error)
), Hh = Object.prototype.hasOwnProperty;
function BT(t, e) {
  return Zr(this, void 0, void 0, function() {
    var r, n, i, a, s, o, u, l, c, f, h, d, p, m, y, v, b, g, x, w, S, A, O, N;
    return Gr(this, function(F) {
      switch (F.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (N = t.headers) === null || N === void 0 ? void 0 : N.get("content-type"), i = "boundary=", a = n != null && n.includes(i) ? n == null ? void 0 : n.substring((n == null ? void 0 : n.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), o = "", u = zT(t), l = !0, F.label = 1;
        case 1:
          return l ? [4, u.next()] : [3, 3];
        case 2:
          for (c = F.sent(), f = c.value, h = c.done, d = typeof f == "string" ? f : r.decode(f), p = o.length - s.length + 1, l = !h, o += d, m = o.indexOf(s, p); m > -1; ) {
            if (y = void 0, A = [
              o.slice(0, m),
              o.slice(m + s.length)
            ], y = A[0], o = A[1], v = y.indexOf(`\r
\r
`), b = HT(y.slice(0, v)), g = b["content-type"], g && g.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (x = y.slice(v), x) {
              if (w = $y(t, x), Object.keys(w).length > 1 || "data" in w || "incremental" in w || "errors" in w || "payload" in w)
                if (ST(w)) {
                  if (S = {}, "payload" in w) {
                    if (Object.keys(w).length === 1 && w.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    S = T({}, w.payload);
                  }
                  "errors" in w && (S = T(T({}, S), { extensions: T(T({}, "extensions" in S ? S.extensions : null), (O = {}, O[Ff] = w.errors, O)) })), e(S);
                } else
                  e(w);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(w).length === 1 && "hasNext" in w && !w.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            m = o.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function HT(t) {
  var e = {};
  return t.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), a = r.slice(n + 1).trim();
      e[i] = a;
    }
  }), e;
}
function $y(t, e) {
  if (t.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    Ly(t, r(), "Response not successful: Received status code ".concat(t.status));
  }
  try {
    return JSON.parse(e);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = t, n.statusCode = t.status, n.bodyText = e, n;
  }
}
function YT(t, e) {
  t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t);
}
function jy(t) {
  return function(e) {
    return e.text().then(function(r) {
      return $y(e, r);
    }).then(function(r) {
      return !Array.isArray(r) && !Hh.call(r, "data") && !Hh.call(r, "errors") && Ly(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
        return n.operationName;
      }) : t.operationName, "'.")), r;
    });
  };
}
var Ra = function(t, e) {
  var r;
  try {
    r = JSON.stringify(t);
  } catch (i) {
    var n = Dt(39, e, i.message);
    throw n.parseError = i, n;
  }
  return r;
};
function Vy(t, e) {
  var r = [], n = function(f, h) {
    r.push("".concat(f, "=").concat(encodeURIComponent(h)));
  };
  if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = Ra(e.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var a = void 0;
    try {
      a = Ra(e.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", a);
  }
  var s = "", o = t, u = t.indexOf("#");
  u !== -1 && (s = t.substr(u), o = t.substr(0, u));
  var l = o.indexOf("?") === -1 ? "?" : "&", c = o + l + r.join("&") + s;
  return { newURI: c };
}
var QT = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, ZT = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
}, GT = {
  method: "POST"
}, zy = {
  http: QT,
  headers: ZT,
  options: GT
}, Wy = function(t, e) {
  return e(t);
};
function qy(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, a = {};
  r.forEach(function(f) {
    i = T(T(T({}, i), f.options), { headers: T(T({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), a = T(T({}, a), f.http);
  }), i.headers && (i.headers = JT(i.headers, a.preserveHeaderCase));
  var s = t.operationName, o = t.extensions, u = t.variables, l = t.query, c = { operationName: s, variables: u };
  return a.includeExtensions && (c.extensions = o), a.includeQuery && (c.query = e(l, du)), {
    options: i,
    body: c
  };
}
function JT(t, e) {
  if (!e) {
    var r = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(t)).forEach(function(a) {
      r[a.toLowerCase()] = t[a];
    }), r;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(t)).forEach(function(a) {
    n[a.toLowerCase()] = {
      originalName: a,
      value: t[a]
    };
  });
  var i = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(a) {
    i[n[a].originalName] = n[a].value;
  }), i;
}
var Uy = function(t, e) {
  var r = t.getContext(), n = r.uri;
  return n || (typeof e == "function" ? e(t) : e || "/graphql");
};
function KT(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function XT(t, e, r = "") {
  if (!arguments.length)
    throw new TypeError("Argument 1 `value` is required.");
  if (typeof e != "function")
    throw new TypeError("Argument 2 `isExtractable` must be a function.");
  if (typeof r != "string")
    throw new TypeError("Argument 3 `path` must be a string.");
  const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function a(s, o, u) {
    if (e(s)) {
      const f = i.get(s);
      return f ? f.push(o) : i.set(s, [o]), null;
    }
    const l = Array.isArray(s) || typeof FileList < "u" && s instanceof FileList, c = KT(s);
    if (l || c) {
      let f = n.get(s);
      const h = !f;
      if (h && (f = l ? [] : (
        // Replicate if the plain object is an `Object` instance.
        s instanceof /** @type {any} */
        Object ? {} : /* @__PURE__ */ Object.create(null)
      ), n.set(
        s,
        /** @type {Clone} */
        f
      )), !u.has(s)) {
        const d = o ? `${o}.` : "", p = new Set(u).add(s);
        if (l) {
          let m = 0;
          for (const y of s) {
            const v = a(
              y,
              d + m++,
              p
            );
            h && f.push(v);
          }
        } else
          for (const m in s) {
            const y = a(
              s[m],
              d + m,
              p
            );
            h && (f[m] = y);
          }
      }
      return f;
    }
    return s;
  }
  return {
    clone: a(t, r, /* @__PURE__ */ new Set()),
    files: i
  };
}
function e_(t, e, r) {
  "name" in r ? t.append(e, r, r.name) : t.append(e, r);
}
function t_(t) {
  return typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob;
}
function r_({
  uri: t = "/graphql",
  useGETForQueries: e,
  isExtractableFile: r = t_,
  FormData: n,
  formDataAppendFile: i = e_,
  print: a = Wy,
  fetch: s,
  fetchOptions: o,
  credentials: u,
  headers: l,
  includeExtensions: c
} = {}) {
  const f = {
    http: { includeExtensions: c },
    options: o,
    credentials: u,
    headers: l
  };
  return new wr((h) => {
    const d = (
      /**
       * @type {import("@apollo/client/core/types.js").DefaultContext & {
       *   clientAwareness?: {
       *     name?: string,
       *     version?: string,
       *   },
       * }}
       */
      h.getContext()
    ), {
      // Apollo Studio client awareness `name` and `version` can be configured
      // via `ApolloClient` constructor options:
      // https://www.apollographql.com/docs/graphos/metrics/client-awareness/#setup
      clientAwareness: { name: p, version: m } = {},
      headers: y
    } = d, v = {
      http: d.http,
      options: d.fetchOptions,
      credentials: d.credentials,
      headers: {
        // Client awareness headers can be overridden by context `headers`.
        ...p && { "apollographql-client-name": p },
        ...m && { "apollographql-client-version": m },
        ...y
      }
    }, { options: b, body: g } = qy(
      h,
      a,
      zy,
      f,
      v
    ), { clone: x, files: w } = XT(g, r, "");
    let S = Uy(h, t);
    if (w.size) {
      b.headers && delete b.headers["content-type"];
      const N = n || FormData, F = new N();
      F.append("operations", Ra(x, "Payload"));
      const Q = {};
      let M = 0;
      w.forEach((P) => {
        Q[++M] = P;
      }), F.append("map", JSON.stringify(Q)), M = 0, w.forEach((P, B) => {
        i(F, String(++M), B);
      }), b.body = F;
    } else if (e && // If the operation contains some mutations GET shouldn’t be used.
    !h.query.definitions.some(
      (N) => N.kind === "OperationDefinition" && N.operation === "mutation"
    ) && (b.method = "GET"), b.method === "GET") {
      const { newURI: N, parseError: F } = Vy(S, g);
      if (F)
        return new Ve((Q) => {
          Q.error(F);
        });
      S = N;
    } else
      b.body = Ra(x, "Payload");
    const { controller: A } = NT();
    typeof A != "boolean" && (b.signal && (b.signal.aborted ? (
      // Signal already aborted, so immediately abort.
      A.abort()
    ) : (
      // Signal not already aborted, so setup a listener to abort when it
      // does.
      b.signal.addEventListener(
        "abort",
        () => {
          A.abort();
        },
        {
          // Prevent a memory leak if the user configured abort controller
          // is long lasting, or controls multiple things.
          once: !0
        }
      )
    )), b.signal = A.signal);
    const O = s || fetch;
    return new Ve((N) => {
      let F;
      return O(S, b).then((Q) => (h.setContext({ response: Q }), Q)).then(jy(h)).then((Q) => {
        N.next(Q), N.complete();
      }).catch((Q) => {
        F || (Q.result && Q.result.errors && Q.result.data && N.next(Q.result), N.error(Q));
      }), () => {
        F = !0, typeof A != "boolean" && A.abort();
      };
    });
  });
}
var vc = wr.execute, n_ = function(t) {
  if (!t && typeof fetch > "u")
    throw Dt(37);
}, Yh = tr(function() {
  return fetch;
}), i_ = function(t) {
  t === void 0 && (t = {});
  var e = t.uri, r = e === void 0 ? "/graphql" : e, n = t.fetch, i = t.print, a = i === void 0 ? Wy : i, s = t.includeExtensions, o = t.preserveHeaderCase, u = t.useGETForQueries, l = t.includeUnusedVariables, c = l === void 0 ? !1 : l, f = Mr(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && n_(n || Yh);
  var h = {
    http: { includeExtensions: s, preserveHeaderCase: o },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new wr(function(d) {
    var p = Uy(d, r), m = d.getContext(), y = {};
    if (m.clientAwareness) {
      var v = m.clientAwareness, b = v.name, g = v.version;
      b && (y["apollographql-client-name"] = b), g && (y["apollographql-client-version"] = g);
    }
    var x = T(T({}, y), m.headers), w = {
      http: m.http,
      options: m.fetchOptions,
      credentials: m.credentials,
      headers: x
    };
    if (Aa(["client"], d.query)) {
      var S = Ay(d.query);
      if (!S)
        return nl(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      d.query = S;
    }
    var A = qy(d, a, zy, h, w), O = A.options, N = A.body;
    N.variables && !c && (N.variables = AT(N.variables, d.query));
    var F;
    !O.signal && typeof AbortController < "u" && (F = new AbortController(), O.signal = F.signal);
    var Q = function(j) {
      return j.kind === "OperationDefinition" && j.operation === "mutation";
    }, M = function(j) {
      return j.kind === "OperationDefinition" && j.operation === "subscription";
    }, P = M(Xa(d.query)), B = Aa(["defer"], d.query);
    if (u && !d.query.definitions.some(Q) && (O.method = "GET"), B || P) {
      O.headers = O.headers || {};
      var q = "multipart/mixed;";
      P && B && globalThis.__DEV__ !== !1 && me.warn(38), P ? q += "boundary=graphql;subscriptionSpec=1.0,application/json" : B && (q += "deferSpec=20220824,application/json"), O.headers.accept = q;
    }
    if (O.method === "GET") {
      var z = Vy(p, N), $ = z.newURI, ve = z.parseError;
      if (ve)
        return nl(ve);
      p = $;
    } else
      try {
        O.body = Ra(N, "Payload");
      } catch (j) {
        return nl(j);
      }
    return new Ve(function(j) {
      var C = n || tr(function() {
        return fetch;
      }) || Yh, R = j.next.bind(j);
      return C(p, O).then(function(H) {
        var re;
        d.setContext({ response: H });
        var X = (re = H.headers) === null || re === void 0 ? void 0 : re.get("content-type");
        return X !== null && /^multipart\/mixed/i.test(X) ? BT(H, R) : jy(d)(H).then(R);
      }).then(function() {
        F = void 0, j.complete();
      }).catch(function(H) {
        F = void 0, YT(H, j);
      }), function() {
        F && F.abort();
      };
    });
  });
}, a_ = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this, i_(r).request) || this;
      return n.options = r, n;
    }
    return e;
  }(wr)
);
const { toString: Qh, hasOwnProperty: s_ } = Object.prototype, Zh = Function.prototype.toString, yc = /* @__PURE__ */ new Map();
function Be(t, e) {
  try {
    return gc(t, e);
  } finally {
    yc.clear();
  }
}
function gc(t, e) {
  if (t === e)
    return !0;
  const r = Qh.call(t), n = Qh.call(e);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (t.length !== e.length)
        return !1;
    case "[object Object]": {
      if (Jh(t, e))
        return !0;
      const i = Gh(t), a = Gh(e), s = i.length;
      if (s !== a.length)
        return !1;
      for (let o = 0; o < s; ++o)
        if (!s_.call(e, i[o]))
          return !1;
      for (let o = 0; o < s; ++o) {
        const u = i[o];
        if (!gc(t[u], e[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return t.name === e.name && t.message === e.message;
    case "[object Number]":
      if (t !== t)
        return e !== e;
    case "[object Boolean]":
    case "[object Date]":
      return +t == +e;
    case "[object RegExp]":
    case "[object String]":
      return t == `${e}`;
    case "[object Map]":
    case "[object Set]": {
      if (t.size !== e.size)
        return !1;
      if (Jh(t, e))
        return !0;
      const i = t.entries(), a = r === "[object Map]";
      for (; ; ) {
        const s = i.next();
        if (s.done)
          break;
        const [o, u] = s.value;
        if (!e.has(o) || a && !gc(u, e.get(o)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      t = new Uint8Array(t), e = new Uint8Array(e);
    case "[object DataView]": {
      let i = t.byteLength;
      if (i === e.byteLength)
        for (; i-- && t[i] === e[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = Zh.call(t);
      return i !== Zh.call(e) ? !1 : !l_(i, u_);
    }
  }
  return !1;
}
function Gh(t) {
  return Object.keys(t).filter(o_, t);
}
function o_(t) {
  return this[t] !== void 0;
}
const u_ = "{ [native code] }";
function l_(t, e) {
  const r = t.length - e.length;
  return r >= 0 && t.indexOf(e, r) === r;
}
function Jh(t, e) {
  let r = yc.get(t);
  if (r) {
    if (r.has(e))
      return !0;
  } else
    yc.set(t, r = /* @__PURE__ */ new Set());
  return r.add(e), !1;
}
function By(t, e, r, n) {
  var i = e.data, a = Mr(e, ["data"]), s = r.data, o = Mr(r, ["data"]);
  return Be(a, o) && Ks(Xa(t).selectionSet, i, s, {
    fragmentMap: su(lu(t)),
    variables: n
  });
}
function Ks(t, e, r, n) {
  if (e === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return t.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Ga(a, n.variables)) || Kh(a))
      return !0;
    if (fn(a)) {
      var s = cn(a), o = e && e[s], u = r && r[s], l = a.selectionSet;
      if (!l)
        return Be(o, u);
      var c = Array.isArray(o), f = Array.isArray(u);
      if (c !== f)
        return !1;
      if (c && f) {
        var h = o.length;
        if (u.length !== h)
          return !1;
        for (var d = 0; d < h; ++d)
          if (!Ks(l, o[d], u[d], n))
            return !1;
        return !0;
      }
      return Ks(l, o, u, n);
    } else {
      var p = ou(a, n.fragmentMap);
      if (p)
        return Kh(p) ? !0 : Ks(
          p.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          e,
          r,
          n
        );
    }
  });
}
function Kh(t) {
  return !!t.directives && t.directives.some(c_);
}
function c_(t) {
  return t.name.value === "nonreactive";
}
var Hy = (
  /** @class */
  function() {
    function t() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = Da(pk, {
        max: vr["cache.fragmentQueryDocuments"] || 1e3,
        cache: vo
      });
    }
    return t.prototype.batch = function(e) {
      var r = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = e.update(r);
      }, n), i;
    }, t.prototype.recordOptimisticTransaction = function(e, r) {
      this.performTransaction(e, r);
    }, t.prototype.transformDocument = function(e) {
      return e;
    }, t.prototype.transformForLink = function(e) {
      return e;
    }, t.prototype.identify = function(e) {
    }, t.prototype.gc = function() {
      return [];
    }, t.prototype.modify = function(e) {
      return !1;
    }, t.prototype.readQuery = function(e, r) {
      return r === void 0 && (r = !!e.optimistic), this.read(T(T({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r }));
    }, t.prototype.watchFragment = function(e) {
      var r = this, n = e.fragment, i = e.fragmentName, a = e.from, s = e.optimistic, o = s === void 0 ? !0 : s, u = this.getFragmentDoc(n, i), l = {
        returnPartialData: !0,
        id: typeof a == "string" ? a : this.identify(a),
        query: u,
        optimistic: o
      }, c;
      return new Ve(function(f) {
        return r.watch(T(T({}, l), { immediate: !0, callback: function(h) {
          if (
            // Always ensure we deliver the first result
            !(c && By(u, { data: c == null ? void 0 : c.result }, { data: h.result }))
          ) {
            var d = {
              data: h.result,
              complete: !!h.complete
            };
            h.missing && (d.missing = hu(h.missing.map(function(p) {
              return p.missing;
            }))), c = h, f.next(d);
          }
        } }));
      });
    }, t.prototype.readFragment = function(e, r) {
      return r === void 0 && (r = !!e.optimistic), this.read(T(T({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: r }));
    }, t.prototype.writeQuery = function(e) {
      var r = e.id, n = e.data, i = Mr(e, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, t.prototype.writeFragment = function(e) {
      var r = e.id, n = e.data, i = e.fragment, a = e.fragmentName, s = Mr(e, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(s, {
        query: this.getFragmentDoc(i, a),
        dataId: r,
        result: n
      }));
    }, t.prototype.updateQuery = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(e), a = r(i);
          return a == null ? i : (n.writeQuery(T(T({}, e), { data: a })), a);
        }
      });
    }, t.prototype.updateFragment = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(e), a = r(i);
          return a == null ? i : (n.writeFragment(T(T({}, e), { data: a })), a);
        }
      });
    }, t;
  }()
);
globalThis.__DEV__ !== !1 && (Hy.prototype.getMemoryInternals = _k);
var Yy = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r, n, i, a) {
      var s, o = t.call(this, r) || this;
      if (o.message = r, o.path = n, o.query = i, o.variables = a, Array.isArray(o.path)) {
        o.missing = o.message;
        for (var u = o.path.length - 1; u >= 0; --u)
          o.missing = (s = {}, s[o.path[u]] = o.missing, s);
      } else
        o.missing = o.path;
      return o.__proto__ = e.prototype, o;
    }
    return e;
  }(Error)
), bt = Object.prototype.hasOwnProperty;
function Xi(t) {
  return t == null;
}
function Qy(t, e) {
  var r = t.__typename, n = t.id, i = t._id;
  if (typeof r == "string" && (e && (e.keyObject = Xi(n) ? Xi(i) ? void 0 : { _id: i } : { id: n }), Xi(n) && !Xi(i) && (n = i), !Xi(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Zy = {
  dataIdFromObject: Qy,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function f_(t) {
  return Oi(Zy, t);
}
function Gy(t) {
  var e = t.canonizeResults;
  return e === void 0 ? Zy.canonizeResults : e;
}
function d_(t, e) {
  return ze(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
}
var Jy = /^[_a-z][_0-9a-z]*/i;
function pn(t) {
  var e = t.match(Jy);
  return e ? e[0] : t;
}
function bc(t, e, r) {
  return rt(e) ? nt(e) ? e.every(function(n) {
    return bc(t, n, r);
  }) : t.selections.every(function(n) {
    if (fn(n) && Ga(n, r)) {
      var i = cn(n);
      return bt.call(e, i) && (!n.selectionSet || bc(n.selectionSet, e[i], r));
    }
    return !0;
  }) : !1;
}
function ci(t) {
  return rt(t) && !ze(t) && !nt(t);
}
function h_() {
  return new hn();
}
function Ky(t, e) {
  var r = su(lu(t));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && e && (i = e.lookup(n)), i || null;
    }
  };
}
var Xs = /* @__PURE__ */ Object.create(null), il = function() {
  return Xs;
}, Xh = /* @__PURE__ */ Object.create(null), Pa = (
  /** @class */
  function() {
    function t(e, r) {
      var n = this;
      this.policies = e, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return pc(ze(i) ? n.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return ze(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return yi(i);
        if (ze(i))
          return i;
        var s = n.policies.identify(i)[0];
        if (s) {
          var o = yi(s);
          return a && n.merge(s, i), o;
        }
      };
    }
    return t.prototype.toObject = function() {
      return T({}, this.data);
    }, t.prototype.has = function(e) {
      return this.lookup(e, !0) !== void 0;
    }, t.prototype.get = function(e, r) {
      if (this.group.depend(e, r), bt.call(this.data, e)) {
        var n = this.data[e];
        if (n && bt.call(n, r))
          return n[r];
      }
      if (r === "__typename" && bt.call(this.policies.rootTypenamesById, e))
        return this.policies.rootTypenamesById[e];
      if (this instanceof Yr)
        return this.parent.get(e, r);
    }, t.prototype.lookup = function(e, r) {
      if (r && this.group.depend(e, "__exists"), bt.call(this.data, e))
        return this.data[e];
      if (this instanceof Yr)
        return this.parent.lookup(e, r);
      if (this.policies.rootTypenamesById[e])
        return /* @__PURE__ */ Object.create(null);
    }, t.prototype.merge = function(e, r) {
      var n = this, i;
      ze(e) && (e = e.__ref), ze(r) && (r = r.__ref);
      var a = typeof e == "string" ? this.lookup(i = e) : e, s = typeof r == "string" ? this.lookup(i = r) : r;
      if (s) {
        me(typeof i == "string", 1);
        var o = new hn(m_).merge(a, s);
        if (this.data[i] = o, o !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(s).forEach(function(l) {
            if (!a || a[l] !== o[l]) {
              u[l] = 1;
              var c = pn(l);
              c !== l && !n.policies.hasKeyArgs(o.__typename, c) && (u[c] = 1), o[l] === void 0 && !(n instanceof Yr) && delete o[l];
            }
          }), u.__typename && !(a && a.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === o.__typename && delete u.__typename, Object.keys(u).forEach(function(l) {
            return n.group.dirty(i, l);
          });
        }
      }
    }, t.prototype.modify = function(e, r) {
      var n = this, i = this.lookup(e);
      if (i) {
        var a = /* @__PURE__ */ Object.create(null), s = !1, o = !0, u = {
          DELETE: Xs,
          INVALIDATE: Xh,
          isReference: ze,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(l, c) {
            return n.policies.readField(typeof l == "string" ? {
              fieldName: l,
              from: c || yi(e)
            } : l, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(l) {
          var c = pn(l), f = i[l];
          if (f !== void 0) {
            var h = typeof r == "function" ? r : r[l] || r[c];
            if (h) {
              var d = h === il ? Xs : h(pc(f), T(T({}, u), { fieldName: c, storeFieldName: l, storage: n.getStorage(e, l) }));
              if (d === Xh)
                n.group.dirty(e, l);
              else if (d === Xs && (d = void 0), d !== f && (a[l] = d, s = !0, f = d, globalThis.__DEV__ !== !1)) {
                var p = function(w) {
                  if (n.lookup(w.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && me.warn(2, w), !0;
                };
                if (ze(d))
                  p(d);
                else if (Array.isArray(d))
                  for (var m = !1, y = void 0, v = 0, b = d; v < b.length; v++) {
                    var g = b[v];
                    if (ze(g)) {
                      if (m = !0, p(g))
                        break;
                    } else if (typeof g == "object" && g) {
                      var x = n.policies.identify(g)[0];
                      x && (y = g);
                    }
                    if (m && y !== void 0) {
                      globalThis.__DEV__ !== !1 && me.warn(3, y);
                      break;
                    }
                  }
              }
            }
            f !== void 0 && (o = !1);
          }
        }), s)
          return this.merge(e, a), o && (this instanceof Yr ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
      }
      return !1;
    }, t.prototype.delete = function(e, r, n) {
      var i, a = this.lookup(e);
      if (a) {
        var s = this.getFieldValue(a, "__typename"), o = r && n ? this.policies.getStoreFieldName({ typename: s, fieldName: r, args: n }) : r;
        return this.modify(e, o ? (i = {}, i[o] = il, i) : il);
      }
      return !1;
    }, t.prototype.evict = function(e, r) {
      var n = !1;
      return e.id && (bt.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof Yr && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
    }, t.prototype.clear = function() {
      this.replace(null);
    }, t.prototype.extract = function() {
      var e = this, r = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        bt.call(e.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
    }, t.prototype.replace = function(e) {
      var r = this;
      if (Object.keys(this.data).forEach(function(a) {
        e && bt.call(e, a) || r.delete(a);
      }), e) {
        var n = e.__META, i = Mr(e, ["__META"]);
        Object.keys(i).forEach(function(a) {
          r.merge(a, i[a]);
        }), n && n.extraRootIds.forEach(this.retain, this);
      }
    }, t.prototype.retain = function(e) {
      return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
    }, t.prototype.release = function(e) {
      if (this.rootIds[e] > 0) {
        var r = --this.rootIds[e];
        return r || delete this.rootIds[e], r;
      }
      return 0;
    }, t.prototype.getRootIdSet = function(e) {
      return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Yr ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
    }, t.prototype.gc = function() {
      var e = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(s) {
        bt.call(n, s) && (Object.keys(e.findChildRefIds(s)).forEach(r.add, r), delete n[s]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var a = this; a instanceof Yr; )
          a = a.parent;
        i.forEach(function(s) {
          return a.delete(s);
        });
      }
      return i;
    }, t.prototype.findChildRefIds = function(e) {
      if (!bt.call(this.refs, e)) {
        var r = this.refs[e] = /* @__PURE__ */ Object.create(null), n = this.data[e];
        if (!n)
          return r;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(a) {
          ze(a) && (r[a.__ref] = !0), rt(a) && Object.keys(a).forEach(function(s) {
            var o = a[s];
            rt(o) && i.add(o);
          });
        });
      }
      return this.refs[e];
    }, t.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, t;
  }()
), Xy = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = null), this.caching = e, this.parent = r, this.d = null, this.resetCaching();
    }
    return t.prototype.resetCaching = function() {
      this.d = this.caching ? Sy() : null, this.keyMaker = new Wi(qi);
    }, t.prototype.depend = function(e, r) {
      if (this.d) {
        this.d(al(e, r));
        var n = pn(r);
        n !== r && this.d(al(e, n)), this.parent && this.parent.depend(e, r);
      }
    }, t.prototype.dirty = function(e, r) {
      this.d && this.d.dirty(
        al(e, r),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        r === "__exists" ? "forget" : "setDirty"
      );
    }, t;
  }()
);
function al(t, e) {
  return e + "#" + t;
}
function ep(t, e) {
  pa(t) && t.group.depend(e, "__exists");
}
(function(t) {
  var e = (
    /** @class */
    function(r) {
      cr(n, r);
      function n(i) {
        var a = i.policies, s = i.resultCaching, o = s === void 0 ? !0 : s, u = i.seed, l = r.call(this, a, new Xy(o)) || this;
        return l.stump = new p_(l), l.storageTrie = new Wi(qi), u && l.replace(u), l;
      }
      return n.prototype.addLayer = function(i, a) {
        return this.stump.addLayer(i, a);
      }, n.prototype.removeLayer = function() {
        return this;
      }, n.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, n;
    }(t)
  );
  t.Root = e;
})(Pa || (Pa = {}));
var Yr = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r, n, i, a) {
      var s = t.call(this, n.policies, a) || this;
      return s.id = r, s.parent = n, s.replay = i, s.group = a, i(s), s;
    }
    return e.prototype.addLayer = function(r, n) {
      return new e(r, this, n, this.group);
    }, e.prototype.removeLayer = function(r) {
      var n = this, i = this.parent.removeLayer(r);
      return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
        var s = n.data[a], o = i.lookup(a);
        o ? s ? s !== o && Object.keys(s).forEach(function(u) {
          Be(s[u], o[u]) || n.group.dirty(a, u);
        }) : (n.group.dirty(a, "__exists"), Object.keys(o).forEach(function(u) {
          n.group.dirty(a, u);
        })) : n.delete(a);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, e.prototype.toObject = function() {
      return T(T({}, this.parent.toObject()), this.data);
    }, e.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return bt.call(this.data, r) ? T(T({}, n), t.prototype.findChildRefIds.call(this, r)) : n;
    }, e.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, e;
  }(Pa)
), p_ = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      return t.call(this, "EntityStore.Stump", r, function() {
      }, new Xy(r.group.caching, r.group)) || this;
    }
    return e.prototype.removeLayer = function() {
      return this;
    }, e.prototype.merge = function(r, n) {
      return this.parent.merge(r, n);
    }, e;
  }(Yr)
);
function m_(t, e, r) {
  var n = t[r], i = e[r];
  return Be(n, i) ? n : i;
}
function pa(t) {
  return !!(t instanceof Pa && t.group.caching);
}
function v_(t) {
  return rt(t) ? nt(t) ? t.slice(0) : T({ __proto__: Object.getPrototypeOf(t) }, t) : t;
}
var tp = (
  /** @class */
  function() {
    function t() {
      this.known = new (uy ? WeakSet : Set)(), this.pool = new Wi(qi), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return t.prototype.isKnown = function(e) {
      return rt(e) && this.known.has(e);
    }, t.prototype.pass = function(e) {
      if (rt(e)) {
        var r = v_(e);
        return this.passes.set(r, e), r;
      }
      return e;
    }, t.prototype.admit = function(e) {
      var r = this;
      if (rt(e)) {
        var n = this.passes.get(e);
        if (n)
          return n;
        var i = Object.getPrototypeOf(e);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(e))
              return e;
            var a = e.map(this.admit, this), s = this.pool.lookupArray(a);
            return s.array || (this.known.add(s.array = a), globalThis.__DEV__ !== !1 && Object.freeze(a)), s.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(e))
              return e;
            var o = Object.getPrototypeOf(e), u = [o], l = this.sortedKeys(e);
            u.push(l.json);
            var c = u.length;
            l.sorted.forEach(function(d) {
              u.push(r.admit(e[d]));
            });
            var s = this.pool.lookupArray(u);
            if (!s.object) {
              var f = s.object = Object.create(o);
              this.known.add(f), l.sorted.forEach(function(d, p) {
                f[d] = u[c + p];
              }), globalThis.__DEV__ !== !1 && Object.freeze(f);
            }
            return s.object;
          }
        }
      }
      return e;
    }, t.prototype.sortedKeys = function(e) {
      var r = Object.keys(e), n = this.pool.lookupArray(r);
      if (!n.keys) {
        r.sort();
        var i = JSON.stringify(r);
        (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
      }
      return n.keys;
    }, t;
  }()
);
function rp(t) {
  return [
    t.selectionSet,
    t.objectOrReference,
    t.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    t.context.canonizeResults
  ];
}
var y_ = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.knownResults = new (qi ? WeakMap : Map)(), this.config = Oi(e, {
        addTypename: e.addTypename !== !1,
        canonizeResults: Gy(e)
      }), this.canon = e.canon || new tp(), this.executeSelectionSet = Da(function(n) {
        var i, a = n.context.canonizeResults, s = rp(n);
        s[3] = !a;
        var o = (i = r.executeSelectionSet).peek.apply(i, s);
        return o ? a ? T(T({}, o), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(o.result)
        }) : o : (ep(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || vr["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: rp,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, a, s) {
          if (pa(a.store))
            return a.store.makeCacheKey(n, ze(i) ? i.__ref : i, a.varString, s);
        }
      }), this.executeSubSelectedArray = Da(function(n) {
        return ep(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || vr["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, a = n.array, s = n.context;
          if (pa(s.store))
            return s.store.makeCacheKey(i, a, s.varString);
        }
      });
    }
    return t.prototype.resetCanon = function() {
      this.canon = new tp();
    }, t.prototype.diffQueryAgainstStore = function(e) {
      var r = e.store, n = e.query, i = e.rootId, a = i === void 0 ? "ROOT_QUERY" : i, s = e.variables, o = e.returnPartialData, u = o === void 0 ? !0 : o, l = e.canonizeResults, c = l === void 0 ? this.config.canonizeResults : l, f = this.config.cache.policies;
      s = T(T({}, Sf(py(n))), s);
      var h = yi(a), d = this.executeSelectionSet({
        selectionSet: Xa(n).selectionSet,
        objectOrReference: h,
        enclosingRef: h,
        context: T({ store: r, query: n, policies: f, variables: s, varString: sn(s), canonizeResults: c }, Ky(n, this.config.fragments))
      }), p;
      if (d.missing && (p = [
        new Yy(g_(d.missing), d.missing, n, s)
      ], !u))
        throw p[0];
      return {
        result: d.result,
        complete: !p,
        missing: p
      };
    }, t.prototype.isFresh = function(e, r, n, i) {
      if (pa(i.store) && this.knownResults.get(e) === n) {
        var a = this.executeSelectionSet.peek(
          n,
          r,
          i,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(e)
        );
        if (a && e === a.result)
          return !0;
      }
      return !1;
    }, t.prototype.execSelectionSetImpl = function(e) {
      var r = this, n = e.selectionSet, i = e.objectOrReference, a = e.enclosingRef, s = e.context;
      if (ze(i) && !s.policies.rootTypenamesById[i.__ref] && !s.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var o = s.variables, u = s.policies, l = s.store, c = l.getFieldValue(i, "__typename"), f = [], h, d = new hn();
      this.config.addTypename && typeof c == "string" && !u.rootIdsByTypename[c] && f.push({ __typename: c });
      function p(g, x) {
        var w;
        return g.missing && (h = d.merge(h, (w = {}, w[x] = g.missing, w))), g.result;
      }
      var m = new Set(n.selections);
      m.forEach(function(g) {
        var x, w;
        if (Ga(g, o))
          if (fn(g)) {
            var S = u.readField({
              fieldName: g.name.value,
              field: g,
              variables: s.variables,
              from: i
            }, s), A = cn(g);
            S === void 0 ? Nf.added(g) || (h = d.merge(h, (x = {}, x[A] = "Can't find field '".concat(g.name.value, "' on ").concat(ze(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), x))) : nt(S) ? S.length > 0 && (S = p(r.executeSubSelectedArray({
              field: g,
              array: S,
              enclosingRef: a,
              context: s
            }), A)) : g.selectionSet ? S != null && (S = p(r.executeSelectionSet({
              selectionSet: g.selectionSet,
              objectOrReference: S,
              enclosingRef: ze(S) ? S : a,
              context: s
            }), A)) : s.canonizeResults && (S = r.canon.pass(S)), S !== void 0 && f.push((w = {}, w[A] = S, w));
          } else {
            var O = ou(g, s.lookupFragment);
            if (!O && g.kind === se.FRAGMENT_SPREAD)
              throw Dt(9, g.name.value);
            O && u.fragmentMatches(O, c) && O.selectionSet.selections.forEach(m.add, m);
          }
      });
      var y = hu(f), v = { result: y, missing: h }, b = s.canonizeResults ? this.canon.admit(v) : pc(v);
      return b.result && this.knownResults.set(b.result, n), b;
    }, t.prototype.execSubSelectedArrayImpl = function(e) {
      var r = this, n = e.field, i = e.array, a = e.enclosingRef, s = e.context, o, u = new hn();
      function l(c, f) {
        var h;
        return c.missing && (o = u.merge(o, (h = {}, h[f] = c.missing, h))), c.result;
      }
      return n.selectionSet && (i = i.filter(s.store.canRead)), i = i.map(function(c, f) {
        return c === null ? null : nt(c) ? l(r.executeSubSelectedArray({
          field: n,
          array: c,
          enclosingRef: a,
          context: s
        }), f) : n.selectionSet ? l(r.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: c,
          enclosingRef: ze(c) ? c : a,
          context: s
        }), f) : (globalThis.__DEV__ !== !1 && b_(s.store, n, c), c);
      }), {
        result: s.canonizeResults ? this.canon.admit(i) : i,
        missing: o
      };
    }, t;
  }()
);
function g_(t) {
  try {
    JSON.stringify(t, function(e, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (e) {
    return e;
  }
}
function b_(t, e, r) {
  if (!e.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      rt(i) && (me(
        !ze(i),
        10,
        d_(t, i),
        e.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var Lf = new my(), np = /* @__PURE__ */ new WeakMap();
function ma(t) {
  var e = np.get(t);
  return e || np.set(t, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: Sy()
  }), e;
}
function ip(t) {
  ma(t).vars.forEach(function(e) {
    return e.forgetCache(t);
  });
}
function w_(t) {
  ma(t).vars.forEach(function(e) {
    return e.attachCache(t);
  });
}
function E_(t) {
  var e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
    if (arguments.length > 0) {
      if (t !== a) {
        t = a, e.forEach(function(u) {
          ma(u).dep.dirty(n), x_(u);
        });
        var s = Array.from(r);
        r.clear(), s.forEach(function(u) {
          return u(t);
        });
      }
    } else {
      var o = Lf.getValue();
      o && (i(o), ma(o).dep(n));
    }
    return t;
  };
  n.onNextChange = function(a) {
    return r.add(a), function() {
      r.delete(a);
    };
  };
  var i = n.attachCache = function(a) {
    return e.add(a), ma(a).vars.add(n), n;
  };
  return n.forgetCache = function(a) {
    return e.delete(a);
  }, n;
}
function x_(t) {
  t.broadcastWatches && t.broadcastWatches();
}
var ap = /* @__PURE__ */ Object.create(null);
function $f(t) {
  var e = JSON.stringify(t);
  return ap[e] || (ap[e] = /* @__PURE__ */ Object.create(null));
}
function sp(t) {
  var e = $f(t);
  return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
    var i = function(s, o) {
      return n.readField(o, s);
    }, a = n.keyObject = jf(t, function(s) {
      var o = bi(
        n.storeObject,
        s,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return o === void 0 && r !== n.storeObject && bt.call(r, s[0]) && (o = bi(r, s, tg)), me(o !== void 0, 4, s.join("."), r), o;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(a));
  });
}
function op(t) {
  var e = $f(t);
  return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
    var i = n.field, a = n.variables, s = n.fieldName, o = jf(t, function(l) {
      var c = l[0], f = c.charAt(0);
      if (f === "@") {
        if (i && yr(i.directives)) {
          var h = c.slice(1), d = i.directives.find(function(v) {
            return v.name.value === h;
          }), p = d && uu(d, a);
          return p && bi(
            p,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            l.slice(1)
          );
        }
        return;
      }
      if (f === "$") {
        var m = c.slice(1);
        if (a && bt.call(a, m)) {
          var y = l.slice(0);
          return y[0] = m, bi(a, y);
        }
        return;
      }
      if (r)
        return bi(r, l);
    }), u = JSON.stringify(o);
    return (r || u !== "{}") && (s += ":" + u), s;
  });
}
function jf(t, e) {
  var r = new hn();
  return eg(t).reduce(function(n, i) {
    var a, s = e(i);
    if (s !== void 0) {
      for (var o = i.length - 1; o >= 0; --o)
        s = (a = {}, a[i[o]] = s, a);
      n = r.merge(n, s);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function eg(t) {
  var e = $f(t);
  if (!e.paths) {
    var r = e.paths = [], n = [];
    t.forEach(function(i, a) {
      nt(i) ? (eg(i).forEach(function(s) {
        return r.push(n.concat(s));
      }), n.length = 0) : (n.push(i), nt(t[a + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return e.paths;
}
function tg(t, e) {
  return t[e];
}
function bi(t, e, r) {
  return r = r || tg, rg(e.reduce(function n(i, a) {
    return nt(i) ? i.map(function(s) {
      return n(s, a);
    }) : i && r(i, a);
  }, t));
}
function rg(t) {
  return rt(t) ? nt(t) ? t.map(rg) : jf(Object.keys(t).sort(), function(e) {
    return bi(t, e);
  }) : t;
}
function wc(t) {
  return t.args !== void 0 ? t.args : t.field ? uu(t.field, t.variables) : null;
}
var k_ = function() {
}, up = function(t, e) {
  return e.fieldName;
}, lp = function(t, e, r) {
  var n = r.mergeObjects;
  return n(t, e);
}, cp = function(t, e) {
  return e;
}, T_ = (
  /** @class */
  function() {
    function t(e) {
      this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = T({ dataIdFromObject: Qy }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return t.prototype.identify = function(e, r) {
      var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      for (var s = r && r.storeObject || e, o = T(T({}, r), { typename: a, storeObject: s, readField: r && r.readField || function() {
        var h = Vf(arguments, s);
        return i.readField(h, {
          store: i.cache.data,
          variables: h.variables
        });
      } }), u, l = a && this.getTypePolicy(a), c = l && l.keyFn || this.config.dataIdFromObject; c; ) {
        var f = c(T(T({}, e), s), o);
        if (nt(f))
          c = sp(f);
        else {
          u = f;
          break;
        }
      }
      return u = u ? String(u) : void 0, o.keyObject ? [u, o.keyObject] : [u];
    }, t.prototype.addTypePolicies = function(e) {
      var r = this;
      Object.keys(e).forEach(function(n) {
        var i = e[n], a = i.queryType, s = i.mutationType, o = i.subscriptionType, u = Mr(i, ["queryType", "mutationType", "subscriptionType"]);
        a && r.setRootTypename("Query", n), s && r.setRootTypename("Mutation", n), o && r.setRootTypename("Subscription", n), bt.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
      });
    }, t.prototype.updateTypePolicy = function(e, r) {
      var n = this, i = this.getTypePolicy(e), a = r.keyFields, s = r.fields;
      function o(u, l) {
        u.merge = typeof l == "function" ? l : l === !0 ? lp : l === !1 ? cp : u.merge;
      }
      o(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? k_ : nt(a) ? sp(a) : typeof a == "function" ? a : i.keyFn, s && Object.keys(s).forEach(function(u) {
        var l = n.getFieldPolicy(e, u, !0), c = s[u];
        if (typeof c == "function")
          l.read = c;
        else {
          var f = c.keyArgs, h = c.read, d = c.merge;
          l.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          f === !1 ? up : nt(f) ? op(f) : typeof f == "function" ? f : l.keyFn, typeof h == "function" && (l.read = h), o(l, d);
        }
        l.read && l.merge && (l.keyFn = l.keyFn || up);
      });
    }, t.prototype.setRootTypename = function(e, r) {
      r === void 0 && (r = e);
      var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && (me(!i || i === e, 5, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
    }, t.prototype.addPossibleTypes = function(e) {
      var r = this;
      this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
        r.getSupertypeSet(n, !0), e[n].forEach(function(i) {
          r.getSupertypeSet(i, !0).add(n);
          var a = i.match(Jy);
          (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, t.prototype.getTypePolicy = function(e) {
      var r = this;
      if (!bt.call(this.typePolicies, e)) {
        var n = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
        n.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(e);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(s, o) {
          if (s.test(e)) {
            var u = r.supertypeMap.get(o);
            u && u.forEach(function(l) {
              return i.add(l);
            });
          }
        })), i && i.size && i.forEach(function(s) {
          var o = r.getTypePolicy(s), u = o.fields, l = Mr(o, ["fields"]);
          Object.assign(n, l), Object.assign(n.fields, u);
        });
      }
      var a = this.toBeAdded[e];
      return a && a.length && a.splice(0).forEach(function(s) {
        r.updateTypePolicy(e, s);
      }), this.typePolicies[e];
    }, t.prototype.getFieldPolicy = function(e, r, n) {
      if (e) {
        var i = this.getTypePolicy(e).fields;
        return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
      }
    }, t.prototype.getSupertypeSet = function(e, r) {
      var n = this.supertypeMap.get(e);
      return !n && r && this.supertypeMap.set(e, n = /* @__PURE__ */ new Set()), n;
    }, t.prototype.fragmentMatches = function(e, r, n, i) {
      var a = this;
      if (!e.typeCondition)
        return !0;
      if (!r)
        return !1;
      var s = e.typeCondition.name.value;
      if (r === s)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(s))
        for (var o = this.getSupertypeSet(r, !0), u = [o], l = function(p) {
          var m = a.getSupertypeSet(p, !1);
          m && m.size && u.indexOf(m) < 0 && u.push(m);
        }, c = !!(n && this.fuzzySubtypes.size), f = !1, h = 0; h < u.length; ++h) {
          var d = u[h];
          if (d.has(s))
            return o.has(s) || (f && globalThis.__DEV__ !== !1 && me.warn(6, r, s), o.add(s)), !0;
          d.forEach(l), c && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          h === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          bc(e.selectionSet, n, i) && (c = !1, f = !0, this.fuzzySubtypes.forEach(function(p, m) {
            var y = r.match(p);
            y && y[0] === r && l(m);
          }));
        }
      return !1;
    }, t.prototype.hasKeyArgs = function(e, r) {
      var n = this.getFieldPolicy(e, r, !1);
      return !!(n && n.keyFn);
    }, t.prototype.getStoreFieldName = function(e) {
      var r = e.typename, n = e.fieldName, i = this.getFieldPolicy(r, n, !1), a, s = i && i.keyFn;
      if (s && r)
        for (var o = {
          typename: r,
          fieldName: n,
          field: e.field || null,
          variables: e.variables
        }, u = wc(e); s; ) {
          var l = s(u, o);
          if (nt(l))
            s = op(l);
          else {
            a = l || n;
            break;
          }
        }
      return a === void 0 && (a = e.field ? Wk(e.field, e.variables) : hy(n, wc(e))), a === !1 ? n : n === pn(a) ? a : n + ":" + a;
    }, t.prototype.readField = function(e, r) {
      var n = e.from;
      if (n) {
        var i = e.field || e.fieldName;
        if (i) {
          if (e.typename === void 0) {
            var a = r.store.getFieldValue(n, "__typename");
            a && (e.typename = a);
          }
          var s = this.getStoreFieldName(e), o = pn(s), u = r.store.getFieldValue(n, s), l = this.getFieldPolicy(e.typename, o, !1), c = l && l.read;
          if (c) {
            var f = fp(this, n, e, r, r.store.getStorage(ze(n) ? n.__ref : n, s));
            return Lf.withValue(this.cache, c, [
              u,
              f
            ]);
          }
          return u;
        }
      }
    }, t.prototype.getReadFunction = function(e, r) {
      var n = this.getFieldPolicy(e, r, !1);
      return n && n.read;
    }, t.prototype.getMergeFunction = function(e, r, n) {
      var i = this.getFieldPolicy(e, r, !1), a = i && i.merge;
      return !a && n && (i = this.getTypePolicy(n), a = i && i.merge), a;
    }, t.prototype.runMergeFunction = function(e, r, n, i, a) {
      var s = n.field, o = n.typename, u = n.merge;
      return u === lp ? ng(i.store)(e, r) : u === cp ? r : (i.overwrite && (e = void 0), u(e, r, fp(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename: o,
          fieldName: s.name.value,
          field: s,
          variables: i.variables
        },
        i,
        a || /* @__PURE__ */ Object.create(null)
      )));
    }, t;
  }()
);
function fp(t, e, r, n, i) {
  var a = t.getStoreFieldName(r), s = pn(a), o = r.variables || n.variables, u = n.store, l = u.toReference, c = u.canRead;
  return {
    args: wc(r),
    field: r.field || null,
    fieldName: s,
    storeFieldName: a,
    variables: o,
    isReference: ze,
    toReference: l,
    storage: i,
    cache: t.cache,
    canRead: c,
    readField: function() {
      return t.readField(Vf(arguments, e, o), n);
    },
    mergeObjects: ng(n.store)
  };
}
function Vf(t, e, r) {
  var n = t[0], i = t[1], a = t.length, s;
  return typeof n == "string" ? s = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : e
  } : (s = T({}, n), bt.call(s, "from") || (s.from = e)), globalThis.__DEV__ !== !1 && s.from === void 0 && globalThis.__DEV__ !== !1 && me.warn(7, Zv(Array.from(t))), s.variables === void 0 && (s.variables = r), s;
}
function ng(t) {
  return function(r, n) {
    if (nt(r) || nt(n))
      throw Dt(8);
    if (rt(r) && rt(n)) {
      var i = t.getFieldValue(r, "__typename"), a = t.getFieldValue(n, "__typename"), s = i && a && i !== a;
      if (s)
        return n;
      if (ze(r) && ci(n))
        return t.merge(r.__ref, n), r;
      if (ci(r) && ze(n))
        return t.merge(r, n.__ref), n;
      if (ci(r) && ci(n))
        return T(T({}, r), n);
    }
    return n;
  };
}
function sl(t, e, r) {
  var n = "".concat(e).concat(r), i = t.flavors.get(n);
  return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : T(T({}, t), { clientOnly: e, deferred: r })), i;
}
var __ = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.cache = e, this.reader = r, this.fragments = n;
    }
    return t.prototype.writeToStore = function(e, r) {
      var n = this, i = r.query, a = r.result, s = r.dataId, o = r.variables, u = r.overwrite, l = Ka(i), c = h_();
      o = T(T({}, Sf(l)), o);
      var f = T(T({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(d, p) {
        return c.merge(d, p);
      }, variables: o, varString: sn(o) }, Ky(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), h = this.processSelectionSet({
        result: a || /* @__PURE__ */ Object.create(null),
        dataId: s,
        selectionSet: l.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: f
      });
      if (!ze(h))
        throw Dt(11, a);
      return f.incomingById.forEach(function(d, p) {
        var m = d.storeObject, y = d.mergeTree, v = d.fieldNodeSet, b = yi(p);
        if (y && y.map.size) {
          var g = n.applyMerges(y, b, m, f);
          if (ze(g))
            return;
          m = g;
        }
        if (globalThis.__DEV__ !== !1 && !f.overwrite) {
          var x = /* @__PURE__ */ Object.create(null);
          v.forEach(function(A) {
            A.selectionSet && (x[A.name.value] = !0);
          });
          var w = function(A) {
            return x[pn(A)] === !0;
          }, S = function(A) {
            var O = y && y.map.get(A);
            return !!(O && O.info && O.info.merge);
          };
          Object.keys(m).forEach(function(A) {
            w(A) && !S(A) && S_(b, m, A, f.store);
          });
        }
        e.merge(p, m);
      }), e.retain(h.__ref), h;
    }, t.prototype.processSelectionSet = function(e) {
      var r = this, n = e.dataId, i = e.result, a = e.selectionSet, s = e.context, o = e.mergeTree, u = this.cache.policies, l = /* @__PURE__ */ Object.create(null), c = n && u.rootTypenamesById[n] || lc(i, a, s.fragmentMap) || n && s.store.get(n, "__typename");
      typeof c == "string" && (l.__typename = c);
      var f = function() {
        var g = Vf(arguments, l, s.variables);
        if (ze(g.from)) {
          var x = s.incomingById.get(g.from.__ref);
          if (x) {
            var w = u.readField(T(T({}, g), { from: x.storeObject }), s);
            if (w !== void 0)
              return w;
          }
        }
        return u.readField(g, s);
      }, h = /* @__PURE__ */ new Set();
      this.flattenFields(
        a,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        s,
        c
      ).forEach(function(g, x) {
        var w, S = cn(x), A = i[S];
        if (h.add(x), A !== void 0) {
          var O = u.getStoreFieldName({
            typename: c,
            fieldName: x.name.value,
            field: x,
            variables: g.variables
          }), N = dp(o, O), F = r.processFieldValue(
            A,
            x,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            x.selectionSet ? sl(g, !1, !1) : g,
            N
          ), Q = void 0;
          x.selectionSet && (ze(F) || ci(F)) && (Q = f("__typename", F));
          var M = u.getMergeFunction(c, x.name.value, Q);
          M ? N.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: x,
            typename: c,
            merge: M
          } : hp(o, O), l = g.merge(l, (w = {}, w[O] = F, w));
        } else
          globalThis.__DEV__ !== !1 && !g.clientOnly && !g.deferred && !Nf.added(x) && // If the field has a read function, it may be a synthetic field or
          // provide a default value, so its absence from the written data should
          // not be cause for alarm.
          !u.getReadFunction(c, x.name.value) && globalThis.__DEV__ !== !1 && me.error(12, cn(x), i);
      });
      try {
        var d = u.identify(i, {
          typename: c,
          selectionSet: a,
          fragmentMap: s.fragmentMap,
          storeObject: l,
          readField: f
        }), p = d[0], m = d[1];
        n = n || p, m && (l = s.merge(l, m));
      } catch (g) {
        if (!n)
          throw g;
      }
      if (typeof n == "string") {
        var y = yi(n), v = s.written[n] || (s.written[n] = []);
        if (v.indexOf(a) >= 0 || (v.push(a), this.reader && this.reader.isFresh(i, y, a, s)))
          return y;
        var b = s.incomingById.get(n);
        return b ? (b.storeObject = s.merge(b.storeObject, l), b.mergeTree = Ec(b.mergeTree, o), h.forEach(function(g) {
          return b.fieldNodeSet.add(g);
        })) : s.incomingById.set(n, {
          storeObject: l,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: go(o) ? void 0 : o,
          fieldNodeSet: h
        }), y;
      }
      return l;
    }, t.prototype.processFieldValue = function(e, r, n, i) {
      var a = this;
      return !r.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? Py(e) : e : nt(e) ? e.map(function(s, o) {
        var u = a.processFieldValue(s, r, n, dp(i, o));
        return hp(i, o), u;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, t.prototype.flattenFields = function(e, r, n, i) {
      i === void 0 && (i = lc(r, e, n.fragmentMap));
      var a = /* @__PURE__ */ new Map(), s = this.cache.policies, o = new Wi(!1);
      return function u(l, c) {
        var f = o.lookup(
          l,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          c.clientOnly,
          c.deferred
        );
        f.visited || (f.visited = !0, l.selections.forEach(function(h) {
          if (Ga(h, n.variables)) {
            var d = c.clientOnly, p = c.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(d && p) && yr(h.directives) && h.directives.forEach(function(v) {
                var b = v.name.value;
                if (b === "client" && (d = !0), b === "defer") {
                  var g = uu(v, n.variables);
                  (!g || g.if !== !1) && (p = !0);
                }
              }), fn(h)
            ) {
              var m = a.get(h);
              m && (d = d && m.clientOnly, p = p && m.deferred), a.set(h, sl(n, d, p));
            } else {
              var y = ou(h, n.lookupFragment);
              if (!y && h.kind === se.FRAGMENT_SPREAD)
                throw Dt(13, h.name.value);
              y && s.fragmentMatches(y, i, r, n.variables) && u(y.selectionSet, sl(n, d, p));
            }
          }
        }));
      }(e, n), a;
    }, t.prototype.applyMerges = function(e, r, n, i, a) {
      var s, o = this;
      if (e.map.size && !ze(n)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !nt(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (ze(r) || ci(r)) ? r : void 0
        ), l = n;
        u && !a && (a = [ze(u) ? u.__ref : u]);
        var c, f = function(h, d) {
          return nt(h) ? typeof d == "number" ? h[d] : void 0 : i.store.getFieldValue(h, String(d));
        };
        e.map.forEach(function(h, d) {
          var p = f(u, d), m = f(l, d);
          if (m !== void 0) {
            a && a.push(d);
            var y = o.applyMerges(h, p, m, i, a);
            y !== m && (c = c || /* @__PURE__ */ new Map(), c.set(d, y)), a && me(a.pop() === d);
          }
        }), c && (n = nt(l) ? l.slice(0) : T({}, l), c.forEach(function(h, d) {
          n[d] = h;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, a && (s = i.store).getStorage.apply(s, a)) : n;
    }, t;
  }()
), ig = [];
function dp(t, e) {
  var r = t.map;
  return r.has(e) || r.set(e, ig.pop() || { map: /* @__PURE__ */ new Map() }), r.get(e);
}
function Ec(t, e) {
  if (t === e || !e || go(e))
    return t;
  if (!t || go(t))
    return e;
  var r = t.info && e.info ? T(T({}, t.info), e.info) : t.info || e.info, n = t.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : t.map.size ? t.map : e.map, a = { info: r, map: i };
  if (n) {
    var s = new Set(e.map.keys());
    t.map.forEach(function(o, u) {
      a.map.set(u, Ec(o, e.map.get(u))), s.delete(u);
    }), s.forEach(function(o) {
      a.map.set(o, Ec(e.map.get(o), t.map.get(o)));
    });
  }
  return a;
}
function go(t) {
  return !t || !(t.info || t.map.size);
}
function hp(t, e) {
  var r = t.map, n = r.get(e);
  n && go(n) && (ig.push(n), r.delete(e));
}
var pp = /* @__PURE__ */ new Set();
function S_(t, e, r, n) {
  var i = function(f) {
    var h = n.getFieldValue(f, r);
    return typeof h == "object" && h;
  }, a = i(t);
  if (a) {
    var s = i(e);
    if (s && !ze(a) && !Be(a, s) && !Object.keys(a).every(function(f) {
      return n.getFieldValue(s, f) !== void 0;
    })) {
      var o = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"), u = pn(r), l = "".concat(o, ".").concat(u);
      if (!pp.has(l)) {
        pp.add(l);
        var c = [];
        !nt(a) && !nt(s) && [a, s].forEach(function(f) {
          var h = n.getFieldValue(f, "__typename");
          typeof h == "string" && !c.includes(h) && c.push(h);
        }), globalThis.__DEV__ !== !1 && me.warn(14, u, o, c.length ? "either ensure all objects of type " + c.join(" and ") + " have an ID or a custom merge function, or " : "", l, T({}, a), T({}, s));
      }
    }
  }
}
var ag = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Oy(Nf), n.assumeImmutableResults = !0, n.makeVar = E_, n.txCount = 0, n.config = f_(r), n.addTypename = !!n.config.addTypename, n.policies = new T_({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return e.prototype.init = function() {
      var r = this.data = new Pa.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new __(this, this.storeReader = new y_({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Gy(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = Da(function(s, o) {
        return n.broadcastWatch(s, o);
      }, {
        max: this.config.resultCacheMaxSize || vr["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(s) {
          var o = s.optimistic ? n.optimisticData : n.data;
          if (pa(o)) {
            var u = s.optimistic, l = s.id, c = s.variables;
            return o.makeCacheKey(
              s.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              s.callback,
              sn({ optimistic: u, id: l, variables: c })
            );
          }
        }
      }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(s) {
        return s.resetCaching();
      });
    }, e.prototype.restore = function(r) {
      return this.init(), r && this.data.replace(r), this;
    }, e.prototype.extract = function(r) {
      return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
    }, e.prototype.read = function(r) {
      var n = r.returnPartialData, i = n === void 0 ? !1 : n;
      try {
        return this.storeReader.diffQueryAgainstStore(T(T({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof Yy)
          return null;
        throw a;
      }
    }, e.prototype.write = function(r) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.modify = function(r) {
      if (bt.call(r, "id") && !r.id)
        return !1;
      var n = r.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.diff = function(r) {
      return this.storeReader.diffQueryAgainstStore(T(T({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || w_(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && ip(n), n.maybeBroadcastWatch.forget(r);
      };
    }, e.prototype.gc = function(r) {
      var n;
      sn.reset(), du.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, e.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, e.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, e.prototype.identify = function(r) {
      if (ze(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && me.warn(n);
      }
    }, e.prototype.evict = function(r) {
      if (!r.id) {
        if (bt.call(r, "id"))
          return !1;
        r = T(T({}, r), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.reset = function(r) {
      var n = this;
      return this.init(), sn.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), ip(this)) : this.broadcastWatches(), Promise.resolve();
    }, e.prototype.removeOptimistic = function(r) {
      var n = this.optimisticData.removeLayer(r);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, e.prototype.batch = function(r) {
      var n = this, i = r.update, a = r.optimistic, s = a === void 0 ? !0 : a, o = r.removeOptimistic, u = r.onWatchUpdated, l, c = function(h) {
        var d = n, p = d.data, m = d.optimisticData;
        ++n.txCount, h && (n.data = n.optimisticData = h);
        try {
          return l = i(n);
        } finally {
          --n.txCount, n.data = p, n.optimisticData = m;
        }
      }, f = /* @__PURE__ */ new Set();
      return u && !this.txCount && this.broadcastWatches(T(T({}, r), { onWatchUpdated: function(h) {
        return f.add(h), !1;
      } })), typeof s == "string" ? this.optimisticData = this.optimisticData.addLayer(s, c) : s === !1 ? c(this.data) : c(), typeof o == "string" && (this.optimisticData = this.optimisticData.removeLayer(o)), u && f.size ? (this.broadcastWatches(T(T({}, r), { onWatchUpdated: function(h, d) {
        var p = u.call(this, h, d);
        return p !== !1 && f.delete(h), p;
      } })), f.size && f.forEach(function(h) {
        return n.maybeBroadcastWatch.dirty(h);
      })) : this.broadcastWatches(r), l;
    }, e.prototype.performTransaction = function(r, n) {
      return this.batch({
        update: r,
        optimistic: n || n !== null
      });
    }, e.prototype.transformDocument = function(r) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(r));
    }, e.prototype.broadcastWatches = function(r) {
      var n = this;
      this.txCount || this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch(i, r);
      });
    }, e.prototype.addFragmentsToDocument = function(r) {
      var n = this.config.fragments;
      return n ? n.transform(r) : r;
    }, e.prototype.addTypenameToDocument = function(r) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
    }, e.prototype.broadcastWatch = function(r, n) {
      var i = r.lastDiff, a = this.diff(r);
      n && (r.optimistic && typeof n.optimistic == "string" && (a.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1) || (!i || !Be(i.result, a.result)) && r.callback(r.lastDiff = a, i);
    }, e;
  }(Hy)
);
globalThis.__DEV__ !== !1 && (ag.prototype.getMemoryInternals = Tk);
var We;
(function(t) {
  t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error";
})(We || (We = {}));
function Ma(t) {
  return t ? t < 7 : !1;
}
var mp = Object.assign, O_ = Object.hasOwnProperty, xc = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      var n = r.queryManager, i = r.queryInfo, a = r.options, s = t.call(this, function(y) {
        try {
          var v = y._subscription._observer;
          v && !v.error && (v.error = C_);
        } catch {
        }
        var b = !s.observers.size;
        s.observers.add(y);
        var g = s.last;
        return g && g.error ? y.error && y.error(g.error) : g && g.result && y.next && y.next(g.result), b && s.reobserve().catch(function() {
        }), function() {
          s.observers.delete(y) && !s.observers.size && s.tearDownQuery();
        };
      }) || this;
      s.observers = /* @__PURE__ */ new Set(), s.subscriptions = /* @__PURE__ */ new Set(), s.queryInfo = i, s.queryManager = n, s.waitForOwnResult = ol(a.fetchPolicy), s.isTornDown = !1;
      var o = n.defaultOptions.watchQuery, u = o === void 0 ? {} : o, l = u.fetchPolicy, c = l === void 0 ? "cache-first" : l, f = a.fetchPolicy, h = f === void 0 ? c : f, d = a.initialFetchPolicy, p = d === void 0 ? h === "standby" ? c : h : d;
      s.options = T(T({}, a), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: p,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: h
      }), s.queryId = i.queryId || n.generateQueryId();
      var m = Ka(s.query);
      return s.queryName = m && m.name && m.name.value, s;
    }
    return Object.defineProperty(e.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.result = function() {
      var r = this;
      return new Promise(function(n, i) {
        var a = {
          next: function(o) {
            n(o), r.observers.delete(a), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
              s.unsubscribe();
            }, 0);
          },
          error: i
        }, s = r.subscribe(a);
      });
    }, e.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, e.prototype.getCurrentResult = function(r) {
      r === void 0 && (r = !0);
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || We.ready, a = T(T({}, n), { loading: Ma(i), networkStatus: i }), s = this.options.fetchPolicy, o = s === void 0 ? "cache-first" : s;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(ol(o) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      )
        if (this.waitForOwnResult)
          this.queryInfo.updateWatch();
        else {
          var u = this.queryInfo.getDiff();
          (u.complete || this.options.returnPartialData) && (a.data = u.result), Be(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === We.loading && (o === "cache-first" || o === "cache-only") && (a.networkStatus = We.ready, a.loading = !1)) : a.partial = !0, globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && og(u.missing);
        }
      return r && this.updateLastResult(a), a;
    }, e.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !By(this.query, this.last.result, r, this.variables) : !Be(this.last.result, r);
      return i || n && !Be(this.last.variables, n);
    }, e.prototype.getLast = function(r, n) {
      var i = this.last;
      if (i && i[r] && (!n || Be(i.variables, this.variables)))
        return i[r];
    }, e.prototype.getLastResult = function(r) {
      return this.getLast("result", r);
    }, e.prototype.getLastError = function(r) {
      return this.getLast("error", r);
    }, e.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, e.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, e.prototype.refetch = function(r) {
      var n, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, a = this.options.fetchPolicy;
      if (a === "cache-and-network" ? i.fetchPolicy = a : a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && O_.call(r, "variables")) {
        var s = py(this.query), o = s.variableDefinitions;
        (!o || !o.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && me.warn(
          20,
          r,
          ((n = s.name) === null || n === void 0 ? void 0 : n.value) || s
        );
      }
      return r && !Be(this.options.variables, r) && (i.variables = this.options.variables = T(T({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, We.refetch);
    }, e.prototype.fetchMore = function(r) {
      var n = this, i = T(T({}, r.query ? r : T(T(T(T({}, this.options), { query: this.options.query }), r), { variables: T(T({}, this.options.variables), r.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      i.query = this.transformDocument(i.query);
      var a = this.queryManager.generateQueryId();
      this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
      var s = this.queryInfo, o = s.networkStatus;
      s.networkStatus = We.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var u = /* @__PURE__ */ new Set();
      return this.queryManager.fetchQuery(a, i, We.fetchMore).then(function(l) {
        return n.queryManager.removeQuery(a), s.networkStatus === We.fetchMore && (s.networkStatus = o), n.queryManager.cache.batch({
          update: function(c) {
            var f = r.updateQuery;
            f ? c.updateQuery({
              query: n.query,
              variables: n.variables,
              returnPartialData: !0,
              optimistic: !1
            }, function(h) {
              return f(h, {
                fetchMoreResult: l.data,
                variables: i.variables
              });
            }) : c.writeQuery({
              query: i.query,
              variables: i.variables,
              data: l.data
            });
          },
          onWatchUpdated: function(c) {
            u.add(c.query);
          }
        }), l;
      }).finally(function() {
        u.has(n.query) || sg(n);
      });
    }, e.prototype.subscribeToMore = function(r) {
      var n = this, i = this.queryManager.startGraphQLSubscription({
        query: r.document,
        variables: r.variables,
        context: r.context
      }).subscribe({
        next: function(a) {
          var s = r.updateQuery;
          s && n.updateQuery(function(o, u) {
            var l = u.variables;
            return s(o, {
              subscriptionData: a,
              variables: l
            });
          });
        },
        error: function(a) {
          if (r.onError) {
            r.onError(a);
            return;
          }
          globalThis.__DEV__ !== !1 && me.error(21, a);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, e.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, e.prototype.silentSetOptions = function(r) {
      var n = Oi(this.options, r || {});
      mp(this.options, n);
    }, e.prototype.setVariables = function(r) {
      return Be(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: r
      }, We.setVariables) : Promise.resolve());
    }, e.prototype.updateQuery = function(r) {
      var n = this.queryManager, i = n.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }).result, a = r(i, {
        variables: this.variables
      });
      a && (n.cache.writeQuery({
        query: this.options.query,
        data: a,
        variables: this.variables
      }), n.broadcastQueries());
    }, e.prototype.startPolling = function(r) {
      this.options.pollInterval = r, this.updatePolling();
    }, e.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, e.prototype.applyNextFetchPolicy = function(r, n) {
      if (n.nextFetchPolicy) {
        var i = n.fetchPolicy, a = i === void 0 ? "cache-first" : i, s = n.initialFetchPolicy, o = s === void 0 ? a : s;
        a === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(a, {
          reason: r,
          options: n,
          observable: this,
          initialFetchPolicy: o
        }) : r === "variables-changed" ? n.fetchPolicy = o : n.fetchPolicy = n.nextFetchPolicy);
      }
      return n.fetchPolicy;
    }, e.prototype.fetch = function(r, n, i) {
      return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, n, i);
    }, e.prototype.updatePolling = function() {
      var r = this;
      if (!this.queryManager.ssrMode) {
        var n = this, i = n.pollingInfo, a = n.options.pollInterval;
        if (!a || !this.hasObservers()) {
          i && (clearTimeout(i.timeout), delete this.pollingInfo);
          return;
        }
        if (!(i && i.interval === a)) {
          me(a, 22);
          var s = i || (this.pollingInfo = {});
          s.interval = a;
          var o = function() {
            var l, c;
            r.pollingInfo && (!Ma(r.queryInfo.networkStatus) && !(!((c = (l = r.options).skipPollAttempt) === null || c === void 0) && c.call(l)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, We.poll).then(u, u) : u());
          }, u = function() {
            var l = r.pollingInfo;
            l && (clearTimeout(l.timeout), l.timeout = setTimeout(o, l.interval));
          };
          u();
        }
      }
    }, e.prototype.updateLastResult = function(r, n) {
      n === void 0 && (n = this.variables);
      var i = this.getLastError();
      return i && this.last && !Be(n, this.last.variables) && (i = void 0), this.last = T({ result: this.queryManager.assumeImmutableResults ? r : Py(r), variables: n }, i ? { error: i } : null);
    }, e.prototype.reobserveAsConcast = function(r, n) {
      var i = this;
      this.isTornDown = !1;
      var a = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === We.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === We.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === We.poll
      ), s = this.options.variables, o = this.options.fetchPolicy, u = Oi(this.options, r || {}), l = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : mp(this.options, u), c = this.transformDocument(l.query);
      this.lastQuery = c, a || (this.updatePolling(), r && r.variables && !Be(r.variables, s) && // Don't mess with the fetchPolicy if it's currently "standby".
      l.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      l.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", l), n === void 0 && (n = We.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = ol(l.fetchPolicy));
      var f = function() {
        i.concast === p && (i.waitForOwnResult = !1);
      }, h = l.variables && T({}, l.variables), d = this.fetch(l, n, c), p = d.concast, m = d.fromLink, y = {
        next: function(v) {
          Be(i.variables, h) && (f(), i.reportResult(v, h));
        },
        error: function(v) {
          Be(i.variables, h) && (f(), i.reportError(v, h));
        }
      };
      return !a && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = y), p.addObserver(y), p;
    }, e.prototype.reobserve = function(r, n) {
      return this.reobserveAsConcast(r, n).promise;
    }, e.prototype.resubscribeAfterError = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      var i = this.last;
      this.resetLastResults();
      var a = this.subscribe.apply(this, r);
      return this.last = i, a;
    }, e.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentResult(!1),
        this.variables
      );
    }, e.prototype.reportResult = function(r, n) {
      var i = this.getLastError(), a = this.isDifferentFromLastResult(r, n);
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && ha(this.observers, "next", r);
    }, e.prototype.reportError = function(r, n) {
      var i = T(T({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: We.error, loading: !1 });
      this.updateLastResult(i, n), ha(this.observers, "error", this.last.error = r);
    }, e.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, e.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, e.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, e;
  }(Ve)
);
My(xc);
function sg(t) {
  var e = t.options, r = e.fetchPolicy, n = e.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? t.reobserve({
    fetchPolicy: "cache-first",
    // Use a temporary nextFetchPolicy function that replaces itself with the
    // previous nextFetchPolicy value and returns the original fetchPolicy.
    nextFetchPolicy: function(i, a) {
      return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, a) : r;
    }
  }) : t.reobserve();
}
function C_(t) {
  globalThis.__DEV__ !== !1 && me.error(23, t.message, t.stack);
}
function og(t) {
  globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && me.debug(24, t);
}
function ol(t) {
  return t === "network-only" || t === "no-cache" || t === "standby";
}
var ug = (
  /** @class */
  function() {
    function t(e) {
      var r = e.cache, n = e.client, i = e.resolvers, a = e.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
    }
    return t.prototype.addResolvers = function(e) {
      var r = this;
      this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
        r.resolvers = $h(r.resolvers, n);
      }) : this.resolvers = $h(this.resolvers, e);
    }, t.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, t.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, t.prototype.runResolvers = function(e) {
      return Zr(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, a = r.context, s = r.variables, o = r.onlyRunForcedResolvers, u = o === void 0 ? !1 : o;
        return Gr(this, function(l) {
          return n ? [2, this.resolveDocument(n, i.data, a, s, this.fragmentMatcher, u).then(function(c) {
            return T(T({}, i), { data: c.result });
          })] : [2, i];
        });
      });
    }, t.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e;
    }, t.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, t.prototype.clientQuery = function(e) {
      return Aa(["client"], e) && this.resolvers ? e : null;
    }, t.prototype.serverQuery = function(e) {
      return Ay(e);
    }, t.prototype.prepareContext = function(e) {
      var r = this.cache;
      return T(T({}, e), {
        cache: r,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return r.identify(n);
        }
      });
    }, t.prototype.addExportedVariables = function(e) {
      return Zr(this, arguments, void 0, function(r, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), Gr(this, function(a) {
          return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(s) {
            return T(T({}, n), s.exportedVariables);
          })] : [2, T({}, n)];
        });
      });
    }, t.prototype.shouldForceResolvers = function(e) {
      var r = !1;
      return Fr(e, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), r))
              return xf;
          }
        }
      }), r;
    }, t.prototype.buildRootValueFromCache = function(e, r) {
      return this.cache.diff({
        query: cT(e),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, t.prototype.resolveDocument = function(e, r) {
      return Zr(this, arguments, void 0, function(n, i, a, s, o, u) {
        var l, c, f, h, d, p, m, y, v, b, g;
        return a === void 0 && (a = {}), s === void 0 && (s = {}), o === void 0 && (o = function() {
          return !0;
        }), u === void 0 && (u = !1), Gr(this, function(x) {
          return l = Xa(n), c = lu(n), f = su(c), h = this.collectSelectionsToResolve(l, f), d = l.operation, p = d ? d.charAt(0).toUpperCase() + d.slice(1) : "Query", m = this, y = m.cache, v = m.client, b = {
            fragmentMap: f,
            context: T(T({}, a), { cache: y, client: v }),
            variables: s,
            fragmentMatcher: o,
            defaultOperationType: p,
            exportedVariables: {},
            selectionsToResolve: h,
            onlyRunForcedResolvers: u
          }, g = !1, [2, this.resolveSelectionSet(l.selectionSet, g, i, b).then(function(w) {
            return {
              result: w,
              exportedVariables: b.exportedVariables
            };
          })];
        });
      });
    }, t.prototype.resolveSelectionSet = function(e, r, n, i) {
      return Zr(this, void 0, void 0, function() {
        var a, s, o, u, l, c = this;
        return Gr(this, function(f) {
          return a = i.fragmentMap, s = i.context, o = i.variables, u = [n], l = function(h) {
            return Zr(c, void 0, void 0, function() {
              var d, p;
              return Gr(this, function(m) {
                return !r && !i.selectionsToResolve.has(h) ? [
                  2
                  /*return*/
                ] : Ga(h, o) ? fn(h) ? [2, this.resolveField(h, r, n, i).then(function(y) {
                  var v;
                  typeof y < "u" && u.push((v = {}, v[cn(h)] = y, v));
                })] : (Uk(h) ? d = h : (d = a[h.name.value], me(d, 18, h.name.value)), d && d.typeCondition && (p = d.typeCondition.name.value, i.fragmentMatcher(n, p, s)) ? [2, this.resolveSelectionSet(d.selectionSet, r, n, i).then(function(y) {
                  u.push(y);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(e.selections.map(l)).then(function() {
            return hu(u);
          })];
        });
      });
    }, t.prototype.resolveField = function(e, r, n, i) {
      return Zr(this, void 0, void 0, function() {
        var a, s, o, u, l, c, f, h, d, p = this;
        return Gr(this, function(m) {
          return n ? (a = i.variables, s = e.name.value, o = cn(e), u = s !== o, l = n[o] || n[s], c = Promise.resolve(l), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (f = n.__typename || i.defaultOperationType, h = this.resolvers && this.resolvers[f], h && (d = h[u ? s : o], d && (c = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            Lf.withValue(this.cache, d, [
              n,
              uu(e, a),
              i.context,
              { field: e, fragmentMap: i.fragmentMap }
            ])
          )))), [2, c.then(function(y) {
            var v, b;
            if (y === void 0 && (y = l), e.directives && e.directives.forEach(function(x) {
              x.name.value === "export" && x.arguments && x.arguments.forEach(function(w) {
                w.name.value === "as" && w.value.kind === "StringValue" && (i.exportedVariables[w.value.value] = y);
              });
            }), !e.selectionSet || y == null)
              return y;
            var g = (b = (v = e.directives) === null || v === void 0 ? void 0 : v.some(function(x) {
              return x.name.value === "client";
            })) !== null && b !== void 0 ? b : !1;
            if (Array.isArray(y))
              return p.resolveSubSelectedArray(e, r || g, y, i);
            if (e.selectionSet)
              return p.resolveSelectionSet(e.selectionSet, r || g, y, i);
          })]) : [2, null];
        });
      });
    }, t.prototype.resolveSubSelectedArray = function(e, r, n, i) {
      var a = this;
      return Promise.all(n.map(function(s) {
        if (s === null)
          return null;
        if (Array.isArray(s))
          return a.resolveSubSelectedArray(e, r, s, i);
        if (e.selectionSet)
          return a.resolveSelectionSet(e.selectionSet, r, s, i);
      }));
    }, t.prototype.collectSelectionsToResolve = function(e, r) {
      var n = function(s) {
        return !Array.isArray(s);
      }, i = this.selectionsToResolveCache;
      function a(s) {
        if (!i.has(s)) {
          var o = /* @__PURE__ */ new Set();
          i.set(s, o), Fr(s, {
            Directive: function(u, l, c, f, h) {
              u.name.value === "client" && h.forEach(function(d) {
                n(d) && Ch(d) && o.add(d);
              });
            },
            FragmentSpread: function(u, l, c, f, h) {
              var d = r[u.name.value];
              me(d, 19, u.name.value);
              var p = a(d);
              p.size > 0 && (h.forEach(function(m) {
                n(m) && Ch(m) && o.add(m);
              }), o.add(u), p.forEach(function(m) {
                o.add(m);
              }));
            }
          });
        }
        return i.get(s);
      }
      return a(e);
    }, t;
  }()
), fi = new (qi ? WeakMap : Map)();
function ul(t, e) {
  var r = t[e];
  typeof r == "function" && (t[e] = function() {
    return fi.set(
      t,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (fi.get(t) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
function vp(t) {
  t.notifyTimeout && (clearTimeout(t.notifyTimeout), t.notifyTimeout = void 0);
}
var ll = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var n = this.cache = e.cache;
      fi.has(n) || (fi.set(n, 0), ul(n, "evict"), ul(n, "modify"), ul(n, "reset"));
    }
    return t.prototype.init = function(e) {
      var r = e.networkStatus || We.loading;
      return this.variables && this.networkStatus !== We.loading && !Be(this.variables, e.variables) && (r = We.setVariables), Be(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
        document: e.document,
        variables: e.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
    }, t.prototype.reset = function() {
      vp(this), this.dirty = !1;
    }, t.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, t.prototype.getDiff = function() {
      var e = this.getDiffOptions();
      if (this.lastDiff && Be(e, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var r = this.observableQuery;
      if (r && r.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var n = this.cache.diff(e);
      return this.updateLastDiff(n, e), n;
    }, t.prototype.updateLastDiff = function(e, r) {
      this.lastDiff = e ? {
        diff: e,
        options: r || this.getDiffOptions()
      } : void 0;
    }, t.prototype.getDiffOptions = function(e) {
      var r;
      return e === void 0 && (e = this.variables), {
        query: this.document,
        variables: e,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
      };
    }, t.prototype.setDiff = function(e) {
      var r = this, n, i = this.lastDiff && this.lastDiff.diff;
      e && !e.complete && (!((n = this.observableQuery) === null || n === void 0) && n.getLastError()) || (this.updateLastDiff(e), !this.dirty && !Be(i && i.result, e && e.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return r.notify();
      }, 0))));
    }, t.prototype.setObservableQuery = function(e) {
      var r = this;
      e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
        var n = r.getDiff();
        n.fromOptimisticTransaction ? e.observe() : sg(e);
      })) : delete this.oqListener);
    }, t.prototype.notify = function() {
      var e = this;
      vp(this), this.shouldNotify() && this.listeners.forEach(function(r) {
        return r(e);
      }), this.dirty = !1;
    }, t.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (Ma(this.networkStatus) && this.observableQuery) {
        var e = this.observableQuery.options.fetchPolicy;
        if (e !== "cache-only" && e !== "cache-and-network")
          return !1;
      }
      return !0;
    }, t.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = !0, this.reset(), this.cancel(), this.cancel = t.prototype.cancel;
        var e = this.observableQuery;
        e && e.stopPolling();
      }
    }, t.prototype.cancel = function() {
    }, t.prototype.updateWatch = function(e) {
      var r = this;
      e === void 0 && (e = this.variables);
      var n = this.observableQuery;
      if (!(n && n.options.fetchPolicy === "no-cache")) {
        var i = T(T({}, this.getDiffOptions(e)), { watcher: this, callback: function(a) {
          return r.setDiff(a);
        } });
        (!this.lastWatch || !Be(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
      }
    }, t.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, t.prototype.shouldWrite = function(e, r) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === fi.get(this.cache) && Be(r, n.variables) && Be(e.data, n.result.data));
    }, t.prototype.markResult = function(e, r, n, i) {
      var a = this, s = new hn(), o = yr(e.errors) ? e.errors.slice(0) : [];
      if (this.reset(), "incremental" in e && yr(e.incremental)) {
        var u = Fy(this.getDiff().result, e);
        e.data = u;
      } else if ("hasNext" in e && e.hasNext) {
        var l = this.getDiff();
        e.data = s.merge(l.result, e.data);
      }
      this.graphQLErrors = o, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (kc(e, n.errorPolicy) ? this.cache.performTransaction(function(c) {
        if (a.shouldWrite(e, n.variables))
          c.writeQuery({
            query: r,
            data: e.data,
            variables: n.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: e,
            variables: n.variables,
            dmCount: fi.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          e.data = a.lastDiff.diff.result;
          return;
        }
        var f = a.getDiffOptions(n.variables), h = c.diff(f);
        !a.stopped && Be(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(h, f), h.complete && (e.data = h.result);
      }) : this.lastWrite = void 0);
    }, t.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = We.ready;
    }, t.prototype.markError = function(e) {
      return this.networkStatus = We.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
    }, t;
  }()
);
function kc(t, e) {
  e === void 0 && (e = "none");
  var r = e === "ignore" || e === "all", n = !Gs(t);
  return !n && r && t.data && (n = !0), n;
}
var I_ = Object.prototype.hasOwnProperty, yp = /* @__PURE__ */ Object.create(null), A_ = (
  /** @class */
  function() {
    function t(e) {
      var r = e.cache, n = e.link, i = e.defaultOptions, a = e.documentTransform, s = e.queryDeduplication, o = s === void 0 ? !1 : s, u = e.onBroadcast, l = e.ssrMode, c = l === void 0 ? !1 : l, f = e.clientAwareness, h = f === void 0 ? {} : f, d = e.localState, p = e.assumeImmutableResults, m = p === void 0 ? !!r.assumeImmutableResults : p, y = e.defaultContext, v = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Tf(
        vr["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Wi(!1);
      var b = new Oy(
        function(g) {
          return v.cache.transformDocument(g);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = o, this.clientAwareness = h, this.localState = d || new ug({ cache: r }), this.ssrMode = c, this.assumeImmutableResults = m, this.documentTransform = a ? b.concat(a).concat(b) : b, this.defaultContext = y || /* @__PURE__ */ Object.create(null), (this.onBroadcast = u) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return t.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(r, n) {
        e.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches(Dt(25));
    }, t.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(r) {
        return r(e);
      }), this.fetchCancelFns.clear();
    }, t.prototype.mutate = function(e) {
      return Zr(this, arguments, void 0, function(r) {
        var n, i, a, s, o, u, l, c = r.mutation, f = r.variables, h = r.optimisticResponse, d = r.updateQueries, p = r.refetchQueries, m = p === void 0 ? [] : p, y = r.awaitRefetchQueries, v = y === void 0 ? !1 : y, b = r.update, g = r.onQueryUpdated, x = r.fetchPolicy, w = x === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : x, S = r.errorPolicy, A = S === void 0 ? ((l = this.defaultOptions.mutate) === null || l === void 0 ? void 0 : l.errorPolicy) || "none" : S, O = r.keepRootFields, N = r.context;
        return Gr(this, function(F) {
          switch (F.label) {
            case 0:
              return me(c, 26), me(w === "network-only" || w === "no-cache", 27), n = this.generateMutationId(), c = this.cache.transformForLink(this.transform(c)), i = this.getDocumentInfo(c).hasClientExports, f = this.getVariables(c, f), i ? [4, this.localState.addExportedVariables(c, f, N)] : [3, 2];
            case 1:
              f = F.sent(), F.label = 2;
            case 2:
              return a = this.mutationStore && (this.mutationStore[n] = {
                mutation: c,
                variables: f,
                loading: !0,
                error: null
              }), s = h && this.markMutationOptimistic(h, {
                mutationId: n,
                document: c,
                variables: f,
                fetchPolicy: w,
                errorPolicy: A,
                context: N,
                updateQueries: d,
                update: b,
                keepRootFields: O
              }), this.broadcastQueries(), o = this, [2, new Promise(function(Q, M) {
                return rl(o.getObservableFromLink(c, T(T({}, N), { optimisticResponse: s ? h : void 0 }), f, !1), function(P) {
                  if (Gs(P) && A === "none")
                    throw new Tn({
                      graphQLErrors: mc(P)
                    });
                  a && (a.loading = !1, a.error = null);
                  var B = T({}, P);
                  return typeof m == "function" && (m = m(B)), A === "ignore" && Gs(B) && delete B.errors, o.markMutationResult({
                    mutationId: n,
                    result: B,
                    document: c,
                    variables: f,
                    fetchPolicy: w,
                    errorPolicy: A,
                    context: N,
                    update: b,
                    updateQueries: d,
                    awaitRefetchQueries: v,
                    refetchQueries: m,
                    removeOptimistic: s ? n : void 0,
                    onQueryUpdated: g,
                    keepRootFields: O
                  });
                }).subscribe({
                  next: function(P) {
                    o.broadcastQueries(), (!("hasNext" in P) || P.hasNext === !1) && Q(P);
                  },
                  error: function(P) {
                    a && (a.loading = !1, a.error = P), s && o.cache.removeOptimistic(n), o.broadcastQueries(), M(P instanceof Tn ? P : new Tn({
                      networkError: P
                    }));
                  }
                });
              })];
          }
        });
      });
    }, t.prototype.markMutationResult = function(e, r) {
      var n = this;
      r === void 0 && (r = this.cache);
      var i = e.result, a = [], s = e.fetchPolicy === "no-cache";
      if (!s && kc(i, e.errorPolicy)) {
        if (gi(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), gi(i) && yr(i.incremental)) {
          var o = r.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(e.document).asQuery,
            variables: e.variables,
            optimistic: !1,
            returnPartialData: !0
          }), u = void 0;
          o.result && (u = Fy(o.result, i)), typeof u < "u" && (i.data = u, a.push({
            result: u,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }));
        }
        var l = e.updateQueries;
        l && this.queries.forEach(function(f, h) {
          var d = f.observableQuery, p = d && d.queryName;
          if (!(!p || !I_.call(l, p))) {
            var m = l[p], y = n.queries.get(h), v = y.document, b = y.variables, g = r.diff({
              query: v,
              variables: b,
              returnPartialData: !0,
              optimistic: !1
            }), x = g.result, w = g.complete;
            if (w && x) {
              var S = m(x, {
                mutationResult: i,
                queryName: v && cc(v) || void 0,
                queryVariables: b
              });
              S && a.push({
                result: S,
                dataId: "ROOT_QUERY",
                query: v,
                variables: b
              });
            }
          }
        });
      }
      if (a.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
        var c = [];
        if (this.refetchQueries({
          updateCache: function(f) {
            s || a.forEach(function(m) {
              return f.write(m);
            });
            var h = e.update, d = !_T(i) || gi(i) && !i.hasNext;
            if (h) {
              if (!s) {
                var p = f.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: n.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                p.complete && (i = T(T({}, i), { data: p.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              d && h(f, i, {
                context: e.context,
                variables: e.variables
              });
            }
            !s && !e.keepRootFields && d && f.modify({
              id: "ROOT_MUTATION",
              fields: function(m, y) {
                var v = y.fieldName, b = y.DELETE;
                return v === "__typename" ? m : b;
              }
            });
          },
          include: e.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: !1,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: e.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: e.onQueryUpdated || null
        }).forEach(function(f) {
          return c.push(f);
        }), e.awaitRefetchQueries || e.onQueryUpdated)
          return Promise.all(c).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, t.prototype.markMutationOptimistic = function(e, r) {
      var n = this, i = typeof e == "function" ? e(r.variables, { IGNORE: yp }) : e;
      return i === yp ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          n.markMutationResult(T(T({}, r), { result: { data: i } }), a);
        } catch (s) {
          globalThis.__DEV__ !== !1 && me.error(s);
        }
      }, r.mutationId), !0);
    }, t.prototype.fetchQuery = function(e, r, n) {
      return this.fetchConcastWithInfo(e, r, n).concast.promise;
    }, t.prototype.getQueryStore = function() {
      var e = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(r, n) {
        e[n] = {
          variables: r.variables,
          networkStatus: r.networkStatus,
          networkError: r.networkError,
          graphQLErrors: r.graphQLErrors
        };
      }), e;
    }, t.prototype.resetErrors = function(e) {
      var r = this.queries.get(e);
      r && (r.networkError = void 0, r.graphQLErrors = []);
    }, t.prototype.transform = function(e) {
      return this.documentTransform.transformDocument(e);
    }, t.prototype.getDocumentInfo = function(e) {
      var r = this.transformCache;
      if (!r.has(e)) {
        var n = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: ok(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: Aa(["nonreactive"], e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: Iy([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" }
          ], e),
          defaultVars: Sf(Ka(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: T(T({}, e), { definitions: e.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? T(T({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(e, n);
      }
      return r.get(e);
    }, t.prototype.getVariables = function(e, r) {
      return T(T({}, this.getDocumentInfo(e).defaultVars), r);
    }, t.prototype.watchQuery = function(e) {
      var r = this.transform(e.query);
      e = T(T({}, e), { variables: this.getVariables(r, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var n = new ll(this), i = new xc({
        queryManager: this,
        queryInfo: n,
        options: e
      });
      return i.lastQuery = r, this.queries.set(i.queryId, n), n.init({
        document: r,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, t.prototype.query = function(e, r) {
      var n = this;
      return r === void 0 && (r = this.generateQueryId()), me(e.query, 28), me(e.query.kind === "Document", 29), me(!e.returnPartialData, 30), me(!e.pollInterval, 31), this.fetchQuery(r, T(T({}, e), { query: this.transform(e.query) })).finally(function() {
        return n.stopQuery(r);
      });
    }, t.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, t.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, t.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, t.prototype.stopQueryInStore = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
    }, t.prototype.stopQueryInStoreNoBroadcast = function(e) {
      var r = this.queries.get(e);
      r && r.stop();
    }, t.prototype.clearStore = function(e) {
      return e === void 0 && (e = {
        discardWatches: !0
      }), this.cancelPendingFetches(Dt(32)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = We.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, t.prototype.getObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(s) {
        typeof s == "string" ? i.set(s, !1) : Dk(s) ? i.set(r.transform(s), !1) : rt(s) && s.query && a.add(s);
      }), this.queries.forEach(function(s, o) {
        var u = s.observableQuery, l = s.document;
        if (u) {
          if (e === "all") {
            n.set(o, u);
            return;
          }
          var c = u.queryName, f = u.options.fetchPolicy;
          if (f === "standby" || e === "active" && !u.hasObservers())
            return;
          (e === "active" || c && i.has(c) || l && i.has(l)) && (n.set(o, u), c && i.set(c, !0), l && i.set(l, !0));
        }
      }), a.size && a.forEach(function(s) {
        var o = tc("legacyOneTimeQuery"), u = r.getQuery(o).init({
          document: s.query,
          variables: s.variables
        }), l = new xc({
          queryManager: r,
          queryInfo: u,
          options: T(T({}, s), { fetchPolicy: "network-only" })
        });
        me(l.queryId === o), u.setObservableQuery(l), n.set(o, l);
      }), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(s, o) {
        s || globalThis.__DEV__ !== !1 && me.warn(typeof o == "string" ? 33 : 34, o);
      }), n;
    }, t.prototype.reFetchObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = !1);
      var n = [];
      return this.getObservableQueries(e ? "all" : "active").forEach(function(i, a) {
        var s = i.options.fetchPolicy;
        i.resetLastResults(), (e || s !== "standby" && s !== "cache-only") && n.push(i.refetch()), r.getQuery(a).setDiff(null);
      }), this.broadcastQueries(), Promise.all(n);
    }, t.prototype.setObservableQuery = function(e) {
      this.getQuery(e.queryId).setObservableQuery(e);
    }, t.prototype.startGraphQLSubscription = function(e) {
      var r = this, n = e.query, i = e.fetchPolicy, a = e.errorPolicy, s = a === void 0 ? "none" : a, o = e.variables, u = e.context, l = u === void 0 ? {} : u;
      n = this.transform(n), o = this.getVariables(n, o);
      var c = function(h) {
        return r.getObservableFromLink(n, l, h).map(function(d) {
          i !== "no-cache" && (kc(d, s) && r.cache.write({
            query: n,
            result: d.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: h
          }), r.broadcastQueries());
          var p = Gs(d), m = WT(d);
          if (p || m) {
            var y = {};
            if (p && (y.graphQLErrors = d.errors), m && (y.protocolErrors = d.extensions[Ff]), s === "none" || m)
              throw new Tn(y);
          }
          return s === "ignore" && delete d.errors, d;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var f = this.localState.addExportedVariables(n, o, l).then(c);
        return new Ve(function(h) {
          var d = null;
          return f.then(function(p) {
            return d = p.subscribe(h);
          }, h.error), function() {
            return d && d.unsubscribe();
          };
        });
      }
      return c(o);
    }, t.prototype.stopQuery = function(e) {
      this.stopQueryNoBroadcast(e), this.broadcastQueries();
    }, t.prototype.stopQueryNoBroadcast = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
    }, t.prototype.removeQuery = function(e) {
      this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
    }, t.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
        return e.notify();
      });
    }, t.prototype.getLocalState = function() {
      return this.localState;
    }, t.prototype.getObservableFromLink = function(e, r, n, i) {
      var a = this, s;
      i === void 0 && (i = (s = r == null ? void 0 : r.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
      var o, u = this.getDocumentInfo(e), l = u.serverQuery, c = u.clientQuery;
      if (l) {
        var f = this, h = f.inFlightLinkObservables, d = f.link, p = {
          query: l,
          variables: n,
          operationName: cc(l) || void 0,
          context: this.prepareContext(T(T({}, r), { forceFetch: !i }))
        };
        if (r = p.context, i) {
          var m = du(l), y = sn(n), v = h.lookup(m, y);
          if (o = v.observable, !o) {
            var b = new ni([
              vc(d, p)
            ]);
            o = v.observable = b, b.beforeNext(function() {
              h.remove(m, y);
            });
          }
        } else
          o = new ni([
            vc(d, p)
          ]);
      } else
        o = new ni([Ve.of({ data: {} })]), r = this.prepareContext(r);
      return c && (o = rl(o, function(g) {
        return a.localState.runResolvers({
          document: c,
          remoteResult: g,
          context: r,
          variables: n
        });
      })), o;
    }, t.prototype.getResultsFromLink = function(e, r, n) {
      var i = e.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
      return rl(this.getObservableFromLink(a, n.context, n.variables), function(s) {
        var o = mc(s), u = o.length > 0;
        if (i >= e.lastRequestId) {
          if (u && n.errorPolicy === "none")
            throw e.markError(new Tn({
              graphQLErrors: o
            }));
          e.markResult(s, a, n, r), e.markReady();
        }
        var l = {
          data: s.data,
          loading: !1,
          networkStatus: We.ready
        };
        return u && n.errorPolicy !== "ignore" && (l.errors = o, l.networkStatus = We.error), l;
      }, function(s) {
        var o = qT(s) ? s : new Tn({ networkError: s });
        throw i >= e.lastRequestId && e.markError(o), o;
      });
    }, t.prototype.fetchConcastWithInfo = function(e, r, n, i) {
      var a = this;
      n === void 0 && (n = We.loading), i === void 0 && (i = r.query);
      var s = this.getVariables(i, r.variables), o = this.getQuery(e), u = this.defaultOptions.watchQuery, l = r.fetchPolicy, c = l === void 0 ? u && u.fetchPolicy || "cache-first" : l, f = r.errorPolicy, h = f === void 0 ? u && u.errorPolicy || "none" : f, d = r.returnPartialData, p = d === void 0 ? !1 : d, m = r.notifyOnNetworkStatusChange, y = m === void 0 ? !1 : m, v = r.context, b = v === void 0 ? {} : v, g = Object.assign({}, r, {
        query: i,
        variables: s,
        fetchPolicy: c,
        errorPolicy: h,
        returnPartialData: p,
        notifyOnNetworkStatusChange: y,
        context: b
      }), x = function(N) {
        g.variables = N;
        var F = a.fetchQueryByPolicy(o, g, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          g.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          F.sources.length > 0 && o.observableQuery && o.observableQuery.applyNextFetchPolicy("after-fetch", r), F
        );
      }, w = function() {
        return a.fetchCancelFns.delete(e);
      };
      this.fetchCancelFns.set(e, function(N) {
        w(), setTimeout(function() {
          return S.cancel(N);
        });
      });
      var S, A;
      if (this.getDocumentInfo(g.query).hasClientExports)
        S = new ni(this.localState.addExportedVariables(g.query, g.variables, g.context).then(x).then(function(N) {
          return N.sources;
        })), A = !0;
      else {
        var O = x(g.variables);
        A = O.fromLink, S = new ni(O.sources);
      }
      return S.promise.then(w, w), {
        concast: S,
        fromLink: A
      };
    }, t.prototype.refetchQueries = function(e) {
      var r = this, n = e.updateCache, i = e.include, a = e.optimistic, s = a === void 0 ? !1 : a, o = e.removeOptimistic, u = o === void 0 ? s ? tc("refetchQueries") : void 0 : o, l = e.onQueryUpdated, c = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(h, d) {
        c.set(d, {
          oq: h,
          lastDiff: r.getQuery(d).getDiff()
        });
      });
      var f = /* @__PURE__ */ new Map();
      return n && this.cache.batch({
        update: n,
        // Since you can perform any combination of cache reads and/or writes in
        // the cache.batch update function, its optimistic option can be either
        // a boolean or a string, representing three distinct modes of
        // operation:
        //
        // * false: read/write only the root layer
        // * true: read/write the topmost layer
        // * string: read/write a fresh optimistic layer with that ID string
        //
        // When typeof optimistic === "string", a new optimistic layer will be
        // temporarily created within cache.batch with that string as its ID. If
        // we then pass that same string as the removeOptimistic option, we can
        // make cache.batch immediately remove the optimistic layer after
        // running the updateCache function, triggering only one broadcast.
        //
        // However, the refetchQueries method accepts only true or false for its
        // optimistic option (not string). We interpret true to mean a temporary
        // optimistic layer should be created, to allow efficiently rolling back
        // the effect of the updateCache function, which involves passing a
        // string instead of true as the optimistic option to cache.batch, when
        // refetchQueries receives optimistic: true.
        //
        // In other words, we are deliberately not supporting the use case of
        // writing to an *existing* optimistic layer (using the refetchQueries
        // updateCache function), since that would potentially interfere with
        // other optimistic updates in progress. Instead, you can read/write
        // only the root layer by passing optimistic: false to refetchQueries,
        // or you can read/write a brand new optimistic layer that will be
        // automatically removed by passing optimistic: true.
        optimistic: s && u || !1,
        // The removeOptimistic option can also be provided by itself, even if
        // optimistic === false, to remove some previously-added optimistic
        // layer safely and efficiently, like we do in markMutationResult.
        //
        // If an explicit removeOptimistic string is provided with optimistic:
        // true, the removeOptimistic string will determine the ID of the
        // temporary optimistic layer, in case that ever matters.
        removeOptimistic: u,
        onWatchUpdated: function(h, d, p) {
          var m = h.watcher instanceof ll && h.watcher.observableQuery;
          if (m) {
            if (l) {
              c.delete(m.queryId);
              var y = l(m, d, p);
              return y === !0 && (y = m.refetch()), y !== !1 && f.set(m, y), y;
            }
            l !== null && c.set(m.queryId, { oq: m, lastDiff: p, diff: d });
          }
        }
      }), c.size && c.forEach(function(h, d) {
        var p = h.oq, m = h.lastDiff, y = h.diff, v;
        if (l) {
          if (!y) {
            var b = p.queryInfo;
            b.reset(), y = b.getDiff();
          }
          v = l(p, y, m);
        }
        (!l || v === !0) && (v = p.refetch()), v !== !1 && f.set(p, v), d.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(d);
      }), u && this.cache.removeOptimistic(u), f;
    }, t.prototype.fetchQueryByPolicy = function(e, r, n) {
      var i = this, a = r.query, s = r.variables, o = r.fetchPolicy, u = r.refetchWritePolicy, l = r.errorPolicy, c = r.returnPartialData, f = r.context, h = r.notifyOnNetworkStatusChange, d = e.networkStatus;
      e.init({
        document: a,
        variables: s,
        networkStatus: n
      });
      var p = function() {
        return e.getDiff();
      }, m = function(x, w) {
        w === void 0 && (w = e.networkStatus || We.loading);
        var S = x.result;
        globalThis.__DEV__ !== !1 && !c && !Be(S, {}) && og(x.missing);
        var A = function(O) {
          return Ve.of(T({ data: O, loading: Ma(w), networkStatus: w }, x.complete ? null : { partial: !0 }));
        };
        return S && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
          document: a,
          remoteResult: { data: S },
          context: f,
          variables: s,
          onlyRunForcedResolvers: !0
        }).then(function(O) {
          return A(O.data || void 0);
        }) : l === "none" && w === We.refetch && Array.isArray(x.missing) ? A(void 0) : A(S);
      }, y = o === "no-cache" ? 0 : n === We.refetch && u !== "merge" ? 1 : 2, v = function() {
        return i.getResultsFromLink(e, y, {
          query: a,
          variables: s,
          context: f,
          fetchPolicy: o,
          errorPolicy: l
        });
      }, b = h && typeof d == "number" && d !== n && Ma(n);
      switch (o) {
        default:
        case "cache-first": {
          var g = p();
          return g.complete ? {
            fromLink: !1,
            sources: [m(g, e.markReady())]
          } : c || b ? {
            fromLink: !0,
            sources: [m(g), v()]
          } : { fromLink: !0, sources: [v()] };
        }
        case "cache-and-network": {
          var g = p();
          return g.complete || c || b ? {
            fromLink: !0,
            sources: [m(g), v()]
          } : { fromLink: !0, sources: [v()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [m(p(), e.markReady())]
          };
        case "network-only":
          return b ? {
            fromLink: !0,
            sources: [m(p()), v()]
          } : { fromLink: !0, sources: [v()] };
        case "no-cache":
          return b ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [m(e.getDiff()), v()]
          } : { fromLink: !0, sources: [v()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, t.prototype.getQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new ll(this, e)), this.queries.get(e);
    }, t.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var r = this.localState.prepareContext(e);
      return T(T(T({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, t;
  }()
), gp = !1, lg = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw Dt(15);
      var n = e.uri, i = e.credentials, a = e.headers, s = e.cache, o = e.documentTransform, u = e.ssrMode, l = u === void 0 ? !1 : u, c = e.ssrForceFetchDelay, f = c === void 0 ? 0 : c, h = e.connectToDevTools, d = h === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : h, p = e.queryDeduplication, m = p === void 0 ? !0 : p, y = e.defaultOptions, v = e.defaultContext, b = e.assumeImmutableResults, g = b === void 0 ? s.assumeImmutableResults : b, x = e.resolvers, w = e.typeDefs, S = e.fragmentMatcher, A = e.name, O = e.version, N = e.link;
      N || (N = n ? new a_({ uri: n, credentials: i, headers: a }) : wr.empty()), this.link = N, this.cache = s, this.disableNetworkFetches = l || f > 0, this.queryDeduplication = m, this.defaultOptions = y || /* @__PURE__ */ Object.create(null), this.typeDefs = w, f && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = yf, this.localState = new ug({
        cache: s,
        client: this,
        resolvers: x,
        fragmentMatcher: S
      }), this.queryManager = new A_({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: v,
        documentTransform: o,
        queryDeduplication: m,
        ssrMode: l,
        clientAwareness: {
          name: A,
          version: O
        },
        localState: this.localState,
        assumeImmutableResults: g,
        onBroadcast: d ? function() {
          r.devToolsHookCb && r.devToolsHookCb({
            action: {},
            state: {
              queries: r.queryManager.getQueryStore(),
              mutations: r.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: r.cache.extract(!0)
          });
        } : void 0
      }), d && this.connectToDevTools();
    }
    return t.prototype.connectToDevTools = function() {
      if (typeof window == "object") {
        var e = window, r = Symbol.for("apollo.devtools");
        (e[r] = e[r] || []).push(this), e.__APOLLO_CLIENT__ = this;
      }
      !gp && globalThis.__DEV__ !== !1 && (gp = !0, setTimeout(function() {
        if (typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ && /^(https?|file):$/.test(window.location.protocol)) {
          var n = window.navigator, i = n && n.userAgent, a = void 0;
          typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && me.log("Download the Apollo DevTools for a better development experience: %s", a);
        }
      }, 1e4));
    }, Object.defineProperty(t.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.stop = function() {
      this.queryManager.stop();
    }, t.prototype.watchQuery = function(e) {
      return this.defaultOptions.watchQuery && (e = Js(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = T(T({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, t.prototype.query = function(e) {
      return this.defaultOptions.query && (e = Js(this.defaultOptions.query, e)), me(e.fetchPolicy !== "cache-and-network", 16), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = T(T({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
    }, t.prototype.mutate = function(e) {
      return this.defaultOptions.mutate && (e = Js(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
    }, t.prototype.subscribe = function(e) {
      return this.queryManager.startGraphQLSubscription(e);
    }, t.prototype.readQuery = function(e, r) {
      return r === void 0 && (r = !1), this.cache.readQuery(e, r);
    }, t.prototype.watchFragment = function(e) {
      return this.cache.watchFragment(e);
    }, t.prototype.readFragment = function(e, r) {
      return r === void 0 && (r = !1), this.cache.readFragment(e, r);
    }, t.prototype.writeQuery = function(e) {
      var r = this.cache.writeQuery(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, t.prototype.writeFragment = function(e) {
      var r = this.cache.writeFragment(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, t.prototype.__actionHookForDevTools = function(e) {
      this.devToolsHookCb = e;
    }, t.prototype.__requestRaw = function(e) {
      return vc(this.link, e);
    }, t.prototype.resetStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !1
        });
      }).then(function() {
        return Promise.all(e.resetStoreCallbacks.map(function(r) {
          return r();
        }));
      }).then(function() {
        return e.reFetchObservableQueries();
      });
    }, t.prototype.clearStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !0
        });
      }).then(function() {
        return Promise.all(e.clearStoreCallbacks.map(function(r) {
          return r();
        }));
      });
    }, t.prototype.onResetStore = function(e) {
      var r = this;
      return this.resetStoreCallbacks.push(e), function() {
        r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
          return n !== e;
        });
      };
    }, t.prototype.onClearStore = function(e) {
      var r = this;
      return this.clearStoreCallbacks.push(e), function() {
        r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
          return n !== e;
        });
      };
    }, t.prototype.reFetchObservableQueries = function(e) {
      return this.queryManager.reFetchObservableQueries(e);
    }, t.prototype.refetchQueries = function(e) {
      var r = this.queryManager.refetchQueries(e), n = [], i = [];
      r.forEach(function(s, o) {
        n.push(o), i.push(s);
      });
      var a = Promise.all(i);
      return a.queries = n, a.results = i, a.catch(function(s) {
        globalThis.__DEV__ !== !1 && me.debug(17, s);
      }), a;
    }, t.prototype.getObservableQueries = function(e) {
      return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
    }, t.prototype.extract = function(e) {
      return this.cache.extract(e);
    }, t.prototype.restore = function(e) {
      return this.cache.restore(e);
    }, t.prototype.addResolvers = function(e) {
      this.localState.addResolvers(e);
    }, t.prototype.setResolvers = function(e) {
      this.localState.setResolvers(e);
    }, t.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, t.prototype.setLocalStateFragmentMatcher = function(e) {
      this.localState.setFragmentMatcher(e);
    }, t.prototype.setLink = function(e) {
      this.link = this.queryManager.link = e;
    }, Object.defineProperty(t.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
);
globalThis.__DEV__ !== !1 && (lg.prototype.getMemoryInternals = kk);
var eo = /* @__PURE__ */ new Map(), Tc = /* @__PURE__ */ new Map(), cg = !0, bo = !1;
function fg(t) {
  return t.replace(/[\s,]+/g, " ").trim();
}
function N_(t) {
  return fg(t.source.body.substring(t.start, t.end));
}
function D_(t) {
  var e = /* @__PURE__ */ new Set(), r = [];
  return t.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = N_(n.loc), s = Tc.get(i);
      s && !s.has(a) ? cg && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : s || Tc.set(i, s = /* @__PURE__ */ new Set()), s.add(a), e.has(a) || (e.add(a), r.push(n));
    } else
      r.push(n);
  }), T(T({}, t), { definitions: r });
}
function R_(t) {
  var e = new Set(t.definitions);
  e.forEach(function(n) {
    n.loc && delete n.loc, Object.keys(n).forEach(function(i) {
      var a = n[i];
      a && typeof a == "object" && e.add(a);
    });
  });
  var r = t.loc;
  return r && (delete r.startToken, delete r.endToken), t;
}
function P_(t) {
  var e = fg(t);
  if (!eo.has(e)) {
    var r = Jx(t, {
      experimentalFragmentVariables: bo,
      allowLegacyFragmentVariables: bo
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    eo.set(e, R_(D_(r)));
  }
  return eo.get(e);
}
function Ci(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  typeof t == "string" && (t = [t]);
  var n = t[0];
  return e.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += t[a + 1];
  }), P_(n);
}
function M_() {
  eo.clear(), Tc.clear();
}
function F_() {
  cg = !1;
}
function L_() {
  bo = !0;
}
function $_() {
  bo = !1;
}
var ea = {
  gql: Ci,
  resetCaches: M_,
  disableFragmentWarnings: F_,
  enableExperimentalFragmentVariables: L_,
  disableExperimentalFragmentVariables: $_
};
(function(t) {
  t.gql = ea.gql, t.resetCaches = ea.resetCaches, t.disableFragmentWarnings = ea.disableFragmentWarnings, t.enableExperimentalFragmentVariables = ea.enableExperimentalFragmentVariables, t.disableExperimentalFragmentVariables = ea.disableExperimentalFragmentVariables;
})(Ci || (Ci = {}));
Ci.default = Ci;
function j_(t) {
  return new wr(function(e, r) {
    var n = Mr(e, []);
    return new Ve(function(i) {
      var a, s = !1;
      return Promise.resolve(n).then(function(o) {
        return t(o, e.getContext());
      }).then(e.setContext).then(function() {
        s || (a = r(e).subscribe({
          next: i.next.bind(i),
          error: i.error.bind(i),
          complete: i.complete.bind(i)
        }));
      }).catch(i.error.bind(i)), function() {
        s = !0, a && a.unsubscribe();
      };
    });
  });
}
function dg(t) {
  return new wr(function(e, r) {
    return new Ve(function(n) {
      var i, a, s;
      try {
        i = r(e).subscribe({
          next: function(o) {
            if (o.errors && (s = t({
              graphQLErrors: o.errors,
              response: o,
              operation: e,
              forward: r
            }), s)) {
              a = s.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.next(o);
          },
          error: function(o) {
            if (s = t({
              operation: e,
              networkError: o,
              //Network errors can return GraphQL errors on for example a 403
              graphQLErrors: o && o.result && o.result.errors,
              forward: r
            }), s) {
              a = s.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.error(o);
          },
          complete: function() {
            s || n.complete.bind(n)();
          }
        });
      } catch (o) {
        t({ networkError: o, operation: e, forward: r }), n.error(o);
      }
      return function() {
        i && i.unsubscribe(), a && i.unsubscribe();
      };
    });
  });
}
(function(t) {
  cr(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.link = dg(r), n;
  }
  return e.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, e;
})(wr);
var hg = { exports: {} };
(function(t) {
  t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, U);
})(hg);
var rr = hg.exports;
const V_ = /* @__PURE__ */ Lm(rr), z_ = /* @__PURE__ */ Z0({
  __proto__: null,
  default: V_
}, [rr]);
var bp = kf ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function W_() {
  me("createContext" in z_, 45);
  var t = rr.createContext[bp];
  return t || (Object.defineProperty(rr.createContext, bp, {
    value: t = rr.createContext({}),
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), t.displayName = "ApolloContext"), t;
}
function q_(t) {
  var e = rr.useContext(W_()), r = t || e.client;
  return me(!!r, 49), r;
}
var Ir;
(function(t) {
  t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription";
})(Ir || (Ir = {}));
var An;
function wp(t) {
  var e;
  switch (t) {
    case Ir.Query:
      e = "Query";
      break;
    case Ir.Mutation:
      e = "Mutation";
      break;
    case Ir.Subscription:
      e = "Subscription";
      break;
  }
  return e;
}
function pg(t) {
  An || (An = new Tf(
    vr.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var e = An.get(t);
  if (e)
    return e;
  var r, n, i;
  me(!!t && !!t.kind, 60, t);
  for (var a = [], s = [], o = [], u = [], l = 0, c = t.definitions; l < c.length; l++) {
    var f = c[l];
    if (f.kind === "FragmentDefinition") {
      a.push(f);
      continue;
    }
    if (f.kind === "OperationDefinition")
      switch (f.operation) {
        case "query":
          s.push(f);
          break;
        case "mutation":
          o.push(f);
          break;
        case "subscription":
          u.push(f);
          break;
      }
  }
  me(!a.length || s.length || o.length || u.length, 61), me(
    s.length + o.length + u.length <= 1,
    62,
    t,
    s.length,
    u.length,
    o.length
  ), n = s.length ? Ir.Query : Ir.Mutation, !s.length && !o.length && (n = Ir.Subscription);
  var h = s.length ? s : o.length ? o : u;
  me(h.length === 1, 63, t, h.length);
  var d = h[0];
  r = d.variableDefinitions || [], d.name && d.name.kind === "Name" ? i = d.name.value : i = "data";
  var p = { name: i, type: n, variables: r };
  return An.set(t, p), p;
}
pg.resetCache = function() {
  An = void 0;
};
globalThis.__DEV__ !== !1 && _f("parser", function() {
  return An ? An.size : 0;
});
function U_(t, e) {
  var r = pg(t), n = wp(e), i = wp(r.type);
  me(
    r.type === e,
    64,
    n,
    n,
    i
  );
}
function B_(t, e) {
  var r = q_(e == null ? void 0 : e.client);
  U_(t, Ir.Mutation);
  var n = rr.useState({
    called: !1,
    loading: !1,
    client: r
  }), i = n[0], a = n[1], s = rr.useRef({
    result: i,
    mutationId: 0,
    isMounted: !0,
    client: r,
    mutation: t,
    options: e
  });
  Object.assign(s.current, { client: r, options: e, mutation: t });
  var o = rr.useCallback(function(l) {
    l === void 0 && (l = {});
    var c = s.current, f = c.options, h = c.mutation, d = T(T({}, f), { mutation: h }), p = l.client || s.current.client;
    !s.current.result.loading && !d.ignoreResults && s.current.isMounted && a(s.current.result = {
      loading: !0,
      error: void 0,
      data: void 0,
      called: !0,
      client: p
    });
    var m = ++s.current.mutationId, y = Js(d, l);
    return p.mutate(y).then(function(v) {
      var b, g, x = v.data, w = v.errors, S = w && w.length > 0 ? new Tn({ graphQLErrors: w }) : void 0, A = l.onError || ((b = s.current.options) === null || b === void 0 ? void 0 : b.onError);
      if (S && A && A(S, y), m === s.current.mutationId && !y.ignoreResults) {
        var O = {
          called: !0,
          loading: !1,
          data: x,
          error: S,
          client: p
        };
        s.current.isMounted && !Be(s.current.result, O) && a(s.current.result = O);
      }
      var N = l.onCompleted || ((g = s.current.options) === null || g === void 0 ? void 0 : g.onCompleted);
      return S || N == null || N(v.data, y), v;
    }).catch(function(v) {
      var b;
      if (m === s.current.mutationId && s.current.isMounted) {
        var g = {
          loading: !1,
          error: v,
          data: void 0,
          called: !0,
          client: p
        };
        Be(s.current.result, g) || a(s.current.result = g);
      }
      var x = l.onError || ((b = s.current.options) === null || b === void 0 ? void 0 : b.onError);
      if (x)
        return x(v, y), { data: void 0, errors: v };
      throw v;
    });
  }, []), u = rr.useCallback(function() {
    if (s.current.isMounted) {
      var l = { called: !1, loading: !1, client: r };
      Object.assign(s.current, { mutationId: 0, result: l }), a(l);
    }
  }, []);
  return rr.useEffect(function() {
    return s.current.isMounted = !0, function() {
      s.current.isMounted = !1;
    };
  }, []), [o, T({ reset: u }, i)];
}
const H_ = new ag();
async function Y_({ mode: t, accessToken: e, reauth: r }) {
  const n = t === "development" ? mo.engageGraphqlDevEndpoint : mo.engageGraphqlEndpoint, i = r_({ uri: n }), a = j_((u, { headers: l }) => {
    const c = e ? `Accounts ${e}` : "";
    return {
      headers: {
        ...l,
        authorization: c
      }
    };
  }), s = dg(({ networkError: u }) => {
    u && (console.error(u), u.statusCode === 401 && r());
  });
  return new lg({
    link: wr.from([s, a, i]),
    cache: H_
  });
}
const mg = xt({
  apolloClient: null
});
function Q_({ children: t, mode: e }) {
  const { isAuthenticated: r, accessToken: n, reauth: i } = vx();
  if (!r)
    return /* @__PURE__ */ te.jsx("h2", { children: "Not authenticated. Try refreshing the page." });
  const [a, s] = Je(null);
  return He(() => {
    async function o() {
      s(await Y_({ mode: e, accessToken: n, reauth: i }));
    }
    o().catch(console.error);
  }, [e, n]), a ? /* @__PURE__ */ te.jsx(mg.Provider, { value: { client: a }, children: t }) : /* @__PURE__ */ te.jsx("h2", { children: "Initializing..." });
}
function Z_() {
  const t = ft(mg);
  if (!t)
    throw new Error("useEngage must be used within an EngageProvider");
  return t;
}
function G_(t, e = {}) {
  const { client: r } = Z_();
  return B_(t, { ...e, client: r });
}
const vg = xt({}), J_ = () => ft(vg);
function K_({ children: t, options: e = {} }) {
  return e.isProd = e.mode === "production", e.isDev = !e.isProd, /* @__PURE__ */ te.jsx(vg.Provider, { value: e, children: t });
}
function YI({ mode: t = "production", ownerId: e, senalysisBusinessId: r, children: n }) {
  const i = {
    mode: t,
    senalysisBusinessId: r
  };
  return /* @__PURE__ */ te.jsx(K_, { options: i, children: /* @__PURE__ */ te.jsx(mx, { mode: t, ownerId: e, children: /* @__PURE__ */ te.jsxs(Q_, { mode: t, children: [
    n,
    /* @__PURE__ */ te.jsx(aw, {})
  ] }) }) });
}
const yg = typeof document < "u" ? U.useLayoutEffect : () => {
};
function X_(t) {
  const e = Te(null);
  return yg(() => {
    e.current = t;
  }, [
    t
  ]), Tt((...r) => {
    const n = e.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
const es = (t) => {
  var e;
  return (e = t == null ? void 0 : t.ownerDocument) !== null && e !== void 0 ? e : document;
}, Nn = (t) => t && "window" in t && t.window === t ? t : es(t).defaultView || window;
function eS(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? !1 : ((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some((r) => t.test(r.brand))) || t.test(window.navigator.userAgent);
}
function tS(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function rS() {
  return tS(/^Mac/i);
}
function nS() {
  return eS(/Android/i);
}
function iS(t) {
  return t.mozInputSource === 0 && t.isTrusted ? !0 : nS() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
class aS {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(e, r) {
    this.nativeEvent = r, this.target = r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget, this.bubbles = r.bubbles, this.cancelable = r.cancelable, this.defaultPrevented = r.defaultPrevented, this.eventPhase = r.eventPhase, this.isTrusted = r.isTrusted, this.timeStamp = r.timeStamp, this.type = e;
  }
}
function gg(t) {
  let e = Te({
    isFocused: !1,
    observer: null
  });
  yg(() => {
    const n = e.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = X_((n) => {
    t == null || t(n);
  });
  return Tt((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let i = n.target, a = (s) => {
        e.current.isFocused = !1, i.disabled && r(new aS("blur", s)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
      };
      i.addEventListener("focusout", a, {
        once: !0
      }), e.current.observer = new MutationObserver(() => {
        if (e.current.isFocused && i.disabled) {
          var s;
          (s = e.current.observer) === null || s === void 0 || s.disconnect();
          let o = i === document.activeElement ? null : document.activeElement;
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: o
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: o
          }));
        }
      }), e.current.observer.observe(i, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
function sS(t) {
  let { isDisabled: e, onFocus: r, onBlur: n, onFocusChange: i } = t;
  const a = Tt((u) => {
    if (u.target === u.currentTarget)
      return n && n(u), i && i(!1), !0;
  }, [
    n,
    i
  ]), s = gg(a), o = Tt((u) => {
    const l = es(u.target);
    u.target === u.currentTarget && l.activeElement === u.target && (r && r(u), i && i(!0), s(u));
  }, [
    i,
    r,
    s
  ]);
  return {
    focusProps: {
      onFocus: !e && (r || i || n) ? o : void 0,
      onBlur: !e && (n || i) ? a : void 0
    }
  };
}
let ts = null, _c = /* @__PURE__ */ new Set(), va = /* @__PURE__ */ new Map(), Wn = !1, Sc = !1;
const oS = {
  Tab: !0,
  Escape: !0
};
function zf(t, e) {
  for (let r of _c)
    r(t, e);
}
function uS(t) {
  return !(t.metaKey || !rS() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function wo(t) {
  Wn = !0, uS(t) && (ts = "keyboard", zf("keyboard", t));
}
function Ht(t) {
  ts = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (Wn = !0, zf("pointer", t));
}
function bg(t) {
  iS(t) && (Wn = !0, ts = "virtual");
}
function wg(t) {
  t.target === window || t.target === document || (!Wn && !Sc && (ts = "virtual", zf("virtual", t)), Wn = !1, Sc = !1);
}
function Eg() {
  Wn = !1, Sc = !0;
}
function Oc(t) {
  if (typeof window > "u" || va.get(Nn(t)))
    return;
  const e = Nn(t), r = es(t);
  let n = e.HTMLElement.prototype.focus;
  e.HTMLElement.prototype.focus = function() {
    Wn = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", wo, !0), r.addEventListener("keyup", wo, !0), r.addEventListener("click", bg, !0), e.addEventListener("focus", wg, !0), e.addEventListener("blur", Eg, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", Ht, !0), r.addEventListener("pointermove", Ht, !0), r.addEventListener("pointerup", Ht, !0)) : (r.addEventListener("mousedown", Ht, !0), r.addEventListener("mousemove", Ht, !0), r.addEventListener("mouseup", Ht, !0)), e.addEventListener("beforeunload", () => {
    xg(t);
  }, {
    once: !0
  }), va.set(e, {
    focus: n
  });
}
const xg = (t, e) => {
  const r = Nn(t), n = es(t);
  e && n.removeEventListener("DOMContentLoaded", e), va.has(r) && (r.HTMLElement.prototype.focus = va.get(r).focus, n.removeEventListener("keydown", wo, !0), n.removeEventListener("keyup", wo, !0), n.removeEventListener("click", bg, !0), r.removeEventListener("focus", wg, !0), r.removeEventListener("blur", Eg, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", Ht, !0), n.removeEventListener("pointermove", Ht, !0), n.removeEventListener("pointerup", Ht, !0)) : (n.removeEventListener("mousedown", Ht, !0), n.removeEventListener("mousemove", Ht, !0), n.removeEventListener("mouseup", Ht, !0)), va.delete(r));
};
function lS(t) {
  const e = es(t);
  let r;
  return e.readyState !== "loading" ? Oc(t) : (r = () => {
    Oc(t);
  }, e.addEventListener("DOMContentLoaded", r)), () => xg(t, r);
}
typeof document < "u" && lS();
function kg() {
  return ts !== "pointer";
}
const cS = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function fS(t, e, r) {
  var n;
  const i = typeof window < "u" ? Nn(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? Nn(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? Nn(r == null ? void 0 : r.target).HTMLElement : HTMLElement, o = typeof window < "u" ? Nn(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return t = t || (r == null ? void 0 : r.target) instanceof i && !cS.has(r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type) || (r == null ? void 0 : r.target) instanceof a || (r == null ? void 0 : r.target) instanceof s && (r == null ? void 0 : r.target.isContentEditable), !(t && e === "keyboard" && r instanceof o && !oS[r.key]);
}
function dS(t, e, r) {
  Oc(), He(() => {
    let n = (i, a) => {
      fS(!!(r != null && r.isTextInput), i, a) && t(kg());
    };
    return _c.add(n), () => {
      _c.delete(n);
    };
  }, e);
}
function hS(t) {
  let { isDisabled: e, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: i } = t, a = Te({
    isFocusWithin: !1
  }), s = Tt((l) => {
    a.current.isFocusWithin && !l.currentTarget.contains(l.relatedTarget) && (a.current.isFocusWithin = !1, r && r(l), i && i(!1));
  }, [
    r,
    i,
    a
  ]), o = gg(s), u = Tt((l) => {
    !a.current.isFocusWithin && document.activeElement === l.target && (n && n(l), i && i(!0), a.current.isFocusWithin = !0, o(l));
  }, [
    n,
    i,
    o
  ]);
  return e ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: s
    }
  };
}
let Eo = !1, cl = 0;
function Cc() {
  Eo = !0, setTimeout(() => {
    Eo = !1;
  }, 50);
}
function Ep(t) {
  t.pointerType === "touch" && Cc();
}
function pS() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Ep) : document.addEventListener("touchend", Cc), cl++, () => {
      cl--, !(cl > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Ep) : document.removeEventListener("touchend", Cc));
    };
}
function mS(t) {
  let { onHoverStart: e, onHoverChange: r, onHoverEnd: n, isDisabled: i } = t, [a, s] = Je(!1), o = Te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  He(pS, []);
  let { hoverProps: u, triggerHoverEnd: l } = Ke(() => {
    let c = (d, p) => {
      if (o.pointerType = p, i || p === "touch" || o.isHovered || !d.currentTarget.contains(d.target))
        return;
      o.isHovered = !0;
      let m = d.currentTarget;
      o.target = m, e && e({
        type: "hoverstart",
        target: m,
        pointerType: p
      }), r && r(!0), s(!0);
    }, f = (d, p) => {
      if (o.pointerType = "", o.target = null, p === "touch" || !o.isHovered)
        return;
      o.isHovered = !1;
      let m = d.currentTarget;
      n && n({
        type: "hoverend",
        target: m,
        pointerType: p
      }), r && r(!1), s(!1);
    }, h = {};
    return typeof PointerEvent < "u" ? (h.onPointerEnter = (d) => {
      Eo && d.pointerType === "mouse" || c(d, d.pointerType);
    }, h.onPointerLeave = (d) => {
      !i && d.currentTarget.contains(d.target) && f(d, d.pointerType);
    }) : (h.onTouchStart = () => {
      o.ignoreEmulatedMouseEvents = !0;
    }, h.onMouseEnter = (d) => {
      !o.ignoreEmulatedMouseEvents && !Eo && c(d, "mouse"), o.ignoreEmulatedMouseEvents = !1;
    }, h.onMouseLeave = (d) => {
      !i && d.currentTarget.contains(d.target) && f(d, "mouse");
    }), {
      hoverProps: h,
      triggerHoverEnd: f
    };
  }, [
    e,
    r,
    n,
    i,
    o
  ]);
  return He(() => {
    i && l({
      currentTarget: o.target
    }, o.pointerType);
  }, [
    i
  ]), {
    hoverProps: u,
    isHovered: a
  };
}
function vS(t = {}) {
  let { autoFocus: e = !1, isTextInput: r, within: n } = t, i = Te({
    isFocused: !1,
    isFocusVisible: e || kg()
  }), [a, s] = Je(!1), [o, u] = Je(() => i.current.isFocused && i.current.isFocusVisible), l = Tt(() => u(i.current.isFocused && i.current.isFocusVisible), []), c = Tt((d) => {
    i.current.isFocused = d, s(d), l();
  }, [
    l
  ]);
  dS((d) => {
    i.current.isFocusVisible = d, l();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = sS({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: h } = hS({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: a,
    isFocusVisible: o,
    focusProps: n ? h : f
  };
}
var yS = Object.defineProperty, gS = (t, e, r) => e in t ? yS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, fl = (t, e, r) => (gS(t, typeof e != "symbol" ? e + "" : e, r), r);
let bS = class {
  constructor() {
    fl(this, "current", this.detect()), fl(this, "handoffState", "pending"), fl(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, $n = new bS();
function pu(t) {
  return $n.isServer ? null : t instanceof Node ? t.ownerDocument : t != null && t.hasOwnProperty("current") && t.current instanceof Node ? t.current.ownerDocument : document;
}
function Tg(t) {
  typeof queueMicrotask == "function" ? queueMicrotask(t) : Promise.resolve().then(t).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function Yn() {
  let t = [], e = { addEventListener(r, n, i, a) {
    return r.addEventListener(n, i, a), e.add(() => r.removeEventListener(n, i, a));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return e.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return e.requestAnimationFrame(() => e.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return e.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return Tg(() => {
      n.current && r[0]();
    }), e.add(() => {
      n.current = !1;
    });
  }, style(r, n, i) {
    let a = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: a });
    });
  }, group(r) {
    let n = Yn();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return t.includes(r) || t.push(r), () => {
      let n = t.indexOf(r);
      if (n >= 0)
        for (let i of t.splice(n, 1))
          i();
    };
  }, dispose() {
    for (let r of t.splice(0))
      r();
  } };
  return e;
}
function mu() {
  let [t] = Je(Yn);
  return He(() => () => t.dispose(), [t]), t;
}
let vt = (t, e) => {
  $n.isServer ? He(t, e) : Wa(t, e);
};
function Zt(t) {
  let e = Te(t);
  return vt(() => {
    e.current = t;
  }, [t]), e;
}
let Pe = function(t) {
  let e = Zt(t);
  return U.useCallback((...r) => e.current(...r), [e]);
};
function wS(t) {
  let e = t.width / 2, r = t.height / 2;
  return { top: t.clientY - r, right: t.clientX + e, bottom: t.clientY + r, left: t.clientX - e };
}
function ES(t, e) {
  return !(!t || !e || t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom);
}
function xS({ disabled: t = !1 } = {}) {
  let e = Te(null), [r, n] = Je(!1), i = mu(), a = Pe(() => {
    e.current = null, n(!1), i.dispose();
  }), s = Pe((o) => {
    if (i.dispose(), e.current === null) {
      e.current = o.currentTarget, n(!0);
      {
        let u = pu(o.currentTarget);
        i.addEventListener(u, "pointerup", a, !1), i.addEventListener(u, "pointermove", (l) => {
          if (e.current) {
            let c = wS(l);
            n(ES(c, e.current.getBoundingClientRect()));
          }
        }, !1), i.addEventListener(u, "pointercancel", a, !1);
      }
    }
  });
  return { pressed: r, pressProps: t ? {} : { onPointerDown: s, onPointerUp: a, onClick: a } };
}
function ya(...t) {
  return Array.from(new Set(t.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
function mt(t, e, ...r) {
  if (t in e) {
    let i = e[t];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, mt), n;
}
var Ii = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Ii || {}), tn = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(tn || {});
function fr({ ourProps: t, theirProps: e, slot: r, defaultTag: n, features: i, visible: a = !0, name: s, mergeRefs: o }) {
  o = o ?? TS;
  let u = _g(e, t);
  if (a)
    return Ls(u, r, n, s, o);
  let l = i ?? 0;
  if (l & 2) {
    let { static: c = !1, ...f } = u;
    if (c)
      return Ls(f, r, n, s, o);
  }
  if (l & 1) {
    let { unmount: c = !0, ...f } = u;
    return mt(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Ls({ ...f, hidden: !0, style: { display: "none" } }, r, n, s, o);
    } });
  }
  return Ls(u, r, n, s, o);
}
function Ls(t, e = {}, r, n, i) {
  let { as: a = r, children: s, refName: o = "ref", ...u } = dl(t, ["unmount", "static"]), l = t.ref !== void 0 ? { [o]: t.ref } : {}, c = typeof s == "function" ? s(e) : s;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(e)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let f = {};
  if (e) {
    let h = !1, d = [];
    for (let [p, m] of Object.entries(e))
      typeof m == "boolean" && (h = !0), m === !0 && d.push(p.replace(/([A-Z])/g, (y) => `-${y.toLowerCase()}`));
    if (h) {
      f["data-headlessui-state"] = d.join(" ");
      for (let p of d)
        f[`data-${p}`] = "";
    }
  }
  if (a === Cr && (Object.keys(ei(u)).length > 0 || Object.keys(ei(f)).length > 0))
    if (!Mn(c) || Array.isArray(c) && c.length > 1) {
      if (Object.keys(ei(u)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ei(u)).concat(Object.keys(ei(f))).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
    } else {
      let h = c.props, d = h == null ? void 0 : h.className, p = typeof d == "function" ? (...v) => ya(d(...v), u.className) : ya(d, u.className), m = p ? { className: p } : {}, y = _g(c.props, ei(dl(u, ["ref"])));
      for (let v in f)
        v in y && delete f[v];
      return no(c, Object.assign({}, y, f, l, { ref: i(c.ref, l.ref) }, m));
    }
  return H0(a, Object.assign({}, dl(u, ["ref"]), a !== Cr && l, a !== Cr && f), c);
}
function kS() {
  let t = Te([]), e = Tt((r) => {
    for (let n of t.current)
      n != null && (typeof n == "function" ? n(r) : n.current = r);
  }, []);
  return (...r) => {
    if (!r.every((n) => n == null))
      return t.current = r, e;
  };
}
function TS(...t) {
  return t.every((e) => e == null) ? void 0 : (e) => {
    for (let r of t)
      r != null && (typeof r == "function" ? r(e) : r.current = e);
  };
}
function _g(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let e = {}, r = {};
  for (let n of t)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : e[i] = n[i];
  if (e.disabled || e["aria-disabled"])
    for (let n in r)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) && (r[n] = [(i) => {
        var a;
        return (a = i == null ? void 0 : i.preventDefault) == null ? void 0 : a.call(i);
      }]);
  for (let n in r)
    Object.assign(e, { [n](i, ...a) {
      let s = r[n];
      for (let o of s) {
        if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented)
          return;
        o(i, ...a);
      }
    } });
  return e;
}
function Ic(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let e = {}, r = {};
  for (let n of t)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : e[i] = n[i];
  for (let n in r)
    Object.assign(e, { [n](...i) {
      let a = r[n];
      for (let s of a)
        s == null || s(...i);
    } });
  return e;
}
function Jt(t) {
  var e;
  return Object.assign(Yc(t), { displayName: (e = t.displayName) != null ? e : t.name });
}
function ei(t) {
  let e = Object.assign({}, t);
  for (let r in e)
    e[r] === void 0 && delete e[r];
  return e;
}
function dl(t, e = []) {
  let r = Object.assign({}, t);
  for (let n of e)
    n in r && delete r[n];
  return r;
}
let _S = "div";
var Ai = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ai || {});
function SS(t, e) {
  var r;
  let { features: n = 1, ...i } = t, a = { ref: e, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return fr({ ourProps: a, theirProps: i, slot: {}, defaultTag: _S, name: "Hidden" });
}
let Fa = Jt(SS);
function Sg(t) {
  let e = t.parentElement, r = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (r = e), e = e.parentElement;
  let n = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return n && OS(r) ? !1 : n;
}
function OS(t) {
  if (!t)
    return !1;
  let e = t.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return !1;
    e = e.previousElementSibling;
  }
  return !0;
}
let Og = Symbol();
function Cg(t, e = !0) {
  return Object.assign(t, { [Og]: e });
}
function ur(...t) {
  let e = Te(t);
  He(() => {
    e.current = t;
  }, [t]);
  let r = Pe((n) => {
    for (let i of e.current)
      i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return t.every((n) => n == null || (n == null ? void 0 : n[Og])) ? void 0 : r;
}
var Kr = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Kr || {});
let CS = xt(() => {
});
function IS({ value: t, children: e }) {
  return U.createElement(CS.Provider, { value: t }, e);
}
function AS(t) {
  if (t === null)
    return { width: 0, height: 0 };
  let { width: e, height: r } = t.getBoundingClientRect();
  return { width: e, height: r };
}
function NS(t, e = !1) {
  let r = t === null ? null : "current" in t ? t.current : t, [n, i] = lm(() => ({}), {}), a = Ke(() => AS(r), [r, n]);
  return vt(() => {
    if (!r)
      return;
    let s = new ResizeObserver(i);
    return s.observe(r), () => {
      s.disconnect();
    };
  }, [r]), e ? { width: `${a.width}px`, height: `${a.height}px` } : a;
}
function Ig(t, e, r = !0) {
  let n = Zt((i) => {
    let a = i.getBoundingClientRect();
    a.x === 0 && a.y === 0 && a.width === 0 && a.height === 0 && e();
  });
  He(() => {
    if (!r)
      return;
    let i = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!i)
      return;
    let a = Yn();
    if (typeof ResizeObserver < "u") {
      let s = new ResizeObserver(() => n.current(i));
      s.observe(i), a.add(() => s.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let s = new IntersectionObserver(() => n.current(i));
      s.observe(i), a.add(() => s.disconnect());
    }
    return () => a.dispose();
  }, [t, n, r]);
}
let Ac = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(","), DS = ["[data-autofocus]"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var _r = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t[t.AutoFocus = 64] = "AutoFocus", t))(_r || {}), xo = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(xo || {}), RS = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(RS || {});
function vu(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Ac)).sort((e, r) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function PS(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(DS)).sort((e, r) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Wf = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(Wf || {});
function Ag(t, e = 0) {
  var r;
  return t === ((r = pu(t)) == null ? void 0 : r.body) ? !1 : mt(e, { 0() {
    return t.matches(Ac);
  }, 1() {
    let n = t;
    for (; n !== null; ) {
      if (n.matches(Ac))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var MS = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(MS || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let FS = ["textarea", "input"].join(",");
function LS(t) {
  var e, r;
  return (r = (e = t == null ? void 0 : t.matches) == null ? void 0 : e.call(t, FS)) != null ? r : !1;
}
function $S(t, e = (r) => r) {
  return t.slice().sort((r, n) => {
    let i = e(r), a = e(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Dn(t, e, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let a = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t.ownerDocument, s = Array.isArray(t) ? r ? $S(t) : t : e & 64 ? PS(t) : vu(t);
  i.length > 0 && s.length > 1 && (s = s.filter((d) => !i.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === d : p === d))), n = n ?? a.activeElement;
  let o = (() => {
    if (e & 5)
      return 1;
    if (e & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (e & 1)
      return 0;
    if (e & 2)
      return Math.max(0, s.indexOf(n)) - 1;
    if (e & 4)
      return Math.max(0, s.indexOf(n)) + 1;
    if (e & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = e & 32 ? { preventScroll: !0 } : {}, c = 0, f = s.length, h;
  do {
    if (c >= f || c + f <= 0)
      return 0;
    let d = u + c;
    if (e & 16)
      d = (d + f) % f;
    else {
      if (d < 0)
        return 3;
      if (d >= f)
        return 1;
    }
    h = s[d], h == null || h.focus(l), c += o;
  } while (h !== a.activeElement);
  return e & 6 && LS(h) && h.select(), 2;
}
function Ng() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function jS() {
  return /Android/gi.test(window.navigator.userAgent);
}
function VS() {
  return Ng() || jS();
}
function $s(t, e, r) {
  let n = Zt(e);
  He(() => {
    function i(a) {
      n.current(a);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [t, r]);
}
function Dg(t, e, r) {
  let n = Zt(e);
  He(() => {
    function i(a) {
      n.current(a);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [t, r]);
}
function zS(t, e, r = !0) {
  let n = Te(!1);
  He(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function i(s, o) {
    if (!n.current || s.defaultPrevented)
      return;
    let u = o(s);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected)
      return;
    let l = function c(f) {
      return typeof f == "function" ? c(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let c of l) {
      if (c === null)
        continue;
      let f = c instanceof HTMLElement ? c : c.current;
      if (f != null && f.contains(u) || s.composed && s.composedPath().includes(f))
        return;
    }
    return !Ag(u, Wf.Loose) && u.tabIndex !== -1 && s.preventDefault(), e(s, u);
  }
  let a = Te(null);
  $s("pointerdown", (s) => {
    var o, u;
    n.current && (a.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), $s("mousedown", (s) => {
    var o, u;
    n.current && (a.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), $s("click", (s) => {
    VS() || a.current && (i(s, () => a.current), a.current = null);
  }, !0), $s("touchend", (s) => i(s, () => s.target instanceof HTMLElement ? s.target : null), !0), Dg("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ui(...t) {
  return Ke(() => pu(...t), [...t]);
}
function WS(t, e, r, n) {
  let i = Zt(r);
  He(() => {
    t = t ?? window;
    function a(s) {
      i.current(s);
    }
    return t.addEventListener(e, a, n), () => t.removeEventListener(e, a, n);
  }, [t, e, n]);
}
function xp(t) {
  var e;
  if (t.type)
    return t.type;
  let r = (e = t.as) != null ? e : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function qS(t, e) {
  let [r, n] = Je(() => xp(t));
  return vt(() => {
    n(xp(t));
  }, [t.type, t.as]), vt(() => {
    r || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && n("button");
  }, [r, e]), r;
}
function US(t) {
  return um(t.subscribe, t.getSnapshot, t.getSnapshot);
}
function BS(t, e) {
  let r = t(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...a) {
    let s = e[i].call(r, ...a);
    s && (r = s, n.forEach((o) => o()));
  } };
}
function HS() {
  let t;
  return { before({ doc: e }) {
    var r;
    let n = e.documentElement, i = (r = e.defaultView) != null ? r : window;
    t = Math.max(0, i.innerWidth - n.clientWidth);
  }, after({ doc: e, d: r }) {
    let n = e.documentElement, i = Math.max(0, n.clientWidth - n.offsetWidth), a = Math.max(0, t - i);
    r.style(n, "paddingRight", `${a}px`);
  } };
}
function YS() {
  return Ng() ? { before({ doc: t, d: e, meta: r }) {
    function n(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    e.microTask(() => {
      var i;
      if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
        let o = Yn();
        o.style(t.documentElement, "scrollBehavior", "auto"), e.add(() => e.microTask(() => o.dispose()));
      }
      let a = (i = window.scrollY) != null ? i : window.pageYOffset, s = null;
      e.addEventListener(t, "click", (o) => {
        if (o.target instanceof HTMLElement)
          try {
            let u = o.target.closest("a");
            if (!u)
              return;
            let { hash: l } = new URL(u.href), c = t.querySelector(l);
            c && !n(c) && (s = c);
          } catch {
          }
      }, !0), e.addEventListener(t, "touchstart", (o) => {
        if (o.target instanceof HTMLElement)
          if (n(o.target)) {
            let u = o.target;
            for (; u.parentElement && n(u.parentElement); )
              u = u.parentElement;
            e.style(u, "overscrollBehavior", "contain");
          } else
            e.style(o.target, "touchAction", "none");
      }), e.addEventListener(t, "touchmove", (o) => {
        if (o.target instanceof HTMLElement) {
          if (o.target.tagName === "INPUT")
            return;
          if (n(o.target)) {
            let u = o.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); )
              u = u.parentElement;
            u.dataset.headlessuiPortal === "" && o.preventDefault();
          } else
            o.preventDefault();
        }
      }, { passive: !1 }), e.add(() => {
        var o;
        let u = (o = window.scrollY) != null ? o : window.pageYOffset;
        a !== u && window.scrollTo(0, a), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function QS() {
  return { before({ doc: t, d: e }) {
    e.style(t.documentElement, "overflow", "hidden");
  } };
}
function ZS(t) {
  let e = {};
  for (let r of t)
    Object.assign(e, r(e));
  return e;
}
let Rn = BS(() => /* @__PURE__ */ new Map(), { PUSH(t, e) {
  var r;
  let n = (r = this.get(t)) != null ? r : { doc: t, count: 0, d: Yn(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(e), this.set(t, n), this;
}, POP(t, e) {
  let r = this.get(t);
  return r && (r.count--, r.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: t, d: e, meta: r }) {
  let n = { doc: t, d: e, meta: ZS(r) }, i = [YS(), HS(), QS()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(n)), i.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: t }) {
  t.dispose();
}, TEARDOWN({ doc: t }) {
  this.delete(t);
} });
Rn.subscribe(() => {
  let t = Rn.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [r] of t)
    e.set(r, r.documentElement.style.overflow);
  for (let r of t.values()) {
    let n = e.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Rn.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Rn.dispatch("TEARDOWN", r);
  }
});
function GS(t, e, r = () => ({ containers: [] })) {
  let n = US(Rn), i = t ? n.get(t) : void 0, a = i ? i.count > 0 : !1;
  return vt(() => {
    if (!(!t || !e))
      return Rn.dispatch("PUSH", t, r), () => Rn.dispatch("POP", t, r);
  }, [e, t]), a;
}
function JS(t, e, r = () => [document.body]) {
  GS(t, e, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], r] };
  });
}
function Bi(t) {
  return Rg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function zt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Vr(t) {
  var e;
  return (e = (Rg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Rg(t) {
  return t instanceof Node || t instanceof zt(t).Node;
}
function Nt(t) {
  return t instanceof Element || t instanceof zt(t).Element;
}
function gr(t) {
  return t instanceof HTMLElement || t instanceof zt(t).HTMLElement;
}
function kp(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof zt(t).ShadowRoot;
}
function rs(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: n,
    display: i
  } = lr(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(i);
}
function KS(t) {
  return ["table", "td", "th"].includes(Bi(t));
}
function qf(t) {
  const e = Uf(), r = lr(t);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function XS(t) {
  let e = mn(t);
  for (; gr(e) && !Ni(e); ) {
    if (qf(e))
      return e;
    e = mn(e);
  }
  return null;
}
function Uf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ni(t) {
  return ["html", "body", "#document"].includes(Bi(t));
}
function lr(t) {
  return zt(t).getComputedStyle(t);
}
function yu(t) {
  return Nt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function mn(t) {
  if (Bi(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    kp(t) && t.host || // Fallback.
    Vr(t)
  );
  return kp(e) ? e.host : e;
}
function Pg(t) {
  const e = mn(t);
  return Ni(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : gr(e) && rs(e) ? e : Pg(e);
}
function La(t, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const i = Pg(t), a = i === ((n = t.ownerDocument) == null ? void 0 : n.body), s = zt(i);
  return a ? e.concat(s, s.visualViewport || [], rs(i) ? i : [], s.frameElement && r ? La(s.frameElement) : []) : e.concat(i, La(i, [], r));
}
function e2() {
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? t.brands.map((e) => {
    let {
      brand: r,
      version: n
    } = e;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
const rn = Math.min, $t = Math.max, ko = Math.round, js = Math.floor, vn = (t) => ({
  x: t,
  y: t
}), t2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, r2 = {
  start: "end",
  end: "start"
};
function Tp(t, e, r) {
  return $t(t, rn(e, r));
}
function ns(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function yn(t) {
  return t.split("-")[0];
}
function is(t) {
  return t.split("-")[1];
}
function Mg(t) {
  return t === "x" ? "y" : "x";
}
function Fg(t) {
  return t === "y" ? "height" : "width";
}
function as(t) {
  return ["top", "bottom"].includes(yn(t)) ? "y" : "x";
}
function Lg(t) {
  return Mg(as(t));
}
function n2(t, e, r) {
  r === void 0 && (r = !1);
  const n = is(t), i = Lg(t), a = Fg(i);
  let s = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = To(s)), [s, To(s)];
}
function i2(t) {
  const e = To(t);
  return [Nc(t), e, Nc(e)];
}
function Nc(t) {
  return t.replace(/start|end/g, (e) => r2[e]);
}
function a2(t, e, r) {
  const n = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return r ? e ? i : n : e ? n : i;
    case "left":
    case "right":
      return e ? a : s;
    default:
      return [];
  }
}
function s2(t, e, r, n) {
  const i = is(t);
  let a = a2(yn(t), r === "start", n);
  return i && (a = a.map((s) => s + "-" + i), e && (a = a.concat(a.map(Nc)))), a;
}
function To(t) {
  return t.replace(/left|right|bottom|top/g, (e) => t2[e]);
}
function o2(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function u2(t) {
  return typeof t != "number" ? o2(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function _o(t) {
  const {
    x: e,
    y: r,
    width: n,
    height: i
  } = t;
  return {
    width: n,
    height: i,
    top: r,
    left: e,
    right: e + n,
    bottom: r + i,
    x: e,
    y: r
  };
}
function _p(t, e, r) {
  let {
    reference: n,
    floating: i
  } = t;
  const a = as(e), s = Lg(e), o = Fg(s), u = yn(e), l = a === "y", c = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, h = n[o] / 2 - i[o] / 2;
  let d;
  switch (u) {
    case "top":
      d = {
        x: c,
        y: n.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      d = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: n.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  switch (is(e)) {
    case "start":
      d[s] -= h * (r && l ? -1 : 1);
      break;
    case "end":
      d[s] += h * (r && l ? -1 : 1);
      break;
  }
  return d;
}
const l2 = async (t, e, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: s
  } = r, o = a.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: c,
    y: f
  } = _p(l, n, u), h = n, d = {}, p = 0;
  for (let m = 0; m < o.length; m++) {
    const {
      name: y,
      fn: v
    } = o[m], {
      x: b,
      y: g,
      data: x,
      reset: w
    } = await v({
      x: c,
      y: f,
      initialPlacement: n,
      placement: h,
      strategy: i,
      middlewareData: d,
      rects: l,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = b ?? c, f = g ?? f, d = {
      ...d,
      [y]: {
        ...d[y],
        ...x
      }
    }, w && p <= 50 && (p++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : w.rects), {
      x: c,
      y: f
    } = _p(l, h, u)), m = -1);
  }
  return {
    x: c,
    y: f,
    placement: h,
    strategy: i,
    middlewareData: d
  };
};
async function gu(t, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: n,
    y: i,
    platform: a,
    rects: s,
    elements: o,
    strategy: u
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = ns(e, t), p = u2(d), y = o[h ? f === "floating" ? "reference" : "floating" : f], v = _o(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(y))) == null || r ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)),
    boundary: l,
    rootBoundary: c,
    strategy: u
  })), b = f === "floating" ? {
    x: n,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)), x = await (a.isElement == null ? void 0 : a.isElement(g)) ? await (a.getScale == null ? void 0 : a.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = _o(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: b,
    offsetParent: g,
    strategy: u
  }) : b);
  return {
    top: (v.top - w.top + p.top) / x.y,
    bottom: (w.bottom - v.bottom + p.bottom) / x.y,
    left: (v.left - w.left + p.left) / x.x,
    right: (w.right - v.right + p.right) / x.x
  };
}
const c2 = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: s,
        initialPlacement: o,
        platform: u,
        elements: l
      } = e, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...y
      } = ns(t, e);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const v = yn(i), b = yn(o) === o, g = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), x = h || (b || !m ? [To(o)] : i2(o));
      !h && p !== "none" && x.push(...s2(o, m, p, g));
      const w = [o, ...x], S = await gu(e, y), A = [];
      let O = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (c && A.push(S[v]), f) {
        const M = n2(i, s, g);
        A.push(S[M[0]], S[M[1]]);
      }
      if (O = [...O, {
        placement: i,
        overflows: A
      }], !A.every((M) => M <= 0)) {
        var N, F;
        const M = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, P = w[M];
        if (P)
          return {
            data: {
              index: M,
              overflows: O
            },
            reset: {
              placement: P
            }
          };
        let B = (F = O.filter((q) => q.overflows[0] <= 0).sort((q, z) => q.overflows[1] - z.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!B)
          switch (d) {
            case "bestFit": {
              var Q;
              const q = (Q = O.map((z) => [z.placement, z.overflows.filter(($) => $ > 0).reduce(($, ve) => $ + ve, 0)]).sort((z, $) => z[1] - $[1])[0]) == null ? void 0 : Q[0];
              q && (B = q);
              break;
            }
            case "initialPlacement":
              B = o;
              break;
          }
        if (i !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function f2(t, e) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = t, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), s = yn(r), o = is(r), u = as(r) === "y", l = ["left", "top"].includes(s) ? -1 : 1, c = a && u ? -1 : 1, f = ns(e, t);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return o && typeof p == "number" && (d = o === "end" ? p * -1 : p), u ? {
    x: d * c,
    y: h * l
  } : {
    x: h * l,
    y: d * c
  };
}
const d2 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: s,
        middlewareData: o
      } = e, u = await f2(e, t);
      return s === ((r = o.offset) == null ? void 0 : r.placement) && (n = o.arrow) != null && n.alignmentOffset ? {} : {
        x: i + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, h2 = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: n,
        placement: i
      } = e, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: o = {
          fn: (y) => {
            let {
              x: v,
              y: b
            } = y;
            return {
              x: v,
              y: b
            };
          }
        },
        ...u
      } = ns(t, e), l = {
        x: r,
        y: n
      }, c = await gu(e, u), f = as(yn(i)), h = Mg(f);
      let d = l[h], p = l[f];
      if (a) {
        const y = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = d + c[y], g = d - c[v];
        d = Tp(b, d, g);
      }
      if (s) {
        const y = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", b = p + c[y], g = p - c[v];
        p = Tp(b, p, g);
      }
      const m = o.fn({
        ...e,
        [h]: d,
        [f]: p
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - n
        }
      };
    }
  };
}, p2 = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: r,
        rects: n,
        platform: i,
        elements: a
      } = e, {
        apply: s = () => {
        },
        ...o
      } = ns(t, e), u = await gu(e, o), l = yn(r), c = is(r), f = as(r) === "y", {
        width: h,
        height: d
      } = n.floating;
      let p, m;
      l === "top" || l === "bottom" ? (p = l, m = c === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, p = c === "end" ? "top" : "bottom");
      const y = d - u.top - u.bottom, v = h - u.left - u.right, b = rn(d - u[p], y), g = rn(h - u[m], v), x = !e.middlewareData.shift;
      let w = b, S = g;
      if (f ? S = c || x ? rn(g, v) : v : w = c || x ? rn(b, y) : y, x && !c) {
        const O = $t(u.left, 0), N = $t(u.right, 0), F = $t(u.top, 0), Q = $t(u.bottom, 0);
        f ? S = h - 2 * (O !== 0 || N !== 0 ? O + N : $t(u.left, u.right)) : w = d - 2 * (F !== 0 || Q !== 0 ? F + Q : $t(u.top, u.bottom));
      }
      await s({
        ...e,
        availableWidth: S,
        availableHeight: w
      });
      const A = await i.getDimensions(a.floating);
      return h !== A.width || d !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $g(t) {
  const e = lr(t);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const i = gr(t), a = i ? t.offsetWidth : r, s = i ? t.offsetHeight : n, o = ko(r) !== a || ko(n) !== s;
  return o && (r = a, n = s), {
    width: r,
    height: n,
    $: o
  };
}
function Bf(t) {
  return Nt(t) ? t : t.contextElement;
}
function wi(t) {
  const e = Bf(t);
  if (!gr(e))
    return vn(1);
  const r = e.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = $g(e);
  let s = (a ? ko(r.width) : r.width) / n, o = (a ? ko(r.height) : r.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: s,
    y: o
  };
}
const m2 = /* @__PURE__ */ vn(0);
function jg(t) {
  const e = zt(t);
  return !Uf() || !e.visualViewport ? m2 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function v2(t, e, r) {
  return e === void 0 && (e = !1), !r || e && r !== zt(t) ? !1 : e;
}
function qn(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const i = t.getBoundingClientRect(), a = Bf(t);
  let s = vn(1);
  e && (n ? Nt(n) && (s = wi(n)) : s = wi(t));
  const o = v2(a, r, n) ? jg(a) : vn(0);
  let u = (i.left + o.x) / s.x, l = (i.top + o.y) / s.y, c = i.width / s.x, f = i.height / s.y;
  if (a) {
    const h = zt(a), d = n && Nt(n) ? zt(n) : n;
    let p = h, m = p.frameElement;
    for (; m && n && d !== p; ) {
      const y = wi(m), v = m.getBoundingClientRect(), b = lr(m), g = v.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x, x = v.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      u *= y.x, l *= y.y, c *= y.x, f *= y.y, u += g, l += x, p = zt(m), m = p.frameElement;
    }
  }
  return _o({
    width: c,
    height: f,
    x: u,
    y: l
  });
}
const y2 = [":popover-open", ":modal"];
function Hf(t) {
  return y2.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function g2(t) {
  let {
    elements: e,
    rect: r,
    offsetParent: n,
    strategy: i
  } = t;
  const a = i === "fixed", s = Vr(n), o = e ? Hf(e.floating) : !1;
  if (n === s || o && a)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = vn(1);
  const c = vn(0), f = gr(n);
  if ((f || !f && !a) && ((Bi(n) !== "body" || rs(s)) && (u = yu(n)), gr(n))) {
    const h = qn(n);
    l = wi(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - u.scrollLeft * l.x + c.x,
    y: r.y * l.y - u.scrollTop * l.y + c.y
  };
}
function b2(t) {
  return Array.from(t.getClientRects());
}
function Vg(t) {
  return qn(Vr(t)).left + yu(t).scrollLeft;
}
function w2(t) {
  const e = Vr(t), r = yu(t), n = t.ownerDocument.body, i = $t(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = $t(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + Vg(t);
  const o = -r.scrollTop;
  return lr(n).direction === "rtl" && (s += $t(e.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: s,
    y: o
  };
}
function E2(t, e) {
  const r = zt(t), n = Vr(t), i = r.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, o = 0, u = 0;
  if (i) {
    a = i.width, s = i.height;
    const l = Uf();
    (!l || l && e === "fixed") && (o = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o,
    y: u
  };
}
function x2(t, e) {
  const r = qn(t, !0, e === "fixed"), n = r.top + t.clientTop, i = r.left + t.clientLeft, a = gr(t) ? wi(t) : vn(1), s = t.clientWidth * a.x, o = t.clientHeight * a.y, u = i * a.x, l = n * a.y;
  return {
    width: s,
    height: o,
    x: u,
    y: l
  };
}
function Sp(t, e, r) {
  let n;
  if (e === "viewport")
    n = E2(t, r);
  else if (e === "document")
    n = w2(Vr(t));
  else if (Nt(e))
    n = x2(e, r);
  else {
    const i = jg(t);
    n = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return _o(n);
}
function zg(t, e) {
  const r = mn(t);
  return r === e || !Nt(r) || Ni(r) ? !1 : lr(r).position === "fixed" || zg(r, e);
}
function k2(t, e) {
  const r = e.get(t);
  if (r)
    return r;
  let n = La(t, [], !1).filter((o) => Nt(o) && Bi(o) !== "body"), i = null;
  const a = lr(t).position === "fixed";
  let s = a ? mn(t) : t;
  for (; Nt(s) && !Ni(s); ) {
    const o = lr(s), u = qf(s);
    !u && o.position === "fixed" && (i = null), (a ? !u && !i : !u && o.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || rs(s) && !u && zg(t, s)) ? n = n.filter((c) => c !== s) : i = o, s = mn(s);
  }
  return e.set(t, n), n;
}
function T2(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = t;
  const s = [...r === "clippingAncestors" ? Hf(e) ? [] : k2(e, this._c) : [].concat(r), n], o = s[0], u = s.reduce((l, c) => {
    const f = Sp(e, c, i);
    return l.top = $t(f.top, l.top), l.right = rn(f.right, l.right), l.bottom = rn(f.bottom, l.bottom), l.left = $t(f.left, l.left), l;
  }, Sp(e, o, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function _2(t) {
  const {
    width: e,
    height: r
  } = $g(t);
  return {
    width: e,
    height: r
  };
}
function S2(t, e, r) {
  const n = gr(e), i = Vr(e), a = r === "fixed", s = qn(t, !0, a, e);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = vn(0);
  if (n || !n && !a)
    if ((Bi(e) !== "body" || rs(i)) && (o = yu(e)), n) {
      const f = qn(e, !0, a, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      i && (u.x = Vg(i));
  const l = s.left + o.scrollLeft - u.x, c = s.top + o.scrollTop - u.y;
  return {
    x: l,
    y: c,
    width: s.width,
    height: s.height
  };
}
function hl(t) {
  return lr(t).position === "static";
}
function Op(t, e) {
  return !gr(t) || lr(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Wg(t, e) {
  const r = zt(t);
  if (Hf(t))
    return r;
  if (!gr(t)) {
    let i = mn(t);
    for (; i && !Ni(i); ) {
      if (Nt(i) && !hl(i))
        return i;
      i = mn(i);
    }
    return r;
  }
  let n = Op(t, e);
  for (; n && KS(n) && hl(n); )
    n = Op(n, e);
  return n && Ni(n) && hl(n) && !qf(n) ? r : n || XS(t) || r;
}
const O2 = async function(t) {
  const e = this.getOffsetParent || Wg, r = this.getDimensions, n = await r(t.floating);
  return {
    reference: S2(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function C2(t) {
  return lr(t).direction === "rtl";
}
const I2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: g2,
  getDocumentElement: Vr,
  getClippingRect: T2,
  getOffsetParent: Wg,
  getElementRects: O2,
  getClientRects: b2,
  getDimensions: _2,
  getScale: wi,
  isElement: Nt,
  isRTL: C2
};
function A2(t, e) {
  let r = null, n;
  const i = Vr(t);
  function a() {
    var o;
    clearTimeout(n), (o = r) == null || o.disconnect(), r = null;
  }
  function s(o, u) {
    o === void 0 && (o = !1), u === void 0 && (u = 1), a();
    const {
      left: l,
      top: c,
      width: f,
      height: h
    } = t.getBoundingClientRect();
    if (o || e(), !f || !h)
      return;
    const d = js(c), p = js(i.clientWidth - (l + f)), m = js(i.clientHeight - (c + h)), y = js(l), b = {
      rootMargin: -d + "px " + -p + "px " + -m + "px " + -y + "px",
      threshold: $t(0, rn(1, u)) || 1
    };
    let g = !0;
    function x(w) {
      const S = w[0].intersectionRatio;
      if (S !== u) {
        if (!g)
          return s();
        S ? s(!1, S) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      g = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, b);
    }
    r.observe(t);
  }
  return s(!0), a;
}
function N2(t, e, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, l = Bf(t), c = i || a ? [...l ? La(l) : [], ...La(e)] : [];
  c.forEach((v) => {
    i && v.addEventListener("scroll", r, {
      passive: !0
    }), a && v.addEventListener("resize", r);
  });
  const f = l && o ? A2(l, r) : null;
  let h = -1, d = null;
  s && (d = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === l && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var g;
      (g = d) == null || g.observe(e);
    })), r();
  }), l && !u && d.observe(l), d.observe(e));
  let p, m = u ? qn(t) : null;
  u && y();
  function y() {
    const v = qn(t);
    m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && r(), m = v, p = requestAnimationFrame(y);
  }
  return r(), () => {
    var v;
    c.forEach((b) => {
      i && b.removeEventListener("scroll", r), a && b.removeEventListener("resize", r);
    }), f == null || f(), (v = d) == null || v.disconnect(), d = null, u && cancelAnimationFrame(p);
  };
}
const pl = gu, qg = d2, D2 = h2, R2 = c2, P2 = p2, M2 = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: I2,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return l2(t, e, {
    ...i,
    platform: a
  });
};
var to = typeof document < "u" ? Wa : He;
function So(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let r, n, i;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (r = t.length, r !== e.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!So(t[n], e[n]))
          return !1;
      return !0;
    }
    if (i = Object.keys(t), r = i.length, r !== Object.keys(e).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, i[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = i[n];
      if (!(a === "_owner" && t.$$typeof) && !So(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Ug(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Cp(t, e) {
  const r = Ug(t);
  return Math.round(e * r) / r;
}
function Ip(t) {
  const e = he.useRef(t);
  return to(() => {
    e.current = t;
  }), e;
}
function F2(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: i,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: o = !0,
    whileElementsMounted: u,
    open: l
  } = t, [c, f] = he.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = he.useState(n);
  So(h, n) || d(n);
  const [p, m] = he.useState(null), [y, v] = he.useState(null), b = he.useCallback(($) => {
    $ !== S.current && (S.current = $, m($));
  }, []), g = he.useCallback(($) => {
    $ !== A.current && (A.current = $, v($));
  }, []), x = a || p, w = s || y, S = he.useRef(null), A = he.useRef(null), O = he.useRef(c), N = u != null, F = Ip(u), Q = Ip(i), M = he.useCallback(() => {
    if (!S.current || !A.current)
      return;
    const $ = {
      placement: e,
      strategy: r,
      middleware: h
    };
    Q.current && ($.platform = Q.current), M2(S.current, A.current, $).then((ve) => {
      const j = {
        ...ve,
        isPositioned: !0
      };
      P.current && !So(O.current, j) && (O.current = j, Y0.flushSync(() => {
        f(j);
      }));
    });
  }, [h, e, r, Q]);
  to(() => {
    l === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [l]);
  const P = he.useRef(!1);
  to(() => (P.current = !0, () => {
    P.current = !1;
  }), []), to(() => {
    if (x && (S.current = x), w && (A.current = w), x && w) {
      if (F.current)
        return F.current(x, w, M);
      M();
    }
  }, [x, w, M, F, N]);
  const B = he.useMemo(() => ({
    reference: S,
    floating: A,
    setReference: b,
    setFloating: g
  }), [b, g]), q = he.useMemo(() => ({
    reference: x,
    floating: w
  }), [x, w]), z = he.useMemo(() => {
    const $ = {
      position: r,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return $;
    const ve = Cp(q.floating, c.x), j = Cp(q.floating, c.y);
    return o ? {
      ...$,
      transform: "translate(" + ve + "px, " + j + "px)",
      ...Ug(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ve,
      top: j
    };
  }, [r, o, q.floating, c.x, c.y]);
  return he.useMemo(() => ({
    ...c,
    update: M,
    refs: B,
    elements: q,
    floatingStyles: z
  }), [c, M, B, q, z]);
}
const Bg = {
  ...he
}, L2 = Bg["useInsertion"+"Effect"], $2 = L2 || ((t) => t());
function Hg(t) {
  const e = he.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return $2(() => {
    e.current = t;
  }), he.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var Dc = typeof document < "u" ? Wa : He;
let Ap = !1, j2 = 0;
const Np = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + j2++
);
function V2() {
  const [t, e] = he.useState(() => Ap ? Np() : void 0);
  return Dc(() => {
    t == null && e(Np());
  }, []), he.useEffect(() => {
    Ap = !0;
  }, []), t;
}
const z2 = Bg.useId, W2 = z2 || V2;
let $a;
process.env.NODE_ENV !== "production" && ($a = /* @__PURE__ */ new Set());
function q2() {
  for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  const i = "Floating UI: " + r.join(" ");
  if (!((t = $a) != null && t.has(i))) {
    var a;
    (a = $a) == null || a.add(i), console.warn(i);
  }
}
function U2() {
  for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  const i = "Floating UI: " + r.join(" ");
  if (!((t = $a) != null && t.has(i))) {
    var a;
    (a = $a) == null || a.add(i), console.error(i);
  }
}
function B2() {
  const t = /* @__PURE__ */ new Map();
  return {
    emit(e, r) {
      var n;
      (n = t.get(e)) == null || n.forEach((i) => i(r));
    },
    on(e, r) {
      t.set(e, [...t.get(e) || [], r]);
    },
    off(e, r) {
      var n;
      t.set(e, ((n = t.get(e)) == null ? void 0 : n.filter((i) => i !== r)) || []);
    }
  };
}
const H2 = /* @__PURE__ */ he.createContext(null), Y2 = /* @__PURE__ */ he.createContext(null), Q2 = () => {
  var t;
  return ((t = he.useContext(H2)) == null ? void 0 : t.id) || null;
}, Z2 = () => he.useContext(Y2);
function G2(t) {
  const {
    open: e = !1,
    onOpenChange: r,
    elements: n
  } = t, i = W2(), a = he.useRef({}), [s] = he.useState(() => B2()), o = Q2() != null;
  if (process.env.NODE_ENV !== "production") {
    const d = n.reference;
    d && !Nt(d) && U2("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, l] = he.useState(n.reference), c = Hg((d, p, m) => {
    a.current.openEvent = d ? p : void 0, s.emit("openchange", {
      open: d,
      event: p,
      reason: m,
      nested: o
    }), r == null || r(d, p, m);
  }), f = he.useMemo(() => ({
    setPositionReference: l
  }), []), h = he.useMemo(() => ({
    reference: u || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [u, n.reference, n.floating]);
  return he.useMemo(() => ({
    dataRef: a,
    open: e,
    onOpenChange: c,
    elements: h,
    events: s,
    floatingId: i,
    refs: f
  }), [e, c, h, s, i, f]);
}
function J2(t) {
  t === void 0 && (t = {});
  const {
    nodeId: e
  } = t, r = G2({
    ...t,
    elements: {
      reference: null,
      floating: null,
      ...t.elements
    }
  }), n = t.rootContext || r, i = n.elements, [a, s] = he.useState(null), [o, u] = he.useState(null), c = (i == null ? void 0 : i.reference) || a, f = he.useRef(null), h = Z2();
  Dc(() => {
    c && (f.current = c);
  }, [c]);
  const d = F2({
    ...t,
    elements: {
      ...i,
      ...o && {
        reference: o
      }
    }
  }), p = he.useCallback((g) => {
    const x = Nt(g) ? {
      getBoundingClientRect: () => g.getBoundingClientRect(),
      contextElement: g
    } : g;
    u(x), d.refs.setReference(x);
  }, [d.refs]), m = he.useCallback((g) => {
    (Nt(g) || g === null) && (f.current = g, s(g)), (Nt(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    g !== null && !Nt(g)) && d.refs.setReference(g);
  }, [d.refs]), y = he.useMemo(() => ({
    ...d.refs,
    setReference: m,
    setPositionReference: p,
    domReference: f
  }), [d.refs, m, p]), v = he.useMemo(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), b = he.useMemo(() => ({
    ...d,
    ...n,
    refs: y,
    elements: v,
    nodeId: e
  }), [d, y, v, e, n]);
  return Dc(() => {
    n.dataRef.current.floatingContext = b;
    const g = h == null ? void 0 : h.nodesRef.current.find((x) => x.id === e);
    g && (g.context = b);
  }), he.useMemo(() => ({
    ...d,
    context: b,
    refs: y,
    elements: v
  }), [d, y, v, b]);
}
const Dp = "active", Rp = "selected";
function ml(t, e, r) {
  const n = /* @__PURE__ */ new Map(), i = r === "item";
  let a = t;
  if (i && t) {
    const {
      [Dp]: s,
      [Rp]: o,
      ...u
    } = t;
    a = u;
  }
  return {
    ...r === "floating" && {
      tabIndex: -1
    },
    ...a,
    ...e.map((s) => {
      const o = s ? s[r] : null;
      return typeof o == "function" ? t ? o(t) : null : o;
    }).concat(t).reduce((s, o) => (o && Object.entries(o).forEach((u) => {
      let [l, c] = u;
      if (!(i && [Dp, Rp].includes(l)))
        if (l.indexOf("on") === 0) {
          if (n.has(l) || n.set(l, []), typeof c == "function") {
            var f;
            (f = n.get(l)) == null || f.push(c), s[l] = function() {
              for (var h, d = arguments.length, p = new Array(d), m = 0; m < d; m++)
                p[m] = arguments[m];
              return (h = n.get(l)) == null ? void 0 : h.map((y) => y(...p)).find((y) => y !== void 0);
            };
          }
        } else
          s[l] = c;
    }), s), {})
  };
}
function K2(t) {
  t === void 0 && (t = []);
  const e = t, r = he.useCallback(
    (a) => ml(a, t, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), n = he.useCallback(
    (a) => ml(a, t, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), i = he.useCallback(
    (a) => ml(a, t, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t.map((a) => a == null ? void 0 : a.item)
  );
  return he.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: n,
    getItemProps: i
  }), [r, n, i]);
}
function Pp(t, e) {
  return {
    ...t,
    rects: {
      ...t.rects,
      floating: {
        ...t.rects.floating,
        height: e
      }
    }
  };
}
const X2 = (t) => ({
  name: "inner",
  options: t,
  async fn(e) {
    const {
      listRef: r,
      overflowRef: n,
      onFallbackChange: i,
      offset: a = 0,
      index: s = 0,
      minItemsVisible: o = 4,
      referenceOverflowThreshold: u = 0,
      scrollRef: l,
      ...c
    } = t, {
      rects: f,
      elements: {
        floating: h
      }
    } = e, d = r.current[s];
    if (process.env.NODE_ENV !== "production" && (e.placement.startsWith("bottom") || q2('`placement` side must be "bottom" when using the `inner`', "middleware.")), !d)
      return {};
    const p = {
      ...e,
      ...await qg(-d.offsetTop - h.clientTop - f.reference.height / 2 - d.offsetHeight / 2 - a).fn(e)
    }, m = (l == null ? void 0 : l.current) || h, y = await pl(Pp(p, m.scrollHeight), c), v = await pl(p, {
      ...c,
      elementContext: "reference"
    }), b = Math.max(0, y.top), g = p.y + b, x = Math.max(0, m.scrollHeight - b - Math.max(0, y.bottom));
    return m.style.maxHeight = x + "px", m.scrollTop = b, i && (m.offsetHeight < d.offsetHeight * Math.min(o, r.current.length - 1) - 1 || v.top >= -u || v.bottom >= -u ? ao(() => i(!0)) : ao(() => i(!1))), n && (n.current = await pl(Pp({
      ...p,
      y: g
    }, m.offsetHeight), c)), {
      y: g
    };
  }
});
function eO(t, e) {
  const {
    open: r,
    elements: n
  } = t, {
    enabled: i = !0,
    overflowRef: a,
    scrollRef: s,
    onChange: o
  } = e, u = Hg(o), l = he.useRef(!1), c = he.useRef(null), f = he.useRef(null);
  return he.useEffect(() => {
    if (!i)
      return;
    function h(p) {
      if (p.ctrlKey || !d || a.current == null)
        return;
      const m = p.deltaY, y = a.current.top >= -0.5, v = a.current.bottom >= -0.5, b = d.scrollHeight - d.clientHeight, g = m < 0 ? -1 : 1, x = m < 0 ? "max" : "min";
      d.scrollHeight <= d.clientHeight || (!y && m > 0 || !v && m < 0 ? (p.preventDefault(), ao(() => {
        u((w) => w + Math[x](m, b * g));
      })) : /firefox/i.test(e2()) && (d.scrollTop += m));
    }
    const d = (s == null ? void 0 : s.current) || n.floating;
    if (r && d)
      return d.addEventListener("wheel", h), requestAnimationFrame(() => {
        c.current = d.scrollTop, a.current != null && (f.current = {
          ...a.current
        });
      }), () => {
        c.current = null, f.current = null, d.removeEventListener("wheel", h);
      };
  }, [i, r, n.floating, a, s, u]), he.useMemo(() => i ? {
    floating: {
      onKeyDown() {
        l.current = !0;
      },
      onWheel() {
        l.current = !1;
      },
      onPointerMove() {
        l.current = !1;
      },
      onScroll() {
        const h = (s == null ? void 0 : s.current) || n.floating;
        if (!(!a.current || !h || !l.current)) {
          if (c.current !== null) {
            const d = h.scrollTop - c.current;
            (a.current.bottom < -0.5 && d < -1 || a.current.top < -0.5 && d > 1) && ao(() => u((p) => p + d));
          }
          requestAnimationFrame(() => {
            c.current = h.scrollTop;
          });
        }
      }
    }
  } : {}, [i, a, n.floating, s, u]);
}
let ss = xt({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
ss.displayName = "FloatingContext";
let Yf = xt(null);
Yf.displayName = "PlacementContext";
function tO(t) {
  return Ke(() => t ? typeof t == "string" ? { to: t } : t : null, [t]);
}
function rO() {
  return ft(ss).setReference;
}
function nO() {
  let { getFloatingProps: t, slot: e } = ft(ss);
  return Tt((...r) => Object.assign({}, t(...r), { "data-anchor": e.anchor }), [t, e]);
}
function iO(t = null) {
  t === !1 && (t = null), typeof t == "string" && (t = { to: t });
  let e = ft(Yf), r = Ke(() => t, [JSON.stringify(t, typeof HTMLElement < "u" ? (i, a) => a instanceof HTMLElement ? a.outerHTML : a : void 0)]);
  vt(() => {
    e == null || e(r ?? null);
  }, [e, r]);
  let n = ft(ss);
  return Ke(() => [n.setFloating, t ? n.styles : {}], [n.setFloating, t, n.styles]);
}
let Mp = 4;
function aO({ children: t, enabled: e = !0 }) {
  let [r, n] = Je(null), [i, a] = Je(0), s = Te(null), [o, u] = Je(null);
  sO(o);
  let l = e && r !== null && o !== null, { to: c = "bottom", gap: f = 0, offset: h = 0, padding: d = 0, inner: p } = oO(r, o), [m, y = "center"] = c.split(" ");
  vt(() => {
    l && a(0);
  }, [l]);
  let { refs: v, floatingStyles: b, context: g } = J2({ open: l, placement: m === "selection" ? y === "center" ? "bottom" : `bottom-${y}` : y === "center" ? `${m}` : `${m}-${y}`, strategy: "absolute", transform: !1, middleware: [qg({ mainAxis: m === "selection" ? 0 : f, crossAxis: h }), D2({ padding: d }), m !== "selection" && R2({ padding: d }), m === "selection" && p ? X2({ ...p, padding: d, overflowRef: s, offset: i, minItemsVisible: Mp, referenceOverflowThreshold: d, onFallbackChange(Q) {
    var M, P;
    if (!Q)
      return;
    let B = g.elements.floating;
    if (!B)
      return;
    let q = parseFloat(getComputedStyle(B).scrollPaddingBottom) || 0, z = Math.min(Mp, B.childElementCount), $ = 0, ve = 0;
    for (let j of (P = (M = g.elements.floating) == null ? void 0 : M.childNodes) != null ? P : [])
      if (j instanceof HTMLElement) {
        let C = j.offsetTop, R = C + j.clientHeight + q, H = B.scrollTop, re = H + B.clientHeight;
        if (C >= H && R <= re)
          z--;
        else {
          ve = Math.max(0, Math.min(R, re) - Math.max(C, H)), $ = j.clientHeight;
          break;
        }
      }
    z >= 1 && a((j) => {
      let C = $ * z - ve + q;
      return j >= C ? j : C;
    });
  } }) : null, P2({ padding: d, apply({ availableWidth: Q, availableHeight: M, elements: P }) {
    Object.assign(P.floating.style, { overflow: "auto", maxWidth: `${Q}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${M}px)` });
  } })].filter(Boolean), whileElementsMounted: N2 }), [x = m, w = y] = g.placement.split("-");
  m === "selection" && (x = "selection");
  let S = Ke(() => ({ anchor: [x, w].filter(Boolean).join(" ") }), [x, w]), A = eO(g, { overflowRef: s, onChange: a }), { getReferenceProps: O, getFloatingProps: N } = K2([A]), F = Pe((Q) => {
    u(Q), v.setFloating(Q);
  });
  return he.createElement(Yf.Provider, { value: n }, he.createElement(ss.Provider, { value: { setFloating: F, setReference: v.setReference, styles: b, getReferenceProps: O, getFloatingProps: N, slot: S } }, t));
}
function sO(t) {
  vt(() => {
    if (!t)
      return;
    let e = new MutationObserver(() => {
      let r = t.style.maxHeight;
      parseFloat(r) !== parseInt(r) && (t.style.maxHeight = `${Math.ceil(parseFloat(r))}px`);
    });
    return e.observe(t, { attributes: !0, attributeFilter: ["style"] }), () => {
      e.disconnect();
    };
  }, [t]);
}
function oO(t, e) {
  var r, n, i;
  let a = vl((r = t == null ? void 0 : t.gap) != null ? r : "var(--anchor-gap, 0)", e), s = vl((n = t == null ? void 0 : t.offset) != null ? n : "var(--anchor-offset, 0)", e), o = vl((i = t == null ? void 0 : t.padding) != null ? i : "var(--anchor-padding, 0)", e);
  return { ...t, gap: a, offset: s, padding: o };
}
function vl(t, e, r = void 0) {
  let n = mu(), i = Pe((u, l) => {
    if (u == null)
      return [r, null];
    if (typeof u == "number")
      return [u, null];
    if (typeof u == "string") {
      if (!l)
        return [r, null];
      let c = Fp(u, l);
      return [c, (f) => {
        let h = Yg(u);
        {
          let d = h.map((p) => window.getComputedStyle(l).getPropertyValue(p));
          n.requestAnimationFrame(function p() {
            n.nextFrame(p);
            let m = !1;
            for (let [v, b] of h.entries()) {
              let g = window.getComputedStyle(l).getPropertyValue(b);
              if (d[v] !== g) {
                d[v] = g, m = !0;
                break;
              }
            }
            if (!m)
              return;
            let y = Fp(u, l);
            c !== y && (f(y), c = y);
          });
        }
        return n.dispose;
      }];
    }
    return [r, null];
  }), a = Ke(() => i(t, e)[0], [t, e]), [s = a, o] = Je();
  return vt(() => {
    let [u, l] = i(t, e);
    if (o(u), !!l)
      return l(o);
  }, [t, e]), s;
}
function Yg(t) {
  let e = /var\((.*)\)/.exec(t);
  if (e) {
    let r = e[1].indexOf(",");
    if (r === -1)
      return [e[1]];
    let n = e[1].slice(0, r).trim(), i = e[1].slice(r + 1).trim();
    return i ? [n, ...Yg(i)] : [n];
  }
  return [];
}
function Fp(t, e) {
  let r = document.createElement("div");
  e.appendChild(r), r.style.setProperty("margin-top", "0px", "important"), r.style.setProperty("margin-top", t, "important");
  let n = parseFloat(window.getComputedStyle(r).marginTop) || 0;
  return e.removeChild(r), n;
}
let Qf = xt(null);
Qf.displayName = "OpenClosedContext";
var Ct = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Ct || {});
function bu() {
  return ft(Qf);
}
function Qg({ value: t, children: e }) {
  return U.createElement(Qf.Provider, { value: t }, e);
}
function uO(t) {
  let e = Pe(t), r = Te(!1);
  He(() => (r.current = !1, () => {
    r.current = !0, Tg(() => {
      r.current && e();
    });
  }), [e]);
}
function lO() {
  let t = typeof document > "u";
  return "useSyncExternalStore" in he ? ((e) => e.useSyncExternalStore)(he)(() => () => {
  }, () => !1, () => !t) : !1;
}
function Zf() {
  let t = lO(), [e, r] = he.useState($n.isHandoffComplete);
  return e && $n.isHandoffComplete === !1 && r(!1), he.useEffect(() => {
    e !== !0 && r(!0);
  }, [e]), he.useEffect(() => $n.handoff(), []), t ? !1 : e;
}
let cO = xt(!1);
function fO() {
  return ft(cO);
}
function dO(t) {
  let e = fO(), r = ft(Gg), n = Ui(t), [i, a] = Je(() => {
    var s;
    if (!e && r !== null)
      return (s = r.current) != null ? s : null;
    if ($n.isServer)
      return null;
    let o = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (o)
      return o;
    if (n === null)
      return null;
    let u = n.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(u);
  });
  return He(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), He(() => {
    e || r !== null && a(r.current);
  }, [r, a, e]), i;
}
let Zg = Cr, hO = Jt(function(t, e) {
  let r = t, n = Te(null), i = ur(Cg((c) => {
    n.current = c;
  }), e), a = Ui(n), s = dO(n), [o] = Je(() => {
    var c;
    return $n.isServer ? null : (c = a == null ? void 0 : a.createElement("div")) != null ? c : null;
  }), u = ft(Rc), l = Zf();
  return vt(() => {
    !s || !o || s.contains(o) || (o.setAttribute("data-headlessui-portal", ""), s.appendChild(o));
  }, [s, o]), vt(() => {
    if (o && u)
      return u.register(o);
  }, [u, o]), uO(() => {
    var c;
    !s || !o || (o instanceof Node && s.contains(o) && s.removeChild(o), s.childNodes.length <= 0 && ((c = s.parentElement) == null || c.removeChild(s)));
  }), l ? !s || !o ? null : Q0(fr({ ourProps: { ref: i }, theirProps: r, slot: {}, defaultTag: Zg, name: "Portal" }), o) : null;
});
function pO(t, e) {
  let r = ur(e), { enabled: n = !0, ...i } = t;
  return n ? U.createElement(hO, { ...i, ref: r }) : fr({ ourProps: { ref: r }, theirProps: i, slot: {}, defaultTag: Zg, name: "Portal" });
}
let mO = Cr, Gg = xt(null);
function vO(t, e) {
  let { target: r, ...n } = t, i = { ref: ur(e) };
  return U.createElement(Gg.Provider, { value: r }, fr({ ourProps: i, theirProps: n, defaultTag: mO, name: "Popover.Group" }));
}
let Rc = xt(null);
function yO() {
  let t = ft(Rc), e = Te([]), r = Pe((a) => (e.current.push(a), t && t.register(a), () => n(a))), n = Pe((a) => {
    let s = e.current.indexOf(a);
    s !== -1 && e.current.splice(s, 1), t && t.unregister(a);
  }), i = Ke(() => ({ register: r, unregister: n, portals: e }), [r, n, e]);
  return [e, Ke(() => function({ children: a }) {
    return U.createElement(Rc.Provider, { value: i }, a);
  }, [i])];
}
let gO = Jt(pO), bO = Jt(vO), wO = Object.assign(gO, { Group: bO });
function EO({ defaultContainers: t = [], portals: e, mainTreeNodeRef: r } = {}) {
  var n;
  let i = Te((n = r == null ? void 0 : r.current) != null ? n : null), a = Ui(i), s = Pe(() => {
    var o, u, l;
    let c = [];
    for (let f of t)
      f !== null && (f instanceof HTMLElement ? c.push(f) : "current" in f && f.current instanceof HTMLElement && c.push(f.current));
    if (e != null && e.current)
      for (let f of e.current)
        c.push(f);
    for (let f of (o = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? o : [])
      f !== document.body && f !== document.head && f instanceof HTMLElement && f.id !== "headlessui-portal-root" && (f.contains(i.current) || f.contains((l = (u = i.current) == null ? void 0 : u.getRootNode()) == null ? void 0 : l.host) || c.some((h) => f.contains(h)) || c.push(f));
    return c;
  });
  return { resolveContainers: s, contains: Pe((o) => s().some((u) => u.contains(o))), mainTreeNodeRef: i, MainTreeNode: Ke(() => function() {
    return r != null ? null : U.createElement(Fa, { features: Ai.Hidden, ref: i });
  }, [i, r]) };
}
function xO() {
  let t = Te(null);
  return { mainTreeNodeRef: t, MainTreeNode: Ke(() => function() {
    return U.createElement(Fa, { features: Ai.Hidden, ref: t });
  }, [t]) };
}
function Gf() {
  let t = Te(!1);
  return vt(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
var Sr = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Sr || {});
function Jg() {
  let t = Te(0);
  return Dg("keydown", (e) => {
    e.key === "Tab" && (t.current = e.shiftKey ? 1 : 0);
  }, !0), t;
}
var kO = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(kO || {}), TO = ((t) => (t[t.TogglePopover = 0] = "TogglePopover", t[t.ClosePopover = 1] = "ClosePopover", t[t.SetButton = 2] = "SetButton", t[t.SetButtonId = 3] = "SetButtonId", t[t.SetPanel = 4] = "SetPanel", t[t.SetPanelId = 5] = "SetPanelId", t))(TO || {});
let _O = { 0: (t) => ({ ...t, popoverState: mt(t.popoverState, { 0: 1, 1: 0 }), __demoMode: !1 }), 1(t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1, __demoMode: !1 };
}, 2(t, e) {
  return t.button === e.button ? t : { ...t, button: e.button };
}, 3(t, e) {
  return t.buttonId === e.buttonId ? t : { ...t, buttonId: e.buttonId };
}, 4(t, e) {
  return t.panel === e.panel ? t : { ...t, panel: e.panel };
}, 5(t, e) {
  return t.panelId === e.panelId ? t : { ...t, panelId: e.panelId };
} }, Jf = xt(null);
Jf.displayName = "PopoverContext";
function wu(t) {
  let e = ft(Jf);
  if (e === null) {
    let r = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, wu), r;
  }
  return e;
}
let Eu = xt(null);
Eu.displayName = "PopoverAPIContext";
function Kf(t) {
  let e = ft(Eu);
  if (e === null) {
    let r = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Kf), r;
  }
  return e;
}
let Xf = xt(null);
Xf.displayName = "PopoverGroupContext";
function Kg() {
  return ft(Xf);
}
let xu = xt(null);
xu.displayName = "PopoverPanelContext";
function SO() {
  return ft(xu);
}
function OO(t, e) {
  return mt(e.type, _O, t, e);
}
let CO = "div";
function IO(t, e) {
  var r;
  let { __demoMode: n = !1, ...i } = t, a = Te(null), s = ur(e, Cg((z) => {
    a.current = z;
  })), o = Te([]), u = lm(OO, { __demoMode: n, popoverState: n ? 0 : 1, buttons: o, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: pd(), afterPanelSentinel: pd() }), [{ popoverState: l, button: c, buttonId: f, panel: h, panelId: d, beforePanelSentinel: p, afterPanelSentinel: m }, y] = u, v = Ui((r = a.current) != null ? r : c), b = Ke(() => {
    if (!c || !h)
      return !1;
    for (let H of document.querySelectorAll("body > *"))
      if (Number(H == null ? void 0 : H.contains(c)) ^ Number(H == null ? void 0 : H.contains(h)))
        return !0;
    let z = vu(), $ = z.indexOf(c), ve = ($ + z.length - 1) % z.length, j = ($ + 1) % z.length, C = z[ve], R = z[j];
    return !h.contains(C) && !h.contains(R);
  }, [c, h]), g = Zt(f), x = Zt(d), w = Ke(() => ({ buttonId: g, panelId: x, close: () => y({ type: 1 }) }), [g, x, y]), S = Kg(), A = S == null ? void 0 : S.registerPopover, O = Pe(() => {
    var z;
    return (z = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? z : (v == null ? void 0 : v.activeElement) && ((c == null ? void 0 : c.contains(v.activeElement)) || (h == null ? void 0 : h.contains(v.activeElement)));
  });
  He(() => A == null ? void 0 : A(w), [A, w]);
  let [N, F] = yO(), Q = EO({ mainTreeNodeRef: S == null ? void 0 : S.mainTreeNodeRef, portals: N, defaultContainers: [c, h] });
  WS(v == null ? void 0 : v.defaultView, "focus", (z) => {
    var $, ve, j, C;
    z.target !== window && z.target instanceof HTMLElement && l === 0 && (O() || c && h && (Q.contains(z.target) || (ve = ($ = p.current) == null ? void 0 : $.contains) != null && ve.call($, z.target) || (C = (j = m.current) == null ? void 0 : j.contains) != null && C.call(j, z.target) || y({ type: 1 })));
  }, !0), zS(Q.resolveContainers, (z, $) => {
    y({ type: 1 }), Ag($, Wf.Loose) || (z.preventDefault(), c == null || c.focus());
  }, l === 0);
  let M = Pe((z) => {
    y({ type: 1 });
    let $ = z ? z instanceof HTMLElement ? z : "current" in z && z.current instanceof HTMLElement ? z.current : c : c;
    $ == null || $.focus();
  }), P = Ke(() => ({ close: M, isPortalled: b }), [M, b]), B = Ke(() => ({ open: l === 0, close: M }), [l, M]), q = { ref: s };
  return U.createElement(aO, null, U.createElement(xu.Provider, { value: null }, U.createElement(Jf.Provider, { value: u }, U.createElement(Eu.Provider, { value: P }, U.createElement(IS, { value: M }, U.createElement(Qg, { value: mt(l, { 0: Ct.Open, 1: Ct.Closed }) }, U.createElement(F, null, fr({ ourProps: q, theirProps: i, slot: B, defaultTag: CO, name: "Popover" }), U.createElement(Q.MainTreeNode, null))))))));
}
let AO = "button";
function NO(t, e) {
  let r = io(), { id: n = `headlessui-popover-button-${r}`, disabled: i = !1, autoFocus: a = !1, ...s } = t, [o, u] = wu("Popover.Button"), { isPortalled: l } = Kf("Popover.Button"), c = Te(null), f = `headlessui-focus-sentinel-${io()}`, h = Kg(), d = h == null ? void 0 : h.closeOthers, p = SO() !== null;
  He(() => {
    if (!p)
      return u({ type: 3, buttonId: n }), () => {
        u({ type: 3, buttonId: null });
      };
  }, [p, n, u]);
  let [m] = Je(() => Symbol()), y = ur(c, e, rO(), p ? null : (j) => {
    if (j)
      o.buttons.current.push(m);
    else {
      let C = o.buttons.current.indexOf(m);
      C !== -1 && o.buttons.current.splice(C, 1);
    }
    o.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), j && u({ type: 2, button: j });
  }), v = ur(c, e), b = Ui(c), g = Pe((j) => {
    var C, R, H;
    if (p) {
      if (o.popoverState === 1)
        return;
      switch (j.key) {
        case Kr.Space:
        case Kr.Enter:
          j.preventDefault(), (R = (C = j.target).click) == null || R.call(C), u({ type: 1 }), (H = o.button) == null || H.focus();
          break;
      }
    } else
      switch (j.key) {
        case Kr.Space:
        case Kr.Enter:
          j.preventDefault(), j.stopPropagation(), o.popoverState === 1 && (d == null || d(o.buttonId)), u({ type: 0 });
          break;
        case Kr.Escape:
          if (o.popoverState !== 0)
            return d == null ? void 0 : d(o.buttonId);
          if (!c.current || b != null && b.activeElement && !c.current.contains(b.activeElement))
            return;
          j.preventDefault(), j.stopPropagation(), u({ type: 1 });
          break;
      }
  }), x = Pe((j) => {
    p || j.key === Kr.Space && j.preventDefault();
  }), w = Pe((j) => {
    var C, R;
    Sg(j.currentTarget) || i || (p ? (u({ type: 1 }), (C = o.button) == null || C.focus()) : (j.preventDefault(), j.stopPropagation(), o.popoverState === 1 && (d == null || d(o.buttonId)), u({ type: 0 }), (R = o.button) == null || R.focus()));
  }), S = Pe((j) => {
    j.preventDefault(), j.stopPropagation();
  }), { isFocusVisible: A, focusProps: O } = vS({ autoFocus: a }), { isHovered: N, hoverProps: F } = mS({ isDisabled: i }), { pressed: Q, pressProps: M } = xS({ disabled: i }), P = o.popoverState === 0, B = Ke(() => ({ open: P, active: Q || P, disabled: i, hover: N, focus: A, autofocus: a }), [P, N, A, Q, i, a]), q = qS(t, c), z = Ic(p ? { ref: v, type: q, onKeyDown: g, onClick: w, disabled: i || void 0, autoFocus: a } : { ref: y, id: o.buttonId, type: q, "aria-expanded": o.popoverState === 0, "aria-controls": o.panel ? o.panelId : void 0, disabled: i || void 0, autoFocus: a, onKeyDown: g, onKeyUp: x, onClick: w, onMouseDown: S }, O, F, M), $ = Jg(), ve = Pe(() => {
    let j = o.panel;
    if (!j)
      return;
    function C() {
      mt($.current, { [Sr.Forwards]: () => Dn(j, _r.First), [Sr.Backwards]: () => Dn(j, _r.Last) }) === xo.Error && Dn(vu().filter((R) => R.dataset.headlessuiFocusGuard !== "true"), mt($.current, { [Sr.Forwards]: _r.Next, [Sr.Backwards]: _r.Previous }), { relativeTo: o.button });
    }
    C();
  });
  return U.createElement(U.Fragment, null, fr({ ourProps: z, theirProps: s, slot: B, defaultTag: AO, name: "Popover.Button" }), P && !p && l && U.createElement(Fa, { id: f, features: Ai.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: ve }));
}
let DO = "div", RO = Ii.RenderStrategy | Ii.Static;
function PO(t, e) {
  let r = io(), { id: n = `headlessui-popover-overlay-${r}`, ...i } = t, [{ popoverState: a }, s] = wu("Popover.Overlay"), o = ur(e), u = bu(), l = u !== null ? (u & Ct.Open) === Ct.Open : a === 0, c = Pe((h) => {
    if (Sg(h.currentTarget))
      return h.preventDefault();
    s({ type: 1 });
  }), f = Ke(() => ({ open: a === 0 }), [a]);
  return fr({ ourProps: { ref: o, id: n, "aria-hidden": !0, onClick: c }, theirProps: i, slot: f, defaultTag: DO, features: RO, visible: l, name: "Popover.Overlay" });
}
let MO = "div", FO = Ii.RenderStrategy | Ii.Static;
function LO(t, e) {
  let r = io(), { id: n = `headlessui-popover-panel-${r}`, focus: i = !1, anchor: a, portal: s = !1, modal: o = !1, ...u } = t, [l, c] = wu("Popover.Panel"), { close: f, isPortalled: h } = Kf("Popover.Panel"), d = `headlessui-focus-sentinel-before-${r}`, p = `headlessui-focus-sentinel-after-${r}`, m = Te(null), y = tO(a), [v, b] = iO(y), g = nO();
  y && (s = !0);
  let x = ur(m, e, y ? v : null, (q) => {
    c({ type: 4, panel: q });
  }), w = Ui(m), S = kS();
  vt(() => (c({ type: 5, panelId: n }), () => {
    c({ type: 5, panelId: null });
  }), [n, c]);
  let A = bu(), O = A !== null ? (A & Ct.Open) === Ct.Open : l.popoverState === 0;
  Ig(l.button, () => c({ type: 1 }), O), JS(w, l.__demoMode ? !1 : o && O);
  let N = Pe((q) => {
    var z;
    switch (q.key) {
      case Kr.Escape:
        if (l.popoverState !== 0 || !m.current || w != null && w.activeElement && !m.current.contains(w.activeElement))
          return;
        q.preventDefault(), q.stopPropagation(), c({ type: 1 }), (z = l.button) == null || z.focus();
        break;
    }
  });
  He(() => {
    var q;
    t.static || l.popoverState === 1 && ((q = t.unmount) == null || q) && c({ type: 4, panel: null });
  }, [l.popoverState, t.unmount, t.static, c]), He(() => {
    if (l.__demoMode || !i || l.popoverState !== 0 || !m.current)
      return;
    let q = w == null ? void 0 : w.activeElement;
    m.current.contains(q) || Dn(m.current, _r.First);
  }, [l.__demoMode, i, m, l.popoverState]);
  let F = Ke(() => ({ open: l.popoverState === 0, close: f }), [l, f]), Q = Ic(y ? g() : {}, { ref: x, id: n, onKeyDown: N, onBlur: i && l.popoverState === 0 ? (q) => {
    var z, $, ve, j, C;
    let R = q.relatedTarget;
    R && m.current && ((z = m.current) != null && z.contains(R) || (c({ type: 1 }), ((ve = ($ = l.beforePanelSentinel.current) == null ? void 0 : $.contains) != null && ve.call($, R) || (C = (j = l.afterPanelSentinel.current) == null ? void 0 : j.contains) != null && C.call(j, R)) && R.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1, style: { ...b, "--button-width": NS(l.button, !0).width } }), M = Jg(), P = Pe(() => {
    let q = m.current;
    if (!q)
      return;
    function z() {
      mt(M.current, { [Sr.Forwards]: () => {
        var $;
        Dn(q, _r.First) === xo.Error && (($ = l.afterPanelSentinel.current) == null || $.focus());
      }, [Sr.Backwards]: () => {
        var $;
        ($ = l.button) == null || $.focus({ preventScroll: !0 });
      } });
    }
    z();
  }), B = Pe(() => {
    let q = m.current;
    if (!q)
      return;
    function z() {
      mt(M.current, { [Sr.Forwards]: () => {
        var $;
        if (!l.button)
          return;
        let ve = vu(), j = ve.indexOf(l.button), C = ve.slice(0, j + 1), R = [...ve.slice(j + 1), ...C];
        for (let H of R.slice())
          if (H.dataset.headlessuiFocusGuard === "true" || ($ = l.panel) != null && $.contains(H)) {
            let re = R.indexOf(H);
            re !== -1 && R.splice(re, 1);
          }
        Dn(R, _r.First, { sorted: !1 });
      }, [Sr.Backwards]: () => {
        var $;
        Dn(q, _r.Previous) === xo.Error && (($ = l.button) == null || $.focus());
      } });
    }
    z();
  });
  return U.createElement(xu.Provider, { value: n }, U.createElement(Eu.Provider, { value: { close: f, isPortalled: h } }, U.createElement(wO, { enabled: s ? t.static || O : !1 }, O && h && U.createElement(Fa, { id: d, ref: l.beforePanelSentinel, features: Ai.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P }), fr({ mergeRefs: S, ourProps: Q, theirProps: u, slot: F, defaultTag: MO, features: FO, visible: O, name: "Popover.Panel" }), O && h && U.createElement(Fa, { id: p, ref: l.afterPanelSentinel, features: Ai.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: B }))));
}
let $O = "div";
function jO(t, e) {
  let r = Te(null), n = ur(r, e), [i, a] = Je([]), s = xO(), o = Pe((m) => {
    a((y) => {
      let v = y.indexOf(m);
      if (v !== -1) {
        let b = y.slice();
        return b.splice(v, 1), b;
      }
      return y;
    });
  }), u = Pe((m) => (a((y) => [...y, m]), () => o(m))), l = Pe(() => {
    var m;
    let y = pu(r);
    if (!y)
      return !1;
    let v = y.activeElement;
    return (m = r.current) != null && m.contains(v) ? !0 : i.some((b) => {
      var g, x;
      return ((g = y.getElementById(b.buttonId.current)) == null ? void 0 : g.contains(v)) || ((x = y.getElementById(b.panelId.current)) == null ? void 0 : x.contains(v));
    });
  }), c = Pe((m) => {
    for (let y of i)
      y.buttonId.current !== m && y.close();
  }), f = Ke(() => ({ registerPopover: u, unregisterPopover: o, isFocusWithinPopoverGroup: l, closeOthers: c, mainTreeNodeRef: s.mainTreeNodeRef }), [u, o, l, c, s.mainTreeNodeRef]), h = Ke(() => ({}), []), d = t, p = { ref: n };
  return U.createElement(Xf.Provider, { value: f }, fr({ ourProps: p, theirProps: d, slot: h, defaultTag: $O, name: "Popover.Group" }), U.createElement(s.MainTreeNode, null));
}
let VO = Jt(IO), Xg = Jt(NO), zO = Jt(PO), e0 = Jt(LO), WO = Jt(jO), qO = Object.assign(VO, { Button: Xg, Overlay: zO, Panel: e0, Group: WO });
function UO(t = 0) {
  let [e, r] = Je(t), n = Gf(), i = Tt((u) => {
    n.current && r((l) => l | u);
  }, [e, n]), a = Tt((u) => !!(e & u), [e]), s = Tt((u) => {
    n.current && r((l) => l & ~u);
  }, [r, n]), o = Tt((u) => {
    n.current && r((l) => l ^ u);
  }, [r]);
  return { flags: e, addFlag: i, hasFlag: a, removeFlag: s, toggleFlag: o };
}
function t0(t) {
  let e = { called: !1 };
  return (...r) => {
    if (!e.called)
      return e.called = !0, t(...r);
  };
}
function yl(t, ...e) {
  t && e.length > 0 && t.classList.add(...e);
}
function gl(t, ...e) {
  t && e.length > 0 && t.classList.remove(...e);
}
function BO(t, e) {
  let r = t0(e), n = Yn();
  if (!t)
    return n.dispose;
  let { transitionDuration: i, transitionDelay: a } = getComputedStyle(t), [s, o] = [i, a].map((l) => {
    let [c = 0] = l.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, h) => h - f);
    return c;
  }), u = s + o;
  if (u !== 0) {
    let l = n.group((c) => {
      let f = c.setTimeout(() => {
        r(), c.dispose();
      }, u);
      c.addEventListener(t, "transitionrun", (h) => {
        h.target === h.currentTarget && (f(), c.addEventListener(t, "transitioncancel", (d) => {
          d.target === d.currentTarget && (r(), l());
        }));
      });
    });
    n.addEventListener(t, "transitionend", (c) => {
      c.target === c.currentTarget && (r(), n.dispose());
    });
  } else
    r();
  return n.dispose;
}
function HO(t, { direction: e, done: r, classes: n, inFlight: i }) {
  let a = Yn(), s = r !== void 0 ? t0(r) : () => {
  };
  e === "enter" && (t.removeAttribute("hidden"), t.style.display = "");
  let o = mt(e, { enter: () => n.enter, leave: () => n.leave }), u = mt(e, { enter: () => n.enterTo, leave: () => n.leaveTo }), l = mt(e, { enter: () => n.enterFrom, leave: () => n.leaveFrom });
  return YO(t, { prepare() {
    gl(t, ...n.base, ...n.enter, ...n.enterTo, ...n.enterFrom, ...n.leave, ...n.leaveFrom, ...n.leaveTo, ...n.entered), yl(t, ...n.base, ...o, ...l);
  }, inFlight: i }), i && (i.current = !0), a.nextFrame(() => {
    a.add(BO(t, () => (gl(t, ...n.base, ...o), yl(t, ...n.base, ...n.entered, ...u), i && (i.current = !1), s()))), gl(t, ...n.base, ...o, ...l), yl(t, ...n.base, ...o, ...u);
  }), a.dispose;
}
function YO(t, { inFlight: e, prepare: r }) {
  if (e != null && e.current) {
    r();
    return;
  }
  let n = t.style.transition;
  t.style.transition = "none", r(), t.offsetHeight, t.style.transition = n;
}
function QO({ container: t, direction: e, classes: r, onStart: n, onStop: i }) {
  let a = Gf(), s = mu(), o = Te(!1);
  vt(() => {
    if (e === "idle" || !a.current)
      return;
    n.current(e);
    let u = t.current;
    return u ? s.add(HO(u, { direction: e, classes: r.current, inFlight: o, done() {
      i.current(e);
    } })) : i.current(e), s.dispose;
  }, [e]);
}
function Hr(t = "") {
  return t.split(/\s+/).filter((e) => e.length > 1);
}
function r0(t) {
  var e;
  return !!(t.enter || t.enterFrom || t.enterTo || t.leave || t.leaveFrom || t.leaveTo) || ((e = t.as) != null ? e : i0) !== Cr || U.Children.count(t.children) === 1;
}
let ku = xt(null);
ku.displayName = "TransitionContext";
var ZO = ((t) => (t.Visible = "visible", t.Hidden = "hidden", t))(ZO || {});
function GO() {
  let t = ft(ku);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
function JO() {
  let t = ft(Tu);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
let Tu = xt(null);
Tu.displayName = "NestingContext";
function _u(t) {
  return "children" in t ? _u(t.children) : t.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function n0(t, e) {
  let r = Zt(t), n = Te([]), i = Gf(), a = mu(), s = Pe((d, p = tn.Hidden) => {
    let m = n.current.findIndex(({ el: y }) => y === d);
    m !== -1 && (mt(p, { [tn.Unmount]() {
      n.current.splice(m, 1);
    }, [tn.Hidden]() {
      n.current[m].state = "hidden";
    } }), a.microTask(() => {
      var y;
      !_u(n) && i.current && ((y = r.current) == null || y.call(r));
    }));
  }), o = Pe((d) => {
    let p = n.current.find(({ el: m }) => m === d);
    return p ? p.state !== "visible" && (p.state = "visible") : n.current.push({ el: d, state: "visible" }), () => s(d, tn.Unmount);
  }), u = Te([]), l = Te(Promise.resolve()), c = Te({ enter: [], leave: [], idle: [] }), f = Pe((d, p, m) => {
    u.current.splice(0), e && (e.chains.current[p] = e.chains.current[p].filter(([y]) => y !== d)), e == null || e.chains.current[p].push([d, new Promise((y) => {
      u.current.push(y);
    })]), e == null || e.chains.current[p].push([d, new Promise((y) => {
      Promise.all(c.current[p].map(([v, b]) => b)).then(() => y());
    })]), p === "enter" ? l.current = l.current.then(() => e == null ? void 0 : e.wait.current).then(() => m(p)) : m(p);
  }), h = Pe((d, p, m) => {
    Promise.all(c.current[p].splice(0).map(([y, v]) => v)).then(() => {
      var y;
      (y = u.current.shift()) == null || y();
    }).then(() => m(p));
  });
  return Ke(() => ({ children: n, register: o, unregister: s, onStart: f, onStop: h, wait: l, chains: c }), [o, s, n, f, h, c, l]);
}
let i0 = Cr, a0 = Ii.RenderStrategy;
function KO(t, e) {
  var r, n, i;
  let { beforeEnter: a, afterEnter: s, beforeLeave: o, afterLeave: u, enter: l, enterFrom: c, enterTo: f, entered: h, leave: d, leaveFrom: p, leaveTo: m, ...y } = t, v = Te(null), b = r0(t), g = ur(...b ? [v, e] : e === null ? [] : [e]), x = (r = y.unmount) == null || r ? tn.Unmount : tn.Hidden, { show: w, appear: S, initial: A } = GO(), [O, N] = Je(w ? "visible" : "hidden"), F = JO(), { register: Q, unregister: M } = F;
  vt(() => Q(v), [Q, v]), vt(() => {
    if (x === tn.Hidden && v.current) {
      if (w && O !== "visible") {
        N("visible");
        return;
      }
      return mt(O, { hidden: () => M(v), visible: () => Q(v) });
    }
  }, [O, v, Q, M, w, x]);
  let P = Zt({ base: Hr(y.className), enter: Hr(l), enterFrom: Hr(c), enterTo: Hr(f), entered: Hr(h), leave: Hr(d), leaveFrom: Hr(p), leaveTo: Hr(m) }), B = Zt({ beforeEnter: a, afterEnter: s, beforeLeave: o, afterLeave: u }), q = Zf();
  vt(() => {
    if (b && q && O === "visible" && v.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [v, O, q, b]);
  let z = A && !S, $ = S && w && A, ve = $ ? "enter" : !q || z ? "idle" : w ? "enter" : "leave", j = UO(0), C = Pe((ue) => mt(ue, { enter: () => {
    var le, pe;
    j.addFlag(Ct.Opening), (pe = (le = B.current).beforeEnter) == null || pe.call(le);
  }, leave: () => {
    var le, pe;
    j.addFlag(Ct.Closing), (pe = (le = B.current).beforeLeave) == null || pe.call(le);
  }, idle: () => {
  } })), R = Pe((ue) => mt(ue, { enter: () => {
    var le, pe;
    j.removeFlag(Ct.Opening), (pe = (le = B.current).afterEnter) == null || pe.call(le);
  }, leave: () => {
    var le, pe;
    j.removeFlag(Ct.Closing), (pe = (le = B.current).afterLeave) == null || pe.call(le);
  }, idle: () => {
  } })), H = Te(!1), re = n0(() => {
    H.current || (N("hidden"), M(v));
  }, F);
  QO({ container: v, classes: P, direction: ve, onStart: Zt((ue) => {
    H.current = !0, re.onStart(v, ue, C);
  }), onStop: Zt((ue) => {
    H.current = !1, re.onStop(v, ue, R), ue === "leave" && !_u(re) && (N("hidden"), M(v));
  }) });
  let X = y, ye = { ref: g };
  return $ ? X = { ...X, className: ya(y.className, ...P.current.enter, ...P.current.enterFrom) } : H.current ? (X.className = ya(y.className, (n = v.current) == null ? void 0 : n.className), X.className === "" && delete X.className) : (X.className = ya(y.className, (i = v.current) == null ? void 0 : i.className, ...mt(ve, { enter: [...P.current.enterTo, ...P.current.entered], leave: P.current.leaveTo, idle: [] })), X.className === "" && delete X.className), U.createElement(Tu.Provider, { value: re }, U.createElement(Qg, { value: mt(O, { visible: Ct.Open, hidden: Ct.Closed }) | j.flags }, fr({ ourProps: ye, theirProps: X, defaultTag: i0, features: a0, visible: O === "visible", name: "Transition.Child" })));
}
function XO(t, e) {
  let { show: r, appear: n = !1, unmount: i = !0, ...a } = t, s = Te(null), o = r0(t), u = ur(...o ? [s, e] : e === null ? [] : [e]);
  Zf();
  let l = bu();
  if (r === void 0 && l !== null && (r = (l & Ct.Open) === Ct.Open), r === void 0)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, f] = Je(r ? "visible" : "hidden"), h = n0(() => {
    r || f("hidden");
  }), [d, p] = Je(!0), m = Te([r]);
  vt(() => {
    d !== !1 && m.current[m.current.length - 1] !== r && (m.current.push(r), p(!1));
  }, [m, r]);
  let y = Ke(() => ({ show: r, appear: n, initial: d }), [r, n, d]);
  Ig(s, () => f("hidden")), vt(() => {
    r ? f("visible") : !_u(h) && s.current !== null && f("hidden");
  }, [r, h]);
  let v = { unmount: i }, b = Pe(() => {
    var x;
    d && p(!1), (x = t.beforeEnter) == null || x.call(t);
  }), g = Pe(() => {
    var x;
    d && p(!1), (x = t.beforeLeave) == null || x.call(t);
  });
  return U.createElement(Tu.Provider, { value: h }, U.createElement(ku.Provider, { value: y }, fr({ ourProps: { ...v, as: Cr, children: U.createElement(s0, { ref: u, ...v, ...a, beforeEnter: b, beforeLeave: g }) }, theirProps: {}, defaultTag: Cr, features: a0, visible: c === "visible", name: "Transition" })));
}
function eC(t, e) {
  let r = ft(ku) !== null, n = bu() !== null;
  return U.createElement(U.Fragment, null, !r && n ? U.createElement(Pc, { ref: e, ...t }) : U.createElement(s0, { ref: e, ...t }));
}
let Pc = Jt(XO), s0 = Jt(KO), tC = Jt(eC), rC = Object.assign(Pc, { Child: tC, Root: Pc });
var Mc = { exports: {} }, Vs = { exports: {} }, $e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp;
function nC() {
  if (Lp)
    return $e;
  Lp = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
  function g(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case e:
          switch (w = w.type, w) {
            case u:
            case l:
            case n:
            case a:
            case i:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case o:
                case c:
                case p:
                case d:
                case s:
                  return w;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function x(w) {
    return g(w) === l;
  }
  return $e.AsyncMode = u, $e.ConcurrentMode = l, $e.ContextConsumer = o, $e.ContextProvider = s, $e.Element = e, $e.ForwardRef = c, $e.Fragment = n, $e.Lazy = p, $e.Memo = d, $e.Portal = r, $e.Profiler = a, $e.StrictMode = i, $e.Suspense = f, $e.isAsyncMode = function(w) {
    return x(w) || g(w) === u;
  }, $e.isConcurrentMode = x, $e.isContextConsumer = function(w) {
    return g(w) === o;
  }, $e.isContextProvider = function(w) {
    return g(w) === s;
  }, $e.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, $e.isForwardRef = function(w) {
    return g(w) === c;
  }, $e.isFragment = function(w) {
    return g(w) === n;
  }, $e.isLazy = function(w) {
    return g(w) === p;
  }, $e.isMemo = function(w) {
    return g(w) === d;
  }, $e.isPortal = function(w) {
    return g(w) === r;
  }, $e.isProfiler = function(w) {
    return g(w) === a;
  }, $e.isStrictMode = function(w) {
    return g(w) === i;
  }, $e.isSuspense = function(w) {
    return g(w) === f;
  }, $e.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === l || w === a || w === i || w === f || w === h || typeof w == "object" && w !== null && (w.$$typeof === p || w.$$typeof === d || w.$$typeof === s || w.$$typeof === o || w.$$typeof === c || w.$$typeof === y || w.$$typeof === v || w.$$typeof === b || w.$$typeof === m);
  }, $e.typeOf = g, $e;
}
var je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p;
function iC() {
  return $p || ($p = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
    function g(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === n || G === l || G === a || G === i || G === f || G === h || typeof G == "object" && G !== null && (G.$$typeof === p || G.$$typeof === d || G.$$typeof === s || G.$$typeof === o || G.$$typeof === c || G.$$typeof === y || G.$$typeof === v || G.$$typeof === b || G.$$typeof === m);
    }
    function x(G) {
      if (typeof G == "object" && G !== null) {
        var _t = G.$$typeof;
        switch (_t) {
          case e:
            var Er = G.type;
            switch (Er) {
              case u:
              case l:
              case n:
              case a:
              case i:
              case f:
                return Er;
              default:
                var zr = Er && Er.$$typeof;
                switch (zr) {
                  case o:
                  case c:
                  case p:
                  case d:
                  case s:
                    return zr;
                  default:
                    return _t;
                }
            }
          case r:
            return _t;
        }
      }
    }
    var w = u, S = l, A = o, O = s, N = e, F = c, Q = n, M = p, P = d, B = r, q = a, z = i, $ = f, ve = !1;
    function j(G) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(G) || x(G) === u;
    }
    function C(G) {
      return x(G) === l;
    }
    function R(G) {
      return x(G) === o;
    }
    function H(G) {
      return x(G) === s;
    }
    function re(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function X(G) {
      return x(G) === c;
    }
    function ye(G) {
      return x(G) === n;
    }
    function ue(G) {
      return x(G) === p;
    }
    function le(G) {
      return x(G) === d;
    }
    function pe(G) {
      return x(G) === r;
    }
    function Ce(G) {
      return x(G) === a;
    }
    function _e(G) {
      return x(G) === i;
    }
    function dt(G) {
      return x(G) === f;
    }
    je.AsyncMode = w, je.ConcurrentMode = S, je.ContextConsumer = A, je.ContextProvider = O, je.Element = N, je.ForwardRef = F, je.Fragment = Q, je.Lazy = M, je.Memo = P, je.Portal = B, je.Profiler = q, je.StrictMode = z, je.Suspense = $, je.isAsyncMode = j, je.isConcurrentMode = C, je.isContextConsumer = R, je.isContextProvider = H, je.isElement = re, je.isForwardRef = X, je.isFragment = ye, je.isLazy = ue, je.isMemo = le, je.isPortal = pe, je.isProfiler = Ce, je.isStrictMode = _e, je.isSuspense = dt, je.isValidElementType = g, je.typeOf = x;
  }()), je;
}
var jp;
function o0() {
  return jp || (jp = 1, process.env.NODE_ENV === "production" ? Vs.exports = nC() : Vs.exports = iC()), Vs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bl, Vp;
function aC() {
  if (Vp)
    return bl;
  Vp = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var u = Object.getOwnPropertyNames(s).map(function(c) {
        return s[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bl = i() ? Object.assign : function(a, s) {
    for (var o, u = n(a), l, c = 1; c < arguments.length; c++) {
      o = Object(arguments[c]);
      for (var f in o)
        e.call(o, f) && (u[f] = o[f]);
      if (t) {
        l = t(o);
        for (var h = 0; h < l.length; h++)
          r.call(o, l[h]) && (u[l[h]] = o[l[h]]);
      }
    }
    return u;
  }, bl;
}
var wl, zp;
function ed() {
  if (zp)
    return wl;
  zp = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wl = t, wl;
}
var El, Wp;
function u0() {
  return Wp || (Wp = 1, El = Function.call.bind(Object.prototype.hasOwnProperty)), El;
}
var xl, qp;
function sC() {
  if (qp)
    return xl;
  qp = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = ed(), r = {}, n = u0();
    t = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, o, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (n(a, c)) {
          var f;
          try {
            if (typeof a[c] != "function") {
              var h = Error(
                (u || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = a[c](s, c, u, o, null, e);
          } catch (p) {
            f = p;
          }
          if (f && !(f instanceof Error) && t(
            (u || "React class") + ": type specification of " + o + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var d = l ? l() : "";
            t(
              "Failed " + o + " type: " + f.message + (d ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, xl = i, xl;
}
var kl, Up;
function oC() {
  if (Up)
    return kl;
  Up = 1;
  var t = o0(), e = aC(), r = ed(), n = u0(), i = sC(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(o) {
    var u = "Warning: " + o;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return kl = function(o, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(C) {
      var R = C && (l && C[l] || C[c]);
      if (typeof R == "function")
        return R;
    }
    var h = "<<anonymous>>", d = {
      array: v("array"),
      bigint: v("bigint"),
      bool: v("boolean"),
      func: v("function"),
      number: v("number"),
      object: v("object"),
      string: v("string"),
      symbol: v("symbol"),
      any: b(),
      arrayOf: g,
      element: x(),
      elementType: w(),
      instanceOf: S,
      node: F(),
      objectOf: O,
      oneOf: A,
      oneOfType: N,
      shape: M,
      exact: P
    };
    function p(C, R) {
      return C === R ? C !== 0 || 1 / C === 1 / R : C !== C && R !== R;
    }
    function m(C, R) {
      this.message = C, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(C) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, H = 0;
      function re(ye, ue, le, pe, Ce, _e, dt) {
        if (pe = pe || h, _e = _e || le, dt !== r) {
          if (u) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _t = pe + ":" + le;
            !R[_t] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + _e + "` prop on `" + pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[_t] = !0, H++);
          }
        }
        return ue[le] == null ? ye ? ue[le] === null ? new m("The " + Ce + " `" + _e + "` is marked as required " + ("in `" + pe + "`, but its value is `null`.")) : new m("The " + Ce + " `" + _e + "` is marked as required in " + ("`" + pe + "`, but its value is `undefined`.")) : null : C(ue, le, pe, Ce, _e);
      }
      var X = re.bind(null, !1);
      return X.isRequired = re.bind(null, !0), X;
    }
    function v(C) {
      function R(H, re, X, ye, ue, le) {
        var pe = H[re], Ce = z(pe);
        if (Ce !== C) {
          var _e = $(pe);
          return new m(
            "Invalid " + ye + " `" + ue + "` of type " + ("`" + _e + "` supplied to `" + X + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return y(R);
    }
    function b() {
      return y(s);
    }
    function g(C) {
      function R(H, re, X, ye, ue) {
        if (typeof C != "function")
          return new m("Property `" + ue + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var le = H[re];
        if (!Array.isArray(le)) {
          var pe = z(le);
          return new m("Invalid " + ye + " `" + ue + "` of type " + ("`" + pe + "` supplied to `" + X + "`, expected an array."));
        }
        for (var Ce = 0; Ce < le.length; Ce++) {
          var _e = C(le, Ce, X, ye, ue + "[" + Ce + "]", r);
          if (_e instanceof Error)
            return _e;
        }
        return null;
      }
      return y(R);
    }
    function x() {
      function C(R, H, re, X, ye) {
        var ue = R[H];
        if (!o(ue)) {
          var le = z(ue);
          return new m("Invalid " + X + " `" + ye + "` of type " + ("`" + le + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(C);
    }
    function w() {
      function C(R, H, re, X, ye) {
        var ue = R[H];
        if (!t.isValidElementType(ue)) {
          var le = z(ue);
          return new m("Invalid " + X + " `" + ye + "` of type " + ("`" + le + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(C);
    }
    function S(C) {
      function R(H, re, X, ye, ue) {
        if (!(H[re] instanceof C)) {
          var le = C.name || h, pe = j(H[re]);
          return new m("Invalid " + ye + " `" + ue + "` of type " + ("`" + pe + "` supplied to `" + X + "`, expected ") + ("instance of `" + le + "`."));
        }
        return null;
      }
      return y(R);
    }
    function A(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function R(H, re, X, ye, ue) {
        for (var le = H[re], pe = 0; pe < C.length; pe++)
          if (p(le, C[pe]))
            return null;
        var Ce = JSON.stringify(C, function(dt, G) {
          var _t = $(G);
          return _t === "symbol" ? String(G) : G;
        });
        return new m("Invalid " + ye + " `" + ue + "` of value `" + String(le) + "` " + ("supplied to `" + X + "`, expected one of " + Ce + "."));
      }
      return y(R);
    }
    function O(C) {
      function R(H, re, X, ye, ue) {
        if (typeof C != "function")
          return new m("Property `" + ue + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var le = H[re], pe = z(le);
        if (pe !== "object")
          return new m("Invalid " + ye + " `" + ue + "` of type " + ("`" + pe + "` supplied to `" + X + "`, expected an object."));
        for (var Ce in le)
          if (n(le, Ce)) {
            var _e = C(le, Ce, X, ye, ue + "." + Ce, r);
            if (_e instanceof Error)
              return _e;
          }
        return null;
      }
      return y(R);
    }
    function N(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var R = 0; R < C.length; R++) {
        var H = C[R];
        if (typeof H != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(H) + " at index " + R + "."
          ), s;
      }
      function re(X, ye, ue, le, pe) {
        for (var Ce = [], _e = 0; _e < C.length; _e++) {
          var dt = C[_e], G = dt(X, ye, ue, le, pe, r);
          if (G == null)
            return null;
          G.data && n(G.data, "expectedType") && Ce.push(G.data.expectedType);
        }
        var _t = Ce.length > 0 ? ", expected one of type [" + Ce.join(", ") + "]" : "";
        return new m("Invalid " + le + " `" + pe + "` supplied to " + ("`" + ue + "`" + _t + "."));
      }
      return y(re);
    }
    function F() {
      function C(R, H, re, X, ye) {
        return B(R[H]) ? null : new m("Invalid " + X + " `" + ye + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return y(C);
    }
    function Q(C, R, H, re, X) {
      return new m(
        (C || "React class") + ": " + R + " type `" + H + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function M(C) {
      function R(H, re, X, ye, ue) {
        var le = H[re], pe = z(le);
        if (pe !== "object")
          return new m("Invalid " + ye + " `" + ue + "` of type `" + pe + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var Ce in C) {
          var _e = C[Ce];
          if (typeof _e != "function")
            return Q(X, ye, ue, Ce, $(_e));
          var dt = _e(le, Ce, X, ye, ue + "." + Ce, r);
          if (dt)
            return dt;
        }
        return null;
      }
      return y(R);
    }
    function P(C) {
      function R(H, re, X, ye, ue) {
        var le = H[re], pe = z(le);
        if (pe !== "object")
          return new m("Invalid " + ye + " `" + ue + "` of type `" + pe + "` " + ("supplied to `" + X + "`, expected `object`."));
        var Ce = e({}, H[re], C);
        for (var _e in Ce) {
          var dt = C[_e];
          if (n(C, _e) && typeof dt != "function")
            return Q(X, ye, ue, _e, $(dt));
          if (!dt)
            return new m(
              "Invalid " + ye + " `" + ue + "` key `" + _e + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(H[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var G = dt(le, _e, X, ye, ue + "." + _e, r);
          if (G)
            return G;
        }
        return null;
      }
      return y(R);
    }
    function B(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(B);
          if (C === null || o(C))
            return !0;
          var R = f(C);
          if (R) {
            var H = R.call(C), re;
            if (R !== C.entries) {
              for (; !(re = H.next()).done; )
                if (!B(re.value))
                  return !1;
            } else
              for (; !(re = H.next()).done; ) {
                var X = re.value;
                if (X && !B(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(C, R) {
      return C === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function z(C) {
      var R = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : q(R, C) ? "symbol" : R;
    }
    function $(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var R = z(C);
      if (R === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function ve(C) {
      var R = $(C);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function j(C) {
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return d.checkPropTypes = i, d.resetWarningCache = i.resetWarningCache, d.PropTypes = d, d;
  }, kl;
}
var Tl, Bp;
function uC() {
  if (Bp)
    return Tl;
  Bp = 1;
  var t = ed();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Tl = function() {
    function n(s, o, u, l, c, f) {
      if (f !== t) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Tl;
}
if (process.env.NODE_ENV !== "production") {
  var lC = o0(), cC = !0;
  Mc.exports = oC()(lC.isElement, cC);
} else
  Mc.exports = uC()();
var fC = Mc.exports;
const Se = /* @__PURE__ */ Lm(fC);
function Hp(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hp(Object(r), !0).forEach(function(n) {
      di(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Oo(t) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oo(t);
}
function di(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function dC(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function hC(t, e) {
  if (t == null)
    return {};
  var r = dC(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Fc(t) {
  return pC(t) || mC(t) || vC(t) || yC();
}
function pC(t) {
  if (Array.isArray(t))
    return Lc(t);
}
function mC(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function vC(t, e) {
  if (t) {
    if (typeof t == "string")
      return Lc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Lc(t, e);
  }
}
function Lc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function yC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gC(t) {
  var e, r = t.beat, n = t.fade, i = t.beatFade, a = t.bounce, s = t.shake, o = t.flash, u = t.spin, l = t.spinPulse, c = t.spinReverse, f = t.pulse, h = t.fixedWidth, d = t.inverse, p = t.border, m = t.listItem, y = t.flip, v = t.size, b = t.rotation, g = t.pull, x = (e = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": s,
    "fa-flash": o,
    "fa-spin": u,
    "fa-spin-reverse": c,
    "fa-spin-pulse": l,
    "fa-pulse": f,
    "fa-fw": h,
    "fa-inverse": d,
    "fa-border": p,
    "fa-li": m,
    "fa-flip": y === !0,
    "fa-flip-horizontal": y === "horizontal" || y === "both",
    "fa-flip-vertical": y === "vertical" || y === "both"
  }, di(e, "fa-".concat(v), typeof v < "u" && v !== null), di(e, "fa-rotate-".concat(b), typeof b < "u" && b !== null && b !== 0), di(e, "fa-pull-".concat(g), typeof g < "u" && g !== null), di(e, "fa-swap-opacity", t.swapOpacity), e);
  return Object.keys(x).map(function(w) {
    return x[w] ? w : null;
  }).filter(function(w) {
    return w;
  });
}
function bC(t) {
  return t = t - 0, t === t;
}
function l0(t) {
  return bC(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  }), t.substr(0, 1).toLowerCase() + t.substr(1));
}
var wC = ["style"];
function EC(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function xC(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = l0(r.slice(0, n)), a = r.slice(n + 1).trim();
    return i.startsWith("webkit") ? e[EC(i)] = a : e[i] = a, e;
  }, {});
}
function c0(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(u) {
    return c0(t, u);
  }), i = Object.keys(e.attributes || {}).reduce(function(u, l) {
    var c = e.attributes[l];
    switch (l) {
      case "class":
        u.attrs.className = c, delete e.attributes.class;
        break;
      case "style":
        u.attrs.style = xC(c);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? u.attrs[l.toLowerCase()] = c : u.attrs[l0(l)] = c;
    }
    return u;
  }, {
    attrs: {}
  }), a = r.style, s = a === void 0 ? {} : a, o = hC(r, wC);
  return i.attrs.style = nn(nn({}, i.attrs.style), s), t.apply(void 0, [e.tag, nn(nn({}, i.attrs), o)].concat(Fc(n)));
}
var f0 = !1;
try {
  f0 = process.env.NODE_ENV === "production";
} catch {
}
function kC() {
  if (!f0 && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Yp(t) {
  if (t && Oo(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (ql.icon)
    return ql.icon(t);
  if (t === null)
    return null;
  if (t && Oo(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
function _l(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? di({}, t, e) : {};
}
var os = /* @__PURE__ */ U.forwardRef(function(t, e) {
  var r = t.icon, n = t.mask, i = t.symbol, a = t.className, s = t.title, o = t.titleId, u = t.maskId, l = Yp(r), c = _l("classes", [].concat(Fc(gC(t)), Fc(a.split(" ")))), f = _l("transform", typeof t.transform == "string" ? ql.transform(t.transform) : t.transform), h = _l("mask", Yp(n)), d = I1(l, nn(nn(nn(nn({}, c), f), h), {}, {
    symbol: i,
    title: s,
    titleId: o,
    maskId: u
  }));
  if (!d)
    return kC("Could not find icon", l), null;
  var p = d.abstract, m = {
    ref: e
  };
  return Object.keys(t).forEach(function(y) {
    os.defaultProps.hasOwnProperty(y) || (m[y] = t[y]);
  }), TC(p[0], m);
});
os.displayName = "FontAwesomeIcon";
os.propTypes = {
  beat: Se.bool,
  border: Se.bool,
  beatFade: Se.bool,
  bounce: Se.bool,
  className: Se.string,
  fade: Se.bool,
  flash: Se.bool,
  mask: Se.oneOfType([Se.object, Se.array, Se.string]),
  maskId: Se.string,
  fixedWidth: Se.bool,
  inverse: Se.bool,
  flip: Se.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Se.oneOfType([Se.object, Se.array, Se.string]),
  listItem: Se.bool,
  pull: Se.oneOf(["right", "left"]),
  pulse: Se.bool,
  rotation: Se.oneOf([0, 90, 180, 270]),
  shake: Se.bool,
  size: Se.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Se.bool,
  spinPulse: Se.bool,
  spinReverse: Se.bool,
  symbol: Se.oneOfType([Se.bool, Se.string]),
  title: Se.string,
  titleId: Se.string,
  transform: Se.oneOfType([Se.string, Se.object]),
  swapOpacity: Se.bool
};
os.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var TC = c0.bind(null, U.createElement);
const Di = Yc(function({ name: e, family: r = "classic", style: n = "solid", ...i }, a) {
  const s = `fa-${e} fa-${r} fa-${n}`, { onClick: o } = i;
  return /* @__PURE__ */ te.jsx(os, { icon: s, className: o ? "sfs-cursor-pointer" : "", ref: a, ...i });
}), d0 = xt({
  currentScreen: null
});
function td() {
  const t = ft(d0);
  if (!t)
    throw new Error("useMiniApp must be used within a MiniAppProvider");
  return t;
}
function _C({ children: t }) {
  const [e, r] = Je(null), n = () => r(null);
  return /* @__PURE__ */ te.jsx(d0.Provider, { value: { currentScreen: e, setCurrentScreen: r, goHome: n }, children: t });
}
function SC({ title: t, icon: e, noBack: r }) {
  const { goHome: n } = td();
  return /* @__PURE__ */ te.jsxs("header", { className: "sfs-w-full sfs-box-border sfs-flex sfs-flex-row sfs-items-center", children: [
    !r && /* @__PURE__ */ te.jsx("div", { onClick: n, className: "sfs-h-10 sfs-px-4 sfs-flex sfs-flex-row sfs-items-center sfs-cursor-pointer hover:sfs-bg-gray-200 sfs-transition sfs-duration-200", children: /* @__PURE__ */ te.jsx(Di, { icon: "chevron-left" }) }),
    /* @__PURE__ */ te.jsxs("div", { className: "sfs-flex sfs-flex-grow sfs-justify-center sfs-gap-1 sfs-py-3 sfs-text-gray-800", children: [
      /* @__PURE__ */ te.jsx(Di, { icon: e }),
      /* @__PURE__ */ te.jsx("p", { className: "sfs-m-0 sfs-font-semibold", children: t })
    ] })
  ] });
}
function h0({ title: t, icon: e, noBack: r, children: n }) {
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsx(SC, { title: t, icon: e, noBack: r }),
    /* @__PURE__ */ te.jsx("main", { className: "sfs-box-border sfs-h-full sfs-grow sfs-w-full sfs-overflow-y-auto", children: n })
  ] });
}
function OC({ title: t, icon: e, children: r }) {
  const { setCurrentScreen: n } = td();
  return /* @__PURE__ */ te.jsx(h0, { title: t, icon: e, noBack: !0, children: /* @__PURE__ */ te.jsx("div", { className: "sfs-w-full sfs-h-full sfs-box-border sfs-flex sfs-flex-col sfs-gap-2 sfs-px-2", children: r.map((i, a) => /* @__PURE__ */ te.jsxs(
    "div",
    {
      onClick: () => n(i),
      className: "sfs-flex sfs-flex-row sfs-items-center sfs-gap-2 sfs-p-3 sfs-text-md sfs-bg-gray-200 sfs-rounded-md sfs-cursor-pointer sfs-transition sfs-duration-200 hover:sfs-bg-gray-300",
      children: [
        /* @__PURE__ */ te.jsx(Di, { icon: i.props.icon, className: "sfs-w-4" }),
        /* @__PURE__ */ te.jsx("p", { className: "sfs-m-0", children: i.props.title })
      ]
    },
    a
  )) }) });
}
function CC({ title: t, icon: e, children: r }) {
  const { currentScreen: n } = td();
  return /* @__PURE__ */ te.jsx("div", { className: "sfs-w-full sfs-h-full sfs-flex sfs-flex-col sfs-pb-2 sfs-box-border sfs-text-gray-800 sfs-bg-white", children: n || /* @__PURE__ */ te.jsx(OC, { title: t, icon: e, children: r }) });
}
function IC({ title: t, icon: e, children: r }) {
  return /* @__PURE__ */ te.jsx(_C, { children: /* @__PURE__ */ te.jsx(CC, { title: t, icon: e, children: r }) });
}
var us = (t) => t.type === "checkbox", hi = (t) => t instanceof Date, Ot = (t) => t == null;
const p0 = (t) => typeof t == "object";
var gt = (t) => !Ot(t) && !Array.isArray(t) && p0(t) && !hi(t), AC = (t) => gt(t) && t.target ? us(t.target) ? t.target.checked : t.target.value : t, NC = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, DC = (t, e) => t.has(NC(e)), RC = (t) => {
  const e = t.constructor && t.constructor.prototype;
  return gt(e) && e.hasOwnProperty("isPrototypeOf");
}, rd = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Bt(t) {
  let e;
  const r = Array.isArray(t);
  if (t instanceof Date)
    e = new Date(t);
  else if (t instanceof Set)
    e = new Set(t);
  else if (!(rd && (t instanceof Blob || t instanceof FileList)) && (r || gt(t)))
    if (e = r ? [] : {}, !r && !RC(t))
      e = t;
    else
      for (const n in t)
        t.hasOwnProperty(n) && (e[n] = Bt(t[n]));
  else
    return t;
  return e;
}
var ls = (t) => Array.isArray(t) ? t.filter(Boolean) : [], ot = (t) => t === void 0, ae = (t, e, r) => {
  if (!e || !gt(t))
    return r;
  const n = ls(e.split(/[,[\].]+?/)).reduce((i, a) => Ot(i) ? i : i[a], t);
  return ot(n) || n === t ? ot(t[e]) ? r : t[e] : n;
}, Tr = (t) => typeof t == "boolean";
const Qp = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, nr = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, xr = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
U.createContext(null);
var PC = (t, e, r, n = !0) => {
  const i = {
    defaultValues: e._defaultValues
  };
  for (const a in t)
    Object.defineProperty(i, a, {
      get: () => {
        const s = a;
        return e._proxyFormState[s] !== nr.all && (e._proxyFormState[s] = !n || nr.all), t[s];
      }
    });
  return i;
}, Lt = (t) => gt(t) && !Object.keys(t).length, MC = (t, e, r, n) => {
  r(t);
  const { name: i, ...a } = t;
  return Lt(a) || Object.keys(a).length >= Object.keys(e).length || Object.keys(a).find((s) => e[s] === nr.all);
}, Sl = (t) => Array.isArray(t) ? t : [t];
function FC(t) {
  const e = U.useRef(t);
  e.current = t, U.useEffect(() => {
    const r = !t.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [t.disabled]);
}
var pr = (t) => typeof t == "string", LC = (t, e, r, n, i) => pr(t) ? (n && e.watch.add(t), ae(r, t, i)) : Array.isArray(t) ? t.map((a) => (n && e.watch.add(a), ae(r, a))) : (n && (e.watchAll = !0), r), nd = (t) => /^\w*$/.test(t), m0 = (t) => ls(t.replace(/["|']|\]/g, "").split(/\.|\[/)), Qe = (t, e, r) => {
  let n = -1;
  const i = nd(e) ? [e] : m0(e), a = i.length, s = a - 1;
  for (; ++n < a; ) {
    const o = i[n];
    let u = r;
    if (n !== s) {
      const l = t[o];
      u = gt(l) || Array.isArray(l) ? l : isNaN(+i[n + 1]) ? {} : [];
    }
    t[o] = u, t = t[o];
  }
  return t;
}, v0 = (t, e, r, n, i) => e ? {
  ...r[t],
  types: {
    ...r[t] && r[t].types ? r[t].types : {},
    [n]: i || !0
  }
} : {}, Zp = (t) => ({
  isOnSubmit: !t || t === nr.onSubmit,
  isOnBlur: t === nr.onBlur,
  isOnChange: t === nr.onChange,
  isOnAll: t === nr.all,
  isOnTouch: t === nr.onTouched
}), Gp = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((n) => t.startsWith(n) && /^\.\w+/.test(t.slice(n.length))));
const ga = (t, e, r, n) => {
  for (const i of r || Object.keys(t)) {
    const a = ae(t, i);
    if (a) {
      const { _f: s, ...o } = a;
      if (s) {
        if (s.refs && s.refs[0] && e(s.refs[0], i) && !n)
          break;
        if (s.ref && e(s.ref, s.name) && !n)
          break;
        ga(o, e);
      } else
        gt(o) && ga(o, e);
    }
  }
};
var $C = (t, e, r) => {
  const n = ls(ae(t, r));
  return Qe(n, "root", e[r]), Qe(t, r, n), t;
}, id = (t) => t.type === "file", an = (t) => typeof t == "function", Co = (t) => {
  if (!rd)
    return !1;
  const e = t ? t.ownerDocument : 0;
  return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, ro = (t) => pr(t), ad = (t) => t.type === "radio", Io = (t) => t instanceof RegExp;
const Jp = {
  value: !1,
  isValid: !1
}, Kp = { value: !0, isValid: !0 };
var y0 = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !ot(t[0].attributes.value) ? ot(t[0].value) || t[0].value === "" ? Kp : { value: t[0].value, isValid: !0 } : Kp
    ) : Jp;
  }
  return Jp;
};
const Xp = {
  isValid: !1,
  value: null
};
var g0 = (t) => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, Xp) : Xp;
function em(t, e, r = "validate") {
  if (ro(t) || Array.isArray(t) && t.every(ro) || Tr(t) && !t)
    return {
      type: r,
      message: ro(t) ? t : "",
      ref: e
    };
}
var ti = (t) => gt(t) && !Io(t) ? t : {
  value: t,
  message: ""
}, tm = async (t, e, r, n, i) => {
  const { ref: a, refs: s, required: o, maxLength: u, minLength: l, min: c, max: f, pattern: h, validate: d, name: p, valueAsNumber: m, mount: y, disabled: v } = t._f, b = ae(e, p);
  if (!y || v)
    return {};
  const g = s ? s[0] : a, x = (M) => {
    n && g.reportValidity && (g.setCustomValidity(Tr(M) ? "" : M || ""), g.reportValidity());
  }, w = {}, S = ad(a), A = us(a), O = S || A, N = (m || id(a)) && ot(a.value) && ot(b) || Co(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, F = v0.bind(null, p, r, w), Q = (M, P, B, q = xr.maxLength, z = xr.minLength) => {
    const $ = M ? P : B;
    w[p] = {
      type: M ? q : z,
      message: $,
      ref: a,
      ...F(M ? q : z, $)
    };
  };
  if (i ? !Array.isArray(b) || !b.length : o && (!O && (N || Ot(b)) || Tr(b) && !b || A && !y0(s).isValid || S && !g0(s).isValid)) {
    const { value: M, message: P } = ro(o) ? { value: !!o, message: o } : ti(o);
    if (M && (w[p] = {
      type: xr.required,
      message: P,
      ref: g,
      ...F(xr.required, P)
    }, !r))
      return x(P), w;
  }
  if (!N && (!Ot(c) || !Ot(f))) {
    let M, P;
    const B = ti(f), q = ti(c);
    if (!Ot(b) && !isNaN(b)) {
      const z = a.valueAsNumber || b && +b;
      Ot(B.value) || (M = z > B.value), Ot(q.value) || (P = z < q.value);
    } else {
      const z = a.valueAsDate || new Date(b), $ = (C) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + C), ve = a.type == "time", j = a.type == "week";
      pr(B.value) && b && (M = ve ? $(b) > $(B.value) : j ? b > B.value : z > new Date(B.value)), pr(q.value) && b && (P = ve ? $(b) < $(q.value) : j ? b < q.value : z < new Date(q.value));
    }
    if ((M || P) && (Q(!!M, B.message, q.message, xr.max, xr.min), !r))
      return x(w[p].message), w;
  }
  if ((u || l) && !N && (pr(b) || i && Array.isArray(b))) {
    const M = ti(u), P = ti(l), B = !Ot(M.value) && b.length > +M.value, q = !Ot(P.value) && b.length < +P.value;
    if ((B || q) && (Q(B, M.message, P.message), !r))
      return x(w[p].message), w;
  }
  if (h && !N && pr(b)) {
    const { value: M, message: P } = ti(h);
    if (Io(M) && !b.match(M) && (w[p] = {
      type: xr.pattern,
      message: P,
      ref: a,
      ...F(xr.pattern, P)
    }, !r))
      return x(P), w;
  }
  if (d) {
    if (an(d)) {
      const M = await d(b, e), P = em(M, g);
      if (P && (w[p] = {
        ...P,
        ...F(xr.validate, P.message)
      }, !r))
        return x(P.message), w;
    } else if (gt(d)) {
      let M = {};
      for (const P in d) {
        if (!Lt(M) && !r)
          break;
        const B = em(await d[P](b, e), g, P);
        B && (M = {
          ...B,
          ...F(P, B.message)
        }, x(B.message), r && (w[p] = M));
      }
      if (!Lt(M) && (w[p] = {
        ref: g,
        ...M
      }, !r))
        return w;
    }
  }
  return x(!0), w;
};
function jC(t, e) {
  const r = e.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    t = ot(t) ? n++ : t[e[n++]];
  return t;
}
function VC(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !ot(t[e]))
      return !1;
  return !0;
}
function pt(t, e) {
  const r = Array.isArray(e) ? e : nd(e) ? [e] : m0(e), n = r.length === 1 ? t : jC(t, r), i = r.length - 1, a = r[i];
  return n && delete n[a], i !== 0 && (gt(n) && Lt(n) || Array.isArray(n) && VC(n)) && pt(t, r.slice(0, -1)), t;
}
var Ol = () => {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (i) => {
      for (const a of t)
        a.next && a.next(i);
    },
    subscribe: (i) => (t.push(i), {
      unsubscribe: () => {
        t = t.filter((a) => a !== i);
      }
    }),
    unsubscribe: () => {
      t = [];
    }
  };
}, Ao = (t) => Ot(t) || !p0(t);
function Pn(t, e) {
  if (Ao(t) || Ao(e))
    return t === e;
  if (hi(t) && hi(e))
    return t.getTime() === e.getTime();
  const r = Object.keys(t), n = Object.keys(e);
  if (r.length !== n.length)
    return !1;
  for (const i of r) {
    const a = t[i];
    if (!n.includes(i))
      return !1;
    if (i !== "ref") {
      const s = e[i];
      if (hi(a) && hi(s) || gt(a) && gt(s) || Array.isArray(a) && Array.isArray(s) ? !Pn(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var b0 = (t) => t.type === "select-multiple", zC = (t) => ad(t) || us(t), Cl = (t) => Co(t) && t.isConnected, w0 = (t) => {
  for (const e in t)
    if (an(t[e]))
      return !0;
  return !1;
};
function No(t, e = {}) {
  const r = Array.isArray(t);
  if (gt(t) || r)
    for (const n in t)
      Array.isArray(t[n]) || gt(t[n]) && !w0(t[n]) ? (e[n] = Array.isArray(t[n]) ? [] : {}, No(t[n], e[n])) : Ot(t[n]) || (e[n] = !0);
  return e;
}
function E0(t, e, r) {
  const n = Array.isArray(t);
  if (gt(t) || n)
    for (const i in t)
      Array.isArray(t[i]) || gt(t[i]) && !w0(t[i]) ? ot(e) || Ao(r[i]) ? r[i] = Array.isArray(t[i]) ? No(t[i], []) : { ...No(t[i]) } : E0(t[i], Ot(e) ? {} : e[i], r[i]) : r[i] = !Pn(t[i], e[i]);
  return r;
}
var zs = (t, e) => E0(t, e, No(e)), x0 = (t, { valueAsNumber: e, valueAsDate: r, setValueAs: n }) => ot(t) ? t : e ? t === "" ? NaN : t && +t : r && pr(t) ? new Date(t) : n ? n(t) : t;
function Il(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((r) => r.disabled) : e.disabled))
    return id(e) ? e.files : ad(e) ? g0(t.refs).value : b0(e) ? [...e.selectedOptions].map(({ value: r }) => r) : us(e) ? y0(t.refs).value : x0(ot(e.value) ? t.ref.value : e.value, t);
}
var WC = (t, e, r, n) => {
  const i = {};
  for (const a of t) {
    const s = ae(e, a);
    s && Qe(i, a, s._f);
  }
  return {
    criteriaMode: r,
    names: [...t],
    fields: i,
    shouldUseNativeValidation: n
  };
}, ta = (t) => ot(t) ? t : Io(t) ? t.source : gt(t) ? Io(t.value) ? t.value.source : t.value : t, qC = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function rm(t, e, r) {
  const n = ae(t, r);
  if (n || nd(r))
    return {
      error: n,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const a = i.join("."), s = ae(e, a), o = ae(t, a);
    if (s && !Array.isArray(s) && r !== a)
      return { name: r };
    if (o && o.type)
      return {
        name: a,
        error: o
      };
    i.pop();
  }
  return {
    name: r
  };
}
var UC = (t, e, r, n, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(e || t) : (r ? n.isOnBlur : i.isOnBlur) ? !t : (r ? n.isOnChange : i.isOnChange) ? t : !0, BC = (t, e) => !ls(ae(t, e)).length && pt(t, e);
const HC = {
  mode: nr.onSubmit,
  reValidateMode: nr.onChange,
  shouldFocusError: !0
};
function YC(t = {}) {
  let e = {
    ...HC,
    ...t
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: an(e.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1
  }, n = {}, i = gt(e.defaultValues) || gt(e.values) ? Bt(e.defaultValues || e.values) || {} : {}, a = e.shouldUnregister ? {} : Bt(i), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, u, l = 0;
  const c = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: Ol(),
    array: Ol(),
    state: Ol()
  }, h = Zp(e.mode), d = Zp(e.reValidateMode), p = e.criteriaMode === nr.all, m = (k) => (_) => {
    clearTimeout(l), l = setTimeout(k, _);
  }, y = async (k) => {
    if (c.isValid || k) {
      const _ = e.resolver ? Lt((await O()).errors) : await F(n, !0);
      _ !== r.isValid && f.state.next({
        isValid: _
      });
    }
  }, v = (k, _) => {
    (c.isValidating || c.validatingFields) && ((k || Array.from(o.mount)).forEach((I) => {
      I && (_ ? Qe(r.validatingFields, I, _) : pt(r.validatingFields, I));
    }), f.state.next({
      validatingFields: r.validatingFields,
      isValidating: !Lt(r.validatingFields)
    }));
  }, b = (k, _ = [], I, ee, Y = !0, W = !0) => {
    if (ee && I) {
      if (s.action = !0, W && Array.isArray(ae(n, k))) {
        const de = I(ae(n, k), ee.argA, ee.argB);
        Y && Qe(n, k, de);
      }
      if (W && Array.isArray(ae(r.errors, k))) {
        const de = I(ae(r.errors, k), ee.argA, ee.argB);
        Y && Qe(r.errors, k, de), BC(r.errors, k);
      }
      if (c.touchedFields && W && Array.isArray(ae(r.touchedFields, k))) {
        const de = I(ae(r.touchedFields, k), ee.argA, ee.argB);
        Y && Qe(r.touchedFields, k, de);
      }
      c.dirtyFields && (r.dirtyFields = zs(i, a)), f.state.next({
        name: k,
        isDirty: M(k, _),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Qe(a, k, _);
  }, g = (k, _) => {
    Qe(r.errors, k, _), f.state.next({
      errors: r.errors
    });
  }, x = (k) => {
    r.errors = k, f.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, w = (k, _, I, ee) => {
    const Y = ae(n, k);
    if (Y) {
      const W = ae(a, k, ot(I) ? ae(i, k) : I);
      ot(W) || ee && ee.defaultChecked || _ ? Qe(a, k, _ ? W : Il(Y._f)) : q(k, W), s.mount && y();
    }
  }, S = (k, _, I, ee, Y) => {
    let W = !1, de = !1;
    const Me = {
      name: k
    }, it = !!(ae(n, k) && ae(n, k)._f.disabled);
    if (!I || ee) {
      c.isDirty && (de = r.isDirty, r.isDirty = Me.isDirty = M(), W = de !== Me.isDirty);
      const ht = it || Pn(ae(i, k), _);
      de = !!(!it && ae(r.dirtyFields, k)), ht || it ? pt(r.dirtyFields, k) : Qe(r.dirtyFields, k, !0), Me.dirtyFields = r.dirtyFields, W = W || c.dirtyFields && de !== !ht;
    }
    if (I) {
      const ht = ae(r.touchedFields, k);
      ht || (Qe(r.touchedFields, k, I), Me.touchedFields = r.touchedFields, W = W || c.touchedFields && ht !== I);
    }
    return W && Y && f.state.next(Me), W ? Me : {};
  }, A = (k, _, I, ee) => {
    const Y = ae(r.errors, k), W = c.isValid && Tr(_) && r.isValid !== _;
    if (t.delayError && I ? (u = m(() => g(k, I)), u(t.delayError)) : (clearTimeout(l), u = null, I ? Qe(r.errors, k, I) : pt(r.errors, k)), (I ? !Pn(Y, I) : Y) || !Lt(ee) || W) {
      const de = {
        ...ee,
        ...W && Tr(_) ? { isValid: _ } : {},
        errors: r.errors,
        name: k
      };
      r = {
        ...r,
        ...de
      }, f.state.next(de);
    }
  }, O = async (k) => {
    v(k, !0);
    const _ = await e.resolver(a, e.context, WC(k || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return v(k), _;
  }, N = async (k) => {
    const { errors: _ } = await O(k);
    if (k)
      for (const I of k) {
        const ee = ae(_, I);
        ee ? Qe(r.errors, I, ee) : pt(r.errors, I);
      }
    else
      r.errors = _;
    return _;
  }, F = async (k, _, I = {
    valid: !0
  }) => {
    for (const ee in k) {
      const Y = k[ee];
      if (Y) {
        const { _f: W, ...de } = Y;
        if (W) {
          const Me = o.array.has(W.name);
          v([ee], !0);
          const it = await tm(Y, a, p, e.shouldUseNativeValidation && !_, Me);
          if (v([ee]), it[W.name] && (I.valid = !1, _))
            break;
          !_ && (ae(it, W.name) ? Me ? $C(r.errors, it, W.name) : Qe(r.errors, W.name, it[W.name]) : pt(r.errors, W.name));
        }
        de && await F(de, _, I);
      }
    }
    return I.valid;
  }, Q = () => {
    for (const k of o.unMount) {
      const _ = ae(n, k);
      _ && (_._f.refs ? _._f.refs.every((I) => !Cl(I)) : !Cl(_._f.ref)) && ue(k);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, M = (k, _) => (k && _ && Qe(a, k, _), !Pn(R(), i)), P = (k, _, I) => LC(k, o, {
    ...s.mount ? a : ot(_) ? i : pr(k) ? { [k]: _ } : _
  }, I, _), B = (k) => ls(ae(s.mount ? a : i, k, t.shouldUnregister ? ae(i, k, []) : [])), q = (k, _, I = {}) => {
    const ee = ae(n, k);
    let Y = _;
    if (ee) {
      const W = ee._f;
      W && (!W.disabled && Qe(a, k, x0(_, W)), Y = Co(W.ref) && Ot(_) ? "" : _, b0(W.ref) ? [...W.ref.options].forEach((de) => de.selected = Y.includes(de.value)) : W.refs ? us(W.ref) ? W.refs.length > 1 ? W.refs.forEach((de) => (!de.defaultChecked || !de.disabled) && (de.checked = Array.isArray(Y) ? !!Y.find((Me) => Me === de.value) : Y === de.value)) : W.refs[0] && (W.refs[0].checked = !!Y) : W.refs.forEach((de) => de.checked = de.value === Y) : id(W.ref) ? W.ref.value = "" : (W.ref.value = Y, W.ref.type || f.values.next({
        name: k,
        values: { ...a }
      })));
    }
    (I.shouldDirty || I.shouldTouch) && S(k, Y, I.shouldTouch, I.shouldDirty, !0), I.shouldValidate && C(k);
  }, z = (k, _, I) => {
    for (const ee in _) {
      const Y = _[ee], W = `${k}.${ee}`, de = ae(n, W);
      (o.array.has(k) || !Ao(Y) || de && !de._f) && !hi(Y) ? z(W, Y, I) : q(W, Y, I);
    }
  }, $ = (k, _, I = {}) => {
    const ee = ae(n, k), Y = o.array.has(k), W = Bt(_);
    Qe(a, k, W), Y ? (f.array.next({
      name: k,
      values: { ...a }
    }), (c.isDirty || c.dirtyFields) && I.shouldDirty && f.state.next({
      name: k,
      dirtyFields: zs(i, a),
      isDirty: M(k, W)
    })) : ee && !ee._f && !Ot(W) ? z(k, W, I) : q(k, W, I), Gp(k, o) && f.state.next({ ...r }), f.values.next({
      name: s.mount ? k : void 0,
      values: { ...a }
    });
  }, ve = async (k) => {
    s.mount = !0;
    const _ = k.target;
    let I = _.name, ee = !0;
    const Y = ae(n, I), W = () => _.type ? Il(Y._f) : AC(k), de = (Me) => {
      ee = Number.isNaN(Me) || Me === ae(a, I, Me);
    };
    if (Y) {
      let Me, it;
      const ht = W(), Wr = k.type === Qp.BLUR || k.type === Qp.FOCUS_OUT, cs = !qC(Y._f) && !e.resolver && !ae(r.errors, I) && !Y._f.deps || UC(Wr, ae(r.touchedFields, I), r.isSubmitted, d, h), Zn = Gp(I, o, Wr);
      Qe(a, I, ht), Wr ? (Y._f.onBlur && Y._f.onBlur(k), u && u(0)) : Y._f.onChange && Y._f.onChange(k);
      const bn = S(I, ht, Wr, !1), Cu = !Lt(bn) || Zn;
      if (!Wr && f.values.next({
        name: I,
        type: k.type,
        values: { ...a }
      }), cs)
        return c.isValid && y(), Cu && f.state.next({ name: I, ...Zn ? {} : bn });
      if (!Wr && Zn && f.state.next({ ...r }), e.resolver) {
        const { errors: fs } = await O([I]);
        if (de(ht), ee) {
          const Iu = rm(r.errors, n, I), ds = rm(fs, n, Iu.name || I);
          Me = ds.error, I = ds.name, it = Lt(fs);
        }
      } else
        v([I], !0), Me = (await tm(Y, a, p, e.shouldUseNativeValidation))[I], v([I]), de(ht), ee && (Me ? it = !1 : c.isValid && (it = await F(n, !0)));
      ee && (Y._f.deps && C(Y._f.deps), A(I, it, Me, bn));
    }
  }, j = (k, _) => {
    if (ae(r.errors, _) && k.focus)
      return k.focus(), 1;
  }, C = async (k, _ = {}) => {
    let I, ee;
    const Y = Sl(k);
    if (e.resolver) {
      const W = await N(ot(k) ? k : Y);
      I = Lt(W), ee = k ? !Y.some((de) => ae(W, de)) : I;
    } else
      k ? (ee = (await Promise.all(Y.map(async (W) => {
        const de = ae(n, W);
        return await F(de && de._f ? { [W]: de } : de);
      }))).every(Boolean), !(!ee && !r.isValid) && y()) : ee = I = await F(n);
    return f.state.next({
      ...!pr(k) || c.isValid && I !== r.isValid ? {} : { name: k },
      ...e.resolver || !k ? { isValid: I } : {},
      errors: r.errors
    }), _.shouldFocus && !ee && ga(n, j, k ? Y : o.mount), ee;
  }, R = (k) => {
    const _ = {
      ...s.mount ? a : i
    };
    return ot(k) ? _ : pr(k) ? ae(_, k) : k.map((I) => ae(_, I));
  }, H = (k, _) => ({
    invalid: !!ae((_ || r).errors, k),
    isDirty: !!ae((_ || r).dirtyFields, k),
    isTouched: !!ae((_ || r).touchedFields, k),
    isValidating: !!ae((_ || r).validatingFields, k),
    error: ae((_ || r).errors, k)
  }), re = (k) => {
    k && Sl(k).forEach((_) => pt(r.errors, _)), f.state.next({
      errors: k ? r.errors : {}
    });
  }, X = (k, _, I) => {
    const ee = (ae(n, k, { _f: {} })._f || {}).ref;
    Qe(r.errors, k, {
      ..._,
      ref: ee
    }), f.state.next({
      name: k,
      errors: r.errors,
      isValid: !1
    }), I && I.shouldFocus && ee && ee.focus && ee.focus();
  }, ye = (k, _) => an(k) ? f.values.subscribe({
    next: (I) => k(P(void 0, _), I)
  }) : P(k, _, !0), ue = (k, _ = {}) => {
    for (const I of k ? Sl(k) : o.mount)
      o.mount.delete(I), o.array.delete(I), _.keepValue || (pt(n, I), pt(a, I)), !_.keepError && pt(r.errors, I), !_.keepDirty && pt(r.dirtyFields, I), !_.keepTouched && pt(r.touchedFields, I), !_.keepIsValidating && pt(r.validatingFields, I), !e.shouldUnregister && !_.keepDefaultValue && pt(i, I);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...r,
      ..._.keepDirty ? { isDirty: M() } : {}
    }), !_.keepIsValid && y();
  }, le = ({ disabled: k, name: _, field: I, fields: ee, value: Y }) => {
    if (Tr(k)) {
      const W = k ? void 0 : ot(Y) ? Il(I ? I._f : ae(ee, _)._f) : Y;
      Qe(a, _, W), S(_, W, !1, !1, !0);
    }
  }, pe = (k, _ = {}) => {
    let I = ae(n, k);
    const ee = Tr(_.disabled);
    return Qe(n, k, {
      ...I || {},
      _f: {
        ...I && I._f ? I._f : { ref: { name: k } },
        name: k,
        mount: !0,
        ..._
      }
    }), o.mount.add(k), I ? le({
      field: I,
      disabled: _.disabled,
      name: k,
      value: _.value
    }) : w(k, !0, _.value), {
      ...ee ? { disabled: _.disabled } : {},
      ...e.progressive ? {
        required: !!_.required,
        min: ta(_.min),
        max: ta(_.max),
        minLength: ta(_.minLength),
        maxLength: ta(_.maxLength),
        pattern: ta(_.pattern)
      } : {},
      name: k,
      onChange: ve,
      onBlur: ve,
      ref: (Y) => {
        if (Y) {
          pe(k, _), I = ae(n, k);
          const W = ot(Y.value) && Y.querySelectorAll && Y.querySelectorAll("input,select,textarea")[0] || Y, de = zC(W), Me = I._f.refs || [];
          if (de ? Me.find((it) => it === W) : W === I._f.ref)
            return;
          Qe(n, k, {
            _f: {
              ...I._f,
              ...de ? {
                refs: [
                  ...Me.filter(Cl),
                  W,
                  ...Array.isArray(ae(i, k)) ? [{}] : []
                ],
                ref: { type: W.type, name: k }
              } : { ref: W }
            }
          }), w(k, !1, void 0, W);
        } else
          I = ae(n, k, {}), I._f && (I._f.mount = !1), (e.shouldUnregister || _.shouldUnregister) && !(DC(o.array, k) && s.action) && o.unMount.add(k);
      }
    };
  }, Ce = () => e.shouldFocusError && ga(n, j, o.mount), _e = (k) => {
    Tr(k) && (f.state.next({ disabled: k }), ga(n, (_, I) => {
      let ee = k;
      const Y = ae(n, I);
      Y && Tr(Y._f.disabled) && (ee || (ee = Y._f.disabled)), _.disabled = ee;
    }, 0, !1));
  }, dt = (k, _) => async (I) => {
    let ee;
    I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
    let Y = Bt(a);
    if (f.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: W, values: de } = await O();
      r.errors = W, Y = de;
    } else
      await F(n);
    if (pt(r.errors, "root"), Lt(r.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await k(Y, I);
      } catch (W) {
        ee = W;
      }
    } else
      _ && await _({ ...r.errors }, I), Ce(), setTimeout(Ce);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Lt(r.errors) && !ee,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), ee)
      throw ee;
  }, G = (k, _ = {}) => {
    ae(n, k) && (ot(_.defaultValue) ? $(k, Bt(ae(i, k))) : ($(k, _.defaultValue), Qe(i, k, Bt(_.defaultValue))), _.keepTouched || pt(r.touchedFields, k), _.keepDirty || (pt(r.dirtyFields, k), r.isDirty = _.defaultValue ? M(k, Bt(ae(i, k))) : M()), _.keepError || (pt(r.errors, k), c.isValid && y()), f.state.next({ ...r }));
  }, _t = (k, _ = {}) => {
    const I = k ? Bt(k) : i, ee = Bt(I), Y = Lt(k), W = Y ? i : ee;
    if (_.keepDefaultValues || (i = I), !_.keepValues) {
      if (_.keepDirtyValues)
        for (const de of o.mount)
          ae(r.dirtyFields, de) ? Qe(W, de, ae(a, de)) : $(de, ae(W, de));
      else {
        if (rd && ot(k))
          for (const de of o.mount) {
            const Me = ae(n, de);
            if (Me && Me._f) {
              const it = Array.isArray(Me._f.refs) ? Me._f.refs[0] : Me._f.ref;
              if (Co(it)) {
                const ht = it.closest("form");
                if (ht) {
                  ht.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      a = t.shouldUnregister ? _.keepDefaultValues ? Bt(i) : {} : Bt(W), f.array.next({
        values: { ...W }
      }), f.values.next({
        values: { ...W }
      });
    }
    o = {
      mount: _.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !c.isValid || !!_.keepIsValid || !!_.keepDirtyValues, s.watch = !!t.shouldUnregister, f.state.next({
      submitCount: _.keepSubmitCount ? r.submitCount : 0,
      isDirty: Y ? !1 : _.keepDirty ? r.isDirty : !!(_.keepDefaultValues && !Pn(k, i)),
      isSubmitted: _.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: Y ? [] : _.keepDirtyValues ? _.keepDefaultValues && a ? zs(i, a) : r.dirtyFields : _.keepDefaultValues && k ? zs(i, k) : {},
      touchedFields: _.keepTouched ? r.touchedFields : {},
      errors: _.keepErrors ? r.errors : {},
      isSubmitSuccessful: _.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Er = (k, _) => _t(an(k) ? k(a) : k, _);
  return {
    control: {
      register: pe,
      unregister: ue,
      getFieldState: H,
      handleSubmit: dt,
      setError: X,
      _executeSchema: O,
      _getWatch: P,
      _getDirty: M,
      _updateValid: y,
      _removeUnmounted: Q,
      _updateFieldArray: b,
      _updateDisabledField: le,
      _getFieldArray: B,
      _reset: _t,
      _resetDefaultValues: () => an(e.defaultValues) && e.defaultValues().then((k) => {
        Er(k, e.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (k) => {
        r = {
          ...r,
          ...k
        };
      },
      _disableForm: _e,
      _subjects: f,
      _proxyFormState: c,
      _setErrors: x,
      get _fields() {
        return n;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(k) {
        s = k;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(k) {
        o = k;
      },
      get _formState() {
        return r;
      },
      set _formState(k) {
        r = k;
      },
      get _options() {
        return e;
      },
      set _options(k) {
        e = {
          ...e,
          ...k
        };
      }
    },
    trigger: C,
    register: pe,
    handleSubmit: dt,
    watch: ye,
    setValue: $,
    getValues: R,
    reset: Er,
    resetField: G,
    clearErrors: re,
    unregister: ue,
    setError: X,
    setFocus: (k, _ = {}) => {
      const I = ae(n, k), ee = I && I._f;
      if (ee) {
        const Y = ee.refs ? ee.refs[0] : ee.ref;
        Y.focus && (Y.focus(), _.shouldSelect && Y.select());
      }
    },
    getFieldState: H
  };
}
function QC(t = {}) {
  const e = U.useRef(), r = U.useRef(), [n, i] = U.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: an(t.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1,
    defaultValues: an(t.defaultValues) ? void 0 : t.defaultValues
  });
  e.current || (e.current = {
    ...YC(t),
    formState: n
  });
  const a = e.current.control;
  return a._options = t, FC({
    subject: a._subjects.state,
    next: (s) => {
      MC(s, a._proxyFormState, a._updateFormState) && i({ ...a._formState });
    }
  }), U.useEffect(() => a._disableForm(t.disabled), [a, t.disabled]), U.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== n.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, n.isDirty]), U.useEffect(() => {
    t.values && !Pn(t.values, r.current) ? (a._reset(t.values, a._options.resetOptions), r.current = t.values, i((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [t.values, a]), U.useEffect(() => {
    t.errors && a._setErrors(t.errors);
  }, [t.errors, a]), U.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), U.useEffect(() => {
    t.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [t.shouldUnregister, a]), e.current.formState = PC(n, a), e.current;
}
var nm = function(t, e, r) {
  if (t && "reportValidity" in t) {
    var n = ae(r, e);
    t.setCustomValidity(n && n.message || ""), t.reportValidity();
  }
}, k0 = function(t, e) {
  var r = function(i) {
    var a = e.fields[i];
    a && a.ref && "reportValidity" in a.ref ? nm(a.ref, i, t) : a.refs && a.refs.forEach(function(s) {
      return nm(s, i, t);
    });
  };
  for (var n in e.fields)
    r(n);
}, ZC = function(t) {
  return t instanceof Date;
}, GC = function(t) {
  return t == null;
}, JC = function(t) {
  return typeof t == "object";
}, KC = function(t) {
  return !GC(t) && !Array.isArray(t) && JC(t) && !ZC(t);
}, XC = function(t) {
  return /^\w*$/.test(t);
}, Al = function(t, e, r) {
  for (var n = -1, i = XC(e) ? [e] : function(c) {
    return f = c.replace(/["|']|\]/g, "").split(/\.|\[/), Array.isArray(f) ? f.filter(Boolean) : [];
    var f;
  }(e), a = i.length, s = a - 1; ++n < a; ) {
    var o = i[n], u = r;
    if (n !== s) {
      var l = t[o];
      u = KC(l) || Array.isArray(l) ? l : isNaN(+i[n + 1]) ? {} : [];
    }
    t[o] = u, t = t[o];
  }
  return t;
}, eI = function(t, e) {
  e.shouldUseNativeValidation && k0(t, e);
  var r = {};
  for (var n in t) {
    var i = ae(e.fields, n), a = Object.assign(t[n] || {}, { ref: i && i.ref });
    if (tI(e.names || Object.keys(t), n)) {
      var s = Object.assign({}, ae(r, n));
      Al(s, "root", a), Al(r, n, s);
    } else
      Al(r, n, a);
  }
  return r;
}, tI = function(t, e) {
  return t.some(function(r) {
    return r.startsWith(e + ".");
  });
}, rI = function(t, e) {
  for (var r = {}; t.length; ) {
    var n = t[0], i = n.code, a = n.message, s = n.path.join(".");
    if (!r[s])
      if ("unionErrors" in n) {
        var o = n.unionErrors[0].errors[0];
        r[s] = { message: o.message, type: o.code };
      } else
        r[s] = { message: a, type: i };
    if ("unionErrors" in n && n.unionErrors.forEach(function(c) {
      return c.errors.forEach(function(f) {
        return t.push(f);
      });
    }), e) {
      var u = r[s].types, l = u && u[n.code];
      r[s] = v0(s, e, r, i, l ? [].concat(l, n.message) : n.message);
    }
    t.shift();
  }
  return r;
}, nI = function(t, e, r) {
  return r === void 0 && (r = {}), function(n, i, a) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var u = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(l) {
            return a.shouldUseNativeValidation && k0({}, a), { errors: {}, values: r.raw ? n : l };
          });
        } catch (l) {
          return o(l);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(s) {
        if (function(o) {
          return o.errors != null;
        }(s))
          return { values: {}, errors: eI(rI(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Re;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function r(i) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (i) => {
    const a = {};
    for (const s of i)
      a[s] = s;
    return a;
  }, t.getValidEnumValues = (i) => {
    const a = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), s = {};
    for (const o of a)
      s[o] = i[o];
    return t.objectValues(s);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(a) {
    return i[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const a = [];
    for (const s in i)
      Object.prototype.hasOwnProperty.call(i, s) && a.push(s);
    return a;
  }, t.find = (i, a) => {
    for (const s of i)
      if (a(s))
        return s;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, a = " | ") {
    return i.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(Re || (Re = {}));
var im;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(im || (im = {}));
const ne = Re.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Sn = (t) => {
  switch (typeof t) {
    case "undefined":
      return ne.undefined;
    case "string":
      return ne.string;
    case "number":
      return isNaN(t) ? ne.nan : ne.number;
    case "boolean":
      return ne.boolean;
    case "function":
      return ne.function;
    case "bigint":
      return ne.bigint;
    case "symbol":
      return ne.symbol;
    case "object":
      return Array.isArray(t) ? ne.array : t === null ? ne.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ne.promise : typeof Map < "u" && t instanceof Map ? ne.map : typeof Set < "u" && t instanceof Set ? ne.set : typeof Date < "u" && t instanceof Date ? ne.date : ne.object;
    default:
      return ne.unknown;
  }
}, V = Re.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Gt extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(a) {
      return a.message;
    }, n = { _errors: [] }, i = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(i);
        else if (s.code === "invalid_return_type")
          i(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          i(s.argumentsError);
        else if (s.path.length === 0)
          n._errors.push(r(s));
        else {
          let o = n, u = 0;
          for (; u < s.path.length; ) {
            const l = s.path[u];
            u === s.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(s))) : o[l] = o[l] || { _errors: [] }, o = o[l], u++;
          }
        }
    };
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof Gt))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Re.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const i of this.issues)
      i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : n.push(e(i));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Gt.create = (t) => new Gt(t);
const ja = (t, e) => {
  let r;
  switch (t.code) {
    case V.invalid_type:
      t.received === ne.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case V.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Re.jsonStringifyReplacer)}`;
      break;
    case V.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Re.joinValues(t.keys, ", ")}`;
      break;
    case V.invalid_union:
      r = "Invalid input";
      break;
    case V.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Re.joinValues(t.options)}`;
      break;
    case V.invalid_enum_value:
      r = `Invalid enum value. Expected ${Re.joinValues(t.options)}, received '${t.received}'`;
      break;
    case V.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case V.invalid_return_type:
      r = "Invalid function return type";
      break;
    case V.invalid_date:
      r = "Invalid date";
      break;
    case V.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Re.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case V.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case V.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case V.custom:
      r = "Invalid input";
      break;
    case V.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case V.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case V.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Re.assertNever(t);
  }
  return { message: r };
};
let iI = ja;
function $c() {
  return iI;
}
const jc = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: i } = t, a = [...r, ...i.path || []], s = {
    ...i,
    path: a
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: a,
      message: i.message
    };
  let o = "";
  const u = n.filter((l) => !!l).slice().reverse();
  for (const l of u)
    o = l(s, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: a,
    message: o
  };
};
function K(t, e) {
  const r = $c(), n = jc({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      r,
      r === ja ? void 0 : ja
      // then global default map
    ].filter((i) => !!i)
  });
  t.common.issues.push(n);
}
class Rt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const i of r) {
      if (i.status === "aborted")
        return we;
      i.status === "dirty" && e.dirty(), n.push(i.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const i of r) {
      const a = await i.key, s = await i.value;
      n.push({
        key: a,
        value: s
      });
    }
    return Rt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: a, value: s } = i;
      if (a.status === "aborted" || s.status === "aborted")
        return we;
      a.status === "dirty" && e.dirty(), s.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (n[a.value] = s.value);
    }
    return { status: e.value, value: n };
  }
}
const we = Object.freeze({
  status: "aborted"
}), aa = (t) => ({ status: "dirty", value: t }), Ft = (t) => ({ status: "valid", value: t }), am = (t) => t.status === "aborted", sm = (t) => t.status === "dirty", Do = (t) => t.status === "valid", Ro = (t) => typeof Promise < "u" && t instanceof Promise;
function Po(t, e, r, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function T0(t, e, r, n, i) {
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var fe;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(fe || (fe = {}));
var sa, oa;
class br {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const om = (t, e) => {
  if (Do(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Gt(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ke(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (s, o) => {
    var u, l;
    const { message: c } = t;
    return s.code === "invalid_enum_value" ? { message: c ?? o.defaultError } : typeof o.data > "u" ? { message: (u = c ?? n) !== null && u !== void 0 ? u : o.defaultError } : s.code !== "invalid_type" ? { message: o.defaultError } : { message: (l = c ?? r) !== null && l !== void 0 ? l : o.defaultError };
  }, description: i };
}
class Oe {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Sn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Sn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Rt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Sn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Ro(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const i = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Sn(e)
    }, a = this._parseSync({ data: e, path: i.path, parent: i });
    return om(i, a);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Sn(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), a = await (Ro(i) ? i : Promise.resolve(i));
    return om(n, a);
  }
  refine(e, r) {
    const n = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, a) => {
      const s = e(i), o = () => a.addIssue({
        code: V.custom,
        ...n(i)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((u) => u ? !0 : (o(), !1)) : s ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof r == "function" ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new $r({
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Ar.create(this, this._def);
  }
  nullable() {
    return Bn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return mr.create(this, this._def);
  }
  promise() {
    return za.create(this, this._def);
  }
  or(e) {
    return Lo.create([this, e], this._def);
  }
  and(e) {
    return $o.create(this, e, this._def);
  }
  transform(e) {
    return new $r({
      ...ke(this._def),
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new qo({
      ...ke(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ge.ZodDefault
    });
  }
  brand() {
    return new C0({
      typeName: ge.ZodBranded,
      type: this,
      ...ke(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Uo({
      ...ke(this._def),
      innerType: this,
      catchValue: r,
      typeName: ge.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Su.create(this, e);
  }
  readonly() {
    return Bo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const aI = /^c[^\s-]{8,}$/i, sI = /^[0-9a-z]+$/, oI = /^[0-9A-HJKMNP-TV-Z]{26}$/, uI = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, lI = /^[a-z0-9_-]{21}$/i, cI = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, fI = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, dI = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Nl;
const hI = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, pI = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, mI = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _0 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", vI = new RegExp(`^${_0}$`);
function S0(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function yI(t) {
  return new RegExp(`^${S0(t)}$`);
}
function gI(t) {
  let e = `${_0}T${S0(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function bI(t, e) {
  return !!((e === "v4" || !e) && hI.test(t) || (e === "v6" || !e) && pI.test(t));
}
class Or extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ne.string) {
      const a = this._getOrReturnCtx(e);
      return K(a, {
        code: V.invalid_type,
        expected: ne.string,
        received: a.parsedType
      }), we;
    }
    const n = new Rt();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const s = e.data.length > a.value, o = e.data.length < a.value;
        (s || o) && (i = this._getOrReturnCtx(e, i), s ? K(i, {
          code: V.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && K(i, {
          code: V.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        fI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "email",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        Nl || (Nl = new RegExp(dI, "u")), Nl.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "emoji",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        uI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "uuid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        lI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "nanoid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        aI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "cuid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        sI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "cuid2",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        oI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "ulid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), K(i, {
            validation: "url",
            code: V.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "regex",
          code: V.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? gI(a).test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "date" ? vI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.invalid_string,
          validation: "date",
          message: a.message
        }), n.dirty()) : a.kind === "time" ? yI(a).test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          code: V.invalid_string,
          validation: "time",
          message: a.message
        }), n.dirty()) : a.kind === "duration" ? cI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "duration",
          code: V.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? bI(e.data, a.version) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "ip",
          code: V.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "base64" ? mI.test(e.data) || (i = this._getOrReturnCtx(e, i), K(i, {
          validation: "base64",
          code: V.invalid_string,
          message: a.message
        }), n.dirty()) : Re.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((i) => e.test(i), {
      validation: r,
      code: V.invalid_string,
      ...fe.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...fe.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...fe.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...fe.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...fe.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...fe.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...fe.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...fe.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...fe.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...fe.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...fe.errToObj(e) });
  }
  datetime(e) {
    var r, n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      local: (n = e == null ? void 0 : e.local) !== null && n !== void 0 ? n : !1,
      ...fe.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...fe.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...fe.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...fe.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...fe.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...fe.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...fe.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...fe.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...fe.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...fe.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, fe.errToObj(e));
  }
  trim() {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Or.create = (t) => {
  var e;
  return new Or({
    checks: [],
    typeName: ge.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ke(t)
  });
};
function wI(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, a = parseInt(t.toFixed(i).replace(".", "")), s = parseInt(e.toFixed(i).replace(".", ""));
  return a % s / Math.pow(10, i);
}
class Ri extends Oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ne.number) {
      const a = this._getOrReturnCtx(e);
      return K(a, {
        code: V.invalid_type,
        expected: ne.number,
        received: a.parsedType
      }), we;
    }
    let n;
    const i = new Rt();
    for (const a of this._def.checks)
      a.kind === "int" ? Re.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? wI(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.not_finite,
        message: a.message
      }), i.dirty()) : Re.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, fe.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, fe.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, fe.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, fe.toString(r));
  }
  setLimit(e, r, n, i) {
    return new Ri({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: fe.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ri({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: fe.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: fe.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: fe.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: fe.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: fe.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Re.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Ri.create = (t) => new Ri({
  checks: [],
  typeName: ge.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ke(t)
});
class Pi extends Oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ne.bigint) {
      const a = this._getOrReturnCtx(e);
      return K(a, {
        code: V.invalid_type,
        expected: ne.bigint,
        received: a.parsedType
      }), we;
    }
    let n;
    const i = new Rt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), K(n, {
        code: V.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : Re.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, fe.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, fe.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, fe.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, fe.toString(r));
  }
  setLimit(e, r, n, i) {
    return new Pi({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: fe.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Pi({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: fe.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Pi.create = (t) => {
  var e;
  return new Pi({
    checks: [],
    typeName: ge.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ke(t)
  });
};
class Vc extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ne.boolean) {
      const n = this._getOrReturnCtx(e);
      return K(n, {
        code: V.invalid_type,
        expected: ne.boolean,
        received: n.parsedType
      }), we;
    }
    return Ft(e.data);
  }
}
Vc.create = (t) => new Vc({
  typeName: ge.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ke(t)
});
class Va extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ne.date) {
      const a = this._getOrReturnCtx(e);
      return K(a, {
        code: V.invalid_type,
        expected: ne.date,
        received: a.parsedType
      }), we;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return K(a, {
        code: V.invalid_date
      }), we;
    }
    const n = new Rt();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (i = this._getOrReturnCtx(e, i), K(i, {
        code: V.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (i = this._getOrReturnCtx(e, i), K(i, {
        code: V.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : Re.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Va({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: fe.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: fe.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
Va.create = (t) => new Va({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ge.ZodDate,
  ...ke(t)
});
class zc extends Oe {
  _parse(e) {
    if (this._getType(e) !== ne.symbol) {
      const n = this._getOrReturnCtx(e);
      return K(n, {
        code: V.invalid_type,
        expected: ne.symbol,
        received: n.parsedType
      }), we;
    }
    return Ft(e.data);
  }
}
zc.create = (t) => new zc({
  typeName: ge.ZodSymbol,
  ...ke(t)
});
class Mo extends Oe {
  _parse(e) {
    if (this._getType(e) !== ne.undefined) {
      const n = this._getOrReturnCtx(e);
      return K(n, {
        code: V.invalid_type,
        expected: ne.undefined,
        received: n.parsedType
      }), we;
    }
    return Ft(e.data);
  }
}
Mo.create = (t) => new Mo({
  typeName: ge.ZodUndefined,
  ...ke(t)
});
class Fo extends Oe {
  _parse(e) {
    if (this._getType(e) !== ne.null) {
      const n = this._getOrReturnCtx(e);
      return K(n, {
        code: V.invalid_type,
        expected: ne.null,
        received: n.parsedType
      }), we;
    }
    return Ft(e.data);
  }
}
Fo.create = (t) => new Fo({
  typeName: ge.ZodNull,
  ...ke(t)
});
class Wc extends Oe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ft(e.data);
  }
}
Wc.create = (t) => new Wc({
  typeName: ge.ZodAny,
  ...ke(t)
});
class Ei extends Oe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ft(e.data);
  }
}
Ei.create = (t) => new Ei({
  typeName: ge.ZodUnknown,
  ...ke(t)
});
class gn extends Oe {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return K(r, {
      code: V.invalid_type,
      expected: ne.never,
      received: r.parsedType
    }), we;
  }
}
gn.create = (t) => new gn({
  typeName: ge.ZodNever,
  ...ke(t)
});
class qc extends Oe {
  _parse(e) {
    if (this._getType(e) !== ne.undefined) {
      const n = this._getOrReturnCtx(e);
      return K(n, {
        code: V.invalid_type,
        expected: ne.void,
        received: n.parsedType
      }), we;
    }
    return Ft(e.data);
  }
}
qc.create = (t) => new qc({
  typeName: ge.ZodVoid,
  ...ke(t)
});
class mr extends Oe {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== ne.array)
      return K(r, {
        code: V.invalid_type,
        expected: ne.array,
        received: r.parsedType
      }), we;
    if (i.exactLength !== null) {
      const s = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (s || o) && (K(r, {
        code: s ? V.too_big : V.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: s ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (K(r, {
      code: V.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (K(r, {
      code: V.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((s, o) => i.type._parseAsync(new br(r, s, r.path, o)))).then((s) => Rt.mergeArray(n, s));
    const a = [...r.data].map((s, o) => i.type._parseSync(new br(r, s, r.path, o)));
    return Rt.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new mr({
      ...this._def,
      minLength: { value: e, message: fe.toString(r) }
    });
  }
  max(e, r) {
    return new mr({
      ...this._def,
      maxLength: { value: e, message: fe.toString(r) }
    });
  }
  length(e, r) {
    return new mr({
      ...this._def,
      exactLength: { value: e, message: fe.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
mr.create = (t, e) => new mr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ge.ZodArray,
  ...ke(e)
});
function ii(t) {
  if (t instanceof et) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Ar.create(ii(n));
    }
    return new et({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof mr ? new mr({
      ...t._def,
      type: ii(t.element)
    }) : t instanceof Ar ? Ar.create(ii(t.unwrap())) : t instanceof Bn ? Bn.create(ii(t.unwrap())) : t instanceof Lr ? Lr.create(t.items.map((e) => ii(e))) : t;
}
class et extends Oe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Re.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ne.object) {
      const l = this._getOrReturnCtx(e);
      return K(l, {
        code: V.invalid_type,
        expected: ne.object,
        received: l.parsedType
      }), we;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: a, keys: s } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof gn && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        s.includes(l) || o.push(l);
    const u = [];
    for (const l of s) {
      const c = a[l], f = i.data[l];
      u.push({
        key: { status: "valid", value: l },
        value: c._parse(new br(i, f, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof gn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const c of o)
          u.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (l === "strict")
        o.length > 0 && (K(i, {
          code: V.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const c of o) {
        const f = i.data[c];
        u.push({
          key: { status: "valid", value: c },
          value: l._parse(
            new br(i, f, i.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const c of u) {
        const f = await c.key, h = await c.value;
        l.push({
          key: f,
          value: h,
          alwaysSet: c.alwaysSet
        });
      }
      return l;
    }).then((l) => Rt.mergeObjectSync(n, l)) : Rt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return fe.errToObj, new et({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, a, s, o;
          const u = (s = (a = (i = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(i, r, n).message) !== null && s !== void 0 ? s : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = fe.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new et({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new et({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new et({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new et({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ge.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new et({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Re.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new et({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Re.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new et({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ii(this);
  }
  partial(e) {
    const r = {};
    return Re.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new et({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Re.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof Ar; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new et({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return O0(Re.objectKeys(this.shape));
  }
}
et.create = (t, e) => new et({
  shape: () => t,
  unknownKeys: "strip",
  catchall: gn.create(),
  typeName: ge.ZodObject,
  ...ke(e)
});
et.strictCreate = (t, e) => new et({
  shape: () => t,
  unknownKeys: "strict",
  catchall: gn.create(),
  typeName: ge.ZodObject,
  ...ke(e)
});
et.lazycreate = (t, e) => new et({
  shape: t,
  unknownKeys: "strip",
  catchall: gn.create(),
  typeName: ge.ZodObject,
  ...ke(e)
});
class Lo extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const s = a.map((o) => new Gt(o.ctx.common.issues));
      return K(r, {
        code: V.invalid_union,
        unionErrors: s
      }), we;
    }
    if (r.common.async)
      return Promise.all(n.map(async (a) => {
        const s = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: s
          }),
          ctx: s
        };
      })).then(i);
    {
      let a;
      const s = [];
      for (const u of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, c = u._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !a && (a = { result: c, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((u) => new Gt(u));
      return K(r, {
        code: V.invalid_union,
        unionErrors: o
      }), we;
    }
  }
  get options() {
    return this._def.options;
  }
}
Lo.create = (t, e) => new Lo({
  options: t,
  typeName: ge.ZodUnion,
  ...ke(e)
});
const kr = (t) => t instanceof Vo ? kr(t.schema) : t instanceof $r ? kr(t.innerType()) : t instanceof zo ? [t.value] : t instanceof Un ? t.options : t instanceof Wo ? Re.objectValues(t.enum) : t instanceof qo ? kr(t._def.innerType) : t instanceof Mo ? [void 0] : t instanceof Fo ? [null] : t instanceof Ar ? [void 0, ...kr(t.unwrap())] : t instanceof Bn ? [null, ...kr(t.unwrap())] : t instanceof C0 || t instanceof Bo ? kr(t.unwrap()) : t instanceof Uo ? kr(t._def.innerType) : [];
class sd extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ne.object)
      return K(r, {
        code: V.invalid_type,
        expected: ne.object,
        received: r.parsedType
      }), we;
    const n = this.discriminator, i = r.data[n], a = this.optionsMap.get(i);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (K(r, {
      code: V.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), we);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, n) {
    const i = /* @__PURE__ */ new Map();
    for (const a of r) {
      const s = kr(a.shape[e]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of s) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, a);
      }
    }
    return new sd({
      typeName: ge.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...ke(n)
    });
  }
}
function Uc(t, e) {
  const r = Sn(t), n = Sn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ne.object && n === ne.object) {
    const i = Re.objectKeys(e), a = Re.objectKeys(t).filter((o) => i.indexOf(o) !== -1), s = { ...t, ...e };
    for (const o of a) {
      const u = Uc(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      s[o] = u.data;
    }
    return { valid: !0, data: s };
  } else if (r === ne.array && n === ne.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let a = 0; a < t.length; a++) {
      const s = t[a], o = e[a], u = Uc(s, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === ne.date && n === ne.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class $o extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (a, s) => {
      if (am(a) || am(s))
        return we;
      const o = Uc(a.value, s.value);
      return o.valid ? ((sm(a) || sm(s)) && r.dirty(), { status: r.value, value: o.data }) : (K(n, {
        code: V.invalid_intersection_types
      }), we);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([a, s]) => i(a, s)) : i(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
$o.create = (t, e, r) => new $o({
  left: t,
  right: e,
  typeName: ge.ZodIntersection,
  ...ke(r)
});
class Lr extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.array)
      return K(n, {
        code: V.invalid_type,
        expected: ne.array,
        received: n.parsedType
      }), we;
    if (n.data.length < this._def.items.length)
      return K(n, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), we;
    !this._def.rest && n.data.length > this._def.items.length && (K(n, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((s, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new br(n, s, n.path, o)) : null;
    }).filter((s) => !!s);
    return n.common.async ? Promise.all(a).then((s) => Rt.mergeArray(r, s)) : Rt.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Lr({
      ...this._def,
      rest: e
    });
  }
}
Lr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Lr({
    items: t,
    typeName: ge.ZodTuple,
    rest: null,
    ...ke(e)
  });
};
class jo extends Oe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.object)
      return K(n, {
        code: V.invalid_type,
        expected: ne.object,
        received: n.parsedType
      }), we;
    const i = [], a = this._def.keyType, s = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: a._parse(new br(n, o, n.path, o)),
        value: s._parse(new br(n, n.data[o], n.path, o)),
        alwaysSet: o in n.data
      });
    return n.common.async ? Rt.mergeObjectAsync(r, i) : Rt.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Oe ? new jo({
      keyType: e,
      valueType: r,
      typeName: ge.ZodRecord,
      ...ke(n)
    }) : new jo({
      keyType: Or.create(),
      valueType: e,
      typeName: ge.ZodRecord,
      ...ke(r)
    });
  }
}
class Bc extends Oe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.map)
      return K(n, {
        code: V.invalid_type,
        expected: ne.map,
        received: n.parsedType
      }), we;
    const i = this._def.keyType, a = this._def.valueType, s = [...n.data.entries()].map(([o, u], l) => ({
      key: i._parse(new br(n, o, n.path, [l, "key"])),
      value: a._parse(new br(n, u, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of s) {
          const l = await u.key, c = await u.value;
          if (l.status === "aborted" || c.status === "aborted")
            return we;
          (l.status === "dirty" || c.status === "dirty") && r.dirty(), o.set(l.value, c.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of s) {
        const l = u.key, c = u.value;
        if (l.status === "aborted" || c.status === "aborted")
          return we;
        (l.status === "dirty" || c.status === "dirty") && r.dirty(), o.set(l.value, c.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Bc.create = (t, e, r) => new Bc({
  valueType: e,
  keyType: t,
  typeName: ge.ZodMap,
  ...ke(r)
});
class Mi extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ne.set)
      return K(n, {
        code: V.invalid_type,
        expected: ne.set,
        received: n.parsedType
      }), we;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (K(n, {
      code: V.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (K(n, {
      code: V.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function s(u) {
      const l = /* @__PURE__ */ new Set();
      for (const c of u) {
        if (c.status === "aborted")
          return we;
        c.status === "dirty" && r.dirty(), l.add(c.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((u, l) => a._parse(new br(n, u, n.path, l)));
    return n.common.async ? Promise.all(o).then((u) => s(u)) : s(o);
  }
  min(e, r) {
    return new Mi({
      ...this._def,
      minSize: { value: e, message: fe.toString(r) }
    });
  }
  max(e, r) {
    return new Mi({
      ...this._def,
      maxSize: { value: e, message: fe.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Mi.create = (t, e) => new Mi({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ge.ZodSet,
  ...ke(e)
});
class ba extends Oe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ne.function)
      return K(r, {
        code: V.invalid_type,
        expected: ne.function,
        received: r.parsedType
      }), we;
    function n(o, u) {
      return jc({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          $c(),
          ja
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return jc({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          $c(),
          ja
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, s = r.data;
    if (this._def.returns instanceof za) {
      const o = this;
      return Ft(async function(...u) {
        const l = new Gt([]), c = await o._def.args.parseAsync(u, a).catch((d) => {
          throw l.addIssue(n(u, d)), l;
        }), f = await Reflect.apply(s, this, c);
        return await o._def.returns._def.type.parseAsync(f, a).catch((d) => {
          throw l.addIssue(i(f, d)), l;
        });
      });
    } else {
      const o = this;
      return Ft(function(...u) {
        const l = o._def.args.safeParse(u, a);
        if (!l.success)
          throw new Gt([n(u, l.error)]);
        const c = Reflect.apply(s, this, l.data), f = o._def.returns.safeParse(c, a);
        if (!f.success)
          throw new Gt([i(c, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ba({
      ...this._def,
      args: Lr.create(e).rest(Ei.create())
    });
  }
  returns(e) {
    return new ba({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new ba({
      args: e || Lr.create([]).rest(Ei.create()),
      returns: r || Ei.create(),
      typeName: ge.ZodFunction,
      ...ke(n)
    });
  }
}
class Vo extends Oe {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Vo.create = (t, e) => new Vo({
  getter: t,
  typeName: ge.ZodLazy,
  ...ke(e)
});
class zo extends Oe {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return K(r, {
        received: r.data,
        code: V.invalid_literal,
        expected: this._def.value
      }), we;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
zo.create = (t, e) => new zo({
  value: t,
  typeName: ge.ZodLiteral,
  ...ke(e)
});
function O0(t, e) {
  return new Un({
    values: t,
    typeName: ge.ZodEnum,
    ...ke(e)
  });
}
class Un extends Oe {
  constructor() {
    super(...arguments), sa.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return K(r, {
        expected: Re.joinValues(n),
        received: r.parsedType,
        code: V.invalid_type
      }), we;
    }
    if (Po(this, sa) || T0(this, sa, new Set(this._def.values)), !Po(this, sa).has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return K(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: n
      }), we;
    }
    return Ft(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return Un.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return Un.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
sa = /* @__PURE__ */ new WeakMap();
Un.create = O0;
class Wo extends Oe {
  constructor() {
    super(...arguments), oa.set(this, void 0);
  }
  _parse(e) {
    const r = Re.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ne.string && n.parsedType !== ne.number) {
      const i = Re.objectValues(r);
      return K(n, {
        expected: Re.joinValues(i),
        received: n.parsedType,
        code: V.invalid_type
      }), we;
    }
    if (Po(this, oa) || T0(this, oa, new Set(Re.getValidEnumValues(this._def.values))), !Po(this, oa).has(e.data)) {
      const i = Re.objectValues(r);
      return K(n, {
        received: n.data,
        code: V.invalid_enum_value,
        options: i
      }), we;
    }
    return Ft(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
oa = /* @__PURE__ */ new WeakMap();
Wo.create = (t, e) => new Wo({
  values: t,
  typeName: ge.ZodNativeEnum,
  ...ke(e)
});
class za extends Oe {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ne.promise && r.common.async === !1)
      return K(r, {
        code: V.invalid_type,
        expected: ne.promise,
        received: r.parsedType
      }), we;
    const n = r.parsedType === ne.promise ? r.data : Promise.resolve(r.data);
    return Ft(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
za.create = (t, e) => new za({
  type: t,
  typeName: ge.ZodPromise,
  ...ke(e)
});
class $r extends Oe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ge.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null, a = {
      addIssue: (s) => {
        K(n, s), s.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), i.type === "preprocess") {
      const s = i.transform(n.data, a);
      if (n.common.async)
        return Promise.resolve(s).then(async (o) => {
          if (r.value === "aborted")
            return we;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? we : u.status === "dirty" || r.value === "dirty" ? aa(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return we;
        const o = this._def.schema._parseSync({
          data: s,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? we : o.status === "dirty" || r.value === "dirty" ? aa(o.value) : o;
      }
    }
    if (i.type === "refinement") {
      const s = (o) => {
        const u = i.refinement(o, a);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? we : (o.status === "dirty" && r.dirty(), s(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? we : (o.status === "dirty" && r.dirty(), s(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Do(s))
          return s;
        const o = i.transform(s.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((s) => Do(s) ? Promise.resolve(i.transform(s.value, a)).then((o) => ({ status: r.value, value: o })) : s);
    Re.assertNever(i);
  }
}
$r.create = (t, e, r) => new $r({
  schema: t,
  typeName: ge.ZodEffects,
  effect: e,
  ...ke(r)
});
$r.createWithPreprocess = (t, e, r) => new $r({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ge.ZodEffects,
  ...ke(r)
});
class Ar extends Oe {
  _parse(e) {
    return this._getType(e) === ne.undefined ? Ft(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ar.create = (t, e) => new Ar({
  innerType: t,
  typeName: ge.ZodOptional,
  ...ke(e)
});
class Bn extends Oe {
  _parse(e) {
    return this._getType(e) === ne.null ? Ft(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bn.create = (t, e) => new Bn({
  innerType: t,
  typeName: ge.ZodNullable,
  ...ke(e)
});
class qo extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === ne.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
qo.create = (t, e) => new qo({
  innerType: t,
  typeName: ge.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ke(e)
});
class Uo extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Ro(i) ? i.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Gt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Gt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Uo.create = (t, e) => new Uo({
  innerType: t,
  typeName: ge.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ke(e)
});
class Hc extends Oe {
  _parse(e) {
    if (this._getType(e) !== ne.nan) {
      const n = this._getOrReturnCtx(e);
      return K(n, {
        code: V.invalid_type,
        expected: ne.nan,
        received: n.parsedType
      }), we;
    }
    return { status: "valid", value: e.data };
  }
}
Hc.create = (t) => new Hc({
  typeName: ge.ZodNaN,
  ...ke(t)
});
class C0 extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Su extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? we : a.status === "dirty" ? (r.dirty(), aa(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return i.status === "aborted" ? we : i.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new Su({
      in: e,
      out: r,
      typeName: ge.ZodPipeline
    });
  }
}
class Bo extends Oe {
  _parse(e) {
    const r = this._def.innerType._parse(e), n = (i) => (Do(i) && (i.value = Object.freeze(i.value)), i);
    return Ro(r) ? r.then((i) => n(i)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bo.create = (t, e) => new Bo({
  innerType: t,
  typeName: ge.ZodReadonly,
  ...ke(e)
});
et.lazycreate;
var ge;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(ge || (ge = {}));
const EI = Or.create;
Ri.create;
Hc.create;
Pi.create;
Vc.create;
Va.create;
zc.create;
Mo.create;
Fo.create;
Wc.create;
Ei.create;
gn.create;
qc.create;
mr.create;
const xI = et.create;
et.strictCreate;
Lo.create;
sd.create;
$o.create;
Lr.create;
jo.create;
Bc.create;
Mi.create;
ba.create;
Vo.create;
zo.create;
Un.create;
Wo.create;
za.create;
$r.create;
Ar.create;
Bn.create;
$r.createWithPreprocess;
Su.create;
const kI = Ci`
  mutation GenerateAIReply($senalysisBusinessId: String!, $message: String!, $type: String!, $n: Int) {
    generateAiReply(input: {
      senalysisBusinessId: $senalysisBusinessId,
      message: $message,
      type: $type,
      n: $n
    }) {
      replies
      errors {
        message
      }
    }
  }
`;
function I0() {
  var i, a;
  const { senalysisBusinessId: t } = J_(), [e, r] = G_(kI);
  return r.generatedOptions = (a = (i = r.data) == null ? void 0 : i.generateAiReply) == null ? void 0 : a.replies, [
    async (s, o, u = { n: 1 }) => {
      try {
        const { data: l } = await e({
          variables: {
            type: s,
            message: o,
            senalysisBusinessId: t,
            n: u.n
          }
        });
        return ((l == null ? void 0 : l.generateAiReply.errors) || []).forEach((f) => {
          console.error(`AI Error: ${f.message}`), Ye.error(f.message, { position: "bottom-right" });
        }), l.generateAiReply.replies;
      } catch {
        return null;
      }
    },
    r
  ];
}
const TI = [
  "sfs-flex",
  "sfs-items-center",
  "sfs-justify-center",
  "sfs-gap-2",
  "sfs-cursor-pointer",
  "sfs-transition",
  "sfs-ease-in-out",
  "sfs-duration-150",
  "sfs-border",
  "sfs-border-transparent",
  "sfs-shadow-sm",
  "sfs-font-medium",
  "sfs-hover:shadow-md",
  "sfs-focus:outline-none"
], _I = {
  primary: ["sfs-text-white", "sfs-bg-spillover-darkRed", "sfs-hover:bg-spillover-brandRed"],
  secondary: ["sfs-text-slate-700", "sfs-bg-gray-200", "sfs-hover:bg-gray-300"],
  danger: ["sfs-text-white", "sfs-bg-red-500", "sfs-hover:bg-red-600"],
  warning: ["sfs-text-white", "sfs-bg-yellow-500", "sfs-hover:bg-yellow-600"],
  success: ["sfs-text-white", "sfs-bg-green-500", "sfs-hover:bg-green-600"],
  info: ["sfs-text-white", "sfs-bg-blue-500", "sfs-hover:bg-blue-600"]
}, SI = {
  xs: ["sfs-px-1", "sfs-py-0.5", "sfs-text-xs", "sfs-rounded"],
  sm: ["sfs-px-2", "sfs-py-1", "sfs-text-sm", "sfs-rounded"],
  md: ["sfs-px-3", "sfs-py-2", "sfs-text-sm", "sfs-rounded-md"],
  lg: ["sfs-px-3", "sfs-py-2", "sfs-text-lg", "sfs-rounded-lg"]
}, OI = ["sfs-cursor-not-allowed", "sfs-opacity-50"];
function CI(t, e, r, n) {
  const i = [...TI];
  return i.push(..._I[e]), i.push(...SI[r]), t && i.push(...OI), n && i.push(n), i.join(" ");
}
const A0 = Yc(function({
  children: e,
  onClick: r,
  disabled: n,
  // to, // If provided, will render a Link instead of a button.
  type: i = "button",
  // Button type (button, submit, reset)
  context: a = "primary",
  // Button context (primary, secondary, danger, warning, success, info)
  size: s = "md",
  // Button size (xs, sm, md, lg)
  icon: o,
  // Icon name or object
  loading: u,
  // If true, will render a loading spinner instead of the icon.
  className: l,
  // Custom classes. Tip: "flex-row-reverse" to reverse icon and text.
  ...c
  // Any other props to pass to the button
}, f) {
  const h = "button";
  c.disabled = n || u, c.type = i;
  const d = (y) => {
    if (n) {
      y.preventDefault();
      return;
    }
    r && r(y);
  }, p = CI(n, a, s, l);
  let m;
  return u ? m = { name: "spinner", spin: !0 } : m = typeof o == "string" ? { name: o } : o, /* @__PURE__ */ te.jsxs(h, { ref: f, onClick: d, className: p, ...c, children: [
    o && /* @__PURE__ */ te.jsx(Di, { ...m }),
    e
  ] });
});
function N0({ option: t, onClick: e }) {
  const r = () => {
    e && e(t);
  };
  return /* @__PURE__ */ te.jsx("div", { className: `sfs-p-3 sfs-bg-gray-100 sfs-rounded-md sfs-text-gray-600 hover:sfs-bg-gray-200 sfs-transition sfs-duration-200 sfs-text-sm ${e && "sfs-cursor-pointer"} sfs-whitespace-pre-line`, onClick: r, children: t });
}
const II = xI({
  context: EI().min(5, "Please provide some more context")
});
function AI({ onOptionSelected: t }) {
  const [e, { generatedOptions: r, loading: n }] = I0(), {
    register: i,
    handleSubmit: a,
    formState: { errors: s }
  } = QC({ resolver: nI(II) }), o = ({ context: l }) => e("post_caption", l, { n: 3 }), u = r || [];
  return /* @__PURE__ */ te.jsxs("form", { onSubmit: a(o), className: "sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border", children: [
    /* @__PURE__ */ te.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-1", children: [
      /* @__PURE__ */ te.jsx("label", { className: "sfs-text-sm sfs-text-gray-700", children: "Give us some context..." }),
      /* @__PURE__ */ te.jsx("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4", children: /* @__PURE__ */ te.jsx("textarea", { className: "sfs-box-border sfs-w-full sfs-h-20 sfs-border sfs-border-gray-300 sfs-rounded-md sfs-p-2", ...i("context") }) }),
      s.context && /* @__PURE__ */ te.jsx("div", { className: "sfs-text-red-500 sfs-text-sm", children: s.context.message })
    ] }),
    /* @__PURE__ */ te.jsx(
      A0,
      {
        type: "submit",
        disabled: n,
        context: "primary",
        icon: "wand-magic-sparkles",
        loading: n,
        children: "Generate Caption"
      }
    ),
    u.length > 0 && /* @__PURE__ */ te.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-mt-4", children: [
      /* @__PURE__ */ te.jsx("div", { className: "sfs-text-gray-700", children: "Pick an option or try again for new options" }),
      u.map((l, c) => /* @__PURE__ */ te.jsx(N0, { option: l, onClick: t }, c))
    ] })
  ] });
}
function dr({ type: t, text: e, onOptionSelected: r, loadingMsg: n, children: i, autoRun: a = !0, retry: s = !0, n: o = 1 }) {
  const [u, { generatedOptions: l, loading: c }] = I0(), f = () => {
    e && u(t, e, { n: o });
  };
  return He(() => {
    a && f();
  }, []), /* @__PURE__ */ te.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border", children: [
    i,
    c ? /* @__PURE__ */ te.jsxs("div", { className: "sfs-text-gray-700 sfs-flex sfs-flex-row sfs-items-center sfs-gap-2", children: [
      /* @__PURE__ */ te.jsx(Di, { name: "spinner", spin: !0 }),
      n || "Loading..."
    ] }) : s && /* @__PURE__ */ te.jsx(
      A0,
      {
        context: "secondary",
        size: "sm",
        icon: "rotate",
        onClick: f,
        children: "Retry"
      }
    ),
    l == null ? void 0 : l.map((h, d) => /* @__PURE__ */ te.jsx(N0, { option: h, onClick: r }, d))
  ] });
}
function NI({ message: t }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "translate",
      text: t,
      loadingMsg: "Translating...",
      retry: !1
    }
  );
}
function DI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "spellcheck",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Checking spelling..."
    }
  );
}
function RI({ message: t }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "summarize",
      text: t,
      loadingMsg: "Summarizing...",
      retry: !1
    }
  );
}
function PI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "improve_writing",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Improving writing..."
    }
  );
}
function MI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "make_longer",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making text longer..."
    }
  );
}
function FI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "make_shorter",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making text shorter..."
    }
  );
}
function LI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "make_more_formal",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making more formal..."
    }
  );
}
function $I({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "make_more_casual",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making more casual..."
    }
  );
}
function jI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "continue_writing",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Continuing your text..."
    }
  );
}
function VI({ message: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "review_reply",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Generating reply...",
      n: 3
    }
  );
}
function zI({ message: t, onOptionSelected: e }) {
  return /* @__PURE__ */ te.jsx(
    dr,
    {
      type: "comment_reply",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Generating reply...",
      n: 3
    }
  );
}
const D0 = [
  {
    name: "GenerateCaption",
    title: "Generate Caption",
    icon: "file-text",
    component: AI
  },
  {
    name: "GenerateReviewReply",
    title: "Generate Reply",
    icon: "star",
    component: VI
  },
  {
    name: "GenerateCommentReply",
    title: "Generate Reply",
    icon: "reply",
    component: zI
  },
  {
    name: "Translate",
    title: "Translate",
    icon: "language",
    component: NI
  },
  {
    name: "SpellCheck",
    title: "Fix Spelling & Grammar",
    icon: "spell-check",
    component: DI
  },
  {
    name: "Summarize",
    title: "Summarize",
    icon: "list",
    component: RI
  },
  {
    name: "ImproveWriting",
    title: "Improve Writing",
    icon: "feather",
    component: PI
  },
  {
    name: "MakeLonger",
    title: "Make Longer",
    icon: "circle-plus",
    component: MI
  },
  {
    name: "MakeShorter",
    title: "Make Shorter",
    icon: "circle-minus",
    component: FI
  },
  {
    name: "MakeMoreFormal",
    title: "Make More Formal",
    icon: "user-tie",
    component: LI
  },
  {
    name: "MakeMoreCasual",
    title: "Make More Casual",
    icon: "face-smile-beam",
    component: $I
  },
  {
    name: "ContinueWriting",
    title: "Continue Writing",
    icon: "ellipsis",
    component: jI
  }
], WI = D0.map((t) => t.name);
function qI({ message: t, text: e, onOptionSelected: r, tools: n = WI }) {
  const i = D0.filter((a) => n.includes(a.name)).map((a) => /* @__PURE__ */ te.jsx(h0, { title: a.title, icon: a.icon, children: /* @__PURE__ */ te.jsx(a.component, { message: t, text: e, onOptionSelected: r }) }, a.name));
  return /* @__PURE__ */ te.jsx(IC, { title: "AI Helpers", icon: "wand-magic-sparkles", children: i });
}
function ZI({ message: t, text: e, onOptionSelected: r, className: n, children: i }) {
  return /* @__PURE__ */ te.jsxs(qO, { children: [
    /* @__PURE__ */ te.jsx(Xg, { className: `sfs-border-0 sfs-bg-transparent sfs-cursor-pointer focus:sfs-outline-none ${n || ""}`, title: "AI Helpers", children: i || /* @__PURE__ */ te.jsx(Di, { name: "wand-magic-sparkles", className: "sfs-text-gray-700", size: "lg" }) }),
    /* @__PURE__ */ te.jsx(
      rC,
      {
        enter: "sfs-transition sfs-ease-out sfs-duration-200",
        enterFrom: "sfs-opacity-0 sfs-translate-y-1",
        enterTo: "sfs-opacity-100 sfs-translate-y-0",
        leave: "sfs-transition sfs-ease-in sfs-duration-150",
        leaveFrom: "sfs-opacity-100 sfs-translate-y-0",
        leaveTo: "sfs-opacity-0 sfs-translate-y-1",
        children: /* @__PURE__ */ te.jsx(e0, { anchor: { to: "bottom end", gap: "10px" }, className: "sfs-w-80 sfs-max-h-96 sfs-border sfs-border-gray-300 sfs-border-solid sfs-rounded-md sfs-shadow-sm", children: /* @__PURE__ */ te.jsx(
          qI,
          {
            message: t,
            text: e,
            onOptionSelected: r
          }
        ) })
      }
    )
  ] });
}
export {
  qI as AITextHelpers,
  ZI as AITextHelpersButton,
  YI as SpilloverProvider
};
