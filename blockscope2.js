//block scope          block={}


// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

/*Output:

10
20
30
*/


{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);   //10
    console.log(b);   //20
    console.log(c);   //30
}
    console.log(a);   //10
    // console.log(b); //throws error b is not defined
    // console.log(c);  //throws error c is not defined
