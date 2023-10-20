const aumentarFonte = () => {
    aumentarOuDiminuirFontes(1);
};

const diminuirFonte = () => {
    aumentarOuDiminuirFontes(-1);
};

const aumentarOuDiminuirFontes = (incremento) => {
    const elementosDeTexto = document.querySelectorAll('*'); // Seleciona todos os elementos da página

    elementosDeTexto.forEach(elemento => {
        let estilo = window.getComputedStyle(elemento);
        let tamanhoFonte = parseInt(estilo.fontSize, 10);

        if (!isNaN(tamanhoFonte)) {
            tamanhoFonte += incremento; // Aumente ou diminua o tamanho da fonte conforme o incremento
            elemento.style.fontSize = tamanhoFonte + "px";
        }
    });
};

export{diminuirFonte,aumentarFonte}