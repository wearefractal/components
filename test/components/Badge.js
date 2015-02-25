'use strict';

var should = require('should');
var React = require('react');
var Badge = React.createFactory(require('../../components/Badge'));

describe('Badge()', function() {
  it('should render', function(done){
    var circle = Badge({
      count: 1,
      background: '#555'
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<div class="badge-component" style="background:#555;color:#fff;">1</div>');
    done();
  });

  it('should render with default background', function(done){
    var circle = Badge({text: 1});
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    //str.should.equal('<div class="circleicon-component" style="background:#7f8c8d;"><span class="text">1</span></div>');
    done();
  });
});
