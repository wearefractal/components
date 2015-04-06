'use strict';

var React = require('react');
var classes = require('classnames');
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./index.styl');
var addStyle = require('../../lib/addStyle');
var filters = require('../../lib/filters');

var modernVendors = [
  'filter', 'WebkitFilter', 'MozFilter',
  'MsFilter', 'OFilter'
];
var geckoVendors = ['filter'];
var dxVendors = ['filter', 'MsFilter'];

var Background = React.createClass({
  displayName: 'Background',
  mixins: [StyleMixin],
  css: css,
  propTypes: {
    color: React.PropTypes.string,
    image: React.PropTypes.string,
    blur: React.PropTypes.number,
    brightness: React.PropTypes.number
  },

  render: function () {
    var filterProps = {
      blur: this.props.blur,
      brightness: this.props.brightness
    };

    var styles = {
      top: -this.props.blur * 1.5,
      left: -this.props.blur * 1.5,
    };

    if (this.props.color) {
      styles.backgroundColor = this.props.color;
    }

    if (this.props.image) {
      styles.backgroundImage = 'url('+this.props.image+')';

      // old internet explorer
      var dxImgFilters = filters.dx({
        backgroundImage: this.props.image
      });
      addStyle(styles, dxVendors, dxImgFilters);
    }

    // current firefox and other gecko browsers (old chrome included)
    if (filterProps.blur || filterProps.brightness) {
      // current firefox and other gecko browsers (old chrome included)
      var geckoSVG = filters.svg(filterProps, {inline: true});
      addStyle(styles, geckoVendors, geckoSVG);

      // internet explorer
      var dxFilters = filters.dx(filterProps);
      addStyle(styles, dxVendors, dxFilters);
      // TODO: do stuff to the el for brightness

      // chrome, opera, new firefox
      var modernValue = filters.modern(filterProps);
      addStyle(styles, modernVendors, modernValue);
    }

    return React.DOM.div({
      className: classes('background-component', this.props.className),
      ref: 'background',
      style: styles
    });
  }
});

module.exports = Background;
