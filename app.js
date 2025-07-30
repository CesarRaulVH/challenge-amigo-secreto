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
        document.getElementById('amigo').value = '';
    }
}