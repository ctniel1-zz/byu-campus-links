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
import {ExploreComponent}   from './explore/explore.component';
import {PopularComponent}   from './popular/popular.component';
import {SetComponent}       from './set/set.component';
import {FriendComponent}    from './friend/friend.component';
import {CreateComponent}    from './create/create.component';

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
                 SidebarComponent,
                 AccountComponent,
                 SettingsComponent,
                 ExploreComponent,
                 PopularComponent,
                 SetComponent,
                 FriendComponent,
                 CreateComponent
  ],
  bootstrap:    [AppComponent],
    providers: [CampusLinksService]
})
export class AppModule { }
