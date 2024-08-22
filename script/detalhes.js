function carregarDetalhesAnimais(){
const animaisLista =JSON.parse(localStorage.getItem("animais"))

const url = new URL (window.location.href)
const params = new URLSearchParams(url.search)
const idURL = params.get('id')


const animalEncontrado = animaisLista.find((item) => item.id == id )
if(animalEncontrado === undefined){
    document.getElementById('mensagemError').style.display = "block"
    document.getElementById("conteudo").style.display = 'none !important'

}else{
   
document.getElementById("nome").innerText = animalEncontrado.nome
document.getElementById("foto").setAttribute("src", animalEncontrado.foto)
document.getElementById("idade").innerText = animalEncontrado.idade
document.getElementById("cor").innerText = animalEncontrado.cor
document.getElementById("especie").innerText = animalEncontrado.especie
document.getElementById("descricao").innerText = animalEncontrado.descricao

}}



document.addEventListener("DOMContentLoaded", carregarDetalhesAnimais)