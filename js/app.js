$(document).ready(function() {

$('.programme-list').on('click', function() {
	$('.programmes').show()
});

$('.prog1, .prog2, prog3').on('click', function() {
	$('.programme-list').text("prog")
	$('.prog1, .prog2, prog3').hide()
});

$('.education-list').on('click', function() {
	$('.educations').show()
});

$('.edu1, .edu2, edu3').on('click', function() {
	$('.education-list').text("edu")
	$('.edu1, .edu2, edu3').hide()
});

});