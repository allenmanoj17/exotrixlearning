

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        autoPlay:true
    });
});

$(".form__btn").click(function () {
    $(".mail__letter").toggleClass("move");
    $(".mail__top").toggleClass("closed");
    $(".form__btn--invisible").toggleClass("visible");
    $(".form__btn--visible").toggleClass("invisible");
  });
  
  $("input").focus(function () {
    $(this).parent().addClass("active");
    $("input").focusout(function () {
      if ($(this).val() == "") {
        $(this).parent().removeClass("active");
      } else {
        $(this).parent().addClass("active");
      }
    });
  });
  