class Polygon {
    constructor(x,y,radius) {
        var options = {

            isStatic: false
        }

    this.polygonImg = loadImage('polygon.png');

    this.body = Bodies.circle(50,200,20);
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius/2;
    World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        stroke("black");
        circle(pos.x, pos.y, this.radius);

        imageMode(CENTER);
        image(this.polygonImg, pos.x, pos.y, 75, 75);

    }
    
}