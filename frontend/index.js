const express = require("express");
const app = express();
var cors = require('cors');
var http = require("http").createServer(app);
var io = require('socket.io')(http);
const port = 8080;
const axios = require('axios');

app.set('view engine', 'ejs');
app.use("/static", express.static('static'));
app.use("/scripts", express.static('scripts'));

app.use(cors());


/*io.on('connection',(socket) => { //socket é uma instância do cliente que esta conectado na aplicação
    console.log(socket);
    console.log(socket.id);
});*/

app.get('/', function(req, res){
    res.render('login');
});

app.get('/cadastro', function(req, res){
    res.render('cadastro');
});

app.get('/cadastro-realizado', function(req, res){
    res.render('cadastro-realizado');
});

app.get('/feed-noticias', function(req, res){
    res.render('feed-noticias');
});

app.get('/perfil', function(req, res){
    res.render('perfil');
});

app.get('/editar-perfil', function(req, res){
    res.render('editar-perfil');
});

app.get('/criar-pagina', function(req, res){
    res.render('criar-pagina');
});

app.get('/minhas-paginas', function(req, res){
    res.render('minhas-paginas');
});

app.get('/pagina', function(req, res){
    res.render('pagina');
});

app.get('/minhas-vagas-user', function(req, res){
    res.render('minhas-vagas-user');
});

app.get('/incluir-vaga', function(req, res){
    res.render('incluir-vaga');
});


http.listen(port,() => {console.log(`Servidor rodando em: http://localhost:${port}`)});