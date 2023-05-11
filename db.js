const Sequelize = require("sequelize");

const sequelize = new Sequelize("item", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("conexão estabelecida com sucesso!");
  })
  .catch(function () {
    console.log(
      "erro: conexão com o banco de dados não realizada com sucesso!"
    );
  });

module.exports = sequelize;
