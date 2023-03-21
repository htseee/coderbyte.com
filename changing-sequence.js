function ChangingSequence(arr) { 
    let s = arr[0] > arr[1] ? true : false;
    for (let number = 1; number < arr.length; number++) {
        if (!((arr[number] < arr[number - 1]) === s)) {
            return number - 1;
        }
    }
// code goes here  
    return -1; 
}
console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1]));
console.log(ChangingSequence([-4, -2, 9, 10]));
console.log(ChangingSequence([5, 4, 3, 2, 10, 11]));
// keep this function call here 
// console.log(ChangingSequence(readline()));