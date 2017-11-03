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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var campus_links_service_1 = require("./campus-links.service");
var CampusLinksComponent = (function () {
    function CampusLinksComponent(campusLinksService) {
        var _this = this;
        this.campusLinksService = campusLinksService;
        this.url = '';
        this.isVisible = false;
        this.isShown1 = false;
        this.isShown2 = false;
        this.isShown3 = false;
        this.isShown4 = false;
        this.links = this.campusLinksService
            .load()
            .subscribe(function (data) { console.log("Data: ", data); _this.links = data; });
    }
    CampusLinksComponent.prototype.toggleTags = function (selectedCategory, selectedLink) {
        if (this.isVisible == true) {
            this.isVisible = false;
        }
        else {
            this.isVisible = true;
        }
    };
    CampusLinksComponent.prototype.getUrl = function (term) {
        this.url = term;
        return this.url;
    };
    CampusLinksComponent.prototype.toggleLinks1 = function () {
        if (this.isShown1 == true) {
            this.isShown1 = false;
        }
        else {
            this.isShown1 = true;
        }
    };
    CampusLinksComponent.prototype.toggleLinks2 = function () {
        if (this.isShown2 == true) {
            this.isShown2 = false;
        }
        else {
            this.isShown2 = true;
        }
    };
    CampusLinksComponent.prototype.toggleLinks3 = function () {
        if (this.isShown3 == true) {
            this.isShown3 = false;
        }
        else {
            this.isShown3 = true;
        }
    };
    CampusLinksComponent.prototype.toggleLinks4 = function () {
        if (this.isShown4 == true) {
            this.isShown4 = false;
        }
        else {
            this.isShown4 = true;
        }
    };
    return CampusLinksComponent;
}());
CampusLinksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'campus-links',
        templateUrl: 'campus-links.component.html',
        styleUrls: ['campus-links.component.css'],
        providers: [http_1.Jsonp, campus_links_service_1.CampusLinksService]
    }),
    __metadata("design:paramtypes", [campus_links_service_1.CampusLinksService])
], CampusLinksComponent);
exports.CampusLinksComponent = CampusLinksComponent;
//# sourceMappingURL=campus-links.component.js.map