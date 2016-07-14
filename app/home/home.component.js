System.register(['angular2/core', '../components/autocolor.directives'], function(exports_1, context_1) {
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
    var core_1, autocolor_directives_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (autocolor_directives_1_1) {
                autocolor_directives_1 = autocolor_directives_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.welcome = "Welcome to Soular Security";
                    this.images = [
                        'src/images/soular1.jpg'
                    ];
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'dev/home/home.component.html',
                        styleUrls: ['src/css/home.component.css'],
                        directives: [autocolor_directives_1.AutoColorDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDSSxZQUFPLEdBQVcsNEJBQTRCLENBQUM7b0JBRXhDLFdBQU0sR0FBRzt3QkFDWix3QkFBd0I7cUJBRzNCLENBQUM7Z0JBSU4sQ0FBQztnQkFIRyxnQ0FBUSxHQUFSO2dCQUVBLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRyw4QkFBOEI7d0JBQzVDLFNBQVMsRUFBRSxDQUFFLDRCQUE0QixDQUFFO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztxQkFFbkMsQ0FBQzs7aUNBQUE7Z0JBYUYsb0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHlDQVdDLENBQUEiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBBdXRvQ29sb3JEaXJlY3RpdmUgfSBmcm9tICcuLi9jb21wb25lbnRzL2F1dG9jb2xvci5kaXJlY3RpdmVzJztcblxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlVXJsIDogJ2Rldi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyAnc3JjL2Nzcy9ob21lLmNvbXBvbmVudC5jc3MnIF0gLFxuICAgIGRpcmVjdGl2ZXM6IFtBdXRvQ29sb3JEaXJlY3RpdmVdXG4gICAgXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgd2VsY29tZTogc3RyaW5nID0gXCJXZWxjb21lIHRvIFNvdWxhciBTZWN1cml0eVwiO1xuXG4gICAgcHVibGljIGltYWdlcyA9IFtcbiAgICAgICAgJ3NyYy9pbWFnZXMvc291bGFyMS5qcGcnXG4gICAgICAgIC8vJ2h0dHA6Ly9kbC5kcm9wYm94LmNvbS91LzUxNTA0Ni93d3cvZ2FyZmllbGQtaW50ZXJpb3IuanBnJ1xuXG4gICAgXTtcbiAgICBuZ09uSW5pdCgpe1xuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
