'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var i = number_a;
  var a = new Array;
  if (number_a < number_b) {
    for (; i <= number_b; i++) {
      a.push(i)
    }
  } else if (number_a > number_b) {
    for (; i >= number_b; i--) {
      a.push(i)
    }
  } else if (number_a == number_b) {
    a=[number_a]
  }
  return a;
}

module.exports = get_integer_interval;

