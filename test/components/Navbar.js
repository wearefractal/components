'use strict';

var should = require('should');
var React = require('react');
var DOM = React.DOM;
var Navbar = React.createFactory(require('../../components/Navbar'));

describe('Navbar()', function() {
  it('should render', function(done){
    var circle = Navbar();
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component"><div class="title"></div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it('should render given children', function(done){
    var circle = Navbar({
      title: 'navbar'
    }, DOM.span(null, 'Test'));
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component" title="navbar"><div class="title">navbar</div><div class="inner" style="max-height:0px;"></div><span>Test</span><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it('should render with title props', function(done){
    var circle = Navbar({
      title: 'navbar'
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component" title="navbar"><div class="title">navbar</div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it('should render with logo props', function(done){
    var circle = Navbar({
      logo: '/images/img.png'
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component"><div class="title"><img class="logo" src="/images/img.png"></div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it('should render with style props', function(done){
    var circle = Navbar({
      logo: '/images/img.png',
      style: {
        background: '#171717'
      }
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    str.should.equal('<nav class="navbar-component" style="background:#171717;"><div class="title"><img class="logo" src="/images/img.png"></div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });

  it.skip('should render with style props', function(done){

    var circle = Navbar({
      links: [
        {
          label: 'link',
          to: 'test',
          badge: {
            count: 1
          }
        }
      ],
    });
    var str = React.renderToStaticMarkup(circle);
    should.exist(str);
    console.log(str);
    // str.should.equal('<nav class="navbar-component" style="background:#171717;"><div class="title"><img class="logo" src="/images/img.png"></div><div class="inner" style="max-height:0px;"></div><div class="navbar-button"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></nav>');
    done();
  });
});
