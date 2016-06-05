interface AllModeCommand{
    autobot;
    Speak(phrase:string) : AllModeCommand;
}

class Autobot {
    name = "";
    make = "";
    model = "";
    constructor(){
        
    }
    
    public HasNameOf(name : string) : Autobot{
        this.name = name;
        return this;
    }
    
    public WithMake(make : string) : Autobot{
        this.make = make;
        return this;
    }
    
    public AndModel(model : string) : Autobot {
        this.model = model;
        return this;
    }
    
    public ITSALIVE() : BotModeCommand {
        return new BotModeCommand(this);
    }
}

class AutoModeCommand implements AllModeCommand{
    autobot;
    
    constructor(bot: Autobot){
        this.autobot = bot;
    }
    
    public Speak(phrase:string){
        console.log(phrase);
        return this;
    }
    
    public Drive() : AutoModeCommand{
        console.log(this.autobot.name + " begins to drive.")
        return this;
    }
    
    public TransformToBot() : BotModeCommand {
        return new BotModeCommand(this.autobot);
    }
}

class BotModeCommand implements AllModeCommand{
    autobot;
    
    constructor(bot: Autobot){
        this.autobot = bot;
    }
    
    public Shoot() : BotModeCommand {
        return this;
    }
    
    public Speak(phrase:string){
        console.log(phrase);
        return this;
    }
    
    public TransformToAuto() : AutoModeCommand {
        return new AutoModeCommand(this.autobot);
    }
}

var bot = new Autobot();
bot.HasNameOf("Optimus Prime").WithMake("Mitsubishi?").AndModel("SemiTruck?")
.ITSALIVE().Speak("Autobots, transform and roll out!").Shoot().TransformToAuto().Drive().TransformToBot().Shoot().TransformToAuto().Drive()
bot.ITSALIVE();
