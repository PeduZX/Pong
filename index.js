const raquete1 = document.getElementById('raquete1');
const raquete2 = document.getElementById('raquete2');
const bola = document.getElementById('bola');
const pauseButton = document.getElementById('pause');
const playButton = document.getElementById('play');
const placar = document.getElementById('placar');

playButton.addEventListener('click', function() {
    bolaSpeedX = 5;
    bolaSpeedY = 5;
    fase2()
});
pauseButton.addEventListener('click', function() {
    bolaSpeedX = 0;
    bolaSpeedY = 0;
    fase2()
});

// Variáveis para o movimento da bola
let bolaPosX = 500; // Posição inicial X do bola
let bolaPosY = 200; // Posição inicial Y do bola
let bolaSpeedX = 5; // Velocidade horizontal da bola
let bolaSpeedY = 5; // Velocidade vertical da bola
const bolaAreaWidth = 1000; // Largura da área de movimento
const bolaAreaHeight = 490; // Altura da área de movimento
let mposx = 0;
let mposy = 0;
let m2posx = 950; // Posicionando raquete2 à direita
let m2posy = 0;
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
const movimento = 10;

// Função para aumentar a velocidade da bola quando algum jogador atingir 5 pontos
function fase2() {
    if (pointsPlayer1 === 5 || pointsPlayer2 === 5) {
        bolaSpeedX = 7;
        bolaSpeedY = 7;
       
    }
}   

function movebola() {
    // Atualiza a posição da bola
    bolaPosX += bolaSpeedX;
    bolaPosY += bolaSpeedY;

    fase2();

    // Verifica se a bola bateu nas bordas horizontais (esquerda e direita)
    if (bolaPosX <= 0) {
        pointsPlayer2 += 1; // Pontuação para o jogador 2
        placar.innerText = `${pointsPlayer1} x ${pointsPlayer2}`;
        resetBall(); // Reinicia a bola no centro
    } else if (bolaPosX >= bolaAreaWidth - bola.offsetWidth) {
        pointsPlayer1 += 1; // Pontuação para o jogador 1
        placar.innerText = `${pointsPlayer1} x ${pointsPlayer2}`;
        resetBall(); // Reinicia a bola no centro
    }

    // Verifica se a bola bateu nas bordas verticais
    if (bolaPosY <= 0 || bolaPosY >= bolaAreaHeight - bola.offsetHeight) {
        bolaSpeedY *= -1; // Inverte a direção vertical
    }

    // Atualiza o estilo CSS da bola
    bola.style.left = bolaPosX + 'px';
    bola.style.top = bolaPosY + 'px';
}

// Configura um intervalo para mover a bola a cada 30 milissegundos
setInterval(movebola, 30);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        m2posy -= movimento;
        if (m2posy < 0) {
            m2posy = 0;
        }
    } else if (event.key === 'ArrowDown') {
        m2posy += movimento;
        if (m2posy > bolaAreaHeight - raquete2.offsetHeight) {
            m2posy = bolaAreaHeight - raquete2.offsetHeight;
        }
    } else if (event.key === 'w') {
        mposy -= movimento;
        if (mposy < 0) {
            mposy = 0;
        }
    } else if (event.key === 's') {
        mposy += movimento;
        if (mposy > bolaAreaHeight - raquete1.offsetHeight) {
            mposy = bolaAreaHeight - raquete1.offsetHeight;
        }
    }

    raquete2.style.top = m2posy + 'px';
    raquete2.style.left = m2posx + 'px';
    raquete1.style.top = mposy + 'px';
    raquete1.style.left = mposx + 'px';

    checkCollision();
});

// Função para verificar a colisão entre a bola e os jogadores
function checkCollision() {
    const movableRect2 = raquete2.getBoundingClientRect();
    const movableRect = raquete1.getBoundingClientRect();
    const bolaRect = bola.getBoundingClientRect();

    // Colisão com o jogador 2 (raquete2)
    if (
        bolaRect.left < movableRect2.right &&
        bolaRect.right > movableRect2.left &&
        bolaRect.top < movableRect2.bottom &&
        bolaRect.bottom > movableRect2.top
    ) {
        bolaSpeedX *= -1; // Inverte a direção da bola ao colidir com raquete2
    }

    // Colisão com o jogador 1 (raquete1)
    if (
        bolaRect.left < movableRect.right &&
        bolaRect.right > movableRect.left &&
        bolaRect.top < movableRect.bottom &&
        bolaRect.bottom > movableRect.top
    ) {
        bolaSpeedX *= -1; // Inverte a direção da bola ao colidir com raquete1
    }
}

// Função para reiniciar a bola no centro da área de jogo
function resetBall() {

bolaPosX = rand


    bolaPosX = bolaAreaWidth / 2;
    bolaPosY = bolaAreaHeight / 2;

    // Atualiza a posição visual da bola
    bola.style.left = bolaPosX + 'px';
    bola.style.top = bolaPosY + 'px';

}
