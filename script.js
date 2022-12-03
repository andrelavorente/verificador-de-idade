function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        alert('[ERRO] Dados incorretos!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        
    }
}