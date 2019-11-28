'use strict'
{

  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);
  
  let x = [1, 2];
  let y = x;  //xをコピーするのではなく、「xを参照する」という仕組みになる。
  x[0] = 5;
  console.log(x); //[5, 2]
  console.log(y); //[5, 2]

  // ※オブジェクトでは、変数がコピーされると、値そのものではなくてその値への参照がコピーされる。


}