song1 = "";
song2 = "";
rx =0
ry =0
lx =0
ly = 0
function preload(){
    song1 = loadSound("");
    song2 = loadSound("");
}
function setup(){
    canvas = createCanvas(480,360);
    video = createCapture(VIDEO);
    video.hide();
    canvas.position('center');
    background("white");
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,480,360);
    //song1.play;
    //song2.play;
}

function ModelLoaded(){
    print("loaded")
}

function gotPoses(result){
    if(result.length > 0){
        print(result)
        rx = results[0].pose.rightWrist.x;
        ry = results[0].pose.rightWrist.y;
        lx = results[0].pose.leftWrist.x;
        lx = results[0].pose.leftWrist.y;
    }
}