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
    var SliderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SliderComponent = (function () {
                function SliderComponent(_elRef) {
                    this._elRef = _elRef;
                }
                SliderComponent.prototype.ngOnInit = function () {
                    jQuery(function () {
                        this._elRef.nativeElement.find(".rslides").responsiveSlides();
                    });
                    jQuery("button").click(function () {
                        alert('Yes its working');
                    });
                };
                SliderComponent = __decorate([
                    core_1.Component({
                        selector: 'sl-slider',
                        template: "\n        <ul class=\"rslides\">\n            <li><img src=\"src/images/1.jpg\" alt=\"\"></li>\n            <li><img src=\"src/images/2.jpg\" alt=\"\"></li>\n            <li><img src=\"src/images/3.jpg\" alt=\"\"></li>\n        </ul>\n       <button [style.background]=\"'red'\" >click</button>\n    \n    ",
                        styleUrls: ['src/css/slider.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SliderComponent);
                return SliderComponent;
            }());
            exports_1("SliderComponent", SliderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBRUkseUJBQW9CLE1BQWtCO29CQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO2dCQUV0QyxDQUFDO2dCQUNELGtDQUFRLEdBQVI7b0JBRUksTUFBTSxDQUFDO3dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUVsRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNmLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFFWCxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUcsb1RBUVY7d0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ3BDLENBQUM7O21DQUFBO2dCQW1CRixzQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsNkNBaUJDLENBQUEiLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3I6ICdzbC1zbGlkZXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8dWwgY2xhc3M9XCJyc2xpZGVzXCI+XG4gICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJzcmMvaW1hZ2VzLzEuanBnXCIgYWx0PVwiXCI+PC9saT5cbiAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cInNyYy9pbWFnZXMvMi5qcGdcIiBhbHQ9XCJcIj48L2xpPlxuICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwic3JjL2ltYWdlcy8zLmpwZ1wiIGFsdD1cIlwiPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgPGJ1dHRvbiBbc3R5bGUuYmFja2dyb3VuZF09XCIncmVkJ1wiID5jbGljazwvYnV0dG9uPlxuICAgIFxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2xpZGVyLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmKXtcblxuICAgIH1cbiAgICBuZ09uSW5pdCgpOiBhbnl7XG5cbiAgICAgICAgalF1ZXJ5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5maW5kKFwiLnJzbGlkZXNcIikucmVzcG9uc2l2ZVNsaWRlcygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBqUXVlcnkoXCJidXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBhbGVydCgnWWVzIGl0cyB3b3JraW5nJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
