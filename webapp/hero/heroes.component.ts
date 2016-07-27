import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

@Component({
    selector: 'my-heroes',
    styleUrls: ['webapp/hero/heroes.component.css'],
    templateUrl: 'webapp/hero/heroes.component.html',
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero: boolean = false;
    error: any;

    constructor(private router: Router,
        private heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }

    goToDetail() {
        this.router.navigate(['/heroes', this.selectedHero.id]);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}