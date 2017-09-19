/**
 * Created by johnmcswain on 6/3/17.
 */


// Include React
var React = require("react");
// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// Create the Child Component
var Child = React.createClass({
    render: function() {
        return (

                    <GrandChild />

        );
    }
});

// Export the component back for use in other files
module.exports = Child;