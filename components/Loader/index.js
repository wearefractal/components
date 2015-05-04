'use strict';

var React = require('react');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');

var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'Loader',
  mixins: [StyleMixin],
  css: css,
  getDefaultProps: function() {
    return {
      style: {}
    };
  },
  render: function() {
    return DOM.div({
      className: 'loader-component',
      style: this.props.style
    });
  }
});
