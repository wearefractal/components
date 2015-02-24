'use strict';

var React = require('react');
var DOM = React.DOM;
var PropTypes = React.PropTypes;
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./header.styl');

module.exports = React.createClass({
  displayName: 'SplashHeader',
  propTypes: {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    background: PropTypes.string.isRequired,
    loginText: PropTypes.string.isRequired,
    loginUrl: PropTypes.string.isRequired
  },
  mixins: [StyleMixin],
  css: css,
  getDefaultProps: function() {
    return {
      background: '/img/bg.png',
      loginText: 'Login'
    };
  },
  login: function() {
    window.location = this.props.loginUrl;
  },
  render: function() {

    var loginButton = DOM.button({
      className: 'pure-button pure-button-primary login-button',
      onClick: this.login
    }, this.props.loginText);

    var subheader = DOM.div({
      className: 'statement-subtext'
    }, this.props.subheader);

    var downArrow = DOM.a({
      className: 'down-arrow',
      href: '#info'
    }, DOM.img({
      src: '/img/down.svg'
    }));

    var statement = DOM.div({
      className: 'statement-text'
    }, this.props.header, subheader);

    var statementContainer = DOM.div({
      className: 'statement-container'
    }, statement, loginButton);

    return DOM.div({
      className: 'header-component',
      style: {
        backgroundColor: '#333',
        backgroundImage: 'url(' + this.props.background + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }, statementContainer, downArrow);
  }
});
