// const numbers=[1,2,4,8];
// const sum=numbers.reduce((num1,num2)=>{
//     console.log(num1,num2);
//      return num1+num2;
// });
// console.log(sum);

//Output:
// 1 2
// 3 4
// 7 8
// 15



// const numbers=[1,2,4,8];
// const sum=numbers.reduce((num1,num2)=>{
//     console.log(num1,num2);
// });

//Output:
// 1 2
// undefined 4
// undefined 8


const numbers=[1,2,4,8];
const sum=numbers.reduce((num1,num2)=>{
     return num1+num2;
});
console.log(sum);

//Output:  15

