$('.js--main-nav').waypoint(function(direction) {
	$('.js--main-nav').addClass('animated bounceInRight');
}, {offset: '50%' });
$('.js--main-nav-logo').waypoint(function(direction) {
	$('.js--main-nav-logo').addClass('animated zoomInLeft');
}, {offset: '50%' });
 

$('.js--hero').waypoint(function(direction) {
	$('.js--hero').addClass('animated fadeInLeft');
}, {offset: '50%' });

$('.js--header-imagens').waypoint(function(direction) {
	$('.js--header-imagens').addClass('animated fadeInUp');
}, {offset: '50%' });