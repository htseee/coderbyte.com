function TimeConvert(num) { 
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
// code goes here  
    return hours + ":" + minutes;
}
console.log(TimeConvert(63));
console.log(TimeConvert(126));
console.log(TimeConvert(45));
// keep this function call here 
console.log(TimeConvert(readline()));