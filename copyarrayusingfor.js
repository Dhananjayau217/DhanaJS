var first_array=[1,2,3,4,5];
var second_array=[6,7,8,9,10];
var third_array=[11,12,13,14,15];
var result=[];
for(let i=0;i<first_array.length;i++){
    result.push(first_array[i]);
}
for(let i=0;i<second_array.length;i++){
    result.push(second_array[i]);
}
for(let i=0;i<third_array.length;i++){
    result.push(third_array[i]);
}
console.log("result==",result);
console.log("firstarray==",first_array);

/*Output:

result== [
    1,  2,  3,  4,  5,  6,
    7,  8,  9, 10, 11, 12,
   13, 14, 15
 ]
 firstarray== [ 1, 2, 3, 4, 5 ]
 
 */