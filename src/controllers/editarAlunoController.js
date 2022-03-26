const Aluno = require('../../database/Model');

exports.renderIndex = async function(req, res) {
    const aluno = Aluno.getOneAluno(req.params.id);

    res.render('editar_aluno_page', { aluno });
}

exports.saveEdit = async function(req, res) {

    await Aluno.saveNewsEdit(req.params.id);

    res.redirect('/')

}