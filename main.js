
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio =  `#som_${instrumento}`; //template string
    // console.log(instrumento);
    // console.log(idAudio)
    tecla.onclick = function () {
        tocaSom(idAudio)
    } 

    tecla.onkeydown = function (evento) {

        
        console.log(evento)

        if ('Espaço') {
            tecla.classList.add('ativa')
        } else {
            tecla.classList.remove('ativa');
        }

    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}
