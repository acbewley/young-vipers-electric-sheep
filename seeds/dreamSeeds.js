const { Dream } = require('../models');

const dreamData = [
    {
        subject: "My WILD Dream",
        body: 'I had a dream that I fell lmao.',
        user_id: 1
    }
];

const seedDreams = () => Dream.bulkCreate(dreamData);

module.exports = seedDreams