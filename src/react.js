var Less = require('../less/main.less');
var React = require('react');
var ReactDOM = require('react-dom');
var Test = require('./components/test');

var Main = React.createClass({
  render: function(){
    return (
    <div className="red">

        <Test />

    </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('react'));
