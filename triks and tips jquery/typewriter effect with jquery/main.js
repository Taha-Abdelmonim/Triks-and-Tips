$(function () {
  //        Type Write Effects
  function effectText(selector, speed, spece, color) {
    var theText = $(selector).attr("data-text"),
      theTextLength = theText.length,
      n = 0,
      theTyper = setInterval(function () {
        $(selector).each(function () {
          $(this)
            .html($(this).html() + theText[n])
            .css({
              padding: spece,
              color: color,
            });
        });
        n += 1;
        if (n === theTextLength) {
          clearInterval(theTyper);
        }
      }, speed);
  }
  effectText(".typer", 100, 10, "#00a8ff");
  effectText(".typer-1", 200, 10, "#9c88ff");
  effectText(".typer-2", 300, 10, "#4cd137");
});
