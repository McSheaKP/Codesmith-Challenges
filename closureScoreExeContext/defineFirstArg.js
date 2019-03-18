// Create a function defineFirstArg that accepts a function and an argument. 
// Also, the function being passed in will accept at least one argument. 
// defineFirstArg will return a new function that invokes the passed-in 
// function with the passed-in argument as the passed-in function's first argument. 
// Additional arguments needed by the passed-in function will need to be passed into the returned function.


//input function
    //func will take at least one argument

//returns a new func that invoakes passed in function


function defineFirstArg(cb, arg1){
    const arg2 = arg1;
    const callback = cb;
    const returnFunc = function(arg){
        const output = callback(arg2, arg)
        return output
    }
    return returnFunc;
}



// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15