// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".change-tried").on("click", function(event) {
    var id = $(this).data("id");

    var newTried = $(this).data("newtried");
    console.log(newTried)
    console.log(id)

    var newTriedState = {
      tried: newTried,
    };

      // Send the PUT request.
      $.ajax("/api/recipes/" + id, {
        type: "PUT",
        data: newTriedState
      }).then(
        function() {
          console.log("changed tried to", newTried);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newRecipe;

    if ($("#recipeType").val().trim() === 'breakfast') {
      newRecipe = {
        name: $("#recipeName").val().trim(),
        url: $("#recipeURL").val().trim(),
        breakfast: 1,
        mains: 0,
        dessert: 0,
        other: 0,
        score: 0
      };
    }

    else if ($("#recipeType").val().trim() === 'mains') {
      newRecipe = {
        name: $("#recipeName").val().trim(),
        url: $("#recipeURL").val().trim(),
        breakfast: 0,
        mains: 1,
        dessert: 0,
        other: 0,
        score: 0
      };
    }

    else if ($("#recipeType").val().trim() === 'dessert') {
      newRecipe = {
        name: $("#recipeName").val().trim(),
        url: $("#recipeURL").val().trim(),
        breakfast: 0,
        mains: 0,
        dessert: 1,
        other: 0, 
        score: 0
      };
    }

    else if ($("#recipeType").val().trim() === 'other') {
      newRecipe = {
        name: $("#recipeName").val().trim(),
        url: $("#recipeURL").val().trim(),
        breakfast: 0,
        mains: 0,
        dessert: 0,
        other: 1, 
        score: 0
      };
    }

    else {
      alert("You did not enter a valid recipe option")
    }

    // Send the POST request.
    $.ajax("/api/recipes", {
      type: "POST",
      data: newRecipe
    }).then(
      function() {
        console.log("created new recipe");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-recipe").on("click", function(event) {
    var id = $(this).data("id");

    console.log(id)

    // Send the DELETE request.
    $.ajax("/api/recipes/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted recipe", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".submit-score").on("click", function(event) {
    var id = $(this).data("id");

    var newScored = $(this).data("newscored");
    var newScore = $('#recipeScore').val().trim()

    console.log(newScored)

    var newScoredState = {
      scored: newScored,
      score: newScore
    };

      // Send the PUT request.
      $.ajax("/api/recipes/" + id, {
        type: "PUT",
        data: newScoredState
      }).then(
        function() {
          console.log("changed scored to", newScored);
          // Reload the page to get the updated list
          location.reload();
        }
      );


  })
});
