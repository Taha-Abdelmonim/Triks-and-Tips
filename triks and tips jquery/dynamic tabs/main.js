$(function () {
  //            Dynamic Tabs
  $(".tabs-list li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content-list > div").hide();
    $($(this).data("content")).fadeIn();
  });

  //          Switch Tab
  $(".switch-tabs").on("click", function () {
    $(this).next(".dynamic-tabs").toggleClass("left-tabs");
  });
});
