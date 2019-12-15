class Dino{
    radius = 30;
    constructor(x,y,chrom)
    {
        this.x = x;
        this.y = y;
        this.chromosome = chrom;
        this.fitness = this.call_fitness();
        // this.velx = velx;
        // this.vely = vely;
    }
    render(colo)
    {
        fill(colo);
        
        ellipse(this.x,this.y,10,10);
        // alert(num);
    }
    move(direction)
    { 
        this.y -= 10;
    }
    call_fitness()
    {
        // console.log(string);
        var fit;
        var min = 100000;
        var index;
        string = this.chromosome
        for (var x = 0;x < string.length;x ++)
        {
          if(string[x] == '0')
            {
              this.x += 10;
            }
          else if(string[x] == '1')
            {
              this.y -= 10;
            }
          else if(string[x] == '2')
            {
              this.x -= 10;
            }
          else if(string[x] == '3')
            {
              if(this.y <= 0)
              {

                fit = 10000;
                return fit;
              }
              this.y += 10;
            }
            
            // checking if it has collided with the obstacle
            var j;
            for(j in obstacle_arr)
            {
              
              if(dist(this.x,this.y,obstacle_arr[j].x,obstacle_arr[j].y) < 30)
                {
                // this.render(255);
  
                  fit = 10000;
                  return fit;
                }
            }
           
             
             if(dist(this.x,this.y,end_x,end_y) < min)
              {
                fit   = dist(this.x,this.y,end_x,end_y);
                min   = fit;
                index = x;
              }
          
                this.render(255);
              
              
        }
        
        //  this.chromosome = j.slice(0,index);
        return fit

    }

    // mating creating a child chromosome if a cut point then stich two 
    mate(other)
    {
        var child_chromosome = "";
       
        var min_length = min(this.chromosome.length,other.chromosome.length);
        var cut_point = Math.floor(Math.random()*min_length);

        child_chromosome +=this.chromosome.slice(0,cut_point);
        child_chromosome +=other.chromosome.slice(cut_point);

        // mutation : randomly add 0,1,2,3
         if(Math.random() <= 0.4)
         {
            if(Math.random() <= 0.25)
            {
             child_chromosome += '0';
            }
            else if(Math.random() <= 0.5){
              child_chromosome += '1';
            }
            else if(Math.random() <= 0.75){
              child_chromosome += '2';
            }
            else{
              child_chromosome += '3';
            }
         }
  
            return new Dino(start_x,start_y,child_chromosome);
    }
}