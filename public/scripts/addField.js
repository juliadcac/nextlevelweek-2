//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//executar uma açao
function cloneField() {
    //duplicar os campos. que campos?
    const newFieldContanier = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. que campos?
    const fields = newFieldContanier.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })

    //colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContanier)
}
    