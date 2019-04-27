// // define a function "passOne" which takes two arguments, 
// the first is any value and the second is an array of functions. 
// These functions can be considered tests, as they will all return either true or false. 
// "passOne" will iterate/loop through the array and pass the value to each function as an argument. 
// If at least one function(test) returns true, "passOne" will return true. 
// If none of the functions return true, "passOne" will return false.

function passOne( anyValue, arrayOfFunc){
    for(let i = 0; i < arrayOfFunc.length; i++){
        if(arrayOfFunc[i](anyValue) === true){
            return true;
        }
    }
    return false;
}
