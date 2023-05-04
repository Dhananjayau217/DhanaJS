let array=[10,20,30,40,50,60,70,80];
for(var i=0;i<array.length;i++){
    setTimeout(()=>{
        console.log(array[i]);
    },1000);
}
//Output:here print undefined because array[i] means out of index of array i.e;array[8] means not a index size
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined


let array1=[10,20,30,40,50,60,70,80];
for(let i=0;i<array1.length;i++){
    setTimeout(()=>{
        console.log(array1[i]);
    },1000);
}
//Output:blocking 1 sec and print
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80


// let array3=[10,20,30,40,50,60,70,80];
// for(const i=0;i<array3.length;i++){
//     setTimeout(()=>{
//         console.log(array3[i]);
//     },1000);
// }

//Output:error because const is block scope keyword we cannot reassign the variable
//Assignment to constant variable.


