"use strict";
var _excluded = ["firstAssistantMessage"];
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
        return i
    }
    ;
    var c, i = {}, t = Object.prototype, u = t.hasOwnProperty, l = Object.defineProperty || function(t, e, o) {
        t[e] = o.value
    }
    , e = "function" == typeof Symbol ? Symbol : {}, r = e.iterator || "@@iterator", o = e.asyncIterator || "@@asyncIterator", n = e.toStringTag || "@@toStringTag";
    function s(t, e, o) {
        return Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        t[e]
    }
    try {
        s({}, "")
    } catch (c) {
        s = function(t, e, o) {
            return t[e] = o
        }
    }
    function a(t, e, o, r) {
        var n, s, i, a, e = e && e.prototype instanceof m ? e : m, e = Object.create(e.prototype), r = new $(r || []);
        return l(e, "_invoke", {
            value: (n = t,
            s = o,
            i = r,
            a = p,
            function(t, e) {
                if (a === f)
                    throw new Error("Generator is already running");
                if (a === g) {
                    if ("throw" === t)
                        throw e;
                    return {
                        value: c,
                        done: !0
                    }
                }
                for (i.method = t,
                i.arg = e; ; ) {
                    var o = i.delegate;
                    if (o) {
                        o = function t(e, o) {
                            var r = o.method
                              , n = e.iterator[r];
                            if (n === c)
                                return o.delegate = null,
                                "throw" === r && e.iterator.return && (o.method = "return",
                                o.arg = c,
                                t(e, o),
                                "throw" === o.method) || "return" !== r && (o.method = "throw",
                                o.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                y;
                            r = h(n, e.iterator, o.arg);
                            if ("throw" === r.type)
                                return o.method = "throw",
                                o.arg = r.arg,
                                o.delegate = null,
                                y;
                            n = r.arg;
                            return n ? n.done ? (o[e.resultName] = n.value,
                            o.next = e.nextLoc,
                            "return" !== o.method && (o.method = "next",
                            o.arg = c),
                            o.delegate = null,
                            y) : n : (o.method = "throw",
                            o.arg = new TypeError("iterator result is not an object"),
                            o.delegate = null,
                            y)
                        }(o, i);
                        if (o) {
                            if (o === y)
                                continue;
                            return o
                        }
                    }
                    if ("next" === i.method)
                        i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                        if (a === p)
                            throw a = g,
                            i.arg;
                        i.dispatchException(i.arg)
                    } else
                        "return" === i.method && i.abrupt("return", i.arg);
                    a = f;
                    o = h(n, s, i);
                    if ("normal" === o.type) {
                        if (a = i.done ? g : d,
                        o.arg === y)
                            continue;
                        return {
                            value: o.arg,
                            done: i.done
                        }
                    }
                    "throw" === o.type && (a = g,
                    i.method = "throw",
                    i.arg = o.arg)
                }
            }
            )
        }),
        e
    }
    function h(t, e, o) {
        try {
            return {
                type: "normal",
                arg: t.call(e, o)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    i.wrap = a;
    var p = "suspendedStart"
      , d = "suspendedYield"
      , f = "executing"
      , g = "completed"
      , y = {};
    function m() {}
    function v() {}
    function b() {}
    var e = {}
      , w = (s(e, r, function() {
        return this
    }),
    Object.getPrototypeOf)
      , w = w && w(w(L([])))
      , _ = (w && w !== t && u.call(w, r) && (e = w),
    b.prototype = m.prototype = Object.create(e));
    function C(t) {
        ["next", "throw", "return"].forEach(function(e) {
            s(t, e, function(t) {
                return this._invoke(e, t)
            })
        })
    }
    function S(i, a) {
        var e;
        l(this, "_invoke", {
            value: function(o, r) {
                function t() {
                    return new a(function(t, e) {
                        !function e(t, o, r, n) {
                            var s, t = h(i[t], i, o);
                            if ("throw" !== t.type)
                                return (o = (s = t.arg).value) && "object" == _typeof(o) && u.call(o, "__await") ? a.resolve(o.__await).then(function(t) {
                                    e("next", t, r, n)
                                }, function(t) {
                                    e("throw", t, r, n)
                                }) : a.resolve(o).then(function(t) {
                                    s.value = t,
                                    r(s)
                                }, function(t) {
                                    return e("throw", t, r, n)
                                });
                            n(t.arg)
                        }(o, r, t, e)
                    }
                    )
                }
                return e = e ? e.then(t, t) : t()
            }
        })
    }
    function k(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]),
        2 in t && (e.finallyLoc = t[2],
        e.afterLoc = t[3]),
        this.tryEntries.push(e)
    }
    function M(t) {
        var e = t.completion || {};
        e.type = "normal",
        delete e.arg,
        t.completion = e
    }
    function $(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        t.forEach(k, this),
        this.reset(!0)
    }
    function L(e) {
        if (e || "" === e) {
            var o, t = e[r];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length))
                return o = -1,
                (t = function t() {
                    for (; ++o < e.length; )
                        if (u.call(e, o))
                            return t.value = e[o],
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
    return l(_, "constructor", {
        value: v.prototype = b,
        configurable: !0
    }),
    l(b, "constructor", {
        value: v,
        configurable: !0
    }),
    v.displayName = s(b, n, "GeneratorFunction"),
    i.isGeneratorFunction = function(t) {
        t = "function" == typeof t && t.constructor;
        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
    }
    ,
    i.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
        s(t, n, "GeneratorFunction")),
        t.prototype = Object.create(_),
        t
    }
    ,
    i.awrap = function(t) {
        return {
            __await: t
        }
    }
    ,
    C(S.prototype),
    s(S.prototype, o, function() {
        return this
    }),
    i.AsyncIterator = S,
    i.async = function(t, e, o, r, n) {
        void 0 === n && (n = Promise);
        var s = new S(a(t, e, o, r),n);
        return i.isGeneratorFunction(e) ? s : s.next().then(function(t) {
            return t.done ? t.value : s.next()
        })
    }
    ,
    C(_),
    s(_, n, "Generator"),
    s(_, r, function() {
        return this
    }),
    s(_, "toString", function() {
        return "[object Generator]"
    }),
    i.keys = function(t) {
        var e, o = Object(t), r = [];
        for (e in o)
            r.push(e);
        return r.reverse(),
        function t() {
            for (; r.length; ) {
                var e = r.pop();
                if (e in o)
                    return t.value = e,
                    t.done = !1,
                    t
            }
            return t.done = !0,
            t
        }
    }
    ,
    i.values = L,
    $.prototype = {
        constructor: $,
        reset: function(t) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = c,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = c,
            this.tryEntries.forEach(M),
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
        dispatchException: function(o) {
            if (this.done)
                throw o;
            var r = this;
            function t(t, e) {
                return s.type = "throw",
                s.arg = o,
                r.next = t,
                e && (r.method = "next",
                r.arg = c),
                !!e
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e]
                  , s = n.completion;
                if ("root" === n.tryLoc)
                    return t("end");
                if (n.tryLoc <= this.prev) {
                    var i = u.call(n, "catchLoc")
                      , a = u.call(n, "finallyLoc");
                    if (i && a) {
                        if (this.prev < n.catchLoc)
                            return t(n.catchLoc, !0);
                        if (this.prev < n.finallyLoc)
                            return t(n.finallyLoc)
                    } else if (i) {
                        if (this.prev < n.catchLoc)
                            return t(n.catchLoc, !0)
                    } else {
                        if (!a)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < n.finallyLoc)
                            return t(n.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
                var r = this.tryEntries[o];
                if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var n = r;
                    break
                }
            }
            var s = (n = n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc ? null : n) ? n.completion : {};
            return s.type = t,
            s.arg = e,
            n ? (this.method = "next",
            this.next = n.finallyLoc,
            y) : this.complete(s)
        },
        complete: function(t, e) {
            if ("throw" === t.type)
                throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
            this.method = "return",
            this.next = "end") : "normal" === t.type && e && (this.next = e),
            y
        },
        finish: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var o = this.tryEntries[e];
                if (o.finallyLoc === t)
                    return this.complete(o.completion, o.afterLoc),
                    M(o),
                    y
            }
        },
        catch: function(t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var o, r, n = this.tryEntries[e];
                if (n.tryLoc === t)
                    return "throw" === (o = n.completion).type && (r = o.arg,
                    M(n)),
                    r
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, e, o) {
            return this.delegate = {
                iterator: L(t),
                resultName: e,
                nextLoc: o
            },
            "next" === this.method && (this.arg = c),
            y
        }
    },
    i
}
function asyncGeneratorStep(t, e, o, r, n, s, i) {
    try {
        var a = t[s](i)
          , c = a.value
    } catch (t) {
        return void o(t)
    }
    a.done ? e(c) : Promise.resolve(c).then(r, n)
}
function _asyncToGenerator(a) {
    return function() {
        var t = this
          , i = arguments;
        return new Promise(function(e, o) {
            var r = a.apply(t, i);
            function n(t) {
                asyncGeneratorStep(r, e, o, n, s, "next", t)
            }
            function s(t) {
                asyncGeneratorStep(r, e, o, n, s, "throw", t)
            }
            n(void 0)
        }
        )
    }
}
function ownKeys(e, t) {
    var o, r = Object.keys(e);
    return Object.getOwnPropertySymbols && (o = Object.getOwnPropertySymbols(e),
    t && (o = o.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    })),
    r.push.apply(r, o)),
    r
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(o), !0).forEach(function(t) {
            _defineProperty(e, t, o[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
        })
    }
    return e
}
function _defineProperty(t, e, o) {
    return (e = _toPropertyKey(e))in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o,
    t
}
function _objectWithoutProperties(t, e) {
    if (null == t)
        return {};
    var o, r = _objectWithoutPropertiesLoose(t, e);
    if (Object.getOwnPropertySymbols)
        for (var n = Object.getOwnPropertySymbols(t), s = 0; s < n.length; s++)
            o = n[s],
            0 <= e.indexOf(o) || Object.prototype.propertyIsEnumerable.call(t, o) && (r[o] = t[o]);
    return r
}
function _objectWithoutPropertiesLoose(t, e) {
    if (null == t)
        return {};
    for (var o, r = {}, n = Object.keys(t), s = 0; s < n.length; s++)
        o = n[s],
        0 <= e.indexOf(o) || (r[o] = t[o]);
    return r
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(t, e) {
    for (var o = 0; o < e.length; o++) {
        var r = e[o];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, _toPropertyKey(r.key), r)
    }
}
function _createClass(t, e, o) {
    return e && _defineProperties(t.prototype, e),
    o && _defineProperties(t, o),
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
    var o = t[Symbol.toPrimitive];
    if (void 0 === o)
        return ("string" === e ? String : Number)(t);
    o = o.call(t, e || "default");
    if ("object" != _typeof(o))
        return o;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}
