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
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
                                                    //aqui é this.h
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
        rect(0,0,this.w,this.h)
            //aqui passamos 0 no lugar das posições pois já foram informadas no translate
        pop()
    }
}