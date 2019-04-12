'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var a = collection.filter(num => num % 2 == 0);
  return a[a.length-1]
}

module.exports = find_last_even;
