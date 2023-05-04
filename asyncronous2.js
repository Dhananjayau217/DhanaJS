//callback function:one function using another function as a parameter is called as callback function

function showLoadingScreen(){
    console.log("1.Loading Screen Appered");
}
function hideLoadingScreen(){
    console.log("4.Loading Screen Hidden");
}
function getDataFromAPI(callback){
    console.log("2.start data pulling");
    setTimeout(()=>{
        console.log("3.Pulling data stop");
        callback();
},2000);
}
showLoadingScreen();
getDataFromAPI(hideLoadingScreen);  //using callback function

//Output:
// 1.Loading Screen Appered
// 2.start data pulling
// 3.Pulling data stop
// 4.Loading Screen Hidden

