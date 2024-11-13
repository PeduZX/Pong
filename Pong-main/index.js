const movable = document.getElementById('movable');
const movable2 = document.getElementById('movable2');
const target = document.getElementById('target');
const pauseButton = document.getElementById('pause');
const playButton = document.getElementById('play');
const placar = document.getElementById('placar');

playButton.addEventListener('click', function(){
    targetSpeedX = 5;
    targetSpeedY = 5;
})
pauseButton.addEventListener('click', function(){
    targetSpeedX = 0;
    targetSpeedY = 0;
})


// Variáveis para o movimento da bola
let targetPosX = 500; // Posição inicial X do target
let targetPosY = 200; // Posição inicial Y do target
let targetSpeedX = 5; // Velocidade horizontal da bola
let targetSpeedY = 5; // Velocidade vertical da bola
const targetAreaWidth = 1000; // Largura da área de movimento
const targetAreaHeight = 490; // Altura da área de movimento
let mposx = 0;
let mposy = 0;
let m2posx = 0;
let m2posy = 0;
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
const movimento = 10;

// Função para mover o target como uma bola 
function moveTarget() {
    // Atualiza a posição do target
    targetPosX += targetSpeedX;
    targetPosY += targetSpeedY;

    // Verifica se o target bateu nas bordas horizontais (esquerda e direita)
    if (targetPosX <= 0) {
        pointsPlayer2 += 1; // Pontuação para o jogador 1
        placar.innerText = `${pointsPlayer1} x ${pointsPlayer2}`; 
        alert("Ponto para o Jogador 2!");
        resetBall(); // Reinicia a bola no centro
    } else if (targetPosX >= targetAreaWidth - target.offsetWidth) {
        pointsPlayer1 += 1; // Pontuação para o jogador 2
        placar.innerText = `${pointsPlayer1} x ${pointsPlayer2}`;
        alert("Ponto para o Jogador 1!");
        resetBall(); // Reinicia a bola no centro
    }

    // Verifica se o target bateu nas bordas verticais
    if (targetPosY <= 0 || targetPosY >= targetAreaHeight - target.offsetHeight) {
        targetSpeedY *= -1; // Inverte a direção vertical
    }

    // Atualiza o estilo CSS do target
    target.style.left = targetPosX + 'px';
    target.style.top = targetPosY + 'px';
}

// Configura um intervalo para mover o target a cada 30 milissegundos
setInterval(moveTarget, 30);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        m2posy -= movimento;
        if (m2posy < 0) {
            m2posy = 0;
        }
    } else if (event.key === 'ArrowDown') {
        m2posy += movimento;
        if (m2posy > 372) {
            m2posy = 372;
        }
   
    } else if (event.key === 'w') {
        mposy -= movimento;
        if (mposy < 0) {
            mposy = 0;
        }
    } else if (event.key === 's') {
        mposy += movimento;
        if (mposy > 372) {
            mposy = 372;
        }
    }

    movable2.style.top = m2posy + 'px';
    movable2.style.left = m2posx + 'px';
    movable.style.top = mposy + 'px';
    movable.style.left = mposx + 'px';

    checkCollision();
});

// Função para verificar a colisão entre a bola e os jogadores
function checkCollision() {
    const movableRect2 = movable2.getBoundingClientRect();
    const movableRect = movable.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // Colisão com o jogador 2 (movable2)
    if (
        targetRect.left < movableRect2.right &&
        targetRect.right > movableRect2.left &&
        targetRect.top < movableRect2.bottom &&
        targetRect.bottom > movableRect2.top
    ) {
        targetSpeedX *= -1; // Inverte a direção da bola ao colidir com movable2
    }

    // Colisão com o jogador 1 (movable)
    if (
        targetRect.left < movableRect.right &&
        targetRect.right > movableRect.left &&
        targetRect.top < movableRect.bottom &&
        targetRect.bottom > movableRect.top
    ) {
        targetSpeedX *= -1; // Inverte a direção da bola ao colidir com movable
    }
}

// Função para reiniciar a bola no centro da área de jogo
function resetBall() {
    targetPosX = targetAreaWidth / 2;
    targetPosY = targetAreaHeight / 2;

    // Define uma direção aleatória para a bola
    targetSpeedX = Math.random() > 0.5 ? 5 : -5;
    targetSpeedY = Math.random() > 0.5 ? 5 : -5;

    // Atualiza a posição visual da bola
    target.style.left = targetPosX + 'px';
    target.style.top = targetPosY + 'px';
}
