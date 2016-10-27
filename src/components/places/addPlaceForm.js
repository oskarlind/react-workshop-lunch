"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AddPlaceForm = React.createClass({
    render: function() {
        return (
            <form>
                <TextInput
                    name = "title"
                    label = "Add a place"
                    onChange = {this.props.onChange}
                />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AddPlaceForm;