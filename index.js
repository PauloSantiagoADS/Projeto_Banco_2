const express = require ('express');
const app = express();
const port = 4000; 
const { router } = require('./src/routes/public')

app.use(express.json())
app.use(router);


app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
});

