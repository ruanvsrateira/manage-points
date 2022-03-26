const Alunos = require('../../database/Model');

exports.renderIndex = async function(req, res) {
    const alunos = await Alunos.get_all_alunos();

    res.render("index", { alunos });
}