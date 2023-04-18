class Boat {
  constructor(x, y, width, height,) {
    var options = {
      isStatic : true
    };


    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    

    
    World.add(world, this.body);
  }


  display() {
   
    var pos = this.body.position;
  
    
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    
  }
}
