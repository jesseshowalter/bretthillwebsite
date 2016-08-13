$(document).ready(function(){

  // Initiate the stellar js plugin
  $.stellar();

  // --------------------------------------------
  // New scroll position for fixed navigation top
  // --------------------------------------------
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {
          $('nav#navigation').addClass('visable');
      }else if($(this).scrollTop() <= 100){
        $('nav#navigation').removeClass('visable');
      }
  });

  // --------------------------------------------
  // Animated scroll to anchors
  // --------------------------------------------
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // --------------------------------------------
  // homepage slider
  // --------------------------------------------
  $(function(){
    $('#slider').rbtSlider({
      height: '100vh',
      'dots': true,
      'arrows': true,
      'auto': 8
    });
  });

  // --------------------------------------------
  // wow animations
  // --------------------------------------------
  wow = new WOW(
  {
      boxClass:     'wow',      // default
      animateClass: 'animated', // change this if you are not using animate.css
      offset:       0,          // default
      mobile:       true,       // keep it on mobile
      live:         true        // track if element updates
    }
  )
  wow.init();

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });


  // --------------------------------------------
  // mobile nav
  // --------------------------------------------
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });


});
