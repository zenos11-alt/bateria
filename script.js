document.body.addEventListener('keyup', (event) => {//adiciona um evento de tela
    playSound(event.code.toLowerCase());// e.g. 'KeyA' -> 'keya'
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;//obtém o valor do campo de entrada

    if (song !== '') {
        let songArray = song.split('');//divide a string em um array de caracteres
        playComposition(songArray);//chama a função playComposition com o array de caracteres
    }
});

function playSound (sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);//seleciona o elemento de áudio e o elemento da tecla correspondente

    if (audioElement) {
        audioElement.currentTime = 0;//reinicia o som para que ele possa ser tocado novamente imediatamente
        audioElement.play();//toca um som específico
    }

    if (keyElement) {//adiciona a classe 'active' ao elemento da tecla correspondente
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');//remove a classe 'active' após 200 milissegundos
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);//chama a função playSound para cada som na composição
        }, wait);

        wait += 250;//incrementa o tempo de espera para o próximo som
    }
}