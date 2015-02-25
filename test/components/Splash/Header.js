'use strict';

var should = require('should');
var React = require('react');
var Header = React.createFactory(require('../../../components/Splash/Header'));

describe('Header()', function() {
  it('should render', function(done){
    var header = Header({
      hasInfo: true,
      header: 'test',
      subheader: 'sub header',
      background: '/img/bg.jpg',
      loginText: 'login with facebook',
      loginUrl: '/auth/facebook'
    });
    var str = React.renderToStaticMarkup(header);
    should.exist(str);
    str.should.equal('<div class="header-component" style="background-color:#333;background-image:url(/img/bg.jpg);background-size:cover;background-position:center;"><div class="statement-container"><div class="statement-text"><div class="statement-header">test</div><div class="statement-subtext">sub header</div></div><button class="pure-button pure-button-primary login-button">login with facebook</button></div><a class="down-arrow" href="#info"><?xml version="1.0"?> <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <polygon fill="#ffffff" points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " /> </svg></a></div>');
    done();
  });

});
