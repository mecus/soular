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
    var JqueryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JqueryComponent = (function () {
                function JqueryComponent(_elRef) {
                    this._elRef = _elRef;
                }
                JqueryComponent.prototype.ngOnInit = function () {
                    jQuery('.footer').css({ "background-color": "red", "height": "100px" });
                    jQuery(window).scroll(function () {
                        if (jQuery(".top-bar").offset().top > 50) {
                            jQuery(".navbar").addClass(".navbar-fixed");
                        }
                        else
                            jQuery(".navbar").removeClass(".navbar-fixed");
                    });
                };
                JqueryComponent = __decorate([
                    core_1.Component({
                        selector: 'sl-jquery',
                        template: "\n        <p></p>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], JqueryComponent);
                return JqueryComponent;
            }());
            exports_1("JqueryComponent", JqueryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLHlCQUFvQixNQUFrQjtvQkFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtnQkFFdEMsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQzs0QkFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQzt3QkFBQSxJQUFJOzRCQUNMLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ25ELENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRyx5QkFFVjtxQkFDSixDQUFDOzttQ0FBQTtnQkFtQkYsc0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDZDQWtCQyxDQUFBIiwiZmlsZSI6ImpxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0ICB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzbC1qcXVlcnknLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8cD48L3A+XG4gICAgYCBcbn0pXG5leHBvcnQgY2xhc3MgSnF1ZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmICl7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBqUXVlcnkoJy5mb290ZXInKS5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOiBcInJlZFwiLCBcImhlaWdodFwiOiBcIjEwMHB4XCIgfSk7XG5cbiAgICAgICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5KFwiLnRvcC1iYXJcIikub2Zmc2V0KCkudG9wID4gNTApe1xuICAgICAgICAgICAgICAgIGpRdWVyeShcIi5uYXZiYXJcIikuYWRkQ2xhc3MoXCIubmF2YmFyLWZpeGVkXCIpO1xuICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIGpRdWVyeShcIi5uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCIubmF2YmFyLWZpeGVkXCIpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
