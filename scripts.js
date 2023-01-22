let foto = document.getElementById("foto");
let nomYape = document.getElementById("nomYape");
let sectionSobreMi = document.getElementById("sectionSobreMi");
let genero = document.getElementById("genero");
let pais = document.getElementById("pais");
let estado = document.getElementById("estado");
let ciudad = document.getElementById("ciudad");
let codPostal = document.getElementById("codPostal");
let fechaNac = document.getElementById("fechaNac");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");

fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(datos => {
        for(let dato of datos["results"]){
            console.log(dato);
            // titulo.innerHTML = dato.name.title;
            // nombre.innerHTML = dato.name.first;
            // apellido.innerHTML = dato.name.last;
            foto.src = dato.picture.large;
            nomYape.innerHTML = dato.name.title + " " + dato.name.first + " " + dato.name.last;
            genero.innerHTML = dato.gender[0].toUpperCase() + dato.gender.substring(1);
            pais.innerHTML = dato.location.country;
            estado.innerHTML = dato.location.state;
            ciudad.innerHTML = dato.location.city;
            codPostal.innerHTML = dato.location.postcode;
            fechaNac.innerHTML = dato.dob.date;
            telefono.innerHTML = dato.phone;
            email.innerHTML = dato.email;
        }
    });

    sectionSobreMi.addEventListener("mouseover", function(){
        sectionSobreMi.style.background = "#2596be";
        sectionSobreMi.style.color = "white";

    })
    sectionSobreMi.addEventListener("mouseout", function(){
        sectionSobreMi.style.background = "white";
        sectionSobreMi.style.color = "black";
    })
  