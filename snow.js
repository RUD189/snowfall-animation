class Snow{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.0000001,
            
            }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("snow4.webp");
        this.body=Bodies.circle(this.x, -100, this.r/2, options);
        World.add(world, this.body);
        
}



display(){
var stonepos=this.body.position;        
        push()
        translate(stonepos.x, stonepos.y);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0,0,this.r*2, this.r*2);
        pop();
   

}
}