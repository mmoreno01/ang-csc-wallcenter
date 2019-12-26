import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elite-health',
  templateUrl: './elite-health.component.html',
  styles: []
})
export class EliteHealthComponent implements OnInit {
  //  owl carousel
  customOptions: any = {
    items: 1,
    loop: true,
    autoplay: true,
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
        items: 1,
        // loop:true
      },
      768: {
        items: 3,
        // loop:true
      },
      992: {
        items: 2,
        // loop:true
      },

    },
    nav: true
  }
  constructor() { }

  ngOnInit() {
  }

}
