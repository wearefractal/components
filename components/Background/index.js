'use strict';

var React = require('react');
var addStyle = require('../../lib/addStyle');
var filters = require('../../lib/filters');

var modernVendors = [
  'filter', '-webkit-filter', '-moz-filter',
  '-ms-filter', '-o-filter'
];
var geckoVendors = ['filter'];
var dxVendors = ['filter', '-ms-filter'];

var Background = React.createClass({
  displayName: 'Background',

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
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -100
    };

    if (this.props.color) {
      styles.backgroundColor = this.props.color;
    }

    if (this.props.image) {
      styles.backgroundImage = 'url('+this.props.image+')';
      styles.backgroundRepeat = 'no-repeat';
      styles.backgroundSize = 'cover';
      styles.backgroundPosition = '50%';

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
      className: this.props.className,
      ref: 'background',
      style: styles
    });
  }
});

module.exports = Background;
