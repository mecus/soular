System.register(['angular2/core', 'angular2/router', './jquery', './home/home.component', './our-services/service.component', './about-us/about.component'], function(exports_1, context_1) {
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
    var core_1, router_1, jquery_1, home_component_1, service_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (service_component_1_1) {
                service_component_1 = service_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(window) {
                    this.slidebar = false;
                }
                AppComponent.prototype.slideMenu = function () {
                    this.slidebar = true;
                };
                AppComponent.prototype.onClose = function () {
                    this.slidebar = false;
                };
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'dev/app.component.html',
                        styleUrls: ['src/css/app.css'],
                        providers: [router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, jquery_1.JqueryComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/service', name: 'Service', component: service_component_1.ServiceComponent },
                        { path: '/about', 'name': 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [Window])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBSUksc0JBQVksTUFBYztvQkFGbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztnQkFJeEIsQ0FBQztnQkFHRCxnQ0FBUyxHQUFUO29CQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUd4QixDQUFDO2dCQUNELDhCQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsK0JBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFFOUIsU0FBUyxFQUFFLENBQUUseUJBQWdCLENBQUU7d0JBQy9CLFVBQVUsRUFBRSxDQUFHLDBCQUFpQixFQUFFLHdCQUFlLENBQUU7cUJBQ3RELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFHO3dCQUM5RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUc7d0JBQ25FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO3FCQUNqRSxDQUFDOztnQ0FBQTtnQkF5QkYsbUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHVDQXVCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfUFJPVklERVJTLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpxdWVyeUNvbXBvbmVudCB9IGZyb20gJy4vanF1ZXJ5JztcblxuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuL291ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQtdXMvYWJvdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvYXBwLmNzcyddLFxuXG4gICAgcHJvdmlkZXJzOiBbIFJPVVRFUl9QUk9WSURFUlMgXSxcbiAgICBkaXJlY3RpdmVzOiBbICBST1VURVJfRElSRUNUSVZFUywgSnF1ZXJ5Q29tcG9uZW50IF1cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy9ob21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSAgfSxcbiAgICB7IHBhdGg6ICcvc2VydmljZScsIG5hbWU6ICdTZXJ2aWNlJywgY29tcG9uZW50OiBTZXJ2aWNlQ29tcG9uZW50ICB9LFxuICAgIHsgcGF0aDogJy9hYm91dCcsICduYW1lJzogJ0Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzbGlkZWJhciA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3Iod2luZG93OiBXaW5kb3cpe1xuICAgICAgXG4gICAgfVxuICBcblxuICAgIHNsaWRlTWVudSgpe1xuICAgICAgIHRoaXMuc2xpZGViYXIgPSB0cnVlO1xuICAgICAgIFxuXG4gICAgfVxuICAgIG9uQ2xvc2UoKXtcbiAgICAgICAgdGhpcy5zbGlkZWJhciA9IGZhbHNlO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpe1xuICAgICBcbiAgICB9XG4gXG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
