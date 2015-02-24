'use strict';

var should = require('should');
var React = require('react');
var CircleIcon = React.createFactory(require('../../components/CircleIcon'));

describe('CircleIcon()', function() {
  it('should render', function(done){
    var circle = CircleIcon({
      text: 1,
      background: '#555'
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<div class="circleicon-component" style="background:#555;"><span class="text">1</span></div>');
    done();
  });

  it('should render with default background', function(done){
    var circle = CircleIcon({text: 1});
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<div class="circleicon-component" style="background:#7f8c8d;"><span class="text">1</span></div>');
    done();
  });
});
