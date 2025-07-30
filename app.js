// Declaramos una constante que almacenará los nombres de los amigos ingresados.
const listaAmigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo()
{
    // Obtenemos el valor ingresado en el input con id = "amigo"
    const amigo = document.getElementById('amigo').value;
    
    // Validamos que el input no esté vacío
    if(amigo == '')
    {
        alert('Por favor, inserte un nombre.');
        return; // Salimos de la función si no se ingresó nada
    }

    // Agregamos el nombre del amigo a la lista
    listaAmigos.push(amigo);

    // Actualizamos la lista visible en pantalla
    actualizarAmigos();

    // Limpiamos el input después de agregar el nombre
    document.getElementById('amigo').value = '';
    return;
}

// Función para mostrar la lista actualizada de amigos en pantalla
function actualizarAmigos()
{
    // Limpiamos el contenido previo del elemento con id = "listaAmigos"
    document.getElementById('listaAmigos').innerHTML = '';

    // Variable para acumular los elementos <li> que representan a cada amigo
    let amigos = '';

    // Recorremos la lista de amigos y vamos agregando cada uno como <li>
    for(let i = 0; i < listaAmigos.length; i++)
    {
        amigos += `<li>${listaAmigos[i]}</li>`;
    }

    // Insertamos la lista generada dentro del elemento HTML
    document.getElementById('listaAmigos').innerHTML = amigos;
    return;
}

// Función para seleccionar un amigo aleatoriamente
function sortearAmigo()
{
    // Verificamos si la lista está vacía
    if(listaAmigos.length == 0)
    {
        alert("Ingrese amigos para sortear.");
        return;
    }

    // Generamos un número aleatorio entre 0 y la longitud de la lista
    const numeroAmigo = Math.floor(Math.random() * listaAmigos.length);

    // Seleccionamos el amigo correspondiente al número aleatorio generado
    const amigoSeleccionado = listaAmigos[numeroAmigo];
    
    // Mostramos el nombre del amigo seleccionado en el elemento con id = "resultado"
    document.getElementById('resultado').innerHTML = `Amigo secreto seleccionado: ${amigoSeleccionado}`;

    // Sacamos al amigo del sorteo
    listaAmigos.splice(numeroAmigo, 1);

    // Actualizamos la lista visible en pantalla
    actualizarAmigos();
    return;
}