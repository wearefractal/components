'use strict';

var should = require('should');
var React = require('react');
var Background = React.createFactory(require('../../../components/Background'));

describe('Background()', function() {
  it('should render', function(done){

    var background = Background({
      className: 'background',
      image: './img/bg.png',
      blur: 10,
      brightness: 0.7
    });

    var str = React.renderToStaticMarkup(background);
    should.exist(str);
    done();
  });
});