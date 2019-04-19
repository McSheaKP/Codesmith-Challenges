// Write a function that takes an input character and returns that character repeated 
// 5 times using recursion. For example, if the input is 'g', then the 
// output should be 'ggggg'.



let counter = 0;
function repeater(char) {
	if (counter === 4){
    counter = 0;
    return char;
  };
  counter++;
  char = char[0] + char;
  return repeater(char);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));