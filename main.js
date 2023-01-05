Xcord = 0
Ycord = 0

tsize = 10

leftwristX = 0
rightwristX = 0


function setup() {
    canvas = createCanvas(700, 600)
    canvas.position(900, 150)
    

    vid = createCapture(VIDEO)
    vid.position(100, 150)
    vid.size(700, 600)

    poses = ml5.poseNet(vid, modelLoaded)
    poses.on('pose', gotposes)
    
    
}

function modelLoaded() {
    console.log("Model Loaded!!")
}

function gotposes(results){
    if(results.length > 0) {
        console.log(results)

        leftwristX = results[0].pose.leftWrist.x
        rightwristX = results[0].pose.rightWrist.x
        tsize = floor(leftwristX - rightwristX)
    }
    
}

function draw() {
    background("pink")
    textSize(32);
    textSize(tsize)
    text('Noah', 32, 350);
    fill('blue');
    
}