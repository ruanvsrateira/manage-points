const Aluno = require('../../database/Model');

exports.renderIndex = async function(req, res) {
    const alunos = await Aluno.get_all_alunos();

    res.render("remover_aluno_page", { alunos: alunos });
}

exports.deleteAluno = async function(req, res) {
    await Aluno.deleteAluno(req.body.nome);

    res.redirect("/");
}