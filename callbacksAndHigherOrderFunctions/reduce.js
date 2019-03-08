function reduce(array, callback, initial){
	if( Array.isArray(array) ) {
		let acc; 
		if(initial === undefined){
			acc = array[0];
			array = array.slice(1);
		} else {
			acc = initial;
		}
		array.array.forEach(function(el, index, arr){
			acc = callback(acc, el, index, arr)
		});
		return acc;
	}
	return "first element should be an array";
}