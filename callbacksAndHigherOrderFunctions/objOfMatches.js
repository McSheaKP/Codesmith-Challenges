// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it. To build the object, 
// objOfMatches will test each element of the first array using the callback 
// to see if the output matches the corresponding element (by index) of the second array.
//  If there is a match, the element from the first array becomes a key in an object, 
//  and the element from the second array becomes the corresponding value.


//input to function two arrays and a callback
//builds an object and returns that


//example if arr[0] === arr1[0] then make the {arr[0] : arr1[0}

function objOfMatches(arr1, arr2, callback){
    returnObj = {}
    for(let i = 0; i < arr1.length; i++){
        const checkIndex = callback(arr1[i])
        console.log(arr1[i])
        console.log(checkIndex)
        if(checkIndex === arr2[i]){

            returnObj[arr1[i]] = arr2[i];
        }
    }
    return returnObj;
}



//Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }