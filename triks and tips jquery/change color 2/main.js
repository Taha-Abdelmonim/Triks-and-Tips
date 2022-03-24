$(function () {
  $(".switch-colors li").on(" click", function () {
    $(":root").css("--maincolor", $(this).data("color"));
    $("body").css("background-color", "rgb(30 30 30)");
  });
});
