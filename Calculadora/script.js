function somar() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let resultado = parseFloat(numero1) + parseFloat(numero2)
    exibirResultado(resultado)
}
function subtrair() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let resultado = parseFloat(numero1) - parseFloat(numero2)
    exibirResultado(resultado)
}
function dividir() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let resultado = parseFloat(numero1) / parseFloat(numero2)
    exibirResultado(resultado)
}
function multiplicar() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let resultado = parseFloat(numero1) * parseFloat(numero2)
    exibirResultado(resultado)
}
function exibirResultado(resultadoRecebido) {
    document.getElementById("resultado").innerHTML = resultadoRecebido
    document.getElementById("resultado").style.opacity = "1"
    }

function fecharResultado(){
    
    document.getElementById("resultado").style.opacity = "0"

}