// Write a function once that accepts a callback as input and returns a function. 
// When the returned function is called the first time, it should call the callback 
// and return that output. If it is called any additional times, 
// instead of calling the callback again it will simply return 
// the output value from the first time it was called.

//function 
//paramaters callback
//returns function

//on first call call the callback, return the output
//if called additional times, it should log the original amount

function once(input){
    let toggleCheck = true;
    const callback = input;
    let sum = 0;
    const addOnce = function(num){
        if(toggleCheck === true){
            toggleCheck = false;
            sum = callback(num);
            return sum;
        } else {
            return sum;
        }
    }
    return addOnce;
}

const addByTwoOnce = once(function(num) {
    return num + 2;
});


  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // console.log(addByTwoOnce(5));  //should log 7
  // console.log(addByTwoOnce(10));  //should log 7
  // console.log(addByTwoOnce(9001));  //should log 7