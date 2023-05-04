// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


const ages = [32, 33, 16, 40];
const result = ages.map(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result); 

//Output: [ true, true, false, true ]