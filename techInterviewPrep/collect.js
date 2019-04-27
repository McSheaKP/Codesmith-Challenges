// // define a function "collect" which takes two arguments, 
// an array and a callback function. "collect" will iterate/loop through 
// the array and pass each array element to the callback as an argument. 
// Each output from the callback is pushed to a new array. "collect" will return this new array.

//return new array
//new array contains the output of each 

function collect (array, callback){
    let newArray = [];
    for(i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray;
}

