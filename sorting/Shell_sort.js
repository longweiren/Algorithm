(function($global){
  /**
   * 希尔排序(n^1.25)。把无序数组按数组索引的增量分为不同的组，对每个分组进行插入排序；缩小增量直至增量为1为止。
   * @param arr 无序数组
   */
  $global.shell_sort = function sort(arr){
    if(!arr || arr.length < 2) {
      return arr;
    }

    var d = Math.floor(arr.length / 2);
    return sort_d(arr, d);
  };

  function sort_d(arr, d) {
    // 外圈循环针对增量组
    for(var i = 0; i < d; i++) {
      // 内圈循环针对单个增量组内
      for(var j = i + d; j < arr.length; j = j + d) {
        // 增量组内进行插入排序
        /* 这种方式比较更多，交换更多
        for(var k = i; k < j; k = k + d) {
          if(arr[j] < arr[k]) {
            var tmp = arr[k];
            arr[k] = arr[j];
            arr[j] = tmp;
          }
        }*/
        for(var k = j - d; k >= i; k = k - d) {
          if(arr[k] > arr[k + d]) {
            var tmp = arr[k];
            arr[k] = arr[k + d];
            arr[k + d] = tmp;
          }
        }
      }
    }

    if(d == 1) {
      return arr;
    } else {
      return sort_d(arr, Math.floor(d / 2));
    }
  }
})(window);
