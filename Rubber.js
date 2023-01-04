class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
																						//aqui deixa sรณ o this.r
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			//tira esse translate
			ellipseMode(RADIUS)
			//tira rectMode e coloca o ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(rubberpos.x,rubberpos.y,this.r,this.r)
			pop()
	}

}