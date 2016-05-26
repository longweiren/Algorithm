(function($global){
  /**
   * 堆排序(选择排序的一种 nlgn)。表现为对优先队列的插入操作。
   * 优先队列有两个特性（以小根堆为例）：
   *    1: 父节点小于或等于子节点
   *    2: 左子树和右子树均为优先队列
   * @param arr 无序数组
   * @return 升序数组
   */
  $global.heap_sort = function sort(arr) {
    // results 为排序后的结果，是一个优先队列。
    var results = [];

    for(var i = 0; i < arr.length; i++) {
      add(results, arr[i]);
    }

    return results;
  }

  function add(priority_queue, element) {
    // 首先加入优先队列末尾
    var index = priority_queue.length;
    priority_queue[index] = element;

    if(index == 0) {
      return;
    }

    // 调整新节点到正确的位置
    adjustNode(priority_queue, index);
  }

  /**
   * @priority_queue 不完整的优先队列
   * @index 当前待调整的节点索引
   */
  function adjustNode(priority_queue, index) {
    // 与父节点比较
    var parentIndex = parseInt((index - 1) / 2);
    if(parentIndex < 0) {
      return;
    }

    var element = priority_queue[index];
    var parent = priority_queue[parentIndex];
    // 如果当前节点小于父节点，则父子交换
    if(element < parent) {
      // 交换父子节点
      priority_queue[index] = priority_queue[parentIndex];
      priority_queue[parentIndex] = element;

      index = parentIndex;
      adjustNode(priority_queue, index);
    }
  }
})(window);
