"use strict";
var React = require('react');
var PlacesList = require('../components/places/placesList');
var PeopleList = require('../components/people/peopleAvailable');
var Dagens = require('../components/places/dagens');
var MockApi = require('./api/mockApi');
var AddPlaceForm = require('../components/places/addPlaceForm');

var Home = React.createClass({

    getInitialState: function() {
        return {
            dagens: [],
            places: [],
            addPlaceTitle: ""
        }
    },

    componentDidMount: function () {
        if(this.isMounted()) {
            this.setState({dagens: MockApi.getDagens(), places: MockApi.getPlaces()});
        }
    },

    componentDidUpdate: function() {
        console.log("should update");
    },

    setAddPlaceState: function(e) {
        var val = e.target.value;
        this.state.addPlaceTitle = val;
        return this.setState({addPlaceTitle: this.state.addPlaceTitle});
    },

    savePlace: function(e) {
        e.preventDefault();
        MockApi.savePlace(this.state.addPlaceTitle);
        this.setState({places: MockApi.getPlaces()})
    },

    render: function() {
        return (
            <div className="container">
                <h1>Lunch planner</h1>
                <p>Where would you like to go today?</p>
                <AddPlaceForm
                    title={this.state.addPlaceTitle}
                    onChange={this.setAddPlaceState}
                    onSave={this.savePlace}
                />
                <PlacesList places={this.state.places}/>
                <PeopleList/>
                <Dagens dagensList={this.state.dagens}/>
            </div>
        );
    }
});

module.exports = Home;
