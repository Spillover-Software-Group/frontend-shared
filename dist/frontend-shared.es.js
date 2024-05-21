import * as fe from "react";
import H, { forwardRef as Ho, useEffect as Le, useReducer as Gc, useState as Je, useRef as xe, isValidElement as $n, cloneElement as no, useLayoutEffect as Qo, useCallback as kt, createContext as xt, useContext as ft, useMemo as Ke, Fragment as Cr, createElement as H0, useSyncExternalStore as Q0, createRef as yd, useId as io } from "react";
import * as Y0 from "react-dom";
import { flushSync as ao, createPortal as Z0 } from "react-dom";
function G0(t, e) {
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
function gd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gd(Object(r), !0).forEach(function(n) {
      yt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function(n) {
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
function J0(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function K0(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function X0(t, e, r) {
  return e && K0(t.prototype, e), Object.defineProperty(t, "prototype", {
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
function Jc(t, e) {
  return tb(t) || nb(t, e) || dm(t, e) || ab();
}
function qa(t) {
  return eb(t) || rb(t) || dm(t) || ib();
}
function eb(t) {
  if (Array.isArray(t))
    return Fl(t);
}
function tb(t) {
  if (Array.isArray(t))
    return t;
}
function rb(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function nb(t, e) {
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
function dm(t, e) {
  if (t) {
    if (typeof t == "string")
      return Fl(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fl(t, e);
  }
}
function Fl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ib() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ab() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var bd = function() {
}, Kc = {}, hm = {}, pm = null, mm = {
  mark: bd,
  measure: bd
};
try {
  typeof window < "u" && (Kc = window), typeof document < "u" && (hm = document), typeof MutationObserver < "u" && (pm = MutationObserver), typeof performance < "u" && (mm = performance);
} catch {
}
var sb = Kc.navigator || {}, wd = sb.userAgent, Ed = wd === void 0 ? "" : wd, on = Kc, Ze = hm, xd = pm, hs = mm;
on.document;
var jr = !!Ze.documentElement && !!Ze.head && typeof Ze.addEventListener == "function" && typeof Ze.createElement == "function", vm = ~Ed.indexOf("MSIE") || ~Ed.indexOf("Trident/"), ps, ms, vs, ys, gs, Ar = "___FONT_AWESOME___", Ll = 16, ym = "fa", gm = "svg-inline--fa", jn = "data-fa-i2svg", $l = "data-fa-pseudo-element", ob = "data-fa-pseudo-element-pending", Xc = "data-prefix", ef = "data-icon", Td = "fontawesome-i2svg", ub = "async", lb = ["HTML", "HEAD", "STYLE", "SCRIPT"], bm = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), Ye = "classic", tt = "sharp", tf = [Ye, tt];
function Ua(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[Ye];
    }
  });
}
var Ta = Ua((ps = {}, yt(ps, Ye, {
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
}), ps)), ka = Ua((ms = {}, yt(ms, Ye, {
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
}), ms)), _a = Ua((vs = {}, yt(vs, Ye, {
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
}), vs)), cb = Ua((ys = {}, yt(ys, Ye, {
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
}), ys)), fb = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, wm = "fa-layers-text", db = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, hb = Ua((gs = {}, yt(gs, Ye, {
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
}), gs)), Em = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pb = Em.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), mb = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Cn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Sa = /* @__PURE__ */ new Set();
Object.keys(ka[Ye]).map(Sa.add.bind(Sa));
Object.keys(ka[tt]).map(Sa.add.bind(Sa));
var vb = [].concat(tf, qa(Sa), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Cn.GROUP, Cn.SWAP_OPACITY, Cn.PRIMARY, Cn.SECONDARY]).concat(Em.map(function(t) {
  return "".concat(t, "x");
})).concat(pb.map(function(t) {
  return "w-".concat(t);
})), ca = on.FontAwesomeConfig || {};
function yb(t) {
  var e = Ze.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function gb(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (Ze && typeof Ze.querySelector == "function") {
  var bb = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  bb.forEach(function(t) {
    var e = Jc(t, 2), r = e[0], n = e[1], i = gb(yb(r));
    i != null && (ca[n] = i);
  });
}
var xm = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ym,
  replacementClass: gm,
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
ca.familyPrefix && (ca.cssPrefix = ca.familyPrefix);
var Ti = re(re({}, xm), ca);
Ti.autoReplaceSvg || (Ti.observeMutations = !1);
var se = {};
Object.keys(xm).forEach(function(t) {
  Object.defineProperty(se, t, {
    enumerable: !0,
    set: function(r) {
      Ti[t] = r, fa.forEach(function(n) {
        return n(se);
      });
    },
    get: function() {
      return Ti[t];
    }
  });
});
Object.defineProperty(se, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ti.cssPrefix = e, fa.forEach(function(r) {
      return r(se);
    });
  },
  get: function() {
    return Ti.cssPrefix;
  }
});
on.FontAwesomeConfig = se;
var fa = [];
function wb(t) {
  return fa.push(t), function() {
    fa.splice(fa.indexOf(t), 1);
  };
}
var qr = Ll, hr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Eb(t) {
  if (!(!t || !jr)) {
    var e = Ze.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = Ze.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], s = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = a);
    }
    return Ze.head.insertBefore(e, n), t;
  }
}
var xb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Oa() {
  for (var t = 12, e = ""; t-- > 0; )
    e += xb[Math.random() * 62 | 0];
  return e;
}
function Li(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function rf(t) {
  return t.classList ? Li(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function Tm(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Tb(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(Tm(t[r]), '" ');
  }, "").trim();
}
function Yo(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function nf(t) {
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
function _b(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? Ll : r, i = t.height, a = i === void 0 ? Ll : i, s = t.startCentered, o = s === void 0 ? !1 : s, u = "";
  return o && vm ? u += "translate(".concat(e.x / qr - n / 2, "em, ").concat(e.y / qr - a / 2, "em) ") : o ? u += "translate(calc(-50% + ".concat(e.x / qr, "em), calc(-50% + ").concat(e.y / qr, "em)) ") : u += "translate(".concat(e.x / qr, "em, ").concat(e.y / qr, "em) "), u += "scale(".concat(e.size / qr * (e.flipX ? -1 : 1), ", ").concat(e.size / qr * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var Sb = `:root, :host {
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
function km() {
  var t = ym, e = gm, r = se.cssPrefix, n = se.replacementClass, i = Sb;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), s = new RegExp("\\--".concat(t, "\\-"), "g"), o = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(o, ".".concat(n));
  }
  return i;
}
var kd = !1;
function Fu() {
  se.autoAddCss && !kd && (Eb(km()), kd = !0);
}
var Ob = {
  mixout: function() {
    return {
      dom: {
        css: km,
        insertCss: Fu
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Fu();
      },
      beforeI2svg: function() {
        Fu();
      }
    };
  }
}, Dr = on || {};
Dr[Ar] || (Dr[Ar] = {});
Dr[Ar].styles || (Dr[Ar].styles = {});
Dr[Ar].hooks || (Dr[Ar].hooks = {});
Dr[Ar].shims || (Dr[Ar].shims = []);
var ir = Dr[Ar], _m = [], Cb = function t() {
  Ze.removeEventListener("DOMContentLoaded", t), oo = 1, _m.map(function(e) {
    return e();
  });
}, oo = !1;
jr && (oo = (Ze.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ze.readyState), oo || Ze.addEventListener("DOMContentLoaded", Cb));
function Ib(t) {
  jr && (oo ? setTimeout(t, 0) : _m.push(t));
}
function Ba(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? Tm(t) : "<".concat(e, " ").concat(Tb(n), ">").concat(a.map(Ba).join(""), "</").concat(e, ">");
}
function _d(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var Lu = function(e, r, n, i) {
  var a = Object.keys(e), s = a.length, o = r, u, l, c;
  for (n === void 0 ? (u = 1, c = e[a[0]]) : (u = 0, c = n); u < s; u++)
    l = a[u], c = o(c, e[l], l, e);
  return c;
};
function Nb(t) {
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
function jl(t) {
  var e = Nb(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Ab(t, e) {
  var r = t.length, n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function Sd(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], i = !!n.icon;
    return i ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function Vl(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, i = n === void 0 ? !1 : n, a = Sd(e);
  typeof ir.hooks.addPack == "function" && !i ? ir.hooks.addPack(t, Sd(e)) : ir.styles[t] = re(re({}, ir.styles[t] || {}), a), t === "fas" && Vl("fa", e);
}
var bs, ws, Es, si = ir.styles, Db = ir.shims, Rb = (bs = {}, yt(bs, Ye, Object.values(_a[Ye])), yt(bs, tt, Object.values(_a[tt])), bs), af = null, Sm = {}, Om = {}, Cm = {}, Im = {}, Nm = {}, Pb = (ws = {}, yt(ws, Ye, Object.keys(Ta[Ye])), yt(ws, tt, Object.keys(Ta[tt])), ws);
function Mb(t) {
  return ~vb.indexOf(t);
}
function Fb(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !Mb(i) ? i : null;
}
var Am = function() {
  var e = function(a) {
    return Lu(si, function(s, o, u) {
      return s[u] = Lu(o, a, {}), s;
    }, {});
  };
  Sm = e(function(i, a, s) {
    if (a[3] && (i[a[3]] = s), a[2]) {
      var o = a[2].filter(function(u) {
        return typeof u == "number";
      });
      o.forEach(function(u) {
        i[u.toString(16)] = s;
      });
    }
    return i;
  }), Om = e(function(i, a, s) {
    if (i[s] = s, a[2]) {
      var o = a[2].filter(function(u) {
        return typeof u == "string";
      });
      o.forEach(function(u) {
        i[u] = s;
      });
    }
    return i;
  }), Nm = e(function(i, a, s) {
    var o = a[2];
    return i[s] = s, o.forEach(function(u) {
      i[u] = s;
    }), i;
  });
  var r = "far" in si || se.autoFetchSvg, n = Lu(Db, function(i, a) {
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
  Cm = n.names, Im = n.unicodes, af = Zo(se.styleDefault, {
    family: se.familyDefault
  });
};
wb(function(t) {
  af = Zo(t.styleDefault, {
    family: se.familyDefault
  });
});
Am();
function sf(t, e) {
  return (Sm[t] || {})[e];
}
function Lb(t, e) {
  return (Om[t] || {})[e];
}
function In(t, e) {
  return (Nm[t] || {})[e];
}
function Dm(t) {
  return Cm[t] || {
    prefix: null,
    iconName: null
  };
}
function $b(t) {
  var e = Im[t], r = sf("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function un() {
  return af;
}
var of = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Zo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? Ye : r, i = Ta[n][t], a = ka[n][t] || ka[n][i], s = t in ir.styles ? t : null;
  return a || s || null;
}
var Od = (Es = {}, yt(Es, Ye, Object.keys(_a[Ye])), yt(Es, tt, Object.keys(_a[tt])), Es);
function Go(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, yt(e, Ye, "".concat(se.cssPrefix, "-").concat(Ye)), yt(e, tt, "".concat(se.cssPrefix, "-").concat(tt)), e), s = null, o = Ye;
  (t.includes(a[Ye]) || t.some(function(l) {
    return Od[Ye].includes(l);
  })) && (o = Ye), (t.includes(a[tt]) || t.some(function(l) {
    return Od[tt].includes(l);
  })) && (o = tt);
  var u = t.reduce(function(l, c) {
    var f = Fb(se.cssPrefix, c);
    if (si[c] ? (c = Rb[o].includes(c) ? cb[o][c] : c, s = c, l.prefix = c) : Pb[o].indexOf(c) > -1 ? (s = c, l.prefix = Zo(c, {
      family: o
    })) : f ? l.iconName = f : c !== se.replacementClass && c !== a[Ye] && c !== a[tt] && l.rest.push(c), !i && l.prefix && l.iconName) {
      var h = s === "fa" ? Dm(l.iconName) : {}, d = In(l.prefix, l.iconName);
      h.prefix && (s = null), l.iconName = h.iconName || d || l.iconName, l.prefix = h.prefix || l.prefix, l.prefix === "far" && !si.far && si.fas && !se.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, of());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && o === tt && (si.fass || se.autoFetchSvg) && (u.prefix = "fass", u.iconName = In(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || s === "fa") && (u.prefix = un() || "fas"), u;
}
var jb = /* @__PURE__ */ function() {
  function t() {
    J0(this, t), this.definitions = {};
  }
  return X0(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var s = i.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(o) {
        r.definitions[o] = re(re({}, r.definitions[o] || {}), s[o]), Vl(o, s[o]);
        var u = _a[Ye][o];
        u && Vl(u, s[o]), Am();
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
}(), Cd = [], oi = {}, mi = {}, Vb = Object.keys(mi);
function zb(t, e) {
  var r = e.mixoutsTo;
  return Cd = t, oi = {}, Object.keys(mi).forEach(function(n) {
    Vb.indexOf(n) === -1 && delete mi[n];
  }), Cd.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(s) {
      typeof i[s] == "function" && (r[s] = i[s]), so(i[s]) === "object" && Object.keys(i[s]).forEach(function(o) {
        r[s] || (r[s] = {}), r[s][o] = i[s][o];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(s) {
        oi[s] || (oi[s] = []), oi[s].push(a[s]);
      });
    }
    n.provides && n.provides(mi);
  }), r;
}
function zl(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = oi[t] || [];
  return a.forEach(function(s) {
    e = s.apply(null, [e].concat(n));
  }), e;
}
function Vn(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = oi[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function Rr() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return mi[t] ? mi[t].apply(null, e) : void 0;
}
function Wl(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || un();
  if (e)
    return e = In(r, e) || e, _d(Rm.definitions, r, e) || _d(ir.styles, r, e);
}
var Rm = new jb(), Wb = function() {
  se.autoReplaceSvg = !1, se.observeMutations = !1, Vn("noAuto");
}, qb = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jr ? (Vn("beforeI2svg", e), Rr("pseudoElements2svg", e), Rr("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    se.autoReplaceSvg === !1 && (se.autoReplaceSvg = !0), se.observeMutations = !0, Ib(function() {
      Bb({
        autoReplaceSvgRoot: r
      }), Vn("watch", e);
    });
  }
}, Ub = {
  icon: function(e) {
    if (e === null)
      return null;
    if (so(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: In(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Zo(e[0]);
      return {
        prefix: n,
        iconName: In(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(se.cssPrefix, "-")) > -1 || e.match(fb))) {
      var i = Go(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || un(),
        iconName: In(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = un();
      return {
        prefix: a,
        iconName: In(a, e) || e
      };
    }
  }
}, zt = {
  noAuto: Wb,
  config: se,
  dom: qb,
  parse: Ub,
  library: Rm,
  findIconDefinition: Wl,
  toHtml: Ba
}, Bb = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? Ze : r;
  (Object.keys(ir.styles).length > 0 || se.autoFetchSvg) && jr && se.autoReplaceSvg && zt.dom.i2svg({
    node: n
  });
};
function Jo(t, e) {
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
        var n = Ze.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Hb(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, s = t.transform;
  if (nf(s) && r.found && !n.found) {
    var o = r.width, u = r.height, l = {
      x: o / u / 2,
      y: 0.5
    };
    i.style = Yo(re(re({}, a), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function Qb(t) {
  var e = t.prefix, r = t.iconName, n = t.children, i = t.attributes, a = t.symbol, s = a === !0 ? "".concat(e, "-").concat(se.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: re(re({}, i), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function uf(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, s = t.transform, o = t.symbol, u = t.title, l = t.maskId, c = t.titleId, f = t.extra, h = t.watchable, d = h === void 0 ? !1 : h, p = n.found ? n : r, m = p.width, v = p.height, y = i === "fak", g = [se.replacementClass, a ? "".concat(se.cssPrefix, "-").concat(a) : ""].filter(function(P) {
    return f.classes.indexOf(P) === -1;
  }).filter(function(P) {
    return P !== "" || !!P;
  }).concat(f.classes).join(" "), w = {
    children: [],
    attributes: re(re({}, f.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: g,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(m, " ").concat(v)
    })
  }, x = y && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(m / v * 16 * 0.0625, "em")
  } : {};
  d && (w.attributes[jn] = ""), u && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(c || Oa())
    },
    children: [u]
  }), delete w.attributes.title);
  var b = re(re({}, w), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: l,
    transform: s,
    symbol: o,
    styles: re(re({}, x), f.styles)
  }), S = n.found && r.found ? Rr("generateAbstractMask", b) || {
    children: [],
    attributes: {}
  } : Rr("generateAbstractIcon", b) || {
    children: [],
    attributes: {}
  }, N = S.children, I = S.attributes;
  return b.children = N, b.attributes = I, o ? Qb(b) : Hb(b);
}
function Id(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, s = t.extra, o = t.watchable, u = o === void 0 ? !1 : o, l = re(re(re({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  u && (l[jn] = "");
  var c = re({}, s.styles);
  nf(i) && (c.transform = _b({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  var f = Yo(c);
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
  var e = t.content, r = t.title, n = t.extra, i = re(re(re({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Yo(n.styles);
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
var $u = ir.styles;
function ql(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = Jc(n, 1), a = i[0], s = null;
  return Array.isArray(a) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(se.cssPrefix, "-").concat(Cn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(se.cssPrefix, "-").concat(Cn.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(se.cssPrefix, "-").concat(Cn.PRIMARY),
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
var Zb = {
  found: !1,
  width: 512,
  height: 512
};
function Gb(t, e) {
  !bm && !se.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Ul(t, e) {
  var r = e;
  return e === "fa" && se.styleDefault !== null && (e = un()), new Promise(function(n, i) {
    if (Rr("missingIconAbstract"), r === "fa") {
      var a = Dm(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && $u[e] && $u[e][t]) {
      var s = $u[e][t];
      return n(ql(s));
    }
    Gb(t, e), n(re(re({}, Zb), {}, {
      icon: se.showMissingIcons && t ? Rr("missingIconAbstract") || {} : {}
    }));
  });
}
var Nd = function() {
}, Bl = se.measurePerformance && hs && hs.mark && hs.measure ? hs : {
  mark: Nd,
  measure: Nd
}, na = 'FA "6.5.2"', Jb = function(e) {
  return Bl.mark("".concat(na, " ").concat(e, " begins")), function() {
    return Pm(e);
  };
}, Pm = function(e) {
  Bl.mark("".concat(na, " ").concat(e, " ends")), Bl.measure("".concat(na, " ").concat(e), "".concat(na, " ").concat(e, " begins"), "".concat(na, " ").concat(e, " ends"));
}, lf = {
  begin: Jb,
  end: Pm
}, Ws = function() {
};
function Ad(t) {
  var e = t.getAttribute ? t.getAttribute(jn) : null;
  return typeof e == "string";
}
function Kb(t) {
  var e = t.getAttribute ? t.getAttribute(Xc) : null, r = t.getAttribute ? t.getAttribute(ef) : null;
  return e && r;
}
function Xb(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(se.replacementClass);
}
function e1() {
  if (se.autoReplaceSvg === !0)
    return qs.replace;
  var t = qs[se.autoReplaceSvg];
  return t || qs.replace;
}
function t1(t) {
  return Ze.createElementNS("http://www.w3.org/2000/svg", t);
}
function r1(t) {
  return Ze.createElement(t);
}
function Mm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? t1 : r1 : r;
  if (typeof t == "string")
    return Ze.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(s) {
    i.setAttribute(s, t.attributes[s]);
  });
  var a = t.children || [];
  return a.forEach(function(s) {
    i.appendChild(Mm(s, {
      ceFn: n
    }));
  }), i;
}
function n1(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var qs = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Mm(i), r);
      }), r.getAttribute(jn) === null && se.keepOriginalSource) {
        var n = Ze.createComment(n1(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~rf(r).indexOf(se.replacementClass))
      return qs.replace(e);
    var i = new RegExp("".concat(se.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var a = n[0].attributes.class.split(" ").reduce(function(o, u) {
        return u === se.replacementClass || u.match(i) ? o.toSvg.push(u) : o.toNode.push(u), o;
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
function Dd(t) {
  t();
}
function Fm(t, e) {
  var r = typeof e == "function" ? e : Ws;
  if (t.length === 0)
    r();
  else {
    var n = Dd;
    se.mutateApproach === ub && (n = on.requestAnimationFrame || Dd), n(function() {
      var i = e1(), a = lf.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var cf = !1;
function Lm() {
  cf = !0;
}
function Hl() {
  cf = !1;
}
var uo = null;
function Rd(t) {
  if (xd && se.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? Ws : e, n = t.nodeCallback, i = n === void 0 ? Ws : n, a = t.pseudoElementsCallback, s = a === void 0 ? Ws : a, o = t.observeMutationsRoot, u = o === void 0 ? Ze : o;
    uo = new xd(function(l) {
      if (!cf) {
        var c = un();
        Li(l).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !Ad(f.addedNodes[0]) && (se.searchPseudoElements && s(f.target), r(f.target)), f.type === "attributes" && f.target.parentNode && se.searchPseudoElements && s(f.target.parentNode), f.type === "attributes" && Ad(f.target) && ~mb.indexOf(f.attributeName))
            if (f.attributeName === "class" && Kb(f.target)) {
              var h = Go(rf(f.target)), d = h.prefix, p = h.iconName;
              f.target.setAttribute(Xc, d || c), p && f.target.setAttribute(ef, p);
            } else
              Xb(f.target) && i(f.target);
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
function i1() {
  uo && uo.disconnect();
}
function a1(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), s = a[0], o = a.slice(1);
    return s && o.length > 0 && (n[s] = o.join(":").trim()), n;
  }, {})), r;
}
function s1(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = Go(rf(t));
  return i.prefix || (i.prefix = un()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Lb(i.prefix, t.innerText) || sf(i.prefix, jl(t.innerText))), !i.iconName && se.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function o1(t) {
  var e = Li(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return se.autoA11y && (r ? e["aria-labelledby"] = "".concat(se.replacementClass, "-title-").concat(n || Oa()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function u1() {
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
function Pd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = s1(t), n = r.iconName, i = r.prefix, a = r.rest, s = o1(t), o = zl("parseNodeAttributes", {}, t), u = e.styleParser ? a1(t) : [];
  return re({
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
var l1 = ir.styles;
function $m(t) {
  var e = se.autoReplaceSvg === "nest" ? Pd(t, {
    styleParser: !1
  }) : Pd(t);
  return ~e.extra.classes.indexOf(wm) ? Rr("generateLayersText", t, e) : Rr("generateSvgReplacementMutation", t, e);
}
var ln = /* @__PURE__ */ new Set();
tf.map(function(t) {
  ln.add("fa-".concat(t));
});
Object.keys(Ta[Ye]).map(ln.add.bind(ln));
Object.keys(Ta[tt]).map(ln.add.bind(ln));
ln = qa(ln);
function Md(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jr)
    return Promise.resolve();
  var r = Ze.documentElement.classList, n = function(f) {
    return r.add("".concat(Td, "-").concat(f));
  }, i = function(f) {
    return r.remove("".concat(Td, "-").concat(f));
  }, a = se.autoFetchSvg ? ln : tf.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(l1));
  a.includes("fa") || a.push("fa");
  var s = [".".concat(wm, ":not([").concat(jn, "])")].concat(a.map(function(c) {
    return ".".concat(c, ":not([").concat(jn, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var o = [];
  try {
    o = Li(t.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var u = lf.begin("onTree"), l = o.reduce(function(c, f) {
    try {
      var h = $m(f);
      h && c.push(h);
    } catch (d) {
      bm || d.name === "MissingIcon" && console.error(d);
    }
    return c;
  }, []);
  return new Promise(function(c, f) {
    Promise.all(l).then(function(h) {
      Fm(h, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), c();
      });
    }).catch(function(h) {
      u(), f(h);
    });
  });
}
function c1(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  $m(t).then(function(r) {
    r && Fm([r], e);
  });
}
function f1(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Wl(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : Wl(i || {})), t(n, re(re({}, r), {}, {
      mask: i
    }));
  };
}
var d1 = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? hr : n, a = r.symbol, s = a === void 0 ? !1 : a, o = r.mask, u = o === void 0 ? null : o, l = r.maskId, c = l === void 0 ? null : l, f = r.title, h = f === void 0 ? null : f, d = r.titleId, p = d === void 0 ? null : d, m = r.classes, v = m === void 0 ? [] : m, y = r.attributes, g = y === void 0 ? {} : y, w = r.styles, x = w === void 0 ? {} : w;
  if (e) {
    var b = e.prefix, S = e.iconName, N = e.icon;
    return Jo(re({
      type: "icon"
    }, e), function() {
      return Vn("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), se.autoA11y && (h ? g["aria-labelledby"] = "".concat(se.replacementClass, "-title-").concat(p || Oa()) : (g["aria-hidden"] = "true", g.focusable = "false")), uf({
        icons: {
          main: ql(N),
          mask: u ? ql(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: b,
        iconName: S,
        transform: re(re({}, hr), i),
        symbol: s,
        title: h,
        maskId: c,
        titleId: p,
        extra: {
          attributes: g,
          styles: x,
          classes: v
        }
      });
    });
  }
}, h1 = {
  mixout: function() {
    return {
      icon: f1(d1)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Md, r.nodeCallback = c1, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? Ze : n, a = r.callback, s = a === void 0 ? function() {
      } : a;
      return Md(i, s);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, s = n.titleId, o = n.prefix, u = n.transform, l = n.symbol, c = n.mask, f = n.maskId, h = n.extra;
      return new Promise(function(d, p) {
        Promise.all([Ul(i, o), c.iconName ? Ul(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(m) {
          var v = Jc(m, 2), y = v[0], g = v[1];
          d([r, uf({
            icons: {
              main: y,
              mask: g
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
      var n = r.children, i = r.attributes, a = r.main, s = r.transform, o = r.styles, u = Yo(o);
      u.length > 0 && (i.style = u);
      var l;
      return nf(s) && (l = Rr("generateAbstractTransformGrouping", {
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
}, p1 = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return Jo({
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
              class: ["".concat(se.cssPrefix, "-layers")].concat(qa(a)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, m1 = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, s = n.classes, o = s === void 0 ? [] : s, u = n.attributes, l = u === void 0 ? {} : u, c = n.styles, f = c === void 0 ? {} : c;
        return Jo({
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
              classes: ["".concat(se.cssPrefix, "-layers-counter")].concat(qa(o))
            }
          });
        });
      }
    };
  }
}, v1 = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? hr : i, s = n.title, o = s === void 0 ? null : s, u = n.classes, l = u === void 0 ? [] : u, c = n.attributes, f = c === void 0 ? {} : c, h = n.styles, d = h === void 0 ? {} : h;
        return Jo({
          type: "text",
          content: r
        }, function() {
          return Vn("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Id({
            content: r,
            transform: re(re({}, hr), a),
            title: o,
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(se.cssPrefix, "-layers-text")].concat(qa(l))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, s = n.extra, o = null, u = null;
      if (vm) {
        var l = parseInt(getComputedStyle(r).fontSize, 10), c = r.getBoundingClientRect();
        o = c.width / l, u = c.height / l;
      }
      return se.autoA11y && !i && (s.attributes["aria-hidden"] = "true"), Promise.resolve([r, Id({
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
}, y1 = new RegExp('"', "ug"), Fd = [1105920, 1112319];
function g1(t) {
  var e = t.replace(y1, ""), r = Ab(e, 0), n = r >= Fd[0] && r <= Fd[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: jl(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Ld(t, e) {
  var r = "".concat(ob).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Li(t.children), s = a.filter(function(N) {
      return N.getAttribute($l) === e;
    })[0], o = on.getComputedStyle(t, e), u = o.getPropertyValue("font-family").match(db), l = o.getPropertyValue("font-weight"), c = o.getPropertyValue("content");
    if (s && !u)
      return t.removeChild(s), n();
    if (u && c !== "none" && c !== "") {
      var f = o.getPropertyValue("content"), h = ~["Sharp"].indexOf(u[2]) ? tt : Ye, d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? ka[h][u[2].toLowerCase()] : hb[h][l], p = g1(f), m = p.value, v = p.isSecondary, y = u[0].startsWith("FontAwesome"), g = sf(d, m), w = g;
      if (y) {
        var x = $b(m);
        x.iconName && x.prefix && (g = x.iconName, d = x.prefix);
      }
      if (g && !v && (!s || s.getAttribute(Xc) !== d || s.getAttribute(ef) !== w)) {
        t.setAttribute(r, w), s && t.removeChild(s);
        var b = u1(), S = b.extra;
        S.attributes[$l] = e, Ul(g, d).then(function(N) {
          var I = uf(re(re({}, b), {}, {
            icons: {
              main: N,
              mask: of()
            },
            prefix: d,
            iconName: w,
            extra: S,
            watchable: !0
          })), P = Ze.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(P, t.firstChild) : t.appendChild(P), P.outerHTML = I.map(function(z) {
            return Ba(z);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function b1(t) {
  return Promise.all([Ld(t, "::before"), Ld(t, "::after")]);
}
function w1(t) {
  return t.parentNode !== document.head && !~lb.indexOf(t.tagName.toUpperCase()) && !t.getAttribute($l) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function $d(t) {
  if (jr)
    return new Promise(function(e, r) {
      var n = Li(t.querySelectorAll("*")).filter(w1).map(b1), i = lf.begin("searchPseudoElements");
      Lm(), Promise.all(n).then(function() {
        i(), Hl(), e();
      }).catch(function() {
        i(), Hl(), r();
      });
    });
}
var E1 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = $d, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? Ze : n;
      se.searchPseudoElements && $d(i);
    };
  }
}, jd = !1, x1 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Lm(), jd = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Rd(zl("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        i1();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        jd ? Hl() : Rd(zl("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Vd = function(e) {
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
}, T1 = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Vd(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = Vd(i)), r;
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
        attributes: re({}, d.outer),
        children: [{
          tag: "g",
          attributes: re({}, d.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: re(re({}, n.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
}, ju = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function zd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function k1(t) {
  return t.tag === "g" ? t.children : [t];
}
var _1 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? Go(i.split(" ").map(function(s) {
          return s.trim();
        })) : of();
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
        attributes: re(re({}, ju), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map(zd)
      } : {}, v = {
        tag: "g",
        attributes: re({}, d.inner),
        children: [zd(re({
          tag: c.tag,
          attributes: re(re({}, c.attributes), d.path)
        }, m))]
      }, y = {
        tag: "g",
        attributes: re({}, d.outer),
        children: [v]
      }, g = "mask-".concat(o || Oa()), w = "clip-".concat(o || Oa()), x = {
        tag: "mask",
        attributes: re(re({}, ju), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, y]
      }, b = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: k1(h)
        }, x]
      };
      return n.push(b, {
        tag: "rect",
        attributes: re({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(g, ")")
        }, ju)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, S1 = {
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
        attributes: re(re({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = re(re({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: re(re({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || o.children.push({
        tag: "animate",
        attributes: re(re({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: re(re({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: re(re({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: re(re({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: re(re({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: re(re({}, s), {}, {
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
}, O1 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, C1 = [Ob, h1, p1, m1, v1, E1, x1, T1, _1, S1, O1];
zb(C1, {
  mixoutsTo: zt
});
zt.noAuto;
zt.config;
var I1 = zt.library;
zt.dom;
var Ql = zt.parse;
zt.findIconDefinition;
zt.toHtml;
var N1 = zt.icon;
zt.layer;
zt.text;
zt.counter;
var A1 = {
  prefix: "fas",
  iconName: "file-lines",
  icon: [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
}, D1 = {
  prefix: "fas",
  iconName: "circle-minus",
  icon: [512, 512, ["minus-circle"], "f056", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, R1 = {
  prefix: "fas",
  iconName: "face-smile-beam",
  icon: [512, 512, [128522, "smile-beam"], "f5b8", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]
}, P1 = {
  prefix: "fas",
  iconName: "reply",
  icon: [512, 512, [61714, "mail-reply"], "f3e5", "M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]
}, M1 = {
  prefix: "fas",
  iconName: "feather",
  icon: [512, 512, [129718], "f52d", "M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]
}, F1 = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]
}, L1 = {
  prefix: "fas",
  iconName: "wand-magic-sparkles",
  icon: [576, 512, ["magic-wand-sparkles"], "e2ca", "M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]
}, $1 = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
}, j1 = {
  prefix: "fas",
  iconName: "spell-check",
  icon: [576, 512, [], "f891", "M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"]
}, V1 = {
  prefix: "fas",
  iconName: "user-tie",
  icon: [448, 512, [], "f508", "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"]
}, z1 = {
  prefix: "fas",
  iconName: "language",
  icon: [640, 512, [], "f1ab", "M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"]
}, W1 = {
  prefix: "fas",
  iconName: "ellipsis",
  icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
}, q1 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, U1 = {
  prefix: "fas",
  iconName: "rotate",
  icon: [512, 512, [128260, "sync-alt"], "f2f1", "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"]
}, B1 = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, H1 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
};
I1.add(
  // Solid
  q1,
  D1,
  H1,
  W1,
  R1,
  M1,
  A1,
  z1,
  F1,
  P1,
  U1,
  j1,
  B1,
  $1,
  V1,
  L1
);
function jm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Yl = { exports: {} }, Qi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function Q1() {
  if (Wd)
    return Qi;
  Wd = 1;
  var t = H, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Qi.Fragment = r, Qi.jsx = s, Qi.jsxs = s, Qi;
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
var qd;
function Y1() {
  return qd || (qd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = H, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = Symbol.iterator, m = "@@iterator";
    function v(E) {
      if (E === null || typeof E != "object")
        return null;
      var L = p && E[p] || E[m];
      return typeof L == "function" ? L : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(E) {
      {
        for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), ge = 1; ge < L; ge++)
          G[ge - 1] = arguments[ge];
        w("error", E, G);
      }
    }
    function w(E, L, G) {
      {
        var ge = y.ReactDebugCurrentFrame, $e = ge.getStackAddendum();
        $e !== "" && (L += "%s", G = G.concat([$e]));
        var Be = G.map(function(Ae) {
          return String(Ae);
        });
        Be.unshift("Warning: " + L), Function.prototype.apply.call(console[E], console, Be);
      }
    }
    var x = !1, b = !1, S = !1, N = !1, I = !1, P;
    P = Symbol.for("react.module.reference");
    function z(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === n || E === a || I || E === i || E === l || E === c || N || E === d || x || b || S || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === f || E.$$typeof === s || E.$$typeof === o || E.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === P || E.getModuleId !== void 0));
    }
    function Q(E, L, G) {
      var ge = E.displayName;
      if (ge)
        return ge;
      var $e = L.displayName || L.name || "";
      return $e !== "" ? G + "(" + $e + ")" : G;
    }
    function D(E) {
      return E.displayName || "Context";
    }
    function R(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
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
            return D(L) + ".Consumer";
          case s:
            var G = E;
            return D(G._context) + ".Provider";
          case u:
            return Q(E, E.render, "ForwardRef");
          case f:
            var ge = E.displayName || null;
            return ge !== null ? ge : R(E.type) || "Memo";
          case h: {
            var $e = E, Be = $e._payload, Ae = $e._init;
            try {
              return R(Ae(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, U = 0, M, $, ve, j, O, F, ee;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function oe() {
      {
        if (U === 0) {
          M = console.log, $ = console.info, ve = console.warn, j = console.error, O = console.group, F = console.groupCollapsed, ee = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        U++;
      }
    }
    function _e() {
      {
        if (U--, U === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, E, {
              value: M
            }),
            info: q({}, E, {
              value: $
            }),
            warn: q({}, E, {
              value: ve
            }),
            error: q({}, E, {
              value: j
            }),
            group: q({}, E, {
              value: O
            }),
            groupCollapsed: q({}, E, {
              value: F
            }),
            groupEnd: q({}, E, {
              value: ee
            })
          });
        }
        U < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = y.ReactCurrentDispatcher, de;
    function me(E, L, G) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch ($e) {
            var ge = $e.stack.trim().match(/\n( *(at )?)/);
            de = ge && ge[1] || "";
          }
        return `
` + de + E;
      }
    }
    var Ce = !1, ke;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new dt();
    }
    function Z(E, L) {
      if (!E || Ce)
        return "";
      {
        var G = ke.get(E);
        if (G !== void 0)
          return G;
      }
      var ge;
      Ce = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = he.current, he.current = null, oe();
      try {
        if (L) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (Rt) {
              ge = Rt;
            }
            Reflect.construct(E, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (Rt) {
              ge = Rt;
            }
            E.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            ge = Rt;
          }
          E();
        }
      } catch (Rt) {
        if (Rt && ge && typeof Rt.stack == "string") {
          for (var Ie = Rt.stack.split(`
`), St = ge.stack.split(`
`), at = Ie.length - 1, ut = St.length - 1; at >= 1 && ut >= 0 && Ie[at] !== St[ut]; )
            ut--;
          for (; at >= 1 && ut >= 0; at--, ut--)
            if (Ie[at] !== St[ut]) {
              if (at !== 1 || ut !== 1)
                do
                  if (at--, ut--, ut < 0 || Ie[at] !== St[ut]) {
                    var Wt = `
` + Ie[at].replace(" at new ", " at ");
                    return E.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", E.displayName)), typeof E == "function" && ke.set(E, Wt), Wt;
                  }
                while (at >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, he.current = Be, _e(), Error.prepareStackTrace = $e;
      }
      var Kn = E ? E.displayName || E.name : "", wn = Kn ? me(Kn) : "";
      return typeof E == "function" && ke.set(E, wn), wn;
    }
    function _t(E, L, G) {
      return Z(E, !1);
    }
    function Er(E) {
      var L = E.prototype;
      return !!(L && L.isReactComponent);
    }
    function zr(E, L, G) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Z(E, Er(E));
      if (typeof E == "string")
        return me(E);
      switch (E) {
        case l:
          return me("Suspense");
        case c:
          return me("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case u:
            return _t(E.render);
          case f:
            return zr(E.type, L, G);
          case h: {
            var ge = E, $e = ge._payload, Be = ge._init;
            try {
              return zr(Be($e), L, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Zn = Object.prototype.hasOwnProperty, Iu = {}, T = y.ReactDebugCurrentFrame;
    function _(E) {
      if (E) {
        var L = E._owner, G = zr(E.type, E._source, L ? L.type : null);
        T.setExtraStackFrame(G);
      } else
        T.setExtraStackFrame(null);
    }
    function C(E, L, G, ge, $e) {
      {
        var Be = Function.call.bind(Zn);
        for (var Ae in E)
          if (Be(E, Ae)) {
            var Ie = void 0;
            try {
              if (typeof E[Ae] != "function") {
                var St = Error((ge || "React class") + ": " + G + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              Ie = E[Ae](L, Ae, ge, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              Ie = at;
            }
            Ie && !(Ie instanceof Error) && (_($e), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", G, Ae, typeof Ie), _(null)), Ie instanceof Error && !(Ie.message in Iu) && (Iu[Ie.message] = !0, _($e), g("Failed %s type: %s", G, Ie.message), _(null));
          }
      }
    }
    var K = Array.isArray;
    function B(E) {
      return K(E);
    }
    function W(E) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return G;
      }
    }
    function ce(E) {
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
      if (ce(E))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", W(E)), Me(E);
    }
    var ht = y.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cs, Gn, bn;
    bn = {};
    function Nu(E) {
      if (Zn.call(E, "ref")) {
        var L = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function fs(E) {
      if (Zn.call(E, "key")) {
        var L = Object.getOwnPropertyDescriptor(E, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Au(E, L) {
      if (typeof E.ref == "string" && ht.current && L && ht.current.stateNode !== L) {
        var G = R(ht.current.type);
        bn[G] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(ht.current.type), E.ref), bn[G] = !0);
      }
    }
    function ds(E, L) {
      {
        var G = function() {
          cs || (cs = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function R0(E, L) {
      {
        var G = function() {
          Gn || (Gn = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var P0 = function(E, L, G, ge, $e, Be, Ae) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: E,
        key: L,
        ref: G,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Be
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
        value: ge
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function M0(E, L, G, ge, $e) {
      {
        var Be, Ae = {}, Ie = null, St = null;
        G !== void 0 && (it(G), Ie = "" + G), fs(L) && (it(L.key), Ie = "" + L.key), Nu(L) && (St = L.ref, Au(L, $e));
        for (Be in L)
          Zn.call(L, Be) && !Wr.hasOwnProperty(Be) && (Ae[Be] = L[Be]);
        if (E && E.defaultProps) {
          var at = E.defaultProps;
          for (Be in at)
            Ae[Be] === void 0 && (Ae[Be] = at[Be]);
        }
        if (Ie || St) {
          var ut = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ie && ds(Ae, ut), St && R0(Ae, ut);
        }
        return P0(E, Ie, St, $e, ge, ht.current, Ae);
      }
    }
    var Du = y.ReactCurrentOwner, cd = y.ReactDebugCurrentFrame;
    function Jn(E) {
      if (E) {
        var L = E._owner, G = zr(E.type, E._source, L ? L.type : null);
        cd.setExtraStackFrame(G);
      } else
        cd.setExtraStackFrame(null);
    }
    var Ru;
    Ru = !1;
    function Pu(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function fd() {
      {
        if (Du.current) {
          var E = R(Du.current.type);
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
    var dd = {};
    function L0(E) {
      {
        var L = fd();
        if (!L) {
          var G = typeof E == "string" ? E : E.displayName || E.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
    }
    function hd(E, L) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var G = L0(L);
        if (dd[G])
          return;
        dd[G] = !0;
        var ge = "";
        E && E._owner && E._owner !== Du.current && (ge = " It was passed a child from " + R(E._owner.type) + "."), Jn(E), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ge), Jn(null);
      }
    }
    function pd(E, L) {
      {
        if (typeof E != "object")
          return;
        if (B(E))
          for (var G = 0; G < E.length; G++) {
            var ge = E[G];
            Pu(ge) && hd(ge, L);
          }
        else if (Pu(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var $e = v(E);
          if (typeof $e == "function" && $e !== E.entries)
            for (var Be = $e.call(E), Ae; !(Ae = Be.next()).done; )
              Pu(Ae.value) && hd(Ae.value, L);
        }
      }
    }
    function $0(E) {
      {
        var L = E.type;
        if (L == null || typeof L == "string")
          return;
        var G;
        if (typeof L == "function")
          G = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === f))
          G = L.propTypes;
        else
          return;
        if (G) {
          var ge = R(L);
          C(G, E.props, "prop", ge, E);
        } else if (L.PropTypes !== void 0 && !Ru) {
          Ru = !0;
          var $e = R(L);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function j0(E) {
      {
        for (var L = Object.keys(E.props), G = 0; G < L.length; G++) {
          var ge = L[G];
          if (ge !== "children" && ge !== "key") {
            Jn(E), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), Jn(null);
            break;
          }
        }
        E.ref !== null && (Jn(E), g("Invalid attribute `ref` supplied to `React.Fragment`."), Jn(null));
      }
    }
    var md = {};
    function vd(E, L, G, ge, $e, Be) {
      {
        var Ae = z(E);
        if (!Ae) {
          var Ie = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = F0();
          St ? Ie += St : Ie += fd();
          var at;
          E === null ? at = "null" : B(E) ? at = "array" : E !== void 0 && E.$$typeof === e ? (at = "<" + (R(E.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : at = typeof E, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, Ie);
        }
        var ut = M0(E, L, G, $e, Be);
        if (ut == null)
          return ut;
        if (Ae) {
          var Wt = L.children;
          if (Wt !== void 0)
            if (ge)
              if (B(Wt)) {
                for (var Kn = 0; Kn < Wt.length; Kn++)
                  pd(Wt[Kn], E);
                Object.freeze && Object.freeze(Wt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pd(Wt, E);
        }
        if (Zn.call(L, "key")) {
          var wn = R(E), Rt = Object.keys(L).filter(function(B0) {
            return B0 !== "key";
          }), Mu = Rt.length > 0 ? "{key: someKey, " + Rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!md[wn + Mu]) {
            var U0 = Rt.length > 0 ? "{" + Rt.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mu, wn, U0, wn), md[wn + Mu] = !0;
          }
        }
        return E === n ? j0(ut) : $0(ut), ut;
      }
    }
    function V0(E, L, G) {
      return vd(E, L, G, !0);
    }
    function z0(E, L, G) {
      return vd(E, L, G, !1);
    }
    var W0 = z0, q0 = V0;
    Yi.Fragment = n, Yi.jsx = W0, Yi.jsxs = q0;
  }()), Yi;
}
process.env.NODE_ENV === "production" ? Yl.exports = Q1() : Yl.exports = Y1();
var X = Yl.exports;
function Vm(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = Vm(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function en() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = Vm(t)) && (n && (n += " "), n += e);
  return n;
}
const da = (t) => typeof t == "number" && !isNaN(t), zn = (t) => typeof t == "string", Mt = (t) => typeof t == "function", Us = (t) => zn(t) || Mt(t) ? t : null, Vu = (t) => $n(t) || zn(t) || Mt(t) || da(t);
function Z1(t, e, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: i } = t;
  requestAnimationFrame(() => {
    i.minHeight = "initial", i.height = n + "px", i.transition = `all ${r}ms`, requestAnimationFrame(() => {
      i.height = "0", i.padding = "0", i.margin = "0", setTimeout(e, r);
    });
  });
}
function Ko(t) {
  let { enter: e, exit: r, appendPosition: n = !1, collapse: i = !0, collapseDuration: a = 300 } = t;
  return function(s) {
    let { children: o, position: u, preventExitTransition: l, done: c, nodeRef: f, isIn: h } = s;
    const d = n ? `${e}--${u}` : e, p = n ? `${r}--${u}` : r, m = xe(0);
    return Qo(() => {
      const v = f.current, y = d.split(" "), g = (w) => {
        w.target === f.current && (v.dispatchEvent(new Event("d")), v.removeEventListener("animationend", g), v.removeEventListener("animationcancel", g), m.current === 0 && w.type !== "animationcancel" && v.classList.remove(...y));
      };
      v.classList.add(...y), v.addEventListener("animationend", g), v.addEventListener("animationcancel", g);
    }, []), Le(() => {
      const v = f.current, y = () => {
        v.removeEventListener("animationend", y), i ? Z1(v, c, a) : c();
      };
      h || (l ? y() : (m.current = 1, v.className += ` ${p}`, v.addEventListener("animationend", y)));
    }, [h]), H.createElement(H.Fragment, null, o);
  };
}
function Ud(t, e) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: e } : {};
}
const Bt = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t, e) {
  return this.list.has(t) || this.list.set(t, []), this.list.get(t).push(e), this;
}, off(t, e) {
  if (e) {
    const r = this.list.get(t).filter((n) => n !== e);
    return this.list.set(t, r), this;
  }
  return this.list.delete(t), this;
}, cancelEmit(t) {
  const e = this.emitQueue.get(t);
  return e && (e.forEach(clearTimeout), this.emitQueue.delete(t)), this;
}, emit(t) {
  this.list.has(t) && this.list.get(t).forEach((e) => {
    const r = setTimeout(() => {
      e(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t) || this.emitQueue.set(t, []), this.emitQueue.get(t).push(r);
  });
} }, xs = (t) => {
  let { theme: e, type: r, ...n } = t;
  return H.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, zu = { info: function(t) {
  return H.createElement(xs, { ...t }, H.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return H.createElement(xs, { ...t }, H.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return H.createElement(xs, { ...t }, H.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return H.createElement(xs, { ...t }, H.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return H.createElement("div", { className: "Toastify__spinner" });
} };
function G1(t) {
  const [, e] = Gc((d) => d + 1, 0), [r, n] = Je([]), i = xe(null), a = xe(/* @__PURE__ */ new Map()).current, s = (d) => r.indexOf(d) !== -1, o = xe({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t, containerId: null, isToastActive: s, getToast: (d) => a.get(d) }).current;
  function u(d) {
    let { containerId: p } = d;
    const { limit: m } = o.props;
    !m || p && o.containerId !== p || (o.count -= o.queue.length, o.queue = []);
  }
  function l(d) {
    n((p) => d == null ? [] : p.filter((m) => m !== d));
  }
  function c() {
    const { toastContent: d, toastProps: p, staleId: m } = o.queue.shift();
    h(d, p, m);
  }
  function f(d, p) {
    let { delay: m, staleId: v, ...y } = p;
    if (!Vu(d) || function(D) {
      return !i.current || o.props.enableMultiContainer && D.containerId !== o.props.containerId || a.has(D.toastId) && D.updateId == null;
    }(y))
      return;
    const { toastId: g, updateId: w, data: x } = y, { props: b } = o, S = () => l(g), N = w == null;
    N && o.count++;
    const I = { ...b, style: b.toastStyle, key: o.toastKey++, ...Object.fromEntries(Object.entries(y).filter((D) => {
      let [R, q] = D;
      return q != null;
    })), toastId: g, updateId: w, data: x, closeToast: S, isIn: !1, className: Us(y.className || b.toastClassName), bodyClassName: Us(y.bodyClassName || b.bodyClassName), progressClassName: Us(y.progressClassName || b.progressClassName), autoClose: !y.isLoading && (P = y.autoClose, z = b.autoClose, P === !1 || da(P) && P > 0 ? P : z), deleteToast() {
      const D = Ud(a.get(g), "removed");
      a.delete(g), Bt.emit(4, D);
      const R = o.queue.length;
      if (o.count = g == null ? o.count - o.displayedToast : o.count - 1, o.count < 0 && (o.count = 0), R > 0) {
        const q = g == null ? o.props.limit : 1;
        if (R === 1 || q === 1)
          o.displayedToast++, c();
        else {
          const U = q > R ? R : q;
          o.displayedToast = U;
          for (let M = 0; M < U; M++)
            c();
        }
      } else
        e();
    } };
    var P, z;
    I.iconOut = function(D) {
      let { theme: R, type: q, isLoading: U, icon: M } = D, $ = null;
      const ve = { theme: R, type: q };
      return M === !1 || (Mt(M) ? $ = M(ve) : $n(M) ? $ = no(M, ve) : zn(M) || da(M) ? $ = M : U ? $ = zu.spinner() : ((j) => j in zu)(q) && ($ = zu[q](ve))), $;
    }(I), Mt(y.onOpen) && (I.onOpen = y.onOpen), Mt(y.onClose) && (I.onClose = y.onClose), I.closeButton = b.closeButton, y.closeButton === !1 || Vu(y.closeButton) ? I.closeButton = y.closeButton : y.closeButton === !0 && (I.closeButton = !Vu(b.closeButton) || b.closeButton);
    let Q = d;
    $n(d) && !zn(d.type) ? Q = no(d, { closeToast: S, toastProps: I, data: x }) : Mt(d) && (Q = d({ closeToast: S, toastProps: I, data: x })), b.limit && b.limit > 0 && o.count > b.limit && N ? o.queue.push({ toastContent: Q, toastProps: I, staleId: v }) : da(m) ? setTimeout(() => {
      h(Q, I, v);
    }, m) : h(Q, I, v);
  }
  function h(d, p, m) {
    const { toastId: v } = p;
    m && a.delete(m);
    const y = { content: d, props: p };
    a.set(v, y), n((g) => [...g, v].filter((w) => w !== m)), Bt.emit(4, Ud(y, y.props.updateId == null ? "added" : "updated"));
  }
  return Le(() => (o.containerId = t.containerId, Bt.cancelEmit(3).on(0, f).on(1, (d) => i.current && l(d)).on(5, u).emit(2, o), () => {
    a.clear(), Bt.emit(3, o);
  }), []), Le(() => {
    o.props = t, o.isToastActive = s, o.displayedToast = r.length;
  }), { getToastToRender: function(d) {
    const p = /* @__PURE__ */ new Map(), m = Array.from(a.values());
    return t.newestOnTop && m.reverse(), m.forEach((v) => {
      const { position: y } = v.props;
      p.has(y) || p.set(y, []), p.get(y).push(v);
    }), Array.from(p, (v) => d(v[0], v[1]));
  }, containerRef: i, isToastActive: s };
}
function Bd(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function Hd(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function J1(t) {
  const [e, r] = Je(!1), [n, i] = Je(!1), a = xe(null), s = xe({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, o = xe(t), { autoClose: u, pauseOnHover: l, closeToast: c, onClick: f, closeOnClick: h } = t;
  function d(x) {
    if (t.draggable) {
      x.nativeEvent.type === "touchstart" && x.nativeEvent.preventDefault(), s.didMove = !1, document.addEventListener("mousemove", y), document.addEventListener("mouseup", g), document.addEventListener("touchmove", y), document.addEventListener("touchend", g);
      const b = a.current;
      s.canCloseOnClick = !0, s.canDrag = !0, s.boundingRect = b.getBoundingClientRect(), b.style.transition = "", s.x = Bd(x.nativeEvent), s.y = Hd(x.nativeEvent), t.draggableDirection === "x" ? (s.start = s.x, s.removalDistance = b.offsetWidth * (t.draggablePercent / 100)) : (s.start = s.y, s.removalDistance = b.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent / 100));
    }
  }
  function p(x) {
    if (s.boundingRect) {
      const { top: b, bottom: S, left: N, right: I } = s.boundingRect;
      x.nativeEvent.type !== "touchend" && t.pauseOnHover && s.x >= N && s.x <= I && s.y >= b && s.y <= S ? v() : m();
    }
  }
  function m() {
    r(!0);
  }
  function v() {
    r(!1);
  }
  function y(x) {
    const b = a.current;
    s.canDrag && b && (s.didMove = !0, e && v(), s.x = Bd(x), s.y = Hd(x), s.delta = t.draggableDirection === "x" ? s.x - s.start : s.y - s.start, s.start !== s.x && (s.canCloseOnClick = !1), b.style.transform = `translate${t.draggableDirection}(${s.delta}px)`, b.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)));
  }
  function g() {
    document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", g), document.removeEventListener("touchmove", y), document.removeEventListener("touchend", g);
    const x = a.current;
    if (s.canDrag && s.didMove && x) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance)
        return i(!0), void t.closeToast();
      x.style.transition = "transform 0.2s, opacity 0.2s", x.style.transform = `translate${t.draggableDirection}(0)`, x.style.opacity = "1";
    }
  }
  Le(() => {
    o.current = t;
  }), Le(() => (a.current && a.current.addEventListener("d", m, { once: !0 }), Mt(t.onOpen) && t.onOpen($n(t.children) && t.children.props), () => {
    const x = o.current;
    Mt(x.onClose) && x.onClose($n(x.children) && x.children.props);
  }), []), Le(() => (t.pauseOnFocusLoss && (document.hasFocus() || v(), window.addEventListener("focus", m), window.addEventListener("blur", v)), () => {
    t.pauseOnFocusLoss && (window.removeEventListener("focus", m), window.removeEventListener("blur", v));
  }), [t.pauseOnFocusLoss]);
  const w = { onMouseDown: d, onTouchStart: d, onMouseUp: p, onTouchEnd: p };
  return u && l && (w.onMouseEnter = v, w.onMouseLeave = m), h && (w.onClick = (x) => {
    f && f(x), s.canCloseOnClick && c();
  }), { playToast: m, pauseToast: v, isRunning: e, preventExitTransition: n, toastRef: a, eventHandlers: w };
}
function zm(t) {
  let { closeToast: e, theme: r, ariaLabel: n = "close" } = t;
  return H.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (i) => {
    i.stopPropagation(), e(i);
  }, "aria-label": n }, H.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, H.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function K1(t) {
  let { delay: e, isRunning: r, closeToast: n, type: i = "default", hide: a, className: s, style: o, controlledProgress: u, progress: l, rtl: c, isIn: f, theme: h } = t;
  const d = a || u && l === 0, p = { ...o, animationDuration: `${e}ms`, animationPlayState: r ? "running" : "paused", opacity: d ? 0 : 1 };
  u && (p.transform = `scaleX(${l})`);
  const m = en("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${h}`, `Toastify__progress-bar--${i}`, { "Toastify__progress-bar--rtl": c }), v = Mt(s) ? s({ rtl: c, type: i, defaultClassName: m }) : en(m, s);
  return H.createElement("div", { role: "progressbar", "aria-hidden": d ? "true" : "false", "aria-label": "notification timer", className: v, style: p, [u && l >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && l < 1 ? null : () => {
    f && n();
  } });
}
const X1 = (t) => {
  const { isRunning: e, preventExitTransition: r, toastRef: n, eventHandlers: i } = J1(t), { closeButton: a, children: s, autoClose: o, onClick: u, type: l, hideProgressBar: c, closeToast: f, transition: h, position: d, className: p, style: m, bodyClassName: v, bodyStyle: y, progressClassName: g, progressStyle: w, updateId: x, role: b, progress: S, rtl: N, toastId: I, deleteToast: P, isIn: z, isLoading: Q, iconOut: D, closeOnClick: R, theme: q } = t, U = en("Toastify__toast", `Toastify__toast-theme--${q}`, `Toastify__toast--${l}`, { "Toastify__toast--rtl": N }, { "Toastify__toast--close-on-click": R }), M = Mt(p) ? p({ rtl: N, position: d, type: l, defaultClassName: U }) : en(U, p), $ = !!S || !o, ve = { closeToast: f, type: l, theme: q };
  let j = null;
  return a === !1 || (j = Mt(a) ? a(ve) : $n(a) ? no(a, ve) : zm(ve)), H.createElement(h, { isIn: z, done: P, position: d, preventExitTransition: r, nodeRef: n }, H.createElement("div", { id: I, onClick: u, className: M, ...i, style: m, ref: n }, H.createElement("div", { ...z && { role: b }, className: Mt(v) ? v({ type: l }) : en("Toastify__toast-body", v), style: y }, D != null && H.createElement("div", { className: en("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !Q }) }, D), H.createElement("div", null, s)), j, H.createElement(K1, { ...x && !$ ? { key: `pb-${x}` } : {}, rtl: N, theme: q, delay: o, isRunning: e, isIn: z, closeToast: f, hide: c, type: l, style: w, className: g, controlledProgress: $, progress: S || 0 })));
}, Xo = function(t, e) {
  return e === void 0 && (e = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e };
}, ew = Ko(Xo("bounce", !0));
Ko(Xo("slide", !0));
Ko(Xo("zoom"));
Ko(Xo("flip"));
const Zl = Ho((t, e) => {
  const { getToastToRender: r, containerRef: n, isToastActive: i } = G1(t), { className: a, style: s, rtl: o, containerId: u } = t;
  function l(c) {
    const f = en("Toastify__toast-container", `Toastify__toast-container--${c}`, { "Toastify__toast-container--rtl": o });
    return Mt(a) ? a({ position: c, rtl: o, defaultClassName: f }) : en(f, Us(a));
  }
  return Le(() => {
    e && (e.current = n.current);
  }, []), H.createElement("div", { ref: n, className: "Toastify", id: u }, r((c, f) => {
    const h = f.length ? { ...s } : { ...s, pointerEvents: "none" };
    return H.createElement("div", { className: l(c), style: h, key: `container-${c}` }, f.map((d, p) => {
      let { content: m, props: v } = d;
      return H.createElement(X1, { ...v, isIn: i(v.toastId), style: { ...v.style, "--nth": p + 1, "--len": f.length }, key: `toast-${v.key}` }, m);
    }));
  }));
});
Zl.displayName = "ToastContainer", Zl.defaultProps = { position: "top-right", transition: ew, autoClose: 5e3, closeButton: zm, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Wu, Tn = /* @__PURE__ */ new Map(), ia = [], tw = 1;
function Wm() {
  return "" + tw++;
}
function rw(t) {
  return t && (zn(t.toastId) || da(t.toastId)) ? t.toastId : Wm();
}
function ha(t, e) {
  return Tn.size > 0 ? Bt.emit(0, t, e) : ia.push({ content: t, options: e }), e.toastId;
}
function lo(t, e) {
  return { ...e, type: e && e.type || t, toastId: rw(e) };
}
function Ts(t) {
  return (e, r) => ha(e, lo(t, r));
}
function Ge(t, e) {
  return ha(t, lo("default", e));
}
Ge.loading = (t, e) => ha(t, lo("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), Ge.promise = function(t, e, r) {
  let n, { pending: i, error: a, success: s } = e;
  i && (n = zn(i) ? Ge.loading(i, r) : Ge.loading(i.render, { ...r, ...i }));
  const o = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, u = (c, f, h) => {
    if (f == null)
      return void Ge.dismiss(n);
    const d = { type: c, ...o, ...r, data: h }, p = zn(f) ? { render: f } : f;
    return n ? Ge.update(n, { ...d, ...p }) : Ge(p.render, { ...d, ...p }), h;
  }, l = Mt(t) ? t() : t;
  return l.then((c) => u("success", s, c)).catch((c) => u("error", a, c)), l;
}, Ge.success = Ts("success"), Ge.info = Ts("info"), Ge.error = Ts("error"), Ge.warning = Ts("warning"), Ge.warn = Ge.warning, Ge.dark = (t, e) => ha(t, lo("default", { theme: "dark", ...e })), Ge.dismiss = (t) => {
  Tn.size > 0 ? Bt.emit(1, t) : ia = ia.filter((e) => t != null && e.options.toastId !== t);
}, Ge.clearWaitingQueue = function(t) {
  return t === void 0 && (t = {}), Bt.emit(5, t);
}, Ge.isActive = (t) => {
  let e = !1;
  return Tn.forEach((r) => {
    r.isToastActive && r.isToastActive(t) && (e = !0);
  }), e;
}, Ge.update = function(t, e) {
  e === void 0 && (e = {}), setTimeout(() => {
    const r = function(n, i) {
      let { containerId: a } = i;
      const s = Tn.get(a || Wu);
      return s && s.getToast(n);
    }(t, e);
    if (r) {
      const { props: n, content: i } = r, a = { delay: 100, ...n, ...e, toastId: e.toastId || t, updateId: Wm() };
      a.toastId !== t && (a.staleId = t);
      const s = a.render || i;
      delete a.render, ha(s, a);
    }
  }, 0);
}, Ge.done = (t) => {
  Ge.update(t, { progress: 1 });
}, Ge.onChange = (t) => (Bt.on(4, t), () => {
  Bt.off(4, t);
}), Ge.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Ge.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, Bt.on(2, (t) => {
  Wu = t.containerId || t, Tn.set(Wu, t), ia.forEach((e) => {
    Bt.emit(0, e.content, e.options);
  }), ia = [];
}).on(3, (t) => {
  Tn.delete(t.containerId || t), Tn.size === 0 && Bt.off(0).off(1).off(5);
});
class Qn extends Error {
}
class nw extends Qn {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class iw extends Qn {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class aw extends Qn {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class ui extends Qn {
}
class qm extends Qn {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class Pt extends Qn {
}
class Ur extends Qn {
  constructor() {
    super("Zone is an abstract class");
  }
}
const Y = "numeric", or = "short", jt = "long", co = {
  year: Y,
  month: Y,
  day: Y
}, Um = {
  year: Y,
  month: or,
  day: Y
}, sw = {
  year: Y,
  month: or,
  day: Y,
  weekday: or
}, Bm = {
  year: Y,
  month: jt,
  day: Y
}, Hm = {
  year: Y,
  month: jt,
  day: Y,
  weekday: jt
}, Qm = {
  hour: Y,
  minute: Y
}, Ym = {
  hour: Y,
  minute: Y,
  second: Y
}, Zm = {
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: or
}, Gm = {
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: jt
}, Jm = {
  hour: Y,
  minute: Y,
  hourCycle: "h23"
}, Km = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23"
}, Xm = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23",
  timeZoneName: or
}, ev = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23",
  timeZoneName: jt
}, tv = {
  year: Y,
  month: Y,
  day: Y,
  hour: Y,
  minute: Y
}, rv = {
  year: Y,
  month: Y,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y
}, nv = {
  year: Y,
  month: or,
  day: Y,
  hour: Y,
  minute: Y
}, iv = {
  year: Y,
  month: or,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y
}, ow = {
  year: Y,
  month: or,
  day: Y,
  weekday: or,
  hour: Y,
  minute: Y
}, av = {
  year: Y,
  month: jt,
  day: Y,
  hour: Y,
  minute: Y,
  timeZoneName: or
}, sv = {
  year: Y,
  month: jt,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: or
}, ov = {
  year: Y,
  month: jt,
  day: Y,
  weekday: jt,
  hour: Y,
  minute: Y,
  timeZoneName: jt
}, uv = {
  year: Y,
  month: jt,
  day: Y,
  weekday: jt,
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: jt
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
let qu = null;
class eu extends Ha {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return qu === null && (qu = new eu()), qu;
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
    return pa(this.offset(e), r);
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
function uw(t) {
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
const lw = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function cw(t, e) {
  const r = t.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, i, a, s, o, u, l, c] = n;
  return [s, i, a, o, u, l, c];
}
function fw(t, e) {
  const r = t.formatToParts(e), n = [];
  for (let i = 0; i < r.length; i++) {
    const { type: a, value: s } = r[i], o = lw[a];
    a === "era" ? n[o] = s : we(o) || (n[o] = parseInt(s, 10));
  }
  return n;
}
let ks = {};
class Pr extends Ha {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return ks[e] || (ks[e] = new Pr(e)), ks[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ks = {}, Bs = {};
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
    return pa(this.offset(e), r);
  }
  /** @override **/
  offset(e) {
    const r = new Date(e);
    if (isNaN(r))
      return NaN;
    const n = uw(this.name);
    let [i, a, s, o, u, l, c] = n.formatToParts ? fw(n, r) : cw(n, r);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = ru({
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
let Qd = {};
function dw(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Qd[r];
  return n || (n = new Intl.ListFormat(t, e), Qd[r] = n), n;
}
let Gl = {};
function Jl(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Gl[r];
  return n || (n = new Intl.DateTimeFormat(t, e), Gl[r] = n), n;
}
let Kl = {};
function hw(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Kl[r];
  return n || (n = new Intl.NumberFormat(t, e), Kl[r] = n), n;
}
let Xl = {};
function pw(t, e = {}) {
  const { base: r, ...n } = e, i = JSON.stringify([t, n]);
  let a = Xl[i];
  return a || (a = new Intl.RelativeTimeFormat(t, e), Xl[i] = a), a;
}
let aa = null;
function mw() {
  return aa || (aa = new Intl.DateTimeFormat().resolvedOptions().locale, aa);
}
let Yd = {};
function vw(t) {
  let e = Yd[t];
  if (!e) {
    const r = new Intl.Locale(t);
    e = "getWeekInfo" in r ? r.getWeekInfo() : r.weekInfo, Yd[t] = e;
  }
  return e;
}
function yw(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const r = t.indexOf("-u-");
  if (r === -1)
    return [t];
  {
    let n, i;
    try {
      n = Jl(t).resolvedOptions(), i = t;
    } catch {
      const u = t.substring(0, r);
      n = Jl(u).resolvedOptions(), i = u;
    }
    const { numberingSystem: a, calendar: s } = n;
    return [i, a, s];
  }
}
function gw(t, e, r) {
  return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t;
}
function bw(t) {
  const e = [];
  for (let r = 1; r <= 12; r++) {
    const n = Ee.utc(2009, r, 1);
    e.push(t(n));
  }
  return e;
}
function ww(t) {
  const e = [];
  for (let r = 1; r <= 7; r++) {
    const n = Ee.utc(2016, 11, 13 + r);
    e.push(t(n));
  }
  return e;
}
function _s(t, e, r, n) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? r(e) : n(e);
}
function Ew(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class xw {
  constructor(e, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const { padTo: i, floor: a, ...s } = n;
    if (!r || Object.keys(s).length > 0) {
      const o = { useGrouping: !1, ...n };
      n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = hw(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const r = this.floor ? Math.floor(e) : e;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(e) : pf(e, 3);
      return ct(r, this.padTo);
    }
  }
}
class Tw {
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
    a.timeZone = a.timeZone || i, this.dtf = Jl(r, a);
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
class kw {
  constructor(e, r, n) {
    this.opts = { style: "long", ...n }, !r && mv() && (this.rtf = pw(e, n));
  }
  format(e, r) {
    return this.rtf ? this.rtf.format(e, r) : Uw(r, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, r) {
    return this.rtf ? this.rtf.formatToParts(e, r) : [];
  }
}
const _w = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Ue {
  static fromOpts(e) {
    return Ue.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, r, n, i, a = !1) {
    const s = e || st.defaultLocale, o = s || (a ? "en-US" : mw()), u = r || st.defaultNumberingSystem, l = n || st.defaultOutputCalendar, c = ec(i) || st.defaultWeekSettings;
    return new Ue(o, u, l, c, s);
  }
  static resetCache() {
    aa = null, Gl = {}, Kl = {}, Xl = {};
  }
  static fromObject({ locale: e, numberingSystem: r, outputCalendar: n, weekSettings: i } = {}) {
    return Ue.create(e, r, n, i);
  }
  constructor(e, r, n, i, a) {
    const [s, o, u] = yw(e);
    this.locale = s, this.numberingSystem = r || o || null, this.outputCalendar = n || u || null, this.weekSettings = i, this.intl = gw(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = a, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Ew(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && r ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Ue.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      ec(e.weekSettings) || this.weekSettings,
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
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = bw((a) => this.extract(a, n, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, r = !1) {
    return _s(this, e, Tv, () => {
      const n = r ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = r ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = ww(
        (a) => this.extract(a, n, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return _s(
      this,
      void 0,
      () => kv,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [Ee.utc(2016, 11, 13, 9), Ee.utc(2016, 11, 13, 19)].map(
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
      return this.eraCache[e] || (this.eraCache[e] = [Ee.utc(-40, 1, 1), Ee.utc(2017, 1, 1)].map(
        (n) => this.extract(n, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, r, n) {
    const i = this.dtFormatter(e, r), a = i.formatToParts(), s = a.find((o) => o.type.toLowerCase() === n);
    return s ? s.value : null;
  }
  numberFormatter(e = {}) {
    return new xw(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, r = {}) {
    return new Tw(e, this.intl, r);
  }
  relFormatter(e = {}) {
    return new kw(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return dw(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : vv() ? vw(this.locale) : _w;
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
let Uu = null;
class It extends Ha {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Uu === null && (Uu = new It(0)), Uu;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? It.utcInstance : new It(e);
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
        return new It(nu(r[1], r[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${pa(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${pa(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, r) {
    return pa(this.fixed, r);
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
class Sw extends Ha {
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
  if (we(t) || t === null)
    return e;
  if (t instanceof Ha)
    return t;
  if (Iw(t)) {
    const r = t.toLowerCase();
    return r === "default" ? e : r === "local" || r === "system" ? eu.instance : r === "utc" || r === "gmt" ? It.utcInstance : It.parseSpecifier(r) || Pr.create(t);
  } else
    return Fn(t) ? It.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Sw(t);
}
let Zd = () => Date.now(), Gd = "system", Jd = null, Kd = null, Xd = null, eh = 60, th, rh = null;
class st {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Zd;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Zd = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Gd = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Xr(Gd, eu.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Jd;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Jd = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Kd;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Kd = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Xd;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Xd = e;
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
    return rh;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    rh = ec(e);
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return eh;
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
    eh = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return th;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    th = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Ue.resetCache(), Pr.resetCache();
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
function Qt(t, e) {
  return new ar(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function ff(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && t >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const i = n.getUTCDay();
  return i === 0 ? 7 : i;
}
function fv(t, e, r) {
  return r + (Qa(t) ? cv : lv)[e - 1];
}
function dv(t, e) {
  const r = Qa(t) ? cv : lv, n = r.findIndex((a) => a < e), i = e - r[n];
  return { month: n + 1, day: i };
}
function df(t, e) {
  return (t - e + 7) % 7 + 1;
}
function fo(t, e = 4, r = 1) {
  const { year: n, month: i, day: a } = t, s = fv(n, i, a), o = df(ff(n, i, a), r);
  let u = Math.floor((s - o + 14 - e) / 7), l;
  return u < 1 ? (l = n - 1, u = Ca(l, e, r)) : u > Ca(n, e, r) ? (l = n + 1, u = 1) : l = n, { weekYear: l, weekNumber: u, weekday: o, ...iu(t) };
}
function nh(t, e = 4, r = 1) {
  const { weekYear: n, weekNumber: i, weekday: a } = t, s = df(ff(n, 1, e), r), o = vi(n);
  let u = i * 7 + a - s - 7 + e, l;
  u < 1 ? (l = n - 1, u += vi(l)) : u > o ? (l = n + 1, u -= vi(n)) : l = n;
  const { month: c, day: f } = dv(l, u);
  return { year: l, month: c, day: f, ...iu(t) };
}
function Bu(t) {
  const { year: e, month: r, day: n } = t, i = fv(e, r, n);
  return { year: e, ordinal: i, ...iu(t) };
}
function ih(t) {
  const { year: e, ordinal: r } = t, { month: n, day: i } = dv(e, r);
  return { year: e, month: n, day: i, ...iu(t) };
}
function ah(t, e) {
  if (!we(t.localWeekday) || !we(t.localWeekNumber) || !we(t.localWeekYear)) {
    if (!we(t.weekday) || !we(t.weekNumber) || !we(t.weekYear))
      throw new ui(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return we(t.localWeekday) || (t.weekday = t.localWeekday), we(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), we(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Ow(t, e = 4, r = 1) {
  const n = tu(t.weekYear), i = Yt(
    t.weekNumber,
    1,
    Ca(t.weekYear, e, r)
  ), a = Yt(t.weekday, 1, 7);
  return n ? i ? a ? !1 : Qt("weekday", t.weekday) : Qt("week", t.weekNumber) : Qt("weekYear", t.weekYear);
}
function Cw(t) {
  const e = tu(t.year), r = Yt(t.ordinal, 1, vi(t.year));
  return e ? r ? !1 : Qt("ordinal", t.ordinal) : Qt("year", t.year);
}
function hv(t) {
  const e = tu(t.year), r = Yt(t.month, 1, 12), n = Yt(t.day, 1, ho(t.year, t.month));
  return e ? r ? n ? !1 : Qt("day", t.day) : Qt("month", t.month) : Qt("year", t.year);
}
function pv(t) {
  const { hour: e, minute: r, second: n, millisecond: i } = t, a = Yt(e, 0, 23) || e === 24 && r === 0 && n === 0 && i === 0, s = Yt(r, 0, 59), o = Yt(n, 0, 59), u = Yt(i, 0, 999);
  return a ? s ? o ? u ? !1 : Qt("millisecond", i) : Qt("second", n) : Qt("minute", r) : Qt("hour", e);
}
function we(t) {
  return typeof t > "u";
}
function Fn(t) {
  return typeof t == "number";
}
function tu(t) {
  return typeof t == "number" && t % 1 === 0;
}
function Iw(t) {
  return typeof t == "string";
}
function Nw(t) {
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
function Aw(t) {
  return Array.isArray(t) ? t : [t];
}
function sh(t, e, r) {
  if (t.length !== 0)
    return t.reduce((n, i) => {
      const a = [e(i), i];
      return n && r(n[0], a[0]) === n[0] ? n : a;
    }, null)[1];
}
function Dw(t, e) {
  return e.reduce((r, n) => (r[n] = t[n], r), {});
}
function ki(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ec(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new Pt("Week settings must be an object");
  if (!Yt(t.firstDay, 1, 7) || !Yt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Yt(e, 1, 7)))
    throw new Pt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Yt(t, e, r) {
  return tu(t) && t >= e && t <= r;
}
function Rw(t, e) {
  return t - e * Math.floor(t / e);
}
function ct(t, e = 2) {
  const r = t < 0;
  let n;
  return r ? n = "-" + ("" + -t).padStart(e, "0") : n = ("" + t).padStart(e, "0"), n;
}
function Yr(t) {
  if (!(we(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function En(t) {
  if (!(we(t) || t === null || t === ""))
    return parseFloat(t);
}
function hf(t) {
  if (!(we(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function pf(t, e, r = !1) {
  const n = 10 ** e;
  return (r ? Math.trunc : Math.round)(t * n) / n;
}
function Qa(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function vi(t) {
  return Qa(t) ? 366 : 365;
}
function ho(t, e) {
  const r = Rw(e - 1, 12) + 1, n = t + (e - r) / 12;
  return r === 2 ? Qa(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function ru(t) {
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
function oh(t, e, r) {
  return -df(ff(t, 1, e), r) + e - 1;
}
function Ca(t, e = 4, r = 1) {
  const n = oh(t, e, r), i = oh(t + 1, e, r);
  return (vi(t) - n + i) / 7;
}
function tc(t) {
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
function nu(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(e, 10) || 0, i = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + i;
}
function gv(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new Pt(`Invalid unit value ${t}`);
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
function pa(t, e) {
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
function iu(t) {
  return Dw(t, ["hour", "minute", "second", "millisecond"]);
}
const Pw = [
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
], Mw = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function wv(t) {
  switch (t) {
    case "narrow":
      return [...Mw];
    case "short":
      return [...bv];
    case "long":
      return [...Pw];
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
], xv = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Fw = ["M", "T", "W", "T", "F", "S", "S"];
function Tv(t) {
  switch (t) {
    case "narrow":
      return [...Fw];
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
const kv = ["AM", "PM"], Lw = ["Before Christ", "Anno Domini"], $w = ["BC", "AD"], jw = ["B", "A"];
function _v(t) {
  switch (t) {
    case "narrow":
      return [...jw];
    case "short":
      return [...$w];
    case "long":
      return [...Lw];
    default:
      return null;
  }
}
function Vw(t) {
  return kv[t.hour < 12 ? 0 : 1];
}
function zw(t, e) {
  return Tv(e)[t.weekday - 1];
}
function Ww(t, e) {
  return wv(e)[t.month - 1];
}
function qw(t, e) {
  return _v(e)[t.year < 0 ? 0 : 1];
}
function Uw(t, e, r = "always", n = !1) {
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
function uh(t, e) {
  let r = "";
  for (const n of t)
    n.literal ? r += n.val : r += e(n.val);
  return r;
}
const Bw = {
  D: co,
  DD: Um,
  DDD: Bm,
  DDDD: Hm,
  t: Qm,
  tt: Ym,
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
class Tt {
  static create(e, r = {}) {
    return new Tt(e, r);
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
    return Bw[e];
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
    const n = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", a = (d, p) => this.loc.extract(e, d, p), s = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => n ? Vw(e) : a({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (d, p) => n ? Ww(e, d) : a(p ? { month: d } : { month: d, day: "numeric" }, "month"), l = (d, p) => n ? zw(e, d) : a(
      p ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), c = (d) => {
      const p = Tt.macroTokenToFormatOpts(d);
      return p ? this.formatWithSystemDefault(e, p) : d;
    }, f = (d) => n ? qw(e, d) : a({ era: d }, "era"), h = (d) => {
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
    return uh(Tt.parseFormat(r), h);
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
    }, a = Tt.parseFormat(r), s = a.reduce(
      (u, { literal: l, val: c }) => l ? u : u.concat(c),
      []
    ), o = e.shiftTo(...s.map(n).filter((u) => u));
    return uh(a, i(o));
  }
}
const Sv = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function $i(...t) {
  const e = t.reduce((r, n) => r + n.source, "");
  return RegExp(`^${e}$`);
}
function ji(...t) {
  return (e) => t.reduce(
    ([r, n, i], a) => {
      const [s, o, u] = a(e, i);
      return [{ ...r, ...s }, o || n, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Vi(t, ...e) {
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
      n[t[i]] = Yr(e[r + i]);
    return [n, null, r + i];
  };
}
const Cv = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Hw = `(?:${Cv.source}?(?:\\[(${Sv.source})\\])?)?`, mf = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Iv = RegExp(`${mf.source}${Hw}`), vf = RegExp(`(?:T${Iv.source})?`), Qw = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Yw = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Zw = /(\d{4})-?(\d{3})/, Gw = Ov("weekYear", "weekNumber", "weekDay"), Jw = Ov("year", "ordinal"), Kw = /(\d{4})-(\d\d)-(\d\d)/, Nv = RegExp(
  `${mf.source} ?(?:${Cv.source}|(${Sv.source}))?`
), Xw = RegExp(`(?: ${Nv.source})?`);
function yi(t, e, r) {
  const n = t[e];
  return we(n) ? r : Yr(n);
}
function eE(t, e) {
  return [{
    year: yi(t, e),
    month: yi(t, e + 1, 1),
    day: yi(t, e + 2, 1)
  }, null, e + 3];
}
function zi(t, e) {
  return [{
    hours: yi(t, e, 0),
    minutes: yi(t, e + 1, 0),
    seconds: yi(t, e + 2, 0),
    milliseconds: hf(t[e + 3])
  }, null, e + 4];
}
function Ya(t, e) {
  const r = !t[e] && !t[e + 1], n = nu(t[e + 1], t[e + 2]), i = r ? null : It.instance(n);
  return [{}, i, e + 3];
}
function Za(t, e) {
  const r = t[e] ? Pr.create(t[e]) : null;
  return [{}, r, e + 1];
}
const tE = RegExp(`^T?${mf.source}$`), rE = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function nE(t) {
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
      milliseconds: h(hf(l), f)
    }
  ];
}
const iE = {
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
function yf(t, e, r, n, i, a, s) {
  const o = {
    year: e.length === 2 ? tc(Yr(e)) : Yr(e),
    month: bv.indexOf(r) + 1,
    day: Yr(n),
    hour: Yr(i),
    minute: Yr(a)
  };
  return s && (o.second = Yr(s)), t && (o.weekday = t.length > 3 ? Ev.indexOf(t) + 1 : xv.indexOf(t) + 1), o;
}
const aE = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function sE(t) {
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
  ] = t, h = yf(e, i, n, r, a, s, o);
  let d;
  return u ? d = iE[u] : l ? d = 0 : d = nu(c, f), [h, new It(d)];
}
function oE(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const uE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, lE = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, cE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function lh(t) {
  const [, e, r, n, i, a, s, o] = t;
  return [yf(e, i, n, r, a, s, o), It.utcInstance];
}
function fE(t) {
  const [, e, r, n, i, a, s, o] = t;
  return [yf(e, o, r, n, i, a, s), It.utcInstance];
}
const dE = $i(Qw, vf), hE = $i(Yw, vf), pE = $i(Zw, vf), mE = $i(Iv), Av = ji(
  eE,
  zi,
  Ya,
  Za
), vE = ji(
  Gw,
  zi,
  Ya,
  Za
), yE = ji(
  Jw,
  zi,
  Ya,
  Za
), gE = ji(
  zi,
  Ya,
  Za
);
function bE(t) {
  return Vi(
    t,
    [dE, Av],
    [hE, vE],
    [pE, yE],
    [mE, gE]
  );
}
function wE(t) {
  return Vi(oE(t), [aE, sE]);
}
function EE(t) {
  return Vi(
    t,
    [uE, lh],
    [lE, lh],
    [cE, fE]
  );
}
function xE(t) {
  return Vi(t, [rE, nE]);
}
const TE = ji(zi);
function kE(t) {
  return Vi(t, [tE, TE]);
}
const _E = $i(Kw, Xw), SE = $i(Nv), OE = ji(
  zi,
  Ya,
  Za
);
function CE(t) {
  return Vi(
    t,
    [_E, Av],
    [SE, OE]
  );
}
const ch = "Invalid Duration", Dv = {
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
}, IE = {
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
}, qt = 146097 / 400, Xn = 146097 / 4800, NE = {
  years: {
    quarters: 4,
    months: 12,
    weeks: qt / 7,
    days: qt,
    hours: qt * 24,
    minutes: qt * 24 * 60,
    seconds: qt * 24 * 60 * 60,
    milliseconds: qt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: qt / 28,
    days: qt / 4,
    hours: qt * 24 / 4,
    minutes: qt * 24 * 60 / 4,
    seconds: qt * 24 * 60 * 60 / 4,
    milliseconds: qt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Xn / 7,
    days: Xn,
    hours: Xn * 24,
    minutes: Xn * 24 * 60,
    seconds: Xn * 24 * 60 * 60,
    milliseconds: Xn * 24 * 60 * 60 * 1e3
  },
  ...Dv
}, Nn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], AE = Nn.slice(0).reverse();
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
  for (const n of AE.slice(1))
    e[n] && (r += e[n] * t[n].milliseconds);
  return r;
}
function fh(t, e) {
  const r = Rv(t, e) < 0 ? -1 : 1;
  Nn.reduceRight((n, i) => {
    if (we(e[i]))
      return n;
    if (n) {
      const a = e[n] * r, s = t[i][n], o = Math.floor(a / s);
      e[i] += o * r, e[n] -= o * s * r;
    }
    return i;
  }, null), Nn.reduce((n, i) => {
    if (we(e[i]))
      return n;
    if (n) {
      const a = e[n] % 1;
      e[n] -= a, e[i] += a * t[n][i];
    }
    return i;
  }, null);
}
function DE(t) {
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
    let n = r ? NE : IE;
    e.matrix && (n = e.matrix), this.values = e.values, this.loc = e.loc || Ue.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n, this.isLuxonDuration = !0;
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
      throw new Pt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new De({
      values: po(e, De.normalizeUnit),
      loc: Ue.fromObject(r),
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
    if (Fn(e))
      return De.fromMillis(e);
    if (De.isDuration(e))
      return e;
    if (typeof e == "object")
      return De.fromObject(e);
    throw new Pt(
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
    const [n] = xE(e);
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
    const [n] = kE(e);
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
      throw new Pt("need to specify a reason the Duration is invalid");
    const n = e instanceof ar ? e : new ar(e, r);
    if (st.throwOnInvalid)
      throw new aw(n);
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
    return this.isValid ? Tt.create(this.loc, n).formatDurationFromString(this, e) : ch;
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
      return ch;
    const r = Nn.map((n) => {
      const i = this.values[n];
      return we(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: n.slice(0, -1) }).format(i);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += pf(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, Ee.fromMillis(r, { zone: "UTC" }).toISOTime(e));
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
    for (const i of Nn)
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
    return fh(this.matrix, e), Br(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = DE(this.normalize().shiftToAll().toObject());
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
    for (const s of Nn)
      if (e.indexOf(s) >= 0) {
        a = s;
        let o = 0;
        for (const l in n)
          o += this.matrix[l][s] * n[l], n[l] = 0;
        Fn(i[s]) && (o += i[s]);
        const u = Math.trunc(o);
        r[s] = u, n[s] = (o * 1e3 - u * 1e3) / 1e3;
      } else
        Fn(i[s]) && (n[s] = i[s]);
    for (const s in n)
      n[s] !== 0 && (r[a] += s === a ? n[s] : n[s] / this.matrix[a][s]);
    return fh(this.matrix, r), Br(this, { values: r }, !0);
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
    for (const n of Nn)
      if (!r(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const ei = "Invalid Interval";
function RE(t, e) {
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
      throw new Pt("need to specify a reason the Interval is invalid");
    const n = e instanceof ar ? e : new ar(e, r);
    if (st.throwOnInvalid)
      throw new iw(n);
    return new Xe({ invalid: n });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, r) {
    const n = Gi(e), i = Gi(r), a = RE(n, i);
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
    const n = De.fromDurationLike(r), i = Gi(e);
    return Xe.fromDateTimes(i, i.plus(n));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, r) {
    const n = De.fromDurationLike(r), i = Gi(e);
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
        a = Ee.fromISO(n, r), s = a.isValid;
      } catch {
        s = !1;
      }
      let o, u;
      try {
        o = Ee.fromISO(i, r), u = o.isValid;
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
    const r = e.map(Gi).filter((s) => this.contains(s)).sort((s, o) => s.toMillis() - o.toMillis()), n = [];
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
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : ei;
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
    return this.isValid ? Tt.create(this.s.loc.clone(r), e).formatInterval(this) : ei;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : ei;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : ei;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : ei;
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
    return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : ei;
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
    const r = Ee.now().setZone(e).set({ month: 12 });
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
    return (r || Ue.create(e)).getStartOfWeek();
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
    return (r || Ue.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: r = null } = {}) {
    return (r || Ue.create(e)).getWeekendDays().slice();
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
    return (i || Ue.create(r, n, a)).months(e);
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
    return (i || Ue.create(r, n, a)).months(e, !0);
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
    return (i || Ue.create(r, n, null)).weekdays(e);
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
    return (i || Ue.create(r, n, null)).weekdays(e, !0);
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
    return Ue.create(e).meridiems();
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
    return Ue.create(r, null, "gregory").eras(e);
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
function dh(t, e) {
  const r = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), n = r(e) - r(t);
  return Math.floor(De.fromMillis(n).as("days"));
}
function PE(t, e, r) {
  const n = [
    ["years", (u, l) => l.year - u.year],
    ["quarters", (u, l) => l.quarter - u.quarter + (l.year - u.year) * 4],
    ["months", (u, l) => l.month - u.month + (l.year - u.year) * 12],
    [
      "weeks",
      (u, l) => {
        const c = dh(u, l);
        return (c - c % 7) / 7;
      }
    ],
    ["days", dh]
  ], i = {}, a = t;
  let s, o;
  for (const [u, l] of n)
    r.indexOf(u) >= 0 && (s = u, i[u] = l(t, e), o = a.plus(i), o > e ? (i[u]--, t = a.plus(i), t > e && (o = t, i[u]--, t = a.plus(i))) : t = o);
  return [t, i, o, s];
}
function ME(t, e, r, n) {
  let [i, a, s, o] = PE(t, e, r);
  const u = e - i, l = r.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  l.length === 0 && (s < e && (s = i.plus({ [o]: 1 })), s !== i && (a[o] = (a[o] || 0) + u / (s - i)));
  const c = De.fromObject(a, n);
  return l.length > 0 ? De.fromMillis(u, n).shiftTo(...l).plus(c) : c;
}
const gf = {
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
}, hh = {
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
}, FE = gf.hanidec.replace(/[\[|\]]/g, "").split("");
function LE(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let r = 0; r < t.length; r++) {
      const n = t.charCodeAt(r);
      if (t[r].search(gf.hanidec) !== -1)
        e += FE.indexOf(t[r]);
      else
        for (const i in hh) {
          const [a, s] = hh[i];
          n >= a && n <= s && (e += n - a);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Kt({ numberingSystem: t }, e = "") {
  return new RegExp(`${gf[t || "latn"]}${e}`);
}
const $E = "missing Intl.DateTimeFormat.formatToParts support";
function Fe(t, e = (r) => r) {
  return { regex: t, deser: ([r]) => e(LE(r)) };
}
const jE = " ", Pv = `[ ${jE}]`, Mv = new RegExp(Pv, "g");
function VE(t) {
  return t.replace(/\./g, "\\.?").replace(Mv, Pv);
}
function ph(t) {
  return t.replace(/\./g, "").replace(Mv, " ").toLowerCase();
}
function Xt(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(VE).join("|")),
    deser: ([r]) => t.findIndex((n) => ph(r) === ph(n)) + e
  };
}
function mh(t, e) {
  return { regex: t, deser: ([, r, n]) => nu(r, n), groups: e };
}
function Os(t) {
  return { regex: t, deser: ([e]) => e };
}
function zE(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function WE(t, e) {
  const r = Kt(e), n = Kt(e, "{2}"), i = Kt(e, "{3}"), a = Kt(e, "{4}"), s = Kt(e, "{6}"), o = Kt(e, "{1,2}"), u = Kt(e, "{1,3}"), l = Kt(e, "{1,6}"), c = Kt(e, "{1,9}"), f = Kt(e, "{2,4}"), h = Kt(e, "{4,6}"), d = (v) => ({ regex: RegExp(zE(v.val)), deser: ([y]) => y, literal: !0 }), m = ((v) => {
    if (t.literal)
      return d(v);
    switch (v.val) {
      case "G":
        return Xt(e.eras("short"), 0);
      case "GG":
        return Xt(e.eras("long"), 0);
      case "y":
        return Fe(l);
      case "yy":
        return Fe(f, tc);
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
        return Fe(f, tc);
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
        return mh(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return mh(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return Os(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Os(/[^\S\n\r]/);
      default:
        return d(v);
    }
  })(t) || {
    invalidReason: $E
  };
  return m.token = t, m;
}
const qE = {
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
function UE(t, e, r) {
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
  let o = qE[s];
  if (typeof o == "object" && (o = o[a]), o)
    return {
      literal: !1,
      val: o
    };
}
function BE(t) {
  return [`^${t.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, t];
}
function HE(t, e, r) {
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
function QE(t) {
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
  return we(t.z) || (r = Pr.create(t.z)), we(t.Z) || (r || (r = new It(t.Z)), n = t.Z), we(t.q) || (t.M = (t.q - 1) * 3 + 1), we(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), we(t.u) || (t.S = hf(t.u)), [Object.keys(t).reduce((a, s) => {
    const o = e(s);
    return o && (a[o] = t[s]), a;
  }, {}), r, n];
}
let Hu = null;
function YE() {
  return Hu || (Hu = Ee.fromMillis(1555555555555)), Hu;
}
function ZE(t, e) {
  if (t.literal)
    return t;
  const r = Tt.macroTokenToFormatOpts(t.val), n = $v(r, e);
  return n == null || n.includes(void 0) ? t : n;
}
function Fv(t, e) {
  return Array.prototype.concat(...t.map((r) => ZE(r, e)));
}
function Lv(t, e, r) {
  const n = Fv(Tt.parseFormat(r), t), i = n.map((s) => WE(s, t)), a = i.find((s) => s.invalidReason);
  if (a)
    return { input: e, tokens: n, invalidReason: a.invalidReason };
  {
    const [s, o] = BE(i), u = RegExp(s, "i"), [l, c] = HE(e, u, o), [f, h, d] = c ? QE(c) : [null, null, void 0];
    if (ki(c, "a") && ki(c, "H"))
      throw new ui(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: n, regex: u, rawMatches: l, matches: c, result: f, zone: h, specificOffset: d };
  }
}
function GE(t, e, r) {
  const { result: n, zone: i, specificOffset: a, invalidReason: s } = Lv(t, e, r);
  return [n, i, a, s];
}
function $v(t, e) {
  if (!t)
    return null;
  const n = Tt.create(e, t).dtFormatter(YE()), i = n.formatToParts(), a = n.resolvedOptions();
  return i.map((s) => UE(s, t, a));
}
const Qu = "Invalid DateTime", vh = 864e13;
function Cs(t) {
  return new ar("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Yu(t) {
  return t.weekData === null && (t.weekData = fo(t.c)), t.weekData;
}
function Zu(t) {
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
  return new Ee({ ...r, ...e, old: r });
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
  return jv(ru(t), e, r);
}
function yh(t, e) {
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
  }).as("milliseconds"), o = ru(a);
  let [u, l] = jv(o, r, t.zone);
  return s !== 0 && (u += s, l = t.zone.offset(u)), { ts: u, o: l };
}
function Zi(t, e, r, n, i, a) {
  const { setZone: s, zone: o } = r;
  if (t && Object.keys(t).length !== 0 || e) {
    const u = e || o, l = Ee.fromObject(t, {
      ...r,
      zone: u,
      specificOffset: a
    });
    return s ? l : l.setZone(o);
  } else
    return Ee.invalid(
      new ar("unparsable", `the input "${i}" can't be parsed as ${n}`)
    );
}
function Ns(t, e, r = !0) {
  return t.isValid ? Tt.create(Ue.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Gu(t, e) {
  const r = t.c.year > 9999 || t.c.year < 0;
  let n = "";
  return r && t.c.year >= 0 && (n += "+"), n += ct(t.c.year, r ? 6 : 4), e ? (n += "-", n += ct(t.c.month), n += "-", n += ct(t.c.day)) : (n += ct(t.c.month), n += ct(t.c.day)), n;
}
function gh(t, e, r, n, i, a) {
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
}, JE = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, KE = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, zv = ["year", "month", "day", "hour", "minute", "second", "millisecond"], XE = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], ex = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function tx(t) {
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
function bh(t) {
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
      return tx(t);
  }
}
function wh(t, e) {
  const r = Xr(e.zone, st.defaultZone), n = Ue.fromObject(e), i = st.now();
  let a, s;
  if (we(t.year))
    a = i;
  else {
    for (const l of zv)
      we(t[l]) && (t[l] = Vv[l]);
    const o = hv(t) || pv(t);
    if (o)
      return Ee.invalid(o);
    const u = r.offset(i);
    [a, s] = Hs(t, u, r);
  }
  return new Ee({ ts: a, zone: r, loc: n, o: s });
}
function Eh(t, e, r) {
  const n = we(r.round) ? !0 : r.round, i = (s, o) => (s = pf(s, n || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(s, o)), a = (s) => r.calendary ? e.hasSame(t, s) ? 0 : e.startOf(s).diff(t.startOf(s), s).get(s) : e.diff(t, s).get(s);
  if (r.unit)
    return i(a(r.unit), r.unit);
  for (const s of r.units) {
    const o = a(s);
    if (Math.abs(o) >= 1)
      return i(o, s);
  }
  return i(t > e ? -0 : 0, r.units[r.units.length - 1]);
}
function xh(t) {
  let e = {}, r;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], r = Array.from(t).slice(0, t.length - 1)) : r = Array.from(t), [e, r];
}
class Ee {
  /**
   * @access private
   */
  constructor(e) {
    const r = e.zone || st.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new ar("invalid input") : null) || (r.isValid ? null : Cs(r));
    this.ts = we(e.ts) ? st.now() : e.ts;
    let i = null, a = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(r))
        [i, a] = [e.old.c, e.old.o];
      else {
        const o = r.offset(this.ts);
        i = Is(this.ts, o), n = Number.isNaN(i.year) ? new ar("invalid input") : null, i = n ? null : i, a = n ? null : o;
      }
    this._zone = r, this.loc = e.loc || Ue.create(), this.invalid = n, this.weekData = null, this.localWeekData = null, this.c = i, this.o = a, this.isLuxonDateTime = !0;
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
    return new Ee({});
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
    const [e, r] = xh(arguments), [n, i, a, s, o, u, l] = r;
    return wh({ year: n, month: i, day: a, hour: s, minute: o, second: u, millisecond: l }, e);
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
    const [e, r] = xh(arguments), [n, i, a, s, o, u, l] = r;
    return e.zone = It.utcInstance, wh({ year: n, month: i, day: a, hour: s, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, r = {}) {
    const n = Nw(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return Ee.invalid("invalid input");
    const i = Xr(r.zone, st.defaultZone);
    return i.isValid ? new Ee({
      ts: n,
      zone: i,
      loc: Ue.fromObject(r)
    }) : Ee.invalid(Cs(i));
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
    if (Fn(e))
      return e < -vh || e > vh ? Ee.invalid("Timestamp out of range") : new Ee({
        ts: e,
        zone: Xr(r.zone, st.defaultZone),
        loc: Ue.fromObject(r)
      });
    throw new Pt(
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
    if (Fn(e))
      return new Ee({
        ts: e * 1e3,
        zone: Xr(r.zone, st.defaultZone),
        loc: Ue.fromObject(r)
      });
    throw new Pt("fromSeconds requires a numerical input");
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
      return Ee.invalid(Cs(n));
    const i = Ue.fromObject(r), a = po(e, bh), { minDaysInFirstWeek: s, startOfWeek: o } = ah(a, i), u = st.now(), l = we(r.specificOffset) ? n.offset(u) : r.specificOffset, c = !we(a.ordinal), f = !we(a.year), h = !we(a.month) || !we(a.day), d = f || h, p = a.weekYear || a.weekNumber;
    if ((d || c) && p)
      throw new ui(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && c)
      throw new ui("Can't mix ordinal dates with month/day");
    const m = p || a.weekday && !d;
    let v, y, g = Is(u, l);
    m ? (v = XE, y = JE, g = fo(g, s, o)) : c ? (v = ex, y = KE, g = Bu(g)) : (v = zv, y = Vv);
    let w = !1;
    for (const z of v) {
      const Q = a[z];
      we(Q) ? w ? a[z] = y[z] : a[z] = g[z] : w = !0;
    }
    const x = m ? Ow(a, s, o) : c ? Cw(a) : hv(a), b = x || pv(a);
    if (b)
      return Ee.invalid(b);
    const S = m ? nh(a, s, o) : c ? ih(a) : a, [N, I] = Hs(S, l, n), P = new Ee({
      ts: N,
      zone: n,
      o: I,
      loc: i
    });
    return a.weekday && d && e.weekday !== P.weekday ? Ee.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${P.toISO()}`
    ) : P;
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
    const [n, i] = bE(e);
    return Zi(n, i, r, "ISO 8601", e);
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
    const [n, i] = wE(e);
    return Zi(n, i, r, "RFC 2822", e);
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
    const [n, i] = EE(e);
    return Zi(n, i, r, "HTTP", r);
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
    if (we(e) || we(r))
      throw new Pt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: a = null } = n, s = Ue.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    }), [o, u, l, c] = GE(s, e, r);
    return c ? Ee.invalid(c) : Zi(o, u, n, `format ${r}`, e, l);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, r, n = {}) {
    return Ee.fromFormat(e, r, n);
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
    const [n, i] = CE(e);
    return Zi(n, i, r, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new Pt("need to specify a reason the DateTime is invalid");
    const n = e instanceof ar ? e : new ar(e, r);
    if (st.throwOnInvalid)
      throw new nw(n);
    return new Ee({ invalid: n });
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
    const n = $v(e, Ue.fromObject(r));
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
    return Fv(Tt.parseFormat(e), Ue.fromObject(r)).map((i) => i.val).join("");
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
    return this.isValid ? Yu(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Yu(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Yu(this).weekday : NaN;
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
    return this.isValid ? Zu(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Zu(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Zu(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Bu(this.c).ordinal : NaN;
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
    const e = 864e5, r = 6e4, n = ru(this.c), i = this.zone.offset(n - e), a = this.zone.offset(n + e), s = this.zone.offset(n - i * r), o = this.zone.offset(n - a * r);
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
    return Qa(this.year);
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
    return this.isValid ? vi(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ca(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ca(
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
    const { locale: r, numberingSystem: n, calendar: i } = Tt.create(
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
    return this.setZone(It.instance(e), r);
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
      return Ee.invalid(Cs(e));
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
    const r = po(e, bh), { minDaysInFirstWeek: n, startOfWeek: i } = ah(r, this.loc), a = !we(r.weekYear) || !we(r.weekNumber) || !we(r.weekday), s = !we(r.ordinal), o = !we(r.year), u = !we(r.month) || !we(r.day), l = o || u, c = r.weekYear || r.weekNumber;
    if ((l || s) && c)
      throw new ui(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && s)
      throw new ui("Can't mix ordinal dates with month/day");
    let f;
    a ? f = nh(
      { ...fo(this.c, n, i), ...r },
      n,
      i
    ) : we(r.ordinal) ? (f = { ...this.toObject(), ...r }, we(r.day) && (f.day = Math.min(ho(f.year, f.month), f.day))) : f = ih({ ...Bu(this.c), ...r });
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
    return xn(this, yh(this, r));
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
    return xn(this, yh(this, r));
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
    return this.isValid ? Tt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : Qu;
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
    return this.isValid ? Tt.create(this.loc.clone(r), e).formatDateTime(this) : Qu;
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
    return this.isValid ? Tt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    let o = Gu(this, s);
    return o += "T", o += gh(this, s, r, n, i, a), o;
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
    return this.isValid ? Gu(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Ns(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (i ? "T" : "") + gh(
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
    return Ns(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Ns(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Gu(this, !0) : null;
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
    return (r || e) && (n && (i += " "), r ? i += "z" : e && (i += "ZZ")), Ns(this, i, !0);
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
    return this.isValid ? this.toISO() : Qu;
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
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n }, a = Aw(r).map(De.normalizeUnit), s = e.valueOf() > this.valueOf(), o = s ? this : e, u = s ? e : this, l = ME(o, u, a, i);
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
    return this.diff(Ee.now(), e, r);
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
    const r = e.base || Ee.fromObject({}, { zone: this.zone }), n = e.padding ? this < r ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], a = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, a = void 0), Eh(r, this.plus(n), {
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
    return this.isValid ? Eh(e.base || Ee.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(Ee.isDateTime))
      throw new Pt("min requires all arguments be DateTimes");
    return sh(e, (r) => r.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(Ee.isDateTime))
      throw new Pt("max requires all arguments be DateTimes");
    return sh(e, (r) => r.valueOf(), Math.max);
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
    const { locale: i = null, numberingSystem: a = null } = n, s = Ue.fromOpts({
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
    return Ee.fromFormatExplain(e, r, n);
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
    return sw;
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
    return Qm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ym;
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
    return ow;
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
function Gi(t) {
  if (Ee.isDateTime(t))
    return t;
  if (t && t.valueOf && Fn(t.valueOf()))
    return Ee.fromJSDate(t);
  if (t && typeof t == "object")
    return Ee.fromObject(t);
  throw new Pt(
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
var Ju = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}, rx = function() {
  function t(e) {
    var r = e.debug, n = r === void 0 ? !1 : r;
    this.debug = n, this.lines = [];
  }
  return t.prototype.emit = function(e, r) {
    if (e in console) {
      var n = t.prefix;
      console[e].apply(console, Ju([n], r, !1));
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
    this.lines = Ju(Ju([], this.lines.slice(1 - n), !0), [[e, r]], !1), (this.debug || e !== "log") && this.emit(e, r);
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
}(), nx = function() {
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
}(), As = function(t, e, r, n) {
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
    return As(this, void 0, void 0, function() {
      return Ds(this, function(e) {
        return [2, this.storage.getItem(this.key)];
      });
    });
  }, t.prototype.write = function(e) {
    return As(this, void 0, void 0, function() {
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
    return As(this, void 0, void 0, function() {
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
    return As(this, void 0, void 0, function() {
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
}(), Ku = function(t, e, r, n) {
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
}, Xu = function(t, e) {
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
    return Ku(this, void 0, void 0, function() {
      var e, r;
      return Xu(this, function(n) {
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
    return Ku(this, void 0, void 0, function() {
      var e, r;
      return Xu(this, function(n) {
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
    return Ku(this, void 0, void 0, function() {
      var e;
      return Xu(this, function(r) {
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
}, ix = function(t) {
  var e = t.log, r = t.cache;
  return function(n) {
    return e.warn("Trigger option `background` not available on web; using `write` trigger"), Uv({ cache: r })(n);
  };
};
var ax = function() {
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
          u && n.warn("Debounce is not recommended with `background` trigger"), this.debounce = u, this.uninstall = ix({ cache: o, log: n })(this.fire);
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
}(), sx = function() {
  function t(e) {
    if (!e.cache)
      throw new Error("In order to persist your Apollo Cache, you need to pass in a cache. Please see https://www.apollographql.com/docs/react/basics/caching.html for our default InMemoryCache.");
    if (!e.storage)
      throw new Error("In order to persist your Apollo Cache, you need to pass in an underlying storage provider. Please see https://github.com/apollographql/apollo-cache-persist#storage-providers");
    var r = new rx(e), n = new nx(e), i = new Wv(e), a = new qv({ log: r, cache: n, storage: i }, e), s = new ax({ log: r, persistor: a }, e);
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
}(), bf = /* @__PURE__ */ function() {
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
  bf(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.storage = new ux(r), n.persistor = new ox({ log: n.log, cache: n.cache, storage: n.storage }, r), n;
  }
  return e.prototype.restoreSync = function() {
    this.persistor.restoreSync();
  }, e;
})(sx);
var ox = function(t) {
  bf(e, t);
  function e(r, n) {
    var i = r.log, a = r.cache, s = r.storage;
    return t.call(this, { log: i, cache: a, storage: s }, n) || this;
  }
  return e.prototype.restoreSync = function() {
    this.cache.restore(this.storage.readSync());
  }, e;
}(qv), ux = function(t) {
  bf(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.readSync = function() {
    return this.storage.getItem(this.key);
  }, e;
}(Wv), lx = function() {
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
  const n = xe();
  Le(() => {
    n.current = e;
  }, [e]), Le(
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
const Th = new lx(window.localStorage);
function cx(t, e, r = { sync: !1 }) {
  const [n, i] = Je(() => {
    try {
      const o = Th.getItem(t);
      return o ? JSON.parse(o) : e;
    } catch (o) {
      return console.error(o), e;
    }
  }), a = kt(
    (o) => {
      !o.isTrusted || !r.sync || o.key === t && i(JSON.parse(o.newValue));
    },
    [t, i]
  );
  return Bv("storage", a), [n, (o) => {
    try {
      const u = o instanceof Function ? o(n) : o;
      i(u), Th.setItem(
        t,
        u !== null ? JSON.stringify(u) : null
      );
    } catch (u) {
      console.error(u);
    }
  }];
}
class Ia {
  constructor(e) {
    this.accessToken = e.accessToken, this.expiresAt = e.expiresAt, this.ownerId = e.ownerId;
  }
  static fromOAuthResponse(e, r) {
    return new Ia({
      accessToken: e.access_token,
      expiresAt: Ee.now().plus({ seconds: e.expires_in }),
      ownerId: r
    });
  }
  static fromStored(e) {
    return new Ia({
      ...e,
      expiresAt: Ee.fromISO(e.expiresAt)
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
function fx({ mode: t, onComplete: e }) {
  const r = xe(), n = kt((i) => {
    var o;
    if (((o = r.current) == null ? void 0 : o.contentWindow) !== i.source)
      return;
    const { data: { type: a, payload: s } } = i;
    e && a === "SSO_CALLBACK" && e(s);
  }, [r, e]);
  return Bv("message", n), /* @__PURE__ */ X.jsx(
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
function dx({ children: t, mode: e, ownerId: r }) {
  const n = mx({ ownerId: r });
  return n.isAuthenticated ? /* @__PURE__ */ X.jsx(Hv.Provider, { value: n, children: t }) : /* @__PURE__ */ X.jsx(fx, { mode: e, onComplete: n.handleSSOComplete });
}
function hx() {
  return ft(Hv);
}
const px = "sfsTokenData";
function mx({ ownerId: t }) {
  let e;
  const [r, n] = cx(px), i = (o) => {
    if (o.error) {
      console.error("SSO callback error", o.error);
      return;
    }
    const u = Ia.fromOAuthResponse(o, t);
    n(u.dataForStorage);
  }, a = () => {
    n(null);
  };
  r && (t !== r.ownerId ? a() : e = Ia.fromStored(r));
  const s = !!(e != null && e.accessToken);
  return {
    accessToken: e == null ? void 0 : e.accessToken,
    isAuthenticated: s,
    reauth: a,
    handleSSOComplete: i
  };
}
var rc = function(t, e) {
  return rc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, rc(t, e);
};
function cr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  rc(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var k = function() {
  return k = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, k.apply(this, arguments);
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
var el = "Invariant Violation", kh = Object.setPrototypeOf, vx = kh === void 0 ? function(t, e) {
  return t.__proto__ = e, t;
} : kh, Qv = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      r === void 0 && (r = el);
      var n = t.call(this, typeof r == "number" ? el + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = el, vx(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function Sn(t, e) {
  if (!t)
    throw new Qv(e);
}
var Yv = ["debug", "log", "warn", "error", "silent"], yx = Yv.indexOf("log");
function Rs(t) {
  return function() {
    if (Yv.indexOf(t) >= yx) {
      var e = console[t] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(t) {
  t.debug = Rs("debug"), t.log = Rs("log"), t.warn = Rs("warn"), t.error = Rs("error");
})(Sn || (Sn = {}));
var wf = "3.10.4";
function tr(t) {
  try {
    return t();
  } catch {
  }
}
const nc = tr(function() {
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
var _h = /* @__PURE__ */ new Map();
function ic(t) {
  var e = _h.get(t) || 1;
  return _h.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function Zv(t, e) {
  e === void 0 && (e = 0);
  var r = ic("stringifyForDisplay");
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
      e = Ef(i), e || (e = xf(i, r), r = []);
    }
    t.apply(void 0, [e].concat(r));
  };
}
var pe = Object.assign(function(e, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  e || Sn(e, Ef(r, n) || xf(r, n));
}, {
  debug: Ps(Sn.debug),
  log: Ps(Sn.log),
  warn: Ps(Sn.warn),
  error: Ps(Sn.error)
});
function At(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return new Qv(Ef(t, e) || xf(t, e));
}
var Sh = Symbol.for("ApolloErrorMessageHandler_" + wf);
function Gv(t) {
  return typeof t == "string" ? t : Zv(t, 2).slice(0, 1e3);
}
function Ef(t, e) {
  if (e === void 0 && (e = []), !!t)
    return nc[Sh] && nc[Sh](t, e.map(Gv));
}
function xf(t, e) {
  if (e === void 0 && (e = []), !!t)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: wf,
      message: t,
      args: e.map(Gv)
    })));
}
function Qs(t, e) {
  if (!!!t)
    throw new Error(e);
}
function gx(t) {
  return typeof t == "object" && t !== null;
}
function bx(t, e) {
  if (!!!t)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const wx = /\r\n|[\n\r]/g;
function ac(t, e) {
  let r = 0, n = 1;
  for (const i of t.body.matchAll(wx)) {
    if (typeof i.index == "number" || bx(!1), i.index >= e)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: e + 1 - r
  };
}
function Ex(t) {
  return Jv(
    t.source,
    ac(t.source, t.start)
  );
}
function Jv(t, e) {
  const r = t.locationOffset.column - 1, n = "".padStart(r) + t.body, i = e.line - 1, a = t.locationOffset.line - 1, s = e.line + a, o = e.line === 1 ? r : 0, u = e.column + o, l = `${t.name}:${s}:${u}
`, c = n.split(/\r\n|[\n\r]/g), f = c[i];
  if (f.length > 120) {
    const h = Math.floor(u / 80), d = u % 80, p = [];
    for (let m = 0; m < f.length; m += 80)
      p.push(f.slice(m, m + 80));
    return l + Oh([
      [`${s} |`, p[0]],
      ...p.slice(1, h + 1).map((m) => ["|", m]),
      ["|", "^".padStart(d)],
      ["|", p[h + 1]]
    ]);
  }
  return l + Oh([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[i - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, c[i + 1]]
  ]);
}
function Oh(t) {
  const e = t.filter(([n, i]) => i !== void 0), r = Math.max(...e.map(([n]) => n.length));
  return e.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function xx(t) {
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
class Tf extends Error {
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
    const { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: f } = xx(r);
    super(e), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Ch(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const h = Ch(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = o ?? (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (h == null ? void 0 : h.map((p) => p.start)), this.locations = u && o ? u.map((p) => ac(o, p)) : h == null ? void 0 : h.map((p) => ac(p.source, p.start));
    const d = gx(
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Tf) : Object.defineProperty(this, "stack", {
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

` + Ex(r.loc));
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
function Ch(t) {
  return t === void 0 || t.length === 0 ? void 0 : t;
}
function wt(t, e, r) {
  return new Tf(`Syntax Error: ${r}`, {
    source: t,
    positions: [e]
  });
}
class Tx {
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
}, kx = new Set(Object.keys(Xv));
function Ih(t) {
  const e = t == null ? void 0 : t.kind;
  return typeof e == "string" && kx.has(e);
}
var li;
(function(t) {
  t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
})(li || (li = {}));
var sc;
(function(t) {
  t.QUERY = "QUERY", t.MUTATION = "MUTATION", t.SUBSCRIPTION = "SUBSCRIPTION", t.FIELD = "FIELD", t.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", t.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", t.INLINE_FRAGMENT = "INLINE_FRAGMENT", t.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", t.SCHEMA = "SCHEMA", t.SCALAR = "SCALAR", t.OBJECT = "OBJECT", t.FIELD_DEFINITION = "FIELD_DEFINITION", t.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", t.INTERFACE = "INTERFACE", t.UNION = "UNION", t.ENUM = "ENUM", t.ENUM_VALUE = "ENUM_VALUE", t.INPUT_OBJECT = "INPUT_OBJECT", t.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(sc || (sc = {}));
var ie;
(function(t) {
  t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(ie || (ie = {}));
function oc(t) {
  return t === 9 || t === 32;
}
function Na(t) {
  return t >= 48 && t <= 57;
}
function ey(t) {
  return t >= 97 && t <= 122 || // A-Z
  t >= 65 && t <= 90;
}
function ty(t) {
  return ey(t) || t === 95;
}
function _x(t) {
  return ey(t) || Na(t) || t === 95;
}
function Sx(t) {
  var e;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let s = 0; s < t.length; ++s) {
    var a;
    const o = t[s], u = Ox(o);
    u !== o.length && (n = (a = n) !== null && a !== void 0 ? a : s, i = s, s !== 0 && u < r && (r = u));
  }
  return t.map((s, o) => o === 0 ? s : s.slice(r)).slice(
    (e = n) !== null && e !== void 0 ? e : 0,
    i + 1
  );
}
function Ox(t) {
  let e = 0;
  for (; e < t.length && oc(t.charCodeAt(e)); )
    ++e;
  return e;
}
function Cx(t, e) {
  const r = t.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((d) => d.length === 0 || oc(d.charCodeAt(0))), s = r.endsWith('\\"""'), o = t.endsWith('"') && !s, u = t.endsWith("\\"), l = o || u, c = (
    // add leading and trailing new lines only if it improves readability
    !i || t.length > 70 || l || a || s
  );
  let f = "";
  const h = i && oc(t.charCodeAt(0));
  return (c && !h || a) && (f += `
`), f += r, (c || l) && (f += `
`), '"""' + f + '"""';
}
var A;
(function(t) {
  t.SOF = "<SOF>", t.EOF = "<EOF>", t.BANG = "!", t.DOLLAR = "$", t.AMP = "&", t.PAREN_L = "(", t.PAREN_R = ")", t.SPREAD = "...", t.COLON = ":", t.EQUALS = "=", t.AT = "@", t.BRACKET_L = "[", t.BRACKET_R = "]", t.BRACE_L = "{", t.PIPE = "|", t.BRACE_R = "}", t.NAME = "Name", t.INT = "Int", t.FLOAT = "Float", t.STRING = "String", t.BLOCK_STRING = "BlockString", t.COMMENT = "Comment";
})(A || (A = {}));
class Ix {
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
    const r = new Kv(A.SOF, 0, 0, 0, 0);
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
    if (e.kind !== A.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const r = Ax(this, e.end);
          e.next = r, r.prev = e, e = r;
        }
      while (e.kind === A.COMMENT);
    return e;
  }
}
function Nx(t) {
  return t === A.BANG || t === A.DOLLAR || t === A.AMP || t === A.PAREN_L || t === A.PAREN_R || t === A.SPREAD || t === A.COLON || t === A.EQUALS || t === A.AT || t === A.BRACKET_L || t === A.BRACKET_R || t === A.BRACE_L || t === A.PIPE || t === A.BRACE_R;
}
function Wi(t) {
  return t >= 0 && t <= 55295 || t >= 57344 && t <= 1114111;
}
function au(t, e) {
  return ry(t.charCodeAt(e)) && ny(t.charCodeAt(e + 1));
}
function ry(t) {
  return t >= 55296 && t <= 56319;
}
function ny(t) {
  return t >= 56320 && t <= 57343;
}
function Wn(t, e) {
  const r = t.source.body.codePointAt(e);
  if (r === void 0)
    return A.EOF;
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
function Ax(t, e) {
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
        return Dx(t, i);
      case 33:
        return lt(t, A.BANG, i, i + 1);
      case 36:
        return lt(t, A.DOLLAR, i, i + 1);
      case 38:
        return lt(t, A.AMP, i, i + 1);
      case 40:
        return lt(t, A.PAREN_L, i, i + 1);
      case 41:
        return lt(t, A.PAREN_R, i, i + 1);
      case 46:
        if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
          return lt(t, A.SPREAD, i, i + 3);
        break;
      case 58:
        return lt(t, A.COLON, i, i + 1);
      case 61:
        return lt(t, A.EQUALS, i, i + 1);
      case 64:
        return lt(t, A.AT, i, i + 1);
      case 91:
        return lt(t, A.BRACKET_L, i, i + 1);
      case 93:
        return lt(t, A.BRACKET_R, i, i + 1);
      case 123:
        return lt(t, A.BRACE_L, i, i + 1);
      case 124:
        return lt(t, A.PIPE, i, i + 1);
      case 125:
        return lt(t, A.BRACE_R, i, i + 1);
      case 34:
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? $x(t, i) : Px(t, i);
    }
    if (Na(a) || a === 45)
      return Rx(t, i, a);
    if (ty(a))
      return jx(t, i);
    throw wt(
      t.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Wi(a) || au(r, i) ? `Unexpected character: ${Wn(t, i)}.` : `Invalid character: ${Wn(t, i)}.`
    );
  }
  return lt(t, A.EOF, n, n);
}
function Dx(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (Wi(a))
      ++i;
    else if (au(r, i))
      i += 2;
    else
      break;
  }
  return lt(
    t,
    A.COMMENT,
    e,
    i,
    r.slice(e + 1, i)
  );
}
function Rx(t, e, r) {
  const n = t.source.body;
  let i = e, a = r, s = !1;
  if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
    if (a = n.charCodeAt(++i), Na(a))
      throw wt(
        t.source,
        i,
        `Invalid number, unexpected digit after 0: ${Wn(
          t,
          i
        )}.`
      );
  } else
    i = tl(t, i, a), a = n.charCodeAt(i);
  if (a === 46 && (s = !0, a = n.charCodeAt(++i), i = tl(t, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = tl(t, i, a), a = n.charCodeAt(i)), a === 46 || ty(a))
    throw wt(
      t.source,
      i,
      `Invalid number, expected digit but got: ${Wn(
        t,
        i
      )}.`
    );
  return lt(
    t,
    s ? A.FLOAT : A.INT,
    e,
    i,
    n.slice(e, i)
  );
}
function tl(t, e, r) {
  if (!Na(r))
    throw wt(
      t.source,
      e,
      `Invalid number, expected digit but got: ${Wn(
        t,
        e
      )}.`
    );
  const n = t.source.body;
  let i = e + 1;
  for (; Na(n.charCodeAt(i)); )
    ++i;
  return i;
}
function Px(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1, a = i, s = "";
  for (; i < n; ) {
    const o = r.charCodeAt(i);
    if (o === 34)
      return s += r.slice(a, i), lt(t, A.STRING, e, i + 1, s);
    if (o === 92) {
      s += r.slice(a, i);
      const u = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? Mx(t, i) : Fx(t, i) : Lx(t, i);
      s += u.value, i += u.size, a = i;
      continue;
    }
    if (o === 10 || o === 13)
      break;
    if (Wi(o))
      ++i;
    else if (au(r, i))
      i += 2;
    else
      throw wt(
        t.source,
        i,
        `Invalid character within String: ${Wn(
          t,
          i
        )}.`
      );
  }
  throw wt(t.source, i, "Unterminated string.");
}
function Mx(t, e) {
  const r = t.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const a = r.charCodeAt(e + i++);
    if (a === 125) {
      if (i < 5 || !Wi(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | sa(a), n < 0)
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
function Fx(t, e) {
  const r = t.source.body, n = Nh(r, e + 2);
  if (Wi(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if (ry(n) && r.charCodeAt(e + 6) === 92 && r.charCodeAt(e + 7) === 117) {
    const i = Nh(r, e + 8);
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
function Nh(t, e) {
  return sa(t.charCodeAt(e)) << 12 | sa(t.charCodeAt(e + 1)) << 8 | sa(t.charCodeAt(e + 2)) << 4 | sa(t.charCodeAt(e + 3));
}
function sa(t) {
  return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 70 ? t - 55 : t >= 97 && t <= 102 ? t - 87 : -1;
}
function Lx(t, e) {
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
function $x(t, e) {
  const r = t.source.body, n = r.length;
  let i = t.lineStart, a = e + 3, s = a, o = "";
  const u = [];
  for (; a < n; ) {
    const l = r.charCodeAt(a);
    if (l === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
      o += r.slice(s, a), u.push(o);
      const c = lt(
        t,
        A.BLOCK_STRING,
        e,
        a + 3,
        // Return a string of the lines joined with U+000A.
        Sx(u).join(`
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
    if (Wi(l))
      ++a;
    else if (au(r, a))
      a += 2;
    else
      throw wt(
        t.source,
        a,
        `Invalid character within String: ${Wn(
          t,
          a
        )}.`
      );
  }
  throw wt(t.source, a, "Unterminated string.");
}
function jx(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (_x(a))
      ++i;
    else
      break;
  }
  return lt(
    t,
    A.NAME,
    e,
    i,
    r.slice(e, i)
  );
}
const Vx = 10, iy = 2;
function kf(t) {
  return su(t, []);
}
function su(t, e) {
  switch (typeof t) {
    case "string":
      return JSON.stringify(t);
    case "function":
      return t.name ? `[function ${t.name}]` : "[function]";
    case "object":
      return zx(t, e);
    default:
      return String(t);
  }
}
function zx(t, e) {
  if (t === null)
    return "null";
  if (e.includes(t))
    return "[Circular]";
  const r = [...e, t];
  if (Wx(t)) {
    const n = t.toJSON();
    if (n !== t)
      return typeof n == "string" ? n : su(n, r);
  } else if (Array.isArray(t))
    return Ux(t, r);
  return qx(t, r);
}
function Wx(t) {
  return typeof t.toJSON == "function";
}
function qx(t, e) {
  const r = Object.entries(t);
  return r.length === 0 ? "{}" : e.length > iy ? "[" + Bx(t) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + su(a, e)
  ).join(", ") + " }";
}
function Ux(t, e) {
  if (t.length === 0)
    return "[]";
  if (e.length > iy)
    return "[Array]";
  const r = Math.min(Vx, t.length), n = t.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(su(t[a], e));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Bx(t) {
  const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof t.constructor == "function") {
    const r = t.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return e;
}
const Hx = (
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
        const s = kf(e);
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
    typeof e == "string" || Qs(!1, `Body must be a string. Received: ${kf(e)}.`), this.body = e, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Qs(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Qs(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Qx(t) {
  return Hx(t, ay);
}
function Yx(t, e) {
  return new Zx(t, e).parseDocument();
}
class Zx {
  constructor(e, r = {}) {
    const n = Qx(e) ? e : new ay(e);
    this._lexer = new Ix(n), this._options = r, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(A.NAME);
    return this.node(e, {
      kind: ie.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: ie.DOCUMENT,
      definitions: this.many(
        A.SOF,
        this.parseDefinition,
        A.EOF
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
    if (this.peek(A.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), r = e ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === A.NAME) {
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
    if (this.peek(A.BRACE_L))
      return this.node(e, {
        kind: ie.OPERATION_DEFINITION,
        operation: li.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let n;
    return this.peek(A.NAME) && (n = this.parseName()), this.node(e, {
      kind: ie.OPERATION_DEFINITION,
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
    const e = this.expectToken(A.NAME);
    switch (e.value) {
      case "query":
        return li.QUERY;
      case "mutation":
        return li.MUTATION;
      case "subscription":
        return li.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      A.PAREN_L,
      this.parseVariableDefinition,
      A.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: ie.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(A.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(A.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(A.DOLLAR), this.node(e, {
      kind: ie.VARIABLE,
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
      kind: ie.SELECTION_SET,
      selections: this.many(
        A.BRACE_L,
        this.parseSelection,
        A.BRACE_R
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
    return this.peek(A.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, r = this.parseName();
    let n, i;
    return this.expectOptionalToken(A.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(e, {
      kind: ie.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(A.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const r = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(A.PAREN_L, r, A.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(A.COLON), this.node(r, {
      kind: ie.ARGUMENT,
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
    this.expectToken(A.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(A.NAME) ? this.node(e, {
      kind: ie.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: ie.INLINE_FRAGMENT,
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
      kind: ie.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: ie.FRAGMENT_DEFINITION,
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
      case A.BRACKET_L:
        return this.parseList(e);
      case A.BRACE_L:
        return this.parseObject(e);
      case A.INT:
        return this.advanceLexer(), this.node(r, {
          kind: ie.INT,
          value: r.value
        });
      case A.FLOAT:
        return this.advanceLexer(), this.node(r, {
          kind: ie.FLOAT,
          value: r.value
        });
      case A.STRING:
      case A.BLOCK_STRING:
        return this.parseStringLiteral();
      case A.NAME:
        switch (this.advanceLexer(), r.value) {
          case "true":
            return this.node(r, {
              kind: ie.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: ie.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: ie.NULL
            });
          default:
            return this.node(r, {
              kind: ie.ENUM,
              value: r.value
            });
        }
      case A.DOLLAR:
        if (e)
          if (this.expectToken(A.DOLLAR), this._lexer.token.kind === A.NAME) {
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
      kind: ie.STRING,
      value: e.value,
      block: e.kind === A.BLOCK_STRING
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
      kind: ie.LIST,
      values: this.any(A.BRACKET_L, r, A.BRACKET_R)
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
      kind: ie.OBJECT,
      fields: this.any(A.BRACE_L, r, A.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(A.COLON), this.node(r, {
      kind: ie.OBJECT_FIELD,
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
    for (; this.peek(A.AT); )
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
    return this.expectToken(A.AT), this.node(r, {
      kind: ie.DIRECTIVE,
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
    if (this.expectOptionalToken(A.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(A.BRACKET_R), r = this.node(e, {
        kind: ie.LIST_TYPE,
        type: n
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(A.BANG) ? this.node(e, {
      kind: ie.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: ie.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(A.STRING) || this.peek(A.BLOCK_STRING);
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
      A.BRACE_L,
      this.parseOperationTypeDefinition,
      A.BRACE_R
    );
    return this.node(e, {
      kind: ie.SCHEMA_DEFINITION,
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
    this.expectToken(A.COLON);
    const n = this.parseNamedType();
    return this.node(e, {
      kind: ie.OPERATION_TYPE_DEFINITION,
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
      kind: ie.SCALAR_TYPE_DEFINITION,
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
      kind: ie.OBJECT_TYPE_DEFINITION,
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
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(A.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      A.BRACE_L,
      this.parseFieldDefinition,
      A.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(A.COLON);
    const a = this.parseTypeReference(), s = this.parseConstDirectives();
    return this.node(e, {
      kind: ie.FIELD_DEFINITION,
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
      A.PAREN_L,
      this.parseInputValueDef,
      A.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseName();
    this.expectToken(A.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(A.EQUALS) && (a = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(e, {
      kind: ie.INPUT_VALUE_DEFINITION,
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
      kind: ie.INTERFACE_TYPE_DEFINITION,
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
      kind: ie.UNION_TYPE_DEFINITION,
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
    return this.expectOptionalToken(A.EQUALS) ? this.delimitedMany(A.PIPE, this.parseNamedType) : [];
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
      kind: ie.ENUM_TYPE_DEFINITION,
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
      A.BRACE_L,
      this.parseEnumValueDefinition,
      A.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: ie.ENUM_VALUE_DEFINITION,
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
      kind: ie.INPUT_OBJECT_TYPE_DEFINITION,
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
      A.BRACE_L,
      this.parseInputValueDef,
      A.BRACE_R
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
    if (e.kind === A.NAME)
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
      A.BRACE_L,
      this.parseOperationTypeDefinition,
      A.BRACE_R
    );
    if (r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: ie.SCHEMA_EXTENSION,
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
      kind: ie.SCALAR_TYPE_EXTENSION,
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
      kind: ie.OBJECT_TYPE_EXTENSION,
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
      kind: ie.INTERFACE_TYPE_EXTENSION,
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
      kind: ie.UNION_TYPE_EXTENSION,
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
      kind: ie.ENUM_TYPE_EXTENSION,
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
      kind: ie.INPUT_OBJECT_TYPE_EXTENSION,
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
    this.expectKeyword("directive"), this.expectToken(A.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(e, {
      kind: ie.DIRECTIVE_DEFINITION,
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
    return this.delimitedMany(A.PIPE, this.parseDirectiveLocation);
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
    if (Object.prototype.hasOwnProperty.call(sc, r.value))
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
    return this._options.noLocation !== !0 && (r.loc = new Tx(
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
    if (r.kind === A.NAME && r.value === e)
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
    return r.kind === A.NAME && r.value === e ? (this.advanceLexer(), !0) : !1;
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
    if (e !== void 0 && r.kind !== A.EOF && (++this._tokenCounter, this._tokenCounter > e))
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
  return Nx(t) ? `"${t}"` : t;
}
function Gx(t) {
  return `"${t.replace(Jx, Kx)}"`;
}
const Jx = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Kx(t) {
  return Xx[t.charCodeAt(0)];
}
const Xx = [
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
], _f = Object.freeze({});
function Fr(t, e, r = Xv) {
  const n = /* @__PURE__ */ new Map();
  for (const y of Object.values(ie))
    n.set(y, eT(e, y));
  let i, a = Array.isArray(t), s = [t], o = -1, u = [], l = t, c, f;
  const h = [], d = [];
  do {
    o++;
    const y = o === s.length, g = y && u.length !== 0;
    if (y) {
      if (c = d.length === 0 ? void 0 : h[h.length - 1], l = f, f = d.pop(), g)
        if (a) {
          l = l.slice();
          let x = 0;
          for (const [b, S] of u) {
            const N = b - x;
            S === null ? (l.splice(N, 1), x++) : l[N] = S;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [x, b] of u)
            l[x] = b;
        }
      o = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (f) {
      if (c = a ? o : s[o], l = f[c], l == null)
        continue;
      h.push(c);
    }
    let w;
    if (!Array.isArray(l)) {
      var p, m;
      Ih(l) || Qs(!1, `Invalid AST Node: ${kf(l)}.`);
      const x = y ? (p = n.get(l.kind)) === null || p === void 0 ? void 0 : p.leave : (m = n.get(l.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (w = x == null ? void 0 : x.call(e, l, c, f, h, d), w === _f)
        break;
      if (w === !1) {
        if (!y) {
          h.pop();
          continue;
        }
      } else if (w !== void 0 && (u.push([c, w]), !y))
        if (Ih(w))
          l = w;
        else {
          h.pop();
          continue;
        }
    }
    if (w === void 0 && g && u.push([c, l]), y)
      h.pop();
    else {
      var v;
      i = {
        inArray: a,
        index: o,
        keys: s,
        edits: u,
        prev: i
      }, a = Array.isArray(l), s = a ? l : (v = r[l.kind]) !== null && v !== void 0 ? v : [], o = -1, u = [], f && d.push(f), f = l;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : t;
}
function eT(t, e) {
  const r = t[e];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: t.enter,
    leave: t.leave
  };
}
function tT(t) {
  return Fr(t, nT);
}
const rT = 80, nT = {
  Name: {
    leave: (t) => t.value
  },
  Variable: {
    leave: (t) => "$" + t.name
  },
  // Document
  Document: {
    leave: (t) => ae(t.definitions, `

`)
  },
  OperationDefinition: {
    leave(t) {
      const e = Ne("(", ae(t.variableDefinitions, ", "), ")"), r = ae(
        [
          t.operation,
          ae([t.name, e]),
          ae(t.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + t.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: t, type: e, defaultValue: r, directives: n }) => t + ": " + e + Ne(" = ", r) + Ne(" ", ae(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: t }) => er(t)
  },
  Field: {
    leave({ alias: t, name: e, arguments: r, directives: n, selectionSet: i }) {
      const a = Ne("", t, ": ") + e;
      let s = a + Ne("(", ae(r, ", "), ")");
      return s.length > rT && (s = a + Ne(`(
`, Ys(ae(r, `
`)), `
)`)), ae([s, ae(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: t, directives: e }) => "..." + t + Ne(" ", ae(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: t, directives: e, selectionSet: r }) => ae(
      [
        "...",
        Ne("on ", t),
        ae(e, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: t, typeCondition: e, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${t}${Ne("(", ae(r, ", "), ")")} on ${e} ${Ne("", ae(n, " "), " ")}` + i
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
    leave: ({ value: t, block: e }) => e ? Cx(t) : Gx(t)
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
    leave: ({ values: t }) => "[" + ae(t, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: t }) => "{" + ae(t, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: t, arguments: e }) => "@" + t + Ne("(", ae(e, ", "), ")")
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
    leave: ({ description: t, directives: e, operationTypes: r }) => Ne("", t, `
`) + ae(["schema", ae(e, " "), er(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: t, type: e }) => t + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: t, name: e, directives: r }) => Ne("", t, `
`) + ae(["scalar", e, ae(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => Ne("", t, `
`) + ae(
      [
        "type",
        e,
        Ne("implements ", ae(r, " & ")),
        ae(n, " "),
        er(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: t, name: e, arguments: r, type: n, directives: i }) => Ne("", t, `
`) + e + (Ah(r) ? Ne(`(
`, Ys(ae(r, `
`)), `
)`) : Ne("(", ae(r, ", "), ")")) + ": " + n + Ne(" ", ae(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: t, name: e, type: r, defaultValue: n, directives: i }) => Ne("", t, `
`) + ae(
      [e + ": " + r, Ne("= ", n), ae(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => Ne("", t, `
`) + ae(
      [
        "interface",
        e,
        Ne("implements ", ae(r, " & ")),
        ae(n, " "),
        er(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, types: n }) => Ne("", t, `
`) + ae(
      ["union", e, ae(r, " "), Ne("= ", ae(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, values: n }) => Ne("", t, `
`) + ae(["enum", e, ae(r, " "), er(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: t, name: e, directives: r }) => Ne("", t, `
`) + ae([e, ae(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, fields: n }) => Ne("", t, `
`) + ae(["input", e, ae(r, " "), er(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: t, name: e, arguments: r, repeatable: n, locations: i }) => Ne("", t, `
`) + "directive @" + e + (Ah(r) ? Ne(`(
`, Ys(ae(r, `
`)), `
)`) : Ne("(", ae(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + ae(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: t, operationTypes: e }) => ae(
      ["extend schema", ae(t, " "), er(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: t, directives: e }) => ae(["extend scalar", t, ae(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => ae(
      [
        "extend type",
        t,
        Ne("implements ", ae(e, " & ")),
        ae(r, " "),
        er(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => ae(
      [
        "extend interface",
        t,
        Ne("implements ", ae(e, " & ")),
        ae(r, " "),
        er(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: t, directives: e, types: r }) => ae(
      [
        "extend union",
        t,
        ae(e, " "),
        Ne("= ", ae(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: t, directives: e, values: r }) => ae(["extend enum", t, ae(e, " "), er(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: t, directives: e, fields: r }) => ae(["extend input", t, ae(e, " "), er(r)], " ")
  }
};
function ae(t, e = "") {
  var r;
  return (r = t == null ? void 0 : t.filter((n) => n).join(e)) !== null && r !== void 0 ? r : "";
}
function er(t) {
  return Ne(`{
`, Ys(ae(t, `
`)), `
}`);
}
function Ne(t, e, r = "") {
  return e != null && e !== "" ? t + e + r : "";
}
function Ys(t) {
  return Ne("  ", t.replace(/\n/g, `
  `));
}
function Ah(t) {
  var e;
  return (e = t == null ? void 0 : t.some((r) => r.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function Dh(t) {
  return t.kind === ie.FIELD || t.kind === ie.FRAGMENT_SPREAD || t.kind === ie.INLINE_FRAGMENT;
}
function Ga(t, e) {
  var r = t.directives;
  return !r || !r.length ? !0 : sT(r).every(function(n) {
    var i = n.directive, a = n.ifArgument, s = !1;
    return a.value.kind === "Variable" ? (s = e && e[a.value.name.value], pe(s !== void 0, 68, i.name.value)) : s = a.value.value, i.name.value === "skip" ? !s : s;
  });
}
function Aa(t, e, r) {
  var n = new Set(t), i = n.size;
  return Fr(e, {
    Directive: function(a) {
      if (n.delete(a.name.value) && (!r || !n.size))
        return _f;
    }
  }), r ? !n.size : n.size < i;
}
function iT(t) {
  return t && Aa(["client", "export"], t, !0);
}
function aT(t) {
  var e = t.name.value;
  return e === "skip" || e === "include";
}
function sT(t) {
  var e = [];
  return t && t.length && t.forEach(function(r) {
    if (aT(r)) {
      var n = r.arguments, i = r.name.value;
      pe(n && n.length === 1, 69, i);
      var a = n[0];
      pe(a.name && a.name.value === "if", 70, i);
      var s = a.value;
      pe(s && (s.kind === "Variable" || s.kind === "BooleanValue"), 71, i), e.push({ directive: r, ifArgument: a });
    }
  }), e;
}
const oT = () => /* @__PURE__ */ Object.create(null), { forEach: uT, slice: Rh } = Array.prototype, { hasOwnProperty: lT } = Object.prototype;
let qi = class oy {
  constructor(e = !0, r = oT) {
    this.weakness = e, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let r = this;
    return uT.call(e, (n) => r = r.getChildTrie(n)), lT.call(r, "data") ? r.data : r.data = this.makeData(Rh.call(e));
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
      a && (r = a.removeArray(Rh.call(e, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
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
    return this.weakness && cT(e) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function cT(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Ui = typeof WeakMap == "function" && !tr(function() {
  return navigator.product == "ReactNative" && !global.HermesInternal;
}), uy = typeof WeakSet == "function", Sf = typeof Symbol == "function" && typeof Symbol.for == "function", ou = Sf && Symbol.asyncIterator;
tr(function() {
  return window.document.createElement;
});
tr(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function rt(t) {
  return t !== null && typeof t == "object";
}
function fT(t, e) {
  var r = e, n = [];
  t.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw At(
        72,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof r > "u" && (pe(n.length === 1, 73, n.length), r = n[0].name.value);
  var i = k(k({}, t), { definitions: sr([
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
function uu(t) {
  t === void 0 && (t = []);
  var e = {};
  return t.forEach(function(r) {
    e[r.name.value] = r;
  }), e;
}
function lu(t, e) {
  switch (t.kind) {
    case "InlineFragment":
      return t;
    case "FragmentSpread": {
      var r = t.name.value;
      if (typeof e == "function")
        return e(r);
      var n = e && e[r];
      return pe(n, 74, r), n || null;
    }
    default:
      return null;
  }
}
function dT() {
}
class uc {
  constructor(e = 1 / 0, r = dT) {
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
function lc() {
}
const hT = lc, pT = typeof WeakRef < "u" ? WeakRef : function(t) {
  return { deref: () => t };
}, mT = typeof WeakMap < "u" ? WeakMap : Map, vT = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: lc,
    unregister: lc
  };
}, yT = 10024;
class vo {
  constructor(e = 1 / 0, r = hT) {
    this.max = e, this.dispose = r, this.map = new mT(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < yT; i++) {
        const a = n.next().value;
        if (!a)
          break;
        this.unfinalizedNodes.delete(a);
        const s = a.key;
        delete a.key, a.keyRef = new pT(s), this.registry.register(s, a, a);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new vT(this.deleteNode.bind(this));
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
var rl = /* @__PURE__ */ new WeakSet();
function ly(t) {
  t.size <= (t.max || -1) || rl.has(t) || (rl.add(t), setTimeout(function() {
    t.clean(), rl.delete(t);
  }, 100));
}
var Of = function(t, e) {
  var r = new vo(t, e);
  return r.set = function(n, i) {
    var a = vo.prototype.set.call(this, n, i);
    return ly(this), a;
  }, r;
}, gT = function(t, e) {
  var r = new uc(t, e);
  return r.set = function(n, i) {
    var a = uc.prototype.set.call(this, n, i);
    return ly(this), a;
  }, r;
}, bT = Symbol.for("apollo.cacheSize"), vr = k({}, nc[bT]), kn = {};
function Cf(t, e) {
  kn[t] = e;
}
var wT = globalThis.__DEV__ !== !1 ? kT : void 0, ET = globalThis.__DEV__ !== !1 ? _T : void 0, xT = globalThis.__DEV__ !== !1 ? cy : void 0;
function TT() {
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
function kT() {
  var t, e, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: TT(),
    sizes: k({ print: (t = kn.print) === null || t === void 0 ? void 0 : t.call(kn), parser: (e = kn.parser) === null || e === void 0 ? void 0 : e.call(kn), canonicalStringify: (r = kn.canonicalStringify) === null || r === void 0 ? void 0 : r.call(kn), links: fc(this.link), queryManager: {
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
function _T() {
  var t = this.config.fragments;
  return k(k({}, cy.apply(this)), { addTypenameDocumentTransform: dy(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: Jr(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: Jr(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: Jr(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: Jr(t == null ? void 0 : t.findFragmentSpreads),
    lookup: Jr(t == null ? void 0 : t.lookup),
    transform: Jr(t == null ? void 0 : t.transform)
  } });
}
function ST(t) {
  return !!t && "dirtyKey" in t;
}
function Jr(t) {
  return ST(t) ? t.size : void 0;
}
function fy(t) {
  return t != null;
}
function dy(t) {
  return cc(t).map(function(e) {
    return { cache: e };
  });
}
function cc(t) {
  return t ? sr(sr([
    Jr(t == null ? void 0 : t.performWork)
  ], cc(t == null ? void 0 : t.left), !0), cc(t == null ? void 0 : t.right), !0).filter(fy) : [];
}
function fc(t) {
  var e;
  return t ? sr(sr([
    (e = t == null ? void 0 : t.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)
  ], fc(t == null ? void 0 : t.left), !0), fc(t == null ? void 0 : t.right), !0).filter(fy) : [];
}
var sn = Object.assign(function(e) {
  return JSON.stringify(e, OT);
}, {
  reset: function() {
    ci = new gT(
      vr.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && Cf("canonicalStringify", function() {
  return ci.size;
});
var ci;
sn.reset();
function OT(t, e) {
  if (e && typeof e == "object") {
    var r = Object.getPrototypeOf(e);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(e);
      if (n.every(CT))
        return e;
      var i = JSON.stringify(n), a = ci.get(i);
      if (!a) {
        n.sort();
        var s = JSON.stringify(n);
        a = ci.get(s) || n, ci.set(i, a), ci.set(s, a);
      }
      var o = Object.create(r);
      return a.forEach(function(u) {
        o[u] = e[u];
      }), o;
    }
  }
  return e;
}
function CT(t, e, r) {
  return e === 0 || r[e - 1] <= t;
}
function gi(t) {
  return { __ref: String(t) };
}
function We(t) {
  return !!(t && typeof t == "object" && typeof t.__ref == "string");
}
function IT(t) {
  return rt(t) && t.kind === "Document" && Array.isArray(t.definitions);
}
function NT(t) {
  return t.kind === "StringValue";
}
function AT(t) {
  return t.kind === "BooleanValue";
}
function DT(t) {
  return t.kind === "IntValue";
}
function RT(t) {
  return t.kind === "FloatValue";
}
function PT(t) {
  return t.kind === "Variable";
}
function MT(t) {
  return t.kind === "ObjectValue";
}
function FT(t) {
  return t.kind === "ListValue";
}
function LT(t) {
  return t.kind === "EnumValue";
}
function $T(t) {
  return t.kind === "NullValue";
}
function _i(t, e, r, n) {
  if (DT(r) || RT(r))
    t[e.value] = Number(r.value);
  else if (AT(r) || NT(r))
    t[e.value] = r.value;
  else if (MT(r)) {
    var i = {};
    r.fields.map(function(s) {
      return _i(i, s.name, s.value, n);
    }), t[e.value] = i;
  } else if (PT(r)) {
    var a = (n || {})[r.name.value];
    t[e.value] = a;
  } else if (FT(r))
    t[e.value] = r.values.map(function(s) {
      var o = {};
      return _i(o, e, s, n), o[e.value];
    });
  else if (LT(r))
    t[e.value] = r.value;
  else if ($T(r))
    t[e.value] = null;
  else
    throw At(83, e.value, r.kind);
}
function jT(t, e) {
  var r = null;
  t.directives && (r = {}, t.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var s = a.name, o = a.value;
      return _i(r[i.name.value], s, o, e);
    });
  }));
  var n = null;
  return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
    var a = i.name, s = i.value;
    return _i(n, a, s, e);
  })), hy(t.name.value, n, r);
}
var VT = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Ji = sn, hy = Object.assign(function(t, e, r) {
  if (e && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(o) {
        i[o] = e[o];
      }), "".concat(r.connection.key, "(").concat(Ji(i), ")");
    } else
      return r.connection.key;
  var a = t;
  if (e) {
    var s = Ji(e);
    a += "(".concat(s, ")");
  }
  return r && Object.keys(r).forEach(function(o) {
    VT.indexOf(o) === -1 && (r[o] && Object.keys(r[o]).length ? a += "@".concat(o, "(").concat(Ji(r[o]), ")") : a += "@".concat(o));
  }), a;
}, {
  setStringify: function(t) {
    var e = Ji;
    return Ji = t, e;
  }
});
function cu(t, e) {
  if (t.arguments && t.arguments.length) {
    var r = {};
    return t.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return _i(r, i, a, e);
    }), r;
  }
  return null;
}
function cn(t) {
  return t.alias ? t.alias.value : t.name.value;
}
function dc(t, e, r) {
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
      var s = u[o], l = dc(t, lu(s, r).selectionSet, r);
      if (typeof l == "string")
        return l;
    }
}
function fn(t) {
  return t.kind === "Field";
}
function zT(t) {
  return t.kind === "InlineFragment";
}
function Ja(t) {
  pe(t && t.kind === "Document", 75);
  var e = t.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw At(76, r.kind);
    return r;
  });
  return pe(e.length <= 1, 77, e.length), t;
}
function Ka(t) {
  return Ja(t), t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function hc(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function fu(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function py(t) {
  var e = Ka(t);
  return pe(e && e.operation === "query", 78), e;
}
function WT(t) {
  pe(t.kind === "Document", 79), pe(t.definitions.length <= 1, 80);
  var e = t.definitions[0];
  return pe(e.kind === "FragmentDefinition", 81), e;
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
  throw At(82);
}
function If(t) {
  var e = /* @__PURE__ */ Object.create(null), r = t && t.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && _i(e, n.variable.name, n.defaultValue);
  }), e;
}
const qT = () => /* @__PURE__ */ Object.create(null), { forEach: UT, slice: BT } = Array.prototype, { hasOwnProperty: HT } = Object.prototype;
class Nf {
  constructor(e = !0, r = qT) {
    this.weakness = e, this.makeData = r;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let r = this;
    return UT.call(e, (n) => r = r.getChildTrie(n)), HT.call(r, "data") ? r.data : r.data = this.makeData(BT.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let r = this;
    for (let n = 0, i = e.length; r && n < i; ++n) {
      const a = this.weakness && Ph(e[n]) ? r.weak : r.strong;
      r = a && a.get(e[n]);
    }
    return r && r.data;
  }
  getChildTrie(e) {
    const r = this.weakness && Ph(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(e);
    return n || r.set(e, n = new Nf(this.weakness, this.makeData)), n;
  }
}
function Ph(t) {
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
const Mh = {};
let QT = 1;
const YT = () => class {
  constructor() {
    this.id = [
      "slot",
      QT++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = Et; e; e = e.parent)
      if (this.id in e.slots) {
        const r = e.slots[this.id];
        if (r === Mh)
          break;
        return e !== Et && (Et.slots[this.id] = r), !0;
      }
    return Et && (Et.slots[this.id] = Mh), !1;
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
function Fh(t) {
  try {
    return t();
  } catch {
  }
}
const nl = "@wry/context:Slot", ZT = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Fh(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Fh(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Lh = ZT, my = Lh[nl] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[nl] || function(t) {
  try {
    Object.defineProperty(Lh, nl, {
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
}(YT()), du = new my(), { hasOwnProperty: GT } = Object.prototype, Af = Array.from || function(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
};
function Df(t) {
  const { unsubscribe: e } = t;
  typeof e == "function" && (t.unsubscribe = void 0, e());
}
const Da = [], JT = 100;
function Si(t, e) {
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
class hu {
  constructor(e) {
    this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++hu.count;
  }
  peek() {
    if (this.value.length === 1 && !dn(this))
      return $h(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(e) {
    return Si(!this.recomputing, "already recomputing"), $h(this), dn(this) ? KT(this, e) : yy(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, by(this), Df(this));
  }
  dispose() {
    this.setDirty(), ky(this), Rf(this, (e, r) => {
      e.setDirty(), _y(e, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(e) {
    e.add(this), this.deps || (this.deps = Da.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
  }
  forgetDeps() {
    this.deps && (Af(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), Da.push(this.deps), this.deps = null);
  }
}
hu.count = 0;
function $h(t) {
  const e = du.getValue();
  if (e)
    return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), dn(t) ? Ey(e, t) : xy(e, t), e;
}
function KT(t, e) {
  return ky(t), du.withValue(t, XT, [t, e]), tk(t, e) && ek(t), yy(t.value);
}
function XT(t, e) {
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
function ek(t) {
  t.dirty = !1, !dn(t) && wy(t);
}
function by(t) {
  Rf(t, Ey);
}
function wy(t) {
  Rf(t, xy);
}
function Rf(t, e) {
  const r = t.parents.size;
  if (r) {
    const n = Af(t.parents);
    for (let i = 0; i < r; ++i)
      e(n[i], t);
  }
}
function Ey(t, e) {
  Si(t.childValues.has(e)), Si(dn(e));
  const r = !dn(t);
  if (!t.dirtyChildren)
    t.dirtyChildren = Da.pop() || /* @__PURE__ */ new Set();
  else if (t.dirtyChildren.has(e))
    return;
  t.dirtyChildren.add(e), r && by(t);
}
function xy(t, e) {
  Si(t.childValues.has(e)), Si(!dn(e));
  const r = t.childValues.get(e);
  r.length === 0 ? t.childValues.set(e, gy(e.value)) : vy(r, e.value) || t.setDirty(), Ty(t, e), !dn(t) && wy(t);
}
function Ty(t, e) {
  const r = t.dirtyChildren;
  r && (r.delete(e), r.size === 0 && (Da.length < JT && Da.push(r), t.dirtyChildren = null));
}
function ky(t) {
  t.childValues.size > 0 && t.childValues.forEach((e, r) => {
    _y(t, r);
  }), t.forgetDeps(), Si(t.dirtyChildren === null);
}
function _y(t, e) {
  e.parents.delete(t), t.childValues.delete(e), Ty(t, e);
}
function tk(t, e) {
  if (typeof t.subscribe == "function")
    try {
      Df(t), t.unsubscribe = t.subscribe.apply(null, e);
    } catch {
      return t.setDirty(), !1;
    }
  return !0;
}
const rk = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Sy(t) {
  const e = /* @__PURE__ */ new Map();
  function r(n) {
    const i = du.getValue();
    if (i) {
      let a = e.get(n);
      a || e.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return r.dirty = function(i, a) {
    const s = e.get(i);
    if (s) {
      const o = a && GT.call(rk, a) ? a : "setDirty";
      Af(s).forEach((u) => u[o]()), e.delete(i), Df(s);
    }
  }, r;
}
let jh;
function nk(...t) {
  return (jh || (jh = new Nf(typeof WeakMap == "function"))).lookupArray(t);
}
const il = /* @__PURE__ */ new Set();
function Ra(t, { max: e = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = nk, normalizeResult: i, subscribe: a, cache: s = uc } = /* @__PURE__ */ Object.create(null)) {
  const o = typeof s == "function" ? new s(e, (h) => h.dispose()) : s, u = function() {
    const h = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (h === void 0)
      return t.apply(null, arguments);
    let d = o.get(h);
    d || (o.set(h, d = new hu(t)), d.normalizeResult = i, d.subscribe = a, d.forget = () => o.delete(h));
    const p = d.recompute(Array.prototype.slice.call(arguments));
    return o.set(h, d), il.add(o), du.hasValue() || (il.forEach((m) => m.clean()), il.clear()), p;
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
function ik(t) {
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
      return new t(ik, { cache: !1 });
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
        var r = new qi(Ui);
        this.performWork = Ra(t.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = e.getCacheKey(n);
            if (i)
              return pe(Array.isArray(i), 67), r.lookupArray(i);
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
), ma, pu = Object.assign(function(t) {
  var e = ma.get(t);
  return e || (e = tT(t), ma.set(t, e)), e;
}, {
  reset: function() {
    ma = new Of(
      vr.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
pu.reset();
globalThis.__DEV__ !== !1 && Cf("print", function() {
  return ma ? ma.size : 0;
});
var nt = Array.isArray;
function yr(t) {
  return Array.isArray(t) && t.length > 0;
}
var Vh = {
  kind: ie.FIELD,
  name: {
    kind: ie.NAME,
    value: "__typename"
  }
};
function Cy(t, e) {
  return !t || t.selectionSet.selections.every(function(r) {
    return r.kind === ie.FRAGMENT_SPREAD && Cy(e[r.name.value], e);
  });
}
function ak(t) {
  return Cy(Ka(t) || WT(t), uu(fu(t))) ? null : t;
}
function sk(t) {
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
function zh(t) {
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
  for (var r = zh(""), n = zh(""), i = function(y) {
    for (var g = 0, w = void 0; g < y.length && (w = y[g]); ++g)
      if (!nt(w)) {
        if (w.kind === ie.OPERATION_DEFINITION)
          return r(w.name && w.name.value);
        if (w.kind === ie.FRAGMENT_DEFINITION)
          return n(w.name.value);
      }
    return globalThis.__DEV__ !== !1 && pe.error(84), null;
  }, a = 0, s = e.definitions.length - 1; s >= 0; --s)
    e.definitions[s].kind === ie.OPERATION_DEFINITION && ++a;
  var o = sk(t), u = function(y) {
    return yr(y) && y.map(o).some(function(g) {
      return g && g.remove;
    });
  }, l = /* @__PURE__ */ new Map(), c = !1, f = {
    enter: function(y) {
      if (u(y.directives))
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
      enter: function(y, g, w, x, b) {
        var S = i(b);
        S && S.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, g, w, x, b) {
        if (u(y.directives))
          return c = !0, null;
        var S = i(b);
        S && S.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, g, w, x) {
        l.set(JSON.stringify(x), y);
      },
      leave: function(y, g, w, x) {
        var b = l.get(JSON.stringify(x));
        if (y === b)
          return y;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          a > 0 && y.selectionSet.selections.every(function(S) {
            return S.kind === ie.FIELD && S.name.value === "__typename";
          })
        )
          return n(y.name.value).removed = !0, c = !0, null;
      }
    },
    Directive: {
      leave: function(y) {
        if (o(y))
          return c = !0, null;
      }
    }
  });
  if (!c)
    return e;
  var d = function(y) {
    return y.transitiveVars || (y.transitiveVars = new Set(y.variables), y.removed || y.fragmentSpreads.forEach(function(g) {
      d(n(g)).transitiveVars.forEach(function(w) {
        y.transitiveVars.add(w);
      });
    })), y;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(y) {
    y.kind === ie.OPERATION_DEFINITION ? d(r(y.name && y.name.value)).fragmentSpreads.forEach(function(g) {
      p.add(g);
    }) : y.kind === ie.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !n(y.name.value).removed && p.add(y.name.value);
  }), p.forEach(function(y) {
    d(n(y)).fragmentSpreads.forEach(function(g) {
      p.add(g);
    });
  });
  var m = function(y) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!p.has(y) || n(y).removed);
  }, v = {
    enter: function(y) {
      if (m(y.name.value))
        return null;
    }
  };
  return ak(Fr(h, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: v,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: v,
    OperationDefinition: {
      leave: function(y) {
        if (y.variableDefinitions) {
          var g = d(
            // If an operation is anonymous, we use the empty string as its key.
            r(y.name && y.name.value)
          ).transitiveVars;
          if (g.size < y.variableDefinitions.length)
            return k(k({}, y), { variableDefinitions: y.variableDefinitions.filter(function(w) {
              return g.has(w.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Pf = Object.assign(function(t) {
  return Fr(t, {
    SelectionSet: {
      enter: function(e, r, n) {
        if (!(n && n.kind === ie.OPERATION_DEFINITION)) {
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
                return k(k({}, e), { selections: sr(sr([], i, !0), [Vh], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(t) {
    return t === Vh;
  }
});
function ok(t) {
  var e = Xa(t), r = e.operation;
  if (r === "query")
    return t;
  var n = Fr(t, {
    OperationDefinition: {
      enter: function(i) {
        return k(k({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Ny(t) {
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
var uk = Object.prototype.hasOwnProperty;
function Wh() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return mu(t);
}
function mu(t) {
  var e = t[0] || {}, r = t.length;
  if (r > 1)
    for (var n = new hn(), i = 1; i < r; ++i)
      e = n.merge(e, t[i]);
  return e;
}
var lk = function(t, e, r) {
  return this.merge(t[r], e[r]);
}, hn = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = lk), this.reconciler = e, this.isObject = rt, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return t.prototype.merge = function(e, r) {
      for (var n = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return rt(r) && rt(e) ? (Object.keys(r).forEach(function(s) {
        if (uk.call(e, s)) {
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
      return rt(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = k({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
    }, t;
  }()
);
function ck(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r)
    return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = fk(t)) || e) {
    r && (t = r);
    var n = 0;
    return function() {
      return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fk(t, e) {
  if (t) {
    if (typeof t == "string")
      return qh(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qh(t, e);
  }
}
function qh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Uh(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Mf(t, e, r) {
  return e && Uh(t.prototype, e), r && Uh(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var Ff = function() {
  return typeof Symbol == "function";
}, Lf = function(t) {
  return Ff() && !!Symbol[t];
}, $f = function(t) {
  return Lf(t) ? Symbol[t] : "@@" + t;
};
Ff() && !Lf("observable") && (Symbol.observable = Symbol("observable"));
var dk = $f("iterator"), pc = $f("observable"), Ay = $f("species");
function yo(t, e) {
  var r = t[e];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function Ki(t) {
  var e = t.constructor;
  return e !== void 0 && (e = e[Ay], e === null && (e = void 0)), e !== void 0 ? e : ze;
}
function hk(t) {
  return t instanceof ze;
}
function Oi(t) {
  Oi.log ? Oi.log(t) : setTimeout(function() {
    throw t;
  });
}
function Zs(t) {
  Promise.resolve().then(function() {
    try {
      t();
    } catch (e) {
      Oi(e);
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
      Oi(n);
    }
}
function mc(t) {
  t._observer = void 0, t._queue = void 0, t._state = "closed";
}
function pk(t) {
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
        if (mc(t), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        mc(t), i && i.call(n);
        break;
    }
  } catch (a) {
    Oi(a);
  }
  t._state === "closed" ? Dy(t) : t._state === "running" && (t._state = "ready");
}
function al(t, e, r) {
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
        return pk(t);
      });
      return;
    }
    Ry(t, e, r);
  }
}
var mk = /* @__PURE__ */ function() {
  function t(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new vk(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (a) {
      i.error(a);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = t.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (mc(this), Dy(this));
  }, Mf(t, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), t;
}(), vk = /* @__PURE__ */ function() {
  function t(r) {
    this._subscription = r;
  }
  var e = t.prototype;
  return e.next = function(n) {
    al(this._subscription, "next", n);
  }, e.error = function(n) {
    al(this._subscription, "error", n);
  }, e.complete = function() {
    al(this._subscription, "complete");
  }, Mf(t, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), t;
}(), ze = /* @__PURE__ */ function() {
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
    }), new mk(n, this._subscriber);
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
    var a = Ki(this);
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
    var a = Ki(this);
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
    var a = Ki(this), s = arguments.length > 1, o = !1, u = arguments[1], l = u;
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
    var o = Ki(this);
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
    var a = Ki(this);
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
  }, e[pc] = function() {
    return this;
  }, t.from = function(n) {
    var i = typeof this == "function" ? this : t;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var a = yo(n, pc);
    if (a) {
      var s = a.call(n);
      if (Object(s) !== s)
        throw new TypeError(s + " is not an object");
      return hk(s) && s.constructor === i ? s : new i(function(o) {
        return s.subscribe(o);
      });
    }
    if (Lf("iterator") && (a = yo(n, dk), a))
      return new i(function(o) {
        Zs(function() {
          if (!o.closed) {
            for (var u = ck(a.call(n)), l; !(l = u()).done; ) {
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
  }, Mf(t, null, [{
    key: Ay,
    get: function() {
      return this;
    }
  }]), t;
}();
Ff() && Object.defineProperty(ze, Symbol("extensions"), {
  value: {
    symbol: pc,
    hostReportError: Oi
  },
  configurable: !0
});
function yk(t) {
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
var ni;
typeof self < "u" ? ni = self : typeof window < "u" ? ni = window : typeof global < "u" ? ni = global : typeof module < "u" ? ni = module : ni = Function("return this")();
yk(ni);
var Bh = ze.prototype, Hh = "@@observable";
Bh[Hh] || (Bh[Hh] = function() {
  return this;
});
var gk = Object.prototype.toString;
function Py(t) {
  return vc(t);
}
function vc(t, e) {
  switch (gk.call(t)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var r = t.slice(0);
      return e.set(t, r), r.forEach(function(i, a) {
        r[a] = vc(i, e);
      }), r;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var n = Object.create(Object.getPrototypeOf(t));
      return e.set(t, n), Object.keys(t).forEach(function(i) {
        n[i] = vc(t[i], e);
      }), n;
    }
    default:
      return t;
  }
}
function bk(t) {
  var e = /* @__PURE__ */ new Set([t]);
  return e.forEach(function(r) {
    rt(r) && wk(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      rt(r[n]) && e.add(r[n]);
    });
  }), t;
}
function wk(t) {
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
function yc(t) {
  return globalThis.__DEV__ !== !1 && bk(t), t;
}
function va(t, e, r) {
  var n = [];
  t.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](r);
  });
}
function sl(t, e, r) {
  return new ze(function(n) {
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
    Object.defineProperty(t, r, { value: ze });
  }
  return Sf && Symbol.species && e(Symbol.species), e("@@species"), t;
}
function Qh(t) {
  return t && typeof t.then == "function";
}
var ii = (
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
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), va(n.observers, "next", i));
        },
        error: function(i) {
          var a = n.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), va(n.observers, "error", i));
        },
        complete: function() {
          var i = n, a = i.sub, s = i.sources, o = s === void 0 ? [] : s;
          if (a !== null) {
            var u = o.shift();
            u ? Qh(u) ? u.then(function(l) {
              return n.sub = l.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), va(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.complete();
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new ze(r)]), Qh(r) ? r.then(function(i) {
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
  }(ze)
);
My(ii);
function bi(t) {
  return "incremental" in t;
}
function Ek(t) {
  return "hasNext" in t && "data" in t;
}
function xk(t) {
  return bi(t) || Ek(t);
}
function Tk(t) {
  return rt(t) && "payload" in t;
}
function Fy(t, e) {
  var r = t, n = new hn();
  return bi(e) && yr(e.incremental) && e.incremental.forEach(function(i) {
    for (var a = i.data, s = i.path, o = s.length - 1; o >= 0; --o) {
      var u = s[o], l = !isNaN(+u), c = l ? [] : {};
      c[u] = a, a = c;
    }
    r = n.merge(r, a);
  }), r;
}
function Gs(t) {
  var e = gc(t);
  return yr(e);
}
function gc(t) {
  var e = yr(t.errors) ? t.errors.slice(0) : [];
  return bi(t) && yr(t.incremental) && t.incremental.forEach(function(r) {
    r.errors && e.push.apply(e, r.errors);
  }), e;
}
function Ci() {
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
  return Ci(t, e, e.variables && {
    variables: Ci(k(k({}, t && t.variables), e.variables))
  });
}
function ol(t) {
  return new ze(function(e) {
    e.error(t);
  });
}
var Ly = function(t, e, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n;
};
function kk(t) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    if (e.indexOf(i) < 0)
      throw At(43, i);
  }
  return t;
}
function _k(t, e) {
  var r = k({}, t), n = function(a) {
    typeof a == "function" ? r = k(k({}, r), a(r)) : r = k(k({}, r), a);
  }, i = function() {
    return k({}, r);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function Sk(t) {
  var e = {
    variables: t.variables || {},
    extensions: t.extensions || {},
    operationName: t.operationName,
    query: t.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? hc(e.query) || void 0 : ""), e;
}
function Ok(t, e) {
  var r = k({}, t), n = new Set(Object.keys(t));
  return Fr(e, {
    Variable: function(i, a, s) {
      s && s.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function Yh(t, e) {
  return e ? e(t) : ze.of();
}
function Xi(t) {
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
        return ze.of();
      });
    }, t.from = function(e) {
      return e.length === 0 ? t.empty() : e.map(Xi).reduce(function(r, n) {
        return r.concat(n);
      });
    }, t.split = function(e, r, n) {
      var i = Xi(r), a = Xi(n || new t(Yh)), s;
      return Fs(i) && Fs(a) ? s = new t(function(o) {
        return e(o) ? i.request(o) || ze.of() : a.request(o) || ze.of();
      }) : s = new t(function(o, u) {
        return e(o) ? i.request(o, u) || ze.of() : a.request(o, u) || ze.of();
      }), Object.assign(s, { left: i, right: a });
    }, t.execute = function(e, r) {
      return e.request(_k(r.context, Sk(kk(r)))) || ze.of();
    }, t.concat = function(e, r) {
      var n = Xi(e);
      if (Fs(n))
        return globalThis.__DEV__ !== !1 && pe.warn(35, n), n;
      var i = Xi(r), a;
      return Fs(i) ? a = new t(function(s) {
        return n.request(s, function(o) {
          return i.request(o) || ze.of();
        }) || ze.of();
      }) : a = new t(function(s, o) {
        return n.request(s, function(u) {
          return i.request(u, o) || ze.of();
        }) || ze.of();
      }), Object.assign(a, { left: n, right: i });
    }, t.prototype.split = function(e, r, n) {
      return this.concat(t.split(e, r, n || new t(Yh)));
    }, t.prototype.concat = function(e) {
      return t.concat(this, e);
    }, t.prototype.request = function(e, r) {
      throw At(36);
    }, t.prototype.onError = function(e, r) {
      if (r && r.error)
        return r.error(e), !1;
      throw e;
    }, t.prototype.setOnError = function(e) {
      return this.onError = e, this;
    }, t;
  }()
), Ck = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var t = new AbortController(), e = t.signal;
  return { controller: t, signal: e };
};
function Ik(t) {
  var e, r = t[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return r.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function Nk(t) {
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
  return ou && (c[Symbol.asyncIterator] = function() {
    return this;
  }), c;
}
function Ak(t) {
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
  return ou && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Zh(t) {
  var e = {
    next: function() {
      return t.read();
    }
  };
  return ou && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function Dk(t) {
  return !!t.body;
}
function Rk(t) {
  return !!t.getReader;
}
function Pk(t) {
  return !!(ou && t[Symbol.asyncIterator]);
}
function Mk(t) {
  return !!t.stream;
}
function Fk(t) {
  return !!t.arrayBuffer;
}
function Lk(t) {
  return !!t.pipe;
}
function $k(t) {
  var e = t;
  if (Dk(t) && (e = t.body), Pk(e))
    return Ik(e);
  if (Rk(e))
    return Zh(e.getReader());
  if (Mk(e))
    return Zh(e.stream().getReader());
  if (Fk(e))
    return Ak(e.arrayBuffer());
  if (Lk(e))
    return Nk(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var jf = Symbol();
function jk(t) {
  return t.extensions ? Array.isArray(t.extensions[jf]) : !1;
}
function Vk(t) {
  return t.hasOwnProperty("graphQLErrors");
}
var zk = function(t) {
  var e = sr(sr(sr([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
  return t.networkError && e.push(t.networkError), e.map(function(r) {
    return rt(r) && r.message || "Error message not found.";
  }).join(`
`);
}, _n = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, s = r.networkError, o = r.errorMessage, u = r.extraInfo, l = t.call(this, o) || this;
      return l.name = "ApolloError", l.graphQLErrors = n || [], l.protocolErrors = i || [], l.clientErrors = a || [], l.networkError = s || null, l.message = o || zk(l), l.extraInfo = u, l.__proto__ = e.prototype, l;
    }
    return e;
  }(Error)
), Gh = Object.prototype.hasOwnProperty;
function Wk(t, e) {
  return Zr(this, void 0, void 0, function() {
    var r, n, i, a, s, o, u, l, c, f, h, d, p, m, v, y, g, w, x, b, S, N, I, P;
    return Gr(this, function(z) {
      switch (z.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (P = t.headers) === null || P === void 0 ? void 0 : P.get("content-type"), i = "boundary=", a = n != null && n.includes(i) ? n == null ? void 0 : n.substring((n == null ? void 0 : n.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), o = "", u = $k(t), l = !0, z.label = 1;
        case 1:
          return l ? [4, u.next()] : [3, 3];
        case 2:
          for (c = z.sent(), f = c.value, h = c.done, d = typeof f == "string" ? f : r.decode(f), p = o.length - s.length + 1, l = !h, o += d, m = o.indexOf(s, p); m > -1; ) {
            if (v = void 0, N = [
              o.slice(0, m),
              o.slice(m + s.length)
            ], v = N[0], o = N[1], y = v.indexOf(`\r
\r
`), g = qk(v.slice(0, y)), w = g["content-type"], w && w.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (x = v.slice(y), x) {
              if (b = $y(t, x), Object.keys(b).length > 1 || "data" in b || "incremental" in b || "errors" in b || "payload" in b)
                if (Tk(b)) {
                  if (S = {}, "payload" in b) {
                    if (Object.keys(b).length === 1 && b.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    S = k({}, b.payload);
                  }
                  "errors" in b && (S = k(k({}, S), { extensions: k(k({}, "extensions" in S ? S.extensions : null), (I = {}, I[jf] = b.errors, I)) })), e(S);
                } else
                  e(b);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(b).length === 1 && "hasNext" in b && !b.hasNext
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
function qk(t) {
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
function Uk(t, e) {
  t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t);
}
function jy(t) {
  return function(e) {
    return e.text().then(function(r) {
      return $y(e, r);
    }).then(function(r) {
      return !Array.isArray(r) && !Gh.call(r, "data") && !Gh.call(r, "errors") && Ly(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
        return n.operationName;
      }) : t.operationName, "'.")), r;
    });
  };
}
var Pa = function(t, e) {
  var r;
  try {
    r = JSON.stringify(t);
  } catch (i) {
    var n = At(39, e, i.message);
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
      i = Pa(e.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var a = void 0;
    try {
      a = Pa(e.extensions, "Extensions map");
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
var Bk = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Hk = {
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
}, Qk = {
  method: "POST"
}, zy = {
  http: Bk,
  headers: Hk,
  options: Qk
}, Wy = function(t, e) {
  return e(t);
};
function qy(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, a = {};
  r.forEach(function(f) {
    i = k(k(k({}, i), f.options), { headers: k(k({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), a = k(k({}, a), f.http);
  }), i.headers && (i.headers = Yk(i.headers, a.preserveHeaderCase));
  var s = t.operationName, o = t.extensions, u = t.variables, l = t.query, c = { operationName: s, variables: u };
  return a.includeExtensions && (c.extensions = o), a.includeQuery && (c.query = e(l, pu)), {
    options: i,
    body: c
  };
}
function Yk(t, e) {
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
function Zk(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function Gk(t, e, r = "") {
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
    const l = Array.isArray(s) || typeof FileList < "u" && s instanceof FileList, c = Zk(s);
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
          for (const v of s) {
            const y = a(
              v,
              d + m++,
              p
            );
            h && f.push(y);
          }
        } else
          for (const m in s) {
            const v = a(
              s[m],
              d + m,
              p
            );
            h && (f[m] = v);
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
function Jk(t, e, r) {
  "name" in r ? t.append(e, r, r.name) : t.append(e, r);
}
function Kk(t) {
  return typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob;
}
function Xk({
  uri: t = "/graphql",
  useGETForQueries: e,
  isExtractableFile: r = Kk,
  FormData: n,
  formDataAppendFile: i = Jk,
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
      headers: v
    } = d, y = {
      http: d.http,
      options: d.fetchOptions,
      credentials: d.credentials,
      headers: {
        // Client awareness headers can be overridden by context `headers`.
        ...p && { "apollographql-client-name": p },
        ...m && { "apollographql-client-version": m },
        ...v
      }
    }, { options: g, body: w } = qy(
      h,
      a,
      zy,
      f,
      y
    ), { clone: x, files: b } = Gk(w, r, "");
    let S = Uy(h, t);
    if (b.size) {
      g.headers && delete g.headers["content-type"];
      const P = n || FormData, z = new P();
      z.append("operations", Pa(x, "Payload"));
      const Q = {};
      let D = 0;
      b.forEach((R) => {
        Q[++D] = R;
      }), z.append("map", JSON.stringify(Q)), D = 0, b.forEach((R, q) => {
        i(z, String(++D), q);
      }), g.body = z;
    } else if (e && // If the operation contains some mutations GET shouldn’t be used.
    !h.query.definitions.some(
      (P) => P.kind === "OperationDefinition" && P.operation === "mutation"
    ) && (g.method = "GET"), g.method === "GET") {
      const { newURI: P, parseError: z } = Vy(S, w);
      if (z)
        return new ze((Q) => {
          Q.error(z);
        });
      S = P;
    } else
      g.body = Pa(x, "Payload");
    const { controller: N } = Ck();
    typeof N != "boolean" && (g.signal && (g.signal.aborted ? (
      // Signal already aborted, so immediately abort.
      N.abort()
    ) : (
      // Signal not already aborted, so setup a listener to abort when it
      // does.
      g.signal.addEventListener(
        "abort",
        () => {
          N.abort();
        },
        {
          // Prevent a memory leak if the user configured abort controller
          // is long lasting, or controls multiple things.
          once: !0
        }
      )
    )), g.signal = N.signal);
    const I = s || fetch;
    return new ze((P) => {
      let z;
      return I(S, g).then((Q) => (h.setContext({ response: Q }), Q)).then(jy(h)).then((Q) => {
        P.next(Q), P.complete();
      }).catch((Q) => {
        z || (Q.result && Q.result.errors && Q.result.data && P.next(Q.result), P.error(Q));
      }), () => {
        z = !0, typeof N != "boolean" && N.abort();
      };
    });
  });
}
var bc = wr.execute, e_ = function(t) {
  if (!t && typeof fetch > "u")
    throw At(37);
}, Jh = tr(function() {
  return fetch;
}), t_ = function(t) {
  t === void 0 && (t = {});
  var e = t.uri, r = e === void 0 ? "/graphql" : e, n = t.fetch, i = t.print, a = i === void 0 ? Wy : i, s = t.includeExtensions, o = t.preserveHeaderCase, u = t.useGETForQueries, l = t.includeUnusedVariables, c = l === void 0 ? !1 : l, f = Mr(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && e_(n || Jh);
  var h = {
    http: { includeExtensions: s, preserveHeaderCase: o },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new wr(function(d) {
    var p = Uy(d, r), m = d.getContext(), v = {};
    if (m.clientAwareness) {
      var y = m.clientAwareness, g = y.name, w = y.version;
      g && (v["apollographql-client-name"] = g), w && (v["apollographql-client-version"] = w);
    }
    var x = k(k({}, v), m.headers), b = {
      http: m.http,
      options: m.fetchOptions,
      credentials: m.credentials,
      headers: x
    };
    if (Aa(["client"], d.query)) {
      var S = Ny(d.query);
      if (!S)
        return ol(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      d.query = S;
    }
    var N = qy(d, a, zy, h, b), I = N.options, P = N.body;
    P.variables && !c && (P.variables = Ok(P.variables, d.query));
    var z;
    !I.signal && typeof AbortController < "u" && (z = new AbortController(), I.signal = z.signal);
    var Q = function(j) {
      return j.kind === "OperationDefinition" && j.operation === "mutation";
    }, D = function(j) {
      return j.kind === "OperationDefinition" && j.operation === "subscription";
    }, R = D(Xa(d.query)), q = Aa(["defer"], d.query);
    if (u && !d.query.definitions.some(Q) && (I.method = "GET"), q || R) {
      I.headers = I.headers || {};
      var U = "multipart/mixed;";
      R && q && globalThis.__DEV__ !== !1 && pe.warn(38), R ? U += "boundary=graphql;subscriptionSpec=1.0,application/json" : q && (U += "deferSpec=20220824,application/json"), I.headers.accept = U;
    }
    if (I.method === "GET") {
      var M = Vy(p, P), $ = M.newURI, ve = M.parseError;
      if (ve)
        return ol(ve);
      p = $;
    } else
      try {
        I.body = Pa(P, "Payload");
      } catch (j) {
        return ol(j);
      }
    return new ze(function(j) {
      var O = n || tr(function() {
        return fetch;
      }) || Jh, F = j.next.bind(j);
      return O(p, I).then(function(ee) {
        var le;
        d.setContext({ response: ee });
        var oe = (le = ee.headers) === null || le === void 0 ? void 0 : le.get("content-type");
        return oe !== null && /^multipart\/mixed/i.test(oe) ? Wk(ee, F) : jy(d)(ee).then(F);
      }).then(function() {
        z = void 0, j.complete();
      }).catch(function(ee) {
        z = void 0, Uk(ee, j);
      }), function() {
        z && z.abort();
      };
    });
  });
}, r_ = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this, t_(r).request) || this;
      return n.options = r, n;
    }
    return e;
  }(wr)
);
const { toString: Kh, hasOwnProperty: n_ } = Object.prototype, Xh = Function.prototype.toString, wc = /* @__PURE__ */ new Map();
function He(t, e) {
  try {
    return Ec(t, e);
  } finally {
    wc.clear();
  }
}
function Ec(t, e) {
  if (t === e)
    return !0;
  const r = Kh.call(t), n = Kh.call(e);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (t.length !== e.length)
        return !1;
    case "[object Object]": {
      if (tp(t, e))
        return !0;
      const i = ep(t), a = ep(e), s = i.length;
      if (s !== a.length)
        return !1;
      for (let o = 0; o < s; ++o)
        if (!n_.call(e, i[o]))
          return !1;
      for (let o = 0; o < s; ++o) {
        const u = i[o];
        if (!Ec(t[u], e[u]))
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
      if (tp(t, e))
        return !0;
      const i = t.entries(), a = r === "[object Map]";
      for (; ; ) {
        const s = i.next();
        if (s.done)
          break;
        const [o, u] = s.value;
        if (!e.has(o) || a && !Ec(u, e.get(o)))
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
      const i = Xh.call(t);
      return i !== Xh.call(e) ? !1 : !s_(i, a_);
    }
  }
  return !1;
}
function ep(t) {
  return Object.keys(t).filter(i_, t);
}
function i_(t) {
  return this[t] !== void 0;
}
const a_ = "{ [native code] }";
function s_(t, e) {
  const r = t.length - e.length;
  return r >= 0 && t.indexOf(e, r) === r;
}
function tp(t, e) {
  let r = wc.get(t);
  if (r) {
    if (r.has(e))
      return !0;
  } else
    wc.set(t, r = /* @__PURE__ */ new Set());
  return r.add(e), !1;
}
function By(t, e, r, n) {
  var i = e.data, a = Mr(e, ["data"]), s = r.data, o = Mr(r, ["data"]);
  return He(a, o) && Ks(Xa(t).selectionSet, i, s, {
    fragmentMap: uu(fu(t)),
    variables: n
  });
}
function Ks(t, e, r, n) {
  if (e === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return t.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Ga(a, n.variables)) || rp(a))
      return !0;
    if (fn(a)) {
      var s = cn(a), o = e && e[s], u = r && r[s], l = a.selectionSet;
      if (!l)
        return He(o, u);
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
      var p = lu(a, n.fragmentMap);
      if (p)
        return rp(p) ? !0 : Ks(
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
function rp(t) {
  return !!t.directives && t.directives.some(o_);
}
function o_(t) {
  return t.name.value === "nonreactive";
}
var Hy = (
  /** @class */
  function() {
    function t() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = Ra(fT, {
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
      return r === void 0 && (r = !!e.optimistic), this.read(k(k({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r }));
    }, t.prototype.watchFragment = function(e) {
      var r = this, n = e.fragment, i = e.fragmentName, a = e.from, s = e.optimistic, o = s === void 0 ? !0 : s, u = this.getFragmentDoc(n, i), l = {
        returnPartialData: !0,
        id: typeof a == "string" ? a : this.identify(a),
        query: u,
        optimistic: o
      }, c;
      return new ze(function(f) {
        return r.watch(k(k({}, l), { immediate: !0, callback: function(h) {
          if (
            // Always ensure we deliver the first result
            !(c && By(u, { data: c == null ? void 0 : c.result }, { data: h.result }))
          ) {
            var d = {
              data: h.result,
              complete: !!h.complete
            };
            h.missing && (d.missing = mu(h.missing.map(function(p) {
              return p.missing;
            }))), c = h, f.next(d);
          }
        } }));
      });
    }, t.prototype.readFragment = function(e, r) {
      return r === void 0 && (r = !!e.optimistic), this.read(k(k({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: r }));
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
          return a == null ? i : (n.writeQuery(k(k({}, e), { data: a })), a);
        }
      });
    }, t.prototype.updateFragment = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(e), a = r(i);
          return a == null ? i : (n.writeFragment(k(k({}, e), { data: a })), a);
        }
      });
    }, t;
  }()
);
globalThis.__DEV__ !== !1 && (Hy.prototype.getMemoryInternals = xT);
var Qy = (
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
function ea(t) {
  return t == null;
}
function Yy(t, e) {
  var r = t.__typename, n = t.id, i = t._id;
  if (typeof r == "string" && (e && (e.keyObject = ea(n) ? ea(i) ? void 0 : { _id: i } : { id: n }), ea(n) && !ea(i) && (n = i), !ea(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Zy = {
  dataIdFromObject: Yy,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function u_(t) {
  return Ci(Zy, t);
}
function Gy(t) {
  var e = t.canonizeResults;
  return e === void 0 ? Zy.canonizeResults : e;
}
function l_(t, e) {
  return We(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
}
var Jy = /^[_a-z][_0-9a-z]*/i;
function pn(t) {
  var e = t.match(Jy);
  return e ? e[0] : t;
}
function xc(t, e, r) {
  return rt(e) ? nt(e) ? e.every(function(n) {
    return xc(t, n, r);
  }) : t.selections.every(function(n) {
    if (fn(n) && Ga(n, r)) {
      var i = cn(n);
      return bt.call(e, i) && (!n.selectionSet || xc(n.selectionSet, e[i], r));
    }
    return !0;
  }) : !1;
}
function fi(t) {
  return rt(t) && !We(t) && !nt(t);
}
function c_() {
  return new hn();
}
function Ky(t, e) {
  var r = uu(fu(t));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && e && (i = e.lookup(n)), i || null;
    }
  };
}
var Xs = /* @__PURE__ */ Object.create(null), ul = function() {
  return Xs;
}, np = /* @__PURE__ */ Object.create(null), Ma = (
  /** @class */
  function() {
    function t(e, r) {
      var n = this;
      this.policies = e, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return yc(We(i) ? n.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return We(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return gi(i);
        if (We(i))
          return i;
        var s = n.policies.identify(i)[0];
        if (s) {
          var o = gi(s);
          return a && n.merge(s, i), o;
        }
      };
    }
    return t.prototype.toObject = function() {
      return k({}, this.data);
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
      if (this instanceof Qr)
        return this.parent.get(e, r);
    }, t.prototype.lookup = function(e, r) {
      if (r && this.group.depend(e, "__exists"), bt.call(this.data, e))
        return this.data[e];
      if (this instanceof Qr)
        return this.parent.lookup(e, r);
      if (this.policies.rootTypenamesById[e])
        return /* @__PURE__ */ Object.create(null);
    }, t.prototype.merge = function(e, r) {
      var n = this, i;
      We(e) && (e = e.__ref), We(r) && (r = r.__ref);
      var a = typeof e == "string" ? this.lookup(i = e) : e, s = typeof r == "string" ? this.lookup(i = r) : r;
      if (s) {
        pe(typeof i == "string", 1);
        var o = new hn(d_).merge(a, s);
        if (this.data[i] = o, o !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(s).forEach(function(l) {
            if (!a || a[l] !== o[l]) {
              u[l] = 1;
              var c = pn(l);
              c !== l && !n.policies.hasKeyArgs(o.__typename, c) && (u[c] = 1), o[l] === void 0 && !(n instanceof Qr) && delete o[l];
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
          INVALIDATE: np,
          isReference: We,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(l, c) {
            return n.policies.readField(typeof l == "string" ? {
              fieldName: l,
              from: c || gi(e)
            } : l, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(l) {
          var c = pn(l), f = i[l];
          if (f !== void 0) {
            var h = typeof r == "function" ? r : r[l] || r[c];
            if (h) {
              var d = h === ul ? Xs : h(yc(f), k(k({}, u), { fieldName: c, storeFieldName: l, storage: n.getStorage(e, l) }));
              if (d === np)
                n.group.dirty(e, l);
              else if (d === Xs && (d = void 0), d !== f && (a[l] = d, s = !0, f = d, globalThis.__DEV__ !== !1)) {
                var p = function(b) {
                  if (n.lookup(b.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && pe.warn(2, b), !0;
                };
                if (We(d))
                  p(d);
                else if (Array.isArray(d))
                  for (var m = !1, v = void 0, y = 0, g = d; y < g.length; y++) {
                    var w = g[y];
                    if (We(w)) {
                      if (m = !0, p(w))
                        break;
                    } else if (typeof w == "object" && w) {
                      var x = n.policies.identify(w)[0];
                      x && (v = w);
                    }
                    if (m && v !== void 0) {
                      globalThis.__DEV__ !== !1 && pe.warn(3, v);
                      break;
                    }
                  }
              }
            }
            f !== void 0 && (o = !1);
          }
        }), s)
          return this.merge(e, a), o && (this instanceof Qr ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
      }
      return !1;
    }, t.prototype.delete = function(e, r, n) {
      var i, a = this.lookup(e);
      if (a) {
        var s = this.getFieldValue(a, "__typename"), o = r && n ? this.policies.getStoreFieldName({ typename: s, fieldName: r, args: n }) : r;
        return this.modify(e, o ? (i = {}, i[o] = ul, i) : ul);
      }
      return !1;
    }, t.prototype.evict = function(e, r) {
      var n = !1;
      return e.id && (bt.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof Qr && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
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
      return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Qr ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
    }, t.prototype.gc = function() {
      var e = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(s) {
        bt.call(n, s) && (Object.keys(e.findChildRefIds(s)).forEach(r.add, r), delete n[s]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var a = this; a instanceof Qr; )
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
          We(a) && (r[a.__ref] = !0), rt(a) && Object.keys(a).forEach(function(s) {
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
      this.d = this.caching ? Sy() : null, this.keyMaker = new qi(Ui);
    }, t.prototype.depend = function(e, r) {
      if (this.d) {
        this.d(ll(e, r));
        var n = pn(r);
        n !== r && this.d(ll(e, n)), this.parent && this.parent.depend(e, r);
      }
    }, t.prototype.dirty = function(e, r) {
      this.d && this.d.dirty(
        ll(e, r),
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
function ll(t, e) {
  return e + "#" + t;
}
function ip(t, e) {
  ya(t) && t.group.depend(e, "__exists");
}
(function(t) {
  var e = (
    /** @class */
    function(r) {
      cr(n, r);
      function n(i) {
        var a = i.policies, s = i.resultCaching, o = s === void 0 ? !0 : s, u = i.seed, l = r.call(this, a, new Xy(o)) || this;
        return l.stump = new f_(l), l.storageTrie = new qi(Ui), u && l.replace(u), l;
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
})(Ma || (Ma = {}));
var Qr = (
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
          He(s[u], o[u]) || n.group.dirty(a, u);
        }) : (n.group.dirty(a, "__exists"), Object.keys(o).forEach(function(u) {
          n.group.dirty(a, u);
        })) : n.delete(a);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, e.prototype.toObject = function() {
      return k(k({}, this.parent.toObject()), this.data);
    }, e.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return bt.call(this.data, r) ? k(k({}, n), t.prototype.findChildRefIds.call(this, r)) : n;
    }, e.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, e;
  }(Ma)
), f_ = (
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
  }(Qr)
);
function d_(t, e, r) {
  var n = t[r], i = e[r];
  return He(n, i) ? n : i;
}
function ya(t) {
  return !!(t instanceof Ma && t.group.caching);
}
function h_(t) {
  return rt(t) ? nt(t) ? t.slice(0) : k({ __proto__: Object.getPrototypeOf(t) }, t) : t;
}
var ap = (
  /** @class */
  function() {
    function t() {
      this.known = new (uy ? WeakSet : Set)(), this.pool = new qi(Ui), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return t.prototype.isKnown = function(e) {
      return rt(e) && this.known.has(e);
    }, t.prototype.pass = function(e) {
      if (rt(e)) {
        var r = h_(e);
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
function sp(t) {
  return [
    t.selectionSet,
    t.objectOrReference,
    t.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    t.context.canonizeResults
  ];
}
var p_ = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.knownResults = new (Ui ? WeakMap : Map)(), this.config = Ci(e, {
        addTypename: e.addTypename !== !1,
        canonizeResults: Gy(e)
      }), this.canon = e.canon || new ap(), this.executeSelectionSet = Ra(function(n) {
        var i, a = n.context.canonizeResults, s = sp(n);
        s[3] = !a;
        var o = (i = r.executeSelectionSet).peek.apply(i, s);
        return o ? a ? k(k({}, o), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(o.result)
        }) : o : (ip(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || vr["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: sp,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, a, s) {
          if (ya(a.store))
            return a.store.makeCacheKey(n, We(i) ? i.__ref : i, a.varString, s);
        }
      }), this.executeSubSelectedArray = Ra(function(n) {
        return ip(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || vr["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, a = n.array, s = n.context;
          if (ya(s.store))
            return s.store.makeCacheKey(i, a, s.varString);
        }
      });
    }
    return t.prototype.resetCanon = function() {
      this.canon = new ap();
    }, t.prototype.diffQueryAgainstStore = function(e) {
      var r = e.store, n = e.query, i = e.rootId, a = i === void 0 ? "ROOT_QUERY" : i, s = e.variables, o = e.returnPartialData, u = o === void 0 ? !0 : o, l = e.canonizeResults, c = l === void 0 ? this.config.canonizeResults : l, f = this.config.cache.policies;
      s = k(k({}, If(py(n))), s);
      var h = gi(a), d = this.executeSelectionSet({
        selectionSet: Xa(n).selectionSet,
        objectOrReference: h,
        enclosingRef: h,
        context: k({ store: r, query: n, policies: f, variables: s, varString: sn(s), canonizeResults: c }, Ky(n, this.config.fragments))
      }), p;
      if (d.missing && (p = [
        new Qy(m_(d.missing), d.missing, n, s)
      ], !u))
        throw p[0];
      return {
        result: d.result,
        complete: !p,
        missing: p
      };
    }, t.prototype.isFresh = function(e, r, n, i) {
      if (ya(i.store) && this.knownResults.get(e) === n) {
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
      if (We(i) && !s.policies.rootTypenamesById[i.__ref] && !s.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var o = s.variables, u = s.policies, l = s.store, c = l.getFieldValue(i, "__typename"), f = [], h, d = new hn();
      this.config.addTypename && typeof c == "string" && !u.rootIdsByTypename[c] && f.push({ __typename: c });
      function p(w, x) {
        var b;
        return w.missing && (h = d.merge(h, (b = {}, b[x] = w.missing, b))), w.result;
      }
      var m = new Set(n.selections);
      m.forEach(function(w) {
        var x, b;
        if (Ga(w, o))
          if (fn(w)) {
            var S = u.readField({
              fieldName: w.name.value,
              field: w,
              variables: s.variables,
              from: i
            }, s), N = cn(w);
            S === void 0 ? Pf.added(w) || (h = d.merge(h, (x = {}, x[N] = "Can't find field '".concat(w.name.value, "' on ").concat(We(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), x))) : nt(S) ? S.length > 0 && (S = p(r.executeSubSelectedArray({
              field: w,
              array: S,
              enclosingRef: a,
              context: s
            }), N)) : w.selectionSet ? S != null && (S = p(r.executeSelectionSet({
              selectionSet: w.selectionSet,
              objectOrReference: S,
              enclosingRef: We(S) ? S : a,
              context: s
            }), N)) : s.canonizeResults && (S = r.canon.pass(S)), S !== void 0 && f.push((b = {}, b[N] = S, b));
          } else {
            var I = lu(w, s.lookupFragment);
            if (!I && w.kind === ie.FRAGMENT_SPREAD)
              throw At(9, w.name.value);
            I && u.fragmentMatches(I, c) && I.selectionSet.selections.forEach(m.add, m);
          }
      });
      var v = mu(f), y = { result: v, missing: h }, g = s.canonizeResults ? this.canon.admit(y) : yc(y);
      return g.result && this.knownResults.set(g.result, n), g;
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
          enclosingRef: We(c) ? c : a,
          context: s
        }), f) : (globalThis.__DEV__ !== !1 && v_(s.store, n, c), c);
      }), {
        result: s.canonizeResults ? this.canon.admit(i) : i,
        missing: o
      };
    }, t;
  }()
);
function m_(t) {
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
function v_(t, e, r) {
  if (!e.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      rt(i) && (pe(
        !We(i),
        10,
        l_(t, i),
        e.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var Vf = new my(), op = /* @__PURE__ */ new WeakMap();
function ga(t) {
  var e = op.get(t);
  return e || op.set(t, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: Sy()
  }), e;
}
function up(t) {
  ga(t).vars.forEach(function(e) {
    return e.forgetCache(t);
  });
}
function y_(t) {
  ga(t).vars.forEach(function(e) {
    return e.attachCache(t);
  });
}
function g_(t) {
  var e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
    if (arguments.length > 0) {
      if (t !== a) {
        t = a, e.forEach(function(u) {
          ga(u).dep.dirty(n), b_(u);
        });
        var s = Array.from(r);
        r.clear(), s.forEach(function(u) {
          return u(t);
        });
      }
    } else {
      var o = Vf.getValue();
      o && (i(o), ga(o).dep(n));
    }
    return t;
  };
  n.onNextChange = function(a) {
    return r.add(a), function() {
      r.delete(a);
    };
  };
  var i = n.attachCache = function(a) {
    return e.add(a), ga(a).vars.add(n), n;
  };
  return n.forgetCache = function(a) {
    return e.delete(a);
  }, n;
}
function b_(t) {
  t.broadcastWatches && t.broadcastWatches();
}
var lp = /* @__PURE__ */ Object.create(null);
function zf(t) {
  var e = JSON.stringify(t);
  return lp[e] || (lp[e] = /* @__PURE__ */ Object.create(null));
}
function cp(t) {
  var e = zf(t);
  return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
    var i = function(s, o) {
      return n.readField(o, s);
    }, a = n.keyObject = Wf(t, function(s) {
      var o = wi(
        n.storeObject,
        s,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return o === void 0 && r !== n.storeObject && bt.call(r, s[0]) && (o = wi(r, s, tg)), pe(o !== void 0, 4, s.join("."), r), o;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(a));
  });
}
function fp(t) {
  var e = zf(t);
  return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
    var i = n.field, a = n.variables, s = n.fieldName, o = Wf(t, function(l) {
      var c = l[0], f = c.charAt(0);
      if (f === "@") {
        if (i && yr(i.directives)) {
          var h = c.slice(1), d = i.directives.find(function(y) {
            return y.name.value === h;
          }), p = d && cu(d, a);
          return p && wi(
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
          var v = l.slice(0);
          return v[0] = m, wi(a, v);
        }
        return;
      }
      if (r)
        return wi(r, l);
    }), u = JSON.stringify(o);
    return (r || u !== "{}") && (s += ":" + u), s;
  });
}
function Wf(t, e) {
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
  var e = zf(t);
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
function wi(t, e, r) {
  return r = r || tg, rg(e.reduce(function n(i, a) {
    return nt(i) ? i.map(function(s) {
      return n(s, a);
    }) : i && r(i, a);
  }, t));
}
function rg(t) {
  return rt(t) ? nt(t) ? t.map(rg) : Wf(Object.keys(t).sort(), function(e) {
    return wi(t, e);
  }) : t;
}
function Tc(t) {
  return t.args !== void 0 ? t.args : t.field ? cu(t.field, t.variables) : null;
}
var w_ = function() {
}, dp = function(t, e) {
  return e.fieldName;
}, hp = function(t, e, r) {
  var n = r.mergeObjects;
  return n(t, e);
}, pp = function(t, e) {
  return e;
}, E_ = (
  /** @class */
  function() {
    function t(e) {
      this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = k({ dataIdFromObject: Yy }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return t.prototype.identify = function(e, r) {
      var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      for (var s = r && r.storeObject || e, o = k(k({}, r), { typename: a, storeObject: s, readField: r && r.readField || function() {
        var h = qf(arguments, s);
        return i.readField(h, {
          store: i.cache.data,
          variables: h.variables
        });
      } }), u, l = a && this.getTypePolicy(a), c = l && l.keyFn || this.config.dataIdFromObject; c; ) {
        var f = c(k(k({}, e), s), o);
        if (nt(f))
          c = cp(f);
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
        u.merge = typeof l == "function" ? l : l === !0 ? hp : l === !1 ? pp : u.merge;
      }
      o(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? w_ : nt(a) ? cp(a) : typeof a == "function" ? a : i.keyFn, s && Object.keys(s).forEach(function(u) {
        var l = n.getFieldPolicy(e, u, !0), c = s[u];
        if (typeof c == "function")
          l.read = c;
        else {
          var f = c.keyArgs, h = c.read, d = c.merge;
          l.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          f === !1 ? dp : nt(f) ? fp(f) : typeof f == "function" ? f : l.keyFn, typeof h == "function" && (l.read = h), o(l, d);
        }
        l.read && l.merge && (l.keyFn = l.keyFn || dp);
      });
    }, t.prototype.setRootTypename = function(e, r) {
      r === void 0 && (r = e);
      var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && (pe(!i || i === e, 5, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
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
            return o.has(s) || (f && globalThis.__DEV__ !== !1 && pe.warn(6, r, s), o.add(s)), !0;
          d.forEach(l), c && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          h === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          xc(e.selectionSet, n, i) && (c = !1, f = !0, this.fuzzySubtypes.forEach(function(p, m) {
            var v = r.match(p);
            v && v[0] === r && l(m);
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
        }, u = Tc(e); s; ) {
          var l = s(u, o);
          if (nt(l))
            s = fp(l);
          else {
            a = l || n;
            break;
          }
        }
      return a === void 0 && (a = e.field ? jT(e.field, e.variables) : hy(n, Tc(e))), a === !1 ? n : n === pn(a) ? a : n + ":" + a;
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
            var f = mp(this, n, e, r, r.store.getStorage(We(n) ? n.__ref : n, s));
            return Vf.withValue(this.cache, c, [
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
      return u === hp ? ng(i.store)(e, r) : u === pp ? r : (i.overwrite && (e = void 0), u(e, r, mp(
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
function mp(t, e, r, n, i) {
  var a = t.getStoreFieldName(r), s = pn(a), o = r.variables || n.variables, u = n.store, l = u.toReference, c = u.canRead;
  return {
    args: Tc(r),
    field: r.field || null,
    fieldName: s,
    storeFieldName: a,
    variables: o,
    isReference: We,
    toReference: l,
    storage: i,
    cache: t.cache,
    canRead: c,
    readField: function() {
      return t.readField(qf(arguments, e, o), n);
    },
    mergeObjects: ng(n.store)
  };
}
function qf(t, e, r) {
  var n = t[0], i = t[1], a = t.length, s;
  return typeof n == "string" ? s = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : e
  } : (s = k({}, n), bt.call(s, "from") || (s.from = e)), globalThis.__DEV__ !== !1 && s.from === void 0 && globalThis.__DEV__ !== !1 && pe.warn(7, Zv(Array.from(t))), s.variables === void 0 && (s.variables = r), s;
}
function ng(t) {
  return function(r, n) {
    if (nt(r) || nt(n))
      throw At(8);
    if (rt(r) && rt(n)) {
      var i = t.getFieldValue(r, "__typename"), a = t.getFieldValue(n, "__typename"), s = i && a && i !== a;
      if (s)
        return n;
      if (We(r) && fi(n))
        return t.merge(r.__ref, n), r;
      if (fi(r) && We(n))
        return t.merge(r, n.__ref), n;
      if (fi(r) && fi(n))
        return k(k({}, r), n);
    }
    return n;
  };
}
function cl(t, e, r) {
  var n = "".concat(e).concat(r), i = t.flavors.get(n);
  return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : k(k({}, t), { clientOnly: e, deferred: r })), i;
}
var x_ = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.cache = e, this.reader = r, this.fragments = n;
    }
    return t.prototype.writeToStore = function(e, r) {
      var n = this, i = r.query, a = r.result, s = r.dataId, o = r.variables, u = r.overwrite, l = Ka(i), c = c_();
      o = k(k({}, If(l)), o);
      var f = k(k({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(d, p) {
        return c.merge(d, p);
      }, variables: o, varString: sn(o) }, Ky(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), h = this.processSelectionSet({
        result: a || /* @__PURE__ */ Object.create(null),
        dataId: s,
        selectionSet: l.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: f
      });
      if (!We(h))
        throw At(11, a);
      return f.incomingById.forEach(function(d, p) {
        var m = d.storeObject, v = d.mergeTree, y = d.fieldNodeSet, g = gi(p);
        if (v && v.map.size) {
          var w = n.applyMerges(v, g, m, f);
          if (We(w))
            return;
          m = w;
        }
        if (globalThis.__DEV__ !== !1 && !f.overwrite) {
          var x = /* @__PURE__ */ Object.create(null);
          y.forEach(function(N) {
            N.selectionSet && (x[N.name.value] = !0);
          });
          var b = function(N) {
            return x[pn(N)] === !0;
          }, S = function(N) {
            var I = v && v.map.get(N);
            return !!(I && I.info && I.info.merge);
          };
          Object.keys(m).forEach(function(N) {
            b(N) && !S(N) && T_(g, m, N, f.store);
          });
        }
        e.merge(p, m);
      }), e.retain(h.__ref), h;
    }, t.prototype.processSelectionSet = function(e) {
      var r = this, n = e.dataId, i = e.result, a = e.selectionSet, s = e.context, o = e.mergeTree, u = this.cache.policies, l = /* @__PURE__ */ Object.create(null), c = n && u.rootTypenamesById[n] || dc(i, a, s.fragmentMap) || n && s.store.get(n, "__typename");
      typeof c == "string" && (l.__typename = c);
      var f = function() {
        var w = qf(arguments, l, s.variables);
        if (We(w.from)) {
          var x = s.incomingById.get(w.from.__ref);
          if (x) {
            var b = u.readField(k(k({}, w), { from: x.storeObject }), s);
            if (b !== void 0)
              return b;
          }
        }
        return u.readField(w, s);
      }, h = /* @__PURE__ */ new Set();
      this.flattenFields(
        a,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        s,
        c
      ).forEach(function(w, x) {
        var b, S = cn(x), N = i[S];
        if (h.add(x), N !== void 0) {
          var I = u.getStoreFieldName({
            typename: c,
            fieldName: x.name.value,
            field: x,
            variables: w.variables
          }), P = vp(o, I), z = r.processFieldValue(
            N,
            x,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            x.selectionSet ? cl(w, !1, !1) : w,
            P
          ), Q = void 0;
          x.selectionSet && (We(z) || fi(z)) && (Q = f("__typename", z));
          var D = u.getMergeFunction(c, x.name.value, Q);
          D ? P.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: x,
            typename: c,
            merge: D
          } : yp(o, I), l = w.merge(l, (b = {}, b[I] = z, b));
        } else
          globalThis.__DEV__ !== !1 && !w.clientOnly && !w.deferred && !Pf.added(x) && // If the field has a read function, it may be a synthetic field or
          // provide a default value, so its absence from the written data should
          // not be cause for alarm.
          !u.getReadFunction(c, x.name.value) && globalThis.__DEV__ !== !1 && pe.error(12, cn(x), i);
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
      } catch (w) {
        if (!n)
          throw w;
      }
      if (typeof n == "string") {
        var v = gi(n), y = s.written[n] || (s.written[n] = []);
        if (y.indexOf(a) >= 0 || (y.push(a), this.reader && this.reader.isFresh(i, v, a, s)))
          return v;
        var g = s.incomingById.get(n);
        return g ? (g.storeObject = s.merge(g.storeObject, l), g.mergeTree = kc(g.mergeTree, o), h.forEach(function(w) {
          return g.fieldNodeSet.add(w);
        })) : s.incomingById.set(n, {
          storeObject: l,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: go(o) ? void 0 : o,
          fieldNodeSet: h
        }), v;
      }
      return l;
    }, t.prototype.processFieldValue = function(e, r, n, i) {
      var a = this;
      return !r.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? Py(e) : e : nt(e) ? e.map(function(s, o) {
        var u = a.processFieldValue(s, r, n, vp(i, o));
        return yp(i, o), u;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, t.prototype.flattenFields = function(e, r, n, i) {
      i === void 0 && (i = dc(r, e, n.fragmentMap));
      var a = /* @__PURE__ */ new Map(), s = this.cache.policies, o = new qi(!1);
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
              !(d && p) && yr(h.directives) && h.directives.forEach(function(y) {
                var g = y.name.value;
                if (g === "client" && (d = !0), g === "defer") {
                  var w = cu(y, n.variables);
                  (!w || w.if !== !1) && (p = !0);
                }
              }), fn(h)
            ) {
              var m = a.get(h);
              m && (d = d && m.clientOnly, p = p && m.deferred), a.set(h, cl(n, d, p));
            } else {
              var v = lu(h, n.lookupFragment);
              if (!v && h.kind === ie.FRAGMENT_SPREAD)
                throw At(13, h.name.value);
              v && s.fragmentMatches(v, i, r, n.variables) && u(v.selectionSet, cl(n, d, p));
            }
          }
        }));
      }(e, n), a;
    }, t.prototype.applyMerges = function(e, r, n, i, a) {
      var s, o = this;
      if (e.map.size && !We(n)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !nt(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (We(r) || fi(r)) ? r : void 0
        ), l = n;
        u && !a && (a = [We(u) ? u.__ref : u]);
        var c, f = function(h, d) {
          return nt(h) ? typeof d == "number" ? h[d] : void 0 : i.store.getFieldValue(h, String(d));
        };
        e.map.forEach(function(h, d) {
          var p = f(u, d), m = f(l, d);
          if (m !== void 0) {
            a && a.push(d);
            var v = o.applyMerges(h, p, m, i, a);
            v !== m && (c = c || /* @__PURE__ */ new Map(), c.set(d, v)), a && pe(a.pop() === d);
          }
        }), c && (n = nt(l) ? l.slice(0) : k({}, l), c.forEach(function(h, d) {
          n[d] = h;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, a && (s = i.store).getStorage.apply(s, a)) : n;
    }, t;
  }()
), ig = [];
function vp(t, e) {
  var r = t.map;
  return r.has(e) || r.set(e, ig.pop() || { map: /* @__PURE__ */ new Map() }), r.get(e);
}
function kc(t, e) {
  if (t === e || !e || go(e))
    return t;
  if (!t || go(t))
    return e;
  var r = t.info && e.info ? k(k({}, t.info), e.info) : t.info || e.info, n = t.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : t.map.size ? t.map : e.map, a = { info: r, map: i };
  if (n) {
    var s = new Set(e.map.keys());
    t.map.forEach(function(o, u) {
      a.map.set(u, kc(o, e.map.get(u))), s.delete(u);
    }), s.forEach(function(o) {
      a.map.set(o, kc(e.map.get(o), t.map.get(o)));
    });
  }
  return a;
}
function go(t) {
  return !t || !(t.info || t.map.size);
}
function yp(t, e) {
  var r = t.map, n = r.get(e);
  n && go(n) && (ig.push(n), r.delete(e));
}
var gp = /* @__PURE__ */ new Set();
function T_(t, e, r, n) {
  var i = function(f) {
    var h = n.getFieldValue(f, r);
    return typeof h == "object" && h;
  }, a = i(t);
  if (a) {
    var s = i(e);
    if (s && !We(a) && !He(a, s) && !Object.keys(a).every(function(f) {
      return n.getFieldValue(s, f) !== void 0;
    })) {
      var o = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"), u = pn(r), l = "".concat(o, ".").concat(u);
      if (!gp.has(l)) {
        gp.add(l);
        var c = [];
        !nt(a) && !nt(s) && [a, s].forEach(function(f) {
          var h = n.getFieldValue(f, "__typename");
          typeof h == "string" && !c.includes(h) && c.push(h);
        }), globalThis.__DEV__ !== !1 && pe.warn(14, u, o, c.length ? "either ensure all objects of type " + c.join(" and ") + " have an ID or a custom merge function, or " : "", l, k({}, a), k({}, s));
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
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Oy(Pf), n.assumeImmutableResults = !0, n.makeVar = g_, n.txCount = 0, n.config = u_(r), n.addTypename = !!n.config.addTypename, n.policies = new E_({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return e.prototype.init = function() {
      var r = this.data = new Ma.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new x_(this, this.storeReader = new p_({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Gy(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = Ra(function(s, o) {
        return n.broadcastWatch(s, o);
      }, {
        max: this.config.resultCacheMaxSize || vr["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(s) {
          var o = s.optimistic ? n.optimisticData : n.data;
          if (ya(o)) {
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
        return this.storeReader.diffQueryAgainstStore(k(k({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof Qy)
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
      return this.storeReader.diffQueryAgainstStore(k(k({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || y_(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && up(n), n.maybeBroadcastWatch.forget(r);
      };
    }, e.prototype.gc = function(r) {
      var n;
      sn.reset(), pu.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, e.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, e.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, e.prototype.identify = function(r) {
      if (We(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && pe.warn(n);
      }
    }, e.prototype.evict = function(r) {
      if (!r.id) {
        if (bt.call(r, "id"))
          return !1;
        r = k(k({}, r), { id: "ROOT_QUERY" });
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
      }), this.watches.clear(), up(this)) : this.broadcastWatches(), Promise.resolve();
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
      return u && !this.txCount && this.broadcastWatches(k(k({}, r), { onWatchUpdated: function(h) {
        return f.add(h), !1;
      } })), typeof s == "string" ? this.optimisticData = this.optimisticData.addLayer(s, c) : s === !1 ? c(this.data) : c(), typeof o == "string" && (this.optimisticData = this.optimisticData.removeLayer(o)), u && f.size ? (this.broadcastWatches(k(k({}, r), { onWatchUpdated: function(h, d) {
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
      n && (r.optimistic && typeof n.optimistic == "string" && (a.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1) || (!i || !He(i.result, a.result)) && r.callback(r.lastDiff = a, i);
    }, e;
  }(Hy)
);
globalThis.__DEV__ !== !1 && (ag.prototype.getMemoryInternals = ET);
var qe;
(function(t) {
  t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error";
})(qe || (qe = {}));
function Fa(t) {
  return t ? t < 7 : !1;
}
var bp = Object.assign, k_ = Object.hasOwnProperty, _c = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(r) {
      var n = r.queryManager, i = r.queryInfo, a = r.options, s = t.call(this, function(v) {
        try {
          var y = v._subscription._observer;
          y && !y.error && (y.error = __);
        } catch {
        }
        var g = !s.observers.size;
        s.observers.add(v);
        var w = s.last;
        return w && w.error ? v.error && v.error(w.error) : w && w.result && v.next && v.next(w.result), g && s.reobserve().catch(function() {
        }), function() {
          s.observers.delete(v) && !s.observers.size && s.tearDownQuery();
        };
      }) || this;
      s.observers = /* @__PURE__ */ new Set(), s.subscriptions = /* @__PURE__ */ new Set(), s.queryInfo = i, s.queryManager = n, s.waitForOwnResult = fl(a.fetchPolicy), s.isTornDown = !1;
      var o = n.defaultOptions.watchQuery, u = o === void 0 ? {} : o, l = u.fetchPolicy, c = l === void 0 ? "cache-first" : l, f = a.fetchPolicy, h = f === void 0 ? c : f, d = a.initialFetchPolicy, p = d === void 0 ? h === "standby" ? c : h : d;
      s.options = k(k({}, a), {
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
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || qe.ready, a = k(k({}, n), { loading: Fa(i), networkStatus: i }), s = this.options.fetchPolicy, o = s === void 0 ? "cache-first" : s;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(fl(o) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      )
        if (this.waitForOwnResult)
          this.queryInfo.updateWatch();
        else {
          var u = this.queryInfo.getDiff();
          (u.complete || this.options.returnPartialData) && (a.data = u.result), He(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === qe.loading && (o === "cache-first" || o === "cache-only") && (a.networkStatus = qe.ready, a.loading = !1)) : a.partial = !0, globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && og(u.missing);
        }
      return r && this.updateLastResult(a), a;
    }, e.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !By(this.query, this.last.result, r, this.variables) : !He(this.last.result, r);
      return i || n && !He(this.last.variables, n);
    }, e.prototype.getLast = function(r, n) {
      var i = this.last;
      if (i && i[r] && (!n || He(i.variables, this.variables)))
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
      if (a === "cache-and-network" ? i.fetchPolicy = a : a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && k_.call(r, "variables")) {
        var s = py(this.query), o = s.variableDefinitions;
        (!o || !o.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && pe.warn(
          20,
          r,
          ((n = s.name) === null || n === void 0 ? void 0 : n.value) || s
        );
      }
      return r && !He(this.options.variables, r) && (i.variables = this.options.variables = k(k({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, qe.refetch);
    }, e.prototype.fetchMore = function(r) {
      var n = this, i = k(k({}, r.query ? r : k(k(k(k({}, this.options), { query: this.options.query }), r), { variables: k(k({}, this.options.variables), r.variables) })), {
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
      s.networkStatus = qe.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var u = /* @__PURE__ */ new Set();
      return this.queryManager.fetchQuery(a, i, qe.fetchMore).then(function(l) {
        return n.queryManager.removeQuery(a), s.networkStatus === qe.fetchMore && (s.networkStatus = o), n.queryManager.cache.batch({
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
          globalThis.__DEV__ !== !1 && pe.error(21, a);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, e.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, e.prototype.silentSetOptions = function(r) {
      var n = Ci(this.options, r || {});
      bp(this.options, n);
    }, e.prototype.setVariables = function(r) {
      return He(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: r
      }, qe.setVariables) : Promise.resolve());
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
          pe(a, 22);
          var s = i || (this.pollingInfo = {});
          s.interval = a;
          var o = function() {
            var l, c;
            r.pollingInfo && (!Fa(r.queryInfo.networkStatus) && !(!((c = (l = r.options).skipPollAttempt) === null || c === void 0) && c.call(l)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, qe.poll).then(u, u) : u());
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
      return i && this.last && !He(n, this.last.variables) && (i = void 0), this.last = k({ result: this.queryManager.assumeImmutableResults ? r : Py(r), variables: n }, i ? { error: i } : null);
    }, e.prototype.reobserveAsConcast = function(r, n) {
      var i = this;
      this.isTornDown = !1;
      var a = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === qe.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === qe.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === qe.poll
      ), s = this.options.variables, o = this.options.fetchPolicy, u = Ci(this.options, r || {}), l = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : bp(this.options, u), c = this.transformDocument(l.query);
      this.lastQuery = c, a || (this.updatePolling(), r && r.variables && !He(r.variables, s) && // Don't mess with the fetchPolicy if it's currently "standby".
      l.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      l.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", l), n === void 0 && (n = qe.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = fl(l.fetchPolicy));
      var f = function() {
        i.concast === p && (i.waitForOwnResult = !1);
      }, h = l.variables && k({}, l.variables), d = this.fetch(l, n, c), p = d.concast, m = d.fromLink, v = {
        next: function(y) {
          He(i.variables, h) && (f(), i.reportResult(y, h));
        },
        error: function(y) {
          He(i.variables, h) && (f(), i.reportError(y, h));
        }
      };
      return !a && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = v), p.addObserver(v), p;
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
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && va(this.observers, "next", r);
    }, e.prototype.reportError = function(r, n) {
      var i = k(k({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: qe.error, loading: !1 });
      this.updateLastResult(i, n), va(this.observers, "error", this.last.error = r);
    }, e.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, e.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, e.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, e;
  }(ze)
);
My(_c);
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
function __(t) {
  globalThis.__DEV__ !== !1 && pe.error(23, t.message, t.stack);
}
function og(t) {
  globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && pe.debug(24, t);
}
function fl(t) {
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
        r.resolvers = Wh(r.resolvers, n);
      }) : this.resolvers = Wh(this.resolvers, e);
    }, t.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, t.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, t.prototype.runResolvers = function(e) {
      return Zr(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, a = r.context, s = r.variables, o = r.onlyRunForcedResolvers, u = o === void 0 ? !1 : o;
        return Gr(this, function(l) {
          return n ? [2, this.resolveDocument(n, i.data, a, s, this.fragmentMatcher, u).then(function(c) {
            return k(k({}, i), { data: c.result });
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
      return Ny(e);
    }, t.prototype.prepareContext = function(e) {
      var r = this.cache;
      return k(k({}, e), {
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
            return k(k({}, n), s.exportedVariables);
          })] : [2, k({}, n)];
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
              return _f;
          }
        }
      }), r;
    }, t.prototype.buildRootValueFromCache = function(e, r) {
      return this.cache.diff({
        query: ok(e),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, t.prototype.resolveDocument = function(e, r) {
      return Zr(this, arguments, void 0, function(n, i, a, s, o, u) {
        var l, c, f, h, d, p, m, v, y, g, w;
        return a === void 0 && (a = {}), s === void 0 && (s = {}), o === void 0 && (o = function() {
          return !0;
        }), u === void 0 && (u = !1), Gr(this, function(x) {
          return l = Xa(n), c = fu(n), f = uu(c), h = this.collectSelectionsToResolve(l, f), d = l.operation, p = d ? d.charAt(0).toUpperCase() + d.slice(1) : "Query", m = this, v = m.cache, y = m.client, g = {
            fragmentMap: f,
            context: k(k({}, a), { cache: v, client: y }),
            variables: s,
            fragmentMatcher: o,
            defaultOperationType: p,
            exportedVariables: {},
            selectionsToResolve: h,
            onlyRunForcedResolvers: u
          }, w = !1, [2, this.resolveSelectionSet(l.selectionSet, w, i, g).then(function(b) {
            return {
              result: b,
              exportedVariables: g.exportedVariables
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
                ] : Ga(h, o) ? fn(h) ? [2, this.resolveField(h, r, n, i).then(function(v) {
                  var y;
                  typeof v < "u" && u.push((y = {}, y[cn(h)] = v, y));
                })] : (zT(h) ? d = h : (d = a[h.name.value], pe(d, 18, h.name.value)), d && d.typeCondition && (p = d.typeCondition.name.value, i.fragmentMatcher(n, p, s)) ? [2, this.resolveSelectionSet(d.selectionSet, r, n, i).then(function(v) {
                  u.push(v);
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
            return mu(u);
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
            Vf.withValue(this.cache, d, [
              n,
              cu(e, a),
              i.context,
              { field: e, fragmentMap: i.fragmentMap }
            ])
          )))), [2, c.then(function(v) {
            var y, g;
            if (v === void 0 && (v = l), e.directives && e.directives.forEach(function(x) {
              x.name.value === "export" && x.arguments && x.arguments.forEach(function(b) {
                b.name.value === "as" && b.value.kind === "StringValue" && (i.exportedVariables[b.value.value] = v);
              });
            }), !e.selectionSet || v == null)
              return v;
            var w = (g = (y = e.directives) === null || y === void 0 ? void 0 : y.some(function(x) {
              return x.name.value === "client";
            })) !== null && g !== void 0 ? g : !1;
            if (Array.isArray(v))
              return p.resolveSubSelectedArray(e, r || w, v, i);
            if (e.selectionSet)
              return p.resolveSelectionSet(e.selectionSet, r || w, v, i);
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
                n(d) && Dh(d) && o.add(d);
              });
            },
            FragmentSpread: function(u, l, c, f, h) {
              var d = r[u.name.value];
              pe(d, 19, u.name.value);
              var p = a(d);
              p.size > 0 && (h.forEach(function(m) {
                n(m) && Dh(m) && o.add(m);
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
), di = new (Ui ? WeakMap : Map)();
function dl(t, e) {
  var r = t[e];
  typeof r == "function" && (t[e] = function() {
    return di.set(
      t,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (di.get(t) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
function wp(t) {
  t.notifyTimeout && (clearTimeout(t.notifyTimeout), t.notifyTimeout = void 0);
}
var hl = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var n = this.cache = e.cache;
      di.has(n) || (di.set(n, 0), dl(n, "evict"), dl(n, "modify"), dl(n, "reset"));
    }
    return t.prototype.init = function(e) {
      var r = e.networkStatus || qe.loading;
      return this.variables && this.networkStatus !== qe.loading && !He(this.variables, e.variables) && (r = qe.setVariables), He(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
        document: e.document,
        variables: e.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
    }, t.prototype.reset = function() {
      wp(this), this.dirty = !1;
    }, t.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, t.prototype.getDiff = function() {
      var e = this.getDiffOptions();
      if (this.lastDiff && He(e, this.lastDiff.options))
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
      e && !e.complete && (!((n = this.observableQuery) === null || n === void 0) && n.getLastError()) || (this.updateLastDiff(e), !this.dirty && !He(i && i.result, e && e.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
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
      wp(this), this.shouldNotify() && this.listeners.forEach(function(r) {
        return r(e);
      }), this.dirty = !1;
    }, t.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (Fa(this.networkStatus) && this.observableQuery) {
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
        var i = k(k({}, this.getDiffOptions(e)), { watcher: this, callback: function(a) {
          return r.setDiff(a);
        } });
        (!this.lastWatch || !He(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
      }
    }, t.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, t.prototype.shouldWrite = function(e, r) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === di.get(this.cache) && He(r, n.variables) && He(e.data, n.result.data));
    }, t.prototype.markResult = function(e, r, n, i) {
      var a = this, s = new hn(), o = yr(e.errors) ? e.errors.slice(0) : [];
      if (this.reset(), "incremental" in e && yr(e.incremental)) {
        var u = Fy(this.getDiff().result, e);
        e.data = u;
      } else if ("hasNext" in e && e.hasNext) {
        var l = this.getDiff();
        e.data = s.merge(l.result, e.data);
      }
      this.graphQLErrors = o, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Sc(e, n.errorPolicy) ? this.cache.performTransaction(function(c) {
        if (a.shouldWrite(e, n.variables))
          c.writeQuery({
            query: r,
            data: e.data,
            variables: n.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: e,
            variables: n.variables,
            dmCount: di.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          e.data = a.lastDiff.diff.result;
          return;
        }
        var f = a.getDiffOptions(n.variables), h = c.diff(f);
        !a.stopped && He(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(h, f), h.complete && (e.data = h.result);
      }) : this.lastWrite = void 0);
    }, t.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = qe.ready;
    }, t.prototype.markError = function(e) {
      return this.networkStatus = qe.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
    }, t;
  }()
);
function Sc(t, e) {
  e === void 0 && (e = "none");
  var r = e === "ignore" || e === "all", n = !Gs(t);
  return !n && r && t.data && (n = !0), n;
}
var S_ = Object.prototype.hasOwnProperty, Ep = /* @__PURE__ */ Object.create(null), O_ = (
  /** @class */
  function() {
    function t(e) {
      var r = e.cache, n = e.link, i = e.defaultOptions, a = e.documentTransform, s = e.queryDeduplication, o = s === void 0 ? !1 : s, u = e.onBroadcast, l = e.ssrMode, c = l === void 0 ? !1 : l, f = e.clientAwareness, h = f === void 0 ? {} : f, d = e.localState, p = e.assumeImmutableResults, m = p === void 0 ? !!r.assumeImmutableResults : p, v = e.defaultContext, y = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Of(
        vr["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new qi(!1);
      var g = new Oy(
        function(w) {
          return y.cache.transformDocument(w);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = o, this.clientAwareness = h, this.localState = d || new ug({ cache: r }), this.ssrMode = c, this.assumeImmutableResults = m, this.documentTransform = a ? g.concat(a).concat(g) : g, this.defaultContext = v || /* @__PURE__ */ Object.create(null), (this.onBroadcast = u) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return t.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(r, n) {
        e.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches(At(25));
    }, t.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(r) {
        return r(e);
      }), this.fetchCancelFns.clear();
    }, t.prototype.mutate = function(e) {
      return Zr(this, arguments, void 0, function(r) {
        var n, i, a, s, o, u, l, c = r.mutation, f = r.variables, h = r.optimisticResponse, d = r.updateQueries, p = r.refetchQueries, m = p === void 0 ? [] : p, v = r.awaitRefetchQueries, y = v === void 0 ? !1 : v, g = r.update, w = r.onQueryUpdated, x = r.fetchPolicy, b = x === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : x, S = r.errorPolicy, N = S === void 0 ? ((l = this.defaultOptions.mutate) === null || l === void 0 ? void 0 : l.errorPolicy) || "none" : S, I = r.keepRootFields, P = r.context;
        return Gr(this, function(z) {
          switch (z.label) {
            case 0:
              return pe(c, 26), pe(b === "network-only" || b === "no-cache", 27), n = this.generateMutationId(), c = this.cache.transformForLink(this.transform(c)), i = this.getDocumentInfo(c).hasClientExports, f = this.getVariables(c, f), i ? [4, this.localState.addExportedVariables(c, f, P)] : [3, 2];
            case 1:
              f = z.sent(), z.label = 2;
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
                fetchPolicy: b,
                errorPolicy: N,
                context: P,
                updateQueries: d,
                update: g,
                keepRootFields: I
              }), this.broadcastQueries(), o = this, [2, new Promise(function(Q, D) {
                return sl(o.getObservableFromLink(c, k(k({}, P), { optimisticResponse: s ? h : void 0 }), f, !1), function(R) {
                  if (Gs(R) && N === "none")
                    throw new _n({
                      graphQLErrors: gc(R)
                    });
                  a && (a.loading = !1, a.error = null);
                  var q = k({}, R);
                  return typeof m == "function" && (m = m(q)), N === "ignore" && Gs(q) && delete q.errors, o.markMutationResult({
                    mutationId: n,
                    result: q,
                    document: c,
                    variables: f,
                    fetchPolicy: b,
                    errorPolicy: N,
                    context: P,
                    update: g,
                    updateQueries: d,
                    awaitRefetchQueries: y,
                    refetchQueries: m,
                    removeOptimistic: s ? n : void 0,
                    onQueryUpdated: w,
                    keepRootFields: I
                  });
                }).subscribe({
                  next: function(R) {
                    o.broadcastQueries(), (!("hasNext" in R) || R.hasNext === !1) && Q(R);
                  },
                  error: function(R) {
                    a && (a.loading = !1, a.error = R), s && o.cache.removeOptimistic(n), o.broadcastQueries(), D(R instanceof _n ? R : new _n({
                      networkError: R
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
      if (!s && Sc(i, e.errorPolicy)) {
        if (bi(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), bi(i) && yr(i.incremental)) {
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
          if (!(!p || !S_.call(l, p))) {
            var m = l[p], v = n.queries.get(h), y = v.document, g = v.variables, w = r.diff({
              query: y,
              variables: g,
              returnPartialData: !0,
              optimistic: !1
            }), x = w.result, b = w.complete;
            if (b && x) {
              var S = m(x, {
                mutationResult: i,
                queryName: y && hc(y) || void 0,
                queryVariables: g
              });
              S && a.push({
                result: S,
                dataId: "ROOT_QUERY",
                query: y,
                variables: g
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
            var h = e.update, d = !xk(i) || bi(i) && !i.hasNext;
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
                p.complete && (i = k(k({}, i), { data: p.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              d && h(f, i, {
                context: e.context,
                variables: e.variables
              });
            }
            !s && !e.keepRootFields && d && f.modify({
              id: "ROOT_MUTATION",
              fields: function(m, v) {
                var y = v.fieldName, g = v.DELETE;
                return y === "__typename" ? m : g;
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
      var n = this, i = typeof e == "function" ? e(r.variables, { IGNORE: Ep }) : e;
      return i === Ep ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          n.markMutationResult(k(k({}, r), { result: { data: i } }), a);
        } catch (s) {
          globalThis.__DEV__ !== !1 && pe.error(s);
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
          hasClientExports: iT(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: Aa(["nonreactive"], e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: Iy([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" }
          ], e),
          defaultVars: If(Ka(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: k(k({}, e), { definitions: e.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? k(k({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(e, n);
      }
      return r.get(e);
    }, t.prototype.getVariables = function(e, r) {
      return k(k({}, this.getDocumentInfo(e).defaultVars), r);
    }, t.prototype.watchQuery = function(e) {
      var r = this.transform(e.query);
      e = k(k({}, e), { variables: this.getVariables(r, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var n = new hl(this), i = new _c({
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
      return r === void 0 && (r = this.generateQueryId()), pe(e.query, 28), pe(e.query.kind === "Document", 29), pe(!e.returnPartialData, 30), pe(!e.pollInterval, 31), this.fetchQuery(r, k(k({}, e), { query: this.transform(e.query) })).finally(function() {
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
      }), this.cancelPendingFetches(At(32)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = qe.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, t.prototype.getObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(s) {
        typeof s == "string" ? i.set(s, !1) : IT(s) ? i.set(r.transform(s), !1) : rt(s) && s.query && a.add(s);
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
        var o = ic("legacyOneTimeQuery"), u = r.getQuery(o).init({
          document: s.query,
          variables: s.variables
        }), l = new _c({
          queryManager: r,
          queryInfo: u,
          options: k(k({}, s), { fetchPolicy: "network-only" })
        });
        pe(l.queryId === o), u.setObservableQuery(l), n.set(o, l);
      }), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(s, o) {
        s || globalThis.__DEV__ !== !1 && pe.warn(typeof o == "string" ? 33 : 34, o);
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
          i !== "no-cache" && (Sc(d, s) && r.cache.write({
            query: n,
            result: d.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: h
          }), r.broadcastQueries());
          var p = Gs(d), m = jk(d);
          if (p || m) {
            var v = {};
            if (p && (v.graphQLErrors = d.errors), m && (v.protocolErrors = d.extensions[jf]), s === "none" || m)
              throw new _n(v);
          }
          return s === "ignore" && delete d.errors, d;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var f = this.localState.addExportedVariables(n, o, l).then(c);
        return new ze(function(h) {
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
          operationName: hc(l) || void 0,
          context: this.prepareContext(k(k({}, r), { forceFetch: !i }))
        };
        if (r = p.context, i) {
          var m = pu(l), v = sn(n), y = h.lookup(m, v);
          if (o = y.observable, !o) {
            var g = new ii([
              bc(d, p)
            ]);
            o = y.observable = g, g.beforeNext(function() {
              h.remove(m, v);
            });
          }
        } else
          o = new ii([
            bc(d, p)
          ]);
      } else
        o = new ii([ze.of({ data: {} })]), r = this.prepareContext(r);
      return c && (o = sl(o, function(w) {
        return a.localState.runResolvers({
          document: c,
          remoteResult: w,
          context: r,
          variables: n
        });
      })), o;
    }, t.prototype.getResultsFromLink = function(e, r, n) {
      var i = e.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
      return sl(this.getObservableFromLink(a, n.context, n.variables), function(s) {
        var o = gc(s), u = o.length > 0;
        if (i >= e.lastRequestId) {
          if (u && n.errorPolicy === "none")
            throw e.markError(new _n({
              graphQLErrors: o
            }));
          e.markResult(s, a, n, r), e.markReady();
        }
        var l = {
          data: s.data,
          loading: !1,
          networkStatus: qe.ready
        };
        return u && n.errorPolicy !== "ignore" && (l.errors = o, l.networkStatus = qe.error), l;
      }, function(s) {
        var o = Vk(s) ? s : new _n({ networkError: s });
        throw i >= e.lastRequestId && e.markError(o), o;
      });
    }, t.prototype.fetchConcastWithInfo = function(e, r, n, i) {
      var a = this;
      n === void 0 && (n = qe.loading), i === void 0 && (i = r.query);
      var s = this.getVariables(i, r.variables), o = this.getQuery(e), u = this.defaultOptions.watchQuery, l = r.fetchPolicy, c = l === void 0 ? u && u.fetchPolicy || "cache-first" : l, f = r.errorPolicy, h = f === void 0 ? u && u.errorPolicy || "none" : f, d = r.returnPartialData, p = d === void 0 ? !1 : d, m = r.notifyOnNetworkStatusChange, v = m === void 0 ? !1 : m, y = r.context, g = y === void 0 ? {} : y, w = Object.assign({}, r, {
        query: i,
        variables: s,
        fetchPolicy: c,
        errorPolicy: h,
        returnPartialData: p,
        notifyOnNetworkStatusChange: v,
        context: g
      }), x = function(P) {
        w.variables = P;
        var z = a.fetchQueryByPolicy(o, w, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          w.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          z.sources.length > 0 && o.observableQuery && o.observableQuery.applyNextFetchPolicy("after-fetch", r), z
        );
      }, b = function() {
        return a.fetchCancelFns.delete(e);
      };
      this.fetchCancelFns.set(e, function(P) {
        b(), setTimeout(function() {
          return S.cancel(P);
        });
      });
      var S, N;
      if (this.getDocumentInfo(w.query).hasClientExports)
        S = new ii(this.localState.addExportedVariables(w.query, w.variables, w.context).then(x).then(function(P) {
          return P.sources;
        })), N = !0;
      else {
        var I = x(w.variables);
        N = I.fromLink, S = new ii(I.sources);
      }
      return S.promise.then(b, b), {
        concast: S,
        fromLink: N
      };
    }, t.prototype.refetchQueries = function(e) {
      var r = this, n = e.updateCache, i = e.include, a = e.optimistic, s = a === void 0 ? !1 : a, o = e.removeOptimistic, u = o === void 0 ? s ? ic("refetchQueries") : void 0 : o, l = e.onQueryUpdated, c = /* @__PURE__ */ new Map();
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
          var m = h.watcher instanceof hl && h.watcher.observableQuery;
          if (m) {
            if (l) {
              c.delete(m.queryId);
              var v = l(m, d, p);
              return v === !0 && (v = m.refetch()), v !== !1 && f.set(m, v), v;
            }
            l !== null && c.set(m.queryId, { oq: m, lastDiff: p, diff: d });
          }
        }
      }), c.size && c.forEach(function(h, d) {
        var p = h.oq, m = h.lastDiff, v = h.diff, y;
        if (l) {
          if (!v) {
            var g = p.queryInfo;
            g.reset(), v = g.getDiff();
          }
          y = l(p, v, m);
        }
        (!l || y === !0) && (y = p.refetch()), y !== !1 && f.set(p, y), d.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(d);
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
      }, m = function(x, b) {
        b === void 0 && (b = e.networkStatus || qe.loading);
        var S = x.result;
        globalThis.__DEV__ !== !1 && !c && !He(S, {}) && og(x.missing);
        var N = function(I) {
          return ze.of(k({ data: I, loading: Fa(b), networkStatus: b }, x.complete ? null : { partial: !0 }));
        };
        return S && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
          document: a,
          remoteResult: { data: S },
          context: f,
          variables: s,
          onlyRunForcedResolvers: !0
        }).then(function(I) {
          return N(I.data || void 0);
        }) : l === "none" && b === qe.refetch && Array.isArray(x.missing) ? N(void 0) : N(S);
      }, v = o === "no-cache" ? 0 : n === qe.refetch && u !== "merge" ? 1 : 2, y = function() {
        return i.getResultsFromLink(e, v, {
          query: a,
          variables: s,
          context: f,
          fetchPolicy: o,
          errorPolicy: l
        });
      }, g = h && typeof d == "number" && d !== n && Fa(n);
      switch (o) {
        default:
        case "cache-first": {
          var w = p();
          return w.complete ? {
            fromLink: !1,
            sources: [m(w, e.markReady())]
          } : c || g ? {
            fromLink: !0,
            sources: [m(w), y()]
          } : { fromLink: !0, sources: [y()] };
        }
        case "cache-and-network": {
          var w = p();
          return w.complete || c || g ? {
            fromLink: !0,
            sources: [m(w), y()]
          } : { fromLink: !0, sources: [y()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [m(p(), e.markReady())]
          };
        case "network-only":
          return g ? {
            fromLink: !0,
            sources: [m(p()), y()]
          } : { fromLink: !0, sources: [y()] };
        case "no-cache":
          return g ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [m(e.getDiff()), y()]
          } : { fromLink: !0, sources: [y()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, t.prototype.getQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new hl(this, e)), this.queries.get(e);
    }, t.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var r = this.localState.prepareContext(e);
      return k(k(k({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, t;
  }()
), xp = !1, lg = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw At(15);
      var n = e.uri, i = e.credentials, a = e.headers, s = e.cache, o = e.documentTransform, u = e.ssrMode, l = u === void 0 ? !1 : u, c = e.ssrForceFetchDelay, f = c === void 0 ? 0 : c, h = e.connectToDevTools, d = h === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : h, p = e.queryDeduplication, m = p === void 0 ? !0 : p, v = e.defaultOptions, y = e.defaultContext, g = e.assumeImmutableResults, w = g === void 0 ? s.assumeImmutableResults : g, x = e.resolvers, b = e.typeDefs, S = e.fragmentMatcher, N = e.name, I = e.version, P = e.link;
      P || (P = n ? new r_({ uri: n, credentials: i, headers: a }) : wr.empty()), this.link = P, this.cache = s, this.disableNetworkFetches = l || f > 0, this.queryDeduplication = m, this.defaultOptions = v || /* @__PURE__ */ Object.create(null), this.typeDefs = b, f && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = wf, this.localState = new ug({
        cache: s,
        client: this,
        resolvers: x,
        fragmentMatcher: S
      }), this.queryManager = new O_({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: y,
        documentTransform: o,
        queryDeduplication: m,
        ssrMode: l,
        clientAwareness: {
          name: N,
          version: I
        },
        localState: this.localState,
        assumeImmutableResults: w,
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
      !xp && globalThis.__DEV__ !== !1 && (xp = !0, setTimeout(function() {
        if (typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ && /^(https?|file):$/.test(window.location.protocol)) {
          var n = window.navigator, i = n && n.userAgent, a = void 0;
          typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && pe.log("Download the Apollo DevTools for a better development experience: %s", a);
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
      return this.defaultOptions.watchQuery && (e = Js(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = k(k({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, t.prototype.query = function(e) {
      return this.defaultOptions.query && (e = Js(this.defaultOptions.query, e)), pe(e.fetchPolicy !== "cache-and-network", 16), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = k(k({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
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
      return bc(this.link, e);
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
        globalThis.__DEV__ !== !1 && pe.debug(17, s);
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
globalThis.__DEV__ !== !1 && (lg.prototype.getMemoryInternals = wT);
var eo = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), cg = !0, bo = !1;
function fg(t) {
  return t.replace(/[\s,]+/g, " ").trim();
}
function C_(t) {
  return fg(t.source.body.substring(t.start, t.end));
}
function I_(t) {
  var e = /* @__PURE__ */ new Set(), r = [];
  return t.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = C_(n.loc), s = Oc.get(i);
      s && !s.has(a) ? cg && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : s || Oc.set(i, s = /* @__PURE__ */ new Set()), s.add(a), e.has(a) || (e.add(a), r.push(n));
    } else
      r.push(n);
  }), k(k({}, t), { definitions: r });
}
function N_(t) {
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
function A_(t) {
  var e = fg(t);
  if (!eo.has(e)) {
    var r = Yx(t, {
      experimentalFragmentVariables: bo,
      allowLegacyFragmentVariables: bo
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    eo.set(e, N_(I_(r)));
  }
  return eo.get(e);
}
function Ii(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  typeof t == "string" && (t = [t]);
  var n = t[0];
  return e.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += t[a + 1];
  }), A_(n);
}
function D_() {
  eo.clear(), Oc.clear();
}
function R_() {
  cg = !1;
}
function P_() {
  bo = !0;
}
function M_() {
  bo = !1;
}
var ta = {
  gql: Ii,
  resetCaches: D_,
  disableFragmentWarnings: R_,
  enableExperimentalFragmentVariables: P_,
  disableExperimentalFragmentVariables: M_
};
(function(t) {
  t.gql = ta.gql, t.resetCaches = ta.resetCaches, t.disableFragmentWarnings = ta.disableFragmentWarnings, t.enableExperimentalFragmentVariables = ta.enableExperimentalFragmentVariables, t.disableExperimentalFragmentVariables = ta.disableExperimentalFragmentVariables;
})(Ii || (Ii = {}));
Ii.default = Ii;
function F_(t) {
  return new wr(function(e, r) {
    var n = Mr(e, []);
    return new ze(function(i) {
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
    return new ze(function(n) {
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
  t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, H);
})(hg);
var rr = hg.exports;
const L_ = /* @__PURE__ */ jm(rr), $_ = /* @__PURE__ */ G0({
  __proto__: null,
  default: L_
}, [rr]);
var Tp = Sf ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function j_() {
  pe("createContext" in $_, 45);
  var t = rr.createContext[Tp];
  return t || (Object.defineProperty(rr.createContext, Tp, {
    value: t = rr.createContext({}),
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), t.displayName = "ApolloContext"), t;
}
function V_(t) {
  var e = rr.useContext(j_()), r = t || e.client;
  return pe(!!r, 49), r;
}
var Ir;
(function(t) {
  t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription";
})(Ir || (Ir = {}));
var An;
function kp(t) {
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
  An || (An = new Of(
    vr.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var e = An.get(t);
  if (e)
    return e;
  var r, n, i;
  pe(!!t && !!t.kind, 60, t);
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
  pe(!a.length || s.length || o.length || u.length, 61), pe(
    s.length + o.length + u.length <= 1,
    62,
    t,
    s.length,
    u.length,
    o.length
  ), n = s.length ? Ir.Query : Ir.Mutation, !s.length && !o.length && (n = Ir.Subscription);
  var h = s.length ? s : o.length ? o : u;
  pe(h.length === 1, 63, t, h.length);
  var d = h[0];
  r = d.variableDefinitions || [], d.name && d.name.kind === "Name" ? i = d.name.value : i = "data";
  var p = { name: i, type: n, variables: r };
  return An.set(t, p), p;
}
pg.resetCache = function() {
  An = void 0;
};
globalThis.__DEV__ !== !1 && Cf("parser", function() {
  return An ? An.size : 0;
});
function z_(t, e) {
  var r = pg(t), n = kp(e), i = kp(r.type);
  pe(
    r.type === e,
    64,
    n,
    n,
    i
  );
}
function W_(t, e) {
  var r = V_(e == null ? void 0 : e.client);
  z_(t, Ir.Mutation);
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
    var c = s.current, f = c.options, h = c.mutation, d = k(k({}, f), { mutation: h }), p = l.client || s.current.client;
    !s.current.result.loading && !d.ignoreResults && s.current.isMounted && a(s.current.result = {
      loading: !0,
      error: void 0,
      data: void 0,
      called: !0,
      client: p
    });
    var m = ++s.current.mutationId, v = Js(d, l);
    return p.mutate(v).then(function(y) {
      var g, w, x = y.data, b = y.errors, S = b && b.length > 0 ? new _n({ graphQLErrors: b }) : void 0, N = l.onError || ((g = s.current.options) === null || g === void 0 ? void 0 : g.onError);
      if (S && N && N(S, v), m === s.current.mutationId && !v.ignoreResults) {
        var I = {
          called: !0,
          loading: !1,
          data: x,
          error: S,
          client: p
        };
        s.current.isMounted && !He(s.current.result, I) && a(s.current.result = I);
      }
      var P = l.onCompleted || ((w = s.current.options) === null || w === void 0 ? void 0 : w.onCompleted);
      return S || P == null || P(y.data, v), y;
    }).catch(function(y) {
      var g;
      if (m === s.current.mutationId && s.current.isMounted) {
        var w = {
          loading: !1,
          error: y,
          data: void 0,
          called: !0,
          client: p
        };
        He(s.current.result, w) || a(s.current.result = w);
      }
      var x = l.onError || ((g = s.current.options) === null || g === void 0 ? void 0 : g.onError);
      if (x)
        return x(y, v), { data: void 0, errors: y };
      throw y;
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
  }, []), [o, k({ reset: u }, i)];
}
const q_ = new ag();
async function U_({ mode: t, accessToken: e, reauth: r }) {
  const n = t === "development" ? mo.engageGraphqlDevEndpoint : mo.engageGraphqlEndpoint, i = Xk({ uri: n }), a = F_((u, { headers: l }) => {
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
    cache: q_
  });
}
const mg = xt({
  apolloClient: null
});
function B_({ children: t, mode: e }) {
  const { isAuthenticated: r, accessToken: n, reauth: i } = hx();
  if (!r)
    return /* @__PURE__ */ X.jsx("h2", { children: "Not authenticated. Try refreshing the page." });
  const [a, s] = Je(null);
  return Le(() => {
    async function o() {
      s(await U_({ mode: e, accessToken: n, reauth: i }));
    }
    o().catch(console.error);
  }, [e, n]), a ? /* @__PURE__ */ X.jsx(mg.Provider, { value: { client: a }, children: t }) : /* @__PURE__ */ X.jsx("h2", { children: "Initializing..." });
}
function H_() {
  const t = ft(mg);
  if (!t)
    throw new Error("useEngage must be used within an EngageProvider");
  return t;
}
function Q_(t, e = {}) {
  const { client: r } = H_();
  return W_(t, { ...e, client: r });
}
const vg = xt({}), Y_ = () => ft(vg);
function Z_({ children: t, options: e = {} }) {
  return e.isProd = e.mode === "production", e.isDev = !e.isProd, /* @__PURE__ */ X.jsx(vg.Provider, { value: e, children: t });
}
function UI({ mode: t = "production", ownerId: e, senalysisBusinessId: r, children: n }) {
  const i = {
    mode: t,
    senalysisBusinessId: r
  };
  return /* @__PURE__ */ X.jsx(Z_, { options: i, children: /* @__PURE__ */ X.jsx(dx, { mode: t, ownerId: e, children: /* @__PURE__ */ X.jsxs(B_, { mode: t, children: [
    n,
    /* @__PURE__ */ X.jsx(Zl, {})
  ] }) }) });
}
const yg = typeof document < "u" ? H.useLayoutEffect : () => {
};
function G_(t) {
  const e = xe(null);
  return yg(() => {
    e.current = t;
  }, [
    t
  ]), kt((...r) => {
    const n = e.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
const es = (t) => {
  var e;
  return (e = t == null ? void 0 : t.ownerDocument) !== null && e !== void 0 ? e : document;
}, Dn = (t) => t && "window" in t && t.window === t ? t : es(t).defaultView || window;
function J_(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? !1 : ((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some((r) => t.test(r.brand))) || t.test(window.navigator.userAgent);
}
function K_(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function X_() {
  return K_(/^Mac/i);
}
function eS() {
  return J_(/Android/i);
}
function tS(t) {
  return t.mozInputSource === 0 && t.isTrusted ? !0 : eS() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
class rS {
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
  let e = xe({
    isFocused: !1,
    observer: null
  });
  yg(() => {
    const n = e.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = G_((n) => {
    t == null || t(n);
  });
  return kt((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let i = n.target, a = (s) => {
        e.current.isFocused = !1, i.disabled && r(new rS("blur", s)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
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
function nS(t) {
  let { isDisabled: e, onFocus: r, onBlur: n, onFocusChange: i } = t;
  const a = kt((u) => {
    if (u.target === u.currentTarget)
      return n && n(u), i && i(!1), !0;
  }, [
    n,
    i
  ]), s = gg(a), o = kt((u) => {
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
let ts = null, Cc = /* @__PURE__ */ new Set(), ba = /* @__PURE__ */ new Map(), qn = !1, Ic = !1;
const iS = {
  Tab: !0,
  Escape: !0
};
function Uf(t, e) {
  for (let r of Cc)
    r(t, e);
}
function aS(t) {
  return !(t.metaKey || !X_() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function wo(t) {
  qn = !0, aS(t) && (ts = "keyboard", Uf("keyboard", t));
}
function Ht(t) {
  ts = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (qn = !0, Uf("pointer", t));
}
function bg(t) {
  tS(t) && (qn = !0, ts = "virtual");
}
function wg(t) {
  t.target === window || t.target === document || (!qn && !Ic && (ts = "virtual", Uf("virtual", t)), qn = !1, Ic = !1);
}
function Eg() {
  qn = !1, Ic = !0;
}
function Nc(t) {
  if (typeof window > "u" || ba.get(Dn(t)))
    return;
  const e = Dn(t), r = es(t);
  let n = e.HTMLElement.prototype.focus;
  e.HTMLElement.prototype.focus = function() {
    qn = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", wo, !0), r.addEventListener("keyup", wo, !0), r.addEventListener("click", bg, !0), e.addEventListener("focus", wg, !0), e.addEventListener("blur", Eg, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", Ht, !0), r.addEventListener("pointermove", Ht, !0), r.addEventListener("pointerup", Ht, !0)) : (r.addEventListener("mousedown", Ht, !0), r.addEventListener("mousemove", Ht, !0), r.addEventListener("mouseup", Ht, !0)), e.addEventListener("beforeunload", () => {
    xg(t);
  }, {
    once: !0
  }), ba.set(e, {
    focus: n
  });
}
const xg = (t, e) => {
  const r = Dn(t), n = es(t);
  e && n.removeEventListener("DOMContentLoaded", e), ba.has(r) && (r.HTMLElement.prototype.focus = ba.get(r).focus, n.removeEventListener("keydown", wo, !0), n.removeEventListener("keyup", wo, !0), n.removeEventListener("click", bg, !0), r.removeEventListener("focus", wg, !0), r.removeEventListener("blur", Eg, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", Ht, !0), n.removeEventListener("pointermove", Ht, !0), n.removeEventListener("pointerup", Ht, !0)) : (n.removeEventListener("mousedown", Ht, !0), n.removeEventListener("mousemove", Ht, !0), n.removeEventListener("mouseup", Ht, !0)), ba.delete(r));
};
function sS(t) {
  const e = es(t);
  let r;
  return e.readyState !== "loading" ? Nc(t) : (r = () => {
    Nc(t);
  }, e.addEventListener("DOMContentLoaded", r)), () => xg(t, r);
}
typeof document < "u" && sS();
function Tg() {
  return ts !== "pointer";
}
const oS = /* @__PURE__ */ new Set([
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
function uS(t, e, r) {
  var n;
  const i = typeof window < "u" ? Dn(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? Dn(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? Dn(r == null ? void 0 : r.target).HTMLElement : HTMLElement, o = typeof window < "u" ? Dn(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return t = t || (r == null ? void 0 : r.target) instanceof i && !oS.has(r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type) || (r == null ? void 0 : r.target) instanceof a || (r == null ? void 0 : r.target) instanceof s && (r == null ? void 0 : r.target.isContentEditable), !(t && e === "keyboard" && r instanceof o && !iS[r.key]);
}
function lS(t, e, r) {
  Nc(), Le(() => {
    let n = (i, a) => {
      uS(!!(r != null && r.isTextInput), i, a) && t(Tg());
    };
    return Cc.add(n), () => {
      Cc.delete(n);
    };
  }, e);
}
function cS(t) {
  let { isDisabled: e, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: i } = t, a = xe({
    isFocusWithin: !1
  }), s = kt((l) => {
    a.current.isFocusWithin && !l.currentTarget.contains(l.relatedTarget) && (a.current.isFocusWithin = !1, r && r(l), i && i(!1));
  }, [
    r,
    i,
    a
  ]), o = gg(s), u = kt((l) => {
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
let Eo = !1, pl = 0;
function Ac() {
  Eo = !0, setTimeout(() => {
    Eo = !1;
  }, 50);
}
function _p(t) {
  t.pointerType === "touch" && Ac();
}
function fS() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", _p) : document.addEventListener("touchend", Ac), pl++, () => {
      pl--, !(pl > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", _p) : document.removeEventListener("touchend", Ac));
    };
}
function dS(t) {
  let { onHoverStart: e, onHoverChange: r, onHoverEnd: n, isDisabled: i } = t, [a, s] = Je(!1), o = xe({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Le(fS, []);
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
  return Le(() => {
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
function hS(t = {}) {
  let { autoFocus: e = !1, isTextInput: r, within: n } = t, i = xe({
    isFocused: !1,
    isFocusVisible: e || Tg()
  }), [a, s] = Je(!1), [o, u] = Je(() => i.current.isFocused && i.current.isFocusVisible), l = kt(() => u(i.current.isFocused && i.current.isFocusVisible), []), c = kt((d) => {
    i.current.isFocused = d, s(d), l();
  }, [
    l
  ]);
  lS((d) => {
    i.current.isFocusVisible = d, l();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = nS({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: h } = cS({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: a,
    isFocusVisible: o,
    focusProps: n ? h : f
  };
}
var pS = Object.defineProperty, mS = (t, e, r) => e in t ? pS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ml = (t, e, r) => (mS(t, typeof e != "symbol" ? e + "" : e, r), r);
let vS = class {
  constructor() {
    ml(this, "current", this.detect()), ml(this, "handoffState", "pending"), ml(this, "currentId", 0);
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
}, Ln = new vS();
function vu(t) {
  return Ln.isServer ? null : t instanceof Node ? t.ownerDocument : t != null && t.hasOwnProperty("current") && t.current instanceof Node ? t.current.ownerDocument : document;
}
function kg(t) {
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
    return kg(() => {
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
function yu() {
  let [t] = Je(Yn);
  return Le(() => () => t.dispose(), [t]), t;
}
let vt = (t, e) => {
  Ln.isServer ? Le(t, e) : Qo(t, e);
};
function Zt(t) {
  let e = xe(t);
  return vt(() => {
    e.current = t;
  }, [t]), e;
}
let Pe = function(t) {
  let e = Zt(t);
  return H.useCallback((...r) => e.current(...r), [e]);
};
function yS(t) {
  let e = t.width / 2, r = t.height / 2;
  return { top: t.clientY - r, right: t.clientX + e, bottom: t.clientY + r, left: t.clientX - e };
}
function gS(t, e) {
  return !(!t || !e || t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom);
}
function bS({ disabled: t = !1 } = {}) {
  let e = xe(null), [r, n] = Je(!1), i = yu(), a = Pe(() => {
    e.current = null, n(!1), i.dispose();
  }), s = Pe((o) => {
    if (i.dispose(), e.current === null) {
      e.current = o.currentTarget, n(!0);
      {
        let u = vu(o.currentTarget);
        i.addEventListener(u, "pointerup", a, !1), i.addEventListener(u, "pointermove", (l) => {
          if (e.current) {
            let c = yS(l);
            n(gS(c, e.current.getBoundingClientRect()));
          }
        }, !1), i.addEventListener(u, "pointercancel", a, !1);
      }
    }
  });
  return { pressed: r, pressProps: t ? {} : { onPointerDown: s, onPointerUp: a, onClick: a } };
}
function wa(...t) {
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
var Ni = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Ni || {}), tn = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(tn || {});
function fr({ ourProps: t, theirProps: e, slot: r, defaultTag: n, features: i, visible: a = !0, name: s, mergeRefs: o }) {
  o = o ?? ES;
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
  let { as: a = r, children: s, refName: o = "ref", ...u } = vl(t, ["unmount", "static"]), l = t.ref !== void 0 ? { [o]: t.ref } : {}, c = typeof s == "function" ? s(e) : s;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(e)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let f = {};
  if (e) {
    let h = !1, d = [];
    for (let [p, m] of Object.entries(e))
      typeof m == "boolean" && (h = !0), m === !0 && d.push(p.replace(/([A-Z])/g, (v) => `-${v.toLowerCase()}`));
    if (h) {
      f["data-headlessui-state"] = d.join(" ");
      for (let p of d)
        f[`data-${p}`] = "";
    }
  }
  if (a === Cr && (Object.keys(ti(u)).length > 0 || Object.keys(ti(f)).length > 0))
    if (!$n(c) || Array.isArray(c) && c.length > 1) {
      if (Object.keys(ti(u)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ti(u)).concat(Object.keys(ti(f))).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
    } else {
      let h = c.props, d = h == null ? void 0 : h.className, p = typeof d == "function" ? (...y) => wa(d(...y), u.className) : wa(d, u.className), m = p ? { className: p } : {}, v = _g(c.props, ti(vl(u, ["ref"])));
      for (let y in f)
        y in v && delete f[y];
      return no(c, Object.assign({}, v, f, l, { ref: i(c.ref, l.ref) }, m));
    }
  return H0(a, Object.assign({}, vl(u, ["ref"]), a !== Cr && l, a !== Cr && f), c);
}
function wS() {
  let t = xe([]), e = kt((r) => {
    for (let n of t.current)
      n != null && (typeof n == "function" ? n(r) : n.current = r);
  }, []);
  return (...r) => {
    if (!r.every((n) => n == null))
      return t.current = r, e;
  };
}
function ES(...t) {
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
function Dc(...t) {
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
  return Object.assign(Ho(t), { displayName: (e = t.displayName) != null ? e : t.name });
}
function ti(t) {
  let e = Object.assign({}, t);
  for (let r in e)
    e[r] === void 0 && delete e[r];
  return e;
}
function vl(t, e = []) {
  let r = Object.assign({}, t);
  for (let n of e)
    n in r && delete r[n];
  return r;
}
let xS = "div";
var Ai = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ai || {});
function TS(t, e) {
  var r;
  let { features: n = 1, ...i } = t, a = { ref: e, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return fr({ ourProps: a, theirProps: i, slot: {}, defaultTag: xS, name: "Hidden" });
}
let La = Jt(TS);
function Sg(t) {
  let e = t.parentElement, r = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (r = e), e = e.parentElement;
  let n = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return n && kS(r) ? !1 : n;
}
function kS(t) {
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
  let e = xe(t);
  Le(() => {
    e.current = t;
  }, [t]);
  let r = Pe((n) => {
    for (let i of e.current)
      i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return t.every((n) => n == null || (n == null ? void 0 : n[Og])) ? void 0 : r;
}
var Kr = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Kr || {});
let _S = xt(() => {
});
function SS({ value: t, children: e }) {
  return H.createElement(_S.Provider, { value: t }, e);
}
function OS(t) {
  if (t === null)
    return { width: 0, height: 0 };
  let { width: e, height: r } = t.getBoundingClientRect();
  return { width: e, height: r };
}
function CS(t, e = !1) {
  let r = t === null ? null : "current" in t ? t.current : t, [n, i] = Gc(() => ({}), {}), a = Ke(() => OS(r), [r, n]);
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
  Le(() => {
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
let Rc = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(","), IS = ["[data-autofocus]"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var _r = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t[t.AutoFocus = 64] = "AutoFocus", t))(_r || {}), xo = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(xo || {}), NS = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(NS || {});
function gu(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Rc)).sort((e, r) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function AS(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(IS)).sort((e, r) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Bf = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(Bf || {});
function Ng(t, e = 0) {
  var r;
  return t === ((r = vu(t)) == null ? void 0 : r.body) ? !1 : mt(e, { 0() {
    return t.matches(Rc);
  }, 1() {
    let n = t;
    for (; n !== null; ) {
      if (n.matches(Rc))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var DS = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(DS || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let RS = ["textarea", "input"].join(",");
function PS(t) {
  var e, r;
  return (r = (e = t == null ? void 0 : t.matches) == null ? void 0 : e.call(t, RS)) != null ? r : !1;
}
function MS(t, e = (r) => r) {
  return t.slice().sort((r, n) => {
    let i = e(r), a = e(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Rn(t, e, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let a = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t.ownerDocument, s = Array.isArray(t) ? r ? MS(t) : t : e & 64 ? AS(t) : gu(t);
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
  return e & 6 && PS(h) && h.select(), 2;
}
function Ag() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function FS() {
  return /Android/gi.test(window.navigator.userAgent);
}
function LS() {
  return Ag() || FS();
}
function $s(t, e, r) {
  let n = Zt(e);
  Le(() => {
    function i(a) {
      n.current(a);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [t, r]);
}
function Dg(t, e, r) {
  let n = Zt(e);
  Le(() => {
    function i(a) {
      n.current(a);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [t, r]);
}
function $S(t, e, r = !0) {
  let n = xe(!1);
  Le(() => {
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
    return !Ng(u, Bf.Loose) && u.tabIndex !== -1 && s.preventDefault(), e(s, u);
  }
  let a = xe(null);
  $s("pointerdown", (s) => {
    var o, u;
    n.current && (a.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), $s("mousedown", (s) => {
    var o, u;
    n.current && (a.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), $s("click", (s) => {
    LS() || a.current && (i(s, () => a.current), a.current = null);
  }, !0), $s("touchend", (s) => i(s, () => s.target instanceof HTMLElement ? s.target : null), !0), Dg("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Bi(...t) {
  return Ke(() => vu(...t), [...t]);
}
function jS(t, e, r, n) {
  let i = Zt(r);
  Le(() => {
    t = t ?? window;
    function a(s) {
      i.current(s);
    }
    return t.addEventListener(e, a, n), () => t.removeEventListener(e, a, n);
  }, [t, e, n]);
}
function Sp(t) {
  var e;
  if (t.type)
    return t.type;
  let r = (e = t.as) != null ? e : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function VS(t, e) {
  let [r, n] = Je(() => Sp(t));
  return vt(() => {
    n(Sp(t));
  }, [t.type, t.as]), vt(() => {
    r || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && n("button");
  }, [r, e]), r;
}
function zS(t) {
  return Q0(t.subscribe, t.getSnapshot, t.getSnapshot);
}
function WS(t, e) {
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
function qS() {
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
function US() {
  return Ag() ? { before({ doc: t, d: e, meta: r }) {
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
function BS() {
  return { before({ doc: t, d: e }) {
    e.style(t.documentElement, "overflow", "hidden");
  } };
}
function HS(t) {
  let e = {};
  for (let r of t)
    Object.assign(e, r(e));
  return e;
}
let Pn = WS(() => /* @__PURE__ */ new Map(), { PUSH(t, e) {
  var r;
  let n = (r = this.get(t)) != null ? r : { doc: t, count: 0, d: Yn(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(e), this.set(t, n), this;
}, POP(t, e) {
  let r = this.get(t);
  return r && (r.count--, r.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: t, d: e, meta: r }) {
  let n = { doc: t, d: e, meta: HS(r) }, i = [US(), qS(), BS()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(n)), i.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: t }) {
  t.dispose();
}, TEARDOWN({ doc: t }) {
  this.delete(t);
} });
Pn.subscribe(() => {
  let t = Pn.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [r] of t)
    e.set(r, r.documentElement.style.overflow);
  for (let r of t.values()) {
    let n = e.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Pn.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Pn.dispatch("TEARDOWN", r);
  }
});
function QS(t, e, r = () => ({ containers: [] })) {
  let n = zS(Pn), i = t ? n.get(t) : void 0, a = i ? i.count > 0 : !1;
  return vt(() => {
    if (!(!t || !e))
      return Pn.dispatch("PUSH", t, r), () => Pn.dispatch("POP", t, r);
  }, [e, t]), a;
}
function YS(t, e, r = () => [document.body]) {
  QS(t, e, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], r] };
  });
}
function Hi(t) {
  return Rg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Vt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Vr(t) {
  var e;
  return (e = (Rg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Rg(t) {
  return t instanceof Node || t instanceof Vt(t).Node;
}
function Nt(t) {
  return t instanceof Element || t instanceof Vt(t).Element;
}
function gr(t) {
  return t instanceof HTMLElement || t instanceof Vt(t).HTMLElement;
}
function Op(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Vt(t).ShadowRoot;
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
function ZS(t) {
  return ["table", "td", "th"].includes(Hi(t));
}
function Hf(t) {
  const e = Qf(), r = lr(t);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function GS(t) {
  let e = mn(t);
  for (; gr(e) && !Di(e); ) {
    if (Hf(e))
      return e;
    e = mn(e);
  }
  return null;
}
function Qf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Di(t) {
  return ["html", "body", "#document"].includes(Hi(t));
}
function lr(t) {
  return Vt(t).getComputedStyle(t);
}
function bu(t) {
  return Nt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function mn(t) {
  if (Hi(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Op(t) && t.host || // Fallback.
    Vr(t)
  );
  return Op(e) ? e.host : e;
}
function Pg(t) {
  const e = mn(t);
  return Di(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : gr(e) && rs(e) ? e : Pg(e);
}
function $a(t, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const i = Pg(t), a = i === ((n = t.ownerDocument) == null ? void 0 : n.body), s = Vt(i);
  return a ? e.concat(s, s.visualViewport || [], rs(i) ? i : [], s.frameElement && r ? $a(s.frameElement) : []) : e.concat(i, $a(i, [], r));
}
function JS() {
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? t.brands.map((e) => {
    let {
      brand: r,
      version: n
    } = e;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
const rn = Math.min, $t = Math.max, To = Math.round, js = Math.floor, vn = (t) => ({
  x: t,
  y: t
}), KS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, XS = {
  start: "end",
  end: "start"
};
function Cp(t, e, r) {
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
function e2(t, e, r) {
  r === void 0 && (r = !1);
  const n = is(t), i = Lg(t), a = Fg(i);
  let s = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = ko(s)), [s, ko(s)];
}
function t2(t) {
  const e = ko(t);
  return [Pc(t), e, Pc(e)];
}
function Pc(t) {
  return t.replace(/start|end/g, (e) => XS[e]);
}
function r2(t, e, r) {
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
function n2(t, e, r, n) {
  const i = is(t);
  let a = r2(yn(t), r === "start", n);
  return i && (a = a.map((s) => s + "-" + i), e && (a = a.concat(a.map(Pc)))), a;
}
function ko(t) {
  return t.replace(/left|right|bottom|top/g, (e) => KS[e]);
}
function i2(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function a2(t) {
  return typeof t != "number" ? i2(t) : {
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
function Ip(t, e, r) {
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
const s2 = async (t, e, r) => {
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
  } = Ip(l, n, u), h = n, d = {}, p = 0;
  for (let m = 0; m < o.length; m++) {
    const {
      name: v,
      fn: y
    } = o[m], {
      x: g,
      y: w,
      data: x,
      reset: b
    } = await y({
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
    c = g ?? c, f = w ?? f, d = {
      ...d,
      [v]: {
        ...d[v],
        ...x
      }
    }, b && p <= 50 && (p++, typeof b == "object" && (b.placement && (h = b.placement), b.rects && (l = b.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : b.rects), {
      x: c,
      y: f
    } = Ip(l, h, u)), m = -1);
  }
  return {
    x: c,
    y: f,
    placement: h,
    strategy: i,
    middlewareData: d
  };
};
async function wu(t, e) {
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
  } = ns(e, t), p = a2(d), v = o[h ? f === "floating" ? "reference" : "floating" : f], y = _o(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(v))) == null || r ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)),
    boundary: l,
    rootBoundary: c,
    strategy: u
  })), g = f === "floating" ? {
    x: n,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)), x = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = _o(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: g,
    offsetParent: w,
    strategy: u
  }) : g);
  return {
    top: (y.top - b.top + p.top) / x.y,
    bottom: (b.bottom - y.bottom + p.bottom) / x.y,
    left: (y.left - b.left + p.left) / x.x,
    right: (b.right - y.right + p.right) / x.x
  };
}
const o2 = function(t) {
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
        ...v
      } = ns(t, e);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = yn(i), g = yn(o) === o, w = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), x = h || (g || !m ? [ko(o)] : t2(o));
      !h && p !== "none" && x.push(...n2(o, m, p, w));
      const b = [o, ...x], S = await wu(e, v), N = [];
      let I = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (c && N.push(S[y]), f) {
        const D = e2(i, s, w);
        N.push(S[D[0]], S[D[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: N
      }], !N.every((D) => D <= 0)) {
        var P, z;
        const D = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1, R = b[D];
        if (R)
          return {
            data: {
              index: D,
              overflows: I
            },
            reset: {
              placement: R
            }
          };
        let q = (z = I.filter((U) => U.overflows[0] <= 0).sort((U, M) => U.overflows[1] - M.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!q)
          switch (d) {
            case "bestFit": {
              var Q;
              const U = (Q = I.map((M) => [M.placement, M.overflows.filter(($) => $ > 0).reduce(($, ve) => $ + ve, 0)]).sort((M, $) => M[1] - $[1])[0]) == null ? void 0 : Q[0];
              U && (q = U);
              break;
            }
            case "initialPlacement":
              q = o;
              break;
          }
        if (i !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
async function u2(t, e) {
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
const l2 = function(t) {
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
      } = e, u = await u2(e, t);
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
}, c2 = function(t) {
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
          fn: (v) => {
            let {
              x: y,
              y: g
            } = v;
            return {
              x: y,
              y: g
            };
          }
        },
        ...u
      } = ns(t, e), l = {
        x: r,
        y: n
      }, c = await wu(e, u), f = as(yn(i)), h = Mg(f);
      let d = l[h], p = l[f];
      if (a) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", g = d + c[v], w = d - c[y];
        d = Cp(g, d, w);
      }
      if (s) {
        const v = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", g = p + c[v], w = p - c[y];
        p = Cp(g, p, w);
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
}, f2 = function(t) {
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
      } = ns(t, e), u = await wu(e, o), l = yn(r), c = is(r), f = as(r) === "y", {
        width: h,
        height: d
      } = n.floating;
      let p, m;
      l === "top" || l === "bottom" ? (p = l, m = c === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, p = c === "end" ? "top" : "bottom");
      const v = d - u.top - u.bottom, y = h - u.left - u.right, g = rn(d - u[p], v), w = rn(h - u[m], y), x = !e.middlewareData.shift;
      let b = g, S = w;
      if (f ? S = c || x ? rn(w, y) : y : b = c || x ? rn(g, v) : v, x && !c) {
        const I = $t(u.left, 0), P = $t(u.right, 0), z = $t(u.top, 0), Q = $t(u.bottom, 0);
        f ? S = h - 2 * (I !== 0 || P !== 0 ? I + P : $t(u.left, u.right)) : b = d - 2 * (z !== 0 || Q !== 0 ? z + Q : $t(u.top, u.bottom));
      }
      await s({
        ...e,
        availableWidth: S,
        availableHeight: b
      });
      const N = await i.getDimensions(a.floating);
      return h !== N.width || d !== N.height ? {
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
  const i = gr(t), a = i ? t.offsetWidth : r, s = i ? t.offsetHeight : n, o = To(r) !== a || To(n) !== s;
  return o && (r = a, n = s), {
    width: r,
    height: n,
    $: o
  };
}
function Yf(t) {
  return Nt(t) ? t : t.contextElement;
}
function Ei(t) {
  const e = Yf(t);
  if (!gr(e))
    return vn(1);
  const r = e.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = $g(e);
  let s = (a ? To(r.width) : r.width) / n, o = (a ? To(r.height) : r.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: s,
    y: o
  };
}
const d2 = /* @__PURE__ */ vn(0);
function jg(t) {
  const e = Vt(t);
  return !Qf() || !e.visualViewport ? d2 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function h2(t, e, r) {
  return e === void 0 && (e = !1), !r || e && r !== Vt(t) ? !1 : e;
}
function Un(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const i = t.getBoundingClientRect(), a = Yf(t);
  let s = vn(1);
  e && (n ? Nt(n) && (s = Ei(n)) : s = Ei(t));
  const o = h2(a, r, n) ? jg(a) : vn(0);
  let u = (i.left + o.x) / s.x, l = (i.top + o.y) / s.y, c = i.width / s.x, f = i.height / s.y;
  if (a) {
    const h = Vt(a), d = n && Nt(n) ? Vt(n) : n;
    let p = h, m = p.frameElement;
    for (; m && n && d !== p; ) {
      const v = Ei(m), y = m.getBoundingClientRect(), g = lr(m), w = y.left + (m.clientLeft + parseFloat(g.paddingLeft)) * v.x, x = y.top + (m.clientTop + parseFloat(g.paddingTop)) * v.y;
      u *= v.x, l *= v.y, c *= v.x, f *= v.y, u += w, l += x, p = Vt(m), m = p.frameElement;
    }
  }
  return _o({
    width: c,
    height: f,
    x: u,
    y: l
  });
}
const p2 = [":popover-open", ":modal"];
function Zf(t) {
  return p2.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function m2(t) {
  let {
    elements: e,
    rect: r,
    offsetParent: n,
    strategy: i
  } = t;
  const a = i === "fixed", s = Vr(n), o = e ? Zf(e.floating) : !1;
  if (n === s || o && a)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = vn(1);
  const c = vn(0), f = gr(n);
  if ((f || !f && !a) && ((Hi(n) !== "body" || rs(s)) && (u = bu(n)), gr(n))) {
    const h = Un(n);
    l = Ei(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - u.scrollLeft * l.x + c.x,
    y: r.y * l.y - u.scrollTop * l.y + c.y
  };
}
function v2(t) {
  return Array.from(t.getClientRects());
}
function Vg(t) {
  return Un(Vr(t)).left + bu(t).scrollLeft;
}
function y2(t) {
  const e = Vr(t), r = bu(t), n = t.ownerDocument.body, i = $t(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = $t(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + Vg(t);
  const o = -r.scrollTop;
  return lr(n).direction === "rtl" && (s += $t(e.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: s,
    y: o
  };
}
function g2(t, e) {
  const r = Vt(t), n = Vr(t), i = r.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, o = 0, u = 0;
  if (i) {
    a = i.width, s = i.height;
    const l = Qf();
    (!l || l && e === "fixed") && (o = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o,
    y: u
  };
}
function b2(t, e) {
  const r = Un(t, !0, e === "fixed"), n = r.top + t.clientTop, i = r.left + t.clientLeft, a = gr(t) ? Ei(t) : vn(1), s = t.clientWidth * a.x, o = t.clientHeight * a.y, u = i * a.x, l = n * a.y;
  return {
    width: s,
    height: o,
    x: u,
    y: l
  };
}
function Np(t, e, r) {
  let n;
  if (e === "viewport")
    n = g2(t, r);
  else if (e === "document")
    n = y2(Vr(t));
  else if (Nt(e))
    n = b2(e, r);
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
  return r === e || !Nt(r) || Di(r) ? !1 : lr(r).position === "fixed" || zg(r, e);
}
function w2(t, e) {
  const r = e.get(t);
  if (r)
    return r;
  let n = $a(t, [], !1).filter((o) => Nt(o) && Hi(o) !== "body"), i = null;
  const a = lr(t).position === "fixed";
  let s = a ? mn(t) : t;
  for (; Nt(s) && !Di(s); ) {
    const o = lr(s), u = Hf(s);
    !u && o.position === "fixed" && (i = null), (a ? !u && !i : !u && o.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || rs(s) && !u && zg(t, s)) ? n = n.filter((c) => c !== s) : i = o, s = mn(s);
  }
  return e.set(t, n), n;
}
function E2(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = t;
  const s = [...r === "clippingAncestors" ? Zf(e) ? [] : w2(e, this._c) : [].concat(r), n], o = s[0], u = s.reduce((l, c) => {
    const f = Np(e, c, i);
    return l.top = $t(f.top, l.top), l.right = rn(f.right, l.right), l.bottom = rn(f.bottom, l.bottom), l.left = $t(f.left, l.left), l;
  }, Np(e, o, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function x2(t) {
  const {
    width: e,
    height: r
  } = $g(t);
  return {
    width: e,
    height: r
  };
}
function T2(t, e, r) {
  const n = gr(e), i = Vr(e), a = r === "fixed", s = Un(t, !0, a, e);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = vn(0);
  if (n || !n && !a)
    if ((Hi(e) !== "body" || rs(i)) && (o = bu(e)), n) {
      const f = Un(e, !0, a, e);
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
function yl(t) {
  return lr(t).position === "static";
}
function Ap(t, e) {
  return !gr(t) || lr(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Wg(t, e) {
  const r = Vt(t);
  if (Zf(t))
    return r;
  if (!gr(t)) {
    let i = mn(t);
    for (; i && !Di(i); ) {
      if (Nt(i) && !yl(i))
        return i;
      i = mn(i);
    }
    return r;
  }
  let n = Ap(t, e);
  for (; n && ZS(n) && yl(n); )
    n = Ap(n, e);
  return n && Di(n) && yl(n) && !Hf(n) ? r : n || GS(t) || r;
}
const k2 = async function(t) {
  const e = this.getOffsetParent || Wg, r = this.getDimensions, n = await r(t.floating);
  return {
    reference: T2(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function _2(t) {
  return lr(t).direction === "rtl";
}
const S2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m2,
  getDocumentElement: Vr,
  getClippingRect: E2,
  getOffsetParent: Wg,
  getElementRects: k2,
  getClientRects: v2,
  getDimensions: x2,
  getScale: Ei,
  isElement: Nt,
  isRTL: _2
};
function O2(t, e) {
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
    const d = js(c), p = js(i.clientWidth - (l + f)), m = js(i.clientHeight - (c + h)), v = js(l), g = {
      rootMargin: -d + "px " + -p + "px " + -m + "px " + -v + "px",
      threshold: $t(0, rn(1, u)) || 1
    };
    let w = !0;
    function x(b) {
      const S = b[0].intersectionRatio;
      if (S !== u) {
        if (!w)
          return s();
        S ? s(!1, S) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...g,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, g);
    }
    r.observe(t);
  }
  return s(!0), a;
}
function C2(t, e, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, l = Yf(t), c = i || a ? [...l ? $a(l) : [], ...$a(e)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const f = l && o ? O2(l, r) : null;
  let h = -1, d = null;
  s && (d = new ResizeObserver((y) => {
    let [g] = y;
    g && g.target === l && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = d) == null || w.observe(e);
    })), r();
  }), l && !u && d.observe(l), d.observe(e));
  let p, m = u ? Un(t) : null;
  u && v();
  function v() {
    const y = Un(t);
    m && (y.x !== m.x || y.y !== m.y || y.width !== m.width || y.height !== m.height) && r(), m = y, p = requestAnimationFrame(v);
  }
  return r(), () => {
    var y;
    c.forEach((g) => {
      i && g.removeEventListener("scroll", r), a && g.removeEventListener("resize", r);
    }), f == null || f(), (y = d) == null || y.disconnect(), d = null, u && cancelAnimationFrame(p);
  };
}
const gl = wu, qg = l2, I2 = c2, N2 = o2, A2 = f2, D2 = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: S2,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return s2(t, e, {
    ...i,
    platform: a
  });
};
var to = typeof document < "u" ? Qo : Le;
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
function Dp(t, e) {
  const r = Ug(t);
  return Math.round(e * r) / r;
}
function Rp(t) {
  const e = fe.useRef(t);
  return to(() => {
    e.current = t;
  }), e;
}
function R2(t) {
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
  } = t, [c, f] = fe.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = fe.useState(n);
  So(h, n) || d(n);
  const [p, m] = fe.useState(null), [v, y] = fe.useState(null), g = fe.useCallback(($) => {
    $ !== S.current && (S.current = $, m($));
  }, []), w = fe.useCallback(($) => {
    $ !== N.current && (N.current = $, y($));
  }, []), x = a || p, b = s || v, S = fe.useRef(null), N = fe.useRef(null), I = fe.useRef(c), P = u != null, z = Rp(u), Q = Rp(i), D = fe.useCallback(() => {
    if (!S.current || !N.current)
      return;
    const $ = {
      placement: e,
      strategy: r,
      middleware: h
    };
    Q.current && ($.platform = Q.current), D2(S.current, N.current, $).then((ve) => {
      const j = {
        ...ve,
        isPositioned: !0
      };
      R.current && !So(I.current, j) && (I.current = j, Y0.flushSync(() => {
        f(j);
      }));
    });
  }, [h, e, r, Q]);
  to(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, f(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [l]);
  const R = fe.useRef(!1);
  to(() => (R.current = !0, () => {
    R.current = !1;
  }), []), to(() => {
    if (x && (S.current = x), b && (N.current = b), x && b) {
      if (z.current)
        return z.current(x, b, D);
      D();
    }
  }, [x, b, D, z, P]);
  const q = fe.useMemo(() => ({
    reference: S,
    floating: N,
    setReference: g,
    setFloating: w
  }), [g, w]), U = fe.useMemo(() => ({
    reference: x,
    floating: b
  }), [x, b]), M = fe.useMemo(() => {
    const $ = {
      position: r,
      left: 0,
      top: 0
    };
    if (!U.floating)
      return $;
    const ve = Dp(U.floating, c.x), j = Dp(U.floating, c.y);
    return o ? {
      ...$,
      transform: "translate(" + ve + "px, " + j + "px)",
      ...Ug(U.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ve,
      top: j
    };
  }, [r, o, U.floating, c.x, c.y]);
  return fe.useMemo(() => ({
    ...c,
    update: D,
    refs: q,
    elements: U,
    floatingStyles: M
  }), [c, D, q, U, M]);
}
const Bg = {
  ...fe
}, P2 = Bg["useInsertion"+"Effect"], M2 = P2 || ((t) => t());
function Hg(t) {
  const e = fe.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return M2(() => {
    e.current = t;
  }), fe.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var Mc = typeof document < "u" ? Qo : Le;
let Pp = !1, F2 = 0;
const Mp = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + F2++
);
function L2() {
  const [t, e] = fe.useState(() => Pp ? Mp() : void 0);
  return Mc(() => {
    t == null && e(Mp());
  }, []), fe.useEffect(() => {
    Pp = !0;
  }, []), t;
}
const $2 = Bg.useId, j2 = $2 || L2;
let ja;
process.env.NODE_ENV !== "production" && (ja = /* @__PURE__ */ new Set());
function V2() {
  for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  const i = "Floating UI: " + r.join(" ");
  if (!((t = ja) != null && t.has(i))) {
    var a;
    (a = ja) == null || a.add(i), console.warn(i);
  }
}
function z2() {
  for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  const i = "Floating UI: " + r.join(" ");
  if (!((t = ja) != null && t.has(i))) {
    var a;
    (a = ja) == null || a.add(i), console.error(i);
  }
}
function W2() {
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
const q2 = /* @__PURE__ */ fe.createContext(null), U2 = /* @__PURE__ */ fe.createContext(null), B2 = () => {
  var t;
  return ((t = fe.useContext(q2)) == null ? void 0 : t.id) || null;
}, H2 = () => fe.useContext(U2);
function Q2(t) {
  const {
    open: e = !1,
    onOpenChange: r,
    elements: n
  } = t, i = j2(), a = fe.useRef({}), [s] = fe.useState(() => W2()), o = B2() != null;
  if (process.env.NODE_ENV !== "production") {
    const d = n.reference;
    d && !Nt(d) && z2("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, l] = fe.useState(n.reference), c = Hg((d, p, m) => {
    a.current.openEvent = d ? p : void 0, s.emit("openchange", {
      open: d,
      event: p,
      reason: m,
      nested: o
    }), r == null || r(d, p, m);
  }), f = fe.useMemo(() => ({
    setPositionReference: l
  }), []), h = fe.useMemo(() => ({
    reference: u || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [u, n.reference, n.floating]);
  return fe.useMemo(() => ({
    dataRef: a,
    open: e,
    onOpenChange: c,
    elements: h,
    events: s,
    floatingId: i,
    refs: f
  }), [e, c, h, s, i, f]);
}
function Y2(t) {
  t === void 0 && (t = {});
  const {
    nodeId: e
  } = t, r = Q2({
    ...t,
    elements: {
      reference: null,
      floating: null,
      ...t.elements
    }
  }), n = t.rootContext || r, i = n.elements, [a, s] = fe.useState(null), [o, u] = fe.useState(null), c = (i == null ? void 0 : i.reference) || a, f = fe.useRef(null), h = H2();
  Mc(() => {
    c && (f.current = c);
  }, [c]);
  const d = R2({
    ...t,
    elements: {
      ...i,
      ...o && {
        reference: o
      }
    }
  }), p = fe.useCallback((w) => {
    const x = Nt(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    u(x), d.refs.setReference(x);
  }, [d.refs]), m = fe.useCallback((w) => {
    (Nt(w) || w === null) && (f.current = w, s(w)), (Nt(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !Nt(w)) && d.refs.setReference(w);
  }, [d.refs]), v = fe.useMemo(() => ({
    ...d.refs,
    setReference: m,
    setPositionReference: p,
    domReference: f
  }), [d.refs, m, p]), y = fe.useMemo(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), g = fe.useMemo(() => ({
    ...d,
    ...n,
    refs: v,
    elements: y,
    nodeId: e
  }), [d, v, y, e, n]);
  return Mc(() => {
    n.dataRef.current.floatingContext = g;
    const w = h == null ? void 0 : h.nodesRef.current.find((x) => x.id === e);
    w && (w.context = g);
  }), fe.useMemo(() => ({
    ...d,
    context: g,
    refs: v,
    elements: y
  }), [d, v, y, g]);
}
const Fp = "active", Lp = "selected";
function bl(t, e, r) {
  const n = /* @__PURE__ */ new Map(), i = r === "item";
  let a = t;
  if (i && t) {
    const {
      [Fp]: s,
      [Lp]: o,
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
      if (!(i && [Fp, Lp].includes(l)))
        if (l.indexOf("on") === 0) {
          if (n.has(l) || n.set(l, []), typeof c == "function") {
            var f;
            (f = n.get(l)) == null || f.push(c), s[l] = function() {
              for (var h, d = arguments.length, p = new Array(d), m = 0; m < d; m++)
                p[m] = arguments[m];
              return (h = n.get(l)) == null ? void 0 : h.map((v) => v(...p)).find((v) => v !== void 0);
            };
          }
        } else
          s[l] = c;
    }), s), {})
  };
}
function Z2(t) {
  t === void 0 && (t = []);
  const e = t, r = fe.useCallback(
    (a) => bl(a, t, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), n = fe.useCallback(
    (a) => bl(a, t, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), i = fe.useCallback(
    (a) => bl(a, t, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t.map((a) => a == null ? void 0 : a.item)
  );
  return fe.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: n,
    getItemProps: i
  }), [r, n, i]);
}
function $p(t, e) {
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
const G2 = (t) => ({
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
    if (process.env.NODE_ENV !== "production" && (e.placement.startsWith("bottom") || V2('`placement` side must be "bottom" when using the `inner`', "middleware.")), !d)
      return {};
    const p = {
      ...e,
      ...await qg(-d.offsetTop - h.clientTop - f.reference.height / 2 - d.offsetHeight / 2 - a).fn(e)
    }, m = (l == null ? void 0 : l.current) || h, v = await gl($p(p, m.scrollHeight), c), y = await gl(p, {
      ...c,
      elementContext: "reference"
    }), g = Math.max(0, v.top), w = p.y + g, x = Math.max(0, m.scrollHeight - g - Math.max(0, v.bottom));
    return m.style.maxHeight = x + "px", m.scrollTop = g, i && (m.offsetHeight < d.offsetHeight * Math.min(o, r.current.length - 1) - 1 || y.top >= -u || y.bottom >= -u ? ao(() => i(!0)) : ao(() => i(!1))), n && (n.current = await gl($p({
      ...p,
      y: w
    }, m.offsetHeight), c)), {
      y: w
    };
  }
});
function J2(t, e) {
  const {
    open: r,
    elements: n
  } = t, {
    enabled: i = !0,
    overflowRef: a,
    scrollRef: s,
    onChange: o
  } = e, u = Hg(o), l = fe.useRef(!1), c = fe.useRef(null), f = fe.useRef(null);
  return fe.useEffect(() => {
    if (!i)
      return;
    function h(p) {
      if (p.ctrlKey || !d || a.current == null)
        return;
      const m = p.deltaY, v = a.current.top >= -0.5, y = a.current.bottom >= -0.5, g = d.scrollHeight - d.clientHeight, w = m < 0 ? -1 : 1, x = m < 0 ? "max" : "min";
      d.scrollHeight <= d.clientHeight || (!v && m > 0 || !y && m < 0 ? (p.preventDefault(), ao(() => {
        u((b) => b + Math[x](m, g * w));
      })) : /firefox/i.test(JS()) && (d.scrollTop += m));
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
  }, [i, r, n.floating, a, s, u]), fe.useMemo(() => i ? {
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
let Gf = xt(null);
Gf.displayName = "PlacementContext";
function K2(t) {
  return Ke(() => t ? typeof t == "string" ? { to: t } : t : null, [t]);
}
function X2() {
  return ft(ss).setReference;
}
function eO() {
  let { getFloatingProps: t, slot: e } = ft(ss);
  return kt((...r) => Object.assign({}, t(...r), { "data-anchor": e.anchor }), [t, e]);
}
function tO(t = null) {
  t === !1 && (t = null), typeof t == "string" && (t = { to: t });
  let e = ft(Gf), r = Ke(() => t, [JSON.stringify(t, typeof HTMLElement < "u" ? (i, a) => a instanceof HTMLElement ? a.outerHTML : a : void 0)]);
  vt(() => {
    e == null || e(r ?? null);
  }, [e, r]);
  let n = ft(ss);
  return Ke(() => [n.setFloating, t ? n.styles : {}], [n.setFloating, t, n.styles]);
}
let jp = 4;
function rO({ children: t, enabled: e = !0 }) {
  let [r, n] = Je(null), [i, a] = Je(0), s = xe(null), [o, u] = Je(null);
  nO(o);
  let l = e && r !== null && o !== null, { to: c = "bottom", gap: f = 0, offset: h = 0, padding: d = 0, inner: p } = iO(r, o), [m, v = "center"] = c.split(" ");
  vt(() => {
    l && a(0);
  }, [l]);
  let { refs: y, floatingStyles: g, context: w } = Y2({ open: l, placement: m === "selection" ? v === "center" ? "bottom" : `bottom-${v}` : v === "center" ? `${m}` : `${m}-${v}`, strategy: "absolute", transform: !1, middleware: [qg({ mainAxis: m === "selection" ? 0 : f, crossAxis: h }), I2({ padding: d }), m !== "selection" && N2({ padding: d }), m === "selection" && p ? G2({ ...p, padding: d, overflowRef: s, offset: i, minItemsVisible: jp, referenceOverflowThreshold: d, onFallbackChange(Q) {
    var D, R;
    if (!Q)
      return;
    let q = w.elements.floating;
    if (!q)
      return;
    let U = parseFloat(getComputedStyle(q).scrollPaddingBottom) || 0, M = Math.min(jp, q.childElementCount), $ = 0, ve = 0;
    for (let j of (R = (D = w.elements.floating) == null ? void 0 : D.childNodes) != null ? R : [])
      if (j instanceof HTMLElement) {
        let O = j.offsetTop, F = O + j.clientHeight + U, ee = q.scrollTop, le = ee + q.clientHeight;
        if (O >= ee && F <= le)
          M--;
        else {
          ve = Math.max(0, Math.min(F, le) - Math.max(O, ee)), $ = j.clientHeight;
          break;
        }
      }
    M >= 1 && a((j) => {
      let O = $ * M - ve + U;
      return j >= O ? j : O;
    });
  } }) : null, A2({ padding: d, apply({ availableWidth: Q, availableHeight: D, elements: R }) {
    Object.assign(R.floating.style, { overflow: "auto", maxWidth: `${Q}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${D}px)` });
  } })].filter(Boolean), whileElementsMounted: C2 }), [x = m, b = v] = w.placement.split("-");
  m === "selection" && (x = "selection");
  let S = Ke(() => ({ anchor: [x, b].filter(Boolean).join(" ") }), [x, b]), N = J2(w, { overflowRef: s, onChange: a }), { getReferenceProps: I, getFloatingProps: P } = Z2([N]), z = Pe((Q) => {
    u(Q), y.setFloating(Q);
  });
  return fe.createElement(Gf.Provider, { value: n }, fe.createElement(ss.Provider, { value: { setFloating: z, setReference: y.setReference, styles: g, getReferenceProps: I, getFloatingProps: P, slot: S } }, t));
}
function nO(t) {
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
function iO(t, e) {
  var r, n, i;
  let a = wl((r = t == null ? void 0 : t.gap) != null ? r : "var(--anchor-gap, 0)", e), s = wl((n = t == null ? void 0 : t.offset) != null ? n : "var(--anchor-offset, 0)", e), o = wl((i = t == null ? void 0 : t.padding) != null ? i : "var(--anchor-padding, 0)", e);
  return { ...t, gap: a, offset: s, padding: o };
}
function wl(t, e, r = void 0) {
  let n = yu(), i = Pe((u, l) => {
    if (u == null)
      return [r, null];
    if (typeof u == "number")
      return [u, null];
    if (typeof u == "string") {
      if (!l)
        return [r, null];
      let c = Vp(u, l);
      return [c, (f) => {
        let h = Qg(u);
        {
          let d = h.map((p) => window.getComputedStyle(l).getPropertyValue(p));
          n.requestAnimationFrame(function p() {
            n.nextFrame(p);
            let m = !1;
            for (let [y, g] of h.entries()) {
              let w = window.getComputedStyle(l).getPropertyValue(g);
              if (d[y] !== w) {
                d[y] = w, m = !0;
                break;
              }
            }
            if (!m)
              return;
            let v = Vp(u, l);
            c !== v && (f(v), c = v);
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
function Qg(t) {
  let e = /var\((.*)\)/.exec(t);
  if (e) {
    let r = e[1].indexOf(",");
    if (r === -1)
      return [e[1]];
    let n = e[1].slice(0, r).trim(), i = e[1].slice(r + 1).trim();
    return i ? [n, ...Qg(i)] : [n];
  }
  return [];
}
function Vp(t, e) {
  let r = document.createElement("div");
  e.appendChild(r), r.style.setProperty("margin-top", "0px", "important"), r.style.setProperty("margin-top", t, "important");
  let n = parseFloat(window.getComputedStyle(r).marginTop) || 0;
  return e.removeChild(r), n;
}
let Jf = xt(null);
Jf.displayName = "OpenClosedContext";
var Ct = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Ct || {});
function Eu() {
  return ft(Jf);
}
function Yg({ value: t, children: e }) {
  return H.createElement(Jf.Provider, { value: t }, e);
}
function aO(t) {
  let e = Pe(t), r = xe(!1);
  Le(() => (r.current = !1, () => {
    r.current = !0, kg(() => {
      r.current && e();
    });
  }), [e]);
}
function sO() {
  let t = typeof document > "u";
  return "useSyncExternalStore" in fe ? ((e) => e.useSyncExternalStore)(fe)(() => () => {
  }, () => !1, () => !t) : !1;
}
function Kf() {
  let t = sO(), [e, r] = fe.useState(Ln.isHandoffComplete);
  return e && Ln.isHandoffComplete === !1 && r(!1), fe.useEffect(() => {
    e !== !0 && r(!0);
  }, [e]), fe.useEffect(() => Ln.handoff(), []), t ? !1 : e;
}
let oO = xt(!1);
function uO() {
  return ft(oO);
}
function lO(t) {
  let e = uO(), r = ft(Gg), n = Bi(t), [i, a] = Je(() => {
    var s;
    if (!e && r !== null)
      return (s = r.current) != null ? s : null;
    if (Ln.isServer)
      return null;
    let o = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (o)
      return o;
    if (n === null)
      return null;
    let u = n.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(u);
  });
  return Le(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), Le(() => {
    e || r !== null && a(r.current);
  }, [r, a, e]), i;
}
let Zg = Cr, cO = Jt(function(t, e) {
  let r = t, n = xe(null), i = ur(Cg((c) => {
    n.current = c;
  }), e), a = Bi(n), s = lO(n), [o] = Je(() => {
    var c;
    return Ln.isServer ? null : (c = a == null ? void 0 : a.createElement("div")) != null ? c : null;
  }), u = ft(Fc), l = Kf();
  return vt(() => {
    !s || !o || s.contains(o) || (o.setAttribute("data-headlessui-portal", ""), s.appendChild(o));
  }, [s, o]), vt(() => {
    if (o && u)
      return u.register(o);
  }, [u, o]), aO(() => {
    var c;
    !s || !o || (o instanceof Node && s.contains(o) && s.removeChild(o), s.childNodes.length <= 0 && ((c = s.parentElement) == null || c.removeChild(s)));
  }), l ? !s || !o ? null : Z0(fr({ ourProps: { ref: i }, theirProps: r, slot: {}, defaultTag: Zg, name: "Portal" }), o) : null;
});
function fO(t, e) {
  let r = ur(e), { enabled: n = !0, ...i } = t;
  return n ? H.createElement(cO, { ...i, ref: r }) : fr({ ourProps: { ref: r }, theirProps: i, slot: {}, defaultTag: Zg, name: "Portal" });
}
let dO = Cr, Gg = xt(null);
function hO(t, e) {
  let { target: r, ...n } = t, i = { ref: ur(e) };
  return H.createElement(Gg.Provider, { value: r }, fr({ ourProps: i, theirProps: n, defaultTag: dO, name: "Popover.Group" }));
}
let Fc = xt(null);
function pO() {
  let t = ft(Fc), e = xe([]), r = Pe((a) => (e.current.push(a), t && t.register(a), () => n(a))), n = Pe((a) => {
    let s = e.current.indexOf(a);
    s !== -1 && e.current.splice(s, 1), t && t.unregister(a);
  }), i = Ke(() => ({ register: r, unregister: n, portals: e }), [r, n, e]);
  return [e, Ke(() => function({ children: a }) {
    return H.createElement(Fc.Provider, { value: i }, a);
  }, [i])];
}
let mO = Jt(fO), vO = Jt(hO), yO = Object.assign(mO, { Group: vO });
function gO({ defaultContainers: t = [], portals: e, mainTreeNodeRef: r } = {}) {
  var n;
  let i = xe((n = r == null ? void 0 : r.current) != null ? n : null), a = Bi(i), s = Pe(() => {
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
    return r != null ? null : H.createElement(La, { features: Ai.Hidden, ref: i });
  }, [i, r]) };
}
function bO() {
  let t = xe(null);
  return { mainTreeNodeRef: t, MainTreeNode: Ke(() => function() {
    return H.createElement(La, { features: Ai.Hidden, ref: t });
  }, [t]) };
}
function Xf() {
  let t = xe(!1);
  return vt(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
var Sr = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Sr || {});
function Jg() {
  let t = xe(0);
  return Dg("keydown", (e) => {
    e.key === "Tab" && (t.current = e.shiftKey ? 1 : 0);
  }, !0), t;
}
var wO = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(wO || {}), EO = ((t) => (t[t.TogglePopover = 0] = "TogglePopover", t[t.ClosePopover = 1] = "ClosePopover", t[t.SetButton = 2] = "SetButton", t[t.SetButtonId = 3] = "SetButtonId", t[t.SetPanel = 4] = "SetPanel", t[t.SetPanelId = 5] = "SetPanelId", t))(EO || {});
let xO = { 0: (t) => ({ ...t, popoverState: mt(t.popoverState, { 0: 1, 1: 0 }), __demoMode: !1 }), 1(t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1, __demoMode: !1 };
}, 2(t, e) {
  return t.button === e.button ? t : { ...t, button: e.button };
}, 3(t, e) {
  return t.buttonId === e.buttonId ? t : { ...t, buttonId: e.buttonId };
}, 4(t, e) {
  return t.panel === e.panel ? t : { ...t, panel: e.panel };
}, 5(t, e) {
  return t.panelId === e.panelId ? t : { ...t, panelId: e.panelId };
} }, ed = xt(null);
ed.displayName = "PopoverContext";
function xu(t) {
  let e = ft(ed);
  if (e === null) {
    let r = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, xu), r;
  }
  return e;
}
let Tu = xt(null);
Tu.displayName = "PopoverAPIContext";
function td(t) {
  let e = ft(Tu);
  if (e === null) {
    let r = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, td), r;
  }
  return e;
}
let rd = xt(null);
rd.displayName = "PopoverGroupContext";
function Kg() {
  return ft(rd);
}
let ku = xt(null);
ku.displayName = "PopoverPanelContext";
function TO() {
  return ft(ku);
}
function kO(t, e) {
  return mt(e.type, xO, t, e);
}
let _O = "div";
function SO(t, e) {
  var r;
  let { __demoMode: n = !1, ...i } = t, a = xe(null), s = ur(e, Cg((M) => {
    a.current = M;
  })), o = xe([]), u = Gc(kO, { __demoMode: n, popoverState: n ? 0 : 1, buttons: o, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: yd(), afterPanelSentinel: yd() }), [{ popoverState: l, button: c, buttonId: f, panel: h, panelId: d, beforePanelSentinel: p, afterPanelSentinel: m }, v] = u, y = Bi((r = a.current) != null ? r : c), g = Ke(() => {
    if (!c || !h)
      return !1;
    for (let ee of document.querySelectorAll("body > *"))
      if (Number(ee == null ? void 0 : ee.contains(c)) ^ Number(ee == null ? void 0 : ee.contains(h)))
        return !0;
    let M = gu(), $ = M.indexOf(c), ve = ($ + M.length - 1) % M.length, j = ($ + 1) % M.length, O = M[ve], F = M[j];
    return !h.contains(O) && !h.contains(F);
  }, [c, h]), w = Zt(f), x = Zt(d), b = Ke(() => ({ buttonId: w, panelId: x, close: () => v({ type: 1 }) }), [w, x, v]), S = Kg(), N = S == null ? void 0 : S.registerPopover, I = Pe(() => {
    var M;
    return (M = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? M : (y == null ? void 0 : y.activeElement) && ((c == null ? void 0 : c.contains(y.activeElement)) || (h == null ? void 0 : h.contains(y.activeElement)));
  });
  Le(() => N == null ? void 0 : N(b), [N, b]);
  let [P, z] = pO(), Q = gO({ mainTreeNodeRef: S == null ? void 0 : S.mainTreeNodeRef, portals: P, defaultContainers: [c, h] });
  jS(y == null ? void 0 : y.defaultView, "focus", (M) => {
    var $, ve, j, O;
    M.target !== window && M.target instanceof HTMLElement && l === 0 && (I() || c && h && (Q.contains(M.target) || (ve = ($ = p.current) == null ? void 0 : $.contains) != null && ve.call($, M.target) || (O = (j = m.current) == null ? void 0 : j.contains) != null && O.call(j, M.target) || v({ type: 1 })));
  }, !0), $S(Q.resolveContainers, (M, $) => {
    v({ type: 1 }), Ng($, Bf.Loose) || (M.preventDefault(), c == null || c.focus());
  }, l === 0);
  let D = Pe((M) => {
    v({ type: 1 });
    let $ = M ? M instanceof HTMLElement ? M : "current" in M && M.current instanceof HTMLElement ? M.current : c : c;
    $ == null || $.focus();
  }), R = Ke(() => ({ close: D, isPortalled: g }), [D, g]), q = Ke(() => ({ open: l === 0, close: D }), [l, D]), U = { ref: s };
  return H.createElement(rO, null, H.createElement(ku.Provider, { value: null }, H.createElement(ed.Provider, { value: u }, H.createElement(Tu.Provider, { value: R }, H.createElement(SS, { value: D }, H.createElement(Yg, { value: mt(l, { 0: Ct.Open, 1: Ct.Closed }) }, H.createElement(z, null, fr({ ourProps: U, theirProps: i, slot: q, defaultTag: _O, name: "Popover" }), H.createElement(Q.MainTreeNode, null))))))));
}
let OO = "button";
function CO(t, e) {
  let r = io(), { id: n = `headlessui-popover-button-${r}`, disabled: i = !1, autoFocus: a = !1, ...s } = t, [o, u] = xu("Popover.Button"), { isPortalled: l } = td("Popover.Button"), c = xe(null), f = `headlessui-focus-sentinel-${io()}`, h = Kg(), d = h == null ? void 0 : h.closeOthers, p = TO() !== null;
  Le(() => {
    if (!p)
      return u({ type: 3, buttonId: n }), () => {
        u({ type: 3, buttonId: null });
      };
  }, [p, n, u]);
  let [m] = Je(() => Symbol()), v = ur(c, e, X2(), p ? null : (j) => {
    if (j)
      o.buttons.current.push(m);
    else {
      let O = o.buttons.current.indexOf(m);
      O !== -1 && o.buttons.current.splice(O, 1);
    }
    o.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), j && u({ type: 2, button: j });
  }), y = ur(c, e), g = Bi(c), w = Pe((j) => {
    var O, F, ee;
    if (p) {
      if (o.popoverState === 1)
        return;
      switch (j.key) {
        case Kr.Space:
        case Kr.Enter:
          j.preventDefault(), (F = (O = j.target).click) == null || F.call(O), u({ type: 1 }), (ee = o.button) == null || ee.focus();
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
          if (!c.current || g != null && g.activeElement && !c.current.contains(g.activeElement))
            return;
          j.preventDefault(), j.stopPropagation(), u({ type: 1 });
          break;
      }
  }), x = Pe((j) => {
    p || j.key === Kr.Space && j.preventDefault();
  }), b = Pe((j) => {
    var O, F;
    Sg(j.currentTarget) || i || (p ? (u({ type: 1 }), (O = o.button) == null || O.focus()) : (j.preventDefault(), j.stopPropagation(), o.popoverState === 1 && (d == null || d(o.buttonId)), u({ type: 0 }), (F = o.button) == null || F.focus()));
  }), S = Pe((j) => {
    j.preventDefault(), j.stopPropagation();
  }), { isFocusVisible: N, focusProps: I } = hS({ autoFocus: a }), { isHovered: P, hoverProps: z } = dS({ isDisabled: i }), { pressed: Q, pressProps: D } = bS({ disabled: i }), R = o.popoverState === 0, q = Ke(() => ({ open: R, active: Q || R, disabled: i, hover: P, focus: N, autofocus: a }), [R, P, N, Q, i, a]), U = VS(t, c), M = Dc(p ? { ref: y, type: U, onKeyDown: w, onClick: b, disabled: i || void 0, autoFocus: a } : { ref: v, id: o.buttonId, type: U, "aria-expanded": o.popoverState === 0, "aria-controls": o.panel ? o.panelId : void 0, disabled: i || void 0, autoFocus: a, onKeyDown: w, onKeyUp: x, onClick: b, onMouseDown: S }, I, z, D), $ = Jg(), ve = Pe(() => {
    let j = o.panel;
    if (!j)
      return;
    function O() {
      mt($.current, { [Sr.Forwards]: () => Rn(j, _r.First), [Sr.Backwards]: () => Rn(j, _r.Last) }) === xo.Error && Rn(gu().filter((F) => F.dataset.headlessuiFocusGuard !== "true"), mt($.current, { [Sr.Forwards]: _r.Next, [Sr.Backwards]: _r.Previous }), { relativeTo: o.button });
    }
    O();
  });
  return H.createElement(H.Fragment, null, fr({ ourProps: M, theirProps: s, slot: q, defaultTag: OO, name: "Popover.Button" }), R && !p && l && H.createElement(La, { id: f, features: Ai.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: ve }));
}
let IO = "div", NO = Ni.RenderStrategy | Ni.Static;
function AO(t, e) {
  let r = io(), { id: n = `headlessui-popover-overlay-${r}`, ...i } = t, [{ popoverState: a }, s] = xu("Popover.Overlay"), o = ur(e), u = Eu(), l = u !== null ? (u & Ct.Open) === Ct.Open : a === 0, c = Pe((h) => {
    if (Sg(h.currentTarget))
      return h.preventDefault();
    s({ type: 1 });
  }), f = Ke(() => ({ open: a === 0 }), [a]);
  return fr({ ourProps: { ref: o, id: n, "aria-hidden": !0, onClick: c }, theirProps: i, slot: f, defaultTag: IO, features: NO, visible: l, name: "Popover.Overlay" });
}
let DO = "div", RO = Ni.RenderStrategy | Ni.Static;
function PO(t, e) {
  let r = io(), { id: n = `headlessui-popover-panel-${r}`, focus: i = !1, anchor: a, portal: s = !1, modal: o = !1, ...u } = t, [l, c] = xu("Popover.Panel"), { close: f, isPortalled: h } = td("Popover.Panel"), d = `headlessui-focus-sentinel-before-${r}`, p = `headlessui-focus-sentinel-after-${r}`, m = xe(null), v = K2(a), [y, g] = tO(v), w = eO();
  v && (s = !0);
  let x = ur(m, e, v ? y : null, (U) => {
    c({ type: 4, panel: U });
  }), b = Bi(m), S = wS();
  vt(() => (c({ type: 5, panelId: n }), () => {
    c({ type: 5, panelId: null });
  }), [n, c]);
  let N = Eu(), I = N !== null ? (N & Ct.Open) === Ct.Open : l.popoverState === 0;
  Ig(l.button, () => c({ type: 1 }), I), YS(b, l.__demoMode ? !1 : o && I);
  let P = Pe((U) => {
    var M;
    switch (U.key) {
      case Kr.Escape:
        if (l.popoverState !== 0 || !m.current || b != null && b.activeElement && !m.current.contains(b.activeElement))
          return;
        U.preventDefault(), U.stopPropagation(), c({ type: 1 }), (M = l.button) == null || M.focus();
        break;
    }
  });
  Le(() => {
    var U;
    t.static || l.popoverState === 1 && ((U = t.unmount) == null || U) && c({ type: 4, panel: null });
  }, [l.popoverState, t.unmount, t.static, c]), Le(() => {
    if (l.__demoMode || !i || l.popoverState !== 0 || !m.current)
      return;
    let U = b == null ? void 0 : b.activeElement;
    m.current.contains(U) || Rn(m.current, _r.First);
  }, [l.__demoMode, i, m, l.popoverState]);
  let z = Ke(() => ({ open: l.popoverState === 0, close: f }), [l, f]), Q = Dc(v ? w() : {}, { ref: x, id: n, onKeyDown: P, onBlur: i && l.popoverState === 0 ? (U) => {
    var M, $, ve, j, O;
    let F = U.relatedTarget;
    F && m.current && ((M = m.current) != null && M.contains(F) || (c({ type: 1 }), ((ve = ($ = l.beforePanelSentinel.current) == null ? void 0 : $.contains) != null && ve.call($, F) || (O = (j = l.afterPanelSentinel.current) == null ? void 0 : j.contains) != null && O.call(j, F)) && F.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1, style: { ...g, "--button-width": CS(l.button, !0).width } }), D = Jg(), R = Pe(() => {
    let U = m.current;
    if (!U)
      return;
    function M() {
      mt(D.current, { [Sr.Forwards]: () => {
        var $;
        Rn(U, _r.First) === xo.Error && (($ = l.afterPanelSentinel.current) == null || $.focus());
      }, [Sr.Backwards]: () => {
        var $;
        ($ = l.button) == null || $.focus({ preventScroll: !0 });
      } });
    }
    M();
  }), q = Pe(() => {
    let U = m.current;
    if (!U)
      return;
    function M() {
      mt(D.current, { [Sr.Forwards]: () => {
        var $;
        if (!l.button)
          return;
        let ve = gu(), j = ve.indexOf(l.button), O = ve.slice(0, j + 1), F = [...ve.slice(j + 1), ...O];
        for (let ee of F.slice())
          if (ee.dataset.headlessuiFocusGuard === "true" || ($ = l.panel) != null && $.contains(ee)) {
            let le = F.indexOf(ee);
            le !== -1 && F.splice(le, 1);
          }
        Rn(F, _r.First, { sorted: !1 });
      }, [Sr.Backwards]: () => {
        var $;
        Rn(U, _r.Previous) === xo.Error && (($ = l.button) == null || $.focus());
      } });
    }
    M();
  });
  return H.createElement(ku.Provider, { value: n }, H.createElement(Tu.Provider, { value: { close: f, isPortalled: h } }, H.createElement(yO, { enabled: s ? t.static || I : !1 }, I && h && H.createElement(La, { id: d, ref: l.beforePanelSentinel, features: Ai.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: R }), fr({ mergeRefs: S, ourProps: Q, theirProps: u, slot: z, defaultTag: DO, features: RO, visible: I, name: "Popover.Panel" }), I && h && H.createElement(La, { id: p, ref: l.afterPanelSentinel, features: Ai.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: q }))));
}
let MO = "div";
function FO(t, e) {
  let r = xe(null), n = ur(r, e), [i, a] = Je([]), s = bO(), o = Pe((m) => {
    a((v) => {
      let y = v.indexOf(m);
      if (y !== -1) {
        let g = v.slice();
        return g.splice(y, 1), g;
      }
      return v;
    });
  }), u = Pe((m) => (a((v) => [...v, m]), () => o(m))), l = Pe(() => {
    var m;
    let v = vu(r);
    if (!v)
      return !1;
    let y = v.activeElement;
    return (m = r.current) != null && m.contains(y) ? !0 : i.some((g) => {
      var w, x;
      return ((w = v.getElementById(g.buttonId.current)) == null ? void 0 : w.contains(y)) || ((x = v.getElementById(g.panelId.current)) == null ? void 0 : x.contains(y));
    });
  }), c = Pe((m) => {
    for (let v of i)
      v.buttonId.current !== m && v.close();
  }), f = Ke(() => ({ registerPopover: u, unregisterPopover: o, isFocusWithinPopoverGroup: l, closeOthers: c, mainTreeNodeRef: s.mainTreeNodeRef }), [u, o, l, c, s.mainTreeNodeRef]), h = Ke(() => ({}), []), d = t, p = { ref: n };
  return H.createElement(rd.Provider, { value: f }, fr({ ourProps: p, theirProps: d, slot: h, defaultTag: MO, name: "Popover.Group" }), H.createElement(s.MainTreeNode, null));
}
let LO = Jt(SO), Xg = Jt(CO), $O = Jt(AO), e0 = Jt(PO), jO = Jt(FO), VO = Object.assign(LO, { Button: Xg, Overlay: $O, Panel: e0, Group: jO });
function zO(t = 0) {
  let [e, r] = Je(t), n = Xf(), i = kt((u) => {
    n.current && r((l) => l | u);
  }, [e, n]), a = kt((u) => !!(e & u), [e]), s = kt((u) => {
    n.current && r((l) => l & ~u);
  }, [r, n]), o = kt((u) => {
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
function El(t, ...e) {
  t && e.length > 0 && t.classList.add(...e);
}
function xl(t, ...e) {
  t && e.length > 0 && t.classList.remove(...e);
}
function WO(t, e) {
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
function qO(t, { direction: e, done: r, classes: n, inFlight: i }) {
  let a = Yn(), s = r !== void 0 ? t0(r) : () => {
  };
  e === "enter" && (t.removeAttribute("hidden"), t.style.display = "");
  let o = mt(e, { enter: () => n.enter, leave: () => n.leave }), u = mt(e, { enter: () => n.enterTo, leave: () => n.leaveTo }), l = mt(e, { enter: () => n.enterFrom, leave: () => n.leaveFrom });
  return UO(t, { prepare() {
    xl(t, ...n.base, ...n.enter, ...n.enterTo, ...n.enterFrom, ...n.leave, ...n.leaveFrom, ...n.leaveTo, ...n.entered), El(t, ...n.base, ...o, ...l);
  }, inFlight: i }), i && (i.current = !0), a.nextFrame(() => {
    a.add(WO(t, () => (xl(t, ...n.base, ...o), El(t, ...n.base, ...n.entered, ...u), i && (i.current = !1), s()))), xl(t, ...n.base, ...o, ...l), El(t, ...n.base, ...o, ...u);
  }), a.dispose;
}
function UO(t, { inFlight: e, prepare: r }) {
  if (e != null && e.current) {
    r();
    return;
  }
  let n = t.style.transition;
  t.style.transition = "none", r(), t.offsetHeight, t.style.transition = n;
}
function BO({ container: t, direction: e, classes: r, onStart: n, onStop: i }) {
  let a = Xf(), s = yu(), o = xe(!1);
  vt(() => {
    if (e === "idle" || !a.current)
      return;
    n.current(e);
    let u = t.current;
    return u ? s.add(qO(u, { direction: e, classes: r.current, inFlight: o, done() {
      i.current(e);
    } })) : i.current(e), s.dispose;
  }, [e]);
}
function Hr(t = "") {
  return t.split(/\s+/).filter((e) => e.length > 1);
}
function r0(t) {
  var e;
  return !!(t.enter || t.enterFrom || t.enterTo || t.leave || t.leaveFrom || t.leaveTo) || ((e = t.as) != null ? e : i0) !== Cr || H.Children.count(t.children) === 1;
}
let _u = xt(null);
_u.displayName = "TransitionContext";
var HO = ((t) => (t.Visible = "visible", t.Hidden = "hidden", t))(HO || {});
function QO() {
  let t = ft(_u);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
function YO() {
  let t = ft(Su);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
let Su = xt(null);
Su.displayName = "NestingContext";
function Ou(t) {
  return "children" in t ? Ou(t.children) : t.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function n0(t, e) {
  let r = Zt(t), n = xe([]), i = Xf(), a = yu(), s = Pe((d, p = tn.Hidden) => {
    let m = n.current.findIndex(({ el: v }) => v === d);
    m !== -1 && (mt(p, { [tn.Unmount]() {
      n.current.splice(m, 1);
    }, [tn.Hidden]() {
      n.current[m].state = "hidden";
    } }), a.microTask(() => {
      var v;
      !Ou(n) && i.current && ((v = r.current) == null || v.call(r));
    }));
  }), o = Pe((d) => {
    let p = n.current.find(({ el: m }) => m === d);
    return p ? p.state !== "visible" && (p.state = "visible") : n.current.push({ el: d, state: "visible" }), () => s(d, tn.Unmount);
  }), u = xe([]), l = xe(Promise.resolve()), c = xe({ enter: [], leave: [], idle: [] }), f = Pe((d, p, m) => {
    u.current.splice(0), e && (e.chains.current[p] = e.chains.current[p].filter(([v]) => v !== d)), e == null || e.chains.current[p].push([d, new Promise((v) => {
      u.current.push(v);
    })]), e == null || e.chains.current[p].push([d, new Promise((v) => {
      Promise.all(c.current[p].map(([y, g]) => g)).then(() => v());
    })]), p === "enter" ? l.current = l.current.then(() => e == null ? void 0 : e.wait.current).then(() => m(p)) : m(p);
  }), h = Pe((d, p, m) => {
    Promise.all(c.current[p].splice(0).map(([v, y]) => y)).then(() => {
      var v;
      (v = u.current.shift()) == null || v();
    }).then(() => m(p));
  });
  return Ke(() => ({ children: n, register: o, unregister: s, onStart: f, onStop: h, wait: l, chains: c }), [o, s, n, f, h, c, l]);
}
let i0 = Cr, a0 = Ni.RenderStrategy;
function ZO(t, e) {
  var r, n, i;
  let { beforeEnter: a, afterEnter: s, beforeLeave: o, afterLeave: u, enter: l, enterFrom: c, enterTo: f, entered: h, leave: d, leaveFrom: p, leaveTo: m, ...v } = t, y = xe(null), g = r0(t), w = ur(...g ? [y, e] : e === null ? [] : [e]), x = (r = v.unmount) == null || r ? tn.Unmount : tn.Hidden, { show: b, appear: S, initial: N } = QO(), [I, P] = Je(b ? "visible" : "hidden"), z = YO(), { register: Q, unregister: D } = z;
  vt(() => Q(y), [Q, y]), vt(() => {
    if (x === tn.Hidden && y.current) {
      if (b && I !== "visible") {
        P("visible");
        return;
      }
      return mt(I, { hidden: () => D(y), visible: () => Q(y) });
    }
  }, [I, y, Q, D, b, x]);
  let R = Zt({ base: Hr(v.className), enter: Hr(l), enterFrom: Hr(c), enterTo: Hr(f), entered: Hr(h), leave: Hr(d), leaveFrom: Hr(p), leaveTo: Hr(m) }), q = Zt({ beforeEnter: a, afterEnter: s, beforeLeave: o, afterLeave: u }), U = Kf();
  vt(() => {
    if (g && U && I === "visible" && y.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [y, I, U, g]);
  let M = N && !S, $ = S && b && N, ve = $ ? "enter" : !U || M ? "idle" : b ? "enter" : "leave", j = zO(0), O = Pe((he) => mt(he, { enter: () => {
    var de, me;
    j.addFlag(Ct.Opening), (me = (de = q.current).beforeEnter) == null || me.call(de);
  }, leave: () => {
    var de, me;
    j.addFlag(Ct.Closing), (me = (de = q.current).beforeLeave) == null || me.call(de);
  }, idle: () => {
  } })), F = Pe((he) => mt(he, { enter: () => {
    var de, me;
    j.removeFlag(Ct.Opening), (me = (de = q.current).afterEnter) == null || me.call(de);
  }, leave: () => {
    var de, me;
    j.removeFlag(Ct.Closing), (me = (de = q.current).afterLeave) == null || me.call(de);
  }, idle: () => {
  } })), ee = xe(!1), le = n0(() => {
    ee.current || (P("hidden"), D(y));
  }, z);
  BO({ container: y, classes: R, direction: ve, onStart: Zt((he) => {
    ee.current = !0, le.onStart(y, he, O);
  }), onStop: Zt((he) => {
    ee.current = !1, le.onStop(y, he, F), he === "leave" && !Ou(le) && (P("hidden"), D(y));
  }) });
  let oe = v, _e = { ref: w };
  return $ ? oe = { ...oe, className: wa(v.className, ...R.current.enter, ...R.current.enterFrom) } : ee.current ? (oe.className = wa(v.className, (n = y.current) == null ? void 0 : n.className), oe.className === "" && delete oe.className) : (oe.className = wa(v.className, (i = y.current) == null ? void 0 : i.className, ...mt(ve, { enter: [...R.current.enterTo, ...R.current.entered], leave: R.current.leaveTo, idle: [] })), oe.className === "" && delete oe.className), H.createElement(Su.Provider, { value: le }, H.createElement(Yg, { value: mt(I, { visible: Ct.Open, hidden: Ct.Closed }) | j.flags }, fr({ ourProps: _e, theirProps: oe, defaultTag: i0, features: a0, visible: I === "visible", name: "Transition.Child" })));
}
function GO(t, e) {
  let { show: r, appear: n = !1, unmount: i = !0, ...a } = t, s = xe(null), o = r0(t), u = ur(...o ? [s, e] : e === null ? [] : [e]);
  Kf();
  let l = Eu();
  if (r === void 0 && l !== null && (r = (l & Ct.Open) === Ct.Open), r === void 0)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, f] = Je(r ? "visible" : "hidden"), h = n0(() => {
    r || f("hidden");
  }), [d, p] = Je(!0), m = xe([r]);
  vt(() => {
    d !== !1 && m.current[m.current.length - 1] !== r && (m.current.push(r), p(!1));
  }, [m, r]);
  let v = Ke(() => ({ show: r, appear: n, initial: d }), [r, n, d]);
  Ig(s, () => f("hidden")), vt(() => {
    r ? f("visible") : !Ou(h) && s.current !== null && f("hidden");
  }, [r, h]);
  let y = { unmount: i }, g = Pe(() => {
    var x;
    d && p(!1), (x = t.beforeEnter) == null || x.call(t);
  }), w = Pe(() => {
    var x;
    d && p(!1), (x = t.beforeLeave) == null || x.call(t);
  });
  return H.createElement(Su.Provider, { value: h }, H.createElement(_u.Provider, { value: v }, fr({ ourProps: { ...y, as: Cr, children: H.createElement(s0, { ref: u, ...y, ...a, beforeEnter: g, beforeLeave: w }) }, theirProps: {}, defaultTag: Cr, features: a0, visible: c === "visible", name: "Transition" })));
}
function JO(t, e) {
  let r = ft(_u) !== null, n = Eu() !== null;
  return H.createElement(H.Fragment, null, !r && n ? H.createElement(Lc, { ref: e, ...t }) : H.createElement(s0, { ref: e, ...t }));
}
let Lc = Jt(GO), s0 = Jt(ZO), KO = Jt(JO), XO = Object.assign(Lc, { Child: KO, Root: Lc });
var $c = { exports: {} }, Vs = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zp;
function eC() {
  if (zp)
    return je;
  zp = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, v = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, g = t ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
        case e:
          switch (b = b.type, b) {
            case u:
            case l:
            case n:
            case a:
            case i:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case o:
                case c:
                case p:
                case d:
                case s:
                  return b;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function x(b) {
    return w(b) === l;
  }
  return je.AsyncMode = u, je.ConcurrentMode = l, je.ContextConsumer = o, je.ContextProvider = s, je.Element = e, je.ForwardRef = c, je.Fragment = n, je.Lazy = p, je.Memo = d, je.Portal = r, je.Profiler = a, je.StrictMode = i, je.Suspense = f, je.isAsyncMode = function(b) {
    return x(b) || w(b) === u;
  }, je.isConcurrentMode = x, je.isContextConsumer = function(b) {
    return w(b) === o;
  }, je.isContextProvider = function(b) {
    return w(b) === s;
  }, je.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, je.isForwardRef = function(b) {
    return w(b) === c;
  }, je.isFragment = function(b) {
    return w(b) === n;
  }, je.isLazy = function(b) {
    return w(b) === p;
  }, je.isMemo = function(b) {
    return w(b) === d;
  }, je.isPortal = function(b) {
    return w(b) === r;
  }, je.isProfiler = function(b) {
    return w(b) === a;
  }, je.isStrictMode = function(b) {
    return w(b) === i;
  }, je.isSuspense = function(b) {
    return w(b) === f;
  }, je.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === l || b === a || b === i || b === f || b === h || typeof b == "object" && b !== null && (b.$$typeof === p || b.$$typeof === d || b.$$typeof === s || b.$$typeof === o || b.$$typeof === c || b.$$typeof === v || b.$$typeof === y || b.$$typeof === g || b.$$typeof === m);
  }, je.typeOf = w, je;
}
var Ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function tC() {
  return Wp || (Wp = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, v = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, g = t ? Symbol.for("react.scope") : 60119;
    function w(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === n || Z === l || Z === a || Z === i || Z === f || Z === h || typeof Z == "object" && Z !== null && (Z.$$typeof === p || Z.$$typeof === d || Z.$$typeof === s || Z.$$typeof === o || Z.$$typeof === c || Z.$$typeof === v || Z.$$typeof === y || Z.$$typeof === g || Z.$$typeof === m);
    }
    function x(Z) {
      if (typeof Z == "object" && Z !== null) {
        var _t = Z.$$typeof;
        switch (_t) {
          case e:
            var Er = Z.type;
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
    var b = u, S = l, N = o, I = s, P = e, z = c, Q = n, D = p, R = d, q = r, U = a, M = i, $ = f, ve = !1;
    function j(Z) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(Z) || x(Z) === u;
    }
    function O(Z) {
      return x(Z) === l;
    }
    function F(Z) {
      return x(Z) === o;
    }
    function ee(Z) {
      return x(Z) === s;
    }
    function le(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === e;
    }
    function oe(Z) {
      return x(Z) === c;
    }
    function _e(Z) {
      return x(Z) === n;
    }
    function he(Z) {
      return x(Z) === p;
    }
    function de(Z) {
      return x(Z) === d;
    }
    function me(Z) {
      return x(Z) === r;
    }
    function Ce(Z) {
      return x(Z) === a;
    }
    function ke(Z) {
      return x(Z) === i;
    }
    function dt(Z) {
      return x(Z) === f;
    }
    Ve.AsyncMode = b, Ve.ConcurrentMode = S, Ve.ContextConsumer = N, Ve.ContextProvider = I, Ve.Element = P, Ve.ForwardRef = z, Ve.Fragment = Q, Ve.Lazy = D, Ve.Memo = R, Ve.Portal = q, Ve.Profiler = U, Ve.StrictMode = M, Ve.Suspense = $, Ve.isAsyncMode = j, Ve.isConcurrentMode = O, Ve.isContextConsumer = F, Ve.isContextProvider = ee, Ve.isElement = le, Ve.isForwardRef = oe, Ve.isFragment = _e, Ve.isLazy = he, Ve.isMemo = de, Ve.isPortal = me, Ve.isProfiler = Ce, Ve.isStrictMode = ke, Ve.isSuspense = dt, Ve.isValidElementType = w, Ve.typeOf = x;
  }()), Ve;
}
var qp;
function o0() {
  return qp || (qp = 1, process.env.NODE_ENV === "production" ? Vs.exports = eC() : Vs.exports = tC()), Vs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tl, Up;
function rC() {
  if (Up)
    return Tl;
  Up = 1;
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
  return Tl = i() ? Object.assign : function(a, s) {
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
  }, Tl;
}
var kl, Bp;
function nd() {
  if (Bp)
    return kl;
  Bp = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kl = t, kl;
}
var _l, Hp;
function u0() {
  return Hp || (Hp = 1, _l = Function.call.bind(Object.prototype.hasOwnProperty)), _l;
}
var Sl, Qp;
function nC() {
  if (Qp)
    return Sl;
  Qp = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = nd(), r = {}, n = u0();
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
  }, Sl = i, Sl;
}
var Ol, Yp;
function iC() {
  if (Yp)
    return Ol;
  Yp = 1;
  var t = o0(), e = rC(), r = nd(), n = u0(), i = nC(), a = function() {
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
  return Ol = function(o, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(O) {
      var F = O && (l && O[l] || O[c]);
      if (typeof F == "function")
        return F;
    }
    var h = "<<anonymous>>", d = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: g(),
      arrayOf: w,
      element: x(),
      elementType: b(),
      instanceOf: S,
      node: z(),
      objectOf: I,
      oneOf: N,
      oneOfType: P,
      shape: D,
      exact: R
    };
    function p(O, F) {
      return O === F ? O !== 0 || 1 / O === 1 / F : O !== O && F !== F;
    }
    function m(O, F) {
      this.message = O, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function v(O) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, ee = 0;
      function le(_e, he, de, me, Ce, ke, dt) {
        if (me = me || h, ke = ke || de, dt !== r) {
          if (u) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _t = me + ":" + de;
            !F[_t] && // Avoid spamming the console because they are often not actionable except for lib authors
            ee < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ke + "` prop on `" + me + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[_t] = !0, ee++);
          }
        }
        return he[de] == null ? _e ? he[de] === null ? new m("The " + Ce + " `" + ke + "` is marked as required " + ("in `" + me + "`, but its value is `null`.")) : new m("The " + Ce + " `" + ke + "` is marked as required in " + ("`" + me + "`, but its value is `undefined`.")) : null : O(he, de, me, Ce, ke);
      }
      var oe = le.bind(null, !1);
      return oe.isRequired = le.bind(null, !0), oe;
    }
    function y(O) {
      function F(ee, le, oe, _e, he, de) {
        var me = ee[le], Ce = M(me);
        if (Ce !== O) {
          var ke = $(me);
          return new m(
            "Invalid " + _e + " `" + he + "` of type " + ("`" + ke + "` supplied to `" + oe + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return v(F);
    }
    function g() {
      return v(s);
    }
    function w(O) {
      function F(ee, le, oe, _e, he) {
        if (typeof O != "function")
          return new m("Property `" + he + "` of component `" + oe + "` has invalid PropType notation inside arrayOf.");
        var de = ee[le];
        if (!Array.isArray(de)) {
          var me = M(de);
          return new m("Invalid " + _e + " `" + he + "` of type " + ("`" + me + "` supplied to `" + oe + "`, expected an array."));
        }
        for (var Ce = 0; Ce < de.length; Ce++) {
          var ke = O(de, Ce, oe, _e, he + "[" + Ce + "]", r);
          if (ke instanceof Error)
            return ke;
        }
        return null;
      }
      return v(F);
    }
    function x() {
      function O(F, ee, le, oe, _e) {
        var he = F[ee];
        if (!o(he)) {
          var de = M(he);
          return new m("Invalid " + oe + " `" + _e + "` of type " + ("`" + de + "` supplied to `" + le + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(O);
    }
    function b() {
      function O(F, ee, le, oe, _e) {
        var he = F[ee];
        if (!t.isValidElementType(he)) {
          var de = M(he);
          return new m("Invalid " + oe + " `" + _e + "` of type " + ("`" + de + "` supplied to `" + le + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(O);
    }
    function S(O) {
      function F(ee, le, oe, _e, he) {
        if (!(ee[le] instanceof O)) {
          var de = O.name || h, me = j(ee[le]);
          return new m("Invalid " + _e + " `" + he + "` of type " + ("`" + me + "` supplied to `" + oe + "`, expected ") + ("instance of `" + de + "`."));
        }
        return null;
      }
      return v(F);
    }
    function N(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function F(ee, le, oe, _e, he) {
        for (var de = ee[le], me = 0; me < O.length; me++)
          if (p(de, O[me]))
            return null;
        var Ce = JSON.stringify(O, function(dt, Z) {
          var _t = $(Z);
          return _t === "symbol" ? String(Z) : Z;
        });
        return new m("Invalid " + _e + " `" + he + "` of value `" + String(de) + "` " + ("supplied to `" + oe + "`, expected one of " + Ce + "."));
      }
      return v(F);
    }
    function I(O) {
      function F(ee, le, oe, _e, he) {
        if (typeof O != "function")
          return new m("Property `" + he + "` of component `" + oe + "` has invalid PropType notation inside objectOf.");
        var de = ee[le], me = M(de);
        if (me !== "object")
          return new m("Invalid " + _e + " `" + he + "` of type " + ("`" + me + "` supplied to `" + oe + "`, expected an object."));
        for (var Ce in de)
          if (n(de, Ce)) {
            var ke = O(de, Ce, oe, _e, he + "." + Ce, r);
            if (ke instanceof Error)
              return ke;
          }
        return null;
      }
      return v(F);
    }
    function P(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var F = 0; F < O.length; F++) {
        var ee = O[F];
        if (typeof ee != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(ee) + " at index " + F + "."
          ), s;
      }
      function le(oe, _e, he, de, me) {
        for (var Ce = [], ke = 0; ke < O.length; ke++) {
          var dt = O[ke], Z = dt(oe, _e, he, de, me, r);
          if (Z == null)
            return null;
          Z.data && n(Z.data, "expectedType") && Ce.push(Z.data.expectedType);
        }
        var _t = Ce.length > 0 ? ", expected one of type [" + Ce.join(", ") + "]" : "";
        return new m("Invalid " + de + " `" + me + "` supplied to " + ("`" + he + "`" + _t + "."));
      }
      return v(le);
    }
    function z() {
      function O(F, ee, le, oe, _e) {
        return q(F[ee]) ? null : new m("Invalid " + oe + " `" + _e + "` supplied to " + ("`" + le + "`, expected a ReactNode."));
      }
      return v(O);
    }
    function Q(O, F, ee, le, oe) {
      return new m(
        (O || "React class") + ": " + F + " type `" + ee + "." + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + oe + "`."
      );
    }
    function D(O) {
      function F(ee, le, oe, _e, he) {
        var de = ee[le], me = M(de);
        if (me !== "object")
          return new m("Invalid " + _e + " `" + he + "` of type `" + me + "` " + ("supplied to `" + oe + "`, expected `object`."));
        for (var Ce in O) {
          var ke = O[Ce];
          if (typeof ke != "function")
            return Q(oe, _e, he, Ce, $(ke));
          var dt = ke(de, Ce, oe, _e, he + "." + Ce, r);
          if (dt)
            return dt;
        }
        return null;
      }
      return v(F);
    }
    function R(O) {
      function F(ee, le, oe, _e, he) {
        var de = ee[le], me = M(de);
        if (me !== "object")
          return new m("Invalid " + _e + " `" + he + "` of type `" + me + "` " + ("supplied to `" + oe + "`, expected `object`."));
        var Ce = e({}, ee[le], O);
        for (var ke in Ce) {
          var dt = O[ke];
          if (n(O, ke) && typeof dt != "function")
            return Q(oe, _e, he, ke, $(dt));
          if (!dt)
            return new m(
              "Invalid " + _e + " `" + he + "` key `" + ke + "` supplied to `" + oe + "`.\nBad object: " + JSON.stringify(ee[le], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var Z = dt(de, ke, oe, _e, he + "." + ke, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return v(F);
    }
    function q(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(q);
          if (O === null || o(O))
            return !0;
          var F = f(O);
          if (F) {
            var ee = F.call(O), le;
            if (F !== O.entries) {
              for (; !(le = ee.next()).done; )
                if (!q(le.value))
                  return !1;
            } else
              for (; !(le = ee.next()).done; ) {
                var oe = le.value;
                if (oe && !q(oe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(O, F) {
      return O === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function M(O) {
      var F = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : U(F, O) ? "symbol" : F;
    }
    function $(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var F = M(O);
      if (F === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function ve(O) {
      var F = $(O);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function j(O) {
      return !O.constructor || !O.constructor.name ? h : O.constructor.name;
    }
    return d.checkPropTypes = i, d.resetWarningCache = i.resetWarningCache, d.PropTypes = d, d;
  }, Ol;
}
var Cl, Zp;
function aC() {
  if (Zp)
    return Cl;
  Zp = 1;
  var t = nd();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Cl = function() {
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
  }, Cl;
}
if (process.env.NODE_ENV !== "production") {
  var sC = o0(), oC = !0;
  $c.exports = iC()(sC.isElement, oC);
} else
  $c.exports = aC()();
var uC = $c.exports;
const Se = /* @__PURE__ */ jm(uC);
function Gp(t, e) {
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
    e % 2 ? Gp(Object(r), !0).forEach(function(n) {
      hi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Gp(Object(r)).forEach(function(n) {
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
function hi(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function lC(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function cC(t, e) {
  if (t == null)
    return {};
  var r = lC(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function jc(t) {
  return fC(t) || dC(t) || hC(t) || pC();
}
function fC(t) {
  if (Array.isArray(t))
    return Vc(t);
}
function dC(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function hC(t, e) {
  if (t) {
    if (typeof t == "string")
      return Vc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vc(t, e);
  }
}
function Vc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function pC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mC(t) {
  var e, r = t.beat, n = t.fade, i = t.beatFade, a = t.bounce, s = t.shake, o = t.flash, u = t.spin, l = t.spinPulse, c = t.spinReverse, f = t.pulse, h = t.fixedWidth, d = t.inverse, p = t.border, m = t.listItem, v = t.flip, y = t.size, g = t.rotation, w = t.pull, x = (e = {
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
    "fa-flip": v === !0,
    "fa-flip-horizontal": v === "horizontal" || v === "both",
    "fa-flip-vertical": v === "vertical" || v === "both"
  }, hi(e, "fa-".concat(y), typeof y < "u" && y !== null), hi(e, "fa-rotate-".concat(g), typeof g < "u" && g !== null && g !== 0), hi(e, "fa-pull-".concat(w), typeof w < "u" && w !== null), hi(e, "fa-swap-opacity", t.swapOpacity), e);
  return Object.keys(x).map(function(b) {
    return x[b] ? b : null;
  }).filter(function(b) {
    return b;
  });
}
function vC(t) {
  return t = t - 0, t === t;
}
function l0(t) {
  return vC(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  }), t.substr(0, 1).toLowerCase() + t.substr(1));
}
var yC = ["style"];
function gC(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function bC(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = l0(r.slice(0, n)), a = r.slice(n + 1).trim();
    return i.startsWith("webkit") ? e[gC(i)] = a : e[i] = a, e;
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
        u.attrs.style = bC(c);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? u.attrs[l.toLowerCase()] = c : u.attrs[l0(l)] = c;
    }
    return u;
  }, {
    attrs: {}
  }), a = r.style, s = a === void 0 ? {} : a, o = cC(r, yC);
  return i.attrs.style = nn(nn({}, i.attrs.style), s), t.apply(void 0, [e.tag, nn(nn({}, i.attrs), o)].concat(jc(n)));
}
var f0 = !1;
try {
  f0 = process.env.NODE_ENV === "production";
} catch {
}
function wC() {
  if (!f0 && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Jp(t) {
  if (t && Oo(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (Ql.icon)
    return Ql.icon(t);
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
function Il(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? hi({}, t, e) : {};
}
var os = /* @__PURE__ */ H.forwardRef(function(t, e) {
  var r = t.icon, n = t.mask, i = t.symbol, a = t.className, s = t.title, o = t.titleId, u = t.maskId, l = Jp(r), c = Il("classes", [].concat(jc(mC(t)), jc(a.split(" ")))), f = Il("transform", typeof t.transform == "string" ? Ql.transform(t.transform) : t.transform), h = Il("mask", Jp(n)), d = N1(l, nn(nn(nn(nn({}, c), f), h), {}, {
    symbol: i,
    title: s,
    titleId: o,
    maskId: u
  }));
  if (!d)
    return wC("Could not find icon", l), null;
  var p = d.abstract, m = {
    ref: e
  };
  return Object.keys(t).forEach(function(v) {
    os.defaultProps.hasOwnProperty(v) || (m[v] = t[v]);
  }), EC(p[0], m);
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
var EC = c0.bind(null, H.createElement);
const Ri = Ho(function({ name: e, family: r = "classic", style: n = "solid", ...i }, a) {
  const s = `fa-${e} fa-${r} fa-${n}`, { onClick: o } = i;
  return /* @__PURE__ */ X.jsx(os, { icon: s, className: o ? "sfs-cursor-pointer" : "", ref: a, ...i });
}), d0 = xt({
  currentScreen: null
});
function id() {
  const t = ft(d0);
  if (!t)
    throw new Error("useMiniApp must be used within a MiniAppProvider");
  return t;
}
function xC({ children: t }) {
  const [e, r] = Je(null), n = () => r(null);
  return /* @__PURE__ */ X.jsx(d0.Provider, { value: { currentScreen: e, setCurrentScreen: r, goHome: n }, children: t });
}
function TC({ title: t, icon: e, noBack: r }) {
  const { goHome: n } = id();
  return /* @__PURE__ */ X.jsxs("header", { className: "sfs-w-full sfs-box-border sfs-flex sfs-flex-row sfs-items-center", children: [
    !r && /* @__PURE__ */ X.jsx("div", { onClick: n, className: "sfs-h-10 sfs-px-4 sfs-flex sfs-flex-row sfs-items-center sfs-cursor-pointer hover:sfs-bg-gray-200 sfs-transition sfs-duration-200", children: /* @__PURE__ */ X.jsx(Ri, { icon: "chevron-left" }) }),
    /* @__PURE__ */ X.jsxs("div", { className: "sfs-flex sfs-flex-grow sfs-justify-center sfs-gap-1 sfs-py-3 sfs-text-gray-800", children: [
      /* @__PURE__ */ X.jsx(Ri, { icon: e }),
      /* @__PURE__ */ X.jsx("p", { className: "sfs-m-0 sfs-font-semibold", children: t })
    ] })
  ] });
}
function h0({ title: t, icon: e, noBack: r, children: n }) {
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsx(TC, { title: t, icon: e, noBack: r }),
    /* @__PURE__ */ X.jsx("main", { className: "sfs-box-border sfs-h-full sfs-grow sfs-w-full sfs-overflow-y-auto", children: n })
  ] });
}
function kC({ title: t, icon: e, children: r }) {
  const { setCurrentScreen: n } = id();
  return /* @__PURE__ */ X.jsx(h0, { title: t, icon: e, noBack: !0, children: /* @__PURE__ */ X.jsx("div", { className: "sfs-w-full sfs-h-full sfs-box-border sfs-flex sfs-flex-col sfs-gap-2 sfs-px-2", children: r.map((i, a) => /* @__PURE__ */ X.jsxs(
    "div",
    {
      onClick: () => n(i),
      className: "sfs-flex sfs-flex-row sfs-items-center sfs-gap-2 sfs-p-3 sfs-text-md sfs-bg-gray-200 sfs-rounded-md sfs-cursor-pointer sfs-transition sfs-duration-200 hover:sfs-bg-gray-300",
      children: [
        /* @__PURE__ */ X.jsx(Ri, { icon: i.props.icon, className: "sfs-w-4" }),
        /* @__PURE__ */ X.jsx("p", { className: "sfs-m-0", children: i.props.title })
      ]
    },
    a
  )) }) });
}
function _C({ title: t, icon: e, children: r }) {
  const { currentScreen: n } = id();
  return /* @__PURE__ */ X.jsx("div", { className: "sfs-w-full sfs-h-full sfs-flex sfs-flex-col sfs-pb-2 sfs-box-border sfs-text-gray-800 sfs-bg-white", children: n || /* @__PURE__ */ X.jsx(kC, { title: t, icon: e, children: r }) });
}
function SC({ title: t, icon: e, children: r }) {
  return /* @__PURE__ */ X.jsx(xC, { children: /* @__PURE__ */ X.jsx(_C, { title: t, icon: e, children: r }) });
}
var us = (t) => t.type === "checkbox", pi = (t) => t instanceof Date, Ot = (t) => t == null;
const p0 = (t) => typeof t == "object";
var gt = (t) => !Ot(t) && !Array.isArray(t) && p0(t) && !pi(t), OC = (t) => gt(t) && t.target ? us(t.target) ? t.target.checked : t.target.value : t, CC = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, IC = (t, e) => t.has(CC(e)), NC = (t) => {
  const e = t.constructor && t.constructor.prototype;
  return gt(e) && e.hasOwnProperty("isPrototypeOf");
}, ad = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ut(t) {
  let e;
  const r = Array.isArray(t);
  if (t instanceof Date)
    e = new Date(t);
  else if (t instanceof Set)
    e = new Set(t);
  else if (!(ad && (t instanceof Blob || t instanceof FileList)) && (r || gt(t)))
    if (e = r ? [] : {}, !r && !NC(t))
      e = t;
    else
      for (const n in t)
        t.hasOwnProperty(n) && (e[n] = Ut(t[n]));
  else
    return t;
  return e;
}
var ls = (t) => Array.isArray(t) ? t.filter(Boolean) : [], ot = (t) => t === void 0, ne = (t, e, r) => {
  if (!e || !gt(t))
    return r;
  const n = ls(e.split(/[,[\].]+?/)).reduce((i, a) => Ot(i) ? i : i[a], t);
  return ot(n) || n === t ? ot(t[e]) ? r : t[e] : n;
}, kr = (t) => typeof t == "boolean";
const Kp = {
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
H.createContext(null);
var AC = (t, e, r, n = !0) => {
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
}, Lt = (t) => gt(t) && !Object.keys(t).length, DC = (t, e, r, n) => {
  r(t);
  const { name: i, ...a } = t;
  return Lt(a) || Object.keys(a).length >= Object.keys(e).length || Object.keys(a).find((s) => e[s] === nr.all);
}, Nl = (t) => Array.isArray(t) ? t : [t];
function RC(t) {
  const e = H.useRef(t);
  e.current = t, H.useEffect(() => {
    const r = !t.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [t.disabled]);
}
var pr = (t) => typeof t == "string", PC = (t, e, r, n, i) => pr(t) ? (n && e.watch.add(t), ne(r, t, i)) : Array.isArray(t) ? t.map((a) => (n && e.watch.add(a), ne(r, a))) : (n && (e.watchAll = !0), r), sd = (t) => /^\w*$/.test(t), m0 = (t) => ls(t.replace(/["|']|\]/g, "").split(/\.|\[/)), Qe = (t, e, r) => {
  let n = -1;
  const i = sd(e) ? [e] : m0(e), a = i.length, s = a - 1;
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
} : {}, Xp = (t) => ({
  isOnSubmit: !t || t === nr.onSubmit,
  isOnBlur: t === nr.onBlur,
  isOnChange: t === nr.onChange,
  isOnAll: t === nr.all,
  isOnTouch: t === nr.onTouched
}), em = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((n) => t.startsWith(n) && /^\.\w+/.test(t.slice(n.length))));
const Ea = (t, e, r, n) => {
  for (const i of r || Object.keys(t)) {
    const a = ne(t, i);
    if (a) {
      const { _f: s, ...o } = a;
      if (s) {
        if (s.refs && s.refs[0] && e(s.refs[0], i) && !n)
          break;
        if (s.ref && e(s.ref, s.name) && !n)
          break;
        Ea(o, e);
      } else
        gt(o) && Ea(o, e);
    }
  }
};
var MC = (t, e, r) => {
  const n = ls(ne(t, r));
  return Qe(n, "root", e[r]), Qe(t, r, n), t;
}, od = (t) => t.type === "file", an = (t) => typeof t == "function", Co = (t) => {
  if (!ad)
    return !1;
  const e = t ? t.ownerDocument : 0;
  return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, ro = (t) => pr(t), ud = (t) => t.type === "radio", Io = (t) => t instanceof RegExp;
const tm = {
  value: !1,
  isValid: !1
}, rm = { value: !0, isValid: !0 };
var y0 = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !ot(t[0].attributes.value) ? ot(t[0].value) || t[0].value === "" ? rm : { value: t[0].value, isValid: !0 } : rm
    ) : tm;
  }
  return tm;
};
const nm = {
  isValid: !1,
  value: null
};
var g0 = (t) => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, nm) : nm;
function im(t, e, r = "validate") {
  if (ro(t) || Array.isArray(t) && t.every(ro) || kr(t) && !t)
    return {
      type: r,
      message: ro(t) ? t : "",
      ref: e
    };
}
var ri = (t) => gt(t) && !Io(t) ? t : {
  value: t,
  message: ""
}, am = async (t, e, r, n, i) => {
  const { ref: a, refs: s, required: o, maxLength: u, minLength: l, min: c, max: f, pattern: h, validate: d, name: p, valueAsNumber: m, mount: v, disabled: y } = t._f, g = ne(e, p);
  if (!v || y)
    return {};
  const w = s ? s[0] : a, x = (D) => {
    n && w.reportValidity && (w.setCustomValidity(kr(D) ? "" : D || ""), w.reportValidity());
  }, b = {}, S = ud(a), N = us(a), I = S || N, P = (m || od(a)) && ot(a.value) && ot(g) || Co(a) && a.value === "" || g === "" || Array.isArray(g) && !g.length, z = v0.bind(null, p, r, b), Q = (D, R, q, U = xr.maxLength, M = xr.minLength) => {
    const $ = D ? R : q;
    b[p] = {
      type: D ? U : M,
      message: $,
      ref: a,
      ...z(D ? U : M, $)
    };
  };
  if (i ? !Array.isArray(g) || !g.length : o && (!I && (P || Ot(g)) || kr(g) && !g || N && !y0(s).isValid || S && !g0(s).isValid)) {
    const { value: D, message: R } = ro(o) ? { value: !!o, message: o } : ri(o);
    if (D && (b[p] = {
      type: xr.required,
      message: R,
      ref: w,
      ...z(xr.required, R)
    }, !r))
      return x(R), b;
  }
  if (!P && (!Ot(c) || !Ot(f))) {
    let D, R;
    const q = ri(f), U = ri(c);
    if (!Ot(g) && !isNaN(g)) {
      const M = a.valueAsNumber || g && +g;
      Ot(q.value) || (D = M > q.value), Ot(U.value) || (R = M < U.value);
    } else {
      const M = a.valueAsDate || new Date(g), $ = (O) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + O), ve = a.type == "time", j = a.type == "week";
      pr(q.value) && g && (D = ve ? $(g) > $(q.value) : j ? g > q.value : M > new Date(q.value)), pr(U.value) && g && (R = ve ? $(g) < $(U.value) : j ? g < U.value : M < new Date(U.value));
    }
    if ((D || R) && (Q(!!D, q.message, U.message, xr.max, xr.min), !r))
      return x(b[p].message), b;
  }
  if ((u || l) && !P && (pr(g) || i && Array.isArray(g))) {
    const D = ri(u), R = ri(l), q = !Ot(D.value) && g.length > +D.value, U = !Ot(R.value) && g.length < +R.value;
    if ((q || U) && (Q(q, D.message, R.message), !r))
      return x(b[p].message), b;
  }
  if (h && !P && pr(g)) {
    const { value: D, message: R } = ri(h);
    if (Io(D) && !g.match(D) && (b[p] = {
      type: xr.pattern,
      message: R,
      ref: a,
      ...z(xr.pattern, R)
    }, !r))
      return x(R), b;
  }
  if (d) {
    if (an(d)) {
      const D = await d(g, e), R = im(D, w);
      if (R && (b[p] = {
        ...R,
        ...z(xr.validate, R.message)
      }, !r))
        return x(R.message), b;
    } else if (gt(d)) {
      let D = {};
      for (const R in d) {
        if (!Lt(D) && !r)
          break;
        const q = im(await d[R](g, e), w, R);
        q && (D = {
          ...q,
          ...z(R, q.message)
        }, x(q.message), r && (b[p] = D));
      }
      if (!Lt(D) && (b[p] = {
        ref: w,
        ...D
      }, !r))
        return b;
    }
  }
  return x(!0), b;
};
function FC(t, e) {
  const r = e.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    t = ot(t) ? n++ : t[e[n++]];
  return t;
}
function LC(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !ot(t[e]))
      return !1;
  return !0;
}
function pt(t, e) {
  const r = Array.isArray(e) ? e : sd(e) ? [e] : m0(e), n = r.length === 1 ? t : FC(t, r), i = r.length - 1, a = r[i];
  return n && delete n[a], i !== 0 && (gt(n) && Lt(n) || Array.isArray(n) && LC(n)) && pt(t, r.slice(0, -1)), t;
}
var Al = () => {
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
}, No = (t) => Ot(t) || !p0(t);
function Mn(t, e) {
  if (No(t) || No(e))
    return t === e;
  if (pi(t) && pi(e))
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
      if (pi(a) && pi(s) || gt(a) && gt(s) || Array.isArray(a) && Array.isArray(s) ? !Mn(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var b0 = (t) => t.type === "select-multiple", $C = (t) => ud(t) || us(t), Dl = (t) => Co(t) && t.isConnected, w0 = (t) => {
  for (const e in t)
    if (an(t[e]))
      return !0;
  return !1;
};
function Ao(t, e = {}) {
  const r = Array.isArray(t);
  if (gt(t) || r)
    for (const n in t)
      Array.isArray(t[n]) || gt(t[n]) && !w0(t[n]) ? (e[n] = Array.isArray(t[n]) ? [] : {}, Ao(t[n], e[n])) : Ot(t[n]) || (e[n] = !0);
  return e;
}
function E0(t, e, r) {
  const n = Array.isArray(t);
  if (gt(t) || n)
    for (const i in t)
      Array.isArray(t[i]) || gt(t[i]) && !w0(t[i]) ? ot(e) || No(r[i]) ? r[i] = Array.isArray(t[i]) ? Ao(t[i], []) : { ...Ao(t[i]) } : E0(t[i], Ot(e) ? {} : e[i], r[i]) : r[i] = !Mn(t[i], e[i]);
  return r;
}
var zs = (t, e) => E0(t, e, Ao(e)), x0 = (t, { valueAsNumber: e, valueAsDate: r, setValueAs: n }) => ot(t) ? t : e ? t === "" ? NaN : t && +t : r && pr(t) ? new Date(t) : n ? n(t) : t;
function Rl(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((r) => r.disabled) : e.disabled))
    return od(e) ? e.files : ud(e) ? g0(t.refs).value : b0(e) ? [...e.selectedOptions].map(({ value: r }) => r) : us(e) ? y0(t.refs).value : x0(ot(e.value) ? t.ref.value : e.value, t);
}
var jC = (t, e, r, n) => {
  const i = {};
  for (const a of t) {
    const s = ne(e, a);
    s && Qe(i, a, s._f);
  }
  return {
    criteriaMode: r,
    names: [...t],
    fields: i,
    shouldUseNativeValidation: n
  };
}, ra = (t) => ot(t) ? t : Io(t) ? t.source : gt(t) ? Io(t.value) ? t.value.source : t.value : t, VC = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function sm(t, e, r) {
  const n = ne(t, r);
  if (n || sd(r))
    return {
      error: n,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const a = i.join("."), s = ne(e, a), o = ne(t, a);
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
var zC = (t, e, r, n, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(e || t) : (r ? n.isOnBlur : i.isOnBlur) ? !t : (r ? n.isOnChange : i.isOnChange) ? t : !0, WC = (t, e) => !ls(ne(t, e)).length && pt(t, e);
const qC = {
  mode: nr.onSubmit,
  reValidateMode: nr.onChange,
  shouldFocusError: !0
};
function UC(t = {}) {
  let e = {
    ...qC,
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
  }, n = {}, i = gt(e.defaultValues) || gt(e.values) ? Ut(e.defaultValues || e.values) || {} : {}, a = e.shouldUnregister ? {} : Ut(i), s = {
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
    values: Al(),
    array: Al(),
    state: Al()
  }, h = Xp(e.mode), d = Xp(e.reValidateMode), p = e.criteriaMode === nr.all, m = (T) => (_) => {
    clearTimeout(l), l = setTimeout(T, _);
  }, v = async (T) => {
    if (c.isValid || T) {
      const _ = e.resolver ? Lt((await I()).errors) : await z(n, !0);
      _ !== r.isValid && f.state.next({
        isValid: _
      });
    }
  }, y = (T, _) => {
    (c.isValidating || c.validatingFields) && ((T || Array.from(o.mount)).forEach((C) => {
      C && (_ ? Qe(r.validatingFields, C, _) : pt(r.validatingFields, C));
    }), f.state.next({
      validatingFields: r.validatingFields,
      isValidating: !Lt(r.validatingFields)
    }));
  }, g = (T, _ = [], C, K, B = !0, W = !0) => {
    if (K && C) {
      if (s.action = !0, W && Array.isArray(ne(n, T))) {
        const ce = C(ne(n, T), K.argA, K.argB);
        B && Qe(n, T, ce);
      }
      if (W && Array.isArray(ne(r.errors, T))) {
        const ce = C(ne(r.errors, T), K.argA, K.argB);
        B && Qe(r.errors, T, ce), WC(r.errors, T);
      }
      if (c.touchedFields && W && Array.isArray(ne(r.touchedFields, T))) {
        const ce = C(ne(r.touchedFields, T), K.argA, K.argB);
        B && Qe(r.touchedFields, T, ce);
      }
      c.dirtyFields && (r.dirtyFields = zs(i, a)), f.state.next({
        name: T,
        isDirty: D(T, _),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Qe(a, T, _);
  }, w = (T, _) => {
    Qe(r.errors, T, _), f.state.next({
      errors: r.errors
    });
  }, x = (T) => {
    r.errors = T, f.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, b = (T, _, C, K) => {
    const B = ne(n, T);
    if (B) {
      const W = ne(a, T, ot(C) ? ne(i, T) : C);
      ot(W) || K && K.defaultChecked || _ ? Qe(a, T, _ ? W : Rl(B._f)) : U(T, W), s.mount && v();
    }
  }, S = (T, _, C, K, B) => {
    let W = !1, ce = !1;
    const Me = {
      name: T
    }, it = !!(ne(n, T) && ne(n, T)._f.disabled);
    if (!C || K) {
      c.isDirty && (ce = r.isDirty, r.isDirty = Me.isDirty = D(), W = ce !== Me.isDirty);
      const ht = it || Mn(ne(i, T), _);
      ce = !!(!it && ne(r.dirtyFields, T)), ht || it ? pt(r.dirtyFields, T) : Qe(r.dirtyFields, T, !0), Me.dirtyFields = r.dirtyFields, W = W || c.dirtyFields && ce !== !ht;
    }
    if (C) {
      const ht = ne(r.touchedFields, T);
      ht || (Qe(r.touchedFields, T, C), Me.touchedFields = r.touchedFields, W = W || c.touchedFields && ht !== C);
    }
    return W && B && f.state.next(Me), W ? Me : {};
  }, N = (T, _, C, K) => {
    const B = ne(r.errors, T), W = c.isValid && kr(_) && r.isValid !== _;
    if (t.delayError && C ? (u = m(() => w(T, C)), u(t.delayError)) : (clearTimeout(l), u = null, C ? Qe(r.errors, T, C) : pt(r.errors, T)), (C ? !Mn(B, C) : B) || !Lt(K) || W) {
      const ce = {
        ...K,
        ...W && kr(_) ? { isValid: _ } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ...ce
      }, f.state.next(ce);
    }
  }, I = async (T) => {
    y(T, !0);
    const _ = await e.resolver(a, e.context, jC(T || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return y(T), _;
  }, P = async (T) => {
    const { errors: _ } = await I(T);
    if (T)
      for (const C of T) {
        const K = ne(_, C);
        K ? Qe(r.errors, C, K) : pt(r.errors, C);
      }
    else
      r.errors = _;
    return _;
  }, z = async (T, _, C = {
    valid: !0
  }) => {
    for (const K in T) {
      const B = T[K];
      if (B) {
        const { _f: W, ...ce } = B;
        if (W) {
          const Me = o.array.has(W.name);
          y([K], !0);
          const it = await am(B, a, p, e.shouldUseNativeValidation && !_, Me);
          if (y([K]), it[W.name] && (C.valid = !1, _))
            break;
          !_ && (ne(it, W.name) ? Me ? MC(r.errors, it, W.name) : Qe(r.errors, W.name, it[W.name]) : pt(r.errors, W.name));
        }
        ce && await z(ce, _, C);
      }
    }
    return C.valid;
  }, Q = () => {
    for (const T of o.unMount) {
      const _ = ne(n, T);
      _ && (_._f.refs ? _._f.refs.every((C) => !Dl(C)) : !Dl(_._f.ref)) && he(T);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, D = (T, _) => (T && _ && Qe(a, T, _), !Mn(F(), i)), R = (T, _, C) => PC(T, o, {
    ...s.mount ? a : ot(_) ? i : pr(T) ? { [T]: _ } : _
  }, C, _), q = (T) => ls(ne(s.mount ? a : i, T, t.shouldUnregister ? ne(i, T, []) : [])), U = (T, _, C = {}) => {
    const K = ne(n, T);
    let B = _;
    if (K) {
      const W = K._f;
      W && (!W.disabled && Qe(a, T, x0(_, W)), B = Co(W.ref) && Ot(_) ? "" : _, b0(W.ref) ? [...W.ref.options].forEach((ce) => ce.selected = B.includes(ce.value)) : W.refs ? us(W.ref) ? W.refs.length > 1 ? W.refs.forEach((ce) => (!ce.defaultChecked || !ce.disabled) && (ce.checked = Array.isArray(B) ? !!B.find((Me) => Me === ce.value) : B === ce.value)) : W.refs[0] && (W.refs[0].checked = !!B) : W.refs.forEach((ce) => ce.checked = ce.value === B) : od(W.ref) ? W.ref.value = "" : (W.ref.value = B, W.ref.type || f.values.next({
        name: T,
        values: { ...a }
      })));
    }
    (C.shouldDirty || C.shouldTouch) && S(T, B, C.shouldTouch, C.shouldDirty, !0), C.shouldValidate && O(T);
  }, M = (T, _, C) => {
    for (const K in _) {
      const B = _[K], W = `${T}.${K}`, ce = ne(n, W);
      (o.array.has(T) || !No(B) || ce && !ce._f) && !pi(B) ? M(W, B, C) : U(W, B, C);
    }
  }, $ = (T, _, C = {}) => {
    const K = ne(n, T), B = o.array.has(T), W = Ut(_);
    Qe(a, T, W), B ? (f.array.next({
      name: T,
      values: { ...a }
    }), (c.isDirty || c.dirtyFields) && C.shouldDirty && f.state.next({
      name: T,
      dirtyFields: zs(i, a),
      isDirty: D(T, W)
    })) : K && !K._f && !Ot(W) ? M(T, W, C) : U(T, W, C), em(T, o) && f.state.next({ ...r }), f.values.next({
      name: s.mount ? T : void 0,
      values: { ...a }
    });
  }, ve = async (T) => {
    s.mount = !0;
    const _ = T.target;
    let C = _.name, K = !0;
    const B = ne(n, C), W = () => _.type ? Rl(B._f) : OC(T), ce = (Me) => {
      K = Number.isNaN(Me) || Me === ne(a, C, Me);
    };
    if (B) {
      let Me, it;
      const ht = W(), Wr = T.type === Kp.BLUR || T.type === Kp.FOCUS_OUT, cs = !VC(B._f) && !e.resolver && !ne(r.errors, C) && !B._f.deps || zC(Wr, ne(r.touchedFields, C), r.isSubmitted, d, h), Gn = em(C, o, Wr);
      Qe(a, C, ht), Wr ? (B._f.onBlur && B._f.onBlur(T), u && u(0)) : B._f.onChange && B._f.onChange(T);
      const bn = S(C, ht, Wr, !1), Nu = !Lt(bn) || Gn;
      if (!Wr && f.values.next({
        name: C,
        type: T.type,
        values: { ...a }
      }), cs)
        return c.isValid && v(), Nu && f.state.next({ name: C, ...Gn ? {} : bn });
      if (!Wr && Gn && f.state.next({ ...r }), e.resolver) {
        const { errors: fs } = await I([C]);
        if (ce(ht), K) {
          const Au = sm(r.errors, n, C), ds = sm(fs, n, Au.name || C);
          Me = ds.error, C = ds.name, it = Lt(fs);
        }
      } else
        y([C], !0), Me = (await am(B, a, p, e.shouldUseNativeValidation))[C], y([C]), ce(ht), K && (Me ? it = !1 : c.isValid && (it = await z(n, !0)));
      K && (B._f.deps && O(B._f.deps), N(C, it, Me, bn));
    }
  }, j = (T, _) => {
    if (ne(r.errors, _) && T.focus)
      return T.focus(), 1;
  }, O = async (T, _ = {}) => {
    let C, K;
    const B = Nl(T);
    if (e.resolver) {
      const W = await P(ot(T) ? T : B);
      C = Lt(W), K = T ? !B.some((ce) => ne(W, ce)) : C;
    } else
      T ? (K = (await Promise.all(B.map(async (W) => {
        const ce = ne(n, W);
        return await z(ce && ce._f ? { [W]: ce } : ce);
      }))).every(Boolean), !(!K && !r.isValid) && v()) : K = C = await z(n);
    return f.state.next({
      ...!pr(T) || c.isValid && C !== r.isValid ? {} : { name: T },
      ...e.resolver || !T ? { isValid: C } : {},
      errors: r.errors
    }), _.shouldFocus && !K && Ea(n, j, T ? B : o.mount), K;
  }, F = (T) => {
    const _ = {
      ...s.mount ? a : i
    };
    return ot(T) ? _ : pr(T) ? ne(_, T) : T.map((C) => ne(_, C));
  }, ee = (T, _) => ({
    invalid: !!ne((_ || r).errors, T),
    isDirty: !!ne((_ || r).dirtyFields, T),
    isTouched: !!ne((_ || r).touchedFields, T),
    isValidating: !!ne((_ || r).validatingFields, T),
    error: ne((_ || r).errors, T)
  }), le = (T) => {
    T && Nl(T).forEach((_) => pt(r.errors, _)), f.state.next({
      errors: T ? r.errors : {}
    });
  }, oe = (T, _, C) => {
    const K = (ne(n, T, { _f: {} })._f || {}).ref;
    Qe(r.errors, T, {
      ..._,
      ref: K
    }), f.state.next({
      name: T,
      errors: r.errors,
      isValid: !1
    }), C && C.shouldFocus && K && K.focus && K.focus();
  }, _e = (T, _) => an(T) ? f.values.subscribe({
    next: (C) => T(R(void 0, _), C)
  }) : R(T, _, !0), he = (T, _ = {}) => {
    for (const C of T ? Nl(T) : o.mount)
      o.mount.delete(C), o.array.delete(C), _.keepValue || (pt(n, C), pt(a, C)), !_.keepError && pt(r.errors, C), !_.keepDirty && pt(r.dirtyFields, C), !_.keepTouched && pt(r.touchedFields, C), !_.keepIsValidating && pt(r.validatingFields, C), !e.shouldUnregister && !_.keepDefaultValue && pt(i, C);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...r,
      ..._.keepDirty ? { isDirty: D() } : {}
    }), !_.keepIsValid && v();
  }, de = ({ disabled: T, name: _, field: C, fields: K, value: B }) => {
    if (kr(T)) {
      const W = T ? void 0 : ot(B) ? Rl(C ? C._f : ne(K, _)._f) : B;
      Qe(a, _, W), S(_, W, !1, !1, !0);
    }
  }, me = (T, _ = {}) => {
    let C = ne(n, T);
    const K = kr(_.disabled);
    return Qe(n, T, {
      ...C || {},
      _f: {
        ...C && C._f ? C._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ..._
      }
    }), o.mount.add(T), C ? de({
      field: C,
      disabled: _.disabled,
      name: T,
      value: _.value
    }) : b(T, !0, _.value), {
      ...K ? { disabled: _.disabled } : {},
      ...e.progressive ? {
        required: !!_.required,
        min: ra(_.min),
        max: ra(_.max),
        minLength: ra(_.minLength),
        maxLength: ra(_.maxLength),
        pattern: ra(_.pattern)
      } : {},
      name: T,
      onChange: ve,
      onBlur: ve,
      ref: (B) => {
        if (B) {
          me(T, _), C = ne(n, T);
          const W = ot(B.value) && B.querySelectorAll && B.querySelectorAll("input,select,textarea")[0] || B, ce = $C(W), Me = C._f.refs || [];
          if (ce ? Me.find((it) => it === W) : W === C._f.ref)
            return;
          Qe(n, T, {
            _f: {
              ...C._f,
              ...ce ? {
                refs: [
                  ...Me.filter(Dl),
                  W,
                  ...Array.isArray(ne(i, T)) ? [{}] : []
                ],
                ref: { type: W.type, name: T }
              } : { ref: W }
            }
          }), b(T, !1, void 0, W);
        } else
          C = ne(n, T, {}), C._f && (C._f.mount = !1), (e.shouldUnregister || _.shouldUnregister) && !(IC(o.array, T) && s.action) && o.unMount.add(T);
      }
    };
  }, Ce = () => e.shouldFocusError && Ea(n, j, o.mount), ke = (T) => {
    kr(T) && (f.state.next({ disabled: T }), Ea(n, (_, C) => {
      let K = T;
      const B = ne(n, C);
      B && kr(B._f.disabled) && (K || (K = B._f.disabled)), _.disabled = K;
    }, 0, !1));
  }, dt = (T, _) => async (C) => {
    let K;
    C && (C.preventDefault && C.preventDefault(), C.persist && C.persist());
    let B = Ut(a);
    if (f.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: W, values: ce } = await I();
      r.errors = W, B = ce;
    } else
      await z(n);
    if (pt(r.errors, "root"), Lt(r.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await T(B, C);
      } catch (W) {
        K = W;
      }
    } else
      _ && await _({ ...r.errors }, C), Ce(), setTimeout(Ce);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Lt(r.errors) && !K,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), K)
      throw K;
  }, Z = (T, _ = {}) => {
    ne(n, T) && (ot(_.defaultValue) ? $(T, Ut(ne(i, T))) : ($(T, _.defaultValue), Qe(i, T, Ut(_.defaultValue))), _.keepTouched || pt(r.touchedFields, T), _.keepDirty || (pt(r.dirtyFields, T), r.isDirty = _.defaultValue ? D(T, Ut(ne(i, T))) : D()), _.keepError || (pt(r.errors, T), c.isValid && v()), f.state.next({ ...r }));
  }, _t = (T, _ = {}) => {
    const C = T ? Ut(T) : i, K = Ut(C), B = Lt(T), W = B ? i : K;
    if (_.keepDefaultValues || (i = C), !_.keepValues) {
      if (_.keepDirtyValues)
        for (const ce of o.mount)
          ne(r.dirtyFields, ce) ? Qe(W, ce, ne(a, ce)) : $(ce, ne(W, ce));
      else {
        if (ad && ot(T))
          for (const ce of o.mount) {
            const Me = ne(n, ce);
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
      a = t.shouldUnregister ? _.keepDefaultValues ? Ut(i) : {} : Ut(W), f.array.next({
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
      isDirty: B ? !1 : _.keepDirty ? r.isDirty : !!(_.keepDefaultValues && !Mn(T, i)),
      isSubmitted: _.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: B ? [] : _.keepDirtyValues ? _.keepDefaultValues && a ? zs(i, a) : r.dirtyFields : _.keepDefaultValues && T ? zs(i, T) : {},
      touchedFields: _.keepTouched ? r.touchedFields : {},
      errors: _.keepErrors ? r.errors : {},
      isSubmitSuccessful: _.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Er = (T, _) => _t(an(T) ? T(a) : T, _);
  return {
    control: {
      register: me,
      unregister: he,
      getFieldState: ee,
      handleSubmit: dt,
      setError: oe,
      _executeSchema: I,
      _getWatch: R,
      _getDirty: D,
      _updateValid: v,
      _removeUnmounted: Q,
      _updateFieldArray: g,
      _updateDisabledField: de,
      _getFieldArray: q,
      _reset: _t,
      _resetDefaultValues: () => an(e.defaultValues) && e.defaultValues().then((T) => {
        Er(T, e.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (T) => {
        r = {
          ...r,
          ...T
        };
      },
      _disableForm: ke,
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
      set _state(T) {
        s = T;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(T) {
        o = T;
      },
      get _formState() {
        return r;
      },
      set _formState(T) {
        r = T;
      },
      get _options() {
        return e;
      },
      set _options(T) {
        e = {
          ...e,
          ...T
        };
      }
    },
    trigger: O,
    register: me,
    handleSubmit: dt,
    watch: _e,
    setValue: $,
    getValues: F,
    reset: Er,
    resetField: Z,
    clearErrors: le,
    unregister: he,
    setError: oe,
    setFocus: (T, _ = {}) => {
      const C = ne(n, T), K = C && C._f;
      if (K) {
        const B = K.refs ? K.refs[0] : K.ref;
        B.focus && (B.focus(), _.shouldSelect && B.select());
      }
    },
    getFieldState: ee
  };
}
function BC(t = {}) {
  const e = H.useRef(), r = H.useRef(), [n, i] = H.useState({
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
    ...UC(t),
    formState: n
  });
  const a = e.current.control;
  return a._options = t, RC({
    subject: a._subjects.state,
    next: (s) => {
      DC(s, a._proxyFormState, a._updateFormState) && i({ ...a._formState });
    }
  }), H.useEffect(() => a._disableForm(t.disabled), [a, t.disabled]), H.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== n.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, n.isDirty]), H.useEffect(() => {
    t.values && !Mn(t.values, r.current) ? (a._reset(t.values, a._options.resetOptions), r.current = t.values, i((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [t.values, a]), H.useEffect(() => {
    t.errors && a._setErrors(t.errors);
  }, [t.errors, a]), H.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), H.useEffect(() => {
    t.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [t.shouldUnregister, a]), e.current.formState = AC(n, a), e.current;
}
var om = function(t, e, r) {
  if (t && "reportValidity" in t) {
    var n = ne(r, e);
    t.setCustomValidity(n && n.message || ""), t.reportValidity();
  }
}, T0 = function(t, e) {
  var r = function(i) {
    var a = e.fields[i];
    a && a.ref && "reportValidity" in a.ref ? om(a.ref, i, t) : a.refs && a.refs.forEach(function(s) {
      return om(s, i, t);
    });
  };
  for (var n in e.fields)
    r(n);
}, HC = function(t) {
  return t instanceof Date;
}, QC = function(t) {
  return t == null;
}, YC = function(t) {
  return typeof t == "object";
}, ZC = function(t) {
  return !QC(t) && !Array.isArray(t) && YC(t) && !HC(t);
}, GC = function(t) {
  return /^\w*$/.test(t);
}, Pl = function(t, e, r) {
  for (var n = -1, i = GC(e) ? [e] : function(c) {
    return f = c.replace(/["|']|\]/g, "").split(/\.|\[/), Array.isArray(f) ? f.filter(Boolean) : [];
    var f;
  }(e), a = i.length, s = a - 1; ++n < a; ) {
    var o = i[n], u = r;
    if (n !== s) {
      var l = t[o];
      u = ZC(l) || Array.isArray(l) ? l : isNaN(+i[n + 1]) ? {} : [];
    }
    t[o] = u, t = t[o];
  }
  return t;
}, JC = function(t, e) {
  e.shouldUseNativeValidation && T0(t, e);
  var r = {};
  for (var n in t) {
    var i = ne(e.fields, n), a = Object.assign(t[n] || {}, { ref: i && i.ref });
    if (KC(e.names || Object.keys(t), n)) {
      var s = Object.assign({}, ne(r, n));
      Pl(s, "root", a), Pl(r, n, s);
    } else
      Pl(r, n, a);
  }
  return r;
}, KC = function(t, e) {
  return t.some(function(r) {
    return r.startsWith(e + ".");
  });
}, XC = function(t, e) {
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
}, eI = function(t, e, r) {
  return r === void 0 && (r = {}), function(n, i, a) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var u = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(l) {
            return a.shouldUseNativeValidation && T0({}, a), { errors: {}, values: r.raw ? n : l };
          });
        } catch (l) {
          return o(l);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(s) {
        if (function(o) {
          return o.errors != null;
        }(s))
          return { values: {}, errors: JC(XC(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
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
var um;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(um || (um = {}));
const te = Re.arrayToEnum([
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
]), On = (t) => {
  switch (typeof t) {
    case "undefined":
      return te.undefined;
    case "string":
      return te.string;
    case "number":
      return isNaN(t) ? te.nan : te.number;
    case "boolean":
      return te.boolean;
    case "function":
      return te.function;
    case "bigint":
      return te.bigint;
    case "symbol":
      return te.symbol;
    case "object":
      return Array.isArray(t) ? te.array : t === null ? te.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? te.promise : typeof Map < "u" && t instanceof Map ? te.map : typeof Set < "u" && t instanceof Set ? te.set : typeof Date < "u" && t instanceof Date ? te.date : te.object;
    default:
      return te.unknown;
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
const Va = (t, e) => {
  let r;
  switch (t.code) {
    case V.invalid_type:
      t.received === te.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
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
let tI = Va;
function zc() {
  return tI;
}
const Wc = (t) => {
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
function J(t, e) {
  const r = zc(), n = Wc({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      r,
      r === Va ? void 0 : Va
      // then global default map
    ].filter((i) => !!i)
  });
  t.common.issues.push(n);
}
class Dt {
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
        return be;
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
    return Dt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: a, value: s } = i;
      if (a.status === "aborted" || s.status === "aborted")
        return be;
      a.status === "dirty" && e.dirty(), s.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (n[a.value] = s.value);
    }
    return { status: e.value, value: n };
  }
}
const be = Object.freeze({
  status: "aborted"
}), oa = (t) => ({ status: "dirty", value: t }), Ft = (t) => ({ status: "valid", value: t }), lm = (t) => t.status === "aborted", cm = (t) => t.status === "dirty", Do = (t) => t.status === "valid", Ro = (t) => typeof Promise < "u" && t instanceof Promise;
function Po(t, e, r, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function k0(t, e, r, n, i) {
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var ue;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ue || (ue = {}));
var ua, la;
class br {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const fm = (t, e) => {
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
function Te(t) {
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
    return On(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: On(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Dt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: On(e.data),
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
      parsedType: On(e)
    }, a = this._parseSync({ data: e, path: i.path, parent: i });
    return fm(i, a);
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
      parsedType: On(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), a = await (Ro(i) ? i : Promise.resolve(i));
    return fm(n, a);
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
      typeName: ye.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Nr.create(this, this._def);
  }
  nullable() {
    return Hn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return mr.create(this, this._def);
  }
  promise() {
    return Wa.create(this, this._def);
  }
  or(e) {
    return Lo.create([this, e], this._def);
  }
  and(e) {
    return $o.create(this, e, this._def);
  }
  transform(e) {
    return new $r({
      ...Te(this._def),
      schema: this,
      typeName: ye.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new qo({
      ...Te(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ye.ZodDefault
    });
  }
  brand() {
    return new C0({
      typeName: ye.ZodBranded,
      type: this,
      ...Te(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Uo({
      ...Te(this._def),
      innerType: this,
      catchValue: r,
      typeName: ye.ZodCatch
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
    return Cu.create(this, e);
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
const rI = /^c[^\s-]{8,}$/i, nI = /^[0-9a-z]+$/, iI = /^[0-9A-HJKMNP-TV-Z]{26}$/, aI = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, sI = /^[a-z0-9_-]{21}$/i, oI = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, uI = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, lI = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ml;
const cI = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, fI = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, dI = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _0 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", hI = new RegExp(`^${_0}$`);
function S0(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function pI(t) {
  return new RegExp(`^${S0(t)}$`);
}
function mI(t) {
  let e = `${_0}T${S0(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function vI(t, e) {
  return !!((e === "v4" || !e) && cI.test(t) || (e === "v6" || !e) && fI.test(t));
}
class Or extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== te.string) {
      const a = this._getOrReturnCtx(e);
      return J(a, {
        code: V.invalid_type,
        expected: te.string,
        received: a.parsedType
      }), be;
    }
    const n = new Dt();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const s = e.data.length > a.value, o = e.data.length < a.value;
        (s || o) && (i = this._getOrReturnCtx(e, i), s ? J(i, {
          code: V.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && J(i, {
          code: V.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        uI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "email",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        Ml || (Ml = new RegExp(lI, "u")), Ml.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "emoji",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        aI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "uuid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        sI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "nanoid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        rI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "cuid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        nI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "cuid2",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        iI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "ulid",
          code: V.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), J(i, {
            validation: "url",
            code: V.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "regex",
          code: V.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? mI(a).test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "date" ? hI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.invalid_string,
          validation: "date",
          message: a.message
        }), n.dirty()) : a.kind === "time" ? pI(a).test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          code: V.invalid_string,
          validation: "time",
          message: a.message
        }), n.dirty()) : a.kind === "duration" ? oI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "duration",
          code: V.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? vI(e.data, a.version) || (i = this._getOrReturnCtx(e, i), J(i, {
          validation: "ip",
          code: V.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "base64" ? dI.test(e.data) || (i = this._getOrReturnCtx(e, i), J(i, {
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
      ...ue.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ue.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ue.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ue.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ue.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...ue.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ue.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ue.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ue.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...ue.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ue.errToObj(e) });
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
      ...ue.errToObj(e == null ? void 0 : e.message)
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
      ...ue.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...ue.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ue.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ue.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ue.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ue.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ue.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ue.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ue.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, ue.errToObj(e));
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
    typeName: ye.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Te(t)
  });
};
function yI(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, a = parseInt(t.toFixed(i).replace(".", "")), s = parseInt(e.toFixed(i).replace(".", ""));
  return a % s / Math.pow(10, i);
}
class Pi extends Oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== te.number) {
      const a = this._getOrReturnCtx(e);
      return J(a, {
        code: V.invalid_type,
        expected: te.number,
        received: a.parsedType
      }), be;
    }
    let n;
    const i = new Dt();
    for (const a of this._def.checks)
      a.kind === "int" ? Re.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? yI(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.not_finite,
        message: a.message
      }), i.dirty()) : Re.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ue.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ue.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ue.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ue.toString(r));
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
          message: ue.toString(i)
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
  int(e) {
    return this._addCheck({
      kind: "int",
      message: ue.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ue.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ue.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ue.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ue.toString(e)
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
Pi.create = (t) => new Pi({
  checks: [],
  typeName: ye.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Te(t)
});
class Mi extends Oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== te.bigint) {
      const a = this._getOrReturnCtx(e);
      return J(a, {
        code: V.invalid_type,
        expected: te.bigint,
        received: a.parsedType
      }), be;
    }
    let n;
    const i = new Dt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), J(n, {
        code: V.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : Re.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ue.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ue.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ue.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ue.toString(r));
  }
  setLimit(e, r, n, i) {
    return new Mi({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ue.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Mi({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ue.toString(r)
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
Mi.create = (t) => {
  var e;
  return new Mi({
    checks: [],
    typeName: ye.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Te(t)
  });
};
class qc extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== te.boolean) {
      const n = this._getOrReturnCtx(e);
      return J(n, {
        code: V.invalid_type,
        expected: te.boolean,
        received: n.parsedType
      }), be;
    }
    return Ft(e.data);
  }
}
qc.create = (t) => new qc({
  typeName: ye.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Te(t)
});
class za extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== te.date) {
      const a = this._getOrReturnCtx(e);
      return J(a, {
        code: V.invalid_type,
        expected: te.date,
        received: a.parsedType
      }), be;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return J(a, {
        code: V.invalid_date
      }), be;
    }
    const n = new Dt();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (i = this._getOrReturnCtx(e, i), J(i, {
        code: V.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (i = this._getOrReturnCtx(e, i), J(i, {
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
    return new za({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ue.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ue.toString(r)
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
za.create = (t) => new za({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ye.ZodDate,
  ...Te(t)
});
class Uc extends Oe {
  _parse(e) {
    if (this._getType(e) !== te.symbol) {
      const n = this._getOrReturnCtx(e);
      return J(n, {
        code: V.invalid_type,
        expected: te.symbol,
        received: n.parsedType
      }), be;
    }
    return Ft(e.data);
  }
}
Uc.create = (t) => new Uc({
  typeName: ye.ZodSymbol,
  ...Te(t)
});
class Mo extends Oe {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const n = this._getOrReturnCtx(e);
      return J(n, {
        code: V.invalid_type,
        expected: te.undefined,
        received: n.parsedType
      }), be;
    }
    return Ft(e.data);
  }
}
Mo.create = (t) => new Mo({
  typeName: ye.ZodUndefined,
  ...Te(t)
});
class Fo extends Oe {
  _parse(e) {
    if (this._getType(e) !== te.null) {
      const n = this._getOrReturnCtx(e);
      return J(n, {
        code: V.invalid_type,
        expected: te.null,
        received: n.parsedType
      }), be;
    }
    return Ft(e.data);
  }
}
Fo.create = (t) => new Fo({
  typeName: ye.ZodNull,
  ...Te(t)
});
class Bc extends Oe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ft(e.data);
  }
}
Bc.create = (t) => new Bc({
  typeName: ye.ZodAny,
  ...Te(t)
});
class xi extends Oe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ft(e.data);
  }
}
xi.create = (t) => new xi({
  typeName: ye.ZodUnknown,
  ...Te(t)
});
class gn extends Oe {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return J(r, {
      code: V.invalid_type,
      expected: te.never,
      received: r.parsedType
    }), be;
  }
}
gn.create = (t) => new gn({
  typeName: ye.ZodNever,
  ...Te(t)
});
class Hc extends Oe {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const n = this._getOrReturnCtx(e);
      return J(n, {
        code: V.invalid_type,
        expected: te.void,
        received: n.parsedType
      }), be;
    }
    return Ft(e.data);
  }
}
Hc.create = (t) => new Hc({
  typeName: ye.ZodVoid,
  ...Te(t)
});
class mr extends Oe {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== te.array)
      return J(r, {
        code: V.invalid_type,
        expected: te.array,
        received: r.parsedType
      }), be;
    if (i.exactLength !== null) {
      const s = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (s || o) && (J(r, {
        code: s ? V.too_big : V.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: s ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (J(r, {
      code: V.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (J(r, {
      code: V.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((s, o) => i.type._parseAsync(new br(r, s, r.path, o)))).then((s) => Dt.mergeArray(n, s));
    const a = [...r.data].map((s, o) => i.type._parseSync(new br(r, s, r.path, o)));
    return Dt.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new mr({
      ...this._def,
      minLength: { value: e, message: ue.toString(r) }
    });
  }
  max(e, r) {
    return new mr({
      ...this._def,
      maxLength: { value: e, message: ue.toString(r) }
    });
  }
  length(e, r) {
    return new mr({
      ...this._def,
      exactLength: { value: e, message: ue.toString(r) }
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
  typeName: ye.ZodArray,
  ...Te(e)
});
function ai(t) {
  if (t instanceof et) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Nr.create(ai(n));
    }
    return new et({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof mr ? new mr({
      ...t._def,
      type: ai(t.element)
    }) : t instanceof Nr ? Nr.create(ai(t.unwrap())) : t instanceof Hn ? Hn.create(ai(t.unwrap())) : t instanceof Lr ? Lr.create(t.items.map((e) => ai(e))) : t;
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
    if (this._getType(e) !== te.object) {
      const l = this._getOrReturnCtx(e);
      return J(l, {
        code: V.invalid_type,
        expected: te.object,
        received: l.parsedType
      }), be;
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
        o.length > 0 && (J(i, {
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
    }).then((l) => Dt.mergeObjectSync(n, l)) : Dt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ue.errToObj, new et({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, a, s, o;
          const u = (s = (a = (i = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(i, r, n).message) !== null && s !== void 0 ? s : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ue.errToObj(e).message) !== null && o !== void 0 ? o : u
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
      typeName: ye.ZodObject
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
    return ai(this);
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
        for (; a instanceof Nr; )
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
  typeName: ye.ZodObject,
  ...Te(e)
});
et.strictCreate = (t, e) => new et({
  shape: () => t,
  unknownKeys: "strict",
  catchall: gn.create(),
  typeName: ye.ZodObject,
  ...Te(e)
});
et.lazycreate = (t, e) => new et({
  shape: t,
  unknownKeys: "strip",
  catchall: gn.create(),
  typeName: ye.ZodObject,
  ...Te(e)
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
      return J(r, {
        code: V.invalid_union,
        unionErrors: s
      }), be;
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
      return J(r, {
        code: V.invalid_union,
        unionErrors: o
      }), be;
    }
  }
  get options() {
    return this._def.options;
  }
}
Lo.create = (t, e) => new Lo({
  options: t,
  typeName: ye.ZodUnion,
  ...Te(e)
});
const Tr = (t) => t instanceof Vo ? Tr(t.schema) : t instanceof $r ? Tr(t.innerType()) : t instanceof zo ? [t.value] : t instanceof Bn ? t.options : t instanceof Wo ? Re.objectValues(t.enum) : t instanceof qo ? Tr(t._def.innerType) : t instanceof Mo ? [void 0] : t instanceof Fo ? [null] : t instanceof Nr ? [void 0, ...Tr(t.unwrap())] : t instanceof Hn ? [null, ...Tr(t.unwrap())] : t instanceof C0 || t instanceof Bo ? Tr(t.unwrap()) : t instanceof Uo ? Tr(t._def.innerType) : [];
class ld extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.object)
      return J(r, {
        code: V.invalid_type,
        expected: te.object,
        received: r.parsedType
      }), be;
    const n = this.discriminator, i = r.data[n], a = this.optionsMap.get(i);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (J(r, {
      code: V.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), be);
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
      const s = Tr(a.shape[e]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of s) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, a);
      }
    }
    return new ld({
      typeName: ye.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...Te(n)
    });
  }
}
function Qc(t, e) {
  const r = On(t), n = On(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === te.object && n === te.object) {
    const i = Re.objectKeys(e), a = Re.objectKeys(t).filter((o) => i.indexOf(o) !== -1), s = { ...t, ...e };
    for (const o of a) {
      const u = Qc(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      s[o] = u.data;
    }
    return { valid: !0, data: s };
  } else if (r === te.array && n === te.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let a = 0; a < t.length; a++) {
      const s = t[a], o = e[a], u = Qc(s, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === te.date && n === te.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class $o extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (a, s) => {
      if (lm(a) || lm(s))
        return be;
      const o = Qc(a.value, s.value);
      return o.valid ? ((cm(a) || cm(s)) && r.dirty(), { status: r.value, value: o.data }) : (J(n, {
        code: V.invalid_intersection_types
      }), be);
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
  typeName: ye.ZodIntersection,
  ...Te(r)
});
class Lr extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.array)
      return J(n, {
        code: V.invalid_type,
        expected: te.array,
        received: n.parsedType
      }), be;
    if (n.data.length < this._def.items.length)
      return J(n, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), be;
    !this._def.rest && n.data.length > this._def.items.length && (J(n, {
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
    return n.common.async ? Promise.all(a).then((s) => Dt.mergeArray(r, s)) : Dt.mergeArray(r, a);
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
    typeName: ye.ZodTuple,
    rest: null,
    ...Te(e)
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
    if (n.parsedType !== te.object)
      return J(n, {
        code: V.invalid_type,
        expected: te.object,
        received: n.parsedType
      }), be;
    const i = [], a = this._def.keyType, s = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: a._parse(new br(n, o, n.path, o)),
        value: s._parse(new br(n, n.data[o], n.path, o)),
        alwaysSet: o in n.data
      });
    return n.common.async ? Dt.mergeObjectAsync(r, i) : Dt.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Oe ? new jo({
      keyType: e,
      valueType: r,
      typeName: ye.ZodRecord,
      ...Te(n)
    }) : new jo({
      keyType: Or.create(),
      valueType: e,
      typeName: ye.ZodRecord,
      ...Te(r)
    });
  }
}
class Yc extends Oe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.map)
      return J(n, {
        code: V.invalid_type,
        expected: te.map,
        received: n.parsedType
      }), be;
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
            return be;
          (l.status === "dirty" || c.status === "dirty") && r.dirty(), o.set(l.value, c.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of s) {
        const l = u.key, c = u.value;
        if (l.status === "aborted" || c.status === "aborted")
          return be;
        (l.status === "dirty" || c.status === "dirty") && r.dirty(), o.set(l.value, c.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Yc.create = (t, e, r) => new Yc({
  valueType: e,
  keyType: t,
  typeName: ye.ZodMap,
  ...Te(r)
});
class Fi extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.set)
      return J(n, {
        code: V.invalid_type,
        expected: te.set,
        received: n.parsedType
      }), be;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (J(n, {
      code: V.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (J(n, {
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
          return be;
        c.status === "dirty" && r.dirty(), l.add(c.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((u, l) => a._parse(new br(n, u, n.path, l)));
    return n.common.async ? Promise.all(o).then((u) => s(u)) : s(o);
  }
  min(e, r) {
    return new Fi({
      ...this._def,
      minSize: { value: e, message: ue.toString(r) }
    });
  }
  max(e, r) {
    return new Fi({
      ...this._def,
      maxSize: { value: e, message: ue.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Fi.create = (t, e) => new Fi({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ye.ZodSet,
  ...Te(e)
});
class xa extends Oe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.function)
      return J(r, {
        code: V.invalid_type,
        expected: te.function,
        received: r.parsedType
      }), be;
    function n(o, u) {
      return Wc({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          zc(),
          Va
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return Wc({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          zc(),
          Va
        ].filter((l) => !!l),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, s = r.data;
    if (this._def.returns instanceof Wa) {
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
    return new xa({
      ...this._def,
      args: Lr.create(e).rest(xi.create())
    });
  }
  returns(e) {
    return new xa({
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
    return new xa({
      args: e || Lr.create([]).rest(xi.create()),
      returns: r || xi.create(),
      typeName: ye.ZodFunction,
      ...Te(n)
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
  typeName: ye.ZodLazy,
  ...Te(e)
});
class zo extends Oe {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return J(r, {
        received: r.data,
        code: V.invalid_literal,
        expected: this._def.value
      }), be;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
zo.create = (t, e) => new zo({
  value: t,
  typeName: ye.ZodLiteral,
  ...Te(e)
});
function O0(t, e) {
  return new Bn({
    values: t,
    typeName: ye.ZodEnum,
    ...Te(e)
  });
}
class Bn extends Oe {
  constructor() {
    super(...arguments), ua.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return J(r, {
        expected: Re.joinValues(n),
        received: r.parsedType,
        code: V.invalid_type
      }), be;
    }
    if (Po(this, ua) || k0(this, ua, new Set(this._def.values)), !Po(this, ua).has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return J(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: n
      }), be;
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
    return Bn.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return Bn.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
ua = /* @__PURE__ */ new WeakMap();
Bn.create = O0;
class Wo extends Oe {
  constructor() {
    super(...arguments), la.set(this, void 0);
  }
  _parse(e) {
    const r = Re.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== te.string && n.parsedType !== te.number) {
      const i = Re.objectValues(r);
      return J(n, {
        expected: Re.joinValues(i),
        received: n.parsedType,
        code: V.invalid_type
      }), be;
    }
    if (Po(this, la) || k0(this, la, new Set(Re.getValidEnumValues(this._def.values))), !Po(this, la).has(e.data)) {
      const i = Re.objectValues(r);
      return J(n, {
        received: n.data,
        code: V.invalid_enum_value,
        options: i
      }), be;
    }
    return Ft(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
la = /* @__PURE__ */ new WeakMap();
Wo.create = (t, e) => new Wo({
  values: t,
  typeName: ye.ZodNativeEnum,
  ...Te(e)
});
class Wa extends Oe {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.promise && r.common.async === !1)
      return J(r, {
        code: V.invalid_type,
        expected: te.promise,
        received: r.parsedType
      }), be;
    const n = r.parsedType === te.promise ? r.data : Promise.resolve(r.data);
    return Ft(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Wa.create = (t, e) => new Wa({
  type: t,
  typeName: ye.ZodPromise,
  ...Te(e)
});
class $r extends Oe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ye.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null, a = {
      addIssue: (s) => {
        J(n, s), s.fatal ? r.abort() : r.dirty();
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
            return be;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? be : u.status === "dirty" || r.value === "dirty" ? oa(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return be;
        const o = this._def.schema._parseSync({
          data: s,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? be : o.status === "dirty" || r.value === "dirty" ? oa(o.value) : o;
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
        return o.status === "aborted" ? be : (o.status === "dirty" && r.dirty(), s(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? be : (o.status === "dirty" && r.dirty(), s(o.value).then(() => ({ status: r.value, value: o.value }))));
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
  typeName: ye.ZodEffects,
  effect: e,
  ...Te(r)
});
$r.createWithPreprocess = (t, e, r) => new $r({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ye.ZodEffects,
  ...Te(r)
});
class Nr extends Oe {
  _parse(e) {
    return this._getType(e) === te.undefined ? Ft(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nr.create = (t, e) => new Nr({
  innerType: t,
  typeName: ye.ZodOptional,
  ...Te(e)
});
class Hn extends Oe {
  _parse(e) {
    return this._getType(e) === te.null ? Ft(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hn.create = (t, e) => new Hn({
  innerType: t,
  typeName: ye.ZodNullable,
  ...Te(e)
});
class qo extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === te.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
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
  typeName: ye.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Te(e)
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
  typeName: ye.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Te(e)
});
class Zc extends Oe {
  _parse(e) {
    if (this._getType(e) !== te.nan) {
      const n = this._getOrReturnCtx(e);
      return J(n, {
        code: V.invalid_type,
        expected: te.nan,
        received: n.parsedType
      }), be;
    }
    return { status: "valid", value: e.data };
  }
}
Zc.create = (t) => new Zc({
  typeName: ye.ZodNaN,
  ...Te(t)
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
class Cu extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? be : a.status === "dirty" ? (r.dirty(), oa(a.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? be : i.status === "dirty" ? (r.dirty(), {
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
    return new Cu({
      in: e,
      out: r,
      typeName: ye.ZodPipeline
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
  typeName: ye.ZodReadonly,
  ...Te(e)
});
et.lazycreate;
var ye;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(ye || (ye = {}));
const gI = Or.create;
Pi.create;
Zc.create;
Mi.create;
qc.create;
za.create;
Uc.create;
Mo.create;
Fo.create;
Bc.create;
xi.create;
gn.create;
Hc.create;
mr.create;
const bI = et.create;
et.strictCreate;
Lo.create;
ld.create;
$o.create;
Lr.create;
jo.create;
Yc.create;
Fi.create;
xa.create;
Vo.create;
zo.create;
Bn.create;
Wo.create;
Wa.create;
$r.create;
Nr.create;
Hn.create;
$r.createWithPreprocess;
Cu.create;
const wI = Ii`
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
  const { senalysisBusinessId: t } = Y_(), [e, r] = Q_(wI);
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
          console.error(`AI Error: ${f.message}`), Ge.error(f.message, { position: "bottom-right" });
        }), l.generateAiReply.replies;
      } catch {
        return null;
      }
    },
    r
  ];
}
const EI = [
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
], xI = {
  primary: ["sfs-text-white", "sfs-bg-spillover-darkRed", "sfs-hover:bg-spillover-brandRed"],
  secondary: ["sfs-text-slate-700", "sfs-bg-gray-200", "sfs-hover:bg-gray-300"],
  danger: ["sfs-text-white", "sfs-bg-red-500", "sfs-hover:bg-red-600"],
  warning: ["sfs-text-white", "sfs-bg-yellow-500", "sfs-hover:bg-yellow-600"],
  success: ["sfs-text-white", "sfs-bg-green-500", "sfs-hover:bg-green-600"],
  info: ["sfs-text-white", "sfs-bg-blue-500", "sfs-hover:bg-blue-600"]
}, TI = {
  xs: ["sfs-px-1", "sfs-py-0.5", "sfs-text-xs", "sfs-rounded"],
  sm: ["sfs-px-2", "sfs-py-1", "sfs-text-sm", "sfs-rounded"],
  md: ["sfs-px-3", "sfs-py-2", "sfs-text-sm", "sfs-rounded-md"],
  lg: ["sfs-px-3", "sfs-py-2", "sfs-text-lg", "sfs-rounded-lg"]
}, kI = ["sfs-cursor-not-allowed", "sfs-opacity-50"];
function _I(t, e, r, n) {
  const i = [...EI];
  return i.push(...xI[e]), i.push(...TI[r]), t && i.push(...kI), n && i.push(n), i.join(" ");
}
const N0 = Ho(function({
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
  const d = (v) => {
    if (n) {
      v.preventDefault();
      return;
    }
    r && r(v);
  }, p = _I(n, a, s, l);
  let m;
  return u ? m = { name: "spinner", spin: !0 } : m = typeof o == "string" ? { name: o } : o, /* @__PURE__ */ X.jsxs(h, { ref: f, onClick: d, className: p, ...c, children: [
    o && /* @__PURE__ */ X.jsx(Ri, { ...m }),
    e
  ] });
});
function A0({ option: t, onClick: e }) {
  const r = () => {
    e && e(t);
  };
  return /* @__PURE__ */ X.jsx("div", { className: `sfs-p-3 sfs-bg-gray-100 sfs-rounded-md sfs-text-gray-600 hover:sfs-bg-gray-200 sfs-transition sfs-duration-200 sfs-text-sm ${e && "sfs-cursor-pointer"} sfs-whitespace-pre-line`, onClick: r, children: t });
}
const SI = bI({
  context: gI().min(5, "Please provide some more context")
});
function OI({ onOptionSelected: t }) {
  const [e, { generatedOptions: r, loading: n }] = I0(), {
    register: i,
    handleSubmit: a,
    formState: { errors: s }
  } = BC({ resolver: eI(SI) }), o = ({ context: l }) => e("post_caption", l, { n: 3 }), u = r || [];
  return /* @__PURE__ */ X.jsxs("form", { onSubmit: a(o), className: "sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border", children: [
    /* @__PURE__ */ X.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-1", children: [
      /* @__PURE__ */ X.jsx("label", { className: "sfs-text-sm sfs-text-gray-700", children: "Give us some context..." }),
      /* @__PURE__ */ X.jsx("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4", children: /* @__PURE__ */ X.jsx("textarea", { className: "sfs-box-border sfs-w-full sfs-h-20 sfs-border sfs-border-gray-300 sfs-rounded-md sfs-p-2", ...i("context") }) }),
      s.context && /* @__PURE__ */ X.jsx("div", { className: "sfs-text-red-500 sfs-text-sm", children: s.context.message })
    ] }),
    /* @__PURE__ */ X.jsx(
      N0,
      {
        type: "submit",
        disabled: n,
        context: "primary",
        icon: "wand-magic-sparkles",
        loading: n,
        children: "Generate Caption"
      }
    ),
    u.length > 0 && /* @__PURE__ */ X.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-mt-4", children: [
      /* @__PURE__ */ X.jsx("div", { className: "sfs-text-gray-700", children: "Pick an option or try again for new options" }),
      u.map((l, c) => /* @__PURE__ */ X.jsx(A0, { option: l, onClick: t }, c))
    ] })
  ] });
}
function dr({ type: t, text: e, onOptionSelected: r, loadingMsg: n, children: i, autoRun: a = !0, retry: s = !0, n: o = 1 }) {
  const [u, { generatedOptions: l, loading: c }] = I0(), f = () => {
    e && u(t, e, { n: o });
  };
  return Le(() => {
    a && f();
  }, []), /* @__PURE__ */ X.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border", children: [
    i,
    c ? /* @__PURE__ */ X.jsxs("div", { className: "sfs-text-gray-700 sfs-flex sfs-flex-row sfs-items-center sfs-gap-2", children: [
      /* @__PURE__ */ X.jsx(Ri, { name: "spinner", spin: !0 }),
      n || "Loading..."
    ] }) : s && /* @__PURE__ */ X.jsx(
      N0,
      {
        context: "secondary",
        size: "sm",
        icon: "rotate",
        onClick: f,
        children: "Retry"
      }
    ),
    l == null ? void 0 : l.map((h, d) => /* @__PURE__ */ X.jsx(A0, { option: h, onClick: r }, d))
  ] });
}
function CI({ message: t }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "translate",
      text: t,
      loadingMsg: "Translating...",
      retry: !1
    }
  );
}
function II({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "spellcheck",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Checking spelling..."
    }
  );
}
function NI({ message: t }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "summarize",
      text: t,
      loadingMsg: "Summarizing...",
      retry: !1
    }
  );
}
function AI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "improve_writing",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Improving writing..."
    }
  );
}
function DI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "make_longer",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making text longer..."
    }
  );
}
function RI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "make_shorter",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making text shorter..."
    }
  );
}
function PI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "make_more_formal",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making more formal..."
    }
  );
}
function MI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "make_more_casual",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making more casual..."
    }
  );
}
function FI({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
    dr,
    {
      type: "continue_writing",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Continuing your text..."
    }
  );
}
function LI({ message: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
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
function $I({ message: t, onOptionSelected: e }) {
  return /* @__PURE__ */ X.jsx(
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
    component: OI
  },
  {
    name: "GenerateReviewReply",
    title: "Generate Reply",
    icon: "star",
    component: LI
  },
  {
    name: "GenerateCommentReply",
    title: "Generate Reply",
    icon: "reply",
    component: $I
  },
  {
    name: "Translate",
    title: "Translate",
    icon: "language",
    component: CI
  },
  {
    name: "SpellCheck",
    title: "Fix Spelling & Grammar",
    icon: "spell-check",
    component: II
  },
  {
    name: "Summarize",
    title: "Summarize",
    icon: "list",
    component: NI
  },
  {
    name: "ImproveWriting",
    title: "Improve Writing",
    icon: "feather",
    component: AI
  },
  {
    name: "MakeLonger",
    title: "Make Longer",
    icon: "circle-plus",
    component: DI
  },
  {
    name: "MakeShorter",
    title: "Make Shorter",
    icon: "circle-minus",
    component: RI
  },
  {
    name: "MakeMoreFormal",
    title: "Make More Formal",
    icon: "user-tie",
    component: PI
  },
  {
    name: "MakeMoreCasual",
    title: "Make More Casual",
    icon: "face-smile-beam",
    component: MI
  },
  {
    name: "ContinueWriting",
    title: "Continue Writing",
    icon: "ellipsis",
    component: FI
  }
], jI = D0.map((t) => t.name);
function VI({ message: t, text: e, onOptionSelected: r, tools: n = jI }) {
  const i = D0.filter((a) => n.includes(a.name)).map((a) => /* @__PURE__ */ X.jsx(h0, { title: a.title, icon: a.icon, children: /* @__PURE__ */ X.jsx(a.component, { message: t, text: e, onOptionSelected: r }) }, a.name));
  return /* @__PURE__ */ X.jsx(SC, { title: "AI Helpers", icon: "wand-magic-sparkles", children: i });
}
function HI({ message: t, text: e, onOptionSelected: r, className: n, children: i }) {
  return /* @__PURE__ */ X.jsxs(VO, { children: [
    /* @__PURE__ */ X.jsx(Xg, { className: `sfs-border-0 sfs-bg-transparent sfs-cursor-pointer focus:sfs-outline-none ${n || ""}`, title: "AI Helpers", children: i || /* @__PURE__ */ X.jsx(Ri, { name: "wand-magic-sparkles", className: "sfs-text-gray-700", size: "lg" }) }),
    /* @__PURE__ */ X.jsx(
      XO,
      {
        enter: "sfs-transition sfs-ease-out sfs-duration-200",
        enterFrom: "sfs-opacity-0 sfs-translate-y-1",
        enterTo: "sfs-opacity-100 sfs-translate-y-0",
        leave: "sfs-transition sfs-ease-in sfs-duration-150",
        leaveFrom: "sfs-opacity-100 sfs-translate-y-0",
        leaveTo: "sfs-opacity-0 sfs-translate-y-1",
        children: /* @__PURE__ */ X.jsx(e0, { anchor: { to: "bottom end", gap: "10px" }, className: "sfs-w-80 sfs-max-h-96 sfs-border sfs-border-gray-300 sfs-border-solid sfs-rounded-md sfs-shadow-sm", children: /* @__PURE__ */ X.jsx(
          VI,
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
  VI as AITextHelpers,
  HI as AITextHelpersButton,
  UI as SpilloverProvider
};
