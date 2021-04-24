var status="";
var object=[];
var alarm="";
function preload(){
    alarm = loadSound("iphone_13.mp3");
    song.play(alarm);
}
 function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300)
video.hide();
object_detection=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status:detecting Baby";
 }
 function modelloaded(){
     console.log("model loaded");
     status=true;
}
function gotresult(error,result){
if(error){
console.log(error);
    }
else{
console.log(result);
object=result;
}
}
 function draw(){
image(video,0,0,380,380);
if(object="person"){
object_detection.detect(video,gotresult)
for(i=0;i<object.length;i++){
document.getElementById("status").innerHTML="Status object: baby detected";
alarm.stop();
fill("black");
percent=floor(object[i].confidence*100);
text(object[i].label+""+percent+"%",object[i].x,object[i].y);
noFill();
stroke("light green");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
 }