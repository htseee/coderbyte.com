function RemoveBrackets(str) { 
    let bracketOpen = 0;
    let removed = 0;
    for (let count = 0; count < str.length; count++) {
        if (str[count] === '(') {
            bracketOpen++;
        } else {
            if (bracketOpen === 0) {
                removed++;
            } else {
                bracketOpen--;
            }
        }
    }
    removed = removed + bracketOpen;
// code goes here  
    return removed; 
}
console.log(RemoveBrackets("(())()((("));
console.log(RemoveBrackets("(()("));
console.log(RemoveBrackets("(()))"));
// keep this function call here 
console.log(RemoveBrackets(readline()));