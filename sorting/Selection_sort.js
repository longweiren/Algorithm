(function($global){
  /**
   * 选择排序(n^2)
   * @param arr 无序数组
   * @return 升序数组
   */
  $global.selection_sort = function sort(arr) {
    var results = [];

    // 每次选择数组中最小值放在有序数组末尾。
    while(arr.length > 1) {
      results.push(splice_min(arr));
    }

    return results.concat(arr);
  };

  /**
   * 选择数组中最小值，数组删除最小值
   * @param arr 无序数组
   */
  function splice_min(arr) {
    var minIdx = 0;
    for(var i = 1; i < arr.length; i++) {
      if(arr[i] < arr[minIdx]) {
        minIdx = i;
      }
    }

    return arr.splice(minIdx, 1);
  }
})(window);
