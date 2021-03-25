const { User } = require('../models');

const userData = [
    {
        first_name: 'Oliver',
        last_name: 'Bewley',
        sign: 'Taurus',
        user_name: 'acbewley',
        email: 'acbewley13@gmail.com',
        password: 'test1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;