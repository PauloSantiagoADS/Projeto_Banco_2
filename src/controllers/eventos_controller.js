
const { cliente } = require('../database/conexao');

const criaEvento = async (req, res) => {

    const { nome, descricao, data } = req.body;

    try {

        const result = await cliente.query('INSERT INTO EVENTOS (NOME, DESCRICAO, DATE) VALUES ($1, $2, $3)', [nome, descricao, data]);

        return res.status(200).json({ 
            message: 'Evento criado com sucesso !'
        });

    } catch (error) {
        return res.status(500).json({error});
    }  

}

module.exports = {
    criaEvento
}