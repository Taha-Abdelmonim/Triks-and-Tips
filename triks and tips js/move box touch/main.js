var dom = {
  container: document.getElementById("container"),
  drag: document.getElementById("drag"),
};
var container = {
  x: dom.container.getBoundingClientRect().left,
  y: dom.container.getBoundingClientRect().top,
  w: dom.container.getBoundingClientRect().width,
  h: dom.container.getBoundingClientRect().height,
};

var drag = {
  w: dom.drag.offsetWidth,
  h: dom.drag.offsetHeight,
};

target = null;
document.body.addEventListener("touchstart", handleTouchStart, false);
document.body.addEventListener("touchmove", handleTouchMove, false);
document.body.addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(e) {
  if (e.touches.length == 1) {
    var touch = e.touches[0];
    target = touch.target;
  }
}
function handleTouchMove(e) {
  if (e.touches.length == 1) {
    if (target === dom.drag) {
      moveDrag(e);
    }
  }
}
function handleTouchEnd(e) {
  if (e.touches.length == 0) {
    // User just took last finger off screen
    target = null;
  }
}

function moveDrag(e) {
  var touch = e.touches[0];
  //here is where the movement position is determained
  var posX = touch.pageX - container.x - drag.w / 2;
  //
  dom.drag.style.left = posX + "px";
}
