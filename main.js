"use strict";

const users=[
    {name: 'John'}, {name: 'Mary'}, {name: 'Joe'}, {name: 'Ben'}
]

const userName = _.map(users, 'name')
console.log((userName));