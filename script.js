function changeShadowBox(interval) {
    const bfImage = window.document.getElementById("bf-section");
    let cor = 'azul'
    setInterval(() => {
    if (cor == 'azul'){
            bfImage.style.transition = 'all 2s';
            bfImage.style.boxShadow = '5px 5px 10px 5px #f983fb';
            cor = 'rosa'
    } else {
            bfImage.style.boxShadow = '-5px -5px 10px 5px #4BAFD0'
            cor = 'azul'
    }
    }, interval);
} 

changeShadowBox(1000)

function buttonPS4(){
    const button = window.document.getElementById('button-ps4')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}
function buttonPS5(){
    const button = window.document.getElementById('button-ps5')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}
function buttonXOne(){
    const button = window.document.getElementById('button-xone')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}
function buttonXSeries(){
    const button = window.document.getElementById('button-xseries')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}
function buttonNintendo(){
    const button = window.document.getElementById('button-nintendo')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}
function buttonPC(){
    const button = window.document.getElementById('button-pc')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}
function buttonPS4(){
    const button = window.document.getElementById('button-ps4')
    let atributo = button.getAttribute('clicado')
    if(atributo == 'false'){
        button.setAttribute('clicado', 'true')
        button.style.backgroundColor = '#4BAFD0'
    } else if (atributo == 'true'){
        button.setAttribute('clicado', 'false')
        button.style.backgroundColor = '#ddd'
        button.style.fontcolor = '#000'
    }
}

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let pS4 = document.getElementById('button-ps4').getAttribute('clicado')
    let pS5 = document.getElementById('button-ps5').getAttribute('clicado')
    let xOne = document.getElementById('button-xone').getAttribute('clicado')
    let xSeries = document.getElementById('button-xseries').getAttribute('clicado')
    let nintendo = document.getElementById('button-nintendo').getAttribute('clicado')
    let pC = document.getElementById('button-pc').getAttribute('clicado')
    let data = {
        nome, 
        email,
        pS4,
        pS5,
        xOne,
        xSeries,
        nintendo,
        pC
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)
    let containerFormulario = document.getElementById('bf-formulario')
    containerFormulario.innerHTML = "<img id='mario' src='./assets/mario.png'/>";
    containerFormulario.style.display = 'flex'
    containerFormulario.style.justifyContent = 'center'
    containerFormulario.style.alignItems = 'center'

    let imagem = document.getElementById('mario')
    imagem.style.height = '200px'
})