webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { API_ROOT } from '../config/constants';

var AppService = /** @class */ (function () {
    // private headers: any;
    function AppService(http, nathttp, plt) {
        // this.headers = new Headers();
        this.http = http;
        this.nathttp = nathttp;
        this.plt = plt;
        // this.headers.append("Access-Control-Allow-Origin", "http://172.18.1.133:10001");
        if (this.plt.is('ios')) {
            // This will only print when on iOS
            console.log('I am an iOS device!');
        }
        else {
            console.log('I am not an iOS device!');
        }
    }
    // 获取征途年份 
    // /api/postlists / sublist / { listId }
    // 获取子栏目列表
    AppService.prototype.getSublist = function (type) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environment__["a" /* ENV */].API_ROOT + "api/postlists/sublist/" + type)
            .map(function (res) {
            if (res.status === 200) {
                var data = res.json();
                return data;
            }
            else if (res.status === 202) {
                return res.json().code.toString();
            }
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _c || Object])
    ], AppService);
    return AppService;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_titles__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servers_home_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servers_app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, navCtrl, events, homeService, appService, zone) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.events = events;
        this.homeService = homeService;
        this.appService = appService;
        this.zone = zone;
        this.index = 0; // 当前菜单索引
        this.currentTitle = 0; // 当前菜单栏
        this.model = {}; // 存储数据
        this.flag = false; // 判断是否是相同栏目
        this.titles = __WEBPACK_IMPORTED_MODULE_2__mock_titles__["a" /* TITLES */];
        events.subscribe('listId:created', function (listId, time) {
            HomePage_1.prototype.currentMonth = listId;
        });
        events.subscribe('massage:created', function (massage, time) {
            HomePage_1.prototype.massage = massage;
        });
        events.subscribe('flag:created', function (flag, time) {
            HomePage_1.prototype.subNum = flag;
        });
        // this.hash = window.location.search.slice(1);
        // console.log(this.hash);
        this.hash = this.GetRequest()[0];
        if (this.hash && !this.subNum) {
            this.hashArr = this.hash.split('-');
            var leng = this.hashArr.length;
            if (leng > 1) {
                this.curentYear = this.hashArr[0] + '-' + this.hashArr[1];
                this.model.years = [];
                this.model.years.push({ id: this.curentYear });
                this.massage = this.hashArr[1] + '年';
            }
            if (leng > 2) {
                this.currentMonth = this.hashArr[0] + '-' + this.hashArr[1] + '-' + this.hashArr[2];
            }
        }
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        if (this.subNum && this.currentMonth) {
            // 从侧边栏选择
            console.log('当前月份');
            console.log(this.currentMonth);
            this.getCurentMon(this.currentMonth);
        }
        else if (this.curentYear && !this.currentMonth) {
            // url路径形式为?id=ZT-18
            this.getMons(this.curentYear);
            // console.log('url路径形式为?id=ZT-18');
        }
        else if (this.curentYear && this.currentMonth) {
            // url路径形式为?id=ZT-18-05
            this.getTheMons(this.curentYear);
            // console.log('url路径形式为?id=ZT-18-05');
        }
        else if (!this.currentMonth) {
            // url 不带参数
            this.getYears();
        }
        else {
            // 从侧边栏选择
            console.log('当前月份');
            console.log(this.currentMonth);
            this.getCurentMon(this.currentMonth);
        }
    };
    //获取url中"?"符后的字串   
    HomePage.prototype.GetRequest = function () {
        var url = location.search; //获取url中"?"符后的字串   
        // let theRequest = new Object();//url参数转换对象输出
        var theRequest = []; // 转换数组输出
        var strs = [];
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                // theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]); //url参数转换对象输出
                theRequest.push(strs[i].split("=")[1]); // 转换数组输出
            }
        }
        return theRequest;
    };
    // 在对象数组中寻找key = id的索引值
    HomePage.prototype.findIndex = function (arr, key) {
        var index = 0;
        if (key) {
            arr.map(function (item, ind) {
                if (item.id === key) {
                    index = ind;
                }
            });
        }
        return index;
    };
    // 排序
    HomePage.prototype.sortBy = function (filed, rev) {
        rev = (rev) ? -1 : 1;
        return function (a, b) {
            a = a[filed];
            b = b[filed];
            if (a < b) {
                return rev * -1;
            }
            if (a > b) {
                return rev * 1;
            }
            return 1;
        };
    };
    ;
    // 打开侧边栏
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    // 获取最新一年年份
    HomePage.prototype.getYears = function () {
        var that = this;
        this.appService.getSublist('zt')
            .subscribe({
            next: function (years) {
                that.model.years = years.sort(that.sortBy('id', true));
                console.log(that.model.years);
            },
            complete: function () {
                var id = that.model.years[0].id;
                that.massage = that.model.years[0].name;
                that.getMons(id);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    // 获取最新一期月份
    HomePage.prototype.getMons = function (index) {
        var that = this;
        this.appService.getSublist(index)
            .subscribe({
            next: function (mons) {
                that.model.years[0].mons = mons.sort(that.sortBy('id', true));
            },
            complete: function () {
                var id = that.model.years[0].mons[0].id;
                that.massage = that.massage + that.model.years[0].mons[0].name;
                that.currentMonth = id;
                console.log('当前月份');
                console.log(id);
                that.getCurentMon(id);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    // 获取指定一期月份
    HomePage.prototype.getTheMons = function (index) {
        var that = this;
        this.appService.getSublist(index)
            .subscribe({
            next: function (mons) {
                // let index = that.findIndex(mons, that.currentMonth);
                that.massage = that.massage + mons[0].name;
            },
            complete: function () {
                that.getCurentMon(that.currentMonth);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    // 获取当前月份菜单
    HomePage.prototype.getCurentMon = function (index) {
        var that = this;
        this.appService.getSublist(index)
            .subscribe({
            next: function (mons) {
                that.model.curentMon = mons;
                that.titles = mons;
            },
            complete: function () {
                // that.initSwiper();
                that.getAllNews();
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    // 获取类型新闻
    HomePage.prototype.getAllNews = function () {
        var _this = this;
        var all = this.model.curentMon;
        all.map(function (item, index) {
            var id = all[index].id;
            _this.getTypeNews(id, index);
        });
    };
    HomePage.prototype.getTypeNews = function (id, index) {
        var _this = this;
        var that = this;
        this.homeService.getTypeNews(id)
            .subscribe({
            next: function (articlesType) {
                _this.model.curentMon[index].news = articlesType;
            },
            complete: function () {
                that.initSwiper();
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    HomePage.prototype.initSwiper = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiper = new Swiper('.pageMenuSlides .swiper-container', {
                slidesPerView: 4,
                spaceBetween: 0,
                breakpoints: {
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    320: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    }
                }
            });
            // url 跳转到相应的锚点
            if (_this.hash) {
                var index = _this.findIndex(_this.model.curentMon, _this.hash);
                _this.slideChanged(index);
                _this.scrollIntoView(_this.hash);
            }
        }, 100);
    };
    // 切换菜单栏目
    HomePage.prototype.selectPageMenu = function (id, index) {
        this.currentTitle = index;
        this.scrollIntoView(id);
    };
    // ionic3锚点操作
    HomePage.prototype.scrollIntoView = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    };
    HomePage.prototype.openPage = function (id) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(ListPage);
        var that = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], {
            'id': id,
            'listId': that.currentMonth
        });
    };
    // 滚动到对应的导航
    HomePage.prototype.slideChanged = function (index) {
        var that = this;
        if (index !== this.currentTitle) {
            if (that.model.curentMon.length > 0 && that.swiper && that.swiper.slideTo) {
                that.swiper.slideTo(index, 300);
            }
        }
        this.currentTitle = index;
    };
    // 获取锚点
    HomePage.prototype.getMenId = function (offsets, scroll) {
        var that = this;
        for (var i = 0; i < offsets.length; i++) {
            scroll >= offsets[i] //滚动高度>i元素的offset
                && (offsets[i + 1] === undefined || scroll < offsets[i + 1]) //i + 1元素不存在，或者i+1元素不大于滚动高度
                && that.slideChanged(i); //设置i为当前活动项
        }
    };
    // 遍历获取 滚动区域内的hashkey对应的offset值
    HomePage.prototype.getOffsets = function (arr) {
        var that = this;
        that.offsets = [];
        arr.map(function (item, i) {
            var pp = document.getElementById(item.id);
            if (pp) {
                that.offsets.push(pp.offsetTop);
            }
        });
        return that.offsets;
    };
    // 滚滚动条
    HomePage.prototype.scrollHandler = function (event) {
        var that = this;
        that.getOffsets(this.titles);
        this.zone.run(function () {
            // since scrollAmount is data-binded,
            that.getMenId(that.offsets, event.scrollTop);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HomePage.prototype, "titlesTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('contentSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "contentSlides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "searchBoxView", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\d0109\dev\zhengtu\src\pages\home\home.html"*/'\n\n  <ion-header>\n\n    \n\n    <ion-navbar>\n\n              <button ion-button menuToggle >\n\n                <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n              <div  class="rich_media title-zt">                          \n\n                  <ion-title>\n\n                    <div class="text-center"> SIID {{massage}}刊</div>\n\n                  </ion-title>\n\n              </div>\n\n\n\n    </ion-navbar>\n\n\n\n      <div class="pageMenuSlides rich_media">\n\n        <div class="swiper-container">\n\n          <div class="swiper-wrapper">\n\n            <div class="swiper-slide  swiper-size" *ngFor="let item of titles;let i=index;" tappable >\n\n                <p (click)="selectPageMenu(item.id,i)" [ngClass]="{\'activity\': i === currentTitle, \'third\': i !== currentTitle}">\n\n                 <span class="activity-span">{{item.name}}</span>\n\n                  </p>\n\n                \n\n\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- <div class="lll"></div> -->\n\n\n\n  </ion-header>\n\n  \n\n  <ion-content padding (ionScroll)="scrollHandler($event)" >\n\n\n\n    <div id="js_article" class="rich_media" #searchBox>\n\n      <ion-grid *ngFor="let title of model.curentMon;let j=index;" id="{{title.id}}" >\n\n        <ion-row *ngIf="title.news">\n\n          <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n\n            <h6 class="title-h4">{{title.name}}</h6>\n\n      \n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n        <!-- 第一张 -->\n\n        <ion-row *ngFor="let policyArt of title.news;let i=index;" [ngClass]="{\'display-none\': i !== 0}" class="subject-relative ">\n\n          <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  >\n\n          \n\n            <div class="home-img-1 cursor-si" (click)="openPage(policyArt.id)">\n\n              <img src="{{policyArt.top_image}}" alt="图片" class="img-fluid rounded" >\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 class="cursor-si main-font-size subject-zt">\n\n\n\n            <div class="mask-zt" (click)="openPage(policyArt.id)">\n\n              <a >{{policyArt.subject}}</a>\n\n            </div>\n\n          </ion-col>\n\n \n\n        </ion-row>\n\n         \n\n        <!-- 非第一张 -->\n\n        <ion-row  class=" margin-top-zt" *ngFor="let policyArt of title.news;let i=index;" [ngClass]="{\'display-none\': i ===\n\n        0}">\n\n          <ion-col col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 class="border-bottom-zt" [ngClass]="{\'border-top-zt\': i === 1}" *ngIf="policyArt.top_image">\n\n              <div class="cursor-si main-font-size " (click)="openPage(policyArt.id)">\n\n                <a >{{policyArt.subject}}</a>\n\n              </div>\n\n          </ion-col>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 *ngIf="policyArt.top_image">\n\n            <div class="home-img cursor-si">\n\n              <img src="{{policyArt.top_image}}" alt="图片" class="img-fluid rounded" (click)="openPage(policyArt.id)">\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 class="border-bottom-zt" [ngClass]="{\'border-top-zt\': i === 1}" *ngIf="!policyArt.top_image">\n\n            <div class="cursor-si main-font-size " (click)="openPage(policyArt.id)">\n\n              <a >{{policyArt.subject}}</a>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n     \n\n\n\n      </ion-grid>\n\n\n\n    </div>\n\n  </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"D:\d0109\dev\zhengtu\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__servers_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_4__servers_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { API_ROOT, IMG_ROOT} from '../config/constants';

var HomeService = /** @class */ (function () {
    // public url: string;
    // private headers: any;
    function HomeService(http) {
        // this.url
        // this.url = '/media-repo/';
        this.http = http;
        // this.headers = new Headers(REQUEST_HEADER);
        // this.headers = new Headers();
        // this.headers.append("Access-Control-Allow-Origin", "http://172.18.1.133:10001");
    }
    //  根据类型获取新闻
    HomeService.prototype.getTypeNews = function (type) {
        // return Observable.of(ARTICLESTYPE);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].API_ROOT + "api/docposts/all/" + type)
            .map(function (res) {
            if (res.status === 200) {
                var data_1 = res.json();
                // 改变图片路径
                var newsImage_1 = 'assets/imgs/administration-articles-bank.jpg';
                // 图片处理
                data_1.map(function (item, index) {
                    if (item.top_image === undefined || item.top_image === null) {
                        if (index === 0) {
                            data_1[index].top_image = newsImage_1;
                        }
                        // data[index].top_image = newsImage;
                    }
                    else {
                        data_1[index].top_image = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].IMG_ROOT + item.top_image;
                    }
                });
                return data_1;
            }
            else if (res.status === 202) {
                return res.json().code.toString();
            }
        });
    };
    // 获取征途年份 
    // /api/postlists / sublist / { listId }
    // 获取子栏目列表
    HomeService.prototype.getYears = function (type) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].API_ROOT + "api/postlists/sublist/" + type)
            .map(function (res) {
            if (res.status === 200) {
                var data = res.json();
                return data;
            }
            else if (res.status === 202) {
                return res.json().code.toString();
            }
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_news_detail_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ActivatedRoute } from '@angular/router';


// import { QueryList } from '@angular/core/src/render3';
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, newDetailService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newDetailService = newDetailService;
        this.model = {}; // 存储数据
        this.list = []; // 新闻详情列表
        this.last = false; // 是否为最后一篇
        this.first = false; // 是否为第一篇
        // 通过这种形式来接收父级页面传过来的值 
        this.id = this.navParams.get('id');
        this.listId = this.navParams.get('listId');
        this.slies = [{}, {}, {}];
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var listId = this.listId;
        this.getNewsDetil(this.id, listId);
        console.log(1);
    };
    // 返回首页
    ListPage.prototype.pushPage = function () {
        this.navCtrl.pop();
    };
    // 获取新闻详情
    ListPage.prototype.getNewsDetil = function (id, listId) {
        var that = this;
        that.newDetailService.getNewsDetil(id, listId)
            .subscribe({
            next: function (newsDetils) {
                that.model.newsDetils = newsDetils;
                that.detailId = newsDetils.id; // 当前详情的id
                that.slideId = 1; // 当前页
                that.list.push(newsDetils);
                that.slies[1].list = newsDetils;
            },
            complete: function () {
                that.imgSrcChange();
                that.getInit();
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ListPage.prototype.imgSrcChange = function () {
        var that = this;
        setTimeout(function () {
            that.textContent.forEach(function (item, i) {
                var imgs = item.nativeElement.querySelectorAll('img');
                for (var index = 0; index < imgs.length; index++) {
                    var element = imgs[index];
                    if (element.src) {
                        // http://localhost:7070/media-repo/MI/news/1-16.jpg
                        var mi = element.src.split('media-repo/');
                        // let mii = ENV.IMG_ROOT.split('media-repo');
                        // console.log(mii)
                        if (mi.length > 1) {
                            element.src = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].IMG_ROOT + mi[1];
                        }
                    }
                }
            });
        }, 0);
    };
    ListPage.prototype.getInit = function () {
        var that = this;
        var prev_id = this.model.newsDetils.prev_id;
        var next_id = this.model.newsDetils.next_id;
        if (prev_id) {
            var listId = this.listId;
            this.newDetailService.getNewsDetil(prev_id, listId)
                .subscribe({
                next: function (newsDetils) {
                    that.list.unshift(newsDetils);
                    that.slies[0].list = newsDetils;
                },
                complete: function () {
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
        else {
            var index = this.contentSlides.getActiveIndex();
            this.slies[index].first = true;
            this.first = true;
            this.slies[0].list = null;
            this.massage = '第一篇!';
            console.log('已是第一篇!');
            this.contentSlides.lockSwipeToPrev(true);
        }
        if (next_id) {
            var listId = this.listId;
            this.newDetailService.getNewsDetil(next_id, listId)
                .subscribe({
                next: function (newsDetils) {
                    that.list.push(newsDetils);
                    that.slies[2].list = newsDetils;
                },
                complete: function () {
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
        else {
            var index = this.contentSlides.getActiveIndex();
            this.slies[index].last = true;
            this.last = true;
            this.slies[2].list = null;
            this.massage = '最后一篇！';
            console.log('已是最后一篇！');
            this.contentSlides.lockSwipeToNext(true);
        }
    };
    ListPage.prototype.slideToChanged = function (flag) {
        if (flag === 0) {
            this.contentSlides.slidePrev();
        }
        else {
            this.contentSlides.slideNext();
        }
    };
    ListPage.prototype.slideChanged = function () {
        this.last = false;
        this.first = false;
        this.contentSlides.lockSwipeToPrev(false);
        this.contentSlides.lockSwipeToNext(false);
        var index = this.contentSlides.getActiveIndex();
        var len = this.slies.length;
        this.model.newsDetils = this.slies[index] && this.slies[index].list;
        if (this.slies[index] && this.slies[index].first) {
            this.first = true;
            this.massage = '第一篇!';
            console.log('已是第一篇!');
            this.contentSlides.lockSwipeToPrev(true);
        }
        if (this.slies[index] && this.slies[index].last) {
            this.last = true;
            this.massage = '最后一篇！';
            console.log('已是最后一篇！');
            this.contentSlides.lockSwipeToNext(true);
        }
        if (index === 0) {
            this.getPrev();
        }
        else if (index + 1 === len) {
            this.getNext();
        }
    };
    ListPage.prototype.getNext = function () {
        this.detailId = this.model.newsDetils && this.model.newsDetils.next_id; // 当前详情的id
        var that = this;
        var next_id;
        next_id = this.detailId;
        if (next_id) {
            var listId = this.listId;
            this.newDetailService.getNewsDetil(next_id, listId)
                .subscribe({
                next: function (newsDetils) {
                    that.list.push(newsDetils);
                    that.slies.push({ list: newsDetils });
                },
                complete: function () {
                    that.imgSrcChange();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
        else {
            var index = this.contentSlides.getActiveIndex();
            this.slies[index].last = true;
            this.last = true;
            this.massage = '最后一篇！';
            console.log('已是最后一篇！');
            this.contentSlides.lockSwipeToNext(true);
        }
    };
    ListPage.prototype.getPrev = function () {
        this.detailId = this.model.newsDetils && this.model.newsDetils.prev_id; // 当前详情的id
        var that = this;
        var prev_id;
        prev_id = this.detailId;
        if (prev_id) {
            var listId = this.listId;
            this.newDetailService.getNewsDetil(prev_id, listId)
                .subscribe({
                next: function (newsDetils) {
                    that.list.unshift(newsDetils);
                    that.slies.unshift({ list: newsDetils });
                },
                complete: function () {
                    that.contentSlides.slideTo(1, 0);
                    that.imgSrcChange();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
        else {
            var index = this.contentSlides.getActiveIndex();
            this.slies[index].first = true;
            this.first = true;
            this.massage = '第一篇!';
            console.log('已是第一篇!');
            this.contentSlides.lockSwipeToPrev(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], ListPage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ListPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], ListPage.prototype, "scroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('contentSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], ListPage.prototype, "contentSlides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])('textContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], ListPage.prototype, "textContent", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\d0109\dev\zhengtu\src\pages\list\list.html"*/'<!--\n\n  Generated template for the MyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n\n\n    <div class="rich_media title-zt text-center">\n\n      <ion-title *ngIf="slies[1].list" class="ion-title-zt ">{{model.newsDetils && model.newsDetils.subject}}</ion-title>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="上一篇" refreshingSpinner="circles" >\n\n      </ion-refresher-content>\n\n    </ion-refresher> -->\n\n<!-- (swipeleft)="swipeLeft($event)" (swiperight)="swipeRight($event)"  -->\n\n\n\n\n\n\n\n  <ion-slides #contentSlides  (ionSlideDidChange)="slideChanged()"  initialSlide = 1 id="prent">\n\n\n\n    <ion-slide *ngFor="let item of slies;let i=index;">\n\n      <ion-header>\n\n      \n\n        <ion-navbar>\n\n          <ion-title></ion-title>\n\n        </ion-navbar>\n\n      \n\n      </ion-header>\n\n      \n\n\n\n      <ion-content padding *ngIf="item.list" >\n\n        \n\n            <div class="rich_media body-padding-top"  id="slide{{i}}">\n\n              <h4 class="mb-1 h-title">{{item.list.subject}}</h4>\n\n              \n\n              <span class="text-uppercase d-block mb-3">{{item.list.tags.join(" ")}}</span>\n\n              <div #textContent [innerHTML]="item.list.content" class="article-zt text-left">\n\n              \n\n              </div>\n\n     \n\n            </div>\n\n      </ion-content>\n\n\n\n    </ion-slide>\n\n\n\n\n\n  </ion-slides>\n\n\n\n\n\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n         <ion-infinite-scroll-content\n\n                immediateCheck="false"\n\n                 enabled = "false"\n\n                 loadingSpinner="bubbles"\n\n                 loadingText="加载下一篇...">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll> -->\n\n\n\n\n\n\n\n\n\n<ion-footer >\n\n  <ion-toolbar style="min-height: 44px;" class="page-zt-posi">\n\n    <ion-title class="rich_media text-center ">\n\n\n\n      <ion-icon name="arrow-back" class="page-button-left cursor-si" (click)="slideToChanged(0)" *ngIf="first !== true"></ion-icon>\n\n      <span class="page-span-left cursor-si" *ngIf="first !== true" (click)="slideToChanged(0)">上一篇</span>\n\n      <span  [ngClass]="{\'page-span-left\': first === true, \'page-span-right\': last === true}" *ngIf="last === true || first === true"> {{massage}}</span>\n\n      <span class="page-span-right cursor-si"  *ngIf="last !== true" (click)="slideToChanged(1)">下一篇</span>\n\n      <ion-icon name="arrow-forward" class="page-button-right cursor-si" (click)="slideToChanged(1)" *ngIf="last !== true"></ion-icon>\n\n\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\d0109\dev\zhengtu\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__servers_news_detail_service__["a" /* NewDetailService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { API_ROOT, IMG_ROOT } from '../config/constants';

var NewDetailService = /** @class */ (function () {
    function NewDetailService(http) {
        this.http = http;
    }
    NewDetailService.prototype.getNewsDetil = function (id, listId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environment__["a" /* ENV */].API_ROOT + "api/docposts/" + id + "?listId=" + listId)
            .map(function (res) {
            if (res.status === 200) {
                var data = res.json();
                // 图片处理
                data.top_image = __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* ENV */].IMG_ROOT + data.top_image;
                // console.log(data);
                return data;
            }
            else if (res.status === 202) {
                return res.json().code.toString();
            }
        });
    };
    NewDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NewDetailService);
    return NewDetailService;
}());

//# sourceMappingURL=news-detail.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servers_home_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servers_news_detail_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servers_app_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_10__servers_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_11__servers_news_detail_service__["a" /* NewDetailService */],
                __WEBPACK_IMPORTED_MODULE_12__servers_app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers_app_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(events, menuCtrl, platform, statusBar, splashScreen, appService) {
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appService = appService;
        this.model = {}; // 存储数据
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
            // ,
            // { title: 'List', component: ListPage }
        ];
        // this.pages = JOURNALS;
    }
    MyApp.prototype.ngOnInit = function () {
        this.getYears();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.splashScreen.show();
        });
    };
    MyApp.prototype.sortBy = function (filed, rev) {
        rev = (rev) ? -1 : 1;
        return function (a, b) {
            a = a[filed];
            b = b[filed];
            if (a < b) {
                return rev * -1;
            }
            if (a > b) {
                return rev * 1;
            }
            return 1;
        };
    };
    ;
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    // 侧边栏 
    // 获取年份
    MyApp.prototype.getYears = function () {
        var that = this;
        this.appService.getSublist('zt')
            .subscribe(function (years) {
            years = years.sort(that.sortBy('id', true));
            that.model.years = years;
        });
    };
    // 获取月份
    MyApp.prototype.getMonth = function (index) {
        var _this = this;
        if (!this.model.years[index].mons) {
            var id = this.model.years[index].id;
            this.appService.getSublist(id)
                .subscribe(function (mons) {
                mons = mons.sort(_this.sortBy('id', true));
                _this.model.years[index].mons = mons;
            });
        }
        else {
            this.model.years[index].mons = null;
        }
    };
    MyApp.prototype.openJournal = function (listId, years, month) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        var massage = years + month;
        this.events.publish('listId:created', listId, Date.now());
        this.events.publish('massage:created', massage, Date.now());
        this.events.publish('flag:created', true, Date.now());
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\d0109\dev\zhengtu\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header class="sidebar-title-bg-zt">\n\n    <ion-toolbar>\n\n      <ion-title>往期杂志</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="sidebar-bg-zt">\n\n    <ion-list>\n\n      <div class="logo-zt">\n\n        <!-- <img src="../assets/imgs/zt-logo.png" alt="图片"> -->\n\n      </div>\n\n\n\n\n\n      <div  *ngFor="let years of model.years;let i=index;">\n\n        <button   ion-item (click)="getMonth(i)" class="menu-btn-zt">\n\n          {{years.name}}\n\n        </button>\n\n          <ion-list>\n\n            <button class="menu-btn-zt padding-left-zt" ion-item *ngFor="let mons of years.mons" (click)="openJournal(mons.id,years.name,mons.name)">{{mons.name}}</button>\n\n          </ion-list>\n\n        </div>\n\n\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>\n\n\n\n\n\n'/*ion-inline-end:"D:\d0109\dev\zhengtu\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__servers_app_service__["a" /* AppService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TITLES; });
var TITLES = [
    {
        id: '1',
        name: '贺词'
    },
    {
        id: '2',
        name: '企业篇'
    },
    {
        id: '3',
        name: '实力篇'
    },
    {
        id: '4',
        name: '业务篇'
    },
    {
        id: '5',
        name: '展望未来'
    },
    {
        id: '6',
        name: '团队照片'
    }
];
//# sourceMappingURL=titles.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    API_ROOT: '/',
    IMG_ROOT: '/media-repo/',
};
//# sourceMappingURL=config.dev.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map