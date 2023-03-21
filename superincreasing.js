function Superincreasing(arr) { 
    let superincreasing = true;
    let sum = arr[0];
    for (let number = 1; number < arr.length; number++) {
        if (arr[number] <= sum) {
            superincreasing = false;
        }
        sum = sum + arr[number];
    }
// code goes here  
    return superincreasing; 
}
console.log(Superincreasing([1, 3, 6, 13, 54]));   
console.log(Superincreasing([1, 2, 3, 4]));
console.log(Superincreasing([1, 2, 5, 10])); 
// keep this function call here 
console.log(Superincreasing(readline()));