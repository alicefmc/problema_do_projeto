class Iron{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:3,
            density:30
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
        var ironpos=this.body.position;
        push()
        translate(ironpos.x, ironpos.y)
        rectMode(CENTER)
        strokeWeight(4);
        stroke("darkblue")
        fill("gray")
        rect(0,0,this.w,this.h)
            //As posições já estão no translate, aqui fica 0
        pop()
    }
}