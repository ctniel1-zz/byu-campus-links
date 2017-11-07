import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Jsonp} from '@angular/http';

import {routerTransition} from '../router.animations';
import {CampusLinksService} from '../campus-links.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''},
  providers: [Jsonp, CampusLinksService]
})

export class DashboardComponent{
  site: string = 'https://my.byu.edu';

  constructor(private router: Router, private campusLinksService: CampusLinksService) {}

  links = this.campusLinksService
    .load()
    .subscribe(data => {this.links = data});

  getSite(){
    return this.site;
  }

  changePortlet(site:string){
    this.site = site;
    console.log(this.site);
  }

  gotoAccount(): void{
    this.router.navigate(['/account']);
  }

  gotoWork(): void{
    this.router.navigate(['/work']);
  }

  gotoCommunication(): void{
    this.router.navigate(['/communication']);
  }

  gotoFavorites(): void{
    this.router.navigate(['/favorites']);
  }

}
