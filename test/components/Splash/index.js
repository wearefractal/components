'use strict';

var should = require('should');
var React = require('react');
var Splash = React.createFactory(require('../../../components/Splash/'));

describe('Splash()', function() {
  it('should render', function(done){
    var splash = Splash({
      header: 'test',
      subheader: 'sub header',
      background: '/img/bg.jpg',
      loginText: 'login with facebook',
      loginUrl: '/auth/facebook',
      info: [{header: 'test', content: 'content'}]
    });
    var str = React.renderToStaticMarkup(splash);
    should.exist(str);
    str.should.equal('<div class="splash-component"><div class="header-component" style="background-color:#333;background-image:url(/img/bg.jpg);background-size:cover;background-position:center;"><div class="statement-container"><div class="statement-text">test<div class="statement-subtext">sub header</div></div><button class="pure-button pure-button-primary login-button">login with facebook</button></div><a class="down-arrow" href="#info"><img src="/img/down.svg"></a></div><div id="info" class="info-component"><p class="title">How it works</p><div class="info"><div class="circleicon-component" style="background:#2980b9;"><span class="text">1</span></div><p class="info-header">test</p><p>content</p></div></div></div>');
    done();
  });

});
