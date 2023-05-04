// forEach
// note: it won't create new array


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(function (element) {
        console.log(element);
        return element * 2;
    });
    console.log("result_array===", array);
    