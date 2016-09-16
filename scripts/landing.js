//get points in selling-points
var pointsArray = document.getElementsByClassName('point');

//function that applies styles to a single point
var revealPoint = function(point) {
  point.style.opacity = 1;
  point.style.transform = "scaleX(1) translateY(0)";
  point.style.WevkitTransform = "scaleX(1) translateY(0)";
};

//Animate every point in selling-points
var animatePoints = function(points) {
  forEach(points, revealPoint);
};

window.onload = function() {
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation
  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  //distances we need to measure to figure out the number of pixels the user must scroll to trigger the animation
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  //print both scroll distance body.scrolltop for personal notes
  console.log(scrollDistance);
  console.log('-------');
  console.log(document.body.scrollTop);


  window.addEventListener('scroll', function(event) {
    //if scroll to top is equal or greater than the distance we need to scroll activateanimate points
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        animatePoints(pointsArray);
    }
  });
}
