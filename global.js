(function($global){
  var log = false;

  $global.lpad = function (lev, c) {
    c = c?c:'\t';

    var a = new Array(lev);
    return a.join(c);
  }

  $global.log = function (msg) {
    if(log) {
      console.log(msg);
    }
  }

  $global.clone = function(arr) {
    return arr.join(",").split(",");
  }
})(window);
