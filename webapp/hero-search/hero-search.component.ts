import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero } from '../hero/hero.model';

@Component({
    selector: 'hero-search',
    templateUrl: 'webapp/hero-search/hero-search.component.html',
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    searchSubject = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {

    }

    search(term: string) {
        this.searchSubject.next(term);
    }

    ngOnInit() {
        this.heroes = this.searchSubject
            .asObservable()
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // Todo: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    goToDetail(hero: Hero) {
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
}
