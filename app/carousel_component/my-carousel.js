System.register(['angular2/core', 'angular2/common', './slide.component', './carousel.component'], function(exports_1, context_1) {
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
    var core_1, common_1, slide_component_1, carousel_component_1;
    var Angular2Carousel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            /*Angular 2 Carousel - Gallery*/
            Angular2Carousel = (function () {
                function Angular2Carousel() {
                    //The time to show the next photo
                    this.NextPhotoInterval = 1000;
                    //Looping or not
                    this.noLoopSlides = true;
                    //Photos
                    this.slides = [];
                    this.addNewSlide();
                }
                Angular2Carousel.prototype.addNewSlide = function () {
                    this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
                };
                Angular2Carousel.prototype.removeLastSlide = function () {
                    this.slides.pop();
                };
                Angular2Carousel = __decorate([
                    core_1.Component({
                        selector: 'sl-app',
                        template: "\n                    <h5>Angular 2 Carousel - Gallery</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <carousel [interval]=\"NextPhotoInterval\" [noWrap]=\"noLoopSlides\">\n                          <slide *ngFor=\"#slidez of slides; #index=index\"\n                                 [active]=\"slidez.active\">\n                            <img [src]=\"slidez.image\" style=\"margin:auto; width:900px; height:500px;\">\n\n                            <div class=\"carousel-caption\">\n                              <h3 style=\"background-color: transparent;color: white;\">Slide {{index + 1}}</h3>\n                              <p  style=\"background-color: transparent;color: white;\">{{slidez.text}}</p>\n                            </div>\n                          </slide>\n                        </carousel>\n                      </div>\n\n                      <div class=\"col-md-12\">\n                        <button type=\"button\" class=\"btn btn-info\"\n                                (click)=\"removeLastSlide()\">Remove Last Slide\n                        </button>\n                         <button type=\"button\" class=\"btn btn-info\"\n                                (click)=\"addNewSlide()\">Add Slide\n                        </button>\n                      </div>\n                    </div>\n\n             ",
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Carousel);
                return Angular2Carousel;
            }());
            exports_1("Angular2Carousel", Angular2Carousel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsX2NvbXBvbmVudC9teS1jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLGdDQUFnQztZQWlDaEM7Z0JBUUk7b0JBUEEsaUNBQWlDO29CQUN6QixzQkFBaUIsR0FBVSxJQUFJLENBQUM7b0JBQ3hDLGdCQUFnQjtvQkFDUixpQkFBWSxHQUFXLElBQUksQ0FBQztvQkFDcEMsUUFBUTtvQkFDQSxXQUFNLEdBQWMsRUFBRSxDQUFDO29CQUd2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRU8sc0NBQVcsR0FBbkI7b0JBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2IsRUFBQyxLQUFLLEVBQUMsc0VBQXNFLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxFQUMzRixFQUFDLEtBQUssRUFBQyxzRUFBc0UsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEVBQzNGLEVBQUMsS0FBSyxFQUFDLHNFQUFzRSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsRUFDM0YsRUFBQyxLQUFLLEVBQUMsc0VBQXNFLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxFQUMzRixFQUFDLEtBQUssRUFBQyxzRUFBc0UsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEVBQzNGLEVBQUMsS0FBSyxFQUFDLHNFQUFzRSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsQ0FDOUYsQ0FBQztnQkFDTixDQUFDO2dCQUVPLDBDQUFlLEdBQXZCO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBekRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBQyxrNENBMkJDO3dCQUNWLFVBQVUsRUFBRSxDQUFDLHVCQUFLLEVBQUMsNkJBQVEsRUFBRSx3QkFBZSxFQUFFLHdCQUFlLENBQUM7cUJBQ2pFLENBQUM7O29DQUFBO2dCQTJCRix1QkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsK0NBMEJDLENBQUEiLCJmaWxlIjoiY2Fyb3VzZWxfY29tcG9uZW50L215LWNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtTbGlkZX0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nhcm91c2VsfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XHJcblxyXG5cclxuLypBbmd1bGFyIDIgQ2Fyb3VzZWwgLSBHYWxsZXJ5Ki9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NsLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkFuZ3VsYXIgMiBDYXJvdXNlbCAtIEdhbGxlcnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhcm91c2VsIFtpbnRlcnZhbF09XCJOZXh0UGhvdG9JbnRlcnZhbFwiIFtub1dyYXBdPVwibm9Mb29wU2xpZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsaWRlICpuZ0Zvcj1cIiNzbGlkZXogb2Ygc2xpZGVzOyAjaW5kZXg9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cInNsaWRlei5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJzbGlkZXouaW1hZ2VcIiBzdHlsZT1cIm1hcmdpbjphdXRvOyB3aWR0aDo5MDBweDsgaGVpZ2h0OjUwMHB4O1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O2NvbG9yOiB3aGl0ZTtcIj5TbGlkZSB7e2luZGV4ICsgMX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Y29sb3I6IHdoaXRlO1wiPnt7c2xpZGV6LnRleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlTGFzdFNsaWRlKClcIj5SZW1vdmUgTGFzdCBTbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkTmV3U2xpZGUoKVwiPkFkZCBTbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbU2xpZGUsQ2Fyb3VzZWwsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXIyQ2Fyb3VzZWwgIHtcclxuICAgIC8vVGhlIHRpbWUgdG8gc2hvdyB0aGUgbmV4dCBwaG90b1xyXG4gICAgcHJpdmF0ZSBOZXh0UGhvdG9JbnRlcnZhbDpudW1iZXIgPSAxMDAwO1xyXG4gICAgLy9Mb29waW5nIG9yIG5vdFxyXG4gICAgcHJpdmF0ZSBub0xvb3BTbGlkZXM6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICAvL1Bob3Rvc1xyXG4gICAgcHJpdmF0ZSBzbGlkZXM6QXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5ld1NsaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGROZXdTbGlkZSgpIHtcclxuICAgICAgICAgdGhpcy5zbGlkZXMucHVzaChcclxuICAgICAgICAgICAge2ltYWdlOidodHRwOi8vd3d3LmFuZ3VsYXJ0eXBlc2NyaXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9jYXIxLmpwZycsdGV4dDonQk1XIDEnfSxcclxuICAgICAgICAgICAge2ltYWdlOidodHRwOi8vd3d3LmFuZ3VsYXJ0eXBlc2NyaXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9jYXIyLmpwZycsdGV4dDonQk1XIDInfSxcclxuICAgICAgICAgICAge2ltYWdlOidodHRwOi8vd3d3LmFuZ3VsYXJ0eXBlc2NyaXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9jYXIzLmpwZycsdGV4dDonQk1XIDMnfSxcclxuICAgICAgICAgICAge2ltYWdlOidodHRwOi8vd3d3LmFuZ3VsYXJ0eXBlc2NyaXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9jYXI0LmpwZycsdGV4dDonQk1XIDQnfSxcclxuICAgICAgICAgICAge2ltYWdlOidodHRwOi8vd3d3LmFuZ3VsYXJ0eXBlc2NyaXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9jYXI1LmpwZycsdGV4dDonQk1XIDUnfSxcclxuICAgICAgICAgICAge2ltYWdlOidodHRwOi8vd3d3LmFuZ3VsYXJ0eXBlc2NyaXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9jYXI2LmpwZycsdGV4dDonQk1XIDYnfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMYXN0U2xpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXMucG9wKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
