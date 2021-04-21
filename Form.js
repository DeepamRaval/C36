class Form{
   
    constructor(){}

    display(){

        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(450, 0);
      
        var input = createInput("Name");
        input.position(400,200);

        var button = createButton("Play");
        button.position(450,250);
        
    
        button.mousePressed(function (){
            input.hide();
            button.hide();

            //var name = input.value();

            var greeting = createElement("h3")
            greeting.html("Hello " + input.value())
    
            greeting.position(400,250)
        })
    }
    
 
    
}


//input -> box
//createInput

//Car racing Game

//button
//createButton("Play")