document.addEventListener('DOMContentLoaded', () => {
    const frames = [];

    for (let i = 1; i <= 100; i++) {
        const frame = document.getElementById(`frame${i}`);
        if (frame) {
            frames.push(frame);
        }
    }
    // const frames = [];

    // // Pega de frame1 até frame70
    // for (let i = 1; i <= 80; i++) {
    //     const frame = document.getElementById(`frame${i}`);
    //     if (frame) {
    //         frames.push(frame);
    //     }
    // }
    
    // // Agora adiciona de frame70 até frame55 (animação reversa)
    // for (let i = 80; i >= 55; i--) {
    //     const frame = document.getElementById(`frame${i}`);
    //     if (frame) {
    //         frames.push(frame);
    //     }
    // }
    

    if (frames.length === 0) {
        console.warn('Nenhum frame SVG encontrado. Verifique os IDs no HTML.');
        return;
    }

    let currentFrameIndex = 0;
    const frameDuration = 50; // milissegundos por frame (ajuste aqui se quiser mais lento/rápido)

    // Cria a sequência de abertura (frames 1 até 12)
    const openingSequence = frames;

    // Cria a sequência de fechamento (frames 11 até 2)
    const closingSequence = [...frames].reverse().slice(1, -1);

    // Junta abertura + fechamento para fazer o ciclo contínuo
    const animationSequence = [...openingSequence, ...closingSequence];

    // Função que mostra um frame por vez
    function showFrame(index) {
        // Oculta todos os frames
        frames.forEach(frame => frame.classList.remove('active-frame'));

        // Exibe o frame atual da sequência
        animationSequence[index].classList.add('active-frame');
    }

    // Avança na sequência e reinicia se necessário
    function animateFrames() {
        showFrame(currentFrameIndex);
        currentFrameIndex++;

        if (currentFrameIndex >= animationSequence.length) {
            currentFrameIndex = 0; // reinicia do começo
        }
    }

    // Inicia a animação com um intervalo constante
    setInterval(animateFrames, frameDuration);

    // Mostra o primeiro frame imediatamente ao carregar
    showFrame(0);
});
