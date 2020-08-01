const Util = require("./utils");
const MovingObject = require("./moving_object");

const DEFAULT = {
    COLOR: "#FF0000",
    RADIUS: 5
};

function Asteroid(options) {
    options.color = DEFAULT.COLOR;
    options.radius = DEFAULT.RADIUS;
    options.vel = Util.randomVec(10);
    options.game = options.game;

    MovingObject.call(this, options)
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;