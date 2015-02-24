'use strict';

var should = require('should');
var React = require('react');
var Header = React.createFactory(require('../../../components/Splash/Header'));

describe('Header()', function() {
  it('should render', function(done){
    var header = Header({
      header: 'test',
      subheader: 'sub header',
      background: '/img/bg.jpg',
      loginText: 'login with facebook',
      loginUrl: '/auth/facebook'
    });
    var str = React.renderToStaticMarkup(header);
    should.exist(str);
    str.should.equal('<div class="header-component" style="background-color:#333;background-image:url(/img/bg.jpg);background-size:cover;background-position:center;"><div class="statement-container"><div class="statement-text">test<div class="statement-subtext">sub header</div></div><button class="pure-button pure-button-primary login-button">login with facebook</button></div><a class="down-arrow" href="#info"><img src="/img/down.svg"></a></div>');
    done();
  });

});
