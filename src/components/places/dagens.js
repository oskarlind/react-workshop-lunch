var React = require('react');

var Dagens = React.createClass({
    render: function() {
        var dagensRow = function(dagens) {
            return (<li>{dagens.place}: {dagens.course}</li>);
        };

        return (
            <div className="container">
                <h2>Today's "dagens"</h2>
                <ul>{this.props.dagensList.map(dagensRow, this)}</ul>
            </div>
        );
    }
});

module.exports = Dagens;