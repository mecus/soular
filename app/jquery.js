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
                        template: "\n        <button></button>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], JqueryComponent);
                return JqueryComponent;
            }());
            exports_1("JqueryComponent", JqueryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLHlCQUFvQixNQUFrQjtvQkFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtnQkFFdEMsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQzs0QkFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQzt3QkFBQSxJQUFJOzRCQUNMLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ25ELENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRyxtQ0FFVjtxQkFDSixDQUFDOzttQ0FBQTtnQkFtQkYsc0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDZDQWtCQyxDQUFBIiwiZmlsZSI6ImpxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0ICB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzbC1qcXVlcnknLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICAgIGAgXG59KVxuZXhwb3J0IGNsYXNzIEpxdWVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiApe1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgalF1ZXJ5KCcuZm9vdGVyJykuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjogXCJyZWRcIiwgXCJoZWlnaHRcIjogXCIxMDBweFwiIH0pO1xuXG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGpRdWVyeShcIi50b3AtYmFyXCIpLm9mZnNldCgpLnRvcCA+IDUwKXtcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIubmF2YmFyXCIpLmFkZENsYXNzKFwiLm5hdmJhci1maXhlZFwiKTtcbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICBqUXVlcnkoXCIubmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwiLm5hdmJhci1maXhlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
