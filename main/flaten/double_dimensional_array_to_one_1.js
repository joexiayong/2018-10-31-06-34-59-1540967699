'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var i,j;
  var a=[];
  for (i=0;i<collection.length;i++){
    if(collection[i] instanceof Array){
      for(j=0; j<collection[i].length;j++){
        a.push(collection[i][j])
      }
    }else{
      a.push(collection[i])
    }
  }
  return a;
}

module.exports = double_to_one;
