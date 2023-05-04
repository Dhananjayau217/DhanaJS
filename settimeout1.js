//Using setTimeout() function

console.log(1);
console.log(2);
setTimeout(()=>{
    console.log(3);
},3000)
console.log(4);

// Output:
// 1
// 2
// 4
// 3   //after 3000 milliseconds it prints