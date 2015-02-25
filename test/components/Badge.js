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
});
