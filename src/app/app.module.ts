import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}  from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SchoolComponent} from './school/school.component';
import {WorkComponent} from './work/work.component';
import {CommunicationComponent} from './communication/communication.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {SettingsComponent} from './settings/settings.component';
import {CampusLinksService} from './campus-links.service';

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
                 SchoolComponent,
                 WorkComponent,
                 CommunicationComponent,
                 FavoritesComponent,
                 SettingsComponent
  ],
  bootstrap:    [AppComponent],
  providers: [CampusLinksService]
})
export class AppModule { }
