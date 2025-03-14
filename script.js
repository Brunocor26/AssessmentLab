document.addEventListener("DOMContentLoaded", function() {
    const campoTexto = document.getElementById("campoTexto");
    const lista = document.getElementById("lista");
    const botao = document.getElementById("botao");
    
    // mudar fundo do h1 quando aperta o botão
    botao.addEventListener("click", function() {
        const h1 = document.querySelector("h1");
        h1.textContent = "Botão clicado!";
        h1.style.backgroundColor = "red";
    });
    
    // evento para quando carregar no Enter
    campoTexto.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Texto:", campoTexto.value);
            campoTexto.value = "";
        }
    });
    
    // evento para remover o elemento da lista quando se clica
    lista.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            lista.removeChild(event.target);
        }
    });
});