const express = require('express');
const route = express.Router();

//controllers
const homeController = require('./src/controllers/homeController');
const addAlunoController = require('./src/controllers/addAlunoController');
const removerAlunoController = require('./src/controllers/removerAlunoController');

route.get("/", homeController.renderIndex);

// Adicionar alunmo no placar
route.get("/add_aluno_page", addAlunoController.renderIndex);
route.post("/add_aluno_view", addAlunoController.registerNewAluno);


// Remover aluno do placar
route.get("/remover_aluno_page", removerAlunoController.renderIndex);
route.post("/remover_aluno_page/delete", removerAlunoController.deleteAluno);

module.exports = route;