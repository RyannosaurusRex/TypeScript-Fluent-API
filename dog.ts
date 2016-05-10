class Dog {
    constructor() {

    }

    public Bark(): Dog {
        console.log("Bark!!");
        return this;
    }

    public Scratch(): Dog {
        return this;
    }

    public Woof(): Dog {
        return this;
    }

    public GoOnWalk(): WalkCommand {
        return new WalkCommand(this);
    }

    public GoForRun(): RunCommand {
        return new RunCommand(this);
    }
}

class WalkCommand {
    dog: Dog;
    constructor(dog: Dog) {
        this.dog = dog;
    }

    public GoToPark(): WalkCommand {
        return this;
    }
    public GoHome(): Dog {
        return this.dog;
    }
}

class RunCommand {
    dog: Dog;
    constructor(dog: Dog) {
        this.dog = dog;
    }

    public RunToPark(): RunCommand {
        return this;
    }

    public GoHome(): Dog {
        return this.dog;
    }
}