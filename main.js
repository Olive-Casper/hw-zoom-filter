eyeX=0;
eyeY=0;

function preload() {
glasses = loadImage('https://i.postimg.cc/BvTVL1Nh/glasses-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('posenet is loaded');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        eyeX = results[0].pose.rightEye.x;
        eyeY = results[0].pose.rightEye.y;
        console.log("eye x = " + eyeX);
        console.log("eye y = " + eyeY);
    }
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(glasses, eyeX - 25, eyeY - 15, 100, 50);
}

function take_snapshot()
{
    save('myFilterImage.png');
}