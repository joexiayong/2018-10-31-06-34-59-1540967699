'use strict';
var number_map_to_word_over_26 = function(collection){
  function transNum(num){
    if(num<26){
      num+= 96;
      return String.fromCharCode(num)
    }else{
      var reminder=num%26+96;
      return String.fromCharCode(num/26+96)+String.fromCharCode(reminder)
    }
  }
  
  return collection.map(num=>transNum(num))
};

module.exports = number_map_to_word_over_26;
