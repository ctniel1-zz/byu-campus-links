import {Component} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {routerTransition} from '../router.animations';
import {CampusLinksService} from '../campus-links.service';

@Component({
  moduleId: module.id,
  selector: 'communication-links',
  templateUrl: 'communication.component.html',
  styleUrls: ['communication.component.css'],
  providers: [Jsonp, CampusLinksService]
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''}
})

export class CommunicationComponent {
  url: string = '';

  constructor(private campusLinksService: CampusLinksService,
              private location: Location,
              private router: Router) {}


  links = this.campusLinksService
    .load()
    .subscribe(data => {console.log("Data: ", data); this.links = data});


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

  gotoFavorites(): void{
    this.router.navigate(['/favorites']);
  }

  goHome(): void{
    this.router.navigate(['/dashboard'])
  }
}
