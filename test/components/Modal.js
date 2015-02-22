'use strict';

var should = require('should');
var React = require('react');
var Modal = React.createFactory(require('../../components/Modal'));

describe('Modal()', function() {
  it('should render with one child', function(done){
    var modal = Modal(null, 'Test');
    var str = React.renderToStaticMarkup(modal);
    should.exist(str);
    str.should.equal('<div class="modal-component">Test</div>');
    done();
  });
  it('should render with multiple', function(done){
    var modal = Modal(null,
      React.DOM.div(null, 'Test'),
      React.DOM.div(null, 'Test 2')
    );
    var str = React.renderToStaticMarkup(modal);
    should.exist(str);
    str.should.equal('<div class="modal-component"><div>Test</div><div>Test 2</div></div>');
    done();
  });
});