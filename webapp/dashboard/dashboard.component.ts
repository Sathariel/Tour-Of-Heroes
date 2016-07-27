import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Hero} from "../hero/hero.model";
import {HeroSearchComponent} from "../hero-search/hero-search.component";
import {HeroService} from "../hero/hero.service";

@Component({
    selector: 'my-dashboard',
    styleUrls: ['webapp/dashboard/dashboard.component.css'],
    templateUrl: 'webapp/dashboard/dashboard.component.html',
    directives: [HeroSearchComponent]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private router: Router,private heroService: HeroService) {

    }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
    }

    goToDetail(hero: Hero) {
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
}