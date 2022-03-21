$(function () {
  $("button").click(function () {
    $("link[href*='theme']").attr("href", $(this).val());
  });
});