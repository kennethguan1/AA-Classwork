const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} > than ${el2}? Say yes or no:`, function (answer) {
        if (answer === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    }
    )
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps=false, callback) {
    // Do an "async loop":
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
            if (isGreaterThan === true) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        })
    } else {
        callback(arr, madeAnySwaps);
    }
    
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

function outerBubbleSortLoop(arr, madeAnySwaps) {
    if (madeAnySwaps && madeAnySwaps === true) {
        innerBubbleSortLoop(arr, 0, outerBubbleSortLoop);
    } else {
        console.log(arr);
    }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// askIfGreaterThan(10, 11, thing => console.log(thing));

innerBubbleSortLoop([1, 3, 2, 5, 4, 8], 0, outerBubbleSortLoop);

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });