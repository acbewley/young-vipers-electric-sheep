const seedUsers = require('./userSeeds')
const seedDreams = require('./dreamSeeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\nDATABASE SEEDED\n')
    await seedUsers();
    console.log('\nUSERS SEEDED\n');
    await seedDreams();
    console.log('\nDREAMS SEEDED\n');
    process.exit(0);
};

seedAll();