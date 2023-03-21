function SwapCase(str) { 
    let s = "";
    for (let number = 0; number < str.length; number++) {
        let c = str[number].charCodeAt();
        //if the character is in uppercase
        if (c >= 65 && c <= 90) {
            //convert it to lowercase
            s = s + str[number].toLowerCase();
        } else {
            //else convert it to uppercase
            s = s + str[number].toUpperCase();
        }

    }
    // code goes here  
    return s; 

}
console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));
console.log(SwapCase("Hello World"));
// keep this function call here 
console.log(SwapCase(readline()));