import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SchoolComponent} from './school/school.component';
import {WorkComponent} from './work/work.component';
import {CommunicationComponent} from './communication/communication.component';
import {FavoritesComponent} from './favorites/favorites.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'school', component: SchoolComponent},
  {path: 'work', component: WorkComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'favorites', component: FavoritesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
