// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#devour-button").on("click", function (event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function (data) {
      console.log(data);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#burger-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#burger-input").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function (data) {
      console.log("created new burger", data);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
