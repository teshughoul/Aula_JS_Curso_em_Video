function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    //var hora = 2

    msg.innerHTML = `Agora são ${hora}: ${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#87CEEB'

    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#FA8072'
    } else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#4B0082'
    }
}
