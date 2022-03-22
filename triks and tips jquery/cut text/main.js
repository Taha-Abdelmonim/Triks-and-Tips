$(function () {
  let allText = $(".trimmed-texts .p-one").text();
  let textcut = $(".trimmed-texts .p-one").text().substr(0, 200);

  function trimText(selector, maxLength) {
    //      Trimmed Text
    $(selector).each(function () {
      if ($(this).text().length > maxLength) {
        let trimmedText = $(this).text().substr(0, 200);
        $(this).text(trimmedText);
        $(this).append("<span title='Show All'>...</span>");
      }
    });
  }
  trimText(".trimmed-texts .p-one", 100);

  $(".trimmed-texts").on("click", ".p-one span[title='Show All']", function () {
    $(".trimmed-texts .p-one").text(allText);
    $(".trimmed-texts .p-one").append("<span title='Cut Text'><<<</span>");
  });
  $(".trimmed-texts").on("click", ".p-one span[title='Cut Text']", function () {
    $(".trimmed-texts .p-one").text(textcut);
    $(".trimmed-texts .p-one").append("<span title='Show All'>...</span>");
  });
});
