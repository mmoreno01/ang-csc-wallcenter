$(document).ready(function(){

  // $('.cir_spa a:first').addClass('active');
  //  $('.circulos-secciones article').hide();
  //  $('.circulos-secciones article:first').show();

  //  $('.cir_spa a').click(function(){
  //     $('.cir_spa a').removeClass('active');
  //      $(this).addClass('active');
  //      $('.circulos-secciones article').hide();

  //      var activeTab = $(this).attr('href');
  //      $(activeTab).show();
  //      return false;
  //  });

  //  });

   $('.variety-selector > a , .spa-gallery-selectors > a').on('click',function(){
       $(this).addClass("active").siblings().removeClass('active');
   });
