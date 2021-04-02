let crosses = [];
let fps = 60;
var capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  createCanvas(400, 400);
  for (let j = 0; j < 10; j++){ 
    for (let i = 0; i < 10; i++) {
      let x = 20 + (i*40);
      let y = 20 + (j *40);
      let w = 5;
      let h = 30;
      let b = new Cross(x, y, w, h);
      crosses.push(b);
    } 
  }
  
}

function mouseMoved() {
  for (let i = 0; i < crosses.length; i++) {
    crosses[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(230);
  for (let i = 0; i < crosses.length; i++) {
    crosses[i].show();
    crosses[i].animate();
  }
}

class Cross {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.animateTrigger = false;
    this.animateDirection = 'down';
    
    this.start = y;
  }
  
  show() {
    rectMode(CENTER);
    noStroke();
    
    fill(0);
    rect(this.x ,this.y,this.w,this.h)
    rect(this.x, this.y, this.h, this.w)
  }
  
  down(){
    this.y = this.y + 1;
  }
  
  animate(){

     if(this.animateTrigger == true){
      if(this.animateDirection == 'down'){
         if(this.y < this.start + 10){
           this.y++;
         }else{
           //this.animateTrigger = false;
           
         }
       }else{
         if(this.y > this.start){
           this.y--;
         }else if(this.y == this.start){
           this.animateDirection = 'up';
         }
       }   
     }
    
    

  
    
    
    
       
  }
  
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.h) {
      
      
      if(this.y == this.start){
        this.animateTrigger = true;
        this.animateDirection = 'down';
        console.log('hovered');
      }
    }else{
      if(this.y == this.start + 10){
        this.animateTrigger = true;
        this.animateDirection = 'up';
      }
      
    }
  }
  
}