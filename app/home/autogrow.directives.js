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
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                function AutoGrowDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '100');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[sl-autogrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvYXV0b2dyb3cuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLDJCQUFvQixFQUFjLEVBQVUsUUFBa0I7b0JBQTFDLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtnQkFFOUQsQ0FBQztnQkFDRCxtQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFFRCxrQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsSUFBSSxFQUFFOzRCQUNGLFNBQVMsRUFBRSxXQUFXOzRCQUN0QixRQUFRLEVBQUUsVUFBVTt5QkFDdkI7cUJBQ0osQ0FBQzs7cUNBQUE7Z0JBY0Ysd0JBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELGlEQVlDLENBQUEiLCJmaWxlIjoiaG9tZS9hdXRvZ3Jvdy5kaXJlY3RpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tzbC1hdXRvZ3Jvd10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhmb2N1cyknOiAnb25Gb2N1cygpJyxcbiAgICAgICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcbiAgICB9XG59KVxuXG5leHBvcnQgY2xhc3MgQXV0b0dyb3dEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpe1xuXG4gICAgfVxuICAgIG9uRm9jdXMoKXtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMjAwJyk7XG4gICAgfVxuXG4gICAgb25CbHVyKCl7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCcpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
