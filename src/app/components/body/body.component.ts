import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {


   //  owl carousel
   customOptions: any = {
    items: 1,
    loop: true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
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
        items: 1,
        // loop:true
      },
      992: {
        items:1,
        // loop:true
      },

    },
    nav: true
  }

  
  //  currentImage: any =[];

  imgsGallery: any= [];

  constructor(private _gallery: ServiciosService) {
      //inicializamos con la primera imagen
      // this.currentImage = this.updateRandomImage();
      // console.log(this.currentImage);
  }

  

  ngOnInit() {
    this.imgsGallery = this._gallery.getGallery();
    console.log(this.imgsGallery);
  }




}
