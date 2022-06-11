const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use("/static", express.static('static'));
app.use("/scripts", express.static('scripts'));


app.get('/minhas-paginas', function(req, res){
    res.render('minhas-paginas');
});

app.listen(port,() => {console.log(`Servidor rodando em: http://localhost:${port}`)});