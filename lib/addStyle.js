'use strict';

var addStyle = function(o, k, v) {
  if (typeof v === 'undefined') {
    return o;
  }

  if (Array.isArray(k)) {
    k.forEach(function(realK){
      addStyle(o, realK, v);
    });
    return o;
  }

  if (Array.isArray(v)) {
    v.forEach(function(realV){
      addStyle(o, k, realV);
    });
    return o;
  }

  var attempt = k;
  while (typeof o[attempt] !== 'undefined') {
    attempt = ' ' + attempt;
  }
  o[attempt] = v;
  return o;
};

module.exports = addStyle;
