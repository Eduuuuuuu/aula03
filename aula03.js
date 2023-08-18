'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoMedia = document.getElementById('mediaAritmetica')

function somar (){

    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total

}

function identificar() {

    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0){

        resultado.textContent = 'POSITIVO'

    }else if (numero < 0){

        resultado.textContent = 'NEGATIVO'

    }else{

        resultado.textContent = 'ZERO'

    }

}

function multiplicar() {

    const numero = Number(document.getElementById('numeroInt').value)
    const resultado = document.getElementById('resultado-item3')

    const dobro = numero * 2
    

    if (dobro < 30){

        resultado.textContent = 'RESULTADO MENOR QUE 30!'

    }else if (dobro >= 30){

        resultado.textContent = dobro

    }

}

function mediaAritmetica(){

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado-item4')

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){

        alert("APROVADO, SUA MÉDIA FOI: " + media)
        resultado.textContent=media

    }else if (media < 7){

        const valor5 = prompt("RECUPERAÇÃO, SUA MÉDIA É: " + media + "\nINSIRA SUA NOTA DE EXAME:")
        const media2 = (media + Number(valor5)) / 2

        if (media2 >= 5){

            alert("APROVADO EM EXAME, SUA MÉDIA FOI: " + media2)
            resultado.textContent = media2

        }else {

            alert("REPROVADO, SUA MÉDIA FOI: " + media2)
            resultado.textContent = media2

        }

    }

}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMultiplicar.addEventListener('click', multiplicar)
botaoMedia.addEventListener('click', mediaAritmetica)