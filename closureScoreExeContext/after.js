// Write a function after that takes the number of times the callback needs 
// to be called before being executed as the first parameter and the callback 
// as the second parameter.

function after (numTimes, cb){
    const x = numTimes;
    let counter = 0;
    const callback = cb;

    const returnFunc = function (string) {
        counter++;
        if(counter < x ){
        } else {
            let output = callback(string);
            return output;
        }
    }

    return returnFunc;
}


const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed