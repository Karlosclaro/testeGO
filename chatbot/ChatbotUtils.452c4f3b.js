"use strict";
function _defineProperty(t, e, n) {
    return (e = _toPropertyKey(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return s
    }
    ;
    var c, s = {}, t = Object.prototype, u = t.hasOwnProperty, l = Object.defineProperty || function(t, e, n) {
        t[e] = n.value
    }
    , e = "function" == typeof Symbol ? Symbol : {}, r = e.iterator || "@@iterator", n = e.asyncIterator || "@@asyncIterator", o = e.toStringTag || "@@toStringTag";
    function a(t, e, n) {
        return Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        t[e]
    }
    try {
        a({}, "")
    } catch (c) {
        a = function(t, e, n) {
            return t[e] = n
        }
    }
    function i(t, e, n, r) {
        var o, a, s, i, e = e && e.prototype instanceof g ? e : g, e = Object.create(e.prototype), r = new T(r || []);
        return l(e, "_invoke", {
            value: (o = t,
            a = n,
            s = r,
            i = f,
            function(t, e) {
                if (i === d)
                    throw new Error("Generator is already running");
                if (i === y) {
                    if ("throw" === t)
                        throw e;
                    return {
                        value: c,
                        done: !0
                    }
                }
                for (s.method = t,
                s.arg = e; ; ) {
                    var n = s.delegate;
                    if (n) {
                        n = function t(e, n) {
                            var r = n.method
                              , o = e.iterator[r];
                            if (o === c)
                                return n.delegate = null,
                                "throw" === r && e.iterator.return && (n.method = "return",
                                n.arg = c,
                                t(e, n),
                                "throw" === n.method) || "return" !== r && (n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                v;
                            r = h(o, e.iterator, n.arg);
                            if ("throw" === r.type)
                                return n.method = "throw",
                                n.arg = r.arg,
                                n.delegate = null,
                                v;
                            o = r.arg;
                            return o ? o.done ? (n[e.resultName] = o.value,
                            n.next = e.nextLoc,
                            "return" !== n.method && (n.method = "next",
                            n.arg = c),
                            n.delegate = null,
                            v) : o : (n.method = "throw",
                            n.arg = new TypeError("iterator result is not an object"),
                            n.delegate = null,
                            v)
                        }(n, s);
                        if (n) {
                            if (n === v)
                                continue;
                            return n
                        }
                    }
                    if ("next" === s.method)
                        s.sent = s._sent = s.arg;
                    else if ("throw" === s.method) {
                        if (i === f)
                            throw i = y,
                            s.arg;
                        s.dispatchException(s.arg)
                    } else
                        "return" === s.method && s.abrupt("return", s.arg);
                    i = d;
                    n = h(o, a, s);
                    if ("normal" === n.type) {
                        if (i = s.done ? y : p,
                        n.arg === v)
                            continue;
                        return {
                            value: n.arg,
                            done: s.done
                        }
                    }
                    "throw" === n.type && (i = y,
                    s.method = "throw",
                    s.arg = n.arg)
                }
            }
            )
        }),
        e
    }
    function h(t, e, n) {
        try {
            return {
                type: "normal",
                arg: t.call(e, n)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    s.wrap = i;
    var f = "suspendedStart"
      , p = "suspendedYield"
      , d = "executing"
      , y = "completed"
      , v = {};
    function g() {}
    function m() {}
    function b() {}
    var e = {}
      , _ = (a(e, r, function() {
        return this
    }),
    Object.getPrototypeOf)
      , _ = _ && _(_(C([])))
      , w = (_ && _ !== t && u.call(_, r) && (e = _),
    b.prototype = g.prototype = Object.create(e));
    function S(t) {
        ["next", "throw", "return"].forEach(function(e) {
            a(t, e, function(t) {
                return this._invoke(e, t)
            })
        })
    }
    function k(s, i) {
        var e;
        l(this, "_invoke", {
            value: function(n, r) {
                function t() {
                    return new i(function(t, e) {
                        !function e(t, n, r, o) {
                            var a, t = h(s[t], s, n);
                            if ("throw" !== t.type)
                                return (n = (a = t.arg).value) && "object" == _typeof(n) && u.call(n, "__await") ? i.resolve(n.__await).then(function(t) {
                                    e("next", t, r, o)
                                }, function(t) {
                                    e("throw", t, r, o)
                                }) : i.resolve(n).then(function(t) {
                                    a.value = t,
                                    r(a)
                                }, function(t) {
                                    return e("throw", t, r, o)
                                });
                            o(t.arg)
                        }(n, r, t, e)
                    }
                    )
                }
                return e = e ? e.then(t, t) : t()
            }
        })
    }
    function x(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]),
        2 in t && (e.finallyLoc = t[2],
        e.afterLoc = t[3]),
        this.tryEntries.push(e)
    }
    function A(t) {
        var e = t.completion || {};
        e.type = "normal",
        delete e.arg,
        t.completion = e
    }
    function T(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        t.forEach(x, this),
        this.reset(!0)
    }
    function C(e) {
        if (e || "" === e) {
            var n, t = e[r];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length))
                return n = -1,
                (t = function t() {
                    for (; ++n < e.length; )
                        if (u.call(e, n))
                            return t.value = e[n],
                            t.done = !1,
                            t;
                    return t.value = c,
                    t.done = !0,
                    t
                }
                ).next = t
        }
        throw new TypeError(_typeof(e) + " is not iterable")
    }
    return l(w, "constructor", {
        value: m.prototype = b,
        configurable: !0
    }),
    l(b, "constructor", {
        value: m,
        configurable: !0
    }),
    m.displayName = a(b, o, "GeneratorFunction"),
    s.isGeneratorFunction = function(t) {
        t = "function" == typeof t && t.constructor;
        return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
    }
    ,
    s.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
        a(t, o, "GeneratorFunction")),
        t.prototype = Object.create(w),
        t
    }
    ,
    s.awrap = function(t) {
        return {
            __await: t
        }
    }
    ,
    S(k.prototype),
    a(k.prototype, n, function() {
        return this
    }),
    s.AsyncIterator = k,
    s.async = function(t, e, n, r, o) {
        void 0 === o && (o = Promise);
        var a = new k(i(t, e, n, r),o);
        return s.isGeneratorFunction(e) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next()
        })
    }
    ,
    S(w),
    a(w, o, "Generator"),
    a(w, r, function() {
        return this
    }),
    a(w, "toString", function() {
        return "[object Generator]"
    }),
    s.keys = function(t) {
        var e, n = Object(t), r = [];
        for (e in n)
            r.push(e);
        return r.reverse(),
        function t() {
            for (; r.length; ) {
                var e = r.pop();
                if (e in n)
                    return t.value = e,
                    t.done = !1,
                    t
            }
            return t.done = !0,
            t
        }
    }
    ,
    s.values = C,
    T.prototype = {
        constructor: T,
        reset: function(t) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = c,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = c,
            this.tryEntries.forEach(A),
            !t)
                for (var e in this)
                    "t" === e.charAt(0) && u.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = c)
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type)
                throw t.arg;
            return this.rval
        },
        dispatchException: function(n) {
            if (this.done)
                throw n;
            var r = this;
            function t(t, e) {
                return a.type = "throw",
                a.arg = n,
                r.next = t,
                e && (r.method = "next",
                r.arg = c),
                !!e
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var o = this.tryEntries[e]
                  , a = o.completion;
                if ("root" === o.tryLoc)
                    return t("end");
                if (o.tryLoc <= this.prev) {
                    var s = u.call(o, "catchLoc")
                      , i = u.call(o, "finallyLoc");
                    if (s && i) {
                        if (this.prev < o.catchLoc)
                            return t(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc)
                            return t(o.finallyLoc)
                    } else if (s) {
                        if (this.prev < o.catchLoc)
                            return t(o.catchLoc, !0)
                    } else {
                        if (!i)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc)
                            return t(o.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var o = r;
                    break
                }
            }
            var a = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
            return a.type = t,
            a.arg = e,
            o ? (this.method = "next",
            this.next = o.finallyLoc,
            v) : this.complete(a)
        },
        complete: function(t, e) {
            if ("throw" === t.type)
                throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
            this.method = "return",
            this.next = "end") : "normal" === t.type && e && (this.next = e),
            v
        },
        finish: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc),
                    A(n),
                    v
            }
        },
        catch: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n, r, o = this.tryEntries[e];
                if (o.tryLoc === t)
                    return "throw" === (n = o.completion).type && (r = n.arg,
                    A(o)),
                    r
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, e, n) {
            return this.delegate = {
                iterator: C(t),
                resultName: e,
                nextLoc: n
            },
            "next" === this.method && (this.arg = c),
            v
        }
    },
    s
}
function asyncGeneratorStep(t, e, n, r, o, a, s) {
    try {
        var i = t[a](s)
          , c = i.value
    } catch (t) {
        return void n(t)
    }
    i.done ? e(c) : Promise.resolve(c).then(r, o)
}
function _asyncToGenerator(i) {
    return function() {
        var t = this
          , s = arguments;
        return new Promise(function(e, n) {
            var r = i.apply(t, s);
            function o(t) {
                asyncGeneratorStep(r, e, n, o, a, "next", t)
            }
            function a(t) {
                asyncGeneratorStep(r, e, n, o, a, "throw", t)
            }
            o(void 0)
        }
        )
    }
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, _toPropertyKey(r.key), r)
    }
}
function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e),
    n && _defineProperties(t, n),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : String(t)
}
function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 === n)
        return ("string" === e ? String : Number)(t);
    n = n.call(t, e || "default");
    if ("object" != _typeof(n))
        return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}
