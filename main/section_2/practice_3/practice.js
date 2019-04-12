function count_same_elements(collection) {
  //在这里写入代码

  count = {}
  collection.forEach(element => {
    if (element.length > 1) {
      var ar = element.split('');
      plus_count(ar[0], element.replace(/[^0-9]/ig,""));
    } else {
      plus_count(element, 1);
    }
  });
  return object_to_array(count);

  function plus_count(element, cnt) {
    cnt = Number(cnt);
    if (count[element]) {
      count[element] += cnt;
    } else {
      count[element] = cnt;
    }
  }

  function object_to_array(obj) {
    var a = new Array;
    for (var i in obj) {
      a.push({
        'name': i,
        'summary': obj[i]
      })

    }
    return a;
  }
}

module.exports = count_same_elements;
