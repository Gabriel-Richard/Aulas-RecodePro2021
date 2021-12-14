console.log("Ola mundo!!!");

var celular = document.querySelectorAll(".celular");

console.log(celular.length);

for( var i = 0; i < celular.length; i++){
    var celcularipx = celular[i]

    var precoIPX = celcularipx.querySelector(".info-preco");
    var preco = precoIPX.textContent;

    console.log(preco)

    var descontoIPX = celcularipx.querySelector(".info-desconto");

    var desconto = descontoIPX.textContent;
    var desconto = desconto/100;
    var calculoTotal = preco - (preco * desconto);

    console.log(calculoTotal);

    var total = celcularipx.querySelector(".info-total");

    var precoVal 

    var precoVal = true;
    var descVal = true;
    
    if (preco > 10000 || preco < 0){
        total.textContent = "Preço invalido"
        console.log("Preço invalido!!!")
        //celularipx.style.color = "red"
        celcularipx.classList.add("dados-invalidos")
        precoVal = false;

    }
    if (descontoIPX.textContent > 100 || descontoIPX.textContent < 0){
        total.textContent = "Desconto invalido"
        console.log("Desconto invalido")
        //celularipx.style.backgroundColor = "red"
        celcularipx.classList.add("dados-invalidos")
        descVal = false;
    }
    if (precoVal && descVal){
        total.textContent = calculoTotal(preco, desconto);
    }

}
    function calcularTotal(precoipx, descontoipx) {
        var desconto = descontoipx/100;
        var calculoTotal = precoipx - (precoipx * desconto).toFixed(2);
        return calculoTotal
        
    }

    function ValidarPreco(preco) {

        
    }

var titulo = document.querySelector(".titulo")

    titulo.addEventListener("click", function() {
        console.log("fui clicado")
    })

var addCelular= document.querySelector("#add-celular");
console.log(addCelular.textContent)

addCelular.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Clicou no botão")

    var addform = document.querySelector("#add.form")
    console.log("addForm")

    //conseguimos pegar os dados da tabela com a ajuda do nome e o valor
    console.log(addForm.nome.value)
    console.log(addForm.preco.value)

    let celular = dadosDoFormulario(addForm)
    
    //console.log (nome)

    

    var tabela =  document.querySelector ("#cel-table")

    tabela.appendChild(celularTr);

    addform.reset

    var nomeTd = document.createElement("td");
    nomeTd,classList.add("info-nome");   

    var nomeTd = document.createElement("td")
    var anoTd = document.createElement("td")
    var precoTd = document.createElement("td")
    var descontoTd = document.createElement("td")
    var totalTd = document.createElement("td")


    nomeTd.textContent = nome;
    anoTd.textContent = ano;
    precoTd.textContent = preco;
    descontoTd.textContent = desconto;
    totalTd.textContent = celular.total;
  
})

function criandoTr(celular) {
    var celularTr = document.createElement("tr");
    celularTr.classList.add("celular")

    let nomeTd = montaTd(celular.nome, "info-nome");
    let anoTd = montaTd(celular.ano, "info-ano");
    let precoTd = montaTd(celular.preco, "info-preco");
    let descontoTd = montaTd(celular.desconto, "info-desconto");
    let totalTd = montaTd(celular.total, "info-total");

    celularTr.appendChild(nomeTd);   
    celularTr.appendChild(anoTd);
    celularTr.appendChild(precoTd);
    celularTr.appendChild(descontoTd);
    celularTr.appendChild(totaltd)
    return celularTr
}
    function montaTd(dado, classe) {
        let td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;
        return td
        
    }

function dadosDoFormulario (form) {
    let celular = {
         nome: Form.nome.value,
         ano: Form.ano.value,
         preco: Form.preco.value,
         desconto: Form.desconto.valu,
         total: calculoTotal(form.preco.value, form.desconto.value)
    }
    return    
}