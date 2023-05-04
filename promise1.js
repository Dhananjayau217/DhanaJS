//promise
//initialize a promise

const promise=new Promise((resolve,reject)=>{})
console.log(promise);  //Output:  Promise { <pending> }

const promise2=new Promise((resolve,reject)=>{
    resolve("promise resolved status");
})
console.log(promise2);    //Output: Promise { 'promise resolved status' }

promise2.then((response)=>{
    console.log(response);  //Output:promise resolved status
})

//Output:
// Promise { <pending> }
// Promise { 'promise resolved status' }
// promise resolved status

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resolving as asychronous request '),2000})
})
console.log(promise3);
//log the result
promise3.then((response)=>{
    console.log(response);
})

//Output:  
// Promise { <pending> }
// resolving as asychronous request

//chain a promise 

// promise
// .then((fitstResponse)=>{
//     //return a new value for the next then
//     return firstResponse + 'And chaining!'
// })
// .then((secondResponse)=>{
//     console.log(secondResponse)
// })

