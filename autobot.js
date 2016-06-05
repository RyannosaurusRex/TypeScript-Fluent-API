var Autobot = (function () {
    function Autobot() {
        this.name = "";
        this.make = "";
        this.model = "";
    }
    Autobot.prototype.HasNameOf = function (name) {
        this.name = name;
        return this;
    };
    Autobot.prototype.WithMake = function (make) {
        this.make = make;
        return this;
    };
    Autobot.prototype.AndModel = function (model) {
        this.model = model;
        return this;
    };
    Autobot.prototype.TransformToAuto = function () {
        return new AutoModeCommand(this);
    };
    return Autobot;
}());
var AutoModeCommand = (function () {
    function AutoModeCommand(bot) {
        this.autobot = bot;
    }
    AutoModeCommand.prototype.Speak = function (phrase) {
        console.log(phrase);
        return this;
    };
    AutoModeCommand.prototype.Drive = function () {
        console.log(this.autobot.name + " begins to drive.");
        return this;
    };
    AutoModeCommand.prototype.TransformToBot = function () {
        return new BotModeCommand(this.autobot);
    };
    return AutoModeCommand;
}());
var BotModeCommand = (function () {
    function BotModeCommand(bot) {
        this.autobot = bot;
    }
    BotModeCommand.prototype.Shoot = function () {
        return this;
    };
    BotModeCommand.prototype.Speak = function (phrase) {
        console.log(phrase);
        return this;
    };
    BotModeCommand.prototype.TransformToAuto = function () {
        return new AutoModeCommand(this.autobot);
    };
    return BotModeCommand;
}());
var bot = new Autobot();
