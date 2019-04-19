function factorial(num, output = 1) {
    if(num===0){return num}
    if(num===1){return output}
    const newOutput = output * num;
    const newNum = num - 1;
    return factorial(newNum, newOutput);
}


// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
 console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

//EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.