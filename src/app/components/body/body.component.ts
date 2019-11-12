import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {

  imgsGallery = [];

  constructor(private _gallery: ServiciosService) { }

  ngOnInit() {
    this.imgsGallery = this._gallery.getGallery();
    // console.log(this.imgsGallery);
  }

}
