var basename = 'http://www.omdbapi.com/?';
var search,url, results, poster;
var score
var top100
var answer, answerinput;
var title
var question
var test


function preload(){
top100 = loadJSON("assets/top100.json")
}
 
function setup() {
  createCanvas (1000, 1000);
 
  hard = createButton("Hard");
  hard.mousePressed(easydif);
  hard.position(width/2+20,125);
    
  easy = createButton("Easy");
  easy.mousePressed(harddif);
  easy.position(width/2-60,125);    
  
question = createInput();
question.position(width/2-100,500)
question.input(check)  
question.size(250)    

answerinput = question.value()
    
}
function gotData(data){
  results = data;

}
 
function harddif(){

    //test
//title = top100[0].title       
title = top100[floor(random(0,100))].title   
  
url = basename+'&t='+title+"&plot=full"+'&r=json';
loadJSON(url,gotData);
console.log(url);
    console.log(title);
  

}

function easydif(){

    //test
//title = top100[0].title       
title = top100[floor(random(0,100))].title   
  
url = basename+'&t='+title+'&r=json';
loadJSON(url,gotData);
console.log(url);
console.log(title);
  

}

function check(){
 console.log("check")  
  if(question.value() === title){
  
        poster = createImg (results.Poster);
        poster.show
        poster.position(10,520)
       
       textSize(32);
       fill(255)
  text(results.Title,500,700);
  textSize(20);
  text("Released"+results.Released,400,150);
        
   } else {
    
   }
}

function draw() {
background(50)
   push() 
    textSize(44);
    fill(255)
    textAlign(CENTER,BASELINE)
    text("Guess a Movie!", width/2,70)    
pop()
  if(question.value() === title){
    textSize(30);
    fill(255)
    textAlign(LEFT,BASELINE)
      
    text(results.Title, width/2-180,700)  
    textSize(18);  
    text("Relased: "+results.Released, width/2-180,750)  
    text("Genre: "+results.Genre, width/2-180,780)
    text("Director: "+results.Director, width/2-180,810)  
    text("IMDB: "+results.imdbRating, width/2-180,840) 
    
      
  }   

 
if (results){
 
  textSize(16);
    fill(255)
    textAlign(CENTER,BASELINE)
  text(results.Plot,width/2-400,height/6,800,400);
  
}

    
}