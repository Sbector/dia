let cnv;
let slider;
let phase = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position('0', '0');
  cnv.style('z-index', '-1');
  slider = createSlider(0,2,0.55,0.01);
  slider.style('width', '100%');
  slider.style('float', 'right');
}
 

 function draw(){
  background(255);
  translate(width/2, height/2);
  noStroke();
  fill(255,255,0);
  beginShape();
  let noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xoff = map(cos(a + phase),-1,1,0,noiseMax);
    let yoff = map(sin(a + phase),-1,1,0,noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  //noLoop();
  //phase += 0.01; 
 }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}