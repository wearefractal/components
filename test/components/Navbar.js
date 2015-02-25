'use strict';

var should = require('should');
var React = require('react');
var Navbar = React.createFactory(require('../../components/Navbar'));

describe('Navbar()', function() {
  it('should render', function(done){
    var circle = Navbar();
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component"><div class="title"></div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it('should render with option title', function(done){
    var circle = Navbar({
      title: 'navbar'
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component" title="navbar"><div class="title">navbar</div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it('should render with option logo', function(done){
    var circle = Navbar({
      logo: '/images/img.png'
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component"><div class="title"><img class="logo" src="/images/img.png"></div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });
});
