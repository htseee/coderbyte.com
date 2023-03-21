function BitwiseOne(strArr) { 
    let s = "";
    for (let number = 0; number < strArr[0].length; number++) {
        if (strArr[0][number] === '0' && strArr[1][number] === '0') {
            s = s + '0';
        } else {
            s = s + '1';
        }
    }
// code goes here  
    return s; 
}
console.log(BitwiseOne(["100", "000"]));
console.log(BitwiseOne(["00011", "01010"]));
console.log(BitwiseOne(["1001", "0100"]));
// keep this function call here 
console.log(BitwiseOne(readline()));