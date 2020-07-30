// Function.prototype.curry = function(numArgs) {
//     const args = [];
//     const that = this;
//     function _curried(arg) {
//         args.push(arg);
//         if (args.length === numArgs) {
//             return that(...args);
//         } else {
//             return _curried;
//         }
//     }
//     return _curried;
// }

Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this;
    function _curried(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that.apply(null, args);
        } else {
            return _curried;
        }
    }
    return _curried;
}

function sum(n1, n2, n3) {
    return n1 + n2 + n3;
}

console.log(sum.curry(3)(2)(5)(6));
