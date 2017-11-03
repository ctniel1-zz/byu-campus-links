"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var campus_links_service_1 = require("../campus-links.service");
var DashboardComponent = (function () {
    function DashboardComponent(campusLinksService, router) {
        var _this = this;
        this.campusLinksService = campusLinksService;
        this.router = router;
        this.site = 'https://my.byu.edu';
        this.links = this.campusLinksService
            .load()
            .subscribe(function (data) { console.log("Data: ", data); _this.links = data; });
    }
    DashboardComponent.prototype.getSite = function () {
        return this.site;
    };
    DashboardComponent.prototype.changePortlet = function (site) {
        this.site = site;
        console.log(this.site);
    };
    DashboardComponent.prototype.gotoSchool = function () {
        this.router.navigate(['/school']);
    };
    DashboardComponent.prototype.gotoWork = function () {
        this.router.navigate(['/work']);
    };
    DashboardComponent.prototype.gotoCommunication = function () {
        this.router.navigate(['/communication']);
    };
    DashboardComponent.prototype.gotoFavorites = function () {
        this.router.navigate(['/favorites']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            // animations: [routerTransition()],
            // host: {'[@routerTransition]': ''},
            providers: [http_1.Jsonp, campus_links_service_1.CampusLinksService]
        }),
        __metadata("design:paramtypes", [campus_links_service_1.CampusLinksService,
            router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map