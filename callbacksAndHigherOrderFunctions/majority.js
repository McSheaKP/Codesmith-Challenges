// Create a function majority that accepts an array and a callback. 
// The callback will return either true or false. majority will 
// iterate through the array and perform the callback on each element 
// until it can be determined if the majority of the return values 
// from the callback are true. If the number of true returns is equal 
// to the number of false returns, majority should return false.

//Input array, callback
//Array some number of elements
//callback - function to perform on each element of array

//return true or false
//return value is based on if the marjory of the returned values are true
// ADD CODE HERE

function majority(arr, callback){
    const majority = arr.length / 2;
    let trueCounter = 0;
    for(let i = 0; i < arr.length; i++){
        const returnCall = callback(arr[i])
        if(returnCall === true){
            trueCounter++;
        }
        if(trueCounter > majority){
            return true;
        } 
    }
    return false;
}

//Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false