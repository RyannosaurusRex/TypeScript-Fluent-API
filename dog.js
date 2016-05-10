"use strict";
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.Bark = function () {
        console.log("Bark!!");
        return this;
    };
    Dog.prototype.Scratch = function () {
        return this;
    };
    Dog.prototype.Woof = function () {
        return this;
    };
    Dog.prototype.GoOnWalk = function () {
        return new WalkCommand(this);
    };
    Dog.prototype.GoForRun = function () {
        return new RunCommand(this);
    };
    return Dog;
}());
exports.__esModule = true;
exports["default"] = Dog;
var WalkCommand = (function () {
    function WalkCommand(dog) {
        this.dog = dog;
    }
    WalkCommand.prototype.GoToPark = function () {
        return this;
    };
    WalkCommand.prototype.GoHome = function () {
        return this.dog;
    };
    return WalkCommand;
}());
exports.WalkCommand = WalkCommand;
var RunCommand = (function () {
    function RunCommand(dog) {
        this.dog = dog;
    }
    RunCommand.prototype.RunToPark = function () {
        return this;
    };
    RunCommand.prototype.GoHome = function () {
        return this.dog;
    };
    return RunCommand;
}());
exports.RunCommand = RunCommand;
