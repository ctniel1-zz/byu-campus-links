import {Component} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

// import {routerTransition} from '../router.animations';
import {CampusLinksService} from '../campus-links.service';

@Component({
  moduleId: module.id,
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  providers: [Jsonp, CampusLinksService],
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''}
})

export class SettingsComponent {
  mobileSettings: boolean = true;
  titles: boolean = true;
  linkAdd: boolean = false;
  linkSet: boolean = false;
  linkManage: boolean = false;
  BYUSets: boolean = true;
  OtherSets: boolean = false;
  defaultIconList: boolean = false;
  selectedIcon: string = "";
  selectedTitle: string = "";
  selectedCategory: string = "";
  selectedURL: string = "";

  defaultIcons =  [
    "star",
    "whatshot",
    "mood",
    "poll",
    "school",
    "location_city",
    "time_to_leave",
    "live_tv",
    "train",
    "local_post_office",
    "directions_walk",
    "panorama",
    "headset",
    "attach_money",
    "add_shopping_cart",
    "alarm",
    "build",
    "gavel",
    "thumb_up",
    "work"
    ];

  constructor(private campusLinksService: CampusLinksService,
              private location: Location,
              private router: Router) {}

  links = this.campusLinksService
    .load()
    .subscribe(data => { this.links = data});

}
