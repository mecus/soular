System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var Direction, Carousel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            (function (Direction) {
                Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
                Direction[Direction["NEXT"] = 1] = "NEXT";
                Direction[Direction["PREV"] = 2] = "PREV";
            })(Direction || (Direction = {}));
            exports_1("Direction", Direction);
            Carousel = (function () {
                function Carousel() {
                    this.slides = [];
                    this.destroyed = false;
                }
                Object.defineProperty(Carousel.prototype, "interval", {
                    get: function () {
                        return this._interval;
                    },
                    set: function (value) {
                        this._interval = value;
                        this.restartTimer();
                    },
                    enumerable: true,
                    configurable: true
                });
                Carousel.prototype.ngOnDestroy = function () {
                    this.destroyed = true;
                };
                Carousel.prototype.select = function (nextSlide, direction) {
                    if (direction === void 0) { direction = Direction.UNKNOWN; }
                    var nextIndex = nextSlide.index;
                    if (direction === Direction.UNKNOWN) {
                        direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
                    }
                    // Prevent this user-triggered transition from occurring if there is already one in progress
                    if (nextSlide && nextSlide !== this.currentSlide) {
                        this.goNext(nextSlide, direction);
                    }
                };
                Carousel.prototype.goNext = function (slide, direction) {
                    if (this.destroyed) {
                        return;
                    }
                    slide.direction = direction;
                    slide.active = true;
                    if (this.currentSlide) {
                        this.currentSlide.direction = direction;
                        this.currentSlide.active = false;
                    }
                    this.currentSlide = slide;
                    // every time you change slides, reset the timer
                    this.restartTimer();
                };
                Carousel.prototype.getSlideByIndex = function (index) {
                    var len = this.slides.length;
                    for (var i = 0; i < len; ++i) {
                        if (this.slides[i].index === index) {
                            return this.slides[i];
                        }
                    }
                };
                Carousel.prototype.getCurrentIndex = function () {
                    return !this.currentSlide ? 0 : this.currentSlide.index;
                };
                Carousel.prototype.next = function () {
                    var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
                    if (newIndex === 0 && this.noWrap) {
                        this.pause();
                        return;
                    }
                    return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
                };
                Carousel.prototype.prev = function () {
                    var newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
                    if (this.noWrap && newIndex === this.slides.length - 1) {
                        this.pause();
                        return;
                    }
                    return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
                };
                Carousel.prototype.restartTimer = function () {
                    var _this = this;
                    this.resetTimer();
                    var interval = +this.interval;
                    if (!isNaN(interval) && interval > 0) {
                        this.currentInterval = setInterval(function () {
                            var nInterval = +_this.interval;
                            if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                                _this.next();
                            }
                            else {
                                _this.pause();
                            }
                        }, interval);
                    }
                };
                Carousel.prototype.resetTimer = function () {
                    if (this.currentInterval) {
                        clearInterval(this.currentInterval);
                        this.currentInterval = null;
                    }
                };
                Carousel.prototype.play = function () {
                    if (!this.isPlaying) {
                        this.isPlaying = true;
                        this.restartTimer();
                    }
                };
                Carousel.prototype.pause = function () {
                    if (!this.noPause) {
                        this.isPlaying = false;
                        this.resetTimer();
                    }
                };
                Carousel.prototype.addSlide = function (slide) {
                    slide.index = this.slides.length;
                    this.slides.push(slide);
                    if (this.slides.length === 1 || slide.active) {
                        this.select(this.slides[this.slides.length - 1]);
                        if (this.slides.length === 1) {
                            this.play();
                        }
                    }
                    else {
                        slide.active = false;
                    }
                };
                Carousel.prototype.removeSlide = function (slide) {
                    this.slides.splice(slide.index, 1);
                    if (this.slides.length === 0) {
                        this.currentSlide = null;
                        return;
                    }
                    for (var i = 0; i < this.slides.length; i++) {
                        this.slides[i].index = i;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Carousel.prototype, "noWrap", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Carousel.prototype, "noPause", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Carousel.prototype, "noTransition", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Carousel.prototype, "interval", null);
                Carousel = __decorate([
                    core_1.Component({
                        selector: 'carousel',
                        directives: [common_1.NgFor],
                        template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\">\n         <li *ngFor=\"#slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n                  <a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n                  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </a>\n                  <a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n                  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                 </a>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Carousel);
                return Carousel;
            }());
            exports_1("Carousel", Carousel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsX2NvbXBvbmVudC9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSxXQUFZLFNBQVM7Z0JBQUUsK0NBQU8sQ0FBQTtnQkFBRSx5Q0FBSSxDQUFBO2dCQUFFLHlDQUFJLENBQUE7WUFBQSxDQUFDLEVBQS9CLFNBQVMsS0FBVCxTQUFTLFFBQXNCOzhDQUFBO1lBb0IzQztnQkFBQTtvQkFjWSxXQUFNLEdBQWdCLEVBQUUsQ0FBQztvQkFHekIsY0FBUyxHQUFXLEtBQUssQ0FBQztnQkF1SXRDLENBQUM7Z0JBbkpZLHNCQUFXLDhCQUFRO3lCQUFuQjt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDMUIsQ0FBQzt5QkFFRCxVQUFvQixLQUFZO3dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixDQUFDOzs7bUJBTEE7Z0JBY00sOEJBQVcsR0FBbEI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRU0seUJBQU0sR0FBYixVQUFjLFNBQWUsRUFBRSxTQUF1QztvQkFBdkMseUJBQXVDLEdBQXZDLFlBQXNCLFNBQVMsQ0FBQyxPQUFPO29CQUNsRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDckYsQ0FBQztvQkFFRCw0RkFBNEY7b0JBQzVGLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUN0QyxDQUFDO2dCQUNMLENBQUM7Z0JBRU8seUJBQU0sR0FBZCxVQUFlLEtBQVcsRUFBRSxTQUFtQjtvQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUM1QixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFFcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNyQyxDQUFDO29CQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUUxQixnREFBZ0Q7b0JBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFTyxrQ0FBZSxHQUF2QixVQUF3QixLQUFZO29CQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQzt3QkFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUVPLGtDQUFlLEdBQXZCO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUM1RCxDQUFDO2dCQUVPLHVCQUFJLEdBQVo7b0JBQ0ksSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBRWpFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDYixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkFFTyx1QkFBSSxHQUFaO29CQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUVwRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2IsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRU8sK0JBQVksR0FBcEI7b0JBQUEsaUJBYUM7b0JBWkcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQzs0QkFDL0IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDOzRCQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQ0FDakYsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNoQixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDakIsQ0FBQzt3QkFDTCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTyw2QkFBVSxHQUFsQjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQ2hDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSx1QkFBSSxHQUFYO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSx3QkFBSyxHQUFaO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSwyQkFBUSxHQUFmLFVBQWdCLEtBQVc7b0JBQ3ZCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2hCLENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLDhCQUFXLEdBQWxCLFVBQW1CLEtBQVc7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRW5DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztnQkFDTCxDQUFDO2dCQXRKRDtvQkFBQyxZQUFLLEVBQUU7O3dEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7eURBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs4REFBQTtnQkFFUjtvQkFBQyxZQUFLLEVBQUU7O3dEQUFBO2dCQXZCWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixVQUFVLEVBQUUsQ0FBQyxjQUFLLENBQUM7d0JBQ25CLFFBQVEsRUFBRSw4d0JBYVg7cUJBQ0YsQ0FBQzs7NEJBQUE7Z0JBeUpGLGVBQUM7WUFBRCxDQXhKQSxBQXdKQyxJQUFBO1lBeEpELCtCQXdKQyxDQUFBIiwiZmlsZSI6ImNhcm91c2VsX2NvbXBvbmVudC9jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7U2xpZGV9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7VU5LTk9XTiwgTkVYVCwgUFJFVn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJvdXNlbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmdGb3JdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKG1vdXNlZW50ZXIpPVwicGF1c2UoKVwiIChtb3VzZWxlYXZlKT1cInBsYXkoKVwiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIj5cclxuICAgICAgPG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiIFtoaWRkZW5dPVwic2xpZGVzLmxlbmd0aCA8PSAxXCI+XHJcbiAgICAgICAgIDxsaSAqbmdGb3I9XCIjc2xpZGV6IG9mIHNsaWRlc1wiIFtjbGFzcy5hY3RpdmVdPVwic2xpZGV6LmFjdGl2ZSA9PT0gdHJ1ZVwiIChjbGljayk9XCJzZWxlY3Qoc2xpZGV6KVwiPjwvbGk+XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsZWZ0IGNhcm91c2VsLWNvbnRyb2xcIiAoY2xpY2spPVwicHJldigpXCIgW2hpZGRlbl09XCIhc2xpZGVzLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicmlnaHQgY2Fyb3VzZWwtY29udHJvbFwiIChjbGljayk9XCJuZXh0KClcIiBbaGlkZGVuXT1cIiFzbGlkZXMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub1dyYXA6Ym9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub1BhdXNlOmJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbm9UcmFuc2l0aW9uOmJvb2xlYW47XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIGdldCBpbnRlcnZhbCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaW50ZXJ2YWwodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2xpZGVzOkFycmF5PFNsaWRlPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW50ZXJ2YWw6YW55O1xyXG4gICAgcHJpdmF0ZSBpc1BsYXlpbmc6Ym9vbGVhbjtcclxuICAgIHByaXZhdGUgZGVzdHJveWVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VycmVudFNsaWRlOlNsaWRlO1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWw6bnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdChuZXh0U2xpZGU6U2xpZGUsIGRpcmVjdGlvbjpEaXJlY3Rpb24gPSBEaXJlY3Rpb24uVU5LTk9XTikge1xyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBuZXh0U2xpZGUuaW5kZXg7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlVOS05PV04pIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV4dEluZGV4ID4gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSA/IERpcmVjdGlvbi5ORVhUIDogRGlyZWN0aW9uLlBSRVY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IHRoaXMgdXNlci10cmlnZ2VyZWQgdHJhbnNpdGlvbiBmcm9tIG9jY3VycmluZyBpZiB0aGVyZSBpcyBhbHJlYWR5IG9uZSBpbiBwcm9ncmVzc1xyXG4gICAgICAgIGlmIChuZXh0U2xpZGUgJiYgbmV4dFNsaWRlICE9PSB0aGlzLmN1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdvTmV4dChuZXh0U2xpZGUsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ29OZXh0KHNsaWRlOlNsaWRlLCBkaXJlY3Rpb246RGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsaWRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICBzbGlkZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gc2xpZGU7XHJcblxyXG4gICAgICAgIC8vIGV2ZXJ5IHRpbWUgeW91IGNoYW5nZSBzbGlkZXMsIHJlc2V0IHRoZSB0aW1lclxyXG4gICAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTbGlkZUJ5SW5kZXgoaW5kZXg6bnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlc1tpXS5pbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNsaWRlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEN1cnJlbnRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY3VycmVudFNsaWRlID8gMCA6IHRoaXMuY3VycmVudFNsaWRlLmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dCgpIHtcclxuICAgICAgICBsZXQgbmV3SW5kZXggPSAodGhpcy5nZXRDdXJyZW50SW5kZXgoKSArIDEpICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobmV3SW5kZXggPT09IDAgJiYgdGhpcy5ub1dyYXApIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGhpcy5nZXRTbGlkZUJ5SW5kZXgobmV3SW5kZXgpLCBEaXJlY3Rpb24uTkVYVCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmV2KCkge1xyXG4gICAgICAgIGxldCBuZXdJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgLSAxIDwgMCA/IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEgOiB0aGlzLmdldEN1cnJlbnRJbmRleCgpIC0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9XcmFwICYmIG5ld0luZGV4ID09PSB0aGlzLnNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuZ2V0U2xpZGVCeUluZGV4KG5ld0luZGV4KSwgRGlyZWN0aW9uLlBSRVYpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xyXG4gICAgICAgIGlmICghaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuSW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZyAmJiAhaXNOYU4odGhpcy5pbnRlcnZhbCkgJiYgbkludGVydmFsID4gMCAmJiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRUaW1lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN1cnJlbnRJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9QYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNsaWRlKHNsaWRlOlNsaWRlKSB7XHJcbiAgICAgICAgc2xpZGUuaW5kZXggPSB0aGlzLnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlkZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVzLmxlbmd0aCA9PT0gMSB8fCBzbGlkZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zbGlkZXNbdGhpcy5zbGlkZXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlU2xpZGUoc2xpZGU6U2xpZGUpIHtcclxuICAgICAgICB0aGlzLnNsaWRlcy5zcGxpY2Uoc2xpZGUuaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zbGlkZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlc1tpXS5pbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
