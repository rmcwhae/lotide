const findKey = function(object, callback) {
  for (let item in object) {
    // console.log('stars is', object[item].stars);
    // console.log('callback of item is', callback(item));
    // console.log('item is', item);
    if (callback(object[item])) {//if callback becomes true, return the key of where it happened
      return item;
    }
  }
};

module.exports = findKey;