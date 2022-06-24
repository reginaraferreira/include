function createUser(){

    var nome = formcadastro.nome;
    var sobrenome = formcadastro.sobrenome;
    var email = formcadastro.email;
    var estado = formcadastro.estado;
    var cidade = formcadastro.cidade;
    var senha = formcadastro.password;
    var confsenha = formcadastro.confsenha;
    let checkbox = document.getElementById('termosdeuso');

    var validarSenha = senha.value
    var validarConfsenha = confsenha.value
    

    if (nome.value == ""){
        $("#msg-error").html('<div class="msg-alert">Necessário prencher o campo nome!</div>');
        nome.focus();
        return false;
    }else if (sobrenome.value == ""){
        $("#msg-error").html('<div class="msg-alert">Necessário prencher o campo sobrenome!</div>');
        sobrenome.focus();
        return false;
    }else if (email.value == ""){
        $("#msg-error").html('<div class="msg-alert">Necessário informar um email!</div>');
        email.focus();
        return false;
    }else if (estado.value == ""){
        $("#msg-error").html('<div class="msg-alert">Necessário selecionar um estado!</div>');
        estado.focus();
        return false;
    }else if (senha.value == "" ||  validarConfsenha.value == "") {
        if (validarSenha.length < 6){
            $("#msg-error").html('<div class="msg-alert">A senha precisa ter no mínimo 6 dígitos!</div>');
            senha.focus();
            return false;
        } else if (validarSenha.value !== validarConfsenha){
            $("#msg-error").html('<div class="msg-alert">As senhas não coincidem</div>');
            senha.focus();
            return false;
        }
    }else if(!checkbox.checked) {
            $("#msg-error").html('<div class="msg-alert">Necessário aceitar os termos e politicas!</div>');
    }else{
        
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
    }
};
/*----------------------------------------------------------------
<script>
    function createUser(){

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
           
        } else {
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
                    
                    window.location.href = "http://localhost:8080/"
                    
                }).catch(err => {
                    console.log(err);
                });
        }
    }
</script>




*/




//função de validação dos campos
function validar() {

};