let num = document.querySelector("input#fnum")
let lista = document.querySelector("selector#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOF(Number(n)) != -1) {
        return true
    } else {
        return false
    }       
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
        //push adiciona valor no array
        //isnumero e inlista foi inventado para saber se o numero esta na lista.
        //ou seja se o valor de isnumero so vai adicionar na lista se !NÂO estiver inLista ele adiciona.
    } else {
        window.alert("Valor invalido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar") 
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos < menor])
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrads.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML == `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}