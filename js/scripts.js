$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const hand = $("select#hand").val();

    let match = (100 - age) * 3;
    if (hand === "right" && age < 26) {
      match += 50;
    }
    
    if (favoriteFood === "pizza" ) {
      match += 15;
    }
  
    if (favoriteColor === "turquoise" ) {
      match += 15;
    }
  
    
    if (ageJs >= 18) {
      $('#over18').show();
    }

    else {
      $('#under18').show();
    }

  });
});
