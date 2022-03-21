$(function () {
  let li = $("ul li");
  li.eq(0).css("background-color", "red");
  li.eq(1).css("background-color", "green");
  li.eq(2).css("background-color", "blue");
  li.eq(3).css("background-color", "black");
  li.click(function () {
    $("div").css({
      backgroundColor: $(this).css("background-color"),
      color: "#FFF",
      fontWeight: "bold",
    });
  });
});
