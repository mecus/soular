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
    var AutoColorDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoColorDirective = (function () {
                function AutoColorDirective(el) {
                    this._defaultColor = 'red';
                    this.el = el.nativeElement;
                }
                AutoColorDirective.prototype.highlight = function (color) {
                    this.el.style.color = color;
                };
                AutoColorDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                    this.el.style.cursor = 'pointer';
                };
                AutoColorDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                __decorate([
                    core_1.Input('sl-autogrow'), 
                    __metadata('design:type', String)
                ], AutoColorDirective.prototype, "highlightColor", void 0);
                __decorate([
                    core_1.HostListener('mouseenter'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AutoColorDirective.prototype, "onMouseEnter", null);
                __decorate([
                    core_1.HostListener('mouseleave'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AutoColorDirective.prototype, "onMouseLeave", null);
                AutoColorDirective = __decorate([
                    core_1.Directive({
                        selector: '[sl-autogrow]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AutoColorDirective);
                return AutoColorDirective;
            }());
            exports_1("AutoColorDirective", AutoColorDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0b2NvbG9yLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFLSSw0QkFBWSxFQUFjO29CQUpsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztvQkFJRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQUEsQ0FBQztnQkFJaEQsc0NBQVMsR0FBakIsVUFBa0IsS0FBYTtvQkFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDaEMsQ0FBQztnQkFDMkIseUNBQVksR0FBWjtvQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFFckMsQ0FBQztnQkFDMkIseUNBQVksR0FBWjtvQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFekIsQ0FBQztnQkFiRDtvQkFBQyxZQUFLLENBQUMsYUFBYSxDQUFDOzswRUFBQTtnQkFLckI7b0JBQUMsbUJBQVksQ0FBQyxZQUFZLENBQUM7Ozs7c0VBQUE7Z0JBSzNCO29CQUFDLG1CQUFZLENBQUMsWUFBWSxDQUFDOzs7O3NFQUFBO2dCQXRCL0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTtxQkFFNUIsQ0FBQzs7c0NBQUE7Z0JBd0JGLHlCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCxtREFzQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2F1dG9jb2xvci5kaXJlY3RpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3NsLWF1dG9ncm93XSdcblxufSlcblxuZXhwb3J0IGNsYXNzIEF1dG9Db2xvckRpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbG9yID0gJ3JlZCc7XG4gICAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gICBcblxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKXt0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDt9XG5cbiAgICBASW5wdXQoJ3NsLWF1dG9ncm93JykgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKXtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQodGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICBcbiAgICB9XG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpe1xuICAgICAgICB0aGlzLmhpZ2hsaWdodChudWxsKTtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
