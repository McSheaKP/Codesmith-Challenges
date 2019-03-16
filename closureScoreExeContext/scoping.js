// Examine the code for the outer function. 
// Notice that we are returning a function 
// and that function is using variables that 
// are outside of its scope. 
// Uncomment those lines of code. 
// Try to deduce the output before executing.

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
   willCounter(); //should be 1
   willCounter(); //should be 2
   willCounter(); //should be 3
  
   jasCounter(); //should be 1
   willCounter(); //should be 4