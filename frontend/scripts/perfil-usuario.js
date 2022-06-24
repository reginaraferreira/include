// var tokenSalvo = localStorage.getItem('token');
var axiosConfig = {
    headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
       // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

axios.get('http://localhost:4000/user').then(response => {
    var user = response.data;
    // escolaridadeUser
    var span = document.getElementById('nomeUserPerfil');
    span.innerHTML = user.nome;
    var span1 = document.getElementById('sobrenomeUserPerfil');
    span1.innerHTML ='  ' + user.sobrenome;
    var span2 = document.getElementById('cidadeUser');
    span2.innerHTML = user.cidade;
    var span3 = document.getElementById('estadoUser');
    span3.innerHTML =' - ' + user.estado;
    var p = document.getElementById('escolaridadeUser');
    p.innerHTML = user.escolaridade;
    

}).catch(err =>{
    console.log(err);
})