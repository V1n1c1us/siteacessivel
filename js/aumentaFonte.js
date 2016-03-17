var tamanhoOriginal = new Number();
var tamanhoOriginal = 25;

function tamanhooriginal() {
    document.getElementById("container").style.fontSize = tamanhoOriginal + 'px';
}
function fonte(e) {
    var elemento = document.getElementById("container");
    var atual = elemento.style.fontSize;

    if (e == 'a') {
        atual = parseInt(atual) + 10 + 'px'; // soma o tamanho atual + 2
    } else if (e == 'b') {
        atual = parseInt(atual) - 10 + 'px';
    } else if (e == 'c') {
        atual = tamanhoOriginal + 'px';
        
    }
    elemento.style.fontSize = atual;
}
