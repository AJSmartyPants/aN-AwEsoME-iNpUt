class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("MULTIPLAYER CAR RACE GAME");
        title.position(200, 150);

        var instruction = createElement("h4");
        instruction.html("Enter your name: ");
        instruction.position(70, 230);
        var input = createInput("");
        var button = createButton("RACE");

        input.position(200, 250);
        button.position(200, 300);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            instruction.hide();

            var name = input.value();

            var hi = createElement("h3");
            hi.html("Let's play fast, " + name + "!!!");
            hi.position(200, 200);
        })
    }
}