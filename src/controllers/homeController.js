const Alunos = require('../../database/Model');

exports.renderIndex = async function(req, res) {
    const alunos = await Alunos.get_all_alunos();

    console.log(`Alunos: ${alunos}`);
    res.render("index", { alunos: alunos });
}