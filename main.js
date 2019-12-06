'use strict'
{
  let i = 0;
  
  const showTime = () => {
    console.log(new Date());
    i++;
    if (i > 2) {
      clearInterval(timerId);
    }
  }

  // setInterval(関数, ミリ秒);
  // setInterval() は、関数を渡してあげて、ミリ秒を渡すと、「この関数の処理をこのミリ秒間隔で繰り返し実行してくれる」という命令。
  // setInterval(showTime, 1000); //止める処理が必要

  let timerId = setInterval(showTime, 1000);

  // ※setInterval() は、きっちりこの間隔(今回の場合1000ミリ秒)で実行しようとするので、もしこちらの処理に時間がかかってしまう場合、前の処理が終わっていなくても次の処理を実行しようとする。その結果、システムに負荷をかけてしまうこともあるので注意。

};
