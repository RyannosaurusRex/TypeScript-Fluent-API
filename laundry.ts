class Laundry {
    color :string;
    type: string;
    folds: number;
}

class LaundryFolder {
    
    constructor(){
        
    }
    
    public GrabFromBasket(laundry : Laundry) : FoldingCommand{
        laundry.folds = 0;
        return new FoldingCommand(laundry);
    }
}

class FoldingCommand{
    laundry : Laundry;
    
    constructor(laundry : Laundry){
        this.laundry = laundry;
    }
    
    public FoldGood() : FoldingCommand{
        this.laundry.folds++;
        return this;
    }
    
    public FoldRealGood() : FoldingCommand{
        this.laundry.folds++;
        return this;
    }
    
    public CrapIDroppedIt() : FoldingCommand{
        this.laundry.folds = 0;
        return this;
    }
    
    public PlaceInCloset() : void{
        console.log("Placed the " + this.laundry.color + " " + this.laundry.type + " in the closet!");
    }
}

var clothingItem = new Laundry();
clothingItem.color = "blue";
clothingItem.type = "shirt";
new LaundryFolder().GrabFromBasket(clothingItem).FoldGood().CrapIDroppedIt().CrapIDroppedIt().PlaceInCloset();
new LaundryFolder().GrabFromBasket(clothingItem).FoldGood().FoldRealGood().FoldGood().CrapIDroppedIt().PlaceInCloset();