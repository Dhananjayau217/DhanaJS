// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const arr=[1,2,3,4,5,6,7];
const newArr=arr.map(a=>a%2===0);
console.log(newArr);   

/*Output:
[
  false, true,
  false, true,
  false, true,
  false
]
*/