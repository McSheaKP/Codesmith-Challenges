// // define a function "firstDigit" that takes a positive integer and 
// returns its first digit (passing 301 returns the number 3)

function firstDigit(value){
    let strValue = value.toString()
    return +(strValue[0])
}

console.log(firstDigit(301))