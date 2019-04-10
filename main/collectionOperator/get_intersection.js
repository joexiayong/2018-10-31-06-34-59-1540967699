'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var a = new Array;
  var i,j;
  for(i=0;i<collection_b.length;i++){
    for(j=0;j<collection_a.length;j++){
      if(collection_a[j] == collection_b[i]){
        a.push(collection_a[j])
      }
    }
  }
  return a;
}

module.exports = get_intersection;
