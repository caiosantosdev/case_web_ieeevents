const express = require('express');
const app = express();
const routes =require('./routes')

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(8000, () =>{
    console.log("Servidor rodando na porta 8000");
});