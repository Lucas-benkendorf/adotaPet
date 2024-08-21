function deletar(id) {
    // 1- ir no local e busca o array de animais
    const animaisAtuaisNaMemoria = JSON.parse(localStorage.getItem("animais"))
    const animaisFiltrados = animaisAtuaisNaMemoria.filter((item) => item.id !== id)

    localStorage.setItem("animais", JSON.stringify(animaisFiltrados))

    document.getElementById("lista-animais").innerText = ''
    carregarDados()
}




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
        div.append(h2)



        const buttonDelete = document.createElement("button")
        buttonDelete.innetText = "Deletar"
        buttonDelete.onclick = () => deletar(pet.id)


        const buttonAdotar = document.createElement("button")
        buttonAdotar.innerText = "Adotar"
        buttonAdotar.onclick = () => window.location.href = "detalhes.html?id" + pet.id


        const divButtons = document.createElement("div")
        divButtons.classList.add("petCardButtons")
        divButtons.append(buttonAdotar)
        divButtons.append(buttonDelete)

        div.append(divButtons)

        //div.append(button)

        lista.appendChild(div)

    })
}

document.addEventListener('DOMContentLoaded', carregarDados) // quando a tela for renderizada vai disparar a funcao