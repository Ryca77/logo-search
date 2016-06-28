$(document).ready(function() {

$('.programme-list').on('click', function() {
	$('.programmes').show()
});

$('.programme-list').mouseout(function() {
	$('.programmes').hide()
});

$('.education-list').on('click', function() {
	$('.educations').show()
});

$('.education-list').mouseout(function() {
	$('.educations').hide()
});

});