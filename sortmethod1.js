//  let numbers = [10, 15, 2, 6, 4, 100, 1000, 99, 66, 44];

//                                                              // result:[2,4,6,10,15,44,64,66,99,100,1000]


// let ascending= numbers.sort(function(a,b){
//     return a-b;
// });

// console.log(ascending[0]);  //2
// console.log(ascending[ascending.length-1]);//1000


let numbers = [30, 4, 7, 1, 6, 9, 5, 8, 2, 111, 100, 20];

let ascending = numbers.sort();

console.log(ascending);

//Output:
// E:\ES6>node sortmethod1.js
// [
//    1, 100, 111, 2, 20,
//   30,   4,   5, 6,  7,
//    8,   9
// ]

