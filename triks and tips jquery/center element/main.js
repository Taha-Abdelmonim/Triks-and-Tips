$(function () {
  $.fn.centerel = function () {
    $(this).css({
      position: "absolute",
      left: ($(window).width() - $(this).width()) / 2,
      top: ($(window).height() - $(this).height()) / 2,
      textAlign: "center",
    });
  };
  $(".our-div1").centerel();
  $(".our-div2").centerel();
  $(".our-div3").centerel();
  $(".our-div4").centerel();
  $(".our-div5").centerel();
});
