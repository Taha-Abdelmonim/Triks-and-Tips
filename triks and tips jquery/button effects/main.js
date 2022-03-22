$(function () {
  //        Buttons Effects
  $(".buttons-effects button").each(function () {
    $(this).prepend("<span></span>");
  });

  $(".from-left, .border-left").hover(
    function () {
      $(this).find("span").eq(0).animate(
        {
          width: "100%",
        },
        300
      );
    },
    function () {
      $(this).find("span").eq(0).animate(
        {
          width: "0",
        },
        300
      );
    }
  );

  $(".from-top, .border-top").hover(
    function () {
      $(this).find("span").eq(0).animate(
        {
          height: "100%",
        },
        300
      );
    },
    function () {
      $(this).find("span").eq(0).animate(
        {
          height: "0",
        },
        300
      );
    }
  );

  //Bounce Button Effects Function
  //            Bounce
  function bounceElement(selector, times, top, left, speedRL, speedTB) {
    for (let i = 0; i < times; i += 1) {
      $(selector)
        .animate(
          {
            top: "-=" + top,
          },
          speedTB
        )
        .animate(
          {
            left: "+=" + left,
            "border-top-right-radius": "+=100%",
            "border-bottom-right-radius": "+=100%",
          },
          speedRL
        )
        .animate(
          {
            top: "+=" + top,
            "border-top-right-radius": "-=100%",
            "border-bottom-right-radius": "-=100%",
          },
          speedTB
        )
        .animate(
          {
            left: "-=" + left,
            "border-top-left-radius": "+=100%",
            "border-bottom-left-radius": "+=100%",
          },
          speedRL
        )
        .animate({
          "border-radius": "18px",
        });
    }
  }
  //          Run Function
  $(".bounce-one").on("click", function () {
    bounceElement($(this), 2, 30, 640, 2000, 500);
    $(".bounce-tow").delay(1550).click();
  });
  $(".bounce-tow").on("click", function () {
    bounceElement($(this), 2, 30, 640, 2000, 500);
  });
});
