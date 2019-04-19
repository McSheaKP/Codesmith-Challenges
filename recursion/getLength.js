//Get the length of an array using recursion without accessing its length property.



function getLength(array, counter = 0) {

    //base case is when we hit undefined
    if(array[counter] === undefined) return counter;
    //create new counter and increment
    const newCounter = counter + 1;
    return getLength(array, newCounter)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0