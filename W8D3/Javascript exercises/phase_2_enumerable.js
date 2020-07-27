Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}
// let arr = [1, 2, 3]

function timzer() {
    let newArr = [];
    const inner = function(arr, num) {
        arr.myEach((ele) => newArr.push(ele * num));
        return newArr;
    }
    return inner
}

let multi = timzer()
// console.log( multi([1, 2, 3], 10) )
// console.log( multi([4, 5, 6], 10))

Array.prototype.myMap = function(cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i]))
    }
    return newArr;
}

Array.prototype.myReduce = function(cb, initialValue = this[0]) {
    let acc = initialValue;
    if (initialValue === this[0]) {
        for (let i = 1; i < this.length; i++) {
            acc = cb(acc, this[i]);
        }
        return acc;
    } else {
        for (let i = 0; i < this.length; i++) {
            acc = cb(acc, this[i]);
        }
        return acc;
    }
}

// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }); // => 6


// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25); // => 31








