import {Component, OnInit, ElementRef} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { JqueryComponent } from './jquery';



import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './our-services/service.component';
import { AboutComponent } from './about-us/about.component';
import { Angular2Carousel } from './carousel_component/my-carousel';

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.component.html',
    styleUrls: ['src/css/app.css'],

    
    directives: [  ROUTER_DIRECTIVES, JqueryComponent, Angular2Carousel ]
})
@RouteConfig([
    { path: '/home', as: 'Home', component: HomeComponent, useAsDefault: true  },
    { path: '/services/..', as: 'Service', component: ServiceComponent, useAsDefault: false  },
    { path: '/about', as: 'About', component: AboutComponent }
])

export class AppComponent implements OnInit {

    public slidebar = false;

    constructor(window: Window, public el:ElementRef){
      
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