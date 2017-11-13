import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}       from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent}   from './sidebar/sidebar.component';
import {AccountComponent}   from './account/account.component';
import {SettingsComponent}  from './settings/settings.component';

@NgModule({
  imports:      [BrowserModule,
                 BrowserAnimationsModule,
                 HttpModule,
                 JsonpModule,
                 AppRoutingModule,
                 FormsModule
  ],
  declarations: [AppComponent,
                 DashboardComponent,
                 SidebarComponent,
                 AccountComponent,
                 SettingsComponent
  ],
  bootstrap:    [AppComponent],
})
export class AppModule { }
