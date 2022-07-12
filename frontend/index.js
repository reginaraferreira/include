const express = require("express");
const app = express();
var cors = require('cors');
var http = require("http").createServer(app);
var io = require('socket.io')(http);


const port = 8080;

app.set('view engine', 'ejs');
app.use("/static", express.static('static'));
app.use("/scripts", express.static('scripts'));

const multer = require('multer');
const user = "reginara";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"./static/img/photo-perfil");
    },
    filename: function (req, file, cb) {
        cb(null,user );
    }
})

const upload = multer ({storage})
//frontend\static\img  frontend\static\img\photo-perfil

app.use(cors());


io.on('connection',(socket) => { //socket é uma instância do cliente que esta conectado na aplicação

    socket.on("msg", (data) => {
        io.emit("retornoMsg", data)
        console.log(data);
    })

    socket.on("msgUser", (data) => {
        io.emit("retornoMsgUser", data)
        console.log(data);
    })

});

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

app.get('/ver-perfil/:id', function(req, res){
    const id = req.params.id;
    res.render('ver-perfil', {idUser:id});
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

app.get('/pagina/:id', function(req, res){
    const id = req.params.id
    res.render('pagina', {idPage:id});
});

app.get('/painel-vagas', function(req, res){
    res.render('painel-vagas');
});

app.get('/incluir-vaga', function(req, res){
    res.render('incluir-vaga');
});

app.get('/amigos', function(req, res){
    res.render('amigos');
});

app.get('/incluir-formulario', function(req, res){
    res.render('incluir-formulario');
});

app.get('/ver-vaga/:id', function(req, res){
    const id = req.params.id
    res.render('ver-vaga', {idVaga:id});
});

app.get('/ver-vaga-user/:id', function(req, res){
    const id = req.params.id
    res.render('ver-vaga-user', {idVaga:id});
});

app.get('/concorrer-vaga', function(req, res){
    res.render('concorrer-vaga');
});

app.post("/upload", upload.single("fileImage"), function(req, res){
    console.log("Arquivo Recebido!")
})

http.listen(port,() => {console.log(`Servidor rodando em: http://localhost:${port}`)});