'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  function transfer(num) {
    var alphabet = 'abcde'
    return alphabet.charAt(num - 1)
  }
  var i;
  var a = new Array;
  if (number_a < number_b) {
    for (i = number_a; i <= number_b; i++) {
      a.push(transfer(i))
    }
  } else if (number_a>number_b) {
    for (i=number_a;i>=number_b;i--){
      a.push(transfer(i))
    }
  }else if (number_a==number_b){
    a = [transfer(number_a)]
  }
  return a;
}



module.exports = get_letter_interval;
