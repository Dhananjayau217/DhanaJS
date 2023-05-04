// let sample=function(params1,params2,params3){
//     console.log("=====",params1,params2,params3);   //===== 1 2 3
//     return;
// }
// sample(1,2,3);



let sample=function(...params){
    console.log("====",params);    //==== [ 1, 2, 3 ]
    return;
}
sample(1,2,3);