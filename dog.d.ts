export default class Dog {
    constructor();
    Bark(): Dog;
    Scratch(): Dog;
    Woof(): Dog;
    GoOnWalk(): WalkCommand;
    GoForRun(): RunCommand;
}
export declare class WalkCommand {
    dog: Dog;
    constructor(dog: Dog);
    GoToPark(): WalkCommand;
    GoHome(): Dog;
}
export declare class RunCommand {
    dog: Dog;
    constructor(dog: Dog);
    RunToPark(): RunCommand;
    GoHome(): Dog;
}
