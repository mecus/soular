System.register(['angular2/core', './service-list.component'], function(exports_1, context_1) {
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
    var core_1, service_list_component_1;
    var ServiceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_list_component_1_1) {
                service_list_component_1 = service_list_component_1_1;
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
                        directives: [service_list_component_1.ServiceListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ServiceComponent);
                return ServiceComponent;
            }());
            exports_1("ServiceComponent", ServiceComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBO29CQUNJLFVBQUssR0FBVyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBWEQ7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsV0FBVyxFQUFHLHlDQUF5Qzt3QkFDdkQsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7d0JBRTVDLFVBQVUsRUFBRSxDQUFFLDZDQUFvQixDQUFFO3FCQUN2QyxDQUFDOztvQ0FBQTtnQkFLRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJvdXItc2VydmljZXMvc2VydmljZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFNlcnZpY2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZXJ2aWNlLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAnc2VydmljZScsXG4gICAgdGVtcGxhdGVVcmwgOiAnZGV2L291ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zZXJ2aWNlLmNvbXBvbmVudC5jc3MnXSxcblxuICAgIGRpcmVjdGl2ZXM6IFsgU2VydmljZUxpc3RDb21wb25lbnQgXSAgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQ29tcG9uZW50IHtcbiAgICB0aXRsZTogc3RyaW5nID0gXCJTZXJ2aWNlIHBhZ2VcIjtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
