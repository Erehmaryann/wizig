$(function() {
	$('#btn-toggler').click(function() {
		$('.mobile-navbar').slideToggle();
	});

	$('#feature-btn').click(function() {
		$('.feature-nav').slideToggle();
	});

	$('#integration-btn').click(function() {
		$('.integration-nav').slideToggle();
	});

	$('#solution-btn').click(function() {
		$('.solution-nav').slideToggle();
	});
});
