(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [18595], {
        3709: function(J) {
            J.exports = {
                damaskInputOnWhite: "bHhT_euwvZaqwl1ucert",
                damaskInputOnWhiteBorder: "uLCl8C9g8eSMAdzQvMqr"
            }
        },
        184653: function(J) {
            J.exports = {
                buttonLink: "UPNjQL0SeyKMWBZPn3zs"
            }
        },
        569132: function(J) {
            J.exports = {
                disabledLabel: "a2S0YUC27CaYVWfpVfVQ",
                disabledOption: "HbyjRU_uSBeeELrA48Tu",
                disabledSsoOption: "MhFvLjQCPhkMFjCz4GuK",
                radioGroup: "HZzB7phnckKJXhBwvXiO",
                option: "apewbGWQ1H0zY9x4Bu0c"
            }
        },
        37468: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return D
                }
            });
            var e = U(t(943035)),
                s = U(t(134521)),
                E = U(t(379805)),
                m = t(434834),
                I = t(258192),
                T = U(t(638286)),
                V = t(579888),
                W = U(t(799401));

            function z(p, h) {
                if (!(p instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function U(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            }
            var k = function() {
                    var p = window.navigator.userAgent.toLowerCase();
                    return p.indexOf("mobile") === -1 && p.indexOf("safari") > -1 && (p.indexOf("version/9.0") > -1 || p.indexOf("version/8") > -1)
                },
                Z = function() {
                    return W.default.name === "IE" && W.default.version === "11.0"
                },
                H = function() {
                    return k() || Z()
                },
                M = function() {
                    return !!T.default.get(V.Constants.DISABLE_USER_SCRIPTS_COOKIE)
                },
                b = function() {
                    "use strict";

                    function p() {
                        z(this, p), this.generateActions("updateBanner", "billingBannerButtonClick", "disableBanner", "dismissCard")
                    }
                    var h = p.prototype;
                    return h.initialize = function() {
                        return {
                            isUnsupportedBrowser: H(),
                            isOldSafari: k(),
                            isSafeMode: M()
                        }
                    }, h.syncSafeMode = function() {
                        return {
                            isSafeMode: M()
                        }
                    }, h.notifyCard = function(y) {
                        var u = y.title,
                            a = y.body,
                            S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        return {
                            title: u,
                            body: a,
                            config: S
                        }
                    }, h.hideUnsupportedBrowserWarning = function(y) {
                        return y && (0, E.default)(y), !0
                    }, h.displayNetworkError = function() {
                        var y = this;
                        this.throttledNetworkError = this.throttledNetworkError || (0, s.default)(function() {
                            y.notifyCard({
                                title: "No Network Connection",
                                body: "Please make sure you're connected to the internet and try again."
                            })
                        }, 2500, {
                            trailing: !1
                        }), this.throttledNetworkError()
                    }, h.dismissSiteVisibilityBanner = function() {
                        try {
                            window.sessionStorage.setItem(m.UNPUBLISHED_DISMISS_SESSION_STORAGE_KEY, !0), (0, I.userDismissesUnpublishedSiteBanner)()
                        } catch (y) {
                            console.warn("Issue saving dismiss state.", y)
                        }
                        return {
                            dismissSiteVisibilityBanner: !0
                        }
                    }, p
                }(),
                D = e.default.createActions(b)
        },
        30949: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            }), t(246857);
            var e = t(368403),
                s = p(t(174161)),
                E = t(363437),
                m = t(153146),
                I = t(892342),
                T = t(955896),
                V = t(359530),
                W = b(t(892579)),
                z = b(t(496313)),
                U = b(t(792490));

            function k(r, c) {
                (c == null || c > r.length) && (c = r.length);
                for (var n = 0, d = new Array(c); n < c; n++) d[n] = r[n];
                return d
            }

            function Z(r) {
                if (Array.isArray(r)) return r
            }

            function H(r, c, n, d, l, P, v) {
                try {
                    var j = r[P](v),
                        L = j.value
                } catch (o) {
                    n(o);
                    return
                }
                j.done ? c(L) : Promise.resolve(L).then(d, l)
            }

            function M(r) {
                return function() {
                    var c = this,
                        n = arguments;
                    return new Promise(function(d, l) {
                        var P = r.apply(c, n);

                        function v(L) {
                            H(P, d, l, v, j, "next", L)
                        }

                        function j(L) {
                            H(P, d, l, v, j, "throw", L)
                        }
                        v(void 0)
                    })
                }
            }

            function b(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function D(r) {
                if (typeof WeakMap != "function") return null;
                var c = new WeakMap,
                    n = new WeakMap;
                return (D = function(d) {
                    return d ? n : c
                })(r)
            }

            function p(r, c) {
                if (!c && r && r.__esModule) return r;
                if (r === null || typeof r != "object" && typeof r != "function") return {
                    default: r
                };
                var n = D(c);
                if (n && n.has(r)) return n.get(r);
                var d = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var P in r)
                    if (P !== "default" && Object.prototype.hasOwnProperty.call(r, P)) {
                        var v = l ? Object.getOwnPropertyDescriptor(r, P) : null;
                        v && (v.get || v.set) ? Object.defineProperty(d, P, v) : d[P] = r[P]
                    }
                return d.default = r, n && n.set(r, d), d
            }

            function h(r, c) {
                var n = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
                if (n != null) {
                    var d = [],
                        l = !0,
                        P = !1,
                        v, j;
                    try {
                        for (n = n.call(r); !(l = (v = n.next()).done) && (d.push(v.value), !(c && d.length === c)); l = !0);
                    } catch (L) {
                        P = !0, j = L
                    } finally {
                        try {
                            !l && n.return != null && n.return()
                        } finally {
                            if (P) throw j
                        }
                    }
                    return d
                }
            }

            function i() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function y(r, c) {
                return Z(r) || h(r, c) || u(r, c) || i()
            }

            function u(r, c) {
                if (r) {
                    if (typeof r == "string") return k(r, c);
                    var n = Object.prototype.toString.call(r).slice(8, -1);
                    if (n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(r, c)
                }
            }
            var a = function(r, c) {
                    var n, d, l, P, v = {
                        label: 0,
                        sent: function() {
                            if (l[0] & 1) throw l[1];
                            return l[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return P = {
                        next: j(0),
                        throw: j(1),
                        return: j(2)
                    }, typeof Symbol == "function" && (P[Symbol.iterator] = function() {
                        return this
                    }), P;

                    function j(o) {
                        return function(g) {
                            return L([o, g])
                        }
                    }

                    function L(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; v;) try {
                            if (n = 1, d && (l = o[0] & 2 ? d.return : o[0] ? d.throw || ((l = d.return) && l.call(d), 0) : d.next) && !(l = l.call(d, o[1])).done) return l;
                            switch (d = 0, l && (o = [o[0] & 2, l.value]), o[0]) {
                                case 0:
                                case 1:
                                    l = o;
                                    break;
                                case 4:
                                    return v.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    v.label++, d = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = v.ops.pop(), v.trys.pop();
                                    continue;
                                default:
                                    if (l = v.trys, !(l = l.length > 0 && l[l.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                        v = 0;
                                        continue
                                    }
                                    if (o[0] === 3 && (!l || o[1] > l[0] && o[1] < l[3])) {
                                        v.label = o[1];
                                        break
                                    }
                                    if (o[0] === 6 && v.label < l[1]) {
                                        v.label = l[1], l = o;
                                        break
                                    }
                                    if (l && v.label < l[2]) {
                                        v.label = l[2], v.ops.push(o);
                                        break
                                    }
                                    l[2] && v.ops.pop(), v.trys.pop();
                                    continue
                            }
                            o = c.call(r, v)
                        } catch (g) {
                            o = [6, g], d = 0
                        } finally {
                            n = l = 0
                        }
                        if (o[0] & 5) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                S = function(r) {
                    var c = r.onClose,
                        n = r.isOpen,
                        d = r.siteTitle,
                        l = (0, e.getOrganization)(),
                        P = l.name,
                        v = l.id,
                        j = l.logoUrl,
                        L = y((0, s.useState)(!1), 2),
                        o = L[0],
                        g = L[1],
                        f = y((0, s.useState)(!1), 2),
                        B = f[0],
                        C = f[1],
                        Y = y((0, s.useState)(0), 2),
                        x = Y[0],
                        te = Y[1],
                        re = y((0, s.useState)(0), 2),
                        G = re[0],
                        ne = re[1];
                    (0, s.useEffect)(function() {
                        var ue = function() {
                            var fe = M(function() {
                                var se, me, de, ge;
                                return a(this, function(pe) {
                                    switch (pe.label) {
                                        case 0:
                                            return pe.trys.push([0, 2, , 3]), [4, z.default.getCounts(v)];
                                        case 1:
                                            return se = pe.sent().data, se && (me = se.siteCount, de = se.siteLimit, te(de), ne(me), de !== null && (de - me === 0 ? g(!0) : de - me === 1 && C(!0))), [3, 3];
                                        case 2:
                                            return ge = pe.sent(), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            });
                            return function() {
                                return fe.apply(this, arguments)
                            }
                        }();
                        ue()
                    }, [v]);
                    var oe = function() {
                        var ue = M(function() {
                            var fe;
                            return a(this, function(se) {
                                switch (se.label) {
                                    case 0:
                                        return se.trys.push([0, 2, , 3]), [4, z.default.activateOrgTrial()];
                                    case 1:
                                        return se.sent(), W.default.present({
                                            text: (0, V.t)("{siteTitle} is now an active Enterprise Paid site.", {
                                                siteTitle: d
                                            })
                                        }), window.location.reload(), [3, 3];
                                    case 2:
                                        return fe = se.sent(), W.default.present({
                                            text: (0, V.t)("Failed to active Enterprise Paid site. Please try again later.")
                                        }), console.error(fe), [3, 3];
                                    case 3:
                                        return c(), [2]
                                }
                            })
                        });
                        return function() {
                            return ue.apply(this, arguments)
                        }
                    }();
                    return s.default.createElement(m.Modal.Transition, null, n && s.default.createElement(m.Modal, {
                        onRequestClose: c
                    }, s.default.createElement(m.Modal.Overlay, null), s.default.createElement(m.Modal.Position, {
                        position: "center"
                    }, s.default.createElement(m.Modal.Dialog, null, s.default.createElement(I.Box, {
                        p: 6,
                        pt: 5,
                        width: "sizes.750"
                    }, s.default.createElement(I.Button.Tertiary, {
                        mb: 5,
                        onClick: c
                    }, s.default.createElement(T.T, {
                        project: "apps.App"
                    }, "Close")), s.default.createElement(I.Text.Title, {
                        mb: 1
                    }, s.default.createElement(T.T, {
                        project: "apps.App"
                    }, "Activate trial site")), s.default.createElement(I.Text.Subtitle, {
                        color: "gray.300"
                    }, s.default.createElement(T.T, {
                        project: "apps.App"
                    }, "This website status will change from Enterprise Trial to Enterprise and can be made public in settings at any time.")), s.default.createElement(U.default, {
                        organizationName: P,
                        organizationLogo: j,
                        siteCount: G,
                        siteLimit: x
                    }), s.default.createElement(I.Button.Primary, {
                        mt: 6,
                        size: 2,
                        width: "100%",
                        onClick: oe,
                        disabled: o,
                        "data-test": "activate-website"
                    }, s.default.createElement(T.T, {
                        project: "apps.App"
                    }, "Activate")), o && s.default.createElement(I.Box, {
                        mt: 2
                    }, s.default.createElement(I.Text.Caption, {
                        color: "red.300"
                    }, s.default.createElement(T.T, {
                        project: "apps.App",
                        contactLink: s.default.createElement("a", {
                            href: "mailto:am-all@squarespace.com",
                            style: {
                                color: "inherit",
                                borderBottom: "1px solid ".concat(E.colors.red[300])
                            }
                        }, s.default.createElement(T.T, {
                            project: "apps.App"
                        }, "contact your account manager")),
                        notes: "Entire phrase is: Your Enterprise plan has no remaining sites. To activate more sites, contact your Account Manager"
                    }, "Your Enterprise plan has no remaining sites. To activate more sites, {contactLink}."))), B && s.default.createElement(I.Box, {
                        mt: 2
                    }, s.default.createElement(I.Text.Caption, {
                        color: "orange.300"
                    }, s.default.createElement(T.T, {
                        project: "apps.App",
                        contactLink: s.default.createElement("a", {
                            href: "mailto:am-all@squarespace.com",
                            style: {
                                color: "inherit",
                                borderBottom: "1px solid ".concat(E.colors.orange[300])
                            }
                        }, s.default.createElement(T.T, {
                            project: "apps.App"
                        }, "contact your account manager")),
                        notes: "Entire phrase is: You only have one website activation remaining! To purchase more sites, contact your Account Manager"
                    }, "You only have one website activation remaining! To purchase more sites, {contactLink}."))))))))
                },
                O = S
        },
        792490: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return z
                }
            }), t(246857);
            var e = T(t(174161)),
                s = t(892342),
                E = t(153146),
                m = t(955896),
                I = t(363437);

            function T(U) {
                return U && U.__esModule ? U : {
                    default: U
                }
            }
            var V = function(U) {
                    var k = U.children;
                    return e.default.createElement(s.Flex, {
                        justifyContent: "space-between",
                        mt: 3
                    }, k)
                },
                W = function(U) {
                    var k = U.organizationName,
                        Z = U.organizationLogo,
                        H = U.siteCount,
                        M = U.siteLimit,
                        b;
                    return M !== null && (b = M - H), e.default.createElement(s.Box, {
                        mt: 6
                    }, e.default.createElement(s.Flex, {
                        alignItems: "center",
                        pb: 3,
                        borderBottom: 1,
                        borderBottomColor: I.colors.gray[900]
                    }, e.default.createElement(E.Image, {
                        src: Z,
                        mr: 2,
                        width: I.space[4],
                        maxHeight: I.space[4]
                    }), e.default.createElement(s.Text.Body, {
                        fontWeight: "medium",
                        m: 0
                    }, k)), e.default.createElement(V, null, e.default.createElement(s.Text.Body, {
                        m: 0
                    }, e.default.createElement(m.T, {
                        project: "apps.App"
                    }, "Active sites")), e.default.createElement(s.Text.Body, {
                        m: 0
                    }, H)), e.default.createElement(V, null, e.default.createElement(s.Box, null, e.default.createElement(s.Text.Body, {
                        m: 0
                    }, e.default.createElement(m.T, {
                        project: "apps.App"
                    }, "Plan limit"))), e.default.createElement(s.Text.Body, {
                        m: 0
                    }, M === null ? e.default.createElement(m.T, {
                        project: "apps.App"
                    }, "Unlimited") : e.default.createElement(e.default.Fragment, null, M))), b !== void 0 && e.default.createElement(V, null, e.default.createElement(s.Text.Subtitle, {
                        m: 0
                    }, e.default.createElement(m.T, {
                        project: "apps.App"
                    }, "Websites left")), e.default.createElement(s.Text.Subtitle, {
                        m: 0
                    }, b)))
                },
                z = W
        },
        494130: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return I
                }
            });
            var e = m(t(374335)),
                s = m(t(914699)),
                E = m(t(30949));

            function m(T) {
                return T && T.__esModule ? T : {
                    default: T
                }
            }
            var I = (0, e.default)({
                getStores: function() {
                    return [s.default]
                },
                getPropsFromStores: function() {
                    var V = s.default.getState(),
                        W = V.siteTitle,
                        z = V.primaryDomain;
                    return {
                        siteTitle: W,
                        primaryDomain: z
                    }
                }
            }, E.default)
        },
        736096: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var e = t(480689),
                s = e.InlineLink
        },
        216332: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return H
                }
            }), t(246857);
            var e = t(988548),
                s = t(892342),
                E = z(t(174161)),
                m = t(986456),
                I = t(368403),
                T = t(209201);

            function V() {
                return V = Object.assign || function(M) {
                    for (var b = 1; b < arguments.length; b++) {
                        var D = arguments[b];
                        for (var p in D) Object.prototype.hasOwnProperty.call(D, p) && (M[p] = D[p])
                    }
                    return M
                }, V.apply(this, arguments)
            }

            function W(M) {
                if (typeof WeakMap != "function") return null;
                var b = new WeakMap,
                    D = new WeakMap;
                return (W = function(p) {
                    return p ? D : b
                })(M)
            }

            function z(M, b) {
                if (!b && M && M.__esModule) return M;
                if (M === null || typeof M != "object" && typeof M != "function") return {
                    default: M
                };
                var D = W(b);
                if (D && D.has(M)) return D.get(M);
                var p = {},
                    h = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in M)
                    if (i !== "default" && Object.prototype.hasOwnProperty.call(M, i)) {
                        var y = h ? Object.getOwnPropertyDescriptor(M, i) : null;
                        y && (y.get || y.set) ? Object.defineProperty(p, i, y) : p[i] = M[i]
                    }
                return p.default = M, D && D.set(M, p), p
            }

            function U(M, b) {
                if (M == null) return {};
                var D = k(M, b),
                    p, h;
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(M);
                    for (h = 0; h < i.length; h++) p = i[h], !(b.indexOf(p) >= 0) && Object.prototype.propertyIsEnumerable.call(M, p) && (D[p] = M[p])
                }
                return D
            }

            function k(M, b) {
                if (M == null) return {};
                var D = {},
                    p = Object.keys(M),
                    h, i;
                for (i = 0; i < p.length; i++) h = p[i], !(b.indexOf(h) >= 0) && (D[h] = M[h]);
                return D
            }

            function Z(M) {
                var b = M.productArea,
                    D = U(M, ["productArea"]),
                    p, h = (p = (0, I.getOrganization)()) === null || p === void 0 ? void 0 : p.accountManagerEmail,
                    i = (0, E.useCallback)(function() {
                        I.events.trackUserClicksEnterpriseButton({
                            objectIdentifier: "contact-account-manager",
                            productArea: b
                        })
                    }, [b]);
                return E.default.createElement(s.Box, V({
                    mt: 3
                }, D, {
                    border: "1px solid",
                    borderColor: "gray.800",
                    boxSizing: "content-box"
                }), E.default.createElement(s.Box, {
                    "data-testid": T.LOCKED_MESSAGE,
                    p: 3,
                    px: 4
                }, E.default.createElement(m.Lock, {
                    sx: {
                        display: "block"
                    }
                }), E.default.createElement(s.Text.Body, {
                    my: 1,
                    fontWeight: 600
                }, E.default.createElement(e.T, {
                    project: "enterprise"
                }, "Looking to set this site or specific pages behind SSO?")), E.default.createElement(s.Text.Body, {
                    my: 1
                }, E.default.createElement(e.T, {
                    project: "enterprise"
                }, "Contact your account manager to learn more about how to gain access to this Enterprise feature.")), h && E.default.createElement(s.Button, {
                    as: "a",
                    href: "mailto:".concat(h),
                    onClick: i,
                    mt: 1
                }, E.default.createElement(e.T, {
                    project: "enterprise"
                }, "Contact Account Manager"))))
            }
            var H = Z
        },
        173330: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "SsoProtectionPicker", {
                enumerable: !0,
                get: function() {
                    return L
                }
            }), t(246857);
            var e = S(t(174161)),
                s = t(368403),
                E = t(548362),
                m = t(153146),
                I = t(892342),
                T = t(480689),
                V = t(955896),
                W = t(114465),
                z = t(414217),
                U = t(731352),
                k = t(993603),
                Z = u(t(184653)),
                H = t(977536),
                M = t(209201);

            function b(o, g) {
                (g == null || g > o.length) && (g = o.length);
                for (var f = 0, B = new Array(g); f < g; f++) B[f] = o[f];
                return B
            }

            function D(o) {
                if (Array.isArray(o)) return o
            }

            function p(o, g, f, B, C, Y, x) {
                try {
                    var te = o[Y](x),
                        re = te.value
                } catch (G) {
                    f(G);
                    return
                }
                te.done ? g(re) : Promise.resolve(re).then(B, C)
            }

            function h(o) {
                return function() {
                    var g = this,
                        f = arguments;
                    return new Promise(function(B, C) {
                        var Y = o.apply(g, f);

                        function x(re) {
                            p(Y, B, C, x, te, "next", re)
                        }

                        function te(re) {
                            p(Y, B, C, x, te, "throw", re)
                        }
                        x(void 0)
                    })
                }
            }

            function i(o, g, f) {
                return g in o ? Object.defineProperty(o, g, {
                    value: f,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[g] = f, o
            }

            function y() {
                return y = Object.assign || function(o) {
                    for (var g = 1; g < arguments.length; g++) {
                        var f = arguments[g];
                        for (var B in f) Object.prototype.hasOwnProperty.call(f, B) && (o[B] = f[B])
                    }
                    return o
                }, y.apply(this, arguments)
            }

            function u(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function a(o) {
                if (typeof WeakMap != "function") return null;
                var g = new WeakMap,
                    f = new WeakMap;
                return (a = function(B) {
                    return B ? f : g
                })(o)
            }

            function S(o, g) {
                if (!g && o && o.__esModule) return o;
                if (o === null || typeof o != "object" && typeof o != "function") return {
                    default: o
                };
                var f = a(g);
                if (f && f.has(o)) return f.get(o);
                var B = {},
                    C = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var Y in o)
                    if (Y !== "default" && Object.prototype.hasOwnProperty.call(o, Y)) {
                        var x = C ? Object.getOwnPropertyDescriptor(o, Y) : null;
                        x && (x.get || x.set) ? Object.defineProperty(B, Y, x) : B[Y] = o[Y]
                    }
                return B.default = o, f && f.set(o, B), B
            }

            function O(o, g) {
                var f = o == null ? null : typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
                if (f != null) {
                    var B = [],
                        C = !0,
                        Y = !1,
                        x, te;
                    try {
                        for (f = f.call(o); !(C = (x = f.next()).done) && (B.push(x.value), !(g && B.length === g)); C = !0);
                    } catch (re) {
                        Y = !0, te = re
                    } finally {
                        try {
                            !C && f.return != null && f.return()
                        } finally {
                            if (Y) throw te
                        }
                    }
                    return B
                }
            }

            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function c(o) {
                for (var g = 1; g < arguments.length; g++) {
                    var f = arguments[g] != null ? arguments[g] : {},
                        B = Object.keys(f);
                    typeof Object.getOwnPropertySymbols == "function" && (B = B.concat(Object.getOwnPropertySymbols(f).filter(function(C) {
                        return Object.getOwnPropertyDescriptor(f, C).enumerable
                    }))), B.forEach(function(C) {
                        i(o, C, f[C])
                    })
                }
                return o
            }

            function n(o, g) {
                var f = Object.keys(o);
                if (Object.getOwnPropertySymbols) {
                    var B = Object.getOwnPropertySymbols(o);
                    g && (B = B.filter(function(C) {
                        return Object.getOwnPropertyDescriptor(o, C).enumerable
                    })), f.push.apply(f, B)
                }
                return f
            }

            function d(o, g) {
                return g = g != null ? g : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(g)) : n(Object(g)).forEach(function(f) {
                    Object.defineProperty(o, f, Object.getOwnPropertyDescriptor(g, f))
                }), o
            }

            function l(o, g) {
                return D(o) || O(o, g) || P(o, g) || r()
            }

            function P(o, g) {
                if (o) {
                    if (typeof o == "string") return b(o, g);
                    var f = Object.prototype.toString.call(o).slice(8, -1);
                    if (f === "Object" && o.constructor && (f = o.constructor.name), f === "Map" || f === "Set") return Array.from(f);
                    if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)) return b(o, g)
                }
            }
            var v = function(o, g) {
                    var f, B, C, Y, x = {
                        label: 0,
                        sent: function() {
                            if (C[0] & 1) throw C[1];
                            return C[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return Y = {
                        next: te(0),
                        throw: te(1),
                        return: te(2)
                    }, typeof Symbol == "function" && (Y[Symbol.iterator] = function() {
                        return this
                    }), Y;

                    function te(G) {
                        return function(ne) {
                            return re([G, ne])
                        }
                    }

                    function re(G) {
                        if (f) throw new TypeError("Generator is already executing.");
                        for (; x;) try {
                            if (f = 1, B && (C = G[0] & 2 ? B.return : G[0] ? B.throw || ((C = B.return) && C.call(B), 0) : B.next) && !(C = C.call(B, G[1])).done) return C;
                            switch (B = 0, C && (G = [G[0] & 2, C.value]), G[0]) {
                                case 0:
                                case 1:
                                    C = G;
                                    break;
                                case 4:
                                    return x.label++, {
                                        value: G[1],
                                        done: !1
                                    };
                                case 5:
                                    x.label++, B = G[1], G = [0];
                                    continue;
                                case 7:
                                    G = x.ops.pop(), x.trys.pop();
                                    continue;
                                default:
                                    if (C = x.trys, !(C = C.length > 0 && C[C.length - 1]) && (G[0] === 6 || G[0] === 2)) {
                                        x = 0;
                                        continue
                                    }
                                    if (G[0] === 3 && (!C || G[1] > C[0] && G[1] < C[3])) {
                                        x.label = G[1];
                                        break
                                    }
                                    if (G[0] === 6 && x.label < C[1]) {
                                        x.label = C[1], C = G;
                                        break
                                    }
                                    if (C && x.label < C[2]) {
                                        x.label = C[2], x.ops.push(G);
                                        break
                                    }
                                    C[2] && x.ops.pop(), x.trys.pop();
                                    continue
                            }
                            G = g.call(o, x)
                        } catch (ne) {
                            G = [6, ne], B = 0
                        } finally {
                            f = C = 0
                        }
                        if (G[0] & 5) throw G[1];
                        return {
                            value: G[0] ? G[1] : void 0,
                            done: !0
                        }
                    }
                },
                j = function(o) {
                    var g = o.collectionId,
                        f = o.productArea,
                        B = (0, e.useContext)(H.SsoContext),
                        C = B.ssoSettings,
                        Y = B.isLoading,
                        x = B.error,
                        te = B.updateCount,
                        re = l((0, e.useState)({}), 2),
                        G = re[0],
                        ne = re[1],
                        oe = l((0, e.useState)(!0), 2),
                        ue = oe[0],
                        fe = oe[1],
                        se = l((0, e.useState)(!!x), 2),
                        me = se[0],
                        de = se[1],
                        ge = l((0, e.useState)(!1), 2),
                        pe = ge[0],
                        Oe = ge[1],
                        Pe = Object.values(G).reduce(function(N, K) {
                            return d(c({}, N), i({}, K.ssoSettingsId, !0))
                        }, {}),
                        A = Object.values(C).filter(function(N) {
                            return !Pe[N.id]
                        }),
                        F = Object.keys(G).length === 0 ? k.STRINGS.selectSso : k.STRINGS.additionalSso,
                        _ = (0, e.useCallback)(function() {
                            s.events.trackUserClicksEnterpriseLink({
                                productArea: f,
                                objectIdentifier: "sso-credentials-link"
                            })
                        }, [f]);
                    (0, e.useEffect)(function() {
                        var N = !0,
                            K = function() {
                                var ae = h(function() {
                                    var ie, ee, Se, ve;
                                    return v(this, function(ye) {
                                        switch (ye.label) {
                                            case 0:
                                                return ye.trys.push([0, 2, , 3]), ie = {
                                                    collectionId: g,
                                                    onlyWebsiteLevel: !g
                                                }, [4, (0, U.getSsoProtections)(ie)];
                                            case 1:
                                                return ee = ye.sent(), N && (fe(!1), ee = ee.filter(function(ce) {
                                                    return C[ce.ssoSettingsId]
                                                }), Se = ee.reduce(function(ce, le) {
                                                    return d(c({}, ce), i({}, le.id, le))
                                                }, {}), ne(Se)), [3, 3];
                                            case 2:
                                                return ve = ye.sent(), N && de(!0), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                });
                                return function() {
                                    return ae.apply(this, arguments)
                                }
                            }();
                        return K(),
                            function() {
                                N = !1
                            }
                    }, [g, C]);
                    var $ = function(N) {
                            ne(function(K) {
                                return d(c({}, K), i({}, N.id, N))
                            }), te({
                                ssoSettingsId: N.ssoSettingsId,
                                increment: 1,
                                collectionId: g
                            })
                        },
                        Q = function(N) {
                            var K = C[N.ssoSettingsId];
                            s.events.trackUserModifiesSsoProtections({
                                action: s.Action.UPDATE,
                                productArea: f,
                                objectValue: K.loginMethod
                            }), ne(function(ae) {
                                return d(c({}, ae), i({}, N.id, N))
                            })
                        },
                        R = function(N, K) {
                            var ae = C[K];
                            s.events.trackUserModifiesSsoProtections({
                                action: s.Action.DELETE,
                                productArea: f,
                                objectValue: ae.loginMethod
                            }), ne(function(ie) {
                                var ee = c({}, ie);
                                return delete ee[N], c({}, ee)
                            }), te({
                                ssoSettingsId: K,
                                increment: -1,
                                collectionId: g
                            })
                        },
                        X = (0, e.useCallback)(function() {
                            Oe(!0)
                        }, []),
                        q = function() {
                            return e.default.createElement(e.default.Fragment, null, Object.keys(G).length > 0 && e.default.createElement(m.Stack, {
                                sx: {
                                    cursor: "auto"
                                },
                                mt: 2
                            }, e.default.createElement(I.Text.Label, {
                                my: 2,
                                color: "gray.100"
                            }, k.STRINGS.ssoDetails), e.default.createElement(E.Accordion, {
                                allowMultipleItemsOpen: !0
                            }, Object.values(G).map(function(N) {
                                return e.default.createElement(W.SsoProtectionTile, y({}, N, C[N.ssoSettingsId], {
                                    key: N.id,
                                    protectionId: N.id,
                                    updateSso: Q,
                                    deleteSso: R,
                                    setShowError: function() {
                                        return de(!0)
                                    }
                                }))
                            }))), Object.keys(C).length ? e.default.createElement(e.default.Fragment, null, e.default.createElement(z.SsoProtectionPickerModal, {
                                closeModal: function() {
                                    return Oe(!1)
                                },
                                settings: A,
                                isOpen: pe,
                                addSso: $,
                                collectionId: g,
                                productArea: f
                            }), A.length > 0 && e.default.createElement(I.Button.Tertiary, {
                                onClick: X,
                                className: Z.default.buttonLink,
                                mt: 2
                            }, F)) : e.default.createElement(E.Banner, {
                                layout: "row",
                                mt: 2,
                                title: k.STRINGS.noCredentialsTitle,
                                body: e.default.createElement(V.T, {
                                    managerPanel: e.default.createElement(T.InlineLink, {
                                        to: "/config/settings/sso-manager",
                                        onClick: _
                                    }, e.default.createElement(V.T, {
                                        project: "enterprise"
                                    }, "SSO Credentials settings panel")),
                                    project: "enterprise"
                                }, "You can add new SSO credentials within the {managerPanel}.")
                            }))
                        };
                    return e.default.createElement(I.Flex, {
                        "data-testid": M.SSO_PICKER,
                        flexDirection: "column"
                    }, e.default.createElement(m.Modal.Transition, null, me && e.default.createElement(m.Modal, {
                        onRequestClose: function() {
                            return de(!1)
                        }
                    }, e.default.createElement(m.Modal.Overlay, null), e.default.createElement(m.Modal.Position, {
                        position: "center"
                    }, e.default.createElement(E.AlertDialog, {
                        title: k.STRINGS.errorTitle,
                        message: k.STRINGS.errorMessage,
                        buttons: [function() {
                            return e.default.createElement(E.AlertDialog.Button, {
                                key: "cancel",
                                onClick: function() {
                                    return de(!1)
                                }
                            }, k.STRINGS.close)
                        }]
                    })))), Y || ue ? e.default.createElement(m.ActivityIndicator, {
                        mt: 4
                    }) : q())
                },
                L = function(o) {
                    var g = o.collectionId,
                        f = o.productArea;
                    return e.default.createElement(H.SsoProvider, null, e.default.createElement(j, {
                        collectionId: g || "",
                        productArea: f
                    }))
                }
        },
        414217: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "SsoProtectionPickerModal", {
                enumerable: !0,
                get: function() {
                    return c
                }
            }), t(246857);
            var e = h(t(174161)),
                s = t(955896),
                E = t(153146),
                m = t(892342),
                I = t(548362),
                T = t(368403),
                V = D(t(736096)),
                W = t(993603),
                z = t(731352),
                U = t(249883);

            function k(n, d) {
                (d == null || d > n.length) && (d = n.length);
                for (var l = 0, P = new Array(d); l < d; l++) P[l] = n[l];
                return P
            }

            function Z(n) {
                if (Array.isArray(n)) return n
            }

            function H(n, d, l, P, v, j, L) {
                try {
                    var o = n[j](L),
                        g = o.value
                } catch (f) {
                    l(f);
                    return
                }
                o.done ? d(g) : Promise.resolve(g).then(P, v)
            }

            function M(n) {
                return function() {
                    var d = this,
                        l = arguments;
                    return new Promise(function(P, v) {
                        var j = n.apply(d, l);

                        function L(g) {
                            H(j, P, v, L, o, "next", g)
                        }

                        function o(g) {
                            H(j, P, v, L, o, "throw", g)
                        }
                        L(void 0)
                    })
                }
            }

            function b(n, d, l) {
                return d in n ? Object.defineProperty(n, d, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[d] = l, n
            }

            function D(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function p(n) {
                if (typeof WeakMap != "function") return null;
                var d = new WeakMap,
                    l = new WeakMap;
                return (p = function(P) {
                    return P ? l : d
                })(n)
            }

            function h(n, d) {
                if (!d && n && n.__esModule) return n;
                if (n === null || typeof n != "object" && typeof n != "function") return {
                    default: n
                };
                var l = p(d);
                if (l && l.has(n)) return l.get(n);
                var P = {},
                    v = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var j in n)
                    if (j !== "default" && Object.prototype.hasOwnProperty.call(n, j)) {
                        var L = v ? Object.getOwnPropertyDescriptor(n, j) : null;
                        L && (L.get || L.set) ? Object.defineProperty(P, j, L) : P[j] = n[j]
                    }
                return P.default = n, l && l.set(n, P), P
            }

            function i(n, d) {
                var l = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (l != null) {
                    var P = [],
                        v = !0,
                        j = !1,
                        L, o;
                    try {
                        for (l = l.call(n); !(v = (L = l.next()).done) && (P.push(L.value), !(d && P.length === d)); v = !0);
                    } catch (g) {
                        j = !0, o = g
                    } finally {
                        try {
                            !v && l.return != null && l.return()
                        } finally {
                            if (j) throw o
                        }
                    }
                    return P
                }
            }

            function y() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(n) {
                for (var d = 1; d < arguments.length; d++) {
                    var l = arguments[d] != null ? arguments[d] : {},
                        P = Object.keys(l);
                    typeof Object.getOwnPropertySymbols == "function" && (P = P.concat(Object.getOwnPropertySymbols(l).filter(function(v) {
                        return Object.getOwnPropertyDescriptor(l, v).enumerable
                    }))), P.forEach(function(v) {
                        b(n, v, l[v])
                    })
                }
                return n
            }

            function a(n, d) {
                return Z(n) || i(n, d) || S(n, d) || y()
            }

            function S(n, d) {
                if (n) {
                    if (typeof n == "string") return k(n, d);
                    var l = Object.prototype.toString.call(n).slice(8, -1);
                    if (l === "Object" && n.constructor && (l = n.constructor.name), l === "Map" || l === "Set") return Array.from(l);
                    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return k(n, d)
                }
            }
            var O = function(n, d) {
                    var l, P, v, j, L = {
                        label: 0,
                        sent: function() {
                            if (v[0] & 1) throw v[1];
                            return v[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return j = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
                        return this
                    }), j;

                    function o(f) {
                        return function(B) {
                            return g([f, B])
                        }
                    }

                    function g(f) {
                        if (l) throw new TypeError("Generator is already executing.");
                        for (; L;) try {
                            if (l = 1, P && (v = f[0] & 2 ? P.return : f[0] ? P.throw || ((v = P.return) && v.call(P), 0) : P.next) && !(v = v.call(P, f[1])).done) return v;
                            switch (P = 0, v && (f = [f[0] & 2, v.value]), f[0]) {
                                case 0:
                                case 1:
                                    v = f;
                                    break;
                                case 4:
                                    return L.label++, {
                                        value: f[1],
                                        done: !1
                                    };
                                case 5:
                                    L.label++, P = f[1], f = [0];
                                    continue;
                                case 7:
                                    f = L.ops.pop(), L.trys.pop();
                                    continue;
                                default:
                                    if (v = L.trys, !(v = v.length > 0 && v[v.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                                        L = 0;
                                        continue
                                    }
                                    if (f[0] === 3 && (!v || f[1] > v[0] && f[1] < v[3])) {
                                        L.label = f[1];
                                        break
                                    }
                                    if (f[0] === 6 && L.label < v[1]) {
                                        L.label = v[1], v = f;
                                        break
                                    }
                                    if (v && L.label < v[2]) {
                                        L.label = v[2], L.ops.push(f);
                                        break
                                    }
                                    v[2] && L.ops.pop(), L.trys.pop();
                                    continue
                            }
                            f = d.call(n, L)
                        } catch (B) {
                            f = [6, B], P = 0
                        } finally {
                            l = v = 0
                        }
                        if (f[0] & 5) throw f[1];
                        return {
                            value: f[0] ? f[1] : void 0,
                            done: !0
                        }
                    }
                },
                r = function(n) {
                    switch (n) {
                        case T.SsoLoginMethod.OKTA:
                            return W.STRINGS.oktaButtonPlaceholder;
                        case T.SsoLoginMethod.AZURE:
                            return W.STRINGS.azureButtonPlaceholder;
                        case T.SsoLoginMethod.CLASSLINK:
                            return W.STRINGS.classlinkButtonPlaceholder;
                        case T.SsoLoginMethod.GOOGLE_SSO:
                            return W.STRINGS.googleButtonPlaceholder;
                        default:
                            return ""
                    }
                },
                c = function(n) {
                    var d = n.closeModal,
                        l = n.settings,
                        P = n.isOpen,
                        v = n.addSso,
                        j = n.collectionId,
                        L = n.productArea,
                        o = a((0, e.useState)(""), 2),
                        g = o[0],
                        f = o[1],
                        B = a((0, e.useState)(""), 2),
                        C = B[0],
                        Y = B[1],
                        x = function() {
                            d(), f(""), Y("")
                        },
                        te = function() {
                            var ne = M(function() {
                                var oe, ue;
                                return O(this, function(fe) {
                                    switch (fe.label) {
                                        case 0:
                                            return oe = l.find(function(se) {
                                                return se.id === g
                                            }), [4, (0, z.createSsoProtection)(u({
                                                buttonLabel: C,
                                                ssoSettingsId: g
                                            }, j ? {
                                                collectionId: j
                                            } : {}))];
                                        case 1:
                                            return ue = fe.sent(), T.events.trackUserModifiesSsoProtections({
                                                action: T.Action.ADD,
                                                objectValue: (oe == null ? void 0 : oe.loginMethod) || g,
                                                productArea: L
                                            }), v(ue), x(), [2]
                                    }
                                })
                            });
                            return function() {
                                return ne.apply(this, arguments)
                            }
                        }(),
                        re = (0, e.useCallback)(function() {
                            T.events.trackUserClicksEnterpriseLink({
                                productArea: L,
                                objectIdentifier: "sso-credentials-link"
                            })
                        }, [L]),
                        G = function(ne) {
                            f(ne);
                            var oe = l.filter(function(ue) {
                                return ue.id === ne
                            });
                            oe.length && Y(r(oe[0].loginMethod))
                        };
                    return e.default.createElement(E.Modal.Transition, null, P && e.default.createElement(E.Modal, {
                        onRequestClose: x
                    }, e.default.createElement(E.Modal.Overlay, null), e.default.createElement(E.Modal.Position, {
                        position: "center"
                    }, e.default.createElement(E.Modal.Dialog, null, e.default.createElement(m.Box, {
                        tabIndex: 0,
                        pt: 5,
                        pb: 6,
                        px: 6,
                        width: "sizes.750",
                        display: "flex",
                        sx: {
                            justifyContent: "center",
                            flexDirection: "column"
                        }
                    }, e.default.createElement(m.Flex, {
                        justifyContent: "space-between"
                    }, e.default.createElement(m.Button.Tertiary, {
                        size: "small",
                        onClick: x
                    }, W.STRINGS.cancel), e.default.createElement(m.Button.Primary, {
                        size: "small",
                        disabled: C.length === 0 || g.length === 0,
                        onClick: te,
                        "data-test": "save-sso-protection"
                    }, W.STRINGS.saveForm)), e.default.createElement(m.Text.Title, {
                        as: "h2",
                        mt: 4,
                        mb: 0
                    }, W.STRINGS.selectSso), e.default.createElement(m.Text.Body, {
                        mb: 4,
                        color: "gray.300",
                        fontWeight: "medium"
                    }, e.default.createElement(s.T, {
                        ssoManagerLink: e.default.createElement(V.default, {
                            to: "/config/settings/sso-manager",
                            onClick: re
                        }, e.default.createElement(s.T, {
                            project: "enterprise"
                        }, "SSO Credentials Settings")),
                        project: "enterprise"
                    }, "The SSO credentials selected will ensure only authorized users can gain access. New SSO credentials can be added in {ssoManagerLink}.")), e.default.createElement(m.Text.Label, {
                        mb: 1
                    }, W.STRINGS.ssoCredentials), e.default.createElement(I.Dropdown, {
                        onChange: G,
                        placeholder: "Select a saved SSO",
                        placement: "bottom",
                        value: g,
                        variant: "floating",
                        "data-test": "select-sso-protection-dropdown"
                    }, l.map(function(ne) {
                        return e.default.createElement(I.Dropdown.Option, {
                            value: ne.id
                        }, e.default.createElement(m.Flex, {
                            flexDirection: "column"
                        }, e.default.createElement(m.Text.Body, {
                            mt: 0,
                            mb: 1,
                            fontWeight: "semibold"
                        }, ne.friendlyName), e.default.createElement(m.Text.Caption, {
                            m: 0,
                            color: "gray.100"
                        }, T.friendlyLoginMethodMap[ne.loginMethod])))
                    })), e.default.createElement(U.SsoTextInput, {
                        value: C,
                        onChange: Y,
                        isTextArea: !1,
                        label: W.STRINGS.buttonLabel,
                        caption: W.STRINGS.buttonLabelCaption,
                        isButtonLabelInput: !0,
                        "data-test": "friendly-name-input"
                    }))))))
                }
        },
        658067: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), e(t(173330), w);

            function e(s, E) {
                return Object.keys(s).forEach(function(m) {
                    m !== "default" && !Object.prototype.hasOwnProperty.call(E, m) && Object.defineProperty(E, m, {
                        enumerable: !0,
                        get: function() {
                            return s[m]
                        }
                    })
                }), s
            }
        },
        209201: function(J, w) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            });

            function t(E, m) {
                for (var I in m) Object.defineProperty(E, I, {
                    enumerable: !0,
                    get: m[I]
                })
            }
            t(w, {
                SSO_PICKER: function() {
                    return e
                },
                LOCKED_MESSAGE: function() {
                    return s
                }
            });
            var e = "sso-picker-wrapper",
                s = "sso-locked-wrapper"
        },
        434834: function(J, w) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "UNPUBLISHED_DISMISS_SESSION_STORAGE_KEY", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            var t = "UNPUBLISHED_DISMISS_SESSION_STORAGE_KEY"
        },
        908046: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), t(259559);
            var e = t(721384),
                s = e.SettingsBreadcrumbsProvider
        },
        646567: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return Pe
                }
            }), t(259559), t(246857);
            var e = x(t(174161)),
                s = x(t(672534)),
                E = t(107799),
                m = t(721247),
                I = t(579888),
                T = t(368403),
                V = t(721384),
                W = t(480689),
                z = t(892342),
                U = x(t(37468)),
                k = x(t(569132)),
                Z = x(t(914699)),
                H = t(658067),
                M = x(t(216332)),
                b = t(769043),
                D = t(359530),
                p = t(955896),
                h = t(374112),
                i = t(258192),
                y = x(t(675034)),
                u = x(t(777567)),
                a = x(t(182362)),
                S = x(t(158804)),
                O = x(t(267784)),
                r = t(777276),
                c = t(993603),
                n = t(153146),
                d = t(6825),
                l = x(t(3709)),
                P = x(t(908046)),
                v = t(548362);

            function j(A, F) {
                (F == null || F > A.length) && (F = A.length);
                for (var _ = 0, $ = new Array(F); _ < F; _++) $[_] = A[_];
                return $
            }

            function L(A) {
                if (Array.isArray(A)) return j(A)
            }

            function o(A) {
                if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return A
            }

            function g(A, F) {
                if (!(A instanceof F)) throw new TypeError("Cannot call a class as a function")
            }

            function f(A, F, _) {
                return F in A ? Object.defineProperty(A, F, {
                    value: _,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : A[F] = _, A
            }

            function B() {
                return B = Object.assign || function(A) {
                    for (var F = 1; F < arguments.length; F++) {
                        var _ = arguments[F];
                        for (var $ in _) Object.prototype.hasOwnProperty.call(_, $) && (A[$] = _[$])
                    }
                    return A
                }, B.apply(this, arguments)
            }

            function C(A) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(_) {
                    return _.__proto__ || Object.getPrototypeOf(_)
                }, C(A)
            }

            function Y(A, F) {
                if (typeof F != "function" && F !== null) throw new TypeError("Super expression must either be null or a function");
                A.prototype = Object.create(F && F.prototype, {
                    constructor: {
                        value: A,
                        writable: !0,
                        configurable: !0
                    }
                }), F && oe(A, F)
            }

            function x(A) {
                return A && A.__esModule ? A : {
                    default: A
                }
            }

            function te(A) {
                if (typeof Symbol != "undefined" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A)
            }

            function re() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function G(A) {
                for (var F = 1; F < arguments.length; F++) {
                    var _ = arguments[F] != null ? arguments[F] : {},
                        $ = Object.keys(_);
                    typeof Object.getOwnPropertySymbols == "function" && ($ = $.concat(Object.getOwnPropertySymbols(_).filter(function(Q) {
                        return Object.getOwnPropertyDescriptor(_, Q).enumerable
                    }))), $.forEach(function(Q) {
                        f(A, Q, _[Q])
                    })
                }
                return A
            }

            function ne(A, F) {
                return F && (fe(F) === "object" || typeof F == "function") ? F : o(A)
            }

            function oe(A, F) {
                return oe = Object.setPrototypeOf || function($, Q) {
                    return $.__proto__ = Q, $
                }, oe(A, F)
            }

            function ue(A) {
                return L(A) || te(A) || se(A) || re()
            }
            var fe = function(A) {
                "@swc/helpers - typeof";
                return A && typeof Symbol != "undefined" && A.constructor === Symbol ? "symbol" : typeof A
            };

            function se(A, F) {
                if (A) {
                    if (typeof A == "string") return j(A, F);
                    var _ = Object.prototype.toString.call(A).slice(8, -1);
                    if (_ === "Object" && A.constructor && (_ = A.constructor.name), _ === "Map" || _ === "Set") return Array.from(_);
                    if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return j(A, F)
                }
            }

            function me() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (A) {
                    return !1
                }
            }

            function de(A) {
                var F = me();
                return function() {
                    var $ = C(A),
                        Q;
                    if (F) {
                        var R = C(this).constructor;
                        Q = Reflect.construct($, arguments, R)
                    } else Q = $.apply(this, arguments);
                    return ne(this, Q)
                }
            }
            var ge = "site_published_confetti",
                pe = function(A) {
                    return A.showOwnerLogin ? r.SiteVisibilityStates.PRIVATE : A.initialHasPassword ? r.SiteVisibilityStates.PASSWORD : A.isWebsiteInTrial ? r.SiteVisibilityStates.PRIVATE : A.protectionType === r.ProtectionTypeValues.SSO ? r.SiteVisibilityStates.SSO : r.SiteVisibilityStates.PUBLIC
                },
                Oe = function(A) {
                    "use strict";
                    Y(_, A);
                    var F = de(_);

                    function _(Q) {
                        g(this, _);
                        var R;
                        R = F.call(this, Q), R.resetChanges = function() {
                            return R.setState({
                                hasPassword: R.props.initialHasPassword,
                                password: "",
                                passwordFocused: !1,
                                initialSiteVisibility: pe(R.props),
                                saving: !1
                            }, function() {
                                R.setSiteVisibility(R.state.initialSiteVisibility)
                            }), U.default.updateBanner(), Promise.resolve()
                        }, R.sendSiteVisibilityV2Metrics = function(N) {
                            var K = R.state,
                                ae = K.siteVisibility,
                                ie = K.isSiteTitleCustom,
                                ee = R.props,
                                Se = ee.siteTitle,
                                ve = ee.websiteType,
                                ye = ee.primaryDomainType,
                                ce = ee.domainDiscountStatus,
                                le = ee.websitePlanType,
                                he = ee.billingPeriod,
                                be = ee.productArea;
                            return y.default.updateSiteVisibility({
                                siteVisibilityStatus: ae.toLowerCase(),
                                isPublishModalShown: N,
                                hasFreeDomainPromo: ce == null ? void 0 : ce.isAvailable,
                                siteTitle: Se,
                                isSiteTitleCustom: ie,
                                websiteType: (0, a.default)(ve),
                                websitePlanType: le,
                                billingPeriod: he,
                                domainType: (0, u.default)(ye),
                                customObjectIdentifier: be
                            })
                        }, R.saveChanges = function(N) {
                            var K = R.state,
                                ae = K.siteVisibility,
                                ie = K.initialSiteVisibility,
                                ee = R.props,
                                Se = ee.tutorialsCompleted,
                                ve = ee.onSave,
                                ye = ee.productArea,
                                ce = ee.onCloseModal,
                                le = N || ae;
                            R.setState({
                                saving: !0
                            });
                            var he = !1,
                                be, Te;
                            if (le === r.SiteVisibilityStates.PASSWORD) {
                                if (be = R.state.password, Te = R.state.hasPassword, be.length === 0) {
                                    R.setState({
                                        saving: !1,
                                        showPasswordErrorMessage: !0
                                    });
                                    return
                                }
                            } else le === r.SiteVisibilityStates.PRIVATE && (he = !0);
                            var we = r.ProtectionTypeValues[le],
                                Ee = !1;
                            return ie !== le && le === r.SiteVisibilityStates.PUBLIC && !Se.includes(ge) && (Ee = !0), Z.default.save({
                                hasPassword: Te,
                                password: be,
                                showOwnerLogin: he,
                                protectionType: we
                            }).then(function() {
                                R.setState({
                                    saving: !1,
                                    passwordFocused: !1
                                }), Ee || ce == null || ce(), ie !== le && ((0, i.userSavesSiteAvailability)(le.toLowerCase(), ye), R.sendSiteVisibilityV2Metrics(Ee), (0, d.refetchSetupStatus)()), window != null && window.FS && window.FS.event("Website - Site Availability Change", {
                                    from: ie,
                                    to: le
                                }), ve == null || ve()
                            })
                        }, R.handlePasswordChange = function(N) {
                            R.setState({
                                password: N,
                                showPasswordErrorMessage: !1
                            })
                        }, R.setPasswordFocused = function(N) {
                            R.setState({
                                passwordFocused: N
                            })
                        }, R.setIsSiteTitleCustom = function() {
                            return S.default.getIsSiteTitleCustom().then(function(N) {
                                var K;
                                return R.setState({
                                    isSiteTitleCustom: (K = N.data) === null || K === void 0 ? void 0 : K.value
                                })
                            }).catch(console.error)
                        }, R.getDomainName = function() {
                            var N = R.props,
                                K = N.primaryDomain,
                                ae = N.identifier,
                                ie = K || (0, h.getDomainForIdentifier)(ae);
                            return ie
                        };
                        var X = Q.initialHasPassword,
                            q = pe(Q);
                        return R.state = {
                            hasPassword: X,
                            password: "",
                            passwordFocused: !1,
                            initialSiteVisibility: q,
                            siteVisibility: q,
                            saving: !1,
                            showPasswordErrorMessage: !1
                        }, R.disabledOptions = G({
                            isDisabled: !0,
                            labelClassList: k.default.disabledLabel,
                            optionClassList: k.default.disabledOption
                        }, Q.tooltip && {
                            wrappedComponent: Q.tooltip
                        }), R
                    }
                    var $ = _.prototype;
                    return $.componentDidMount = function() {
                        this.setIsSiteTitleCustom()
                    }, $.setSiteVisibility = function(R) {
                        var X = this.props.isWebsiteInTrial;
                        R === r.SiteVisibilityStates.PUBLIC && X || this.setState({
                            siteVisibility: R
                        })
                    }, $.checkIsDirty = function() {
                        var R = this.state,
                            X = R.initialSiteVisibility,
                            q = R.siteVisibility,
                            N = R.hasPassword,
                            K = R.password;
                        return q === r.SiteVisibilityStates.SSO && !(0, T.isSiteSsoEnabled)() ? !1 : X !== q || N && K.length > 0
                    }, $.renderPasswordOption = function() {
                        var R = this,
                            X = this.state,
                            q = X.siteVisibility,
                            N = X.password,
                            K = X.passwordFocused,
                            ae = X.showPasswordErrorMessage,
                            ie = this.props,
                            ee = ie.initialHasPassword,
                            Se = ie.websiteType,
                            ve = m.CSSTransitionGroupPresets.ExpandCollapse.transitions,
                            ye = ve.enter,
                            ce = ve.leave,
                            le = N || (ee && !K ? I.Constants.PASSWORD_MASK : ""),
                            he = q === r.SiteVisibilityStates.PASSWORD && ![s.default.PARKING_PAGE, s.default.COVER_PAGE].includes(Se);
                        return e.default.createElement(e.default.Fragment, null, e.default.createElement(p.T, {
                            project: "apps.App"
                        }, "Anyone with the password can see this site."), e.default.createElement(m.CSSTransitionGroup, {
                            key: "site-wide-password",
                            transitions: {
                                enter: ye,
                                leave: ce
                            }
                        }, he && e.default.createElement(z.Box, {
                            width: {
                                default: "253px",
                                "mobile-*": "100%"
                            }
                        }, e.default.createElement(E.Input, {
                            className: l.default.damaskInputOnWhite,
                            type: "password",
                            placeholder: (0, D.t)("Password"),
                            onFocus: function() {
                                return R.setPasswordFocused(!0)
                            },
                            onBlur: function() {
                                return R.setPasswordFocused(!1)
                            },
                            onChange: this.handlePasswordChange,
                            value: le,
                            errorMessage: ae ? (0, D.t)("Please enter a password") : void 0
                        }))))
                    }, $.renderSsoOption = function(R) {
                        var X = this.state.siteVisibility,
                            q = m.CSSTransitionGroupPresets.ExpandCollapse.transitions,
                            N = q.enter,
                            K = q.leave,
                            ae = X === r.SiteVisibilityStates.SSO,
                            ie = function() {
                                T.events.trackUserClicksEnterpriseLink({
                                    productArea: T.ProductArea.SITE_AVAILABILITY,
                                    objectIdentifier: "sso-credentials-link"
                                })
                            },
                            ee = R ? "50%" : "100%";
                        return e.default.createElement(z.Box, {
                            sx: {
                                cursor: "initial",
                                opacity: ee
                            }
                        }, R ? e.default.createElement(p.T, {
                            project: "enterprise"
                        }, "Only authorized single sign-on (SSO) users can see the site.") : e.default.createElement(p.T, {
                            managerPanel: (0, T.isSiteSsoEnabled)() ? e.default.createElement(W.InlineLink, {
                                to: "/config/settings/sso-manager",
                                onClick: ie
                            }, e.default.createElement(p.T, {
                                project: "enterprise"
                            }, "SSO Credentials settings panel")) : e.default.createElement(p.T, {
                                project: "enterprise"
                            }, "SSO Credentials settings panel"),
                            project: "enterprise"
                        }, "Anyone authorized to login with the selected SSO can view the site. New SSO options can be set up and managed in the {managerPanel}."), e.default.createElement(m.CSSTransitionGroup, {
                            key: "sso-settings",
                            transitions: {
                                enter: N,
                                leave: K
                            }
                        }, ae ? (0, T.isSiteSsoEnabled)() ? e.default.createElement(H.SsoProtectionPicker, {
                            key: "picker",
                            productArea: T.ProductArea.SITE_AVAILABILITY
                        }) : e.default.createElement(M.default, {
                            key: "lockedMessage",
                            productArea: T.ProductArea.SITE_AVAILABILITY
                        }) : null))
                    }, $.getSsoOptions = function() {
                        var R = (0, T.isSiteSsoEnabled)() || (0, T.hasSsoLockedMessage)(),
                            X = this.props.disable,
                            q = {
                                isDisabled: !0,
                                labelClassList: k.default.disabledLabel,
                                optionClassList: k.default.disabledSsoOption
                            };
                        return R ? [G({
                            value: r.SiteVisibilityStates.SSO,
                            label: e.default.createElement(e.default.Fragment, null, c.STRINGS.ssoProtected, e.default.createElement(n.Chip, {
                                ml: 1,
                                label: "New",
                                usage: "badge",
                                status: "info"
                            })),
                            description: this.renderSsoOption(!1)
                        }, (X == null ? void 0 : X.sso) && this.disabledOptions)] : !(0, T.isEnterpriseWebsite)() && (0, T.getFlag)("sso-feature-gate") ? [G({
                            value: r.SiteVisibilityStates.SSO,
                            label: e.default.createElement(z.Flex, {
                                alignItems: "center"
                            }, e.default.createElement("span", {
                                style: {
                                    opacity: "50%"
                                }
                            }, c.STRINGS.ssoProtected), e.default.createElement(b.SsoFeatureGate, null)),
                            description: this.renderSsoOption(!0)
                        }, q)] : []
                    }, $.renderSiteVisibilitySelector = function() {
                        var R = this,
                            X = this.state.siteVisibility,
                            q = this.props.disable,
                            N = [G({
                                value: r.SiteVisibilityStates.PUBLIC,
                                label: (0, D.t)("Public"),
                                description: (0, D.t)("Anyone can see the site.")
                            }, (q == null ? void 0 : q.public) && this.disabledOptions), {
                                value: r.SiteVisibilityStates.PASSWORD,
                                label: (0, D.t)("Password Protected"),
                                description: this.renderPasswordOption()
                            }, {
                                value: r.SiteVisibilityStates.PRIVATE,
                                label: (0, D.t)("Private"),
                                description: (0, D.t)("Only contributors can see the site.")
                            }];
                        return e.default.createElement("div", {
                            className: k.default.radioGroup
                        }, e.default.createElement(E.RadioGroup, {
                            value: X,
                            onChange: function(K) {
                                R.setSiteVisibility(K)
                            },
                            options: ue(N).concat(ue(this.getSsoOptions()))
                        }))
                    }, $.renderPanel = function() {
                        var R = this,
                            X = this.state.saving,
                            q = this.checkIsDirty();
                        return e.default.createElement(V.SettingsWrapper, {
                            isSaving: X
                        }, e.default.createElement(V.SettingsSaveCancel, {
                            onCancel: function() {
                                return R.resetChanges()
                            },
                            onSave: function() {
                                return R.saveChanges()
                            },
                            isDirty: q,
                            isSaving: X
                        }), e.default.createElement(P.default, null, function(N) {
                            return e.default.createElement(v.Breadcrumbs, B({}, N))
                        }), e.default.createElement(V.SettingsTitle, null, (0, D.t)("Site Availability")), e.default.createElement(V.SettingsDescription, null, (0, D.t)("Control who your site is available to.")), this.props.children, this.renderSiteVisibilitySelector())
                    }, $.renderModal = function() {
                        var R = this,
                            X = this.state,
                            q = X.siteVisibility,
                            N = X.saving,
                            K = this.props,
                            ae = K.onCloseModal,
                            ie = K.productArea;
                        return !ae || !ie ? null : e.default.createElement(e.default.Fragment, null, e.default.createElement(O.default, {
                            productArea: ie,
                            domainName: this.getDomainName(),
                            siteVisibility: q,
                            isPublishing: N,
                            onPublish: function() {
                                R.saveChanges(r.SiteVisibilityStates.PUBLIC)
                            },
                            onClose: ae
                        }))
                    }, $.render = function() {
                        var R = this.props.onCloseModal;
                        return R ? this.renderModal() : this.renderPanel()
                    }, _.getDerivedStateFromProps = function(R, X) {
                        var q = X.siteVisibility;
                        return {
                            siteVisibility: q || pe(R),
                            initialSiteVisibility: pe(R)
                        }
                    }, _
                }(e.default.Component),
                Pe = Oe
        },
        267784: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return M
                }
            }), t(246857);
            var e = Z(t(174161)),
                s = t(548362),
                E = t(892342),
                m = t(153146),
                I = t(955896),
                T = U(t(842655)),
                V = t(777276),
                W = t(258192),
                z = t(480689);

            function U(b) {
                return b && b.__esModule ? b : {
                    default: b
                }
            }

            function k(b) {
                if (typeof WeakMap != "function") return null;
                var D = new WeakMap,
                    p = new WeakMap;
                return (k = function(h) {
                    return h ? p : D
                })(b)
            }

            function Z(b, D) {
                if (!D && b && b.__esModule) return b;
                if (b === null || typeof b != "object" && typeof b != "function") return {
                    default: b
                };
                var p = k(D);
                if (p && p.has(b)) return p.get(b);
                var h = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var y in b)
                    if (y !== "default" && Object.prototype.hasOwnProperty.call(b, y)) {
                        var u = i ? Object.getOwnPropertyDescriptor(b, y) : null;
                        u && (u.get || u.set) ? Object.defineProperty(h, y, u) : h[y] = b[y]
                    }
                return h.default = b, p && p.set(b, h), h
            }
            var H = function(b) {
                    var D = b.isPublishing,
                        p = b.siteVisibility,
                        h = b.onClose,
                        i = b.onPublish,
                        y = b.domainName,
                        u = b.productArea,
                        a = b.router,
                        S = b.location,
                        O = p === V.SiteVisibilityStates.PUBLIC && !D;
                    return (0, e.useEffect)(function() {
                        (0, W.userViewsSitePublishModal)({
                            productArea: u
                        })
                    }, [u]), e.default.createElement(m.Modal.Transition, null, !O && e.default.createElement(T.default, {
                        closeOnBackButton: !1,
                        customNavigation: e.default.createElement(E.Button.Primary, {
                            size: "large",
                            onClick: function() {
                                (0, W.userClicksSitePublishModal)({
                                    productArea: u,
                                    identifier: "publish-button"
                                }), i()
                            },
                            disabled: D
                        }, D ? e.default.createElement(I.T, {
                            project: "apps.App"
                        }, "Publishing...") : e.default.createElement(I.T, {
                            project: "apps.App"
                        }, "Publish")),
                        onClose: h
                    }, e.default.createElement(s.Wizard.Step.Content, null, e.default.createElement(s.Wizard.Step.Content.Title, null, e.default.createElement(I.T, {
                        project: "apps.App"
                    }, "Publish your site")), e.default.createElement(m.Stack, null, e.default.createElement(E.Text.Subtitle, {
                        color: "gray.300",
                        mt: {
                            _: 2,
                            "mobile-*": 3
                        },
                        mb: {
                            _: 3,
                            "mobile-*": 4
                        },
                        mr: 3
                    }, e.default.createElement(I.T, {
                        project: "apps.App"
                    }, "Start selling by making your site visible online."), " ", e.default.createElement("a", {
                        href: "",
                        onClick: function(r) {
                            r.preventDefault(), (0, W.userClicksSitePublishModal)({
                                productArea: u,
                                identifier: "more-options"
                            }), h();
                            var c = S.pathname.startsWith("/commerce"),
                                n = c ? {
                                    pathname: "/settings/site-visibility",
                                    state: {
                                        backTo: z.background.getBackgroundLocation(a).pathname
                                    }
                                } : "/settings/site-visibility";
                            a.push(n)
                        }
                    }, e.default.createElement(I.T, {
                        project: "apps.App"
                    }, "More options."))), e.default.createElement(m.Cell, {
                        backgroundColor: "gray.900",
                        height: "sizes.250",
                        py: 0,
                        px: 2,
                        body: e.default.createElement(m.TextInput, {
                            readOnly: !0,
                            value: y,
                            color: "gray.100",
                            my: 2
                        }),
                        exteriorAccessory: e.default.createElement(E.Text.Body, {
                            m: 0,
                            color: "gray.300"
                        }, e.default.createElement(I.T, {
                            project: "apps.App"
                        }, "Private"))
                    })))))
                },
                M = (0, z.withRouter)(H)
        },
        842655: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            }), t(246857);
            var e = Z(t(174161)),
                s = t(153146),
                E = t(548362),
                m = t(997220),
                I = U(t(198832)),
                T = U(t(203387));

            function V(i, y) {
                (y == null || y > i.length) && (y = i.length);
                for (var u = 0, a = new Array(y); u < y; u++) a[u] = i[u];
                return a
            }

            function W(i) {
                if (Array.isArray(i)) return i
            }

            function z() {
                return z = Object.assign || function(i) {
                    for (var y = 1; y < arguments.length; y++) {
                        var u = arguments[y];
                        for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (i[a] = u[a])
                    }
                    return i
                }, z.apply(this, arguments)
            }

            function U(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function k(i) {
                if (typeof WeakMap != "function") return null;
                var y = new WeakMap,
                    u = new WeakMap;
                return (k = function(a) {
                    return a ? u : y
                })(i)
            }

            function Z(i, y) {
                if (!y && i && i.__esModule) return i;
                if (i === null || typeof i != "object" && typeof i != "function") return {
                    default: i
                };
                var u = k(y);
                if (u && u.has(i)) return u.get(i);
                var a = {},
                    S = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var O in i)
                    if (O !== "default" && Object.prototype.hasOwnProperty.call(i, O)) {
                        var r = S ? Object.getOwnPropertyDescriptor(i, O) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, O, r) : a[O] = i[O]
                    }
                return a.default = i, u && u.set(i, a), a
            }

            function H(i, y) {
                var u = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
                if (u != null) {
                    var a = [],
                        S = !0,
                        O = !1,
                        r, c;
                    try {
                        for (u = u.call(i); !(S = (r = u.next()).done) && (a.push(r.value), !(y && a.length === y)); S = !0);
                    } catch (n) {
                        O = !0, c = n
                    } finally {
                        try {
                            !S && u.return != null && u.return()
                        } finally {
                            if (O) throw c
                        }
                    }
                    return a
                }
            }

            function M() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function b(i, y) {
                return W(i) || H(i, y) || D(i, y) || M()
            }

            function D(i, y) {
                if (i) {
                    if (typeof i == "string") return V(i, y);
                    var u = Object.prototype.toString.call(i).slice(8, -1);
                    if (u === "Object" && i.constructor && (u = i.constructor.name), u === "Map" || u === "Set") return Array.from(u);
                    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return V(i, y)
                }
            }
            var p = function(i) {
                    var y = i.children,
                        u = i.onClose,
                        a = i.customNavigation,
                        S = i.closeOnBackButton,
                        O = S === void 0 ? !0 : S,
                        r = b((0, e.useState)(function() {
                            return new E.Wizard.History
                        }), 1),
                        c = r[0],
                        n = (0, e.useContext)(m.Breakpoint.Context).platform,
                        d = n === "desktop" ? I.default : T.default;
                    return e.default.createElement(s.Modal, {
                        onRequestClose: u,
                        closeOnBackButton: O
                    }, e.default.createElement(s.Modal.Overlay, null), e.default.createElement(s.Modal.Position, {
                        position: "center"
                    }, e.default.createElement(s.Modal.Dialog.ResponsiveProvider, null, e.default.createElement(s.Modal.Dialog, null, e.default.createElement(E.Wizard.SplitScreen, null, e.default.createElement(E.Wizard.SplitScreen.Panel, null, e.default.createElement(E.Wizard, {
                        currentStepId: "pageless-wizard-1",
                        onRequestStep: function() {},
                        history: c,
                        closeButtonProps: {
                            onClick: u
                        },
                        stepCount: 1
                    }, e.default.createElement(E.Wizard.Step, z({
                        id: "pageless-wizard-1",
                        nextStepId: "pageless-wizard-2",
                        stepNumber: 1,
                        hideNavigation: !a,
                        hideProgress: !0,
                        hideNext: !0,
                        hideBack: !0
                    }, a ? {
                        renderNavigation: function() {
                            return e.default.createElement("div", {
                                style: {
                                    pointerEvents: "all"
                                }
                            }, a)
                        }
                    } : {}), y))), e.default.createElement(E.Wizard.SplitScreen.Panel, {
                        backgroundColor: "gray.900",
                        overflow: "hidden",
                        display: "flex"
                    }, e.default.createElement(s.Image, {
                        src: d,
                        sx: {
                            display: "block",
                            width: "100%",
                            objectFit: "cover"
                        },
                        fallback: e.default.createElement(s.ActivityIndicator, {
                            m: "auto"
                        })
                    })))))))
                },
                h = p
        },
        769043: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "SsoFeatureGate", {
                enumerable: !0,
                get: function() {
                    return h
                }
            }), t(246857);
            var e = k(t(174161)),
                s = t(892342),
                E = t(218795),
                m = t(986456),
                I = t(153146),
                T = t(359530),
                V = t(368403);

            function W(i, y) {
                (y == null || y > i.length) && (y = i.length);
                for (var u = 0, a = new Array(y); u < y; u++) a[u] = i[u];
                return a
            }

            function z(i) {
                if (Array.isArray(i)) return i
            }

            function U(i) {
                if (typeof WeakMap != "function") return null;
                var y = new WeakMap,
                    u = new WeakMap;
                return (U = function(a) {
                    return a ? u : y
                })(i)
            }

            function k(i, y) {
                if (!y && i && i.__esModule) return i;
                if (i === null || typeof i != "object" && typeof i != "function") return {
                    default: i
                };
                var u = U(y);
                if (u && u.has(i)) return u.get(i);
                var a = {},
                    S = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var O in i)
                    if (O !== "default" && Object.prototype.hasOwnProperty.call(i, O)) {
                        var r = S ? Object.getOwnPropertyDescriptor(i, O) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, O, r) : a[O] = i[O]
                    }
                return a.default = i, u && u.set(i, a), a
            }

            function Z(i, y) {
                var u = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
                if (u != null) {
                    var a = [],
                        S = !0,
                        O = !1,
                        r, c;
                    try {
                        for (u = u.call(i); !(S = (r = u.next()).done) && (a.push(r.value), !(y && a.length === y)); S = !0);
                    } catch (n) {
                        O = !0, c = n
                    } finally {
                        try {
                            !S && u.return != null && u.return()
                        } finally {
                            if (O) throw c
                        }
                    }
                    return a
                }
            }

            function H() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function M(i, y) {
                return z(i) || Z(i, y) || b(i, y) || H()
            }

            function b(i, y) {
                if (i) {
                    if (typeof i == "string") return W(i, y);
                    var u = Object.prototype.toString.call(i).slice(8, -1);
                    if (u === "Object" && i.constructor && (u = i.constructor.name), u === "Map" || u === "Set") return Array.from(u);
                    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return W(i, y)
                }
            }
            var D = {
                    close: (0, T.t)("Close"),
                    enterprise: (0, T.t)("Enterprise"),
                    modalTitle: (0, T.t)("Squarespace Enterprise"),
                    modalDescription: (0, T.t)("See what Squarespace Enterprise can do for your brand."),
                    talkToUs: (0, T.t)("Talk to us"),
                    learnMore: (0, T.t)("Learn more")
                },
                p = "https://www.squarespace.com/enterprise?source=cms",
                h = function() {
                    var i = M((0, e.useState)(!1), 2),
                        y = i[0],
                        u = i[1],
                        a = function() {
                            u(!0), V.events.trackUserClicksEnterpriseButton({
                                objectIdentifier: "open-sso-feature-gate-modal",
                                productArea: V.ProductArea.SITE_AVAILABILITY
                            })
                        },
                        S = function() {
                            u(!1)
                        },
                        O = function() {
                            V.events.trackUserClicksEnterpriseLink({
                                objectIdentifier: "sso-contact-sales",
                                productArea: V.ProductArea.SITE_AVAILABILITY
                            })
                        },
                        r = function() {
                            V.events.trackUserClicksEnterpriseLink({
                                objectIdentifier: "sso-learn-more",
                                productArea: V.ProductArea.SITE_AVAILABILITY
                            })
                        };
                    return e.default.createElement(e.default.Fragment, null, e.default.createElement(s.Button.Base, {
                        onClick: a,
                        ml: 4,
                        color: "blue.100",
                        sx: {
                            "&::after": {
                                content: '""',
                                height: "2px",
                                backgroundColor: "blue.100",
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: 0,
                                transition: "width 0.3s linear"
                            },
                            "&:focus::after, &:hover::after": {
                                width: "calc(100% + 16px)"
                            },
                            minHeight: "22px"
                        }
                    }, e.default.createElement(m.FeatureGateLock, {
                        size: "sizes.150",
                        color: "blue.100",
                        sx: {
                            marginRight: "6px"
                        }
                    }), D.enterprise), e.default.createElement(I.Modal.Transition, null, y && e.default.createElement(I.Modal, {
                        onRequestClose: S
                    }, e.default.createElement(I.Modal.Overlay, null), e.default.createElement(I.Modal.Position, {
                        position: "center"
                    }, e.default.createElement(I.Modal.Dialog, null, e.default.createElement(s.Box, {
                        pb: 2,
                        pt: 5,
                        px: 6,
                        tabIndex: 0,
                        width: "sizes.700"
                    }, e.default.createElement(s.Button.Tertiary, {
                        mb: 4,
                        onClick: S
                    }, D.close), e.default.createElement(s.Text.Title, {
                        py: 1
                    }, D.modalTitle), e.default.createElement(s.Text.Subtitle, {
                        color: "gray.300",
                        pb: 4,
                        pt: 3,
                        m: 0
                    }, D.modalDescription), e.default.createElement(E.UpgradeButton.Primary, {
                        size: "large",
                        width: "100%",
                        onClick: O,
                        as: "a",
                        href: "".concat(p, "#contact-block"),
                        target: "_blank"
                    }, D.talkToUs), e.default.createElement(s.Button.Tertiary, {
                        size: "large",
                        width: "100%",
                        onClick: r,
                        as: "a",
                        href: p,
                        target: "_blank"
                    }, D.learnMore)))))))
                }
        },
        777276: function(J, w) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            });

            function t(E, m) {
                for (var I in m) Object.defineProperty(E, I, {
                    enumerable: !0,
                    get: m[I]
                })
            }
            t(w, {
                SiteVisibilityStates: function() {
                    return e
                },
                ProtectionTypeValues: function() {
                    return s
                }
            });
            var e;
            (function(E) {
                E.PUBLIC = "PUBLIC", E.PASSWORD = "PASSWORD", E.PRIVATE = "PRIVATE", E.SSO = "SSO"
            })(e || (e = {}));
            var s;
            (function(E) {
                E.PUBLIC = "none", E.PASSWORD = "password", E.PRIVATE = "owner_login", E.SSO = "sso"
            })(s || (s = {}))
        },
        522850: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            });

            function e(r, c) {
                for (var n in c) Object.defineProperty(r, n, {
                    enumerable: !0,
                    get: c[n]
                })
            }
            e(w, {
                PublishTooltip: function() {
                    return a
                },
                UpgradeMessage: function() {
                    return S
                },
                ActivateMessage: function() {
                    return O
                }
            }), t(818541), t(246857);
            var s = p(t(174161)),
                E = t(579888),
                m = t(617385),
                I = t(892342),
                T = t(548362),
                V = t(368403),
                W = t(480689),
                z = t(359530),
                U = t(955896),
                k = b(t(569132)),
                Z = b(t(494130));

            function H(r, c) {
                (c == null || c > r.length) && (c = r.length);
                for (var n = 0, d = new Array(c); n < c; n++) d[n] = r[n];
                return d
            }

            function M(r) {
                if (Array.isArray(r)) return r
            }

            function b(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function D(r) {
                if (typeof WeakMap != "function") return null;
                var c = new WeakMap,
                    n = new WeakMap;
                return (D = function(d) {
                    return d ? n : c
                })(r)
            }

            function p(r, c) {
                if (!c && r && r.__esModule) return r;
                if (r === null || typeof r != "object" && typeof r != "function") return {
                    default: r
                };
                var n = D(c);
                if (n && n.has(r)) return n.get(r);
                var d = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var P in r)
                    if (P !== "default" && Object.prototype.hasOwnProperty.call(r, P)) {
                        var v = l ? Object.getOwnPropertyDescriptor(r, P) : null;
                        v && (v.get || v.set) ? Object.defineProperty(d, P, v) : d[P] = r[P]
                    }
                return d.default = r, n && n.set(r, d), d
            }

            function h(r, c) {
                var n = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
                if (n != null) {
                    var d = [],
                        l = !0,
                        P = !1,
                        v, j;
                    try {
                        for (n = n.call(r); !(l = (v = n.next()).done) && (d.push(v.value), !(c && d.length === c)); l = !0);
                    } catch (L) {
                        P = !0, j = L
                    } finally {
                        try {
                            !l && n.return != null && n.return()
                        } finally {
                            if (P) throw j
                        }
                    }
                    return d
                }
            }

            function i() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function y(r, c) {
                return M(r) || h(r, c) || u(r, c) || i()
            }

            function u(r, c) {
                if (r) {
                    if (typeof r == "string") return H(r, c);
                    var n = Object.prototype.toString.call(r).slice(8, -1);
                    if (n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(r, c)
                }
            }
            var a = function(r) {
                    var c = r.children;
                    return s.default.createElement(m.TooltipTrigger, {
                        className: k.default.option,
                        title: (0, z.t)("Upgrade to publish"),
                        description: (0, z.t)("You must upgrade your trial to a paid site to make it public. Upgrade using the link above.")
                    }, c)
                },
                S = function() {
                    var r = (0, W.useNavigation)().push;
                    return s.default.createElement(I.Button.Primary, {
                        onClick: function() {
                            return r(E.UpsellUrls[E.UpsellDestination.TRIAL_UPGRADE_PLAN])
                        },
                        size: "medium",
                        sx: {
                            width: {
                                _: "auto",
                                "mobile-*": "100%"
                            }
                        }
                    }, s.default.createElement(U.T, {
                        project: "scripts-v6.domains"
                    }, "Upgrade to Publish"))
                },
                O = function() {
                    var r = y((0, s.useState)(!1), 2),
                        c = r[0],
                        n = r[1],
                        d = (0, V.isOrgAdmin)();
                    return d ? s.default.createElement(s.default.Fragment, null, s.default.createElement(T.Banner, {
                        title: (0, z.t)("Activate to publish"),
                        body: (0, z.t)("Activate your trial site to make it public."),
                        buttons: [s.default.createElement(I.Button.Tertiary, {
                            onClick: function() {
                                return n(!0)
                            }
                        }, s.default.createElement(U.T, {
                            project: "apps.App"
                        }, "Activate"))]
                    }), s.default.createElement(Z.default, {
                        isOpen: c,
                        onClose: function() {
                            return n(!1)
                        }
                    })) : s.default.createElement(T.Banner, {
                        title: (0, z.t)("No Permission"),
                        body: (0, z.t)("A Team Admin must activate this trial site to make it public.")
                    })
                }
        },
        918595: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return y
                }
            });
            var e = h(t(174161)),
                s = h(t(589766)),
                E = h(t(448718)),
                m = t(368403),
                I = h(t(374335)),
                T = h(t(206746)),
                V = h(t(91526)),
                W = h(t(495769)),
                z = h(t(651197)),
                U = h(t(914699)),
                k = h(t(658594)),
                Z = h(t(270216)),
                H = h(t(646567)),
                M = t(522850),
                b = h(t(551617)),
                D = h(t(281410));

            function p() {
                return p = Object.assign || function(u) {
                    for (var a = 1; a < arguments.length; a++) {
                        var S = arguments[a];
                        for (var O in S) Object.prototype.hasOwnProperty.call(S, O) && (u[O] = S[O])
                    }
                    return u
                }, p.apply(this, arguments)
            }

            function h(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            var i = function(u) {
                    var a = u.isWebsiteInTrial,
                        S = {
                            public: a,
                            sso: (0, m.isEnterpriseTrial)()
                        };
                    return (0, m.isEnterpriseTrial)() ? e.default.createElement(H.default, p({}, u, {
                        disable: S
                    }), a && (0, M.ActivateMessage)()) : e.default.createElement(H.default, p({}, u, {
                        disable: S,
                        tooltip: M.PublishTooltip
                    }), a && (0, M.UpgradeMessage)())
                },
                y = (0, I.default)({
                    componentDidConnect: function() {
                        var a = W.default.getState().domainDiscountStatus,
                            S = T.default.getState().domainsByName,
                            O = U.default.getState().primaryDomain;
                        a || z.default.loadDiscountStatus.defer(), (!S || !S[O]) && V.default.load(), b.default.getOrLoadByPlanType(D.default.WEBSITE)
                    },
                    getStores: function() {
                        return [k.default, U.default, Z.default, T.default, W.default, b.default]
                    },
                    getPropsFromStores: function() {
                        var a = U.default.getState(),
                            S = a.hasPassword,
                            O = a.primaryDomain,
                            r = a.websiteType,
                            c = a.siteTitle,
                            n = a.showOwnerLogin,
                            d = a.identifier,
                            l = a.protectionType,
                            P = Z.default.getState().tutorialsCompleted,
                            v = W.default.getState().domainDiscountStatus,
                            j, L = ((j = b.default.getByPlanType(D.default.WEBSITE)) !== null && j !== void 0 ? j : {}).plan,
                            o = L == null ? void 0 : L.displayName,
                            g = L == null ? void 0 : L.periodDisplayName,
                            f = T.default.getState(),
                            B = f.domainsByName,
                            C = B === void 0 ? {} : B,
                            Y = C[O == null ? void 0 : O.replace("www.", "")],
                            x = (Y == null ? void 0 : Y.type) || E.default.APPLICATION,
                            te = k.default.getState().siteStatus,
                            re = te === s.default.TRIAL;
                        return {
                            initialHasPassword: S,
                            hasPassword: S,
                            primaryDomain: O,
                            primaryDomainType: x,
                            websiteType: r,
                            siteTitle: c,
                            isWebsiteInTrial: re,
                            showOwnerLogin: n,
                            identifier: d,
                            tutorialsCompleted: P,
                            websitePlanType: o,
                            billingPeriod: g,
                            domainDiscountStatus: v,
                            protectionType: l
                        }
                    }
                }, i)
        },
        777567: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return T
                }
            });
            var e = E(t(448718)),
                s = E(t(311064));

            function E(V) {
                return V && V.__esModule ? V : {
                    default: V
                }
            }
            var m = (0, s.default)(e.default),
                I = function(V) {
                    return m[V]
                },
                T = I
        },
        675034: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            var e = W(t(206298));

            function s(a) {
                if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return a
            }

            function E(a, S) {
                if (!(a instanceof S)) throw new TypeError("Cannot call a class as a function")
            }

            function m(a, S, O) {
                return S in a ? Object.defineProperty(a, S, {
                    value: O,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[S] = O, a
            }

            function I(a, S, O) {
                return typeof Reflect != "undefined" && Reflect.get ? I = Reflect.get : I = function(c, n, d) {
                    var l = D(c, n);
                    if (l) {
                        var P = Object.getOwnPropertyDescriptor(l, n);
                        return P.get ? P.get.call(d) : P.value
                    }
                }, I(a, S, O || a)
            }

            function T(a) {
                return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(O) {
                    return O.__proto__ || Object.getPrototypeOf(O)
                }, T(a)
            }

            function V(a, S) {
                if (typeof S != "function" && S !== null) throw new TypeError("Super expression must either be null or a function");
                a.prototype = Object.create(S && S.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), S && b(a, S)
            }

            function W(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function z(a) {
                for (var S = 1; S < arguments.length; S++) {
                    var O = arguments[S] != null ? arguments[S] : {},
                        r = Object.keys(O);
                    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(O).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(O, c).enumerable
                    }))), r.forEach(function(c) {
                        m(a, c, O[c])
                    })
                }
                return a
            }

            function U(a, S) {
                var O = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(a);
                    S && (r = r.filter(function(c) {
                        return Object.getOwnPropertyDescriptor(a, c).enumerable
                    })), O.push.apply(O, r)
                }
                return O
            }

            function k(a, S) {
                return S = S != null ? S : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(S)) : U(Object(S)).forEach(function(O) {
                    Object.defineProperty(a, O, Object.getOwnPropertyDescriptor(S, O))
                }), a
            }

            function Z(a, S) {
                if (a == null) return {};
                var O = H(a, S),
                    r, c;
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(a);
                    for (c = 0; c < n.length; c++) r = n[c], !(S.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(a, r) && (O[r] = a[r])
                }
                return O
            }

            function H(a, S) {
                if (a == null) return {};
                var O = {},
                    r = Object.keys(a),
                    c, n;
                for (n = 0; n < r.length; n++) c = r[n], !(S.indexOf(c) >= 0) && (O[c] = a[c]);
                return O
            }

            function M(a, S) {
                return S && (p(S) === "object" || typeof S == "function") ? S : s(a)
            }

            function b(a, S) {
                return b = Object.setPrototypeOf || function(r, c) {
                    return r.__proto__ = c, r
                }, b(a, S)
            }

            function D(a, S) {
                for (; !Object.prototype.hasOwnProperty.call(a, S) && (a = T(a), a !== null););
                return a
            }
            var p = function(a) {
                "@swc/helpers - typeof";
                return a && typeof Symbol != "undefined" && a.constructor === Symbol ? "symbol" : typeof a
            };

            function h() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (a) {
                    return !1
                }
            }

            function i(a) {
                var S = h();
                return function() {
                    var r = T(a),
                        c;
                    if (S) {
                        var n = T(this).constructor;
                        c = Reflect.construct(r, arguments, n)
                    } else c = r.apply(this, arguments);
                    return M(this, c)
                }
            }
            var y = function(a) {
                    "use strict";
                    V(O, a);
                    var S = i(O);

                    function O() {
                        return E(this, O), S.call(this, "UserSiteVisibility", {
                            event_owner_team: "cms",
                            product_area: "panel",
                            event_source: "web",
                            actor: "user",
                            custom_schema_name: "CMSDev"
                        })
                    }
                    var r = O.prototype;
                    return r.trackUserSiteVisibilityEvent = function(n) {
                        var d = n.object_identifier,
                            l = Z(n, ["object_identifier"]);
                        return I(T(O.prototype), "track", this).call(this, k(z({}, l), {
                            event_name: "UserChangesSiteVisibility",
                            action: "save",
                            object_type: "web",
                            object_identifier: d || "site-availability-panel",
                            object_display_name: "Site Visibility"
                        }))
                    }, r.updateSiteVisibility = function(n) {
                        var d = n.domainType,
                            l = n.billingPeriod,
                            P = n.hasFreeDomainPromo,
                            v = n.isPublishModalShown,
                            j = n.siteTitle,
                            L = n.isSiteTitleCustom,
                            o = n.siteVisibilityStatus,
                            g = n.websitePlanType,
                            f = n.websiteType,
                            B = n.customObjectIdentifier;
                        return this.trackUserSiteVisibilityEvent(z({
                            billing_period: l,
                            domain_type: d,
                            has_free_domain_promo: P,
                            is_custom_site_title: L,
                            is_publish_modal_shown: v,
                            site_title: j,
                            site_visibility_status: o,
                            website_type: f,
                            plan_type: g
                        }, B ? {
                            object_identifier: B
                        } : {}))
                    }, O
                }(e.default),
                u = new y
        },
        258192: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            });

            function e(p, h) {
                for (var i in h) Object.defineProperty(p, i, {
                    enumerable: !0,
                    get: h[i]
                })
            }
            e(w, {
                userSavesSiteAvailability: function() {
                    return U
                },
                userViewsSitePublishedModal: function() {
                    return k
                },
                userCopiesSiteLink: function() {
                    return Z
                },
                userClicksShareToSocial: function() {
                    return H
                },
                userViewsSitePublishModal: function() {
                    return M
                },
                userClicksSitePublishModal: function() {
                    return b
                },
                userDismissesUnpublishedSiteBanner: function() {
                    return D
                }
            });
            var s = T(t(830651)),
                E = t(368403),
                m = t(750775);

            function I(p, h, i) {
                return h in p ? Object.defineProperty(p, h, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : p[h] = i, p
            }

            function T(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            }

            function V(p) {
                for (var h = 1; h < arguments.length; h++) {
                    var i = arguments[h] != null ? arguments[h] : {},
                        y = Object.keys(i);
                    typeof Object.getOwnPropertySymbols == "function" && (y = y.concat(Object.getOwnPropertySymbols(i).filter(function(u) {
                        return Object.getOwnPropertyDescriptor(i, u).enumerable
                    }))), y.forEach(function(u) {
                        I(p, u, i[u])
                    })
                }
                return p
            }
            var W = (0, E.getOrganization)() || {},
                z = W.id,
                U = function(p, h) {
                    s.default.track(V({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.SAVE,
                        object_type: "status",
                        object_identifier: "site-availability",
                        object_value: p
                    }, h ? {
                        product_area: h
                    } : {}, z && {
                        org_id: z
                    }))
                },
                k = function() {
                    s.default.track({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.VIEW,
                        event_name: "UserViewsSitePublishedModal",
                        object_identifier: "site-published-modal",
                        object_type: m.OBJECT.MODAL,
                        product_page: "publish-site-modal"
                    })
                },
                Z = function() {
                    s.default.track({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.CLICK,
                        event_name: "UserCopiesSiteLink",
                        object_display_name: "Copy",
                        object_identifier: "copy-site-link",
                        object_type: m.OBJECT.BUTTON,
                        product_page: "publish-site-modal"
                    })
                },
                H = function(p) {
                    s.default.track({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.CLICK,
                        event_name: "UserClicksShareToSocial",
                        object_identifier: "social-link-share",
                        object_type: m.OBJECT.BUTTON,
                        object_value: p,
                        product_page: "publish-site-modal"
                    })
                },
                M = function(p) {
                    var h = p.productArea;
                    s.default.track({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.VIEW,
                        event_name: "UserViewsSitePublishModal",
                        object_identifier: "site-publish-modal",
                        object_type: m.OBJECT.MODAL,
                        product_page: "site-publish-modal",
                        product_area: h
                    })
                },
                b = function(p) {
                    var h = p.productArea,
                        i = p.identifier;
                    s.default.track({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.CLICK,
                        event_name: "UserClicksSitePublishModal",
                        object_identifier: i,
                        object_type: m.OBJECT.MODAL,
                        product_page: "site-publish-modal",
                        product_area: h
                    })
                },
                D = function() {
                    s.default.track({
                        actor: m.ACTOR.USER,
                        action: m.ACTION.CLICK,
                        event_name: "UserClicksHideSitePublishBanner",
                        object_identifier: "hide-site-publish-banner",
                        object_type: m.OBJECT.BUTTON,
                        product_page: "site-publish-modal"
                    })
                }
        },
        182362: function(J, w, t) {
            "use strict";
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), Object.defineProperty(w, "default", {
                enumerable: !0,
                get: function() {
                    return T
                }
            });
            var e = E(t(672534)),
                s = E(t(311064));

            function E(V) {
                return V && V.__esModule ? V : {
                    default: V
                }
            }
            var m = (0, s.default)(e.default),
                I = function(V) {
                    return m[V]
                },
                T = I
        },
        198832: function(J, w, t) {
            "use strict";
            J.exports = t.p + "blogging-for-my-business-desktop-d2208fc64a9f7b18c406.jpg"
        },
        203387: function(J, w, t) {
            "use strict";
            J.exports = t.p + "blogging-for-my-business-mobile-1c5ee1b948b9e15814cd.jpg"
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/a27c5ee2789b66e87a034064a8143a9a/18595-f242a8b0b941d56188ec-min.en-US.js.map