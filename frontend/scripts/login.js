var axiosConfig = {
    headers: {
        Authorization: localStorage.getItem("token"),
       // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

function fazerLogin(){
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");

    var email = emailField.value;
    var password = passwordField.value;

    axios.post("https://social-backend-tcc.herokuapp.com/auth/login/",{
        email,
        password
    }).then(res =>{
        var token = res.data.tokens;
        
        //localStorage.setItem('valores', JSON.stringify(object))
        localStorage.setItem("token", token);
        localStorage.setItem("id", res.data.id)
       // console.log(res.data);
        window.location.href = "http://localhost:8080/feed-noticias"
    }).catch(err =>{
        if (err.response) {
            // A requisição foi feita e o servidor respondeu com um código de status
            // que sai do alcance de 2xx
            console.log(err.response.data);
            $("#msg-error").html('<div class="msg-alert">Email e/ou senha incorretos!</div>');
    
          //  console.log(err.response.status);
          //  console.log(err.response.headers);
          } else if (err.request) {
            // A requisição foi feita mas nenhuma resposta foi recebida
            // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
            // http.ClientRequest no node.js
            console.log(err.request);
            console.log("aqui1")
          } else {
            // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
            
            console.log('Error', err.message);
            console.log("aqui2")
          }
          console.log(err.config);
    });
};


/*function validar() {
        var nome = formcadastro.nome;
        var sobrenome = formcadastro.sobrenome;
        var email = formcadastro.email;
        var senha = formcadastro.senha;
        var confsenha = formcadastro.senha;
        let checkbox = document.getElementById('termosdeuso');

        if (nome.value == ""){
            $("#msg-error").html('<div class="msg-alert">Necessário prencher o campo nome!</div>');
            nome.focus();
            return false;
        } else if (sobrenome.value == ""){
            $("#msg-error").html('<div class="msg-alert">Necessário prencher o campo Sobrenome!</div>');
            sobrenome.focus();
            return false;
        } else if (email.value == ""){
            $("#msg-error").html('<div class="msg-alert">Necessário informar um email!</div>');
            email.focus();
            return false;
        }else if (email.value == ""){
            $("#msg-error").html('<div class="msg-alert">Necessário informar um email!</div>');
            email.focus();
            return false;
        } else if(!checkbox.checked) {
            $("#msg-error").html('<div class="msg-alert">Necessário aceitar os termos e politicas!</div>');
           
        } else{
            return true;
        }
};*/