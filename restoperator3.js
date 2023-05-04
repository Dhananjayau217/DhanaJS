
//rest operator is last parameter of functioncall

let funName=function(first,second,third,...remaining){
    // console.log(remaining);
    return remaining;
}
console.log(funName(1,2,3,4,5,6,7));


// Output:
// [ 4, 5, 6, 7 ]