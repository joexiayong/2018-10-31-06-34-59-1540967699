'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce((previous, current) => previous + current)
}

module.exports = calculate_elements_sum;
