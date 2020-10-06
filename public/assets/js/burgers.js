// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    const name = $(this).prop("name").value;
    const newBurger = {burgerName:name,devoured:0}
    $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new cat");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    
  })
  $(".change-burger").on("click", function(event){
    console.log($(this).data("id"));
    console.log($(this).data("burgername"));

    const id = $(this).data("id");
    const burgName = $(this).data("burgername");

    const newBurger = {devoured:1}
    $.ajax(`/api/burger/${id}`, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

    

  })
  
})
    

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
