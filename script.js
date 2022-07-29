"use strict";
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",Agregar);





function Agregar() {
    let input = document.getElementById("input")

    let miLista = document.querySelector("ol");

    let elementoNuevo = document.createElement("li");
    elementoNuevo.innerHTML = input.value;

    miLista.appendChild(elementoNuevo);
    
}
