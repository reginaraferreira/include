axios.get('http://localhost:4000/pagina').then(response => {
        var pagina = response.data;
       console.log("pagina");
        // escolaridadeUser
        var p = document.getElementById('namePage');
        p.innerHTML = pagina.title;
        var p1= document.getElementById('typePage');
        p1.innerHTML ='  ' + pagina.type;
        var span = document.getElementById('cityPage');
        span.innerHTML = pagina.city;
        var p2 = document.getElementById('descriptionPage');
        p2.innerHTML =' - ' + pagina.description;
    
    }).catch(err =>{
        console.log(err);
    })