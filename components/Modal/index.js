'use strict';

var React = require('react');
var merge = require('lodash.merge');
//var styles = require('./index.styl');
var DOM = React.DOM;

module.exports = React.createClass({
  displayName: 'Modal',

  render: function(){
    var props = merge({
      className: 'modal-component'
    }, this.props);

    return DOM.div(props, this.props.children);
  }
});