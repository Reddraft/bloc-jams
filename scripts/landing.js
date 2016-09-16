//get points in selling-points
var pointsArray = document.getElementsByClassName('point');

//Animate every point in selling-points
var animatePoints = function(points) {
  //function that applies styles to a single point
  var revealPoint = function(index) {
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)";
    points[index].style.WevkitTransform = "scaleX(1) translateY(0)";
  };
  //loop through pointsArray and apply the styling
  for(var i = 0; i < pointsArray.length; i++) {
    revealPoint(i);
  }

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
