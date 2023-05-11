const Sequelize = require('sequelize');

const sequelize = new Sequelize('item', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(function () {
    console.log('conexão estabelecida com sucesso!');
  })
  .catch(function (error) {
    console.log(
      'erro: conexão com o banco de dados não realizada com sucesso!'
    );
    console.log(error);
  });

module.exports = sequelize;
