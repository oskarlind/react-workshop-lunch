var React = require('react');

var PlacesList = React.createClass({
    render: function() {
        var placesRow = function(place) {
            return (<li>{place}</li>);
        };
        return (
            <div className="container">
                <h2>Places to go</h2>
                <p>Now is {Date.now()}</p>
                <ul>{this.props.places.map(placesRow, this)}</ul>
            </div>
        );
    }
});

module.exports = PlacesList;