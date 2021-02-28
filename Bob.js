class Bob  {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:0.8
    
      }
      this.radius= 62;
      this.body = Bodies.circle(x, y, this.radius, options);
      
     
   
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius,this.radius);
      fill("lightpink");
      strokeWeight(3); 
    }
  };