// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  render: function() {
    return (
      <div>
    <h1>Hey guys! I'm a header!</h1>
    <h2>Things I like!</h2>
    <ul>
      <li>Peas</li>
      <li>Carrots</li>
      <li>Love</li>
    </ul>
  </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;