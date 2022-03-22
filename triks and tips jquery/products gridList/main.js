$(function () {
  //          Product
  $(".items .item i").on("click", function () {
    $(this).toggleClass("fa-plus fa-minus").next("p").slideToggle();
  });

  //          List/Grid
  $(".view-options i").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".items").removeClass("list-view grid-view").addClass($(this).data("class"));
  });
});
