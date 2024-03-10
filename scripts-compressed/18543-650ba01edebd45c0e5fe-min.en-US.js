(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [18543], {
        852744: function(pe) {
            pe.exports = {
                popOverZIndex: "s3b76lp1OsTQEy3xFofF",
                formView: "MIfl6AT_GbmTMi96vjJL",
                closeAction: "OS0RGXejlFQ55P68pdGV",
                upperCase: "KJxlw4_1NAH6ThG86ycZ",
                flyoutTitle: "MgIeJDIUUWhJptWZHxeP",
                flyoutTitleColor: "eSAJhyPDS1VfdriaWzOA",
                fullSlugPrefix: "P0KKMo6ry2GeOm37a5dM",
                flyoutTitleSelected: "duKbLi9oMCG9b1HfvRc5",
                fixedWidth: "aPNaNlZTaZfZfqB1jw1L",
                hideDetailedEditor: "bNFf7bTeGbKIPxgYzUOt",
                showEditor: "cq4iFteL4pirXqUzo0kc",
                buttonAlignment: "H3lGb_qa5YW82WxHIXnS",
                childCategory: "hQjnPobnLOQGt_Yi05V6",
                category: "j7J9enPnZj8MkZG7VvYQ",
                deleteButton: "sMax24XGq76G1av3dmwQ",
                categoryPopover: "OHrAw2QzgSBdyestzMys",
                dragPreview: "uUUNThnLePmIxWBDdt6s",
                expandIcon: "tCWH7qe2iuJ_nYDKPmyh",
                dragIcon: "vygTW_Nx9k69kpGL8ZLV",
                expandCollapse: "aEq2gmuw0e2X1ztmFkQ7",
                dragHandleContainer: "yHYWx6wYFIzdYqSHy0mY",
                rotateChevron: "Vcw7a8dabWDhXLDXePH0",
                disclosure: "emoFotGym4Z2Eq6GJQ6y",
                openDisclosure: "JPZo1Dro8lKHyXiDiByo",
                hovered: "Cs9xYmtOHgJ_jBO73sSQ",
                separator: "jcUitTLJTDRfh3gG9qie",
                addButton: "tPOYoAbZirXL8RuH_pWD",
                grabbing: "QJ1N6ZH6jcW1oJhh5iJ3",
                reorderAfter: "UeFKZOjcC6FGWTXZ4BII",
                reorderBefore: "ZN0rP45haTTtYeDyc3oZ",
                iconContainer: "UKUVYOpZq9GDU65BS7mQ",
                disabledButton: "MkrvbCkakC8kocfCHb3c",
                addIcon: "PHn5NAXxTuLu7azXA7Y2",
                addIconHeader: "d8n_iTCkiST8Ae3XvgsH",
                hidden: "HVcBB1iJHn16fIPFp5ix",
                pointer: "ZuXhccc_F1W_03bAIIgc",
                translucent: "zj9Vz5s4HwHAJgK7bb_m",
                filterPadding: "iArOSlCtVa7WeCl0kLRb",
                addContainer: "qau1lho2VJxjQX5ihW7q",
                inputWidth: "AIfSnPABAXrmjXSFl33K",
                dragLayerStyle: "D3K7vgRi1EOB6gZPpe2a",
                flyoutWidth: "mTlDns331i74Knf5iVrU",
                flyoutHeader: "D575DarRWz9RaemIiQJc",
                showError: "SwipBNE5q87Y38FIDsel",
                showLoading: "rnPtVyvtT_BCIDHxekkN",
                editPanelMargin: "W3hhS9EZWlR9Czflk6gc",
                popupStyles: "MsZZdn9qEwjVSMPGuPsA",
                searchContainer: "LJy1LP0Nxojzmwt1fyKg"
            }
        },
        14728: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            }), s(246857);
            var L = q(s(174161)),
                z = s(892342),
                x = s(955896),
                I = s(480689),
                B = s(752584),
                R = q(s(233590));

            function X(n, d, c) {
                return d in n ? Object.defineProperty(n, d, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[d] = c, n
            }

            function q(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function N(n) {
                for (var d = 1; d < arguments.length; d++) {
                    var c = arguments[d] != null ? arguments[d] : {},
                        D = Object.keys(c);
                    typeof Object.getOwnPropertySymbols == "function" && (D = D.concat(Object.getOwnPropertySymbols(c).filter(function(E) {
                        return Object.getOwnPropertyDescriptor(c, E).enumerable
                    }))), D.forEach(function(E) {
                        X(n, E, c[E])
                    })
                }
                return n
            }

            function r(n, d) {
                var c = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var D = Object.getOwnPropertySymbols(n);
                    d && (D = D.filter(function(E) {
                        return Object.getOwnPropertyDescriptor(n, E).enumerable
                    })), c.push.apply(c, D)
                }
                return c
            }

            function _(n, d) {
                return d = d != null ? d : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(d)) : r(Object(d)).forEach(function(c) {
                    Object.defineProperty(n, c, Object.getOwnPropertyDescriptor(d, c))
                }), n
            }
            var V = function(n) {
                    var d = window.Y.Squarespace.Singletons.TemplateNavigationList.item(0).get("itemList");
                    window.Y.Squarespace.Navigation.Events.fire("collection:create", {
                        type: "link",
                        modelList: d,
                        opts: _(N({
                            index: 0
                        }, n), {
                            openModalForConfiguredUrl: !0
                        })
                    })
                },
                ee = function(n) {
                    var d = n.callerName,
                        c = n.displayName,
                        D = n.fullUrl,
                        E = n.requestCloseOriginatingModal,
                        g = n.router,
                        k = n.selectedCategory,
                        Q = function() {
                            (0, B.trackChangeCategorySetting)("add-to-site-header", !0, k, d), E(function() {
                                g.push(R.default.forPagesPanel()), setTimeout(function() {
                                    V({
                                        newWindow: !1,
                                        title: c,
                                        url: D
                                    })
                                }, 0)
                            })
                        };
                    return L.default.createElement(z.Box, {
                        mx: 2,
                        mt: 1,
                        px: 2
                    }, L.default.createElement(z.Button.Tertiary, {
                        onClick: Q
                    }, L.default.createElement(x.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Add to your main navigation")))
                },
                j = (0, I.withRouter)(ee)
        },
        443384: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return we
                }
            }), s(246857), s(783538);
            var L = s(153146),
                z = Q(s(342710)),
                x = s(612110),
                I = Q(s(754088)),
                B = Q(s(845076)),
                R = W(s(174161)),
                X = Q(s(688286)),
                q = s(955896),
                N = s(359530),
                r = Q(s(14728)),
                _ = Q(s(852744)),
                V = Q(s(532749)),
                ee = Q(s(47676)),
                j = s(314185),
                n = s(752584);

            function d(o, O) {
                (O == null || O > o.length) && (O = o.length);
                for (var C = 0, A = new Array(O); C < O; C++) A[C] = o[C];
                return A
            }

            function c(o) {
                if (Array.isArray(o)) return o
            }

            function D(o, O, C, A, y, re, Y) {
                try {
                    var se = o[re](Y),
                        ge = se.value
                } catch (U) {
                    C(U);
                    return
                }
                se.done ? O(ge) : Promise.resolve(ge).then(A, y)
            }

            function E(o) {
                return function() {
                    var O = this,
                        C = arguments;
                    return new Promise(function(A, y) {
                        var re = o.apply(O, C);

                        function Y(ge) {
                            D(re, A, y, Y, se, "next", ge)
                        }

                        function se(ge) {
                            D(re, A, y, Y, se, "throw", ge)
                        }
                        Y(void 0)
                    })
                }
            }

            function g(o, O, C) {
                return O in o ? Object.defineProperty(o, O, {
                    value: C,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[O] = C, o
            }

            function k() {
                return k = Object.assign || function(o) {
                    for (var O = 1; O < arguments.length; O++) {
                        var C = arguments[O];
                        for (var A in C) Object.prototype.hasOwnProperty.call(C, A) && (o[A] = C[A])
                    }
                    return o
                }, k.apply(this, arguments)
            }

            function Q(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function le(o) {
                if (typeof WeakMap != "function") return null;
                var O = new WeakMap,
                    C = new WeakMap;
                return (le = function(A) {
                    return A ? C : O
                })(o)
            }

            function W(o, O) {
                if (!O && o && o.__esModule) return o;
                if (o === null || typeof o != "object" && typeof o != "function") return {
                    default: o
                };
                var C = le(O);
                if (C && C.has(o)) return C.get(o);
                var A = {},
                    y = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var re in o)
                    if (re !== "default" && Object.prototype.hasOwnProperty.call(o, re)) {
                        var Y = y ? Object.getOwnPropertyDescriptor(o, re) : null;
                        Y && (Y.get || Y.set) ? Object.defineProperty(A, re, Y) : A[re] = o[re]
                    }
                return A.default = o, C && C.set(o, A), A
            }

            function fe(o, O) {
                var C = o == null ? null : typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
                if (C != null) {
                    var A = [],
                        y = !0,
                        re = !1,
                        Y, se;
                    try {
                        for (C = C.call(o); !(y = (Y = C.next()).done) && (A.push(Y.value), !(O && A.length === O)); y = !0);
                    } catch (ge) {
                        re = !0, se = ge
                    } finally {
                        try {
                            !y && C.return != null && C.return()
                        } finally {
                            if (re) throw se
                        }
                    }
                    return A
                }
            }

            function P() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function T(o) {
                for (var O = 1; O < arguments.length; O++) {
                    var C = arguments[O] != null ? arguments[O] : {},
                        A = Object.keys(C);
                    typeof Object.getOwnPropertySymbols == "function" && (A = A.concat(Object.getOwnPropertySymbols(C).filter(function(y) {
                        return Object.getOwnPropertyDescriptor(C, y).enumerable
                    }))), A.forEach(function(y) {
                        g(o, y, C[y])
                    })
                }
                return o
            }

            function F(o, O) {
                var C = Object.keys(o);
                if (Object.getOwnPropertySymbols) {
                    var A = Object.getOwnPropertySymbols(o);
                    O && (A = A.filter(function(y) {
                        return Object.getOwnPropertyDescriptor(o, y).enumerable
                    })), C.push.apply(C, A)
                }
                return C
            }

            function ne(o, O) {
                return O = O != null ? O : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(O)) : F(Object(O)).forEach(function(C) {
                    Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(O, C))
                }), o
            }

            function $(o, O) {
                return c(o) || fe(o, O) || oe(o, O) || P()
            }

            function oe(o, O) {
                if (o) {
                    if (typeof o == "string") return d(o, O);
                    var C = Object.prototype.toString.call(o).slice(8, -1);
                    if (C === "Object" && o.constructor && (C = o.constructor.name), C === "Map" || C === "Set") return Array.from(C);
                    if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return d(o, O)
                }
            }
            var J = function(o, O) {
                    var C, A, y, re, Y = {
                        label: 0,
                        sent: function() {
                            if (y[0] & 1) throw y[1];
                            return y[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return re = {
                        next: se(0),
                        throw: se(1),
                        return: se(2)
                    }, typeof Symbol == "function" && (re[Symbol.iterator] = function() {
                        return this
                    }), re;

                    function se(U) {
                        return function(Ee) {
                            return ge([U, Ee])
                        }
                    }

                    function ge(U) {
                        if (C) throw new TypeError("Generator is already executing.");
                        for (; Y;) try {
                            if (C = 1, A && (y = U[0] & 2 ? A.return : U[0] ? A.throw || ((y = A.return) && y.call(A), 0) : A.next) && !(y = y.call(A, U[1])).done) return y;
                            switch (A = 0, y && (U = [U[0] & 2, y.value]), U[0]) {
                                case 0:
                                case 1:
                                    y = U;
                                    break;
                                case 4:
                                    return Y.label++, {
                                        value: U[1],
                                        done: !1
                                    };
                                case 5:
                                    Y.label++, A = U[1], U = [0];
                                    continue;
                                case 7:
                                    U = Y.ops.pop(), Y.trys.pop();
                                    continue;
                                default:
                                    if (y = Y.trys, !(y = y.length > 0 && y[y.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                                        Y = 0;
                                        continue
                                    }
                                    if (U[0] === 3 && (!y || U[1] > y[0] && U[1] < y[3])) {
                                        Y.label = U[1];
                                        break
                                    }
                                    if (U[0] === 6 && Y.label < y[1]) {
                                        Y.label = y[1], y = U;
                                        break
                                    }
                                    if (y && Y.label < y[2]) {
                                        Y.label = y[2], Y.ops.push(U);
                                        break
                                    }
                                    y[2] && Y.ops.pop(), Y.trys.pop();
                                    continue
                            }
                            U = O.call(o, Y)
                        } catch (Ee) {
                            U = [6, Ee], A = 0
                        } finally {
                            C = y = 0
                        }
                        if (U[0] & 5) throw U[1];
                        return {
                            value: U[0] ? U[1] : void 0,
                            done: !0
                        }
                    }
                },
                ve = function() {
                    return null
                },
                Ce = function(o) {
                    var O = (0, N.t)("Couldn't update categories"),
                        C = (0, N.t)("Try again"),
                        A = $((0, R.useState)(o.selectedCategory), 2),
                        y = A[0],
                        re = A[1],
                        Y = $((0, R.useState)(o.selectedCategory), 2),
                        se = Y[0],
                        ge = Y[1],
                        U = $((0, R.useState)(!1), 2),
                        Ee = U[0],
                        De = U[1],
                        Ae = $((0, R.useState)(O), 2),
                        Me = Ae[0],
                        Ie = Ae[1],
                        ye = $((0, R.useState)(C), 2),
                        Se = ye[0],
                        _e = ye[1],
                        xe = (0, R.useRef)(!0),
                        Pe = o.renderCustomEditingHeader,
                        he = (0, R.useRef)(y),
                        Te = (0, R.useRef)(se);
                    (0, R.useEffect)(function() {
                        he.current = y
                    }, [y]), (0, R.useEffect)(function() {
                        Te.current = se
                    }, [se]);
                    var i = y == null ? void 0 : y.menuVisibility,
                        m = y == null ? void 0 : y.pageVisibility,
                        h = function() {
                            if (y) {
                                var f = y;
                                return ne(T({}, f), {
                                    pageVisibility: f.ancestorPageHidden ? !1 : f.pageVisibility,
                                    menuVisibility: f.ancestorMenuHidden ? !1 : f.menuVisibility,
                                    menuVisibilityDisabled: f.ancestorMenuHidden,
                                    pageVisibilityDisabled: f.ancestorPageHidden,
                                    fullSlug: f.slugPrefix
                                })
                            }
                            return {
                                displayName: "",
                                id: "",
                                menuVisibility: !1,
                                pageVisibility: !1,
                                shortSlug: "",
                                fullSlug: "",
                                orderedItemIds: [],
                                slugPrefix: ""
                            }
                        },
                        b = function() {
                            var f = E(function() {
                                var G, ie;
                                return J(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return !((G = he.current) === null || G === void 0) && G.displayName ? (ge(he.current), [4, (0, j.updateCategory)(he.current, o.model.websiteId, o.model.collectionId, o.categoriesType).catch(function(a) {
                                                var l, u, p;
                                                throw !((l = (u = a.response.data) === null || u === void 0 || (p = u.details) === null || p === void 0 ? void 0 : p.shortSlug[0]) === null || l === void 0) && l.includes("properly formatted") && (_e((0, N.t)("URL slugs can only contain letters A-z and numbers 0-9.")), Ie((0, N.t)("Invalid characters"))), De(!0), a
                                            })]) : [3, 2];
                                        case 1:
                                            return ie = t.sent().categoryTree, o.onCategoryUpdate && o.onCategoryUpdate(ie), [3, 3];
                                        case 2:
                                            De(!0), t.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            });
                            return function() {
                                return f.apply(this, arguments)
                            }
                        }();
                    (0, R.useEffect)(function() {
                        var f = he.current.menuVisibility,
                            G = he.current.pageVisibility;
                        if (xe.current) {
                            xe.current = !1;
                            return
                        }
                        Te.current.menuVisibility !== f && (0, n.trackChangeCategorySetting)("filter-visibility", !!f, y, o.callerName), Te.current.pageVisibility !== G && (0, n.trackChangeCategorySetting)("page-visibility", !!G, y, o.callerName), b()
                    }, [i, m]);
                    var e = h(),
                        w = R.default.useMemo(function() {
                            return {
                                TextareaField: function(f) {
                                    return R.default.createElement(x.textarea, k({}, f, {
                                        onBlur: function() {
                                            Te.current.displayName !== he.current.displayName && ((0, n.trackChangeCategorySetting)("name", f.value, y, o.callerName), b())
                                        }
                                    }))
                                },
                                PrefixSuffixField: function(f) {
                                    return R.default.createElement(I.default, k({}, f, {
                                        onBlur: function() {
                                            Te.current.shortSlug !== he.current.shortSlug && ((0, n.trackChangeCategorySetting)("slug", f.value, y, o.callerName), b())
                                        }
                                    }))
                                },
                                addLinkToSiteNavButton: function() {
                                    return R.default.createElement(r.default, {
                                        callerName: o.callerName,
                                        displayName: e.displayName,
                                        fullUrl: "/".concat(o.collectionUrlId).concat(e.slugPrefix).concat(e.shortSlug),
                                        requestCloseOriginatingModal: o.requestCloseOriginatingModal,
                                        selectedCategory: y
                                    })
                                },
                                BooleanField: function(f) {
                                    return R.default.createElement(x.boolean, k({}, f, {
                                        onChange: function(G) {
                                            f.onChange(G)
                                        }
                                    }))
                                }
                            }
                        }, [o.collectionUrlId, o.requestCloseOriginatingModal]),
                        v = o.stylesOverride || _.default,
                        Z = function(f) {
                            var G = f.value;
                            re(T({}, y, G))
                        },
                        te = function() {
                            De(!1), _e(C), Ie(O)
                        };
                    return R.default.createElement("div", {
                        className: (0, B.default)(_.default.popupStyles, v.popupStyles)
                    }, R.default.createElement(z.default, {
                        isOpen: Ee,
                        onDismiss: te,
                        onRequestClose: te,
                        title: Me,
                        message: Se,
                        buttonLabel: (0, N.t)("OK")
                    }), Pe && Pe(), R.default.createElement("div", {
                        className: (0, B.default)(g({}, _.default.hidden, Pe))
                    }, R.default.createElement("div", {
                        className: (0, B.default)(_.default.closeAction)
                    }, R.default.createElement(L.BackButton, {
                        onClick: o.closeCategoryDetails
                    }, R.default.createElement(q.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Back")))), R.default.createElement("div", {
                        className: (0, B.default)(_.default.flyoutTitle, _.default.flyoutTitleSelected)
                    }, R.default.createElement(q.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Edit Category")), R.default.createElement("div", {
                        className: _.default.formView
                    }, R.default.createElement(X.default, {
                        components: T({
                            hidden: x.hidden,
                            spacer: x.spacer,
                            ContextField: x.context
                        }, w),
                        configurations: {
                            default: {
                                schema: V.default,
                                uiSchema: (0, ee.default)(o.categoriesType),
                                value: h()
                            }
                        },
                        panelClassName: _.default.editPanelMargin,
                        renderHeader: ve,
                        onChange: Z
                    })))
                };
            Ce.defaultProps = {
                categoriesType: "products"
            };
            var we = Ce
        },
        901921: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            var L = z(s(443384));

            function z(I) {
                return I && I.__esModule ? I : {
                    default: I
                }
            }
            var x = L.default
        },
        532749: function(pe, H) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return L
                }
            });
            var s = {
                    $schema: "http://json-schema.org/draft-04/schema",
                    properties: {
                        displayName: {
                            type: "string"
                        },
                        menuVisibility: {
                            type: "boolean"
                        },
                        pageVisibility: {
                            type: "boolean"
                        },
                        shortSlug: {
                            type: "string"
                        },
                        fullSlug: {
                            type: "string"
                        }
                    },
                    type: "object"
                },
                L = s
        },
        47676: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return ee
                }
            });
            var L = s(359530),
                z = I(s(852744)),
                x = s(247474);

            function I(j) {
                return j && j.__esModule ? j : {
                    default: j
                }
            }
            var B = function(j) {
                    switch (j) {
                        case x.NestedCategoriesType.VIDEO_COLLECTION:
                            return (0, L.t)("When enabled, this category will be visible in your video filters.");
                        case x.NestedCategoriesType.PRODUCTS:
                        default:
                            return (0, L.t)("When enabled, this Category will be visible in your store filters.")
                    }
                },
                R = function(j) {
                    return {
                        $mapping: "#/menuVisibility",
                        properties: {
                            className: z.default.filterPadding,
                            description: B(j),
                            label: (0, L.t)("Filter Visibility")
                        },
                        $conditional: {
                            $if: {
                                "#/menuVisibilityDisabled": {
                                    eq: !0
                                }
                            },
                            $then: {
                                properties: {
                                    isDisabled: !0
                                }
                            }
                        },
                        $sideEffects: [{
                            $if: {
                                $pointer: "#/menuVisibility",
                                $comparator: {
                                    eq: !0
                                }
                            },
                            $then: {
                                set: {
                                    $mapping: "#/pageVisibility",
                                    value: !0
                                }
                            }
                        }],
                        type: "BooleanField"
                    }
                },
                X = {
                    $mapping: "#/pageVisibility",
                    properties: {
                        label: (0, L.t)("Enable Page"),
                        description: (0, L.t)("Disabled pages can\u2019t be accessed by your site visitors.")
                    },
                    $conditional: {
                        $if: {
                            "#/pageVisibilityDisabled": {
                                eq: !0
                            }
                        },
                        $then: {
                            properties: {
                                isDisabled: !0
                            }
                        }
                    },
                    $sideEffects: [{
                        $if: {
                            $pointer: "#/pageVisibility",
                            $comparator: {
                                eq: !1
                            }
                        },
                        $then: {
                            set: {
                                $mapping: "#/menuVisibility",
                                value: !1
                            }
                        }
                    }],
                    type: "BooleanField"
                },
                q = {
                    $mapping: "#/shortSlug",
                    type: "PrefixSuffixField",
                    properties: {
                        label: (0, L.t)("URL slug"),
                        prefix: "/",
                        includePrefixOnChange: !1
                    },
                    $conditional: {
                        $if: {
                            "#/shortSlug": {
                                exists: !0
                            }
                        },
                        $then: {
                            properties: {
                                prefix: {
                                    $data: "#/fullSlug"
                                },
                                className: z.default.fullSlugPrefix,
                                includePrefixOnChange: !1
                            }
                        }
                    }
                },
                N = {
                    type: "addLinkToSiteNavButton"
                },
                r = {
                    $mapping: "#/displayName",
                    properties: {
                        label: (0, L.t)("Name")
                    },
                    type: "TextareaField"
                },
                _ = {
                    type: "spacer",
                    properties: {
                        gridMultiplier: 2
                    }
                },
                V = function() {
                    var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x.NestedCategoriesType.PRODUCTS;
                    return [r, q, _, X, R(j), _, N]
                },
                ee = V
        },
        506875: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "CustomDragLayer", {
                enumerable: !0,
                get: function() {
                    return X
                }
            });
            var L = I(s(174161)),
                z = I(s(852744)),
                x = s(772799);

            function I(q) {
                return q && q.__esModule ? q : {
                    default: q
                }
            }
            var B = {
                    position: "fixed",
                    pointerEvents: "none",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                },
                R = 18,
                X = function(q) {
                    var N = function() {
                            return L.default.createElement("div", {
                                className: z.default.dragLayerStyle
                            }, ee.name)
                        },
                        r = function() {
                            var c = q.parentOffset;
                            if (!n) return {
                                display: "none"
                            };
                            var D = n.x,
                                E = n.y;
                            j && c && (D = j.x - c.x, E = j.y - c.y - R);
                            var g = "translate(".concat(D, "px, ").concat(E, "px)");
                            return {
                                transform: g
                            }
                        },
                        _ = (0, x.useDragLayer)(function(d) {
                            return {
                                item: d.getItem(),
                                itemType: d.getItemType(),
                                initialOffset: d.getInitialSourceClientOffset(),
                                currentOffset: d.getSourceClientOffset(),
                                isDragging: d.isDragging(),
                                getClientOffset: d.getClientOffset()
                            }
                        }),
                        V = _.isDragging,
                        ee = _.item,
                        j = _.getClientOffset,
                        n = _.currentOffset;
                    return V ? L.default.createElement("div", {
                        style: B
                    }, L.default.createElement("div", {
                        style: r()
                    }, N())) : null
                }
        },
        680214: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return q
                }
            }), s(246857);
            var L = s(955896),
                z = s(892342),
                x = R(s(576866)),
                I = R(s(174161)),
                B = R(s(852744));

            function R(N) {
                return N && N.__esModule ? N : {
                    default: N
                }
            }
            var X = function(N) {
                    var r = N.category,
                        _ = N.toggleDropdownVisibility,
                        V = N.toggleAddCategoryInput,
                        ee = N.deleteCategory,
                        j = N.summonDetailedEditor,
                        n = N.treeDepth,
                        d = {
                            "&:hover": {
                                backgroundColor: "gray.900"
                            },
                            py: "2",
                            px: {
                                _: "4",
                                "mobile-*": "3"
                            },
                            border: "0",
                            borderWidth: "0"
                        },
                        c = r.level >= n;
                    return I.default.createElement(x.default, {
                        className: B.default.categoryPopover,
                        anchor: r.anchorNode,
                        isOpen: r.showEditingPopover || !1,
                        closeOnClickOutside: !0,
                        onRequestClose: _(!1, r),
                        position: "bottom-center",
                        ignoreTargetSelectors: [".".concat(B.default.disclosure)],
                        hideArrow: !0
                    }, I.default.createElement(z.Flex, {
                        flexDirection: "column",
                        py: 1
                    }, I.default.createElement(z.Button.Secondary, {
                        sx: d,
                        onClick: j(r),
                        "data-test": "category-dropdown-edit-btn"
                    }, I.default.createElement(L.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Edit")), !c && I.default.createElement(z.Button.Secondary, {
                        sx: d,
                        onClick: V(r),
                        disabled: c
                    }, I.default.createElement(L.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Add")), I.default.createElement(z.Button.Secondary, {
                        "data-test": "category-dropdown-delete-btn",
                        color: "red",
                        sx: d,
                        onClick: ee(r)
                    }, I.default.createElement(L.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Delete"))))
                },
                q = X
        },
        531445: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return N
                }
            });
            var L = s(174161);

            function z(r, _) {
                (_ == null || _ > r.length) && (_ = r.length);
                for (var V = 0, ee = new Array(_); V < _; V++) ee[V] = r[V];
                return ee
            }

            function x(r) {
                if (Array.isArray(r)) return r
            }

            function I(r, _) {
                var V = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
                if (V != null) {
                    var ee = [],
                        j = !0,
                        n = !1,
                        d, c;
                    try {
                        for (V = V.call(r); !(j = (d = V.next()).done) && (ee.push(d.value), !(_ && ee.length === _)); j = !0);
                    } catch (D) {
                        n = !0, c = D
                    } finally {
                        try {
                            !j && V.return != null && V.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                    return ee
                }
            }

            function B() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function R(r, _) {
                return x(r) || I(r, _) || X(r, _) || B()
            }

            function X(r, _) {
                if (r) {
                    if (typeof r == "string") return z(r, _);
                    var V = Object.prototype.toString.call(r).slice(8, -1);
                    if (V === "Object" && r.constructor && (V = r.constructor.name), V === "Map" || V === "Set") return Array.from(V);
                    if (V === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)) return z(r, _)
                }
            }
            var q = function(r) {
                    var _ = r.children,
                        V = R((0, L.useState)(!1), 2),
                        ee = V[0],
                        j = V[1];
                    return _({
                        isHovering: ee,
                        onMouseEnter: function() {
                            return j(!0)
                        },
                        onMouseLeave: function() {
                            return j(!1)
                        }
                    })
                },
                N = q
        },
        247474: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            });

            function L(i, m) {
                for (var h in m) Object.defineProperty(i, h, {
                    enumerable: !0,
                    get: m[h]
                })
            }
            L(H, {
                NestedCategoriesType: function() {
                    return Se
                },
                default: function() {
                    return Te
                }
            }), s(246857);
            var z = s(363437),
                x = s(153146),
                I = s(997220),
                B = s(892342),
                R = o(s(17759)),
                X = s(986456),
                q = o(s(342710)),
                N = o(s(845076)),
                r = C(s(174161)),
                _ = o(s(531445)),
                V = s(772799),
                ee = s(248890),
                j = s(955896),
                n = s(359530),
                d = s(641422),
                c = s(314185),
                D = o(s(901921)),
                E = o(s(663183)),
                g = o(s(852744)),
                k = o(s(680214)),
                Q = o(s(755341)),
                le = s(548362),
                W = s(506875),
                fe = s(752584);

            function P(i, m) {
                (m == null || m > i.length) && (m = i.length);
                for (var h = 0, b = new Array(m); h < m; h++) b[h] = i[h];
                return b
            }

            function T(i) {
                if (Array.isArray(i)) return P(i)
            }

            function F(i) {
                if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return i
            }

            function ne(i, m, h, b, e, w, v) {
                try {
                    var Z = i[w](v),
                        te = Z.value
                } catch (f) {
                    h(f);
                    return
                }
                Z.done ? m(te) : Promise.resolve(te).then(b, e)
            }

            function $(i) {
                return function() {
                    var m = this,
                        h = arguments;
                    return new Promise(function(b, e) {
                        var w = i.apply(m, h);

                        function v(te) {
                            ne(w, b, e, v, Z, "next", te)
                        }

                        function Z(te) {
                            ne(w, b, e, v, Z, "throw", te)
                        }
                        v(void 0)
                    })
                }
            }

            function oe(i, m) {
                if (!(i instanceof m)) throw new TypeError("Cannot call a class as a function")
            }

            function J(i, m, h) {
                return m in i ? Object.defineProperty(i, m, {
                    value: h,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[m] = h, i
            }

            function ve() {
                return ve = Object.assign || function(i) {
                    for (var m = 1; m < arguments.length; m++) {
                        var h = arguments[m];
                        for (var b in h) Object.prototype.hasOwnProperty.call(h, b) && (i[b] = h[b])
                    }
                    return i
                }, ve.apply(this, arguments)
            }

            function Ce(i) {
                return Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
                    return h.__proto__ || Object.getPrototypeOf(h)
                }, Ce(i)
            }

            function we(i, m) {
                if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
                i.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: i,
                        writable: !0,
                        configurable: !0
                    }
                }), m && U(i, m)
            }

            function o(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i) {
                if (typeof WeakMap != "function") return null;
                var m = new WeakMap,
                    h = new WeakMap;
                return (O = function(b) {
                    return b ? h : m
                })(i)
            }

            function C(i, m) {
                if (!m && i && i.__esModule) return i;
                if (i === null || typeof i != "object" && typeof i != "function") return {
                    default: i
                };
                var h = O(m);
                if (h && h.has(i)) return h.get(i);
                var b = {},
                    e = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var w in i)
                    if (w !== "default" && Object.prototype.hasOwnProperty.call(i, w)) {
                        var v = e ? Object.getOwnPropertyDescriptor(i, w) : null;
                        v && (v.get || v.set) ? Object.defineProperty(b, w, v) : b[w] = i[w]
                    }
                return b.default = i, h && h.set(i, b), b
            }

            function A(i) {
                if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i)
            }

            function y() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function re(i) {
                for (var m = 1; m < arguments.length; m++) {
                    var h = arguments[m] != null ? arguments[m] : {},
                        b = Object.keys(h);
                    typeof Object.getOwnPropertySymbols == "function" && (b = b.concat(Object.getOwnPropertySymbols(h).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(h, e).enumerable
                    }))), b.forEach(function(e) {
                        J(i, e, h[e])
                    })
                }
                return i
            }

            function Y(i, m) {
                var h = Object.keys(i);
                if (Object.getOwnPropertySymbols) {
                    var b = Object.getOwnPropertySymbols(i);
                    m && (b = b.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    })), h.push.apply(h, b)
                }
                return h
            }

            function se(i, m) {
                return m = m != null ? m : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(m)) : Y(Object(m)).forEach(function(h) {
                    Object.defineProperty(i, h, Object.getOwnPropertyDescriptor(m, h))
                }), i
            }

            function ge(i, m) {
                return m && (De(m) === "object" || typeof m == "function") ? m : F(i)
            }

            function U(i, m) {
                return U = Object.setPrototypeOf || function(b, e) {
                    return b.__proto__ = e, b
                }, U(i, m)
            }

            function Ee(i) {
                return T(i) || A(i) || Ae(i) || y()
            }
            var De = function(i) {
                "@swc/helpers - typeof";
                return i && typeof Symbol != "undefined" && i.constructor === Symbol ? "symbol" : typeof i
            };

            function Ae(i, m) {
                if (i) {
                    if (typeof i == "string") return P(i, m);
                    var h = Object.prototype.toString.call(i).slice(8, -1);
                    if (h === "Object" && i.constructor && (h = i.constructor.name), h === "Map" || h === "Set") return Array.from(h);
                    if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return P(i, m)
                }
            }

            function Me() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (i) {
                    return !1
                }
            }

            function Ie(i) {
                var m = Me();
                return function() {
                    var b = Ce(i),
                        e;
                    if (m) {
                        var w = Ce(this).constructor;
                        e = Reflect.construct(b, arguments, w)
                    } else e = b.apply(this, arguments);
                    return ge(this, e)
                }
            }
            var ye = function(i, m) {
                    var h, b, e, w, v = {
                        label: 0,
                        sent: function() {
                            if (e[0] & 1) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return w = {
                        next: Z(0),
                        throw: Z(1),
                        return: Z(2)
                    }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
                        return this
                    }), w;

                    function Z(f) {
                        return function(G) {
                            return te([f, G])
                        }
                    }

                    function te(f) {
                        if (h) throw new TypeError("Generator is already executing.");
                        for (; v;) try {
                            if (h = 1, b && (e = f[0] & 2 ? b.return : f[0] ? b.throw || ((e = b.return) && e.call(b), 0) : b.next) && !(e = e.call(b, f[1])).done) return e;
                            switch (b = 0, e && (f = [f[0] & 2, e.value]), f[0]) {
                                case 0:
                                case 1:
                                    e = f;
                                    break;
                                case 4:
                                    return v.label++, {
                                        value: f[1],
                                        done: !1
                                    };
                                case 5:
                                    v.label++, b = f[1], f = [0];
                                    continue;
                                case 7:
                                    f = v.ops.pop(), v.trys.pop();
                                    continue;
                                default:
                                    if (e = v.trys, !(e = e.length > 0 && e[e.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                                        v = 0;
                                        continue
                                    }
                                    if (f[0] === 3 && (!e || f[1] > e[0] && f[1] < e[3])) {
                                        v.label = f[1];
                                        break
                                    }
                                    if (f[0] === 6 && v.label < e[1]) {
                                        v.label = e[1], e = f;
                                        break
                                    }
                                    if (e && v.label < e[2]) {
                                        v.label = e[2], v.ops.push(f);
                                        break
                                    }
                                    e[2] && v.ops.pop(), v.trys.pop();
                                    continue
                            }
                            f = m.call(i, v)
                        } catch (G) {
                            f = [6, G], b = 0
                        } finally {
                            h = e = 0
                        }
                        if (f[0] & 5) throw f[1];
                        return {
                            value: f[0] ? f[1] : void 0,
                            done: !0
                        }
                    }
                },
                Se;
            (function(i) {
                i.VIDEO_COLLECTION = "lessons", i.PRODUCTS = "products"
            })(Se || (Se = {}));
            var _e = (0, I.withFocusManagedDivider)(x.Cell, x.Divider),
                xe = function(i) {
                    return r.default.createElement(_e, ve({
                        as: "label"
                    }, i))
                };

            function Pe(i) {
                return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            var he, Te = function(i) {
                "use strict";
                we(h, i);
                var m = Ie(h);

                function h() {
                    oe(this, h);
                    var e;
                    e = m.apply(this, arguments), e.defaultErrorTitle = (0, n.t)("Couldn't update category"), e.defaultErrorMessage = (0, n.t)("Try again"), e.createCategoryErrorTitle = (0, n.t)("Couldn't create category"), e.FLAT_TREE_DELETE_MESSAGE = (0, n.t)("Are you sure you would like to delete this category? All items with this category will be updated."), e.NESTED_TREE_DELETE_MESSAGE = (0, n.t)("Removing this category will also delete all of the sub-categories within it."), e.CATEGORY_CREATE_UNIQUE_ERROR_TYPE = "DisplayNameNotUniqueValidationError", e.CATEGORY_CREATE_LIMIT_ERROR_TYPE = "CategoryLimitExceededValidationError", e.CATEGORY_CREATE_CHARACTER_LIMIT_ERROR_TYPE = "FieldTooLongValidationError", e.state = {
                        categoriesApiResponse: {
                            categoryTree: []
                        },
                        showError: !1,
                        showErrorModal: !1,
                        categoriesTree: new d.CategoriesTree({}, {}),
                        newCategoryName: "",
                        searchTerm: "",
                        isHeaderIntersecting: !0,
                        selectedCategories: e.props.model.categoryIds || [],
                        showEmptyState: !1,
                        showAddField: !1,
                        showDetailedEditor: !1,
                        showRemoveCategoryConfirmation: !1,
                        firstTreeLoadPending: !0,
                        errorTitle: e.defaultErrorTitle,
                        errorMessage: e.defaultErrorMessage,
                        isLoadingNetworkRequest: !1,
                        deleteCategoryButtonDisabled: !1
                    }, e.dismissErrorModal = function() {
                        e.setState({
                            showErrorModal: !1
                        })
                    }, e.isValidDragOperation = function(t, a) {
                        if (!t || !a || a.id === t) return !1;
                        var l = e.state.categoriesTree.findNode(t);
                        return !(e.state.categoriesTree.isChild(l, a) || e.state.searchTerm)
                    }, e.cancelDrag = function(t) {
                        var a = e.state.categoriesTree.cloneTree();
                        a.findNode(t).isDragging = !1, e.clearHoveredState(a), e.setState({
                            categoriesTree: a
                        })
                    };
                    var w = F(e);
                    e.toggleHideChildren = function(t) {
                        return function() {
                            var a = $(function(l) {
                                var u, p;
                                return ye(this, function(S) {
                                    return l.preventDefault(), l.stopPropagation(), u = w.state.categoriesTree.cloneTree(), p = u.findNode(t.id), p.hideChildren = !p.hideChildren, w.setState({
                                        categoriesTree: u
                                    }), [2]
                                })
                            });
                            return function(l) {
                                return a.apply(this, arguments)
                            }
                        }()
                    }, e.initializeDragHoverState = function(t) {
                        var a = t.nodeId,
                            l = t.tree,
                            u = t.dropNode;
                        if (!(!a || !u) && u.id !== a) {
                            var p = e.state.categoriesTree.findNode(a);
                            if (!(e.state.categoriesTree.isChild(p, u) || e.state.searchTerm)) return p = l.findNode(a), u = l.findNode(u.id), p.isDragging = !0, {
                                node: p,
                                dropNodeInTree: u
                            }
                        }
                    }, e.renderCategoryHeaderText = function(t) {
                        return r.default.createElement(r.default.Fragment, null, t > 0 ? r.default.createElement(j.Plural, {
                            n: t,
                            forms: {
                                one: "1 category selected",
                                other: "{%n} categories selected"
                            },
                            project: "apps.App.Commerce.NestedCategoriesEditor"
                        }) : r.default.createElement(j.T, {
                            project: "apps.App.Commerce.NestedCategoriesEditor"
                        }, "Select a Category"))
                    }, e.renderNoCategoryState = function() {
                        return r.default.createElement(B.Flex, {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            flexGrow: e.state.showAddField ? 0 : 2
                        }, r.default.createElement(B.Text.Title, {
                            color: "gray.400",
                            textAlign: "center"
                        }, r.default.createElement(j.T, {
                            project: "apps.App.Commerce.NestedCategoriesEditor"
                        }, "No Categories")), r.default.createElement(B.Text.Body, {
                            color: "gray.400",
                            textAlign: "center"
                        }, r.default.createElement(j.T, {
                            project: "apps.App.Commerce.NestedCategoriesEditor"
                        }, "Organize products into categories like \u201CNew Arrivals\u201D or \u201CAccessories.\u201D")), r.default.createElement(B.Box, {
                            mt: 6
                        }, r.default.createElement(B.Button.Tertiary, {
                            onClick: function() {
                                e.setState({
                                    showEmptyState: !1,
                                    showAddField: !0
                                })
                            }
                        }, r.default.createElement(j.T, {
                            project: "apps.App.Commerce.NestedCategoriesEditor"
                        }, "Create Category"))))
                    }, e.renderToolTip = function(t) {
                        var a;
                        return r.default.createElement(_.default, null, function(l) {
                            var u = l.isHovering,
                                p = l.onMouseEnter,
                                S = l.onMouseLeave;
                            return r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                                className: g.default.iconContainer,
                                ref: function(M) {
                                    a = M
                                },
                                onMouseEnter: p,
                                "data-test": "hoverContainer",
                                onMouseLeave: S
                            }, r.default.createElement(X.Hide, {
                                "data-test": "hide-icon",
                                width: 16,
                                height: 16
                            })), r.default.createElement(x.Tooltip, {
                                "data-test": "tooltip",
                                anchor: a,
                                isOpen: u,
                                position: "top",
                                onRequestClose: function() {
                                    return null
                                }
                            }, t ? (0, n.t)("Disabled") : (0, n.t)("Not visible in filters")))
                        })
                    }, e.renderCategoryDropdownButton = function(t) {
                        return e.state.searchTerm ? null : r.default.createElement(r.Fragment, null, Object.keys(t.children || {}).length > 0 && r.default.createElement("button", {
                            className: (0, N.default)(g.default.expandCollapse),
                            onClick: e.toggleHideChildren(t),
                            "data-test": "expand-icon"
                        }, r.default.createElement(X.ChevronSmallDown, {
                            className: (0, N.default)(g.default.expandIcon, J({}, g.default.rotateChevron, t.hideChildren))
                        })))
                    }, e.clearHoveredState = function(t) {
                        t.getAllCategories().forEach(function(a) {
                            a.isPreviewParent = !1, a.isReorderAfter = !1, a.isReorderBefore = !1
                        })
                    };
                    var v = F(e);
                    e.reorderDrop = function() {
                        var t = $(function(a, l, u) {
                            var p, S, M, K, ue, de, ce, be;
                            return ye(this, function(ae) {
                                switch (ae.label) {
                                    case 0:
                                        if (!v.isValidDragOperation(a, l)) return v.cancelDrag(a), [2];
                                        if (u || v.canReorderAfter(l, a) || (u = !0), p = v.state.categoriesTree.cloneTree(), v.clearHoveredState(p), S = p.findNode(a), l = p.findNode(l.id) || S, S.isDragging = !1, S.hideChildren = !0, M = p.findNode(S.parentCategoryId) || v.state.rootCategory, K = p.findNode(l.parentCategoryId) || v.state.rootCategory, M !== K && !v.isCombinedTreeDepthBelowLimit(K, S)) return v.cancelDrag(a), [2];
                                        if (l.id === a) return [2];
                                        if (l.displayIndex > S.displayIndex && K === M ? ue = u ? l.displayIndex - 1 : l.displayIndex : ue = u ? l.displayIndex : l.displayIndex + 1, ue === S.displayIndex && K === M) return v.cancelDrag(a), [2];
                                        S.displayIndex = ue, S.parentCategoryId = K.id, S.parentNode = K, ae.label = 1;
                                    case 1:
                                        return ae.trys.push([1, , 8, 9]), v.setState({
                                            isLoadingNetworkRequest: !0
                                        }), M !== K ? [3, 3] : [4, (0, c.updateCategory)(S, v.props.model.websiteId, v.props.model.collectionId, v.props.categoriesType).catch(function(Ne) {
                                            throw v.setErrorState(Ne), Ne
                                        })];
                                    case 2:
                                        ae.sent(), ae.label = 3;
                                    case 3:
                                        return M === K ? [3, 5] : (de = M.level || 0, ce = K.level || 0, (0, fe.trackChangeCategoryNesting)(S, de + 1, ce + 1, v.props.callerName), be = v.props.model.collectionId, [4, (0, c.reparentCategory)(a, be, S.parentCategoryId, S.displayIndex)]);
                                    case 4:
                                        return ae.sent(), [3, 6];
                                    case 5:
                                        (0, fe.trackReorderCategory)(S, S.displayIndex, v.props.callerName), ae.label = 6;
                                    case 6:
                                        return [4, v.updateCategories()];
                                    case 7:
                                        return ae.sent(), [3, 9];
                                    case 8:
                                        return v.setState({
                                            isLoadingNetworkRequest: !1
                                        }), [7];
                                    case 9:
                                        return [2]
                                }
                            })
                        });
                        return function(a, l, u) {
                            return t.apply(this, arguments)
                        }
                    }(), e.reorderBefore = function(t, a) {
                        e.reorder(t, a, !0)
                    }, e.reorder = function(t, a, l) {
                        if (e.isValidDragOperation(t, a)) {
                            l || e.canReorderAfter(a, t) || (l = !0);
                            var u = e.state.categoriesTree.cloneTree(),
                                p = e.initializeDragHoverState({
                                    nodeId: t,
                                    dropNode: a,
                                    tree: u
                                });
                            if (p) {
                                e.clearHoveredState(u);
                                var S = p.node;
                                S.isDragging = !0, l ? a.isReorderBefore = !0 : a.isReorderAfter = !0, e.setState({
                                    categoriesTree: u
                                })
                            }
                        }
                    }, e.reparentHover = function(t, a) {
                        if (!(!e.isValidDragOperation(t, a) || !e.canReparent(a, e.state.categoriesTree.findNode(t)))) {
                            var l = e.state.categoriesTree.cloneTree();
                            e.clearHoveredState(l);
                            var u = e.initializeDragHoverState({
                                nodeId: t,
                                dropNode: a,
                                tree: l
                            });
                            if (u) {
                                var p = u.node,
                                    S = u.dropNodeInTree,
                                    M = S;
                                p.isDragging = !0, M.isPreviewParent = !0, e.setState({
                                    categoriesTree: l
                                })
                            }
                        }
                    };
                    var Z = F(e);
                    e.reparentDrop = function() {
                        var t = $(function(a, l) {
                            var u, p, S;
                            return ye(this, function(M) {
                                switch (M.label) {
                                    case 0:
                                        if (!Z.isValidDragOperation(a, l) || !Z.canReparent(l, Z.state.categoriesTree.findNode(a))) return Z.cancelDrag(a), [2];
                                        M.label = 1;
                                    case 1:
                                        return M.trys.push([1, , 4, 5]), Z.setState({
                                            isLoadingNetworkRequest: !0
                                        }), u = Z.state.categoriesTree.cloneTree(), p = u.findNode(a), p = u.findNode(a), p.parentCategoryId = l.id, p.parentNode = l, p.displayIndex = 1, S = Z.props.model.collectionId, [4, (0, c.reparentCategory)(a, S, l.id, p.displayIndex)];
                                    case 2:
                                        return M.sent(), [4, Z.updateCategories()];
                                    case 3:
                                        return M.sent(), (0, fe.trackChangeCategoryNesting)(p, p.level || 1, (p.parentNode.level || 0) + 1, Z.props.callerName), [3, 5];
                                    case 4:
                                        return Z.setState({
                                            isLoadingNetworkRequest: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        });
                        return function(a, l) {
                            return t.apply(this, arguments)
                        }
                    }();
                    var te = F(e);
                    e.closeCategoryDetails = $(function() {
                        return ye(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return te.setState({
                                        showDetailedEditor: !1
                                    }), [4, te.updateCategories()];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    });
                    var f = F(e);
                    e.deleteCategory = function(t) {
                        return $(function() {
                            var a, l, u;
                            return ye(this, function(p) {
                                switch (p.label) {
                                    case 0:
                                        return p.trys.push([0, , 2, 4]), f.setState({
                                            isLoadingNetworkRequest: !0,
                                            deleteCategoryButtonDisabled: !0
                                        }), a = f.props.model.collectionId, [4, (0, c.deleteCategory)(t.id, a, f.props.model.websiteId, f.props.categoriesType).catch(function(S) {
                                            throw f.setErrorState(S), S
                                        })];
                                    case 1:
                                        return p.sent(), l = Ee(f.state.selectedCategories), u = f.state.categoriesTree.getSelectedSubnodes(t, new Set([])), l = l.filter(function(S) {
                                            return !u.has(S)
                                        }), t.parentCategoryId && l.push(t.parentCategoryId), f.setState({
                                            selectedCategories: l,
                                            showRemoveCategoryConfirmation: !1,
                                            deleteCategory: void 0
                                        }), (0, fe.trackDeleteCategory)(t, f.props.callerName), [3, 4];
                                    case 2:
                                        return [4, f.updateCategories()];
                                    case 3:
                                        return p.sent(), f.setState({
                                            isLoadingNetworkRequest: !1,
                                            deleteCategory: void 0,
                                            showRemoveCategoryConfirmation: !1,
                                            deleteCategoryButtonDisabled: !1
                                        }), [7];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.deleteCategoryModal = function(t) {
                        return function() {
                            var a = e.state.categoriesTree.cloneTree(),
                                l = a.findNode(t.id);
                            l.showEditingPopover = !1, e.setState({
                                showRemoveCategoryConfirmation: !0,
                                categoriesTree: a,
                                deleteCategory: t
                            })
                        }
                    }, e.cancelDelete = function() {
                        e.setState({
                            showRemoveCategoryConfirmation: !1,
                            deleteCategory: void 0
                        })
                    }, e.toggleAddCategoryInput = function(t) {
                        return function(a) {
                            if (a.preventDefault(), a.stopPropagation(), t) {
                                var l = e.state.categoriesTree.cloneTree(),
                                    u = l.findNode(t.id);
                                u.showEditingPopover = !1, u.showAddField = !u.showAddField, e.state.parentToAdd && e.state.parentToAdd.id !== t.id && l.findNode(e.state.parentToAdd.id) && (l.findNode(e.state.parentToAdd.id).showAddField = !1), e.setState({
                                    categoriesTree: l,
                                    newCategoryName: "",
                                    parentToAdd: u,
                                    showAddField: !1
                                })
                            } else {
                                var p = e.state.categoriesTree.cloneTree();
                                if (e.state.parentToAdd) {
                                    var S = p.findNode(e.state.parentToAdd.id);
                                    S.showAddField = !1
                                }
                                e.setState({
                                    categoriesTree: p,
                                    newCategoryName: "",
                                    parentToAdd: void 0,
                                    showAddField: !e.state.showAddField
                                })
                            }
                        }
                    }, e.toggleCategory = function(t) {
                        var a = F(e);
                        return $(function() {
                            var l, u, p, S, M, K, ue, de, ce, be, ae, Ne, Le, je, He, Oe, Re;
                            return ye(this, function(Be) {
                                if (l = a.state.categoriesTree.cloneTree(), u = l.findNode(t.id), p = a.props, S = p.toggleCategory, !u.id) return [2];
                                if (M = a.props.model, K = M.websiteId, ue = M.collectionId, de = M.productId, ce = M.productTitle, be = M.productType, ae = Ee(a.state.selectedCategories), u.selected) u.parentNode && (Ne = a.state.rootCategory, Le = u.parentCategoryId === Ne.id ? a.state.categoriesTree.getTopLevelCategoryIds() : Object.values(a.state.categoriesTree.findNode(u.parentCategoryId).children).map(function(me) {
                                    return me.id
                                }), je = Le.some(function(me) {
                                    return l.findNode(me).selected && me !== u.id
                                }), je || (u.parentNode.selected = !0, ae.push(u.parentNode.id))), He = l.getSelectedSubnodes(u, new Set([])), (0, fe.trackRemoveCategory)(t, a.props.callerName, {
                                    websiteId: K,
                                    collectionId: ue,
                                    productId: de,
                                    productTitle: ce,
                                    productType: be
                                }), S || (0, c.removeProductFromCategories)([u.id], de, K, ue, a.props.categoriesType).then(function() {
                                    a.updateCategories()
                                }).catch(function(me) {
                                    throw a.setErrorState(me), me
                                }), ae = ae.filter(function(me) {
                                    return !He.has(me)
                                });
                                else {
                                    for ((0, fe.trackAssignCategory)(u, a.props.callerName, {
                                            websiteId: K,
                                            collectionId: ue,
                                            productId: de,
                                            productTitle: ce,
                                            productType: be
                                        }), Oe = u, Re = null; Oe.parentNode;)
                                        if (Oe = Oe.parentNode, ae.includes(Oe.id)) {
                                            Re = Oe;
                                            break
                                        }
                                    S || (0, c.assignCategory)([u.id], de, K, ue, a.props.categoriesType).then(function() {
                                        a.updateCategories()
                                    }).catch(function(me) {
                                        throw a.setErrorState(me), me
                                    }), ae.push(u.id), u.selected = !0, Re && (Re.selected = !1, ae = ae.filter(function(me) {
                                        return me !== Re.id
                                    }))
                                }
                                return S == null || S(Ee(ae).concat([a.state.rootCategory.id])), a.setState({
                                    categoriesTree: l,
                                    selectedCategories: ae
                                }, function() {
                                    return a.refreshTree()
                                }), [2]
                            })
                        })
                    }, e.updateCategoryName = function(t) {
                        e.setState({
                            newCategoryName: t.target.value
                        })
                    }, e.searchCategories = function(t) {
                        e.setState({
                            searchTerm: t
                        })
                    }, e.canReorderAfter = function(t, a) {
                        return t.hideChildren || t.id === a || Object.keys(t.children).length === 0 || Object.keys(t.children).length === 1 && t.children[a]
                    }, e.isCombinedTreeDepthBelowLimit = function(t, a) {
                        var l = e.props.maxTreeDepth;
                        if (t.level >= l) return !1;
                        if (a) {
                            var u = e.state.categoriesTree.getSubTreeDepth(a);
                            if (u + t.level > l) return !1
                        }
                        return !0
                    }, e.canReparent = function(t, a) {
                        return e.isCombinedTreeDepthBelowLimit(t, a) ? !!(!t.children || Object.keys(t.children).length === 0 || t.hideChildren) : !1
                    }, e.createMarkup = function(t, a, l, u) {
                        var p, S = (0, N.default)((p = {}, J(p, g.default.hidden, !l), J(p, g.default.childCategory, a), J(p, g.default.category, !a), p)),
                            M, K = (0, N.default)(g.default.separator, (M = {}, J(M, g.default.hovered, t.isPreviewParent), J(M, g.default.reorderAfter, t.isReorderAfter), J(M, g.default.reorderBefore, t.isReorderBefore), J(M, g.default.translucent, t.isDragging), J(M, g.default.grabbing, e.isDragInProgress()), M)),
                            ue = !t.pageVisibility || t.ancestorPageHidden,
                            de = !t.menuVisibility || t.ancestorMenuHidden;
                        return r.default.createElement("div", {
                            className: "".concat(S),
                            key: t.id,
                            "data-test": "category-list-item"
                        }, r.default.createElement("div", null, r.default.createElement(E.default, {
                            reorderDrop: e.reorderDrop,
                            canReparent: e.canReparent(t),
                            reparentDrop: e.reparentDrop,
                            preventDrag: e.state.searchTerm,
                            reorderBefore: e.reorderBefore,
                            reparentHover: e.reparentHover,
                            cancelDrag: e.cancelDrag,
                            item: t,
                            reorderAfter: e.reorder,
                            key: t.id
                        }, r.default.createElement("div", {
                            className: "".concat(K),
                            "data-test": "separator"
                        }, r.default.createElement("div", {
                            className: g.default.dragHandleContainer
                        }, r.default.createElement(X.Drag, {
                            className: (0, N.default)(g.default.dragIcon),
                            tabIndex: 0
                        })), e.renderCategoryDropdownButton(t), r.default.createElement("div", {
                            className: (0, N.default)(J({}, g.default.translucent, u))
                        }, e.boldString(t.displayName)), r.default.createElement("div", {
                            className: g.default.buttonAlignment
                        }, (ue || de) && e.renderToolTip(ue), !e.isDragInProgress() && r.default.createElement("button", {
                            className: (0, N.default)(g.default.iconContainer),
                            "data-test": "category-dropdown-options",
                            onClick: e.toggleDropdownVisibility(!0, t),
                            ref: function(ce) {
                                t.anchorNode = ce
                            }
                        }, r.default.createElement("div", {
                            className: (0, N.default)(J({}, g.default.openDisclosure, t.showEditingPopover), g.default.disclosure)
                        }, r.default.createElement(X.Ellipses, {
                            width: 16,
                            height: 16
                        }))), !e.isDragInProgress() && !e.props.hideCheckbox && r.default.createElement(R.default, {
                            className: g.default.iconContainer,
                            "data-test": "category-checkbox",
                            value: t.selected,
                            onChange: e.toggleCategory(t)
                        }), r.default.createElement("div", {
                            onClick: e.overrideProductEditorClick
                        }, r.default.createElement(k.default, {
                            category: t,
                            toggleDropdownVisibility: e.toggleDropdownVisibility,
                            toggleAddCategoryInput: e.toggleAddCategoryInput,
                            deleteCategory: e.deleteCategoryModal,
                            summonDetailedEditor: e.props.customSummonDetailedEditor || e.summonDetailedEditor,
                            treeDepth: e.props.maxTreeDepth
                        })))))), t.showAddField && !e.state.searchTerm && r.default.createElement("div", {
                            className: g.default.childCategory
                        }, r.default.createElement("form", {
                            onSubmit: e.addCategory
                        }, r.default.createElement("input", {
                            autoFocus: !0,
                            className: (0, N.default)(g.default.inputWidth),
                            value: e.state.newCategoryName,
                            placeholder: (0, n.t)("Add Category\u2026"),
                            onBlur: e.addCategory,
                            onChange: e.updateCategoryName,
                            onClick: e.overrideProductEditorClick
                        }))), Object.keys(t.children || {}).length > 0 ? Object.values(t.children || {}).sort(e.sortCategories).map(function(ce) {
                            var be = !1,
                                ae = !1;
                            return ce = e.state.categoriesTree.findNode(ce.id), (ce.displayName.toUpperCase().includes(e.state.searchTerm.toUpperCase()) || e.state.categoriesTree.descendantNameContainsString(ce, e.state.searchTerm)) && (be = !0, ce.displayName.toUpperCase().includes(e.state.searchTerm.toUpperCase()) || (ae = !0)), !t.hideChildren && !t.isDragging && e.createMarkup(ce, !0, be, ae)
                        }) : null)
                    }, e.boldString = function(t) {
                        if (!e.state.searchTerm) return t;
                        var a = e.state.searchTerm,
                            l = new RegExp("(".concat(Pe(a), ")"), "gi"),
                            u = t.split(l);
                        return u.map(function(p, S) {
                            return p.toUpperCase() === a.toUpperCase() ? r.default.createElement("b", {
                                key: "".concat(p, "_").concat(S)
                            }, p) : p
                        })
                    }, e.isDragInProgress = function() {
                        return e.state.categoriesTree.getAllCategories().some(function(t) {
                            return t.isDragging || !1
                        })
                    }, e.toggleDropdownVisibility = function(t, a) {
                        return function(l) {
                            l.preventDefault(), l.stopPropagation();
                            var u = e.state.categoriesTree.cloneTree(),
                                p = u.findNode(a.id);
                            u.getAllCategories().forEach(function(S) {
                                S.showEditingPopover = !1
                            }), p.showEditingPopover ? p.showEditingPopover = !1 : p.showEditingPopover = t, e.setState({
                                categoriesTree: u
                            })
                        }
                    }, e.summonDetailedEditor = function(t) {
                        return function(a) {
                            a.preventDefault(), a.stopPropagation(), t.showEditingPopover = !1, e.setState({
                                selectedCategory: t,
                                showDetailedEditor: !0
                            })
                        }
                    }, e.overrideProductEditorClick = function(t) {
                        t.stopPropagation()
                    }, e.sortCategoriesByReference = function(t, a) {
                        var l = e.state.categoriesTree.findNode(t),
                            u = e.state.categoriesTree.findNode(a);
                        return e.sortCategories(l, u)
                    }, e.sortCategories = function(t, a) {
                        return t.displayIndex < a.displayIndex ? -1 : 1
                    };
                    var G = F(e);
                    e.addCategory = function() {
                        var t = $(function(a) {
                            var l, u, p, S;
                            return ye(this, function(M) {
                                switch (M.label) {
                                    case 0:
                                        a.preventDefault(), a.stopPropagation(), M.label = 1;
                                    case 1:
                                        return M.trys.push([1, , 5, 6]), G.setState({
                                            isLoadingNetworkRequest: !0
                                        }), l = G.state.parentToAdd, u = G.state.searchTerm || G.state.newCategoryName, u && u.length > 0 ? (p = {
                                            displayName: u,
                                            id: (l == null ? void 0 : l.id) || G.state.rootCategory.id,
                                            shortSlug: u.toLowerCase().trim().replace(/\s+/g, ""),
                                            orderedItemIds: []
                                        }, [4, (0, c.createCategories)(p, G.props.model.websiteId, G.props.model.collectionId, G.props.categoriesType).catch(function(K) {
                                            throw G.setErrorState(K, u), K
                                        })]) : [3, 4];
                                    case 2:
                                        return S = M.sent(), G.setState({
                                            searchTerm: "",
                                            newCategoryName: "",
                                            parentToAdd: void 0,
                                            showAddField: !1
                                        }), [4, G.updateCategories()];
                                    case 3:
                                        M.sent(), (0, fe.trackCreateCategory)(p, G.props.callerName), G.props.callerName === "product-composer" && G.toggleCategory(S)(), M.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return G.setState({
                                            isLoadingNetworkRequest: !1
                                        }), [7];
                                    case 6:
                                        return [2]
                                }
                            })
                        });
                        return function(a) {
                            return t.apply(this, arguments)
                        }
                    }();
                    var ie = F(e);
                    return e.updateCategories = $(function() {
                        var t, a;
                        return ye(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, (0, c.getCategories)(ie.props.model.collectionId, ie.props.model.websiteId, ie.props.categoriesType).catch(function(u) {
                                        throw ie.setErrorState(u), u
                                    })];
                                case 1:
                                    return t = l.sent(), a = t.categoryTree[0], ie.setState({
                                        showEmptyState: ie.props.isEmptyState && t.categoryTree.length < 2,
                                        showAddField: !ie.props.isEmptyState && t.categoryTree.length < 2,
                                        categoriesApiResponse: t,
                                        rootCategory: se(re({}, a), {
                                            menuVisibility: !a.menuHidden,
                                            pageVisibility: a.pageRendering === "LIST_VIEW"
                                        }),
                                        showError: !1
                                    }, function() {
                                        ie.refreshTree()
                                    }), [2]
                            }
                        })
                    }), e.setNames = function(t) {
                        if (e.props.setCategories) {
                            var a = t.getAllCategories().filter(function(l) {
                                return l.selected
                            }).map(function(l) {
                                return {
                                    id: l.id,
                                    name: l.displayName
                                }
                            });
                            e.props.setCategories(a)
                        }
                    }, e.closeModal = function() {
                        var t = e.props.closeModal;
                        t()
                    }, e.setErrorState = function(t) {
                        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Category",
                            l, u, p, S, M, K, ue, de = (l = t.response) === null || l === void 0 || (u = l.data) === null || u === void 0 || (p = u.details) === null || p === void 0 ? void 0 : p["detail.errors"],
                            ce = (de == null || (S = de.displayName) === null || S === void 0 || (M = S[0]) === null || M === void 0 ? void 0 : M.type) || (de == null || (K = de.misc) === null || K === void 0 || (ue = K[0]) === null || ue === void 0 ? void 0 : ue.type);
                        switch (ce) {
                            case e.CATEGORY_CREATE_UNIQUE_ERROR_TYPE:
                                e.setState({
                                    showErrorModal: !0,
                                    errorTitle: (0, n.t)("{name} already exists", {
                                        name: a
                                    }),
                                    errorMessage: (0, n.t)("Please create a unique name for your new category.")
                                });
                                break;
                            case e.CATEGORY_CREATE_LIMIT_ERROR_TYPE:
                                e.setState({
                                    showErrorModal: !0,
                                    errorTitle: e.createCategoryErrorTitle,
                                    errorMessage: (0, n.t)("The limit of 1,000 categories has been exceeded.")
                                });
                                break;
                            case e.CATEGORY_CREATE_CHARACTER_LIMIT_ERROR_TYPE:
                                e.setState({
                                    showErrorModal: !0,
                                    errorTitle: e.createCategoryErrorTitle,
                                    errorMessage: (0, n.t)("Display name must be less than 100 characters.")
                                });
                                break;
                            default:
                                e.setState({
                                    showErrorModal: !0,
                                    errorTitle: e.defaultErrorTitle,
                                    errorMessage: e.defaultErrorMessage
                                })
                        }
                    }, e
                }
                var b = h.prototype;
                return b.componentDidMount = function() {
                    var w = this;
                    return $(function() {
                        return ye(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    return w.props.callerName !== "product-settings-modal" && (0, fe.trackUserViewProductCollectionSettingsPanel)("nested-categories", "product-editor", w.props.callerName), [4, w.updateCategories().then(function() {
                                        w.setState({
                                            firstTreeLoadPending: !1
                                        })
                                    }).catch(function() {
                                        w.setState({
                                            showError: !0,
                                            firstTreeLoadPending: !1
                                        })
                                    })];
                                case 1:
                                    return v.sent(), [2]
                            }
                        })
                    })()
                }, b.componentWillUnmount = function() {
                    this.observer && this.observer.disconnect()
                }, b.componentDidUpdate = function() {
                    var w = this;
                    this.scrollTarget && this.scrollContainer && !this.observer && this.observer !== null && (this.observer = null, (0, Q.default)().then(function() {
                        var v = {
                                root: w.scrollContainer,
                                threshold: .5
                            },
                            Z = w.scrollTarget,
                            te = function(f) {
                                w.setState({
                                    isHeaderIntersecting: f[0].isIntersecting
                                })
                            };
                        w.observer = new IntersectionObserver(te, v), Z && w.observer.observe(Z)
                    }))
                }, b.renderHeader = function(w) {
                    return this.props.renderHeader ? this.props.renderHeader() : r.default.createElement("div", {
                        className: g.default.flyoutHeader
                    }, r.default.createElement("div", {
                        className: (0, N.default)(J({}, g.default.flyoutTitleSelected, w > 0), g.default.flyoutTitle, g.default.flyoutTitleColor)
                    }, this.renderCategoryHeaderText(w)))
                }, b.render = function() {
                    var w = this,
                        v, Z = this.state.categoriesTree,
                        te = this.props.stylesOverride || g.default,
                        f = Z.getTopLevelCategoryIds(),
                        G = Z.getAllCategories().filter(function(ie) {
                            return ie.selected
                        }).length;
                    return r.default.createElement("div", {
                        onClick: this.overrideProductEditorClick,
                        ref: function(ie) {
                            w.topLevelContainer = ie
                        }
                    }, r.default.createElement(V.DndProvider, {
                        backend: ee.HTML5Backend
                    }, r.default.createElement(q.default, {
                        isOpen: this.state.showErrorModal,
                        onDismiss: this.dismissErrorModal,
                        onRequestClose: this.dismissErrorModal,
                        title: this.state.errorTitle,
                        message: this.state.errorMessage,
                        buttonLabel: (0, n.t)("OK")
                    }), r.default.createElement(W.CustomDragLayer, {
                        parentOffset: this.props.containerNode ? this.props.containerNode.getBoundingClientRect() : (v = this.topLevelContainer) === null || v === void 0 ? void 0 : v.getBoundingClientRect()
                    }), r.default.createElement("div", {
                        className: (0, N.default)(J({}, g.default.showEditor, this.state.showDetailedEditor))
                    }, r.default.createElement("div", {
                        className: g.default.fixedWidth
                    }, r.default.createElement("div", {
                        className: (0, N.default)(g.default.popupStyles, te.popupStyles)
                    }, !this.props.renderHeader && r.default.createElement("div", {
                        className: (0, N.default)(g.default.flyoutHeader, g.default.closeAction)
                    }, r.default.createElement(B.Button.Tertiary, {
                        onClick: this.closeModal,
                        "data-test": "categories-editor-done-btn"
                    }, r.default.createElement(j.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Done")), !this.state.isHeaderIntersecting && !this.state.showError && !this.props.isLoading && r.default.createElement("div", {
                        className: (0, N.default)(J({}, g.default.flyoutTitleSelected, G > 0), g.default.flyoutTitleColor)
                    }, this.renderCategoryHeaderText(G))), (this.props.isLoading || this.state.firstTreeLoadPending) && r.default.createElement("div", {
                        className: (0, N.default)(g.default.flyoutWidth, te.flyoutWidth, g.default.showLoading)
                    }, r.default.createElement(x.ActivityIndicator, null)), this.state.showError && r.default.createElement("div", {
                        className: (0, N.default)(g.default.flyoutWidth, te.flyoutWidth, g.default.showError)
                    }, r.default.createElement("div", null, r.default.createElement(B.Text.Title, {
                        css: {
                            color: z.colors.gray[400]
                        }
                    }, r.default.createElement(j.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Couldn't Load Categories"))), r.default.createElement("div", null, r.default.createElement(B.Text.Subtitle, {
                        css: {
                            color: z.colors.gray[400]
                        }
                    }, r.default.createElement(j.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Try reloading."))), r.default.createElement("button", {
                        className: g.default.upperCase,
                        onClick: this.updateCategories
                    }, r.default.createElement(B.Text.Caption, {
                        css: {
                            color: z.colors.gray[100]
                        }
                    }, r.default.createElement(j.T, {
                        project: "apps.App.Commerce.NestedCategoriesEditor"
                    }, "Reload")))), !this.state.showError && !this.props.isLoading && !this.state.firstTreeLoadPending && r.default.createElement("div", {
                        className: (0, N.default)(g.default.flyoutWidth, te.flyoutWidth),
                        ref: function(ie) {
                            w.scrollContainer = ie
                        }
                    }, this.state.showEmptyState ? this.renderNoCategoryState() : r.default.createElement(r.default.Fragment, null, this.props.renderHeader ? this.renderHeader(G) : r.default.createElement("div", {
                        ref: function(ie) {
                            w.scrollTarget = ie
                        }
                    }, this.renderHeader(G)), r.default.createElement("form", {
                        onSubmit: this.addCategory,
                        className: (0, N.default)(g.default.searchContainer, g.default.pointer)
                    }, r.default.createElement(xe, {
                        minHeight: "sizes.200",
                        paddingX: "14px",
                        paddingY: this.state.searchTerm ? "4px" : 2,
                        exteriorPre: r.default.createElement(X.Search, null),
                        body: r.default.createElement(x.TextInput, {
                            autoFocus: !0,
                            value: this.state.searchTerm,
                            sx: {
                                textOverflow: "ellipsis"
                            },
                            onChange: this.searchCategories,
                            "data-test": "pc2-add-category",
                            placeholder: f.length > 0 ? (0, n.t)("Add or Search for a Category") : (0, n.t)("Add a Category")
                        }),
                        exteriorAccessory: this.state.searchTerm && r.default.createElement(B.Button.Tertiary, {
                            type: "submit",
                            "data-test": "add-category-button",
                            disabled: !this.state.searchTerm
                        }, r.default.createElement(j.T, {
                            project: "apps.App.Commerce.NestedCategoriesEditor"
                        }, "Add"))
                    }))), this.state.isLoadingNetworkRequest && r.default.createElement("div", {
                        className: (0, N.default)(g.default.flyoutWidth, te.flyoutWidth, g.default.showLoading)
                    }, r.default.createElement(x.ActivityIndicator, null)), !this.state.showError && !this.props.isLoading && !this.state.isLoadingNetworkRequest && f.sort(this.sortCategoriesByReference).map(function(ie) {
                        var t = Z.findNode(ie),
                            a = !1,
                            l = !1;
                        return (t.displayName.toUpperCase().includes(w.state.searchTerm.toUpperCase()) || Z.descendantNameContainsString(t, w.state.searchTerm)) && (a = !0, t.displayName.toUpperCase().includes(w.state.searchTerm.toUpperCase()) || (l = !0)), w.createMarkup(t, !1, a, l)
                    }), this.state.showRemoveCategoryConfirmation && this.renderRemoveConfirmation()))), r.default.createElement("div", {
                        className: (0, N.default)(g.default.fixedWidth, J({}, g.default.hideDetailedEditor, !this.state.showDetailedEditor))
                    }, this.state.showDetailedEditor && r.default.createElement(D.default, {
                        categoriesType: this.props.categoriesType,
                        callerName: this.props.callerName,
                        collectionUrlId: this.props.collectionUrlId,
                        selectedCategory: this.state.selectedCategory,
                        requestCloseOriginatingModal: this.props.requestCloseOriginatingModal,
                        stylesOverride: te,
                        closeCategoryDetails: this.closeCategoryDetails,
                        model: this.props.model
                    })))))
                }, b.renderRemoveConfirmation = function() {
                    var w = this,
                        v = this.state.deleteCategoryButtonDisabled;
                    return r.default.createElement(x.Modal.Transition, null, this.state.showRemoveCategoryConfirmation && r.default.createElement(x.Modal, {
                        onRequestClose: this.cancelDelete,
                        className: g.default.categoryPopover
                    }, r.default.createElement(x.Modal.Overlay, null), r.default.createElement(x.Modal.Position, {
                        position: "center"
                    }, r.default.createElement(le.AlertDialog, {
                        title: (0, n.t)("Delete category?"),
                        message: this.props.maxTreeDepth === 1 ? this.FLAT_TREE_DELETE_MESSAGE : this.NESTED_TREE_DELETE_MESSAGE,
                        buttons: [function() {
                            return r.default.createElement(le.AlertDialog.Button, {
                                key: "Cancel",
                                onClick: w.cancelDelete
                            }, (0, n.t)("Cancel"))
                        }, function() {
                            return r.default.createElement(le.AlertDialog.Button, {
                                key: "Confirm",
                                onClick: v ? function() {} : w.deleteCategory(w.state.deleteCategory),
                                "data-test": "confirm-delete-category"
                            }, (0, n.t)("Delete"))
                        }]
                    }))))
                }, b.refreshTree = function() {
                    var w = this.state.categoriesApiResponse.categoryTree,
                        v = d.CategoriesTree.constructCategoriesTree(w, this.state.selectedCategories, this.state.rootCategory),
                        Z = v.getExplicitIdsOnly(this.state.selectedCategories);
                    this.setState({
                        categoriesTree: v,
                        selectedCategories: Z
                    }), this.setNames(v), this.props.onTreeRefresh && this.props.onTreeRefresh(w)
                }, h
            }(he = r.default.Component);
            Te.defaultProps = {
                categoriesType: Se.PRODUCTS,
                maxTreeDepth: 3
            }
        },
        663183: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return fe
                }
            });
            var L = s(419467),
                z = s(248890),
                x = N(s(174161)),
                I = s(772799);

            function B(P) {
                if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return P
            }

            function R(P, T) {
                if (!(P instanceof T)) throw new TypeError("Cannot call a class as a function")
            }

            function X(P) {
                return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(F) {
                    return F.__proto__ || Object.getPrototypeOf(F)
                }, X(P)
            }

            function q(P, T) {
                if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function");
                P.prototype = Object.create(T && T.prototype, {
                    constructor: {
                        value: P,
                        writable: !0,
                        configurable: !0
                    }
                }), T && _(P, T)
            }

            function N(P) {
                return P && P.__esModule ? P : {
                    default: P
                }
            }

            function r(P, T) {
                return T && (V(T) === "object" || typeof T == "function") ? T : B(P)
            }

            function _(P, T) {
                return _ = Object.setPrototypeOf || function(ne, $) {
                    return ne.__proto__ = $, ne
                }, _(P, T)
            }
            var V = function(P) {
                "@swc/helpers - typeof";
                return P && typeof Symbol != "undefined" && P.constructor === Symbol ? "symbol" : typeof P
            };

            function ee() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (P) {
                    return !1
                }
            }

            function j(P) {
                var T = ee();
                return function() {
                    var ne = X(P),
                        $;
                    if (T) {
                        var oe = X(this).constructor;
                        $ = Reflect.construct(ne, arguments, oe)
                    } else $ = ne.apply(this, arguments);
                    return r(this, $)
                }
            }
            var n;
            (function(P) {
                P.reparent = "REPARENT", P.reorderBefore = "REORDERBEFORE", P.reorderAfter = "REORDERAFTER", P.reset = "RESET"
            })(n || (n = {}));
            var d = "item",
                c = 45,
                D = c * 1 / 3,
                E = c * 2 / 3,
                g = function(P) {
                    "use strict";
                    q(F, P);
                    var T = j(F);

                    function F($) {
                        R(this, F);
                        var oe;
                        return oe = T.call(this, $), oe.dom = null, oe
                    }
                    var ne = F.prototype;
                    return ne.componentDidMount = function() {
                        var oe = this.props.connectDragPreview;
                        oe && oe((0, z.getEmptyImage)(), {
                            captureDraggingState: !0
                        })
                    }, ne.render = function() {
                        var oe = this,
                            J = this.props,
                            ve = J.connectDragSource,
                            Ce = J.connectDropTarget;
                        return Ce(ve(x.default.createElement("div", {
                            ref: function(we) {
                                return oe.dom = we
                            }
                        }, this.props.children)))
                    }, ne.componentDidUpdate = function(oe, J) {
                        if (!(this.props.dragSourceId === this.props.item.id || this.props.dragSourceId.length === 0 || this.props.dragSourceId === oe.dragSourceId && this.state.dragState === J.dragState) && this.props.isOver) switch (this.state.dragState) {
                            case n.reparent:
                                this.props.reparentHover(this.props.dragSourceId, this.props.item);
                                return;
                            case n.reorderBefore:
                                this.props.reorderBefore(this.props.dragSourceId, this.props.item);
                                return;
                            case n.reorderAfter:
                                this.props.reorderAfter(this.props.dragSourceId, this.props.item)
                        }
                    }, F
                }(x.default.Component),
                k = {
                    beginDrag: function(T, F) {
                        return {
                            item: T.item.id,
                            name: T.item.displayName
                        }
                    },
                    canDrag: function(T) {
                        return !T.preventDrag
                    },
                    isDragging: function(T, F) {
                        return T.item.id === F.getItem().item
                    },
                    endDrag: function(T, F) {
                        F.didDrop() || T.cancelDrag(T.item.id)
                    }
                },
                Q = function(P, T) {
                    return {
                        connectDragSource: P.dragSource(),
                        connectDragPreview: P.dragPreview()
                    }
                },
                le = {
                    drop: function(T, F, ne) {
                        var $ = ne.getDecoratedComponentInstance().dom.getBoundingClientRect(),
                            oe = ($.bottom + $.top) / 2,
                            J = $.bottom - F.getClientOffset().y,
                            ve = J >= D && J < E;
                        if (ve && T.canReparent) {
                            T.reparentDrop(F.getItem().item, T.item);
                            return
                        }
                        oe - F.getClientOffset().y < 0 ? T.reorderDrop(F.getItem().item, T.item) : T.reorderDrop(F.getItem().item, T.item, !0)
                    },
                    hover: function(T, F, ne) {
                        if (F.getItem().item !== T.item.id) {
                            var $ = ne.dom.getBoundingClientRect(),
                                oe = ($.bottom + $.top) / 2,
                                J = $.bottom - F.getClientOffset().y,
                                ve = J >= D && J < E;
                            if (ve && T.canReparent) {
                                ne.setState({
                                    dragState: n.reparent
                                });
                                return
                            }
                            oe - F.getClientOffset().y < 0 ? ne.setState({
                                dragState: n.reorderAfter
                            }) : ne.setState({
                                dragState: n.reorderBefore
                            })
                        }
                    }
                },
                W = function(P, T) {
                    return !T.getItem() || !T.isOver() ? {
                        connectDropTarget: P.dropTarget(),
                        dragSourceId: "",
                        isOver: T.isOver(),
                        dragState: n.reset
                    } : {
                        connectDropTarget: P.dropTarget(),
                        dragSourceId: T.getItem().item,
                        isOver: T.isOver()
                    }
                },
                fe = (0, L.flow)([(0, I.DragSource)(d, k, Q), (0, I.DropTarget)(d, le, W)])(g)
        },
        272737: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            var L = z(s(247474));

            function z(I) {
                return I && I.__esModule ? I : {
                    default: I
                }
            }
            var x = L.default
        },
        608521: function(pe, H) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "updateLegacyFormat", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var s = function(L) {
                return L.replace(new RegExp("%c", "g"), "%p")
            }
        },
        271204: function(pe, H, s) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), Object.defineProperty(H, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            });
            var L = X(s(174161));

            function z(n, d) {
                (d == null || d > n.length) && (d = n.length);
                for (var c = 0, D = new Array(d); c < d; c++) D[c] = n[c];
                return D
            }

            function x(n) {
                if (Array.isArray(n)) return n
            }

            function I(n, d, c, D, E, g, k) {
                try {
                    var Q = n[g](k),
                        le = Q.value
                } catch (W) {
                    c(W);
                    return
                }
                Q.done ? d(le) : Promise.resolve(le).then(D, E)
            }

            function B(n) {
                return function() {
                    var d = this,
                        c = arguments;
                    return new Promise(function(D, E) {
                        var g = n.apply(d, c);

                        function k(le) {
                            I(g, D, E, k, Q, "next", le)
                        }

                        function Q(le) {
                            I(g, D, E, k, Q, "throw", le)
                        }
                        k(void 0)
                    })
                }
            }

            function R() {
                return R = Object.assign || function(n) {
                    for (var d = 1; d < arguments.length; d++) {
                        var c = arguments[d];
                        for (var D in c) Object.prototype.hasOwnProperty.call(c, D) && (n[D] = c[D])
                    }
                    return n
                }, R.apply(this, arguments)
            }

            function X(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function q(n, d) {
                var c = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (c != null) {
                    var D = [],
                        E = !0,
                        g = !1,
                        k, Q;
                    try {
                        for (c = c.call(n); !(E = (k = c.next()).done) && (D.push(k.value), !(d && D.length === d)); E = !0);
                    } catch (le) {
                        g = !0, Q = le
                    } finally {
                        try {
                            !E && c.return != null && c.return()
                        } finally {
                            if (g) throw Q
                        }
                    }
                    return D
                }
            }

            function N() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function r(n, d) {
                return x(n) || q(n, d) || _(n, d) || N()
            }

            function _(n, d) {
                if (n) {
                    if (typeof n == "string") return z(n, d);
                    var c = Object.prototype.toString.call(n).slice(8, -1);
                    if (c === "Object" && n.constructor && (c = n.constructor.name), c === "Map" || c === "Set") return Array.from(c);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return z(n, d)
                }
            }
            var V = function(n, d) {
                    var c, D, E, g, k = {
                        label: 0,
                        sent: function() {
                            if (E[0] & 1) throw E[1];
                            return E[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: Q(0),
                        throw: Q(1),
                        return: Q(2)
                    }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function Q(W) {
                        return function(fe) {
                            return le([W, fe])
                        }
                    }

                    function le(W) {
                        if (c) throw new TypeError("Generator is already executing.");
                        for (; k;) try {
                            if (c = 1, D && (E = W[0] & 2 ? D.return : W[0] ? D.throw || ((E = D.return) && E.call(D), 0) : D.next) && !(E = E.call(D, W[1])).done) return E;
                            switch (D = 0, E && (W = [W[0] & 2, E.value]), W[0]) {
                                case 0:
                                case 1:
                                    E = W;
                                    break;
                                case 4:
                                    return k.label++, {
                                        value: W[1],
                                        done: !1
                                    };
                                case 5:
                                    k.label++, D = W[1], W = [0];
                                    continue;
                                case 7:
                                    W = k.ops.pop(), k.trys.pop();
                                    continue;
                                default:
                                    if (E = k.trys, !(E = E.length > 0 && E[E.length - 1]) && (W[0] === 6 || W[0] === 2)) {
                                        k = 0;
                                        continue
                                    }
                                    if (W[0] === 3 && (!E || W[1] > E[0] && W[1] < E[3])) {
                                        k.label = W[1];
                                        break
                                    }
                                    if (W[0] === 6 && k.label < E[1]) {
                                        k.label = E[1], E = W;
                                        break
                                    }
                                    if (E && k.label < E[2]) {
                                        k.label = E[2], k.ops.push(W);
                                        break
                                    }
                                    E[2] && k.ops.pop(), k.trys.pop();
                                    continue
                            }
                            W = d.call(n, k)
                        } catch (fe) {
                            W = [6, fe], D = 0
                        } finally {
                            c = E = 0
                        }
                        if (W[0] & 5) throw W[1];
                        return {
                            value: W[0] ? W[1] : void 0,
                            done: !0
                        }
                    }
                },
                ee = function() {
                    var n = B(function() {
                        var d;
                        return V(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, Promise.resolve().then(s.bind(s, 335116))];
                                case 1:
                                    return d = c.sent(), [2, d]
                            }
                        })
                    });
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                j = function(n) {
                    var d = r(L.default.useState(null), 2),
                        c = d[0],
                        D = d[1];
                    return c ? L.default.createElement(c.default, R({}, n)) : (ee().then(function(E) {
                        return D(E)
                    }), L.default.createElement(L.default.Fragment, null))
                }
        },
        956703: function(pe, H) {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            });

            function s(x, I) {
                for (var B in I) Object.defineProperty(x, B, {
                    enumerable: !0,
                    get: I[B]
                })
            }
            s(H, {
                getPreviewString: function() {
                    return L
                },
                buildRegexes: function() {
                    return z
                }
            });
            var L = function(x, I, B) {
                    return Object.keys(I).reduce(function(R, X) {
                        return R.replace(x[X], I[X].exampleText)
                    }, B)
                },
                z = function() {
                    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return Object.keys(x).reduce(function(I, B) {
                        return I[B] = new RegExp(B, "g"), I
                    }, {})
                }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/41b586d7aee6de6c450bc889153193a1/18543-650ba01edebd45c0e5fe-min.en-US.js.map