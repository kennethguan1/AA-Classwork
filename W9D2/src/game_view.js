const Game = require("./game.js");

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    const that = this;

    setInterval(function () {
        that.game.draw(this.ctx);
        that.game.moveObjects();
    }, 20);
}

module.exports = GameView;