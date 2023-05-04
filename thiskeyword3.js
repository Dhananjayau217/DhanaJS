let person={
    name:"dhana",
    id:94,
    college:"svce",
    sample:function(){
        console.log("inside function==",this);
        return this;
    },
    sample1(){
        return this;
    }
}
console.log(person.sample1());
console.log(person.sample());
console.log(this);

/*Output:
{
    name: 'dhana',
    id: 94,
    college: 'svce',
    sample: [Function: sample],
    sample1: [Function: sample1]
  }
  inside function== {
    name: 'dhana',
    id: 94,
    college: 'svce',
    sample: [Function: sample],
    sample1: [Function: sample1]
  }
  {
    name: 'dhana',
    id: 94,
    college: 'svce',
    sample: [Function: sample],
    sample1: [Function: sample1]
  }
  {}
  */