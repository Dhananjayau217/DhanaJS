//Ascending Order

let arry = [4, 8, 3, 8, 6, 9, 2, 1, 12, 13, 14, 15];
for (let i = 0; i < arry.length; i++)
    for (let j = 0; j < i; j++)
        if (arry[i] < arry[j]) {
            let result = arry[i];
            arry[i] = arry[j];
            arry[j] = result;
        }
console.log(arry);

// Output:
// [
//    1,  2, 3,  4,  6,
//    8,  8, 9, 12, 13,
//   14, 15
// ]

//Descending order
let arry1 = [4, 8, 3, 8, 6, 9, 2, 1, 12, 13, 14, 15];
for (let i = 0; i < arry1.length; i++)
    for (let j = 0; j < i; j++)
        if (arry1[i] > arry1[j]) {
            let result = arry1[i];
            arry1[i] = arry[j];
            arry1[j] = result;
        }
console.log(arry1);

//Output:
    // [
    //   15, 8, 6, 3, 4,
    //    2, 8, 1, 1, 1,
    //    1, 1
    // ]
