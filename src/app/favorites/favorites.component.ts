import {Component} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {routerTransition} from '../router.animations';
import {CampusLinksService} from '../campus-links.service';

@Component({
  moduleId: module.id,
  selector: 'favorites-links',
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.css'],
  providers: [Jsonp, CampusLinksService]
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''}
})

export class FavoritesComponent {
  url: string = '';
  activeSettings: boolean = false;

  constructor(private campusLinksService: CampusLinksService,
              private location: Location,
              private router: Router) {}


  links = this.campusLinksService
    .load()
    .subscribe(data => {console.log("Data: ", data); this.links = data});

  // addLink(name: string) {
  //   if (!name) {return;}
  //   this.campusLinksService.save(name)
  //     .subscribe(data => this.links.push(data));
  // }


  getUrl(term:string){
    this.url = term;
    return this.url;
  }

  goBack(): void{
    this.location.back();
  }

  gotoSchool(): void{
    this.router.navigate(['/school']);
  }

  gotoWork(): void{
    this.router.navigate(['/work']);
  }

  gotoCommunication(): void{
    this.router.navigate(['/communication']);
  }

  goHome(): void{
    this.router.navigate(['/dashboard'])
  }

}
