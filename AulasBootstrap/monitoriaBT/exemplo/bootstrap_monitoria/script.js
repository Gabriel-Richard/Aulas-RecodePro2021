let opcoes = document.getElementById("opcoes");

let estados = ["Bahia","São Paulo", "Espirito Santo", "Rio de Janeiro", "Santa Catarina"]


    let markup;
    console.log(markup)
    for (let i = 0; i < estados.length; i++) {
        markup += `<option value="${i}">${estados[i]}</option>
        `
    
    let markup2 = `
    
        <label for="inputEstado">Estado</label>
        <select id="inputEstado" class="form-control">
            <option selected>Escolher...</option>
            <option>...</option>
        </select>`
    opcoes.innerHTML = markup2
}

options()


