// filter
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result_array=array.filter(function (element,index) {
    // console.log("element===", element%2===0);
    if(element%2===0){
        // console.log(element);
        return element;
    }

});

console.log(result_array);

//Output:
// [ 2, 4, 6, 8, 10 ]
