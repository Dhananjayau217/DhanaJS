//function scope            function funName(){}

// var a=10;
// let b=20;
// const c=30;
// myName();
// function myName(){
//     console.log(a);   //10   
//     console.log(b);    //20
//     console.log(c);    //30
// }

//     console.log(a);   //10
//     console.log(b);    //20
//     console.log(c);   //30



myName();
function myName(){
    var a=10;
    let b=20;
    const c=30;
    console.log(a);   //10   
    console.log(b);    //20
    console.log(c);    //30
}

    console.log(a);   //a is not defined
    console.log(b);    //b is not defined
    console.log(c);   //c is not defined

