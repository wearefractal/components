'use strict';

var React = require('react');
var DOM = React.DOM;
var PropTypes = React.PropTypes;

var CircleIcon = React.createFactory(require('../CircleIcon'));
var StyleMixin = require('../../lib/StyleMixin');
var css = require('./info.styl');

var InfoItem = React.createFactory(React.createClass({
  propTypes: {
    number: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  },
  mixins: [StyleMixin],
  css: css,
  render: function() {

    var num = function(n) {
      return CircleIcon({
        text: n,
        background: '#2980b9'
      });
    };
    var content = DOM.p(null, this.props.content);

    var header = DOM.p({
      className: 'info-header'
    }, this.props.header);

    return DOM.div({
      className: 'info'
    }, num(this.props.number), header, content);
  }
}));

module.exports = React.createClass({
  propTypes: {
    items: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }))
  },
  render: function() {

    var infoTitle = DOM.p({
      className: 'title'
    }, 'How it works');

    var infoItems = this.props.items.map(function(v, k) {
      v.number = ++k;
      v.key = k + '-info';
      return InfoItem(v);
    });

    return DOM.div({
      id: 'info',
      className: 'info-component'
    }, infoTitle, infoItems);
  }
});
