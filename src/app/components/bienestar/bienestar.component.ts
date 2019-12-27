import { Component } from '@angular/core';

@Component({
  selector: 'app-bienestar',
  templateUrl: './bienestar.component.html',
  styles: []
})
export class BienestarComponent {

  textoBienestar:string ="nutricion";

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.cir_b a:first').addClass('active');
       $('.circulos-secciones_bienestar article').hide();
       $('.circulos-secciones_bienestar article:first').show();
       
       $('.cir_b a').click(function(){
          $('ul.cir_b li a').removeClass('active');
           $(this).addClass('active');
           $('.circulos-secciones_bienestar article').hide();
           
           var activeTab = $(this).attr('href');
           $(activeTab).show();
           return false;
       });

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
