"use strict";
var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>Lunch planner</h1>
                <p>Where would you like to go today?</p>
            </div>
        );
    }
});

module.exports = Home;
