System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.welcome = "Welcome to Soular Security";
                    this.images = [
                        'src/images/soular1.jpg'
                    ];
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'dev/home/home.component.html',
                        styleUrls: ['src/css/home.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtvQkFDSSxZQUFPLEdBQVcsNEJBQTRCLENBQUM7b0JBRXhDLFdBQU0sR0FBRzt3QkFDWix3QkFBd0I7cUJBRzNCLENBQUM7Z0JBRU4sQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsTUFBTTt3QkFDaEIsV0FBVyxFQUFHLDhCQUE4Qjt3QkFDNUMsU0FBUyxFQUFFLENBQUUsNEJBQTRCLENBQUU7cUJBRTlDLENBQUM7O2lDQUFBO2dCQVdGLG9CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx5Q0FTQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlVXJsIDogJ2Rldi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyAnc3JjL2Nzcy9ob21lLmNvbXBvbmVudC5jc3MnIF0gLFxuICAgIFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHdlbGNvbWU6IHN0cmluZyA9IFwiV2VsY29tZSB0byBTb3VsYXIgU2VjdXJpdHlcIjtcblxuICAgIHB1YmxpYyBpbWFnZXMgPSBbXG4gICAgICAgICdzcmMvaW1hZ2VzL3NvdWxhcjEuanBnJ1xuICAgICAgICAvLydodHRwOi8vZGwuZHJvcGJveC5jb20vdS81MTUwNDYvd3d3L2dhcmZpZWxkLWludGVyaW9yLmpwZydcblxuICAgIF07XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
