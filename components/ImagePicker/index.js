'use strict';

var React = require('react');
var DOM = React.DOM;
var PropTypes = React.PropTypes;
var resizeImage = require('../');
var css = require('../../lib/StyleMixin');
var input = React.createFactory(require('../Form/TextInput'));

module.exports = React.createClass({
  css: css,
  propTypes: {
    dimensions: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    usePhoto: PropTypes.func
  },

  grabPhoto: function(e){
    resizeImage(e.target.files[0], {width: 600, height: 600}, function(err, img){
      if(err){
        //TODO: Handle err
      }
      this.props.usePhoto(img);
    });
  },

  getPhoto: function(e) {
    e.preventDefault();
    this.refs.photoInput.getDOMNode.click();
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
    });

    return DOM.div({
      className: 'image-picker-component',
    }, photoInput, photoInputButton);
  }
});