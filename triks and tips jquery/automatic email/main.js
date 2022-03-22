$(document).ready(function () {
  var mailsArray = ["gmail.com", "yahoo.com", "hotmail.com", "mailu.ru"],
    forSum = "";

  $(".suggest-box .suggest-input").on("keyup", function () {
    var suggInputVal = $(this).val();
    if ($(this).val().includes("@")) {
      suggInputVal = $(this).val().slice(0, $(this).val().indexOf("@"));
    }
    forSum = "";

    if (!$(this).next().is(".suggest-list")) {
      $('<ul class="suggest-list"></ul>').insertAfter(this);
    }

    if ($(this).val() === "") {
      $(".suggest-list").fadeOut(500, function () {
        $(this).remove();
      });
    }
    for (var i = 0; i < mailsArray.length; i++) {
      forSum += "<li>" + suggInputVal + "@" + mailsArray[i] + "</li>";
    }

    $(".suggest-list").html(forSum);
  });

  $(".suggest-box").on("click", ".suggest-list li", function () {
    $(".suggest-box .suggest-input").val($(this).text());
    $(this)
      .parent(".suggest-list")
      .fadeOut(500, function () {
        $(this).remove();
      });
  });
});
