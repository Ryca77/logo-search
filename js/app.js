$(document).ready(function() {

//open and close programme dropdown//
$('.programme-list').on('click', function() {
	if($('.programmes').is(':hidden')) {
		$('.programmes').show();
	}
	else if($('.programmes').is(':visible')) {
		$('.programmes').hide();
		$('.programme-list').text('Programme Type');
	}
});

//select from programme dropdown//
$('.programmes li').on('click', function() {
	var progSelect = $(this).text();
	console.log(progSelect);
	$('.programme-list').text(progSelect);
	$('.programmes').hide();
});

//make logos active based on selections//
$('.search').on('click', function() {
	if ($('.programme-list').text() === 'Scholarship') {
		$('.prog-scholarship').addClass('active');
		$('.prog-loan').removeClass('active');
		$('.prog-grant').removeClass('active');
	}
	else if ($('.programme-list').text() === 'Loan') {
		$('.prog-loan').addClass('active');
		$('.prog-scholarship').removeClass('active');
		$('.prog-grant').removeClass('active');
	}
	else if ($('.programme-list').text() === 'Grant') {
		$('.prog-grant').addClass('active');
		$('.prog-scholarship').removeClass('active');
		$('.prog-loan').removeClass('active');
	}
	else if ($('.programme-list').text() === 'Programme Type') {
		$('.prog-scholarship, .prog-loan, .prog-grant').removeClass('active');
	}
});

//open and close education dropdown//
$('.education-list').on('click', function() {
	if($('.educations').is(':hidden')) {
		$('.educations').show();
	}
	else if($('.educations').is(':visible')) {
		$('.educations').hide();
		$('.education-list').text('Education Type');
	}
});

//select from education dropdown//
$('.educations li').on('click', function() {
	var eduSelect = $(this).text();
	console.log(eduSelect);
	$('.education-list').text(eduSelect);
	$('.educations').hide();
});

//make logos active based on selections//
$('.search').on('click', function() {
	if ($('.education-list').text() === 'Further') {
		$('.edu-further').addClass('active');
		$('.edu-secondary').removeClass('active');
	}
	else if ($('.education-list').text() === 'Secondary') {
		$('.edu-secondary').addClass('active');
		$('.edu-further').removeClass('active');
		$('.edu-primary').removeClass('active');
	}
	else if ($('.education-list').text() === 'Primary') {
		$('.edu-primary').addClass('active');
		$('.edu-further').removeClass('active');
		$('.edu-secondary').removeClass('active');
	}
	else if ($('.education-list').text() === 'Education Type') {
		$('.edu-further, .edu-secondary, .edu-primary').removeClass('active');
	}
});

});