"use strict";
var React = require('react');
var PlacesList = require('../components/places/placesList');
var PeopleList = require('../components/people/peopleAvailable');
var Dagens = require('../components/places/dagens');
var MockApi = require('./api/mockApi');

var Home = React.createClass({

    getInitialState: function() {
        return {
            dagens: []
        }
    },

    componentDidMount: function () {
        if(this.isMounted()) {
            this.setState({dagens: MockApi.getDagens()});
        }
    },

    render: function() {
        return (
            <div className="container">
                <h1>Lunch planner</h1>
                <p>Where would you like to go today?</p>
                <PlacesList/>
                <PeopleList/>
                <Dagens dagensList={this.state.dagens}/>
            </div>
        );
    }
});

module.exports = Home;
