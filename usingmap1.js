numbers_array=[10,20,30,40,50,60,70,80,90,100];
let new_numbers_array = numbers_array.map(function (value){
    return value*10;
});
console.log(new_numbers_array);

/*Ouput:
[
    100, 200, 300,
    400, 500, 600,
    700, 800, 900,
   1000
 ]
 */