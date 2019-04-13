// Write a function called runInOrder that accepts as arguments in this order -

// an array of functions
// an array of numbers representing times in milliseconds
// runInOrder should execute the functions in order, with the 
// corresponding numbers in milliseconds being the time to wait from the previous invocation.
//  For example -


// Add code here

// /* Uncomment the following lines and click 'run' to test your work */

function runInOrder(arrFunc, arrNum){    
    let i = 0;
    const arrLength = arrNum.length;
    setInterval(() => {
        if(i < arrLength){
            arrFunc[i]()
        } else {
            clearInterval();
        }
        i++;
    }, (arrNum[i]));
}

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
