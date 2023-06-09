(function ($) {
  "user strict";

  $(document).ready(function () {
    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // nice select
    $('select:not(.ignore)').niceSelect();

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // scrollTop
    var fixed_top = $("#header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // navbar-click
    $(".navbar li a").on("click", function () {
      var element = $(this).parent("li");
      if (element.hasClass("show")) {
        element.removeClass("show");
        element.find("li").removeClass("show");
      }
      else {
        element.addClass("show");
        element.siblings("li").removeClass("show");
        element.siblings("li").find("li").removeClass("show");
      }
    });

    // Countdown
    $('[data-countdown]').each(function () {
      var $this = $(this),
        finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<H6> %D </H6> <H6> %H </H6> <H6> %M </H6> <H6> %S </H6>'));
      });
    });

    // testimonials-carousel
   

    // testimonials-slider
   

    // Shop Details Slide
    if (document.querySelector('.all-slider') !== null) {
      $('.all-slider').owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        margin: 10,
        navigation: false,
        autoplay: false,
        items: 4,
        autoplayTimeout: 1000,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 4
          },
          768: {
            items: 4
          }
        }
      });
    }

    // Input Increase
    var minVal = 1, maxVal = 20;
    $(".increaseQty").on('click', function () {
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function () {
        $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
        value++;
      }
      $parentElm.find(".qtyValue").val(value);
    });
    $(".decreaseQty").on('click', function () {
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function () {
        $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
        value--;
      }
      $parentElm.find(".qtyValue").val(value);
    });


    /* Magnific Popup */
    if (document.querySelector('.popupvideo') !== null) {
      $('.popupvideo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    // wow Animation
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
      }
    );
    wow.init();

  });

})(jQuery);