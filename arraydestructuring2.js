//array destructuring

let details=["dhana","svce","infosys","mysore"];
// let [names,collage,company,city_of]=["dhana","svce","infosys","mysore"];
// console.log(names,collage,company,city_of);   //dhana svce infosys mysore
let [names,collage,...otherDetails]=["dhana","svce","infosys","mysore"];   //this is array destructuring
console.log(names,collage,otherDetails);
let [company,city]=otherDetails;                  //array destructuring
console.log(company,city);


//Output:
//    dhana svce [ 'infosys', 'mysore' ]
//    infosys mysore