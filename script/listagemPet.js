function carregarDados() {
    const animaisNaMemoria = JSON.parse(localStorage.getItem('animais'))
    const lista = document.getElementById("lista-animais")


    animaisNaMemoria.forEach((animal) => {

        document.createElement("h1")
        lista.appendChild(meuH1)

        const div = document.createElement("div")
        div.classList.add("item-pet")
        const img = document.createElement('img')
        img.setAttribute("width", "200px")
        img.setAttribute("src", "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600")
        div.append(img)

        const h2 = document.createElement("h2")

        h2.innerText = "Gato Dirceu"

        const button = document.createElement("button")
        button.innetText = "Adicionar"
        div.append(button)

        lista.appendChild(div)

    })



}



document.addEventListener('DOMContentLoaded', carregarDados) // quando a tela for renderizada vai disparar a funcao