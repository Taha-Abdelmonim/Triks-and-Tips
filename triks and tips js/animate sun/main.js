$(document).ready(function () {
  $("div").animate(
    {
      width: "0px",
      left: window.innerWidth / 2 + "px",
      top: "400px",
      borderRadius: "100%",
      height: "0px", // toggle
    },
    3000,
    function () {
      $("span")
        .fadeIn(1000)
        .css({
          left: window.innerWidth / 2.7 + "px",
        });
    }
  );
  $("div").animate(
    {
      width: "500px",
      left: window.innerWidth / 2 - 250 + "px",
      top: "120px",
      borderRadius: "50%",
      height: "500px",
    },
    3000
  );
});
