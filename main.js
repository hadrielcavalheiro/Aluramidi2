function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();


}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string


    tecla.onclick = function () {
        tocaSom(idAudio)
    }

const teclas = document.querySelectorAll('.tecla');
const audios = document.querySelectorAll('audio');

function pararTodosOsSons() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

function tocaSom(idSom) {
    const som = document.querySelector(idSom);
    if (som) {
        pararTodosOsSons();
        som.play();
    }
}

teclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = () => {
        tocaSom(idAudio);
    };
});

}

