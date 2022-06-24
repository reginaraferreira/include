function editarPerfil(){

    var usernameInput = document.getElementById("Editnome");
    var sobrenomeInput = document.getElementById("Editsobrenome");
    var dianascimentoInput = document.getElementById("Editdianascimento");
    var mesnascimentoInput = document.getElementById("Editmesnascimento");
    var anonascimentoInput = document.getElementById("Editanonascimento");
    var estadoInput = document.getElementById("Editestado");
    var cidadeInput = document.getElementById("Editcidade"); 
    var escolaridadeInput = document.getElementById("Editescolaridade"); 
    var instituicaoInput = document.getElementById("Editinstituicao"); 
    var empresaInput = document.getElementById("Editempresa"); 
    var cargoInput = document.getElementById("Editcargo"); 

    var user = {
        nome: usernameInput.value,
        sobrenome: sobrenomeInput.value,
        dianascimento: dianascimentoInput.value,
        mesnascimento: mesnascimentoInput.value,
        anonascimento: anonascimentoInput.value,
        escolaridade: escolaridadeInput.value,
        instituicao: instituicaoInput.value,
        empresa: empresaInput.value,
        cargo: cargoInput.value,
        estado:  estadoInput.value,
        cidade: cidadeInput.value,
    }

    axios.put("http://localhost:4000/edit-user", user
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