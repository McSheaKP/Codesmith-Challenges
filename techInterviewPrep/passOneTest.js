// use your "passOne" to determine if the number 113 is negative,
// even, OR has 1 as the first digit. Then test 213.



function passOne( anyValue, arrayOfFunc){
    for(let i = 0; i < arrayOfFunc.length; i++){
        if(arrayOfFunc[i](anyValue) === true){
            return true;
        }
    }
    return false;
}

function isNeg (value){
    if (value < 0){
        return true;
    } else {
        return false;
    }
}

function isEven (value){
    if (value % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function hasOne (value){
    if (value.toString()[0] === "1"){
        return true;
    } else {
        return false;
    }
}

const arrOfFunc = [isNeg, isEven, hasOne];

console.log(passOne(213, arrOfFunc));

