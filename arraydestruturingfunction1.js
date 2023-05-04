//array destructuring in functions

let sample=function(...details){
    console.log(details);
    let [name,collage]=details;    
    console.log("name==",name);
    console.log("collage",collage);
    return;
}
sample("dhana","svce","infosys","mysore");



/*Output:

[ 'dhana', 'svce', 'infosys', 'mysore' ]
name== dhana
collage svce

*/