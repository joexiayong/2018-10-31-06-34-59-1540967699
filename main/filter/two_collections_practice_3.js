'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(num => {
    for (var i = 0; i < collection_b.length; i++) {
      if (num % collection_b[i] == 0) {
        return num
      }
    }
  }
  )
}

module.exports = choose_divisible_integer;
