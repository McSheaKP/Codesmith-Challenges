// Construct a function multiMap that will accept two arrays - 
// an array of values and an array of callbacks. multiMap will return 
// an object whose keys match the elements in the array of values. 
// The corresponding values that are assigned to the keys will be arrays 
// consisting of outputs from the array of callbacks, where the input to each callback is the key.


//Input two arrays
//arr 1 - values
//arr 2 - callbacks
//Output (return) - Object
//object whos key =  each value in arr1
//object whos values = each value is the out of the callbacks

//Questions is each indexed value mean't to coorespond to each output callback
//each key should go through each callback function, the value should be an array of outputs

//loop through each element in arr1
//for each individual loop through, run the index through the callback
//

function multiMap(arr1, arr2){
    const returnObj = {};
    for(let i = 0; i < arr1.length; i++){
        const key = arr1[i];
        const valueArr = [];
        for(let y = 0; y < arr2.length; y++){
            let callback = arr2[y];
            valueArr.push(callback(key));
        }
        if(!returnObj[key]){
            returnObj[key] = valueArr;
        }
    }
    return returnObj;
}


// ADD CODE HERE

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); 
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }, 'Beer', 'beerbeer'] }