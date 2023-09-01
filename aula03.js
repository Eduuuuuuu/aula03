'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoImparOuPar=document.getElementById('botao-imparOuPar')
const botaoDiferenca=document.getElementById('botao-diferenca')
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

function imparOuPar(){
    const valor = Number(document.getElementById('numero-imparOuPar').value)
    const resultado = document.getElementById('resultado-imparOuPar')
    if(valor % 2 == 0) {
        resultado.textContent = 'PAR'
    }else {
        resultado.textContent = 'ÍMPAR'
    }
}

function diferenca(){
    const valor1 = Number(document.getElementById('numero-diferenca1').value)
    const valor2 = Number(document.getElementById('numero-diferenca2').value)
    const resultado = document.getElementById('resultado-diferenca')
    if(valor1 > valor2) {
        const diferenca = valor1 - valor2
        resultado.textContent = diferenca
    }else {
        const diferenca = valor2 - valor1
        resultado.textContent = diferenca
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
botaoImparOuPar.addEventListener('click', imparOuPar)
botaoDiferenca.addEventListener('click',diferenca)
botaoMedia.addEventListener('click', mediaAritmetica)