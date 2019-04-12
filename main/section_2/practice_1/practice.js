function count_same_elements(collection) {
  //在这里写入代码
  count = {}
  collection.forEach(element => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });
  var a = new Array
  for (var i in count) {
    a.push({
      'key': i,
      'count': count[i]
    })
 
  }
  return a;
}

module.exports = count_same_elements;
