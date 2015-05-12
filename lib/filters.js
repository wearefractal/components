'use strict';

var b64 = require('Base64');

var wrapDX = function(str) {
  return 'progid:DXImageTransform.Microsoft.'+str;
};

var createDXFilter = function(filters) {
  var allFilters = [];

  if (filters.blur) {
    allFilters.push(wrapDX('Blur(PixelRadius='+filters.blur+')'));
  }
  if (filters.brightness) {
    allFilters.push(wrapDX('Light()'));
    // TODO: el needs manipulation as well
  }

  if (filters.backgroundImage) {
    allFilters.push(wrapDX(
      'AlphaImageLoader(src="' +
      filters.backgroundImage +
      '", sizingMethod="scale")'
    ));
  }

  var out = allFilters.join(' ');
  if (out.length !== 0) {
    return '\''+out+'\'';
  } else {
    return;
  }
};

var inlineSVG = function(svg) {
  var prefix = 'data:image/svg+xml;base64,';
  var content = '<svg height="0" xmlns="http://www.w3.org/2000/svg">';
  content += svg.filters;
  content += '</svg>';
  return 'url("'+prefix+b64.btoa(content)+'#'+svg.id+'")';
};

var createSVGFilter = function(filters, opt) {
  var id = 'filter-'+filters.blur+'-'+filters.brightness;
  var content = '<filter id="'+id+'">';
  if (filters.blur) {
    content += '<feGaussianBlur stdDeviation="'+filters.blur+'"/>';
  }
  if (filters.brightness) {
    content += '<feComponentTransfer>';
    content += '<feFuncR type="linear" slope="'+filters.brightness/2+'"/>';
    content += '<feFuncG type="linear" slope="'+filters.brightness/2+'"/>';
    content += '<feFuncB type="linear" slope="'+filters.brightness/2+'"/>';
    content += '</feComponentTransfer>';
  }
  content += '</filter>';
  var svg = {
    id: id,
    filters: content
  };

  if (opt && opt.inline) {
    return inlineSVG(svg);
  }
  return svg;
};

var createModernFilter = function(filters) {
  var allFilters = [];

  if (filters.blur) {
    allFilters.push('blur('+filters.blur+'px)');
  }
  if (filters.brightness) {
    allFilters.push('brightness('+filters.brightness+')');
  }

  var out = allFilters.join('');
  if (out.length !== 0) {
    return out;
  } else {
    return;
  }
};

var filters = {
  modern: createModernFilter,
  dx: createDXFilter,
  svg: createSVGFilter
};

module.exports = filters;
