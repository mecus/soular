import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'sl-securityGuard',
    templateUrl: 'dev/our-services/security.guard.component.html'
})
export class SecurityGuardComponent implements OnInit {
    title:string = "Security Guard";
    constructor() { }

    ngOnInit() { }

}