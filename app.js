let listaAmigos = [];

function agregarAmigo()
{
    let amigo = document.getElementById('amigo').value;
    
    if(amigo == '')
    {
        alert('Por favor, inserte un nombre.');
    }

    else
    {
        listaAmigos.push(amigo);
        actualizarAmigos();
        document.getElementById('amigo').value = '';
    }
}

function actualizarAmigos()
{
    document.getElementById('listaAmigos').innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++)
    {
        document.getElementById('listaAmigos').innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

function sortearAmigo()
{
    let numeroAmigo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[numeroAmigo];
    
    if(listaAmigos.length == 0)
    {
        alert("Ingrese amigos para sortear.");
    }

    else
    {
        document.getElementById('resultado').innerHTML = amigoSeleccionado;
    }
}