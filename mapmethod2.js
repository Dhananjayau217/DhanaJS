// map
// note: it will push result into new array


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 console.log(array.reverse());

// multiply last element in the array with 100 remeaning elements 
// should multiply with 2 only

let result_array = [];

for (let i = 0; i < array.length; i++) {

    if (i == array.length - 1) {
        result_array.push(array[i] * 100);
    }else{
        result_array.push(array[i] * 2);
    }

}

console.log(result_array);

/*Output:
E:\ES6>node mapmethod2.js
[
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1
]
[
  20, 18, 16, 14,  12,
  10,  8,  6,  4, 100
]
*/
