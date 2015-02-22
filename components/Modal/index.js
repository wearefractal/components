'use strict';

var React = require('react');
var merge = require('lodash.merge');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'Modal',
  mixins: [StyleMixin],
  css: css,

  render: function(){
    var props = merge({
      className: 'modal-component'
    }, this.props);

    return DOM.div(props, this.props.children);
  }
});