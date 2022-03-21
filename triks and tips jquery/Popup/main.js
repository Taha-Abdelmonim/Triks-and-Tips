$(function () {
  //          popup
  $(".show-popup").click(function () {
    $(`.${$(this).data("popup")}`).fadeIn();
  });

  $(".popup").click(function () {
    $(this).fadeOut();
  });

  $(".popup .inner").click(function (e) {
    e.stopPropagation();
  });

  $(".popup .close").click(function (e) {
    e.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".popup").fadeOut();
    }
  });

  //        Error Message
  $(".error-message").each(function () {
    $(this).animate(
      {
        right: 0,
      },
      1000,
      function () {
        $(this).delay(2000).animate(
          {
            right: -600,
          },
          1000
        );
      }
    );
  });
});
