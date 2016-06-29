$(document).ready(function() {

$('.programme-list').on('click', function() {
	$('.programmes').show()
});

$('.programmes li').on('click', function() {
	var progSelect = $(this).text()
	console.log(progSelect)
	$('.programme-list').text(progSelect)
	$('.programmes').hide()
});

$('.search').on('click', function() {
	if ($('.programme-list').text() === 'Scholarship') {
		console.log('highlight logo1')
		$('.logo1, .logo2, .logo7, .logo8').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
		$('.logo5, .logo6, .logo11, .logo12').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
		$('.logo3, .logo4, .logo9, .logo10').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
	}
	else if ($('.programme-list').text() === 'Loan') {
		console.log('highlight logo2')
		$('.logo5, .logo6, .logo11, .logo12').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
		$('.logo1, .logo2, .logo7, .logo8').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
		$('.logo3, .logo4, .logo9, .logo10').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
	}
	else if ($('.programme-list').text() === 'Grant') {
		console.log('highlight logo3')
		$('.logo3, .logo4, .logo9, .logo10').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
		$('.logo1, .logo2, .logo7, .logo8').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
		$('.logo5, .logo6, .logo11, .logo12').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
	}
});

$('.education-list').on('click', function() {
	$('.educations').show()
});

$('.educations li').on('click', function() {
	var eduSelect = $(this).text()
	console.log(eduSelect)
	$('.education-list').text(eduSelect)
	$('.educations').hide()
});

$('.search').on('click', function() {
	if ($('.education-list').text() === 'Further') {
		console.log('highlight logo4')
		$('.logo5, .logo6, .logo11, .logo12').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
		$('.logo3, .logo4, .logo9, .logo10').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
	}
	else if ($('.education-list').text() === 'Secondary') {
		console.log('highlight logo5')
		$('.logo3, .logo4').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
		$('.logo5, .logo6, .logo11, .logo12').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
		$('.logo9, .logo10').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
	}
	else if ($('.education-list').text() === 'Primary') {
		console.log('highlight logo6')
		$('.logo9, .logo10').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
		$('.logo5, .logo6, .logo11, .logo12').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
		$('.logo3, .logo4').css({"webkit-filter" : "grayscale(100%) opacity(0.3)"})
	}
});

/*
$('.search').on('click', function() {
	$('.logos li').css({"webkit-filter" : "grayscale(0%) opacity(1)"})
});*/

});