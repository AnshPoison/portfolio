(() => {
    var ve = (t, f) => () => (f || t((f = {
        exports: {}
    }).exports, f), f.exports);
    var Ve = ve(() => {
        window.tram = function (t) {
            function f(e, r) {
                var o = new v.Bare;
                return o.init(e, r)
            }

            function l(e) {
                return e.replace(/[A-Z]/g, function (r) {
                    return "-" + r.toLowerCase()
                })
            }

            function T(e) {
                var r = parseInt(e.slice(1), 16),
                    o = r >> 16 & 255,
                    a = r >> 8 & 255,
                    i = 255 & r;
                return [o, a, i]
            }

            function B(e, r, o) {
                return "#" + (1 << 24 | e << 16 | r << 8 | o).toString(16).slice(1)
            }

            function _() {}

            function D(e, r) {
                G("Type warning: Expected: [" + e + "] Got: [" + typeof r + "] " + r)
            }

            function C(e, r, o) {
                G("Units do not match [" + e + "]: " + r + ", " + o)
            }

            function P(e, r, o) {
                if (r !== void 0 && (o = r), e === void 0) return o;
                var a = o;
                return Ie.test(e) || !Ce.test(e) ? a = parseInt(e, 10) : Ce.test(e) && (a = 1e3 * parseFloat(e)), 0 > a && (a = 0), a === a ? a : o
            }

            function G(e) {
                ne.debug && window && window.console.warn(e)
            }

            function te(e) {
                for (var r = -1, o = e ? e.length : 0, a = []; ++r < o;) {
                    var i = e[r];
                    i && a.push(i)
                }
                return a
            }
            var X = function (e, r, o) {
                    function a(z) {
                        return typeof z == "object"
                    }

                    function i(z) {
                        return typeof z == "function"
                    }

                    function s() {}

                    function A(z, ae) {
                        function m() {
                            var me = new V;
                            return i(me.init) && me.init.apply(me, arguments), me
                        }

                        function V() {}
                        ae === o && (ae = z, z = Object), m.Bare = V;
                        var J, fe = s[e] = z[e],
                            ke = V[e] = m[e] = new s;
                        return ke.constructor = m, m.mixin = function (me) {
                            return V[e] = m[e] = A(m, me)[e], m
                        }, m.open = function (me) {
                            if (J = {}, i(me) ? J = me.call(m, ke, fe, m, z) : a(me) && (J = me), a(J))
                                for (var qe in J) r.call(J, qe) && (ke[qe] = J[qe]);
                            return i(ke.init) || (ke.init = z), m
                        }, m.open(ae)
                    }
                    return A
                }("prototype", {}.hasOwnProperty),
                Q = {
                    ease: ["ease", function (e, r, o, a) {
                        var i = (e /= a) * e,
                            s = i * e;
                        return r + o * (-2.75 * s * i + 11 * i * i + -15.5 * s + 8 * i + .25 * e)
                    }],
                    "ease-in": ["ease-in", function (e, r, o, a) {
                        var i = (e /= a) * e,
                            s = i * e;
                        return r + o * (-1 * s * i + 3 * i * i + -3 * s + 2 * i)
                    }],
                    "ease-out": ["ease-out", function (e, r, o, a) {
                        var i = (e /= a) * e,
                            s = i * e;
                        return r + o * (.3 * s * i + -1.6 * i * i + 2.2 * s + -1.8 * i + 1.9 * e)
                    }],
                    "ease-in-out": ["ease-in-out", function (e, r, o, a) {
                        var i = (e /= a) * e,
                            s = i * e;
                        return r + o * (2 * s * i + -5 * i * i + 2 * s + 2 * i)
                    }],
                    linear: ["linear", function (e, r, o, a) {
                        return o * e / a + r
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (e, r, o, a) {
                        return o * (e /= a) * e + r
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (e, r, o, a) {
                        return -o * (e /= a) * (e - 2) + r
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (e, r, o, a) {
                        return (e /= a / 2) < 1 ? o / 2 * e * e + r : -o / 2 * (--e * (e - 2) - 1) + r
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (e, r, o, a) {
                        return o * (e /= a) * e * e + r
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (e, r, o, a) {
                        return o * ((e = e / a - 1) * e * e + 1) + r
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (e, r, o, a) {
                        return (e /= a / 2) < 1 ? o / 2 * e * e * e + r : o / 2 * ((e -= 2) * e * e + 2) + r
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (e, r, o, a) {
                        return o * (e /= a) * e * e * e + r
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (e, r, o, a) {
                        return -o * ((e = e / a - 1) * e * e * e - 1) + r
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (e, r, o, a) {
                        return (e /= a / 2) < 1 ? o / 2 * e * e * e * e + r : -o / 2 * ((e -= 2) * e * e * e - 2) + r
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (e, r, o, a) {
                        return o * (e /= a) * e * e * e * e + r
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (e, r, o, a) {
                        return o * ((e = e / a - 1) * e * e * e * e + 1) + r
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (e, r, o, a) {
                        return (e /= a / 2) < 1 ? o / 2 * e * e * e * e * e + r : o / 2 * ((e -= 2) * e * e * e * e + 2) + r
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (e, r, o, a) {
                        return -o * Math.cos(e / a * (Math.PI / 2)) + o + r
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (e, r, o, a) {
                        return o * Math.sin(e / a * (Math.PI / 2)) + r
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (e, r, o, a) {
                        return -o / 2 * (Math.cos(Math.PI * e / a) - 1) + r
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (e, r, o, a) {
                        return e === 0 ? r : o * Math.pow(2, 10 * (e / a - 1)) + r
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (e, r, o, a) {
                        return e === a ? r + o : o * (-Math.pow(2, -10 * e / a) + 1) + r
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (e, r, o, a) {
                        return e === 0 ? r : e === a ? r + o : (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + r : o / 2 * (-Math.pow(2, -10 * --e) + 2) + r
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (e, r, o, a) {
                        return -o * (Math.sqrt(1 - (e /= a) * e) - 1) + r
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (e, r, o, a) {
                        return o * Math.sqrt(1 - (e = e / a - 1) * e) + r
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (e, r, o, a) {
                        return (e /= a / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + r : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + r
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (e, r, o, a, i) {
                        return i === void 0 && (i = 1.70158), o * (e /= a) * e * ((i + 1) * e - i) + r
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (e, r, o, a, i) {
                        return i === void 0 && (i = 1.70158), o * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + r
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (e, r, o, a, i) {
                        return i === void 0 && (i = 1.70158), (e /= a / 2) < 1 ? o / 2 * e * e * (((i *= 1.525) + 1) * e - i) + r : o / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + r
                    }]
                },
                k = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                q = document,
                Y = window,
                K = "bkwld-tram",
                H = /[\-\.0-9]/g,
                F = /[A-Z]/,
                g = "number",
                M = /^(rgb|#)/,
                E = /(em|cm|mm|in|pt|pc|px)$/,
                $ = /(em|cm|mm|in|pt|pc|px|%)$/,
                ue = /(deg|rad|turn)$/,
                de = "unitless",
                pe = /(all|none) 0s ease 0s/,
                Ae = /^(width|height)$/,
                we = " ",
                O = q.createElement("a"),
                u = ["Webkit", "Moz", "O", "ms"],
                d = ["-webkit-", "-moz-", "-o-", "-ms-"],
                x = function (e) {
                    if (e in O.style) return {
                        dom: e,
                        css: e
                    };
                    var r, o, a = "",
                        i = e.split("-");
                    for (r = 0; r < i.length; r++) a += i[r].charAt(0).toUpperCase() + i[r].slice(1);
                    for (r = 0; r < u.length; r++)
                        if (o = u[r] + a, o in O.style) return {
                            dom: o,
                            css: d[r] + e
                        }
                },
                b = f.support = {
                    bind: Function.prototype.bind,
                    transform: x("transform"),
                    transition: x("transition"),
                    backface: x("backface-visibility"),
                    timing: x("transition-timing-function")
                };
            if (b.transition) {
                var U = b.timing.dom;
                if (O.style[U] = Q["ease-in-back"][0], !O.style[U])
                    for (var N in k) Q[N][0] = k[N]
            }
            var c = f.frame = function () {
                    var e = Y.requestAnimationFrame || Y.webkitRequestAnimationFrame || Y.mozRequestAnimationFrame || Y.oRequestAnimationFrame || Y.msRequestAnimationFrame;
                    return e && b.bind ? e.bind(Y) : function (r) {
                        Y.setTimeout(r, 16)
                    }
                }(),
                y = f.now = function () {
                    var e = Y.performance,
                        r = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
                    return r && b.bind ? r.bind(e) : Date.now || function () {
                        return +new Date
                    }
                }(),
                L = X(function (e) {
                    function r(R, ee) {
                        var ce = te(("" + R).split(we)),
                            re = ce[0];
                        ee = ee || {};
                        var ge = w[re];
                        if (!ge) return G("Unsupported property: " + re);
                        if (!ee.weak || !this.props[re]) {
                            var Ee = ge[0],
                                be = this.props[re];
                            return be || (be = this.props[re] = new Ee.Bare), be.init(this.$el, ce, ge, ee), be
                        }
                    }

                    function o(R, ee, ce) {
                        if (R) {
                            var re = typeof R;
                            if (ee || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), re == "number" && ee) return this.timer = new oe({
                                duration: R,
                                context: this,
                                complete: s
                            }), void(this.active = !0);
                            if (re == "string" && ee) {
                                switch (R) {
                                    case "hide":
                                        m.call(this);
                                        break;
                                    case "stop":
                                        A.call(this);
                                        break;
                                    case "redraw":
                                        V.call(this);
                                        break;
                                    default:
                                        r.call(this, R, ce && ce[1])
                                }
                                return s.call(this)
                            }
                            if (re == "function") return void R.call(this, this);
                            if (re == "object") {
                                var ge = 0;
                                ke.call(this, R, function (le, Ut) {
                                    le.span > ge && (ge = le.span), le.stop(), le.animate(Ut)
                                }, function (le) {
                                    "wait" in le && (ge = P(le.wait, 0))
                                }), fe.call(this), ge > 0 && (this.timer = new oe({
                                    duration: ge,
                                    context: this
                                }), this.active = !0, ee && (this.timer.complete = s));
                                var Ee = this,
                                    be = !1,
                                    Ne = {};
                                c(function () {
                                    ke.call(Ee, R, function (le) {
                                        le.active && (be = !0, Ne[le.name] = le.nextStyle)
                                    }), be && Ee.$el.css(Ne)
                                })
                            }
                        }
                    }

                    function a(R) {
                        R = P(R, 0), this.active ? this.queue.push({
                            options: R
                        }) : (this.timer = new oe({
                            duration: R,
                            context: this,
                            complete: s
                        }), this.active = !0)
                    }

                    function i(R) {
                        return this.active ? (this.queue.push({
                            options: R,
                            args: arguments
                        }), void(this.timer.complete = s)) : G("No active transition timer. Use start() or wait() before then().")
                    }

                    function s() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var R = this.queue.shift();
                            o.call(this, R.options, !0, R.args)
                        }
                    }

                    function A(R) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ee;
                        typeof R == "string" ? (ee = {}, ee[R] = 1) : ee = typeof R == "object" && R != null ? R : this.props, ke.call(this, ee, me), fe.call(this)
                    }

                    function z(R) {
                        A.call(this, R), ke.call(this, R, qe, zt)
                    }

                    function ae(R) {
                        typeof R != "string" && (R = "block"), this.el.style.display = R
                    }

                    function m() {
                        A.call(this), this.el.style.display = "none"
                    }

                    function V() {
                        this.el.offsetHeight
                    }

                    function J() {
                        A.call(this), t.removeData(this.el, K), this.$el = this.el = null
                    }

                    function fe() {
                        var R, ee, ce = [];
                        this.upstream && ce.push(this.upstream);
                        for (R in this.props) ee = this.props[R], ee.active && ce.push(ee.string);
                        ce = ce.join(","), this.style !== ce && (this.style = ce, this.el.style[b.transition.dom] = ce)
                    }

                    function ke(R, ee, ce) {
                        var re, ge, Ee, be, Ne = ee !== me,
                            le = {};
                        for (re in R) Ee = R[re], re in se ? (le.transform || (le.transform = {}), le.transform[re] = Ee) : (F.test(re) && (re = l(re)), re in w ? le[re] = Ee : (be || (be = {}), be[re] = Ee));
                        for (re in le) {
                            if (Ee = le[re], ge = this.props[re], !ge) {
                                if (!Ne) continue;
                                ge = r.call(this, re)
                            }
                            ee.call(this, ge, Ee)
                        }
                        ce && be && ce.call(this, be)
                    }

                    function me(R) {
                        R.stop()
                    }

                    function qe(R, ee) {
                        R.set(ee)
                    }

                    function zt(R) {
                        this.$el.css(R)
                    }

                    function ye(R, ee) {
                        e[R] = function () {
                            return this.children ? Ht.call(this, ee, arguments) : (this.el && ee.apply(this, arguments), this)
                        }
                    }

                    function Ht(R, ee) {
                        var ce, re = this.children.length;
                        for (ce = 0; re > ce; ce++) R.apply(this.children[ce], ee);
                        return this
                    }
                    e.init = function (R) {
                        if (this.$el = t(R), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ne.keepInherited && !ne.fallback) {
                            var ee = p(this.el, "transition");
                            ee && !pe.test(ee) && (this.upstream = ee)
                        }
                        b.backface && ne.hideBackface && n(this.el, b.backface.css, "hidden")
                    }, ye("add", r), ye("start", o), ye("wait", a), ye("then", i), ye("next", s), ye("stop", A), ye("set", z), ye("show", ae), ye("hide", m), ye("redraw", V), ye("destroy", J)
                }),
                v = X(L, function (e) {
                    function r(o, a) {
                        var i = t.data(o, K) || t.data(o, K, new L.Bare);
                        return i.el || i.init(o), a ? i.start(a) : i
                    }
                    e.init = function (o, a) {
                        var i = t(o);
                        if (!i.length) return this;
                        if (i.length === 1) return r(i[0], a);
                        var s = [];
                        return i.each(function (A, z) {
                            s.push(r(z, a))
                        }), this.children = s, this
                    }
                }),
                h = X(function (e) {
                    function r() {
                        var s = this.get();
                        this.update("auto");
                        var A = this.get();
                        return this.update(s), A
                    }

                    function o(s, A, z) {
                        return A !== void 0 && (z = A), s in Q ? s : z
                    }

                    function a(s) {
                        var A = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(s);
                        return (A ? B(A[1], A[2], A[3]) : s).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var i = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    e.init = function (s, A, z, ae) {
                        this.$el = s, this.el = s[0];
                        var m = A[0];
                        z[2] && (m = z[2]), S[m] && (m = S[m]), this.name = m, this.type = z[1], this.duration = P(A[1], this.duration, i.duration), this.ease = o(A[2], this.ease, i.ease), this.delay = P(A[3], this.delay, i.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Ae.test(this.name), this.unit = ae.unit || this.unit || ne.defaultUnit, this.angle = ae.angle || this.angle || ne.defaultAngle, ne.fallback || ae.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + we + this.duration + "ms" + (this.ease != "ease" ? we + Q[this.ease][0] : "") + (this.delay ? we + this.delay + "ms" : ""))
                    }, e.set = function (s) {
                        s = this.convert(s, this.type), this.update(s), this.redraw()
                    }, e.transition = function (s) {
                        this.active = !0, s = this.convert(s, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), s == "auto" && (s = r.call(this))), this.nextStyle = s
                    }, e.fallback = function (s) {
                        var A = this.el.style[this.name] || this.convert(this.get(), this.type);
                        s = this.convert(s, this.type), this.auto && (A == "auto" && (A = this.convert(this.get(), this.type)), s == "auto" && (s = r.call(this))), this.tween = new W({
                            from: A,
                            to: s,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, e.get = function () {
                        return p(this.el, this.name)
                    }, e.update = function (s) {
                        n(this.el, this.name, s)
                    }, e.stop = function () {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, n(this.el, this.name, this.get()));
                        var s = this.tween;
                        s && s.context && s.destroy()
                    }, e.convert = function (s, A) {
                        if (s == "auto" && this.auto) return s;
                        var z, ae = typeof s == "number",
                            m = typeof s == "string";
                        switch (A) {
                            case g:
                                if (ae) return s;
                                if (m && s.replace(H, "") === "") return +s;
                                z = "number(unitless)";
                                break;
                            case M:
                                if (m) {
                                    if (s === "" && this.original) return this.original;
                                    if (A.test(s)) return s.charAt(0) == "#" && s.length == 7 ? s : a(s)
                                }
                                z = "hex or rgb string";
                                break;
                            case E:
                                if (ae) return s + this.unit;
                                if (m && A.test(s)) return s;
                                z = "number(px) or string(unit)";
                                break;
                            case $:
                                if (ae) return s + this.unit;
                                if (m && A.test(s)) return s;
                                z = "number(px) or string(unit or %)";
                                break;
                            case ue:
                                if (ae) return s + this.angle;
                                if (m && A.test(s)) return s;
                                z = "number(deg) or string(angle)";
                                break;
                            case de:
                                if (ae || m && $.test(s)) return s;
                                z = "number(unitless) or string(unit or %)"
                        }
                        return D(z, s), s
                    }, e.redraw = function () {
                        this.el.offsetHeight
                    }
                }),
                I = X(h, function (e, r) {
                    e.init = function () {
                        r.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), M))
                    }
                }),
                j = X(h, function (e, r) {
                    e.init = function () {
                        r.init.apply(this, arguments), this.animate = this.fallback
                    }, e.get = function () {
                        return this.$el[this.name]()
                    }, e.update = function (o) {
                        this.$el[this.name](o)
                    }
                }),
                Z = X(h, function (e, r) {
                    function o(a, i) {
                        var s, A, z, ae, m;
                        for (s in a) ae = se[s], z = ae[0], A = ae[1] || s, m = this.convert(a[s], z), i.call(this, A, m, z)
                    }
                    e.init = function () {
                        r.init.apply(this, arguments), this.current || (this.current = {}, se.perspective && ne.perspective && (this.current.perspective = ne.perspective, n(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, e.set = function (a) {
                        o.call(this, a, function (i, s) {
                            this.current[i] = s
                        }), n(this.el, this.name, this.style(this.current)), this.redraw()
                    }, e.transition = function (a) {
                        var i = this.values(a);
                        this.tween = new Te({
                            current: this.current,
                            values: i,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var s, A = {};
                        for (s in this.current) A[s] = s in i ? i[s] : this.current[s];
                        this.active = !0, this.nextStyle = this.style(A)
                    }, e.fallback = function (a) {
                        var i = this.values(a);
                        this.tween = new Te({
                            current: this.current,
                            values: i,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, e.update = function () {
                        n(this.el, this.name, this.style(this.current))
                    }, e.style = function (a) {
                        var i, s = "";
                        for (i in a) s += i + "(" + a[i] + ") ";
                        return s
                    }, e.values = function (a) {
                        var i, s = {};
                        return o.call(this, a, function (A, z, ae) {
                            s[A] = z, this.current[A] === void 0 && (i = 0, ~A.indexOf("scale") && (i = 1), this.current[A] = this.convert(i, ae))
                        }), s
                    }
                }),
                W = X(function (e) {
                    function r(m) {
                        z.push(m) === 1 && c(o)
                    }

                    function o() {
                        var m, V, J, fe = z.length;
                        if (fe)
                            for (c(o), V = y(), m = fe; m--;) J = z[m], J && J.render(V)
                    }

                    function a(m) {
                        var V, J = t.inArray(m, z);
                        J >= 0 && (V = z.slice(J + 1), z.length = J, V.length && (z = z.concat(V)))
                    }

                    function i(m) {
                        return Math.round(m * ae) / ae
                    }

                    function s(m, V, J) {
                        return B(m[0] + J * (V[0] - m[0]), m[1] + J * (V[1] - m[1]), m[2] + J * (V[2] - m[2]))
                    }
                    var A = {
                        ease: Q.ease[1],
                        from: 0,
                        to: 1
                    };
                    e.init = function (m) {
                        this.duration = m.duration || 0, this.delay = m.delay || 0;
                        var V = m.ease || A.ease;
                        Q[V] && (V = Q[V][1]), typeof V != "function" && (V = A.ease), this.ease = V, this.update = m.update || _, this.complete = m.complete || _, this.context = m.context || this, this.name = m.name;
                        var J = m.from,
                            fe = m.to;
                        J === void 0 && (J = A.from), fe === void 0 && (fe = A.to), this.unit = m.unit || "", typeof J == "number" && typeof fe == "number" ? (this.begin = J, this.change = fe - J) : this.format(fe, J), this.value = this.begin + this.unit, this.start = y(), m.autoplay !== !1 && this.play()
                    }, e.play = function () {
                        this.active || (this.start || (this.start = y()), this.active = !0, r(this))
                    }, e.stop = function () {
                        this.active && (this.active = !1, a(this))
                    }, e.render = function (m) {
                        var V, J = m - this.start;
                        if (this.delay) {
                            if (J <= this.delay) return;
                            J -= this.delay
                        }
                        if (J < this.duration) {
                            var fe = this.ease(J, 0, 1, this.duration);
                            return V = this.startRGB ? s(this.startRGB, this.endRGB, fe) : i(this.begin + fe * this.change), this.value = V + this.unit, void this.update.call(this.context, this.value)
                        }
                        V = this.endHex || this.begin + this.change, this.value = V + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, e.format = function (m, V) {
                        if (V += "", m += "", m.charAt(0) == "#") return this.startRGB = T(V), this.endRGB = T(m), this.endHex = m, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var J = V.replace(H, ""),
                                fe = m.replace(H, "");
                            J !== fe && C("tween", V, m), this.unit = J
                        }
                        V = parseFloat(V), m = parseFloat(m), this.begin = this.value = V, this.change = m - V
                    }, e.destroy = function () {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = _
                    };
                    var z = [],
                        ae = 1e3
                }),
                oe = X(W, function (e) {
                    e.init = function (r) {
                        this.duration = r.duration || 0, this.complete = r.complete || _, this.context = r.context, this.play()
                    }, e.render = function (r) {
                        var o = r - this.start;
                        o < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Te = X(W, function (e, r) {
                    e.init = function (o) {
                        this.context = o.context, this.update = o.update, this.tweens = [], this.current = o.current;
                        var a, i;
                        for (a in o.values) i = o.values[a], this.current[a] !== i && this.tweens.push(new W({
                            name: a,
                            from: this.current[a],
                            to: i,
                            duration: o.duration,
                            delay: o.delay,
                            ease: o.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, e.render = function (o) {
                        var a, i, s = this.tweens.length,
                            A = !1;
                        for (a = s; a--;) i = this.tweens[a], i.context && (i.render(o), this.current[i.name] = i.value, A = !0);
                        return A ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, e.destroy = function () {
                        if (r.destroy.call(this), this.tweens) {
                            var o, a = this.tweens.length;
                            for (o = a; o--;) this.tweens[o].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ne = f.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !b.transition,
                    agentTests: []
                };
            f.fallback = function (e) {
                if (!b.transition) return ne.fallback = !0;
                ne.agentTests.push("(" + e + ")");
                var r = new RegExp(ne.agentTests.join("|"), "i");
                ne.fallback = r.test(navigator.userAgent)
            }, f.fallback("6.0.[2-5] Safari"), f.tween = function (e) {
                return new W(e)
            }, f.delay = function (e, r, o) {
                return new oe({
                    complete: r,
                    duration: e,
                    context: o
                })
            }, t.fn.tram = function (e) {
                return f.call(null, this, e)
            };
            var n = t.style,
                p = t.css,
                S = {
                    transform: b.transform && b.transform.css
                },
                w = {
                    color: [I, M],
                    background: [I, M, "background-color"],
                    "outline-color": [I, M],
                    "border-color": [I, M],
                    "border-top-color": [I, M],
                    "border-right-color": [I, M],
                    "border-bottom-color": [I, M],
                    "border-left-color": [I, M],
                    "border-width": [h, E],
                    "border-top-width": [h, E],
                    "border-right-width": [h, E],
                    "border-bottom-width": [h, E],
                    "border-left-width": [h, E],
                    "border-spacing": [h, E],
                    "letter-spacing": [h, E],
                    margin: [h, E],
                    "margin-top": [h, E],
                    "margin-right": [h, E],
                    "margin-bottom": [h, E],
                    "margin-left": [h, E],
                    padding: [h, E],
                    "padding-top": [h, E],
                    "padding-right": [h, E],
                    "padding-bottom": [h, E],
                    "padding-left": [h, E],
                    "outline-width": [h, E],
                    opacity: [h, g],
                    top: [h, $],
                    right: [h, $],
                    bottom: [h, $],
                    left: [h, $],
                    "font-size": [h, $],
                    "text-indent": [h, $],
                    "word-spacing": [h, $],
                    width: [h, $],
                    "min-width": [h, $],
                    "max-width": [h, $],
                    height: [h, $],
                    "min-height": [h, $],
                    "max-height": [h, $],
                    "line-height": [h, de],
                    "scroll-top": [j, g, "scrollTop"],
                    "scroll-left": [j, g, "scrollLeft"]
                },
                se = {};
            b.transform && (w.transform = [Z], se = {
                x: [$, "translateX"],
                y: [$, "translateY"],
                rotate: [ue],
                rotateX: [ue],
                rotateY: [ue],
                scale: [g],
                scaleX: [g],
                scaleY: [g],
                skew: [ue],
                skewX: [ue],
                skewY: [ue]
            }), b.transform && b.backface && (se.z = [$, "translateZ"], se.rotateZ = [ue], se.scaleZ = [g], se.perspective = [E]);
            var Ie = /ms/,
                Ce = /s|\./;
            return t.tram = f
        }(window.jQuery)
    });
    var rt = ve((cn, nt) => {
        var Bt = window.$,
            $t = Ve() && Bt.tram;
        nt.exports = function () {
            var t = {};
            t.VERSION = "1.6.0-Webflow";
            var f = {},
                l = Array.prototype,
                T = Object.prototype,
                B = Function.prototype,
                _ = l.push,
                D = l.slice,
                C = l.concat,
                P = T.toString,
                G = T.hasOwnProperty,
                te = l.forEach,
                X = l.map,
                Q = l.reduce,
                k = l.reduceRight,
                q = l.filter,
                Y = l.every,
                K = l.some,
                H = l.indexOf,
                F = l.lastIndexOf,
                g = Array.isArray,
                M = Object.keys,
                E = B.bind,
                $ = t.each = t.forEach = function (u, d, x) {
                    if (u == null) return u;
                    if (te && u.forEach === te) u.forEach(d, x);
                    else if (u.length === +u.length) {
                        for (var b = 0, U = u.length; b < U; b++)
                            if (d.call(x, u[b], b, u) === f) return
                    } else
                        for (var N = t.keys(u), b = 0, U = N.length; b < U; b++)
                            if (d.call(x, u[N[b]], N[b], u) === f) return;
                    return u
                };
            t.map = t.collect = function (u, d, x) {
                var b = [];
                return u == null ? b : X && u.map === X ? u.map(d, x) : ($(u, function (U, N, c) {
                    b.push(d.call(x, U, N, c))
                }), b)
            }, t.find = t.detect = function (u, d, x) {
                var b;
                return ue(u, function (U, N, c) {
                    if (d.call(x, U, N, c)) return b = U, !0
                }), b
            }, t.filter = t.select = function (u, d, x) {
                var b = [];
                return u == null ? b : q && u.filter === q ? u.filter(d, x) : ($(u, function (U, N, c) {
                    d.call(x, U, N, c) && b.push(U)
                }), b)
            };
            var ue = t.some = t.any = function (u, d, x) {
                d || (d = t.identity);
                var b = !1;
                return u == null ? b : K && u.some === K ? u.some(d, x) : ($(u, function (U, N, c) {
                    if (b || (b = d.call(x, U, N, c))) return f
                }), !!b)
            };
            t.contains = t.include = function (u, d) {
                return u == null ? !1 : H && u.indexOf === H ? u.indexOf(d) != -1 : ue(u, function (x) {
                    return x === d
                })
            }, t.delay = function (u, d) {
                var x = D.call(arguments, 2);
                return setTimeout(function () {
                    return u.apply(null, x)
                }, d)
            }, t.defer = function (u) {
                return t.delay.apply(t, [u, 1].concat(D.call(arguments, 1)))
            }, t.throttle = function (u) {
                var d, x, b;
                return function () {
                    d || (d = !0, x = arguments, b = this, $t.frame(function () {
                        d = !1, u.apply(b, x)
                    }))
                }
            }, t.debounce = function (u, d, x) {
                var b, U, N, c, y, L = function () {
                    var v = t.now() - c;
                    v < d ? b = setTimeout(L, d - v) : (b = null, x || (y = u.apply(N, U), N = U = null))
                };
                return function () {
                    N = this, U = arguments, c = t.now();
                    var v = x && !b;
                    return b || (b = setTimeout(L, d)), v && (y = u.apply(N, U), N = U = null), y
                }
            }, t.defaults = function (u) {
                if (!t.isObject(u)) return u;
                for (var d = 1, x = arguments.length; d < x; d++) {
                    var b = arguments[d];
                    for (var U in b) u[U] === void 0 && (u[U] = b[U])
                }
                return u
            }, t.keys = function (u) {
                if (!t.isObject(u)) return [];
                if (M) return M(u);
                var d = [];
                for (var x in u) t.has(u, x) && d.push(x);
                return d
            }, t.has = function (u, d) {
                return G.call(u, d)
            }, t.isObject = function (u) {
                return u === Object(u)
            }, t.now = Date.now || function () {
                return new Date().getTime()
            }, t.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var de = /(.)^/,
                pe = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Ae = /\\|'|\r|\n|\u2028|\u2029/g,
                we = function (u) {
                    return "\\" + pe[u]
                },
                O = /^\s*(\w|\$)+\s*$/;
            return t.template = function (u, d, x) {
                !d && x && (d = x), d = t.defaults({}, d, t.templateSettings);
                var b = RegExp([(d.escape || de).source, (d.interpolate || de).source, (d.evaluate || de).source].join("|") + "|$", "g"),
                    U = 0,
                    N = "__p+='";
                u.replace(b, function (v, h, I, j, Z) {
                    return N += u.slice(U, Z).replace(Ae, we), U = Z + v.length, h ? N += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : I ? N += `'+
((__t=(` + I + `))==null?'':__t)+
'` : j && (N += `';
` + j + `
__p+='`), v
                }), N += `';
`;
                var c = d.variable;
                if (c) {
                    if (!O.test(c)) throw new Error("variable is not a bare identifier: " + c)
                } else N = `with(obj||{}){
` + N + `}
`, c = "obj";
                N = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + N + `return __p;
`;
                var y;
                try {
                    y = new Function(d.variable || "obj", "_", N)
                } catch (v) {
                    throw v.source = N, v
                }
                var L = function (v) {
                    return y.call(this, v, t)
                };
                return L.source = "function(" + c + `){
` + N + "}", L
            }, t
        }()
    });
    var Le = ve((fn, lt) => {
        var ie = {},
            We = {},
            De = [],
            Ye = window.Webflow || [],
            Fe = window.jQuery,
            _e = Fe(window),
            Xt = Fe(document),
            Oe = Fe.isFunction,
            xe = ie._ = rt(),
            ot = ie.tram = Ve() && Fe.tram,
            He = !1,
            je = !1;
        ot.config.hideBackface = !1;
        ot.config.keepInherited = !0;
        ie.define = function (t, f, l) {
            We[t] && st(We[t]);
            var T = We[t] = f(Fe, xe, l) || {};
            return at(T), T
        };
        ie.require = function (t) {
            return We[t]
        };

        function at(t) {
            ie.env() && (Oe(t.design) && _e.on("__wf_design", t.design), Oe(t.preview) && _e.on("__wf_preview", t.preview)), Oe(t.destroy) && _e.on("__wf_destroy", t.destroy), t.ready && Oe(t.ready) && Kt(t)
        }

        function Kt(t) {
            if (He) {
                t.ready();
                return
            }
            xe.contains(De, t.ready) || De.push(t.ready)
        }

        function st(t) {
            Oe(t.design) && _e.off("__wf_design", t.design), Oe(t.preview) && _e.off("__wf_preview", t.preview), Oe(t.destroy) && _e.off("__wf_destroy", t.destroy), t.ready && Oe(t.ready) && Vt(t)
        }

        function Vt(t) {
            De = xe.filter(De, function (f) {
                return f !== t.ready
            })
        }
        ie.push = function (t) {
            if (He) {
                Oe(t) && t();
                return
            }
            Ye.push(t)
        };
        ie.env = function (t) {
            var f = window.__wf_design,
                l = typeof f < "u";
            if (!t) return l;
            if (t === "design") return l && f;
            if (t === "preview") return l && !f;
            if (t === "slug") return l && window.__wf_slug;
            if (t === "editor") return window.WebflowEditor;
            if (t === "test") return window.__wf_test;
            if (t === "frame") return window !== window.top
        };
        var ze = navigator.userAgent.toLowerCase(),
            ut = ie.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            Gt = ie.env.chrome = /chrome/.test(ze) && /Google/.test(navigator.vendor) && parseInt(ze.match(/chrome\/(\d+)\./)[1], 10),
            Yt = ie.env.ios = /(ipod|iphone|ipad)/.test(ze);
        ie.env.safari = /safari/.test(ze) && !Gt && !Yt;
        var Ge;
        ut && Xt.on("touchstart mousedown", function (t) {
            Ge = t.target
        });
        ie.validClick = ut ? function (t) {
            return t === Ge || Fe.contains(t, Ge)
        } : function () {
            return !0
        };
        var ct = "resize.webflow orientationchange.webflow load.webflow",
            jt = "scroll.webflow " + ct;
        ie.resize = Ze(_e, ct);
        ie.scroll = Ze(_e, jt);
        ie.redraw = Ze();

        function Ze(t, f) {
            var l = [],
                T = {};
            return T.up = xe.throttle(function (B) {
                xe.each(l, function (_) {
                    _(B)
                })
            }), t && f && t.on(f, T.up), T.on = function (B) {
                typeof B == "function" && (xe.contains(l, B) || l.push(B))
            }, T.off = function (B) {
                if (!arguments.length) {
                    l = [];
                    return
                }
                l = xe.filter(l, function (_) {
                    return _ !== B
                })
            }, T
        }
        ie.location = function (t) {
            window.location = t
        };
        ie.env() && (ie.location = function () {});
        ie.ready = function () {
            He = !0, je ? Zt() : xe.each(De, it), xe.each(Ye, it), ie.resize.up()
        };

        function it(t) {
            Oe(t) && t()
        }

        function Zt() {
            je = !1, xe.each(We, at)
        }
        var Re;
        ie.load = function (t) {
            Re.then(t)
        };

        function ft() {
            Re && (Re.reject(), _e.off("load", Re.resolve)), Re = new Fe.Deferred, _e.on("load", Re.resolve)
        }
        ie.destroy = function (t) {
            t = t || {}, je = !0, _e.triggerHandler("__wf_destroy"), t.domready != null && (He = t.domready), xe.each(We, st), ie.resize.off(), ie.scroll.off(), ie.redraw.off(), De = [], Ye = [], Re.state() === "pending" && ft()
        };
        Fe(ie.ready);
        ft();
        lt.exports = window.Webflow = ie
    });
    var vt = ve((ln, ht) => {
        var dt = Le();
        dt.define("brand", ht.exports = function (t) {
            var f = {},
                l = document,
                T = t("html"),
                B = t("body"),
                _ = ".w-webflow-badge",
                D = window.location,
                C = /PhantomJS/i.test(navigator.userAgent),
                P = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                G;
            f.ready = function () {
                var k = T.attr("data-wf-status"),
                    q = T.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(q) && D.hostname !== q && (k = !0), k && !C && (G = G || X(), Q(), setTimeout(Q, 500), t(l).off(P, te).on(P, te))
            };

            function te() {
                var k = l.fullScreen || l.mozFullScreen || l.webkitIsFullScreen || l.msFullscreenElement || !!l.webkitFullscreenElement;
                t(G).attr("style", k ? "display: none !important;" : "")
            }

            function X() {
                var k = t('<a class=""></a>').attr("href", ""),
                    q = t("<img>").attr("src", "").attr("alt", "").css({
                        marginRight: "8px",
                        width: "16px"
                    }),
                    Y = t("<img>").attr("src", "").attr("alt", "Made in Webflow");
                return k.append(q, Y), k[0]
            }

            function Q() {
                var k = B.children(_),
                    q = k.length && k.get(0) === G,
                    Y = dt.env("editor");
                if (q) {
                    Y && k.remove();
                    return
                }
                k.length && k.remove(), Y || B.append(G)
            }
            return f
        })
    });
    var mt = ve((dn, pt) => {
        var Qe = Le();
        Qe.define("edit", pt.exports = function (t, f, l) {
            if (l = l || {}, (Qe.env("test") || Qe.env("frame")) && !l.fixture && !Qt()) return {
                exit: 1
            };
            var T = {},
                B = t(window),
                _ = t(document.documentElement),
                D = document.location,
                C = "hashchange",
                P, G = l.load || Q,
                te = !1;
            try {
                te = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            te ? G() : D.search ? (/[?&](edit)(?:[=&?]|$)/.test(D.search) || /\?edit$/.test(D.href)) && G() : B.on(C, X).triggerHandler(C);

            function X() {
                P || /\?edit/.test(D.hash) && G()
            }

            function Q() {
                P = !0, window.WebflowEditor = !0, B.off(C, X), F(function (M) {
                    t.ajax({
                        url: H("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: _.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: k(M)
                    })
                })
            }

            function k(M) {
                return function (E) {
                    if (!E) {
                        console.error("Could not load editor data");
                        return
                    }
                    E.thirdPartyCookiesSupported = M, q(K(E.bugReporterScriptPath), function () {
                        q(K(E.scriptPath), function () {
                            window.WebflowEditor(E)
                        })
                    })
                }
            }

            function q(M, E) {
                t.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(E, Y)
            }

            function Y(M, E, $) {
                throw console.error("Could not load editor script: " + E), $
            }

            function K(M) {
                return M.indexOf("//") >= 0 ? M : H("https://editor-api.webflow.com" + M)
            }

            function H(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }

            function F(M) {
                var E = window.document.createElement("iframe");
                E.src = "https://webflow.com/site/third-party-cookie-check.html", E.style.display = "none", E.sandbox = "allow-scripts allow-same-origin";
                var $ = function (ue) {
                    ue.data === "WF_third_party_cookies_unsupported" ? (g(E, $), M(!1)) : ue.data === "WF_third_party_cookies_supported" && (g(E, $), M(!0))
                };
                E.onerror = function () {
                    g(E, $), M(!1)
                }, window.addEventListener("message", $, !1), window.document.body.appendChild(E)
            }

            function g(M, E) {
                window.removeEventListener("message", E, !1), M.remove()
            }
            return T
        });

        function Qt() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var wt = ve((hn, gt) => {
        var Jt = Le();
        Jt.define("focus-visible", gt.exports = function () {
            function t(l) {
                var T = !0,
                    B = !1,
                    _ = null,
                    D = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function C(g) {
                    return !!(g && g !== document && g.nodeName !== "HTML" && g.nodeName !== "BODY" && "classList" in g && "contains" in g.classList)
                }

                function P(g) {
                    var M = g.type,
                        E = g.tagName;
                    return !!(E === "INPUT" && D[M] && !g.readOnly || E === "TEXTAREA" && !g.readOnly || g.isContentEditable)
                }

                function G(g) {
                    g.getAttribute("data-wf-focus-visible") || g.setAttribute("data-wf-focus-visible", "true")
                }

                function te(g) {
                    g.getAttribute("data-wf-focus-visible") && g.removeAttribute("data-wf-focus-visible")
                }

                function X(g) {
                    g.metaKey || g.altKey || g.ctrlKey || (C(l.activeElement) && G(l.activeElement), T = !0)
                }

                function Q() {
                    T = !1
                }

                function k(g) {
                    C(g.target) && (T || P(g.target)) && G(g.target)
                }

                function q(g) {
                    C(g.target) && g.target.hasAttribute("data-wf-focus-visible") && (B = !0, window.clearTimeout(_), _ = window.setTimeout(function () {
                        B = !1
                    }, 100), te(g.target))
                }

                function Y() {
                    document.visibilityState === "hidden" && (B && (T = !0), K())
                }

                function K() {
                    document.addEventListener("mousemove", F), document.addEventListener("mousedown", F), document.addEventListener("mouseup", F), document.addEventListener("pointermove", F), document.addEventListener("pointerdown", F), document.addEventListener("pointerup", F), document.addEventListener("touchmove", F), document.addEventListener("touchstart", F), document.addEventListener("touchend", F)
                }

                function H() {
                    document.removeEventListener("mousemove", F), document.removeEventListener("mousedown", F), document.removeEventListener("mouseup", F), document.removeEventListener("pointermove", F), document.removeEventListener("pointerdown", F), document.removeEventListener("pointerup", F), document.removeEventListener("touchmove", F), document.removeEventListener("touchstart", F), document.removeEventListener("touchend", F)
                }

                function F(g) {
                    g.target.nodeName && g.target.nodeName.toLowerCase() === "html" || (T = !1, H())
                }
                document.addEventListener("keydown", X, !0), document.addEventListener("mousedown", Q, !0), document.addEventListener("pointerdown", Q, !0), document.addEventListener("touchstart", Q, !0), document.addEventListener("visibilitychange", Y, !0), K(), l.addEventListener("focus", k, !0), l.addEventListener("blur", q, !0)
            }

            function f() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    t(document)
                }
            }
            return {
                ready: f
            }
        })
    });
    var Et = ve((vn, yt) => {
        var bt = Le();
        bt.define("focus", yt.exports = function () {
            var t = [],
                f = !1;

            function l(D) {
                f && (D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation(), t.unshift(D))
            }

            function T(D) {
                var C = D.target,
                    P = C.tagName;
                return /^a$/i.test(P) && C.href != null || /^(button|textarea)$/i.test(P) && C.disabled !== !0 || /^input$/i.test(P) && /^(button|reset|submit|radio|checkbox)$/i.test(C.type) && !C.disabled || !/^(button|input|textarea|select|a)$/i.test(P) && !Number.isNaN(Number.parseFloat(C.tabIndex)) || /^audio$/i.test(P) || /^video$/i.test(P) && C.controls === !0
            }

            function B(D) {
                T(D) && (f = !0, setTimeout(() => {
                    for (f = !1, D.target.focus(); t.length > 0;) {
                        var C = t.pop();
                        C.target.dispatchEvent(new MouseEvent(C.type, C))
                    }
                }, 0))
            }

            function _() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && bt.env.safari && (document.addEventListener("mousedown", B, !0), document.addEventListener("mouseup", l, !0), document.addEventListener("click", l, !0))
            }
            return {
                ready: _
            }
        })
    });
    var _t = ve((pn, xt) => {
        var Pe = Le();
        Pe.define("links", xt.exports = function (t, f) {
            var l = {},
                T = t(window),
                B, _ = Pe.env(),
                D = window.location,
                C = document.createElement("a"),
                P = "w--current",
                G = /index\.(html|php)$/,
                te = /\/$/,
                X, Q;
            l.ready = l.design = l.preview = k;

            function k() {
                B = _ && Pe.env("design"), Q = Pe.env("slug") || D.pathname || "", Pe.scroll.off(Y), X = [];
                for (var H = document.links, F = 0; F < H.length; ++F) q(H[F]);
                X.length && (Pe.scroll.on(Y), Y())
            }

            function q(H) {
                var F = B && H.getAttribute("href-disabled") || H.getAttribute("href");
                if (C.href = F, !(F.indexOf(":") >= 0)) {
                    var g = t(H);
                    if (C.hash.length > 1 && C.host + C.pathname === D.host + D.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(C.hash)) return;
                        var M = t(C.hash);
                        M.length && X.push({
                            link: g,
                            sec: M,
                            active: !1
                        });
                        return
                    }
                    if (!(F === "#" || F === "")) {
                        var E = C.href === D.href || F === Q || G.test(F) && te.test(Q);
                        K(g, P, E)
                    }
                }
            }

            function Y() {
                var H = T.scrollTop(),
                    F = T.height();
                f.each(X, function (g) {
                    var M = g.link,
                        E = g.sec,
                        $ = E.offset().top,
                        ue = E.outerHeight(),
                        de = F * .5,
                        pe = E.is(":visible") && $ + ue - de >= H && $ + de <= H + F;
                    g.active !== pe && (g.active = pe, K(M, P, pe))
                })
            }

            function K(H, F, g) {
                var M = H.hasClass(F);
                g && M || !g && !M || (g ? H.addClass(F) : H.removeClass(F))
            }
            return l
        })
    });
    var Ot = ve((mn, kt) => {
        var Ue = Le();
        Ue.define("scroll", kt.exports = function (t) {
            var f = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                l = window.location,
                T = q() ? null : window.history,
                B = t(window),
                _ = t(document),
                D = t(document.body),
                C = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (O) {
                    window.setTimeout(O, 15)
                },
                P = Ue.env("editor") ? ".w-editor-body" : "body",
                G = "header, " + P + " > .header, " + P + " > .w-nav:not([data-no-scroll])",
                te = 'a[href="#"]',
                X = 'a[href*="#"]:not(.w-tab-link):not(' + te + ")",
                Q = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                k = document.createElement("style");
            k.appendChild(document.createTextNode(Q));

            function q() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var Y = /^#[a-zA-Z0-9][\w:.-]*$/;

            function K(O) {
                return Y.test(O.hash) && O.host + O.pathname === l.host + l.pathname
            }
            let H = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function F() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || H.matches
            }

            function g(O, u) {
                var d;
                switch (u) {
                    case "add":
                        d = O.attr("tabindex"), d ? O.attr("data-wf-tabindex-swap", d) : O.attr("tabindex", "-1");
                        break;
                    case "remove":
                        d = O.attr("data-wf-tabindex-swap"), d ? (O.attr("tabindex", d), O.removeAttr("data-wf-tabindex-swap")) : O.removeAttr("tabindex");
                        break
                }
                O.toggleClass("wf-force-outline-none", u === "add")
            }

            function M(O) {
                var u = O.currentTarget;
                if (!(Ue.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(u.className))) {
                    var d = K(u) ? u.hash : "";
                    if (d !== "") {
                        var x = t(d);
                        x.length && (O && (O.preventDefault(), O.stopPropagation()), E(d, O), window.setTimeout(function () {
                            $(x, function () {
                                g(x, "add"), x.get(0).focus({
                                    preventScroll: !0
                                }), g(x, "remove")
                            })
                        }, O ? 0 : 300))
                    }
                }
            }

            function E(O) {
                if (l.hash !== O && T && T.pushState && !(Ue.env.chrome && l.protocol === "file:")) {
                    var u = T.state && T.state.hash;
                    u !== O && T.pushState({
                        hash: O
                    }, "", O)
                }
            }

            function $(O, u) {
                var d = B.scrollTop(),
                    x = ue(O);
                if (d !== x) {
                    var b = de(O, d, x),
                        U = Date.now(),
                        N = function () {
                            var c = Date.now() - U;
                            window.scroll(0, pe(d, x, c, b)), c <= b ? C(N) : typeof u == "function" && u()
                        };
                    C(N)
                }
            }

            function ue(O) {
                var u = t(G),
                    d = u.css("position") === "fixed" ? u.outerHeight() : 0,
                    x = O.offset().top - d;
                if (O.data("scroll") === "mid") {
                    var b = B.height() - d,
                        U = O.outerHeight();
                    U < b && (x -= Math.round((b - U) / 2))
                }
                return x
            }

            function de(O, u, d) {
                if (F()) return 0;
                var x = 1;
                return D.add(O).each(function (b, U) {
                    var N = parseFloat(U.getAttribute("data-scroll-time"));
                    !isNaN(N) && N >= 0 && (x = N)
                }), (472.143 * Math.log(Math.abs(u - d) + 125) - 2e3) * x
            }

            function pe(O, u, d, x) {
                return d > x ? u : O + (u - O) * Ae(d / x)
            }

            function Ae(O) {
                return O < .5 ? 4 * O * O * O : (O - 1) * (2 * O - 2) * (2 * O - 2) + 1
            }

            function we() {
                var {
                    WF_CLICK_EMPTY: O,
                    WF_CLICK_SCROLL: u
                } = f;
                _.on(u, X, M), _.on(O, te, function (d) {
                    d.preventDefault()
                }), document.head.insertBefore(k, document.head.firstChild)
            }
            return {
                ready: we
            }
        })
    });
    var St = ve((gn, Lt) => {
        var en = Le();
        en.define("touch", Lt.exports = function (t) {
            var f = {},
                l = window.getSelection;
            t.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, f.init = function (_) {
                return _ = typeof _ == "string" ? t(_).get(0) : _, _ ? new T(_) : null
            };

            function T(_) {
                var D = !1,
                    C = !1,
                    P = Math.min(Math.round(window.innerWidth * .04), 40),
                    G, te;
                _.addEventListener("touchstart", X, !1), _.addEventListener("touchmove", Q, !1), _.addEventListener("touchend", k, !1), _.addEventListener("touchcancel", q, !1), _.addEventListener("mousedown", X, !1), _.addEventListener("mousemove", Q, !1), _.addEventListener("mouseup", k, !1), _.addEventListener("mouseout", q, !1);

                function X(K) {
                    var H = K.touches;
                    H && H.length > 1 || (D = !0, H ? (C = !0, G = H[0].clientX) : G = K.clientX, te = G)
                }

                function Q(K) {
                    if (D) {
                        if (C && K.type === "mousemove") {
                            K.preventDefault(), K.stopPropagation();
                            return
                        }
                        var H = K.touches,
                            F = H ? H[0].clientX : K.clientX,
                            g = F - te;
                        te = F, Math.abs(g) > P && l && String(l()) === "" && (B("swipe", K, {
                            direction: g > 0 ? "right" : "left"
                        }), q())
                    }
                }

                function k(K) {
                    if (D && (D = !1, C && K.type === "mouseup")) {
                        K.preventDefault(), K.stopPropagation(), C = !1;
                        return
                    }
                }

                function q() {
                    D = !1
                }

                function Y() {
                    _.removeEventListener("touchstart", X, !1), _.removeEventListener("touchmove", Q, !1), _.removeEventListener("touchend", k, !1), _.removeEventListener("touchcancel", q, !1), _.removeEventListener("mousedown", X, !1), _.removeEventListener("mousemove", Q, !1), _.removeEventListener("mouseup", k, !1), _.removeEventListener("mouseout", q, !1), _ = null
                }
                this.destroy = Y
            }

            function B(_, D, C) {
                var P = t.Event(_, {
                    originalEvent: D
                });
                t(D.target).trigger(P, C)
            }
            return f.instance = f.init(document), f
        })
    });
    var At = ve(Je => {
        "use strict";
        Object.defineProperty(Je, "__esModule", {
            value: !0
        });
        Je.default = tn;

        function tn(t, f, l, T, B, _, D, C, P, G, te, X, Q) {
            return function (k) {
                t(k);
                var q = k.form,
                    Y = {
                        name: q.attr("data-name") || q.attr("name") || "Untitled Form",
                        pageId: q.attr("data-wf-page-id") || "",
                        elementId: q.attr("data-wf-element-id") || "",
                        source: f.href,
                        test: l.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(q.html()),
                        trackingCookies: T()
                    };
                let K = q.attr("data-wf-flow");
                K && (Y.wfFlow = K), B(k);
                var H = _(q, Y.fields);
                if (H) return D(H);
                if (Y.fileUploads = C(q), P(k), !G) {
                    te(k);
                    return
                }
                X.ajax({
                    url: Q,
                    type: "POST",
                    data: Y,
                    dataType: "json",
                    crossDomain: !0
                }).done(function (F) {
                    F && F.code === 200 && (k.success = !0), te(k)
                }).fail(function () {
                    te(k)
                })
            }
        }
    });
    var Ct = ve((bn, Tt) => {
        var Be = Le();
        Be.define("forms", Tt.exports = function (t, f) {
            var l = {},
                T = t(document),
                B, _ = window.location,
                D = window.XDomainRequest && !window.atob,
                C = ".w-form",
                P, G = /e(-)?mail/i,
                te = /^\S+@\S+$/,
                X = window.alert,
                Q = Be.env(),
                k, q, Y, K = /list-manage[1-9]?.com/i,
                H = f.debounce(function () {
                    X("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            l.ready = l.design = l.preview = function () {
                F(), !Q && !k && M()
            };

            function F() {
                P = t("html").attr("data-wf-site"), q = "https://webflow.com/api/v1/form/" + P, D && q.indexOf("https://webflow.com") >= 0 && (q = q.replace("https://webflow.com", "https://formdata.webflow.com")), Y = `${q}/signFile`, B = t(C + " form"), B.length && B.each(g)
            }

            function g(c, y) {
                var L = t(y),
                    v = t.data(y, C);
                v || (v = t.data(y, C, {
                    form: L
                })), E(v);
                var h = L.closest("div.w-form");
                v.done = h.find("> .w-form-done"), v.fail = h.find("> .w-form-fail"), v.fileUploads = h.find(".w-file-upload"), v.fileUploads.each(function (Z) {
                    b(Z, v)
                });
                var I = v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
                v.done.attr("aria-label") || v.form.attr("aria-label", I), v.done.attr("tabindex", "-1"), v.done.attr("role", "region"), v.done.attr("aria-label") || v.done.attr("aria-label", I + " success"), v.fail.attr("tabindex", "-1"), v.fail.attr("role", "region"), v.fail.attr("aria-label") || v.fail.attr("aria-label", I + " failure");
                var j = v.action = L.attr("action");
                if (v.handler = null, v.redirect = L.attr("data-redirect"), K.test(j)) {
                    v.handler = u;
                    return
                }
                if (!j) {
                    if (P) {
                        v.handler = (() => {
                            let Z = At().default;
                            return Z(E, _, Be, Ae, x, ue, X, de, $, P, d, t, q)
                        })();
                        return
                    }
                    H()
                }
            }

            function M() {
                k = !0, T.on("submit", C + " form", function (Z) {
                    var W = t.data(this, C);
                    W.handler && (W.evt = Z, W.handler(W))
                });
                let c = ".w-checkbox-input",
                    y = ".w-radio-input",
                    L = "w--redirected-checked",
                    v = "w--redirected-focus",
                    h = "w--redirected-focus-visible",
                    I = ":focus-visible, [data-wf-focus-visible]",
                    j = [
                        ["checkbox", c],
                        ["radio", y]
                    ];
                T.on("change", C + ' form input[type="checkbox"]:not(' + c + ")", Z => {
                    t(Z.target).siblings(c).toggleClass(L)
                }), T.on("change", C + ' form input[type="radio"]', Z => {
                    t(`input[name="${Z.target.name}"]:not(${c})`).map((oe, Te) => t(Te).siblings(y).removeClass(L));
                    let W = t(Z.target);
                    W.hasClass("w-radio-input") || W.siblings(y).addClass(L)
                }), j.forEach(([Z, W]) => {
                    T.on("focus", C + ` form input[type="${Z}"]:not(` + W + ")", oe => {
                        t(oe.target).siblings(W).addClass(v), t(oe.target).filter(I).siblings(W).addClass(h)
                    }), T.on("blur", C + ` form input[type="${Z}"]:not(` + W + ")", oe => {
                        t(oe.target).siblings(W).removeClass(`${v} ${h}`)
                    })
                })
            }

            function E(c) {
                var y = c.btn = c.form.find(':input[type="submit"]');
                c.wait = c.btn.attr("data-wait") || null, c.success = !1, y.prop("disabled", !1), c.label && y.val(c.label)
            }

            function $(c) {
                var y = c.btn,
                    L = c.wait;
                y.prop("disabled", !0), L && (c.label = y.val(), y.val(L))
            }

            function ue(c, y) {
                var L = null;
                return y = y || {}, c.find(':input:not([type="submit"]):not([type="file"])').each(function (v, h) {
                    var I = t(h),
                        j = I.attr("type"),
                        Z = I.attr("data-name") || I.attr("name") || "Field " + (v + 1),
                        W = I.val();
                    if (j === "checkbox") W = I.is(":checked");
                    else if (j === "radio") {
                        if (y[Z] === null || typeof y[Z] == "string") return;
                        W = c.find('input[name="' + I.attr("name") + '"]:checked').val() || null
                    }
                    typeof W == "string" && (W = t.trim(W)), y[Z] = W, L = L || we(I, j, Z, W)
                }), L
            }

            function de(c) {
                var y = {};
                return c.find(':input[type="file"]').each(function (L, v) {
                    var h = t(v),
                        I = h.attr("data-name") || h.attr("name") || "File " + (L + 1),
                        j = h.attr("data-value");
                    typeof j == "string" && (j = t.trim(j)), y[I] = j
                }), y
            }
            let pe = {
                _mkto_trk: "marketo"
            };

            function Ae() {
                return document.cookie.split("; ").reduce(function (y, L) {
                    let v = L.split("="),
                        h = v[0];
                    if (h in pe) {
                        let I = pe[h],
                            j = v.slice(1).join("=");
                        y[I] = j
                    }
                    return y
                }, {})
            }

            function we(c, y, L, v) {
                var h = null;
                return y === "password" ? h = "Passwords cannot be submitted." : c.attr("required") ? v ? G.test(c.attr("type")) && (te.test(v) || (h = "Please enter a valid email address for: " + L)) : h = "Please fill out the required field: " + L : L === "g-recaptcha-response" && !v && (h = "Please confirm you\u2019re not a robot."), h
            }

            function O(c) {
                x(c), d(c)
            }

            function u(c) {
                E(c);
                var y = c.form,
                    L = {};
                if (/^https/.test(_.href) && !/^https/.test(c.action)) {
                    y.attr("method", "post");
                    return
                }
                x(c);
                var v = ue(y, L);
                if (v) return X(v);
                $(c);
                var h;
                f.each(L, function (W, oe) {
                    G.test(oe) && (L.EMAIL = W), /^((full[ _-]?)?name)$/i.test(oe) && (h = W), /^(first[ _-]?name)$/i.test(oe) && (L.FNAME = W), /^(last[ _-]?name)$/i.test(oe) && (L.LNAME = W)
                }), h && !L.FNAME && (h = h.split(" "), L.FNAME = h[0], L.LNAME = L.LNAME || h[1]);
                var I = c.action.replace("/post?", "/post-json?") + "&c=?",
                    j = I.indexOf("u=") + 2;
                j = I.substring(j, I.indexOf("&", j));
                var Z = I.indexOf("id=") + 3;
                Z = I.substring(Z, I.indexOf("&", Z)), L["b_" + j + "_" + Z] = "", t.ajax({
                    url: I,
                    data: L,
                    dataType: "jsonp"
                }).done(function (W) {
                    c.success = W.result === "success" || /already/.test(W.msg), c.success || console.info("MailChimp error: " + W.msg), d(c)
                }).fail(function () {
                    d(c)
                })
            }

            function d(c) {
                var y = c.form,
                    L = c.redirect,
                    v = c.success;
                if (v && L) {
                    Be.location(L);
                    return
                }
                c.done.toggle(v), c.fail.toggle(!v), v ? c.done.focus() : c.fail.focus(), y.toggle(!v), E(c)
            }

            function x(c) {
                c.evt && c.evt.preventDefault(), c.evt = null
            }

            function b(c, y) {
                if (!y.fileUploads || !y.fileUploads[c]) return;
                var L, v = t(y.fileUploads[c]),
                    h = v.find("> .w-file-upload-default"),
                    I = v.find("> .w-file-upload-uploading"),
                    j = v.find("> .w-file-upload-success"),
                    Z = v.find("> .w-file-upload-error"),
                    W = h.find(".w-file-upload-input"),
                    oe = h.find(".w-file-upload-label"),
                    Te = oe.children(),
                    ne = Z.find(".w-file-upload-error-msg"),
                    n = j.find(".w-file-upload-file"),
                    p = j.find(".w-file-remove-link"),
                    S = n.find(".w-file-upload-file-name"),
                    w = ne.attr("data-w-size-error"),
                    se = ne.attr("data-w-type-error"),
                    Ie = ne.attr("data-w-generic-error");
                if (Q || oe.on("click keydown", function (i) {
                        i.type === "keydown" && i.which !== 13 && i.which !== 32 || (i.preventDefault(), W.click())
                    }), oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), p.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), Q) W.on("click", function (i) {
                    i.preventDefault()
                }), oe.on("click", function (i) {
                    i.preventDefault()
                }), Te.on("click", function (i) {
                    i.preventDefault()
                });
                else {
                    p.on("click keydown", function (i) {
                        if (i.type === "keydown") {
                            if (i.which !== 13 && i.which !== 32) return;
                            i.preventDefault()
                        }
                        W.removeAttr("data-value"), W.val(""), S.html(""), h.toggle(!0), j.toggle(!1), oe.focus()
                    }), W.on("change", function (i) {
                        L = i.target && i.target.files && i.target.files[0], L && (h.toggle(!1), Z.toggle(!1), I.toggle(!0), I.focus(), S.text(L.name), a() || $(y), y.fileUploads[c].uploading = !0, U(L, r))
                    });
                    var Ce = oe.outerHeight();
                    W.height(Ce), W.width(1)
                }

                function e(i) {
                    var s = i.responseJSON && i.responseJSON.msg,
                        A = Ie;
                    typeof s == "string" && s.indexOf("InvalidFileTypeError") === 0 ? A = se : typeof s == "string" && s.indexOf("MaxFileSizeError") === 0 && (A = w), ne.text(A), W.removeAttr("data-value"), W.val(""), I.toggle(!1), h.toggle(!0), Z.toggle(!0), Z.focus(), y.fileUploads[c].uploading = !1, a() || E(y)
                }

                function r(i, s) {
                    if (i) return e(i);
                    var A = s.fileName,
                        z = s.postData,
                        ae = s.fileId,
                        m = s.s3Url;
                    W.attr("data-value", ae), N(m, z, L, A, o)
                }

                function o(i) {
                    if (i) return e(i);
                    I.toggle(!1), j.css("display", "inline-block"), j.focus(), y.fileUploads[c].uploading = !1, a() || E(y)
                }

                function a() {
                    var i = y.fileUploads && y.fileUploads.toArray() || [];
                    return i.some(function (s) {
                        return s.uploading
                    })
                }
            }

            function U(c, y) {
                var L = new URLSearchParams({
                    name: c.name,
                    size: c.size
                });
                t.ajax({
                    type: "GET",
                    url: `${Y}?${L}`,
                    crossDomain: !0
                }).done(function (v) {
                    y(null, v)
                }).fail(function (v) {
                    y(v)
                })
            }

            function N(c, y, L, v, h) {
                var I = new FormData;
                for (var j in y) I.append(j, y[j]);
                I.append("file", L, v), t.ajax({
                    type: "POST",
                    url: c,
                    data: I,
                    processData: !1,
                    contentType: !1
                }).done(function () {
                    h(null)
                }).fail(function (Z) {
                    h(Z)
                })
            }
            return l
        })
    });
    var It = ve((yn, Mt) => {
        "use strict";
        var et = window.jQuery,
            Se = {},
            $e = [],
            Ft = ".w-ix",
            Xe = {
                reset: function (t, f) {
                    f.__wf_intro = null
                },
                intro: function (t, f) {
                    f.__wf_intro || (f.__wf_intro = !0, et(f).triggerHandler(Se.types.INTRO))
                },
                outro: function (t, f) {
                    f.__wf_intro && (f.__wf_intro = null, et(f).triggerHandler(Se.types.OUTRO))
                }
            };
        Se.triggers = {};
        Se.types = {
            INTRO: "w-ix-intro" + Ft,
            OUTRO: "w-ix-outro" + Ft
        };
        Se.init = function () {
            for (var t = $e.length, f = 0; f < t; f++) {
                var l = $e[f];
                l[0](0, l[1])
            }
            $e = [], et.extend(Se.triggers, Xe)
        };
        Se.async = function () {
            for (var t in Xe) {
                var f = Xe[t];
                Xe.hasOwnProperty(t) && (Se.triggers[t] = function (l, T) {
                    $e.push([f, T])
                })
            }
        };
        Se.async();
        Mt.exports = Se
    });
    var Pt = ve((En, Dt) => {
        "use strict";
        var tt = It();

        function Rt(t, f) {
            var l = document.createEvent("CustomEvent");
            l.initCustomEvent(f, !0, !0, null), t.dispatchEvent(l)
        }
        var nn = window.jQuery,
            Ke = {},
            Wt = ".w-ix",
            rn = {
                reset: function (t, f) {
                    tt.triggers.reset(t, f)
                },
                intro: function (t, f) {
                    tt.triggers.intro(t, f), Rt(f, "COMPONENT_ACTIVE")
                },
                outro: function (t, f) {
                    tt.triggers.outro(t, f), Rt(f, "COMPONENT_INACTIVE")
                }
            };
        Ke.triggers = {};
        Ke.types = {
            INTRO: "w-ix-intro" + Wt,
            OUTRO: "w-ix-outro" + Wt
        };
        nn.extend(Ke.triggers, rn);
        Dt.exports = Ke
    });
    var Nt = ve((xn, qt) => {
        var Me = Le(),
            on = Pt(),
            he = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        Me.define("navbar", qt.exports = function (t, f) {
            var l = {},
                T = t.tram,
                B = t(window),
                _ = t(document),
                D = f.debounce,
                C, P, G, te, X = Me.env(),
                Q = '<div class="w-nav-overlay" data-wf-ignore />',
                k = ".w-nav",
                q = "w--open",
                Y = "w--nav-dropdown-open",
                K = "w--nav-dropdown-toggle-open",
                H = "w--nav-dropdown-list-open",
                F = "w--nav-link-open",
                g = on.triggers,
                M = t();
            l.ready = l.design = l.preview = E, l.destroy = function () {
                M = t(), $(), P && P.length && P.each(Ae)
            };

            function E() {
                G = X && Me.env("design"), te = Me.env("editor"), C = t(document.body), P = _.find(k), P.length && (P.each(pe), $(), ue())
            }

            function $() {
                Me.resize.off(de)
            }

            function ue() {
                Me.resize.on(de)
            }

            function de() {
                P.each(h)
            }

            function pe(n, p) {
                var S = t(p),
                    w = t.data(p, k);
                w || (w = t.data(p, k, {
                    open: !1,
                    el: S,
                    config: {},
                    selectedIdx: -1
                })), w.menu = S.find(".w-nav-menu"), w.links = w.menu.find(".w-nav-link"), w.dropdowns = w.menu.find(".w-dropdown"), w.dropdownToggle = w.menu.find(".w-dropdown-toggle"), w.dropdownList = w.menu.find(".w-dropdown-list"), w.button = S.find(".w-nav-button"), w.container = S.find(".w-container"), w.overlayContainerId = "w-nav-overlay-" + n, w.outside = L(w);
                var se = S.find(".w-nav-brand");
                se && se.attr("href") === "/" && se.attr("aria-label") == null && se.attr("aria-label", "home"), w.button.attr("style", "-webkit-user-select: text;"), w.button.attr("aria-label") == null && w.button.attr("aria-label", "menu"), w.button.attr("role", "button"), w.button.attr("tabindex", "0"), w.button.attr("aria-controls", w.overlayContainerId), w.button.attr("aria-haspopup", "menu"), w.button.attr("aria-expanded", "false"), w.el.off(k), w.button.off(k), w.menu.off(k), u(w), G ? (we(w), w.el.on("setting" + k, d(w))) : (O(w), w.button.on("click" + k, c(w)), w.menu.on("click" + k, "a", y(w)), w.button.on("keydown" + k, x(w)), w.el.on("keydown" + k, b(w))), h(n, p)
            }

            function Ae(n, p) {
                var S = t.data(p, k);
                S && (we(S), t.removeData(p, k))
            }

            function we(n) {
                n.overlay && (ne(n, !0), n.overlay.remove(), n.overlay = null)
            }

            function O(n) {
                n.overlay || (n.overlay = t(Q).appendTo(n.el), n.overlay.attr("id", n.overlayContainerId), n.parent = n.menu.parent(), ne(n, !0))
            }

            function u(n) {
                var p = {},
                    S = n.config || {},
                    w = p.animation = n.el.attr("data-animation") || "default";
                p.animOver = /^over/.test(w), p.animDirect = /left$/.test(w) ? -1 : 1, S.animation !== w && n.open && f.defer(N, n), p.easing = n.el.attr("data-easing") || "ease", p.easing2 = n.el.attr("data-easing2") || "ease";
                var se = n.el.attr("data-duration");
                p.duration = se != null ? Number(se) : 400, p.docHeight = n.el.attr("data-doc-height"), n.config = p
            }

            function d(n) {
                return function (p, S) {
                    S = S || {};
                    var w = B.width();
                    u(n), S.open === !0 && oe(n, !0), S.open === !1 && ne(n, !0), n.open && f.defer(function () {
                        w !== B.width() && N(n)
                    })
                }
            }

            function x(n) {
                return function (p) {
                    switch (p.keyCode) {
                        case he.SPACE:
                        case he.ENTER:
                            return c(n)(), p.preventDefault(), p.stopPropagation();
                        case he.ESCAPE:
                            return ne(n), p.preventDefault(), p.stopPropagation();
                        case he.ARROW_RIGHT:
                        case he.ARROW_DOWN:
                        case he.HOME:
                        case he.END:
                            return n.open ? (p.keyCode === he.END ? n.selectedIdx = n.links.length - 1 : n.selectedIdx = 0, U(n), p.preventDefault(), p.stopPropagation()) : (p.preventDefault(), p.stopPropagation())
                    }
                }
            }

            function b(n) {
                return function (p) {
                    if (n.open) switch (n.selectedIdx = n.links.index(document.activeElement), p.keyCode) {
                        case he.HOME:
                        case he.END:
                            return p.keyCode === he.END ? n.selectedIdx = n.links.length - 1 : n.selectedIdx = 0, U(n), p.preventDefault(), p.stopPropagation();
                        case he.ESCAPE:
                            return ne(n), n.button.focus(), p.preventDefault(), p.stopPropagation();
                        case he.ARROW_LEFT:
                        case he.ARROW_UP:
                            return n.selectedIdx = Math.max(-1, n.selectedIdx - 1), U(n), p.preventDefault(), p.stopPropagation();
                        case he.ARROW_RIGHT:
                        case he.ARROW_DOWN:
                            return n.selectedIdx = Math.min(n.links.length - 1, n.selectedIdx + 1), U(n), p.preventDefault(), p.stopPropagation()
                    }
                }
            }

            function U(n) {
                if (n.links[n.selectedIdx]) {
                    var p = n.links[n.selectedIdx];
                    p.focus(), y(p)
                }
            }

            function N(n) {
                n.open && (ne(n, !0), oe(n, !0))
            }

            function c(n) {
                return D(function () {
                    n.open ? ne(n) : oe(n)
                })
            }

            function y(n) {
                return function (p) {
                    var S = t(this),
                        w = S.attr("href");
                    if (!Me.validClick(p.currentTarget)) {
                        p.preventDefault();
                        return
                    }
                    w && w.indexOf("#") === 0 && n.open && ne(n)
                }
            }

            function L(n) {
                return n.outside && _.off("click" + k, n.outside),
                    function (p) {
                        var S = t(p.target);
                        te && S.closest(".w-editor-bem-EditorOverlay").length || v(n, S)
                    }
            }
            var v = D(function (n, p) {
                if (n.open) {
                    var S = p.closest(".w-nav-menu");
                    n.menu.is(S) || ne(n)
                }
            });

            function h(n, p) {
                var S = t.data(p, k),
                    w = S.collapsed = S.button.css("display") !== "none";
                if (S.open && !w && !G && ne(S, !0), S.container.length) {
                    var se = j(S);
                    S.links.each(se), S.dropdowns.each(se)
                }
                S.open && Te(S)
            }
            var I = "max-width";

            function j(n) {
                var p = n.container.css(I);
                return p === "none" && (p = ""),
                    function (S, w) {
                        w = t(w), w.css(I, ""), w.css(I) === "none" && w.css(I, p)
                    }
            }

            function Z(n, p) {
                p.setAttribute("data-nav-menu-open", "")
            }

            function W(n, p) {
                p.removeAttribute("data-nav-menu-open")
            }

            function oe(n, p) {
                if (n.open) return;
                n.open = !0, n.menu.each(Z), n.links.addClass(F), n.dropdowns.addClass(Y), n.dropdownToggle.addClass(K), n.dropdownList.addClass(H), n.button.addClass(q);
                var S = n.config,
                    w = S.animation;
                (w === "none" || !T.support.transform || S.duration <= 0) && (p = !0);
                var se = Te(n),
                    Ie = n.menu.outerHeight(!0),
                    Ce = n.menu.outerWidth(!0),
                    e = n.el.height(),
                    r = n.el[0];
                if (h(0, r), g.intro(0, r), Me.redraw.up(), G || _.on("click" + k, n.outside), p) {
                    i();
                    return
                }
                var o = "transform " + S.duration + "ms " + S.easing;
                if (n.overlay && (M = n.menu.prev(), n.overlay.show().append(n.menu)), S.animOver) {
                    T(n.menu).add(o).set({
                        x: S.animDirect * Ce,
                        height: se
                    }).start({
                        x: 0
                    }).then(i), n.overlay && n.overlay.width(Ce);
                    return
                }
                var a = e + Ie;
                T(n.menu).add(o).set({
                    y: -a
                }).start({
                    y: 0
                }).then(i);

                function i() {
                    n.button.attr("aria-expanded", "true")
                }
            }

            function Te(n) {
                var p = n.config,
                    S = p.docHeight ? _.height() : C.height();
                return p.animOver ? n.menu.height(S) : n.el.css("position") !== "fixed" && (S -= n.el.outerHeight(!0)), n.overlay && n.overlay.height(S), S
            }

            function ne(n, p) {
                if (!n.open) return;
                n.open = !1, n.button.removeClass(q);
                var S = n.config;
                if ((S.animation === "none" || !T.support.transform || S.duration <= 0) && (p = !0), g.outro(0, n.el[0]), _.off("click" + k, n.outside), p) {
                    T(n.menu).stop(), r();
                    return
                }
                var w = "transform " + S.duration + "ms " + S.easing2,
                    se = n.menu.outerHeight(!0),
                    Ie = n.menu.outerWidth(!0),
                    Ce = n.el.height();
                if (S.animOver) {
                    T(n.menu).add(w).start({
                        x: Ie * S.animDirect
                    }).then(r);
                    return
                }
                var e = Ce + se;
                T(n.menu).add(w).start({
                    y: -e
                }).then(r);

                function r() {
                    n.menu.height(""), T(n.menu).set({
                        x: 0,
                        y: 0
                    }), n.menu.each(W), n.links.removeClass(F), n.dropdowns.removeClass(Y), n.dropdownToggle.removeClass(K), n.dropdownList.removeClass(H), n.overlay && n.overlay.children().length && (M.length ? n.menu.insertAfter(M) : n.menu.prependTo(n.parent), n.overlay.attr("style", "").hide()), n.el.triggerHandler("w-close"), n.button.attr("aria-expanded", "false")
                }
            }
            return l
        })
    });
    vt();
    mt();
    wt();
    Et();
    _t();
    Ot();
    St();
    Ct();
    Nt();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */