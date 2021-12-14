function operacoesElementais(){
    var myList = document.getElementById("#myList").value
    document.getElementById("operacao").value = myList
    return myList
}
operacoesElementais()


function calcular () {
    var primeiraVariavel = document.querySelector("#priemiraVariavel").value;
    primeiraVariavel = parseInt(primeiraVariavel)

    var segundaVariavel = document.getElementsById(segundaVariavel).value;
    segundaVariavel = parseInt(segundaVariavel)

    var resultado = document.querySelector("#resultado")

    var operacao = document.querySelector("#operacao")
    var recuperandoOperacao = operacao.value

    if (recuperandoOperacao=="adicao"){
        resultado.innerText = primeiraVariavel + segundaVariavel
    }
    if (recuperandoOperacao=="subtracao"){
        resultado.innerText = primeiraVariavel - segundaVariavel
    }
    if (recuperandoOperacao=="multiplicacao"){
        resultado.innerText = primeiraVariavel * segundaVariavel
    }
    if (recuperandoOperacao=="divisao"){
        if (segundaVariavel == 0){
            resultado.innerText = "Impossivel a divisão por 0 "
        }
        else {
            resultado.innerText = (primeiraVariavel / segundaVariavel).value
        }

        resultado.innerText = primeiraVariavel / segundaVariavel
    }
   
}