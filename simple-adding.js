function SimpleAdding(num) { 
    let sum = 0;
    for (let number = 1; number <= num; number++) {
        sum = sum + number;
    }
    return sum; 
  }
     
  // keep this function call here 
  console.log(SimpleAdding(readline()));