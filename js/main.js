$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$('.food-gallery').masonry({
  // options...
  itemSelector: '.grid-item',
  fitWidth: true
});
