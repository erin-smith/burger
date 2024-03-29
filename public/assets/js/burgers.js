// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    event.preventDefault();
    let id = $(this).attr("data-id");
    let newDevour = $(this).attr("data-newdevour");
    console.log("sending id="+ id + " value=" + newDevour);

    let newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function () {
        console.log("changed state to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event)=> {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#bur").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val()
    };

    // if empty string error handling
    if ((newBurger.burger_name === '') || (newBurger.burger_name.length < 2))
    {
      $("label#burErr").show();
      $("#bur").focus();
      return false;
    }
  
    // //if duplicate entry error handling

    // if(newBurger.burger_name === .burger_name)
    // {
    //   $("label#burErr").show();
    //   $("#bur").focus();
    //   return false;
    // }
    

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });
});
