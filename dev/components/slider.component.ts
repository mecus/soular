import { Component, ElementRef, OnInit } from 'angular2/core';

declare var jQuery: any;

@Component ({
    selector: 'sl-Nslider',
    template : `
        <ul class="rslides">
            <li><img src="src/images/1.jpg" alt=""></li>
            <li><img src="src/images/2.jpg" alt=""></li>
            <li><img src="src/images/3.jpg" alt=""></li>
        </ul>
       <button [style.background]="'red'" >click</button>
    
    `,
    styleUrls: ['src/css/slider.css']
})

export class SliderComponent implements OnInit {

    constructor(private _elRef: ElementRef){

    }
    ngOnInit(): any{

        jQuery(function() {
            this._elRef.nativeElement.find(".rslides").responsiveSlides();
            
        });
        jQuery("button").click(function(){
                alert('Yes its working');
            });

    }

}