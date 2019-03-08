// Construct a function union that takes an input array of arrays, compares each array, 
// and returns a new flat array that contains all elements. If there are duplicate elements, 
// only add it once to the new array. 
// Preserve the order of the elements starting from the first element of the first input array. 
// BONUS - Use reduce!

// ADD CODE HERE

//input array of arrays
//
//remove duplicate elements
//returns flat array

function union (arr){
    const combinedArr = [].concat(...arr);
    const map = {};
    const outputArr = [];
    combinedArr.map( elem => {
        if(!map[elem]){
            map[elem] = 1
            outputArr.push(elem)
        }
    })
    return outputArr;
}

// Uncomment these to check your work!
var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]