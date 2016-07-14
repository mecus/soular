System.register(['angular2/core', 'angular2/router', './jquery', './home/home.component', './our-services/service.component', './about-us/about.component', './carousel_component/my-carousel'], function(exports_1, context_1) {
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
    var core_1, router_1, jquery_1, home_component_1, service_component_1, about_component_1, my_carousel_1;
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
            },
            function (my_carousel_1_1) {
                my_carousel_1 = my_carousel_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(window, el) {
                    this.el = el;
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
                        directives: [router_1.ROUTER_DIRECTIVES, jquery_1.JqueryComponent, my_carousel_1.Angular2Carousel]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', as: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/services/..', as: 'Service', component: service_component_1.ServiceComponent, useAsDefault: false },
                        { path: '/about', as: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [Window, core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBSUksc0JBQVksTUFBYyxFQUFTLEVBQWE7b0JBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztvQkFGekMsYUFBUSxHQUFHLEtBQUssQ0FBQztnQkFJeEIsQ0FBQztnQkFHRCxnQ0FBUyxHQUFUO29CQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUd4QixDQUFDO2dCQUNELDhCQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsK0JBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFHOUIsVUFBVSxFQUFFLENBQUcsMEJBQWlCLEVBQUUsd0JBQWUsRUFBRSw4QkFBZ0IsQ0FBRTtxQkFDeEUsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUc7d0JBQzVFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFHO3dCQUMxRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtxQkFDN0QsQ0FBQzs7Z0NBQUE7Z0JBeUJGLG1CQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCx1Q0F1QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKcXVlcnlDb21wb25lbnQgfSBmcm9tICcuL2pxdWVyeSc7XG5cblxuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuL291ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQtdXMvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXIyQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsX2NvbXBvbmVudC9teS1jYXJvdXNlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2FwcC5jc3MnXSxcblxuICAgIFxuICAgIGRpcmVjdGl2ZXM6IFsgIFJPVVRFUl9ESVJFQ1RJVkVTLCBKcXVlcnlDb21wb25lbnQsIEFuZ3VsYXIyQ2Fyb3VzZWwgXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnL2hvbWUnLCBhczogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSAgfSxcbiAgICB7IHBhdGg6ICcvc2VydmljZXMvLi4nLCBhczogJ1NlcnZpY2UnLCBjb21wb25lbnQ6IFNlcnZpY2VDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogZmFsc2UgIH0sXG4gICAgeyBwYXRoOiAnL2Fib3V0JywgYXM6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgc2xpZGViYXIgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHdpbmRvdzogV2luZG93LCBwdWJsaWMgZWw6RWxlbWVudFJlZil7XG4gICAgICBcbiAgICB9XG4gIFxuXG4gICAgc2xpZGVNZW51KCl7XG4gICAgICAgdGhpcy5zbGlkZWJhciA9IHRydWU7XG4gICAgICAgXG5cbiAgICB9XG4gICAgb25DbG9zZSgpe1xuICAgICAgICB0aGlzLnNsaWRlYmFyID0gZmFsc2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCl7XG5cbiAgICB9IFxuXG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
