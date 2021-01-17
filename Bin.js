class Bin {
    constructor(x, y, height,width,angle) {
      var options = {
          restitution:0.1,
          friction:1,
          isStatic:true
          
          
      }
      this.body = Bodies.rectangle(x, y,  height,width, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
            rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  