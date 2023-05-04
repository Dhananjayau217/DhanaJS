//spread operator:The spread operator (...) helps you expand iterables into individual elements.
//A spread operator is effective only when used within array literals, function calls, or initialized properties objects.


var myName=["dhana","pavan"];
var allNames=["umadevi",...myName,"pavan"];  //using spread operator we add/concat array into another array 
console.log(allNames);

//Output:
// [ 'umadevi', 'dhana', 'pavan', 'pavan' ]

let set1=[1,2,3,4,5];
let set2=[6,7,8,9,10];
let set3=[...set1,...set2,11,12,13,14,15];
let set4=[...set3,16,17,18,19,20];
let set5=[set1,set2];         //set5=== [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
console.log("set1===",set1);
console.log("set2===",set2);
console.log("set3===",set3);
console.log("set4===",set4);
console.log("set5===",set5);  //set5=== [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]


/*Output:
set1=== [ 1, 2, 3, 4, 5 ]
set2=== [ 6, 7, 8, 9, 10 ]
set3=== [
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
set4=== [
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
*/

let obj1={
    name:"dhana",
    age:"23"
};
let obj2={
    ...obj1,
    sex:"male"
};
console.log("obj1==",obj1);
console.log("obj2==",obj2);

/*Output:

obj1== { name: 'dhana', age: '23' }
obj2== { name: 'dhana', age: '23', sex: 'male' }

*/