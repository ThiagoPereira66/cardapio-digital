const menu = document.getElementById("botao-cardapio")
const opcoesImg = document.getElementById("img")
const opcoesNome = document.getElementById("nome-caldo")
const opcoesIngrediente = document.getElementById("ingredientes")
const selecionar = document.getElementById("selecionar-caldo")
const botaoFechar = document.getElementById("fechar")

const mudarCard = trocaCrd = () =>{
    const img = document.getElementById("img")
    const nomeCaldo = document.getElementById("nome-caldo")

    if(selecionar.value === 'Frango'){
        img.src = "./img/caldo de frango.jpg"
        nomeCaldo.innerHTML = "Caldo de Frango"
    }
    if(selecionar.value === 'Caldo de Feijão'){
        img.src = "./img/caldo de feijao.jpg"
        nomeCaldo.innerHTML = "Caldo de Feijão"
    }
    if(selecionar.value === 'Mandioca'){
        img.src = "./img/suculentos-pedacos-de.jpg"
        nomeCaldo.innerHTML = "Mandioca"
    }
    
    if(selecionar.value === 'Vaca Atolada'){
        img.src = "./img/vaca tolada.jpg"
        nomeCaldo.innerHTML = "Vaca Atolada"
    }
    if(selecionar.value === 'Cabotia'){
        img.src = "./img/caldo de cabotia.jpg"
        nomeCaldo.innerHTML = "Cabotia"
    }

}
const fechar = fecharMenu = () =>{
    botaoFechar.className = "fecharMenu"
}

//botaoFechar.addEventListener('click', fechar )

selecionar.addEventListener('change', mudarCard)

function chameOMenu() {
    menu.className = "mostrar-menu"
}
