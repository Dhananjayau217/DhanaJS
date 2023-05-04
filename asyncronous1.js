function showLoadingScreen(){
    console.log("1.Loading Screen Appered");
}
function hideLoadingScreen(){
    console.log("4.Loading Screen Hidden");
}
function getDataFromAPI(){
    console.log("2.start data pulling");
    setTimeout(()=>{
        console.log("3.Pulling data stop");
},2000);
}
showLoadingScreen();
getDataFromAPI();
hideLoadingScreen();

//Output:
// 1.Loading Screen Appered
// 2.start data pulling
// 4.Loading Screen Hidden
// 3.Pulling data stop
