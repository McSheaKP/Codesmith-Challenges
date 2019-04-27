// define a function "select" which takes two arguments, an array and a callback function. 
// The callback function can be considered a test in that it will return either 
// true or false depending on the input. "select" will iterate/loop 
// through the array and pass each array element to the callback as an argument. 
// If the callback called on a certain value returns true, the original value 
// (the input to the callback) is pushed to a new array. "select" will return this new array.

//callback will return true or false "test"

//loop through the array, and pass each element into the callback as an argument
//if the callback returns true, pass that respective value from into a new array

function select( array, callback ){
    let newArray = []
    arrLen = array.length;
    for(let i = 0; i < arrLen; i++){
        if(callback(arr[i])=== true){
            newArray.push(arr[i]);
        }
    }

    return newArray;
}