
// Using keyword arguments

// function sum() {
//     let max = 0; 

//     for (i = 0; i < arguments.length; i++) {
//         max += arguments[i];
//     }
//     return max; 
// }

function sum(...args) {
    let max = 0; 

    for (i = 0; i < args.length; i++) {
        max += args[i];
    }
    return max; 
}