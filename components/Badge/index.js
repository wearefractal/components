'use strict';

var React = require('react');
var merge = require('lodash.merge');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');

var DOM = React.DOM;
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'Badge',
  mixins: [StyleMixin],
  css: css,
  propTypes: {
    count: PropTypes.number,
    background: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      style: {},
      background: '#e74c3c',
      color: '#fff'
    };
  },
  render: function() {
    return DOM.div({
      className: 'badge-component',
      style: merge(this.props.style, {
        background: this.props.background,
        color: this.props.color
      })
    }, this.props.count);
  }
});
