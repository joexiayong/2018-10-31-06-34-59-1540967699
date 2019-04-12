'use strict';

function collect_max_number(collection) {
  //在这里写入代码
return collection.reduce(function(accumulator, currentValue){
  if(accumulator < currentValue){
    return currentValue
  };
});
}

module.exports = collect_max_number;
