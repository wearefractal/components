'use strict';

var should = require('should');
var React = require('react');
var SelectInput  = React.createFactory(require('../../../components/Form/SelectInput'));

describe('Form/SelectInput()', function() {
  beforeEach(function(){
    this.container = document.createElement('div');
  });
  it('should render', function(done){
    var input = SelectInput();
    var str = React.renderToStaticMarkup(input);
    should.exist(str);
    str.should.equal('<select class="select-input-component"></select>');
    done();
  });
  it('should render with children elements', function(done){
    var option1 = React.DOM.option({
      className: 'option',
      value: 'option1'
    }, 'option1');
    var option2 = React.DOM.option({
      className: 'option',
      value: 'option2'
    }, 'option2');

    var input = SelectInput({
    }, option1, option2);
    var str = React.renderToStaticMarkup(input);
    should.exist(str);
    str.should.equal('<select class="select-input-component"><option class="option" value="option1">option1</option><option class="option" value="option2">option2</option></select>');
    done();
  });

  it('should render with array of options', function(done) {
    var options = [
    {
      props: {
        className: 'option',
        value: 'option1'
      },
      content: 'option1'
    },
    {
      props: {
        className: 'option',
        value: 'option2'
      },
      content: 'option2'
    }];

    var input = SelectInput({options: options});
    var str = React.renderToStaticMarkup(input);
    should.exist(str);
    str.should.equal('<select class="select-input-component"><option class="option" value="option1">option1</option><option class="option" value="option2">option2</option></select>');
    done();
  });
});
