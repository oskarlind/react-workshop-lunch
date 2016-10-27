"use strict";
var React = require('react');
var PlacesList = require('../components/places/placesList');

var Home = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>Lunch planner</h1>
                <p>Where would you like to go today?</p>
                <PlacesList/>
            </div>
        );
    }
});

module.exports = Home;
