const { Pool } = require('pg');
 
const cliente = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'Projeto_Banco_2',
});


module.exports = {
    cliente
}