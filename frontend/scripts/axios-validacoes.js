var axiosConfig = {
    headers: {
        Authorization: "Bearer" + localStorage.getItem("token")
    }
};

function fazerLogin(){
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");

    var email = emailField.value;
    var senha = passwordField.value;

    axios.post("http://localhost:4000/auth",{
        email,
        senha
    }).then(res =>{
        var token = res.data.token;
        localStorage.setItem("token", token);
        axiosConfig.headers.Authorization = "Bearer" + localStorage.getItem("token");
        //console.log(token);
        window.location.href = "http://localhost:8080/feed-noticias"
    }).catch(err =>{
        console.log(err);
    });
};

//criar usuario - consumo API com axios
function createUser(){
    var usernameInput = document.getElementById("nome");
    var sobrenomeInput = document.getElementById("sobrenome");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var estadoInput = document.getElementById("uf");
    var cidadeInput = document.getElementById("cidade");


    var user = {
        nome: usernameInput.value,
        sobrenome: sobrenomeInput.value,
        email: emailInput.value,
        senha: passwordInput.value,
        estado:  estadoInput.value,
        cidade: cidadeInput.value,
    }
    axios.post("http://localhost:4000/cadastro", user)
    
    .then(response => {
        
        window.location.href = "http://localhost:8080/cadastro-realizado"
        
    }).catch(err => {
        console.log(err);
    });
};
  

//função de validação dos campos
function validar() {
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
};

    //select de estados e cidades
    const urlestados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    const uf = document.getElementById("uf");
    const cidades = document.getElementById("cidade");

    uf.addEventListener('change', async function () {
        const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios';
        const request = await fetch(urlCidades);
        const response = await request.json();
        
        let options = ''
        response.forEach(function (cidades) {
            options += '<option>'+cidades.nome+'</option>'
        })
        cidades.innerHTML = options;
    })
        
    window.addEventListener('load', async ()=>{
        const request = await fetch(urlestados);
        const response = await request.json();

        const options = document.createElement('optgroup');
        //options.setAttribute('label', '');

        response.forEach(function(estado){
            //console.log(estado.nome);
            options.innerHTML += '<option>'+estado.sigla+'</option>';
        });

        uf.append(options);
        
});