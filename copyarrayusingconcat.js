var first_array=[1,2,3,4,5];
var second_array=[6,7,8,9,10];
var third_array=[11,12,13,14,15];
var result=[];
result=result.concat(first_array,second_array,third_array);
console.log(result);
console.log(first_array);


/*Output:

[
    1,  2,  3,  4,  5,  6,
    7,  8,  9, 10, 11, 12,
   13, 14, 15
 ]
 [ 1, 2, 3, 4, 5 ]

 */
 