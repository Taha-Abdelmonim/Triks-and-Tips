$(function () {
  //        Auto Change Notes
  (function autoChange() {
    $(".ticker-list .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoChange();
          });
      } else {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".ticker-list li").eq(0).addClass("active").fadeIn();
            autoChange();
          });
      }
    });
  })();
});
