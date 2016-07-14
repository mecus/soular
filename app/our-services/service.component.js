System.register(['angular2/core', './security.guard.component', './close.protection.component', './events.component', './construction.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, security_guard_component_1, close_protection_component_1, events_component_1, construction_component_1, router_1;
    var ServiceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (security_guard_component_1_1) {
                security_guard_component_1 = security_guard_component_1_1;
            },
            function (close_protection_component_1_1) {
                close_protection_component_1 = close_protection_component_1_1;
            },
            function (events_component_1_1) {
                events_component_1 = events_component_1_1;
            },
            function (construction_component_1_1) {
                construction_component_1 = construction_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ServiceComponent = (function () {
                function ServiceComponent() {
                    this.title = "Service page";
                }
                ServiceComponent = __decorate([
                    core_1.Component({
                        selector: 'service',
                        templateUrl: 'dev/our-services/service.component.html',
                        styleUrls: ['src/css/service.component.css'],
                        directives: [security_guard_component_1.SecurityGuardComponent,
                            close_protection_component_1.CloseProtectionComponent,
                            events_component_1.EventSecurityComponent,
                            construction_component_1.ConstructionComponent,
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ServiceComponent);
                return ServiceComponent;
            }());
            exports_1("ServiceComponent", ServiceComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFBQTtvQkFDSSxVQUFLLEdBQVcsY0FBYyxDQUFDO2dCQUNuQyxDQUFDO2dCQXRCRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixXQUFXLEVBQUcseUNBQXlDO3dCQUN2RCxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzt3QkFFNUMsVUFBVSxFQUFFLENBQUMsaURBQXNCOzRCQUN2QixxREFBd0I7NEJBQ3hCLHlDQUFzQjs0QkFDdEIsOENBQXFCOzRCQUNyQiwwQkFBaUI7eUJBQ2hCO3FCQUVoQixDQUFDOztvQ0FBQTtnQkFVRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJvdXItc2VydmljZXMvc2VydmljZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5R3VhcmRDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5Lmd1YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbG9zZVByb3RlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2Nsb3NlLnByb3RlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50U2VjdXJpdHlDb21wb25lbnQgfSBmcm9tICcuL2V2ZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uc3RydWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25zdHJ1Y3Rpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAnc2VydmljZScsXG4gICAgdGVtcGxhdGVVcmwgOiAnZGV2L291ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zZXJ2aWNlLmNvbXBvbmVudC5jc3MnXSxcblxuICAgIGRpcmVjdGl2ZXM6IFtTZWN1cml0eUd1YXJkQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICBDbG9zZVByb3RlY3Rpb25Db21wb25lbnQsIFxuICAgICAgICAgICAgICAgIEV2ZW50U2VjdXJpdHlDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgQ29uc3RydWN0aW9uQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTXG4gICAgICAgICAgICAgICAgXVxuIFxufSlcbi8vIEBSb3V0ZUNvbmZpZyhbXG4vLyAgICAgeyBwYXRoOiAnL2d1YXJkJywgYXM6ICdHdWFyZCcsIGNvbXBvbmVudDogU2VjdXJpdHlHdWFyZENvbXBvbmVudCB9LFxuLy8gICAgIHtwYXRoOiAnL3Byb3RlY3Rpb24nLCBuYW1lOiAnQ2xvc2VQcm90ZWN0aW9uJywgY29tcG9uZW50OiBDbG9zZVByb3RlY3Rpb25Db21wb25lbnQgfSxcbi8vICAgICB7cGF0aDogJy9ldmVudHMnLCBuYW1lOiAnRXZlbnRzJywgY29tcG9uZW50OiBFdmVudFNlY3VyaXR5Q29tcG9uZW50IH0sXG4vLyAgICAge3BhdGg6ICcvY29uc3RydWN0aW9uJywgbmFtZTogJ0NvbnN0cnVjdGlvbicsIGNvbXBvbmVudDogQ29uc3RydWN0aW9uQ29tcG9uZW50IH1cbi8vIF0pXG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQ29tcG9uZW50IHtcbiAgICB0aXRsZTogc3RyaW5nID0gXCJTZXJ2aWNlIHBhZ2VcIjtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
