var xSpeed = 5.1;
var ySpeed = 5.1;
var zSpeed = 5.1;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    console.log(`vrize_kbd.onDocumentKeyDown: event=${event}`);
    var keyCode = event.which;
    if (keyCode == 87) {
        dolly.position.z -= zSpeed;
    } else if (keyCode == 83) {
        dolly.position.z += zSpeed;
    } else if (keyCode == 65) {
        dolly.position.x -= xSpeed;
    } else if (keyCode == 68) {
        dolly.position.x += xSpeed;
    } else if (keyCode == 32) {
        // dolly.position.set(0, 0, 0);
        console.log(`vrize_kbd: now xferring to webgl_geometries`);
        // google works
        // window.location.href='http://www.google.com/';
        // window.location.href='192.168.50.91:8000/examples/vrize_webgl_geometries.html';
        // works, but doesn't maintain vr-mode
        window.location.href='http://192.168.50.91:4200/assets/threejs-env/examples/vrize_webgl_geometries.html';
        // window.location.href='assets/threejs-env/examples/vrize_webgl_geometries.html';
    }
};
