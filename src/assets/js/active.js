 $(document).ready(function(){

    $("#servicios ul li:first").addClass('btn-succes');

    $("#servicios ul li").click(function(){
      $("#servicios ul li").removeClass('btn-succes');
        $(this).addClass('btn-succes');
});
 });
