let person={
    name:"dhana",
    id:94,
    college:"svce",
    sample:function(){
        console.log("inside function==",this);
    }

}
console.log(person);



//Output: { name: 'dhana', id: 94, college: 'svce', sample: [Function: sample] }



// let person1={
//     name:"dhana",
//     id:94,
//     college:"svce",
//     sample:function(){
//         console.log("inside function==",this);
//         return this;
//     }
// };
// console.log(person1.sample());
// console.log("outside function==",this);

/*Output:
inside function== { name: 'dhana', id: 94, college: 'svce', sample: [Function: sample] }
{ name: 'dhana', id: 94, college: 'svce', sample: [Function: sample] }
outside function== {} //identify global object
*/