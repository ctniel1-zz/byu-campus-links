import {Component}  from '@angular/core';
import {Router}     from '@angular/router';
import {Jsonp}      from '@angular/http';

import {CampusLinksService} from '../campus-links.service';

@Component({
    moduleId: module.id,
    selector: 'popular',
    templateUrl: 'popular.component.html',
    styleUrls: ['popular.component.css'],
    providers: [Jsonp, CampusLinksService]
})

export class PopularComponent{
    constructor(private router: Router, private campusLinksService: CampusLinksService) {}

    links = this.campusLinksService
        .load()
        .subscribe(data => {this.links = data});
}