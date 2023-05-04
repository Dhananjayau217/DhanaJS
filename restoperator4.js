//define function with two regular patameters and one rest parameter

function myBio(firstName,lastName,...otherInfo){
    return otherInfo;
}
console.log(myBio("dhananjaya","uppithi","MCA","SVCE","Male"));   //Output:[ 'MCA', 'SVCE', 'Male' ]


let sample=function(first,second,...numbers){
    console.log("first==",first);
    console.log("second==",second);
    console.log("numbers==",numbers);
}
sample(1,2,3,4,5,6,7,8,9,10);    

//Output:
// first== 1
// second== 2
// numbers== [
//   3, 4, 5,  6,
//   7, 8, 9, 10
// ]