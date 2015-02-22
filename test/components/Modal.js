'use strict';

var should = require('should');
var React = require('react');
var Modal = React.createFactory(require('../../components/Modal'));

describe('Modal()', function() {
  it('should render with children', function(done){
    var modal = Modal(null, 'Test');
    var str = React.renderToStaticMarkup(modal);
    should.exist(str);
    str.should.equal('<div class="modal-component">Test</div>');
    done();
  });
});