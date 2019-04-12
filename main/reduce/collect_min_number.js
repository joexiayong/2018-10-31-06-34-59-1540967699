'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function (accumulator, currentValue) {
    if (accumulator < currentValue) {
      return accumulator;
    };
  });
}

module.exports = collect_min_number;

