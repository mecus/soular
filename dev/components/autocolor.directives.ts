import { Directive, ElementRef, HostListener, Input } from 'angular2/core';

@Directive({
    selector: '[sl-autogrow]'

})

export class AutoColorDirective {
    private _defaultColor = 'red';
    private el: HTMLElement;
   

    constructor(el: ElementRef){this.el = el.nativeElement;}

    @Input('sl-autogrow') highlightColor: string;

    private highlight(color: string){
        this.el.style.color = color;
    }
    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.highlightColor || this._defaultColor);
        this.el.style.cursor = 'pointer';
       
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null);

    }

}