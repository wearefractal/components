'use strict';

var React = require('react');
var DOM = React.DOM;
var PropTypes = React.PropTypes;

var Header = React.createFactory(require('./Header'));
var Info = React.createFactory(require('./Info'));
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');

module.exports = React.createClass({
  displayName: 'SplashComponent',
  mixins: [StyleMixin],
  css: css,
  propsTypes: {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    background: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })),
    loginText: PropTypes.string.isRequired,
    loginUrl: PropTypes.string.isRequired
  },
  render: function() {

    var header = Header({
      header: this.props.header,
      subheader: this.props.subheader,
      background: this.props.background,
      loginText: this.props.loginText,
      loginUrl: this.props.loginUrl
    });

    var info = Info({
      items: this.props.info
    });
    return DOM.div({
      className: 'splash-component'
    }, header, info);
  }
});
