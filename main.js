song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("Aasman ko Chukar Dekha.mp3");
    song2 = loadSound("ATTS.mp3");
}

function setup(){
    canvas = createCanvas();
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 500, 600, )
}