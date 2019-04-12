'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result;

  function cmp(a, b) {
    return a - b;
  }
  collection.sort(cmp);
  var len = collection.length;
  if (len % 2 == 0) {
    result = (collection[len / 2] + collection[len / 2 - 1]) / 2;
    if (len < 6) {} else {}
  } else {
    result = collection[Math.floor(len / 2)]
  }

  return result;
}

module.exports = compute_median;
