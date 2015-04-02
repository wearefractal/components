'use strict';

var React = require('react');
var classes = require('classnames');
var DOM = React.DOM;
var PropTypes = React.PropTypes;
var scaleImage = require('../../lib/scaleImage');
var css = require('../../lib/StyleMixin');
var input = React.createFactory(require('../Form/TextInput'));

module.exports = React.createClass({
  css: css,
  propTypes: {
    dimensions: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    onPhoto: PropTypes.func,
    onErrored: PropTypes.func
  },

  grabPhoto: function(e){
    var imageOpts = {
      el: document.createElement('canvas'),
      scale: this.props.scale,
      src: e.target.files[0]
    };
    scaleImage(imageOpts, function(err, img){
      if(err){
        return this.props.onErrored(err);
      }
      this.props.onPhoto(img);
    }.bind(this));
  },

  getPhoto: function(e) {
    e.preventDefault();
    this.refs.photoInput.getDOMNode().click();
  },

  render: function() {
    var photoInput = input({
      onChange: this.grabPhoto,
      ref: 'photoInput',
      type: 'file',
      accept: 'image/*',
      className: 'upload-photo',
      id: 'photo-input',
      hidden: true
    });

    var photoInputButton = DOM.button({
      className: 'upload-button',
      onClick: this.getPhoto,
    }, this.props.children);

    return DOM.div({
      className: classes(this.props.className, 'image-picker-component'),
    }, photoInput, photoInputButton);
  }
});
