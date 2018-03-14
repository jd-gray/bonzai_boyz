(function (){
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  var foodImages = [
    { image: 'food1.jpg', text: 'Dragon Wings' },
    { image: 'food2.jpg', text: 'Pork Belly Bao' },
    { image: 'food3.jpg', text: 'Dragon Wings' },
    { image: 'food4.jpg', text: 'Pork Belly Bao' },
    { image: 'food5.jpg', text: 'Steamed Jiaoza in Soup' },
    { image: 'food6.jpg', text: 'Pan Fried Jiaoza' },
    { image: 'food7.jpg', text: 'Pan Fried Jiaoza' },
    { image: 'food8.jpg', text: 'Pan Fried Jiaoza' }
  ];

  foodImages.forEach(function(foodImage) {
    var food = "";

    food += "<div class='grid-item food-container'>";
    food += "<img src=" + "images/" + foodImage['image'] + " class='food-image'>";
    food += "<div class='food-textbox'>";
    food += "<div class='food-text'>" + foodImage['text'] + "</div>";
    food += "</div>";
    food += "</div>";

    $('.food-gallery').append(food);
  });

  $('.food-gallery').masonry({
    itemSelector: '.grid-item',
    fitWidth: true
  });
})(jQuery);
