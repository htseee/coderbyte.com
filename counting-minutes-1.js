function CountingMinutesI(str) { 
    let pair = str.split("-");
    let time1 = pair[0].substr(0, pair[0].length - 2);
    let s1 = pair[0].substr(pair[0].length - 2, 2);
    let time2 = pair[1].substr(0, pair[1].length - 2);
    let s2 = pair[1].substr(pair[1].length - 2, 2);
    let time1h = parseInt(time1.split(":")[0]);
    let time1m = parseInt(time1.split(":")[1]);
    let time2h = parseInt(time2.split(":")[0]);
    let time2m = parseInt(time2.split(":")[1]);
    let time = 0;
    if (s1 === s2) {
        if (time2h < time1h || time2h === time1h && time2m < time1m) {
            time = 12 - time1h + 12 + time2h;
        } else {
            time = time2h - time1h;
        }
    } else {
        time = 12 - time1h;
        time = time + time2h;
    }
    time = time * 60;
    time = time + time2m;
    time = time - time1m;
// code goes here  
    return time; 
}
console.log(CountingMinutesI("9:00am-10:00am"));
console.log(CountingMinutesI("1:00pm-11:00am"));
console.log(CountingMinutesI("12:30pm-12:00am"));
console.log(CountingMinutesI("1:23am-1:08am"));
// keep this function call here 
// console.log(CountingMinutesI(readline()));