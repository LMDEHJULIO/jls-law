$(function(){


  $("a").on("click", function(){
    return false;
  });

  $(".about-button").on('click', function(){
    $(".services, .something, .else").hide();
    $(".about").fadeIn();
  })

  $(".services-button").on('click', function(){
    $(".about, .something, .else").hide();
    $(".services").fadeIn(1000);
  })

  $(".something-button").on('click', function(){
    $(".about, .services, .else").hide();
    $(".something").fadeIn();
  })

  $(".else-button").on('click', function(){
    $(".about, .something, .services").hide();
    $(".else").fadeIn();
  })

})
