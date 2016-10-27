var people =
[
    {
        firstName: 'Mollgan',
        lastName: ''
    },
    {
        firstName: 'Björn',
        lastName: 'Borg'
    },
    {
        firstName: 'Kalle',
        lastName: 'Anka'
    }
];

var dagens =
    [
        {
            place: 'Restaurang Gute',
            course: 'Ryggbiff'
        },
        {
            place: 'Lisa Elmqvist',
            course: 'Torsk i ugn'
        },
        {
            place: 'Torgnys trattoria',
            course: 'Kalops'
        }
    ];

var places = [
    "Riche",
    "McDonalds",
    "Sturecompagniet"
];


var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var MockApi = {
    getPeopleAvailable: function() {
        return people;
    },
    getDagens: function() {
        return dagens;
    },
    savePlace: function(place) {
        places.push(place);
        console.log("saved " + place);
    },
    getPlaces: function() {
        return _clone(places);
    }
};

module.exports = MockApi;