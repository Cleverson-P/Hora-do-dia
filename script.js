function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudação = window.document.getElementById('saudação')
    var data = new Date()
    var hora  = data.getHours() 
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if(hora >= 0 && hora < 12) {
        img.src = 'manhã.png'
        saudação.innerHTML = '<strong>BOM DIA !</strong>'
        document.body.style.background = '#F9E76E'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        saudação.innerHTML = '<strong>BOA TARDE !</strong>'
        document.body.style.background = '#ea841f'
    }else {
        img.src = 'noite.png'
        saudação.innerHTML = '<strong>BOA NOITE!</strong>'
        document.body.style.background = '#1c3349'
    }

}