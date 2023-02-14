(self.AMP = self.AMP || []).push({
  m: 1,
  v: "2301261900000",
  n: "amp-story",
  ev: "1.0",
  l: !0,
  f: function (t, i) {
    (() => {
      var i;
      function s() {
        return i || (i = Promise.resolve(void 0));
      }
      var o = class {
        constructor() {
          this.promise = new Promise((t, i) => {
            (this.resolve = t), (this.reject = i);
          });
        }
      };
      function n(t) {
        return new Promise((i) => {
          i(t());
        });
      }
      function r(t) {
        return t ? Array.prototype.slice.call(t) : [];
      }
      var { isArray: a } = Array;
      function e(t, i) {
        for (let s = 0; s < t.length; s++) if (i(t[s], s, t)) return s;
        return -1;
      }
      var h,
        { hasOwnProperty: l, toString: p } = Object.prototype;
      function m(t) {
        const i = Object.create(null);
        return t && Object.assign(i, t), i;
      }
      function c(t, i) {
        return l.call(t, i);
      }
      function u(t, i, s, o, n, r, a, e, h, l, p) {
        return t;
      }
      function d(t, i) {
        return t.replace(/^|,/g, `$&${i} `);
      }
      function f(t) {
        return CSS.escape(t);
      }
      function g(t) {
        u(/^[\w-]+$/.test(t));
      }
      function y(t, i) {
        return t.querySelector(d(i, ":scope"));
      }
      function _(t, i) {
        return t.querySelectorAll(d(i, ":scope"));
      }
      function v(t, i) {
        return t.matches(i);
      }
      function b(t, i, s) {
        let o;
        for (o = t; o && o !== s; o = o.parentElement) if (i(o)) return o;
        return null;
      }
      function A(t, i) {
        return t.closest(i);
      }
      function P(t, i) {
        for (let s = t.lastElementChild; s; s = s.previousElementSibling)
          if (i(s)) return s;
        return null;
      }
      function x(t, i) {
        return g(i), y(t, `> ${i}`);
      }
      function w(t) {
        const i = Object.getOwnPropertyDescriptor(t, "message");
        if (null != i && i.writable) return t;
        const { message: s, stack: o } = t,
          n = new Error(s);
        for (const i in t) n[i] = t[i];
        return (n.stack = o), n;
      }
      function T(t) {
        let i = null,
          s = "";
        for (const t of arguments)
          t instanceof Error && !i ? (i = w(t)) : (s && (s += " "), (s += t));
        return (
          i ? s && (i.message = s + ": " + i.message) : (i = new Error(s)), i
        );
      }
      function E(t) {
        var i, s;
        null === (i = (s = self).__AMP_REPORT_ERROR) ||
          void 0 === i ||
          i.call(s, t);
      }
      function M(t) {
        const i = T.apply(null, arguments);
        return (i.expected = !0), i;
      }
      function I(t, ...i) {
        const s = T.apply(null, i);
        (s.name = t || s.name), E(s);
      }
      function R(t, ...i) {
        E(M.apply(null, i));
      }
      var k = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
        V = { getPropertyPriority: () => "", getPropertyValue: () => "" };
      function S(t) {
        const i = t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
        return k.some((t) => i.startsWith(t + "-")) ? `-${i}` : i;
      }
      function z(t, i, s) {
        if (Y(i)) return i;
        h || (h = m());
        let o = h[i];
        if (!o || s) {
          if (((o = i), void 0 === t[i])) {
            const s = (function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
              })(i),
              n = (function (t, i) {
                for (let s = 0; s < k.length; s++) {
                  const o = k[s] + i;
                  if (void 0 !== t[o]) return o;
                }
                return "";
              })(t, s);
            void 0 !== t[n] && (o = n);
          }
          s || (h[i] = o);
        }
        return o;
      }
      function O(t, i) {
        const { style: s } = t;
        for (const t in i) s.setProperty(S(z(s, t)), String(i[t]), "important");
      }
      function C(t, i, s, o, n) {
        const r = z(t.style, i, n);
        if (!r) return;
        const a = o ? s + o : s;
        t.style.setProperty(S(r), a);
      }
      function N(t, i) {
        for (const s in i) C(t, s, i[s]);
      }
      function L(t, i) {
        void 0 === i && (i = t.hasAttribute("hidden")),
          i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "");
      }
      function D(t) {
        return `${t}px`;
      }
      function U(t) {
        return `${t}deg`;
      }
      function $(t, i) {
        return "number" == typeof t ? i(t) : t;
      }
      function j(t, i) {
        return null == i
          ? `translate(${$(t, D)})`
          : `translate(${$(t, D)}, ${$(i, D)})`;
      }
      function F(t) {
        return `scale(${t})`;
      }
      function H(t) {
        return `rotate(${$(t, U)})`;
      }
      function B(t, i) {
        return t.getComputedStyle(i) || V;
      }
      function Y(t) {
        return t.startsWith("--");
      }
      function G(t) {
        return (
          "display" in t &&
            I(
              "STYLE",
              "`display` style detected. You must use toggle instead."
            ),
          t
        );
      }
      var W = "nodisplay",
        q = "container",
        X = class extends t.BaseElement {
          constructor(t) {
            super(t);
          }
          isLayoutSupported(t) {
            return t == q;
          }
          buildCallback() {
            this.element.classList.add("i-amphtml-story-layer");
          }
        },
        K = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
      function Z(t, i = "") {
        try {
          return decodeURIComponent(t);
        } catch (t) {
          return i;
        }
      }
      function J(t) {
        const i = m();
        if (!t) return i;
        let s;
        for (; (s = K.exec(t)); ) {
          const t = Z(s[1], s[1]),
            o = s[2] ? Z(s[2].replace(/\+/g, " "), s[2]) : "";
          i[t] = o;
        }
        return i;
      }
      function Q(t) {
        const { location: i } = t || self;
        return J(i.originalHash || i.hash);
      }
      function tt(t) {
        return (t.ownerDocument || t).defaultView;
      }
      function it(t) {
        const i = tt(t),
          s = J(i.location.href).page;
        let o = "amp-story-page:first-of-type";
        s && (o += `, amp-story-page#${f(s)}`);
        const n = i.document.querySelectorAll(o);
        return n[n.length - 1] === t;
      }
      var st = {
          "align-content": "alignContent",
          "align-items": "alignItems",
          "align-self": "alignSelf",
          "grid-area": "gridArea",
          "justify-content": "justifyContent",
          "justify-items": "justifyItems",
          "justify-self": "justifySelf",
        },
        ot = Object.keys(st)
          .map((t) => `[${t}]`)
          .join(","),
        nt = "load-end",
        rt = "preview";
      function at(t) {
        return JSON.parse(t);
      }
      function et(t, i, s = 5) {
        if (!isFinite(s) || s < 0) throw new Error("Invalid depth: " + s);
        if (t === i) return !0;
        const o = [{ a: t, b: i, depth: s }];
        for (; o.length > 0; ) {
          const { a: t, b: i, depth: s } = o.shift();
          if (s > 0) {
            if (typeof t != typeof i) return !1;
            if (a(t) && a(i)) {
              if (t.length !== i.length) return !1;
              for (let n = 0; n < t.length; n++)
                o.push({ a: t[n], b: i[n], depth: s - 1 });
              continue;
            }
            if (t && i && "object" == typeof t && "object" == typeof i) {
              const n = Object.keys(t),
                r = Object.keys(i);
              if (n.length !== r.length) return !1;
              for (const r of n) o.push({ a: t[r], b: i[r], depth: s - 1 });
              continue;
            }
          }
          if (t !== i) return !1;
        }
        return !0;
      }
      function ht(t) {
        var i;
        null === (i = t.parentElement) || void 0 === i || i.removeChild(t);
      }
      function lt(t) {
        const i = t.isConnected;
        if (void 0 !== i) return i;
        let s = t;
        for (; (s = pt(s)), s.host; ) s = s.host;
        return s.nodeType === Node.DOCUMENT_NODE;
      }
      function pt(t) {
        if (Node.prototype.getRootNode) return t.getRootNode();
        let i;
        for (
          i = t;
          i.parentNode &&
          (!(s = i) ||
            ("I-AMPHTML-SHADOW-ROOT" != s.tagName &&
              (11 != s.nodeType ||
                "[object ShadowRoot]" !== Object.prototype.toString.call(s))));
          i = i.parentNode
        );
        var s;
        return i;
      }
      function mt(t) {
        var i;
        return (
          "SCRIPT" == t.tagName &&
          "APPLICATION/JSON" ==
            (null === (i = t.getAttribute("type")) || void 0 === i
              ? void 0
              : i.toUpperCase())
        );
      }
      function ct(t, i, s) {
        const o = t.hasAttribute(i),
          n = void 0 !== s ? s : !o;
        return n !== o && (n ? t.setAttribute(i, "") : t.removeAttribute(i)), n;
      }
      function ut(t) {
        const i = ((s = t), g("script"), _(s, "> script"));
        var s;
        const { length: o } = i;
        if (1 !== o)
          throw new Error(`Found ${o} <script> children. Expected 1.`);
        const n = i[0];
        if (!mt(n))
          throw new Error('<script> child must have type="application/json"');
        try {
          var r;
          return at(null !== (r = n.textContent) && void 0 !== r ? r : "");
        } catch (t) {
          throw new Error(
            "Failed to parse <script> contents. Is it valid JSON?"
          );
        }
      }
      function dt(t) {
        if (
          (u(
            (function (t) {
              const i = t.tagName;
              return (
                i.startsWith("AMP-") &&
                !("AMP-STICKY-AD-TOP-PADDING" == i || "AMP-BODY" == i)
              );
            })(t)
          ),
          t.createdCallback)
        )
          return Promise.resolve(t);
        if (!t.__AMP_UPG_PRM) {
          const i = new o();
          (t.__AMP_UPG_PRM = i.promise), (t.__AMP_UPG_RES = i.resolve);
        }
        const i = t.__AMP_UPG_PRM;
        return u(i), i;
      }
      function ft(t, i, s) {
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
      function gt(t, i) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          i &&
            (o = o.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            s.push.apply(s, o);
        }
        return s;
      }
      function yt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var s = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? gt(Object(s), !0).forEach(function (i) {
                ft(t, i, s[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : gt(Object(s)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(s, i)
                );
              });
        }
        return t;
      }
      function _t(t, i) {
        if (!!i === i || null == i) return;
        if (Array.isArray(i))
          return void i.forEach((i) => {
            _t(t, i);
          });
        const s = i;
        t.appendChild(s.nodeType ? s : self.document.createTextNode(String(i)));
      }
      function vt(t, i, ...s) {
        if ("string" != typeof t) return t(yt(yt({}, i), {}, { children: s }));
        const o = null == i ? void 0 : i.xmlns;
        o && delete i.xmlns;
        const n = o
          ? self.document.createElementNS(o, t)
          : self.document.createElement(t);
        return (
          _t(n, s),
          i &&
            Object.keys(i).forEach((t) => {
              !(function (t, i, s) {
                if (!1 !== s && null != s)
                  if ("function" != typeof s || "o" !== i[0] || "n" !== i[1])
                    t.setAttribute(i, !0 === s ? "" : String(s));
                  else {
                    const o = i.toLowerCase().substring(2);
                    t.addEventListener(o, s);
                  }
              })(n, t, i[t]);
            }),
          n
        );
      }
      function bt(t, i) {
        const s = n(() => t.play(!!i));
        return (
          s.catch((t) => {
            R(0, t);
          }),
          s
        );
      }
      function At(t, i, s) {
        let o = 0,
          n = 0,
          r = null;
        function a() {
          o = 0;
          const e = s - (t.Date.now() - n);
          var h;
          e > 0
            ? (o = t.setTimeout(a, e))
            : ((h = r), (r = null), i.apply(null, h));
        }
        return function (...i) {
          (n = t.Date.now()), (r = i), o || (o = t.setTimeout(a, s));
        };
      }
      var Pt = "";
      function xt(t) {
        const i = t || self;
        return i.__AMP_MODE
          ? i.__AMP_MODE
          : (i.__AMP_MODE = (function (t) {
              return {
                localDev: !1,
                development: Tt(t, Q(t)),
                esm: !0,
                test: !1,
                rtvVersion: wt(t),
                ssrReady: !1,
              };
            })(i));
      }
      function wt(t) {
        var i;
        return (
          Pt ||
            (Pt =
              (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) ||
              "012301261900000"),
          Pt
        );
      }
      function Tt(t, i) {
        const s = i || Q(t);
        return (
          ["1", "actions", "amp", "amp4ads", "amp4email"].includes(
            s.development
          ) || !!t.AMP_DEV_MODE
        );
      }
      self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null,
      };
      var Et = self.__AMP_LOG;
      function Mt(t, i) {
        throw new Error("failed to call initLogConstructor");
      }
      function It(t) {
        return (
          Et.user || (Et.user = Rt()),
          (function (t, i) {
            return i && i.ownerDocument.defaultView != t;
          })(Et.user.win, t)
            ? Et.userForEmbed || (Et.userForEmbed = Rt())
            : Et.user
        );
      }
      function Rt(t) {
        return Mt();
      }
      function kt() {
        return Et.dev || (Et.dev = Mt());
      }
      function Vt(t, i, s, o, n, r, a, e, h, l, p) {
        return t;
      }
      function St(t, i, s, o, n, r, a, e, h, l, p) {
        return It().assert(t, i, s, o, n, r, a, e, h, l, p);
      }
      function zt(t, i, s, o) {
        Ht((t = Ut(t)), t, i, s), o && Ft(t, i);
      }
      function Ot(t, i) {
        return Ft((t = Ut(t)), i);
      }
      function Ct(t, i) {
        return Gt((t = Ut(t)), i) ? Ft(t, i) : null;
      }
      function Nt(t, i) {
        return Ft(jt($t(t)), i);
      }
      function Lt(t, i) {
        const s = jt($t(t));
        return Gt(s, i) ? Ft(s, i) : null;
      }
      function Dt(t, i) {
        return Bt(jt(t), i);
      }
      function Ut(t) {
        return t.__AMP_TOP || (t.__AMP_TOP = t);
      }
      function $t(t) {
        return t.nodeType ? ((i = tt(t)), Ot(i, "ampdoc")).getAmpDoc(t) : t;
        var i;
      }
      function jt(t) {
        const i = $t(t);
        return i.isSingleDoc() ? i.win : i;
      }
      function Ft(t, i) {
        Vt(Gt(t, i));
        const s = Yt(t)[i];
        return (
          s.obj ||
            (Vt(s.ctor),
            Vt(s.context),
            (s.obj = new s.ctor(s.context)),
            Vt(s.obj),
            (s.context = null),
            s.resolve && s.resolve(s.obj)),
          s.obj
        );
      }
      function Ht(t, i, s, o, n, r) {
        const a = Yt(t);
        let e = a[s];
        e ||
          (e = a[s] =
            {
              obj: null,
              promise: null,
              resolve: null,
              reject: null,
              context: null,
              ctor: null,
              sharedInstance: r || !1,
            }),
          (!n && e.ctor) ||
            ((e.ctor = o),
            (e.context = i),
            (e.sharedInstance = r || !1),
            e.resolve && Ft(t, s));
      }
      function Bt(t, i) {
        const s = Yt(t)[i];
        return s
          ? s.promise
            ? s.promise
            : (Ft(t, i), (s.promise = Promise.resolve(s.obj)))
          : null;
      }
      function Yt(t) {
        let i = t.__AMP_SERVICES;
        return i || (i = t.__AMP_SERVICES = {}), i;
      }
      function Gt(t, i) {
        const s = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
        return !(!s || !s.ctor);
      }
      var Wt = "__AMP__EXPERIMENT_TOGGLES";
      function qt(t, i) {
        const s = (function (t) {
          var i, s, o, n, r;
          if (t[Wt]) return t[Wt];
          t[Wt] = m();
          const e = t[Wt];
          u(e);
          const h = yt(
            yt({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}),
            null !== (s = t.AMP_EXP) && void 0 !== s
              ? s
              : at(
                  (null === (o = t.__AMP_EXP) || void 0 === o
                    ? void 0
                    : o.textContent) || "{}"
                )
          );
          for (const t in h) {
            const i = h[t];
            "number" == typeof i &&
              i >= 0 &&
              i <= 1 &&
              (e[t] = Math.random() < i);
          }
          const l =
            null === (n = t.AMP_CONFIG) || void 0 === n
              ? void 0
              : n["allow-doc-opt-in"];
          if (a(l) && l.length) {
            const i = t.document.head.querySelector(
              'meta[name="amp-experiments-opt-in"]'
            );
            if (i) {
              var p;
              const t =
                (null === (p = i.getAttribute("content")) || void 0 === p
                  ? void 0
                  : p.split(",")) || [];
              for (const i of t) l.includes(i) && (e[i] = !0);
            }
          }
          Object.assign(
            e,
            (function (t) {
              var i;
              let s = "";
              try {
                var o;
                "localStorage" in t &&
                  (s =
                    null !==
                      (o = t.localStorage.getItem("amp-experiment-toggles")) &&
                    void 0 !== o
                      ? o
                      : "");
              } catch (t) {}
              const n =
                  (null === (i = s) || void 0 === i
                    ? void 0
                    : i.split(/\s*,\s*/g)) || [],
                r = m();
              for (const t of n)
                t && ("-" == t[0] ? (r[t.substr(1)] = !1) : (r[t] = !0));
              return r;
            })(t)
          );
          const c =
            null === (r = t.AMP_CONFIG) || void 0 === r
              ? void 0
              : r["allow-url-opt-in"];
          if (a(c) && c.length) {
            const i = J(t.location.originalHash || t.location.hash);
            for (const t of c) {
              const s = i[`e-${t}`];
              "1" == s && (e[t] = !0), "0" == s && (e[t] = !1);
            }
          }
          return e;
        })(t);
        return !!s[i];
      }
      function Xt(t, i) {
        return t.__AMP_EXPERIMENT_BRANCHES
          ? t.__AMP_EXPERIMENT_BRANCHES[i]
          : null;
      }
      var Kt = "story-ad-auto-advance",
        Zt = "31067116",
        Jt = (() => self.AMP.config.urls)();
      function Qt(t, i, s, n) {
        const r = Dt(t, i);
        if (r) return r;
        const a = $t(t);
        return a
          .whenExtensionsKnown()
          .then(() => {
            const t = a.getExtensionVersion(s);
            return t ? Ot(a.win, "extensions").waitForExtension(s, t) : null;
          })
          .then((s) =>
            s
              ? n
                ? Dt(t, i)
                : (function (t, i) {
                    return (function (t, i) {
                      const s = Bt(t, i);
                      if (s) return s;
                      const n = Yt(t);
                      return (
                        (n[i] = (function () {
                          const t = new o(),
                            { promise: i, reject: s, resolve: n } = t;
                          return (
                            i.catch(() => {}),
                            {
                              obj: null,
                              promise: i,
                              resolve: n,
                              reject: s,
                              context: null,
                              ctor: null,
                            }
                          );
                        })()),
                        n[i].promise
                      );
                    })(jt(t), i);
                  })(t, i)
              : null
          );
      }
      var ti,
        ii,
        si = (t) => Lt(t, "action"),
        oi = (t) => Nt(t, "documentInfo").get(),
        ni = (t) => Ot(t, "extensions"),
        ri = (t) => Nt(t, "mutator"),
        ai = (t) => Ot(t, "performance"),
        ei = (t) => Ot(t, "platform"),
        hi = (t) => Lt(t, "localization"),
        li = (t) => Ft(t, "timer"),
        pi = (t) => Lt(t, "url"),
        mi = (t) => Nt(t, "viewer"),
        ci = (t) => Ot(t, "vsync"),
        ui = (t) => Ot(t, "xhr");
      function di(t, i, s, o) {
        let n = t,
          r = s,
          a = (t) => {
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
        const e = (function () {
            if (void 0 !== ti) return ti;
            ti = !1;
            try {
              const t = {
                get capture() {
                  return (ti = !0), !1;
                },
              };
              self.addEventListener("test-options", null, t),
                self.removeEventListener("test-options", null, t);
            } catch (t) {}
            return ti;
          })(),
          h = !(null == o || !o.capture);
        return (
          n.addEventListener(i, a, e ? o : h),
          () => {
            null == n || n.removeEventListener(i, a, e ? o : h),
              (r = null),
              (n = null),
              (a = null);
          }
        );
      }
      function fi(t, i, s, o) {
        return di(t, i, s, o);
      }
      function gi(t) {
        return t.detail;
      }
      function yi(t, i, s, o) {
        let n = s;
        const r = di(
          t,
          i,
          (t) => {
            try {
              n(t);
            } finally {
              (n = null), r();
            }
          },
          o
        );
        return r;
      }
      var _i = class {
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
          this.Fn &&
            (function (t, i) {
              const s = t.indexOf(i);
              -1 != s && t.splice(s, 1);
            })(this.Fn, t);
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
            (t = null === (i = this.Fn) || void 0 === i ? void 0 : i.length) &&
            void 0 !== t
            ? t
            : 0;
        }
      };
      function vi(t) {
        const i = J(t).embedMode,
          s = parseInt(i, 10);
        return 0 === (o = s) || 1 === o || 2 === o || 3 === o || 4 === o
          ? s
          : 0;
        var o;
      }
      function bi(t) {
        return 3 === vi(t.location.hash);
      }
      var Ai = "amp-story",
        Pi = (t) => {
          let i = ((t) => Ct(t, "story-store"))(t);
          return (
            i ||
              ((i = new Mi(t)),
              zt(t, "story-store", function () {
                return i;
              })),
            i
          );
        },
        xi = {
          CAN_INSERT_AUTOMATIC_AD: 1,
          CAN_SHOW_AUDIO_UI: 2,
          CAN_SHOW_NAVIGATION_OVERLAY_HINT: 3,
          CAN_SHOW_PAGINATION_BUTTONS: 4,
          CAN_SHOW_PREVIOUS_PAGE_HELP: 5,
          CAN_SHOW_SHARING_UIS: 6,
          CAN_SHOW_STORY_URL_INFO: 7,
          CAN_SHOW_SYSTEM_LAYER_BUTTONS: 8,
          VIEWER_CUSTOM_CONTROLS: 9,
          AD_STATE: 10,
          PAGE_ATTACHMENT_STATE: 11,
          EDUCATION_STATE: 12,
          GYROSCOPE_PERMISSION_STATE: 13,
          INFO_DIALOG_STATE: 14,
          INTERACTIVE_COMPONENT_STATE: 15,
          INTERACTIVE_REACT_STATE: 16,
          KEYBOARD_ACTIVE_STATE: 17,
          MUTED_STATE: 18,
          PAGE_HAS_AUDIO_STATE: 19,
          PAGE_HAS_CAPTION_STATE: 20,
          CAPTIONS_STATE: 21,
          PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE: 22,
          PANNING_MEDIA_STATE: 23,
          PAUSED_STATE: 24,
          PREVIEW_STATE: 25,
          RTL_STATE: 26,
          SHARE_MENU_STATE: 27,
          SHOPPING_DATA: 28,
          STORY_HAS_BACKGROUND_AUDIO_STATE: 29,
          STORY_HAS_PLAYBACK_UI_STATE: 30,
          SYSTEM_UI_IS_VISIBLE_STATE: 31,
          UI_STATE: 32,
          ACTIONS_ALLOWLIST: 33,
          CONSENT_ID: 34,
          CURRENT_PAGE_ID: 35,
          CURRENT_PAGE_INDEX: 36,
          ADVANCEMENT_MODE: 37,
          NAVIGATION_PATH: 38,
          NEW_PAGE_AVAILABLE_ID: 39,
          PAGE_IDS: 40,
          PAGE_SIZE: 41,
          SUBSCRIPTIONS_DIALOG_UI_STATE: 42,
          SUBSCRIPTIONS_STATE: 43,
          SUBSCRIPTIONS_PAGE_INDEX: 44,
        },
        wi = 26,
        Ti = 33,
        Ei = {
          [xi.ACTIONS_ALLOWLIST]: (t, i) => t.length !== i.length,
          [xi.INTERACTIVE_COMPONENT_STATE]: (t, i) =>
            t.element !== i.element || t.state !== i.state,
          [xi.NAVIGATION_PATH]: (t, i) => t.length !== i.length,
          [xi.PAGE_IDS]: (t, i) => t.length !== i.length,
          [xi.PAGE_SIZE]: (t, i) =>
            null === t ||
            null === i ||
            t.width !== i.width ||
            t.height !== i.height,
          [xi.PANNING_MEDIA_STATE]: (t, i) =>
            null === t || null === i || !et(t, i, 2),
          [xi.SHOPPING_DATA]: (t, i) =>
            null === t || null === i || !et(t, i, 2),
          [xi.INTERACTIVE_REACT_STATE]: (t, i) => !et(t, i, 3),
        },
        Mi = class {
          constructor(t) {
            (this.i = t),
              (this.el = {}),
              (this.Ri = yt(yt({}, this.pT()), this.mT()));
          }
          get(t) {
            if (c(this.Ri, t)) return this.Ri[t];
            kt().error(Ai, "Unknown state %s.", t);
          }
          subscribe(t, i, s = !1) {
            c(this.Ri, t)
              ? (this.el[t] || (this.el[t] = new _i()),
                this.el[t].add(i),
                s && i(this.get(t)))
              : kt().error(Ai, "Can't subscribe to unknown state %s.", t);
          }
          dispatch(t, i) {
            const s = yt({}, this.Ri);
            let o;
            (this.Ri = ((t, i, s) => {
              switch (i) {
                case 1:
                  return yt(
                    yt({}, t),
                    {},
                    {
                      [xi.INTERACTIVE_REACT_STATE]: yt(
                        yt({}, t[xi.INTERACTIVE_REACT_STATE]),
                        {},
                        { [s.interactiveId]: s }
                      ),
                    }
                  );
                case 2:
                  return yt(yt({}, t), {}, { [xi.NEW_PAGE_AVAILABLE_ID]: s });
                case 3:
                  const o = yt(yt({}, t[xi.PANNING_MEDIA_STATE]), s);
                  return yt(yt({}, t), {}, { [xi.PANNING_MEDIA_STATE]: o });
                case 4:
                  const n = yt(yt({}, t[xi.SHOPPING_DATA]), s);
                  return yt(yt({}, t), {}, { [xi.SHOPPING_DATA]: n });
                case 5:
                  const r = [].concat(t[xi.ACTIONS_ALLOWLIST], s);
                  return yt(yt({}, t), {}, { [xi.ACTIONS_ALLOWLIST]: r });
                case 21:
                  return yt(yt({}, t), {}, { [xi.PAGE_ATTACHMENT_STATE]: !!s });
                case 15:
                  return yt(yt({}, t), {}, { [xi.AD_STATE]: !!s });
                case 16:
                  return yt(yt({}, t), {}, { [xi.EDUCATION_STATE]: !!s });
                case 18:
                  return (
                    (s = s),
                    yt(
                      yt({}, t),
                      {},
                      {
                        [xi.PAUSED_STATE]: 1 === s.state,
                        [xi.SYSTEM_UI_IS_VISIBLE_STATE]: !0,
                        [xi.INTERACTIVE_COMPONENT_STATE]: s,
                      }
                    )
                  );
                case 17:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.INFO_DIALOG_STATE]: !!s, [xi.PAUSED_STATE]: !!s }
                  );
                case 30:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.STORY_HAS_PLAYBACK_UI_STATE]: !!s }
                  );
                case 29:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.STORY_HAS_BACKGROUND_AUDIO_STATE]: !!s }
                  );
                case 20:
                  return yt(yt({}, t), {}, { [xi.MUTED_STATE]: !!s });
                case 22:
                  return yt(yt({}, t), {}, { [xi.PAGE_HAS_AUDIO_STATE]: !!s });
                case 23:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.PAGE_HAS_CAPTIONS_STATE]: !!s }
                  );
                case 24:
                  return yt(yt({}, t), {}, { [xi.CAPTIONS_STATE]: !!s });
                case 25:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE]: !!s }
                  );
                case wi:
                  return yt(yt({}, t), {}, { [xi.PAUSED_STATE]: !!s });
                case 27:
                  return yt(yt({}, t), {}, { [xi.RTL_STATE]: !!s });
                case 19:
                  return yt(yt({}, t), {}, { [xi.KEYBOARD_ACTIVE_STATE]: !!s });
                case 28:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.PAUSED_STATE]: !!s, [xi.SHARE_MENU_STATE]: !!s }
                  );
                case Ti:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.SYSTEM_UI_IS_VISIBLE_STATE]: !!s }
                  );
                case 34:
                  return 3 === t[xi.UI_STATE] && 3 !== s
                    ? (kt().error(
                        Ai,
                        "Cannot switch away from UIType_Enum.VERTICAL"
                      ),
                      t)
                    : yt(yt({}, t), {}, { [xi.UI_STATE]: s });
                case 9:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.GYROSCOPE_PERMISSION_STATE]: s }
                  );
                case 8:
                  return yt(yt({}, t), {}, { [xi.CONSENT_ID]: s });
                case 6:
                  return yt(
                    yt({}, t),
                    {},
                    {
                      [xi.CURRENT_PAGE_ID]: s.id,
                      [xi.CURRENT_PAGE_INDEX]: s.index,
                    }
                  );
                case 7:
                  return yt(yt({}, t), {}, { [xi.ADVANCEMENT_MODE]: s });
                case 10:
                  return yt(yt({}, t), {}, { [xi.NAVIGATION_PATH]: s });
                case 11:
                  return yt(yt({}, t), {}, { [xi.PAGE_IDS]: s });
                case 12:
                  return yt(yt({}, t), {}, { [xi.PAGE_SIZE]: s });
                case 13:
                  return yt(yt({}, t), {}, { [xi.VIEWER_CUSTOM_CONTROLS]: s });
                case 14:
                  return yt(
                    yt({}, t),
                    {},
                    { [xi.SUBSCRIPTIONS_PAGE_INDEX]: s }
                  );
                case 31:
                  return yt(
                    yt({}, t),
                    {},
                    {
                      [xi.SUBSCRIPTIONS_DIALOG_UI_STATE]: !!s,
                      [xi.PAUSED_STATE]: !!s,
                    }
                  );
                case 32:
                  return yt(yt({}, t), {}, { [xi.SUBSCRIPTIONS_STATE]: s });
                default:
                  return kt().error(Ai, "Unknown action %s.", i), t;
              }
            })(this.Ri, t, i)),
              Object.keys(this.el).forEach((t) => {
                (o = Ei[t]),
                  (o ? o(s[t], this.Ri[t]) : s[t] !== this.Ri[t]) &&
                    this.el[t].fire(this.Ri[t]);
              });
          }
          pT() {
            return {
              [xi.CAN_INSERT_AUTOMATIC_AD]: !0,
              [xi.CAN_SHOW_AUDIO_UI]: !0,
              [xi.CAN_SHOW_NAVIGATION_OVERLAY_HINT]: !0,
              [xi.CAN_SHOW_PREVIOUS_PAGE_HELP]: !0,
              [xi.CAN_SHOW_PAGINATION_BUTTONS]: !0,
              [xi.CAN_SHOW_SHARING_UIS]: !0,
              [xi.CAN_SHOW_STORY_URL_INFO]: !0,
              [xi.CAN_SHOW_SYSTEM_LAYER_BUTTONS]: !0,
              [xi.VIEWER_CUSTOM_CONTROLS]: [],
              [xi.AD_STATE]: !1,
              [xi.EDUCATION_STATE]: !1,
              [xi.GYROSCOPE_PERMISSION_STATE]: "",
              [xi.INFO_DIALOG_STATE]: !1,
              [xi.INTERACTIVE_COMPONENT_STATE]: { state: 0 },
              [xi.INTERACTIVE_REACT_STATE]: {},
              [xi.KEYBOARD_ACTIVE_STATE]: !1,
              [xi.MUTED_STATE]: !0,
              [xi.PAGE_ATTACHMENT_STATE]: !1,
              [xi.PAGE_HAS_AUDIO_STATE]: !1,
              [xi.PAGE_HAS_CAPTIONS_STATE]: !1,
              [xi.CAPTIONS_STATE]: !0,
              [xi.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE]: !1,
              [xi.PANNING_MEDIA_STATE]: {},
              [xi.PAUSED_STATE]: !1,
              [xi.RTL_STATE]: !1,
              [xi.SHARE_MENU_STATE]: !1,
              [xi.SHOPPING_DATA]: {},
              [xi.STORY_HAS_BACKGROUND_AUDIO_STATE]: !1,
              [xi.STORY_HAS_PLAYBACK_UI_STATE]: !1,
              [xi.SYSTEM_UI_IS_VISIBLE_STATE]: !0,
              [xi.UI_STATE]: 0,
              [xi.ACTIONS_ALLOWLIST]: [],
              [xi.CONSENT_ID]: null,
              [xi.CURRENT_PAGE_ID]: "",
              [xi.CURRENT_PAGE_INDEX]: 0,
              [xi.ADVANCEMENT_MODE]: "",
              [xi.NEW_PAGE_AVAILABLE_ID]: "",
              [xi.NAVIGATION_PATH]: [],
              [xi.PAGE_IDS]: [],
              [xi.PAGE_SIZE]: null,
              [xi.PREVIEW_STATE]: !1,
              [xi.SUBSCRIPTIONS_DIALOG_UI_STATE]: !1,
              [xi.SUBSCRIPTIONS_STATE]: 0,
              [xi.SUBSCRIPTIONS_PAGE_INDEX]: -1,
            };
          }
          mT() {
            switch (vi(this.i.location.hash)) {
              case 1:
                return {
                  [xi.CAN_INSERT_AUTOMATIC_AD]: !1,
                  [xi.CAN_SHOW_NAVIGATION_OVERLAY_HINT]: !1,
                  [xi.CAN_SHOW_PAGINATION_BUTTONS]: !1,
                  [xi.CAN_SHOW_PREVIOUS_PAGE_HELP]: !0,
                  [xi.CAN_SHOW_SYSTEM_LAYER_BUTTONS]: !1,
                  [xi.MUTED_STATE]: !1,
                };
              case 2:
                return { [xi.CAN_SHOW_SHARING_UIS]: !1 };
              case 3:
                return {
                  [xi.PREVIEW_STATE]: !0,
                  [xi.CAN_INSERT_AUTOMATIC_AD]: !1,
                  [xi.CAN_SHOW_NAVIGATION_OVERLAY_HINT]: !1,
                  [xi.CAN_SHOW_PAGINATION_BUTTONS]: !1,
                  [xi.CAN_SHOW_PREVIOUS_PAGE_HELP]: !1,
                  [xi.CAN_SHOW_SYSTEM_LAYER_BUTTONS]: !1,
                };
              case 4:
                return {
                  [xi.CAN_SHOW_AUDIO_UI]: !1,
                  [xi.CAN_SHOW_SHARING_UIS]: !1,
                  [xi.CAN_SHOW_STORY_URL_INFO]: !1,
                };
              default:
                return {};
            }
          }
        },
        Ii = "ampstory:switchpage",
        Ri = "ampstory:previouspage",
        ki = "ampstory:nextpage",
        Vi = "ampstory:pageprogress",
        Si = "ampstory:replay",
        zi = "ampstory:nonextpage",
        Oi = "ampstory:nopreviouspage";
      function Ci(t, i, s, o, n) {
        const r = (function (t, i, s, o) {
          const n = { detail: s };
          return Object.assign(n, o), new t.CustomEvent(i, n);
        })(t, s, o, n);
        i.dispatchEvent(r);
      }
      var Ni,
        Li,
        Di = "storyPageCount",
        Ui = "storyIsMuted",
        $i = "storyProgress",
        ji = "storyAdvancementMode",
        Fi = (t) => {
          let i = ((t) => Ct(t, "story-variable"))(t);
          return (
            i ||
              ((i = new Hi(t)),
              zt(t, "story-variable", function () {
                return i;
              })),
            i
          );
        },
        Hi = class {
          constructor(t) {
            (this.dT = {
              storyInteractiveId: null,
              storyInteractiveResponse: null,
              storyInteractiveType: null,
              storyPageIndex: null,
              storyPageId: null,
              [Di]: null,
              [$i]: null,
              [Ui]: null,
              storyPreviousPageId: null,
              storyPreviousPageIndex: null,
              [ji]: null,
              storyShoppingProductId: null,
            }),
              (this._T = Pi(t)),
              this.gT();
          }
          gT() {
            this._T.subscribe(xi.PAGE_IDS, () => this.yT()),
              this._T.subscribe(xi.CURRENT_PAGE_ID, () => this.yT(), !0);
          }
          yT() {
            const t = this._T.get(xi.PAGE_IDS),
              i = t.filter((t) => !t.startsWith("i-amphtml-ad-")).length;
            this.dT.storyPageCount = i;
            const s = this._T.get(xi.CURRENT_PAGE_ID);
            if (!s) return;
            (this.dT.storyPreviousPageId = this.dT.storyPageId),
              (this.dT.storyPageId = s);
            const o = this._T.get(xi.CURRENT_PAGE_INDEX),
              n = t
                .slice(0, o)
                .filter((t) => t.startsWith("i-amphtml-ad-")).length;
            (this.dT.storyPreviousPageIndex = this.dT.storyPageIndex),
              (this.dT.storyPageIndex = o - n),
              1 === i
                ? (this.dT.storyProgress = 0)
                : i > 1 && (this.dT.storyProgress = (o - n) / (i - 1));
          }
          onVariableUpdate(t, i) {
            this.dT[t] = i;
          }
          get() {
            return this.dT;
          }
        },
        Bi = "__AMP_ANALYTICS_TAG_NAME__",
        Yi = "story-open",
        Gi = "story-close",
        Wi = "manualAdvance",
        qi = (t, i) => {
          let s = ((t) => Ct(t, "story-analytics"))(t);
          return (
            s ||
              ((s = new Xi(t, i)),
              zt(t, "story-analytics", function () {
                return s;
              })),
            s
          );
        },
        Xi = class {
          constructor(t, i) {
            (this.i = t),
              (this._n = i),
              (this.AT = Fi(t)),
              (this.PT = m()),
              (this._T = Pi(t)),
              this.gT();
          }
          gT() {
            this._T.subscribe(
              xi.CURRENT_PAGE_ID,
              (t) => {
                const i = this._T.get(xi.AD_STATE);
                if (!t || i) return;
                this.triggerEvent("story-page-visible");
                const s = this._T.get(xi.PAGE_IDS);
                this._T.get(xi.CURRENT_PAGE_INDEX) === s.length - 1 &&
                  this.triggerEvent("story-last-page-visible");
              },
              !0
            );
          }
          triggerEvent(t, i = null) {
            this.bT(t),
              $t(this._n)
                .whenFirstVisible()
                .then(() =>
                  (function (t, i, s = {}, o = !0) {
                    ((t) =>
                      Qt(t, "amp-analytics-instrumentation", "amp-analytics"))(
                      t
                    ).then((n) => {
                      n && n.triggerEventForTarget(t, i, s, o);
                    });
                  })(this._n, t, this.updateDetails(t, i))
                );
          }
          updateDetails(t, i = null) {
            const s = {},
              o = this.AT.get(),
              n = o.storyPageId;
            return (
              this.PT[n][t] > 1 && (s.repeated = !0),
              i &&
                ((s.tagName = i[Bi] || i.tagName.toLowerCase()),
                Object.assign(
                  o,
                  (function (t, i, s) {
                    const { dataset: o } = t,
                      n = {},
                      r = /^vars(.+)/;
                    for (const t in o) {
                      const i = t.match(r);
                      i && (n[i[1][0].toLowerCase() + i[1].substr(1)] = o[t]);
                    }
                    return n;
                  })(i)
                )),
              yt({ eventDetails: s }, o)
            );
          }
          bT(t) {
            const i = this.AT.get().storyPageId;
            (this.PT[i] = this.PT[i] || {}),
              (this.PT[i][t] = this.PT[i][t] || 0),
              this.PT[i][t]++;
          }
        },
        Ki = "none";
      function Zi(t) {
        return !!t && -1 != t.toString().indexOf("[native code]");
      }
      function Ji(t) {
        return (
          void 0 === Ni &&
            ((i = t || Element),
            (Ni = i.prototype.attachShadow
              ? "v1"
              : i.prototype.createShadowRoot
              ? "v0"
              : Ki)),
          Ni
        );
        var i;
      }
      function Qi(t, i, s) {
        var o = "";
        return (
          t &&
            Array.prototype.forEach.call(t, function (t) {
              if (t.selectorText && t.style && void 0 !== t.style.cssText)
                (o +=
                  (function (t, i, s) {
                    var o = [];
                    return (
                      t.split(",").forEach(function (t) {
                        (t = t.trim()),
                          s && (t = s(t)),
                          (function (t, i) {
                            var s = (function (t) {
                              return (
                                (t = t
                                  .replace(/\[/g, "\\[")
                                  .replace(/\]/g, "\\]")),
                                new RegExp("^(" + t + ")" + ss, "m")
                              );
                            })(i);
                            return !t.match(s);
                          })(t, i) &&
                            (t = (function (t, i) {
                              return (function (t, i) {
                                return t.match(ns)
                                  ? (t = t.replace(os, i)).replace(ns, i + " ")
                                  : i + " " + t;
                              })(t, i);
                            })(t, i)),
                          o.push(t);
                      }),
                      o.join(", ")
                    );
                  })(t.selectorText, i, s) + " {\n\t"),
                  (o +=
                    (function (t) {
                      var i = t.style.cssText;
                      t.style.content &&
                        !t.style.content.match(/['"]+|attr/) &&
                        (i = i.replace(
                          /content:[^;]*;/g,
                          "content: '" + t.style.content + "';"
                        ));
                      var s = t.style;
                      for (var o in s)
                        "initial" === s[o] && (i += o + ": initial; ");
                      return i;
                    })(t) + "\n}\n\n");
              else if (t.type === CSSRule.MEDIA_RULE)
                (o += "@media " + t.media.mediaText + " {\n"),
                  (o += Qi(t.cssRules, i)),
                  (o += "\n}\n\n");
              else
                try {
                  t.cssText && (o += t.cssText + "\n\n");
                } catch (t) {}
            }),
          o
        );
      }
      var ts = "-shadowcsshost",
        is = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
        ss =
          (new RegExp("(" + ts + is, "gim"),
          new RegExp("(-shadowcsscontext" + is, "gim"),
          "([>\\s~+[.,{:][\\s\\S]*)?$"),
        os = ts + "-no-combinator",
        ns = new RegExp(ts, "gim"),
        rs = (new RegExp("-shadowcsscontext", "gim"), "vcs"),
        as = "verr",
        es = /[^\.\-\_0-9a-zA-Z]/,
        hs = /[^\-\_0-9a-zA-Z]/;
      function ls(t) {
        const i = tt(t),
          s = t.shadowRoot || t.__AMP_SHADOW_ROOT;
        if (s) {
          if (self.trustedTypes && self.trustedTypes.createPolicy) {
            const t = self.trustedTypes.createPolicy(
              "shadow-embed#createShadowRoot",
              {
                createHTML: function (t) {
                  return "";
                },
              }
            );
            s.innerHTML = t.createHTML("");
          } else s.innerHTML = "";
          return s;
        }
        let o;
        const n = Ji();
        if (
          ("v1" == n
            ? ((o = t.attachShadow({ mode: "open" })),
              o.styleSheets ||
                Object.defineProperty(o, "styleSheets", {
                  get: function () {
                    const t = [];
                    return (
                      o.childNodes.forEach((i) => {
                        "STYLE" === i.tagName && t.push(i.sheet);
                      }),
                      t
                    );
                  },
                }))
            : (o =
                "v0" == n
                  ? t.createShadowRoot()
                  : (function (t) {
                      const i = t.ownerDocument;
                      t.classList.add("i-amphtml-shadow-host-polyfill");
                      const s = i.createElement("style");
                      (s.textContent =
                        ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}"),
                        t.appendChild(s);
                      const o = i.createElement("i-amphtml-shadow-root");
                      return (
                        t.appendChild(o),
                        (t.__AMP_SHADOW_ROOT = o),
                        Object.defineProperty(t, "shadowRoot", {
                          enumerable: !0,
                          configurable: !0,
                          value: o,
                        }),
                        (o.host = t),
                        (o.getElementById = function (t) {
                          const i = f(t);
                          return o.querySelector(`#${i}`);
                        }),
                        Object.defineProperty(o, "styleSheets", {
                          get: () =>
                            i.styleSheets
                              ? r(i.styleSheets).filter((t) =>
                                  o.contains(t.ownerNode)
                                )
                              : [],
                        }),
                        o
                      );
                    })(t)),
          void 0 === Li &&
            (Li =
              Ji() != Ki &&
              (Zi(Element.prototype.attachShadow) ||
                Zi(Element.prototype.createShadowRoot))),
          !Li)
        ) {
          const t = `i-amphtml-sd-${i.Math.floor(1e4 * i.Math.random())}`;
          (o.id = t),
            o.host.classList.add(t),
            (a = (t) =>
              (function (t, i) {
                return (function (t, i) {
                  const s = Vt(t.id),
                    o = t.ownerDocument;
                  let n = null;
                  try {
                    n = cs(o.implementation.createHTMLDocument(""), i);
                  } catch (t) {}
                  if (!n)
                    try {
                      n = cs(o, i);
                    } catch (t) {}
                  return n ? Qi(n, `.${s}`, ps) : i;
                })(t, i);
              })(o, t)),
            (o.__AMP_CSS_TR = a);
        }
        var a;
        return o;
      }
      function ps(t) {
        return t.replace(/(html|body)/g, ms);
      }
      function ms(t, i, s, o) {
        const n = o.charAt(s - 1),
          r = o.charAt(s + t.length);
        return (n && !es.test(n)) || (r && !hs.test(r)) ? t : "amp-" + t;
      }
      function cs(t, i) {
        const s = t.createElement("style");
        s.textContent = i;
        try {
          return (
            (t.head || t.documentElement).appendChild(s),
            s.sheet ? s.sheet.cssRules : null
          );
        } finally {
          s.parentNode && s.parentNode.removeChild(s);
        }
      }
      function us(t, i = NaN) {
        const s = t.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/),
          o = s ? s[1] : void 0,
          n = s ? s[2] : void 0;
        return !s || 3 !== s.length || ("s" !== n && "ms" !== n)
          ? i
          : Math.round(("s" == n ? 1e3 : 1) * parseFloat(o));
      }
      function ds(t) {
        const {
            height: i,
            left: s,
            top: o,
            width: n,
          } = t.getBoundingClientRect(),
          r = 0 == n ? 1 : n / t.offsetWidth,
          a = 0 == i ? 1 : i / t.offsetHeight;
        return { left: s / r, top: o / a, width: n / r, height: i / a };
      }
      function fs(t) {
        return A(t, "amp-video, amp-audio");
      }
      function gs(t, i, s) {
        const o = self.document.createElement("style");
        o.textContent = s;
        const n = ls(t);
        return n.appendChild(o), n.appendChild(i), t;
      }
      function ys(t, i, s) {
        const o = s || "";
        t.mutateElement(() => {
          t.element.setAttribute(i, o);
        });
      }
      function _s(t, i) {
        t.mutateElement(() => {
          t.element.removeAttribute(i);
        });
      }
      function vs(t, i) {
        if (!i.get(xi.CAN_SHOW_STORY_URL_INFO)) return !1;
        const s = t.getParam("showStoryUrlInfo");
        return s ? "0" !== s : t.isEmbedded();
      }
      function bs(t, i, s) {
        const o = A(t, "AMP-STORY"),
          n = o.getAttribute(i);
        return n ? pi(o).assertHttpsUrl(n, o, i) : null;
      }
      function As(t, i) {
        const s = t.cloneNode();
        L(s, !1), i.appendChild(s), s.click(), s.remove();
      }
      function Ps(t) {
        return t.getRootNode().documentElement.hasAttribute("transformed");
      }
      var xs = "i-amphtml-tooltip-action-icon-launch",
        ws = "i-amphtml-story-tooltip-theme-dark",
        Ts = {
          "amp-twitter": {
            customIconClassName: "amp-social-share-twitter-no-background",
            actionIcon: xs,
            selector: "amp-twitter[interactive]",
          },
        },
        Es = yt({ a: { actionIcon: xs, selector: "a[href]" } }, Ts);
      function Ms() {
        return Object.values(
          (function (t) {
            const i = {};
            return (
              Object.keys(t).forEach((s) => {
                i[s] = t[s].selector;
              }),
              i
            );
          })(Es)
        ).join(",");
      }
      var Is = "amp-story-embedded-component",
        Rs = "default",
        ks = /\w+/gi;
      function Vs(t, i, s) {
        for (const n of i) {
          var o;
          const i = null === (o = t[n]) || void 0 === o ? void 0 : o[s];
          if (null != i) return i.string || i;
        }
        return null;
      }
      var Ss = [
        "af",
        "am",
        "ar",
        "bg",
        "bn",
        "bs",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en-GB",
        "en",
        "es-419",
        "es",
        "et",
        "eu",
        "fa",
        "fi",
        "fil",
        "fr",
        "gl",
        "gu",
        "hi",
        "hr",
        "hu",
        "id",
        "is",
        "it",
        "iw",
        "ja",
        "ka",
        "km",
        "kn",
        "ko",
        "lo",
        "lt",
        "lv",
        "mk",
        "ml",
        "mn",
        "mr",
        "ms",
        "my",
        "ne",
        "nl",
        "no",
        "pa",
        "pl",
        "pt-BR",
        "pt-PT",
        "ro",
        "ru",
        "si",
        "sk",
        "sl",
        "sq",
        "sr",
        "sv",
        "sw",
        "ta",
        "te",
        "th",
        "tr",
        "uk",
        "ur",
        "vi",
        "zh-CN",
        "zh-TW",
        "zu",
      ];
      function zs(t) {
        let i = hi(t);
        return (
          i ||
            ((i = new (class {
              constructor(t) {
                (this._n = t),
                  (this.vT = mi(t).getParam("lang")),
                  (this.TT = {}),
                  (this.ET = new _i());
              }
              getLanguageCodesForElement(t) {
                const i = b(t, (t) => t.hasAttribute("lang")),
                  s = (function (t) {
                    if (!t) return ["en", Rs];
                    const i = t.match(ks) || [];
                    return i.reduce(
                      (t, s, o) => {
                        const n = i
                          .slice(0, o + 1)
                          .join("-")
                          .toLowerCase();
                        return t.unshift(n), t;
                      },
                      [Rs]
                    );
                  })((i ? i.getAttribute("lang") : null) || "");
                return this.vT && s.unshift(this.vT), s;
              }
              registerLocalizedStringBundles(t) {
                Object.keys(t).forEach((i) => {
                  const s = i.toLowerCase();
                  this.TT[s] || (this.TT[s] = {}),
                    Object.assign(this.TT[s], t[i]);
                }),
                  this.ET.fire();
              }
              getLocalizedString(t, i = this._n) {
                const s = this.getLanguageCodesForElement(i);
                return Vs(this.TT, s, t);
              }
              getLocalizedStringAsync(t) {
                const i = this.getLanguageCodesForElement(this._n),
                  s = Vs(this.TT, i, t);
                return null !== s
                  ? Promise.resolve(s)
                  : new Promise((s) => {
                      const o = this.ET.add(() => {
                        const n = Vs(this.TT, i, t);
                        n && (o(), s(n));
                      });
                    });
              }
            })(t)),
            (function (t, s, o, n) {
              const r = $t(t);
              Ht(jt(r), r, "localization", function () {
                return i;
              });
            })(t)),
          i
        );
      }
      function Os(t, i) {
        const s = hi(i),
          o = ci(tt(i)),
          n = [];
        return (
          t.querySelectorAll("[i-amphtml-i18n-aria-label]").forEach((t) => {
            n.push(
              s
                .getLocalizedStringAsync(
                  t.getAttribute("i-amphtml-i18n-aria-label")
                )
                .then((i) => t.setAttribute("aria-label", i))
            ),
              t.removeAttribute("i-amphtml-i18n-aria-label");
          }),
          t.querySelectorAll("[i-amphtml-i18n-text-content]").forEach((i) => {
            n.push(
              s
                .getLocalizedStringAsync(
                  i.getAttribute("i-amphtml-i18n-text-content")
                )
                .then((s) =>
                  t.isConnected
                    ? o.mutatePromise(() => {
                        i.textContent = s;
                      })
                    : (i.textContent = s)
                )
            ),
              i.removeAttribute("i-amphtml-i18n-text-content");
          }),
          Promise.all(n)
        );
      }
      function Cs(t) {
        var i;
        return !(
          null === (i = t.matchMedia("(prefers-reduced-motion: reduce)")) ||
          void 0 === i ||
          !i.matches
        );
      }
      function Ns(t, i, s, o) {
        return [{ transform: j(t, i) }, { transform: j(s, o) }];
      }
      function Ls(t, i, s, o, n) {
        return [
          { transform: j(t, i) + " " + H(120 * n) },
          { transform: j(s, o) + " " + H(0) },
        ];
      }
      function Ds(t, i, s, o) {
        return [
          { opacity: 0, transform: j(t, i) + " " + F(0.15) },
          { opacity: 1, transform: j(s, o) + " " + F(1) },
        ];
      }
      function Us(t) {
        if (
          (function (t) {
            return (
              t.targetWidth <= t.pageWidth || t.targetHeight <= t.pageHeight
            );
          })(t)
        ) {
          const i = 1.25,
            s = t.pageWidth > t.targetWidth ? t.pageWidth / t.targetWidth : 1,
            o =
              t.pageHeight > t.targetHeight ? t.pageHeight / t.targetHeight : 1;
          return Math.max(s, o) * i;
        }
        return 1;
      }
      function $s(t, i, s, o, n) {
        return 1 === n
          ? Ns(t, i, s, o)
          : (function (t, i) {
              return (
                t.forEach((t) => {
                  (t.transform += " " + F(i)),
                    (t["transform-origin"] = "left top");
                }),
                t
              );
            })(Ns(t, i, s, o), n);
      }
      var js = [
          "scale-start",
          "scale-end",
          "pan-scaling-factor",
          "translate-x",
          "translate-y",
        ],
        Fs = [
          "pan-up",
          "pan-down",
          "pan-right",
          "pan-left",
          "zoom-in",
          "zoom-out",
        ],
        Hs = "i-amphtml-story-grid-template-with-full-bleed-animation",
        Bs = {
          pulse: {
            duration: 600,
            easing: "cubic-bezier(0.3, 0.0, 0.0, 1)",
            keyframes: [
              { offset: 0, transform: "scale(1)" },
              { offset: 0.25, transform: "scale(0.95)" },
              { offset: 0.75, transform: "scale(1.05)" },
              { offset: 1, transform: "scale(1)" },
            ],
          },
          "fly-in-left": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: (t) => Ns(-(t.targetX + t.targetWidth), 0, 0, 0),
          },
          "fly-in-right": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: (t) => Ns(t.pageWidth - t.targetX, 0, 0, 0),
          },
          "fly-in-top": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: (t) => Ns(0, -(t.targetY + t.targetHeight), 0, 0),
          },
          "fly-in-bottom": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: (t) => Ns(0, t.pageHeight - t.targetY, 0, 0),
          },
          "rotate-in-left": {
            duration: 1e3,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: (t) => Ls(-(t.targetX + t.targetWidth), 0, 0, 0, -1),
          },
          "rotate-in-right": {
            duration: 1e3,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: (t) => Ls(t.pageWidth - t.targetX, 0, 0, 0, 1),
          },
          "fade-in": {
            duration: 600,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: [{ opacity: 0 }, { opacity: 1 }],
          },
          "scale-fade-up": {
            duration: 600,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: [
              { opacity: 0, transform: "scale(0.8)" },
              { opacity: 1, transform: "scale(1)" },
            ],
          },
          "scale-fade-down": {
            duration: 600,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: [
              { opacity: 0, transform: "scale(1.4)" },
              { opacity: 1, transform: "scale(1)" },
            ],
          },
          drop: {
            duration: 1600,
            easing: "linear",
            keyframes(t) {
              const i = Math.max(160, t.targetY + t.targetHeight);
              return [
                {
                  offset: 0,
                  transform: `translateY(${D(Number(-i))})`,
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.29,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.45,
                  transform: `translateY(${D(0.2812 * -i)})`,
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.61,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.71,
                  transform: `translateY(${D(0.0956 * -i)})`,
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.8,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.85,
                  transform: `translateY(${D(0.0359 * -i)})`,
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.92,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.96,
                  transform: `translateY(${D(0.0156 * -i)})`,
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 1,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
              ];
            },
          },
          "twirl-in": {
            duration: 1e3,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: [
              { transform: "rotate(-540deg) scale(0.1)", opacity: 0 },
              { transform: "none", opacity: 1 },
            ],
          },
          "whoosh-in-left": {
            duration: 600,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: (t) => Ds(-(t.targetX + t.targetWidth), 0, 0, 0),
          },
          "whoosh-in-right": {
            duration: 600,
            easing: "cubic-bezier(0.4, 0.4, 0.0, 1)",
            keyframes: (t) => Ds(t.pageWidth - t.targetX, 0, 0, 0),
          },
          "pan-left": {
            duration: 1e3,
            easing: "linear",
            keyframes(t, i) {
              var s;
              const o = i["translate-x"],
                n =
                  null !== (s = i["pan-scaling-factor"]) && void 0 !== s
                    ? s
                    : Us(t);
              (t.targetWidth *= n), (t.targetHeight *= n);
              const r = t.pageWidth - t.targetWidth,
                a = (t.pageHeight - t.targetHeight) / 2;
              return $s(r, a, o ? r + o : 0, a, n);
            },
          },
          "pan-right": {
            duration: 1e3,
            easing: "linear",
            keyframes(t, i) {
              var s;
              const o = i["translate-x"],
                n =
                  null !== (s = i["pan-scaling-factor"]) && void 0 !== s
                    ? s
                    : Us(t);
              (t.targetWidth *= n), (t.targetHeight *= n);
              const r = t.pageWidth - t.targetWidth,
                a = (t.pageHeight - t.targetHeight) / 2;
              return $s(0, a, -o || r, a, n);
            },
          },
          "pan-down": {
            duration: 1e3,
            easing: "linear",
            keyframes(t, i) {
              var s;
              const o = i["translate-y"],
                n =
                  null !== (s = i["pan-scaling-factor"]) && void 0 !== s
                    ? s
                    : Us(t);
              (t.targetWidth *= n), (t.targetHeight *= n);
              const r = 0.5 * (t.pageWidth - t.targetWidth),
                a = t.pageHeight - t.targetHeight;
              return $s(r, 0, r, -o || a, n);
            },
          },
          "pan-up": {
            duration: 1e3,
            easing: "linear",
            keyframes(t, i) {
              var s;
              const o = i["translate-y"],
                n =
                  null !== (s = i["pan-scaling-factor"]) && void 0 !== s
                    ? s
                    : Us(t);
              (t.targetWidth *= n), (t.targetHeight *= n);
              const r = 0.5 * (t.pageWidth - t.targetWidth),
                a = t.pageHeight - t.targetHeight;
              return $s(r, a, r, o ? a + o : 0, n);
            },
          },
          "zoom-in": {
            duration: 1e3,
            easing: "linear",
            keyframes(t, i) {
              const s = i["scale-start"],
                o = i["scale-end"];
              return (
                s &&
                  St(
                    o > s,
                    '"scale-end" value must be greater than "scale-start" value when using "zoom-in" animation.'
                  ),
                [
                  { transform: `scale(${s || 1})` },
                  { transform: `scale(${o || 3})` },
                ]
              );
            },
          },
          "zoom-out": {
            duration: 1e3,
            easing: "linear",
            keyframes(t, i) {
              const s = i["scale-start"],
                o = i["scale-end"];
              return (
                s &&
                  St(
                    s > o,
                    '"scale-start" value must be higher than "scale-end" value when using "zoom-out" animation.'
                  ),
                [
                  { transform: `scale(${s || 3})` },
                  { transform: `scale(${o || 1})` },
                ]
              );
            },
          },
        },
        Ys = "animate-in-duration",
        Gs = "animate-in-delay",
        Ws = "animate-in-after",
        qs = "animate-in-timing-function";
      function Xs(t, i) {
        if (!i.hasAttribute(Ws)) return null;
        const s = i.getAttribute(Ws);
        return t.querySelector(`#${f(s)}`) ? s : null;
      }
      var Ks = class {
          constructor(t, i, s, o, n) {
            const { preset: r, source: a, spec: e, startAfterId: h } = i;
            if (
              ((this.xT = t),
              (this.MT = a),
              (this.oh = o),
              (this.wT = r ? e.target : null),
              (this.IT = n),
              (this.RT = h),
              (this.VT = this.kT(i)),
              (this.ST = this.VT.then((t) => s.then((i) => i.createRunner(t)))),
              (this.OT = this.VT.then((t) => {
                const { keyframes: i } = t;
                return this.wT
                  ? (Vt(!i[0].offset),
                    (s = i[0]),
                    (o = ["offset"]),
                    Object.keys(s).reduce(
                      (t, i) => (o.includes(i) || (t[i] = s[i]), t),
                      {}
                    ))
                  : null;
                var s, o;
              })),
              (this.CT = null),
              (this.zT = null),
              (this.NT = null),
              this.wT)
            ) {
              const { delay: t } = e;
              St(
                t >= 0,
                'Negative delays are not allowed in amp-story "animate-in" animations.'
              );
            }
            this.ST.then((t) => this.LT(t));
          }
          static create(t, i, s, o, n) {
            return new Ks(t, i, s, o, n);
          }
          getDims() {
            return this.oh.measurePromise(() => {
              const t = ds(this.wT),
                i = ds(this.xT);
              return {
                pageWidth: i.width,
                pageHeight: i.height,
                targetWidth: t.width,
                targetHeight: t.height,
                targetX: t.left - i.left,
                targetY: t.top - i.top,
              };
            });
          }
          DT(t, i) {
            return "function" == typeof t
              ? this.getDims().then((s) => t(s, i || {}))
              : Promise.resolve(t);
          }
          kT(t) {
            const { keyframeOptions: i, preset: s, spec: o } = t;
            if (!s) return Promise.resolve(o);
            const { delay: n, duration: r, easing: a } = o,
              { target: e } = o;
            return this.DT(s.keyframes, i).then((t) => ({
              keyframes: t,
              target: e,
              delay: n,
              duration: r,
              easing: a,
              fill: "forwards",
            }));
          }
          applyFirstFrame() {
            return this.hasStarted()
              ? s()
              : (this.CT && this.CT.cancel(),
                this.OT.then((t) => {
                  if (t)
                    return this.oh.mutatePromise(() => {
                      N(this.wT, G(Vt(t)));
                    });
                }));
          }
          applyLastFrame() {
            if (this.wT) return s();
            this.ST.then((t) => {
              t.init(), t.finish(!0);
            });
          }
          start() {
            this.hasStarted() || this.UT(0, this.$T());
          }
          $T() {
            return this.RT ? this.IT.waitFor(this.RT) : s();
          }
          jT(t) {
            t.start();
          }
          hasStarted() {
            return (
              this.FT(0) ||
              (!!this.CT && "running" == Vt(this.CT).getPlayState())
            );
          }
          finish() {
            this.CT || this.HT(), this.UT(1);
          }
          pause() {
            if (null === this.NT && this.CT)
              try {
                this.CT.pause();
              } catch (t) {}
          }
          resume() {
            if (null === this.NT && this.CT)
              try {
                this.CT.resume();
              } catch (t) {}
          }
          BT(t) {
            this.CT && (t.start(), t.finish());
          }
          cancel() {
            (this.zT = null), (this.NT = null), this.CT && Vt(this.CT).cancel();
          }
          UT(t, i) {
            const s = i || null;
            (this.zT = t), (this.NT = s), this.CT && this.YT(t, s);
          }
          YT(t, i) {
            const o = Vt(this.CT);
            (i || s()).then(() => {
              if (this.FT(t))
                switch (((this.zT = null), (this.NT = null), t)) {
                  case 0:
                    return this.jT(o);
                  case 1:
                    return this.BT(o);
                }
            });
          }
          LT(t) {
            (this.CT = t),
              t.onPlayStateChanged((t) => {
                "finished" == t && this.HT();
              }),
              this.FT() && this.YT(this.zT, this.NT);
          }
          FT(t) {
            return t ? this.zT === t : null !== this.zT;
          }
          HT() {
            this.MT.id && this.IT.notifyFinish(this.MT.id);
          }
        },
        Zs = class {
          constructor(t, i) {
            (this.xT = t),
              (this.ji = i),
              (this.oh = ci(this.ji.win)),
              (this.GT = this.WT());
            const s =
              qt(i.win, "story-disable-animations-first-page") ||
              bi(i.win) ||
              Ps(i);
            (this.qT =
              Cs(i.win) || (s && v(t, "amp-story-page:first-of-type"))),
              (this.XT = null),
              (this.IT = Js.create());
          }
          static create(t, i, s) {
            return new Zs(t, i);
          }
          applyFirstFrameOrFinish() {
            return Promise.all(
              this.KT().map((t) =>
                this.qT ? t.applyLastFrame() : t.applyFirstFrame()
              )
            );
          }
          applyLastFrame() {
            return Promise.all(this.KT().map((t) => t.applyLastFrame()));
          }
          animateIn() {
            this.qT || this.ZT().forEach((t) => t.start());
          }
          finishAll() {
            this.ZT().forEach((t) => t.finish());
          }
          cancelAll() {
            this.XT && this.ZT().forEach((t) => t.cancel());
          }
          pauseAll() {
            this.XT && !this.qT && this.ZT().forEach((t) => t.pause());
          }
          resumeAll() {
            this.XT && !this.qT && this.ZT().forEach((t) => t.resume());
          }
          hasAnimationStarted() {
            return this.ZT().some((t) => t.hasStarted());
          }
          ZT() {
            return Vt(this.XT);
          }
          KT() {
            return (
              this.XT ||
                (this.XT = Array.prototype.map
                  .call(_(this.xT, "[animate-in]"), (t) => {
                    const i = this.JT(t);
                    return i
                      ? this.QT({
                          preset: i,
                          source: t,
                          startAfterId: Xs(this.xT, t),
                          keyframeOptions: this.tx(t),
                          spec: this.ix(t, i),
                        })
                      : null;
                  })
                  .concat(
                    Array.prototype.map.call(
                      this.xT.querySelectorAll(
                        "amp-story-animation[trigger=visibility]"
                      ),
                      (t) =>
                        this.QT({
                          source: t,
                          startAfterId: Xs(this.xT, t),
                          spec: ut(t),
                        })
                    )
                  )
                  .concat(
                    Array.prototype.map.call(
                      this.xT.querySelectorAll("amp-bodymovin-animation"),
                      (t) => new Qs(t)
                    )
                  )
                  .filter(Boolean)),
              Vt(this.XT)
            );
          }
          QT(t) {
            return Ks.create(this.xT, t, Vt(this.GT), this.oh, this.IT);
          }
          ix(t, i) {
            const s = {
              target: t,
              delay: i.delay || 0,
              duration: i.duration || 0,
              easing: i.easing || "cubic-bezier(0.4, 0.0, 0.2, 1)",
              keyframes: [],
            };
            return (
              t.hasAttribute(Ys) &&
                (s.duration = us(t.getAttribute(Ys), s.duration)),
              t.hasAttribute(Gs) && (s.delay = us(t.getAttribute(Gs), s.delay)),
              t.hasAttribute(qs) && (s.easing = t.getAttribute(qs)),
              s
            );
          }
          WT() {
            return ni(this.ji.win)
              .installExtensionForDoc(this.ji, "amp-animation")
              .then(() =>
                (function (t, i, s, o) {
                  return Qt(t, "web-animation", s, void 0).then((t) =>
                    (function (t, i, s) {
                      return St(
                        t,
                        "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
                        "web-animation",
                        s,
                        s,
                        s
                      );
                    })(t, 0, s)
                  );
                })(this.xT, 0, "amp-animation")
              )
              .then((t) =>
                t.createBuilder({ scope: this.xT, scaleByScope: !0 })
              );
          }
          JT(t) {
            const i = t.getAttribute("animate-in");
            return Bs[i]
              ? ((function (t, i) {
                  Fs.indexOf(i) >= 0 && t.parentElement.classList.add(Hs);
                })(t, i),
                Bs[i])
              : null;
          }
          tx(t) {
            const i = {};
            return (
              js.forEach((s) => {
                if (!t.hasAttribute(s)) return;
                const o = parseFloat(t.getAttribute(s));
                isNaN(o) || o <= 0 || (i[s] = o);
              }),
              i
            );
          }
        },
        Js = class {
          constructor() {
            (this.sx = m()), (this.nx = m());
          }
          static create() {
            return new Js();
          }
          notifyFinish(t) {
            t in this.sx && (Vt(this.nx[t])(), delete this.sx[t]);
          }
          waitFor(t) {
            if (!(t in this.sx)) {
              const i = new o();
              (this.sx[t] = i.promise), (this.nx[t] = i.resolve);
            }
            return this.sx[t];
          }
        },
        Qs = class {
          constructor(t) {
            (this.ox = t), this.pause();
          }
          pause() {
            this.hx("pause");
          }
          resume() {
            this.hx("play");
          }
          start() {
            this.applyFirstFrame(), this.resume();
          }
          applyFirstFrame() {
            this.hx("seekTo", { percent: 0 });
          }
          applyLastFrame() {
            this.hx("seekTo", { percent: 1 });
          }
          cancel() {
            this.pause();
          }
          hx(t, i = null) {
            this.ox.getImpl().then((s) => {
              s.executeAction({ method: t, args: i, satisfiesTrust: () => !0 });
            });
          }
        };
      function to(t, i = !0) {
        if (!t.hasAttribute("background-audio")) return null;
        const s = t.ownerDocument.createElement("audio"),
          o = pi(t).assertHttpsUrl(t.getAttribute("background-audio"), t);
        return (
          s.setAttribute("src", o),
          s.setAttribute("preload", "auto"),
          i && s.setAttribute("loop", ""),
          s.setAttribute("autoplay", ""),
          s.setAttribute("muted", ""),
          (s.muted = !0),
          s.classList.add("i-amphtml-story-background-audio"),
          t.appendChild(s),
          s
        );
      }
      var io = class {
          constructor(t = null, i = [], s = []) {
            (this.lx = t), (this.mx = i), (this.ux = s);
          }
          _x(t) {
            this.ux.forEach((i) => {
              const s = document.createElement("track");
              (s.id = i.id),
                (s.kind = i.kind),
                (s.label = i.label),
                (s.srclang = i.srclang),
                (s.default = i.default),
                (s.src = i.src),
                s.addEventListener("load", () => {
                  (s.mode = "showing"), (t.textTracks[0].mode = "showing");
                }),
                t.appendChild(s);
            });
          }
          applyToElement(t, i) {
            if (
              (io.removeFrom(t, i),
              this.lx
                ? i.setAttribute("src", this.lx)
                : i.removeAttribute("src"),
              this.mx.forEach((t) => i.appendChild(t)),
              i.changedSources && i.changedSources(),
              this.ux.length > 0)
            )
              if (i.readyState >= 1) this._x(i);
              else {
                const t = () => {
                  i.removeEventListener("loadedmetadata", t), this._x(i);
                };
                i.addEventListener("loadedmetadata", t);
              }
          }
          static removeFrom(t, i) {
            let s;
            s = "VIDEO" === i.tagName ? i : fs(i) || i;
            let o = null;
            s.hasAttribute("src") &&
              ((o = io.createSourceElement(t, s)), s.removeAttribute("src"));
            const n = r(s.querySelectorAll("source"));
            n.forEach((t) => ht(t));
            const a = r(s.querySelectorAll("track"));
            return a.forEach((t) => ht(t)), new io(null, o ? [o] : n, a);
          }
          static createSourceElement(t, i) {
            const s = t.document.createElement("source"),
              o = i.getAttribute("src");
            s.setAttribute("src", o);
            const n = i.getAttribute("amp-orig-src");
            n && s.setAttribute("amp-orig-src", n);
            const r = i.getAttribute("type");
            return r && s.setAttribute("type", r), s;
          }
        },
        so = [
          "i-amphtml-pool-media",
          "i-amphtml-pool-audio",
          "i-amphtml-pool-video",
        ],
        oo = ["id", "src", "class", "autoplay"];
      function no(t) {
        return so.indexOf(t) >= 0;
      }
      function ro(t) {
        return oo.indexOf(t) >= 0;
      }
      function ao(t, i) {
        for (let t = i.classList.length - 1; t >= 0; t--) {
          const s = i.classList.item(t);
          no(s) || i.classList.remove(s);
        }
        for (let s = 0; s < t.classList.length; s++) {
          const o = t.classList.item(s);
          no(o) || i.classList.add(o);
        }
      }
      function eo(t, i) {
        const s = t.attributes,
          o = i.attributes;
        for (let t = o.length - 1; t >= 0; t--) {
          const s = o[t].name;
          ro(s) || i.removeAttribute(s);
        }
        for (let t = 0; t < s.length; t++) {
          const { name: o, value: n } = s[t];
          ro(o) || i.setAttribute(o, n);
        }
      }
      var ho = class {
          constructor(t, i = {}) {
            this.gx = t;
            const s = new o();
            (this.yx = s.promise),
              (this.options = i),
              (this.Sn = s.resolve),
              (this.fh = s.reject);
          }
          getName() {
            return this.gx;
          }
          whenComplete() {
            return this.yx;
          }
          execute(t) {
            return this.executeInternal(t).then(this.Sn, this.fh);
          }
          executeInternal(t) {
            return s();
          }
          requiresSynchronousExecution() {
            return !1;
          }
          failTask(t) {
            this.fh(t);
          }
        },
        lo = class extends ho {
          constructor() {
            super("play");
          }
          executeInternal(t) {
            return t.paused ? bt(t) : s();
          }
        },
        po = class extends ho {
          constructor() {
            super("pause");
          }
          executeInternal(t) {
            return t.pause(), s();
          }
        },
        mo = class extends ho {
          constructor() {
            super("unmute");
          }
          executeInternal(t) {
            return (t.muted = !1), t.removeAttribute("muted"), s();
          }
        },
        co = class extends ho {
          constructor() {
            super("mute");
          }
          executeInternal(t) {
            return (t.muted = !0), t.setAttribute("muted", ""), s();
          }
        },
        uo = class extends ho {
          constructor(t = { currentTime: 0 }) {
            super("setCurrentTime", t);
          }
          executeInternal(t) {
            return (t.currentTime = this.options.currentTime), s();
          }
        },
        fo = class extends ho {
          constructor() {
            super("load");
          }
          executeInternal(t) {
            return t.load(), s();
          }
          requiresSynchronousExecution() {
            return !0;
          }
        },
        go = class extends ho {
          constructor() {
            super("bless");
          }
          requiresSynchronousExecution() {
            return !0;
          }
          executeInternal(t) {
            const i = t.muted;
            return (t.muted = !1), i && (t.muted = !0), s();
          }
        },
        yo = class extends ho {
          constructor(t, i) {
            super("update-src"), (this.i = t), (this.Ax = i);
          }
          executeInternal(t) {
            return (
              io.removeFrom(this.i, t), this.Ax.applyToElement(this.i, t), s()
            );
          }
          requiresSynchronousExecution() {
            return !0;
          }
        },
        _o = class extends ho {
          constructor(t) {
            super("swap-into-dom"), (this.Px = t);
          }
          executeInternal(t) {
            return lt(this.Px)
              ? (ao(this.Px, t),
                eo(this.Px, t),
                this.Px.parentElement.replaceChild(t, this.Px),
                s())
              : (this.failTask(
                  "Cannot swap media for element that is not in DOM."
                ),
                s());
          }
          requiresSynchronousExecution() {
            return !0;
          }
        },
        vo = class extends ho {
          constructor(t) {
            super("swap-out-of-dom"), (this.Px = t);
          }
          executeInternal(t) {
            return (
              ao(t, this.Px),
              eo(t, this.Px),
              t.parentElement.replaceChild(this.Px, t),
              s()
            );
          }
          requiresSynchronousExecution() {
            return !0;
          }
        };
      function bo(t) {
        var i;
        dt(((i = t), i)).then((t) => {
          t.signals().signal("playback-delegated");
        });
      }
      function Ao(t) {
        t.signals().signal("user-interacted");
      }
      var Po = "audio",
        xo = "video",
        wo = "pool",
        To = {},
        Eo = 0,
        Mo = class {
          constructor(t, i, s) {
            (this.i = t),
              (this.Re = li(t)),
              (this.bx = s),
              (this.allocated = {}),
              (this.unallocated = {}),
              (this.xw = {}),
              (this.vx = null),
              (this.Tx = {}),
              (this.Ex = {}),
              (this.xx = 0),
              (this.Mx = !1),
              (this.wx = null),
              (this.Ix = {
                [Po]: () => {
                  const t = this.i.document.createElement("audio");
                  return (
                    t.setAttribute("muted", ""),
                    (t.muted = !0),
                    t.classList.add("i-amphtml-pool-media"),
                    t.classList.add("i-amphtml-pool-audio"),
                    t
                  );
                },
                [xo]: () => {
                  const t = this.i.document.createElement("video");
                  return (
                    t.setAttribute("muted", ""),
                    (t.muted = !0),
                    t.setAttribute("playsinline", ""),
                    t.classList.add("i-amphtml-pool-media"),
                    t.classList.add("i-amphtml-pool-video"),
                    t
                  );
                },
              }),
              this.Rx(i);
          }
          Rx(t) {
            let i = 0;
            for (const s in t) {
              const o = t[s],
                n = Vt(this.Ix[s])();
              (this.allocated[s] = []), (this.unallocated[s] = []);
              for (let t = o; t > 0; t--) {
                const o = 1 == t ? n : n.cloneNode(!0);
                o.addEventListener("error", this.Vx, { capture: !0 }),
                  (o.id = "i-amphtml-pool-media-" + i++),
                  (o.muted = !0),
                  (o.__AMP_MEDIA_ELEMENT_ORIGIN__ = wo),
                  this.unallocated[s].push(o);
              }
            }
          }
          Vx(t) {
            const i = t.target;
            if (!v(i, "source:last-of-type, video[src]")) return;
            const s = "SOURCE" === i.tagName ? i.parentElement : i;
            s.__AMP_MEDIA_LOAD_FAILURE_SRC = s.currentSrc || !0;
          }
          kx() {
            return new io();
          }
          Sx(t, i) {
            return this.bx(t) < this.bx(i) ? -1 : 1;
          }
          Ox() {
            return "i-amphtml-placeholder-media-" + this.xx++;
          }
          Cx(t) {
            return t.__AMP_MEDIA_ELEMENT_ORIGIN__ === wo;
          }
          zx(t) {
            switch (t.tagName.toLowerCase()) {
              case "audio":
                return Po;
              case "video":
                return xo;
              default:
                return 0;
            }
          }
          Nx(t) {
            return this.unallocated[t].pop();
          }
          Lx(t, i) {
            if (this.Dx(t, i)) return i;
            const s = this.allocated[t];
            return s[e(s, (t) => t["replaced-media"] === i.id)];
          }
          Ux(t, i) {
            this.allocated[t].push(i);
            const s = this.unallocated[t],
              o = s.indexOf(i);
            o >= 0 && s.splice(o, 1);
          }
          $x(t, i) {
            const s = this.allocated[t];
            if ((s.sort((t, i) => this.Sx(t, i)), i)) {
              const t = s[s.length - 1];
              if (!t || this.bx(t) < this.bx(i)) return null;
            }
            const o = s.pop();
            return this.unallocated[t].push(o), o;
          }
          jx(t) {
            const i = this.zx(t),
              o = this.allocated[i];
            return (lt(t) ? this.Fx(t) : s()).then(() => {
              const s = o.indexOf(t);
              Vt(s >= 0), o.splice(s, 1), this.unallocated[i].push(t);
            });
          }
          Hx(t, i) {
            const s = this.$x(t, i);
            return s ? (this.Fx(s), s) : null;
          }
          Dx(t, i) {
            const s = i;
            return this.allocated[t].indexOf(s) >= 0;
          }
          Bx(t, i, s) {
            const o = fs(i),
              n = fs(t);
            return (
              (i["replaced-media"] = t.id),
              this.Yx(i, new _o(t))
                .then(() => Promise.all([this.Gx(o), this.Gx(n)]))
                .then(() => this.Yx(i, new yo(this.i, s)))
                .then(() => this.Yx(i, new fo()))
                .catch(() => {
                  this.jx(i);
                })
            );
          }
          Gx(t) {
            return t
              ? "amp-audio" == t.tagName.toLowerCase()
                ? s()
                : (this.Tx[t.id] && this.Wx(t, 1),
                  t.getImpl().then((t) => {
                    t.resetOnDomChange && t.resetOnDomChange();
                  }))
              : s();
          }
          qx(t, i = this.kx()) {
            return this.Yx(t, new yo(this.i, i)).then(() =>
              this.Yx(t, new fo())
            );
          }
          Fx(t) {
            const i = t["replaced-media"],
              s = this.Ex[i];
            t["replaced-media"] = null;
            const o = this.Yx(t, new vo(s));
            return this.qx(t), o;
          }
          Xx(t) {
            if (!lt(t)) return s();
            const i = this.zx(t),
              o = this.Lx(i, t);
            if (o) return Promise.resolve(o);
            const n = t,
              r = this.xw[n.id];
            Vt(r instanceof io);
            const a = this.Nx(i) || this.Hx(i, n);
            return a ? (this.Ux(i, a), this.Bx(n, a, r).then(() => a)) : s();
          }
          Kx(t) {
            return t.__AMP_MEDIA_IS_BLESSED__ ? s() : this.Yx(t, new go());
          }
          reregister(t) {
            return this.register(t, !0);
          }
          register(t, i = !1) {
            const o = t.parentNode;
            if ((o && o.signals && this.Zx(o), this.Cx(t))) {
              if (i) {
                const i = io.removeFrom(this.i, t);
                return (this.xw[t.id] = i), this.qx(t, i);
              }
              return s();
            }
            const n = t;
            n.__AMP_MEDIA_ELEMENT_ORIGIN__ = "placeholder";
            const r = n.id || this.Ox();
            if (this.xw[r] && this.Ex[r]) return s();
            n.id = r;
            const a = io.removeFrom(this.i, n);
            return (
              (this.xw[r] = a),
              (this.Ex[r] = n),
              n instanceof HTMLMediaElement &&
                ((n.muted = !0), n.setAttribute("muted", ""), n.pause()),
              s()
            );
          }
          Zx(t) {
            (this.wx = this.wx || []), this.wx.push(t);
          }
          preload(t) {
            return this.Xx(t).then();
          }
          play(t) {
            return this.Xx(t).then((t) => (t ? this.Yx(t, new lo()) : s()));
          }
          pause(t, i = !1) {
            const o = this.zx(t),
              n = this.Lx(o, t);
            return n
              ? this.Yx(n, new po()).then(() => {
                  i &&
                    this.Re.delay(() => {
                      this.Yx(n, new uo({ currentTime: 0 }));
                    }, 100);
                })
              : s();
          }
          rewindToBeginning(t) {
            return this.setCurrentTime(t, 0);
          }
          setCurrentTime(t, i) {
            const o = this.zx(t),
              n = this.Lx(o, t);
            return n ? this.Yx(n, new uo({ currentTime: i })) : s();
          }
          mute(t) {
            const i = this.zx(t),
              o = this.Lx(i, t);
            if (!o) return s();
            const n = this.Tx[t.id];
            return n && (n.gain.value = 0), this.Yx(o, new co());
          }
          unmute(t) {
            const i = this.zx(t),
              o = this.Lx(i, t);
            if (!o) return s();
            if (i == xo) {
              const i = t.parentElement;
              if (i) {
                const o = parseFloat(i.getAttribute("volume"));
                if (o <= 0 || i.hasAttribute("noaudio")) return s();
                o < 1 && this.Wx(t, o);
              }
            }
            return this.Yx(o, new mo());
          }
          Wx(t, i) {
            if (
              ("function" == typeof AudioContext
                ? (this.vx = this.vx || new AudioContext())
                : "function" == typeof webkitAudioContext &&
                  (this.vx = this.vx || new global.webkitAudioContext()),
              this.vx)
            ) {
              if (!this.Tx[t.id]) {
                const i = this.vx.createMediaElementSource(t),
                  s = this.vx.createGain();
                (this.Tx[t.id] = s), i.connect(s).connect(this.vx.destination);
              }
              this.Tx[t.id].gain.value = i;
            }
          }
          blessAll() {
            if (this.Mx) return s();
            (this.wx || []).forEach(Ao), (this.wx = null);
            const t = [
              ...this.allocated.audio,
              ...this.unallocated.video,
              ...this.allocated.audio,
              ...this.unallocated.video,
            ].map((t) => this.Kx(t));
            return Promise.all(t).then(
              () => {
                this.Mx = !0;
              },
              (t) => {
                kt().expectedError(
                  "AMP-STORY",
                  "Blessing all media failed: ",
                  t
                );
              }
            );
          }
          Jx(t) {
            const i = t.__AMP_MEDIA_ELEMENT_TASKS__;
            if (0 === i.length) return;
            const s = i[0],
              o = () => {
                s.execute(t)
                  .catch((t) => kt().error("AMP-STORY", t))
                  .then(() => {
                    i.shift(), this.Jx(t);
                  });
              };
            s.requiresSynchronousExecution() ? o() : this.Re.delay(o, 0);
          }
          Yx(t, i) {
            t.__AMP_MEDIA_ELEMENT_TASKS__ ||
              (t.__AMP_MEDIA_ELEMENT_TASKS__ = []);
            const s = t.__AMP_MEDIA_ELEMENT_TASKS__,
              o = 0 !== s.length;
            return s.push(i), o || this.Jx(t), i.whenComplete();
          }
          static for(t) {
            const i = t.getElement(),
              s = i.__AMP_MEDIA_POOL_ID__;
            if (s && To[s]) return To[s];
            const o = String(Eo++);
            return (
              (i.__AMP_MEDIA_POOL_ID__ = o),
              (To[o] = new Mo(
                tt(t.getElement()),
                t.getMaxMediaElementCounts(),
                (i) => t.getElementDistance(i)
              )),
              To[o]
            );
          }
        },
        Io = (new Set(["c", "v", "a", "ad"]), self.__AMP_ERRORS || []);
      (self.__AMP_ERRORS = Io), Math.random();
      var Ro = {
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
        ko = class {
          constructor() {
            (this.Qx = []),
              (this.TI = []),
              (this.EI = []),
              (this.xI = []),
              (this.$d = !1);
          }
          getType() {
            return 0;
          }
          addProgressListener(t) {
            this.Qx.push(t);
          }
          addAdvanceListener(t) {
            this.TI.push(t);
          }
          addPreviousListener(t) {
            this.EI.push(t);
          }
          addOnTapNavigationListener(t) {
            this.xI.push(t);
          }
          removeAllAddedListeners() {
            (this.Qx = []), (this.TI = []), (this.EI = []), (this.xI = []);
          }
          start(t) {
            this.$d = !0;
          }
          stop(t) {
            this.$d = !1;
          }
          isAutoAdvance() {
            return !1;
          }
          isRunning() {
            return this.$d;
          }
          getProgress() {
            return 1;
          }
          onProgressUpdate(t) {
            const i = null != t ? t : this.getProgress();
            this.Qx.forEach((t) => {
              t(i);
            });
          }
          onAdvance() {
            this.TI.forEach((t) => {
              t();
            });
          }
          onPrevious() {
            this.EI.forEach((t) => {
              t();
            });
          }
          onTapNavigation(t) {
            this.xI.forEach((i) => {
              i(t);
            });
          }
          static forElement(t, i) {
            const s = Vo.fromElement(t, i);
            if (s) return s;
            const o = i.getAttribute("auto-advance-after");
            if (o) {
              const s = So.fromAutoAdvanceString(o, t, i);
              if (s) return s;
              const n = zo.fromAutoAdvanceString(o, t, i);
              if (n) return n;
            }
            return new ko();
          }
        },
        Vo = class extends ko {
          constructor(t, i) {
            super(),
              (this._n = i),
              (this.MI = null),
              (this.Re = li(t)),
              (this.wI = null),
              (this.RI = !1),
              (this.ji = $t(t.document)),
              this.VI(),
              i.ownerDocument.defaultView &&
                (this._T = Pi(i.ownerDocument.defaultView));
            const s = this._T.get(xi.RTL_STATE);
            this.kI = {
              left: { widthRatio: s ? 0.75 : 0.25, direction: s ? 1 : 2 },
              right: { widthRatio: s ? 0.25 : 0.75, direction: s ? 2 : 1 },
            };
          }
          getType() {
            return 1;
          }
          getProgress() {
            return 1;
          }
          VI() {
            this._n.addEventListener("touchstart", this.SI.bind(this), !0),
              this._n.addEventListener("touchend", this.OI.bind(this), !0),
              this._n.addEventListener("click", this.CI.bind(this), !0),
              this.ji.onVisibilityChanged(() => {
                this.ji.isVisible() && this.zI();
              });
          }
          isAutoAdvance() {
            return !1;
          }
          SI(t) {
            !this.wI &&
              this.NI(t) &&
              ((this.wI = Date.now()),
              (this.RI = this._T.get(xi.PAUSED_STATE)),
              this._T.dispatch(wi, !0),
              (this.MI = this.Re.delay(() => {
                this._T.dispatch(Ti, !1);
              }, 500)));
          }
          OI(t) {
            const i = (t.touches || []).length;
            !this.wI ||
              i > 0 ||
              (Date.now() - this.wI > 500 && t.preventDefault(), this.zI());
          }
          zI() {
            this.wI &&
              (this._T.dispatch(wi, this.RI),
              (this.wI = null),
              this.Re.cancel(this.MI),
              (this.MI = null),
              this._T.get(xi.SYSTEM_UI_IS_VISIBLE_STATE) ||
                this._T.dispatch(Ti, !0));
          }
          LI(t) {
            return !b(
              t.target,
              (t) =>
                (function (t) {
                  return (
                    t.hasAttribute("on") &&
                    !!t.getAttribute("on").match(/(^|;)\s*tap\s*:/)
                  );
                })(t),
              this._n
            );
          }
          DI(t) {
            return !!b(
              t.target,
              (t) => {
                const i = t.getAttribute("role");
                return !!i && !!Ro[i.toLowerCase()];
              },
              this._n
            );
          }
          NI(t) {
            let i,
              s = !1;
            return (
              b(
                t.target,
                (o) => (
                  (i = o.tagName.toLowerCase()),
                  o.classList.contains("amp-story-draggable-drawer-root")
                    ? ((s = !1), !0)
                    : !i.startsWith("amp-story-interactive-") ||
                      (this.UI(t, this.$I()) &&
                        !t.path[0].classList.contains(
                          "i-amphtml-story-interactive-disclaimer-icon"
                        ))
                    ? o.classList.contains(
                        "i-amphtml-story-interactive-disclaimer-dialog-container"
                      )
                      ? ((s = !1), !0)
                      : ("amp-story-page" === i ||
                          "amp-story-subscriptions" === i) &&
                        ((s = !0), !0)
                    : ((s = !1), !0)
                ),
                this._n
              ),
              s
            );
          }
          jI(t, i) {
            let s,
              o = !0;
            const n = t.target,
              r = !!b(
                n,
                (t) => (
                  (s = t.tagName.toLowerCase()),
                  "amp-story-page-attachment" === s ||
                  "amp-story-page-outlink" === s
                    ? ((o = !1), !1)
                    : "amp-story-page" === s && o
                ),
                this._n
              );
            return r && (this.UI(t, i) || this.FI(t, i))
              ? (t.preventDefault(), !1)
              : "auto" === n.getAttribute("show-tooltip") && this.HI(n, i)
              ? (n.setAttribute("target", "_blank"),
                n.setAttribute("role", "link"),
                !1)
              : r;
          }
          HI(t, i) {
            return t.getBoundingClientRect().top - i.top >= 0.8 * i.height;
          }
          UI(t, i) {
            if (0 === t.clientX && 0 === t.clientY) return !1;
            const s = 0.12 * i.width,
              o = Math.max(s, 48);
            return t.clientX <= i.x + o || t.clientX >= i.x + i.width - o;
          }
          FI(t, i) {
            if (0 === t.clientX && 0 === t.clientY) return !1;
            const s = t.target.getBoundingClientRect();
            return (
              (s.height * s.width) / (i.width * i.height) >= 0.8 &&
              (It().error(
                "AMP-STORY-PAGE",
                "Link was too large; skipped for navigation. For more information, see https://github.com/ampproject/amphtml/issues/31108"
              ),
              !0)
            );
          }
          BI(t, i) {
            return v(t.target, Ms()) && this.jI(t, i);
          }
          CI(t) {
            const i = t.target,
              s = this.$I();
            if (this.BI(t, s)) {
              t.stopPropagation(), t.preventDefault();
              const s = this._T.get(xi.INTERACTIVE_COMPONENT_STATE);
              return void this._T.dispatch(18, {
                element: i,
                state: s.state || 1,
                clientX: t.clientX,
                clientY: t.clientY,
              });
            }
            if (!this.isRunning() || !this.LI(t) || this.DI(t) || !this.NI(t))
              return;
            t.stopPropagation(), this._T.dispatch(7, Wi);
            const o = {
              offset: "x" in s ? s.x : s.left,
              width: s.width,
              clickEventX: t.pageX,
            };
            this.onTapNavigation(this.YI(o));
          }
          $I() {
            return 4 !== this._T.get(xi.UI_STATE)
              ? this._n.getLayoutBox()
              : this._n
                  .querySelector("amp-story-page[active]")
                  .getBoundingClientRect();
          }
          YI(t) {
            const { left: i, right: s } = this.kI;
            return t.clickEventX <= t.offset + i.widthRatio * t.width
              ? i.direction
              : s.direction;
          }
          static fromElement(t, i) {
            return "amp-story" !== i.tagName.toLowerCase()
              ? null
              : new Vo(t, i);
          }
        },
        So = class extends ko {
          constructor(t, i, s) {
            super(),
              (this.Re = li(t)),
              i < 500 && (i = 500),
              (this.GI = i),
              (this.WI = null),
              (this.qI = null),
              (this.MI = null),
              s.ownerDocument.defaultView &&
                (this._T = Pi(s.ownerDocument.defaultView));
          }
          getType() {
            return 2;
          }
          XI() {
            return Date.now();
          }
          start(t) {
            if ((super.start(), t)) {
              const i = 1 - t;
              this.WI = this.GI * i;
            }
            this.WI
              ? (this.qI = this.XI() - (this.GI - this.WI))
              : (this.qI = this.XI()),
              (this.MI = this.Re.delay(
                () => this.onAdvance(),
                this.WI || this.GI
              )),
              this.onProgressUpdate(),
              this.Re.poll(
                300,
                () => (this.onProgressUpdate(), !this.isRunning())
              );
          }
          stop(t = !1) {
            super.stop(),
              null !== this.MI && this.Re.cancel(this.MI),
              (this.WI = t ? this.qI + this.GI - this.XI() : null);
          }
          isAutoAdvance() {
            return !0;
          }
          getProgress() {
            if (null === this.qI) return 0;
            const t = this.getProgressMs() / this.GI;
            return Math.min(Math.max(t, 0), 1);
          }
          onAdvance() {
            this._T.dispatch(7, "autoAdvanceTime"), super.onAdvance();
          }
          updateTimeDelay(t) {
            const i = us(t);
            void 0 === i ||
              isNaN(i) ||
              (this.WI && (this.WI += i - this.GI), (this.GI = i));
          }
          getProgressMs() {
            return null === this.qI ? 0 : this.XI() - this.qI;
          }
          getDelayMs() {
            return this.GI;
          }
          static fromAutoAdvanceString(t, i, s) {
            if (!t) return null;
            const o = us(t);
            return void 0 === o || isNaN(o) ? null : new So(i, Number(o), s);
          }
        },
        zo = class extends ko {
          constructor(t, i) {
            super(),
              (this.Re = li(t)),
              (this._n = i),
              (this.KI = null),
              (this.ZI = []),
              (this.JI = null),
              (this.QI = null),
              (this.LM = null),
              (this._T = Pi(t));
          }
          getType() {
            return 3;
          }
          bR() {
            return this._n.classList.contains("i-amphtml-video-interface");
          }
          TR() {
            const t = this._n.tagName.toLowerCase();
            return this._n instanceof HTMLMediaElement
              ? this._n
              : this._n.hasAttribute("background-audio") &&
                "amp-story-page" === t
              ? this._n.querySelector(".i-amphtml-story-background-audio")
              : "amp-audio" === t
              ? this._n.querySelector("audio")
              : null;
          }
          start(t) {
            super.start(),
              (this._n.build ? this._n.build() : s()).then(() => this.ER(t));
          }
          ER(t) {
            this.bR()
              ? this.xR(t)
              : (this.KI || (this.KI = this.TR()),
                this.KI
                  ? this.MR(t)
                  : It().error(
                      "AMP-STORY-PAGE",
                      `Element with ID ${this._n.id} is not a media element supported for automatic advancement.`
                    ));
          }
          MR(t) {
            const i = this.KI;
            this.KI.removeAttribute("loop"),
              this.ZI.push(yi(i, "ended", () => this.onAdvance())),
              this.onProgressUpdate(t),
              this.Re.poll(
                300,
                () => (this.onProgressUpdate(), !this.isRunning())
              );
          }
          xR(t) {
            this._n.getImpl().then((t) => {
              this.LM = t;
            }),
              this._n.querySelector("video").removeAttribute("loop"),
              this.ZI.push(
                yi(this._n, "ended", () => this.onAdvance(), { capture: !0 })
              ),
              this.onProgressUpdate(t),
              this.Re.poll(
                300,
                () => (this.onProgressUpdate(), !this.isRunning())
              );
          }
          stop() {
            super.stop(), this.ZI.forEach((t) => t());
          }
          isAutoAdvance() {
            return !0;
          }
          getProgress() {
            return this.bR()
              ? this.LM && this.LM.getDuration()
                ? this.LM.getCurrentTime() / this.LM.getDuration()
                : 0
              : this.KI && this.KI.duration
              ? this.KI.currentTime / this.KI.duration
              : super.getProgress();
          }
          onAdvance() {
            this._T.dispatch(7, "autoAdvanceMedia"), super.onAdvance();
          }
          static fromAutoAdvanceString(t, i, s) {
            try {
              let o = s.querySelector(
                `amp-video[data-id=${f(t)}], amp-video#${f(
                  t
                )}, amp-audio[data-id=${f(t)}], amp-audio#${f(t)}`
              );
              return (
                v(s, `amp-story-page[background-audio]#${f(t)}`) && (o = s),
                o ? new zo(i, o) : null
              );
            } catch (t) {
              return null;
            }
          }
        };
      function Oo(t) {
        return (t = t.trim()).startsWith("WEBVTT")
          ? (function (t) {
              const i = /^\d\d\:\d\d/;
              let s = !1;
              t = t
                .split(/[\n\r]+/)
                .filter((t) => {
                  const o = i.test(t);
                  return (s = s || o), !(!s || o || /^NOTE\s+/.test(t));
                })
                .map((t) => t.replace(/^- /, ""))
                .join(" ");
              const o = vt("template", null);
              if (self.trustedTypes && self.trustedTypes.createPolicy) {
                const i = self.trustedTypes.createPolicy(
                  "semantic-render#extractTextContentWebVtt",
                  {
                    createHTML: function (i) {
                      return t;
                    },
                  }
                );
                o.innerHTML = i.createHTML("ignored");
              } else o.innerHTML = t;
              return o.content.textContent;
            })(t)
          : ("number" != typeof s && (s = 0),
            s + "http://www.w3.org/ns/ttml".length > (i = t).length ||
            -1 === i.indexOf("http://www.w3.org/ns/ttml", s)
              ? ""
              : (function (t) {
                  try {
                    return new DOMParser()
                      .parseFromString(t, "text/xml")
                      .querySelector("body")
                      .textContent.replace(/[\s\n\r]+/g, " ")
                      .trim();
                  } catch (t) {
                    kt().error("TTML", t.message);
                  }
                  return "";
                })(t));
        var i, s;
      }
      var Co = "a, amp-twitter > iframe",
        No = "amp-story-page",
        Lo = "next",
        Do = "previous",
        Uo = class extends t.BaseElement {
          static prerenderAllowed(t) {
            return it(t);
          }
          static previewAllowed() {
            return !0;
          }
          constructor(t) {
            super(t),
              (this.Be = mi(this.element)),
              (this.wR = null),
              (this.IR = null),
              (this.RR = At(this.win, (t) => this.VR(!!t), 100)),
              (this.kR = (function (t) {
                let i = !1,
                  s = null,
                  o = t;
                return (...t) => (
                  i || ((s = o.apply(self, t)), (i = !0), (o = null)), s
                );
              })(() => this.SR())),
              (this.OR = null),
              (this.CR = null);
            const i = new o();
            (this.zR = v(this.element, "amp-story-page:first-of-type")),
              (this.NR = ((t) => {
                let i = ((t) => Ct(t, "media-performance-metrics"))(t);
                return (
                  i ||
                    ((i = new (class {
                      constructor(t) {
                        (this.LR = new WeakMap()), (this.DR = ai(t));
                      }
                      isPerformanceTrackingOn() {
                        return this.DR.isPerformanceTrackingOn();
                      }
                      startMeasuring(t) {
                        if (!t.paused)
                          return void kt().expectedError(
                            "media-performance-metrics",
                            "media must start paused"
                          );
                        const i = this.UR(t),
                          s = this.$R(t, i);
                        this.LR.set(t, s),
                          (t.error ||
                            t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc) &&
                            ((s.metrics.error = t.error ? t.error.code : 0),
                            (s.status = 0));
                      }
                      stopMeasuring(t, i = !0) {
                        const s = this.LR.get(t);
                        if (s) {
                          switch (
                            (s.unlisteners.forEach((t) => t()),
                            this.LR.delete(t),
                            s.status)
                          ) {
                            case 2:
                              this.jR(s);
                              break;
                            case 3:
                              this.FR(s);
                          }
                          i && this.HR(s);
                        }
                      }
                      HR(t) {
                        const { media: i, metrics: s } = t;
                        if (
                          (this.DR.tickDelta(rs, this.BR(i)),
                          this.DR.tickDelta(
                            "vofp",
                            v(i, `amp-story-page:first-of-type ${i.tagName}`)
                              ? 1
                              : 0
                          ),
                          null !== s.error)
                        )
                          return (
                            this.DR.tickDelta(as, s.error || 0),
                            void this.DR.flush()
                          );
                        if (
                          !s.jointLatency &&
                          Date.now() - t.timeStamps.start < 1e3
                        )
                          return;
                        if (!s.jointLatency)
                          return this.DR.tickDelta(as, 5), void this.DR.flush();
                        const o = Math.round(
                          (s.rebufferTime / (s.rebufferTime + s.watchTime)) *
                            100
                        );
                        this.DR.tickDelta("vjl", s.jointLatency),
                          this.DR.tickDelta("vwt", s.watchTime),
                          this.DR.tickDelta("vrb", s.rebuffers),
                          this.DR.tickDelta("vrbr", o),
                          s.rebuffers &&
                            this.DR.tickDelta(
                              "vmtbrb",
                              Math.round(s.watchTime / s.rebuffers)
                            ),
                          this.DR.flush();
                      }
                      $R(t, i) {
                        return {
                          media: t,
                          status: 1,
                          unlisteners: i,
                          timeStamps: {
                            start: Date.now(),
                            playing: 0,
                            waiting: 0,
                          },
                          metrics: {
                            error: null,
                            jointLatency: 0,
                            meanTimeBetweenRebuffers: 0,
                            rebuffers: 0,
                            rebufferTime: 0,
                            watchTime: 0,
                          },
                        };
                      }
                      jR(t) {
                        t.metrics.watchTime +=
                          Date.now() - t.timeStamps.playing;
                      }
                      FR(t) {
                        const i = Date.now() - t.timeStamps.waiting;
                        i > 250 &&
                          (t.metrics.rebuffers++,
                          (t.metrics.rebufferTime += i));
                      }
                      UR(t) {
                        const i = [
                          fi(t, "ended", this.YR.bind(this)),
                          fi(t, "pause", this.YR.bind(this)),
                          fi(t, "playing", this.GR.bind(this)),
                          fi(t, "waiting", this.WR.bind(this)),
                        ];
                        let s = t;
                        return (
                          t.hasAttribute("src") ||
                            (s = P(t, (t) => "SOURCE" === t.tagName)),
                          i.push(fi(s || t, "error", this.qR.bind(this))),
                          i
                        );
                      }
                      qR(t) {
                        const i =
                            "SOURCE" === t.target.tagName
                              ? t.target.parent
                              : t.target,
                          s = this.LR.get(i);
                        (s.metrics.error = i.error ? i.error.code : 0),
                          (s.status = 0);
                      }
                      YR(t) {
                        const i = this.LR.get(t.target);
                        2 === i.status && this.jR(i), (i.status = 1);
                      }
                      GR(t) {
                        const i = this.LR.get(t.target),
                          { metrics: s, timeStamps: o } = i;
                        s.jointLatency ||
                          (s.jointLatency = Date.now() - o.start),
                          3 === i.status && this.FR(i),
                          (o.playing = Date.now()),
                          (i.status = 2);
                      }
                      WR(t) {
                        const i = this.LR.get(t.target),
                          { timeStamps: s } = i;
                        2 === i.status && this.jR(i),
                          (s.waiting = Date.now()),
                          (i.status = 3);
                      }
                      BR(t) {
                        let i = !1;
                        const s = r(t.querySelectorAll("source"));
                        for (const o of s) {
                          const s = o.hasAttribute(
                            "i-amphtml-video-cached-source"
                          );
                          if (s && t.currentSrc === o.src) return 2;
                          s && (i = !0);
                        }
                        return i ? 1 : 0;
                      }
                    })(t)),
                    zt(t, "media-performance-metrics", function () {
                      return i;
                    })),
                  i
                );
              })(this.win)),
              (this.XR = []),
              (this.KR = null),
              (this.ZR = i.promise),
              (this.JR = i.resolve),
              (this.QR = i.reject),
              (this.Ri = 0),
              (this._T = Pi(this.win)),
              (this.A_ = []),
              (this.tV = new o()),
              (this.iV = ei(this.win).isBot()),
              (this.sV = null),
              (this.nV = this.element.getAttribute("auto-advance-after")),
              (this.D = this.getAmpDoc().getVisibilityState()),
              this.getAmpDoc().onVisibilityChanged(() => this.bo());
          }
          eV() {
            this.wR ||
              (y(
                this.element,
                "[animate-in],>amp-story-animation,amp-bodymovin-animation"
              ) &&
                (this.wR = Zs.create(
                  this.element,
                  this.getAmpDoc(),
                  this.getAmpDoc().getUrl()
                )));
          }
          oV() {
            const t = this.element.querySelector("amp-story-cta-layer");
            if (!t) return;
            const i = t.querySelectorAll("a");
            1 === i.length &&
              i[0].getAttribute("href") &&
              (ht(t),
              this.element.appendChild(
                vt(
                  "amp-story-page-outlink",
                  { layout: "nodisplay" },
                  vt("a", { href: i[0].getAttribute("href") }, i[0].textContent)
                )
              ));
          }
          buildCallback() {
            this.delegateVideoAutoplay(),
              this.rV(),
              this.Rx(),
              this.eV(),
              this.aV(),
              this.hV(),
              this._T.subscribe(xi.UI_STATE, (t) => this.lV(t), !0),
              this.pV(),
              this.element.setAttribute("role", "region"),
              this.mV(),
              this.cV(),
              this.maybeApplyFirstAnimationFrameOrFinish(),
              this.oV();
          }
          bo() {
            const t = this.getAmpDoc(),
              i = this.D === rt && t.isVisible();
            (this.D = t.getVisibilityState()),
              (t.isPreview() || t.isVisible()) && this.aV(i);
          }
          aV(t = !1) {
            this.getAmpDoc().isPreview()
              ? (this.uV(), this.dV())
              : this.getAmpDoc().isVisible() &&
                (this.fV(),
                this._V(),
                this.isActive() && t ? this.gV() : this.dV());
          }
          uV() {
            let t = this.yV();
            const i = this.AV();
            if (!i)
              return void this.element.setAttribute(
                "auto-advance-after",
                t + "s"
              );
            const s = this.PV();
            s > 0 && (t = Math.min(s, t)),
              this.element.setAttribute("auto-advance-after", t + "s"),
              dt(i)
                .then(() => i.getImpl())
                .then((s) => {
                  this.loadPromise(i).then(() => {
                    const o = s.getDuration() < t,
                      n = i.querySelector("video");
                    n.loop || (n.loop = o);
                  });
                });
          }
          yV() {
            const t = this.Be.getParam("previewSecondsPerPage"),
              i = parseInt(t, 10);
            return isNaN(i) || i <= 0 ? 5 : i;
          }
          PV() {
            const t = this.getAmpDoc().getMetaByName("robots"),
              i = null == t ? void 0 : t.match(/max-video-preview[^,]*/)[0];
            return parseInt(null == i ? void 0 : i.split(":")[1], 10);
          }
          fV() {
            this.nV
              ? this.element.setAttribute("auto-advance-after", this.nV)
              : this.element.removeAttribute("auto-advance-after");
          }
          gV() {
            var t;
            u(
              2 ===
                (null === (t = this.IR) || void 0 === t ? void 0 : t.getType())
            );
            const i = this.IR.getProgress(),
              s = this.IR.getProgressMs();
            switch ((this.dV(), this.IR.getType())) {
              case 0:
                this.bV(1), this.IR.start();
                break;
              case 3:
                this.IR.start(i);
                break;
              case 2:
                this.IR.start(s / this.IR.getDelayMs());
            }
          }
          dV() {
            var t;
            null === (t = this.IR) ||
              void 0 === t ||
              t.removeAllAddedListeners(),
              (this.IR = ko.forElement(this.win, this.element)),
              this.IR.addPreviousListener(() => this.previous()),
              this.IR.addAdvanceListener(() => this.next(!0)),
              this.IR.addProgressListener((t) => this.bV(t));
          }
          _V() {
            const t = this.element.getAttribute("auto-advance-after"),
              i = mi(this.element).getParam("storyNextUp");
            null === t &&
              null !== i &&
              (this.element.setAttribute("auto-advance-after", i), this.vV());
          }
          vV() {
            const t = this.AV();
            null !== t &&
              dt(t)
                .then(() => t.getImpl())
                .then((i) => {
                  const s = i.getDuration();
                  isNaN(s)
                    ? yi(t, "loadedmetadata", () => {
                        this.TV(i.getDuration());
                      })
                    : this.TV(s);
                });
          }
          TV(t) {
            t < 2 ||
              !this.IR ||
              !this.IR.updateTimeDelay ||
              (this.IR.updateTimeDelay(t + "s"),
              this.element.setAttribute("auto-advance-after", t + "s"));
          }
          AV() {
            const t = this.EV();
            return 0 === t.length ? null : t[0];
          }
          delegateVideoAutoplay() {
            this.element.querySelectorAll("amp-video").forEach(bo);
          }
          Rx() {
            const t = A(this.element, "amp-story");
            dt(t)
              .then(() => t.getImpl())
              .then(
                (t) => this.JR(Mo.for(t)),
                (t) => this.QR(t)
              );
          }
          rV() {
            this.element
              .querySelectorAll("amp-audio, amp-video")
              .forEach((t) => {
                t.setAttribute("preload", "auto");
              });
          }
          isLayoutSupported(t) {
            return t == q;
          }
          setState(t) {
            var i;
            switch (t) {
              case 0:
                this.element.removeAttribute("active"),
                  this.cw(),
                  (this.Ri = t);
                break;
              case 1:
                var s;
                0 === this.Ri &&
                  (this.element.setAttribute("active", ""), this.xV()),
                  2 === this.Ri &&
                    (this.IR.start(),
                    this.MV(),
                    null === (s = this.wR) || void 0 === s || s.resumeAll()),
                  (this.Ri = t);
                break;
              case 2:
                this.IR.stop(!0),
                  this.wV(!1),
                  null === (i = this.wR) || void 0 === i || i.pauseAll(),
                  (this.Ri = t);
            }
          }
          cw() {
            var t;
            this.IR.stop(!1),
              this.IV(),
              this.RV(),
              this.VV(!1),
              this.kV(!1),
              (this.sV = null),
              this.wV(!0),
              this._T.get(xi.MUTED_STATE) || this.muteAllMedia(),
              null === (t = this.wR) || void 0 === t || t.cancelAll();
          }
          xV() {
            const t = this.SV();
            this.isActive() &&
              (t
                .then(() => {
                  0 !== this.Ri &&
                    (this.signals()
                      .whenSignal(nt)
                      .then(() => {
                        1 == this.Ri && this.IR.start();
                      }),
                    this.OV().then(() => {
                      0 !== this.Ri &&
                        (this.CV(),
                        this.zV(),
                        this.MV().then(() => {
                          this._T.get(xi.MUTED_STATE) ||
                            0 === this.Ri ||
                            this.unmuteAllMedia();
                        }),
                        this.NV(this._T.get(xi.CAPTIONS_STATE)));
                    }));
                })
                .then(() => {
                  if (this.getAmpDoc().isPreview())
                    return this.LV().then(() => this.DV());
                }),
              this.UV(),
              this.$V(),
              this.jV(),
              this.FV(),
              this.HV());
          }
          DV() {
            const t = this.BV().filter((t) => t.readyState < 2);
            return this.ZR.then((i) => {
              const s = t.map((t) =>
                this.YV(i, t).then(() => (this.VV(!1), this.GV(i, t)))
              );
              return Promise.all(s);
            });
          }
          layoutCallback() {
            const t =
              this.element.getAttribute("id") !==
              this.element.getAttribute("auto-advance-after");
            return (
              to(this.element, t),
              this.tV.resolve(),
              this.muteAllMedia(),
              this.WV(),
              this.qV(),
              Promise.all([this.XV().then(() => this.KV()), this.ZR])
            );
          }
          onLayoutMeasure() {
            const { height: t, width: i } = this.getLayoutSize();
            this.zR &&
              0 !== t &&
              0 !== i &&
              this._T.dispatch(12, { height: t, width: i });
          }
          lV(t) {
            3 === t && this.ZV();
          }
          XV() {
            const t = r(
              this.JV(
                "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-grid-layer amp-img, amp-story-grid-layer amp-anim"
              )
            ).map(
              (t) =>
                new Promise((i) => {
                  switch (t.tagName.toLowerCase()) {
                    case "amp-anim":
                    case "amp-img":
                    case "amp-story-360":
                      if (t.hasAttribute("fallback")) return void i();
                      dt(t)
                        .then((t) => t.signals().whenSignal(nt))
                        .then(i, i);
                      break;
                    case "amp-audio":
                    case "amp-video":
                      const s = t.querySelector("audio, video");
                      if (s && s.readyState >= 2) return void i();
                      t.addEventListener("canplay", i, !0);
                      break;
                    default:
                      i();
                  }
                  t.addEventListener("error", i, !0);
                })
            );
            return Promise.all(t);
          }
          QV() {
            return this.pk(!0);
          }
          LV() {
            return this.pk(!1);
          }
          pk(t) {
            const i = r(
              this.JV(
                "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video"
              )
            ).map(
              (i) =>
                new Promise((s) => {
                  switch (i.tagName.toLowerCase()) {
                    case "amp-audio":
                    case "amp-video":
                      const o = t ? "load-start" : nt,
                        n = i.getAttribute("layout") === W ? "built" : o;
                      dt(i)
                        .then((t) => t.signals().whenSignal(n))
                        .then(s, s);
                      break;
                    default:
                      s();
                  }
                })
            );
            return (
              this.element.hasAttribute("background-audio") &&
                i.push(this.tV.promise),
              Promise.all(i)
            );
          }
          mk() {
            const t = this.EV().map((t) => dt(t).then((t) => t.whenBuilt()));
            return Promise.all(t);
          }
          HV() {
            this.fk();
          }
          fk() {
            const t = r(_(this.element, Object.keys(Ts).join(",")));
            t.length <= 0 ||
              this.mutateElement(() => {
                t.forEach((t) => {
                  t.classList.add("i-amphtml-embedded-component");
                });
              });
          }
          KV() {
            Ci(this.win, this.element, "ampstory:pageload", void 0, {
              bubbles: !0,
            }),
              this.mutateElement(() => {
                this.element.classList.add("i-amphtml-story-page-loaded");
              });
          }
          _k() {
            return this.JV(
              "> audio, amp-story-grid-layer audio, amp-story-grid-layer video"
            );
          }
          BV() {
            return this.JV("amp-story-grid-layer video");
          }
          EV() {
            return this.JV("amp-story-grid-layer amp-video");
          }
          JV(t) {
            const i = this.element.querySelector("iframe"),
              s =
                i &&
                (function (t) {
                  return t.__AMP_EMBED__;
                })(i),
              o = [];
            return (
              _(this.element, t).forEach((t) => o.push(t)),
              s &&
                _(
                  s.win.document.body,
                  t.replace(/amp-story-grid-layer/g, "")
                ).forEach((t) => o.push(t)),
              o
            );
          }
          gk() {
            return (
              null == (t = this.win).__AMP_AUTOPLAY &&
                (t.__AMP_AUTOPLAY = (function (t) {
                  const i = t.document.createElement("video");
                  var s;
                  return (
                    i.setAttribute("muted", ""),
                    i.setAttribute("playsinline", ""),
                    i.setAttribute("webkit-playsinline", ""),
                    i.setAttribute("height", "0"),
                    i.setAttribute("width", "0"),
                    (i.muted = !0),
                    (i.playsInline = !0),
                    (i.playsinline = !0),
                    (i.webkitPlaysinline = !0),
                    N(i, {
                      position: "fixed",
                      top: "0",
                      width: "0",
                      height: "0",
                      opacity: "0",
                    }),
                    (s = i),
                    n(() => s.play()).catch(() => {}),
                    Promise.resolve(!i.paused)
                  );
                })(t)),
              t.__AMP_AUTOPLAY
            );
            var t;
          }
          yk(t) {
            const i = r(this._k());
            return this.ZR.then((s) => {
              const o = i.map((i) => t(s, i));
              return Promise.all(o);
            });
          }
          wV(t = !1) {
            return this.yk((i, s) => this.Ak(i, s, t));
          }
          Ak(t, i, o) {
            return this.iV ? (i.pause(), s()) : t.pause(i, o);
          }
          MV() {
            return this.yk((t, i) => this.GV(t, i));
          }
          GV(t, i) {
            return this.iV
              ? (bt(i), s())
              : this.loadPromise(i).then(
                  () =>
                    t.play(i).catch((t) => {
                      "VIDEO" === i.tagName &&
                        (this.RR(!1),
                        this.gk().then((t) => {
                          t ? this.VV(!0) : (this.IV(!1), this.kV(!0));
                        })),
                        "AUDIO" === i.tagName && (this.sV = Date.now());
                    }),
                  () => {
                    this.RR(!1), this.VV(!0);
                  }
                );
          }
          OV() {
            return this.yk((t, i) => this.Pk(t, i));
          }
          Pk(t, i) {
            return this.iV ? s() : t.preload(i);
          }
          muteAllMedia() {
            return this.yk((t, i) => {
              this.bk(t, i);
            });
          }
          bk(t, i) {
            return this.iV
              ? ((i.muted = !0), i.setAttribute("muted", ""), s())
              : t.mute(i);
          }
          unmuteAllMedia() {
            return this.yk((t, i) => {
              this.vk(t, i);
            });
          }
          vk(t, i) {
            if (this.iV)
              return (
                (i.muted = !1),
                i.removeAttribute("muted"),
                "AUDIO" === i.tagName && i.paused && bt(i),
                s()
              );
            {
              i = i;
              const s = [t.unmute(i)];
              if ("AUDIO" === i.tagName && i.paused && this.sV) {
                const o = (Date.now() - this.sV) / 1e3;
                (i.hasAttribute("loop") || o < i.duration) &&
                  (s.push(t.setCurrentTime(i, o % i.duration)),
                  s.push(t.play(i))),
                  (this.sV = null);
              }
              return Promise.all(s);
            }
          }
          SV() {
            if (!this.KR) {
              const t = this.getAmpDoc().isPreview() ? this.QV() : this.LV();
              this.KR = t.then(() => this.yk((t, i) => this.Tk(t, i)));
            }
            return this.KR;
          }
          Tk(t, i) {
            return this.iV ? s() : t.register(i);
          }
          YV(t, i) {
            return this.iV ? s() : t.reregister(i);
          }
          UV() {
            this.wR && this.wR.animateIn();
          }
          ZV() {
            this.wR &&
              this.signals()
                .whenSignal(nt)
                .then(() => this.wR.applyLastFrame());
          }
          maybeApplyFirstAnimationFrameOrFinish() {
            var t;
            return Promise.resolve(
              null === (t = this.wR) || void 0 === t
                ? void 0
                : t.applyFirstFrameOrFinish()
            );
          }
          getDistance() {
            return parseInt(this.element.getAttribute("distance"), 10);
          }
          setDistance(t) {
            if ((this.isAd() && (t = Math.min(t, 2)), t == this.getDistance()))
              return;
            this.element.setAttribute("distance", t),
              this.element.setAttribute("aria-hidden", 0 != t);
            const i = this.SV();
            t > 0 && t <= 2 && (this.HV(), i.then(() => this.OV())),
              this.Ek(0 == t);
          }
          isActive() {
            return this.element.hasAttribute("active");
          }
          bV(t) {
            const i = Xt(this.win, Kt);
            if (((!i || i == Zt) && this.isAd()) || 0 === this.Ri) return;
            const s = { pageId: this.element.id, progress: t };
            Ci(this.win, this.element, Vi, s, { bubbles: !0 });
          }
          getAdjacentPageIds() {
            const t = qt(this.win, "amp-story-branching") ? this.hP() : [],
              i = this.getNextPageId(!0),
              s = this.getNextPageId(!1),
              o = this.getPreviousPageId();
            return i && t.push(i), s && s != i && t.push(s), o && t.push(o), t;
          }
          getPreviousPageId() {
            if (this.element.hasAttribute("i-amphtml-return-to"))
              return this.element.getAttribute("i-amphtml-return-to");
            const t = this._T.get(xi.NAVIGATION_PATH),
              i = t.lastIndexOf(this.element.id),
              s = t[i - 1];
            if (s) return s;
            const o = this.element.previousElementSibling;
            return o && o.tagName.toLowerCase() === No ? o.id : null;
          }
          getNextPageId(t = !1) {
            if (t && this.element.hasAttribute("auto-advance-to"))
              return this.element.getAttribute("auto-advance-to");
            const i = qt(this.win, "amp-story-branching")
              ? "advance-to"
              : "i-amphtml-advance-to";
            if (this.element.hasAttribute(i))
              return this.element.getAttribute(i);
            const s = this.element.nextElementSibling;
            return s && s.tagName.toLowerCase() === No ? s.id : null;
          }
          hP() {
            return Array.prototype.slice
              .call(this.element.querySelectorAll("[on*=goToPage]"))
              .map((t) => t.getAttribute("on"))
              .reduce(
                (t, i) => (
                  i.split(/[;,]+/).forEach((i) => {
                    i.indexOf("goToPage") >= 0 &&
                      t.push(i.slice(i.search("=(.*)") + 1, -1));
                  }),
                  t
                ),
                []
              );
          }
          previous() {
            const t = this.getPreviousPageId();
            null !== t
              ? (this._T.dispatch(wi, !1), this.xk(t, Do))
              : Ci(this.win, this.element, Oi, void 0, { bubbles: !0 });
          }
          next(t = !1) {
            const i = this.getNextPageId(t);
            i
              ? (this._T.dispatch(wi, !1), this.xk(i, Lo))
              : Ci(this.win, this.element, zi, void 0, { bubbles: !0 });
          }
          xk(t, i) {
            const s = { targetPageId: t, direction: i };
            Ci(this.win, this.element, Ii, s, { bubbles: !0 });
          }
          $V() {
            (this.element.hasAttribute("background-audio") ||
            this.element.querySelector("amp-audio")
              ? Promise.resolve(!0)
              : this.Mk()
            ).then((t) => this._T.dispatch(22, t));
          }
          Mk() {
            return this.mk().then(() =>
              Array.prototype.some.call(
                this.EV(),
                (t) =>
                  !t.hasAttribute("noaudio") &&
                  0 !== parseFloat(t.getAttribute("volume"))
              )
            );
          }
          wk() {
            return this.mk().then(() =>
              Array.prototype.some.call(this.EV(), (t) =>
                t.querySelector("track")
              )
            );
          }
          FV() {
            const t =
              this.isAutoAdvance() ||
              this.element.hasAttribute("background-audio") ||
              this._k().length > 0;
            this._T.dispatch(25, t);
          }
          jV() {
            this.wk().then((t) => {
              this._T.dispatch(23, t);
            });
          }
          CV() {
            if (!this.NR.isPerformanceTrackingOn()) return;
            const t = this.BV();
            for (let i = 0; i < t.length; i++) this.Ik(t[i]);
          }
          Ik(t) {
            this.NR.isPerformanceTrackingOn() &&
              (this.XR.push(t), this.NR.startMeasuring(t));
          }
          IV(t = !0) {
            if (this.NR.isPerformanceTrackingOn())
              for (let i = 0; i < this.XR.length; i++)
                this.NR.stopMeasuring(this.XR[i], t);
          }
          zV() {
            const t = this.BV();
            t.length && (t.some((t) => 0 != t.currentTime) || this.RR(!0)),
              t.forEach((t) => {
                this.A_.push(fi(t, "playing", () => this.RR(!1))),
                  this.A_.push(fi(t, "waiting", () => this.RR(!0)));
              });
          }
          RV() {
            this.RR(!1), this.A_.forEach((t) => t()), (this.A_ = []);
          }
          SR() {
            const t = vt(
              "div",
              { class: "i-amphtml-story-spinner", "aria-hidden": "true" },
              vt(
                "div",
                { class: "i-amphtml-story-spinner-container" },
                vt(
                  "div",
                  { class: "i-amphtml-story-spinner-layer" },
                  vt("div", {
                    class: "i-amphtml-story-spinner-circle-clipper left",
                  }),
                  vt("div", {
                    class: "i-amphtml-story-spinner-circle-clipper right",
                  })
                )
              )
            );
            return (
              t.setAttribute("aria-label", "Loading video"),
              this.element.appendChild(t)
            );
          }
          VR(t) {
            this.mutateElement(() => {
              !(function (t, i) {
                i !== t.hasAttribute("active") &&
                  (t.setAttribute("aria-hidden", String(!i)),
                  i
                    ? t.setAttribute("active", "")
                    : t.removeAttribute("active"));
              })(this.kR(), t);
            });
          }
          Rk() {
            (this.OR = vt(
              "button",
              {
                role: "button",
                class:
                  "i-amphtml-story-page-play-button i-amphtml-story-system-reset",
                onClick: () => {
                  this.kV(!1),
                    this.CV(),
                    this.ZR.then((t) => t.blessAll()).then(() => this.MV());
                },
              },
              vt("span", {
                class: "i-amphtml-story-page-play-label",
                "i-amphtml-i18n-text-content": "34",
              }),
              vt("span", { class: "i-amphtml-story-page-play-icon" })
            )),
              Os(this.OR, this.element).then(() =>
                this.mutateElement(() => this.element.appendChild(this.OR))
              );
          }
          kV(t) {
            t
              ? (this.OR || this.Rk(), this.mutateElement(() => L(this.OR, !0)))
              : this.OR && this.mutateElement(() => L(this.OR, !1));
          }
          Vk() {
            (this.CR = vt(
              "div",
              {
                class:
                  "i-amphtml-story-page-error i-amphtml-story-system-reset",
              },
              vt("span", {
                class: "i-amphtml-story-page-error-label",
                "i-amphtml-i18n-text-content": "65",
              }),
              vt("span", { class: "i-amphtml-story-page-error-icon" })
            )),
              Os(this.CR, this.element).then(() =>
                this.mutateElement(() => this.element.appendChild(this.CR))
              );
          }
          VV(t) {
            t
              ? (this.CR || this.Vk(), this.mutateElement(() => L(this.CR, !0)))
              : this.CR && this.mutateElement(() => L(this.CR, !1));
          }
          WV() {
            this.element.querySelector(
              "amp-story-page-attachment, amp-story-page-outlink, amp-story-shopping-attachment"
            ) &&
              ni(this.win).installExtensionForDoc(
                this.getAmpDoc(),
                "amp-story-page-attachment",
                "0.1"
              );
          }
          isAd() {
            return this.element.hasAttribute("ad");
          }
          hV() {
            _(this.element, "[data-text-background-color]").forEach((t) => {
              const i = t.getAttribute("data-text-background-color");
              C(t, "background-color", i);
            });
          }
          pV() {
            this.iV &&
              (function (t, i) {
                const o = `i-amphtml-story-${t.element.id}-description`,
                  n = vt("div", {
                    class: "i-amphtml-story-page-description",
                    id: o,
                  }),
                  r = (i, s) => {
                    if (!s) return;
                    const r = t.win.document.createElement(i);
                    (r.textContent = s),
                      ((i) => {
                        t.mutateElement(() => {
                          n.appendChild(i),
                            n.parentNode ||
                              (t.element.parentElement.insertBefore(
                                n,
                                t.element.nextElementSibling
                              ),
                              t.element.getAttribute("aria-labelledby") ||
                                t.element.setAttribute("aria-labelledby", o));
                        });
                      })(r);
                  };
                r("h2", t.element.getAttribute("title")),
                  i.forEach((i) => {
                    r("p", i.getAttribute("alt")),
                      r("p", i.getAttribute("title")),
                      r("p", i.getAttribute("aria-label")),
                      (function (t, i) {
                        const o =
                          i.querySelector("track[default]") ||
                          i.querySelector("track");
                        return o && o.src
                          ? ui(t.win)
                              .fetchText(o.src, { mode: "cors" })
                              .then((t) => {
                                if (t.ok) return t.text().then(Oo);
                              })
                          : s();
                      })(t, i).then((t) => {
                        r("p", t);
                      });
                  });
              })(this, this.EV()),
              !this.iV &&
                this.element.hasAttribute("title") &&
                (this.element.getAttribute("aria-label") ||
                  this.element.setAttribute(
                    "aria-label",
                    this.element.getAttribute("title")
                  ),
                this.element.removeAttribute("title"));
          }
          mV() {
            r(this.element.querySelectorAll("amp-img")).forEach((t) => {
              if (!t.getAttribute("alt")) {
                t.setAttribute("alt", "");
                const i = t.querySelector("img");
                i &&
                  t.getImpl().then((t) =>
                    (function (t, i, s, o) {
                      const n = a("alt") ? "alt" : ["alt"];
                      for (const t of n) {
                        const o = i.getAttribute(t);
                        null !== o && s.setAttribute(t, o);
                      }
                    })(0, t.element, i)
                  );
              }
            });
          }
          isAutoAdvance() {
            return this.IR.isAutoAdvance();
          }
          cV() {
            r(_(this.element, Co)).forEach((t) => {
              t.setAttribute(
                "i-amphtml-orig-tabindex",
                t.getAttribute("tabindex") || 0
              );
            });
          }
          Ek(t) {
            r(_(this.element, Co)).forEach((i) => {
              i.setAttribute(
                "tabindex",
                t ? i.getAttribute("i-amphtml-orig-tabindex") : -1
              );
            });
          }
          qV() {
            this.wk().then((t) => {
              t &&
                this._T.subscribe(
                  xi.CAPTIONS_STATE,
                  (t) => {
                    this.isActive() && this.NV(t);
                  },
                  !0
                );
            });
          }
          NV(t) {
            return this.EV().map((i) =>
              i.getImpl().then((i) => {
                i.toggleCaptions && i.toggleCaptions(t);
              })
            );
          }
        };
      function $o(t) {
        try {
          return t.state;
        } catch (t) {
          return null;
        }
      }
      var jo = "amp-story-consent",
        Fo = { externalLink: {}, onlyAccept: !1 },
        Ho = class extends t.BaseElement {
          constructor(t) {
            super(t),
              (this.hP = null),
              (this.kk = null),
              (this._T = Pi(this.win)),
              (this.Sk = null),
              (this.Ok = null);
          }
          buildCallback() {
            (this.hP = si(this.element)), this.Ck();
            const t = A(this.element, "AMP-CONSENT").id;
            this.zk(t);
            const i = bs(this.element, "publisher-logo-src");
            if (this.Sk) {
              this.Ok = ((t, i, s) => {
                var o, n;
                return vt(
                  "div",
                  {
                    class:
                      "i-amphtml-story-consent i-amphtml-story-system-reset",
                  },
                  vt(
                    "div",
                    { class: "i-amphtml-story-consent-overflow" },
                    vt(
                      "div",
                      { class: "i-amphtml-story-consent-container" },
                      vt(
                        "div",
                        { class: "i-amphtml-story-consent-header" },
                        vt("div", {
                          class: "i-amphtml-story-consent-logo",
                          style:
                            s &&
                            ("background-image",
                            (n = `url('${s}') !important`),
                            !0,
                            null == n || "" === n
                              ? ""
                              : `background-image:${
                                  "number" == typeof n ? `${n}px` : n
                                };`),
                        })
                      ),
                      vt(
                        "div",
                        { class: "i-amphtml-story-consent-content" },
                        vt("h3", null, t.title),
                        vt("p", null, t.message),
                        vt(
                          "ul",
                          { class: "i-amphtml-story-consent-vendors" },
                          null === (o = t.vendors) || void 0 === o
                            ? void 0
                            : o.map((t) =>
                                vt(
                                  "li",
                                  { class: "i-amphtml-story-consent-vendor" },
                                  t
                                )
                              )
                        ),
                        vt(
                          "a",
                          {
                            class:
                              "i-amphtml-story-consent-external-link" +
                              (t.externalLink.title && t.externalLink.href
                                ? ""
                                : " i-amphtml-hidden"),
                            href: t.externalLink.href,
                            target: "_top",
                            title: t.externalLink.title,
                          },
                          t.externalLink.title
                        )
                      )
                    ),
                    vt(
                      "div",
                      { class: "i-amphtml-story-consent-actions" },
                      vt("button", {
                        class:
                          "i-amphtml-story-consent-action i-amphtml-story-consent-action-reject" +
                          (!0 === t.onlyAccept ? " i-amphtml-hidden" : ""),
                        on: `tap:${i}.reject`,
                        "i-amphtml-i18n-text-content": "23",
                      }),
                      vt("button", {
                        class:
                          "i-amphtml-story-consent-action i-amphtml-story-consent-action-accept",
                        on: `tap:${i}.accept`,
                        "i-amphtml-i18n-text-content": "22",
                      })
                    )
                  )
                );
              })(this.Sk, t, i);
              const s = [
                { tagOrTarget: "AMP-CONSENT", method: "accept" },
                { tagOrTarget: "AMP-CONSENT", method: "prompt" },
                { tagOrTarget: "AMP-CONSENT", method: "reject" },
              ];
              return (
                this._T.dispatch(5, s),
                Os(this.Ok, this.element).then(() => {
                  gs(
                    this.element,
                    this.Ok,
                    ':host{all:initial!important;color:initial!important}.i-amphtml-story-consent{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;z-index:100005!important}.i-amphtml-story-consent,.i-amphtml-story-consent:before{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important}.i-amphtml-story-consent:before{content:""!important;background:#000!important;opacity:0.55!important}.i-amphtml-story-consent-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-consent-container{position:relative!important;margin:88px 0 72px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;text-align:start!important;overflow:hidden!important}.i-amphtml-story-consent-header{position:relative!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important}.i-amphtml-story-consent-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-consent-logo:before{content:""!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-consent-content{padding:42px 16px 16px!important;font-size:14px!important;z-index:0!important}.i-amphtml-story-consent-vendors{margin:0!important;padding:0!important;list-style:none!important}.i-amphtml-story-consent-vendor{height:40px!important;border-bottom:1px solid #f0f0f0!important;line-height:40px!important;text-overflow:ellipsis!important;overflow:hidden!important}.i-amphtml-story-consent-external-link{position:relative!important;display:inline-block!important;margin:24px 0!important;color:rgba(0,0,0,0.87)!important;font-size:15px!important;font-weight:700!important;text-decoration:none!important}.i-amphtml-story-consent-external-link:hover{text-decoration:underline!important}.i-amphtml-story-consent-external-link:after{content:""!important;position:absolute!important;display:block!important;height:16px!important;width:16px!important;top:3px!important;right:-20px!important;background:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0, 0, 0, 0.87)"><path d="M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\') 50% no-repeat!important}.i-amphtml-story-consent-external-link.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-actions{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;bottom:0!important;left:0!important;right:0!important;height:72px!important;min-height:72px!important;background:#fff!important;box-shadow:0 -2px 3px rgba(0,0,0,0.12)!important;z-index:1!important}.i-amphtml-story-consent-action{position:relative!important;padding:0 24px!important;margin:0 12px!important;height:40px!important;width:40vw!important;background:#fff!important;border:none!important;border-radius:40px!important;box-sizing:border-box!important;cursor:pointer!important;font-size:13px!important;font-weight:700!important;line-height:40px!important;text-align:center!important;text-transform:uppercase!important}.i-amphtml-story-consent-action.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-action-accept{background:var(--primary-color,#000)!important;color:#fff!important}.i-amphtml-story-consent-action-reject{border:1px solid #000!important}@media (min-width:420px){.i-amphtml-story-consent{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-consent-overflow{margin-top:0!important}.i-amphtml-story-consent-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;margin:0!important;max-height:60vh!important;min-height:40vh!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-consent-content{margin:0 auto!important;max-width:424px!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-consent-content::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-consent-actions{position:relative!important;left:0px!important;right:0px!important}.i-amphtml-story-consent-action{width:33vw!important;max-width:200px!important}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-consent.css*/'
                  ),
                    this.Nk(),
                    this.gT();
                })
              );
            }
          }
          isLayoutSupported(t) {
            return t == W;
          }
          gT() {
            this.Ok.addEventListener("click", (t) => this.Lk(t), !0),
              this._T.subscribe(
                xi.RTL_STATE,
                (t) => {
                  this.Dk(t);
                },
                !0
              );
          }
          Lk(t) {
            if (!t.target) return;
            if (t.target.hasAttribute("on")) {
              const i = t.target;
              this.hP.trigger(i, "tap", t, 3);
            }
            const i = b(t.target, (t) => v(t, "a[href]"));
            i && (As(i, this.element), t.preventDefault());
          }
          Dk(t) {
            this.mutateElement(() => {
              t
                ? this.Ok.setAttribute("dir", "rtl")
                : this.Ok.removeAttribute("dir");
            }, this.Ok);
          }
          Ck() {
            const t = x(this.element.parentElement, "script");
            if (((this.kk = t && at(t.textContent)), this.Uk(), !this.kk))
              return;
            const i = x(this.element, "script");
            St(
              i && mt(i),
              `${jo} config should be put in a <script> tag with type="application/json"`
            ),
              (this.Sk = yt(yt({}, Fo), at(i.textContent))),
              It().assertString(
                this.Sk.title,
                `${jo}: config requires a title`
              ),
              It().assertString(
                this.Sk.message,
                `${jo}: config requires a message`
              ),
              St(
                this.Sk.vendors && a(this.Sk.vendors),
                `${jo}: config requires an array of vendors`
              ),
              It().assertBoolean(
                this.Sk.onlyAccept,
                `${jo}: config requires "onlyAccept" to be a boolean`
              ),
              (this.Sk.externalLink.href || this.Sk.externalLink.title) &&
                (It().assertString(
                  this.Sk.externalLink.title,
                  `${jo}: config requires "externalLink.title" to be a string`
                ),
                It().assertString(
                  this.Sk.externalLink.href,
                  `${jo}: config requires "externalLink.href" to be an absolute URL`
                ),
                pi(this.element).assertAbsoluteHttpOrHttpsUrl(
                  this.Sk.externalLink.href
                ));
          }
          Uk() {
            const t = this.kk.consents;
            if (t) {
              const i = Object.keys(t)[0],
                s = t[i];
              (this.kk.consentInstanceId = i),
                (this.kk.checkConsentHref = s.checkConsentHref),
                (this.kk.promptIfUnknownForGeoGroup =
                  s.promptIfUnknownForGeoGroup),
                delete this.kk.consents;
            }
          }
          zk(t) {
            if (this.kk.checkConsentHref) return void this._T.dispatch(8, t);
            const i = this.kk.promptIfUnknownForGeoGroup;
            var s;
            i &&
              ((s = this.element), Qt(s, "geo", "amp-geo", !0)).then((s) => {
                const o = s.matchedISOCountryGroups;
                (s && !o.includes(i)) || this._T.dispatch(8, t);
              });
          }
          Nk() {
            const t = this.Ok.querySelector(
              ".i-amphtml-story-consent-action-accept"
            );
            O(t, {
              color: (function (t) {
                const { b: i, g: s, r: o } = t,
                  n = (t) =>
                    (t /= 255) <= 0.03928
                      ? t / 12.92
                      : Math.pow((t + 0.055) / 1.055, 2.4);
                return 0.2126 * n(o) + 0.7152 * n(s) + 0.0722 * n(i) > 0.179
                  ? "#000"
                  : "#FFF";
              })(
                (function (t) {
                  const i = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})/;
                  if (!t.match(i))
                    return (
                      It().error(
                        "UTILS",
                        `getRGBFromCssColorValue expects a parameter in the form of 'rgba(0, 0, 0, 1)' or 'rgb(0, 0, 0)' but got ${t}`
                      ),
                      { r: 0, g: 0, b: 0 }
                    );
                  const s = i.exec(t);
                  return { r: Number(s[1]), g: Number(s[2]), b: Number(s[3]) };
                })(B(this.win, t)["background-color"])
              ),
            });
          }
        },
        Bo = "show-navigation-overlay",
        Yo = "show-first-page-overlay",
        Go = "amp-story-viewer-messaging-handler",
        Wo = {
          CAPTIONS_STATE: { dataSource: 0, property: xi.CAPTIONS_STATE },
          CURRENT_PAGE_ID: { dataSource: 0, property: xi.CURRENT_PAGE_ID },
          EDUCATION_STATE: { dataSource: 0, property: xi.EDUCATION_STATE },
          MUTED_STATE: { dataSource: 0, property: xi.MUTED_STATE },
          PAGE_ATTACHMENT_STATE: {
            dataSource: 0,
            property: xi.PAGE_ATTACHMENT_STATE,
          },
          UI_STATE: { dataSource: 0, property: xi.UI_STATE },
          STORY_PROGRESS: { dataSource: 2, property: $i },
          STORY_PAGE_COUNT: { dataSource: 2, property: Di },
        },
        qo = {
          CAPTIONS_STATE: {
            action: 24,
            isValueValid: (t) => "boolean" == typeof t,
          },
          MUTED_STATE: {
            action: 20,
            isValueValid: (t) => "boolean" == typeof t,
          },
        },
        Xo = class {
          constructor(t, i) {
            (this._T = Pi(t)), (this.AT = Fi(t)), (this.Be = i);
          }
          startListening() {
            this.Be.onMessageRespond("getDocumentState", (t) => this.$k(t)),
              this.Be.onMessage("onDocumentState", (t) => this.jk(t)),
              this.Be.onMessageRespond("setDocumentState", (t) => this.Fk(t)),
              this.Be.onMessageRespond("customDocumentUI", (t) => this.Hk(t));
          }
          send(t, i, s = !1) {
            this.Be.sendMessage(t, i, s);
          }
          $k(t = {}) {
            const { state: i } = t,
              s = Wo[i];
            if (!s) return Promise.reject("Invalid 'state' parameter");
            let o;
            switch (s.dataSource) {
              case 0:
                o = this._T.get(s.property);
                break;
              case 2:
                o = this.AT.get()[s.property];
                break;
              default:
                kt().error(Go, "Unknown data source %s.", s.dataSource);
            }
            return Promise.resolve({ state: i, value: o });
          }
          jk(t = {}) {
            const { state: i } = t,
              s = Wo[i];
            s
              ? this._T.subscribe(s.property, (t) => {
                  this.Be.sendMessage("documentStateUpdate", {
                    state: i,
                    value: t,
                  });
                })
              : It().error(Go, "Invalid 'state' parameter");
          }
          Fk(t = {}) {
            const { state: i, value: s } = t,
              o = qo[i];
            return o
              ? o.isValueValid(s)
                ? (this._T.dispatch(o.action, s),
                  Promise.resolve({ state: i, value: s }))
                : Promise.reject("Invalid 'value' parameter")
              : Promise.reject("Invalid 'state' parameter");
          }
          Hk(t) {
            this._T.dispatch(13, t.controls);
          }
        },
        Ko = 2,
        Zo = 20,
        Jo = class {
          constructor(t, i) {
            (this.i = t),
              (this.ll = null),
              (this.Bk = 0),
              (this.Yk = 0),
              (this.Gk = 1),
              (this.ji = ((t) => Ot(t, "ampdoc"))(this.i).getSingleDoc()),
              (this.sa = ri(this.ji)),
              (this.Wk = m()),
              (this._T = Pi(this.i)),
              (this.qk = ""),
              (this.lh = []),
              (this.Xk = s()),
              (this.Kk = 0),
              (this.Zk = i);
          }
          static create(t, i) {
            return new Jo(t, i);
          }
          build(t) {
            if (this.ll) return this.ll;
            const i = vt("ol", {
              "aria-hidden": "true",
              class:
                "i-amphtml-story-progress-bar" +
                (this.Jk() ? "" : " i-amphtml-story-progress-bar-exp-disabled"),
            });
            return (
              (this.ll = i),
              this.Zk.addEventListener(Si, () => {
                this.Qk();
              }),
              this._T.subscribe(
                xi.PAGE_IDS,
                (t) => {
                  const s = !!i.parentElement;
                  (this.Xk = this.sa.mutateElement(i, () => {
                    s && this.tS(),
                      t.forEach((t) => {
                        (this.iS(t) && !this.Jk()) ||
                          t in this.Wk ||
                          this.sS(t);
                      }),
                      this.Bk > Zo && (this.nS(this.Yk), this.cu(!1)),
                      i.classList.toggle(
                        "i-amphtml-progress-bar-overflow",
                        this.Bk > Zo
                      );
                  })),
                    s && this.updateProgress(this.qk, this.Gk, !0);
                },
                !0
              ),
              this._T.subscribe(
                xi.RTL_STATE,
                (t) => {
                  this.Dk(t);
                },
                !0
              ),
              this._T.subscribe(
                xi.UI_STATE,
                (t) => {
                  this.lV(t);
                },
                !0
              ),
              ((s = this.ji), Nt(s, "viewport")).onResize(
                At(this.i, () => this.eS(), 300)
              ),
              i
            );
            var s;
          }
          Jk() {
            const t = Xt(this.i, Kt);
            return t && t != Zt;
          }
          iS(t) {
            return t.startsWith("i-amphtml-ad-");
          }
          Qk() {
            this.Bk > Zo && ((this.Kk = 0), this.cu(!1));
          }
          cu(t = !0) {
            this.oS().then((i) => {
              let s = -(this.Kk - this.rS()) * (Ko + 4);
              this.sa.mutateElement(this.aS(), () => {
                this.aS().classList.toggle("i-amphtml-animate-progress", t);
                for (let t = 0; t < this.Bk; t++) {
                  const o = t >= this.Kk && t < this.Kk + Zo ? i : Ko;
                  this.hS(this.lh[t], s, o), (s += o + 4);
                }
              });
            });
          }
          hS(t, i, s) {
            this._T.get(xi.RTL_STATE) && (i *= -1),
              t.setAttribute(
                "style",
                `transform: translate3d(${i}px, 0px, 0.00001px) scaleX(${
                  s / Ko
                });`
              );
          }
          oS() {
            const t = (this.lS() + this.rS()) * (Ko + 4);
            return this.pS().then((i) => (i - t) / Math.min(this.Bk, Zo) - 4);
          }
          pS() {
            return this.sa.measureElement(
              () => this.aS().getBoundingClientRect().width
            );
          }
          lS() {
            const t = this.Bk - (this.Kk + Zo);
            return t > 3 ? 3 : Math.max(t, 0);
          }
          rS() {
            return Math.min(3, this.Kk);
          }
          mS() {
            if (this.Yk >= this.Kk + Zo) {
              const t = this.Kk + Zo + 5 - 1;
              (this.Kk += t < this.Bk ? 5 : this.Bk - (this.Kk + Zo)),
                this.cu();
            } else
              this.Yk < this.Kk &&
                ((this.Kk -= this.Kk - 5 < 0 ? this.Kk : 5), this.cu());
          }
          Dk(t) {
            this.sa.mutateElement(this.aS(), () => {
              t
                ? this.aS().setAttribute("dir", "rtl")
                : this.aS().removeAttribute("dir");
            });
          }
          eS() {
            (this.aS().classList.contains("i-amphtml-progress-bar-overflow") ||
              this.Bk > Zo) &&
              (this.nS(this.Yk), this.cu(!1));
          }
          lV(t) {
            switch (t) {
              case 2:
                (Zo = 70), (Ko = 3);
                break;
              case 0:
                (Zo = 20), (Ko = 2);
                break;
              default:
                Zo = 20;
            }
          }
          cS(t) {
            const i = vt(
              "li",
              { class: "i-amphtml-story-page-progress-bar" },
              vt("div", {
                class:
                  "i-amphtml-story-page-progress-value" +
                  (t ? " i-amphtml-story-ad-progress-value" : ""),
              })
            );
            this.aS().appendChild(i), this.lh.push(i);
          }
          tS() {
            !(function (t) {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
            })(Vt(this.ll)),
              (this.Wk = m()),
              (this.Bk = 0),
              (this.lh = []);
          }
          sS(t) {
            (this.Wk[t] = this.Bk++), this.cS(this.iS(t));
          }
          aS() {
            return this.ll;
          }
          uS(t) {
            Vt(c(this.Wk, t));
          }
          updateProgress(t, i, s = !1) {
            this.Xk.then(() => {
              this.uS(t);
              const o = this.Wk[t];
              this.dS(o, i),
                (this.Yk !== o || s) && this.fS(o, i, this.Yk, this.Gk),
                (this.Gk = i),
                (this.Yk = o),
                (this.qk = t),
                this.Bk > Zo && this.mS();
            });
          }
          nS(t) {
            t > Zo && t + Zo < this.Bk
              ? (this.Kk = t - (t % Zo))
              : (this.Kk = t > Zo ? this.Bk - Zo : 0);
          }
          fS(t, i, s, o) {
            let n = !1;
            1 === o && 1 === i && (n = !0),
              t > s && 1 !== i && (n = !0),
              s > t && 1 === i && (n = !0);
            for (let i = 0; i < this.Bk; i++) {
              if (i === t) continue;
              const o = i < t ? 1 : 0,
                r = !!n && i === s;
              this.dS(i, o, r);
            }
          }
          dS(t, i, s = !0) {
            const o = t + 1,
              n = y(
                this.aS(),
                `.i-amphtml-story-page-progress-bar:nth-child(${(function (t) {
                  const i = String(t);
                  return u(-1 === i.indexOf(")")), i;
                })(o)}) .i-amphtml-story-page-progress-value`
              );
            this.sa.mutateElement(Vt(n), () => {
              let t = "none";
              s &&
                (t =
                  1 === i || 0 === i
                    ? "transform 200ms ease"
                    : "transform 300ms linear"),
                O(Vt(n), { transform: F(`${i},1`), transition: t });
            });
          }
        },
        Qo = "ad-showing",
        tn = "muted",
        sn = "paused",
        on = "info",
        nn = "i-amphtml-story-captions-control",
        rn = "i-amphtml-story-nocaptions-control",
        an = "i-amphtml-story-mute-audio-control",
        en = "i-amphtml-story-close-control",
        hn = "i-amphtml-story-skip-to-next",
        ln = "i-amphtml-story-viewer-custom-control",
        pn = "i-amphtml-story-unmute-audio-control",
        mn = "i-amphtml-story-pause-control",
        cn = "i-amphtml-story-play-control",
        un = "i-amphtml-current-page-has-audio",
        dn = "i-amphtml-story-share-control",
        fn = "i-amphtml-story-info-control",
        gn = "i-amphtml-story-has-new-page",
        yn = "i-amphtml-story-attribution",
        _n = "__AMP_VIEWER_CONTROL_EVENT_NAME__",
        vn = {
          share: { selector: `.${dn}` },
          close: { selector: `.${en}` },
          "skip-next": { selector: `.${hn}` },
          "skip-to-next": { selector: `.${hn}` },
        },
        bn = "amp-story-state",
        An = "ampStoryNavigationPath";
      function Pn(t, i) {
        const { history: s } = t;
        let o = $o(s);
        return (
          (o && o[i]) ||
            (o = (function (t) {
              const { hash: i } = t.location;
              if (
                -1 != i.indexOf("page=") ||
                -1 != i.indexOf("ignoreLocalStorageHistory")
              )
                return;
              const s = xn(t),
                o = s && s[wn(t)];
              return o && o.state;
            })(t)),
          (o && o[i]) || null
        );
      }
      function xn(t) {
        const i = (function (t) {
          try {
            return at(t.localStorage.getItem(bn));
          } catch (t) {
            return null;
          }
        })(t);
        if (!i) return {};
        const s = Date.now();
        let o = !1;
        return (
          Object.keys(i).forEach((t) => {
            const n = i[t];
            s > n.time + 6e5 && (delete i[t], (o = !0));
          }),
          o && Tn(t, i),
          i
        );
      }
      function wn(t) {
        return t.location.href.replace(/\#.*/, "");
      }
      function Tn(t, i) {
        try {
          t.localStorage.setItem(bn, JSON.stringify(i));
        } catch (t) {}
      }
      var En = {
          className: "i-amphtml-story-back-prev",
          triggers: Ri,
          label: "93",
        },
        Mn = {
          className: "i-amphtml-story-fwd-next",
          triggers: ki,
          label: "91",
        },
        In = {
          className: "i-amphtml-story-fwd-next",
          triggers: ki,
          label: "90",
        },
        Rn = {
          className: "i-amphtml-story-fwd-replay",
          triggers: Si,
          label: "92",
        },
        kn = class {
          constructor(t, i, s, o) {
            (this.Ri = i),
              (this.Ff = t),
              (this.element = ((t, i) =>
                vt(
                  "div",
                  {
                    onClick: i,
                    class: `i-amphtml-story-button-container ${t.className}`,
                  },
                  vt("button", {
                    class: "i-amphtml-story-button-move",
                    "i-amphtml-i18n-aria-label": t.label,
                  })
                ))(i, (t) => this.Lk(t))),
              Os(this.element, t),
              (this._S = Vt(this.element.firstElementChild)),
              (this._T = s),
              (this.i = o),
              (this.sa = ri(t));
          }
          updateState(t) {
            t !== this.Ri &&
              (this.sa.mutateElement(this.element, () => {
                this.element.classList.remove(this.Ri.className),
                  this.element.classList.add(t.className),
                  (this.Ri = t);
              }),
              hi(this.Ff)
                .getLocalizedStringAsync(t.label)
                .then((t) => this._S.setAttribute("aria-label", t)));
          }
          getState() {
            return this.Ri;
          }
          setEnabled(t) {
            this.sa.mutateElement(this.element, () => {
              this.element.classList.toggle(
                "i-amphtml-story-button-hidden",
                !t
              ),
                ct(this.element.querySelector("button"), "disabled", !t);
            });
          }
          Lk(t) {
            t.preventDefault(),
              this._T.dispatch(7, Wi),
              this.Ri.triggers
                ? Ci(this.i, this.element, Vt(this.Ri.triggers), void 0, {
                    bubbles: !0,
                  })
                : this.Ri.action &&
                  this._T.dispatch(this.Ri.action, this.Ri.data);
          }
        },
        Vn = "__AMP_Gestures",
        Sn = class {
          static get(t, i = !1, s = !1) {
            let o = t[Vn];
            return o || ((o = new Sn(t, i, s)), (t[Vn] = o)), o;
          }
          constructor(t, i = !1, s = !1) {
            (this._n = t),
              (this.gS = []),
              (this.t_ = []),
              (this.gi = []),
              (this.yS = []),
              (this.AS = null);
            const o = (function (t) {
              if (void 0 !== ii) return ii;
              ii = !1;
              try {
                const i = {
                  get passive() {
                    return (ii = !0), !1;
                  },
                };
                t.addEventListener("test-options", null, i),
                  t.removeEventListener("test-options", null, i);
              } catch (t) {}
              return ii;
            })(t.ownerDocument.defaultView);
            (this.PS = i || o),
              (this.bS = s),
              (this.vS = !1),
              (this.xe = new (class {
                constructor(t, i, s) {
                  (this.Re = li(t)),
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
              })(tt(t), this.vg.bind(this))),
              (this.TS = new _i()),
              (this.ES = Object.create(null)),
              (this.xS = this.sm.bind(this)),
              (this.MS = this.rm.bind(this)),
              (this.wS = this.nm.bind(this)),
              (this.IS = this.h_.bind(this)),
              this._n.addEventListener(
                "touchstart",
                this.xS,
                !!o && { passive: !0 }
              ),
              this._n.addEventListener("touchend", this.MS),
              this._n.addEventListener(
                "touchmove",
                this.wS,
                !!o && { passive: !0 }
              ),
              this._n.addEventListener("touchcancel", this.IS),
              (this.RS = !1);
          }
          cleanup() {
            this._n.removeEventListener("touchstart", this.xS),
              this._n.removeEventListener("touchend", this.MS),
              this._n.removeEventListener("touchmove", this.wS),
              this._n.removeEventListener("touchcancel", this.IS),
              delete this._n[Vn],
              this.xe.cancel();
          }
          onGesture(t, i) {
            const s = new t(this),
              o = s.getType();
            let n = this.ES[o];
            return (
              n || (this.gS.push(s), (n = new _i()), (this.ES[o] = n)), n.add(i)
            );
          }
          removeGesture(t) {
            const i = new t(this).getType(),
              s = this.ES[i];
            if (s) {
              s.removeAll();
              const t = e(this.gS, (t) => t.getType() == i);
              return !(
                t < 0 ||
                (this.gS.splice(t, 1),
                this.gi.splice(t, 1),
                this.yS.splice(t, 1),
                this.t_.splice(t, 1),
                delete this.ES[i],
                0)
              );
            }
            return !1;
          }
          onPointerDown(t) {
            return this.TS.add(t);
          }
          sm(t) {
            const i = Date.now();
            (this.vS = !1), this.TS.fire(t);
            for (let s = 0; s < this.gS.length; s++)
              this.gi[s] ||
                (this.yS[s] && this.yS[s] < i && this.o_(s),
                this.gS[s].onTouchStart(t) && this.u_(s));
            this.VS(t);
          }
          nm(t) {
            const i = Date.now();
            for (let s = 0; s < this.gS.length; s++)
              this.t_[s] &&
                (this.yS[s] && this.yS[s] < i
                  ? this.o_(s)
                  : this.gS[s].onTouchMove(t) || this.o_(s));
            this.VS(t);
          }
          rm(t) {
            const i = Date.now();
            for (let s = 0; s < this.gS.length; s++) {
              if (!this.t_[s]) continue;
              if (this.yS[s] && this.yS[s] < i) {
                this.o_(s);
                continue;
              }
              this.gS[s].onTouchEnd(t);
              const o = !this.yS[s],
                n = this.yS[s] < i;
              this.AS == this.gS[s] || (!o && !n) || this.o_(s);
            }
            this.VS(t);
          }
          h_(t) {
            for (let t = 0; t < this.gS.length; t++) this.kS(t);
            this.VS(t);
          }
          Wp(t, i) {
            if (this.AS) return void t.acceptCancel();
            const s = Date.now();
            for (let o = 0; o < this.gS.length; o++)
              this.gS[o] == t && ((this.gi[o] = s + i), (this.yS[o] = 0));
            this.RS = !0;
          }
          SS(t, i) {
            if (this.AS) return void t.acceptCancel();
            const s = Date.now();
            for (let o = 0; o < this.gS.length; o++)
              this.gS[o] == t && (this.yS[o] = s + i);
          }
          OS(t) {
            this.AS == t && ((this.AS = null), (this.vS = !0));
          }
          CS(t, i, s) {
            u(this.AS == t);
            const o = this.ES[t.getType()];
            o &&
              o.fire(
                new (class {
                  constructor(t, i, s, o) {
                    (this.type = t),
                      (this.data = i),
                      (this.time = s),
                      (this.event = o);
                  }
                })(t.getType(), i, Date.now(), s)
              );
          }
          VS(t) {
            let i = !!this.AS || this.vS;
            if (((this.vS = !1), !i)) {
              const t = Date.now();
              for (let s = 0; s < this.gS.length; s++)
                if (this.gi[s] || (this.yS[s] && this.yS[s] >= t)) {
                  i = !0;
                  break;
                }
            }
            i
              ? (t.stopPropagation(), this.PS || t.preventDefault())
              : this.bS && t.stopPropagation(),
              this.RS && ((this.RS = !1), this.vg());
          }
          vg() {
            const t = Date.now();
            let i = -1;
            for (let s = 0; s < this.gS.length; s++)
              this.gi[s]
                ? (-1 == i || this.gi[s] > this.gi[i]) && (i = s)
                : this.yS[s] && this.yS[s] < t && this.o_(s);
            if (-1 == i) return;
            let s = 0;
            for (let i = 0; i < this.gS.length; i++)
              !this.gi[i] && this.t_[i] && (s = Math.max(s, this.yS[i] - t));
            s < 2 ? this.zS(i) : this.xe.schedule(s);
          }
          zS(t) {
            const i = this.gS[t];
            for (let i = 0; i < this.gS.length; i++) i != t && this.kS(i);
            (this.gi[t] = 0), (this.yS[t] = 0), (this.AS = i), i.acceptStart();
          }
          u_(t) {
            (this.t_[t] = !0), (this.yS[t] = 0);
          }
          o_(t) {
            (this.t_[t] = !1),
              (this.yS[t] = 0),
              this.gi[t] || this.gS[t].acceptCancel();
          }
          kS(t) {
            (this.gi[t] = 0), this.o_(t);
          }
        };
      function zn(t, i, s) {
        i < 1 && (i = 1);
        const o = t / i,
          n = 0.5 + Math.min(i / 33.34, 0.5);
        return o * n + s * (1 - n);
      }
      Math.round(-16.67 / Math.log(0.95));
      var On = "ad-showing",
        Cn = "auto-advance-to",
        Nn = "muted",
        Ln = "i-amphtml-return-to",
        Dn = "i-amphtml-visited",
        Un = { [Po]: 4, [xo]: 8 },
        $n = "amp-story",
        jn = class extends t.BaseElement {
          static prerenderAllowed() {
            return !0;
          }
          constructor(t) {
            var i;
            super(t),
              (this._T = Pi(this.win)),
              "rtl" ==
                ((i = this.win.document).body.getAttribute("dir") ||
                  i.documentElement.getAttribute("dir") ||
                  "ltr") && this._T.dispatch(27, !0),
              (this.NS = qi(this.win, this.element)),
              (this.IR = ko.forElement(this.win, this.element)),
              this.IR.start(),
              (this.oh = this.getVsync()),
              (this.LS = new (class {
                constructor(t, i) {
                  (this.i = t),
                    (this.DS = i),
                    (this.ll = null),
                    (this.US = null),
                    (this.$S = null),
                    (this.jS = Jo.create(t, this.DS)),
                    (this._T = Pi(this.i)),
                    (this.oh = ci(this.i)),
                    (this.Re = li(this.i)),
                    (this.MI = null),
                    (this.Be = null),
                    (this.FS = null);
                }
                build(t, i = !0) {
                  return (
                    this.ll ||
                      ((this.US = ((t, i, s) => {
                        const o = vt(
                          "aside",
                          {
                            class:
                              "i-amphtml-story-system-layer i-amphtml-story-system-reset",
                          },
                          i,
                          vt(
                            "a",
                            { class: String(yn), target: "_blank" },
                            vt(
                              "div",
                              {
                                class:
                                  "i-amphtml-story-attribution-logo-container",
                              },
                              vt("img", {
                                alt: "",
                                class: "i-amphtml-story-attribution-logo",
                              })
                            ),
                            vt("div", {
                              class: "i-amphtml-story-attribution-text",
                            })
                          ),
                          vt(
                            "div",
                            {
                              class:
                                "i-amphtml-story-has-new-page-notification-container",
                            },
                            vt(
                              "div",
                              {
                                class:
                                  "i-amphtml-story-has-new-page-text-wrapper",
                              },
                              vt("span", {
                                class:
                                  "i-amphtml-story-has-new-page-circle-icon",
                              }),
                              vt("div", {
                                class: "i-amphtml-story-has-new-page-text",
                                "i-amphtml-i18n-text-content": "64",
                              })
                            )
                          ),
                          vt(
                            "div",
                            { class: "i-amphtml-story-system-layer-buttons" },
                            vt("div", {
                              role: "button",
                              class: fn + " i-amphtml-story-button",
                              "i-amphtml-i18n-aria-label": "68",
                            }),
                            vt(
                              "div",
                              { class: "i-amphtml-story-captions-display" },
                              vt("button", {
                                class: nn + " i-amphtml-story-button",
                                "i-amphtml-i18n-aria-label": "111",
                              }),
                              vt("button", {
                                class: rn + " i-amphtml-story-button",
                                "i-amphtml-i18n-aria-label": "112",
                              })
                            ),
                            vt(
                              "div",
                              { class: "i-amphtml-story-sound-display" },
                              vt("button", {
                                class: pn + " i-amphtml-story-button",
                                "i-amphtml-i18n-aria-label": "67",
                              }),
                              vt("button", {
                                class: an + " i-amphtml-story-button",
                                "i-amphtml-i18n-aria-label": "66",
                              })
                            ),
                            vt(
                              "div",
                              { class: "i-amphtml-paused-display" },
                              vt("button", {
                                class: mn + " i-amphtml-story-button",
                                "i-amphtml-i18n-aria-label": "85",
                              }),
                              vt("button", {
                                class: cn + " i-amphtml-story-button",
                                "i-amphtml-i18n-aria-label": "86",
                              })
                            ),
                            vt("button", {
                              class:
                                hn +
                                " i-amphtml-story-ui-hide-button i-amphtml-story-button",
                              "i-amphtml-i18n-aria-label": "88",
                            }),
                            vt("button", {
                              class: dn + " i-amphtml-story-button",
                              "i-amphtml-i18n-aria-label": "69",
                            }),
                            vt("button", {
                              class:
                                en +
                                " i-amphtml-story-ui-hide-button i-amphtml-story-button",
                              "i-amphtml-i18n-aria-label": "87",
                            })
                          ),
                          vt("div", {
                            class:
                              "i-amphtml-story-system-layer-buttons-start-position",
                          })
                        );
                        return (
                          s || o.classList.add("i-amphtml-story-hidden"), o
                        );
                      })(this.DS, this.jS.build(t), i)),
                      Os(this.US, this.DS),
                      (this.US.querySelector(
                        ".i-amphtml-story-share-control"
                      ).href = oi(this.DS).canonicalUrl),
                      (this.ll = gs(
                        vt("div", { class: "i-amphtml-system-layer-host" }),
                        this.US,
                        '.i-amphtml-story-system-layer{background:linear-gradient(180deg,#0004,#0002 33%,#0001 67%,#0000)!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;top:0!important;left:0!important;right:0!important;height:140px!important;z-index:100000!important;transition:opacity 0.3s cubic-bezier(0,0,0.2,1)!important;pointer-events:none!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer{opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0,1,1)!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer *{pointer-events:none!important}.i-amphtml-story-attribution{top:0!important;border:none!important;pointer-events:auto!important;cursor:pointer!important;padding:6px 8px 0!important;height:48px!important;place-items:center!important;display:-ms-flexbox!important;display:flex!important;text-decoration:none!important;overflow:hidden!important;visibility:hidden!important}.i-amphtml-story-attribution-visible{visibility:visible!important}[desktop] .i-amphtml-story-attribution{padding:6px 6px 0!important;left:0!important;right:0!important}.i-amphtml-story-attribution>*{margin:0px 4px!important}.i-amphtml-story-attribution-logo-container{display:grid!important;place-items:center!important}.i-amphtml-story-attribution-logo{border-radius:100%!important;border:1px solid #d4d4d4!important;width:28px!important;height:28px!important;-o-object-fit:cover!important;object-fit:cover!important;box-shadow:0px 0px 6px rgba(0,0,0,0.12)!important}.i-amphtml-story-attribution-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;font-size:13px!important;font-weight:500!important;text-shadow:0px 0px 6px rgba(0,0,0,0.16)!important;color:#fff!important}.i-amphtml-story-system-layer-buttons,.i-amphtml-story-system-layer-buttons-start-position{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:row!important;flex-direction:row!important;-ms-flex-pack:end!important;justify-content:flex-end!important;padding:8px 4px!important;box-sizing:border-box!important;-ms-flex:1!important;flex:1!important}.i-amphtml-story-system-layer-buttons-start-position{position:absolute!important;top:0!important;-ms-flex-pack:start!important;justify-content:flex-start!important}[desktop] .i-amphtml-story-system-layer-buttons{padding:8px 4px 0!important}.i-amphtml-story-system-layer-buttons .i-amphtml-story-ui-hide-button.i-amphtml-story-button{display:none!important}.i-amphtml-story-button{height:48px!important;width:48px!important;cursor:pointer!important;border:none!important;pointer-events:auto!important;background:none!important}[desktop] .i-amphtml-story-button{margin:0 4px!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-progress-bar{border:0!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;right:0!important;top:0!important;margin:6px 10px 0!important;padding:0 2px!important;position:absolute!important;visibility:visible!important;z-index:100001!important;overflow:hidden!important}[ad-showing] .i-amphtml-story-progress-bar-exp-disabled.i-amphtml-story-progress-bar{display:none!important}[ad-showing] .i-amphtml-story-attribution{visibility:hidden!important}[ad-showing] .i-amphtml-story-share-control{display:none!important}[ad-showing]:not([i-amphtml-current-page-has-audio]) .i-amphtml-story-mute-audio-control,[ad-showing]:not([i-amphtml-current-page-has-audio]) .i-amphtml-story-unmute-audio-control{visibility:hidden!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important}.i-amphtml-story-page-progress-value{background:#fff!important;height:100%!important;width:100%!important;transform:translateZ(0) scaleX(0)!important;transform-origin:left!important}.i-amphtml-story-ad-progress-value{background-color:#fbc02d!important}[dir=rtl] .i-amphtml-story-page-progress-value{transform-origin:right!important}[i-amphtml-story-has-new-page=noshow] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:0!important;visibility:hidden!important}.i-amphtml-last-page-active[i-amphtml-story-has-new-page=show] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:1!important;visibility:visible!important}.i-amphtml-story-mute-text,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{width:-webkit-max-content!important;width:max-content!important;color:#fff!important}.i-amphtml-story-sound-display{display:inline-block!important;height:46px!important;position:relative!important}.i-amphtml-story-captions-control,.i-amphtml-story-mute-audio-control,.i-amphtml-story-mute-text,.i-amphtml-story-no-audio-ui .i-amphtml-story-sound-display,.i-amphtml-story-nocaptions-control,.i-amphtml-story-pause-control,.i-amphtml-story-play-control,.i-amphtml-story-skip-to-next,.i-amphtml-story-unmute-audio-control,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{display:none!important}.i-amphtml-story-system-layer:not([desktop]):not(.i-amphtml-story-desktop-one-panel):not(.amp-mode-keyboard-active) .i-amphtml-paused-display button:not(:focus){margin:0!important;padding:0!important;width:0px!important;opacity:0!important;pointer-events:none!important}[i-amphtml-current-page-has-audio]:not([muted]) .i-amphtml-story-mute-audio-control,[i-amphtml-current-page-has-audio][muted] .i-amphtml-story-unmute-audio-control,[i-amphtml-current-page-has-captions]:not([captions-on]) .i-amphtml-story-nocaptions-control,[i-amphtml-current-page-has-captions][captions-on] .i-amphtml-story-captions-control{display:block!important}.i-amphtml-story-system-layer-buttons button[disabled][disabled]{display:none!important}.i-amphtml-story-has-playback-ui:not([paused]) .i-amphtml-story-pause-control,.i-amphtml-story-has-playback-ui[paused] .i-amphtml-story-play-control{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-system-layer-buttons{visibility:hidden!important}.i-amphtml-story-unmute-audio-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="%23fff" fill-rule="evenodd" d="M27.53 16.97a.95.95 0 0 1 1.1-.76c.75.13 2.28.7 3.63 1.9a7.71 7.71 0 0 1 2.62 5.95c0 1.86-.55 3.32-1.33 4.45l-1.38-1.37c.48-.8.8-1.81.8-3.08 0-2.16-.92-3.59-1.97-4.53a6.43 6.43 0 0 0-2.7-1.45.95.95 0 0 1-.77-1.1z" clip-rule="evenodd"/><path fill="%23fff" fill-rule="evenodd" d="M27.54 21.03a.95.95 0 0 1 1.14-.72c.7.16 2.5 1.19 2.5 3.71 0 .7-.15 1.28-.36 1.76l-1.56-1.52c.05-.6-.07-1.25-.48-1.71-.23-.26-.47-.36-.51-.38 0 0-.01 0 0 0a.95.95 0 0 1-.73-1.14z" clip-rule="evenodd"/><path fill="%23fff" d="M23.4 16.79v1.56l1.9 1.9v-4.27c0-.3-.12-.6-.29-.84a1.59 1.59 0 0 0-.7-.57c-.29-.11-.61-.16-.9-.1-.3.06-.61.21-.82.42l-1.31 1.34 1.33 1.34.8-.78z"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="m20.12 18.73-1.76 1.81h-2.59c-.94 0-1.7.76-1.7 1.7v3.45c0 .93.75 1.68 1.67 1.7l2.6.04 4.9 4.9a.65.65 0 0 0 1.1-.46v-9.1"/><path stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.13 15.36 17.2 17.19"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M28.47 30.84A7.2 7.2 0 0 0 31 29.67"/></svg>\')!important}.i-amphtml-story-mute-audio-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M28.47 17.14c1.15.2 5.46 1.98 5.46 6.92 0 4.95-4.39 6.63-5.46 6.83"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.8" d="M28.47 21.24c.37.08 1.75.79 1.75 2.78 0 1.99-1.4 2.67-1.75 2.74"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="m18.36 27.48 4.88 4.9a.65.65 0 0 0 1.1-.46V16.09c0-.58-.7-.87-1.1-.45l-4.88 4.94h-2.59c-.94 0-1.7.77-1.7 1.7v3.45c0 .93.75 1.69 1.67 1.7l2.62.05z"/></svg>\')!important}.i-amphtml-story-captions-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="%23fff" d="M28.9 15.4h-9.8a5.4 5.4 0 0 0-5.4 5.3v6.6a5.4 5.4 0 0 0 5.4 5.3h9.8a5.4 5.4 0 0 0 5.4-5.3v-6.6a5.4 5.4 0 0 0-5.4-5.3zm1 6h-1.7a1.1 1.1 0 0 0-1.1 1.2v2.8a1.1 1.1 0 0 0 1.1 1.1h1.6c.6 0 1 .5 1 1 0 .7-.4 1.2-1 1.2h-1.6a3.3 3.3 0 0 1-3.3-3.3v-2.8a3.3 3.3 0 0 1 3.3-3.3h1.6c.6.1 1 .6 1 1.1 0 .6-.4 1-1 1zm-8.1 0H20a1.1 1.1 0 0 0-1 1.2v2.8a1.1 1.1 0 0 0 1 1.1h1.6c.6 0 1.1.5 1.1 1 0 .7-.5 1.2-1 1.2h-1.6a3.3 3.3 0 0 1-3.3-3.3v-2.8a3.3 3.3 0 0 1 3.3-3.3h1.6c.5.1 1 .6 1 1.1a1.1 1.1 0 0 1-1 1z"/></svg>\')!important;width:52px!important}.i-amphtml-story-nocaptions-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="18.74" height="15.43" x="14.63" y="16.29" stroke="%23fff" stroke-width="1.85" rx="4.42"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.85" d="M22.4 20.38h-1.63a2.2 2.2 0 0 0-2.2 2.2v2.84c0 1.21.98 2.2 2.2 2.2h1.63m7.07-7.24h-1.63a2.2 2.2 0 0 0-2.2 2.2v2.84c0 1.21.98 2.2 2.2 2.2h1.63"/></svg>\')!important;width:52px!important}.i-amphtml-story-pause-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="2.1" d="M20.33 16.86v15.4m7.34-15.4v15.4"/></svg>\')!important}.i-amphtml-story-play-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M17.74 30.34V18.53a1.8 1.8 0 0 1 2.77-1.52l9.23 5.92a1.8 1.8 0 0 1 0 3.03l-9.23 5.9a1.8 1.8 0 0 1-2.77-1.52z"/></svg>\')!important}.i-amphtml-story-share-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="%23fff" d="m21.1 25.4 9.87-9.86 1.42 1.42-9.86 9.87z"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="m16.85 19.82 15.33-4.14c.04 0 .07.03.06.06l-4.02 15.34a1.6 1.6 0 0 1-2.97.33l-2.93-5.73-5.77-2.88a1.6 1.6 0 0 1 .3-2.98z"/></svg>\')!important}.i-amphtml-story-info-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="2.2" height="6.7" x="22.9" y="22.6" fill="%23fff" rx="1.1"/><path stroke="%23fff" stroke-width="1.9" d="M31.7 24a7.7 7.7 0 1 1-15.4 0 7.7 7.7 0 0 1 15.4 0z"/><circle cx="24" cy="20.2" r="1.2" fill="%23fff"/></svg>\')!important;display:none!important;background-size:auto!important}.i-amphtml-story-close-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="1.84" height="18.84" x="16.68" y="18" fill="%23fff" rx=".92" transform="rotate(-45 16.68 18)"/><rect width="1.84" height="18.84" x="30" y="16.7" fill="%23fff" rx=".92" transform="rotate(45 30 16.7)"/></svg>\')!important}.i-amphtml-story-skip-to-next{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M17 29.2V18.8c0-1.2 1.4-2 2.5-1.3l7.5 5.2c1 .6 1 2 0 2.6l-7.5 5.2c-1 .7-2.5 0-2.5-1.3z"/><rect width="1.8" height="15.6" x="30.2" y="16.2" fill="%23fff" rx=".9"/></svg>\')!important}[desktop] .i-amphtml-story-skip-to-next{display:block!important}.i-amphtml-story-has-new-page-notification-container{position:absolute!important;z-index:100002!important;top:32px!important;right:0!important;left:0!important;opacity:0!important}.i-amphtml-story-has-new-page-notification-container,.i-amphtml-story-has-new-page-text-wrapper{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-has-new-page-text-wrapper{background-color:rgba(32,33,37,0.8)!important;-ms-flex-align:center!important;align-items:center!important;padding:4px 10px 4px 0!important;border-radius:5px!important}[dir=rtl] .i-amphtml-story-has-new-page-text-wrapper{padding-right:0!important;padding-left:10px!important}.i-amphtml-story-has-new-page-text{color:#fff!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important;font-weight:700!important}.i-amphtml-story-has-new-page-circle-icon{background:#03ffa0!important;border-radius:50%!important;height:6px!important;width:6px!important;position:relative!important;box-shadow:0 0 0 2px rgba(3,255,160,0.5)!important;margin:0px 10px!important}.i-amphtml-embedded.i-amphtml-first-page-active .i-amphtml-story-info-control{display:block!important}.i-amphtml-story-no-sharing .i-amphtml-story-info-control,.i-amphtml-story-no-sharing .i-amphtml-story-share-control{display:none!important}.i-amphtml-animate-progress li{transition:transform 0.8s cubic-bezier(0.4,0,0.2,1)!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-progress-bar{height:3px!important}.i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{border-radius:0px!important;list-style:none!important;margin:0 2px!important;width:2px!important;position:absolute!important;transform-origin:left!important}[dir=rtl].i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{transform-origin:right!important}[desktop] .i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{width:3px!important}.i-amphtml-story-desktop-one-panel.i-amphtml-story-system-layer{width:var(--i-amphtml-story-desktop-one-panel-width)!important;margin:auto!important;margin-top:var(\n    --i-amphtml-story-desktop-one-panel-responsive-margin\n  )!important;border-radius:var(\n    --i-amphtml-story-desktop-one-panel-border-radius\n  )!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-system-layer.css*/'
                      )),
                      (this.$S = this.US.querySelector(
                        ".i-amphtml-story-system-layer-buttons"
                      )),
                      this.gT(),
                      this._T.subscribe(
                        xi.CAN_SHOW_SYSTEM_LAYER_BUTTONS,
                        (t) => {
                          this.US.classList.toggle(
                            "i-amphtml-story-ui-no-buttons",
                            !t
                          );
                        },
                        !0
                      ),
                      ei(this.i).isIos() && this.US.setAttribute("ios", ""),
                      (this.Be = mi(this.i.document.documentElement)),
                      (this.FS = this.Be.isEmbedded()
                        ? new Xo(this.i, this.Be)
                        : null),
                      vs(this.Be, this._T)
                        ? (this.US.classList.add("i-amphtml-embedded"),
                          this.getShadowRoot().setAttribute(on, ""))
                        : this.getShadowRoot().removeAttribute(on),
                      this.HS(),
                      this.getShadowRoot().setAttribute(gn, "noshow")),
                    this.ll
                  );
                }
                HS() {
                  if (!this.Be || "auto" !== this.Be.getParam("attribution"))
                    return;
                  this.US.querySelector(
                    ".i-amphtml-story-attribution-logo"
                  ).src =
                    bs(this.DS, "entity-logo-src") ||
                    bs(this.DS, "publisher-logo-src");
                  const t = this.US.querySelector(`.${f(yn)}`);
                  (t.href =
                    bs(this.DS, "entity-url") ||
                    pi(this.DS).getSourceOrigin(oi(this.DS).sourceUrl)),
                    (this.US.querySelector(
                      ".i-amphtml-story-attribution-text"
                    ).textContent =
                      this.DS.getAttribute("entity") ||
                      this.DS.getAttribute("publisher")),
                    t.classList.add("i-amphtml-story-attribution-visible");
                }
                gT() {
                  this.getShadowRoot().addEventListener("click", (t) => {
                    const i = t.target;
                    v(i, `.${an}, .${an} *`)
                      ? this.BS(!0)
                      : v(i, `.${pn}, .${pn} *`)
                      ? this.BS(!1)
                      : v(i, `.${mn}, .${mn} *`)
                      ? this.YS(!0)
                      : v(i, `.${cn}, .${cn} *`)
                      ? this.YS(!1)
                      : v(i, `.${nn}, .${nn} *`)
                      ? this.GS(!1)
                      : v(i, `.${rn}, .${rn} *`)
                      ? this.GS(!0)
                      : v(i, `.${dn}, .${dn} *`)
                      ? this.WS(t)
                      : v(i, `.${fn}, .${fn} *`)
                      ? this.qS()
                      : v(i, `.${ln}, .${ln} *`)
                      ? this.XS(t.target)
                      : v(i, `.${yn}, .${yn} *`) &&
                        As(
                          b(i, (t) => v(t, "a[href]")),
                          this.DS
                        );
                  }),
                    this._T.subscribe(xi.AD_STATE, (t) => {
                      this.KS(t);
                    }),
                    this._T.subscribe(
                      xi.CAN_SHOW_AUDIO_UI,
                      (t) => {
                        this.ZS(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.CAN_SHOW_SHARING_UIS,
                      (t) => {
                        this.JS(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.STORY_HAS_PLAYBACK_UI_STATE,
                      (t) => {
                        this.QS(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.MUTED_STATE,
                      (t) => {
                        this.Dm(t);
                      },
                      !0
                    ),
                    this._T.subscribe(xi.UI_STATE, (t) => {
                      this.oh.mutate(() => this.lV(t));
                    }),
                    this.lV(this._T.get(xi.UI_STATE)),
                    this._T.subscribe(
                      xi.PAUSED_STATE,
                      (t) => {
                        this.tO(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.CURRENT_PAGE_INDEX,
                      (t) => {
                        this.iO(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.RTL_STATE,
                      (t) => {
                        this.Dk(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.KEYBOARD_ACTIVE_STATE,
                      (t) => {
                        this.sO(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.PAGE_HAS_CAPTIONS_STATE,
                      (t) => this.nO(t),
                      !0
                    ),
                    this._T.subscribe(xi.CAPTIONS_STATE, (t) => this.eO(t), !0),
                    this._T.subscribe(
                      xi.PAGE_HAS_AUDIO_STATE,
                      (t) => {
                        this.oO(t);
                      },
                      !0
                    ),
                    this._T.subscribe(
                      xi.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE,
                      (t) => {
                        this.rO(t);
                      },
                      !0
                    ),
                    this._T.subscribe(xi.SYSTEM_UI_IS_VISIBLE_STATE, (t) => {
                      this.aO(t);
                    }),
                    this._T.subscribe(xi.NEW_PAGE_AVAILABLE_ID, () => {
                      this.hO();
                    }),
                    this._T.subscribe(
                      xi.VIEWER_CUSTOM_CONTROLS,
                      (t) => this.lO(t),
                      !0
                    );
                }
                getShadowRoot() {
                  return this.US;
                }
                KS(t) {
                  t
                    ? this.getShadowRoot().setAttribute(Qo, "")
                    : this.getShadowRoot().removeAttribute(Qo);
                }
                ZS(t) {
                  this.oh.mutate(() => {
                    this.getShadowRoot().classList.toggle(
                      "i-amphtml-story-no-audio-ui",
                      !t
                    );
                  });
                }
                JS(t) {
                  this.oh.mutate(() => {
                    this.getShadowRoot().classList.toggle(
                      "i-amphtml-story-no-sharing",
                      !t
                    );
                  });
                }
                QS(t) {
                  this.oh.mutate(() => {
                    this.getShadowRoot().classList.toggle(
                      "i-amphtml-story-has-playback-ui",
                      t
                    );
                  });
                }
                GS(t) {
                  this._T.dispatch(24, t);
                }
                oO(t) {
                  (t = t || !!this._T.get(xi.STORY_HAS_BACKGROUND_AUDIO_STATE)),
                    this.oh.mutate(() => {
                      t
                        ? this.getShadowRoot().setAttribute(un, "")
                        : this.getShadowRoot().removeAttribute(un);
                    });
                }
                nO(t) {
                  ct(this.US, "i-amphtml-current-page-has-captions", t);
                }
                eO(t) {
                  ct(this.US, "captions-on", t);
                }
                rO(t) {
                  this.oh.mutate(() => {
                    r(
                      this.getShadowRoot().querySelectorAll(
                        ".i-amphtml-paused-display button"
                      )
                    ).forEach((i) => {
                      i.disabled = !t;
                    });
                  });
                }
                Dm(t) {
                  this.oh.mutate(() => {
                    t
                      ? this.getShadowRoot().setAttribute(tn, "")
                      : this.getShadowRoot().removeAttribute(tn);
                  });
                }
                tO(t) {
                  this.oh.mutate(() => {
                    t
                      ? this.getShadowRoot().setAttribute(sn, "")
                      : this.getShadowRoot().removeAttribute(sn);
                  });
                }
                pO(t) {
                  this.MI && this.Re.cancel(this.MI),
                    (this.MI = this.Re.delay(() => this.mO(t), 1500));
                }
                mO(t) {
                  this.ll &&
                    this.oh.mutate(() => {
                      this.getShadowRoot().setAttribute(t, "noshow");
                    });
                }
                lV(t) {
                  const i = this.getShadowRoot();
                  switch (
                    (i.classList.remove("i-amphtml-story-desktop-fullbleed"),
                    i.classList.remove("i-amphtml-story-desktop-one-panel"),
                    i.removeAttribute("desktop"),
                    t)
                  ) {
                    case 2:
                      i.setAttribute("desktop", ""),
                        i.classList.add("i-amphtml-story-desktop-fullbleed");
                      break;
                    case 4:
                      i.classList.add("i-amphtml-story-desktop-one-panel");
                  }
                }
                aO(t) {
                  this.oh.mutate(() => {
                    const i = this.getShadowRoot();
                    i.classList.toggle("i-amphtml-story-hidden", !t),
                      r(i.querySelectorAll("button")).forEach((i) =>
                        (function (t, i) {
                          i
                            ? (t.removeAttribute("tab-index"),
                              t.removeAttribute("aria-hidden"))
                            : (t.setAttribute("tab-index", "-1"),
                              t.setAttribute("aria-hidden", "true"));
                        })(i, t)
                      );
                  });
                }
                iO(t) {
                  this.oh.mutate(() => {
                    const i = this._T.get(xi.PAGE_IDS).length - 1;
                    this.getShadowRoot().classList.toggle(
                      "i-amphtml-first-page-active",
                      0 === t
                    ),
                      this.getShadowRoot().classList.toggle(
                        "i-amphtml-last-page-active",
                        t === i
                      );
                  });
                }
                Dk(t) {
                  this.oh.mutate(() => {
                    t
                      ? this.getShadowRoot().setAttribute("dir", "rtl")
                      : this.getShadowRoot().removeAttribute("dir");
                  });
                }
                sO(t) {
                  this.oh.mutate(() => {
                    this.getShadowRoot().classList.toggle(
                      "amp-mode-keyboard-active",
                      t
                    );
                  });
                }
                BS(t) {
                  this._T.dispatch(20, t);
                }
                YS(t) {
                  this._T.dispatch(wi, t);
                }
                WS(t) {
                  if ((t.preventDefault(), t.target[_n]))
                    return void this.XS(t.target);
                  const i = this._T.get(xi.SHARE_MENU_STATE);
                  this._T.dispatch(28, !i);
                }
                XS(t) {
                  const i = t[_n];
                  this.FS &&
                    this.FS.send("documentStateUpdate", {
                      state: "AMP_STORY_PLAYER_EVENT",
                      value: i,
                    });
                }
                qS() {
                  const t = this._T.get(xi.INFO_DIALOG_STATE);
                  this._T.dispatch(17, !t);
                }
                hO() {
                  this.oh.mutate(() => {
                    this.getShadowRoot().setAttribute(gn, "show"), this.pO(gn);
                  });
                }
                lO(t) {
                  t.length <= 0 ||
                    t.forEach((t) => {
                      if (!t.name) return;
                      const i = vn[t.name];
                      let s;
                      if (
                        (i && i.selector
                          ? (s = y(this.getShadowRoot(), i.selector))
                          : ((s = vt("button", {
                              class: "i-amphtml-story-button",
                            })),
                            this.oh.mutate(() => {
                              this.$S.appendChild(s);
                            })),
                        this.oh.mutate(() => {
                          s.classList.add(ln);
                        }),
                        "hidden" === t.visibility &&
                          this.oh.mutate(() => {
                            s.classList.add("i-amphtml-story-ui-hide-button");
                          }),
                        (t.visibility && "visible" !== t.visibility) ||
                          this.oh.mutate(() => {
                            s.classList.remove(
                              "i-amphtml-story-ui-hide-button"
                            );
                          }),
                        "disabled" === t.state &&
                          this.oh.mutate(() => {
                            s.disabled = !0;
                          }),
                        "start" === t.position)
                      ) {
                        const t = this.US.querySelector(
                          ".i-amphtml-story-system-layer-buttons-start-position"
                        );
                        this.oh.mutate(() => {
                          this.$S.removeChild(s), t.appendChild(s);
                        });
                      }
                      t.backgroundImageUrl &&
                        O(s, {
                          "background-image": `url('${t.backgroundImageUrl}')`,
                        }),
                        (s[_n] = `amp-story-player-${t.name}`);
                    });
                }
                updateProgress(t, i) {
                  this.jS.updateProgress(t, i);
                }
              })(this.win, this.element)),
              new (class {
                constructor(t, i) {
                  (this.i = t),
                    (this.Zk = i),
                    (this.Av = pi(i)),
                    (this.mi = null),
                    (this.cO = null),
                    (this.uO = null),
                    (this.dO = null),
                    (this._T = Pi(this.i)),
                    (this.sa = ri($t(this.i.document))),
                    (this.NS = qi(this.i, i)),
                    (this.Re = li(this.i)),
                    (this.fO = null),
                    (this._O = null),
                    this._T.subscribe(xi.INTERACTIVE_COMPONENT_STATE, (t) => {
                      this.gO(t);
                    }),
                    (this.Ri = 0),
                    (this.yO = null),
                    (this.AO = null);
                }
                gO(t) {
                  switch (t.state) {
                    case 0:
                      this.PO(0, null);
                      break;
                    case 1:
                      this.PO(1, t);
                  }
                }
                PO(t, i) {
                  switch (t) {
                    case 1:
                      (this.Ri = t),
                        this.bO(i),
                        this.NS.triggerEvent("story-focus", this.fO);
                      break;
                    case 0:
                      (this.Ri = t), this.bO(null);
                  }
                }
                vO() {
                  return (
                    (this.cO = this.TO()),
                    (this.mi = gs(
                      vt("div", null),
                      this.cO,
                      '.i-amphtml-story-focused-state-layer{top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:100001!important;position:absolute!important}.i-amphtml-story-focused-state-layer.i-amphtml-hidden{opacity:0!important;pointer-events:none!important;transition:opacity 0.1s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-focused-state-layer-nav-button-container{height:100%!important;width:160px!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-left{background-image:linear-gradient(90deg,rgba(33,33,33,0.15) 2%,rgba(33,33,33,0))!important;left:0!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-right{background-image:linear-gradient(90deg,rgba(33,33,33,0) 2%,rgba(33,33,33,0.15))!important;right:0!important}.i-amphtml-story-focused-state-layer-nav-button{position:absolute!important;top:0!important;bottom:0!important;margin:auto!important;width:48px!important;height:48px!important;padding:0!important;border:0!important;background-color:transparent!important;filter:drop-shadow(0px 0px 16px rgba(0,0,0,0.5))!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{left:-8px!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="%23FFF"><path d="M30.8 14.8 28 12 16 24l12 12 2.8-2.8-9.1-9.2z"/><path d="M0 0h48v48H0z" fill="none"/></svg>\')!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{transform:translate3d(8px,0,0);transition:transform 0s linear .1s!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{right:-8px!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="%23FFF"><path d="m20 12-2.8 2.8 9.1 9.2-9.1 9.2L20 36l12-12z"/><path d="M0 0h48v48H0z" fill="none"/></svg>\')!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{transform:translate3d(-8px,0,0);transition:transform 0s linear .1s!important}[desktop] .i-amphtml-story-focused-state-layer-nav-button-container{display:none!important}.i-amphtml-hidden>.i-amphtml-story-tooltip,.i-amphtml-hidden>.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translateZ(0)!important;transition:transform 0s linear 0.1s!important}.i-amphtml-story-tooltip{max-width:248px!important;height:40px!important;border-radius:6px!important;padding:8px!important;position:absolute!important;box-sizing:border-box!important;text-decoration:none!important;text-shadow:none!important;font-weight:500!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;background:#fff!important;box-shadow:0px 6px 16px rgba(0,0,0,0.16)!important;transform:translate3d(0,-16px,0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-tooltip-theme-dark{background:#202125!important}.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translate3d(0,16px,0)!important}.i-amphtml-tooltip-text{text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;margin:0px 5px!important;font-family:Roboto,sans-serif!important;font-size:14px!important;color:#3c4043!important;letter-spacing:0!important;line-height:20px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-text{color:#9aa0a6!important}.i-amphtml-story-tooltip-custom-icon{width:24px!important;height:24px!important;margin:0px 5px!important;background-size:cover!important;background-position:50%!important;background-repeat:no-repeat!important;filter:drop-shadow(0px 0px 8px rgba(0,0,0,0.08))!important;-ms-flex-negative:0;flex-shrink:0;border-radius:50%!important}.i-amphtml-story-tooltip-custom-icon.i-amphtml-hidden{display:none!important}.i-amphtml-tooltip-action-icon{width:16px!important;height:16px!important;margin:0px 5px!important;padding-bottom:2px!important;-ms-flex-negative:0;flex-shrink:0}.i-amphtml-tooltip-action-icon-launch{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="%23757575"><path d="M0 0h48v48H0z" fill="none"/><path d="M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z"/></svg>\')!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-action-icon-launch{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="rgba(255, 255, 255, 0.54)"><path d="M0 0h48v48H0z" fill="none"/><path d="M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z"/></svg>\')!important}.i-amphtml-story-tooltip-arrow{border-right:8px solid transparent!important;border-left:8px solid transparent!important;border-top:10px solid #fff!important;position:absolute!important;bottom:-8px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-story-tooltip-arrow{border-top:10px solid #202125!important}.i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{bottom:auto!important;top:-8px!important;border-top:0px!important;border-bottom:10px solid #fff!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{border-bottom:10px solid #202125!important}.amp-social-share-twitter-no-background{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path fill="%231da1f2" d="M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23"/></svg>\')}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-tooltip.css*/'
                    )),
                    this.uO.addEventListener(
                      "click",
                      (t) => {
                        t.stopPropagation(),
                          this.NS.triggerEvent("story-click-through", this.fO),
                          this.uO.href && this.EO(t);
                      },
                      !0
                    ),
                    this.mi
                  );
                }
                xO() {
                  this.Re.delay(() => {
                    this.MO();
                  }, 100),
                    this._T.dispatch(18, { state: 0 });
                }
                bO(t) {
                  t
                    ? ((this.fO = t.element),
                      this.cO || (this.Zk.appendChild(this.vO()), this.gT()),
                      this.Re.delay(() => {
                        this.wO(t);
                      }, 100))
                    : this.sa.mutateElement(this.cO, () => {
                        this.cO.classList.toggle("i-amphtml-hidden", !0);
                      });
                }
                wO(t) {
                  this.IO(t.element),
                    this.RO(t),
                    (this._O = Vt(
                      this.Zk.querySelector("amp-story-page[active]")
                    )),
                    this.sa.mutateElement(this.cO, () => {
                      this.cO.classList.toggle("i-amphtml-hidden", !1),
                        (function (t) {
                          try {
                            t.focus();
                          } catch (t) {}
                        })(this.cO.querySelector("a.i-amphtml-story-tooltip"));
                    });
                }
                gT() {
                  this._T.subscribe(
                    xi.UI_STATE,
                    (t) => {
                      this.lV(t);
                    },
                    !0
                  ),
                    this._T.subscribe(xi.CURRENT_PAGE_ID, () => {
                      1 === this.Ri && this.xO();
                    });
                }
                lV(t) {
                  this.sa.mutateElement(this.cO, () => {
                    const i = 2 === t || 4 === t;
                    ct(this.cO, "desktop", i);
                  });
                }
                RO(t) {
                  const i = St(
                      this.VO(t.element),
                      "Invalid embed config for target",
                      t.element
                    ),
                    s = this.fO.getAttribute("theme");
                  s && "dark" === s.toLowerCase() && this.uO.classList.add(ws),
                    this.kO(t.element),
                    this.SO(t.element, i),
                    this.OO(i),
                    this.CO(),
                    this.zO(t);
                }
                IO(t) {
                  v(t, Ms()) && this.uO.setAttribute("href", this.NO(t));
                }
                NO(t) {
                  if ("amp-twitter" == t.tagName.toLowerCase())
                    return (
                      "https://twitter.com/_/status/" +
                      t.getAttribute("data-tweetid")
                    );
                  const i = t.getAttribute("href");
                  return this.Av.isProtocolValid(i)
                    ? this.Av.parse(i).href
                    : (It().error(Is, "The tooltip url is invalid"), "");
                }
                VO(t) {
                  const i = Es[t.tagName.toLowerCase()];
                  return i && v(t, i.selector)
                    ? i
                    : (It().error(Is, "No config matching provided target."),
                      null);
                }
                kO(t) {
                  const i =
                    t.getAttribute("data-tooltip-text") ||
                    (function (t, i) {
                      const s = pi(t);
                      let o;
                      try {
                        o = s.parse(s.getSourceOrigin(i));
                      } catch (t) {
                        o = s.parse(i);
                      }
                      return o.hostname;
                    })(t, this.NO(t));
                  this.uO.querySelector(".i-amphtml-tooltip-text").textContent =
                    i;
                }
                OO(t) {
                  const i = this.uO.querySelector(
                    ".i-amphtml-tooltip-action-icon"
                  );
                  this.sa.mutateElement(i, () => {
                    i.classList.toggle(t.actionIcon, !0);
                  });
                }
                SO(t, i) {
                  const s = t.getAttribute("data-tooltip-icon");
                  if (!this.Av.isProtocolValid(s))
                    return void It().error(
                      Is,
                      "The tooltip icon url is invalid"
                    );
                  const o = this.uO.querySelector(
                    ".i-amphtml-story-tooltip-custom-icon"
                  );
                  s || i.customIconClassName
                    ? s
                      ? this.sa.mutateElement(o, () => {
                          const { href: t } = this.Av.parse(s);
                          O(o, { "background-image": `url(${t})` });
                        })
                      : this.sa.mutateElement(o, () => {
                          o.classList.add(i.customIconClassName);
                        })
                    : o.classList.toggle("i-amphtml-hidden", !0);
                }
                CO() {
                  this.LO()
                    ? this._T.get(xi.RTL_STATE)
                      ? this.yO.setAttribute("hidden", !0)
                      : this.AO.setAttribute("hidden", !0)
                    : (this.yO.removeAttribute("hidden"),
                      this.AO.removeAttribute("hidden"));
                }
                LO() {
                  return (
                    this._T.get(xi.CURRENT_PAGE_INDEX) + 1 ===
                    this._T.get(xi.PAGE_IDS).length
                  );
                }
                zO(t) {
                  const i = { arrowOnTop: !1 };
                  this.sa.measureMutateElement(
                    this.Zk,
                    () => {
                      const s = this._O.getBoundingClientRect();
                      this.DO(t, s, i), this.UO(t, s, i);
                    },
                    () => {
                      this.uO.classList.toggle(
                        "i-amphtml-tooltip-arrow-on-top",
                        i.arrowOnTop
                      ),
                        O(this.dO, { left: `${i.arrowLeftOffset}px` }),
                        O(Vt(this.uO), {
                          top: `${i.tooltipTop}px`,
                          left: `${i.tooltipLeft}px`,
                        });
                    }
                  );
                }
                UO(t, i, s) {
                  const o = this.uO.offsetHeight;
                  (s.tooltipTop = t.clientY - o - 24),
                    s.tooltipTop < i.top + 48 &&
                      ((s.arrowOnTop = !0), (s.tooltipTop = t.clientY + 24));
                }
                DO(t, i, s) {
                  const o = this.uO.offsetWidth;
                  s.tooltipLeft = t.clientX - o / 2;
                  const n = i.left + i.width - 32 - o,
                    r = i.left + 32;
                  (s.tooltipLeft = Math.min(s.tooltipLeft, n)),
                    (s.tooltipLeft = Math.max(s.tooltipLeft, r)),
                    (s.arrowLeftOffset = Math.abs(
                      t.clientX - s.tooltipLeft - this.dO.offsetWidth / 2
                    )),
                    (s.arrowLeftOffset = Math.min(s.arrowLeftOffset, o - 24)),
                    (s.arrowLeftOffset = Math.max(s.arrowLeftOffset, 0));
                }
                $O(t) {
                  b(t.target, (t) => t == this.uO) ||
                    (t.stopPropagation(), this.xO());
                }
                MO() {
                  this.sa.mutateElement(this.uO, () => {
                    this.uO.querySelector(
                      ".i-amphtml-tooltip-action-icon"
                    ).className = "i-amphtml-tooltip-action-icon";
                    const t = this.uO.querySelector(
                      ".i-amphtml-story-tooltip-custom-icon"
                    );
                    (t.className = "i-amphtml-story-tooltip-custom-icon"),
                      (function (t, i) {
                        for (let s = 0; s < i.length; s++) C(t, i[s], null);
                      })(t, ["background-image"]),
                      this.uO.classList.remove(ws),
                      this.uO.removeAttribute("href");
                  });
                }
                TO() {
                  const t = this._T.get(xi.RTL_STATE);
                  return (
                    (this.dO = vt("div", {
                      class: "i-amphtml-story-tooltip-arrow",
                    })),
                    (this.uO = vt(
                      "a",
                      {
                        class: "i-amphtml-story-tooltip",
                        target: "_blank",
                        role: "tooltip",
                      },
                      vt("div", {
                        class: "i-amphtml-story-tooltip-custom-icon",
                      }),
                      vt("p", { class: "i-amphtml-tooltip-text", ref: "text" }),
                      vt("div", { class: "i-amphtml-tooltip-action-icon" }),
                      this.dO
                    )),
                    (this.yO = vt("button", {
                      class:
                        "i-amphtml-story-focused-state-layer-nav-button i-amphtml-story-tooltip-nav-button-left",
                      onClick: (i) => this.jO(i, t ? ki : Ri),
                    })),
                    (this.AO = vt("button", {
                      class:
                        "i-amphtml-story-focused-state-layer-nav-button i-amphtml-story-tooltip-nav-button-right",
                      onClick: (i) => this.jO(i, t ? Ri : ki),
                    })),
                    vt(
                      "section",
                      {
                        onClick: (t) => this.$O(t),
                        class:
                          "i-amphtml-story-focused-state-layer i-amphtml-story-system-reset i-amphtml-hidden",
                      },
                      vt(
                        "div",
                        {
                          class:
                            "i-amphtml-story-focused-state-layer-nav-button-container i-amphtml-story-tooltip-nav-button-left",
                        },
                        this.yO
                      ),
                      vt(
                        "div",
                        {
                          class:
                            "i-amphtml-story-focused-state-layer-nav-button-container i-amphtml-story-tooltip-nav-button-right",
                        },
                        this.AO
                      ),
                      this.uO
                    )
                  );
                }
                jO(t, i) {
                  t.preventDefault(),
                    this._T.dispatch(7, Wi),
                    Ci(this.i, this.mi, i, void 0, { bubbles: !0 });
                }
                EO(t) {
                  t.preventDefault(), As(this.uO, this.Zk);
                }
                getShadowRootForTesting() {
                  return this.mi;
                }
              })(this.win, this.element),
              (this.FO = []),
              (this.HO = []),
              (this.AT = Fi(this.win)),
              (this.BO = null),
              (this.YO = this.win.matchMedia("(min-aspect-ratio: 31 / 40)")),
              (this.GO = this.win.matchMedia(
                "(min-width: 550px) and (min-height: 1024px)"
              )),
              (this.WO = this.win.matchMedia("(orientation: landscape)")),
              (this.qO = null),
              (this.XO = new (class {
                constructor(t, i) {
                  (this.i = t),
                    (this.oh = ci(this.i)),
                    (this.Re = li(this.i)),
                    (this.KO = null),
                    (this.ZO = null),
                    (this._T = Pi(this.i)),
                    (this.DS = i);
                }
                build() {
                  this.KO ||
                    ((this.KO = vt(
                      "aside",
                      {
                        class:
                          "i-amphtml-story-hint-container i-amphtml-story-system-reset i-amphtml-hidden",
                      },
                      vt(
                        "div",
                        { class: "i-amphtml-story-navigation-help-overlay" },
                        vt(
                          "div",
                          {
                            class:
                              "i-amphtml-story-navigation-help-section prev-page",
                          },
                          vt(
                            "div",
                            { class: "i-amphtml-story-hint-placeholder" },
                            vt(
                              "div",
                              { class: "i-amphtml-story-hint-tap-button" },
                              vt("div", {
                                class: "i-amphtml-story-hint-tap-button-icon",
                              })
                            ),
                            vt("div", {
                              class: "i-amphtml-story-hint-tap-button-text",
                              "i-amphtml-i18n-text-content": "3",
                            })
                          )
                        ),
                        vt(
                          "div",
                          {
                            class:
                              "i-amphtml-story-navigation-help-section next-page",
                          },
                          vt(
                            "div",
                            { class: "i-amphtml-story-hint-placeholder" },
                            vt(
                              "div",
                              { class: "i-amphtml-story-hint-tap-button" },
                              vt("div", {
                                class: "i-amphtml-story-hint-tap-button-icon",
                              })
                            ),
                            vt("div", {
                              class: "i-amphtml-story-hint-tap-button-text",
                              "i-amphtml-i18n-text-content": "2",
                            })
                          )
                        )
                      )
                    )),
                    Os(this.KO, this.DS).then(() => {
                      const t = gs(
                        vt("div", null),
                        this.KO,
                        '.i-amphtml-story-hint-container{transition-property:opacity!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;z-index:2!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.prev-page,[dir=rtl].prev-page{-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}[dir=rtl].show-first-page-overlay .prev-page{background:linear-gradient(270deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-ms-flex:3!important;flex:3!important;background-image:linear-gradient(#e0d5d5 60%,rgba(255,255,255,0) 0)!important;background-position:0!important;background-size:1px 15px!important;background-repeat:repeat-y!important}[dir=rtl].i-amphtml-story-hint-container .next-page{border-left:none!important;background-position:100%!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:""!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important;width:30px!important;height:30px!important;display:inline-block!important}[dir=rtl].show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:""!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{animation:expandingBubble 1000ms cubic-bezier(0.4,0,0.2,1) infinite!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:""!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important;width:24px!important;height:24px!important;display:inline-block!important}[dir=rtl] .next-page .i-amphtml-story-hint-tap-button-icon:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important;word-break:break-word!important;padding:0 6px!important}@keyframes expandingBubble{0%{transform:scale(1);opacity:0}50%{transform:scale(1.5);opacity:1}to{transform:scale(1);opacity:0}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-hint.css*/'
                      );
                      this.oh.mutate(() => {
                        this.DS.appendChild(t);
                      });
                    }),
                    this._T.subscribe(
                      xi.RTL_STATE,
                      (t) => {
                        this.Dk(t);
                      },
                      !0
                    ),
                    this._T.subscribe(xi.SYSTEM_UI_IS_VISIBLE_STATE, (t) => {
                      this.aO(t);
                    }),
                    this._T.subscribe(xi.INTERACTIVE_COMPONENT_STATE, (t) => {
                      this.JO(1 === t.state);
                    }));
                }
                QO(t) {
                  0 === this._T.get(xi.UI_STATE) &&
                    (this.build(),
                    this.oh.mutate(() => {
                      this.KO.classList.toggle(Bo, t == Bo),
                        this.KO.classList.toggle(Yo, t == Yo),
                        this.KO.classList.remove("i-amphtml-hidden");
                      const i = t == Bo ? 3e3 : 275;
                      this.hideAfterTimeout(i);
                    }));
                }
                showNavigationOverlay() {
                  this._T.get(xi.SHARE_MENU_STATE) || this.QO(Bo);
                }
                showFirstPageHintOverlay() {
                  this.QO(Yo);
                }
                hideAfterTimeout(t) {
                  this.ZO = this.Re.delay(() => this._C(), t);
                }
                hideAllNavigationHint() {
                  this._C(),
                    null !== this.ZO &&
                      (this.Re.cancel(this.ZO), (this.ZO = null));
                }
                _C() {
                  this.KO &&
                    this.oh.mutate(() => {
                      this.KO.classList.add("i-amphtml-hidden");
                    });
                }
                Dk(t) {
                  this.oh.mutate(() => {
                    t
                      ? this.KO.setAttribute("dir", "rtl")
                      : this.KO.removeAttribute("dir");
                  });
                }
                aO(t) {
                  t || this.hideAllNavigationHint();
                }
                JO(t) {
                  t && this.hideAllNavigationHint();
                }
              })(this.win, this.element)),
              (this.yC = Mo.for(this)),
              (this.Re = li(this.win)),
              (this.bh = ei(this.win)),
              (this.Be = null),
              (this.FS = null),
              (this.TC = null),
              (this.EC = null),
              (this.xC = null),
              (this.MC = null),
              (this.IC = !1),
              (this.RC = null),
              (this.VC = new o()),
              (this.kC = null),
              (this.SC = -1),
              (this.OC = new o()),
              (this.CC = null);
          }
          buildCallback() {
            var t, i;
            (this.Be = mi(this.element)),
              !(
                (null !== (t = this.win.CSS) &&
                  void 0 !== t &&
                  null !== (i = t.supports) &&
                  void 0 !== i &&
                  i.call(t, "height: 1dvh")) ||
                (function (t, i, s) {
                  const o = z(t.style, "--story-dvh", void 0);
                  if (o) return Y(o) ? t.style.getPropertyValue(o) : t.style[o];
                })(this.win.document.documentElement)
              ) &&
                (this.zC(this.getViewport().getSize()),
                this.getViewport().onResize((t) => this.zC(t))),
              (this.FS = this.Be.isEmbedded()
                ? new Xo(this.win, this.Be)
                : null),
              (this.CC = this.NC()),
              this.LC(),
              this.DC() && this.UC(),
              this.mutateElement(() => {});
            const s = this.$C();
            s &&
              this.element
                .querySelector(`amp-story-page#${f(s)}`)
                .setAttribute("active", ""),
              this.gT(),
              this.jC(),
              this.FC(),
              (this.MC = this.HC()),
              this._T.dispatch(34, this.MC),
              this.BC() &&
                this.win.document.documentElement.setAttribute(
                  "data-story-supports-landscape",
                  ""
                ),
              this.bh.isBot() || this.element.removeAttribute("title"),
              (function (t, i) {
                const s = [];
                for (let i = t.firstChild; i; i = i.nextSibling)
                  i.nodeType === Node.TEXT_NODE && s.push(i);
                return s;
              })(this.element).forEach((t) => {
                this.element.removeChild(t);
              }),
              qt(this.win, "amp-story-branching") &&
                this.registerAction("goToPage", (t) => {
                  const { args: i } = t;
                  i &&
                    (this._T.dispatch(7, "goToPageAction"), this.xk(i.id, Lo));
                });
            const o = ai(this.win);
            (qt(this.win, "story-disable-animations-first-page") ||
              bi(this.win) ||
              Cs(this.win) ||
              Ps(this.getAmpDoc())) &&
              o.addEnabledExperiment("story-disable-animations-first-page");
            const n = this.getAmpDoc().getRootNode().documentElement,
              r = n.querySelector(
                'style[amp-extension="amp-story"][i-amphtml-version]'
              ),
              a = n.querySelector(
                'link[amp-extension="amp-story"][rel=stylesheet]'
              );
            r
              ? o.addEnabledExperiment("story-inline-css")
              : a && o.addEnabledExperiment("story-link-css"),
              qt(this.win, "story-load-inactive-outside-viewport") &&
                (o.addEnabledExperiment("story-load-inactive-outside-viewport"),
                this.element.classList.add(
                  "i-amphtml-experiment-story-load-inactive-outside-viewport"
                )),
              this.YC();
          }
          cw() {
            this.GC(),
              this._T.get(xi.MUTED_STATE) || this.WC(),
              "inactive" === this.getAmpDoc().getVisibilityState() &&
                (this.BO.setState(0),
                this.BO.element.setAttribute("active", ""));
          }
          xV() {
            this.qC(), this._T.get(xi.MUTED_STATE) || this.XC();
          }
          GC() {
            null === this.TC && (this.TC = !!this._T.get(xi.PAUSED_STATE)),
              this._T.dispatch(wi, !0);
          }
          qC() {
            this._T.dispatch(wi, this.TC), (this.TC = null);
          }
          UC() {
            this.KC(), this.onResizeDebounced();
          }
          jC() {
            const t = this.element.querySelectorAll("amp-story-page"),
              i = r(t).map((t) => t.id || "default-page"),
              s = m();
            for (let o = 0; o < i.length; o++) {
              if (void 0 === s[i[o]]) {
                s[i[o]] = 0;
                continue;
              }
              It().error($n, `Duplicate amp-story-page ID ${i[o]}`);
              const n = `${i[o]}__${++s[i[o]]}`;
              (t[o].id = n), (i[o] = n);
            }
            this._T.dispatch(11, i);
          }
          ZC() {
            if (this.IC) return;
            this.IC = !0;
            const t = this.win.document.querySelector("style[amp-custom]");
            t &&
              (t.textContent = t.textContent.replace(
                /(-?[\d.]+)v(w|h|min|max)/gim,
                "calc($1 * var(--story-page-v$2))"
              ));
          }
          JC() {
            if (this.win.document.querySelector("meta[name=theme-color]"))
              return;
            const t = this.win.document.createElement("meta"),
              i = this.element.querySelector("amp-story-page");
            (t.name = "theme-color"),
              (t.content =
                B(this.win, this.element).getPropertyValue("--primary-color") ||
                B(this.win, i).getPropertyValue("background-color") ||
                "#202125"),
              this.win.document.head.appendChild(t);
          }
          QC(t, i) {
            this.tz(), this.iz(), this.element.appendChild(this.LS.build(t, i));
          }
          gT() {
            this.element.addEventListener(ki, () => {
              this.ke();
            }),
              this.element.addEventListener(Ri, () => {
                this.pm();
              }),
              this._T.subscribe(
                xi.MUTED_STATE,
                (t) => {
                  this.Dm(t), this.AT.onVariableUpdate(Ui, t);
                },
                !0
              ),
              this._T.subscribe(
                xi.MUTED_STATE,
                (t) => {
                  this.NS.triggerEvent(
                    t ? "story-audio-muted" : "story-audio-unmuted"
                  );
                },
                !1
              ),
              this._T.subscribe(xi.ADVANCEMENT_MODE, (t) => {
                this.AT.onVariableUpdate(ji, t);
              }),
              this._T.subscribe(
                xi.CAN_SHOW_AUDIO_UI,
                (t) => {
                  this.element.classList.toggle(
                    "i-amphtml-story-no-audio-ui",
                    !t
                  );
                },
                !0
              ),
              this.element.addEventListener(Ii, (t) => {
                this.getAmpDoc().isPreview() && this.sz(),
                  this.xk(gi(t).targetPageId, gi(t).direction),
                  this.XO.hideAllNavigationHint();
              }),
              this.element.addEventListener(Vi, (t) => {
                const i = gi(t),
                  s = i.pageId,
                  o = i.progress;
                if (s !== this.BO.element.id) return;
                const n = Xt(this.win, Kt);
                (!this.BO.isAd() || (n && n != Zt)) &&
                  this.LS.updateProgress(s, o);
              }),
              this.element.addEventListener(Si, () => {
                this.Qk();
              }),
              this.element.addEventListener(zi, () => {
                this.nz();
              }),
              this.element.addEventListener(Oi, () => {
                this.ez();
              }),
              this.IR.addOnTapNavigationListener((t) => {
                this.oz(t);
              }),
              this.element.addEventListener(
                "ampstory:dispatchaction",
                (t) => {}
              ),
              this._T.subscribe(
                xi.ACTIONS_ALLOWLIST,
                (t) => {
                  si(this.element).setAllowlist(t);
                },
                !0
              ),
              this._T.subscribe(xi.AD_STATE, (t) => {
                this.KS(t);
              }),
              this._T.subscribe(xi.PAUSED_STATE, (t) => {
                this.tO(t);
              }),
              this._T.subscribe(
                xi.UI_STATE,
                (t) => {
                  this.lV(t);
                },
                !0
              ),
              this._T.subscribe(
                xi.SUBSCRIPTIONS_PAGE_INDEX,
                (t) => {
                  -1 !== t && (this.OC.resolve(), (this.SC = t));
                },
                !0
              ),
              this._T.subscribe(xi.SUBSCRIPTIONS_STATE, (t) => {
                1 !== t && (this.VC.resolve(), 2 === t && this.rz());
              }),
              this._T.subscribe(xi.SUBSCRIPTIONS_DIALOG_UI_STATE, (t) => {
                t || this.az();
              }),
              this.win.document.addEventListener(
                "keydown",
                (t) => {
                  this.Oo(t);
                },
                !0
              ),
              this.win.document.addEventListener("contextmenu", (t) => {
                0 === this._T.get(xi.UI_STATE) &&
                  (this.hz(t.target) || t.preventDefault(),
                  t.stopPropagation());
              }),
              this.getAmpDoc().onVisibilityChanged(() => this.bo()),
              this.win.addEventListener("hashchange", () => {
                const t = J(this.win.location.hash).page;
                if (!t || !this.lz(t)) return;
                this.xk(t, Lo);
                let i = this.win.location.href.replace(
                  new RegExp(`page=${t}&?`),
                  ""
                );
                (function (t, i) {
                  const s = t.length - "#".length;
                  return s >= 0 && t.indexOf("#", s) == s;
                })(i) && (i = i.slice(0, -1)),
                  this.win.history.replaceState(
                    (this.win.history && $o(this.win.history)) || {},
                    this.win.document.title,
                    i
                  );
              }),
              new this.win.MutationObserver((t) => this.pz(t)).observe(
                this.win.document.body,
                { attributes: !0, attributeFilter: ["class"] }
              ),
              this.getViewport().onResize(
                At(this.win, () => this.onResizeDebounced(), 300)
              ),
              this.mz(),
              this.Be.onMessage("selectPage", (t) => this.cz(t)),
              this.Be.onMessage("rewind", () => this.uz()),
              this.FS && this.FS.startListening(),
              new (class {
                constructor(t, i) {
                  (this.i = t),
                    (this.Zk = i),
                    (this.NS = qi(t, i)),
                    (this._T = Pi(t)),
                    (this.dz = vt("amp-story-share-menu", null)),
                    i.appendChild(this.dz),
                    (this.fz = !1),
                    this.gT();
                }
                gT() {
                  this._T.subscribe(xi.SHARE_MENU_STATE, (t) => {
                    t && (this._z() ? (this.gz(), this.xO()) : this.yz()),
                      this.NS.triggerEvent(t ? Yi : Gi, this.dz);
                  });
                }
                _z() {
                  const t = mi(this.Zk),
                    i = ei(this.i),
                    s = t.isWebviewEmbedded() && i.isChrome();
                  return "share" in navigator && !s;
                }
                gz() {
                  const { navigator: t } = this.i,
                    i = {
                      url: oi($t(this.Zk)).canonicalUrl,
                      text: this.i.document.title,
                    };
                  t.share(i).catch((t) => {});
                }
                yz() {
                  this.fz ||
                    ((this.fz = !0),
                    ni(this.i).installExtensionForDoc(
                      $t(this.Zk),
                      "amp-story-share-menu",
                      "0.1"
                    ));
                }
                xO() {
                  this._T.dispatch(28, !1);
                }
              })(this.win, this.element);
          }
          pz(t) {
            t.forEach((t) => {
              const i = t.target;
              this._T.dispatch(
                19,
                i.classList.contains("amp-mode-keyboard-active")
              );
            });
          }
          mz() {
            if (this.Be.hasCapability("swipe")) return;
            const { element: t } = this;
            Sn.get(t, !0).onGesture(
              class extends class extends class {
                constructor(t, i) {
                  (this.Az = t), (this.dP = i);
                }
                getType() {
                  return this.Az;
                }
                signalReady(t) {
                  this.dP.Wp(this, t);
                }
                signalPending(t) {
                  this.dP.SS(this, t);
                }
                signalEnd() {
                  this.dP.OS(this);
                }
                signalEmit(t, i) {
                  this.dP.CS(this, t, i);
                }
                acceptStart() {}
                acceptCancel() {}
                onTouchStart(t) {
                  return !1;
                }
                onTouchMove(t) {
                  return !1;
                }
                onTouchEnd(t) {}
              } {
                constructor(t, i, s, o) {
                  super(t, i),
                    (this.Pz = s),
                    (this.bz = o),
                    (this.AS = !1),
                    (this.vz = 0),
                    (this.Tz = 0),
                    (this.Ez = 0),
                    (this.xz = 0),
                    (this.Mz = 0),
                    (this.wz = 0),
                    (this.Hr = 0),
                    (this.Iz = 0),
                    (this.Rz = 0),
                    (this.Vz = 0),
                    (this.kz = 0);
                }
                onTouchStart(t) {
                  const { touches: i } = t;
                  return (
                    !!(this.AS && i && i.length > 1) ||
                    (!(!i || 1 != i.length) &&
                      ((this.Hr = Date.now()),
                      (this.vz = i[0].clientX),
                      (this.Tz = i[0].clientY),
                      !0))
                  );
                }
                onTouchMove(t) {
                  const { touches: i } = t;
                  if (i && i.length >= 1) {
                    const { clientX: s, clientY: o } = i[0];
                    if (((this.Ez = s), (this.xz = o), this.AS))
                      this.Sz(!1, !1, t);
                    else {
                      const t = Math.abs(s - this.vz),
                        i = Math.abs(o - this.Tz);
                      if (this.Pz && this.bz)
                        (t >= 8 || i >= 8) && this.signalReady(-10);
                      else if (this.Pz) {
                        if (t >= 8 && t > i) this.signalReady(-10);
                        else if (i >= 8) return !1;
                      } else {
                        if (!this.bz) return !1;
                        if (i >= 8 && i > t) this.signalReady(-10);
                        else if (t >= 8) return !1;
                      }
                    }
                    return !0;
                  }
                  return !1;
                }
                onTouchEnd(t) {
                  const { touches: i } = t;
                  i && 0 == i.length && this.Oz(t);
                }
                acceptStart() {
                  (this.AS = !0),
                    (this.Mz = this.vz),
                    (this.wz = this.Tz),
                    (this.Rz = this.Hr),
                    (this.vz = this.Ez),
                    (this.Tz = this.xz),
                    this.Sz(!0, !1, null);
                }
                acceptCancel() {
                  this.AS = !1;
                }
                Sz(t, i, s) {
                  this.Iz = Date.now();
                  const o = this.Iz - this.Rz;
                  if ((!i && o > 4) || (i && o > 16)) {
                    const t = zn(this.Ez - this.Mz, o, this.Vz),
                      s = zn(this.xz - this.wz, o, this.kz);
                    (!i || o > 32 || 0 != t || 0 != s) &&
                      ((this.Vz = Math.abs(t) > 1e-4 ? t : 0),
                      (this.kz = Math.abs(s) > 1e-4 ? s : 0)),
                      (this.Mz = this.Ez),
                      (this.wz = this.xz),
                      (this.Rz = this.Iz);
                  }
                  this.signalEmit(
                    {
                      first: t,
                      last: i,
                      time: this.Iz,
                      deltaX: this.Ez - this.vz,
                      deltaY: this.xz - this.Tz,
                      startX: this.vz,
                      startY: this.Tz,
                      lastX: this.Ez,
                      lastY: this.xz,
                      velocityX: this.Vz,
                      velocityY: this.kz,
                    },
                    s
                  );
                }
                Oz(t) {
                  this.AS &&
                    ((this.AS = !1), this.Sz(!1, !0, t), this.signalEnd());
                }
              } {
                constructor(t) {
                  super("swipe-xy", t, !0, !0);
                }
              },
              (t) => {
                const { deltaX: i, deltaY: s } = t.data;
                0 === this._T.get(xi.INTERACTIVE_COMPONENT_STATE).state &&
                this._T.get(xi.SYSTEM_UI_IS_VISIBLE_STATE) &&
                this._T.get(xi.CAN_SHOW_NAVIGATION_OVERLAY_HINT)
                  ? (t.event && t.event.defaultPrevented) ||
                    !this.Cz(i, s) ||
                    this.XO.showNavigationOverlay()
                  : t.event &&
                    !1 !== t.event.cancelable &&
                    t.event.preventDefault();
              }
            );
          }
          Cz(t, i) {
            return Math.abs(t) >= 50 || -1 * i >= 50;
          }
          KC() {
            const { document: t } = this.win;
            O(t.documentElement, { overflow: "hidden" }),
              O(t.body, { overflow: "hidden" }),
              this.getViewport().resetTouchZoom(),
              this.getViewport().disableTouchZoom(),
              this.zz();
          }
          zz() {
            var t;
            const { screen: i } = this.win;
            if (!i || !this.GO.matches) return;
            const s =
              null === (t = i.orientation) || void 0 === t ? void 0 : t.lock;
            if (s) return void s("portrait").catch((t) => {});
            const o =
              i.lockOrientation ||
              i.mozLockOrientation ||
              i.msLockOrientation ||
              ((t) => {});
            try {
              o("portrait");
            } catch (t) {}
          }
          layoutCallback() {
            return jn.isBrowserSupported(this.win) || this.bh.isBot()
              ? this.Nz()
              : this.Lz();
          }
          Nz() {
            const t = this.$C(),
              i = "1" !== this.Be.getParam("hideProgressBar");
            i || this._T.dispatch(Ti, !1), this.QC(t, i), this.JC();
            const o = Promise.all([
              this.Dz(),
              this.getAmpDoc().whenFirstPreviewedOrVisible(),
            ])
              .then(() => {
                this.Uz(),
                  this.FO.forEach((t, i) => {
                    t.setState(0), this.$z(t, i);
                  }),
                  this.jz(),
                  this._T.get(xi.CAN_SHOW_PAGINATION_BUTTONS) &&
                    new (class {
                      constructor(t) {
                        this.Fz = t;
                        const { win: i } = this.Fz,
                          s = i.document;
                        (this._T = Pi(i)),
                          (this.Bz = new kn(s, Mn, this._T, i)),
                          (this.Yz = new kn(s, En, this._T, i)),
                          this.Bz.element.classList.add("next-container"),
                          this.Yz.element.classList.add("prev-container"),
                          this.gT(),
                          this.Fz.element.appendChild(this.Bz.element),
                          this.Fz.element.appendChild(this.Yz.element);
                      }
                      gT() {
                        this._T.subscribe(xi.CURRENT_PAGE_INDEX, (t) => {
                          this.Gz(t);
                        }),
                          this._T.subscribe(
                            xi.PAGE_IDS,
                            () => {
                              const t = Number(
                                this._T.get(xi.CURRENT_PAGE_INDEX)
                              );
                              this.Gz(t);
                            },
                            !0
                          ),
                          this._T.subscribe(
                            xi.SYSTEM_UI_IS_VISIBLE_STATE,
                            (t) => this.aO(t)
                          );
                      }
                      Gz(t) {
                        const i = this._T.get(xi.PAGE_IDS).length;
                        this.Yz.setEnabled(t > 0),
                          t < i - 1
                            ? this.Bz.updateState(Mn)
                            : mi(this.Fz.element).hasCapability("swipe")
                            ? this.Bz.updateState(In)
                            : this.Bz.updateState(Rn);
                      }
                      aO(t) {
                        this.Yz.setEnabled(t), this.Bz.setEnabled(t);
                      }
                    })(this);
              })
              .then(
                () => (
                  qt(this.win, "amp-story-subscriptions") &&
                    null !==
                      this.element.querySelector("amp-story-subscriptions") &&
                    0 === this._T.get(xi.SUBSCRIPTIONS_STATE) &&
                    this._T.dispatch(32, 1),
                  this.xk(this.$C(), Lo)
                )
              )
              .then(() => {
                if (
                  Pn(this.win, "ampStoryAttachmentPageId") ===
                  this.BO.element.id
                ) {
                  const t = this.BO.element.querySelector(
                    "amp-story-page-attachment, amp-story-page-outlink"
                  );
                  t &&
                    dt(t)
                      .then(() => t.getImpl())
                      .then((t) => t.open(!1));
                  const i = Pn(this.win, "ampStoryShoppingData");
                  i && this._T.dispatch(4, { activeProductData: i });
                }
                vs(Vt(this.Be), this._T) &&
                  new (class {
                    constructor(t, i) {
                      (this.i = t),
                        (this._n = null),
                        (this._T = Pi(this.i)),
                        (this.NS = qi(this.i, i)),
                        (this.DS = i),
                        (this.sa = ri(i)),
                        (this.Be = mi(i));
                    }
                    build() {
                      if (this._n) return s();
                      const { canonicalUrl: t } = oi(this.DS),
                        i = vt("a", {
                          class: "i-amphtml-story-info-moreinfo",
                          target: "_blank",
                          "i-amphtml-i18n-text-content": "26",
                        });
                      return (
                        (this._n = vt(
                          "div",
                          {
                            class:
                              "i-amphtml-story-info-dialog i-amphtml-story-system-reset",
                            onClick: (t) => {
                              t.target === t.currentTarget && this.xO();
                            },
                          },
                          vt(
                            "div",
                            {
                              class: "i-amphtml-story-info-dialog-container",
                              onClick: (t) => {
                                this.Lk(t);
                              },
                            },
                            vt("h1", {
                              class: "i-amphtml-story-info-heading",
                              "i-amphtml-i18n-text-content": "25",
                            }),
                            vt(
                              "a",
                              { class: "i-amphtml-story-info-link", href: t },
                              t.replace(/([/.]+)/gi, "$1​")
                            ),
                            i
                          )
                        )),
                        this.gT(),
                        Promise.all([
                          Os(this._n, this.DS),
                          this.sa.mutateElement(this.DS, () => {
                            const t = gs(
                              vt("div", null),
                              this._n,
                              ':host{all:initial!important;color:initial!important}.i-amphtml-story-info-dialog{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;transform:translate3d(0,-100%,0)!important;transition-delay:0.15s!important}.i-amphtml-story-info-dialog-visible{transform:translateZ(0)!important;transition-delay:0s!important}.i-amphtml-story-info-dialog:before{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-info-dialog.i-amphtml-story-info-dialog-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-dialog-container{position:absolute!important;top:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;border-radius:0 0 8px 8px!important;transform:translate3d(0,-100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;padding:20px!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-info-dialog-visible .i-amphtml-story-info-dialog-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-heading{display:block!important;font-size:14px!important;font-weight:700!important;margin:0 0 8px!important}.i-amphtml-story-info-link{color:#000!important;display:block!important;margin:0!important;opacity:0.64!important;font-size:12px!important;text-decoration:none!important}.i-amphtml-story-info-moreinfo{color:#4285f4!important;display:none!important;font-family:Roboto-Medium,sans-serif!important;font-size:12px!important;letter-spacing:0.5px!important;margin:16px 0 0;text-decoration:none!important}.i-amphtml-story-info-moreinfo.i-amphtml-story-info-moreinfo-visible{display:block!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-info-dialog.css*/'
                            );
                            this.DS.appendChild(t);
                          }),
                          this.Wz().then((t) => {
                            if (t)
                              return this.sa.mutateElement(this.DS, () => {
                                i.classList.add(
                                  "i-amphtml-story-info-moreinfo-visible"
                                ),
                                  i.setAttribute("href", t);
                              });
                          }),
                        ])
                      );
                    }
                    gT() {
                      this._T.subscribe(xi.INFO_DIALOG_STATE, (t) => {
                        this.qz(t);
                      });
                    }
                    qz(t) {
                      this.sa.mutateElement(this._n, () => {
                        this._n.classList.toggle(
                          "i-amphtml-story-info-dialog-visible",
                          t
                        );
                      }),
                        (this._n[Bi] = "amp-story-info-dialog"),
                        this.NS.triggerEvent(t ? Yi : Gi, this._n);
                    }
                    Lk(t) {
                      const i = b(t.target, (t) => v(t, "a[href]"));
                      i && (As(i, this._n), t.preventDefault());
                    }
                    xO() {
                      this._T.dispatch(17, !1);
                    }
                    Wz() {
                      return this.Be.isEmbedded()
                        ? this.Be.sendMessageAwaitResponse(
                            "moreInfoLinkUrl",
                            void 0
                          ).then((t) =>
                            t
                              ? pi(this.DS).assertAbsoluteHttpOrHttpsUrl(t)
                              : null
                          )
                        : Promise.resolve(null);
                    }
                  })(this.win, this.element).build();
              });
            this.Xz(8e3).then(() => {
              this.Kz(), this.Zz();
            }),
              this.Jz();
            const n = this.element.querySelector(`amp-story-page#${f(t)}`);
            return this.getAmpDoc().hasBeenVisible()
              ? o
              : dt(n).then(() => n.build());
          }
          Zz() {
            this.element.hasAttribute("live-story") &&
              ((this.EC = new (class {
                constructor(t) {
                  (this.Fz = t),
                    (this.ji = this.Fz.getAmpDoc()),
                    (this.Zk = t.element),
                    (this._T = Pi(this.Fz.win));
                }
                build() {
                  const t = vt("amp-live-list", {
                    id: "i-amphtml-" + this.Zk.id + "-dynamic-list",
                    "data-poll-interval":
                      this.Zk.getAttribute("data-poll-interval") || 15e3,
                    sort: "ascending",
                    "disable-scrolling": !0,
                    "disable-pagination": !0,
                    "auto-insert": !0,
                  });
                  (t.AMP_LIVE_LIST_CUSTOM_SLOT_ID = St(
                    this.Zk.id,
                    "amp-story must contain id to use the live story functionality"
                  )),
                    this.Fz.element
                      .signals()
                      .whenSignal(nt)
                      .then(() => {
                        ni(this.ji.win).installExtensionForDoc(
                          this.ji,
                          "amp-live-list"
                        ),
                          this.Zk.insertBefore(t, this.Zk.firstElementChild);
                      });
                }
                update() {
                  const t = P(this.Zk, (t) =>
                      t.classList.contains("amp-live-list-item-new")
                    ),
                    i = this.Zk.querySelectorAll("amp-story-page"),
                    s = Array.prototype.map.call(i, (t) => t.id);
                  this._T.dispatch(11, s), this._T.dispatch(2, t.id);
                }
              })(this)),
              this.EC.build(),
              this._T.dispatch(5, [
                { tagOrTarget: "AMP-LIVE-LIST", method: "update" },
              ]),
              this.element.addEventListener("amp:dom-update", () => {
                this.EC.update(), this.Dz().then(() => this.Qz());
              }));
          }
          $C() {
            const t = J(this.win.location.hash).page;
            if (t && this.lz(t)) return t;
            const i = (s = Pn(this.win, An) || [])[s.length - 1];
            var s;
            if (i && this.lz(i)) return i;
            const o = this.element.querySelector("amp-story-page");
            return o ? o.id : null;
          }
          lz(t) {
            return this.FO.length > 0
              ? this.FO.some((i) => i.element.id === t)
              : !!this.element.querySelector(`#${f(t)}`);
          }
          Xz(t = 0) {
            const i = this.element.querySelector(
                `amp-story-page#${f(this.$C())}`
              ),
              s = dt(i).then(() => i.signals().whenSignal(nt));
            return this.Re.timeoutPromise(t, s).catch(() => {});
          }
          Kz() {
            Ci(this.win, this.element, "ampstory:load", void 0, {
              bubbles: !0,
            }),
              this.FS && this.FS.send("storyContentLoaded", {}),
              this.NS.triggerEvent("story-content-loaded"),
              this.signals().signal("ini-load"),
              this.mutateElement(() => {
                this.element.classList.add("i-amphtml-story-loaded");
              });
          }
          Uz() {
            const t = this.element.querySelector("amp-consent");
            t && (this.tN(), this.iN(t));
          }
          tN() {
            const t = this.getConsentPolicy() || "default",
              i = (function (t, i = "default") {
                return ((t) => Qt(t, "consentPolicyManager", "amp-consent"))(
                  t
                ).then((t) => (t ? t.whenPolicyResolved(i) : null));
              })(this.element, t);
            i &&
              (this._T.dispatch(wi, !0),
              i.then(() => {
                this._T.dispatch(wi, !1);
              }));
          }
          iN(t) {
            x(t, "amp-story-consent") ||
              It().error(
                $n,
                "amp-consent must have an amp-story-consent child"
              );
            const i = ["SCRIPT", "AMP-STORY-CONSENT"],
              s = (function (t, s) {
                const o = [];
                for (let s = t.firstElementChild; s; s = s.nextElementSibling)
                  (n = s), -1 === i.indexOf(n.tagName) && o.push(s);
                var n;
                return o;
              })(t);
            0 !== s.length &&
              (It().error($n, "amp-consent only allows tags: %s", i),
              s.forEach((i) => t.removeChild(i)));
          }
          isLayoutSupported(t) {
            return t == q;
          }
          Dz() {
            const t = Array.prototype.map.call(
              this.element.querySelectorAll("amp-story-page"),
              (t) => t.getImpl()
            );
            return Promise.all(t).then((t) => {
              (this.FO = t),
                qt(this.win, "amp-story-branching") &&
                  this._T.dispatch(5, [
                    { tagOrTarget: "AMP-STORY", method: "goToPage" },
                  ]);
            });
          }
          ke(t) {
            Vt(this.BO).next(t);
          }
          FC() {
            "v0" === this.Be.getParam("storyPlayer") &&
              ni(this.win).installExtensionForDoc(
                this.getAmpDoc(),
                "amp-viewer-integration"
              );
          }
          nz() {
            if (this.Be.hasCapability("swipe") && this.FS) {
              const t = this._T.get(xi.ADVANCEMENT_MODE);
              this.FS.send("selectDocument", { next: !0, advancementMode: t });
            }
          }
          pm() {
            Vt(this.BO).previous();
          }
          ez() {
            if (this.Be.hasCapability("swipe") && this.FS) {
              const t = this._T.get(xi.ADVANCEMENT_MODE);
              this.FS.send("selectDocument", {
                previous: !0,
                advancementMode: t,
              });
            } else
              this._T.get(xi.CAN_SHOW_PREVIOUS_PAGE_HELP) &&
                this.XO.showFirstPageHintOverlay();
          }
          oz(t) {
            this._T.dispatch(7, Wi), 1 === t ? this.ke() : 2 === t && this.pm();
          }
          xk(t, i) {
            var o;
            const n = this.getPageById(t),
              r = this.getPageIndex(n);
            if (this.BO && this.BO.element.id === t) return s();
            const a = this._T.get(xi.SUBSCRIPTIONS_STATE);
            if (0 !== a && -1 === this.SC) return this.sN(this.OC, t, i);
            if (r >= this.SC && 1 === a) return this.sN(this.VC, t, i);
            if (r > this.SC && 3 === a)
              return (
                (this.RC = t),
                this.nN(),
                this.xk(this.FO[this.SC].element.id, i)
              );
            this.eN(t, r);
            const e = this.BO;
            (this.BO = n),
              n.isAd() || this.oN(t, i),
              null === (o = this.xC) || void 0 === o || o.update(n.element);
            const h = [
              () => {
                e && e.element.removeAttribute("active"),
                  this._T.get(xi.PAUSED_STATE)
                    ? n.element.setAttribute("active", "")
                    : n.setState(1),
                  this.rN();
              },
              () => {
                e &&
                  (e.setState(0),
                  this.getPageIndex(e) < r ? ys(e, Dn) : _s(e, Dn),
                  e.isAd() && this._T.dispatch(7, "manualAdvanceFromAd")),
                  this._T.dispatch(15, n.isAd()),
                  n.isAd()
                    ? ys(this, On)
                    : (_s(this, On),
                      n.isAutoAdvance() ||
                        this.LS.updateProgress(t, this.IR.getProgress())),
                  this._T.dispatch(6, { id: t, index: r }),
                  e || this.aN();
              },
              () => {
                this.Qz(!e), this.hN();
              },
            ];
            return new Promise((t) => {
              const i = () => {
                if ((h.shift().call(this), !h.length)) return t();
                this.win.requestAnimationFrame(() => i());
              };
              i();
            });
          }
          oN(t, i) {
            const s = this._T.get(xi.NAVIGATION_PATH);
            i === Do && s.pop(),
              i === Lo && s[s.length - 1] !== t && s.push(t),
              this._T.dispatch(10, s),
              (function (t, i, s) {
                const { history: o } = t,
                  n = yt(
                    yt({}, $o(o) || {}),
                    {},
                    { ampStoryNavigationPath: s }
                  );
                o.replaceState(n, ""),
                  (function (t, i) {
                    const s = xn(t);
                    (s[wn(t)] = { state: i, time: Date.now() }), Tn(t, s);
                  })(t, n);
              })(this.win, 0, s);
          }
          hN() {
            si(this.element).trigger(this.BO.element, "active", null, 3);
          }
          rN() {
            (this.bh.isSafari() || this.bh.isIos()) &&
              this.mutateElement(() => {
                L(this.element, !1),
                  this.element.offsetHeight >= 0 && L(this.element, !0);
              });
          }
          az() {
            this.kC && clearTimeout(this.kC),
              (this.kC = null),
              this.RC &&
                2 === this._T.get(xi.SUBSCRIPTIONS_STATE) &&
                this.xk(this.RC, Lo),
              (this.RC = null);
          }
          sN(t, i, s) {
            return t.promise.then(() => this.xk(i, s));
          }
          nN() {
            this._T.dispatch(31, !0);
          }
          rz() {
            this._T.dispatch(31, !1);
          }
          eN(t, i) {
            const s = this._T.get(xi.SUBSCRIPTIONS_DIALOG_UI_STATE);
            i !== this.SC ||
              s ||
              3 !== this._T.get(xi.SUBSCRIPTIONS_STATE) ||
              (this.kC = setTimeout(() => {
                (this.RC = t), this.nN(), (this.kC = null);
              }, 500)),
              i < this.SC && s && this.rz();
          }
          Oo(t) {
            if (v(t.target, "amp-story-interactive-slider")) return;
            this._T.dispatch(7, Wi);
            const i = this._T.get(xi.RTL_STATE);
            switch (t.key) {
              case "ArrowLeft":
                i ? this.ke() : this.pm();
                break;
              case "ArrowRight":
                i ? this.pm() : this.ke();
            }
          }
          onResizeDebounced() {
            (this.MC = this.HC()), this._T.dispatch(34, this.MC);
            const t = this.lN(),
              i = this.BC();
            this.pN(t, i);
          }
          zC(t) {
            const { height: i } = t;
            0 !== i &&
              O(this.win.document.documentElement, {
                "--story-dvh": D(i / 100),
              });
          }
          pN(t, i) {
            this.mutateElement(() => {
              this.element.setAttribute(
                "orientation",
                i && t ? "landscape" : "portrait"
              );
            });
          }
          bo() {
            const t = this.getAmpDoc().getVisibilityState(),
              i = t === rt,
              s = "visible" === t;
            i && this._T.dispatch(Ti, !1),
              s && this._T.dispatch(Ti, !0),
              i || s ? this.xV() : this.cw();
          }
          KS(t) {
            this._T.get(xi.MUTED_STATE) || (t ? this.WC() : this.XC());
          }
          lV(t) {
            var i;
            switch (
              (null === (i = this.xC) || void 0 === i || i.detach(),
              (this.xC = null),
              t)
            ) {
              case 0:
                this.oh.mutate(() => {
                  this.win.document.documentElement.setAttribute(
                    "i-amphtml-story-mobile",
                    ""
                  ),
                    this.element.removeAttribute("desktop"),
                    this.element.classList.remove(
                      "i-amphtml-story-desktop-fullbleed"
                    ),
                    this.element.classList.remove(
                      "i-amphtml-story-desktop-one-panel"
                    );
                });
                break;
              case 4:
                this.xC ||
                  ((this.xC = new (class {
                    constructor(t, i) {
                      (this.i = t),
                        (this._n = i),
                        (this.mN = null),
                        (this.cN = null),
                        (this.uN = this.i.document.createElement("canvas")),
                        (this.uN.width = this.uN.height = 3),
                        (this.Sd = null),
                        (this.dN = !0);
                    }
                    attach() {
                      (this.cN = this.i.document.createElement("canvas")),
                        (this.cN.width = this.cN.height = 3),
                        O(this.cN, {
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          left: 0,
                          top: 0,
                        }),
                        this._n.appendChild(this.cN);
                    }
                    detach() {
                      this._n.removeChild(this.cN),
                        cancelAnimationFrame(this.Sd);
                    }
                    update(t) {
                      (this.mN = this.fN(t)), this._N(this.mN[0]);
                    }
                    _N(t) {
                      t
                        ? this.gN(t).then((t) => {
                            if ("AMP-IMG" === t.tagName)
                              return this.yN(t)
                                ? void this._N(this.AN(t))
                                : void this.PN(t.querySelector("img"));
                            const i = t.querySelector("video");
                            if (i.readyState >= 2) return void this.PN(i);
                            const s = t.getAttribute("poster");
                            if (!s) return void this.PN();
                            const o = new Image();
                            (o.onload = () => this.PN(o)), (o.src = s);
                          })
                        : this.PN();
                    }
                    yN(t) {
                      if (!this.bN(t)) return !1;
                      const i = t.querySelector("img"),
                        s = this.i.document.createElement("canvas");
                      s.width = s.height = 3;
                      const o = s.getContext("2d");
                      o.drawImage(i, 0, 0, 3, 3);
                      const n = o.getImageData(0, 0, 3, 3).data;
                      for (let t = 0; t < n.length; t += 4)
                        if (n[t + 3] < 255) return !0;
                      return !1;
                    }
                    bN(t) {
                      const i = t.getAttribute("src").toLowerCase();
                      return i.includes(".png") || i.includes(".gif");
                    }
                    AN(t) {
                      const i = this.mN.indexOf(t);
                      return this.mN[i + 1];
                    }
                    gN(t) {
                      return new Promise((i) => {
                        dt(t)
                          .then(() => t.signals().whenSignal(nt))
                          .then(() => {
                            i(t);
                          })
                          .catch(() => {
                            It().error(
                              "BACKGROUND-BLUR",
                              "Failed to load the amp-img or amp-video."
                            );
                          });
                      });
                    }
                    PN(t) {
                      if ((this.vN(t), this.dN))
                        return this.TN(1), void (this.dN = !1);
                      let i;
                      const s = (t) => {
                        i || (i = t);
                        const o = t - i;
                        if (o < 400) {
                          const t = o / 400;
                          this.TN(t), (this.Sd = requestAnimationFrame(s));
                        }
                      };
                      cancelAnimationFrame(this.Sd),
                        (this.Sd = requestAnimationFrame(s));
                    }
                    TN(t) {
                      const i = this.cN.getContext("2d");
                      (i.globalAlpha = t), i.drawImage(this.uN, 0, 0, 3, 3);
                    }
                    vN(t) {
                      const i = this.uN.getContext("2d");
                      (i.fillStyle = "black"),
                        i.fillRect(0, 0, 3, 3),
                        t &&
                          (i.drawImage(t, 0, 0, 3, 3),
                          (i.fillStyle = "rgba(0, 0, 0, .3)"),
                          i.fillRect(0, 0, 3, 3));
                    }
                    fN(t) {
                      const i = (t) => {
                        if (!t) return !1;
                        const i = t.getLayoutBox();
                        return i.width * i.height;
                      };
                      return Array.from(
                        _(
                          t,
                          "amp-story-grid-layer amp-img, amp-story-grid-layer amp-video"
                        )
                      ).sort((t, s) => i(s) - i(t));
                    }
                  })(this.win, this.element)),
                  this.xC.attach(),
                  this.BO && this.xC.update(this.BO.element)),
                  this.oh.mutate(() => {
                    this.ZC(),
                      this.win.document.documentElement.removeAttribute(
                        "i-amphtml-story-mobile"
                      ),
                      this.element.removeAttribute("desktop"),
                      this.element.classList.add(
                        "i-amphtml-story-desktop-one-panel"
                      ),
                      this.element.classList.remove(
                        "i-amphtml-story-desktop-fullbleed"
                      );
                  });
                break;
              case 2:
                this.oh.mutate(() => {
                  this.win.document.documentElement.removeAttribute(
                    "i-amphtml-story-mobile"
                  ),
                    this.element.setAttribute("desktop", ""),
                    this.element.classList.add(
                      "i-amphtml-story-desktop-fullbleed"
                    ),
                    this.element.classList.remove(
                      "i-amphtml-story-desktop-one-panel"
                    );
                });
                break;
              case 3:
                const t = _(
                  this.element,
                  "amp-story-page amp-story-page-attachment"
                );
                this.oh.mutate(() => {
                  this.ZC(),
                    this.element.setAttribute("i-amphtml-vertical", ""),
                    this.win.document.documentElement.classList.add(
                      "i-amphtml-story-vertical"
                    ),
                    O(this.win.document.body, { height: "auto" }),
                    this.win.document.documentElement.removeAttribute(
                      "i-amphtml-story-mobile"
                    ),
                    this.element.removeAttribute("desktop"),
                    this.element.classList.remove(
                      "i-amphtml-story-desktop-fullbleed"
                    );
                  for (let i = 0; i < t.length; i++)
                    this.element.insertBefore(
                      t[i],
                      t[i].getAttribute("href")
                        ? t[i].parentElement.nextElementSibling
                        : null
                    );
                }),
                  this.signals()
                    .whenSignal(nt)
                    .then(() => {
                      this.oh.mutate(() => {
                        this.FO.forEach((t) =>
                          t.element.setAttribute("active", "")
                        );
                      });
                    });
            }
          }
          HC() {
            return 0 === this.MC && this.EN()
              ? 0
              : this.bh.isBot()
              ? 3
              : this.xN()
              ? this.BC()
                ? 2
                : 4
              : 0;
          }
          EN() {
            var t;
            const i = this.bh.isAndroid(),
              s = ["INPUT", "TEXTAREA"].includes(
                null === (t = this.win.document.activeElement) || void 0 === t
                  ? void 0
                  : t.tagName
              );
            return i && s;
          }
          xN() {
            return this.YO.matches && !this.bh.isBot();
          }
          lN() {
            return this.WO.matches;
          }
          DC() {
            return this.element.hasAttribute("standalone");
          }
          BC() {
            return this.element.hasAttribute("supports-landscape");
          }
          tO(t) {
            if (!this.BO) return;
            const i = t ? 2 : 1;
            this.BO.setState(i);
          }
          Lz() {
            if ((this.GC(), this.getFallback()))
              return void this.toggleFallback(!0);
            const t = (function (t, i) {
              const s = ((t) =>
                vt(
                  "div",
                  { class: "i-amphtml-story-unsupported-browser-overlay" },
                  vt(
                    "div",
                    { class: "i-amphtml-overlay-container" },
                    vt("div", { class: "i-amphtml-gear-icon" }),
                    vt("div", { "i-amphtml-i18n-text-content": "21" }),
                    vt("button", {
                      class: "i-amphtml-continue-button",
                      onClick: t,
                      "i-amphtml-i18n-text-content": "27",
                    })
                  )
                ))(i);
              return (
                Os(s, t),
                gs(
                  vt("div", null),
                  s,
                  '.i-amphtml-story-unsupported-browser-overlay{position:absolute!important;z-index:20000001!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:-ms-flexbox!important;display:flex!important;color:#fff!important}.i-amphtml-gear-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="none" d="M0 0h20v20H0V0z"/><path d="M16 10.8V9.2L17.5 8c.2-.1.2-.3.1-.5L16 4.7c0-.2-.3-.2-.5-.2l-2 .8-1.3-.7-.3-2.2c0-.2-.2-.3-.4-.3H8.4c-.2 0-.4.1-.4.3l-.3 2.2a6 6 0 0 0-1.3.7l-2-.8c-.2 0-.4 0-.5.2L2.3 7.4v.5l1.8 1.3a5 5 0 0 0 0 1.6L2.4 12c-.2.1-.2.3-.1.5l1.6 2.8c0 .2.3.2.5.2l2-.8 1.3.7.3 2.2c0 .2.2.3.4.3h3.2c.2 0 .4-.1.4-.3l.3-2.2a6 6 0 0 0 1.3-.7l2 .8c.2 0 .4 0 .5-.2l1.6-2.8V12L16 10.8zM10 13c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z"/></svg>\')!important}.i-amphtml-continue-button{border-radius:20px;font-family:Roboto,sans-serif;color:#000;font-weight:400!important;font-size:16px;background:#fff;padding:10px 20px;border:2px solid #aaa;text-decoration:none;display:block;margin-top:25px;margin-right:auto;margin-left:auto;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-unsupported-browser-layer.css*/'
                )
              );
            })(this.element, () => {
              this.Nz().then(() => {
                this.qC(),
                  this.mutateElement(() => {
                    ht(t);
                  });
              });
            });
            return this.mutateElement(() => {
              this.element.appendChild(t);
            });
          }
          MN() {
            const t = this.wN(0, {}, this.BO.element.id),
              i = [];
            return (
              Object.keys(t).forEach((s) => {
                let o = t[s];
                if (
                  (s === this.FO[0].element.id &&
                    this.BO === this.FO[this.FO.length - 1] &&
                    this.FO.length > 1 &&
                    !this.Be.hasCapability("swipe") &&
                    (o = 1),
                  i[o] || (i[o] = []),
                  qt(this.win, "amp-story-branching"))
                ) {
                  const t = this._T.get(xi.NAVIGATION_PATH),
                    n = t.indexOf(this.BO.element.id),
                    r = t[n - 1];
                  n > 0 &&
                    s === this.BO.element.id &&
                    (i[1] || (i[1] = []), i[1].push(r)),
                    s !== r && i[o].push(s);
                } else i[o].push(s);
              }),
              i
            );
          }
          wN(t, i, s) {
            return (
              (void 0 !== i[s] && i[s] <= t) ||
                ((i[s] = t),
                this.getPageById(s)
                  .getAdjacentPageIds()
                  .forEach((s) => {
                    (void 0 !== i[s] && i[s] <= t) ||
                      (i = this.wN(t + 1, i, s));
                  })),
              i
            );
          }
          Qz(t = !1) {
            if (this.bh.isBot())
              return void this.FO.forEach((t) => {
                t.setDistance(0);
              });
            const i = this.MN(),
              s = () => {
                i.forEach((t, i) => {
                  t.forEach((t) => {
                    this.getPageById(t).setDistance(i);
                  });
                });
              };
            this.mutateElement(() => {
              if (!t) return s();
              const o = Vt(i[0][0]);
              new Promise((t, i) => {
                const s = this.getPageById(o);
                s.setDistance(0),
                  s.signals().whenSignal(nt).then(t),
                  this._T.subscribe(xi.CURRENT_PAGE_ID, i);
              }).then(
                () => s(),
                () => {}
              );
            });
          }
          aN() {
            let t = to(this.element);
            t &&
              this.BO.element
                .signals()
                .whenSignal(nt)
                .then(() => ((t = t), this.yC.register(t), this.yC.preload(t)))
                .then(() => {
                  this.qO = (function (t, i) {
                    for (
                      let i = t.firstElementChild;
                      i;
                      i = i.nextElementSibling
                    )
                      if ("audio" === i.tagName.toLowerCase()) return i;
                    return null;
                  })(this.element);
                });
          }
          Jz() {
            this.Be.hasCapability("education") &&
              (this.mutateElement(() => {
                this.element.appendChild(vt("amp-story-education", null));
              }),
              ni(this.win).installExtensionForDoc(
                this.getAmpDoc(),
                "amp-story-education"
              ));
          }
          getPageIndexById(t) {
            const i = e(this.FO, (i) => i.element.id === t);
            return (
              i < 0 &&
                It().error(
                  $n,
                  'Story refers to page "%s", but no such page exists.',
                  t
                ),
              i
            );
          }
          getPageById(t) {
            const i = this.getPageIndexById(t);
            return Vt(this.FO[i]);
          }
          getPageIndex(t) {
            return e(this.FO, (i) => i === t);
          }
          IN(t) {
            let i = t;
            t.ownerDocument !== this.win.document &&
              (i = t.ownerDocument.defaultView.frameElement);
            const s = e(this.FO, (t) => !!b(i, (i) => i === t.element));
            return this.FO[s] || null;
          }
          getElementDistance(t) {
            const i = this.IN(t);
            return i ? i.getDistance() : -1;
          }
          getMaxMediaElementCounts() {
            let t = this.element.querySelectorAll(
              "amp-audio, [background-audio]"
            ).length;
            const i = this.element.querySelectorAll("amp-video").length;
            return (
              this.element.hasAttribute("background-audio") && t++,
              {
                [Po]: Math.min(t + 2, Un.audio),
                [xo]: Math.min(i + 2, Un.video),
              }
            );
          }
          getElement() {
            return this.element;
          }
          Dm(t) {
            t ? this.RN() : this.VN(),
              t
                ? this.element.setAttribute(Nn, "")
                : this.element.removeAttribute(Nn);
          }
          RN() {
            this.WC(), this.BO && this.BO.muteAllMedia();
          }
          WC() {
            this.qO && this.yC.pause(this.qO);
          }
          VN() {
            const t = () => {
              this.XC(), this.BO && this.BO.unmuteAllMedia();
            };
            this.yC.blessAll().then(t, t);
          }
          XC() {
            this.qO && (this.yC.unmute(this.qO), this.yC.play(this.qO));
          }
          tz() {
            const t = this.element.hasAttribute("background-audio");
            this._T.dispatch(29, t);
          }
          iz() {
            const t = !!y(
                this.element,
                "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-page[background-audio], amp-story-page[auto-advance-after]"
              ),
              i = this.element.hasAttribute("background-audio");
            this._T.dispatch(30, t || i);
          }
          uz() {
            this.signals()
              .whenSignal(nt)
              .then(() => this.Qk());
          }
          cz(t) {
            t &&
              (this._T.dispatch(7, "viewerSelectPage"),
              t.next
                ? this.ke()
                : t.previous
                ? this.pm()
                : t.delta
                ? this.kN(t.delta)
                : t.id &&
                  this.xk(
                    t.id,
                    this.getPageIndexById(t.id) > this.getPageIndex(this.BO)
                      ? Lo
                      : Do
                  ));
          }
          kN(t) {
            const i = this._T.get(xi.CURRENT_PAGE_INDEX),
              s =
                t > 0
                  ? Math.min(this.FO.length - 1, i + t)
                  : Math.max(0, i + t),
              o = this.FO[s];
            if (!this.lz(o && o.element.id) || s === i) return;
            const n = s > i ? Lo : Do;
            this.xk(o.element.id, n);
          }
          jz() {
            let t = Pn(this.win, An);
            (t && t.every((t) => this.lz(t))) || (t = []),
              this._T.dispatch(10, t);
          }
          Qk() {
            this._T.dispatch(10, []);
            const t = this.xk(this.FO[0].element.id, Lo);
            1 === this.FO.length &&
              (this.FO[0].setState(0), this.FO[0].setState(1)),
              t.then(() => {
                this.FO.forEach((t) => _s(t, Dn));
              });
          }
          $z(t, i) {
            this.mutateElement(() => {
              const s = t.element.id;
              _(t.element, "amp-story-cta-layer a").forEach((t) => {
                t.setAttribute("data-vars-story-page-id", s),
                  t.setAttribute("data-vars-story-page-index", i);
              });
            });
          }
          addPage(t) {
            this.FO.push(t), t.isAd() && this.HO.push(t);
          }
          insertPage(t, i) {
            const s = this.getPageById(i),
              o = s.element;
            if (s.isAd() && !this._T.get(xi.CAN_INSERT_AUTOMATIC_AD))
              return (
                kt().expectedError(
                  $n,
                  "Inserting ads automatically is disallowed."
                ),
                !1
              );
            const n = this.getPageById(t),
              r = n.element,
              a = this.getNextPage(n);
            if (!a) return !1;
            const e = qt(this.win, "amp-story-branching")
              ? "advance-to"
              : "i-amphtml-advance-to";
            r.setAttribute(e, i), r.setAttribute(Cn, i), o.setAttribute(Ln, t);
            const h = a.element,
              l = h.id;
            l !== i &&
              (o.setAttribute(e, l),
              o.setAttribute(Cn, l),
              h.setAttribute(Ln, i));
            const p = this.getPageIndexById(i);
            return (
              -1 != p && this.FO.splice(p, 1),
              this.FO.splice(this.getPageIndexById(t) + 1, 0, s),
              this._T.dispatch(
                11,
                this.FO.map((t) => t.element.id)
              ),
              !0
            );
          }
          getNextPage(t) {
            const i = t.getNextPageId(!0);
            return i ? this.getPageById(i) : null;
          }
          static isBrowserSupported(t) {
            return !0;
          }
          YC() {
            if (
              !Tt(this.win) ||
              "inspect" === this.element.getAttribute("mode")
            )
              return !1;
            this.element.setAttribute("mode", "inspect");
            const t = vt("amp-story-dev-tools", null);
            return (
              this.win.document.body.appendChild(t),
              this.element.setAttribute("hide", ""),
              ni(this.win).installExtensionForDoc(
                this.getAmpDoc(),
                "amp-story-dev-tools"
              ),
              !0
            );
          }
          hz(t) {
            return !!b(
              t,
              (t) => v(t, "a.i-amphtml-story-page-open-attachment[href]"),
              this.element
            );
          }
          LC() {
            const t = zs(this.element).getLanguageCodesForElement(this.element);
            this.SN(t[0]) || this.ON(t);
          }
          SN(t) {
            const i = this.win.document.querySelector(
              'script[amp-localization="amp-story"]'
            );
            if (
              (null == i ? void 0 : i.getAttribute("i-amphtml-version")) !==
              xt(this.win).rtvVersion
            )
              return !1;
            const s = (function (t, i) {
              try {
                return at(t);
              } catch (t) {
                return null;
              }
            })(i.textContent);
            return (
              !!s &&
              (zs(this.element).registerLocalizedStringBundles({ [t]: s }), !0)
            );
          }
          ON(t) {
            const i = zs(this.element),
              s = (function (t) {
                for (let i = 0; i < t.length; i++) {
                  const s = t[i].toLowerCase();
                  for (let t = 0; t < Ss.length; t++)
                    if (Ss[t].toLowerCase() === s) return Ss[t];
                }
                return "en";
              })(t),
              o =
                ((n = this.win),
                this.win.location,
                (r = `amp-story.${s}.json`),
                `${Jt.cdn}/rtv/${xt(n).rtvVersion}/v0/${r}`);
            var n, r;
            ui(this.win)
              .fetchJson(o, { prerenderSafe: !0 })
              .then((t) => t.json())
              .then((t) => i.registerLocalizedStringBundles({ [s]: t }))
              .catch((t) => {
                I($n, t, "Bundle not found for language " + s);
              });
          }
          NC() {
            var t, i;
            const s =
                parseInt(
                  null === (t = this.Be) || void 0 === t
                    ? void 0
                    : t.getParam("minPreviewPages"),
                  10
                ) || 1,
              o =
                parseInt(
                  null === (i = this.Be) || void 0 === i
                    ? void 0
                    : i.getParam("pctPagesToPreview"),
                  10
                ) || 30,
              n = this.element.querySelectorAll("amp-story-page").length;
            let r = Math.ceil((o / 100) * n);
            var a, e;
            return (
              (r = Math.max(s, r)),
              (a = r),
              u(1 <= (e = n)),
              (r = Math.min(Math.max(a, 1), e)),
              r - 1
            );
          }
          sz() {
            var t;
            this.FO.indexOf(this.BO) >= this.CC &&
              (null === (t = this.FS) ||
                void 0 === t ||
                t.send("storyPreviewFinished", {}));
          }
        };
      t.registerElement(
        "amp-story",
        jn,
        '.i-amphtml-story-background{background-color:transparent}amp-story[standalone]{background-color:#000}@media (min-aspect-ratio:31/40){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-ratio:69/116;--i-amphtml-story-desktop-one-panel-responsive-margin:max(74px,8.25vh);--i-amphtml-story-desktop-one-panel-height:calc(var(--story-100dvh) - var(--i-amphtml-story-desktop-one-panel-responsive-margin)*2);--i-amphtml-story-desktop-one-panel-width:calc(var(--i-amphtml-story-desktop-one-panel-height)*var(--i-amphtml-story-desktop-one-panel-ratio));--i-amphtml-story-desktop-one-panel-border-radius:20px;--story-page-vw:calc(var(--i-amphtml-story-desktop-one-panel-width)*0.01)!important;--story-page-vh:calc(var(--i-amphtml-story-desktop-one-panel-height)*0.01)!important}@media(max-height:756px){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-responsive-margin:0px;--i-amphtml-story-desktop-one-panel-width:calc(var(--story-100dvh)*var(--i-amphtml-story-desktop-one-panel-ratio));--i-amphtml-story-desktop-one-panel-border-radius:0}}@media(max-height:538px){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-ratio:36/53}}:root:not([i-amphtml-story-mobile]) amp-story:not([supports-landscape]) amp-story-page{width:var(--i-amphtml-story-desktop-one-panel-width)!important;height:var(--i-amphtml-story-desktop-one-panel-height)!important;border-radius:var(--i-amphtml-story-desktop-one-panel-border-radius)!important;margin:auto!important}}[orientation=landscape] [position=landscape-half-left]{width:50%!important;left:0!important;right:auto!important}[orientation=landscape] [position=landscape-half-right]{width:50%!important;left:auto!important;right:0!important}amp-story{font-display:optional}amp-story-grid-layer:not([aspect-ratio]):not([preset]){overflow:hidden}amp-story-grid-layer *{box-sizing:border-box;margin:0}.i-amphtml-story-grid-template-with-full-bleed-animation amp-img img,[template=fill] amp-anim img,[template=fill] amp-img img,[template=fill] amp-video video{-o-object-fit:cover;object-fit:cover}[template=vertical]{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start}[template=vertical]>*{width:100%}[template=horizontal]{-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:start;grid-gap:16px;-ms-flex-pack:start;justify-content:start}amp-story-grid-layer{padding:68px 32px 32px}amp-story-grid-layer.i-amphtml-story-has-page-attachment.i-amphtml-story-has-interactive{padding-bottom:104px}amp-story-grid-layer.i-amphtml-story-has-CTA-layer.i-amphtml-story-has-interactive{padding-bottom:20%}html.i-amphtml-story-vertical{--story-page-vh:1.78vw!important}amp-story[standalone][i-amphtml-vertical]{height:auto!important;contain:initial!important}[i-amphtml-vertical] *{transition-delay:0s!important;transition-duration:0s!important}[i-amphtml-vertical] amp-story-page{position:relative!important;height:178vw!important;contain:initial!important;overflow:visible!important}amp-story[i-amphtml-vertical].i-amphtml-element amp-story-page.i-amphtml-element{transform:none!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content{opacity:1!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content>*{display:block!important}[i-amphtml-vertical] amp-story-page-attachment{display:block!important;position:relative!important;transform:none!important}[i-amphtml-vertical] .i-amphtml-story-page-attachment-remote-title{overflow:visible!important}[i-amphtml-vertical] .amp-story-draggable-drawer-root{visibility:visible!important}[i-amphtml-vertical] .i-amphtml-story-page-description{background:#fff!important;display:block!important;padding:32px!important;width:auto!important;z-index:9999999!important}[i-amphtml-vertical] .i-amphtml-story-page-description>*{background:#fff!important;color:#000!important;font-size:1rem!important}[i-amphtml-vertical] .i-amphtml-story-page-description>h2{font-size:1.5rem!important}.i-amphtml-story-button-container{cursor:pointer!important;position:absolute!important;width:30px!important;top:0!important;bottom:0!important;height:calc(var(--story-100dvh) - 150px)!important;margin:auto 0!important;background:none!important;transition:opacity 150ms linear,visibility 150ms linear!important;outline:none!important;z-index:100002!important}amp-story:not([desktop]) .i-amphtml-story-button-container{pointer-events:none!important}.i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,.next-container{left:auto!important;right:0!important}[dir=rtl] .i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,[dir=rtl] .next-container{left:0!important;right:auto!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-container{pointer-events:none!important}[dir=rtl] amp-story:not([desktop]) .i-amphtml-story-button-move,amp-story:not([desktop]) .i-amphtml-story-button-move{width:100%!important;height:100%!important;border:none!important;padding:0!important;pointer-events:none!important;background-repeat:no-repeat!important;background-color:transparent!important;background-position:50%!important;filter:invert(100%) drop-shadow(0 0 3px #000b)!important}body:not(.amp-mode-keyboard-active) amp-story:not([desktop]):not(.i-amphtml-story-desktop-one-panel) .i-amphtml-story-button-move{background:none!important}[desktop] .i-amphtml-story-button-move{display:-ms-flexbox!important;display:flex!important;position:fixed!important;top:0!important;bottom:0!important;margin:auto 12px!important;width:54px!important;height:54px!important;border:0!important;background-repeat:no-repeat!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;transition:opacity 150ms linear!important;cursor:pointer!important;pointer-events:all!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container{height:48px!important;width:48px!important;transform:translateY(-50%)!important;top:50%!important;bottom:auto!important;pointer-events:all!important;--i-amphtml-story-desktop-one-panel-button-margin:max(10px,calc(50vw - 72px - var(--i-amphtml-story-desktop-one-panel-width)/2))}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container.prev-container{margin-inline-start:var(--i-amphtml-story-desktop-one-panel-button-margin)!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container.next-container{margin-inline-end:var(--i-amphtml-story-desktop-one-panel-button-margin)!important}[dir=rtl] amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-move,amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-move{filter:none!important;background-color:#fff!important;border-radius:50%!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-hidden{visibility:visible!important;opacity:.1!important;pointer-events:none!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-move{background-size:100%!important;background-color:#fff2!important;border-radius:50%!important;filter:invert(1)!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move,.prev-container>.i-amphtml-story-button-move,[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move,[dir=rtl] .prev-container>.i-amphtml-story-button-move{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="m21.52 16.22 7.75 7.75m-7.75 7.78L29.27 24"/></svg>\')!important}.prev-container>.i-amphtml-story-button-move,[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move{left:0!important;right:auto!important;transform:rotate(180deg)!important}[dir=rtl] .prev-container>.i-amphtml-story-button-move{transform:none!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move,[dir=rtl] .prev-container>.i-amphtml-story-button-move{left:auto!important;right:0!important}.i-amphtml-story-fwd-replay{pointer-events:none!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23000" stroke-linecap="round" stroke-width="2.4" d="M16.15 19.4a9.1 9.1 0 1 1-1.29 3.95M15.6 15.1v4.61m4.4 0h-4.4"/></svg>\')!important}.i-amphtml-story-button-hidden{visibility:hidden!important;opacity:0!important;pointer-events:none!important}:root{--story-page-vw:1vw!important;--story-page-vh:var(--story-dvh,1vh)!important;--story-page-vmin:min(var(--story-page-vw),var(--story-page-vh))!important;--story-page-vmax:max(var(--story-page-vw),var(--story-page-vh))!important;--story-100dvh:calc(var(--story-dvh, 1vh)*100)!important;--story-font-size:calc(var(--story-page-vh, 8px)*2.5)!important;font-size:var(--story-font-size)}@supports (height:1dvh){:root{--story-dvh:1dvh!important}}body{animation:none!important;-webkit-animation:none!important;-moz-animation:none!important;-ms-animation:none!important}amp-story,amp-story-cta-layer,amp-story-page{contain:strict!important;overflow:hidden!important;-webkit-touch-callout:none!important}amp-story-grid-layer{contain:size layout!important;-webkit-touch-callout:none!important}amp-story amp-consent{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:none!important;z-index:initial!important}@media (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:0s!important;transition-duration:0s!important}}amp-consent.amp-hidden{display:none!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;box-sizing:initial!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:start!important;text-shadow:none!important;width:auto!important}amp-story{position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-ms-touch-action:manipulation!important;touch-action:manipulation!important}amp-story,html:root,html:root body{height:100%!important;width:100%!important}html:root,html:root body{font-size:calc(var(--story-page-vh, 8px)*2.5);margin:0!important;padding:0!important;border:0!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}h4,p{font-size:1rem}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h5{font-size:0.83rem}h6{font-size:0.67rem}html:root #i-amphtml-wrapper body{border-top:none!important;overflow:hidden!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important;max-height:initial!important;max-width:initial!important;min-height:initial!important;min-width:initial!important;visibility:visible!important}amp-story[standalone].amp-notbuilt{min-height:1px!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story .amp-video-eq,amp-story[hide]{display:none!important}amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;opacity:1!important;-ms-touch-action:none!important;touch-action:none!important;transition:none!important;z-index:0!important}amp-story-page[active]{z-index:1!important}amp-story-page:not(:first-of-type):not([distance]):not([active]),amp-story-page[distance]:not([active]){transform:translateY(1000vh)!important}amp-story-page[active],amp-story-page[distance="0"][distance],amp-story-page[distance="1"][distance]{transform:translateY(0)!important}amp-story-page[distance="2"][distance],amp-story.i-amphtml-experiment-story-load-inactive-outside-viewport:not([desktop]) amp-story-page[distance="1"]:not(.i-amphtml-story-page-loaded):not(.i-amphtml-visited){transform:translateY(var(--story-100dvh))!important}amp-story-page [data-text-background-color]{border-radius:3px!important;line-height:1.5em!important;padding:2px 4px!important;text-indent:0!important;box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important}amp-story-cta-layer{display:block!important;top:80%!important;margin:0!important;z-index:3!important}amp-story-cta-layer,amp-story-grid-layer{position:absolute!important;right:0!important;bottom:0!important;left:0!important}amp-story-grid-layer{box-sizing:border-box!important;display:grid!important;top:0!important;z-index:2!important;pointer-events:none!important}:root:not(.i-amphtml-story-vertical) amp-story{position:absolute!important;top:0;left:0}amp-story-grid-layer[anchor*=left]{margin-left:0!important}amp-story-grid-layer[anchor*=top]{margin-top:0!important}amp-story-grid-layer[anchor*=bottom]{margin-bottom:0!important}amp-story-grid-layer[anchor*=right]{margin-right:0!important;margin-left:auto!important}amp-story-grid-layer amp-video:after{content:""!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}[template=fill] amp-img img,[template=fill] amp-video video{position:absolute!important}amp-story-grid-layer amp-img img{pointer-events:none!important}amp-story-page[active]:not(.i-amphtml-layout) amp-video.i-amphtml-poolbound:not(.i-amphtml-layout){display:none!important}amp-story-grid-layer a,amp-story-grid-layer amp-ad,amp-story-grid-layer amp-twitter{pointer-events:auto!important}amp-story-grid-layer a *{pointer-events:none!important}amp-story-grid-layer .i-amphtml-embedded-component:after{content:""!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}.i-amphtml-story-grid-template-with-full-bleed-animation{position:absolute!important;display:block!important;padding:0!important}[template=fill]:not(.i-amphtml-story-grid-template-with-full-bleed-animation)>*{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}[template=vertical]{grid-auto-flow:row!important;grid-template-columns:100%!important}[template=horizontal]{grid-auto-flow:column!important;grid-template-rows:100%!important}[template=thirds]{height:100%!important;grid-template-rows:33% 33% 33%!important;grid-template-areas:"upper-third" "middle-third" "lower-third"!important}[aspect-ratio],[preset]{margin:auto;width:var(--i-amphtml-story-layer-width,100%);height:var(--i-amphtml-story-layer-height,100%);font-size:calc(var(--i-amphtml-story-layer-height)/10);margin-left:calc(var(--story-page-vw, 1%)*100*0.5 - var(--i-amphtml-story-layer-width, 100%)*0.5);--i-amphtml-aspect-ratio-float:calc(var(--aspect-ratio))!important;--i-amphtml-story-page-width:calc(var(--story-page-vw, 1vw)*100)!important;--i-amphtml-story-page-height:calc(var(--story-page-vh, 1vh)*100)!important;--i-amphtml-story-unscaled-width:min(var(--i-amphtml-story-page-width),calc(var(--i-amphtml-story-page-height)*var(--i-amphtml-aspect-ratio-float)))!important;--i-amphtml-story-unscaled-height:min(var(--i-amphtml-story-page-height),calc(var(--i-amphtml-story-page-width)/var(--i-amphtml-aspect-ratio-float)))!important;--i-amphtml-story-layer-width:calc(var(--i-amphtml-story-unscaled-width)*var(--scaling-factor, 1))!important;--i-amphtml-story-layer-height:calc(var(--i-amphtml-story-unscaled-height)*var(--scaling-factor, 1))!important}[preset="2021-background"],[preset="2021-foreground"]{--aspect-ratio:69/116!important}[preset="2021-background"]{--scaling-factor:1.142!important}.i-amphtml-story-toast{position:absolute!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;animation:toast 2.2s!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100004!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@keyframes toast{0%{transform:translateY(100px);easing:cubic-bezier(0,0,0.2,1)}8%{transform:translateY(0)}92%{transform:translateY(0);easing:cubic-bezier(0.4,0,1,1)}to{transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/></svg>\')!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-spinner,amp-story .amp-video-eq{right:12px!important;bottom:12px!important}[dir=rtl] .i-amphtml-story-spinner,[dir=rtl] amp-story .amp-video-eq{left:12px!important;right:auto!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{animation:container-rotate 1294ms linear infinite!important}@keyframes container-rotate{to{transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{animation-name:fill-unfill-rotate!important;animation-duration:4400ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-iteration-count:infinite!important;opacity:1!important;filter:drop-shadow(0px 1px 3px rgba(0,0,0,0.25))!important}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:""!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{animation-duration:1100ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{animation-name:right-spin!important}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.i-amphtml-story-page-error,.i-amphtml-story-page-play-button{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;position:absolute!important;bottom:0!important;right:0!important;height:40px!important;border:0!important;margin:8px 0 0 8px!important;padding:0!important;animation:play-button-fly-in 0.4s cubic-bezier(0.4,0,0.2,1)!important;background-color:transparent!important;z-index:10000!important}@keyframes play-button-fly-in{0%{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}.i-amphtml-story-page-error[hidden],.i-amphtml-story-page-play-button[hidden]{display:none!important}.i-amphtml-story-page-error-label,.i-amphtml-story-page-play-label{color:#fff!important;font-family:Roboto,sans-serif!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}.i-amphtml-story-page-error-icon,.i-amphtml-story-page-play-icon{display:inline-block!important;height:24px!important;width:24px!important;margin:0 8px!important;border-radius:24px!important;filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.36))!important}.i-amphtml-story-page-error-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23FFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>\')!important}.i-amphtml-story-page-play-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="%23FFF"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm-4 29V15l12 9-12 9z"/></svg>\')!important}amp-bodymovin-animation,amp-bodymovin-animation *{pointer-events:none!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story.css*/'
      ),
        t.registerElement("amp-story-consent", Ho),
        t.registerElement(
          "amp-story-grid-layer",
          class extends X {
            static prerenderAllowed(t) {
              return it(t.parentElement);
            }
            static previewAllowed() {
              return !0;
            }
            constructor(t) {
              super(t);
            }
            buildCallback() {
              super.buildCallback(), this.CN(), this.zN(), this.NN();
            }
            CN() {
              this.element.hasAttribute("aspect-ratio") &&
                O(this.element, {
                  "--aspect-ratio": this.element
                    .getAttribute("aspect-ratio")
                    .replace(":", "/"),
                });
            }
            NN() {
              _(this.element, ot).forEach((t) => {
                this.LN(t);
              });
            }
            zN() {
              this.LN(this.element);
            }
            LN(t) {
              const i = {};
              for (let s = t.attributes.length - 1; s >= 0; s--) {
                const o = t.attributes[s],
                  n = o.name.toLowerCase(),
                  r = st[n];
                r && ((i[r] = o.value), t.removeAttribute(n));
              }
              N(t, G(i));
            }
          }
        ),
        t.registerElement("amp-story-page", Uo);
    })();
    /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    /**
     * @license
     * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
     * Use of this source code is governed by a BSD-style
     * license that can be found in the LICENSE file or at
     * https://developers.google.com/open-source/licenses/bsd
     */
  },
});
//# sourceMappingURL=amp-story-1.0.mjs.map
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
