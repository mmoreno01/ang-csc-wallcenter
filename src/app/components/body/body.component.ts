import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {
   
  
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
