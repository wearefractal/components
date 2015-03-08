'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var resizeImage = require('../');
var input = React.createFactory(require('../TextInput'));

module.exports = React.createClass({

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

  render: function() {
    return input({
      onChange: this.grabPhoto,
      ref: 'photoInput',
      type: 'file',
      accept: 'image/*',
      className: 'photo-input',
      id: 'photo-input'
    });
  }
});