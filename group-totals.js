function GroupTotals(strArr) { 
    let key = [];
    let alphabetical = "";
    for (let count = 0; count < strArr.length; count++) {
        let pair = strArr[count].split(":");
        if (key.includes(pair[0]) === false) {
            key.push(pair[0]);
        }
    }
    key.sort();
    let s = 0;
    for (let count = 0; count < key.length; count++) {
        s = 0;
        for (let number = 0; number < strArr.length; number++) {
            let pair = strArr[number].split(":");
            if (pair[0] === key[count]) {
                s = s + parseInt(pair[1]);
            }
        }
        if (s !== 0) {
            if (alphabetical === "") {
                alphabetical = key[count] + ":" + s;
            } else {
                alphabetical = alphabetical + "," + key[count] + ":" + s;
            }
        }
    }
    return alphabetical; 
}
console.log(GroupTotals(["B:-1", "A:1", "B:3", "A:5"]));
console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]));
console.log(GroupTotals(["Z:0", "A:-1"]));
// keep this function call here 
console.log(GroupTotals(readline()));