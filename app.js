const express = require('express');
const app =express();
const User = require('./models/User');
const db = require('./models/db');

app.use(express.json());

app.get("/", async (req, res)=> {
res.send("pagina inicial");


});

app.post("/cadastrar", async (req, res)=> {

await User.create(req.body)
.then(() => {
return res.json({
    erro: false,
    mensagem: "usuario cadastrado com sucesso"
});
}).catch(() => { 
return res.status(400).json({
    erro: true,
    mensagem: "erro: usuario não cadastrado com sucesso"
});
});

    res.send("pagina cadastrar");
    });




app.listen(8080, () => {
console.log("servidor iniciado na porta 8080: http://localhost:8080")
});