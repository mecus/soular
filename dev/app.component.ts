import {Component} from 'angular2/core';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { ServiceComponent } from './service.component';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.component.html',
    styleUrls: ['src/css/app.css'],

    providers: [ ROUTER_PROVIDERS ],
    directives: [  ROUTER_DIRECTIVES ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true  },
    { path: '/service', name: 'Service', component: ServiceComponent  }
    // { path: '/about', 'name': 'About', component: AboutComponent }
])

export class AppComponent {

}