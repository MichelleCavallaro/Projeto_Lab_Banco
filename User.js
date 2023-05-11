const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        llowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//caso não exista a tabela, descomentar a função.
//User.sync();

//Em caso de alteração na tabela, descomente a função.
//User.sync({ alter: true })

module.exports = User;
