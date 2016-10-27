var React = require('react');
var MockApi = require('../api/mockApi');

var PeopleAvailable = React.createClass({
    getInitialState: function() {
        return {
            people: [{firstName: "Mollgan", lastName: ""}]
        }
    },

    componentWillMount: function() {
        this.setState({people: MockApi.getPeopleAvailable()})
    },

    render: function() {
        var createPeopleRow = function(person) {
            return (
                <li>{person.firstName} {person.lastName}</li>
            )
        };

        return (
            <div className="container">
                <h2>People to invite</h2>
                <ul>
                    {this.state.people.map(createPeopleRow, this)}
                </ul>
            </div>
        );
    }
});

module.exports = PeopleAvailable;