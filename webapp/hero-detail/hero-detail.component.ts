import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Hero } from '../hero/hero.model';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero/hero.service";

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['webapp/hero-detail/hero-detail.component.css'],
    templateUrl: 'webapp/hero-detail/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    sub: any;
    navigated = false;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {

    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero;
                this.goBack(hero);
            })
            .catch(error => this.error = error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}