"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [6836, 1214], {
        77511: function(e, n, t) {
            t.r(n);
            t(92338);
            var i = t(36871),
                o = t.n(i),
                r = t(11500);
            n.default = function(e) {
                var n = function() {
                    var n = document.querySelectorAll("main .page-section");
                    if (0 !== n.length) {
                        var t = n[n.length - 1],
                            i = o().find((function(e) {
                                return t.classList.contains(e)
                            }));
                        (0, r.O)(e, o(), i)
                    }
                };
                return n(), {
                    matchLastSectionColorTheme: n
                }
            }
        },
        78230: function(e, n, t) {
            t.r(n), t.d(n, {
                registerConfigEventListeners: function() {
                    return a
                }
            });
            t(92338), t(35666);
            var i = t(82767),
                o = t(77511),
                r = function(e) {
                    var n = (0, o.default)(e).matchLastSectionColorTheme,
                        t = "sections:change",
                        i = function() {
                            window.Y.Global.on(t, n)
                        };
                    return "complete" === document.readyState ? i() : window.addEventListener("load", i),
                        function() {
                            window.Y.Global.detach(t, n, undefined), window.removeEventListener("load", i)
                        }
                };

            function c(e, n, t, i, o, r, c) {
                try {
                    var s = e[r](c),
                        a = s.value
                } catch (e) {
                    return void t(e)
                }
                s.done ? n(a) : Promise.resolve(a).then(i, o)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(i, o) {
                        var r = e.apply(n, t);

                        function s(e) {
                            c(r, i, o, s, a, "next", e)
                        }

                        function a(e) {
                            c(r, i, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function a(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = s(regeneratorRuntime.mark((function e(n) {
                    var t, o, c, s, a, u, l, f;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.pageSectionEventsManager, o = n.collectionItemSectionEventsManager, c = n.footerSectionEventsManager, s = n.headerEventsManager, e.next = 3, i.gL.instantiate();
                            case 3:
                                (a = e.sent).registerListeners("pageSections", {
                                    sectionCreated: function(e, n) {
                                        return t.sectionCreated(e, n)
                                    },
                                    sectionDeleted: function(e) {
                                        return t.sectionDeleted(e)
                                    },
                                    sectionWillChange: function(e, n, i) {
                                        return t.sectionWillChange(e, n, i)
                                    },
                                    sectionDidChange: function(e, n, i) {
                                        return t.sectionDidChange(e, n, i)
                                    },
                                    requestSectionRteConfigs: function(e) {
                                        return t.requestSectionRteConfigs(e)
                                    }
                                }), a.registerListeners("collectionItemSections", {
                                    sectionCreated: function(e, n) {
                                        return o.sectionCreated(e, n)
                                    },
                                    sectionDeleted: function(e) {
                                        return o.sectionDeleted(e)
                                    },
                                    sectionWillChange: function(e, n, t) {
                                        return o.sectionWillChange(e, n, t)
                                    },
                                    sectionDidChange: function(e, n, t) {
                                        return o.sectionDidChange(e, n, t)
                                    },
                                    requestSectionRteConfigs: function(e) {
                                        return o.requestSectionRteConfigs(e)
                                    }
                                }), a.registerListeners("footerSections", {
                                    sectionCreated: function(e, n) {
                                        return c.sectionCreated(e, n)
                                    },
                                    sectionDeleted: function(e) {
                                        return c.sectionDeleted(e)
                                    },
                                    sectionWillChange: function(e, n, t) {
                                        return c.sectionWillChange(e, n, t)
                                    },
                                    sectionDidChange: function(e, n, t) {
                                        return c.sectionDidChange(e, n, t)
                                    },
                                    requestSectionRteConfigs: function(e) {
                                        return c.requestSectionRteConfigs(e)
                                    }
                                }), a.registerListeners("header", {
                                    sectionWillChange: function(e, n, t) {
                                        return s.elementWillChange(e, n, t)
                                    },
                                    sectionDidChange: function(e, n, t) {
                                        return s.elementDidChange(e, n, t)
                                    }
                                }), u = new i.R4(null, {
                                    catalogSections: !0
                                }), a.registerListeners("catalogSections", {
                                    catalogSectionsChanged: function(e) {
                                        u.setSectionsNode(e), u.bootstrap()
                                    }
                                }), l = null, (f = document.getElementById("itemPagination")) && (l = r(f)), window.addEventListener("pagehide", (function() {
                                    null == u || u.destroy(), "function" == typeof l && l()
                                }));
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        }
    }
]);