System.register(['angular2/core', './carousel.component'], function(exports_1, context_1) {
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
    var core_1, carousel_component_1;
    var Slide;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            Slide = (function () {
                function Slide(carousel) {
                    this.carousel = carousel;
                    this.addClass = true;
                }
                Slide.prototype.ngOnInit = function () {
                    this.carousel.addSlide(this);
                };
                Slide.prototype.ngOnDestroy = function () {
                    this.carousel.removeSlide(this);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Slide.prototype, "index", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Slide.prototype, "direction", void 0);
                __decorate([
                    core_1.HostBinding('class.active'),
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Slide.prototype, "active", void 0);
                __decorate([
                    core_1.HostBinding('class.item'),
                    core_1.HostBinding('class.carousel-item'), 
                    __metadata('design:type', Boolean)
                ], Slide.prototype, "addClass", void 0);
                Slide = __decorate([
                    core_1.Component({
                        selector: 'slide',
                        template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [carousel_component_1.Carousel])
                ], Slide);
                return Slide;
            }());
            exports_1("Slide", Slide);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsX2NvbXBvbmVudC9zbGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFXSSxlQUFvQixRQUFpQjtvQkFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFGN0IsYUFBUSxHQUFXLElBQUksQ0FBQztnQkFHaEMsQ0FBQztnQkFFTSx3QkFBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVNLDJCQUFXLEdBQWxCO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQW5CRDtvQkFBQyxZQUFLLEVBQUU7O29EQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7d0RBQUE7Z0JBRVI7b0JBQUMsa0JBQVcsQ0FBQyxjQUFjLENBQUM7b0JBQzNCLFlBQUssRUFBRTs7cURBQUE7Z0JBRVI7b0JBQUMsa0JBQVcsQ0FBQyxZQUFZLENBQUM7b0JBQ3pCLGtCQUFXLENBQUMscUJBQXFCLENBQUM7O3VEQUFBO2dCQWhCdkM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLG1IQUlYO3FCQUNGLENBQUM7O3lCQUFBO2dCQXNCRixZQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCx5QkFxQkMsQ0FBQSIsImZpbGUiOiJjYXJvdXNlbF9jb21wb25lbnQvc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7Q2Fyb3VzZWwsIERpcmVjdGlvbn0gZnJvbSAgJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbGlkZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiIGNsYXNzPVwiaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbmRleDpudW1iZXI7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlyZWN0aW9uOkRpcmVjdGlvbjtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlOmJvb2xlYW47XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJylcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXHJcbiAgICBwcml2YXRlIGFkZENsYXNzOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Fyb3VzZWw6Q2Fyb3VzZWwpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
