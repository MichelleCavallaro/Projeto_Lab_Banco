const Sequelize = require('sequelize');
const connection = require('../database/database');

const Tipo = require('./tipo');

const Figurinha = connection.define(
    'musica', // nome da tabela
    {
        codigo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

Musica.belongsTo(Tipo);

//Figurinha.sync({force: true});

module.exports = Musica;