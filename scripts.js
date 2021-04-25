document.getElementById("gen-1").innerHTML = "Generasión Pokimon";

let pokimon = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
    for(let i = 0; i < pokimon.length; i++){
        pokimon[0].style.background = "lightblue";
    }
let nodosImagenes = document.querySelectorAll(".infocard-lg-img");
console.log(nodosImagenes);

let dominio = document.querySelector(".mainheader, .grid-container, .header-logo").innerHTML;
console.log(dominio);

console.log(document.title);
