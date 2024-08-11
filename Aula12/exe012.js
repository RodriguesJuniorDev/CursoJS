var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamenmte ${hora} horas.`)
if (hora < 12) {
    console.log("Bom dia")
}else if (hora <= 18) {
    console.log("Bora tarde!!")
}else {
    console.log(" Boa Noiteee!!")
}