var ChatbotImmersion = function() {
    function r() {
        var t, e = this, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
            codeAreaDefaultCopyMessage: codeAreaDefaultCopyMessage,
            codeAreaCopiedMessage: codeAreaCopiedMessage,
            firstAssistantMessage: firstAssistantMessage,
            upvoteIconAltMessage: upvoteIconAltMessage,
            downvoteIconAltMessage: downvoteIconAltMessage,
            copyIconAltMessage: copyIconAltMessage,
            upvoteIconTooltipMessage: upvoteIconTooltipMessage,
            downvoteIconTooltipMessage: downvoteIconTooltipMessage,
            copyIconTooltipMessage: copyIconTooltipMessage
        };
        return _classCallCheck(e, r),
        e.$video = document.querySelector("#video-container-data"),
        e.$chatbot = document.querySelector("#chatbot"),
        e.$chatbotBody = document.querySelector(".chatbot-body"),
        e.$chatInput = document.querySelector(".chatbot-footer__send-area-content"),
        e.$openChatbotButton = document.querySelector(".chatbot-cta"),
        e.$closeChatbotButton = document.querySelector(".chatbot-header__close"),
        e.$sendMessageButton = document.querySelector(".chatbot-footer__send-area-btn"),
        e.$suggestedMessagesFromChatbot = document.querySelectorAll(".chatbot-footer__questions-item"),
        e.$suggestedMessagesFromChatbotContainer = document.querySelector(".chatbot-footer__questions"),
        e.$cleanConversationButton = document.querySelector(".chatbot-footer__actions-clean-conversation"),
        e.$immersionClassBody = document.querySelector(".class-page"),
        e.luriStorage = new LuriStorage,
        e.luriClient = new LuriClient,
        e.hasSendFirstInteraction = !1,
        t = o.firstAssistantMessage,
        o = _objectWithoutProperties(o, _excluded),
        e.luriView = new LuriView(e.luriClient,o),
        e.$dataset = (null != e.$video ? e.$video : document.querySelector(".class-page__video")).dataset,
        e.immersionClassId = e.$immersionClassBody.dataset.immersionClassId,
        e.immersionClassTitle = e.$dataset.immersionClassTitle,
        e.immersionName = e.$dataset.immersionName,
        e.immersionCategory = e.$dataset.immersionCategoryName,
        e.immersionWorkload = e.$dataset.immersionWorkload,
        e.isAssistantReplying = !1,
        void (e.firstAssistantMessage = t)
    }
    var e, t;
    return _createClass(r, [{
        key: "debounce",
        value: function(t, e) {
            var o;
            return function() {
                clearTimeout(o),
                o = setTimeout(t, e)
            }
        }
    }, {
        key: "setupListeners",
        value: function() {
            var o = this;
            document.addEventListener("ImmersionClassNearCompletionEvent", function() {
                var t;
                o.isChatbotOpen() || (t = o.createSuggestTaskTooltip(),
                o.$openChatbotButton.prepend(t))
            }),
            this.$cleanConversationButton.addEventListener("click", function() {
                2 <= o.$chatbotBody.querySelectorAll(".chatbot-msg").length && !o.isAssistantReplying && (o.$chatbotBody.replaceChildren(),
                o.luriStorage.removeKey(o._getStorageKey()),
                o.showDefaultAssistantMessage(),
                o.showSuggestedMessagesFromChatbot())
            }),
            this.$sendMessageButton.addEventListener("click", function() {
                o.sendMessageToChatbot()
            }),
            this.$chatInput.addEventListener("keydown", function(t) {
                t.stopPropagation();
                var e = t.key;
                o.$chatInput.style.height = 0,
                o.$chatInput.style.height = o.$chatInput.scrollHeight + "px",
                "Enter" !== e || t.shiftKey || (t.preventDefault(),
                o.isAssistantReplying) || o.sendMessageToChatbot()
            }),
            this.$openChatbotButton.addEventListener("click", function() {
                var t;
                o.openChatbot(),
                o.removeSuggestTaskTooltip(),
                o.$chatInput.focus(),
                0 < o.$chatbotBody.children.length ? o.$chatbotBody.scrollTop = o.$chatbotBody.scrollHeight : (t = o.luriStorage.getKey(o._getStorageKey())) ? o.luriClient.getMessagesFromChat(t).then(function(t) {
                    o.recreateChatbotUiFrom(t),
                    o.$chatbotBody.scrollTop = o.$chatbotBody.scrollHeight
                }) : o.showDefaultAssistantMessage()
            }),
            this.$closeChatbotButton.addEventListener("click", function() {
                o.closeChatbot()
            }),
            this.$suggestedMessagesFromChatbot.forEach(function(t) {
                t.addEventListener("click", function(t) {
                    t = t.target.textContent;
                    o.isAssistantReplying || o.replyWithAssistantMessageTo(t)
                })
            })
        }
    }, {
        key: "openChatbot",
        value: function() {
            this.isChatbotOpen() || (this.$immersionClassBody.classList.add("chatbot-open"),
            this.$immersionClassBody.style.marginRight = "600px",
            this.$chatbot.style.width = "600px")
        }
    }, {
        key: "isChatbotOpen",
        value: function() {
            return this.$immersionClassBody.classList.contains("chatbot-open")
        }
    }, {
        key: "closeChatbot",
        value: function() {
            this.isChatbotOpen() && (this.$immersionClassBody.classList.remove("chatbot-open"),
            this.$chatbot.style.width = null,
            this.$immersionClassBody.style.marginRight = "auto")
        }
    }, {
        key: "showDefaultAssistantMessage",
        value: function() {
            this.$chatbotBody.appendChild(this.createAssistantMessageNode({
                message: this.firstAssistantMessage,
                showVoteButtons: !1
            }))
        }
    }, {
        key: "sendMessageToChatbot",
        value: function() {
            var t = this.$chatInput.value.trim();
            t && (this.$chatInput.value = "",
            this.$chatInput.style.height = "",
            this.replyWithAssistantMessageTo(t))
        }
    }, {
        key: "recreateChatbotUiFrom",
        value: function(t) {
            var o = this;
            t.forEach(function(t, e) {
                t.isFromAssistant ? o.$chatbotBody.appendChild(o.createAssistantMessageNode(_objectSpread(_objectSpread({}, t), {}, {
                    showVoteButtons: 0 !== e
                }))) : o.$chatbotBody.appendChild(o.createUserMessageNode(t.message))
            })
        }
    }, {
        key: "getCurrentChatbotId",
        value: (t = _asyncToGenerator(_regeneratorRuntime().mark(function t() {
            var e;
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        if (e = this.luriStorage.getKey(this._getStorageKey()))
                            return t.abrupt("return", e);
                        t.next = 3;
                        break;
                    case 3:
                        return t.next = 5,
                        this.luriClient.createChatbotForImmersion(this.immersionClassId);
                    case 5:
                        return e = t.sent,
                        this.luriStorage.insertKey(this._getStorageKey(), e),
                        t.abrupt("return", e);
                    case 8:
                    case "end":
                        return t.stop()
                    }
            }, t, this)
        })),
        function() {
            return t.apply(this, arguments)
        }
        )
    }, {
        key: "getPromptKind",
        value: function(e) {
            return Array.from(this.$suggestedMessagesFromChatbot).some(function(t) {
                return t.textContent === e
            }) ? e : "Prompt personalizado pelo aluno"
        }
    }, {
        key: "doAnalytics",
        value: function(t) {
            if (!this.hasSendFirstInteraction) {
                try {
                    var e = window.dataLayerAlura || []
                      , o = document.querySelector(".yt-player")
                      , r = null != o ? o.id : null
                      , n = $(".vjs-current-time-display")
                      , s = null != r && window.YT && window.YT.get(r) ? (window.YT.get(r).getCurrentTime() / 60).toFixed(2) : null != n ? parseFloat(n.text().replace(":", ".")) : 0;
                    e.push({
                        event: "started_interact_luri",
                        name: this.immersionClassTitle,
                        immersion: {
                            name: this.immersionName,
                            category: this.immersionCategory
                        },
                        workload: this.immersionWorkload,
                        assisted_time: s,
                        prompt: this.getPromptKind(t)
                    })
                } catch (t) {
                    console.log(t)
                }
                this.hasSendFirstInteraction = !0
            }
        }
    }, {
        key: "replyWithAssistantMessageTo",
        value: (e = _asyncToGenerator(_regeneratorRuntime().mark(function t(e) {
            var o, r, n, s, i, a, c = this;
            return _regeneratorRuntime().wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return o = function(t) {
                            t.scroll({
                                top: t.scrollHeight,
                                behavior: "smooth"
                            })
                        }
                        ,
                        (r = function(t, e) {
                            t.appendChild(e),
                            o(t)
                        }
                        )(this.$chatbotBody, this.createUserMessageNode(e)),
                        this.$chatInput.focus(),
                        this.isAssistantReplying = !0,
                        this.hideSuggestedMessagesFromChatbot(),
                        this.hideCurrentAskForVote(),
                        t.next = 9,
                        this.getCurrentChatbotId();
                    case 9:
                        return n = t.sent,
                        s = this.luriView.createEmptyAssistantMessageNode(),
                        r(this.$chatbotBody, s),
                        this.doAnalytics(e),
                        t.next = 15,
                        this.luriClient.sendMessageToChatbotStreaming(n, e);
                    case 15:
                        return a = t.sent,
                        t.next = 18,
                        this.luriView.fillAssistantMessageNodeWithTextChunks(s, a, function() {
                            return o(c.$chatbotBody)
                        });
                    case 18:
                        return i = t.sent,
                        t.next = 21,
                        this.luriClient.getLastMessageIdFromChat(n);
                    case 21:
                        a = t.sent,
                        this.luriView.fillAssistantMessageNodeWithMessageId(i, a),
                        this.isAssistantReplying = !1;
                    case 24:
                    case "end":
                        return t.stop()
                    }
            }, t, this)
        })),
        function(t) {
            return e.apply(this, arguments)
        }
        )
    }, {
        key: "createAssistantMessageNode",
        value: function(t) {
            var e = t.message
              , o = t.messageId
              , r = t.vote
              , t = t.showVoteButtons;
            return this.luriView.createAssistantMessageNode({
                message: e,
                messageId: void 0 === o ? void 0 : o,
                vote: void 0 === r ? void 0 : r,
                showVoteButtons: void 0 === t || t
            })
        }
    }, {
        key: "createUserMessageNode",
        value: function(t) {
            return this.luriView.createUserMessageNode(t)
        }
    }, {
        key: "hideSuggestedMessagesFromChatbot",
        value: function() {
            this.$suggestedMessagesFromChatbotContainer.classList.add("chatbot-footer__questions--hidden")
        }
    }, {
        key: "showSuggestedMessagesFromChatbot",
        value: function() {
            this.$suggestedMessagesFromChatbotContainer.classList.remove("chatbot-footer__questions--hidden")
        }
    }, {
        key: "hideCurrentAskForVote",
        value: function() {
            var t;
            null != (t = this.$chatbotBody.querySelector(".chatbot-ask-vote")) && t.remove()
        }
    }, {
        key: "createSuggestTaskTooltip",
        value: function() {
            var o = this
              , t = this.luriView.nodeFromString('\n            <div class="suggest-task-tooltip" >\n                <button class="suggest-task-tooltip__close-btn">X</button>\n                <div class="suggest-task-tooltip__text">\n                    <h4>Parabéns por assistir a aula! ✨ </h4>\n                    <p>Quer testar seus conhecimentos com um exercício ou questionário relacionado ao conteúdo abordado na aula?</p>\n                </div>\n                <div class="suggest-task-tooltip__btn-container">\n                    <button class="suggest-task-tooltip__suggest-task-btn" data-message-prompt="Sugira um exercício a partir da aula">Exercício</button>\n                    <button class="suggest-task-tooltip__suggest-task-btn" data-message-prompt="Sugira um questionário a partir da aula">Questionário</button>\n                </div>\n            </div>\n        ');
            return t.querySelectorAll(".suggest-task-tooltip__suggest-task-btn").forEach(function(e) {
                e.addEventListener("click", function() {
                    var t = e.dataset.messagePrompt;
                    o.removeSuggestTaskTooltip(),
                    o.openChatbot(),
                    o.replyWithAssistantMessageTo(t)
                })
            }),
            t.querySelector(".suggest-task-tooltip__close-btn").addEventListener("click", function(t) {
                t.stopPropagation(),
                o.removeSuggestTaskTooltip()
            }),
            t
        }
    }, {
        key: "removeSuggestTaskTooltip",
        value: function() {
            var t;
            null != (t = this.$chatbot.querySelector(".suggest-task-tooltip")) && t.remove()
        }
    }, {
        key: "_getStorageKey",
        value: function() {
            return "IMMERSIONCLASS-".concat(this.immersionClassId)
        }
    }]),
    r
}();
