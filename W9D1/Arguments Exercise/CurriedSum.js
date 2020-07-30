function curriedSum(numArgs) {
    const numbers = []; 

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach((ele) => {sum += ele;} );
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));