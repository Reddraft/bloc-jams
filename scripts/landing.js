
//Animate every point in selling-points
var animatePoints = function() {
  //function that applies styles to a single point
  var revealPoint = function() {
    $(this).css({
      opacity: 1,
      transform: 'scaleX(1) translateY(0)'
    });
  };
  //loop through pointsArray and apply the styling
  $.each($('.point'), revealPoint);
  // $('.point').each(revealPoint);

};

$(window).load(function() {
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation
  if ($(window).height() > 950) {
      animatePoints();
  }
  //distances we need to measure to figure out the number of pixels the user must scroll to trigger the animation
  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

  //print both scroll distance body.scrolltop for personal notes
  console.log(scrollDistance);
  console.log('-------');
  console.log(document.body.scrollTop);


  $(window).scroll(function(event) {
      //if scroll to top is equal or greater than the distance we need to scroll activate animate points
      if ($(window).scrollTop() >= scrollDistance) {
          animatePoints();
      }
  });
});
