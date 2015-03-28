'use strict';

var React = require('react');
var merge = require('lodash.merge');
var classes = require('classnames');
var StyleMixin = require('../../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'TextInput',
  mixins: [StyleMixin],
  css: css,
  getInitialState: function() {

  },
  normalizeData: function(v) {
    if (this.props.maxLength != null) {
      return v.slice(0, this.props.maxLength);
    }
    return v;
  },
  render: function() {
    var props = merge({
      className: classes('multiline-text-input-component', this.props.className)
    }, this.props);

    var counter = DOM.div({
      className: 'counter'
    }, props.maxLength - this.state.count.length);

    return DOM.textarea(props, counter);
  }
});