let listaDeamigos = [];  // Armazena os amigos na lista
let lista = document.getElementById('listaAmigos');  // Referência à lista de amigos no HTML
let inputNomeInserido = document.getElementById('amigo');  // Referência ao campo de entrada de nome
let resultado = document.getElementById('resultado');  // Referência à área onde o resultado será exibido
let contador = 1;  // Contador para a numeração dos amigos
let buttonSortear = document.querySelector('.button-draw');  // Referência ao botão de sortear

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = inputNomeInserido.value.trim();  // Remove espaços extras do nome inserido

    // Verifica se o campo de nome está vazio
    if (nomeAmigo === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    // Verifica se o amigo já foi adicionado à lista
    if (listaDeamigos.some(amigo => amigo.nome === nomeAmigo)) {
        alert('Amigo já adicionado.');
        return;
    }

    // Adiciona o amigo com a numeração à lista
    listaDeamigos.push({ numero: contador, nome: nomeAmigo });
    contador++;  // Incrementa o contador para o próximo amigo
    atualizarLista();  // Atualiza a lista exibida
    inputNomeInserido.value = '';  // Limpa o campo de entrada
    inputNomeInserido.focus();  // Foca novamente no campo para facilitar a inserção do próximo nome

    // Habilita o botão de sorteio se houver pelo menos um amigo na lista
    if (listaDeamigos.length > 0) {
        buttonSortear.disabled = false;
    }
}

// Função para atualizar a lista de amigos exibida na interface
function atualizarLista() {
    lista.innerHTML = '';  // Limpa a lista exibida antes de atualizar

    // Para cada amigo na lista, cria um item com a numeração e o nome
    listaDeamigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = `${amigo.numero}. ${amigo.nome}`;  // Exibe o número seguido pelo nome
        lista.appendChild(item);  // Adiciona o item à lista no HTML
    });
}

// Função para sortear um amigo secreto da lista
function sortearAmigo() {
    // Verifica se há amigos na lista antes de realizar o sorteio
    if (listaDeamigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Sorteia um amigo aleatoriamente
    let amigoSorteado = listaDeamigos[Math.floor(Math.random() * listaDeamigos.length)];

    // Exibe o nome do amigo sorteado
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado.numero}. ${amigoSorteado.nome}</strong></li>`;

    // Limpa a lista de amigos e a exibição
    listaDeamigos = [];
    contador = 1;  // Reseta o contador de numeração
    atualizarLista();  // Atualiza a lista exibida, que agora estará vazia

    // Desabilita o botão de sorteio após o sorteio
    buttonSortear.disabled = true;
}

// Função para limpar a lista de amigos e o resultado do sorteio
function limparLista() {
    listaDeamigos = [];  // Reseta a lista de amigos
    contador = 1;  // Reseta o contador de numeração
    atualizarLista();  // Atualiza a lista exibida
    resultado.innerHTML = '';  // Limpa o resultado do sorteio
    buttonSortear.disabled = true;  // Desabilita o botão de sorteio
}
