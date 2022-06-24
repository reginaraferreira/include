var axiosConfig = {
    headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
       // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};


function createPagina(){
    //var token = localStorage.getItem("token");

    var tituloInput = document.getElementById("tituloPage");
    var descricaoInput = document.getElementById("descricao");
    var categoriaInput = document.getElementById("categoria");
    var tipoEmpresaInput = document.getElementById("tipoEmpresa");
    var estadoInput = document.getElementById("uf");
    var cidadeInput = document.getElementById("cidade");


    var page = {
        title: tituloInput.value,
        description: descricaoInput.value,
        category: categoriaInput.value,
        type:  tipoEmpresaInput.value,
        uf: estadoInput.value,
        city: cidadeInput.value
        //user: token.id
    }
    axios.post("http://localhost:4000/criar-pagina", page)
    
    .then(response => {
        
        window.location.href = "http://localhost:8080/minhas-paginas"
        
    }).catch(err => {
        console.log(err);
    });
};