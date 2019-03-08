//Construct a function intersection that compares input arrays and returns a new array with 
//elements found in all of the inputs. BONUS - Use reduce!

// ADD CODE HERE
//takes in three arrays
//returns only elements found in all three arrays;

// [1,2,3....]
// [4,5,6]
// [7,8,9]

//the first array

// function intersection(arr){
//     let returnArr = [];
//     for(let i = 0; i < arr[0].length; i++){
//         let arrIndex = arr[0][i];
//         console.log("i in this function: ", i)
//         if(arr[1].indexOf(arrIndex) !== -1 && arr[2].indexOf(arrIndex)!== -1){
            
//             // let index = arr[0].indexOf(arr[0][i])
//             let index = i;
//             returnArr.push(arr[0][index])
//         }
//     }
//     console.log('returnArr: ', returnArr)
//  return returnArr;
// }

// // Uncomment these to check your work!
var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];
// //console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


function intersection(arr) {
    const combinedArr = [].concat(...arr);
    

    const map = {};

    combinedArr.map(elem => {
        if(map[elem]){
            map[elem] += 1;
        } else {
            map[elem] = 1;
        }
    });

    const result = [];

    Object.keys(map).map(elem => {
        if(map[elem] === arr.length){
            result.push(parseInt(elem));
        }
    })

    return result;
}

console.log(intersection([arr1, arr2, arr3]))