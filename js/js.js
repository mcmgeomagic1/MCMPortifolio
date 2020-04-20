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

$('.js--middle').waypoint(function(direction) {
	$('.js--middle').addClass('animated fadeIn');
}, {offset: '50%' });

/* Scroll on buttons */
$('.js--scroll-middle-container').click(function() {
	$('html,body').animate({scrollTop: $('.js--middle-container').offset().top}, 1000)
 });
$('.js--scroll-to-portfolio').click(function() {
	$('html,body').animate({scrollTop: $('.js--portfolio').offset().top},1000)
});
/* Smooth Navegation */
    
      $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
   });