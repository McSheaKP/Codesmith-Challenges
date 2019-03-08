function copyArrayAndDivideBy2(array){
	let output = [];
	for(let i =o; i < array.length; i++){
		output.push(array[i]/2)
	}
	return output;
}

const myArray = [1,2,3]
let result = copyArrayAndDivideBy2(myArray);

//The above example does not prevent us from reusing code


//Here we are defining a function that takes an array and another variable we are
//calling callback

//
function copyArrayAndManipulate(array, callback){
	let output = [];
	for(let i = 0; i < array.length; i++){
		output.push(callback(array[i]))
	}
	return output
}

function divideBy2(num){
	return num / 2;
}

copyArrayAndManipulate(myArray, divideBy2)