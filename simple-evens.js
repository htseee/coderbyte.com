// function SimpleEvens(num) { 
//     // num % 2 -- even 
//     // num % 3
//     // num % 4

//     // num % 5
//     // num % 6
//     // num % 7
//     // num % 8
//     // num % 9
//     // num % 10
//     // 462225 % 10 = 5
//     // 462225 / 10 = 46222
//     while (num !== 0) {
//         let number = num % 10;
//         // console.log(num + " " + number);
//         if (number % 2 != 0) {
//             return "false";
//         }
//         num = Math.floor(num / 10);
//     }    
//     return "true";
//   }
function checkEven(num) {
    if (num === 0) {
        return true;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// function SimpleEvens(num) {
//     let str = num.toString().split("");
//     let str1 = str.filter(checkEven);
//     return str.length == str1.length ? true : false;
// }
// function SimpleEvens(num) {
//     return (num.toString().split("").every(number => (number % 2 === 0))) ? true : false;
// }
function SimpleEvens(num) {
    let str = num.toString().split("");
    let state = true;
    str.forEach(number => number % 2 !== 0 ? state = false : null);
    return state;
}
console.log(SimpleEvens(10000));
console.log(SimpleEvens(4602225));
console.log(SimpleEvens(22222222202222));
console.log(SimpleEvens(20864646452));
// keep this function call here 
//console.log(SimpleEvens(readline()));