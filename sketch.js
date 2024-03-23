function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("lightblue");

  translate(width/2, height/2);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function loop() {
  clear()
  displayAnalogClock(400, 300, 200);
}

function displayAnalogClock(xc, yc, r) {
  let d = new Date();
  
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();

  stroke("black");
  strokeWeight(1);
  fill("white");
  circle(xc, yc, r);
  
  displayClockNumbers(xc, yc, r * 0.9);
}

function displayClockNumbers(xc, yc, r)
{
    noStroke();
    fill("black");
    
    for(let hour = 0; hour < 12; hour++)
    {
        let angle = map(hour, 0, 12, 360 + 90, 90);

        let x = xc + r * cos(angle);
        let y = yc - r * sin(angle);
        
        text(hour, x, y);
    }
}
