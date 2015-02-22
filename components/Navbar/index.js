'use strict';

var React = require('react');
var merge = require('lodash.merge');
var Router = require('react-router');
var Link = React.createFactory(Router.Link);
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');

var DOM = React.DOM;
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'Navbar',
  mixins: [StyleMixin],
  css: css,

  propTypes: {
    links: PropTypes.arrayOf(PropTypes.object)
  },

  getDefaultProps: function(){
    return {
      links: []
    };
  },

  render: function(){
    var props = merge({
      className: 'navbar-component'
    }, this.props);

    var links = this.props.links.map(function(link) {
      link.key = link.to + '-nav-link';
      return Link(link, link.label);
    });

    var inner = DOM.div({
      className: 'inner'
    }, links);

    return DOM.nav(props, inner);
  }
});