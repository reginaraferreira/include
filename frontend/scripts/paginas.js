

/**
 * 
 * 
 * axios.get("https://social-backend-tcc.herokuapp.com/pages/", axiosConfig).then(response => {
        var paginas = response.data;
        var list = document.getElementById("paginas");
        var idUser = localStorage.getItem("id");
        
        paginas.forEach(paginas =>{
            if (paginas.user == idUser){
            var item = document.createElement("li");

            item.setAttribute("data-id", paginas.id);
            item.setAttribute("data-title", paginas.title);
            item.setAttribute("data-city", paginas.city);

            item.innerHTML = paginas.title + "<br> " + paginas.city + "-" +paginas.uf;

            var verPagebtn = document.createElement("button");
            verPagebtn.innerHTML = "Visitar";
            verPagebtn.addEventListener("click", function() {
                
                visitarPagina(item);
                window.location.href = "http://localhost:8080/pagina/"+paginas.id
               /* var id = paginas.id;
                //console.log (id);
                axios.get("http://localhost:4000/pagina", id).then(response => {
                   
                    window.location.href = "http://localhost:8080/feed-noticias"
                }).catch(error =>{
                    console.log(error);
                })
            });

            item.appendChild(verPagebtn);

            list.appendChild(item);
        }
        }); */