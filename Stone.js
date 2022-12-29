class Stone{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.y,options)
        World.add(world,this.body);
    }
    display()
    {
        var stonepos=this.body.position;
        push()
        translate(stonepos.x, stonepos.y)
        rectMode(CENTER)
        strokeWeight(4);
        stroke("gray")
        fill("black")
        rect(stonepos.x,stonepos.y,this.w,this.h)
        pop()
    }
}