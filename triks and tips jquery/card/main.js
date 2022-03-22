$(function () {
  //          Shuffling Cards
  let zIndexValue = 0;
  $(".cards .card").on("click", function () {
    $(this)
      .animate(
        {
          left: "20%",
          marginTop: 50,
        },
        400,
        function () {
          zIndexValue--;
          $(this).css("z-index", zIndexValue);
        }
      )
      .animate({
        left: $(this).css("left"),
        marginTop: 0,
      });
  });
  let count = 8;
  let clicked = setInterval(() => {
    if (count == 0) {
      count = 8;
    }
    count--;
    $(".cards .card").eq(count).click();
  }, 300);
});
