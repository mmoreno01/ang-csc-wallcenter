import { Component } from '@angular/core';
// import { AreasService } from '../../services/areas.service';
import { Hero, heroes } from '../../hero';
import * as $ from 'jquery';



@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styles: []
})
export class SpaComponent   {

  alerta:string ="faciales";

  heroes  = heroes;
  hero = this.heroes[0];
  // data:any[] = [];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }

  
ngOnInit(){
  $(document).ready(function(){
  
    $('.cir_spa a:first').addClass('active');
      $('.circulos-secciones article').hide();
      $('.circulos-secciones article:first').show();
  
      $('.cir_spa a').click(function(){
         $('.cir_spa a').removeClass('active');
          $(this).addClass('active');
          $('.circulos-secciones article').hide();
  
          var activeTab = $(this).attr('href');
          $(activeTab).show();
          return false;
      });
  
  
    $('.variety-selector > a , .spa-gallery-selectors > a').on('click',function(){
      $(this).addClass("active").siblings().removeClass('active');
  });
  
      });
  
  
}

  //  owl carousel
  customOptions: any = {
    items: 1,
    loop: true,
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
