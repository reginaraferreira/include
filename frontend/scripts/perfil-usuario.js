// var tokenSalvo = localStorage.getItem('token');
var axiosConfig = {
    headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
       // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

var id = localStorage.getItem("id");

var imagePadrao = document.getElementById('imgPerfil');


//axios.get('https://social-backend-tcc.herokuapp.com/user/'+ id)

axios.get('https://social-backend-tcc.herokuapp.com/user/'+ id).then(response => {
    var user = response.data;
    // escolaridadeUser
     //b = (typeof b !== 'undefined') ? b : 1;
    var span = document.getElementById('nomeUserPerfil');
    span.innerHTML = user.username;
    var span1 = document.getElementById('sobrenomeUserPerfil');
    span1.innerHTML = '  ' + user.last_name;
    var span2 = document.getElementById('cidadeUser');
    span2.innerHTML = user.city;
    var span3 = document.getElementById('estadoUser');
    span3.innerHTML =' - ' + user.uf;
    var p = document.getElementById('escolaridadeUser');
    p.innerHTML = user.schooling;
    

}).catch(err =>{
    console.log(err);
})