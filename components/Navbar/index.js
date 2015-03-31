'use strict';

var React = require('react');
var merge = require('lodash.merge');
var Router = require('react-router');
var Link = React.createFactory(Router.Link);
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');
var Badge = React.createFactory(require('../Badge'));
var DOM = React.DOM;
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'Navbar',
  mixins: [StyleMixin],
  css: css,

  propTypes: {
    links: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    logo: PropTypes.shape({
      src: PropTypes.string,
      href: PropTypes.string
    })
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
      className: 'navbar-component',
      style: this.props.style
    }, this.props);

    var logo = Link({
      to: this.props.logo.href,
    },
      DOM.img({
        className: 'logo',
        src: this.props.logo.src
    }));

    var title = DOM.div({
      className: 'title'
    }, this.props.logo.src ? logo : this.props.title);

    var button = DOM.div({
      className: 'navbar-button',
      onClick: this.toggleNav
    },
      DOM.div({className: 'bar'}),
      DOM.div({className: 'bar'}),
      DOM.div({className: 'bar'})
    );
    var links = this.props.links.map(function(link) {
      link.key = link.to + '-nav-link';
      link.onClick = this.toggleNav;
      var badge = link.badge != null && link.badge.count != null ? Badge(link.badge) : null;
      return Link(link, link.label, badge);
    }, this);

    var inner = DOM.div({
      className: 'inner',
      style: {
        maxHeight: this.state.toggleNav ? '600' : '0'
      }
    }, links);

    return DOM.nav(props, title, inner, props.children, button);
  }
});
