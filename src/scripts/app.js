// @codekit-prepend "vendors/jquery-2.1.4.min.js";
// @codekit-prepend "vendors/jquery.stellar.min.js";
// @codekit-prepend "vendors/modernizr.js";
// @codekit-prepend "vendors/remodal.min.js";
// @codekit-prepend "vendors/responsiveslides.js";
// @codekit-prepend "vendors/slider.js";
// @codekit-prepend "vendors/wow.min.js";
// @codekit-prepend "vendors/featherlight.min.js";
// @codekit-prepend "vendors/lightgallery.js";

// @codekit-prepend "vendors/lg-thumbnail.js";

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
  //
  // $("#slider4").responsiveSlides({
  //   auto: true,
  //   pager: false,
  //   nav: true,
  //   speed: 500,
  //   namespace: "callbacks",
  //   before: function () {
  //     $('.events').append("<li>before event fired.</li>");
  //   },
  //   after: function () {
  //     $('.events').append("<li>after event fired.</li>");
  //   }
  // });

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

  // add featherlight attribute to all images
  // var dataImg = $("img").data("featherlight");
  // $('img').attr('data-featherlight', dataImg );

  $('.aniimated-thumbnials').lightGallery({
      thumbnail:true
  });

  // --------------------------------------------
  //  sticky nav
  // --------------------------------------------
  $(document).ready(function() {
  var stickyNavTop = $('#mainNav').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
      $('#mainNav').addClass('sticky');
  } else {
      $('#mainNav').removeClass('sticky');
  }
  };
  stickyNav();
    $(window).scroll(function() {
      stickyNav();
    });
  });

});
