function FindIntersection(strArr) { 
    let s = "false";
    let array = strArr[0].split(', ');
    let number = strArr[1].split(', ');
    for (let countArray = 0; countArray < array.length; countArray++) {
        for (let countNumber = 0; countNumber < number.length; countNumber++) {
            if (array[countArray] === number[countNumber]) {
                if (s === "false") {
                    s = array[countArray];    
                } else {
                    s = s + "," + array[countArray];    
                }
            }
        }
    }
    return s; 
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
// keep this function call here 
// console.log(FindIntersection(readline()));