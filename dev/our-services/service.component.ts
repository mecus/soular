import { Component } from 'angular2/core';
import { ServiceListComponent } from './service-list.component';

@Component ({
    selector: 'service',
    templateUrl : 'dev/our-services/service.component.html',
    styleUrls: ['src/css/service.component.css'],

    directives: [ ServiceListComponent ]  
})


export class ServiceComponent {
    title: string = "Service page";
}