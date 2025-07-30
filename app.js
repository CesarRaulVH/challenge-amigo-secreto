const listaAmigos = [];

function agregarAmigo()
{
    const amigo = document.getElementById('amigo').value;
    
    if(amigo == '')
    {
        alert('Por favor, inserte un nombre.');
        return;
    }

    listaAmigos.push(amigo);
    actualizarAmigos();
    document.getElementById('amigo').value = '';
    return;
}

function actualizarAmigos()
{
    document.getElementById('listaAmigos').innerHTML = '';
    let amigos = '';

    for(let i = 0; i < listaAmigos.length; i++)
    {
        amigos += `<li>${listaAmigos[i]}</li>`;
    }

    document.getElementById('listaAmigos').innerHTML = amigos;
    return;
}

function sortearAmigo()
{
    if(listaAmigos.length == 0)
    {
        alert("Ingrese amigos para sortear.");
        return;
    }

    const numeroAmigo = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[numeroAmigo];
    
    document.getElementById('resultado').innerHTML = `Amigo seleccionado: ${amigoSeleccionado}`;
    return;
}