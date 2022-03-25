const express = require('express');
const mongoose = require('mongoose');
const db = require('./database/Model');
const routes = require('./routes');
const path = require("path");

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.resolve(__dirname, 'public', 'views'));
app.set("view engine", "ejs")

app.use(express.static(path.resolve(__dirname, "public")));

mongoose.connect(process.env.STRING_DATABASE)
    .then(() => {
        app.emit('database_on')
    }).catch(e => console.log(`Erro: ${e}`));

app.use(routes);



app.on("database_on", () => {
    app.listen(3000, () => {
        console.log('Servidor rodando !');
    });   
});
