'use strict'
{

const a = [1, 5, 10];

a.splice(2, 0, 6, 7); //a.splice(始める箇所, 削除する数, 追加する要素)
const removed = a.splice(1, 2); //5と6を削除

console.log(a);
console.log(removed); //削除した 5,6を取得

}
