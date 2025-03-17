// quando a página carregar, meter no h1 : "Olá, mundo!"
document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    h1.textContent = "Olá, mundo!";
});


// Obter as referências dos elementos no HTML
const botao = document.getElementById("botao");

const campoTexto = document.getElementById("campoTexto");

const lista = document.getElementById("lista");

// Adicionar um evento quando se clica no botão
botao.addEventListener("click", function() {

    const h1 = document.querySelector("h1");
    h1.textContent = "Botão clicado!"; //muda o texto
    h1.style.backgroundColor = "red"; // muda a cor de fundo do <h1>
});

// adiciona um evento de apertar tecla ao campo de texto
campoTexto.addEventListener("keypress", function(event) {
    // vê se foi Enter
    if (event.key === "Enter") {
        // mete o valor na consola
        console.log("Texto:", campoTexto.value);

        // limpa o campo de texto após o Enter
        campoTexto.value = "";
    }
});

// adicionar um evento de clicar na lista de elementos
lista.addEventListener("click", function(event) {
    // verifica se o elemento clicado é um <li>
    if (event.target.tagName === "LI") {
        // remove o elemento da lista
        lista.removeChild(event.target);
    }
});
