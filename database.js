const Sequelize = require('sequelize');

const connection = new Sequelize(
    'musica', // nome do banco de dados
    'root',      // usuário de conexão
    'aluno',  // senha de acesso
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;