// use your "collect" to find the first digits of each number in numArr

function collect (array, callback){
    let newArray = [];
    for(i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray;
}

function firstDigit(value){
    let strValue = value.toString()
    return +(strValue[0])
}

var numArr = [11, 12, 13];

console.log(collect(numArr, firstDigit))