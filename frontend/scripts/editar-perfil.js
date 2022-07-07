function editarPerfil(){

    var usernameInput = document.getElementById("Editnome");
    var sobrenomeInput = document.getElementById("Editsobrenome");
    var EditnascimentoInput = document.getElementById("Editnascimento");
    var estadoInput = document.getElementById("Editestado");
    var cidadeInput = document.getElementById("Editcidade"); 
    var escolaridadeInput = document.getElementById("Editescolaridade"); 
    var instituicaoInput = document.getElementById("Editinstituicao"); 
    var empresaInput = document.getElementById("Editempresa"); 
    var cargoInput = document.getElementById("Editcargo"); 
    var image = document.getElementById("fileImage"); 


    var user = {
        username: usernameInput.value,
        last_name: sobrenomeInput.value,
        birthday: EditnascimentoInput.value,
        schooling: escolaridadeInput.value,
        institution: instituicaoInput.value,
        company: empresaInput.value,
        current_job: cargoInput.value,
        uf:  estadoInput.value,
        city: cidadeInput.value,
    }

    
    axios.patch('https://social-backend-tcc.herokuapp.com/user/'+id, user
    ).then(res =>{
        var token = res.data.token;
        localStorage.setItem("token", token);
        axiosConfig.headers.Authorization = "Bearer" + localStorage.getItem("token");
        //console.log(token);
        window.location.href = "http://localhost:8080/perfil"
    }).catch(err =>{
        console.log(err);
    });

}