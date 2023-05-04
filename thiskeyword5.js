let person={
    name:"dhana",
    id:94,
    college:"svce",
    sample:function(){
         console.log("inside this==",this.name);
         return this;
    }
}
console.log(person.sample());
console.log(this);


/*output:

inside this== dhana
{ name: 'dhana', id: 94, college: 'svce', sample: [Function: sample] }
{}

*/
