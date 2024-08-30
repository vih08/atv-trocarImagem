const paragrafo1 = document.getElementById("paragrafo1")
const paragrafo2 = document.getElementsByClassName("paragrafo2")[0]
const botao = document.querySelector("#botao")

const link = document.getElementById("link")
const imagem = document.getElementById("imagem")
const botaoImagem = document.getElementById("botaoImagem")

link.setAttribute("href", "www.petlove.com.br")
link.textContent = "Visitar a petlove"

link.style.color = "red"

var imagemAtual = 
botaoImagem.addEventListener("click", function(){
       if (imagemAtual === 1){
        imagem.setAttribute("src", "imagem2.jpeg")
        imagemAtual = 2
       }else{
        imagem.setAttribute("src", "imagem.jpeg")
        imagemAtual = 1
       }
})

botao.addEventListener("click", function(){
    paragrafo1.textContent = "A aula da prof Keliven é boa"
    paragrafo2.textContent = "É verdade esse bilhete"
})