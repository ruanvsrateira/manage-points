const Aluno = require('../../database/Model');

exports.renderIndex = (req, res) => {
    res.render("add_aluno_page")
}

exports.registerNewAluno = async function(req, res) {
    await Aluno.addNewAluno(req.body.nome, req.body.points);

    res.redirect('/');
}