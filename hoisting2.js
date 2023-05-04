//Hoisting: Hoisting is javascript defaults behavior of moving declerations to the top.
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared. 



sample();
function sample(){
    var a=10;
    var b=20;
    console.log(a);  //10
    console.log(b);   //20
}  
