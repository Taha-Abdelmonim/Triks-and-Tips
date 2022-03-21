$(function () {
  $("#my-tabs li").click(function () {
    let myId = $(this).attr("id");
    $(this).removeClass("inactive").siblings().addClass("inactive");
    $(".my-container div").hide().siblings(`#${myId}-content`).fadeIn(500);
  });
});
