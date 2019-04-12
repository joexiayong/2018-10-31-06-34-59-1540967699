'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((accumulator, currentValue,index,a) => {
    return accumulator+currentValue
  })/collection.length

}

module.exports = compute_average;

