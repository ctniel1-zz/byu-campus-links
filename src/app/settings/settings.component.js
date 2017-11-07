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
// import {routerTransition} from '../router.animations';
var campus_links_service_1 = require("../campus-links.service");
var SettingsComponent = (function () {
    function SettingsComponent(campusLinksService, location, router) {
        var _this = this;
        this.campusLinksService = campusLinksService;
        this.location = location;
        this.router = router;
        this.mobileSettings = true;
        this.titles = true;
        this.linkAdd = false;
        this.linkSet = false;
        this.linkManage = false;
        this.BYUSets = true;
        this.OtherSets = false;
        this.defaultIconList = false;
        this.selectedIcon = "";
        this.selectedTitle = "";
        this.selectedCategory = "";
        this.selectedURL = "";
        this.defaultIcons = [
            "star",
            "whatshot",
            "mood",
            "poll",
            "school",
            "location_city",
            "time_to_leave",
            "live_tv",
            "train",
            "local_post_office",
            "directions_walk",
            "panorama",
            "headset",
            "attach_money",
            "add_shopping_cart",
            "alarm",
            "build",
            "gavel",
            "thumb_up",
            "work"
        ];
        this.links = this.campusLinksService
            .load()
            .subscribe(function (data) { _this.links = data; });
    }
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings',
            templateUrl: 'settings.component.html',
            styleUrls: ['settings.component.css'],
            providers: [http_1.Jsonp, campus_links_service_1.CampusLinksService],
        }),
        __metadata("design:paramtypes", [campus_links_service_1.CampusLinksService,
            common_1.Location,
            router_1.Router])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map