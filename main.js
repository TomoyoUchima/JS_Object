'use strict'
{

const d = new Date();
// console.log(d); //Fri Dec 06 2019 13:49:21 GMT+0900 (日本標準時)

console.log(d.getFullYear());
console.log(d.getMonth()); // 1月 - 12月 → 0 -11
console.log(d.getDate());
console.log(d.getDay()); // 日曜 - 土曜 → 0 - 6
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

console.log(d.getTime()); //UTC 1970/01/01 00:00:00
// → 1970/01/01 00:00:00 の基準日から現在日時までの経過ミリ秒が表示される
};
