// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = ['carlos', 'juan', 'pedro', 'luis', 'Adrian'];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nuevoAmigo = inputAmigo.value.trim();

    if (nuevoAmigo === '') {
        alert('Por favor, ingrese un nombre de amigo válido.');
        return;
    }

    amigos.push(nuevoAmigo);
    console.log(amigos);

    // Llama a la función para actualizar la lista después de agregar un amigo
    actualizarListaAmigos();

    inputAmigo.value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista HTML
    const lista = document.getElementById("listaAmigos");
    
    // 2. Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";
    
    // 3. Iterar sobre el array de amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        const nombreAmigo = amigos[i];
        
        // Crear un nuevo elemento <li>
        const nuevoElementoLista = document.createElement("li");
        
        // Asignar el nombre del amigo al contenido del <li>
        nuevoElementoLista.textContent = nombreAmigo;
        
        // 4. Agregar el nuevo elemento a la lista HTML
        lista.appendChild(nuevoElementoLista);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length < 2) {
        alert("¡Necesitas al menos 2 amigos para sortear!");
        return;
    }
    
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    const elementoResultado = document.getElementById("resultado");
    
    if (elementoResultado) {
        elementoResultado.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;
    } else {
        console.error("No se encontró el elemento con id 'resultado'");
    }
}

// Llama a la función de actualización al cargar la página para mostrar los amigos iniciales
actualizarListaAmigos();
