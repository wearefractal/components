'use strict';

var React = require('react');
var classes = require('classnames');
var merge = require('lodash.merge');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');

var DOM = React.DOM;
var PropTypes = React.PropTypes;

function preload(src){
  if (src) {
    new Image().src = src;
  }
}

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
  componentWillMount: function() {
    preload(this.props.src);
  },
  componentWillReceiveProps: function(props) {
    preload(props.src);
  },
  render: function() {
    var props = merge({
      className: classes('user-image-component', this.props.className),
      style: merge({
        background: '#cdcdcd url(' + this.props.src + ')'
      })
    }, this.props);

    return DOM.div(props, this.props.children);
  }
});
