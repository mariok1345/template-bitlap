$(document).ready(function() {
  console.log("el documento está listo");

// script para el cambio de color al navbar

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 500) {
	    $(".nav").css("background" , "rgba(7, 5, 18, 0.5)");

	  }

	  else{
		  $(".nav").css("background" , "transparent");
	  }
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".menutogle").css("color" , "#5822F6");
    }

    else{
      $(".menutogle").css("color" , "white");
    }
  });




   $('.open').css({
       top:'-120vw'
   });

   $('.menutogle').on('click',function(){
     $('.open').show();
     $('.open').animate({
       top:'0vw'
     });
   });

$('.closemnu').on('click',function(){
    $('.open').animate({
      top:'-120vw'
    });
})
































});
