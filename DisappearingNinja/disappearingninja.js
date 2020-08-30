// Getters VS Setters
//var firstElem = document.getElementById("first"); // getter = retrieval of
//firstElem.innerHTML = "Did you see what I started as?" // setter = changing value of

// Cool stuff to look at!
console.log(document.body);
console.log($);
console.log($());

// SYNTAX OF JQUERY/GENERAL FORMULA
//  VVV think in CSS selectors VVV
// $('whatever_you_want_to_select').user_event(function() {
//     extra JS code
//     $('whatever_you_want_to_change').action() [might need things in parentheses]
//     extra JS code
// })

// DOCUMENTATION
// api.jquery.com

$('img').click(function() { 
    $(this).hide();
});



$('button').click(function() { 
    $('img').show();
});