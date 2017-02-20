var video = document.querySelector("#videoElement");
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({audio: true, video: true}, handleVideo, videoError);
}

function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}

function videoError(e) {
    // do something
}

// Converts canvas to an image
// function convertCanvasToImage(canvas) {
// 	var image = new Image();
// 	image.src = canvas.toDataURL("image/png");
// 	return image;
// }
