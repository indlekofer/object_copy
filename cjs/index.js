"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var inArray = function inArray(prop, array) {
  return array.indexOf(prop) !== -1;
};

var _default = function _default(obj) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (obj === null || _typeof(obj) != 'object') return obj;
  var copy = {};

  for (var attr in obj) {
    if (!inArray(attr, exclude)) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
  }

  return copy;
};

exports.default = _default;