const User = require('./User');
const Dream = require('./Dream');

User.hasMany(Dream, {
    foreignKey: 'user_id'
  });

Dream.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Dream };
