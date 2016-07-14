import { Component, OnInit } from 'angular2/core';
import { AutoColorDirective } from '../components/autocolor.directives';



@Component ({
    selector: 'home',
    templateUrl : 'dev/home/home.component.html',
    styleUrls: [ 'src/css/home.component.css' ] ,
    directives: [AutoColorDirective]
    
})

export class HomeComponent {
    welcome: string = "Welcome to Soular Security";

    public images = [
        'src/images/soular1.jpg'
        //'http://dl.dropbox.com/u/515046/www/garfield-interior.jpg'

    ];
    ngOnInit(){

    }
}