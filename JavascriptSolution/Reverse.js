// A. Take a sentence as an input and reverse every word in that sentence. 
// a. Example - This is a sunny day > shiT si a ynnus yad.

// function reverseString(str){
//     return str.split(substr).reverse().join(subStr);
//  }

function reverseString(str) {
    let words = str.split("").reverse().join("");
    let reverseSentence = words.split(" ").reverse().join(" ");
    return reverseSentence;
}
 console.log(reverseString("This is a sunny day"));


//  let words = str.split("").reverse().join("");
//  let reverseSentence = words.split(" ").reverse().join(" ");
//  console.log(reverse);