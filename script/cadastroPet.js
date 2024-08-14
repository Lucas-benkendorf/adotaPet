
function adicionarPet(event) {
    event.preventDefault(); // evita da tela recarregar
    const foto = document.getElementById("foto").value
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("nome").value
    const cor = document.getElementById("cor").value
    const descricao = document.getElementById("descricao").value
    const especie = document.getElementById("especie").value



    if (!foto) {
        document.getElementById("foto").style.borderColor = "red"
        document.getElementById("foto").style.borderWidth = "1px"
        document.getElementById("error-foto").innerText = "A foto é obrigatória"
    } else {
        document.getElementById("foto").style.borderColor = ""
        document.getElementById("foto").style.borderWidth = ""
        document.getElementById("error-foto").innerText = ""
    }



    if (nome === "") {
        // alert("Você não digitou o nome!")
        document.getElementById("nome").style.borderColor = "red"
        document.getElementById("nome").style.borderWidth = "1px"
        document.getElementById("error-nome").innerText = "O nome é obrigatório"
    } else {
        document.getElementById("nome").style.borderColor = ""
        document.getElementById("nome").style.borderWidth = ""
        document.getElementById("error-nome").innerText = ""
    }




    if (idade === "") {
        document.getElementById("idade").style.borderColor = "red"
        document.getElementById("idade").style.borderWidth = "1px"
        document.getElementById("error-idade").innerText = "A idade é obrigatório"
    } else {
        document.getElementById("idade").style.borderColor = ""
        document.getElementById("idade").style.borderWidth = ""
        document.getElementById("error-idade").innerText = ""
    }




    if (descricao === "") {
        document.getElementById("descricao").style.borderColor = "red"
        document.getElementById("descricao").style.borderWidth = "1px"
        document.getElementById("error-descricao").innerText = "A descrição é obrigatório"
    } else {
        document.getElementById("descricao").style.borderColor = ""
        document.getElementById("descricao").style.borderWidth = ""
        document.getElementById("error-descricao").innerText = ""
    }




    if (especie === "Selecione uma opção") {
        document.getElementById("especie").style.borderColor = "red"
        document.getElementById("especie").style.borderWidth = "1px"
        document.getElementById("error-especie").innerText = "A espécie é obrigatório"
    } else {
        document.getElementById("especie").style.borderColor = ""
        document.getElementById("especie").style.borderWidth = ""
        document.getElementById("error-especie").innerText = ""
    }


    const animal = {
        foto: foto,
        nome: nome,
        idade: idade,
        cor: cor,
        descricao: descricao,
        especie: especie
    }

}

document. // seu documento HTML
    getElementById("form-pet") // ir no documento e localizar o elemento com o id form-pet
    .addEventListener('submit', adicionarPet) // adicionar um evento de submissão vinculado a função adicional