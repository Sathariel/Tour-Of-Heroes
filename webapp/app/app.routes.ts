import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesComponent } from '../hero/heroes.component';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

const routes: RouterConfig = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}, {
    path: 'heroes',
    component: HeroesComponent
}, {
    path: 'heroes/:id',
    component: HeroDetailComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}];

export const appRouterProviders = [
    provideRouter(routes)
];