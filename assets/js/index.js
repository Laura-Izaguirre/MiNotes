//Constantes iniciales
const main = document.getElementById("main");
const contenidoInicial = document.getElementById("contenido-1");
const mainBtn = document.getElementById("main-btn");

//Constantes de almacenar contenido
const contenido2 = document.getElementById("contenido-2");
const contenidoNotas = document.getElementById("const-notas");

//Crear una variable global para almacenar elementos
let mainForm;

//Variables de forma globales
let titulo;
let nota;
let fecha;

main.addEventListener('click', (e) => {
//Confirmar si el click es el btn principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregarNota);
    //Asignar a mainForm el elemento de forma
    mainForm = document.getElementById("main-form");
  }

  if (e.target.id === "borrar-nota") {
    let checkClick = confirm("Seguro que quieres borrar?");

    if (checkClick == true) {
      contenido2.remove();
    }
  }

  //Para encontrar el elemento de submit de la forma

  if (e.target.id === "agregar-nota") {
    mainForm.addEventListener('submit', (event) => {
      //Evitar que la acción por defecto pase
      event.preventDefault();

      //Crear constantes para los inputs para obtener información de la forma
      titulo = document.getElementById("titulo");
      nota = document.getElementById("nota");
      fecha = document.getElementById("fecha");

      const formulario = {
        titulo1: titulo.value,
        notaText: nota.value,
        fecha1: fecha.value,
      }

      const { titulo1, notaText, fecha1 } = formulario;

      // Creo constante con informacion
      const notaHtmlConInfo = agregarNotaDinamico(titulo1, notaText, fecha1);

      // Insertar HTML nuevo
      contenidoNotas.append(notaHtmlConInfo);

      // Reiniciar los valores de la forma
      titulo.value = '';
      nota.value = '';
      fecha.value = '';
    });

  }

});

//Crear elemento con HTML

const agregarNota = document.createElement('div');
agregarNota.innerHTML = `
<section id="main-js">
<form id="main-form">
<input 
type="text" 
name="titulo" 
id="titulo" 
class="input" 
placeholder="Ingresa un título"
>
<input 
type="text" 
name="nota" 
id="nota" 
class="input" 
placeholder="Agregar tu nota"
>
<input type="text" 
name="fecha" 
id="fecha" 
class="input" 
placeholder="Agregar la fecha de tu nota" 
>

<div id="button-container">
<button type="button" id="borrar-nota" class="button"><img src="./assets/Images/logo-rojo.png" alt="logo-rojo">
Borrar Nota</button>
<button type="submit" id="agregar-nota" class="button"><img src="./assets/Images/logo-negro.png" alt="logo-negro">Agregar Nota</button>
</div>
</form>
</section>
`;

//Función para agregar html dinámico en base a los resultados

function agregarNotaDinamico(titulo, nota, fecha) {
  const notaEnHtml = document.createElement('div');
  notaEnHtml.innerHTML = `
    <div id="notas">
    <h2 id="titulo">${titulo}</h2>
    <p id="nota">${nota}</p>
    <p id="fecha">${fecha}</p>
    </div>

  `;

  return notaEnHtml;
}

