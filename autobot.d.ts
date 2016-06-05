interface AllModeCommand {
    autobot: any;
    Speak(phrase: string): AllModeCommand;
}
declare class Autobot {
    name: string;
    make: string;
    model: string;
    constructor();
    HasNameOf(name: string): Autobot;
    WithMake(make: string): Autobot;
    AndModel(model: string): Autobot;
    TransformToAuto(): AutoModeCommand;
}
declare class AutoModeCommand implements AllModeCommand {
    autobot: any;
    constructor(bot: Autobot);
    Speak(phrase: string): this;
    Drive(): AutoModeCommand;
    TransformToBot(): BotModeCommand;
}
declare class BotModeCommand implements AllModeCommand {
    autobot: any;
    constructor(bot: Autobot);
    Shoot(): BotModeCommand;
    Speak(phrase: string): this;
    TransformToAuto(): AutoModeCommand;
}
declare var bot: Autobot;
