import { Component } from 'angular2/core';
import { SecurityGuardComponent } from './security.guard.component';
import { CloseProtectionComponent } from './close.protection.component';
import { EventSecurityComponent } from './events.component';
import { ConstructionComponent } from './construction.component';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component ({
    selector: 'service',
    templateUrl : 'dev/our-services/service.component.html',
    styleUrls: ['src/css/service.component.css'],

    directives: [SecurityGuardComponent, 
                CloseProtectionComponent, 
                EventSecurityComponent,
                ConstructionComponent,
                ROUTER_DIRECTIVES
                ]
 
})
// @RouteConfig([
//     { path: '/guard', as: 'Guard', component: SecurityGuardComponent },
//     {path: '/protection', name: 'CloseProtection', component: CloseProtectionComponent },
//     {path: '/events', name: 'Events', component: EventSecurityComponent },
//     {path: '/construction', name: 'Construction', component: ConstructionComponent }
// ])

export class ServiceComponent {
    title: string = "Service page";
}