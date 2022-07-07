var axiosConfig = {
    headers: {
        Authorization: localStorage.getItem("token")
       // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

/*
var USUARIO = JSON.parse(localStorage.getItem('currentUser'));
const TOKEN = USUARIO.id;
const CLIENT_ID = USUARIO.token;
//axiosConfig.headers.Authorization


var storedArray = localStorage.getItem("ourarraykey");
ourArray = JSON.parse(storedArray);

const bearer = authToken.split(' ');
        var token = bearer[1];
*/




function createPagina(){
    //var token = localStorage.getItem("token");
    var tipopagina = document.getElementById("tipopagina");
    var tituloInput = document.getElementById("tituloPage");
    var descricaoInput = document.getElementById("descricao");
    var categoriaInput = document.getElementById("categoria");
   // var tipoEmpresaInput = document.getElementById("tipoEmpresa");
    var estadoInput = document.getElementById("uf");
    var cidadeInput = document.getElementById("cidade");
    var idUser = localStorage.getItem("id");

   // console.log("")

    var page = {
        type: tipopagina.value,
        title: tituloInput.value,
        description: descricaoInput.value,
        category: categoriaInput.value,
        uf: estadoInput.value,
        city: cidadeInput.value,
        user: idUser
    }
    axios.post("https://social-backend-tcc.herokuapp.com/page/", page)
    
    .then(response => {
        
        window.location.href = "http://localhost:8080/minhas-paginas"
        
    }).catch(err => {
        console.log(err);
    });
};