'use strict';

var React = require('react');
var merge = require('lodash.merge');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');

var DOM = React.DOM;
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'UserImage',
  mixins: [StyleMixin],
  css: css,
  propTypes: {
    src: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      style: {},
      src: 'http://www.gravatar.com/avatar/0?d=mm&s=300'
    };
  },
  render: function() {
    return DOM.div({
      className: 'user-image-component',
      style: merge(this.props.style, {
        background: 'url(' + this.props.src + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    });
  }
});
