import {Component}  from '@angular/core';
import {Router}     from '@angular/router';
import {Jsonp}      from '@angular/http';

import {CampusLinksService} from '../campus-links.service';

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css'],
    providers: [Jsonp, CampusLinksService]
})

export class AccountComponent{
    constructor(private router: Router, private campusLinksService: CampusLinksService) {}
}