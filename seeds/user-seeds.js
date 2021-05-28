const { User } = require('../models');

const userData = [
    {
        username: 'nelson',
        password: 'password1234',
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;