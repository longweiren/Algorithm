(function($global, bucket_in_sort){
  /**
   * 桶排序(n)
   * 把数据分成N桶(N桶有大小区别)，对各个桶各自排序，最后连接各个桶成为一个有序的新桶。
   * 例如我们有个数组，数组元素大小在[10, 99]之间。我们可以先设置10个桶，分别存放[10, 19], [20, 29], ...[90, 99]范围内的值。我们把原数组元素分配到10个桶后，分别对10个桶排序；最后连接10个桶成为一个有序的新数组.
   * @param arr 无序数组
   */
  $global.bucket_sort = function sort(arr){
    var results1 = [], results2 = [], results3 = [],
        results4 = [], results5 = [], results6 = [],
        results7 = [], results8 = [], results9 = [];

    // 把数组元素分配到对应的子桶
    for(var i = 0; i < arr.length; i++) {
      switch(true) {
        case (arr[i] >= 10 && arr[i] < 20):
          results1.push(arr[i]);
          break;
        case (arr[i] >= 20 && arr[i] < 30):
          results2.push(arr[i]);
          break;
        case (arr[i] >= 30 && arr[i] < 40):
          results3.push(arr[i]);
          break;
        case (arr[i] >= 40 && arr[i] < 50):
          results4.push(arr[i]);
          break;
        case (arr[i] >= 50 && arr[i] < 60):
          results5.push(arr[i]);
          break;
        case (arr[i] >= 60 && arr[i] < 70):
          results6.push(arr[i]);
          break;
        case (arr[i] >= 70 && arr[i] < 80):
          results7.push(arr[i]);
          break;
        case (arr[i] >= 80 && arr[i] < 90):
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
})(window, merg_sort);
