function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //window.alert('[ERRO] Verifique os dados e tente novamente!')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'menino.png')
                gênero = 'Menino'
            } else if (idade < 21) {
                //Homem Jovem
                img.setAttribute('src', 'homemjovem.png')
                gênero = 'Homem Jovem'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
                gênero = 'Homem adulto'
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
                gênero = 'Homem idoso'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'menina.png')
                gênero = 'Menina'
            } else if (idade < 21) {
                // mulher Jovem
                img.setAttribute('src', 'mulherjovem.png')
                gênero ='Mulher Jovem'
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'mulher.png')
                gênero ='Mulher adulta'
            } else {
                //idosa
                img.setAttribute('src', 'idosa.png')
                gênero = 'Mulher idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}