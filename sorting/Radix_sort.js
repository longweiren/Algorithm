(function($global){
  /**
   * 基数排序(n),与桶排序类似.
   *
   * 把数据从低位开始分成N桶(N桶有大小区别)，连接各个子桶；进位重新把数组分配到N桶，再连接各个子桶；直到最高位位置。
   * 例如我们有个2位数数字数组，我们可以先设置10个桶，分别存放[10, 19], [20, 29], ...[90, 99]范围内的值。

   * 第一步按个位数把数组元素分配到桶，再连接桶。再按十位数把数组元素分配到桶（之前要清空桶）。最后连接桶得到结果。
   * @param arr 无序数组
   */
  $global.radix_sort = function sort(arr){
    var results1 = [], results2 = [], results3 = [],
        results4 = [], results5 = [], results6 = [],
        results7 = [], results8 = [], results9 = [];

    // 把数组元素分配到对应的子桶
    for(var i = 0; i < arr.length; i++) {
      switch(true) {
        case (arr[i] & 0x0f >= 1 && arr[i] < 2):
          results1.push(arr[i]);
          break;
        case (arr[i] >= 2 && arr[i] < 3):
          results2.push(arr[i]);
          break;
        case (arr[i] >= 3 && arr[i] < 4):
          results3.push(arr[i]);
          break;
        case (arr[i] >= 4 && arr[i] < 5):
          results4.push(arr[i]);
          break;
        case (arr[i] >= 5 && arr[i] < 6):
          results5.push(arr[i]);
          break;
        case (arr[i] >= 6 && arr[i] < 7):
          results6.push(arr[i]);
          break;
        case (arr[i] >= 7 && arr[i] < 8):
          results7.push(arr[i]);
          break;
        case (arr[i] >= 8 && arr[i] < 9):
          results8.push(arr[i]);
          break;
        case (arr[i] >= 90 && arr[i] < 100):
          results9.push(arr[i]);
          break;
      }
    }

    // 使用其他排序算法分别对子桶进行排序
    results1 = bucket_in_sort(results1);
    results2 = bucket_in_sort(results2);
    results3 = bucket_in_sort(results3);
    results4 = bucket_in_sort(results4);
    results5 = bucket_in_sort(results5);
    results6 = bucket_in_sort(results6);
    results7 = bucket_in_sort(results7);
    results8 = bucket_in_sort(results8);
    results9 = bucket_in_sort(results9);

    // 连接各个子桶
    return results1.concat(results2).concat(results3)
      .concat(results4).concat(results5).concat(results6)
      .concat(results7).concat(results8).concat(results9);
  };
})(window);
