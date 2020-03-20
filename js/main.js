$(document).ready(function () {

  // sticky header
  // $(window).scroll(function (e) {
  //   var height = $(this).scrollTop();
  //   if (height > 150) {
  //     $('.header').addClass("header--sticky");
  //   } else {
  //     $('.header').removeClass("header--sticky");
  //   }
  // });

  // scroll Top
  var scrollTop = $(".back-to-top");

  $(window).scroll(function () {

    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
      $(scrollTop).css("visibility", "visible");

    } else {
      $(scrollTop).css("opacity", "0");
      $(scrollTop).css("visibility", "hidden");
    }
  });

  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});