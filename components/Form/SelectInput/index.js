'use strict';

var React = require('react');
var merge = require('lodash.merge');
var classes = require('classnames');
var StyleMixin = require('../../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'SelectInput',
  mixins: [StyleMixin],
  css: css,
  propTypes: {
    options: React.PropTypes.array
  },
  normalizeData: function(v) {
    return v;
  },
  render: function() {
    var options;
    if (this.props.options){
      options = this.props.options.map(function(option, key) {
        option.props.key = key;
        return DOM.option(option.props, option.content);
      });
    } else {
      options = this.props.children;
    }

    var props = merge({
      className: classes('select-input-component', this.props.className)
    }, this.props);

    return DOM.select(props, options);
  }
});