class Dustbin{
	constructor(x,y)
	{
        var options={
            isStatic:true
        }

		this.x=x;
		this.y=y;
		this.width=200;
		this.height=213;
		this.thickness=20;
		this.image=loadImage("images/dustbingreen.png");
		this.bottom=Bodies.rectangle(this.x, this.y, this.width, this.thickness,options)
		this.left=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height,options)
        this.right=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height,options)
        
		World.add(world, this.bottom)
		World.add(world, this.left)
		World.add(world, this.right);

	}
	display()
	{
			var posBottom=this.bottom.position;
			var posLeft=this.left.position;
			var posRight=this.right.position;

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			fill("green")
			stroke("green")
			//rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			stroke("green");
			fill("green")
			//rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			imageMode(CENTER)
			// stroke("green")
			// fill("green")
			image(this.image,0,-this.height/2,this.width, this.height);
			pop()
			
	}

}