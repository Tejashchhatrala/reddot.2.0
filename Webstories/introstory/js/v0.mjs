self.AMP_CONFIG = {
  v: "012301261900000",
  type: "production",
  "allow-doc-opt-in": ["amp-next-page"],
  "allow-url-opt-in": [],
  canary: 0,
  a4aProfilingRate: 0.01,
  doubleclickSraExp: 0.01,
  doubleclickSraReportExcludedBlock: 0.1,
  flexAdSlots: 0.05,
  "flexible-bitrate": 0.1,
  "ios-fixed-no-transfer": 0,
  "story-ad-placements": 0.01,
  "story-disable-animations-first-page": 1,
  "story-load-inactive-outside-viewport": 1,
  "amp-sticky-ad-to-amp-ad-v4": 0,
  "story-video-cache-apply-audio": 0,
  "amp-story-subscriptions": 1,
  esm: 1,
};
/*AMP_CONFIG*/ self.AMP_EXP = {
  "flexible-bitrate": 0.1,
  "amp-story-first-page-max-bitrate": 0.3,
  "story-disable-animations-first-page": 1,
  "story-load-first-page-only": 1,
  "story-load-inactive-outside-viewport": 1,
  "story-ad-page-outlink": 0.02,
  "amp-geo-ssr": 1,
  "story-remote-localization": 1,
  "amp-story-subscriptions": 1,
  "attribution-reporting": 0,
}; /*AMP_EXP*/
self, (self.AMP = self.AMP || []);
try {
  (AMP._ = AMP._ || {}),
    (self.AMP && !Array.isArray(self.AMP)) ||
      (() => {
        var t,
          i = class {
            constructor() {
              this.bt = new s();
            }
            abort() {
              if (!this.bt.gt && ((this.bt.gt = !0), this.bt.vt)) {
                const t = {
                  type: "abort",
                  bubbles: !1,
                  cancelable: !1,
                  target: this.bt,
                  currentTarget: this.bt,
                };
                this.bt.vt(t);
              }
            }
            get signal() {
              return this.bt;
            }
          },
          s = class {
            constructor() {
              (this.gt = !1), (this.vt = null);
            }
            get aborted() {
              return this.gt;
            }
            get onabort() {
              return this.vt;
            }
            set onabort(t) {
              this.vt = t;
            }
          };
        function e() {
          return t || (t = Promise.resolve(void 0));
        }
        var n = class {
          constructor() {
            this.promise = new Promise((t, i) => {
              (this.resolve = t), (this.reject = i);
            });
          }
        };
        function r(t) {
          return new Promise((i) => {
            i(t());
          });
        }
        function h(t) {
          const i = Object.getOwnPropertyDescriptor(t, "message");
          if (null != i && i.writable) return t;
          const { message: s, stack: e } = t,
            n = new Error(s);
          for (const i in t) n[i] = t[i];
          return (n.stack = e), n;
        }
        function o(t) {
          let i = null,
            s = "";
          for (const t of arguments)
            t instanceof Error && !i ? (i = h(t)) : (s && (s += " "), (s += t));
          return (
            i ? s && (i.message = s + ": " + i.message) : (i = new Error(s)), i
          );
        }
        function u(t) {
          var i, s;
          null === (i = (s = self).__AMP_REPORT_ERROR) ||
            void 0 === i ||
            i.call(s, t);
        }
        function l(t) {
          const i = o.apply(null, arguments);
          setTimeout(() => {
            throw (u(i), i);
          });
        }
        function c(t) {
          const i = o.apply(null, arguments);
          return (i.expected = !0), i;
        }
        var { hasOwnProperty: a, toString: d } = Object.prototype;
        function f(t) {
          return "[object Object]" === d.call(t);
        }
        function p(t) {
          const i = Object.create(null);
          return t && Object.assign(i, t), i;
        }
        function m(t, i) {
          return a.call(t, i);
        }
        function _(t) {
          const i = p();
          for (const s in t) {
            if (!m(t, s)) continue;
            const e = t[s];
            i[s] = f(e) ? _(e) : e;
          }
          return i;
        }
        function A(t, i, s) {
          return (
            i in t
              ? Object.defineProperty(t, i, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[i] = s),
            t
          );
        }
        function P(t, i) {
          var s = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(t);
            i &&
              (e = e.filter(function (i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable;
              })),
              s.push.apply(s, e);
          }
          return s;
        }
        function g(t) {
          for (var i = 1; i < arguments.length; i++) {
            var s = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? P(Object(s), !0).forEach(function (i) {
                  A(t, i, s[i]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
              : P(Object(s)).forEach(function (i) {
                  Object.defineProperty(
                    t,
                    i,
                    Object.getOwnPropertyDescriptor(s, i)
                  );
                });
          }
          return t;
        }
        var { isArray: v } = Array;
        function E(t) {
          return v(t) ? t : [t];
        }
        function T(t, i) {
          const s = [];
          let e = 0;
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            i(r, n, t) ? s.push(r) : (e < n && (t[e] = r), e++);
          }
          return e < t.length && (t.length = e), s;
        }
        function M(t, i) {
          for (let s = 0; s < t.length; s++) if (i(t[s], s, t)) return s;
          return -1;
        }
        function I(t, i) {
          const s = t.indexOf(i);
          return -1 != s && (t.splice(s, 1), !0);
        }
        function R(t, i) {
          const s = t.length - i.length;
          return s >= 0 && t.indexOf(i, s) == s;
        }
        function y(t) {
          return "string" == typeof t;
        }
        function b(t) {
          return 1 == (null == t ? void 0 : t.nodeType);
        }
        function w(t) {
          return "number" == typeof t && isFinite(t);
        }
        var V = "​​​",
          S = "​​​​";
        function x(t) {
          return b(t)
            ? (t = t).tagName.toLowerCase() + (t.id ? `#${t.id}` : "")
            : t;
        }
        function O(t) {
          return t.indexOf(V) >= 0;
        }
        function C(t) {
          return t.replace(V, "");
        }
        function k(t, i, s = "Assertion failed", e) {
          var n, r;
          if (i) return i;
          t && -1 == s.indexOf(t) && (s += t);
          let h = 3;
          const o = s.split("%s");
          let u = o.shift();
          const l = [u];
          for (; o.length; ) {
            const t = arguments[h++],
              i = o.shift();
            (u += x(t) + i), l.push(t, i.trim());
          }
          const c = new Error(u);
          throw (
            ((c.messageArray = T(l, (t) => "" !== t)),
            null === (n = (r = self).__AMP_REPORT_ERROR) ||
              void 0 === n ||
              n.call(r, c),
            c)
          );
        }
        function N(t, i, s, e, n) {
          return v(n) ? t(s, n.concat([i])) : t(s, `${n || e}: %s`, i), i;
        }
        function D(t, i, s, e, n, r, h, o, u, l, c) {
          return t;
        }
        function L(t, i) {
          return t;
        }
        function U(t, i) {
          return t;
        }
        function $(t, i) {
          return t;
        }
        function F(t, i, s, e, n, r, h, o, u, l, c) {
          return k(V, t, i, s, e, n, r, h, o, u, l, c);
        }
        function B(t) {
          return JSON.parse(t);
        }
        function H(t) {
          const i = new Uint8Array(t.length);
          for (let s = 0; s < t.length; s++) {
            const e = t.charCodeAt(s);
            D(e <= 255), (i[s] = e);
          }
          return i;
        }
        function j(t, i) {
          let { crypto: s } = t;
          const e = new Uint8Array(i);
          return s.getRandomValues(e), e;
        }
        function z(t, i, s) {
          let e = 0,
            n = null;
          function r(r) {
            (n = null), (e = t.setTimeout(h, s)), i.apply(null, r);
          }
          function h() {
            (e = 0), n && r(n);
          }
          return function (...t) {
            e ? (n = t) : r(t);
          };
        }
        function G(t, i, s) {
          let e = 0,
            n = 0,
            r = null;
          function h() {
            e = 0;
            const o = s - (t.Date.now() - n);
            var u;
            o > 0
              ? (e = t.setTimeout(h, o))
              : ((u = r), (r = null), i.apply(null, u));
          }
          return function (...i) {
            (n = t.Date.now()), (r = i), e || (e = t.setTimeout(h, s));
          };
        }
        var q = ["javascript:", "data:", "vbscript:"],
          W = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function K(t, i = "") {
          try {
            return decodeURIComponent(t);
          } catch (t) {
            return i;
          }
        }
        function Y(t) {
          const i = p();
          if (!t) return i;
          let s;
          for (; (s = W.exec(t)); ) {
            const t = K(s[1], s[1]),
              e = s[2] ? K(s[2].replace(/\+/g, " "), s[2]) : "";
            i[t] = e;
          }
          return i;
        }
        function Q(t) {
          const { location: i } = t || self;
          return Y(i.originalHash || i.hash);
        }
        var J = (t) => (self.AMP_CONFIG ? self.AMP_CONFIG[t] : null),
          X =
            ("string" == typeof J("cdnProxyRegex")
              ? new RegExp(J("cdnProxyRegex"))
              : J("cdnProxyRegex")) ||
            /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function Z(t) {
          if (!self.document || !self.document.head) return null;
          if (self.location && X.test(self.location.origin)) return null;
          const i = self.document.head.querySelector(`meta[name="${t}"]`);
          return (i && i.getAttribute("content")) || null;
        }
        var tt = J("thirdPartyUrl") || "https://3p.ampproject.net",
          it = J("thirdPartyFrameHost") || "ampproject.net",
          st =
            ("string" == typeof J("thirdPartyFrameRegex")
              ? new RegExp(J("thirdPartyFrameRegex"))
              : J("thirdPartyFrameRegex")) || /^d-\d+\.ampproject\.net$/,
          et = J("cdnUrl") || Z("runtime-host") || "https://cdn.ampproject.org",
          nt = /^https?:\/\/localhost(:\d+)?$/,
          rt =
            J("errorReportingUrl") ||
            "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
          ht =
            J("betaErrorReportingUrl") ||
            "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
          ot = J("localDev") || !1,
          ut = [
            /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
            /(^|\.)gmail\.(com|dev)$/,
          ],
          lt = J("geoApiUrl") || Z("amp-geo-api"),
          ct = "";
        function at(t) {
          const i = t || self;
          return i.__AMP_MODE
            ? i.__AMP_MODE
            : (i.__AMP_MODE = (function (t) {
                return {
                  localDev: !1,
                  development: ft(t, Q(t)),
                  esm: !0,
                  test: !1,
                  rtvVersion: dt(t),
                  ssrReady: !1,
                };
              })(i));
        }
        function dt(t) {
          var i;
          return (
            ct ||
              (ct =
                (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) ||
                "012301261900000"),
            ct
          );
        }
        function ft(t, i) {
          const s = i || Q(t);
          return (
            ["1", "actions", "amp", "amp4ads", "amp4email"].includes(
              s.development
            ) || !!t.AMP_DEV_MODE
          );
        }
        var pt = () => {},
          mt = void 0;
        function _t(t) {
          mt = t;
        }
        var At = (t, i) =>
            i.reduce(
              (t, i) => `${t}&s[]=${Pt(i)}`,
              `https://log.amp.dev/?v=012301261900000&id=${encodeURIComponent(
                t
              )}`
            ),
          Pt = (t) => encodeURIComponent(String(x(t))),
          gt = (t) => parseInt(Q(t).log, 10);
        self.__AMP_LOG = self.__AMP_LOG || {
          user: null,
          dev: null,
          userForEmbed: null,
        };
        var vt = self.__AMP_LOG,
          Et = null;
        function Tt(t, i) {
          if (!Et) throw new Error("failed to call initLogConstructor");
          return new Et(self, t, i);
        }
        function Mt(t) {
          return (
            vt.user || (vt.user = It(V)),
            (function (t, i) {
              return i && i.ownerDocument.defaultView != t;
            })(vt.user.win, t)
              ? vt.userForEmbed || (vt.userForEmbed = It(S))
              : vt.user
          );
        }
        function It(t) {
          return Tt((t, i) => (i || t >= 1 ? 4 : 2), t);
        }
        function Rt() {
          return vt.dev || (vt.dev = Tt((t) => (t >= 3 ? 4 : t >= 2 ? 3 : 0)));
        }
        function yt(t, i, s, e, n, r, h, o, u, l, c) {
          return t;
        }
        function bt(t, i, s, e, n, r, h, o, u, l, c) {
          return Mt().assert(t, i, s, e, n, r, h, o, u, l, c);
        }
        function wt(t) {
          return (t.ownerDocument || t).defaultView;
        }
        function Vt(t, i) {
          return t.replace(/^|,/g, `$&${i} `);
        }
        function St(t) {
          return CSS.escape(t);
        }
        function xt(t) {
          D(/^[\w-]+$/.test(t));
        }
        function Ot(t, i) {
          return t.querySelector(Vt(i, ":scope"));
        }
        function Ct(t, i) {
          return t.closest(i);
        }
        function kt(t, i) {
          for (let s = t.lastElementChild; s; s = s.previousElementSibling)
            if (i(s)) return s;
          return null;
        }
        function Nt(t, i) {
          return xt(i), Ot(t, `> [${i}]`);
        }
        function Dt(t) {
          return (
            !!(function (t) {
              let i;
              return (
                y(t) ? (i = t) : b(t) && (i = t.tagName),
                !!i && i.toLowerCase().startsWith("i-")
              );
            })(t) ||
            (t.nodeType === Node.ELEMENT_NODE &&
              (L(t),
              t.hasAttribute("placeholder") ||
                t.hasAttribute("fallback") ||
                t.hasAttribute("overflow")))
          );
        }
        var Lt = { bubbles: !0, cancelable: !0 };
        function Ut(t, i, s) {
          if (i(t)) s();
          else {
            const e = new (wt(t).MutationObserver)(() => {
              i(t) && (e.disconnect(), s());
            });
            e.observe(t, { childList: !0 });
          }
        }
        function $t(t, i) {
          Ut(t.documentElement, () => !!t.body, i);
        }
        function Ft(t) {
          return new Promise((i) => $t(t, i));
        }
        function Bt(t) {
          var i;
          null === (i = t.parentElement) || void 0 === i || i.removeChild(t);
        }
        function Ht(t) {
          const i = t.isConnected;
          if (void 0 !== i) return i;
          let s = t;
          for (; (s = jt(s)), s.host; ) s = s.host;
          return s.nodeType === Node.DOCUMENT_NODE;
        }
        function jt(t) {
          if (Node.prototype.getRootNode) return t.getRootNode();
          let i;
          for (
            i = t;
            i.parentNode &&
            (!(s = i) ||
              ("I-AMPHTML-SHADOW-ROOT" != s.tagName &&
                (11 != s.nodeType ||
                  "[object ShadowRoot]" !==
                    Object.prototype.toString.call(s))));
            i = i.parentNode
          );
          var s;
          return i;
        }
        function zt(t, i) {
          let s = t;
          do {
            if (s.nextSibling) return !0;
          } while ((s = s.parentNode) && s != i);
          return !1;
        }
        function Gt(t) {
          try {
            t.focus();
          } catch (t) {}
        }
        function qt(t) {
          return t.parent && t.parent != t;
        }
        function Wt(t, i, s, e) {
          const n = s || {};
          D(t.ownerDocument);
          const r = t.ownerDocument.createEvent("Event");
          r.data = n;
          const { bubbles: h, cancelable: o } = e || Lt;
          r.initEvent(i, h, o), t.dispatchEvent(r);
        }
        function Kt(t, i) {
          return i !== t && t.contains(i);
        }
        function Yt(t) {
          return t.hasAttribute("i-amphtml-ssr");
        }
        function Qt(t, i) {
          const s = t.head.querySelector("script[nonce]");
          if (s) {
            const t = s.nonce || s.getAttribute("nonce");
            i.setAttribute("nonce", null != t ? t : "");
          }
        }
        function Jt(t, i, s, e) {
          return {
            left: t,
            top: i,
            width: s,
            height: e,
            bottom: i + e,
            right: t + s,
            x: t,
            y: i,
          };
        }
        function Xt(t, i, s) {
          return Jt(
            t.left - t.width * i,
            t.top - t.height * s,
            t.width * (1 + 2 * i),
            t.height * (1 + 2 * s)
          );
        }
        function Zt(t, i, s) {
          return (0 == i && 0 == s) || (0 == t.width && 0 == t.height)
            ? t
            : Jt(t.left + i, t.top + s, t.width, t.height);
        }
        function ti(t) {
          return (
            !t.IntersectionObserver ||
            !t.IntersectionObserverEntry ||
            !!t.IntersectionObserver._stub ||
            !(function (t) {
              try {
                return (
                  new t.IntersectionObserver(() => {}, { root: t.document }), !0
                );
              } catch (t) {
                return !1;
              }
            })(t) ||
            (function (t) {
              return /apple/i.test(t.navigator.vendor);
            })(t)
          );
        }
        var ii = class {
          constructor(t, i) {
            (this.wt = t),
              (this.yt = g({ root: null, rootMargin: "0px 0px 0px 0px" }, i)),
              (this.jt = []),
              (this.At = null),
              ii._upgraders.push(this.xt.bind(this));
          }
          get root() {
            return this.At ? this.At.root : this.yt.root || null;
          }
          get rootMargin() {
            return this.At ? this.At.rootMargin : this.yt.rootMargin;
          }
          get thresholds() {
            return this.At
              ? this.At.thresholds
              : [].concat(this.yt.threshold || 0);
          }
          disconnect() {
            this.At ? this.At.disconnect() : (this.jt.length = 0);
          }
          takeRecords() {
            return this.At ? this.At.takeRecords() : [];
          }
          observe(t) {
            this.At
              ? this.At.observe(t)
              : -1 == this.jt.indexOf(t) && this.jt.push(t);
          }
          unobserve(t) {
            if (this.At) this.At.unobserve(t);
            else {
              const i = this.jt.indexOf(t);
              -1 != i && this.jt.splice(i, 1);
            }
          }
          xt(t) {
            const i = new t(this.wt, this.yt);
            this.At = i;
            for (const t of this.jt) i.observe(t);
            this.jt.length = 0;
          }
        };
        ii._upgraders = [];
        var { hasOwnProperty: si } = Object.prototype;
        function ei(t) {
          return !t.ResizeObserver || !!t.ResizeObserver._stub;
        }
        var ni,
          ri = class {
            constructor(t) {
              (this.wt = t),
                (this.jt = []),
                (this.At = null),
                ri._upgraders.push(this.xt.bind(this));
            }
            disconnect() {
              this.At ? this.At.disconnect() : (this.jt.length = 0);
            }
            observe(t) {
              this.At
                ? this.At.observe(t)
                : -1 == this.jt.indexOf(t) && this.jt.push(t);
            }
            unobserve(t) {
              if (this.At) this.At.unobserve(t);
              else {
                const i = this.jt.indexOf(t);
                -1 != i && this.jt.splice(i, 1);
              }
            }
            xt(t) {
              const i = new t(this.wt);
              this.At = i;
              for (const t of this.jt) i.observe(t);
              this.jt.length = 0;
            }
          };
        (ri._upgraders = []),
          self.document &&
            (ti((ni = self)) &&
              (function (t) {
                if (!t.IntersectionObserver)
                  return (
                    (t.IntersectionObserver = ii),
                    void (t.IntersectionObserver._stub = ii)
                  );
                const i = t.IntersectionObserver;
                (t.IntersectionObserver = (function (t, i) {
                  return function (s, e) {
                    var n;
                    return 9 ===
                      (null == e || null === (n = e.root) || void 0 === n
                        ? void 0
                        : n.nodeType)
                      ? new i(s, e)
                      : new t(s, e);
                  };
                })(t.IntersectionObserver, ii)),
                  (t.IntersectionObserver._stub = ii),
                  (t.IntersectionObserver._native = i);
              })(ni),
            (function (t) {
              t.IntersectionObserverEntry &&
                !("isIntersecting" in t.IntersectionObserverEntry.prototype) &&
                Object.defineProperty(
                  t.IntersectionObserverEntry.prototype,
                  "isIntersecting",
                  {
                    enumerable: !0,
                    configurable: !0,
                    get() {
                      return this.intersectionRatio > 0;
                    },
                  }
                );
            })(ni),
            (function (t) {
              ei(t) &&
                (function (t) {
                  t.ResizeObserver ||
                    ((t.ResizeObserver = ri), (t.ResizeObserver._stub = ri));
                })(t);
            })(self),
            (function (t) {
              t.AbortController ||
                (Object.defineProperty(t, "AbortController", {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: i,
                }),
                Object.defineProperty(t, "AbortSignal", {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: s,
                }));
            })(self));
        var hi = "cls",
          oi = "clstu",
          ui = "cls-1",
          li = "pc",
          ci = "building",
          ai = "mounting",
          di = "loading",
          fi = "complete",
          pi = "error";
        function mi(t) {
          return t.readyState != di && "uninitialized" != t.readyState;
        }
        function _i(t) {
          return t.readyState == fi;
        }
        function Ai(t, i) {
          Pi(t, mi, i);
        }
        function Pi(t, i, s) {
          let e = i(t);
          if (e) s(t);
          else {
            const n = () => {
              i(t) &&
                (e || ((e = !0), s(t)),
                t.removeEventListener("readystatechange", n));
            };
            t.addEventListener("readystatechange", n);
          }
        }
        function gi(t) {
          return new Promise((i) => {
            Ai(t, i);
          });
        }
        function vi(t) {
          return new Promise((i) => {
            Pi(t, _i, i);
          });
        }
        var Ei = ["amp-mustache"];
        function Ti(t) {
          if (!t) return null;
          const i = t.match(
              /^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)(?:\?ssr-css=[0|1])?$/i
            ),
            s = i ? i[2] : void 0,
            e = i ? i[3] : void 0;
          return s && e ? { extensionId: s, extensionVersion: e } : null;
        }
        function Mi(t, i, s) {
          const e = t.document.createElement("script");
          (e.async = !0),
            Ri(i)
              ? (s = "")
              : e.setAttribute(
                  Ei.indexOf(i) >= 0 ? "custom-template" : "custom-element",
                  i
                ),
            e.setAttribute("data-script", i),
            e.setAttribute("i-amphtml-inserted", ""),
            e.setAttribute("type", "module"),
            Qt(t.document, e),
            e.setAttribute("crossorigin", "anonymous");
          const n = (function (t, i, s, e) {
            return `${et}/rtv/${at().rtvVersion}/v0/${i}${
              s ? "-" + s : ""
            }.mjs`;
          })(t.location, i, s);
          return (e.src = n), e;
        }
        function Ii(t, i, s, e, n = !0) {
          const r =
              ":not([i-amphtml-loaded-new-version])" +
              (n ? "" : ":not([i-amphtml-inserted])"),
            h = t.document.head.querySelectorAll(`script[src*="/${i}-"]${r}`),
            o = [];
          for (let t = 0; t < h.length; t++) {
            const n = h[t],
              r = Ti(n.src);
            if (!r) continue;
            const { extensionId: u, extensionVersion: l } = r;
            u == i && (Ri(i) || l == s || ("latest" == l && e)) && o.push(n);
          }
          return o;
        }
        function Ri(t) {
          return t.startsWith("_");
        }
        function yi(t, i, s, e) {
          Ui((t = Ci(t)), t, i, s), e && Li(t, i);
        }
        function bi(t, i, s, e) {
          const n = Ni(t),
            r = Di(n);
          Ui(r, n, i, s), e && Li(r, i);
        }
        function wi(t, i) {
          return Li((t = Ci(t)), i);
        }
        function Vi(t, i) {
          return Li(Di(Ni(t)), i);
        }
        function Si(t, i) {
          const s = Di(Ni(t));
          return zi(s, i) ? Li(s, i) : null;
        }
        function xi(t, i) {
          return $i(Di(t), i);
        }
        function Oi(t, i) {
          return Fi(Di(t), i);
        }
        function Ci(t) {
          return t.__AMP_TOP || (t.__AMP_TOP = t);
        }
        function ki(t, i) {
          const s = (t.ownerDocument || t).defaultView,
            e = i || Ci(s);
          if (s && s != e && Ci(s) == e)
            try {
              return s.frameElement;
            } catch (t) {}
          return null;
        }
        function Ni(t) {
          return t.nodeType
            ? (function (t) {
                return wi(t, "ampdoc");
              })(wt(t)).getAmpDoc(t)
            : t;
        }
        function Di(t) {
          const i = Ni(t);
          return i.isSingleDoc() ? i.win : i;
        }
        function Li(t, i) {
          yt(zi(t, i));
          const s = Bi(t)[i];
          return (
            s.obj ||
              (yt(s.ctor),
              yt(s.context),
              (s.obj = new s.ctor(s.context)),
              yt(s.obj),
              (s.context = null),
              s.resolve && s.resolve(s.obj)),
            s.obj
          );
        }
        function Ui(t, i, s, e, n, r) {
          const h = Bi(t);
          let o = h[s];
          o ||
            (o = h[s] =
              {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                sharedInstance: r || !1,
              }),
            (!n && o.ctor) ||
              ((o.ctor = e),
              (o.context = i),
              (o.sharedInstance = r || !1),
              o.resolve && Li(t, s));
        }
        function $i(t, i) {
          const s = Fi(t, i);
          if (s) return s;
          const e = Bi(t);
          return (
            (e[i] = (function () {
              const t = new n(),
                { promise: i, reject: s, resolve: e } = t;
              return (
                i.catch(() => {}),
                {
                  obj: null,
                  promise: i,
                  resolve: e,
                  reject: s,
                  context: null,
                  ctor: null,
                }
              );
            })()),
            e[i].promise
          );
        }
        function Fi(t, i) {
          const s = Bi(t)[i];
          return s
            ? s.promise
              ? s.promise
              : (Li(t, i), (s.promise = Promise.resolve(s.obj)))
            : null;
        }
        function Bi(t) {
          let i = t.__AMP_SERVICES;
          return i || (i = t.__AMP_SERVICES = {}), i;
        }
        function Hi(t) {
          return "function" == typeof t.dispose;
        }
        function ji(t, i) {
          if (Hi(i))
            try {
              (function (t) {
                return yt(Hi(t)), t;
              })(i).dispose();
            } catch (i) {
              Rt().error("SERVICE", "failed to dispose service", t, i);
            }
        }
        function zi(t, i) {
          const s = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
          return !(!s || !s.ctor);
        }
        function Gi(t, i, s, e) {
          return qi(t, i, s, e).then((t) =>
            (function (t, i, s) {
              return bt(
                t,
                "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
                i,
                s,
                s,
                s
              );
            })(t, i, s)
          );
        }
        function qi(t, i, s, e) {
          const n = Oi(t, i);
          if (n) return n;
          const r = Ni(t);
          return r
            .whenExtensionsKnown()
            .then(() => {
              const t = r.getExtensionVersion(s);
              return t ? wi(r.win, "extensions").waitForExtension(s, t) : null;
            })
            .then((s) => (s ? (e ? Oi(t, i) : xi(t, i)) : null));
        }
        var Wi,
          Ki = (t) => qi(t, "access", "amp-access"),
          Yi = (t) => qi(t, "subscriptions", "amp-subscriptions"),
          Qi = (t) => Si(t, "action"),
          Ji = (t) => Gi(t, "activity", "amp-analytics"),
          Xi = (t) => Ni(t),
          Zi = (t) => wi(t, "ampdoc"),
          ts = (t) =>
            (function (t, i, s) {
              const e = Si(t, i);
              return e ? Promise.resolve(e) : qi(t, i, "amp-bind");
            })(t, "bind"),
          is = (t) => xi(t, "cid"),
          ss = (t) => wi(t, "crypto"),
          es = (t) => Vi(t, "documentInfo").get(),
          ns = (t) => wi(t, "extensions"),
          rs = (t) => Vi(t, "history"),
          hs = (t) => Vi(t, "mutator"),
          os = (t) => wi(t, "performance"),
          us = (t) => wi(t, "platform"),
          ls = (t) => wi(t, "preconnect"),
          cs = (t) => Vi(t, "resources"),
          as = (t) => xi(t, "storage"),
          ds = (t) =>
            (function (t, i) {
              return Li(t, "timer");
            })(t),
          fs = (t) => Si(t, "url-replace"),
          ps = (t) => qi(t, "geo", "amp-geo", !0),
          ms = (t) => Si(t, "url"),
          _s = (t) => Vi(t, "viewer"),
          As = (t) => wi(t, "vsync"),
          Ps = (t) => Vi(t, "viewport"),
          gs = (t) => wi(t, "xhr"),
          vs = {
            PRERENDER: "prerender",
            PREVIEW: "preview",
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PAUSED: "paused",
            INACTIVE: "inactive",
          },
          Es = class {
            constructor() {
              this.Fn = null;
            }
            add(t) {
              return (
                this.Fn || (this.Fn = []),
                this.Fn.push(t),
                () => {
                  this.remove(t);
                }
              );
            }
            remove(t) {
              this.Fn && I(this.Fn, t);
            }
            removeAll() {
              this.Fn && (this.Fn.length = 0);
            }
            fire(t) {
              if (this.Fn) for (const i of this.Fn.slice()) i(t);
            }
            getHandlerCount() {
              var t, i;
              return null !==
                (t =
                  null === (i = this.Fn) || void 0 === i ? void 0 : i.length) &&
                void 0 !== t
                ? t
                : 0;
            }
          },
          Ts = class {
            constructor() {
              (this.Un = p()), (this.ti = null);
            }
            get(t) {
              const i = this.Un[t];
              return null == i ? null : i;
            }
            whenSignal(t) {
              var i;
              let s = null === (i = this.ti) || void 0 === i ? void 0 : i[t];
              if (!s) {
                const i = this.Un[t];
                (s =
                  null != i
                    ? {
                        promise:
                          "number" == typeof i
                            ? Promise.resolve(i)
                            : Promise.reject(i),
                      }
                    : new n()),
                  this.ti || (this.ti = p()),
                  (this.ti[t] = s);
              }
              return s.promise;
            }
            signal(t, i) {
              var s;
              if (null != this.Un[t]) return;
              const e = null != i ? i : Date.now();
              this.Un[t] = e;
              const n = null === (s = this.ti) || void 0 === s ? void 0 : s[t];
              null != n &&
                n.resolve &&
                (n.resolve(e), (n.resolve = void 0), (n.reject = void 0));
            }
            rejectSignal(t, i) {
              var s;
              if (null != this.Un[t]) return;
              this.Un[t] = i;
              const e = null === (s = this.ti) || void 0 === s ? void 0 : s[t];
              null != e &&
                e.reject &&
                (e.reject(i),
                e.promise.catch(() => {}),
                (e.resolve = void 0),
                (e.reject = void 0));
            }
            reset(t) {
              var i;
              this.Un[t] && delete this.Un[t];
              const s = null === (i = this.ti) || void 0 === i ? void 0 : i[t];
              s && !s.resolve && delete this.ti[t];
            }
          },
          Ms = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
          Is = { getPropertyPriority: () => "", getPropertyValue: () => "" };
        function Rs(t) {
          const i = t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
          return Ms.some((t) => i.startsWith(t + "-")) ? `-${i}` : i;
        }
        function ys(t, i, s) {
          if (i.startsWith("--")) return i;
          Wi || (Wi = p());
          let e = Wi[i];
          if (!e || s) {
            if (((e = i), void 0 === t[i])) {
              const s = (function (t) {
                  return t.charAt(0).toUpperCase() + t.slice(1);
                })(i),
                n = (function (t, i) {
                  for (let s = 0; s < Ms.length; s++) {
                    const e = Ms[s] + i;
                    if (void 0 !== t[e]) return e;
                  }
                  return "";
                })(t, s);
              void 0 !== t[n] && (e = n);
            }
            s || (Wi[i] = e);
          }
          return e;
        }
        function bs(t, i) {
          const { style: s } = t;
          for (const t in i)
            s.setProperty(Rs(ys(s, t)), String(i[t]), "important");
        }
        function ws(t, i, s, e, n) {
          const r = ys(t.style, i, n);
          if (!r) return;
          const h = e ? s + e : s;
          t.style.setProperty(Rs(r), h);
        }
        function Vs(t, i) {
          for (const s in i) ws(t, s, i[s]);
        }
        function Ss(t, i) {
          void 0 === i && (i = t.hasAttribute("hidden")),
            i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "");
        }
        function xs(t) {
          return `${t}px`;
        }
        function Os(t, i) {
          return t.getComputedStyle(i) || Is;
        }
        function Cs(t) {
          const i = t[ys(t, "visibilityState", !0)];
          if (i) return i;
          const s = ys(t, "hidden", !0);
          return s in t && t[s] ? vs.HIDDEN : vs.VISIBLE;
        }
        function ks(t, i) {
          if (!t.addEventListener) return;
          const s = Ds(t);
          s && t.addEventListener(s, i);
        }
        function Ns(t, i) {
          if (!t.removeEventListener) return;
          const s = Ds(t);
          s && t.removeEventListener(s, i);
        }
        function Ds(t) {
          const i = ys(t, "hidden", !0),
            s = i.indexOf("Hidden");
          return -1 != s
            ? i.substring(0, s) + "Visibilitychange"
            : "visibilitychange";
        }
        var Ls = class {
            static getTop(t) {
              return t.top;
            }
            static getLocation(t) {
              return t.location;
            }
            static getDocumentReferrer(t) {
              return t.document.referrer;
            }
            static getHostname(t) {
              return t.location.hostname;
            }
            static getUserAgent(t) {
              return t.navigator.userAgent;
            }
            static getUserLanguage(t) {
              return t.navigator.userLanguage || t.navigator.language;
            }
            static getDevicePixelRatio() {
              return self.devicePixelRatio || 1;
            }
            static getSendBeacon(t) {
              if (t.navigator.sendBeacon)
                return t.navigator.sendBeacon.bind(t.navigator);
            }
            static getXMLHttpRequest(t) {
              return t.XMLHttpRequest;
            }
            static getImage(t) {
              return t.Image;
            }
          },
          Us = "__AMP__",
          $s = "-ampdoc-ext-known",
          Fs = "-ampdoc-first-visible",
          Bs = "-ampdoc-next-visible",
          Hs = "-ampdoc-first-previewed",
          js = class {
            constructor(t, i, s) {
              (this.win = t),
                (this.ii = p()),
                (this.si = i),
                (this.ei = (s && s.signals) || new Ts()),
                (this.ni = (s && s.params) || p()),
                (this.ri = null),
                (this.hi = {});
              const e = this.ni.visibilityState;
              var n;
              yt(
                !e ||
                  "prerender" === (n = e) ||
                  "preview" === n ||
                  "visible" === n ||
                  "hidden" === n ||
                  "paused" === n ||
                  "inactive" === n
              ),
                (this.oi = (s && s.visibilityState) || e || null),
                (this.D = null),
                (this.ui = new Es()),
                (this.li = null),
                (this.ci = []);
              const r = this.ai.bind(this);
              this.si && this.ci.push(this.si.onVisibilityChanged(r)),
                ks(this.win.document, r),
                this.ci.push(() => Ns(this.win.document, r)),
                this.ai();
            }
            dispose() {
              (function (t) {
                const i = Bi(t);
                for (const t in i) {
                  if (!Object.prototype.hasOwnProperty.call(i, t)) continue;
                  const s = i[t];
                  s.sharedInstance ||
                    (s.obj
                      ? ji(t, s.obj)
                      : s.promise && s.promise.then((i) => ji(t, i)));
                }
              })(this),
                this.ci.forEach((t) => t());
            }
            isSingleDoc() {
              return yt(null);
            }
            getParent() {
              return this.si;
            }
            signals() {
              return this.ei;
            }
            getParam(t) {
              const i = this.ni[t];
              return null == i ? null : i;
            }
            getMeta() {
              return (
                this.ri ||
                  ((this.ri = p()),
                  this.win.document.head
                    .querySelectorAll("meta[name]")
                    .forEach((t) => {
                      const i = t.getAttribute("name"),
                        s = t.getAttribute("content");
                      i &&
                        null !== s &&
                        void 0 === this.ri[i] &&
                        (this.ri[i] = s);
                    })),
                p(this.ri)
              );
            }
            getMetaByName(t) {
              if (!t) return null;
              const i = this.getMeta()[t];
              return void 0 !== i ? i : null;
            }
            setMetaByName(t, i) {
              yt(null);
            }
            declaresExtension(t, i) {
              const s = this.hi[t];
              return !(!s || (i && s !== i));
            }
            declareExtension(t, i) {
              yt(!this.hi[t] || this.hi[t] === i), (this.hi[t] = i);
            }
            getExtensionVersion(t) {
              return this.hi[t] || null;
            }
            setExtensionsKnown() {
              this.ei.signal($s);
            }
            whenExtensionsKnown() {
              return this.ei.whenSignal($s);
            }
            getRootNode() {
              return yt(null);
            }
            getHeadNode() {}
            isBodyAvailable() {
              return yt(!1);
            }
            getBody() {
              return yt(null);
            }
            waitForBodyOpen() {
              return yt(null);
            }
            isReady() {
              return yt(null);
            }
            whenReady() {
              return yt(null);
            }
            getUrl() {
              return yt(null);
            }
            getElementById(t) {
              return this.getRootNode().getElementById(t);
            }
            contains(t) {
              return this.getRootNode().contains(t);
            }
            overrideVisibilityState(t) {
              this.oi != t && ((this.oi = t), this.ai());
            }
            ai() {
              const t = Cs(this.win.document);
              let i,
                s = vs.VISIBLE;
              for (let t = this.si; t; t = t.getParent())
                if (t.getVisibilityState() != vs.VISIBLE) {
                  s = t.getVisibilityState();
                  break;
                }
              const e = this.oi || vs.VISIBLE;
              if (
                ((i =
                  e == vs.VISIBLE && s == vs.VISIBLE && t == vs.VISIBLE
                    ? vs.VISIBLE
                    : t == vs.HIDDEN && e == vs.PAUSED
                    ? t
                    : e == vs.PAUSED || e == vs.INACTIVE
                    ? e
                    : s == vs.PAUSED || s == vs.INACTIVE
                    ? s
                    : e == vs.PREVIEW || t == vs.PREVIEW || s == vs.PREVIEW
                    ? vs.PREVIEW
                    : e == vs.PRERENDER ||
                      t == vs.PRERENDER ||
                      s == vs.PRERENDER
                    ? vs.PRERENDER
                    : vs.HIDDEN),
                this.D != i)
              ) {
                if (i == vs.VISIBLE) {
                  var n;
                  const { performance: t } = this.win;
                  let i = Math.floor(
                    null !== (n = t.timeOrigin) && void 0 !== n
                      ? n
                      : t.timing.navigationStart
                  );
                  null != this.D && (i += Math.floor(t.now())),
                    (this.li = i),
                    this.ei.signal(Fs, i),
                    this.ei.signal(Bs, i);
                } else this.ei.reset(Bs);
                i == vs.PREVIEW && this.ei.signal(Hs),
                  (this.D = i),
                  this.ui.fire();
              }
            }
            whenFirstPreviewedOrVisible() {
              return Promise.race([
                this.whenFirstPreviewed(),
                this.whenFirstVisible(),
              ]);
            }
            whenFirstPreviewed() {
              return this.ei.whenSignal(Hs).then(() => {});
            }
            whenFirstVisible() {
              return this.ei.whenSignal(Fs).then(() => {});
            }
            whenNextVisible() {
              return this.ei.whenSignal(Bs).then(() => {});
            }
            getFirstVisibleTime() {
              return this.ei.get(Fs);
            }
            getLastVisibleTime() {
              return this.li;
            }
            getVisibilityState() {
              return yt(this.D);
            }
            isPreview() {
              return this.D == vs.PREVIEW;
            }
            isVisible() {
              return this.D == vs.VISIBLE;
            }
            hasBeenVisible() {
              return null != this.getLastVisibleTime();
            }
            onVisibilityChanged(t) {
              return this.ui.add(t);
            }
            registerSingleton(t) {
              return !this.ii[t] && ((this.ii[t] = !0), !0);
            }
          },
          zs = class extends js {
            constructor(t, i) {
              super(t, null, i),
                (this.di = this.win.document.body
                  ? Promise.resolve(this.win.document.body)
                  : Ft(this.win.document).then(() => this.getBody())),
                (this.fi = gi(this.win.document));
            }
            isSingleDoc() {
              return !0;
            }
            getRootNode() {
              return this.win.document;
            }
            getUrl() {
              return Ls.getLocation(this.win).href;
            }
            getHeadNode() {
              return this.win.document.head;
            }
            isBodyAvailable() {
              return !!this.win.document.body;
            }
            getBody() {
              return this.win.document.body;
            }
            waitForBodyOpen() {
              return this.di;
            }
            isReady() {
              return mi(this.win.document);
            }
            whenReady() {
              return this.fi;
            }
          },
          Gs = class extends js {
            constructor(t, i, s, e) {
              super(t, null, e), (this.pi = i), (this.mi = s), (this._i = null);
              const r = new n();
              (this.di = r.promise), (this.Ai = r.resolve), (this.gi = !1);
              const h = new n();
              (this.fi = h.promise), (this.Pi = h.resolve);
            }
            isSingleDoc() {
              return !1;
            }
            getRootNode() {
              return this.mi;
            }
            getUrl() {
              return this.pi;
            }
            getHeadNode() {
              return this.mi;
            }
            isBodyAvailable() {
              return !!this._i;
            }
            getBody() {
              return this._i;
            }
            setBody(t) {
              yt(!this._i), (this._i = t), this.Ai(t), (this.Ai = void 0);
            }
            waitForBodyOpen() {
              return this.di;
            }
            isReady() {
              return this.gi;
            }
            setReady() {
              yt(!this.gi), (this.gi = !0), this.Pi(), (this.Pi = void 0);
            }
            whenReady() {
              return this.fi;
            }
            getMeta() {
              return p(this.ri);
            }
            setMetaByName(t, i) {
              yt(t), this.ri || (this.ri = p()), (this.ri[t] = i);
            }
          },
          qs = class extends js {
            constructor(t, i, s, e) {
              super(t, s, e),
                (this.pi = i),
                (this.di = this.win.document.body
                  ? Promise.resolve(this.win.document.body)
                  : Ft(this.win.document).then(() => this.getBody())),
                (this.gi = !1);
              const r = new n();
              (this.fi = r.promise), (this.Pi = r.resolve);
            }
            isSingleDoc() {
              return !1;
            }
            getRootNode() {
              return this.win.document;
            }
            getUrl() {
              return this.pi;
            }
            getHeadNode() {
              return this.win.document.head;
            }
            isBodyAvailable() {
              return !!this.win.document.body;
            }
            getBody() {
              return this.win.document.body;
            }
            waitForBodyOpen() {
              return this.di;
            }
            isReady() {
              return this.gi;
            }
            whenReady() {
              return this.fi;
            }
            setReady() {
              yt(!this.gi), (this.gi = !0), this.Pi(), (this.Pi = void 0);
            }
          };
        function Ws(t, i) {
          const s = p();
          return (
            i
              ? Object.assign(s, i)
              : (t.name &&
                  0 == t.name.indexOf(Us) &&
                  Object.assign(s, Y(t.name.substring(Us.length))),
                t.location &&
                  t.location.hash &&
                  Object.assign(s, Y(t.location.hash))),
            s
          );
        }
        var Ks = "nodisplay",
          Ys = "fixed",
          Qs = "fixed-height",
          Js = "responsive",
          Xs = "container",
          Zs = "fill",
          te = "flex-item",
          ie = "fluid",
          se = "intrinsic",
          ee =
            /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
        function ne(t) {
          if (
            "nodisplay" === (i = t) ||
            "fixed" === i ||
            "fixed-height" === i ||
            "responsive" === i ||
            "container" === i ||
            "fill" === i ||
            "flex-item" === i ||
            "fluid" === i ||
            "intrinsic" === i
          )
            return t;
          var i;
        }
        function re(t) {
          return "i-amphtml-layout-" + t;
        }
        function he(t) {
          return (
            t == Ys ||
            t == Qs ||
            t == Js ||
            t == Zs ||
            t == te ||
            t == ie ||
            t == se
          );
        }
        function oe(t) {
          return "number" == typeof t
            ? t + "px"
            : t &&
              /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(
                t
              )
            ? /^\d+(\.\d+)?$/.test(t)
              ? t + "px"
              : t
            : void 0;
        }
        function ue(t) {
          !(function (t) {
            F(
              /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(
                null != t ? t : ""
              ),
              "Invalid length value: %s",
              t
            );
          })(t);
          const i = /[a-z]+/i.exec(null != t ? t : "");
          return F(i, "Failed to read units from %s", t), i[0];
        }
        function le(t) {
          const i = parseFloat(t);
          return w(i) ? i : void 0;
        }
        function ce(t, i) {
          t.classList.add("i-amphtml-fill-content"),
            i && t.classList.add("i-amphtml-replaced-content");
        }
        function ae(t, i, s, e) {
          const n = E(t);
          for (const t of n) {
            const n = i.getAttribute(t);
            null !== n ? s.setAttribute(t, n) : e && s.removeAttribute(t);
          }
        }
        var de,
          fe = "amp:attached",
          pe = "amp:load-start",
          me = "amp:load-end",
          _e = "ready-upgrade",
          Ae = "upgraded",
          Pe = "built",
          ge = "mounted",
          ve = "load-start",
          Ee = "render-start",
          Te = "load-end",
          Me = "unload";
        function Ie(t, i) {
          return [
            { query: t.matchMedia(i), value: "1" },
            { query: null, value: "" },
          ];
        }
        function Re(t, i) {
          return i
            .split(",")
            .map((i) => {
              if (0 == (i = i.replace(/\s+/g, " ").trim()).length) return;
              let s, e, n;
              if (")" == i.charAt(i.length - 1)) {
                let t = 1;
                for (n = i.length - 2; n >= 0; n--) {
                  const s = i.charAt(n);
                  if (("(" == s ? t-- : ")" == s && t++, 0 == t)) break;
                }
                const s = n - 1;
                if (n > 0)
                  for (n--; n >= 0; n--) {
                    const t = i.charAt(n);
                    if (
                      !(
                        "%" == t ||
                        "-" == t ||
                        "_" == t ||
                        (t >= "a" && t <= "z") ||
                        (t >= "A" && t <= "Z") ||
                        (t >= "0" && t <= "9")
                      )
                    )
                      break;
                  }
                if (n >= s) return null;
              } else
                for (n = i.length - 2; n >= 0; n--) {
                  const t = i.charAt(n);
                  if (
                    !(
                      "%" == t ||
                      "." == t ||
                      (t >= "a" && t <= "z") ||
                      (t >= "A" && t <= "Z") ||
                      (t >= "0" && t <= "9")
                    )
                  )
                    break;
                }
              return (
                n >= 0
                  ? ((s = i.substring(0, n + 1).trim()),
                    (e = i.substring(n + 1).trim()))
                  : ((e = i), (s = void 0)),
                e ? { query: s ? t.matchMedia(s) : null, value: e } : null
              );
            })
            .filter(Boolean);
        }
        function ye(t, i, s) {
          for (let e = 0; e < t.length; e++) {
            const { query: n } = t[e];
            n &&
              (void 0 !== n.onchange
                ? (n.onchange = s ? i : null)
                : s
                ? n.addListener(i)
                : n.removeListener(i));
          }
        }
        function be(t) {
          const i = t.ownerDocument || t;
          return (
            (de && de.ownerDocument === i) || (de = i.createElement("div")), we
          );
        }
        function we(t) {
          return (function (t, i) {
            if (
              (D(1 === i.length),
              D(Array.isArray(i) || m(i, "raw")),
              self.trustedTypes && self.trustedTypes.createPolicy)
            ) {
              const s = self.trustedTypes.createPolicy(
                "static-template#createNode",
                {
                  createHTML: function (t) {
                    return i[0];
                  },
                }
              );
              t.innerHTML = s.createHTML("ignored");
            } else t.innerHTML = i[0];
            const s = t.firstElementChild;
            return D(s), D(!s.nextElementSibling), t.removeChild(s), s;
          })(de, t);
        }
        var Ve = [
            '<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>',
          ],
          Se = {
            "AMP-PIXEL": { width: "0px", height: "0px" },
            "AMP-ANALYTICS": { width: "1px", height: "1px" },
            "AMP-AUDIO": null,
            "AMP-SOCIAL-SHARE": { width: "60px", height: "44px" },
          };
        function xe(t) {
          const i = t.getAttribute("layout"),
            s = t.getAttribute("width"),
            e = t.getAttribute("height"),
            n = t.getAttribute("sizes"),
            r = t.getAttribute("heights"),
            h = i ? ne(i) : null;
          F(void 0 !== h, 'Invalid "layout" value: %s, %s', i, t);
          const o = s && "auto" != s ? oe(s) : s;
          F(void 0 !== o, 'Invalid "width" value: %s, %s', s, t);
          const u = e && "fluid" != e ? oe(e) : e;
          let l, c, a;
          if (
            (F(void 0 !== u, 'Invalid "height" value: %s, %s', e, t),
            (h && h != Ys && h != Qs) ||
              (o && u) ||
              ((d = (d = t.tagName).toUpperCase()), void 0 === Se[d]))
          )
            (l = o), (c = u);
          else {
            const i = (function (t) {
              const i = t.tagName.toUpperCase();
              if ((D(void 0 !== Se[i]), !Se[i])) {
                const s = t.ownerDocument,
                  e = i.replace(/^AMP\-/, ""),
                  n = s.createElement(e);
                (n.controls = !0),
                  Vs(n, { position: "absolute", visibility: "hidden" }),
                  s.body.appendChild(n),
                  (Se[i] = {
                    width: (n.offsetWidth || 1) + "px",
                    height: (n.offsetHeight || 1) + "px",
                  }),
                  s.body.removeChild(n);
              }
              return Se[i];
            })(t);
            (l = o || h == Qs ? o : i.width), (c = u || i.height);
          }
          var d;
          return (
            (a =
              h ||
              (l || c
                ? "fluid" == c
                  ? ie
                  : !c || (l && "auto" != l)
                  ? c && l && (n || r)
                    ? Js
                    : Ys
                  : Qs
                : Xs)),
            (a != Ys && a != Qs && a != Js && a != se) ||
              F(c, 'The "height" attribute is missing: %s', t),
            a == Qs &&
              F(
                !l || "auto" == l,
                'The "width" attribute must be missing or "auto": %s',
                t
              ),
            (a != Ys && a != Js && a != se) ||
              F(
                l && "auto" != l,
                'The "width" attribute must be present and not "auto": %s',
                t
              ),
            a == Js || a == se
              ? F(
                  ue(l) == ue(c),
                  'Length units should be the same for "width" and "height": %s, %s, %s',
                  s,
                  e,
                  t
                )
              : F(null === r, '"heights" attribute must be missing: %s', t),
            { layout: a, width: l, height: c }
          );
        }
        var Oe,
          Ce = "amp-experiment-toggles",
          ke = "__AMP__EXPERIMENT_TOGGLES";
        function Ne(t, i) {
          return !!Le(t)[i];
        }
        function De(t, i, s, e) {
          const n = Ne(t, i),
            r = null != s ? s : !n;
          if (r != n && ((Le(t)[i] = r), !e)) {
            const s = Ue(t);
            (s[i] = r),
              (function (t, i) {
                const s = [];
                for (const t in i) s.push((!1 === i[t] ? "-" : "") + t);
                try {
                  var e;
                  null === (e = t.localStorage) ||
                    void 0 === e ||
                    e.setItem(Ce, s.join(","));
                } catch (t) {
                  Mt().error(
                    "EXPERIMENTS",
                    "Failed to save experiments to localStorage."
                  );
                }
              })(t, s);
          }
          return r;
        }
        function Le(t) {
          var i, s, e, n, r;
          if (t[ke]) return t[ke];
          t[ke] = p();
          const h = t[ke];
          D(h);
          const o = g(
            g({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}),
            null !== (s = t.AMP_EXP) && void 0 !== s
              ? s
              : B(
                  (null === (e = t.__AMP_EXP) || void 0 === e
                    ? void 0
                    : e.textContent) || "{}"
                )
          );
          for (const t in o) {
            const i = o[t];
            "number" == typeof i &&
              i >= 0 &&
              i <= 1 &&
              (h[t] = Math.random() < i);
          }
          const u =
            null === (n = t.AMP_CONFIG) || void 0 === n
              ? void 0
              : n["allow-doc-opt-in"];
          if (v(u) && u.length) {
            const i = t.document.head.querySelector(
              'meta[name="amp-experiments-opt-in"]'
            );
            if (i) {
              var l;
              const t =
                (null === (l = i.getAttribute("content")) || void 0 === l
                  ? void 0
                  : l.split(",")) || [];
              for (const i of t) u.includes(i) && (h[i] = !0);
            }
          }
          Object.assign(h, Ue(t));
          const c =
            null === (r = t.AMP_CONFIG) || void 0 === r
              ? void 0
              : r["allow-url-opt-in"];
          if (v(c) && c.length) {
            const i = Y(t.location.originalHash || t.location.hash);
            for (const t of c) {
              const s = i[`e-${t}`];
              "1" == s && (h[t] = !0), "0" == s && (h[t] = !1);
            }
          }
          return h;
        }
        function Ue(t) {
          var i;
          let s = "";
          try {
            var e;
            "localStorage" in t &&
              (s =
                null !== (e = t.localStorage.getItem(Ce)) && void 0 !== e
                  ? e
                  : "");
          } catch (t) {}
          const n =
              (null === (i = s) || void 0 === i
                ? void 0
                : i.split(/\s*,\s*/g)) || [],
            r = p();
          for (const t of n)
            t && ("-" == t[0] ? (r[t.substr(1)] = !1) : (r[t] = !0));
          return r;
        }
        function $e(t, i, s, e) {
          let n = t,
            r = s,
            h = (t) => {
              try {
                return r(t);
              } catch (t) {
                var i, s;
                throw (
                  (null === (i = (s = self).__AMP_REPORT_ERROR) ||
                    void 0 === i ||
                    i.call(s, t),
                  t)
                );
              }
            };
          const o = (function () {
              if (void 0 !== Oe) return Oe;
              Oe = !1;
              try {
                const t = {
                  get capture() {
                    return (Oe = !0), !1;
                  },
                };
                self.addEventListener("test-options", null, t),
                  self.removeEventListener("test-options", null, t);
              } catch (t) {}
              return Oe;
            })(),
            u = !(null == e || !e.capture);
          return (
            n.addEventListener(i, h, o ? e : u),
            () => {
              null == n || n.removeEventListener(i, h, o ? e : u),
                (r = null),
                (n = null),
                (h = null);
            }
          );
        }
        var Fe = "Failed to load:";
        function Be(t, i, s, e) {
          const n = { detail: s };
          return Object.assign(n, e), new t.CustomEvent(i, n);
        }
        function He(t, i, s, e) {
          return $e(t, i, s, e);
        }
        function je(t) {
          return t.data;
        }
        function ze(t, i, s, e) {
          let n = s;
          const r = $e(
            t,
            i,
            (t) => {
              try {
                n(t);
              } finally {
                (n = null), r();
              }
            },
            e
          );
          return r;
        }
        function Ge(t) {
          let i, s;
          if (
            (function (t) {
              return !!(
                t.complete ||
                "complete" == t.readyState ||
                (qe(t) && t.readyState > 0) ||
                (t.document && "complete" == t.document.readyState)
              );
            })(t)
          )
            return Promise.resolve(t);
          const e = qe(t);
          return e && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc
            ? Promise.reject(t)
            : new Promise((n, r) => {
                if (
                  ((i = e
                    ? ze(t, "loadedmetadata", n, { capture: !0 })
                    : ze(t, "load", n)),
                  !t.tagName)
                )
                  return;
                let h = t;
                if (
                  e &&
                  !t.hasAttribute("src") &&
                  ((h = kt(t, (t) => "SOURCE" === t.tagName)), !h)
                )
                  return r(new Error("Media has no source."));
                s = ze(h, "error", r);
              }).then(
                () => (s && s(), t),
                () => {
                  i && i(),
                    (function (t) {
                      qe(t) &&
                        (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                      let i = t;
                      throw (
                        (i && i.src && (i = i.src), Mt().createError(Fe, i))
                      );
                    })(t);
                }
              );
        }
        function qe(t) {
          return "AUDIO" === t.tagName || "VIDEO" === t.tagName;
        }
        var We = {
          "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
          variant: "amp-experiment",
        };
        function Ke(t) {
          const i = t.document;
          return (
            yt(i.body), Object.keys(We).filter((t) => i.querySelector(We[t]))
          );
        }
        function Ye(t, i, s) {
          if (i[s]) return i[s];
          const e = t.querySelector(`style[${s}], link[${s}]`);
          return e ? ((i[s] = e), e) : null;
        }
        var Qe = !1;
        function Je(t) {
          yt(t.defaultView), Qe || ((Qe = !0), Xe(t));
        }
        function Xe(t) {
          Vs(t.body, { opacity: 1, visibility: "visible", animation: "none" });
        }
        function Ze(t, i) {
          const s = t.styleSheets;
          for (let t = 0; t < s.length; t++) if (s[t].ownerNode == i) return !0;
          return !1;
        }
        var tn,
          sn = new Set(["c", "v", "a", "ad"]),
          en = "__amp_source_origin",
          nn = (t) => ("string" == typeof t ? rn(t) : t);
        function rn(t, i) {
          return tn || (tn = self.document.createElement("a")), hn(tn, t);
        }
        function hn(t, i, s) {
          return (t.href = ""), new URL(i, t.href);
        }
        function on(t, i, s) {
          if (!i) return t;
          const e = t.split("#", 2),
            n = e[0].split("?", 2);
          let r =
            n[0] + (n[1] ? (s ? `?${i}&${n[1]}` : `?${n[1]}&${i}`) : `?${i}`);
          return (r += e[1] ? `#${e[1]}` : ""), r;
        }
        function un(t, i) {
          return `${encodeURIComponent(t)}=${encodeURIComponent(i)}`;
        }
        function ln(t, i) {
          return on(t, cn(i));
        }
        function cn(t) {
          const i = [];
          for (const s in t) {
            let e = t[s];
            if (null != e) {
              e = E(e);
              for (let t = 0; t < e.length; t++) i.push(un(s, e[t]));
            }
          }
          return i.join("&");
        }
        function an(t) {
          return (
            "https:" == (t = nn(t)).protocol ||
            "localhost" == t.hostname ||
            "127.0.0.1" == t.hostname ||
            R(t.hostname, ".localhost")
          );
        }
        function dn(t, i, s = "source") {
          return (
            bt(null != t, "%s %s must be available", i, s),
            bt(
              an(t) || /^\/\//.test(t),
              '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
              i,
              s,
              t
            ),
            t
          );
        }
        function fn(t) {
          const i = t.indexOf("#");
          return -1 == i ? t : t.substring(0, i);
        }
        function pn(t) {
          return X.test(nn(t).origin);
        }
        function mn(t) {
          return !(t && q.includes(nn(t).protocol));
        }
        function _n(t) {
          const { hash: i, origin: s, pathname: e, search: n } = rn(t);
          return s + e + An(n) + i;
        }
        function An(t) {
          return (function (t, i) {
            if (!t || "?" == t) return "";
            const s = new RegExp(
                "[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\\b[^&]*",
                "g"
              ),
              e = t.replace(s, "").replace(/^[?&]/, "");
            return e ? "?" + e : "";
          })(t);
        }
        function Pn(t) {
          if (!pn((t = nn(t)))) return t.href;
          const i = t.pathname.split("/"),
            s = i[1];
          bt(sn.has(s), "Unknown path prefix in url %s", t.href);
          const e = i[2],
            n =
              "s" == e
                ? "https://" + decodeURIComponent(i[3])
                : "http://" + decodeURIComponent(e);
          return (
            bt(n.indexOf(".") > 0, "Expected a . in origin %s", n),
            i.splice(1, "s" == e ? 3 : 2),
            n + i.join("/") + An(t.search) + (t.hash || "")
          );
        }
        function gn(t) {
          return rn(Pn(t)).origin;
        }
        function vn(t, i) {
          return (i = nn(i)), new URL(t, i.href).toString();
        }
        function En(t, i) {
          return (
            Tn(i),
            (function (t, i, s, e) {
              return on(t, un("__amp_source_origin", s), void 0);
            })(i, 0, gn(t.location.href))
          );
        }
        function Tn(t) {
          const i = Y(rn(t).search);
          bt(!(en in i), "Source origin is not allowed in %s", t);
        }
        var Mn = "CANCELLED",
          In = "BLOCK_BY_CONSENT",
          Rn = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Rn;
        var yn = function (t) {
          return (yn = (function (t) {
            const i = (function (t) {
              let i = 0;
              return () => {
                let t = Math.pow(1.5, i++);
                return (
                  (t += (function (t, i) {
                    let s = t * (i = i || 0.3) * Math.random();
                    return Math.random() > 0.5 && (s *= -1), s;
                  })(t)),
                  1e3 * t
                );
              };
            })();
            return (t) => setTimeout(t, i());
          })())(t);
        };
        function bn(t, i) {
          try {
            let s;
            if (t)
              if (void 0 !== t.message) (t = h(t)), (s = !0);
              else {
                const i = t;
                (t = new Error(
                  (function (t) {
                    try {
                      return JSON.stringify(t);
                    } catch (i) {
                      return String(t);
                    }
                  })(i)
                )).origError = i;
              }
            else t = new Error("Unknown error");
            if (t.reported) return t;
            if (((t.reported = !0), t.messageArray)) {
              const i = M(t.messageArray, (t) =>
                null == t ? void 0 : t.tagName
              );
              i > -1 && (t.associatedElement = t.messageArray[i]);
            }
            const e = i || t.associatedElement;
            if (
              (e && e.classList && e.classList.add("i-amphtml-error"),
              self.console && (O(t.message) || !t.expected))
            ) {
              const i = console.error || console.log;
              t.messageArray
                ? i.apply(console, t.messageArray)
                : e
                ? i.call(console, t.message, e)
                : i.call(console, t.message);
            }
            e &&
              e.dispatchCustomEventForTesting &&
              e.dispatchCustomEventForTesting("amp:error", t.message),
              Sn.call(self, void 0, void 0, void 0, void 0, t);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
          return t;
        }
        function wn() {
          return new Error(Mn);
        }
        function Vn(t) {
          return (
            !!t &&
            ("string" == typeof t
              ? t.startsWith(In)
              : "string" == typeof t.message && t.message.startsWith(In))
          );
        }
        function Sn(t, i, s, n, r) {
          !this || !this.document || (r && r.expected) || Je(this.document);
          let h = !1;
          try {
            h = (function (t) {
              if (!t.document) return !1;
              const i = t.document.querySelectorAll("script[src]");
              for (let t = 0; t < i.length; t++)
                if (!pn(i[t].src.toLowerCase())) return !0;
              return !1;
            })(self);
          } catch (t) {}
          if (h && Math.random() > 0.01) return;
          const o = (function (t, i, s, e, n, r) {
            t = (function (t, i) {
              return (
                i && (t = i.message ? i.message : String(i)),
                t || (t = "Unknown error"),
                t
              );
            })(t, n);
            let h = !(!n || !n.expected);
            if (/_reported_/.test(t)) return;
            if (t == Mn) return;
            const o = !(self && self.window),
              u = Math.random();
            if (
              ((function (t) {
                return -1 != t.indexOf(Fe);
              })(t) ||
                "Script error." == t ||
                o) &&
              ((h = !0), u > 0.001)
            )
              return;
            const l = O(t);
            if (l && u > 0.1) return;
            const c = Object.create(null);
            (c.v = at().rtvVersion),
              (c.noAmp = r ? "1" : "0"),
              (c.m = t.replace(V, "")),
              (c.a = l ? "1" : "0"),
              (c.ex = h ? "1" : "0"),
              (c.dw = o ? "1" : "0");
            let a = "1p";
            if (
              ((a = "esm"),
              (c.esm = "1"),
              (c.rt = "esm"),
              (c.ca =
                null !== (f = self.AMP_CONFIG) && void 0 !== f && f.canary
                  ? "1"
                  : "0"),
              (c.bt =
                (null === (d = self.AMP_CONFIG) || void 0 === d
                  ? void 0
                  : d.type) || "unknown"),
              self.location.ancestorOrigins &&
                self.location.ancestorOrigins[0] &&
                (c.or = self.location.ancestorOrigins[0]),
              self.viewerState && (c.vs = self.viewerState),
              self.parent && self.parent != self && (c.iem = "1"),
              self.AMP && self.AMP.viewer)
            ) {
              const t = self.AMP.viewer.getResolvedViewerUrl(),
                i = self.AMP.viewer.maybeGetMessagingOrigin();
              t && (c.rvu = t), i && (c.mso = i);
            }
            var d, f;
            const p = [],
              m = self[ke] || null;
            for (const t in m) {
              const i = m[t];
              p.push(`${t}=${i ? "1" : "0"}`);
            }
            var _, A, P;
            return (
              (c.exps = p.join(",")),
              n
                ? ((c.el =
                    (null === (_ = n.associatedElement) || void 0 === _
                      ? void 0
                      : _.tagName) || "u"),
                  n.args && (c.args = JSON.stringify(n.args)),
                  l || n.ignoreStack || !n.stack || (c.s = n.stack),
                  n.message && (n.message += " _reported_"))
                : ((c.f = i || ""), (c.l = s || ""), (c.c = e || "")),
              (c.r = self.document ? self.document.referrer : ""),
              (c.ae = Rn.join(",")),
              (c.fr = self.location.originalHash || self.location.hash),
              "production" === c.bt && (c.pt = "1"),
              (P = t),
              (A = Rn).length >= 25 && A.splice(0, A.length - 25 + 1),
              A.push(P),
              c
            );
          })(t, i, s, n, r, h);
          o &&
            yn(() => {
              try {
                return (function (t, i) {
                  return i.pt && Math.random() < 0.9
                    ? e()
                    : (function (t, i) {
                        const s = Zi(t);
                        if (!s.isSingleDoc()) return Promise.resolve(!1);
                        const e = s.getSingleDoc();
                        if (
                          !e
                            .getRootNode()
                            .documentElement.hasAttribute(
                              "report-errors-to-viewer"
                            )
                        )
                          return Promise.resolve(!1);
                        const n = _s(e);
                        return n.hasCapability("errorReporter")
                          ? n.isTrustedViewer().then((t) => {
                              return (
                                !!t &&
                                (n.sendMessage("error", {
                                  m: (s = i).m,
                                  a: s.a,
                                  s: s.s,
                                  el: s.el,
                                  ex: s.ex,
                                  v: s.v,
                                  pt: s.pt,
                                }),
                                !0)
                              );
                              var s;
                            })
                          : Promise.resolve(!1);
                      })(t, i).then((t) => {
                        if (!t) {
                          const t = new XMLHttpRequest();
                          t.open("POST", Math.random() < 0.1 ? ht : rt, !0),
                            t.send(JSON.stringify(i));
                        }
                      });
                })(this, o).catch(() => {});
              } catch (t) {}
            });
        }
        var xn = "Resource",
          On = class {
            static forElement(t) {
              return yt(On.forElementOptional(t));
            }
            static forElementOptional(t) {
              return t.__AMP__RESOURCE;
            }
            static setOwner(t, i) {
              yt(i.contains(t)),
                On.forElementOptional(t) &&
                  On.forElementOptional(t).updateOwner(i),
                (t.__AMP__OWNER = i);
              const s = t.getElementsByClassName("i-amphtml-element");
              for (let t = 0; t < s.length; t++) {
                const i = s[t];
                On.forElementOptional(i) &&
                  On.forElementOptional(i).updateOwner(void 0);
              }
            }
            constructor(t, i, s) {
              (i.__AMP__RESOURCE = this),
                (this.vi = t),
                (this.element = i),
                (this.debugid = i.tagName.toLowerCase() + "#" + t),
                (this.hostWin = i.ownerDocument.defaultView),
                (this.Ei = s),
                (this.Ti = i.hasAttribute("placeholder")),
                (this.Ii = !1),
                (this.Mi = void 0),
                (this.Ri = i.isBuilt() ? 1 : 0),
                0 == this.Ri && i.isBuilding() && this.build(),
                (this.yi = -1),
                (this.wi = 0),
                (this.bi = null),
                (this.Vi = null),
                (this.Si = !1),
                (this.xi = Jt(-1e4, -1e4, 0, 0)),
                (this.Oi = null),
                (this.Ci = !1),
                (this.ki = null),
                (this.Ni = null),
                (this.Di = void 0);
              const e = new n();
              (this.Li = e.promise), (this.Ui = e.resolve), (this.$i = !1);
            }
            getId() {
              return this.vi;
            }
            updateOwner(t) {
              this.Mi = t;
            }
            getOwner() {
              if (void 0 === this.Mi) {
                for (let t = this.element; t; t = t.parentElement)
                  if (t.__AMP__OWNER) {
                    this.Mi = t.__AMP__OWNER;
                    break;
                  }
                void 0 === this.Mi && (this.Mi = null);
              }
              return this.Mi;
            }
            hasOwner() {
              return !!this.getOwner();
            }
            getLayoutPriority() {
              return -1 != this.yi ? this.yi : this.element.getLayoutPriority();
            }
            updateLayoutPriority(t) {
              this.yi = t;
            }
            getState() {
              return this.Ri;
            }
            isBuilt() {
              return this.element.isBuilt();
            }
            isBuilding() {
              return this.Ii;
            }
            whenBuilt() {
              return this.element.signals().whenSignal("res-built");
            }
            build() {
              return this.Ii || !this.element.isUpgraded()
                ? null
                : ((this.Ii = !0),
                  this.element.buildInternal().then(
                    () => {
                      (this.Ii = !1),
                        (this.Ri = 1),
                        this.element.signals().signal("res-built");
                    },
                    (t) => {
                      throw (
                        (this.maybeReportErrorOnBuildFailure(t),
                        (this.Ii = !1),
                        this.element.signals().rejectSignal("res-built", t),
                        t)
                      );
                    }
                  ));
            }
            maybeReportErrorOnBuildFailure(t) {
              Vn(t) || Rt().error(xn, "failed to build:", this.debugid, t);
            }
            changeSize(t, i, s) {
              this.element.applySize(t, i, s), this.requestMeasure();
            }
            overflowCallback(t, i, s, e) {
              t && (this.Di = { height: i, width: s, margins: e }),
                this.element.overflowCallback(t, i, s, e);
            }
            resetPendingChangeSize() {
              this.Di = void 0;
            }
            getPendingChangeSize() {
              return this.Di;
            }
            getUpgradeDelayMs() {
              return this.element.getUpgradeDelayMs();
            }
            measure() {
              if (
                this.Ti &&
                this.element.parentElement &&
                this.element.parentElement.tagName.startsWith("AMP-") &&
                !("__AMP__RESOURCE" in this.element.parentElement)
              )
                return;
              if (
                !this.element.ownerDocument ||
                !this.element.ownerDocument.defaultView
              )
                return void (this.Ri = 1);
              this.Ci = !1;
              const t = this.xi;
              this.Fi();
              const i = this.xi,
                s =
                  ((n = i),
                  !((e = t).width == n.width && e.height === n.height));
              var e, n;
              (1 == this.Ri || t.top != i.top || s) &&
                this.element.isUpgraded() &&
                (1 == this.Ri
                  ? (this.Ri = 2)
                  : (4 != this.Ri && 5 != this.Ri) ||
                    !this.element.isRelayoutNeeded() ||
                    (this.Ri = 2)),
                this.hasBeenMeasured() || (this.Oi = i),
                this.element.updateLayoutBox(i, s);
            }
            ensureMeasured() {
              return this.hasBeenMeasured()
                ? e()
                : As(this.hostWin).measure(() => this.measure());
            }
            Fi() {
              const t = Ps(this.element);
              this.xi = t.getLayoutRect(this.element);
              let i = !1;
              if (t.supportsPositionFixed() && this.isDisplayed()) {
                const { win: s } = this.Ei.getAmpdoc(),
                  { body: e } = s.document;
                for (let n = this.element; n && n != e; n = n.offsetParent) {
                  if (n.isAlwaysFixed && n.isAlwaysFixed()) {
                    i = !0;
                    break;
                  }
                  if (t.isDeclaredFixed(n) && "fixed" == Os(s, n).position) {
                    i = !0;
                    break;
                  }
                }
              }
              (this.Si = i),
                i &&
                  (this.xi = Zt(
                    this.xi,
                    -t.getScrollLeft(),
                    -t.getScrollTop()
                  ));
            }
            completeCollapse() {
              Ss(this.element, !1),
                (this.xi = Jt(this.xi.left, this.xi.top, 0, 0)),
                (this.Si = !1),
                this.element.updateLayoutBox(this.getLayoutBox());
              const t = this.getOwner();
              t && t.collapsedCallback(this.element);
            }
            completeExpand() {
              Ss(this.element, !0), this.requestMeasure();
            }
            isMeasureRequested() {
              return this.Ci;
            }
            hasBeenMeasured() {
              return !!this.Oi;
            }
            requestMeasure() {
              this.Ci = !0;
            }
            getLayoutSize() {
              return (function (t) {
                const { height: i, width: s } = t;
                return { width: s, height: i };
              })(this.xi);
            }
            getLayoutBox() {
              if (!this.Si) return this.xi;
              const t = Ps(this.element);
              return Zt(this.xi, t.getScrollLeft(), t.getScrollTop());
            }
            getInitialLayoutBox() {
              return this.Oi || this.xi;
            }
            isDisplayed() {
              if (
                !this.element.ownerDocument ||
                !this.element.ownerDocument.defaultView
              )
                return !1;
              const t = this.element.getLayout() == ie,
                i = this.getLayoutBox(),
                s = i.height > 0 && i.width > 0;
              return t || s;
            }
            isFixed() {
              return this.Si;
            }
            overlaps(t) {
              return (
                (s = t),
                (i = this.getLayoutBox()).top <= s.bottom &&
                  s.top <= i.bottom &&
                  i.left <= s.right &&
                  s.left <= i.right
              );
              var i, s;
            }
            prerenderAllowed() {
              return this.element.prerenderAllowed();
            }
            previewAllowed() {
              return this.element.previewAllowed();
            }
            isBuildRenderBlocking() {
              return this.element.isBuildRenderBlocking();
            }
            whenWithinViewport(t) {
              if ((yt(!1 !== t), !this.isLayoutPending() || !0 === t))
                return e();
              const i = t,
                s = String(i);
              return this.ki && this.ki[s]
                ? this.ki[s].promise
                : this.isWithinViewportRatio(i)
                ? e()
                : ((this.ki = this.ki || {}),
                  (this.ki[s] = new n()),
                  this.ki[s].promise);
            }
            Bi() {
              if (!this.ki) return;
              const t = this.getDistanceViewportRatio();
              for (const i in this.ki)
                this.isWithinViewportRatio(parseFloat(i), t) &&
                  (this.ki[i].resolve(), delete this.ki[i]);
            }
            getDistanceViewportRatio() {
              const t = Ps(this.element).getRect(),
                i = this.getLayoutBox(),
                s = this.Ei.getScrollDirection();
              let e = 1,
                n = 0;
              if (t.right < i.left || t.left > i.right) return { distance: !1 };
              if (t.bottom < i.top) (n = i.top - t.bottom), -1 == s && (e = 2);
              else {
                if (!(t.top > i.bottom)) return { distance: !0 };
                (n = t.top - i.bottom), 1 == s && (e = 2);
              }
              return {
                distance: n,
                scrollPenalty: e,
                viewportHeight: t.height,
              };
            }
            isWithinViewportRatio(t, i) {
              if ("boolean" == typeof t) return t;
              const {
                distance: s,
                scrollPenalty: e,
                viewportHeight: n,
              } = i || this.getDistanceViewportRatio();
              return "boolean" == typeof s ? s : s < (n * t) / e;
            }
            renderOutsideViewport() {
              return (
                this.Bi(),
                this.hasOwner() ||
                  this.isWithinViewportRatio(
                    this.element.renderOutsideViewport()
                  )
              );
            }
            idleRenderOutsideViewport() {
              return this.isWithinViewportRatio(
                this.element.idleRenderOutsideViewport()
              );
            }
            layoutScheduled(t) {
              (this.Ri = 3), (this.element.layoutScheduleTime = t);
            }
            layoutCanceled() {
              this.Ri = this.hasBeenMeasured() ? 2 : 1;
            }
            startLayout() {
              if (this.Ni) return this.Ni;
              if (4 == this.Ri) return e();
              if (5 == this.Ri) return Promise.reject(this.Vi);
              if ((yt(0 != this.Ri), yt(this.isDisplayed()), 3 != this.Ri)) {
                const t = Rt().createExpectedError(
                  "startLayout called but not LAYOUT_SCHEDULED",
                  "currently: ",
                  this.Ri
                );
                return bn(t, this.element), Promise.reject(t);
              }
              if (this.wi > 0 && !this.element.isRelayoutNeeded())
                return (this.Ri = 4), e();
              this.wi++, (this.Ri = 3), (this.bi = new AbortController());
              const { signal: t } = this.bi,
                i = new Promise((i, s) => {
                  As(this.hostWin).mutate(() => {
                    let e;
                    try {
                      e = this.element.layoutCallback(t);
                    } catch (t) {
                      s(t);
                    }
                    Promise.resolve(e).then(i, s);
                  }),
                    (t.onabort = () => s(wn()));
                }).then(
                  () => this.Hi(!0, t),
                  (i) => this.Hi(!1, t, i)
                );
              return (this.Ni = i);
            }
            Hi(t, i, s) {
              if (((this.bi = null), i.aborted)) {
                const t = Rt().createError("layoutComplete race");
                throw (
                  ((t.associatedElement = this.element),
                  Rt().expectedError(xn, t),
                  wn())
                );
              }
              if (
                (this.Ui && (this.Ui(), (this.Ui = null)),
                (this.Ni = null),
                (this.Ri = t ? 4 : 5),
                (this.Vi = s),
                !t)
              )
                return Promise.reject(s);
            }
            isLayoutPending() {
              return 4 != this.Ri && 5 != this.Ri;
            }
            loadedOnce() {
              return this.element.R1() ? this.element.whenLoaded() : this.Li;
            }
            isInViewport() {
              return this.$i && this.Bi(), this.$i;
            }
            setInViewport(t) {
              this.$i = t;
            }
            unlayout() {
              0 != this.Ri &&
                1 != this.Ri &&
                2 != this.Ri &&
                (this.bi && (this.bi.abort(), (this.bi = null)),
                this.setInViewport(!1),
                this.element.unlayoutCallback() &&
                  (this.element.togglePlaceholder(!0),
                  (this.Ri = 1),
                  (this.wi = 0),
                  (this.Ni = null)));
            }
            getTaskId(t) {
              return this.debugid + "#" + t;
            }
            pause() {
              this.element.pause();
            }
            pauseOnRemove() {
              this.element.pause();
            }
            resume() {
              this.element.resume();
            }
            unload() {
              this.element.unmount();
            }
            disconnect() {
              delete this.element.__AMP__RESOURCE, this.element.disconnect(!0);
            }
          },
          Cn = "ready-scan",
          kn = "scheduler",
          Nn = "250% 31.25%";
        function Dn(t) {
          return (
            bi(
              t,
              kn,
              class {
                constructor(t) {
                  this.ji = t;
                  const { win: i } = t;
                  (this.zi = new i.IntersectionObserver((t) => this.Gi(t), {
                    root: qt(i) ? i.document : null,
                    rootMargin: Nn,
                  })),
                    (this.qi = new Map()),
                    (this.Wi = new Map()),
                    (this.Ki = []),
                    (this.Yi = !1),
                    t.whenReady().then(() => this.Ji()),
                    (this.Qi = t.onVisibilityChanged(() => this.Xi()));
                }
                dispose() {
                  this.zi.disconnect(),
                    this.Wi.clear(),
                    this.Qi && (this.Qi(), (this.Qi = null));
                }
                scheduleAsap(t) {
                  this.Wi.set(t, { asap: !0, isIntersecting: !1 }), this.Zi(t);
                }
                schedule(t) {
                  this.Wi.has(t) ||
                    (t.deferredMount()
                      ? (this.Wi.set(t, { asap: !1, isIntersecting: !1 }),
                        this.zi.observe(t),
                        this.qi.size > 0 &&
                          this.qi.forEach((i, s) => {
                            Kt(s, t) && i.observe(t);
                          }))
                      : this.Wi.set(t, { asap: !1, isIntersecting: !0 }),
                    this.Zi(t));
                }
                unschedule(t) {
                  this.Wi.has(t) &&
                    (this.Wi.delete(t),
                    this.zi.unobserve(t),
                    this.qi.size > 0 &&
                      this.qi.forEach((i) => {
                        i.unobserve(t);
                      }),
                    this.Ki && (I(this.Ki, t), this.Ji()));
                }
                setContainer(t, i) {
                  if (this.qi.has(t)) return;
                  const { win: s } = this.ji,
                    e = new s.IntersectionObserver((t) => this.Gi(t), {
                      root: i || t,
                      rootMargin: Nn,
                    });
                  this.qi.set(t, e),
                    this.Wi.forEach(({ asap: i }, s) => {
                      !i && Kt(t, s) && e.observe(s);
                    });
                }
                removeContainer(t) {
                  const i = this.qi.get(t);
                  i && (i.disconnect(), this.qi.delete(t));
                }
                ts() {
                  if (this.ji.isReady() && !this.Yi) {
                    this.Yi = !0;
                    const { win: t } = this.ji;
                    t.setTimeout(() => {
                      this.ji.signals().signal(Cn);
                    }, 50);
                  }
                }
                Xi() {
                  const t = this.ji.getVisibilityState();
                  (t != vs.VISIBLE &&
                    t != vs.HIDDEN &&
                    t != vs.PRERENDER &&
                    t != vs.PREVIEW) ||
                    this.Wi.forEach((t, i) => this.ss(i));
                }
                Zi(t) {
                  const i = this.Ki;
                  i ? (i.includes(t) || i.push(t), this.Ji()) : this.ss(t);
                }
                Ji() {
                  const t = this.ji.isReady(),
                    i = this.Ki;
                  if (i)
                    for (let s = 0; s < i.length; s++) {
                      const e = i[s];
                      (t || zt(e, this.ji.getRootNode())) &&
                        (i.splice(s--, 1), this.ss(e));
                    }
                  t && ((this.Ki = null), this.ts());
                }
                Gi(t) {
                  for (let i = 0; i < t.length; i++) {
                    const { isIntersecting: s, target: e } = t[i],
                      n = e,
                      r = this.Wi.get(n);
                    if (!r) continue;
                    const h = s || r.isIntersecting;
                    h !== r.isIntersecting &&
                      this.Wi.set(n, { asap: r.asap, isIntersecting: h }),
                      h && this.ss(n);
                  }
                }
                ss(t) {
                  const i = this.Ki,
                    s = !(i && i.includes(t)),
                    { asap: e, isIntersecting: n } = this.Wi.get(t) || {
                      asap: !1,
                      isIntersecting: !1,
                    },
                    r = this.ji.getVisibilityState();
                  if (
                    !s ||
                    (!e && !n) ||
                    !(
                      r == vs.VISIBLE ||
                      r == vs.HIDDEN ||
                      (r == vs.PRERENDER && t.prerenderAllowed()) ||
                      (r == vs.PREVIEW && t.previewAllowed())
                    )
                  )
                    return;
                  this.unschedule(t);
                  const { win: h } = this.ji;
                  (e || t.getBuildPriority() <= 0
                    ? h.setTimeout
                    : h.requestIdleCallback || h.setTimeout)(() =>
                    t.mountInternal()
                  );
                }
              }
            ),
            Vi(t, kn)
          );
        }
        var Ln = class {
            constructor() {
              this.es = [];
            }
            peek() {
              const t = this.length;
              return t ? this.es[t - 1].item : null;
            }
            enqueue(t, i) {
              if (isNaN(i)) throw new Error("Priority must not be NaN.");
              const s = this.ns(i);
              this.es.splice(s, 0, { item: t, priority: i });
            }
            ns(t) {
              let i = -1,
                s = 0,
                e = this.length;
              for (
                ;
                s <= e && ((i = Math.floor((s + e) / 2)), i !== this.length);

              )
                if (this.es[i].priority < t) s = i + 1;
                else {
                  if (!(i > 0 && this.es[i - 1].priority >= t)) break;
                  e = i - 1;
                }
              return i;
            }
            forEach(t) {
              let i = this.length;
              for (; i--; ) t(this.es[i].item);
            }
            dequeue() {
              const t = this.es.pop();
              return t ? t.item : null;
            }
            get length() {
              return this.es.length;
            }
          },
          Un = /nochunking=1/.test(self.location.hash),
          $n = e();
        function Fn(t) {
          return bi(t, "chunk", qn), Vi(t, "chunk");
        }
        function Bn(t, i, s) {
          if (Un) return void $n.then(i);
          const e = Fn(t.documentElement || t);
          e.runForStartup(i),
            s &&
              e.runForStartup(() => {
                e.rs = !0;
              });
        }
        function Hn(t, i, s) {
          Un ? $n.then(i) : Fn(t).run(i, s);
        }
        var jn = "not_run",
          zn = class {
            constructor(t) {
              (this.state = jn), (this.hs = t);
            }
            os(t) {
              if ("run" != this.state) {
                this.state = "run";
                try {
                  this.hs(t);
                } catch (t) {
                  throw (this.us(t), t);
                }
              }
            }
            ls() {
              return this.hs.displayName || this.hs.name;
            }
            us(t) {}
            cs() {
              return !1;
            }
            ds() {
              return !1;
            }
          },
          Gn = class extends zn {
            constructor(t, i, s) {
              super(t), (this.fs = s);
            }
            us(t) {
              Je(self.document);
            }
            cs() {
              return this.ps();
            }
            ds() {
              return this.fs._s;
            }
            ps() {
              return this.fs.ampdoc.isVisible();
            }
          },
          qn = class {
            constructor(t) {
              var i;
              (this.ampdoc = t),
                (this.i = t.win),
                (this.As = new Ln()),
                (this.gs = this.Ps.bind(this)),
                (this.vs = 0),
                (this.Es = !(
                  !this.i.navigator.scheduling ||
                  !this.i.navigator.scheduling.isInputPending
                )),
                (this.Ts = !1),
                (this.rs = this.i.document.documentElement.hasAttribute(
                  "i-amphtml-no-boilerplate"
                )),
                this.i.addEventListener("message", (t) => {
                  "amp-macro-task" == je(t) && this.Ps(null);
                }),
                (this._s = !1),
                ((i = t), xi(i, "viewer")).then(() => {
                  this._s = !0;
                }),
                t.onVisibilityChanged(() => {
                  t.isVisible() && this.Is();
                });
            }
            run(t, i) {
              const s = new zn(t);
              this.Ms(s, i);
            }
            runForStartup(t) {
              const i = new Gn(t, this.i, this);
              this.Ms(i, Number.POSITIVE_INFINITY);
            }
            Ms(t, i) {
              this.As.enqueue(t, i), this.Is();
            }
            Rs(t) {
              let i = this.As.peek();
              for (; i && i.state !== jn; )
                this.As.dequeue(), (i = this.As.peek());
              return i && t && this.As.dequeue(), i;
            }
            Ps(t) {
              const i = this.Rs(!0);
              if (!i) return (this.Ts = !1), (this.vs = 0), !1;
              let s;
              try {
                (s = Date.now()), i.os(t);
              } finally {
                $n.then()
                  .then()
                  .then()
                  .then()
                  .then()
                  .then()
                  .then()
                  .then()
                  .then(() => {
                    (this.Ts = !1), (this.vs += Date.now() - s), this.Is();
                  });
              }
              return !0;
            }
            ys(t) {
              if (
                this.rs &&
                (this.Es
                  ? this.i.navigator.scheduling.isInputPending()
                  : this.vs > 5)
              )
                return (this.vs = 0), void this.ws();
              $n.then(() => {
                this.gs(t);
              });
            }
            Is() {
              if (this.Ts) return;
              const t = this.Rs();
              return t
                ? t.cs()
                  ? ((this.Ts = !0), void this.ys(null))
                  : void (t.ds() && this.i.requestIdleCallback
                      ? (function (t, i, s, e) {
                          const n = Date.now();
                          t.requestIdleCallback(
                            function i(s) {
                              if (s.timeRemaining() < 15) {
                                const r = 2e3 - (Date.now() - n);
                                r <= 0 || s.didTimeout
                                  ? e(s)
                                  : t.requestIdleCallback(i, { timeout: r });
                              } else e(s);
                            },
                            { timeout: 2e3 }
                          );
                        })(this.i, 0, 0, this.gs)
                      : this.ws())
                : void 0;
            }
            ws() {
              this.i.postMessage("amp-macro-task", "*");
            }
          },
          Wn = "activate",
          Kn = class {
            static R1() {
              return !1;
            }
            static deferredMount(t) {
              return !0;
            }
            static prerenderAllowed(t) {
              return !1;
            }
            static previewAllowed(t) {
              return this.prerenderAllowed(t);
            }
            static usesLoading(t) {
              return !1;
            }
            static createLoaderLogoCallback(t) {
              return {};
            }
            static getBuildPriority(t) {
              return 0;
            }
            static getPreconnects(t) {
              return null;
            }
            static requiresShadowDom() {
              return !1;
            }
            constructor(t) {
              (this.element = t),
                (this.win = wt(t)),
                (this.actionMap_ = null),
                (this.defaultActionAlias_ = null);
            }
            signals() {
              return this.element.signals();
            }
            getDefaultActionAlias() {
              return this.defaultActionAlias_;
            }
            getLayoutPriority() {
              return 0;
            }
            updateLayoutPriority(t) {
              this.element.getResources().updateLayoutPriority(this.element, t);
            }
            getLayout() {
              return this.element.getLayout();
            }
            getLayoutBox() {
              return this.element.getLayoutBox();
            }
            getLayoutSize() {
              return this.element.getLayoutSize();
            }
            getAmpDoc() {
              return this.element.getAmpDoc();
            }
            getVsync() {
              return As(this.win);
            }
            getConsentPolicy() {
              let t = null;
              return (
                this.element.hasAttribute("data-block-on-consent") &&
                  (t =
                    this.element.getAttribute("data-block-on-consent") ||
                    "default"),
                t
              );
            }
            isLayoutSupported(t) {
              return t == Ks;
            }
            isAlwaysFixed() {
              return !1;
            }
            upgradeCallback() {
              return null;
            }
            buildCallback() {}
            preconnectCallback(t) {}
            attachedCallback() {}
            detachedCallback() {}
            setAsContainer(t) {
              this.element.setAsContainerInternal(t);
            }
            removeAsContainer() {
              this.element.removeAsContainerInternal();
            }
            isBuildRenderBlocking() {
              return !1;
            }
            createPlaceholderCallback() {
              return null;
            }
            renderOutsideViewport() {
              return "inabox" == at(this.win).runtime || 3;
            }
            idleRenderOutsideViewport() {
              return !1;
            }
            ensureLoaded() {}
            setReadyState(t, i) {
              this.element.setReadyStateInternal(t, i);
            }
            mountCallback(t) {}
            unmountCallback() {}
            isRelayoutNeeded() {
              return !1;
            }
            layoutCallback() {
              return e();
            }
            firstLayoutCompleted() {
              this.togglePlaceholder(!1);
            }
            pauseCallback() {}
            resumeCallback() {}
            unlayoutCallback() {
              return !1;
            }
            unlayoutOnPause() {
              return !1;
            }
            reconstructWhenReparented() {
              return !0;
            }
            loadPromise(t) {
              return Ge(t);
            }
            registerAction(t, i, s = 2) {
              Yn(this), (this.actionMap_[t] = { handler: i, minTrust: s });
            }
            registerDefaultAction(t, i = "activate", s = 2) {
              yt(!this.defaultActionAlias_),
                this.registerAction(i, t, s),
                (this.defaultActionAlias_ = i);
            }
            executeAction(t, i) {
              let { method: s } = t;
              s === Wn && (s = this.defaultActionAlias_ || s), Yn(this);
              const e = this.actionMap_[s],
                { tagName: n } = this.element;
              bt(e, `Method not found: ${s} in ${n}`);
              const { handler: r, minTrust: h } = e;
              if (t.satisfiesTrust(h)) return r(t);
            }
            forwardEvents(t, i) {
              const s = (v(t) ? t : [t]).map((t) =>
                He(i, t, (i) => {
                  Wt(this.element, t, je(i) || {});
                })
              );
              return () => s.forEach((t) => t());
            }
            getPlaceholder() {
              return this.element.getPlaceholder();
            }
            togglePlaceholder(t) {
              this.element.togglePlaceholder(t);
            }
            getFallback() {
              return this.element.getFallback();
            }
            toggleFallback(t) {
              this.element.toggleFallback(t);
            }
            toggleLoading(t, i = !1) {
              this.element.toggleLoading(t, i);
            }
            getOverflowElement() {
              return this.element.getOverflowElement();
            }
            renderStarted() {
              this.element.renderStarted();
            }
            getViewport() {
              return Ps(this.getAmpDoc());
            }
            getIntersectionElementLayoutBox() {
              return this.getLayoutBox();
            }
            collapse() {
              hs(this.getAmpDoc()).collapseElement(this.element);
            }
            attemptCollapse() {
              return hs(this.getAmpDoc()).attemptCollapse(this.element);
            }
            forceChangeHeight(t) {
              hs(this.getAmpDoc()).forceChangeSize(this.element, t, void 0);
            }
            attemptChangeHeight(t) {
              return hs(this.getAmpDoc()).requestChangeSize(
                this.element,
                t,
                void 0
              );
            }
            attemptChangeSize(t, i, s) {
              return hs(this.getAmpDoc()).requestChangeSize(
                this.element,
                t,
                i,
                void 0,
                s
              );
            }
            measureElement(t) {
              return hs(this.getAmpDoc()).measureElement(t);
            }
            mutateElement(t, i) {
              return this.measureMutateElement(null, t, i);
            }
            measureMutateElement(t, i, s) {
              return hs(this.getAmpDoc()).measureMutateElement(
                s || this.element,
                t,
                i
              );
            }
            mutateElementSkipRemeasure(t) {
              return hs(this.getAmpDoc()).mutateElement(this.element, t, !0);
            }
            collapsedCallback(t) {}
            expand() {
              hs(this.getAmpDoc()).expandElement(this.element);
            }
            mutatedAttributesCallback(t) {}
            onLayoutMeasure() {}
            user() {
              return Mt(this.element);
            }
            getApi() {
              return this;
            }
          };
        function Yn(t) {
          t.actionMap_ || (t.actionMap_ = t.win.Object.create(null));
        }
        var Qn,
          Jn = class extends Kn {},
          Xn = Date.now(),
          Zn = { bubbles: !1 },
          tr = () => !0,
          ir = [],
          sr = new Set();
        function er(t, i) {
          const s = (function (t, i) {
            if (t.__AMP_BASE_CE_CLASS) return t.__AMP_BASE_CE_CLASS;
            const s = t.HTMLElement;
            return (
              (t.__AMP_BASE_CE_CLASS = class extends s {
                constructor() {
                  super(), this.createdCallback();
                }
                createdCallback() {
                  (this.bs = !1),
                    (this.Tt = !1),
                    (this.Vs = null),
                    (this.mn = !1),
                    (this.Ss = null),
                    (this.xs = null),
                    (this.Os = "upgrading"),
                    (this.everAttached = !1),
                    (this.ji = null),
                    (this.Ei = null),
                    (this.Cs = Ks),
                    (this.wi = 0),
                    (this.ks = !1),
                    (this.warnOnMissingOverflow = !0),
                    (this.sizerElement = void 0),
                    (this.Ns = void 0),
                    (this.layoutScheduleTime = void 0);
                  const i = this;
                  let s =
                    t.__AMP_EXTENDED_ELEMENTS &&
                    t.__AMP_EXTENDED_ELEMENTS[this.localName];
                  (this.Ds = s === Jn ? null : s || null),
                    this.Ds || ir.push(this),
                    (this.Ls = null),
                    (this.Us = 1),
                    (this.$s = 0),
                    (this.Fs = void 0),
                    (this.Bs = void 0),
                    (this.ei = new Ts()),
                    this.Ds && this.ei.signal(_e);
                  const e = (function (t, i) {
                    return zi((t = Ci(t)), i) ? Li(t, i) : null;
                  })(t, "performance");
                  (this.Hs = e && e.isPerformanceTrackingOn()),
                    (this.wn = null),
                    i.__AMP_UPG_RES &&
                      (i.__AMP_UPG_RES(i),
                      delete i.__AMP_UPG_RES,
                      delete i.__AMP_UPG_PRM);
                }
                get readyState() {
                  return this.Os;
                }
                signals() {
                  return this.ei;
                }
                getAmpDoc() {
                  return yt(this.ji), this.ji;
                }
                getResources() {
                  return yt(this.Ei), this.Ei;
                }
                isUpgraded() {
                  return 2 == this.Us;
                }
                whenUpgraded() {
                  return this.ei.whenSignal(Ae);
                }
                upgrade(t) {
                  this.Bs ||
                    (1 == this.Us &&
                      ((this.Ds = t),
                      this.ei.signal(_e),
                      this.everAttached && this.js()));
                }
                markUnresolved() {
                  this.Ds ||
                    this.classList.add(
                      "amp-unresolved",
                      "i-amphtml-unresolved"
                    );
                }
                getUpgradeDelayMs() {
                  return this.$s;
                }
                zs(i, s) {
                  (this.Ls = i),
                    (this.$s = t.Date.now() - s),
                    (this.Us = 2),
                    this.setReadyStateInternal(ci),
                    this.classList.remove(
                      "amp-unresolved",
                      "i-amphtml-unresolved"
                    ),
                    this.Gs(),
                    this.dispatchCustomEventForTesting(fe),
                    this.R1() || this.getResources().upgraded(this),
                    this.ei.signal(Ae);
                }
                Gs() {
                  this.Cs != Ks &&
                    this.Ls &&
                    !this.Ls.isLayoutSupported(this.Cs) &&
                    (bt(
                      this.getAttribute("layout"),
                      "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."
                    ),
                    bt(!1, `Layout not supported: ${this.Cs}`));
                }
                getBuildPriority() {
                  return this.Ds ? this.Ds.getBuildPriority(this) : 3;
                }
                getLayoutPriority() {
                  return this.Ls ? this.Ls.getLayoutPriority() : 3;
                }
                getDefaultActionAlias() {
                  return yt(this.isUpgraded()), this.Ls.getDefaultActionAlias();
                }
                isBuilding() {
                  return !!this.Vs;
                }
                isBuilt() {
                  return this.bs;
                }
                whenBuilt() {
                  return this.ei.whenSignal(Pe);
                }
                buildInternal() {
                  if ((rr(this), yt(this.Ds), this.Vs)) return this.Vs;
                  this.setReadyStateInternal(ci);
                  const t = this.qs();
                  this.Ws();
                  const i = t
                    .then(() => {
                      const t = this.Ks(),
                        i = t ? null : this.Ys();
                      if (t || i)
                        return (this,
                        qi(this, "consentPolicyManager", "amp-consent"))
                          .then(
                            (s) =>
                              !s ||
                              (t
                                ? s.whenPolicyUnblock(t)
                                : s.whenPurposesUnblock(i))
                          )
                          .then((t) => {
                            if (!t) throw new Error(In);
                          });
                    })
                    .then(() => yt(this.Ls).buildCallback());
                  return (this.Vs = i.then(
                    () => {
                      if (
                        ((this.bs = !0),
                        this.classList.add("i-amphtml-built"),
                        this.classList.remove(
                          "i-amphtml-notbuilt",
                          "amp-notbuilt"
                        ),
                        this.ei.signal(Pe),
                        this.R1()
                          ? this.setReadyStateInternal(
                              this.Os != ci ? this.Os : ai
                            )
                          : (this.setReadyStateInternal(di),
                            this.preconnect(!1)),
                        this.Tt && this.Js(),
                        this.Fs && ds(wt(this)).delay(this.Qs.bind(this), 1),
                        !this.getPlaceholder())
                      ) {
                        const t = this.createPlaceholder();
                        t && this.appendChild(t);
                      }
                    },
                    (t) => {
                      throw (
                        (this.ei.rejectSignal(Pe, t),
                        this.R1() && this.setReadyStateInternal(pi, t),
                        Vn(t) || bn(t, this),
                        t)
                      );
                    }
                  ));
                }
                build() {
                  return this.Vs
                    ? this.Vs
                    : this.ei
                        .whenSignal(_e)
                        .then(
                          () => (
                            this.R1() &&
                              Dn(this.getAmpDoc()).scheduleAsap(this),
                            this.whenBuilt()
                          )
                        );
                }
                mountInternal() {
                  if (this.Ss) return this.Ss;
                  this.xs = this.xs || new AbortController();
                  const { signal: t } = this.xs;
                  return (this.Ss = this.buildInternal()
                    .then(() => {
                      if ((yt(this.R1()), t.aborted)) return;
                      this.setReadyStateInternal(
                        this.Os != ai
                          ? this.Os
                          : this.Ds.usesLoading(this)
                          ? di
                          : ai
                      ),
                        (this.mn = !0);
                      const i = this.Ls.mountCallback(t);
                      return !!i && i.then(tr);
                    })
                    .then((i) => {
                      if (((this.xs = null), t.aborted)) throw wn();
                      this.ei.signal(ge),
                        (this.Ds.usesLoading(this) && !i) ||
                          this.setReadyStateInternal(fi);
                    })
                    .catch((t) => {
                      var i;
                      throw (
                        ((this.xs = null),
                        (i = t) &&
                        ("string" == typeof i
                          ? i.startsWith(Mn)
                          : "string" == typeof i.message &&
                            i.message.startsWith(Mn))
                          ? (this.Ss = null)
                          : (this.ei.rejectSignal(ge, t),
                            this.setReadyStateInternal(pi, t)),
                        t)
                      );
                    }));
                }
                mount() {
                  if (this.Ss) return this.Ss;
                  this.xs = this.xs || new AbortController();
                  const { signal: t } = this.xs;
                  return this.ei.whenSignal(_e).then(() => {
                    if (!this.R1()) return this.whenBuilt();
                    if (t.aborted) throw wn();
                    return (
                      Dn(this.getAmpDoc()).scheduleAsap(this),
                      this.whenMounted()
                    );
                  });
                }
                unmount() {
                  this.Tt && this.pause(),
                    this.R1()
                      ? (this.xs && (this.xs.abort(), (this.xs = null)),
                        Dn(this.getAmpDoc()).unschedule(this),
                        this.mn && this.Ls.unmountCallback(),
                        (this.mn = !1),
                        (this.Ss = null),
                        this.Xs(),
                        this.Tt && this.js(!0))
                      : this.Zs();
                }
                whenMounted() {
                  return this.ei.whenSignal(ge);
                }
                whenLoaded() {
                  return this.ei.whenSignal(Te);
                }
                ensureLoaded(t) {
                  return this.mount().then(() => {
                    if (this.R1())
                      return (
                        this.Ds.usesLoading(this) && this.Ls.ensureLoaded(),
                        this.whenLoaded()
                      );
                    const i = this.te();
                    return i.whenBuilt().then(() => {
                      if (
                        4 != i.getState() &&
                        ((3 != i.getState() || i.isMeasureRequested()) &&
                          i.measure(),
                        i.isDisplayed())
                      )
                        return (
                          this.getResources().scheduleLayoutOrPreload(
                            i,
                            !0,
                            t,
                            !0
                          ),
                          this.whenLoaded()
                        );
                    });
                  });
                }
                setAsContainerInternal(t) {
                  Dn(this.getAmpDoc()).setContainer(this, t);
                }
                removeAsContainerInternal() {
                  Dn(this.getAmpDoc()).removeContainer(this);
                }
                setReadyStateInternal(t, i) {
                  if (t !== this.Os && ((this.Os = t), this.R1()))
                    switch (t) {
                      case di:
                        return (
                          this.ei.signal(ve),
                          this.ei.reset(Me),
                          this.ei.reset(Te),
                          this.classList.add("i-amphtml-layout"),
                          this.toggleLoading(!0),
                          void this.dispatchCustomEventForTesting(pe)
                        );
                      case fi:
                        return (
                          this.ei.signal(ve),
                          this.ei.signal(Te),
                          this.ei.reset(Me),
                          this.classList.add("i-amphtml-layout"),
                          this.toggleLoading(!1),
                          Wt(this, "load", null, Zn),
                          void this.dispatchCustomEventForTesting(me)
                        );
                      case pi:
                        return (
                          this.ei.rejectSignal(Te, i),
                          this.toggleLoading(!1),
                          void Wt(this, "error", i, Zn)
                        );
                    }
                }
                preconnect(t) {
                  yt(this.isUpgraded()),
                    t
                      ? this.Ls.preconnectCallback(t)
                      : Bn(this.getAmpDoc(), () => {
                          this.ownerDocument &&
                            this.ownerDocument.defaultView &&
                            this.Ls.preconnectCallback(t);
                        });
                }
                R1() {
                  return !!this.Ds && this.Ds.R1();
                }
                deferredMount() {
                  return !!this.Ds && this.Ds.deferredMount(this);
                }
                isAlwaysFixed() {
                  return !!this.Ls && this.Ls.isAlwaysFixed();
                }
                updateLayoutBox(t, i = !1) {
                  this.isBuilt() && this.onMeasure(i);
                }
                onMeasure() {
                  yt(this.isBuilt());
                  try {
                    this.Ls.onLayoutMeasure();
                  } catch (t) {
                    bn(t, this);
                  }
                }
                Ws() {
                  var t;
                  return (
                    void 0 !== this.sizerElement ||
                      (this.Cs !== Js && this.Cs !== se) ||
                      ((this.sizerElement =
                        this.querySelector("i-amphtml-sizer")),
                      null === (t = this.sizerElement) ||
                        void 0 === t ||
                        t.setAttribute("slot", "i-amphtml-svc")),
                    this.sizerElement || null
                  );
                }
                ie(t) {
                  if (this.Cs !== Js)
                    if (this.Cs !== se);
                    else {
                      const i = t.querySelector(".i-amphtml-intrinsic-sizer");
                      if (!i) return;
                      i.setAttribute("src", "");
                    }
                  else ws(t, "paddingTop", "0");
                }
                se() {
                  const t =
                      this.hasAttribute("media") ||
                      (this.hasAttribute("sizes") &&
                        !this.hasAttribute("disable-inline-width")) ||
                      this.hasAttribute("heights"),
                    i = !!this.wn,
                    s = this.ownerDocument.defaultView;
                  t != i &&
                    s &&
                    (t
                      ? ((this.wn = new (class {
                          constructor(t, i) {
                            (this.i = t),
                              (this.wt = i),
                              (this.Mn = {}),
                              (this.Rn = null);
                          }
                          start() {
                            (this.Rn = this.Mn), (this.Mn = {});
                          }
                          resolveMatchQuery(t) {
                            return "1" === this.Sn(t, Ie, "1");
                          }
                          resolveListQuery(t) {
                            return this.Sn(t, Re, "");
                          }
                          complete() {
                            for (const t in this.Rn)
                              t in this.Mn || ye(this.Rn[t], this.wt, !1);
                            this.Rn = null;
                          }
                          dispose() {
                            for (const t in this.Mn)
                              ye(this.Mn[t], this.wt, !1);
                            this.Mn = {};
                          }
                          Sn(t, i, s) {
                            if (!t.trim()) return s;
                            let e = this.Mn[t];
                            return (
                              e || (D(this.Rn), (e = this.Rn[t])),
                              e || ((e = i(this.i, t)), ye(e, this.wt, !0)),
                              (this.Mn[t] = e),
                              (function (t) {
                                for (let i = 0; i < t.length; i++) {
                                  const { query: s, value: e } = t[i];
                                  if (!s || s.matches) return e;
                                }
                                return "";
                              })(e)
                            );
                          }
                        })(s, () => this.ee())),
                        this.ee())
                      : this.ne());
                }
                ne() {
                  this.wn && (this.wn.dispose(), (this.wn = null));
                }
                ee() {
                  const t = this.wn;
                  if (!t) return;
                  t.start();
                  const i = this.getAttribute("media") || null,
                    s = !i || t.resolveMatchQuery(i);
                  this.classList.toggle("i-amphtml-hidden-by-media-query", !s);
                  const e = this.hasAttribute("disable-inline-width")
                    ? null
                    : this.getAttribute("sizes");
                  e && ws(this, "width", t.resolveListQuery(e));
                  const n =
                    this.Cs === Js ? this.getAttribute("heights") : null;
                  if (n) {
                    const i = this.Ws();
                    i && ws(i, "paddingTop", t.resolveListQuery(n));
                  }
                  t.complete(), this.te().requestMeasure();
                }
                applySize(t, i, s) {
                  const e = this.Ws();
                  e &&
                    ((this.sizerElement = null),
                    this.ie(e),
                    this.re(() => {
                      e && Bt(e);
                    })),
                    void 0 !== t && ws(this, "height", t, "px"),
                    void 0 !== i && ws(this, "width", i, "px"),
                    s &&
                      (null != s.top && ws(this, "marginTop", s.top, "px"),
                      null != s.right && ws(this, "marginRight", s.right, "px"),
                      null != s.bottom &&
                        ws(this, "marginBottom", s.bottom, "px"),
                      null != s.left && ws(this, "marginLeft", s.left, "px")),
                    this.he() && this.oe(),
                    Wt(this, "amp:size-changed");
                }
                connectedCallback() {
                  if (
                    ((function () {
                      if (void 0 === Qn) {
                        const t = self.document.createElement("template");
                        Qn = "content" in t;
                      }
                      return Qn;
                    })() ||
                      void 0 !== this.Bs ||
                      (this.Bs = !!Ct(this, "template")),
                    !this.Bs && !this.Tt && Ht(this))
                  ) {
                    if (
                      ((this.Tt = !0),
                      this.everAttached ||
                        this.classList.add(
                          "i-amphtml-element",
                          "i-amphtml-notbuilt",
                          "amp-notbuilt"
                        ),
                      !this.ji)
                    ) {
                      const t = wt(this),
                        s = Zi(t).getAmpDoc(this);
                      (this.ji = s), i(s, this, this.Ds);
                    }
                    if (
                      (this.Ei || (this.Ei = cs(this.ji)),
                      this.getResources().add(this),
                      this.everAttached)
                    ) {
                      const t = this.reconstructWhenReparented();
                      t && this.Xs(),
                        this.isUpgraded() &&
                          (t &&
                            !this.R1() &&
                            this.getResources().upgraded(this),
                          this.Js(),
                          this.dispatchCustomEventForTesting(fe)),
                        this.Ds && this.R1() && this.js();
                    } else {
                      this.everAttached = !0;
                      try {
                        (this.Cs = (function (t) {
                          const i = t.getAttribute("i-amphtml-layout");
                          if (i) {
                            const e = ne(i);
                            var s;
                            return (
                              D(e),
                              (e != Js && e != se) || !t.firstElementChild
                                ? e == Ks && Ss(t, !1)
                                : ((t.sizerElement =
                                    t.querySelector("i-amphtml-sizer") ||
                                    void 0),
                                  null === (s = t.sizerElement) ||
                                    void 0 === s ||
                                    s.setAttribute("slot", "i-amphtml-svc")),
                              e
                            );
                          }
                          const { height: e, layout: n, width: r } = xe(t);
                          if (
                            (t.classList.add(re(n)),
                            he(n) &&
                              t.classList.add("i-amphtml-layout-size-defined"),
                            n == Ks)
                          )
                            Ss(t, !1);
                          else if (n == Ys)
                            Vs(t, { width: U(r), height: U(e) });
                          else if (n == Qs) ws(t, "height", U(e));
                          else if (n == Js) {
                            const i =
                              t.ownerDocument.createElement("i-amphtml-sizer");
                            i.setAttribute("slot", "i-amphtml-svc");
                            const s = le(e),
                              n = le(r);
                            $(s),
                              $(n),
                              Vs(i, { paddingTop: (s / n) * 100 + "%" }),
                              t.insertBefore(i, t.firstChild),
                              (t.sizerElement = i);
                          } else if (n == se) {
                            const i = be(t)(Ve),
                              s = i.firstElementChild;
                            L(s),
                              s.setAttribute(
                                "src",
                                `data:image/svg+xml;charset=utf-8,<svg height="${e}" width="${r}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`
                              ),
                              t.insertBefore(i, t.firstChild),
                              (t.sizerElement = i);
                          } else
                            n == Zs ||
                              n == Xs ||
                              (n == te
                                ? (r && ws(t, "width", r),
                                  e && ws(t, "height", e))
                                : n == ie &&
                                  (t.classList.add(
                                    "i-amphtml-layout-awaiting-size"
                                  ),
                                  r && ws(t, "width", r),
                                  ws(t, "height", 0)));
                          return t.setAttribute("i-amphtml-layout", n), n;
                        })(this)),
                          this.se();
                      } catch (t) {
                        bn(t, this);
                      }
                      this.Ds
                        ? this.js()
                        : (sr.has("*") || sr.has(this.tagName.toLowerCase())) &&
                          this.markUnresolved(),
                        this.isUpgraded() ||
                          this.dispatchCustomEventForTesting("amp:stubbed");
                    }
                    this.toggleLoading(!0);
                  }
                }
                he() {
                  return this.classList.contains(
                    "i-amphtml-layout-awaiting-size"
                  );
                }
                oe() {
                  this.classList.remove("i-amphtml-layout-awaiting-size");
                }
                js(t) {
                  if (this.R1()) {
                    if (!this.Ss)
                      if (
                        (Dn(this.getAmpDoc()).schedule(this),
                        this.classList.remove(
                          "amp-unresolved",
                          "i-amphtml-unresolved"
                        ),
                        this.Vs)
                      )
                        this.setReadyStateInternal(
                          this.Ds && this.Ds.usesLoading(this) ? di : ai
                        );
                      else if ((this.setReadyStateInternal(ci), !t)) {
                        const t = this.Ds.getPreconnects(this);
                        if (t && t.length > 0) {
                          const i = this.getAmpDoc();
                          Bn(i, () => {
                            const { win: s } = i;
                            if (!s) return;
                            const e = ls(s);
                            t.forEach((t) => e.url(i, t, !1));
                          });
                        }
                      }
                  } else this.ue();
                }
                ue() {
                  if (this.Bs) return;
                  if (1 != this.Us) return;
                  const i = new (yt(this.Ds))(this);
                  this.Us = 4;
                  const s = t.Date.now(),
                    e = i.upgradeCallback();
                  if (e) {
                    if ("function" == typeof e.then)
                      return e
                        .then((t) => {
                          this.zs(t || i, s);
                        })
                        .catch((t) => {
                          (this.Us = 3), l(t);
                        });
                    this.zs(e, s);
                  } else this.zs(i, s);
                }
                disconnectedCallback() {
                  this.disconnect(!1);
                }
                Js() {
                  this.bs && this.Ls.attachedCallback();
                }
                disconnect(t) {
                  !this.Bs &&
                    this.Tt &&
                    ((!t && Ht(this)) ||
                      (t && this.classList.remove("i-amphtml-element"),
                      (this.Tt = !1),
                      this.getResources().remove(this),
                      this.Ls && this.Ls.detachedCallback(),
                      this.R1() && this.unmount(),
                      this.toggleLoading(!1),
                      this.ne()));
                }
                dispatchCustomEventForTesting(t, i) {}
                prerenderAllowed() {
                  return (
                    !this.hasAttribute("noprerender") &&
                    !!this.Ds &&
                    this.Ds.prerenderAllowed(this)
                  );
                }
                previewAllowed() {
                  return !!this.Ds && this.Ds.previewAllowed(this);
                }
                isBuildRenderBlocking() {
                  return !!this.Ls && this.Ls.isBuildRenderBlocking();
                }
                createPlaceholder() {
                  return this.Ls ? this.Ls.createPlaceholderCallback() : null;
                }
                createLoaderLogo() {
                  return this.Ds ? this.Ds.createLoaderLogoCallback(this) : {};
                }
                renderOutsideViewport() {
                  return !!this.Ls && this.Ls.renderOutsideViewport();
                }
                idleRenderOutsideViewport() {
                  return !!this.Ls && this.Ls.idleRenderOutsideViewport();
                }
                getLayoutBox() {
                  return this.te().getLayoutBox();
                }
                getLayoutSize() {
                  return this.te().getLayoutSize();
                }
                getOwner() {
                  return this.te().getOwner();
                }
                getIntersectionChangeEntry() {
                  const t = this.Ls
                      ? this.Ls.getIntersectionElementLayoutBox()
                      : this.getLayoutBox(),
                    i = this.getOwner(),
                    s = Ps(this.getAmpDoc()).getRect();
                  return (function (t, i, s) {
                    const e =
                      (function (t) {
                        let i = -1 / 0,
                          s = 1 / 0,
                          e = -1 / 0,
                          n = 1 / 0;
                        for (let t = 0; t < arguments.length; t++) {
                          const r = arguments[t];
                          if (
                            r &&
                            ((i = Math.max(i, r.left)),
                            (s = Math.min(s, r.left + r.width)),
                            (e = Math.max(e, r.top)),
                            (n = Math.min(n, r.top + r.height)),
                            s < i || n < e)
                          )
                            return null;
                        }
                        return s == 1 / 0 ? null : Jt(i, e, s - i, n - e);
                      })(t, i, s) || Jt(0, 0, 0, 0);
                    return (function (t, i, s, e) {
                      let n = t,
                        r = i;
                      return (
                        i &&
                          ((r = r),
                          (s = Zt(s, -i.left, -i.top)),
                          (n = Zt(n, -i.left, -i.top)),
                          (r = Zt(r, -i.left, -i.top))),
                        {
                          time:
                            "undefined" != typeof performance && performance.now
                              ? performance.now()
                              : Date.now() - Xn,
                          rootBounds: r,
                          boundingClientRect: n,
                          intersectionRect: s,
                          intersectionRatio: e,
                        }
                      );
                    })(
                      t,
                      s,
                      e,
                      (function (t, i) {
                        const s = t.width * t.height,
                          e = i.width * i.height;
                        return 0 === e ? 0 : s / e;
                      })(e, t)
                    );
                  })(t, i && i.getLayoutBox(), s);
                }
                te() {
                  return this.getResources().getResourceForElement(this);
                }
                getResourceId() {
                  return this.te().getId();
                }
                isRelayoutNeeded() {
                  return !!this.Ls && this.Ls.isRelayoutNeeded();
                }
                getImpl(t = !0) {
                  return (t ? this.build() : this.qs()).then(() => this.Ls);
                }
                qs() {
                  return this.ei
                    .whenSignal(_e)
                    .then(() => (this.ue(), this.whenUpgraded()));
                }
                getApi() {
                  return this.getImpl().then((t) => t.getApi());
                }
                getLayout() {
                  return this.Cs;
                }
                layoutCallback(t) {
                  if ((rr(this), yt(this.isBuilt()), t.aborted))
                    return Promise.reject(wn());
                  this.dispatchCustomEventForTesting(pe);
                  const i = 0 == this.wi;
                  this.ei.reset(Me),
                    i && this.ei.signal(ve),
                    this.toggleLoading(!0);
                  const s = r(() => this.Ls.layoutCallback());
                  return (
                    this.preconnect(!0),
                    this.classList.add("i-amphtml-layout"),
                    s.then(
                      () => {
                        if (t.aborted) throw wn();
                        i && this.ei.signal(Te),
                          this.setReadyStateInternal(fi),
                          this.wi++,
                          this.toggleLoading(!1),
                          this.ks ||
                            (this.Ls.firstLayoutCompleted(),
                            (this.ks = !0),
                            this.dispatchCustomEventForTesting(me));
                      },
                      (s) => {
                        if (t.aborted) throw wn();
                        throw (
                          (i && this.ei.rejectSignal(Te, s),
                          this.setReadyStateInternal(pi, s),
                          this.wi++,
                          this.toggleLoading(!1),
                          s)
                        );
                      }
                    )
                  );
                }
                pause() {
                  this.isBuilt() &&
                    (this.Ls.pauseCallback(),
                    !this.R1() && this.Ls.unlayoutOnPause() && this.Zs());
                }
                resume() {
                  this.isBuilt() && this.Ls.resumeCallback();
                }
                unlayoutCallback() {
                  if ((rr(this), !this.isBuilt())) return !1;
                  this.ei.signal(Me);
                  const t = this.Ls.unlayoutCallback();
                  return (
                    t && this.Xs(),
                    this.dispatchCustomEventForTesting("amp:unload"),
                    t
                  );
                }
                Zs() {
                  this.te().unlayout(),
                    this.Tt && this.Ei && this.Ei.schedulePass();
                }
                Xs() {
                  (this.wi = 0),
                    (this.ks = !1),
                    this.ei.reset(ge),
                    this.ei.reset(Ee),
                    this.ei.reset(ve),
                    this.ei.reset(Te),
                    this.ei.reset("ini-load");
                }
                reconstructWhenReparented() {
                  return !!this.Ls && this.Ls.reconstructWhenReparented();
                }
                collapse() {
                  this.Ls && this.Ls.collapse();
                }
                collapsedCallback(t) {
                  this.Ls && this.Ls.collapsedCallback(t);
                }
                expand() {
                  this.Ls && this.Ls.expand();
                }
                mutatedAttributesCallback(t) {
                  this.Ls
                    ? this.Ls.mutatedAttributesCallback(t)
                    : this.R1() && Dn(this).scheduleAsap(this);
                }
                enqueAction(t) {
                  rr(this),
                    this.isBuilt()
                      ? this.le(t, !1)
                      : (void 0 === this.Fs && (this.Fs = []),
                        yt(this.Fs).push(t),
                        this.build());
                }
                Qs() {
                  if (!this.Fs) return;
                  const t = yt(this.Fs);
                  (this.Fs = null),
                    t.forEach((t) => {
                      this.le(t, !0);
                    });
                }
                le(t, i) {
                  try {
                    this.Ls.executeAction(t, i);
                  } catch (i) {
                    l("Action execution failed:", i, t.node.tagName, t.method);
                  }
                }
                Ks() {
                  let t = this.getAttribute("data-block-on-consent");
                  if (null === t) {
                    if (
                      !(function (t) {
                        let i = t
                          .getAmpDoc()
                          .getMetaByName("amp-consent-blocking");
                        return (
                          !!i &&
                          ((i = i.toUpperCase().replace(/\s+/g, "")),
                          i.split(",").includes(t.tagName))
                        );
                      })(this)
                    )
                      return null;
                    (t = "default"),
                      this.setAttribute("data-block-on-consent", t);
                  }
                  return "" == t || "default" == t
                    ? yt(this.Ls).getConsentPolicy()
                    : t;
                }
                Ys() {
                  var t;
                  const i =
                    this.getAttribute("data-block-on-consent-purposes") || null;
                  return null == i ||
                    null === (t = i.replace(/\s+/g, "")) ||
                    void 0 === t
                    ? void 0
                    : t.split(",");
                }
                getPlaceholder() {
                  return kt(
                    this,
                    (t) => t.hasAttribute("placeholder") && !nr(t)
                  );
                }
                togglePlaceholder(t) {
                  if ((rr(this), t)) {
                    const t = this.getPlaceholder();
                    t && t.classList.remove("amp-hidden");
                  } else {
                    const t =
                      (this,
                      xt("placeholder"),
                      "> [placeholder]",
                      this.querySelectorAll(Vt("> [placeholder]", ":scope")));
                    for (let i = 0; i < t.length; i++)
                      nr(t[i]) || t[i].classList.add("amp-hidden");
                  }
                }
                getFallback() {
                  return Nt(this, "fallback");
                }
                toggleFallback(t) {
                  rr(this);
                  const i = this.te().getState();
                  if (
                    (this.R1() || !t || (0 != i && 1 != i && 2 != i)) &&
                    (this.classList.toggle("amp-notsupported", t), 1 == t)
                  ) {
                    const t = this.getFallback();
                    t &&
                      ((s = this.getAmpDoc()), Vi(s, "owners")).scheduleLayout(
                        this,
                        t
                      );
                  }
                  var s;
                }
                renderStarted() {
                  this.ei.signal(Ee),
                    this.togglePlaceholder(!1),
                    this.toggleLoading(!1);
                }
                ce(t) {
                  const i = this.wi > 0 || this.ei.get(Ee);
                  return !(
                    this.Cs == Ks ||
                    this.hasAttribute("noloading") ||
                    (i && !t) ||
                    !(function (t) {
                      const i = t.tagName.toUpperCase();
                      return (
                        "AMP-AD" === (s = i) ||
                        "AMP-ANIM" === s ||
                        "AMP-EMBED" === s ||
                        "AMP-FACEBOOK" === s ||
                        "AMP-FACEBOOK-COMMENTS" === s ||
                        "AMP-FACEBOOK-PAGE" === s ||
                        "AMP-GOOGLE-DOCUMENT-EMBED" === s ||
                        "AMP-IFRAME" === s ||
                        "AMP-IMG" === s ||
                        "AMP-INSTAGRAM" === s ||
                        "AMP-LIST" === s ||
                        "AMP-PINTEREST" === s ||
                        "AMP-PLAYBUZZ" === s ||
                        "AMP-RENDER" === s ||
                        "AMP-TIKTOK" === s ||
                        "AMP-TWITTER" === s ||
                        (function (t) {
                          return "AMP-VIDEO" != t && ee.test(t);
                        })(i)
                      );
                      var s;
                    })(this) ||
                    Dt(this)
                  );
                }
                toggleLoading(t, i = !1) {
                  if (!this.ownerDocument || !this.ownerDocument.defaultView)
                    return;
                  const s = Si(this.getAmpDoc(), "loadingIndicator");
                  s &&
                    ((t = t && this.ce(i)) ? s.track(this) : s.untrack(this));
                }
                getOverflowElement() {
                  return (
                    void 0 === this.Ns &&
                      ((this.Ns = Nt(this, "overflow")),
                      this.Ns &&
                        (this.Ns.hasAttribute("tabindex") ||
                          this.Ns.setAttribute("tabindex", "0"),
                        this.Ns.hasAttribute("role") ||
                          this.Ns.setAttribute("role", "button"))),
                    this.Ns
                  );
                }
                overflowCallback(t, i, s) {
                  this.getOverflowElement(),
                    this.Ns
                      ? (this.Ns.classList.toggle("amp-visible", t),
                        (this.Ns.onclick = t
                          ? () => {
                              const t = hs(this.getAmpDoc());
                              t.forceChangeSize(this, i, s),
                                t.mutateElement(this, () => {
                                  this.overflowCallback(!1, i, s);
                                });
                            }
                          : null))
                      : t && this.warnOnMissingOverflow;
                }
                re(t, i, s = !1) {
                  this.ji
                    ? hs(this.getAmpDoc()).mutateElement(i || this, t, s)
                    : t();
                }
              }),
              t.__AMP_BASE_CE_CLASS
            );
          })(t, i);
          class e extends s {
            adoptedCallback() {
              Object.getPrototypeOf(this) !== n &&
                Object.setPrototypeOf(this, n);
            }
          }
          const n = e.prototype;
          return e;
        }
        function nr(t) {
          return "placeholder" in t;
        }
        function rr(t) {
          yt(!t.Bs);
        }
        function hr(t) {
          sr.add(t || "*");
          for (const i of ir)
            (null != t && i.tagName.toLowerCase() !== t) || i.markUnresolved();
        }
        var or = new WeakMap();
        function ur(t) {
          return (
            t.__AMP_EXTENDED_ELEMENTS || (t.__AMP_EXTENDED_ELEMENTS = {}),
            t.__AMP_EXTENDED_ELEMENTS
          );
        }
        function lr(t, i, s) {
          const e = ur(t);
          if (e[i]) {
            if (e[i] != s) {
              bt(
                e[i] == Jn,
                "%s is already registered. The script tag for %s is likely included twice in the page.",
                i,
                i
              ),
                (e[i] = s);
              for (let e = 0; e < ir.length; e++) {
                const n = ir[e];
                n.tagName.toLowerCase() == i &&
                  n.ownerDocument.defaultView == t &&
                  (cr(n, s), ir.splice(e--, 1));
              }
            }
          } else pr(t, i, s);
        }
        function cr(t, i) {
          try {
            t.upgrade(i);
          } catch (i) {
            bn(i, t);
          }
        }
        function ar(t) {
          (function (t) {
            if (!t) return [];
            const i = t.querySelectorAll(
                "script[custom-element],script[custom-template]"
              ),
              s = [];
            for (let t = 0; t < i.length; t++) {
              const e = i[t],
                n =
                  e.getAttribute("custom-element") ||
                  e.getAttribute("custom-template"),
                r = Ti(e.src);
              n &&
                r &&
                s.push({
                  script: e,
                  extensionId: n,
                  extensionVersion: r.extensionVersion,
                });
            }
            return s;
          })(t.getHeadNode()).forEach(
            ({ extensionId: i, extensionVersion: s, script: e }) => {
              t.declareExtension(i, s),
                e.addEventListener("error", () => hr(i)),
                dr(t.win, i);
            }
          ),
            t.isBodyAvailable() && t.setExtensionsKnown();
        }
        function dr(t, i) {
          ur(t)[i] || pr(t, i, Jn);
        }
        function fr(t, i, s) {
          pr(i, s, ur(t)[s] || Jn);
        }
        function pr(t, i, s) {
          ur(t)[i] = s;
          const e = er(t, mr);
          t.customElements.define(i, e);
        }
        function mr(t, i, s) {
          or.has(t) || (or.set(t, !0), ar(t));
          const e = i.localName;
          s ||
            t.declaresExtension(e) ||
            ns(t.win).installExtensionForDoc(t, e, "0.1");
        }
        var _r = "amp-img",
          Ar = [
            "alt",
            "aria-describedby",
            "aria-label",
            "aria-labelledby",
            "crossorigin",
            "referrerpolicy",
            "title",
            "importance",
            "sizes",
            "srcset",
            "src",
          ],
          Pr = class extends Kn {
            static R1() {
              return !1;
            }
            static prerenderAllowed() {
              return !0;
            }
            static usesLoading() {
              return !0;
            }
            static getPreconnects(t) {
              const i = t.getAttribute("src");
              if (i) return [i];
              const s = t.getAttribute("srcset");
              if (s) {
                const t = /\S+/.exec(s);
                if (t) return [t[0]];
              }
              return null;
            }
            constructor(t) {
              super(t),
                (this.ae = !0),
                (this.de = null),
                (this.fe = null),
                (this.pe = null),
                (this.me = 0);
            }
            mutatedAttributesCallback(t) {
              if (this.de) {
                const i = Ar.filter((i) => void 0 !== t[i]);
                t.src &&
                  !t.srcset &&
                  this.element.hasAttribute("srcset") &&
                  (this.element.removeAttribute("srcset"),
                  i.push("srcset"),
                  this.user().warn(
                    _r,
                    "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.",
                    this.element
                  )),
                  ae(i, this.element, this.de, !0),
                  this.propagateDataset(this.de),
                  Pr.R1() && !this.de.complete && this.setReadyState(di);
              }
            }
            preconnectCallback(t) {
              const i = this.element.getAttribute("src");
              if (i) ls(this.win).url(this.getAmpDoc(), i, t);
              else {
                const i = this.element.getAttribute("srcset");
                if (!i) return;
                const s = /\S+/.exec(i);
                s && ls(this.win).url(this.getAmpDoc(), s[0], t);
              }
            }
            isLayoutSupported(t) {
              return he(t);
            }
            _e() {
              if (this.de) return this.de;
              this.ae = !this.element.hasAttribute("fallback");
              const t = Yt(this.element);
              var i, s;
              return (
                t && (this.de = Ot(this.element, "> img:not([placeholder])")),
                (this.de = this.de || new Image()),
                this.de.setAttribute("decoding", "async"),
                this.element.id &&
                  this.de.setAttribute("amp-img-id", this.element.id),
                "img" == this.element.getAttribute("role") &&
                  (this.element.removeAttribute("role"),
                  this.user().error(
                    _r,
                    "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."
                  )),
                this.Ae(!0),
                ae(Ar, this.element, this.de),
                this.propagateDataset(this.de),
                ce(this.de, !0),
                (i = this.element),
                (s = this.de),
                i.hasAttribute("object-fit") &&
                  ws(s, "object-fit", i.getAttribute("object-fit")),
                i.hasAttribute("object-position") &&
                  ws(s, "object-position", i.getAttribute("object-position")),
                t || this.element.appendChild(this.de),
                this.de
              );
            }
            Ae(t) {
              if (!this.de) return;
              if (this.element.hasAttribute("i-amphtml-ssr")) return;
              if (
                this.element.hasAttribute("sizes") ||
                this.de.hasAttribute("sizes")
              )
                return;
              const i = this.element.getAttribute("srcset");
              if (!i || /[0-9]+x(?:,|$)/.test(i)) return;
              const { width: s } = this.element.getLayoutSize();
              if (!this.ge(s)) return;
              const e = this.getViewport().getWidth(),
                n = `(max-width: ${e}px) ${s}px, `;
              let r = s + "px";
              if (this.getLayout() !== Ys) {
                const t = Math.round((100 * s) / e);
                r = Math.max(t, 100) + "vw";
              }
              const h = n + r;
              t
                ? this.de.setAttribute("sizes", h)
                : this.mutateElement(() => {
                    this.de.setAttribute("sizes", h);
                  }),
                (this.me = s);
            }
            ge(t) {
              return !this.de.hasAttribute("sizes") || t > this.me;
            }
            reconstructWhenReparented() {
              return !1;
            }
            mountCallback() {
              const t = !!this.de,
                i = this._e();
              t ||
                (He(i, "load", () => {
                  this.setReadyState(fi),
                    this.firstLayoutCompleted(),
                    this.Pe();
                }),
                He(i, "error", (t) => {
                  this.setReadyState(pi, t), this.ve();
                })),
                i.complete
                  ? (this.setReadyState(fi),
                    this.firstLayoutCompleted(),
                    this.Pe())
                  : this.setReadyState(di);
            }
            unmountCallback() {
              const t = this.de;
              t &&
                !t.complete &&
                ((t.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="),
                Bt(t),
                (this.de = null));
            }
            ensureLoaded() {
              this.de.loading = "eager";
            }
            layoutCallback() {
              this._e();
              const t = this.de;
              (this.fe = He(t, "load", () => this.Pe())),
                (this.pe = He(t, "error", () => this.ve()));
              const { width: i } = this.element.getLayoutSize();
              return i <= 0 ? e() : this.loadPromise(t);
            }
            unlayoutCallback() {
              if (Pr.R1()) return;
              this.pe && (this.pe(), (this.pe = null)),
                this.fe && (this.fe(), (this.fe = null));
              const t = this.de;
              return (
                t &&
                  !t.complete &&
                  ((t.src =
                    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="),
                  Bt(t),
                  (this.de = null)),
                !0
              );
            }
            firstLayoutCompleted() {
              const t = this.getPlaceholder();
              t && t.classList.contains("i-amphtml-blurry-placeholder")
                ? bs(t, { opacity: 0 })
                : this.togglePlaceholder(!1);
            }
            Pe() {
              !this.ae &&
                this.de.classList.contains("i-amphtml-ghost") &&
                (this.de.classList.remove("i-amphtml-ghost"),
                this.toggleFallback(!1));
            }
            ve() {
              this.ae &&
                (this.de.classList.add("i-amphtml-ghost"),
                this.toggleFallback(!0),
                this.togglePlaceholder(!1),
                (this.ae = !1));
            }
            propagateDataset(t) {
              for (const i in t.dataset)
                i in this.element.dataset || delete t.dataset[i];
              for (const i in this.element.dataset)
                (i.startsWith("ampBind") && "ampBind" !== i) ||
                  (t.dataset[i] !== this.element.dataset[i] &&
                    (t.dataset[i] = this.element.dataset[i]));
            }
          },
          gr = class extends Kn {
            static prerenderAllowed() {
              return !0;
            }
            isLayoutSupported(t) {
              return t == Xs || he(t);
            }
            buildCallback() {
              !(function (t) {
                if (Yt(t)) return;
                const i = (function (t) {
                  var i;
                  return (
                    ne(
                      null !== (i = t.getAttribute("layout")) && void 0 !== i
                        ? i
                        : ""
                    ) || xe(t).layout
                  );
                })(t);
                if (i == Xs) return;
                const s = t.ownerDocument.createElement("div");
                ce(s),
                  (function (t) {
                    return (function (t, i) {
                      const s = [];
                      for (let i = t.firstChild; i; i = i.nextSibling)
                        !Dt(i) && s.push(i);
                      return s;
                    })(t);
                  })(t).forEach((t) => {
                    s.appendChild(t);
                  }),
                  t.appendChild(s);
              })(this.element);
            }
          };
        function vr(t, i, s = !1, e) {
          const n = new (Ls.getImage(t))();
          var r;
          return (
            s && (n.referrerPolicy = "no-referrer"),
            (n.src = i),
            (null === (r = t.featurePolicy) || void 0 === r
              ? void 0
              : r.allowedFeatures().includes("attribution-reporting")) &&
              (n.attributionsrc = e),
            n
          );
        }
        var Er = "amp-pixel",
          Tr = class extends Kn {
            constructor(t) {
              super(t), (this.Ee = null);
            }
            isLayoutSupported(t) {
              return !0;
            }
            buildCallback() {
              this.element.setAttribute("aria-hidden", "true"),
                (this.Te = this.element.getAttribute("referrerpolicy")),
                this.Te &&
                  bt(
                    "no-referrer" == this.Te,
                    `${Er}: invalid "referrerpolicy" value "${this.Te}". Only "no-referrer" is supported`
                  ),
                (this.element.hasAttribute("i-amphtml-ssr") &&
                  this.element.querySelector("img")) ||
                  this.getAmpDoc().whenFirstVisible().then(this.Ie.bind(this));
            }
            Ie() {
              if (this.Ee) return Rt().error(Er, "duplicate pixel"), this.Ee;
              this.Ee = ds(this.win)
                .promise(1)
                .then(() => {
                  const t = this.element.getAttribute("src");
                  if (t)
                    return fs(this.element)
                      .expandUrlAsync(this.Me(t))
                      .then((t) => {
                        if (this.win)
                          return (function (t, i, s, e) {
                            return (
                              s &&
                                "no-referrer" !== s &&
                                Mt().error(
                                  "pixel",
                                  "Unsupported referrerPolicy: %s",
                                  s
                                ),
                              "no-referrer" === s
                                ? (function (t, i, s) {
                                    if ("referrerPolicy" in Image.prototype)
                                      return vr(t, i, !0, s);
                                    {
                                      const s =
                                        ((e = {
                                          src: "about:blank",
                                          style: "display:none",
                                        }),
                                        (function (t, i) {
                                          for (const s in i)
                                            t.setAttribute(s, i[s]);
                                          return t;
                                        })(
                                          t.document.createElement("iframe"),
                                          e
                                        ));
                                      return (
                                        (s.onload = () => {
                                          vr(s.contentWindow, i);
                                        }),
                                        t.document.body.appendChild(s),
                                        s
                                      );
                                    }
                                    var e;
                                  })(t, i, e)
                                : vr(t, i, !1, e)
                            );
                          })(
                            this.win,
                            t,
                            this.Te,
                            this.element.getAttribute("attributionsrc")
                          );
                      });
                });
            }
            Me(t) {
              return (
                bt(
                  /^(https\:\/\/|\/\/)/i.test(t),
                  'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' +
                    t
                ),
                t
              );
            }
          },
          Mr = class {
            constructor(t, i, s) {
              (this.Re = ds(t)),
                (this.ye = i),
                (this.we = s || 0),
                (this.be = -1),
                (this.Ve = 0),
                (this.Ht = !1),
                (this.Se = () => {
                  this.xe();
                });
            }
            isPending() {
              return -1 != this.be;
            }
            schedule(t) {
              let i = t || this.we;
              this.Ht && i < 10 && (i = 10);
              const s = Date.now() + i;
              return (
                (!this.isPending() || s - this.Ve < -10) &&
                (this.cancel(),
                (this.Ve = s),
                (this.be = this.Re.delay(this.Se, i)),
                !0)
              );
            }
            xe() {
              (this.be = -1),
                (this.Ve = 0),
                (this.Ht = !0),
                this.ye(),
                (this.Ht = !1);
            }
            cancel() {
              this.isPending() && (this.Re.cancel(this.be), (this.be = -1));
            }
          };
        function Ir(t, i) {
          const s = i.documentElement;
          return t.some((t) => s.hasAttribute(t));
        }
        function Rr(t) {
          return Ir(["⚡4email", "amp4email"], t);
        }
        function yr(t) {
          return Ir(["⚡", "amp"], t);
        }
        var br = "Action",
          wr = "__AMP_ACTION_MAP__" + Math.random(),
          Vr = "__AMP_ACTION_QUEUE__",
          Sr = "__AMP_ACTION_HANDLER__",
          xr = { form: ["submit", "clear"] },
          Or = [
            { tagOrTarget: "AMP", method: "setState" },
            { tagOrTarget: "*", method: "focus" },
            { tagOrTarget: "*", method: "hide" },
            { tagOrTarget: "*", method: "show" },
            { tagOrTarget: "*", method: "toggleClass" },
            { tagOrTarget: "*", method: "toggleChecked" },
            { tagOrTarget: "*", method: "toggleVisibility" },
          ],
          Cr = {
            button: !0,
            checkbox: !0,
            link: !0,
            listbox: !0,
            menuitem: !0,
            menuitemcheckbox: !0,
            menuitemradio: !0,
            option: !0,
            radio: !0,
            scrollbar: !0,
            slider: !0,
            spinbutton: !0,
            switch: !0,
            tab: !0,
            treeitem: !0,
          },
          kr = class {
            constructor(
              t,
              i,
              s,
              e,
              n,
              r,
              h,
              o = "?",
              u = null,
              l = Math.random()
            ) {
              (this.node = t),
                (this.method = i),
                (this.args = s),
                (this.source = e),
                (this.caller = n),
                (this.event = r),
                (this.trust = h),
                (this.actionEventType = o),
                (this.tagOrTarget = u || t.tagName),
                (this.sequenceId = l);
            }
            satisfiesTrust(t) {
              if (!w(this.trust))
                return (
                  Rt().error(
                    br,
                    `Invalid trust for '${this.method}': ${this.trust}`
                  ),
                  !1
                );
              if (this.trust < t) {
                const t = (function (t) {
                  switch (t) {
                    case 1:
                      return "low";
                    case 3:
                      return "high";
                    default:
                      return D(2 === t), "default";
                  }
                })(this.trust);
                return (
                  Mt().error(
                    br,
                    `"${
                      this.actionEventType
                    }" event with "${t}" trust is not allowed to invoke "${this.tagOrTarget.toLowerCase()}.${
                      this.method
                    }".`
                  ),
                  !1
                );
              }
              return !0;
            }
          };
        function Nr(t) {
          return "amp-" === t.substring(0, 4);
        }
        var Dr = class {
          constructor(t) {
            (this.detail = null),
              (function (t, i) {
                const s = i || p();
                for (const i in t) {
                  const e = t[i];
                  s[i] = "function" == typeof e ? Lr : t[i];
                }
              })(t, this);
          }
        };
        function Lr() {
          yt(null);
        }
        function Ur(t, i) {
          const s = Fr.bind(null, t, i),
            e = Br.bind(null, t, i);
          let n = null;
          const r = new zr(t);
          let h, o;
          do {
            if (
              ((h = r.next()),
              h.type == Hr.EOF || (h.type == Hr.SEPARATOR && ";" == h.value))
            );
            else if (h.type == Hr.LITERAL || h.type == Hr.ID) {
              const i = h.value;
              e(r.next(), [Hr.SEPARATOR], ":");
              const u = [];
              do {
                const n = e(r.next(), [Hr.LITERAL, Hr.ID]).value;
                let h = Wn,
                  l = null;
                (o = r.peek()),
                  o.type == Hr.SEPARATOR &&
                    "." == o.value &&
                    (r.next(),
                    (h = e(r.next(), [Hr.LITERAL, Hr.ID]).value || h),
                    (o = r.peek()),
                    o.type == Hr.SEPARATOR &&
                      "(" == o.value &&
                      (r.next(), (l = $r(r, e, s)))),
                  u.push({ event: i, target: n, method: h, args: l, str: t }),
                  (o = r.peek());
              } while (o.type == Hr.SEPARATOR && "," == o.value && r.next());
              n || (n = p()), (n[i] = u);
            } else s(!1, `; unexpected token [${h.value || ""}]`);
          } while (h.type != Hr.EOF);
          return n;
        }
        function $r(t, i, s) {
          let e,
            n = t.peek(),
            r = null;
          if (n.type == Hr.OBJECT) {
            r = p();
            const { value: s } = t.next();
            (r.__AMP_OBJECT_STRING__ = s), i(t.next(), [Hr.SEPARATOR], ")");
          } else
            do {
              e = t.next();
              const { type: o, value: u } = e;
              if (o != Hr.SEPARATOR || ("," != u && ")" != u))
                if (o == Hr.LITERAL || o == Hr.ID) {
                  i(t.next(), [Hr.SEPARATOR], "="),
                    (e = i(t.next(!0), [Hr.LITERAL, Hr.ID]));
                  const o = [e];
                  if (e.type == Hr.ID)
                    for (
                      n = t.peek();
                      n.type == Hr.SEPARATOR && "." == n.value;
                      n = t.peek()
                    )
                      t.next(), (e = i(t.next(!1), [Hr.ID])), o.push(e);
                  const l =
                    0 == (h = o).length
                      ? null
                      : 1 == h.length
                      ? h[0].value
                      : { expression: h.map((t) => t.value).join(".") };
                  r || (r = p()),
                    (r[u] = l),
                    (n = t.peek()),
                    s(
                      n.type == Hr.SEPARATOR &&
                        ("," == n.value || ")" == n.value),
                      "Expected either [,] or [)]"
                    );
                } else s(!1, `; unexpected token [${e.value || ""}]`);
            } while (e.type != Hr.SEPARATOR || ")" != e.value);
          var h;
          return r;
        }
        function Fr(t, i, s, e) {
          return bt(
            s,
            "Invalid action definition in %s: [%s] %s",
            i,
            t,
            e || ""
          );
        }
        function Br(t, i, s, e, n) {
          return (
            void 0 !== n
              ? Fr(
                  t,
                  i,
                  e.includes(s.type) && s.value == n,
                  `; expected [${n}]`
                )
              : Fr(t, i, e.includes(s.type)),
            s
          );
        }
        var Hr = {
            INVALID: 0,
            EOF: 1,
            SEPARATOR: 2,
            LITERAL: 3,
            ID: 4,
            OBJECT: 5,
          },
          jr = " \t\n\r\f\v \u2028\u2029",
          zr = class {
            constructor(t) {
              (this.Oe = t), (this.Ce = -1);
            }
            next(t) {
              const i = this.ke(t || !1);
              return (this.Ce = i.index), i;
            }
            peek(t) {
              return this.ke(t || !1);
            }
            ke(t) {
              let i = this.Ce + 1;
              if (i >= this.Oe.length) return { type: Hr.EOF, index: this.Ce };
              let s = this.Oe.charAt(i);
              if (-1 != jr.indexOf(s)) {
                for (
                  i++;
                  i < this.Oe.length && -1 != jr.indexOf(this.Oe.charAt(i));
                  i++
                );
                if (i >= this.Oe.length) return { type: Hr.EOF, index: i };
                s = this.Oe.charAt(i);
              }
              if (
                t &&
                (Gr(s) ||
                  ("." == s && i + 1 < this.Oe.length && Gr(this.Oe[i + 1])))
              ) {
                let t = "." == s,
                  e = i + 1;
                for (; e < this.Oe.length; e++) {
                  const i = this.Oe.charAt(e);
                  if ("." != i) {
                    if (!Gr(i)) break;
                  } else t = !0;
                }
                const n = this.Oe.substring(i, e),
                  r = t ? parseFloat(n) : parseInt(n, 10);
                return (i = e - 1), { type: Hr.LITERAL, value: r, index: i };
              }
              if (-1 != ";:.()=,|!".indexOf(s))
                return { type: Hr.SEPARATOR, value: s, index: i };
              if (-1 != "\"'".indexOf(s)) {
                let t = -1;
                for (let e = i + 1; e < this.Oe.length; e++)
                  if (this.Oe.charAt(e) == s) {
                    t = e;
                    break;
                  }
                if (-1 == t) return { type: Hr.INVALID, index: i };
                const e = this.Oe.substring(i + 1, t);
                return (i = t), { type: Hr.LITERAL, value: e, index: i };
              }
              if ("{" == s) {
                let t = 1,
                  s = -1;
                for (let e = i + 1; e < this.Oe.length; e++) {
                  const i = this.Oe[e];
                  if (("{" == i ? t++ : "}" == i && t--, t <= 0)) {
                    s = e;
                    break;
                  }
                }
                if (-1 == s) return { type: Hr.INVALID, index: i };
                const e = this.Oe.substring(i, s + 1);
                return (i = s), { type: Hr.OBJECT, value: e, index: i };
              }
              let e = i + 1;
              for (
                ;
                e < this.Oe.length &&
                -1 ==
                  " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(
                    this.Oe.charAt(e)
                  );
                e++
              );
              const n = this.Oe.substring(i, e);
              if (((i = e - 1), t && ("true" == n || "false" == n))) {
                const t = "true" == n;
                return { type: Hr.LITERAL, value: t, index: i };
              }
              return Gr(n.charAt(0))
                ? { type: Hr.LITERAL, value: n, index: i }
                : { type: Hr.ID, value: n, index: i };
            }
          };
        function Gr(t) {
          return t >= "0" && t <= "9";
        }
        function qr(t) {
          return !!t && "function" == typeof t.getFormData;
        }
        var Wr = ["GET", "POST"],
          Kr = [v, f];
        function Yr(t, i) {
          const s = g({}, i);
          if (qr(i.body)) {
            const t = i.body;
            (s.headers["Content-Type"] = "multipart/form-data;charset=utf-8"),
              (s.body = (function (t) {
                const i = [];
                for (let s = t.next(); !s.done; s = t.next()) i.push(s.value);
                return i;
              })(t.entries()));
          }
          return { input: t, init: s };
        }
        function Qr(t, i) {
          const s = t || {},
            e = s.credentials;
          return (
            D(void 0 === e || "include" == e || "omit" == e),
            (s.method =
              void 0 === (n = s.method)
                ? "GET"
                : ((n = n.toUpperCase()), D(Wr.includes(n)), n)),
            (s.headers = s.headers || {}),
            i && (s.headers.Accept = i),
            D(null !== s.body),
            s
          );
          var n;
        }
        function Jr(t) {
          return new Promise((i) => {
            if (t.ok) return i(t);
            const { status: s } = t,
              e = Mt().createError(`HTTP error ${s}`);
            throw (
              ((e.retriable = (function (t) {
                return 415 == t || (t >= 500 && t < 600);
              })(s)),
              (e.response = t),
              e)
            );
          });
        }
        var Xr = class {
            constructor(t) {
              this.win = t;
              const i = Zi(t);
              this.Ne = i.isSingleDoc() ? i.getSingleDoc() : null;
            }
            De(t, i) {
              return (function (t, i, s, n) {
                if (!i) return e();
                const r = n.prerenderSafe ? e() : i.whenFirstVisible(),
                  h = _s(i),
                  o = pn(s),
                  u = h.hasCapability("xhrInterceptor"),
                  l = n.bypassInterceptorForDev && !1;
                return o || !u || l
                  ? r
                  : i
                      .getRootNode()
                      .documentElement.hasAttribute("allow-xhr-interception")
                  ? r
                      .then(() => h.isTrustedViewer())
                      .then((i) => {
                        if (!i && !Ne(t, "untrusted-xhr-interception")) return;
                        const e = { originalRequest: Yr(s, n) };
                        return h.sendMessageAwaitResponse("xhr", e).then((t) =>
                          (function (t, i) {
                            if (
                              (F(f(t), "Object expected: %s", t),
                              "document" != i)
                            )
                              return new Response(t.body, t.init);
                            const s = p(),
                              e = {
                                status: 200,
                                statusText: "OK",
                                getResponseHeader: (t) =>
                                  s[String(t).toLowerCase()] || null,
                              };
                            if (t.init) {
                              const i = t.init;
                              v(i.headers) &&
                                i.headers.forEach((t) => {
                                  const i = t[0],
                                    e = t[1];
                                  s[String(i).toLowerCase()] = String(e);
                                }),
                                i.status && (e.status = parseInt(i.status, 10)),
                                i.statusText &&
                                  (e.statusText = String(i.statusText));
                            }
                            return new Response(
                              t.body ? String(t.body) : "",
                              e
                            );
                          })(t, n.responseType)
                        );
                      })
                  : r;
              })(this.win, this.Ne, t, i).then((t) => {
                if (t) return t;
                if (qr(i.body)) {
                  const t = i.body;
                  i.body = t.getFormData();
                }
                return this.win.fetch.apply(null, arguments);
              });
            }
            Le(t, i = {}) {
              return (
                (t = (function (t, i, s) {
                  return (
                    D("string" == typeof i),
                    !1 !== s.ampCors && (i = En(t, i)),
                    i
                  );
                })(this.win, t, i)),
                (i = (function (t, i, s) {
                  s = s || {};
                  const e = (function (t) {
                    return t.origin || rn(t.location.href).origin;
                  })(t);
                  return (
                    e == rn(i).origin &&
                      ((s.headers = s.headers || {}),
                      (s.headers["AMP-Same-Origin"] = "true")),
                    s
                  );
                })(this.win, t, i)),
                this.De(t, i).then(
                  (t) => t,
                  (i) => {
                    const s = rn(t).origin;
                    throw Mt().createExpectedError(
                      "XHR",
                      `Failed fetching (${s}/...):`,
                      i && i.message
                    );
                  }
                )
              );
            }
            fetchJson(t, i) {
              return this.fetch(
                t,
                (function (t) {
                  const i = Qr(t, "application/json");
                  if ("POST" == i.method && !qr(i.body)) {
                    D(Kr.some((t) => t(i.body))),
                      (i.headers["Content-Type"] =
                        i.headers["Content-Type"] ||
                        "text/plain;charset=utf-8");
                    const t = i.headers["Content-Type"];
                    i.body =
                      "application/x-www-form-urlencoded" === t
                        ? cn(i.body)
                        : JSON.stringify(i.body);
                  }
                  return i;
                })(i)
              );
            }
            fetchText(t, i) {
              return this.fetch(t, Qr(i, "text/plain"));
            }
            xssiJson(t, i) {
              return i
                ? t
                    .text()
                    .then((t) =>
                      t.startsWith(i) ? B(t.slice(i.length)) : B(t)
                    )
                : t.json();
            }
            fetch(t, i) {
              const s = Qr(i);
              return this.Le(t, s).then((t) => Jr(t));
            }
            sendSignal(t, i) {
              return this.Le(t, i).then((t) => Jr(t));
            }
            getCorsUrl(t, i) {
              return En(t, i);
            }
          },
          Zr = class extends Xr {
            constructor(t) {
              super(t), (this.Ue = p());
            }
            fetch(t, i) {
              const s = (i && i.headers && i.headers.Accept) || "",
                e = !i || !i.method || "GET" === i.method,
                n = this.$e(t, s),
                r = !!this.Ue[n];
              if (e && r) return this.Ue[n].then((t) => t.clone());
              const h = super.fetch(t, i);
              return (
                e &&
                  (this.Ue[n] = h.then(
                    (t) => (delete this.Ue[n], t.clone()),
                    (t) => {
                      throw (delete this.Ue[n], t);
                    }
                  )),
                h
              );
            }
            $e(t, i) {
              return fn(vn(t, gn(this.win.location))) + i;
            }
          },
          th = { "+": "-", "/": "_", "=": "." };
        function ih(t) {
          const i = (function (t) {
            const i = new Array(t.length);
            for (let s = 0; s < t.length; s++) i[s] = String.fromCharCode(t[s]);
            return i.join("");
          })(t);
          return btoa(i).replace(/[+/=]/g, (t) => th[t]);
        }
        var sh = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc",
          eh = "CacheCidApi",
          nh = "-test-amp-cookie-tmp";
        function rh(t, i) {
          const s = (function (t) {
            try {
              return t.document.cookie;
            } catch (t) {
              return "";
            }
          })(t);
          if (!s) return null;
          const e = s.split(";");
          for (let t = 0; t < e.length; t++) {
            const s = e[t].trim(),
              n = s.indexOf("=");
            if (-1 != n && K(s.substring(0, n).trim()) == i) {
              const t = s.substring(n + 1).trim();
              return K(t, t);
            }
          }
          return null;
        }
        function hh(t, i, s, e, n = {}) {
          let r;
          !(function (t, i, s) {
            if (i.allowOnProxyOrigin)
              return void bt(
                !i.highestAvailableDomain,
                "Could not support highestAvailable Domain on proxy origin, specify domain explicitly"
              );
            bt(
              !pn(t.location.href),
              `Should never attempt to set cookie on proxy origin: ${s}`
            );
            const e = rn(t.location.href).hostname.toLowerCase(),
              n = rn(et).hostname.toLowerCase();
            bt(
              !(e == n || R(e, "." + n)),
              "Should never attempt to set cookie on proxy origin. (in depth check): " +
                s
            );
          })(t, n, i),
            n.domain
              ? (r = n.domain)
              : n.highestAvailableDomain &&
                (r = (function (t) {
                  const i =
                    t.document.head &&
                    t.document.head.querySelector(
                      "meta[name='amp-cookie-scope']"
                    );
                  if (i) {
                    const s = i.getAttribute("content") || "",
                      e = gn(t.location.href);
                    return R(e, "." + s) ? s : e.split("://")[1];
                  }
                  if (!pn(t.location.href)) {
                    const i = t.location.hostname.split(".");
                    let s = i[i.length - 1];
                    const e = (function (t) {
                      let i = nh;
                      for (; rh(t, i); ) i = nh + 0;
                      return i;
                    })(t);
                    for (let n = i.length - 2; n >= 0; n--)
                      if (
                        ((s = i[n] + "." + s),
                        oh(t, e, "delete", Date.now() + 1e3, s),
                        "delete" == rh(t, e))
                      )
                        return oh(t, e, "delete", Date.now() - 1e3, s), s;
                  }
                  return null;
                })(t)),
            oh(t, i, s, e, r, n.sameSite, n.secure);
        }
        function oh(t, i, s, e, n, r, h) {
          "ampproject.org" == n && ((s = "delete"), (e = 0));
          const o =
            encodeURIComponent(i) +
            "=" +
            encodeURIComponent(s) +
            "; path=/" +
            (n ? "; domain=" + n : "") +
            "; expires=" +
            new Date(e).toUTCString() +
            (function (t, i) {
              return i ? `; SameSite=${i}` : "";
            })(0, r) +
            (h ? "; Secure" : "");
          try {
            t.document.cookie = o;
          } catch (t) {}
        }
        var uh = "GoogleCidApi",
          lh = "AMP_TOKEN",
          ch = "$RETRIEVING",
          ah = "$OPT_OUT",
          dh = "$NOT_FOUND",
          fh = 3e4,
          ph = 31536e6,
          mh = 31536e6,
          _h = /^[a-zA-Z0-9-_.]+$/,
          Ah = "amp-cid-optout",
          Ph = { googleanalytics: "AMP_ECID_GOOGLE" },
          gh = { googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM" };
        function vh(t, i, s) {
          hh(t, i, s, Date.now() + mh, { highestAvailableDomain: !0 });
        }
        function Eh(t, i, s) {
          as(t).then((t) => {
            if (!t.isViewerStorage()) {
              const e = Th(i);
              t.setNonBoolean(e, s);
            }
          });
        }
        function Th(t) {
          return "amp-cid:" + t;
        }
        function Mh(t, i, s) {
          const { ampdoc: e } = t,
            { win: n } = e,
            { disableBackup: r, scope: h } = i,
            o = i.cookieName || h;
          return (function (t, i) {
            const { ampdoc: s } = t,
              { win: e } = s,
              { disableBackup: n, scope: r } = i,
              h = i.cookieName || r,
              o = rh(e, h);
            return o
              ? Promise.resolve(o)
              : n
              ? Promise.resolve(null)
              : as(s)
                  .then((t) => {
                    const i = Th(h);
                    return t.get(i, mh);
                  })
                  .then((t) => (t && "string" == typeof t ? t : null));
          })(t, i).then((u) => {
            if (!u && !i.createCookieIfNotPresent) return Promise.resolve(null);
            if (u)
              return (
                /^amp-/.test(u) && (vh(n, o, u), r || Eh(e, o, u)),
                Promise.resolve(u)
              );
            if (t.Fe[h]) return t.Fe[h];
            const l = bh(n).then((t) => "amp-" + t);
            return (
              Promise.all([l, s]).then((t) => {
                const i = t[0];
                rh(n, o) || (vh(n, o, i), r || Eh(e, o, i));
              }),
              (t.Fe[h] = l)
            );
          });
        }
        function Ih(t, i) {
          const s = _s(t);
          return s.isTrustedViewer().then((t) => {
            if (t)
              return (
                Rt().expectedError("CID", "Viewer does not provide cap=cid"),
                s.sendMessageAwaitResponse("cid", i).then((t) =>
                  t &&
                  !(function (t, i) {
                    try {
                      return B(t);
                    } catch (t) {
                      return null;
                    }
                  })(t)
                    ? (Rt().expectedError("CID", "invalid cid format"),
                      JSON.stringify({ time: Date.now(), cid: t }))
                    : t
                )
              );
          });
        }
        function Rh(t) {
          return JSON.stringify({ time: Date.now(), cid: t });
        }
        function yh(t) {
          return (
            j(t, 16) ||
            String(
              t.location.href +
                Date.now() +
                t.Math.random() +
                t.screen.width +
                t.screen.height
            )
          );
        }
        function bh(t) {
          const i = yh(t);
          if ("string" == typeof i) return ss(t).sha384Base64(i);
          {
            const t = i;
            return r(() => ih(t).replace(/\.+$/, ""));
          }
        }
        var wh = "Crypto";
        var Vh = ["prefetch", "preload", "preconnect", "dns-prefetch"],
          Sh = { attributes: !0, attributeFilter: ["hidden"], subtree: !0 };
        function xh(t) {
          try {
            return t.state;
          } catch (t) {
            return null;
          }
        }
        var Oh = "History",
          Ch = "AMP.History";
        function kh(t) {
          const i = _s(t);
          let s;
          return (
            i.isOvertakeHistory() || t.win.__AMP_TEST_IFRAME
              ? (s = new (class {
                  constructor(t, i) {
                    (this.win = t),
                      (this.Be = i),
                      (this.He = 0),
                      (this.je = null),
                      (this.ze = this.Be.onMessage("historyPopped", (t) =>
                        this.Ge(t)
                      ));
                  }
                  replaceStateForTarget(t) {
                    yt("#" == t[0]), this.win.location.replace(t);
                  }
                  cleanup() {
                    this.ze();
                  }
                  setOnStateUpdated(t) {
                    this.je = t;
                  }
                  qe(t, i, s) {
                    return this.We(t) ? t : i;
                  }
                  We(t) {
                    return !!t && void 0 !== t.stackIndex;
                  }
                  push(t) {
                    const i = g({ stackIndex: this.He + 1 }, t || {}),
                      s = "pushHistory";
                    return this.Be.sendMessageAwaitResponse(s, i).then((t) => {
                      const e = i,
                        n = this.qe(t, e, s);
                      return this.Ke(n), n;
                    });
                  }
                  pop(t) {
                    if (t > this.He) return this.get();
                    const i = { stackIndex: this.He },
                      s = "popHistory";
                    return this.Be.sendMessageAwaitResponse(s, i).then((t) => {
                      const i = { stackIndex: this.He - 1 },
                        e = this.qe(t, i, s);
                      return this.Ke(e), e;
                    });
                  }
                  replace(t) {
                    if (t && t.url) {
                      if (!this.Be.hasCapability("fullReplaceHistory")) {
                        const t = { stackIndex: this.He };
                        return Promise.resolve(t);
                      }
                      const i = t.url.replace(/#.*/, "");
                      t.url = i;
                    }
                    const i = g({ stackIndex: this.He }, t || {}),
                      s = "replaceHistory";
                    return this.Be.sendMessageAwaitResponse(s, i, !0).then(
                      (t) => {
                        const e = i,
                          n = this.qe(t, e, s);
                        return this.Ke(n), n;
                      }
                    );
                  }
                  get() {
                    return Promise.resolve({
                      data: void 0,
                      fragment: "",
                      stackIndex: this.He,
                      title: "",
                    });
                  }
                  Ge(t) {
                    void 0 !== t.newStackIndex &&
                      (t.stackIndex = t.newStackIndex),
                      this.We(t) && this.Ke(t);
                  }
                  Ke(t) {
                    const { stackIndex: i } = t;
                    this.He != i && ((this.He = i), this.je && this.je(t));
                  }
                  getFragment() {
                    return this.Be.hasCapability("fragment")
                      ? this.Be.sendMessageAwaitResponse(
                          "getFragment",
                          void 0,
                          !0
                        ).then((t) => {
                          if (!t) return "";
                          let i = t;
                          return "#" == i[0] && (i = i.substr(1)), i;
                        })
                      : Promise.resolve("");
                  }
                  updateFragment(t) {
                    return this.Be.hasCapability("fragment")
                      ? this.Be.sendMessageAwaitResponse(
                          "replaceHistory",
                          { fragment: t },
                          !0
                        )
                      : e();
                  }
                })(t.win, i))
              : (yi(
                  t.win,
                  "global-history-binding",
                  class {
                    constructor(t) {
                      (this.win = t), (this.Re = ds(t));
                      const { history: i } = this.win;
                      this.Ye = i.length - 1;
                      const s = xh(i);
                      let e, n;
                      s &&
                        void 0 !== s[Ch] &&
                        (this.Ye = Math.min(s[Ch], this.Ye)),
                        (this.He = this.Ye),
                        this.Je,
                        (this.je = null),
                        (this.Qe = "state" in i),
                        (this.Xe = this.Ze(this.He)),
                        i.pushState && i.replaceState
                          ? ((this.Kn =
                              i.originalPushState || i.pushState.bind(i)),
                            (this.Yn =
                              i.originalReplaceState || i.replaceState.bind(i)),
                            (e = (t, i, s) => {
                              this.Xe = t;
                              try {
                                this.Kn(t, i, s || null);
                              } catch (t) {
                                Rt().error(
                                  Oh,
                                  "pushState failed: " + t.message
                                );
                              }
                            }),
                            (n = (t, i, s) => {
                              this.Xe = t;
                              try {
                                void 0 !== s ? this.Yn(t, i, s) : this.Yn(t, i);
                              } catch (t) {
                                Rt().error(
                                  Oh,
                                  "replaceState failed: " + t.message
                                );
                              }
                            }),
                            i.originalPushState ||
                              (i.originalPushState = this.Kn),
                            i.originalReplaceState ||
                              (i.originalReplaceState = this.Yn))
                          : ((e = (t, i, s) => {
                              this.Xe = t;
                            }),
                            (n = (t, i, s) => {
                              this.Xe = t;
                            })),
                        (this.Qn = e),
                        (this.Xn = n);
                      try {
                        this.Xn(this.Ze(this.He, !0));
                      } catch (t) {
                        Rt().error(
                          Oh,
                          "Initial replaceState failed: " + t.message
                        );
                      }
                      (i.pushState = this.tr.bind(this)),
                        (i.replaceState = this.ir.bind(this)),
                        (this.sr = (t) => {
                          t.state, this.er();
                        }),
                        this.win.addEventListener("popstate", this.sr);
                    }
                    cleanup() {
                      this.Kn && (this.win.history.pushState = this.Kn),
                        this.Yn && (this.win.history.replaceState = this.Yn),
                        this.win.removeEventListener("popstate", this.sr);
                    }
                    Ze(t, i) {
                      const s = p(i ? this.nr() : void 0);
                      return (s[Ch] = t), s;
                    }
                    setOnStateUpdated(t) {
                      this.je = t;
                    }
                    push(t) {
                      return this.rr(() => {
                        const i = this.hr(this.nr(), t || {});
                        return (
                          this.tr(
                            i,
                            void 0,
                            i.fragment ? "#" + i.fragment : void 0
                          ),
                          r(() => this.hr(i, { stackIndex: this.He }))
                        );
                      });
                    }
                    pop(t) {
                      return (
                        (t = Math.max(t, this.Ye)),
                        this.rr(() => this.ur(this.He - t + 1)).then((t) =>
                          this.hr(this.nr(), { stackIndex: t })
                        )
                      );
                    }
                    replace(t = {}) {
                      return this.rr(() => {
                        const i = this.hr(this.nr(), t || {}),
                          s = (i.url || "").replace(/#.*/, ""),
                          e = i.fragment ? "#" + i.fragment : "";
                        return (
                          this.ir(i, i.title, s || e ? s + e : void 0),
                          r(() => this.hr(i, { stackIndex: this.He }))
                        );
                      });
                    }
                    get() {
                      return r(() =>
                        this.hr(this.nr(), { stackIndex: this.He })
                      );
                    }
                    backTo(t) {
                      return (
                        (t = Math.max(t, this.Ye)),
                        this.rr(() => this.ur(this.He - t))
                      );
                    }
                    er() {
                      let t = this.nr();
                      const i = t ? t[Ch] : void 0;
                      let s = this.He;
                      const e = this.Je;
                      (this.Je = void 0),
                        s > this.win.history.length - 2 &&
                          ((s = this.win.history.length - 2),
                          this.Ke(this.hr(t, { stackIndex: s }))),
                        null == i
                          ? (s += 1)
                          : (s =
                              i < this.win.history.length
                                ? i
                                : this.win.history.length - 1),
                        t || (t = {}),
                        (t[Ch] = s),
                        this.Xn(t, void 0, void 0),
                        s != this.He && this.Ke(this.hr(t, { stackIndex: s })),
                        s < this.Ye && (this.Ye = s),
                        e && e.resolve();
                    }
                    nr() {
                      return this.Qe ? xh(this.win.history) : this.Xe;
                    }
                    lr() {
                      yt(!this.Je);
                    }
                    rr(t) {
                      return this.Je ? this.Je.promise.then(t, t) : t();
                    }
                    cr() {
                      this.lr();
                      const t = new n(),
                        { reject: i, resolve: s } = t,
                        e = this.Re.timeoutPromise(500, t.promise);
                      return (
                        (this.Je = { promise: e, resolve: s, reject: i }), e
                      );
                    }
                    ur(t) {
                      if ((this.lr(), t <= 0)) return Promise.resolve(this.He);
                      this.Xe = this.Ze(this.He - t);
                      const i = this.cr();
                      return (
                        this.win.history.go(-t),
                        i.then(() => Promise.resolve(this.He))
                      );
                    }
                    tr(t, i, s) {
                      this.lr(), t || (t = {});
                      let e = this.He + 1;
                      (t[Ch] = e),
                        this.Qn(t, i, s),
                        e != this.win.history.length - 1 &&
                          ((e = this.win.history.length - 1),
                          (t[Ch] = e),
                          this.Xn(t));
                      const n = this.hr(t, { stackIndex: e });
                      this.Ke(n);
                    }
                    replaceStateForTarget(t) {
                      yt("#" == t[0]),
                        this.rr(() => {
                          this.win.removeEventListener("popstate", this.sr);
                          try {
                            this.win.location.replace(t);
                          } finally {
                            this.win.addEventListener("popstate", this.sr);
                          }
                          return this.ir(), e();
                        });
                    }
                    ir(t, i, s) {
                      this.lr(), t || (t = {});
                      const e = Math.min(this.He, this.win.history.length - 1);
                      (t[Ch] = e), this.Xn(t, i, s);
                      const n = this.hr(t, { stackIndex: e });
                      this.Ke(n);
                    }
                    Ke(t) {
                      this.lr(),
                        (t.stackIndex = Math.min(
                          t.stackIndex,
                          this.win.history.length - 1
                        )),
                        this.He != t.stackIndex &&
                          ((this.He = t.stackIndex), this.je && this.je(t));
                    }
                    getFragment() {
                      let { hash: t } = this.win.location;
                      return (t = t.substr(1)), Promise.resolve(t);
                    }
                    updateFragment(t) {
                      return this.replace({ fragment: t });
                    }
                    hr(t, i) {
                      const s = g(g({}, (t && t.data) || {}), i.data || {});
                      return g(g(g({}, t || {}), i), {}, { data: s });
                    }
                  }
                ),
                (s = wi(t.win, "global-history-binding"))),
            new (class {
              constructor(t, i) {
                (this.ji = t),
                  (this.Re = ds(t.win)),
                  (this.ar = i),
                  (this.He = 0),
                  (this.dr = []),
                  (this.es = []),
                  this.ar.setOnStateUpdated(this.je.bind(this));
              }
              cleanup() {
                this.ar.cleanup();
              }
              push(t, i) {
                return this.pr(
                  () =>
                    this.ar
                      .push(i)
                      .then(
                        (i) => (
                          this.je(i),
                          t && (this.dr[i.stackIndex] = t),
                          i.stackIndex
                        )
                      ),
                  "push"
                );
              }
              pop(t) {
                return this.pr(
                  () =>
                    this.ar.pop(t).then((t) => {
                      this.je(t);
                    }),
                  "pop"
                );
              }
              replace(t) {
                return this.pr(() => this.ar.replace(t), "replace");
              }
              get() {
                return this.pr(() => this.ar.get(), "get");
              }
              goBack(t) {
                return this.pr(
                  () =>
                    this.He <= 0 && !t
                      ? e()
                      : this.ar.pop(this.He).then((t) => {
                          this.je(t);
                        }),
                  "goBack"
                );
              }
              replaceStateForTarget(t) {
                yt("#" == t[0]);
                const i = this.ji.win.location.hash;
                return this.push(() => {
                  this.ji.win.location.replace(i || "#");
                }).then(() => {
                  this.ar.replaceStateForTarget(t);
                });
              }
              getFragment() {
                return this.ar.getFragment();
              }
              updateFragment(t) {
                return (
                  "#" == t[0] && (t = t.substr(1)), this.ar.updateFragment(t)
                );
              }
              je(t) {
                (this.He = t.stackIndex), this.mr(t);
              }
              mr(t) {
                if (this.He >= this.dr.length - 1) return;
                const i = [];
                for (let t = this.dr.length - 1; t > this.He; t--)
                  this.dr[t] && (i.push(this.dr[t]), (this.dr[t] = void 0));
                if ((this.dr.splice(this.He + 1), i.length > 0))
                  for (let s = 0; s < i.length; s++)
                    this.Re.delay(() => i[s](t), 1);
              }
              pr(t, i) {
                const s = new n(),
                  { promise: e, reject: r, resolve: h } = s,
                  o = new Error("history trace for " + i + ": ");
                return (
                  this.es.push({
                    callback: t,
                    resolve: h,
                    reject: r,
                    trace: o,
                  }),
                  1 == this.es.length && this._r(),
                  e
                );
              }
              _r() {
                if (0 == this.es.length) return;
                const t = this.es[0];
                let i;
                try {
                  i = t.callback();
                } catch (t) {
                  i = Promise.reject(t);
                }
                i.then(
                  (i) => {
                    t.resolve(i);
                  },
                  (i) => {
                    Rt().error(Oh, "failed to execute a task:", i),
                      t.trace &&
                        ((t.trace.message += i), Rt().error(Oh, t.trace)),
                      t.reject(i);
                  }
                ).then(() => {
                  this.es.splice(0, 1), this._r();
                });
              }
            })(t, s)
          );
        }
        new WeakMap(), new WeakMap();
        var Nh = [
            '<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>',
          ],
          Dh = class {
            constructor(t, i) {
              (this.win = t),
                (this.Ar = i),
                (this.gr = []),
                (this.Pr = new Es()),
                (this.vr = (t) => {
                  b(t.target) && this.Er(t.target);
                }),
                (this.Tr = (i) => {
                  ds(t).delay(() => {
                    this.win.document.activeElement &&
                      this.Er(this.win.document.activeElement);
                  }, 500);
                }),
                this.win.document.addEventListener("focus", this.vr, !0),
                this.win.addEventListener("blur", this.Tr);
            }
            Qt() {
              this.win.document.removeEventListener("focus", this.vr, !0),
                this.win.removeEventListener("blur", this.Tr);
            }
            onFocus(t) {
              return this.Pr.add(t);
            }
            Er(t) {
              const i = Date.now();
              0 == this.gr.length || this.gr[this.gr.length - 1].el != t
                ? this.gr.push({ el: t, time: i })
                : (this.gr[this.gr.length - 1].time = i),
                this.purgeBefore(i - this.Ar),
                this.Pr.fire(t);
            }
            getLast() {
              return 0 == this.gr.length
                ? null
                : this.gr[this.gr.length - 1].el;
            }
            purgeBefore(t) {
              let i = this.gr.length - 1;
              for (let s = 0; s < this.gr.length; s++)
                if (this.gr[s].time >= t) {
                  i = s - 1;
                  break;
                }
              -1 != i && this.gr.splice(0, i + 1);
            }
            hasDescendantsOf(t) {
              this.win.document.activeElement &&
                this.Er(this.win.document.activeElement);
              for (let i = 0; i < this.gr.length; i++)
                if (t.contains(this.gr[i].el)) return !0;
              return !1;
            }
          },
          Lh = null,
          Uh = ["gclid", "gclsrc"],
          $h = [/^t.co$/];
        function Fh() {
          return bt(Lh, "E#19457 trackImpressionPromise");
        }
        function Bh(t, i, s, e) {
          let n;
          try {
            n = t.open(i, s, e);
          } catch (t) {
            Rt().error("DOM", "Failed to open url on target: ", s, t);
          }
          var r, h;
          return (
            !n &&
              "_top" != s &&
              ("number" != typeof h && (h = 0),
              h + "noopener".length > (r = e || "").length ||
                -1 === r.indexOf("noopener", h)) &&
              (n = t.open(i, "_top")),
            n
          );
        }
        var Hh = "navigation",
          jh = "click",
          zh = "contextmenu",
          Gh = ["_top", "_blank"],
          qh = "data-a4a-orig-href";
        function Wh(t, i) {
          const s = Ct(i.target, "A");
          if (!s || !s.href) return;
          const e = s.getAttribute(qh) || s.getAttribute("href");
          if (!e) return;
          const n = { CLICK_X: () => i.pageX, CLICK_Y: () => i.pageY },
            r = fs(s).expandUrlSync(e, n, { CLICK_X: !0, CLICK_Y: !0 });
          r != e &&
            (s.getAttribute(qh) || s.setAttribute(qh, e),
            s.setAttribute("href", r));
        }
        function Kh(t) {
          return `${t.origin}${t.pathname}${t.search}`;
        }
        function Yh(t) {
          return v(t) ? t : [t];
        }
        function Qh(t) {
          yi(
            t,
            "platform",
            class {
              constructor(t) {
                (this.do = t.navigator), (this.i = t);
              }
              isAndroid() {
                return /Android/i.test(this.do.userAgent);
              }
              isIos() {
                return /iPhone|iPad|iPod/i.test(this.do.userAgent);
              }
              isSafari() {
                return (
                  /Safari/i.test(this.do.userAgent) &&
                  !this.isChrome() &&
                  !this.isEdge() &&
                  !this.isFirefox() &&
                  !this.isOpera()
                );
              }
              isChrome() {
                return (
                  /Chrome|CriOS/i.test(this.do.userAgent) &&
                  !this.isEdge() &&
                  !this.isOpera()
                );
              }
              isFirefox() {
                return (
                  /Firefox|FxiOS/i.test(this.do.userAgent) && !this.isEdge()
                );
              }
              isOpera() {
                return /OPR\/|Opera|OPiOS/i.test(this.do.userAgent);
              }
              isEdge() {
                return /Edge/i.test(this.do.userAgent);
              }
              isWebKit() {
                return /WebKit/i.test(this.do.userAgent) && !this.isEdge();
              }
              isWindows() {
                return /Windows/i.test(this.do.userAgent);
              }
              isStandalone() {
                return (
                  (this.isIos() && this.do.standalone) ||
                  (this.isChrome() &&
                    this.i.matchMedia("(display-mode: standalone)").matches)
                );
              }
              isBot() {
                return /bot/i.test(this.do.userAgent);
              }
              getMajorVersion() {
                return this.isSafari()
                  ? this.isIos()
                    ? this.getIosMajorVersion() || 0
                    : this.fo(/\sVersion\/(\d+)/, 1)
                  : this.isChrome()
                  ? this.fo(/(Chrome|CriOS)\/(\d+)/, 2)
                  : this.isFirefox()
                  ? this.fo(/(Firefox|FxiOS)\/(\d+)/, 2)
                  : this.isOpera()
                  ? this.fo(/(OPR|Opera|OPiOS)\/(\d+)/, 2)
                  : this.isEdge()
                  ? this.fo(/Edge\/(\d+)/, 1)
                  : 0;
              }
              fo(t, i) {
                if (!this.do.userAgent) return 0;
                const s = this.do.userAgent.match(t);
                return !s || i >= s.length ? 0 : parseInt(s[i], 10);
              }
              getIosVersionString() {
                var t, i, s;
                return (
                  (this.isIos() &&
                    (null === (t = this.do.userAgent) ||
                    void 0 === t ||
                    null ===
                      (i = t.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/)) ||
                    void 0 === i ||
                    null === (s = i[1]) ||
                    void 0 === s
                      ? void 0
                      : s.replace(/_/g, "."))) ||
                  ""
                );
              }
              getIosMajorVersion() {
                const t = this.getIosVersionString();
                return "" == t ? null : Number(t.split(".")[0]);
              }
            }
          );
        }
        var Jh = class {
          constructor() {
            (this.As = []), (this.Ir = {}), (this.Mr = 0), (this.Rr = 0);
          }
          getSize() {
            return this.As.length;
          }
          getLastEnqueueTime() {
            return this.Mr;
          }
          getLastDequeueTime() {
            return this.Rr;
          }
          getTaskById(t) {
            return this.Ir[t] || null;
          }
          enqueue(t) {
            yt(!this.Ir[t.id]),
              this.As.push(t),
              (this.Ir[t.id] = t),
              (this.Mr = Date.now());
          }
          dequeue(t) {
            const i = this.Ir[t.id];
            return (
              !!this.removeAtIndex(t, this.As.indexOf(i)) &&
              ((this.Rr = Date.now()), !0)
            );
          }
          peek(t) {
            let i = 1e6,
              s = null;
            for (let e = 0; e < this.As.length; e++) {
              const n = this.As[e],
                r = t(n);
              r < i && ((i = r), (s = n));
            }
            return s;
          }
          forEach(t) {
            this.As.forEach(t);
          }
          removeAtIndex(t, i) {
            const s = this.Ir[t.id];
            return !(
              !s ||
              this.As[i] != s ||
              (this.As.splice(i, 1), delete this.Ir[t.id], 0)
            );
          }
          purge(t) {
            let i = this.As.length;
            for (; i--; ) t(this.As[i]) && this.removeAtIndex(this.As[i], i);
          }
        };
        function Xh(t) {
          return t.queryCommandSupported("copy");
        }
        function Zh(t) {
          return t.hasAttribute("hidden");
        }
        var to = "STANDARD-ACTIONS",
          io = /^i-amphtml-/;
        var so = "Storage",
          eo = class {
            constructor(t) {
              this.Be = t;
            }
            loadBlob(t) {
              return this.Be.sendMessageAwaitResponse("loadStore", {
                origin: t,
              }).then((t) => t.blob);
            }
            saveBlob(t, i) {
              return this.Be.sendMessageAwaitResponse("saveStore", {
                origin: t,
                blob: i,
              }).catch((t) => {
                throw Rt().createExpectedError(so, "Failed to save store: ", t);
              });
            }
          };
        function no(t) {
          bi(
            t,
            "storage",
            function () {
              const i = _s(t),
                s = parseInt(i.getParam("storage"), 10)
                  ? new eo(i)
                  : new (class {
                      constructor(t) {
                        if (((this.win = t), (this.yr = this.wr()), !this.yr)) {
                          const t = new Error("localStorage not supported.");
                          Rt().expectedError(so, t);
                        }
                      }
                      wr() {
                        try {
                          return (
                            "localStorage" in this.win &&
                            (this.win.localStorage.getItem("test"), !0)
                          );
                        } catch (t) {
                          return !1;
                        }
                      }
                      br(t) {
                        return `amp-store:${t}`;
                      }
                      loadBlob(t) {
                        return new Promise((i) => {
                          this.yr
                            ? i(this.win.localStorage.getItem(this.br(t)))
                            : i(null);
                        });
                      }
                      saveBlob(t, i) {
                        return new Promise((s) => {
                          this.yr
                            ? (this.win.localStorage.setItem(this.br(t), i),
                              s())
                            : s();
                        });
                      }
                    })(t.win);
              return new (class {
                constructor(t, i, s) {
                  (this.ampdoc = t),
                    (this.Be = i),
                    (this.ar = s),
                    (this.Sr = s instanceof eo),
                    (this.h = gn(this.ampdoc.win.location)),
                    (this.Or = null);
                }
                Vr() {
                  return this.Cr(), this;
                }
                get(t, i) {
                  return this.kr().then((s) => s.get(t, i));
                }
                set(t, i, s) {
                  return yt("boolean" == typeof i), this.setNonBoolean(t, i, s);
                }
                setNonBoolean(t, i, s) {
                  return this.Nr((e) => e.set(t, i, s));
                }
                remove(t) {
                  return this.Nr((i) => i.remove(t));
                }
                isViewerStorage() {
                  return this.Sr;
                }
                kr() {
                  return (
                    this.Or ||
                      (this.Or = this.ar
                        .loadBlob(this.h)
                        .then((t) => (t ? B(atob(t)) : {}))
                        .catch(
                          (t) => (
                            Rt().expectedError(so, "Failed to load store: ", t),
                            {}
                          )
                        )
                        .then(
                          (t) =>
                            new (class {
                              constructor(t, i) {
                                (this.obj = _(t)),
                                  (this.Dr = i || 8),
                                  (this.Lr =
                                    this.obj.vv || Object.create(null)),
                                  this.obj.vv || (this.obj.vv = this.Lr);
                              }
                              get(t, i) {
                                const s = this.Lr[t],
                                  e = s ? s.t : void 0,
                                  n = !i || null == e || e + i > Date.now();
                                return s && n ? s.v : void 0;
                              }
                              set(t, i, s) {
                                if (
                                  (yt("__proto__" != t && "prototype" != t),
                                  void 0 !== this.Lr[t])
                                ) {
                                  const e = this.Lr[t];
                                  let n = Date.now();
                                  s && (n = e.t), (e.v = i), (e.t = n);
                                } else this.Lr[t] = { v: i, t: Date.now() };
                                const e = Object.keys(this.Lr);
                                if (e.length > this.Dr) {
                                  let t = 1 / 0,
                                    i = null;
                                  for (let s = 0; s < e.length; s++) {
                                    const n = this.Lr[e[s]];
                                    n.t < t && ((i = e[s]), (t = n.t));
                                  }
                                  i && delete this.Lr[i];
                                }
                              }
                              remove(t) {
                                delete this.Lr[t];
                              }
                            })(t)
                        )),
                    this.Or
                  );
                }
                Nr(t) {
                  return this.kr()
                    .then((i) => {
                      t(i);
                      const s = btoa(JSON.stringify(i.obj));
                      return this.ar.saveBlob(this.h, s);
                    })
                    .then(this.Ur.bind(this));
                }
                Cr() {
                  this.Be.onBroadcast((t) => {
                    "amp-storage-reset" == t.type &&
                      t.origin == this.h &&
                      (this.Or = null);
                  });
                }
                Ur() {
                  this.Be.broadcast({
                    type: "amp-storage-reset",
                    origin: this.h,
                  });
                }
              })(t, i, s).Vr();
            },
            !0
          );
        }
        var ro = "__AMP_IMPL_",
          ho = () => {};
        function oo(t) {
          yi(
            t,
            "timer",
            class {
              constructor(t) {
                (this.win = t),
                  (this.$r = this.win.Promise.resolve()),
                  (this.Fr = 0),
                  (this.Br = {}),
                  (this.Hr = Date.now());
              }
              timeSinceStart() {
                return Date.now() - this.Hr;
              }
              delay(t, i) {
                if (!i) {
                  const i = "p" + this.Fr++;
                  return (
                    this.$r
                      .then(() => {
                        this.Br[i] ? delete this.Br[i] : t();
                      })
                      .catch(bn),
                    i
                  );
                }
                return this.win.setTimeout(() => {
                  try {
                    t();
                  } catch (t) {
                    throw (bn(t), t);
                  }
                }, i);
              }
              cancel(t) {
                "string" != typeof t
                  ? this.win.clearTimeout(t)
                  : (this.Br[t] = !0);
              }
              promise(t) {
                return new this.win.Promise((i) => {
                  if (-1 == this.delay(i, t))
                    throw new Error("Failed to schedule timer.");
                });
              }
              timeoutPromise(t, i, s) {
                let e;
                const n = new this.win.Promise((i, n) => {
                  if (
                    ((e = this.delay(() => {
                      n(Mt().createError(s || "timeout"));
                    }, t)),
                    -1 == e)
                  )
                    throw new Error("Failed to schedule timer.");
                });
                if (!i) return n;
                const r = () => {
                  this.cancel(e);
                };
                return i.then(r, r), this.win.Promise.race([n, i]);
              }
              poll(t, i) {
                return new this.win.Promise((s) => {
                  const e = this.win.setInterval(() => {
                    i() && (this.win.clearInterval(e), s());
                  }, t);
                });
              }
            }
          );
        }
        var uo = "Expander",
          lo = class {
            constructor(t, i, s, e, n, r) {
              (this.jr = t),
                (this.zr = i),
                (this.Gr = s),
                (this.qr = e),
                (this.Wr = n),
                (this.Kr = !r);
            }
            expand(t) {
              if (!t.length) return this.qr ? t : Promise.resolve(t);
              const i = this.jr.getExpr(this.zr, this.Wr),
                s = this.Yr(t, i);
              return s.length
                ? this.Jr(t, s)
                : this.qr
                ? t
                : Promise.resolve(t);
            }
            getMacroNames(t) {
              const i = this.jr.getExpr(this.zr, this.Wr);
              return t.match(i) || [];
            }
            Yr(t, i) {
              const s = [];
              return (
                t.replace(i, (t, i, e) => {
                  const { length: n } = t,
                    r = { start: e, stop: n + e - 1, name: i, length: n };
                  s.push(r);
                }),
                s
              );
            }
            Jr(t, i) {
              const s = [];
              let e = 0,
                n = 0,
                r = i[n],
                h = 0,
                o = !1;
              const u = (c) => {
                let a = "",
                  d = [];
                const f = [];
                for (; e < t.length && n <= i.length; ) {
                  const l = a.trim();
                  if (r && e === r.start) {
                    let o;
                    l &&
                      d.push(
                        h
                          ? (p = a).trimStart
                            ? p.trimStart()
                            : (p + "_").trim().slice(0, -1)
                          : a
                      ),
                      (o =
                        this.zr && m(this.zr, r.name)
                          ? {
                              name: r.name,
                              prioritized: this.zr[r.name],
                              encode: c,
                            }
                          : g(
                              g({}, this.jr.get(r.name)),
                              {},
                              { name: r.name, encode: c }
                            )),
                      (e = r.stop + 1),
                      (r = i[++n]),
                      "(" === t[e]
                        ? (e++, h++, s.push(o), d.push(u(!1)))
                        : d.push(this.Qr(o)),
                      (a = "");
                  } else if ("`" === t[e])
                    o
                      ? ((o = !1), a.length && d.push(a))
                      : ((o = !0), l && d.push(l)),
                      (a = ""),
                      e++;
                  else if (h && "," === t[e] && !o)
                    l && d.push(l),
                      f.push(d),
                      (d = []),
                      "," === t[e + 1] && (f.push([""]), e++),
                      (a = ""),
                      e++;
                  else {
                    if (h && ")" === t[e] && !o) {
                      e++, h--;
                      const t = s.pop();
                      return l && d.push(l), f.push(d), this.Qr(t, f);
                    }
                    (a += t[e]), e++;
                  }
                  e === t.length && a.length && d.push(a);
                }
                var p;
                return this.qr
                  ? d.join("")
                  : Promise.all(d)
                      .then((t) => t.join(""))
                      .catch((t) => (l(t), ""));
              };
              return u(this.Kr);
            }
            Qr(t, i) {
              const { encode: s, name: e } = t;
              let n;
              if (
                (null != t.prioritized
                  ? (n = t.prioritized)
                  : this.qr && null != t.sync
                  ? (n = t.sync)
                  : this.qr
                  ? (Mt().error(uo, "ignoring async replacement key: ", t.name),
                    (n = ""))
                  : (n = t.async || t.sync),
                this.qr)
              ) {
                const t = this.Xr(n, e, i);
                return s ? encodeURIComponent(t) : t;
              }
              return this.Zr(n, e, i).then((t) =>
                s ? encodeURIComponent(t) : t
              );
            }
            Zr(t, i, s) {
              let e;
              try {
                if ("function" == typeof t) {
                  const i = t;
                  e = s ? this.th(s).then((t) => i.apply(null, t)) : r(i);
                } else e = Promise.resolve(t);
                return e
                  .then((t) => {
                    let e;
                    return this.ih(i, t, s), (e = null == t ? "" : t), e;
                  })
                  .catch((t) => (l(t), this.ih(i, "", s), Promise.resolve("")));
              } catch (t) {
                return l(t), this.ih(i, "", s), Promise.resolve("");
              }
            }
            th(t) {
              return Promise.all(
                t.map((t) => Promise.all(t).then((t) => t.join("")))
              );
            }
            Xr(t, i, s) {
              try {
                let e,
                  n = t;
                return (
                  "function" == typeof t && (n = t.apply(null, this.sh(s))),
                  n && "function" == typeof n.then
                    ? (Mt().error(uo, "ignoring async macro resolution"),
                      (e = ""))
                    : "string" == typeof n ||
                      "number" == typeof n ||
                      "boolean" == typeof n
                    ? (this.ih(i, n, s), (e = n.toString()))
                    : (this.ih(i, "", s), (e = "")),
                  e
                );
              } catch (t) {
                return l(t), this.ih(i, "", s), "";
              }
            }
            sh(t) {
              return t ? t.map((t) => t.join("")) : t;
            }
            ih(t, i, s) {
              if (!this.Gr) return;
              let e = "";
              s && (e = `(${s.filter((t) => "" !== t).join(",")})`),
                (this.Gr[`${t}${e}`] = i || "");
            }
          },
          co = {
            navigationStart: 1,
            redirectStart: 1,
            redirectEnd: 1,
            fetchStart: 1,
            domainLookupStart: 1,
            domainLookupEnd: 1,
            connectStart: 1,
            secureConnectionStart: 1,
            connectEnd: 1,
            requestStart: 1,
            responseStart: 1,
            responseEnd: 1,
            domLoading: 2,
            domInteractive: 2,
            domContentLoaded: 2,
            domComplete: 2,
            loadEventStart: 3,
            loadEventEnd: 4,
          };
        function ao(t, i, s) {
          const n = co[i] || 3,
            r = s ? co[s] || 3 : n,
            h = Math.max(n, r);
          let o;
          if (1 === h) o = e();
          else if (2 === h) o = vi(t.document);
          else if (3 === h) o = Ge(t);
          else if (4 === h) {
            const i = ds(t);
            o = Ge(t).then(() => i.promise(1));
          }
          return yt(o), o.then(() => fo(t, i, s));
        }
        function fo(t, i, s) {
          const e = t.performance && t.performance.timing;
          if (!e || 0 == e.navigationStart) return;
          const n = void 0 === s ? e[i] : e[s] - e[i];
          return !w(n) || n < 0 ? void 0 : n;
        }
        function po(t, i) {
          const s = t.performance && t.performance.navigation;
          if (s && void 0 !== s[i]) return s[i];
        }
        var mo = "UrlReplacements";
        function _o(t) {
          return () => new Date()[t]();
        }
        function Ao(t, i) {
          return () => t[i];
        }
        function Po(t, i) {
          return i
            ? (bt(
                "ISOCountry" === i,
                "The value passed to AMP_GEO() is not valid name:" + i
              ),
              (t && t[i]) || "unknown")
            : (null == t ? void 0 : t.matchedISOCountryGroups.join(",")) ||
                "unknown";
        }
        var go = "Viewer",
          vo = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;
        function Eo(t) {
          let i;
          return (
            t instanceof Error
              ? (((t = h(t)).message = "No messaging channel: " + t.message),
                (i = t))
              : (i = new Error("No messaging channel: " + t)),
            (i.message = C(i.message)),
            i
          );
        }
        var To = class {
            static solveYValueFromXValue(t, i, s, e, n, r, h, o, u) {
              return To.eh(To.nh(t, i, e, r, o), s, n, h, u);
            }
            static nh(t, i, s, e, n) {
              const r = 1e-6;
              let h = (t - i) / (n - i);
              if (h <= 0) return 0;
              if (h >= 1) return 1;
              let o = 0,
                u = 1,
                l = 0;
              for (let c = 0; c < 8; c++) {
                l = To.rh(h, i, s, e, n);
                const c = (To.rh(h + r, i, s, e, n) - l) / r;
                if (Math.abs(l - t) < r) return h;
                if (Math.abs(c) < r) break;
                l < t ? (o = h) : (u = h), (h -= (l - t) / c);
              }
              for (let c = 0; Math.abs(l - t) > r && c < 8; c++)
                l < t
                  ? ((o = h), (h = (h + u) / 2))
                  : ((u = h), (h = (h + o) / 2)),
                  (l = To.rh(h, i, s, e, n));
              return h;
            }
            static rh(t, i, s, e, n) {
              if (0 == t) return i;
              if (1 == t) return n;
              let r = To.hh(i, s, t),
                h = To.hh(s, e, t);
              const o = To.hh(e, n, t);
              return (r = To.hh(r, h, t)), (h = To.hh(h, o, t)), To.hh(r, h, t);
            }
            static eh(t, i, s, e, n) {
              if (0 == t) return i;
              if (1 == t) return n;
              let r = To.hh(i, s, t),
                h = To.hh(s, e, t);
              const o = To.hh(e, n, t);
              return (r = To.hh(r, h, t)), (h = To.hh(h, o, t)), To.hh(r, h, t);
            }
            static hh(t, i, s) {
              return t + s * (i - t);
            }
          },
          Mo = {
            LINEAR: (t) => t,
            EASE: (t) =>
              To.solveYValueFromXValue(t, 0, 0, 0.25, 0.1, 0.25, 1, 1, 1),
            EASE_IN: (t) =>
              To.solveYValueFromXValue(t, 0, 0, 0.42, 0, 1, 1, 1, 1),
            EASE_OUT: (t) =>
              To.solveYValueFromXValue(t, 0, 0, 0, 0, 0.58, 1, 1, 1),
            EASE_IN_OUT: (t) =>
              To.solveYValueFromXValue(t, 0, 0, 0.42, 0, 0.58, 1, 1, 1),
          },
          Io = {
            linear: Mo.LINEAR,
            ease: Mo.EASE,
            "ease-in": Mo.EASE_IN,
            "ease-out": Mo.EASE_OUT,
            "ease-in-out": Mo.EASE_IN_OUT,
          };
        function Ro(t) {
          if (!t) return null;
          if (y(t)) {
            if (-1 != (t = t).indexOf("cubic-bezier")) {
              const r = t.match(/cubic-bezier\((.+)\)/);
              if (r) {
                const t = r[1].split(",").map(parseFloat);
                if (4 == t.length) {
                  for (let i = 0; i < 4; i++) if (isNaN(t[i])) return null;
                  return (
                    (i = t[0]),
                    (s = t[1]),
                    (e = t[2]),
                    (n = t[3]),
                    (t) => To.solveYValueFromXValue(t, 0, 0, i, s, e, n, 1, 1)
                  );
                }
              }
              return null;
            }
            return Io[t];
          }
          var i, s, e, n;
          return t;
        }
        var yo = "Animation",
          bo = function () {},
          wo = class {
            static animate(t, i, s, e) {
              return new wo(t).setCurve(e).add(0, i, 1).start(s);
            }
            constructor(t, i) {
              (this.Pt = t),
                (this.oh = i || As(self)),
                (this.uh = null),
                (this.lh = []);
            }
            setCurve(t) {
              return t && (this.uh = Ro(t)), this;
            }
            add(t, i, s, e) {
              return (
                this.lh.push({ delay: t, func: i, duration: s, curve: Ro(e) }),
                this
              );
            }
            start(t) {
              return new Vo(this.oh, this.Pt, this.lh, this.uh, t);
            }
          },
          Vo = class {
            constructor(t, i, s, e, r) {
              (this.oh = t), (this.Pt = i), (this.lh = []);
              for (let t = 0; t < s.length; t++) {
                const i = s[t];
                this.lh.push({
                  delay: i.delay,
                  func: i.func,
                  duration: i.duration,
                  curve: i.curve || e,
                  started: !1,
                  completed: !1,
                });
              }
              (this.ah = r),
                (this.Hr = Date.now()),
                (this.Ht = !0),
                (this.Ri = {});
              const h = new n();
              (this.dh = h.promise),
                (this.Sn = h.resolve),
                (this.fh = h.reject),
                (this.ph = this.oh.createAnimTask(this.Pt, {
                  mutate: this.mh.bind(this),
                })),
                this.oh.canAnimate(this.Pt) ? this.ph(this.Ri) : this._h(!1, 0);
            }
            then(t, i) {
              return t || i ? this.dh.then(t, i) : this.dh;
            }
            thenAlways(t) {
              const i = t || bo;
              return this.then(i, i);
            }
            halt(t) {
              this._h(!1, t || 0);
            }
            _h(t, i) {
              if (this.Ht) {
                if (((this.Ht = !1), 0 != i)) {
                  this.lh.length > 1 &&
                    this.lh.sort(
                      (t, i) => t.delay + t.duration - (i.delay + i.duration)
                    );
                  try {
                    if (i > 0)
                      for (let t = 0; t < this.lh.length; t++)
                        this.lh[t].func(1, !0);
                    else
                      for (let t = this.lh.length - 1; t >= 0; t--)
                        this.lh[t].func(0, !1);
                  } catch (i) {
                    Rt().error(yo, "completion failed: " + i, i), (t = !1);
                  }
                }
                t ? this.Sn() : this.fh();
              }
            }
            mh(t) {
              if (!this.Ht) return;
              const i = Date.now(),
                s = Math.min((i - this.Hr) / this.ah, 1);
              for (let t = 0; t < this.lh.length; t++) {
                const i = this.lh[t];
                !i.started && s >= i.delay && (i.started = !0);
              }
              for (let t = 0; t < this.lh.length; t++) {
                const i = this.lh[t];
                i.started && !i.completed && this.Ah(i, s);
              }
              1 == s
                ? this._h(!0, 0)
                : this.oh.canAnimate(this.Pt)
                ? this.ph(this.Ri)
                : this._h(!1, 0);
            }
            Ah(t, i) {
              let s, e;
              if (t.duration > 0) {
                if (
                  ((s = Math.min((i - t.delay) / t.duration, 1)),
                  (e = s),
                  t.curve && 1 != e)
                )
                  try {
                    e = t.curve(s);
                  } catch (t) {
                    return (
                      Rt().error(yo, "step curve failed: " + t, t),
                      void this._h(!1, 0)
                    );
                  }
              } else (s = 1), (e = 1);
              1 == s && (t.completed = !0);
              try {
                t.func(e, t.completed);
              } catch (t) {
                return (
                  Rt().error(yo, "step mutate failed: " + t, t),
                  void this._h(!1, 0)
                );
              }
            }
          };
        function So(t, i) {
          let s;
          for (let e = i.lastElementChild; e; e = e.previousElementSibling)
            if (e.getBoundingClientRect().height > 0) {
              const i = Os(t, e);
              if ("static" == i.position || "relative" == i.position) {
                s = i;
                break;
              }
            }
          return s ? parseInt(s.marginBottom, 10) : 0;
        }
        function xo(t, i, s) {
          return (function (t, i, s) {
            const e = parseInt(Os(t, i)[s], 10);
            return isNaN(e) ? 0 : e;
          })(t, i === t.document.body ? t.document.documentElement : i, s);
        }
        function Oo(t, i) {
          return xo(t, i, "scrollPaddingTop");
        }
        function Co(t) {
          const i = _s(t),
            { win: s } = t;
          let n;
          return (
            (n =
              t.isSingleDoc() &&
              (function (t, i) {
                return us(t).isIos() &&
                  qt(t) &&
                  i.isEmbedded() &&
                  !i.hasCapability("iframeScroll")
                  ? ko.NATURAL_IOS_EMBED
                  : ko.NATURAL;
              })(s, i) == ko.NATURAL_IOS_EMBED
                ? new (class {
                    constructor(t) {
                      (this.win = t), (this.oh = As(t));
                      const i = this.win.document,
                        { documentElement: s } = i,
                        e = s.className;
                      s.classList.add("i-amphtml-ios-embed");
                      const n = i.createElement("html");
                      (this.gh = n),
                        (n.id = "i-amphtml-wrapper"),
                        (n.className = e),
                        (this.Ph = new Es()),
                        (this.Eh = new Es()),
                        (this.Th = this.Ih.bind(this)),
                        (this.Mh = () => this.Eh.fire()),
                        (this.Rh = 0),
                        (this.yh = !1),
                        $t(i, this.wh.bind(this)),
                        gi(i).then(() => {
                          s.classList.add("i-amphtml-ios-overscroll");
                        });
                    }
                    ensureReadyForElements() {
                      this.wh();
                    }
                    wh() {
                      if (this.yh) return;
                      this.yh = !0;
                      const t = this.win.document,
                        i = t.body;
                      t.documentElement.appendChild(this.gh),
                        this.gh.appendChild(i),
                        Object.defineProperty(t, "body", { get: () => i }),
                        this.Ih();
                    }
                    connect() {
                      this.win.addEventListener("resize", this.Mh),
                        this.gh.addEventListener("scroll", this.Th);
                    }
                    disconnect() {
                      this.win.removeEventListener("resize", this.Mh),
                        this.gh.removeEventListener("scroll", this.Th);
                    }
                    getBorderTop() {
                      return 1;
                    }
                    requiresFixedLayerTransfer() {
                      return (
                        !Ne(this.win, "ios-fixed-no-transfer") ||
                        parseFloat(us(this.win).getIosVersionString()) < 12.2
                      );
                    }
                    overrideGlobalScrollTo() {
                      return !0;
                    }
                    supportsPositionFixed() {
                      return !0;
                    }
                    onScroll(t) {
                      this.Ph.add(t);
                    }
                    onResize(t) {
                      this.Eh.add(t);
                    }
                    updatePaddingTop(t) {
                      (this.Rh = t), bs(this.gh, { "padding-top": xs(t) });
                    }
                    hideViewerHeader(t, i) {
                      t || this.updatePaddingTop(0);
                    }
                    showViewerHeader(t, i) {
                      t || this.updatePaddingTop(i);
                    }
                    disableScroll() {
                      this.gh.classList.add("i-amphtml-scroll-disabled");
                    }
                    resetScroll() {
                      this.gh.classList.remove("i-amphtml-scroll-disabled");
                    }
                    updateLightboxMode(t) {
                      return e();
                    }
                    getSize() {
                      return {
                        width: this.win.innerWidth,
                        height: this.win.innerHeight,
                      };
                    }
                    getScrollTop() {
                      return this.gh.scrollTop;
                    }
                    getScrollLeft() {
                      return 0;
                    }
                    getScrollWidth() {
                      return this.gh.scrollWidth;
                    }
                    getScrollHeight() {
                      return this.gh.scrollHeight;
                    }
                    getContentHeight() {
                      const t = this.win.document.body,
                        { height: i } = t.getBoundingClientRect(),
                        s = So(this.win, t),
                        e = Os(this.win, t);
                      return (
                        parseInt(e.marginTop, 10) +
                        this.Rh +
                        i +
                        s +
                        parseInt(e.marginBottom, 10)
                      );
                    }
                    contentHeightChanged() {}
                    getLayoutRect(t, i, s) {
                      const e = t.getBoundingClientRect(),
                        n = null != s ? s : this.getScrollTop(),
                        r = null != i ? i : this.getScrollLeft();
                      return Jt(
                        Math.round(e.left + r),
                        Math.round(e.top + n),
                        Math.round(e.width),
                        Math.round(e.height)
                      );
                    }
                    getRootClientRectAsync() {
                      return Promise.resolve(null);
                    }
                    setScrollTop(t) {
                      this.gh.scrollTop = t || 1;
                    }
                    Ih(t) {
                      0 == this.gh.scrollTop &&
                        ((this.gh.scrollTop = 1), t && t.preventDefault()),
                        t && this.Ph.fire();
                    }
                    getScrollingElement() {
                      return this.gh;
                    }
                    getScrollingElementScrollsLikeViewport() {
                      return !1;
                    }
                  })(s)
                : new (class {
                    constructor(t) {
                      (this.ampdoc = t),
                        (this.win = t.win),
                        (this.bh = us(this.win)),
                        (this.Ph = new Es()),
                        (this.Eh = new Es()),
                        (this.Th = this.Vh.bind(this)),
                        (this.Mh = () => this.Eh.fire());
                    }
                    Vh() {
                      this.Ph.fire();
                    }
                    connect() {
                      this.win.addEventListener("scroll", this.Th),
                        this.win.addEventListener("resize", this.Mh);
                    }
                    disconnect() {
                      this.win.removeEventListener("scroll", this.Th),
                        this.win.removeEventListener("resize", this.Mh);
                    }
                    ensureReadyForElements() {}
                    getBorderTop() {
                      return 0;
                    }
                    requiresFixedLayerTransfer() {
                      return !1;
                    }
                    overrideGlobalScrollTo() {
                      return !1;
                    }
                    supportsPositionFixed() {
                      return !0;
                    }
                    onScroll(t) {
                      this.Ph.add(t);
                    }
                    onResize(t) {
                      this.Eh.add(t);
                    }
                    updatePaddingTop(t) {
                      bs(this.win.document.documentElement, {
                        "padding-top": xs(t),
                      });
                    }
                    hideViewerHeader(t, i) {
                      t || this.updatePaddingTop(0);
                    }
                    showViewerHeader(t, i) {
                      t || this.updatePaddingTop(i);
                    }
                    disableScroll() {
                      this.win.document.documentElement.classList.add(
                        "i-amphtml-scroll-disabled"
                      );
                    }
                    resetScroll() {
                      this.win.document.documentElement.classList.remove(
                        "i-amphtml-scroll-disabled"
                      );
                    }
                    updateLightboxMode(t) {
                      return e();
                    }
                    getSize() {
                      const t = this.win.innerWidth,
                        i = this.win.innerHeight;
                      if (t && i) return { width: t, height: i };
                      const s = this.win.document.documentElement;
                      return { width: s.clientWidth, height: s.clientHeight };
                    }
                    getScrollTop() {
                      const t =
                          this.getScrollingElement().scrollTop ||
                          this.win.pageYOffset,
                        { host: i } = this.ampdoc.getRootNode();
                      return i ? t - i.offsetTop : t;
                    }
                    getScrollLeft() {
                      return 0;
                    }
                    getScrollWidth() {
                      return this.getScrollingElement().scrollWidth;
                    }
                    getScrollHeight() {
                      return this.getScrollingElement().scrollHeight;
                    }
                    getContentHeight() {
                      const t = this.getScrollingElement(),
                        i = t.getBoundingClientRect(),
                        s = i.top + this.getScrollTop(),
                        e = us(this.win).isSafari() ? So(this.win, t) : 0,
                        n = Os(this.win, t);
                      return (
                        s +
                        parseInt(n.marginTop, 10) +
                        i.height +
                        e +
                        parseInt(n.marginBottom, 10)
                      );
                    }
                    contentHeightChanged() {}
                    getLayoutRect(t, i, s) {
                      const e = t.getBoundingClientRect(),
                        n = null != s ? s : this.getScrollTop(),
                        r = null != i ? i : this.getScrollLeft();
                      return Jt(
                        Math.round(e.left + r),
                        Math.round(e.top + n),
                        Math.round(e.width),
                        Math.round(e.height)
                      );
                    }
                    getRootClientRectAsync() {
                      return Promise.resolve(null);
                    }
                    setScrollTop(t) {
                      this.getScrollingElement().scrollTop = t;
                    }
                    getScrollingElement() {
                      const t = this.win.document;
                      return t.scrollingElement
                        ? t.scrollingElement
                        : t.body && this.bh.isWebKit()
                        ? t.body
                        : t.documentElement;
                    }
                    getScrollingElementScrollsLikeViewport() {
                      return !0;
                    }
                  })(t)),
            new (class {
              constructor(t, i, s) {
                const { win: e } = t;
                (this.ampdoc = t),
                  (this.Sh = this.ampdoc.win.document),
                  (this.ar = i),
                  (this.Be = s),
                  (this.xh = null),
                  (this.Oh = null),
                  (this.Ch = null),
                  (this.kh = !1),
                  (this.Nh = null),
                  (this.Rh = Number(s.getParam("paddingTop") || 0)),
                  (this.Dh = 0),
                  (this.Re = ds(e)),
                  (this.oh = As(e)),
                  (this.Lh = !1),
                  (this.On = null),
                  (this.Uh = 0),
                  (this.$h = new Es()),
                  (this.Ph = new Es()),
                  (this.Eh = new Es()),
                  (this.Fh = void 0),
                  (this.Bh = void 0),
                  (this.Hh = null),
                  this.Be.onMessage("viewport", this.jh.bind(this)),
                  this.Be.onMessage("scroll", this.zh.bind(this)),
                  this.Be.onMessage("disableScroll", this.Gh.bind(this)),
                  this.Be.isEmbedded() && this.ar.updatePaddingTop(this.Rh),
                  this.ar.onScroll(this.qh.bind(this)),
                  this.ar.onResize(this.Wh.bind(this)),
                  this.onScroll(this.Kh.bind(this)),
                  (this.Yh = !1),
                  this.ampdoc.onVisibilityChanged(this.Jh.bind(this)),
                  this.Jh();
                const n = this.Sh.documentElement;
                if (
                  (t.isSingleDoc() && n.classList.add("i-amphtml-singledoc"),
                  s.isEmbedded()
                    ? n.classList.add("i-amphtml-embedded")
                    : n.classList.add("i-amphtml-standalone"),
                  qt(e) && n.classList.add("i-amphtml-iframed"),
                  "1" === s.getParam("webview") &&
                    n.classList.add("i-amphtml-webview"),
                  qt(e) &&
                    "scrollRestoration" in e.history &&
                    (e.history.scrollRestoration = "manual"),
                  this.ar.overrideGlobalScrollTo())
                )
                  try {
                    Object.defineProperty(e, "scrollTo", {
                      value: (t, i) => this.setScrollTop(i),
                    }),
                      ["pageYOffset", "scrollY"].forEach((t) => {
                        Object.defineProperty(e, t, {
                          get: () => this.getScrollTop(),
                        });
                      });
                  } catch (t) {}
                us(e).isIos() &&
                  qt(e) &&
                  this.ampdoc.isSingleDoc() &&
                  this.ampdoc.whenReady().then(() => {
                    e.scrollTo(-0.1, 0);
                  });
              }
              dispose() {
                this.ar.disconnect();
              }
              ensureReadyForElements() {
                this.ar.ensureReadyForElements();
              }
              Jh() {
                const t = this.ampdoc.isVisible();
                t != this.Yh &&
                  ((this.Yh = t),
                  t
                    ? (this.ar.connect(),
                      this.Oh && this.Wh(),
                      this.Ch && ((this.Ch = null), this.getScrollTop()))
                    : this.ar.disconnect());
              }
              getPaddingTop() {
                return this.Rh;
              }
              getScrollTop() {
                return (
                  null == this.Ch && (this.Ch = this.ar.getScrollTop()), this.Ch
                );
              }
              getScrollLeft() {
                return (
                  null == this.Nh && (this.Nh = this.ar.getScrollLeft()),
                  this.Nh
                );
              }
              setScrollTop(t) {
                (this.Ch = null), this.ar.setScrollTop(t);
              }
              updatePaddingBottom(t) {
                this.ampdoc.waitForBodyOpen().then((i) => {
                  ws(i, "borderBottom", `${t}px solid transparent`);
                });
              }
              getSize() {
                if (this.Oh) return this.Oh;
                if (
                  ((this.Oh = this.ar.getSize()),
                  0 == this.Oh.width || 0 == this.Oh.height)
                ) {
                  const t = this.ampdoc.getVisibilityState();
                  (t != vs.PRERENDER && t != vs.VISIBLE) ||
                    (Math.random() < 0.01 &&
                      Rt().error("Viewport", "viewport has zero dimensions"));
                }
                return this.Oh;
              }
              getHeight() {
                return this.getSize().height;
              }
              getWidth() {
                return this.getSize().width;
              }
              getScrollWidth() {
                return this.ar.getScrollWidth();
              }
              getScrollHeight() {
                return this.ar.getScrollHeight();
              }
              getContentHeight() {
                return this.ar.getContentHeight();
              }
              contentHeightChanged() {
                this.ar.contentHeightChanged();
              }
              getRect() {
                if (null == this.xh) {
                  const t = this.getScrollTop(),
                    i = this.getScrollLeft(),
                    s = this.getSize();
                  this.xh = Jt(i, t, s.width, s.height);
                }
                return this.xh;
              }
              getLayoutRect(t) {
                const i = this.getScrollLeft(),
                  s = this.getScrollTop(),
                  e = ki(t, this.ampdoc.win);
                if (e) {
                  const n = this.ar.getLayoutRect(t, 0, 0),
                    r = this.ar.getLayoutRect(e, i, s);
                  return Jt(
                    Math.round(n.left + r.left),
                    Math.round(n.top + r.top),
                    Math.round(n.width),
                    Math.round(n.height)
                  );
                }
                return this.ar.getLayoutRect(t, i, s);
              }
              getClientRectAsync(t) {
                const i = this.oh.measurePromise(() =>
                  t.getBoundingClientRect()
                );
                let s = this.ar.getRootClientRectAsync();
                const e = ki(t, this.ampdoc.win);
                return (
                  e &&
                    (s = this.oh.measurePromise(() =>
                      e.getBoundingClientRect()
                    )),
                  Promise.all([i, s]).then((t) => {
                    const i = t[0],
                      s = t[1];
                    return s
                      ? Zt(i, s.left, s.top)
                      : ((e = i),
                        Jt(
                          Number(e.left),
                          Number(e.top),
                          Number(e.width),
                          Number(e.height)
                        ));
                    var e;
                  })
                );
              }
              supportsPositionFixed() {
                return this.ar.supportsPositionFixed();
              }
              isDeclaredFixed(t) {
                return !!this.Hh && this.Hh.isDeclaredFixed(t);
              }
              scrollIntoView(t) {
                return this.Qh(t).then((i) => this.Xh(t, i));
              }
              Xh(t, i) {
                const s = this.ar.getLayoutRect(t).top,
                  e = Oo(this.ampdoc.win, i);
                r(() => Math.max(0, s - this.Rh - e)).then((t) =>
                  this.Zh(i, t)
                );
              }
              animateScrollIntoView(t, i = "top", s, e) {
                return (
                  yt(!e || void 0 !== s),
                  this.Qh(t).then((n) =>
                    this.animateScrollWithinParent(t, n, i, s, e)
                  )
                );
              }
              animateScrollWithinParent(t, i, s, e, n) {
                yt(!n || void 0 !== e);
                const r = this.ar.getLayoutRect(t),
                  { height: h } = this.io(i)
                    ? this.getSize()
                    : this.getLayoutRect(i),
                  { win: o } = this.ampdoc,
                  u = Oo(o, i),
                  l = (function (t, i) {
                    return xo(t, i, "scrollPaddingBottom");
                  })(o, i);
                let c = -u;
                return (
                  "bottom" === s
                    ? (c = -h + l + r.height)
                    : "center" === s && (c = -(h - u - l) / 2 + r.height / 2),
                  this.so(i).then((t) => {
                    const s = r.top - this.Rh + c,
                      h = Math.max(0, s);
                    if (h != t) return this.eo(i, t, h, e, n);
                  })
                );
              }
              eo(t, i, s, e, n = "ease-in") {
                const r =
                    void 0 !== e
                      ? e
                      : (function (t, i, s = 500) {
                          return Math.floor(
                            (function (t, i, s) {
                              return D(0 <= s), Math.min(Math.max(t, 0), s);
                            })(0.65 * Math.abs(t - i), 0, s)
                          );
                        })(i, s),
                  h = ((o = i), (u = s), (t) => o + (u - o) * t);
                var o, u;
                return wo
                  .animate(
                    t,
                    (i) => {
                      this.Zh(t, h(i));
                    },
                    r,
                    n
                  )
                  .thenAlways(() => {
                    this.Zh(t, s);
                  });
              }
              Qh(t) {
                return this.oh.measurePromise(
                  () =>
                    Ct(t, ".i-amphtml-scrollable") ||
                    this.ar.getScrollingElement()
                );
              }
              Zh(t, i) {
                this.io(t)
                  ? this.ar.setScrollTop(i)
                  : this.oh.mutate(() => {
                      t.scrollTop = i;
                    });
              }
              so(t) {
                return this.io(t)
                  ? r(() => this.getScrollTop())
                  : this.oh.measurePromise(() => t.scrollTop);
              }
              io(t) {
                return t == this.ar.getScrollingElement();
              }
              getScrollingElement() {
                return this.On
                  ? this.On
                  : (this.On = this.ar.getScrollingElement());
              }
              onChanged(t) {
                return this.$h.add(t);
              }
              onScroll(t) {
                return this.Ph.add(t);
              }
              onResize(t) {
                return this.Eh.add(t);
              }
              enterLightboxMode(t, i) {
                return (
                  this.Be.sendMessage("requestFullOverlay", {}, !0),
                  this.enterOverlayMode(),
                  this.Hh && this.Hh.enterLightbox(t, i),
                  t && this.maybeEnterFieLightboxMode(t),
                  this.ar.updateLightboxMode(!0)
                );
              }
              leaveLightboxMode(t) {
                return (
                  this.Be.sendMessage("cancelFullOverlay", {}, !0),
                  this.Hh && this.Hh.leaveLightbox(),
                  this.leaveOverlayMode(),
                  t && this.maybeLeaveFieLightboxMode(t),
                  this.ar.updateLightboxMode(!1)
                );
              }
              isLightboxExperimentOn() {
                return Ne(this.ampdoc.win, "amp-lightbox-a4a-proto");
              }
              maybeEnterFieLightboxMode(t) {
                const i = this.no(t);
                i &&
                  (yt(this.isLightboxExperimentOn()), i.enterFullOverlayMode());
              }
              maybeLeaveFieLightboxMode(t) {
                const i = this.no(t);
                i && yt(i).leaveFullOverlayMode();
              }
              no(t) {
                const i = ki(t, this.ampdoc.win);
                return i && i.__AMP_EMBED__;
              }
              enterOverlayMode() {
                this.disableTouchZoom(), this.disableScroll();
              }
              leaveOverlayMode() {
                this.resetScroll(), this.restoreOriginalTouchZoom();
              }
              disableScroll() {
                const { win: t } = this.ampdoc,
                  { documentElement: i } = t.document;
                let s;
                this.oh.measure(() => {
                  const e = Os(t, i).marginRight,
                    n = (function (t) {
                      const { documentElement: i } = t.document;
                      return t.innerWidth - i.clientWidth;
                    })(this.ampdoc.win);
                  s = parseInt(e, 10) + n;
                }),
                  this.oh.mutate(() => {
                    ws(i, "margin-right", s, "px"), this.ar.disableScroll();
                  });
              }
              resetScroll() {
                const { win: t } = this.ampdoc,
                  { documentElement: i } = t.document;
                this.oh.mutate(() => {
                  ws(i, "margin-right", ""), this.ar.resetScroll();
                });
              }
              resetTouchZoom() {
                const t = this.ampdoc.win.innerHeight,
                  i = this.Sh.documentElement.clientHeight;
                (t && i && t === i) ||
                  (this.disableTouchZoom() &&
                    this.Re.delay(() => {
                      this.restoreOriginalTouchZoom();
                    }, 50));
              }
              disableTouchZoom() {
                const t = this.ro();
                if (!t) return !1;
                const i = (function (t, i) {
                  const s = (function (t) {
                    const i = Object.create(null);
                    if (!t) return i;
                    const s = t.split(/,|;/);
                    for (let t = 0; t < s.length; t++) {
                      const e = s[t].split("="),
                        n = e[0].trim();
                      let r = e[1];
                      (r = (r || "").trim()), n && (i[n] = r);
                    }
                    return i;
                  })(t);
                  let e = !1;
                  for (const t in i)
                    s[t] !== i[t] &&
                      ((e = !0), void 0 !== i[t] ? (s[t] = i[t]) : delete s[t]);
                  return e
                    ? (function (t) {
                        let i = "";
                        for (const s in t)
                          i.length > 0 && (i += ","),
                            t[s] ? (i += s + "=" + t[s]) : (i += s);
                        return i;
                      })(s)
                    : t;
                })(t.content, { "maximum-scale": "1", "user-scalable": "no" });
                return this.ho(i);
              }
              restoreOriginalTouchZoom() {
                return void 0 !== this.Bh && this.ho(this.Bh);
              }
              updateFixedLayer() {
                return this.Hh ? this.Hh.update() : e();
              }
              addToFixedLayer(t, i) {
                return this.Hh ? this.Hh.addElement(t, i) : e();
              }
              removeFromFixedLayer(t) {
                this.Hh && this.Hh.removeElement(t);
              }
              createFixedLayer(t) {
                (this.Hh = new t(
                  this.ampdoc,
                  this.oh,
                  this.ar.getBorderTop(),
                  this.Rh,
                  this.ar.requiresFixedLayerTransfer()
                )),
                  this.ampdoc.whenReady().then(() => this.Hh.setup());
              }
              ho(t) {
                const i = this.ro();
                return !(!i || i.content == t || ((i.content = t), 0));
              }
              ro() {
                return qt(this.ampdoc.win)
                  ? null
                  : (void 0 === this.Fh &&
                      ((this.Fh = this.Sh.querySelector("meta[name=viewport]")),
                      this.Fh && (this.Bh = this.Fh.content)),
                    this.Fh);
              }
              zh(t) {
                const i = t.scrollTop;
                this.setScrollTop(i);
              }
              jh(t) {
                const i = t.paddingTop,
                  s = t.duration || 0,
                  e = t.curve,
                  n = t.transient;
                if (
                  null != i &&
                  i != this.Rh &&
                  ((this.Dh = this.Rh), (this.Rh = i), this.Hh)
                ) {
                  const t = this.Hh.animateFixedElements(
                    this.Rh,
                    this.Dh,
                    s,
                    e,
                    n
                  );
                  i < this.Dh
                    ? this.ar.hideViewerHeader(n, this.Dh)
                    : t.then(() => {
                        this.ar.showViewerHeader(n, i);
                      });
                }
              }
              Gh(t) {
                t ? this.disableScroll() : this.resetScroll();
              }
              oo(t, i) {
                const s = this.getSize(),
                  e = this.getScrollTop(),
                  n = this.getScrollLeft();
                this.$h.fire({
                  relayoutAll: t,
                  top: e,
                  left: n,
                  width: s.width,
                  height: s.height,
                  velocity: i,
                });
              }
              qh() {
                (this.xh = null),
                  this.Uh++,
                  (this.Nh = this.ar.getScrollLeft());
                const t = this.ar.getScrollTop();
                if (!(t < 0)) {
                  if (((this.Ch = t), !this.Lh)) {
                    this.Lh = !0;
                    const i = Date.now();
                    this.Re.delay(() => {
                      this.oh.measure(() => {
                        this.uo(i, t);
                      });
                    }, 36);
                  }
                  this.Ph.fire();
                }
              }
              uo(t, i) {
                this.Ch = this.ar.getScrollTop();
                const s = this.Ch,
                  e = Date.now();
                let n = 0;
                e != t && (n = (s - i) / (e - t)),
                  Math.abs(n) < 0.03
                    ? (this.oo(!1, n), (this.Lh = !1))
                    : this.Re.delay(
                        () => this.oh.measure(this.uo.bind(this, e, s)),
                        20
                      );
              }
              Kh() {
                this.kh ||
                  ((this.kh = !0),
                  this.oh.measure(() => {
                    (this.kh = !1),
                      this.Be.sendMessage(
                        "scroll",
                        { scrollTop: this.getScrollTop() },
                        !0
                      );
                  }));
              }
              Wh() {
                this.xh = null;
                const t = this.Oh;
                this.Oh = null;
                const i = this.getSize();
                this.updateFixedLayer().then(() => {
                  const s = !t || t.width != i.width;
                  this.oo(s, 0),
                    (s || t.height != i.height) &&
                      this.Eh.fire({
                        relayoutAll: s,
                        width: i.width,
                        height: i.height,
                      });
                });
              }
            })(t, n, i)
          );
        }
        var ko = { NATURAL: "natural", NATURAL_IOS_EMBED: "natural-ios-embed" };
        function No(t, i) {
          yt(t);
          try {
            void 0 !== t(i) &&
              Rt().error(
                "VSYNC",
                "callback returned a value but vsync cannot propogate it: %s",
                t.toString()
              );
          } catch (t) {
            return l(t), !1;
          }
          return !0;
        }
        function Do(t) {
          if (t.defaultPrevented) return;
          const i = t.target;
          if (!i || "FORM" != i.tagName) return;
          let s;
          (s = i.classList.contains("i-amphtml-form")
            ? !i.hasAttribute("amp-novalidate")
            : !i.hasAttribute("novalidate")),
            s && i.checkValidity && !i.checkValidity() && t.preventDefault();
          const e = i.elements;
          for (let t = 0; t < e.length; t++)
            bt(
              !e[t].name || e[t].name != en,
              "Illegal input name, %s found: %s",
              en,
              e[t]
            );
          const n = i.getAttribute("action"),
            r = i.getAttribute("action-xhr"),
            h = (i.getAttribute("method") || "GET").toUpperCase();
          if (
            (r &&
              (dn(r, i, "action-xhr"),
              bt(!pn(r), "form action-xhr should not be on AMP CDN: %s", i),
              Tn(r)),
            n &&
              (dn(n, i, "action"),
              bt(!pn(n), "form action should not be on AMP CDN: %s", i),
              Tn(n)),
            "GET" == h)
          )
            bt(
              r || n,
              "form action-xhr or action attribute is required for method=GET: %s",
              i
            );
          else if ("POST" == h) {
            if (n) {
              const t = "form";
              Mt().error(
                t,
                "action attribute is invalid for method=POST: %s",
                i
              );
            }
            r ||
              (t.preventDefault(),
              bt(
                !1,
                "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s",
                i
              ));
          }
          const o = i.getAttribute("target");
          o
            ? bt(
                "_blank" == o || "_top" == o,
                "form target=%s is invalid can only be _blank or _top: %s",
                o,
                i
              )
            : i.setAttribute("target", "_top"),
            r &&
              (t.preventDefault(),
              t.stopImmediatePropagation(),
              Qi(i).execute(i, "submit", null, i, i, t, 3));
        }
        var Lo = ["<link rel=preload referrerpolicy=origin>"],
          Uo = 18e4,
          $o = null;
        function Fo(t) {
          var i;
          (function (t) {
            yi(
              t,
              "crypto",
              class {
                constructor(t) {
                  this.i = t;
                  let i = null,
                    s = !1;
                  t.crypto &&
                    (t.crypto.subtle
                      ? (i = t.crypto.subtle)
                      : t.crypto.webkitSubtle &&
                        ((i = t.crypto.webkitSubtle), (s = !0))),
                    (this.pkcsAlgo = {
                      name: "RSASSA-PKCS1-v1_5",
                      hash: { name: "SHA-256" },
                    }),
                    (this.subtle = i),
                    (this.lo = s),
                    (this.co = null);
                }
                sha384(t) {
                  if (
                    ("string" == typeof t && (t = H(t)),
                    !this.subtle || this.co)
                  )
                    return (this.co || this.ao()).then((i) => i(t));
                  try {
                    return this.subtle.digest({ name: "SHA-384" }, t).then(
                      (t) => new Uint8Array(t),
                      (i) => (
                        i.message &&
                          i.message.indexOf("secure origin") < 0 &&
                          Mt().error(
                            wh,
                            "SubtleCrypto failed, fallback to closure lib.",
                            i
                          ),
                        this.ao().then(() => this.sha384(t))
                      )
                    );
                  } catch (i) {
                    return (
                      Rt().error(
                        wh,
                        "SubtleCrypto failed, fallback to closure lib.",
                        i
                      ),
                      this.ao().then(() => this.sha384(t))
                    );
                  }
                }
                sha384Base64(t) {
                  return this.sha384(t).then((t) => ih(t));
                }
                uniform(t) {
                  return this.sha384(t).then((t) => {
                    let i = 0;
                    for (let s = 2; s >= 0; s--) i = (i + t[s]) / 256;
                    return i;
                  });
                }
                ao() {
                  return this.co
                    ? this.co
                    : (this.co = ns(this.i)
                        .preloadExtension("amp-crypto-polyfill")
                        .then(() => wi(this.i, "crypto-polyfill")));
                }
                isPkcsAvailable() {
                  return Boolean(this.subtle) && !1 !== this.i.isSecureContext;
                }
                importPkcsKey(t) {
                  yt(this.isPkcsAvailable());
                  const i = this.lo
                    ? ((s = JSON.stringify(t)),
                      "undefined" != typeof TextEncoder
                        ? new TextEncoder().encode(s)
                        : H(unescape(encodeURIComponent(s))))
                    : t;
                  var s;
                  return this.subtle.importKey("jwk", i, this.pkcsAlgo, !0, [
                    "verify",
                  ]);
                }
                verifyPkcs(t, i, s) {
                  return (
                    yt(this.isPkcsAvailable()),
                    this.subtle.verify(this.pkcsAlgo, t, i, s)
                  );
                }
              }
            );
          })(t),
            yi(t, "batched-xhr", Zr),
            Qh(t),
            oo(t),
            oo((i = t)),
            yi(
              i,
              "vsync",
              class {
                constructor(t) {
                  (this.win = t),
                    (this.po = Zi(this.win)),
                    (this.mo = this._o()),
                    (this.As = []),
                    (this.Ao = []),
                    (this.Po = []),
                    (this.vo = []),
                    (this.be = !1),
                    (this.Eo = null),
                    (this.To = null),
                    (this.Io = this.Mo.bind(this)),
                    (this.Ro = new Mr(this.win, this.Io, 16)),
                    (this.yo = new Mr(this.win, this.Io, 40)),
                    (this.wo = this.bo.bind(this)),
                    this.po.isSingleDoc()
                      ? this.po.getSingleDoc().onVisibilityChanged(this.wo)
                      : ks(this.win.document, this.wo);
                }
                dispose() {
                  Ns(this.win.document, this.wo);
                }
                bo() {
                  this.be && this.Vo();
                }
                run(t, i) {
                  this.As.push(t), this.Po.push(i || void 0), this.Is();
                }
                runPromise(t, i) {
                  if ((this.run(t, i), this.Eo)) return this.Eo;
                  const s = new n();
                  return (this.To = s.resolve), (this.Eo = s.promise);
                }
                createTask(t) {
                  return (i) => {
                    this.run(t, i);
                  };
                }
                mutate(t) {
                  this.run({ measure: void 0, mutate: t });
                }
                mutatePromise(t) {
                  return this.runPromise({ measure: void 0, mutate: t });
                }
                measure(t) {
                  this.run({ measure: t, mutate: void 0 });
                }
                measurePromise(t) {
                  return new Promise((i) => {
                    this.measure(() => {
                      i(t());
                    });
                  });
                }
                canAnimate(t) {
                  return this.So(yt(t));
                }
                So(t) {
                  if (Cs(this.win.document) != vs.VISIBLE) return !1;
                  if (this.po.isSingleDoc())
                    return this.po.getSingleDoc().isVisible();
                  if (t) {
                    const i = this.po.getAmpDocIfAvailable(t);
                    return !i || i.isVisible();
                  }
                  return !0;
                }
                runAnim(t, i, s) {
                  return !!this.So(t) && (this.run(i, s), !0);
                }
                createAnimTask(t, i) {
                  return (s) => this.runAnim(t, i, s);
                }
                runAnimMutateSeries(t, i, s) {
                  return this.So(t)
                    ? new Promise((e, n) => {
                        const r = Date.now();
                        let h = 0;
                        const o = this.createAnimTask(t, {
                          mutate: (t) => {
                            const u = Date.now() - r;
                            i(u, u - h, t)
                              ? s && u > s
                                ? n(new Error("timeout"))
                                : ((h = u), o(t))
                              : e();
                          },
                        });
                        o({});
                      })
                    : Promise.reject(wn());
                }
                Is() {
                  this.be || ((this.be = !0), this.Vo());
                }
                Vo() {
                  this.So()
                    ? (this.mo(this.Io), this.yo.schedule())
                    : this.Ro.schedule();
                }
                Mo() {
                  this.yo.cancel(), (this.be = !1);
                  const { To: t, Po: i, As: s } = this;
                  (this.To = null),
                    (this.Eo = null),
                    (this.As = this.Ao),
                    (this.Po = this.vo);
                  for (let t = 0; t < s.length; t++)
                    s[t].measure &&
                      (No(s[t].measure, i[t]) || (s[t].mutate = void 0));
                  for (let t = 0; t < s.length; t++)
                    s[t].mutate && No(s[t].mutate, i[t]);
                  (this.Ao = s),
                    (this.vo = i),
                    (this.Ao.length = 0),
                    (this.vo.length = 0),
                    t && t();
                }
                _o() {
                  const t =
                    this.win.requestAnimationFrame ||
                    this.win.webkitRequestAnimationFrame;
                  if (t) return t.bind(this.win);
                  let i = 0;
                  return (t) => {
                    const s = Date.now(),
                      e = Math.max(0, 16 - (s - i));
                    (i = s + e), this.win.setTimeout(t, e);
                  };
                }
              }
            ),
            (function (t) {
              yi(t, "xhr", Xr);
            })(t),
            (function (t) {
              yi(
                t,
                "input",
                class {
                  constructor(t) {
                    (this.win = t),
                      (this.xo = this.Oo.bind(this)),
                      (this.Co = this.ko.bind(this)),
                      (this.No = null),
                      (this.Do = null),
                      (this.Lo = null),
                      (this.Uo =
                        "ontouchstart" in t ||
                        (void 0 !== t.navigator.maxTouchPoints &&
                          t.navigator.maxTouchPoints > 0) ||
                        void 0 !== t.DocumentTouch),
                      (this.$o = !1),
                      this.win.document.addEventListener("keydown", this.xo),
                      this.win.document.addEventListener("mousedown", this.Co),
                      (this.Fo = !0),
                      (this.Bo = 0),
                      (this.Ho = new Es()),
                      (this.jo = new Es()),
                      (this.zo = new Es()),
                      this.Uo &&
                        ((this.Fo = !this.Uo),
                        (this.No = this.Go.bind(this)),
                        ze(t.document, "mousemove", this.No));
                  }
                  setupInputModeClasses(t) {
                    this.onTouchDetected((i) => {
                      this.qo(t, "amp-mode-touch", i);
                    }, !0),
                      this.onMouseDetected((i) => {
                        this.qo(t, "amp-mode-mouse", i);
                      }, !0),
                      this.onKeyboardStateChanged((i) => {
                        this.qo(t, "amp-mode-keyboard-active", i);
                      }, !0);
                  }
                  isTouchDetected() {
                    return this.Uo;
                  }
                  onTouchDetected(t, i) {
                    return i && t(this.isTouchDetected()), this.Ho.add(t);
                  }
                  isMouseDetected() {
                    return this.Fo;
                  }
                  onMouseDetected(t, i) {
                    return i && t(this.isMouseDetected()), this.jo.add(t);
                  }
                  isKeyboardActive() {
                    return this.$o;
                  }
                  onKeyboardStateChanged(t, i) {
                    return i && t(this.isKeyboardActive()), this.zo.add(t);
                  }
                  qo(t, i, s) {
                    t.waitForBodyOpen().then((t) => {
                      As(this.win).mutate(() => {
                        t.classList.toggle(i, s);
                      });
                    });
                  }
                  Oo(t) {
                    if (this.$o) return;
                    if (t.defaultPrevented) return;
                    const { target: i } = t;
                    (i &&
                      ("INPUT" == i.tagName ||
                        "TEXTAREA" == i.tagName ||
                        "SELECT" == i.tagName ||
                        "OPTION" == i.tagName ||
                        i.hasAttribute("contenteditable"))) ||
                      ((this.$o = !0), this.zo.fire(!0));
                  }
                  ko() {
                    this.$o && ((this.$o = !1), this.zo.fire(!1));
                  }
                  Go(t) {
                    if (
                      t.sourceCapabilities &&
                      t.sourceCapabilities.firesTouchEvents
                    )
                      return void this.Wo();
                    let i;
                    this.Lo ||
                      ((this.Lo = this.Ko.bind(this)),
                      (this.Do = this.Wo.bind(this)));
                    const s = (function (t, i, s, e) {
                      let n;
                      const r = new Promise((i) => {
                        n = ze(t, "click", i, void 0);
                      });
                      return r.then(n, n), e && e(n), r;
                    })(this.win.document, 0, 0, (t) => {
                      i = t;
                    });
                    return ds(this.win)
                      .timeoutPromise(300, s)
                      .then(this.Do, () => {
                        i && i(), this.Lo();
                      });
                  }
                  Ko() {
                    (this.Fo = !0), this.jo.fire(!0);
                  }
                  Wo() {
                    this.Bo++,
                      this.Bo <= 3 &&
                        ze(this.win.document, "mousemove", this.No);
                  }
                }
              );
            })(t),
            (function (t) {
              yi(
                t,
                "preconnect",
                class {
                  constructor(t) {
                    (this.Yo = t.document),
                      (this.Jo = t.document.head),
                      (this.Qo = {}),
                      (this.Xo = {}),
                      (this.bh = us(t)),
                      (this.Qo[rn(t.location.href).origin] = !0),
                      (this.Zo = (function (t) {
                        if (!$o) {
                          const i = t.document.createElement("link"),
                            s = i.relList;
                          if (((i.as = "invalid-value"), !s || !s.supports))
                            return {};
                          $o = {
                            preconnect: s.supports("preconnect"),
                            preload: s.supports("preload"),
                            onlyValidAs: "invalid-value" != i.as,
                          };
                        }
                        return $o;
                      })(t)),
                      (this.Re = ds(t));
                  }
                  url(t, i, s) {
                    t.whenFirstVisible().then(() => {
                      this.pi(t, i, s);
                    });
                  }
                  pi(t, i, s) {
                    if (!this.tu(i)) return;
                    const { origin: e } = rn(i),
                      n = Date.now(),
                      r = this.Qo[e];
                    if (r && n < r) return void (s && (this.Qo[e] = n + Uo));
                    const h = s ? Uo : 1e4;
                    let o;
                    (this.Qo[e] = n + h),
                      this.Zo.preconnect ||
                        ((o = this.Yo.createElement("link")),
                        o.setAttribute("rel", "dns-prefetch"),
                        o.setAttribute("href", e),
                        this.Jo.appendChild(o));
                    const u = this.Yo.createElement("link");
                    u.setAttribute("rel", "preconnect"),
                      u.setAttribute("href", e),
                      u.setAttribute("referrerpolicy", "origin"),
                      this.Jo.appendChild(u),
                      this.Re.delay(() => {
                        o && o.parentNode && o.parentNode.removeChild(o),
                          u.parentNode && u.parentNode.removeChild(u);
                      }, 1e4),
                      this.iu(t, e);
                  }
                  preload(t, i, s) {
                    this.tu(i) &&
                      (this.Xo[i] ||
                        ((this.Xo[i] = !0),
                        this.url(t, i, !0),
                        this.Zo.preload &&
                          (("document" == s && this.bh.isSafari()) ||
                            t.whenFirstVisible().then(() => {
                              this.su(i);
                            }))));
                  }
                  su(t) {
                    const i = be(this.Yo)(Lo);
                    i.setAttribute("href", t),
                      this.Zo.onlyValidAs ? (i.as = "fetch") : (i.as = ""),
                      this.Jo.appendChild(i);
                  }
                  tu(t) {
                    return !(!t.startsWith("https:") && !t.startsWith("http:"));
                  }
                  iu(t, i) {
                    if (
                      this.Zo.preconnect ||
                      (!this.bh.isSafari() && !this.bh.isIos())
                    )
                      return;
                    const s = Date.now();
                    this.Qo[i] = s + Uo;
                    const e =
                        i +
                        "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" +
                        (s - (s % Uo)),
                      n = new XMLHttpRequest();
                    n.open("HEAD", e, !0), (n.withCredentials = !0), n.send();
                  }
                }
              );
            })(t);
        }
        function Bo(t) {
          yt(!t.getParent()),
            (function (t, i) {
              (function (t) {
                bi(
                  t,
                  "url",
                  class {
                    constructor(t) {
                      const i = t.getRootNode(),
                        s = i.ownerDocument || i;
                      (this.eu = s.createElement("a")), (this.nu = null);
                    }
                    parse(t, i) {
                      return hn(this.eu, t);
                    }
                    ru(t) {
                      return "string" != typeof t ? t : this.parse(t);
                    }
                    isProtocolValid(t) {
                      return mn(t);
                    }
                    getSourceOrigin(t) {
                      return gn(this.ru(t));
                    }
                    getSourceUrl(t) {
                      return Pn(this.ru(t));
                    }
                    resolveRelativeUrl(t, i) {
                      return vn(t, this.ru(i));
                    }
                    assertHttpsUrl(t, i, s = "source") {
                      return dn(t, i, s);
                    }
                    assertAbsoluteHttpOrHttpsUrl(t) {
                      return (function (t) {
                        return (
                          bt(
                            /^https?\:/i.test(t),
                            'URL must start with "http://" or "https://". Invalid value: %s',
                            t
                          ),
                          rn(t).href
                        );
                      })(t);
                    }
                    isProxyOrigin(t) {
                      return pn(this.ru(t));
                    }
                    isSecure(t) {
                      return an(this.ru(t));
                    }
                    getWinOrigin(t) {
                      return t.origin || this.ru(t.location.href).origin;
                    }
                    getCdnUrlOnOrigin(t) {
                      if (pn(t)) return t;
                      const {
                          hash: i,
                          host: s,
                          pathname: e,
                          search: n,
                        } = this.ru(t),
                        r = encodeURIComponent(s);
                      return `${et}/c/${r}${e}${n}${i}`;
                    }
                  },
                  !0
                );
              })(t),
                (function (t) {
                  bi(
                    t,
                    "templates",
                    class {
                      constructor(t) {
                        (this.ji = t), (this.hu = {}), (this.ou = {});
                      }
                      whenReady(t) {
                        return this.uu(t).then(ho);
                      }
                      setHtmlForTemplate(t, i) {
                        return this.uu(t).then((t) => this.lu(t, i));
                      }
                      renderTemplate(t, i) {
                        return this.uu(t).then((t) => this.cu(t, i));
                      }
                      renderTemplateAsString(t, i) {
                        return this.uu(t).then((t) => t.renderAsString(i));
                      }
                      getTemplateRenderer(t) {
                        return this.uu(t).then((t) => ({
                          renderAsString: (i) => t.renderAsString(i),
                        }));
                      }
                      renderTemplateArray(t, i) {
                        return 0 == i.length
                          ? Promise.resolve([])
                          : this.uu(t).then((t) => i.map((i) => this.cu(t, i)));
                      }
                      findAndRenderTemplate(t, i, s) {
                        return this.renderTemplate(this.findTemplate(t, s), i);
                      }
                      findAndSetHtmlForTemplate(t, i, s) {
                        return this.setHtmlForTemplate(
                          this.findTemplate(t, s),
                          i
                        );
                      }
                      findAndRenderTemplateArray(t, i, s) {
                        return this.renderTemplateArray(
                          this.findTemplate(t, s),
                          i
                        );
                      }
                      hasTemplate(t, i) {
                        return !!this.maybeFindTemplate(t, i);
                      }
                      findTemplate(t, i) {
                        const s = this.maybeFindTemplate(t, i);
                        bt(s, "Template not found for %s", t);
                        const e = s.tagName;
                        return (
                          bt(
                            "TEMPLATE" == e ||
                              ("SCRIPT" == e &&
                                "text/plain" === s.getAttribute("type")),
                            'Template must be defined in a <template> or <script type="text/plain"> tag'
                          ),
                          s
                        );
                      }
                      maybeFindTemplate(t, i) {
                        const s = t.getAttribute("template");
                        return s
                          ? jt(t).getElementById(s)
                          : i
                          ? Ot(t, i)
                          : t.querySelector(
                              'template[type], script[type="text/plain"]'
                            );
                      }
                      uu(t) {
                        const i = t[ro];
                        if (i) return Promise.resolve(i);
                        let s = "";
                        const { tagName: e } = t;
                        "TEMPLATE" == e
                          ? (s = t.getAttribute("type"))
                          : "SCRIPT" == e && (s = t.getAttribute("template")),
                          bt(s, "Type must be specified: %s", t);
                        let n = t.__AMP_WAIT_;
                        return (
                          n ||
                          ((n = this.au(t, s).then((i) => {
                            const s = i,
                              e = (t[ro] = new s(t, this.ji.win));
                            return delete t.__AMP_WAIT_, e;
                          })),
                          (t.__AMP_WAIT_ = n),
                          n)
                        );
                      }
                      au(t, i) {
                        if (this.hu[i]) return this.hu[i];
                        const s = new n(),
                          { promise: e, resolve: r } = s;
                        return (this.hu[i] = e), (this.ou[i] = r), e;
                      }
                      du(t, i) {
                        if (this.hu[t]) {
                          const s = this.ou[t];
                          bt(s, "Duplicate template type: %s", t),
                            delete this.ou[t],
                            s(i);
                        } else this.hu[t] = Promise.resolve(i);
                      }
                      cu(t, i) {
                        return t.render(i);
                      }
                      lu(t, i) {
                        return t.setHtml(i);
                      }
                    }
                  );
                })(t),
                bi(
                  t,
                  "documentInfo",
                  class {
                    constructor(t) {
                      (this.ji = t), (this.fu = null), (this.pu = null);
                    }
                    get() {
                      if (this.fu) return this.fu;
                      const t = this.ji,
                        i = Pn(t.getUrl()),
                        s = t.getRootNode();
                      let e = s && s.AMP && s.AMP.canonicalUrl;
                      if (!e) {
                        const t = s.querySelector("link[rel=canonical]");
                        e = t ? rn(t.href).href : i;
                      }
                      const n = (function (t) {
                          return String(Math.floor(1e4 * t.Math.random()));
                        })(t.win),
                        r = (function (t) {
                          const i = p();
                          if (t.head) {
                            const s = t.head.querySelectorAll("link[rel]");
                            for (let t = 0; t < s.length; t++) {
                              const e = s[t],
                                { href: n } = e,
                                r = e.getAttribute("rel");
                              r &&
                                n &&
                                r.split(/\s+/).forEach((t) => {
                                  if (-1 != Vh.indexOf(t)) return;
                                  let s = i[t];
                                  s
                                    ? (v(s) || (s = i[t] = [s]), s.push(n))
                                    : (i[t] = n);
                                });
                            }
                          }
                          return i;
                        })(t.win.document),
                        h = (function (t) {
                          const i = t.head.querySelector(
                            'meta[name="viewport"]'
                          );
                          return i ? i.getAttribute("content") : null;
                        })(t.win.document),
                        o = (function (t) {
                          if (
                            !t.isSingleDoc() ||
                            "a" !=
                              ((i = t.win.location.href),
                              pn((i = nn(i)))
                                ? i.pathname.split("/", 2)[1]
                                : null)
                          )
                            return null;
                          var i;
                          const s = Y(rn(t.win.location.href).search).amp_r;
                          return void 0 === s ? null : Y(s);
                        })(t);
                      return (this.fu = {
                        get sourceUrl() {
                          return Pn(t.getUrl());
                        },
                        canonicalUrl: e,
                        pageViewId: n,
                        get pageViewId64() {
                          return this.pu || (this.pu = bh(t.win)), this.pu;
                        },
                        linkRels: r,
                        viewport: h,
                        replaceParams: o,
                      });
                    }
                  }
                ),
                (function (t) {
                  bi(
                    t,
                    "cid",
                    class {
                      constructor(t) {
                        (this.ampdoc = t),
                          (this.mu = null),
                          (this.Fe = Object.create(null)),
                          (this._u = new (class {
                            constructor(t) {
                              (this.ji = t),
                                (this.Be = _s(this.ji)),
                                (this.Au = null),
                                (this.Re = ds(this.ji.win));
                            }
                            isSupported() {
                              return (
                                this.Be.isCctEmbedded() &&
                                this.Be.isProxyOrigin()
                              );
                            }
                            getScopedCid(t) {
                              if (!this.Be.isCctEmbedded())
                                return Promise.resolve(null);
                              if (!this.Au) {
                                const t =
                                  "https://ampcid.google.com/v1/cache:getClientId?key=" +
                                  sh;
                                this.Au = this.gu(t);
                              }
                              return this.Au.then((i) =>
                                i ? this.Pu(i, t) : null
                              );
                            }
                            gu(t, i = !0) {
                              const s = {
                                  publisherOrigin: gn(this.ji.win.location),
                                },
                                e = "fetchCidTimeout";
                              return this.Re.timeoutPromise(
                                3e4,
                                gs(this.ji.win).fetchJson(t, {
                                  method: "POST",
                                  ampCors: !1,
                                  credentials: "include",
                                  mode: "cors",
                                  body: s,
                                }),
                                e
                              )
                                .then((t) =>
                                  t.json().then((t) => {
                                    if (t.optOut) return null;
                                    const s = t.publisherClientId;
                                    if (!s && i && t.alternateUrl) {
                                      const i = `${t.alternateUrl}?key=${sh}`;
                                      return this.gu(i, !1);
                                    }
                                    return s;
                                  })
                                )
                                .catch(
                                  (t) => (
                                    t && t.response
                                      ? t.response.json().then((t) => {
                                          Rt().error(eh, JSON.stringify(t));
                                        })
                                      : t && t.message == e
                                      ? Rt().expectedError(eh, t)
                                      : Rt().error(eh, t),
                                    null
                                  )
                                );
                            }
                            Pu(t, i) {
                              const s = t + ";" + i;
                              return ss(this.ji.win)
                                .sha384Base64(s)
                                .then((t) => "amp-" + t);
                            }
                          })(t)),
                          (this.vu = new (class {
                            constructor(t) {
                              (this.ji = t), (this.Be = _s(this.ji));
                              const { canonicalUrl: i } = es(this.ji);
                              this.Eu = i ? rn(i).origin : null;
                            }
                            isSupported() {
                              return this.Be.hasCapability("cid")
                                ? this.Be.isTrustedViewer()
                                : Promise.resolve(!1);
                            }
                            getScopedCid(t, i) {
                              const s = {
                                scope: i,
                                clientIdApi: !!t,
                                canonicalOrigin: this.Eu,
                              };
                              return (
                                t && (s.apiKey = t),
                                this.Be.sendMessageAwaitResponse("cid", s)
                              );
                            }
                          })(t)),
                          (this.Tu = new (class {
                            constructor(t) {
                              (this.i = t.win),
                                (this.Re = ds(this.i)),
                                (this.Iu = {});
                              const { canonicalUrl: i } = es(t);
                              this.Eu = i ? rn(i).origin : null;
                            }
                            getScopedCid(t, i) {
                              if (this.Iu[i]) return this.Iu[i];
                              let s;
                              return (this.Iu[i] = this.Re.poll(
                                200,
                                () => ((s = rh(this.i, lh)), s !== ch)
                              ).then(() => {
                                if (s === ah) return ah;
                                if ((s !== dh || !this.Mu()) && this.Ru(s))
                                  return null;
                                (s && !this.Ru(s)) || this.yu(ch, fh);
                                const e =
                                  "https://ampcid.google.com/v1/publisher:getClientId?key=" +
                                  t;
                                return this.gu(e, i, s)
                                  .then((e) => {
                                    const n = this.v(e);
                                    if (!n && e.alternateUrl) {
                                      const n = `${e.alternateUrl}?key=${t}`;
                                      return this.gu(n, i, s).then(
                                        this.v.bind(this)
                                      );
                                    }
                                    return n;
                                  })
                                  .catch(
                                    (t) => (
                                      this.yu("$ERROR", fh),
                                      t && t.response
                                        ? t.response.json().then((t) => {
                                            Rt().error(uh, JSON.stringify(t));
                                          })
                                        : Rt().error(uh, t),
                                      null
                                    )
                                  );
                              }));
                            }
                            gu(t, i, s) {
                              const e = {
                                originScope: i,
                                canonicalOrigin: this.Eu,
                              };
                              return (
                                s && (e.securityToken = s),
                                this.Re.timeoutPromise(
                                  fh,
                                  gs(this.i)
                                    .fetchJson(t, {
                                      method: "POST",
                                      ampCors: !1,
                                      credentials: "include",
                                      mode: "cors",
                                      body: e,
                                    })
                                    .then((t) => t.json())
                                )
                              );
                            }
                            v(t) {
                              return t.optOut
                                ? (this.yu(ah, ph), ah)
                                : t.clientId
                                ? (this.yu(t.securityToken, ph), t.clientId)
                                : (t.alternateUrl || this.yu(dh, 36e5), null);
                            }
                            yu(t, i) {
                              t &&
                                hh(this.i, lh, t, this.wu(i), {
                                  highestAvailableDomain: !0,
                                });
                            }
                            wu(t) {
                              return this.i.Date.now() + t;
                            }
                            Mu() {
                              return pn(Ls.getDocumentReferrer(this.i));
                            }
                            Ru(t) {
                              return t && "$" === t[0];
                            }
                          })(t)),
                          (this.bu = null);
                      }
                      get(t, i, s) {
                        return (
                          bt(
                            _h.test(t.scope) && _h.test(t.cookieName),
                            "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s",
                            t.scope
                          ),
                          i
                            .then(() => this.ampdoc.whenFirstVisible())
                            .then(() => {
                              return (
                                (t = this.ampdoc),
                                as(t)
                                  .then((t) => t.get(Ah).then((t) => !!t))
                                  .catch(() => !1)
                              );
                              var t;
                            })
                            .then((e) => {
                              if (e) return "";
                              const n = this.Vu(t, s || i);
                              return ds(this.ampdoc.win)
                                .timeoutPromise(
                                  1e4,
                                  n,
                                  `Getting cid for "${t.scope}" timed out`
                                )
                                .catch((t) => {
                                  l(t);
                                });
                            })
                        );
                      }
                      optOut() {
                        return (
                          (t = this.ampdoc),
                          _s(t).sendMessage("cidOptOut", {}),
                          as(t).then((t) => t.set(Ah, !0))
                        );
                        var t;
                      }
                      Vu(t, i) {
                        const { scope: s } = t,
                          e = rn(this.ampdoc.win.location.href);
                        if (!pn(e)) {
                          const e = this.Su(s);
                          return e
                            ? this.Tu.getScopedCid(e, s).then((e) => {
                                if (e == ah) return null;
                                if (e) {
                                  const i = t.cookieName || s;
                                  return vh(this.ampdoc.win, i, e), e;
                                }
                                return Mh(this, t, i);
                              })
                            : Mh(this, t, i);
                        }
                        return this.vu.isSupported().then((t) => {
                          if (t) {
                            const t = this.Su(s);
                            return this.vu.getScopedCid(t, s);
                          }
                          return this._u.isSupported() && this.Su(s)
                            ? this._u
                                .getScopedCid(s)
                                .then((t) => t || this.xu(i, s, e))
                            : this.xu(i, s, e);
                        });
                      }
                      xu(t, i, s) {
                        return (function (t, i) {
                          if (t.mu) return t.mu;
                          const { win: s } = t.ampdoc;
                          return (t.mu = (function (t) {
                            const { win: i } = t;
                            let s;
                            try {
                              s = i.localStorage.getItem("amp-cid");
                            } catch (t) {}
                            let e = Promise.resolve(s);
                            return (
                              !s && qt(i) && (e = Ih(t)),
                              e.then((t) => {
                                if (!t) return null;
                                const i = B(t);
                                return { time: i.time, cid: i.cid };
                              })
                            );
                          })(t.ampdoc).then((e) => {
                            let n,
                              r = !1;
                            return (
                              e &&
                              !(function (t) {
                                const i = t.time,
                                  s = Date.now();
                                return i + mh < s;
                              })(e)
                                ? ((n = Promise.resolve(e.cid)),
                                  e.time + 864e5 < Date.now() && (r = !0))
                                : ((n = ss(s).sha384Base64(yh(s))), (r = !0)),
                              r &&
                                n.then((s) => {
                                  !(function (t, i, s) {
                                    const { win: e } = t;
                                    qt(e)
                                      ? Ih(t, Rh(s))
                                      : i.then(() => {
                                          try {
                                            e.localStorage.setItem(
                                              "amp-cid",
                                              Rh(s)
                                            );
                                          } catch (t) {}
                                        });
                                  })(t.ampdoc, i, s);
                                }),
                              n
                            );
                          }));
                        })(this, t).then((t) =>
                          ss(this.ampdoc.win).sha384Base64(
                            t +
                              (function (t) {
                                return (
                                  bt(
                                    pn(t),
                                    "Expected proxy origin %s",
                                    t.origin
                                  ),
                                  gn(t)
                                );
                              })(s) +
                              i
                          )
                        );
                      }
                      Su(t) {
                        return this.bu || (this.bu = this.Ou()), this.bu[t];
                      }
                      Ou() {
                        const t = {},
                          i = this.ampdoc.getMetaByName(
                            "amp-google-client-id-api"
                          );
                        return (
                          i &&
                            i.split(",").forEach((i) => {
                              if ((i = i.trim()).indexOf("=") > 0) {
                                const s = i.split("="),
                                  e = s[0].trim();
                                t[e] = s[1].trim();
                              } else {
                                const s = i,
                                  e = Ph[s];
                                e && (t[e] = gh[s]);
                              }
                            }),
                          t
                        );
                      }
                    }
                  );
                })(t),
                (function (t) {
                  bi(
                    t,
                    "viewer",
                    class {
                      constructor(t) {
                        (this.ampdoc = t),
                          (this.win = t.win),
                          (this.Cu = qt(this.win)),
                          (this.ku = !0),
                          (this.Nu = !1),
                          (this.Du = p()),
                          (this.Lu = p()),
                          (this.Uu = new Es()),
                          (this.$u = new Es()),
                          (this.Fu = null),
                          (this.Bu = null),
                          (this.Hu = []),
                          (this.ju = p()),
                          (this.zu = p()),
                          t.isSingleDoc() &&
                            Object.assign(this.zu, Y(this.win.location.hash)),
                          (this.ku = !parseInt(t.getParam("off"), 10)),
                          (this.Nu = !(
                            !parseInt(t.getParam("history"), 10) && !this.Nu
                          )),
                          (this.Gu = null),
                          (this.qu = pn(rn(this.ampdoc.win.location.href)));
                        const i = new n();
                        (this.Wu = i.resolve),
                          (this.Ku = this.Yu(i.promise)),
                          (this.Ju = null),
                          (this.Qu = null);
                        const s = t.getParam("referrer");
                        if (
                          ((this.Xu =
                            this.isEmbedded() && null != s && !1 !== this.Zu()
                              ? s
                              : this.win.document.referrer),
                          (this.tl = new Promise((i) => {
                            this.isEmbedded() && null != t.getParam("referrer")
                              ? this.isTrustedViewer().then((s) => {
                                  s
                                    ? i(t.getParam("referrer"))
                                    : (i(this.win.document.referrer),
                                      this.Xu != this.win.document.referrer &&
                                        (Rt().expectedError(
                                          go,
                                          "Untrusted viewer referrer override: " +
                                            this.Xu +
                                            " at " +
                                            this.Bu
                                        ),
                                        (this.Xu =
                                          this.win.document.referrer)));
                                })
                              : i(this.win.document.referrer);
                          })),
                          (this.il = fn(this.win.location.href || "")),
                          (this.sl = new Promise((i) => {
                            const s = t.getParam("viewerUrl");
                            this.isEmbedded() && s
                              ? this.isTrustedViewer().then((t) => {
                                  t
                                    ? (this.il = yt(s))
                                    : Rt().expectedError(
                                        go,
                                        "Untrusted viewer url override: " +
                                          s +
                                          " at " +
                                          this.Bu
                                      ),
                                    i(this.il);
                                })
                              : i(this.il);
                          })),
                          this.zu.click)
                        ) {
                          const t = fn(this.win.location.href);
                          t != this.win.location.href &&
                            this.win.history.replaceState &&
                            (this.win.location.originalHash ||
                              (this.win.location.originalHash =
                                this.win.location.hash),
                            this.win.history.replaceState({}, "", t),
                            delete this.zu.click);
                        }
                        this.ampdoc.whenFirstVisible().then(() => {
                          this.maybeUpdateFragmentForCct();
                        }),
                          this.ampdoc.isSingleDoc() && this.nl();
                      }
                      Yu(t) {
                        if (
                          !(
                            (this.Cu &&
                              !this.win.__AMP_TEST_IFRAME &&
                              (this.ampdoc.getParam("origin") ||
                                this.ampdoc.getParam("visibilityState") ||
                                -1 !=
                                  this.win.location.search.indexOf(
                                    "amp_js_v"
                                  ))) ||
                            this.isWebviewEmbedded() ||
                            this.isCctEmbedded()
                          ) &&
                          this.ampdoc.isSingleDoc()
                        )
                          return null;
                        const i = "initMessagingChannel timeout";
                        return ds(this.win)
                          .timeoutPromise(2e4, t, i)
                          .catch((t) => {
                            let s = Eo(t);
                            throw (
                              (s &&
                                R(s.message, i) &&
                                (s = Rt().createExpectedError(s)),
                              bn(s),
                              s)
                            );
                          });
                      }
                      getAmpDoc() {
                        return this.ampdoc;
                      }
                      getParam(t) {
                        return this.ampdoc.getParam(t);
                      }
                      hasCapability(t) {
                        const i = this.ampdoc.getParam("cap");
                        return !!i && -1 != i.split(",").indexOf(t);
                      }
                      isEmbedded() {
                        return !!this.Ku;
                      }
                      isWebviewEmbedded() {
                        return (
                          !this.Cu && "1" == this.ampdoc.getParam("webview")
                        );
                      }
                      isCctEmbedded() {
                        if (null != this.Gu) return this.Gu;
                        if (((this.Gu = !1), !this.Cu)) {
                          const t = Y(this.win.location.search);
                          this.Gu =
                            "1" === t.amp_gsa &&
                            (t.amp_js_v || "").startsWith("a");
                        }
                        return this.Gu;
                      }
                      isProxyOrigin() {
                        return this.qu;
                      }
                      maybeUpdateFragmentForCct() {
                        if (!this.isCctEmbedded()) return;
                        if (!this.win.history.replaceState) return;
                        const t = gn(this.win.location.href),
                          { canonicalUrl: i } = es(this.ampdoc),
                          s = gn(i);
                        this.rl(t, s) &&
                          ((this.zu.ampshare = i),
                          this.win.history.replaceState(
                            {},
                            "",
                            "#" + cn(this.zu)
                          ));
                      }
                      rl(t, i) {
                        const s = (t) =>
                          t.split(".").length > 2 ? t.replace(vo, "$1") : t;
                        return s(t) == s(i);
                      }
                      isRuntimeOn() {
                        return this.ku;
                      }
                      toggleRuntime() {
                        (this.ku = !this.ku), this.Uu.fire(this.ku);
                      }
                      onRuntimeState(t) {
                        return this.Uu.add(t);
                      }
                      isOvertakeHistory() {
                        return this.Nu;
                      }
                      getVisibilityState() {
                        return this.ampdoc.getVisibilityState();
                      }
                      isVisible() {
                        return this.ampdoc.isVisible();
                      }
                      hasBeenVisible() {
                        return this.ampdoc.hasBeenVisible();
                      }
                      whenFirstVisible() {
                        return this.ampdoc.whenFirstVisible();
                      }
                      whenNextVisible() {
                        return this.ampdoc.whenNextVisible();
                      }
                      getFirstVisibleTime() {
                        return this.ampdoc.getFirstVisibleTime();
                      }
                      getLastVisibleTime() {
                        return this.ampdoc.getLastVisibleTime();
                      }
                      onVisibilityChanged(t) {
                        return this.ampdoc.onVisibilityChanged(t);
                      }
                      hl(t) {
                        var i;
                        t &&
                          (yt(
                            "prerender" === (i = t) ||
                              "preview" === i ||
                              "visible" === i ||
                              "hidden" === i ||
                              "paused" === i ||
                              "inactive" === i
                          ),
                          t === vs.HIDDEN &&
                            (t =
                              null != this.ampdoc.getLastVisibleTime()
                                ? vs.INACTIVE
                                : vs.PRERENDER),
                          this.ampdoc.overrideVisibilityState(t));
                      }
                      getResolvedViewerUrl() {
                        return this.il;
                      }
                      getViewerUrl() {
                        return this.sl;
                      }
                      maybeGetMessagingOrigin() {
                        return this.Bu;
                      }
                      getUnconfirmedReferrerUrl() {
                        return this.Xu;
                      }
                      getReferrerUrl() {
                        return this.tl;
                      }
                      isTrustedViewer() {
                        if (!this.Ju) {
                          const t = this.Zu();
                          this.Ju =
                            void 0 !== t
                              ? Promise.resolve(t)
                              : this.Ku.then((t) => !!t && this.ol(t));
                        }
                        return this.Ju;
                      }
                      Zu() {
                        return (
                          !!this.isEmbedded() &&
                          (!this.win.location.ancestorOrigins ||
                          this.isWebviewEmbedded() ||
                          this.isCctEmbedded()
                            ? void 0
                            : this.win.location.ancestorOrigins.length > 0 &&
                              this.ol(this.win.location.ancestorOrigins[0]))
                        );
                      }
                      getViewerOrigin() {
                        if (!this.Qu) {
                          let t;
                          this.isEmbedded()
                            ? this.win.location.ancestorOrigins &&
                              this.win.location.ancestorOrigins.length > 0 &&
                              (t = this.win.location.ancestorOrigins[0])
                            : (t = ""),
                            (this.Qu =
                              void 0 !== t
                                ? Promise.resolve(t)
                                : ds(this.win)
                                    .timeoutPromise(1e3, this.Ku)
                                    .catch(() => ""));
                        }
                        return this.Qu;
                      }
                      ol(t) {
                        const i = rn(t),
                          { protocol: s } = i;
                        return (
                          "x-thread:" == s ||
                          ("https:" == s && ut.some((t) => t.test(i.hostname)))
                        );
                      }
                      onMessage(t, i) {
                        let s = this.Du[t];
                        s || ((s = new Es()), (this.Du[t] = s));
                        const e = s.add(i);
                        return (
                          this.ju[t] &&
                            (this.ju[t].forEach((t) => {
                              s.fire(t.data), t.deferred.resolve();
                            }),
                            (this.ju[t] = [])),
                          e
                        );
                      }
                      onMessageRespond(t, i) {
                        return (
                          (this.Lu[t] = i),
                          this.ju[t] &&
                            (this.ju[t].forEach((t) => {
                              t.deferred.resolve(i(t.data));
                            }),
                            (this.ju[t] = [])),
                          () => {
                            this.Lu[t] === i && delete this.Lu[t];
                          }
                        );
                      }
                      receiveMessage(t, i, s) {
                        if ("visibilitychange" == t)
                          return this.hl(i.state), e();
                        if ("broadcast" == t) return this.$u.fire(i), e();
                        const r = this.Du[t],
                          h = this.Lu[t];
                        if (!r && !h) {
                          if (
                            ((this.ju[t] = this.ju[t] || []),
                            this.ju[t].length >= 50)
                          )
                            return;
                          const s = new n();
                          return (
                            this.ju[t].push({ data: i, deferred: s }), s.promise
                          );
                        }
                        return r && r.fire(i), h ? h(i) : r ? e() : void 0;
                      }
                      setMessageDeliverer(t, i) {
                        if (this.Fu)
                          throw new Error(
                            "message channel can only be initialized once"
                          );
                        if (null == i)
                          throw new Error(
                            "message channel must have an origin"
                          );
                        if (
                          ((this.Fu = t),
                          (this.Bu = i),
                          this.Wu(i),
                          this.Hu.length > 0)
                        ) {
                          const t = this.Hu.slice(0);
                          (this.Hu = []),
                            t.forEach((t) => {
                              const i = this.Fu(
                                t.eventType,
                                t.data,
                                t.awaitResponse
                              );
                              t.awaitResponse && t.responseResolver(i);
                            });
                        }
                      }
                      maybeGetMessageDeliverer() {
                        return this.Fu;
                      }
                      sendMessage(t, i, s = !1) {
                        this.ul(t, i, s, !1);
                      }
                      sendMessageAwaitResponse(t, i, s = !1) {
                        return this.ul(t, i, s, !0);
                      }
                      ul(t, i, s, h) {
                        if (this.Fu) return r(() => this.Fu(t, i, h));
                        if (!this.Ku) return h ? Promise.reject(Eo()) : e();
                        if (!s) return this.Ku.then(() => this.Fu(t, i, h));
                        const o = M(this.Hu, (i) => i.eventType == t);
                        let u;
                        if (-1 != o)
                          (u = this.Hu.splice(o, 1)[0]),
                            (u.data = i),
                            (u.awaitResponse = u.awaitResponse || h);
                        else {
                          const s = new n(),
                            { promise: e, resolve: r } = s;
                          u = {
                            eventType: t,
                            data: i,
                            awaitResponse: h,
                            responsePromise: e,
                            responseResolver: r,
                          };
                        }
                        return this.Hu.push(u), u.responsePromise;
                      }
                      broadcast(t) {
                        return this.Ku
                          ? this.ul("broadcast", t, !1, !1).then(
                              () => !0,
                              () => !1
                            )
                          : Promise.resolve(!1);
                      }
                      onBroadcast(t) {
                        return this.$u.add(t);
                      }
                      whenMessagingReady() {
                        return this.Ku;
                      }
                      replaceUrl(t) {
                        if (
                          t &&
                          this.ampdoc.isSingleDoc() &&
                          this.win.history.replaceState
                        )
                          try {
                            const i = rn(this.win.location.href),
                              s = rn(fn(t) + this.win.location.hash);
                            i.origin == s.origin &&
                              gn(i) == gn(s) &&
                              (this.win.history.replaceState({}, "", s.href),
                              (this.win.location.originalHref = i.href));
                          } catch (t) {
                            Rt().error(go, "replaceUrl failed", t);
                          }
                      }
                      nl() {
                        if (this.ampdoc.getVisibilityState() == vs.VISIBLE)
                          return;
                        const t = [],
                          i = () => t.forEach((t) => t()),
                          s = () => {
                            this.hl(vs.VISIBLE),
                              i(),
                              Rt().expectedError(
                                go,
                                "Received user action in non-visible doc"
                              );
                          },
                          e = { capture: !0, passive: !0 };
                        t.push(
                          He(this.win, "keydown", s, e),
                          He(this.win, "touchstart", s, e),
                          He(this.win, "mousedown", s, e)
                        ),
                          this.whenFirstVisible().then(i);
                      }
                    },
                    !0
                  );
                })(t),
                (function (t) {
                  bi(t, "viewport", Co, !0);
                })(t),
                (function (t) {
                  bi(
                    t,
                    "hidden-observer",
                    class {
                      constructor(t) {
                        this.ll = t.getRootNode();
                        const i = this.ll.ownerDocument || this.ll;
                        (this.i = yt(i.defaultView)),
                          (this.cl = null),
                          (this.al = null);
                      }
                      add(t) {
                        this.dl();
                        const i = this.al.add(t);
                        return () => {
                          i(),
                            0 === this.al.getHandlerCount() && this.dispose();
                        };
                      }
                      dl() {
                        if (this.cl) return;
                        this.al = new Es();
                        const t = new this.i.MutationObserver((t) => {
                          t && this.al.fire(t);
                        });
                        (this.cl = t), t.observe(this.ll, Sh);
                      }
                      dispose() {
                        this.cl &&
                          (this.cl.disconnect(),
                          this.al.removeAll(),
                          (this.cl = null),
                          (this.al = null));
                      }
                    }
                  );
                })(t),
                (function (t) {
                  bi(t, "history", kh);
                })(t),
                (function (t) {
                  bi(
                    t,
                    "resources",
                    class {
                      constructor(t) {
                        (this.ampdoc = t),
                          (this.win = t.win),
                          (this.Be = _s(t)),
                          (this.ku = this.Be.isRuntimeOn()),
                          (this.fl = !1),
                          (this.pl = 0),
                          (this.Ei = []),
                          (this.ml = 0),
                          (this._l = 0),
                          (this.Al = 0),
                          (this.Yh = this.ampdoc.isVisible()),
                          (this.gl = !1),
                          (this.Pl = !0),
                          (this.vl = !1),
                          (this.El = -1),
                          (this.Tl = !0),
                          (this.Il = -1),
                          (this.Ml = 0),
                          (this.Rl = 0),
                          (this.xe = new Mr(this.win, () => this.doPass())),
                          (this.yl = new Mr(this.win, () => {
                            (this.Tl = !0), this.schedulePass();
                          })),
                          (this.wl = new Jh()),
                          (this.es = new Jh()),
                          (this.bl = this.Vl.bind(this)),
                          (this.Sl = []),
                          (this.xl = []),
                          (this.Ol = !1),
                          (this.Cl = Ps(this.ampdoc)),
                          (this.oh = As(this.win)),
                          (this.kl = new Dh(this.win, 6e4)),
                          (this.Nl = !1),
                          (this.Dl = 0),
                          (this.Ll = !1),
                          (this.Ul = []),
                          (this.$l = []),
                          (this.Fl = new n()),
                          (this.Bl = new (class {
                            constructor(t) {
                              (this.Ri = t), (this.Hl = p());
                            }
                            addTransition(t, i, s) {
                              const e = this.jl(t, i);
                              D(!this.Hl[e]), (this.Hl[e] = s);
                            }
                            setState(t) {
                              const i = this.Ri;
                              this.Ri = t;
                              const s = this.jl(i, t),
                                e = this.Hl[s];
                              null == e || e();
                            }
                            jl(t, i) {
                              return `${t}|${i}`;
                            }
                          })(this.ampdoc.getVisibilityState())),
                          this.Cl.onChanged((t) => {
                            (this.Ml = this.win.Date.now()),
                              (this.Rl = t.velocity),
                              t.relayoutAll && ((this.Tl = !0), (this.Ll = !0)),
                              this.schedulePass();
                          }),
                          this.Cl.onScroll(() => {
                            this.Ml = this.win.Date.now();
                          }),
                          this.ampdoc.onVisibilityChanged(() => {
                            -1 == this.El &&
                              this.ampdoc.isVisible() &&
                              (this.El = this.win.Date.now()),
                              this.schedulePass();
                          }),
                          this.Be.onRuntimeState((t) => {
                            (this.ku = t), this.schedulePass(1);
                          }),
                          Bn(this.ampdoc, () => {
                            this.zl(this.Bl), this.schedulePass(0);
                          }),
                          this.Gl(),
                          (this.uo = z(this.win, (t) => this.ql(t), 250)),
                          He(this.win.document, "scroll", this.uo, {
                            capture: !0,
                            passive: !0,
                          });
                      }
                      Gl() {
                        this.ampdoc.whenReady().then(() => {
                          (this.gl = !0),
                            this.Wl(),
                            (this.xl = null),
                            ((t) => wi(t, "input"))(
                              this.win
                            ).setupInputModeClasses(this.ampdoc);
                        });
                      }
                      get() {
                        return this.Ei.slice(0);
                      }
                      getAmpdoc() {
                        return this.ampdoc;
                      }
                      getResourceForElement(t) {
                        return On.forElement(t);
                      }
                      getResourceForElementOptional(t) {
                        return On.forElementOptional(t);
                      }
                      getScrollDirection() {
                        return Math.sign(this.Rl) || 1;
                      }
                      add(t) {
                        this.ml++,
                          1 == this.ml && this.Cl.ensureReadyForElements();
                        let i = On.forElementOptional(t);
                        i && 0 != i.getState() && !t.reconstructWhenReparented()
                          ? i.requestMeasure()
                          : (i = new On(++this.pl, t, this)),
                          this.Ei.push(i),
                          this.yl.schedule(1e3);
                      }
                      Kl() {
                        return (
                          this._l < 20 ||
                          this.ampdoc.getVisibilityState() == vs.PREVIEW ||
                          this.ampdoc.hasBeenVisible()
                        );
                      }
                      Yl(t, i = !1, s = !1) {
                        if (!this.ku && !this.fl) return;
                        const e = this.ampdoc.getVisibilityState(),
                          n = e == vs.PRERENDER && !t.prerenderAllowed(),
                          r = e == vs.PREVIEW && !t.previewAllowed();
                        n ||
                          r ||
                          (this.gl
                            ? this.Jl(t, s)
                            : t.isBuilt() ||
                              t.isBuilding() ||
                              (i && this.xl.includes(t)) ||
                              (this.xl.push(t), this.Wl()));
                      }
                      Wl() {
                        if (!this.Ol)
                          try {
                            (this.Ol = !0), this.Ql();
                          } finally {
                            this.Ol = !1;
                          }
                      }
                      Ql() {
                        for (let t = 0; t < this.xl.length; t++) {
                          const i = this.xl[t];
                          (this.gl ||
                            zt(i.element, this.ampdoc.getRootNode())) &&
                            (this.xl.splice(t--, 1), this.Jl(i));
                        }
                      }
                      Jl(t, i = !1) {
                        if (!i && !this.Kl() && !t.isBuildRenderBlocking())
                          return null;
                        const s = t.build();
                        return s
                          ? (this._l++,
                            this.Al++,
                            s.then(
                              () => this.schedulePass(),
                              (i) => {
                                if ((this.Xl(t), !Vn(i))) throw i;
                              }
                            ))
                          : null;
                      }
                      remove(t) {
                        const i = On.forElementOptional(t);
                        i && this.Xl(i);
                      }
                      Xl(t) {
                        const i = this.Ei.indexOf(t);
                        -1 != i && this.Ei.splice(i, 1),
                          t.isBuilt() && t.pauseOnRemove(),
                          3 === t.getState() && t.layoutCanceled(),
                          this.Zl(t, !0);
                      }
                      upgraded(t) {
                        const i = On.forElement(t);
                        this.Yl(i);
                      }
                      updateLayoutPriority(t, i) {
                        const s = On.forElement(t);
                        s.updateLayoutPriority(i),
                          this.es.forEach((t) => {
                            t.resource == s && (t.priority = i);
                          }),
                          this.schedulePass();
                      }
                      schedulePass(t) {
                        return this.xe.schedule(t);
                      }
                      updateOrEnqueueMutateTask(t, i) {
                        let s = null;
                        for (let i = 0; i < this.Sl.length; i++)
                          if (this.Sl[i].resource == t) {
                            s = this.Sl[i];
                            break;
                          }
                        s
                          ? ((s.newHeight = i.newHeight),
                            (s.newWidth = i.newWidth),
                            (s.marginChange = i.marginChange),
                            (s.event = i.event),
                            (s.force = i.force || s.force),
                            (s.callback = i.callback))
                          : this.Sl.push(i);
                      }
                      schedulePassVsync() {
                        this.Nl ||
                          ((this.Nl = !0), this.oh.mutate(() => this.doPass()));
                      }
                      ampInitComplete() {
                        (this.vl = !0), this.schedulePass();
                      }
                      setRelayoutTop(t) {
                        -1 == this.Il
                          ? (this.Il = t)
                          : (this.Il = Math.min(t, this.Il));
                      }
                      maybeHeightChanged() {
                        this.Ll = !0;
                      }
                      onNextPass(t) {
                        this.Ul.push(t);
                      }
                      doPass() {
                        if (this.ku) {
                          if (
                            ((this.Yh = this.ampdoc.isVisible()),
                            (this.Al = 0),
                            this.gl && this.Pl && this.vl)
                          ) {
                            var t;
                            this.Pl = !1;
                            const i = this.win.document,
                              s = es(this.ampdoc);
                            this.Be.sendMessage(
                              "documentLoaded",
                              {
                                title: i.title,
                                sourceUrl: Pn(this.ampdoc.getUrl()),
                                isStory:
                                  "AMP-STORY" ===
                                  (null === (t = i.body.firstElementChild) ||
                                  void 0 === t
                                    ? void 0
                                    : t.tagName),
                                serverLayout:
                                  i.documentElement.hasAttribute(
                                    "i-amphtml-element"
                                  ),
                                linkRels: s.linkRels,
                                metaTags: { viewport: s.viewport },
                                viewport: s.viewport,
                              },
                              !0
                            ),
                              (this.Dl = this.Cl.getContentHeight()),
                              this.Be.sendMessage(
                                "documentHeight",
                                { height: this.Dl },
                                !0
                              );
                          }
                          !this.Pl &&
                            this.tc &&
                            this.Ei.every(
                              (t) =>
                                t.getState() != On.NOT_BUILT || t.element.R1()
                            ) &&
                            ((this.tc = !1), (this.Ll = !0)),
                            this.Cl.getSize(),
                            this.xe.cancel(),
                            (this.Nl = !1),
                            this.Bl.setState(this.ampdoc.getVisibilityState()),
                            this.ic(),
                            this.Ll &&
                              ((this.Ll = !1),
                              this.oh.measure(() => {
                                const t = this.Cl.getContentHeight();
                                t != this.Dl &&
                                  (this.Be.sendMessage(
                                    "documentHeight",
                                    { height: t },
                                    !0
                                  ),
                                  (this.Dl = t),
                                  this.Cl.contentHeightChanged());
                              }));
                          for (let t = 0; t < this.Ul.length; t++)
                            (0, this.Ul[t])();
                          this.Ul.length = 0;
                        }
                      }
                      ic() {
                        this.gl &&
                          this.vl &&
                          !this.ampdoc.signals().get(Cn) &&
                          this.ampdoc.signals().signal(Cn);
                      }
                      sc() {
                        return this.Sl.length > 0;
                      }
                      ec() {
                        const t = this.win.Date.now(),
                          i = this.Cl.getRect(),
                          s = i.height / 10,
                          e = i.height / 10,
                          n =
                            (Math.abs(this.Rl) < 0.01 && t - this.Ml > 500) ||
                            t - this.Ml > 1e3;
                        if (this.Sl.length > 0) {
                          const t = this.Sl;
                          this.Sl = [];
                          let r = -1;
                          const h = [];
                          let o = 0;
                          for (let u = 0; u < t.length; u++) {
                            const l = t[u],
                              { event: c, resource: a } = l,
                              d = a.getLayoutBox();
                            let f,
                              p = 0,
                              m = 0,
                              _ = 0,
                              A = 0,
                              { bottom: P, top: g } = d;
                            if (l.marginChange) {
                              f = l.marginChange.newMargins;
                              const t = l.marginChange.currentMargins;
                              null != f.top && (p = f.top - t.top),
                                null != f.bottom && (m = f.bottom - t.bottom),
                                null != f.left && (_ = f.left - t.left),
                                null != f.right && (A = f.right - t.right),
                                p && (g = d.top - t.top),
                                m && (P = d.bottom + t.bottom);
                            }
                            const v = l.newHeight - d.height,
                              E = l.newWidth - d.width;
                            let T = !1;
                            if (
                              0 == v &&
                              0 == p &&
                              0 == m &&
                              0 == E &&
                              0 == _ &&
                              0 == A
                            );
                            else if (l.force || !this.Yh) T = !0;
                            else if (
                              this.kl.hasDescendantsOf(a.element) ||
                              (c &&
                                c.userActivation &&
                                c.userActivation.hasBeenActive)
                            )
                              T = !0;
                            else if (
                              g >= i.bottom - e ||
                              (0 == p &&
                                d.bottom + Math.min(v, 0) >= i.bottom - e)
                            )
                              T = !0;
                            else {
                              if (i.top > 1 && P <= i.top + s) {
                                if (v < 0 && i.top + o < -v) continue;
                                n ? ((o += v), h.push(l)) : this.Sl.push(l);
                                continue;
                              }
                              this.nc(a, d)
                                ? (T = !0)
                                : v < 0 ||
                                  p < 0 ||
                                  m < 0 ||
                                  (l.newHeight == d.height
                                    ? this.oh.run(
                                        {
                                          measure: (t) => {
                                            t.resize = !1;
                                            const i = a.element.parentElement;
                                            if (!i) return;
                                            const s =
                                              (i.getLayoutSize &&
                                                i.getLayoutSize().width) ||
                                              i.offsetWidth;
                                            let e = E;
                                            for (
                                              let t = 0;
                                              t < i.childElementCount;
                                              t++
                                            )
                                              if (
                                                ((e +=
                                                  i.children[t].offsetWidth),
                                                e > s)
                                              )
                                                return;
                                            t.resize = !0;
                                          },
                                          mutate: (t) => {
                                            t.resize &&
                                              l.resource.changeSize(
                                                l.newHeight,
                                                l.newWidth,
                                                f
                                              ),
                                              l.resource.overflowCallback(
                                                !t.resize,
                                                l.newHeight,
                                                l.newWidth,
                                                f
                                              );
                                          },
                                        },
                                        {}
                                      )
                                    : l.resource.overflowCallback(
                                        !0,
                                        l.newHeight,
                                        l.newWidth,
                                        f
                                      ));
                            }
                            T &&
                              (d.top >= 0 &&
                                (r = -1 == r ? d.top : Math.min(r, d.top)),
                              l.resource.changeSize(l.newHeight, l.newWidth, f),
                              l.resource.overflowCallback(
                                !1,
                                l.newHeight,
                                l.newWidth,
                                f
                              ),
                              (this.Ll = !0)),
                              l.callback && l.callback(T);
                          }
                          -1 != r && this.setRelayoutTop(r),
                            h.length > 0 &&
                              this.oh.run(
                                {
                                  measure: (t) => {
                                    (t.scrollHeight =
                                      this.Cl.getScrollHeight()),
                                      (t.scrollTop = this.Cl.getScrollTop());
                                  },
                                  mutate: (t) => {
                                    let i = -1;
                                    h.forEach((t) => {
                                      const s = t.resource.getLayoutBox();
                                      (i =
                                        -1 == i ? s.top : Math.min(i, s.top)),
                                        t.resource.changeSize(
                                          t.newHeight,
                                          t.newWidth,
                                          t.marginChange
                                            ? t.marginChange.newMargins
                                            : void 0
                                        ),
                                        t.callback && t.callback(!0);
                                    }),
                                      -1 != i && this.setRelayoutTop(i);
                                    const s = this.Cl.getScrollHeight();
                                    s != t.scrollHeight &&
                                      this.Cl.setScrollTop(
                                        t.scrollTop + (s - t.scrollHeight)
                                      ),
                                      (this.Ll = !0);
                                  },
                                },
                                {}
                              );
                        }
                      }
                      nc(t, i, s) {
                        const e = this.Cl.getContentHeight(),
                          n = Math.max(0.85 * e, e - 1e3),
                          r = i || t.getLayoutBox(),
                          h = s || t.getInitialLayoutBox();
                        return r.bottom >= n || h.bottom >= n;
                      }
                      rc(t) {
                        const i = t.isDisplayed();
                        return t.measure(), !(i && !t.isDisplayed());
                      }
                      hc(t) {
                        t.length &&
                          this.oh.mutate(() => {
                            t.forEach((t) => {
                              t.unload(), this.Zl(t);
                            });
                          });
                      }
                      oc() {
                        const t = this.win.Date.now(),
                          { $l: i, Tl: s, Il: e } = this;
                        (this.Tl = !1), (this.Il = -1);
                        let n,
                          r = 0,
                          h = 0;
                        for (let t = 0; t < this.Ei.length; t++) {
                          const i = this.Ei[t];
                          0 != i.getState() ||
                            i.isBuilding() ||
                            i.element.R1() ||
                            this.Yl(i, !0),
                            (!s && i.hasBeenMeasured() && 1 != i.getState()) ||
                              r++,
                            i.isMeasureRequested() && h++;
                        }
                        if (r > 0 || h > 0 || s || -1 != e || i.length > 0)
                          for (let t = 0; t < this.Ei.length; t++) {
                            const r = this.Ei[t];
                            if (
                              (r.hasOwner() && !r.isMeasureRequested()) ||
                              r.element.R1()
                            )
                              continue;
                            let h =
                              s ||
                              1 == r.getState() ||
                              !r.hasBeenMeasured() ||
                              r.isMeasureRequested() ||
                              (-1 != e && r.getLayoutBox().bottom >= e);
                            if (!h)
                              for (let t = 0; t < i.length; t++)
                                if (i[t].contains(r.element)) {
                                  h = !0;
                                  break;
                                }
                            h && (this.rc(r) || (n || (n = []), n.push(r)));
                          }
                        (i.length = 0), n && this.hc(n);
                        const o = this.Cl.getRect();
                        let u;
                        u = this.Yh ? Xt(o, 0.25, 2) : o;
                        const l = this.Yh ? Xt(o, 0.25, 0.25) : o;
                        for (let t = 0; t < this.Ei.length; t++) {
                          const i = this.Ei[t];
                          if (
                            0 == i.getState() ||
                            i.hasOwner() ||
                            i.element.R1()
                          )
                            continue;
                          const s = this.Yh && i.isDisplayed() && i.overlaps(l);
                          i.setInViewport(s);
                        }
                        if (u)
                          for (let t = 0; t < this.Ei.length; t++) {
                            const i = this.Ei[t];
                            i.isBuilt() ||
                              i.isBuilding() ||
                              i.hasOwner() ||
                              i.element.R1() ||
                              !i.hasBeenMeasured() ||
                              !i.isDisplayed() ||
                              !i.overlaps(u) ||
                              this.Yl(i, !0, !0),
                              2 != i.getState() ||
                                i.hasOwner() ||
                                (i.isDisplayed() &&
                                  i.overlaps(u) &&
                                  this.scheduleLayoutOrPreload(i, !0));
                          }
                        if (this.Yh && this.uc(t)) {
                          let t = 0;
                          for (let i = 0; i < this.Ei.length && t < 4; i++) {
                            const s = this.Ei[i];
                            2 == s.getState() &&
                              !s.hasOwner() &&
                              !s.element.R1() &&
                              s.isDisplayed() &&
                              s.idleRenderOutsideViewport() &&
                              (this.scheduleLayoutOrPreload(s, !1), t++);
                          }
                          for (let i = 0; i < this.Ei.length && t < 4; i++) {
                            const s = this.Ei[i];
                            2 != s.getState() ||
                              s.hasOwner() ||
                              s.element.R1() ||
                              !s.isDisplayed() ||
                              (this.scheduleLayoutOrPreload(s, !1), t++);
                          }
                        }
                      }
                      uc(t = Date.now()) {
                        const i = this.wl.getLastDequeueTime();
                        return (
                          0 == this.wl.getSize() &&
                          0 == this.es.getSize() &&
                          t > i + 5e3 &&
                          i > 0
                        );
                      }
                      lc() {
                        const t = this.win.Date.now();
                        let i = -1,
                          s = this.es.peek(this.bl);
                        for (; s && ((i = this.cc(s)), !(i > 16)); ) {
                          this.es.dequeue(s);
                          const e = this.wl.getTaskById(s.id);
                          if (e) {
                            const t = this.ac.bind(this, s);
                            e.promise.then(t, t);
                          } else {
                            const { resource: i } = s,
                              e = !0;
                            i.measure(),
                              e && this.dc(i, s.forceOutsideViewport)
                                ? ((s.promise = s.callback()),
                                  (s.startTime = t),
                                  this.wl.enqueue(s),
                                  s.promise
                                    .then(
                                      this.fc.bind(this, s, !0),
                                      this.fc.bind(this, s, !1)
                                    )
                                    .catch(bn))
                                : i.layoutCanceled();
                          }
                          (s = this.es.peek(this.bl)), (i = -1);
                        }
                        if (i >= 0) return i;
                        let e = 2 * (t - this.wl.getLastDequeueTime());
                        return (e = Math.max(Math.min(3e4, e), 5e3)), e;
                      }
                      Vl(t) {
                        const i = this.Cl.getRect(),
                          s = t.resource.getLayoutBox();
                        let e = Math.floor((s.top - i.top) / i.height);
                        return (
                          Math.sign(e) != this.getScrollDirection() && (e *= 2),
                          (e = Math.abs(e)),
                          10 * t.priority + e
                        );
                      }
                      cc(t) {
                        const i = this.win.Date.now();
                        if (0 == this.wl.getSize()) {
                          if (-1 === this.El) return 0;
                          const s = 1e3 * t.priority;
                          return Math.max(s - (i - this.El), 0);
                        }
                        let s = 0;
                        return (
                          this.wl.forEach((e) => {
                            const n = Math.max(
                              1e3 * (t.priority - e.priority),
                              0
                            );
                            s = Math.max(s, n - (i - e.startTime));
                          }),
                          s
                        );
                      }
                      ac(t) {
                        this.es.getTaskById(t.id) || this.es.enqueue(t);
                      }
                      fc(t, i, s) {
                        if ((this.wl.dequeue(t), this.schedulePass(1e3), !i))
                          return Promise.reject(s);
                      }
                      dc(t, i) {
                        if (0 == t.getState() || !t.isDisplayed()) return !1;
                        const s = this.ampdoc.getVisibilityState(),
                          e = s == vs.PRERENDER && t.prerenderAllowed(),
                          n = s == vs.PREVIEW && t.previewAllowed();
                        return (
                          !!(this.Yh || e || n) &&
                          !!(
                            i ||
                            t.isInViewport() ||
                            t.renderOutsideViewport() ||
                            t.idleRenderOutsideViewport()
                          )
                        );
                      }
                      scheduleLayoutOrPreload(t, i, s, e) {
                        if (t.element.R1()) return;
                        const n = 0 != t.getState(),
                          r = t.isDisplayed();
                        (n && r) || yt(!1);
                        const h = e || !1;
                        this.dc(t, h) &&
                          (i
                            ? this.Is(
                                t,
                                "L",
                                0,
                                s || 0,
                                h,
                                t.startLayout.bind(t)
                              )
                            : this.Is(
                                t,
                                "P",
                                2,
                                s || 0,
                                h,
                                t.startLayout.bind(t)
                              ));
                      }
                      Is(t, i, s, e, n, r) {
                        const h = t.getTaskId(i),
                          o = {
                            id: h,
                            resource: t,
                            priority: Math.max(t.getLayoutPriority(), e) + s,
                            forceOutsideViewport: n,
                            callback: r,
                            scheduleTime: this.win.Date.now(),
                            startTime: 0,
                            promise: null,
                          },
                          u = this.es.getTaskById(h);
                        (!u || o.priority < u.priority) &&
                          (u && this.es.dequeue(u),
                          this.es.enqueue(o),
                          this.schedulePass(this.cc(o))),
                          o.resource.layoutScheduled(o.scheduleTime);
                      }
                      whenFirstPass() {
                        return this.Fl.promise;
                      }
                      zl(t) {
                        const {
                            HIDDEN: i,
                            INACTIVE: s,
                            PAUSED: e,
                            PRERENDER: n,
                            PREVIEW: r,
                            VISIBLE: h,
                          } = vs,
                          o = () => {
                            const t = this.Cl.getSize();
                            if (t.height > 0 && t.width > 0) {
                              this.sc() && this.ec(), this.oc();
                              let t = this.lc();
                              this.sc() && (t = Math.min(t, 500)),
                                this.Yh && this.schedulePass(t),
                                this.Fl.resolve();
                            }
                          },
                          u = () => {},
                          l = () => {
                            this.Ei.forEach((t) => t.pause());
                          },
                          c = () => {
                            this.Ei.forEach((t) => {
                              t.unload(), this.Zl(t);
                            }),
                              this.mc();
                          },
                          a = () => {
                            this.Ei.forEach((t) => t.resume()), o();
                          };
                        t.addTransition(n, n, o),
                          t.addTransition(n, r, o),
                          t.addTransition(n, h, o),
                          t.addTransition(n, i, o),
                          t.addTransition(n, s, o),
                          t.addTransition(n, e, o),
                          t.addTransition(r, r, o),
                          t.addTransition(r, h, o),
                          t.addTransition(r, i, o),
                          t.addTransition(r, s, o),
                          t.addTransition(r, e, o),
                          t.addTransition(h, h, o),
                          t.addTransition(h, i, o),
                          t.addTransition(h, s, c),
                          t.addTransition(h, e, l),
                          t.addTransition(i, h, o),
                          t.addTransition(i, i, o),
                          t.addTransition(i, s, c),
                          t.addTransition(i, e, l),
                          t.addTransition(s, h, a),
                          t.addTransition(s, i, a),
                          t.addTransition(s, s, u),
                          t.addTransition(s, e, o),
                          t.addTransition(e, h, a),
                          t.addTransition(e, i, o),
                          t.addTransition(e, s, c),
                          t.addTransition(e, e, u);
                      }
                      mc() {
                        try {
                          this.win.getSelection().removeAllRanges();
                        } catch (t) {}
                      }
                      Zl(t, i) {
                        if (
                          ((1 != t.getState() && 2 != t.getState()) ||
                            (this.es.purge((i) => i.resource == t),
                            this.wl.purge((i) => i.resource == t),
                            T(this.Sl, (i) => i.resource === t)),
                          0 == t.getState() && i && this.xl)
                        ) {
                          const i = this.xl.indexOf(t);
                          -1 != i && this.xl.splice(i, 1);
                        }
                      }
                      ql(t) {
                        const { target: i } = t;
                        if (i.nodeType !== Node.ELEMENT_NODE) return;
                        if (i === this.Cl.getScrollingElement()) return;
                        const s = i;
                        this.$l.includes(s) ||
                          (this.$l.push(s), this.schedulePass(70));
                      }
                    }
                  );
                })(t),
                (function (t) {
                  bi(
                    t,
                    "owners",
                    class {
                      constructor(t) {
                        this.Ei = cs(t);
                      }
                      setOwner(t, i) {
                        On.setOwner(t, i);
                      }
                      schedulePreload(t, i) {
                        this._c(this.Ei.getResourceForElement(t), !1, Yh(i));
                      }
                      scheduleLayout(t, i) {
                        this._c(this.Ei.getResourceForElement(t), !0, Yh(i));
                      }
                      schedulePause(t, i) {
                        const s = this.Ei.getResourceForElement(t);
                        (i = Yh(i)),
                          this.Ac(s, i, (t) => {
                            t.pause();
                          });
                      }
                      scheduleResume(t, i) {
                        const s = this.Ei.getResourceForElement(t);
                        (i = Yh(i)),
                          this.Ac(s, i, (t) => {
                            t.resume();
                          });
                      }
                      scheduleUnlayout(t, i) {
                        const s = this.Ei.getResourceForElement(t);
                        (i = Yh(i)),
                          this.Ac(s, i, (t) => {
                            t.unlayout();
                          });
                      }
                      requireLayout(t, i) {
                        const s = [];
                        return (
                          this.gc(t, (t) => {
                            s.push(t.element.ensureLoaded());
                          }),
                          Promise.all(s)
                        );
                      }
                      Ac(t, i, s) {
                        for (const e of i)
                          yt(t.element.contains(e)), this.gc(e, s);
                      }
                      gc(t, i) {
                        if (t.classList.contains("i-amphtml-element")) {
                          i(this.Ei.getResourceForElement(t));
                          const s = t.getPlaceholder();
                          s && this.gc(s, i);
                        } else {
                          const s =
                              t.getElementsByClassName("i-amphtml-element"),
                            e = [];
                          for (let t = 0; t < s.length; t++) {
                            const n = s[t];
                            let r = !1;
                            for (let t = 0; t < e.length; t++)
                              if (e[t].contains(n)) {
                                r = !0;
                                break;
                              }
                            r ||
                              (e.push(n), i(this.Ei.getResourceForElement(n)));
                          }
                        }
                      }
                      _c(t, i, s) {
                        this.Ac(t, s, (i) => {
                          i.element.ensureLoaded(t.getLayoutPriority());
                        });
                      }
                    }
                  );
                })(t),
                (function (t) {
                  bi(
                    t,
                    "mutator",
                    class {
                      constructor(t) {
                        (this.ampdoc = t),
                          (this.win = t.win),
                          (this.Ei = cs(t)),
                          (this.Cl = Ps(this.ampdoc)),
                          (this.oh = As(this.win)),
                          (this.kl = new Dh(this.win, 6e4)),
                          this.kl.onFocus((t) => {
                            this.Pc(t);
                          });
                      }
                      forceChangeSize(t, i, s, e, n) {
                        this.vc(On.forElement(t), i, s, n, void 0, !0, e);
                      }
                      requestChangeSize(t, i, s, e, n) {
                        return new Promise((r, h) => {
                          this.vc(On.forElement(t), i, s, e, n, !1, (t) => {
                            t ? r() : h(new Error("changeSize attempt denied"));
                          });
                        });
                      }
                      expandElement(t) {
                        On.forElement(t).completeExpand(),
                          this.Ei.schedulePass(70);
                      }
                      attemptCollapse(t) {
                        return new Promise((i, s) => {
                          this.vc(
                            On.forElement(t),
                            0,
                            0,
                            void 0,
                            void 0,
                            !1,
                            (e) => {
                              e
                                ? (On.forElement(t).completeCollapse(), i())
                                : s(
                                    Rt().createExpectedError(
                                      "collapse attempt denied"
                                    )
                                  );
                            }
                          );
                        });
                      }
                      collapseElement(t) {
                        const i = this.Cl.getLayoutRect(t);
                        0 != i.width &&
                          0 != i.height &&
                          (Ne(this.win, "dirty-collapse-element")
                            ? this.dirtyElement(t)
                            : this.Ei.setRelayoutTop(i.top)),
                          On.forElement(t).completeCollapse(),
                          this.Ei.schedulePass(70);
                      }
                      measureElement(t) {
                        return this.oh.measurePromise(t);
                      }
                      mutateElement(t, i, s) {
                        return this.Ec(t, null, i, s);
                      }
                      measureMutateElement(t, i, s) {
                        return this.Ec(t, i, s);
                      }
                      Tc(t) {
                        const i = Os(this.win, t.element);
                        return {
                          top: parseInt(i.marginTop, 10) || 0,
                          right: parseInt(i.marginRight, 10) || 0,
                          bottom: parseInt(i.marginBottom, 10) || 0,
                          left: parseInt(i.marginLeft, 10) || 0,
                        };
                      }
                      Ec(t, i, s, e = !1) {
                        const n = () => {
                          const i = this.Cl.getLayoutRect(t);
                          return 0 != i.width && 0 != i.height ? i.top : -1;
                        };
                        let r = -1;
                        return this.oh.runPromise({
                          measure: () => {
                            i && i(), e || (r = n());
                          },
                          mutate: () => {
                            if ((s(), e)) return;
                            t.classList.contains("i-amphtml-element") &&
                              On.forElement(t).requestMeasure();
                            const i =
                              t.getElementsByClassName("i-amphtml-element");
                            for (let t = 0; t < i.length; t++)
                              On.forElement(i[t]).requestMeasure();
                            this.Ei.schedulePass(70),
                              -1 != r && this.Ei.setRelayoutTop(r),
                              this.oh.measure(() => {
                                const t = n();
                                -1 != t &&
                                  t != r &&
                                  (this.Ei.setRelayoutTop(t),
                                  this.Ei.schedulePass(70)),
                                  this.Ei.maybeHeightChanged();
                              });
                          },
                        });
                      }
                      dirtyElement(t) {
                        let i = !1;
                        if (t.classList.contains("i-amphtml-element")) {
                          const i = On.forElement(t);
                          this.Ei.setRelayoutTop(i.getLayoutBox().top);
                        } else i = !0;
                        this.Ei.schedulePass(70, i);
                      }
                      Pc(t) {
                        const i = (function (t, i, s) {
                          let e;
                          for (e = t; e && undefined !== e; e = e.parentElement)
                            if (i(e)) return e;
                          return null;
                        })(t, (t) => !!On.forElementOptional(t));
                        if (!i) return;
                        const s = On.forElement(i),
                          e = s.getPendingChangeSize();
                        void 0 !== e &&
                          this.vc(s, e.height, e.width, e.margins, void 0, !0);
                      }
                      vc(t, i, s, e, n, r, h) {
                        t.hasBeenMeasured() && !e
                          ? this.Ic(t, i, s, void 0, n, r, h)
                          : this.oh.measure(() => {
                              t.hasBeenMeasured() || t.measure();
                              const o = e
                                ? { newMargins: e, currentMargins: this.Tc(t) }
                                : void 0;
                              this.Ic(t, i, s, o, n, r, h);
                            });
                      }
                      Ic(t, i, s, e, n, r, h) {
                        t.resetPendingChangeSize();
                        const o = t.getLayoutSize();
                        if (
                          !(
                            (void 0 !== i && i != o.height) ||
                            (void 0 !== s && s != o.width) ||
                            (void 0 !== e &&
                              ((u = e.currentMargins),
                              (l = e.newMargins),
                              (void 0 !== l.top && l.top != u.top) ||
                                (void 0 !== l.right && l.right != u.right) ||
                                (void 0 !== l.bottom && l.bottom != u.bottom) ||
                                (void 0 !== l.left && l.left != u.left)))
                          )
                        )
                          return (
                            void 0 === i &&
                              void 0 === s &&
                              void 0 === e &&
                              Rt().error(
                                "Mutator",
                                "attempting to change size with undefined dimensions",
                                t.debugid
                              ),
                            void (h && h(!0))
                          );
                        var u, l;
                        this.Ei.updateOrEnqueueMutateTask(t, {
                          resource: t,
                          newHeight: i,
                          newWidth: s,
                          marginChange: e,
                          event: n,
                          force: r,
                          callback: h,
                        }),
                          this.Ei.schedulePassVsync();
                      }
                    }
                  );
                })(t),
                (function (t) {
                  bi(t, "url-replace", function (t) {
                    return new (class {
                      constructor(t, i) {
                        (this.ampdoc = t), (this.jr = i);
                      }
                      expandStringSync(t, i, s) {
                        return new lo(this.jr, i, void 0, !0, s, !0).expand(t);
                      }
                      expandStringAsync(t, i, s) {
                        return new lo(this.jr, i, void 0, void 0, s, !0).expand(
                          t
                        );
                      }
                      expandUrlSync(t, i, s) {
                        return this.Mc(
                          t,
                          new lo(this.jr, i, void 0, !0, s).expand(t)
                        );
                      }
                      expandUrlAsync(t, i, s, e) {
                        return new lo(this.jr, i, void 0, void 0, s, e)
                          .expand(t)
                          .then((i) => this.Mc(t, i));
                      }
                      expandInputValueAsync(t) {
                        return this.Rc(t, !1);
                      }
                      expandInputValueSync(t) {
                        return this.Rc(t, !0);
                      }
                      Rc(t, i) {
                        yt(
                          "INPUT" == t.tagName &&
                            "hidden" ==
                              (t.getAttribute("type") || "").toLowerCase()
                        );
                        const s = this.yc(t);
                        if (!s) return i ? t.value : Promise.resolve(t.value);
                        void 0 === t["amp-original-value"] &&
                          (t["amp-original-value"] = t.value);
                        const e = new lo(this.jr, void 0, void 0, i, s).expand(
                          t["amp-original-value"] || t.value
                        );
                        return i
                          ? (t.value = e)
                          : e.then((i) => ((t.value = i), i));
                      }
                      yc(t, i) {
                        const s = t.getAttribute("data-amp-replace");
                        if (!s) return;
                        const e = {};
                        return (
                          s
                            .trim()
                            .split(/\s+/)
                            .forEach((t) => {
                              (i && !m(i, t)) || (e[t] = !0);
                            }),
                          e
                        );
                      }
                      wc(t) {
                        const i = es(this.ampdoc);
                        if (
                          t.origin == rn(i.canonicalUrl).origin ||
                          t.origin == rn(i.sourceUrl).origin
                        )
                          return !0;
                        const s = this.ampdoc.getMetaByName(
                          "amp-link-variable-allowed-origin"
                        );
                        if (s) {
                          const i = s.trim().split(/\s+/);
                          for (let s = 0; s < i.length; s++)
                            if (t.origin == rn(i[s]).origin) return !0;
                        }
                        return !1;
                      }
                      maybeExpandLink(t, i) {
                        yt("A" == t.tagName);
                        const s = t;
                        let e = s.getAttribute("data-amp-addparams") || "";
                        const n = this.yc(s, {
                          CLIENT_ID: !0,
                          QUERY_PARAM: !0,
                          PAGE_VIEW_ID: !0,
                          PAGE_VIEW_ID_64: !0,
                          NAV_TIMING: !0,
                        });
                        if (!n && !e && !i) return;
                        let r =
                          s["amp-original-href"] || s.getAttribute("href");
                        const h = rn(r);
                        null == s["amp-original-href"] &&
                          (s["amp-original-href"] = r);
                        const o = this.wc(h);
                        if (
                          (e &&
                            ((e = o ? this.bc(e, n) : e), (r = ln(r, Y(e)))),
                          !o)
                        )
                          return (s.href = r);
                        if (i) {
                          if (!n || !n.QUERY_PARAM) {
                            const t = { QUERY_PARAM: !0 };
                            i = this.expandUrlSync(i, void 0, t);
                          }
                          r = ln(r, Y(i));
                        }
                        return (r = this.bc(r, n)), (s.href = r);
                      }
                      bc(t, i) {
                        return i ? this.expandUrlSync(t, void 0, i) : t;
                      }
                      collectVars(t, i) {
                        const s = Object.create(null);
                        return new lo(this.jr, i, s).expand(t).then(() => s);
                      }
                      collectDisallowedVarsSync(t) {
                        const i = t.getAttribute("src"),
                          s = new lo(this.jr).getMacroNames(i),
                          e = this.yc(t);
                        return e ? s.filter((t) => !e[t]) : s;
                      }
                      Mc(t, i) {
                        return rn(i).protocol != rn(t).protocol
                          ? (Mt().error(
                              mo,
                              "Illegal replacement of the protocol: ",
                              t
                            ),
                            t)
                          : (bt(
                              mn(i),
                              "The replacement url has invalid protocol: %s",
                              i
                            ),
                            i);
                      }
                      getVariableSource() {
                        return this.jr;
                      }
                    })(
                      t,
                      new (class extends class {
                        constructor(t) {
                          (this.ampdoc = t),
                            (this.Vc = Object.create(null)),
                            (this.Sc = !1),
                            this.xc();
                        }
                        _e() {
                          this.initialize(), (this.Sc = !0);
                        }
                        initialize() {}
                        get(t) {
                          return this.Sc || this._e(), this.Vc[t];
                        }
                        set(t, i) {
                          return (
                            yt(-1 == t.indexOf("RETURN")),
                            (this.Vc[t] = this.Vc[t] || {
                              sync: void 0,
                              async: void 0,
                            }),
                            (this.Vc[t].sync = i),
                            this
                          );
                        }
                        setAsync(t, i) {
                          return (
                            yt(-1 == t.indexOf("RETURN")),
                            (this.Vc[t] = this.Vc[t] || {
                              sync: void 0,
                              async: void 0,
                            }),
                            (this.Vc[t].async = i),
                            this
                          );
                        }
                        setBoth(t, i, s) {
                          return this.set(t, i).setAsync(t, s);
                        }
                        getExpr(t, i) {
                          this.Sc || this._e();
                          const s = g(g({}, this.Vc), t);
                          return this.Oc(Object.keys(s), i);
                        }
                        Oc(t, i) {
                          if (
                            (this.xc() &&
                              (t = t.filter((t) => this.xc().includes(t))),
                            i && (t = t.filter((t) => i[t])),
                            0 === t.length)
                          )
                            return /_^/g;
                          t.sort((t, i) => i.length - t.length);
                          const s = t
                            .map((t) => ("$" === t[0] ? "\\" + t : t))
                            .join("|");
                          return new RegExp("\\$?(" + s + ")", "g");
                        }
                        xc() {
                          return this.Cc
                            ? this.Cc
                            : this.ampdoc.isSingleDoc() &&
                              Rr(this.ampdoc.getRootNode())
                            ? ((this.Cc = [""]), this.Cc)
                            : void 0;
                        }
                      } {
                        constructor(t) {
                          super(t), (this.kc = null), (this.Nc = {});
                        }
                        Dc(t, i, s) {
                          return this.setBoth(
                            t,
                            () => fo(this.ampdoc.win, i, s),
                            () => ao(this.ampdoc.win, i, s)
                          );
                        }
                        initialize() {
                          const { win: t } = this.ampdoc,
                            i = this.ampdoc.getHeadNode(),
                            s = Ps(this.ampdoc);
                          ps(this.ampdoc).then((t) => {
                            this.kc = t;
                          }),
                            this.set("RANDOM", () => Math.random());
                          const n = Object.create(null);
                          this.set("COUNTER", (t) => (n[t] = 1 + (0 | n[t]))),
                            this.set(
                              "CANONICAL_URL",
                              () => this.Lc().canonicalUrl
                            ),
                            this.set(
                              "CANONICAL_HOST",
                              () => rn(this.Lc().canonicalUrl).host
                            ),
                            this.set(
                              "CANONICAL_HOSTNAME",
                              () => rn(this.Lc().canonicalUrl).hostname
                            ),
                            this.set(
                              "CANONICAL_PATH",
                              () => rn(this.Lc().canonicalUrl).pathname
                            ),
                            this.setAsync("DOCUMENT_REFERRER", () =>
                              _s(this.ampdoc).getReferrerUrl()
                            ),
                            this.setAsync("EXTERNAL_REFERRER", () =>
                              _s(this.ampdoc)
                                .getReferrerUrl()
                                .then((i) =>
                                  i
                                    ? rn(Pn(i)).hostname === Ls.getHostname(t)
                                      ? null
                                      : i
                                    : null
                                )
                            ),
                            this.set("TITLE", () => {
                              const i = t.document;
                              return i.originalTitle || i.title;
                            }),
                            this.set("AMPDOC_URL", () =>
                              fn(this.Uc(t.location.href))
                            ),
                            this.set("AMPDOC_HOST", () => {
                              const i = rn(t.location.href);
                              return i && i.host;
                            }),
                            this.set("AMPDOC_HOSTNAME", () => {
                              const i = rn(t.location.href);
                              return i && i.hostname;
                            });
                          const r = () => {
                            const t = this.Lc();
                            return fn(this.Uc(t.sourceUrl));
                          };
                          this.setBoth(
                            "SOURCE_URL",
                            () => r(),
                            () => Fh().then(() => r())
                          ),
                            this.set(
                              "SOURCE_HOST",
                              () => rn(this.Lc().sourceUrl).host
                            ),
                            this.set(
                              "SOURCE_HOSTNAME",
                              () => rn(this.Lc().sourceUrl).hostname
                            ),
                            this.set(
                              "SOURCE_PATH",
                              () => rn(this.Lc().sourceUrl).pathname
                            ),
                            this.set(
                              "PAGE_VIEW_ID",
                              () => this.Lc().pageViewId
                            ),
                            this.setAsync(
                              "PAGE_VIEW_ID_64",
                              () => this.Lc().pageViewId64
                            ),
                            this.setBoth(
                              "QUERY_PARAM",
                              (t, i = "") => this.$c(t, i),
                              (t, i = "") => Fh().then(() => this.$c(t, i))
                            ),
                            this.set("FRAGMENT_PARAM", (t, i = "") =>
                              this.Fc(t, i)
                            );
                          let h = null;
                          this.setBoth(
                            "CLIENT_ID",
                            (t) => (h ? h[t] : null),
                            (t, s, n, r) => {
                              bt(
                                t,
                                "The first argument to CLIENT_ID, the fallback Cookie name, is required"
                              );
                              let o = e();
                              return (
                                s &&
                                  (o = ((t) =>
                                    Gi(
                                      t,
                                      "userNotificationManager",
                                      "amp-user-notification"
                                    ))(i).then((t) => t.get(s))),
                                is(this.ampdoc)
                                  .then(
                                    (i) => (
                                      (r = "true" == r),
                                      i.get(
                                        {
                                          scope: t,
                                          createCookieIfNotPresent: !0,
                                          cookieName: n || void 0,
                                          disableBackup: r,
                                        },
                                        o
                                      )
                                    )
                                  )
                                  .then(
                                    (i) => (
                                      h || (h = Object.create(null)),
                                      i &&
                                        "_ga" == (n || t) &&
                                        ("string" == typeof i
                                          ? (i = i.replace(
                                              /^(GA1|1)\.[\d-]+\./,
                                              ""
                                            ))
                                          : Rt().error(
                                              mo,
                                              "non-string cid, what is it?",
                                              Object.keys(i)
                                            )),
                                      (h[t] = i),
                                      i
                                    )
                                  )
                              );
                            }
                          ),
                            this.setAsync("VARIANT", (t) =>
                              this.Bc((i) => {
                                const s = i[t];
                                return (
                                  bt(
                                    void 0 !== s,
                                    "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" +
                                      t
                                  ),
                                  null === s ? "none" : s
                                );
                              }, "VARIANT")
                            ),
                            this.setAsync("VARIANTS", () =>
                              this.Bc((t) => {
                                const i = [];
                                for (const s in t) {
                                  const e = t[s];
                                  i.push(s + "." + (e || "none"));
                                }
                                return i.join("!");
                              }, "VARIANTS")
                            ),
                            this.setBoth(
                              "AMP_GEO",
                              (t) => Po(this.kc, t),
                              (t) => this.Hc((i) => Po(i, t), "AMP_GEO")
                            ),
                            this.set("TIMESTAMP", _o("getTime")),
                            this.set("TIMESTAMP_ISO", _o("toISOString")),
                            this.set("TIMEZONE", _o("getTimezoneOffset")),
                            this.set("SCROLL_HEIGHT", () =>
                              s.getScrollHeight()
                            ),
                            this.set("SCROLL_WIDTH", () => s.getScrollWidth()),
                            this.set("VIEWPORT_HEIGHT", () => s.getHeight()),
                            this.set("VIEWPORT_WIDTH", () => s.getWidth());
                          const { screen: o } = t;
                          this.set("SCREEN_WIDTH", Ao(o, "width")),
                            this.set("SCREEN_HEIGHT", Ao(o, "height")),
                            this.set(
                              "AVAILABLE_SCREEN_HEIGHT",
                              Ao(o, "availHeight")
                            ),
                            this.set(
                              "AVAILABLE_SCREEN_WIDTH",
                              Ao(o, "availWidth")
                            ),
                            this.set("SCREEN_COLOR_DEPTH", Ao(o, "colorDepth")),
                            this.set("DOCUMENT_CHARSET", () => {
                              const i = t.document;
                              return i.characterSet || i.charset;
                            }),
                            this.set("BROWSER_LANGUAGE", () => {
                              const i = t.navigator;
                              return (
                                i.language ||
                                i.userLanguage ||
                                i.browserLanguage ||
                                ""
                              ).toLowerCase();
                            }),
                            this.set("USER_AGENT", () => t.navigator.userAgent),
                            this.setBoth(
                              "UACH",
                              (t) => {
                                var i;
                                return null !== (i = this.Nc[t]) && void 0 !== i
                                  ? i
                                  : "";
                              },
                              (i) => this.jc(i, t)
                            ),
                            this.Dc(
                              "PAGE_LOAD_TIME",
                              "navigationStart",
                              "loadEventStart"
                            ),
                            this.Dc(
                              "DOMAIN_LOOKUP_TIME",
                              "domainLookupStart",
                              "domainLookupEnd"
                            ),
                            this.Dc(
                              "TCP_CONNECT_TIME",
                              "connectStart",
                              "connectEnd"
                            ),
                            this.Dc(
                              "SERVER_RESPONSE_TIME",
                              "requestStart",
                              "responseStart"
                            ),
                            this.Dc(
                              "PAGE_DOWNLOAD_TIME",
                              "responseStart",
                              "responseEnd"
                            ),
                            this.Dc(
                              "REDIRECT_TIME",
                              "navigationStart",
                              "fetchStart"
                            ),
                            this.Dc(
                              "DOM_INTERACTIVE_TIME",
                              "navigationStart",
                              "domInteractive"
                            ),
                            this.Dc(
                              "CONTENT_LOAD_TIME",
                              "navigationStart",
                              "domContentLoadedEventStart"
                            ),
                            this.setAsync("ACCESS_READER_ID", () =>
                              this.zc(
                                (t) => t.getAccessReaderId(),
                                "ACCESS_READER_ID"
                              )
                            ),
                            this.setAsync(
                              "AUTHDATA",
                              (t) => (
                                bt(
                                  t,
                                  "The first argument to AUTHDATA, the field, is required"
                                ),
                                this.zc(
                                  (i) => i.getAuthdataField(t),
                                  "AUTHDATA"
                                )
                              )
                            ),
                            this.setAsync("VIEWER", () =>
                              _s(this.ampdoc)
                                .getViewerOrigin()
                                .then((t) => (null == t ? "" : t))
                            ),
                            this.setAsync("TOTAL_ENGAGED_TIME", () =>
                              Ji(i).then((t) => t.getTotalEngagedTime())
                            ),
                            this.setAsync("INCREMENTAL_ENGAGED_TIME", (t, s) =>
                              Ji(i).then((i) =>
                                i.getIncrementalEngagedTime(t, "false" !== s)
                              )
                            ),
                            this.set(
                              "NAV_TIMING",
                              (i, s) => (
                                bt(
                                  i,
                                  "The first argument to NAV_TIMING, the start attribute name, is required"
                                ),
                                fo(t, i, s)
                              )
                            ),
                            this.setAsync(
                              "NAV_TIMING",
                              (i, s) => (
                                bt(
                                  i,
                                  "The first argument to NAV_TIMING, the start attribute name, is required"
                                ),
                                ao(t, i, s)
                              )
                            ),
                            this.set("NAV_TYPE", () => po(t, "type")),
                            this.set("NAV_REDIRECT_COUNT", () =>
                              po(t, "redirectCount")
                            ),
                            this.set("AMP_VERSION", () => "2301261900000"),
                            this.set("BACKGROUND_STATE", () =>
                              this.ampdoc.isVisible() ? "0" : "1"
                            ),
                            this.setAsync("VIDEO_STATE", (t, i) => {
                              return ((s = this.ampdoc),
                              Vi(s, "video-manager")).getVideoStateProperty(
                                t,
                                i
                              );
                              var s;
                            }),
                            this.setAsync("AMP_STATE", (t) => {
                              const i = this.ampdoc.getRootNode(),
                                s = i.documentElement || i;
                              return ts(s).then(
                                (i) => (i && i.getStateValue(t)) || ""
                              );
                            });
                        }
                        Uc(t) {
                          const { replaceParams: i } = this.Lc();
                          return i
                            ? (function (t, i) {
                                const s = Y(rn(t).search),
                                  e = {},
                                  n = Object.keys(i);
                                for (let t = 0; t < n.length; t++)
                                  m(s, n[t]) || (e[n[t]] = i[n[t]]);
                                return ln(t, e);
                              })(_n(t), i)
                            : t;
                        }
                        Lc() {
                          return es(this.ampdoc);
                        }
                        zc(t, i) {
                          const s = this.ampdoc.getHeadNode();
                          return Promise.all([Ki(s), Yi(s)]).then((s) => {
                            const e = s[0],
                              n = s[1],
                              r = e || n;
                            return r
                              ? e && n
                                ? t(n) || t(e)
                                : t(r)
                              : (Mt().error(
                                  mo,
                                  "Access or subsciptions service is not installed to access: ",
                                  i
                                ),
                                null);
                          });
                        }
                        $c(t, i) {
                          bt(
                            t,
                            "The first argument to QUERY_PARAM, the query string param is required"
                          );
                          const s = Y(
                              rn(_n(this.ampdoc.win.location.href)).search
                            ),
                            { replaceParams: e } = this.Lc();
                          return void 0 !== s[t]
                            ? s[t]
                            : e && void 0 !== e[t]
                            ? e[t]
                            : i;
                        }
                        Fc(t, i) {
                          bt(
                            t,
                            "The first argument to FRAGMENT_PARAM, the fragment string param is required"
                          ),
                            bt(
                              "string" == typeof t,
                              "param should be a string"
                            );
                          const s = Q(this.ampdoc.win);
                          return void 0 === s[t] ? i : s[t];
                        }
                        Bc(t, i) {
                          return ((s = this.ampdoc.getHeadNode()),
                          qi(s, "variant", "amp-experiment", !0))
                            .then(
                              (t) => (
                                bt(
                                  t,
                                  "To use variable %s, amp-experiment should be configured",
                                  i
                                ),
                                t.getVariants()
                              )
                            )
                            .then((i) => t(i));
                          var s;
                        }
                        Hc(t, i) {
                          return null !== this.kc
                            ? t(this.kc)
                            : ps(this.ampdoc.getHeadNode()).then(
                                (s) => (
                                  bt(
                                    s,
                                    "To use variable %s, amp-geo should be configured",
                                    i
                                  ),
                                  (this.kc = s),
                                  t(s)
                                )
                              );
                        }
                        jc(t, i) {
                          return t in this.Nc
                            ? Promise.resolve(this.Nc[t])
                            : (null === (s = i.navigator) ||
                              void 0 === s ||
                              null === (e = s.userAgentData) ||
                              void 0 === e ||
                              null === (n = e.getHighEntropyValues([t])) ||
                              void 0 === n
                                ? void 0
                                : n.then((i) => {
                                    const s =
                                      "object" != typeof i[t]
                                        ? i[t]
                                        : JSON.stringify(i[t]);
                                    return (this.Nc[t] = s), s;
                                  })) || Promise.resolve("");
                          var s, e, n;
                        }
                      })(t)
                    );
                  });
                })(t),
                (function (t) {
                  bi(
                    t,
                    "action",
                    class {
                      constructor(t, i) {
                        (this.ampdoc = t),
                          (this.ll = i || t.getRootNode()),
                          (this.Gc = this.ampdoc.isSingleDoc() && Rr(this.ll)),
                          (this.Wr = this.Gc ? Or : null),
                          (this.qc = p()),
                          (this.Wc = p()),
                          this.addEvent("tap"),
                          this.addEvent("submit"),
                          this.addEvent("change"),
                          this.addEvent("input-debounced"),
                          this.addEvent("input-throttled"),
                          this.addEvent("valid"),
                          this.addEvent("invalid");
                      }
                      addEvent(t) {
                        if ("tap" == t)
                          this.ll.addEventListener("click", (i) => {
                            if (!i.defaultPrevented) {
                              const s = i.target;
                              this.trigger(s, t, i, 3);
                            }
                          }),
                            this.ll.addEventListener("keydown", (i) => {
                              const { key: s, target: e } = i,
                                n = e;
                              if ("Enter" == s || " " == s) {
                                const s = n.getAttribute("role"),
                                  e = s && m(Cr, s.toLowerCase());
                                !i.defaultPrevented &&
                                  e &&
                                  this.trigger(n, t, i, 3) &&
                                  i.preventDefault();
                              }
                            });
                        else if ("submit" == t)
                          this.ll.addEventListener(t, (i) => {
                            const s = i.target;
                            this.trigger(s, t, i, 3);
                          });
                        else if ("change" == t)
                          this.ll.addEventListener(t, (i) => {
                            const s = i.target;
                            this.Kc(i), this.trigger(s, t, i, 3);
                          });
                        else if ("input-debounced" == t) {
                          const i = G(
                            this.ampdoc.win,
                            (i) => {
                              const s = i.target;
                              this.trigger(s, t, i, 3);
                            },
                            300
                          );
                          this.ll.addEventListener("input", (t) => {
                            const s = new Dr(t);
                            this.Kc(s), i(s);
                          });
                        } else if ("input-throttled" == t) {
                          const i = z(
                            this.ampdoc.win,
                            (i) => {
                              const s = i.target;
                              this.trigger(s, t, i, 3);
                            },
                            100
                          );
                          this.ll.addEventListener("input", (t) => {
                            const s = new Dr(t);
                            this.Kc(s), i(s);
                          });
                        } else
                          ("valid" != t && "invalid" != t) ||
                            this.ll.addEventListener(t, (i) => {
                              const s = i.target;
                              this.trigger(s, t, i, 3);
                            });
                      }
                      addGlobalTarget(t, i) {
                        this.qc[t] = i;
                      }
                      addGlobalMethodHandler(t, i, s = 2) {
                        this.Wc[t] = { handler: i, minTrust: s };
                      }
                      trigger(t, i, s, e, n) {
                        return this.Yc(t, i, s, e, n);
                      }
                      execute(t, i, s, e, n, r, h) {
                        const o = new kr(t, i, s, e, n, r, h);
                        this.Jc(o);
                      }
                      installActionHandler(t, i) {
                        if (
                          (yt(
                            Nr(t.getAttribute("id") || "") ||
                              t.tagName.toLowerCase() in xr
                          ),
                          t[Sr])
                        )
                          return void Rt().error(
                            br,
                            `Action handler already installed for ${t}`
                          );
                        t[Sr] = i;
                        const s = t[Vr];
                        v(s) &&
                          ds(wt(t)).delay(() => {
                            s.forEach((t) => {
                              try {
                                i(t);
                              } catch (i) {
                                Rt().error(
                                  br,
                                  "Action execution failed:",
                                  t,
                                  i
                                );
                              }
                            }),
                              (t[Vr].length = 0);
                          }, 1);
                      }
                      hasAction(t, i, s) {
                        return !!this.Qc(t, i, s);
                      }
                      hasResolvableAction(t, i, s) {
                        const e = this.Qc(t, i, s);
                        return (
                          !!e &&
                          e.actionInfos.some((t) => {
                            const { target: i } = t;
                            return !!this.Xc(i);
                          })
                        );
                      }
                      hasResolvableActionForTarget(t, i, s, e) {
                        const n = this.Qc(t, i, e);
                        return (
                          !!n &&
                          n.actionInfos.some((t) => {
                            const { target: i } = t;
                            return this.Xc(i) == s;
                          })
                        );
                      }
                      Xc(t) {
                        return this.qc[t] ? this.ll : this.ll.getElementById(t);
                      }
                      setAllowlist(t) {
                        yt(t.every((t) => t.tagOrTarget && t.method)),
                          (this.Wr = t);
                      }
                      addToAllowlist(t, i, s) {
                        (s && s.includes("email") !== this.Gc) ||
                          (this.Wr || (this.Wr = []),
                          v(i) || (i = [i]),
                          i.forEach((i) => {
                            this.Wr.some(
                              (s) => s.tagOrTarget == t && s.method == i
                            ) || this.Wr.push({ tagOrTarget: t, method: i });
                          }));
                      }
                      Yc(t, i, s, e, n) {
                        const r = this.Qc(t, i);
                        if (!r) return !1;
                        const h = Math.random();
                        let o = null;
                        return (
                          r.actionInfos.forEach((u) => {
                            const { args: l, method: c, str: a, target: d } = u,
                              f = (function (t, i, s) {
                                if (!t) return t;
                                const e = s || {};
                                if (i) {
                                  const t = (function (t) {
                                    return t.detail;
                                  })(i);
                                  t && (e.event = t);
                                }
                                const n = p();
                                return (
                                  Object.keys(t).forEach((i) => {
                                    let s = t[i];
                                    if ("object" == typeof s && s.expression) {
                                      const t = s.expression,
                                        i = (function (t, i) {
                                          if ("." == i) return t;
                                          const s = i.split(".");
                                          let e = t;
                                          for (const t of s) {
                                            if (
                                              !(
                                                t &&
                                                e &&
                                                void 0 !== e[t] &&
                                                "object" == typeof e &&
                                                m(e, t)
                                              )
                                            ) {
                                              e = void 0;
                                              break;
                                            }
                                            e = e[t];
                                          }
                                          return e;
                                        })(e, t);
                                      s = void 0 === i ? null : i;
                                    }
                                    e[s] ? (n[i] = e[s]) : (n[i] = s);
                                  }),
                                  n
                                );
                              })(l, s, n),
                              _ = () => {
                                const n = this.Xc(d);
                                if (!n)
                                  return void this.Zc(
                                    `Target "${d}" not found for action [${a}].`
                                  );
                                const o = new kr(
                                  n,
                                  c,
                                  f,
                                  t,
                                  r.node,
                                  s,
                                  e,
                                  i,
                                  n.tagName || d,
                                  h
                                );
                                return this.Jc(o);
                              };
                            o = o ? o.then(_) : _();
                          }),
                          r.actionInfos.length >= 1
                        );
                      }
                      Zc(t, i) {
                        if (i) {
                          const s = Mt().createError(`[Action] ${t}`);
                          throw (bn(s, i), s);
                        }
                        Mt().error(br, t);
                      }
                      Jc(t) {
                        const { method: i, tagOrTarget: s } = t;
                        if (
                          this.Wr &&
                          !(function (t, i) {
                            let { method: s } = t;
                            const { node: e, tagOrTarget: n } = t;
                            s === Wn &&
                              "function" == typeof e.getDefaultActionAlias &&
                              (s = e.getDefaultActionAlias());
                            const r = s.toLowerCase(),
                              h = n.toLowerCase();
                            return i.some(
                              (t) =>
                                (t.tagOrTarget.toLowerCase() === h ||
                                  "*" === t.tagOrTarget) &&
                                t.method.toLowerCase() === r
                            );
                          })(t, this.Wr)
                        )
                          return (
                            this.Zc(
                              `"${s}.${i}" is not allowlisted ${JSON.stringify(
                                this.Wr
                              )}.`
                            ),
                            null
                          );
                        const e = this.qc[s];
                        if (e) return e(t);
                        const n = t.node,
                          r = this.Wc[i];
                        if (r && t.satisfiesTrust(r.minTrust))
                          return r.handler(t);
                        const h = n.tagName.toLowerCase();
                        if (Nr(h))
                          return (
                            n.enqueAction
                              ? n.enqueAction(t)
                              : this.Zc(`Unrecognized AMP element "${h}".`, n),
                            null
                          );
                        const o = xr[h];
                        if (
                          Nr(n.getAttribute("id") || "") ||
                          (o && o.indexOf(i) > -1)
                        ) {
                          const i = n[Sr];
                          return (
                            i ? i(t) : ((n[Vr] = n[Vr] || []), n[Vr].push(t)),
                            null
                          );
                        }
                        return (
                          this.Zc(
                            `Target (${s}) doesn't support "${i}" action.`,
                            t.caller
                          ),
                          null
                        );
                      }
                      Qc(t, i, s) {
                        let e = t;
                        for (; e; ) {
                          if (s && e == s) return null;
                          const t = this.ta(e, i);
                          if (t && !(n = e).disabled && !n.matches(":disabled"))
                            return { node: e, actionInfos: yt(t) };
                          e = e.parentElement;
                        }
                        var n;
                        return null;
                      }
                      ta(t, i) {
                        const s = this.ia(t, i);
                        return (s && s[i]) || null;
                      }
                      ia(t, i) {
                        let s = t[wr];
                        return (
                          void 0 === s &&
                            ((s = null),
                            t.hasAttribute("on")
                              ? ((s = Ur(t.getAttribute("on"), t)), (t[wr] = s))
                              : t.hasAttribute("execute") &&
                                ((s = Ur(
                                  `${i}:${t.getAttribute("execute")}`,
                                  t
                                )),
                                (t[wr] = s))),
                          s
                        );
                      }
                      setActions(t, i) {
                        t.setAttribute("on", i), delete t[wr];
                      }
                      Kc(t) {
                        const i = p(),
                          { target: s } = t;
                        if (
                          (void 0 !== s.value && (i.value = s.value),
                          "INPUT" == s.tagName &&
                            (i.valueAsNumber = Number(s.value)),
                          void 0 !== s.checked && (i.checked = s.checked),
                          (void 0 === s.min && void 0 === s.max) ||
                            ((i.min = s.min), (i.max = s.max)),
                          s.files &&
                            (i.files = ((e = s.files),
                            e ? Array.prototype.slice.call(e) : []).map(
                              (t) => ({
                                name: t.name,
                                size: t.size,
                                type: t.type,
                              })
                            )),
                          Object.keys(i).length > 0)
                        )
                          try {
                            t.detail = i;
                          } catch (t) {}
                        var e;
                      }
                    },
                    !0
                  );
                })(t),
                (function (t) {
                  bi(
                    t,
                    "standard-actions",
                    class {
                      constructor(t) {
                        this.ampdoc = t;
                        const i = t.getHeadNode();
                        (this.sa = hs(t)),
                          (this.Cl = Ps(t)),
                          this.ea(Qi(i)),
                          this.na();
                      }
                      ea(t) {
                        t.addGlobalTarget("AMP", this.ra.bind(this)),
                          t.addGlobalMethodHandler("hide", this.ha.bind(this)),
                          t.addGlobalMethodHandler("show", this.oa.bind(this)),
                          t.addGlobalMethodHandler(
                            "toggleVisibility",
                            this.ua.bind(this)
                          ),
                          t.addGlobalMethodHandler(
                            "scrollTo",
                            this.la.bind(this)
                          ),
                          t.addGlobalMethodHandler("focus", this.ca.bind(this)),
                          t.addGlobalMethodHandler(
                            "toggleClass",
                            this.aa.bind(this)
                          ),
                          t.addGlobalMethodHandler("copy", this.da.bind(this)),
                          t.addGlobalMethodHandler(
                            "toggleChecked",
                            this.fa.bind(this)
                          );
                      }
                      na() {
                        this.pa() &&
                          this.ampdoc.waitForBodyOpen().then((t) => {
                            const i =
                              t.getAttribute("data-prefers-dark-mode-class") ||
                              "amp-dark-mode";
                            t.classList.add(i);
                          });
                      }
                      pa() {
                        var t, i;
                        try {
                          const t =
                            this.ampdoc.win.localStorage.getItem(
                              "amp-dark-mode"
                            );
                          if (t) return "yes" === t;
                        } catch (t) {}
                        return null ===
                          (t = (i = this.ampdoc.win).matchMedia) || void 0 === t
                          ? void 0
                          : t.call(i, "(prefers-color-scheme: dark)").matches;
                      }
                      ra(t) {
                        if (!t.satisfiesTrust(2)) return null;
                        const { args: i, method: s, node: e } = t,
                          n = wt(e);
                        switch (s) {
                          case "pushState":
                          case "setState":
                            const s =
                              e.nodeType === Node.DOCUMENT_NODE
                                ? e.documentElement
                                : e;
                            return ts(s).then(
                              (i) => (
                                bt(i, "AMP-BIND is not installed."), i.invoke(t)
                              )
                            );
                          case "navigateTo":
                            return this.ma(t);
                          case "closeOrNavigateTo":
                            return this._a(t);
                          case "scrollTo":
                            return (
                              bt(i.id, "AMP.scrollTo must provide element ID"),
                              (t.node = Ni(e).getElementById(i.id)),
                              this.la(t)
                            );
                          case "goBack":
                            return (
                              rs(this.ampdoc).goBack(
                                !(!i || !0 !== i.navigate)
                              ),
                              null
                            );
                          case "print":
                            return n.print(), null;
                          case "copy":
                            return this.da(t);
                          case "optoutOfCid":
                            return is(this.ampdoc)
                              .then((t) => t.optOut())
                              .catch((t) => {
                                Rt().error(to, "Failed to opt out of CID", t);
                              });
                          case "toggleTheme":
                            return this.Aa(), null;
                        }
                        throw Mt().createError("Unknown AMP action ", s);
                      }
                      da(t) {
                        const { args: i, node: s } = t,
                          e = wt(s),
                          n = "copy-error";
                        let r;
                        if ("AMP" === t.tagOrTarget) r = i.text.trim();
                        else {
                          var h;
                          const i = L(t.node);
                          r = (
                            null !== (h = i.value) && void 0 !== h
                              ? h
                              : i.textContent
                          ).trim();
                        }
                        const o = function (t, i, s) {
                          const n = Be(e, `${t}`, { data: { type: i } });
                          Qi(s.caller).trigger(s.caller, t, n, 3);
                        };
                        var u, l, c;
                        (null !== (l = (u = e.document).defaultView) &&
                          void 0 !== l &&
                          null !== (c = l.navigator) &&
                          void 0 !== c &&
                          c.clipboard) ||
                        Xh(u)
                          ? (function (t, i, s, e) {
                              var n;
                              null !== (n = t.navigator) &&
                              void 0 !== n &&
                              n.clipboard
                                ? t.navigator.clipboard.writeText(i).then(s, e)
                                : Xh(t.document) &&
                                  (function (t, i) {
                                    var s;
                                    let e = !1;
                                    const n = t.document,
                                      r = n.createElement("textarea");
                                    Vs(r, {
                                      position: "fixed",
                                      top: 0,
                                      left: 0,
                                      width: "50px",
                                      height: "50px",
                                      padding: 0,
                                      border: "none",
                                      outline: "none",
                                      background: "transparent",
                                    }),
                                      (r.value = i),
                                      (r.readOnly = !0),
                                      (r.contentEditable = "true"),
                                      n.body.appendChild(r),
                                      null === (s = t.getSelection()) ||
                                        void 0 === s ||
                                        s.removeAllRanges(),
                                      r.focus(),
                                      r.setSelectionRange(0, i.length);
                                    try {
                                      e = n.execCommand("copy");
                                    } catch (t) {}
                                    return Bt(r), e;
                                  })(t, i)
                                ? s()
                                : e();
                            })(
                              e,
                              r,
                              () => {
                                o("copy-success", "success", t);
                              },
                              () => {
                                o(n, "error", t);
                              }
                            )
                          : o(n, "unsupported", t);
                      }
                      ma(t) {
                        const { args: i, caller: s, method: n, node: r } = t,
                          h = wt(r);
                        let o = e();
                        return (
                          s.tagName.startsWith("AMP-") &&
                            (o = s.getImpl().then((t) => {
                              "function" == typeof t.throwIfCannotNavigate &&
                                t.throwIfCannotNavigate();
                            })),
                          o.then(
                            () => {
                              var t;
                              ((t = this.ampdoc),
                              Vi(t, "navigation")).navigateTo(
                                h,
                                i.url,
                                `AMP.${n}`,
                                { target: i.target, opener: i.opener }
                              );
                            },
                            (t) => {
                              Mt().error(to, t);
                            }
                          )
                        );
                      }
                      Aa() {
                        this.ampdoc.waitForBodyOpen().then((t) => {
                          try {
                            const i =
                              t.getAttribute("data-prefers-dark-mode-class") ||
                              "amp-dark-mode";
                            this.pa()
                              ? (t.classList.remove(i),
                                this.ampdoc.win.localStorage.setItem(
                                  "amp-dark-mode",
                                  "no"
                                ))
                              : (t.classList.add(i),
                                this.ampdoc.win.localStorage.setItem(
                                  "amp-dark-mode",
                                  "yes"
                                ));
                          } catch (t) {}
                        });
                      }
                      _a(t) {
                        const { node: i } = t,
                          s = wt(i),
                          n = s.parent != s;
                        let r = !1;
                        return (
                          s.opener &&
                            this.ampdoc.isSingleDoc() &&
                            !n &&
                            (s.close(), (r = s.closed)),
                          r ? e() : this.ma(t)
                        );
                      }
                      la(t) {
                        const i = t.node,
                          { args: s } = t;
                        let e = s && s.position,
                          n = s && s.duration;
                        return (
                          e &&
                            !["top", "bottom", "center"].includes(e) &&
                            (e = void 0),
                          w(n) || (n = void 0),
                          this.Cl.animateScrollIntoView(i, e, n)
                        );
                      }
                      ca(t) {
                        return Gt(t.node), null;
                      }
                      ha(t) {
                        const i = t.node;
                        if (i.classList.contains("i-amphtml-element")) {
                          const t = i;
                          this.sa.mutateElement(t, () => t.collapse(), !0);
                        } else this.sa.mutateElement(i, () => Ss(i, !1));
                        return null;
                      }
                      oa(t) {
                        const { node: i } = t,
                          s = i,
                          e = wt(s);
                        if (s.classList.contains(re(Ks))) return null;
                        this.sa.measureElement(() => {
                          "none" == Os(e, s).display && Zh(s);
                        });
                        const n = (r = s).hasAttribute("autofocus")
                          ? r
                          : r.querySelector("[autofocus]");
                        var r;
                        return (
                          n && us(e).isIos()
                            ? (this.ga(s, n),
                              this.sa.mutateElement(s, () => {}))
                            : this.sa.mutateElement(s, () => {
                                this.ga(s, n);
                              }),
                          null
                        );
                      }
                      ga(t, i) {
                        t.classList.contains("i-amphtml-element")
                          ? t.expand()
                          : Ss(t, !0),
                          i && Gt(i);
                      }
                      ua(t) {
                        return Zh(t.node) ? this.oa(t) : this.ha(t);
                      }
                      aa(t) {
                        const i = t.node,
                          { args: s } = t,
                          e = Mt().assertString(
                            s.class,
                            "Argument 'class' must be a string."
                          );
                        return (
                          io.test(e) ||
                            this.sa.mutateElement(i, () => {
                              if (void 0 !== s.force) {
                                const t = Mt().assertBoolean(
                                  s.force,
                                  "Optional argument 'force' must be a boolean."
                                );
                                i.classList.toggle(e, t);
                              } else i.classList.toggle(e);
                            }),
                          null
                        );
                      }
                      fa(t) {
                        const i = t.node,
                          { args: s } = t;
                        return (
                          this.sa.mutateElement(i, () => {
                            if (void 0 !== (null == s ? void 0 : s.force)) {
                              const t = Mt().assertBoolean(
                                s.force,
                                "Optional argument 'force' must be a boolean."
                              );
                              i.checked = t;
                            } else
                              !0 === i.checked
                                ? (i.checked = !1)
                                : (i.checked = !0);
                          }),
                          null
                        );
                      }
                    },
                    !0
                  );
                })(t),
                no(t),
                (function (t) {
                  bi(
                    t,
                    Hh,
                    class {
                      constructor(t) {
                        (this.ampdoc = t),
                          (this.Pa = t.getRootNode()),
                          (this.Cl = Ps(this.ampdoc)),
                          (this.Be = _s(this.ampdoc)),
                          (this.gr = rs(this.ampdoc)),
                          (this.bh = us(this.ampdoc.win)),
                          (this.va = this.bh.isIos() && this.bh.isSafari()),
                          (this.Cu =
                            qt(this.ampdoc.win) && this.Be.isOvertakeHistory()),
                          (this.Ea =
                            this.Pa != this.ampdoc.getRootNode() ||
                            !!this.ampdoc.getParent()),
                          (this.Ta = "inabox" == at(this.ampdoc.win).runtime),
                          (this.Ia =
                            this.Pa.nodeType == Node.DOCUMENT_NODE
                              ? this.Pa.documentElement
                              : this.Pa),
                          (this.Ma = this.Ra.bind(this)),
                          this.Pa.addEventListener(jh, this.Ma),
                          this.Pa.addEventListener(zh, this.Ma),
                          (this.ya = !1),
                          (function (t) {
                            return t
                              .whenReady()
                              .then(
                                () =>
                                  !!t
                                    .getBody()
                                    .querySelector(
                                      "amp-analytics[type=googleanalytics]"
                                    )
                              );
                          })(this.ampdoc).then((t) => {
                            this.ya = t;
                          }),
                          (this.Ju = !1),
                          (this.wa = !1),
                          Promise.all([
                            this.Be.isTrustedViewer(),
                            this.Be.getViewerOrigin(),
                          ]).then((t) => {
                            var i;
                            (this.Ju = t[0]),
                              (this.wa = ((i = t[1]), nt.test(nn(i).origin)));
                          }),
                          (this.ba = null),
                          (this.Va = new Ln()),
                          (this.Sa = new Ln());
                      }
                      static installAnchorClickInterceptor(t, i) {
                        i.document.documentElement.addEventListener(
                          "click",
                          Wh.bind(null, t),
                          !0
                        );
                      }
                      cleanup() {
                        this.Ma &&
                          (this.Pa.removeEventListener(jh, this.Ma),
                          this.Pa.removeEventListener(zh, this.Ma));
                      }
                      openWindow(t, i, s, e) {
                        let n = "";
                        (!this.bh.isIos() && this.bh.isChrome()) ||
                          e ||
                          (n += "noopener");
                        const r = Bh(t, i, s, n);
                        r && !e && (r.opener = null);
                      }
                      navigateTo(t, i, s, e = {}) {
                        const { opener: n = !1, target: r = "_top" } = e;
                        i = this.xa(i);
                        const h = ms(this.Ia);
                        if (!h.isProtocolValid(i))
                          return void Mt().error(
                            Hh,
                            "Cannot navigate to invalid protocol: " + i
                          );
                        bt(Gh.includes(r), `Target '${r}' not supported.`);
                        const o = h.getSourceUrl(t.location);
                        (i = h.resolveRelativeUrl(i, o)),
                          "_blank" != r
                            ? (s &&
                                (this.ba || (this.ba = this.Oa()),
                                this.ba.includes(s) &&
                                  this.navigateToAmpUrl(i, s))) ||
                              (t.top.location.href = i)
                            : this.openWindow(t, i, r, n);
                      }
                      navigateToAmpUrl(t, i) {
                        return (
                          !!this.Be.hasCapability("a2a") &&
                          (this.Be.sendMessage("a2aNavigate", {
                            url: t,
                            requestedBy: i,
                          }),
                          !0)
                        );
                      }
                      Oa() {
                        const t = this.Pa.querySelector(
                          'meta[name="amp-to-amp-navigation"]'
                        );
                        return t && t.hasAttribute("content")
                          ? t
                              .getAttribute("content")
                              .split(",")
                              .map((t) => t.trim())
                          : [];
                      }
                      Ra(t) {
                        if (t.defaultPrevented) return;
                        const i = Ct(
                          t.__AMP_CUSTOM_LINKER_TARGET__ || t.target,
                          "A"
                        );
                        i &&
                          i.href &&
                          (t.type == jh
                            ? this.Ca(i, t)
                            : t.type == zh && this.ka(i, t));
                      }
                      Ca(t, i) {
                        this.Na(t);
                        let s = this.Da(t.href);
                        if (this.La(i, t, s)) return;
                        if (this.Ua(i, t, s)) return;
                        const e = this.$a();
                        Kh(s) != Kh(e) &&
                          (this.Fa(t, i), (s = this.Da(t.href))),
                          this.Ba(i, t, s, e);
                      }
                      ka(t, i) {
                        this.Na(t), this.Fa(t, i);
                      }
                      Fa(t, i) {
                        this.Va.forEach((s) => {
                          s(t, i);
                        });
                      }
                      xa(t) {
                        return (
                          this.Sa.forEach((i) => {
                            t = i(t);
                          }),
                          t
                        );
                      }
                      Na(t) {
                        let i = null;
                        this.ya &&
                          !this.Ea &&
                          (i = (function (t, i) {
                            const s = Y(rn(Ls.getLocation(t).href).search),
                              e = [];
                            for (let t = 0; t < Uh.length; t++) {
                              const i = Uh[t];
                              void 0 !== s[i] && e.push(i);
                            }
                            const n = i.getAttribute("data-amp-addparams");
                            let { href: r } = i;
                            n && (r = ln(r, Y(n)));
                            const h = Y(rn(r).search);
                            for (let t = e.length - 1; t >= 0; t--)
                              void 0 !== h[e[t]] && e.splice(t, 1);
                            return (function (t) {
                              let i = "";
                              for (let s = 0; s < t.length; s++) {
                                const e = t[s];
                                i +=
                                  0 == s
                                    ? `${e}=QUERY_PARAM(${e})`
                                    : `&${e}=QUERY_PARAM(${e})`;
                              }
                              return i;
                            })(e);
                          })(this.ampdoc.win, t)),
                          fs(t).maybeExpandLink(t, i);
                      }
                      Ua(t, i, s) {
                        if (!this.Cu) return !1;
                        const e = wt(i),
                          n = i.href,
                          { protocol: r } = s;
                        if ("ftp:" == r)
                          return Bh(e, n, "_blank"), t.preventDefault(), !0;
                        const h = /^(https?|mailto):$/.test(r);
                        return !(
                          !this.va ||
                          h ||
                          (Bh(e, n, "_top"), t.preventDefault(), 0)
                        );
                      }
                      La(t, i, s) {
                        return !(
                          !i.hasAttribute("rel") ||
                          !i
                            .getAttribute("rel")
                            .split(" ")
                            .map((t) => t.trim())
                            .includes("amphtml") ||
                          !this.navigateToAmpUrl(s.href, "<a rel=amphtml>") ||
                          (t.preventDefault(), 0)
                        );
                      }
                      Ba(t, i, s, e) {
                        const n = Kh(s),
                          r = Kh(e);
                        if (s.hash && n == r) this.Ha(t, s, e);
                        else {
                          let s = (
                            i.getAttribute("target") || ""
                          ).toLowerCase();
                          (this.Ea || this.Ta) &&
                            "_top" != s &&
                            "_blank" != s &&
                            ((s = "_blank"), i.setAttribute("target", s));
                          const { win: r } = this.ampdoc,
                            h = us(r),
                            o = _s(i);
                          e.search &&
                            h.isSafari() &&
                            h.getMajorVersion() >= 13 &&
                            o.isProxyOrigin() &&
                            o.isEmbedded() &&
                            this.ja(r, e, s),
                            this.viewerInterceptsNavigation(
                              n,
                              "intercept_click"
                            ) && t.preventDefault();
                        }
                      }
                      ja(t, i, s) {
                        const e = i.href,
                          n = `${i.origin}${i.pathname}${i.hash}`;
                        t.history.replaceState(null, "", n);
                        const r = () => {
                          const i = t.location.href;
                          i == n
                            ? t.history.replaceState(null, "", e)
                            : Rt().error(
                                Hh,
                                "Unexpected iframe URL change:",
                                i,
                                n
                              );
                        };
                        "_blank" === s
                          ? t.setTimeout(r, 0)
                          : t.addEventListener("pageshow", function i(s) {
                              s.persisted &&
                                (r(), t.removeEventListener("pageshow", i));
                            });
                      }
                      Ha(t, i, s) {
                        if ((t.preventDefault(), this.Ea)) return;
                        const e = i.hash.slice(1);
                        let n = null;
                        if (e) {
                          const t = St(e);
                          n =
                            this.Pa.getElementById(e) ||
                            this.Pa.querySelector(`a[name="${t}"]`);
                        }
                        i.hash != s.hash
                          ? this.gr.replaceStateForTarget(i.hash).then(() => {
                              this.za(n, e);
                            })
                          : this.za(n, e);
                      }
                      registerAnchorMutator(t, i) {
                        this.Va.enqueue(t, i);
                      }
                      registerNavigateToMutator(t, i) {
                        this.Sa.enqueue(t, i);
                      }
                      za(t, i) {
                        t &&
                          (this.Cl.scrollIntoView(t),
                          ds(this.ampdoc.win).delay(
                            () => this.Cl.scrollIntoView(t),
                            1
                          ));
                      }
                      Da(t) {
                        return ms(this.Ia).parse(t);
                      }
                      $a() {
                        return this.Da("");
                      }
                      viewerInterceptsNavigation(t, i) {
                        const s = this.Be.hasCapability("interceptNavigation"),
                          e =
                            this.ampdoc.isSingleDoc() &&
                            this.ampdoc
                              .getRootNode()
                              .documentElement.hasAttribute(
                                "allow-navigation-interception"
                              );
                        return !(
                          !s ||
                          !e ||
                          (!this.Ju && !this.wa) ||
                          (this.Be.sendMessage("navigateTo", {
                            url: t,
                            requestedBy: i,
                          }),
                          0)
                        );
                      }
                    },
                    !0
                  );
                })(t),
                (function (t) {
                  t.whenExtensionsKnown().then(() => {
                    t.declaresExtension("amp-form") &&
                      t.getRootNode().addEventListener("submit", Do, !0);
                  });
                })(t),
                bi(
                  t,
                  "loadingIndicator",
                  class {
                    constructor(t) {
                      this.ji = t;
                      const { win: i } = t,
                        s = this.Ga.bind(this);
                      (this.qa = (function (t, i, s = {}) {
                        const {
                            needsRootBounds: e,
                            rootMargin: n,
                            threshold: r,
                          } = s,
                          h = qt(i) && (e || n) ? i.document : void 0;
                        return new i.IntersectionObserver(t, {
                          threshold: r,
                          root: h,
                          rootMargin: n,
                        });
                      })((t) => t.forEach(s), i)),
                        (this.Po = new WeakMap());
                    }
                    dispose() {
                      this.qa.disconnect();
                    }
                    track(t) {
                      this.qa.observe(t);
                    }
                    untrack(t) {
                      this.qa.unobserve(t), this.Qt(t);
                    }
                    Ga(t) {
                      const {
                          boundingClientRect: i,
                          isIntersecting: s,
                          target: e,
                        } = t,
                        { height: n, width: r } = i,
                        h = e,
                        o = s && r > 20 && n > 20;
                      let u = this.Po.get(h);
                      o !== ((u && u.shown) || !1) &&
                        (o && !u && ((u = this.Wa(h, r, n)), this.Po.set(h, u)),
                        u &&
                          ((u.shown = o),
                          u.container.classList.toggle("amp-hidden", !o),
                          u.loader.classList.toggle("amp-active", o)));
                    }
                    Wa(t, i, s) {
                      const e = Date.now(),
                        n = (function (t, i, s, e, n = t.win.Date.now()) {
                          const r = i.ownerDocument.createElement("div");
                          return (
                            (function (t, i) {
                              return ns(t.win)
                                .installExtensionForDoc(t, "amp-loader")
                                .then(() =>
                                  ((t) => Gi(t, "loader", "amp-loader"))(i)
                                );
                            })(t, i).then((h) => {
                              const o = t.win.Date.now() - n;
                              h.initializeLoader(i, r, o, s, e);
                            }),
                            r
                          );
                        })(this.ji, t, i, s, e),
                        r = be(this.ji.win.document)(Nh);
                      return (
                        r.appendChild(n),
                        t.appendChild(r),
                        { shown: !1, loader: n, container: r }
                      );
                    }
                    Qt(t) {
                      const i = this.Po.get(t);
                      i && (this.Po.delete(t), Bt(i.container));
                    }
                  }
                );
            })(t);
        }
        function Ho(t) {
          return t.waitForBodyOpen().then(() => {
            const i = t.getBody(),
              s =
                ((e = i),
                (n = () => !!i.firstElementChild),
                new Promise((t) => {
                  Ut(e, n, t);
                }));
            var e, n;
            return ds(t.win)
              .timeoutPromise(2e3, s)
              .then(
                () => "AMP-STORY" === i.firstElementChild.tagName,
                () => !1
              );
          });
        }
        var jo = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
        function zo(t) {
          if (null == t) return 0;
          const i = (function (t) {
              let i = t;
              for (; null != (t = t.parentNode); )
                t.nodeName.startsWith("AMP-") && (i = t);
              return i;
            })(t),
            { nodeName: s } = i;
          return "IMG" === s || "AMP-IMG" === s
            ? 1
            : "VIDEO" === s || "AMP-VIDEO" === s
            ? 2
            : "AMP-CAROUSEL" === s
            ? 8
            : "AMP-BASE-CAROUSEL" === s
            ? 16
            : "AMP-AD" === s
            ? 4
            : !s.startsWith("AMP-") && i.textContent
            ? 32
            : 0;
        }
        function Go(t) {
          const i = t.document;
          if (!i.fonts || !i.fonts.values) return;
          const s = i.fonts.values();
          let e;
          for (; (e = s.next()); ) {
            const t = e.value;
            if (!t) return;
            "loading" == t.status &&
              "display" in t &&
              "auto" == t.display &&
              (t.display = "swap");
          }
        }
        var qo = ["amp-ad", "amp-embed", "amp-video"],
          Wo = "extensions",
          Ko = "latest",
          Yo = "__AMP_EXT_LDR";
        function Qo(t) {
          qo.forEach((i) => {
            dr(t, i);
          });
        }
        function Jo() {
          return {};
        }
        function Xo(t, i) {
          return `${t}:${i}`;
        }
        var Zo,
          tu = "-shadowcsshost",
          iu = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
        new RegExp("(" + tu + iu, "gim"),
          new RegExp("(-shadowcsscontext" + iu, "gim"),
          new RegExp(tu, "gim"),
          new RegExp("-shadowcsscontext", "gim"),
          (Et = class {
            constructor(t, i, s = "") {
              (this.win = t),
                (this.$ = i),
                (this.U = this.j()),
                (this.C = s),
                (this.L = null),
                (this.N = (function (t) {
                  let i = !1,
                    s = null,
                    e = t;
                  return (...t) => (
                    i || ((s = e.apply(self, t)), (i = !0), (e = null)), s
                  );
                })(() => {
                  t.fetch(`${et}/rtv/012301261900000/log-messages.simple.json`)
                    .then((t) => t.json(), pt)
                    .then((t) => {
                      t && (this.L = t);
                    });
                })),
                (this.F = this.assert.bind(this));
            }
            j() {
              var t;
              const { win: i } = this;
              return null !== (t = i.console) &&
                void 0 !== t &&
                t.log &&
                0 != gt(i)
                ? this.J()
                : 0;
            }
            J(t) {
              return this.$(gt(t), !1);
            }
            B(t, i, s) {
              var e, n;
              if (i > (null !== (e = mt) && void 0 !== e ? e : this.U))
                return !1;
              const r = this.win.console,
                h =
                  null !== (n = { 1: r.error, 3: r.info, 2: r.warn }[i]) &&
                  void 0 !== n
                    ? n
                    : r.log,
                o = this.W(s),
                u = `[${t}]`;
              return (
                y(o[0]) ? (o[0] = u + " " + o[0]) : o.unshift(u),
                h.apply(r, o),
                !0
              );
            }
            fine(t, ...i) {
              this.B(t, 4, i);
            }
            info(t, ...i) {
              this.B(t, 3, i);
            }
            warn(t, ...i) {
              this.B(t, 2, i);
            }
            error(t, ...i) {
              if (!this.B(t, 1, i)) {
                var s, e;
                const n = this.createError.apply(this, i);
                (n.name = t || n.name),
                  null === (s = (e = self).__AMP_REPORT_ERROR) ||
                    void 0 === s ||
                    s.call(e, n);
              }
            }
            expectedError(t, ...i) {
              var s, e;
              this.B(t, 1, i) ||
                null === (s = (e = self).__AMP_REPORT_ERROR) ||
                void 0 === s ||
                s.call(e, this.createExpectedError.apply(this, i));
            }
            createError(t) {
              return this.Z(o.apply(null, arguments));
            }
            createExpectedError(t) {
              return this.Z(c.apply(null, arguments));
            }
            Z(t) {
              return (
                (t = h(t)),
                this.C
                  ? t.message
                    ? -1 == t.message.indexOf(this.C) && (t.message += this.C)
                    : (t.message = this.C)
                  : O(t.message) && (t.message = C(t.message)),
                t
              );
            }
            W(t) {
              return v(t[0]) ? this.X(t[0]) : t;
            }
            X(t) {
              var i;
              const s = t.shift();
              return null !== (i = this.L) && void 0 !== i && i[s]
                ? [this.L[s]].concat(t)
                : [`More info at ${At(s, t)}`];
            }
            assert(t, i, s) {
              return v(i)
                ? this.assert.apply(this, [t].concat(this.X(i)))
                : k.apply(
                    null,
                    [this.C].concat(Array.prototype.slice.call(arguments))
                  );
            }
            assertElement(t, i) {
              return (function (t, i, s) {
                return N(t, i, b(i), "Element expected", s);
              })(this.F, t, i);
            }
            assertString(t, i) {
              return (function (t, i, s) {
                return N(t, i, y(i), "String expected", s);
              })(this.F, t, i);
            }
            assertNumber(t, i) {
              return (function (t, i, s) {
                return N(t, i, "number" == typeof i, "Number expected", s);
              })(this.F, t, i);
            }
            assertArray(t, i) {
              return (function (t, i, s) {
                return N(t, i, v(i), "Array expected", s);
              })(this.F, t, i);
            }
            assertBoolean(t, i) {
              return (function (t, i, s) {
                return N(t, i, !!i === i, "Boolean expected", s);
              })(this.F, t, i);
            }
          }),
          Rt(),
          Mt(),
          (Zo = function (t, i, s) {
            bn(i, s),
              i &&
                t &&
                O(i.message) &&
                !(i.message.indexOf(S) >= 0) &&
                (function (t, i) {
                  if (Zi(i).isSingleDoc()) {
                    const s = { errorName: t.name, errorMessage: t.message };
                    !(function (t, i, s = {}, e = !0) {
                      var n;
                      ((n = t),
                      qi(
                        n,
                        "amp-analytics-instrumentation",
                        "amp-analytics"
                      )).then((n) => {
                        n && n.triggerEventForTarget(t, i, s, e);
                      });
                    })(
                      (function (t) {
                        const i = Zi(t).getSingleDoc().getRootNode();
                        return i.documentElement || i.body || i;
                      })(i),
                      "user-error",
                      s,
                      !1
                    );
                  }
                })(i, t);
          }.bind(null, self)),
          (self.__AMP_REPORT_ERROR = Zo);
        var su,
          eu = "runtime";
        function nu(t, i) {
          if (t.__AMP_TAG) return e();
          t.__AMP_TAG = !0;
          const s = t.AMP || [];
          yi(
            t,
            "extensions",
            class {
              constructor(t) {
                (this.win = t),
                  (this.po = Zi(t)),
                  (this.Ja = {}),
                  (this.Qa = null),
                  (this.Xa = null),
                  (this.Za = null);
              }
              registerExtension(t, i, s, e, n) {
                var r;
                const h = s ? this.Ja[Xo(t, Ko)] : null,
                  o = this.td(
                    t,
                    i,
                    null === (r = null == h ? void 0 : h.auto) ||
                      void 0 === r ||
                      r
                  );
                if (((o.latest = s), !o.loaded)) {
                  s && (this.Ja[Xo(t, Ko)] = o);
                  try {
                    var u, l;
                    (this.Qa = t),
                      (this.Xa = i),
                      (this.Za = s),
                      e(n, n._),
                      (o.loaded = !0),
                      null === (u = o.resolve) ||
                        void 0 === u ||
                        u.call(o, o.extension),
                      null == h ||
                        null === (l = h.resolve) ||
                        void 0 === l ||
                        l.call(h, o.extension);
                  } catch (t) {
                    var c, a;
                    throw (
                      ((o.error = t),
                      null === (c = o.reject) || void 0 === c || c.call(o, t),
                      null == h ||
                        null === (a = h.reject) ||
                        void 0 === a ||
                        a.call(h, t),
                      t)
                    );
                  } finally {
                    (this.Qa = null), (this.Xa = null), (this.Za = null);
                  }
                }
              }
              waitForExtension(t, i) {
                const s = this.sd(this.td(t, i));
                return ds(this.win)
                  .timeoutPromise(16e3, s)
                  .catch((i) => {
                    if (!i.message.includes("timeout")) throw i;
                    return (
                      Mt().error(Wo, `Waited over 16s to load extension ${t}.`),
                      s
                    );
                  });
              }
              preloadExtension(t, i = "0.1") {
                "amp-embed" == t && (t = "amp-ad");
                const s = this.td(t, i);
                return this.ed(t, i, s), this.sd(s);
              }
              installExtensionForDoc(t, i, s = "0.1") {
                const e = t.getRootNode();
                let n = e[Yo];
                return (
                  n || (n = e[Yo] = p()),
                  n[i]
                    ? n[i]
                    : (t.declareExtension(i, s),
                      dr(t.win, i),
                      (n[i] = this.preloadExtension(i, s).then(() =>
                        this.installExtensionInDoc(t, i, s)
                      )))
                );
              }
              reloadExtension(t, i, s) {
                const e = Ii(this.win, t, i, s, !1),
                  n = this.Ja[Xo(t, i)];
                return (
                  n && (yt(!n.loaded && !n.error), (n.scriptPresent = !1)),
                  e.forEach((i) =>
                    i.setAttribute("i-amphtml-loaded-new-version", t)
                  ),
                  this.preloadExtension(t, i)
                );
              }
              importUnwrapped(t, i, s = "0.1", e = !0) {
                const n = Ii(t, i, s, e);
                let r,
                  h = n.length > 0 ? n[0] : null;
                return (
                  h
                    ? (r = h.__AMP_SCR_LOADED)
                    : ((h = Mi(this.win, i, s)),
                      (r = h.__AMP_SCR_LOADED =
                        new Promise((t, i) => {
                          (h.onload = t), (h.onerror = i);
                        })),
                      t.document.head.appendChild(h)),
                  r
                );
              }
              loadElementClass(t, i = "0.1") {
                return this.preloadExtension(t, i).then(
                  (i) => yt(i.elements[t]).implementationClass
                );
              }
              addElement(t, i, s) {
                (this.nd(t).extension.elements[t] = {
                  implementationClass: i,
                  css: s,
                }),
                  this.addDocFactory((e) => {
                    this.rd(e, t, i, s);
                  });
              }
              addTemplate(t, i) {
                this.addDocFactory((s) => {
                  !(function (t, i, s) {
                    Vi(t, "templates").du(i, s);
                  })(s, t, i);
                });
              }
              rd(t, i, s, e) {
                e
                  ? (function (t, i, s, e, n) {
                      const r = t.getHeadNode(),
                        h = (function (t, i, s, e) {
                          let n = t.__AMP_CSS_SM;
                          n || (n = t.__AMP_CSS_SM = p());
                          const r =
                              e && "amp-custom" != e && "amp-keyframes" != e,
                            h = r ? `amp-extension=${e}` : null;
                          if (h) {
                            const s = Ye(t, n, h);
                            if (s)
                              return (
                                "STYLE" == s.tagName &&
                                  s.textContent !== i &&
                                  (s.textContent = i),
                                s
                              );
                          }
                          const o = (t.ownerDocument || t).createElement(
                            "style"
                          );
                          o.textContent = i;
                          let u = null;
                          return (
                            r
                              ? (o.setAttribute("amp-extension", e || ""),
                                (u = Ye(t, n, "amp-runtime")))
                              : (e && o.setAttribute(e, ""), (u = t.lastChild)),
                            (function (t, i, s = null) {
                              if (!s)
                                return void (function (t, i) {
                                  t.insertBefore(i, t.firstChild);
                                })(t, i);
                              const e = s.nextSibling;
                              t.insertBefore(i, e);
                            })(t, o, u),
                            h && (n[h] = o),
                            o
                          );
                        })(
                          r,
                          (function (t, i) {
                            const s = t.__AMP_CSS_TR;
                            return s ? s(i) : i;
                          })(r, i),
                          0,
                          n || null
                        );
                      if (s) {
                        const i = t.getRootNode();
                        if (Ze(i, h)) return s(), h;
                        const e = setInterval(() => {
                          Ze(i, h) && (clearInterval(e), s());
                        }, 4);
                      }
                    })(
                      t,
                      e,
                      () => {
                        this.hd(t.win, i, s);
                      },
                      0,
                      i
                    )
                  : this.hd(t.win, i, s);
              }
              hd(t, i, s) {
                (function (t, i, s) {
                  const e = (function (t, i) {
                    if (
                      i.requiresShadowDom() &&
                      !t.Element.prototype.attachShadow
                    )
                      return ns(t).importUnwrapped(
                        t,
                        "amp-shadow-dom-polyfill"
                      );
                  })(t, s);
                  e ? e.then(() => lr(t, i, s)) : lr(t, i, s);
                })(t, i, s),
                  yi(t, i, Jo);
              }
              addService(t, i) {
                this.nd(t).extension.services.push({
                  serviceName: t,
                  serviceClass: i,
                }),
                  this.addDocFactory((s) => {
                    bi(s, t, i, !0);
                  });
              }
              addDocFactory(t, i) {
                const s = this.nd(i);
                if (
                  (s.docFactories.push(t), this.Qa && this.po.isSingleDoc())
                ) {
                  const i = this.po.getAmpDoc(this.win.document),
                    e = this.Qa,
                    n = this.Xa,
                    r = this.Za || !1;
                  (i.declaresExtension(e, n) ||
                    (r && i.declaresExtension(e, Ko)) ||
                    s.auto) &&
                    t(i);
                }
              }
              preinstallEmbed(t, i) {
                const s = this.win,
                  e = t.win;
                !(function (t, i) {
                  fr(t, i, "amp-img"), fr(t, i, "amp-pixel");
                })(s, e),
                  Qo(e),
                  i.forEach(({ extensionId: i, extensionVersion: s }) => {
                    t.declareExtension(i, s), qo.includes(i) || dr(e, i);
                  });
              }
              installExtensionsInDoc(t, i) {
                return Promise.all(
                  i.map(({ extensionId: i, extensionVersion: s }) =>
                    this.installExtensionInDoc(t, i, s)
                  )
                );
              }
              installExtensionInDoc(t, i, s = "0.1") {
                return (
                  t.declareExtension(i, s),
                  this.sd(this.td(i, s)).then(() => {
                    this.td(i, s).docFactories.forEach((s) => {
                      try {
                        s(t);
                      } catch (t) {
                        l("Doc factory failed: ", t, i);
                      }
                    });
                  })
                );
              }
              td(t, i, s) {
                const e = Xo(t, i);
                let n = this.Ja[e];
                return (
                  n ||
                    ((n = {
                      version: i,
                      latest: i == Ko,
                      extension: { elements: {}, services: [] },
                      auto: s || !1,
                      docFactories: [],
                      promise: void 0,
                      resolve: void 0,
                      reject: void 0,
                      loaded: void 0,
                      error: void 0,
                      scriptPresent: void 0,
                    }),
                    (this.Ja[e] = n)),
                  n
                );
              }
              nd(t) {
                return (
                  this.Qa || Rt().error(Wo, "unknown extension for ", t),
                  this.td(this.Qa || "_UNKNOWN_", this.Xa || "")
                );
              }
              sd(t) {
                if (!t.promise)
                  if (t.loaded) t.promise = Promise.resolve(t.extension);
                  else if (t.error) t.promise = Promise.reject(t.error);
                  else {
                    const i = new n();
                    (t.promise = i.promise),
                      (t.resolve = i.resolve),
                      (t.reject = i.reject);
                  }
                return t.promise;
              }
              ed(t, i, s) {
                if (this.od(t, i, s)) {
                  const e = Mi(this.win, t, i);
                  this.win.document.head.appendChild(e), (s.scriptPresent = !0);
                }
              }
              od(t, i, s) {
                if (s.loaded || s.error) return !1;
                if (void 0 === s.scriptPresent) {
                  const e = Ii(this.win, t, i, s.latest);
                  s.scriptPresent = e.length > 0;
                }
                return !s.scriptPresent;
              }
            }
          );
          const r = ns(t);
          Fo(t),
            Qo(t),
            (t.AMP = { win: t, _: t.AMP ? t.AMP._ : void 0 }),
            (t.AMP.config = {
              urls: {
                thirdParty: tt,
                thirdPartyFrameHost: it,
                thirdPartyFrameRegex: st,
                cdn: et,
                cdnProxyRegex: X,
                localhostRegex: nt,
                errorReporting: rt,
                betaErrorReporting: ht,
                localDev: ot,
                trustedViewerHosts: ut,
                geoApi: lt,
              },
            }),
            (t.AMP.addGlobalConsentListener = function () {}),
            (t.AMP.addGranularConsentListener = function () {}),
            (t.AMP.BaseElement = Kn),
            (t.AMP.registerElement = r.addElement.bind(r)),
            (t.AMP.registerTemplate = r.addTemplate.bind(r)),
            (t.AMP.registerServiceForDoc = r.addService.bind(r)),
            (t.AMP.isExperimentOn = Ne.bind(null, t)),
            (t.AMP.toggleExperiment = De.bind(null, t)),
            (t.AMP.setLogLevel = _t.bind(null)),
            (t.AMP.setTickFunction = (t, i) => {});
          const h = i(t, r);
          function o(i) {
            !(function (t, i, s) {
              "function" == typeof i || "high" == i.p
                ? e().then(s)
                : ((s.displayName = i.n), Bn(t.document, s));
            })(t, i, () => {
              h.then(() => {
                "function" == typeof i
                  ? i(t.AMP, t.AMP.ud)
                  : r.registerExtension(i.n, i.ev, i.l, i.f, t.AMP);
              });
            });
          }
          for (let i = 0; i < s.length; i++) {
            const e = s[i];
            if (ru(t, e)) s.splice(i--, 1);
            else if ("function" == typeof e || "high" == e.p) {
              try {
                o(e);
              } catch (t) {
                Rt().error(eu, "Extension failed: ", t, e.n);
              }
              s.splice(i--, 1);
            }
          }
          !(function (t, i) {
            t.document.body &&
            !(function (t) {
              return Ke(t).length > 0;
            })(t)
              ? ds(t).delay(i, 1)
              : i();
          })(t, () => {
            t.AMP.push = function (i) {
              ru(t, i) || o(i);
            };
            for (let i = 0; i < s.length; i++) {
              const e = s[i];
              if (!ru(t, e))
                try {
                  o(e);
                } catch (t) {
                  Rt().error(eu, "Extension failed: ", t, e.n);
                }
            }
            s.length = 0;
          }),
            t.AMP.push || (t.AMP.push = s.push.bind(s)),
            us(t).isIos() &&
              ws(t.document.documentElement, "cursor", "pointer");
          const u = ns(t);
          return (
            ei(t) && u.preloadExtension("amp-resize-observer-polyfill"),
            ti(t) && u.preloadExtension("amp-intersection-observer-polyfill"),
            h
          );
        }
        function ru(t, i) {
          if ("function" == typeof i) return !1;
          if (!i.m) return !0;
          const { v: s } = i;
          return (
            "2301261900000" != s && (ns(t).reloadExtension(i.n, i.ev, i.l), !0)
          );
        }
        function hu(t, i) {
          Bn(self.document, function () {
            Fo(self),
              Bo(t),
              i.coreServicesAvailable(),
              (function (t) {
                const i = new n(),
                  { promise: s, resolve: r } = i;
                Lh = ds(t)
                  .timeoutPromise(8e3, s, "TrackImpressionPromise timeout")
                  .catch((t) => {});
                const h = _s(t.document.documentElement),
                  o = h.isTrustedViewer(),
                  u = h.getReferrerUrl().then((t) =>
                    (function (t) {
                      const i = rn(t);
                      return (
                        "https:" == i.protocol &&
                        $h.some((t) => t.test(i.hostname))
                      );
                    })(t)
                  );
                Promise.all([o, u]).then((i) => {
                  const s = i[0],
                    n = i[1];
                  if (!s && !n && !Ne(t, "alp")) return void r();
                  const h = (function (t) {
                      const i = _s(t.document.documentElement);
                      return i.getParam("replaceUrl")
                        ? i.hasCapability("replaceUrl")
                          ? i
                              .sendMessageAwaitResponse("getReplaceUrl", void 0)
                              .then(
                                (t) => {
                                  t &&
                                    "object" == typeof t &&
                                    i.replaceUrl(t.replaceUrl || null);
                                },
                                (t) => {}
                              )
                          : (i.replaceUrl(i.getParam("replaceUrl") || null),
                            e())
                        : e();
                    })(t),
                    o = (function (t) {
                      const i = Xi(t.document.documentElement),
                        s = _s(i).getParam("click");
                      return s
                        ? 0 != s.indexOf("https://")
                          ? e()
                          : (Ls.getLocation(t).hash &&
                              (Ls.getLocation(t).hash = ""),
                            i
                              .whenFirstVisible()
                              .then(() =>
                                (function (t, i) {
                                  return gs(t)
                                    .fetchJson(i, { credentials: "include" })
                                    .then((t) =>
                                      204 == t.status ? null : t.json()
                                    );
                                })(t, s)
                              )
                              .then((i) => {
                                !(function (t, i) {
                                  if (!i) return;
                                  const s = i.location,
                                    e = i.tracking_url || s;
                                  if (
                                    (e && !pn(e) && (new Image().src = e), s)
                                  ) {
                                    if (!t.history.replaceState) return;
                                    const i = _s(t.document.documentElement),
                                      e = ln(
                                        Ls.getLocation(t).href,
                                        Y(rn(s).search)
                                      );
                                    t.history.replaceState(null, "", e),
                                      i.maybeUpdateFragmentForCct();
                                  }
                                })(t, i);
                              })
                              .catch((t) => {}))
                        : e();
                    })(t);
                  Promise.all([h, o]).then(
                    () => {
                      r();
                    },
                    () => {}
                  );
                });
              })(self);
          }),
            Bn(self.document, function () {
              nu(
                self,
                (t) => (
                  (function (t) {
                    const { documentElement: i } = t.document,
                      s = Zi(t).getSingleDoc();
                    t.AMP.ampdoc = s;
                    const e = _s(i);
                    t.AMP.viewer = e;
                    const n = Ps(i);
                    (t.AMP.viewport = {}),
                      (t.AMP.viewport.getScrollLeft = n.getScrollLeft.bind(n)),
                      (t.AMP.viewport.getScrollWidth =
                        n.getScrollWidth.bind(n)),
                      (t.AMP.viewport.getWidth = n.getWidth.bind(n));
                  })(t),
                  (function (t) {
                    t.AMP.installAmpdocServices = Bo.bind(null);
                    {
                      const i = t.document.querySelector("style[amp-runtime]");
                      t.AMP.combinedCss = i ? i.textContent : "";
                    }
                  })(t),
                  Ft(t.document).then(() => {
                    ar(t.AMP.ampdoc);
                  })
                )
              );
            }),
            Bn(self.document, function () {
              !(function (t) {
                !(function (t) {
                  pr(t, _r, Pr);
                })(t),
                  (function (t) {
                    pr(t, Er, Tr);
                  })(t),
                  (function (t) {
                    pr(t, "amp-layout", gr);
                  })(t);
              })(self);
            }),
            Bn(self.document, function () {
              ar(t), vi(self.document).then(() => hr());
            }),
            Bn(
              self.document,
              function () {
                (function (t) {
                  const { documentElement: i } = t.document;
                  "0" == _s(i).getParam("p2r") &&
                    us(t).isChrome() &&
                    new (class {
                      constructor(t, i) {
                        (this.Ff = t),
                          (this.Cl = i),
                          (this.t_ = !1),
                          (this.i_ = 0),
                          (this.s_ = this.sm.bind(this)),
                          (this.e_ = this.nm.bind(this)),
                          (this.n_ = this.rm.bind(this)),
                          (this.r_ = this.h_.bind(this)),
                          this.Ff.addEventListener("touchstart", this.s_, !0);
                      }
                      cleanup() {
                        this.o_(),
                          this.Ff.removeEventListener(
                            "touchstart",
                            this.s_,
                            !0
                          );
                      }
                      sm(t) {
                        this.t_ ||
                          !t.touches ||
                          1 != t.touches.length ||
                          this.Cl.getScrollTop() > 0 ||
                          this.u_(t.touches[0].clientY);
                      }
                      u_(t) {
                        (this.t_ = !0),
                          (this.i_ = t),
                          this.Ff.addEventListener("touchmove", this.e_, !0),
                          this.Ff.addEventListener("touchend", this.n_, !0),
                          this.Ff.addEventListener("touchcancel", this.r_, !0);
                      }
                      o_() {
                        (this.t_ = !1),
                          (this.i_ = 0),
                          this.Ff.removeEventListener("touchmove", this.e_, !0),
                          this.Ff.removeEventListener("touchend", this.n_, !0),
                          this.Ff.removeEventListener(
                            "touchcancel",
                            this.r_,
                            !0
                          );
                      }
                      nm(t) {
                        if (!this.t_) return;
                        const i = t.touches[0].clientY - this.i_;
                        i > 0 && t.preventDefault(), 0 != i && this.o_();
                      }
                      rm(t) {
                        this.o_();
                      }
                      h_(t) {
                        this.o_();
                      }
                    })(t.document, Ps(i));
                })(self),
                  (function (t) {
                    const { win: i } = t;
                    yr(i.document) &&
                      t.isSingleDoc() &&
                      !i.document.documentElement.hasAttribute(
                        "data-amp-auto-lightbox-disable"
                      ) &&
                      Hn(
                        t,
                        () => {
                          Ho(t).then((s) => {
                            s ||
                              ns(i).installExtensionForDoc(
                                t,
                                "amp-auto-lightbox"
                              );
                          });
                        },
                        10
                      );
                  })(t),
                  (function (t) {
                    const { win: i } = t;
                    yr(i.document) &&
                      us(t.win).isStandalone() &&
                      Hn(
                        t,
                        () => {
                          ns(i)
                            .installExtensionForDoc(t, "amp-standalone")
                            .then(() =>
                              Gi(t.getBody(), "standalone", "amp-standalone")
                            )
                            .then((t) => t.initialize());
                        },
                        10
                      );
                  })(t),
                  (function (t) {
                    const i = t.location.href;
                    if (i.startsWith("about:")) return;
                    let s = !1;
                    const e = Q(t);
                    ft(t, e) && (s = "0" !== e.validate),
                      s &&
                        (function (t, i) {
                          const s = t.createElement("script");
                          (s.src = i), Qt(t, s);
                          const e = Ge(s).then(
                            () => {
                              t.head.removeChild(s);
                            },
                            () => {}
                          );
                          return t.head.appendChild(s), e;
                        })(t.document, `${et}/v0/validator_wasm.js`).then(
                          () => {
                            amp.validator.validateUrlAndLog(i, t.document);
                          }
                        );
                  })(self),
                  (function (t) {
                    yt(t.defaultView);
                    const i = t.defaultView;
                    Ft(t)
                      .then(() =>
                        (function (t) {
                          const i = Ke(t).map((i) => {
                            const s = (function (t, i) {
                              return $i(t, i);
                            })(t, i).then((t) =>
                              t &&
                              (function (t) {
                                return "function" == typeof t.whenReady;
                              })(t)
                                ? t.whenReady().then(() => t)
                                : t
                            );
                            return ds(t).timeoutPromise(
                              3e3,
                              s,
                              `Render timeout waiting for service ${i} to be ready.`
                            );
                          });
                          return Promise.all(i);
                        })(i)
                      )
                      .catch((t) => (l(t), []))
                      .then((s) => {
                        (Qe = !0),
                          t.body.getBoundingClientRect(),
                          Xe(t),
                          Ni(t).signals().signal(Ee),
                          s.length > 0 &&
                            cs(t.documentElement).schedulePass(1, !0);
                        try {
                          const t = os(i);
                          t.tick("mbv"), t.flush();
                        } catch (t) {}
                      });
                  })(self.document),
                  (function (t) {
                    vi(t).then(() => {
                      const i = t.defaultView;
                      if (i) {
                        const s = ls(i),
                          e = es(t.documentElement),
                          n = Xi(t);
                        s.url(n, e.sourceUrl), s.url(n, e.canonicalUrl);
                      }
                    });
                  })(self.document);
              },
              !0
            ),
            Bn(self.document, function () {
              i.tick("e_is"), cs(t).ampInitComplete(), i.flush();
            });
        }
        self.location && (self.location.originalHash = self.location.hash);
        try {
          !(function (t) {
            (t.onerror = Sn),
              t.addEventListener("unhandledrejection", (t) => {
                !t.reason ||
                (t.reason.message !== Mn &&
                  t.reason.message !== In &&
                  "AbortError" !== t.reason.message)
                  ? bn(t.reason || new Error("rejected promise " + t))
                  : t.preventDefault();
              });
          })(self),
            (function (t, i, s) {
              yi(t, "ampdoc", function () {
                return new (class {
                  constructor(t, i, s) {
                    (this.win = t),
                      (this.Ka = null),
                      i &&
                        ((this.Ka = new zs(t, { params: Ws(t, s) })),
                        (t.document.__AMPDOC = this.Ka));
                  }
                  isSingleDoc() {
                    return !!this.Ka;
                  }
                  getSingleDoc() {
                    return yt(this.Ka);
                  }
                  Ya(t) {
                    return t.everAttached && "function" == typeof t.getAmpDoc
                      ? t.getAmpDoc()
                      : null;
                  }
                  getAmpDocIfAvailable(t) {
                    let i = t;
                    for (; i; ) {
                      const s = this.Ya(t);
                      if (s) return s;
                      const e = jt(i);
                      if (!e) break;
                      const n = e.__AMPDOC;
                      if (n) return n;
                      i = e.host ? e.host : ki(e, this.win);
                    }
                    return null;
                  }
                  getAmpDoc(t) {
                    const i = this.getAmpDocIfAvailable(t);
                    if (!i) throw Rt().createError("No ampdoc found for", t);
                    return i;
                  }
                  installShadowDoc(t, i, s) {
                    yt(!i.__AMPDOC);
                    const e = new Gs(this.win, t, i, s);
                    return (i.__AMPDOC = e), e;
                  }
                  installFieDoc(t, i, s) {
                    const e = i.document;
                    yt(!e.__AMPDOC);
                    const n = yt(i.frameElement),
                      r = new qs(i, t, this.getAmpDoc(n), s);
                    return (e.__AMPDOC = r), r;
                  }
                })(t, !0, void 0);
              });
            })(self),
            (su = Zi(self));
        } catch (t) {
          throw (Je(self.document), t);
        }
        Bn(self.document, function () {
          const t = su.getAmpDoc(self.document);
          Qh(self),
            yi(
              self,
              "performance",
              class {
                constructor(t) {
                  (this.win = t),
                    (this.yg = ih(j(t, 16))),
                    (this.Pg = []),
                    (this.bg =
                      t.performance.timeOrigin ||
                      t.performance.timing.navigationStart),
                    (this.ji = null),
                    (this.Be = null),
                    (this.Ei = null),
                    (this.Ig = null),
                    (this.wg = !1),
                    (this.Eg = !1),
                    (this.Tg = p()),
                    (this.Sg = void 0),
                    (this.Mg = new Ts()),
                    (this.Rg = 0),
                    (this.xg = []),
                    (this.kg = 0);
                  const i =
                    (this.win.PerformanceObserver &&
                      this.win.PerformanceObserver.supportedEntryTypes) ||
                    [];
                  if (
                    (i.includes("paint") ||
                      this.Mg.rejectSignal(
                        "fcp",
                        Rt().createExpectedError(
                          "First Contentful Paint not supported"
                        )
                      ),
                    (this.jg = i.includes("layout-shift")),
                    !this.jg)
                  ) {
                    const t = Rt().createExpectedError(
                      "Cumulative Layout Shift not supported"
                    );
                    this.Mg.rejectSignal(hi, t), this.Mg.rejectSignal(ui, t);
                  }
                  (this.Vg = i.includes("first-input")),
                    this.Vg ||
                      this.Mg.rejectSignal(
                        "fid",
                        Rt().createExpectedError(
                          "First Input Delay not supported"
                        )
                      ),
                    (this.Og = i.includes("largest-contentful-paint")),
                    this.Og ||
                      this.Mg.rejectSignal(
                        "lcp",
                        Rt().createExpectedError(
                          "Largest Contentful Paint not supported"
                        )
                      ),
                    (this.Cg = i.includes("navigation")),
                    (this.Ng = this.Ng.bind(this)),
                    this.addEnabledExperiment("rtv-" + at(this.win).rtvVersion),
                    gi(t.document).then(() => {
                      this.tick("dr"), this.flush();
                    }),
                    vi(t.document).then(() => this.Lg()),
                    this.Dg(),
                    (this.zg = !1),
                    (this.Ug = G(
                      t,
                      () => {
                        this.Fg();
                      },
                      6e3
                    ));
                }
                coreServicesAvailable() {
                  const { documentElement: t } = this.win.document;
                  (this.ji = Xi(t)),
                    (this.Be = _s(t)),
                    (this.Ei = cs(t)),
                    (this.Ig = es(this.ji)),
                    (this.Eg =
                      this.Be.isEmbedded() && "1" === this.Be.getParam("csi")),
                    this.ji.onVisibilityChanged(this.flush.bind(this)),
                    this.Hg();
                  const i = this.Be.whenMessagingReady();
                  return (
                    this.ji.whenFirstVisible().then(() => {
                      this.tick("ofv"), this.flush();
                    }),
                    (this.Og || this.jg) &&
                      this.ji.onVisibilityChanged(this.Ng),
                    i
                      ? i
                          .then(() => {
                            this.tickDelta("msr", this.win.performance.now()),
                              this.tick("timeOrigin", void 0, this.bg);
                            const t = this.ji.getMetaByName("amp-usqp");
                            return (
                              t &&
                                t.split(",").forEach((t) => {
                                  this.addEnabledExperiment("ssr-" + t);
                                }),
                              this.$g()
                            );
                          })
                          .then(() => {
                            (this.wg = !0), this.Bg(), this.flush();
                          })
                      : e()
                  );
                }
                $g() {
                  return Ho(Zi(this.win).getSingleDoc()).then((t) => {
                    t && this.addEnabledExperiment("story");
                  });
                }
                Lg() {
                  this.tick("ol"), this.flush();
                }
                Dg() {
                  if ("inabox" === at(this.win).runtime) return;
                  let t = !1,
                    i = !1,
                    s = !1,
                    e = !1;
                  const n = (n) => {
                      if ("first-paint" != n.name || t)
                        if ("first-contentful-paint" != n.name || i)
                          if ("first-input" !== n.entryType || s)
                            "layout-shift" === n.entryType
                              ? n.hadRecentInput ||
                                (this.Gg(n), (this.kg += n.value))
                              : "largest-contentful-paint" === n.entryType
                              ? this.qg(n)
                              : "navigation" != n.entryType ||
                                e ||
                                ([
                                  "domComplete",
                                  "domContentLoadedEventEnd",
                                  "domContentLoadedEventStart",
                                  "domInteractive",
                                  "loadEventEnd",
                                  "loadEventStart",
                                  "requestStart",
                                  "responseStart",
                                ].forEach((t) => this.tick(t, n[t])),
                                (e = !0));
                          else {
                            const t = n.processingStart - n.startTime;
                            this.tickDelta("fid", t), (s = !0);
                          }
                        else {
                          const t = n.startTime + n.duration;
                          this.tickDelta("fcp", t),
                            this.tickSinceVisible("fcpv", t),
                            (i = !0);
                        }
                      else
                        this.tickDelta("fp", n.startTime + n.duration),
                          (t = !0);
                    },
                    r = [];
                  this.win.PerformancePaintTiming &&
                    (this.win.performance.getEntriesByType("paint").forEach(n),
                    r.push("paint")),
                    this.Vg &&
                      this.Wg(n, { type: "first-input", buffered: !0 }),
                    this.jg &&
                      this.Wg(n, { type: "layout-shift", buffered: !0 }),
                    this.Og &&
                      this.Wg(n, {
                        type: "largest-contentful-paint",
                        buffered: !0,
                      }),
                    this.Cg && this.Wg(n, { type: "navigation", buffered: !0 }),
                    r.length > 0 && this.Wg(n, { entryTypes: r });
                }
                Wg(t, i) {
                  try {
                    new this.win.PerformanceObserver((i) => {
                      i.getEntries().forEach(t), this.flush();
                    }).observe(i);
                  } catch (t) {}
                }
                Yg() {
                  const t = this.ji.getVisibilityState();
                  return t === vs.INACTIVE || t === vs.HIDDEN;
                }
                Ng() {
                  this.Yg() && (this.Kg(), this.Fg());
                }
                Qg() {
                  if (!this.zg) {
                    this.zg = !0;
                    const { win: t } = this,
                      i = parseInt(
                        Os(t, t.document.body).getPropertyValue(
                          "--google-font-exp"
                        ),
                        10
                      );
                    i >= 0 && this.addEnabledExperiment(`google-font-exp=${i}`);
                  }
                }
                Kg() {
                  this.jg && (this.Qg(), this.Jg());
                }
                Gg(t) {
                  if (!this.ji) return;
                  if (this.Yg()) return;
                  const i = this.xg;
                  if (i.length > 0) {
                    const s = i[0],
                      e = i[i.length - 1];
                    if (
                      t.startTime - e.startTime < 1e3 &&
                      t.startTime - s.startTime < 5e3
                    )
                      return void i.push(t);
                    this.Fg();
                  }
                  i.push(t), this.Ug();
                }
                Fg() {
                  const t = this.xg,
                    i = this.Mg.get(hi);
                  let s = 0,
                    e = 0;
                  for (const i of t) {
                    if (i.sources) for (const t of i.sources) s |= zo(t.node);
                    e += i.value;
                  }
                  (t.length = 0),
                    this.Qg(),
                    (null == i || e > i) &&
                      (this.Mg.reset(hi),
                      this.Mg.reset(oi),
                      this.tickDelta(hi, e),
                      this.tickDelta(oi, s),
                      this.flush());
                }
                Jg() {
                  0 === this.Rg
                    ? (this.tickDelta(ui, this.kg), this.flush(), (this.Rg = 1))
                    : 1 === this.Rg &&
                      (this.tickDelta("cls-2", this.kg),
                      this.flush(),
                      (this.Rg = 2));
                }
                qg(t) {
                  const { element: i, startTime: s } = t,
                    e = zo(i);
                  this.tickDelta("lcpt", e),
                    this.tickDelta("lcp", s),
                    this.tickSinceVisible("lcpv", s),
                    this.flush();
                }
                Hg() {
                  const t = !this.ji.hasBeenVisible();
                  let i = -1;
                  this.ji.whenFirstVisible().then(() => {
                    (i = this.win.performance.now()), this.mark("visible");
                  }),
                    this.Xg().then(() => {
                      if (t) {
                        const t = i > -1 ? this.win.performance.now() - i : 0;
                        this.ji.whenFirstVisible().then(() => {
                          this.tickDelta(li, t);
                        }),
                          this.Zg(t),
                          this.mark(li);
                      } else
                        this.tick(li), this.Zg(this.win.performance.now() - i);
                      this.flush();
                    });
                }
                Xg() {
                  return this.Ei.whenFirstPass().then(() => {
                    const { documentElement: t } = this.win.document,
                      i = Ps(t).getSize();
                    return (
                      Jt(0, 0, i.width, i.height),
                      (s = t),
                      this.win,
                      (function (t, i) {
                        const s = Xi(t);
                        return s
                          .signals()
                          .whenSignal(Cn)
                          .then(() => {
                            const t = cs(s)
                              .get()
                              .filter(
                                (t) =>
                                  !(
                                    !t.prerenderAllowed() ||
                                    jo.includes(t.element.tagName)
                                  )
                              )
                              .map((t) => t.element);
                            return 0 === t.length
                              ? Promise.resolve([])
                              : new Promise((i) => {
                                  const { win: e } = s,
                                    n = new e.IntersectionObserver(
                                      (t) => {
                                        n.disconnect();
                                        const s = [];
                                        for (let i = 0; i < t.length; i++) {
                                          const {
                                            isIntersecting: e,
                                            target: n,
                                          } = t[i];
                                          e && s.push(n);
                                        }
                                        i(s);
                                      },
                                      {
                                        root: qt(e) ? e.document : null,
                                        threshold: 0.01,
                                      }
                                    );
                                  for (
                                    let i = 0;
                                    i < Math.min(t.length, 100);
                                    i++
                                  )
                                    n.observe(t[i]);
                                }).then((t) =>
                                  Promise.all(t.map((t) => t.whenLoaded()))
                                );
                          });
                      })(s)
                    );
                    var s;
                  });
                }
                tick(t, i, s) {
                  yt(null == i || null == s);
                  const e = { label: t };
                  let n;
                  null != i
                    ? (e.delta = n = Math.max(i, 0))
                    : null != s
                    ? (e.value = s)
                    : (this.mark(t),
                      (n = this.win.performance.now()),
                      (e.value = this.bg + n)),
                    this.win.dispatchEvent(
                      Be(this.win, "perf", { label: t, delta: n })
                    ),
                    this.wg && this.Eg
                      ? this.Be.sendMessage("tick", e)
                      : this.ov(e),
                    this.Mg.signal(t, n);
                }
                mark(t) {
                  var i, s;
                  null === (i = (s = this.win.performance).mark) ||
                    void 0 === i ||
                    i.call(s, t);
                }
                tickDelta(t, i) {
                  this.tick(t, i);
                }
                tickSinceVisible(t, i) {
                  var s, e;
                  const n = null == i ? this.win.performance.now() : i,
                    r = this.bg + n,
                    h =
                      null !== (s = this.Be) && void 0 !== s && s.isEmbedded()
                        ? null === (e = this.ji) || void 0 === e
                          ? void 0
                          : e.getFirstVisibleTime()
                        : this.bg,
                    o = h ? Math.max(r - h, 0) : 0;
                  this.tickDelta(t, o);
                }
                flush() {
                  this.wg &&
                    this.Eg &&
                    (null == this.Sg &&
                      (this.Sg = Object.keys(this.Tg).join(",")),
                    this.Be.sendMessage(
                      "sendCsi",
                      {
                        ampexp: this.Sg,
                        canonicalUrl: this.Ig.canonicalUrl,
                        eventid: this.yg,
                      },
                      !0
                    ));
                }
                addEnabledExperiment(t) {
                  (this.Tg[t] = !0), (this.Sg = void 0);
                }
                ov(t) {
                  this.Pg.length >= 50 && this.Pg.shift(), this.Pg.push(t);
                }
                Bg() {
                  this.Be &&
                    (this.Eg
                      ? (this.Pg.forEach((t) => {
                          this.Be.sendMessage("tick", t);
                        }),
                        (this.Pg.length = 0))
                      : (this.Pg.length = 0));
                }
                Zg(t) {
                  this.Be &&
                    this.Be.sendMessage("prerenderComplete", { value: t }, !0);
                }
                isPerformanceTrackingOn() {
                  return this.Eg;
                }
                getMetric(t) {
                  return this.Mg.whenSignal(t);
                }
              }
            );
          const i = os(self);
          i.addEnabledExperiment("esm"),
            (function (t) {
              Ai(t.document, () =>
                (function (t) {
                  let i = 1500;
                  const s = t.performance;
                  s &&
                    s.timing &&
                    s.timing.navigationStart &&
                    (i = Date.now() - s.timing.navigationStart);
                  const e = Math.max(1, 2100 - i);
                  t.setTimeout(() => {
                    Go(t);
                    const { styleSheets: i } = t.document;
                    if (!i) return;
                    const s = t.document.querySelectorAll(
                        `link[rel~="stylesheet"]:not([href^="https://translate.googleapis.com/translate_static/css/"]):not([href^="${St(
                          et
                        )}"])`
                      ),
                      n = [];
                    for (let t = 0; t < s.length; t++) {
                      const e = s[t];
                      let r = !1;
                      for (let t = 0; t < i.length; t++)
                        if (i[t].ownerNode == e) {
                          r = !0;
                          break;
                        }
                      r || n.push(e);
                    }
                    for (let i = 0; i < n.length; i++) {
                      const s = n[i],
                        r = s.media || "all";
                      (s.media = "print"),
                        (s.onload = () => {
                          (s.media = r), Go(t);
                        }),
                        s.setAttribute("i-amphtml-timeout", e),
                        s.parentNode.insertBefore(s, s.nextSibling);
                    }
                  }, e);
                })(t)
              );
            })(self),
            i.tick("is"),
            hu(t, i);
        }),
          self.console &&
            (console.info || console.log).call(
              console,
              "Powered by AMP ⚡ HTML – Version 2301261900000",
              self.location.href
            ),
          self.document.documentElement.setAttribute(
            "amp-version",
            "2301261900000"
          );
      })();
} catch (t) {
  throw (
    (setTimeout(function () {
      var t = document.body.style;
      (t.opacity = 1),
        (t.visibility = "visible"),
        (t.animation = "none"),
        (t.WebkitAnimation = "none;");
    }, 1e3),
    t)
  );
}
//# sourceMappingURL=v0.mjs.map
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
