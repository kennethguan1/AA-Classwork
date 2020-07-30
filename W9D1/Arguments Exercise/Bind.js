class Cat {
  constructor(name) {
    this.name = name;
  }
 
  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true; 
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}


Function.prototype.myBind = function (ctx) {
    const that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function() {
        const callArgs = Array.from(arguments);
        return that.apply(ctx, bindArgs.concat(callArgs));
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind(pavlov)("meow", "a tree");
markov.says.myBind(pavlov, "meow")("Markov");
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");


// ... version of myBind

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//     const that = this;
    
//     return function(...callArgs) {
        
//         return that.apply(ctx, bindArgs.concat(callArgs));
//     }
// }