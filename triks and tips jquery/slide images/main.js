$(function () {
  //      slide images
  let numOfThumbnails = $(".thumbnails").children().length,
    marginBetweenThumbnails = ".5";
  (totalMarginBetweenThumbnails = (numOfThumbnails - 1) * marginBetweenThumbnails),
    (thumbnailWidth = (100 - totalMarginBetweenThumbnails) / numOfThumbnails);

  $(".thumbnails img").css({
    width: `${thumbnailWidth}%`,
    "margin-right": `${marginBetweenThumbnails}%`,
  });

  $(".thumbnails img:last").css({ "margin-right": 0 });

  $(".thumbnails img").on("click", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".master-img img").hide().attr("src", $(this).attr("src")).fadeIn(500);
  });

  $(".master-img .fa-chevron-right").on("click", function () {
    if ($(".thumbnails .selected").is(":last-child")) {
      $(".thumbnails img").eq(0).click();
    } else {
      $(".thumbnails .selected").next().click();
    }
  });

  $(".master-img .fa-chevron-left").on("click", function () {
    if ($(".thumbnails .selected").is(":first-child")) {
      $(".thumbnails img:last").click();
    } else {
      $(".thumbnails .selected").prev().click();
    }
  });
});
