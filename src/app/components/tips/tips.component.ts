import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
})
export class TipsComponent implements OnInit {

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


  posts = [];

  constructor(private http: HttpClient) { }

  ngOnInit():void{

    this.http.get('http://www.cscwellnesscenter.com.mx/blog-spa/?rest_route=/wp/v2/posts&_embed&categories=5').subscribe(resultado => {

        for(let clave in resultado){
          if(resultado.hasOwnProperty(clave)){
            this.posts.push(resultado[clave])

          }
        }
    })
  }

}
