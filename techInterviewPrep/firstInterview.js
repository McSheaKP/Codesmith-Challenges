console.log("Hello World!");

// declare a variable called "numArr" which is an array containing the numbers 10, 20, and 30. then print it to the console

let numArr = [10,20,30];
console.log('num arr', numArr);

// define a function "multiplyBy2" that takes one number, multiplies it by 2, and returns that value

function multiplyBy2(num){
  return num * 2;
}

console.log(multiplyBy2(2));

// define a function "distanceFrom10" that takes one number and returns its distance from 10. the output should be greater than or equal to zero (e.g. passing 8 or 12 should both return a positive 2)

function distanceFrom10(num){
  return Math.abs(num - 10);
}
//12,8
console.log('twelve', distanceFrom10(12));
console.log('eight', distanceFrom10(8));

// define a function "map" which takes two arguments, an array and a callback function. "map" will iterate/loop through the array and pass each array element to the callback as an argument. Each output from the callback is pushed to a new array. "map" will return this new array. Please do not use the native .map() method.

//returnval new arry from each callback

function map(arr, callback){
  let returnArr = [];
  for(let i = 0; i < arr.length; i++){
    returnArr.push(callback(arr[i]))
  }
  return returnArr;
}

// use your "map" to find the distance from 10 of each number in numArr
console.log('returned arr', map(numArr, distanceFrom10));


// define a function called "every" which takes two arguments, an array and a callback function. this callback can be considered a "test", as it will return true or false. "every" will iterate/loop through the array and pass each array element to the callback as an argument. if all outputs from the callback/test are true, every will return true. if any of the outputs is false, every will return false. Please do not use the native .every() method.

//callback returns true or false

//if all outputs are true, every returns true
//if any of the outputs are false every returns false

// function every(arr, callback){
  
//   for( let i = 0; i < arr.length; i++){
//   	if(callback(arr[i]) === false){
//       return false;
//     }
//   }
//   return true;
// }

// use your "every" to determine if every number in numArr is greater than 5. Then, run a second test with the array [10, -20, 30]

function greaterThanFive(num){
  if(num > 5){
    return true;
  } 
  return false;
}

console.log('logging out every', every(numArr, greaterThanFive));
console.log('logging out every 2', every([10, -20, 30], greaterThanFive));

// refactor your "every" function so that it uses the built-in "reduce" method.

function every(arr, callback){
 	return arr.reduce( function (acc, curr){
    return acc && callback(curr);
  }, true)
}


// define a function "fastCache" that takes one argument, a function, and returns a function. When invoked, fastCache creates a cache that tracks calls to the returned function, where each input is associated with its output. Every subsequent call to that returned function with the same argument is returned directly from the cache instead of invoking the function again.

//takes in callback

//creates cache to track the numCalls to the returned function
//each input is associated with its output
//
//every time we run the callback, we want to return the results into the cache
//instead of recalling the callback

//return a function

function fastCache(callback){
  let cache;
  return callback(num){
    cache = num;
    return cache;  	
  }  
}

let returnFunc = fastCache(distanceFrom10);







// // define a function "fastCache" that takes one argument, a function, and returns a function. When invoked, 
// fastCache creates a cache that tracks calls to the returned function, where each input is associated with its output. 
// Every subsequent call to that returned function with the same argument is returned directly from the cache instead 
// of invoking the function again.

//takes in a function
//returns a function
//creates a cache, cache is an object that tracks outputs from callback function
//
  
function fastCache(callback){
    let cache = {};
    return function (input){
        if(cache[input]){
            return cache[input]
        } else {
            cache[input] = callback(input)
        }
    }
}

  const returnFunc = fastCache(distanceFrom10);
  console.log('log return func', returnFunc(12));
  