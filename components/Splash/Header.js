'use strict';

var React = require('react');
var DOM = React.DOM;
var PropTypes = React.PropTypes;
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./header.styl');

module.exports = React.createClass({
  displayName: 'SplashHeader',
  propTypes: {
    hasInfo: PropTypes.bool.isRequired,
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

    var subheader = this.props.subheader ? DOM.div({
      className: 'statement-subtext'
    }, this.props.subheader): null;

    var downArrow = this.props.hasInfo ? DOM.a({
      className: 'down-arrow',
      href: '#info',
      dangerouslySetInnerHTML: {
        __html: '<?xml version="1.0"?> <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <polygon fill="#ffffff" points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " /> </svg>'
      }
    }) : null;

    var statementHeader = DOM.div({
      className: 'statement-header'
    }, this.props.header);

    var statement = DOM.div({
      className: 'statement-text'
    }, statementHeader, subheader);

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
