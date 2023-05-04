//Arrow function

//1st method

let sample=(a,b)=>{
    return a+b;
}
console.log("firstmethod==",sample(1,2));     //3

//2nd method
let sample1=(a,b)=>a+b;
console.log("secondmethod==",sample1(1,2));    //3


let sample3=a=>a;
console.log("thirdmethod==",sample3(1));       //1