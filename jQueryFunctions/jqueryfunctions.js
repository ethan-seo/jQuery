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

$('#menu button.menubutton').click(function() { 
    $(this).hide();
});

$('#menu button.menubutton2').click(function() { 
    $(this).slideUp();
});

$('h1').click(function() { 
    $('#menu button.menubutton').show();
    $('#menu button.menubutton2').show();
});

$('#home').click(function() { 
    $('#menu button.menubutton').slideDown();
    $('#menu button.menubutton2').slideDown();
});

$('.mainphoto').click(function() { 
    $('.sub_content').slideToggle("slow", function() {
    });
});

$('.sub_content button').click(function() { 
    $(this).siblings("p").toggle("slow", function() {
    });
});

// Want to put your script at the end of the body?
$('p').click(function() { 
    $('p').addClass("red");
    $('#first').fadeOut();
});
$('.blue_back').hover(function() { 
    var num_states = 50;
    if (num_states == 50){
        $('.blue_back').css("background-color", "lightblue"); //Why not lightblue w/o quotes like in CSS?
    }
});
// $('button').click(function() { 
//     // $('#vanish').hide();
    
//     $(this).hide();
// });

// Want to put your script in the head?
// $(document).ready(function() {
    // JS goes in here
// });