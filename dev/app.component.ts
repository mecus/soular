import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';

import { JqueryComponent } from './jquery';


import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './our-services/service.component';
import { AboutComponent } from './about-us/about.component';

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.component.html',
    styleUrls: ['src/css/app.css'],

    providers: [ ROUTER_PROVIDERS ],
    directives: [  ROUTER_DIRECTIVES, JqueryComponent ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true  },
    { path: '/service', name: 'Service', component: ServiceComponent  },
    { path: '/about', 'name': 'About', component: AboutComponent }
])

export class AppComponent implements OnInit {

    public slidebar = false;

    constructor(window: Window){
      
    }
  

    slideMenu(){
       this.slidebar = true;
       

    }
    onClose(){
        this.slidebar = false;
    }
    ngOnInit(){
     
    }
 


}