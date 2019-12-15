class Obstacle{
    radius = 30;
    vely = 10
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        obstacle_arr.push(this);

    }
    render()
    {
       ellipse(this.x,this.y,this.radius,this.radius);
    }
    move()
    {
        this.y += this.vely ;
    }
    check()
    {
        if(this.y > height - this.radius || this.y + this.radius < 0 )
        {
            this.vely *= -1;
        }
        
    }
}