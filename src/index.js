const inArray = (prop, array) => array.indexOf(prop) !== -1;

export default (obj, exclude = []) => {
  if (obj === null || typeof obj != 'object') return obj;
  const copy = {};
  for (let attr in obj) {
    if (!inArray(attr, exclude)) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) copy[attr] = obj[attr];
    }
  }
  return copy;
};
