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
    links: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
  },

  getInitialState: function() {
    return {
      toggleNav: false
    };
  },
  getDefaultProps: function(){
    return {
      links: []
    };
  },
  toggleNav: function() {
    this.setState({toggleNav: !this.state.toggleNav});
  },
  render: function(){
    var props = merge({
      className: 'navbar-component'
    }, this.props);

    var title = DOM.div({
      className: 'title'
    }, this.props.title);

    var button = DOM.div({
      className: 'navbar-button',
      onClick: this.toggleNav
    },
      DOM.div({className: 'bar'}),
      DOM.div({className: 'bar'}),
      DOM.div({className: 'bar'})
    );

    var self = this;
    var links = this.props.links.map(function(link) {
      link.key = link.to + '-nav-link';
      link.onClick = self.toggleNav;
      return Link(link, link.label);
    });

    var inner = DOM.div({
      className: 'inner',
      style: {
        maxHeight: this.state.toggleNav ? '600' : '0'
      }
    }, links);

    return DOM.nav(props, title, inner, button);
  }
});
