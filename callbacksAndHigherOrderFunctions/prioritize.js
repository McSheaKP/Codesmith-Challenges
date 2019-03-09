// Create a function prioritize that accepts an array and a callback. 
// The callback will return either true or false. prioritize will iterate through 
// the array and perform the callback on each element, and return a new array, 
// where all the elements that yielded a return value of true come first in the array, 
// and the rest of the elements come second.


//INputs array and callback
//array = series of values
//callback - returns true or false

//return an array with all elements in the array that returned true
//then all elemnts that returned false

function prioritize(array, callback){
    const trueArr = []
    const falseArr = [];
    for(let i = 0; i < array.length; i++){
        const output = callback(array[i])
        if(output === false){
            falseArr.push(array[i])
        } else {
            trueArr.push(array[i])
        }
    }
    return trueArr.concat(falseArr)
}

// ADD CODE HERE

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']