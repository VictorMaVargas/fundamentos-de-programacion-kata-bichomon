//Cambiar título
document.getElementById("gen-1").innerHTML = "Generasión Pokimon";

//Cambiar fondo
let pokimon = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
    for(let i = 0; i < pokimon.length; i++){
        pokimon[0].style.background = "lightblue";
    }

// URL de la página
let direccion = document.URL;
console.log(direccion);
//Dominio de la página
let dominio = document.domain;
console.log(dominio)

/* let dominio2 = document.querySelector(".mainheader, .grid-container, .header-logo").innerHTML;
console.log(dominio2); */

//Nodos de imágenes
let nodosImagenes = document.querySelectorAll(".infocard-lg-img");
console.log(nodosImagenes);

//Cambiar imagenes

let source = document.querySelectorAll("img");
for(let i = 0; i < source.length; i++){
    source[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//Cambiar infocards

let nuevoFondo = document.querySelectorAll(".itype.flying");
for(let i = 0; i<nuevoFondo.length; i++){
    (nuevoFondo[i]).style.backgroundColor = "white";
}

console.log(document.title);
