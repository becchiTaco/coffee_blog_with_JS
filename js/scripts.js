
/*************************************** Eventos de Inputs, TextArea y Submit  ****************************************/
/*Notas:
-Submit se usa cuando se completa un formulario, por eso se selecciona todo el formulario y se valida con un boton o un enlace de tipo submit. */
const datos = {         //Creación de Objeto con sus respectivas propiedades en blanco, en este caso para el formulario.
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');           //Se selecciona el componente HTML # para id . para clase y se relaciona a una constante.
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const fomrulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);                //Se genera un evento que al realziar un input activará la función leerTexto
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
fomrulario.addEventListener('submit', validacion);          //Se genera un evento que al realziar un submit activará la función validacion

function validacion(evento) {                                       //Se crea la función validacion con el parametro evento 
    evento.preventDefault();                                        //Previene el comportamiento predeterminado del formulario (enviar datos al servidor y recargar la página)
    const { nombre, email, mensaje } = datos;                       //Destructuring para extraer propiedades del objeto datos.
    if (nombre === "" || email === "" || mensaje === "") {          //Valida que todos los datos estén vacios
        mostrarAlerta("Todos los Campos son Obligatorios", true);   //Si es verdad se ejecuta la función mostrarAlerta con el parametro de mensaje dado y un valor booleano en true para otra función que se encuentra más adelante
        return;                                                     //Sale de la función evitando el envio del formulario.
    }
    mostrarAlerta("Tu correo se ha Enviado");                       //Si todas las variables tienen un valor se llama a estan función con le parametro de mensaje dado.
}

function leerTexto(e) {                                             //Se crea la función leerTexto con el parámetro e (Usualemnte se usa para manejar eventos del formulario, donde e es el evento que se produce)
    datos[e.target.id] = e.target.value;                            //e.target se usa para referirse al elemento que causó un evento, mientras que e.target.id se espera que sea una cadena que se corresponda con una propiedad en el objeto datos. La propiedad e.target.value contiene el valor actual del elemento que generó el evento. Esta técnica se emplea frecuentemente para actualizar un objeto con datos de un formulario, donde el id del elemento del formulario se usa como la clave para esa propiedad en el objeto datos.
    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {                     //Se define la función mostrarAlerta con dos argumentos, el mensaje y error que por default está en null (esto indica que si no se activa este argumento, el mensaje no tiene errores y diferencia entre estilos más adelante)
    const alerta = document.createElement('P');                     //Crea un elemento parrafo con variable alerta.
    alerta.textContent = mensaje;                                   //El contenido de parrafo se iguala al argumento mensaje
    if (error) {                                                    //Valida si se aplica el estilo error o correcto del CSS, si error se mantiene en null, tomará el valor correcto, si toma el valor de true, el valor será error
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    fomrulario.appendChild(alerta);                                 //Se agrega el parrafo de alerta como hija del formulario.
    setTimeout(() => {                                              //Establece un tiempo de 3 segundos para eliminar el mensaje    
        alerta.remove();
    }, 3000);
}