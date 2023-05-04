//using filter() method
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.
const arr=[1,2,3,4,5,6,7];
const newArr=arr.filter(a=>a%2===0);
console.log(newArr);  

//Output:  [ 2, 4, 6 ] 


//using map()method

// const arr=[1,2,3,4,5,6,7];
// const newArr=arr.map(a=>a%2===0);
// console.log(newArr);   

/*Output:
[
  false, true,
  false, true,
  false, true,
  false
]
*/