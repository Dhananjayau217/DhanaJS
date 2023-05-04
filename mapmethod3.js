let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result_array = array.map(function (element, index) {

    if(index === array.length-1){
        return element * 100;
    }else{
        return element * 2;
    }

});
console.log(result_array);
/*Output:
[
    2,    4,  6,  8,
   10,   12, 14, 16,
   18, 1000
 ]
 */



 //  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let result_array =array.map(element,index=>element * 100);
// //     if(index === array.length-1){
// //         // return element * 100;
// //     // }else{
// //         // return element * 2;
// //     }
// //  }
//  console.log(result_array);