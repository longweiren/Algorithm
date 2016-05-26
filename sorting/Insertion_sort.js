(function($global){
  /**
   * 插入排序(n^2)
   * @param arr 无序数组
   */
  $global.insertion_sort = function sort(arr) {
    var results = [];
    for(var i = 0; i < arr.length; i++){
      results = insert(results, arr[i]);
    }

    return results;
  }

  /**
   * 把元素插入升序数组
   * @param orderedArr 升序数组
   * @param element 待插入元素
   */
  function insert(orderedArr, element) {
    if(!orderedArr || orderedArr.length < 1) {
      return [element];
    }
    for(var i = 0; i < orderedArr.length; i++) {
      if(orderedArr[i] > element) {
        var right = orderedArr.splice(i);
        var left = orderedArr;

        return left.concat([element]).concat(right);
      }
    }
    return orderedArr.concat([element]);
  }
})(window);
