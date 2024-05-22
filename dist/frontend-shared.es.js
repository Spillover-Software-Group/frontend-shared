import * as Wi from "react";
import H, { forwardRef as oo, useEffect as $e, useReducer as Yh, useState as bt, useRef as Ie, isValidElement as _n, cloneElement as Ss, useLayoutEffect as Zh, useCallback as mn, createContext as Dt, useContext as wt, useMemo as gt, Fragment as xn, createElement as tg, createRef as ff } from "react";
import { createPortal as rg } from "react-dom";
function ng(t, e) {
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
function df(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function K(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? df(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : df(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Os(t) {
  "@babel/helpers - typeof";
  return Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Os(t);
}
function ig(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ag(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function sg(t, e, r) {
  return e && ag(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function ft(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Gc(t, e) {
  return ug(t) || lg(t, e) || Gh(t, e) || dg();
}
function wa(t) {
  return og(t) || cg(t) || Gh(t) || fg();
}
function og(t) {
  if (Array.isArray(t))
    return Uu(t);
}
function ug(t) {
  if (Array.isArray(t))
    return t;
}
function cg(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function lg(t, e) {
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
function Gh(t, e) {
  if (t) {
    if (typeof t == "string")
      return Uu(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Uu(t, e);
  }
}
function Uu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function fg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var hf = function() {
}, Jc = {}, Jh = {}, Kh = null, Xh = {
  mark: hf,
  measure: hf
};
try {
  typeof window < "u" && (Jc = window), typeof document < "u" && (Jh = document), typeof MutationObserver < "u" && (Kh = MutationObserver), typeof performance < "u" && (Xh = performance);
} catch {
}
var hg = Jc.navigator || {}, pf = hg.userAgent, mf = pf === void 0 ? "" : pf, Gr = Jc, Ye = Jh, vf = Kh, ja = Xh;
Gr.document;
var Ar = !!Ye.documentElement && !!Ye.head && typeof Ye.addEventListener == "function" && typeof Ye.createElement == "function", ep = ~mf.indexOf("MSIE") || ~mf.indexOf("Trident/"), Va, $a, za, qa, Ua, kr = "___FONT_AWESOME___", Wu = 16, tp = "fa", rp = "svg-inline--fa", Tn = "data-fa-i2svg", Bu = "data-fa-pseudo-element", pg = "data-fa-pseudo-element-pending", Kc = "data-prefix", Xc = "data-icon", yf = "fontawesome-i2svg", mg = "async", vg = ["HTML", "HEAD", "STYLE", "SCRIPT"], np = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), Qe = "classic", Ke = "sharp", el = [Qe, Ke];
function Ea(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[Qe];
    }
  });
}
var ra = Ea((Va = {}, ft(Va, Qe, {
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
}), ft(Va, Ke, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Va)), na = Ea(($a = {}, ft($a, Qe, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ft($a, Ke, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), $a)), ia = Ea((za = {}, ft(za, Qe, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ft(za, Ke, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), za)), yg = Ea((qa = {}, ft(qa, Qe, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ft(qa, Ke, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), qa)), gg = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ip = "fa-layers-text", bg = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, wg = Ea((Ua = {}, ft(Ua, Qe, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ft(Ua, Ke, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Ua)), ap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Eg = ap.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), xg = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], vn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, aa = /* @__PURE__ */ new Set();
Object.keys(na[Qe]).map(aa.add.bind(aa));
Object.keys(na[Ke]).map(aa.add.bind(aa));
var kg = [].concat(el, wa(aa), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", vn.GROUP, vn.SWAP_OPACITY, vn.PRIMARY, vn.SECONDARY]).concat(ap.map(function(t) {
  return "".concat(t, "x");
})).concat(Eg.map(function(t) {
  return "w-".concat(t);
})), Bi = Gr.FontAwesomeConfig || {};
function _g(t) {
  var e = Ye.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function Tg(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (Ye && typeof Ye.querySelector == "function") {
  var Sg = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Sg.forEach(function(t) {
    var e = Gc(t, 2), r = e[0], n = e[1], i = Tg(_g(r));
    i != null && (Bi[n] = i);
  });
}
var sp = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: tp,
  replacementClass: rp,
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
Bi.familyPrefix && (Bi.cssPrefix = Bi.familyPrefix);
var ai = K(K({}, sp), Bi);
ai.autoReplaceSvg || (ai.observeMutations = !1);
var ne = {};
Object.keys(sp).forEach(function(t) {
  Object.defineProperty(ne, t, {
    enumerable: !0,
    set: function(r) {
      ai[t] = r, Hi.forEach(function(n) {
        return n(ne);
      });
    },
    get: function() {
      return ai[t];
    }
  });
});
Object.defineProperty(ne, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ai.cssPrefix = e, Hi.forEach(function(r) {
      return r(ne);
    });
  },
  get: function() {
    return ai.cssPrefix;
  }
});
Gr.FontAwesomeConfig = ne;
var Hi = [];
function Og(t) {
  return Hi.push(t), function() {
    Hi.splice(Hi.indexOf(t), 1);
  };
}
var Pr = Wu, ir = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ig(t) {
  if (!(!t || !Ar)) {
    var e = Ye.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = Ye.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], s = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = a);
    }
    return Ye.head.insertBefore(e, n), t;
  }
}
var Cg = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function sa() {
  for (var t = 12, e = ""; t-- > 0; )
    e += Cg[Math.random() * 62 | 0];
  return e;
}
function gi(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function tl(t) {
  return t.classList ? gi(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function op(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ng(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(op(t[r]), '" ');
  }, "").trim();
}
function uo(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function rl(t) {
  return t.size !== ir.size || t.x !== ir.x || t.y !== ir.y || t.rotate !== ir.rotate || t.flipX || t.flipY;
}
function Ag(t) {
  var e = t.transform, r = t.containerWidth, n = t.iconWidth, i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), s = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), o = "rotate(".concat(e.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(s, " ").concat(o)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: c
  };
}
function Dg(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? Wu : r, i = t.height, a = i === void 0 ? Wu : i, s = t.startCentered, o = s === void 0 ? !1 : s, u = "";
  return o && ep ? u += "translate(".concat(e.x / Pr - n / 2, "em, ").concat(e.y / Pr - a / 2, "em) ") : o ? u += "translate(calc(-50% + ".concat(e.x / Pr, "em), calc(-50% + ").concat(e.y / Pr, "em)) ") : u += "translate(".concat(e.x / Pr, "em, ").concat(e.y / Pr, "em) "), u += "scale(".concat(e.size / Pr * (e.flipX ? -1 : 1), ", ").concat(e.size / Pr * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var Rg = `:root, :host {
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
function up() {
  var t = tp, e = rp, r = ne.cssPrefix, n = ne.replacementClass, i = Rg;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), s = new RegExp("\\--".concat(t, "\\-"), "g"), o = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(o, ".".concat(n));
  }
  return i;
}
var gf = !1;
function Qo() {
  ne.autoAddCss && !gf && (Ig(up()), gf = !0);
}
var Pg = {
  mixout: function() {
    return {
      dom: {
        css: up,
        insertCss: Qo
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Qo();
      },
      beforeI2svg: function() {
        Qo();
      }
    };
  }
}, _r = Gr || {};
_r[kr] || (_r[kr] = {});
_r[kr].styles || (_r[kr].styles = {});
_r[kr].hooks || (_r[kr].hooks = {});
_r[kr].shims || (_r[kr].shims = []);
var Zt = _r[kr], cp = [], Mg = function t() {
  Ye.removeEventListener("DOMContentLoaded", t), Is = 1, cp.map(function(e) {
    return e();
  });
}, Is = !1;
Ar && (Is = (Ye.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ye.readyState), Is || Ye.addEventListener("DOMContentLoaded", Mg));
function Fg(t) {
  Ar && (Is ? setTimeout(t, 0) : cp.push(t));
}
function xa(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? op(t) : "<".concat(e, " ").concat(Ng(n), ">").concat(a.map(xa).join(""), "</").concat(e, ">");
}
function bf(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var Yo = function(e, r, n, i) {
  var a = Object.keys(e), s = a.length, o = r, u, c, l;
  for (n === void 0 ? (u = 1, l = e[a[0]]) : (u = 0, l = n); u < s; u++)
    c = a[u], l = o(l, e[c], c, e);
  return l;
};
function Lg(t) {
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
function Hu(t) {
  var e = Lg(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function jg(t, e) {
  var r = t.length, n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function wf(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], i = !!n.icon;
    return i ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function Qu(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, i = n === void 0 ? !1 : n, a = wf(e);
  typeof Zt.hooks.addPack == "function" && !i ? Zt.hooks.addPack(t, wf(e)) : Zt.styles[t] = K(K({}, Zt.styles[t] || {}), a), t === "fas" && Qu("fa", e);
}
var Wa, Ba, Ha, qn = Zt.styles, Vg = Zt.shims, $g = (Wa = {}, ft(Wa, Qe, Object.values(ia[Qe])), ft(Wa, Ke, Object.values(ia[Ke])), Wa), nl = null, lp = {}, fp = {}, dp = {}, hp = {}, pp = {}, zg = (Ba = {}, ft(Ba, Qe, Object.keys(ra[Qe])), ft(Ba, Ke, Object.keys(ra[Ke])), Ba);
function qg(t) {
  return ~kg.indexOf(t);
}
function Ug(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !qg(i) ? i : null;
}
var mp = function() {
  var e = function(a) {
    return Yo(qn, function(s, o, u) {
      return s[u] = Yo(o, a, {}), s;
    }, {});
  };
  lp = e(function(i, a, s) {
    if (a[3] && (i[a[3]] = s), a[2]) {
      var o = a[2].filter(function(u) {
        return typeof u == "number";
      });
      o.forEach(function(u) {
        i[u.toString(16)] = s;
      });
    }
    return i;
  }), fp = e(function(i, a, s) {
    if (i[s] = s, a[2]) {
      var o = a[2].filter(function(u) {
        return typeof u == "string";
      });
      o.forEach(function(u) {
        i[u] = s;
      });
    }
    return i;
  }), pp = e(function(i, a, s) {
    var o = a[2];
    return i[s] = s, o.forEach(function(u) {
      i[u] = s;
    }), i;
  });
  var r = "far" in qn || ne.autoFetchSvg, n = Yo(Vg, function(i, a) {
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
  dp = n.names, hp = n.unicodes, nl = co(ne.styleDefault, {
    family: ne.familyDefault
  });
};
Og(function(t) {
  nl = co(t.styleDefault, {
    family: ne.familyDefault
  });
});
mp();
function il(t, e) {
  return (lp[t] || {})[e];
}
function Wg(t, e) {
  return (fp[t] || {})[e];
}
function yn(t, e) {
  return (pp[t] || {})[e];
}
function vp(t) {
  return dp[t] || {
    prefix: null,
    iconName: null
  };
}
function Bg(t) {
  var e = hp[t], r = il("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Jr() {
  return nl;
}
var al = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function co(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? Qe : r, i = ra[n][t], a = na[n][t] || na[n][i], s = t in Zt.styles ? t : null;
  return a || s || null;
}
var Ef = (Ha = {}, ft(Ha, Qe, Object.keys(ia[Qe])), ft(Ha, Ke, Object.keys(ia[Ke])), Ha);
function lo(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, ft(e, Qe, "".concat(ne.cssPrefix, "-").concat(Qe)), ft(e, Ke, "".concat(ne.cssPrefix, "-").concat(Ke)), e), s = null, o = Qe;
  (t.includes(a[Qe]) || t.some(function(c) {
    return Ef[Qe].includes(c);
  })) && (o = Qe), (t.includes(a[Ke]) || t.some(function(c) {
    return Ef[Ke].includes(c);
  })) && (o = Ke);
  var u = t.reduce(function(c, l) {
    var f = Ug(ne.cssPrefix, l);
    if (qn[l] ? (l = $g[o].includes(l) ? yg[o][l] : l, s = l, c.prefix = l) : zg[o].indexOf(l) > -1 ? (s = l, c.prefix = co(l, {
      family: o
    })) : f ? c.iconName = f : l !== ne.replacementClass && l !== a[Qe] && l !== a[Ke] && c.rest.push(l), !i && c.prefix && c.iconName) {
      var d = s === "fa" ? vp(c.iconName) : {}, h = yn(c.prefix, c.iconName);
      d.prefix && (s = null), c.iconName = d.iconName || h || c.iconName, c.prefix = d.prefix || c.prefix, c.prefix === "far" && !qn.far && qn.fas && !ne.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, al());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && o === Ke && (qn.fass || ne.autoFetchSvg) && (u.prefix = "fass", u.iconName = yn(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || s === "fa") && (u.prefix = Jr() || "fas"), u;
}
var Hg = /* @__PURE__ */ function() {
  function t() {
    ig(this, t), this.definitions = {};
  }
  return sg(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var s = i.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(o) {
        r.definitions[o] = K(K({}, r.definitions[o] || {}), s[o]), Qu(o, s[o]);
        var u = ia[Qe][o];
        u && Qu(u, s[o]), mp();
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
        var s = i[a], o = s.prefix, u = s.iconName, c = s.icon, l = c[2];
        r[o] || (r[o] = {}), l.length > 0 && l.forEach(function(f) {
          typeof f == "string" && (r[o][f] = c);
        }), r[o][u] = c;
      }), r;
    }
  }]), t;
}(), xf = [], Un = {}, Jn = {}, Qg = Object.keys(Jn);
function Yg(t, e) {
  var r = e.mixoutsTo;
  return xf = t, Un = {}, Object.keys(Jn).forEach(function(n) {
    Qg.indexOf(n) === -1 && delete Jn[n];
  }), xf.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(s) {
      typeof i[s] == "function" && (r[s] = i[s]), Os(i[s]) === "object" && Object.keys(i[s]).forEach(function(o) {
        r[s] || (r[s] = {}), r[s][o] = i[s][o];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(s) {
        Un[s] || (Un[s] = []), Un[s].push(a[s]);
      });
    }
    n.provides && n.provides(Jn);
  }), r;
}
function Yu(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = Un[t] || [];
  return a.forEach(function(s) {
    e = s.apply(null, [e].concat(n));
  }), e;
}
function Sn(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = Un[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function Tr() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Jn[t] ? Jn[t].apply(null, e) : void 0;
}
function Zu(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || Jr();
  if (e)
    return e = yn(r, e) || e, bf(yp.definitions, r, e) || bf(Zt.styles, r, e);
}
var yp = new Hg(), Zg = function() {
  ne.autoReplaceSvg = !1, ne.observeMutations = !1, Sn("noAuto");
}, Gg = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ar ? (Sn("beforeI2svg", e), Tr("pseudoElements2svg", e), Tr("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    ne.autoReplaceSvg === !1 && (ne.autoReplaceSvg = !0), ne.observeMutations = !0, Fg(function() {
      Kg({
        autoReplaceSvgRoot: r
      }), Sn("watch", e);
    });
  }
}, Jg = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Os(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: yn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = co(e[0]);
      return {
        prefix: n,
        iconName: yn(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ne.cssPrefix, "-")) > -1 || e.match(gg))) {
      var i = lo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || Jr(),
        iconName: yn(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = Jr();
      return {
        prefix: a,
        iconName: yn(a, e) || e
      };
    }
  }
}, Mt = {
  noAuto: Zg,
  config: ne,
  dom: Gg,
  parse: Jg,
  library: yp,
  findIconDefinition: Zu,
  toHtml: xa
}, Kg = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? Ye : r;
  (Object.keys(Zt.styles).length > 0 || ne.autoFetchSvg) && Ar && ne.autoReplaceSvg && Mt.dom.i2svg({
    node: n
  });
};
function fo(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return xa(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (Ar) {
        var n = Ye.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Xg(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, s = t.transform;
  if (rl(s) && r.found && !n.found) {
    var o = r.width, u = r.height, c = {
      x: o / u / 2,
      y: 0.5
    };
    i.style = uo(K(K({}, a), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function e0(t) {
  var e = t.prefix, r = t.iconName, n = t.children, i = t.attributes, a = t.symbol, s = a === !0 ? "".concat(e, "-").concat(ne.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: K(K({}, i), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function sl(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, s = t.transform, o = t.symbol, u = t.title, c = t.maskId, l = t.titleId, f = t.extra, d = t.watchable, h = d === void 0 ? !1 : d, p = n.found ? n : r, v = p.width, m = p.height, y = i === "fak", g = [ne.replacementClass, a ? "".concat(ne.cssPrefix, "-").concat(a) : ""].filter(function(A) {
    return f.classes.indexOf(A) === -1;
  }).filter(function(A) {
    return A !== "" || !!A;
  }).concat(f.classes).join(" "), w = {
    children: [],
    attributes: K(K({}, f.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: g,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(m)
    })
  }, k = y && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(v / m * 16 * 0.0625, "em")
  } : {};
  h && (w.attributes[Tn] = ""), u && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(l || sa())
    },
    children: [u]
  }), delete w.attributes.title);
  var b = K(K({}, w), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: c,
    transform: s,
    symbol: o,
    styles: K(K({}, k), f.styles)
  }), S = n.found && r.found ? Tr("generateAbstractMask", b) || {
    children: [],
    attributes: {}
  } : Tr("generateAbstractIcon", b) || {
    children: [],
    attributes: {}
  }, D = S.children, N = S.attributes;
  return b.children = D, b.attributes = N, o ? e0(b) : Xg(b);
}
function kf(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, s = t.extra, o = t.watchable, u = o === void 0 ? !1 : o, c = K(K(K({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  u && (c[Tn] = "");
  var l = K({}, s.styles);
  rl(i) && (l.transform = Dg({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), l["-webkit-transform"] = l.transform);
  var f = uo(l);
  f.length > 0 && (c.style = f);
  var d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), a && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), d;
}
function t0(t) {
  var e = t.content, r = t.title, n = t.extra, i = K(K(K({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = uo(n.styles);
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
var Zo = Zt.styles;
function Gu(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = Gc(n, 1), a = i[0], s = null;
  return Array.isArray(a) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(ne.cssPrefix, "-").concat(vn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ne.cssPrefix, "-").concat(vn.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ne.cssPrefix, "-").concat(vn.PRIMARY),
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
var r0 = {
  found: !1,
  width: 512,
  height: 512
};
function n0(t, e) {
  !np && !ne.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Ju(t, e) {
  var r = e;
  return e === "fa" && ne.styleDefault !== null && (e = Jr()), new Promise(function(n, i) {
    if (Tr("missingIconAbstract"), r === "fa") {
      var a = vp(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Zo[e] && Zo[e][t]) {
      var s = Zo[e][t];
      return n(Gu(s));
    }
    n0(t, e), n(K(K({}, r0), {}, {
      icon: ne.showMissingIcons && t ? Tr("missingIconAbstract") || {} : {}
    }));
  });
}
var _f = function() {
}, Ku = ne.measurePerformance && ja && ja.mark && ja.measure ? ja : {
  mark: _f,
  measure: _f
}, Li = 'FA "6.5.2"', i0 = function(e) {
  return Ku.mark("".concat(Li, " ").concat(e, " begins")), function() {
    return gp(e);
  };
}, gp = function(e) {
  Ku.mark("".concat(Li, " ").concat(e, " ends")), Ku.measure("".concat(Li, " ").concat(e), "".concat(Li, " ").concat(e, " begins"), "".concat(Li, " ").concat(e, " ends"));
}, ol = {
  begin: i0,
  end: gp
}, ds = function() {
};
function Tf(t) {
  var e = t.getAttribute ? t.getAttribute(Tn) : null;
  return typeof e == "string";
}
function a0(t) {
  var e = t.getAttribute ? t.getAttribute(Kc) : null, r = t.getAttribute ? t.getAttribute(Xc) : null;
  return e && r;
}
function s0(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(ne.replacementClass);
}
function o0() {
  if (ne.autoReplaceSvg === !0)
    return hs.replace;
  var t = hs[ne.autoReplaceSvg];
  return t || hs.replace;
}
function u0(t) {
  return Ye.createElementNS("http://www.w3.org/2000/svg", t);
}
function c0(t) {
  return Ye.createElement(t);
}
function bp(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? u0 : c0 : r;
  if (typeof t == "string")
    return Ye.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(s) {
    i.setAttribute(s, t.attributes[s]);
  });
  var a = t.children || [];
  return a.forEach(function(s) {
    i.appendChild(bp(s, {
      ceFn: n
    }));
  }), i;
}
function l0(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var hs = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(bp(i), r);
      }), r.getAttribute(Tn) === null && ne.keepOriginalSource) {
        var n = Ye.createComment(l0(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~tl(r).indexOf(ne.replacementClass))
      return hs.replace(e);
    var i = new RegExp("".concat(ne.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var a = n[0].attributes.class.split(" ").reduce(function(o, u) {
        return u === ne.replacementClass || u.match(i) ? o.toSvg.push(u) : o.toNode.push(u), o;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", a.toNode.join(" "));
    }
    var s = n.map(function(o) {
      return xa(o);
    }).join(`
`);
    r.setAttribute(Tn, ""), r.innerHTML = s;
  }
};
function Sf(t) {
  t();
}
function wp(t, e) {
  var r = typeof e == "function" ? e : ds;
  if (t.length === 0)
    r();
  else {
    var n = Sf;
    ne.mutateApproach === mg && (n = Gr.requestAnimationFrame || Sf), n(function() {
      var i = o0(), a = ol.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var ul = !1;
function Ep() {
  ul = !0;
}
function Xu() {
  ul = !1;
}
var Cs = null;
function Of(t) {
  if (vf && ne.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? ds : e, n = t.nodeCallback, i = n === void 0 ? ds : n, a = t.pseudoElementsCallback, s = a === void 0 ? ds : a, o = t.observeMutationsRoot, u = o === void 0 ? Ye : o;
    Cs = new vf(function(c) {
      if (!ul) {
        var l = Jr();
        gi(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !Tf(f.addedNodes[0]) && (ne.searchPseudoElements && s(f.target), r(f.target)), f.type === "attributes" && f.target.parentNode && ne.searchPseudoElements && s(f.target.parentNode), f.type === "attributes" && Tf(f.target) && ~xg.indexOf(f.attributeName))
            if (f.attributeName === "class" && a0(f.target)) {
              var d = lo(tl(f.target)), h = d.prefix, p = d.iconName;
              f.target.setAttribute(Kc, h || l), p && f.target.setAttribute(Xc, p);
            } else
              s0(f.target) && i(f.target);
        });
      }
    }), Ar && Cs.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function f0() {
  Cs && Cs.disconnect();
}
function d0(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), s = a[0], o = a.slice(1);
    return s && o.length > 0 && (n[s] = o.join(":").trim()), n;
  }, {})), r;
}
function h0(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = lo(tl(t));
  return i.prefix || (i.prefix = Jr()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Wg(i.prefix, t.innerText) || il(i.prefix, Hu(t.innerText))), !i.iconName && ne.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function p0(t) {
  var e = gi(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return ne.autoA11y && (r ? e["aria-labelledby"] = "".concat(ne.replacementClass, "-title-").concat(n || sa()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function m0() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ir,
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
function If(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = h0(t), n = r.iconName, i = r.prefix, a = r.rest, s = p0(t), o = Yu("parseNodeAttributes", {}, t), u = e.styleParser ? d0(t) : [];
  return K({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: ir,
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
var v0 = Zt.styles;
function xp(t) {
  var e = ne.autoReplaceSvg === "nest" ? If(t, {
    styleParser: !1
  }) : If(t);
  return ~e.extra.classes.indexOf(ip) ? Tr("generateLayersText", t, e) : Tr("generateSvgReplacementMutation", t, e);
}
var Kr = /* @__PURE__ */ new Set();
el.map(function(t) {
  Kr.add("fa-".concat(t));
});
Object.keys(ra[Qe]).map(Kr.add.bind(Kr));
Object.keys(ra[Ke]).map(Kr.add.bind(Kr));
Kr = wa(Kr);
function Cf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ar)
    return Promise.resolve();
  var r = Ye.documentElement.classList, n = function(f) {
    return r.add("".concat(yf, "-").concat(f));
  }, i = function(f) {
    return r.remove("".concat(yf, "-").concat(f));
  }, a = ne.autoFetchSvg ? Kr : el.map(function(l) {
    return "fa-".concat(l);
  }).concat(Object.keys(v0));
  a.includes("fa") || a.push("fa");
  var s = [".".concat(ip, ":not([").concat(Tn, "])")].concat(a.map(function(l) {
    return ".".concat(l, ":not([").concat(Tn, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var o = [];
  try {
    o = gi(t.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var u = ol.begin("onTree"), c = o.reduce(function(l, f) {
    try {
      var d = xp(f);
      d && l.push(d);
    } catch (h) {
      np || h.name === "MissingIcon" && console.error(h);
    }
    return l;
  }, []);
  return new Promise(function(l, f) {
    Promise.all(c).then(function(d) {
      wp(d, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), l();
      });
    }).catch(function(d) {
      u(), f(d);
    });
  });
}
function y0(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  xp(t).then(function(r) {
    r && wp([r], e);
  });
}
function g0(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Zu(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : Zu(i || {})), t(n, K(K({}, r), {}, {
      mask: i
    }));
  };
}
var b0 = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? ir : n, a = r.symbol, s = a === void 0 ? !1 : a, o = r.mask, u = o === void 0 ? null : o, c = r.maskId, l = c === void 0 ? null : c, f = r.title, d = f === void 0 ? null : f, h = r.titleId, p = h === void 0 ? null : h, v = r.classes, m = v === void 0 ? [] : v, y = r.attributes, g = y === void 0 ? {} : y, w = r.styles, k = w === void 0 ? {} : w;
  if (e) {
    var b = e.prefix, S = e.iconName, D = e.icon;
    return fo(K({
      type: "icon"
    }, e), function() {
      return Sn("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), ne.autoA11y && (d ? g["aria-labelledby"] = "".concat(ne.replacementClass, "-title-").concat(p || sa()) : (g["aria-hidden"] = "true", g.focusable = "false")), sl({
        icons: {
          main: Gu(D),
          mask: u ? Gu(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: b,
        iconName: S,
        transform: K(K({}, ir), i),
        symbol: s,
        title: d,
        maskId: l,
        titleId: p,
        extra: {
          attributes: g,
          styles: k,
          classes: m
        }
      });
    });
  }
}, w0 = {
  mixout: function() {
    return {
      icon: g0(b0)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Cf, r.nodeCallback = y0, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? Ye : n, a = r.callback, s = a === void 0 ? function() {
      } : a;
      return Cf(i, s);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, s = n.titleId, o = n.prefix, u = n.transform, c = n.symbol, l = n.mask, f = n.maskId, d = n.extra;
      return new Promise(function(h, p) {
        Promise.all([Ju(i, o), l.iconName ? Ju(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var m = Gc(v, 2), y = m[0], g = m[1];
          h([r, sl({
            icons: {
              main: y,
              mask: g
            },
            prefix: o,
            iconName: i,
            transform: u,
            symbol: c,
            maskId: f,
            title: a,
            titleId: s,
            extra: d,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(r) {
      var n = r.children, i = r.attributes, a = r.main, s = r.transform, o = r.styles, u = uo(o);
      u.length > 0 && (i.style = u);
      var c;
      return rl(s) && (c = Tr("generateAbstractTransformGrouping", {
        main: a,
        transform: s,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(c || a.icon), {
        children: n,
        attributes: i
      };
    };
  }
}, E0 = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return fo({
          type: "layer"
        }, function() {
          Sn("beforeDOMElementCreation", {
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
              class: ["".concat(ne.cssPrefix, "-layers")].concat(wa(a)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, x0 = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, s = n.classes, o = s === void 0 ? [] : s, u = n.attributes, c = u === void 0 ? {} : u, l = n.styles, f = l === void 0 ? {} : l;
        return fo({
          type: "counter",
          content: r
        }, function() {
          return Sn("beforeDOMElementCreation", {
            content: r,
            params: n
          }), t0({
            content: r.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(ne.cssPrefix, "-layers-counter")].concat(wa(o))
            }
          });
        });
      }
    };
  }
}, k0 = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? ir : i, s = n.title, o = s === void 0 ? null : s, u = n.classes, c = u === void 0 ? [] : u, l = n.attributes, f = l === void 0 ? {} : l, d = n.styles, h = d === void 0 ? {} : d;
        return fo({
          type: "text",
          content: r
        }, function() {
          return Sn("beforeDOMElementCreation", {
            content: r,
            params: n
          }), kf({
            content: r,
            transform: K(K({}, ir), a),
            title: o,
            extra: {
              attributes: f,
              styles: h,
              classes: ["".concat(ne.cssPrefix, "-layers-text")].concat(wa(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, s = n.extra, o = null, u = null;
      if (ep) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), l = r.getBoundingClientRect();
        o = l.width / c, u = l.height / c;
      }
      return ne.autoA11y && !i && (s.attributes["aria-hidden"] = "true"), Promise.resolve([r, kf({
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
}, _0 = new RegExp('"', "ug"), Nf = [1105920, 1112319];
function T0(t) {
  var e = t.replace(_0, ""), r = jg(e, 0), n = r >= Nf[0] && r <= Nf[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Hu(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Af(t, e) {
  var r = "".concat(pg).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = gi(t.children), s = a.filter(function(D) {
      return D.getAttribute(Bu) === e;
    })[0], o = Gr.getComputedStyle(t, e), u = o.getPropertyValue("font-family").match(bg), c = o.getPropertyValue("font-weight"), l = o.getPropertyValue("content");
    if (s && !u)
      return t.removeChild(s), n();
    if (u && l !== "none" && l !== "") {
      var f = o.getPropertyValue("content"), d = ~["Sharp"].indexOf(u[2]) ? Ke : Qe, h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? na[d][u[2].toLowerCase()] : wg[d][c], p = T0(f), v = p.value, m = p.isSecondary, y = u[0].startsWith("FontAwesome"), g = il(h, v), w = g;
      if (y) {
        var k = Bg(v);
        k.iconName && k.prefix && (g = k.iconName, h = k.prefix);
      }
      if (g && !m && (!s || s.getAttribute(Kc) !== h || s.getAttribute(Xc) !== w)) {
        t.setAttribute(r, w), s && t.removeChild(s);
        var b = m0(), S = b.extra;
        S.attributes[Bu] = e, Ju(g, h).then(function(D) {
          var N = sl(K(K({}, b), {}, {
            icons: {
              main: D,
              mask: al()
            },
            prefix: h,
            iconName: w,
            extra: S,
            watchable: !0
          })), A = Ye.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(A, t.firstChild) : t.appendChild(A), A.outerHTML = N.map(function(F) {
            return xa(F);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function S0(t) {
  return Promise.all([Af(t, "::before"), Af(t, "::after")]);
}
function O0(t) {
  return t.parentNode !== document.head && !~vg.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(Bu) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Df(t) {
  if (Ar)
    return new Promise(function(e, r) {
      var n = gi(t.querySelectorAll("*")).filter(O0).map(S0), i = ol.begin("searchPseudoElements");
      Ep(), Promise.all(n).then(function() {
        i(), Xu(), e();
      }).catch(function() {
        i(), Xu(), r();
      });
    });
}
var I0 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Df, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? Ye : n;
      ne.searchPseudoElements && Df(i);
    };
  }
}, Rf = !1, C0 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ep(), Rf = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Of(Yu("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        f0();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        Rf ? Xu() : Of(Yu("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Pf = function(e) {
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
}, N0 = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Pf(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = Pf(i)), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(r) {
      var n = r.main, i = r.transform, a = r.containerWidth, s = r.iconWidth, o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, u = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), c = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), l = "rotate(".concat(i.rotate, " 0 0)"), f = {
        transform: "".concat(u, " ").concat(c, " ").concat(l)
      }, d = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, h = {
        outer: o,
        inner: f,
        path: d
      };
      return {
        tag: "g",
        attributes: K({}, h.outer),
        children: [{
          tag: "g",
          attributes: K({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: K(K({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, Go = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Mf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function A0(t) {
  return t.tag === "g" ? t.children : [t];
}
var D0 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? lo(i.split(" ").map(function(s) {
          return s.trim();
        })) : al();
        return a.prefix || (a.prefix = Jr()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, s = r.mask, o = r.maskId, u = r.transform, c = a.width, l = a.icon, f = s.width, d = s.icon, h = Ag({
        transform: u,
        containerWidth: f,
        iconWidth: c
      }), p = {
        tag: "rect",
        attributes: K(K({}, Go), {}, {
          fill: "white"
        })
      }, v = l.children ? {
        children: l.children.map(Mf)
      } : {}, m = {
        tag: "g",
        attributes: K({}, h.inner),
        children: [Mf(K({
          tag: l.tag,
          attributes: K(K({}, l.attributes), h.path)
        }, v))]
      }, y = {
        tag: "g",
        attributes: K({}, h.outer),
        children: [m]
      }, g = "mask-".concat(o || sa()), w = "clip-".concat(o || sa()), k = {
        tag: "mask",
        attributes: K(K({}, Go), {}, {
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
          children: A0(d)
        }, k]
      };
      return n.push(b, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(g, ")")
        }, Go)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, R0 = {
  provides: function(e) {
    var r = !1;
    Gr.matchMedia && (r = Gr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: K(K({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = K(K({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: K(K({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || o.children.push({
        tag: "animate",
        attributes: K(K({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: K(K({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: K(K({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: K(K({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: K(K({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: K(K({}, s), {}, {
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
}, P0 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, M0 = [Pg, w0, E0, x0, k0, I0, C0, N0, D0, R0, P0];
Yg(M0, {
  mixoutsTo: Mt
});
Mt.noAuto;
Mt.config;
var F0 = Mt.library;
Mt.dom;
var ec = Mt.parse;
Mt.findIconDefinition;
Mt.toHtml;
var L0 = Mt.icon;
Mt.layer;
Mt.text;
Mt.counter;
var j0 = {
  prefix: "fas",
  iconName: "file-lines",
  icon: [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
}, V0 = {
  prefix: "fas",
  iconName: "circle-minus",
  icon: [512, 512, ["minus-circle"], "f056", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, $0 = {
  prefix: "fas",
  iconName: "face-smile-beam",
  icon: [512, 512, [128522, "smile-beam"], "f5b8", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]
}, z0 = {
  prefix: "fas",
  iconName: "reply",
  icon: [512, 512, [61714, "mail-reply"], "f3e5", "M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]
}, q0 = {
  prefix: "fas",
  iconName: "feather",
  icon: [512, 512, [129718], "f52d", "M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]
}, U0 = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]
}, W0 = {
  prefix: "fas",
  iconName: "wand-magic-sparkles",
  icon: [576, 512, ["magic-wand-sparkles"], "e2ca", "M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]
}, B0 = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
}, H0 = {
  prefix: "fas",
  iconName: "spell-check",
  icon: [576, 512, [], "f891", "M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"]
}, Q0 = {
  prefix: "fas",
  iconName: "user-tie",
  icon: [448, 512, [], "f508", "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"]
}, Y0 = {
  prefix: "fas",
  iconName: "language",
  icon: [640, 512, [], "f1ab", "M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"]
}, Z0 = {
  prefix: "fas",
  iconName: "ellipsis",
  icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
}, G0 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, J0 = {
  prefix: "fas",
  iconName: "rotate",
  icon: [512, 512, [128260, "sync-alt"], "f2f1", "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"]
}, K0 = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, X0 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
};
F0.add(
  // Solid
  G0,
  V0,
  X0,
  Z0,
  $0,
  q0,
  j0,
  Y0,
  U0,
  z0,
  J0,
  H0,
  K0,
  B0,
  Q0,
  W0
);
function kp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var tc = { exports: {} }, Oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ff;
function eb() {
  if (Ff)
    return Oi;
  Ff = 1;
  var t = H, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, c) {
    var l, f = {}, d = null, h = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (l in u)
      n.call(u, l) && !a.hasOwnProperty(l) && (f[l] = u[l]);
    if (o && o.defaultProps)
      for (l in u = o.defaultProps, u)
        f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: e, type: o, key: d, ref: h, props: f, _owner: i.current };
  }
  return Oi.Fragment = r, Oi.jsx = s, Oi.jsxs = s, Oi;
}
var Ii = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lf;
function tb() {
  return Lf || (Lf = 1, process.env.NODE_ENV !== "production" && function() {
    var t = H, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p = Symbol.iterator, v = "@@iterator";
    function m(E) {
      if (E === null || typeof E != "object")
        return null;
      var R = p && E[p] || E[v];
      return typeof R == "function" ? R : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(E) {
      {
        for (var R = arguments.length, Q = new Array(R > 1 ? R - 1 : 0), de = 1; de < R; de++)
          Q[de - 1] = arguments[de];
        w("error", E, Q);
      }
    }
    function w(E, R, Q) {
      {
        var de = y.ReactDebugCurrentFrame, Me = de.getStackAddendum();
        Me !== "" && (R += "%s", Q = Q.concat([Me]));
        var We = Q.map(function(Ce) {
          return String(Ce);
        });
        We.unshift("Warning: " + R), Function.prototype.apply.call(console[E], console, We);
      }
    }
    var k = !1, b = !1, S = !1, D = !1, N = !1, A;
    A = Symbol.for("react.module.reference");
    function F(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === n || E === a || N || E === i || E === c || E === l || D || E === h || k || b || S || typeof E == "object" && E !== null && (E.$$typeof === d || E.$$typeof === f || E.$$typeof === s || E.$$typeof === o || E.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === A || E.getModuleId !== void 0));
    }
    function j(E, R, Q) {
      var de = E.displayName;
      if (de)
        return de;
      var Me = R.displayName || R.name || "";
      return Me !== "" ? Q + "(" + Me + ")" : Q;
    }
    function P(E) {
      return E.displayName || "Context";
    }
    function M(E) {
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
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case o:
            var R = E;
            return P(R) + ".Consumer";
          case s:
            var Q = E;
            return P(Q._context) + ".Provider";
          case u:
            return j(E, E.render, "ForwardRef");
          case f:
            var de = E.displayName || null;
            return de !== null ? de : M(E.type) || "Memo";
          case d: {
            var Me = E, We = Me._payload, Ce = Me._init;
            try {
              return M(Ce(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, le = 0, W, ue, Re, Ee, C, q, re;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function ie() {
      {
        if (le === 0) {
          W = console.log, ue = console.info, Re = console.warn, Ee = console.error, C = console.group, q = console.groupCollapsed, re = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        le++;
      }
    }
    function _e() {
      {
        if (le--, le === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, E, {
              value: W
            }),
            info: z({}, E, {
              value: ue
            }),
            warn: z({}, E, {
              value: Re
            }),
            error: z({}, E, {
              value: Ee
            }),
            group: z({}, E, {
              value: C
            }),
            groupCollapsed: z({}, E, {
              value: q
            }),
            groupEnd: z({}, E, {
              value: re
            })
          });
        }
        le < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = y.ReactCurrentDispatcher, ve;
    function be(E, R, Q) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (Me) {
            var de = Me.stack.trim().match(/\n( *(at )?)/);
            ve = de && de[1] || "";
          }
        return `
` + ve + E;
      }
    }
    var Te = !1, we;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      we = new ut();
    }
    function B(E, R) {
      if (!E || Te)
        return "";
      {
        var Q = we.get(E);
        if (Q !== void 0)
          return Q;
      }
      var de;
      Te = !0;
      var Me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = pe.current, pe.current = null, ie();
      try {
        if (R) {
          var Ce = function() {
            throw Error();
          };
          if (Object.defineProperty(Ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ce, []);
            } catch (It) {
              de = It;
            }
            Reflect.construct(E, [], Ce);
          } else {
            try {
              Ce.call();
            } catch (It) {
              de = It;
            }
            E.call(Ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (It) {
            de = It;
          }
          E();
        }
      } catch (It) {
        if (It && de && typeof It.stack == "string") {
          for (var Se = It.stack.split(`
`), xt = de.stack.split(`
`), rt = Se.length - 1, at = xt.length - 1; rt >= 1 && at >= 0 && Se[rt] !== xt[at]; )
            at--;
          for (; rt >= 1 && at >= 0; rt--, at--)
            if (Se[rt] !== xt[at]) {
              if (rt !== 1 || at !== 1)
                do
                  if (rt--, at--, at < 0 || Se[rt] !== xt[at]) {
                    var Ft = `
` + Se[rt].replace(" at new ", " at ");
                    return E.displayName && Ft.includes("<anonymous>") && (Ft = Ft.replace("<anonymous>", E.displayName)), typeof E == "function" && we.set(E, Ft), Ft;
                  }
                while (rt >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        Te = !1, pe.current = We, _e(), Error.prepareStackTrace = Me;
      }
      var Mn = E ? E.displayName || E.name : "", on = Mn ? be(Mn) : "";
      return typeof E == "function" && we.set(E, on), on;
    }
    function Et(E, R, Q) {
      return B(E, !1);
    }
    function hr(E) {
      var R = E.prototype;
      return !!(R && R.isReactComponent);
    }
    function Dr(E, R, Q) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return B(E, hr(E));
      if (typeof E == "string")
        return be(E);
      switch (E) {
        case c:
          return be("Suspense");
        case l:
          return be("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case u:
            return Et(E.render);
          case f:
            return Dr(E.type, R, Q);
          case d: {
            var de = E, Me = de._payload, We = de._init;
            try {
              return Dr(We(Me), R, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var Dn = Object.prototype.hasOwnProperty, $o = {}, x = y.ReactDebugCurrentFrame;
    function T(E) {
      if (E) {
        var R = E._owner, Q = Dr(E.type, E._source, R ? R.type : null);
        x.setExtraStackFrame(Q);
      } else
        x.setExtraStackFrame(null);
    }
    function O(E, R, Q, de, Me) {
      {
        var We = Function.call.bind(Dn);
        for (var Ce in E)
          if (We(E, Ce)) {
            var Se = void 0;
            try {
              if (typeof E[Ce] != "function") {
                var xt = Error((de || "React class") + ": " + Q + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xt.name = "Invariant Violation", xt;
              }
              Se = E[Ce](R, Ce, de, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Se = rt;
            }
            Se && !(Se instanceof Error) && (T(Me), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", Q, Ce, typeof Se), T(null)), Se instanceof Error && !(Se.message in $o) && ($o[Se.message] = !0, T(Me), g("Failed %s type: %s", Q, Se.message), T(null));
          }
      }
    }
    var Z = Array.isArray;
    function $(E) {
      return Z(E);
    }
    function V(E) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, Q = R && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Q;
      }
    }
    function se(E) {
      try {
        return De(E), !1;
      } catch {
        return !0;
      }
    }
    function De(E) {
      return "" + E;
    }
    function tt(E) {
      if (se(E))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", V(E)), De(E);
    }
    var ct = y.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ma, Rn, sn;
    sn = {};
    function zo(E) {
      if (Dn.call(E, "ref")) {
        var R = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Fa(E) {
      if (Dn.call(E, "key")) {
        var R = Object.getOwnPropertyDescriptor(E, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function qo(E, R) {
      if (typeof E.ref == "string" && ct.current && R && ct.current.stateNode !== R) {
        var Q = M(ct.current.type);
        sn[Q] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ct.current.type), E.ref), sn[Q] = !0);
      }
    }
    function La(E, R) {
      {
        var Q = function() {
          Ma || (Ma = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function qy(E, R) {
      {
        var Q = function() {
          Rn || (Rn = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var Uy = function(E, R, Q, de, Me, We, Ce) {
      var Se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: E,
        key: R,
        ref: Q,
        props: Ce,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return Se._store = {}, Object.defineProperty(Se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(Se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.freeze && (Object.freeze(Se.props), Object.freeze(Se)), Se;
    };
    function Wy(E, R, Q, de, Me) {
      {
        var We, Ce = {}, Se = null, xt = null;
        Q !== void 0 && (tt(Q), Se = "" + Q), Fa(R) && (tt(R.key), Se = "" + R.key), zo(R) && (xt = R.ref, qo(R, Me));
        for (We in R)
          Dn.call(R, We) && !Rr.hasOwnProperty(We) && (Ce[We] = R[We]);
        if (E && E.defaultProps) {
          var rt = E.defaultProps;
          for (We in rt)
            Ce[We] === void 0 && (Ce[We] = rt[We]);
        }
        if (Se || xt) {
          var at = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Se && La(Ce, at), xt && qy(Ce, at);
        }
        return Uy(E, Se, xt, Me, de, ct.current, Ce);
      }
    }
    var Uo = y.ReactCurrentOwner, nf = y.ReactDebugCurrentFrame;
    function Pn(E) {
      if (E) {
        var R = E._owner, Q = Dr(E.type, E._source, R ? R.type : null);
        nf.setExtraStackFrame(Q);
      } else
        nf.setExtraStackFrame(null);
    }
    var Wo;
    Wo = !1;
    function Bo(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function af() {
      {
        if (Uo.current) {
          var E = M(Uo.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function By(E) {
      return "";
    }
    var sf = {};
    function Hy(E) {
      {
        var R = af();
        if (!R) {
          var Q = typeof E == "string" ? E : E.displayName || E.name;
          Q && (R = `

Check the top-level render call using <` + Q + ">.");
        }
        return R;
      }
    }
    function of(E, R) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Q = Hy(R);
        if (sf[Q])
          return;
        sf[Q] = !0;
        var de = "";
        E && E._owner && E._owner !== Uo.current && (de = " It was passed a child from " + M(E._owner.type) + "."), Pn(E), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, de), Pn(null);
      }
    }
    function uf(E, R) {
      {
        if (typeof E != "object")
          return;
        if ($(E))
          for (var Q = 0; Q < E.length; Q++) {
            var de = E[Q];
            Bo(de) && of(de, R);
          }
        else if (Bo(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Me = m(E);
          if (typeof Me == "function" && Me !== E.entries)
            for (var We = Me.call(E), Ce; !(Ce = We.next()).done; )
              Bo(Ce.value) && of(Ce.value, R);
        }
      }
    }
    function Qy(E) {
      {
        var R = E.type;
        if (R == null || typeof R == "string")
          return;
        var Q;
        if (typeof R == "function")
          Q = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === f))
          Q = R.propTypes;
        else
          return;
        if (Q) {
          var de = M(R);
          O(Q, E.props, "prop", de, E);
        } else if (R.PropTypes !== void 0 && !Wo) {
          Wo = !0;
          var Me = M(R);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Me || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yy(E) {
      {
        for (var R = Object.keys(E.props), Q = 0; Q < R.length; Q++) {
          var de = R[Q];
          if (de !== "children" && de !== "key") {
            Pn(E), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Pn(null);
            break;
          }
        }
        E.ref !== null && (Pn(E), g("Invalid attribute `ref` supplied to `React.Fragment`."), Pn(null));
      }
    }
    var cf = {};
    function lf(E, R, Q, de, Me, We) {
      {
        var Ce = F(E);
        if (!Ce) {
          var Se = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xt = By();
          xt ? Se += xt : Se += af();
          var rt;
          E === null ? rt = "null" : $(E) ? rt = "array" : E !== void 0 && E.$$typeof === e ? (rt = "<" + (M(E.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof E, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, Se);
        }
        var at = Wy(E, R, Q, Me, We);
        if (at == null)
          return at;
        if (Ce) {
          var Ft = R.children;
          if (Ft !== void 0)
            if (de)
              if ($(Ft)) {
                for (var Mn = 0; Mn < Ft.length; Mn++)
                  uf(Ft[Mn], E);
                Object.freeze && Object.freeze(Ft);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              uf(Ft, E);
        }
        if (Dn.call(R, "key")) {
          var on = M(E), It = Object.keys(R).filter(function(eg) {
            return eg !== "key";
          }), Ho = It.length > 0 ? "{key: someKey, " + It.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cf[on + Ho]) {
            var Xy = It.length > 0 ? "{" + It.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ho, on, Xy, on), cf[on + Ho] = !0;
          }
        }
        return E === n ? Yy(at) : Qy(at), at;
      }
    }
    function Zy(E, R, Q) {
      return lf(E, R, Q, !0);
    }
    function Gy(E, R, Q) {
      return lf(E, R, Q, !1);
    }
    var Jy = Gy, Ky = Zy;
    Ii.Fragment = n, Ii.jsx = Jy, Ii.jsxs = Ky;
  }()), Ii;
}
process.env.NODE_ENV === "production" ? tc.exports = eb() : tc.exports = tb();
var G = tc.exports;
function _p(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = _p(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function Br() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = _p(t)) && (n && (n += " "), n += e);
  return n;
}
const Qi = (t) => typeof t == "number" && !isNaN(t), On = (t) => typeof t == "string", Nt = (t) => typeof t == "function", ps = (t) => On(t) || Nt(t) ? t : null, Jo = (t) => _n(t) || On(t) || Nt(t) || Qi(t);
function rb(t, e, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: i } = t;
  requestAnimationFrame(() => {
    i.minHeight = "initial", i.height = n + "px", i.transition = `all ${r}ms`, requestAnimationFrame(() => {
      i.height = "0", i.padding = "0", i.margin = "0", setTimeout(e, r);
    });
  });
}
function ho(t) {
  let { enter: e, exit: r, appendPosition: n = !1, collapse: i = !0, collapseDuration: a = 300 } = t;
  return function(s) {
    let { children: o, position: u, preventExitTransition: c, done: l, nodeRef: f, isIn: d } = s;
    const h = n ? `${e}--${u}` : e, p = n ? `${r}--${u}` : r, v = Ie(0);
    return Zh(() => {
      const m = f.current, y = h.split(" "), g = (w) => {
        w.target === f.current && (m.dispatchEvent(new Event("d")), m.removeEventListener("animationend", g), m.removeEventListener("animationcancel", g), v.current === 0 && w.type !== "animationcancel" && m.classList.remove(...y));
      };
      m.classList.add(...y), m.addEventListener("animationend", g), m.addEventListener("animationcancel", g);
    }, []), $e(() => {
      const m = f.current, y = () => {
        m.removeEventListener("animationend", y), i ? rb(m, l, a) : l();
      };
      d || (c ? y() : (v.current = 1, m.className += ` ${p}`, m.addEventListener("animationend", y)));
    }, [d]), H.createElement(H.Fragment, null, o);
  };
}
function jf(t, e) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: e } : {};
}
const Vt = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t, e) {
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
} }, Qa = (t) => {
  let { theme: e, type: r, ...n } = t;
  return H.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, Ko = { info: function(t) {
  return H.createElement(Qa, { ...t }, H.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return H.createElement(Qa, { ...t }, H.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return H.createElement(Qa, { ...t }, H.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return H.createElement(Qa, { ...t }, H.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return H.createElement("div", { className: "Toastify__spinner" });
} };
function nb(t) {
  const [, e] = Yh((h) => h + 1, 0), [r, n] = bt([]), i = Ie(null), a = Ie(/* @__PURE__ */ new Map()).current, s = (h) => r.indexOf(h) !== -1, o = Ie({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t, containerId: null, isToastActive: s, getToast: (h) => a.get(h) }).current;
  function u(h) {
    let { containerId: p } = h;
    const { limit: v } = o.props;
    !v || p && o.containerId !== p || (o.count -= o.queue.length, o.queue = []);
  }
  function c(h) {
    n((p) => h == null ? [] : p.filter((v) => v !== h));
  }
  function l() {
    const { toastContent: h, toastProps: p, staleId: v } = o.queue.shift();
    d(h, p, v);
  }
  function f(h, p) {
    let { delay: v, staleId: m, ...y } = p;
    if (!Jo(h) || function(P) {
      return !i.current || o.props.enableMultiContainer && P.containerId !== o.props.containerId || a.has(P.toastId) && P.updateId == null;
    }(y))
      return;
    const { toastId: g, updateId: w, data: k } = y, { props: b } = o, S = () => c(g), D = w == null;
    D && o.count++;
    const N = { ...b, style: b.toastStyle, key: o.toastKey++, ...Object.fromEntries(Object.entries(y).filter((P) => {
      let [M, z] = P;
      return z != null;
    })), toastId: g, updateId: w, data: k, closeToast: S, isIn: !1, className: ps(y.className || b.toastClassName), bodyClassName: ps(y.bodyClassName || b.bodyClassName), progressClassName: ps(y.progressClassName || b.progressClassName), autoClose: !y.isLoading && (A = y.autoClose, F = b.autoClose, A === !1 || Qi(A) && A > 0 ? A : F), deleteToast() {
      const P = jf(a.get(g), "removed");
      a.delete(g), Vt.emit(4, P);
      const M = o.queue.length;
      if (o.count = g == null ? o.count - o.displayedToast : o.count - 1, o.count < 0 && (o.count = 0), M > 0) {
        const z = g == null ? o.props.limit : 1;
        if (M === 1 || z === 1)
          o.displayedToast++, l();
        else {
          const le = z > M ? M : z;
          o.displayedToast = le;
          for (let W = 0; W < le; W++)
            l();
        }
      } else
        e();
    } };
    var A, F;
    N.iconOut = function(P) {
      let { theme: M, type: z, isLoading: le, icon: W } = P, ue = null;
      const Re = { theme: M, type: z };
      return W === !1 || (Nt(W) ? ue = W(Re) : _n(W) ? ue = Ss(W, Re) : On(W) || Qi(W) ? ue = W : le ? ue = Ko.spinner() : ((Ee) => Ee in Ko)(z) && (ue = Ko[z](Re))), ue;
    }(N), Nt(y.onOpen) && (N.onOpen = y.onOpen), Nt(y.onClose) && (N.onClose = y.onClose), N.closeButton = b.closeButton, y.closeButton === !1 || Jo(y.closeButton) ? N.closeButton = y.closeButton : y.closeButton === !0 && (N.closeButton = !Jo(b.closeButton) || b.closeButton);
    let j = h;
    _n(h) && !On(h.type) ? j = Ss(h, { closeToast: S, toastProps: N, data: k }) : Nt(h) && (j = h({ closeToast: S, toastProps: N, data: k })), b.limit && b.limit > 0 && o.count > b.limit && D ? o.queue.push({ toastContent: j, toastProps: N, staleId: m }) : Qi(v) ? setTimeout(() => {
      d(j, N, m);
    }, v) : d(j, N, m);
  }
  function d(h, p, v) {
    const { toastId: m } = p;
    v && a.delete(v);
    const y = { content: h, props: p };
    a.set(m, y), n((g) => [...g, m].filter((w) => w !== v)), Vt.emit(4, jf(y, y.props.updateId == null ? "added" : "updated"));
  }
  return $e(() => (o.containerId = t.containerId, Vt.cancelEmit(3).on(0, f).on(1, (h) => i.current && c(h)).on(5, u).emit(2, o), () => {
    a.clear(), Vt.emit(3, o);
  }), []), $e(() => {
    o.props = t, o.isToastActive = s, o.displayedToast = r.length;
  }), { getToastToRender: function(h) {
    const p = /* @__PURE__ */ new Map(), v = Array.from(a.values());
    return t.newestOnTop && v.reverse(), v.forEach((m) => {
      const { position: y } = m.props;
      p.has(y) || p.set(y, []), p.get(y).push(m);
    }), Array.from(p, (m) => h(m[0], m[1]));
  }, containerRef: i, isToastActive: s };
}
function Vf(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function $f(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function ib(t) {
  const [e, r] = bt(!1), [n, i] = bt(!1), a = Ie(null), s = Ie({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, o = Ie(t), { autoClose: u, pauseOnHover: c, closeToast: l, onClick: f, closeOnClick: d } = t;
  function h(k) {
    if (t.draggable) {
      k.nativeEvent.type === "touchstart" && k.nativeEvent.preventDefault(), s.didMove = !1, document.addEventListener("mousemove", y), document.addEventListener("mouseup", g), document.addEventListener("touchmove", y), document.addEventListener("touchend", g);
      const b = a.current;
      s.canCloseOnClick = !0, s.canDrag = !0, s.boundingRect = b.getBoundingClientRect(), b.style.transition = "", s.x = Vf(k.nativeEvent), s.y = $f(k.nativeEvent), t.draggableDirection === "x" ? (s.start = s.x, s.removalDistance = b.offsetWidth * (t.draggablePercent / 100)) : (s.start = s.y, s.removalDistance = b.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent / 100));
    }
  }
  function p(k) {
    if (s.boundingRect) {
      const { top: b, bottom: S, left: D, right: N } = s.boundingRect;
      k.nativeEvent.type !== "touchend" && t.pauseOnHover && s.x >= D && s.x <= N && s.y >= b && s.y <= S ? m() : v();
    }
  }
  function v() {
    r(!0);
  }
  function m() {
    r(!1);
  }
  function y(k) {
    const b = a.current;
    s.canDrag && b && (s.didMove = !0, e && m(), s.x = Vf(k), s.y = $f(k), s.delta = t.draggableDirection === "x" ? s.x - s.start : s.y - s.start, s.start !== s.x && (s.canCloseOnClick = !1), b.style.transform = `translate${t.draggableDirection}(${s.delta}px)`, b.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)));
  }
  function g() {
    document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", g), document.removeEventListener("touchmove", y), document.removeEventListener("touchend", g);
    const k = a.current;
    if (s.canDrag && s.didMove && k) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance)
        return i(!0), void t.closeToast();
      k.style.transition = "transform 0.2s, opacity 0.2s", k.style.transform = `translate${t.draggableDirection}(0)`, k.style.opacity = "1";
    }
  }
  $e(() => {
    o.current = t;
  }), $e(() => (a.current && a.current.addEventListener("d", v, { once: !0 }), Nt(t.onOpen) && t.onOpen(_n(t.children) && t.children.props), () => {
    const k = o.current;
    Nt(k.onClose) && k.onClose(_n(k.children) && k.children.props);
  }), []), $e(() => (t.pauseOnFocusLoss && (document.hasFocus() || m(), window.addEventListener("focus", v), window.addEventListener("blur", m)), () => {
    t.pauseOnFocusLoss && (window.removeEventListener("focus", v), window.removeEventListener("blur", m));
  }), [t.pauseOnFocusLoss]);
  const w = { onMouseDown: h, onTouchStart: h, onMouseUp: p, onTouchEnd: p };
  return u && c && (w.onMouseEnter = m, w.onMouseLeave = v), d && (w.onClick = (k) => {
    f && f(k), s.canCloseOnClick && l();
  }), { playToast: v, pauseToast: m, isRunning: e, preventExitTransition: n, toastRef: a, eventHandlers: w };
}
function Tp(t) {
  let { closeToast: e, theme: r, ariaLabel: n = "close" } = t;
  return H.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (i) => {
    i.stopPropagation(), e(i);
  }, "aria-label": n }, H.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, H.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function ab(t) {
  let { delay: e, isRunning: r, closeToast: n, type: i = "default", hide: a, className: s, style: o, controlledProgress: u, progress: c, rtl: l, isIn: f, theme: d } = t;
  const h = a || u && c === 0, p = { ...o, animationDuration: `${e}ms`, animationPlayState: r ? "running" : "paused", opacity: h ? 0 : 1 };
  u && (p.transform = `scaleX(${c})`);
  const v = Br("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${d}`, `Toastify__progress-bar--${i}`, { "Toastify__progress-bar--rtl": l }), m = Nt(s) ? s({ rtl: l, type: i, defaultClassName: v }) : Br(v, s);
  return H.createElement("div", { role: "progressbar", "aria-hidden": h ? "true" : "false", "aria-label": "notification timer", className: m, style: p, [u && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && c < 1 ? null : () => {
    f && n();
  } });
}
const sb = (t) => {
  const { isRunning: e, preventExitTransition: r, toastRef: n, eventHandlers: i } = ib(t), { closeButton: a, children: s, autoClose: o, onClick: u, type: c, hideProgressBar: l, closeToast: f, transition: d, position: h, className: p, style: v, bodyClassName: m, bodyStyle: y, progressClassName: g, progressStyle: w, updateId: k, role: b, progress: S, rtl: D, toastId: N, deleteToast: A, isIn: F, isLoading: j, iconOut: P, closeOnClick: M, theme: z } = t, le = Br("Toastify__toast", `Toastify__toast-theme--${z}`, `Toastify__toast--${c}`, { "Toastify__toast--rtl": D }, { "Toastify__toast--close-on-click": M }), W = Nt(p) ? p({ rtl: D, position: h, type: c, defaultClassName: le }) : Br(le, p), ue = !!S || !o, Re = { closeToast: f, type: c, theme: z };
  let Ee = null;
  return a === !1 || (Ee = Nt(a) ? a(Re) : _n(a) ? Ss(a, Re) : Tp(Re)), H.createElement(d, { isIn: F, done: A, position: h, preventExitTransition: r, nodeRef: n }, H.createElement("div", { id: N, onClick: u, className: W, ...i, style: v, ref: n }, H.createElement("div", { ...F && { role: b }, className: Nt(m) ? m({ type: c }) : Br("Toastify__toast-body", m), style: y }, P != null && H.createElement("div", { className: Br("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !j }) }, P), H.createElement("div", null, s)), Ee, H.createElement(ab, { ...k && !ue ? { key: `pb-${k}` } : {}, rtl: D, theme: z, delay: o, isRunning: e, isIn: F, closeToast: f, hide: l, type: c, style: w, className: g, controlledProgress: ue, progress: S || 0 })));
}, po = function(t, e) {
  return e === void 0 && (e = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e };
}, ob = ho(po("bounce", !0));
ho(po("slide", !0));
ho(po("zoom"));
ho(po("flip"));
const rc = oo((t, e) => {
  const { getToastToRender: r, containerRef: n, isToastActive: i } = nb(t), { className: a, style: s, rtl: o, containerId: u } = t;
  function c(l) {
    const f = Br("Toastify__toast-container", `Toastify__toast-container--${l}`, { "Toastify__toast-container--rtl": o });
    return Nt(a) ? a({ position: l, rtl: o, defaultClassName: f }) : Br(f, ps(a));
  }
  return $e(() => {
    e && (e.current = n.current);
  }, []), H.createElement("div", { ref: n, className: "Toastify", id: u }, r((l, f) => {
    const d = f.length ? { ...s } : { ...s, pointerEvents: "none" };
    return H.createElement("div", { className: c(l), style: d, key: `container-${l}` }, f.map((h, p) => {
      let { content: v, props: m } = h;
      return H.createElement(sb, { ...m, isIn: i(m.toastId), style: { ...m.style, "--nth": p + 1, "--len": f.length }, key: `toast-${m.key}` }, v);
    }));
  }));
});
rc.displayName = "ToastContainer", rc.defaultProps = { position: "top-right", transition: ob, autoClose: 5e3, closeButton: Tp, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Xo, ln = /* @__PURE__ */ new Map(), ji = [], ub = 1;
function Sp() {
  return "" + ub++;
}
function cb(t) {
  return t && (On(t.toastId) || Qi(t.toastId)) ? t.toastId : Sp();
}
function Yi(t, e) {
  return ln.size > 0 ? Vt.emit(0, t, e) : ji.push({ content: t, options: e }), e.toastId;
}
function Ns(t, e) {
  return { ...e, type: e && e.type || t, toastId: cb(e) };
}
function Ya(t) {
  return (e, r) => Yi(e, Ns(t, r));
}
function Ze(t, e) {
  return Yi(t, Ns("default", e));
}
Ze.loading = (t, e) => Yi(t, Ns("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), Ze.promise = function(t, e, r) {
  let n, { pending: i, error: a, success: s } = e;
  i && (n = On(i) ? Ze.loading(i, r) : Ze.loading(i.render, { ...r, ...i }));
  const o = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, u = (l, f, d) => {
    if (f == null)
      return void Ze.dismiss(n);
    const h = { type: l, ...o, ...r, data: d }, p = On(f) ? { render: f } : f;
    return n ? Ze.update(n, { ...h, ...p }) : Ze(p.render, { ...h, ...p }), d;
  }, c = Nt(t) ? t() : t;
  return c.then((l) => u("success", s, l)).catch((l) => u("error", a, l)), c;
}, Ze.success = Ya("success"), Ze.info = Ya("info"), Ze.error = Ya("error"), Ze.warning = Ya("warning"), Ze.warn = Ze.warning, Ze.dark = (t, e) => Yi(t, Ns("default", { theme: "dark", ...e })), Ze.dismiss = (t) => {
  ln.size > 0 ? Vt.emit(1, t) : ji = ji.filter((e) => t != null && e.options.toastId !== t);
}, Ze.clearWaitingQueue = function(t) {
  return t === void 0 && (t = {}), Vt.emit(5, t);
}, Ze.isActive = (t) => {
  let e = !1;
  return ln.forEach((r) => {
    r.isToastActive && r.isToastActive(t) && (e = !0);
  }), e;
}, Ze.update = function(t, e) {
  e === void 0 && (e = {}), setTimeout(() => {
    const r = function(n, i) {
      let { containerId: a } = i;
      const s = ln.get(a || Xo);
      return s && s.getToast(n);
    }(t, e);
    if (r) {
      const { props: n, content: i } = r, a = { delay: 100, ...n, ...e, toastId: e.toastId || t, updateId: Sp() };
      a.toastId !== t && (a.staleId = t);
      const s = a.render || i;
      delete a.render, Yi(s, a);
    }
  }, 0);
}, Ze.done = (t) => {
  Ze.update(t, { progress: 1 });
}, Ze.onChange = (t) => (Vt.on(4, t), () => {
  Vt.off(4, t);
}), Ze.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Ze.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, Vt.on(2, (t) => {
  Xo = t.containerId || t, ln.set(Xo, t), ji.forEach((e) => {
    Vt.emit(0, e.content, e.options);
  }), ji = [];
}).on(3, (t) => {
  ln.delete(t.containerId || t), ln.size === 0 && Vt.off(0).off(1).off(5);
});
class An extends Error {
}
class lb extends An {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class fb extends An {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class db extends An {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Wn extends An {
}
class Op extends An {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class Ct extends An {
}
class Mr extends An {
  constructor() {
    super("Zone is an abstract class");
  }
}
const U = "numeric", Xt = "short", Pt = "long", As = {
  year: U,
  month: U,
  day: U
}, Ip = {
  year: U,
  month: Xt,
  day: U
}, hb = {
  year: U,
  month: Xt,
  day: U,
  weekday: Xt
}, Cp = {
  year: U,
  month: Pt,
  day: U
}, Np = {
  year: U,
  month: Pt,
  day: U,
  weekday: Pt
}, Ap = {
  hour: U,
  minute: U
}, Dp = {
  hour: U,
  minute: U,
  second: U
}, Rp = {
  hour: U,
  minute: U,
  second: U,
  timeZoneName: Xt
}, Pp = {
  hour: U,
  minute: U,
  second: U,
  timeZoneName: Pt
}, Mp = {
  hour: U,
  minute: U,
  hourCycle: "h23"
}, Fp = {
  hour: U,
  minute: U,
  second: U,
  hourCycle: "h23"
}, Lp = {
  hour: U,
  minute: U,
  second: U,
  hourCycle: "h23",
  timeZoneName: Xt
}, jp = {
  hour: U,
  minute: U,
  second: U,
  hourCycle: "h23",
  timeZoneName: Pt
}, Vp = {
  year: U,
  month: U,
  day: U,
  hour: U,
  minute: U
}, $p = {
  year: U,
  month: U,
  day: U,
  hour: U,
  minute: U,
  second: U
}, zp = {
  year: U,
  month: Xt,
  day: U,
  hour: U,
  minute: U
}, qp = {
  year: U,
  month: Xt,
  day: U,
  hour: U,
  minute: U,
  second: U
}, pb = {
  year: U,
  month: Xt,
  day: U,
  weekday: Xt,
  hour: U,
  minute: U
}, Up = {
  year: U,
  month: Pt,
  day: U,
  hour: U,
  minute: U,
  timeZoneName: Xt
}, Wp = {
  year: U,
  month: Pt,
  day: U,
  hour: U,
  minute: U,
  second: U,
  timeZoneName: Xt
}, Bp = {
  year: U,
  month: Pt,
  day: U,
  weekday: Pt,
  hour: U,
  minute: U,
  timeZoneName: Pt
}, Hp = {
  year: U,
  month: Pt,
  day: U,
  weekday: Pt,
  hour: U,
  minute: U,
  second: U,
  timeZoneName: Pt
};
class ka {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Mr();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Mr();
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
    throw new Mr();
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
    throw new Mr();
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
    throw new Mr();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new Mr();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new Mr();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Mr();
  }
}
let eu = null;
class mo extends ka {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return eu === null && (eu = new mo()), eu;
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
    return tm(e, r, n);
  }
  /** @override **/
  formatOffset(e, r) {
    return Zi(this.offset(e), r);
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
let ms = {};
function mb(t) {
  return ms[t] || (ms[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), ms[t];
}
const vb = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function yb(t, e) {
  const r = t.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, i, a, s, o, u, c, l] = n;
  return [s, i, a, o, u, c, l];
}
function gb(t, e) {
  const r = t.formatToParts(e), n = [];
  for (let i = 0; i < r.length; i++) {
    const { type: a, value: s } = r[i], o = vb[a];
    a === "era" ? n[o] = s : me(o) || (n[o] = parseInt(s, 10));
  }
  return n;
}
let Za = {};
class Sr extends ka {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Za[e] || (Za[e] = new Sr(e)), Za[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Za = {}, ms = {};
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
    super(), this.zoneName = e, this.valid = Sr.isValidZone(e);
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
    return tm(e, r, n, this.name);
  }
  /** @override **/
  formatOffset(e, r) {
    return Zi(this.offset(e), r);
  }
  /** @override **/
  offset(e) {
    const r = new Date(e);
    if (isNaN(r))
      return NaN;
    const n = mb(this.name);
    let [i, a, s, o, u, c, l] = n.formatToParts ? gb(n, r) : yb(n, r);
    o === "BC" && (i = -Math.abs(i) + 1);
    const d = yo({
      year: i,
      month: a,
      day: s,
      hour: u === 24 ? 0 : u,
      minute: c,
      second: l,
      millisecond: 0
    });
    let h = +r;
    const p = h % 1e3;
    return h -= p >= 0 ? p : 1e3 + p, (d - h) / (60 * 1e3);
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
let zf = {};
function bb(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = zf[r];
  return n || (n = new Intl.ListFormat(t, e), zf[r] = n), n;
}
let nc = {};
function ic(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = nc[r];
  return n || (n = new Intl.DateTimeFormat(t, e), nc[r] = n), n;
}
let ac = {};
function wb(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = ac[r];
  return n || (n = new Intl.NumberFormat(t, e), ac[r] = n), n;
}
let sc = {};
function Eb(t, e = {}) {
  const { base: r, ...n } = e, i = JSON.stringify([t, n]);
  let a = sc[i];
  return a || (a = new Intl.RelativeTimeFormat(t, e), sc[i] = a), a;
}
let Vi = null;
function xb() {
  return Vi || (Vi = new Intl.DateTimeFormat().resolvedOptions().locale, Vi);
}
let qf = {};
function kb(t) {
  let e = qf[t];
  if (!e) {
    const r = new Intl.Locale(t);
    e = "getWeekInfo" in r ? r.getWeekInfo() : r.weekInfo, qf[t] = e;
  }
  return e;
}
function _b(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const r = t.indexOf("-u-");
  if (r === -1)
    return [t];
  {
    let n, i;
    try {
      n = ic(t).resolvedOptions(), i = t;
    } catch {
      const u = t.substring(0, r);
      n = ic(u).resolvedOptions(), i = u;
    }
    const { numberingSystem: a, calendar: s } = n;
    return [i, a, s];
  }
}
function Tb(t, e, r) {
  return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t;
}
function Sb(t) {
  const e = [];
  for (let r = 1; r <= 12; r++) {
    const n = ye.utc(2009, r, 1);
    e.push(t(n));
  }
  return e;
}
function Ob(t) {
  const e = [];
  for (let r = 1; r <= 7; r++) {
    const n = ye.utc(2016, 11, 13 + r);
    e.push(t(n));
  }
  return e;
}
function Ga(t, e, r, n) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? r(e) : n(e);
}
function Ib(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class Cb {
  constructor(e, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const { padTo: i, floor: a, ...s } = n;
    if (!r || Object.keys(s).length > 0) {
      const o = { useGrouping: !1, ...n };
      n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = wb(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const r = this.floor ? Math.floor(e) : e;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(e) : dl(e, 3);
      return ot(r, this.padTo);
    }
  }
}
class Nb {
  constructor(e, r, n) {
    this.opts = n, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const s = -1 * (e.offset / 60), o = s >= 0 ? `Etc/GMT+${s}` : `Etc/GMT${s}`;
      e.offset !== 0 && Sr.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const a = { ...this.opts };
    a.timeZone = a.timeZone || i, this.dtf = ic(r, a);
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
class Ab {
  constructor(e, r, n) {
    this.opts = { style: "long", ...n }, !r && Xp() && (this.rtf = Eb(e, n));
  }
  format(e, r) {
    return this.rtf ? this.rtf.format(e, r) : Jb(r, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, r) {
    return this.rtf ? this.rtf.formatToParts(e, r) : [];
  }
}
const Db = {
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
    const s = e || nt.defaultLocale, o = s || (a ? "en-US" : xb()), u = r || nt.defaultNumberingSystem, c = n || nt.defaultOutputCalendar, l = oc(i) || nt.defaultWeekSettings;
    return new Ue(o, u, c, l, s);
  }
  static resetCache() {
    Vi = null, nc = {}, ac = {}, sc = {};
  }
  static fromObject({ locale: e, numberingSystem: r, outputCalendar: n, weekSettings: i } = {}) {
    return Ue.create(e, r, n, i);
  }
  constructor(e, r, n, i, a) {
    const [s, o, u] = _b(e);
    this.locale = s, this.numberingSystem = r || o || null, this.outputCalendar = n || u || null, this.weekSettings = i, this.intl = Tb(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = a, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Ib(this)), this.fastNumbersCached;
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
      oc(e.weekSettings) || this.weekSettings,
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
    return Ga(this, e, im, () => {
      const n = r ? { month: e, day: "numeric" } : { month: e }, i = r ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = Sb((a) => this.extract(a, n, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, r = !1) {
    return Ga(this, e, om, () => {
      const n = r ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = r ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = Ob(
        (a) => this.extract(a, n, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Ga(
      this,
      void 0,
      () => um,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [ye.utc(2016, 11, 13, 9), ye.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Ga(this, e, cm, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [ye.utc(-40, 1, 1), ye.utc(2017, 1, 1)].map(
        (n) => this.extract(n, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, r, n) {
    const i = this.dtFormatter(e, r), a = i.formatToParts(), s = a.find((o) => o.type.toLowerCase() === n);
    return s ? s.value : null;
  }
  numberFormatter(e = {}) {
    return new Cb(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, r = {}) {
    return new Nb(e, this.intl, r);
  }
  relFormatter(e = {}) {
    return new Ab(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return bb(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : em() ? kb(this.locale) : Db;
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
let tu = null;
class Tt extends ka {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return tu === null && (tu = new Tt(0)), tu;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? Tt.utcInstance : new Tt(e);
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
        return new Tt(go(r[1], r[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${Zi(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Zi(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, r) {
    return Zi(this.fixed, r);
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
class Rb extends ka {
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
function Wr(t, e) {
  if (me(t) || t === null)
    return e;
  if (t instanceof ka)
    return t;
  if (Fb(t)) {
    const r = t.toLowerCase();
    return r === "default" ? e : r === "local" || r === "system" ? mo.instance : r === "utc" || r === "gmt" ? Tt.utcInstance : Tt.parseSpecifier(r) || Sr.create(t);
  } else
    return kn(t) ? Tt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Rb(t);
}
let Uf = () => Date.now(), Wf = "system", Bf = null, Hf = null, Qf = null, Yf = 60, Zf, Gf = null;
class nt {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Uf;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Uf = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Wf = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Wr(Wf, mo.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Bf;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Bf = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Hf;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Hf = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Qf;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Qf = e;
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
    return Gf;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Gf = oc(e);
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Yf;
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
    Yf = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Zf;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Zf = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Ue.resetCache(), Sr.resetCache();
  }
}
class Gt {
  constructor(e, r) {
    this.reason = e, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Qp = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Yp = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function $t(t, e) {
  return new Gt(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function cl(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && t >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const i = n.getUTCDay();
  return i === 0 ? 7 : i;
}
function Zp(t, e, r) {
  return r + (_a(t) ? Yp : Qp)[e - 1];
}
function Gp(t, e) {
  const r = _a(t) ? Yp : Qp, n = r.findIndex((a) => a < e), i = e - r[n];
  return { month: n + 1, day: i };
}
function ll(t, e) {
  return (t - e + 7) % 7 + 1;
}
function Ds(t, e = 4, r = 1) {
  const { year: n, month: i, day: a } = t, s = Zp(n, i, a), o = ll(cl(n, i, a), r);
  let u = Math.floor((s - o + 14 - e) / 7), c;
  return u < 1 ? (c = n - 1, u = oa(c, e, r)) : u > oa(n, e, r) ? (c = n + 1, u = 1) : c = n, { weekYear: c, weekNumber: u, weekday: o, ...bo(t) };
}
function Jf(t, e = 4, r = 1) {
  const { weekYear: n, weekNumber: i, weekday: a } = t, s = ll(cl(n, 1, e), r), o = Kn(n);
  let u = i * 7 + a - s - 7 + e, c;
  u < 1 ? (c = n - 1, u += Kn(c)) : u > o ? (c = n + 1, u -= Kn(n)) : c = n;
  const { month: l, day: f } = Gp(c, u);
  return { year: c, month: l, day: f, ...bo(t) };
}
function ru(t) {
  const { year: e, month: r, day: n } = t, i = Zp(e, r, n);
  return { year: e, ordinal: i, ...bo(t) };
}
function Kf(t) {
  const { year: e, ordinal: r } = t, { month: n, day: i } = Gp(e, r);
  return { year: e, month: n, day: i, ...bo(t) };
}
function Xf(t, e) {
  if (!me(t.localWeekday) || !me(t.localWeekNumber) || !me(t.localWeekYear)) {
    if (!me(t.weekday) || !me(t.weekNumber) || !me(t.weekYear))
      throw new Wn(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return me(t.localWeekday) || (t.weekday = t.localWeekday), me(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), me(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Pb(t, e = 4, r = 1) {
  const n = vo(t.weekYear), i = zt(
    t.weekNumber,
    1,
    oa(t.weekYear, e, r)
  ), a = zt(t.weekday, 1, 7);
  return n ? i ? a ? !1 : $t("weekday", t.weekday) : $t("week", t.weekNumber) : $t("weekYear", t.weekYear);
}
function Mb(t) {
  const e = vo(t.year), r = zt(t.ordinal, 1, Kn(t.year));
  return e ? r ? !1 : $t("ordinal", t.ordinal) : $t("year", t.year);
}
function Jp(t) {
  const e = vo(t.year), r = zt(t.month, 1, 12), n = zt(t.day, 1, Rs(t.year, t.month));
  return e ? r ? n ? !1 : $t("day", t.day) : $t("month", t.month) : $t("year", t.year);
}
function Kp(t) {
  const { hour: e, minute: r, second: n, millisecond: i } = t, a = zt(e, 0, 23) || e === 24 && r === 0 && n === 0 && i === 0, s = zt(r, 0, 59), o = zt(n, 0, 59), u = zt(i, 0, 999);
  return a ? s ? o ? u ? !1 : $t("millisecond", i) : $t("second", n) : $t("minute", r) : $t("hour", e);
}
function me(t) {
  return typeof t > "u";
}
function kn(t) {
  return typeof t == "number";
}
function vo(t) {
  return typeof t == "number" && t % 1 === 0;
}
function Fb(t) {
  return typeof t == "string";
}
function Lb(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Xp() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function em() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function jb(t) {
  return Array.isArray(t) ? t : [t];
}
function ed(t, e, r) {
  if (t.length !== 0)
    return t.reduce((n, i) => {
      const a = [e(i), i];
      return n && r(n[0], a[0]) === n[0] ? n : a;
    }, null)[1];
}
function Vb(t, e) {
  return e.reduce((r, n) => (r[n] = t[n], r), {});
}
function si(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function oc(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new Ct("Week settings must be an object");
  if (!zt(t.firstDay, 1, 7) || !zt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !zt(e, 1, 7)))
    throw new Ct("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function zt(t, e, r) {
  return vo(t) && t >= e && t <= r;
}
function $b(t, e) {
  return t - e * Math.floor(t / e);
}
function ot(t, e = 2) {
  const r = t < 0;
  let n;
  return r ? n = "-" + ("" + -t).padStart(e, "0") : n = ("" + t).padStart(e, "0"), n;
}
function Vr(t) {
  if (!(me(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function un(t) {
  if (!(me(t) || t === null || t === ""))
    return parseFloat(t);
}
function fl(t) {
  if (!(me(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function dl(t, e, r = !1) {
  const n = 10 ** e;
  return (r ? Math.trunc : Math.round)(t * n) / n;
}
function _a(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Kn(t) {
  return _a(t) ? 366 : 365;
}
function Rs(t, e) {
  const r = $b(e - 1, 12) + 1, n = t + (e - r) / 12;
  return r === 2 ? _a(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function yo(t) {
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
function td(t, e, r) {
  return -ll(cl(t, 1, e), r) + e - 1;
}
function oa(t, e = 4, r = 1) {
  const n = td(t, e, r), i = td(t + 1, e, r);
  return (Kn(t) - n + i) / 7;
}
function uc(t) {
  return t > 99 ? t : t > nt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function tm(t, e, r, n = null) {
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
function go(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(e, 10) || 0, i = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + i;
}
function rm(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new Ct(`Invalid unit value ${t}`);
  return e;
}
function Ps(t, e) {
  const r = {};
  for (const n in t)
    if (si(t, n)) {
      const i = t[n];
      if (i == null)
        continue;
      r[e(n)] = rm(i);
    }
  return r;
}
function Zi(t, e) {
  const r = Math.trunc(Math.abs(t / 60)), n = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${ot(r, 2)}:${ot(n, 2)}`;
    case "narrow":
      return `${i}${r}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${i}${ot(r, 2)}${ot(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function bo(t) {
  return Vb(t, ["hour", "minute", "second", "millisecond"]);
}
const zb = [
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
], nm = [
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
], qb = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function im(t) {
  switch (t) {
    case "narrow":
      return [...qb];
    case "short":
      return [...nm];
    case "long":
      return [...zb];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const am = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], sm = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Ub = ["M", "T", "W", "T", "F", "S", "S"];
function om(t) {
  switch (t) {
    case "narrow":
      return [...Ub];
    case "short":
      return [...sm];
    case "long":
      return [...am];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const um = ["AM", "PM"], Wb = ["Before Christ", "Anno Domini"], Bb = ["BC", "AD"], Hb = ["B", "A"];
function cm(t) {
  switch (t) {
    case "narrow":
      return [...Hb];
    case "short":
      return [...Bb];
    case "long":
      return [...Wb];
    default:
      return null;
  }
}
function Qb(t) {
  return um[t.hour < 12 ? 0 : 1];
}
function Yb(t, e) {
  return om(e)[t.weekday - 1];
}
function Zb(t, e) {
  return im(e)[t.month - 1];
}
function Gb(t, e) {
  return cm(e)[t.year < 0 ? 0 : 1];
}
function Jb(t, e, r = "always", n = !1) {
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
  const s = Object.is(e, -0) || e < 0, o = Math.abs(e), u = o === 1, c = i[t], l = n ? u ? c[1] : c[2] || c[1] : u ? i[t][0] : t;
  return s ? `${o} ${l} ago` : `in ${o} ${l}`;
}
function rd(t, e) {
  let r = "";
  for (const n of t)
    n.literal ? r += n.val : r += e(n.val);
  return r;
}
const Kb = {
  D: As,
  DD: Ip,
  DDD: Cp,
  DDDD: Np,
  t: Ap,
  tt: Dp,
  ttt: Rp,
  tttt: Pp,
  T: Mp,
  TT: Fp,
  TTT: Lp,
  TTTT: jp,
  f: Vp,
  ff: zp,
  fff: Up,
  ffff: Bp,
  F: $p,
  FF: qp,
  FFF: Wp,
  FFFF: Hp
};
class yt {
  static create(e, r = {}) {
    return new yt(e, r);
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
    return Kb[e];
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
      return ot(e, r);
    const n = { ...this.opts };
    return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(e);
  }
  formatDateTimeFromString(e, r) {
    const n = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", a = (h, p) => this.loc.extract(e, h, p), s = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", o = () => n ? Qb(e) : a({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (h, p) => n ? Zb(e, h) : a(p ? { month: h } : { month: h, day: "numeric" }, "month"), c = (h, p) => n ? Yb(e, h) : a(
      p ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), l = (h) => {
      const p = yt.macroTokenToFormatOpts(h);
      return p ? this.formatWithSystemDefault(e, p) : h;
    }, f = (h) => n ? Gb(e, h) : a({ era: h }, "era"), d = (h) => {
      switch (h) {
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
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
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
          return l(h);
      }
    };
    return rd(yt.parseFormat(r), d);
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
    }, i = (u) => (c) => {
      const l = n(c);
      return l ? this.num(u.get(l), c.length) : c;
    }, a = yt.parseFormat(r), s = a.reduce(
      (u, { literal: c, val: l }) => c ? u : u.concat(l),
      []
    ), o = e.shiftTo(...s.map(n).filter((u) => u));
    return rd(a, i(o));
  }
}
const lm = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function bi(...t) {
  const e = t.reduce((r, n) => r + n.source, "");
  return RegExp(`^${e}$`);
}
function wi(...t) {
  return (e) => t.reduce(
    ([r, n, i], a) => {
      const [s, o, u] = a(e, i);
      return [{ ...r, ...s }, o || n, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Ei(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [r, n] of e) {
    const i = r.exec(t);
    if (i)
      return n(i);
  }
  return [null, null];
}
function fm(...t) {
  return (e, r) => {
    const n = {};
    let i;
    for (i = 0; i < t.length; i++)
      n[t[i]] = Vr(e[r + i]);
    return [n, null, r + i];
  };
}
const dm = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Xb = `(?:${dm.source}?(?:\\[(${lm.source})\\])?)?`, hl = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, hm = RegExp(`${hl.source}${Xb}`), pl = RegExp(`(?:T${hm.source})?`), e1 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, t1 = /(\d{4})-?W(\d\d)(?:-?(\d))?/, r1 = /(\d{4})-?(\d{3})/, n1 = fm("weekYear", "weekNumber", "weekDay"), i1 = fm("year", "ordinal"), a1 = /(\d{4})-(\d\d)-(\d\d)/, pm = RegExp(
  `${hl.source} ?(?:${dm.source}|(${lm.source}))?`
), s1 = RegExp(`(?: ${pm.source})?`);
function Xn(t, e, r) {
  const n = t[e];
  return me(n) ? r : Vr(n);
}
function o1(t, e) {
  return [{
    year: Xn(t, e),
    month: Xn(t, e + 1, 1),
    day: Xn(t, e + 2, 1)
  }, null, e + 3];
}
function xi(t, e) {
  return [{
    hours: Xn(t, e, 0),
    minutes: Xn(t, e + 1, 0),
    seconds: Xn(t, e + 2, 0),
    milliseconds: fl(t[e + 3])
  }, null, e + 4];
}
function Ta(t, e) {
  const r = !t[e] && !t[e + 1], n = go(t[e + 1], t[e + 2]), i = r ? null : Tt.instance(n);
  return [{}, i, e + 3];
}
function Sa(t, e) {
  const r = t[e] ? Sr.create(t[e]) : null;
  return [{}, r, e + 1];
}
const u1 = RegExp(`^T?${hl.source}$`), c1 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function l1(t) {
  const [e, r, n, i, a, s, o, u, c] = t, l = e[0] === "-", f = u && u[0] === "-", d = (h, p = !1) => h !== void 0 && (p || h && l) ? -h : h;
  return [
    {
      years: d(un(r)),
      months: d(un(n)),
      weeks: d(un(i)),
      days: d(un(a)),
      hours: d(un(s)),
      minutes: d(un(o)),
      seconds: d(un(u), u === "-0"),
      milliseconds: d(fl(c), f)
    }
  ];
}
const f1 = {
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
function ml(t, e, r, n, i, a, s) {
  const o = {
    year: e.length === 2 ? uc(Vr(e)) : Vr(e),
    month: nm.indexOf(r) + 1,
    day: Vr(n),
    hour: Vr(i),
    minute: Vr(a)
  };
  return s && (o.second = Vr(s)), t && (o.weekday = t.length > 3 ? am.indexOf(t) + 1 : sm.indexOf(t) + 1), o;
}
const d1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function h1(t) {
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
    c,
    l,
    f
  ] = t, d = ml(e, i, n, r, a, s, o);
  let h;
  return u ? h = f1[u] : c ? h = 0 : h = go(l, f), [d, new Tt(h)];
}
function p1(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const m1 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, v1 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, y1 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function nd(t) {
  const [, e, r, n, i, a, s, o] = t;
  return [ml(e, i, n, r, a, s, o), Tt.utcInstance];
}
function g1(t) {
  const [, e, r, n, i, a, s, o] = t;
  return [ml(e, o, r, n, i, a, s), Tt.utcInstance];
}
const b1 = bi(e1, pl), w1 = bi(t1, pl), E1 = bi(r1, pl), x1 = bi(hm), mm = wi(
  o1,
  xi,
  Ta,
  Sa
), k1 = wi(
  n1,
  xi,
  Ta,
  Sa
), _1 = wi(
  i1,
  xi,
  Ta,
  Sa
), T1 = wi(
  xi,
  Ta,
  Sa
);
function S1(t) {
  return Ei(
    t,
    [b1, mm],
    [w1, k1],
    [E1, _1],
    [x1, T1]
  );
}
function O1(t) {
  return Ei(p1(t), [d1, h1]);
}
function I1(t) {
  return Ei(
    t,
    [m1, nd],
    [v1, nd],
    [y1, g1]
  );
}
function C1(t) {
  return Ei(t, [c1, l1]);
}
const N1 = wi(xi);
function A1(t) {
  return Ei(t, [u1, N1]);
}
const D1 = bi(a1, s1), R1 = bi(pm), P1 = wi(
  xi,
  Ta,
  Sa
);
function M1(t) {
  return Ei(
    t,
    [D1, mm],
    [R1, P1]
  );
}
const id = "Invalid Duration", vm = {
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
}, F1 = {
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
  ...vm
}, Lt = 146097 / 400, Fn = 146097 / 4800, L1 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Lt / 7,
    days: Lt,
    hours: Lt * 24,
    minutes: Lt * 24 * 60,
    seconds: Lt * 24 * 60 * 60,
    milliseconds: Lt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Lt / 28,
    days: Lt / 4,
    hours: Lt * 24 / 4,
    minutes: Lt * 24 * 60 / 4,
    seconds: Lt * 24 * 60 * 60 / 4,
    milliseconds: Lt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Fn / 7,
    days: Fn,
    hours: Fn * 24,
    minutes: Fn * 24 * 60,
    seconds: Fn * 24 * 60 * 60,
    milliseconds: Fn * 24 * 60 * 60 * 1e3
  },
  ...vm
}, gn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], j1 = gn.slice(0).reverse();
function Fr(t, e, r = !1) {
  const n = {
    values: r ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Ne(n);
}
function ym(t, e) {
  let r = e.milliseconds ?? 0;
  for (const n of j1.slice(1))
    e[n] && (r += e[n] * t[n].milliseconds);
  return r;
}
function ad(t, e) {
  const r = ym(t, e) < 0 ? -1 : 1;
  gn.reduceRight((n, i) => {
    if (me(e[i]))
      return n;
    if (n) {
      const a = e[n] * r, s = t[i][n], o = Math.floor(a / s);
      e[i] += o * r, e[n] -= o * s * r;
    }
    return i;
  }, null), gn.reduce((n, i) => {
    if (me(e[i]))
      return n;
    if (n) {
      const a = e[n] % 1;
      e[n] -= a, e[i] += a * t[n][i];
    }
    return i;
  }, null);
}
function V1(t) {
  const e = {};
  for (const [r, n] of Object.entries(t))
    n !== 0 && (e[r] = n);
  return e;
}
class Ne {
  /**
   * @private
   */
  constructor(e) {
    const r = e.conversionAccuracy === "longterm" || !1;
    let n = r ? L1 : F1;
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
    return Ne.fromObject({ milliseconds: e }, r);
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
      throw new Ct(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Ne({
      values: Ps(e, Ne.normalizeUnit),
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
    if (kn(e))
      return Ne.fromMillis(e);
    if (Ne.isDuration(e))
      return e;
    if (typeof e == "object")
      return Ne.fromObject(e);
    throw new Ct(
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
    const [n] = C1(e);
    return n ? Ne.fromObject(n, r) : Ne.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [n] = A1(e);
    return n ? Ne.fromObject(n, r) : Ne.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new Ct("need to specify a reason the Duration is invalid");
    const n = e instanceof Gt ? e : new Gt(e, r);
    if (nt.throwOnInvalid)
      throw new db(n);
    return new Ne({ invalid: n });
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
      throw new Op(e);
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
    return this.isValid ? yt.create(this.loc, n).formatDurationFromString(this, e) : id;
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
      return id;
    const r = gn.map((n) => {
      const i = this.values[n];
      return me(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: n.slice(0, -1) }).format(i);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += dl(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, ye.fromMillis(r, { zone: "UTC" }).toISOTime(e));
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
    return this.isValid ? ym(this.matrix, this.values) : NaN;
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
    const r = Ne.fromDurationLike(e), n = {};
    for (const i of gn)
      (si(r.values, i) || si(this.values, i)) && (n[i] = r.get(i) + this.get(i));
    return Fr(this, { values: n }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const r = Ne.fromDurationLike(e);
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
      r[n] = rm(e(this.values[n], n));
    return Fr(this, { values: r }, !0);
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
    return this[Ne.normalizeUnit(e)];
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
    const r = { ...this.values, ...Ps(e, Ne.normalizeUnit) };
    return Fr(this, { values: r });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: r, conversionAccuracy: n, matrix: i } = {}) {
    const s = { loc: this.loc.clone({ locale: e, numberingSystem: r }), matrix: i, conversionAccuracy: n };
    return Fr(this, s);
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
    return ad(this.matrix, e), Fr(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = V1(this.normalize().shiftToAll().toObject());
    return Fr(this, { values: e }, !0);
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
    e = e.map((s) => Ne.normalizeUnit(s));
    const r = {}, n = {}, i = this.toObject();
    let a;
    for (const s of gn)
      if (e.indexOf(s) >= 0) {
        a = s;
        let o = 0;
        for (const c in n)
          o += this.matrix[c][s] * n[c], n[c] = 0;
        kn(i[s]) && (o += i[s]);
        const u = Math.trunc(o);
        r[s] = u, n[s] = (o * 1e3 - u * 1e3) / 1e3;
      } else
        kn(i[s]) && (n[s] = i[s]);
    for (const s in n)
      n[s] !== 0 && (r[a] += s === a ? n[s] : n[s] / this.matrix[a][s]);
    return ad(this.matrix, r), Fr(this, { values: r }, !0);
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
    return Fr(this, { values: e }, !0);
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
    for (const n of gn)
      if (!r(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const Ln = "Invalid Interval";
function $1(t, e) {
  return !t || !t.isValid ? Ge.invalid("missing or invalid start") : !e || !e.isValid ? Ge.invalid("missing or invalid end") : e < t ? Ge.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Ge {
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
      throw new Ct("need to specify a reason the Interval is invalid");
    const n = e instanceof Gt ? e : new Gt(e, r);
    if (nt.throwOnInvalid)
      throw new fb(n);
    return new Ge({ invalid: n });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, r) {
    const n = Ni(e), i = Ni(r), a = $1(n, i);
    return a ?? new Ge({
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
    const n = Ne.fromDurationLike(r), i = Ni(e);
    return Ge.fromDateTimes(i, i.plus(n));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, r) {
    const n = Ne.fromDurationLike(r), i = Ni(e);
    return Ge.fromDateTimes(i.minus(n), i);
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
        a = ye.fromISO(n, r), s = a.isValid;
      } catch {
        s = !1;
      }
      let o, u;
      try {
        o = ye.fromISO(i, r), u = o.isValid;
      } catch {
        u = !1;
      }
      if (s && u)
        return Ge.fromDateTimes(a, o);
      if (s) {
        const c = Ne.fromISO(i, r);
        if (c.isValid)
          return Ge.after(a, c);
      } else if (u) {
        const c = Ne.fromISO(n, r);
        if (c.isValid)
          return Ge.before(o, c);
      }
    }
    return Ge.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    return this.isValid ? Ge.fromDateTimes(e || this.s, r || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const r = e.map(Ni).filter((s) => this.contains(s)).sort((s, o) => s.toMillis() - o.toMillis()), n = [];
    let { s: i } = this, a = 0;
    for (; i < this.e; ) {
      const s = r[a] || this.e, o = +s > +this.e ? this.e : s;
      n.push(Ge.fromDateTimes(i, o)), i = o, a += 1;
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
    const r = Ne.fromDurationLike(e);
    if (!this.isValid || !r.isValid || r.as("milliseconds") === 0)
      return [];
    let { s: n } = this, i = 1, a;
    const s = [];
    for (; n < this.e; ) {
      const o = this.start.plus(r.mapUnits((u) => u * i));
      a = +o > +this.e ? this.e : o, s.push(Ge.fromDateTimes(n, a)), n = a, i += 1;
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
    return r >= n ? null : Ge.fromDateTimes(r, n);
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
    return Ge.fromDateTimes(r, n);
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
    ]), s = Array.prototype.concat(...a), o = s.sort((u, c) => u.time - c.time);
    for (const u of o)
      n += u.type === "s" ? 1 : -1, n === 1 ? r = u.time : (r && +r != +u.time && i.push(Ge.fromDateTimes(r, u.time)), r = null);
    return Ge.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Ge.xor([this].concat(e)).map((r) => this.intersection(r)).filter((r) => r && !r.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Ln;
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
  toLocaleString(e = As, r = {}) {
    return this.isValid ? yt.create(this.s.loc.clone(r), e).formatInterval(this) : Ln;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Ln;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ln;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Ln;
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
    return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : Ln;
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
    return this.isValid ? this.e.diff(this.s, e, r) : Ne.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return Ge.fromDateTimes(e(this.s), e(this.e));
  }
}
class Ja {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = nt.defaultZone) {
    const r = ye.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && r.offset !== r.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return Sr.isValidZone(e);
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
    return Wr(e, nt.defaultZone);
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
    return { relative: Xp(), localeWeek: em() };
  }
}
function sd(t, e) {
  const r = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), n = r(e) - r(t);
  return Math.floor(Ne.fromMillis(n).as("days"));
}
function z1(t, e, r) {
  const n = [
    ["years", (u, c) => c.year - u.year],
    ["quarters", (u, c) => c.quarter - u.quarter + (c.year - u.year) * 4],
    ["months", (u, c) => c.month - u.month + (c.year - u.year) * 12],
    [
      "weeks",
      (u, c) => {
        const l = sd(u, c);
        return (l - l % 7) / 7;
      }
    ],
    ["days", sd]
  ], i = {}, a = t;
  let s, o;
  for (const [u, c] of n)
    r.indexOf(u) >= 0 && (s = u, i[u] = c(t, e), o = a.plus(i), o > e ? (i[u]--, t = a.plus(i), t > e && (o = t, i[u]--, t = a.plus(i))) : t = o);
  return [t, i, o, s];
}
function q1(t, e, r, n) {
  let [i, a, s, o] = z1(t, e, r);
  const u = e - i, c = r.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  c.length === 0 && (s < e && (s = i.plus({ [o]: 1 })), s !== i && (a[o] = (a[o] || 0) + u / (s - i)));
  const l = Ne.fromObject(a, n);
  return c.length > 0 ? Ne.fromMillis(u, n).shiftTo(...c).plus(l) : l;
}
const vl = {
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
}, od = {
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
}, U1 = vl.hanidec.replace(/[\[|\]]/g, "").split("");
function W1(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let r = 0; r < t.length; r++) {
      const n = t.charCodeAt(r);
      if (t[r].search(vl.hanidec) !== -1)
        e += U1.indexOf(t[r]);
      else
        for (const i in od) {
          const [a, s] = od[i];
          n >= a && n <= s && (e += n - a);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Ut({ numberingSystem: t }, e = "") {
  return new RegExp(`${vl[t || "latn"]}${e}`);
}
const B1 = "missing Intl.DateTimeFormat.formatToParts support";
function Pe(t, e = (r) => r) {
  return { regex: t, deser: ([r]) => e(W1(r)) };
}
const H1 = " ", gm = `[ ${H1}]`, bm = new RegExp(gm, "g");
function Q1(t) {
  return t.replace(/\./g, "\\.?").replace(bm, gm);
}
function ud(t) {
  return t.replace(/\./g, "").replace(bm, " ").toLowerCase();
}
function Wt(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(Q1).join("|")),
    deser: ([r]) => t.findIndex((n) => ud(r) === ud(n)) + e
  };
}
function cd(t, e) {
  return { regex: t, deser: ([, r, n]) => go(r, n), groups: e };
}
function Ka(t) {
  return { regex: t, deser: ([e]) => e };
}
function Y1(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Z1(t, e) {
  const r = Ut(e), n = Ut(e, "{2}"), i = Ut(e, "{3}"), a = Ut(e, "{4}"), s = Ut(e, "{6}"), o = Ut(e, "{1,2}"), u = Ut(e, "{1,3}"), c = Ut(e, "{1,6}"), l = Ut(e, "{1,9}"), f = Ut(e, "{2,4}"), d = Ut(e, "{4,6}"), h = (m) => ({ regex: RegExp(Y1(m.val)), deser: ([y]) => y, literal: !0 }), v = ((m) => {
    if (t.literal)
      return h(m);
    switch (m.val) {
      case "G":
        return Wt(e.eras("short"), 0);
      case "GG":
        return Wt(e.eras("long"), 0);
      case "y":
        return Pe(c);
      case "yy":
        return Pe(f, uc);
      case "yyyy":
        return Pe(a);
      case "yyyyy":
        return Pe(d);
      case "yyyyyy":
        return Pe(s);
      case "M":
        return Pe(o);
      case "MM":
        return Pe(n);
      case "MMM":
        return Wt(e.months("short", !0), 1);
      case "MMMM":
        return Wt(e.months("long", !0), 1);
      case "L":
        return Pe(o);
      case "LL":
        return Pe(n);
      case "LLL":
        return Wt(e.months("short", !1), 1);
      case "LLLL":
        return Wt(e.months("long", !1), 1);
      case "d":
        return Pe(o);
      case "dd":
        return Pe(n);
      case "o":
        return Pe(u);
      case "ooo":
        return Pe(i);
      case "HH":
        return Pe(n);
      case "H":
        return Pe(o);
      case "hh":
        return Pe(n);
      case "h":
        return Pe(o);
      case "mm":
        return Pe(n);
      case "m":
        return Pe(o);
      case "q":
        return Pe(o);
      case "qq":
        return Pe(n);
      case "s":
        return Pe(o);
      case "ss":
        return Pe(n);
      case "S":
        return Pe(u);
      case "SSS":
        return Pe(i);
      case "u":
        return Ka(l);
      case "uu":
        return Ka(o);
      case "uuu":
        return Pe(r);
      case "a":
        return Wt(e.meridiems(), 0);
      case "kkkk":
        return Pe(a);
      case "kk":
        return Pe(f, uc);
      case "W":
        return Pe(o);
      case "WW":
        return Pe(n);
      case "E":
      case "c":
        return Pe(r);
      case "EEE":
        return Wt(e.weekdays("short", !1), 1);
      case "EEEE":
        return Wt(e.weekdays("long", !1), 1);
      case "ccc":
        return Wt(e.weekdays("short", !0), 1);
      case "cccc":
        return Wt(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return cd(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return cd(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return Ka(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Ka(/[^\S\n\r]/);
      default:
        return h(m);
    }
  })(t) || {
    invalidReason: B1
  };
  return v.token = t, v;
}
const G1 = {
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
function J1(t, e, r) {
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
  let o = G1[s];
  if (typeof o == "object" && (o = o[a]), o)
    return {
      literal: !1,
      val: o
    };
}
function K1(t) {
  return [`^${t.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, t];
}
function X1(t, e, r) {
  const n = t.match(e);
  if (n) {
    const i = {};
    let a = 1;
    for (const s in r)
      if (si(r, s)) {
        const o = r[s], u = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(n.slice(a, a + u))), a += u;
      }
    return [n, i];
  } else
    return [n, {}];
}
function ew(t) {
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
  return me(t.z) || (r = Sr.create(t.z)), me(t.Z) || (r || (r = new Tt(t.Z)), n = t.Z), me(t.q) || (t.M = (t.q - 1) * 3 + 1), me(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), me(t.u) || (t.S = fl(t.u)), [Object.keys(t).reduce((a, s) => {
    const o = e(s);
    return o && (a[o] = t[s]), a;
  }, {}), r, n];
}
let nu = null;
function tw() {
  return nu || (nu = ye.fromMillis(1555555555555)), nu;
}
function rw(t, e) {
  if (t.literal)
    return t;
  const r = yt.macroTokenToFormatOpts(t.val), n = xm(r, e);
  return n == null || n.includes(void 0) ? t : n;
}
function wm(t, e) {
  return Array.prototype.concat(...t.map((r) => rw(r, e)));
}
function Em(t, e, r) {
  const n = wm(yt.parseFormat(r), t), i = n.map((s) => Z1(s, t)), a = i.find((s) => s.invalidReason);
  if (a)
    return { input: e, tokens: n, invalidReason: a.invalidReason };
  {
    const [s, o] = K1(i), u = RegExp(s, "i"), [c, l] = X1(e, u, o), [f, d, h] = l ? ew(l) : [null, null, void 0];
    if (si(l, "a") && si(l, "H"))
      throw new Wn(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: n, regex: u, rawMatches: c, matches: l, result: f, zone: d, specificOffset: h };
  }
}
function nw(t, e, r) {
  const { result: n, zone: i, specificOffset: a, invalidReason: s } = Em(t, e, r);
  return [n, i, a, s];
}
function xm(t, e) {
  if (!t)
    return null;
  const n = yt.create(e, t).dtFormatter(tw()), i = n.formatToParts(), a = n.resolvedOptions();
  return i.map((s) => J1(s, t, a));
}
const iu = "Invalid DateTime", ld = 864e13;
function Xa(t) {
  return new Gt("unsupported zone", `the zone "${t.name}" is not supported`);
}
function au(t) {
  return t.weekData === null && (t.weekData = Ds(t.c)), t.weekData;
}
function su(t) {
  return t.localWeekData === null && (t.localWeekData = Ds(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function cn(t, e) {
  const r = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new ye({ ...r, ...e, old: r });
}
function km(t, e, r) {
  let n = t - e * 60 * 1e3;
  const i = r.offset(n);
  if (e === i)
    return [n, e];
  n -= (i - e) * 60 * 1e3;
  const a = r.offset(n);
  return i === a ? [n, i] : [t - Math.min(i, a) * 60 * 1e3, Math.max(i, a)];
}
function es(t, e) {
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
function vs(t, e, r) {
  return km(yo(t), e, r);
}
function fd(t, e) {
  const r = t.o, n = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, a = {
    ...t.c,
    year: n,
    month: i,
    day: Math.min(t.c.day, Rs(n, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, s = Ne.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = yo(a);
  let [u, c] = km(o, r, t.zone);
  return s !== 0 && (u += s, c = t.zone.offset(u)), { ts: u, o: c };
}
function Ci(t, e, r, n, i, a) {
  const { setZone: s, zone: o } = r;
  if (t && Object.keys(t).length !== 0 || e) {
    const u = e || o, c = ye.fromObject(t, {
      ...r,
      zone: u,
      specificOffset: a
    });
    return s ? c : c.setZone(o);
  } else
    return ye.invalid(
      new Gt("unparsable", `the input "${i}" can't be parsed as ${n}`)
    );
}
function ts(t, e, r = !0) {
  return t.isValid ? yt.create(Ue.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function ou(t, e) {
  const r = t.c.year > 9999 || t.c.year < 0;
  let n = "";
  return r && t.c.year >= 0 && (n += "+"), n += ot(t.c.year, r ? 6 : 4), e ? (n += "-", n += ot(t.c.month), n += "-", n += ot(t.c.day)) : (n += ot(t.c.month), n += ot(t.c.day)), n;
}
function dd(t, e, r, n, i, a) {
  let s = ot(t.c.hour);
  return e ? (s += ":", s += ot(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (s += ":")) : s += ot(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (s += ot(t.c.second), (t.c.millisecond !== 0 || !n) && (s += ".", s += ot(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !a ? s += "Z" : t.o < 0 ? (s += "-", s += ot(Math.trunc(-t.o / 60)), s += ":", s += ot(Math.trunc(-t.o % 60))) : (s += "+", s += ot(Math.trunc(t.o / 60)), s += ":", s += ot(Math.trunc(t.o % 60)))), a && (s += "[" + t.zone.ianaName + "]"), s;
}
const _m = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, iw = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, aw = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Tm = ["year", "month", "day", "hour", "minute", "second", "millisecond"], sw = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], ow = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function uw(t) {
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
    throw new Op(t);
  return e;
}
function hd(t) {
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
      return uw(t);
  }
}
function pd(t, e) {
  const r = Wr(e.zone, nt.defaultZone), n = Ue.fromObject(e), i = nt.now();
  let a, s;
  if (me(t.year))
    a = i;
  else {
    for (const c of Tm)
      me(t[c]) && (t[c] = _m[c]);
    const o = Jp(t) || Kp(t);
    if (o)
      return ye.invalid(o);
    const u = r.offset(i);
    [a, s] = vs(t, u, r);
  }
  return new ye({ ts: a, zone: r, loc: n, o: s });
}
function md(t, e, r) {
  const n = me(r.round) ? !0 : r.round, i = (s, o) => (s = dl(s, n || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(s, o)), a = (s) => r.calendary ? e.hasSame(t, s) ? 0 : e.startOf(s).diff(t.startOf(s), s).get(s) : e.diff(t, s).get(s);
  if (r.unit)
    return i(a(r.unit), r.unit);
  for (const s of r.units) {
    const o = a(s);
    if (Math.abs(o) >= 1)
      return i(o, s);
  }
  return i(t > e ? -0 : 0, r.units[r.units.length - 1]);
}
function vd(t) {
  let e = {}, r;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], r = Array.from(t).slice(0, t.length - 1)) : r = Array.from(t), [e, r];
}
class ye {
  /**
   * @access private
   */
  constructor(e) {
    const r = e.zone || nt.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new Gt("invalid input") : null) || (r.isValid ? null : Xa(r));
    this.ts = me(e.ts) ? nt.now() : e.ts;
    let i = null, a = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(r))
        [i, a] = [e.old.c, e.old.o];
      else {
        const o = r.offset(this.ts);
        i = es(this.ts, o), n = Number.isNaN(i.year) ? new Gt("invalid input") : null, i = n ? null : i, a = n ? null : o;
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
    return new ye({});
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
    const [e, r] = vd(arguments), [n, i, a, s, o, u, c] = r;
    return pd({ year: n, month: i, day: a, hour: s, minute: o, second: u, millisecond: c }, e);
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
    const [e, r] = vd(arguments), [n, i, a, s, o, u, c] = r;
    return e.zone = Tt.utcInstance, pd({ year: n, month: i, day: a, hour: s, minute: o, second: u, millisecond: c }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, r = {}) {
    const n = Lb(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return ye.invalid("invalid input");
    const i = Wr(r.zone, nt.defaultZone);
    return i.isValid ? new ye({
      ts: n,
      zone: i,
      loc: Ue.fromObject(r)
    }) : ye.invalid(Xa(i));
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
    if (kn(e))
      return e < -ld || e > ld ? ye.invalid("Timestamp out of range") : new ye({
        ts: e,
        zone: Wr(r.zone, nt.defaultZone),
        loc: Ue.fromObject(r)
      });
    throw new Ct(
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
    if (kn(e))
      return new ye({
        ts: e * 1e3,
        zone: Wr(r.zone, nt.defaultZone),
        loc: Ue.fromObject(r)
      });
    throw new Ct("fromSeconds requires a numerical input");
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
    const n = Wr(r.zone, nt.defaultZone);
    if (!n.isValid)
      return ye.invalid(Xa(n));
    const i = Ue.fromObject(r), a = Ps(e, hd), { minDaysInFirstWeek: s, startOfWeek: o } = Xf(a, i), u = nt.now(), c = me(r.specificOffset) ? n.offset(u) : r.specificOffset, l = !me(a.ordinal), f = !me(a.year), d = !me(a.month) || !me(a.day), h = f || d, p = a.weekYear || a.weekNumber;
    if ((h || l) && p)
      throw new Wn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (d && l)
      throw new Wn("Can't mix ordinal dates with month/day");
    const v = p || a.weekday && !h;
    let m, y, g = es(u, c);
    v ? (m = sw, y = iw, g = Ds(g, s, o)) : l ? (m = ow, y = aw, g = ru(g)) : (m = Tm, y = _m);
    let w = !1;
    for (const F of m) {
      const j = a[F];
      me(j) ? w ? a[F] = y[F] : a[F] = g[F] : w = !0;
    }
    const k = v ? Pb(a, s, o) : l ? Mb(a) : Jp(a), b = k || Kp(a);
    if (b)
      return ye.invalid(b);
    const S = v ? Jf(a, s, o) : l ? Kf(a) : a, [D, N] = vs(S, c, n), A = new ye({
      ts: D,
      zone: n,
      o: N,
      loc: i
    });
    return a.weekday && h && e.weekday !== A.weekday ? ye.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${A.toISO()}`
    ) : A;
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
    const [n, i] = S1(e);
    return Ci(n, i, r, "ISO 8601", e);
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
    const [n, i] = O1(e);
    return Ci(n, i, r, "RFC 2822", e);
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
    const [n, i] = I1(e);
    return Ci(n, i, r, "HTTP", r);
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
    if (me(e) || me(r))
      throw new Ct("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: a = null } = n, s = Ue.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    }), [o, u, c, l] = nw(s, e, r);
    return l ? ye.invalid(l) : Ci(o, u, n, `format ${r}`, e, c);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, r, n = {}) {
    return ye.fromFormat(e, r, n);
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
    const [n, i] = M1(e);
    return Ci(n, i, r, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new Ct("need to specify a reason the DateTime is invalid");
    const n = e instanceof Gt ? e : new Gt(e, r);
    if (nt.throwOnInvalid)
      throw new lb(n);
    return new ye({ invalid: n });
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
    const n = xm(e, Ue.fromObject(r));
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
    return wm(yt.parseFormat(e), Ue.fromObject(r)).map((i) => i.val).join("");
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
    return this.isValid ? au(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? au(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? au(this).weekday : NaN;
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
    return this.isValid ? su(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? su(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? su(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? ru(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Ja.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Ja.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Ja.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Ja.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, r = 6e4, n = yo(this.c), i = this.zone.offset(n - e), a = this.zone.offset(n + e), s = this.zone.offset(n - i * r), o = this.zone.offset(n - a * r);
    if (s === o)
      return [this];
    const u = n - s * r, c = n - o * r, l = es(u, s), f = es(c, o);
    return l.hour === f.hour && l.minute === f.minute && l.second === f.second && l.millisecond === f.millisecond ? [cn(this, { ts: u }), cn(this, { ts: c })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return _a(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Rs(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Kn(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? oa(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? oa(
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
    const { locale: r, numberingSystem: n, calendar: i } = yt.create(
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
    return this.setZone(Tt.instance(e), r);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(nt.defaultZone);
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
    if (e = Wr(e, nt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (r || n) {
        const a = e.offset(this.ts), s = this.toObject();
        [i] = vs(s, a, e);
      }
      return cn(this, { ts: i, zone: e });
    } else
      return ye.invalid(Xa(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: r, outputCalendar: n } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: r, outputCalendar: n });
    return cn(this, { loc: i });
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
    const r = Ps(e, hd), { minDaysInFirstWeek: n, startOfWeek: i } = Xf(r, this.loc), a = !me(r.weekYear) || !me(r.weekNumber) || !me(r.weekday), s = !me(r.ordinal), o = !me(r.year), u = !me(r.month) || !me(r.day), c = o || u, l = r.weekYear || r.weekNumber;
    if ((c || s) && l)
      throw new Wn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && s)
      throw new Wn("Can't mix ordinal dates with month/day");
    let f;
    a ? f = Jf(
      { ...Ds(this.c, n, i), ...r },
      n,
      i
    ) : me(r.ordinal) ? (f = { ...this.toObject(), ...r }, me(r.day) && (f.day = Math.min(Rs(f.year, f.month), f.day))) : f = Kf({ ...ru(this.c), ...r });
    const [d, h] = vs(f, this.o, this.zone);
    return cn(this, { ts: d, o: h });
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
    const r = Ne.fromDurationLike(e);
    return cn(this, fd(this, r));
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
    const r = Ne.fromDurationLike(e).negate();
    return cn(this, fd(this, r));
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
    const n = {}, i = Ne.normalizeUnit(e);
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
    return this.isValid ? yt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : iu;
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
  toLocaleString(e = As, r = {}) {
    return this.isValid ? yt.create(this.loc.clone(r), e).formatDateTime(this) : iu;
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
    return this.isValid ? yt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    let o = ou(this, s);
    return o += "T", o += dd(this, s, r, n, i, a), o;
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
    return this.isValid ? ou(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return ts(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (i ? "T" : "") + dd(
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
    return ts(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return ts(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? ou(this, !0) : null;
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
    return (r || e) && (n && (i += " "), r ? i += "z" : e && (i += "ZZ")), ts(this, i, !0);
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
    return this.isValid ? this.toISO() : iu;
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
      return Ne.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n }, a = jb(r).map(Ne.normalizeUnit), s = e.valueOf() > this.valueOf(), o = s ? this : e, u = s ? e : this, c = q1(o, u, a, i);
    return s ? c.negate() : c;
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
    return this.diff(ye.now(), e, r);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? Ge.fromDateTimes(this, e) : this;
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
    const r = e.base || ye.fromObject({}, { zone: this.zone }), n = e.padding ? this < r ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], a = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, a = void 0), md(r, this.plus(n), {
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
    return this.isValid ? md(e.base || ye.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(ye.isDateTime))
      throw new Ct("min requires all arguments be DateTimes");
    return ed(e, (r) => r.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(ye.isDateTime))
      throw new Ct("max requires all arguments be DateTimes");
    return ed(e, (r) => r.valueOf(), Math.max);
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
    return Em(s, e, r);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, r, n = {}) {
    return ye.fromFormatExplain(e, r, n);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return As;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Ip;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return hb;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Cp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Np;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Ap;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Dp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Rp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Pp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Mp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Fp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Lp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return jp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Vp;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return $p;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return zp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return qp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return pb;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Up;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Wp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Bp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Hp;
  }
}
function Ni(t) {
  if (ye.isDateTime(t))
    return t;
  if (t && t.valueOf && kn(t.valueOf()))
    return ye.fromJSDate(t);
  if (t && typeof t == "object")
    return ye.fromObject(t);
  throw new Ct(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const Ms = {
  isProd: !0,
  isDev: !1,
  ssoUrl: "https://media-library-api.spillover.com/sso",
  ssoDevUrl: "http://localhost:3030/sso",
  engageGraphqlEndpoint: "https://rails-admin.spillover.com/graphql",
  engageGraphqlDevEndpoint: "http://localhost:8080/graphql"
};
var uu = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}, cw = function() {
  function t(e) {
    var r = e.debug, n = r === void 0 ? !1 : r;
    this.debug = n, this.lines = [];
  }
  return t.prototype.emit = function(e, r) {
    if (e in console) {
      var n = t.prefix;
      console[e].apply(console, uu([n], r, !1));
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
    this.lines = uu(uu([], this.lines.slice(1 - n), !0), [[e, r]], !1), (this.debug || e !== "log") && this.emit(e, r);
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
}(), lw = function() {
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
}(), rs = function(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(l) {
      try {
        c(n.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(o, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}, ns = function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Sm = function() {
  function t(e) {
    var r = e.storage, n = e.key, i = n === void 0 ? "apollo-cache-persist" : n;
    this.storage = r, this.key = i;
  }
  return t.prototype.read = function() {
    return rs(this, void 0, void 0, function() {
      return ns(this, function(e) {
        return [2, this.storage.getItem(this.key)];
      });
    });
  }, t.prototype.write = function(e) {
    return rs(this, void 0, void 0, function() {
      return ns(this, function(r) {
        switch (r.label) {
          case 0:
            return [4, this.storage.setItem(this.key, e)];
          case 1:
            return r.sent(), [2];
        }
      });
    });
  }, t.prototype.purge = function() {
    return rs(this, void 0, void 0, function() {
      return ns(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, this.storage.removeItem(this.key)];
          case 1:
            return e.sent(), [2];
        }
      });
    });
  }, t.prototype.getSize = function() {
    return rs(this, void 0, void 0, function() {
      var e;
      return ns(this, function(r) {
        switch (r.label) {
          case 0:
            return [4, this.storage.getItem(this.key)];
          case 1:
            return e = r.sent(), e == null ? [2, 0] : [2, typeof e == "string" ? e.length : null];
        }
      });
    });
  }, t;
}(), cu = function(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(l) {
      try {
        c(n.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(o, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}, lu = function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Om = function() {
  function t(e, r) {
    var n = e.log, i = e.cache, a = e.storage, s = r.maxSize, o = s === void 0 ? 1024 * 1024 : s, u = r.persistenceMapper;
    this.log = n, this.cache = i, this.storage = a, this.paused = !1, u && (this.persistenceMapper = u), o && (this.maxSize = o);
  }
  return t.prototype.persist = function() {
    return cu(this, void 0, void 0, function() {
      var e, r;
      return lu(this, function(n) {
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
    return cu(this, void 0, void 0, function() {
      var e, r;
      return lu(this, function(n) {
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
    return cu(this, void 0, void 0, function() {
      var e;
      return lu(this, function(r) {
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
const Im = function(t) {
  var e = t.cache;
  return function(r) {
    var n = e.write, i = e.evict, a = e.modify, s = e.gc;
    return e.write = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var c = n.apply(e, o);
      return r(), c;
    }, e.evict = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var c = i.apply(e, o);
      return r(), c;
    }, e.modify = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var c = a.apply(e, o);
      return r(), c;
    }, e.gc = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      var c = s.apply(e, o);
      return r(), c;
    }, function() {
      e.write = n, e.evict = i, e.modify = a, e.gc = s;
    };
  };
}, fw = function(t) {
  var e = t.log, r = t.cache;
  return function(n) {
    return e.warn("Trigger option `background` not available on web; using `write` trigger"), Im({ cache: r })(n);
  };
};
var dw = function() {
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
    var s = t.defaultDebounce, o = r.cache, u = r.debounce, c = r.trigger, l = c === void 0 ? "write" : c;
    if (l)
      switch (this.debounce = u ?? s, this.persistor = i, this.paused = !1, l) {
        case "write":
          this.uninstall = Im({ cache: o })(this.fire);
          break;
        case "background":
          u && n.warn("Debounce is not recommended with `background` trigger"), this.debounce = u, this.uninstall = fw({ cache: o, log: n })(this.fire);
          break;
        default:
          if (typeof l == "function")
            this.uninstall = l(this.fire);
          else
            throw Error("Unrecognized trigger option: ".concat(l));
      }
  }
  return t.prototype.pause = function() {
    this.paused = !0;
  }, t.prototype.resume = function() {
    this.paused = !1;
  }, t.prototype.remove = function() {
    this.uninstall && (this.uninstall(), this.uninstall = null, this.paused = !0);
  }, t.defaultDebounce = 1e3, t;
}(), hw = function() {
  function t(e) {
    if (!e.cache)
      throw new Error("In order to persist your Apollo Cache, you need to pass in a cache. Please see https://www.apollographql.com/docs/react/basics/caching.html for our default InMemoryCache.");
    if (!e.storage)
      throw new Error("In order to persist your Apollo Cache, you need to pass in an underlying storage provider. Please see https://github.com/apollographql/apollo-cache-persist#storage-providers");
    var r = new cw(e), n = new lw(e), i = new Sm(e), a = new Om({ log: r, cache: n, storage: i }, e), s = new dw({ log: r, persistor: a }, e);
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
}(), yl = /* @__PURE__ */ function() {
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
  yl(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.storage = new mw(r), n.persistor = new pw({ log: n.log, cache: n.cache, storage: n.storage }, r), n;
  }
  return e.prototype.restoreSync = function() {
    this.persistor.restoreSync();
  }, e;
})(hw);
var pw = function(t) {
  yl(e, t);
  function e(r, n) {
    var i = r.log, a = r.cache, s = r.storage;
    return t.call(this, { log: i, cache: a, storage: s }, n) || this;
  }
  return e.prototype.restoreSync = function() {
    this.cache.restore(this.storage.readSync());
  }, e;
}(Om), mw = function(t) {
  yl(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.readSync = function() {
    return this.storage.getItem(this.key);
  }, e;
}(Sm), vw = function() {
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
function Cm(t, e, r = window) {
  const n = Ie();
  $e(() => {
    n.current = e;
  }, [e]), $e(
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
const yd = new vw(window.localStorage);
function yw(t, e, r = { sync: !1 }) {
  const [n, i] = bt(() => {
    try {
      const o = yd.getItem(t);
      return o ? JSON.parse(o) : e;
    } catch (o) {
      return console.error(o), e;
    }
  }), a = mn(
    (o) => {
      !o.isTrusted || !r.sync || o.key === t && i(JSON.parse(o.newValue));
    },
    [t, i]
  );
  return Cm("storage", a), [n, (o) => {
    try {
      const u = o instanceof Function ? o(n) : o;
      i(u), yd.setItem(
        t,
        u !== null ? JSON.stringify(u) : null
      );
    } catch (u) {
      console.error(u);
    }
  }];
}
class ua {
  constructor(e) {
    this.accessToken = e.accessToken, this.expiresAt = e.expiresAt, this.ownerId = e.ownerId;
  }
  static fromOAuthResponse(e, r) {
    return new ua({
      accessToken: e.access_token,
      expiresAt: ye.now().plus({ seconds: e.expires_in }),
      ownerId: r
    });
  }
  static fromStored(e) {
    return new ua({
      ...e,
      expiresAt: ye.fromISO(e.expiresAt)
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
function gw({ mode: t, onComplete: e }) {
  const r = Ie(), n = mn((i) => {
    var o;
    if (((o = r.current) == null ? void 0 : o.contentWindow) !== i.source)
      return;
    const { data: { type: a, payload: s } } = i;
    e && a === "SSO_CALLBACK" && e(s);
  }, [r, e]);
  return Cm("message", n), /* @__PURE__ */ G.jsx(
    "iframe",
    {
      ref: r,
      src: t === "development" ? Ms.ssoDevUrl : Ms.ssoUrl,
      className: "sfs-border-0 sfs-w-0 sfs-h-0 sfs-absolute sfs-invisible",
      width: 0,
      height: 0
    }
  );
}
const Nm = Dt({
  isAuthenticated: !1,
  tokenData: null,
  reauth: () => {
  },
  handleSSOComplete: () => {
  }
});
function bw({ children: t, mode: e, ownerId: r }) {
  const n = xw({ ownerId: r });
  return n.isAuthenticated ? /* @__PURE__ */ G.jsx(Nm.Provider, { value: n, children: t }) : /* @__PURE__ */ G.jsx(gw, { mode: e, onComplete: n.handleSSOComplete });
}
function ww() {
  return wt(Nm);
}
const Ew = "sfsTokenData";
function xw({ ownerId: t }) {
  let e;
  const [r, n] = yw(Ew), i = (o) => {
    if (o.error) {
      console.error("SSO callback error", o.error);
      return;
    }
    const u = ua.fromOAuthResponse(o, t);
    n(u.dataForStorage);
  }, a = () => {
    n(null);
  };
  r && (t !== r.ownerId ? a() : e = ua.fromStored(r));
  const s = !!(e != null && e.accessToken);
  return {
    accessToken: e == null ? void 0 : e.accessToken,
    isAuthenticated: s,
    reauth: a,
    handleSSOComplete: i
  };
}
var cc = function(t, e) {
  return cc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, cc(t, e);
};
function tr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  cc(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var _ = function() {
  return _ = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _.apply(this, arguments);
};
function Or(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function $r(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(l) {
      try {
        c(n.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(o, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function zr(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Jt(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
var fu = "Invariant Violation", gd = Object.setPrototypeOf, kw = gd === void 0 ? function(t, e) {
  return t.__proto__ = e, t;
} : gd, Am = (
  /** @class */
  function(t) {
    tr(e, t);
    function e(r) {
      r === void 0 && (r = fu);
      var n = t.call(this, typeof r == "number" ? fu + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = fu, kw(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function hn(t, e) {
  if (!t)
    throw new Am(e);
}
var Dm = ["debug", "log", "warn", "error", "silent"], _w = Dm.indexOf("log");
function is(t) {
  return function() {
    if (Dm.indexOf(t) >= _w) {
      var e = console[t] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(t) {
  t.debug = is("debug"), t.log = is("log"), t.warn = is("warn"), t.error = is("error");
})(hn || (hn = {}));
var gl = "3.10.4";
function Ht(t) {
  try {
    return t();
  } catch {
  }
}
const lc = Ht(function() {
  return globalThis;
}) || Ht(function() {
  return window;
}) || Ht(function() {
  return self;
}) || Ht(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
Ht(function() {
  return Ht.constructor("return this")();
});
var bd = /* @__PURE__ */ new Map();
function fc(t) {
  var e = bd.get(t) || 1;
  return bd.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function Rm(t, e) {
  e === void 0 && (e = 0);
  var r = fc("stringifyForDisplay");
  return JSON.stringify(t, function(n, i) {
    return i === void 0 ? r : i;
  }, e).split(JSON.stringify(r)).join("<undefined>");
}
function as(t) {
  return function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (typeof e == "number") {
      var i = e;
      e = bl(i), e || (e = wl(i, r), r = []);
    }
    t.apply(void 0, [e].concat(r));
  };
}
var oe = Object.assign(function(e, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  e || hn(e, bl(r, n) || wl(r, n));
}, {
  debug: as(hn.debug),
  log: as(hn.log),
  warn: as(hn.warn),
  error: as(hn.error)
});
function St(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return new Am(bl(t, e) || wl(t, e));
}
var wd = Symbol.for("ApolloErrorMessageHandler_" + gl);
function Pm(t) {
  return typeof t == "string" ? t : Rm(t, 2).slice(0, 1e3);
}
function bl(t, e) {
  if (e === void 0 && (e = []), !!t)
    return lc[wd] && lc[wd](t, e.map(Pm));
}
function wl(t, e) {
  if (e === void 0 && (e = []), !!t)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: gl,
      message: t,
      args: e.map(Pm)
    })));
}
function ys(t, e) {
  if (!!!t)
    throw new Error(e);
}
function Tw(t) {
  return typeof t == "object" && t !== null;
}
function Sw(t, e) {
  if (!!!t)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const Ow = /\r\n|[\n\r]/g;
function dc(t, e) {
  let r = 0, n = 1;
  for (const i of t.body.matchAll(Ow)) {
    if (typeof i.index == "number" || Sw(!1), i.index >= e)
      break;
    r = i.index + i[0].length, n += 1;
  }
  return {
    line: n,
    column: e + 1 - r
  };
}
function Iw(t) {
  return Mm(
    t.source,
    dc(t.source, t.start)
  );
}
function Mm(t, e) {
  const r = t.locationOffset.column - 1, n = "".padStart(r) + t.body, i = e.line - 1, a = t.locationOffset.line - 1, s = e.line + a, o = e.line === 1 ? r : 0, u = e.column + o, c = `${t.name}:${s}:${u}
`, l = n.split(/\r\n|[\n\r]/g), f = l[i];
  if (f.length > 120) {
    const d = Math.floor(u / 80), h = u % 80, p = [];
    for (let v = 0; v < f.length; v += 80)
      p.push(f.slice(v, v + 80));
    return c + Ed([
      [`${s} |`, p[0]],
      ...p.slice(1, d + 1).map((v) => ["|", v]),
      ["|", "^".padStart(h)],
      ["|", p[d + 1]]
    ]);
  }
  return c + Ed([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, l[i - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, l[i + 1]]
  ]);
}
function Ed(t) {
  const e = t.filter(([n, i]) => i !== void 0), r = Math.max(...e.map(([n]) => n.length));
  return e.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
}
function Cw(t) {
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
class El extends Error {
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
    const { nodes: s, source: o, positions: u, path: c, originalError: l, extensions: f } = Cw(r);
    super(e), this.name = "GraphQLError", this.path = c ?? void 0, this.originalError = l ?? void 0, this.nodes = xd(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = xd(
      (n = this.nodes) === null || n === void 0 ? void 0 : n.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = o ?? (d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (d == null ? void 0 : d.map((p) => p.start)), this.locations = u && o ? u.map((p) => dc(o, p)) : d == null ? void 0 : d.map((p) => dc(p.source, p.start));
    const h = Tw(
      l == null ? void 0 : l.extensions
    ) ? l == null ? void 0 : l.extensions : void 0;
    this.extensions = (a = f ?? h) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }), l != null && l.stack ? Object.defineProperty(this, "stack", {
      value: l.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, El) : Object.defineProperty(this, "stack", {
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

` + Iw(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        e += `

` + Mm(this.source, r);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function xd(t) {
  return t === void 0 || t.length === 0 ? void 0 : t;
}
function pt(t, e, r) {
  return new El(`Syntax Error: ${r}`, {
    source: t,
    positions: [e]
  });
}
class Nw {
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
class Fm {
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
const Lm = {
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
}, Aw = new Set(Object.keys(Lm));
function kd(t) {
  const e = t == null ? void 0 : t.kind;
  return typeof e == "string" && Aw.has(e);
}
var Bn;
(function(t) {
  t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
})(Bn || (Bn = {}));
var hc;
(function(t) {
  t.QUERY = "QUERY", t.MUTATION = "MUTATION", t.SUBSCRIPTION = "SUBSCRIPTION", t.FIELD = "FIELD", t.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", t.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", t.INLINE_FRAGMENT = "INLINE_FRAGMENT", t.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", t.SCHEMA = "SCHEMA", t.SCALAR = "SCALAR", t.OBJECT = "OBJECT", t.FIELD_DEFINITION = "FIELD_DEFINITION", t.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", t.INTERFACE = "INTERFACE", t.UNION = "UNION", t.ENUM = "ENUM", t.ENUM_VALUE = "ENUM_VALUE", t.INPUT_OBJECT = "INPUT_OBJECT", t.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(hc || (hc = {}));
var ee;
(function(t) {
  t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(ee || (ee = {}));
function pc(t) {
  return t === 9 || t === 32;
}
function ca(t) {
  return t >= 48 && t <= 57;
}
function jm(t) {
  return t >= 97 && t <= 122 || // A-Z
  t >= 65 && t <= 90;
}
function Vm(t) {
  return jm(t) || t === 95;
}
function Dw(t) {
  return jm(t) || ca(t) || t === 95;
}
function Rw(t) {
  var e;
  let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
  for (let s = 0; s < t.length; ++s) {
    var a;
    const o = t[s], u = Pw(o);
    u !== o.length && (n = (a = n) !== null && a !== void 0 ? a : s, i = s, s !== 0 && u < r && (r = u));
  }
  return t.map((s, o) => o === 0 ? s : s.slice(r)).slice(
    (e = n) !== null && e !== void 0 ? e : 0,
    i + 1
  );
}
function Pw(t) {
  let e = 0;
  for (; e < t.length && pc(t.charCodeAt(e)); )
    ++e;
  return e;
}
function Mw(t, e) {
  const r = t.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((h) => h.length === 0 || pc(h.charCodeAt(0))), s = r.endsWith('\\"""'), o = t.endsWith('"') && !s, u = t.endsWith("\\"), c = o || u, l = (
    // add leading and trailing new lines only if it improves readability
    !i || t.length > 70 || c || a || s
  );
  let f = "";
  const d = i && pc(t.charCodeAt(0));
  return (l && !d || a) && (f += `
`), f += r, (l || c) && (f += `
`), '"""' + f + '"""';
}
var I;
(function(t) {
  t.SOF = "<SOF>", t.EOF = "<EOF>", t.BANG = "!", t.DOLLAR = "$", t.AMP = "&", t.PAREN_L = "(", t.PAREN_R = ")", t.SPREAD = "...", t.COLON = ":", t.EQUALS = "=", t.AT = "@", t.BRACKET_L = "[", t.BRACKET_R = "]", t.BRACE_L = "{", t.PIPE = "|", t.BRACE_R = "}", t.NAME = "Name", t.INT = "Int", t.FLOAT = "Float", t.STRING = "String", t.BLOCK_STRING = "BlockString", t.COMMENT = "Comment";
})(I || (I = {}));
class Fw {
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
    const r = new Fm(I.SOF, 0, 0, 0, 0);
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
    if (e.kind !== I.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const r = jw(this, e.end);
          e.next = r, r.prev = e, e = r;
        }
      while (e.kind === I.COMMENT);
    return e;
  }
}
function Lw(t) {
  return t === I.BANG || t === I.DOLLAR || t === I.AMP || t === I.PAREN_L || t === I.PAREN_R || t === I.SPREAD || t === I.COLON || t === I.EQUALS || t === I.AT || t === I.BRACKET_L || t === I.BRACKET_R || t === I.BRACE_L || t === I.PIPE || t === I.BRACE_R;
}
function ki(t) {
  return t >= 0 && t <= 55295 || t >= 57344 && t <= 1114111;
}
function wo(t, e) {
  return $m(t.charCodeAt(e)) && zm(t.charCodeAt(e + 1));
}
function $m(t) {
  return t >= 55296 && t <= 56319;
}
function zm(t) {
  return t >= 56320 && t <= 57343;
}
function In(t, e) {
  const r = t.source.body.codePointAt(e);
  if (r === void 0)
    return I.EOF;
  if (r >= 32 && r <= 126) {
    const n = String.fromCodePoint(r);
    return n === '"' ? `'"'` : `"${n}"`;
  }
  return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
}
function st(t, e, r, n, i) {
  const a = t.line, s = 1 + r - t.lineStart;
  return new Fm(e, r, n, a, s, i);
}
function jw(t, e) {
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
        return Vw(t, i);
      case 33:
        return st(t, I.BANG, i, i + 1);
      case 36:
        return st(t, I.DOLLAR, i, i + 1);
      case 38:
        return st(t, I.AMP, i, i + 1);
      case 40:
        return st(t, I.PAREN_L, i, i + 1);
      case 41:
        return st(t, I.PAREN_R, i, i + 1);
      case 46:
        if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
          return st(t, I.SPREAD, i, i + 3);
        break;
      case 58:
        return st(t, I.COLON, i, i + 1);
      case 61:
        return st(t, I.EQUALS, i, i + 1);
      case 64:
        return st(t, I.AT, i, i + 1);
      case 91:
        return st(t, I.BRACKET_L, i, i + 1);
      case 93:
        return st(t, I.BRACKET_R, i, i + 1);
      case 123:
        return st(t, I.BRACE_L, i, i + 1);
      case 124:
        return st(t, I.PIPE, i, i + 1);
      case 125:
        return st(t, I.BRACE_R, i, i + 1);
      case 34:
        return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? Bw(t, i) : zw(t, i);
    }
    if (ca(a) || a === 45)
      return $w(t, i, a);
    if (Vm(a))
      return Hw(t, i);
    throw pt(
      t.source,
      i,
      a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : ki(a) || wo(r, i) ? `Unexpected character: ${In(t, i)}.` : `Invalid character: ${In(t, i)}.`
    );
  }
  return st(t, I.EOF, n, n);
}
function Vw(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (a === 10 || a === 13)
      break;
    if (ki(a))
      ++i;
    else if (wo(r, i))
      i += 2;
    else
      break;
  }
  return st(
    t,
    I.COMMENT,
    e,
    i,
    r.slice(e + 1, i)
  );
}
function $w(t, e, r) {
  const n = t.source.body;
  let i = e, a = r, s = !1;
  if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
    if (a = n.charCodeAt(++i), ca(a))
      throw pt(
        t.source,
        i,
        `Invalid number, unexpected digit after 0: ${In(
          t,
          i
        )}.`
      );
  } else
    i = du(t, i, a), a = n.charCodeAt(i);
  if (a === 46 && (s = !0, a = n.charCodeAt(++i), i = du(t, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (s = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = du(t, i, a), a = n.charCodeAt(i)), a === 46 || Vm(a))
    throw pt(
      t.source,
      i,
      `Invalid number, expected digit but got: ${In(
        t,
        i
      )}.`
    );
  return st(
    t,
    s ? I.FLOAT : I.INT,
    e,
    i,
    n.slice(e, i)
  );
}
function du(t, e, r) {
  if (!ca(r))
    throw pt(
      t.source,
      e,
      `Invalid number, expected digit but got: ${In(
        t,
        e
      )}.`
    );
  const n = t.source.body;
  let i = e + 1;
  for (; ca(n.charCodeAt(i)); )
    ++i;
  return i;
}
function zw(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1, a = i, s = "";
  for (; i < n; ) {
    const o = r.charCodeAt(i);
    if (o === 34)
      return s += r.slice(a, i), st(t, I.STRING, e, i + 1, s);
    if (o === 92) {
      s += r.slice(a, i);
      const u = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? qw(t, i) : Uw(t, i) : Ww(t, i);
      s += u.value, i += u.size, a = i;
      continue;
    }
    if (o === 10 || o === 13)
      break;
    if (ki(o))
      ++i;
    else if (wo(r, i))
      i += 2;
    else
      throw pt(
        t.source,
        i,
        `Invalid character within String: ${In(
          t,
          i
        )}.`
      );
  }
  throw pt(t.source, i, "Unterminated string.");
}
function qw(t, e) {
  const r = t.source.body;
  let n = 0, i = 3;
  for (; i < 12; ) {
    const a = r.charCodeAt(e + i++);
    if (a === 125) {
      if (i < 5 || !ki(n))
        break;
      return {
        value: String.fromCodePoint(n),
        size: i
      };
    }
    if (n = n << 4 | $i(a), n < 0)
      break;
  }
  throw pt(
    t.source,
    e,
    `Invalid Unicode escape sequence: "${r.slice(
      e,
      e + i
    )}".`
  );
}
function Uw(t, e) {
  const r = t.source.body, n = _d(r, e + 2);
  if (ki(n))
    return {
      value: String.fromCodePoint(n),
      size: 6
    };
  if ($m(n) && r.charCodeAt(e + 6) === 92 && r.charCodeAt(e + 7) === 117) {
    const i = _d(r, e + 8);
    if (zm(i))
      return {
        value: String.fromCodePoint(n, i),
        size: 12
      };
  }
  throw pt(
    t.source,
    e,
    `Invalid Unicode escape sequence: "${r.slice(e, e + 6)}".`
  );
}
function _d(t, e) {
  return $i(t.charCodeAt(e)) << 12 | $i(t.charCodeAt(e + 1)) << 8 | $i(t.charCodeAt(e + 2)) << 4 | $i(t.charCodeAt(e + 3));
}
function $i(t) {
  return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 70 ? t - 55 : t >= 97 && t <= 102 ? t - 87 : -1;
}
function Ww(t, e) {
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
  throw pt(
    t.source,
    e,
    `Invalid character escape sequence: "${r.slice(
      e,
      e + 2
    )}".`
  );
}
function Bw(t, e) {
  const r = t.source.body, n = r.length;
  let i = t.lineStart, a = e + 3, s = a, o = "";
  const u = [];
  for (; a < n; ) {
    const c = r.charCodeAt(a);
    if (c === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
      o += r.slice(s, a), u.push(o);
      const l = st(
        t,
        I.BLOCK_STRING,
        e,
        a + 3,
        // Return a string of the lines joined with U+000A.
        Rw(u).join(`
`)
      );
      return t.line += u.length - 1, t.lineStart = i, l;
    }
    if (c === 92 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34 && r.charCodeAt(a + 3) === 34) {
      o += r.slice(s, a), s = a + 1, a += 4;
      continue;
    }
    if (c === 10 || c === 13) {
      o += r.slice(s, a), u.push(o), c === 13 && r.charCodeAt(a + 1) === 10 ? a += 2 : ++a, o = "", s = a, i = a;
      continue;
    }
    if (ki(c))
      ++a;
    else if (wo(r, a))
      a += 2;
    else
      throw pt(
        t.source,
        a,
        `Invalid character within String: ${In(
          t,
          a
        )}.`
      );
  }
  throw pt(t.source, a, "Unterminated string.");
}
function Hw(t, e) {
  const r = t.source.body, n = r.length;
  let i = e + 1;
  for (; i < n; ) {
    const a = r.charCodeAt(i);
    if (Dw(a))
      ++i;
    else
      break;
  }
  return st(
    t,
    I.NAME,
    e,
    i,
    r.slice(e, i)
  );
}
const Qw = 10, qm = 2;
function xl(t) {
  return Eo(t, []);
}
function Eo(t, e) {
  switch (typeof t) {
    case "string":
      return JSON.stringify(t);
    case "function":
      return t.name ? `[function ${t.name}]` : "[function]";
    case "object":
      return Yw(t, e);
    default:
      return String(t);
  }
}
function Yw(t, e) {
  if (t === null)
    return "null";
  if (e.includes(t))
    return "[Circular]";
  const r = [...e, t];
  if (Zw(t)) {
    const n = t.toJSON();
    if (n !== t)
      return typeof n == "string" ? n : Eo(n, r);
  } else if (Array.isArray(t))
    return Jw(t, r);
  return Gw(t, r);
}
function Zw(t) {
  return typeof t.toJSON == "function";
}
function Gw(t, e) {
  const r = Object.entries(t);
  return r.length === 0 ? "{}" : e.length > qm ? "[" + Kw(t) + "]" : "{ " + r.map(
    ([i, a]) => i + ": " + Eo(a, e)
  ).join(", ") + " }";
}
function Jw(t, e) {
  if (t.length === 0)
    return "[]";
  if (e.length > qm)
    return "[Array]";
  const r = Math.min(Qw, t.length), n = t.length - r, i = [];
  for (let a = 0; a < r; ++a)
    i.push(Eo(t[a], e));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Kw(t) {
  const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof t.constructor == "function") {
    const r = t.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return e;
}
const Xw = (
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
        const s = xl(e);
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
class Um {
  constructor(e, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || ys(!1, `Body must be a string. Received: ${xl(e)}.`), this.body = e, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || ys(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || ys(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function eE(t) {
  return Xw(t, Um);
}
function tE(t, e) {
  return new rE(t, e).parseDocument();
}
class rE {
  constructor(e, r = {}) {
    const n = eE(e) ? e : new Um(e);
    this._lexer = new Fw(n), this._options = r, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(I.NAME);
    return this.node(e, {
      kind: ee.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: ee.DOCUMENT,
      definitions: this.many(
        I.SOF,
        this.parseDefinition,
        I.EOF
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
    if (this.peek(I.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), r = e ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === I.NAME) {
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
        throw pt(
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
    if (this.peek(I.BRACE_L))
      return this.node(e, {
        kind: ee.OPERATION_DEFINITION,
        operation: Bn.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let n;
    return this.peek(I.NAME) && (n = this.parseName()), this.node(e, {
      kind: ee.OPERATION_DEFINITION,
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
    const e = this.expectToken(I.NAME);
    switch (e.value) {
      case "query":
        return Bn.QUERY;
      case "mutation":
        return Bn.MUTATION;
      case "subscription":
        return Bn.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      I.PAREN_L,
      this.parseVariableDefinition,
      I.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: ee.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(I.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(I.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(I.DOLLAR), this.node(e, {
      kind: ee.VARIABLE,
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
      kind: ee.SELECTION_SET,
      selections: this.many(
        I.BRACE_L,
        this.parseSelection,
        I.BRACE_R
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
    return this.peek(I.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, r = this.parseName();
    let n, i;
    return this.expectOptionalToken(I.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(e, {
      kind: ee.FIELD,
      alias: n,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(I.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const r = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(I.PAREN_L, r, I.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(I.COLON), this.node(r, {
      kind: ee.ARGUMENT,
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
    this.expectToken(I.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(I.NAME) ? this.node(e, {
      kind: ee.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: ee.INLINE_FRAGMENT,
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
      kind: ee.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: ee.FRAGMENT_DEFINITION,
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
      case I.BRACKET_L:
        return this.parseList(e);
      case I.BRACE_L:
        return this.parseObject(e);
      case I.INT:
        return this.advanceLexer(), this.node(r, {
          kind: ee.INT,
          value: r.value
        });
      case I.FLOAT:
        return this.advanceLexer(), this.node(r, {
          kind: ee.FLOAT,
          value: r.value
        });
      case I.STRING:
      case I.BLOCK_STRING:
        return this.parseStringLiteral();
      case I.NAME:
        switch (this.advanceLexer(), r.value) {
          case "true":
            return this.node(r, {
              kind: ee.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: ee.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: ee.NULL
            });
          default:
            return this.node(r, {
              kind: ee.ENUM,
              value: r.value
            });
        }
      case I.DOLLAR:
        if (e)
          if (this.expectToken(I.DOLLAR), this._lexer.token.kind === I.NAME) {
            const n = this._lexer.token.value;
            throw pt(
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
      kind: ee.STRING,
      value: e.value,
      block: e.kind === I.BLOCK_STRING
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
      kind: ee.LIST,
      values: this.any(I.BRACKET_L, r, I.BRACKET_R)
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
      kind: ee.OBJECT,
      fields: this.any(I.BRACE_L, r, I.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const r = this._lexer.token, n = this.parseName();
    return this.expectToken(I.COLON), this.node(r, {
      kind: ee.OBJECT_FIELD,
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
    for (; this.peek(I.AT); )
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
    return this.expectToken(I.AT), this.node(r, {
      kind: ee.DIRECTIVE,
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
    if (this.expectOptionalToken(I.BRACKET_L)) {
      const n = this.parseTypeReference();
      this.expectToken(I.BRACKET_R), r = this.node(e, {
        kind: ee.LIST_TYPE,
        type: n
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(I.BANG) ? this.node(e, {
      kind: ee.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: ee.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(I.STRING) || this.peek(I.BLOCK_STRING);
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
      I.BRACE_L,
      this.parseOperationTypeDefinition,
      I.BRACE_R
    );
    return this.node(e, {
      kind: ee.SCHEMA_DEFINITION,
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
    this.expectToken(I.COLON);
    const n = this.parseNamedType();
    return this.node(e, {
      kind: ee.OPERATION_TYPE_DEFINITION,
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
      kind: ee.SCALAR_TYPE_DEFINITION,
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
      kind: ee.OBJECT_TYPE_DEFINITION,
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
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(I.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      I.BRACE_L,
      this.parseFieldDefinition,
      I.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(I.COLON);
    const a = this.parseTypeReference(), s = this.parseConstDirectives();
    return this.node(e, {
      kind: ee.FIELD_DEFINITION,
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
      I.PAREN_L,
      this.parseInputValueDef,
      I.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseName();
    this.expectToken(I.COLON);
    const i = this.parseTypeReference();
    let a;
    this.expectOptionalToken(I.EQUALS) && (a = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(e, {
      kind: ee.INPUT_VALUE_DEFINITION,
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
      kind: ee.INTERFACE_TYPE_DEFINITION,
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
      kind: ee.UNION_TYPE_DEFINITION,
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
    return this.expectOptionalToken(I.EQUALS) ? this.delimitedMany(I.PIPE, this.parseNamedType) : [];
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
      kind: ee.ENUM_TYPE_DEFINITION,
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
      I.BRACE_L,
      this.parseEnumValueDefinition,
      I.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(e, {
      kind: ee.ENUM_VALUE_DEFINITION,
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
      throw pt(
        this._lexer.source,
        this._lexer.token.start,
        `${ss(
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
      kind: ee.INPUT_OBJECT_TYPE_DEFINITION,
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
      I.BRACE_L,
      this.parseInputValueDef,
      I.BRACE_R
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
    if (e.kind === I.NAME)
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
      I.BRACE_L,
      this.parseOperationTypeDefinition,
      I.BRACE_R
    );
    if (r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: ee.SCHEMA_EXTENSION,
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
      kind: ee.SCALAR_TYPE_EXTENSION,
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
      kind: ee.OBJECT_TYPE_EXTENSION,
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
      kind: ee.INTERFACE_TYPE_EXTENSION,
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
      kind: ee.UNION_TYPE_EXTENSION,
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
      kind: ee.ENUM_TYPE_EXTENSION,
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
      kind: ee.INPUT_OBJECT_TYPE_EXTENSION,
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
    this.expectKeyword("directive"), this.expectToken(I.AT);
    const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(e, {
      kind: ee.DIRECTIVE_DEFINITION,
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
    return this.delimitedMany(I.PIPE, this.parseDirectiveLocation);
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
    if (Object.prototype.hasOwnProperty.call(hc, r.value))
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
    return this._options.noLocation !== !0 && (r.loc = new Nw(
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
    throw pt(
      this._lexer.source,
      r.start,
      `Expected ${Wm(e)}, found ${ss(r)}.`
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
    if (r.kind === I.NAME && r.value === e)
      this.advanceLexer();
    else
      throw pt(
        this._lexer.source,
        r.start,
        `Expected "${e}", found ${ss(r)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const r = this._lexer.token;
    return r.kind === I.NAME && r.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const r = e ?? this._lexer.token;
    return pt(
      this._lexer.source,
      r.start,
      `Unexpected ${ss(r)}.`
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
    if (e !== void 0 && r.kind !== I.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw pt(
        this._lexer.source,
        r.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function ss(t) {
  const e = t.value;
  return Wm(t.kind) + (e != null ? ` "${e}"` : "");
}
function Wm(t) {
  return Lw(t) ? `"${t}"` : t;
}
function nE(t) {
  return `"${t.replace(iE, aE)}"`;
}
const iE = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function aE(t) {
  return sE[t.charCodeAt(0)];
}
const sE = [
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
], kl = Object.freeze({});
function Ir(t, e, r = Lm) {
  const n = /* @__PURE__ */ new Map();
  for (const y of Object.values(ee))
    n.set(y, oE(e, y));
  let i, a = Array.isArray(t), s = [t], o = -1, u = [], c = t, l, f;
  const d = [], h = [];
  do {
    o++;
    const y = o === s.length, g = y && u.length !== 0;
    if (y) {
      if (l = h.length === 0 ? void 0 : d[d.length - 1], c = f, f = h.pop(), g)
        if (a) {
          c = c.slice();
          let k = 0;
          for (const [b, S] of u) {
            const D = b - k;
            S === null ? (c.splice(D, 1), k++) : c[D] = S;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [k, b] of u)
            c[k] = b;
        }
      o = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (f) {
      if (l = a ? o : s[o], c = f[l], c == null)
        continue;
      d.push(l);
    }
    let w;
    if (!Array.isArray(c)) {
      var p, v;
      kd(c) || ys(!1, `Invalid AST Node: ${xl(c)}.`);
      const k = y ? (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.leave : (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.enter;
      if (w = k == null ? void 0 : k.call(e, c, l, f, d, h), w === kl)
        break;
      if (w === !1) {
        if (!y) {
          d.pop();
          continue;
        }
      } else if (w !== void 0 && (u.push([l, w]), !y))
        if (kd(w))
          c = w;
        else {
          d.pop();
          continue;
        }
    }
    if (w === void 0 && g && u.push([l, c]), y)
      d.pop();
    else {
      var m;
      i = {
        inArray: a,
        index: o,
        keys: s,
        edits: u,
        prev: i
      }, a = Array.isArray(c), s = a ? c : (m = r[c.kind]) !== null && m !== void 0 ? m : [], o = -1, u = [], f && h.push(f), f = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : t;
}
function oE(t, e) {
  const r = t[e];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: t.enter,
    leave: t.leave
  };
}
function uE(t) {
  return Ir(t, lE);
}
const cE = 80, lE = {
  Name: {
    leave: (t) => t.value
  },
  Variable: {
    leave: (t) => "$" + t.name
  },
  // Document
  Document: {
    leave: (t) => te(t.definitions, `

`)
  },
  OperationDefinition: {
    leave(t) {
      const e = Oe("(", te(t.variableDefinitions, ", "), ")"), r = te(
        [
          t.operation,
          te([t.name, e]),
          te(t.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + t.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: t, type: e, defaultValue: r, directives: n }) => t + ": " + e + Oe(" = ", r) + Oe(" ", te(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: t }) => Bt(t)
  },
  Field: {
    leave({ alias: t, name: e, arguments: r, directives: n, selectionSet: i }) {
      const a = Oe("", t, ": ") + e;
      let s = a + Oe("(", te(r, ", "), ")");
      return s.length > cE && (s = a + Oe(`(
`, gs(te(r, `
`)), `
)`)), te([s, te(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: t, directives: e }) => "..." + t + Oe(" ", te(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: t, directives: e, selectionSet: r }) => te(
      [
        "...",
        Oe("on ", t),
        te(e, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: t, typeCondition: e, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${t}${Oe("(", te(r, ", "), ")")} on ${e} ${Oe("", te(n, " "), " ")}` + i
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
    leave: ({ value: t, block: e }) => e ? Mw(t) : nE(t)
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
    leave: ({ values: t }) => "[" + te(t, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: t }) => "{" + te(t, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: t, arguments: e }) => "@" + t + Oe("(", te(e, ", "), ")")
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
    leave: ({ description: t, directives: e, operationTypes: r }) => Oe("", t, `
`) + te(["schema", te(e, " "), Bt(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: t, type: e }) => t + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: t, name: e, directives: r }) => Oe("", t, `
`) + te(["scalar", e, te(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => Oe("", t, `
`) + te(
      [
        "type",
        e,
        Oe("implements ", te(r, " & ")),
        te(n, " "),
        Bt(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: t, name: e, arguments: r, type: n, directives: i }) => Oe("", t, `
`) + e + (Td(r) ? Oe(`(
`, gs(te(r, `
`)), `
)`) : Oe("(", te(r, ", "), ")")) + ": " + n + Oe(" ", te(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: t, name: e, type: r, defaultValue: n, directives: i }) => Oe("", t, `
`) + te(
      [e + ": " + r, Oe("= ", n), te(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => Oe("", t, `
`) + te(
      [
        "interface",
        e,
        Oe("implements ", te(r, " & ")),
        te(n, " "),
        Bt(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, types: n }) => Oe("", t, `
`) + te(
      ["union", e, te(r, " "), Oe("= ", te(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, values: n }) => Oe("", t, `
`) + te(["enum", e, te(r, " "), Bt(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: t, name: e, directives: r }) => Oe("", t, `
`) + te([e, te(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, fields: n }) => Oe("", t, `
`) + te(["input", e, te(r, " "), Bt(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: t, name: e, arguments: r, repeatable: n, locations: i }) => Oe("", t, `
`) + "directive @" + e + (Td(r) ? Oe(`(
`, gs(te(r, `
`)), `
)`) : Oe("(", te(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + te(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: t, operationTypes: e }) => te(
      ["extend schema", te(t, " "), Bt(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: t, directives: e }) => te(["extend scalar", t, te(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => te(
      [
        "extend type",
        t,
        Oe("implements ", te(e, " & ")),
        te(r, " "),
        Bt(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => te(
      [
        "extend interface",
        t,
        Oe("implements ", te(e, " & ")),
        te(r, " "),
        Bt(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: t, directives: e, types: r }) => te(
      [
        "extend union",
        t,
        te(e, " "),
        Oe("= ", te(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: t, directives: e, values: r }) => te(["extend enum", t, te(e, " "), Bt(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: t, directives: e, fields: r }) => te(["extend input", t, te(e, " "), Bt(r)], " ")
  }
};
function te(t, e = "") {
  var r;
  return (r = t == null ? void 0 : t.filter((n) => n).join(e)) !== null && r !== void 0 ? r : "";
}
function Bt(t) {
  return Oe(`{
`, gs(te(t, `
`)), `
}`);
}
function Oe(t, e, r = "") {
  return e != null && e !== "" ? t + e + r : "";
}
function gs(t) {
  return Oe("  ", t.replace(/\n/g, `
  `));
}
function Td(t) {
  var e;
  return (e = t == null ? void 0 : t.some((r) => r.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function Sd(t) {
  return t.kind === ee.FIELD || t.kind === ee.FRAGMENT_SPREAD || t.kind === ee.INLINE_FRAGMENT;
}
function Oa(t, e) {
  var r = t.directives;
  return !r || !r.length ? !0 : hE(r).every(function(n) {
    var i = n.directive, a = n.ifArgument, s = !1;
    return a.value.kind === "Variable" ? (s = e && e[a.value.name.value], oe(s !== void 0, 68, i.name.value)) : s = a.value.value, i.name.value === "skip" ? !s : s;
  });
}
function la(t, e, r) {
  var n = new Set(t), i = n.size;
  return Ir(e, {
    Directive: function(a) {
      if (n.delete(a.name.value) && (!r || !n.size))
        return kl;
    }
  }), r ? !n.size : n.size < i;
}
function fE(t) {
  return t && la(["client", "export"], t, !0);
}
function dE(t) {
  var e = t.name.value;
  return e === "skip" || e === "include";
}
function hE(t) {
  var e = [];
  return t && t.length && t.forEach(function(r) {
    if (dE(r)) {
      var n = r.arguments, i = r.name.value;
      oe(n && n.length === 1, 69, i);
      var a = n[0];
      oe(a.name && a.name.value === "if", 70, i);
      var s = a.value;
      oe(s && (s.kind === "Variable" || s.kind === "BooleanValue"), 71, i), e.push({ directive: r, ifArgument: a });
    }
  }), e;
}
const pE = () => /* @__PURE__ */ Object.create(null), { forEach: mE, slice: Od } = Array.prototype, { hasOwnProperty: vE } = Object.prototype;
let _i = class Bm {
  constructor(e = !0, r = pE) {
    this.weakness = e, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let r = this;
    return mE.call(e, (n) => r = r.getChildTrie(n)), vE.call(r, "data") ? r.data : r.data = this.makeData(Od.call(e));
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
      a && (r = a.removeArray(Od.call(e, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
    } else
      r = this.data, delete this.data;
    return r;
  }
  getChildTrie(e) {
    const r = this.mapFor(e, !0);
    let n = r.get(e);
    return n || r.set(e, n = new Bm(this.weakness, this.makeData)), n;
  }
  mapFor(e, r) {
    return this.weakness && yE(e) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function yE(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Ti = typeof WeakMap == "function" && !Ht(function() {
  return navigator.product == "ReactNative" && !global.HermesInternal;
}), Hm = typeof WeakSet == "function", _l = typeof Symbol == "function" && typeof Symbol.for == "function", xo = _l && Symbol.asyncIterator;
Ht(function() {
  return window.document.createElement;
});
Ht(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Xe(t) {
  return t !== null && typeof t == "object";
}
function gE(t, e) {
  var r = e, n = [];
  t.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw St(
        72,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof r > "u" && (oe(n.length === 1, 73, n.length), r = n[0].name.value);
  var i = _(_({}, t), { definitions: Jt([
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
function ko(t) {
  t === void 0 && (t = []);
  var e = {};
  return t.forEach(function(r) {
    e[r.name.value] = r;
  }), e;
}
function _o(t, e) {
  switch (t.kind) {
    case "InlineFragment":
      return t;
    case "FragmentSpread": {
      var r = t.name.value;
      if (typeof e == "function")
        return e(r);
      var n = e && e[r];
      return oe(n, 74, r), n || null;
    }
    default:
      return null;
  }
}
function bE() {
}
class mc {
  constructor(e = 1 / 0, r = bE) {
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
function vc() {
}
const wE = vc, EE = typeof WeakRef < "u" ? WeakRef : function(t) {
  return { deref: () => t };
}, xE = typeof WeakMap < "u" ? WeakMap : Map, kE = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: vc,
    unregister: vc
  };
}, _E = 10024;
class Fs {
  constructor(e = 1 / 0, r = wE) {
    this.max = e, this.dispose = r, this.map = new xE(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < _E; i++) {
        const a = n.next().value;
        if (!a)
          break;
        this.unfinalizedNodes.delete(a);
        const s = a.key;
        delete a.key, a.keyRef = new EE(s), this.registry.register(s, a, a);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new kE(this.deleteNode.bind(this));
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
var hu = /* @__PURE__ */ new WeakSet();
function Qm(t) {
  t.size <= (t.max || -1) || hu.has(t) || (hu.add(t), setTimeout(function() {
    t.clean(), hu.delete(t);
  }, 100));
}
var Tl = function(t, e) {
  var r = new Fs(t, e);
  return r.set = function(n, i) {
    var a = Fs.prototype.set.call(this, n, i);
    return Qm(this), a;
  }, r;
}, TE = function(t, e) {
  var r = new mc(t, e);
  return r.set = function(n, i) {
    var a = mc.prototype.set.call(this, n, i);
    return Qm(this), a;
  }, r;
}, SE = Symbol.for("apollo.cacheSize"), or = _({}, lc[SE]), fn = {};
function Sl(t, e) {
  fn[t] = e;
}
var OE = globalThis.__DEV__ !== !1 ? AE : void 0, IE = globalThis.__DEV__ !== !1 ? DE : void 0, CE = globalThis.__DEV__ !== !1 ? Ym : void 0;
function NE() {
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
      or[r] || n
    ];
  }));
}
function AE() {
  var t, e, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: NE(),
    sizes: _({ print: (t = fn.print) === null || t === void 0 ? void 0 : t.call(fn), parser: (e = fn.parser) === null || e === void 0 ? void 0 : e.call(fn), canonicalStringify: (r = fn.canonicalStringify) === null || r === void 0 ? void 0 : r.call(fn), links: gc(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: Gm(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function Ym() {
  return {
    cache: {
      fragmentQueryDocuments: qr(this.getFragmentDoc)
    }
  };
}
function DE() {
  var t = this.config.fragments;
  return _(_({}, Ym.apply(this)), { addTypenameDocumentTransform: Gm(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: qr(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: qr(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: qr(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: qr(t == null ? void 0 : t.findFragmentSpreads),
    lookup: qr(t == null ? void 0 : t.lookup),
    transform: qr(t == null ? void 0 : t.transform)
  } });
}
function RE(t) {
  return !!t && "dirtyKey" in t;
}
function qr(t) {
  return RE(t) ? t.size : void 0;
}
function Zm(t) {
  return t != null;
}
function Gm(t) {
  return yc(t).map(function(e) {
    return { cache: e };
  });
}
function yc(t) {
  return t ? Jt(Jt([
    qr(t == null ? void 0 : t.performWork)
  ], yc(t == null ? void 0 : t.left), !0), yc(t == null ? void 0 : t.right), !0).filter(Zm) : [];
}
function gc(t) {
  var e;
  return t ? Jt(Jt([
    (e = t == null ? void 0 : t.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)
  ], gc(t == null ? void 0 : t.left), !0), gc(t == null ? void 0 : t.right), !0).filter(Zm) : [];
}
var Zr = Object.assign(function(e) {
  return JSON.stringify(e, PE);
}, {
  reset: function() {
    Hn = new TE(
      or.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && Sl("canonicalStringify", function() {
  return Hn.size;
});
var Hn;
Zr.reset();
function PE(t, e) {
  if (e && typeof e == "object") {
    var r = Object.getPrototypeOf(e);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(e);
      if (n.every(ME))
        return e;
      var i = JSON.stringify(n), a = Hn.get(i);
      if (!a) {
        n.sort();
        var s = JSON.stringify(n);
        a = Hn.get(s) || n, Hn.set(i, a), Hn.set(s, a);
      }
      var o = Object.create(r);
      return a.forEach(function(u) {
        o[u] = e[u];
      }), o;
    }
  }
  return e;
}
function ME(t, e, r) {
  return e === 0 || r[e - 1] <= t;
}
function ei(t) {
  return { __ref: String(t) };
}
function Ve(t) {
  return !!(t && typeof t == "object" && typeof t.__ref == "string");
}
function FE(t) {
  return Xe(t) && t.kind === "Document" && Array.isArray(t.definitions);
}
function LE(t) {
  return t.kind === "StringValue";
}
function jE(t) {
  return t.kind === "BooleanValue";
}
function VE(t) {
  return t.kind === "IntValue";
}
function $E(t) {
  return t.kind === "FloatValue";
}
function zE(t) {
  return t.kind === "Variable";
}
function qE(t) {
  return t.kind === "ObjectValue";
}
function UE(t) {
  return t.kind === "ListValue";
}
function WE(t) {
  return t.kind === "EnumValue";
}
function BE(t) {
  return t.kind === "NullValue";
}
function oi(t, e, r, n) {
  if (VE(r) || $E(r))
    t[e.value] = Number(r.value);
  else if (jE(r) || LE(r))
    t[e.value] = r.value;
  else if (qE(r)) {
    var i = {};
    r.fields.map(function(s) {
      return oi(i, s.name, s.value, n);
    }), t[e.value] = i;
  } else if (zE(r)) {
    var a = (n || {})[r.name.value];
    t[e.value] = a;
  } else if (UE(r))
    t[e.value] = r.values.map(function(s) {
      var o = {};
      return oi(o, e, s, n), o[e.value];
    });
  else if (WE(r))
    t[e.value] = r.value;
  else if (BE(r))
    t[e.value] = null;
  else
    throw St(83, e.value, r.kind);
}
function HE(t, e) {
  var r = null;
  t.directives && (r = {}, t.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var s = a.name, o = a.value;
      return oi(r[i.name.value], s, o, e);
    });
  }));
  var n = null;
  return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
    var a = i.name, s = i.value;
    return oi(n, a, s, e);
  })), Jm(t.name.value, n, r);
}
var QE = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Ai = Zr, Jm = Object.assign(function(t, e, r) {
  if (e && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(o) {
        i[o] = e[o];
      }), "".concat(r.connection.key, "(").concat(Ai(i), ")");
    } else
      return r.connection.key;
  var a = t;
  if (e) {
    var s = Ai(e);
    a += "(".concat(s, ")");
  }
  return r && Object.keys(r).forEach(function(o) {
    QE.indexOf(o) === -1 && (r[o] && Object.keys(r[o]).length ? a += "@".concat(o, "(").concat(Ai(r[o]), ")") : a += "@".concat(o));
  }), a;
}, {
  setStringify: function(t) {
    var e = Ai;
    return Ai = t, e;
  }
});
function To(t, e) {
  if (t.arguments && t.arguments.length) {
    var r = {};
    return t.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return oi(r, i, a, e);
    }), r;
  }
  return null;
}
function Xr(t) {
  return t.alias ? t.alias.value : t.name.value;
}
function bc(t, e, r) {
  for (var n, i = 0, a = e.selections; i < a.length; i++) {
    var s = a[i];
    if (en(s)) {
      if (s.name.value === "__typename")
        return t[Xr(s)];
    } else
      n ? n.push(s) : n = [s];
  }
  if (typeof t.__typename == "string")
    return t.__typename;
  if (n)
    for (var o = 0, u = n; o < u.length; o++) {
      var s = u[o], c = bc(t, _o(s, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function en(t) {
  return t.kind === "Field";
}
function YE(t) {
  return t.kind === "InlineFragment";
}
function Ia(t) {
  oe(t && t.kind === "Document", 75);
  var e = t.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw St(76, r.kind);
    return r;
  });
  return oe(e.length <= 1, 77, e.length), t;
}
function Ca(t) {
  return Ia(t), t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function wc(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function So(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function Km(t) {
  var e = Ca(t);
  return oe(e && e.operation === "query", 78), e;
}
function ZE(t) {
  oe(t.kind === "Document", 79), oe(t.definitions.length <= 1, 80);
  var e = t.definitions[0];
  return oe(e.kind === "FragmentDefinition", 81), e;
}
function Na(t) {
  Ia(t);
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
  throw St(82);
}
function Ol(t) {
  var e = /* @__PURE__ */ Object.create(null), r = t && t.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && oi(e, n.variable.name, n.defaultValue);
  }), e;
}
const GE = () => /* @__PURE__ */ Object.create(null), { forEach: JE, slice: KE } = Array.prototype, { hasOwnProperty: XE } = Object.prototype;
class Il {
  constructor(e = !0, r = GE) {
    this.weakness = e, this.makeData = r;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let r = this;
    return JE.call(e, (n) => r = r.getChildTrie(n)), XE.call(r, "data") ? r.data : r.data = this.makeData(KE.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let r = this;
    for (let n = 0, i = e.length; r && n < i; ++n) {
      const a = this.weakness && Id(e[n]) ? r.weak : r.strong;
      r = a && a.get(e[n]);
    }
    return r && r.data;
  }
  getChildTrie(e) {
    const r = this.weakness && Id(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(e);
    return n || r.set(e, n = new Il(this.weakness, this.makeData)), n;
  }
}
function Id(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let vt = null;
const Cd = {};
let ex = 1;
const tx = () => class {
  constructor() {
    this.id = [
      "slot",
      ex++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = vt; e; e = e.parent)
      if (this.id in e.slots) {
        const r = e.slots[this.id];
        if (r === Cd)
          break;
        return e !== vt && (vt.slots[this.id] = r), !0;
      }
    return vt && (vt.slots[this.id] = Cd), !1;
  }
  getValue() {
    if (this.hasValue())
      return vt.slots[this.id];
  }
  withValue(e, r, n, i) {
    const a = {
      __proto__: null,
      [this.id]: e
    }, s = vt;
    vt = { parent: s, slots: a };
    try {
      return r.apply(i, n);
    } finally {
      vt = s;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(e) {
    const r = vt;
    return function() {
      const n = vt;
      try {
        return vt = r, e.apply(this, arguments);
      } finally {
        vt = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(e, r, n) {
    if (vt) {
      const i = vt;
      try {
        return vt = null, e.apply(n, r);
      } finally {
        vt = i;
      }
    } else
      return e.apply(n, r);
  }
};
function Nd(t) {
  try {
    return t();
  } catch {
  }
}
const pu = "@wry/context:Slot", rx = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Nd(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Nd(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Ad = rx, Xm = Ad[pu] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[pu] || function(t) {
  try {
    Object.defineProperty(Ad, pu, {
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
}(tx()), Oo = new Xm(), { hasOwnProperty: nx } = Object.prototype, Cl = Array.from || function(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
};
function Nl(t) {
  const { unsubscribe: e } = t;
  typeof e == "function" && (t.unsubscribe = void 0, e());
}
const fa = [], ix = 100;
function ui(t, e) {
  if (!t)
    throw new Error(e || "assertion failure");
}
function ev(t, e) {
  const r = t.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === e.length && // The underlying value or exception must be the same.
    t[r - 1] === e[r - 1]
  );
}
function tv(t) {
  switch (t.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return t[0];
    case 2:
      throw t[1];
  }
}
function rv(t) {
  return t.slice(0);
}
class Io {
  constructor(e) {
    this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++Io.count;
  }
  peek() {
    if (this.value.length === 1 && !tn(this))
      return Dd(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(e) {
    return ui(!this.recomputing, "already recomputing"), Dd(this), tn(this) ? ax(this, e) : tv(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, nv(this), Nl(this));
  }
  dispose() {
    this.setDirty(), uv(this), Al(this, (e, r) => {
      e.setDirty(), cv(e, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(e) {
    e.add(this), this.deps || (this.deps = fa.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
  }
  forgetDeps() {
    this.deps && (Cl(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), fa.push(this.deps), this.deps = null);
  }
}
Io.count = 0;
function Dd(t) {
  const e = Oo.getValue();
  if (e)
    return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), tn(t) ? av(e, t) : sv(e, t), e;
}
function ax(t, e) {
  return uv(t), Oo.withValue(t, sx, [t, e]), ux(t, e) && ox(t), tv(t.value);
}
function sx(t, e) {
  t.recomputing = !0;
  const { normalizeResult: r } = t;
  let n;
  r && t.value.length === 1 && (n = rv(t.value)), t.value.length = 0;
  try {
    if (t.value[0] = t.fn.apply(null, e), r && n && !ev(n, t.value))
      try {
        t.value[0] = r(t.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    t.value[1] = i;
  }
  t.recomputing = !1;
}
function tn(t) {
  return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
}
function ox(t) {
  t.dirty = !1, !tn(t) && iv(t);
}
function nv(t) {
  Al(t, av);
}
function iv(t) {
  Al(t, sv);
}
function Al(t, e) {
  const r = t.parents.size;
  if (r) {
    const n = Cl(t.parents);
    for (let i = 0; i < r; ++i)
      e(n[i], t);
  }
}
function av(t, e) {
  ui(t.childValues.has(e)), ui(tn(e));
  const r = !tn(t);
  if (!t.dirtyChildren)
    t.dirtyChildren = fa.pop() || /* @__PURE__ */ new Set();
  else if (t.dirtyChildren.has(e))
    return;
  t.dirtyChildren.add(e), r && nv(t);
}
function sv(t, e) {
  ui(t.childValues.has(e)), ui(!tn(e));
  const r = t.childValues.get(e);
  r.length === 0 ? t.childValues.set(e, rv(e.value)) : ev(r, e.value) || t.setDirty(), ov(t, e), !tn(t) && iv(t);
}
function ov(t, e) {
  const r = t.dirtyChildren;
  r && (r.delete(e), r.size === 0 && (fa.length < ix && fa.push(r), t.dirtyChildren = null));
}
function uv(t) {
  t.childValues.size > 0 && t.childValues.forEach((e, r) => {
    cv(t, r);
  }), t.forgetDeps(), ui(t.dirtyChildren === null);
}
function cv(t, e) {
  e.parents.delete(t), t.childValues.delete(e), ov(t, e);
}
function ux(t, e) {
  if (typeof t.subscribe == "function")
    try {
      Nl(t), t.unsubscribe = t.subscribe.apply(null, e);
    } catch {
      return t.setDirty(), !1;
    }
  return !0;
}
const cx = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function lv(t) {
  const e = /* @__PURE__ */ new Map();
  function r(n) {
    const i = Oo.getValue();
    if (i) {
      let a = e.get(n);
      a || e.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return r.dirty = function(i, a) {
    const s = e.get(i);
    if (s) {
      const o = a && nx.call(cx, a) ? a : "setDirty";
      Cl(s).forEach((u) => u[o]()), e.delete(i), Nl(s);
    }
  }, r;
}
let Rd;
function lx(...t) {
  return (Rd || (Rd = new Il(typeof WeakMap == "function"))).lookupArray(t);
}
const mu = /* @__PURE__ */ new Set();
function da(t, { max: e = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = lx, normalizeResult: i, subscribe: a, cache: s = mc } = /* @__PURE__ */ Object.create(null)) {
  const o = typeof s == "function" ? new s(e, (d) => d.dispose()) : s, u = function() {
    const d = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (d === void 0)
      return t.apply(null, arguments);
    let h = o.get(d);
    h || (o.set(d, h = new Io(t)), h.normalizeResult = i, h.subscribe = a, h.forget = () => o.delete(d));
    const p = h.recompute(Array.prototype.slice.call(arguments));
    return o.set(d, h), mu.add(o), Oo.hasValue() || (mu.forEach((v) => v.clean()), mu.clear()), p;
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
  function c(d) {
    const h = d && o.get(d);
    h && h.setDirty();
  }
  u.dirtyKey = c, u.dirty = function() {
    c(n.apply(null, arguments));
  };
  function l(d) {
    const h = d && o.get(d);
    if (h)
      return h.peek();
  }
  u.peekKey = l, u.peek = function() {
    return l(n.apply(null, arguments));
  };
  function f(d) {
    return d ? o.delete(d) : !1;
  }
  return u.forgetKey = f, u.forget = function() {
    return f(n.apply(null, arguments));
  }, u.makeCacheKey = n, u.getKey = r ? function() {
    return n.apply(null, r.apply(null, arguments));
  } : n, Object.freeze(u);
}
function fx(t) {
  return t;
}
var fv = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = Hm ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
    }
    return t.prototype.getCacheKey = function(e) {
      return [e];
    }, t.identity = function() {
      return new t(fx, { cache: !1 });
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
        var r = new _i(Ti);
        this.performWork = da(t.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = e.getCacheKey(n);
            if (i)
              return oe(Array.isArray(i), 67), r.lookupArray(i);
          },
          max: or["documentTransform.cache"],
          cache: Fs
        });
      }
    }, t.prototype.performWork = function(e) {
      return Ia(e), this.transform(e);
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
), Gi, Co = Object.assign(function(t) {
  var e = Gi.get(t);
  return e || (e = uE(t), Gi.set(t, e)), e;
}, {
  reset: function() {
    Gi = new Tl(
      or.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
Co.reset();
globalThis.__DEV__ !== !1 && Sl("print", function() {
  return Gi ? Gi.size : 0;
});
var et = Array.isArray;
function ur(t) {
  return Array.isArray(t) && t.length > 0;
}
var Pd = {
  kind: ee.FIELD,
  name: {
    kind: ee.NAME,
    value: "__typename"
  }
};
function dv(t, e) {
  return !t || t.selectionSet.selections.every(function(r) {
    return r.kind === ee.FRAGMENT_SPREAD && dv(e[r.name.value], e);
  });
}
function dx(t) {
  return dv(Ca(t) || ZE(t), ko(So(t))) ? null : t;
}
function hx(t) {
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
function Md(t) {
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
function hv(t, e) {
  Ia(e);
  for (var r = Md(""), n = Md(""), i = function(y) {
    for (var g = 0, w = void 0; g < y.length && (w = y[g]); ++g)
      if (!et(w)) {
        if (w.kind === ee.OPERATION_DEFINITION)
          return r(w.name && w.name.value);
        if (w.kind === ee.FRAGMENT_DEFINITION)
          return n(w.name.value);
      }
    return globalThis.__DEV__ !== !1 && oe.error(84), null;
  }, a = 0, s = e.definitions.length - 1; s >= 0; --s)
    e.definitions[s].kind === ee.OPERATION_DEFINITION && ++a;
  var o = hx(t), u = function(y) {
    return ur(y) && y.map(o).some(function(g) {
      return g && g.remove;
    });
  }, c = /* @__PURE__ */ new Map(), l = !1, f = {
    enter: function(y) {
      if (u(y.directives))
        return l = !0, null;
    }
  }, d = Ir(e, {
    // These two AST node types share the same implementation, defined above.
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(y, g, w, k, b) {
        var S = i(b);
        S && S.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, g, w, k, b) {
        if (u(y.directives))
          return l = !0, null;
        var S = i(b);
        S && S.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, g, w, k) {
        c.set(JSON.stringify(k), y);
      },
      leave: function(y, g, w, k) {
        var b = c.get(JSON.stringify(k));
        if (y === b)
          return y;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          a > 0 && y.selectionSet.selections.every(function(S) {
            return S.kind === ee.FIELD && S.name.value === "__typename";
          })
        )
          return n(y.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(y) {
        if (o(y))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return e;
  var h = function(y) {
    return y.transitiveVars || (y.transitiveVars = new Set(y.variables), y.removed || y.fragmentSpreads.forEach(function(g) {
      h(n(g)).transitiveVars.forEach(function(w) {
        y.transitiveVars.add(w);
      });
    })), y;
  }, p = /* @__PURE__ */ new Set();
  d.definitions.forEach(function(y) {
    y.kind === ee.OPERATION_DEFINITION ? h(r(y.name && y.name.value)).fragmentSpreads.forEach(function(g) {
      p.add(g);
    }) : y.kind === ee.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !n(y.name.value).removed && p.add(y.name.value);
  }), p.forEach(function(y) {
    h(n(y)).fragmentSpreads.forEach(function(g) {
      p.add(g);
    });
  });
  var v = function(y) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!p.has(y) || n(y).removed);
  }, m = {
    enter: function(y) {
      if (v(y.name.value))
        return null;
    }
  };
  return dx(Ir(d, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: m,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: m,
    OperationDefinition: {
      leave: function(y) {
        if (y.variableDefinitions) {
          var g = h(
            // If an operation is anonymous, we use the empty string as its key.
            r(y.name && y.name.value)
          ).transitiveVars;
          if (g.size < y.variableDefinitions.length)
            return _(_({}, y), { variableDefinitions: y.variableDefinitions.filter(function(w) {
              return g.has(w.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Dl = Object.assign(function(t) {
  return Ir(t, {
    SelectionSet: {
      enter: function(e, r, n) {
        if (!(n && n.kind === ee.OPERATION_DEFINITION)) {
          var i = e.selections;
          if (i) {
            var a = i.some(function(o) {
              return en(o) && (o.name.value === "__typename" || o.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var s = n;
              if (!(en(s) && s.directives && s.directives.some(function(o) {
                return o.name.value === "export";
              })))
                return _(_({}, e), { selections: Jt(Jt([], i, !0), [Pd], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(t) {
    return t === Pd;
  }
});
function px(t) {
  var e = Na(t), r = e.operation;
  if (r === "query")
    return t;
  var n = Ir(t, {
    OperationDefinition: {
      enter: function(i) {
        return _(_({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function pv(t) {
  Ia(t);
  var e = hv([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], t);
  return e;
}
var mx = Object.prototype.hasOwnProperty;
function Fd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return No(t);
}
function No(t) {
  var e = t[0] || {}, r = t.length;
  if (r > 1)
    for (var n = new rn(), i = 1; i < r; ++i)
      e = n.merge(e, t[i]);
  return e;
}
var vx = function(t, e, r) {
  return this.merge(t[r], e[r]);
}, rn = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = vx), this.reconciler = e, this.isObject = Xe, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return t.prototype.merge = function(e, r) {
      for (var n = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return Xe(r) && Xe(e) ? (Object.keys(r).forEach(function(s) {
        if (mx.call(e, s)) {
          var o = e[s];
          if (r[s] !== o) {
            var u = n.reconciler.apply(n, Jt([
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
      return Xe(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = _({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
    }, t;
  }()
);
function yx(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r)
    return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = gx(t)) || e) {
    r && (t = r);
    var n = 0;
    return function() {
      return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gx(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ld(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ld(t, e);
  }
}
function Ld(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function jd(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Rl(t, e, r) {
  return e && jd(t.prototype, e), r && jd(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var Pl = function() {
  return typeof Symbol == "function";
}, Ml = function(t) {
  return Pl() && !!Symbol[t];
}, Fl = function(t) {
  return Ml(t) ? Symbol[t] : "@@" + t;
};
Pl() && !Ml("observable") && (Symbol.observable = Symbol("observable"));
var bx = Fl("iterator"), Ec = Fl("observable"), mv = Fl("species");
function Ls(t, e) {
  var r = t[e];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function Di(t) {
  var e = t.constructor;
  return e !== void 0 && (e = e[mv], e === null && (e = void 0)), e !== void 0 ? e : je;
}
function wx(t) {
  return t instanceof je;
}
function ci(t) {
  ci.log ? ci.log(t) : setTimeout(function() {
    throw t;
  });
}
function bs(t) {
  Promise.resolve().then(function() {
    try {
      t();
    } catch (e) {
      ci(e);
    }
  });
}
function vv(t) {
  var e = t._cleanup;
  if (e !== void 0 && (t._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var r = Ls(e, "unsubscribe");
        r && r.call(e);
      }
    } catch (n) {
      ci(n);
    }
}
function xc(t) {
  t._observer = void 0, t._queue = void 0, t._state = "closed";
}
function Ex(t) {
  var e = t._queue;
  if (e) {
    t._queue = void 0, t._state = "ready";
    for (var r = 0; r < e.length && (yv(t, e[r].type, e[r].value), t._state !== "closed"); ++r)
      ;
  }
}
function yv(t, e, r) {
  t._state = "running";
  var n = t._observer;
  try {
    var i = Ls(n, e);
    switch (e) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (xc(t), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        xc(t), i && i.call(n);
        break;
    }
  } catch (a) {
    ci(a);
  }
  t._state === "closed" ? vv(t) : t._state === "running" && (t._state = "ready");
}
function vu(t, e, r) {
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
      }], bs(function() {
        return Ex(t);
      });
      return;
    }
    yv(t, e, r);
  }
}
var xx = /* @__PURE__ */ function() {
  function t(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new kx(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (a) {
      i.error(a);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = t.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (xc(this), vv(this));
  }, Rl(t, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), t;
}(), kx = /* @__PURE__ */ function() {
  function t(r) {
    this._subscription = r;
  }
  var e = t.prototype;
  return e.next = function(n) {
    vu(this._subscription, "next", n);
  }, e.error = function(n) {
    vu(this._subscription, "error", n);
  }, e.complete = function() {
    vu(this._subscription, "complete");
  }, Rl(t, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), t;
}(), je = /* @__PURE__ */ function() {
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
    }), new xx(n, this._subscriber);
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
        next: function(c) {
          try {
            n(c, o);
          } catch (l) {
            s(l), u.unsubscribe();
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
    var a = Di(this);
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
    var a = Di(this);
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
    var a = Di(this), s = arguments.length > 1, o = !1, u = arguments[1], c = u;
    return new a(function(l) {
      return i.subscribe({
        next: function(f) {
          var d = !o;
          if (o = !0, !d || s)
            try {
              c = n(c, f);
            } catch (h) {
              return l.error(h);
            }
          else
            c = f;
        },
        error: function(f) {
          l.error(f);
        },
        complete: function() {
          if (!o && !s)
            return l.error(new TypeError("Cannot reduce an empty sequence"));
          l.next(c), l.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var n = this, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    var o = Di(this);
    return new o(function(u) {
      var c, l = 0;
      function f(d) {
        c = d.subscribe({
          next: function(h) {
            u.next(h);
          },
          error: function(h) {
            u.error(h);
          },
          complete: function() {
            l === a.length ? (c = void 0, u.complete()) : f(o.from(a[l++]));
          }
        });
      }
      return f(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, e.flatMap = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var a = Di(this);
    return new a(function(s) {
      var o = [], u = i.subscribe({
        next: function(l) {
          if (n)
            try {
              l = n(l);
            } catch (d) {
              return s.error(d);
            }
          var f = a.from(l).subscribe({
            next: function(d) {
              s.next(d);
            },
            error: function(d) {
              s.error(d);
            },
            complete: function() {
              var d = o.indexOf(f);
              d >= 0 && o.splice(d, 1), c();
            }
          });
          o.push(f);
        },
        error: function(l) {
          s.error(l);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        u.closed && o.length === 0 && s.complete();
      }
      return function() {
        o.forEach(function(l) {
          return l.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, e[Ec] = function() {
    return this;
  }, t.from = function(n) {
    var i = typeof this == "function" ? this : t;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var a = Ls(n, Ec);
    if (a) {
      var s = a.call(n);
      if (Object(s) !== s)
        throw new TypeError(s + " is not an object");
      return wx(s) && s.constructor === i ? s : new i(function(o) {
        return s.subscribe(o);
      });
    }
    if (Ml("iterator") && (a = Ls(n, bx), a))
      return new i(function(o) {
        bs(function() {
          if (!o.closed) {
            for (var u = yx(a.call(n)), c; !(c = u()).done; ) {
              var l = c.value;
              if (o.next(l), o.closed)
                return;
            }
            o.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(o) {
        bs(function() {
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
      bs(function() {
        if (!o.closed) {
          for (var u = 0; u < i.length; ++u)
            if (o.next(i[u]), o.closed)
              return;
          o.complete();
        }
      });
    });
  }, Rl(t, null, [{
    key: mv,
    get: function() {
      return this;
    }
  }]), t;
}();
Pl() && Object.defineProperty(je, Symbol("extensions"), {
  value: {
    symbol: Ec,
    hostReportError: ci
  },
  configurable: !0
});
function _x(t) {
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
var Vn;
typeof self < "u" ? Vn = self : typeof window < "u" ? Vn = window : typeof global < "u" ? Vn = global : typeof module < "u" ? Vn = module : Vn = Function("return this")();
_x(Vn);
var Vd = je.prototype, $d = "@@observable";
Vd[$d] || (Vd[$d] = function() {
  return this;
});
var Tx = Object.prototype.toString;
function gv(t) {
  return kc(t);
}
function kc(t, e) {
  switch (Tx.call(t)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var r = t.slice(0);
      return e.set(t, r), r.forEach(function(i, a) {
        r[a] = kc(i, e);
      }), r;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var n = Object.create(Object.getPrototypeOf(t));
      return e.set(t, n), Object.keys(t).forEach(function(i) {
        n[i] = kc(t[i], e);
      }), n;
    }
    default:
      return t;
  }
}
function Sx(t) {
  var e = /* @__PURE__ */ new Set([t]);
  return e.forEach(function(r) {
    Xe(r) && Ox(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      Xe(r[n]) && e.add(r[n]);
    });
  }), t;
}
function Ox(t) {
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
function _c(t) {
  return globalThis.__DEV__ !== !1 && Sx(t), t;
}
function Ji(t, e, r) {
  var n = [];
  t.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](r);
  });
}
function yu(t, e, r) {
  return new je(function(n) {
    var i = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(u) {
        return new Promise(function(c) {
          return c(u());
        });
      }
    };
    function a(u, c) {
      return function(l) {
        if (u) {
          var f = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : u(l);
          };
          i = i.then(f, f).then(function(d) {
            return n.next(d);
          }, function(d) {
            return n.error(d);
          });
        } else
          n[c](l);
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
function bv(t) {
  function e(r) {
    Object.defineProperty(t, r, { value: je });
  }
  return _l && Symbol.species && e(Symbol.species), e("@@species"), t;
}
function zd(t) {
  return t && typeof t.then == "function";
}
var $n = (
  /** @class */
  function(t) {
    tr(e, t);
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
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), Ji(n.observers, "next", i));
        },
        error: function(i) {
          var a = n.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), Ji(n.observers, "error", i));
        },
        complete: function() {
          var i = n, a = i.sub, s = i.sources, o = s === void 0 ? [] : s;
          if (a !== null) {
            var u = o.shift();
            u ? zd(u) ? u.then(function(c) {
              return n.sub = c.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Ji(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.complete();
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new je(r)]), zd(r) ? r.then(function(i) {
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
  }(je)
);
bv($n);
function ti(t) {
  return "incremental" in t;
}
function Ix(t) {
  return "hasNext" in t && "data" in t;
}
function Cx(t) {
  return ti(t) || Ix(t);
}
function Nx(t) {
  return Xe(t) && "payload" in t;
}
function wv(t, e) {
  var r = t, n = new rn();
  return ti(e) && ur(e.incremental) && e.incremental.forEach(function(i) {
    for (var a = i.data, s = i.path, o = s.length - 1; o >= 0; --o) {
      var u = s[o], c = !isNaN(+u), l = c ? [] : {};
      l[u] = a, a = l;
    }
    r = n.merge(r, a);
  }), r;
}
function ws(t) {
  var e = Tc(t);
  return ur(e);
}
function Tc(t) {
  var e = ur(t.errors) ? t.errors.slice(0) : [];
  return ti(t) && ur(t.incremental) && t.incremental.forEach(function(r) {
    r.errors && e.push.apply(e, r.errors);
  }), e;
}
function li() {
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
function Es(t, e) {
  return li(t, e, e.variables && {
    variables: li(_(_({}, t && t.variables), e.variables))
  });
}
function gu(t) {
  return new je(function(e) {
    e.error(t);
  });
}
var Ev = function(t, e, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n;
};
function Ax(t) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    if (e.indexOf(i) < 0)
      throw St(43, i);
  }
  return t;
}
function Dx(t, e) {
  var r = _({}, t), n = function(a) {
    typeof a == "function" ? r = _(_({}, r), a(r)) : r = _(_({}, r), a);
  }, i = function() {
    return _({}, r);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function Rx(t) {
  var e = {
    variables: t.variables || {},
    extensions: t.extensions || {},
    operationName: t.operationName,
    query: t.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? wc(e.query) || void 0 : ""), e;
}
function Px(t, e) {
  var r = _({}, t), n = new Set(Object.keys(t));
  return Ir(e, {
    Variable: function(i, a, s) {
      s && s.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function qd(t, e) {
  return e ? e(t) : je.of();
}
function Ri(t) {
  return typeof t == "function" ? new fr(t) : t;
}
function os(t) {
  return t.request.length <= 1;
}
var fr = (
  /** @class */
  function() {
    function t(e) {
      e && (this.request = e);
    }
    return t.empty = function() {
      return new t(function() {
        return je.of();
      });
    }, t.from = function(e) {
      return e.length === 0 ? t.empty() : e.map(Ri).reduce(function(r, n) {
        return r.concat(n);
      });
    }, t.split = function(e, r, n) {
      var i = Ri(r), a = Ri(n || new t(qd)), s;
      return os(i) && os(a) ? s = new t(function(o) {
        return e(o) ? i.request(o) || je.of() : a.request(o) || je.of();
      }) : s = new t(function(o, u) {
        return e(o) ? i.request(o, u) || je.of() : a.request(o, u) || je.of();
      }), Object.assign(s, { left: i, right: a });
    }, t.execute = function(e, r) {
      return e.request(Dx(r.context, Rx(Ax(r)))) || je.of();
    }, t.concat = function(e, r) {
      var n = Ri(e);
      if (os(n))
        return globalThis.__DEV__ !== !1 && oe.warn(35, n), n;
      var i = Ri(r), a;
      return os(i) ? a = new t(function(s) {
        return n.request(s, function(o) {
          return i.request(o) || je.of();
        }) || je.of();
      }) : a = new t(function(s, o) {
        return n.request(s, function(u) {
          return i.request(u, o) || je.of();
        }) || je.of();
      }), Object.assign(a, { left: n, right: i });
    }, t.prototype.split = function(e, r, n) {
      return this.concat(t.split(e, r, n || new t(qd)));
    }, t.prototype.concat = function(e) {
      return t.concat(this, e);
    }, t.prototype.request = function(e, r) {
      throw St(36);
    }, t.prototype.onError = function(e, r) {
      if (r && r.error)
        return r.error(e), !1;
      throw e;
    }, t.prototype.setOnError = function(e) {
      return this.onError = e, this;
    }, t;
  }()
), Mx = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var t = new AbortController(), e = t.signal;
  return { controller: t, signal: e };
};
function Fx(t) {
  var e, r = t[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return r.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function Lx(t) {
  var e = null, r = null, n = !1, i = [], a = [];
  function s(f) {
    if (!r) {
      if (a.length) {
        var d = a.shift();
        if (Array.isArray(d) && d[0])
          return d[0]({ value: f, done: !1 });
      }
      i.push(f);
    }
  }
  function o(f) {
    r = f;
    var d = a.slice();
    d.forEach(function(h) {
      h[1](f);
    }), !e || e();
  }
  function u() {
    n = !0;
    var f = a.slice();
    f.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, t.removeListener("data", s), t.removeListener("error", o), t.removeListener("end", u), t.removeListener("finish", u), t.removeListener("close", u);
  }, t.on("data", s), t.on("error", o), t.on("end", u), t.on("finish", u), t.on("close", u);
  function c() {
    return new Promise(function(f, d) {
      if (r)
        return d(r);
      if (i.length)
        return f({ value: i.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      a.push([f, d]);
    });
  }
  var l = {
    next: function() {
      return c();
    }
  };
  return xo && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function jx(t) {
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
  return xo && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Ud(t) {
  var e = {
    next: function() {
      return t.read();
    }
  };
  return xo && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function Vx(t) {
  return !!t.body;
}
function $x(t) {
  return !!t.getReader;
}
function zx(t) {
  return !!(xo && t[Symbol.asyncIterator]);
}
function qx(t) {
  return !!t.stream;
}
function Ux(t) {
  return !!t.arrayBuffer;
}
function Wx(t) {
  return !!t.pipe;
}
function Bx(t) {
  var e = t;
  if (Vx(t) && (e = t.body), zx(e))
    return Fx(e);
  if ($x(e))
    return Ud(e.getReader());
  if (qx(e))
    return Ud(e.stream().getReader());
  if (Ux(e))
    return jx(e.arrayBuffer());
  if (Wx(e))
    return Lx(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Ll = Symbol();
function Hx(t) {
  return t.extensions ? Array.isArray(t.extensions[Ll]) : !1;
}
function Qx(t) {
  return t.hasOwnProperty("graphQLErrors");
}
var Yx = function(t) {
  var e = Jt(Jt(Jt([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
  return t.networkError && e.push(t.networkError), e.map(function(r) {
    return Xe(r) && r.message || "Error message not found.";
  }).join(`
`);
}, dn = (
  /** @class */
  function(t) {
    tr(e, t);
    function e(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, s = r.networkError, o = r.errorMessage, u = r.extraInfo, c = t.call(this, o) || this;
      return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = a || [], c.networkError = s || null, c.message = o || Yx(c), c.extraInfo = u, c.__proto__ = e.prototype, c;
    }
    return e;
  }(Error)
), Wd = Object.prototype.hasOwnProperty;
function Zx(t, e) {
  return $r(this, void 0, void 0, function() {
    var r, n, i, a, s, o, u, c, l, f, d, h, p, v, m, y, g, w, k, b, S, D, N, A;
    return zr(this, function(F) {
      switch (F.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (A = t.headers) === null || A === void 0 ? void 0 : A.get("content-type"), i = "boundary=", a = n != null && n.includes(i) ? n == null ? void 0 : n.substring((n == null ? void 0 : n.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), o = "", u = Bx(t), c = !0, F.label = 1;
        case 1:
          return c ? [4, u.next()] : [3, 3];
        case 2:
          for (l = F.sent(), f = l.value, d = l.done, h = typeof f == "string" ? f : r.decode(f), p = o.length - s.length + 1, c = !d, o += h, v = o.indexOf(s, p); v > -1; ) {
            if (m = void 0, D = [
              o.slice(0, v),
              o.slice(v + s.length)
            ], m = D[0], o = D[1], y = m.indexOf(`\r
\r
`), g = Gx(m.slice(0, y)), w = g["content-type"], w && w.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (k = m.slice(y), k) {
              if (b = xv(t, k), Object.keys(b).length > 1 || "data" in b || "incremental" in b || "errors" in b || "payload" in b)
                if (Nx(b)) {
                  if (S = {}, "payload" in b) {
                    if (Object.keys(b).length === 1 && b.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    S = _({}, b.payload);
                  }
                  "errors" in b && (S = _(_({}, S), { extensions: _(_({}, "extensions" in S ? S.extensions : null), (N = {}, N[Ll] = b.errors, N)) })), e(S);
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
            v = o.indexOf(s);
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
function Gx(t) {
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
function xv(t, e) {
  if (t.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    Ev(t, r(), "Response not successful: Received status code ".concat(t.status));
  }
  try {
    return JSON.parse(e);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = t, n.statusCode = t.status, n.bodyText = e, n;
  }
}
function Jx(t, e) {
  t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t);
}
function kv(t) {
  return function(e) {
    return e.text().then(function(r) {
      return xv(e, r);
    }).then(function(r) {
      return !Array.isArray(r) && !Wd.call(r, "data") && !Wd.call(r, "errors") && Ev(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
        return n.operationName;
      }) : t.operationName, "'.")), r;
    });
  };
}
var ha = function(t, e) {
  var r;
  try {
    r = JSON.stringify(t);
  } catch (i) {
    var n = St(39, e, i.message);
    throw n.parseError = i, n;
  }
  return r;
};
function _v(t, e) {
  var r = [], n = function(f, d) {
    r.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = ha(e.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var a = void 0;
    try {
      a = ha(e.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", a);
  }
  var s = "", o = t, u = t.indexOf("#");
  u !== -1 && (s = t.substr(u), o = t.substr(0, u));
  var c = o.indexOf("?") === -1 ? "?" : "&", l = o + c + r.join("&") + s;
  return { newURI: l };
}
var Kx = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Xx = {
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
}, ek = {
  method: "POST"
}, Tv = {
  http: Kx,
  headers: Xx,
  options: ek
}, Sv = function(t, e) {
  return e(t);
};
function Ov(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, a = {};
  r.forEach(function(f) {
    i = _(_(_({}, i), f.options), { headers: _(_({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), a = _(_({}, a), f.http);
  }), i.headers && (i.headers = tk(i.headers, a.preserveHeaderCase));
  var s = t.operationName, o = t.extensions, u = t.variables, c = t.query, l = { operationName: s, variables: u };
  return a.includeExtensions && (l.extensions = o), a.includeQuery && (l.query = e(c, Co)), {
    options: i,
    body: l
  };
}
function tk(t, e) {
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
var Iv = function(t, e) {
  var r = t.getContext(), n = r.uri;
  return n || (typeof e == "function" ? e(t) : e || "/graphql");
};
function rk(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function nk(t, e, r = "") {
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
    const c = Array.isArray(s) || typeof FileList < "u" && s instanceof FileList, l = rk(s);
    if (c || l) {
      let f = n.get(s);
      const d = !f;
      if (d && (f = c ? [] : (
        // Replicate if the plain object is an `Object` instance.
        s instanceof /** @type {any} */
        Object ? {} : /* @__PURE__ */ Object.create(null)
      ), n.set(
        s,
        /** @type {Clone} */
        f
      )), !u.has(s)) {
        const h = o ? `${o}.` : "", p = new Set(u).add(s);
        if (c) {
          let v = 0;
          for (const m of s) {
            const y = a(
              m,
              h + v++,
              p
            );
            d && f.push(y);
          }
        } else
          for (const v in s) {
            const m = a(
              s[v],
              h + v,
              p
            );
            d && (f[v] = m);
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
function ik(t, e, r) {
  "name" in r ? t.append(e, r, r.name) : t.append(e, r);
}
function ak(t) {
  return typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob;
}
function sk({
  uri: t = "/graphql",
  useGETForQueries: e,
  isExtractableFile: r = ak,
  FormData: n,
  formDataAppendFile: i = ik,
  print: a = Sv,
  fetch: s,
  fetchOptions: o,
  credentials: u,
  headers: c,
  includeExtensions: l
} = {}) {
  const f = {
    http: { includeExtensions: l },
    options: o,
    credentials: u,
    headers: c
  };
  return new fr((d) => {
    const h = (
      /**
       * @type {import("@apollo/client/core/types.js").DefaultContext & {
       *   clientAwareness?: {
       *     name?: string,
       *     version?: string,
       *   },
       * }}
       */
      d.getContext()
    ), {
      // Apollo Studio client awareness `name` and `version` can be configured
      // via `ApolloClient` constructor options:
      // https://www.apollographql.com/docs/graphos/metrics/client-awareness/#setup
      clientAwareness: { name: p, version: v } = {},
      headers: m
    } = h, y = {
      http: h.http,
      options: h.fetchOptions,
      credentials: h.credentials,
      headers: {
        // Client awareness headers can be overridden by context `headers`.
        ...p && { "apollographql-client-name": p },
        ...v && { "apollographql-client-version": v },
        ...m
      }
    }, { options: g, body: w } = Ov(
      d,
      a,
      Tv,
      f,
      y
    ), { clone: k, files: b } = nk(w, r, "");
    let S = Iv(d, t);
    if (b.size) {
      g.headers && delete g.headers["content-type"];
      const A = n || FormData, F = new A();
      F.append("operations", ha(k, "Payload"));
      const j = {};
      let P = 0;
      b.forEach((M) => {
        j[++P] = M;
      }), F.append("map", JSON.stringify(j)), P = 0, b.forEach((M, z) => {
        i(F, String(++P), z);
      }), g.body = F;
    } else if (e && // If the operation contains some mutations GET shouldn’t be used.
    !d.query.definitions.some(
      (A) => A.kind === "OperationDefinition" && A.operation === "mutation"
    ) && (g.method = "GET"), g.method === "GET") {
      const { newURI: A, parseError: F } = _v(S, w);
      if (F)
        return new je((j) => {
          j.error(F);
        });
      S = A;
    } else
      g.body = ha(k, "Payload");
    const { controller: D } = Mx();
    typeof D != "boolean" && (g.signal && (g.signal.aborted ? (
      // Signal already aborted, so immediately abort.
      D.abort()
    ) : (
      // Signal not already aborted, so setup a listener to abort when it
      // does.
      g.signal.addEventListener(
        "abort",
        () => {
          D.abort();
        },
        {
          // Prevent a memory leak if the user configured abort controller
          // is long lasting, or controls multiple things.
          once: !0
        }
      )
    )), g.signal = D.signal);
    const N = s || fetch;
    return new je((A) => {
      let F;
      return N(S, g).then((j) => (d.setContext({ response: j }), j)).then(kv(d)).then((j) => {
        A.next(j), A.complete();
      }).catch((j) => {
        F || (j.result && j.result.errors && j.result.data && A.next(j.result), A.error(j));
      }), () => {
        F = !0, typeof D != "boolean" && D.abort();
      };
    });
  });
}
var Sc = fr.execute, ok = function(t) {
  if (!t && typeof fetch > "u")
    throw St(37);
}, Bd = Ht(function() {
  return fetch;
}), uk = function(t) {
  t === void 0 && (t = {});
  var e = t.uri, r = e === void 0 ? "/graphql" : e, n = t.fetch, i = t.print, a = i === void 0 ? Sv : i, s = t.includeExtensions, o = t.preserveHeaderCase, u = t.useGETForQueries, c = t.includeUnusedVariables, l = c === void 0 ? !1 : c, f = Or(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && ok(n || Bd);
  var d = {
    http: { includeExtensions: s, preserveHeaderCase: o },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new fr(function(h) {
    var p = Iv(h, r), v = h.getContext(), m = {};
    if (v.clientAwareness) {
      var y = v.clientAwareness, g = y.name, w = y.version;
      g && (m["apollographql-client-name"] = g), w && (m["apollographql-client-version"] = w);
    }
    var k = _(_({}, m), v.headers), b = {
      http: v.http,
      options: v.fetchOptions,
      credentials: v.credentials,
      headers: k
    };
    if (la(["client"], h.query)) {
      var S = pv(h.query);
      if (!S)
        return gu(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      h.query = S;
    }
    var D = Ov(h, a, Tv, d, b), N = D.options, A = D.body;
    A.variables && !l && (A.variables = Px(A.variables, h.query));
    var F;
    !N.signal && typeof AbortController < "u" && (F = new AbortController(), N.signal = F.signal);
    var j = function(Ee) {
      return Ee.kind === "OperationDefinition" && Ee.operation === "mutation";
    }, P = function(Ee) {
      return Ee.kind === "OperationDefinition" && Ee.operation === "subscription";
    }, M = P(Na(h.query)), z = la(["defer"], h.query);
    if (u && !h.query.definitions.some(j) && (N.method = "GET"), z || M) {
      N.headers = N.headers || {};
      var le = "multipart/mixed;";
      M && z && globalThis.__DEV__ !== !1 && oe.warn(38), M ? le += "boundary=graphql;subscriptionSpec=1.0,application/json" : z && (le += "deferSpec=20220824,application/json"), N.headers.accept = le;
    }
    if (N.method === "GET") {
      var W = _v(p, A), ue = W.newURI, Re = W.parseError;
      if (Re)
        return gu(Re);
      p = ue;
    } else
      try {
        N.body = ha(A, "Payload");
      } catch (Ee) {
        return gu(Ee);
      }
    return new je(function(Ee) {
      var C = n || Ht(function() {
        return fetch;
      }) || Bd, q = Ee.next.bind(Ee);
      return C(p, N).then(function(re) {
        var fe;
        h.setContext({ response: re });
        var ie = (fe = re.headers) === null || fe === void 0 ? void 0 : fe.get("content-type");
        return ie !== null && /^multipart\/mixed/i.test(ie) ? Zx(re, q) : kv(h)(re).then(q);
      }).then(function() {
        F = void 0, Ee.complete();
      }).catch(function(re) {
        F = void 0, Jx(re, Ee);
      }), function() {
        F && F.abort();
      };
    });
  });
}, ck = (
  /** @class */
  function(t) {
    tr(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this, uk(r).request) || this;
      return n.options = r, n;
    }
    return e;
  }(fr)
);
const { toString: Hd, hasOwnProperty: lk } = Object.prototype, Qd = Function.prototype.toString, Oc = /* @__PURE__ */ new Map();
function Be(t, e) {
  try {
    return Ic(t, e);
  } finally {
    Oc.clear();
  }
}
function Ic(t, e) {
  if (t === e)
    return !0;
  const r = Hd.call(t), n = Hd.call(e);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (t.length !== e.length)
        return !1;
    case "[object Object]": {
      if (Zd(t, e))
        return !0;
      const i = Yd(t), a = Yd(e), s = i.length;
      if (s !== a.length)
        return !1;
      for (let o = 0; o < s; ++o)
        if (!lk.call(e, i[o]))
          return !1;
      for (let o = 0; o < s; ++o) {
        const u = i[o];
        if (!Ic(t[u], e[u]))
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
      if (Zd(t, e))
        return !0;
      const i = t.entries(), a = r === "[object Map]";
      for (; ; ) {
        const s = i.next();
        if (s.done)
          break;
        const [o, u] = s.value;
        if (!e.has(o) || a && !Ic(u, e.get(o)))
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
      const i = Qd.call(t);
      return i !== Qd.call(e) ? !1 : !hk(i, dk);
    }
  }
  return !1;
}
function Yd(t) {
  return Object.keys(t).filter(fk, t);
}
function fk(t) {
  return this[t] !== void 0;
}
const dk = "{ [native code] }";
function hk(t, e) {
  const r = t.length - e.length;
  return r >= 0 && t.indexOf(e, r) === r;
}
function Zd(t, e) {
  let r = Oc.get(t);
  if (r) {
    if (r.has(e))
      return !0;
  } else
    Oc.set(t, r = /* @__PURE__ */ new Set());
  return r.add(e), !1;
}
function Cv(t, e, r, n) {
  var i = e.data, a = Or(e, ["data"]), s = r.data, o = Or(r, ["data"]);
  return Be(a, o) && xs(Na(t).selectionSet, i, s, {
    fragmentMap: ko(So(t)),
    variables: n
  });
}
function xs(t, e, r, n) {
  if (e === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return t.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Oa(a, n.variables)) || Gd(a))
      return !0;
    if (en(a)) {
      var s = Xr(a), o = e && e[s], u = r && r[s], c = a.selectionSet;
      if (!c)
        return Be(o, u);
      var l = Array.isArray(o), f = Array.isArray(u);
      if (l !== f)
        return !1;
      if (l && f) {
        var d = o.length;
        if (u.length !== d)
          return !1;
        for (var h = 0; h < d; ++h)
          if (!xs(c, o[h], u[h], n))
            return !1;
        return !0;
      }
      return xs(c, o, u, n);
    } else {
      var p = _o(a, n.fragmentMap);
      if (p)
        return Gd(p) ? !0 : xs(
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
function Gd(t) {
  return !!t.directives && t.directives.some(pk);
}
function pk(t) {
  return t.name.value === "nonreactive";
}
var Nv = (
  /** @class */
  function() {
    function t() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = da(gE, {
        max: or["cache.fragmentQueryDocuments"] || 1e3,
        cache: Fs
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
      return r === void 0 && (r = !!e.optimistic), this.read(_(_({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r }));
    }, t.prototype.watchFragment = function(e) {
      var r = this, n = e.fragment, i = e.fragmentName, a = e.from, s = e.optimistic, o = s === void 0 ? !0 : s, u = this.getFragmentDoc(n, i), c = {
        returnPartialData: !0,
        id: typeof a == "string" ? a : this.identify(a),
        query: u,
        optimistic: o
      }, l;
      return new je(function(f) {
        return r.watch(_(_({}, c), { immediate: !0, callback: function(d) {
          if (
            // Always ensure we deliver the first result
            !(l && Cv(u, { data: l == null ? void 0 : l.result }, { data: d.result }))
          ) {
            var h = {
              data: d.result,
              complete: !!d.complete
            };
            d.missing && (h.missing = No(d.missing.map(function(p) {
              return p.missing;
            }))), l = d, f.next(h);
          }
        } }));
      });
    }, t.prototype.readFragment = function(e, r) {
      return r === void 0 && (r = !!e.optimistic), this.read(_(_({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: r }));
    }, t.prototype.writeQuery = function(e) {
      var r = e.id, n = e.data, i = Or(e, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, t.prototype.writeFragment = function(e) {
      var r = e.id, n = e.data, i = e.fragment, a = e.fragmentName, s = Or(e, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(s, {
        query: this.getFragmentDoc(i, a),
        dataId: r,
        result: n
      }));
    }, t.prototype.updateQuery = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(e), a = r(i);
          return a == null ? i : (n.writeQuery(_(_({}, e), { data: a })), a);
        }
      });
    }, t.prototype.updateFragment = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(e), a = r(i);
          return a == null ? i : (n.writeFragment(_(_({}, e), { data: a })), a);
        }
      });
    }, t;
  }()
);
globalThis.__DEV__ !== !1 && (Nv.prototype.getMemoryInternals = CE);
var Av = (
  /** @class */
  function(t) {
    tr(e, t);
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
), ht = Object.prototype.hasOwnProperty;
function Pi(t) {
  return t == null;
}
function Dv(t, e) {
  var r = t.__typename, n = t.id, i = t._id;
  if (typeof r == "string" && (e && (e.keyObject = Pi(n) ? Pi(i) ? void 0 : { _id: i } : { id: n }), Pi(n) && !Pi(i) && (n = i), !Pi(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Rv = {
  dataIdFromObject: Dv,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function mk(t) {
  return li(Rv, t);
}
function Pv(t) {
  var e = t.canonizeResults;
  return e === void 0 ? Rv.canonizeResults : e;
}
function vk(t, e) {
  return Ve(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
}
var Mv = /^[_a-z][_0-9a-z]*/i;
function nn(t) {
  var e = t.match(Mv);
  return e ? e[0] : t;
}
function Cc(t, e, r) {
  return Xe(e) ? et(e) ? e.every(function(n) {
    return Cc(t, n, r);
  }) : t.selections.every(function(n) {
    if (en(n) && Oa(n, r)) {
      var i = Xr(n);
      return ht.call(e, i) && (!n.selectionSet || Cc(n.selectionSet, e[i], r));
    }
    return !0;
  }) : !1;
}
function Qn(t) {
  return Xe(t) && !Ve(t) && !et(t);
}
function yk() {
  return new rn();
}
function Fv(t, e) {
  var r = ko(So(t));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && e && (i = e.lookup(n)), i || null;
    }
  };
}
var ks = /* @__PURE__ */ Object.create(null), bu = function() {
  return ks;
}, Jd = /* @__PURE__ */ Object.create(null), pa = (
  /** @class */
  function() {
    function t(e, r) {
      var n = this;
      this.policies = e, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return _c(Ve(i) ? n.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return Ve(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return ei(i);
        if (Ve(i))
          return i;
        var s = n.policies.identify(i)[0];
        if (s) {
          var o = ei(s);
          return a && n.merge(s, i), o;
        }
      };
    }
    return t.prototype.toObject = function() {
      return _({}, this.data);
    }, t.prototype.has = function(e) {
      return this.lookup(e, !0) !== void 0;
    }, t.prototype.get = function(e, r) {
      if (this.group.depend(e, r), ht.call(this.data, e)) {
        var n = this.data[e];
        if (n && ht.call(n, r))
          return n[r];
      }
      if (r === "__typename" && ht.call(this.policies.rootTypenamesById, e))
        return this.policies.rootTypenamesById[e];
      if (this instanceof jr)
        return this.parent.get(e, r);
    }, t.prototype.lookup = function(e, r) {
      if (r && this.group.depend(e, "__exists"), ht.call(this.data, e))
        return this.data[e];
      if (this instanceof jr)
        return this.parent.lookup(e, r);
      if (this.policies.rootTypenamesById[e])
        return /* @__PURE__ */ Object.create(null);
    }, t.prototype.merge = function(e, r) {
      var n = this, i;
      Ve(e) && (e = e.__ref), Ve(r) && (r = r.__ref);
      var a = typeof e == "string" ? this.lookup(i = e) : e, s = typeof r == "string" ? this.lookup(i = r) : r;
      if (s) {
        oe(typeof i == "string", 1);
        var o = new rn(bk).merge(a, s);
        if (this.data[i] = o, o !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(s).forEach(function(c) {
            if (!a || a[c] !== o[c]) {
              u[c] = 1;
              var l = nn(c);
              l !== c && !n.policies.hasKeyArgs(o.__typename, l) && (u[l] = 1), o[c] === void 0 && !(n instanceof jr) && delete o[c];
            }
          }), u.__typename && !(a && a.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === o.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
            return n.group.dirty(i, c);
          });
        }
      }
    }, t.prototype.modify = function(e, r) {
      var n = this, i = this.lookup(e);
      if (i) {
        var a = /* @__PURE__ */ Object.create(null), s = !1, o = !0, u = {
          DELETE: ks,
          INVALIDATE: Jd,
          isReference: Ve,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(c, l) {
            return n.policies.readField(typeof c == "string" ? {
              fieldName: c,
              from: l || ei(e)
            } : c, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(c) {
          var l = nn(c), f = i[c];
          if (f !== void 0) {
            var d = typeof r == "function" ? r : r[c] || r[l];
            if (d) {
              var h = d === bu ? ks : d(_c(f), _(_({}, u), { fieldName: l, storeFieldName: c, storage: n.getStorage(e, c) }));
              if (h === Jd)
                n.group.dirty(e, c);
              else if (h === ks && (h = void 0), h !== f && (a[c] = h, s = !0, f = h, globalThis.__DEV__ !== !1)) {
                var p = function(b) {
                  if (n.lookup(b.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && oe.warn(2, b), !0;
                };
                if (Ve(h))
                  p(h);
                else if (Array.isArray(h))
                  for (var v = !1, m = void 0, y = 0, g = h; y < g.length; y++) {
                    var w = g[y];
                    if (Ve(w)) {
                      if (v = !0, p(w))
                        break;
                    } else if (typeof w == "object" && w) {
                      var k = n.policies.identify(w)[0];
                      k && (m = w);
                    }
                    if (v && m !== void 0) {
                      globalThis.__DEV__ !== !1 && oe.warn(3, m);
                      break;
                    }
                  }
              }
            }
            f !== void 0 && (o = !1);
          }
        }), s)
          return this.merge(e, a), o && (this instanceof jr ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
      }
      return !1;
    }, t.prototype.delete = function(e, r, n) {
      var i, a = this.lookup(e);
      if (a) {
        var s = this.getFieldValue(a, "__typename"), o = r && n ? this.policies.getStoreFieldName({ typename: s, fieldName: r, args: n }) : r;
        return this.modify(e, o ? (i = {}, i[o] = bu, i) : bu);
      }
      return !1;
    }, t.prototype.evict = function(e, r) {
      var n = !1;
      return e.id && (ht.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof jr && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
    }, t.prototype.clear = function() {
      this.replace(null);
    }, t.prototype.extract = function() {
      var e = this, r = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        ht.call(e.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
    }, t.prototype.replace = function(e) {
      var r = this;
      if (Object.keys(this.data).forEach(function(a) {
        e && ht.call(e, a) || r.delete(a);
      }), e) {
        var n = e.__META, i = Or(e, ["__META"]);
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
      return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof jr ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
    }, t.prototype.gc = function() {
      var e = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(s) {
        ht.call(n, s) && (Object.keys(e.findChildRefIds(s)).forEach(r.add, r), delete n[s]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var a = this; a instanceof jr; )
          a = a.parent;
        i.forEach(function(s) {
          return a.delete(s);
        });
      }
      return i;
    }, t.prototype.findChildRefIds = function(e) {
      if (!ht.call(this.refs, e)) {
        var r = this.refs[e] = /* @__PURE__ */ Object.create(null), n = this.data[e];
        if (!n)
          return r;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(a) {
          Ve(a) && (r[a.__ref] = !0), Xe(a) && Object.keys(a).forEach(function(s) {
            var o = a[s];
            Xe(o) && i.add(o);
          });
        });
      }
      return this.refs[e];
    }, t.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, t;
  }()
), Lv = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = null), this.caching = e, this.parent = r, this.d = null, this.resetCaching();
    }
    return t.prototype.resetCaching = function() {
      this.d = this.caching ? lv() : null, this.keyMaker = new _i(Ti);
    }, t.prototype.depend = function(e, r) {
      if (this.d) {
        this.d(wu(e, r));
        var n = nn(r);
        n !== r && this.d(wu(e, n)), this.parent && this.parent.depend(e, r);
      }
    }, t.prototype.dirty = function(e, r) {
      this.d && this.d.dirty(
        wu(e, r),
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
function wu(t, e) {
  return e + "#" + t;
}
function Kd(t, e) {
  Ki(t) && t.group.depend(e, "__exists");
}
(function(t) {
  var e = (
    /** @class */
    function(r) {
      tr(n, r);
      function n(i) {
        var a = i.policies, s = i.resultCaching, o = s === void 0 ? !0 : s, u = i.seed, c = r.call(this, a, new Lv(o)) || this;
        return c.stump = new gk(c), c.storageTrie = new _i(Ti), u && c.replace(u), c;
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
})(pa || (pa = {}));
var jr = (
  /** @class */
  function(t) {
    tr(e, t);
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
      return _(_({}, this.parent.toObject()), this.data);
    }, e.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return ht.call(this.data, r) ? _(_({}, n), t.prototype.findChildRefIds.call(this, r)) : n;
    }, e.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, e;
  }(pa)
), gk = (
  /** @class */
  function(t) {
    tr(e, t);
    function e(r) {
      return t.call(this, "EntityStore.Stump", r, function() {
      }, new Lv(r.group.caching, r.group)) || this;
    }
    return e.prototype.removeLayer = function() {
      return this;
    }, e.prototype.merge = function(r, n) {
      return this.parent.merge(r, n);
    }, e;
  }(jr)
);
function bk(t, e, r) {
  var n = t[r], i = e[r];
  return Be(n, i) ? n : i;
}
function Ki(t) {
  return !!(t instanceof pa && t.group.caching);
}
function wk(t) {
  return Xe(t) ? et(t) ? t.slice(0) : _({ __proto__: Object.getPrototypeOf(t) }, t) : t;
}
var Xd = (
  /** @class */
  function() {
    function t() {
      this.known = new (Hm ? WeakSet : Set)(), this.pool = new _i(Ti), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return t.prototype.isKnown = function(e) {
      return Xe(e) && this.known.has(e);
    }, t.prototype.pass = function(e) {
      if (Xe(e)) {
        var r = wk(e);
        return this.passes.set(r, e), r;
      }
      return e;
    }, t.prototype.admit = function(e) {
      var r = this;
      if (Xe(e)) {
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
            var o = Object.getPrototypeOf(e), u = [o], c = this.sortedKeys(e);
            u.push(c.json);
            var l = u.length;
            c.sorted.forEach(function(h) {
              u.push(r.admit(e[h]));
            });
            var s = this.pool.lookupArray(u);
            if (!s.object) {
              var f = s.object = Object.create(o);
              this.known.add(f), c.sorted.forEach(function(h, p) {
                f[h] = u[l + p];
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
function eh(t) {
  return [
    t.selectionSet,
    t.objectOrReference,
    t.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    t.context.canonizeResults
  ];
}
var Ek = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.knownResults = new (Ti ? WeakMap : Map)(), this.config = li(e, {
        addTypename: e.addTypename !== !1,
        canonizeResults: Pv(e)
      }), this.canon = e.canon || new Xd(), this.executeSelectionSet = da(function(n) {
        var i, a = n.context.canonizeResults, s = eh(n);
        s[3] = !a;
        var o = (i = r.executeSelectionSet).peek.apply(i, s);
        return o ? a ? _(_({}, o), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(o.result)
        }) : o : (Kd(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || or["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: eh,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, a, s) {
          if (Ki(a.store))
            return a.store.makeCacheKey(n, Ve(i) ? i.__ref : i, a.varString, s);
        }
      }), this.executeSubSelectedArray = da(function(n) {
        return Kd(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || or["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, a = n.array, s = n.context;
          if (Ki(s.store))
            return s.store.makeCacheKey(i, a, s.varString);
        }
      });
    }
    return t.prototype.resetCanon = function() {
      this.canon = new Xd();
    }, t.prototype.diffQueryAgainstStore = function(e) {
      var r = e.store, n = e.query, i = e.rootId, a = i === void 0 ? "ROOT_QUERY" : i, s = e.variables, o = e.returnPartialData, u = o === void 0 ? !0 : o, c = e.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, f = this.config.cache.policies;
      s = _(_({}, Ol(Km(n))), s);
      var d = ei(a), h = this.executeSelectionSet({
        selectionSet: Na(n).selectionSet,
        objectOrReference: d,
        enclosingRef: d,
        context: _({ store: r, query: n, policies: f, variables: s, varString: Zr(s), canonizeResults: l }, Fv(n, this.config.fragments))
      }), p;
      if (h.missing && (p = [
        new Av(xk(h.missing), h.missing, n, s)
      ], !u))
        throw p[0];
      return {
        result: h.result,
        complete: !p,
        missing: p
      };
    }, t.prototype.isFresh = function(e, r, n, i) {
      if (Ki(i.store) && this.knownResults.get(e) === n) {
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
      if (Ve(i) && !s.policies.rootTypenamesById[i.__ref] && !s.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var o = s.variables, u = s.policies, c = s.store, l = c.getFieldValue(i, "__typename"), f = [], d, h = new rn();
      this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && f.push({ __typename: l });
      function p(w, k) {
        var b;
        return w.missing && (d = h.merge(d, (b = {}, b[k] = w.missing, b))), w.result;
      }
      var v = new Set(n.selections);
      v.forEach(function(w) {
        var k, b;
        if (Oa(w, o))
          if (en(w)) {
            var S = u.readField({
              fieldName: w.name.value,
              field: w,
              variables: s.variables,
              from: i
            }, s), D = Xr(w);
            S === void 0 ? Dl.added(w) || (d = h.merge(d, (k = {}, k[D] = "Can't find field '".concat(w.name.value, "' on ").concat(Ve(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), k))) : et(S) ? S.length > 0 && (S = p(r.executeSubSelectedArray({
              field: w,
              array: S,
              enclosingRef: a,
              context: s
            }), D)) : w.selectionSet ? S != null && (S = p(r.executeSelectionSet({
              selectionSet: w.selectionSet,
              objectOrReference: S,
              enclosingRef: Ve(S) ? S : a,
              context: s
            }), D)) : s.canonizeResults && (S = r.canon.pass(S)), S !== void 0 && f.push((b = {}, b[D] = S, b));
          } else {
            var N = _o(w, s.lookupFragment);
            if (!N && w.kind === ee.FRAGMENT_SPREAD)
              throw St(9, w.name.value);
            N && u.fragmentMatches(N, l) && N.selectionSet.selections.forEach(v.add, v);
          }
      });
      var m = No(f), y = { result: m, missing: d }, g = s.canonizeResults ? this.canon.admit(y) : _c(y);
      return g.result && this.knownResults.set(g.result, n), g;
    }, t.prototype.execSubSelectedArrayImpl = function(e) {
      var r = this, n = e.field, i = e.array, a = e.enclosingRef, s = e.context, o, u = new rn();
      function c(l, f) {
        var d;
        return l.missing && (o = u.merge(o, (d = {}, d[f] = l.missing, d))), l.result;
      }
      return n.selectionSet && (i = i.filter(s.store.canRead)), i = i.map(function(l, f) {
        return l === null ? null : et(l) ? c(r.executeSubSelectedArray({
          field: n,
          array: l,
          enclosingRef: a,
          context: s
        }), f) : n.selectionSet ? c(r.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: l,
          enclosingRef: Ve(l) ? l : a,
          context: s
        }), f) : (globalThis.__DEV__ !== !1 && kk(s.store, n, l), l);
      }), {
        result: s.canonizeResults ? this.canon.admit(i) : i,
        missing: o
      };
    }, t;
  }()
);
function xk(t) {
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
function kk(t, e, r) {
  if (!e.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      Xe(i) && (oe(
        !Ve(i),
        10,
        vk(t, i),
        e.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var jl = new Xm(), th = /* @__PURE__ */ new WeakMap();
function Xi(t) {
  var e = th.get(t);
  return e || th.set(t, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: lv()
  }), e;
}
function rh(t) {
  Xi(t).vars.forEach(function(e) {
    return e.forgetCache(t);
  });
}
function _k(t) {
  Xi(t).vars.forEach(function(e) {
    return e.attachCache(t);
  });
}
function Tk(t) {
  var e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
    if (arguments.length > 0) {
      if (t !== a) {
        t = a, e.forEach(function(u) {
          Xi(u).dep.dirty(n), Sk(u);
        });
        var s = Array.from(r);
        r.clear(), s.forEach(function(u) {
          return u(t);
        });
      }
    } else {
      var o = jl.getValue();
      o && (i(o), Xi(o).dep(n));
    }
    return t;
  };
  n.onNextChange = function(a) {
    return r.add(a), function() {
      r.delete(a);
    };
  };
  var i = n.attachCache = function(a) {
    return e.add(a), Xi(a).vars.add(n), n;
  };
  return n.forgetCache = function(a) {
    return e.delete(a);
  }, n;
}
function Sk(t) {
  t.broadcastWatches && t.broadcastWatches();
}
var nh = /* @__PURE__ */ Object.create(null);
function Vl(t) {
  var e = JSON.stringify(t);
  return nh[e] || (nh[e] = /* @__PURE__ */ Object.create(null));
}
function ih(t) {
  var e = Vl(t);
  return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
    var i = function(s, o) {
      return n.readField(o, s);
    }, a = n.keyObject = $l(t, function(s) {
      var o = ri(
        n.storeObject,
        s,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return o === void 0 && r !== n.storeObject && ht.call(r, s[0]) && (o = ri(r, s, Vv)), oe(o !== void 0, 4, s.join("."), r), o;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(a));
  });
}
function ah(t) {
  var e = Vl(t);
  return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
    var i = n.field, a = n.variables, s = n.fieldName, o = $l(t, function(c) {
      var l = c[0], f = l.charAt(0);
      if (f === "@") {
        if (i && ur(i.directives)) {
          var d = l.slice(1), h = i.directives.find(function(y) {
            return y.name.value === d;
          }), p = h && To(h, a);
          return p && ri(
            p,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            c.slice(1)
          );
        }
        return;
      }
      if (f === "$") {
        var v = l.slice(1);
        if (a && ht.call(a, v)) {
          var m = c.slice(0);
          return m[0] = v, ri(a, m);
        }
        return;
      }
      if (r)
        return ri(r, c);
    }), u = JSON.stringify(o);
    return (r || u !== "{}") && (s += ":" + u), s;
  });
}
function $l(t, e) {
  var r = new rn();
  return jv(t).reduce(function(n, i) {
    var a, s = e(i);
    if (s !== void 0) {
      for (var o = i.length - 1; o >= 0; --o)
        s = (a = {}, a[i[o]] = s, a);
      n = r.merge(n, s);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function jv(t) {
  var e = Vl(t);
  if (!e.paths) {
    var r = e.paths = [], n = [];
    t.forEach(function(i, a) {
      et(i) ? (jv(i).forEach(function(s) {
        return r.push(n.concat(s));
      }), n.length = 0) : (n.push(i), et(t[a + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return e.paths;
}
function Vv(t, e) {
  return t[e];
}
function ri(t, e, r) {
  return r = r || Vv, $v(e.reduce(function n(i, a) {
    return et(i) ? i.map(function(s) {
      return n(s, a);
    }) : i && r(i, a);
  }, t));
}
function $v(t) {
  return Xe(t) ? et(t) ? t.map($v) : $l(Object.keys(t).sort(), function(e) {
    return ri(t, e);
  }) : t;
}
function Nc(t) {
  return t.args !== void 0 ? t.args : t.field ? To(t.field, t.variables) : null;
}
var Ok = function() {
}, sh = function(t, e) {
  return e.fieldName;
}, oh = function(t, e, r) {
  var n = r.mergeObjects;
  return n(t, e);
}, uh = function(t, e) {
  return e;
}, Ik = (
  /** @class */
  function() {
    function t(e) {
      this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = _({ dataIdFromObject: Dv }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return t.prototype.identify = function(e, r) {
      var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      for (var s = r && r.storeObject || e, o = _(_({}, r), { typename: a, storeObject: s, readField: r && r.readField || function() {
        var d = zl(arguments, s);
        return i.readField(d, {
          store: i.cache.data,
          variables: d.variables
        });
      } }), u, c = a && this.getTypePolicy(a), l = c && c.keyFn || this.config.dataIdFromObject; l; ) {
        var f = l(_(_({}, e), s), o);
        if (et(f))
          l = ih(f);
        else {
          u = f;
          break;
        }
      }
      return u = u ? String(u) : void 0, o.keyObject ? [u, o.keyObject] : [u];
    }, t.prototype.addTypePolicies = function(e) {
      var r = this;
      Object.keys(e).forEach(function(n) {
        var i = e[n], a = i.queryType, s = i.mutationType, o = i.subscriptionType, u = Or(i, ["queryType", "mutationType", "subscriptionType"]);
        a && r.setRootTypename("Query", n), s && r.setRootTypename("Mutation", n), o && r.setRootTypename("Subscription", n), ht.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
      });
    }, t.prototype.updateTypePolicy = function(e, r) {
      var n = this, i = this.getTypePolicy(e), a = r.keyFields, s = r.fields;
      function o(u, c) {
        u.merge = typeof c == "function" ? c : c === !0 ? oh : c === !1 ? uh : u.merge;
      }
      o(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? Ok : et(a) ? ih(a) : typeof a == "function" ? a : i.keyFn, s && Object.keys(s).forEach(function(u) {
        var c = n.getFieldPolicy(e, u, !0), l = s[u];
        if (typeof l == "function")
          c.read = l;
        else {
          var f = l.keyArgs, d = l.read, h = l.merge;
          c.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          f === !1 ? sh : et(f) ? ah(f) : typeof f == "function" ? f : c.keyFn, typeof d == "function" && (c.read = d), o(c, h);
        }
        c.read && c.merge && (c.keyFn = c.keyFn || sh);
      });
    }, t.prototype.setRootTypename = function(e, r) {
      r === void 0 && (r = e);
      var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && (oe(!i || i === e, 5, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
    }, t.prototype.addPossibleTypes = function(e) {
      var r = this;
      this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
        r.getSupertypeSet(n, !0), e[n].forEach(function(i) {
          r.getSupertypeSet(i, !0).add(n);
          var a = i.match(Mv);
          (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, t.prototype.getTypePolicy = function(e) {
      var r = this;
      if (!ht.call(this.typePolicies, e)) {
        var n = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
        n.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(e);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(s, o) {
          if (s.test(e)) {
            var u = r.supertypeMap.get(o);
            u && u.forEach(function(c) {
              return i.add(c);
            });
          }
        })), i && i.size && i.forEach(function(s) {
          var o = r.getTypePolicy(s), u = o.fields, c = Or(o, ["fields"]);
          Object.assign(n, c), Object.assign(n.fields, u);
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
        for (var o = this.getSupertypeSet(r, !0), u = [o], c = function(p) {
          var v = a.getSupertypeSet(p, !1);
          v && v.size && u.indexOf(v) < 0 && u.push(v);
        }, l = !!(n && this.fuzzySubtypes.size), f = !1, d = 0; d < u.length; ++d) {
          var h = u[d];
          if (h.has(s))
            return o.has(s) || (f && globalThis.__DEV__ !== !1 && oe.warn(6, r, s), o.add(s)), !0;
          h.forEach(c), l && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          d === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          Cc(e.selectionSet, n, i) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(p, v) {
            var m = r.match(p);
            m && m[0] === r && c(v);
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
        }, u = Nc(e); s; ) {
          var c = s(u, o);
          if (et(c))
            s = ah(c);
          else {
            a = c || n;
            break;
          }
        }
      return a === void 0 && (a = e.field ? HE(e.field, e.variables) : Jm(n, Nc(e))), a === !1 ? n : n === nn(a) ? a : n + ":" + a;
    }, t.prototype.readField = function(e, r) {
      var n = e.from;
      if (n) {
        var i = e.field || e.fieldName;
        if (i) {
          if (e.typename === void 0) {
            var a = r.store.getFieldValue(n, "__typename");
            a && (e.typename = a);
          }
          var s = this.getStoreFieldName(e), o = nn(s), u = r.store.getFieldValue(n, s), c = this.getFieldPolicy(e.typename, o, !1), l = c && c.read;
          if (l) {
            var f = ch(this, n, e, r, r.store.getStorage(Ve(n) ? n.__ref : n, s));
            return jl.withValue(this.cache, l, [
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
      return u === oh ? zv(i.store)(e, r) : u === uh ? r : (i.overwrite && (e = void 0), u(e, r, ch(
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
function ch(t, e, r, n, i) {
  var a = t.getStoreFieldName(r), s = nn(a), o = r.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
  return {
    args: Nc(r),
    field: r.field || null,
    fieldName: s,
    storeFieldName: a,
    variables: o,
    isReference: Ve,
    toReference: c,
    storage: i,
    cache: t.cache,
    canRead: l,
    readField: function() {
      return t.readField(zl(arguments, e, o), n);
    },
    mergeObjects: zv(n.store)
  };
}
function zl(t, e, r) {
  var n = t[0], i = t[1], a = t.length, s;
  return typeof n == "string" ? s = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : e
  } : (s = _({}, n), ht.call(s, "from") || (s.from = e)), globalThis.__DEV__ !== !1 && s.from === void 0 && globalThis.__DEV__ !== !1 && oe.warn(7, Rm(Array.from(t))), s.variables === void 0 && (s.variables = r), s;
}
function zv(t) {
  return function(r, n) {
    if (et(r) || et(n))
      throw St(8);
    if (Xe(r) && Xe(n)) {
      var i = t.getFieldValue(r, "__typename"), a = t.getFieldValue(n, "__typename"), s = i && a && i !== a;
      if (s)
        return n;
      if (Ve(r) && Qn(n))
        return t.merge(r.__ref, n), r;
      if (Qn(r) && Ve(n))
        return t.merge(r, n.__ref), n;
      if (Qn(r) && Qn(n))
        return _(_({}, r), n);
    }
    return n;
  };
}
function Eu(t, e, r) {
  var n = "".concat(e).concat(r), i = t.flavors.get(n);
  return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : _(_({}, t), { clientOnly: e, deferred: r })), i;
}
var Ck = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.cache = e, this.reader = r, this.fragments = n;
    }
    return t.prototype.writeToStore = function(e, r) {
      var n = this, i = r.query, a = r.result, s = r.dataId, o = r.variables, u = r.overwrite, c = Ca(i), l = yk();
      o = _(_({}, Ol(c)), o);
      var f = _(_({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(h, p) {
        return l.merge(h, p);
      }, variables: o, varString: Zr(o) }, Fv(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
        result: a || /* @__PURE__ */ Object.create(null),
        dataId: s,
        selectionSet: c.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: f
      });
      if (!Ve(d))
        throw St(11, a);
      return f.incomingById.forEach(function(h, p) {
        var v = h.storeObject, m = h.mergeTree, y = h.fieldNodeSet, g = ei(p);
        if (m && m.map.size) {
          var w = n.applyMerges(m, g, v, f);
          if (Ve(w))
            return;
          v = w;
        }
        if (globalThis.__DEV__ !== !1 && !f.overwrite) {
          var k = /* @__PURE__ */ Object.create(null);
          y.forEach(function(D) {
            D.selectionSet && (k[D.name.value] = !0);
          });
          var b = function(D) {
            return k[nn(D)] === !0;
          }, S = function(D) {
            var N = m && m.map.get(D);
            return !!(N && N.info && N.info.merge);
          };
          Object.keys(v).forEach(function(D) {
            b(D) && !S(D) && Nk(g, v, D, f.store);
          });
        }
        e.merge(p, v);
      }), e.retain(d.__ref), d;
    }, t.prototype.processSelectionSet = function(e) {
      var r = this, n = e.dataId, i = e.result, a = e.selectionSet, s = e.context, o = e.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = n && u.rootTypenamesById[n] || bc(i, a, s.fragmentMap) || n && s.store.get(n, "__typename");
      typeof l == "string" && (c.__typename = l);
      var f = function() {
        var w = zl(arguments, c, s.variables);
        if (Ve(w.from)) {
          var k = s.incomingById.get(w.from.__ref);
          if (k) {
            var b = u.readField(_(_({}, w), { from: k.storeObject }), s);
            if (b !== void 0)
              return b;
          }
        }
        return u.readField(w, s);
      }, d = /* @__PURE__ */ new Set();
      this.flattenFields(
        a,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        s,
        l
      ).forEach(function(w, k) {
        var b, S = Xr(k), D = i[S];
        if (d.add(k), D !== void 0) {
          var N = u.getStoreFieldName({
            typename: l,
            fieldName: k.name.value,
            field: k,
            variables: w.variables
          }), A = lh(o, N), F = r.processFieldValue(
            D,
            k,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            k.selectionSet ? Eu(w, !1, !1) : w,
            A
          ), j = void 0;
          k.selectionSet && (Ve(F) || Qn(F)) && (j = f("__typename", F));
          var P = u.getMergeFunction(l, k.name.value, j);
          P ? A.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: k,
            typename: l,
            merge: P
          } : fh(o, N), c = w.merge(c, (b = {}, b[N] = F, b));
        } else
          globalThis.__DEV__ !== !1 && !w.clientOnly && !w.deferred && !Dl.added(k) && // If the field has a read function, it may be a synthetic field or
          // provide a default value, so its absence from the written data should
          // not be cause for alarm.
          !u.getReadFunction(l, k.name.value) && globalThis.__DEV__ !== !1 && oe.error(12, Xr(k), i);
      });
      try {
        var h = u.identify(i, {
          typename: l,
          selectionSet: a,
          fragmentMap: s.fragmentMap,
          storeObject: c,
          readField: f
        }), p = h[0], v = h[1];
        n = n || p, v && (c = s.merge(c, v));
      } catch (w) {
        if (!n)
          throw w;
      }
      if (typeof n == "string") {
        var m = ei(n), y = s.written[n] || (s.written[n] = []);
        if (y.indexOf(a) >= 0 || (y.push(a), this.reader && this.reader.isFresh(i, m, a, s)))
          return m;
        var g = s.incomingById.get(n);
        return g ? (g.storeObject = s.merge(g.storeObject, c), g.mergeTree = Ac(g.mergeTree, o), d.forEach(function(w) {
          return g.fieldNodeSet.add(w);
        })) : s.incomingById.set(n, {
          storeObject: c,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: js(o) ? void 0 : o,
          fieldNodeSet: d
        }), m;
      }
      return c;
    }, t.prototype.processFieldValue = function(e, r, n, i) {
      var a = this;
      return !r.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? gv(e) : e : et(e) ? e.map(function(s, o) {
        var u = a.processFieldValue(s, r, n, lh(i, o));
        return fh(i, o), u;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, t.prototype.flattenFields = function(e, r, n, i) {
      i === void 0 && (i = bc(r, e, n.fragmentMap));
      var a = /* @__PURE__ */ new Map(), s = this.cache.policies, o = new _i(!1);
      return function u(c, l) {
        var f = o.lookup(
          c,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          l.clientOnly,
          l.deferred
        );
        f.visited || (f.visited = !0, c.selections.forEach(function(d) {
          if (Oa(d, n.variables)) {
            var h = l.clientOnly, p = l.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(h && p) && ur(d.directives) && d.directives.forEach(function(y) {
                var g = y.name.value;
                if (g === "client" && (h = !0), g === "defer") {
                  var w = To(y, n.variables);
                  (!w || w.if !== !1) && (p = !0);
                }
              }), en(d)
            ) {
              var v = a.get(d);
              v && (h = h && v.clientOnly, p = p && v.deferred), a.set(d, Eu(n, h, p));
            } else {
              var m = _o(d, n.lookupFragment);
              if (!m && d.kind === ee.FRAGMENT_SPREAD)
                throw St(13, d.name.value);
              m && s.fragmentMatches(m, i, r, n.variables) && u(m.selectionSet, Eu(n, h, p));
            }
          }
        }));
      }(e, n), a;
    }, t.prototype.applyMerges = function(e, r, n, i, a) {
      var s, o = this;
      if (e.map.size && !Ve(n)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !et(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (Ve(r) || Qn(r)) ? r : void 0
        ), c = n;
        u && !a && (a = [Ve(u) ? u.__ref : u]);
        var l, f = function(d, h) {
          return et(d) ? typeof h == "number" ? d[h] : void 0 : i.store.getFieldValue(d, String(h));
        };
        e.map.forEach(function(d, h) {
          var p = f(u, h), v = f(c, h);
          if (v !== void 0) {
            a && a.push(h);
            var m = o.applyMerges(d, p, v, i, a);
            m !== v && (l = l || /* @__PURE__ */ new Map(), l.set(h, m)), a && oe(a.pop() === h);
          }
        }), l && (n = et(c) ? c.slice(0) : _({}, c), l.forEach(function(d, h) {
          n[h] = d;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, a && (s = i.store).getStorage.apply(s, a)) : n;
    }, t;
  }()
), qv = [];
function lh(t, e) {
  var r = t.map;
  return r.has(e) || r.set(e, qv.pop() || { map: /* @__PURE__ */ new Map() }), r.get(e);
}
function Ac(t, e) {
  if (t === e || !e || js(e))
    return t;
  if (!t || js(t))
    return e;
  var r = t.info && e.info ? _(_({}, t.info), e.info) : t.info || e.info, n = t.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : t.map.size ? t.map : e.map, a = { info: r, map: i };
  if (n) {
    var s = new Set(e.map.keys());
    t.map.forEach(function(o, u) {
      a.map.set(u, Ac(o, e.map.get(u))), s.delete(u);
    }), s.forEach(function(o) {
      a.map.set(o, Ac(e.map.get(o), t.map.get(o)));
    });
  }
  return a;
}
function js(t) {
  return !t || !(t.info || t.map.size);
}
function fh(t, e) {
  var r = t.map, n = r.get(e);
  n && js(n) && (qv.push(n), r.delete(e));
}
var dh = /* @__PURE__ */ new Set();
function Nk(t, e, r, n) {
  var i = function(f) {
    var d = n.getFieldValue(f, r);
    return typeof d == "object" && d;
  }, a = i(t);
  if (a) {
    var s = i(e);
    if (s && !Ve(a) && !Be(a, s) && !Object.keys(a).every(function(f) {
      return n.getFieldValue(s, f) !== void 0;
    })) {
      var o = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"), u = nn(r), c = "".concat(o, ".").concat(u);
      if (!dh.has(c)) {
        dh.add(c);
        var l = [];
        !et(a) && !et(s) && [a, s].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !l.includes(d) && l.push(d);
        }), globalThis.__DEV__ !== !1 && oe.warn(14, u, o, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", c, _({}, a), _({}, s));
      }
    }
  }
}
var Uv = (
  /** @class */
  function(t) {
    tr(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new fv(Dl), n.assumeImmutableResults = !0, n.makeVar = Tk, n.txCount = 0, n.config = mk(r), n.addTypename = !!n.config.addTypename, n.policies = new Ik({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return e.prototype.init = function() {
      var r = this.data = new pa.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new Ck(this, this.storeReader = new Ek({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Pv(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = da(function(s, o) {
        return n.broadcastWatch(s, o);
      }, {
        max: this.config.resultCacheMaxSize || or["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(s) {
          var o = s.optimistic ? n.optimisticData : n.data;
          if (Ki(o)) {
            var u = s.optimistic, c = s.id, l = s.variables;
            return o.makeCacheKey(
              s.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              s.callback,
              Zr({ optimistic: u, id: c, variables: l })
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
        return this.storeReader.diffQueryAgainstStore(_(_({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof Av)
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
      if (ht.call(r, "id") && !r.id)
        return !1;
      var n = r.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.diff = function(r) {
      return this.storeReader.diffQueryAgainstStore(_(_({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || _k(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && rh(n), n.maybeBroadcastWatch.forget(r);
      };
    }, e.prototype.gc = function(r) {
      var n;
      Zr.reset(), Co.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, e.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, e.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, e.prototype.identify = function(r) {
      if (Ve(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && oe.warn(n);
      }
    }, e.prototype.evict = function(r) {
      if (!r.id) {
        if (ht.call(r, "id"))
          return !1;
        r = _(_({}, r), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.reset = function(r) {
      var n = this;
      return this.init(), Zr.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), rh(this)) : this.broadcastWatches(), Promise.resolve();
    }, e.prototype.removeOptimistic = function(r) {
      var n = this.optimisticData.removeLayer(r);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, e.prototype.batch = function(r) {
      var n = this, i = r.update, a = r.optimistic, s = a === void 0 ? !0 : a, o = r.removeOptimistic, u = r.onWatchUpdated, c, l = function(d) {
        var h = n, p = h.data, v = h.optimisticData;
        ++n.txCount, d && (n.data = n.optimisticData = d);
        try {
          return c = i(n);
        } finally {
          --n.txCount, n.data = p, n.optimisticData = v;
        }
      }, f = /* @__PURE__ */ new Set();
      return u && !this.txCount && this.broadcastWatches(_(_({}, r), { onWatchUpdated: function(d) {
        return f.add(d), !1;
      } })), typeof s == "string" ? this.optimisticData = this.optimisticData.addLayer(s, l) : s === !1 ? l(this.data) : l(), typeof o == "string" && (this.optimisticData = this.optimisticData.removeLayer(o)), u && f.size ? (this.broadcastWatches(_(_({}, r), { onWatchUpdated: function(d, h) {
        var p = u.call(this, d, h);
        return p !== !1 && f.delete(d), p;
      } })), f.size && f.forEach(function(d) {
        return n.maybeBroadcastWatch.dirty(d);
      })) : this.broadcastWatches(r), c;
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
  }(Nv)
);
globalThis.__DEV__ !== !1 && (Uv.prototype.getMemoryInternals = IE);
var qe;
(function(t) {
  t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error";
})(qe || (qe = {}));
function ma(t) {
  return t ? t < 7 : !1;
}
var hh = Object.assign, Ak = Object.hasOwnProperty, Dc = (
  /** @class */
  function(t) {
    tr(e, t);
    function e(r) {
      var n = r.queryManager, i = r.queryInfo, a = r.options, s = t.call(this, function(m) {
        try {
          var y = m._subscription._observer;
          y && !y.error && (y.error = Dk);
        } catch {
        }
        var g = !s.observers.size;
        s.observers.add(m);
        var w = s.last;
        return w && w.error ? m.error && m.error(w.error) : w && w.result && m.next && m.next(w.result), g && s.reobserve().catch(function() {
        }), function() {
          s.observers.delete(m) && !s.observers.size && s.tearDownQuery();
        };
      }) || this;
      s.observers = /* @__PURE__ */ new Set(), s.subscriptions = /* @__PURE__ */ new Set(), s.queryInfo = i, s.queryManager = n, s.waitForOwnResult = xu(a.fetchPolicy), s.isTornDown = !1;
      var o = n.defaultOptions.watchQuery, u = o === void 0 ? {} : o, c = u.fetchPolicy, l = c === void 0 ? "cache-first" : c, f = a.fetchPolicy, d = f === void 0 ? l : f, h = a.initialFetchPolicy, p = h === void 0 ? d === "standby" ? l : d : h;
      s.options = _(_({}, a), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: p,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: d
      }), s.queryId = i.queryId || n.generateQueryId();
      var v = Ca(s.query);
      return s.queryName = v && v.name && v.name.value, s;
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
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || qe.ready, a = _(_({}, n), { loading: ma(i), networkStatus: i }), s = this.options.fetchPolicy, o = s === void 0 ? "cache-first" : s;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(xu(o) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      )
        if (this.waitForOwnResult)
          this.queryInfo.updateWatch();
        else {
          var u = this.queryInfo.getDiff();
          (u.complete || this.options.returnPartialData) && (a.data = u.result), Be(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === qe.loading && (o === "cache-first" || o === "cache-only") && (a.networkStatus = qe.ready, a.loading = !1)) : a.partial = !0, globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && Bv(u.missing);
        }
      return r && this.updateLastResult(a), a;
    }, e.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !Cv(this.query, this.last.result, r, this.variables) : !Be(this.last.result, r);
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
      if (a === "cache-and-network" ? i.fetchPolicy = a : a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && Ak.call(r, "variables")) {
        var s = Km(this.query), o = s.variableDefinitions;
        (!o || !o.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && oe.warn(
          20,
          r,
          ((n = s.name) === null || n === void 0 ? void 0 : n.value) || s
        );
      }
      return r && !Be(this.options.variables, r) && (i.variables = this.options.variables = _(_({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, qe.refetch);
    }, e.prototype.fetchMore = function(r) {
      var n = this, i = _(_({}, r.query ? r : _(_(_(_({}, this.options), { query: this.options.query }), r), { variables: _(_({}, this.options.variables), r.variables) })), {
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
      return this.queryManager.fetchQuery(a, i, qe.fetchMore).then(function(c) {
        return n.queryManager.removeQuery(a), s.networkStatus === qe.fetchMore && (s.networkStatus = o), n.queryManager.cache.batch({
          update: function(l) {
            var f = r.updateQuery;
            f ? l.updateQuery({
              query: n.query,
              variables: n.variables,
              returnPartialData: !0,
              optimistic: !1
            }, function(d) {
              return f(d, {
                fetchMoreResult: c.data,
                variables: i.variables
              });
            }) : l.writeQuery({
              query: i.query,
              variables: i.variables,
              data: c.data
            });
          },
          onWatchUpdated: function(l) {
            u.add(l.query);
          }
        }), c;
      }).finally(function() {
        u.has(n.query) || Wv(n);
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
            var c = u.variables;
            return s(o, {
              subscriptionData: a,
              variables: c
            });
          });
        },
        error: function(a) {
          if (r.onError) {
            r.onError(a);
            return;
          }
          globalThis.__DEV__ !== !1 && oe.error(21, a);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, e.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, e.prototype.silentSetOptions = function(r) {
      var n = li(this.options, r || {});
      hh(this.options, n);
    }, e.prototype.setVariables = function(r) {
      return Be(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
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
          oe(a, 22);
          var s = i || (this.pollingInfo = {});
          s.interval = a;
          var o = function() {
            var c, l;
            r.pollingInfo && (!ma(r.queryInfo.networkStatus) && !(!((l = (c = r.options).skipPollAttempt) === null || l === void 0) && l.call(c)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, qe.poll).then(u, u) : u());
          }, u = function() {
            var c = r.pollingInfo;
            c && (clearTimeout(c.timeout), c.timeout = setTimeout(o, c.interval));
          };
          u();
        }
      }
    }, e.prototype.updateLastResult = function(r, n) {
      n === void 0 && (n = this.variables);
      var i = this.getLastError();
      return i && this.last && !Be(n, this.last.variables) && (i = void 0), this.last = _({ result: this.queryManager.assumeImmutableResults ? r : gv(r), variables: n }, i ? { error: i } : null);
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
      ), s = this.options.variables, o = this.options.fetchPolicy, u = li(this.options, r || {}), c = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : hh(this.options, u), l = this.transformDocument(c.query);
      this.lastQuery = l, a || (this.updatePolling(), r && r.variables && !Be(r.variables, s) && // Don't mess with the fetchPolicy if it's currently "standby".
      c.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      c.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = qe.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = xu(c.fetchPolicy));
      var f = function() {
        i.concast === p && (i.waitForOwnResult = !1);
      }, d = c.variables && _({}, c.variables), h = this.fetch(c, n, l), p = h.concast, v = h.fromLink, m = {
        next: function(y) {
          Be(i.variables, d) && (f(), i.reportResult(y, d));
        },
        error: function(y) {
          Be(i.variables, d) && (f(), i.reportError(y, d));
        }
      };
      return !a && (v || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = m), p.addObserver(m), p;
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
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && Ji(this.observers, "next", r);
    }, e.prototype.reportError = function(r, n) {
      var i = _(_({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: qe.error, loading: !1 });
      this.updateLastResult(i, n), Ji(this.observers, "error", this.last.error = r);
    }, e.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, e.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, e.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, e;
  }(je)
);
bv(Dc);
function Wv(t) {
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
function Dk(t) {
  globalThis.__DEV__ !== !1 && oe.error(23, t.message, t.stack);
}
function Bv(t) {
  globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && oe.debug(24, t);
}
function xu(t) {
  return t === "network-only" || t === "no-cache" || t === "standby";
}
var Hv = (
  /** @class */
  function() {
    function t(e) {
      var r = e.cache, n = e.client, i = e.resolvers, a = e.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
    }
    return t.prototype.addResolvers = function(e) {
      var r = this;
      this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
        r.resolvers = Fd(r.resolvers, n);
      }) : this.resolvers = Fd(this.resolvers, e);
    }, t.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, t.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, t.prototype.runResolvers = function(e) {
      return $r(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, a = r.context, s = r.variables, o = r.onlyRunForcedResolvers, u = o === void 0 ? !1 : o;
        return zr(this, function(c) {
          return n ? [2, this.resolveDocument(n, i.data, a, s, this.fragmentMatcher, u).then(function(l) {
            return _(_({}, i), { data: l.result });
          })] : [2, i];
        });
      });
    }, t.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e;
    }, t.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, t.prototype.clientQuery = function(e) {
      return la(["client"], e) && this.resolvers ? e : null;
    }, t.prototype.serverQuery = function(e) {
      return pv(e);
    }, t.prototype.prepareContext = function(e) {
      var r = this.cache;
      return _(_({}, e), {
        cache: r,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return r.identify(n);
        }
      });
    }, t.prototype.addExportedVariables = function(e) {
      return $r(this, arguments, void 0, function(r, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), zr(this, function(a) {
          return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(s) {
            return _(_({}, n), s.exportedVariables);
          })] : [2, _({}, n)];
        });
      });
    }, t.prototype.shouldForceResolvers = function(e) {
      var r = !1;
      return Ir(e, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), r))
              return kl;
          }
        }
      }), r;
    }, t.prototype.buildRootValueFromCache = function(e, r) {
      return this.cache.diff({
        query: px(e),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, t.prototype.resolveDocument = function(e, r) {
      return $r(this, arguments, void 0, function(n, i, a, s, o, u) {
        var c, l, f, d, h, p, v, m, y, g, w;
        return a === void 0 && (a = {}), s === void 0 && (s = {}), o === void 0 && (o = function() {
          return !0;
        }), u === void 0 && (u = !1), zr(this, function(k) {
          return c = Na(n), l = So(n), f = ko(l), d = this.collectSelectionsToResolve(c, f), h = c.operation, p = h ? h.charAt(0).toUpperCase() + h.slice(1) : "Query", v = this, m = v.cache, y = v.client, g = {
            fragmentMap: f,
            context: _(_({}, a), { cache: m, client: y }),
            variables: s,
            fragmentMatcher: o,
            defaultOperationType: p,
            exportedVariables: {},
            selectionsToResolve: d,
            onlyRunForcedResolvers: u
          }, w = !1, [2, this.resolveSelectionSet(c.selectionSet, w, i, g).then(function(b) {
            return {
              result: b,
              exportedVariables: g.exportedVariables
            };
          })];
        });
      });
    }, t.prototype.resolveSelectionSet = function(e, r, n, i) {
      return $r(this, void 0, void 0, function() {
        var a, s, o, u, c, l = this;
        return zr(this, function(f) {
          return a = i.fragmentMap, s = i.context, o = i.variables, u = [n], c = function(d) {
            return $r(l, void 0, void 0, function() {
              var h, p;
              return zr(this, function(v) {
                return !r && !i.selectionsToResolve.has(d) ? [
                  2
                  /*return*/
                ] : Oa(d, o) ? en(d) ? [2, this.resolveField(d, r, n, i).then(function(m) {
                  var y;
                  typeof m < "u" && u.push((y = {}, y[Xr(d)] = m, y));
                })] : (YE(d) ? h = d : (h = a[d.name.value], oe(h, 18, d.name.value)), h && h.typeCondition && (p = h.typeCondition.name.value, i.fragmentMatcher(n, p, s)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, i).then(function(m) {
                  u.push(m);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(e.selections.map(c)).then(function() {
            return No(u);
          })];
        });
      });
    }, t.prototype.resolveField = function(e, r, n, i) {
      return $r(this, void 0, void 0, function() {
        var a, s, o, u, c, l, f, d, h, p = this;
        return zr(this, function(v) {
          return n ? (a = i.variables, s = e.name.value, o = Xr(e), u = s !== o, c = n[o] || n[s], l = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (f = n.__typename || i.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[u ? s : o], h && (l = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            jl.withValue(this.cache, h, [
              n,
              To(e, a),
              i.context,
              { field: e, fragmentMap: i.fragmentMap }
            ])
          )))), [2, l.then(function(m) {
            var y, g;
            if (m === void 0 && (m = c), e.directives && e.directives.forEach(function(k) {
              k.name.value === "export" && k.arguments && k.arguments.forEach(function(b) {
                b.name.value === "as" && b.value.kind === "StringValue" && (i.exportedVariables[b.value.value] = m);
              });
            }), !e.selectionSet || m == null)
              return m;
            var w = (g = (y = e.directives) === null || y === void 0 ? void 0 : y.some(function(k) {
              return k.name.value === "client";
            })) !== null && g !== void 0 ? g : !1;
            if (Array.isArray(m))
              return p.resolveSubSelectedArray(e, r || w, m, i);
            if (e.selectionSet)
              return p.resolveSelectionSet(e.selectionSet, r || w, m, i);
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
          i.set(s, o), Ir(s, {
            Directive: function(u, c, l, f, d) {
              u.name.value === "client" && d.forEach(function(h) {
                n(h) && Sd(h) && o.add(h);
              });
            },
            FragmentSpread: function(u, c, l, f, d) {
              var h = r[u.name.value];
              oe(h, 19, u.name.value);
              var p = a(h);
              p.size > 0 && (d.forEach(function(v) {
                n(v) && Sd(v) && o.add(v);
              }), o.add(u), p.forEach(function(v) {
                o.add(v);
              }));
            }
          });
        }
        return i.get(s);
      }
      return a(e);
    }, t;
  }()
), Yn = new (Ti ? WeakMap : Map)();
function ku(t, e) {
  var r = t[e];
  typeof r == "function" && (t[e] = function() {
    return Yn.set(
      t,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (Yn.get(t) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
function ph(t) {
  t.notifyTimeout && (clearTimeout(t.notifyTimeout), t.notifyTimeout = void 0);
}
var _u = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var n = this.cache = e.cache;
      Yn.has(n) || (Yn.set(n, 0), ku(n, "evict"), ku(n, "modify"), ku(n, "reset"));
    }
    return t.prototype.init = function(e) {
      var r = e.networkStatus || qe.loading;
      return this.variables && this.networkStatus !== qe.loading && !Be(this.variables, e.variables) && (r = qe.setVariables), Be(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
        document: e.document,
        variables: e.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
    }, t.prototype.reset = function() {
      ph(this), this.dirty = !1;
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
        n.fromOptimisticTransaction ? e.observe() : Wv(e);
      })) : delete this.oqListener);
    }, t.prototype.notify = function() {
      var e = this;
      ph(this), this.shouldNotify() && this.listeners.forEach(function(r) {
        return r(e);
      }), this.dirty = !1;
    }, t.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (ma(this.networkStatus) && this.observableQuery) {
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
        var i = _(_({}, this.getDiffOptions(e)), { watcher: this, callback: function(a) {
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
      n.dmCount === Yn.get(this.cache) && Be(r, n.variables) && Be(e.data, n.result.data));
    }, t.prototype.markResult = function(e, r, n, i) {
      var a = this, s = new rn(), o = ur(e.errors) ? e.errors.slice(0) : [];
      if (this.reset(), "incremental" in e && ur(e.incremental)) {
        var u = wv(this.getDiff().result, e);
        e.data = u;
      } else if ("hasNext" in e && e.hasNext) {
        var c = this.getDiff();
        e.data = s.merge(c.result, e.data);
      }
      this.graphQLErrors = o, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Rc(e, n.errorPolicy) ? this.cache.performTransaction(function(l) {
        if (a.shouldWrite(e, n.variables))
          l.writeQuery({
            query: r,
            data: e.data,
            variables: n.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: e,
            variables: n.variables,
            dmCount: Yn.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          e.data = a.lastDiff.diff.result;
          return;
        }
        var f = a.getDiffOptions(n.variables), d = l.diff(f);
        !a.stopped && Be(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(d, f), d.complete && (e.data = d.result);
      }) : this.lastWrite = void 0);
    }, t.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = qe.ready;
    }, t.prototype.markError = function(e) {
      return this.networkStatus = qe.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
    }, t;
  }()
);
function Rc(t, e) {
  e === void 0 && (e = "none");
  var r = e === "ignore" || e === "all", n = !ws(t);
  return !n && r && t.data && (n = !0), n;
}
var Rk = Object.prototype.hasOwnProperty, mh = /* @__PURE__ */ Object.create(null), Pk = (
  /** @class */
  function() {
    function t(e) {
      var r = e.cache, n = e.link, i = e.defaultOptions, a = e.documentTransform, s = e.queryDeduplication, o = s === void 0 ? !1 : s, u = e.onBroadcast, c = e.ssrMode, l = c === void 0 ? !1 : c, f = e.clientAwareness, d = f === void 0 ? {} : f, h = e.localState, p = e.assumeImmutableResults, v = p === void 0 ? !!r.assumeImmutableResults : p, m = e.defaultContext, y = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Tl(
        or["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new _i(!1);
      var g = new fv(
        function(w) {
          return y.cache.transformDocument(w);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = o, this.clientAwareness = d, this.localState = h || new Hv({ cache: r }), this.ssrMode = l, this.assumeImmutableResults = v, this.documentTransform = a ? g.concat(a).concat(g) : g, this.defaultContext = m || /* @__PURE__ */ Object.create(null), (this.onBroadcast = u) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return t.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(r, n) {
        e.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches(St(25));
    }, t.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(r) {
        return r(e);
      }), this.fetchCancelFns.clear();
    }, t.prototype.mutate = function(e) {
      return $r(this, arguments, void 0, function(r) {
        var n, i, a, s, o, u, c, l = r.mutation, f = r.variables, d = r.optimisticResponse, h = r.updateQueries, p = r.refetchQueries, v = p === void 0 ? [] : p, m = r.awaitRefetchQueries, y = m === void 0 ? !1 : m, g = r.update, w = r.onQueryUpdated, k = r.fetchPolicy, b = k === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : k, S = r.errorPolicy, D = S === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : S, N = r.keepRootFields, A = r.context;
        return zr(this, function(F) {
          switch (F.label) {
            case 0:
              return oe(l, 26), oe(b === "network-only" || b === "no-cache", 27), n = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), i ? [4, this.localState.addExportedVariables(l, f, A)] : [3, 2];
            case 1:
              f = F.sent(), F.label = 2;
            case 2:
              return a = this.mutationStore && (this.mutationStore[n] = {
                mutation: l,
                variables: f,
                loading: !0,
                error: null
              }), s = d && this.markMutationOptimistic(d, {
                mutationId: n,
                document: l,
                variables: f,
                fetchPolicy: b,
                errorPolicy: D,
                context: A,
                updateQueries: h,
                update: g,
                keepRootFields: N
              }), this.broadcastQueries(), o = this, [2, new Promise(function(j, P) {
                return yu(o.getObservableFromLink(l, _(_({}, A), { optimisticResponse: s ? d : void 0 }), f, !1), function(M) {
                  if (ws(M) && D === "none")
                    throw new dn({
                      graphQLErrors: Tc(M)
                    });
                  a && (a.loading = !1, a.error = null);
                  var z = _({}, M);
                  return typeof v == "function" && (v = v(z)), D === "ignore" && ws(z) && delete z.errors, o.markMutationResult({
                    mutationId: n,
                    result: z,
                    document: l,
                    variables: f,
                    fetchPolicy: b,
                    errorPolicy: D,
                    context: A,
                    update: g,
                    updateQueries: h,
                    awaitRefetchQueries: y,
                    refetchQueries: v,
                    removeOptimistic: s ? n : void 0,
                    onQueryUpdated: w,
                    keepRootFields: N
                  });
                }).subscribe({
                  next: function(M) {
                    o.broadcastQueries(), (!("hasNext" in M) || M.hasNext === !1) && j(M);
                  },
                  error: function(M) {
                    a && (a.loading = !1, a.error = M), s && o.cache.removeOptimistic(n), o.broadcastQueries(), P(M instanceof dn ? M : new dn({
                      networkError: M
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
      if (!s && Rc(i, e.errorPolicy)) {
        if (ti(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), ti(i) && ur(i.incremental)) {
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
          o.result && (u = wv(o.result, i)), typeof u < "u" && (i.data = u, a.push({
            result: u,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }));
        }
        var c = e.updateQueries;
        c && this.queries.forEach(function(f, d) {
          var h = f.observableQuery, p = h && h.queryName;
          if (!(!p || !Rk.call(c, p))) {
            var v = c[p], m = n.queries.get(d), y = m.document, g = m.variables, w = r.diff({
              query: y,
              variables: g,
              returnPartialData: !0,
              optimistic: !1
            }), k = w.result, b = w.complete;
            if (b && k) {
              var S = v(k, {
                mutationResult: i,
                queryName: y && wc(y) || void 0,
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
        var l = [];
        if (this.refetchQueries({
          updateCache: function(f) {
            s || a.forEach(function(v) {
              return f.write(v);
            });
            var d = e.update, h = !Cx(i) || ti(i) && !i.hasNext;
            if (d) {
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
                p.complete && (i = _(_({}, i), { data: p.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              h && d(f, i, {
                context: e.context,
                variables: e.variables
              });
            }
            !s && !e.keepRootFields && h && f.modify({
              id: "ROOT_MUTATION",
              fields: function(v, m) {
                var y = m.fieldName, g = m.DELETE;
                return y === "__typename" ? v : g;
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
          return l.push(f);
        }), e.awaitRefetchQueries || e.onQueryUpdated)
          return Promise.all(l).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, t.prototype.markMutationOptimistic = function(e, r) {
      var n = this, i = typeof e == "function" ? e(r.variables, { IGNORE: mh }) : e;
      return i === mh ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          n.markMutationResult(_(_({}, r), { result: { data: i } }), a);
        } catch (s) {
          globalThis.__DEV__ !== !1 && oe.error(s);
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
          hasClientExports: fE(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: la(["nonreactive"], e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: hv([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" }
          ], e),
          defaultVars: Ol(Ca(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: _(_({}, e), { definitions: e.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? _(_({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(e, n);
      }
      return r.get(e);
    }, t.prototype.getVariables = function(e, r) {
      return _(_({}, this.getDocumentInfo(e).defaultVars), r);
    }, t.prototype.watchQuery = function(e) {
      var r = this.transform(e.query);
      e = _(_({}, e), { variables: this.getVariables(r, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var n = new _u(this), i = new Dc({
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
      return r === void 0 && (r = this.generateQueryId()), oe(e.query, 28), oe(e.query.kind === "Document", 29), oe(!e.returnPartialData, 30), oe(!e.pollInterval, 31), this.fetchQuery(r, _(_({}, e), { query: this.transform(e.query) })).finally(function() {
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
      }), this.cancelPendingFetches(St(32)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = qe.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, t.prototype.getObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(s) {
        typeof s == "string" ? i.set(s, !1) : FE(s) ? i.set(r.transform(s), !1) : Xe(s) && s.query && a.add(s);
      }), this.queries.forEach(function(s, o) {
        var u = s.observableQuery, c = s.document;
        if (u) {
          if (e === "all") {
            n.set(o, u);
            return;
          }
          var l = u.queryName, f = u.options.fetchPolicy;
          if (f === "standby" || e === "active" && !u.hasObservers())
            return;
          (e === "active" || l && i.has(l) || c && i.has(c)) && (n.set(o, u), l && i.set(l, !0), c && i.set(c, !0));
        }
      }), a.size && a.forEach(function(s) {
        var o = fc("legacyOneTimeQuery"), u = r.getQuery(o).init({
          document: s.query,
          variables: s.variables
        }), c = new Dc({
          queryManager: r,
          queryInfo: u,
          options: _(_({}, s), { fetchPolicy: "network-only" })
        });
        oe(c.queryId === o), u.setObservableQuery(c), n.set(o, c);
      }), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(s, o) {
        s || globalThis.__DEV__ !== !1 && oe.warn(typeof o == "string" ? 33 : 34, o);
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
      var r = this, n = e.query, i = e.fetchPolicy, a = e.errorPolicy, s = a === void 0 ? "none" : a, o = e.variables, u = e.context, c = u === void 0 ? {} : u;
      n = this.transform(n), o = this.getVariables(n, o);
      var l = function(d) {
        return r.getObservableFromLink(n, c, d).map(function(h) {
          i !== "no-cache" && (Rc(h, s) && r.cache.write({
            query: n,
            result: h.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: d
          }), r.broadcastQueries());
          var p = ws(h), v = Hx(h);
          if (p || v) {
            var m = {};
            if (p && (m.graphQLErrors = h.errors), v && (m.protocolErrors = h.extensions[Ll]), s === "none" || v)
              throw new dn(m);
          }
          return s === "ignore" && delete h.errors, h;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var f = this.localState.addExportedVariables(n, o, c).then(l);
        return new je(function(d) {
          var h = null;
          return f.then(function(p) {
            return h = p.subscribe(d);
          }, d.error), function() {
            return h && h.unsubscribe();
          };
        });
      }
      return l(o);
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
      var o, u = this.getDocumentInfo(e), c = u.serverQuery, l = u.clientQuery;
      if (c) {
        var f = this, d = f.inFlightLinkObservables, h = f.link, p = {
          query: c,
          variables: n,
          operationName: wc(c) || void 0,
          context: this.prepareContext(_(_({}, r), { forceFetch: !i }))
        };
        if (r = p.context, i) {
          var v = Co(c), m = Zr(n), y = d.lookup(v, m);
          if (o = y.observable, !o) {
            var g = new $n([
              Sc(h, p)
            ]);
            o = y.observable = g, g.beforeNext(function() {
              d.remove(v, m);
            });
          }
        } else
          o = new $n([
            Sc(h, p)
          ]);
      } else
        o = new $n([je.of({ data: {} })]), r = this.prepareContext(r);
      return l && (o = yu(o, function(w) {
        return a.localState.runResolvers({
          document: l,
          remoteResult: w,
          context: r,
          variables: n
        });
      })), o;
    }, t.prototype.getResultsFromLink = function(e, r, n) {
      var i = e.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
      return yu(this.getObservableFromLink(a, n.context, n.variables), function(s) {
        var o = Tc(s), u = o.length > 0;
        if (i >= e.lastRequestId) {
          if (u && n.errorPolicy === "none")
            throw e.markError(new dn({
              graphQLErrors: o
            }));
          e.markResult(s, a, n, r), e.markReady();
        }
        var c = {
          data: s.data,
          loading: !1,
          networkStatus: qe.ready
        };
        return u && n.errorPolicy !== "ignore" && (c.errors = o, c.networkStatus = qe.error), c;
      }, function(s) {
        var o = Qx(s) ? s : new dn({ networkError: s });
        throw i >= e.lastRequestId && e.markError(o), o;
      });
    }, t.prototype.fetchConcastWithInfo = function(e, r, n, i) {
      var a = this;
      n === void 0 && (n = qe.loading), i === void 0 && (i = r.query);
      var s = this.getVariables(i, r.variables), o = this.getQuery(e), u = this.defaultOptions.watchQuery, c = r.fetchPolicy, l = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, f = r.errorPolicy, d = f === void 0 ? u && u.errorPolicy || "none" : f, h = r.returnPartialData, p = h === void 0 ? !1 : h, v = r.notifyOnNetworkStatusChange, m = v === void 0 ? !1 : v, y = r.context, g = y === void 0 ? {} : y, w = Object.assign({}, r, {
        query: i,
        variables: s,
        fetchPolicy: l,
        errorPolicy: d,
        returnPartialData: p,
        notifyOnNetworkStatusChange: m,
        context: g
      }), k = function(A) {
        w.variables = A;
        var F = a.fetchQueryByPolicy(o, w, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          w.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          F.sources.length > 0 && o.observableQuery && o.observableQuery.applyNextFetchPolicy("after-fetch", r), F
        );
      }, b = function() {
        return a.fetchCancelFns.delete(e);
      };
      this.fetchCancelFns.set(e, function(A) {
        b(), setTimeout(function() {
          return S.cancel(A);
        });
      });
      var S, D;
      if (this.getDocumentInfo(w.query).hasClientExports)
        S = new $n(this.localState.addExportedVariables(w.query, w.variables, w.context).then(k).then(function(A) {
          return A.sources;
        })), D = !0;
      else {
        var N = k(w.variables);
        D = N.fromLink, S = new $n(N.sources);
      }
      return S.promise.then(b, b), {
        concast: S,
        fromLink: D
      };
    }, t.prototype.refetchQueries = function(e) {
      var r = this, n = e.updateCache, i = e.include, a = e.optimistic, s = a === void 0 ? !1 : a, o = e.removeOptimistic, u = o === void 0 ? s ? fc("refetchQueries") : void 0 : o, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(d, h) {
        l.set(h, {
          oq: d,
          lastDiff: r.getQuery(h).getDiff()
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
        onWatchUpdated: function(d, h, p) {
          var v = d.watcher instanceof _u && d.watcher.observableQuery;
          if (v) {
            if (c) {
              l.delete(v.queryId);
              var m = c(v, h, p);
              return m === !0 && (m = v.refetch()), m !== !1 && f.set(v, m), m;
            }
            c !== null && l.set(v.queryId, { oq: v, lastDiff: p, diff: h });
          }
        }
      }), l.size && l.forEach(function(d, h) {
        var p = d.oq, v = d.lastDiff, m = d.diff, y;
        if (c) {
          if (!m) {
            var g = p.queryInfo;
            g.reset(), m = g.getDiff();
          }
          y = c(p, m, v);
        }
        (!c || y === !0) && (y = p.refetch()), y !== !1 && f.set(p, y), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
      }), u && this.cache.removeOptimistic(u), f;
    }, t.prototype.fetchQueryByPolicy = function(e, r, n) {
      var i = this, a = r.query, s = r.variables, o = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, l = r.returnPartialData, f = r.context, d = r.notifyOnNetworkStatusChange, h = e.networkStatus;
      e.init({
        document: a,
        variables: s,
        networkStatus: n
      });
      var p = function() {
        return e.getDiff();
      }, v = function(k, b) {
        b === void 0 && (b = e.networkStatus || qe.loading);
        var S = k.result;
        globalThis.__DEV__ !== !1 && !l && !Be(S, {}) && Bv(k.missing);
        var D = function(N) {
          return je.of(_({ data: N, loading: ma(b), networkStatus: b }, k.complete ? null : { partial: !0 }));
        };
        return S && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
          document: a,
          remoteResult: { data: S },
          context: f,
          variables: s,
          onlyRunForcedResolvers: !0
        }).then(function(N) {
          return D(N.data || void 0);
        }) : c === "none" && b === qe.refetch && Array.isArray(k.missing) ? D(void 0) : D(S);
      }, m = o === "no-cache" ? 0 : n === qe.refetch && u !== "merge" ? 1 : 2, y = function() {
        return i.getResultsFromLink(e, m, {
          query: a,
          variables: s,
          context: f,
          fetchPolicy: o,
          errorPolicy: c
        });
      }, g = d && typeof h == "number" && h !== n && ma(n);
      switch (o) {
        default:
        case "cache-first": {
          var w = p();
          return w.complete ? {
            fromLink: !1,
            sources: [v(w, e.markReady())]
          } : l || g ? {
            fromLink: !0,
            sources: [v(w), y()]
          } : { fromLink: !0, sources: [y()] };
        }
        case "cache-and-network": {
          var w = p();
          return w.complete || l || g ? {
            fromLink: !0,
            sources: [v(w), y()]
          } : { fromLink: !0, sources: [y()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [v(p(), e.markReady())]
          };
        case "network-only":
          return g ? {
            fromLink: !0,
            sources: [v(p()), y()]
          } : { fromLink: !0, sources: [y()] };
        case "no-cache":
          return g ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [v(e.getDiff()), y()]
          } : { fromLink: !0, sources: [y()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, t.prototype.getQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new _u(this, e)), this.queries.get(e);
    }, t.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var r = this.localState.prepareContext(e);
      return _(_(_({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, t;
  }()
), vh = !1, Qv = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw St(15);
      var n = e.uri, i = e.credentials, a = e.headers, s = e.cache, o = e.documentTransform, u = e.ssrMode, c = u === void 0 ? !1 : u, l = e.ssrForceFetchDelay, f = l === void 0 ? 0 : l, d = e.connectToDevTools, h = d === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : d, p = e.queryDeduplication, v = p === void 0 ? !0 : p, m = e.defaultOptions, y = e.defaultContext, g = e.assumeImmutableResults, w = g === void 0 ? s.assumeImmutableResults : g, k = e.resolvers, b = e.typeDefs, S = e.fragmentMatcher, D = e.name, N = e.version, A = e.link;
      A || (A = n ? new ck({ uri: n, credentials: i, headers: a }) : fr.empty()), this.link = A, this.cache = s, this.disableNetworkFetches = c || f > 0, this.queryDeduplication = v, this.defaultOptions = m || /* @__PURE__ */ Object.create(null), this.typeDefs = b, f && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = gl, this.localState = new Hv({
        cache: s,
        client: this,
        resolvers: k,
        fragmentMatcher: S
      }), this.queryManager = new Pk({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: y,
        documentTransform: o,
        queryDeduplication: v,
        ssrMode: c,
        clientAwareness: {
          name: D,
          version: N
        },
        localState: this.localState,
        assumeImmutableResults: w,
        onBroadcast: h ? function() {
          r.devToolsHookCb && r.devToolsHookCb({
            action: {},
            state: {
              queries: r.queryManager.getQueryStore(),
              mutations: r.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: r.cache.extract(!0)
          });
        } : void 0
      }), h && this.connectToDevTools();
    }
    return t.prototype.connectToDevTools = function() {
      if (typeof window == "object") {
        var e = window, r = Symbol.for("apollo.devtools");
        (e[r] = e[r] || []).push(this), e.__APOLLO_CLIENT__ = this;
      }
      !vh && globalThis.__DEV__ !== !1 && (vh = !0, setTimeout(function() {
        if (typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ && /^(https?|file):$/.test(window.location.protocol)) {
          var n = window.navigator, i = n && n.userAgent, a = void 0;
          typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && oe.log("Download the Apollo DevTools for a better development experience: %s", a);
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
      return this.defaultOptions.watchQuery && (e = Es(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = _(_({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, t.prototype.query = function(e) {
      return this.defaultOptions.query && (e = Es(this.defaultOptions.query, e)), oe(e.fetchPolicy !== "cache-and-network", 16), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = _(_({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
    }, t.prototype.mutate = function(e) {
      return this.defaultOptions.mutate && (e = Es(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
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
      return Sc(this.link, e);
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
        globalThis.__DEV__ !== !1 && oe.debug(17, s);
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
globalThis.__DEV__ !== !1 && (Qv.prototype.getMemoryInternals = OE);
var _s = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Yv = !0, Vs = !1;
function Zv(t) {
  return t.replace(/[\s,]+/g, " ").trim();
}
function Mk(t) {
  return Zv(t.source.body.substring(t.start, t.end));
}
function Fk(t) {
  var e = /* @__PURE__ */ new Set(), r = [];
  return t.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = Mk(n.loc), s = Pc.get(i);
      s && !s.has(a) ? Yv && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : s || Pc.set(i, s = /* @__PURE__ */ new Set()), s.add(a), e.has(a) || (e.add(a), r.push(n));
    } else
      r.push(n);
  }), _(_({}, t), { definitions: r });
}
function Lk(t) {
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
function jk(t) {
  var e = Zv(t);
  if (!_s.has(e)) {
    var r = tE(t, {
      experimentalFragmentVariables: Vs,
      allowLegacyFragmentVariables: Vs
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    _s.set(e, Lk(Fk(r)));
  }
  return _s.get(e);
}
function fi(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  typeof t == "string" && (t = [t]);
  var n = t[0];
  return e.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += t[a + 1];
  }), jk(n);
}
function Vk() {
  _s.clear(), Pc.clear();
}
function $k() {
  Yv = !1;
}
function zk() {
  Vs = !0;
}
function qk() {
  Vs = !1;
}
var Mi = {
  gql: fi,
  resetCaches: Vk,
  disableFragmentWarnings: $k,
  enableExperimentalFragmentVariables: zk,
  disableExperimentalFragmentVariables: qk
};
(function(t) {
  t.gql = Mi.gql, t.resetCaches = Mi.resetCaches, t.disableFragmentWarnings = Mi.disableFragmentWarnings, t.enableExperimentalFragmentVariables = Mi.enableExperimentalFragmentVariables, t.disableExperimentalFragmentVariables = Mi.disableExperimentalFragmentVariables;
})(fi || (fi = {}));
fi.default = fi;
function Uk(t) {
  return new fr(function(e, r) {
    var n = Or(e, []);
    return new je(function(i) {
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
function Gv(t) {
  return new fr(function(e, r) {
    return new je(function(n) {
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
  tr(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.link = Gv(r), n;
  }
  return e.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, e;
})(fr);
var Jv = { exports: {} };
(function(t) {
  t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, H);
})(Jv);
var Qt = Jv.exports;
const Wk = /* @__PURE__ */ kp(Qt), Bk = /* @__PURE__ */ ng({
  __proto__: null,
  default: Wk
}, [Qt]);
var yh = _l ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function Hk() {
  oe("createContext" in Bk, 45);
  var t = Qt.createContext[yh];
  return t || (Object.defineProperty(Qt.createContext, yh, {
    value: t = Qt.createContext({}),
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), t.displayName = "ApolloContext"), t;
}
function Qk(t) {
  var e = Qt.useContext(Hk()), r = t || e.client;
  return oe(!!r, 49), r;
}
var wr;
(function(t) {
  t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription";
})(wr || (wr = {}));
var bn;
function gh(t) {
  var e;
  switch (t) {
    case wr.Query:
      e = "Query";
      break;
    case wr.Mutation:
      e = "Mutation";
      break;
    case wr.Subscription:
      e = "Subscription";
      break;
  }
  return e;
}
function Kv(t) {
  bn || (bn = new Tl(
    or.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var e = bn.get(t);
  if (e)
    return e;
  var r, n, i;
  oe(!!t && !!t.kind, 60, t);
  for (var a = [], s = [], o = [], u = [], c = 0, l = t.definitions; c < l.length; c++) {
    var f = l[c];
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
  oe(!a.length || s.length || o.length || u.length, 61), oe(
    s.length + o.length + u.length <= 1,
    62,
    t,
    s.length,
    u.length,
    o.length
  ), n = s.length ? wr.Query : wr.Mutation, !s.length && !o.length && (n = wr.Subscription);
  var d = s.length ? s : o.length ? o : u;
  oe(d.length === 1, 63, t, d.length);
  var h = d[0];
  r = h.variableDefinitions || [], h.name && h.name.kind === "Name" ? i = h.name.value : i = "data";
  var p = { name: i, type: n, variables: r };
  return bn.set(t, p), p;
}
Kv.resetCache = function() {
  bn = void 0;
};
globalThis.__DEV__ !== !1 && Sl("parser", function() {
  return bn ? bn.size : 0;
});
function Yk(t, e) {
  var r = Kv(t), n = gh(e), i = gh(r.type);
  oe(
    r.type === e,
    64,
    n,
    n,
    i
  );
}
function Zk(t, e) {
  var r = Qk(e == null ? void 0 : e.client);
  Yk(t, wr.Mutation);
  var n = Qt.useState({
    called: !1,
    loading: !1,
    client: r
  }), i = n[0], a = n[1], s = Qt.useRef({
    result: i,
    mutationId: 0,
    isMounted: !0,
    client: r,
    mutation: t,
    options: e
  });
  Object.assign(s.current, { client: r, options: e, mutation: t });
  var o = Qt.useCallback(function(c) {
    c === void 0 && (c = {});
    var l = s.current, f = l.options, d = l.mutation, h = _(_({}, f), { mutation: d }), p = c.client || s.current.client;
    !s.current.result.loading && !h.ignoreResults && s.current.isMounted && a(s.current.result = {
      loading: !0,
      error: void 0,
      data: void 0,
      called: !0,
      client: p
    });
    var v = ++s.current.mutationId, m = Es(h, c);
    return p.mutate(m).then(function(y) {
      var g, w, k = y.data, b = y.errors, S = b && b.length > 0 ? new dn({ graphQLErrors: b }) : void 0, D = c.onError || ((g = s.current.options) === null || g === void 0 ? void 0 : g.onError);
      if (S && D && D(S, m), v === s.current.mutationId && !m.ignoreResults) {
        var N = {
          called: !0,
          loading: !1,
          data: k,
          error: S,
          client: p
        };
        s.current.isMounted && !Be(s.current.result, N) && a(s.current.result = N);
      }
      var A = c.onCompleted || ((w = s.current.options) === null || w === void 0 ? void 0 : w.onCompleted);
      return S || A == null || A(y.data, m), y;
    }).catch(function(y) {
      var g;
      if (v === s.current.mutationId && s.current.isMounted) {
        var w = {
          loading: !1,
          error: y,
          data: void 0,
          called: !0,
          client: p
        };
        Be(s.current.result, w) || a(s.current.result = w);
      }
      var k = c.onError || ((g = s.current.options) === null || g === void 0 ? void 0 : g.onError);
      if (k)
        return k(y, m), { data: void 0, errors: y };
      throw y;
    });
  }, []), u = Qt.useCallback(function() {
    if (s.current.isMounted) {
      var c = { called: !1, loading: !1, client: r };
      Object.assign(s.current, { mutationId: 0, result: c }), a(c);
    }
  }, []);
  return Qt.useEffect(function() {
    return s.current.isMounted = !0, function() {
      s.current.isMounted = !1;
    };
  }, []), [o, _({ reset: u }, i)];
}
const Gk = new Uv();
async function Jk({ mode: t, accessToken: e, reauth: r }) {
  const n = t === "development" ? Ms.engageGraphqlDevEndpoint : Ms.engageGraphqlEndpoint, i = sk({ uri: n }), a = Uk((u, { headers: c }) => {
    const l = e ? `Accounts ${e}` : "";
    return {
      headers: {
        ...c,
        authorization: l
      }
    };
  }), s = Gv(({ networkError: u }) => {
    u && (console.error(u), u.statusCode === 401 && r());
  });
  return new Qv({
    link: fr.from([s, a, i]),
    cache: Gk
  });
}
const Xv = Dt({
  apolloClient: null
});
function Kk({ children: t, mode: e }) {
  const { isAuthenticated: r, accessToken: n, reauth: i } = ww();
  if (!r)
    return /* @__PURE__ */ G.jsx("h2", { children: "Not authenticated. Try refreshing the page." });
  const [a, s] = bt(null);
  return $e(() => {
    async function o() {
      s(await Jk({ mode: e, accessToken: n, reauth: i }));
    }
    o().catch(console.error);
  }, [e, n]), a ? /* @__PURE__ */ G.jsx(Xv.Provider, { value: { client: a }, children: t }) : /* @__PURE__ */ G.jsx("h2", { children: "Initializing..." });
}
function Xk() {
  const t = wt(Xv);
  if (!t)
    throw new Error("useEngage must be used within an EngageProvider");
  return t;
}
function e_(t, e = {}) {
  const { client: r } = Xk();
  return Zk(t, { ...e, client: r });
}
const ey = Dt({}), t_ = () => wt(ey);
function r_({ children: t, options: e = {} }) {
  return e.isProd = e.mode === "production", e.isDev = !e.isProd, /* @__PURE__ */ G.jsx(ey.Provider, { value: e, children: t });
}
function fS({ ownerId: t, senalysisBusinessId: e, children: r, mode: n = "production" }) {
  const i = {
    mode: n,
    senalysisBusinessId: e
  };
  return /* @__PURE__ */ G.jsx(r_, { options: i, children: /* @__PURE__ */ G.jsx(bw, { mode: n, ownerId: t, children: /* @__PURE__ */ G.jsxs(Kk, { mode: n, children: [
    r,
    /* @__PURE__ */ G.jsx(rc, {})
  ] }) }) });
}
var n_ = Object.defineProperty, i_ = (t, e, r) => e in t ? n_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tu = (t, e, r) => (i_(t, typeof e != "symbol" ? e + "" : e, r), r);
let a_ = class {
  constructor() {
    Tu(this, "current", this.detect()), Tu(this, "handoffState", "pending"), Tu(this, "currentId", 0);
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
}, Er = new a_(), er = (t, e) => {
  Er.isServer ? $e(t, e) : Zh(t, e);
};
function Kt(t) {
  let e = Ie(t);
  return er(() => {
    e.current = t;
  }, [t]), e;
}
let ze = function(t) {
  let e = Kt(t);
  return H.useCallback((...r) => e.current(...r), [e]);
};
function ty(t) {
  typeof queueMicrotask == "function" ? queueMicrotask(t) : Promise.resolve().then(t).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function Aa() {
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
    return ty(() => {
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
    let n = Aa();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return t.push(r), () => {
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
function ry() {
  let [t] = bt(Aa);
  return $e(() => () => t.dispose(), [t]), t;
}
function s_() {
  let t = typeof document > "u";
  return "useSyncExternalStore" in Wi ? ((e) => e.useSyncExternalStore)(Wi)(() => () => {
  }, () => !1, () => !t) : !1;
}
function Ao() {
  let t = s_(), [e, r] = Wi.useState(Er.isHandoffComplete);
  return e && Er.isHandoffComplete === !1 && r(!1), Wi.useEffect(() => {
    e !== !0 && r(!0);
  }, [e]), Wi.useEffect(() => Er.handoff(), []), t ? !1 : e;
}
var bh;
let ni = (bh = H.useId) != null ? bh : function() {
  let t = Ao(), [e, r] = H.useState(t ? () => Er.nextId() : null);
  return er(() => {
    e === null && r(Er.nextId());
  }, [e]), e != null ? "" + e : void 0;
};
function mt(t, e, ...r) {
  if (t in e) {
    let i = e[t];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, mt), n;
}
function ql(t) {
  return Er.isServer ? null : t instanceof Node ? t.ownerDocument : t != null && t.hasOwnProperty("current") && t.current instanceof Node ? t.current.ownerDocument : document;
}
let Mc = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var yr = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(yr || {}), $s = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))($s || {}), o_ = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(o_ || {});
function Do(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Mc)).sort((e, r) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ul = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(Ul || {});
function ny(t, e = 0) {
  var r;
  return t === ((r = ql(t)) == null ? void 0 : r.body) ? !1 : mt(e, { 0() {
    return t.matches(Mc);
  }, 1() {
    let n = t;
    for (; n !== null; ) {
      if (n.matches(Mc))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var u_ = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(u_ || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let c_ = ["textarea", "input"].join(",");
function l_(t) {
  var e, r;
  return (r = (e = t == null ? void 0 : t.matches) == null ? void 0 : e.call(t, c_)) != null ? r : !1;
}
function f_(t, e = (r) => r) {
  return t.slice().sort((r, n) => {
    let i = e(r), a = e(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function wn(t, e, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let a = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t.ownerDocument, s = Array.isArray(t) ? r ? f_(t) : t : Do(t);
  i.length > 0 && s.length > 1 && (s = s.filter((h) => !i.includes(h))), n = n ?? a.activeElement;
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
  })(), c = e & 32 ? { preventScroll: !0 } : {}, l = 0, f = s.length, d;
  do {
    if (l >= f || l + f <= 0)
      return 0;
    let h = u + l;
    if (e & 16)
      h = (h + f) % f;
    else {
      if (h < 0)
        return 3;
      if (h >= f)
        return 1;
    }
    d = s[h], d == null || d.focus(c), l += o;
  } while (d !== a.activeElement);
  return e & 6 && l_(d) && d.select(), 2;
}
function d_() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function h_() {
  return /Android/gi.test(window.navigator.userAgent);
}
function p_() {
  return d_() || h_();
}
function us(t, e, r) {
  let n = Kt(e);
  $e(() => {
    function i(a) {
      n.current(a);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [t, r]);
}
function iy(t, e, r) {
  let n = Kt(e);
  $e(() => {
    function i(a) {
      n.current(a);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [t, r]);
}
function m_(t, e, r = !0) {
  let n = Ie(!1);
  $e(() => {
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
    let c = function l(f) {
      return typeof f == "function" ? l(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let l of c) {
      if (l === null)
        continue;
      let f = l instanceof HTMLElement ? l : l.current;
      if (f != null && f.contains(u) || s.composed && s.composedPath().includes(f))
        return;
    }
    return !ny(u, Ul.Loose) && u.tabIndex !== -1 && s.preventDefault(), e(s, u);
  }
  let a = Ie(null);
  us("pointerdown", (s) => {
    var o, u;
    n.current && (a.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), us("mousedown", (s) => {
    var o, u;
    n.current && (a.current = ((u = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), us("click", (s) => {
    p_() || a.current && (i(s, () => a.current), a.current = null);
  }, !0), us("touchend", (s) => i(s, () => s.target instanceof HTMLElement ? s.target : null), !0), iy("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Si(...t) {
  return gt(() => ql(...t), [...t]);
}
function wh(t) {
  var e;
  if (t.type)
    return t.type;
  let r = (e = t.as) != null ? e : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function v_(t, e) {
  let [r, n] = bt(() => wh(t));
  return er(() => {
    n(wh(t));
  }, [t.type, t.as]), er(() => {
    r || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && n("button");
  }, [r, e]), r;
}
let ay = Symbol();
function sy(t, e = !0) {
  return Object.assign(t, { [ay]: e });
}
function cr(...t) {
  let e = Ie(t);
  $e(() => {
    e.current = t;
  }, [t]);
  let r = ze((n) => {
    for (let i of e.current)
      i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return t.every((n) => n == null || (n == null ? void 0 : n[ay])) ? void 0 : r;
}
function zs(...t) {
  return Array.from(new Set(t.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
var di = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(di || {}), Hr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(Hr || {});
function dr({ ourProps: t, theirProps: e, slot: r, defaultTag: n, features: i, visible: a = !0, name: s, mergeRefs: o }) {
  o = o ?? g_;
  let u = oy(e, t);
  if (a)
    return cs(u, r, n, s, o);
  let c = i ?? 0;
  if (c & 2) {
    let { static: l = !1, ...f } = u;
    if (l)
      return cs(f, r, n, s, o);
  }
  if (c & 1) {
    let { unmount: l = !0, ...f } = u;
    return mt(l ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return cs({ ...f, hidden: !0, style: { display: "none" } }, r, n, s, o);
    } });
  }
  return cs(u, r, n, s, o);
}
function cs(t, e = {}, r, n, i) {
  let { as: a = r, children: s, refName: o = "ref", ...u } = Su(t, ["unmount", "static"]), c = t.ref !== void 0 ? { [o]: t.ref } : {}, l = typeof s == "function" ? s(e) : s;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(e));
  let f = {};
  if (e) {
    let d = !1, h = [];
    for (let [p, v] of Object.entries(e))
      typeof v == "boolean" && (d = !0), v === !0 && h.push(p);
    d && (f["data-headlessui-state"] = h.join(" "));
  }
  if (a === xn && Object.keys(Eh(u)).length > 0) {
    if (!_n(l) || Array.isArray(l) && l.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let d = l.props, h = typeof (d == null ? void 0 : d.className) == "function" ? (...v) => zs(d == null ? void 0 : d.className(...v), u.className) : zs(d == null ? void 0 : d.className, u.className), p = h ? { className: h } : {};
    return Ss(l, Object.assign({}, oy(l.props, Eh(Su(u, ["ref"]))), f, c, { ref: i(l.ref, c.ref) }, p));
  }
  return tg(a, Object.assign({}, Su(u, ["ref"]), a !== xn && c, a !== xn && f), l);
}
function y_() {
  let t = Ie([]), e = mn((r) => {
    for (let n of t.current)
      n != null && (typeof n == "function" ? n(r) : n.current = r);
  }, []);
  return (...r) => {
    if (!r.every((n) => n == null))
      return t.current = r, e;
  };
}
function g_(...t) {
  return t.every((e) => e == null) ? void 0 : (e) => {
    for (let r of t)
      r != null && (typeof r == "function" ? r(e) : r.current = e);
  };
}
function oy(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let e = {}, r = {};
  for (let n of t)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : e[i] = n[i];
  if (e.disabled || e["aria-disabled"])
    return Object.assign(e, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
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
function rr(t) {
  var e;
  return Object.assign(oo(t), { displayName: (e = t.displayName) != null ? e : t.name });
}
function Eh(t) {
  let e = Object.assign({}, t);
  for (let r in e)
    e[r] === void 0 && delete e[r];
  return e;
}
function Su(t, e = []) {
  let r = Object.assign({}, t);
  for (let n of e)
    n in r && delete r[n];
  return r;
}
let b_ = "div";
var hi = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(hi || {});
function w_(t, e) {
  var r;
  let { features: n = 1, ...i } = t, a = { ref: e, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return dr({ ourProps: a, theirProps: i, slot: {}, defaultTag: b_, name: "Hidden" });
}
let va = rr(w_), Wl = Dt(null);
Wl.displayName = "OpenClosedContext";
var _t = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(_t || {});
function Ro() {
  return wt(Wl);
}
function uy({ value: t, children: e }) {
  return H.createElement(Wl.Provider, { value: t }, e);
}
function cy(t) {
  let e = t.parentElement, r = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (r = e), e = e.parentElement;
  let n = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return n && E_(r) ? !1 : n;
}
function E_(t) {
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
var Ur = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Ur || {});
function x_(t, e, r, n) {
  let i = Kt(r);
  $e(() => {
    t = t ?? window;
    function a(s) {
      i.current(s);
    }
    return t.addEventListener(e, a, n), () => t.removeEventListener(e, a, n);
  }, [t, e, n]);
}
function Bl() {
  let t = Ie(!1);
  return er(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function k_(t) {
  let e = ze(t), r = Ie(!1);
  $e(() => (r.current = !1, () => {
    r.current = !0, ty(() => {
      r.current && e();
    });
  }), [e]);
}
var gr = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(gr || {});
function ly() {
  let t = Ie(0);
  return iy("keydown", (e) => {
    e.key === "Tab" && (t.current = e.shiftKey ? 1 : 0);
  }, !0), t;
}
let __ = Dt(!1);
function T_() {
  return wt(__);
}
function S_(t) {
  let e = T_(), r = wt(fy), n = Si(t), [i, a] = bt(() => {
    if (!e && r !== null || Er.isServer)
      return null;
    let s = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (n === null)
      return null;
    let o = n.createElement("div");
    return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
  });
  return $e(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), $e(() => {
    e || r !== null && a(r.current);
  }, [r, a, e]), i;
}
let O_ = xn;
function I_(t, e) {
  let r = t, n = Ie(null), i = cr(sy((l) => {
    n.current = l;
  }), e), a = Si(n), s = S_(n), [o] = bt(() => {
    var l;
    return Er.isServer ? null : (l = a == null ? void 0 : a.createElement("div")) != null ? l : null;
  }), u = wt(Fc), c = Ao();
  return er(() => {
    !s || !o || s.contains(o) || (o.setAttribute("data-headlessui-portal", ""), s.appendChild(o));
  }, [s, o]), er(() => {
    if (o && u)
      return u.register(o);
  }, [u, o]), k_(() => {
    var l;
    !s || !o || (o instanceof Node && s.contains(o) && s.removeChild(o), s.childNodes.length <= 0 && ((l = s.parentElement) == null || l.removeChild(s)));
  }), c ? !s || !o ? null : rg(dr({ ourProps: { ref: i }, theirProps: r, defaultTag: O_, name: "Portal" }), o) : null;
}
let C_ = xn, fy = Dt(null);
function N_(t, e) {
  let { target: r, ...n } = t, i = { ref: cr(e) };
  return H.createElement(fy.Provider, { value: r }, dr({ ourProps: i, theirProps: n, defaultTag: C_, name: "Popover.Group" }));
}
let Fc = Dt(null);
function A_() {
  let t = wt(Fc), e = Ie([]), r = ze((a) => (e.current.push(a), t && t.register(a), () => n(a))), n = ze((a) => {
    let s = e.current.indexOf(a);
    s !== -1 && e.current.splice(s, 1), t && t.unregister(a);
  }), i = gt(() => ({ register: r, unregister: n, portals: e }), [r, n, e]);
  return [e, gt(() => function({ children: a }) {
    return H.createElement(Fc.Provider, { value: i }, a);
  }, [i])];
}
let D_ = rr(I_), R_ = rr(N_);
Object.assign(D_, { Group: R_ });
function P_({ defaultContainers: t = [], portals: e, mainTreeNodeRef: r } = {}) {
  var n;
  let i = Ie((n = r == null ? void 0 : r.current) != null ? n : null), a = Si(i), s = ze(() => {
    var o, u, c;
    let l = [];
    for (let f of t)
      f !== null && (f instanceof HTMLElement ? l.push(f) : "current" in f && f.current instanceof HTMLElement && l.push(f.current));
    if (e != null && e.current)
      for (let f of e.current)
        l.push(f);
    for (let f of (o = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? o : [])
      f !== document.body && f !== document.head && f instanceof HTMLElement && f.id !== "headlessui-portal-root" && (f.contains(i.current) || f.contains((c = (u = i.current) == null ? void 0 : u.getRootNode()) == null ? void 0 : c.host) || l.some((d) => f.contains(d)) || l.push(f));
    return l;
  });
  return { resolveContainers: s, contains: ze((o) => s().some((u) => u.contains(o))), mainTreeNodeRef: i, MainTreeNode: gt(() => function() {
    return r != null ? null : H.createElement(va, { features: hi.Hidden, ref: i });
  }, [i, r]) };
}
function M_() {
  let t = Ie(null);
  return { mainTreeNodeRef: t, MainTreeNode: gt(() => function() {
    return H.createElement(va, { features: hi.Hidden, ref: t });
  }, [t]) };
}
var F_ = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(F_ || {}), L_ = ((t) => (t[t.TogglePopover = 0] = "TogglePopover", t[t.ClosePopover = 1] = "ClosePopover", t[t.SetButton = 2] = "SetButton", t[t.SetButtonId = 3] = "SetButtonId", t[t.SetPanel = 4] = "SetPanel", t[t.SetPanelId = 5] = "SetPanelId", t))(L_ || {});
let j_ = { 0: (t) => {
  let e = { ...t, popoverState: mt(t.popoverState, { 0: 1, 1: 0 }) };
  return e.popoverState === 0 && (e.__demoMode = !1), e;
}, 1(t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1 };
}, 2(t, e) {
  return t.button === e.button ? t : { ...t, button: e.button };
}, 3(t, e) {
  return t.buttonId === e.buttonId ? t : { ...t, buttonId: e.buttonId };
}, 4(t, e) {
  return t.panel === e.panel ? t : { ...t, panel: e.panel };
}, 5(t, e) {
  return t.panelId === e.panelId ? t : { ...t, panelId: e.panelId };
} }, Hl = Dt(null);
Hl.displayName = "PopoverContext";
function Po(t) {
  let e = wt(Hl);
  if (e === null) {
    let r = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Po), r;
  }
  return e;
}
let Ql = Dt(null);
Ql.displayName = "PopoverAPIContext";
function Yl(t) {
  let e = wt(Ql);
  if (e === null) {
    let r = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Yl), r;
  }
  return e;
}
let Zl = Dt(null);
Zl.displayName = "PopoverGroupContext";
function dy() {
  return wt(Zl);
}
let Mo = Dt(null);
Mo.displayName = "PopoverPanelContext";
function V_() {
  return wt(Mo);
}
function $_(t, e) {
  return mt(e.type, j_, t, e);
}
let z_ = "div";
function q_(t, e) {
  var r;
  let { __demoMode: n = !1, ...i } = t, a = Ie(null), s = cr(e, sy((W) => {
    a.current = W;
  })), o = Ie([]), u = Yh($_, { __demoMode: n, popoverState: n ? 0 : 1, buttons: o, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: ff(), afterPanelSentinel: ff() }), [{ popoverState: c, button: l, buttonId: f, panel: d, panelId: h, beforePanelSentinel: p, afterPanelSentinel: v }, m] = u, y = Si((r = a.current) != null ? r : l), g = gt(() => {
    if (!l || !d)
      return !1;
    for (let re of document.querySelectorAll("body > *"))
      if (Number(re == null ? void 0 : re.contains(l)) ^ Number(re == null ? void 0 : re.contains(d)))
        return !0;
    let W = Do(), ue = W.indexOf(l), Re = (ue + W.length - 1) % W.length, Ee = (ue + 1) % W.length, C = W[Re], q = W[Ee];
    return !d.contains(C) && !d.contains(q);
  }, [l, d]), w = Kt(f), k = Kt(h), b = gt(() => ({ buttonId: w, panelId: k, close: () => m({ type: 1 }) }), [w, k, m]), S = dy(), D = S == null ? void 0 : S.registerPopover, N = ze(() => {
    var W;
    return (W = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? W : (y == null ? void 0 : y.activeElement) && ((l == null ? void 0 : l.contains(y.activeElement)) || (d == null ? void 0 : d.contains(y.activeElement)));
  });
  $e(() => D == null ? void 0 : D(b), [D, b]);
  let [A, F] = A_(), j = P_({ mainTreeNodeRef: S == null ? void 0 : S.mainTreeNodeRef, portals: A, defaultContainers: [l, d] });
  x_(y == null ? void 0 : y.defaultView, "focus", (W) => {
    var ue, Re, Ee, C;
    W.target !== window && W.target instanceof HTMLElement && c === 0 && (N() || l && d && (j.contains(W.target) || (Re = (ue = p.current) == null ? void 0 : ue.contains) != null && Re.call(ue, W.target) || (C = (Ee = v.current) == null ? void 0 : Ee.contains) != null && C.call(Ee, W.target) || m({ type: 1 })));
  }, !0), m_(j.resolveContainers, (W, ue) => {
    m({ type: 1 }), ny(ue, Ul.Loose) || (W.preventDefault(), l == null || l.focus());
  }, c === 0);
  let P = ze((W) => {
    m({ type: 1 });
    let ue = W ? W instanceof HTMLElement ? W : "current" in W && W.current instanceof HTMLElement ? W.current : l : l;
    ue == null || ue.focus();
  }), M = gt(() => ({ close: P, isPortalled: g }), [P, g]), z = gt(() => ({ open: c === 0, close: P }), [c, P]), le = { ref: s };
  return H.createElement(Mo.Provider, { value: null }, H.createElement(Hl.Provider, { value: u }, H.createElement(Ql.Provider, { value: M }, H.createElement(uy, { value: mt(c, { 0: _t.Open, 1: _t.Closed }) }, H.createElement(F, null, dr({ ourProps: le, theirProps: i, slot: z, defaultTag: z_, name: "Popover" }), H.createElement(j.MainTreeNode, null))))));
}
let U_ = "button";
function W_(t, e) {
  let r = ni(), { id: n = `headlessui-popover-button-${r}`, ...i } = t, [a, s] = Po("Popover.Button"), { isPortalled: o } = Yl("Popover.Button"), u = Ie(null), c = `headlessui-focus-sentinel-${ni()}`, l = dy(), f = l == null ? void 0 : l.closeOthers, d = V_() !== null;
  $e(() => {
    if (!d)
      return s({ type: 3, buttonId: n }), () => {
        s({ type: 3, buttonId: null });
      };
  }, [d, n, s]);
  let [h] = bt(() => Symbol()), p = cr(u, e, d ? null : (j) => {
    if (j)
      a.buttons.current.push(h);
    else {
      let P = a.buttons.current.indexOf(h);
      P !== -1 && a.buttons.current.splice(P, 1);
    }
    a.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), j && s({ type: 2, button: j });
  }), v = cr(u, e), m = Si(u), y = ze((j) => {
    var P, M, z;
    if (d) {
      if (a.popoverState === 1)
        return;
      switch (j.key) {
        case Ur.Space:
        case Ur.Enter:
          j.preventDefault(), (M = (P = j.target).click) == null || M.call(P), s({ type: 1 }), (z = a.button) == null || z.focus();
          break;
      }
    } else
      switch (j.key) {
        case Ur.Space:
        case Ur.Enter:
          j.preventDefault(), j.stopPropagation(), a.popoverState === 1 && (f == null || f(a.buttonId)), s({ type: 0 });
          break;
        case Ur.Escape:
          if (a.popoverState !== 0)
            return f == null ? void 0 : f(a.buttonId);
          if (!u.current || m != null && m.activeElement && !u.current.contains(m.activeElement))
            return;
          j.preventDefault(), j.stopPropagation(), s({ type: 1 });
          break;
      }
  }), g = ze((j) => {
    d || j.key === Ur.Space && j.preventDefault();
  }), w = ze((j) => {
    var P, M;
    cy(j.currentTarget) || t.disabled || (d ? (s({ type: 1 }), (P = a.button) == null || P.focus()) : (j.preventDefault(), j.stopPropagation(), a.popoverState === 1 && (f == null || f(a.buttonId)), s({ type: 0 }), (M = a.button) == null || M.focus()));
  }), k = ze((j) => {
    j.preventDefault(), j.stopPropagation();
  }), b = a.popoverState === 0, S = gt(() => ({ open: b }), [b]), D = v_(t, u), N = d ? { ref: v, type: D, onKeyDown: y, onClick: w } : { ref: p, id: a.buttonId, type: D, "aria-expanded": a.popoverState === 0, "aria-controls": a.panel ? a.panelId : void 0, onKeyDown: y, onKeyUp: g, onClick: w, onMouseDown: k }, A = ly(), F = ze(() => {
    let j = a.panel;
    if (!j)
      return;
    function P() {
      mt(A.current, { [gr.Forwards]: () => wn(j, yr.First), [gr.Backwards]: () => wn(j, yr.Last) }) === $s.Error && wn(Do().filter((M) => M.dataset.headlessuiFocusGuard !== "true"), mt(A.current, { [gr.Forwards]: yr.Next, [gr.Backwards]: yr.Previous }), { relativeTo: a.button });
    }
    P();
  });
  return H.createElement(H.Fragment, null, dr({ ourProps: N, theirProps: i, slot: S, defaultTag: U_, name: "Popover.Button" }), b && !d && o && H.createElement(va, { id: c, features: hi.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: F }));
}
let B_ = "div", H_ = di.RenderStrategy | di.Static;
function Q_(t, e) {
  let r = ni(), { id: n = `headlessui-popover-overlay-${r}`, ...i } = t, [{ popoverState: a }, s] = Po("Popover.Overlay"), o = cr(e), u = Ro(), c = u !== null ? (u & _t.Open) === _t.Open : a === 0, l = ze((d) => {
    if (cy(d.currentTarget))
      return d.preventDefault();
    s({ type: 1 });
  }), f = gt(() => ({ open: a === 0 }), [a]);
  return dr({ ourProps: { ref: o, id: n, "aria-hidden": !0, onClick: l }, theirProps: i, slot: f, defaultTag: B_, features: H_, visible: c, name: "Popover.Overlay" });
}
let Y_ = "div", Z_ = di.RenderStrategy | di.Static;
function G_(t, e) {
  let r = ni(), { id: n = `headlessui-popover-panel-${r}`, focus: i = !1, ...a } = t, [s, o] = Po("Popover.Panel"), { close: u, isPortalled: c } = Yl("Popover.Panel"), l = `headlessui-focus-sentinel-before-${ni()}`, f = `headlessui-focus-sentinel-after-${ni()}`, d = Ie(null), h = cr(d, e, (N) => {
    o({ type: 4, panel: N });
  }), p = Si(d), v = y_();
  er(() => (o({ type: 5, panelId: n }), () => {
    o({ type: 5, panelId: null });
  }), [n, o]);
  let m = Ro(), y = m !== null ? (m & _t.Open) === _t.Open : s.popoverState === 0, g = ze((N) => {
    var A;
    switch (N.key) {
      case Ur.Escape:
        if (s.popoverState !== 0 || !d.current || p != null && p.activeElement && !d.current.contains(p.activeElement))
          return;
        N.preventDefault(), N.stopPropagation(), o({ type: 1 }), (A = s.button) == null || A.focus();
        break;
    }
  });
  $e(() => {
    var N;
    t.static || s.popoverState === 1 && ((N = t.unmount) == null || N) && o({ type: 4, panel: null });
  }, [s.popoverState, t.unmount, t.static, o]), $e(() => {
    if (s.__demoMode || !i || s.popoverState !== 0 || !d.current)
      return;
    let N = p == null ? void 0 : p.activeElement;
    d.current.contains(N) || wn(d.current, yr.First);
  }, [s.__demoMode, i, d, s.popoverState]);
  let w = gt(() => ({ open: s.popoverState === 0, close: u }), [s, u]), k = { ref: h, id: n, onKeyDown: g, onBlur: i && s.popoverState === 0 ? (N) => {
    var A, F, j, P, M;
    let z = N.relatedTarget;
    z && d.current && ((A = d.current) != null && A.contains(z) || (o({ type: 1 }), ((j = (F = s.beforePanelSentinel.current) == null ? void 0 : F.contains) != null && j.call(F, z) || (M = (P = s.afterPanelSentinel.current) == null ? void 0 : P.contains) != null && M.call(P, z)) && z.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1 }, b = ly(), S = ze(() => {
    let N = d.current;
    if (!N)
      return;
    function A() {
      mt(b.current, { [gr.Forwards]: () => {
        var F;
        wn(N, yr.First) === $s.Error && ((F = s.afterPanelSentinel.current) == null || F.focus());
      }, [gr.Backwards]: () => {
        var F;
        (F = s.button) == null || F.focus({ preventScroll: !0 });
      } });
    }
    A();
  }), D = ze(() => {
    let N = d.current;
    if (!N)
      return;
    function A() {
      mt(b.current, { [gr.Forwards]: () => {
        var F;
        if (!s.button)
          return;
        let j = Do(), P = j.indexOf(s.button), M = j.slice(0, P + 1), z = [...j.slice(P + 1), ...M];
        for (let le of z.slice())
          if (le.dataset.headlessuiFocusGuard === "true" || (F = s.panel) != null && F.contains(le)) {
            let W = z.indexOf(le);
            W !== -1 && z.splice(W, 1);
          }
        wn(z, yr.First, { sorted: !1 });
      }, [gr.Backwards]: () => {
        var F;
        wn(N, yr.Previous) === $s.Error && ((F = s.button) == null || F.focus());
      } });
    }
    A();
  });
  return H.createElement(Mo.Provider, { value: n }, y && c && H.createElement(va, { id: l, ref: s.beforePanelSentinel, features: hi.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: S }), dr({ mergeRefs: v, ourProps: k, theirProps: a, slot: w, defaultTag: Y_, features: Z_, visible: y, name: "Popover.Panel" }), y && c && H.createElement(va, { id: f, ref: s.afterPanelSentinel, features: hi.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: D }));
}
let J_ = "div";
function K_(t, e) {
  let r = Ie(null), n = cr(r, e), [i, a] = bt([]), s = M_(), o = ze((v) => {
    a((m) => {
      let y = m.indexOf(v);
      if (y !== -1) {
        let g = m.slice();
        return g.splice(y, 1), g;
      }
      return m;
    });
  }), u = ze((v) => (a((m) => [...m, v]), () => o(v))), c = ze(() => {
    var v;
    let m = ql(r);
    if (!m)
      return !1;
    let y = m.activeElement;
    return (v = r.current) != null && v.contains(y) ? !0 : i.some((g) => {
      var w, k;
      return ((w = m.getElementById(g.buttonId.current)) == null ? void 0 : w.contains(y)) || ((k = m.getElementById(g.panelId.current)) == null ? void 0 : k.contains(y));
    });
  }), l = ze((v) => {
    for (let m of i)
      m.buttonId.current !== v && m.close();
  }), f = gt(() => ({ registerPopover: u, unregisterPopover: o, isFocusWithinPopoverGroup: c, closeOthers: l, mainTreeNodeRef: s.mainTreeNodeRef }), [u, o, c, l, s.mainTreeNodeRef]), d = gt(() => ({}), []), h = t, p = { ref: n };
  return H.createElement(Zl.Provider, { value: f }, dr({ ourProps: p, theirProps: h, slot: d, defaultTag: J_, name: "Popover.Group" }), H.createElement(s.MainTreeNode, null));
}
let X_ = rr(q_), e2 = rr(W_), t2 = rr(Q_), r2 = rr(G_), n2 = rr(K_), Ou = Object.assign(X_, { Button: e2, Overlay: t2, Panel: r2, Group: n2 });
function i2(t = 0) {
  let [e, r] = bt(t), n = Bl(), i = mn((u) => {
    n.current && r((c) => c | u);
  }, [e, n]), a = mn((u) => !!(e & u), [e]), s = mn((u) => {
    n.current && r((c) => c & ~u);
  }, [r, n]), o = mn((u) => {
    n.current && r((c) => c ^ u);
  }, [r]);
  return { flags: e, addFlag: i, hasFlag: a, removeFlag: s, toggleFlag: o };
}
function a2(t) {
  let e = { called: !1 };
  return (...r) => {
    if (!e.called)
      return e.called = !0, t(...r);
  };
}
function Iu(t, ...e) {
  t && e.length > 0 && t.classList.add(...e);
}
function Cu(t, ...e) {
  t && e.length > 0 && t.classList.remove(...e);
}
function s2(t, e) {
  let r = Aa();
  if (!t)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(t), [a, s] = [n, i].map((u) => {
    let [c = 0] = u.split(",").filter(Boolean).map((l) => l.includes("ms") ? parseFloat(l) : parseFloat(l) * 1e3).sort((l, f) => f - l);
    return c;
  }), o = a + s;
  if (o !== 0) {
    r.group((c) => {
      c.setTimeout(() => {
        e(), c.dispose();
      }, o), c.addEventListener(t, "transitionrun", (l) => {
        l.target === l.currentTarget && c.dispose();
      });
    });
    let u = r.addEventListener(t, "transitionend", (c) => {
      c.target === c.currentTarget && (e(), u());
    });
  } else
    e();
  return r.add(() => e()), r.dispose;
}
function o2(t, e, r, n) {
  let i = r ? "enter" : "leave", a = Aa(), s = n !== void 0 ? a2(n) : () => {
  };
  i === "enter" && (t.removeAttribute("hidden"), t.style.display = "");
  let o = mt(i, { enter: () => e.enter, leave: () => e.leave }), u = mt(i, { enter: () => e.enterTo, leave: () => e.leaveTo }), c = mt(i, { enter: () => e.enterFrom, leave: () => e.leaveFrom });
  return Cu(t, ...e.base, ...e.enter, ...e.enterTo, ...e.enterFrom, ...e.leave, ...e.leaveFrom, ...e.leaveTo, ...e.entered), Iu(t, ...e.base, ...o, ...c), a.nextFrame(() => {
    Cu(t, ...e.base, ...o, ...c), Iu(t, ...e.base, ...o, ...u), s2(t, () => (Cu(t, ...e.base, ...o), Iu(t, ...e.base, ...e.entered), s()));
  }), a.dispose;
}
function u2({ immediate: t, container: e, direction: r, classes: n, onStart: i, onStop: a }) {
  let s = Bl(), o = ry(), u = Kt(r);
  er(() => {
    t && (u.current = "enter");
  }, [t]), er(() => {
    let c = Aa();
    o.add(c.dispose);
    let l = e.current;
    if (l && u.current !== "idle" && s.current)
      return c.dispose(), i.current(u.current), c.add(o2(l, n.current, u.current === "enter", () => {
        c.dispose(), a.current(u.current);
      })), c.dispose;
  }, [r]);
}
function Lr(t = "") {
  return t.split(/\s+/).filter((e) => e.length > 1);
}
let Fo = Dt(null);
Fo.displayName = "TransitionContext";
var c2 = ((t) => (t.Visible = "visible", t.Hidden = "hidden", t))(c2 || {});
function l2() {
  let t = wt(Fo);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
function f2() {
  let t = wt(Lo);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
let Lo = Dt(null);
Lo.displayName = "NestingContext";
function jo(t) {
  return "children" in t ? jo(t.children) : t.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function hy(t, e) {
  let r = Kt(t), n = Ie([]), i = Bl(), a = ry(), s = ze((h, p = Hr.Hidden) => {
    let v = n.current.findIndex(({ el: m }) => m === h);
    v !== -1 && (mt(p, { [Hr.Unmount]() {
      n.current.splice(v, 1);
    }, [Hr.Hidden]() {
      n.current[v].state = "hidden";
    } }), a.microTask(() => {
      var m;
      !jo(n) && i.current && ((m = r.current) == null || m.call(r));
    }));
  }), o = ze((h) => {
    let p = n.current.find(({ el: v }) => v === h);
    return p ? p.state !== "visible" && (p.state = "visible") : n.current.push({ el: h, state: "visible" }), () => s(h, Hr.Unmount);
  }), u = Ie([]), c = Ie(Promise.resolve()), l = Ie({ enter: [], leave: [], idle: [] }), f = ze((h, p, v) => {
    u.current.splice(0), e && (e.chains.current[p] = e.chains.current[p].filter(([m]) => m !== h)), e == null || e.chains.current[p].push([h, new Promise((m) => {
      u.current.push(m);
    })]), e == null || e.chains.current[p].push([h, new Promise((m) => {
      Promise.all(l.current[p].map(([y, g]) => g)).then(() => m());
    })]), p === "enter" ? c.current = c.current.then(() => e == null ? void 0 : e.wait.current).then(() => v(p)) : v(p);
  }), d = ze((h, p, v) => {
    Promise.all(l.current[p].splice(0).map(([m, y]) => y)).then(() => {
      var m;
      (m = u.current.shift()) == null || m();
    }).then(() => v(p));
  });
  return gt(() => ({ children: n, register: o, unregister: s, onStart: f, onStop: d, wait: c, chains: l }), [o, s, n, f, d, l, c]);
}
function d2() {
}
let h2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function xh(t) {
  var e;
  let r = {};
  for (let n of h2)
    r[n] = (e = t[n]) != null ? e : d2;
  return r;
}
function p2(t) {
  let e = Ie(xh(t));
  return $e(() => {
    e.current = xh(t);
  }, [t]), e;
}
let m2 = "div", py = di.RenderStrategy;
function v2(t, e) {
  var r, n;
  let { beforeEnter: i, afterEnter: a, beforeLeave: s, afterLeave: o, enter: u, enterFrom: c, enterTo: l, entered: f, leave: d, leaveFrom: h, leaveTo: p, ...v } = t, m = Ie(null), y = cr(m, e), g = (r = v.unmount) == null || r ? Hr.Unmount : Hr.Hidden, { show: w, appear: k, initial: b } = l2(), [S, D] = bt(w ? "visible" : "hidden"), N = f2(), { register: A, unregister: F } = N;
  $e(() => A(m), [A, m]), $e(() => {
    if (g === Hr.Hidden && m.current) {
      if (w && S !== "visible") {
        D("visible");
        return;
      }
      return mt(S, { hidden: () => F(m), visible: () => A(m) });
    }
  }, [S, m, A, F, w, g]);
  let j = Kt({ base: Lr(v.className), enter: Lr(u), enterFrom: Lr(c), enterTo: Lr(l), entered: Lr(f), leave: Lr(d), leaveFrom: Lr(h), leaveTo: Lr(p) }), P = p2({ beforeEnter: i, afterEnter: a, beforeLeave: s, afterLeave: o }), M = Ao();
  $e(() => {
    if (M && S === "visible" && m.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [m, S, M]);
  let z = b && !k, le = k && w && b, W = !M || z ? "idle" : w ? "enter" : "leave", ue = i2(0), Re = ze((ie) => mt(ie, { enter: () => {
    ue.addFlag(_t.Opening), P.current.beforeEnter();
  }, leave: () => {
    ue.addFlag(_t.Closing), P.current.beforeLeave();
  }, idle: () => {
  } })), Ee = ze((ie) => mt(ie, { enter: () => {
    ue.removeFlag(_t.Opening), P.current.afterEnter();
  }, leave: () => {
    ue.removeFlag(_t.Closing), P.current.afterLeave();
  }, idle: () => {
  } })), C = hy(() => {
    D("hidden"), F(m);
  }, N), q = Ie(!1);
  u2({ immediate: le, container: m, classes: j, direction: W, onStart: Kt((ie) => {
    q.current = !0, C.onStart(m, ie, Re);
  }), onStop: Kt((ie) => {
    q.current = !1, C.onStop(m, ie, Ee), ie === "leave" && !jo(C) && (D("hidden"), F(m));
  }) });
  let re = v, fe = { ref: y };
  return le ? re = { ...re, className: zs(v.className, ...j.current.enter, ...j.current.enterFrom) } : q.current && (re.className = zs(v.className, (n = m.current) == null ? void 0 : n.className), re.className === "" && delete re.className), H.createElement(Lo.Provider, { value: C }, H.createElement(uy, { value: mt(S, { visible: _t.Open, hidden: _t.Closed }) | ue.flags }, dr({ ourProps: fe, theirProps: re, defaultTag: m2, features: py, visible: S === "visible", name: "Transition.Child" })));
}
function y2(t, e) {
  let { show: r, appear: n = !1, unmount: i = !0, ...a } = t, s = Ie(null), o = cr(s, e);
  Ao();
  let u = Ro();
  if (r === void 0 && u !== null && (r = (u & _t.Open) === _t.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, l] = bt(r ? "visible" : "hidden"), f = hy(() => {
    l("hidden");
  }), [d, h] = bt(!0), p = Ie([r]);
  er(() => {
    d !== !1 && p.current[p.current.length - 1] !== r && (p.current.push(r), h(!1));
  }, [p, r]);
  let v = gt(() => ({ show: r, appear: n, initial: d }), [r, n, d]);
  $e(() => {
    if (r)
      l("visible");
    else if (!jo(f))
      l("hidden");
    else {
      let w = s.current;
      if (!w)
        return;
      let k = w.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && l("hidden");
    }
  }, [r, f]);
  let m = { unmount: i }, y = ze(() => {
    var w;
    d && h(!1), (w = t.beforeEnter) == null || w.call(t);
  }), g = ze(() => {
    var w;
    d && h(!1), (w = t.beforeLeave) == null || w.call(t);
  });
  return H.createElement(Lo.Provider, { value: f }, H.createElement(Fo.Provider, { value: v }, dr({ ourProps: { ...m, as: xn, children: H.createElement(my, { ref: o, ...m, ...a, beforeEnter: y, beforeLeave: g }) }, theirProps: {}, defaultTag: xn, features: py, visible: c === "visible", name: "Transition" })));
}
function g2(t, e) {
  let r = wt(Fo) !== null, n = Ro() !== null;
  return H.createElement(H.Fragment, null, !r && n ? H.createElement(Lc, { ref: e, ...t }) : H.createElement(my, { ref: e, ...t }));
}
let Lc = rr(y2), my = rr(v2), b2 = rr(g2), w2 = Object.assign(Lc, { Child: b2, Root: Lc });
var jc = { exports: {} }, ls = { exports: {} }, Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kh;
function E2() {
  if (kh)
    return Fe;
  kh = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, m = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, g = t ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
        case e:
          switch (b = b.type, b) {
            case u:
            case c:
            case n:
            case a:
            case i:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case o:
                case l:
                case p:
                case h:
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
  function k(b) {
    return w(b) === c;
  }
  return Fe.AsyncMode = u, Fe.ConcurrentMode = c, Fe.ContextConsumer = o, Fe.ContextProvider = s, Fe.Element = e, Fe.ForwardRef = l, Fe.Fragment = n, Fe.Lazy = p, Fe.Memo = h, Fe.Portal = r, Fe.Profiler = a, Fe.StrictMode = i, Fe.Suspense = f, Fe.isAsyncMode = function(b) {
    return k(b) || w(b) === u;
  }, Fe.isConcurrentMode = k, Fe.isContextConsumer = function(b) {
    return w(b) === o;
  }, Fe.isContextProvider = function(b) {
    return w(b) === s;
  }, Fe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Fe.isForwardRef = function(b) {
    return w(b) === l;
  }, Fe.isFragment = function(b) {
    return w(b) === n;
  }, Fe.isLazy = function(b) {
    return w(b) === p;
  }, Fe.isMemo = function(b) {
    return w(b) === h;
  }, Fe.isPortal = function(b) {
    return w(b) === r;
  }, Fe.isProfiler = function(b) {
    return w(b) === a;
  }, Fe.isStrictMode = function(b) {
    return w(b) === i;
  }, Fe.isSuspense = function(b) {
    return w(b) === f;
  }, Fe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === c || b === a || b === i || b === f || b === d || typeof b == "object" && b !== null && (b.$$typeof === p || b.$$typeof === h || b.$$typeof === s || b.$$typeof === o || b.$$typeof === l || b.$$typeof === m || b.$$typeof === y || b.$$typeof === g || b.$$typeof === v);
  }, Fe.typeOf = w, Fe;
}
var Le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function x2() {
  return _h || (_h = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, m = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, g = t ? Symbol.for("react.scope") : 60119;
    function w(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === n || B === c || B === a || B === i || B === f || B === d || typeof B == "object" && B !== null && (B.$$typeof === p || B.$$typeof === h || B.$$typeof === s || B.$$typeof === o || B.$$typeof === l || B.$$typeof === m || B.$$typeof === y || B.$$typeof === g || B.$$typeof === v);
    }
    function k(B) {
      if (typeof B == "object" && B !== null) {
        var Et = B.$$typeof;
        switch (Et) {
          case e:
            var hr = B.type;
            switch (hr) {
              case u:
              case c:
              case n:
              case a:
              case i:
              case f:
                return hr;
              default:
                var Dr = hr && hr.$$typeof;
                switch (Dr) {
                  case o:
                  case l:
                  case p:
                  case h:
                  case s:
                    return Dr;
                  default:
                    return Et;
                }
            }
          case r:
            return Et;
        }
      }
    }
    var b = u, S = c, D = o, N = s, A = e, F = l, j = n, P = p, M = h, z = r, le = a, W = i, ue = f, Re = !1;
    function Ee(B) {
      return Re || (Re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(B) || k(B) === u;
    }
    function C(B) {
      return k(B) === c;
    }
    function q(B) {
      return k(B) === o;
    }
    function re(B) {
      return k(B) === s;
    }
    function fe(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function ie(B) {
      return k(B) === l;
    }
    function _e(B) {
      return k(B) === n;
    }
    function pe(B) {
      return k(B) === p;
    }
    function ve(B) {
      return k(B) === h;
    }
    function be(B) {
      return k(B) === r;
    }
    function Te(B) {
      return k(B) === a;
    }
    function we(B) {
      return k(B) === i;
    }
    function ut(B) {
      return k(B) === f;
    }
    Le.AsyncMode = b, Le.ConcurrentMode = S, Le.ContextConsumer = D, Le.ContextProvider = N, Le.Element = A, Le.ForwardRef = F, Le.Fragment = j, Le.Lazy = P, Le.Memo = M, Le.Portal = z, Le.Profiler = le, Le.StrictMode = W, Le.Suspense = ue, Le.isAsyncMode = Ee, Le.isConcurrentMode = C, Le.isContextConsumer = q, Le.isContextProvider = re, Le.isElement = fe, Le.isForwardRef = ie, Le.isFragment = _e, Le.isLazy = pe, Le.isMemo = ve, Le.isPortal = be, Le.isProfiler = Te, Le.isStrictMode = we, Le.isSuspense = ut, Le.isValidElementType = w, Le.typeOf = k;
  }()), Le;
}
var Th;
function vy() {
  return Th || (Th = 1, process.env.NODE_ENV === "production" ? ls.exports = E2() : ls.exports = x2()), ls.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Nu, Sh;
function k2() {
  if (Sh)
    return Nu;
  Sh = 1;
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
      var u = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Nu = i() ? Object.assign : function(a, s) {
    for (var o, u = n(a), c, l = 1; l < arguments.length; l++) {
      o = Object(arguments[l]);
      for (var f in o)
        e.call(o, f) && (u[f] = o[f]);
      if (t) {
        c = t(o);
        for (var d = 0; d < c.length; d++)
          r.call(o, c[d]) && (u[c[d]] = o[c[d]]);
      }
    }
    return u;
  }, Nu;
}
var Au, Oh;
function Gl() {
  if (Oh)
    return Au;
  Oh = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Au = t, Au;
}
var Du, Ih;
function yy() {
  return Ih || (Ih = 1, Du = Function.call.bind(Object.prototype.hasOwnProperty)), Du;
}
var Ru, Ch;
function _2() {
  if (Ch)
    return Ru;
  Ch = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Gl(), r = {}, n = yy();
    t = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, o, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var f;
          try {
            if (typeof a[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[l](s, l, u, o, null, e);
          } catch (p) {
            f = p;
          }
          if (f && !(f instanceof Error) && t(
            (u || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = c ? c() : "";
            t(
              "Failed " + o + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ru = i, Ru;
}
var Pu, Nh;
function T2() {
  if (Nh)
    return Pu;
  Nh = 1;
  var t = vy(), e = k2(), r = Gl(), n = yy(), i = _2(), a = function() {
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
  return Pu = function(o, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(C) {
      var q = C && (c && C[c] || C[l]);
      if (typeof q == "function")
        return q;
    }
    var d = "<<anonymous>>", h = {
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
      element: k(),
      elementType: b(),
      instanceOf: S,
      node: F(),
      objectOf: N,
      oneOf: D,
      oneOfType: A,
      shape: P,
      exact: M
    };
    function p(C, q) {
      return C === q ? C !== 0 || 1 / C === 1 / q : C !== C && q !== q;
    }
    function v(C, q) {
      this.message = C, this.data = q && typeof q == "object" ? q : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function m(C) {
      if (process.env.NODE_ENV !== "production")
        var q = {}, re = 0;
      function fe(_e, pe, ve, be, Te, we, ut) {
        if (be = be || d, we = we || ve, ut !== r) {
          if (u) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Et = be + ":" + ve;
            !q[Et] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + we + "` prop on `" + be + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), q[Et] = !0, re++);
          }
        }
        return pe[ve] == null ? _e ? pe[ve] === null ? new v("The " + Te + " `" + we + "` is marked as required " + ("in `" + be + "`, but its value is `null`.")) : new v("The " + Te + " `" + we + "` is marked as required in " + ("`" + be + "`, but its value is `undefined`.")) : null : C(pe, ve, be, Te, we);
      }
      var ie = fe.bind(null, !1);
      return ie.isRequired = fe.bind(null, !0), ie;
    }
    function y(C) {
      function q(re, fe, ie, _e, pe, ve) {
        var be = re[fe], Te = W(be);
        if (Te !== C) {
          var we = ue(be);
          return new v(
            "Invalid " + _e + " `" + pe + "` of type " + ("`" + we + "` supplied to `" + ie + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return m(q);
    }
    function g() {
      return m(s);
    }
    function w(C) {
      function q(re, fe, ie, _e, pe) {
        if (typeof C != "function")
          return new v("Property `" + pe + "` of component `" + ie + "` has invalid PropType notation inside arrayOf.");
        var ve = re[fe];
        if (!Array.isArray(ve)) {
          var be = W(ve);
          return new v("Invalid " + _e + " `" + pe + "` of type " + ("`" + be + "` supplied to `" + ie + "`, expected an array."));
        }
        for (var Te = 0; Te < ve.length; Te++) {
          var we = C(ve, Te, ie, _e, pe + "[" + Te + "]", r);
          if (we instanceof Error)
            return we;
        }
        return null;
      }
      return m(q);
    }
    function k() {
      function C(q, re, fe, ie, _e) {
        var pe = q[re];
        if (!o(pe)) {
          var ve = W(pe);
          return new v("Invalid " + ie + " `" + _e + "` of type " + ("`" + ve + "` supplied to `" + fe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(C);
    }
    function b() {
      function C(q, re, fe, ie, _e) {
        var pe = q[re];
        if (!t.isValidElementType(pe)) {
          var ve = W(pe);
          return new v("Invalid " + ie + " `" + _e + "` of type " + ("`" + ve + "` supplied to `" + fe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(C);
    }
    function S(C) {
      function q(re, fe, ie, _e, pe) {
        if (!(re[fe] instanceof C)) {
          var ve = C.name || d, be = Ee(re[fe]);
          return new v("Invalid " + _e + " `" + pe + "` of type " + ("`" + be + "` supplied to `" + ie + "`, expected ") + ("instance of `" + ve + "`."));
        }
        return null;
      }
      return m(q);
    }
    function D(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function q(re, fe, ie, _e, pe) {
        for (var ve = re[fe], be = 0; be < C.length; be++)
          if (p(ve, C[be]))
            return null;
        var Te = JSON.stringify(C, function(ut, B) {
          var Et = ue(B);
          return Et === "symbol" ? String(B) : B;
        });
        return new v("Invalid " + _e + " `" + pe + "` of value `" + String(ve) + "` " + ("supplied to `" + ie + "`, expected one of " + Te + "."));
      }
      return m(q);
    }
    function N(C) {
      function q(re, fe, ie, _e, pe) {
        if (typeof C != "function")
          return new v("Property `" + pe + "` of component `" + ie + "` has invalid PropType notation inside objectOf.");
        var ve = re[fe], be = W(ve);
        if (be !== "object")
          return new v("Invalid " + _e + " `" + pe + "` of type " + ("`" + be + "` supplied to `" + ie + "`, expected an object."));
        for (var Te in ve)
          if (n(ve, Te)) {
            var we = C(ve, Te, ie, _e, pe + "." + Te, r);
            if (we instanceof Error)
              return we;
          }
        return null;
      }
      return m(q);
    }
    function A(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var q = 0; q < C.length; q++) {
        var re = C[q];
        if (typeof re != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Re(re) + " at index " + q + "."
          ), s;
      }
      function fe(ie, _e, pe, ve, be) {
        for (var Te = [], we = 0; we < C.length; we++) {
          var ut = C[we], B = ut(ie, _e, pe, ve, be, r);
          if (B == null)
            return null;
          B.data && n(B.data, "expectedType") && Te.push(B.data.expectedType);
        }
        var Et = Te.length > 0 ? ", expected one of type [" + Te.join(", ") + "]" : "";
        return new v("Invalid " + ve + " `" + be + "` supplied to " + ("`" + pe + "`" + Et + "."));
      }
      return m(fe);
    }
    function F() {
      function C(q, re, fe, ie, _e) {
        return z(q[re]) ? null : new v("Invalid " + ie + " `" + _e + "` supplied to " + ("`" + fe + "`, expected a ReactNode."));
      }
      return m(C);
    }
    function j(C, q, re, fe, ie) {
      return new v(
        (C || "React class") + ": " + q + " type `" + re + "." + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ie + "`."
      );
    }
    function P(C) {
      function q(re, fe, ie, _e, pe) {
        var ve = re[fe], be = W(ve);
        if (be !== "object")
          return new v("Invalid " + _e + " `" + pe + "` of type `" + be + "` " + ("supplied to `" + ie + "`, expected `object`."));
        for (var Te in C) {
          var we = C[Te];
          if (typeof we != "function")
            return j(ie, _e, pe, Te, ue(we));
          var ut = we(ve, Te, ie, _e, pe + "." + Te, r);
          if (ut)
            return ut;
        }
        return null;
      }
      return m(q);
    }
    function M(C) {
      function q(re, fe, ie, _e, pe) {
        var ve = re[fe], be = W(ve);
        if (be !== "object")
          return new v("Invalid " + _e + " `" + pe + "` of type `" + be + "` " + ("supplied to `" + ie + "`, expected `object`."));
        var Te = e({}, re[fe], C);
        for (var we in Te) {
          var ut = C[we];
          if (n(C, we) && typeof ut != "function")
            return j(ie, _e, pe, we, ue(ut));
          if (!ut)
            return new v(
              "Invalid " + _e + " `" + pe + "` key `" + we + "` supplied to `" + ie + "`.\nBad object: " + JSON.stringify(re[fe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var B = ut(ve, we, ie, _e, pe + "." + we, r);
          if (B)
            return B;
        }
        return null;
      }
      return m(q);
    }
    function z(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(z);
          if (C === null || o(C))
            return !0;
          var q = f(C);
          if (q) {
            var re = q.call(C), fe;
            if (q !== C.entries) {
              for (; !(fe = re.next()).done; )
                if (!z(fe.value))
                  return !1;
            } else
              for (; !(fe = re.next()).done; ) {
                var ie = fe.value;
                if (ie && !z(ie[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(C, q) {
      return C === "symbol" ? !0 : q ? q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && q instanceof Symbol : !1;
    }
    function W(C) {
      var q = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : le(q, C) ? "symbol" : q;
    }
    function ue(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var q = W(C);
      if (q === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return q;
    }
    function Re(C) {
      var q = ue(C);
      switch (q) {
        case "array":
        case "object":
          return "an " + q;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + q;
        default:
          return q;
      }
    }
    function Ee(C) {
      return !C.constructor || !C.constructor.name ? d : C.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Pu;
}
var Mu, Ah;
function S2() {
  if (Ah)
    return Mu;
  Ah = 1;
  var t = Gl();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Mu = function() {
    function n(s, o, u, c, l, f) {
      if (f !== t) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
  }, Mu;
}
if (process.env.NODE_ENV !== "production") {
  var O2 = vy(), I2 = !0;
  jc.exports = T2()(O2.isElement, I2);
} else
  jc.exports = S2()();
var C2 = jc.exports;
const xe = /* @__PURE__ */ kp(C2);
function Dh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Dh(Object(r), !0).forEach(function(n) {
      Zn(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function qs(t) {
  "@babel/helpers - typeof";
  return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, qs(t);
}
function Zn(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function N2(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function A2(t, e) {
  if (t == null)
    return {};
  var r = N2(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Vc(t) {
  return D2(t) || R2(t) || P2(t) || M2();
}
function D2(t) {
  if (Array.isArray(t))
    return $c(t);
}
function R2(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function P2(t, e) {
  if (t) {
    if (typeof t == "string")
      return $c(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $c(t, e);
  }
}
function $c(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function M2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F2(t) {
  var e, r = t.beat, n = t.fade, i = t.beatFade, a = t.bounce, s = t.shake, o = t.flash, u = t.spin, c = t.spinPulse, l = t.spinReverse, f = t.pulse, d = t.fixedWidth, h = t.inverse, p = t.border, v = t.listItem, m = t.flip, y = t.size, g = t.rotation, w = t.pull, k = (e = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": s,
    "fa-flash": o,
    "fa-spin": u,
    "fa-spin-reverse": l,
    "fa-spin-pulse": c,
    "fa-pulse": f,
    "fa-fw": d,
    "fa-inverse": h,
    "fa-border": p,
    "fa-li": v,
    "fa-flip": m === !0,
    "fa-flip-horizontal": m === "horizontal" || m === "both",
    "fa-flip-vertical": m === "vertical" || m === "both"
  }, Zn(e, "fa-".concat(y), typeof y < "u" && y !== null), Zn(e, "fa-rotate-".concat(g), typeof g < "u" && g !== null && g !== 0), Zn(e, "fa-pull-".concat(w), typeof w < "u" && w !== null), Zn(e, "fa-swap-opacity", t.swapOpacity), e);
  return Object.keys(k).map(function(b) {
    return k[b] ? b : null;
  }).filter(function(b) {
    return b;
  });
}
function L2(t) {
  return t = t - 0, t === t;
}
function gy(t) {
  return L2(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  }), t.substr(0, 1).toLowerCase() + t.substr(1));
}
var j2 = ["style"];
function V2(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function $2(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = gy(r.slice(0, n)), a = r.slice(n + 1).trim();
    return i.startsWith("webkit") ? e[V2(i)] = a : e[i] = a, e;
  }, {});
}
function by(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(u) {
    return by(t, u);
  }), i = Object.keys(e.attributes || {}).reduce(function(u, c) {
    var l = e.attributes[c];
    switch (c) {
      case "class":
        u.attrs.className = l, delete e.attributes.class;
        break;
      case "style":
        u.attrs.style = $2(l);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? u.attrs[c.toLowerCase()] = l : u.attrs[gy(c)] = l;
    }
    return u;
  }, {
    attrs: {}
  }), a = r.style, s = a === void 0 ? {} : a, o = A2(r, j2);
  return i.attrs.style = Qr(Qr({}, i.attrs.style), s), t.apply(void 0, [e.tag, Qr(Qr({}, i.attrs), o)].concat(Vc(n)));
}
var wy = !1;
try {
  wy = process.env.NODE_ENV === "production";
} catch {
}
function z2() {
  if (!wy && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Rh(t) {
  if (t && qs(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (ec.icon)
    return ec.icon(t);
  if (t === null)
    return null;
  if (t && qs(t) === "object" && t.prefix && t.iconName)
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
function Fu(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Zn({}, t, e) : {};
}
var Da = /* @__PURE__ */ H.forwardRef(function(t, e) {
  var r = t.icon, n = t.mask, i = t.symbol, a = t.className, s = t.title, o = t.titleId, u = t.maskId, c = Rh(r), l = Fu("classes", [].concat(Vc(F2(t)), Vc(a.split(" ")))), f = Fu("transform", typeof t.transform == "string" ? ec.transform(t.transform) : t.transform), d = Fu("mask", Rh(n)), h = L0(c, Qr(Qr(Qr(Qr({}, l), f), d), {}, {
    symbol: i,
    title: s,
    titleId: o,
    maskId: u
  }));
  if (!h)
    return z2("Could not find icon", c), null;
  var p = h.abstract, v = {
    ref: e
  };
  return Object.keys(t).forEach(function(m) {
    Da.defaultProps.hasOwnProperty(m) || (v[m] = t[m]);
  }), q2(p[0], v);
});
Da.displayName = "FontAwesomeIcon";
Da.propTypes = {
  beat: xe.bool,
  border: xe.bool,
  beatFade: xe.bool,
  bounce: xe.bool,
  className: xe.string,
  fade: xe.bool,
  flash: xe.bool,
  mask: xe.oneOfType([xe.object, xe.array, xe.string]),
  maskId: xe.string,
  fixedWidth: xe.bool,
  inverse: xe.bool,
  flip: xe.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: xe.oneOfType([xe.object, xe.array, xe.string]),
  listItem: xe.bool,
  pull: xe.oneOf(["right", "left"]),
  pulse: xe.bool,
  rotation: xe.oneOf([0, 90, 180, 270]),
  shake: xe.bool,
  size: xe.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: xe.bool,
  spinPulse: xe.bool,
  spinReverse: xe.bool,
  symbol: xe.oneOfType([xe.bool, xe.string]),
  title: xe.string,
  titleId: xe.string,
  transform: xe.oneOfType([xe.string, xe.object]),
  swapOpacity: xe.bool
};
Da.defaultProps = {
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
var q2 = by.bind(null, H.createElement);
const pi = oo(function({ name: e, family: r = "classic", style: n = "solid", ...i }, a) {
  const s = `fa-${e} fa-${r} fa-${n}`, { onClick: o } = i;
  return /* @__PURE__ */ G.jsx(Da, { icon: s, className: o ? "sfs-cursor-pointer" : "", ref: a, ...i });
}), Ey = Dt({
  currentScreen: null
});
function Jl() {
  const t = wt(Ey);
  if (!t)
    throw new Error("useMiniApp must be used within a MiniAppProvider");
  return t;
}
function U2({ children: t }) {
  const [e, r] = bt(null), n = () => r(null);
  return /* @__PURE__ */ G.jsx(Ey.Provider, { value: { currentScreen: e, setCurrentScreen: r, goHome: n }, children: t });
}
function W2({ title: t, icon: e, noBack: r }) {
  const { goHome: n } = Jl();
  return /* @__PURE__ */ G.jsxs("header", { className: "sfs-w-full sfs-box-border sfs-flex sfs-flex-row sfs-items-center", children: [
    !r && /* @__PURE__ */ G.jsx("div", { onClick: n, className: "sfs-h-10 sfs-px-4 sfs-flex sfs-flex-row sfs-items-center sfs-cursor-pointer hover:sfs-bg-gray-200 sfs-transition sfs-duration-200", children: /* @__PURE__ */ G.jsx(pi, { icon: "chevron-left" }) }),
    /* @__PURE__ */ G.jsxs("div", { className: "sfs-flex sfs-flex-grow sfs-justify-center sfs-gap-1 sfs-py-3 sfs-text-gray-800", children: [
      /* @__PURE__ */ G.jsx(pi, { icon: e }),
      /* @__PURE__ */ G.jsx("p", { className: "sfs-m-0 sfs-font-semibold", children: t })
    ] })
  ] });
}
function xy({ title: t, icon: e, noBack: r, children: n }) {
  return /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
    /* @__PURE__ */ G.jsx(W2, { title: t, icon: e, noBack: r }),
    /* @__PURE__ */ G.jsx("main", { className: "sfs-box-border sfs-h-full sfs-grow sfs-w-full sfs-overflow-y-auto", children: n })
  ] });
}
function B2({ title: t, icon: e, children: r }) {
  const { setCurrentScreen: n } = Jl();
  return /* @__PURE__ */ G.jsx(xy, { title: t, icon: e, noBack: !0, children: /* @__PURE__ */ G.jsx("div", { className: "sfs-w-full sfs-h-full sfs-box-border sfs-flex sfs-flex-col sfs-gap-2 sfs-px-2", children: r.map((i, a) => /* @__PURE__ */ G.jsxs(
    "div",
    {
      onClick: () => n(i),
      className: "sfs-flex sfs-flex-row sfs-items-center sfs-gap-2 sfs-p-3 sfs-text-md sfs-bg-gray-200 sfs-rounded-md sfs-cursor-pointer sfs-transition sfs-duration-200 hover:sfs-bg-gray-300",
      children: [
        /* @__PURE__ */ G.jsx(pi, { icon: i.props.icon, className: "sfs-w-4" }),
        /* @__PURE__ */ G.jsx("p", { className: "sfs-m-0", children: i.props.title })
      ]
    },
    a
  )) }) });
}
function H2({ title: t, icon: e, children: r }) {
  const { currentScreen: n } = Jl();
  return /* @__PURE__ */ G.jsx("div", { className: "sfs-w-full sfs-h-full sfs-flex sfs-flex-col sfs-pb-2 sfs-box-border sfs-text-gray-800 sfs-bg-white", children: n || /* @__PURE__ */ G.jsx(B2, { title: t, icon: e, children: r }) });
}
function Q2({ title: t, icon: e, children: r }) {
  return /* @__PURE__ */ G.jsx(U2, { children: /* @__PURE__ */ G.jsx(H2, { title: t, icon: e, children: r }) });
}
var Ra = (t) => t.type === "checkbox", Gn = (t) => t instanceof Date, kt = (t) => t == null;
const ky = (t) => typeof t == "object";
var dt = (t) => !kt(t) && !Array.isArray(t) && ky(t) && !Gn(t), Y2 = (t) => dt(t) && t.target ? Ra(t.target) ? t.target.checked : t.target.value : t, Z2 = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, G2 = (t, e) => t.has(Z2(e)), J2 = (t) => {
  const e = t.constructor && t.constructor.prototype;
  return dt(e) && e.hasOwnProperty("isPrototypeOf");
}, Kl = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function jt(t) {
  let e;
  const r = Array.isArray(t);
  if (t instanceof Date)
    e = new Date(t);
  else if (t instanceof Set)
    e = new Set(t);
  else if (!(Kl && (t instanceof Blob || t instanceof FileList)) && (r || dt(t)))
    if (e = r ? [] : {}, !r && !J2(t))
      e = t;
    else
      for (const n in t)
        t.hasOwnProperty(n) && (e[n] = jt(t[n]));
  else
    return t;
  return e;
}
var Pa = (t) => Array.isArray(t) ? t.filter(Boolean) : [], it = (t) => t === void 0, X = (t, e, r) => {
  if (!e || !dt(t))
    return r;
  const n = Pa(e.split(/[,[\].]+?/)).reduce((i, a) => kt(i) ? i : i[a], t);
  return it(n) || n === t ? it(t[e]) ? r : t[e] : n;
}, vr = (t) => typeof t == "boolean";
const Ph = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Yt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, pr = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
H.createContext(null);
var K2 = (t, e, r, n = !0) => {
  const i = {
    defaultValues: e._defaultValues
  };
  for (const a in t)
    Object.defineProperty(i, a, {
      get: () => {
        const s = a;
        return e._proxyFormState[s] !== Yt.all && (e._proxyFormState[s] = !n || Yt.all), t[s];
      }
    });
  return i;
}, Rt = (t) => dt(t) && !Object.keys(t).length, X2 = (t, e, r, n) => {
  r(t);
  const { name: i, ...a } = t;
  return Rt(a) || Object.keys(a).length >= Object.keys(e).length || Object.keys(a).find((s) => e[s] === Yt.all);
}, Lu = (t) => Array.isArray(t) ? t : [t];
function eT(t) {
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
var ar = (t) => typeof t == "string", tT = (t, e, r, n, i) => ar(t) ? (n && e.watch.add(t), X(r, t, i)) : Array.isArray(t) ? t.map((a) => (n && e.watch.add(a), X(r, a))) : (n && (e.watchAll = !0), r), Xl = (t) => /^\w*$/.test(t), _y = (t) => Pa(t.replace(/["|']|\]/g, "").split(/\.|\[/)), He = (t, e, r) => {
  let n = -1;
  const i = Xl(e) ? [e] : _y(e), a = i.length, s = a - 1;
  for (; ++n < a; ) {
    const o = i[n];
    let u = r;
    if (n !== s) {
      const c = t[o];
      u = dt(c) || Array.isArray(c) ? c : isNaN(+i[n + 1]) ? {} : [];
    }
    t[o] = u, t = t[o];
  }
  return t;
}, Ty = (t, e, r, n, i) => e ? {
  ...r[t],
  types: {
    ...r[t] && r[t].types ? r[t].types : {},
    [n]: i || !0
  }
} : {}, Mh = (t) => ({
  isOnSubmit: !t || t === Yt.onSubmit,
  isOnBlur: t === Yt.onBlur,
  isOnChange: t === Yt.onChange,
  isOnAll: t === Yt.all,
  isOnTouch: t === Yt.onTouched
}), Fh = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((n) => t.startsWith(n) && /^\.\w+/.test(t.slice(n.length))));
const ea = (t, e, r, n) => {
  for (const i of r || Object.keys(t)) {
    const a = X(t, i);
    if (a) {
      const { _f: s, ...o } = a;
      if (s) {
        if (s.refs && s.refs[0] && e(s.refs[0], i) && !n)
          break;
        if (s.ref && e(s.ref, s.name) && !n)
          break;
        ea(o, e);
      } else
        dt(o) && ea(o, e);
    }
  }
};
var rT = (t, e, r) => {
  const n = Pa(X(t, r));
  return He(n, "root", e[r]), He(t, r, n), t;
}, ef = (t) => t.type === "file", Yr = (t) => typeof t == "function", Us = (t) => {
  if (!Kl)
    return !1;
  const e = t ? t.ownerDocument : 0;
  return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, Ts = (t) => ar(t), tf = (t) => t.type === "radio", Ws = (t) => t instanceof RegExp;
const Lh = {
  value: !1,
  isValid: !1
}, jh = { value: !0, isValid: !0 };
var Sy = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !it(t[0].attributes.value) ? it(t[0].value) || t[0].value === "" ? jh : { value: t[0].value, isValid: !0 } : jh
    ) : Lh;
  }
  return Lh;
};
const Vh = {
  isValid: !1,
  value: null
};
var Oy = (t) => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, Vh) : Vh;
function $h(t, e, r = "validate") {
  if (Ts(t) || Array.isArray(t) && t.every(Ts) || vr(t) && !t)
    return {
      type: r,
      message: Ts(t) ? t : "",
      ref: e
    };
}
var jn = (t) => dt(t) && !Ws(t) ? t : {
  value: t,
  message: ""
}, zh = async (t, e, r, n, i) => {
  const { ref: a, refs: s, required: o, maxLength: u, minLength: c, min: l, max: f, pattern: d, validate: h, name: p, valueAsNumber: v, mount: m, disabled: y } = t._f, g = X(e, p);
  if (!m || y)
    return {};
  const w = s ? s[0] : a, k = (P) => {
    n && w.reportValidity && (w.setCustomValidity(vr(P) ? "" : P || ""), w.reportValidity());
  }, b = {}, S = tf(a), D = Ra(a), N = S || D, A = (v || ef(a)) && it(a.value) && it(g) || Us(a) && a.value === "" || g === "" || Array.isArray(g) && !g.length, F = Ty.bind(null, p, r, b), j = (P, M, z, le = pr.maxLength, W = pr.minLength) => {
    const ue = P ? M : z;
    b[p] = {
      type: P ? le : W,
      message: ue,
      ref: a,
      ...F(P ? le : W, ue)
    };
  };
  if (i ? !Array.isArray(g) || !g.length : o && (!N && (A || kt(g)) || vr(g) && !g || D && !Sy(s).isValid || S && !Oy(s).isValid)) {
    const { value: P, message: M } = Ts(o) ? { value: !!o, message: o } : jn(o);
    if (P && (b[p] = {
      type: pr.required,
      message: M,
      ref: w,
      ...F(pr.required, M)
    }, !r))
      return k(M), b;
  }
  if (!A && (!kt(l) || !kt(f))) {
    let P, M;
    const z = jn(f), le = jn(l);
    if (!kt(g) && !isNaN(g)) {
      const W = a.valueAsNumber || g && +g;
      kt(z.value) || (P = W > z.value), kt(le.value) || (M = W < le.value);
    } else {
      const W = a.valueAsDate || new Date(g), ue = (C) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + C), Re = a.type == "time", Ee = a.type == "week";
      ar(z.value) && g && (P = Re ? ue(g) > ue(z.value) : Ee ? g > z.value : W > new Date(z.value)), ar(le.value) && g && (M = Re ? ue(g) < ue(le.value) : Ee ? g < le.value : W < new Date(le.value));
    }
    if ((P || M) && (j(!!P, z.message, le.message, pr.max, pr.min), !r))
      return k(b[p].message), b;
  }
  if ((u || c) && !A && (ar(g) || i && Array.isArray(g))) {
    const P = jn(u), M = jn(c), z = !kt(P.value) && g.length > +P.value, le = !kt(M.value) && g.length < +M.value;
    if ((z || le) && (j(z, P.message, M.message), !r))
      return k(b[p].message), b;
  }
  if (d && !A && ar(g)) {
    const { value: P, message: M } = jn(d);
    if (Ws(P) && !g.match(P) && (b[p] = {
      type: pr.pattern,
      message: M,
      ref: a,
      ...F(pr.pattern, M)
    }, !r))
      return k(M), b;
  }
  if (h) {
    if (Yr(h)) {
      const P = await h(g, e), M = $h(P, w);
      if (M && (b[p] = {
        ...M,
        ...F(pr.validate, M.message)
      }, !r))
        return k(M.message), b;
    } else if (dt(h)) {
      let P = {};
      for (const M in h) {
        if (!Rt(P) && !r)
          break;
        const z = $h(await h[M](g, e), w, M);
        z && (P = {
          ...z,
          ...F(M, z.message)
        }, k(z.message), r && (b[p] = P));
      }
      if (!Rt(P) && (b[p] = {
        ref: w,
        ...P
      }, !r))
        return b;
    }
  }
  return k(!0), b;
};
function nT(t, e) {
  const r = e.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    t = it(t) ? n++ : t[e[n++]];
  return t;
}
function iT(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !it(t[e]))
      return !1;
  return !0;
}
function lt(t, e) {
  const r = Array.isArray(e) ? e : Xl(e) ? [e] : _y(e), n = r.length === 1 ? t : nT(t, r), i = r.length - 1, a = r[i];
  return n && delete n[a], i !== 0 && (dt(n) && Rt(n) || Array.isArray(n) && iT(n)) && lt(t, r.slice(0, -1)), t;
}
var ju = () => {
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
}, Bs = (t) => kt(t) || !ky(t);
function En(t, e) {
  if (Bs(t) || Bs(e))
    return t === e;
  if (Gn(t) && Gn(e))
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
      if (Gn(a) && Gn(s) || dt(a) && dt(s) || Array.isArray(a) && Array.isArray(s) ? !En(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Iy = (t) => t.type === "select-multiple", aT = (t) => tf(t) || Ra(t), Vu = (t) => Us(t) && t.isConnected, Cy = (t) => {
  for (const e in t)
    if (Yr(t[e]))
      return !0;
  return !1;
};
function Hs(t, e = {}) {
  const r = Array.isArray(t);
  if (dt(t) || r)
    for (const n in t)
      Array.isArray(t[n]) || dt(t[n]) && !Cy(t[n]) ? (e[n] = Array.isArray(t[n]) ? [] : {}, Hs(t[n], e[n])) : kt(t[n]) || (e[n] = !0);
  return e;
}
function Ny(t, e, r) {
  const n = Array.isArray(t);
  if (dt(t) || n)
    for (const i in t)
      Array.isArray(t[i]) || dt(t[i]) && !Cy(t[i]) ? it(e) || Bs(r[i]) ? r[i] = Array.isArray(t[i]) ? Hs(t[i], []) : { ...Hs(t[i]) } : Ny(t[i], kt(e) ? {} : e[i], r[i]) : r[i] = !En(t[i], e[i]);
  return r;
}
var fs = (t, e) => Ny(t, e, Hs(e)), Ay = (t, { valueAsNumber: e, valueAsDate: r, setValueAs: n }) => it(t) ? t : e ? t === "" ? NaN : t && +t : r && ar(t) ? new Date(t) : n ? n(t) : t;
function $u(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((r) => r.disabled) : e.disabled))
    return ef(e) ? e.files : tf(e) ? Oy(t.refs).value : Iy(e) ? [...e.selectedOptions].map(({ value: r }) => r) : Ra(e) ? Sy(t.refs).value : Ay(it(e.value) ? t.ref.value : e.value, t);
}
var sT = (t, e, r, n) => {
  const i = {};
  for (const a of t) {
    const s = X(e, a);
    s && He(i, a, s._f);
  }
  return {
    criteriaMode: r,
    names: [...t],
    fields: i,
    shouldUseNativeValidation: n
  };
}, Fi = (t) => it(t) ? t : Ws(t) ? t.source : dt(t) ? Ws(t.value) ? t.value.source : t.value : t, oT = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function qh(t, e, r) {
  const n = X(t, r);
  if (n || Xl(r))
    return {
      error: n,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const a = i.join("."), s = X(e, a), o = X(t, a);
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
var uT = (t, e, r, n, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(e || t) : (r ? n.isOnBlur : i.isOnBlur) ? !t : (r ? n.isOnChange : i.isOnChange) ? t : !0, cT = (t, e) => !Pa(X(t, e)).length && lt(t, e);
const lT = {
  mode: Yt.onSubmit,
  reValidateMode: Yt.onChange,
  shouldFocusError: !0
};
function fT(t = {}) {
  let e = {
    ...lT,
    ...t
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Yr(e.defaultValues),
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
  }, n = {}, i = dt(e.defaultValues) || dt(e.values) ? jt(e.defaultValues || e.values) || {} : {}, a = e.shouldUnregister ? {} : jt(i), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, u, c = 0;
  const l = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: ju(),
    array: ju(),
    state: ju()
  }, d = Mh(e.mode), h = Mh(e.reValidateMode), p = e.criteriaMode === Yt.all, v = (x) => (T) => {
    clearTimeout(c), c = setTimeout(x, T);
  }, m = async (x) => {
    if (l.isValid || x) {
      const T = e.resolver ? Rt((await N()).errors) : await F(n, !0);
      T !== r.isValid && f.state.next({
        isValid: T
      });
    }
  }, y = (x, T) => {
    (l.isValidating || l.validatingFields) && ((x || Array.from(o.mount)).forEach((O) => {
      O && (T ? He(r.validatingFields, O, T) : lt(r.validatingFields, O));
    }), f.state.next({
      validatingFields: r.validatingFields,
      isValidating: !Rt(r.validatingFields)
    }));
  }, g = (x, T = [], O, Z, $ = !0, V = !0) => {
    if (Z && O) {
      if (s.action = !0, V && Array.isArray(X(n, x))) {
        const se = O(X(n, x), Z.argA, Z.argB);
        $ && He(n, x, se);
      }
      if (V && Array.isArray(X(r.errors, x))) {
        const se = O(X(r.errors, x), Z.argA, Z.argB);
        $ && He(r.errors, x, se), cT(r.errors, x);
      }
      if (l.touchedFields && V && Array.isArray(X(r.touchedFields, x))) {
        const se = O(X(r.touchedFields, x), Z.argA, Z.argB);
        $ && He(r.touchedFields, x, se);
      }
      l.dirtyFields && (r.dirtyFields = fs(i, a)), f.state.next({
        name: x,
        isDirty: P(x, T),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      He(a, x, T);
  }, w = (x, T) => {
    He(r.errors, x, T), f.state.next({
      errors: r.errors
    });
  }, k = (x) => {
    r.errors = x, f.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, b = (x, T, O, Z) => {
    const $ = X(n, x);
    if ($) {
      const V = X(a, x, it(O) ? X(i, x) : O);
      it(V) || Z && Z.defaultChecked || T ? He(a, x, T ? V : $u($._f)) : le(x, V), s.mount && m();
    }
  }, S = (x, T, O, Z, $) => {
    let V = !1, se = !1;
    const De = {
      name: x
    }, tt = !!(X(n, x) && X(n, x)._f.disabled);
    if (!O || Z) {
      l.isDirty && (se = r.isDirty, r.isDirty = De.isDirty = P(), V = se !== De.isDirty);
      const ct = tt || En(X(i, x), T);
      se = !!(!tt && X(r.dirtyFields, x)), ct || tt ? lt(r.dirtyFields, x) : He(r.dirtyFields, x, !0), De.dirtyFields = r.dirtyFields, V = V || l.dirtyFields && se !== !ct;
    }
    if (O) {
      const ct = X(r.touchedFields, x);
      ct || (He(r.touchedFields, x, O), De.touchedFields = r.touchedFields, V = V || l.touchedFields && ct !== O);
    }
    return V && $ && f.state.next(De), V ? De : {};
  }, D = (x, T, O, Z) => {
    const $ = X(r.errors, x), V = l.isValid && vr(T) && r.isValid !== T;
    if (t.delayError && O ? (u = v(() => w(x, O)), u(t.delayError)) : (clearTimeout(c), u = null, O ? He(r.errors, x, O) : lt(r.errors, x)), (O ? !En($, O) : $) || !Rt(Z) || V) {
      const se = {
        ...Z,
        ...V && vr(T) ? { isValid: T } : {},
        errors: r.errors,
        name: x
      };
      r = {
        ...r,
        ...se
      }, f.state.next(se);
    }
  }, N = async (x) => {
    y(x, !0);
    const T = await e.resolver(a, e.context, sT(x || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return y(x), T;
  }, A = async (x) => {
    const { errors: T } = await N(x);
    if (x)
      for (const O of x) {
        const Z = X(T, O);
        Z ? He(r.errors, O, Z) : lt(r.errors, O);
      }
    else
      r.errors = T;
    return T;
  }, F = async (x, T, O = {
    valid: !0
  }) => {
    for (const Z in x) {
      const $ = x[Z];
      if ($) {
        const { _f: V, ...se } = $;
        if (V) {
          const De = o.array.has(V.name);
          y([Z], !0);
          const tt = await zh($, a, p, e.shouldUseNativeValidation && !T, De);
          if (y([Z]), tt[V.name] && (O.valid = !1, T))
            break;
          !T && (X(tt, V.name) ? De ? rT(r.errors, tt, V.name) : He(r.errors, V.name, tt[V.name]) : lt(r.errors, V.name));
        }
        se && await F(se, T, O);
      }
    }
    return O.valid;
  }, j = () => {
    for (const x of o.unMount) {
      const T = X(n, x);
      T && (T._f.refs ? T._f.refs.every((O) => !Vu(O)) : !Vu(T._f.ref)) && pe(x);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, P = (x, T) => (x && T && He(a, x, T), !En(q(), i)), M = (x, T, O) => tT(x, o, {
    ...s.mount ? a : it(T) ? i : ar(x) ? { [x]: T } : T
  }, O, T), z = (x) => Pa(X(s.mount ? a : i, x, t.shouldUnregister ? X(i, x, []) : [])), le = (x, T, O = {}) => {
    const Z = X(n, x);
    let $ = T;
    if (Z) {
      const V = Z._f;
      V && (!V.disabled && He(a, x, Ay(T, V)), $ = Us(V.ref) && kt(T) ? "" : T, Iy(V.ref) ? [...V.ref.options].forEach((se) => se.selected = $.includes(se.value)) : V.refs ? Ra(V.ref) ? V.refs.length > 1 ? V.refs.forEach((se) => (!se.defaultChecked || !se.disabled) && (se.checked = Array.isArray($) ? !!$.find((De) => De === se.value) : $ === se.value)) : V.refs[0] && (V.refs[0].checked = !!$) : V.refs.forEach((se) => se.checked = se.value === $) : ef(V.ref) ? V.ref.value = "" : (V.ref.value = $, V.ref.type || f.values.next({
        name: x,
        values: { ...a }
      })));
    }
    (O.shouldDirty || O.shouldTouch) && S(x, $, O.shouldTouch, O.shouldDirty, !0), O.shouldValidate && C(x);
  }, W = (x, T, O) => {
    for (const Z in T) {
      const $ = T[Z], V = `${x}.${Z}`, se = X(n, V);
      (o.array.has(x) || !Bs($) || se && !se._f) && !Gn($) ? W(V, $, O) : le(V, $, O);
    }
  }, ue = (x, T, O = {}) => {
    const Z = X(n, x), $ = o.array.has(x), V = jt(T);
    He(a, x, V), $ ? (f.array.next({
      name: x,
      values: { ...a }
    }), (l.isDirty || l.dirtyFields) && O.shouldDirty && f.state.next({
      name: x,
      dirtyFields: fs(i, a),
      isDirty: P(x, V)
    })) : Z && !Z._f && !kt(V) ? W(x, V, O) : le(x, V, O), Fh(x, o) && f.state.next({ ...r }), f.values.next({
      name: s.mount ? x : void 0,
      values: { ...a }
    });
  }, Re = async (x) => {
    s.mount = !0;
    const T = x.target;
    let O = T.name, Z = !0;
    const $ = X(n, O), V = () => T.type ? $u($._f) : Y2(x), se = (De) => {
      Z = Number.isNaN(De) || De === X(a, O, De);
    };
    if ($) {
      let De, tt;
      const ct = V(), Rr = x.type === Ph.BLUR || x.type === Ph.FOCUS_OUT, Ma = !oT($._f) && !e.resolver && !X(r.errors, O) && !$._f.deps || uT(Rr, X(r.touchedFields, O), r.isSubmitted, h, d), Rn = Fh(O, o, Rr);
      He(a, O, ct), Rr ? ($._f.onBlur && $._f.onBlur(x), u && u(0)) : $._f.onChange && $._f.onChange(x);
      const sn = S(O, ct, Rr, !1), zo = !Rt(sn) || Rn;
      if (!Rr && f.values.next({
        name: O,
        type: x.type,
        values: { ...a }
      }), Ma)
        return l.isValid && m(), zo && f.state.next({ name: O, ...Rn ? {} : sn });
      if (!Rr && Rn && f.state.next({ ...r }), e.resolver) {
        const { errors: Fa } = await N([O]);
        if (se(ct), Z) {
          const qo = qh(r.errors, n, O), La = qh(Fa, n, qo.name || O);
          De = La.error, O = La.name, tt = Rt(Fa);
        }
      } else
        y([O], !0), De = (await zh($, a, p, e.shouldUseNativeValidation))[O], y([O]), se(ct), Z && (De ? tt = !1 : l.isValid && (tt = await F(n, !0)));
      Z && ($._f.deps && C($._f.deps), D(O, tt, De, sn));
    }
  }, Ee = (x, T) => {
    if (X(r.errors, T) && x.focus)
      return x.focus(), 1;
  }, C = async (x, T = {}) => {
    let O, Z;
    const $ = Lu(x);
    if (e.resolver) {
      const V = await A(it(x) ? x : $);
      O = Rt(V), Z = x ? !$.some((se) => X(V, se)) : O;
    } else
      x ? (Z = (await Promise.all($.map(async (V) => {
        const se = X(n, V);
        return await F(se && se._f ? { [V]: se } : se);
      }))).every(Boolean), !(!Z && !r.isValid) && m()) : Z = O = await F(n);
    return f.state.next({
      ...!ar(x) || l.isValid && O !== r.isValid ? {} : { name: x },
      ...e.resolver || !x ? { isValid: O } : {},
      errors: r.errors
    }), T.shouldFocus && !Z && ea(n, Ee, x ? $ : o.mount), Z;
  }, q = (x) => {
    const T = {
      ...s.mount ? a : i
    };
    return it(x) ? T : ar(x) ? X(T, x) : x.map((O) => X(T, O));
  }, re = (x, T) => ({
    invalid: !!X((T || r).errors, x),
    isDirty: !!X((T || r).dirtyFields, x),
    isTouched: !!X((T || r).touchedFields, x),
    isValidating: !!X((T || r).validatingFields, x),
    error: X((T || r).errors, x)
  }), fe = (x) => {
    x && Lu(x).forEach((T) => lt(r.errors, T)), f.state.next({
      errors: x ? r.errors : {}
    });
  }, ie = (x, T, O) => {
    const Z = (X(n, x, { _f: {} })._f || {}).ref;
    He(r.errors, x, {
      ...T,
      ref: Z
    }), f.state.next({
      name: x,
      errors: r.errors,
      isValid: !1
    }), O && O.shouldFocus && Z && Z.focus && Z.focus();
  }, _e = (x, T) => Yr(x) ? f.values.subscribe({
    next: (O) => x(M(void 0, T), O)
  }) : M(x, T, !0), pe = (x, T = {}) => {
    for (const O of x ? Lu(x) : o.mount)
      o.mount.delete(O), o.array.delete(O), T.keepValue || (lt(n, O), lt(a, O)), !T.keepError && lt(r.errors, O), !T.keepDirty && lt(r.dirtyFields, O), !T.keepTouched && lt(r.touchedFields, O), !T.keepIsValidating && lt(r.validatingFields, O), !e.shouldUnregister && !T.keepDefaultValue && lt(i, O);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...r,
      ...T.keepDirty ? { isDirty: P() } : {}
    }), !T.keepIsValid && m();
  }, ve = ({ disabled: x, name: T, field: O, fields: Z, value: $ }) => {
    if (vr(x)) {
      const V = x ? void 0 : it($) ? $u(O ? O._f : X(Z, T)._f) : $;
      He(a, T, V), S(T, V, !1, !1, !0);
    }
  }, be = (x, T = {}) => {
    let O = X(n, x);
    const Z = vr(T.disabled);
    return He(n, x, {
      ...O || {},
      _f: {
        ...O && O._f ? O._f : { ref: { name: x } },
        name: x,
        mount: !0,
        ...T
      }
    }), o.mount.add(x), O ? ve({
      field: O,
      disabled: T.disabled,
      name: x,
      value: T.value
    }) : b(x, !0, T.value), {
      ...Z ? { disabled: T.disabled } : {},
      ...e.progressive ? {
        required: !!T.required,
        min: Fi(T.min),
        max: Fi(T.max),
        minLength: Fi(T.minLength),
        maxLength: Fi(T.maxLength),
        pattern: Fi(T.pattern)
      } : {},
      name: x,
      onChange: Re,
      onBlur: Re,
      ref: ($) => {
        if ($) {
          be(x, T), O = X(n, x);
          const V = it($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, se = aT(V), De = O._f.refs || [];
          if (se ? De.find((tt) => tt === V) : V === O._f.ref)
            return;
          He(n, x, {
            _f: {
              ...O._f,
              ...se ? {
                refs: [
                  ...De.filter(Vu),
                  V,
                  ...Array.isArray(X(i, x)) ? [{}] : []
                ],
                ref: { type: V.type, name: x }
              } : { ref: V }
            }
          }), b(x, !1, void 0, V);
        } else
          O = X(n, x, {}), O._f && (O._f.mount = !1), (e.shouldUnregister || T.shouldUnregister) && !(G2(o.array, x) && s.action) && o.unMount.add(x);
      }
    };
  }, Te = () => e.shouldFocusError && ea(n, Ee, o.mount), we = (x) => {
    vr(x) && (f.state.next({ disabled: x }), ea(n, (T, O) => {
      let Z = x;
      const $ = X(n, O);
      $ && vr($._f.disabled) && (Z || (Z = $._f.disabled)), T.disabled = Z;
    }, 0, !1));
  }, ut = (x, T) => async (O) => {
    let Z;
    O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
    let $ = jt(a);
    if (f.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: V, values: se } = await N();
      r.errors = V, $ = se;
    } else
      await F(n);
    if (lt(r.errors, "root"), Rt(r.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await x($, O);
      } catch (V) {
        Z = V;
      }
    } else
      T && await T({ ...r.errors }, O), Te(), setTimeout(Te);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Rt(r.errors) && !Z,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), Z)
      throw Z;
  }, B = (x, T = {}) => {
    X(n, x) && (it(T.defaultValue) ? ue(x, jt(X(i, x))) : (ue(x, T.defaultValue), He(i, x, jt(T.defaultValue))), T.keepTouched || lt(r.touchedFields, x), T.keepDirty || (lt(r.dirtyFields, x), r.isDirty = T.defaultValue ? P(x, jt(X(i, x))) : P()), T.keepError || (lt(r.errors, x), l.isValid && m()), f.state.next({ ...r }));
  }, Et = (x, T = {}) => {
    const O = x ? jt(x) : i, Z = jt(O), $ = Rt(x), V = $ ? i : Z;
    if (T.keepDefaultValues || (i = O), !T.keepValues) {
      if (T.keepDirtyValues)
        for (const se of o.mount)
          X(r.dirtyFields, se) ? He(V, se, X(a, se)) : ue(se, X(V, se));
      else {
        if (Kl && it(x))
          for (const se of o.mount) {
            const De = X(n, se);
            if (De && De._f) {
              const tt = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
              if (Us(tt)) {
                const ct = tt.closest("form");
                if (ct) {
                  ct.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      a = t.shouldUnregister ? T.keepDefaultValues ? jt(i) : {} : jt(V), f.array.next({
        values: { ...V }
      }), f.values.next({
        values: { ...V }
      });
    }
    o = {
      mount: T.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !l.isValid || !!T.keepIsValid || !!T.keepDirtyValues, s.watch = !!t.shouldUnregister, f.state.next({
      submitCount: T.keepSubmitCount ? r.submitCount : 0,
      isDirty: $ ? !1 : T.keepDirty ? r.isDirty : !!(T.keepDefaultValues && !En(x, i)),
      isSubmitted: T.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: $ ? [] : T.keepDirtyValues ? T.keepDefaultValues && a ? fs(i, a) : r.dirtyFields : T.keepDefaultValues && x ? fs(i, x) : {},
      touchedFields: T.keepTouched ? r.touchedFields : {},
      errors: T.keepErrors ? r.errors : {},
      isSubmitSuccessful: T.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, hr = (x, T) => Et(Yr(x) ? x(a) : x, T);
  return {
    control: {
      register: be,
      unregister: pe,
      getFieldState: re,
      handleSubmit: ut,
      setError: ie,
      _executeSchema: N,
      _getWatch: M,
      _getDirty: P,
      _updateValid: m,
      _removeUnmounted: j,
      _updateFieldArray: g,
      _updateDisabledField: ve,
      _getFieldArray: z,
      _reset: Et,
      _resetDefaultValues: () => Yr(e.defaultValues) && e.defaultValues().then((x) => {
        hr(x, e.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (x) => {
        r = {
          ...r,
          ...x
        };
      },
      _disableForm: we,
      _subjects: f,
      _proxyFormState: l,
      _setErrors: k,
      get _fields() {
        return n;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(x) {
        s = x;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(x) {
        o = x;
      },
      get _formState() {
        return r;
      },
      set _formState(x) {
        r = x;
      },
      get _options() {
        return e;
      },
      set _options(x) {
        e = {
          ...e,
          ...x
        };
      }
    },
    trigger: C,
    register: be,
    handleSubmit: ut,
    watch: _e,
    setValue: ue,
    getValues: q,
    reset: hr,
    resetField: B,
    clearErrors: fe,
    unregister: pe,
    setError: ie,
    setFocus: (x, T = {}) => {
      const O = X(n, x), Z = O && O._f;
      if (Z) {
        const $ = Z.refs ? Z.refs[0] : Z.ref;
        $.focus && ($.focus(), T.shouldSelect && $.select());
      }
    },
    getFieldState: re
  };
}
function dT(t = {}) {
  const e = H.useRef(), r = H.useRef(), [n, i] = H.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Yr(t.defaultValues),
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
    defaultValues: Yr(t.defaultValues) ? void 0 : t.defaultValues
  });
  e.current || (e.current = {
    ...fT(t),
    formState: n
  });
  const a = e.current.control;
  return a._options = t, eT({
    subject: a._subjects.state,
    next: (s) => {
      X2(s, a._proxyFormState, a._updateFormState) && i({ ...a._formState });
    }
  }), H.useEffect(() => a._disableForm(t.disabled), [a, t.disabled]), H.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== n.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, n.isDirty]), H.useEffect(() => {
    t.values && !En(t.values, r.current) ? (a._reset(t.values, a._options.resetOptions), r.current = t.values, i((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [t.values, a]), H.useEffect(() => {
    t.errors && a._setErrors(t.errors);
  }, [t.errors, a]), H.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), H.useEffect(() => {
    t.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [t.shouldUnregister, a]), e.current.formState = K2(n, a), e.current;
}
var Uh = function(t, e, r) {
  if (t && "reportValidity" in t) {
    var n = X(r, e);
    t.setCustomValidity(n && n.message || ""), t.reportValidity();
  }
}, Dy = function(t, e) {
  var r = function(i) {
    var a = e.fields[i];
    a && a.ref && "reportValidity" in a.ref ? Uh(a.ref, i, t) : a.refs && a.refs.forEach(function(s) {
      return Uh(s, i, t);
    });
  };
  for (var n in e.fields)
    r(n);
}, hT = function(t) {
  return t instanceof Date;
}, pT = function(t) {
  return t == null;
}, mT = function(t) {
  return typeof t == "object";
}, vT = function(t) {
  return !pT(t) && !Array.isArray(t) && mT(t) && !hT(t);
}, yT = function(t) {
  return /^\w*$/.test(t);
}, zu = function(t, e, r) {
  for (var n = -1, i = yT(e) ? [e] : function(l) {
    return f = l.replace(/["|']|\]/g, "").split(/\.|\[/), Array.isArray(f) ? f.filter(Boolean) : [];
    var f;
  }(e), a = i.length, s = a - 1; ++n < a; ) {
    var o = i[n], u = r;
    if (n !== s) {
      var c = t[o];
      u = vT(c) || Array.isArray(c) ? c : isNaN(+i[n + 1]) ? {} : [];
    }
    t[o] = u, t = t[o];
  }
  return t;
}, gT = function(t, e) {
  e.shouldUseNativeValidation && Dy(t, e);
  var r = {};
  for (var n in t) {
    var i = X(e.fields, n), a = Object.assign(t[n] || {}, { ref: i && i.ref });
    if (bT(e.names || Object.keys(t), n)) {
      var s = Object.assign({}, X(r, n));
      zu(s, "root", a), zu(r, n, s);
    } else
      zu(r, n, a);
  }
  return r;
}, bT = function(t, e) {
  return t.some(function(r) {
    return r.startsWith(e + ".");
  });
}, wT = function(t, e) {
  for (var r = {}; t.length; ) {
    var n = t[0], i = n.code, a = n.message, s = n.path.join(".");
    if (!r[s])
      if ("unionErrors" in n) {
        var o = n.unionErrors[0].errors[0];
        r[s] = { message: o.message, type: o.code };
      } else
        r[s] = { message: a, type: i };
    if ("unionErrors" in n && n.unionErrors.forEach(function(l) {
      return l.errors.forEach(function(f) {
        return t.push(f);
      });
    }), e) {
      var u = r[s].types, c = u && u[n.code];
      r[s] = Ty(s, e, r, i, c ? [].concat(c, n.message) : n.message);
    }
    t.shift();
  }
  return r;
}, ET = function(t, e, r) {
  return r === void 0 && (r = {}), function(n, i, a) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var u = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(c) {
            return a.shouldUseNativeValidation && Dy({}, a), { errors: {}, values: r.raw ? n : c };
          });
        } catch (c) {
          return o(c);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(s) {
        if (function(o) {
          return o.errors != null;
        }(s))
          return { values: {}, errors: gT(wT(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Ae;
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
})(Ae || (Ae = {}));
var Wh;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Wh || (Wh = {}));
const J = Ae.arrayToEnum([
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
]), pn = (t) => {
  switch (typeof t) {
    case "undefined":
      return J.undefined;
    case "string":
      return J.string;
    case "number":
      return isNaN(t) ? J.nan : J.number;
    case "boolean":
      return J.boolean;
    case "function":
      return J.function;
    case "bigint":
      return J.bigint;
    case "symbol":
      return J.symbol;
    case "object":
      return Array.isArray(t) ? J.array : t === null ? J.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? J.promise : typeof Map < "u" && t instanceof Map ? J.map : typeof Set < "u" && t instanceof Set ? J.set : typeof Date < "u" && t instanceof Date ? J.date : J.object;
    default:
      return J.unknown;
  }
}, L = Ae.arrayToEnum([
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
class qt extends Error {
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
            const c = s.path[u];
            u === s.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(r(s))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof qt))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ae.jsonStringifyReplacer, 2);
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
qt.create = (t) => new qt(t);
const ya = (t, e) => {
  let r;
  switch (t.code) {
    case L.invalid_type:
      t.received === J.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case L.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Ae.jsonStringifyReplacer)}`;
      break;
    case L.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ae.joinValues(t.keys, ", ")}`;
      break;
    case L.invalid_union:
      r = "Invalid input";
      break;
    case L.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ae.joinValues(t.options)}`;
      break;
    case L.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ae.joinValues(t.options)}, received '${t.received}'`;
      break;
    case L.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case L.invalid_return_type:
      r = "Invalid function return type";
      break;
    case L.invalid_date:
      r = "Invalid date";
      break;
    case L.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Ae.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case L.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case L.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case L.custom:
      r = "Invalid input";
      break;
    case L.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case L.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case L.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Ae.assertNever(t);
  }
  return { message: r };
};
let xT = ya;
function zc() {
  return xT;
}
const qc = (t) => {
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
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(s, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: a,
    message: o
  };
};
function Y(t, e) {
  const r = zc(), n = qc({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      r,
      r === ya ? void 0 : ya
      // then global default map
    ].filter((i) => !!i)
  });
  t.common.issues.push(n);
}
class Ot {
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
        return he;
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
    return Ot.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: a, value: s } = i;
      if (a.status === "aborted" || s.status === "aborted")
        return he;
      a.status === "dirty" && e.dirty(), s.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (n[a.value] = s.value);
    }
    return { status: e.value, value: n };
  }
}
const he = Object.freeze({
  status: "aborted"
}), zi = (t) => ({ status: "dirty", value: t }), At = (t) => ({ status: "valid", value: t }), Bh = (t) => t.status === "aborted", Hh = (t) => t.status === "dirty", Qs = (t) => t.status === "valid", Ys = (t) => typeof Promise < "u" && t instanceof Promise;
function Zs(t, e, r, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function Ry(t, e, r, n, i) {
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var ae;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ae || (ae = {}));
var qi, Ui;
class lr {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Qh = (t, e) => {
  if (Qs(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new qt(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ge(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (s, o) => {
    var u, c;
    const { message: l } = t;
    return s.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: (u = l ?? n) !== null && u !== void 0 ? u : o.defaultError } : s.code !== "invalid_type" ? { message: o.defaultError } : { message: (c = l ?? r) !== null && c !== void 0 ? c : o.defaultError };
  }, description: i };
}
class ke {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return pn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: pn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Ot(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: pn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Ys(r))
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
      parsedType: pn(e)
    }, a = this._parseSync({ data: e, path: i.path, parent: i });
    return Qh(i, a);
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
      parsedType: pn(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), a = await (Ys(i) ? i : Promise.resolve(i));
    return Qh(n, a);
  }
  refine(e, r) {
    const n = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, a) => {
      const s = e(i), o = () => a.addIssue({
        code: L.custom,
        ...n(i)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((u) => u ? !0 : (o(), !1)) : s ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof r == "function" ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new Nr({
      schema: this,
      typeName: ce.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return xr.create(this, this._def);
  }
  nullable() {
    return Nn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return sr.create(this, this._def);
  }
  promise() {
    return ba.create(this, this._def);
  }
  or(e) {
    return Ks.create([this, e], this._def);
  }
  and(e) {
    return Xs.create(this, e, this._def);
  }
  transform(e) {
    return new Nr({
      ...ge(this._def),
      schema: this,
      typeName: ce.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new io({
      ...ge(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ce.ZodDefault
    });
  }
  brand() {
    return new Ly({
      typeName: ce.ZodBranded,
      type: this,
      ...ge(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ao({
      ...ge(this._def),
      innerType: this,
      catchValue: r,
      typeName: ce.ZodCatch
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
    return Vo.create(this, e);
  }
  readonly() {
    return so.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const kT = /^c[^\s-]{8,}$/i, _T = /^[0-9a-z]+$/, TT = /^[0-9A-HJKMNP-TV-Z]{26}$/, ST = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, OT = /^[a-z0-9_-]{21}$/i, IT = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, CT = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, NT = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let qu;
const AT = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, DT = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, RT = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Py = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", PT = new RegExp(`^${Py}$`);
function My(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function MT(t) {
  return new RegExp(`^${My(t)}$`);
}
function FT(t) {
  let e = `${Py}T${My(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function LT(t, e) {
  return !!((e === "v4" || !e) && AT.test(t) || (e === "v6" || !e) && DT.test(t));
}
class br extends ke {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== J.string) {
      const a = this._getOrReturnCtx(e);
      return Y(a, {
        code: L.invalid_type,
        expected: J.string,
        received: a.parsedType
      }), he;
    }
    const n = new Ot();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const s = e.data.length > a.value, o = e.data.length < a.value;
        (s || o) && (i = this._getOrReturnCtx(e, i), s ? Y(i, {
          code: L.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && Y(i, {
          code: L.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        CT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "email",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        qu || (qu = new RegExp(NT, "u")), qu.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "emoji",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        ST.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "uuid",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        OT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "nanoid",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        kT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "cuid",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        _T.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "cuid2",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        TT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "ulid",
          code: L.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), Y(i, {
            validation: "url",
            code: L.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "regex",
          code: L.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? FT(a).test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "date" ? PT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.invalid_string,
          validation: "date",
          message: a.message
        }), n.dirty()) : a.kind === "time" ? MT(a).test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          code: L.invalid_string,
          validation: "time",
          message: a.message
        }), n.dirty()) : a.kind === "duration" ? IT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "duration",
          code: L.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? LT(e.data, a.version) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "ip",
          code: L.invalid_string,
          message: a.message
        }), n.dirty()) : a.kind === "base64" ? RT.test(e.data) || (i = this._getOrReturnCtx(e, i), Y(i, {
          validation: "base64",
          code: L.invalid_string,
          message: a.message
        }), n.dirty()) : Ae.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((i) => e.test(i), {
      validation: r,
      code: L.invalid_string,
      ...ae.errToObj(n)
    });
  }
  _addCheck(e) {
    return new br({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ae.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ae.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ae.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ae.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...ae.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ae.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ae.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ae.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...ae.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ae.errToObj(e) });
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
      ...ae.errToObj(e == null ? void 0 : e.message)
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
      ...ae.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...ae.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ae.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ae.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ae.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ae.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ae.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ae.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ae.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, ae.errToObj(e));
  }
  trim() {
    return new br({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new br({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new br({
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
br.create = (t) => {
  var e;
  return new br({
    checks: [],
    typeName: ce.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ge(t)
  });
};
function jT(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, a = parseInt(t.toFixed(i).replace(".", "")), s = parseInt(e.toFixed(i).replace(".", ""));
  return a % s / Math.pow(10, i);
}
class mi extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== J.number) {
      const a = this._getOrReturnCtx(e);
      return Y(a, {
        code: L.invalid_type,
        expected: J.number,
        received: a.parsedType
      }), he;
    }
    let n;
    const i = new Ot();
    for (const a of this._def.checks)
      a.kind === "int" ? Ae.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? jT(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.not_finite,
        message: a.message
      }), i.dirty()) : Ae.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ae.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ae.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ae.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ae.toString(r));
  }
  setLimit(e, r, n, i) {
    return new mi({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ae.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new mi({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: ae.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ae.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ae.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ae.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ae.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ae.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ae.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ae.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ae.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Ae.isInteger(e.value));
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
mi.create = (t) => new mi({
  checks: [],
  typeName: ce.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ge(t)
});
class vi extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== J.bigint) {
      const a = this._getOrReturnCtx(e);
      return Y(a, {
        code: L.invalid_type,
        expected: J.bigint,
        received: a.parsedType
      }), he;
    }
    let n;
    const i = new Ot();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), Y(n, {
        code: L.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : Ae.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ae.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ae.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ae.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ae.toString(r));
  }
  setLimit(e, r, n, i) {
    return new vi({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ae.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new vi({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ae.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ae.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ae.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ae.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ae.toString(r)
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
vi.create = (t) => {
  var e;
  return new vi({
    checks: [],
    typeName: ce.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ge(t)
  });
};
class Uc extends ke {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== J.boolean) {
      const n = this._getOrReturnCtx(e);
      return Y(n, {
        code: L.invalid_type,
        expected: J.boolean,
        received: n.parsedType
      }), he;
    }
    return At(e.data);
  }
}
Uc.create = (t) => new Uc({
  typeName: ce.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ge(t)
});
class ga extends ke {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== J.date) {
      const a = this._getOrReturnCtx(e);
      return Y(a, {
        code: L.invalid_type,
        expected: J.date,
        received: a.parsedType
      }), he;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return Y(a, {
        code: L.invalid_date
      }), he;
    }
    const n = new Ot();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (i = this._getOrReturnCtx(e, i), Y(i, {
        code: L.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (i = this._getOrReturnCtx(e, i), Y(i, {
        code: L.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : Ae.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new ga({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ae.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ae.toString(r)
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
ga.create = (t) => new ga({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ce.ZodDate,
  ...ge(t)
});
class Wc extends ke {
  _parse(e) {
    if (this._getType(e) !== J.symbol) {
      const n = this._getOrReturnCtx(e);
      return Y(n, {
        code: L.invalid_type,
        expected: J.symbol,
        received: n.parsedType
      }), he;
    }
    return At(e.data);
  }
}
Wc.create = (t) => new Wc({
  typeName: ce.ZodSymbol,
  ...ge(t)
});
class Gs extends ke {
  _parse(e) {
    if (this._getType(e) !== J.undefined) {
      const n = this._getOrReturnCtx(e);
      return Y(n, {
        code: L.invalid_type,
        expected: J.undefined,
        received: n.parsedType
      }), he;
    }
    return At(e.data);
  }
}
Gs.create = (t) => new Gs({
  typeName: ce.ZodUndefined,
  ...ge(t)
});
class Js extends ke {
  _parse(e) {
    if (this._getType(e) !== J.null) {
      const n = this._getOrReturnCtx(e);
      return Y(n, {
        code: L.invalid_type,
        expected: J.null,
        received: n.parsedType
      }), he;
    }
    return At(e.data);
  }
}
Js.create = (t) => new Js({
  typeName: ce.ZodNull,
  ...ge(t)
});
class Bc extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return At(e.data);
  }
}
Bc.create = (t) => new Bc({
  typeName: ce.ZodAny,
  ...ge(t)
});
class ii extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return At(e.data);
  }
}
ii.create = (t) => new ii({
  typeName: ce.ZodUnknown,
  ...ge(t)
});
class an extends ke {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return Y(r, {
      code: L.invalid_type,
      expected: J.never,
      received: r.parsedType
    }), he;
  }
}
an.create = (t) => new an({
  typeName: ce.ZodNever,
  ...ge(t)
});
class Hc extends ke {
  _parse(e) {
    if (this._getType(e) !== J.undefined) {
      const n = this._getOrReturnCtx(e);
      return Y(n, {
        code: L.invalid_type,
        expected: J.void,
        received: n.parsedType
      }), he;
    }
    return At(e.data);
  }
}
Hc.create = (t) => new Hc({
  typeName: ce.ZodVoid,
  ...ge(t)
});
class sr extends ke {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== J.array)
      return Y(r, {
        code: L.invalid_type,
        expected: J.array,
        received: r.parsedType
      }), he;
    if (i.exactLength !== null) {
      const s = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (s || o) && (Y(r, {
        code: s ? L.too_big : L.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: s ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (Y(r, {
      code: L.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (Y(r, {
      code: L.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((s, o) => i.type._parseAsync(new lr(r, s, r.path, o)))).then((s) => Ot.mergeArray(n, s));
    const a = [...r.data].map((s, o) => i.type._parseSync(new lr(r, s, r.path, o)));
    return Ot.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new sr({
      ...this._def,
      minLength: { value: e, message: ae.toString(r) }
    });
  }
  max(e, r) {
    return new sr({
      ...this._def,
      maxLength: { value: e, message: ae.toString(r) }
    });
  }
  length(e, r) {
    return new sr({
      ...this._def,
      exactLength: { value: e, message: ae.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
sr.create = (t, e) => new sr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ce.ZodArray,
  ...ge(e)
});
function zn(t) {
  if (t instanceof Je) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = xr.create(zn(n));
    }
    return new Je({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof sr ? new sr({
      ...t._def,
      type: zn(t.element)
    }) : t instanceof xr ? xr.create(zn(t.unwrap())) : t instanceof Nn ? Nn.create(zn(t.unwrap())) : t instanceof Cr ? Cr.create(t.items.map((e) => zn(e))) : t;
}
class Je extends ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Ae.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== J.object) {
      const c = this._getOrReturnCtx(e);
      return Y(c, {
        code: L.invalid_type,
        expected: J.object,
        received: c.parsedType
      }), he;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: a, keys: s } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof an && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        s.includes(c) || o.push(c);
    const u = [];
    for (const c of s) {
      const l = a[c], f = i.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: l._parse(new lr(i, f, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof an) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const l of o)
          u.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: i.data[l] }
          });
      else if (c === "strict")
        o.length > 0 && (Y(i, {
          code: L.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const l of o) {
        const f = i.data[l];
        u.push({
          key: { status: "valid", value: l },
          value: c._parse(
            new lr(i, f, i.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const l of u) {
        const f = await l.key, d = await l.value;
        c.push({
          key: f,
          value: d,
          alwaysSet: l.alwaysSet
        });
      }
      return c;
    }).then((c) => Ot.mergeObjectSync(n, c)) : Ot.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ae.errToObj, new Je({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, a, s, o;
          const u = (s = (a = (i = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(i, r, n).message) !== null && s !== void 0 ? s : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ae.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new Je({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Je({
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
    return new Je({
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
    return new Je({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ce.ZodObject
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
    return new Je({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Ae.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Je({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Ae.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new Je({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return zn(this);
  }
  partial(e) {
    const r = {};
    return Ae.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new Je({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Ae.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof xr; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new Je({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Fy(Ae.objectKeys(this.shape));
  }
}
Je.create = (t, e) => new Je({
  shape: () => t,
  unknownKeys: "strip",
  catchall: an.create(),
  typeName: ce.ZodObject,
  ...ge(e)
});
Je.strictCreate = (t, e) => new Je({
  shape: () => t,
  unknownKeys: "strict",
  catchall: an.create(),
  typeName: ce.ZodObject,
  ...ge(e)
});
Je.lazycreate = (t, e) => new Je({
  shape: t,
  unknownKeys: "strip",
  catchall: an.create(),
  typeName: ce.ZodObject,
  ...ge(e)
});
class Ks extends ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const s = a.map((o) => new qt(o.ctx.common.issues));
      return Y(r, {
        code: L.invalid_union,
        unionErrors: s
      }), he;
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
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, l = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !a && (a = { result: l, ctx: c }), c.common.issues.length && s.push(c.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((u) => new qt(u));
      return Y(r, {
        code: L.invalid_union,
        unionErrors: o
      }), he;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ks.create = (t, e) => new Ks({
  options: t,
  typeName: ce.ZodUnion,
  ...ge(e)
});
const mr = (t) => t instanceof to ? mr(t.schema) : t instanceof Nr ? mr(t.innerType()) : t instanceof ro ? [t.value] : t instanceof Cn ? t.options : t instanceof no ? Ae.objectValues(t.enum) : t instanceof io ? mr(t._def.innerType) : t instanceof Gs ? [void 0] : t instanceof Js ? [null] : t instanceof xr ? [void 0, ...mr(t.unwrap())] : t instanceof Nn ? [null, ...mr(t.unwrap())] : t instanceof Ly || t instanceof so ? mr(t.unwrap()) : t instanceof ao ? mr(t._def.innerType) : [];
class rf extends ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== J.object)
      return Y(r, {
        code: L.invalid_type,
        expected: J.object,
        received: r.parsedType
      }), he;
    const n = this.discriminator, i = r.data[n], a = this.optionsMap.get(i);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (Y(r, {
      code: L.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), he);
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
      const s = mr(a.shape[e]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of s) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, a);
      }
    }
    return new rf({
      typeName: ce.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...ge(n)
    });
  }
}
function Qc(t, e) {
  const r = pn(t), n = pn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === J.object && n === J.object) {
    const i = Ae.objectKeys(e), a = Ae.objectKeys(t).filter((o) => i.indexOf(o) !== -1), s = { ...t, ...e };
    for (const o of a) {
      const u = Qc(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      s[o] = u.data;
    }
    return { valid: !0, data: s };
  } else if (r === J.array && n === J.array) {
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
    return r === J.date && n === J.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Xs extends ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (a, s) => {
      if (Bh(a) || Bh(s))
        return he;
      const o = Qc(a.value, s.value);
      return o.valid ? ((Hh(a) || Hh(s)) && r.dirty(), { status: r.value, value: o.data }) : (Y(n, {
        code: L.invalid_intersection_types
      }), he);
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
Xs.create = (t, e, r) => new Xs({
  left: t,
  right: e,
  typeName: ce.ZodIntersection,
  ...ge(r)
});
class Cr extends ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.array)
      return Y(n, {
        code: L.invalid_type,
        expected: J.array,
        received: n.parsedType
      }), he;
    if (n.data.length < this._def.items.length)
      return Y(n, {
        code: L.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), he;
    !this._def.rest && n.data.length > this._def.items.length && (Y(n, {
      code: L.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((s, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new lr(n, s, n.path, o)) : null;
    }).filter((s) => !!s);
    return n.common.async ? Promise.all(a).then((s) => Ot.mergeArray(r, s)) : Ot.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Cr({
      ...this._def,
      rest: e
    });
  }
}
Cr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Cr({
    items: t,
    typeName: ce.ZodTuple,
    rest: null,
    ...ge(e)
  });
};
class eo extends ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.object)
      return Y(n, {
        code: L.invalid_type,
        expected: J.object,
        received: n.parsedType
      }), he;
    const i = [], a = this._def.keyType, s = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: a._parse(new lr(n, o, n.path, o)),
        value: s._parse(new lr(n, n.data[o], n.path, o)),
        alwaysSet: o in n.data
      });
    return n.common.async ? Ot.mergeObjectAsync(r, i) : Ot.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof ke ? new eo({
      keyType: e,
      valueType: r,
      typeName: ce.ZodRecord,
      ...ge(n)
    }) : new eo({
      keyType: br.create(),
      valueType: e,
      typeName: ce.ZodRecord,
      ...ge(r)
    });
  }
}
class Yc extends ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.map)
      return Y(n, {
        code: L.invalid_type,
        expected: J.map,
        received: n.parsedType
      }), he;
    const i = this._def.keyType, a = this._def.valueType, s = [...n.data.entries()].map(([o, u], c) => ({
      key: i._parse(new lr(n, o, n.path, [c, "key"])),
      value: a._parse(new lr(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of s) {
          const c = await u.key, l = await u.value;
          if (c.status === "aborted" || l.status === "aborted")
            return he;
          (c.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(c.value, l.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of s) {
        const c = u.key, l = u.value;
        if (c.status === "aborted" || l.status === "aborted")
          return he;
        (c.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(c.value, l.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Yc.create = (t, e, r) => new Yc({
  valueType: e,
  keyType: t,
  typeName: ce.ZodMap,
  ...ge(r)
});
class yi extends ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.set)
      return Y(n, {
        code: L.invalid_type,
        expected: J.set,
        received: n.parsedType
      }), he;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (Y(n, {
      code: L.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (Y(n, {
      code: L.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function s(u) {
      const c = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l.status === "aborted")
          return he;
        l.status === "dirty" && r.dirty(), c.add(l.value);
      }
      return { status: r.value, value: c };
    }
    const o = [...n.data.values()].map((u, c) => a._parse(new lr(n, u, n.path, c)));
    return n.common.async ? Promise.all(o).then((u) => s(u)) : s(o);
  }
  min(e, r) {
    return new yi({
      ...this._def,
      minSize: { value: e, message: ae.toString(r) }
    });
  }
  max(e, r) {
    return new yi({
      ...this._def,
      maxSize: { value: e, message: ae.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
yi.create = (t, e) => new yi({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ce.ZodSet,
  ...ge(e)
});
class ta extends ke {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== J.function)
      return Y(r, {
        code: L.invalid_type,
        expected: J.function,
        received: r.parsedType
      }), he;
    function n(o, u) {
      return qc({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          zc(),
          ya
        ].filter((c) => !!c),
        issueData: {
          code: L.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return qc({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          zc(),
          ya
        ].filter((c) => !!c),
        issueData: {
          code: L.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, s = r.data;
    if (this._def.returns instanceof ba) {
      const o = this;
      return At(async function(...u) {
        const c = new qt([]), l = await o._def.args.parseAsync(u, a).catch((h) => {
          throw c.addIssue(n(u, h)), c;
        }), f = await Reflect.apply(s, this, l);
        return await o._def.returns._def.type.parseAsync(f, a).catch((h) => {
          throw c.addIssue(i(f, h)), c;
        });
      });
    } else {
      const o = this;
      return At(function(...u) {
        const c = o._def.args.safeParse(u, a);
        if (!c.success)
          throw new qt([n(u, c.error)]);
        const l = Reflect.apply(s, this, c.data), f = o._def.returns.safeParse(l, a);
        if (!f.success)
          throw new qt([i(l, f.error)]);
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
    return new ta({
      ...this._def,
      args: Cr.create(e).rest(ii.create())
    });
  }
  returns(e) {
    return new ta({
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
    return new ta({
      args: e || Cr.create([]).rest(ii.create()),
      returns: r || ii.create(),
      typeName: ce.ZodFunction,
      ...ge(n)
    });
  }
}
class to extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
to.create = (t, e) => new to({
  getter: t,
  typeName: ce.ZodLazy,
  ...ge(e)
});
class ro extends ke {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return Y(r, {
        received: r.data,
        code: L.invalid_literal,
        expected: this._def.value
      }), he;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ro.create = (t, e) => new ro({
  value: t,
  typeName: ce.ZodLiteral,
  ...ge(e)
});
function Fy(t, e) {
  return new Cn({
    values: t,
    typeName: ce.ZodEnum,
    ...ge(e)
  });
}
class Cn extends ke {
  constructor() {
    super(...arguments), qi.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return Y(r, {
        expected: Ae.joinValues(n),
        received: r.parsedType,
        code: L.invalid_type
      }), he;
    }
    if (Zs(this, qi) || Ry(this, qi, new Set(this._def.values)), !Zs(this, qi).has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return Y(r, {
        received: r.data,
        code: L.invalid_enum_value,
        options: n
      }), he;
    }
    return At(e.data);
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
    return Cn.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return Cn.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
qi = /* @__PURE__ */ new WeakMap();
Cn.create = Fy;
class no extends ke {
  constructor() {
    super(...arguments), Ui.set(this, void 0);
  }
  _parse(e) {
    const r = Ae.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== J.string && n.parsedType !== J.number) {
      const i = Ae.objectValues(r);
      return Y(n, {
        expected: Ae.joinValues(i),
        received: n.parsedType,
        code: L.invalid_type
      }), he;
    }
    if (Zs(this, Ui) || Ry(this, Ui, new Set(Ae.getValidEnumValues(this._def.values))), !Zs(this, Ui).has(e.data)) {
      const i = Ae.objectValues(r);
      return Y(n, {
        received: n.data,
        code: L.invalid_enum_value,
        options: i
      }), he;
    }
    return At(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ui = /* @__PURE__ */ new WeakMap();
no.create = (t, e) => new no({
  values: t,
  typeName: ce.ZodNativeEnum,
  ...ge(e)
});
class ba extends ke {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== J.promise && r.common.async === !1)
      return Y(r, {
        code: L.invalid_type,
        expected: J.promise,
        received: r.parsedType
      }), he;
    const n = r.parsedType === J.promise ? r.data : Promise.resolve(r.data);
    return At(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ba.create = (t, e) => new ba({
  type: t,
  typeName: ce.ZodPromise,
  ...ge(e)
});
class Nr extends ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ce.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null, a = {
      addIssue: (s) => {
        Y(n, s), s.fatal ? r.abort() : r.dirty();
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
            return he;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return u.status === "aborted" ? he : u.status === "dirty" || r.value === "dirty" ? zi(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return he;
        const o = this._def.schema._parseSync({
          data: s,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? he : o.status === "dirty" || r.value === "dirty" ? zi(o.value) : o;
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
        return o.status === "aborted" ? he : (o.status === "dirty" && r.dirty(), s(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? he : (o.status === "dirty" && r.dirty(), s(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Qs(s))
          return s;
        const o = i.transform(s.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((s) => Qs(s) ? Promise.resolve(i.transform(s.value, a)).then((o) => ({ status: r.value, value: o })) : s);
    Ae.assertNever(i);
  }
}
Nr.create = (t, e, r) => new Nr({
  schema: t,
  typeName: ce.ZodEffects,
  effect: e,
  ...ge(r)
});
Nr.createWithPreprocess = (t, e, r) => new Nr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ce.ZodEffects,
  ...ge(r)
});
class xr extends ke {
  _parse(e) {
    return this._getType(e) === J.undefined ? At(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
xr.create = (t, e) => new xr({
  innerType: t,
  typeName: ce.ZodOptional,
  ...ge(e)
});
class Nn extends ke {
  _parse(e) {
    return this._getType(e) === J.null ? At(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nn.create = (t, e) => new Nn({
  innerType: t,
  typeName: ce.ZodNullable,
  ...ge(e)
});
class io extends ke {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === J.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
io.create = (t, e) => new io({
  innerType: t,
  typeName: ce.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ge(e)
});
class ao extends ke {
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
    return Ys(i) ? i.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new qt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new qt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ao.create = (t, e) => new ao({
  innerType: t,
  typeName: ce.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ge(e)
});
class Zc extends ke {
  _parse(e) {
    if (this._getType(e) !== J.nan) {
      const n = this._getOrReturnCtx(e);
      return Y(n, {
        code: L.invalid_type,
        expected: J.nan,
        received: n.parsedType
      }), he;
    }
    return { status: "valid", value: e.data };
  }
}
Zc.create = (t) => new Zc({
  typeName: ce.ZodNaN,
  ...ge(t)
});
class Ly extends ke {
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
class Vo extends ke {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? he : a.status === "dirty" ? (r.dirty(), zi(a.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? he : i.status === "dirty" ? (r.dirty(), {
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
    return new Vo({
      in: e,
      out: r,
      typeName: ce.ZodPipeline
    });
  }
}
class so extends ke {
  _parse(e) {
    const r = this._def.innerType._parse(e), n = (i) => (Qs(i) && (i.value = Object.freeze(i.value)), i);
    return Ys(r) ? r.then((i) => n(i)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
so.create = (t, e) => new so({
  innerType: t,
  typeName: ce.ZodReadonly,
  ...ge(e)
});
Je.lazycreate;
var ce;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(ce || (ce = {}));
const VT = br.create;
mi.create;
Zc.create;
vi.create;
Uc.create;
ga.create;
Wc.create;
Gs.create;
Js.create;
Bc.create;
ii.create;
an.create;
Hc.create;
sr.create;
const $T = Je.create;
Je.strictCreate;
Ks.create;
rf.create;
Xs.create;
Cr.create;
eo.create;
Yc.create;
yi.create;
ta.create;
to.create;
ro.create;
Cn.create;
no.create;
ba.create;
Nr.create;
xr.create;
Nn.create;
Nr.createWithPreprocess;
Vo.create;
const zT = fi`
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
function jy() {
  var i, a;
  const { senalysisBusinessId: t } = t_(), [e, r] = e_(zT);
  return r.generatedOptions = (a = (i = r.data) == null ? void 0 : i.generateAiReply) == null ? void 0 : a.replies, [
    async (s, o, u = { n: 1 }) => {
      try {
        const { data: c } = await e({
          variables: {
            type: s,
            message: o,
            senalysisBusinessId: t,
            n: u.n
          }
        });
        return ((c == null ? void 0 : c.generateAiReply.errors) || []).forEach((f) => {
          console.error(`AI Error: ${f.message}`), Ze.error(f.message, { position: "bottom-right" });
        }), c.generateAiReply.replies;
      } catch {
        return null;
      }
    },
    r
  ];
}
const qT = [
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
], UT = {
  primary: ["sfs-text-white", "sfs-bg-spillover-darkRed", "sfs-hover:bg-spillover-brandRed"],
  secondary: ["sfs-text-slate-700", "sfs-bg-gray-200", "sfs-hover:bg-gray-300"],
  danger: ["sfs-text-white", "sfs-bg-red-500", "sfs-hover:bg-red-600"],
  warning: ["sfs-text-white", "sfs-bg-yellow-500", "sfs-hover:bg-yellow-600"],
  success: ["sfs-text-white", "sfs-bg-green-500", "sfs-hover:bg-green-600"],
  info: ["sfs-text-white", "sfs-bg-blue-500", "sfs-hover:bg-blue-600"]
}, WT = {
  xs: ["sfs-px-1", "sfs-py-0.5", "sfs-text-xs", "sfs-rounded"],
  sm: ["sfs-px-2", "sfs-py-1", "sfs-text-sm", "sfs-rounded"],
  md: ["sfs-px-3", "sfs-py-2", "sfs-text-sm", "sfs-rounded-md"],
  lg: ["sfs-px-3", "sfs-py-2", "sfs-text-lg", "sfs-rounded-lg"]
}, BT = ["sfs-cursor-not-allowed", "sfs-opacity-50"];
function HT(t, e, r, n) {
  const i = [...qT];
  return i.push(...UT[e]), i.push(...WT[r]), t && i.push(...BT), n && i.push(n), i.join(" ");
}
const Vy = oo(function({
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
  className: c,
  // Custom classes. Tip: "flex-row-reverse" to reverse icon and text.
  ...l
  // Any other props to pass to the button
}, f) {
  const d = "button";
  l.disabled = n || u, l.type = i;
  const h = (m) => {
    if (n) {
      m.preventDefault();
      return;
    }
    r && r(m);
  }, p = HT(n, a, s, c);
  let v;
  return u ? v = { name: "spinner", spin: !0 } : v = typeof o == "string" ? { name: o } : o, /* @__PURE__ */ G.jsxs(d, { ref: f, onClick: h, className: p, ...l, children: [
    o && /* @__PURE__ */ G.jsx(pi, { ...v }),
    e
  ] });
});
function $y({ option: t, onClick: e }) {
  const r = () => {
    e && e(t);
  };
  return /* @__PURE__ */ G.jsx("div", { className: `sfs-p-3 sfs-bg-gray-100 sfs-rounded-md sfs-text-gray-600 hover:sfs-bg-gray-200 sfs-transition sfs-duration-200 sfs-text-sm ${e && "sfs-cursor-pointer"} sfs-whitespace-pre-line`, onClick: r, children: t });
}
const QT = $T({
  context: VT().min(5, "Please provide some more context")
});
function YT({ onOptionSelected: t }) {
  const [e, { generatedOptions: r, loading: n }] = jy(), {
    register: i,
    handleSubmit: a,
    formState: { errors: s }
  } = dT({ resolver: ET(QT) }), o = ({ context: c }) => e("post_caption", c, { n: 3 }), u = r || [];
  return /* @__PURE__ */ G.jsxs("form", { onSubmit: a(o), className: "sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border", children: [
    /* @__PURE__ */ G.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-1", children: [
      /* @__PURE__ */ G.jsx("label", { className: "sfs-text-sm sfs-text-gray-700", children: "Give us some context..." }),
      /* @__PURE__ */ G.jsx("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4", children: /* @__PURE__ */ G.jsx("textarea", { className: "sfs-box-border sfs-w-full sfs-h-20 sfs-border sfs-border-gray-300 sfs-rounded-md sfs-p-2", ...i("context") }) }),
      s.context && /* @__PURE__ */ G.jsx("div", { className: "sfs-text-red-500 sfs-text-sm", children: s.context.message })
    ] }),
    /* @__PURE__ */ G.jsx(
      Vy,
      {
        type: "submit",
        disabled: n,
        context: "primary",
        icon: "wand-magic-sparkles",
        loading: n,
        children: "Generate Caption"
      }
    ),
    u.length > 0 && /* @__PURE__ */ G.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-mt-4", children: [
      /* @__PURE__ */ G.jsx("div", { className: "sfs-text-gray-700", children: "Pick an option or try again for new options" }),
      u.map((c, l) => /* @__PURE__ */ G.jsx($y, { option: c, onClick: t }, l))
    ] })
  ] });
}
function nr({ type: t, text: e, onOptionSelected: r, loadingMsg: n, children: i, autoRun: a = !0, retry: s = !0, n: o = 1 }) {
  const [u, { generatedOptions: c, loading: l }] = jy(), f = () => {
    e && e.trim().length > 0 && u(t, e, { n: o });
  };
  return $e(() => {
    a && f();
  }, []), /* @__PURE__ */ G.jsxs("div", { className: "sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border", children: [
    i,
    l ? /* @__PURE__ */ G.jsxs("div", { className: "sfs-text-gray-700 sfs-flex sfs-flex-row sfs-items-center sfs-gap-2", children: [
      /* @__PURE__ */ G.jsx(pi, { name: "spinner", spin: !0 }),
      n || "Loading..."
    ] }) : s && /* @__PURE__ */ G.jsx(
      Vy,
      {
        context: "secondary",
        size: "sm",
        icon: "rotate",
        onClick: f,
        children: "Retry"
      }
    ),
    c == null ? void 0 : c.map((d, h) => /* @__PURE__ */ G.jsx($y, { option: d, onClick: r }, h))
  ] });
}
function ZT({ message: t }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "translate",
      text: t,
      loadingMsg: "Translating...",
      retry: !1
    }
  );
}
function GT({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "spellcheck",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Checking spelling..."
    }
  );
}
function JT({ message: t }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "summarize",
      text: t,
      loadingMsg: "Summarizing...",
      retry: !1
    }
  );
}
function KT({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "improve_writing",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Improving writing..."
    }
  );
}
function XT({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "make_longer",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making text longer..."
    }
  );
}
function eS({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "make_shorter",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making text shorter..."
    }
  );
}
function tS({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "make_more_formal",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making more formal..."
    }
  );
}
function rS({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "make_more_casual",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Making more casual..."
    }
  );
}
function nS({ text: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "continue_writing",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Continuing your text..."
    }
  );
}
function iS({ message: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "review_reply",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Generating reply...",
      n: 3
    }
  );
}
function aS({ message: t, onOptionSelected: e }) {
  return /* @__PURE__ */ G.jsx(
    nr,
    {
      type: "comment_reply",
      text: t,
      onOptionSelected: e,
      loadingMsg: "Generating reply...",
      n: 3
    }
  );
}
const zy = [
  {
    name: "GenerateCaption",
    title: "Generate Caption",
    icon: "file-text",
    component: YT
  },
  {
    name: "GenerateReviewReply",
    title: "Generate Reply",
    icon: "star",
    component: iS
  },
  {
    name: "GenerateCommentReply",
    title: "Generate Reply",
    icon: "reply",
    component: aS
  },
  {
    name: "Translate",
    title: "Translate",
    icon: "language",
    component: ZT
  },
  {
    name: "SpellCheck",
    title: "Fix Spelling & Grammar",
    icon: "spell-check",
    component: GT
  },
  {
    name: "Summarize",
    title: "Summarize",
    icon: "list",
    component: JT
  },
  {
    name: "ImproveWriting",
    title: "Improve Writing",
    icon: "feather",
    component: KT
  },
  {
    name: "MakeLonger",
    title: "Make Longer",
    icon: "circle-plus",
    component: XT
  },
  {
    name: "MakeShorter",
    title: "Make Shorter",
    icon: "circle-minus",
    component: eS
  },
  {
    name: "MakeMoreFormal",
    title: "Make More Formal",
    icon: "user-tie",
    component: tS
  },
  {
    name: "MakeMoreCasual",
    title: "Make More Casual",
    icon: "face-smile-beam",
    component: rS
  },
  {
    name: "ContinueWriting",
    title: "Continue Writing",
    icon: "ellipsis",
    component: nS
  }
], sS = zy.map((t) => t.name);
function oS({ message: t, text: e, onOptionSelected: r, tools: n }) {
  n ?? (n = sS);
  const i = zy.filter((a) => n.includes(a.name)).map((a) => /* @__PURE__ */ G.jsx(xy, { title: a.title, icon: a.icon, children: /* @__PURE__ */ G.jsx(a.component, { message: t, text: e, onOptionSelected: r }) }, a.name));
  return /* @__PURE__ */ G.jsx(Q2, { title: "AI Helpers", icon: "wand-magic-sparkles", children: i });
}
function hS({ message: t, text: e, onOptionSelected: r, className: n, children: i, tools: a }) {
  return /* @__PURE__ */ G.jsxs(Ou, { children: [
    /* @__PURE__ */ G.jsx(Ou.Button, { className: `sfs-border-0 sfs-bg-transparent sfs-cursor-pointer focus:sfs-outline-none ${n || ""}`, title: "AI Helpers", children: i || /* @__PURE__ */ G.jsx(pi, { name: "wand-magic-sparkles", className: "sfs-text-gray-700", size: "lg" }) }),
    /* @__PURE__ */ G.jsx(
      w2,
      {
        enter: "sfs-transition sfs-ease-out sfs-duration-200",
        enterFrom: "sfs-opacity-0 sfs-translate-y-1",
        enterTo: "sfs-opacity-100 sfs-translate-y-0",
        leave: "sfs-transition sfs-ease-in sfs-duration-150",
        leaveFrom: "sfs-opacity-100 sfs-translate-y-0",
        leaveTo: "sfs-opacity-0 sfs-translate-y-1",
        children: /* @__PURE__ */ G.jsx(Ou.Panel, { anchor: { to: "bottom end", gap: "10px" }, className: "sfs-absolute sfs-z-30 sfs-w-80 sfs-max-h-96 sfs-border sfs-border-gray-300 sfs-border-solid sfs-rounded-md sfs-shadow-sm sfs-bg-white sfs-overflow-y-auto sfs-right-4 sfs-mt-2", children: /* @__PURE__ */ G.jsx(
          oS,
          {
            tools: a,
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
  oS as AITextHelpers,
  hS as AITextHelpersButton,
  fS as SpilloverProvider
};
