// let array4=[10,20,30,40,50];
// for(var i=0;i<array4.length;i++){
//     console.log(delay(i))
// }
// function delay(i){
//     setTimeout(()=>{
//         return delay(array4[i]);
//     },3000);
// }
//Output:
// undefined
// undefined
// undefined
// undefined
// undefined

// let array5=[10,20,30,40,50];
// for(var i=0;i<array5.length;i++){
//     // delay();
//     console.log(delay(i));
// }
// function delay(i){
//     setTimeout(()=>{
//         // return delay(array5[i]);
//          console.log(array5[i]);
//     },3000);
// }
// Output:
// undefined
// undefined
// undefined
// undefined
// undefined
// 10
// 20
// 30
// 40
// 50



var array = [10, 20, 30, 40, 50]
for(var i = 0; i < array.length; i++) {
  delay(i)
}
function delay(i) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}
// Output:
// 10
// 20
// 30
// 40
// 50
