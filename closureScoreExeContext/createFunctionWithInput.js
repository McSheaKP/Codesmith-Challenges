// Create a function createFunctionWithInput that accepts one input 
// and returns a function. When that created function is called, 
// it should return the input that was passed to createFunctionWithInput 
// when it was created.

//create functionWithInput ( oneinput)
function createFunctionWithInput(input){
    const x = input;
  function returnInput(){
      return x;
  }
  return returnInput;
}
    //function that creates function
        //returns input
//returns a function

// UNCOMMENT THESE TO TEST YOUR WORK!
// const sampleFunc = createFunctionWithInput('sample');
// console.log(sampleFunc()); // should log: 'sample'
// const helloFunc = createFunctionWithInput('hello');
// console.log(helloFunc()); // should log: 'hello'