import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}  from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

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
  ],
  bootstrap:    [AppComponent],
})
export class AppModule { }
