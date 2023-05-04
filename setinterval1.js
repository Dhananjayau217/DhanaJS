// let g = setInterval(function(){
//     //alert function is a popup box function.
//     console.log('hi this message from devil');
//     },3000);


// Output
// hi this message from devil
// hi this message from devil
// hi this message from devil
// hi this message from devil
// hi this message from devil
// ..............................
// ........................

    //used to clearInterval fuction.
    //  clearInterval(g);

//Using clearInterval() to stop the digital watch:
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString());
}

// function myStopFunction() {
  clearInterval(myInterval);
// }

// //Display time like a digital watch
// setInterval(myTimer, 1000);

// function myTimer() {
//     const date = new Date();
//     console.log(date.toLocaleTimeString());
// }


// Output:
// 10:57:07 am
// 10:57:08 am
// 10:57:09 am
// 10:57:10 am
// 10:57:11 am
// 10:57:12 am
// 10:57:13 am
// 10:57:14 am
// 10:57:15 am
// 10:57:16 am
// ..........
// ..........