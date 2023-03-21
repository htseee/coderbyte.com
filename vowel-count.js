function VowelCount(str) { 
    let vowels = 0;
    str = str.toLowerCase();
    for (let number = 0; number < str.length; number++) {
        if (str[number] === 'a' || str[number] === 'e' || str[number] === 'i' || str[number] === 'o' || str[number] === 'u') {
            vowels++;
        }
    }
// code goes here  
    return vowels; 

}
console.log(VowelCount("All cows eat grass and moo"));
console.log(VowelCount("hello"));
console.log(VowelCount("coderbyte"));
// keep this function call here 
console.log(VowelCount(readline()));