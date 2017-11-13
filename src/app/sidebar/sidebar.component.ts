import {Component}  from '@angular/core';
import {Router}     from '@angular/router';
import {Jsonp}      from '@angular/http';

import {CampusLinksService} from '../campus-links.service';

@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [Jsonp, CampusLinksService]
})

export class SidebarComponent {
    constructor(private router: Router, private campusLinksService: CampusLinksService) {}

    links = this.campusLinksService
        .load()
        .subscribe(data => {this.links = data});
}