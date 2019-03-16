// Create a function createFunction that creates and returns a function. 
// When that newly created function is called, 
// it should return the string 'hello world'.

function createFunction(){
    const helloWorld = function(){
        return 'Hello world';
    }
    return helloWorld;
}

// ADD CODE HERE

// Uncomment these to check your work!
// const myFunction = createFunction();
// console.log(myFunction()); //should log: 'hello world'