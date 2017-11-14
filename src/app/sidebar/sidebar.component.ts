import {Component, Input}  from '@angular/core';
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

    @Input()
        currentPage: number;

    links = this.campusLinksService
        .load()
        .subscribe(data => {this.links = data});

    gotoDashboard(): void {
        this.router.navigate(['/dashboard']);
    }

    gotoExplore(): void {
        this.router.navigate(['/explore']);
    }

    gotoPopular(): void {
        this.router.navigate(['/popular']);
    }

    gotoSet(): void {
        this.router.navigate(['/set']);
    }

    gotoFriend(): void {
        this.router.navigate(['/friend']);
    }

    gotoCreate(): void {
        this.router.navigate(['/create']);
    }
}