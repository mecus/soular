System.register(['angular2/core', './home.component', './service.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, home_component_1, service_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (service_component_1_1) {
                service_component_1 = service_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'dev/app.component.html',
                        styleUrls: ['src/css/app.css'],
                        providers: [router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/service', name: 'Service', component: service_component_1.ServiceComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBRTlCLFNBQVMsRUFBRSxDQUFFLHlCQUFnQixDQUFFO3dCQUMvQixVQUFVLEVBQUUsQ0FBRywwQkFBaUIsQ0FBRTtxQkFDckMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUc7d0JBQzlFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRztxQkFFdEUsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSAnLi9zZXJ2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9hcHAuY3NzJ10sXG5cbiAgICBwcm92aWRlcnM6IFsgUk9VVEVSX1BST1ZJREVSUyBdLFxuICAgIGRpcmVjdGl2ZXM6IFsgIFJPVVRFUl9ESVJFQ1RJVkVTIF1cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy9ob21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSAgfSxcbiAgICB7IHBhdGg6ICcvc2VydmljZScsIG5hbWU6ICdTZXJ2aWNlJywgY29tcG9uZW50OiBTZXJ2aWNlQ29tcG9uZW50ICB9XG4gICAgLy8geyBwYXRoOiAnL2Fib3V0JywgJ25hbWUnOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
