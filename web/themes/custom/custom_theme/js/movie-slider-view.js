/**
 * @file
 *   Provides slider funtionality.
 */

(function ($, Drupal, once) {
  Drupal.behaviors.sliderMovieBehavior = {
    attach: function (context, settings) {
      const sliderDiv = $('.slider-movie .view-content');
      once('sliderMovie', sliderDiv, context).forEach(function (element) {
        $(sliderDiv).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
          draggable: false,
          prevArrow: '<div class="arrow-left"><i class="bi bi-chevron-left"></i></div>',
          nextArrow: '<div class="arrow-right"><i class="bi bi-chevron-right"></i></div>',
          dots: true
        });
      });
    }
  };
})(jQuery, Drupal, once);
