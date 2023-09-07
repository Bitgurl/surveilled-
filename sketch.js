let vid;
let liveVideo;
function setup(){
  vid = createVideo('surv.mp4');
  liveVideo = createCapture('VIDEO');
  createCanvas(0,0);
  vid.loop()

}
function draw(){
  background(0, 0);

}