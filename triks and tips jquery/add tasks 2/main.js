$(function () {
  //         ToDo List
  let newTask = $(".task-input");
  $(".add-task").on("submit", function (e) {
    e.preventDefault();
    if (newTask.val() != "") {
      $(`<li>${newTask.val()}</li>`).appendTo(".tasks");
      newTask.val("");
    }
  });
  $(".tasks").on("click", "li", function () {
    $(this)
      .css("text-decoration", "line-through")
      .delay(2000)
      .fadeOut(400, function () {
        $(this).remove();
      });
  });
});
