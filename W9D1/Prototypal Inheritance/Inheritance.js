Function.prototype.inherits = function (parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}


function MovingObject(speed) { 
    this.speed = speed;
}

MovingObject.prototype.goFast = function() {
    console.log(`Flying at ${this.speed}!`);
}


function Ship(speed) {
    MovingObject.call(this, speed);
 }
Ship.inherits(MovingObject);


function Asteroid(speed) {
    MovingObject.call(this, speed);
 }
 
 Asteroid.inherits(MovingObject);
 
 Asteroid.prototype.crash = function() {
     console.log(`Speed increased and crashed into the planet at ${this.speed}!!`);
 }
