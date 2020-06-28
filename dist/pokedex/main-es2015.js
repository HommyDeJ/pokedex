(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pokemon/pokemon-list/pokemon-list.component */ "./src/app/components/pokemon/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _components_pokemon_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pokemon/pokemon-details/pokemon-details.component */ "./src/app/components/pokemon/pokemon-details/pokemon-details.component.ts");






const routes = [
    { path: '', component: _components_pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__["PokemonListComponent"], pathMatch: 'full' },
    { path: 'pokemon', component: _components_pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__["PokemonListComponent"] },
    { path: 'detail/:id', component: _components_pokemon_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailsComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'pokedex';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon/pokemon-list/pokemon-list.component */ "./src/app/components/pokemon/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _components_pokemon_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pokemon/pokemon-details/pokemon-details.component */ "./src/app/components/pokemon/pokemon-details/pokemon-details.component.ts");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__["PokemonListComponent"],
        _components_pokemon_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailsComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"],
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__["PokemonListComponent"],
                    _components_pokemon_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailsComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pokemon/pokemon-details/pokemon-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pokemon/pokemon-details/pokemon-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PokemonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsComponent", function() { return PokemonDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PokemonDetailsComponent_div_0_ul_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokeTypes_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokeTypes_r4.type == null ? null : pokeTypes_r4.type.name);
} }
function PokemonDetailsComponent_div_0_ul_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokeAbilities_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokeAbilities_r5 == null ? null : pokeAbilities_r5.ability.name);
} }
function PokemonDetailsComponent_div_0_ul_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokeMoves_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokeMoves_r6 == null ? null : pokeMoves_r6.move.name);
} }
function PokemonDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tipos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PokemonDetailsComponent_div_0_ul_19_Template, 3, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Habilidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokemonDetailsComponent_div_0_ul_22_Template, 3, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Caracter\u00EDsticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tama\u00F1o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Peso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Movimientos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PokemonDetailsComponent_div_0_ul_37_Template, 3, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, ctx_r0.pokemon == null ? null : ctx_r0.pokemon.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](((ctx_r0.pokemon == null ? null : ctx_r0.pokemon.id) > 10 ? "#0" : "#00") + (ctx_r0.pokemon == null ? null : ctx_r0.pokemon.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemon.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemon.sprites.back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemon.sprites.front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemon.sprites.back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon == null ? null : ctx_r0.pokemon.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon == null ? null : ctx_r0.pokemon.abilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pokemon == null ? null : ctx_r0.pokemon.height, " FT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pokemon == null ? null : ctx_r0.pokemon.weight, " LBS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](38, 13, ctx_r0.pokemon.moves, 0, 5));
} }
class PokemonDetailsComponent {
    constructor(pokemonService, route) {
        this.pokemonService = pokemonService;
        this.route = route;
    }
    ngOnInit() {
        this.getPokemonId();
    }
    getPokemonId() {
        this.sub = this.route.params.subscribe(params => {
            this.pokemonService
                .getPokemonId(params.id)
                .subscribe((data) => {
                this.pokemon = data;
                console.log(this.pokemon);
            });
        });
    }
}
PokemonDetailsComponent.ɵfac = function PokemonDetailsComponent_Factory(t) { return new (t || PokemonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PokemonDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonDetailsComponent, selectors: [["app-pokemon-details"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "my-4"], [1, "row"], [1, "col-md-3", "col-sm-6", "mb-4"], ["width", "100", 3, "src"], [1, "col-md-4"], [1, "my-3"], [4, "ngFor", "ngForOf"]], template: function PokemonDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokemonDetailsComponent_div_0_Template, 39, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi9wb2tlbW9uLWRldGFpbHMvcG9rZW1vbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-details',
                templateUrl: './pokemon-details.component.html',
                styleUrls: ['./pokemon-details.component.css']
            }]
    }], function () { return [{ type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pokemon/pokemon-list/pokemon-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pokemon/pokemon-list/pokemon-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");







const _c0 = function (a1) { return ["/detail", a1]; };
function PokemonListComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1 == null ? null : item_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1 == null ? null : item_r1.imageFront, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
} }
class PokemonListComponent {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
        this.pokemon = [];
        this.offset = 0;
        this.limit = 20;
    }
    ngOnInit() {
        this.getAll();
    }
    onSubmit() {
        this.offset += 20;
        this.getAll();
    }
    getAll() {
        this.pokemonService.getPokemon(this.offset, this.limit).subscribe((data) => {
            this.pokemons = data;
            Object.keys(this.pokemons.results).map(key => {
                this.showPokemon(this.pokemons.results[key].name);
            });
        });
    }
    showPokemon(id) {
        this.pokemonService.getPokemonId(id).subscribe((data) => {
            const newPokemon = {
                id: data.id,
                name: data.name,
                imageFront: data.sprites['front_default'],
                imageBack: data.sprites['back_default'],
                species: data['species'].url,
            };
            this.pokemon.push(newPokemon);
            this.pokemon.sort((array, order) => array.id - order.id);
        });
    }
}
PokemonListComponent.ɵfac = function PokemonListComponent_Factory(t) { return new (t || PokemonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"])); };
PokemonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonListComponent, selectors: [["app-pokemon-list"]], decls: 13, vars: 5, consts: [[1, "our-webcoderskull", "padding-lg"], [1, "container"], [1, "col-md-4"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], ["class", "col-12 col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "container-button"], [1, "button-style", 3, "click"], [1, "col-12", "col-md-6", "col-lg-3"], [1, "cnt-block", "equal-hight", 2, "height", "349px", 3, "routerLink"], ["alt", "pokeimage", 1, "img-responsive", 3, "src"]], template: function PokemonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pokemon list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokemonListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonListComponent_li_8_Template, 6, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonListComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 2, ctx.pokemon, ctx.query));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"]], styles: [".row.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 52.52px;\r\n    line-height: 95px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    margin: 0 0 40px;\r\n    padding-bottom: 20px;\r\n    text-transform: uppercase;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n  margin:0;\r\n  padding:0;\r\n  list-style:none;\r\n}\r\n.heading.heading-icon[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.padding-lg[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tpadding-top: 60px;\r\n\tpadding-bottom: 60px;\r\n}\r\n.practice-area.padding-lg[_ngcontent-%COMP%] {\r\n    padding-bottom: 55px;\r\n    padding-top: 55px;\r\n}\r\n.practice-area[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{ \r\n     border:1px solid #999999; \r\n\t text-align:center; \r\n\t margin-bottom:28px; \r\n\t padding:40px 25px;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);\r\n    border: 0;\r\n}\r\n.practice-area[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{ \r\n    color:#3c3c3c; \r\n\tfont-size:24px; \r\n\tfont-weight:500;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tpadding: 10px 0;\r\n}\r\n.practice-area[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{ \r\n    font-size:14px; \r\n\tline-height:22px; \r\n\tfont-weight:400;\r\n}\r\n.practice-area[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\tdisplay:inline-block;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]{ \r\n   float:left; \r\n   width:100%; \r\n   background:#fff; \r\n   padding:30px 20px; \r\n   text-align:center; \r\n   border:2px solid #d5d5d5;\r\n   margin: 0 0 28px;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{\r\n   width:148px; \r\n   height:148px; \r\n   border-radius:100%; \r\n   display:inline-block;\r\n   margin-bottom: 15px;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n   width:148px; \r\n   height:148px; \r\n   border-radius:100%; \r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{ \r\n   color:#2a2a2a; \r\n   font-size:20px; \r\n   font-weight:500; \r\n   padding:6px 0;\r\n   text-transform:uppercase;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration:none;\r\n\tcolor:#2a2a2a;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tcolor:#337ab7;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{ \r\n   color:#2a2a2a; \r\n   font-size:13px; \r\n   line-height:20px; \r\n   font-weight:400;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   .follow-us[_ngcontent-%COMP%]{\r\n\tmargin:20px 0 0;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   .follow-us[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{ \r\n    display:inline-block; \r\n\twidth:auto; \r\n\tmargin:0 5px;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   .follow-us[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{ \r\n   font-size:24px; \r\n   color:#767676;\r\n}\r\n.our-webcoderskull[_ngcontent-%COMP%]   .cnt-block[_ngcontent-%COMP%]   .follow-us[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]:hover{ \r\n   color:#025a8e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uL3Bva2Vtb24tbGlzdC9wb2tlbW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtLQUNLLHdCQUF3QjtFQUMzQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtDQUNoQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGtDQUFrQztDQUNsQyxlQUFlO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0NBQ2pCLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7QUFFQTtHQUNHLFVBQVU7R0FDVixVQUFVO0dBQ1YsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsd0JBQXdCO0dBQ3hCLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsb0JBQW9CO0dBQ3BCLG1CQUFtQjtBQUN0QjtBQUNBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWixrQkFBa0I7QUFDckI7QUFDQTtHQUNHLGFBQWE7R0FDYixjQUFjO0dBQ2QsZUFBZTtHQUNmLGFBQWE7R0FDYix3QkFBd0I7QUFDM0I7QUFDQTtFQUNFLG9CQUFvQjtDQUNyQixhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0dBQ0csYUFBYTtHQUNiLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsZUFBZTtBQUNsQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0NBQ3ZCLFVBQVU7Q0FDVixZQUFZO0FBQ2I7QUFDQTtHQUNHLGNBQWM7R0FDZCxhQUFhO0FBQ2hCO0FBQ0E7R0FDRyxhQUFhO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uL3Bva2Vtb24tbGlzdC9wb2tlbW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cuaGVhZGluZyBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNTIuNTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxudWx7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxufVxyXG4uaGVhZGluZy5oZWFkaW5nLWljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnBhZGRpbmctbGcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmctdG9wOiA2MHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcbi5wcmFjdGljZS1hcmVhLnBhZGRpbmctbGcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcclxufVxyXG4ucHJhY3RpY2UtYXJlYSAuaW5uZXJ7IFxyXG4gICAgIGJvcmRlcjoxcHggc29saWQgIzk5OTk5OTsgXHJcblx0IHRleHQtYWxpZ246Y2VudGVyOyBcclxuXHQgbWFyZ2luLWJvdHRvbToyOHB4OyBcclxuXHQgcGFkZGluZzo0MHB4IDI1cHg7XHJcbn1cclxuLm91ci13ZWJjb2RlcnNrdWxsIC5jbnQtYmxvY2s6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG4ucHJhY3RpY2UtYXJlYSAuaW5uZXIgaDN7IFxyXG4gICAgY29sb3I6IzNjM2MzYzsgXHJcblx0Zm9udC1zaXplOjI0cHg7IFxyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4ucHJhY3RpY2UtYXJlYSAuaW5uZXIgcHsgXHJcbiAgICBmb250LXNpemU6MTRweDsgXHJcblx0bGluZS1oZWlnaHQ6MjJweDsgXHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG59XHJcbi5wcmFjdGljZS1hcmVhIC5pbm5lciBpbWd7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5vdXItd2ViY29kZXJza3VsbCAuY250LWJsb2NreyBcclxuICAgZmxvYXQ6bGVmdDsgXHJcbiAgIHdpZHRoOjEwMCU7IFxyXG4gICBiYWNrZ3JvdW5kOiNmZmY7IFxyXG4gICBwYWRkaW5nOjMwcHggMjBweDsgXHJcbiAgIHRleHQtYWxpZ246Y2VudGVyOyBcclxuICAgYm9yZGVyOjJweCBzb2xpZCAjZDVkNWQ1O1xyXG4gICBtYXJnaW46IDAgMCAyOHB4O1xyXG59XHJcbi5vdXItd2ViY29kZXJza3VsbCAuY250LWJsb2NrIGZpZ3VyZXtcclxuICAgd2lkdGg6MTQ4cHg7IFxyXG4gICBoZWlnaHQ6MTQ4cHg7IFxyXG4gICBib3JkZXItcmFkaXVzOjEwMCU7IFxyXG4gICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ub3VyLXdlYmNvZGVyc2t1bGwgLmNudC1ibG9jayBpbWd7IFxyXG4gICB3aWR0aDoxNDhweDsgXHJcbiAgIGhlaWdodDoxNDhweDsgXHJcbiAgIGJvcmRlci1yYWRpdXM6MTAwJTsgXHJcbn1cclxuLm91ci13ZWJjb2RlcnNrdWxsIC5jbnQtYmxvY2sgaDN7IFxyXG4gICBjb2xvcjojMmEyYTJhOyBcclxuICAgZm9udC1zaXplOjIwcHg7IFxyXG4gICBmb250LXdlaWdodDo1MDA7IFxyXG4gICBwYWRkaW5nOjZweCAwO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbn1cclxuLm91ci13ZWJjb2RlcnNrdWxsIC5jbnQtYmxvY2sgaDMgYXtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRjb2xvcjojMmEyYTJhO1xyXG59XHJcbi5vdXItd2ViY29kZXJza3VsbCAuY250LWJsb2NrIGgzIGE6aG92ZXJ7XHJcblx0Y29sb3I6IzMzN2FiNztcclxufVxyXG4ub3VyLXdlYmNvZGVyc2t1bGwgLmNudC1ibG9jayBweyBcclxuICAgY29sb3I6IzJhMmEyYTsgXHJcbiAgIGZvbnQtc2l6ZToxM3B4OyBcclxuICAgbGluZS1oZWlnaHQ6MjBweDsgXHJcbiAgIGZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG4ub3VyLXdlYmNvZGVyc2t1bGwgLmNudC1ibG9jayAuZm9sbG93LXVze1xyXG5cdG1hcmdpbjoyMHB4IDAgMDtcclxufVxyXG4ub3VyLXdlYmNvZGVyc2t1bGwgLmNudC1ibG9jayAuZm9sbG93LXVzIGxpeyBcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOyBcclxuXHR3aWR0aDphdXRvOyBcclxuXHRtYXJnaW46MCA1cHg7XHJcbn1cclxuLm91ci13ZWJjb2RlcnNrdWxsIC5jbnQtYmxvY2sgLmZvbGxvdy11cyBsaSAuZmF7IFxyXG4gICBmb250LXNpemU6MjRweDsgXHJcbiAgIGNvbG9yOiM3Njc2NzY7XHJcbn1cclxuLm91ci13ZWJjb2RlcnNrdWxsIC5jbnQtYmxvY2sgLmZvbGxvdy11cyBsaSAuZmE6aG92ZXJ7IFxyXG4gICBjb2xvcjojMDI1YThlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-list',
                templateUrl: './pokemon-list.component.html',
                styleUrls: ['./pokemon-list.component.css']
            }]
    }], function () { return [{ type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PokemonService {
    constructor(http) {
        this.http = http;
        this.Url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pokeApiUrl;
    }
    getPokemon(id, limit) {
        return this.http.get(`${this.Url}?offset=${id}&limit=${limit}`);
    }
    getPokemonId(id) {
        return this.http.get(`${this.Url}/${id}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchPipe {
    transform(value, args) {
        if (!value) {
            return;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    pokeApiUrl: 'https://pokeapi.co/api/v2/pokemon'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HommyDeJesus\Documents\Projects\pokedex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map