'use strict'
{

// console.log(Math.PI);

// console.log(Math.random()); // 0 .... 0.9999 (0以上1未満のランダムな数値を生成)

// Math.random() ->  0 .... 0.9999
// Math.random() * 6 ->  0 .... 5.9999
// Math.random() * 6 + 1 ->  0 .... 6.9999
// Math.floor(Math.random() * 6 + 1) ->  1 .... 6

console.log(Math.floor(Math.random() * 6 + 1));
};
