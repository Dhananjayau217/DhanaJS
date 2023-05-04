const points = [40, 100, 1, 5, 25, 10];
console.log("before sorting==",points);

function myFunction1() {
  points.sort();
  console.log("after sorting==",points)

function myFunction2() {
  points.sort(function(a, b){return a - b});
  console.log("in finction sorting===",points);
}
myFunction2();
}
myFunction1() ;

/*Output:
before sorting== [ 40, 100, 1, 5, 25, 10 ]
after sorting== [ 1, 10, 100, 25, 40, 5 ]
in finction sorting=== [ 1, 5, 10, 25, 40, 100 ]
*/