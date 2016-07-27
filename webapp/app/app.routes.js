"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('../hero/heroes.component');
var dashboard_component_1 = require("../dashboard/dashboard.component");
var hero_detail_component_1 = require("../hero-detail/hero-detail.component");
var routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }, {
        path: 'heroes/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map