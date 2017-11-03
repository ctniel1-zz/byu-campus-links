import {Component} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {routerTransition} from '../router.animations';
import {CampusLinksService} from '../campus-links.service';

@Component({
  moduleId: module.id,
  selector: 'school-links',
  templateUrl: 'school.component.html',
  styleUrls: ['school.component.css'],
  providers: [Jsonp, CampusLinksService],
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''}
})

export class SchoolComponent {
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

  gotoWork(): void{
    this.router.navigate(['/work']);
  }

  gotoCommunication(): void{
    this.router.navigate(['/communication']);
  }

  gotoFavorites(): void{
    this.router.navigate(['/favorites']);
  }

  goHome(): void{
    this.router.navigate(['/dashboard'])
  }
}
