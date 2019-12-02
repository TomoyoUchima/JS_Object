'use strict'
{

const a = [1, 2, 5, 10];

// const b = []
// a.forEach(item => {
// b.push(item * 2);  
// });
// console.log(b);


//map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。

// const b = a.map(item => {
//   return item * 2;
// });

// const b = a.map(item => item * 2); //return1行のためこの書き方でok。

//filter() メソッドは、引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成します。
const b = a.filter(item => item % 2 === 0);

console.log(b);

};
