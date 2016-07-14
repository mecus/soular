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
                AutoGrowDirective.prototype.onMouseEnter = function () {
                    this.el.nativeElement.style.backgroundColor = 'green';
                    this.el.nativeElement.style.cursor = 'pointer';
                };
                AutoGrowDirective.prototype.onMouseLeave = function () {
                    this.el.nativeElement.style.backgroundColor = null;
                };
                __decorate([
                    core_1.HostListener('mouseenter'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AutoGrowDirective.prototype, "onMouseEnter", null);
                __decorate([
                    core_1.HostListener('mouseleave'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AutoGrowDirective.prototype, "onMouseLeave", null);
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[sl-autogrow]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0b2dyb3cuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLDJCQUFvQixFQUFjLEVBQVUsUUFBa0I7b0JBQTFDLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtnQkFHOUQsQ0FBQztnQkFDMkIsd0NBQVksR0FBWjtvQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7b0JBQ3RELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUVuRCxDQUFDO2dCQUMyQix3Q0FBWSxHQUFaO29CQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFFdkQsQ0FBQztnQkFSRDtvQkFBQyxtQkFBWSxDQUFDLFlBQVksQ0FBQzs7OztxRUFBQTtnQkFLM0I7b0JBQUMsbUJBQVksQ0FBQyxZQUFZLENBQUM7Ozs7cUVBQUE7Z0JBbkIvQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3FCQUs1QixDQUFDOztxQ0FBQTtnQkF3QkYsd0JBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELGlEQXNCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0b2dyb3cuZGlyZWN0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tzbC1hdXRvZ3Jvd10nXG4gICAgLy8gaG9zdDoge1xuICAgIC8vICAgICAnKGZvY3VzKSc6ICdvbkZvY3VzKCknLFxuICAgIC8vICAgICAnKGJsdXIpJzogJ29uQmx1cigpJ1xuICAgIC8vIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRvR3Jvd0RpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcil7XG4gICAgICAgIFxuXG4gICAgfVxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKXtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgXG4gICAgfVxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKXtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG51bGw7XG5cbiAgICB9XG4gICAgLy8gb25Gb2N1cygpe1xuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcyMDAnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBvbkJsdXIoKXtcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJyk7XG4gICAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