function _asyncIterator(t) {
    var e, n, r, o = 2;
    for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator,
    r = Symbol.iterator); o--; ) {
        if (n && null != (e = t[n]))
            return e.call(t);
        if (r && null != (e = t[r]))
            return new AsyncFromSyncIterator(e.call(t));
        n = "@@asyncIterator",
        r = "@@iterator"
    }
    throw new TypeError("Object is not async iterable")
}
function AsyncFromSyncIterator(t) {
    function n(t) {
        var e;
        return Object(t) !== t ? Promise.reject(new TypeError(t + " is not an object.")) : (e = t.done,
        Promise.resolve(t.value).then(function(t) {
            return {
                value: t,
                done: e
            }
        }))
    }
    return (AsyncFromSyncIterator = function(t) {
        this.s = t,
        this.n = t.next
    }
    ).prototype = {
        s: null,
        n: null,
        next: function() {
            return n(this.n.apply(this.s, arguments))
        },
        return: function(t) {
            var e = this.s.return;
            return void 0 === e ? Promise.resolve({
                value: t,
                done: !0
            }) : n(e.apply(this.s, arguments))
        },
        throw: function(t) {
            var e = this.s.return;
            return void 0 === e ? Promise.reject(t) : n(e.apply(this.s, arguments))
        }
    },
    new AsyncFromSyncIterator(t)
}
function _awaitAsyncGenerator(t) {
    return new _OverloadYield(t,0)
}
function _wrapAsyncGenerator(t) {
    return function() {
        return new _AsyncGenerator(t.apply(this, arguments))
    }
}
function _AsyncGenerator(s) {
    var o, a;
    function i(n, t) {
        try {
            var r = s[n](t)
              , o = r.value
              , a = o instanceof _OverloadYield;
            Promise.resolve(a ? o.v : o).then(function(t) {
                if (a) {
                    var e = "return" === n ? "return" : "next";
                    if (!o.k || t.done)
                        return i(e, t);
                    t = s[e](t).value
                }
                c(r.done ? "return" : "normal", t)
            }, function(t) {
                i("throw", t)
            })
        } catch (t) {
            c("throw", t)
        }
    }
    function c(t, e) {
        switch (t) {
        case "return":
            o.resolve({
                value: e,
                done: !0
            });
            break;
        case "throw":
            o.reject(e);
            break;
        default:
            o.resolve({
                value: e,
                done: !1
            })
        }
        (o = o.next) ? i(o.key, o.arg) : a = null
    }
    this._invoke = function(n, r) {
        return new Promise(function(t, e) {
            t = {
                key: n,
                arg: r,
                resolve: t,
                reject: e,
                next: null
            };
            a ? a = a.next = t : (o = a = t,
            i(n, r))
        }
        )
    }
    ,
    "function" != typeof s.return && (this.return = void 0)
}
function _OverloadYield(t, e) {
    this.v = t,
    this.k = e
}
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this
}
,
_AsyncGenerator.prototype.next = function(t) {
    return this._invoke("next", t)
}
,
_AsyncGenerator.prototype.throw = function(t) {
    return this._invoke("throw", t)
}
,
_AsyncGenerator.prototype.return = function(t) {
    return this._invoke("return", t)
}
;
var LuriClient = function() {
    function t() {
        _classCallCheck(this, t)
    }
    var e, n, r, o;
    return _createClass(t, [{
        key: "sendMessageToChatbotStreaming",
        value: (o = _asyncToGenerator(_regeneratorRuntime().mark(function t(e, n) {
            var r;
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        fetch("/ai-assistant/chatbot/".concat(e, "/messages/streaming"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                message: n
                            })
                        });
                    case 2:
                        if (r = t.sent,
                        r = r.body) {
                            t.next = 7;
                            break
                        }
                        return console.error("Response body is empty"),
                        t.abrupt("return", null);
                    case 7:
                        return t.abrupt("return", this.generateTextChunks(r));
                    case 8:
                    case "end":
                        return t.stop()
                    }
            }, t, this)
        })),
        function(t, e) {
            return o.apply(this, arguments)
        }
        )
    }, {
        key: "sendMessageToChatbot",
        value: (r = _asyncToGenerator(_regeneratorRuntime().mark(function t(e, n) {
            var r;
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        fetch("/ai-assistant/chatbot/".concat(e, "/messages"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                message: n
                            })
                        });
                    case 2:
                        return r = t.sent,
                        t.next = 5,
                        r.json();
                    case 5:
                        return t.abrupt("return", t.sent);
                    case 6:
                    case "end":
                        return t.stop()
                    }
            }, t)
        })),
        function(t, e) {
            return r.apply(this, arguments)
        }
        )
    }, {
        key: "generateTextChunks",
        value: function(a) {
            return _wrapAsyncGenerator(_regeneratorRuntime().mark(function t() {
                var e, n, r, o;
                return _regeneratorRuntime().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            e = a.getReader(),
                            n = new TextDecoder;
                        case 2:
                            return t.next = 5,
                            _awaitAsyncGenerator(e.read());
                        case 5:
                            if (o = t.sent,
                            r = o.done,
                            o = o.value,
                            r)
                                return t.abrupt("break", 14);
                            t.next = 10;
                            break;
                        case 10:
                            return t.next = 12,
                            n.decode(o);
                        case 12:
                            t.next = 2;
                            break;
                        case 14:
                        case "end":
                            return t.stop()
                        }
                }, t)
            }))()
        }
    }, {
        key: "createChatbotForTask",
        value: function(t) {
            return fetch("/ai-assistant/chatbot/task/".concat(t), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t.chatId
            })
        }
    }, {
        key: "createChatbotForImmersion",
        value: function(t) {
            return fetch("/ai-assistant/chatbot/immersionclass/".concat(t), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t.chatId
            })
        }
    }, {
        key: "createChatbotForSupport",
        value: (n = _asyncToGenerator(_regeneratorRuntime().mark(function t() {
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.abrupt("return", fetch("/ai-assistant/chatbot/support", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            return t.chatId
                        }));
                    case 1:
                    case "end":
                        return t.stop()
                    }
            }, t)
        })),
        function() {
            return n.apply(this, arguments)
        }
        )
    }, {
        key: "createChatbotForSearch",
        value: (e = _asyncToGenerator(_regeneratorRuntime().mark(function t() {
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.abrupt("return", fetch("/ai-assistant/chatbot/search", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            return t.chatId
                        }));
                    case 1:
                    case "end":
                        return t.stop()
                    }
            }, t)
        })),
        function() {
            return e.apply(this, arguments)
        }
        )
    }, {
        key: "getMessagesFromChat",
        value: function(t) {
            return fetch("/ai-assistant/chatbot/".concat(t)).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t.map(function(t) {
                    return {
                        messageId: t.id,
                        message: t.message,
                        isFromAssistant: t.isFromAssistant,
                        vote: t.vote
                    }
                })
            })
        }
    }, {
        key: "getLastMessageIdFromChat",
        value: function(t) {
            return fetch("/ai-assistant/chatbot/".concat(t, "/lastAssistantMessageId")).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t.messageId
            })
        }
    }, {
        key: "voteMessage",
        value: function(t, e) {
            fetch("/ai-assistant/chatbot/message/".concat(t, "/vote"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    vote: e.toUpperCase()
                })
            }).then(function(t) {})
        }
    }]),
    t
}()
  , LuriStorage = function() {
    function t() {
        _classCallCheck(this, t),
        _defineProperty(this, "LOCAL_STORAGE_KEY", "luriConversations"),
        _defineProperty(this, "TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS", 72e5)
    }
    return _createClass(t, [{
        key: "saveOnStorage",
        value: function(t) {
            localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(t))
        }
    }, {
        key: "getFromStorage",
        value: function() {
            var t = localStorage.getItem(this.LOCAL_STORAGE_KEY);
            return t ? JSON.parse(t) : null
        }
    }, {
        key: "insertKey",
        value: function(t, e) {
            var n = this.getFromStorage();
            n ? (n[t] = {
                chatId: e,
                expiresAt: Date.now() + this.TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS
            },
            this.saveOnStorage(n)) : this.saveOnStorage(_defineProperty({}, t, {
                chatId: e,
                expiresAt: Date.now() + this.TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS
            }))
        }
    }, {
        key: "removeKey",
        value: function(t) {
            var e = this.getFromStorage();
            e && (delete e[t],
            this.saveOnStorage(e))
        }
    }, {
        key: "getKey",
        value: function(t) {
            var e = this.getFromStorage();
            if (e) {
                var n = e[t];
                if (n && !(n.expiresAt < Date.now()))
                    return n.expiresAt = Date.now() + this.TIME_KEEP_CHAT_SESSION_ALIVE_IN_MS,
                    this.saveOnStorage(e),
                    n.chatId;
                delete e[t],
                this.saveOnStorage(e)
            }
        }
    }]),
    t
}()
  , LuriView = function() {
    function u(t, e) {
        var n = e.codeAreaDefaultCopyMessage
          , r = e.codeAreaCopiedMessage
          , o = e.upvoteIconAltMessage
          , a = e.downvoteIconAltMessage
          , s = e.copyIconAltMessage
          , i = e.upvoteIconTooltipMessage
          , c = e.downvoteIconTooltipMessage
          , e = e.copyIconTooltipMessage;
        _classCallCheck(this, u),
        _defineProperty(this, "nodeFromString", function(t) {
            return (new DOMParser).parseFromString(t, "text/html").body.firstElementChild
        }),
        this.luriClient = t,
        this.codeAreaDefaultCopyMessage = n,
        this.codeAreaCopiedMessage = r,
        this.upvoteIconAltMessage = o,
        this.downvoteIconAltMessage = a,
        this.copyIconAltMessage = s,
        this.copyIconTooltipMessage = e,
        this.upvoteIconTooltipMessage = i,
        this.downvoteIconTooltipMessage = c
    }
    var r;
    return _createClass(u, [{
        key: "setupCliboard",
        value: function() {
            var n = this;
            new ClipboardJS(".chatbot-codeArea-header__copy",{
                target: function(t) {
                    return t.parentElement.nextElementSibling.firstElementChild
                }
            }).on("success", function(t) {
                var e = t.trigger;
                e.innerText = n.codeAreaCopiedMessage,
                e.classList.add("chatbot-codeArea-copied"),
                setTimeout(function() {
                    e.innerText = n.codeAreaDefaultCopyMessage,
                    e.classList.remove("chatbot-codeArea-copied")
                }, 2e3),
                t.clearSelection()
            })
        }
    }, {
        key: "createWaitingForActionStateMessage",
        value: function(t) {
            return this.nodeFromString('\n            <div class="chatbot-msg-waiting">\n                '.concat(t, "\n            </div>\n        "))
        }
    }, {
        key: "createAssistantMessageNode",
        value: function(t) {
            var n = this
              , e = t.message
              , r = t.messageId
              , o = t.vote
              , o = void 0 === o ? void 0 : o
              , t = t.showVoteButtons
              , a = this.nodeFromString('\n            <div class="chatbot-msg chatbot-msg-assistant">\n                <div class="chatbot-msg-body"></div>\n                '.concat(void 0 === t || t ? '<div class="chatbot-actions" data-message-id="'.concat(void 0 === r ? void 0 : r, '" data-value="').concat(null == o ? void 0 : o.toLowerCase(), '">\n                    <div class="chatbot-actions-tooltip">\n                        <img class="chatbot-msg__copy-icon" src="/assets/images/chatbot/copy-icon.svg" alt="').concat(this.copyIconAltMessage, '"/>\n                        <span class="tooltiptext">').concat(this.copyIconTooltipMessage, '</span>\n                    </div>\n                    <div class="chatbot-actions-tooltip">\n                        <span class="chatbot-votes__option upvote" data-value="upvote"></span>\n                        <span class="tooltiptext">').concat(this.upvoteIconTooltipMessage, '</span>\n                    </div>\n                    <div class="chatbot-actions-tooltip">\n                        <span class="chatbot-votes__option downvote" data-value="downvote"></span>\n                        <span class="tooltiptext">').concat(this.downvoteIconTooltipMessage, "</span>\n                    </div>\n                    \n                </div>") : "", "\n            </div>"))
              , t = (a.querySelector(".chatbot-msg-body").innerHTML = LuriMarkdownParser.parseAssistantMessage(e, this.codeAreaDefaultCopyMessage),
            this.setupCliboard(),
            a.querySelectorAll(".chatbot-votes__option").forEach(function(t) {
                t.addEventListener("click", function(t) {
                    var e = t.target.dataset.value;
                    t.target.parentElement.dataset.value !== e && (t = a.querySelector(".chatbot-actions").dataset.messageId,
                    n.voteMessage(t, e))
                })
            }),
            a.querySelector(".chatbot-msg__copy-icon"));
            return null != t && t.addEventListener("click", function(t) {
                var e = a.querySelector(".chatbot-msg-body").textContent
                  , n = t.currentTarget;
                navigator.clipboard.writeText(e).then(function() {
                    n.src = "/assets/images/chatbot/success-copy.svg",
                    setTimeout(function() {
                        n.src = "/assets/images/chatbot/copy-icon.svg"
                    }, 2e3)
                }).catch(function(t) {
                    console.error("Failed to copy: ", t)
                })
            }),
            a
        }
    }, {
        key: "createEmptyAssistantMessageNode",
        value: function() {
            var t = this.createAssistantMessageNode({
                message: " "
            });
            return t.querySelector(".chatbot-actions").style.display = "none",
            t
        }
    }, {
        key: "fillAssistantMessageNodeWithTextChunks",
        value: (r = _asyncToGenerator(_regeneratorRuntime().mark(function t(e, n, r) {
            var o, a, s, i, c, u, l, h, f;
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        if (n && e) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        o = "",
                        a = e.querySelector(".chatbot-msg-body"),
                        c = i = !(s = function(t) {
                            var t = t.split(/(?<=})\B(?={)/)
                              , n = ""
                              , r = !1;
                            return t.forEach(function(t) {
                                var t = JSON.parse(t)
                                  , e = t.message
                                  , t = t.error;
                                n += e,
                                r = r || t
                            }),
                            {
                                messageFromChunk: n,
                                hasError: r
                            }
                        }
                        ),
                        t.prev = 7,
                        l = _asyncIterator(n);
                    case 9:
                        return t.next = 11,
                        l.next();
                    case 11:
                        if (!(i = !(h = t.sent).done)) {
                            t.next = 21;
                            break
                        }
                        h = h.value,
                        h = s(h),
                        f = h.messageFromChunk,
                        h.hasError ? o = f : o += f,
                        a.textContent = o,
                        a.innerHTML = LuriMarkdownParser.parseAssistantMessage(a.textContent, this.codeAreaDefaultCopyMessage),
                        r();
                    case 18:
                        i = !1,
                        t.next = 9;
                        break;
                    case 21:
                        t.next = 27;
                        break;
                    case 23:
                        t.prev = 23,
                        t.t0 = t.catch(7),
                        c = !0,
                        u = t.t0;
                    case 27:
                        if (t.prev = 27,
                        t.prev = 28,
                        i && null != l.return)
                            return t.next = 32,
                            l.return();
                        t.next = 32;
                        break;
                    case 32:
                        if (t.prev = 32,
                        c)
                            throw u;
                        t.next = 35;
                        break;
                    case 35:
                        return t.finish(32);
                    case 36:
                        return t.finish(27);
                    case 37:
                        return t.abrupt("return", e);
                    case 38:
                    case "end":
                        return t.stop()
                    }
            }, t, this, [[7, 23, 27, 37], [28, , 32, 36]])
        })),
        function(t, e, n) {
            return r.apply(this, arguments)
        }
        )
    }, {
        key: "fillAssistantMessageNodeWithMessageId",
        value: function(t, e) {
            t = t.querySelector(".chatbot-actions");
            t.style.display = "flex",
            t.dataset.messageId = e
        }
    }, {
        key: "createUserMessageNode",
        value: function(t) {
            var e = this.nodeFromString('\n            <div class="chatbot-msg chatbot-msg-user">\n                <div class="chatbot-msg-body"></div>\n            </div>');
            return e.querySelector(".chatbot-msg-body").innerText = t,
            e
        }
    }, {
        key: "createSuggestedMessageNode",
        value: function(t) {
            return this.nodeFromString('\n            <button class="chatbot-footer__questions-item">'.concat(t, "</button>"))
        }
    }, {
        key: "voteMessage",
        value: function(t, e) {
            var n = "UPVOTE" === e.toUpperCase()
              , r = document.querySelector('.chatbot-ask-vote[data-message-id="'.concat(t, '"]'))
              , o = (r && (o = r.querySelector(".upvote"),
            r = r.querySelector(".downvote"),
            o.src = n ? "/assets/images/chatbot/upvote-voted.svg" : "/assets/images/chatbot/upvote.svg",
            r.src = n ? "/assets/images/chatbot/downvote.svg" : "/assets/images/chatbot/downvote-voted.svg"),
            document.querySelector('.chatbot-actions[data-message-id="'.concat(t, '"]')));
            o && (o.dataset.value = e),
            this.luriClient.voteMessage(t, e)
        }
    }]),
    u
}()
  , LuriMarkdownParser = _createClass(function t() {
    _classCallCheck(this, t)
});
_defineProperty(LuriMarkdownParser, "parseAssistantMessage", function(t, o) {
    var e;
    if (t)
        return (e = new marked.Renderer).paragraph = function(t) {
            return t = t.replace(/\n/g, "<br>"),
            "<p>".concat(t, "</p>")
        }
        ,
        e.codespan = function(t) {
            return '<code class="chatbot-codeInline">'.concat(t, "</code>")
        }
        ,
        e.html = function(t) {
            return e = {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&apos;"
            },
            t.replace(/[<>&"']/g, function(t) {
                return e[t]
            });
            var e
        }
        ,
        e.link = function(t, e, n) {
            return '<a href="'.concat(t, '" target="_blank">').concat(n, "</a>")
        }
        ,
        e.code = function(t, e, n) {
            var t = hljs.highlightAuto(t)
              , r = t.value
              , t = t.language;
            return '\n                 <div class="chatbot-codeArea">\n                    <div class="chatbot-codeArea-header">\n                        <div class="chatbot-codeArea-header__title">'.concat(t, '</div>\n                        <button class="chatbot-codeArea-header__copy">\n                            ').concat(o, '\n                        </button>\n                    </div>\n                    <div class="chatbot-codeArea-body">\n                        <pre class="chatbot-codeArea-body__content"><code class="chatbot-codeArea-realCode">').concat(r, "</code></pre>\n                    </div>\n                </div>\n        ")
        }
        ,
        t = marked.parse(t, {
            renderer: e
        }),
        DOMPurify.sanitize(t, {
            ADD_ATTR: ["target"]
        })
});
