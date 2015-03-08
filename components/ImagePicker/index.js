'use strict';

var React = require('react');
var DOM = React.DOM;
var PropTypes = React.PropTypes;
var resizeImage = require('../../lib/resizeImage');
var css = require('../../lib/StyleMixin');
var input = React.createFactory(require('../Form/TextInput'));

module.exports = React.createClass({
  css: css,
  propTypes: {
    buttonContent: PropTypes.string,
    dimensions: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    usePhoto: PropTypes.func
  },

  grabPhoto: function(e){
    var self = this;
    resizeImage(e.target.files[0], {width: 600, height: 600}, function(err, img){
      if(err){
        //TODO: Handle err
      }
      self.props.usePhoto(img);
    });
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
    }, this.props.buttonContent);

    return DOM.div({
      className: this.props.className || 'image-picker-component',
    }, photoInput, photoInputButton);
  }
});