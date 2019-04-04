const inArray = (prop, array) => array.indexOf(prop) !== -1;

export default (obj, exclude = []) => {
  if (obj === null || typeof obj != 'object') return obj;
  var copy = {};
  for (let attr in obj) {
    if (!inArray(attr, exclude)) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
  }
  return copy;
};
