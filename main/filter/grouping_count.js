'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var count = new Object;
  collection.forEach(function (num, index, arr) {
    count[num] = 0
  })

collection.forEach(function (num, index, arr) {
  count[num] += 1
})
return count;
}

module.exports = grouping_count;
