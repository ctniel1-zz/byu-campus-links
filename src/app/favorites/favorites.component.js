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
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var campus_links_service_1 = require("../campus-links.service");
var FavoritesComponent = (function () {
    function FavoritesComponent(campusLinksService, location, router) {
        var _this = this;
        this.campusLinksService = campusLinksService;
        this.location = location;
        this.router = router;
        this.url = '';
        this.activeSettings = false;
        this.links = this.campusLinksService
            .load()
            .subscribe(function (data) { console.log("Data: ", data); _this.links = data; });
    }
    // addLink(name: string) {
    //   if (!name) {return;}
    //   this.campusLinksService.save(name)
    //     .subscribe(data => this.links.push(data));
    // }
    FavoritesComponent.prototype.getUrl = function (term) {
        this.url = term;
        return this.url;
    };
    FavoritesComponent.prototype.goBack = function () {
        this.location.back();
    };
    FavoritesComponent.prototype.gotoSchool = function () {
        this.router.navigate(['/school']);
    };
    FavoritesComponent.prototype.gotoWork = function () {
        this.router.navigate(['/work']);
    };
    FavoritesComponent.prototype.gotoCommunication = function () {
        this.router.navigate(['/communication']);
    };
    FavoritesComponent.prototype.goHome = function () {
        this.router.navigate(['/dashboard']);
    };
    FavoritesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'favorites-links',
            templateUrl: 'favorites.component.html',
            styleUrls: ['favorites.component.css'],
            providers: [http_1.Jsonp, campus_links_service_1.CampusLinksService]
            // animations: [routerTransition()],
            // host: {'[@routerTransition]': ''}
        }),
        __metadata("design:paramtypes", [campus_links_service_1.CampusLinksService,
            common_1.Location,
            router_1.Router])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=favorites.component.js.map