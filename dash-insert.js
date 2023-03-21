function DashInsert(str) { 
    let s = "";
    let str1 = str.toString().split("");
    s = s + str1[0];
    for (let number = 1; number < str1.length; number++) {
        if (parseInt(str1[number]) % 2 !== 0 && parseInt(str1[number - 1]) % 2 !== 0) {
            s = s + '-';
        }
        s = s + str1[number];
    }
// code goes here  
    return s; 
}
    
// keep this function call here 
console.log(DashInsert(99946));
console.log(DashInsert(56730));
// console.log(DashInsert(readline()));