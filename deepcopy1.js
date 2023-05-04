var details_array=[1,2,3,4,5];
console.log("details_array====",details_array);
 var numbers_array=[...details_array];
console.log("numbers_array==",numbers_array);
numbers_array.push(6,7,8,9,10);
console.log("deepcopy ====",numbers_array);
console.log("original array===",details_array);


/*Output:

details_array==== [ 1, 2, 3, 4, 5 ]
numbers_array== [ 1, 2, 3, 4, 5 ]
deepcopy ==== [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
original array=== [ 1, 2, 3, 4, 5 ]

*/


