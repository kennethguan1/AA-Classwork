console.log("Webpack is working!");

// const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroids.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", function () {
    // window.MovingObject = MovingObject;

    const canv = document.getElementById("game-canvas");
    canv.width = 500;
    canv.height = 500;
    const ctx = canv.getContext("2d");
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });

    window.canvas = canv;
    window.ctx = ctx;
    // window.mo = mo;
    // window.draw = MovingObject.draw;
    // window.move = MovingObject.move;
    window.Asteroid = Asteroid;
    window.Game = Game;
    window.GameView = GameView;
});

