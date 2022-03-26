const Aluno = require('../../database/Model');

exports.adicionarPonto = async function(req, res) {
    await Aluno.adicionaPonto(req.params.id);

    res.redirect('/');
}

