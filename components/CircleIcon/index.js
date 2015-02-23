'use strict';

var React = require('react');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'CircleIcon',
  mixins: [StyleMixin],
  css: css,
  propTypes: {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    background: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      background: '#7f8c8d'
    };
  },
  render: function() {

    var IconNumber = DOM.span({
      className: 'text'
    }, this.props.text);

    return DOM.div({
      className: 'circleicon-component',
      style: {
        background: this.props.background
      }
    }, IconNumber);
  }
});
