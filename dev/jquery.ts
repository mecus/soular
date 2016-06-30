import { Component, ElementRef, OnInit  } from 'angular2/core';

declare var jQuery: any;

@Component({
    selector: 'sl-jquery',
    template : `
        <button></button>
    ` 
})
export class JqueryComponent implements OnInit {

    constructor(private _elRef: ElementRef ){

    }

    ngOnInit(){
        jQuery('.footer').css({"background-color": "red", "height": "100px" });

        jQuery(window).scroll(function(){
            if (jQuery(".top-bar").offset().top > 50){
                jQuery(".navbar").addClass(".navbar-fixed");
            }else
            jQuery(".navbar").removeClass(".navbar-fixed");
        });

    }

}