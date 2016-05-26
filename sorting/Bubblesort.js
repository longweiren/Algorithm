(function($global){
  /**
   * 冒泡排序(n^2)
   * @param arr 无序数组
   * @return 升序数组
   */
  $global.bubble_sort = function sort(arr) {
    if(!arr || arr.length < 2) {
      return arr;
    }

    var length = arr.length;
    for(var i = 0; i < length - 1; i++) {

      // 从待比较位置开始（比较位置之前为已排序结果），选择比较位置之后的小于比较位置元素的数组元素与比较位置交换
      for(var j = i + 1; j < length; j++) {
        if(arr[j] < arr[i]) {
          var tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
        }
      }
    }
    return arr;
  };
})(window);
