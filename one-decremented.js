function OneDecremented(str) { 
    let str1 = str.toString().split("");
    let previous = 0;
    for (let number = 1; number < str1.length; number++) {
        if (parseInt(str1[number]) + 1 === parseInt(str1[number - 1])) {
            previous++;
        }
    }
// code goes here  
    return previous; 

}
console.log(OneDecremented(5655984));    
console.log(OneDecremented(56));
console.log(OneDecremented(9876541110));
// keep this function call here 
//console.log(OneDecremented(readline()));