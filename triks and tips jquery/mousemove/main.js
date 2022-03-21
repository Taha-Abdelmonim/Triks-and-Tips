$(function () {
  $("html").mousemove(function (e) {
    $("span").offset({
      left: e.pageX,
      top: e.pageY,
    });
  });
});
