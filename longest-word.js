function LongestWord(sen) { 
    let words = sen.split(" ");
    let longest = 0;
    let longestw = "";
    for (let count = 0; count < words.length; count++) {
        if (!(words[count].includes('&') || words[count].includes('!') || words[count].includes('.') || words.includes(',') || words.includes('?') || words[count].includes('/') || words.includes(':') || words.includes(';'))) {
            if (longest < words[count].length) {
                longest = words[count].length;
                longestw = words[count];
            }
        }
    }
// code goes hre  
    return longestw; 
}
console.log(LongestWord("Hello world123 567"));
console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));
console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));
// keep this function call here 
// console.log(LongestWord(readline()));