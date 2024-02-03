function setup()
{
  
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("model loaded");
    output=true;
    objectDetector.detect(video,gotResult);
}

function draw()
{
   
}