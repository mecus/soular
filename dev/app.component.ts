import {Component} from 'angular2/core';
import { NavComponent } from './nav.component';

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.component.html',
    styleUrls: ['src/css/app.css'],

    directives: [NavComponent]
})
export class AppComponent {

}