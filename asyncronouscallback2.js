for(var i=0;i<10;i++){               //it is global scope so we can print out side of block
    // console.log(i);
    setTimeout(()=>{
        console.log(i);
    },2000);

}
// console.log("outofblock",i);

//Output:
//print the asyncronous code it block or waits 2 sec for printing
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

for(let i=0;i<10;i++){           //it is block scope thats why we cannot print out side of block code  
    // console.log(i);
    setTimeout(()=>{
        console.log(i);
    },2000);

}
//Output:
// 0  block to print 2 sec
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// for(const i=0;i<10;i++){           //it is block scope thats why we cannot print out side of block code  
//     // console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     },2000);

// }
//output:error
//Assignment to constant variable.we cannot reassign or redeclare the variable when const is used 