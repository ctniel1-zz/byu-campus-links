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
var router_animations_1 = require("../router.animations");
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
            .subscribe(function (data) { console.log("Data: ", data); _this.links = data; });
    }
    SettingsComponent.prototype.addLink = function () {
        this.linkAdd = true;
        if (this.linkSet == true) {
            this.linkSet = false;
        }
        if (this.linkManage == true) {
            this.linkManage = false;
        }
        if (this.defaultIconList == true) {
            this.defaultIconList = false;
        }
    };
    SettingsComponent.prototype.addSet = function () {
        this.linkSet = true;
        if (this.linkAdd == true) {
            this.linkAdd = false;
        }
        if (this.linkManage == true) {
            this.linkManage = false;
        }
        if (this.defaultIconList == true) {
            this.defaultIconList = false;
        }
    };
    SettingsComponent.prototype.addLinkMobile = function () {
        this.mobileSettings = false;
        this.linkAdd = true;
    };
    SettingsComponent.prototype.addSetMobile = function () {
        this.mobileSettings = false;
        this.linkSet = true;
    };
    SettingsComponent.prototype.addedLink = function () {
        this.linkAdd = false;
    };
    SettingsComponent.prototype.addedSet = function () {
        this.linkSet = false;
    };
    SettingsComponent.prototype.addedSetMobile = function () {
        this.linkSet = false;
        this.mobileSettings = true;
    };
    SettingsComponent.prototype.addedLinkMobile = function () {
        this.linkAdd = false;
        this.mobileSettings = true;
    };
    SettingsComponent.prototype.manageLink = function () {
        this.linkManage = true;
        if (this.linkAdd == true) {
            this.linkAdd = false;
        }
        if (this.linkSet == true) {
            this.linkSet = false;
        }
        if (this.defaultIconList == true) {
            this.defaultIconList = false;
        }
    };
    SettingsComponent.prototype.manageLinkMobile = function () {
        this.mobileSettings = false;
        this.linkManage = true;
    };
    SettingsComponent.prototype.managedLink = function () {
        this.linkManage = false;
    };
    SettingsComponent.prototype.managedLinkMobile = function () {
        this.linkManage = false;
        this.mobileSettings = true;
    };
    SettingsComponent.prototype.toggleBYUSets = function () {
        if (this.BYUSets == false) {
            this.BYUSets = true;
        }
        if (this.OtherSets == true) {
            this.OtherSets = false;
        }
    };
    SettingsComponent.prototype.toggleOtherSets = function () {
        if (this.OtherSets == false) {
            this.OtherSets = true;
        }
        if (this.BYUSets == true) {
            this.BYUSets = false;
        }
    };
    SettingsComponent.prototype.toggleDefaultIcons = function () {
        if (this.linkAdd == true) {
            this.linkAdd = false;
        }
        this.defaultIconList = true;
    };
    // selectIcon(icon) {
    //   this.selectedIcon = icon;
    //   this.defaultIconList = false;
    //   this.linkAdd = true;
    // }
    SettingsComponent.prototype.submitLink = function () {
        console.log(this.selectedCategory + ", " + this.selectedTitle + ", " + this.selectedIcon + ", " + this.selectedURL);
    };
    SettingsComponent.prototype.toggleIcons = function () {
    };
    SettingsComponent.prototype.toggleTitles = function () {
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings',
            templateUrl: 'settings.component.html',
            styleUrls: ['settings.component.css'],
            providers: [http_1.Jsonp, campus_links_service_1.CampusLinksService],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [campus_links_service_1.CampusLinksService,
            common_1.Location,
            router_1.Router])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map