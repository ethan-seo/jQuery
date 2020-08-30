$('img').click(function() {
    $(this).hide();
    var swapimg = document.getElementById($(this).attr('data-alt-src'));
    $(swapimg).show();
    console.log("Swapping image", swapimg);
});