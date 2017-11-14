import {Component}  from '@angular/core';
import {Router}     from '@angular/router';
import {Jsonp}      from '@angular/http';

import {CampusLinksService} from '../campus-links.service';

@Component({
    moduleId: module.id,
    selector: 'create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css'],
    providers: [Jsonp, CampusLinksService]
})

export class CreateComponent{
    constructor(private router: Router, private campusLinksService: CampusLinksService) {}
}