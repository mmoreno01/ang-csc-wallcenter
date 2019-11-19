import { Component } from '@angular/core';

@Component({
  selector: 'app-bienestar',
  templateUrl: './bienestar.component.html',
  styles: []
})
export class BienestarComponent {

  textoBienestar:string ="nutricion";

  constructor() { }


  //  owl carousel
  customOptions: any = {
    items: 1,
    // loop: true,
    // autoplay: true,
    margin:10,
    // center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        // loop:true
      },
      546: {
        items: 2,
        // loop:true
      },
      768: {
        items: 2,
        // loop:true
      },
      992: {
        items: 2,
        // loop:true
      },

    },
    nav: true
  }

}
