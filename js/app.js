$(document).ready(function() {

$('.programme-list').on('click', function() {
	$('.programmes').show()
});

$('.programme-list li').on('click', function() {
	var progSelect = $(this).text()
	console.log(progSelect)
	$('.programme-list').text(progSelect)
	$('.prog1, .prog2, prog3').hide()

	if ($('.programme-list').text() === 'Scholarship') {
		console.log('highlight logo1')
	}
	else if ($('.programme-list').text() === 'Loan') {
		console.log('highlight logo2')
	}
	else if ($('.programme-list').text() === 'Grant') {
		console.log('highlight logo3')
	}
});

$('.education-list').on('click', function() {
	$('.educations').show()
});

$('.education-list li').on('click', function() {
	var eduSelect = $(this).text()
	console.log(eduSelect)
	$('.education-list').text(eduSelect)
	$('.edu1, .edu2, edu3').hide()

	if ($('.education-list').text() === 'Further') {
		console.log('highlight logo4')
	}
	else if ($('.education-list').text() === 'Secondary') {
		console.log('highlight logo5')
	}
	else if ($('.education-list').text() === 'Primary') {
		console.log('highlight logo6')
	}
});

});