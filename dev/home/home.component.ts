import { Component } from 'angular2/core';

@Component ({
    selector: 'home',
    templateUrl : 'dev/home/home.component.html',
    styleUrls: [ 'src/css/home.component.css' ] 
})

export class HomeComponent {
    welcome: string = "Welcome to Soular Security";
}