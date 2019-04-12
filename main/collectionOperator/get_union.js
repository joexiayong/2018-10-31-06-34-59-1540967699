'use strict';

function get_union(collection_b, collection_a) {
  //在这里写入代码
  var i, j;
  var a = collection_b
  var existence;
  for (i = 0; i < collection_a.length; i++) {
    existence = 0;
    for (j = 0; j < collection_b.length; j++) {
      if (collection_a[i] == collection_b[j]) {
        existence = 1
      }

    }
    if (!existence) {
      a.push(collection_a[i])
    }
  }
  return a;
}

module.exports = get_union;

