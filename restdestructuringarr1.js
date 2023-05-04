//destructuring array

let sample=function(...params){
    console.log("====",params);
    let [num1,num2,num3]=params
    console.log("num1==",num1);
    console.log("num2==",num2);
    console.log("num3==",num3);
}
sample(1,2,3);
/*Output:

==== [ 1, 2, 3 ]
num1== 1
num2== 2
num3== 3
*/