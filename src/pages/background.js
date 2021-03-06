! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 45)
}([, , , function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
        return n
    })), r.d(t, "d", (function() {
        return o
    })), r.d(t, "a", (function() {
        return i
    })), r.d(t, "c", (function() {
        return a
    }));
    const n = "UPDATE_OPTIONS",
        o = e => (chrome.storage.sync.set(e), {
            type: n,
            options: e
        }),
        i = "UPDATE_CLIPBOARD",
        a = e => (chrome.storage.sync.set({
            clipboard: e
        }), {
            type: i,
            clipboard: e
        })
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    (function(e, n) {
        var o, i = r(15);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
        var a = Object(i.a)(o);
        t.a = a
    }).call(this, r(4), r(24)(e))
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return f
    })), r.d(t, "b", (function() {
        return s
    })), r.d(t, "c", (function() {
        return u
    }));
    var n = r(5),
        o = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        i = {
            INIT: "@@redux/INIT" + o(),
            REPLACE: "@@redux/REPLACE" + o(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + o()
            }
        };

    function a(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function u(e, t, r) {
        var o;
        if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
        if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
            if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
            return r(u)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var c = e,
            s = t,
            l = [],
            f = l,
            d = !1;

        function p() {
            f === l && (f = l.slice())
        }

        function h() {
            if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return s
        }

        function y(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return p(), f.push(e),
                function() {
                    if (t) {
                        if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        t = !1, p();
                        var r = f.indexOf(e);
                        f.splice(r, 1)
                    }
                }
        }

        function v(e) {
            if (!a(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, e)
            } finally {
                d = !1
            }
            for (var t = l = f, r = 0; r < t.length; r++) {
                (0, t[r])()
            }
            return e
        }

        function b(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            c = e, v({
                type: i.REPLACE
            })
        }

        function g() {
            var e, t = y;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                    function r() {
                        e.next && e.next(h())
                    }
                    return r(), {
                        unsubscribe: t(r)
                    }
                }
            })[n.a] = function() {
                return this
            }, e
        }
        return v({
            type: i.INIT
        }), (o = {
            dispatch: v,
            subscribe: y,
            getState: h,
            replaceReducer: b
        })[n.a] = g, o
    }

    function c(e, t) {
        var r = t && t.type;
        return "Given " + (r && 'action "' + String(r) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function s(e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
            var o = t[n];
            0, "function" == typeof e[o] && (r[o] = e[o])
        }
        var a, u = Object.keys(r);
        try {
            ! function(e) {
                Object.keys(e).forEach((function(t) {
                    var r = e[t];
                    if (void 0 === r(void 0, {
                            type: i.INIT
                        })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    if (void 0 === r(void 0, {
                            type: i.PROBE_UNKNOWN_ACTION()
                        })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                }))
            }(r)
        } catch (e) {
            a = e
        }
        return function(e, t) {
            if (void 0 === e && (e = {}), a) throw a;
            for (var n = !1, o = {}, i = 0; i < u.length; i++) {
                var s = u[i],
                    l = r[s],
                    f = e[s],
                    d = l(f, t);
                if (void 0 === d) {
                    var p = c(s, t);
                    throw new Error(p)
                }
                o[s] = d, n = n || d !== f
            }
            return n ? o : e
        }
    }

    function l(e, t) {
        return function() {
            return t(e.apply(this, arguments))
        }
    }

    function f(e, t) {
        if ("function" == typeof e) return l(e, t);
        if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        var r = {};
        for (var n in e) {
            var o = e[n];
            "function" == typeof o && (r[n] = l(o, t))
        }
        return r
    }
}, , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_PORT_NAME = t.PATCH_STATE_TYPE = t.STATE_TYPE = t.DISPATCH_TYPE = void 0;
    t.DISPATCH_TYPE = "chromex.dispatch";
    t.STATE_TYPE = "chromex.state";
    t.PATCH_STATE_TYPE = "chromex.patch_state";
    t.DEFAULT_PORT_NAME = "chromex.port_name"
}, function(e, t, r) {
    "use strict";

    function n(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })))), n.forEach((function(t) {
                o(e, t, r[t])
            }))
        }
        return e
    }

    function o(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.withSerializer = t.withDeserializer = t.noop = void 0;
    var i = function(e) {
        return e
    };
    t.noop = i;
    var a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            return n({}, e, e.payload ? {
                payload: t(e.payload)
            } : {})
        },
        u = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                r = arguments.length > 2 ? arguments[2] : void 0;
            return r ? function(n) {
                for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) i[u - 1] = arguments[u];
                return r.apply(void 0, [n].concat(i)) ? e.apply(void 0, [a(n, t)].concat(i)) : e.apply(void 0, [n].concat(i))
            } : function(r) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                return e.apply(void 0, [a(r, t)].concat(o))
            }
        };
    t.withDeserializer = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        return function(t) {
            return function(r, n) {
                return t(u(r, e, n))
            }
        }
    };
    t.withSerializer = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        return function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function() {
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                if (o.length <= r) throw new Error("Message in request could not be serialized. " + "Expected message in position ".concat(r, " but only received ").concat(o.length, " args."));
                return o[r] = a(o[r], e), t.apply(void 0, o)
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DIFF_STATUS_ARRAY_UPDATED = t.DIFF_STATUS_KEYS_UPDATED = t.DIFF_STATUS_REMOVED = t.DIFF_STATUS_UPDATED = void 0;
    t.DIFF_STATUS_UPDATED = "updated";
    t.DIFF_STATUS_REMOVED = "removed";
    t.DIFF_STATUS_KEYS_UPDATED = "updated_keys";
    t.DIFF_STATUS_ARRAY_UPDATED = "updated_array"
}, function(e, t, r) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getBrowserAPI = function() {
            var t = e.chrome || e.browser || browser;
            if (!t) throw new Error("Browser API is not present");
            return t
        }
    }).call(this, r(4))
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "Store", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "applyMiddleware", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(t, "wrapStore", {
        enumerable: !0,
        get: function() {
            return i.default
        }
    }), Object.defineProperty(t, "alias", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    });
    var n = u(r(17)),
        o = u(r(20)),
        i = u(r(21)),
        a = u(r(23));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t, r = e.Symbol;
        return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }
    r.d(t, "a", (function() {
        return n
    }))
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = c(r(18)),
        o = r(10),
        i = r(11),
        a = c(r(19)),
        u = r(13);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var f = {
            portName: o.DEFAULT_PORT_NAME,
            state: {},
            extensionId: null,
            serializer: i.noop,
            deserializer: i.noop,
            patchStrategy: a.default
        },
        d = function() {
            function e() {
                var t = this,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                    n = r.portName,
                    a = void 0 === n ? f.portName : n,
                    c = r.state,
                    l = void 0 === c ? f.state : c,
                    d = r.extensionId,
                    p = void 0 === d ? f.extensionId : d,
                    h = r.serializer,
                    y = void 0 === h ? f.serializer : h,
                    v = r.deserializer,
                    b = void 0 === v ? f.deserializer : v,
                    g = r.patchStrategy,
                    m = void 0 === g ? f.patchStrategy : g;
                if (s(this, e), !a) throw new Error("portName is required in options");
                if ("function" != typeof y) throw new Error("serializer must be a function");
                if ("function" != typeof b) throw new Error("deserializer must be a function");
                if ("function" != typeof m) throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");
                this.portName = a, this.readyResolved = !1, this.readyPromise = new Promise((function(e) {
                    return t.readyResolve = e
                })), this.browserAPI = (0, u.getBrowserAPI)(), this.extensionId = p, this.port = this.browserAPI.runtime.connect(this.extensionId, {
                    name: a
                }), this.safetyHandler = this.safetyHandler.bind(this), this.safetyMessage = this.browserAPI.runtime.onMessage.addListener(this.safetyHandler), this.serializedPortListener = (0, i.withDeserializer)(b)((function() {
                    var e;
                    return (e = t.port.onMessage).addListener.apply(e, arguments)
                })), this.serializedMessageSender = (0, i.withSerializer)(y)((function() {
                    var e;
                    return (e = t.browserAPI.runtime).sendMessage.apply(e, arguments)
                }), 1), this.listeners = [], this.state = l, this.patchStrategy = m, this.serializedPortListener((function(e) {
                    switch (e.type) {
                        case o.STATE_TYPE:
                            t.replaceState(e.payload), t.readyResolved || (t.readyResolved = !0, t.readyResolve());
                            break;
                        case o.PATCH_STATE_TYPE:
                            t.patchState(e.payload)
                    }
                })), this.dispatch = this.dispatch.bind(this)
            }
            var t, r, a;
            return t = e, (r = [{
                key: "ready",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return null !== e ? this.readyPromise.then(e) : this.readyPromise
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    var t = this;
                    return this.listeners.push(e),
                        function() {
                            t.listeners = t.listeners.filter((function(t) {
                                return t !== e
                            }))
                        }
                }
            }, {
                key: "patchState",
                value: function(e) {
                    this.state = this.patchStrategy(this.state, e), this.listeners.forEach((function(e) {
                        return e()
                    }))
                }
            }, {
                key: "replaceState",
                value: function(e) {
                    this.state = e, this.listeners.forEach((function(e) {
                        return e()
                    }))
                }
            }, {
                key: "getState",
                value: function() {
                    return this.state
                }
            }, {
                key: "replaceReducer",
                value: function() {}
            }, {
                key: "dispatch",
                value: function(e) {
                    var t = this;
                    return new Promise((function(r, i) {
                        t.serializedMessageSender(t.extensionId, {
                            type: o.DISPATCH_TYPE,
                            portName: t.portName,
                            payload: e
                        }, null, (function(e) {
                            var t = e.error,
                                o = e.value;
                            if (t) {
                                var a = new Error("".concat("\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n").concat(t));
                                i((0, n.default)(a, t))
                            } else r(o && o.payload)
                        }))
                    }))
                }
            }, {
                key: "safetyHandler",
                value: function(e) {
                    "storeReady" === e.action && (this.browserAPI.runtime.onMessage.removeListener(this.safetyHandler), this.readyResolved || (this.readyResolved = !0, this.readyResolve()))
                }
            }]) && l(t.prototype, r), a && l(t, a), e
        }();
    t.default = d
}, function(e, t) {
    var r = /^(?:0|[1-9]\d*)$/;

    function n(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
    var o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = o.propertyIsEnumerable,
        c = Math.max;

    function s(e, t) {
        var r = h(e) || function(e) {
                return function(e) {
                    return function(e) {
                        return !!e && "object" == typeof e
                    }(e) && y(e)
                }(e) && i.call(e, "callee") && (!u.call(e, "callee") || "[object Arguments]" == a.call(e))
            }(e) ? function(e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                return n
            }(e.length, String) : [],
            n = r.length,
            o = !!n;
        for (var c in e) !t && !i.call(e, c) || o && ("length" == c || d(c, n)) || r.push(c);
        return r
    }

    function l(e, t, r) {
        var n = e[t];
        i.call(e, t) && p(n, r) && (void 0 !== r || t in e) || (e[t] = r)
    }

    function f(e) {
        if (!v(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var r in Object(e)) t.push(r);
            return t
        }(e);
        var t, r, n, a = (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || o, t === n),
            u = [];
        for (var c in e)("constructor" != c || !a && i.call(e, c)) && u.push(c);
        return u
    }

    function d(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }

    function p(e, t) {
        return e === t || e != e && t != t
    }
    var h = Array.isArray;

    function y(e) {
        return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }(e.length) && ! function(e) {
            var t = v(e) ? a.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t
        }(e)
    }

    function v(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    var b, g, m, w = (b = function(e, t) {
        ! function(e, t, r, n) {
            r || (r = {});
            for (var o = -1, i = t.length; ++o < i;) {
                var a = t[o],
                    u = n ? n(r[a], e[a], a, r, e) : void 0;
                l(r, a, void 0 === u ? e[a] : u)
            }
        }(t, function(e) {
            return y(e) ? s(e, !0) : f(e)
        }(t), e)
    }, g = function(e, t) {
        var r = -1,
            n = t.length,
            o = n > 1 ? t[n - 1] : void 0,
            i = n > 2 ? t[2] : void 0;
        for (o = b.length > 3 && "function" == typeof o ? (n--, o) : void 0, i && function(e, t, r) {
                if (!v(r)) return !1;
                var n = typeof t;
                return !!("number" == n ? y(r) && d(t, r.length) : "string" == n && t in r) && p(r[t], e)
            }(t[0], t[1], i) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++r < n;) {
            var a = t[r];
            a && b(e, a, r, o)
        }
        return e
    }, m = c(void 0 === m ? g.length - 1 : m, 0), function() {
        for (var e = arguments, t = -1, r = c(e.length - m, 0), o = Array(r); ++t < r;) o[t] = e[m + t];
        t = -1;
        for (var i = Array(m + 1); ++t < m;) i[t] = e[t];
        return i[m] = o, n(g, this, i)
    });
    e.exports = w
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t) {
        var r = Object.assign({}, e);
        return t.forEach((function(e) {
            var t = e.change,
                o = e.key,
                i = e.value;
            switch (t) {
                case n.DIFF_STATUS_UPDATED:
                    r[o] = i;
                    break;
                case n.DIFF_STATUS_REMOVED:
                    Reflect.deleteProperty(r, o)
            }
        })), r
    };
    var n = r(12)
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function o() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return 0 === t.length ? function(e) {
            return e
        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
        var a = function() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
            },
            u = {
                getState: e.getState.bind(e),
                dispatch: function() {
                    return a.apply(void 0, arguments)
                }
            };
        return r = (r || []).map((function(e) {
            return e(u)
        })), a = o.apply(void 0, n(r))(e.dispatch), e.dispatch = a, e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n, o = r(10),
        i = r(11),
        a = r(13),
        u = (n = r(22)) && n.__esModule ? n : {
            default: n
        };
    var c = {
        portName: o.DEFAULT_PORT_NAME,
        dispatchResponder: function(e, t) {
            Promise.resolve(e).then((function(e) {
                t({
                    error: null,
                    value: e
                })
            })).catch((function(e) {
                console.error("error dispatching result:", e), t({
                    error: e.message,
                    value: null
                })
            }))
        },
        serializer: i.noop,
        deserializer: i.noop,
        diffStrategy: u.default
    };
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
            r = t.portName,
            n = void 0 === r ? c.portName : r,
            u = t.dispatchResponder,
            s = void 0 === u ? c.dispatchResponder : u,
            l = t.serializer,
            f = void 0 === l ? c.serializer : l,
            d = t.deserializer,
            p = void 0 === d ? c.deserializer : d,
            h = t.diffStrategy,
            y = void 0 === h ? c.diffStrategy : h;
        if (!n) throw new Error("portName is required in options");
        if ("function" != typeof f) throw new Error("serializer must be a function");
        if ("function" != typeof p) throw new Error("deserializer must be a function");
        if ("function" != typeof y) throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");
        var v = (0, a.getBrowserAPI)(),
            b = function(t, r, i) {
                if (t.type === o.DISPATCH_TYPE && t.portName === n) {
                    var a = Object.assign({}, t.payload, {
                            _sender: r
                        }),
                        u = null;
                    try {
                        u = e.dispatch(a)
                    } catch (e) {
                        u = Promise.reject(e.message), console.error(e)
                    }
                    return s(u, i), !0
                }
            },
            g = function(t) {
                if (t.name === n) {
                    var r = (0, i.withSerializer)(f)((function() {
                            return t.postMessage.apply(t, arguments)
                        })),
                        a = e.getState(),
                        u = e.subscribe((function() {
                            var t = e.getState(),
                                n = y(a, t);
                            n.length && (a = t, r({
                                type: o.PATCH_STATE_TYPE,
                                payload: n
                            }))
                        }));
                    t.onDisconnect.addListener(u), r({
                        type: o.STATE_TYPE,
                        payload: a
                    })
                }
            },
            m = (0, i.withDeserializer)(p),
            w = function(e) {
                return e.type === o.DISPATCH_TYPE && e.portName === n
            };
        m((function() {
            var e;
            return (e = v.runtime.onMessage).addListener.apply(e, arguments)
        }))(b, w), v.runtime.onMessageExternal ? m((function() {
            var e;
            return (e = v.runtime.onMessageExternal).addListener.apply(e, arguments)
        }))(b, w) : console.warn("runtime.onMessageExternal is not supported"), v.runtime.onConnect.addListener(g), v.runtime.onConnectExternal ? v.runtime.onConnectExternal.addListener(g) : console.warn("runtime.onConnectExternal is not supported"), v.tabs.query({}, (function(e) {
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    v.tabs.sendMessage(a.id, {
                        action: "storeReady"
                    }, (function() {
                        chrome.runtime.lastError
                    }))
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    t || null == i.return || i.return()
                } finally {
                    if (r) throw n
                }
            }
        }))
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t) {
        var r = [];
        return Object.keys(t).forEach((function(o) {
            e[o] !== t[o] && r.push({
                key: o,
                value: t[o],
                change: n.DIFF_STATUS_UPDATED
            })
        })), Object.keys(e).forEach((function(e) {
            t.hasOwnProperty(e) || r.push({
                key: e,
                change: n.DIFF_STATUS_REMOVED
            })
        })), r
    };
    var n = r(12)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = function(e) {
        return function() {
            return function(t) {
                return function(r) {
                    var n = e[r.type];
                    return t(n ? n(r) : r)
                }
            }
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(14),
        o = r(3);
    var i = class {
            constructor(e) {
                this.store = e
            }
            initContextMenu() {
                chrome.contextMenus.create({
                    id: "easyCopy",
                    title: "Copy to Clipboard Share",
                    contexts: ["selection"]
                }), chrome.contextMenus.onClicked.addListener(e => {
                    if ("easyCopy" == e.menuItemId && e.selectionText) {
                        const t = this.store.getState(),
                            {
                                clipboard: r
                            } = t;
                        e.selectionText && r.unshift(e.selectionText.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim()), this.store.dispatch(Object(o.c)(r))
                    }
                })
            }
        },
        a = r(6);
    var u = Object(a.b)({
        options: (e = {
            backgroundColor: "#FFFF99",
            textColor: "#000000",
            autoCopy: !0,
            lineCount: 5
        }, t) => {
            switch (t.type) {
                case o.b:
                    return t.options;
                default:
                    return e
            }
        },
        clipboard: (e = [], t) => {
            switch (t.type) {
                case o.a:
                    return t.clipboard;
                default:
                    return e
            }
        }
    });
    var c = Object(a.c)(u);
    const s = e => {
        Object(n.wrapStore)(c, {
            portName: "clipboard-share"
        }), c.subscribe(() => {
            const {
                clipboard: e
            } = c.getState();
            chrome.browserAction.setBadgeText({
                text: "" + e.length
            })
        }), e ? c.dispatch(Object(o.d)({
            backgroundColor: "#FFFF99",
            textColor: "#000000",
            autoCopy: !0,
            lineCount: 5
        })) : chrome.storage.sync.get(["clipboard", "backgroundColor", "textColor", "autoCopy", "lineCount"], e => {
            const t = {
                backgroundColor: e.backgroundColor,
                textColor: e.textColor,
                autoCopy: e.autoCopy,
                lineCount: e.lineCount
            };
            c.dispatch(Object(o.c)(e.clipboard)), c.dispatch(Object(o.d)(t))
        }), chrome.runtime.onMessage.addListener((e, t) => {
            if (chrome.runtime.id == t.id && e.selection) {
                const {
                    clipboard: t
                } = c.getState();
                t.unshift(e.selection), c.dispatch(Object(o.c)(t))
            }
        });
        new i(c).initContextMenu()
    };
    chrome.runtime.onInstalled.addListener(() => {
        s(!0)
    }), chrome.runtime.onStartup.addListener(() => {
        s(!1)
    })
}]);