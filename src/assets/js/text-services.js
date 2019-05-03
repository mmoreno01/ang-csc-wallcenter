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

// centro de belleza
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

   $('ul.cir_be li a:first').addClass('active-spa');
    $('.circulos-secciones_belleza article').hide();
    $('.circulos-secciones_belleza article:first').show();

    $('ul.cir_be li a').click(function(){
       $('ul.cir_be li a').removeClass('active-spa');
        $(this).addClass('active-spa');
        $('.circulos-secciones_belleza article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });

   });

   $('.variety-selector > a , .spa-gallery-selectors > a').on('click',function(){
       $(this).addClass("active").siblings().removeClass('active');
   });
