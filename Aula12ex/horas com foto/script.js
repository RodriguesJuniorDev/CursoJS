function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique essa porra e tente mais tarde")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "bbhomem.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "homemjovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "homem.png")
            } else {
                //idoso
                img.setAttribute("src", "idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "bbmulher.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "mulherjovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "mulher.png")
            } else {
                //idoso
                img.setAttribute("src", "idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}