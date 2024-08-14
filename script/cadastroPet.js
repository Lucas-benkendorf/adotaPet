
function adicionarPet(event){
    event.preventDefault(); // evita da tela recarregar
    const foto = document.getElementById("foto").value 
    const nome = document.getElementById("nome").value
    const cor = document.getElementById("cor").value
    const descricao = document.getElementById("descricao").value
    const especie = document.getElementById("especie").value


    if(nome === ""){
       // alert("Você não digitou o nome!")
       document.getElementById("nome"). style.borderColor = "red"
       document.getElementById("nome"). style.borderWidth = "1px"
       document.getElementById("error-nome"). innerText = "Nome é obrigatório"
    }
}

document. // seu documento HTML
getElementById("form-pet") // ir no documento e localizar o elemento com o id form-pet
.addEventListener('submit', adicionarPet ) // adicionar um evento de submissão vinculado a função adicional