'use strict';

var should = require('should');
var React = require('react');
var TextInput = React.createFactory(require('../../../components/Form/TextInput'));

describe('Form/TextInput()', function() {
  beforeEach(function(){
    this.container = document.createElement('div');
  });
  it('should render', function(done){
    var input = TextInput();
    var str = React.renderToStaticMarkup(input);
    should.exist(str);
    str.should.equal('<input class="text-input-component" type="text">');
    done();
  });
  it('should render with input properties', function(done){
    var input = TextInput({
      defaultValue: '123'
    });
    var str = React.renderToStaticMarkup(input);
    should.exist(str);
    str.should.equal('<input class="text-input-component" type="text" value="123">');
    done();
  });
});
