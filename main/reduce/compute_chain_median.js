'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  function cmp(a, b) {
    return a - b;
  }
  var a = collection.split('->').map(num => Number(num)).sort(cmp);
  var b = a.length;
  if (b % 2 == 0) {
    return (Number(a[b / 2]) + Number(a[b / 2 - 1])) / 2;
  } else {

    return a;
  }
}

module.exports = compute_chain_median;
