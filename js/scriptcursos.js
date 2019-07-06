$(document).ready(function() {
  console.log("el documento está listo");

// script para el cambio de color al navbar

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nav").css("background" , "rgba(7, 5, 18, 0.5)");

	  }
	  else{
		  $(".nav").css("background" , "rgba(7, 5, 18, 0.5)");
	  }
    if (scroll > 300) {
	   $(".bitlap-a").css("color" , " white");
	  }
	  else{
	     $(".bitlap-a").css("color" , "white");
	  }
    if (scroll > 300) {
     $(".item-a").css("color" , " white");
    }
    else{
       $(".item-a").css("color" , "white");
    }


  });
  // ..............................................................
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".menutogle").css("color" , "#5822F6");
    }

    else{
      $(".menutogle").css("color" , "black");
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

// ...............................................................................................................


$("#software").click(function(){
  $(".card").hide();
  $(".software").show();
});
$("#strategy").click(function(){
  $(".card").hide();
  $(".strategy").show();
});
$("#uxui").click(function(){
  $(".card").hide();
  $(".uxui").show();
});
$("#entrepreneur").click(function(){
  $(".card").hide();
  $(".entrepreneur").show();
});
















});
