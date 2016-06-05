declare class Dog {
    constructor();
    Bark(): Dog;
    Scratch(): Dog;
    Woof(): Dog;
    GoOnWalk(): WalkCommand;
    GoForRun(): RunCommand;
}
declare class WalkCommand {
    dog: Dog;
    constructor(dog: Dog);
    GoToPark(): WalkCommand;
    GoHome(): Dog;
}
declare class RunCommand {
    dog: Dog;
    constructor(dog: Dog);
    RunToPark(): RunCommand;
    GoHome(): Dog;
}
