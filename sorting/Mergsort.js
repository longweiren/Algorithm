;(function($global){
  /**
   * 归并排序无序数组(nlgn)
   * @param arr 无序数组
   * @return 升序数组
   */
  $global.merg_sort = function sort(arr, lev) {
    if(!arr || arr.length <= 1) {
      // 数组已排好序
      return arr;
    }

    // 数组中位索引
    var mid = parseInt(arr.length / 2);
    var right = arr.splice(mid);
    var left = arr;

    // 对数组中为索引之前的子数组(不含中位索引元素)做归并排序，返回结果为有序数组
    var lsorted = sort(left, lev);

    // 对数组中为索引之后的子数组(含中位索引元素)做归并排序，返回结果为有序数组
    var rsorted = sort(right, lev);

    return merge(lsorted.concat(rsorted), 0, lsorted.length - 1,
      lsorted.length + rsorted.length -1); // merge results

    //return sort(arr, 0, arr.length - 1);
  }

  /**
   * arr[low, mid] is sorted;
   * arr[mid + 1, high] is sorted;
   * return results is sorted;
   */
  $global.merge = function m(arr, low, mid, high) {
    var left = low, right = mid + 1;
    var results = [];

    while(left <= mid || right <= high){
      if(left > mid) {
        results.push(arr[right++]);
      } else if(arr[left] < arr[right] || right > high) {
        results.push(arr[left++]);
      }
      else {
        results.push(arr[right++]);
      }
    }
    return results;
  }
})(window);

