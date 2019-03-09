// Create a function groupBy that accepts an array and a callback, and returns an object. 
// groupBy will iterate through the array and perform the callback on each element. 
// Each return value from the callback will be saved as a key on the object. 
// The value associated with each key will be an array consisting of all the elements 
// that resulted in that return value when passed into the callback.

//input array and callback
//array = series of values
//callback = returns some value

// return object will have 
// key: each returned value from the callback
// value: item passed into the callback

//returns object

function groupBy(arr, callback){
    const returnObj = {};
    arr.map( elem => {
        const returnVal = callback(elem);
        if(!returnObj[returnVal]){
            let valueArr = []
            valueArr.push(elem);
            returnObj[returnVal] = valueArr;
          
        } else {
            returnObj[returnVal].push(elem)
        }
    })
    return returnObj
}



// ADD CODE HERE

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
