const sequelize = require('../config/connection')
const { User, Dream } = require('../models')

const userData = require('./userSeeds.json')
const dreamData = require('./dreamSeeds.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Dream.bulkCreate(dreamData);

    process.exit(0);
}

seedAll();