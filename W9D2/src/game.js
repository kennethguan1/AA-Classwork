const Asteroid = require("./asteroids.js");

function Game() {
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];

    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        let randomPos = this.randomPosition();
        // let nextAsteroid = new Asteroid({ pos: randomPos });
        let nextAsteroid = new Asteroid({ pos: randomPos, game: this });
        this.asteroids.push(nextAsteroid);
    }
}

Game.prototype.randomPosition = function () {
    const randX = Math.random() * this.DIM_X;
    const randY = Math.random() * this.DIM_Y;

    return [randX, randY];
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
        asteroid.move();
    })
}

Game.prototype.wrap = function (pos) {
    let x = pos[0];
    let y = pos[1];

    if (x > this.DIM_X) {
        x = 0;
    }
    if (x < 0) {
        x = this.DIM_X;
    }

    if (y > this.DIM_Y) {
        y = 0;
    }
    if (y < 0) {
        y = this.DIM_Y;
    }

    return [x, y];
}

module.exports = Game;