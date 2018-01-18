var xSpeed = 5.1;
var ySpeed = 5.1;
var zSpeed = 5.1;

var deltaTheta = 5.0 * Math.PI / 180.0;
// log(`now in vrize_kbd`);

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  switch( event.keyCode) {
    // move
    case 'W'.charCodeAt(0):
      dolly.position.z -= zSpeed;
    break;
    case 'S'.charCodeAt(0):
      dolly.position.z += zSpeed;
    break;
    case 'A'.charCodeAt(0):
      dolly.position.x -= xSpeed;
    break;
    case 'D'.charCodeAt(0):
      dolly.position.x += xSpeed;
    break;
    // up and down
    case 'P'.charCodeAt(0):
      dolly.position.y += ySpeed;
    break;
    case 'X'.charCodeAt(0):
      dolly.position.y += ySpeed;
    break;
    case 'N'.charCodeAt(0):
      dolly.position.y -= ySpeed;
    break;
    case 'Z'.charCodeAt(0):
      dolly.position.y -= ySpeed;
    break;
    // rotate
    case 'Q'.charCodeAt(0):
      dolly.rotation.y += deltaTheta;
    break;
    case 'E'.charCodeAt(0):
      dolly.rotation.y -= deltaTheta;
    break;
    // history
    case 'B'.charCodeAt(0):
      // go back to prior scene
      window.history.back();
    break;
  }
    // console.log(`vrize_kbd.onDocumentKeyDown: event=${event}`);
    // var keyCode = event.which;
    // if (keyCode == 87) {
    //     dolly.position.z -= zSpeed;
    // } else if (keyCode == 83) {
    //     dolly.position.z += zSpeed;
    // } else if (keyCode == 65) {
    //     dolly.position.x -= xSpeed;
    // } else if (keyCode == 68) {
    //     dolly.position.x += xSpeed;
    // } else if (keyCode == 32) {
    //     // dolly.position.set(0, 0, 0);
    //     console.log(`vrize_kbd: now xferring to webgl_geometries`);
    //     // google works
    //     // window.location.href='http://www.google.com/';
    //     // window.location.href='192.168.50.91:8000/examples/vrize_webgl_geometries.html';
    //     // works, but doesn't maintain vr-mode
    //     window.location.href='http://192.168.50.91:4200/assets/threejs-env/examples/vrize_webgl_geometries.html';
    //     // window.location.href='assets/threejs-env/examples/vrize_webgl_geometries.html';
    // }
    // else if (keyCode == 66){
    //   console.log(`vrize_kbd: now going back from whence we came`);
    //   window.history.back();
    // }
};
