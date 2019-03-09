// Create a function countBy that accepts an array and a callback, 
// and returns an object. countBy will iterate through the array and perform 
// the callback on each element. Each return value from the callback will be 
// saved as a key on the object. 
// The value associated with each key will be the number of times 
// that particular return value was returned.

//Inputs array and callback
//array = series of values
//callback returns a value

//returns object that has keys, but for each value, it will add one to the value

function countBy(array, callback){
    const returnObj = {};
    array.map(elem => {
        const returnValue = callback(elem)
        if(!returnObj[returnValue]){
            returnObj[returnValue] = 1;
        } else {
            returnObj[returnValue]++;
        }
    })
    return returnObj
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }