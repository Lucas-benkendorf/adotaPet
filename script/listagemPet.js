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
        img.style.objectFit = "cover"
        img.setAttribute("src", "animal.foto")
        div.append(img)



        const h2 = document.createElement("h2")
        h2.innerText = animal.nome



        const button = document.createElement("button")
        button.innetText = "Adicionar"
        div.append(button)

        lista.appendChild(div)

    })
}

document.addEventListener('DOMContentLoaded', carregarDados) // quando a tela for renderizada vai disparar a funcao