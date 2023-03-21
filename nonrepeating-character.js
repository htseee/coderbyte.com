function NonrepeatingCharacter(str) { 
    let s = [];
    for (let count = 0; count < str.length; count++) {
        if (s[str[count]] === undefined) {
            s[str[count]] = 1;
        } else {
            s[str[count]] = s[str[count]] + 1;
        }
    }
    for (let count = 0; count < str.length; count++) {
        if (s[str[count]] === 1) {
            return str[count];
        }
    }
// code goes here  
    return str; 
}
console.log(NonrepeatingCharacter("agettkgaeee"));
console.log(NonrepeatingCharacter("abcdef"));
console.log(NonrepeatingCharacter("hello world hi hey"));
// keep this function call here 
// console.log(NonrepeatingCharacter(readline()));