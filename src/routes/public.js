
const { Router } = require('express');
const router = Router();

const { criaEvento } = require('../controllers/eventos_controller');

router.post('/criarEvento', criaEvento);

module.exports = {
    router
}