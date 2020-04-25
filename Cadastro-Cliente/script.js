function salvar() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let estado = document.getElementById("estado").value
    let modalidadeSelecionada = document.querySelector("input[type=radio]:checked")
    

    console.log(nome)
    console.log(email)
    console.log(cpf)
    console.log(estado)
    console.log(modalidadeSelecionada)
if(nome =="") {
    exibirAlertaErro("Preencha o nome!")    
} else if(email =="") {
    exibirAlertaErro("Preencha o email!")
} else if(cpf =="") {
    exibirAlertaErro("Preencha o CPF!")
} else if(estado == "") {

}   else if(modalidadeSelecionada = null) {
    exibirAlertaErro("Escolha a modalidade")
} else {
        exibirAlertaSucesso()
        exibirResultado()
    }
}

function exibirAlertaSucesso() {
    document.querySelector(".alerta").style.visibility = "visible"
    document.querySelector(".alerta").style.backgroundcolor = "lightgreen"
    document.querySelector(".alerta img").src = "tick.svg"
    document.querySelector(".alerta p").innerHTML = "Salvo com sucesso!"

}
function exibirAlertaErro(mensagem){
    document.querySelector(".alerta").style.visibility = "visible"
    document.querySelector(".alerta").style.backgroundColor = "lightcoral"
    document.querySelector(".alerta img").src = "alert.svg"
    document.querySelector(".alerta p").innerHTML = mensagem
}

function fecharAlerta(){
    document.querySelector(".alerta").style.visibility = "hidden"
}
function exibirResultado(){
    let div = document.getElementById("resultado")
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let estado = document.getElementById("estado").value
    let modalidade = document.querySelector("input[type=radio]:checked").value

    Resultado.innerHTML = `
    Nome: ${nome}
    Email: ${email}
    CPF: ${cpf}
    Estado: ${estado}
    Modalidade: ${modalidade}
    `

}


