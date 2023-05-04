//rest operator declare at the last parameter of functioncall
//The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.
//The text after the rest operator references the values you wish to encase inside an array. You can only use it before the last parameter in a function definition.

let sample=function(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}
sample(1,2,3,4,5,6);

/*Output:

1
2
[ 3, 4, 5, 6 ]

*/


let sample1=(x,...rest)=>console.log(rest,"x==",x); //[ 20, 30, 40, 50, 60 ] x==10
sample1(10,20,30,40,50,60);