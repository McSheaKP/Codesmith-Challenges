// Create a function censor that accepts no arguments. 
// censor will return a function that will accept either two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, 
// for future use. When one string is given, the returned function will return the same string, 
// except all instances of a first string (of a saved pair) will be replaced with the second string 
// (of a saved pair).

// ADD CODE HERE

//input accepts no arguments
//returns a fucntion with two parameters
    //one or two strings
//when one string given, return the same string
//note: except replace all instances of the first string with the second string

function censor(){
    let pairStrings = {};
    return function(str1 , str2){
        if(str2){
            pairStrings[str1] = str2;
        } else {
            let arr1 = str1.split(/([_\W])/)
            arr1 = arr1.map(index => {
                if(pairStrings[index]){
                    index = pairStrings[index];
                    
                }
                return index;
            })
            return arr1.join('');
        }
    }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
    // should log: 'The slow, brown fox jumps over the lazy cats.'