$(function () {
  //              padding top
  $("body").css("paddingTop", $(".navbar").innerHeight());
  //              Scroll Top
  $(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(`#${$(this).data("scroll")}`).offset().top - $(".navbar").innerHeight() + 50,
      },
      1000
    );
  });
  //  change color class active
  $(".navbar li a").click(function () {
    $(".navbar li a").removeClass("active");
    $(this).addClass("active");
    // $(this).addClass("active").parent().siblings().find("a").removeClass();
  });

  $(window).scroll(function () {
    //  add class active in scroll
    $(".block").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 50) {
        let blockID = $(this).attr("id");
        if ($('.navbar li a[data-scroll="' + blockID + '"]').hasClass("active")) {
        }
        $(".navbar li a").removeClass("active");
        $(`.navbar li a[data-scroll=${blockID}]`).addClass("active");
      }
    });
    //              Scroll To TopButton
    let scrollToTop = $(".scroll-to-top");
    if ($(window).scrollTop() >= 1000) {
      if (scrollToTop.is(":hidden")) {
        scrollToTop.fadeIn(1000);
      }
    } else {
      scrollToTop.fadeOut(1000);
    }
  });

  $(".scroll-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
