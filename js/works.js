$(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp();

});

$(document).ready(function() {
	$(".fancybox").fancybox();
});


$(document).ready( function() {

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
	
});