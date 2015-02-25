'use strict';

var React = require('react');
var merge = require('lodash.merge');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'TextInput',
  mixins: [StyleMixin],
  css: css,

  focus: function() {
    this.refs.node.focus();
  },
  blur: function() {
    this.refs.node.blur();
  },
  getValue: function() {
    return this.refs.node.value;
  },
  setValue: function(val) {
    this.refs.node.value = val;
  },

  render: function() {
    var props = merge({
      className: 'text-input-component',
      type: 'text',
      ref: 'node'
    }, this.props);

    return DOM.input(props, this.props.children);
  }
});