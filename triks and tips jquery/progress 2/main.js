$(function () {
  //            Animated Progress
  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).data("progress"),
      },
      2000,
      function () {
        $(this).text($(this).data("progress"));
      }
    );
  });
});
