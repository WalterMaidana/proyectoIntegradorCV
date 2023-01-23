let foto = document.getElementById("foto");
let nomYape = document.getElementById("nomYape");
let sectionContacto = document.getElementById("sectionContacto");
let seccionFormacion = document.getElementById("seccionFormacion");
let seccionExperiencia = document.getElementById("seccionExperiencia");
let seccionHabilidades = document.getElementById("seccionHabilidades");
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
    //Sección contacto
    sectionContacto.addEventListener("mouseover", function(){
        sectionContacto.style.background = "#2596be";
        sectionContacto.style.color = "white";
    })
    sectionContacto.addEventListener("mouseout", function(){
        sectionContacto.style.background = "white";
        sectionContacto.style.color = "black";
    })

    //Sección formación
    seccionFormacion.addEventListener("mouseover", function(){
        seccionFormacion.style.background = "#79820f";
        seccionFormacion.style.color = "white";
    })
    seccionFormacion.addEventListener("mouseout", function(){
        seccionFormacion.style.background = "white";
        seccionFormacion.style.color = "black";
    })

    //Sección experiencia
    seccionExperiencia.addEventListener("mouseover", function(){
        seccionExperiencia.style.background = "#be4d25";
        seccionExperiencia.style.color = "white";
    })
    seccionExperiencia.addEventListener("mouseout", function(){
        seccionExperiencia.style.background = "white";
        seccionExperiencia.style.color = "black";
    })
    
    //Sección intereses
    seccionHabilidades.addEventListener("mouseover", function(){
        seccionHabilidades.style.background = "#27760b";
        seccionHabilidades.style.color = "white";
    })
    seccionHabilidades.addEventListener("mouseout", function(){
        seccionHabilidades.style.background = "white";
        seccionHabilidades.style.color = "black";
    })