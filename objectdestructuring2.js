let obj_details={
    "name":"dhana",
    "collage":"svce",
    "company":"infosys",
    "location":"mysore"
};
let {name,company,...other_details}= obj_details;
console.log("name==",name);
console.log("company==",company);
console.log("other_details===",other_details);
let {collage,location}=other_details;
console.log("collage===",collage);
console.log("location==",location);


/*Output:

name== dhana
company== infosys
other_details=== { collage: 'svce', location: 'mysore' }
collage=== svce
location== mysore

*/