(self.AMP = self.AMP || []).push({
  m: 0,
  v: "2301261900000",
  n: "amp-story",
  ev: "1.0",
  l: !0,
  f: function (t, i) {
    !(function () {
      function i(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
        return r;
      }
      function n(t, n) {
        if (t) {
          if ("string" == typeof t) return i(t, n);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? i(t, n)
              : void 0
          );
        }
      }
      function r(t, i) {
        var r =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (r) return (r = r.call(t)).next.bind(r);
        if (
          Array.isArray(t) ||
          (r = n(t)) ||
          (i && t && "number" == typeof t.length)
        ) {
          r && (t = r);
          var o = 0;
          return function () {
            return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o;
      function a() {
        return o || (o = Promise.resolve(void 0));
      }
      var e = function () {
        var t = this;
        this.promise = new Promise(function (i, n) {
          (t.resolve = i), (t.reject = n);
        });
      };
      function s(t) {
        return new Promise(function (i) {
          i(t());
        });
      }
      function h(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function u(t, i) {
        return (u =
          Object.setPrototypeOf ||
          function (t, i) {
            return (t.__proto__ = i), t;
          })(t, i);
      }
      function m(t, i) {
        if ("function" != typeof i && null !== i)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(i && i.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          i && u(t, i);
      }
      function p(t) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, i) {
        if (i && ("object" === l(i) || "function" == typeof i)) return i;
        if (void 0 !== i)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return h(t);
      }
      function f(t) {
        var i = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = p(t);
          if (i) {
            var o = p(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      function d(t, i, n) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = n),
          t
        );
      }
      function v(t) {
        return t ? Array.prototype.slice.call(t) : [];
      }
      var y = Array.isArray;
      function g(t, i) {
        for (var n = 0; n < t.length; n++) if (i(t[n], n, t)) return n;
        return -1;
      }
      var b = Object.prototype,
        x = b.hasOwnProperty;
      function w(t) {
        var i = Object.create(null);
        return t && Object.assign(i, t), i;
      }
      function k(t, i) {
        return x.call(t, i);
      }
      function A(t, i, n, r, o, a, e, s, h, u, m) {
        return t;
      }
      b.toString;
      var T,
        S,
        z =
          /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
      function E(t, i, n, r, o) {
        return (
          o ||
          (i
            ? "�"
            : r
            ? t.slice(0, -1) +
              "\\" +
              t.slice(-1).charCodeAt(0).toString(16) +
              " "
            : "\\" + t)
        );
      }
      function P(t) {
        return void 0 !== T
          ? T
          : (T = (function (t) {
              try {
                var i = t.ownerDocument,
                  n = i.createElement("div"),
                  r = i.createElement("div");
                return n.appendChild(r), n.querySelector(":scope div") === r;
              } catch (t) {
                return !1;
              }
            })(t));
      }
      function M(t, i) {
        return t.replace(/^|,/g, "$&".concat(i, " "));
      }
      function O(t) {
        return String(t).replace(z, E);
      }
      function _(t) {
        var i = String(t);
        return A(-1 === i.indexOf(")")), i;
      }
      function I(t) {
        A(/^[\w-]+$/.test(t));
      }
      function N(t, i) {
        var n = t.classList,
          r = "i-amphtml-scoped";
        n.add(r);
        var o = M(i, ".".concat(r)),
          a = t.querySelectorAll(o);
        return n.remove(r), a;
      }
      function R(t, i) {
        if (P(t)) return t.querySelector(M(i, ":scope"));
        var n = N(t, i)[0];
        return void 0 === n ? null : n;
      }
      function j(t, i) {
        return P(t) ? t.querySelectorAll(M(i, ":scope")) : N(t, i);
      }
      function C(t, i) {
        var n =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector ||
          t.oMatchesSelector;
        return !!n && n.call(t, i);
      }
      function D(t, i, n) {
        var r;
        for (r = t; r && r !== n; r = r.parentElement) if (i(r)) return r;
        return null;
      }
      function L(t, i) {
        return t.closest
          ? t.closest(i)
          : D(t, function (t) {
              return C(t, i);
            });
      }
      function U(t, i) {
        for (var n = t.lastElementChild; n; n = n.previousElementSibling)
          if (i(n)) return n;
        return null;
      }
      function Y(t, i) {
        return I(i), R(t, "> ".concat(i));
      }
      function H(t) {
        var i = Object.getOwnPropertyDescriptor(t, "message");
        if (null != i && i.writable) return t;
        var n = t.message,
          r = t.stack,
          o = new Error(n);
        for (var a in t) o[a] = t[a];
        return (o.stack = r), o;
      }
      function V(t) {
        for (var i, n = null, o = "", a = r(arguments, !0); !(i = a()).done; ) {
          var e = i.value;
          e instanceof Error && !n ? (n = H(e)) : (o && (o += " "), (o += e));
        }
        return (
          n ? o && (n.message = o + ": " + n.message) : (n = new Error(o)), n
        );
      }
      function B(t) {
        var i, n;
        null === (i = (n = self).__AMP_REPORT_ERROR) ||
          void 0 === i ||
          i.call(n, t);
      }
      function F(t) {
        var i = V.apply(null, arguments);
        return (i.expected = !0), i;
      }
      function G(t) {
        for (
          var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1;
          r < i;
          r++
        )
          n[r - 1] = arguments[r];
        var o = V.apply(null, n);
        (o.name = t || o.name), B(o);
      }
      var W = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
        X = {
          getPropertyPriority: function () {
            return "";
          },
          getPropertyValue: function () {
            return "";
          },
        };
      function q(t) {
        var i = t.replace(/[A-Z]/g, function (t) {
          return "-" + t.toLowerCase();
        });
        return W.some(function (t) {
          return i.startsWith(t + "-");
        })
          ? "-".concat(i)
          : i;
      }
      function Z(t, i, n) {
        if (st(i)) return i;
        S || (S = w());
        var r = S[i];
        if (!r || n) {
          if (((r = i), void 0 === t[i])) {
            var o = (function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
              })(i),
              a = (function (t, i) {
                for (var n = 0; n < W.length; n++) {
                  var r = W[n] + i;
                  if (void 0 !== t[r]) return r;
                }
                return "";
              })(t, o);
            void 0 !== t[a] && (r = a);
          }
          n || (S[i] = r);
        }
        return r;
      }
      function $(t, i) {
        var n = t.style;
        for (var r in i) n.setProperty(q(Z(n, r)), String(i[r]), "important");
      }
      function K(t, i, n, r, o) {
        var a = Z(t.style, i, o);
        if (a) {
          var e = r ? n + r : n;
          t.style.setProperty(q(a), e);
        }
      }
      function J(t, i) {
        for (var n in i) K(t, n, i[n]);
      }
      function Q(t, i) {
        void 0 === i && (i = t.hasAttribute("hidden")),
          i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "");
      }
      function tt(t) {
        return "".concat(t, "px");
      }
      function it(t) {
        return "".concat(t, "deg");
      }
      function nt(t, i) {
        return "number" == typeof t ? i(t) : t;
      }
      function rt(t, i) {
        return null == i
          ? "translate(".concat(nt(t, tt), ")")
          : "translate(".concat(nt(t, tt), ", ").concat(nt(i, tt), ")");
      }
      function ot(t) {
        return "scale(".concat(t, ")");
      }
      function at(t) {
        return "rotate(".concat(nt(t, it), ")");
      }
      function et(t, i) {
        return t.getComputedStyle(i) || X;
      }
      function st(t) {
        return t.startsWith("--");
      }
      function ht(t) {
        return (
          "display" in t &&
            G(
              "STYLE",
              "`display` style detected. You must use toggle instead."
            ),
          t
        );
      }
      var ut = "nodisplay",
        mt = "container",
        pt = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            return i.call(this, t);
          }
          var r = n.prototype;
          return (
            (r.isLayoutSupported = function (t) {
              return t == mt;
            }),
            (r.buildCallback = function () {
              this.element.classList.add("i-amphtml-story-layer");
            }),
            n
          );
        })(t.BaseElement),
        lt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
      function ct(t) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        try {
          return decodeURIComponent(t);
        } catch (t) {
          return i;
        }
      }
      function ft(t) {
        var i,
          n = w();
        if (!t) return n;
        for (; (i = lt.exec(t)); ) {
          var r = ct(i[1], i[1]),
            o = i[2] ? ct(i[2].replace(/\+/g, " "), i[2]) : "";
          n[r] = o;
        }
        return n;
      }
      function dt(t) {
        var i = (t || self).location;
        return ft(i.originalHash || i.hash);
      }
      function vt(t) {
        return (t.ownerDocument || t).defaultView;
      }
      function yt(t) {
        var i = vt(t),
          n = ft(i.location.href).page,
          r = "amp-story-page:first-of-type";
        n && (r += ", amp-story-page#".concat(O(n)));
        var o = i.document.querySelectorAll(r);
        return o[o.length - 1] === t;
      }
      var gt = {
          "align-content": "alignContent",
          "align-items": "alignItems",
          "align-self": "alignSelf",
          "grid-area": "gridArea",
          "justify-content": "justifyContent",
          "justify-items": "justifyItems",
          "justify-self": "justifySelf",
        },
        bt = Object.keys(gt)
          .map(function (t) {
            return "[".concat(t, "]");
          })
          .join(","),
        xt = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            return i.call(this, t);
          }
          (n.prerenderAllowed = function (t) {
            return yt(t.parentElement);
          }),
            (n.previewAllowed = function () {
              return !0;
            });
          var r = n.prototype;
          return (
            (r.buildCallback = function () {
              t.prototype.buildCallback.call(this),
                this.tA(),
                this.iA(),
                this.nA();
            }),
            (r.tA = function () {
              this.element.hasAttribute("aspect-ratio") &&
                $(this.element, {
                  "--aspect-ratio": this.element
                    .getAttribute("aspect-ratio")
                    .replace(":", "/"),
                });
            }),
            (r.nA = function () {
              var t = this;
              j(this.element, bt).forEach(function (i) {
                t.rA(i);
              });
            }),
            (r.iA = function () {
              this.rA(this.element);
            }),
            (r.rA = function (t) {
              for (var i = {}, n = t.attributes.length - 1; n >= 0; n--) {
                var r = t.attributes[n],
                  o = r.name.toLowerCase(),
                  a = gt[o];
                a && ((i[a] = r.value), t.removeAttribute(o));
              }
              J(t, ht(i));
            }),
            n
          );
        })(pt),
        wt = "load-end",
        kt = "preview";
      function At(t) {
        return JSON.parse(t);
      }
      function Tt(t, i) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
        if (!isFinite(n) || n < 0) throw new Error("Invalid depth: " + n);
        if (t === i) return !0;
        for (var r = [{ a: t, b: i, depth: n }]; r.length > 0; ) {
          var o = r.shift(),
            a = o.a,
            e = o.b,
            s = o.depth;
          if (s > 0) {
            if (l(a) !== l(e)) return !1;
            if (y(a) && y(e)) {
              if (a.length !== e.length) return !1;
              for (var h = 0; h < a.length; h++)
                r.push({ a: a[h], b: e[h], depth: s - 1 });
              continue;
            }
            if (a && e && "object" === l(a) && "object" === l(e)) {
              var u = Object.keys(a),
                m = Object.keys(e);
              if (u.length !== m.length) return !1;
              for (var p = 0, c = u; p < c.length; p++) {
                var f = c[p];
                r.push({ a: a[f], b: e[f], depth: s - 1 });
              }
              continue;
            }
          }
          if (a !== e) return !1;
        }
        return !0;
      }
      function St(t) {
        var i;
        null === (i = t.parentElement) || void 0 === i || i.removeChild(t);
      }
      function zt(t) {
        var i = t.isConnected;
        if (void 0 !== i) return i;
        for (var n = t; (n = Et(n)).host; ) n = n.host;
        return n.nodeType === Node.DOCUMENT_NODE;
      }
      function Et(t) {
        if (Node.prototype.getRootNode) return t.getRootNode();
        var i, n;
        for (
          i = t;
          i.parentNode &&
          (!(n = i) ||
            ("I-AMPHTML-SHADOW-ROOT" != n.tagName &&
              (11 != n.nodeType ||
                "[object ShadowRoot]" !== Object.prototype.toString.call(n))));
          i = i.parentNode
        );
        return i;
      }
      function Pt(t, i, n) {
        var r =
            i ||
            function (t) {
              return t;
            },
          o = t.dataset,
          a = {},
          e = n || /^param(.+)/;
        for (var s in o) {
          var h = s.match(e);
          h && (a[r(h[1][0].toLowerCase() + h[1].substr(1))] = o[s]);
        }
        return a;
      }
      function Mt(t) {
        var i;
        return (
          "SCRIPT" == t.tagName &&
          "APPLICATION/JSON" ==
            (null === (i = t.getAttribute("type")) || void 0 === i
              ? void 0
              : i.toUpperCase())
        );
      }
      function Ot(t, i, n) {
        var r = t.hasAttribute(i),
          o = void 0 !== n ? n : !r;
        return o !== r && (o ? t.setAttribute(i, "") : t.removeAttribute(i)), o;
      }
      function _t(t) {
        var i,
          n = ((i = t), I("script"), j(i, "> ".concat("script"))),
          r = n.length;
        if (1 !== r)
          throw new Error(
            "Found ".concat(r, " <script> children. Expected 1.")
          );
        var o = n[0];
        if (!Mt(o))
          throw new Error('<script> child must have type="application/json"');
        try {
          var a;
          return At(null !== (a = o.textContent) && void 0 !== a ? a : "");
        } catch (t) {
          throw new Error(
            "Failed to parse <script> contents. Is it valid JSON?"
          );
        }
      }
      function It(t) {
        if (
          (A(
            (function (t) {
              var i = t.tagName;
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
          var i = new e();
          (t.__AMP_UPG_PRM = i.promise), (t.__AMP_UPG_RES = i.resolve);
        }
        var n = t.__AMP_UPG_PRM;
        return A(n), n;
      }
      function Nt(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          i &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Rt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Nt(Object(n), !0).forEach(function (i) {
                d(t, i, n[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Nt(Object(n)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(n, i)
                );
              });
        }
        return t;
      }
      function jt(t, i) {
        if (!!i !== i && null != i)
          if (Array.isArray(i))
            i.forEach(function (i) {
              jt(t, i);
            });
          else {
            var n = i;
            t.appendChild(
              n.nodeType ? n : self.document.createTextNode(String(i))
            );
          }
      }
      function Ct(t, i, n) {
        if (!1 !== n && null != n)
          if ("function" != typeof n || "o" !== i[0] || "n" !== i[1])
            t.setAttribute(i, !0 === n ? "" : String(n));
          else {
            var r = i.toLowerCase().substring(2);
            t.addEventListener(r, n);
          }
      }
      function Dt(t, i) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        if ("string" != typeof t) return t(Rt(Rt({}, i), {}, { children: r }));
        var a = null == i ? void 0 : i.xmlns;
        a && delete i.xmlns;
        var e = a
          ? self.document.createElementNS(a, t)
          : self.document.createElement(t);
        return (
          jt(e, r),
          i &&
            Object.keys(i).forEach(function (t) {
              Ct(e, t, i[t]);
            }),
          e
        );
      }
      function Lt(t, i) {
        var n = s(function () {
          return t.play(!!i);
        });
        return (
          n.catch(function (t) {
            !(function (t) {
              for (
                var i = arguments.length,
                  n = new Array(i > 1 ? i - 1 : 0),
                  r = 1;
                r < i;
                r++
              )
                n[r - 1] = arguments[r];
              B(F.apply(null, n));
            })("TRYPLAY", t);
          }),
          n
        );
      }
      function Ut(t, i, n) {
        var r = 0,
          o = 0,
          a = null;
        function e() {
          r = 0;
          var s,
            h = n - (t.Date.now() - o);
          h > 0
            ? (r = t.setTimeout(e, h))
            : ((s = a), (a = null), i.apply(null, s));
        }
        return function () {
          o = t.Date.now();
          for (var i = arguments.length, s = new Array(i), h = 0; h < i; h++)
            s[h] = arguments[h];
          (a = s), r || (r = t.setTimeout(e, n));
        };
      }
      var Yt = "";
      function Ht(t) {
        var i = t || self;
        return i.__AMP_MODE
          ? i.__AMP_MODE
          : (i.__AMP_MODE = (function (t) {
              return {
                localDev: !1,
                development: Bt(t, dt(t)),
                esm: !1,
                test: !1,
                rtvVersion: Vt(t),
                ssrReady: !1,
              };
            })(i));
      }
      function Vt(t) {
        var i;
        return (
          Yt ||
            (Yt =
              (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) ||
              "01".concat("2301261900000")),
          Yt
        );
      }
      function Bt(t, i) {
        var n = i || dt(t);
        return (
          ["1", "actions", "amp", "amp4ads", "amp4email"].includes(
            n.development
          ) || !!t.AMP_DEV_MODE
        );
      }
      self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null,
      };
      var Ft = self.__AMP_LOG;
      function Gt(t, i) {
        throw new Error("failed to call initLogConstructor");
      }
      function Wt(t) {
        return (
          Ft.user || (Ft.user = Xt()),
          (function (t, i) {
            return i && i.ownerDocument.defaultView != t;
          })(Ft.user.win, t)
            ? Ft.userForEmbed || (Ft.userForEmbed = Xt())
            : Ft.user
        );
      }
      function Xt(t) {
        return Gt();
      }
      function qt() {
        return Ft.dev || (Ft.dev = Gt());
      }
      function Zt(t, i, n, r, o, a, e, s, h, u, m) {
        return t;
      }
      function $t(t, i, n, r, o, a, e, s, h, u, m) {
        return Wt().assert(t, i, n, r, o, a, e, s, h, u, m);
      }
      function Kt(t, i, n, r) {
        si((t = ri(t)), t, i, n), r && ei(t, i);
      }
      function Jt(t, i) {
        return ei((t = ri(t)), i);
      }
      function Qt(t, i) {
        return mi((t = ri(t)), i) ? ei(t, i) : null;
      }
      function ti(t, i) {
        return ei(ai(oi(t)), i);
      }
      function ii(t, i) {
        var n = ai(oi(t));
        return mi(n, i) ? ei(n, i) : null;
      }
      function ni(t, i) {
        return hi(ai(t), i);
      }
      function ri(t) {
        return t.__AMP_TOP || (t.__AMP_TOP = t);
      }
      function oi(t) {
        return t.nodeType ? ((i = vt(t)), Jt(i, "ampdoc")).getAmpDoc(t) : t;
        var i;
      }
      function ai(t) {
        var i = oi(t);
        return i.isSingleDoc() ? i.win : i;
      }
      function ei(t, i) {
        Zt(mi(t, i));
        var n = ui(t)[i];
        return (
          n.obj ||
            (Zt(n.ctor),
            Zt(n.context),
            (n.obj = new n.ctor(n.context)),
            Zt(n.obj),
            (n.context = null),
            n.resolve && n.resolve(n.obj)),
          n.obj
        );
      }
      function si(t, i, n, r, o, a) {
        var e = ui(t),
          s = e[n];
        s ||
          (s = e[n] =
            {
              obj: null,
              promise: null,
              resolve: null,
              reject: null,
              context: null,
              ctor: null,
              sharedInstance: a || !1,
            }),
          (!o && s.ctor) ||
            ((s.ctor = r),
            (s.context = i),
            (s.sharedInstance = a || !1),
            s.resolve && ei(t, n));
      }
      function hi(t, i) {
        var n = ui(t)[i];
        return n
          ? n.promise
            ? n.promise
            : (ei(t, i), (n.promise = Promise.resolve(n.obj)))
          : null;
      }
      function ui(t) {
        var i = t.__AMP_SERVICES;
        return i || (i = t.__AMP_SERVICES = {}), i;
      }
      function mi(t, i) {
        var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
        return !(!n || !n.ctor);
      }
      var pi = "__AMP__EXPERIMENT_TOGGLES";
      function li(t, i) {
        var n = (function (t) {
          var i, n, o, a, e;
          if (t[pi]) return t[pi];
          t[pi] = w();
          var s = t[pi];
          A(s);
          var h = Rt(
            Rt({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}),
            null !== (n = t.AMP_EXP) && void 0 !== n
              ? n
              : At(
                  (null === (o = t.__AMP_EXP) || void 0 === o
                    ? void 0
                    : o.textContent) || "{}"
                )
          );
          for (var u in h) {
            var m = h[u];
            "number" == typeof m &&
              m >= 0 &&
              m <= 1 &&
              (s[u] = Math.random() < m);
          }
          var p =
            null === (a = t.AMP_CONFIG) || void 0 === a
              ? void 0
              : a["allow-doc-opt-in"];
          if (y(p) && p.length) {
            var l = t.document.head.querySelector(
              'meta[name="amp-experiments-opt-in"]'
            );
            if (l)
              for (
                var c,
                  f,
                  d = r(
                    (null === (c = l.getAttribute("content")) || void 0 === c
                      ? void 0
                      : c.split(",")) || [],
                    !0
                  );
                !(f = d()).done;

              ) {
                var v = f.value;
                p.includes(v) && (s[v] = !0);
              }
          }
          Object.assign(
            s,
            (function (t) {
              var i,
                n = "";
              try {
                var o;
                "localStorage" in t &&
                  (n =
                    null !==
                      (o = t.localStorage.getItem("amp-experiment-toggles")) &&
                    void 0 !== o
                      ? o
                      : "");
              } catch (t) {
                qt().warn(
                  "EXPERIMENTS",
                  "Failed to retrieve experiments from localStorage."
                );
              }
              for (
                var a,
                  e =
                    (null === (i = n) || void 0 === i
                      ? void 0
                      : i.split(/\s*,\s*/g)) || [],
                  s = w(),
                  h = r(e, !0);
                !(a = h()).done;

              ) {
                var u = a.value;
                u && ("-" == u[0] ? (s[u.substr(1)] = !1) : (s[u] = !0));
              }
              return s;
            })(t)
          );
          var g =
            null === (e = t.AMP_CONFIG) || void 0 === e
              ? void 0
              : e["allow-url-opt-in"];
          if (y(g) && g.length)
            for (
              var b,
                x = ft(t.location.originalHash || t.location.hash),
                k = r(g, !0);
              !(b = k()).done;

            ) {
              var T = b.value,
                S = x["e-".concat(T)];
              "1" == S && (s[T] = !0), "0" == S && (s[T] = !1);
            }
          return s;
        })(t);
        return !!n[i];
      }
      function ci(t, i) {
        return t.__AMP_EXPERIMENT_BRANCHES
          ? t.__AMP_EXPERIMENT_BRANCHES[i]
          : null;
      }
      var fi = "story-ad-auto-advance",
        di = "31067116",
        vi = (function () {
          return self.AMP.config.urls;
        })();
      function yi(t, i, n, r) {
        var o = ni(t, i);
        if (o) return o;
        var a = oi(t);
        return a
          .whenExtensionsKnown()
          .then(function () {
            var t = a.getExtensionVersion(n);
            return t ? Jt(a.win, "extensions").waitForExtension(n, t) : null;
          })
          .then(function (n) {
            return n
              ? r
                ? ni(t, i)
                : (function (t, i) {
                    return (function (t, i) {
                      var n = hi(t, i);
                      if (n) return n;
                      var r,
                        o,
                        a,
                        s,
                        h = ui(t);
                      return (
                        (h[i] =
                          ((o = (r = new e()).promise),
                          (a = r.reject),
                          (s = r.resolve),
                          o.catch(function () {}),
                          {
                            obj: null,
                            promise: o,
                            resolve: s,
                            reject: a,
                            context: null,
                            ctor: null,
                          })),
                        h[i].promise
                      );
                    })(ai(t), i);
                  })(t, i)
              : null;
          });
      }
      var gi,
        bi,
        xi = function (t) {
          return ii(t, "action");
        },
        wi = function (t) {
          return yi(t, "amp-analytics-instrumentation", "amp-analytics");
        },
        ki = function (t) {
          return ti(t, "documentInfo").get();
        },
        Ai = function (t) {
          return Jt(t, "extensions");
        },
        Ti = function (t) {
          return ti(t, "mutator");
        },
        Si = function (t) {
          return Jt(t, "performance");
        },
        zi = function (t) {
          return Jt(t, "platform");
        },
        Ei = function (t) {
          return ii(t, "localization");
        },
        Pi = function (t) {
          return ei(t, "timer");
        },
        Mi = function (t) {
          return yi(t, "consentPolicyManager", "amp-consent");
        },
        Oi = function (t) {
          return ii(t, "url");
        },
        _i = function (t) {
          return ti(t, "viewer");
        },
        Ii = function (t) {
          return Jt(t, "vsync");
        },
        Ni = function (t) {
          return Jt(t, "xhr");
        };
      function Ri(t, i, n, r) {
        var o = t,
          a = n,
          e = function (t) {
            try {
              return a(t);
            } catch (t) {
              var i, n;
              throw (
                (null === (i = (n = self).__AMP_REPORT_ERROR) ||
                  void 0 === i ||
                  i.call(n, t),
                t)
              );
            }
          },
          s = (function () {
            if (void 0 !== gi) return gi;
            gi = !1;
            try {
              var t = {
                get capture() {
                  return (gi = !0), !1;
                },
              };
              self.addEventListener("test-options", null, t),
                self.removeEventListener("test-options", null, t);
            } catch (t) {}
            return gi;
          })(),
          h = !(null == r || !r.capture);
        return (
          o.addEventListener(i, e, s ? r : h),
          function () {
            null == o || o.removeEventListener(i, e, s ? r : h),
              (a = null),
              (o = null),
              (e = null);
          }
        );
      }
      function ji(t) {
        if (void 0 !== bi) return bi;
        bi = !1;
        try {
          var i = {
            get passive() {
              return (bi = !0), !1;
            },
          };
          t.addEventListener("test-options", null, i),
            t.removeEventListener("test-options", null, i);
        } catch (t) {}
        return bi;
      }
      function Ci(t, i, n, r) {
        var o = { detail: n };
        if ((Object.assign(o, r), "function" == typeof t.CustomEvent))
          return new t.CustomEvent(i, o);
        var a = t.document.createEvent("CustomEvent");
        return a.initCustomEvent(i, !!o.bubbles, !!o.cancelable, n), a;
      }
      function Di(t, i, n, r) {
        return Ri(t, i, n, r);
      }
      function Li(t) {
        return t.detail;
      }
      function Ui(t, i, n, r) {
        var o = n,
          a = Ri(
            t,
            i,
            function (t) {
              try {
                o(t);
              } finally {
                (o = null), a();
              }
            },
            r
          );
        return a;
      }
      var Yi,
        Hi = (function () {
          function t() {
            this.Ft = null;
          }
          var i = t.prototype;
          return (
            (i.add = function (t) {
              var i = this;
              return (
                this.Ft || (this.Ft = []),
                this.Ft.push(t),
                function () {
                  i.remove(t);
                }
              );
            }),
            (i.remove = function (t) {
              var i, n, r;
              this.Ft &&
                ((n = t),
                -1 != (r = (i = this.Ft).indexOf(n)) && i.splice(r, 1));
            }),
            (i.removeAll = function () {
              this.Ft && (this.Ft.length = 0);
            }),
            (i.fire = function (t) {
              if (this.Ft)
                for (var i, n = r(this.Ft.slice(), !0); !(i = n()).done; )
                  (0, i.value)(t);
            }),
            (i.getHandlerCount = function () {
              var t, i;
              return null !==
                (t =
                  null === (i = this.Ft) || void 0 === i ? void 0 : i.length) &&
                void 0 !== t
                ? t
                : 0;
            }),
            t
          );
        })();
      function Vi(t) {
        var i,
          n = ft(t).embedMode,
          r = parseInt(n, 10);
        return 0 === (i = r) || 1 === i || 2 === i || 3 === i || 4 === i
          ? r
          : 0;
      }
      function Bi(t) {
        return 3 === Vi(t.location.hash);
      }
      var Fi = "amp-story",
        Gi = function (t) {
          var i = (function (t) {
            return Qt(t, "story-store");
          })(t);
          return (
            i ||
              ((i = new $i(t)),
              Kt(t, "story-store", function () {
                return i;
              })),
            i
          );
        },
        Wi = {
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
        Xi = 26,
        qi = 33,
        Zi =
          (d((Yi = {}), Wi.ACTIONS_ALLOWLIST, function (t, i) {
            return t.length !== i.length;
          }),
          d(Yi, Wi.INTERACTIVE_COMPONENT_STATE, function (t, i) {
            return t.element !== i.element || t.state !== i.state;
          }),
          d(Yi, Wi.NAVIGATION_PATH, function (t, i) {
            return t.length !== i.length;
          }),
          d(Yi, Wi.PAGE_IDS, function (t, i) {
            return t.length !== i.length;
          }),
          d(Yi, Wi.PAGE_SIZE, function (t, i) {
            return (
              null === t ||
              null === i ||
              t.width !== i.width ||
              t.height !== i.height
            );
          }),
          d(Yi, Wi.PANNING_MEDIA_STATE, function (t, i) {
            return null === t || null === i || !Tt(t, i, 2);
          }),
          d(Yi, Wi.SHOPPING_DATA, function (t, i) {
            return null === t || null === i || !Tt(t, i, 2);
          }),
          d(Yi, Wi.INTERACTIVE_REACT_STATE, function (t, i) {
            return !Tt(t, i, 3);
          }),
          Yi),
        $i = (function () {
          function t(t) {
            (this.t = t),
              (this.sv = {}),
              (this.zi = Rt(Rt({}, this.oA()), this.aA()));
          }
          var i = t.prototype;
          return (
            (i.get = function (t) {
              if (k(this.zi, t)) return this.zi[t];
              qt().error(Fi, "Unknown state %s.", t);
            }),
            (i.subscribe = function (t, i) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              k(this.zi, t)
                ? (this.sv[t] || (this.sv[t] = new Hi()),
                  this.sv[t].add(i),
                  n && i(this.get(t)))
                : qt().error(Fi, "Can't subscribe to unknown state %s.", t);
            }),
            (i.dispatch = function (t, i) {
              var n,
                r = this,
                o = Rt({}, this.zi);
              (this.zi = (function (t, i, n) {
                var r, o, a, e, s;
                switch (i) {
                  case 1:
                    return Rt(
                      Rt({}, t),
                      {},
                      d(
                        {},
                        Wi.INTERACTIVE_REACT_STATE,
                        Rt(
                          Rt({}, t[Wi.INTERACTIVE_REACT_STATE]),
                          {},
                          d({}, n.interactiveId, n)
                        )
                      )
                    );
                  case 2:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.NEW_PAGE_AVAILABLE_ID, n)
                    );
                  case 3:
                    var h = Rt(Rt({}, t[Wi.PANNING_MEDIA_STATE]), n);
                    return Rt(Rt({}, t), {}, d({}, Wi.PANNING_MEDIA_STATE, h));
                  case 4:
                    var u = Rt(Rt({}, t[Wi.SHOPPING_DATA]), n);
                    return Rt(Rt({}, t), {}, d({}, Wi.SHOPPING_DATA, u));
                  case 5:
                    var m = [].concat(t[Wi.ACTIONS_ALLOWLIST], n);
                    return Rt(Rt({}, t), {}, d({}, Wi.ACTIONS_ALLOWLIST, m));
                  case 21:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.PAGE_ATTACHMENT_STATE, !!n)
                    );
                  case 15:
                    return Rt(Rt({}, t), {}, d({}, Wi.AD_STATE, !!n));
                  case 16:
                    return Rt(Rt({}, t), {}, d({}, Wi.EDUCATION_STATE, !!n));
                  case 18:
                    return (
                      (n = n),
                      Rt(
                        Rt({}, t),
                        {},
                        (d((r = {}), Wi.PAUSED_STATE, 1 === n.state),
                        d(r, Wi.SYSTEM_UI_IS_VISIBLE_STATE, !0),
                        d(r, Wi.INTERACTIVE_COMPONENT_STATE, n),
                        r)
                      )
                    );
                  case 17:
                    return Rt(
                      Rt({}, t),
                      {},
                      (d((o = {}), Wi.INFO_DIALOG_STATE, !!n),
                      d(o, Wi.PAUSED_STATE, !!n),
                      o)
                    );
                  case 30:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.STORY_HAS_PLAYBACK_UI_STATE, !!n)
                    );
                  case 29:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.STORY_HAS_BACKGROUND_AUDIO_STATE, !!n)
                    );
                  case 20:
                    return Rt(Rt({}, t), {}, d({}, Wi.MUTED_STATE, !!n));
                  case 22:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.PAGE_HAS_AUDIO_STATE, !!n)
                    );
                  case 23:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.PAGE_HAS_CAPTIONS_STATE, !!n)
                    );
                  case 24:
                    return Rt(Rt({}, t), {}, d({}, Wi.CAPTIONS_STATE, !!n));
                  case 25:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE, !!n)
                    );
                  case Xi:
                    return Rt(Rt({}, t), {}, d({}, Wi.PAUSED_STATE, !!n));
                  case 27:
                    return Rt(Rt({}, t), {}, d({}, Wi.RTL_STATE, !!n));
                  case 19:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.KEYBOARD_ACTIVE_STATE, !!n)
                    );
                  case 28:
                    return Rt(
                      Rt({}, t),
                      {},
                      (d((a = {}), Wi.PAUSED_STATE, !!n),
                      d(a, Wi.SHARE_MENU_STATE, !!n),
                      a)
                    );
                  case qi:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.SYSTEM_UI_IS_VISIBLE_STATE, !!n)
                    );
                  case 34:
                    return 3 === t[Wi.UI_STATE] && 3 !== n
                      ? (qt().error(
                          Fi,
                          "Cannot switch away from UIType_Enum.VERTICAL"
                        ),
                        t)
                      : Rt(Rt({}, t), {}, d({}, Wi.UI_STATE, n));
                  case 9:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.GYROSCOPE_PERMISSION_STATE, n)
                    );
                  case 8:
                    return Rt(Rt({}, t), {}, d({}, Wi.CONSENT_ID, n));
                  case 6:
                    return Rt(
                      Rt({}, t),
                      {},
                      (d((e = {}), Wi.CURRENT_PAGE_ID, n.id),
                      d(e, Wi.CURRENT_PAGE_INDEX, n.index),
                      e)
                    );
                  case 7:
                    return Rt(Rt({}, t), {}, d({}, Wi.ADVANCEMENT_MODE, n));
                  case 10:
                    return Rt(Rt({}, t), {}, d({}, Wi.NAVIGATION_PATH, n));
                  case 11:
                    return Rt(Rt({}, t), {}, d({}, Wi.PAGE_IDS, n));
                  case 12:
                    return Rt(Rt({}, t), {}, d({}, Wi.PAGE_SIZE, n));
                  case 13:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.VIEWER_CUSTOM_CONTROLS, n)
                    );
                  case 14:
                    return Rt(
                      Rt({}, t),
                      {},
                      d({}, Wi.SUBSCRIPTIONS_PAGE_INDEX, n)
                    );
                  case 31:
                    return Rt(
                      Rt({}, t),
                      {},
                      (d((s = {}), Wi.SUBSCRIPTIONS_DIALOG_UI_STATE, !!n),
                      d(s, Wi.PAUSED_STATE, !!n),
                      s)
                    );
                  case 32:
                    return Rt(Rt({}, t), {}, d({}, Wi.SUBSCRIPTIONS_STATE, n));
                  default:
                    return qt().error(Fi, "Unknown action %s.", i), t;
                }
              })(this.zi, t, i)),
                Object.keys(this.sv).forEach(function (t) {
                  ((n = Zi[t]) ? n(o[t], r.zi[t]) : o[t] !== r.zi[t]) &&
                    r.sv[t].fire(r.zi[t]);
                });
            }),
            (i.oA = function () {
              var t;
              return (
                d((t = {}), Wi.CAN_INSERT_AUTOMATIC_AD, !0),
                d(t, Wi.CAN_SHOW_AUDIO_UI, !0),
                d(t, Wi.CAN_SHOW_NAVIGATION_OVERLAY_HINT, !0),
                d(t, Wi.CAN_SHOW_PREVIOUS_PAGE_HELP, !0),
                d(t, Wi.CAN_SHOW_PAGINATION_BUTTONS, !0),
                d(t, Wi.CAN_SHOW_SHARING_UIS, !0),
                d(t, Wi.CAN_SHOW_STORY_URL_INFO, !0),
                d(t, Wi.CAN_SHOW_SYSTEM_LAYER_BUTTONS, !0),
                d(t, Wi.VIEWER_CUSTOM_CONTROLS, []),
                d(t, Wi.AD_STATE, !1),
                d(t, Wi.EDUCATION_STATE, !1),
                d(t, Wi.GYROSCOPE_PERMISSION_STATE, ""),
                d(t, Wi.INFO_DIALOG_STATE, !1),
                d(t, Wi.INTERACTIVE_COMPONENT_STATE, { state: 0 }),
                d(t, Wi.INTERACTIVE_REACT_STATE, {}),
                d(t, Wi.KEYBOARD_ACTIVE_STATE, !1),
                d(t, Wi.MUTED_STATE, !0),
                d(t, Wi.PAGE_ATTACHMENT_STATE, !1),
                d(t, Wi.PAGE_HAS_AUDIO_STATE, !1),
                d(t, Wi.PAGE_HAS_CAPTIONS_STATE, !1),
                d(t, Wi.CAPTIONS_STATE, !0),
                d(t, Wi.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE, !1),
                d(t, Wi.PANNING_MEDIA_STATE, {}),
                d(t, Wi.PAUSED_STATE, !1),
                d(t, Wi.RTL_STATE, !1),
                d(t, Wi.SHARE_MENU_STATE, !1),
                d(t, Wi.SHOPPING_DATA, {}),
                d(t, Wi.STORY_HAS_BACKGROUND_AUDIO_STATE, !1),
                d(t, Wi.STORY_HAS_PLAYBACK_UI_STATE, !1),
                d(t, Wi.SYSTEM_UI_IS_VISIBLE_STATE, !0),
                d(t, Wi.UI_STATE, 0),
                d(t, Wi.ACTIONS_ALLOWLIST, []),
                d(t, Wi.CONSENT_ID, null),
                d(t, Wi.CURRENT_PAGE_ID, ""),
                d(t, Wi.CURRENT_PAGE_INDEX, 0),
                d(t, Wi.ADVANCEMENT_MODE, ""),
                d(t, Wi.NEW_PAGE_AVAILABLE_ID, ""),
                d(t, Wi.NAVIGATION_PATH, []),
                d(t, Wi.PAGE_IDS, []),
                d(t, Wi.PAGE_SIZE, null),
                d(t, Wi.PREVIEW_STATE, !1),
                d(t, Wi.SUBSCRIPTIONS_DIALOG_UI_STATE, !1),
                d(t, Wi.SUBSCRIPTIONS_STATE, 0),
                d(t, Wi.SUBSCRIPTIONS_PAGE_INDEX, -1),
                t
              );
            }),
            (i.aA = function () {
              var t, i, n;
              switch (Vi(this.t.location.hash)) {
                case 1:
                  return (
                    d((t = {}), Wi.CAN_INSERT_AUTOMATIC_AD, !1),
                    d(t, Wi.CAN_SHOW_NAVIGATION_OVERLAY_HINT, !1),
                    d(t, Wi.CAN_SHOW_PAGINATION_BUTTONS, !1),
                    d(t, Wi.CAN_SHOW_PREVIOUS_PAGE_HELP, !0),
                    d(t, Wi.CAN_SHOW_SYSTEM_LAYER_BUTTONS, !1),
                    d(t, Wi.MUTED_STATE, !1),
                    t
                  );
                case 2:
                  return d({}, Wi.CAN_SHOW_SHARING_UIS, !1);
                case 3:
                  return (
                    d((i = {}), Wi.PREVIEW_STATE, !0),
                    d(i, Wi.CAN_INSERT_AUTOMATIC_AD, !1),
                    d(i, Wi.CAN_SHOW_NAVIGATION_OVERLAY_HINT, !1),
                    d(i, Wi.CAN_SHOW_PAGINATION_BUTTONS, !1),
                    d(i, Wi.CAN_SHOW_PREVIOUS_PAGE_HELP, !1),
                    d(i, Wi.CAN_SHOW_SYSTEM_LAYER_BUTTONS, !1),
                    i
                  );
                case 4:
                  return (
                    d((n = {}), Wi.CAN_SHOW_AUDIO_UI, !1),
                    d(n, Wi.CAN_SHOW_SHARING_UIS, !1),
                    d(n, Wi.CAN_SHOW_STORY_URL_INFO, !1),
                    n
                  );
                default:
                  return {};
              }
            }),
            t
          );
        })(),
        Ki = "ampstory:switchpage",
        Ji = "ampstory:previouspage",
        Qi = "ampstory:nextpage",
        tn = "ampstory:pageprogress",
        nn = "ampstory:replay",
        rn = "ampstory:nonextpage",
        on = "ampstory:nopreviouspage";
      function an(t, i, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : void 0,
          a = Ci(t, n, r, o);
        i.dispatchEvent(a);
      }
      function en(t, i) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        wi(t).then(function (o) {
          o && o.triggerEventForTarget(t, i, n, r);
        });
      }
      var sn,
        hn,
        un = "storyPageCount",
        mn = "storyIsMuted",
        pn = "storyProgress",
        ln = "storyAdvancementMode",
        cn = function (t) {
          var i = (function (t) {
            return Qt(t, "story-variable");
          })(t);
          return (
            i ||
              ((i = new fn(t)),
              Kt(t, "story-variable", function () {
                return i;
              })),
            i
          );
        },
        fn = (function () {
          function t(t) {
            var i;
            (this.sA =
              (d((i = {}), "storyInteractiveId", null),
              d(i, "storyInteractiveResponse", null),
              d(i, "storyInteractiveType", null),
              d(i, "storyPageIndex", null),
              d(i, "storyPageId", null),
              d(i, un, null),
              d(i, pn, null),
              d(i, mn, null),
              d(i, "storyPreviousPageId", null),
              d(i, "storyPreviousPageIndex", null),
              d(i, ln, null),
              d(i, "storyShoppingProductId", null),
              i)),
              (this.eA = Gi(t)),
              this.uA();
          }
          var i = t.prototype;
          return (
            (i.uA = function () {
              var t = this;
              this.eA.subscribe(Wi.PAGE_IDS, function () {
                return t.hA();
              }),
                this.eA.subscribe(
                  Wi.CURRENT_PAGE_ID,
                  function () {
                    return t.hA();
                  },
                  !0
                );
            }),
            (i.hA = function () {
              var t = this.eA.get(Wi.PAGE_IDS),
                i = t.filter(function (t) {
                  return !t.startsWith("i-amphtml-ad-");
                }).length;
              this.sA.storyPageCount = i;
              var n = this.eA.get(Wi.CURRENT_PAGE_ID);
              if (n) {
                (this.sA.storyPreviousPageId = this.sA.storyPageId),
                  (this.sA.storyPageId = n);
                var r = this.eA.get(Wi.CURRENT_PAGE_INDEX),
                  o = t.slice(0, r).filter(function (t) {
                    return t.startsWith("i-amphtml-ad-");
                  }).length;
                (this.sA.storyPreviousPageIndex = this.sA.storyPageIndex),
                  (this.sA.storyPageIndex = r - o),
                  1 === i
                    ? (this.sA.storyProgress = 0)
                    : i > 1 && (this.sA.storyProgress = (r - o) / (i - 1));
              }
            }),
            (i.onVariableUpdate = function (t, i) {
              this.sA[t] = i;
            }),
            (i.get = function () {
              return this.sA;
            }),
            t
          );
        })(),
        dn = "__AMP_ANALYTICS_TAG_NAME__",
        vn = "story-open",
        yn = "story-close",
        gn = "manualAdvance",
        bn = function (t, i) {
          var n = (function (t) {
            return Qt(t, "story-analytics");
          })(t);
          return (
            n ||
              ((n = new xn(t, i)),
              Kt(t, "story-analytics", function () {
                return n;
              })),
            n
          );
        },
        xn = (function () {
          function t(t, i) {
            (this.t = t),
              (this.Gn = i),
              (this.cA = cn(t)),
              (this.lA = w()),
              (this.eA = Gi(t)),
              this.uA();
          }
          var i = t.prototype;
          return (
            (i.uA = function () {
              var t = this;
              this.eA.subscribe(
                Wi.CURRENT_PAGE_ID,
                function (i) {
                  var n = t.eA.get(Wi.AD_STATE);
                  if (i && !n) {
                    t.triggerEvent("story-page-visible");
                    var r = t.eA.get(Wi.PAGE_IDS);
                    t.eA.get(Wi.CURRENT_PAGE_INDEX) === r.length - 1 &&
                      t.triggerEvent("story-last-page-visible");
                  }
                },
                !0
              );
            }),
            (i.triggerEvent = function (t) {
              var i = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              this.mA(t),
                oi(this.Gn)
                  .whenFirstVisible()
                  .then(function () {
                    return en(i.Gn, t, i.updateDetails(t, n));
                  });
            }),
            (i.updateDetails = function (t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                n = {},
                r = this.cA.get(),
                o = r.storyPageId;
              return (
                this.lA[o][t] > 1 && (n.repeated = !0),
                i &&
                  ((n.tagName = i[dn] || i.tagName.toLowerCase()),
                  Object.assign(r, Pt(i, void 0, /^vars(.+)/))),
                Rt({ eventDetails: n }, r)
              );
            }),
            (i.mA = function (t) {
              var i = this.cA.get().storyPageId;
              (this.lA[i] = this.lA[i] || {}),
                (this.lA[i][t] = this.lA[i][t] || 0),
                this.lA[i][t]++;
            }),
            t
          );
        })(),
        wn = "none";
      function kn(t) {
        return !!t && -1 != t.toString().indexOf("[native code]");
      }
      function An(t) {
        return (
          void 0 === sn &&
            ((i = t || Element),
            (sn = i.prototype.attachShadow
              ? "v1"
              : i.prototype.createShadowRoot
              ? "v0"
              : wn)),
          sn
        );
        var i;
      }
      function Tn(t, i, n) {
        var r = "";
        return (
          t &&
            Array.prototype.forEach.call(t, function (t) {
              if (t.selectorText && t.style && void 0 !== t.style.cssText)
                (r +=
                  (function (t, i, n) {
                    var r = [];
                    return (
                      t.split(",").forEach(function (t) {
                        (t = t.trim()),
                          n && (t = n(t)),
                          (function (t, i) {
                            var n = (function (t) {
                              return (
                                (t = t
                                  .replace(/\[/g, "\\[")
                                  .replace(/\]/g, "\\]")),
                                new RegExp("^(" + t + ")" + En, "m")
                              );
                            })(i);
                            return !t.match(n);
                          })(t, i) &&
                            (t = (function (t, i) {
                              return (function (t, i) {
                                return t.match(Mn)
                                  ? (t = t.replace(Pn, i)).replace(Mn, i + " ")
                                  : i + " " + t;
                              })(t, i);
                            })(t, i)),
                          r.push(t);
                      }),
                      r.join(", ")
                    );
                  })(t.selectorText, i, n) + " {\n\t"),
                  (r +=
                    (function (t) {
                      var i = t.style.cssText;
                      t.style.content &&
                        !t.style.content.match(/['"]+|attr/) &&
                        (i = i.replace(
                          /content:[^;]*;/g,
                          "content: '" + t.style.content + "';"
                        ));
                      var n = t.style;
                      for (var r in n)
                        "initial" === n[r] && (i += r + ": initial; ");
                      return i;
                    })(t) + "\n}\n\n");
              else if (t.type === CSSRule.MEDIA_RULE)
                (r += "@media " + t.media.mediaText + " {\n"),
                  (r += Tn(t.cssRules, i)),
                  (r += "\n}\n\n");
              else
                try {
                  t.cssText && (r += t.cssText + "\n\n");
                } catch (t) {}
            }),
          r
        );
      }
      var Sn = "-shadowcsshost",
        zn = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
        En =
          (new RegExp("(" + Sn + zn, "gim"),
          new RegExp("(-shadowcsscontext" + zn, "gim"),
          "([>\\s~+[.,{:][\\s\\S]*)?$"),
        Pn = Sn + "-no-combinator",
        Mn = new RegExp(Sn, "gim"),
        On = (new RegExp("-shadowcsscontext", "gim"), "vcs"),
        _n = "verr",
        In = /[^\.\-\_0-9a-zA-Z]/,
        Nn = /[^\-\_0-9a-zA-Z]/;
      function Rn(t) {
        var i,
          n = vt(t),
          r = t.shadowRoot || t.__AMP_SHADOW_ROOT;
        if (r) {
          if (self.trustedTypes && self.trustedTypes.createPolicy) {
            var o = self.trustedTypes.createPolicy(
              "shadow-embed#createShadowRoot",
              {
                createHTML: function (t) {
                  return "";
                },
              }
            );
            r.innerHTML = o.createHTML("");
          } else r.innerHTML = "";
          return r;
        }
        var a,
          e = An();
        if (
          ("v1" == e
            ? (i = t.attachShadow({ mode: "open" })).styleSheets ||
              Object.defineProperty(i, "styleSheets", {
                get: function () {
                  var t = [];
                  return (
                    i.childNodes.forEach(function (i) {
                      "STYLE" === i.tagName && t.push(i.sheet);
                    }),
                    t
                  );
                },
              })
            : (i =
                "v0" == e
                  ? t.createShadowRoot()
                  : (function (t) {
                      var i = t.ownerDocument;
                      t.classList.add("i-amphtml-shadow-host-polyfill");
                      var n = i.createElement("style");
                      (n.textContent =
                        ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}"),
                        t.appendChild(n);
                      var r = i.createElement("i-amphtml-shadow-root");
                      return (
                        t.appendChild(r),
                        (t.__AMP_SHADOW_ROOT = r),
                        Object.defineProperty(t, "shadowRoot", {
                          enumerable: !0,
                          configurable: !0,
                          value: r,
                        }),
                        (r.host = t),
                        (r.getElementById = function (t) {
                          var i = O(t);
                          return r.querySelector("#".concat(i));
                        }),
                        Object.defineProperty(r, "styleSheets", {
                          get: function () {
                            return i.styleSheets
                              ? v(i.styleSheets).filter(function (t) {
                                  return r.contains(t.ownerNode);
                                })
                              : [];
                          },
                        }),
                        r
                      );
                    })(t)),
          void 0 === hn &&
            (hn =
              An() != wn &&
              (kn(Element.prototype.attachShadow) ||
                kn(Element.prototype.createShadowRoot))),
          !hn)
        ) {
          var s = "i-amphtml-sd-".concat(n.Math.floor(1e4 * n.Math.random()));
          (i.id = s),
            i.host.classList.add(s),
            (a = function (t) {
              return (function (t, i) {
                return (function (t, i) {
                  var n = Zt(t.id),
                    r = t.ownerDocument,
                    o = null;
                  try {
                    o = Dn(r.implementation.createHTMLDocument(""), i);
                  } catch (t) {}
                  if (!o)
                    try {
                      o = Dn(r, i);
                    } catch (t) {}
                  return o ? Tn(o, ".".concat(n), jn) : i;
                })(t, i);
              })(i, t);
            }),
            (i.__AMP_CSS_TR = a);
        }
        return i;
      }
      function jn(t) {
        return t.replace(/(html|body)/g, Cn);
      }
      function Cn(t, i, n, r) {
        var o = r.charAt(n - 1),
          a = r.charAt(n + t.length);
        return (o && !In.test(o)) || (a && !Nn.test(a)) ? t : "amp-" + t;
      }
      function Dn(t, i) {
        var n = t.createElement("style");
        n.textContent = i;
        try {
          return (
            (t.head || t.documentElement).appendChild(n),
            n.sheet ? n.sheet.cssRules : null
          );
        } finally {
          n.parentNode && n.parentNode.removeChild(n);
        }
      }
      function Ln(t) {
        var i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : NaN,
          n = t.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/),
          r = n ? n[1] : void 0,
          o = n ? n[2] : void 0;
        return !n || 3 !== n.length || ("s" !== o && "ms" !== o)
          ? i
          : Math.round(("s" == o ? 1e3 : 1) * parseFloat(r));
      }
      function Un(t) {
        var i = t.getBoundingClientRect(),
          n = i.height,
          r = i.left,
          o = i.top,
          a = i.width,
          e = 0 == a ? 1 : a / t.offsetWidth,
          s = 0 == n ? 1 : n / t.offsetHeight;
        return { left: r / e, top: o / s, width: a / e, height: n / s };
      }
      function Yn(t) {
        return L(t, "amp-video, amp-audio");
      }
      function Hn(t, i, n) {
        var r = self.document.createElement("style");
        r.textContent = n;
        var o = Rn(t);
        return o.appendChild(r), o.appendChild(i), t;
      }
      function Vn(t, i, n) {
        var r = n || "";
        t.mutateElement(function () {
          t.element.setAttribute(i, r);
        });
      }
      function Bn(t, i) {
        t.mutateElement(function () {
          t.element.removeAttribute(i);
        });
      }
      function Fn(t, i) {
        if (!i.get(Wi.CAN_SHOW_STORY_URL_INFO)) return !1;
        var n = t.getParam("showStoryUrlInfo");
        return n ? "0" !== n : t.isEmbedded();
      }
      function Gn(t, i, n) {
        var r = L(t, "AMP-STORY"),
          o = r.getAttribute(i);
        return o
          ? Oi(r).assertHttpsUrl(o, r, i)
          : (n &&
              Wt().warn(
                "AMP-STORY",
                "Expected ".concat(i, " attribute on <amp-story>")
              ),
            null);
      }
      var Wn = "data-text-background-color",
        Xn = "[".concat(Wn, "]");
      function qn(t, i) {
        var n = t.cloneNode();
        Q(n, !1), i.appendChild(n), n.click(), n.remove();
      }
      function Zn(t) {
        return t.getRootNode().documentElement.hasAttribute("transformed");
      }
      var $n = "i-amphtml-tooltip-action-icon-launch",
        Kn = "i-amphtml-story-tooltip-theme-dark",
        Jn = {
          "amp-twitter": {
            customIconClassName: "amp-social-share-twitter-no-background",
            actionIcon: $n,
            selector: "amp-twitter[interactive]",
          },
        },
        Qn = Rt({ a: { actionIcon: $n, selector: "a[href]" } }, Jn);
      function tr() {
        return Object.values(
          ((t = Qn),
          (i = {}),
          Object.keys(t).forEach(function (n) {
            i[n] = t[n].selector;
          }),
          i)
        ).join(",");
        var t, i;
      }
      var ir = "amp-story-embedded-component",
        nr = (function () {
          function t(t, i) {
            var n = this;
            (this.t = t),
              (this.fA = i),
              (this.pA = Oi(i)),
              (this.Ii = null),
              (this.dA = null),
              (this.vA = null),
              (this.yA = null),
              (this.eA = Gi(this.t)),
              (this.Ph = Ti(oi(this.t.document))),
              (this.gA = bn(this.t, i)),
              (this.je = Pi(this.t)),
              (this.bA = null),
              (this.xA = null),
              this.eA.subscribe(Wi.INTERACTIVE_COMPONENT_STATE, function (t) {
                n.wA(t);
              }),
              (this.zi = 0),
              (this.kA = null),
              (this.AA = null);
          }
          var i = t.prototype;
          return (
            (i.wA = function (t) {
              switch (t.state) {
                case 0:
                  this.TA(0, null);
                  break;
                case 1:
                  this.TA(1, t);
              }
            }),
            (i.TA = function (t, i) {
              switch (t) {
                case 1:
                  (this.zi = t),
                    this.SA(i),
                    this.gA.triggerEvent("story-focus", this.bA);
                  break;
                case 0:
                  (this.zi = t), this.SA(null);
                  break;
                default:
                  qt().warn(
                    ir,
                    "EmbeddedComponentState ".concat(this.zi, " does not exist")
                  );
              }
            }),
            (i.EA = function () {
              var t = this;
              return (
                (this.dA = this.PA()),
                (this.Ii = Hn(
                  Dt("div", null),
                  this.dA,
                  '.i-amphtml-story-focused-state-layer{top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:100001!important;position:absolute!important}.i-amphtml-story-focused-state-layer.i-amphtml-hidden{opacity:0!important;pointer-events:none!important;transition:opacity 0.1s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-focused-state-layer-nav-button-container{height:100%!important;width:160px!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-left{background-image:linear-gradient(90deg,rgba(33,33,33,0.15) 2%,rgba(33,33,33,0))!important;left:0!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-right{background-image:linear-gradient(90deg,rgba(33,33,33,0) 2%,rgba(33,33,33,0.15))!important;right:0!important}.i-amphtml-story-focused-state-layer-nav-button{position:absolute!important;top:0!important;bottom:0!important;margin:auto!important;width:48px!important;height:48px!important;padding:0!important;border:0!important;background-color:transparent!important;filter:drop-shadow(0px 0px 16px rgba(0,0,0,0.5))!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{left:-8px!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="%23FFF"><path d="M30.8 14.8 28 12 16 24l12 12 2.8-2.8-9.1-9.2z"/><path d="M0 0h48v48H0z" fill="none"/></svg>\')!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{transform:translate3d(8px,0,0);transition:transform 0s linear .1s!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{right:-8px!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="%23FFF"><path d="m20 12-2.8 2.8 9.1 9.2-9.1 9.2L20 36l12-12z"/><path d="M0 0h48v48H0z" fill="none"/></svg>\')!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{transform:translate3d(-8px,0,0);transition:transform 0s linear .1s!important}[desktop] .i-amphtml-story-focused-state-layer-nav-button-container{display:none!important}.i-amphtml-hidden>.i-amphtml-story-tooltip,.i-amphtml-hidden>.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translateZ(0)!important;transition:transform 0s linear 0.1s!important}.i-amphtml-story-tooltip{max-width:248px!important;height:40px!important;border-radius:6px!important;padding:8px!important;position:absolute!important;box-sizing:border-box!important;text-decoration:none!important;text-shadow:none!important;font-weight:500!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;background:#fff!important;box-shadow:0px 6px 16px rgba(0,0,0,0.16)!important;transform:translate3d(0,-16px,0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-tooltip-theme-dark{background:#202125!important}.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translate3d(0,16px,0)!important}.i-amphtml-tooltip-text{text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;margin:0px 5px!important;font-family:Roboto,sans-serif!important;font-size:14px!important;color:#3c4043!important;letter-spacing:0!important;line-height:20px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-text{color:#9aa0a6!important}.i-amphtml-story-tooltip-custom-icon{width:24px!important;height:24px!important;margin:0px 5px!important;background-size:cover!important;background-position:50%!important;background-repeat:no-repeat!important;filter:drop-shadow(0px 0px 8px rgba(0,0,0,0.08))!important;-ms-flex-negative:0;flex-shrink:0;border-radius:50%!important}.i-amphtml-story-tooltip-custom-icon.i-amphtml-hidden{display:none!important}.i-amphtml-tooltip-action-icon{width:16px!important;height:16px!important;margin:0px 5px!important;padding-bottom:2px!important;-ms-flex-negative:0;flex-shrink:0}.i-amphtml-tooltip-action-icon-launch{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="%23757575"><path d="M0 0h48v48H0z" fill="none"/><path d="M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z"/></svg>\')!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-action-icon-launch{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="rgba(255, 255, 255, 0.54)"><path d="M0 0h48v48H0z" fill="none"/><path d="M38 38H10V10h14V6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24h-4v14zM28 6v4h7.2L15.5 29.7l2.8 2.8L38 12.8V20h4V6H28z"/></svg>\')!important}.i-amphtml-story-tooltip-arrow{border-right:8px solid transparent!important;border-left:8px solid transparent!important;border-top:10px solid #fff!important;position:absolute!important;bottom:-8px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-story-tooltip-arrow{border-top:10px solid #202125!important}.i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{bottom:auto!important;top:-8px!important;border-top:0px!important;border-bottom:10px solid #fff!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{border-bottom:10px solid #202125!important}.amp-social-share-twitter-no-background{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path fill="%231da1f2" d="M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23"/></svg>\')}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-tooltip.css*/'
                )),
                this.vA.addEventListener(
                  "click",
                  function (i) {
                    i.stopPropagation(),
                      t.gA.triggerEvent("story-click-through", t.bA),
                      t.vA.href && t.OA(i);
                  },
                  !0
                ),
                this.Ii
              );
            }),
            (i._A = function () {
              var t = this;
              this.je.delay(function () {
                t.MA();
              }, 100),
                this.eA.dispatch(18, { state: 0 });
            }),
            (i.SA = function (t) {
              var i = this;
              t
                ? ((this.bA = t.element),
                  this.dA || (this.fA.appendChild(this.EA()), this.uA()),
                  this.je.delay(function () {
                    i.IA(t);
                  }, 100))
                : this.Ph.mutateElement(this.dA, function () {
                    i.dA.classList.toggle("i-amphtml-hidden", !0);
                  });
            }),
            (i.IA = function (t) {
              var i = this;
              this.zA(t.element),
                this.NA(t),
                (this.xA = Zt(this.fA.querySelector("amp-story-page[active]"))),
                this.Ph.mutateElement(this.dA, function () {
                  i.dA.classList.toggle("i-amphtml-hidden", !1),
                    (function (t) {
                      try {
                        t.focus();
                      } catch (t) {}
                    })(i.dA.querySelector("a.i-amphtml-story-tooltip"));
                });
            }),
            (i.uA = function () {
              var t = this;
              this.eA.subscribe(
                Wi.UI_STATE,
                function (i) {
                  t.RA(i);
                },
                !0
              ),
                this.eA.subscribe(Wi.CURRENT_PAGE_ID, function () {
                  1 === t.zi && t._A();
                });
            }),
            (i.RA = function (t) {
              var i = this;
              this.Ph.mutateElement(this.dA, function () {
                var n = 2 === t || 4 === t;
                Ot(i.dA, "desktop", n);
              });
            }),
            (i.NA = function (t) {
              var i = $t(
                  this.jA(t.element),
                  "Invalid embed config for target",
                  t.element
                ),
                n = this.bA.getAttribute("theme");
              n && "dark" === n.toLowerCase() && this.vA.classList.add(Kn),
                this.CA(t.element),
                this.DA(t.element, i),
                this.LA(i),
                this.UA(),
                this.YA(t);
            }),
            (i.zA = function (t) {
              C(t, tr()) && this.vA.setAttribute("href", this.HA(t));
            }),
            (i.HA = function (t) {
              if ("amp-twitter" == t.tagName.toLowerCase())
                return (
                  "https://twitter.com/_/status/" +
                  t.getAttribute("data-tweetid")
                );
              var i = t.getAttribute("href");
              return this.pA.isProtocolValid(i)
                ? this.pA.parse(i).href
                : (Wt().error(ir, "The tooltip url is invalid"), "");
            }),
            (i.jA = function (t) {
              var i = Qn[t.tagName.toLowerCase()];
              return i && C(t, i.selector)
                ? i
                : (Wt().error(ir, "No config matching provided target."), null);
            }),
            (i.CA = function (t) {
              var i =
                t.getAttribute("data-tooltip-text") ||
                (function (t, i) {
                  var n,
                    r = Oi(t);
                  try {
                    n = r.parse(r.getSourceOrigin(i));
                  } catch (t) {
                    n = r.parse(i);
                  }
                  return n.hostname;
                })(t, this.HA(t));
              this.vA.querySelector(".i-amphtml-tooltip-text").textContent = i;
            }),
            (i.LA = function (t) {
              var i = this.vA.querySelector(".i-amphtml-tooltip-action-icon");
              this.Ph.mutateElement(i, function () {
                i.classList.toggle(t.actionIcon, !0);
              });
            }),
            (i.DA = function (t, i) {
              var n = this,
                r = t.getAttribute("data-tooltip-icon");
              if (this.pA.isProtocolValid(r)) {
                var o = this.vA.querySelector(
                  ".i-amphtml-story-tooltip-custom-icon"
                );
                r || i.customIconClassName
                  ? r
                    ? this.Ph.mutateElement(o, function () {
                        var t = n.pA.parse(r).href;
                        $(o, { "background-image": "url(".concat(t, ")") });
                      })
                    : this.Ph.mutateElement(o, function () {
                        o.classList.add(i.customIconClassName);
                      })
                  : o.classList.toggle("i-amphtml-hidden", !0);
              } else Wt().error(ir, "The tooltip icon url is invalid");
            }),
            (i.UA = function () {
              this.VA()
                ? this.eA.get(Wi.RTL_STATE)
                  ? this.kA.setAttribute("hidden", !0)
                  : this.AA.setAttribute("hidden", !0)
                : (this.kA.removeAttribute("hidden"),
                  this.AA.removeAttribute("hidden"));
            }),
            (i.VA = function () {
              return (
                this.eA.get(Wi.CURRENT_PAGE_INDEX) + 1 ===
                this.eA.get(Wi.PAGE_IDS).length
              );
            }),
            (i.YA = function (t) {
              var i = this,
                n = { arrowOnTop: !1 };
              this.Ph.measureMutateElement(
                this.fA,
                function () {
                  var r = i.xA.getBoundingClientRect();
                  i.GA(t, r, n), i.BA(t, r, n);
                },
                function () {
                  i.vA.classList.toggle(
                    "i-amphtml-tooltip-arrow-on-top",
                    n.arrowOnTop
                  ),
                    $(i.yA, { left: "".concat(n.arrowLeftOffset, "px") }),
                    $(Zt(i.vA), {
                      top: "".concat(n.tooltipTop, "px"),
                      left: "".concat(n.tooltipLeft, "px"),
                    });
                }
              );
            }),
            (i.BA = function (t, i, n) {
              var r = this.vA.offsetHeight;
              (n.tooltipTop = t.clientY - r - 24),
                n.tooltipTop < i.top + 48 &&
                  ((n.arrowOnTop = !0), (n.tooltipTop = t.clientY + 24));
            }),
            (i.GA = function (t, i, n) {
              var r = this.vA.offsetWidth;
              n.tooltipLeft = t.clientX - r / 2;
              var o = i.left + i.width - 32 - r,
                a = i.left + 32;
              (n.tooltipLeft = Math.min(n.tooltipLeft, o)),
                (n.tooltipLeft = Math.max(n.tooltipLeft, a)),
                (n.arrowLeftOffset = Math.abs(
                  t.clientX - n.tooltipLeft - this.yA.offsetWidth / 2
                )),
                (n.arrowLeftOffset = Math.min(n.arrowLeftOffset, r - 24)),
                (n.arrowLeftOffset = Math.max(n.arrowLeftOffset, 0));
            }),
            (i.FA = function (t) {
              var i = this;
              D(t.target, function (t) {
                return t == i.vA;
              }) || (t.stopPropagation(), this._A());
            }),
            (i.MA = function () {
              var t = this;
              this.Ph.mutateElement(this.vA, function () {
                t.vA.querySelector(".i-amphtml-tooltip-action-icon").className =
                  "i-amphtml-tooltip-action-icon";
                var i = t.vA.querySelector(
                  ".i-amphtml-story-tooltip-custom-icon"
                );
                (i.className = "i-amphtml-story-tooltip-custom-icon"),
                  (function (t, i) {
                    for (var n = 0; n < i.length; n++) K(t, i[n], null);
                  })(i, ["background-image"]),
                  t.vA.classList.remove(Kn),
                  t.vA.removeAttribute("href");
              });
            }),
            (i.PA = function () {
              var t = this,
                i = this.eA.get(Wi.RTL_STATE);
              return (
                (this.yA = Dt("div", {
                  class: "i-amphtml-story-tooltip-arrow",
                })),
                (this.vA = Dt(
                  "a",
                  {
                    class: "i-amphtml-story-tooltip",
                    target: "_blank",
                    role: "tooltip",
                  },
                  Dt("div", { class: "i-amphtml-story-tooltip-custom-icon" }),
                  Dt("p", { class: "i-amphtml-tooltip-text", ref: "text" }),
                  Dt("div", { class: "i-amphtml-tooltip-action-icon" }),
                  this.yA
                )),
                (this.kA = Dt("button", {
                  class:
                    "i-amphtml-story-focused-state-layer-nav-button i-amphtml-story-tooltip-nav-button-left",
                  onClick: function (n) {
                    return t.WA(n, i ? Qi : Ji);
                  },
                })),
                (this.AA = Dt("button", {
                  class:
                    "i-amphtml-story-focused-state-layer-nav-button i-amphtml-story-tooltip-nav-button-right",
                  onClick: function (n) {
                    return t.WA(n, i ? Ji : Qi);
                  },
                })),
                Dt(
                  "section",
                  {
                    onClick: function (i) {
                      return t.FA(i);
                    },
                    class:
                      "i-amphtml-story-focused-state-layer i-amphtml-story-system-reset i-amphtml-hidden",
                  },
                  Dt(
                    "div",
                    {
                      class:
                        "i-amphtml-story-focused-state-layer-nav-button-container i-amphtml-story-tooltip-nav-button-left",
                    },
                    this.kA
                  ),
                  Dt(
                    "div",
                    {
                      class:
                        "i-amphtml-story-focused-state-layer-nav-button-container i-amphtml-story-tooltip-nav-button-right",
                    },
                    this.AA
                  ),
                  this.vA
                )
              );
            }),
            (i.WA = function (t, i) {
              t.preventDefault(),
                this.eA.dispatch(7, gn),
                an(this.t, this.Ii, i, void 0, { bubbles: !0 });
            }),
            (i.OA = function (t) {
              t.preventDefault(), qn(this.vA, this.fA);
            }),
            (i.getShadowRootForTesting = function () {
              return this.Ii;
            }),
            t
          );
        })(),
        rr = "default",
        or = /\w+/gi;
      function ar(t, i, n) {
        for (var o, a = r(i, !0); !(o = a()).done; ) {
          var e,
            s = null === (e = t[o.value]) || void 0 === e ? void 0 : e[n];
          if (null != s) return s.string || s;
        }
        return null;
      }
      var er = (function () {
          function t(t) {
            (this.Gn = t),
              (this.XA = _i(t).getParam("lang")),
              (this.qA = {}),
              (this.ZA = new Hi());
          }
          var i = t.prototype;
          return (
            (i.getLanguageCodesForElement = function (t) {
              var i = D(t, function (t) {
                  return t.hasAttribute("lang");
                }),
                n = (function (t) {
                  if (!t) return ["en", rr];
                  var i = t.match(or) || [];
                  return i.reduce(
                    function (t, n, r) {
                      var o = i
                        .slice(0, r + 1)
                        .join("-")
                        .toLowerCase();
                      return t.unshift(o), t;
                    },
                    [rr]
                  );
                })((i ? i.getAttribute("lang") : null) || "");
              return this.XA && n.unshift(this.XA), n;
            }),
            (i.registerLocalizedStringBundles = function (t) {
              var i = this;
              Object.keys(t).forEach(function (n) {
                var r = n.toLowerCase();
                i.qA[r] || (i.qA[r] = {}), Object.assign(i.qA[r], t[n]);
              }),
                this.ZA.fire();
            }),
            (i.getLocalizedString = function (t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.Gn,
                n = this.getLanguageCodesForElement(i);
              return ar(this.qA, n, t);
            }),
            (i.getLocalizedStringAsync = function (t) {
              var i = this,
                n = this.getLanguageCodesForElement(this.Gn),
                r = ar(this.qA, n, t);
              return null !== r
                ? Promise.resolve(r)
                : new Promise(function (r) {
                    var o = i.ZA.add(function () {
                      var a = ar(i.qA, n, t);
                      a && (o(), r(a));
                    });
                  });
            }),
            t
          );
        })(),
        sr = [
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
      function hr(t) {
        var i,
          n,
          r = Ei(t);
        return (
          r ||
            ((r = new er(t)),
            "localization",
            (i = function () {
              return r;
            }),
            si(ai((n = oi(t))), n, "localization", i)),
          r
        );
      }
      function ur(t, i) {
        var n = Ei(i),
          r = Ii(vt(i)),
          o = [];
        return (
          t
            .querySelectorAll("[i-amphtml-i18n-aria-label]")
            .forEach(function (t) {
              o.push(
                n
                  .getLocalizedStringAsync(
                    t.getAttribute("i-amphtml-i18n-aria-label")
                  )
                  .then(function (i) {
                    return t.setAttribute("aria-label", i);
                  })
              ),
                t.removeAttribute("i-amphtml-i18n-aria-label");
            }),
          t
            .querySelectorAll("[i-amphtml-i18n-text-content]")
            .forEach(function (i) {
              o.push(
                n
                  .getLocalizedStringAsync(
                    i.getAttribute("i-amphtml-i18n-text-content")
                  )
                  .then(function (n) {
                    return t.isConnected
                      ? r.mutatePromise(function () {
                          i.textContent = n;
                        })
                      : (i.textContent = n);
                  })
              ),
                i.removeAttribute("i-amphtml-i18n-text-content");
            }),
          Promise.all(o)
        );
      }
      function mr(t) {
        var i;
        return !(
          null === (i = t.matchMedia("(prefers-reduced-motion: reduce)")) ||
          void 0 === i ||
          !i.matches
        );
      }
      function pr(t, i, n, r) {
        return [{ transform: rt(t, i) }, { transform: rt(n, r) }];
      }
      function lr(t, i, n, r, o) {
        return [
          { transform: rt(t, i) + " " + at(120 * o) },
          { transform: rt(n, r) + " " + at(0) },
        ];
      }
      function cr(t, i, n, r) {
        return [
          { opacity: 0, transform: rt(t, i) + " " + ot(0.15) },
          { opacity: 1, transform: rt(n, r) + " " + ot(1) },
        ];
      }
      function fr(t) {
        if (
          (function (t) {
            return (
              t.targetWidth <= t.pageWidth || t.targetHeight <= t.pageHeight
            );
          })(t)
        ) {
          var i = t.pageWidth > t.targetWidth ? t.pageWidth / t.targetWidth : 1,
            n =
              t.pageHeight > t.targetHeight ? t.pageHeight / t.targetHeight : 1;
          return 1.25 * Math.max(i, n);
        }
        return 1;
      }
      function dr(t, i, n, r, o) {
        return 1 === o
          ? pr(t, i, n, r)
          : (function (t, i) {
              return (
                t.forEach(function (t) {
                  (t.transform += " " + ot(i)),
                    (t["transform-origin"] = "left top");
                }),
                t
              );
            })(pr(t, i, n, r), o);
      }
      var vr = "0.4, 0.4, 0.0, 1",
        yr = [
          "scale-start",
          "scale-end",
          "pan-scaling-factor",
          "translate-x",
          "translate-y",
        ],
        gr = [
          "pan-up",
          "pan-down",
          "pan-right",
          "pan-left",
          "zoom-in",
          "zoom-out",
        ],
        br = d(
          {},
          "full-bleed",
          "i-amphtml-story-grid-template-with-full-bleed-animation"
        ),
        xr = {
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
            keyframes: function (t) {
              return pr(-(t.targetX + t.targetWidth), 0, 0, 0);
            },
          },
          "fly-in-right": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: function (t) {
              return pr(t.pageWidth - t.targetX, 0, 0, 0);
            },
          },
          "fly-in-top": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: function (t) {
              return pr(0, -(t.targetY + t.targetHeight), 0, 0);
            },
          },
          "fly-in-bottom": {
            duration: 600,
            easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
            keyframes: function (t) {
              return pr(0, t.pageHeight - t.targetY, 0, 0);
            },
          },
          "rotate-in-left": {
            duration: 1e3,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: function (t) {
              return lr(-(t.targetX + t.targetWidth), 0, 0, 0, -1);
            },
          },
          "rotate-in-right": {
            duration: 1e3,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: function (t) {
              return lr(t.pageWidth - t.targetX, 0, 0, 0, 1);
            },
          },
          "fade-in": {
            duration: 600,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: [{ opacity: 0 }, { opacity: 1 }],
          },
          "scale-fade-up": {
            duration: 600,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: [
              { opacity: 0, transform: "scale(0.8)" },
              { opacity: 1, transform: "scale(1)" },
            ],
          },
          "scale-fade-down": {
            duration: 600,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: [
              { opacity: 0, transform: "scale(1.4)" },
              { opacity: 1, transform: "scale(1)" },
            ],
          },
          drop: {
            duration: 1600,
            easing: "linear",
            keyframes: function (t) {
              var i = Math.max(160, t.targetY + t.targetHeight);
              return [
                {
                  offset: 0,
                  transform: "translateY(".concat(tt(Number(-i)), ")"),
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.29,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.45,
                  transform: "translateY(".concat(tt(0.2812 * -i), ")"),
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.61,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.71,
                  transform: "translateY(".concat(tt(0.0956 * -i), ")"),
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.8,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.85,
                  transform: "translateY(".concat(tt(0.0359 * -i), ")"),
                  easing: "cubic-bezier(.5, 0, 1, 1)",
                },
                {
                  offset: 0.92,
                  transform: "translateY(0)",
                  easing: "cubic-bezier(0, 0, .5, 1)",
                },
                {
                  offset: 0.96,
                  transform: "translateY(".concat(tt(0.0156 * -i), ")"),
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
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: [
              { transform: "rotate(-540deg) scale(0.1)", opacity: 0 },
              { transform: "none", opacity: 1 },
            ],
          },
          "whoosh-in-left": {
            duration: 600,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: function (t) {
              return cr(-(t.targetX + t.targetWidth), 0, 0, 0);
            },
          },
          "whoosh-in-right": {
            duration: 600,
            easing: "cubic-bezier(".concat(vr, ")"),
            keyframes: function (t) {
              return cr(t.pageWidth - t.targetX, 0, 0, 0);
            },
          },
          "pan-left": {
            duration: 1e3,
            easing: "linear",
            keyframes: function (t, i) {
              var n,
                r = i["translate-x"],
                o =
                  null !== (n = i["pan-scaling-factor"]) && void 0 !== n
                    ? n
                    : fr(t);
              (t.targetWidth *= o), (t.targetHeight *= o);
              var a = t.pageWidth - t.targetWidth,
                e = (t.pageHeight - t.targetHeight) / 2;
              return dr(a, e, r ? a + r : 0, e, o);
            },
          },
          "pan-right": {
            duration: 1e3,
            easing: "linear",
            keyframes: function (t, i) {
              var n,
                r = i["translate-x"],
                o =
                  null !== (n = i["pan-scaling-factor"]) && void 0 !== n
                    ? n
                    : fr(t);
              (t.targetWidth *= o), (t.targetHeight *= o);
              var a = t.pageWidth - t.targetWidth,
                e = (t.pageHeight - t.targetHeight) / 2;
              return dr(0, e, -r || a, e, o);
            },
          },
          "pan-down": {
            duration: 1e3,
            easing: "linear",
            keyframes: function (t, i) {
              var n,
                r = i["translate-y"],
                o =
                  null !== (n = i["pan-scaling-factor"]) && void 0 !== n
                    ? n
                    : fr(t);
              (t.targetWidth *= o), (t.targetHeight *= o);
              var a = 0.5 * (t.pageWidth - t.targetWidth),
                e = t.pageHeight - t.targetHeight;
              return dr(a, 0, a, -r || e, o);
            },
          },
          "pan-up": {
            duration: 1e3,
            easing: "linear",
            keyframes: function (t, i) {
              var n,
                r = i["translate-y"],
                o =
                  null !== (n = i["pan-scaling-factor"]) && void 0 !== n
                    ? n
                    : fr(t);
              (t.targetWidth *= o), (t.targetHeight *= o);
              var a = 0.5 * (t.pageWidth - t.targetWidth),
                e = t.pageHeight - t.targetHeight;
              return dr(a, e, a, r ? e + r : 0, o);
            },
          },
          "zoom-in": {
            duration: 1e3,
            easing: "linear",
            keyframes: function (t, i) {
              var n = i["scale-start"],
                r = i["scale-end"];
              return (
                n &&
                  $t(
                    r > n,
                    '"scale-end" value must be greater than "scale-start" value when using "zoom-in" animation.'
                  ),
                [
                  { transform: "scale(".concat(n || 1, ")") },
                  { transform: "scale(".concat(r || 3, ")") },
                ]
              );
            },
          },
          "zoom-out": {
            duration: 1e3,
            easing: "linear",
            keyframes: function (t, i) {
              var n = i["scale-start"],
                r = i["scale-end"];
              return (
                n &&
                  $t(
                    n > r,
                    '"scale-start" value must be higher than "scale-end" value when using "zoom-out" animation.'
                  ),
                [
                  { transform: "scale(".concat(n || 3, ")") },
                  { transform: "scale(".concat(r || 1, ")") },
                ]
              );
            },
          },
        },
        wr = "AMP-STORY",
        kr = "animate-in",
        Ar = "animate-in-duration",
        Tr = "animate-in-delay",
        Sr = "animate-in-after",
        zr = "animate-in-timing-function",
        Er = "[".concat(kr, "]");
      function Pr(t, i) {
        if (!i.hasAttribute(Sr)) return null;
        var n = i.getAttribute(Sr);
        return t.querySelector("#".concat(O(n)))
          ? n
          : (Wt().warn(
              wr,
              "The attribute '".concat(Sr, "' in tag ") +
                "'".concat(i.tagName, "' is set to the invalid value ") +
                "'".concat(n, "'. No children of parenting 'amp-story-page' ") +
                "exist with id ".concat(n, ".")
            ),
            null);
      }
      var Mr = (function () {
          function t(t, i, n, r, o) {
            var a = this,
              e = i.preset,
              s = i.source,
              h = i.spec,
              u = i.startAfterId;
            (this.$A = t),
              (this.KA = s),
              (this.ko = r),
              (this.JA = e ? h.target : null),
              (this.QA = o),
              (this.tT = u),
              (this.iT = this.nT(i)),
              (this.rT = this.iT.then(function (t) {
                return n.then(function (i) {
                  return i.createRunner(t);
                });
              })),
              (this.oT = this.iT.then(function (t) {
                var i,
                  n,
                  r = t.keyframes;
                return a.JA
                  ? (Zt(!r[0].offset),
                    (i = r[0]),
                    (n = ["offset"]),
                    Object.keys(i).reduce(function (t, r) {
                      return n.includes(r) || (t[r] = i[r]), t;
                    }, {}))
                  : null;
              })),
              (this.aT = null),
              (this.sT = null),
              (this.eT = null),
              this.JA &&
                $t(
                  h.delay >= 0,
                  'Negative delays are not allowed in amp-story "animate-in" animations.'
                ),
              this.rT.then(function (t) {
                return a.uT(t);
              });
          }
          t.create = function (i, n, r, o, a) {
            return new t(i, n, r, o, a);
          };
          var i = t.prototype;
          return (
            (i.getDims = function () {
              var t = this;
              return this.ko.measurePromise(function () {
                var i = Un(t.JA),
                  n = Un(t.$A);
                return {
                  pageWidth: n.width,
                  pageHeight: n.height,
                  targetWidth: i.width,
                  targetHeight: i.height,
                  targetX: i.left - n.left,
                  targetY: i.top - n.top,
                };
              });
            }),
            (i.hT = function (t, i) {
              return "function" == typeof t
                ? this.getDims().then(function (n) {
                    return t(n, i || {});
                  })
                : Promise.resolve(t);
            }),
            (i.nT = function (t) {
              var i = t.keyframeOptions,
                n = t.preset,
                r = t.spec;
              if (!n) return Promise.resolve(r);
              var o = r,
                a = o.delay,
                e = o.duration,
                s = o.easing,
                h = r.target;
              return this.hT(n.keyframes, i).then(function (t) {
                return {
                  keyframes: t,
                  target: h,
                  delay: a,
                  duration: e,
                  easing: s,
                  fill: "forwards",
                };
              });
            }),
            (i.applyFirstFrame = function () {
              var t = this;
              return this.hasStarted()
                ? a()
                : (this.aT && this.aT.cancel(),
                  this.oT.then(function (i) {
                    if (i)
                      return t.ko.mutatePromise(function () {
                        J(t.JA, ht(Zt(i)));
                      });
                  }));
            }),
            (i.applyLastFrame = function () {
              if (this.JA) return a();
              this.rT.then(function (t) {
                t.init(), t.finish(!0);
              });
            }),
            (i.start = function () {
              this.hasStarted() || this.cT(0, this.lT());
            }),
            (i.lT = function () {
              return this.tT ? this.QA.waitFor(this.tT) : a();
            }),
            (i.mT = function (t) {
              t.start();
            }),
            (i.hasStarted = function () {
              return (
                this.fT(0) ||
                (!!this.aT && "running" == Zt(this.aT).getPlayState())
              );
            }),
            (i.finish = function () {
              this.aT || this.pT(), this.cT(1);
            }),
            (i.pause = function () {
              if (null === this.eT && this.aT)
                try {
                  this.aT.pause();
                } catch (t) {}
            }),
            (i.resume = function () {
              if (null === this.eT && this.aT)
                try {
                  this.aT.resume();
                } catch (t) {}
            }),
            (i.dT = function (t) {
              this.aT && (t.start(), t.finish());
            }),
            (i.cancel = function () {
              (this.sT = null),
                (this.eT = null),
                this.aT && Zt(this.aT).cancel();
            }),
            (i.cT = function (t, i) {
              var n = i || null;
              (this.sT = t), (this.eT = n), this.aT && this.vT(t, n);
            }),
            (i.vT = function (t, i) {
              var n = this,
                r = Zt(this.aT);
              (i || a()).then(function () {
                if (n.fT(t))
                  switch (((n.sT = null), (n.eT = null), t)) {
                    case 0:
                      return n.mT(r);
                    case 1:
                      return n.dT(r);
                  }
              });
            }),
            (i.uT = function (t) {
              var i = this;
              (this.aT = t),
                t.onPlayStateChanged(function (t) {
                  "finished" == t && i.pT();
                }),
                this.fT() && this.vT(this.sT, this.eT);
            }),
            (i.fT = function (t) {
              return t ? this.sT === t : null !== this.sT;
            }),
            (i.pT = function () {
              this.KA.id && this.QA.notifyFinish(this.KA.id);
            }),
            t
          );
        })(),
        Or = (function () {
          function t(t, i) {
            (this.$A = t),
              (this.tr = i),
              (this.ko = Ii(this.tr.win)),
              (this.yT = this.gT());
            var n =
              li(i.win, "story-disable-animations-first-page") ||
              Bi(i.win) ||
              Zn(i);
            (this.bT =
              mr(i.win) || (n && C(t, "amp-story-page:first-of-type"))),
              (this.xT = null),
              (this.QA = _r.create());
          }
          t.create = function (i, n, r) {
            return new t(i, n);
          };
          var i = t.prototype;
          return (
            (i.applyFirstFrameOrFinish = function () {
              var t = this;
              return Promise.all(
                this.wT().map(function (i) {
                  return t.bT ? i.applyLastFrame() : i.applyFirstFrame();
                })
              );
            }),
            (i.applyLastFrame = function () {
              return Promise.all(
                this.wT().map(function (t) {
                  return t.applyLastFrame();
                })
              );
            }),
            (i.animateIn = function () {
              this.bT ||
                this.kT().forEach(function (t) {
                  return t.start();
                });
            }),
            (i.finishAll = function () {
              this.kT().forEach(function (t) {
                return t.finish();
              });
            }),
            (i.cancelAll = function () {
              this.xT &&
                this.kT().forEach(function (t) {
                  return t.cancel();
                });
            }),
            (i.pauseAll = function () {
              this.xT &&
                !this.bT &&
                this.kT().forEach(function (t) {
                  return t.pause();
                });
            }),
            (i.resumeAll = function () {
              this.xT &&
                !this.bT &&
                this.kT().forEach(function (t) {
                  return t.resume();
                });
            }),
            (i.hasAnimationStarted = function () {
              return this.kT().some(function (t) {
                return t.hasStarted();
              });
            }),
            (i.kT = function () {
              return Zt(this.xT);
            }),
            (i.wT = function () {
              var t = this;
              return (
                this.xT ||
                  (this.xT = Array.prototype.map
                    .call(j(this.$A, Er), function (i) {
                      var n = t.AT(i);
                      return n
                        ? t.TT({
                            preset: n,
                            source: i,
                            startAfterId: Pr(t.$A, i),
                            keyframeOptions: t.ST(i),
                            spec: t.ET(i, n),
                          })
                        : null;
                    })
                    .concat(
                      Array.prototype.map.call(
                        this.$A.querySelectorAll(
                          "amp-story-animation[trigger=visibility]"
                        ),
                        function (i) {
                          return t.TT({
                            source: i,
                            startAfterId: Pr(t.$A, i),
                            spec: _t(i),
                          });
                        }
                      )
                    )
                    .concat(
                      Array.prototype.map.call(
                        this.$A.querySelectorAll("amp-bodymovin-animation"),
                        function (t) {
                          return new Ir(t);
                        }
                      )
                    )
                    .filter(Boolean)),
                Zt(this.xT)
              );
            }),
            (i.TT = function (t) {
              return Mr.create(this.$A, t, Zt(this.yT), this.ko, this.QA);
            }),
            (i.ET = function (t, i) {
              var n = {
                target: t,
                delay: i.delay || 0,
                duration: i.duration || 0,
                easing: i.easing || "cubic-bezier(0.4, 0.0, 0.2, 1)",
                keyframes: [],
              };
              return (
                t.hasAttribute(Ar) &&
                  (n.duration = Ln(t.getAttribute(Ar), n.duration)),
                t.hasAttribute(Tr) &&
                  (n.delay = Ln(t.getAttribute(Tr), n.delay)),
                t.hasAttribute(zr) && (n.easing = t.getAttribute(zr)),
                n
              );
            }),
            (i.gT = function () {
              var t = this;
              return Ai(this.tr.win)
                .installExtensionForDoc(this.tr, "amp-animation")
                .then(function () {
                  return (function (t, i, n, r) {
                    return yi(t, "web-animation", n, void 0).then(function (t) {
                      return (function (t, i, n) {
                        return $t(
                          t,
                          "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
                          "web-animation",
                          n,
                          n,
                          n
                        );
                      })(t, 0, n);
                    });
                  })(t.$A, 0, "amp-animation");
                })
                .then(function (i) {
                  return i.createBuilder({ scope: t.$A, scaleByScope: !0 });
                });
            }),
            (i.AT = function (t) {
              var i = t.getAttribute(kr);
              return xr[i]
                ? ((function (t, i) {
                    gr.indexOf(i) >= 0 &&
                      t.parentElement.classList.add(br["full-bleed"]);
                  })(t, i),
                  xr[i])
                : (Wt().warn(wr, "Invalid", kr, "preset", i, "for element", t),
                  null);
            }),
            (i.ST = function (t) {
              var i = {};
              return (
                yr.forEach(function (n) {
                  if (t.hasAttribute(n)) {
                    var r = parseFloat(t.getAttribute(n));
                    isNaN(r) || r <= 0
                      ? Wt().warn(
                          wr,
                          n,
                          "attribute must be a positive number. Found negative or zero in element",
                          t
                        )
                      : (i[n] = r);
                  }
                }),
                i
              );
            }),
            t
          );
        })(),
        _r = (function () {
          function t() {
            (this.PT = w()), (this.OT = w());
          }
          t.create = function () {
            return new t();
          };
          var i = t.prototype;
          return (
            (i.notifyFinish = function (t) {
              t in this.PT && (Zt(this.OT[t])(), delete this.PT[t]);
            }),
            (i.waitFor = function (t) {
              if (!(t in this.PT)) {
                var i = new e();
                (this.PT[t] = i.promise), (this.OT[t] = i.resolve);
              }
              return this.PT[t];
            }),
            t
          );
        })(),
        Ir = (function () {
          function t(t) {
            (this._T = t), this.pause();
          }
          var i = t.prototype;
          return (
            (i.pause = function () {
              this.MT("pause");
            }),
            (i.resume = function () {
              this.MT("play");
            }),
            (i.start = function () {
              this.applyFirstFrame(), this.resume();
            }),
            (i.applyFirstFrame = function () {
              this.MT("seekTo", { percent: 0 });
            }),
            (i.applyLastFrame = function () {
              this.MT("seekTo", { percent: 1 });
            }),
            (i.cancel = function () {
              this.pause();
            }),
            (i.MT = function (t) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              this._T.getImpl().then(function (n) {
                n.executeAction({
                  method: t,
                  args: i,
                  satisfiesTrust: function () {
                    return !0;
                  },
                });
              });
            }),
            t
          );
        })(),
        Nr = "i-amphtml-story-background-audio";
      function Rr(t) {
        var i =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!t.hasAttribute("background-audio")) return null;
        var n = t.ownerDocument.createElement("audio"),
          r = Oi(t).assertHttpsUrl(t.getAttribute("background-audio"), t);
        return (
          n.setAttribute("src", r),
          n.setAttribute("preload", "auto"),
          i && n.setAttribute("loop", ""),
          n.setAttribute("autoplay", ""),
          n.setAttribute("muted", ""),
          (n.muted = !0),
          n.classList.add(Nr),
          t.appendChild(n),
          n
        );
      }
      var jr = (function () {
        function t(t) {
          (this.IT = new WeakMap()), (this.zT = Si(t));
        }
        var i = t.prototype;
        return (
          (i.isPerformanceTrackingOn = function () {
            return this.zT.isPerformanceTrackingOn();
          }),
          (i.startMeasuring = function (t) {
            if (t.paused) {
              var i = this.NT(t),
                n = this.RT(t, i);
              this.IT.set(t, n),
                (t.error || t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc) &&
                  ((n.metrics.error = t.error ? t.error.code : 0),
                  (n.status = 0));
            } else
              qt().expectedError(
                "media-performance-metrics",
                "media must start paused"
              );
          }),
          (i.stopMeasuring = function (t) {
            var i =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = this.IT.get(t);
            if (n) {
              switch (
                (n.unlisteners.forEach(function (t) {
                  return t();
                }),
                this.IT.delete(t),
                n.status)
              ) {
                case 2:
                  this.jT(n);
                  break;
                case 3:
                  this.CT(n);
              }
              i && this.DT(n);
            }
          }),
          (i.DT = function (t) {
            var i = t.media,
              n = t.metrics;
            if (
              (this.zT.tickDelta(On, this.LT(i)),
              this.zT.tickDelta(
                "vofp",
                C(i, "amp-story-page:first-of-type ".concat(i.tagName)) ? 1 : 0
              ),
              null !== n.error)
            )
              return this.zT.tickDelta(_n, n.error || 0), void this.zT.flush();
            if (n.jointLatency || !(Date.now() - t.timeStamps.start < 1e3)) {
              if (!n.jointLatency)
                return this.zT.tickDelta(_n, 5), void this.zT.flush();
              var r = Math.round(
                (n.rebufferTime / (n.rebufferTime + n.watchTime)) * 100
              );
              this.zT.tickDelta("vjl", n.jointLatency),
                this.zT.tickDelta("vwt", n.watchTime),
                this.zT.tickDelta("vrb", n.rebuffers),
                this.zT.tickDelta("vrbr", r),
                n.rebuffers &&
                  this.zT.tickDelta(
                    "vmtbrb",
                    Math.round(n.watchTime / n.rebuffers)
                  ),
                this.zT.flush();
            }
          }),
          (i.RT = function (t, i) {
            return {
              media: t,
              status: 1,
              unlisteners: i,
              timeStamps: { start: Date.now(), playing: 0, waiting: 0 },
              metrics: {
                error: null,
                jointLatency: 0,
                meanTimeBetweenRebuffers: 0,
                rebuffers: 0,
                rebufferTime: 0,
                watchTime: 0,
              },
            };
          }),
          (i.jT = function (t) {
            t.metrics.watchTime += Date.now() - t.timeStamps.playing;
          }),
          (i.CT = function (t) {
            var i = Date.now() - t.timeStamps.waiting;
            i > 250 && (t.metrics.rebuffers++, (t.metrics.rebufferTime += i));
          }),
          (i.NT = function (t) {
            var i = [
                Di(t, "ended", this.UT.bind(this)),
                Di(t, "pause", this.UT.bind(this)),
                Di(t, "playing", this.YT.bind(this)),
                Di(t, "waiting", this.HT.bind(this)),
              ],
              n = t;
            return (
              t.hasAttribute("src") ||
                (n = U(t, function (t) {
                  return "SOURCE" === t.tagName;
                })),
              i.push(Di(n || t, "error", this.VT.bind(this))),
              i
            );
          }),
          (i.VT = function (t) {
            var i = "SOURCE" === t.target.tagName ? t.target.parent : t.target,
              n = this.IT.get(i);
            (n.metrics.error = i.error ? i.error.code : 0), (n.status = 0);
          }),
          (i.UT = function (t) {
            var i = this.IT.get(t.target);
            2 === i.status && this.jT(i), (i.status = 1);
          }),
          (i.YT = function (t) {
            var i = this.IT.get(t.target),
              n = i.metrics,
              r = i.timeStamps;
            n.jointLatency || (n.jointLatency = Date.now() - r.start),
              3 === i.status && this.CT(i),
              (r.playing = Date.now()),
              (i.status = 2);
          }),
          (i.HT = function (t) {
            var i = this.IT.get(t.target),
              n = i.timeStamps;
            2 === i.status && this.jT(i),
              (n.waiting = Date.now()),
              (i.status = 3);
          }),
          (i.LT = function (t) {
            for (
              var i, n = !1, o = r(v(t.querySelectorAll("source")), !0);
              !(i = o()).done;

            ) {
              var a = i.value,
                e = a.hasAttribute("i-amphtml-video-cached-source");
              if (e && t.currentSrc === a.src) return 2;
              e && (n = !0);
            }
            return n ? 1 : 0;
          }),
          t
        );
      })();
      function Cr(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return i(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          n(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Dr = (function () {
          function t() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
            (this.GT = t), (this.BT = i), (this.FT = n);
          }
          var i = t.prototype;
          return (
            (i.WT = function (t) {
              this.FT.forEach(function (i) {
                var n = document.createElement("track");
                (n.id = i.id),
                  (n.kind = i.kind),
                  (n.label = i.label),
                  (n.srclang = i.srclang),
                  (n.default = i.default),
                  (n.src = i.src),
                  n.addEventListener("load", function () {
                    (n.mode = "showing"), (t.textTracks[0].mode = "showing");
                  }),
                  t.appendChild(n);
              });
            }),
            (i.applyToElement = function (i, n) {
              var r = this;
              t.removeFrom(i, n),
                this.GT
                  ? n.setAttribute("src", this.GT)
                  : n.removeAttribute("src"),
                this.BT.forEach(function (t) {
                  return n.appendChild(t);
                }),
                n.changedSources && n.changedSources(),
                this.FT.length > 0 &&
                  (n.readyState >= 1
                    ? this.WT(n)
                    : n.addEventListener("loadedmetadata", function t() {
                        n.removeEventListener("loadedmetadata", t), r.WT(n);
                      }));
            }),
            (t.removeFrom = function (i, n) {
              var r,
                o = null;
              (r = "VIDEO" === n.tagName ? n : Yn(n) || n).hasAttribute(
                "src"
              ) &&
                ((o = t.createSourceElement(i, r)), r.removeAttribute("src"));
              var a = v(r.querySelectorAll("source"));
              a.forEach(function (t) {
                return St(t);
              });
              var e = v(r.querySelectorAll("track"));
              return (
                e.forEach(function (t) {
                  return St(t);
                }),
                new t(null, o ? [o] : a, e)
              );
            }),
            (t.createSourceElement = function (t, i) {
              var n = t.document.createElement("source"),
                r = i.getAttribute("src");
              n.setAttribute("src", r);
              var o = i.getAttribute("amp-orig-src");
              o && n.setAttribute("amp-orig-src", o);
              var a = i.getAttribute("type");
              return a && n.setAttribute("type", a), n;
            }),
            t
          );
        })(),
        Lr = [
          "i-amphtml-pool-media",
          "i-amphtml-pool-audio",
          "i-amphtml-pool-video",
        ],
        Ur = ["id", "src", "class", "autoplay"];
      function Yr(t) {
        return Lr.indexOf(t) >= 0;
      }
      function Hr(t) {
        return Ur.indexOf(t) >= 0;
      }
      function Vr(t, i) {
        for (var n = i.classList.length - 1; n >= 0; n--) {
          var r = i.classList.item(n);
          Yr(r) || i.classList.remove(r);
        }
        for (var o = 0; o < t.classList.length; o++) {
          var a = t.classList.item(o);
          Yr(a) || i.classList.add(a);
        }
      }
      function Br(t, i) {
        for (
          var n = t.attributes, r = i.attributes, o = r.length - 1;
          o >= 0;
          o--
        ) {
          var a = r[o].name;
          Hr(a) || i.removeAttribute(a);
        }
        for (var e = 0; e < n.length; e++) {
          var s = n[e],
            h = s.name,
            u = s.value;
          Hr(h) || i.setAttribute(h, u);
        }
      }
      var Fr = (function () {
          function t(t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            this.XT = t;
            var n = new e();
            (this.qT = n.promise),
              (this.options = i),
              (this.Dn = n.resolve),
              (this.Ic = n.reject);
          }
          var i = t.prototype;
          return (
            (i.getName = function () {
              return this.XT;
            }),
            (i.whenComplete = function () {
              return this.qT;
            }),
            (i.execute = function (t) {
              return this.executeInternal(t).then(this.Dn, this.Ic);
            }),
            (i.executeInternal = function (t) {
              return a();
            }),
            (i.requiresSynchronousExecution = function () {
              return !1;
            }),
            (i.failTask = function (t) {
              this.Ic(t);
            }),
            t
          );
        })(),
        Gr = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            return i.call(this, "play");
          }
          return (
            (n.prototype.executeInternal = function (t) {
              return t.paused ? Lt(t) : a();
            }),
            n
          );
        })(Fr),
        Wr = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            return i.call(this, "pause");
          }
          return (
            (n.prototype.executeInternal = function (t) {
              return t.pause(), a();
            }),
            n
          );
        })(Fr),
        Xr = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            return i.call(this, "unmute");
          }
          return (
            (n.prototype.executeInternal = function (t) {
              return (t.muted = !1), t.removeAttribute("muted"), a();
            }),
            n
          );
        })(Fr),
        qr = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            return i.call(this, "mute");
          }
          return (
            (n.prototype.executeInternal = function (t) {
              return (t.muted = !0), t.setAttribute("muted", ""), a();
            }),
            n
          );
        })(Fr),
        Zr = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { currentTime: 0 };
            return i.call(this, "setCurrentTime", t);
          }
          return (
            (n.prototype.executeInternal = function (t) {
              return (t.currentTime = this.options.currentTime), a();
            }),
            n
          );
        })(Fr),
        $r = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            return i.call(this, "load");
          }
          var r = n.prototype;
          return (
            (r.executeInternal = function (t) {
              return t.load(), a();
            }),
            (r.requiresSynchronousExecution = function () {
              return !0;
            }),
            n
          );
        })(Fr),
        Kr = (function (t) {
          m(n, t);
          var i = f(n);
          function n() {
            return i.call(this, "bless");
          }
          var r = n.prototype;
          return (
            (r.requiresSynchronousExecution = function () {
              return !0;
            }),
            (r.executeInternal = function (t) {
              var i = t.muted;
              return (t.muted = !1), i && (t.muted = !0), a();
            }),
            n
          );
        })(Fr),
        Jr = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t, n) {
            var r;
            return ((r = i.call(this, "update-src")).t = t), (r.ZT = n), r;
          }
          var r = n.prototype;
          return (
            (r.executeInternal = function (t) {
              return (
                Dr.removeFrom(this.t, t), this.ZT.applyToElement(this.t, t), a()
              );
            }),
            (r.requiresSynchronousExecution = function () {
              return !0;
            }),
            n
          );
        })(Fr),
        Qr = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            var n;
            return ((n = i.call(this, "swap-into-dom")).$T = t), n;
          }
          var r = n.prototype;
          return (
            (r.executeInternal = function (t) {
              return zt(this.$T)
                ? (Vr(this.$T, t),
                  Br(this.$T, t),
                  this.$T.parentElement.replaceChild(t, this.$T),
                  a())
                : (this.failTask(
                    "Cannot swap media for element that is not in DOM."
                  ),
                  a());
            }),
            (r.requiresSynchronousExecution = function () {
              return !0;
            }),
            n
          );
        })(Fr),
        to = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            var n;
            return ((n = i.call(this, "swap-out-of-dom")).$T = t), n;
          }
          var r = n.prototype;
          return (
            (r.executeInternal = function (t) {
              return (
                Vr(t, this.$T),
                Br(t, this.$T),
                t.parentElement.replaceChild(this.$T, t),
                a()
              );
            }),
            (r.requiresSynchronousExecution = function () {
              return !0;
            }),
            n
          );
        })(Fr),
        io = "ended";
      function no(t) {
        var i;
        It(((i = t), i)).then(function (t) {
          t.signals().signal("playback-delegated");
        });
      }
      function ro(t) {
        t.signals().signal("user-interacted");
      }
      var oo = "audio",
        ao = "video",
        eo = "placeholder",
        so = "pool",
        ho = {},
        uo = 0,
        mo = (function () {
          function t(t, i, n) {
            var r,
              o = this;
            (this.t = t),
              (this.je = Pi(t)),
              (this.KT = n),
              (this.allocated = {}),
              (this.unallocated = {}),
              (this.JT = {}),
              (this.QT = null),
              (this.tE = {}),
              (this.iE = {}),
              (this.nE = 0),
              (this.rE = !1),
              (this.oE = null),
              (this.aE =
                (d((r = {}), oo, function () {
                  var t = o.t.document.createElement("audio");
                  return (
                    t.setAttribute("muted", ""),
                    (t.muted = !0),
                    t.classList.add("i-amphtml-pool-media"),
                    t.classList.add("i-amphtml-pool-audio"),
                    t
                  );
                }),
                d(r, ao, function () {
                  var t = o.t.document.createElement("video");
                  return (
                    t.setAttribute("muted", ""),
                    (t.muted = !0),
                    t.setAttribute("playsinline", ""),
                    t.classList.add("i-amphtml-pool-media"),
                    t.classList.add("i-amphtml-pool-video"),
                    t
                  );
                }),
                r)),
              this.sE(i);
          }
          var i = t.prototype;
          return (
            (i.sE = function (t) {
              var i = 0;
              for (var n in t) {
                var r = t[n],
                  o = Zt(this.aE[n])();
                (this.allocated[n] = []), (this.unallocated[n] = []);
                for (var a = r; a > 0; a--) {
                  var e = 1 == a ? o : o.cloneNode(!0);
                  e.addEventListener("error", this.eE, { capture: !0 }),
                    (e.id = "i-amphtml-pool-media-" + i++),
                    (e.muted = !0),
                    (e.__AMP_MEDIA_ELEMENT_ORIGIN__ = so),
                    this.unallocated[n].push(e);
                }
              }
            }),
            (i.eE = function (t) {
              var i = t.target;
              if (C(i, "source:last-of-type, video[src]")) {
                var n = "SOURCE" === i.tagName ? i.parentElement : i;
                n.__AMP_MEDIA_LOAD_FAILURE_SRC = n.currentSrc || !0;
              }
            }),
            (i.uE = function () {
              return new Dr();
            }),
            (i.hE = function (t, i) {
              return this.KT(t) < this.KT(i) ? -1 : 1;
            }),
            (i.cE = function () {
              return "i-amphtml-placeholder-media-" + this.nE++;
            }),
            (i.lE = function (t) {
              return t.__AMP_MEDIA_ELEMENT_ORIGIN__ === so;
            }),
            (i.mE = function (t) {
              switch (t.tagName.toLowerCase()) {
                case "audio":
                  return oo;
                case "video":
                  return ao;
                default:
                  return 0;
              }
            }),
            (i.fE = function (t) {
              return this.unallocated[t].pop();
            }),
            (i.pE = function (t, i) {
              if (this.dE(t, i)) return i;
              var n = this.allocated[t];
              return n[
                g(n, function (t) {
                  return t["replaced-media"] === i.id;
                })
              ];
            }),
            (i.vE = function (t, i) {
              this.allocated[t].push(i);
              var n = this.unallocated[t],
                r = n.indexOf(i);
              r >= 0 && n.splice(r, 1);
            }),
            (i.yE = function (t, i) {
              var n = this,
                r = this.allocated[t];
              if (
                (r.sort(function (t, i) {
                  return n.hE(t, i);
                }),
                i)
              ) {
                var o = r[r.length - 1];
                if (!o || this.KT(o) < this.KT(i)) return null;
              }
              var a = r.pop();
              return this.unallocated[t].push(a), a;
            }),
            (i.gE = function (t) {
              var i = this,
                n = this.mE(t),
                r = this.allocated[n];
              return (zt(t) ? this.bE(t) : a()).then(function () {
                var o = r.indexOf(t);
                Zt(o >= 0), r.splice(o, 1), i.unallocated[n].push(t);
              });
            }),
            (i.xE = function (t, i) {
              var n = this.yE(t, i);
              return n ? (this.bE(n), n) : null;
            }),
            (i.dE = function (t, i) {
              var n = i;
              return this.allocated[t].indexOf(n) >= 0;
            }),
            (i.wE = function (t, i, n) {
              var r = this,
                o = Yn(i),
                a = Yn(t);
              return (
                (i["replaced-media"] = t.id),
                this.kE(i, new Qr(t))
                  .then(function () {
                    return Promise.all([r.AE(o), r.AE(a)]);
                  })
                  .then(function () {
                    return r.kE(i, new Jr(r.t, n));
                  })
                  .then(function () {
                    return r.kE(i, new $r());
                  })
                  .catch(function () {
                    r.gE(i);
                  })
              );
            }),
            (i.AE = function (t) {
              return t
                ? "amp-audio" == t.tagName.toLowerCase()
                  ? a()
                  : (this.tE[t.id] && this.TE(t, 1),
                    t.getImpl().then(function (t) {
                      t.resetOnDomChange && t.resetOnDomChange();
                    }))
                : a();
            }),
            (i.SE = function (t) {
              var i = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.uE();
              return this.kE(t, new Jr(this.t, n)).then(function () {
                return i.kE(t, new $r());
              });
            }),
            (i.bE = function (t) {
              var i = t["replaced-media"],
                n = this.iE[i];
              t["replaced-media"] = null;
              var r = this.kE(t, new to(n));
              return this.SE(t), r;
            }),
            (i.EE = function (t) {
              if (!zt(t)) return a();
              var i = this.mE(t),
                n = this.pE(i, t);
              if (n) return Promise.resolve(n);
              var r = t,
                o = this.JT[r.id];
              Zt(o instanceof Dr);
              var e = this.fE(i) || this.xE(i, r);
              return e
                ? (this.vE(i, e),
                  this.wE(r, e, o).then(function () {
                    return e;
                  }))
                : a();
            }),
            (i.PE = function (t) {
              return t.__AMP_MEDIA_IS_BLESSED__ ? a() : this.kE(t, new Kr());
            }),
            (i.reregister = function (t) {
              return this.register(t, !0);
            }),
            (i.register = function (t) {
              var i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = t.parentNode;
              if ((n && n.signals && this.OE(n), this.lE(t))) {
                if (i) {
                  var r = Dr.removeFrom(this.t, t);
                  return (this.JT[t.id] = r), this.SE(t, r);
                }
                return a();
              }
              var o = t;
              o.__AMP_MEDIA_ELEMENT_ORIGIN__ = eo;
              var e = o.id || this.cE();
              if (this.JT[e] && this.iE[e]) return a();
              o.id = e;
              var s = Dr.removeFrom(this.t, o);
              return (
                (this.JT[e] = s),
                (this.iE[e] = o),
                o instanceof HTMLMediaElement &&
                  ((o.muted = !0), o.setAttribute("muted", ""), o.pause()),
                a()
              );
            }),
            (i.OE = function (t) {
              (this.oE = this.oE || []), this.oE.push(t);
            }),
            (i.preload = function (t) {
              return this.EE(t).then();
            }),
            (i.play = function (t) {
              var i = this;
              return this.EE(t).then(function (t) {
                return t ? i.kE(t, new Gr()) : a();
              });
            }),
            (i.pause = function (t) {
              var i = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = this.mE(t),
                o = this.pE(r, t);
              return o
                ? this.kE(o, new Wr()).then(function () {
                    n &&
                      i.je.delay(function () {
                        i.kE(o, new Zr({ currentTime: 0 }));
                      }, 100);
                  })
                : a();
            }),
            (i.rewindToBeginning = function (t) {
              return this.setCurrentTime(t, 0);
            }),
            (i.setCurrentTime = function (t, i) {
              var n = this.mE(t),
                r = this.pE(n, t);
              return r ? this.kE(r, new Zr({ currentTime: i })) : a();
            }),
            (i.mute = function (t) {
              var i = this.mE(t),
                n = this.pE(i, t);
              if (!n) return a();
              var r = this.tE[t.id];
              return r && (r.gain.value = 0), this.kE(n, new qr());
            }),
            (i.unmute = function (t) {
              var i = this.mE(t),
                n = this.pE(i, t);
              if (!n) return a();
              if (i == ao) {
                var r = t.parentElement;
                if (r) {
                  var o = parseFloat(r.getAttribute("volume"));
                  if (o <= 0 || r.hasAttribute("noaudio")) return a();
                  o < 1 && this.TE(t, o);
                }
              }
              return this.kE(n, new Xr());
            }),
            (i.TE = function (t, i) {
              if (
                ("function" == typeof AudioContext
                  ? (this.QT = this.QT || new AudioContext())
                  : "function" == typeof webkitAudioContext &&
                    (this.QT = this.QT || new global.webkitAudioContext()),
                this.QT)
              ) {
                if (!this.tE[t.id]) {
                  var n = this.QT.createMediaElementSource(t),
                    r = this.QT.createGain();
                  (this.tE[t.id] = r),
                    n.connect(r).connect(this.QT.destination);
                }
                this.tE[t.id].gain.value = i;
              }
            }),
            (i.blessAll = function () {
              var t = this;
              if (this.rE) return a();
              (this.oE || []).forEach(ro), (this.oE = null);
              var i = []
                .concat(
                  Cr(this.allocated.audio),
                  Cr(this.unallocated.video),
                  Cr(this.allocated.audio),
                  Cr(this.unallocated.video)
                )
                .map(function (i) {
                  return t.PE(i);
                });
              return Promise.all(i).then(
                function () {
                  t.rE = !0;
                },
                function (t) {
                  qt().expectedError(
                    "AMP-STORY",
                    "Blessing all media failed: ",
                    t
                  );
                }
              );
            }),
            (i._E = function (t) {
              var i = this,
                n = t.__AMP_MEDIA_ELEMENT_TASKS__;
              if (0 !== n.length) {
                var r = n[0],
                  o = function () {
                    r.execute(t)
                      .catch(function (t) {
                        return qt().error("AMP-STORY", t);
                      })
                      .then(function () {
                        n.shift(), i._E(t);
                      });
                  };
                r.requiresSynchronousExecution() ? o() : this.je.delay(o, 0);
              }
            }),
            (i.kE = function (t, i) {
              t.__AMP_MEDIA_ELEMENT_TASKS__ ||
                (t.__AMP_MEDIA_ELEMENT_TASKS__ = []);
              var n = t.__AMP_MEDIA_ELEMENT_TASKS__,
                r = 0 !== n.length;
              return n.push(i), r || this._E(t), i.whenComplete();
            }),
            (t.for = function (i) {
              var n = i.getElement(),
                r = n.__AMP_MEDIA_POOL_ID__;
              if (r && ho[r]) return ho[r];
              var o = String(uo++);
              return (
                (n.__AMP_MEDIA_POOL_ID__ = o),
                (ho[o] = new t(
                  vt(i.getElement()),
                  i.getMaxMediaElementCounts(),
                  function (t) {
                    return i.getElementDistance(t);
                  }
                )),
                ho[o]
              );
            }),
            t
          );
        })(),
        po = (new Set(["c", "v", "a", "ad"]), self.__AMP_ERRORS || []);
      (self.__AMP_ERRORS = po), Math.random();
      var lo = {
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
        co = 300,
        fo = (function () {
          function t() {
            (this.ME = []),
              (this.IE = []),
              (this.zE = []),
              (this.NE = []),
              (this.Id = !1);
          }
          var i = t.prototype;
          return (
            (i.getType = function () {
              return 0;
            }),
            (i.addProgressListener = function (t) {
              this.ME.push(t);
            }),
            (i.addAdvanceListener = function (t) {
              this.IE.push(t);
            }),
            (i.addPreviousListener = function (t) {
              this.zE.push(t);
            }),
            (i.addOnTapNavigationListener = function (t) {
              this.NE.push(t);
            }),
            (i.removeAllAddedListeners = function () {
              (this.ME = []), (this.IE = []), (this.zE = []), (this.NE = []);
            }),
            (i.start = function () {
              this.Id = !0;
            }),
            (i.stop = function (t) {
              this.Id = !1;
            }),
            (i.isAutoAdvance = function () {
              return !1;
            }),
            (i.isRunning = function () {
              return this.Id;
            }),
            (i.getProgress = function () {
              return 1;
            }),
            (i.onProgressUpdate = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0,
                i = null != t ? t : this.getProgress();
              this.ME.forEach(function (t) {
                t(i);
              });
            }),
            (i.onAdvance = function () {
              this.IE.forEach(function (t) {
                t();
              });
            }),
            (i.onPrevious = function () {
              this.zE.forEach(function (t) {
                t();
              });
            }),
            (i.onTapNavigation = function (t) {
              this.NE.forEach(function (i) {
                i(t);
              });
            }),
            (t.forElement = function (i, n) {
              var r = vo.fromElement(i, n);
              if (r) return r;
              var o = n.getAttribute("auto-advance-after");
              if (o) {
                var a = yo.fromAutoAdvanceString(o, i, n);
                if (a) return a;
                var e = go.fromAutoAdvanceString(o, i, n);
                if (e) return e;
              }
              return new t();
            }),
            t
          );
        })(),
        vo = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t, n) {
            var r;
            ((r = i.call(this)).Gn = n),
              (r.RE = null),
              (r.je = Pi(t)),
              (r.jE = null),
              (r.CE = !1),
              (r.tr = oi(t.document)),
              r.DE(),
              n.ownerDocument.defaultView &&
                (r.eA = Gi(n.ownerDocument.defaultView));
            var o = r.eA.get(Wi.RTL_STATE);
            return (
              (r.LE = {
                left: { widthRatio: o ? 0.75 : 0.25, direction: o ? 1 : 2 },
                right: { widthRatio: o ? 0.25 : 0.75, direction: o ? 2 : 1 },
              }),
              r
            );
          }
          var r = n.prototype;
          return (
            (r.getType = function () {
              return 1;
            }),
            (r.getProgress = function () {
              return 1;
            }),
            (r.DE = function () {
              var t = this;
              this.Gn.addEventListener("touchstart", this.UE.bind(this), !0),
                this.Gn.addEventListener("touchend", this.YE.bind(this), !0),
                this.Gn.addEventListener("click", this.HE.bind(this), !0),
                this.tr.onVisibilityChanged(function () {
                  t.tr.isVisible() && t.VE();
                });
            }),
            (r.isAutoAdvance = function () {
              return !1;
            }),
            (r.UE = function (t) {
              var i = this;
              !this.jE &&
                this.GE(t) &&
                ((this.jE = Date.now()),
                (this.CE = this.eA.get(Wi.PAUSED_STATE)),
                this.eA.dispatch(Xi, !0),
                (this.RE = this.je.delay(function () {
                  i.eA.dispatch(qi, !1);
                }, 500)));
            }),
            (r.YE = function (t) {
              var i = (t.touches || []).length;
              !this.jE ||
                i > 0 ||
                (Date.now() - this.jE > 500 && t.preventDefault(), this.VE());
            }),
            (r.VE = function () {
              this.jE &&
                (this.eA.dispatch(Xi, this.CE),
                (this.jE = null),
                this.je.cancel(this.RE),
                (this.RE = null),
                this.eA.get(Wi.SYSTEM_UI_IS_VISIBLE_STATE) ||
                  this.eA.dispatch(qi, !0));
            }),
            (r.BE = function (t) {
              return !D(
                t.target,
                function (t) {
                  return (function (t) {
                    return (
                      t.hasAttribute("on") &&
                      !!t.getAttribute("on").match(/(^|;)\s*tap\s*:/)
                    );
                  })(t);
                },
                this.Gn
              );
            }),
            (r.FE = function (t) {
              return !!D(
                t.target,
                function (t) {
                  var i = t.getAttribute("role");
                  return !!i && !!lo[i.toLowerCase()];
                },
                this.Gn
              );
            }),
            (r.GE = function (t) {
              var i,
                n = this,
                r = !1;
              return (
                D(
                  t.target,
                  function (o) {
                    return (
                      (i = o.tagName.toLowerCase()),
                      o.classList.contains("amp-story-draggable-drawer-root")
                        ? ((r = !1), !0)
                        : !i.startsWith("amp-story-interactive-") ||
                          (n.WE(t, n.XE()) &&
                            !t.path[0].classList.contains(
                              "i-amphtml-story-interactive-disclaimer-icon"
                            ))
                        ? o.classList.contains(
                            "i-amphtml-story-interactive-disclaimer-dialog-container"
                          )
                          ? ((r = !1), !0)
                          : ("amp-story-page" === i ||
                              "amp-story-subscriptions" === i) &&
                            ((r = !0), !0)
                        : ((r = !1), !0)
                    );
                  },
                  this.Gn
                ),
                r
              );
            }),
            (r.qE = function (t, i) {
              var n,
                r = !0,
                o = t.target,
                a = !!D(
                  o,
                  function (t) {
                    return "amp-story-page-attachment" ===
                      (n = t.tagName.toLowerCase()) ||
                      "amp-story-page-outlink" === n
                      ? ((r = !1), !1)
                      : "amp-story-page" === n && r;
                  },
                  this.Gn
                );
              return a && (this.WE(t, i) || this.ZE(t, i))
                ? (t.preventDefault(), !1)
                : "auto" === o.getAttribute("show-tooltip") && this.$E(o, i)
                ? (o.setAttribute("target", "_blank"),
                  o.setAttribute("role", "link"),
                  !1)
                : a;
            }),
            (r.$E = function (t, i) {
              return t.getBoundingClientRect().top - i.top >= 0.8 * i.height;
            }),
            (r.WE = function (t, i) {
              if (0 === t.clientX && 0 === t.clientY) return !1;
              var n = 0.12 * i.width,
                r = Math.max(n, 48);
              return t.clientX <= i.x + r || t.clientX >= i.x + i.width - r;
            }),
            (r.ZE = function (t, i) {
              if (0 === t.clientX && 0 === t.clientY) return !1;
              var n = t.target.getBoundingClientRect();
              return (
                (n.height * n.width) / (i.width * i.height) >= 0.8 &&
                (Wt().error(
                  "AMP-STORY-PAGE",
                  "Link was too large; skipped for navigation. For more information, see https://github.com/ampproject/amphtml/issues/31108"
                ),
                !0)
              );
            }),
            (r.KE = function (t, i) {
              return C(t.target, tr()) && this.qE(t, i);
            }),
            (r.HE = function (t) {
              var i = t.target,
                n = this.XE();
              if (this.KE(t, n)) {
                t.stopPropagation(), t.preventDefault();
                var r = this.eA.get(Wi.INTERACTIVE_COMPONENT_STATE);
                this.eA.dispatch(18, {
                  element: i,
                  state: r.state || 1,
                  clientX: t.clientX,
                  clientY: t.clientY,
                });
              } else if (
                this.isRunning() &&
                this.BE(t) &&
                !this.FE(t) &&
                this.GE(t)
              ) {
                t.stopPropagation(), this.eA.dispatch(7, gn);
                var o = {
                  offset: "x" in n ? n.x : n.left,
                  width: n.width,
                  clickEventX: t.pageX,
                };
                this.onTapNavigation(this.JE(o));
              }
            }),
            (r.XE = function () {
              return 4 !== this.eA.get(Wi.UI_STATE)
                ? this.Gn.getLayoutBox()
                : this.Gn.querySelector(
                    "amp-story-page[active]"
                  ).getBoundingClientRect();
            }),
            (r.JE = function (t) {
              var i = this.LE,
                n = i.left,
                r = i.right;
              return t.clickEventX <= t.offset + n.widthRatio * t.width
                ? n.direction
                : r.direction;
            }),
            (n.fromElement = function (t, i) {
              return "amp-story" !== i.tagName.toLowerCase()
                ? null
                : new n(t, i);
            }),
            n
          );
        })(fo),
        yo = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t, n, r) {
            var o;
            return (
              ((o = i.call(this)).je = Pi(t)),
              n < 500 &&
                (Wt().warn(
                  "AMP-STORY-PAGE",
                  "".concat(
                    r.id,
                    " has an auto advance duration that is too short. "
                  ) + "".concat(500, "ms is used instead.")
                ),
                (n = 500)),
              (o.QE = n),
              (o.tP = null),
              (o.iP = null),
              (o.RE = null),
              r.ownerDocument.defaultView &&
                (o.eA = Gi(r.ownerDocument.defaultView)),
              o
            );
          }
          var r = n.prototype;
          return (
            (r.getType = function () {
              return 2;
            }),
            (r.nP = function () {
              return Date.now();
            }),
            (r.start = function () {
              var i = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
              if ((t.prototype.start.call(this), n)) {
                var r = 1 - n;
                this.tP = this.QE * r;
              }
              this.tP
                ? (this.iP = this.nP() - (this.QE - this.tP))
                : (this.iP = this.nP()),
                (this.RE = this.je.delay(function () {
                  return i.onAdvance();
                }, this.tP || this.QE)),
                this.onProgressUpdate(),
                this.je.poll(co, function () {
                  return i.onProgressUpdate(), !i.isRunning();
                });
            }),
            (r.stop = function () {
              var i =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              t.prototype.stop.call(this),
                null !== this.RE && this.je.cancel(this.RE),
                (this.tP = i ? this.iP + this.QE - this.nP() : null);
            }),
            (r.isAutoAdvance = function () {
              return !0;
            }),
            (r.getProgress = function () {
              if (null === this.iP) return 0;
              var t = this.getProgressMs() / this.QE;
              return Math.min(Math.max(t, 0), 1);
            }),
            (r.onAdvance = function () {
              this.eA.dispatch(7, "autoAdvanceTime"),
                t.prototype.onAdvance.call(this);
            }),
            (r.updateTimeDelay = function (t) {
              var i = Ln(t);
              void 0 === i ||
                isNaN(i) ||
                (this.tP && (this.tP += i - this.QE), (this.QE = i));
            }),
            (r.getProgressMs = function () {
              return null === this.iP ? 0 : this.nP() - this.iP;
            }),
            (r.getDelayMs = function () {
              return this.QE;
            }),
            (n.fromAutoAdvanceString = function (t, i, r) {
              if (!t) return null;
              var o = Ln(t);
              return void 0 === o || isNaN(o) ? null : new n(i, Number(o), r);
            }),
            n
          );
        })(fo),
        go = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t, n) {
            var r;
            return (
              ((r = i.call(this)).je = Pi(t)),
              (r.Gn = n),
              (r.rP = null),
              (r.oP = []),
              (r.aP = null),
              (r.sP = null),
              (r.Cj = null),
              (r.eA = Gi(t)),
              r
            );
          }
          var r = n.prototype;
          return (
            (r.getType = function () {
              return 3;
            }),
            (r.eP = function () {
              return this.Gn.classList.contains("i-amphtml-video-interface");
            }),
            (r.uP = function () {
              var t = this.Gn.tagName.toLowerCase();
              return this.Gn instanceof HTMLMediaElement
                ? this.Gn
                : this.Gn.hasAttribute("background-audio") &&
                  "amp-story-page" === t
                ? this.Gn.querySelector(".i-amphtml-story-background-audio")
                : "amp-audio" === t
                ? this.Gn.querySelector("audio")
                : null;
            }),
            (r.start = function () {
              var i = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
              t.prototype.start.call(this),
                (this.Gn.build ? this.Gn.build() : a()).then(function () {
                  return i.hP(n);
                });
            }),
            (r.hP = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : void 0;
              this.eP()
                ? this.cP(t)
                : (this.rP || (this.rP = this.uP()),
                  this.rP
                    ? this.lP(t)
                    : Wt().error(
                        "AMP-STORY-PAGE",
                        "Element with ID ".concat(
                          this.Gn.id,
                          " is not a media element "
                        ) + "supported for automatic advancement."
                      ));
            }),
            (r.lP = function () {
              var t = this,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0,
                n = this.rP;
              this.rP.removeAttribute("loop"),
                this.oP.push(
                  Ui(n, "ended", function () {
                    return t.onAdvance();
                  })
                ),
                this.onProgressUpdate(i),
                this.je.poll(co, function () {
                  return t.onProgressUpdate(), !t.isRunning();
                });
            }),
            (r.cP = function () {
              var t = this,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
              this.Gn.getImpl().then(function (i) {
                t.Cj = i;
              }),
                this.Gn.querySelector("video").removeAttribute("loop"),
                this.oP.push(
                  Ui(
                    this.Gn,
                    io,
                    function () {
                      return t.onAdvance();
                    },
                    { capture: !0 }
                  )
                ),
                this.onProgressUpdate(i),
                this.je.poll(co, function () {
                  return t.onProgressUpdate(), !t.isRunning();
                });
            }),
            (r.stop = function () {
              t.prototype.stop.call(this),
                this.oP.forEach(function (t) {
                  return t();
                });
            }),
            (r.isAutoAdvance = function () {
              return !0;
            }),
            (r.getProgress = function () {
              return this.eP()
                ? this.Cj && this.Cj.getDuration()
                  ? this.Cj.getCurrentTime() / this.Cj.getDuration()
                  : 0
                : this.rP && this.rP.duration
                ? this.rP.currentTime / this.rP.duration
                : t.prototype.getProgress.call(this);
            }),
            (r.onAdvance = function () {
              this.eA.dispatch(7, "autoAdvanceMedia"),
                t.prototype.onAdvance.call(this);
            }),
            (n.fromAutoAdvanceString = function (t, i, r) {
              try {
                var o = r.querySelector(
                  "amp-video[data-id="
                    .concat(O(t), "], amp-video#")
                    .concat(O(t), ", amp-audio[data-id=")
                    .concat(O(t), "], amp-audio#")
                    .concat(O(t))
                );
                return (
                  C(r, "amp-story-page[background-audio]#".concat(O(t))) &&
                    (o = r),
                  o
                    ? new n(i, o)
                    : (t &&
                        Wt().warn(
                          "AMP-STORY-PAGE",
                          "Element with ID ".concat(
                            r.id,
                            " has no media element "
                          ) + "supported for automatic advancement."
                        ),
                      null)
                );
              } catch (t) {
                return null;
              }
            }),
            n
          );
        })(fo);
      function bo(t) {
        return (t = t.trim()).startsWith("WEBVTT")
          ? (function (t) {
              var i = /^\d\d\:\d\d/,
                n = !1;
              t = t
                .split(/[\n\r]+/)
                .filter(function (t) {
                  var r = i.test(t);
                  return !(!(n = n || r) || r || /^NOTE\s+/.test(t));
                })
                .map(function (t) {
                  return t.replace(/^- /, "");
                })
                .join(" ");
              var r = Dt("template", null);
              if (self.trustedTypes && self.trustedTypes.createPolicy) {
                var o = self.trustedTypes.createPolicy(
                  "semantic-render#extractTextContentWebVtt",
                  {
                    createHTML: function (i) {
                      return t;
                    },
                  }
                );
                r.innerHTML = o.createHTML("ignored");
              } else r.innerHTML = t;
              return r.content.textContent;
            })(t)
          : ("number" != typeof n && (n = 0),
            n + "http://www.w3.org/ns/ttml".length > (i = t).length ||
            -1 === i.indexOf("http://www.w3.org/ns/ttml", n)
              ? ""
              : (function (t) {
                  try {
                    return new DOMParser()
                      .parseFromString(t, "text/xml")
                      .querySelector("body")
                      .textContent.replace(/[\s\n\r]+/g, " ")
                      .trim();
                  } catch (t) {
                    qt().error("TTML", t.message);
                  }
                  return "";
                })(t));
        var i, n;
      }
      var xo = "a, amp-twitter > iframe",
        wo = "amp-story-page",
        ko = "next",
        Ao = "previous",
        To = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            var n, r, o, a;
            ((n = i.call(this, t)).ls = _i(n.element)),
              (n.mP = null),
              (n.fP = null),
              (n.pP = Ut(
                n.win,
                function (t) {
                  return n.dP(!!t);
                },
                100
              )),
              (n.vP =
                ((r = !1),
                (o = null),
                (a = function () {
                  return n.yP();
                }),
                function () {
                  if (!r) {
                    for (
                      var t = arguments.length, i = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      i[n] = arguments[n];
                    (o = a.apply(self, i)), (r = !0), (a = null);
                  }
                  return o;
                })),
              (n.gP = null),
              (n.bP = null);
            var s,
              h,
              u = new e();
            return (
              (n.xP = C(n.element, "amp-story-page:first-of-type")),
              (n.wP =
                ((s = n.win),
                (h = (function (t) {
                  return Qt(t, "media-performance-metrics");
                })(s)) ||
                  ((h = new jr(s)),
                  Kt(s, "media-performance-metrics", function () {
                    return h;
                  })),
                h)),
              (n.kP = []),
              (n.AP = null),
              (n.TP = u.promise),
              (n.SP = u.resolve),
              (n.EP = u.reject),
              (n.zi = 0),
              (n.eA = Gi(n.win)),
              (n.jw = []),
              (n.PP = new e()),
              (n.OP = zi(n.win).isBot()),
              (n._P = null),
              (n.MP = n.element.getAttribute("auto-advance-after")),
              (n.J = n.getAmpDoc().getVisibilityState()),
              n.getAmpDoc().onVisibilityChanged(function () {
                return n._f();
              }),
              n
            );
          }
          (n.prerenderAllowed = function (t) {
            return yt(t);
          }),
            (n.previewAllowed = function () {
              return !0;
            });
          var o = n.prototype;
          return (
            (o.IP = function () {
              this.mP ||
                (R(
                  this.element,
                  "".concat(Er, ",>amp-story-animation,amp-bodymovin-animation")
                ) &&
                  (this.mP = Or.create(
                    this.element,
                    this.getAmpDoc(),
                    this.getAmpDoc().getUrl()
                  )));
            }),
            (o.zP = function () {
              var t = this.element.querySelector("amp-story-cta-layer");
              if (t) {
                var i = t.querySelectorAll("a");
                1 === i.length &&
                  i[0].getAttribute("href") &&
                  (St(t),
                  this.element.appendChild(
                    Dt(
                      "amp-story-page-outlink",
                      { layout: "nodisplay" },
                      Dt(
                        "a",
                        { href: i[0].getAttribute("href") },
                        i[0].textContent
                      )
                    )
                  ));
              }
            }),
            (o.buildCallback = function () {
              var t = this;
              this.delegateVideoAutoplay(),
                this.NP(),
                this.sE(),
                this.IP(),
                this.RP(),
                this.jP(),
                this.eA.subscribe(
                  Wi.UI_STATE,
                  function (i) {
                    return t.RA(i);
                  },
                  !0
                ),
                this.CP(),
                this.element.setAttribute("role", "region"),
                this.DP(),
                this.LP(),
                this.maybeApplyFirstAnimationFrameOrFinish(),
                this.zP();
            }),
            (o._f = function () {
              var t = this.getAmpDoc(),
                i = this.J === kt && t.isVisible();
              (this.J = t.getVisibilityState()),
                (t.isPreview() || t.isVisible()) && this.RP(i);
            }),
            (o.RP = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.getAmpDoc().isPreview()
                ? (this.UP(), this.YP())
                : this.getAmpDoc().isVisible() &&
                  (this.HP(),
                  this.VP(),
                  this.isActive() && t ? this.GP() : this.YP());
            }),
            (o.UP = function () {
              var t = this,
                i = this.BP(),
                n = this.FP();
              if (n) {
                var r = this.WP();
                r > 0 && (i = Math.min(r, i)),
                  this.element.setAttribute("auto-advance-after", i + "s"),
                  It(n)
                    .then(function () {
                      return n.getImpl();
                    })
                    .then(function (r) {
                      t.loadPromise(n).then(function () {
                        var t = r.getDuration() < i,
                          o = n.querySelector("video");
                        o.loop || (o.loop = t);
                      });
                    });
              } else this.element.setAttribute("auto-advance-after", i + "s");
            }),
            (o.BP = function () {
              var t = this.ls.getParam("previewSecondsPerPage"),
                i = parseInt(t, 10);
              return isNaN(i) || i <= 0 ? 5 : i;
            }),
            (o.WP = function () {
              var t = this.getAmpDoc().getMetaByName("robots"),
                i = null == t ? void 0 : t.match(/max-video-preview[^,]*/)[0];
              return parseInt(null == i ? void 0 : i.split(":")[1], 10);
            }),
            (o.HP = function () {
              this.MP
                ? this.element.setAttribute("auto-advance-after", this.MP)
                : this.element.removeAttribute("auto-advance-after");
            }),
            (o.GP = function () {
              var t;
              A(
                2 ===
                  (null === (t = this.fP) || void 0 === t
                    ? void 0
                    : t.getType())
              );
              var i = this.fP.getProgress(),
                n = this.fP.getProgressMs();
              switch ((this.YP(), this.fP.getType())) {
                case 0:
                  this.XP(1), this.fP.start();
                  break;
                case 3:
                  this.fP.start(i);
                  break;
                case 2:
                  this.fP.start(n / this.fP.getDelayMs());
              }
            }),
            (o.YP = function () {
              var t,
                i = this;
              null === (t = this.fP) ||
                void 0 === t ||
                t.removeAllAddedListeners(),
                (this.fP = fo.forElement(this.win, this.element)),
                this.fP.addPreviousListener(function () {
                  return i.previous();
                }),
                this.fP.addAdvanceListener(function () {
                  return i.next(!0);
                }),
                this.fP.addProgressListener(function (t) {
                  return i.XP(t);
                });
            }),
            (o.VP = function () {
              var t = this.element.getAttribute("auto-advance-after"),
                i = _i(this.element).getParam("storyNextUp");
              null === t &&
                null !== i &&
                (this.element.setAttribute("auto-advance-after", i), this.qP());
            }),
            (o.qP = function () {
              var t = this,
                i = this.FP();
              null !== i &&
                It(i)
                  .then(function () {
                    return i.getImpl();
                  })
                  .then(function (n) {
                    var r = n.getDuration();
                    isNaN(r)
                      ? Ui(i, "loadedmetadata", function () {
                          t.ZP(n.getDuration());
                        })
                      : t.ZP(r);
                  });
            }),
            (o.ZP = function (t) {
              t < 2 ||
                !this.fP ||
                !this.fP.updateTimeDelay ||
                (this.fP.updateTimeDelay(t + "s"),
                this.element.setAttribute("auto-advance-after", t + "s"));
            }),
            (o.FP = function () {
              var t = this.$P();
              return 0 === t.length ? null : t[0];
            }),
            (o.delegateVideoAutoplay = function () {
              this.element.querySelectorAll("amp-video").forEach(no);
            }),
            (o.sE = function () {
              var t = this,
                i = L(this.element, "amp-story");
              It(i)
                .then(function () {
                  return i.getImpl();
                })
                .then(
                  function (i) {
                    return t.SP(mo.for(i));
                  },
                  function (i) {
                    return t.EP(i);
                  }
                );
            }),
            (o.NP = function () {
              this.element
                .querySelectorAll("amp-audio, amp-video")
                .forEach(function (t) {
                  t.setAttribute("preload", "auto");
                });
            }),
            (o.isLayoutSupported = function (t) {
              return t == mt;
            }),
            (o.setState = function (t) {
              var i;
              switch (t) {
                case 0:
                  this.element.removeAttribute("active"),
                    this.cj(),
                    (this.zi = t);
                  break;
                case 1:
                  var n;
                  0 === this.zi &&
                    (this.element.setAttribute("active", ""), this.KP()),
                    2 === this.zi &&
                      (this.fP.start(),
                      this.JP(),
                      null === (n = this.mP) || void 0 === n || n.resumeAll()),
                    (this.zi = t);
                  break;
                case 2:
                  this.fP.stop(!0),
                    this.QP(!1),
                    null === (i = this.mP) || void 0 === i || i.pauseAll(),
                    (this.zi = t);
                  break;
                default:
                  qt().warn(wo, "PageState ".concat(t, " does not exist"));
              }
            }),
            (o.cj = function () {
              var t;
              this.fP.stop(!1),
                this._O(),
                this.YO(),
                this.HO(!1),
                this.VO(!1),
                (this._P = null),
                this.QP(!0),
                this.eA.get(Wi.MUTED_STATE) || this.muteAllMedia(),
                null === (t = this.mP) || void 0 === t || t.cancelAll();
            }),
            (o.KP = function () {
              var t = this,
                i = this.GO();
              this.isActive() &&
                (i
                  .then(function () {
                    0 !== t.zi &&
                      (t
                        .signals()
                        .whenSignal(wt)
                        .then(function () {
                          1 == t.zi && t.fP.start();
                        }),
                      t.XO().then(function () {
                        0 !== t.zi &&
                          (t.ZO(),
                          t.$O(),
                          t.JP().then(function () {
                            t.eA.get(Wi.MUTED_STATE) ||
                              0 === t.zi ||
                              t.unmuteAllMedia();
                          }),
                          t.KO(t.eA.get(Wi.CAPTIONS_STATE)));
                      }));
                  })
                  .then(function () {
                    if (t.getAmpDoc().isPreview())
                      return t.QO().then(function () {
                        return t.i_();
                      });
                  }),
                this.o_(),
                this.a_(),
                this.s_(),
                this.e_(),
                this.u_());
            }),
            (o.i_ = function () {
              var t = this,
                i = this.h_().filter(function (t) {
                  return t.readyState < 2;
                });
              return this.TP.then(function (n) {
                var r = i.map(function (i) {
                  return t.c_(n, i).then(function () {
                    return t.HO(!1), t.l_(n, i);
                  });
                });
                return Promise.all(r);
              });
            }),
            (o.layoutCallback = function () {
              var t = this,
                i =
                  this.element.getAttribute("id") !==
                  this.element.getAttribute("auto-advance-after");
              return (
                Rr(this.element, i),
                this.PP.resolve(),
                this.muteAllMedia(),
                this.m_(),
                this.f_(),
                Promise.all([
                  this.p_().then(function () {
                    return t.d_();
                  }),
                  this.TP,
                ])
              );
            }),
            (o.onLayoutMeasure = function () {
              var t = this.getLayoutSize(),
                i = t.height,
                n = t.width;
              this.xP &&
                0 !== i &&
                0 !== n &&
                this.eA.dispatch(12, { height: i, width: n });
            }),
            (o.RA = function (t) {
              3 === t && this.v_();
            }),
            (o.p_ = function () {
              var t = v(
                this.y_(
                  "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-grid-layer amp-img, amp-story-grid-layer amp-anim"
                )
              ).map(function (t) {
                return new Promise(function (i) {
                  switch (t.tagName.toLowerCase()) {
                    case "amp-anim":
                    case "amp-img":
                    case "amp-story-360":
                      if (t.hasAttribute("fallback")) return void i();
                      It(t)
                        .then(function (t) {
                          return t.signals().whenSignal(wt);
                        })
                        .then(i, i);
                      break;
                    case "amp-audio":
                    case "amp-video":
                      var n = t.querySelector("audio, video");
                      if (n && n.readyState >= 2) return void i();
                      t.addEventListener("canplay", i, !0);
                      break;
                    default:
                      i();
                  }
                  t.addEventListener("error", i, !0);
                });
              });
              return Promise.all(t);
            }),
            (o.g_ = function () {
              return this.b_(!0);
            }),
            (o.QO = function () {
              return this.b_(!1);
            }),
            (o.b_ = function (t) {
              var i = v(
                this.y_(
                  "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video"
                )
              ).map(function (i) {
                return new Promise(function (n) {
                  switch (i.tagName.toLowerCase()) {
                    case "amp-audio":
                    case "amp-video":
                      var r = t ? "load-start" : wt,
                        o = i.getAttribute("layout") === ut ? "built" : r;
                      It(i)
                        .then(function (t) {
                          return t.signals().whenSignal(o);
                        })
                        .then(n, n);
                      break;
                    default:
                      n();
                  }
                });
              });
              return (
                this.element.hasAttribute("background-audio") &&
                  i.push(this.PP.promise),
                Promise.all(i)
              );
            }),
            (o.x_ = function () {
              var t = this.$P().map(function (t) {
                return It(t).then(function (t) {
                  return t.whenBuilt();
                });
              });
              return Promise.all(t);
            }),
            (o.u_ = function () {
              this.w_();
            }),
            (o.w_ = function () {
              var t = v(j(this.element, Object.keys(Jn).join(",")));
              t.length <= 0 ||
                this.mutateElement(function () {
                  t.forEach(function (t) {
                    t.classList.add("i-amphtml-embedded-component");
                  });
                });
            }),
            (o.d_ = function () {
              var t = this;
              an(this.win, this.element, "ampstory:pageload", void 0, {
                bubbles: !0,
              }),
                this.mutateElement(function () {
                  t.element.classList.add("i-amphtml-story-page-loaded");
                });
            }),
            (o.k_ = function () {
              return this.y_(
                "> audio, amp-story-grid-layer audio, amp-story-grid-layer video"
              );
            }),
            (o.h_ = function () {
              return this.y_("amp-story-grid-layer video");
            }),
            (o.$P = function () {
              return this.y_("amp-story-grid-layer amp-video");
            }),
            (o.y_ = function (t) {
              var i = this.element.querySelector("iframe"),
                n =
                  i &&
                  (function (t) {
                    return t.__AMP_EMBED__;
                  })(i),
                r = [];
              return (
                j(this.element, t).forEach(function (t) {
                  return r.push(t);
                }),
                n &&
                  j(
                    n.win.document.body,
                    t.replace(/amp-story-grid-layer/g, "")
                  ).forEach(function (t) {
                    return r.push(t);
                  }),
                r
              );
            }),
            (o.A_ = function () {
              return (
                null == (t = this.win).__AMP_AUTOPLAY &&
                  (t.__AMP_AUTOPLAY = (function (t) {
                    var i,
                      n = t.document.createElement("video");
                    return (
                      n.setAttribute("muted", ""),
                      n.setAttribute("playsinline", ""),
                      n.setAttribute("webkit-playsinline", ""),
                      n.setAttribute("height", "0"),
                      n.setAttribute("width", "0"),
                      (n.muted = !0),
                      (n.playsInline = !0),
                      (n.playsinline = !0),
                      (n.webkitPlaysinline = !0),
                      J(n, {
                        position: "fixed",
                        top: "0",
                        width: "0",
                        height: "0",
                        opacity: "0",
                      }),
                      (i = n),
                      s(function () {
                        return i.play();
                      }).catch(function () {}),
                      Promise.resolve(!n.paused)
                    );
                  })(t)),
                t.__AMP_AUTOPLAY
              );
              var t;
            }),
            (o.T_ = function (t) {
              var i = v(this.k_());
              return this.TP.then(function (n) {
                var r = i.map(function (i) {
                  return t(n, i);
                });
                return Promise.all(r);
              });
            }),
            (o.QP = function () {
              var t = this,
                i =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return this.T_(function (n, r) {
                return t.S_(n, r, i);
              });
            }),
            (o.S_ = function (t, i, n) {
              return this.OP ? (i.pause(), a()) : t.pause(i, n);
            }),
            (o.JP = function () {
              var t = this;
              return this.T_(function (i, n) {
                return t.l_(i, n);
              });
            }),
            (o.l_ = function (t, i) {
              var n = this;
              return this.OP
                ? (Lt(i), a())
                : this.loadPromise(i).then(
                    function () {
                      return t.play(i).catch(function (t) {
                        "VIDEO" === i.tagName &&
                          (n.pP(!1),
                          n.A_().then(function (t) {
                            t ? n.HO(!0) : (n._O(!1), n.VO(!0));
                          })),
                          "AUDIO" === i.tagName && (n._P = Date.now());
                      });
                    },
                    function () {
                      n.pP(!1), n.HO(!0);
                    }
                  );
            }),
            (o.XO = function () {
              var t = this;
              return this.T_(function (i, n) {
                return t.E_(i, n);
              });
            }),
            (o.E_ = function (t, i) {
              return this.OP ? a() : t.preload(i);
            }),
            (o.muteAllMedia = function () {
              var t = this;
              return this.T_(function (i, n) {
                t.P_(i, n);
              });
            }),
            (o.P_ = function (t, i) {
              return this.OP
                ? ((i.muted = !0), i.setAttribute("muted", ""), a())
                : t.mute(i);
            }),
            (o.unmuteAllMedia = function () {
              var t = this;
              return this.T_(function (i, n) {
                t.O_(i, n);
              });
            }),
            (o.O_ = function (t, i) {
              if (this.OP)
                return (
                  (i.muted = !1),
                  i.removeAttribute("muted"),
                  "AUDIO" === i.tagName && i.paused && Lt(i),
                  a()
                );
              i = i;
              var n = [t.unmute(i)];
              if ("AUDIO" === i.tagName && i.paused && this._P) {
                var r = (Date.now() - this._P) / 1e3;
                (i.hasAttribute("loop") || r < i.duration) &&
                  (n.push(t.setCurrentTime(i, r % i.duration)),
                  n.push(t.play(i))),
                  (this._P = null);
              }
              return Promise.all(n);
            }),
            (o.GO = function () {
              var t = this;
              if (!this.AP) {
                var i = this.getAmpDoc().isPreview() ? this.g_() : this.QO();
                this.AP = i.then(function () {
                  return t.T_(function (i, n) {
                    return t.__(i, n);
                  });
                });
              }
              return this.AP;
            }),
            (o.__ = function (t, i) {
              return this.OP ? a() : t.register(i);
            }),
            (o.c_ = function (t, i) {
              return this.OP ? a() : t.reregister(i);
            }),
            (o.o_ = function () {
              this.mP && this.mP.animateIn();
            }),
            (o.v_ = function () {
              var t = this;
              this.mP &&
                this.signals()
                  .whenSignal(wt)
                  .then(function () {
                    return t.mP.applyLastFrame();
                  });
            }),
            (o.maybeApplyFirstAnimationFrameOrFinish = function () {
              var t;
              return Promise.resolve(
                null === (t = this.mP) || void 0 === t
                  ? void 0
                  : t.applyFirstFrameOrFinish()
              );
            }),
            (o.getDistance = function () {
              return parseInt(this.element.getAttribute("distance"), 10);
            }),
            (o.setDistance = function (t) {
              var i = this;
              if (
                (this.isAd() && (t = Math.min(t, 2)), t != this.getDistance())
              ) {
                this.element.setAttribute("distance", t),
                  this.element.setAttribute("aria-hidden", 0 != t);
                var n = this.GO();
                t > 0 &&
                  t <= 2 &&
                  (this.u_(),
                  n.then(function () {
                    return i.XO();
                  })),
                  this.M_(0 == t);
              }
            }),
            (o.isActive = function () {
              return this.element.hasAttribute("active");
            }),
            (o.XP = function (t) {
              var i = ci(this.win, fi);
              if (((i && i != di) || !this.isAd()) && 0 !== this.zi) {
                var n = { pageId: this.element.id, progress: t };
                an(this.win, this.element, tn, n, { bubbles: !0 });
              }
            }),
            (o.getAdjacentPageIds = function () {
              var t = li(this.win, "amp-story-branching") ? this.Ay() : [],
                i = this.getNextPageId(!0),
                n = this.getNextPageId(!1),
                r = this.getPreviousPageId();
              return (
                i && t.push(i), n && n != i && t.push(n), r && t.push(r), t
              );
            }),
            (o.getPreviousPageId = function () {
              if (this.element.hasAttribute("i-amphtml-return-to"))
                return this.element.getAttribute("i-amphtml-return-to");
              var t = this.eA.get(Wi.NAVIGATION_PATH),
                i = t.lastIndexOf(this.element.id),
                n = t[i - 1];
              if (n) return n;
              var r = this.element.previousElementSibling;
              return r && r.tagName.toLowerCase() === wo ? r.id : null;
            }),
            (o.getNextPageId = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (t && this.element.hasAttribute("auto-advance-to"))
                return this.element.getAttribute("auto-advance-to");
              var i = li(this.win, "amp-story-branching")
                ? "advance-to"
                : "i-amphtml-advance-to";
              if (this.element.hasAttribute(i))
                return this.element.getAttribute(i);
              var n = this.element.nextElementSibling;
              return n && n.tagName.toLowerCase() === wo ? n.id : null;
            }),
            (o.Ay = function () {
              return Array.prototype.slice
                .call(this.element.querySelectorAll("[on*=goToPage]"))
                .map(function (t) {
                  return t.getAttribute("on");
                })
                .reduce(function (t, i) {
                  return (
                    i.split(/[;,]+/).forEach(function (i) {
                      i.indexOf("goToPage") >= 0 &&
                        t.push(i.slice(i.search("=(.*)") + 1, -1));
                    }),
                    t
                  );
                }, []);
            }),
            (o.previous = function () {
              var t = this.getPreviousPageId();
              null !== t
                ? (this.eA.dispatch(Xi, !1), this.I_(t, Ao))
                : an(this.win, this.element, on, void 0, { bubbles: !0 });
            }),
            (o.next = function () {
              var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                i = this.getNextPageId(t);
              i
                ? (this.eA.dispatch(Xi, !1), this.I_(i, ko))
                : an(this.win, this.element, rn, void 0, { bubbles: !0 });
            }),
            (o.I_ = function (t, i) {
              var n = { targetPageId: t, direction: i };
              an(this.win, this.element, Ki, n, { bubbles: !0 });
            }),
            (o.a_ = function () {
              var t = this;
              (this.element.hasAttribute("background-audio") ||
              this.element.querySelector("amp-audio")
                ? Promise.resolve(!0)
                : this.z_()
              ).then(function (i) {
                return t.eA.dispatch(22, i);
              });
            }),
            (o.z_ = function () {
              var t = this;
              return this.x_().then(function () {
                return Array.prototype.some.call(t.$P(), function (t) {
                  return (
                    !t.hasAttribute("noaudio") &&
                    0 !== parseFloat(t.getAttribute("volume"))
                  );
                });
              });
            }),
            (o.N_ = function () {
              var t = this;
              return this.x_().then(function () {
                return Array.prototype.some.call(t.$P(), function (t) {
                  return t.querySelector("track");
                });
              });
            }),
            (o.e_ = function () {
              var t =
                this.isAutoAdvance() ||
                this.element.hasAttribute("background-audio") ||
                this.k_().length > 0;
              this.eA.dispatch(25, t);
            }),
            (o.s_ = function () {
              var t = this;
              this.N_().then(function (i) {
                t.eA.dispatch(23, i);
              });
            }),
            (o.ZO = function () {
              if (this.wP.isPerformanceTrackingOn())
                for (var t = this.h_(), i = 0; i < t.length; i++) this.R_(t[i]);
            }),
            (o.R_ = function (t) {
              this.wP.isPerformanceTrackingOn() &&
                (this.kP.push(t), this.wP.startMeasuring(t));
            }),
            (o._O = function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              if (this.wP.isPerformanceTrackingOn())
                for (var i = 0; i < this.kP.length; i++)
                  this.wP.stopMeasuring(this.kP[i], t);
            }),
            (o.$O = function () {
              var t = this,
                i = this.h_();
              i.length &&
                (i.some(function (t) {
                  return 0 != t.currentTime;
                }) ||
                  this.pP(!0)),
                i.forEach(function (i) {
                  t.jw.push(
                    Di(i, "playing", function () {
                      return t.pP(!1);
                    })
                  ),
                    t.jw.push(
                      Di(i, "waiting", function () {
                        return t.pP(!0);
                      })
                    );
                });
            }),
            (o.YO = function () {
              this.pP(!1),
                this.jw.forEach(function (t) {
                  return t();
                }),
                (this.jw = []);
            }),
            (o.yP = function () {
              var t = Dt(
                "div",
                { class: "i-amphtml-story-spinner", "aria-hidden": "true" },
                Dt(
                  "div",
                  { class: "i-amphtml-story-spinner-container" },
                  Dt(
                    "div",
                    { class: "i-amphtml-story-spinner-layer" },
                    Dt("div", {
                      class: "i-amphtml-story-spinner-circle-clipper left",
                    }),
                    Dt("div", {
                      class: "i-amphtml-story-spinner-circle-clipper right",
                    })
                  )
                )
              );
              return (
                t.setAttribute("aria-label", "Loading video"),
                this.element.appendChild(t)
              );
            }),
            (o.dP = function (t) {
              var i = this;
              this.mutateElement(function () {
                !(function (t, i) {
                  i !== t.hasAttribute("active") &&
                    (t.setAttribute("aria-hidden", String(!i)),
                    i
                      ? t.setAttribute("active", "")
                      : t.removeAttribute("active"));
                })(i.vP(), t);
              });
            }),
            (o.j_ = function () {
              var t = this;
              (this.gP = Dt(
                "button",
                {
                  role: "button",
                  class:
                    "i-amphtml-story-page-play-button i-amphtml-story-system-reset",
                  onClick: function () {
                    t.VO(!1),
                      t.ZO(),
                      t.TP.then(function (t) {
                        return t.blessAll();
                      }).then(function () {
                        return t.JP();
                      });
                  },
                },
                Dt("span", {
                  class: "i-amphtml-story-page-play-label",
                  "i-amphtml-i18n-text-content": "34",
                }),
                Dt("span", { class: "i-amphtml-story-page-play-icon" })
              )),
                ur(this.gP, this.element).then(function () {
                  return t.mutateElement(function () {
                    return t.element.appendChild(t.gP);
                  });
                });
            }),
            (o.VO = function (t) {
              var i = this;
              t
                ? (this.gP || this.j_(),
                  this.mutateElement(function () {
                    return Q(i.gP, !0);
                  }))
                : this.gP &&
                  this.mutateElement(function () {
                    return Q(i.gP, !1);
                  });
            }),
            (o.C_ = function () {
              var t = this;
              (this.bP = Dt(
                "div",
                {
                  class:
                    "i-amphtml-story-page-error i-amphtml-story-system-reset",
                },
                Dt("span", {
                  class: "i-amphtml-story-page-error-label",
                  "i-amphtml-i18n-text-content": "65",
                }),
                Dt("span", { class: "i-amphtml-story-page-error-icon" })
              )),
                ur(this.bP, this.element).then(function () {
                  return t.mutateElement(function () {
                    return t.element.appendChild(t.bP);
                  });
                });
            }),
            (o.HO = function (t) {
              var i = this;
              t
                ? (this.bP || this.C_(),
                  this.mutateElement(function () {
                    return Q(i.bP, !0);
                  }))
                : this.bP &&
                  this.mutateElement(function () {
                    return Q(i.bP, !1);
                  });
            }),
            (o.m_ = function () {
              this.element.querySelector(
                "amp-story-page-attachment, amp-story-page-outlink, amp-story-shopping-attachment"
              ) &&
                Ai(this.win).installExtensionForDoc(
                  this.getAmpDoc(),
                  "amp-story-page-attachment",
                  "0.1"
                );
            }),
            (o.isAd = function () {
              return this.element.hasAttribute("ad");
            }),
            (o.jP = function () {
              j(this.element, Xn).forEach(function (t) {
                var i = t.getAttribute(Wn);
                K(t, "background-color", i);
              });
            }),
            (o.CP = function () {
              var t, i, n, r, o;
              this.OP &&
                ((t = this),
                (i = this.$P()),
                (n = "i-amphtml-story-".concat(t.element.id, "-description")),
                (r = Dt("div", {
                  class: "i-amphtml-story-page-description",
                  id: n,
                })),
                (o = function (i, o) {
                  if (o) {
                    var a = t.win.document.createElement(i);
                    (a.textContent = o),
                      (function (i) {
                        t.mutateElement(function () {
                          r.appendChild(i),
                            r.parentNode ||
                              (t.element.parentElement.insertBefore(
                                r,
                                t.element.nextElementSibling
                              ),
                              t.element.getAttribute("aria-labelledby") ||
                                t.element.setAttribute("aria-labelledby", n));
                        });
                      })(a);
                  }
                })("h2", t.element.getAttribute("title")),
                i.forEach(function (i) {
                  o("p", i.getAttribute("alt")),
                    o("p", i.getAttribute("title")),
                    o("p", i.getAttribute("aria-label")),
                    (function (t, i) {
                      var n =
                        i.querySelector("track[default]") ||
                        i.querySelector("track");
                      return n && n.src
                        ? Ni(t.win)
                            .fetchText(n.src, { mode: "cors" })
                            .then(function (t) {
                              if (t.ok) return t.text().then(bo);
                            })
                        : a();
                    })(t, i).then(function (t) {
                      o("p", t);
                    });
                })),
                !this.OP &&
                  this.element.hasAttribute("title") &&
                  (this.element.getAttribute("aria-label") ||
                    this.element.setAttribute(
                      "aria-label",
                      this.element.getAttribute("title")
                    ),
                  this.element.removeAttribute("title"));
            }),
            (o.DP = function () {
              v(this.element.querySelectorAll("amp-img")).forEach(function (t) {
                if (!t.getAttribute("alt")) {
                  t.setAttribute("alt", "");
                  var i = t.querySelector("img");
                  i &&
                    t.getImpl().then(function (t) {
                      return (function (t, i, n, o) {
                        for (
                          var a, e = r(y("alt") ? "alt" : ["alt"], !0);
                          !(a = e()).done;

                        ) {
                          var s = a.value,
                            h = i.getAttribute(s);
                          null !== h && n.setAttribute(s, h);
                        }
                      })(0, t.element, i);
                    });
                }
              });
            }),
            (o.isAutoAdvance = function () {
              return this.fP.isAutoAdvance();
            }),
            (o.LP = function () {
              v(j(this.element, xo)).forEach(function (t) {
                t.setAttribute(
                  "i-amphtml-orig-tabindex",
                  t.getAttribute("tabindex") || 0
                );
              });
            }),
            (o.M_ = function (t) {
              v(j(this.element, xo)).forEach(function (i) {
                i.setAttribute(
                  "tabindex",
                  t ? i.getAttribute("i-amphtml-orig-tabindex") : -1
                );
              });
            }),
            (o.f_ = function () {
              var t = this;
              this.N_().then(function (i) {
                i &&
                  t.eA.subscribe(
                    Wi.CAPTIONS_STATE,
                    function (i) {
                      t.isActive() && t.KO(i);
                    },
                    !0
                  );
              });
            }),
            (o.KO = function (t) {
              return this.$P().map(function (i) {
                return i.getImpl().then(function (i) {
                  i.toggleCaptions && i.toggleCaptions(t);
                });
              });
            }),
            n
          );
        })(t.BaseElement);
      function So(t) {
        try {
          return t.state;
        } catch (t) {
          return null;
        }
      }
      function zo(t, i, n) {
        if (null == i || "" === i) return "";
        var r = n && "number" == typeof i ? "".concat(i, "px") : i;
        return "".concat(t, ":").concat(r, ";");
      }
      var Eo,
        Po = "amp-story-consent",
        Mo = { externalLink: {}, onlyAccept: !1 },
        Oo = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            var n;
            return (
              ((n = i.call(this, t)).Ay = null),
              (n.D_ = null),
              (n.eA = Gi(n.win)),
              (n.L_ = null),
              (n.U_ = null),
              n
            );
          }
          var r = n.prototype;
          return (
            (r.buildCallback = function () {
              var t = this;
              (this.Ay = xi(this.element)), this.Y_();
              var i = L(this.element, "AMP-CONSENT").id;
              this.H_(i);
              var n = Gn(this.element, "publisher-logo-src", !0);
              if (this.L_)
                return (
                  (this.U_ = (function (t, i, n) {
                    var r;
                    return Dt(
                      "div",
                      {
                        class:
                          "i-amphtml-story-consent i-amphtml-story-system-reset",
                      },
                      Dt(
                        "div",
                        { class: "i-amphtml-story-consent-overflow" },
                        Dt(
                          "div",
                          { class: "i-amphtml-story-consent-container" },
                          Dt(
                            "div",
                            { class: "i-amphtml-story-consent-header" },
                            Dt("div", {
                              class: "i-amphtml-story-consent-logo",
                              style:
                                n &&
                                zo(
                                  "background-image",
                                  "url('".concat(n, "') !important"),
                                  !0
                                ),
                            })
                          ),
                          Dt(
                            "div",
                            { class: "i-amphtml-story-consent-content" },
                            Dt("h3", null, t.title),
                            Dt("p", null, t.message),
                            Dt(
                              "ul",
                              { class: "i-amphtml-story-consent-vendors" },
                              null === (r = t.vendors) || void 0 === r
                                ? void 0
                                : r.map(function (t) {
                                    return Dt(
                                      "li",
                                      {
                                        class: "i-amphtml-story-consent-vendor",
                                      },
                                      t
                                    );
                                  })
                            ),
                            Dt(
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
                        Dt(
                          "div",
                          { class: "i-amphtml-story-consent-actions" },
                          Dt("button", {
                            class:
                              "i-amphtml-story-consent-action i-amphtml-story-consent-action-reject" +
                              (!0 === t.onlyAccept ? " i-amphtml-hidden" : ""),
                            on: "tap:".concat(i, ".reject"),
                            "i-amphtml-i18n-text-content": "23",
                          }),
                          Dt("button", {
                            class:
                              "i-amphtml-story-consent-action i-amphtml-story-consent-action-accept",
                            on: "tap:".concat(i, ".accept"),
                            "i-amphtml-i18n-text-content": "22",
                          })
                        )
                      )
                    );
                  })(this.L_, i, n)),
                  this.eA.dispatch(5, [
                    { tagOrTarget: "AMP-CONSENT", method: "accept" },
                    { tagOrTarget: "AMP-CONSENT", method: "prompt" },
                    { tagOrTarget: "AMP-CONSENT", method: "reject" },
                  ]),
                  ur(this.U_, this.element).then(function () {
                    Hn(
                      t.element,
                      t.U_,
                      ':host{all:initial!important;color:initial!important}.i-amphtml-story-consent{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;z-index:100005!important}.i-amphtml-story-consent,.i-amphtml-story-consent:before{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important}.i-amphtml-story-consent:before{content:""!important;background:#000!important;opacity:0.55!important}.i-amphtml-story-consent-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-consent-container{position:relative!important;margin:88px 0 72px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;text-align:start!important;overflow:hidden!important}.i-amphtml-story-consent-header{position:relative!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important}.i-amphtml-story-consent-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-consent-logo:before{content:""!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-consent-content{padding:42px 16px 16px!important;font-size:14px!important;z-index:0!important}.i-amphtml-story-consent-vendors{margin:0!important;padding:0!important;list-style:none!important}.i-amphtml-story-consent-vendor{height:40px!important;border-bottom:1px solid #f0f0f0!important;line-height:40px!important;text-overflow:ellipsis!important;overflow:hidden!important}.i-amphtml-story-consent-external-link{position:relative!important;display:inline-block!important;margin:24px 0!important;color:rgba(0,0,0,0.87)!important;font-size:15px!important;font-weight:700!important;text-decoration:none!important}.i-amphtml-story-consent-external-link:hover{text-decoration:underline!important}.i-amphtml-story-consent-external-link:after{content:""!important;position:absolute!important;display:block!important;height:16px!important;width:16px!important;top:3px!important;right:-20px!important;background:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0, 0, 0, 0.87)"><path d="M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\') 50% no-repeat!important}.i-amphtml-story-consent-external-link.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-actions{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;bottom:0!important;left:0!important;right:0!important;height:72px!important;min-height:72px!important;background:#fff!important;box-shadow:0 -2px 3px rgba(0,0,0,0.12)!important;z-index:1!important}.i-amphtml-story-consent-action{position:relative!important;padding:0 24px!important;margin:0 12px!important;height:40px!important;width:40vw!important;background:#fff!important;border:none!important;border-radius:40px!important;box-sizing:border-box!important;cursor:pointer!important;font-size:13px!important;font-weight:700!important;line-height:40px!important;text-align:center!important;text-transform:uppercase!important}.i-amphtml-story-consent-action.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-action-accept{background:var(--primary-color,#000)!important;color:#fff!important}.i-amphtml-story-consent-action-reject{border:1px solid #000!important}@media (min-width:420px){.i-amphtml-story-consent{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-consent-overflow{margin-top:0!important}.i-amphtml-story-consent-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;margin:0!important;max-height:60vh!important;min-height:40vh!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-consent-content{margin:0 auto!important;max-width:424px!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-consent-content::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-consent-actions{position:relative!important;left:0px!important;right:0px!important}.i-amphtml-story-consent-action{width:33vw!important;max-width:200px!important}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-consent.css*/'
                    ),
                      t.V_(),
                      t.uA();
                  })
                );
            }),
            (r.isLayoutSupported = function (t) {
              return t == ut;
            }),
            (r.uA = function () {
              var t = this;
              this.U_.addEventListener(
                "click",
                function (i) {
                  return t.G_(i);
                },
                !0
              ),
                this.eA.subscribe(
                  Wi.RTL_STATE,
                  function (i) {
                    t.B_(i);
                  },
                  !0
                );
            }),
            (r.G_ = function (t) {
              if (t.target) {
                if (t.target.hasAttribute("on")) {
                  var i = t.target;
                  this.Ay.trigger(i, "tap", t, 3);
                }
                var n = D(t.target, function (t) {
                  return C(t, "a[href]");
                });
                n && (qn(n, this.element), t.preventDefault());
              }
            }),
            (r.B_ = function (t) {
              var i = this;
              this.mutateElement(function () {
                t
                  ? i.U_.setAttribute("dir", "rtl")
                  : i.U_.removeAttribute("dir");
              }, this.U_);
            }),
            (r.Y_ = function () {
              var t = Y(this.element.parentElement, "script");
              if (((this.D_ = t && At(t.textContent)), this.F_(), this.D_)) {
                var i = Y(this.element, "script");
                $t(
                  i && Mt(i),
                  "".concat(
                    Po,
                    " config should be put in a <script> tag with "
                  ) + 'type="application/json"'
                ),
                  (this.L_ = Rt(Rt({}, Mo), At(i.textContent))),
                  Wt().assertString(
                    this.L_.title,
                    "".concat(Po, ": config requires a title")
                  ),
                  Wt().assertString(
                    this.L_.message,
                    "".concat(Po, ": config requires a message")
                  ),
                  $t(
                    this.L_.vendors && y(this.L_.vendors),
                    "".concat(Po, ": config requires an array of vendors")
                  ),
                  Wt().assertBoolean(
                    this.L_.onlyAccept,
                    "".concat(
                      Po,
                      ': config requires "onlyAccept" to be a boolean'
                    )
                  ),
                  (this.L_.externalLink.href || this.L_.externalLink.title) &&
                    (Wt().assertString(
                      this.L_.externalLink.title,
                      "".concat(
                        Po,
                        ': config requires "externalLink.title" to be a string'
                      )
                    ),
                    Wt().assertString(
                      this.L_.externalLink.href,
                      "".concat(
                        Po,
                        ': config requires "externalLink.href" to be an absolute URL'
                      )
                    ),
                    Oi(this.element).assertAbsoluteHttpOrHttpsUrl(
                      this.L_.externalLink.href
                    ));
              }
            }),
            (r.F_ = function () {
              var t = this.D_.consents;
              if (t) {
                var i = Object.keys(t)[0],
                  n = t[i];
                (this.D_.consentInstanceId = i),
                  (this.D_.checkConsentHref = n.checkConsentHref),
                  (this.D_.promptIfUnknownForGeoGroup =
                    n.promptIfUnknownForGeoGroup),
                  delete this.D_.consents;
              }
            }),
            (r.H_ = function (t) {
              var i,
                n = this;
              if (this.D_.checkConsentHref) this.eA.dispatch(8, t);
              else {
                var r = this.D_.promptIfUnknownForGeoGroup;
                r &&
                  ((i = this.element), yi(i, "geo", "amp-geo", !0)).then(
                    function (i) {
                      var o = i.matchedISOCountryGroups;
                      (i && !o.includes(r)) || n.eA.dispatch(8, t);
                    }
                  );
              }
            }),
            (r.V_ = function () {
              var t,
                i,
                n,
                r,
                o = this.U_.querySelector(
                  ".i-amphtml-story-consent-action-accept"
                );
              $(o, {
                color:
                  ((t = (function (t) {
                    var i = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})/;
                    if (!t.match(i))
                      return (
                        Wt().error(
                          "UTILS",
                          "getRGBFromCssColorValue expects a parameter in " +
                            "the form of 'rgba(0, 0, 0, 1)' or 'rgb(0, 0, 0)' but got ".concat(
                              t
                            )
                        ),
                        { r: 0, g: 0, b: 0 }
                      );
                    var n = i.exec(t);
                    return {
                      r: Number(n[1]),
                      g: Number(n[2]),
                      b: Number(n[3]),
                    };
                  })(et(this.win, o)["background-color"])),
                  (i = t.b),
                  (n = t.g),
                  0.2126 *
                    (r = function (t) {
                      return (t /= 255) <= 0.03928
                        ? t / 12.92
                        : Math.pow((t + 0.055) / 1.055, 2.4);
                    })(t.r) +
                    0.7152 * r(n) +
                    0.0722 * r(i) >
                  0.179
                    ? "#000"
                    : "#FFF"),
              });
            }),
            n
          );
        })(t.BaseElement),
        _o = "show-navigation-overlay",
        Io = "show-first-page-overlay",
        No = (function () {
          function t(t, i) {
            (this.t = t),
              (this.ko = Ii(this.t)),
              (this.je = Pi(this.t)),
              (this.W_ = null),
              (this.X_ = null),
              (this.eA = Gi(this.t)),
              (this.q_ = i);
          }
          var i = t.prototype;
          return (
            (i.build = function () {
              var t = this;
              this.W_ ||
                ((this.W_ = Dt(
                  "aside",
                  {
                    class:
                      "i-amphtml-story-hint-container i-amphtml-story-system-reset i-amphtml-hidden",
                  },
                  Dt(
                    "div",
                    { class: "i-amphtml-story-navigation-help-overlay" },
                    Dt(
                      "div",
                      {
                        class:
                          "i-amphtml-story-navigation-help-section prev-page",
                      },
                      Dt(
                        "div",
                        { class: "i-amphtml-story-hint-placeholder" },
                        Dt(
                          "div",
                          { class: "i-amphtml-story-hint-tap-button" },
                          Dt("div", {
                            class: "i-amphtml-story-hint-tap-button-icon",
                          })
                        ),
                        Dt("div", {
                          class: "i-amphtml-story-hint-tap-button-text",
                          "i-amphtml-i18n-text-content": "3",
                        })
                      )
                    ),
                    Dt(
                      "div",
                      {
                        class:
                          "i-amphtml-story-navigation-help-section next-page",
                      },
                      Dt(
                        "div",
                        { class: "i-amphtml-story-hint-placeholder" },
                        Dt(
                          "div",
                          { class: "i-amphtml-story-hint-tap-button" },
                          Dt("div", {
                            class: "i-amphtml-story-hint-tap-button-icon",
                          })
                        ),
                        Dt("div", {
                          class: "i-amphtml-story-hint-tap-button-text",
                          "i-amphtml-i18n-text-content": "2",
                        })
                      )
                    )
                  )
                )),
                ur(this.W_, this.q_).then(function () {
                  var i = Hn(
                    Dt("div", null),
                    t.W_,
                    '.i-amphtml-story-hint-container{transition-property:opacity!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;z-index:2!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.prev-page,[dir=rtl].prev-page{-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}[dir=rtl].show-first-page-overlay .prev-page{background:linear-gradient(270deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-ms-flex:3!important;flex:3!important;background-image:linear-gradient(#e0d5d5 60%,rgba(255,255,255,0) 0)!important;background-position:0!important;background-size:1px 15px!important;background-repeat:repeat-y!important}[dir=rtl].i-amphtml-story-hint-container .next-page{border-left:none!important;background-position:100%!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:""!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important;width:30px!important;height:30px!important;display:inline-block!important}[dir=rtl].show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:""!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{animation:expandingBubble 1000ms cubic-bezier(0.4,0,0.2,1) infinite!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:""!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 6 8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important;width:24px!important;height:24px!important;display:inline-block!important}[dir=rtl] .next-page .i-amphtml-story-hint-tap-button-icon:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important;word-break:break-word!important;padding:0 6px!important}@keyframes expandingBubble{0%{transform:scale(1);opacity:0}50%{transform:scale(1.5);opacity:1}to{transform:scale(1);opacity:0}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-hint.css*/'
                  );
                  t.ko.mutate(function () {
                    t.q_.appendChild(i);
                  });
                }),
                this.eA.subscribe(
                  Wi.RTL_STATE,
                  function (i) {
                    t.B_(i);
                  },
                  !0
                ),
                this.eA.subscribe(Wi.SYSTEM_UI_IS_VISIBLE_STATE, function (i) {
                  t.Z_(i);
                }),
                this.eA.subscribe(Wi.INTERACTIVE_COMPONENT_STATE, function (i) {
                  t.K_(1 === i.state);
                }));
            }),
            (i.J_ = function (t) {
              var i = this;
              0 === this.eA.get(Wi.UI_STATE) &&
                (this.build(),
                this.ko.mutate(function () {
                  i.W_.classList.toggle(_o, t == _o),
                    i.W_.classList.toggle(Io, t == Io),
                    i.W_.classList.remove("i-amphtml-hidden");
                  var n = t == _o ? 3e3 : 275;
                  i.hideAfterTimeout(n);
                }));
            }),
            (i.showNavigationOverlay = function () {
              this.eA.get(Wi.SHARE_MENU_STATE) || this.J_(_o);
            }),
            (i.showFirstPageHintOverlay = function () {
              this.J_(Io);
            }),
            (i.hideAfterTimeout = function (t) {
              var i = this;
              this.X_ = this.je.delay(function () {
                return i.Q_();
              }, t);
            }),
            (i.hideAllNavigationHint = function () {
              this.Q_(),
                null !== this.X_ && (this.je.cancel(this.X_), (this.X_ = null));
            }),
            (i.Q_ = function () {
              var t = this;
              this.W_ &&
                this.ko.mutate(function () {
                  t.W_.classList.add("i-amphtml-hidden");
                });
            }),
            (i.B_ = function (t) {
              var i = this;
              this.ko.mutate(function () {
                t
                  ? i.W_.setAttribute("dir", "rtl")
                  : i.W_.removeAttribute("dir");
              });
            }),
            (i.Z_ = function (t) {
              t || this.hideAllNavigationHint();
            }),
            (i.K_ = function (t) {
              t && this.hideAllNavigationHint();
            }),
            t
          );
        })(),
        Ro = (function () {
          function t(t, i) {
            (this.t = t),
              (this.Gn = null),
              (this.eA = Gi(this.t)),
              (this.gA = bn(this.t, i)),
              (this.q_ = i),
              (this.Ph = Ti(i)),
              (this.ls = _i(i));
          }
          var i = t.prototype;
          return (
            (i.build = function () {
              var t = this;
              if (this.Gn) return a();
              var i = ki(this.q_).canonicalUrl,
                n = Dt("a", {
                  class: "i-amphtml-story-info-moreinfo",
                  target: "_blank",
                  "i-amphtml-i18n-text-content": "26",
                });
              return (
                (this.Gn = Dt(
                  "div",
                  {
                    class:
                      "i-amphtml-story-info-dialog i-amphtml-story-system-reset",
                    onClick: function (i) {
                      i.target === i.currentTarget && t._A();
                    },
                  },
                  Dt(
                    "div",
                    {
                      class: "i-amphtml-story-info-dialog-container",
                      onClick: function (i) {
                        t.G_(i);
                      },
                    },
                    Dt("h1", {
                      class: "i-amphtml-story-info-heading",
                      "i-amphtml-i18n-text-content": "25",
                    }),
                    Dt(
                      "a",
                      { class: "i-amphtml-story-info-link", href: i },
                      i.replace(/([/.]+)/gi, "$1​")
                    ),
                    n
                  )
                )),
                this.uA(),
                Promise.all([
                  ur(this.Gn, this.q_),
                  this.Ph.mutateElement(this.q_, function () {
                    var i = Hn(
                      Dt("div", null),
                      t.Gn,
                      ':host{all:initial!important;color:initial!important}.i-amphtml-story-info-dialog{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;transform:translate3d(0,-100%,0)!important;transition-delay:0.15s!important}.i-amphtml-story-info-dialog-visible{transform:translateZ(0)!important;transition-delay:0s!important}.i-amphtml-story-info-dialog:before{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-info-dialog.i-amphtml-story-info-dialog-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-dialog-container{position:absolute!important;top:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;border-radius:0 0 8px 8px!important;transform:translate3d(0,-100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;padding:20px!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-info-dialog-visible .i-amphtml-story-info-dialog-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-heading{display:block!important;font-size:14px!important;font-weight:700!important;margin:0 0 8px!important}.i-amphtml-story-info-link{color:#000!important;display:block!important;margin:0!important;opacity:0.64!important;font-size:12px!important;text-decoration:none!important}.i-amphtml-story-info-moreinfo{color:#4285f4!important;display:none!important;font-family:Roboto-Medium,sans-serif!important;font-size:12px!important;letter-spacing:0.5px!important;margin:16px 0 0;text-decoration:none!important}.i-amphtml-story-info-moreinfo.i-amphtml-story-info-moreinfo-visible{display:block!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-info-dialog.css*/'
                    );
                    t.q_.appendChild(i);
                  }),
                  this.tM().then(function (i) {
                    if (i)
                      return t.Ph.mutateElement(t.q_, function () {
                        n.classList.add(
                          "i-amphtml-story-info-moreinfo-visible"
                        ),
                          n.setAttribute("href", i);
                      });
                  }),
                ])
              );
            }),
            (i.uA = function () {
              var t = this;
              this.eA.subscribe(Wi.INFO_DIALOG_STATE, function (i) {
                t.iM(i);
              });
            }),
            (i.iM = function (t) {
              var i = this;
              this.Ph.mutateElement(this.Gn, function () {
                i.Gn.classList.toggle("i-amphtml-story-info-dialog-visible", t);
              }),
                (this.Gn[dn] = "amp-story-info-dialog"),
                this.gA.triggerEvent(t ? vn : yn, this.Gn);
            }),
            (i.G_ = function (t) {
              var i = D(t.target, function (t) {
                return C(t, "a[href]");
              });
              i && (qn(i, this.Gn), t.preventDefault());
            }),
            (i._A = function () {
              this.eA.dispatch(17, !1);
            }),
            (i.tM = function () {
              var t = this;
              return this.ls.isEmbedded()
                ? this.ls
                    .sendMessageAwaitResponse("moreInfoLinkUrl", void 0)
                    .then(function (i) {
                      return i
                        ? Oi(t.q_).assertAbsoluteHttpOrHttpsUrl(i)
                        : null;
                    })
                : Promise.resolve(null);
            }),
            t
          );
        })(),
        jo = (function () {
          function t(t, i) {
            (this.t = t),
              (this.fA = i),
              (this.gA = bn(t, i)),
              (this.eA = Gi(t)),
              (this.nM = Dt("amp-story-share-menu", null)),
              i.appendChild(this.nM),
              (this.rM = !1),
              this.uA();
          }
          var i = t.prototype;
          return (
            (i.uA = function () {
              var t = this;
              this.eA.subscribe(Wi.SHARE_MENU_STATE, function (i) {
                i && (t.oM() ? (t.aM(), t._A()) : t.sM()),
                  t.gA.triggerEvent(i ? vn : yn, t.nM);
              });
            }),
            (i.oM = function () {
              var t = _i(this.fA),
                i = zi(this.t),
                n = t.isWebviewEmbedded() && i.isChrome();
              return "share" in navigator && !n;
            }),
            (i.aM = function () {
              var t = this.t.navigator,
                i = {
                  url: ki(oi(this.fA)).canonicalUrl,
                  text: this.t.document.title,
                };
              t.share(i).catch(function (t) {
                Wt().warn("amp-story-share", t.message, i);
              });
            }),
            (i.sM = function () {
              this.rM ||
                ((this.rM = !0),
                Ai(this.t).installExtensionForDoc(
                  oi(this.fA),
                  "amp-story-share-menu",
                  "0.1"
                ));
            }),
            (i._A = function () {
              this.eA.dispatch(28, !1);
            }),
            t
          );
        })(),
        Co = "amp-story-viewer-messaging-handler",
        Do = {
          CAPTIONS_STATE: { dataSource: 0, property: Wi.CAPTIONS_STATE },
          CURRENT_PAGE_ID: { dataSource: 0, property: Wi.CURRENT_PAGE_ID },
          EDUCATION_STATE: { dataSource: 0, property: Wi.EDUCATION_STATE },
          MUTED_STATE: { dataSource: 0, property: Wi.MUTED_STATE },
          PAGE_ATTACHMENT_STATE: {
            dataSource: 0,
            property: Wi.PAGE_ATTACHMENT_STATE,
          },
          UI_STATE: { dataSource: 0, property: Wi.UI_STATE },
          STORY_PROGRESS: { dataSource: 2, property: pn },
          STORY_PAGE_COUNT: { dataSource: 2, property: un },
        },
        Lo = {
          CAPTIONS_STATE: {
            action: 24,
            isValueValid: function (t) {
              return "boolean" == typeof t;
            },
          },
          MUTED_STATE: {
            action: 20,
            isValueValid: function (t) {
              return "boolean" == typeof t;
            },
          },
        },
        Uo = (function () {
          function t(t, i) {
            (this.eA = Gi(t)), (this.cA = cn(t)), (this.ls = i);
          }
          var i = t.prototype;
          return (
            (i.startListening = function () {
              var t = this;
              this.ls.onMessageRespond("getDocumentState", function (i) {
                return t.eM(i);
              }),
                this.ls.onMessage("onDocumentState", function (i) {
                  return t.uM(i);
                }),
                this.ls.onMessageRespond("setDocumentState", function (i) {
                  return t.hM(i);
                }),
                this.ls.onMessageRespond("customDocumentUI", function (i) {
                  return t.cM(i);
                });
            }),
            (i.send = function (t, i) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              this.ls.sendMessage(t, i, n);
            }),
            (i.eM = function () {
              var t,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = i.state,
                r = Do[n];
              if (!r) return Promise.reject("Invalid 'state' parameter");
              switch (r.dataSource) {
                case 0:
                  t = this.eA.get(r.property);
                  break;
                case 2:
                  t = this.cA.get()[r.property];
                  break;
                default:
                  qt().error(Co, "Unknown data source %s.", r.dataSource);
              }
              return Promise.resolve({ state: n, value: t });
            }),
            (i.uM = function () {
              var t = this,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = i.state,
                r = Do[n];
              r
                ? this.eA.subscribe(r.property, function (i) {
                    t.ls.sendMessage("documentStateUpdate", {
                      state: n,
                      value: i,
                    });
                  })
                : Wt().error(Co, "Invalid 'state' parameter");
            }),
            (i.hM = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = t.state,
                n = t.value,
                r = Lo[i];
              return r
                ? r.isValueValid(n)
                  ? (this.eA.dispatch(r.action, n),
                    Promise.resolve({ state: i, value: n }))
                  : Promise.reject("Invalid 'value' parameter")
                : Promise.reject("Invalid 'state' parameter");
            }),
            (i.cM = function (t) {
              this.eA.dispatch(13, t.controls);
            }),
            t
          );
        })(),
        Yo = "transform ".concat(co, "ms linear"),
        Ho = "transform 200ms ease",
        Vo = 2,
        Bo = 20,
        Fo = (function () {
          function t(t, i) {
            (this.t = t),
              (this.Fe = null),
              (this.lM = 0),
              (this.mM = 0),
              (this.fM = 1),
              (this.tr = (function (t) {
                return Jt(t, "ampdoc");
              })(this.t).getSingleDoc()),
              (this.Ph = Ti(this.tr)),
              (this.pM = w()),
              (this.eA = Gi(this.t)),
              (this.dM = ""),
              (this.Oc = []),
              (this.vM = a()),
              (this.yM = 0),
              (this.fA = i);
          }
          t.create = function (i, n) {
            return new t(i, n);
          };
          var i = t.prototype;
          return (
            (i.build = function (t) {
              var i = this;
              if (this.Fe) return this.Fe;
              var n,
                r = Dt("ol", {
                  "aria-hidden": "true",
                  class:
                    "i-amphtml-story-progress-bar" +
                    (this.gM()
                      ? ""
                      : " i-amphtml-story-progress-bar-exp-disabled"),
                });
              return (
                (this.Fe = r),
                this.fA.addEventListener(nn, function () {
                  i.bM();
                }),
                this.eA.subscribe(
                  Wi.PAGE_IDS,
                  function (t) {
                    var n = !!r.parentElement;
                    (i.vM = i.Ph.mutateElement(r, function () {
                      n && i.xM(),
                        t.forEach(function (t) {
                          (i.wM(t) && !i.gM()) || t in i.pM || i.kM(t);
                        }),
                        i.lM > Bo && (i.AM(i.mM), i.ea(!1)),
                        r.classList.toggle(
                          "i-amphtml-progress-bar-overflow",
                          i.lM > Bo
                        );
                    })),
                      n && i.updateProgress(i.dM, i.fM, !0);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.RTL_STATE,
                  function (t) {
                    i.B_(t);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.UI_STATE,
                  function (t) {
                    i.RA(t);
                  },
                  !0
                ),
                ((n = this.tr), ti(n, "viewport")).onResize(
                  Ut(
                    this.t,
                    function () {
                      return i.TM();
                    },
                    300
                  )
                ),
                r
              );
            }),
            (i.gM = function () {
              var t = ci(this.t, fi);
              return t && t != di;
            }),
            (i.wM = function (t) {
              return t.startsWith("i-amphtml-ad-");
            }),
            (i.bM = function () {
              this.lM > Bo && ((this.yM = 0), this.ea(!1));
            }),
            (i.ea = function () {
              var t = this,
                i =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
              this.SM().then(function (n) {
                var r = -(t.yM - t.EM()) * (Vo + 4);
                t.Ph.mutateElement(t.PM(), function () {
                  t.PM().classList.toggle("i-amphtml-animate-progress", i);
                  for (var o = 0; o < t.lM; o++) {
                    var a = o >= t.yM && o < t.yM + Bo ? n : Vo;
                    t.OM(t.Oc[o], r, a), (r += a + 4);
                  }
                });
              });
            }),
            (i.OM = function (t, i, n) {
              this.eA.get(Wi.RTL_STATE) && (i *= -1),
                t.setAttribute(
                  "style",
                  "transform: translate3d("
                    .concat(i, "px, 0px, 0.00001px) scaleX(")
                    .concat(n / Vo, ");")
                );
            }),
            (i.SM = function () {
              var t = this,
                i = (this._M() + this.EM()) * (Vo + 4);
              return this.MM().then(function (n) {
                return (n - i) / Math.min(t.lM, Bo) - 4;
              });
            }),
            (i.MM = function () {
              var t = this;
              return this.Ph.measureElement(function () {
                return t.PM().getBoundingClientRect().width;
              });
            }),
            (i._M = function () {
              var t = this.lM - (this.yM + Bo);
              return t > 3 ? 3 : Math.max(t, 0);
            }),
            (i.EM = function () {
              return Math.min(3, this.yM);
            }),
            (i.IM = function () {
              if (this.mM >= this.yM + Bo) {
                var t = this.yM + Bo + 5 - 1;
                (this.yM += t < this.lM ? 5 : this.lM - (this.yM + Bo)),
                  this.ea();
              } else
                this.mM < this.yM &&
                  ((this.yM -= this.yM - 5 < 0 ? this.yM : 5), this.ea());
            }),
            (i.B_ = function (t) {
              var i = this;
              this.Ph.mutateElement(this.PM(), function () {
                t
                  ? i.PM().setAttribute("dir", "rtl")
                  : i.PM().removeAttribute("dir");
              });
            }),
            (i.TM = function () {
              (this.PM().classList.contains(
                "i-amphtml-progress-bar-overflow"
              ) ||
                this.lM > Bo) &&
                (this.AM(this.mM), this.ea(!1));
            }),
            (i.RA = function (t) {
              switch (t) {
                case 2:
                  (Bo = 70), (Vo = 3);
                  break;
                case 0:
                  (Bo = 20), (Vo = 2);
                  break;
                default:
                  Bo = 20;
              }
            }),
            (i.zM = function (t) {
              var i = Dt(
                "li",
                { class: "i-amphtml-story-page-progress-bar" },
                Dt("div", {
                  class:
                    "i-amphtml-story-page-progress-value" +
                    (t ? " i-amphtml-story-ad-progress-value" : ""),
                })
              );
              this.PM().appendChild(i), this.Oc.push(i);
            }),
            (i.xM = function () {
              !(function (t) {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
              })(Zt(this.Fe)),
                (this.pM = w()),
                (this.lM = 0),
                (this.Oc = []);
            }),
            (i.kM = function (t) {
              (this.pM[t] = this.lM++), this.zM(this.wM(t));
            }),
            (i.PM = function () {
              return this.Fe;
            }),
            (i.NM = function (t) {
              Zt(k(this.pM, t));
            }),
            (i.updateProgress = function (t, i) {
              var n = this,
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              this.vM.then(function () {
                n.NM(t);
                var o = n.pM[t];
                n.RM(o, i),
                  (n.mM !== o || r) && n.jM(o, i, n.mM, n.fM),
                  (n.fM = i),
                  (n.mM = o),
                  (n.dM = t),
                  n.lM > Bo && n.IM();
              });
            }),
            (i.AM = function (t) {
              t > Bo && t + Bo < this.lM
                ? (this.yM = t - (t % Bo))
                : (this.yM = t > Bo ? this.lM - Bo : 0);
            }),
            (i.jM = function (t, i, n, r) {
              var o = !1;
              1 === r && 1 === i && (o = !0),
                t > n && 1 !== i && (o = !0),
                n > t && 1 === i && (o = !0);
              for (var a = 0; a < this.lM; a++)
                if (a !== t) {
                  var e = a < t ? 1 : 0,
                    s = !!o && a === n;
                  this.RM(a, e, s);
                }
            }),
            (i.RM = function (t, i) {
              var n =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                r = t + 1,
                o = R(
                  this.PM(),
                  ".i-amphtml-story-page-progress-bar:nth-child(".concat(
                    _(r),
                    ") .i-amphtml-story-page-progress-value"
                  )
                );
              this.Ph.mutateElement(Zt(o), function () {
                var t = "none";
                n && (t = 1 === i || 0 === i ? Ho : Yo),
                  $(Zt(o), {
                    transform: ot("".concat(i, ",1")),
                    transition: t,
                  });
              });
            }),
            t
          );
        })(),
        Go =
          '.i-amphtml-story-system-layer{background:linear-gradient(180deg,#0004,#0002 33%,#0001 67%,#0000)!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;top:0!important;left:0!important;right:0!important;height:140px!important;z-index:100000!important;transition:opacity 0.3s cubic-bezier(0,0,0.2,1)!important;pointer-events:none!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer{opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0,1,1)!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer *{pointer-events:none!important}.i-amphtml-story-attribution{top:0!important;border:none!important;pointer-events:auto!important;cursor:pointer!important;padding:6px 8px 0!important;height:48px!important;place-items:center!important;display:-ms-flexbox!important;display:flex!important;text-decoration:none!important;overflow:hidden!important;visibility:hidden!important}.i-amphtml-story-attribution-visible{visibility:visible!important}[desktop] .i-amphtml-story-attribution{padding:6px 6px 0!important;left:0!important;right:0!important}.i-amphtml-story-attribution>*{margin:0px 4px!important}.i-amphtml-story-attribution-logo-container{display:grid!important;place-items:center!important}.i-amphtml-story-attribution-logo{border-radius:100%!important;border:1px solid #d4d4d4!important;width:28px!important;height:28px!important;-o-object-fit:cover!important;object-fit:cover!important;box-shadow:0px 0px 6px rgba(0,0,0,0.12)!important}.i-amphtml-story-attribution-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;font-size:13px!important;font-weight:500!important;text-shadow:0px 0px 6px rgba(0,0,0,0.16)!important;color:#fff!important}.i-amphtml-story-system-layer-buttons,.i-amphtml-story-system-layer-buttons-start-position{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:row!important;flex-direction:row!important;-ms-flex-pack:end!important;justify-content:flex-end!important;padding:8px 4px!important;box-sizing:border-box!important;-ms-flex:1!important;flex:1!important}.i-amphtml-story-system-layer-buttons-start-position{position:absolute!important;top:0!important;-ms-flex-pack:start!important;justify-content:flex-start!important}[desktop] .i-amphtml-story-system-layer-buttons{padding:8px 4px 0!important}.i-amphtml-story-system-layer-buttons .i-amphtml-story-ui-hide-button.i-amphtml-story-button{display:none!important}.i-amphtml-story-button{height:48px!important;width:48px!important;cursor:pointer!important;border:none!important;pointer-events:auto!important;background:none!important}[desktop] .i-amphtml-story-button{margin:0 4px!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-progress-bar{border:0!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;right:0!important;top:0!important;margin:6px 10px 0!important;padding:0 2px!important;position:absolute!important;visibility:visible!important;z-index:100001!important;overflow:hidden!important}[ad-showing] .i-amphtml-story-progress-bar-exp-disabled.i-amphtml-story-progress-bar{display:none!important}[ad-showing] .i-amphtml-story-attribution{visibility:hidden!important}[ad-showing] .i-amphtml-story-share-control{display:none!important}[ad-showing]:not([i-amphtml-current-page-has-audio]) .i-amphtml-story-mute-audio-control,[ad-showing]:not([i-amphtml-current-page-has-audio]) .i-amphtml-story-unmute-audio-control{visibility:hidden!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important}.i-amphtml-story-page-progress-value{background:#fff!important;height:100%!important;width:100%!important;transform:translateZ(0) scaleX(0)!important;transform-origin:left!important}.i-amphtml-story-ad-progress-value{background-color:#fbc02d!important}[dir=rtl] .i-amphtml-story-page-progress-value{transform-origin:right!important}[i-amphtml-story-has-new-page=noshow] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:0!important;visibility:hidden!important}.i-amphtml-last-page-active[i-amphtml-story-has-new-page=show] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:1!important;visibility:visible!important}.i-amphtml-story-mute-text,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{width:-webkit-max-content!important;width:max-content!important;color:#fff!important}.i-amphtml-story-sound-display{display:inline-block!important;height:46px!important;position:relative!important}.i-amphtml-story-captions-control,.i-amphtml-story-mute-audio-control,.i-amphtml-story-mute-text,.i-amphtml-story-no-audio-ui .i-amphtml-story-sound-display,.i-amphtml-story-nocaptions-control,.i-amphtml-story-pause-control,.i-amphtml-story-play-control,.i-amphtml-story-skip-to-next,.i-amphtml-story-unmute-audio-control,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{display:none!important}.i-amphtml-story-system-layer:not([desktop]):not(.i-amphtml-story-desktop-one-panel):not(.amp-mode-keyboard-active) .i-amphtml-paused-display button:not(:focus){margin:0!important;padding:0!important;width:0px!important;opacity:0!important;pointer-events:none!important}[i-amphtml-current-page-has-audio]:not([muted]) .i-amphtml-story-mute-audio-control,[i-amphtml-current-page-has-audio][muted] .i-amphtml-story-unmute-audio-control,[i-amphtml-current-page-has-captions]:not([captions-on]) .i-amphtml-story-nocaptions-control,[i-amphtml-current-page-has-captions][captions-on] .i-amphtml-story-captions-control{display:block!important}.i-amphtml-story-system-layer-buttons button[disabled][disabled]{display:none!important}.i-amphtml-story-has-playback-ui:not([paused]) .i-amphtml-story-pause-control,.i-amphtml-story-has-playback-ui[paused] .i-amphtml-story-play-control{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-system-layer-buttons{visibility:hidden!important}.i-amphtml-story-unmute-audio-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="%23fff" fill-rule="evenodd" d="M27.53 16.97a.95.95 0 0 1 1.1-.76c.75.13 2.28.7 3.63 1.9a7.71 7.71 0 0 1 2.62 5.95c0 1.86-.55 3.32-1.33 4.45l-1.38-1.37c.48-.8.8-1.81.8-3.08 0-2.16-.92-3.59-1.97-4.53a6.43 6.43 0 0 0-2.7-1.45.95.95 0 0 1-.77-1.1z" clip-rule="evenodd"/><path fill="%23fff" fill-rule="evenodd" d="M27.54 21.03a.95.95 0 0 1 1.14-.72c.7.16 2.5 1.19 2.5 3.71 0 .7-.15 1.28-.36 1.76l-1.56-1.52c.05-.6-.07-1.25-.48-1.71-.23-.26-.47-.36-.51-.38 0 0-.01 0 0 0a.95.95 0 0 1-.73-1.14z" clip-rule="evenodd"/><path fill="%23fff" d="M23.4 16.79v1.56l1.9 1.9v-4.27c0-.3-.12-.6-.29-.84a1.59 1.59 0 0 0-.7-.57c-.29-.11-.61-.16-.9-.1-.3.06-.61.21-.82.42l-1.31 1.34 1.33 1.34.8-.78z"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="m20.12 18.73-1.76 1.81h-2.59c-.94 0-1.7.76-1.7 1.7v3.45c0 .93.75 1.68 1.67 1.7l2.6.04 4.9 4.9a.65.65 0 0 0 1.1-.46v-9.1"/><path stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.13 15.36 17.2 17.19"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M28.47 30.84A7.2 7.2 0 0 0 31 29.67"/></svg>\')!important}.i-amphtml-story-mute-audio-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M28.47 17.14c1.15.2 5.46 1.98 5.46 6.92 0 4.95-4.39 6.63-5.46 6.83"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.8" d="M28.47 21.24c.37.08 1.75.79 1.75 2.78 0 1.99-1.4 2.67-1.75 2.74"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="m18.36 27.48 4.88 4.9a.65.65 0 0 0 1.1-.46V16.09c0-.58-.7-.87-1.1-.45l-4.88 4.94h-2.59c-.94 0-1.7.77-1.7 1.7v3.45c0 .93.75 1.69 1.67 1.7l2.62.05z"/></svg>\')!important}.i-amphtml-story-captions-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="%23fff" d="M28.9 15.4h-9.8a5.4 5.4 0 0 0-5.4 5.3v6.6a5.4 5.4 0 0 0 5.4 5.3h9.8a5.4 5.4 0 0 0 5.4-5.3v-6.6a5.4 5.4 0 0 0-5.4-5.3zm1 6h-1.7a1.1 1.1 0 0 0-1.1 1.2v2.8a1.1 1.1 0 0 0 1.1 1.1h1.6c.6 0 1 .5 1 1 0 .7-.4 1.2-1 1.2h-1.6a3.3 3.3 0 0 1-3.3-3.3v-2.8a3.3 3.3 0 0 1 3.3-3.3h1.6c.6.1 1 .6 1 1.1 0 .6-.4 1-1 1zm-8.1 0H20a1.1 1.1 0 0 0-1 1.2v2.8a1.1 1.1 0 0 0 1 1.1h1.6c.6 0 1.1.5 1.1 1 0 .7-.5 1.2-1 1.2h-1.6a3.3 3.3 0 0 1-3.3-3.3v-2.8a3.3 3.3 0 0 1 3.3-3.3h1.6c.5.1 1 .6 1 1.1a1.1 1.1 0 0 1-1 1z"/></svg>\')!important;width:52px!important}.i-amphtml-story-nocaptions-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="18.74" height="15.43" x="14.63" y="16.29" stroke="%23fff" stroke-width="1.85" rx="4.42"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.85" d="M22.4 20.38h-1.63a2.2 2.2 0 0 0-2.2 2.2v2.84c0 1.21.98 2.2 2.2 2.2h1.63m7.07-7.24h-1.63a2.2 2.2 0 0 0-2.2 2.2v2.84c0 1.21.98 2.2 2.2 2.2h1.63"/></svg>\')!important;width:52px!important}.i-amphtml-story-pause-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="2.1" d="M20.33 16.86v15.4m7.34-15.4v15.4"/></svg>\')!important}.i-amphtml-story-play-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M17.74 30.34V18.53a1.8 1.8 0 0 1 2.77-1.52l9.23 5.92a1.8 1.8 0 0 1 0 3.03l-9.23 5.9a1.8 1.8 0 0 1-2.77-1.52z"/></svg>\')!important}.i-amphtml-story-share-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="%23fff" d="m21.1 25.4 9.87-9.86 1.42 1.42-9.86 9.87z"/><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="m16.85 19.82 15.33-4.14c.04 0 .07.03.06.06l-4.02 15.34a1.6 1.6 0 0 1-2.97.33l-2.93-5.73-5.77-2.88a1.6 1.6 0 0 1 .3-2.98z"/></svg>\')!important}.i-amphtml-story-info-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="2.2" height="6.7" x="22.9" y="22.6" fill="%23fff" rx="1.1"/><path stroke="%23fff" stroke-width="1.9" d="M31.7 24a7.7 7.7 0 1 1-15.4 0 7.7 7.7 0 0 1 15.4 0z"/><circle cx="24" cy="20.2" r="1.2" fill="%23fff"/></svg>\')!important;display:none!important;background-size:auto!important}.i-amphtml-story-close-control{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><rect width="1.84" height="18.84" x="16.68" y="18" fill="%23fff" rx=".92" transform="rotate(-45 16.68 18)"/><rect width="1.84" height="18.84" x="30" y="16.7" fill="%23fff" rx=".92" transform="rotate(45 30 16.7)"/></svg>\')!important}.i-amphtml-story-skip-to-next{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M17 29.2V18.8c0-1.2 1.4-2 2.5-1.3l7.5 5.2c1 .6 1 2 0 2.6l-7.5 5.2c-1 .7-2.5 0-2.5-1.3z"/><rect width="1.8" height="15.6" x="30.2" y="16.2" fill="%23fff" rx=".9"/></svg>\')!important}[desktop] .i-amphtml-story-skip-to-next{display:block!important}.i-amphtml-story-has-new-page-notification-container{position:absolute!important;z-index:100002!important;top:32px!important;right:0!important;left:0!important;opacity:0!important}.i-amphtml-story-has-new-page-notification-container,.i-amphtml-story-has-new-page-text-wrapper{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-has-new-page-text-wrapper{background-color:rgba(32,33,37,0.8)!important;-ms-flex-align:center!important;align-items:center!important;padding:4px 10px 4px 0!important;border-radius:5px!important}[dir=rtl] .i-amphtml-story-has-new-page-text-wrapper{padding-right:0!important;padding-left:10px!important}.i-amphtml-story-has-new-page-text{color:#fff!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important;font-weight:700!important}.i-amphtml-story-has-new-page-circle-icon{background:#03ffa0!important;border-radius:50%!important;height:6px!important;width:6px!important;position:relative!important;box-shadow:0 0 0 2px rgba(3,255,160,0.5)!important;margin:0px 10px!important}.i-amphtml-embedded.i-amphtml-first-page-active .i-amphtml-story-info-control{display:block!important}.i-amphtml-story-no-sharing .i-amphtml-story-info-control,.i-amphtml-story-no-sharing .i-amphtml-story-share-control{display:none!important}.i-amphtml-animate-progress li{transition:transform 0.8s cubic-bezier(0.4,0,0.2,1)!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-progress-bar{height:3px!important}.i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{border-radius:0px!important;list-style:none!important;margin:0 2px!important;width:2px!important;position:absolute!important;transform-origin:left!important}[dir=rtl].i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{transform-origin:right!important}[desktop] .i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{width:3px!important}.i-amphtml-story-desktop-one-panel.i-amphtml-story-system-layer{width:var(--i-amphtml-story-desktop-one-panel-width)!important;margin:auto!important;margin-top:var(\n    --i-amphtml-story-desktop-one-panel-responsive-margin\n  )!important;border-radius:var(\n    --i-amphtml-story-desktop-one-panel-border-radius\n  )!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-system-layer.css*/',
        Wo = "ad-showing",
        Xo = "muted",
        qo = "paused",
        Zo = "info",
        $o = "i-amphtml-story-captions-control",
        Ko = "i-amphtml-story-nocaptions-control",
        Jo = "i-amphtml-story-mute-audio-control",
        Qo = "i-amphtml-story-close-control",
        ta = "i-amphtml-story-skip-to-next",
        ia = "i-amphtml-story-viewer-custom-control",
        na = "i-amphtml-story-unmute-audio-control",
        ra = "i-amphtml-story-pause-control",
        oa = "i-amphtml-story-play-control",
        aa = "i-amphtml-current-page-has-audio",
        ea = "i-amphtml-story-share-control",
        sa = "i-amphtml-story-info-control",
        ha = "i-amphtml-story-has-new-page",
        ua = "i-amphtml-story-attribution",
        ma = function (t, i, n) {
          var r = Dt(
            "aside",
            {
              class:
                "i-amphtml-story-system-layer i-amphtml-story-system-reset",
            },
            i,
            Dt(
              "a",
              { class: String(ua), target: "_blank" },
              Dt(
                "div",
                { class: "i-amphtml-story-attribution-logo-container" },
                Dt("img", {
                  alt: "",
                  class: "i-amphtml-story-attribution-logo",
                })
              ),
              Dt("div", { class: "i-amphtml-story-attribution-text" })
            ),
            Dt(
              "div",
              { class: "i-amphtml-story-has-new-page-notification-container" },
              Dt(
                "div",
                { class: "i-amphtml-story-has-new-page-text-wrapper" },
                Dt("span", {
                  class: "i-amphtml-story-has-new-page-circle-icon",
                }),
                Dt("div", {
                  class: "i-amphtml-story-has-new-page-text",
                  "i-amphtml-i18n-text-content": "64",
                })
              )
            ),
            Dt(
              "div",
              { class: "i-amphtml-story-system-layer-buttons" },
              Dt("div", {
                role: "button",
                class: sa + " i-amphtml-story-button",
                "i-amphtml-i18n-aria-label": "68",
              }),
              Dt(
                "div",
                { class: "i-amphtml-story-captions-display" },
                Dt("button", {
                  class: $o + " i-amphtml-story-button",
                  "i-amphtml-i18n-aria-label": "111",
                }),
                Dt("button", {
                  class: Ko + " i-amphtml-story-button",
                  "i-amphtml-i18n-aria-label": "112",
                })
              ),
              Dt(
                "div",
                { class: "i-amphtml-story-sound-display" },
                Dt("button", {
                  class: na + " i-amphtml-story-button",
                  "i-amphtml-i18n-aria-label": "67",
                }),
                Dt("button", {
                  class: Jo + " i-amphtml-story-button",
                  "i-amphtml-i18n-aria-label": "66",
                })
              ),
              Dt(
                "div",
                { class: "i-amphtml-paused-display" },
                Dt("button", {
                  class: ra + " i-amphtml-story-button",
                  "i-amphtml-i18n-aria-label": "85",
                }),
                Dt("button", {
                  class: oa + " i-amphtml-story-button",
                  "i-amphtml-i18n-aria-label": "86",
                })
              ),
              Dt("button", {
                class:
                  ta + " i-amphtml-story-ui-hide-button i-amphtml-story-button",
                "i-amphtml-i18n-aria-label": "88",
              }),
              Dt("button", {
                class: ea + " i-amphtml-story-button",
                "i-amphtml-i18n-aria-label": "69",
              }),
              Dt("button", {
                class:
                  Qo + " i-amphtml-story-ui-hide-button i-amphtml-story-button",
                "i-amphtml-i18n-aria-label": "87",
              })
            ),
            Dt("div", {
              class: "i-amphtml-story-system-layer-buttons-start-position",
            })
          );
          return n || r.classList.add("i-amphtml-story-hidden"), r;
        },
        pa = "__AMP_VIEWER_CONTROL_EVENT_NAME__",
        la =
          (d((Eo = {}), "share", { selector: ".".concat(ea) }),
          d(Eo, "close", { selector: ".".concat(Qo) }),
          d(Eo, "skip-next", { selector: ".".concat(ta) }),
          d(Eo, "skip-to-next", { selector: ".".concat(ta) }),
          Eo),
        ca = (function () {
          function t(t, i) {
            (this.t = t),
              (this.q_ = i),
              (this.Fe = null),
              (this.CM = null),
              (this.DM = null),
              (this.LM = Fo.create(t, this.q_)),
              (this.eA = Gi(this.t)),
              (this.ko = Ii(this.t)),
              (this.je = Pi(this.t)),
              (this.RE = null),
              (this.ls = null),
              (this.UM = null);
          }
          var i = t.prototype;
          return (
            (i.build = function (t) {
              var i = this,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
              return (
                this.Fe ||
                  ((this.CM = ma(this.q_, this.LM.build(t), n)),
                  ur(this.CM, this.q_),
                  (this.CM.querySelector(
                    ".i-amphtml-story-share-control"
                  ).href = ki(this.q_).canonicalUrl),
                  (this.Fe = Hn(
                    Dt("div", { class: "i-amphtml-system-layer-host" }),
                    this.CM,
                    Go
                  )),
                  (this.DM = this.CM.querySelector(
                    ".i-amphtml-story-system-layer-buttons"
                  )),
                  this.uA(),
                  this.eA.subscribe(
                    Wi.CAN_SHOW_SYSTEM_LAYER_BUTTONS,
                    function (t) {
                      i.CM.classList.toggle(
                        "i-amphtml-story-ui-no-buttons",
                        !t
                      );
                    },
                    !0
                  ),
                  zi(this.t).isIos() && this.CM.setAttribute("ios", ""),
                  (this.ls = _i(this.t.document.documentElement)),
                  (this.UM = this.ls.isEmbedded()
                    ? new Uo(this.t, this.ls)
                    : null),
                  Fn(this.ls, this.eA)
                    ? (this.CM.classList.add("i-amphtml-embedded"),
                      this.getShadowRoot().setAttribute(Zo, ""))
                    : this.getShadowRoot().removeAttribute(Zo),
                  this.YM(),
                  this.getShadowRoot().setAttribute(ha, "noshow")),
                this.Fe
              );
            }),
            (i.YM = function () {
              if (this.ls && "auto" === this.ls.getParam("attribution")) {
                this.CM.querySelector(".i-amphtml-story-attribution-logo").src =
                  Gn(this.q_, "entity-logo-src") ||
                  Gn(this.q_, "publisher-logo-src");
                var t = this.CM.querySelector(".".concat(O(ua)));
                (t.href =
                  Gn(this.q_, "entity-url") ||
                  Oi(this.q_).getSourceOrigin(ki(this.q_).sourceUrl)),
                  (this.CM.querySelector(
                    ".i-amphtml-story-attribution-text"
                  ).textContent =
                    this.q_.getAttribute("entity") ||
                    this.q_.getAttribute("publisher")),
                  t.classList.add("i-amphtml-story-attribution-visible");
              }
            }),
            (i.uA = function () {
              var t = this;
              this.getShadowRoot().addEventListener("click", function (i) {
                var n = i.target;
                C(n, ".".concat(Jo, ", .").concat(Jo, " *"))
                  ? t.HM(!0)
                  : C(n, ".".concat(na, ", .").concat(na, " *"))
                  ? t.HM(!1)
                  : C(n, ".".concat(ra, ", .").concat(ra, " *"))
                  ? t.VM(!0)
                  : C(n, ".".concat(oa, ", .").concat(oa, " *"))
                  ? t.VM(!1)
                  : C(n, ".".concat($o, ", .").concat($o, " *"))
                  ? t.GM(!1)
                  : C(n, ".".concat(Ko, ", .").concat(Ko, " *"))
                  ? t.GM(!0)
                  : C(n, ".".concat(ea, ", .").concat(ea, " *"))
                  ? t.BM(i)
                  : C(n, ".".concat(sa, ", .").concat(sa, " *"))
                  ? t.FM()
                  : C(n, ".".concat(ia, ", .").concat(ia, " *"))
                  ? t.WM(i.target)
                  : C(n, ".".concat(ua, ", .").concat(ua, " *")) &&
                    qn(
                      D(n, function (t) {
                        return C(t, "a[href]");
                      }),
                      t.q_
                    );
              }),
                this.eA.subscribe(Wi.AD_STATE, function (i) {
                  t.XM(i);
                }),
                this.eA.subscribe(
                  Wi.CAN_SHOW_AUDIO_UI,
                  function (i) {
                    t.qM(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.CAN_SHOW_SHARING_UIS,
                  function (i) {
                    t.ZM(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.STORY_HAS_PLAYBACK_UI_STATE,
                  function (i) {
                    t.$M(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.MUTED_STATE,
                  function (i) {
                    t.Cm(i);
                  },
                  !0
                ),
                this.eA.subscribe(Wi.UI_STATE, function (i) {
                  t.ko.mutate(function () {
                    return t.RA(i);
                  });
                }),
                this.RA(this.eA.get(Wi.UI_STATE)),
                this.eA.subscribe(
                  Wi.PAUSED_STATE,
                  function (i) {
                    t.KM(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.CURRENT_PAGE_INDEX,
                  function (i) {
                    t.JM(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.RTL_STATE,
                  function (i) {
                    t.B_(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.KEYBOARD_ACTIVE_STATE,
                  function (i) {
                    t.QM(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.PAGE_HAS_CAPTIONS_STATE,
                  function (i) {
                    return t.tI(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.CAPTIONS_STATE,
                  function (i) {
                    return t.iI(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.PAGE_HAS_AUDIO_STATE,
                  function (i) {
                    t.nI(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE,
                  function (i) {
                    t.rI(i);
                  },
                  !0
                ),
                this.eA.subscribe(Wi.SYSTEM_UI_IS_VISIBLE_STATE, function (i) {
                  t.Z_(i);
                }),
                this.eA.subscribe(Wi.NEW_PAGE_AVAILABLE_ID, function () {
                  t.oI();
                }),
                this.eA.subscribe(
                  Wi.VIEWER_CUSTOM_CONTROLS,
                  function (i) {
                    return t.aI(i);
                  },
                  !0
                );
            }),
            (i.getShadowRoot = function () {
              return this.CM;
            }),
            (i.XM = function (t) {
              t
                ? this.getShadowRoot().setAttribute(Wo, "")
                : this.getShadowRoot().removeAttribute(Wo);
            }),
            (i.qM = function (t) {
              var i = this;
              this.ko.mutate(function () {
                i.getShadowRoot().classList.toggle(
                  "i-amphtml-story-no-audio-ui",
                  !t
                );
              });
            }),
            (i.ZM = function (t) {
              var i = this;
              this.ko.mutate(function () {
                i.getShadowRoot().classList.toggle(
                  "i-amphtml-story-no-sharing",
                  !t
                );
              });
            }),
            (i.$M = function (t) {
              var i = this;
              this.ko.mutate(function () {
                i.getShadowRoot().classList.toggle(
                  "i-amphtml-story-has-playback-ui",
                  t
                );
              });
            }),
            (i.GM = function (t) {
              this.eA.dispatch(24, t);
            }),
            (i.nI = function (t) {
              var i = this;
              (t = t || !!this.eA.get(Wi.STORY_HAS_BACKGROUND_AUDIO_STATE)),
                this.ko.mutate(function () {
                  t
                    ? i.getShadowRoot().setAttribute(aa, "")
                    : i.getShadowRoot().removeAttribute(aa);
                });
            }),
            (i.tI = function (t) {
              Ot(this.CM, "i-amphtml-current-page-has-captions", t);
            }),
            (i.iI = function (t) {
              Ot(this.CM, "captions-on", t);
            }),
            (i.rI = function (t) {
              var i = this;
              this.ko.mutate(function () {
                v(
                  i
                    .getShadowRoot()
                    .querySelectorAll(".i-amphtml-paused-display button")
                ).forEach(function (i) {
                  i.disabled = !t;
                });
              });
            }),
            (i.Cm = function (t) {
              var i = this;
              this.ko.mutate(function () {
                t
                  ? i.getShadowRoot().setAttribute(Xo, "")
                  : i.getShadowRoot().removeAttribute(Xo);
              });
            }),
            (i.KM = function (t) {
              var i = this;
              this.ko.mutate(function () {
                t
                  ? i.getShadowRoot().setAttribute(qo, "")
                  : i.getShadowRoot().removeAttribute(qo);
              });
            }),
            (i.sI = function (t) {
              var i = this;
              this.RE && this.je.cancel(this.RE),
                (this.RE = this.je.delay(function () {
                  return i.eI(t);
                }, 1500));
            }),
            (i.eI = function (t) {
              var i = this;
              this.Fe &&
                this.ko.mutate(function () {
                  i.getShadowRoot().setAttribute(t, "noshow");
                });
            }),
            (i.RA = function (t) {
              var i = this.getShadowRoot();
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
            }),
            (i.Z_ = function (t) {
              var i = this;
              this.ko.mutate(function () {
                var n = i.getShadowRoot();
                n.classList.toggle("i-amphtml-story-hidden", !t),
                  v(n.querySelectorAll("button")).forEach(function (i) {
                    return (function (t, i) {
                      i
                        ? (t.removeAttribute("tab-index"),
                          t.removeAttribute("aria-hidden"))
                        : (t.setAttribute("tab-index", "-1"),
                          t.setAttribute("aria-hidden", "true"));
                    })(i, t);
                  });
              });
            }),
            (i.JM = function (t) {
              var i = this;
              this.ko.mutate(function () {
                var n = i.eA.get(Wi.PAGE_IDS).length - 1;
                i
                  .getShadowRoot()
                  .classList.toggle("i-amphtml-first-page-active", 0 === t),
                  i
                    .getShadowRoot()
                    .classList.toggle("i-amphtml-last-page-active", t === n);
              });
            }),
            (i.B_ = function (t) {
              var i = this;
              this.ko.mutate(function () {
                t
                  ? i.getShadowRoot().setAttribute("dir", "rtl")
                  : i.getShadowRoot().removeAttribute("dir");
              });
            }),
            (i.QM = function (t) {
              var i = this;
              this.ko.mutate(function () {
                i.getShadowRoot().classList.toggle(
                  "amp-mode-keyboard-active",
                  t
                );
              });
            }),
            (i.HM = function (t) {
              this.eA.dispatch(20, t);
            }),
            (i.VM = function (t) {
              this.eA.dispatch(Xi, t);
            }),
            (i.BM = function (t) {
              if ((t.preventDefault(), t.target[pa])) this.WM(t.target);
              else {
                var i = this.eA.get(Wi.SHARE_MENU_STATE);
                this.eA.dispatch(28, !i);
              }
            }),
            (i.WM = function (t) {
              var i = t[pa];
              this.UM &&
                this.UM.send("documentStateUpdate", {
                  state: "AMP_STORY_PLAYER_EVENT",
                  value: i,
                });
            }),
            (i.FM = function () {
              var t = this.eA.get(Wi.INFO_DIALOG_STATE);
              this.eA.dispatch(17, !t);
            }),
            (i.oI = function () {
              var t = this;
              this.ko.mutate(function () {
                t.getShadowRoot().setAttribute(ha, "show"), t.sI(ha);
              });
            }),
            (i.aI = function (t) {
              var i = this;
              t.length <= 0 ||
                t.forEach(function (t) {
                  if (t.name) {
                    var n,
                      r = la[t.name];
                    if (
                      (r && r.selector
                        ? (n = R(i.getShadowRoot(), r.selector))
                        : ((n = Dt("button", {
                            class: "i-amphtml-story-button",
                          })),
                          i.ko.mutate(function () {
                            i.DM.appendChild(n);
                          })),
                      i.ko.mutate(function () {
                        n.classList.add(ia);
                      }),
                      "hidden" === t.visibility &&
                        i.ko.mutate(function () {
                          n.classList.add("i-amphtml-story-ui-hide-button");
                        }),
                      (t.visibility && "visible" !== t.visibility) ||
                        i.ko.mutate(function () {
                          n.classList.remove("i-amphtml-story-ui-hide-button");
                        }),
                      "disabled" === t.state &&
                        i.ko.mutate(function () {
                          n.disabled = !0;
                        }),
                      "start" === t.position)
                    ) {
                      var o = i.CM.querySelector(
                        ".i-amphtml-story-system-layer-buttons-start-position"
                      );
                      i.ko.mutate(function () {
                        i.DM.removeChild(n), o.appendChild(n);
                      });
                    }
                    t.backgroundImageUrl &&
                      $(n, {
                        "background-image": "url('".concat(
                          t.backgroundImageUrl,
                          "')"
                        ),
                      }),
                      (n[pa] = "amp-story-player-".concat(t.name));
                  }
                });
            }),
            (i.updateProgress = function (t, i) {
              this.LM.updateProgress(t, i);
            }),
            t
          );
        })(),
        fa = "BACKGROUND-BLUR",
        da = (function () {
          function t(t, i) {
            (this.t = t),
              (this.Gn = i),
              (this.uI = null),
              (this.hI = null),
              (this.cI = this.t.document.createElement("canvas")),
              (this.cI.width = this.cI.height = 3),
              (this.xd = null),
              (this.lI = !0);
          }
          var i = t.prototype;
          return (
            (i.attach = function () {
              (this.hI = this.t.document.createElement("canvas")),
                (this.hI.width = this.hI.height = 3),
                $(this.hI, {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: 0,
                  top: 0,
                }),
                this.Gn.appendChild(this.hI);
            }),
            (i.detach = function () {
              this.Gn.removeChild(this.hI), cancelAnimationFrame(this.xd);
            }),
            (i.update = function (t) {
              (this.uI = this.mI(t)), this.fI(this.uI[0]);
            }),
            (i.fI = function (t) {
              var i = this;
              if (!t)
                return (
                  Wt().info(fa, "No amp-img or amp-video found."),
                  void this.pI()
                );
              this.dI(t).then(function (t) {
                if ("AMP-IMG" === t.tagName)
                  return i.vI(t)
                    ? void i.fI(i.yI(t))
                    : void i.pI(t.querySelector("img"));
                var n = t.querySelector("video");
                if (n.readyState >= 2) i.pI(n);
                else {
                  var r = t.getAttribute("poster");
                  if (!r)
                    return (
                      i.pI(),
                      void Wt().info(fa, 'No "poster" attribute on amp-video.')
                    );
                  var o = new Image();
                  (o.onload = function () {
                    return i.pI(o);
                  }),
                    (o.src = r);
                }
              });
            }),
            (i.vI = function (t) {
              if (!this.gI(t)) return !1;
              var i = t.querySelector("img"),
                n = this.t.document.createElement("canvas");
              n.width = n.height = 3;
              var r = n.getContext("2d");
              r.drawImage(i, 0, 0, 3, 3);
              for (
                var o = r.getImageData(0, 0, 3, 3).data, a = 0;
                a < o.length;
                a += 4
              )
                if (o[a + 3] < 255) return !0;
              return !1;
            }),
            (i.gI = function (t) {
              var i = t.getAttribute("src").toLowerCase();
              return i.includes(".png") || i.includes(".gif");
            }),
            (i.yI = function (t) {
              var i = this.uI.indexOf(t);
              return this.uI[i + 1];
            }),
            (i.dI = function (t) {
              return new Promise(function (i) {
                It(t)
                  .then(function () {
                    return t.signals().whenSignal(wt);
                  })
                  .then(function () {
                    i(t);
                  })
                  .catch(function () {
                    Wt().error(fa, "Failed to load the amp-img or amp-video.");
                  });
              });
            }),
            (i.pI = function (t) {
              var i,
                n = this;
              if ((this.bI(t), this.lI)) return this.xI(1), void (this.lI = !1);
              cancelAnimationFrame(this.xd),
                (this.xd = requestAnimationFrame(function t(r) {
                  i || (i = r);
                  var o = r - i;
                  if (o < 400) {
                    var a = o / 400;
                    n.xI(a), (n.xd = requestAnimationFrame(t));
                  }
                }));
            }),
            (i.xI = function (t) {
              var i = this.hI.getContext("2d");
              (i.globalAlpha = t), i.drawImage(this.cI, 0, 0, 3, 3);
            }),
            (i.bI = function (t) {
              var i = this.cI.getContext("2d");
              (i.fillStyle = "black"),
                i.fillRect(0, 0, 3, 3),
                t &&
                  (i.drawImage(t, 0, 0, 3, 3),
                  (i.fillStyle = "rgba(0, 0, 0, .3)"),
                  i.fillRect(0, 0, 3, 3));
            }),
            (i.mI = function (t) {
              var i = function (t) {
                if (!t) return !1;
                var i = t.getLayoutBox();
                return i.width * i.height;
              };
              return Array.from(
                j(
                  t,
                  "amp-story-grid-layer amp-img, amp-story-grid-layer amp-video"
                )
              ).sort(function (t, n) {
                return i(n) - i(t);
              });
            }),
            t
          );
        })(),
        va = "amp-story-state",
        ya = "ampStoryNavigationPath";
      function ga(t, i) {
        var n = So(t.history);
        return (
          (n && n[i]) ||
            (n = (function (t) {
              var i = t.location.hash;
              if (
                -1 == i.indexOf("page=") &&
                -1 == i.indexOf("ignoreLocalStorageHistory")
              ) {
                var n = ba(t),
                  r = n && n[xa(t)];
                return r && r.state;
              }
            })(t)),
          (n && n[i]) || null
        );
      }
      function ba(t) {
        var i = (function (t) {
          try {
            return At(t.localStorage.getItem(va));
          } catch (t) {
            return null;
          }
        })(t);
        if (!i) return {};
        var n = Date.now(),
          r = !1;
        return (
          Object.keys(i).forEach(function (t) {
            var o = i[t];
            n > o.time + 6e5 && (delete i[t], (r = !0));
          }),
          r && wa(t, i),
          i
        );
      }
      function xa(t) {
        return t.location.href.replace(/\#.*/, "");
      }
      function wa(t, i) {
        try {
          t.localStorage.setItem(va, JSON.stringify(i));
        } catch (t) {}
      }
      var ka = (function () {
          function t(t) {
            (this.wI = t),
              (this.tr = this.wI.getAmpDoc()),
              (this.fA = t.element),
              (this.eA = Gi(this.wI.win));
          }
          var i = t.prototype;
          return (
            (i.build = function () {
              var t = this,
                i = Dt("amp-live-list", {
                  id: "i-amphtml-" + this.fA.id + "-dynamic-list",
                  "data-poll-interval":
                    this.fA.getAttribute("data-poll-interval") || 15e3,
                  sort: "ascending",
                  "disable-scrolling": !0,
                  "disable-pagination": !0,
                  "auto-insert": !0,
                });
              (i.AMP_LIVE_LIST_CUSTOM_SLOT_ID = $t(
                this.fA.id,
                "amp-story must contain id to use the live story functionality"
              )),
                this.wI.element
                  .signals()
                  .whenSignal(wt)
                  .then(function () {
                    Ai(t.tr.win).installExtensionForDoc(t.tr, "amp-live-list"),
                      t.fA.insertBefore(i, t.fA.firstElementChild);
                  });
            }),
            (i.update = function () {
              var t = U(this.fA, function (t) {
                  return t.classList.contains("amp-live-list-item-new");
                }),
                i = this.fA.querySelectorAll("amp-story-page"),
                n = Array.prototype.map.call(i, function (t) {
                  return t.id;
                });
              this.eA.dispatch(11, n), this.eA.dispatch(2, t.id);
            }),
            t
          );
        })(),
        Aa = {
          className: "i-amphtml-story-back-prev",
          triggers: Ji,
          label: "93",
        },
        Ta = {
          className: "i-amphtml-story-fwd-next",
          triggers: Qi,
          label: "91",
        },
        Sa = {
          className: "i-amphtml-story-fwd-next",
          triggers: Qi,
          label: "90",
        },
        za = {
          className: "i-amphtml-story-fwd-replay",
          triggers: nn,
          label: "92",
        },
        Ea = (function () {
          function t(t, i, n, r) {
            var o = this;
            (this.zi = i),
              (this.tp = t),
              (this.element = (function (t, i) {
                return Dt(
                  "div",
                  {
                    onClick: function (t) {
                      return o.G_(t);
                    },
                    class: "i-amphtml-story-button-container ".concat(
                      t.className
                    ),
                  },
                  Dt("button", {
                    class: "i-amphtml-story-button-move",
                    "i-amphtml-i18n-aria-label": t.label,
                  })
                );
              })(i)),
              ur(this.element, t),
              (this.kI = Zt(this.element.firstElementChild)),
              (this.eA = n),
              (this.t = r),
              (this.Ph = Ti(t));
          }
          var i = t.prototype;
          return (
            (i.updateState = function (t) {
              var i = this;
              t !== this.zi &&
                (this.Ph.mutateElement(this.element, function () {
                  i.element.classList.remove(i.zi.className),
                    i.element.classList.add(t.className),
                    (i.zi = t);
                }),
                Ei(this.tp)
                  .getLocalizedStringAsync(t.label)
                  .then(function (t) {
                    return i.kI.setAttribute("aria-label", t);
                  }));
            }),
            (i.getState = function () {
              return this.zi;
            }),
            (i.setEnabled = function (t) {
              var i = this;
              this.Ph.mutateElement(this.element, function () {
                i.element.classList.toggle("i-amphtml-story-button-hidden", !t),
                  Ot(i.element.querySelector("button"), "disabled", !t);
              });
            }),
            (i.G_ = function (t) {
              t.preventDefault(),
                this.eA.dispatch(7, gn),
                this.zi.triggers
                  ? an(this.t, this.element, Zt(this.zi.triggers), void 0, {
                      bubbles: !0,
                    })
                  : this.zi.action &&
                    this.eA.dispatch(this.zi.action, this.zi.data);
            }),
            t
          );
        })(),
        Pa = (function () {
          function t(t) {
            this.wI = t;
            var i = this.wI.win,
              n = i.document;
            (this.eA = Gi(i)),
              (this.AI = new Ea(n, Ta, this.eA, i)),
              (this.TI = new Ea(n, Aa, this.eA, i)),
              this.AI.element.classList.add("next-container"),
              this.TI.element.classList.add("prev-container"),
              this.uA(),
              this.wI.element.appendChild(this.AI.element),
              this.wI.element.appendChild(this.TI.element);
          }
          var i = t.prototype;
          return (
            (i.uA = function () {
              var t = this;
              this.eA.subscribe(Wi.CURRENT_PAGE_INDEX, function (i) {
                t.SI(i);
              }),
                this.eA.subscribe(
                  Wi.PAGE_IDS,
                  function () {
                    var i = Number(t.eA.get(Wi.CURRENT_PAGE_INDEX));
                    t.SI(i);
                  },
                  !0
                ),
                this.eA.subscribe(Wi.SYSTEM_UI_IS_VISIBLE_STATE, function (i) {
                  return t.Z_(i);
                });
            }),
            (i.SI = function (t) {
              var i = this.eA.get(Wi.PAGE_IDS).length;
              this.TI.setEnabled(t > 0),
                t < i - 1
                  ? this.AI.updateState(Ta)
                  : _i(this.wI.element).hasCapability("swipe")
                  ? this.AI.updateState(Sa)
                  : this.AI.updateState(za);
            }),
            (i.Z_ = function (t) {
              this.TI.setEnabled(t), this.AI.setEnabled(t);
            }),
            t
          );
        })(),
        Ma = (function () {
          function t(t, i, n) {
            var r = this;
            (this.je = Pi(t)),
              (this.ze = i),
              (this.Ue = n || 0),
              (this.Le = -1),
              (this.He = 0),
              (this.Vn = !1),
              (this.Ge = function () {
                r.Ve();
              });
          }
          var i = t.prototype;
          return (
            (i.isPending = function () {
              return -1 != this.Le;
            }),
            (i.schedule = function (t) {
              var i = t || this.Ue;
              this.Vn && i < 10 && (i = 10);
              var n = Date.now() + i;
              return (
                (!this.isPending() || n - this.He < -10) &&
                (this.cancel(),
                (this.He = n),
                (this.Le = this.je.delay(this.Ge, i)),
                !0)
              );
            }),
            (i.Ve = function () {
              (this.Le = -1),
                (this.He = 0),
                (this.Vn = !0),
                this.ze(),
                (this.Vn = !1);
            }),
            (i.cancel = function () {
              this.isPending() && (this.je.cancel(this.Le), (this.Le = -1));
            }),
            t
          );
        })(),
        Oa = "__AMP_Gestures",
        _a = function (t, i, n, r) {
          (this.type = t), (this.data = i), (this.time = n), (this.event = r);
        },
        Ia = (function () {
          function t(t) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (this.Gn = t),
              (this.EI = []),
              (this.Ag = []),
              (this.ki = []),
              (this.OI = []),
              (this._I = null);
            var r = t.ownerDocument.defaultView,
              o = ji(r);
            (this.MI = i || o),
              (this.II = n),
              (this.zI = !1),
              (this.Ve = new Ma(vt(t), this.ad.bind(this))),
              (this.NI = new Hi()),
              (this.RI = Object.create(null)),
              (this.jI = this.Wp.bind(this)),
              (this.CI = this.Qp.bind(this)),
              (this.DI = this.Kp.bind(this)),
              (this.LI = this.Mg.bind(this)),
              this.Gn.addEventListener(
                "touchstart",
                this.jI,
                !!o && { passive: !0 }
              ),
              this.Gn.addEventListener("touchend", this.CI),
              this.Gn.addEventListener(
                "touchmove",
                this.DI,
                !!o && { passive: !0 }
              ),
              this.Gn.addEventListener("touchcancel", this.LI),
              (this.UI = !1);
          }
          t.get = function (i) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = i[Oa];
            return o || ((o = new t(i, n, r)), (i[Oa] = o)), o;
          };
          var i = t.prototype;
          return (
            (i.cleanup = function () {
              this.Gn.removeEventListener("touchstart", this.jI),
                this.Gn.removeEventListener("touchend", this.CI),
                this.Gn.removeEventListener("touchmove", this.DI),
                this.Gn.removeEventListener("touchcancel", this.LI),
                delete this.Gn[Oa],
                this.Ve.cancel();
            }),
            (i.onGesture = function (t, i) {
              var n = new t(this),
                r = n.getType(),
                o = this.RI[r];
              return (
                o || (this.EI.push(n), (o = new Hi()), (this.RI[r] = o)),
                o.add(i)
              );
            }),
            (i.removeGesture = function (t) {
              var i = new t(this).getType(),
                n = this.RI[i];
              if (n) {
                n.removeAll();
                var r = g(this.EI, function (t) {
                  return t.getType() == i;
                });
                return !(
                  r < 0 ||
                  (this.EI.splice(r, 1),
                  this.ki.splice(r, 1),
                  this.OI.splice(r, 1),
                  this.Ag.splice(r, 1),
                  delete this.RI[i],
                  0)
                );
              }
              return !1;
            }),
            (i.onPointerDown = function (t) {
              return this.NI.add(t);
            }),
            (i.Wp = function (t) {
              var i = Date.now();
              (this.zI = !1), this.NI.fire(t);
              for (var n = 0; n < this.EI.length; n++)
                this.ki[n] ||
                  (this.OI[n] && this.OI[n] < i && this.Tg(n),
                  this.EI[n].onTouchStart(t) && this.Sg(n));
              this.YI(t);
            }),
            (i.Kp = function (t) {
              for (var i = Date.now(), n = 0; n < this.EI.length; n++)
                this.Ag[n] &&
                  (this.OI[n] && this.OI[n] < i
                    ? this.Tg(n)
                    : this.EI[n].onTouchMove(t) || this.Tg(n));
              this.YI(t);
            }),
            (i.Qp = function (t) {
              for (var i = Date.now(), n = 0; n < this.EI.length; n++)
                if (this.Ag[n])
                  if (this.OI[n] && this.OI[n] < i) this.Tg(n);
                  else {
                    this.EI[n].onTouchEnd(t);
                    var r = !this.OI[n],
                      o = this.OI[n] < i;
                    this._I == this.EI[n] || (!r && !o) || this.Tg(n);
                  }
              this.YI(t);
            }),
            (i.Mg = function (t) {
              for (var i = 0; i < this.EI.length; i++) this.HI(i);
              this.YI(t);
            }),
            (i.Zp = function (t, i) {
              if (this._I) t.acceptCancel();
              else {
                for (var n = Date.now(), r = 0; r < this.EI.length; r++)
                  this.EI[r] == t && ((this.ki[r] = n + i), (this.OI[r] = 0));
                this.UI = !0;
              }
            }),
            (i.VI = function (t, i) {
              if (this._I) t.acceptCancel();
              else
                for (var n = Date.now(), r = 0; r < this.EI.length; r++)
                  this.EI[r] == t && (this.OI[r] = n + i);
            }),
            (i.GI = function (t) {
              this._I == t && ((this._I = null), (this.zI = !0));
            }),
            (i.BI = function (t, i, n) {
              A(this._I == t);
              var r = this.RI[t.getType()];
              r && r.fire(new _a(t.getType(), i, Date.now(), n));
            }),
            (i.YI = function (t) {
              var i = !!this._I || this.zI;
              if (((this.zI = !1), !i))
                for (var n = Date.now(), r = 0; r < this.EI.length; r++)
                  if (this.ki[r] || (this.OI[r] && this.OI[r] >= n)) {
                    i = !0;
                    break;
                  }
              i
                ? (t.stopPropagation(), this.MI || t.preventDefault())
                : this.II && t.stopPropagation(),
                this.UI && ((this.UI = !1), this.ad());
            }),
            (i.ad = function () {
              for (var t = Date.now(), i = -1, n = 0; n < this.EI.length; n++)
                this.ki[n]
                  ? (-1 == i || this.ki[n] > this.ki[i]) && (i = n)
                  : this.OI[n] && this.OI[n] < t && this.Tg(n);
              if (-1 != i) {
                for (var r = 0, o = 0; o < this.EI.length; o++)
                  !this.ki[o] &&
                    this.Ag[o] &&
                    (r = Math.max(r, this.OI[o] - t));
                r < 2 ? this.FI(i) : this.Ve.schedule(r);
              }
            }),
            (i.FI = function (t) {
              for (var i = this.EI[t], n = 0; n < this.EI.length; n++)
                n != t && this.HI(n);
              (this.ki[t] = 0),
                (this.OI[t] = 0),
                (this._I = i),
                i.acceptStart();
            }),
            (i.Sg = function (t) {
              (this.Ag[t] = !0), (this.OI[t] = 0);
            }),
            (i.Tg = function (t) {
              (this.Ag[t] = !1),
                (this.OI[t] = 0),
                this.ki[t] || this.EI[t].acceptCancel();
            }),
            (i.HI = function (t) {
              (this.ki[t] = 0), this.Tg(t);
            }),
            t
          );
        })(),
        Na = (function () {
          function t(t, i) {
            (this.WI = t), (this.Uy = i);
          }
          var i = t.prototype;
          return (
            (i.getType = function () {
              return this.WI;
            }),
            (i.signalReady = function (t) {
              this.Uy.Zp(this, t);
            }),
            (i.signalPending = function (t) {
              this.Uy.VI(this, t);
            }),
            (i.signalEnd = function () {
              this.Uy.GI(this);
            }),
            (i.signalEmit = function (t, i) {
              this.Uy.BI(this, t, i);
            }),
            (i.acceptStart = function () {}),
            (i.acceptCancel = function () {}),
            (i.onTouchStart = function (t) {
              return !1;
            }),
            (i.onTouchMove = function (t) {
              return !1;
            }),
            (i.onTouchEnd = function (t) {}),
            t
          );
        })();
      function Ra(t, i, n) {
        i < 1 && (i = 1);
        var r = t / i,
          o = 0.5 + Math.min(i / 33.34, 0.5);
        return r * o + n * (1 - o);
      }
      Math.round(-16.67 / Math.log(0.95));
      var ja,
        Ca = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            return i.call(this, "swipe-xy", t, !0, !0);
          }
          return n;
        })(
          (function (t) {
            m(n, t);
            var i = f(n);
            function n(t, n, r, o) {
              var a;
              return (
                ((a = i.call(this, t, n)).XI = r),
                (a.qI = o),
                (a._I = !1),
                (a.ZI = 0),
                (a.$I = 0),
                (a.KI = 0),
                (a.JI = 0),
                (a.QI = 0),
                (a.tz = 0),
                (a.ca = 0),
                (a.iz = 0),
                (a.nz = 0),
                (a.rz = 0),
                (a.oz = 0),
                a
              );
            }
            var r = n.prototype;
            return (
              (r.onTouchStart = function (t) {
                var i = t.touches;
                return (
                  !!(this._I && i && i.length > 1) ||
                  (!(!i || 1 != i.length) &&
                    ((this.ca = Date.now()),
                    (this.ZI = i[0].clientX),
                    (this.$I = i[0].clientY),
                    !0))
                );
              }),
              (r.onTouchMove = function (t) {
                var i = t.touches;
                if (i && i.length >= 1) {
                  var n = i[0],
                    r = n.clientX,
                    o = n.clientY;
                  if (((this.KI = r), (this.JI = o), this._I))
                    this.az(!1, !1, t);
                  else {
                    var a = Math.abs(r - this.ZI),
                      e = Math.abs(o - this.$I);
                    if (this.XI && this.qI)
                      (a >= 8 || e >= 8) && this.signalReady(-10);
                    else if (this.XI) {
                      if (a >= 8 && a > e) this.signalReady(-10);
                      else if (e >= 8) return !1;
                    } else {
                      if (!this.qI) return !1;
                      if (e >= 8 && e > a) this.signalReady(-10);
                      else if (a >= 8) return !1;
                    }
                  }
                  return !0;
                }
                return !1;
              }),
              (r.onTouchEnd = function (t) {
                var i = t.touches;
                i && 0 == i.length && this.sz(t);
              }),
              (r.acceptStart = function () {
                (this._I = !0),
                  (this.QI = this.ZI),
                  (this.tz = this.$I),
                  (this.nz = this.ca),
                  (this.ZI = this.KI),
                  (this.$I = this.JI),
                  this.az(!0, !1, null);
              }),
              (r.acceptCancel = function () {
                this._I = !1;
              }),
              (r.az = function (t, i, n) {
                this.iz = Date.now();
                var r = this.iz - this.nz;
                if ((!i && r > 4) || (i && r > 16)) {
                  var o = Ra(this.KI - this.QI, r, this.rz),
                    a = Ra(this.JI - this.tz, r, this.oz);
                  (!i || r > 32 || 0 != o || 0 != a) &&
                    ((this.rz = Math.abs(o) > 1e-4 ? o : 0),
                    (this.oz = Math.abs(a) > 1e-4 ? a : 0)),
                    (this.QI = this.KI),
                    (this.tz = this.JI),
                    (this.nz = this.iz);
                }
                this.signalEmit(
                  {
                    first: t,
                    last: i,
                    time: this.iz,
                    deltaX: this.KI - this.ZI,
                    deltaY: this.JI - this.$I,
                    startX: this.ZI,
                    startY: this.$I,
                    lastX: this.KI,
                    lastY: this.JI,
                    velocityX: this.rz,
                    velocityY: this.oz,
                  },
                  n
                );
              }),
              (r.sz = function (t) {
                this._I &&
                  ((this._I = !1), this.az(!1, !0, t), this.signalEnd());
              }),
              n
            );
          })(Na)
        ),
        Da = "ad-showing",
        La = "auto-advance-to",
        Ua = "muted",
        Ya = "i-amphtml-return-to",
        Ha = "i-amphtml-visited",
        Va = (d((ja = {}), oo, 4), d(ja, ao, 8), ja),
        Ba = "amp-story",
        Fa = (function (t) {
          m(n, t);
          var i = f(n);
          function n(t) {
            var n, r;
            return (
              ((n = i.call(this, t)).eA = Gi(n.win)),
              "rtl" ==
                ((r = n.win.document).body.getAttribute("dir") ||
                  r.documentElement.getAttribute("dir") ||
                  "ltr") && n.eA.dispatch(27, !0),
              (n.gA = bn(n.win, n.element)),
              (n.fP = fo.forElement(n.win, n.element)),
              n.fP.start(),
              (n.ko = n.getVsync()),
              (n.ez = new ca(n.win, n.element)),
              new nr(n.win, n.element),
              (n.uz = []),
              (n.hz = []),
              (n.cA = cn(n.win)),
              (n.cz = null),
              (n.lz = n.win.matchMedia(
                "(min-aspect-ratio: ".concat("31 / 40", ")")
              )),
              (n.mz = n.win.matchMedia(
                "(min-width: ".concat(550, "px) and ") +
                  "(min-height: ".concat(1024, "px)")
              )),
              (n.fz = n.win.matchMedia("(orientation: landscape)")),
              (n.pz = null),
              (n.dz = new No(n.win, n.element)),
              (n.vz = mo.for(h(n))),
              (n.je = Pi(n.win)),
              (n.Uo = zi(n.win)),
              (n.ls = null),
              (n.UM = null),
              (n.yz = null),
              (n.gz = null),
              (n.bz = null),
              (n.xz = null),
              (n.wz = !1),
              (n.kz = null),
              (n.Az = new e()),
              (n.Tz = null),
              (n.Sz = -1),
              (n.Ez = new e()),
              (n.Pz = null),
              n
            );
          }
          n.prerenderAllowed = function () {
            return !0;
          };
          var r = n.prototype;
          return (
            (r.buildCallback = function () {
              var t,
                i,
                n = this;
              (this.ls = _i(this.element)),
                !(
                  (null !== (t = this.win.CSS) &&
                    void 0 !== t &&
                    null !== (i = t.supports) &&
                    void 0 !== i &&
                    i.call(t, "height: 1dvh")) ||
                  (function (t, i, n) {
                    var r = Z(t.style, "--story-dvh", void 0);
                    if (r)
                      return st(r) ? t.style.getPropertyValue(r) : t.style[r];
                  })(this.win.document.documentElement)
                ) &&
                  (this.Oz(this.getViewport().getSize()),
                  this.getViewport().onResize(function (t) {
                    return n.Oz(t);
                  })),
                (this.UM = this.ls.isEmbedded()
                  ? new Uo(this.win, this.ls)
                  : null),
                (this.Pz = this._z()),
                this.Mz(),
                this.Iz() && this.zz(),
                this.mutateElement(function () {});
              var r = this.Nz();
              r &&
                this.element
                  .querySelector("amp-story-page#".concat(O(r)))
                  .setAttribute("active", ""),
                this.uA(),
                this.Rz(),
                this.jz(),
                (this.xz = this.Cz()),
                this.eA.dispatch(34, this.xz),
                this.Dz() &&
                  this.win.document.documentElement.setAttribute(
                    "data-story-supports-landscape",
                    ""
                  ),
                this.Uo.isBot() || this.element.removeAttribute("title"),
                (function (t, i) {
                  for (var n = [], r = t.firstChild; r; r = r.nextSibling)
                    r.nodeType === Node.TEXT_NODE && n.push(r);
                  return n;
                })(this.element).forEach(function (t) {
                  n.element.removeChild(t);
                }),
                li(this.win, "amp-story-branching") &&
                  this.registerAction("goToPage", function (t) {
                    var i = t.args;
                    i && (n.eA.dispatch(7, "goToPageAction"), n.I_(i.id, ko));
                  });
              var o = Si(this.win);
              (li(this.win, "story-disable-animations-first-page") ||
                Bi(this.win) ||
                mr(this.win) ||
                Zn(this.getAmpDoc())) &&
                o.addEnabledExperiment("story-disable-animations-first-page");
              var a = this.getAmpDoc().getRootNode().documentElement,
                e = a.querySelector(
                  'style[amp-extension="amp-story"][i-amphtml-version]'
                ),
                s = a.querySelector(
                  'link[amp-extension="amp-story"][rel=stylesheet]'
                );
              e
                ? o.addEnabledExperiment("story-inline-css")
                : s && o.addEnabledExperiment("story-link-css"),
                li(this.win, "story-load-inactive-outside-viewport") &&
                  (o.addEnabledExperiment(
                    "story-load-inactive-outside-viewport"
                  ),
                  this.element.classList.add(
                    "i-amphtml-experiment-story-load-inactive-outside-viewport"
                  )),
                this.Lz();
            }),
            (r.cj = function () {
              this.Uz(),
                this.eA.get(Wi.MUTED_STATE) || this.Yz(),
                "inactive" === this.getAmpDoc().getVisibilityState() &&
                  (this.cz.setState(0),
                  this.cz.element.setAttribute("active", ""));
            }),
            (r.KP = function () {
              this.Vz(), this.eA.get(Wi.MUTED_STATE) || this.Gz();
            }),
            (r.Uz = function () {
              null === this.yz && (this.yz = !!this.eA.get(Wi.PAUSED_STATE)),
                this.eA.dispatch(Xi, !0);
            }),
            (r.Vz = function () {
              this.eA.dispatch(Xi, this.yz), (this.yz = null);
            }),
            (r.zz = function () {
              this.Bz(), this.onResizeDebounced();
            }),
            (r.Rz = function () {
              for (
                var t = this.element.querySelectorAll("amp-story-page"),
                  i = v(t).map(function (t) {
                    return t.id || "default-page";
                  }),
                  n = w(),
                  r = 0;
                r < i.length;
                r++
              )
                if (void 0 !== n[i[r]]) {
                  Wt().error(Ba, "Duplicate amp-story-page ID ".concat(i[r]));
                  var o = "".concat(i[r], "__").concat(++n[i[r]]);
                  (t[r].id = o), (i[r] = o);
                } else n[i[r]] = 0;
              this.eA.dispatch(11, i);
            }),
            (r.Fz = function () {
              if (!this.wz) {
                this.wz = !0;
                var t = this.win.document.querySelector("style[amp-custom]");
                t &&
                  (t.textContent = t.textContent.replace(
                    /(-?[\d.]+)v(w|h|min|max)/gim,
                    "calc($1 * var(--story-page-v$2))"
                  ));
              }
            }),
            (r.Wz = function () {
              if (!this.win.document.querySelector("meta[name=theme-color]")) {
                var t = this.win.document.createElement("meta"),
                  i = this.element.querySelector("amp-story-page");
                (t.name = "theme-color"),
                  (t.content =
                    et(this.win, this.element).getPropertyValue(
                      "--primary-color"
                    ) ||
                    et(this.win, i).getPropertyValue("background-color") ||
                    "#202125"),
                  this.win.document.head.appendChild(t);
              }
            }),
            (r.Xz = function (t, i) {
              this.qz(),
                this.Zz(),
                this.element.appendChild(this.ez.build(t, i));
            }),
            (r.uA = function () {
              var t = this;
              this.element.addEventListener(Qi, function () {
                t.ss();
              }),
                this.element.addEventListener(Ji, function () {
                  t.am();
                }),
                this.eA.subscribe(
                  Wi.MUTED_STATE,
                  function (i) {
                    t.Cm(i), t.cA.onVariableUpdate(mn, i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.MUTED_STATE,
                  function (i) {
                    t.gA.triggerEvent(
                      i ? "story-audio-muted" : "story-audio-unmuted"
                    );
                  },
                  !1
                ),
                this.eA.subscribe(Wi.ADVANCEMENT_MODE, function (i) {
                  t.cA.onVariableUpdate(ln, i);
                }),
                this.eA.subscribe(
                  Wi.CAN_SHOW_AUDIO_UI,
                  function (i) {
                    t.element.classList.toggle(
                      "i-amphtml-story-no-audio-ui",
                      !i
                    );
                  },
                  !0
                ),
                this.element.addEventListener(Ki, function (i) {
                  t.getAmpDoc().isPreview() && t.$z(),
                    t.I_(Li(i).targetPageId, Li(i).direction),
                    t.dz.hideAllNavigationHint();
                }),
                this.element.addEventListener(tn, function (i) {
                  var n = Li(i),
                    r = n.pageId,
                    o = n.progress;
                  if (r === t.cz.element.id) {
                    var a = ci(t.win, fi);
                    (!t.cz.isAd() || (a && a != di)) &&
                      t.ez.updateProgress(r, o);
                  }
                }),
                this.element.addEventListener(nn, function () {
                  t.bM();
                }),
                this.element.addEventListener(rn, function () {
                  t.Kz();
                }),
                this.element.addEventListener(on, function () {
                  t.Jz();
                }),
                this.fP.addOnTapNavigationListener(function (i) {
                  t.Qz(i);
                }),
                this.element.addEventListener(
                  "ampstory:dispatchaction",
                  function (t) {}
                ),
                this.eA.subscribe(
                  Wi.ACTIONS_ALLOWLIST,
                  function (i) {
                    xi(t.element).setAllowlist(i);
                  },
                  !0
                ),
                this.eA.subscribe(Wi.AD_STATE, function (i) {
                  t.XM(i);
                }),
                this.eA.subscribe(Wi.PAUSED_STATE, function (i) {
                  t.KM(i);
                }),
                this.eA.subscribe(
                  Wi.UI_STATE,
                  function (i) {
                    t.RA(i);
                  },
                  !0
                ),
                this.eA.subscribe(
                  Wi.SUBSCRIPTIONS_PAGE_INDEX,
                  function (i) {
                    -1 !== i && (t.Ez.resolve(), (t.Sz = i));
                  },
                  !0
                ),
                this.eA.subscribe(Wi.SUBSCRIPTIONS_STATE, function (i) {
                  1 !== i && (t.Az.resolve(), 2 === i && t.tN());
                }),
                this.eA.subscribe(
                  Wi.SUBSCRIPTIONS_DIALOG_UI_STATE,
                  function (i) {
                    i || t.iN();
                  }
                ),
                this.win.document.addEventListener(
                  "keydown",
                  function (i) {
                    t.Df(i);
                  },
                  !0
                ),
                this.win.document.addEventListener("contextmenu", function (i) {
                  0 === t.eA.get(Wi.UI_STATE) &&
                    (t.nN(i.target) || i.preventDefault(), i.stopPropagation());
                }),
                this.getAmpDoc().onVisibilityChanged(function () {
                  return t._f();
                }),
                this.win.addEventListener("hashchange", function () {
                  var i = ft(t.win.location.hash).page;
                  if (i && t.rN(i)) {
                    t.I_(i, ko);
                    var n,
                      r,
                      o = t.win.location.href.replace(
                        new RegExp("page=".concat(i, "&?")),
                        ""
                      );
                    (r = (n = o).length - "#".length) >= 0 &&
                      n.indexOf("#", r) == r &&
                      (o = o.slice(0, -1)),
                      t.win.history.replaceState(
                        (t.win.history && So(t.win.history)) || {},
                        t.win.document.title,
                        o
                      );
                  }
                }),
                new this.win.MutationObserver(function (i) {
                  return t.oN(i);
                }).observe(this.win.document.body, {
                  attributes: !0,
                  attributeFilter: ["class"],
                }),
                this.getViewport().onResize(
                  Ut(
                    this.win,
                    function () {
                      return t.onResizeDebounced();
                    },
                    300
                  )
                ),
                this.aN(),
                this.ls.onMessage("selectPage", function (i) {
                  return t.sN(i);
                }),
                this.ls.onMessage("rewind", function () {
                  return t.eN();
                }),
                this.UM && this.UM.startListening(),
                new jo(this.win, this.element);
            }),
            (r.oN = function (t) {
              var i = this;
              t.forEach(function (t) {
                var n = t.target;
                i.eA.dispatch(
                  19,
                  n.classList.contains("amp-mode-keyboard-active")
                );
              });
            }),
            (r.aN = function () {
              var t = this;
              if (!this.ls.hasCapability("swipe")) {
                var i = this.element;
                Ia.get(i, !0).onGesture(Ca, function (i) {
                  var n = i.data,
                    r = n.deltaX,
                    o = n.deltaY;
                  0 === t.eA.get(Wi.INTERACTIVE_COMPONENT_STATE).state &&
                  t.eA.get(Wi.SYSTEM_UI_IS_VISIBLE_STATE) &&
                  t.eA.get(Wi.CAN_SHOW_NAVIGATION_OVERLAY_HINT)
                    ? (i.event && i.event.defaultPrevented) ||
                      !t.uN(r, o) ||
                      t.dz.showNavigationOverlay()
                    : i.event &&
                      !1 !== i.event.cancelable &&
                      i.event.preventDefault();
                });
              }
            }),
            (r.uN = function (t, i) {
              return Math.abs(t) >= 50 || -1 * i >= 50;
            }),
            (r.Bz = function () {
              var t = this.win.document;
              $(t.documentElement, { overflow: "hidden" }),
                $(t.body, { overflow: "hidden" }),
                this.getViewport().resetTouchZoom(),
                this.getViewport().disableTouchZoom(),
                this.hN();
            }),
            (r.hN = function () {
              var t,
                i = this.win.screen;
              if (i && this.mz.matches) {
                var n = function (t) {
                    return qt().warn(
                      Ba,
                      "Failed to lock screen orientation:",
                      t.message
                    );
                  },
                  r =
                    null === (t = i.orientation) || void 0 === t
                      ? void 0
                      : t.lock;
                if (r) r("portrait").catch(n);
                else {
                  var o =
                    i.lockOrientation ||
                    i.mozLockOrientation ||
                    i.msLockOrientation ||
                    function (t) {};
                  try {
                    o("portrait");
                  } catch (t) {
                    n(t);
                  }
                }
              }
            }),
            (r.layoutCallback = function () {
              return n.isBrowserSupported(this.win) || this.Uo.isBot()
                ? this.cN()
                : this.lN();
            }),
            (r.cN = function () {
              var t = this,
                i = this.Nz(),
                n = "1" !== this.ls.getParam("hideProgressBar");
              n || this.eA.dispatch(qi, !1), this.Xz(i, n), this.Wz();
              var r = Promise.all([
                this.mN(),
                this.getAmpDoc().whenFirstPreviewedOrVisible(),
              ])
                .then(function () {
                  t.fN(),
                    t.uz.forEach(function (i, n) {
                      i.setState(0), t.pN(i, n);
                    }),
                    t.dN(),
                    t.eA.get(Wi.CAN_SHOW_PAGINATION_BUTTONS) && new Pa(t);
                })
                .then(function () {
                  return (
                    li(t.win, "amp-story-subscriptions") &&
                      null !==
                        t.element.querySelector("amp-story-subscriptions") &&
                      0 === t.eA.get(Wi.SUBSCRIPTIONS_STATE) &&
                      t.eA.dispatch(32, 1),
                    t.I_(t.Nz(), ko)
                  );
                })
                .then(function () {
                  if (
                    ga(t.win, "ampStoryAttachmentPageId") === t.cz.element.id
                  ) {
                    var i = t.cz.element.querySelector(
                      "amp-story-page-attachment, amp-story-page-outlink"
                    );
                    i &&
                      It(i)
                        .then(function () {
                          return i.getImpl();
                        })
                        .then(function (t) {
                          return t.open(!1);
                        });
                    var n = ga(t.win, "ampStoryShoppingData");
                    n && t.eA.dispatch(4, { activeProductData: n });
                  }
                  Fn(Zt(t.ls), t.eA) && new Ro(t.win, t.element).build();
                });
              this.vN(8e3).then(function () {
                t.yN(), t.gN();
              }),
                this.bN();
              var o = this.element.querySelector(
                "amp-story-page#".concat(O(i))
              );
              return this.getAmpDoc().hasBeenVisible()
                ? r
                : It(o).then(function () {
                    return o.build();
                  });
            }),
            (r.gN = function () {
              var t = this;
              this.element.hasAttribute("live-story") &&
                ((this.gz = new ka(this)),
                this.gz.build(),
                this.eA.dispatch(5, [
                  { tagOrTarget: "AMP-LIVE-LIST", method: "update" },
                ]),
                this.element.addEventListener("amp:dom-update", function () {
                  t.gz.update(),
                    t.mN().then(function () {
                      return t.xN();
                    });
                }));
            }),
            (r.Nz = function () {
              var t = ft(this.win.location.hash).page;
              if (t && this.rN(t)) return t;
              var i,
                n = (i = ga(this.win, ya) || [])[i.length - 1];
              if (n && this.rN(n)) return n;
              var r = this.element.querySelector("amp-story-page");
              return r ? r.id : null;
            }),
            (r.rN = function (t) {
              return this.uz.length > 0
                ? this.uz.some(function (i) {
                    return i.element.id === t;
                  })
                : !!this.element.querySelector("#".concat(O(t)));
            }),
            (r.vN = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                i = this.element.querySelector(
                  "amp-story-page#".concat(O(this.Nz()))
                ),
                n = It(i).then(function () {
                  return i.signals().whenSignal(wt);
                });
              return this.je.timeoutPromise(t, n).catch(function () {});
            }),
            (r.yN = function () {
              var t = this;
              an(this.win, this.element, "ampstory:load", void 0, {
                bubbles: !0,
              }),
                this.UM && this.UM.send("storyContentLoaded", {}),
                this.gA.triggerEvent("story-content-loaded"),
                this.signals().signal("ini-load"),
                this.mutateElement(function () {
                  t.element.classList.add("i-amphtml-story-loaded");
                });
            }),
            (r.fN = function () {
              var t = this.element.querySelector("amp-consent");
              t && (this.wN(), this.kN(t));
            }),
            (r.wN = function () {
              var t = this,
                i = this.getConsentPolicy() || "default",
                n = (function (t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "default";
                  return Mi(t).then(function (t) {
                    return t ? t.whenPolicyResolved(i) : null;
                  });
                })(this.element, i);
              n &&
                (this.eA.dispatch(Xi, !0),
                n.then(function () {
                  t.eA.dispatch(Xi, !1);
                }));
            }),
            (r.kN = function (t) {
              Y(t, "amp-story-consent") ||
                Wt().error(
                  Ba,
                  "amp-consent must have an amp-story-consent child"
                );
              var i = ["SCRIPT", "AMP-STORY-CONSENT"],
                n = (function (t, n) {
                  for (
                    var r = [], o = t.firstElementChild;
                    o;
                    o = o.nextElementSibling
                  )
                    (a = o), -1 === i.indexOf(a.tagName) && r.push(o);
                  var a;
                  return r;
                })(t);
              0 !== n.length &&
                (Wt().error(Ba, "amp-consent only allows tags: %s", i),
                n.forEach(function (i) {
                  return t.removeChild(i);
                }));
            }),
            (r.isLayoutSupported = function (t) {
              return t == mt;
            }),
            (r.mN = function () {
              var t = this,
                i = Array.prototype.map.call(
                  this.element.querySelectorAll("amp-story-page"),
                  function (t) {
                    return t.getImpl();
                  }
                );
              return Promise.all(i).then(function (i) {
                (t.uz = i),
                  li(t.win, "amp-story-branching") &&
                    t.eA.dispatch(5, [
                      { tagOrTarget: "AMP-STORY", method: "goToPage" },
                    ]);
              });
            }),
            (r.ss = function (t) {
              Zt(this.cz).next(t);
            }),
            (r.jz = function () {
              "v0" === this.ls.getParam("storyPlayer") &&
                Ai(this.win).installExtensionForDoc(
                  this.getAmpDoc(),
                  "amp-viewer-integration"
                );
            }),
            (r.Kz = function () {
              if (this.ls.hasCapability("swipe") && this.UM) {
                var t = this.eA.get(Wi.ADVANCEMENT_MODE);
                this.UM.send("selectDocument", {
                  next: !0,
                  advancementMode: t,
                });
              }
            }),
            (r.am = function () {
              Zt(this.cz).previous();
            }),
            (r.Jz = function () {
              if (this.ls.hasCapability("swipe") && this.UM) {
                var t = this.eA.get(Wi.ADVANCEMENT_MODE);
                this.UM.send("selectDocument", {
                  previous: !0,
                  advancementMode: t,
                });
              } else
                this.eA.get(Wi.CAN_SHOW_PREVIOUS_PAGE_HELP) &&
                  this.dz.showFirstPageHintOverlay();
            }),
            (r.Qz = function (t) {
              this.eA.dispatch(7, gn),
                1 === t ? this.ss() : 2 === t && this.am();
            }),
            (r.I_ = function (t, i) {
              var n,
                r = this,
                o = this.getPageById(t),
                e = this.getPageIndex(o);
              if (this.cz && this.cz.element.id === t) return a();
              var s = this.eA.get(Wi.SUBSCRIPTIONS_STATE);
              if (0 !== s && -1 === this.Sz) return this.AN(this.Ez, t, i);
              if (e >= this.Sz && 1 === s) return this.AN(this.Az, t, i);
              if (e > this.Sz && 3 === s)
                return (
                  (this.kz = t),
                  this.TN(),
                  this.I_(this.uz[this.Sz].element.id, i)
                );
              this.SN(t, e);
              var h = this.cz;
              (this.cz = o),
                o.isAd() || this.EN(t, i),
                null === (n = this.bz) || void 0 === n || n.update(o.element);
              var u = [
                function () {
                  h && h.element.removeAttribute("active"),
                    r.eA.get(Wi.PAUSED_STATE)
                      ? o.element.setAttribute("active", "")
                      : o.setState(1),
                    r.PN();
                },
                function () {
                  h &&
                    (h.setState(0),
                    r.getPageIndex(h) < e ? Vn(h, Ha) : Bn(h, Ha),
                    h.isAd() && r.eA.dispatch(7, "manualAdvanceFromAd")),
                    r.eA.dispatch(15, o.isAd()),
                    o.isAd()
                      ? Vn(r, Da)
                      : (Bn(r, Da),
                        o.isAutoAdvance() ||
                          r.ez.updateProgress(t, r.fP.getProgress())),
                    r.eA.dispatch(6, { id: t, index: e }),
                    h || r.ON();
                },
                function () {
                  r.xN(!h), r._N();
                },
              ];
              return new Promise(function (t) {
                !(function i() {
                  if ((u.shift().call(r), !u.length)) return t();
                  r.win.requestAnimationFrame(function () {
                    return i();
                  });
                })();
              });
            }),
            (r.EN = function (t, i) {
              var n,
                r,
                o,
                a,
                e = this.eA.get(Wi.NAVIGATION_PATH);
              i === Ao && e.pop(),
                i === ko && e[e.length - 1] !== t && e.push(t),
                this.eA.dispatch(10, e),
                (n = this.win),
                (r = e),
                (a = Rt(
                  Rt({}, So((o = n.history)) || {}),
                  {},
                  d({}, "ampStoryNavigationPath", r)
                )),
                o.replaceState(a, ""),
                (function (t, i) {
                  var n,
                    r = ba(t);
                  (r[xa(t)] =
                    (d((n = {}), "state", i), d(n, "time", Date.now()), n)),
                    wa(t, r);
                })(n, a);
            }),
            (r._N = function () {
              xi(this.element).trigger(this.cz.element, "active", null, 3);
            }),
            (r.PN = function () {
              var t = this;
              (this.Uo.isSafari() || this.Uo.isIos()) &&
                this.mutateElement(function () {
                  Q(t.element, !1),
                    t.element.offsetHeight >= 0 && Q(t.element, !0);
                });
            }),
            (r.iN = function () {
              this.Tz && clearTimeout(this.Tz),
                (this.Tz = null),
                this.kz &&
                  2 === this.eA.get(Wi.SUBSCRIPTIONS_STATE) &&
                  this.I_(this.kz, ko),
                (this.kz = null);
            }),
            (r.AN = function (t, i, n) {
              var r = this;
              return t.promise.then(function () {
                return r.I_(i, n);
              });
            }),
            (r.TN = function () {
              this.eA.dispatch(31, !0);
            }),
            (r.tN = function () {
              this.eA.dispatch(31, !1);
            }),
            (r.SN = function (t, i) {
              var n = this,
                r = this.eA.get(Wi.SUBSCRIPTIONS_DIALOG_UI_STATE);
              i !== this.Sz ||
                r ||
                3 !== this.eA.get(Wi.SUBSCRIPTIONS_STATE) ||
                (this.Tz = setTimeout(function () {
                  (n.kz = t), n.TN(), (n.Tz = null);
                }, 500)),
                i < this.Sz && r && this.tN();
            }),
            (r.Df = function (t) {
              if (!C(t.target, "amp-story-interactive-slider")) {
                this.eA.dispatch(7, gn);
                var i = this.eA.get(Wi.RTL_STATE);
                switch (t.key) {
                  case "ArrowLeft":
                    i ? this.ss() : this.am();
                    break;
                  case "ArrowRight":
                    i ? this.am() : this.ss();
                }
              }
            }),
            (r.onResizeDebounced = function () {
              (this.xz = this.Cz()), this.eA.dispatch(34, this.xz);
              var t = this.MN(),
                i = this.Dz();
              this.IN(t, i);
            }),
            (r.Oz = function (t) {
              var i = t.height;
              0 !== i &&
                $(this.win.document.documentElement, {
                  "--story-dvh": tt(i / 100),
                });
            }),
            (r.IN = function (t, i) {
              var n = this;
              this.mutateElement(function () {
                n.element.setAttribute(
                  "orientation",
                  i && t ? "landscape" : "portrait"
                );
              });
            }),
            (r._f = function () {
              var t = this.getAmpDoc().getVisibilityState(),
                i = t === kt,
                n = "visible" === t;
              i && this.eA.dispatch(qi, !1),
                n && this.eA.dispatch(qi, !0),
                i || n ? this.KP() : this.cj();
            }),
            (r.XM = function (t) {
              this.eA.get(Wi.MUTED_STATE) || (t ? this.Yz() : this.Gz());
            }),
            (r.RA = function (t) {
              var i,
                n = this;
              switch (
                (null === (i = this.bz) || void 0 === i || i.detach(),
                (this.bz = null),
                t)
              ) {
                case 0:
                  this.ko.mutate(function () {
                    n.win.document.documentElement.setAttribute(
                      "i-amphtml-story-mobile",
                      ""
                    ),
                      n.element.removeAttribute("desktop"),
                      n.element.classList.remove(
                        "i-amphtml-story-desktop-fullbleed"
                      ),
                      n.element.classList.remove(
                        "i-amphtml-story-desktop-one-panel"
                      );
                  });
                  break;
                case 4:
                  this.bz ||
                    ((this.bz = new da(this.win, this.element)),
                    this.bz.attach(),
                    this.cz && this.bz.update(this.cz.element)),
                    this.ko.mutate(function () {
                      n.Fz(),
                        n.win.document.documentElement.removeAttribute(
                          "i-amphtml-story-mobile"
                        ),
                        n.element.removeAttribute("desktop"),
                        n.element.classList.add(
                          "i-amphtml-story-desktop-one-panel"
                        ),
                        n.element.classList.remove(
                          "i-amphtml-story-desktop-fullbleed"
                        );
                    });
                  break;
                case 2:
                  this.ko.mutate(function () {
                    n.win.document.documentElement.removeAttribute(
                      "i-amphtml-story-mobile"
                    ),
                      n.element.setAttribute("desktop", ""),
                      n.element.classList.add(
                        "i-amphtml-story-desktop-fullbleed"
                      ),
                      n.element.classList.remove(
                        "i-amphtml-story-desktop-one-panel"
                      );
                  });
                  break;
                case 3:
                  var r = j(
                    this.element,
                    "amp-story-page amp-story-page-attachment"
                  );
                  this.ko.mutate(function () {
                    n.Fz(),
                      n.element.setAttribute("i-amphtml-vertical", ""),
                      n.win.document.documentElement.classList.add(
                        "i-amphtml-story-vertical"
                      ),
                      $(n.win.document.body, { height: "auto" }),
                      n.win.document.documentElement.removeAttribute(
                        "i-amphtml-story-mobile"
                      ),
                      n.element.removeAttribute("desktop"),
                      n.element.classList.remove(
                        "i-amphtml-story-desktop-fullbleed"
                      );
                    for (var t = 0; t < r.length; t++)
                      n.element.insertBefore(
                        r[t],
                        r[t].getAttribute("href")
                          ? r[t].parentElement.nextElementSibling
                          : null
                      );
                  }),
                    this.signals()
                      .whenSignal(wt)
                      .then(function () {
                        n.ko.mutate(function () {
                          n.uz.forEach(function (t) {
                            return t.element.setAttribute("active", "");
                          });
                        });
                      });
              }
            }),
            (r.Cz = function () {
              return 0 === this.xz && this.zN()
                ? 0
                : this.Uo.isBot()
                ? 3
                : this.NN()
                ? this.Dz()
                  ? 2
                  : 4
                : 0;
            }),
            (r.zN = function () {
              var t,
                i = this.Uo.isAndroid(),
                n = ["INPUT", "TEXTAREA"].includes(
                  null === (t = this.win.document.activeElement) || void 0 === t
                    ? void 0
                    : t.tagName
                );
              return i && n;
            }),
            (r.NN = function () {
              return this.lz.matches && !this.Uo.isBot();
            }),
            (r.MN = function () {
              return this.fz.matches;
            }),
            (r.Iz = function () {
              return this.element.hasAttribute("standalone");
            }),
            (r.Dz = function () {
              return this.element.hasAttribute("supports-landscape");
            }),
            (r.KM = function (t) {
              if (this.cz) {
                var i = t ? 2 : 1;
                this.cz.setState(i);
              }
            }),
            (r.lN = function () {
              var t,
                i,
                n = this;
              if ((this.Uz(), !this.getFallback())) {
                var r =
                  ((t = this.element),
                  ur(
                    (i = Dt(
                      "div",
                      { class: "i-amphtml-story-unsupported-browser-overlay" },
                      Dt(
                        "div",
                        { class: "i-amphtml-overlay-container" },
                        Dt("div", { class: "i-amphtml-gear-icon" }),
                        Dt("div", { "i-amphtml-i18n-text-content": "21" }),
                        Dt("button", {
                          class: "i-amphtml-continue-button",
                          onClick: function () {
                            n.cN().then(function () {
                              n.Vz(),
                                n.mutateElement(function () {
                                  St(r);
                                });
                            });
                          },
                          "i-amphtml-i18n-text-content": "27",
                        })
                      )
                    )),
                    t
                  ),
                  Hn(
                    Dt("div", null),
                    i,
                    '.i-amphtml-story-unsupported-browser-overlay{position:absolute!important;z-index:20000001!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:-ms-flexbox!important;display:flex!important;color:#fff!important}.i-amphtml-gear-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="none" d="M0 0h20v20H0V0z"/><path d="M16 10.8V9.2L17.5 8c.2-.1.2-.3.1-.5L16 4.7c0-.2-.3-.2-.5-.2l-2 .8-1.3-.7-.3-2.2c0-.2-.2-.3-.4-.3H8.4c-.2 0-.4.1-.4.3l-.3 2.2a6 6 0 0 0-1.3.7l-2-.8c-.2 0-.4 0-.5.2L2.3 7.4v.5l1.8 1.3a5 5 0 0 0 0 1.6L2.4 12c-.2.1-.2.3-.1.5l1.6 2.8c0 .2.3.2.5.2l2-.8 1.3.7.3 2.2c0 .2.2.3.4.3h3.2c.2 0 .4-.1.4-.3l.3-2.2a6 6 0 0 0 1.3-.7l2 .8c.2 0 .4 0 .5-.2l1.6-2.8V12L16 10.8zM10 13c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z"/></svg>\')!important}.i-amphtml-continue-button{border-radius:20px;font-family:Roboto,sans-serif;color:#000;font-weight:400!important;font-size:16px;background:#fff;padding:10px 20px;border:2px solid #aaa;text-decoration:none;display:block;margin-top:25px;margin-right:auto;margin-left:auto;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-unsupported-browser-layer.css*/'
                  ));
                return this.mutateElement(function () {
                  n.element.appendChild(r);
                });
              }
              this.toggleFallback(!0);
            }),
            (r.RN = function () {
              var t = this,
                i = this.jN(0, {}, this.cz.element.id),
                n = [];
              return (
                Object.keys(i).forEach(function (r) {
                  var o = i[r];
                  if (
                    (r === t.uz[0].element.id &&
                      t.cz === t.uz[t.uz.length - 1] &&
                      t.uz.length > 1 &&
                      !t.ls.hasCapability("swipe") &&
                      (o = 1),
                    n[o] || (n[o] = []),
                    li(t.win, "amp-story-branching"))
                  ) {
                    var a = t.eA.get(Wi.NAVIGATION_PATH),
                      e = a.indexOf(t.cz.element.id),
                      s = a[e - 1];
                    e > 0 &&
                      r === t.cz.element.id &&
                      (n[1] || (n[1] = []), n[1].push(s)),
                      r !== s && n[o].push(r);
                  } else n[o].push(r);
                }),
                n
              );
            }),
            (r.jN = function (t, i, n) {
              var r = this;
              return (
                (void 0 !== i[n] && i[n] <= t) ||
                  ((i[n] = t),
                  this.getPageById(n)
                    .getAdjacentPageIds()
                    .forEach(function (n) {
                      (void 0 !== i[n] && i[n] <= t) || (i = r.jN(t + 1, i, n));
                    })),
                i
              );
            }),
            (r.xN = function () {
              var t = this,
                i =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              if (this.Uo.isBot())
                this.uz.forEach(function (t) {
                  t.setDistance(0);
                });
              else {
                var n = this.RN(),
                  r = function () {
                    n.forEach(function (i, n) {
                      i.forEach(function (i) {
                        t.getPageById(i).setDistance(n);
                      });
                    });
                  };
                this.mutateElement(function () {
                  if (!i) return r();
                  var o = Zt(n[0][0]);
                  new Promise(function (i, n) {
                    var r = t.getPageById(o);
                    r.setDistance(0),
                      r.signals().whenSignal(wt).then(i),
                      t.eA.subscribe(Wi.CURRENT_PAGE_ID, n);
                  }).then(
                    function () {
                      return r();
                    },
                    function () {}
                  );
                });
              }
            }),
            (r.ON = function () {
              var t = this,
                i = Rr(this.element);
              i &&
                this.cz.element
                  .signals()
                  .whenSignal(wt)
                  .then(function () {
                    return (i = i), t.vz.register(i), t.vz.preload(i);
                  })
                  .then(function () {
                    t.pz = (function (t, i) {
                      for (
                        var n = t.firstElementChild;
                        n;
                        n = n.nextElementSibling
                      )
                        if ("audio" === n.tagName.toLowerCase()) return n;
                      return null;
                    })(t.element);
                  });
            }),
            (r.bN = function () {
              var t = this;
              this.ls.hasCapability("education") &&
                (this.mutateElement(function () {
                  t.element.appendChild(Dt("amp-story-education", null));
                }),
                Ai(this.win).installExtensionForDoc(
                  this.getAmpDoc(),
                  "amp-story-education"
                ));
            }),
            (r.getPageIndexById = function (t) {
              var i = g(this.uz, function (i) {
                return i.element.id === t;
              });
              return (
                i < 0 &&
                  Wt().error(
                    Ba,
                    'Story refers to page "%s", but no such page exists.',
                    t
                  ),
                i
              );
            }),
            (r.getPageById = function (t) {
              var i = this.getPageIndexById(t);
              return Zt(this.uz[i]);
            }),
            (r.getPageIndex = function (t) {
              return g(this.uz, function (i) {
                return i === t;
              });
            }),
            (r.CN = function (t) {
              var i = t;
              t.ownerDocument !== this.win.document &&
                (i = t.ownerDocument.defaultView.frameElement);
              var n = g(this.uz, function (t) {
                return !!D(i, function (i) {
                  return i === t.element;
                });
              });
              return this.uz[n] || null;
            }),
            (r.getElementDistance = function (t) {
              var i = this.CN(t);
              return i ? i.getDistance() : -1;
            }),
            (r.getMaxMediaElementCounts = function () {
              var t,
                i = this.element.querySelectorAll(
                  "amp-audio, [background-audio]"
                ).length,
                n = this.element.querySelectorAll("amp-video").length;
              return (
                this.element.hasAttribute("background-audio") && i++,
                d((t = {}), oo, Math.min(i + 2, Va.audio)),
                d(t, ao, Math.min(n + 2, Va.video)),
                t
              );
            }),
            (r.getElement = function () {
              return this.element;
            }),
            (r.Cm = function (t) {
              t ? this.DN() : this.LN(),
                t
                  ? this.element.setAttribute(Ua, "")
                  : this.element.removeAttribute(Ua);
            }),
            (r.DN = function () {
              this.Yz(), this.cz && this.cz.muteAllMedia();
            }),
            (r.Yz = function () {
              this.pz && this.vz.pause(this.pz);
            }),
            (r.LN = function () {
              var t = this,
                i = function () {
                  t.Gz(), t.cz && t.cz.unmuteAllMedia();
                };
              this.vz.blessAll().then(i, i);
            }),
            (r.Gz = function () {
              this.pz && (this.vz.unmute(this.pz), this.vz.play(this.pz));
            }),
            (r.qz = function () {
              var t = this.element.hasAttribute("background-audio");
              this.eA.dispatch(29, t);
            }),
            (r.Zz = function () {
              var t = !!R(
                  this.element,
                  "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-page[background-audio], amp-story-page[auto-advance-after]"
                ),
                i = this.element.hasAttribute("background-audio");
              this.eA.dispatch(30, t || i);
            }),
            (r.eN = function () {
              var t = this;
              this.signals()
                .whenSignal(wt)
                .then(function () {
                  return t.bM();
                });
            }),
            (r.sN = function (t) {
              t &&
                (this.eA.dispatch(7, "viewerSelectPage"),
                t.next
                  ? this.ss()
                  : t.previous
                  ? this.am()
                  : t.delta
                  ? this.UN(t.delta)
                  : t.id &&
                    this.I_(
                      t.id,
                      this.getPageIndexById(t.id) > this.getPageIndex(this.cz)
                        ? ko
                        : Ao
                    ));
            }),
            (r.UN = function (t) {
              var i = this.eA.get(Wi.CURRENT_PAGE_INDEX),
                n =
                  t > 0
                    ? Math.min(this.uz.length - 1, i + t)
                    : Math.max(0, i + t),
                r = this.uz[n];
              if (this.rN(r && r.element.id) && n !== i) {
                var o = n > i ? ko : Ao;
                this.I_(r.element.id, o);
              }
            }),
            (r.dN = function () {
              var t = this,
                i = ga(this.win, ya);
              (i &&
                i.every(function (i) {
                  return t.rN(i);
                })) ||
                (i = []),
                this.eA.dispatch(10, i);
            }),
            (r.bM = function () {
              var t = this;
              this.eA.dispatch(10, []);
              var i = this.I_(this.uz[0].element.id, ko);
              1 === this.uz.length &&
                (this.uz[0].setState(0), this.uz[0].setState(1)),
                i.then(function () {
                  t.uz.forEach(function (t) {
                    return Bn(t, Ha);
                  });
                });
            }),
            (r.pN = function (t, i) {
              this.mutateElement(function () {
                var n = t.element.id;
                j(t.element, "amp-story-cta-layer a").forEach(function (t) {
                  t.setAttribute("data-vars-story-page-id", n),
                    t.setAttribute("data-vars-story-page-index", i);
                });
              });
            }),
            (r.addPage = function (t) {
              this.uz.push(t), t.isAd() && this.hz.push(t);
            }),
            (r.insertPage = function (t, i) {
              var n = this.getPageById(i),
                r = n.element;
              if (n.isAd() && !this.eA.get(Wi.CAN_INSERT_AUTOMATIC_AD))
                return (
                  qt().expectedError(
                    Ba,
                    "Inserting ads automatically is disallowed."
                  ),
                  !1
                );
              var o = this.getPageById(t),
                a = o.element,
                e = this.getNextPage(o);
              if (!e) return !1;
              var s = li(this.win, "amp-story-branching")
                ? "advance-to"
                : "i-amphtml-advance-to";
              a.setAttribute(s, i),
                a.setAttribute(La, i),
                r.setAttribute(Ya, t);
              var h = e.element,
                u = h.id;
              u !== i &&
                (r.setAttribute(s, u),
                r.setAttribute(La, u),
                h.setAttribute(Ya, i));
              var m = this.getPageIndexById(i);
              return (
                -1 != m && this.uz.splice(m, 1),
                this.uz.splice(this.getPageIndexById(t) + 1, 0, n),
                this.eA.dispatch(
                  11,
                  this.uz.map(function (t) {
                    return t.element.id;
                  })
                ),
                !0
              );
            }),
            (r.getNextPage = function (t) {
              var i = t.getNextPageId(!0);
              return i ? this.getPageById(i) : null;
            }),
            (n.isBrowserSupported = function (t) {
              return Boolean(
                t.CSS &&
                  t.CSS.supports &&
                  t.CSS.supports("display", "grid") &&
                  t.CSS.supports("color", "var(--test)")
              );
            }),
            (r.Lz = function () {
              if (
                !Bt(this.win) ||
                "inspect" === this.element.getAttribute("mode")
              )
                return !1;
              this.element.setAttribute("mode", "inspect");
              var t = Dt("amp-story-dev-tools", null);
              return (
                this.win.document.body.appendChild(t),
                this.element.setAttribute("hide", ""),
                Ai(this.win).installExtensionForDoc(
                  this.getAmpDoc(),
                  "amp-story-dev-tools"
                ),
                !0
              );
            }),
            (r.nN = function (t) {
              return !!D(
                t,
                function (t) {
                  return C(t, "a.i-amphtml-story-page-open-attachment[href]");
                },
                this.element
              );
            }),
            (r.Mz = function () {
              var t = hr(this.element).getLanguageCodesForElement(this.element);
              this.YN(t[0]) || this.HN(t);
            }),
            (r.YN = function (t) {
              var i = this.win.document.querySelector(
                'script[amp-localization="amp-story"]'
              );
              if (
                (null == i ? void 0 : i.getAttribute("i-amphtml-version")) !==
                Ht(this.win).rtvVersion
              )
                return !1;
              var n = (function (t, i) {
                try {
                  return At(t);
                } catch (t) {
                  return null;
                }
              })(i.textContent);
              return (
                !!n &&
                (hr(this.element).registerLocalizedStringBundles(d({}, t, n)),
                !0)
              );
            }),
            (r.HN = function (t) {
              var i,
                n,
                r,
                o,
                a = hr(this.element),
                e = (function (t) {
                  for (var i = 0; i < t.length; i++)
                    for (var n = t[i].toLowerCase(), r = 0; r < sr.length; r++)
                      if (sr[r].toLowerCase() === n) return sr[r];
                  return "en";
                })(t),
                s =
                  ((i = this.win),
                  this.win.location,
                  (n = "amp-story.".concat(e, ".json")),
                  (r = vi.cdn),
                  (o = Ht(i).rtvVersion),
                  "".concat(r, "/rtv/").concat(o, "/v0/").concat(n));
              Ni(this.win)
                .fetchJson(s, { prerenderSafe: !0 })
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  return a.registerLocalizedStringBundles(d({}, e, t));
                })
                .catch(function (t) {
                  G(Ba, t, "Bundle not found for language " + e);
                });
            }),
            (r._z = function () {
              var t,
                i,
                n,
                r,
                o =
                  parseInt(
                    null === (t = this.ls) || void 0 === t
                      ? void 0
                      : t.getParam("minPreviewPages"),
                    10
                  ) || 1,
                a =
                  parseInt(
                    null === (i = this.ls) || void 0 === i
                      ? void 0
                      : i.getParam("pctPagesToPreview"),
                    10
                  ) || 30,
                e = this.element.querySelectorAll("amp-story-page").length,
                s = Math.ceil((a / 100) * e);
              return (
                (n = s = Math.max(o, s)),
                A(1 <= (r = e)),
                (s = Math.min(Math.max(n, 1), r)) - 1
              );
            }),
            (r.$z = function () {
              var t;
              this.uz.indexOf(this.cz) >= this.Pz &&
                (null === (t = this.UM) ||
                  void 0 === t ||
                  t.send("storyPreviewFinished", {}));
            }),
            n
          );
        })(t.BaseElement);
      t.registerElement(
        "amp-story",
        Fa,
        '.i-amphtml-story-background{background-color:transparent}amp-story[standalone]{background-color:#000}@media (min-aspect-ratio:31/40){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-ratio:69/116;--i-amphtml-story-desktop-one-panel-responsive-margin:max(74px,8.25vh);--i-amphtml-story-desktop-one-panel-height:calc(var(--story-100dvh) - var(--i-amphtml-story-desktop-one-panel-responsive-margin)*2);--i-amphtml-story-desktop-one-panel-width:calc(var(--i-amphtml-story-desktop-one-panel-height)*var(--i-amphtml-story-desktop-one-panel-ratio));--i-amphtml-story-desktop-one-panel-border-radius:20px;--story-page-vw:calc(var(--i-amphtml-story-desktop-one-panel-width)*0.01)!important;--story-page-vh:calc(var(--i-amphtml-story-desktop-one-panel-height)*0.01)!important}@media(max-height:756px){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-responsive-margin:0px;--i-amphtml-story-desktop-one-panel-width:calc(var(--story-100dvh)*var(--i-amphtml-story-desktop-one-panel-ratio));--i-amphtml-story-desktop-one-panel-border-radius:0}}@media(max-height:538px){:root:not([data-story-supports-landscape]):not([i-amphtml-story-mobile]){--i-amphtml-story-desktop-one-panel-ratio:36/53}}:root:not([i-amphtml-story-mobile]) amp-story:not([supports-landscape]) amp-story-page{width:var(--i-amphtml-story-desktop-one-panel-width)!important;height:var(--i-amphtml-story-desktop-one-panel-height)!important;border-radius:var(--i-amphtml-story-desktop-one-panel-border-radius)!important;margin:auto!important}}[orientation=landscape] [position=landscape-half-left]{width:50%!important;left:0!important;right:auto!important}[orientation=landscape] [position=landscape-half-right]{width:50%!important;left:auto!important;right:0!important}amp-story{font-display:optional}amp-story-grid-layer:not([aspect-ratio]):not([preset]){overflow:hidden}amp-story-grid-layer *{box-sizing:border-box;margin:0}.i-amphtml-story-grid-template-with-full-bleed-animation amp-img img,[template=fill] amp-anim img,[template=fill] amp-img img,[template=fill] amp-video video{-o-object-fit:cover;object-fit:cover}[template=vertical]{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start}[template=vertical]>*{width:100%}[template=horizontal]{-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:start;grid-gap:16px;-ms-flex-pack:start;justify-content:start}amp-story-grid-layer{padding:68px 32px 32px}amp-story-grid-layer.i-amphtml-story-has-page-attachment.i-amphtml-story-has-interactive{padding-bottom:104px}amp-story-grid-layer.i-amphtml-story-has-CTA-layer.i-amphtml-story-has-interactive{padding-bottom:20%}html.i-amphtml-story-vertical{--story-page-vh:1.78vw!important}amp-story[standalone][i-amphtml-vertical]{height:auto!important;contain:initial!important}[i-amphtml-vertical] *{transition-delay:0s!important;transition-duration:0s!important}[i-amphtml-vertical] amp-story-page{position:relative!important;height:178vw!important;contain:initial!important;overflow:visible!important}amp-story[i-amphtml-vertical].i-amphtml-element amp-story-page.i-amphtml-element{transform:none!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content{opacity:1!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content>*{display:block!important}[i-amphtml-vertical] amp-story-page-attachment{display:block!important;position:relative!important;transform:none!important}[i-amphtml-vertical] .i-amphtml-story-page-attachment-remote-title{overflow:visible!important}[i-amphtml-vertical] .amp-story-draggable-drawer-root{visibility:visible!important}[i-amphtml-vertical] .i-amphtml-story-page-description{background:#fff!important;display:block!important;padding:32px!important;width:auto!important;z-index:9999999!important}[i-amphtml-vertical] .i-amphtml-story-page-description>*{background:#fff!important;color:#000!important;font-size:1rem!important}[i-amphtml-vertical] .i-amphtml-story-page-description>h2{font-size:1.5rem!important}.i-amphtml-story-button-container{cursor:pointer!important;position:absolute!important;width:30px!important;top:0!important;bottom:0!important;height:calc(var(--story-100dvh) - 150px)!important;margin:auto 0!important;background:none!important;transition:opacity 150ms linear,visibility 150ms linear!important;outline:none!important;z-index:100002!important}amp-story:not([desktop]) .i-amphtml-story-button-container{pointer-events:none!important}.i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,.next-container{left:auto!important;right:0!important}[dir=rtl] .i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,[dir=rtl] .next-container{left:0!important;right:auto!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-container{pointer-events:none!important}[dir=rtl] amp-story:not([desktop]) .i-amphtml-story-button-move,amp-story:not([desktop]) .i-amphtml-story-button-move{width:100%!important;height:100%!important;border:none!important;padding:0!important;pointer-events:none!important;background-repeat:no-repeat!important;background-color:transparent!important;background-position:50%!important;filter:invert(100%) drop-shadow(0 0 3px #000b)!important}body:not(.amp-mode-keyboard-active) amp-story:not([desktop]):not(.i-amphtml-story-desktop-one-panel) .i-amphtml-story-button-move{background:none!important}[desktop] .i-amphtml-story-button-move{display:-ms-flexbox!important;display:flex!important;position:fixed!important;top:0!important;bottom:0!important;margin:auto 12px!important;width:54px!important;height:54px!important;border:0!important;background-repeat:no-repeat!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;transition:opacity 150ms linear!important;cursor:pointer!important;pointer-events:all!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container{height:48px!important;width:48px!important;transform:translateY(-50%)!important;top:50%!important;bottom:auto!important;pointer-events:all!important;--i-amphtml-story-desktop-one-panel-button-margin:max(10px,calc(50vw - 72px - var(--i-amphtml-story-desktop-one-panel-width)/2))}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container.prev-container{margin-inline-start:var(--i-amphtml-story-desktop-one-panel-button-margin)!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-container.next-container{margin-inline-end:var(--i-amphtml-story-desktop-one-panel-button-margin)!important}[dir=rtl] amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-move,amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-move{filter:none!important;background-color:#fff!important;border-radius:50%!important}amp-story.i-amphtml-story-desktop-one-panel .i-amphtml-story-button-hidden{visibility:visible!important;opacity:.1!important;pointer-events:none!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-move{background-size:100%!important;background-color:#fff2!important;border-radius:50%!important;filter:invert(1)!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move,.prev-container>.i-amphtml-story-button-move,[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move,[dir=rtl] .prev-container>.i-amphtml-story-button-move{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="m21.52 16.22 7.75 7.75m-7.75 7.78L29.27 24"/></svg>\')!important}.prev-container>.i-amphtml-story-button-move,[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move{left:0!important;right:auto!important;transform:rotate(180deg)!important}[dir=rtl] .prev-container>.i-amphtml-story-button-move{transform:none!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move,[dir=rtl] .prev-container>.i-amphtml-story-button-move{left:auto!important;right:0!important}.i-amphtml-story-fwd-replay{pointer-events:none!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23000" stroke-linecap="round" stroke-width="2.4" d="M16.15 19.4a9.1 9.1 0 1 1-1.29 3.95M15.6 15.1v4.61m4.4 0h-4.4"/></svg>\')!important}.i-amphtml-story-button-hidden{visibility:hidden!important;opacity:0!important;pointer-events:none!important}:root{--story-page-vw:1vw!important;--story-page-vh:var(--story-dvh,1vh)!important;--story-page-vmin:min(var(--story-page-vw),var(--story-page-vh))!important;--story-page-vmax:max(var(--story-page-vw),var(--story-page-vh))!important;--story-100dvh:calc(var(--story-dvh, 1vh)*100)!important;--story-font-size:calc(var(--story-page-vh, 8px)*2.5)!important;font-size:var(--story-font-size)}@supports (height:1dvh){:root{--story-dvh:1dvh!important}}body{animation:none!important;-webkit-animation:none!important;-moz-animation:none!important;-ms-animation:none!important}amp-story,amp-story-cta-layer,amp-story-page{contain:strict!important;overflow:hidden!important;-webkit-touch-callout:none!important}amp-story-grid-layer{contain:size layout!important;-webkit-touch-callout:none!important}amp-story amp-consent{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:none!important;z-index:initial!important}@media (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:0s!important;transition-duration:0s!important}}amp-consent.amp-hidden{display:none!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;box-sizing:initial!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:start!important;text-shadow:none!important;width:auto!important}amp-story{position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-ms-touch-action:manipulation!important;touch-action:manipulation!important}amp-story,html:root,html:root body{height:100%!important;width:100%!important}html:root,html:root body{font-size:calc(var(--story-page-vh, 8px)*2.5);margin:0!important;padding:0!important;border:0!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}h4,p{font-size:1rem}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h5{font-size:0.83rem}h6{font-size:0.67rem}html:root #i-amphtml-wrapper body{border-top:none!important;overflow:hidden!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important;max-height:initial!important;max-width:initial!important;min-height:initial!important;min-width:initial!important;visibility:visible!important}amp-story[standalone].amp-notbuilt{min-height:1px!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story .amp-video-eq,amp-story[hide]{display:none!important}amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;opacity:1!important;-ms-touch-action:none!important;touch-action:none!important;transition:none!important;z-index:0!important}amp-story-page[active]{z-index:1!important}amp-story-page:not(:first-of-type):not([distance]):not([active]),amp-story-page[distance]:not([active]){transform:translateY(1000vh)!important}amp-story-page[active],amp-story-page[distance="0"][distance],amp-story-page[distance="1"][distance]{transform:translateY(0)!important}amp-story-page[distance="2"][distance],amp-story.i-amphtml-experiment-story-load-inactive-outside-viewport:not([desktop]) amp-story-page[distance="1"]:not(.i-amphtml-story-page-loaded):not(.i-amphtml-visited){transform:translateY(var(--story-100dvh))!important}amp-story-page [data-text-background-color]{border-radius:3px!important;line-height:1.5em!important;padding:2px 4px!important;text-indent:0!important;box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important}amp-story-cta-layer{display:block!important;top:80%!important;margin:0!important;z-index:3!important}amp-story-cta-layer,amp-story-grid-layer{position:absolute!important;right:0!important;bottom:0!important;left:0!important}amp-story-grid-layer{box-sizing:border-box!important;display:grid!important;top:0!important;z-index:2!important;pointer-events:none!important}:root:not(.i-amphtml-story-vertical) amp-story{position:absolute!important;top:0;left:0}amp-story-grid-layer[anchor*=left]{margin-left:0!important}amp-story-grid-layer[anchor*=top]{margin-top:0!important}amp-story-grid-layer[anchor*=bottom]{margin-bottom:0!important}amp-story-grid-layer[anchor*=right]{margin-right:0!important;margin-left:auto!important}amp-story-grid-layer amp-video:after{content:""!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}[template=fill] amp-img img,[template=fill] amp-video video{position:absolute!important}amp-story-grid-layer amp-img img{pointer-events:none!important}amp-story-page[active]:not(.i-amphtml-layout) amp-video.i-amphtml-poolbound:not(.i-amphtml-layout){display:none!important}amp-story-grid-layer a,amp-story-grid-layer amp-ad,amp-story-grid-layer amp-twitter{pointer-events:auto!important}amp-story-grid-layer a *{pointer-events:none!important}amp-story-grid-layer .i-amphtml-embedded-component:after{content:""!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}.i-amphtml-story-grid-template-with-full-bleed-animation{position:absolute!important;display:block!important;padding:0!important}[template=fill]:not(.i-amphtml-story-grid-template-with-full-bleed-animation)>*{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}[template=vertical]{grid-auto-flow:row!important;grid-template-columns:100%!important}[template=horizontal]{grid-auto-flow:column!important;grid-template-rows:100%!important}[template=thirds]{height:100%!important;grid-template-rows:33% 33% 33%!important;grid-template-areas:"upper-third" "middle-third" "lower-third"!important}[aspect-ratio],[preset]{margin:auto;width:var(--i-amphtml-story-layer-width,100%);height:var(--i-amphtml-story-layer-height,100%);font-size:calc(var(--i-amphtml-story-layer-height)/10);margin-left:calc(var(--story-page-vw, 1%)*100*0.5 - var(--i-amphtml-story-layer-width, 100%)*0.5);--i-amphtml-aspect-ratio-float:calc(var(--aspect-ratio))!important;--i-amphtml-story-page-width:calc(var(--story-page-vw, 1vw)*100)!important;--i-amphtml-story-page-height:calc(var(--story-page-vh, 1vh)*100)!important;--i-amphtml-story-unscaled-width:min(var(--i-amphtml-story-page-width),calc(var(--i-amphtml-story-page-height)*var(--i-amphtml-aspect-ratio-float)))!important;--i-amphtml-story-unscaled-height:min(var(--i-amphtml-story-page-height),calc(var(--i-amphtml-story-page-width)/var(--i-amphtml-aspect-ratio-float)))!important;--i-amphtml-story-layer-width:calc(var(--i-amphtml-story-unscaled-width)*var(--scaling-factor, 1))!important;--i-amphtml-story-layer-height:calc(var(--i-amphtml-story-unscaled-height)*var(--scaling-factor, 1))!important}[preset="2021-background"],[preset="2021-foreground"]{--aspect-ratio:69/116!important}[preset="2021-background"]{--scaling-factor:1.142!important}.i-amphtml-story-toast{position:absolute!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;animation:toast 2.2s!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100004!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@keyframes toast{0%{transform:translateY(100px);easing:cubic-bezier(0,0,0.2,1)}8%{transform:translateY(0)}92%{transform:translateY(0);easing:cubic-bezier(0.4,0,1,1)}to{transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/></svg>\')!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-spinner,amp-story .amp-video-eq{right:12px!important;bottom:12px!important}[dir=rtl] .i-amphtml-story-spinner,[dir=rtl] amp-story .amp-video-eq{left:12px!important;right:auto!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{animation:container-rotate 1294ms linear infinite!important}@keyframes container-rotate{to{transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{animation-name:fill-unfill-rotate!important;animation-duration:4400ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-iteration-count:infinite!important;opacity:1!important;filter:drop-shadow(0px 1px 3px rgba(0,0,0,0.25))!important}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:""!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{animation-duration:1100ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{animation-name:right-spin!important}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.i-amphtml-story-page-error,.i-amphtml-story-page-play-button{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;position:absolute!important;bottom:0!important;right:0!important;height:40px!important;border:0!important;margin:8px 0 0 8px!important;padding:0!important;animation:play-button-fly-in 0.4s cubic-bezier(0.4,0,0.2,1)!important;background-color:transparent!important;z-index:10000!important}@keyframes play-button-fly-in{0%{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}.i-amphtml-story-page-error[hidden],.i-amphtml-story-page-play-button[hidden]{display:none!important}.i-amphtml-story-page-error-label,.i-amphtml-story-page-play-label{color:#fff!important;font-family:Roboto,sans-serif!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}.i-amphtml-story-page-error-icon,.i-amphtml-story-page-play-icon{display:inline-block!important;height:24px!important;width:24px!important;margin:0 8px!important;border-radius:24px!important;filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.36))!important}.i-amphtml-story-page-error-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23FFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>\')!important}.i-amphtml-story-page-play-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="%23FFF"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm-4 29V15l12 9-12 9z"/></svg>\')!important}amp-bodymovin-animation,amp-bodymovin-animation *{pointer-events:none!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story.css*/'
      ),
        t.registerElement("amp-story-consent", Oo),
        t.registerElement("amp-story-grid-layer", xt),
        t.registerElement("amp-story-page", To);
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
//# sourceMappingURL=amp-story-1.0.js.map
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
