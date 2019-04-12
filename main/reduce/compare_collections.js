'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var flag = 1
  collection_a.forEach((element,index) => {
    if(element!=collection_b[index]){
      flag = 0
    }
  });
  if(flag == 1){
    flag = true
  }else{
    flag=false
  }
  return flag
}

module.exports = compare_collections;


