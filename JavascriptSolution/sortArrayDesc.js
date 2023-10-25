//B. Perform sorting of an array in descending order.

let numbers = [2 ,8, 1, 3, 7, 5];
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);

function sortArray(){
    var arr = ['john', 'don', 'mohn', 'sunny'];
    arr.sort();
    //Desending order
    arr.reverse();
    return arr;
}
console.log(sortArray());
