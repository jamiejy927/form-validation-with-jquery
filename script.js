$(document).ready(function () {

  $("#form").submit(function (e) {
    e.preventDefault();

    const text = $("#input").val().trim();

    if (text.length === 0) {
      $("#error-msg").text("Please enter some content!");
      return;
    }

    if (text.length > 140) {
      $("#error-msg").text("Content exceeds 140 characters!");
      return;
    }

    $("#error-msg").text("");

    $("#container").prepend(`<p>${text}</p>`);

    $("#input").val("");
  });

});