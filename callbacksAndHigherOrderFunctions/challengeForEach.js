//create a function forEach
//takes an array and callback
function forEach(array, callback){
    let newArr = [];
  for(let i = 0; i < array.length; i++){
      newArr.push(callback(array[i]));
  }
    return newArr;
}
function minus2(index){
  return index -2;
}
function map(array){
    let newArr; 
  return forEach(array, minus2)
}

//Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]