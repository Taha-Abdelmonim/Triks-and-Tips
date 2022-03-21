$(function () {
  //            fixed menu
  $(".fixed-menu .fa-cog").on("click", function () {
    $(this).parent(".fixed-menu").toggleClass("is-visible");
    if ($(this).parent(".fixed-menu").hasClass("is-visible")) {
      $(this).parent(".fixed-menu").animate(
        {
          left: 0,
        },
        500
      );
      $("body").animate(
        {
          paddingLeft: `${$(this).parent(".fixed-menu").innerWidth()}px`,
        },
        500
      );
    } else {
      $(this)
        .parent(".fixed-menu")
        .animate(
          {
            left: `-${$(this).parent(".fixed-menu").innerWidth()}px`,
          },
          500
        );
      $("body").animate(
        {
          paddingLeft: 0,
        },
        500
      );
    }
  });
  $(".change-colors li").on("click", function () {
    $("body").attr("data-default-color", $(this).data("color"));
    $(".block:first h2").addClass("skin-background");
  });
});
