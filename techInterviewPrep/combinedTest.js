// declare a variable called "numArr" which is an array containing the 
// numbers 1, 2, and 3.then print it to the  console

const numArr = [1,2,3];
console.log(numArr);
// define a function "multiplyBy2" that takes one number, 
//multiplies it by 2, and returns that value

function multiplyBy2(num) {
    return num * 2;
}

// define a function "distanceFrom10" that takes one number and 
// returns its distance from 10. the output should be >= 0 
// (e.g. passing 8 or 12 should both return a positive 2)

function distanceFrom10(num){
    return Math.abs(num - 10);
}

// // define a function "map" which takes two arguments, an array and a 
// callback function. "map" will iterate/loop through the array 
// and pass each array element to the callback as an argument. 
// Each output from the callback is pushed to a new array. 
// "map" will return this new array. Please do not use the native .map() method.

function map(callback, array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]))
    }
    return newArr;
}

let numFromTen = map(distanceFrom10, numArr);
console.log(numFromTen)


// define a function called "every" which takes two arguments, an array and a 
// callback function. this callback can be considered a "test", as it will return 
// true or false. "every" will iterate/loop through the array and pass each array 
// element to the callback as an argument. if all outputs from the callback/test are "true", 
// every will return true. if any of the outputs is "false", every will return false. 
// Please do not use the native .every() method.

// function every( array, callback ){
//     for(let i = 0; i < array.length; i++){
//         if( callback(array[i]) === false ){
//             return false
//         }
//     }
//     return true;
// }

// use your "every" to determine if every number in numArr is greater than 0. 
// Then, run a second test with the array [1, -2, 3]

function greaterThanZero(num){
    if(num > 0){
        return true;
    }
    return false;
}




// refactor your "every" function so that it uses the built-in "reduce" method.

// function every( array, callback ){
//     let value = array.reduce( function (acc, curr){
//         if(callback(curr) === false){
//             return acc && false;
//         }
//     }, true);
//     return value;
// }

function every (arr, callback) {    
    return arr.reduce( function (acc, curr) {
        return acc && callback(curr) 
    }, true);        
}

console.log(every(numArr, greaterThanZero))
console.log(every([1, -2, 3], greaterThanZero))