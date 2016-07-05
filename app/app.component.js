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
                    document.getElementById('top-page').onscroll = function () {
                        alert("scrolling");
                    };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'dev/app.component.html',
                        styleUrls: ['src/css/app.css'],
                        providers: [router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, jquery_1.JqueryComponent, my_carousel_1.Angular2Carousel]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/service', name: 'Service', component: service_component_1.ServiceComponent },
                        { path: '/about', 'name': 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [Window, core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBSUksc0JBQVksTUFBYyxFQUFTLEVBQWE7b0JBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztvQkFGekMsYUFBUSxHQUFHLEtBQUssQ0FBQztnQkFJeEIsQ0FBQztnQkFHRCxnQ0FBUyxHQUFUO29CQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUd4QixDQUFDO2dCQUNELDhCQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsK0JBQVEsR0FBUjtvQkFDRSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRzt3QkFDN0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNyQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQztnQkFuQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBRTlCLFNBQVMsRUFBRSxDQUFFLHlCQUFnQixDQUFFO3dCQUMvQixVQUFVLEVBQUUsQ0FBRywwQkFBaUIsRUFBRSx3QkFBZSxFQUFFLDhCQUFnQixDQUFFO3FCQUN4RSxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRzt3QkFDOUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFHO3dCQUNuRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtxQkFDakUsQ0FBQzs7Z0NBQUE7Z0JBMkJGLG1CQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCx1Q0F5QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX1BST1ZJREVSUywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKcXVlcnlDb21wb25lbnQgfSBmcm9tICcuL2pxdWVyeSc7XG5cblxuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuL291ci1zZXJ2aWNlcy9zZXJ2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQtdXMvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXIyQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsX2NvbXBvbmVudC9teS1jYXJvdXNlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2FwcC5jc3MnXSxcblxuICAgIHByb3ZpZGVyczogWyBST1VURVJfUFJPVklERVJTIF0sXG4gICAgZGlyZWN0aXZlczogWyAgUk9VVEVSX0RJUkVDVElWRVMsIEpxdWVyeUNvbXBvbmVudCwgQW5ndWxhcjJDYXJvdXNlbCBdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvaG9tZScsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgIH0sXG4gICAgeyBwYXRoOiAnL3NlcnZpY2UnLCBuYW1lOiAnU2VydmljZScsIGNvbXBvbmVudDogU2VydmljZUNvbXBvbmVudCAgfSxcbiAgICB7IHBhdGg6ICcvYWJvdXQnLCAnbmFtZSc6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgc2xpZGViYXIgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHdpbmRvdzogV2luZG93LCBwdWJsaWMgZWw6RWxlbWVudFJlZil7XG4gICAgICBcbiAgICB9XG4gIFxuXG4gICAgc2xpZGVNZW51KCl7XG4gICAgICAgdGhpcy5zbGlkZWJhciA9IHRydWU7XG4gICAgICAgXG5cbiAgICB9XG4gICAgb25DbG9zZSgpe1xuICAgICAgICB0aGlzLnNsaWRlYmFyID0gZmFsc2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXBhZ2UnKS5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhbGVydChcInNjcm9sbGluZ1wiKTtcbiAgICAgIH1cbiAgICB9XG4gXG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
