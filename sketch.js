function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    stroke("orange");
    fill("lightblue");
    
    if(mouseIsPressed) {
    rect(mouseX,mouseY,20,20);
  }
  }