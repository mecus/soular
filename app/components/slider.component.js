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
                        selector: 'sl-Nslider',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFFSSx5QkFBb0IsTUFBa0I7b0JBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7Z0JBRXRDLENBQUM7Z0JBQ0Qsa0NBQVEsR0FBUjtvQkFFSSxNQUFNLENBQUM7d0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBRWxFLENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO2dCQUVYLENBQUM7Z0JBN0JMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRyxvVEFRVjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDcEMsQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCw2Q0FpQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAnc2wtTnNsaWRlcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDx1bCBjbGFzcz1cInJzbGlkZXNcIj5cbiAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cInNyYy9pbWFnZXMvMS5qcGdcIiBhbHQ9XCJcIj48L2xpPlxuICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwic3JjL2ltYWdlcy8yLmpwZ1wiIGFsdD1cIlwiPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJzcmMvaW1hZ2VzLzMuanBnXCIgYWx0PVwiXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICA8YnV0dG9uIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIidyZWQnXCIgPmNsaWNrPC9idXR0b24+XG4gICAgXG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zbGlkZXIuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYpe1xuXG4gICAgfVxuICAgIG5nT25Jbml0KCk6IGFueXtcblxuICAgICAgICBqUXVlcnkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmZpbmQoXCIucnNsaWRlc1wiKS5yZXNwb25zaXZlU2xpZGVzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGpRdWVyeShcImJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdZZXMgaXRzIHdvcmtpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
