(() => {
    var ge = (e, v) => () => (v || e((v = {
        exports: {}
    }).exports, v), v.exports);
    var Qe = ge(() => {
        window.tram = function (e) {
            function v(t, s) {
                var l = new r.Bare;
                return l.init(t, s)
            }

            function f(t) {
                return t.replace(/[A-Z]/g, function (s) {
                    return "-" + s.toLowerCase()
                })
            }

            function O(t) {
                var s = parseInt(t.slice(1), 16),
                    l = s >> 16 & 255,
                    c = s >> 8 & 255,
                    u = 255 & s;
                return [l, c, u]
            }

            function j(t, s, l) {
                return "#" + (1 << 24 | t << 16 | s << 8 | l).toString(16).slice(1)
            }

            function T() {}

            function P(t, s) {
                X("Type warning: Expected: [" + t + "] Got: [" + typeof s + "] " + s)
            }

            function F(t, s, l) {
                X("Units do not match [" + t + "]: " + s + ", " + l)
            }

            function C(t, s, l) {
                if (s !== void 0 && (l = s), t === void 0) return l;
                var c = l;
                return me.test(t) || !be.test(t) ? c = parseInt(t, 10) : be.test(t) && (c = 1e3 * parseFloat(t)), 0 > c && (c = 0), c === c ? c : l
            }

            function X(t) {
                Q.debug && window && window.console.warn(t)
            }

            function J(t) {
                for (var s = -1, l = t ? t.length : 0, c = []; ++s < l;) {
                    var u = t[s];
                    u && c.push(u)
                }
                return c
            }
            var d = function (t, s, l) {
                    function c(ee) {
                        return typeof ee == "object"
                    }

                    function u(ee) {
                        return typeof ee == "function"
                    }

                    function h() {}

                    function z(ee, ce) {
                        function S() {
                            var xe = new te;
                            return u(xe.init) && xe.init.apply(xe, arguments), xe
                        }

                        function te() {}
                        ce === l && (ce = ee, ee = Object), S.Bare = te;
                        var re, ve = h[t] = ee[t],
                            Se = te[t] = S[t] = new h;
                        return Se.constructor = S, S.mixin = function (xe) {
                            return te[t] = S[t] = z(S, xe)[t], S
                        }, S.open = function (xe) {
                            if (re = {}, u(xe) ? re = xe.call(S, Se, ve, S, ee) : c(xe) && (re = xe), c(re))
                                for (var He in re) s.call(re, He) && (Se[He] = re[He]);
                            return u(Se.init) || (Se.init = ee), S
                        }, S.open(ce)
                    }
                    return z
                }("prototype", {}.hasOwnProperty),
                Z = {
                    ease: ["ease", function (t, s, l, c) {
                        var u = (t /= c) * t,
                            h = u * t;
                        return s + l * (-2.75 * h * u + 11 * u * u + -15.5 * h + 8 * u + .25 * t)
                    }],
                    "ease-in": ["ease-in", function (t, s, l, c) {
                        var u = (t /= c) * t,
                            h = u * t;
                        return s + l * (-1 * h * u + 3 * u * u + -3 * h + 2 * u)
                    }],
                    "ease-out": ["ease-out", function (t, s, l, c) {
                        var u = (t /= c) * t,
                            h = u * t;
                        return s + l * (.3 * h * u + -1.6 * u * u + 2.2 * h + -1.8 * u + 1.9 * t)
                    }],
                    "ease-in-out": ["ease-in-out", function (t, s, l, c) {
                        var u = (t /= c) * t,
                            h = u * t;
                        return s + l * (2 * h * u + -5 * u * u + 2 * h + 2 * u)
                    }],
                    linear: ["linear", function (t, s, l, c) {
                        return l * t / c + s
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, s, l, c) {
                        return l * (t /= c) * t + s
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, s, l, c) {
                        return -l * (t /= c) * (t - 2) + s
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, s, l, c) {
                        return (t /= c / 2) < 1 ? l / 2 * t * t + s : -l / 2 * (--t * (t - 2) - 1) + s
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, s, l, c) {
                        return l * (t /= c) * t * t + s
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, s, l, c) {
                        return l * ((t = t / c - 1) * t * t + 1) + s
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, s, l, c) {
                        return (t /= c / 2) < 1 ? l / 2 * t * t * t + s : l / 2 * ((t -= 2) * t * t + 2) + s
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, s, l, c) {
                        return l * (t /= c) * t * t * t + s
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, s, l, c) {
                        return -l * ((t = t / c - 1) * t * t * t - 1) + s
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, s, l, c) {
                        return (t /= c / 2) < 1 ? l / 2 * t * t * t * t + s : -l / 2 * ((t -= 2) * t * t * t - 2) + s
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, s, l, c) {
                        return l * (t /= c) * t * t * t * t + s
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, s, l, c) {
                        return l * ((t = t / c - 1) * t * t * t * t + 1) + s
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, s, l, c) {
                        return (t /= c / 2) < 1 ? l / 2 * t * t * t * t * t + s : l / 2 * ((t -= 2) * t * t * t * t + 2) + s
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, s, l, c) {
                        return -l * Math.cos(t / c * (Math.PI / 2)) + l + s
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, s, l, c) {
                        return l * Math.sin(t / c * (Math.PI / 2)) + s
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, s, l, c) {
                        return -l / 2 * (Math.cos(Math.PI * t / c) - 1) + s
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, s, l, c) {
                        return t === 0 ? s : l * Math.pow(2, 10 * (t / c - 1)) + s
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, s, l, c) {
                        return t === c ? s + l : l * (-Math.pow(2, -10 * t / c) + 1) + s
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, s, l, c) {
                        return t === 0 ? s : t === c ? s + l : (t /= c / 2) < 1 ? l / 2 * Math.pow(2, 10 * (t - 1)) + s : l / 2 * (-Math.pow(2, -10 * --t) + 2) + s
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, s, l, c) {
                        return -l * (Math.sqrt(1 - (t /= c) * t) - 1) + s
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, s, l, c) {
                        return l * Math.sqrt(1 - (t = t / c - 1) * t) + s
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, s, l, c) {
                        return (t /= c / 2) < 1 ? -l / 2 * (Math.sqrt(1 - t * t) - 1) + s : l / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + s
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, s, l, c, u) {
                        return u === void 0 && (u = 1.70158), l * (t /= c) * t * ((u + 1) * t - u) + s
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, s, l, c, u) {
                        return u === void 0 && (u = 1.70158), l * ((t = t / c - 1) * t * ((u + 1) * t + u) + 1) + s
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, s, l, c, u) {
                        return u === void 0 && (u = 1.70158), (t /= c / 2) < 1 ? l / 2 * t * t * (((u *= 1.525) + 1) * t - u) + s : l / 2 * ((t -= 2) * t * (((u *= 1.525) + 1) * t + u) + 2) + s
                    }]
                },
                g = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                b = document,
                B = window,
                N = "bkwld-tram",
                V = /[\-\.0-9]/g,
                q = /[A-Z]/,
                A = "number",
                U = /^(rgb|#)/,
                M = /(em|cm|mm|in|pt|pc|px)$/,
                $ = /(em|cm|mm|in|pt|pc|px|%)$/,
                ae = /(deg|rad|turn)$/,
                le = "unitless",
                fe = /(all|none) 0s ease 0s/,
                ye = /^(width|height)$/,
                he = " ",
                D = b.createElement("a"),
                p = ["Webkit", "Moz", "O", "ms"],
                w = ["-webkit-", "-moz-", "-o-", "-ms-"],
                _ = function (t) {
                    if (t in D.style) return {
                        dom: t,
                        css: t
                    };
                    var s, l, c = "",
                        u = t.split("-");
                    for (s = 0; s < u.length; s++) c += u[s].charAt(0).toUpperCase() + u[s].slice(1);
                    for (s = 0; s < p.length; s++)
                        if (l = p[s] + c, l in D.style) return {
                            dom: l,
                            css: w[s] + t
                        }
                },
                k = v.support = {
                    bind: Function.prototype.bind,
                    transform: _("transform"),
                    transition: _("transition"),
                    backface: _("backface-visibility"),
                    timing: _("transition-timing-function")
                };
            if (k.transition) {
                var K = k.timing.dom;
                if (D.style[K] = Z["ease-in-back"][0], !D.style[K])
                    for (var Y in g) Z[Y][0] = g[Y]
            }
            var m = v.frame = function () {
                    var t = B.requestAnimationFrame || B.webkitRequestAnimationFrame || B.mozRequestAnimationFrame || B.oRequestAnimationFrame || B.msRequestAnimationFrame;
                    return t && k.bind ? t.bind(B) : function (s) {
                        B.setTimeout(s, 16)
                    }
                }(),
                E = v.now = function () {
                    var t = B.performance,
                        s = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return s && k.bind ? s.bind(t) : Date.now || function () {
                        return +new Date
                    }
                }(),
                i = d(function (t) {
                    function s(G, ne) {
                        var de = J(("" + G).split(he)),
                            se = de[0];
                        ne = ne || {};
                        var Ee = L[se];
                        if (!Ee) return X("Unsupported property: " + se);
                        if (!ne.weak || !this.props[se]) {
                            var Oe = Ee[0],
                                ke = this.props[se];
                            return ke || (ke = this.props[se] = new Oe.Bare), ke.init(this.$el, de, Ee, ne), ke
                        }
                    }

                    function l(G, ne, de) {
                        if (G) {
                            var se = typeof G;
                            if (ne || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), se == "number" && ne) return this.timer = new H({
                                duration: G,
                                context: this,
                                complete: h
                            }), void(this.active = !0);
                            if (se == "string" && ne) {
                                switch (G) {
                                    case "hide":
                                        S.call(this);
                                        break;
                                    case "stop":
                                        z.call(this);
                                        break;
                                    case "redraw":
                                        te.call(this);
                                        break;
                                    default:
                                        s.call(this, G, de && de[1])
                                }
                                return h.call(this)
                            }
                            if (se == "function") return void G.call(this, this);
                            if (se == "object") {
                                var Ee = 0;
                                Se.call(this, G, function (pe, tr) {
                                    pe.span > Ee && (Ee = pe.span), pe.stop(), pe.animate(tr)
                                }, function (pe) {
                                    "wait" in pe && (Ee = C(pe.wait, 0))
                                }), ve.call(this), Ee > 0 && (this.timer = new H({
                                    duration: Ee,
                                    context: this
                                }), this.active = !0, ne && (this.timer.complete = h));
                                var Oe = this,
                                    ke = !1,
                                    Be = {};
                                m(function () {
                                    Se.call(Oe, G, function (pe) {
                                        pe.active && (ke = !0, Be[pe.name] = pe.nextStyle)
                                    }), ke && Oe.$el.css(Be)
                                })
                            }
                        }
                    }

                    function c(G) {
                        G = C(G, 0), this.active ? this.queue.push({
                            options: G
                        }) : (this.timer = new H({
                            duration: G,
                            context: this,
                            complete: h
                        }), this.active = !0)
                    }

                    function u(G) {
                        return this.active ? (this.queue.push({
                            options: G,
                            args: arguments
                        }), void(this.timer.complete = h)) : X("No active transition timer. Use start() or wait() before then().")
                    }

                    function h() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var G = this.queue.shift();
                            l.call(this, G.options, !0, G.args)
                        }
                    }

                    function z(G) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ne;
                        typeof G == "string" ? (ne = {}, ne[G] = 1) : ne = typeof G == "object" && G != null ? G : this.props, Se.call(this, ne, xe), ve.call(this)
                    }

                    function ee(G) {
                        z.call(this, G), Se.call(this, G, He, Jt)
                    }

                    function ce(G) {
                        typeof G != "string" && (G = "block"), this.el.style.display = G
                    }

                    function S() {
                        z.call(this), this.el.style.display = "none"
                    }

                    function te() {
                        this.el.offsetHeight
                    }

                    function re() {
                        z.call(this), e.removeData(this.el, N), this.$el = this.el = null
                    }

                    function ve() {
                        var G, ne, de = [];
                        this.upstream && de.push(this.upstream);
                        for (G in this.props) ne = this.props[G], ne.active && de.push(ne.string);
                        de = de.join(","), this.style !== de && (this.style = de, this.el.style[k.transition.dom] = de)
                    }

                    function Se(G, ne, de) {
                        var se, Ee, Oe, ke, Be = ne !== xe,
                            pe = {};
                        for (se in G) Oe = G[se], se in ie ? (pe.transform || (pe.transform = {}), pe.transform[se] = Oe) : (q.test(se) && (se = f(se)), se in L ? pe[se] = Oe : (ke || (ke = {}), ke[se] = Oe));
                        for (se in pe) {
                            if (Oe = pe[se], Ee = this.props[se], !Ee) {
                                if (!Be) continue;
                                Ee = s.call(this, se)
                            }
                            ne.call(this, Ee, Oe)
                        }
                        de && ke && de.call(this, ke)
                    }

                    function xe(G) {
                        G.stop()
                    }

                    function He(G, ne) {
                        G.set(ne)
                    }

                    function Jt(G) {
                        this.$el.css(G)
                    }

                    function Le(G, ne) {
                        t[G] = function () {
                            return this.children ? er.call(this, ne, arguments) : (this.el && ne.apply(this, arguments), this)
                        }
                    }

                    function er(G, ne) {
                        var de, se = this.children.length;
                        for (de = 0; se > de; de++) G.apply(this.children[de], ne);
                        return this
                    }
                    t.init = function (G) {
                        if (this.$el = e(G), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, Q.keepInherited && !Q.fallback) {
                            var ne = y(this.el, "transition");
                            ne && !fe.test(ne) && (this.upstream = ne)
                        }
                        k.backface && Q.hideBackface && a(this.el, k.backface.css, "hidden")
                    }, Le("add", s), Le("start", l), Le("wait", c), Le("then", u), Le("next", h), Le("stop", z), Le("set", ee), Le("show", ce), Le("hide", S), Le("redraw", te), Le("destroy", re)
                }),
                r = d(i, function (t) {
                    function s(l, c) {
                        var u = e.data(l, N) || e.data(l, N, new i.Bare);
                        return u.el || u.init(l), c ? u.start(c) : u
                    }
                    t.init = function (l, c) {
                        var u = e(l);
                        if (!u.length) return this;
                        if (u.length === 1) return s(u[0], c);
                        var h = [];
                        return u.each(function (z, ee) {
                            h.push(s(ee, c))
                        }), this.children = h, this
                    }
                }),
                n = d(function (t) {
                    function s() {
                        var h = this.get();
                        this.update("auto");
                        var z = this.get();
                        return this.update(h), z
                    }

                    function l(h, z, ee) {
                        return z !== void 0 && (ee = z), h in Z ? h : ee
                    }

                    function c(h) {
                        var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(h);
                        return (z ? j(z[1], z[2], z[3]) : h).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var u = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    t.init = function (h, z, ee, ce) {
                        this.$el = h, this.el = h[0];
                        var S = z[0];
                        ee[2] && (S = ee[2]), W[S] && (S = W[S]), this.name = S, this.type = ee[1], this.duration = C(z[1], this.duration, u.duration), this.ease = l(z[2], this.ease, u.ease), this.delay = C(z[3], this.delay, u.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ye.test(this.name), this.unit = ce.unit || this.unit || Q.defaultUnit, this.angle = ce.angle || this.angle || Q.defaultAngle, Q.fallback || ce.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + he + this.duration + "ms" + (this.ease != "ease" ? he + Z[this.ease][0] : "") + (this.delay ? he + this.delay + "ms" : ""))
                    }, t.set = function (h) {
                        h = this.convert(h, this.type), this.update(h), this.redraw()
                    }, t.transition = function (h) {
                        this.active = !0, h = this.convert(h, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), h == "auto" && (h = s.call(this))), this.nextStyle = h
                    }, t.fallback = function (h) {
                        var z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        h = this.convert(h, this.type), this.auto && (z == "auto" && (z = this.convert(this.get(), this.type)), h == "auto" && (h = s.call(this))), this.tween = new I({
                            from: z,
                            to: h,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, t.get = function () {
                        return y(this.el, this.name)
                    }, t.update = function (h) {
                        a(this.el, this.name, h)
                    }, t.stop = function () {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, a(this.el, this.name, this.get()));
                        var h = this.tween;
                        h && h.context && h.destroy()
                    }, t.convert = function (h, z) {
                        if (h == "auto" && this.auto) return h;
                        var ee, ce = typeof h == "number",
                            S = typeof h == "string";
                        switch (z) {
                            case A:
                                if (ce) return h;
                                if (S && h.replace(V, "") === "") return +h;
                                ee = "number(unitless)";
                                break;
                            case U:
                                if (S) {
                                    if (h === "" && this.original) return this.original;
                                    if (z.test(h)) return h.charAt(0) == "#" && h.length == 7 ? h : c(h)
                                }
                                ee = "hex or rgb string";
                                break;
                            case M:
                                if (ce) return h + this.unit;
                                if (S && z.test(h)) return h;
                                ee = "number(px) or string(unit)";
                                break;
                            case $:
                                if (ce) return h + this.unit;
                                if (S && z.test(h)) return h;
                                ee = "number(px) or string(unit or %)";
                                break;
                            case ae:
                                if (ce) return h + this.angle;
                                if (S && z.test(h)) return h;
                                ee = "number(deg) or string(angle)";
                                break;
                            case le:
                                if (ce || S && $.test(h)) return h;
                                ee = "number(unitless) or string(unit or %)"
                        }
                        return P(ee, h), h
                    }, t.redraw = function () {
                        this.el.offsetHeight
                    }
                }),
                o = d(n, function (t, s) {
                    t.init = function () {
                        s.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), U))
                    }
                }),
                x = d(n, function (t, s) {
                    t.init = function () {
                        s.init.apply(this, arguments), this.animate = this.fallback
                    }, t.get = function () {
                        return this.$el[this.name]()
                    }, t.update = function (l) {
                        this.$el[this.name](l)
                    }
                }),
                R = d(n, function (t, s) {
                    function l(c, u) {
                        var h, z, ee, ce, S;
                        for (h in c) ce = ie[h], ee = ce[0], z = ce[1] || h, S = this.convert(c[h], ee), u.call(this, z, S, ee)
                    }
                    t.init = function () {
                        s.init.apply(this, arguments), this.current || (this.current = {}, ie.perspective && Q.perspective && (this.current.perspective = Q.perspective, a(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, t.set = function (c) {
                        l.call(this, c, function (u, h) {
                            this.current[u] = h
                        }), a(this.el, this.name, this.style(this.current)), this.redraw()
                    }, t.transition = function (c) {
                        var u = this.values(c);
                        this.tween = new oe({
                            current: this.current,
                            values: u,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var h, z = {};
                        for (h in this.current) z[h] = h in u ? u[h] : this.current[h];
                        this.active = !0, this.nextStyle = this.style(z)
                    }, t.fallback = function (c) {
                        var u = this.values(c);
                        this.tween = new oe({
                            current: this.current,
                            values: u,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, t.update = function () {
                        a(this.el, this.name, this.style(this.current))
                    }, t.style = function (c) {
                        var u, h = "";
                        for (u in c) h += u + "(" + c[u] + ") ";
                        return h
                    }, t.values = function (c) {
                        var u, h = {};
                        return l.call(this, c, function (z, ee, ce) {
                            h[z] = ee, this.current[z] === void 0 && (u = 0, ~z.indexOf("scale") && (u = 1), this.current[z] = this.convert(u, ce))
                        }), h
                    }
                }),
                I = d(function (t) {
                    function s(S) {
                        ee.push(S) === 1 && m(l)
                    }

                    function l() {
                        var S, te, re, ve = ee.length;
                        if (ve)
                            for (m(l), te = E(), S = ve; S--;) re = ee[S], re && re.render(te)
                    }

                    function c(S) {
                        var te, re = e.inArray(S, ee);
                        re >= 0 && (te = ee.slice(re + 1), ee.length = re, te.length && (ee = ee.concat(te)))
                    }

                    function u(S) {
                        return Math.round(S * ce) / ce
                    }

                    function h(S, te, re) {
                        return j(S[0] + re * (te[0] - S[0]), S[1] + re * (te[1] - S[1]), S[2] + re * (te[2] - S[2]))
                    }
                    var z = {
                        ease: Z.ease[1],
                        from: 0,
                        to: 1
                    };
                    t.init = function (S) {
                        this.duration = S.duration || 0, this.delay = S.delay || 0;
                        var te = S.ease || z.ease;
                        Z[te] && (te = Z[te][1]), typeof te != "function" && (te = z.ease), this.ease = te, this.update = S.update || T, this.complete = S.complete || T, this.context = S.context || this, this.name = S.name;
                        var re = S.from,
                            ve = S.to;
                        re === void 0 && (re = z.from), ve === void 0 && (ve = z.to), this.unit = S.unit || "", typeof re == "number" && typeof ve == "number" ? (this.begin = re, this.change = ve - re) : this.format(ve, re), this.value = this.begin + this.unit, this.start = E(), S.autoplay !== !1 && this.play()
                    }, t.play = function () {
                        this.active || (this.start || (this.start = E()), this.active = !0, s(this))
                    }, t.stop = function () {
                        this.active && (this.active = !1, c(this))
                    }, t.render = function (S) {
                        var te, re = S - this.start;
                        if (this.delay) {
                            if (re <= this.delay) return;
                            re -= this.delay
                        }
                        if (re < this.duration) {
                            var ve = this.ease(re, 0, 1, this.duration);
                            return te = this.startRGB ? h(this.startRGB, this.endRGB, ve) : u(this.begin + ve * this.change), this.value = te + this.unit, void this.update.call(this.context, this.value)
                        }
                        te = this.endHex || this.begin + this.change, this.value = te + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, t.format = function (S, te) {
                        if (te += "", S += "", S.charAt(0) == "#") return this.startRGB = O(te), this.endRGB = O(S), this.endHex = S, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var re = te.replace(V, ""),
                                ve = S.replace(V, "");
                            re !== ve && F("tween", te, S), this.unit = re
                        }
                        te = parseFloat(te), S = parseFloat(S), this.begin = this.value = te, this.change = S - te
                    }, t.destroy = function () {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = T
                    };
                    var ee = [],
                        ce = 1e3
                }),
                H = d(I, function (t) {
                    t.init = function (s) {
                        this.duration = s.duration || 0, this.complete = s.complete || T, this.context = s.context, this.play()
                    }, t.render = function (s) {
                        var l = s - this.start;
                        l < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                oe = d(I, function (t, s) {
                    t.init = function (l) {
                        this.context = l.context, this.update = l.update, this.tweens = [], this.current = l.current;
                        var c, u;
                        for (c in l.values) u = l.values[c], this.current[c] !== u && this.tweens.push(new I({
                            name: c,
                            from: this.current[c],
                            to: u,
                            duration: l.duration,
                            delay: l.delay,
                            ease: l.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, t.render = function (l) {
                        var c, u, h = this.tweens.length,
                            z = !1;
                        for (c = h; c--;) u = this.tweens[c], u.context && (u.render(l), this.current[u.name] = u.value, z = !0);
                        return z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, t.destroy = function () {
                        if (s.destroy.call(this), this.tweens) {
                            var l, c = this.tweens.length;
                            for (l = c; l--;) this.tweens[l].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                Q = v.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !k.transition,
                    agentTests: []
                };
            v.fallback = function (t) {
                if (!k.transition) return Q.fallback = !0;
                Q.agentTests.push("(" + t + ")");
                var s = new RegExp(Q.agentTests.join("|"), "i");
                Q.fallback = s.test(navigator.userAgent)
            }, v.fallback("6.0.[2-5] Safari"), v.tween = function (t) {
                return new I(t)
            }, v.delay = function (t, s, l) {
                return new H({
                    complete: s,
                    duration: t,
                    context: l
                })
            }, e.fn.tram = function (t) {
                return v.call(null, this, t)
            };
            var a = e.style,
                y = e.css,
                W = {
                    transform: k.transform && k.transform.css
                },
                L = {
                    color: [o, U],
                    background: [o, U, "background-color"],
                    "outline-color": [o, U],
                    "border-color": [o, U],
                    "border-top-color": [o, U],
                    "border-right-color": [o, U],
                    "border-bottom-color": [o, U],
                    "border-left-color": [o, U],
                    "border-width": [n, M],
                    "border-top-width": [n, M],
                    "border-right-width": [n, M],
                    "border-bottom-width": [n, M],
                    "border-left-width": [n, M],
                    "border-spacing": [n, M],
                    "letter-spacing": [n, M],
                    margin: [n, M],
                    "margin-top": [n, M],
                    "margin-right": [n, M],
                    "margin-bottom": [n, M],
                    "margin-left": [n, M],
                    padding: [n, M],
                    "padding-top": [n, M],
                    "padding-right": [n, M],
                    "padding-bottom": [n, M],
                    "padding-left": [n, M],
                    "outline-width": [n, M],
                    opacity: [n, A],
                    top: [n, $],
                    right: [n, $],
                    bottom: [n, $],
                    left: [n, $],
                    "font-size": [n, $],
                    "text-indent": [n, $],
                    "word-spacing": [n, $],
                    width: [n, $],
                    "min-width": [n, $],
                    "max-width": [n, $],
                    height: [n, $],
                    "min-height": [n, $],
                    "max-height": [n, $],
                    "line-height": [n, le],
                    "scroll-top": [x, A, "scrollTop"],
                    "scroll-left": [x, A, "scrollLeft"]
                },
                ie = {};
            k.transform && (L.transform = [R], ie = {
                x: [$, "translateX"],
                y: [$, "translateY"],
                rotate: [ae],
                rotateX: [ae],
                rotateY: [ae],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [ae],
                skewX: [ae],
                skewY: [ae]
            }), k.transform && k.backface && (ie.z = [$, "translateZ"], ie.rotateZ = [ae], ie.scaleZ = [A], ie.perspective = [M]);
            var me = /ms/,
                be = /s|\./;
            return e.tram = v
        }(window.jQuery)
    });
    var ft = ge((Cr, ct) => {
        var rr = window.$,
            ir = Qe() && rr.tram;
        ct.exports = function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var v = {},
                f = Array.prototype,
                O = Object.prototype,
                j = Function.prototype,
                T = f.push,
                P = f.slice,
                F = f.concat,
                C = O.toString,
                X = O.hasOwnProperty,
                J = f.forEach,
                d = f.map,
                Z = f.reduce,
                g = f.reduceRight,
                b = f.filter,
                B = f.every,
                N = f.some,
                V = f.indexOf,
                q = f.lastIndexOf,
                A = Array.isArray,
                U = Object.keys,
                M = j.bind,
                $ = e.each = e.forEach = function (p, w, _) {
                    if (p == null) return p;
                    if (J && p.forEach === J) p.forEach(w, _);
                    else if (p.length === +p.length) {
                        for (var k = 0, K = p.length; k < K; k++)
                            if (w.call(_, p[k], k, p) === v) return
                    } else
                        for (var Y = e.keys(p), k = 0, K = Y.length; k < K; k++)
                            if (w.call(_, p[Y[k]], Y[k], p) === v) return;
                    return p
                };
            e.map = e.collect = function (p, w, _) {
                var k = [];
                return p == null ? k : d && p.map === d ? p.map(w, _) : ($(p, function (K, Y, m) {
                    k.push(w.call(_, K, Y, m))
                }), k)
            }, e.find = e.detect = function (p, w, _) {
                var k;
                return ae(p, function (K, Y, m) {
                    if (w.call(_, K, Y, m)) return k = K, !0
                }), k
            }, e.filter = e.select = function (p, w, _) {
                var k = [];
                return p == null ? k : b && p.filter === b ? p.filter(w, _) : ($(p, function (K, Y, m) {
                    w.call(_, K, Y, m) && k.push(K)
                }), k)
            };
            var ae = e.some = e.any = function (p, w, _) {
                w || (w = e.identity);
                var k = !1;
                return p == null ? k : N && p.some === N ? p.some(w, _) : ($(p, function (K, Y, m) {
                    if (k || (k = w.call(_, K, Y, m))) return v
                }), !!k)
            };
            e.contains = e.include = function (p, w) {
                return p == null ? !1 : V && p.indexOf === V ? p.indexOf(w) != -1 : ae(p, function (_) {
                    return _ === w
                })
            }, e.delay = function (p, w) {
                var _ = P.call(arguments, 2);
                return setTimeout(function () {
                    return p.apply(null, _)
                }, w)
            }, e.defer = function (p) {
                return e.delay.apply(e, [p, 1].concat(P.call(arguments, 1)))
            }, e.throttle = function (p) {
                var w, _, k;
                return function () {
                    w || (w = !0, _ = arguments, k = this, ir.frame(function () {
                        w = !1, p.apply(k, _)
                    }))
                }
            }, e.debounce = function (p, w, _) {
                var k, K, Y, m, E, i = function () {
                    var r = e.now() - m;
                    r < w ? k = setTimeout(i, w - r) : (k = null, _ || (E = p.apply(Y, K), Y = K = null))
                };
                return function () {
                    Y = this, K = arguments, m = e.now();
                    var r = _ && !k;
                    return k || (k = setTimeout(i, w)), r && (E = p.apply(Y, K), Y = K = null), E
                }
            }, e.defaults = function (p) {
                if (!e.isObject(p)) return p;
                for (var w = 1, _ = arguments.length; w < _; w++) {
                    var k = arguments[w];
                    for (var K in k) p[K] === void 0 && (p[K] = k[K])
                }
                return p
            }, e.keys = function (p) {
                if (!e.isObject(p)) return [];
                if (U) return U(p);
                var w = [];
                for (var _ in p) e.has(p, _) && w.push(_);
                return w
            }, e.has = function (p, w) {
                return X.call(p, w)
            }, e.isObject = function (p) {
                return p === Object(p)
            }, e.now = Date.now || function () {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var le = /(.)^/,
                fe = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ye = /\\|'|\r|\n|\u2028|\u2029/g,
                he = function (p) {
                    return "\\" + fe[p]
                },
                D = /^\s*(\w|\$)+\s*$/;
            return e.template = function (p, w, _) {
                !w && _ && (w = _), w = e.defaults({}, w, e.templateSettings);
                var k = RegExp([(w.escape || le).source, (w.interpolate || le).source, (w.evaluate || le).source].join("|") + "|$", "g"),
                    K = 0,
                    Y = "__p+='";
                p.replace(k, function (r, n, o, x, R) {
                    return Y += p.slice(K, R).replace(ye, he), K = R + r.length, n ? Y += `'+
((__t=(` + n + `))==null?'':_.escape(__t))+
'` : o ? Y += `'+
((__t=(` + o + `))==null?'':__t)+
'` : x && (Y += `';
` + x + `
__p+='`), r
                }), Y += `';
`;
                var m = w.variable;
                if (m) {
                    if (!D.test(m)) throw new Error("variable is not a bare identifier: " + m)
                } else Y = `with(obj||{}){
` + Y + `}
`, m = "obj";
                Y = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + Y + `return __p;
`;
                var E;
                try {
                    E = new Function(w.variable || "obj", "_", Y)
                } catch (r) {
                    throw r.source = Y, r
                }
                var i = function (r) {
                    return E.call(this, r, e)
                };
                return i.source = "function(" + m + `){
` + Y + "}", i
            }, e
        }()
    });
    var _e = ge((Ar, bt) => {
        var ue = {},
            Pe = {},
            Ne = [],
            Je = window.Webflow || [],
            We = window.jQuery,
            Ae = We(window),
            nr = We(document),
            Te = We.isFunction,
            Ce = ue._ = ft(),
            ht = ue.tram = Qe() && We.tram,
            Ve = !1,
            et = !1;
        ht.config.hideBackface = !1;
        ht.config.keepInherited = !0;
        ue.define = function (e, v, f) {
            Pe[e] && pt(Pe[e]);
            var O = Pe[e] = v(We, Ce, f) || {};
            return vt(O), O
        };
        ue.require = function (e) {
            return Pe[e]
        };

        function vt(e) {
            ue.env() && (Te(e.design) && Ae.on("__wf_design", e.design), Te(e.preview) && Ae.on("__wf_preview", e.preview)), Te(e.destroy) && Ae.on("__wf_destroy", e.destroy), e.ready && Te(e.ready) && or(e)
        }

        function or(e) {
            if (Ve) {
                e.ready();
                return
            }
            Ce.contains(Ne, e.ready) || Ne.push(e.ready)
        }

        function pt(e) {
            Te(e.design) && Ae.off("__wf_design", e.design), Te(e.preview) && Ae.off("__wf_preview", e.preview), Te(e.destroy) && Ae.off("__wf_destroy", e.destroy), e.ready && Te(e.ready) && ar(e)
        }

        function ar(e) {
            Ne = Ce.filter(Ne, function (v) {
                return v !== e.ready
            })
        }
        ue.push = function (e) {
            if (Ve) {
                Te(e) && e();
                return
            }
            Je.push(e)
        };
        ue.env = function (e) {
            var v = window.__wf_design,
                f = typeof v < "u";
            if (!e) return f;
            if (e === "design") return f && v;
            if (e === "preview") return f && !v;
            if (e === "slug") return f && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Xe = navigator.userAgent.toLowerCase(),
            mt = ue.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            sr = ue.env.chrome = /chrome/.test(Xe) && /Google/.test(navigator.vendor) && parseInt(Xe.match(/chrome\/(\d+)\./)[1], 10),
            ur = ue.env.ios = /(ipod|iphone|ipad)/.test(Xe);
        ue.env.safari = /safari/.test(Xe) && !sr && !ur;
        var Ze;
        mt && nr.on("touchstart mousedown", function (e) {
            Ze = e.target
        });
        ue.validClick = mt ? function (e) {
            return e === Ze || We.contains(e, Ze)
        } : function () {
            return !0
        };
        var gt = "resize.webflow orientationchange.webflow load.webflow",
            lr = "scroll.webflow " + gt;
        ue.resize = tt(Ae, gt);
        ue.scroll = tt(Ae, lr);
        ue.redraw = tt();

        function tt(e, v) {
            var f = [],
                O = {};
            return O.up = Ce.throttle(function (j) {
                Ce.each(f, function (T) {
                    T(j)
                })
            }), e && v && e.on(v, O.up), O.on = function (j) {
                typeof j == "function" && (Ce.contains(f, j) || f.push(j))
            }, O.off = function (j) {
                if (!arguments.length) {
                    f = [];
                    return
                }
                f = Ce.filter(f, function (T) {
                    return T !== j
                })
            }, O
        }
        ue.location = function (e) {
            window.location = e
        };
        ue.env() && (ue.location = function () {});
        ue.ready = function () {
            Ve = !0, et ? cr() : Ce.each(Ne, dt), Ce.each(Je, dt), ue.resize.up()
        };

        function dt(e) {
            Te(e) && e()
        }

        function cr() {
            et = !1, Ce.each(Pe, vt)
        }
        var De;
        ue.load = function (e) {
            De.then(e)
        };

        function wt() {
            De && (De.reject(), Ae.off("load", De.resolve)), De = new We.Deferred, Ae.on("load", De.resolve)
        }
        ue.destroy = function (e) {
            e = e || {}, et = !0, Ae.triggerHandler("__wf_destroy"), e.domready != null && (Ve = e.domready), Ce.each(Pe, pt), ue.resize.off(), ue.scroll.off(), ue.redraw.off(), Ne = [], Je = [], De.state() === "pending" && wt()
        };
        We(ue.ready);
        wt();
        bt.exports = window.Webflow = ue
    });
    var Et = ge((Sr, xt) => {
        var yt = _e();
        yt.define("brand", xt.exports = function (e) {
            var v = {},
                f = document,
                O = e("html"),
                j = e("body"),
                T = ".w-webflow-badge",
                P = window.location,
                F = /PhantomJS/i.test(navigator.userAgent),
                C = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                X;
            v.ready = function () {
                var g = O.attr("data-wf-status"),
                    b = O.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(b) && P.hostname !== b && (g = !0), g && !F && (X = X || d(), Z(), setTimeout(Z, 500), e(f).off(C, J).on(C, J))
            };

            function J() {
                var g = f.fullScreen || f.mozFullScreen || f.webkitIsFullScreen || f.msFullscreenElement || !!f.webkitFullscreenElement;
                e(X).attr("style", g ? "display: none !important;" : "")
            }

            function d() {
                var g = e('<a class=""></a>').attr("href", ""),
                    b = e("<img>").attr("src", "").attr("alt", "").css({
                        marginRight: "8px",
                        width: "16px"
                    }),
                    B = e("<img>").attr("src", "").attr("alt", "");
                return g.append(b, B), g[0]
            }

            function Z() {
                var g = j.children(T),
                    b = g.length && g.get(0) === X,
                    B = yt.env("editor");
                if (b) {
                    B && g.remove();
                    return
                }
                g.length && g.remove(), B || j.append(X)
            }
            return v
        })
    });
    var _t = ge((Tr, kt) => {
        var rt = _e();
        rt.define("edit", kt.exports = function (e, v, f) {
            if (f = f || {}, (rt.env("test") || rt.env("frame")) && !f.fixture && !fr()) return {
                exit: 1
            };
            var O = {},
                j = e(window),
                T = e(document.documentElement),
                P = document.location,
                F = "hashchange",
                C, X = f.load || Z,
                J = !1;
            try {
                J = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            J ? X() : P.search ? (/[?&](edit)(?:[=&?]|$)/.test(P.search) || /\?edit$/.test(P.href)) && X() : j.on(F, d).triggerHandler(F);

            function d() {
                C || /\?edit/.test(P.hash) && X()
            }

            function Z() {
                C = !0, window.WebflowEditor = !0, j.off(F, d), q(function (U) {
                    e.ajax({
                        url: V("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: T.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: g(U)
                    })
                })
            }

            function g(U) {
                return function (M) {
                    if (!M) {
                        console.error("Could not load editor data");
                        return
                    }
                    M.thirdPartyCookiesSupported = U, b(N(M.bugReporterScriptPath), function () {
                        b(N(M.scriptPath), function () {
                            window.WebflowEditor(M)
                        })
                    })
                }
            }

            function b(U, M) {
                e.ajax({
                    type: "GET",
                    url: U,
                    dataType: "script",
                    cache: !0
                }).then(M, B)
            }

            function B(U, M, $) {
                throw console.error("Could not load editor script: " + M), $
            }

            function N(U) {
                return U.indexOf("//") >= 0 ? U : V("https://editor-api.webflow.com" + U)
            }

            function V(U) {
                return U.replace(/([^:])\/\//g, "$1/")
            }

            function q(U) {
                var M = window.document.createElement("iframe");
                M.src = "https://webflow.com/site/third-party-cookie-check.html", M.style.display = "none", M.sandbox = "allow-scripts allow-same-origin";
                var $ = function (ae) {
                    ae.data === "WF_third_party_cookies_unsupported" ? (A(M, $), U(!1)) : ae.data === "WF_third_party_cookies_supported" && (A(M, $), U(!0))
                };
                M.onerror = function () {
                    A(M, $), U(!1)
                }, window.addEventListener("message", $, !1), window.document.body.appendChild(M)
            }

            function A(U, M) {
                window.removeEventListener("message", M, !1), U.remove()
            }
            return O
        });

        function fr() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ot = ge((Ir, Lt) => {
        var dr = _e();
        dr.define("focus-visible", Lt.exports = function () {
            function e(f) {
                var O = !0,
                    j = !1,
                    T = null,
                    P = {
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

                function F(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function C(A) {
                    var U = A.type,
                        M = A.tagName;
                    return !!(M === "INPUT" && P[U] && !A.readOnly || M === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function X(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function J(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function d(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (F(f.activeElement) && X(f.activeElement), O = !0)
                }

                function Z() {
                    O = !1
                }

                function g(A) {
                    F(A.target) && (O || C(A.target)) && X(A.target)
                }

                function b(A) {
                    F(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (j = !0, window.clearTimeout(T), T = window.setTimeout(function () {
                        j = !1
                    }, 100), J(A.target))
                }

                function B() {
                    document.visibilityState === "hidden" && (j && (O = !0), N())
                }

                function N() {
                    document.addEventListener("mousemove", q), document.addEventListener("mousedown", q), document.addEventListener("mouseup", q), document.addEventListener("pointermove", q), document.addEventListener("pointerdown", q), document.addEventListener("pointerup", q), document.addEventListener("touchmove", q), document.addEventListener("touchstart", q), document.addEventListener("touchend", q)
                }

                function V() {
                    document.removeEventListener("mousemove", q), document.removeEventListener("mousedown", q), document.removeEventListener("mouseup", q), document.removeEventListener("pointermove", q), document.removeEventListener("pointerdown", q), document.removeEventListener("pointerup", q), document.removeEventListener("touchmove", q), document.removeEventListener("touchstart", q), document.removeEventListener("touchend", q)
                }

                function q(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (O = !1, V())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", Z, !0), document.addEventListener("pointerdown", Z, !0), document.addEventListener("touchstart", Z, !0), document.addEventListener("visibilitychange", B, !0), N(), f.addEventListener("focus", g, !0), f.addEventListener("blur", b, !0)
            }

            function v() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: v
            }
        })
    });
    var St = ge((Rr, At) => {
        var Ct = _e();
        Ct.define("focus", At.exports = function () {
            var e = [],
                v = !1;

            function f(P) {
                v && (P.preventDefault(), P.stopPropagation(), P.stopImmediatePropagation(), e.unshift(P))
            }

            function O(P) {
                var F = P.target,
                    C = F.tagName;
                return /^a$/i.test(C) && F.href != null || /^(button|textarea)$/i.test(C) && F.disabled !== !0 || /^input$/i.test(C) && /^(button|reset|submit|radio|checkbox)$/i.test(F.type) && !F.disabled || !/^(button|input|textarea|select|a)$/i.test(C) && !Number.isNaN(Number.parseFloat(F.tabIndex)) || /^audio$/i.test(C) || /^video$/i.test(C) && F.controls === !0
            }

            function j(P) {
                O(P) && (v = !0, setTimeout(() => {
                    for (v = !1, P.target.focus(); e.length > 0;) {
                        var F = e.pop();
                        F.target.dispatchEvent(new MouseEvent(F.type, F))
                    }
                }, 0))
            }

            function T() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ct.env.safari && (document.addEventListener("mousedown", j, !0), document.addEventListener("mouseup", f, !0), document.addEventListener("click", f, !0))
            }
            return {
                ready: T
            }
        })
    });
    var It = ge((Wr, Tt) => {
        var qe = _e();
        qe.define("links", Tt.exports = function (e, v) {
            var f = {},
                O = e(window),
                j, T = qe.env(),
                P = window.location,
                F = document.createElement("a"),
                C = "w--current",
                X = /index\.(html|php)$/,
                J = /\/$/,
                d, Z;
            f.ready = f.design = f.preview = g;

            function g() {
                j = T && qe.env("design"), Z = qe.env("slug") || P.pathname || "", qe.scroll.off(B), d = [];
                for (var V = document.links, q = 0; q < V.length; ++q) b(V[q]);
                d.length && (qe.scroll.on(B), B())
            }

            function b(V) {
                var q = j && V.getAttribute("href-disabled") || V.getAttribute("href");
                if (F.href = q, !(q.indexOf(":") >= 0)) {
                    var A = e(V);
                    if (F.hash.length > 1 && F.host + F.pathname === P.host + P.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(F.hash)) return;
                        var U = e(F.hash);
                        U.length && d.push({
                            link: A,
                            sec: U,
                            active: !1
                        });
                        return
                    }
                    if (!(q === "#" || q === "")) {
                        var M = F.href === P.href || q === Z || X.test(q) && J.test(Z);
                        N(A, C, M)
                    }
                }
            }

            function B() {
                var V = O.scrollTop(),
                    q = O.height();
                v.each(d, function (A) {
                    var U = A.link,
                        M = A.sec,
                        $ = M.offset().top,
                        ae = M.outerHeight(),
                        le = q * .5,
                        fe = M.is(":visible") && $ + ae - le >= V && $ + le <= V + q;
                    A.active !== fe && (A.active = fe, N(U, C, fe))
                })
            }

            function N(V, q, A) {
                var U = V.hasClass(q);
                A && U || !A && !U || (A ? V.addClass(q) : V.removeClass(q))
            }
            return f
        })
    });
    var Wt = ge((Fr, Rt) => {
        var Ke = _e();
        Ke.define("scroll", Rt.exports = function (e) {
            var v = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                f = window.location,
                O = b() ? null : window.history,
                j = e(window),
                T = e(document),
                P = e(document.body),
                F = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (D) {
                    window.setTimeout(D, 15)
                },
                C = Ke.env("editor") ? ".w-editor-body" : "body",
                X = "header, " + C + " > .header, " + C + " > .w-nav:not([data-no-scroll])",
                J = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + J + ")",
                Z = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                g = document.createElement("style");
            g.appendChild(document.createTextNode(Z));

            function b() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var B = /^#[a-zA-Z0-9][\w:.-]*$/;

            function N(D) {
                return B.test(D.hash) && D.host + D.pathname === f.host + f.pathname
            }
            let V = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function q() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || V.matches
            }

            function A(D, p) {
                var w;
                switch (p) {
                    case "add":
                        w = D.attr("tabindex"), w ? D.attr("data-wf-tabindex-swap", w) : D.attr("tabindex", "-1");
                        break;
                    case "remove":
                        w = D.attr("data-wf-tabindex-swap"), w ? (D.attr("tabindex", w), D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                        break
                }
                D.toggleClass("wf-force-outline-none", p === "add")
            }

            function U(D) {
                var p = D.currentTarget;
                if (!(Ke.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(p.className))) {
                    var w = N(p) ? p.hash : "";
                    if (w !== "") {
                        var _ = e(w);
                        _.length && (D && (D.preventDefault(), D.stopPropagation()), M(w, D), window.setTimeout(function () {
                            $(_, function () {
                                A(_, "add"), _.get(0).focus({
                                    preventScroll: !0
                                }), A(_, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }

            function M(D) {
                if (f.hash !== D && O && O.pushState && !(Ke.env.chrome && f.protocol === "file:")) {
                    var p = O.state && O.state.hash;
                    p !== D && O.pushState({
                        hash: D
                    }, "", D)
                }
            }

            function $(D, p) {
                var w = j.scrollTop(),
                    _ = ae(D);
                if (w !== _) {
                    var k = le(D, w, _),
                        K = Date.now(),
                        Y = function () {
                            var m = Date.now() - K;
                            window.scroll(0, fe(w, _, m, k)), m <= k ? F(Y) : typeof p == "function" && p()
                        };
                    F(Y)
                }
            }

            function ae(D) {
                var p = e(X),
                    w = p.css("position") === "fixed" ? p.outerHeight() : 0,
                    _ = D.offset().top - w;
                if (D.data("scroll") === "mid") {
                    var k = j.height() - w,
                        K = D.outerHeight();
                    K < k && (_ -= Math.round((k - K) / 2))
                }
                return _
            }

            function le(D, p, w) {
                if (q()) return 0;
                var _ = 1;
                return P.add(D).each(function (k, K) {
                    var Y = parseFloat(K.getAttribute("data-scroll-time"));
                    !isNaN(Y) && Y >= 0 && (_ = Y)
                }), (472.143 * Math.log(Math.abs(p - w) + 125) - 2e3) * _
            }

            function fe(D, p, w, _) {
                return w > _ ? p : D + (p - D) * ye(w / _)
            }

            function ye(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }

            function he() {
                var {
                    WF_CLICK_EMPTY: D,
                    WF_CLICK_SCROLL: p
                } = v;
                T.on(p, d, U), T.on(D, J, function (w) {
                    w.preventDefault()
                }), document.head.insertBefore(g, document.head.firstChild)
            }
            return {
                ready: he
            }
        })
    });
    var Mt = ge((Mr, Ft) => {
        var hr = _e();
        hr.define("touch", Ft.exports = function (e) {
            var v = {},
                f = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, v.init = function (T) {
                return T = typeof T == "string" ? e(T).get(0) : T, T ? new O(T) : null
            };

            function O(T) {
                var P = !1,
                    F = !1,
                    C = Math.min(Math.round(window.innerWidth * .04), 40),
                    X, J;
                T.addEventListener("touchstart", d, !1), T.addEventListener("touchmove", Z, !1), T.addEventListener("touchend", g, !1), T.addEventListener("touchcancel", b, !1), T.addEventListener("mousedown", d, !1), T.addEventListener("mousemove", Z, !1), T.addEventListener("mouseup", g, !1), T.addEventListener("mouseout", b, !1);

                function d(N) {
                    var V = N.touches;
                    V && V.length > 1 || (P = !0, V ? (F = !0, X = V[0].clientX) : X = N.clientX, J = X)
                }

                function Z(N) {
                    if (P) {
                        if (F && N.type === "mousemove") {
                            N.preventDefault(), N.stopPropagation();
                            return
                        }
                        var V = N.touches,
                            q = V ? V[0].clientX : N.clientX,
                            A = q - J;
                        J = q, Math.abs(A) > C && f && String(f()) === "" && (j("swipe", N, {
                            direction: A > 0 ? "right" : "left"
                        }), b())
                    }
                }

                function g(N) {
                    if (P && (P = !1, F && N.type === "mouseup")) {
                        N.preventDefault(), N.stopPropagation(), F = !1;
                        return
                    }
                }

                function b() {
                    P = !1
                }

                function B() {
                    T.removeEventListener("touchstart", d, !1), T.removeEventListener("touchmove", Z, !1), T.removeEventListener("touchend", g, !1), T.removeEventListener("touchcancel", b, !1), T.removeEventListener("mousedown", d, !1), T.removeEventListener("mousemove", Z, !1), T.removeEventListener("mouseup", g, !1), T.removeEventListener("mouseout", b, !1), T = null
                }
                this.destroy = B
            }

            function j(T, P, F) {
                var C = e.Event(T, {
                    originalEvent: P
                });
                e(P.target).trigger(C, F)
            }
            return v.instance = v.init(document), v
        })
    });
    var Dt = ge(it => {
        "use strict";
        Object.defineProperty(it, "__esModule", {
            value: !0
        });
        it.default = vr;

        function vr(e, v, f, O, j, T, P, F, C, X, J, d, Z) {
            return function (g) {
                e(g);
                var b = g.form,
                    B = {
                        name: b.attr("data-name") || b.attr("name") || "Untitled Form",
                        pageId: b.attr("data-wf-page-id") || "",
                        elementId: b.attr("data-wf-element-id") || "",
                        source: v.href,
                        test: f.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(b.html()),
                        trackingCookies: O()
                    };
                let N = b.attr("data-wf-flow");
                N && (B.wfFlow = N), j(g);
                var V = T(b, B.fields);
                if (V) return P(V);
                if (B.fileUploads = F(b), C(g), !X) {
                    J(g);
                    return
                }
                d.ajax({
                    url: Z,
                    type: "POST",
                    data: B,
                    dataType: "json",
                    crossDomain: !0
                }).done(function (q) {
                    q && q.code === 200 && (g.success = !0), J(g)
                }).fail(function () {
                    J(g)
                })
            }
        }
    });
    var Nt = ge((Pr, Pt) => {
        var je = _e();
        je.define("forms", Pt.exports = function (e, v) {
            var f = {},
                O = e(document),
                j, T = window.location,
                P = window.XDomainRequest && !window.atob,
                F = ".w-form",
                C, X = /e(-)?mail/i,
                J = /^\S+@\S+$/,
                d = window.alert,
                Z = je.env(),
                g, b, B, N = /list-manage[1-9]?.com/i,
                V = v.debounce(function () {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            f.ready = f.design = f.preview = function () {
                q(), !Z && !g && U()
            };

            function q() {
                C = e("html").attr("data-wf-site"), b = "https://webflow.com/api/v1/form/" + C, P && b.indexOf("https://webflow.com") >= 0 && (b = b.replace("https://webflow.com", "https://formdata.webflow.com")), B = `${b}/signFile`, j = e(F + " form"), j.length && j.each(A)
            }

            function A(m, E) {
                var i = e(E),
                    r = e.data(E, F);
                r || (r = e.data(E, F, {
                    form: i
                })), M(r);
                var n = i.closest("div.w-form");
                r.done = n.find("> .w-form-done"), r.fail = n.find("> .w-form-fail"), r.fileUploads = n.find(".w-file-upload"), r.fileUploads.each(function (R) {
                    k(R, r)
                });
                var o = r.form.attr("aria-label") || r.form.attr("data-name") || "Form";
                r.done.attr("aria-label") || r.form.attr("aria-label", o), r.done.attr("tabindex", "-1"), r.done.attr("role", "region"), r.done.attr("aria-label") || r.done.attr("aria-label", o + " success"), r.fail.attr("tabindex", "-1"), r.fail.attr("role", "region"), r.fail.attr("aria-label") || r.fail.attr("aria-label", o + " failure");
                var x = r.action = i.attr("action");
                if (r.handler = null, r.redirect = i.attr("data-redirect"), N.test(x)) {
                    r.handler = p;
                    return
                }
                if (!x) {
                    if (C) {
                        r.handler = (() => {
                            let R = Dt().default;
                            return R(M, T, je, ye, _, ae, d, le, $, C, w, e, b)
                        })();
                        return
                    }
                    V()
                }
            }

            function U() {
                g = !0, O.on("submit", F + " form", function (R) {
                    var I = e.data(this, F);
                    I.handler && (I.evt = R, I.handler(I))
                });
                let m = ".w-checkbox-input",
                    E = ".w-radio-input",
                    i = "w--redirected-checked",
                    r = "w--redirected-focus",
                    n = "w--redirected-focus-visible",
                    o = ":focus-visible, [data-wf-focus-visible]",
                    x = [
                        ["checkbox", m],
                        ["radio", E]
                    ];
                O.on("change", F + ' form input[type="checkbox"]:not(' + m + ")", R => {
                    e(R.target).siblings(m).toggleClass(i)
                }), O.on("change", F + ' form input[type="radio"]', R => {
                    e(`input[name="${R.target.name}"]:not(${m})`).map((H, oe) => e(oe).siblings(E).removeClass(i));
                    let I = e(R.target);
                    I.hasClass("w-radio-input") || I.siblings(E).addClass(i)
                }), x.forEach(([R, I]) => {
                    O.on("focus", F + ` form input[type="${R}"]:not(` + I + ")", H => {
                        e(H.target).siblings(I).addClass(r), e(H.target).filter(o).siblings(I).addClass(n)
                    }), O.on("blur", F + ` form input[type="${R}"]:not(` + I + ")", H => {
                        e(H.target).siblings(I).removeClass(`${r} ${n}`)
                    })
                })
            }

            function M(m) {
                var E = m.btn = m.form.find(':input[type="submit"]');
                m.wait = m.btn.attr("data-wait") || null, m.success = !1, E.prop("disabled", !1), m.label && E.val(m.label)
            }

            function $(m) {
                var E = m.btn,
                    i = m.wait;
                E.prop("disabled", !0), i && (m.label = E.val(), E.val(i))
            }

            function ae(m, E) {
                var i = null;
                return E = E || {}, m.find(':input:not([type="submit"]):not([type="file"])').each(function (r, n) {
                    var o = e(n),
                        x = o.attr("type"),
                        R = o.attr("data-name") || o.attr("name") || "Field " + (r + 1),
                        I = o.val();
                    if (x === "checkbox") I = o.is(":checked");
                    else if (x === "radio") {
                        if (E[R] === null || typeof E[R] == "string") return;
                        I = m.find('input[name="' + o.attr("name") + '"]:checked').val() || null
                    }
                    typeof I == "string" && (I = e.trim(I)), E[R] = I, i = i || he(o, x, R, I)
                }), i
            }

            function le(m) {
                var E = {};
                return m.find(':input[type="file"]').each(function (i, r) {
                    var n = e(r),
                        o = n.attr("data-name") || n.attr("name") || "File " + (i + 1),
                        x = n.attr("data-value");
                    typeof x == "string" && (x = e.trim(x)), E[o] = x
                }), E
            }
            let fe = {
                _mkto_trk: "marketo"
            };

            function ye() {
                return document.cookie.split("; ").reduce(function (E, i) {
                    let r = i.split("="),
                        n = r[0];
                    if (n in fe) {
                        let o = fe[n],
                            x = r.slice(1).join("=");
                        E[o] = x
                    }
                    return E
                }, {})
            }

            function he(m, E, i, r) {
                var n = null;
                return E === "password" ? n = "Passwords cannot be submitted." : m.attr("required") ? r ? X.test(m.attr("type")) && (J.test(r) || (n = "Please enter a valid email address for: " + i)) : n = "Please fill out the required field: " + i : i === "g-recaptcha-response" && !r && (n = "Please confirm you\u2019re not a robot."), n
            }

            function D(m) {
                _(m), w(m)
            }

            function p(m) {
                M(m);
                var E = m.form,
                    i = {};
                if (/^https/.test(T.href) && !/^https/.test(m.action)) {
                    E.attr("method", "post");
                    return
                }
                _(m);
                var r = ae(E, i);
                if (r) return d(r);
                $(m);
                var n;
                v.each(i, function (I, H) {
                    X.test(H) && (i.EMAIL = I), /^((full[ _-]?)?name)$/i.test(H) && (n = I), /^(first[ _-]?name)$/i.test(H) && (i.FNAME = I), /^(last[ _-]?name)$/i.test(H) && (i.LNAME = I)
                }), n && !i.FNAME && (n = n.split(" "), i.FNAME = n[0], i.LNAME = i.LNAME || n[1]);
                var o = m.action.replace("/post?", "/post-json?") + "&c=?",
                    x = o.indexOf("u=") + 2;
                x = o.substring(x, o.indexOf("&", x));
                var R = o.indexOf("id=") + 3;
                R = o.substring(R, o.indexOf("&", R)), i["b_" + x + "_" + R] = "", e.ajax({
                    url: o,
                    data: i,
                    dataType: "jsonp"
                }).done(function (I) {
                    m.success = I.result === "success" || /already/.test(I.msg), m.success || console.info("MailChimp error: " + I.msg), w(m)
                }).fail(function () {
                    w(m)
                })
            }

            function w(m) {
                var E = m.form,
                    i = m.redirect,
                    r = m.success;
                if (r && i) {
                    je.location(i);
                    return
                }
                m.done.toggle(r), m.fail.toggle(!r), r ? m.done.focus() : m.fail.focus(), E.toggle(!r), M(m)
            }

            function _(m) {
                m.evt && m.evt.preventDefault(), m.evt = null
            }

            function k(m, E) {
                if (!E.fileUploads || !E.fileUploads[m]) return;
                var i, r = e(E.fileUploads[m]),
                    n = r.find("> .w-file-upload-default"),
                    o = r.find("> .w-file-upload-uploading"),
                    x = r.find("> .w-file-upload-success"),
                    R = r.find("> .w-file-upload-error"),
                    I = n.find(".w-file-upload-input"),
                    H = n.find(".w-file-upload-label"),
                    oe = H.children(),
                    Q = R.find(".w-file-upload-error-msg"),
                    a = x.find(".w-file-upload-file"),
                    y = x.find(".w-file-remove-link"),
                    W = a.find(".w-file-upload-file-name"),
                    L = Q.attr("data-w-size-error"),
                    ie = Q.attr("data-w-type-error"),
                    me = Q.attr("data-w-generic-error");
                if (Z || H.on("click keydown", function (u) {
                        u.type === "keydown" && u.which !== 13 && u.which !== 32 || (u.preventDefault(), I.click())
                    }), H.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), y.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), Z) I.on("click", function (u) {
                    u.preventDefault()
                }), H.on("click", function (u) {
                    u.preventDefault()
                }), oe.on("click", function (u) {
                    u.preventDefault()
                });
                else {
                    y.on("click keydown", function (u) {
                        if (u.type === "keydown") {
                            if (u.which !== 13 && u.which !== 32) return;
                            u.preventDefault()
                        }
                        I.removeAttr("data-value"), I.val(""), W.html(""), n.toggle(!0), x.toggle(!1), H.focus()
                    }), I.on("change", function (u) {
                        i = u.target && u.target.files && u.target.files[0], i && (n.toggle(!1), R.toggle(!1), o.toggle(!0), o.focus(), W.text(i.name), c() || $(E), E.fileUploads[m].uploading = !0, K(i, s))
                    });
                    var be = H.outerHeight();
                    I.height(be), I.width(1)
                }

                function t(u) {
                    var h = u.responseJSON && u.responseJSON.msg,
                        z = me;
                    typeof h == "string" && h.indexOf("InvalidFileTypeError") === 0 ? z = ie : typeof h == "string" && h.indexOf("MaxFileSizeError") === 0 && (z = L), Q.text(z), I.removeAttr("data-value"), I.val(""), o.toggle(!1), n.toggle(!0), R.toggle(!0), R.focus(), E.fileUploads[m].uploading = !1, c() || M(E)
                }

                function s(u, h) {
                    if (u) return t(u);
                    var z = h.fileName,
                        ee = h.postData,
                        ce = h.fileId,
                        S = h.s3Url;
                    I.attr("data-value", ce), Y(S, ee, i, z, l)
                }

                function l(u) {
                    if (u) return t(u);
                    o.toggle(!1), x.css("display", "inline-block"), x.focus(), E.fileUploads[m].uploading = !1, c() || M(E)
                }

                function c() {
                    var u = E.fileUploads && E.fileUploads.toArray() || [];
                    return u.some(function (h) {
                        return h.uploading
                    })
                }
            }

            function K(m, E) {
                var i = new URLSearchParams({
                    name: m.name,
                    size: m.size
                });
                e.ajax({
                    type: "GET",
                    url: `${B}?${i}`,
                    crossDomain: !0
                }).done(function (r) {
                    E(null, r)
                }).fail(function (r) {
                    E(r)
                })
            }

            function Y(m, E, i, r, n) {
                var o = new FormData;
                for (var x in E) o.append(x, E[x]);
                o.append("file", i, r), e.ajax({
                    type: "POST",
                    url: m,
                    data: o,
                    processData: !1,
                    contentType: !1
                }).done(function () {
                    n(null)
                }).fail(function (R) {
                    n(R)
                })
            }
            return f
        })
    });
    var zt = ge((Nr, Ht) => {
        var nt = _e(),
            qt = "w-condition-invisible",
            pr = "." + qt;

        function mr(e) {
            return e.filter(function (v) {
                return !Ue(v)
            })
        }

        function Ue(e) {
            return !!(e.$el && e.$el.closest(pr).length)
        }

        function ot(e, v) {
            for (var f = e; f >= 0; f--)
                if (!Ue(v[f])) return f;
            return -1
        }

        function at(e, v) {
            for (var f = e; f <= v.length - 1; f++)
                if (!Ue(v[f])) return f;
            return -1
        }

        function gr(e, v) {
            return ot(e - 1, v) === -1
        }

        function wr(e, v) {
            return at(e + 1, v) === -1
        }

        function ze(e, v) {
            e.attr("aria-label") || e.attr("aria-label", v)
        }

        function br(e, v, f, O) {
            var j = f.tram,
                T = Array.isArray,
                P = "w-lightbox",
                F = P + "-",
                C = /(^|\s+)/g,
                X = [],
                J, d, Z, g = [];

            function b(r, n) {
                return X = T(r) ? r : [r], d || b.build(), mr(X).length > 1 && (d.items = d.empty, X.forEach(function (o, x) {
                    var R = E("thumbnail"),
                        I = E("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(R);
                    ze(I, `show item ${x+1} of ${X.length}`), Ue(o) && I.addClass(qt), d.items = d.items.add(I), ye(o.thumbnailUrl || o.url, function (H) {
                        H.prop("width") > H.prop("height") ? k(H, "wide") : k(H, "tall"), R.append(k(H, "thumbnail-image"))
                    })
                }), d.strip.empty().append(d.items), k(d.content, "group")), j(K(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), k(d.html, "noscroll"), b.show(n || 0)
            }
            b.build = function () {
                return b.destroy(), d = {
                    html: f(v.documentElement),
                    empty: f()
                }, d.arrowLeft = E("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.arrowRight = E("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.close = E("control close").attr("role", "button"), ze(d.arrowLeft, "previous image"), ze(d.arrowRight, "next image"), ze(d.close, "close lightbox"), d.spinner = E("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), d.strip = E("strip").attr("role", "tablist"), Z = new p(d.spinner, w("hide")), d.content = E("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close), d.container = E("container").append(d.content, d.strip), d.lightbox = E("backdrop hide").append(d.container), d.strip.on("click", _("item"), A), d.content.on("swipe", U).on("click", _("left"), N).on("click", _("right"), V).on("click", _("close"), q).on("click", _("image, caption"), V), d.container.on("click", _("view"), q).on("dragstart", _("img"), $), d.lightbox.on("keydown", ae).on("focusin", M), f(O).append(d.lightbox), b
            }, b.destroy = function () {
                d && (K(d.html, "noscroll"), d.lightbox.remove(), d = void 0)
            }, b.show = function (r) {
                if (r !== J) {
                    var n = X[r];
                    if (!n) return b.hide();
                    if (Ue(n)) {
                        if (r < J) {
                            var o = ot(r - 1, X);
                            r = o > -1 ? o : r
                        } else {
                            var x = at(r + 1, X);
                            r = x > -1 ? x : r
                        }
                        n = X[r]
                    }
                    var R = J;
                    J = r, d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), Z.show();
                    var I = n.html && i(n.width, n.height) || n.url;
                    return ye(I, function (H) {
                        if (r !== J) return;
                        var oe = E("figure", "figure").append(k(H, "image")),
                            Q = E("frame").append(oe),
                            a = E("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(Q),
                            y, W;
                        n.html && (y = f(n.html), W = y.is("iframe"), W && y.on("load", L), oe.append(k(y, "embed"))), n.caption && oe.append(E("caption", "figcaption").text(n.caption)), d.spinner.before(a), W || L();

                        function L() {
                            if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), Z.hide(), r !== J) {
                                a.remove();
                                return
                            }
                            let ie = gr(r, X);
                            Y(d.arrowLeft, "inactive", ie), m(d.arrowLeft, ie), ie && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                            let me = wr(r, X);
                            if (Y(d.arrowRight, "inactive", me), m(d.arrowRight, me), me && d.arrowRight.is(":focus") && d.arrowLeft.focus(), d.view ? (j(d.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(he(d.view)), j(a).add("opacity .3s").add("transform .3s").set({
                                    x: r > R ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : a.css("opacity", 1), d.view = a, d.view.prop("tabIndex", 0), d.items) {
                                K(d.items, "active"), d.items.removeAttr("aria-selected");
                                var be = d.items.eq(r);
                                k(be, "active"), be.attr("aria-selected", !0), D(be)
                            }
                        }
                    }), d.close.prop("tabIndex", 0), f(":focus").addClass("active-lightbox"), g.length === 0 && (f("body").children().each(function () {
                        f(this).hasClass("w-lightbox-backdrop") || f(this).is("script") || (g.push({
                            node: f(this),
                            hidden: f(this).attr("aria-hidden"),
                            tabIndex: f(this).attr("tabIndex")
                        }), f(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), d.close.focus()), b
                }
            }, b.hide = function () {
                return j(d.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(fe), b
            }, b.prev = function () {
                var r = ot(J - 1, X);
                r > -1 && b.show(r)
            }, b.next = function () {
                var r = at(J + 1, X);
                r > -1 && b.show(r)
            };

            function B(r) {
                return function (n) {
                    this === n.target && (n.stopPropagation(), n.preventDefault(), r())
                }
            }
            var N = B(b.prev),
                V = B(b.next),
                q = B(b.hide),
                A = function (r) {
                    var n = f(this).index();
                    r.preventDefault(), b.show(n)
                },
                U = function (r, n) {
                    r.preventDefault(), n.direction === "left" ? b.next() : n.direction === "right" && b.prev()
                },
                M = function () {
                    this.focus()
                };

            function $(r) {
                r.preventDefault()
            }

            function ae(r) {
                var n = r.keyCode;
                n === 27 || le(n, "close") ? b.hide() : n === 37 || le(n, "left") ? b.prev() : n === 39 || le(n, "right") ? b.next() : le(n, "item") && f(":focus").click()
            }

            function le(r, n) {
                if (r !== 13 && r !== 32) return !1;
                var o = f(":focus").attr("class"),
                    x = w(n).trim();
                return o.includes(x)
            }

            function fe() {
                d && (d.strip.scrollLeft(0).empty(), K(d.html, "noscroll"), k(d.lightbox, "hide"), d.view && d.view.remove(), K(d.content, "group"), k(d.arrowLeft, "inactive"), k(d.arrowRight, "inactive"), J = d.view = void 0, g.forEach(function (r) {
                    var n = r.node;
                    n && (r.hidden ? n.attr("aria-hidden", r.hidden) : n.removeAttr("aria-hidden"), r.tabIndex ? n.attr("tabIndex", r.tabIndex) : n.removeAttr("tabIndex"))
                }), g = [], f(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function ye(r, n) {
                var o = E("img", "img");
                return o.one("load", function () {
                    n(o)
                }), o.attr("src", r), o
            }

            function he(r) {
                return function () {
                    r.remove()
                }
            }

            function D(r) {
                var n = r.get(0),
                    o = d.strip.get(0),
                    x = n.offsetLeft,
                    R = n.clientWidth,
                    I = o.scrollLeft,
                    H = o.clientWidth,
                    oe = o.scrollWidth - H,
                    Q;
                x < I ? Q = Math.max(0, x + R - H) : x + R > H + I && (Q = Math.min(x, oe)), Q != null && j(d.strip).add("scroll-left 500ms").start({
                    "scroll-left": Q
                })
            }

            function p(r, n, o) {
                this.$element = r, this.className = n, this.delay = o || 200, this.hide()
            }
            p.prototype.show = function () {
                var r = this;
                r.timeoutId || (r.timeoutId = setTimeout(function () {
                    r.$element.removeClass(r.className), delete r.timeoutId
                }, r.delay))
            }, p.prototype.hide = function () {
                var r = this;
                if (r.timeoutId) {
                    clearTimeout(r.timeoutId), delete r.timeoutId;
                    return
                }
                r.$element.addClass(r.className)
            };

            function w(r, n) {
                return r.replace(C, (n ? " ." : " ") + F)
            }

            function _(r) {
                return w(r, !0)
            }

            function k(r, n) {
                return r.addClass(w(n))
            }

            function K(r, n) {
                return r.removeClass(w(n))
            }

            function Y(r, n, o) {
                return r.toggleClass(w(n), o)
            }

            function m(r, n) {
                return r.attr("aria-hidden", n).attr("tabIndex", n ? -1 : 0)
            }

            function E(r, n) {
                return k(f(v.createElement(n || "div")), r)
            }

            function i(r, n) {
                var o = '<svg xmlns="http://www.w3.org/2000/svg" width="' + r + '" height="' + n + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(o)
            }
            return function () {
                var r = e.navigator.userAgent,
                    n = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    o = r.match(n),
                    x = r.indexOf("Android ") > -1 && r.indexOf("Chrome") === -1;
                if (!x && (!o || o[2] > 7)) return;
                var R = v.createElement("style");
                v.head.appendChild(R), e.addEventListener("resize", I, !0);

                function I() {
                    var H = e.innerHeight,
                        oe = e.innerWidth,
                        Q = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + H + "px}.w-lightbox-view {width:" + oe + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * H + "px}.w-lightbox-image {max-width:" + oe + "px;max-height:" + H + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * H + "px}.w-lightbox-strip {padding: 0 " + .01 * H + "px}.w-lightbox-item {width:" + .1 * H + "px;padding:" + .02 * H + "px " + .01 * H + "px}.w-lightbox-thumbnail {height:" + .1 * H + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * H + "px}.w-lightbox-content {margin-top:" + .02 * H + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * H + "px}.w-lightbox-image {max-width:" + .96 * oe + "px;max-height:" + .96 * H + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * oe + "px;max-height:" + .84 * H + "px}}";
                    R.textContent = Q
                }
                I()
            }(), b
        }
        nt.define("lightbox", Ht.exports = function (e) {
            var v = {},
                f = nt.env(),
                O = br(window, document, e, f ? "#lightbox-mountpoint" : "body"),
                j = e(document),
                T, P, F = ".w-lightbox",
                C;
            v.ready = v.design = v.preview = X;

            function X() {
                P = f && nt.env("design"), O.destroy(), C = {}, T = j.find(F), T.webflowLightBox(), T.each(function () {
                    ze(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function () {
                    var g = this;
                    e.each(g, function (b, B) {
                        var N = e.data(B, F);
                        N || (N = e.data(B, F, {
                            el: e(B),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), N.el.off(F), J(N), P ? N.el.on("setting" + F, J.bind(null, N)) : N.el.on("click" + F, d(N)).on("click" + F, function (V) {
                            V.preventDefault()
                        })
                    })
                }
            });

            function J(g) {
                var b = g.el.children(".w-json").html(),
                    B, N;
                if (!b) {
                    g.items = [];
                    return
                }
                try {
                    b = JSON.parse(b)
                } catch (V) {
                    console.error("Malformed lightbox JSON configuration.", V)
                }
                Z(b), b.items.forEach(function (V) {
                    V.$el = g.el
                }), B = b.group, B ? (N = C[B], N || (N = C[B] = []), g.items = N, b.items.length && (g.index = N.length, N.push.apply(N, b.items))) : (g.items = b.items, g.index = 0)
            }

            function d(g) {
                return function () {
                    g.items.length && O(g.items, g.index || 0)
                }
            }

            function Z(g) {
                g.images && (g.images.forEach(function (b) {
                    b.type = "image"
                }), g.items = g.images), g.embed && (g.embed.type = "video", g.items = [g.embed]), g.groupId && (g.group = g.groupId)
            }
            return v
        })
    });
    var Xt = ge((qr, Bt) => {
        "use strict";
        var st = window.jQuery,
            Ie = {},
            Ge = [],
            Ut = ".w-ix",
            Ye = {
                reset: function (e, v) {
                    v.__wf_intro = null
                },
                intro: function (e, v) {
                    v.__wf_intro || (v.__wf_intro = !0, st(v).triggerHandler(Ie.types.INTRO))
                },
                outro: function (e, v) {
                    v.__wf_intro && (v.__wf_intro = null, st(v).triggerHandler(Ie.types.OUTRO))
                }
            };
        Ie.triggers = {};
        Ie.types = {
            INTRO: "w-ix-intro" + Ut,
            OUTRO: "w-ix-outro" + Ut
        };
        Ie.init = function () {
            for (var e = Ge.length, v = 0; v < e; v++) {
                var f = Ge[v];
                f[0](0, f[1])
            }
            Ge = [], st.extend(Ie.triggers, Ye)
        };
        Ie.async = function () {
            for (var e in Ye) {
                var v = Ye[e];
                Ye.hasOwnProperty(e) && (Ie.triggers[e] = function (f, O) {
                    Ge.push([v, O])
                })
            }
        };
        Ie.async();
        Bt.exports = Ie
    });
    var lt = ge((Hr, jt) => {
        "use strict";
        var ut = Xt();

        function Vt(e, v) {
            var f = document.createEvent("CustomEvent");
            f.initCustomEvent(v, !0, !0, null), e.dispatchEvent(f)
        }
        var yr = window.jQuery,
            $e = {},
            Kt = ".w-ix",
            xr = {
                reset: function (e, v) {
                    ut.triggers.reset(e, v)
                },
                intro: function (e, v) {
                    ut.triggers.intro(e, v), Vt(v, "COMPONENT_ACTIVE")
                },
                outro: function (e, v) {
                    ut.triggers.outro(e, v), Vt(v, "COMPONENT_INACTIVE")
                }
            };
        $e.triggers = {};
        $e.types = {
            INTRO: "w-ix-intro" + Kt,
            OUTRO: "w-ix-outro" + Kt
        };
        yr.extend($e.triggers, xr);
        jt.exports = $e
    });
    var Yt = ge((zr, Gt) => {
        var Fe = _e(),
            Er = lt(),
            we = {
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
        Fe.define("navbar", Gt.exports = function (e, v) {
            var f = {},
                O = e.tram,
                j = e(window),
                T = e(document),
                P = v.debounce,
                F, C, X, J, d = Fe.env(),
                Z = '<div class="w-nav-overlay" data-wf-ignore />',
                g = ".w-nav",
                b = "w--open",
                B = "w--nav-dropdown-open",
                N = "w--nav-dropdown-toggle-open",
                V = "w--nav-dropdown-list-open",
                q = "w--nav-link-open",
                A = Er.triggers,
                U = e();
            f.ready = f.design = f.preview = M, f.destroy = function () {
                U = e(), $(), C && C.length && C.each(ye)
            };

            function M() {
                X = d && Fe.env("design"), J = Fe.env("editor"), F = e(document.body), C = T.find(g), C.length && (C.each(fe), $(), ae())
            }

            function $() {
                Fe.resize.off(le)
            }

            function ae() {
                Fe.resize.on(le)
            }

            function le() {
                C.each(n)
            }

            function fe(a, y) {
                var W = e(y),
                    L = e.data(y, g);
                L || (L = e.data(y, g, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })), L.menu = W.find(".w-nav-menu"), L.links = L.menu.find(".w-nav-link"), L.dropdowns = L.menu.find(".w-dropdown"), L.dropdownToggle = L.menu.find(".w-dropdown-toggle"), L.dropdownList = L.menu.find(".w-dropdown-list"), L.button = W.find(".w-nav-button"), L.container = W.find(".w-container"), L.overlayContainerId = "w-nav-overlay-" + a, L.outside = i(L);
                var ie = W.find(".w-nav-brand");
                ie && ie.attr("href") === "/" && ie.attr("aria-label") == null && ie.attr("aria-label", "home"), L.button.attr("style", "-webkit-user-select: text;"), L.button.attr("aria-label") == null && L.button.attr("aria-label", "menu"), L.button.attr("role", "button"), L.button.attr("tabindex", "0"), L.button.attr("aria-controls", L.overlayContainerId), L.button.attr("aria-haspopup", "menu"), L.button.attr("aria-expanded", "false"), L.el.off(g), L.button.off(g), L.menu.off(g), p(L), X ? (he(L), L.el.on("setting" + g, w(L))) : (D(L), L.button.on("click" + g, m(L)), L.menu.on("click" + g, "a", E(L)), L.button.on("keydown" + g, _(L)), L.el.on("keydown" + g, k(L))), n(a, y)
            }

            function ye(a, y) {
                var W = e.data(y, g);
                W && (he(W), e.removeData(y, g))
            }

            function he(a) {
                a.overlay && (Q(a, !0), a.overlay.remove(), a.overlay = null)
            }

            function D(a) {
                a.overlay || (a.overlay = e(Z).appendTo(a.el), a.overlay.attr("id", a.overlayContainerId), a.parent = a.menu.parent(), Q(a, !0))
            }

            function p(a) {
                var y = {},
                    W = a.config || {},
                    L = y.animation = a.el.attr("data-animation") || "default";
                y.animOver = /^over/.test(L), y.animDirect = /left$/.test(L) ? -1 : 1, W.animation !== L && a.open && v.defer(Y, a), y.easing = a.el.attr("data-easing") || "ease", y.easing2 = a.el.attr("data-easing2") || "ease";
                var ie = a.el.attr("data-duration");
                y.duration = ie != null ? Number(ie) : 400, y.docHeight = a.el.attr("data-doc-height"), a.config = y
            }

            function w(a) {
                return function (y, W) {
                    W = W || {};
                    var L = j.width();
                    p(a), W.open === !0 && H(a, !0), W.open === !1 && Q(a, !0), a.open && v.defer(function () {
                        L !== j.width() && Y(a)
                    })
                }
            }

            function _(a) {
                return function (y) {
                    switch (y.keyCode) {
                        case we.SPACE:
                        case we.ENTER:
                            return m(a)(), y.preventDefault(), y.stopPropagation();
                        case we.ESCAPE:
                            return Q(a), y.preventDefault(), y.stopPropagation();
                        case we.ARROW_RIGHT:
                        case we.ARROW_DOWN:
                        case we.HOME:
                        case we.END:
                            return a.open ? (y.keyCode === we.END ? a.selectedIdx = a.links.length - 1 : a.selectedIdx = 0, K(a), y.preventDefault(), y.stopPropagation()) : (y.preventDefault(), y.stopPropagation())
                    }
                }
            }

            function k(a) {
                return function (y) {
                    if (a.open) switch (a.selectedIdx = a.links.index(document.activeElement), y.keyCode) {
                        case we.HOME:
                        case we.END:
                            return y.keyCode === we.END ? a.selectedIdx = a.links.length - 1 : a.selectedIdx = 0, K(a), y.preventDefault(), y.stopPropagation();
                        case we.ESCAPE:
                            return Q(a), a.button.focus(), y.preventDefault(), y.stopPropagation();
                        case we.ARROW_LEFT:
                        case we.ARROW_UP:
                            return a.selectedIdx = Math.max(-1, a.selectedIdx - 1), K(a), y.preventDefault(), y.stopPropagation();
                        case we.ARROW_RIGHT:
                        case we.ARROW_DOWN:
                            return a.selectedIdx = Math.min(a.links.length - 1, a.selectedIdx + 1), K(a), y.preventDefault(), y.stopPropagation()
                    }
                }
            }

            function K(a) {
                if (a.links[a.selectedIdx]) {
                    var y = a.links[a.selectedIdx];
                    y.focus(), E(y)
                }
            }

            function Y(a) {
                a.open && (Q(a, !0), H(a, !0))
            }

            function m(a) {
                return P(function () {
                    a.open ? Q(a) : H(a)
                })
            }

            function E(a) {
                return function (y) {
                    var W = e(this),
                        L = W.attr("href");
                    if (!Fe.validClick(y.currentTarget)) {
                        y.preventDefault();
                        return
                    }
                    L && L.indexOf("#") === 0 && a.open && Q(a)
                }
            }

            function i(a) {
                return a.outside && T.off("click" + g, a.outside),
                    function (y) {
                        var W = e(y.target);
                        J && W.closest(".w-editor-bem-EditorOverlay").length || r(a, W)
                    }
            }
            var r = P(function (a, y) {
                if (a.open) {
                    var W = y.closest(".w-nav-menu");
                    a.menu.is(W) || Q(a)
                }
            });

            function n(a, y) {
                var W = e.data(y, g),
                    L = W.collapsed = W.button.css("display") !== "none";
                if (W.open && !L && !X && Q(W, !0), W.container.length) {
                    var ie = x(W);
                    W.links.each(ie), W.dropdowns.each(ie)
                }
                W.open && oe(W)
            }
            var o = "max-width";

            function x(a) {
                var y = a.container.css(o);
                return y === "none" && (y = ""),
                    function (W, L) {
                        L = e(L), L.css(o, ""), L.css(o) === "none" && L.css(o, y)
                    }
            }

            function R(a, y) {
                y.setAttribute("data-nav-menu-open", "")
            }

            function I(a, y) {
                y.removeAttribute("data-nav-menu-open")
            }

            function H(a, y) {
                if (a.open) return;
                a.open = !0, a.menu.each(R), a.links.addClass(q), a.dropdowns.addClass(B), a.dropdownToggle.addClass(N), a.dropdownList.addClass(V), a.button.addClass(b);
                var W = a.config,
                    L = W.animation;
                (L === "none" || !O.support.transform || W.duration <= 0) && (y = !0);
                var ie = oe(a),
                    me = a.menu.outerHeight(!0),
                    be = a.menu.outerWidth(!0),
                    t = a.el.height(),
                    s = a.el[0];
                if (n(0, s), A.intro(0, s), Fe.redraw.up(), X || T.on("click" + g, a.outside), y) {
                    u();
                    return
                }
                var l = "transform " + W.duration + "ms " + W.easing;
                if (a.overlay && (U = a.menu.prev(), a.overlay.show().append(a.menu)), W.animOver) {
                    O(a.menu).add(l).set({
                        x: W.animDirect * be,
                        height: ie
                    }).start({
                        x: 0
                    }).then(u), a.overlay && a.overlay.width(be);
                    return
                }
                var c = t + me;
                O(a.menu).add(l).set({
                    y: -c
                }).start({
                    y: 0
                }).then(u);

                function u() {
                    a.button.attr("aria-expanded", "true")
                }
            }

            function oe(a) {
                var y = a.config,
                    W = y.docHeight ? T.height() : F.height();
                return y.animOver ? a.menu.height(W) : a.el.css("position") !== "fixed" && (W -= a.el.outerHeight(!0)), a.overlay && a.overlay.height(W), W
            }

            function Q(a, y) {
                if (!a.open) return;
                a.open = !1, a.button.removeClass(b);
                var W = a.config;
                if ((W.animation === "none" || !O.support.transform || W.duration <= 0) && (y = !0), A.outro(0, a.el[0]), T.off("click" + g, a.outside), y) {
                    O(a.menu).stop(), s();
                    return
                }
                var L = "transform " + W.duration + "ms " + W.easing2,
                    ie = a.menu.outerHeight(!0),
                    me = a.menu.outerWidth(!0),
                    be = a.el.height();
                if (W.animOver) {
                    O(a.menu).add(L).start({
                        x: me * W.animDirect
                    }).then(s);
                    return
                }
                var t = be + ie;
                O(a.menu).add(L).start({
                    y: -t
                }).then(s);

                function s() {
                    a.menu.height(""), O(a.menu).set({
                        x: 0,
                        y: 0
                    }), a.menu.each(I), a.links.removeClass(q), a.dropdowns.removeClass(B), a.dropdownToggle.removeClass(N), a.dropdownList.removeClass(V), a.overlay && a.overlay.children().length && (U.length ? a.menu.insertAfter(U) : a.menu.prependTo(a.parent), a.overlay.attr("style", "").hide()), a.el.triggerHandler("w-close"), a.button.attr("aria-expanded", "false")
                }
            }
            return f
        })
    });
    var Zt = ge((Ur, Qt) => {
        var Me = _e(),
            kr = lt(),
            Re = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            $t = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Me.define("slider", Qt.exports = function (e, v) {
            var f = {},
                O = e.tram,
                j = e(document),
                T, P, F = Me.env(),
                C = ".w-slider",
                X = '<div class="w-slider-dot" data-wf-ignore />',
                J = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                d = "w-slider-force-show",
                Z = kr.triggers,
                g, b = !1;
            f.ready = function () {
                P = Me.env("design"), B()
            }, f.design = function () {
                P = !0, setTimeout(B, 1e3)
            }, f.preview = function () {
                P = !1, B()
            }, f.redraw = function () {
                b = !0, B(), b = !1
            }, f.destroy = N;

            function B() {
                T = j.find(C), T.length && (T.each(A), !g && (N(), V()))
            }

            function N() {
                Me.resize.off(q), Me.redraw.off(f.redraw)
            }

            function V() {
                Me.resize.on(q), Me.redraw.on(f.redraw)
            }

            function q() {
                T.filter(":visible").each(k)
            }

            function A(i, r) {
                var n = e(r),
                    o = e.data(r, C);
                o || (o = e.data(r, C, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: n,
                    config: {}
                })), o.mask = n.children(".w-slider-mask"), o.left = n.children(".w-slider-arrow-left"), o.right = n.children(".w-slider-arrow-right"), o.nav = n.children(".w-slider-nav"), o.slides = o.mask.children(".w-slide"), o.slides.each(Z.reset), b && (o.maskWidth = 0), n.attr("role") === void 0 && n.attr("role", "region"), n.attr("aria-label") === void 0 && n.attr("aria-label", "carousel");
                var x = o.mask.attr("id");
                if (x || (x = "w-slider-mask-" + i, o.mask.attr("id", x)), !P && !o.ariaLiveLabel && (o.ariaLiveLabel = e(J).appendTo(o.mask)), o.left.attr("role", "button"), o.left.attr("tabindex", "0"), o.left.attr("aria-controls", x), o.left.attr("aria-label") === void 0 && o.left.attr("aria-label", "previous slide"), o.right.attr("role", "button"), o.right.attr("tabindex", "0"), o.right.attr("aria-controls", x), o.right.attr("aria-label") === void 0 && o.right.attr("aria-label", "next slide"), !O.support.transform) {
                    o.left.hide(), o.right.hide(), o.nav.hide(), g = !0;
                    return
                }
                o.el.off(C), o.left.off(C), o.right.off(C), o.nav.off(C), U(o), P ? (o.el.on("setting" + C, p(o)), D(o), o.hasTimer = !1) : (o.el.on("swipe" + C, p(o)), o.left.on("click" + C, le(o)), o.right.on("click" + C, fe(o)), o.left.on("keydown" + C, ae(o, le)), o.right.on("keydown" + C, ae(o, fe)), o.nav.on("keydown" + C, "> div", p(o)), o.config.autoplay && !o.hasTimer && (o.hasTimer = !0, o.timerCount = 1, he(o)), o.el.on("mouseenter" + C, $(o, !0, "mouse")), o.el.on("focusin" + C, $(o, !0, "keyboard")), o.el.on("mouseleave" + C, $(o, !1, "mouse")), o.el.on("focusout" + C, $(o, !1, "keyboard"))), o.nav.on("click" + C, "> div", p(o)), F || o.mask.contents().filter(function () {
                    return this.nodeType === 3
                }).remove();
                var R = n.filter(":hidden");
                R.addClass(d);
                var I = n.parents(":hidden");
                I.addClass(d), b || k(i, r), R.removeClass(d), I.removeClass(d)
            }

            function U(i) {
                var r = {};
                r.crossOver = 0, r.animation = i.el.attr("data-animation") || "slide", r.animation === "outin" && (r.animation = "cross", r.crossOver = .5), r.easing = i.el.attr("data-easing") || "ease";
                var n = i.el.attr("data-duration");
                if (r.duration = n != null ? parseInt(n, 10) : 500, M(i.el.attr("data-infinite")) && (r.infinite = !0), M(i.el.attr("data-disable-swipe")) && (r.disableSwipe = !0), M(i.el.attr("data-hide-arrows")) ? r.hideArrows = !0 : i.config.hideArrows && (i.left.show(), i.right.show()), M(i.el.attr("data-autoplay"))) {
                    r.autoplay = !0, r.delay = parseInt(i.el.attr("data-delay"), 10) || 2e3, r.timerMax = parseInt(i.el.attr("data-autoplay-limit"), 10);
                    var o = "mousedown" + C + " touchstart" + C;
                    P || i.el.off(o).one(o, function () {
                        D(i)
                    })
                }
                var x = i.right.width();
                r.edge = x ? x + 40 : 100, i.config = r
            }

            function M(i) {
                return i === "1" || i === "true"
            }

            function $(i, r, n) {
                return function (o) {
                    if (r) i.hasFocus[n] = r;
                    else if (e.contains(i.el.get(0), o.relatedTarget) || (i.hasFocus[n] = r, i.hasFocus.mouse && n === "keyboard" || i.hasFocus.keyboard && n === "mouse")) return;
                    r ? (i.ariaLiveLabel.attr("aria-live", "polite"), i.hasTimer && D(i)) : (i.ariaLiveLabel.attr("aria-live", "off"), i.hasTimer && he(i))
                }
            }

            function ae(i, r) {
                return function (n) {
                    switch (n.keyCode) {
                        case Re.SPACE:
                        case Re.ENTER:
                            return r(i)(), n.preventDefault(), n.stopPropagation()
                    }
                }
            }

            function le(i) {
                return function () {
                    _(i, {
                        index: i.index - 1,
                        vector: -1
                    })
                }
            }

            function fe(i) {
                return function () {
                    _(i, {
                        index: i.index + 1,
                        vector: 1
                    })
                }
            }

            function ye(i, r) {
                var n = null;
                r === i.slides.length && (B(), K(i)), v.each(i.anchors, function (o, x) {
                    e(o.els).each(function (R, I) {
                        e(I).index() === r && (n = x)
                    })
                }), n != null && _(i, {
                    index: n,
                    immediate: !0
                })
            }

            function he(i) {
                D(i);
                var r = i.config,
                    n = r.timerMax;
                n && i.timerCount++ > n || (i.timerId = window.setTimeout(function () {
                    i.timerId == null || P || (fe(i)(), he(i))
                }, r.delay))
            }

            function D(i) {
                window.clearTimeout(i.timerId), i.timerId = null
            }

            function p(i) {
                return function (r, n) {
                    n = n || {};
                    var o = i.config;
                    if (P && r.type === "setting") {
                        if (n.select === "prev") return le(i)();
                        if (n.select === "next") return fe(i)();
                        if (U(i), K(i), n.select == null) return;
                        ye(i, n.select);
                        return
                    }
                    if (r.type === "swipe") return o.disableSwipe || Me.env("editor") ? void 0 : n.direction === "left" ? fe(i)() : n.direction === "right" ? le(i)() : void 0;
                    if (i.nav.has(r.target).length) {
                        var x = e(r.target).index();
                        if (r.type === "click" && _(i, {
                                index: x
                            }), r.type === "keydown") switch (r.keyCode) {
                            case Re.ENTER:
                            case Re.SPACE: {
                                _(i, {
                                    index: x
                                }), r.preventDefault();
                                break
                            }
                            case Re.ARROW_LEFT:
                            case Re.ARROW_UP: {
                                w(i.nav, Math.max(x - 1, 0)), r.preventDefault();
                                break
                            }
                            case Re.ARROW_RIGHT:
                            case Re.ARROW_DOWN: {
                                w(i.nav, Math.min(x + 1, i.pages)), r.preventDefault();
                                break
                            }
                            case Re.HOME: {
                                w(i.nav, 0), r.preventDefault();
                                break
                            }
                            case Re.END: {
                                w(i.nav, i.pages), r.preventDefault();
                                break
                            }
                            default:
                                return
                        }
                    }
                }
            }

            function w(i, r) {
                var n = i.children().eq(r).focus();
                i.children().not(n)
            }

            function _(i, r) {
                r = r || {};
                var n = i.config,
                    o = i.anchors;
                i.previous = i.index;
                var x = r.index,
                    R = {};
                x < 0 ? (x = o.length - 1, n.infinite && (R.x = -i.endX, R.from = 0, R.to = o[0].width)) : x >= o.length && (x = 0, n.infinite && (R.x = o[o.length - 1].width, R.from = -o[o.length - 1].x, R.to = R.from - R.x)), i.index = x;
                var I = i.nav.children().eq(x).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                i.nav.children().not(I).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), n.hideArrows && (i.index === o.length - 1 ? i.right.hide() : i.right.show(), i.index === 0 ? i.left.hide() : i.left.show());
                var H = i.offsetX || 0,
                    oe = i.offsetX = -o[i.index].x,
                    Q = {
                        x: oe,
                        opacity: 1,
                        visibility: ""
                    },
                    a = e(o[i.index].els),
                    y = e(o[i.previous] && o[i.previous].els),
                    W = i.slides.not(a),
                    L = n.animation,
                    ie = n.easing,
                    me = Math.round(n.duration),
                    be = r.vector || (i.index > i.previous ? 1 : -1),
                    t = "opacity " + me + "ms " + ie,
                    s = "transform " + me + "ms " + ie;
                if (a.find($t).removeAttr("tabindex"), a.removeAttr("aria-hidden"), a.find("*").removeAttr("aria-hidden"), W.find($t).attr("tabindex", "-1"), W.attr("aria-hidden", "true"), W.find("*").attr("aria-hidden", "true"), P || (a.each(Z.intro), W.each(Z.outro)), r.immediate && !b) {
                    O(a).set(Q), u();
                    return
                }
                if (i.index === i.previous) return;
                if (P || i.ariaLiveLabel.text(`Slide ${x+1} of ${o.length}.`), L === "cross") {
                    var l = Math.round(me - me * n.crossOver),
                        c = Math.round(me - l);
                    t = "opacity " + l + "ms " + ie, O(y).set({
                        visibility: ""
                    }).add(t).start({
                        opacity: 0
                    }), O(a).set({
                        visibility: "",
                        x: oe,
                        opacity: 0,
                        zIndex: i.depth++
                    }).add(t).wait(c).then({
                        opacity: 1
                    }).then(u);
                    return
                }
                if (L === "fade") {
                    O(y).set({
                        visibility: ""
                    }).stop(), O(a).set({
                        visibility: "",
                        x: oe,
                        opacity: 0,
                        zIndex: i.depth++
                    }).add(t).start({
                        opacity: 1
                    }).then(u);
                    return
                }
                if (L === "over") {
                    Q = {
                        x: i.endX
                    }, O(y).set({
                        visibility: ""
                    }).stop(), O(a).set({
                        visibility: "",
                        zIndex: i.depth++,
                        x: oe + o[i.index].width * be
                    }).add(s).start({
                        x: oe
                    }).then(u);
                    return
                }
                n.infinite && R.x ? (O(i.slides.not(y)).set({
                    visibility: "",
                    x: R.x
                }).add(s).start({
                    x: oe
                }), O(y).set({
                    visibility: "",
                    x: R.from
                }).add(s).start({
                    x: R.to
                }), i.shifted = y) : (n.infinite && i.shifted && (O(i.shifted).set({
                    visibility: "",
                    x: H
                }), i.shifted = null), O(i.slides).set({
                    visibility: ""
                }).add(s).start({
                    x: oe
                }));

                function u() {
                    a = e(o[i.index].els), W = i.slides.not(a), L !== "slide" && (Q.visibility = "hidden"), O(W).set(Q)
                }
            }

            function k(i, r) {
                var n = e.data(r, C);
                if (n) {
                    if (m(n)) return K(n);
                    P && E(n) && K(n)
                }
            }

            function K(i) {
                var r = 1,
                    n = 0,
                    o = 0,
                    x = 0,
                    R = i.maskWidth,
                    I = R - i.config.edge;
                I < 0 && (I = 0), i.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], i.slides.each(function (oe, Q) {
                    o - n > I && (r++, n += R, i.anchors[r - 1] = {
                        els: [],
                        x: o,
                        width: 0
                    }), x = e(Q).outerWidth(!0), o += x, i.anchors[r - 1].width += x, i.anchors[r - 1].els.push(Q);
                    var a = oe + 1 + " of " + i.slides.length;
                    e(Q).attr("aria-label", a), e(Q).attr("role", "group")
                }), i.endX = o, P && (i.pages = null), i.nav.length && i.pages !== r && (i.pages = r, Y(i));
                var H = i.index;
                H >= r && (H = r - 1), _(i, {
                    immediate: !0,
                    index: H
                })
            }

            function Y(i) {
                var r = [],
                    n, o = i.el.attr("data-nav-spacing");
                o && (o = parseFloat(o) + "px");
                for (var x = 0, R = i.pages; x < R; x++) n = e(X), n.attr("aria-label", "Show slide " + (x + 1) + " of " + R).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), i.nav.hasClass("w-num") && n.text(x + 1), o != null && n.css({
                    "margin-left": o,
                    "margin-right": o
                }), r.push(n);
                i.nav.empty().append(r)
            }

            function m(i) {
                var r = i.mask.width();
                return i.maskWidth !== r ? (i.maskWidth = r, !0) : !1
            }

            function E(i) {
                var r = 0;
                return i.slides.each(function (n, o) {
                    r += e(o).outerWidth(!0)
                }), i.slidesWidth !== r ? (i.slidesWidth = r, !0) : !1
            }
            return f
        })
    });
    Et();
    _t();
    Ot();
    St();
    It();
    Wt();
    Mt();
    Nt();
    zt();
    Yt();
    Zt();
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