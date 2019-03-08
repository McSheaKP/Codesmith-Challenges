// Write a function disemvowel that takes in a string and 
// returns a new string with all vowels removed.

function disemvowel(string) {
	// your code here...
	let newString = '';
	for(let i = 0; i < string.length; i++){
	  
	  if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u' && string[i] !== 'y' && string[i] !== 'A' && string[i] !== 'E' && string[i] !== 'I' && string[i] !== 'O' && string[i] !== 'U' && string[i] !== 'Y'){
		newString += string[i];
	  }
	}
	  return newString;
  }


  //Alternative presented solution

  function disemvowel(string){
	  vowels = {
		  a: true,
		  e: true,
		  i: true,
		  o: true,
		  u: true,
	  }
	  letter = string[i].toLowerCase();

	  for(let i = 0; i < string.length; i++){
		  if(!vowels[letter]){
			
		  }
	  }
  }
  