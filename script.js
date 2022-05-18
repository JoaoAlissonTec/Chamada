let pres = []
let result = document.querySelector("div#final")
let nome = document.querySelector("input#txtname")
function add(){
    if(nome.value.length == 0){
        alert("[Erro] Digite um nome.")
    }else{
        pres.push(nome.value)
        pres.sort()
    }
    nome.value = ''
    nome.focus()
}
function fim(){
    nome.focus()
    result.innerHTML = ''
    let nnomes = pres.length
    if(pres.length == 0){
        alert('[Erro] Nenhum nome cadastrado.')
    }else{
        result.innerHTML += `<p>${nnomes} aluno(s) matriculado(s)<br>Chamada:</p>`
        for(let i = 0; i < nnomes; i++){
            let pos = i+1
            result.innerHTML += `<strong>Nº${pos}.</strong> ${pres[i]}<br>`
        }
    }
}