var React = require('react');

var PlacesList = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h2>Places to go</h2>
                <p>Now is {Date.now()}</p>
                <ul>
                    <li>Riche</li>
                    <li>Sturecompagniet</li>
                    <li>McDonalds</li>
                </ul>
            </div>
        );
    }
});

module.exports = PlacesList;