
(window.webpackJsonp = window.webpackJsonp || []).push([[111], {
    1495: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAaRQTFRFJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlDxMfLCsnJSUlJSUlJSUlJSUlAAASJSUlHRwhJSUlMzIsDxEbBg4hIiIkKCYkJiYmJycmIyMkAAAAJSUltocqyZU2x7twWEcgiYhcypU2uqpXuqpYyLtw2tqIkWUV2tuJPD88WEggiYlctYcqOz48kmUVqJ9l/+Ntp6Bl/+Ns/thp/9lpyrt3+784enhUq6RqraZt+785yrp3aWNDAAEarKZtenhTqqRqAAEZaWRDFRYcFhYc7r9Xl4RClWcWTS4AimQf/91m/8dM/+R3akUM3NJ69sxl/+JwMjIs5sBfZD4LFBkizLhoFhUc28N+l2gURD4soXYju6lto5hd/feQzZIiEBMdDhEeioJOAAASk5Nd46YqAAAQ//B5/9pZsqZk3tF5fnRMIiIkCQwaKCgmwrRsJycm5dZ9NjctuKxnJicmZlgyKionIiMkKSknCQwZAAQdHB0he3NMDhAaKiooICAjKCgnAAAPHR0gHx8iFhgeAgITAAAMJSUl6qtAIQAAACJ0Uk5TwE3S6r/QS0q90UW86M/s7PFJR+ns7ezw7Ozs7+zt7OwA7yfy1woAAAEJSURBVBjTFc/DYgRRFADRG3tsdse2bYxt28rYRr+fzqRWZ1uAUZeWcSaZRCIzcfr8HAaLaFzG73D4M/+iwQpC5bTPbDSafekyQgvARpVUwEqo1YQ1kKogCvAb2aBFe7y7vqm1BLMNPnCKEeLwYEcq3d47JSJFDrB+Q4Yj2ZpSuSXbMIR+WcBIes51KolCIVHpLj1JBnDzCbdNfyKXr+pt7kSeC+JWIe662Ndozq5c8UJLDKJRM3d7bTeZ7DfPueZIBPhg+PIY9Tqd3ujb13CAA7va6dUeYuFw7KPW61QpMINQ+/v1/u7p/fOnjdAk0MZH3X69VKr3u2NSAZudpuNCAY8nEOJTMIH9AbZbURgYBfmBAAAAAElFTkSuQmCC"
    },
    1496: function(e, t, i) {
        e.exports = i.p + "img/96a95f8.jpg?max_age=31536000"
    },
    1497: function(e, t, i) {
        "use strict";
        var n = i(767);
        i.n(n).a
    },
    1498: function(e, t, i) {
        "use strict";
        var n = i(768);
        i.n(n).a
    },
    1499: function(e, t, i) {
        "use strict";
        var n = i(769);
        i.n(n).a
    },
    1500: function(e, t, i) {
        "use strict";
        var n = i(770);
        i.n(n).a
    },
    1501: function(e, t, i) {
        "use strict";
        var n = i(771);
        i.n(n).a
    },
    1502: function(e, t, i) {
        "use strict";
        var n = i(772);
        i.n(n).a
    },
    1503: function(e, t, i) {
        "use strict";
        var n = i(773);
        i.n(n).a
    },
    1504: function(e, t, i) {
        "use strict";
        var n = i(774);
        i.n(n).a
    },
    1505: function(e, t, i) {
        "use strict";
        var n = i(775);
        i.n(n).a
    },
    1506: function(e, t, i) {
        "use strict";
        var n = i(776);
        i.n(n).a
    },
    1515: function(e, t, i) {
        "use strict";
        var n = i(781);
        i.n(n).a
    },
    1516: function(e, t, i) {
        "use strict";
        var n = i(782);
        i.n(n).a
    },
    1517: function(e, t, i) {
        "use strict";
        var n = i(783);
        i.n(n).a
    },
    1684: function(e, t, i) {
        "use strict";
        i.r(t);
        var n = [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("h1", {
                staticClass: "seo-title"
            }, [this._v("\n    企鹅电竞—最专业的手游电竞直播平台"), t("img", {
                attrs: {
                    alt: "企鹅电竞官网",
                    src: i(1495)
                }
            })])
        }
        ]
          , a = i(4)
          , r = i.n(a)
          , o = i(6)
          , s = i(111)
          , d = {
            name: "IndexBannerItem",
            components: {
                CoverImage: s.a
            },
            props: {
                selected: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                index: {
                    type: Number,
                    required: !0,
                    default: -1
                },
                banner: {
                    type: Object,
                    required: !0,
                    default: ()=>({})
                }
            },
            data: ()=>({}),
            methods: {
                selectBanner() {
                    this.$emit("select", this.banner, this.index)
                }
            }
        }
          , l = i(2)
          , c = {
            components: {
                Banner: Object(l.a)(d, function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("li", {
                        directives: [{
                            name: "dc-report",
                            rawName: "v-dc-report.show",
                            value: {
                                mid: 270702,
                                opid: 27070201,
                                ext33: e.index,
                                resource_id: e.banner.bannerId,
                                ext5: (e.banner.reportInfo || {}).algoInfo,
                                ext26: (e.banner.reportInfo || {}).algoId,
                                ext27: (e.banner.reportInfo || {}).algoSource
                            },
                            expression: "{\n    mid: 270702,\n    opid: 27070201,\n    ext33:index,\n    resource_id: banner.bannerId,\n    ext5: (banner.reportInfo || {}).algoInfo,\n    ext26: (banner.reportInfo || {}).algoId,\n    ext27: (banner.reportInfo || {}).algoSource\n  }",
                            modifiers: {
                                show: !0
                            }
                        }, {
                            name: "dc-report",
                            rawName: "v-dc-report.click",
                            value: {
                                mid: 270702,
                                opid: 27070202,
                                game_id: e.banner.appid,
                                ext6: e.banner.anchorId,
                                ext33: e.index,
                                resource_id: e.banner.bannerId,
                                ext5: (e.banner.reportInfo || {}).algoInfo,
                                ext26: (e.banner.reportInfo || {}).algoId,
                                ext27: (e.banner.reportInfo || {}).algoSource
                            },
                            expression: "{\n    mid: 270702,\n    opid: 27070202,\n    game_id: banner.appid,\n    ext6: banner.anchorId,\n    ext33:index,\n    resource_id:banner.bannerId,\n    ext5: (banner.reportInfo || {}).algoInfo,\n    ext26: (banner.reportInfo || {}).algoId,\n    ext27: (banner.reportInfo || {}).algoSource\n  }",
                            modifiers: {
                                click: !0
                            }
                        }],
                        class: e.selected && "current",
                        on: {
                            click: e.selectBanner
                        }
                    }, [i("a", {
                        staticClass: "lbl-a"
                    }, [i("CoverImage", {
                        staticClass: "lbl-img",
                        attrs: {
                            src: e.banner.videoInfo.url,
                            alt: e.banner.title
                        }
                    }), e._v(" "), i("span", {
                        staticClass: "lbl-mask"
                    }), e._v(" "), i("span", {
                        staticClass: "lbl-border"
                    }), e._v(" "), i("p", {
                        staticClass: "lbl-info"
                    }, [e._v("\n      " + e._s(e.banner.title) + "\n    ")])], 1)])
                }, [], !1, null, null, null).exports
            },
            props: {
                current: {
                    type: Number,
                    required: !0,
                    default: 0
                },
                banners: {
                    type: Array,
                    required: !0,
                    default: ()=>[]
                }
            },
            computed: {
                showedBanners() {
                    return this.banners.slice(0, 5)
                }
            },
            methods: {
                selectBanner(e, t) {
                    this.banners[t] && this.$emit("select", e, t)
                }
            }
        }
          , p = Object(l.a)(c, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("ul", {
                staticClass: "index-banner-list"
            }, e._l(e.showedBanners, function(t, n) {
                return i("banner", {
                    key: n,
                    attrs: {
                        index: n,
                        banner: t,
                        selected: e.current == n
                    },
                    on: {
                        select: e.selectBanner
                    }
                })
            }), 1)
        }, [], !1, null, null, null).exports
          , m = i(108)
          , h = i(24)
          , u = i(1496)
          , f = i.n(u)
          , g = i(3)
          , v = {
            name: "IndexBanner",
            components: {
                BannerList: p,
                Player: m.a
            },
            props: {
                banners: {
                    type: Array,
                    required: !0,
                    default: ()=>[]
                },
                bgInfo: {
                    type: Object,
                    required: !0,
                    default: ()=>({})
                }
            },
            head() {
                return {
                    script: [],
                    link: [{
                        rel: "preload",
                        as: "image",
                        href: this.background
                    }]
                }
            },
            data() {
                return {
                    lockReload: !1,
                    reloadTime: "",
                    waitFlag: !1,
                    wait: 300,
                    liveInfo: null,
                    isQgamePad: !!g.b && this.$isQgamePad()
                }
            },
            computed: r()({}, Object(o.c)("live-home-page", ["currentBanner"]), {
                banner() {
                    return this.banners[this.currentBanner]
                },
                bannerLen() {
                    return Math.min((this.banners || []).length, 5)
                },
                background() {
                    return this.bgInfo.imgUrl || f.a
                }
            }),
            created() {
                if (g.d) {
                    const e = this.getRandom(this.bannerLen);
                    this.$store.commit("live-home-page/setCurrentBanner", e)
                }
                this.liveInfo = this.banner || {}
            },
            beforeMount() {
                this.getLiveInfo(this.liveInfo.anchorId)
            },
            mounted() {
                this.backgroundImgReport(),
                this.$quicklink({
                    el: this.$el
                })
            },
            methods: {
                getRandom() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return parseInt(Math.random() * e, 10)
                },
                selectBanner(e, t) {
                    this.$nextTick().then(()=>{
                        this.waitFlag && this.timeout || (this.waitFlag = !0,
                        this.timeout = setTimeout(()=>{
                            this.waitFlag = !1,
                            this.timeout = null
                        }
                        , this.wait),
                        this.$store.commit("live-home-page/setCurrentBanner", t),
                        this.changePlay(e))
                    }
                    )
                },
                changePlay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const t = e.videoInfo
                      , i = void 0 === t ? {} : t
                      , n = e.anchorId
                      , a = i.streamInfos
                      , r = void 0 === a ? [] : a;
                    2 === i.provider && r.length > 0 && (this.liveInfo = e),
                    this.getLiveInfo(n).then(e=>{
                        this.liveInfo = e
                    }
                    ).catch(e=>{
                        this.playNext()
                    }
                    )
                },
                inited() {
                    setTimeout(()=>{
                        const e = this.$refs.anchorLink;
                        e && e.$el && e.$el.href && this.$quicklink({
                            urls: [e.$el.href]
                        })
                    }
                    , 1e3)
                },
                playNext() {
                    const e = (this.currentBanner + 1) % this.bannerLen;
                    this.selectBanner(this.banners[e], e)
                },
                goBgInfoGuide() {
                    if (this.bgInfo && this.bgInfo.jumpUrl && !this.$isQgamePad()) {
                        const e = this.bgInfo.jumpUrl || ""
                          , t = this.bgInfo.appid || ""
                          , i = h.a.getUrlParam("anchorid", e) || h.a.getUrlParam("anchorId", e) || "";
                        this.$report({
                            mid: 270708,
                            opid: 27070802,
                            ext0: t,
                            ext6: i
                        }),
                        window.open(this.bgInfo.jumpUrl, "bgInfo")
                    }
                },
                backgroundImgReport() {
                    if (this.bgInfo.imgUrl) {
                        const e = this.bgInfo.jumpUrl || ""
                          , t = this.bgInfo.appid || ""
                          , i = h.a.getUrlParam("anchorid", e) || h.a.getUrlParam("anchorId", e) || "";
                        this.$report({
                            mid: 270708,
                            opid: 27070801,
                            ext0: t,
                            ext6: i
                        })
                    }
                },
                getLiveInfo(e) {
                    return this.$store.dispatch("live-info/getLiveInfo", {
                        anchorId: e
                    })
                }
            }
        }
          , b = (i(1497),
        i(1498),
        Object(l.a)(v, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.show",
                    value: {
                        mid: 270701,
                        opid: 27070102
                    },
                    expression: "{\n    mid: 270701,\n    opid: 27070102,}",
                    modifiers: {
                        show: !0
                    }
                }]
            }, [i("div", {
                staticClass: "index-banner",
                class: e.bgInfo && e.bgInfo.jumpUrl && "gui-class-pointer",
                style: "background-image: url(" + e.background + ");",
                on: {
                    click: e.goBgInfoGuide
                }
            }, [i("div", {
                staticClass: "index-banner-container",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [i("div", {
                staticClass: "index-banner-player-wrapper"
            }, [e.liveInfo ? i("player", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.mod",
                    value: {
                        mid: 9
                    },
                    expression: "{mid: 9}",
                    modifiers: {
                        mod: !0
                    }
                }],
                key: e.liveInfo.videoInfo && e.liveInfo.videoInfo.anchorId,
                ref: "player",
                staticClass: "index-banner-player",
                attrs: {
                    "live-info": e.liveInfo,
                    responsive: !1,
                    "show-barrage-control": !1,
                    "show-live-set": !1,
                    "is-show-replay": !0,
                    "is-show-stop": !1,
                    "is-show-client-download": !0,
                    "index-page": !0,
                    "disabled-fullscreen": !0
                },
                on: {
                    ended: e.playNext,
                    inited: function(t) {
                        e.inited()
                    }
                }
            }, [e.banner && e.banner.anchorId ? i("e-link", {
                ref: "anchorLink",
                staticClass: "index-player-room",
                class: {
                    "pad-fix": e.isQgamePad
                },
                attrs: {
                    to: "/" + e.banner.anchorId,
                    target: "_blank",
                    "flag-config": {
                        type: 25,
                        index: e.currentBanner || 0
                    }
                }
            }, [i("button", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.click",
                    value: {
                        mid: 270702,
                        opid: 27070203,
                        game_id: e.banner.appid,
                        flag_type: 25,
                        flag_pos: e.currentBanner || 0,
                        ext6: e.banner.anchorId
                    },
                    expression: "{\n                mid: 270702,\n                opid: 27070203,\n                game_id: banner.appid,\n                flag_type: 25,\n                flag_pos: currentBanner || 0,\n                ext6: banner.anchorId\n              }",
                    modifiers: {
                        click: !0
                    }
                }],
                staticClass: "btn-room",
                attrs: {
                    type: "button"
                }
            })]) : e._e()], 1) : e._e()], 1), e._v(" "), i("banner-list", {
                attrs: {
                    banners: e.banners,
                    current: e.currentBanner
                },
                on: {
                    select: e.selectBanner
                }
            })], 1)])])
        }, [], !1, null, "26b0c6bf", null).exports)
          , I = i(383)
          , x = i(10)
          , w = i(121)
          , y = i(120)
          , _ = i(119)
          , L = {
            name: "IndexModRecommendItem",
            components: {
                BlueTag: w.a,
                SDtag: y.a,
                TagRightAll: _.a,
                CoverImage: s.a,
                Player: m.a
            },
            filters: {
                ToShortNum: x.a.toshortNum
            },
            props: {
                recommendUnit: {
                    type: Object,
                    required: !0,
                    default: ()=>({})
                },
                index: {
                    type: Number,
                    default: 0
                }
            },
            data: ()=>({
                isShowVod: !1,
                liveInfo: null,
                isAutoPlay: !0,
                isPreScanEnd: !1
            }),
            computed: r()({}, Object(o.c)("display-mode", ["iOSReviewModeV1", "filterTags"]), Object(o.c)("live-home-page", ["defaultBgPic"]), {
                leftTagText() {
                    const e = this.programRes.leftTag
                      , t = (void 0 === e ? {} : e).name;
                    return void 0 === t ? "" : t
                },
                rightTagText() {
                    const e = (this.recommendUnit || {}).tag
                      , t = void 0 === e ? "" : e;
                    return this.iOSReviewModeV1 && t && this.filterTags.some(e=>t.indexOf(e) > -1) ? "" : t
                },
                pkInfo() {
                    const e = (this.recommendUnit || {}).pkInfo;
                    return void 0 === e ? {} : e
                },
                showSDtag() {
                    return this.programRes.iconTag && 100 === this.programRes.iconTag.position
                },
                SDtagUrl() {
                    return this.programRes.iconTag.url || ""
                },
                showBlueTag() {
                    return !this.showSDtag && this.leftTagText && !(this.tagRightAllInfo && this.tagRightAllInfo.rightTag && this.tagRightAllInfo.rightTag.name && this.tagRightAllInfo && this.tagRightAllInfo.iconTag && this.tagRightAllInfo.iconTag.url) && !(this.tagRightAllInfo && this.tagRightAllInfo.rightTag && this.tagRightAllInfo.rightTag.name)
                },
                tagRightAllInfo() {
                    return this.recommendUnit.programRes || null
                },
                programRes() {
                    return this.recommendUnit.programRes || {}
                },
                frameBg() {
                    return this.programRes && this.programRes.coverFrame && this.programRes.coverFrame.url169
                }
            }),
            mounted() {
                this.$subscribe("can-auto-play", this.handleAutoPlay),
                this.$subscribe("carton-tip.show", this.handleShowNotice)
            },
            beforeDestroy() {
                clearTimeout(this.timer)
            },
            methods: {
                handleVodLoad() {
                    this.isStay = !0,
                    this.timer = setTimeout(()=>{
                        this.isStay && this.loadVod()
                    }
                    , 500)
                },
                loadVod() {
                    const e = this.recommendUnit.anchorId;
                    this.liveInfo ? this.isShowVod = !0 : this.$store.dispatch("live-info/getLiveInfo", {
                        anchorId: e
                    }).then(e=>{
                        const t = e.videoInfo
                          , i = (void 0 === t ? {} : t).streamInfos;
                        (void 0 === i ? [] : i).length && (this.liveInfo = e,
                        this.isShowVod = !0)
                    }
                    )
                },
                unloadVod() {
                    const e = (this.$refs || {}).player || "";
                    this.isStay = !1,
                    e && e.destroy(),
                    this.isShowVod = !1,
                    this.liveInfo = null,
                    this.isPreScanEnd = !1
                },
                inited() {
                    const e = ((this.$refs || {}).player || {}).player || {}
                      , t = e.player || {}
                      , i = t.el || ""
                      , n = (t.panel || {}).el || "";
                    i || (this.isPreScanEnd = !0),
                    e.setVolume(0),
                    i && i.removeChild && i.removeChild(n)
                },
                handleEnd() {
                    this.isPreScanEnd = !0
                },
                handleAutoPlay(e) {
                    this.isAutoPlay = !!e
                },
                handleShowNotice() {
                    this.isPreScanEnd = !0
                }
            }
        }
          , A = (i(1502),
        {
            name: "",
            components: {
                RecommendUnit: Object(l.a)(L, function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("li", {
                        staticClass: "recommend-unit",
                        on: {
                            mouseenter: e.handleVodLoad,
                            mouseleave: e.unloadVod
                        }
                    }, [i("e-link", {
                        attrs: {
                            to: "/" + (e.recommendUnit.anchorId ? e.recommendUnit.anchorId : ""),
                            target: "_blank",
                            title: (e.recommendUnit.anchorName || "") + " " + (e.recommendUnit.title || ""),
                            "flag-config": {
                                type: 26,
                                index: e.index
                            }
                        }
                    }, [e.showBlueTag ? i("blue-tag", {
                        attrs: {
                            "tag-text": e.leftTagText
                        }
                    }) : e._e(), e._v(" "), e.frameBg ? i("span", {
                        staticClass: "index-live-list-celebration",
                        style: {
                            "background-image": "url(" + e.frameBg + ")"
                        }
                    }) : e._e(), e._v(" "), i("div", {
                        staticClass: "content",
                        style: "" + (e.defaultBgPic && "background:url(" + e.defaultBgPic + ") center center no-repeat")
                    }, [e.showSDtag ? i("SDtag", {
                        attrs: {
                            url: e.SDtagUrl
                        }
                    }) : e._e(), e._v(" "), e.tagRightAllInfo && !e.showSDtag ? i("TagRightAll", {
                        attrs: {
                            "is-index-recommond": !0,
                            info: e.tagRightAllInfo
                        }
                    }) : e._e(), e._v(" "), e.isShowVod && e.isAutoPlay ? i("div", {
                        staticClass: "big-bg-video-wrapper"
                    }, [e.liveInfo ? i("player", {
                        key: e.liveInfo.videoInfo && e.liveInfo.videoInfo.anchorId,
                        ref: "player",
                        staticClass: "big-bg-video",
                        attrs: {
                            "live-info": e.liveInfo,
                            responsive: !0,
                            "show-barrage-control": !1,
                            "show-live-set": !1,
                            "is-show-replay": !1,
                            "is-show-stop": !1,
                            "index-page": !1,
                            "show-pic": !1,
                            "disabled-fullscreen": !0,
                            "is-card-vod": !0
                        },
                        on: {
                            ended: function(t) {
                                e.handleEnd()
                            },
                            inited: function(t) {
                                e.inited()
                            }
                        }
                    }) : e._e()], 1) : e._e(), e._v(" "), e.recommendUnit.videoInfo && e.recommendUnit.videoInfo.url && !e.isShowVod ? i("CoverImage", {
                        staticClass: "zb-img",
                        attrs: {
                            src: e.recommendUnit.videoInfo.url,
                            alt: (e.recommendUnit.anchorName || "") + " " + (e.recommendUnit.title || "")
                        }
                    }) : e._e(), e._v(" "), e.recommendUnit.anchorName && !e.isShowVod ? i("span", {
                        staticClass: "mask"
                    }, [i("i", {
                        staticClass: "icon-play"
                    })]) : e._e(), e._v(" "), e.recommendUnit.anchorName ? i("div", {
                        staticClass: "info-anchor"
                    }, [i("span", {
                        staticClass: "info-anchor-text"
                    }, [e._v(e._s(e.recommendUnit.title || ""))])]) : e._e()], 1)], 1)], 1)
                }, [], !1, null, "11301836", null).exports,
                IndexTitle: I.a
            },
            props: {
                recommend: {
                    type: Object,
                    required: !0,
                    default: ()=>({})
                }
            },
            computed: r()({}, Object(o.c)("live-home-page", ["liveListMap"]), {
                appid() {
                    return this.recommend.appid || ""
                },
                recommend4() {
                    const e = this.appid
                      , t = this.liveListMap || {};
                    return t[e] && t[e].liveList && t[e].liveList.slice(0, 4) || []
                },
                gameUrl() {
                    return "/livelist?layoutid=" + (this.recommend.appid || "")
                }
            })
        })
          , k = (i(1503),
        {
            components: {
                GameModule: Object(l.a)(A, function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("li", {
                        directives: [{
                            name: "dc-report",
                            rawName: "v-dc-report.show",
                            value: {
                                mid: 270703,
                                opid: 27070301,
                                appid: e.recommend.appid,
                                ext6: e.recommend4.map(function(e) {
                                    return e.anchorId || 0
                                }).join("_")
                            },
                            expression: "{\n    mid: 270703,\n    opid: 27070301,\n    appid: recommend.appid,\n    ext6: recommend4.map(item => (item.anchorId || 0)).join('_')}",
                            modifiers: {
                                show: !0
                            }
                        }]
                    }, [i("index-title", {
                        attrs: {
                            title: e.recommend.gameName,
                            url: e.gameUrl,
                            "title-report": {
                                mid: 270703,
                                opid: 27070302,
                                appid: e.recommend.appid
                            },
                            "more-report": {
                                mid: 270703,
                                opid: 27070303,
                                appid: e.recommend.appid
                            },
                            "has-row": !0,
                            icon: e.recommend.appid
                        }
                    }), e._v(" "), i("ul", e._l(e.recommend4, function(t, n) {
                        return i("recommend-unit", {
                            directives: [{
                                name: "dc-report",
                                rawName: "v-dc-report.show",
                                value: {
                                    mid: 270703,
                                    opid: 27070305,
                                    appid: e.recommend.appid,
                                    ext6: t.anchorId
                                },
                                expression: "{ mid: 270703, opid: 27070305, appid: recommend.appid, ext6: unit.anchorId }",
                                modifiers: {
                                    show: !0
                                }
                            }, {
                                name: "dc-report",
                                rawName: "v-dc-report.click",
                                value: {
                                    mid: 270703,
                                    opid: 27070304,
                                    appid: e.recommend.appid,
                                    flag_type: 26,
                                    flag_pos: n,
                                    ext6: t.anchorId
                                },
                                expression: "{\n        mid: 270703,\n        opid: 27070304,\n        appid: recommend.appid,\n        flag_type: 26,\n        flag_pos: index,\n        ext6: unit.anchorId\n      }",
                                modifiers: {
                                    click: !0
                                }
                            }],
                            key: n,
                            attrs: {
                                index: n,
                                "recommend-unit": t
                            }
                        })
                    }), 1)], 1)
                }, [], !1, null, null, null).exports
            },
            props: {
                recommends: {
                    type: Array,
                    required: !0,
                    default: ()=>[]
                }
            },
            mounted() {
                this.$quicklink({
                    el: this.$el
                })
            }
        })
          , S = (i(1504),
        Object(l.a)(k, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("ul", {
                staticClass: "index-mod-recommend"
            }, e._l(e.recommends, function(t, n) {
                return n < 3 ? i("game-module", {
                    key: n,
                    attrs: {
                        recommend: t
                    }
                }) : e._e()
            }), 1)
        }, [], !1, null, "bfd184bc", null).exports)
          , U = i(107)
          , R = {
            components: {
                LiveItem: U.a,
                IndexTitle: I.a
            },
            props: {
                node: {
                    type: Object,
                    required: !1,
                    default: ()=>({})
                }
            },
            data: ()=>({}),
            computed: r()({}, Object(o.c)("live-home-page", ["liveListMap"]), {
                appid() {
                    return this.node.appid || ""
                },
                gameUrl() {
                    return `/livelist?layoutid=${this.appid}`
                },
                liveList() {
                    const e = this.appid
                      , t = this.liveListMap || {};
                    return t[e] && t[e].liveList || []
                },
                tagList() {
                    const e = this.appid
                      , t = this.liveListMap || {};
                    return t[e] && t[e].tagList || []
                },
                fetched() {
                    const e = this.appid
                      , t = this.liveListMap || {};
                    return t[e] && t[e].fetched || !1
                }
            }),
            watch: {
                fetched(e) {
                    e && this.$quicklink({
                        el: this.$refs.list
                    })
                }
            }
        }
          , C = (i(1505),
        Object(l.a)(R, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.show",
                    value: {
                        mid: 270706,
                        opid: 27070607,
                        ext0: e.node.appid
                    },
                    expression: "{mid: 270706, opid:27070607, ext0: node.appid}",
                    modifiers: {
                        show: !0
                    }
                }],
                staticClass: "index-mod-live",
                attrs: {
                    "data-fetched": Boolean(e.fetched).toString(),
                    "data-appid": e.node.appid
                }
            }, [i("index-title", {
                attrs: {
                    title: e.node.gameName || "",
                    url: e.gameUrl,
                    "tag-list": e.tagList,
                    appid: e.node.appid,
                    "title-report": {
                        mid: 270706,
                        opid: 27070602,
                        ext0: e.node.appid
                    },
                    icon: e.node.appid,
                    "more-report": {
                        mid: 270706,
                        opid: 27070603,
                        ext0: e.node.appid
                    },
                    "has-row": !0
                }
            }), e._v(" "), i("ul", {
                ref: "list",
                staticClass: "list-live"
            }, e._l(e.liveList.slice(0, 8), function(t, n) {
                return i("live-item", {
                    directives: [{
                        name: "dc-report",
                        rawName: "v-dc-report.click",
                        value: {
                            mid: 270706,
                            opid: 27070604,
                            game_id: e.node.appid,
                            ext6: t.anchorId
                        },
                        expression: "{\n        mid: 270706,\n        opid: 27070604,\n        game_id: node.appid,\n        ext6: live.anchorId\n      }",
                        modifiers: {
                            click: !0
                        }
                    }],
                    key: n,
                    attrs: {
                        live: t,
                        "is-index": !0,
                        appid: e.node.appid,
                        target: "blank"
                    }
                })
            }), 1)], 1)
        }, [], !1, null, "6c79f114", null).exports)
          , N = {
            components: {
                LiveItem: U.a,
                IndexTitle: I.a
            },
            props: {
                node: {
                    type: Object,
                    required: !1,
                    default: ()=>({})
                }
            },
            data: ()=>({}),
            computed: r()({}, Object(o.c)("live-home-page", ["liveListMap"]), {
                appid() {
                    return this.node.appid || ""
                },
                gameUrl() {
                    return `/livelist?layoutid=${this.appid}`
                },
                liveList() {
                    const e = this.appid
                      , t = this.node.num
                      , i = this.liveListMap || {};
                    let n = i[e] && i[e].liveList || [];
                    n.length > t && (n = n.slice(0, t));
                    let a = n.length;
                    return a = 4 * parseInt(a / 4, 10),
                    n.slice(0, a)
                },
                tagList() {
                    const e = this.appid
                      , t = this.liveListMap || {};
                    return t[e] && t[e].tagList || []
                },
                fetched() {
                    const e = this.appid
                      , t = this.liveListMap || {};
                    return t[e] && t[e].fetched || !1
                }
            }),
            watch: {
                fetched(e) {
                    e && (this.reportExposure(),
                    this.$quicklink({
                        el: this.$refs.list
                    }))
                }
            },
            methods: {
                reportExposure() {
                    this.$_exposureReported || (setTimeout(()=>{
                        this.$report({
                            mid: 270706,
                            opid: 27070607,
                            appid: this.node.appid,
                            ext6: this.liveList.map(e=>e.anchorId || 0).join("_")
                        })
                    }
                    , 300),
                    this.$_exposureReported = !0)
                }
            }
        }
          , B = {
            components: {
                ModZone: C,
                ModCommon: Object(l.a)(N, function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("div", {
                        staticClass: "index-mod-live",
                        attrs: {
                            "data-fetched": Boolean(e.fetched).toString(),
                            "data-appid": e.node.appid
                        }
                    }, [i("index-title", {
                        attrs: {
                            title: e.node.gameName || "",
                            url: e.gameUrl,
                            "tag-list": e.tagList,
                            appid: e.node.appid,
                            icon: e.node.appid,
                            "title-report": {
                                mid: 270706,
                                opid: 27070602,
                                appid: e.node.appid
                            },
                            "more-report": {
                                mid: 270706,
                                opid: 27070603,
                                appid: e.node.appid
                            },
                            "has-row": !0
                        }
                    }), e._v(" "), i("ul", {
                        ref: "list",
                        staticClass: "list-live"
                    }, e._l(e.liveList, function(t, n) {
                        return i("live-item", {
                            directives: [{
                                name: "dc-report",
                                rawName: "v-dc-report.click",
                                value: {
                                    mid: 270706,
                                    opid: 27070604,
                                    game_id: e.node.appid,
                                    ext6: t.anchorId
                                },
                                expression: "{\n        mid: 270706,\n        opid: 27070604,\n        game_id: node.appid,\n        ext6: live.anchorId\n      }",
                                modifiers: {
                                    click: !0
                                }
                            }],
                            key: n,
                            attrs: {
                                live: t,
                                "is-index": !0,
                                appid: e.node.appid,
                                target: "blank",
                                "flag-config": {
                                    type: 26,
                                    index: n
                                }
                            }
                        })
                    }), 1)], 1)
                }, [], !1, null, null, null).exports
            },
            props: {
                nodes: {
                    type: Array,
                    required: !1,
                    default: ()=>[]
                }
            },
            data: ()=>({}),
            computed: r()({}, Object(o.c)("live-home-page", ["liveListMap"]))
        }
          , $ = (i(1506),
        Object(l.a)(B, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.show",
                    value: {
                        mid: 270706,
                        opid: 27070601
                    },
                    expression: "{mid: 270706, opid: 27070601}",
                    modifiers: {
                        show: !0
                    }
                }]
            }, e._l(e.nodes, function(t, n) {
                return i("div", {
                    key: n + "_" + t.appid
                }, [t.available && e.liveListMap[t.appid] && (!e.liveListMap[t.appid].fetched || e.liveListMap[t.appid].fetched && e.liveListMap[t.appid] && t.num && e.liveListMap[t.appid].liveList[t.num - 1] && e.liveListMap[t.appid].liveList[t.num - 1].anchorId) ? [t.blockPic && 7 == t.num ? i("mod-zone", {
                    attrs: {
                        node: t
                    }
                }) : i("mod-common", {
                    attrs: {
                        node: t
                    }
                })] : e._e()], 2)
            }), 0)
        }, [], !1, null, null, null).exports)
          , M = i(22)
          , T = i(106)
          , j = i(112)
          , O = i(1668)
          , P = i(12)
          , q = {
            name: "SkeletonBox",
            props: {
                maxWidth: {
                    default: 100,
                    type: Number
                },
                minWidth: {
                    default: 80,
                    type: Number
                },
                height: {
                    default: "1em",
                    type: String
                },
                width: {
                    default: null,
                    type: String
                }
            },
            computed: {
                computedWidth() {
                    return this.width || `${Math.floor(Math.random() * (this.maxWidth - this.minWidth) + this.minWidth)}%`
                }
            }
        }
          , E = (i(1515),
        Object(l.a)(q, function() {
            var e = this.$createElement;
            return (this._self._c || e)("span", {
                staticClass: "SkeletonBox",
                style: {
                    height: this.height,
                    width: this.computedWidth
                }
            })
        }, [], !1, null, null, null).exports);
        const J = {
            props: {
                width: "100%",
                height: "6em"
            }
        };
        function F(e) {
            let t, i = e.componentFactory, n = e.loading, a = void 0 === n ? E : n, r = e.loadingData, o = void 0 === r ? J : r;
            return ()=>({
                component: new Promise(e=>{
                    t = e
                }
                ),
                loading: {
                    mounted() {
                        if (!("IntersectionObserver"in window))
                            return void i().then(t);
                        const e = new IntersectionObserver(n=>{
                            n[0].intersectionRatio <= 0 || (e.unobserve(this.$el),
                            i().then(t))
                        }
                        );
                        e.observe(this.$el)
                    },
                    render: e=>e(a, o)
                }
            })
        }
        const Q = new P.a;
        var D = {
            name: "Index",
            head() {
                return {
                    title: "企鹅电竞-腾讯游戏官方直播平台",
                    meta: [{
                        name: "keywords",
                        content: this.keywords || "电竞,QGC,手机游戏,腾讯,腾讯游戏,QQ手游,直播,游戏直播,赛事直播,美女直播,游戏视频,绝地求生直播,王者荣耀游戏直播,英雄联盟直播,刺激战场 游戏直播,穿越火线直播,堡垒之夜直播,主机游戏直播,DNF直播,CF手游直播,QQ飞车手游直播,二次元直播"
                    }, {
                        name: "description",
                        content: this.description || `企鹅电竞-超越游戏快乐，腾讯游戏官方直播平台，包含${this.gameKeys || ""}等热门游戏直播以及单机游戏、手游等游戏直播，热门赛事直播与游戏直播，热门手游直播尽在企鹅电竞`
                    }, {
                        "baidu-gxt-verify-token": "f3d9b0975165c566f6c31c65495ad811"
                    }],
                    link: [{
                        rel: "dns-prefetch",
                        href: "//3954.liveplay.myqcloud.com"
                    }, {
                        rel: "dns-prefetch",
                        href: "//3954-pcflv.liveplay.myqcloud.com"
                    }, {
                        rel: "dns-prefetch",
                        href: "//3954-pchls.liveplay.myqcloud.com"
                    }, {
                        rel: "dns-prefetch",
                        href: "//txpcdn-direct.liveplay.egame.qq.com"
                    }, {
                        rel: "dns-prefetch",
                        href: "//txpcdn.liveplay.egame.qq.com"
                    }]
                }
            },
            components: {
                IndexBanner: b,
                ModRecommend: S,
                ModLive: $,
                SideBar: ()=>i.e(88).then(i.bind(null, 1673)),
                Notifier: ()=>i.e(87).then(i.bind(null, 1731)),
                UpdateNotice: ()=>i.e(85).then(i.bind(null, 1726)),
                PcclientUpdateNotice: ()=>i.e(91).then(i.bind(null, 1721)),
                FeedbackDialog: ()=>Promise.all([i.e(1), i.e(67), i.e(66), i.e(92)]).then(i.bind(null, 1722)),
                WebDrainagePop: O.default,
                GuiFooter: F({
                    componentFactory: ()=>i.e(10).then(i.bind(null, 358))
                }),
                ModGame: F({
                    componentFactory: ()=>i.e(96).then(i.bind(null, 1693))
                }),
                IndexNews: F({
                    componentFactory: ()=>Promise.all([i.e(14), i.e(95)]).then(i.bind(null, 1692))
                })
            },
            middleware: ["cache-page"],
            data: ()=>({
                recommendList: [],
                cached: Object(T.a)(1, 0),
                reportSpeedConfig: {
                    pageId: 6
                },
                modLiveListPart1: [],
                modLiveListPart2: [],
                showNotifier: "",
                showLiveList: !1
            }),
            computed: r()({}, Object(o.c)("background", ["bgInfo"]), Object(o.c)("live-home-page", ["bannerList", "nodeList", "gameKeys", "queryNum", "liveListMap"]), Object(o.c)("activity-list", ["activities"]), Object(o.c)("seo", ["keywords", "description"]), Object(o.c)("display-mode", ["iOSReviewModeV1", "isPadReview"]), Object(o.c)(["sysTime"]), Object(o.e)("notifier", ["notifierInfo"]), {
                bannerImges() {
                    const e = this.bannerList || []
                      , t = [];
                    for (let i = 0; i < e.length; i++) {
                        const i = (e[0] || {}).videoInfo || {};
                        t.push(i.url || "")
                    }
                    return t
                }
            }),
            watch: {
                nodeList(e) {
                    g.d || this.calcModLiveList(e)
                },
                notifierInfo: {
                    handler(e) {
                        e && e.home && (this.showNotifier = e.home,
                        this.$report(Object.assign({
                            opid: 100021010012
                        })))
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            fetch(e) {
                let t = e.store
                  , i = e.req;
                return g.d && i.stepTime && i.stepTime.mark("updateStore"),
                t.commit("setNavbarShowBg", !0),
                Promise.all([t.dispatch("background/getBackground"), t.dispatch("live-home-page/getBannerAndGamelist"), t.dispatch("seo/getKeywords", {
                    sceneType: 2,
                    scope: "homepage"
                })]).then(e=>{
                    g.d && i.stepTime && i.stepTime.mark("afterUpdateStore");
                    const n = e[1].gameList || []
                      , a = [];
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e];
                        if (a.length >= 3)
                            break;
                        "hot" !== t.appid && a.push(t.appid)
                    }
                    return t.dispatch("live-home-page/getLiveListByAppid", a)
                }
                ).catch(e=>{
                    g.d && i.stepTime && i.stepTime.mark("afterUpdateStore")
                }
                )
            },
            beforeMount() {
                this.$enableQuicklink(),
                this.$store.dispatch("activity-list/getActivities"),
                this.$store.dispatch("live-home-page/getBannerAndGamelist").then(()=>{
                    this.$store.commit("live-home-page/generateLiveListMap")
                }
                ),
                this.$store.dispatch("notifier/queryNotify", {
                    type: 1
                })
            },
            mounted() {
                this.$nextTick().then(()=>{
                    const e = Object(M.b)(this.add2Queue2, 500);
                    this.removeLoadMore = (()=>window.removeEventListener("scroll", e)),
                    window.addEventListener("scroll", e)
                }
                ),
                this.$isLogin() && Q.isPcClient() && this.downloadPcClient({
                    type: "pcclient_launch"
                })
            },
            created() {
                this.calcRecommendList(this.nodeList || [])
            },
            beforeDestroy() {
                this.removeLoadMore && this.removeLoadMore()
            },
            methods: r()({}, Object(o.b)("task", ["downloadPcClient"]), {
                calcModLiveList() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = -1;
                    if (e.some((e,i)=>{
                        if ("hot" === e.appid)
                            return this.modLiveListPart1 = [e],
                            t = i,
                            !0
                    }
                    ),
                    -1 !== t) {
                        const i = e.slice();
                        i.splice(t, 1),
                        this.modLiveListPart2 = i
                    }
                },
                calcRecommendList() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    const t = []
                      , i = {}
                      , n = [];
                    for (let a = 0; a < e.length; a++) {
                        const r = e[a];
                        if (t.length >= 3)
                            break;
                        "hot" !== r.appid && (t.push(r),
                        this.$store.commit("live-home-page/inavailableNode", r)),
                        i[r.appid] = this.liveListMap[r.appid],
                        n.push(r)
                    }
                    this.$store.commit("live-home-page/setLiveListMap", i),
                    this.$store.commit("live-home-page/setNodeList", n),
                    this.recommendList = t
                },
                updateFetchIndex() {
                    const e = window.innerHeight
                      , t = window.scrollY || window.pageYOffset
                      , i = this.$el.querySelectorAll(".index-mod-live") || []
                      , n = [];
                    return Array.from(i).forEach(i=>{
                        const a = (null == i ? void 0 : i.getBoundingClientRect()) || {}
                          , r = i.offsetTop || 0
                          , o = a.height || 0
                          , s = t - r + e;
                        let d = 0;
                        s >= 0 && s < 1 * e + o ? d = 1 : s >= 1 * e + o && s < 2 * e + o ? d = 3 : s >= -3 * e && s < 0 && (d = 2);
                        const l = i.getAttribute("data-appid")
                          , c = i.getAttribute("data-fetched");
                        n.push({
                            appid: l,
                            index: d,
                            fetched: c
                        })
                    }
                    ),
                    n
                },
                filterAndSortIndex() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter(e=>e.index && e.appid && "false" === e.fetched).sort((e,t)=>e.index - t.index > 0 ? 1 : -1).map(e=>e.appid)
                },
                splitAndFetch() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!e || e.length < 0)
                        return;
                    const t = [];
                    let i = [];
                    const n = e.length;
                    for (let a = 0; a < n; a++)
                        i.push(e[a]),
                        i.length >= this.queryNum && (t.push(i),
                        i = []);
                    i.length > 0 && (t.push(i),
                    i = []),
                    t.forEach(e=>{
                        this.cached.push(()=>new Promise((t,i)=>{
                            this.$store.dispatch("live-home-page/getLiveListByAppid", e).then(()=>{
                                t()
                            }
                            ).catch(e=>{
                                i(e)
                            }
                            )
                        }
                        ))
                    }
                    )
                },
                add2Queue2() {
                    Object(j.b)(()=>{
                        this.showLiveList = !0;
                        const e = this.updateFetchIndex()
                          , t = this.filterAndSortIndex(e);
                        this.splitAndFetch(t)
                    }
                    )
                },
                fetchRecommends() {
                    const e = this.recommendList.map(e=>e.appid);
                    this.splitAndFetch(e)
                }
            }),
            speedReport() {
                return {
                    pageId: this.$isQgamePad() ? 31 : this.$hitQuicklink() ? 22 : 12
                }
            }
        }
          , V = (i(1516),
        i(1517),
        Object(l.a)(D, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report",
                    value: {
                        page_id: 2707,
                        mid: 270701
                    },
                    expression: "{\n    page_id: 2707,\n    mid: 270701\n  }"
                }, {
                    name: "dc-report",
                    rawName: "v-dc-report.pv",
                    value: {
                        opid: 27070101,
                        ot: "pv"
                    },
                    expression: "{\n    opid: 27070101,\n    ot: 'pv'\n  }",
                    modifiers: {
                        pv: !0
                    }
                }],
                staticClass: "wrap-index"
            }, [e._m(0), e._v(" "), i("index-banner", {
                attrs: {
                    banners: e.bannerList,
                    "bg-info": e.bgInfo
                }
            }), e._v(" "), e.recommendList.length > 0 ? i("mod-recommend", {
                attrs: {
                    recommends: e.recommendList
                }
            }) : e._e(), e._v(" "), i("mod-live", {
                attrs: {
                    nodes: e.modLiveListPart1
                }
            }), e._v(" "), i("no-ssr", [i("side-bar"), e._v(" "), i("feedback-dialog", {
                attrs: {
                    "is-play-room": !1
                }
            }), e._v(" "), e.showLiveList ? [e.iOSReviewModeV1 || e.isPadReview ? e._e() : i("index-news"), e._v(" "), i("mod-game", {
                attrs: {
                    activities: e.activities
                }
            }), e._v(" "), i("mod-live", {
                attrs: {
                    nodes: e.modLiveListPart2
                }
            }), e._v(" "), i("notifier", {
                model: {
                    value: e.showNotifier,
                    callback: function(t) {
                        e.showNotifier = t
                    },
                    expression: "showNotifier"
                }
            }), e._v(" "), i("gui-footer")] : e._e(), e._v(" "), i("update-notice"), e._v(" "), i("pcclient-update-notice"), e._v(" "), i("WebDrainagePop")], 2)], 1)
        }, n, !1, null, "196b363d", null));
        t.default = V.exports
    },
    383: function(e, t, i) {
        "use strict";
        var n = i(114)
          , a = i(4)
          , r = i.n(a)
          , o = i(6)
          , s = {
            name: "IndexNavTab",
            props: {
                appid: {
                    type: String,
                    required: !0
                },
                tagList: {
                    type: Array,
                    required: !0,
                    default: ()=>[]
                }
            },
            computed: r()({}, Object(o.c)("display-mode", ["iOSReviewModeV1", "filterLabels"]), {
                filteredTagList() {
                    const e = this.tagList.filter(e=>"全部" !== e.tagName);
                    return this.iOSReviewModeV1 ? e.filter(e=>-1 === this.filterLabels.findIndex(t=>t === e.tagName)) : e
                }
            })
        }
          , d = (i(1499),
        i(2))
          , l = {
            components: {
                TagNavTab: Object(d.a)(s, function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("div", {
                        staticClass: "nav-container index-nav-tab"
                    }, [i("div", {
                        staticClass: "nav-inner"
                    }, [i("ul", {
                        staticClass: "index-nav-multi"
                    }, e._l(e.filteredTagList, function(t) {
                        return i("li", {
                            directives: [{
                                name: "dc-report",
                                rawName: "v-dc-report.show",
                                value: {
                                    mid: 270706,
                                    opid: 8,
                                    appid: e.appid
                                },
                                expression: "{mid:270706,opid: 8, appid:appid}",
                                modifiers: {
                                    show: !0
                                }
                            }, {
                                name: "dc-report",
                                rawName: "v-dc-report.click",
                                value: {
                                    mid: 270706,
                                    opid: 9,
                                    appid: e.appid
                                },
                                expression: "{mid:270706,opid: 9, appid:appid}",
                                modifiers: {
                                    click: !0
                                }
                            }],
                            key: t.tagId || t.tagIdStr
                        }, [i("e-link", {
                            attrs: {
                                target: "_blank",
                                to: {
                                    path: "/livelist",
                                    query: {
                                        layoutid: e.appid,
                                        tagId: t.tagId,
                                        tagName: t.tagName,
                                        tagIdStr: t.tagIdStr
                                    }
                                }
                            }
                        }, [e._v("\n          " + e._s(t.tagName) + "\n        ")])], 1)
                    }), 0)])])
                }, [], !1, null, "e1f7430e", null).exports
            },
            props: {
                title: {
                    type: String,
                    default: "游戏名称"
                },
                hasRow: {
                    type: Boolean,
                    default: !0
                },
                url: {
                    type: String,
                    default: "/"
                },
                tagList: {
                    type: Array,
                    default: ()=>[]
                },
                appid: {
                    type: String,
                    default: ""
                },
                titleReport: {
                    type: Object,
                    default: ()=>({})
                },
                moreReport: {
                    type: Object,
                    default: ()=>({})
                },
                tabClass: {
                    type: String,
                    default: ""
                },
                icon: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                iconClass() {
                    return n.b[this.icon] || ""
                }
            }
        }
          , c = (i(1500),
        i(1501),
        Object(d.a)(l, function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "index-title"
            }, [i("h4", [e.url ? i("e-link", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.click",
                    value: e.titleReport,
                    expression: "titleReport",
                    modifiers: {
                        click: !0
                    }
                }],
                attrs: {
                    target: "_blank",
                    to: e.url
                }
            }, [i("span", {
                staticClass: "icon-game",
                class: "icon-" + e.iconClass
            }), e._v(e._s(e.title) + "\n    ")]) : i("span", [e._v("\n      " + e._s(e.title) + "\n    ")])], 1), e._v(" "), e.tagList && e.tagList.length ? i("tag-nav-tab", {
                class: e.tabClass,
                attrs: {
                    "tag-list": e.tagList,
                    appid: e.appid
                }
            }) : e._e(), e._v(" "), e.hasRow ? i("e-link", {
                directives: [{
                    name: "dc-report",
                    rawName: "v-dc-report.click",
                    value: e.moreReport,
                    expression: "moreReport",
                    modifiers: {
                        click: !0
                    }
                }],
                staticClass: "row",
                attrs: {
                    target: "_blank",
                    to: e.url
                }
            }, [e._v("\n    全部"), i("i", {
                staticClass: "icon-row"
            })]) : e._e()], 1)
        }, [], !1, null, "cba02c92", null).exports);
        t.a = c
    },
    767: function(e, t, i) {},
    768: function(e, t, i) {},
    769: function(e, t, i) {},
    770: function(e, t, i) {},
    771: function(e, t, i) {},
    772: function(e, t, i) {},
    773: function(e, t, i) {},
    774: function(e, t, i) {},
    775: function(e, t, i) {},
    776: function(e, t, i) {},
    781: function(e, t, i) {},
    782: function(e, t, i) {},
    783: function(e, t, i) {}
}]);
