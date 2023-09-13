/*************************************** Seleccionar contenido ****************************************/
/*Notas:
document.
    -Este fragmento de código sirve para hacer referencia al docuemnto HTML.
QuerySelector / QuerySelectorAll:
    -Para poder escoger el elemento se hace con .clase ó con #id
    -Si hay error en el selector solo va a retornar "null"
getElementById:
    -Es una versión anterior pero ún vigente.
Sintaxis:
    const [var_name] = document.querySelector([.class or #id])
        [var_name].[modification]
    const [var_name] = document.querySelectorAll([.class or #id])
        [var_name][Number(optional)].[modification]
    const [var_name] = document.getElementById([.class or #id])



//QuerySelector:
const heading = document.querySelector('.header__texto h2'); //retorna 0 ó 1 elemento
console.log(heading)
heading.textContent = 'Blog de café con consejos y cursos';    //Modificación de texto
heading.classList.add('nueva-clase');   //Modificación de clase, (agregaciónAmbas son solo algun tipo de modificación)

//QuerySelectorAll:
const enlaces = document.querySelectorAll('.navegacion a');  //retorna 0 o varios elementos
console.log(enlaces);
console.log(enlaces[0]);
console.log(enlaces[1]);
console.log(enlaces[2]);
console.log(enlaces[3]);

enlaces[0].textContent = "Nosotros";
enlaces[0].href = "nosotros.html";          //Modificación de enlace
enlaces[0].classList.add('nueva_clase');
enlaces[0].classList.remove('nueva_clase');     //Modificación de clase remoción

//getElementById:
const heading2 = document.getElementById('heading');
console.log(heading2);
*/

/*************************************** Crear HTML con createELement ****************************************/
/*Notas:
-Sirve para generar nuevos elementos HTML con createElement.
-Se recomienda que la etiqueta se ponga en mayusculas.
-Se puede agregar href
-Se puede agregar texto
-Se puede agregar clase
-Se agrega de forma independiente a los códigos anteriores.


//createElement
const nuevoEnlace = document.createElement('A');

//Agregar href, texto, clase
nuevoEnlace.href = "Nuevo-enlace.html";
nuevoEnlace.textContent = "Tienda Virtual";
nuevoEnlace.classList.add("navegacion__enlace");

//appendChild()
navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
*/


/*************************************** Eventos  ****************************************/
/*Notas:
-Window hace referencia a todo el JS disponible. Es como una referencia igual al document.
-En si los eventos son acciones condicionales que se cumplen.


console.log(1);

window.addEventListener('load', function () {   //Load espera a que el JS y los archivos que dependen del HTML estén listos.
    console.log(2);
});

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () {     //Solo espera que el HTML esté listo (Sin CSS y JS)
    console.log(4);
});

console.log(5);

window.onscroll = function () {
    console.log("Scrolling...");
}
*/

/*************************************** Seleccionar Elementos y asociar un Evento (click)  ****************************************/
/* Notas:
-se usa cuando se asocia a un contenido individual, por eso se selecciona el contenido individual
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();  //Previene la acción natural del evento, es útil para validaciones.
    //Validar Formulario:
    console.log("Enviando Formulario");
});
*/