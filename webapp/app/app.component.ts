import { Component } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { ROUTER_DIRECTIVES } from "@angular/router";
import '../rxjs-extensions';

@Component({
    selector: 'my-app',
    styleUrls: ['webapp/app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService],
    templateUrl: 'webapp/app/app.component.html'

})

export class AppComponent {
    title = 'Tour of Heroes';
}