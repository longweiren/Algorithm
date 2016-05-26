(function($global){
  /**
   * 基数排序(n),与桶排序类似.
   *
   * 把数据从低位开始分成N桶(N桶有大小区别)，连接各个子桶；进位重新把数组分配到N桶，再连接各个子桶；直到最高位位置。
   * 例如我们有个2位数数字数组，我们可以先设置10个桶，分别存放位值为[1, 9]范围内的值。

   * 第一步按个位数把数组元素分配到桶，再连接桶(这是地位已经排好序)。再按十位数把数组元素分配到桶（之前要清空桶。此时，同一桶内十位数相同，个位数已排好序）。最后连接桶得到结果。
   * @param arr 无序数组
   */
  $global.radix_sort = function sort(arr){
    return sort_by_radix(arr, 1);
  };

  function sort_by_radix(arr, radix) {

    var results1 = [], results2 = [], results3 = [],
        results4 = [], results5 = [], results6 = [],
        results7 = [], results8 = [], results9 = [];

    // 把数组元素分配到对应的子桶
    for(var i = 0; i < arr.length; i++) {
      var radix_value = arr[i].charAt(radix) - 0;

      switch(true) {
        case (radix_value === 1):
          results1.push(arr[i]);
          break;
        case (radix_value === 2):
          results2.push(arr[i]);
          break;
        case (radix_value === 3):
          results3.push(arr[i]);
          break;
        case (radix_value === 4):
          results4.push(arr[i]);
          break;
        case (radix_value === 5):
          results5.push(arr[i]);
          break;
        case (radix_value === 6):
          results6.push(arr[i]);
          break;
        case (radix_value === 7):
          results7.push(arr[i]);
          break;
        case (radix_value === 8):
          results8.push(arr[i]);
          break;
        case (radix_value === 9):
          results9.push(arr[i]);
          break;
      }
    }

    // 连接各个子桶
    arr = results1.concat(results2).concat(results3)
      .concat(results4).concat(results5).concat(results6)
      .concat(results7).concat(results8).concat(results9);

    radix = radix - 1;

    if(radix < 0) {
      // 已经比较过最高位
      return arr;
    } else {
      // 进位比较
      return sort_by_radix(arr, radix);
    }
  }
})(window);
