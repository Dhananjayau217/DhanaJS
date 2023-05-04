//asynchronous means the code will be block or wait some time to print
//callback function is a function ,one function passes as parameter of another function is called as callback function 
console.log("person1");
console.log("person2");
setTimeout(()=>{                     //asynchronous code
    console.log("person3");
},3000);
console.log("person4");


//Output:
// person1
// person2
// person4   after 3sec person3 will be printed
// person3