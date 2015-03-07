'use strict';

var React = require('react');
var merge = require('lodash.merge');
var StyleMixin = require('../../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'SelectInput',
  mixins: [StyleMixin],
  css: css,

  focus: function() {
    this.getDOMNode().focus();
  },
  blur: function() {
    this.getDOMNode().blur();
  },
  normalizeData: function(v) {
    return v;
  },

  render: function() {
    var props = merge({
      className: 'select-input-component',
    }, this.props);

    return DOM.select(props, this.props.children);
  }
});