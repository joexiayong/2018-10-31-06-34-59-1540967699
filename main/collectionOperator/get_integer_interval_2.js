'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var i = number_a
  var a = new Array
  if (number_a < number_b) {
    for (; i <= number_b; i++) {
      if (i % 2 == 0) {
        a.push(i);
      }
    }
    return a
  } else if (number_a > number_b) {
    for (; i >= number_b; i--) {
      if (i % 2 == 0) {
        a.push(i);
      }
    }
    return a
  } else if (number_a == number_b) {
    if (number_a > 5) {
      return [number_a]
    } else {
      return [];
    }
  }
}

module.exports = get_integer_interval_2;
