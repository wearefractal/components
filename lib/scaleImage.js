'use strict';

function scaleImage(opts, cb) {
  if(!opts.el){
    return cb(new Error('opts.el (canvas element) required'));
  }
  if(!opts.scale){
    return cb(new Error('opts.scale (size to scale width to) required'));
  }
  if(!opts.src){
    return cb(new Error('opts.src (image) required'));
  }

  var image = new Image();

  image.onload = function() {

    var canvas = opts.el;
    var h = opts.scale * image.height / image.width;
    canvas.width = opts.scale;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return cb(null, canvas.toDataURL());
  };
  // TODO: allow http URL
  image.src = URL.createObjectURL(opts.src);
  image.onerror = cb;

}

module.exports = scaleImage;
