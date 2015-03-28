'use strict';

var should = require('should');
var React = require('react');
var Info = React.createFactory(require('../../../components/Splash/Info'));

describe('Info()', function() {
  it('should render', function(done){
    var info = Info({
      items: [{header: 'test', content: 'content'}]
    });
    var str = React.renderToStaticMarkup(info);
    should.exist(str);
    str.should.equal('<div id="info" class="info-component"><p class="title">How it works</p><div class="info"><div class="circleicon-component" style="background:#2980b9;"><span class="text">1</span></div><p class="info-header">test</p><p>content</p></div></div>');
    done();
  });
});
