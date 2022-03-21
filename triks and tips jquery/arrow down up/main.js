$(function () {
  (function animateImage() {
    $(".offer img").animate(
      {
        top: "-160px",
      },
      1000,
      function () {
        $(this).animate(
          {
            top: "-109px",
          },
          1000,
          function () {
            animateImage();
          }
        );
      }
    );
  })();
});
