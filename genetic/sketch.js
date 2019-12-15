start_x = 0;
start_y = 250;
end_x   = 700;
end_y   = 250;

population_size = 1000;
population = [];
var generation = 0;
var num_gen = 50;
obstacle_arr = [];
function setup()
{
  
  frameRate(60);
  createCanvas(700, 500);
  background(100);
  obs1 = new Obstacle(width/2,height/2);
  obs2 = new Obstacle(width/2,height);
  obs3 = new Obstacle(width/2,height*0.75);
  obs4 = new Obstacle(width/2,height*0.25);
  obs5 = new Obstacle(width/2,height*0);
  obs1 = new Obstacle(width/3,height/2+50);
  obs2 = new Obstacle(width/3,height+50);
  obs3 = new Obstacle(width/3,height*0.75 + 50);
  obs4 = new Obstacle(width/3,height*0.25 + 50);
  obs5 = new Obstacle(width/3,height*0+50);
  obs1 = new Obstacle(width*0.75,height/2+50);
  obs2 = new Obstacle(width*0.75,height);
  obs3 = new Obstacle(width*0.75,height*0.75+50);
  obs4 = new Obstacle(width*0.75,height*0.25+50);
  obs5 = new Obstacle(width*0.75,height*0+50);

 

  

  // to create random string
  for(var x = 0;x < population_size;x++)
  {
      gnome = create();
      population[x] = new Dino(start_x,start_y,gnome);

  }
  console.log("initial",population);
  
  

}

function create()
{
    string = '0123';
    result = ''
    for(var j = 0;j < 100; j++)
      {
        rand = Math.random();
        if(rand <= 0.25)
          {
            result += '0';
          }
        else if(rand <= 0.5){
           result += '1';
          }
        else if(rand <= 0.75){
            result += '2';
          }
        else{
            result += '3';
          }
  
      }
    console.log(result);
    return result;

    }


function draw()
{
    background(100);
    textSize(32);
    text(generation, width/2, 40);
    for(i in obstacle_arr)
    {
        obstacle_arr[i].render();
    }
   
    // ellipse(width/2,height-30,50,50);
    // ellipse(width/4,height,50,50);
    // ellipse(width*0.75,height-60,50,50);
    // ellipse(width,height-80,50,50);

    if(generation < num_gen)
    {
    new_gen =[];
    for(var z = 0;z<population_size/2;z++)
     {
       var min = population[0].fitness;
       var index = 0;
       for(var x = 1;x < population.length;x++)
           {
           if(population[x].fitness<min)
           {
               //population[x].render();

               min = population[x].fitness;
               index = x; 
           }
       }
       new_gen.push(population[index]);
       population.splice(index,1);
       

    }
    final = new Dino(start_x,start_y,new_gen[0].chromosome);
    final.render(1);
    if(new_gen[0].fitness == 0)
    {
    console.log(new_gen[0]);
        
        alert('done');
        background(100);
        for(i in obstacle_arr)
        {
            obstacle_arr[i].render();
        }
        final = new Dino(start_x,start_y,new_gen[0].chromosome);
        final.render();
        // new_gen[0].render(generation);
        
    }
    //new_gen[0].call_fitness(1);
    console.log(new_gen[0]);
    var rep = new_gen.slice(0, population_size/2);
    final = [];
    final = new_gen.slice(0,population_size*0.1);
    for(var j = 0;j <population_size*0.9 ; j++)
    {
        y = rep[Math.floor(Math.random() * population_size/2)];
        z = rep[Math.floor(Math.random() * population_size/2)];
        child = y.mate(z);
        final.push(child);
    }
    population = final;
    generation += 1;
  }

}