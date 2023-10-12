/**
 * @file
 *   Provides popup functionality.
 */

(function ($, Drupal, once) {
  Drupal.behaviors.gridBehavior = {
    attach: function (context, settings) {
      const targetDiv = $('.movie-list .view-content');
      const movieTitle = $('#movie-title h2');
      const movieImage = $('#movie-image img');
      const movieDate = $('#movie-date p');
      const movieDescription = $('#movie-description p');
      const movieLink = $('#movie-link a');

      once('movieGrid', targetDiv, context).forEach(function (element) {
        $(targetDiv).on('click', function (event) {
          let parentDiv = $(event.target).parents('.movie-card-item');
          let id = $(parentDiv).attr('id');
          let description = $(parentDiv).attr('data-desc');
          let date = $(parentDiv).attr('data-date');
          let image = $(parentDiv).find('.movie-card-item__image img').attr('src');
          let title = $(parentDiv).find('.movie-card-item__title a').text();
          let link = $(parentDiv).find('.movie-card-item__overlay__link a').attr('href');
          movieImage.attr('src', image);
          movieImage.attr('alt', title);
          movieTitle.text(title);
          movieDate.text(date);
          movieDescription.text(description);
          movieLink.attr('href', link);
        });
      });
    }
  };
})(jQuery, Drupal, once);
