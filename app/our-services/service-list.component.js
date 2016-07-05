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
    var ServiceListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ServiceListComponent = (function () {
                function ServiceListComponent(el) {
                    this.el = el;
                    this.guard = false;
                    this.protection = false;
                    this.event = false;
                    this.securityService = [
                        "Security Guard",
                        "Close Protection",
                        "Event Security",
                        "Retail Security"
                    ];
                }
                ServiceListComponent.prototype.ngOnInit = function () {
                    this.protection = true;
                };
                ServiceListComponent.prototype.onGuard = function () {
                    this.guard = true;
                    this.protection = false;
                    this.event = false;
                };
                ServiceListComponent.prototype.onProtect = function () {
                    this.protection = true;
                    this.guard = false;
                    this.event = false;
                };
                ServiceListComponent.prototype.onSEvent = function () {
                    this.event = true;
                    this.protection = false;
                    this.guard = false;
                };
                ServiceListComponent = __decorate([
                    core_1.Component({
                        selector: 'sl-serviceList',
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        templateUrl: 'dev/our-services/service-list.component.html',
                        styleUrls: ['src/css/service.component.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ServiceListComponent);
                return ServiceListComponent;
            }());
            exports_1("ServiceListComponent", ServiceListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zZXJ2aWNlcy9zZXJ2aWNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBRUksOEJBQW9CLEVBQWM7b0JBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtvQkFDM0IsVUFBSyxHQUFHLEtBQUssQ0FBQztvQkFDZCxlQUFVLEdBQUcsS0FBSyxDQUFDO29CQUNuQixVQUFLLEdBQUcsS0FBSyxDQUFDO29CQUVkLG9CQUFlLEdBQVU7d0JBQzVCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjtxQkFDcEIsQ0FBQztnQkFWa0MsQ0FBQztnQkFXckMsdUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxzQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0Qsd0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDO2dCQUNELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsUUFBUTt3QkFDekMsV0FBVyxFQUFHLDhDQUE4Qzt3QkFDNUQsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7cUJBQy9DLENBQUM7O3dDQUFBO2dCQWlDRiwyQkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUEvQkQsdURBK0JDLENBQUEiLCJmaWxlIjoib3VyLXNlcnZpY2VzL3NlcnZpY2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAnc2wtc2VydmljZUxpc3QnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxuICAgIHRlbXBsYXRlVXJsIDogJ2Rldi9vdXItc2VydmljZXMvc2VydmljZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zZXJ2aWNlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VMaXN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe31cbiAgICBwdWJsaWMgZ3VhcmQgPSBmYWxzZTtcbiAgICBwdWJsaWMgcHJvdGVjdGlvbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBldmVudCA9IGZhbHNlO1xuXG4gICAgcHVibGljIHNlY3VyaXR5U2VydmljZTogYW55W10gPSBbXG4gICAgICAgIFwiU2VjdXJpdHkgR3VhcmRcIixcbiAgICAgICAgXCJDbG9zZSBQcm90ZWN0aW9uXCIsXG4gICAgICAgIFwiRXZlbnQgU2VjdXJpdHlcIixcbiAgICAgICAgXCJSZXRhaWwgU2VjdXJpdHlcIlxuICAgIF07XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5wcm90ZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgb25HdWFyZCgpe1xuICAgICAgICB0aGlzLmd1YXJkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm90ZWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgb25Qcm90ZWN0KCl7XG4gICAgICAgIHRoaXMucHJvdGVjdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3VhcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBvblNFdmVudCgpe1xuICAgICAgICB0aGlzLmV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm90ZWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3VhcmQgPSBmYWxzZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
