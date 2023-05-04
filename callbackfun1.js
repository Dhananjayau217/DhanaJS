//Define three functions
// function first(){
//     console.log(1);
// }
// function second(){
//     console.log(2);
// }
// function third(){
//     console.log(3);
// }
// //Execute the functions
// first();
// second();
// third();

//Output:
// 1
// 2
// 3


//Define three example functions,but one of them contains asynchronous code
// function first(){
//     console.log(1);
// }
// function second(){
//     setTimeout(()=>{
//         console.log(2);
//     },0);
//     // console.log(2);
// }
// function third(){
//     console.log(3);
// }
// //Execute the functions
// first();
// second();
// third();

//Output:
// 1
// 3
// 2

//Define three functions
// function first(){
//     console.log(1);
// }
// function second(callback){
//     setTimeout(()=>{
//         console.log(2);
//         //Execute the callback function
//         callback()
//     },0);
// }
// function third(){
//     console.log(3);
// }
// //Execute the functions
// first();
// second(third);
  
//Output:
// 1
// 2
// 3

function callbackHell(){
    setTimeout(()=>{
        console.log(1);
        setTimeout(()=>{
            console.log(2);
            setTimeout(()=>{
                console.log(3);
            },500)
        },2000)
    },1000)
}
callbackHell();
//Output:
// 1  
// wait sometime
// 2
//wait sometime
// 3