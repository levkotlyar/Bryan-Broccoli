var bryan;
var song;
var broccoli;
var on = "yes"
var num = 0;
var r;
var g;
var b;
function preload () {
  bryan = loadImage("assets/bryan-broccoli.png") 
  song = loadSound("assets/Brian Broccoli - I Want More Broccoli (Official Music Video).mp3")
  broccoli = loadImage("assets/broccoli.png")
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  background (r,g,b);
  song.play()
  imageMode (CENTER);
}

function draw() {
  image (bryan, mouseX, mouseY);
  fill(r,g,b);
  noStroke();
  rect(0,0,120,50);
  fill(0);
  num += 1;
  var word = "Broccoli count: "+num;
  text(word,0,25);

}

function mousePressed () {
  r = random(255);
  g = random(255);
  b = random(255);
  background (r,g,b);
  num = 0;
}
function keyTyped() {
  if (key == 'p') {
    if(on=="yes"){
      song.pause();
      on="no"
    } else {
      song.play();
      on = "yes";
    }
  }
}
