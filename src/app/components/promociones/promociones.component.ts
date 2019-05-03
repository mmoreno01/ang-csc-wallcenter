import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
})
export class PromocionesComponent implements OnInit {

//  owl carousel
    customOptions: any = {
    loop: true,
    center: true,
    margin:10,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        loop:true
      },
    },
    nav: true
  }


// Data post wordpress

  posts = [];

  constructor( private http: HttpClient) {  }

  ngOnInit():void{

    this.http.get('http://www.cscwellnesscenter.com.mx/blog-spa/?rest_route=/wp/v2/posts&_embed&categories=1').subscribe(resultado => {

        for(let clave in resultado){
          if(resultado.hasOwnProperty(clave)){
            this.posts.push(resultado[clave])

          }
        }
    })
  }

}


