import { Component } from 'angular2/core';

@Component({
    selector: 'about',
    templateUrl : 'dev/about-us/about.component.html',
    styleUrls: ['src/css/about.component.css'] 
})

export class AboutComponent {
    welcome: string = "Welcome to about page";
}