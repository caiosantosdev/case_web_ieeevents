const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

const port = 6000
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});