class Form {

    constructor() {
     this.form1=loadImage("sonic game 1.png")
      this.button1 = createButton('start');
      this.form2=loadImage("sonic game 2.png")
      this.button2 = createButton('start');
      this.input=createInput=("name");
      this.greeting = createElement('h2');

    }
    hide(){
      this.form1.hide();
      this.button1.hide();
      this.button2.hide();
     this.input.hide();
    }
    
  
    display(){
      imageMode(CENTER);
      image(this.form1,600,330,1300,700);
      this.button1.position(470,620);
      this.button1.size(210,50);
       
        this.button1.mousePressed(()=>{
        this.form1.hide();
        this.button1.hide();
        text("Enter your name here-",200,200)
        this.input.display();
        image(this.form2,600,330,1300,700);
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        
        this.button2.display();
    });
    this.button2mousePressed(()=>{
      this.button2.hide();
     text.hide();
      this.input.hide();
      this.button2.hide();
      this.greeting.html("Hello " + player.name)
     this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  });



    
    }
  }
  