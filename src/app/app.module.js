"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var account_component_1 = require("./account/account.component");
var settings_component_1 = require("./settings/settings.component");
var explore_component_1 = require("./explore/explore.component");
var popular_component_1 = require("./popular/popular.component");
var set_component_1 = require("./set/set.component");
var friend_component_1 = require("./friend/friend.component");
var create_component_1 = require("./create/create.component");
var campus_links_service_1 = require("./campus-links.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                sidebar_component_1.SidebarComponent,
                account_component_1.AccountComponent,
                settings_component_1.SettingsComponent,
                explore_component_1.ExploreComponent,
                popular_component_1.PopularComponent,
                set_component_1.SetComponent,
                friend_component_1.FriendComponent,
                create_component_1.CreateComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [campus_links_service_1.CampusLinksService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map