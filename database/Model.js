const { redirect } = require('express/lib/response');
const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    nome: String, points: Number
});

const model = mongoose.model("Alunos", modelSchema);

class Aluno {
    constructor() {

    }

    async get_all_alunos() {
        const results = await model.find({}).sort({ points: -1 });

        return results;
    }

    async addNewAluno(nome, points) {
        await model.create({
            nome: nome.replace(" ", ""), points: points
        });
    }

    async deleteAluno(nome) {
        
        await model.findOneAndRemove({
            nome: nome
        });

    }
}

module.exports = new Aluno;