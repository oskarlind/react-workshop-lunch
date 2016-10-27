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

var MockApi = {
    getPeopleAvailable: function() {
        return people;
    },
    getDagens: function() {
        return dagens;
    }
};

module.exports = MockApi;