// function WordCount(str) { 
//     let words = 0;
//     for (let number = 0; number < str.length; number++) {
//         if (str[number] === ' ') {
//             words++;
//         }
//     }
// // code goes here  
//     return words + 1; 
// }
function WordCount(str) {
    return str.split(' ').length;
}
console.log(WordCount("Never eat shredded wheat or cake"));
console.log(WordCount("Hello World"));
console.log(WordCount("one 22 three"));
// keep this function call here 
console.log(WordCount(readline()));