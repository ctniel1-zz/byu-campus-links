import {Component} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {routerTransition} from '../router.animations';
import {CampusLinksService} from '../campus-links.service';

@Component({
  moduleId: module.id,
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  providers: [Jsonp, CampusLinksService],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
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
    .subscribe(data => {console.log("Data: ", data); this.links = data});

  addLink() {
    this.linkAdd = true;
    if (this.linkSet == true) {
      this.linkSet = false;
    }
    if (this.linkManage == true) {
      this.linkManage = false;
    }
    if (this.defaultIconList == true) {
      this.defaultIconList = false;
    }
  }

  addSet() {
    this.linkSet = true;
    if (this.linkAdd == true) {
      this.linkAdd = false;
    }
    if (this.linkManage == true) {
      this.linkManage = false;
    }
    if (this.defaultIconList == true) {
      this.defaultIconList = false;
    }
  }

  addLinkMobile() {
    this.mobileSettings = false;
    this.linkAdd = true;
  }

  addSetMobile() {
    this.mobileSettings = false;
    this.linkSet = true;
  }

  addedLink() {
    this.linkAdd = false;
  }

  addedSet() {
    this.linkSet = false;
  }

  addedSetMobile() {
    this.linkSet = false;
    this.mobileSettings = true;
  }

  addedLinkMobile() {
    this.linkAdd = false;
    this.mobileSettings = true;
  }

  manageLink() {
    this.linkManage = true;
    if (this.linkAdd == true){
      this.linkAdd = false;
    }
    if (this.linkSet == true) {
      this.linkSet = false;
    }
    if (this.defaultIconList == true) {
      this.defaultIconList = false;
    }
  }

  manageLinkMobile() {
    this.mobileSettings = false;
    this.linkManage = true;
  }

  managedLink() {
    this.linkManage = false;
  }

  managedLinkMobile() {
    this.linkManage = false;
    this.mobileSettings = true;
  }

  toggleBYUSets() {
    if (this.BYUSets == false) {
      this.BYUSets = true;
    }
    if (this.OtherSets == true) {
      this.OtherSets = false;
    }
  }

  toggleOtherSets() {
    if (this.OtherSets == false) {
      this.OtherSets = true;
    }
    if (this.BYUSets == true) {
      this.BYUSets = false;
    }
  }

  toggleDefaultIcons() {
    if (this.linkAdd == true) {
      this.linkAdd = false;
    }
    this.defaultIconList = true;
  }

  // selectIcon(icon) {
  //   this.selectedIcon = icon;
  //   this.defaultIconList = false;
  //   this.linkAdd = true;
  // }

  submitLink() {
    console.log(this.selectedCategory + ", " + this.selectedTitle + ", " + this. selectedIcon + ", " + this.selectedURL);
  }

  toggleIcons() {

  }

  toggleTitles() {

  }

}
