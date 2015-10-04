// app/assets/javascripts/components/greeting.js.jsx
var Greeting = React.createClass({
  render: function () {
    return <h1>Hi {this.props.name}!</h1>; // properties
  }
});

// how to view this 
// <%= react_component('HelloMessage', { name: 'Bob' }) %>
