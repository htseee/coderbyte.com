// function DistinctCharacters(str) { 
//     let distinct = [];
//     for (let count = 0; count < str.length; count++) {
//         if (distinct.includes(str[count]) === false) {
//             distinct.push(str[count]);
//         }
//     }
// // code goes here  
//     return distinct.length >= 10 ? true : false; 
// }
function DistinctCharacters(str) {
    let distinct = [];
    for (let count = 0; count < str.length; count++) {
        if (distinct.some(element => element === str[count]) === false) {
            distinct.push(str[count]);
        }
    }
    return distinct.length >= 10 ? true : false;
}
console.log(DistinctCharacters("abc123kkmmmm?"));
console.log(DistinctCharacters("12334bbmma:=6"));
console.log(DistinctCharacters("eeeemmmmmmmmm1000"));
// keep this function call here 
console.log(DistinctCharacters(readline()));