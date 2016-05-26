;(function($global){

  /**
   * 快速排序无序数组(nlgn)
   * @param arr  待排序的无序数组
   * @param lev  帮助参数，用于计算打印缩进
   * @return 升序数组
   */
  $global.quick_sort = function sort(arr, lev){
    lev = lev?(lev + 1):2;
    $global.log($global.lpad(lev, '\t') + "sort:" + arr);

    if(!arr || arr.length <= 1) {
      // 数组已排好序
      return arr;
    }

    // 用于比较的值
    var comp = arr[0];

    // left 收集小于或等于比较值的元素
    // right收集大于比较值的元素
    var left = [], right = [];
    for(var i = 1; i < arr.length; i++) {
      if(arr[i] <= comp) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    // 对小数值集合做排序，结果为有序数组（且元素值均小与或等于比较值）
    var lsorted = (left.length <= 1)?left:sort(left, lev);
    $global.log($global.lpad(lev, '\t') + "sorted left:" + lsorted);

    // 对大数值集合做排序，结果为有序数组（且元素值均比比较值大）
    var rsorted = (right.length <= 1)?right:sort(right, lev);
    $global.log($global.lpad(lev, '\t') + "sorted right:" + rsorted);

    // 合并小数值集合、比较值、大数值集合，结果有有序数组。
    var merge_results = lsorted.concat([comp]).concat(rsorted);
    $global.log($global.lpad(lev, '\t') + "merge:" + lsorted + '-' + comp + '-' + rsorted);
    return lsorted.concat([comp]).concat(rsorted);
  };

})(window);
