webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__decorate) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(25);
	var app_routing_1 = __webpack_require__(29);
	var app_component_1 = __webpack_require__(69);
	var feature_list_component_1 = __webpack_require__(60);
	var feature_component_1 = __webpack_require__(65);
	var feature_service_1 = __webpack_require__(62);
	var home_component_1 = __webpack_require__(67);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            app_routing_1.routing
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            feature_list_component_1.FeatureListComponent,
	            feature_component_1.FeatureComponent,
	            home_component_1.HomeComponent
	        ],
	        providers: [
	            app_routing_1.appRoutingProviders,
	            feature_service_1.FeatureService
	        ],
	        bootstrap: [
	            app_component_1.AppComponent
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },

/***/ 24:
/***/ function(module, exports) {

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = __decorate;
	}
	
	exports.__decorate = __decorate;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var router_1 = __webpack_require__(30);
	var feature_list_component_1 = __webpack_require__(60);
	var feature_component_1 = __webpack_require__(65);
	var home_component_1 = __webpack_require__(67);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'features', component: feature_list_component_1.FeatureListComponent },
	    { path: 'features/:id', component: feature_component_1.FeatureComponent }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__decorate, __metadata) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var feature_service_1 = __webpack_require__(62);
	var FeatureListComponent = (function () {
	    function FeatureListComponent(_featureService) {
	        this._featureService = _featureService;
	    }
	    FeatureListComponent.prototype.ngOnInit = function () {
	        this.features = this._featureService.getFeatures();
	    };
	    return FeatureListComponent;
	}());
	FeatureListComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(63),
	        styles: [__webpack_require__(64)]
	    }),
	    __metadata("design:paramtypes", [feature_service_1.FeatureService])
	], FeatureListComponent);
	exports.FeatureListComponent = FeatureListComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(61)))

/***/ },

/***/ 61:
/***/ function(module, exports) {

	function __metadata(k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	
	if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = __metadata;
	}
	
	exports.__metadata = __metadata;

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__decorate) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var Feature = (function () {
	    function Feature(id, description) {
	        this.id = id;
	        this.description = description;
	    }
	    return Feature;
	}());
	exports.Feature = Feature;
	var FeatureService = (function () {
	    function FeatureService() {
	        this._features = [
	            new Feature(1, 'Easy installation via script'),
	            new Feature(2, 'Bundling with Webpack'),
	            new Feature(3, 'Require Angular templates and styles external files')
	        ];
	    }
	    FeatureService.prototype.getFeatures = function () { return this._features; };
	    FeatureService.prototype.getFeature = function (id) {
	        return this._features.find(function (feature) { return feature.id === +id; });
	    };
	    return FeatureService;
	}());
	FeatureService = __decorate([
	    core_1.Injectable()
	], FeatureService);
	exports.FeatureService = FeatureService;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = "<p>Feature list:</p>\n<ul>\n\t<li *ngFor=\"let feature of features\">\n\t\t<a [routerLink]=\"['/features', feature.id]\">{{ feature.description }}</a>\n\t</li>\n</ul>\n<hr>\n<p><a routerLink='/'>Go to homepage</a></p>"

/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = "li {\n  font-size: 80%; }\n"

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__decorate, __metadata) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var feature_service_1 = __webpack_require__(62);
	var router_1 = __webpack_require__(30);
	var FeatureComponent = (function () {
	    function FeatureComponent(_route, _router, _featureService) {
	        this._route = _route;
	        this._router = _router;
	        this._featureService = _featureService;
	    }
	    FeatureComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._sub = this._route.params.subscribe(function (params) {
	            var id = +params['id'];
	            _this.feature = _this._featureService.getFeature(id);
	        });
	    };
	    FeatureComponent.prototype.ngOnDestroy = function () {
	        this._sub.unsubscribe();
	    };
	    return FeatureComponent;
	}());
	FeatureComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(66)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router,
	        feature_service_1.FeatureService])
	], FeatureComponent);
	exports.FeatureComponent = FeatureComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(61)))

/***/ },

/***/ 66:
/***/ function(module, exports) {

	module.exports = "<div>\n\t<label>Feature description: </label>\n\t<input [(ngModel)]='feature.description' placeholder=\"description\">\n</div>\n<p><button routerLink='/features'>Back to features</button></p>"

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__decorate) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(68)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = "<p>This is Home Component</p>\n<p><a routerLink='/features'>Go to features</a></p>"

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__decorate) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'my-app',
	        template: __webpack_require__(70),
	        styles: [__webpack_require__(71)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },

/***/ 70:
/***/ function(module, exports) {

	module.exports = "<p>Laravel5 + Angular2 application</p>\n<router-outlet></router-outlet>"

/***/ },

/***/ 71:
/***/ function(module, exports) {

	module.exports = "p {\n  color: red; }\n"

/***/ }

});
//# sourceMappingURL=app.js.map