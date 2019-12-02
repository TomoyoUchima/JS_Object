'use strict'
{

const o = {
  a: 1,
  b: 2,
}

//指定したオブジェクトの、キーの一覧や値の一覧、もしくはすべてを配列として取得したい、という場合に使えるメソッド。

// console.log(Object.keys(o)); //キーの一覧を配列で取得 → ['a', 'b']
// console.log(Object.values(o)); //値の一覧を配列で取得 → ['1', '2']
// console.log(Object.entries(o)); //全体を配列で取得 → [['a', '1'], ['b', 2]]

Object.keys(o).forEach(key => {
  console.log(`${key}: ${o[key]}`)
});

};
