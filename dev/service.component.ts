import { Component } from 'angular2/core';

@Component ({
    selector: 'service',
    template : '<h2>{{title}}</h2>' 
})


export class ServiceComponent {
    title: string = "Service page";
}