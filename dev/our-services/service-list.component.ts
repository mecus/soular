import { Component, ElementRef, OnInit, ViewEncapsulation } from 'angular2/core';

@Component ({
    selector: 'sl-serviceList',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl : 'dev/our-services/service-list.component.html',
    styleUrls: ['src/css/service.component.css']
})

export class ServiceListComponent {

    constructor(private el: ElementRef){}
    public guard = false;
    public protection = false;
    public event = false;

    public securityService: any[] = [
        "Security Guard",
        "Close Protection",
        "Event Security",
        "Retail Security"
    ];
    ngOnInit(){
        this.protection = true;
    }
    onGuard(){
        this.guard = true;
        this.protection = false;
        this.event = false;
    }
    onProtect(){
        this.protection = true;
        this.guard = false;
        this.event = false;
    }
    onSEvent(){
        this.event = true;
        this.protection = false;
        this.guard = false;
    }
}