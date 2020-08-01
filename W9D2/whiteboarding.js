Array.prototype.prob2 = function(){
    // const that = this;
    console.log(this);
    const nonZeroes = [];
    const zeroes = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i] === 0) {
            zeroes.push(this[i])           
        } else {
            nonZeroes.push(this[i])
        }
    }

    return nonZeroes.concat(zeroes);
}