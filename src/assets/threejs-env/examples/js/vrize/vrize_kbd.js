var xSpeed = 5.1;
var ySpeed = 5.1;
var zSpeed = 5.1;

var deltaTheta = 5.0 * Math.PI / 180.0;
// log(`now in vrize_kbd`);

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  switch( event.key) {
    // move
    case 'w':
      dolly.position.z -= zSpeed;
    break;
    case 's':
      dolly.position.z += zSpeed;
    break;
    case 'a':
      dolly.position.x -= xSpeed;
    break;
    case 'd':
      dolly.position.x += xSpeed;
    break;
    // up and down
    case 'p':
      dolly.position.y += ySpeed;
    break;
    case 'x':
      dolly.position.y += ySpeed;
    break;
    case 'n':
      dolly.position.y -= ySpeed;
    break;
    case 'z':
      dolly.position.y -= ySpeed;
    break;
    // rotate
    case 'q':
      dolly.rotation.y += deltaTheta;
    break;
    case 'e':
      dolly.rotation.y -= deltaTheta;
    break;
    // history
    case 'b':
      // go back to prior scene
      window.history.back();
    break;
  }
  event.preventDefault();
  event.stopPropagation();
  return false;
};
