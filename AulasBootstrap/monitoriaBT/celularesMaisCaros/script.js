    console.log("Ola,mundo!")

    var celularipx = document.querySelector("#iphone-x");

        console.log(celularipx);

    var precoIPX = celularipx.querySelector(".info-preco");
    var preco = precoIPX.textContent;
    console.log(preco)
    
    var descontoIPX = celularipx.querySelector("infp-desconto");
    var desconto = descontoIPX.textContent;
    var desconto = desconto/100

    console.log(desconto);

    var calculoTotal = preco - (preco*desconto)
    console.log(calculoTotal)
    