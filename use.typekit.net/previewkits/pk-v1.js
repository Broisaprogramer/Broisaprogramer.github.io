if (!window.TypekitPreview) window.TypekitPreview = {};
window.TypekitPreview.config = {
    "pa": "https://use.typekit.net/pf/{user}/{font_alias}/{fvd}/{format}{?subset_id,primer,fvd,ec_token}",
    "ping": "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}"
};;
(function(window, document, undefined) {
    if (!document.querySelector) {
        document.documentElement.className += " wf-inactive";
        return;
    }

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function n(a, b, c) {
        n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return n.apply(null, arguments)
    }
    var p = Date.now || function() {
        return +new Date
    };

    function q(a) {
        this.c = a || "-"
    }
    q.prototype.b = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.c)
    };

    function ca() {
        var a = window;
        this.c = this.g = a;
        this.b = this.c.document
    }

    function r(a, b, c, d) {
        b = a.b.createElement(b);
        if (c)
            for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.b.createTextNode(d));
        return b
    }

    function t(a, b, c) {
        a = a.b.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild)
    }

    function da(a, b) {
        a.b.body ? b() : a.b.addEventListener ? a.b.addEventListener("DOMContentLoaded", b) : a.b.attachEvent("onreadystatechange", function() {
            "interactive" != a.b.readyState && "complete" != a.b.readyState || b()
        })
    }

    function u(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function v(a, b, c) {
        var d = b || [];
        c = c || [];
        b = a.className.split(/\s+/);
        for (var e, f = 0; f < d.length; f += 1) {
            e = !1;
            for (var g = 0; g < b.length; g += 1)
                if (d[f] === b[g]) {
                    e = !0;
                    break
                }
            e || b.push(d[f])
        }
        d = [];
        for (f = 0; f < b.length; f += 1) {
            e = !1;
            for (g = 0; g < c.length; g += 1)
                if (b[f] === c[g]) {
                    e = !0;
                    break
                }
            e || d.push(b[f])
        }
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function ea(a, b) {
        var c = r(a, "style");
        c.setAttribute("type", "text/css");
        c.styleSheet ? (t(a, "head", c), c.styleSheet.cssText = b) : (c.appendChild(document.createTextNode(b)), t(a, "head", c))
    };

    function fa(a, b) {
        this.c = a.c.document.documentElement;
        this.i = b;
        this.j = {};
        this.b = new q("-");
        this.l = !1 !== b.events;
        this.g = !1 !== b.classes
    }

    function ga(a) {
        a.g && v(a.c, [a.b.b("wf", "loading")]);
        x(a, "loading")
    }

    function y(a) {
        if (a.g) {
            var b = w(a.c, a.b.b("wf", "active")),
                c = [],
                d = [a.b.b("wf", "loading")];
            b || c.push(a.b.b("wf", "inactive"));
            v(a.c, c, d)
        }
        x(a, "inactive")
    }

    function x(a, b, c) {
        if (a.l && a.i[b]) try {
            if (c) a.i[b](c.b, z(c));
            else a.i[b]()
        } catch (d) {
            console.error('Typekit: Error in "' + b + '" callback', d)
        }
        if (a.j[b])
            if (c) a.j[b](c.b, z(c));
            else a.j[b]()
    };

    function A(a, b, c) {
        c = c || {};
        this.b = a;
        this.c = b;
        this.weight = c.weight || "400";
        this.style = c.style || "normal";
        this.stretch = c.stretch || "normal";
        this.w = c.primer || void 0;
        this.A = c.subset_id || void 0;
        this.display = c.display || "auto";
        if (this.g = !!c.variable || !1) this.w = void 0, this.A = "4"
    }

    function ha(a) {
        return ("tk-" + a.b).slice(0, 26) + "-" + z(a)
    }

    function B(a, b) {
        return new A(b, a.c, {
            weight: a.weight,
            style: a.style,
            stretch: a.stretch,
            w: a.w,
            A: a.A,
            display: a.display
        })
    }

    function z(a) {
        return a.style.charAt(0) + a.weight.charAt(0)
    };

    function C(a) {
        this.b = a
    }

    function D(a, b) {
        return a.b.replace(/\{([^\{\}]+)\}/g, function(a, d) {
            if ("?" == d.charAt(0)) {
                for (var e = d.slice(1).split(","), f = [], g = 0; g < e.length; g++) b[e[g]] && f.push(e[g] + "=" + encodeURIComponent(b[e[g]]));
                return f.length ? "?" + f.join("&") : ""
            }
            return encodeURIComponent(b[d] || "")
        })
    };

    function F() {
        this.b = []
    }

    function ia(a, b) {
        for (var c = 0; c < b.length; c++) a.b.push(b[c])
    }

    function G(a, b) {
        for (var c = 0; c < a.b.length; c++) b(a.b[c], c, a)
    }

    function ja(a, b) {
        if ("i" === b) {
            var c = {},
                d = new F;
            G(a, function(a) {
                c[a.b] || (c[a.b] = {});
                c[a.b][a.weight] || (c[a.b][a.weight] = []);
                c[a.b][a.weight].push(a)
            });
            for (var e in c)
                if (c.hasOwnProperty(e)) {
                    for (var f = [400, 300, 200, 100, 500, 600, 700, 800, 900], g = 400, h = 0; h < f.length; h++)
                        if (g = f[h], c[e][g]) {
                            ia(d, c[e][g]);
                            break
                        }
                    f = [700, 800, 900, 600, 500, 400, 300, 200, 100];
                    for (h = 0; h < f.length; h++) {
                        var k = f[h];
                        if (c[e][k] && g !== k) {
                            ia(d, c[e][k]);
                            break
                        }
                    }
                }
            G(a, function(a) {
                a = B(a, a.b.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + z(a));
                d.b.push(a)
            });
            return d
        }
        return "x" === b ? new F : a
    }

    function ka(a, b, c) {
        for (var d = [], e = 0; e < b.length; e++) {
            var f = b[e],
                g = D(new C(a.c), {
                    format: f,
                    primer: a.w,
                    subset_id: a.A,
                    fvd: z(a),
                    extension: la(f),
                    token: c,
                    v: "3"
                });
            "i" === f ? d.push("url(" + g + ")") : d.push("url(" + g + ') format("' + ma(f) + '")')
        }
        return d.join(",")
    }

    function na(a, b, c) {
        if ("x" === b) return "";
        var d = [];
        d.push("font-family:" + a.b);
        b = "k" === b ? ka(a, ["l", "d", "a"], c) : ka(a, [b], c);
        d.push("src:" + b);
        d.push("font-weight:" + a.weight);
        d.push("font-style:" + a.style);
        d.push("font-stretch:" + a.stretch);
        d.push("font-display:" + a.display);
        return "@font-face{" + d.join(";") + ";}"
    }

    function ma(a) {
        switch (a) {
            case "d":
                return "woff";
            case "i":
                return "eot";
            case "l":
                return "woff2";
            default:
                return "opentype"
        }
    }

    function la(a) {
        switch (a) {
            case "d":
                return "woff";
            case "i":
                return "eot";
            case "l":
                return "woff2";
            default:
                return "otf"
        }
    }

    function pa(a, b, c) {
        var d = [];
        G(a, function(a) {
            d.push(na(a, b, c))
        });
        return d.join("")
    };

    function H(a, b) {
        this.c = a;
        this.g = b;
        this.b = r(this.c, "span", {
            "aria-hidden": "true"
        }, this.g)
    }

    function I(a) {
        t(a.c, "body", a.b)
    }

    function J(a) {
        return "display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:" + a.b + " !important;font-weight:" + a.weight + " !important;font-style:" + a.style + " !important;"
    };

    function qa(a, b, c, d, e, f, g, h) {
        this.B = a;
        this.G = b;
        this.m = c;
        this.b = d;
        this.o = g || "BESbswy";
        this.c = {};
        this.H = e || 3E3;
        this.F = h;
        this.u = f || null;
        this.g = new H(this.m, this.o);
        this.i = new H(this.m, this.o);
        this.j = new H(this.m, this.o);
        this.l = new H(this.m, this.o);
        a = this.F ? ha(this.b) : this.b.b;
        this.g.b.style.cssText = J(B(this.b, a + ",serif"));
        this.i.b.style.cssText = J(B(this.b, a + ",sans-serif"));
        this.j.b.style.cssText = J(B(this.b, "serif"));
        this.l.b.style.cssText = J(B(this.b, "sans-serif"));
        I(this.g);
        I(this.i);
        I(this.j);
        I(this.l)
    }
    var K = {
            L: "serif",
            K: "sans-serif"
        },
        L = null;

    function ra() {
        if (null === L) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            L = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return L
    }
    qa.prototype.start = function() {
        this.c.serif = this.j.b.offsetWidth;
        this.c["sans-serif"] = this.l.b.offsetWidth;
        this.D = p();
        sa(this)
    };

    function ta(a, b, c) {
        for (var d in K)
            if (K.hasOwnProperty(d) && b === a.c[K[d]] && c === a.c[K[d]]) return !0;
        return !1
    }

    function sa(a) {
        var b = a.g.b.offsetWidth,
            c = a.i.b.offsetWidth,
            d;
        (d = b === a.c.serif && c === a.c["sans-serif"]) || (d = ra() && ta(a, b, c));
        d ? p() - a.D >= a.H ? ra() && ta(a, b, c) && (!a.u || a.u.hasOwnProperty(a.b.b)) ? M(a, a.B) : M(a, a.G) : ua(a) : M(a, a.B)
    }

    function ua(a) {
        setTimeout(n(function() {
            sa(this)
        }, a), 50)
    }

    function M(a, b) {
        setTimeout(n(function() {
            u(this.g.b);
            u(this.i.b);
            u(this.j.b);
            u(this.l.b);
            b(this.b)
        }, a), 0)
    };

    function va(a, b, c, d, e, f, g) {
        this.g = a;
        this.m = b;
        this.b = d;
        this.j = c;
        this.c = e || 3E3;
        this.l = f || void 0;
        this.i = g
    }
    va.prototype.start = function() {
        var a = this.j.c.document,
            b = this,
            c = p(),
            d = new Promise(function(d, e) {
                function h() {
                    p() - c >= b.c ? e() : a.fonts.load(b.b.style + " " + b.b.weight + " 300px " + (b.i ? ha(b.b) : b.b.b), b.l).then(function(a) {
                        1 <= a.length ? d() : setTimeout(h, 25)
                    }, function() {
                        e()
                    })
                }
                h()
            }),
            e = new Promise(function(a, c) {
                setTimeout(c, b.c)
            });
        Promise.race([e, d]).then(function() {
            b.g(b.b)
        }, function() {
            b.m(b.b)
        })
    };

    function N(a, b, c, d) {
        this.o = a;
        this.b = b;
        this.c = 0;
        this.l = this.j = !1;
        this.u = c;
        this.m = d
    }
    var O = null;

    function wa(a, b) {
        var c = {},
            d = b.b.length;
        if (d) {
            a.c += d;
            a.j = !0;
            var e = [];
            G(b, function(b) {
                var d = a.b;
                d.g && v(d.c, [d.b.b("wf", b.b, z(b), "loading")]);
                x(d, "fontloading", b);
                d = null;
                if (null === O)
                    if (window.FontFace) {
                        var h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                            k = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        O = h ? 42 < parseInt(h[1], 10) : k && /Apple/.exec(window.navigator.vendor) ? 603 <= parseInt(k[1], 10) : !0
                    } else O = !1;
                O ? d = new va(n(a.g, a), n(a.i, a), a.o, b, a.u, "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006",
                    a.m) : d = new qa(n(a.g, a), n(a.i, a), a.o, b, a.u, c, "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006", a.m);
                e.push(d)
            });
            for (d = 0; d < e.length; d++) e[d].start()
        } else y(a.b)
    }
    N.prototype.g = function(a) {
        var b = this.b;
        b.g && v(b.c, [b.b.b("wf", a.b, z(a), "active")], [b.b.b("wf", a.b, z(a), "loading"), b.b.b("wf", a.b, z(a), "inactive")]);
        x(b, "fontactive", a);
        this.l = !0;
        xa(this)
    };
    N.prototype.i = function(a) {
        var b = this.b;
        if (b.g) {
            var c = w(b.c, b.b.b("wf", a.b, z(a), "active")),
                d = [],
                e = [b.b.b("wf", a.b, z(a), "loading")];
            c || d.push(b.b.b("wf", a.b, z(a), "inactive"));
            v(b.c, d, e)
        }
        x(b, "fontinactive", a);
        xa(this)
    };

    function xa(a) {
        !--a.c && a.j && (a.l ? (a = a.b, a.g && v(a.c, [a.b.b("wf", "active")], [a.b.b("wf", "loading"), a.b.b("wf", "inactive")]), x(a, "active")) : y(a.b))
    };

    function ya(a, b, c) {
        this.g = a;
        this.b = b || [];
        this.c = c || null;
        this.app = this.version = this.i = null
    }

    function za(a, b) {
        var c = a.g,
            d = (window.__adobewebfontsappname__ || a.app || "").toString().substr(0, 20),
            e = b.c.location.hostname || b.g.location.hostname,
            f = [],
            g = [];
        window.Typekit ? (window.Typekit.fonts || (window.Typekit.fonts = []), g = window.Typekit.fonts) : window.TypekitPreview && (window.TypekitPreview.fonts || (window.TypekitPreview.fonts = []), g = window.TypekitPreview.fonts);
        for (var h = 0; h < a.b.length; h++) {
            for (var k = !1, m = 0; m < g.length; m++)
                if (a.b[h] === g[m]) {
                    k = !0;
                    break
                }
            k || (f.push(a.b[h]), g.push(a.b[h]))
        }
        f.length && Aa(D(c, {
            s: 3,
            k: a.i,
            app: d,
            ht: "tk",
            h: e,
            f: f.join("."),
            a: a.c,
            js: a.version,
            e: "js",
            _: (+new Date).toString()
        }))
    }

    function Aa(a) {
        var b = new Image(1, 1),
            c = !1;
        b.src = a;
        b.onload = function() {
            c = !0;
            b.onload = null
        };
        setTimeout(function() {
            c || (b.src = "about:blank", b.onload = null)
        }, 3E3)
    };

    function S(a, b, c, d) {
        this.b = c;
        this.c = d;
        this.o = b;
        this.u = a;
        this.g = "anonymous";
        this.i = null;
        this.l = "default";
        this.j = "auto"
    }
    S.prototype.B = function(a) {
        var b = a.auth_id;
        b && (this.g = b);
        if (b = a.auth_token) this.i = decodeURIComponent(b);
        (b = a.default_subset) && (b && "all" === b || "default" == b) && (this.l = b);
        (a = a.default_font_display) && Ba(a) && (this.j = a)
    };
    S.prototype.m = function(a) {
        if ("be" !== this.g && "x" !== this.b) return "";
        a = Ca(this, a);
        return pa(ja(Da(this, a), this.b), this.b, this.i)
    };
    S.prototype.load = function(a, b) {
        var c = b || {},
            d = !1 !== c.events,
            e = c.timeout,
            c = new fa(this.c, c);
        if ("x" === this.b) y(c);
        else {
            a = Ca(this, a);
            var f = ja(Da(this, a), this.b);
            if (f.b.length) {
                ga(c);
                ea(this.c, pa(f, this.b, this.i));
                for (var g = [], h = 0; h < a.length; h++)
                    for (var k = 0; k < a[h].C.length; k++) g.push(a[h].id + "-" + a[h].C[k]);
                za(new ya(this.o, g, this.g), this.c);
                if (d) {
                    var m = new N(this.c, c, e);
                    da(this.c, function() {
                        wa(m, f)
                    })
                }
            }
        }
    };

    function Ba(a) {
        return !!a && "auto" === a || "swap" === a || "block" === a || "optional" === a || "fallback" === a
    }

    function Ca(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = /^[A-Za-z0-9_-]+$/,
                f = b[d],
                g = f.id,
                h = f.variations,
                k = f.css_name,
                k = k && "string" == typeof k && k.match(e) ? k : g,
                m = f.subset;
            m && "all" === m || "default" == m || (m = a.l);
            var P = f.display;
            Ba(P) || (P = a.j);
            f = (f = f.primer) || null;
            if ("string" == typeof g && g.match(e) && "object" == typeof h && 0 < h.length) {
                for (var e = {}, E = [], Q = 0; Q < h.length; Q++) {
                    var l = h[Q];
                    if (l && "string" == typeof l && 0 < l.length && !e[l] && /^[nio][1-9]$/.test(l)) E.push(l), e[l] = !0;
                    else if (l && "object" == typeof l) {
                        var R = "normal",
                            oa = "normal";
                        l.weight && /^[1-9]00|normal|bold$/.test(l.weight) && (/^[1-9]00$/.test(l.weight) ? R = l.weight : R = /^bold$/.test(l.weight) ? "700" : "400");
                        l.style && /^normal|italic|oblique$/.test(l.style) && (oa = l.style);
                        l = oa.charAt(0) + R.toString().charAt(0);
                        e[l] || (E.push(l), e[l] = !0)
                    }
                }
                0 < E.length && c.push({
                    id: g,
                    C: E,
                    display: P,
                    I: k,
                    J: m,
                    w: f
                })
            }
        }
        return c
    }

    function Da(a, b) {
        for (var c = new F, d = 0; d < b.length; d++)
            for (var e = b[d], f = e.C, g = 0; g < f.length; g++) {
                var h = D(a.u, {
                        user: a.g,
                        font_alias: e.id,
                        fvd: f[g],
                        format: "FORMAT",
                        subset_id: "all" === e.J ? "1" : "2",
                        primer: e.w,
                        ec_token: a.i
                    }),
                    k, m = f[g];
                k = m.charAt(0);
                m = m.charAt(1);
                /[1-9]/.test(m) || (m = 4);
                k = {
                    style: "i" === k ? "italic" : "o" === k ? "oblique" : "normal",
                    weight: m + "00"
                };
                k.display = e.display;
                h = new A(e.I, h.replace("FORMAT", "{format}"), k);
                c.b.push(h)
            }
        return c
    };
    window.TypekitPreview || (window.TypekitPreview = {});
    if (!window.TypekitPreview.load) {
        var Ea = window.TypekitPreview.config || {},
            T = navigator.userAgent,
            Fa = document,
            U;
        if (/MSIE|Trident/.test(T) && (Fa.documentMode ? 9 > Fa.documentMode : 1)) U = "i";
        else {
            var V;
            a: {
                if (/AppleWebKit/.test(T) && /Android/.test(T) && !/OPR|Chrome|CrMo|CriOS/.test(T)) {
                    var W = /Android ([^;)]+)/.exec(T);
                    if (W && W[1]) {
                        var Ga = parseFloat(W[1]);
                        V = 3.1 <= Ga && 4.1 > Ga;
                        break a
                    }
                }
                V = !1
            }
            var X;
            if (!(X = V)) a: {
                if (/Silk/.test(T) && /Linux|Ubuntu|Android/.test(T)) {
                    var Y = /Silk\/([\d\._]+)/.exec(T);
                    if (Y && Y[1]) {
                        X = 2 <= parseFloat(Y[1]);
                        break a
                    }
                }
                X = !1
            }
            U = X ? "j" : "k"
        }
        var Z = new S(new C(Ea.pa), new C(Ea.ping), U, new ca);
        window.TypekitPreview = Z;
        window.TypekitPreview.setup = Z.B;
        window.TypekitPreview.load = Z.load;
        window.TypekitPreview.getCss = Z.m
    };
}(this, document));