function count_same_elements(collection) {
  //在这里写入代码
  count = {}
  collection.forEach(element => {
    if (element.length > 1) {
      var ar = element.split('-');
      count[ar[0]] = Number(ar[1]);
    } else {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  });
  return object_to_array(count);

  function object_to_array(obj) {
    var a = new Array;
    for (var i in obj) {
      a.push({
        'key': i,
        'count': obj[i]
      })

    }
    return a;
  }
}

module.exports = count_same_elements;
