!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.f6 = e())
    : (t.f6 = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 406))
    );
  })({
    10: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        o(n(11), e),
        o(n(12), e),
        o(n(13), e),
        o(n(14), e),
        o(n(15), e),
        o(n(16), e);
    },
    11: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.camelize = e.isString = void 0);
      e.isString = function (t) {
        return "string" == typeof t;
      };
      var r,
        o,
        i = /-(\w)/g;
      e.camelize =
        ((r = function (t) {
          return t.replace(i, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        (o = Object.create(null)),
        function (t) {
          return o[t] || (o[t] = r(t));
        });
    },
    12: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isArray = void 0),
        (e.isArray = Array.isArray);
    },
    13: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.toNumber = e.isNaN = e.isNumber = void 0);
      e.isNumber = function (t) {
        return "number" == typeof t;
      };
      e.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      e.toNumber = function (t) {
        var n = parseFloat(t);
        return e.isNaN(n) ? t : n;
      };
    },
    14: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.traverseTreeUp =
          e.scaleMatrix =
          e.getAdjMatrix =
          e.floydWarshall =
          e.getDegree =
            void 0);
      e.getDegree = function (t, e, n) {
        for (var r = [], o = 0; o < t; o++) r[o] = 0;
        return n
          ? (n.forEach(function (t) {
              t.source && (r[e[t.source]] += 1),
                t.target && (r[e[t.target]] += 1);
            }),
            r)
          : r;
      };
      e.floydWarshall = function (t) {
        for (var e = [], n = t.length, r = 0; r < n; r += 1) {
          e[r] = [];
          for (var o = 0; o < n; o += 1)
            r === o
              ? (e[r][o] = 0)
              : 0 !== t[r][o] && t[r][o]
              ? (e[r][o] = t[r][o])
              : (e[r][o] = 1 / 0);
        }
        for (var i = 0; i < n; i += 1)
          for (r = 0; r < n; r += 1)
            for (o = 0; o < n; o += 1)
              e[r][o] > e[r][i] + e[i][o] && (e[r][o] = e[r][i] + e[i][o]);
        return e;
      };
      e.getAdjMatrix = function (t, e) {
        var n = t.nodes,
          r = t.edges,
          o = [],
          i = {};
        if (!n) throw new Error("invalid nodes data!");
        return (
          n &&
            n.forEach(function (t, e) {
              i[t.id] = e;
              o.push([]);
            }),
          r &&
            r.forEach(function (t) {
              var n = t.source,
                r = t.target,
                u = i[n],
                a = i[r];
              (o[u][a] = 1), e || (o[a][u] = 1);
            }),
          o
        );
      };
      e.scaleMatrix = function (t, e) {
        var n = [];
        return (
          t.forEach(function (t) {
            var r = [];
            t.forEach(function (t) {
              r.push(t * e);
            }),
              n.push(r);
          }),
          n
        );
      };
      e.traverseTreeUp = function (t, e) {
        "function" == typeof e &&
          (function t(e, n) {
            if (e && e.children)
              for (var r = e.children.length - 1; r >= 0; r--)
                if (!t(e.children[r], n)) return;
            return !!n(e);
          })(t, e);
      };
    },
    15: function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
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
      var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clone = e.isObject = void 0);
      e.isObject = function (t) {
        return null !== t && "object" === r(t);
      };
      e.clone = function (t) {
        if (null === t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          var n = [];
          return (
            t.forEach(function (t) {
              n.push(t);
            }),
            n.map(function (t) {
              return e.clone(t);
            })
          );
        }
        if ("object" === r(t) && t !== {}) {
          var i = o({}, t);
          return (
            Object.keys(i).forEach(function (t) {
              i[t] = e.clone(i[t]);
            }),
            i
          );
        }
        return t;
      };
    },
    16: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isFunction = void 0);
      e.isFunction = function (t) {
        return "function" == typeof t;
      };
    },
    178: function (t, e, n) {
      "use strict";
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GForceLayout = void 0);
      var i = n(7),
        u = n(10),
        a = function (t, e) {
          return t
            ? u.isNumber(t)
              ? function (e) {
                  return t;
                }
              : t
            : function (t) {
                return e || 1;
              };
        },
        c = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.maxIteration = 1e3),
              (n.edgeStrength = 200),
              (n.nodeStrength = 1e3),
              (n.coulombDisScale = 0.005),
              (n.damping = 0.9),
              (n.maxSpeed = 1e3),
              (n.minMovement = 0.5),
              (n.interval = 0.02),
              (n.factor = 1),
              (n.linkDistance = 1),
              (n.gravity = 10),
              (n.preventOverlap = !0),
              (n.tick = function () {}),
              (n.nodes = []),
              (n.edges = []),
              (n.width = 300),
              (n.height = 300),
              (n.nodeMap = {}),
              (n.nodeIdxMap = {}),
              n.updateCfg(e),
              n
            );
          }
          return (
            o(e, t),
            (e.prototype.getDefaultCfg = function () {
              return { maxIteration: 500, gravity: 10, enableTick: !0 };
            }),
            (e.prototype.execute = function () {
              var t = this,
                e = t.nodes;
              if (
                (void 0 !== t.timeInterval &&
                  "undefined" != typeof window &&
                  window.clearInterval(t.timeInterval),
                e && 0 !== e.length)
              ) {
                t.width ||
                  "undefined" == typeof window ||
                  (t.width = window.innerWidth),
                  t.height ||
                    "undefined" == typeof window ||
                    (t.height = window.innerHeight),
                  t.center || (t.center = [t.width / 2, t.height / 2]);
                var n = t.center;
                if (1 === e.length)
                  return (
                    (e[0].x = n[0]),
                    (e[0].y = n[1]),
                    void (t.onLayoutEnd && t.onLayoutEnd())
                  );
                var r = {},
                  o = {};
                e.forEach(function (e, n) {
                  u.isNumber(e.x) || (e.x = Math.random() * t.width),
                    u.isNumber(e.y) || (e.y = Math.random() * t.height),
                    (r[e.id] = e),
                    (o[e.id] = n);
                }),
                  (t.nodeMap = r),
                  (t.nodeIdxMap = o),
                  (t.linkDistance = a(t.linkDistance, 1)),
                  (t.nodeStrength = a(t.nodeStrength, 1)),
                  (t.edgeStrength = a(t.edgeStrength, 1));
                var i,
                  c = t.nodeSize;
                if (t.preventOverlap) {
                  var s,
                    f = t.nodeSpacing;
                  (s = u.isNumber(f)
                    ? function () {
                        return f;
                      }
                    : u.isFunction(f)
                    ? f
                    : function () {
                        return 0;
                      }),
                    (i = c
                      ? u.isArray(c)
                        ? function (t) {
                            return (c[0] > c[1] ? c[0] : c[1]) + s(t);
                          }
                        : function (t) {
                            return c + s(t);
                          }
                      : function (t) {
                          return t.size
                            ? u.isArray(t.size)
                              ? (t.size[0] > t.size[1]
                                  ? t.size[0]
                                  : t.size[1]) + s(t)
                              : t.size + s(t)
                            : 10 + s(t);
                        });
                }
                t.nodeSize = i;
                var d = t.edges;
                (t.degrees = u.getDegree(e.length, t.nodeIdxMap, d)),
                  t.getMass ||
                    (t.getMass = function (e) {
                      return t.degrees[t.nodeIdxMap[e.id]] || 1;
                    }),
                  t.run();
              } else t.onLayoutEnd && t.onLayoutEnd();
            }),
            (e.prototype.run = function () {
              var t = this,
                e = t.nodes,
                n = t.edges,
                r = t.maxIteration;
              if ("undefined" != typeof window) {
                var o = 0;
                this.timeInterval = window.setInterval(function () {
                  var i = [],
                    u = [];
                  if (e) {
                    e.forEach(function (t, e) {
                      (i[2 * e] = 0),
                        (i[2 * e + 1] = 0),
                        (u[2 * e] = 0),
                        (u[2 * e + 1] = 0);
                    }),
                      t.calRepulsive(i, e),
                      n && t.calAttractive(i, n),
                      t.calGravity(i, e);
                    var a = Math.max(0.02, t.interval - 0.002 * o);
                    t.updateVelocity(i, u, a, e);
                    var c = [];
                    e.forEach(function (t) {
                      c.push({ x: t.x, y: t.y });
                    }),
                      t.updatePosition(u, a, e),
                      t.tick && t.tick();
                    var s = 0;
                    e.forEach(function (t, e) {
                      var n = t.x - c[e].x,
                        r = t.y - c[e].y;
                      s += Math.sqrt(n * n + r * r);
                    }),
                      (s /= e.length) < t.minMovement &&
                        (window.clearInterval(t.timeInterval),
                        t.onLayoutEnd && t.onLayoutEnd()),
                      ++o >= r &&
                        (t.onLayoutEnd && t.onLayoutEnd(),
                        window.clearInterval(t.timeInterval));
                  }
                }, 0);
              }
            }),
            (e.prototype.calRepulsive = function (t, e) {
              var n = this.getMass,
                r = this.nodeStrength,
                o = this.factor,
                i = this.coulombDisScale,
                u = this.preventOverlap,
                a = this.nodeSize;
              e.forEach(function (c, s) {
                var f = n ? n(c) : 1;
                e.forEach(function (e, d) {
                  if (!(s >= d)) {
                    var l = c.x - e.x,
                      p = c.y - e.y,
                      y = Math.sqrt(l * l + p * p) + 0.01,
                      h = (y + 0.1) * i,
                      v = l / y,
                      g = p / y,
                      b = (((r(c) + r(e)) / 2) * o) / (h * h),
                      m = n ? n(e) : 1;
                    if (
                      ((t[2 * s] += v * b),
                      (t[2 * s + 1] += g * b),
                      (t[2 * d] -= v * b),
                      (t[2 * d + 1] -= g * b),
                      u && y < (a(c) + a(e)) / 2)
                    ) {
                      var x = (r(c) + r(e)) / 2 / (y * y);
                      (t[2 * s] += (v * x) / f),
                        (t[2 * s + 1] += (g * x) / f),
                        (t[2 * d] -= (v * x) / m),
                        (t[2 * d + 1] -= (g * x) / m);
                    }
                  }
                });
              });
            }),
            (e.prototype.calAttractive = function (t, e) {
              var n = this.nodeMap,
                r = this.nodeIdxMap,
                o = this.linkDistance,
                i = this.edgeStrength,
                u = this.getMass;
              e.forEach(function (e, a) {
                var c = n[e.source],
                  s = n[e.target],
                  f = s.x - c.x,
                  d = s.y - c.y,
                  l = Math.sqrt(f * f + d * d) + 0.01,
                  p = f / l,
                  y = d / l,
                  h = ((o(e) || 1) - l) * i(e),
                  v = r[e.source],
                  g = r[e.target],
                  b = u ? u(c) : 1,
                  m = u ? u(s) : 1;
                (t[2 * v] -= (p * h) / b),
                  (t[2 * v + 1] -= (y * h) / b),
                  (t[2 * g] += (p * h) / m),
                  (t[2 * g + 1] += (y * h) / m);
              });
            }),
            (e.prototype.calGravity = function (t, e) {
              for (
                var n = this.center,
                  r = this.gravity,
                  o = this.degrees,
                  i = e.length,
                  a = 0;
                a < i;
                a++
              ) {
                var c = e[a],
                  s = c.x - n[0],
                  f = c.y - n[1],
                  d = r;
                if (this.getCenter) {
                  var l = this.getCenter(c, o[a]);
                  l &&
                    u.isNumber(l[0]) &&
                    u.isNumber(l[1]) &&
                    u.isNumber(l[2]) &&
                    ((s = c.x - l[0]), (f = c.y - l[1]), (d = l[2]));
                }
                d && ((t[2 * a] -= d * s), (t[2 * a + 1] -= d * f));
              }
            }),
            (e.prototype.updateVelocity = function (t, e, n, r) {
              var o = this,
                i = n * o.damping;
              r.forEach(function (n, r) {
                var u = t[2 * r] * i || 0.01,
                  a = t[2 * r + 1] * i || 0.01,
                  c = Math.sqrt(u * u + a * a);
                if (c > o.maxSpeed) {
                  var s = o.maxSpeed / c;
                  (u *= s), (a *= s);
                }
                (e[2 * r] = u), (e[2 * r + 1] = a);
              });
            }),
            (e.prototype.updatePosition = function (t, e, n) {
              n.forEach(function (n, r) {
                if (u.isNumber(n.fx) && u.isNumber(n.fy))
                  return (n.x = n.fx), void (n.y = n.fy);
                var o = t[2 * r] * e,
                  i = t[2 * r + 1] * e;
                (n.x += o), (n.y += i);
              });
            }),
            (e.prototype.stop = function () {
              this.timeInterval &&
                "undefined" != typeof window &&
                window.clearInterval(this.timeInterval);
            }),
            (e.prototype.destroy = function () {
              this.stop(),
                (this.tick = null),
                (this.nodes = null),
                (this.edges = null),
                (this.destroyed = !0);
            }),
            (e.prototype.getType = function () {
              return "gForce";
            }),
            e
          );
        })(i.Base);
      e.GForceLayout = c;
    },
    406: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(178);
      e.default = r.GForceLayout;
    },
    7: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Base = void 0);
      var r = (function () {
        function t() {
          (this.nodes = []),
            (this.edges = []),
            (this.combos = []),
            (this.positions = []),
            (this.destroyed = !1),
            (this.onLayoutEnd = function () {});
        }
        return (
          (t.prototype.layout = function (t) {
            return this.init(t), this.execute(!0);
          }),
          (t.prototype.init = function (t) {
            (this.nodes = t.nodes || []),
              (this.edges = t.edges || []),
              (this.combos = t.combos || []);
          }),
          (t.prototype.execute = function (t) {}),
          (t.prototype.executeWithWorker = function () {}),
          (t.prototype.getDefaultCfg = function () {
            return {};
          }),
          (t.prototype.updateCfg = function (t) {
            t && Object.assign(this, t);
          }),
          (t.prototype.getType = function () {
            return "base";
          }),
          (t.prototype.destroy = function () {
            (this.nodes = null),
              (this.edges = null),
              (this.combos = null),
              (this.positions = null),
              (this.destroyed = !0);
          }),
          t
        );
      })();
      e.Base = r;
    },
  }).default;
});
//# sourceMappingURL=gForceLayout.js.map
